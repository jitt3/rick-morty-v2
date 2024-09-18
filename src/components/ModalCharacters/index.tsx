import {forwardRef} from 'react'

import {useCharactersQuery} from '../../hooks/charactersQuery'
import Character from '../Character'
import loading from '/loading.svg'
const ModalCharacters = forwardRef<
  HTMLDialogElement,
  {characters: string; handleCloseDialog: () => void}
>(({characters, handleCloseDialog}, ref) => {
  const {data, isLoading} = useCharactersQuery(characters)

  return (
    <dialog
      onCancel={handleCloseDialog}
      ref={ref}
      className="w-4/5  p-4 rounded-lg custom-dialog"
    >
      <button
        className="mb-4 ml-auto p-2 rounded-lg flex items-center  text-white justify-center bg-blue-400"
        onClick={handleCloseDialog}
      >
        Close Modal
      </button>
      {isLoading ? (
        <div className="flex flex-col min-h-[80vh] max-h-[80vh] justify-center items-center">
          <img className="w-[100px] h-[100px]" src={loading} alt="loader" />
        </div>
      ) : (
        <div className="flex flex-col">
          <h2 className="text-center mb-2 text-2xl">
            Characters in this episode
          </h2>
          <ul className=" rounded-md  flex flex-col min-h-[80vh] max-h-[80vh] overflow-y-auto gap-2">
            {data?.map((character) => (
              <Character key={character.id} character={character} />
            ))}
          </ul>
        </div>
      )}
    </dialog>
  )
})

export default ModalCharacters
