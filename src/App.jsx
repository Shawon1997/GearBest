

import './App.css';

import { Navbar } from "./components/Navbar";
import { LandingPage } from './components/landingPage';
import { Routes, Route } from "react-router-dom";

import { SignInPage } from './components/auth';
//import { AllRoutes } from './components/allRoutes';
import {useDispatch, useSelector} from "react-redux"
import { Category } from './components/allCatagory';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/pages/Cart';
import { CartPage } from './components/CartPage';
import { KitchenDetail } from './components/KitchenDetail';
import { LaptopDetail } from './components/LaptopDetail';
import { ScienceDetail } from './components/ScienceDetail';
import { MobileDetail } from './components/MobileDetail';
import { CycleDetail } from './components/CycleDetail';
import { Shipping } from './components/Shipping';
import { Confirm } from './components/Confirm';
import { Payment } from './components/Payment';
import { Footer } from './components/Footer';
import { Mobile } from './components/mobile';
import { Product } from './components/product';





function App() {

  const status = useSelector((store)=>{
    return store.isLogin.isLogin
  })

 // console.log(status)

  return (
    <div className="App">
      <Navbar />
      <Routes>
    <Route path="/auth" element={<SignInPage/>}></Route>
    <Route path="" element={<LandingPage />}></Route>
  
        
        <Route path="/catagorys" element={<Category />}></Route>
        
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/productDetails/cart/:id" element={<Cart/>}></Route>
        <Route path='/cartPage' element={<CartPage />}></Route>
        <Route path='/KitchenDetail/:id' element={<KitchenDetail/>}></Route>
        <Route path='/LaptopDetail/:id' element={<LaptopDetail />}></Route>
        <Route path='/ScienceDetail/:id' element={<ScienceDetail />}></Route>
        <Route path='/MobileDetail/:id' element={<MobileDetail />}></Route>
        <Route path="/CycleDetail/:id" element={<CycleDetail/>}></Route>
        <Route path="/shipping" element={<Shipping/>}></Route>
        <Route path="/order" element={<Confirm/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/mobile" element={<Mobile/>}></Route>
        <Route path="/product" element={<Product/>}></Route>

     
    </Routes>
   <Footer/>
     
      
   
    </div>
  );
}

export default App;

