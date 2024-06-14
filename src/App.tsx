import { Send, Youtube } from 'lucide-react'
import './App.css'
import { Button } from './components/Button'

function App() {

  return (
    <div className='h-screen py-10 flex flex-col gap-7 animate-fadeIn transition-opacity duration-1000'>
    <header className="flex flex-col items-center gap-3">
      <img src="../logo.png" className='w-24' />
      <section className='flex flex-col items-center'>
        <p className='text-white font-bold text-xl'>Paróquia Santo Antônio</p>
        <p className='text-white font-light italic'>@paroquiaitaitinga</p>
      </section>
    </header> 
    <main className='flex flex-col items-center gap-3'>
      <Button text='Secretaria Paroquial' link='https://wa.me/message/WAVMNOTPCQB3M1'>
      <Send color="#451a03"/>
      </Button>
      <Button text='Youtube' link='https://www.youtube.com/@paroquiasantoantoniodeitai4416'>
      <Youtube color="#451a03"/>
      </Button>
    </main>
    </div>
  )
}

export default App
