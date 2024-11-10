import  React ,{ useState } from "react";
import "../styles/CreateAccount.scss"
import TOl from "../assets/image/dr.png"
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../filebase";

const Login = () => {
    const [user,setUser]=useState({email:"",password:""});

    function handler (event){
        const {value,name}=event.target;

        setUser({...user,[name]: value})
    }
    async function signin() {
        try {
            const res =await signInWithEmailAndPassword(auth,user.email,user.password)
            toast.success("sucess email signin")
            
        } catch (error) {
           console.log(error);
           toast.error(error.message)
            
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
            {/* <input  type="text" placeholder="Name" /> */}
            <input onChange={handler} value={user.email} name="email"  type="email" placeholder="Email or Phone Number" />
            <input onChange={handler} value={user.password} name="password" type="password" placeholder="Password" />
            <button onClick={()=> signin()} className="create">Login</button>
            <div className="name4">
              <button className="sing">Sign up with Google</button>
              <h6>Already have account?  </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
