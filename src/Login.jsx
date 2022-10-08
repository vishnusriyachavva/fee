import React, { useState } from 'react';
import {Navigate, NavLink,useNavigate} from 'react-router-dom';
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormControl } from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {
   const nav=useNavigate()
   
  
   const [stid, setstid] = useState('');
   const [stname, setstname] = useState('');
  
   const handle = (event) => {

      localStorage.setItem('Name', stid);
      localStorage.setItem('Password', stname);
      event.preventDefault();
   
   Axios.post(`http://localhost:8080/check/${stid}`).then((res) => {
      //console.log(res)
          if(res.data=="1"){
            nav('StudentNav')
          }
          else{
             alert("Unknown user")
          }
        });
      
   };
   const signup = () => {
      Axios.post("http://localhost:8080/sign",{stid,stname})
      .then(()=>
         {
            alert("SuccessFull");
         }
      )
   };
   
   return (
      <center>
         <div className="App">
            <br></br><br></br><br></br><br></br><br></br> 
            {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student_Username</Form.Label><br></br>
        <input
            placeholder="student_id"
            value={stid}
            className="form-control-lg"
            onChange={(e) => setstid(e.target.value)}
         /><br></br>
        {/* <Form.Control type="email" placeholder="Enter email" value={stid} onChange={(e) => setstid(e.target.value)} className="form-control-md"/> */}
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <br></br>
         {/* <h2>Student Username :</h2><br></br>
         <input
            placeholder="Name"
            value={stid}
            className="form-control-lg"
            onChange={(e) => setstid(e.target.value)}
         /> */}
         {/* <br></br><br></br><br></br> */}
         <Form.Label>Password</Form.Label><br></br>
         <input
            type="password"
            placeholder="Password"
            value={stname}
            className="form-control-lg"
            onChange={(e) => setstname(e.target.value)}
         />
         <div><br>
         </br><br></br>
         <button type="button" onClick={handle} className="btn btn-outline-secondary">Login</button>
            {/* <button onClick={handle} className="btn-dark">Submit</button> */}
         </div>
         <br></br>if new user please signup  <button type="button" onClick={signup} class="btn btn-outline-secondary">Signup</button>
      </div>
      </center>
   );
};
export default Login;