import {ResultsCharacterSchema} from '../schema/queries'
import {client} from './client'
export const getCharacters = async (charactersIds: string) => {
  const data = await client.get(`character/[${charactersIds}]`).json()

  const result = ResultsCharacterSchema.safeParse(data)
  if (!result.success) {
    throw new Error('Schema validation failed')
  }

  return result.data
}
