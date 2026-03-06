const express = require('express');
const app = express();
const session = require('express-session');
app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.json());

app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:false
}))

function isAuthenticated(req,res,next){
    if(req.session.user){
        next();
    }
    else{
        res.redirect('/login');
    }

}

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

const users = [
    {name:"suresh",email:"suresh@gmail.com",password:"123456"},
    {name:"ramesh",email:"ramesh@gmail.com",password:"123456"},
    {name:"mahesh",email:"mahesh@gmail.com",password:"123456"}
]

app.get("/",isAuthenticated,(req,res)=>{
    res.render('dashboard',{users});
})

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
})

app.get("/login",(req,res)=>{
    res.render('login')
})

app.get("/register",(req,res)=>{
    res.render('register');
})

app.post("/register",(req,res)=>{
    const {name,email,password} = req.body;
    users.push({name:name,email:email,password:password});
    res.redirect('/') 
})
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    const user = users.find(u=>u.email === email)
    if(!user){
        res.render('error',{error:"User not found"});
    }
    if(user.password !== password){
        res.render('error',{error:"Incorrect Password"});
    }
    req.session.user = user;
    res.redirect('/')
})


app.listen(8000,()=>{
    console.log('The server is running on 8000')
})