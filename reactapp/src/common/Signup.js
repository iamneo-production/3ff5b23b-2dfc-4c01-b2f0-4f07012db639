import React from "react"
import axios from "axios"

function Signup(){
    const style = {
        display:"flex", 
        flexDirection: "column"}

    const handleSubmit = (e) => {
        axios.post()
        e.preventDefault()
    }

    return (
        <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
            <form style={style}>
                <input 
                    type="email" 
                    id="email" 
                    placeholder = "Enter Email"
                    />
                <input 
                    type="text" 
                    id="username" 
                    placeholder = "Enter Username"
                    />
                <input 
                    type="tel"
                    id="mobilenumber"
                    placeholder = "Enter Mobile Number"
                    />
                <input
                    type="password"
                    id="password"
                    placeholder = "Enter Password"
                    />
                <input
                    type="password"
                    id="confirmpassword"
                    placeholder = "Confirm Password"
                    />
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