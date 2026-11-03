import { useEffect, useState } from 'react'
import './App.css'
import { getExchangeList, getConversionRate } from './services/getServices'

function App () {
  const [ fromCurrency, setFromCurrency ] = useState('')
  const [ toCurrency, setToCurrency ] = useState('')
  const [ currencyList, setCurrencyList ] = useState([])
  const [ fromAmount, setFromAmount ] = useState(0)
  const [ toAmount, setToAmount ] = useState(0)
  const [ error, setError ] = useState('')

  useEffect(() => {
    const tempList = async () => {
      try {
        const result = await getExchangeList()
        setCurrencyList(result)
      } catch (error) {
        console.error('Error whilst getting currencies: ', error)
        setError('Unable to load currencies.')
      }
    }
    tempList()
  }, [])

  const handleConvert = async () => {
    if (!fromCurrency || !toCurrency || fromAmount <= 0) {
      setError('Please select both currencies and enter a valid figure.')
      return;
  }

    try { 
      setError('')

      const result = await getConversionRate(
        fromCurrency,
        toCurrency,
        fromAmount
      )
      console.log(result);

      setToAmount(result)
    } catch (error) {
      console.error('Conversion failure: ', error)
      setError(error.message || 'Conversion ')
    }
  }

  return (
    <>
      <div className='w-l py-7 font-outfit rounded shadow-xl'>
        <div className='grid grid-cols-6 gap-y-5'>

          <div className='col-span-4 col-start-2 pb-5 justify-self-center'>
            <h1>Currency converter app</h1>
          </div>

          <div className='col-start-2 col-end-3 justify-self-end'>
            <div className='text-l font-bold'>From :</div>
          </div>

          <div className='col-start-3 col-end-6'>
            <select
              id='fromCurrency'
              value={fromCurrency}
              onChange={e => {
                setFromCurrency(e.target.value)
                setToAmount(0)
              }}
              className='text-l'
            >
              <option value=''>Select currency</option>

              {currencyList.map((currency, index) => (
                <option key={index} value={currency.currencyCode}>
                  {/* beware not all currencies will have an appropriate symbol attached */}
                  ({currency.currencySymbol}) - {currency.currencyName}
                </option>
              ))}
            </select>
          </div>

          <div className='col-start-2 col-end-3 justify-self-end'>
            <div className='text-l font-bold'>To :</div>
          </div>

          <div className='col-start-3 col-end-6'>
            <select
              id='toCurrency'
              value={toCurrency}
              onChange={e => {
                setToCurrency(e.target.value)
                setToAmount(0)
              }}
              className='text-l'
            >
              <option value=''>Select currency</option>

              {currencyList.map((currency, index) => (
                <option key={index} value={currency.currencyCode}>
                  ({currency.currencySymbol}) - {currency.currencyName}
                </option>
              ))}
            </select>
          </div>

          <div className='col-start-3 col-end-4 justify-self-start'>
            <div className='text-l font-bold'>Enter amount :</div>
          </div>

          <div className='col-start-4 col-end-7 justify-self-start pl-4'>
            <input
              type='number'
              min='0'
              placeholder='Enter Amount'
              value={fromAmount}
              onChange={e => {
                setFromAmount(e.target.value)
                setToAmount(0)
              }}
              className='text-l'
            />
          </div>

          <div className='col-span-4 col-start-2'>
            <button
              className='text-xl font-bold border-2 p-1'
              onClick={handleConvert}
            >
              Convert now
            </button>
          </div>

          <div className='col-span-4 col-start-2'>
            <p className='text-red-500'>{error}</p>

            <p className='text-2xl font-bold'>
              {toAmount !== 0
                ? `${fromAmount} ${fromCurrency} = ${toAmount} ${toCurrency}`
                : ''}
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App