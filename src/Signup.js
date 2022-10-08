import React from 'react';
import {NavLink,Outlet} from 'react-router-dom';
import {useState} from 'react'
import StudentNav from './StudentNav';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Signup = () => {
    
            
const[login,setlogin]=useState({
  named:"",
  pass:"",
  br:"",
  ge:"",
  hostel:""
});

const inputhandle=(e)=>{
  const names=e.target.name;
  const value=e.target.value;
  console.log(value)
  setlogin({...login,[names]:value});
  

};

  const submit=(eve)=>{
    eve.preventDefault();
    console.log(login)
    console.log(login.named);
    console.log(login.pass);
  };

  const handle=()=>{
    Axios.post("http://localhost:8080/insert",login)
    .then(()=>
       {
          alert("SuccessFull");
       }
    )
  }
  return (
    
    <div align="center"> 
    <StudentNav />
    <br></br><br></br>
    <h1>Student Details Form</h1>
    <br></br><br></br>
    <form onSubmit={submit} className="mb-4">
        
         <input type="text"
         name="named"
         placeholder='RegNo'
         value={login.named}
       className="form-control-lg"
        onChange={inputhandle}
         />
         <br/>
         <br/>
         <input type="text"
         placeholder='Upi id'
         name="pass"
         value={login.pass}
         className="form-control-lg"
        onChange={inputhandle}
         
         />
         <br/>
         <br/>
         <input type="text"
         placeholder='branch'
         name="br"
         value={login.br}
         className="form-control-lg"
        onChange={inputhandle}
         
         />
         <br/>
         <br/>
         <input type="text"
         name="hostel"
         placeholder='Hostel details'
         value={login.hostel}
         className="form-control-lg"
        onChange={inputhandle}
         /><br></br><br></br>
         <table>
           <tr>
             <td>
             <input type="date"
         
         name="ge"
         value={login.ge}
        
        onChange={inputhandle}
         
         />
             </td>
             
           </tr>
         </table>
         
         
         
         
         
         <br/>
         <button onClick={handle} class="btn btn-outline-secondary">Register</button>
         </form>
    </div>
  )
}


export default Signup;