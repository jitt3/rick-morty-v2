import {useState} from 'react'
import {CharacterSchema} from '../../schema/queries'
import loading from '/loading.svg'
const Character = ({character}: {character: CharacterSchema}) => {
  const [imageLoading, setImageLoading] = useState(true)
  const handleOnloadImg = () => {
    setImageLoading(false)
  }
  return (
    <li
      className="box-border p-2 border rounded-md p-4  w-full h-full"
      key={character.id}
    >
      <div className="flex flex-center gap-2">
        <section className="relative h-10 w-10">
          {imageLoading ? (
            <img
              src={loading}
              alt="loading"
              className='className="h-10 w-10 mr-3 absolute  left-2/4"'
            />
          ) : null}
          <img
            onLoad={handleOnloadImg}
            className={`rounded-full h-10 w-10 ${imageLoading ? 'hidden' : ''}`}
            src={character.image}
            alt="image character"
          />
        </section>
        <section className="flex flex-1">
          <ul>
            <li className="flex gap-2">
              <span className="font-bold">Name:</span>
              <span className="">{character.name}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">Gender:</span>
              <span className="">{character.gender}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">Status:</span>
              <span className="">{character.status}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">Type:</span>
              <span className="">{character.type || 'Unknown'}</span>
            </li>
          </ul>
        </section>
      </div>
    </li>
  )
}

export default Character
