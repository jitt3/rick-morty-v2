import {useState} from 'react'
import './App.css'
import EpisodesList from './components/EpisodesList'
import {useEpisodesQuery} from './hooks/episodesQuery'
import Loader from './components/Loader'

function App() {
  const [page, setPage] = useState(3)
  const {data, isLoading} = useEpisodesQuery(page)
  const handleNext = () => {
    if (!data) {
      return
    }
    const {info} = data
    if (info.next) {
      setPage((prev) => prev + 1)
    }
  }
  const handlePrev = () => {
    if (!data) {
      return
    }
    const {info} = data
    if (info.prev) {
      setPage((prev) => prev - 1)
    }
  }
  return (
    <div className="container mx-auto flex flex-col h-screen shadow-lg">
      <header className="text-lg p-4 border-b">Rick and Morty app</header>
      <main className="flex-col gap-4 p-4 flex-grow justify-center flex overflow-y-auto">
        <h1 className="text-3xl text-center p-2">Episodes</h1>
        {isLoading ? <Loader /> : <EpisodesList episodes={data?.results} />}
        <section className="flex gap-2 border p-4 rounded-md">
          <button
            className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 disabled:bg-sky-500/50"
            disabled={data?.info.prev === null}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 disabled:bg-sky-500/50"
            disabled={data?.info.next === null}
            onClick={handleNext}
          >
            Next
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
