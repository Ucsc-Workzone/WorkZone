const express=require("express");
const app=express();
const bodyParser=require("body-parser");

const loginRoute=require("./routes/auth")
const jwt=require("jsonwebtoken")
const bycrypt=require('bcrypt')
const cors=require("cors");
const db=require('./models/Index')
// dotenv.config();  
const cookieParser=require('cookie-parser')

 
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth",loginRoute);
// app.use(bodyParser.urlencoded({extended:true}));

// app.post('/api/login',(req,res)=>{
//     const username=req.body.username;
//     const password=req.body.password;
//     const sqlGet=`SELECT * FROM user where username='${username}' AND password='${password}'`;
//     db.query(sqlGet,(error,result)=>{
       
//         if(error){
//             res.send(error)
//         }

//         else{
//             if(result.length>0){
//                 res.send(result)
//             }
//             else{
//                 res.send({messege:"invalid credentials"})
//             }
           
//         }
//     })

//         // db.query(sqlGet,(error,result)=>{
//         //     "SELECT * FROM user ",
//         //     (err,result)=>{
//         //         if(err){
//         //             res.send('Jelell')
//         //         }
//         //         else{
//         //             if(result){
//         //                 res.send(result)
//         //             }
//         //             else{
//         //                 res.send({messege:"Invalid credentionals"})
//         //             }
//         //         }
//         //     }
//         //     res.send(result);
//         // })
// })

// app.get("/register",(req,res)=>{
//    res.json("rehi")

// })

// app.get("/",(req,res)=>{
// //     const insert="INSERT INTO contact_db (id,name,email,contact) VALUES (2,'John',789,123444)";
// //    connection.query(insert,(error,result)=>{
// //     console.log("error:",error);
// //     console.log("result",result);
//     res.send("Hello Express");

// //    })
   
   
// })

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})