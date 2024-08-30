import { Button } from './components/Button'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'
import { FacebookLogo,  FilePdf, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'
import { Analytics } from '@vercel/analytics/react'

const buttonData = [
  {
    id: 1,
    text: 'Secretaria Paroquial',
    link: 'https://wa.me/message/WAVMNOTPCQB3M1',
    className: 'opacity-0 animate-fadeIn500',
    icon: <WhatsappLogo size={32} color="#451a03" />,
  },
  {
    id: 2,
    text: 'Youtube',
    link: 'https://www.youtube.com/@paroquiasantoantoniodeitai4416',
    className: 'opacity-0 animate-fadeIn1000',
    icon: <YoutubeLogo size={32} color="#451a03" />,
  },
  {
    id: 3,
    text: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100008817789375',
    className: 'opacity-0 animate-fadeIn1500',
    icon: <FacebookLogo size={32} color="#451a03" />,
  },
  {
    id: 4,
    text: 'Calendário do Mês',
    link: '../.../public/Calendario_de_Setembro_2024.pdf',
    className: 'opacity-0 animate-fadeIn1500',
    icon: <FilePdf size={32} color="#451a03" />,
  }
]

export default function App(){
  return (
    <div className='flex flex-col py-5 gap-5'>
      <Header />
      <main className='flex flex-col items-center gap-3'>
        {buttonData.map(({ text, link, className, icon, id }) => (
          <Button 
            key={id}
            text={text}
            link={link}
            className={className}
          >
            {icon}
          </Button>
        ))}
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}