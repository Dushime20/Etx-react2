
import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';

  import Welcome from './Welcome.jsx';
import Product from './Product.jsx';
import About from './About.jsx';
import Footer from '../Footer/footer.jsx';


const Home = () => {
  return (
    <>
    <div className='left-0'>
       
     <Navbar/>
      <Welcome/>
      <About/>
      <Product/>
      <Footer/>
    </div>
    </>
  )
}

export default Home;
