import {useQuery} from '@tanstack/react-query'
import {getEpisode} from '../api/getEpisode'

export const useEpisodesQuery = (page: number) => {
  return useQuery({
    queryKey: ['episodes', page],
    queryFn: () => getEpisode(page),
  })
}
