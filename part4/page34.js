const express = require('express');
const app = express();
const session = require('express-session');
app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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



const users = [
    {name:"suresh",email:"suresh@gmail.com",password:"123456"},
    {name:"ramesh",email:"ramesh@gmail.com",password:"123456"},
    {name:"mahesh",email:"mahesh@gmail.com",password:"123456"}
]

app.get("/",isAuthenticated,(req,res)=>{
    res.render('dashboard',{user:req.session.user});
})

app.get('/users',(req,res)=>{
    res.render('users',{users});
})
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
})

app.get("/login",(req,res)=>{
    res.render('login',{error:""})
})

app.get("/register",(req,res)=>{
    res.render('register',{error:""});
})

app.post("/register",(req,res)=>{
    const {name,email,password} = req.body;
    const exists = users.find(u=>u.email==email);
    if(exists){
        return res.render('register',{error:'user already existed'});
    }
    const user = {name:name,email:email,password:password}
    users.push(user);
    req.session.user = user
    res.redirect('/') 
})
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    const user = users.find(u=>u.email === email)
    if(!user){
       return res.render('login',{error:"User not found"});
    }
    if(user.password !== password){
        return res.render('login',{error:"Incorrect Password"});
    }
    req.session.user = user;
    res.redirect('/')
})


app.listen(8000,()=>{
    console.log('The server is running on 8000')
})