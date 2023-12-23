export const BASE = process.env.NEXT_PUBLIC_USE_MOCK ?
  '/api/mock/' :
  'https://official-joke-api.appspot.com/'

export const BASE_POST = process.env.NEXT_PUBLIC_USE_MOCK ?
  '/api/mock/' :
  'https://httpbin.org/'

export const jokeQueryKey = 'randomJoke'
