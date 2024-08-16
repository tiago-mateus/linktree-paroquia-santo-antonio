export function Header(){
    return (
      <header className="flex flex-col items-center animate-fadeInAll">
        <div className="bg-white rounded-full instagram animate-instagramBorder">
          <img src="../logo-min-2.png" className='w-24 h-24' />
        </div>      
        <section className='flex flex-col px-5 items-center '>
          <p className='text-white font-bold md:text-xl sm:text-lg text-center'>Paróquia Santo Antônio</p>
          <p className='text-white font-light italic'>@paroquiaitaitinga</p>
        </section>
      </header> 
    )
}