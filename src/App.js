import React from 'react';
import {Routes,Route} from 'react-router-dom';


import Login from './Login.jsx'
import Adminlogin from './Adminlogin.js'
import Navbar from './Navbar.jsx';
import Pagenotfound from './Pagenotfound.js';
import Signup from './Signup';
import Status from './Status'


import Fee from './Fee.js';
import StudentNav from './StudentNav.js';
import AdminNav from './AdminNav.js';

import Stat from './Stat.js';

const App = () => {
    return (
        <div >
            <Navbar/>
            <Routes>
                
                
                <Route path= "Login" element={ <Login />}/>
                
                <Route path= "Adminlogin" element={ <Adminlogin />}/>
                <Route path= "Login/StudentNav" element={ <StudentNav />}/>
                <Route path= "Adminlogin/AdminNav" element={ <AdminNav />}/>
                <Route path= "Login/StudentNav/Signup" element={ <Signup />}/>
                <Route path= "Login/StudentNav/Status" element={ <Status />}/>
                
                <Route path= "Adminlogin/AdminNav/Stat" element={ <Stat />}/>
               
                
                <Route path="Fee" element={<Fee/>}/>
                {/* <Route path= "Department" element={ <Department />}/>
                <Route path= "Students" element={ <StudentList />}>
                    <Route path=":name" element={<StudentParams/>}/>
                </Route> */} 
                
                <Route path="*" element={<Pagenotfound />}/>
                
               
            </Routes>
        </div>
    );
};

export default App;