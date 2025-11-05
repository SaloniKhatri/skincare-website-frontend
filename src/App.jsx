import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ShopAll from './pages/ShopAll.jsx'
import Skinconcern from './pages/SkinConcern.jsx'
import Ingredients from './pages/Ingredients.jsx'
import SkinType from './pages/SkinType.jsx'
import BestSeller from './pages/BestSeller.jsx'
import NewArrivals from './pages/NewArrivals.jsx'
import Blogs from './pages/Blogs.jsx'
import TrackOrder from './pages/TrackOrder.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import UserLogIn from './pages/UserLogIn.jsx'
import UserSignup from './pages/UserSignup.jsx'
import UserLogout from './pages/UserLogout.jsx'
import Profile from './pages/Profile.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/skin-concern" element={<Skinconcern />} />
        <Route path="/shop-by-ingredients" element={<Ingredients />} />
        <Route path="/shop-by-skin-type" element={<SkinType />} />
        <Route path="/best-seller" element={<BestSeller />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<UserLogIn />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/logout" element={<UserLogout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      

        <Footer />


    

    </>
  )
}

export default App
