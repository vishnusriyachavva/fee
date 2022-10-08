import React from 'react';
import {Navigate, NavLink,Outlet} from 'react-router-dom';

const StudentNav = () => {
    const handle = (event) => {

        localStorage.setItem('Name', "");
        localStorage.setItem('Password', "");
        
     };
    return (
        <div className='ui tabular menu'>
            <NavLink to="/Login/StudentNav/Signup"  className="item" >Register</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/Login/StudentNav/Status" className="item">Status</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
             <NavLink to="*" className="item" style={{paddingLeft:900}} onClick={handle}>Logout</NavLink>
             <Outlet/>
        </div>
    );
};

export default StudentNav;