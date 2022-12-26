function Error({mensaje}) {
  return (
    <>
       <div className='w-full text-center uppercase font-semibold bg-red-700 rounded-lg mb-5 text-white p-3'>

            <p>{mensaje}</p>
    
       </div>   
    </>
  )
}

export default Error