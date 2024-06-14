import { Facebook, Send, Youtube } from 'lucide-react'
import './App.css'
import { Button } from './components/Button'

function App() {
  return (
    <div className='py-10 flex flex-col h-full gap-7'>
      <header className="flex flex-col items-center gap-3 ">
        <div className="bg-white rounded-full instagram">
          <img src="../logo.png" className='w-24' />
        </div>      
        <section className='flex flex-col px-5 items-center '>
          <p className='text-white font-bold md:text-xl sm:text-lg text-center'>Paróquia Santo Antônio de Itaitinga</p>
          <p className='text-white font-light italic text-sm'>@paroquiasantoantonioitaitinga</p>
        </section>
      </header> 
      <main className='flex flex-col items-center gap-5 '>
        <Button text='Secretaria Paroquial' link='https://wa.me/message/WAVMNOTPCQB3M1'
          className='opacity-0 animate-fadeIn500' >
          <Send color="#451a03"/>
        </Button>
        <Button text='Youtube' link='https://www.youtube.com/@paroquiasantoantoniodeitai4416'
          className='opacity-0 animate-fadeIn1000'>
          <Youtube color="#451a03"/>
        </Button>
        <Button text='Facebook' link='https://www.facebook.com/profile.php?id=100008817789375'
          className='opacity-0 animate-fadeIn1500'>
          <Facebook color="#451a03"/>
        </Button>
      </main>
      <footer className='flex justify-center items-center h-32'>
        <img src="../logo-pascom.png" className='w-24' />
      </footer>
    </div>
  )
}

export default App
