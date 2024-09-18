import {z} from 'zod'

export const InfoEpisodeSchema = z.object({
  count: z.number(),
  pages: z.number(),
  next: z.string().nullable(),
  prev: z.string().nullable(),
})

export const EpisodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  air_date: z.string(),
  episode: z.string(),
  characters: z.array(z.string()),
  url: z.string(),
  created: z.string(),
})
export type EpisodeSchema = z.infer<typeof EpisodeSchema>
export const ResultsEpisodeSchema = z.object({
  info: InfoEpisodeSchema,
  results: z.array(EpisodeSchema),
})
export type ResultsEpisodeSchema = z.infer<typeof ResultsEpisodeSchema>

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  species: z.string(),
  type: z.string(),
  gender: z.string(),
  origin: z.object({
    name: z.string(),
    url: z.string(),
  }),
  location: z.object({
    name: z.string(),
    url: z.string(),
  }),
  image: z.string(),
  episode: z.array(z.string()),
  url: z.string(),
  created: z.string(),
})
export const ResultsCharacterSchema = z.array(CharacterSchema)
export type ResultCharacterSchema = z.infer<typeof ResultsCharacterSchema>
export type CharacterSchema = z.infer<typeof CharacterSchema>
