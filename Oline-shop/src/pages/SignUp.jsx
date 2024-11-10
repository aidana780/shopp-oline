
import "../styles/CreateAccount.scss";
import  React ,{ useState } from "react";
import TOl from "../assets/image/dr.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../filebase";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

function SignUp() {
    const [user,setUser]=useState({email:"",password:""})
    
    function handler (event){
        const {value,name}=event.target;

        setUser({...user,[name]: value})
    }
    async function singUp(params) {
       try {
        const res =await createUserWithEmailAndPassword(auth,user.email,user.password)
         if(res){
            toast.success("email succes create")
         }
         console.log(res);
         
        
       } catch (error) {
        toast.error(error.message);
        console.log(error);
        
       } 
    }
  return (
    <div>
      <div className="name1">
        <img className="image-1" src={TOl}/>
        <div className="name2">
          <h5>Create an account</h5>
          <h4>Enter your details below</h4>
          <div className="name3">
            <input  type="text" placeholder="Name" />
            <input onChange={handler} value={user.email} name="email"  type="email" placeholder="Email or Phone Number" />
            <input onChange={handler} value={user.password} name="password" type="password" placeholder="Password" />
            <button onClick={()=>singUp()} className="create">Create Account</button>
            <div className="name4">
              <button className="sing">Sign up with Google</button>
              <h6>Already have account? <Link to="/login">llojng</Link></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
