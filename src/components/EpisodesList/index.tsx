import {useRef, useState} from 'react'
import {EpisodeSchema} from '../../schema/queries'
import ModalCharacters from '../ModalCharacters'
type EpisodeListProps = {
  episodes: Array<EpisodeSchema> | undefined
}
const EpisodesList = ({episodes}: EpisodeListProps) => {
  const dialog = useRef<HTMLDialogElement | null>(null)
  const [characters, setCharacters] = useState('')
  const handleOpenDialog = (id: number) => {
    if (dialog.current && episodes) {
      const episode = episodes.find((episode) => episode.id === id)
      if (episode) {
        const characterIds = episode.characters
          .reduce<Array<string>>((acc, character) => {
            const id = character.split('/').at(-1)
            if (id) {
              acc.push(id)
            }
            return acc
          }, [])
          .join(',')
        setCharacters(characterIds)
      }

      dialog.current.showModal()
    }
  }
  const handleCloseDialog = () => {
    if (dialog.current) {
      setCharacters('')
      dialog.current.close()
    }
  }
  return (
    <section className="flex h-full w-full overflow-y-auto box-border border p-2  rounded-md">
      <ModalCharacters
        ref={dialog}
        handleCloseDialog={handleCloseDialog}
        characters={characters}
      />

      <ul>
        {Array.isArray(episodes) &&
          episodes.map((episode) => {
            return (
              <li className="box-border p-4" key={episode.id}>
                <a
                  onClick={() => {
                    handleOpenDialog(episode.id)
                  }}
                  href="#"
                >
                  {episode.name}
                </a>
              </li>
            )
          })}
      </ul>
    </section>
  )
}

export default EpisodesList
