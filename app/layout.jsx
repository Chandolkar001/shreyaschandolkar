  import './globals.css'
  // components
  import Navbar from './components/Navbar'
  import ParticleBackground from './components/background_comp'
import Footer from './components/Footer'

  export const metadata = {
    title: 'Shreyas Chandolkar',
    description: 'Portfolio',
  }

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className='main-div text-cyberpunk-pink bg-cyberpunk-bg border-cyberpunk-border flex flex-col min-h-screen'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
      </html>
    )
  }