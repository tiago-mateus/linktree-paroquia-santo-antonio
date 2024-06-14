import { Send, Youtube } from 'lucide-react'
import './App.css'
import { Button } from './components/Button'

function App() {

  return (
    <div className='bg-gradient-to-b from-amber-950 to-orange-950 h-screen py-2 flex flex-col gap-5'>
    <header className="flex flex-col items-center gap-0.5">
      <img src="../logo.png" className='w-28' />
      <p className='text-white font-bold text-2xl'>Paróquia Santo Antônio</p>
      <p className='text-white font-light italic'>@paroquiaitaitinga</p>
    </header> 
    <main className='flex flex-col items-center gap-2'>
      <Button text='Secretaria Paroquial' link='http://wa.me/message/WAVMNOTPCQB3M1'>
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
