import loading from '/loading.svg'
const Loader = () => {
  return (
    <div className="justify-center items-center flex h-full w-full">
      <img className="w-[100px] h-[100px]" src={loading} alt="Loading..." />
    </div>
  )
}

export default Loader
