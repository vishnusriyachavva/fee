const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = mysql.createPool({
    connectionLimit:12,
    host:"localhost",
    user:"root",
    password:"",
    database:"mini_project"
})
db.getConnection((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Success")
    }
})
app=express()
// app.get("/",(req,res)=>{
//     console.log("server is started")
// })
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.get("/report",(req,res)=>{
//     console.log("reporting")
//     db.query("select * from student_details",(err,result)=>{
//         if(err){
//             console.log("error")
//         }
//         else{
//             console.log("hurrah result")
//             res.send(result)
//         }
//     })
// })
app.get("/Report",(req,res)=>{
    
    const sql = "select * from register"
    db.query(sql,(err,result)=>{
        
        res.send(result)
        
    })
})
app.post("/insert",(req,res)=>{
    const{named,pass,br,hostel,ge} = req.body
    
    const sql = "insert into register(stid,upiid,branch,hostel,date) values(?,?,?,?,?)"
    db.query(sql,[named,pass,br,hostel,ge],(err,result)=>{
        if (err) throw err
        else{
           
            res.end()
        }
    })
})


app.post("/signup",(req,res)=>{
    const name = req.body.name;
    const pwd = req.body.pwd;
    
    const sql = "insert into admin_details(name,pwd) values(?,?)"
    db.query(sql,[name,pwd],(err,result)=>{
        if (err) throw err
        else{
           
            res.end()
        }
    })
})

app.post("/sign",(req,res)=>{
    const stid = req.body.stid;
    const stname = req.body.stname;
    
    const sql = "insert into student_details(stid,stname) values(?,?)"
    db.query(sql,[stid,stname],(err,result)=>{
        if (err) throw err
        else{
           
            res.end()
        }
    })
})

app.post("/check/:stid",(req,res)=>{
    const stid = req.params.stid;
    //const stname = req.body.stname;
    
    const sql = "Select stid from student_details where stid=?"
    db.query(sql,[stid],(err,result)=>{
        if (err) throw err
        else if(result.length==1){
            res.send("1")
        }
        else{
            res.send("0")
        }
    })
})


app.post("/chec/:name",(req,res)=>{
    const name = req.params.name;
    //const stname = req.body.stname;
    
    const sql = "Select name from admin_details where name=?"
    db.query(sql,[name],(err,result)=>{
        if (err) throw err
        else if(result.length==1){
            res.send("1")
        }
        else{
            res.send("0")
        }
    })
})



app.post("/ins/:stid",(req,res)=>{
    const st = req.params.stid;
    const result = st[st.length-1]
    const stid = parseInt(st.slice(0, -1));
    // console.log(stid)
    const sql = "insert into res(stid,result) values(?,?)";
    db.query(sql,[stid,result],(err,result)=>{
        if (err) throw err
        else{
           
            res.end()
        }
    })
})


app.post("/del/:stid",(req,res)=>{
    const st = req.params.stid;
    const result = st[st.length-1]
    const stid = parseInt(st.slice(0, -1));
    // console.log(stid)
    const sql = "delete from register where stid=?"
    db.query(sql,[stid,result],(err,result)=>{
        if (err) throw err
        else{
           
            res.end()
        }
    })
})

app.get("/Results",(req,res)=>{
    
    const sql = "select * from res"
    db.query(sql,(err,result)=>{
        
        res.send(result)
        
    })
})

// app.post("/del",(req,res)=>{
//     const stid=req.body.stid;
    
//     const sql = "delete from student_details where student_details.stid=?"
//     db.query(sql,[stid],(err,result)=>{
//         if (err) throw err
//         else{
//             res.send("success")
            
//         }
//     })
// })

app.listen(8080,()=>{
    console.log("server is listening")
})