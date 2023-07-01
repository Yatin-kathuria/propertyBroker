import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Product from './pages/Product';
import Feedback from './pages/Feedback';
import { ContactUs } from './pages/ContactUs';
import Support from './pages/Support';
import Payment from './pages/Payment';
import { AddProduct } from './pages/AddProduct';
import BuyProperty from './pages/BuyProperty';
import Orders from './pages/Orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <section className='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/products" element={<Product />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/add-property" element={<AddProduct />} />
          <Route path="/buy-request" element={<BuyProperty />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
