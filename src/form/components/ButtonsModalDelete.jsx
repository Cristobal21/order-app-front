
export const ButtonsModalDelete = ({ handleCancel, handleConfirmDelete }) => {
  return (
    <section className='flex justify-center items-end w-full'>
      <button onClick={handleCancel} className='py-4 bg-cyan-600 text-white text-center text-lg w-40 mx-4 mb-4 rounded shadow hover:cursor-pointer hover:opacity-90 active:scale-95 hover:bg-amber-400'>Cancelar</button>
      <button onClick={handleConfirmDelete} className='py-4 bg-cyan-600 text-white text-center text-lg w-40 mx-4 mb-4 rounded shadow hover:cursor-pointer hover:opacity-90 active:scale-95 hover:bg-amber-400'>Eliminar</button>
    </section>
  )
}
