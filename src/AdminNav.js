import React from 'react';
import {Navigate, NavLink,Outlet} from 'react-router-dom';

const StudentNav = () => {
    return (
        <div className='ui tabular menu'>
            <NavLink to="/Adminlogin/AdminNav/Stat"  className="item" >Check Status</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
             {/* <NavLink to="/Adminlogin/AdminNav/Edit_hostels" className="item">Edit_hostels</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
             <NavLink to="*" className="item" style={{paddingLeft:900}}>Logout</NavLink>
             <Outlet/>
        </div>
    );
};

export default StudentNav;