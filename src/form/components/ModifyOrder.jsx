
export const ModifyOrder = ({ showModal, children }) => {
  return (
    <>
      {showModal && (
        <section className='flex justify-self-center items-center justify-center fixed rounded pb-80 top-0 left-0 w-full h-auto bg-black bg-opacity-50'>
          <section className='w-auto mx-2 my-10 bg-white rounded-lg p-4 pb-8 flex flex-col items-center'>
            {children}
          </section>
        </section>
      )}
    </>
  )
}
