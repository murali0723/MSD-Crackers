const router=require ("express").Router();
const User = require("../modules/User");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cors=require("cors");
router.use(cors());
const verifyToken=require("../middlewares/verify");
// router.set("view engine","ejs");
// router.use(express.urlencoded({extended:false}));
const nodemailer=require("nodemailer");

// const email="muralidharanc783@gmail.com";
// const pwd="odwm stlk negc sdqo";

const JWT_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

router.get("/",(req,res)=>{
    res.send("user route is working");
});

router.post("/signup",async(req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10);
        const password=await bcrypt.hash(req.body.password,salt);
        const user =new User({
            name:req.body.name,
            email:req.body.name,
            password,
        });

const data =await user.save();
const token=jwt.sign({id:data._id},"secretkey");

// const transporter=nodemailer.createTransport({
// service:"gmail",
// auth:{
//     user:email,
//     pass:pwd,
// },
// });

// let info=await transporter.sendMail({ 
//     from:"MSD Crackers <muralidharanc783@gmail.com>",
//     to:req.body.email,
//     subject:"Verify your Email-MSD Crackers",
//     html: `
//     <div>
//     <strong>${req.body.name}</strong>,We welcome our platform,
//     <a style="background-color:green;color:white" href="http://localhost:4000/user/verify/${token}"> Verify Email</a>
//     <div>S
//     <p>Thanks and Regards</p>
//     <p>From MSD Crackers</p>
//     </div>
//     </div>
//     `,
// });

// console.log(info);

        res.json({msg:"signed up succesfully"});
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.post("/login",async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(user){
            const result=await bcrypt.compare(req.body.password,user.password);
        if(result){
            const token=jwt.sign({id:user._id},"secretkey");
            return res.json(token);
        } else{
            return res.json({msg:"wrong password"});
        }    
        }else{
            return res.json({msg:"No user found"});
        }
    } catch(error){}
});

router.get("/data",verifyToken,async(req,res)=>{
    try {
        const userId=req.userId;
        const user=await User.findById(userId).select("-password");
        res.json(user);
    } catch (error) {
        return res.json({msg:error.message});
    }
});

router.get("/verify/:token",async(req,res)=>{
    try {
        const token= req.params.token;
        jwt.verify(token,"secretkey",async(err,decoded)=>{
            if(err){
                return res.json({msg:"Invalid url"});
            }else{
                const user =await User.findByIdAndUpdate(decoded.id,{
                    verified:true,
                });
                return res.json({msg:"Account verified"});
            }
        });
    } catch (error) {}
});

router.post("/resetpassword",async(req,res)=>{
    const {email}=req.body;
    try {
        const oldUser=await User.findOne([email]);
        if(!oldUser){
            return res.json({status:"User not found"});
        }
        const secret=JWT_SECRET+oldUser.Password;
        const token=jwt.sign({email:oldUser.email,id:oldUser._id},secret,{
            expiresIn:"1m",
        });
        const link=`http://localhost:4000/resetpassword/${oldUser.id}/${token}`;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'muralidharanc783@gmail.com',
              pass: 'odwm stlk negc sdqo'
            }
          });
          
          var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'deideiivana@gmail.com',
            subject: 'Password Reset',
            text: link,
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        console.log(link);
    } catch (error) {       
    }
});

router.get("/resetpassword/:id/:token",async(req,res)=>{
    const{id,token}=req.params;
    console.log(req.params);
    const oldUser=await User.findOne({_id:id});
    if(!oldUser){
        return res.json({status:"User Not Exists"});
    }
    const secret=JWT_SECRET+oldUser.password;
    try {
        const verify=jwt.verify(token,secret);
        res.render("index",{email:verify.email,status:"Not Verified"});
    } catch (error) {
        console.log(error);
        res.send("Not Verified")
    }
})

router.post("/resetpassword/:id/:token",async(req,res)=>{
    const {id,token}=req.params;
    const{password}=req.body; 

    const oldUser=await User.findOne({_id:id});
    if(!oldUser){
        return res.json({status:"User Not Exists!!"});
    }
    const secret=JWT_SECRET+oldUser.password;
    try {
        const verify=jwt.verify(token,secret);
        const encryptedPassword=await bcrypt.hash(password,10);
        await User.updateOne (
            {
                _id:id,
            },
            {
                $set:{
                    password:encryptedPassword,
                },
            }
        );
        res.json({status:"Password Updated"});

      res.render("index",{email:verify.email,status:"verified"})
    } catch (error) {
        console.log(error);
        res.json({status:"Something Went Wrong"});
    }
});


module.exports=router;