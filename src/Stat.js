import React,{useState,useEffect} from 'react';
import AdminNav from './AdminNav';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Stat = () => {
    const [ev, setev] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/Report").then((res) => {
          setev(res.data);
        });
      }, []);

      const handle = (stid) => {
        axios.post(`http://localhost:8080/ins/${stid}`).then((res) => {
          alert("successfull");
        });
        axios.post(`http://localhost:8080/del/${stid}`).then((res) => {
          // alert("successfull");
        });
      }
    return (
        <div>
            <AdminNav />
            <table className="ui celled table">
          <thead>
            <tr>
              <th>Id</th>
              <th>upi_id</th>

              <th>Branch</th>
              <th>Hostel Details</th>
              <th>Date</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {ev.map((val) => {
              return (
                <tr key={val.stid}>
                  <td data-label="Name">{val.stid}</td>
                  <td data-label="Age">{val.upiid}</td>
                  <td data-label="Age">{val.branch}</td>
                  <td data-label="Name">{val.hostel}</td>
                  <td data-label="Age">{val.date}</td>
                  <td data-label="Name" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="btn btn-success" onClick={() => {
                            handle(val.stid+"a");
                          }}>Accepted</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-danger"
                          onClick={() => {
                            handle(val.stid+"r");
                          }}>Rejected</button></td>
                </tr>
                
              );
            })}
          </tbody>
        </table>
        </div>
    );
};

export default Stat;