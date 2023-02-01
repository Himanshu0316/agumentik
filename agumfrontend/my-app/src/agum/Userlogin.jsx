import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router";
import styles from './Main.module.css'
function Userlogin() {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  
  
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = "http://localhost:8080/api/auth";
      const res = await axios.post(url, data);

     var token = res.data.message;
      var user = res.data.userdata;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      console.log(res);
      alert(res.data.message);
       navigate("/admin")
     

      console.log(res.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (

    <div className={styles.logDiv}>

      <form className={styles.formDivs} onSubmit={handleSubmit}>

        
        <input className={styles.inPuts} type="email" name='email' placeholder='Email' value={data.email} required onChange={handleChange} />
        <input className={styles.inPuts}  type="password" name='password' placeholder='Password' value={data.password} required onChange={handleChange} />

        <input className={styles.inPuts} type="submit" value='submit' />

      </form>
    </div>

  )

}

export default Userlogin;