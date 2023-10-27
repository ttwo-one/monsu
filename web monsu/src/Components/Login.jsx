import React, { useState } from "react";
import { auth } from "./FirebaseAuth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";

const SignupAndLogin = () => {
    const [Login, setLogin] = useState(false)

    const history = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        if(type == 'signup'){
            createUserWithEmailAndPassword(auth, email, password).then(data=>{
                console.log(data,"authData")
                history('/')
            }).catch(err=>{
                alert(err.code)
                setLogin(true)
            })
        }else{
            signInWithEmailAndPassword(auth, email, password).then(data=>{
                console.log(data, "authData")
                history('/')
            }).catch(err=>{
                alert(err.code)
            })
        }
    }
    return (
        <div className="mt-20 text-center">
            {/* {halaman login dan sign up} */}
            <div className="flex justify-around m-10 px-28">
                <div className={Login == false ?'activecolor':'pointer'} onClick={()=>setLogin(false)}>SignUp</div>
                <div className={Login == true ?'activecolor':'pointer'} onClick={()=>setLogin(true)}>Login</div>
            </div>
            <h1>{Login?'Login':'Signup'}</h1> 
            <form onSubmit={(e)=>handleSubmit(e,Login?'Login':'Signup')}>
                <input className="outline outline-offset-2 outline-2 m-2 " name="email" placeholder="Email"/><br/>
                <input className="outline outline-offset-2 outline-2 m-2 "name="password" type="password" placeholder="Password"/><br/>
                <button className="outline outline-offset-2 outline-2 m-2 ">{Login?'Login':'Signup'}</button>
            </form>
        </div>
    )
}

export default SignupAndLogin;