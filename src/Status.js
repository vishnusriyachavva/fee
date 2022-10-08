import React,{useState,useEffect} from 'react';
import StudentNav from './StudentNav';
import axios from 'axios';
const Status = () => {
    const stid = localStorage.getItem('Name');
    const [evv, setevv] = useState([]);
    //const [statement,setStatement] = useState("");
   
    useEffect(() => {
        axios.get("http://localhost:8080/Results").then((res) => {
          setevv(res.data);
          
          
        });
      }, []);
      let statement = ""
      evv.map((val) => {
        if(val.stid == stid){
              statement = val.result
           
        }
        
    })

console.log(statement)
let b;
if(statement== 'r'){
b="rejected";
}
else if(statement=="a"){
b = "accepted";
}
else{
    b="pending";
}
//const b = statement== 'r' ? "Rejected" : "Accepted";
    return (
        <div>
            <StudentNav />
            <center><h1>{b}</h1></center>
        </div>
    );
};

export default Status;