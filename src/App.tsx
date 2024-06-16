import { Facebook, Send, Youtube } from 'lucide-react'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
  <div className='flex flex-col py-5 gap-5'>
    <Header />
    <main className='flex flex-col items-center gap-3'>
      <Button 
        text='Secretaria Paroquial' 
        link='https://wa.me/message/WAVMNOTPCQB3M1'
        className='opacity-0 animate-fadeIn500'
        >
        <Send color="#451a03" />
      </Button>
      <Button 
        text='Youtube'
        link='https://www.youtube.com/@paroquiasantoantoniodeitai4416'
        className='opacity-0 animate-fadeIn1000'
        >
        <Youtube color="#451a03"/>
      </Button>
      <Button 
        text='Facebook' 
        link='https://www.facebook.com/profile.php?id=100008817789375'
        className='opacity-0 animate-fadeIn1500'
        >
        <Facebook color="#451a03"/>
      </Button>
    </main>
    <Footer/>
  </div>
  )
}

export default App