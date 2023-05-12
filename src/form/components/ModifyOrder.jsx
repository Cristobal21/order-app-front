
export const ModifyOrder = ({ showModal, children }) => {
  return (
    <>
      {showModal && (
        <section className='flex justify-self-center items-center justify-center fixed rounded pb-80 top-0 left-0 w-full h-full bg-black bg-opacity-50'>
          <section className='w-11/12 lg:w-5/12 lg:px-6  mt-80 bg-white rounded-lg p-4 pb-8 flex flex-col items-center'>
            {children}
          </section>
        </section>
      )}
    </>
  )
}
