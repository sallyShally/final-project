import React from 'react';
import './styles/App.css';
import { Navbar1 } from './components/navbar';
import { navArr1 } from './utils/data';
import { Navbar2 } from './components/navbar';
import { navArr2 } from './utils/data';
import { Footer } from './components/footer';
import { footerArr } from './utils/data';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { Asking } from './pages/asking';
import { Hearing } from './pages/hearing';
import { Adhd } from './pages/adhd';
import { Visual } from './pages/visual';
import { Physical } from './pages/physical';
import { Bullying } from './pages/bullying';
import { Verbal } from './pages/verbal';
import { Sexual } from './pages/sexual';
import { Profile } from './pages/profile';
import { AskingMain } from './components/askingMain';




function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar2 navItems={navArr2} />


        <div className='changingDiv'>
          <Navbar1 navItems={navArr1} />
          <div className='emptyDiv'></div>

          <BrowserRouter>
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="Home" element={< Home />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="Login" element={<Login />} />
              <Route path="Ask" element={<Asking />} >
                <Route path="" element={< AskingMain />} />
                <Route path="hearing" element={<Hearing />} />
                <Route path="adhd" element={<Adhd />} />
                <Route path="visual" element={<Visual />} />
                <Route path="bullying" element={<Bullying />} />
                <Route path="physical" element={<Physical />} />
                <Route path="verbal" element={<Verbal />} />
                <Route path="sexual" element={<Sexual />} />
                <Route path="profile" element={<Profile />} />
              </Route>

            </Routes>
          </BrowserRouter>

        </div>
        < Footer footerItems={footerArr} />

      </header >
    </div >
  );
}

export default App;
