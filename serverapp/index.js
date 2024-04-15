// const express=require('express');
// const cors = require("cors")
// const app=express()
// app.use((cors()));
// const port=3000;
// app.get("/menu", (req, res)=>{
//     res.json({
//         "status": 200,
//         "data":[
//             {
//                 "path": "./homepage",
//                 "name": "Home"
//               },
//               {
//                 "path": "./contact",
//                 "name": "contact"
//               },
//               {
//                 "path": "./product",
//                 "name": "product"
//               },
//         ]
//     })
// }
// )

// app.listen(port,()=>{
//     console.log("starting...");
// })
const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const app=express();
const bodyParser=require('body-parser')
const port=3030;
const connection=mysql.createConnection({
    // host:"localhost",
    // port: 3307,
    // user:'root',
    // password:"",
    // database:"data"
    host: "sql6.freesqldatabase.com",
    port: 3306,
    user: "sql6698675",
    password: "yNeSv5DBCY",
    database: "sql6698675"
})
connection.connect((err)=>{
   (err)?console.log("error"):console.log("connect");;

  });
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
      extended:true
  }))
  
app.use(cors());
app.use('/menu', (req,res,next)=>{
    //data.menu
    connection.query('SELECT * FROM data;', (error,rows,result)=>{
        if(!error){
            res.status(200).json({data: rows});
        }
    })
})
app.use('/product', (req,res,next)=>{
    //data.sanpham
    connection.query('SELECT * FROM data;', (error,rows,result)=>{
        if(!error){
            res.status(200).json({data: rows});
        }
    })
})
app.use('/imgtt', (req,res,next)=>{
    //data.img_thanh_toan
    connection.query('SELECT * FROM data;', (error,rows,result)=>{
        if(!error){
            res.status(200).json({data: rows});
        }
    })
})
app.use('/infor', (req,res,next)=>{
    //data.infor;
    connection.query('SELECT * FROM data;', (error,rows,result)=>{
        if(!error){
            res.status(200).json({data: rows});
        }
    })
})
app.use('/icon', (req,res,next)=>{
    //data.icon
    connection.query('SELECT * FROM data;', (error,rows,result)=>{
        if(!error){
            res.status(200).json({data: rows});
        }
    })
})
app.post('/user',(req,res,next)=>{
    //data.user
    var sql='SELECT * FROM data WHERE user="'+req.body.user+'" AND password="'+req.body.password+'"'
    // console.log(sql);
    connection.query(sql,(error,rows,result)=>{
        if(rows.length!==0){
            res.status(200).json({data:true})
        }else{
            res.status(200).json({data:false})
        }
})
})
app.get('/products',(req, res, next)=>{
    //data.sanpham
    connection.query('SELECT * FROM data;',(error,rows,result)=>{
        if(!error){
            res.status(200).json({data:rows});
        }
    })
})
app.delete('/products', (req,res,next)=>{
    //data.sanpham
    var sql='DELETE FROM data WHERE idsanpham='+req.body.idsanpham
    console.log(sql);
    connection.query(sql,(error,rows,result)=>{
        res.status(200).json({data:rows})
    })
    
})
app.post('/products',(req,res,next)=>{
    //data.sanpham
    var sql='INSERT INTO data (msp, name, thuonghieu, gia, img) VALUES ("'+req.body.msp+'","'+req.body.name+'","'+req.body.thuonghieu+'","'+req.body.price+'","'+req.body.img+'")'
    console.log(sql);
    connection.query(sql,(error,rows,result)=>{
        if(!error){
            res.status(200).json({data:rows})
        }else{
            console.log('error');
        }
    })

})
app.get('/products/:id', (req,res,next)=>{
    //data.sanpham
    var sql='SELECT * FROM data WHERE idsanpham="'+req.params.id+'"'
    console.log(req.params);
    connection.query(sql,(err, rows,result)=>{
        if(!err){
            res.send(rows[0])
        }else{
            console.log('err');
        }
    })
})
app.post('/products/:id', (req,res,next)=>{
    //data.sanpham
    var sql='UPDATE data SET name="'+req.body.name+'", thuonghieu="'+req.body.thuonghieu+'", gia="'+req.body.gia+'", msp="'+req.body.msp+'", img="'+req.body.img+'" WHERE idsanpham='+req.body.idsanpham;
    console.log(sql);
    connection.query(sql,(err,rows,result)=>{
        if(!err){
            res.status(200).json({data:rows})

        }
    })
})

app.listen(port,()=>{
    console.log("starting...");
})



