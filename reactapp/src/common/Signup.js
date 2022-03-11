import React, { useState } from "react"
import axios from "axios"

function Signup(){
    const style = {
        display:"flex", 
        flexDirection: "column"}

    const validate = () => {
        return validateEmail(email.value) === null && 
        validateUsername(username.value) === null && 
        validatePassword(password.value) === null && 
        validateConfirmPassword(confirmPassword.value) === null && 
        validateMobile(mobileNo.value) === null
    }

    const handleSubmit = (e) => {
        console.log(validate())
        if(validate()){
            console.log("posting")
        }
        e.preventDefault()
    }

    const [email, setEmail] = useState(null)
    const validateEmail = (val) => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val))
            return null
        return "not a valid email address"
    }
    const [username, setUserName] = useState(null)
    const validateUsername = (val) => {
        if(val != null)
            return null
        return "username is required"
    }
    const [mobileNo, setMobileNo] = useState(null)
    const validateMobile = (val) => {
        if(val.length === 10)
            return null
        return "mobile number should have exactly 10 digits"
    }
    const [password, setPassword] = useState(null)
    const validatePassword = (val) => {
        if(val === null || val === ''){
            return "password cannot be null"
        }
        if(val.length > 7 && val.length < 16)
            return null
        return "password must be 8 - 15 characters long"
    }
    const [confirmPassword, setConfirmPassword] = useState(null)
    const validateConfirmPassword = (val) => {
        if(password === null || password?.value === val)
            return null
        return "Does not match password"
    }
    return (
        <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
            <form style={style}>
                <input 
                    type="email" 
                    id="email" 
                    placeholder = "Enter Email"
                    value={email?.value}
                    onChange={(e) => {setEmail({value: e.target.value, error: validateEmail(e.target.value)})}}
                    />
                {email?.error && <p>{email.error}</p>}
                <input 
                    type="text" 
                    id="username" 
                    placeholder = "Enter Username"
                    value={username?.value}
                    onChange={(e) => {setUserName({value: e.target.value, error: validateUsername(e.target.value)})}}
                    />
                {username?.error && <p>{username.error}</p>}
                <input 
                    type="tel"
                    id="mobilenumber"
                    placeholder = "Enter Mobile Number"
                    value={mobileNo?.value}
                    onChange={(e) => {setMobileNo({value: e.target.value, error: validateMobile(e.target.value)})}}
                    />
                {mobileNo?.error && <p>{mobileNo.error}</p>}
                <input
                    type="password"
                    id="password"
                    placeholder = "Enter Password"
                    value={password?.value}
                    onChange={(e) => {setPassword({value: e.target.value, error: validatePassword(e.target.value)})}}
                    />
                {password?.error && <p>{password.error}</p>}
                <input
                    type="password"
                    id="confirmpassword"
                    placeholder = "Confirm Password"
                    value={confirmPassword?.value}
                    onChange={(e) => {setConfirmPassword({value: e.target.value, error: validateConfirmPassword(e.target.value)})}}
                    />
                {confirmPassword?.error && <p>{confirmPassword.error}</p>}
                <button
                    type="submit"
                    id="submitButton"
                    onClick={(e)=>{handleSubmit(e)}}
                >
                    SIGN UP
                </button>
            </form>
        </div>
    )
}

export default Signup