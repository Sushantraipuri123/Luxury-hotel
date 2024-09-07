import { Outlet } from 'react-router-dom'
import Header from './utilities/header/Header'
import Footer from './utilities/footer/Footer'
import ScrollToTopButton from './components/scrollToTop/ScrollToTop'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}

export default Layout