import {ResultsEpisodeSchema} from '../schema/queries'
import {client} from './client'
export const getEpisode = async (page: number) => {
  const data = await client
    .get('episode', {
      searchParams: {page},
    })
    .json()

  const result = ResultsEpisodeSchema.safeParse(data)
  if (!result.success) {
    throw new Error('Schema validation failed')
  }

  return result.data
}
