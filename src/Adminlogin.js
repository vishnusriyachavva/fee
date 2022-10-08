import React, { useState } from 'react';
import {Navigate, NavLink,useNavigate} from 'react-router-dom';

import Axios from 'axios'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Adminlogin = () => {
   const nav=useNavigate()
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
      localStorage.setItem('Name', name);
      localStorage.setItem('Password', pwd);
      Axios.post(`http://localhost:8080/chec/${name}`).then((res) => {
      //console.log(res)
          if(res.data=="1"){
            nav('AdminNav')
          }
          else{
             alert("Unknown user")
          }
        });
     
   };
   const signup = () => {
      Axios.post("http://localhost:8080/signup",{name,pwd})
      .then(()=>
         {
            alert("SuccessFull");
         }
      )
   };
   return (
      <center>
         <br></br><br></br><br></br><br></br><br></br>
         <div className="App">
         <Form.Label>Admin_Username</Form.Label><br></br>
         <input
            placeholder="Name"
            value={name}
            className="form-control-lg"
            onChange={(e) => setName(e.target.value)}
         /><br></br><br></br>
         <Form.Label>Password</Form.Label><br></br>
         <input
            type="password"
            placeholder="Password"
            value={pwd}
            className="form-control-lg"
            onChange={(e) => setPwd(e.target.value)}
         />
         <div><br>
         </br><br></br>
         <button type="button" onClick={handle} class="btn btn-outline-secondary">Login</button>
         </div>
         <br></br>if new user please signup  <button type="button" onClick={signup} class="btn btn-outline-secondary">Signup</button>
      </div>
      </center>
   );
};
export default Adminlogin;