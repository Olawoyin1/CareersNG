import { Outlet } from 'react-router'
import ScrollToTop from '../ScrollToTop'
import Navbar from './Navbar'
import Footer from './Footer'

const SharedLayout = () => {
  return (
    <div>
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout