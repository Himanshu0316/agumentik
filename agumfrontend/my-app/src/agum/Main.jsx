import React from 'react';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';
import Usersignup from './Usersignup';
import Userlogin from './Userlogin';


import Home from './Home';

import User from './User';

import Admin from './Admin';
import styles from './Main.module.css'
function Main() {
 
    return (
      <div className={styles.Main}>
       
         <Navbar/>
         <Routes>
        
            
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>} />
        <Route path='/userlogin' element={<Userlogin/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/usersignup' element={<Usersignup/>}/>
        
    </Routes>
      </div>
  
    );
  }
  
  export default Main;