import {useQuery} from '@tanstack/react-query'
import {getCharacters} from '../api/getCharacters'

export const useCharactersQuery = (charactersIds: string) => {
  return useQuery({
    queryKey: ['character', charactersIds],
    queryFn: () => getCharacters(charactersIds),
    enabled: Boolean(charactersIds),
  })
}
