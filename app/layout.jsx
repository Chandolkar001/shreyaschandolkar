  import './globals.css'
  // components
  import Navbar from './components/Navbar'
  import ParticleBackground from './components/background_comp'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

  export const metadata = {
    title: 'Shreyas Chandolkar',
    description: 'Portfolio',
  }

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className='main-div flex flex-col min-h-screen'>
        <ThemeToggle/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
      </html>
    )
  }