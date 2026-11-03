// token below will be read from .env, incase you havent followed instructions in the read.me ;)
const API_KEY = import.meta.env.VITE_API_TOKEN
const BASE_URL = '/api/v1'

async function get(endpoint, params = {}) {
  const query = new URLSearchParams({ api_key: API_KEY, ...params })
  const response = await fetch(`${BASE_URL}/${endpoint}?${query}`)

  // checking for errors manually, since fetch doesnt throw 400/ 500s
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  const data = await response.json()

  return data.response
}

// mapping available currencies from API
export async function getExchangeList() {
  const currencies = await get('currencies')

  return currencies.map(currency => ({
    currencyCode: currency.short_code,
    currencyName: currency.name,
    currencySymbol: currency.symbol
  }))
}

export async function getConversionRate(from, to, amount) {
  const result = await get('convert', { from, to, amount })

  return Number(result.value).toFixed(2)

  // rounded to 2 decimal places for display
}