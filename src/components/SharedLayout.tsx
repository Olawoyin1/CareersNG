import { Outlet } from 'react-router'
import ScrollToTop from '../ScrollToTop'
import Navbar from './Navbar'

const SharedLayout = () => {
  return (
    <div>
        <Navbar />
        <ScrollToTop />
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default SharedLayout