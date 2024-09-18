import ky from 'ky'

export const client = ky.create({
  prefixUrl: 'https://rickandmortyapi.com/api/',
})
