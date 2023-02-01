import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getDataError, getDataReq, getDataSuccess} from './agumdata/action';
import styles from './Main.module.css'
function Admin() {
    
  const [datas,setDatas] = useState({});
  const { isLoading, isError, data } = useSelector((state) => state.alldata);
//   const handleSubmit = (e)=>{
//     e.preventDefault();
//    console.log(data)
//   }
  const handleChange = (e)=>{
    
    const {name , value} = e.target;
    setDatas({
        ...datas,
      [name]:value,
    })

    console.log(datas)
  }
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log(datas)
    e.preventDefault();
    const payload = {
      ...datas,
      status: false,
    };

    fetch("http://localhost:3004/data", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }).then(() => {
      dispatch(getDataReq());
      fetch("http://localhost:3004/data")
        .then((res) => res.json())
        .then((data) => dispatch(getDataSuccess(data)))
        .catch(() => dispatch(getDataError()));
    });
    
  };

 console.log(data)
 var token = localStorage.getItem("token")
    return  !token ? (
           <h1><NavLink className={styles.navLinks} to={"/user"}>Login</NavLink></h1>
    
     ):( <div className={styles.logDivs}>
           <form onSubmit={handleSubmit} className={styles.formDivs}>
            <input className={styles.inPuts} type="text" name='image_url' placeholder=' Place imgurl' onChange={handleChange} />
            <input
          className={styles.inPuts}
          type="text"
          name="firstName"
          placeholder='First Name'
          onChange={handleChange}
          
        />
        <input
          className={styles.inPuts}
          type="text"
          name="lastName"
          placeholder='Last Name'
          onChange={handleChange}
        
        />
            <input className={styles.inPuts} type="number" name='cost' placeholder='Cost' onChange={handleChange} /><br />
            <input className={styles.inPuts} type="submit" value='submit' />

           </form>
           {data.map((el)=>(
             <div key={el.id} className={styles.flexDiv}>
                
                    <p className={styles.p1Tag}>
                        {el.id}
                    </p>
                    <img className={styles.imgUrl} src={el.image_url} alt="" />
                    <p className={styles.p1Tag}>
                        {el.cost}
                    </p>
                    <p className={styles.p1Tag}>
                        {el.firstName}
                    </p>
                    <p className={styles.p1Tag}>
                        {el.lastName}
                    </p>
                    
                
                
             </div>
           ))}
      </div>
  
    );
  }
  
  export default Admin;