import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";

function Signup(){
    const style = {
        display:"flex", 
        flexDirection: "column"}

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        if(validate()){
            const res = await axios.post("https://8080-cfadbaaaaacacadbacdaacadbcaacbbda.examlyiopb.examly.io/signup", {
                "email": email,
                "username": username,
                "password": password,
                "mobile": mobileNo
            })
            if(res.data === true){
                navigate("/home", {replace: true})
            }
            alert("Server Error: Try again later")
        }
        e.preventDefault()
    }

    const validate = () => {
        return validateEmail(email) === null && 
        validateUsername(username) === null && 
        validatePassword(password) === null && 
        validateConfirmPassword(confirmPassword) === null && 
        validateMobile(mobileNo) === null
    }

    const [email, setEmail] = useState('')
    const validateEmail = (val) => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val))
            return null
        return <p>not a valid email address</p>
    }

    const [username, setUserName] = useState('')
    const validateUsername = (val) => {
        if(val !== '')
            return null
        return <p>username is required</p>
    }

    const [mobileNo, setMobileNo] = useState('')
    const validateMobile = (val) => {
        if(!/^\d+$/.test(val))
            return <p>mobile should contain only digits</p>
        if(val?.length === 10)
            return null
        return <p>mobile number should have exactly 10 digits</p>
    }

    const [password, setPassword] = useState('')
    const validatePassword = (val) => {
        if(val === ''){
            return <p>password cannot be null</p>
        }
        if(val.length > 7 && val.length < 16)
            return null
        return <p>password must be 8 - 15 characters long</p>
    }

    const [confirmPassword, setConfirmPassword] = useState('')
    const validateConfirmPassword = (val) => {
        if(password === val)
            return null
        return <p>Does not match password</p>
    }

    return (
        <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
            <form style={style} id="signupBox">
                <h1>SIGN UP</h1>
                <input 
                    type="email" 
                    id="email" 
                    placeholder = "Enter Email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                {email !== '' && validateEmail(email)}

                <input 
                    type="text" 
                    id="username" 
                    placeholder = "Enter Username"
                    value={username}
                    onChange={(e) => {setUserName(e.target.value)}}
                    />
                {username !== '' && validateUsername(username)}

                <input 
                    type="tel"
                    id="mobilenumber"
                    placeholder = "Enter Mobile Number"
                    value={mobileNo}
                    onChange={(e) => {setMobileNo(e.target.value)}}
                    />
                {mobileNo !== '' && validateMobile(mobileNo)}

                <input
                    type="password"
                    id="password"
                    placeholder = "Enter Password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    />
                {password !== '' && validatePassword(password)}

                <input
                    type="password"
                    id="confirmpassword"
                    placeholder = "Confirm Password"
                    value={confirmPassword?.value}
                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                    />
                {confirmPassword !== '' && validateConfirmPassword(confirmPassword)}

                <button
                    type="submit"
                    id="submitButton"
                    onClick={(e)=>{handleSubmit(e)}}
                >
                    SIGN UP
                </button>
                <p>Already a member?<Link to="login" id="signinLink">click here</Link></p>
                
            </form>
        </div>
    )
}

export default Signup