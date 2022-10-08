import React from 'react';
import {Navigate, NavLink,useNavigate} from 'react-router-dom';

const Navbar = () => {
    // const nav=useNavigate()
    // const logout=()=>{
    //     nav('home');
    // }
    // const goBack=()=>{
    //     nav(-1);
    // }
    const changeStyle=({isActive})=>{
        return{
        color:isActive?'red':'gray'
    
    }
    }
    return (
        <div className='ui inverted menu'>
            
            <NavLink to="Login"  className="item" style={{changeStyle}}>StudentLogin</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="Adminlogin" className="item">AdminLogin</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <NavLink to="Fee" className="item">HostelFee Details</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <NavLink to="Students" style={changeStyle}>Students</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  */}
            {/* <button onClick={logout}>logout</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            {/* <button onClick={goBack}>GoBack</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        </div>
    );
};
export default Navbar;