
export const ModalFormMsg = ({ message }) => {
  return (
    <section className='w-full rounded shadow bg-slate-800 py-12 absolute'>
      <p className='text-center text-white text-4xl w-full h-auto'>{message}</p>
    </section>
  )
}
