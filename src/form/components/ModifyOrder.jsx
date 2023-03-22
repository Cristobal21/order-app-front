
export const ModifyOrder = ({ showModal, children }) => {
  return (
    <>
      {showModal && (
        <section className='flex justify-self-center items-center justify-center fixed border border-solids rounded-md top-0 left-0 w-full h-full bg-black bg-opacity-50'>
          <section className='w-auto mx-auto my-10 bg-white rounded-lg p-5 flex flex-col items-center'>
            {children}
          </section>
        </section>
      )}
    </>
  )
}
