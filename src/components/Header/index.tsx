export function Header(){
    return (
      <header className="flex flex-col items-center">
        <div className="bg-white rounded-full instagram animate-instagramBorder">
          <img src="../logo-min.png" className='w-24' />
        </div>      
        <section className='flex flex-col px-5 items-center '>
          <p className='text-white font-bold md:text-xl sm:text-lg text-center'>Paróquia Santo Antônio de Itaitinga</p>
          <p className='text-white font-light italic text-sm'>@paroquiasantoantonioitaitinga</p>
        </section>
      </header> 
    )
}