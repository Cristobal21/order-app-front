
export const ModalEmptyList = ({ empty, message }) => {
  return (
    <>
      {empty && (
        <section className='fixed flex items-center justify-center lg:w-auto h-24 py-6 lg:px-32 w-full bg-yellow-500 text-center rounded'>
          <p className='text-2xl text-slate-900 w-80 break-words'>{message}</p>
        </section>
      )}
    </>
  )
}
