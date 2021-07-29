import React, { useState } from 'react'
import './Signin.css'
import {useHistory} from 'react-router-dom'

export default function Signin() {
    const dusername="admin"
    const dpassword="1234"
    // const eusername=''
    // const epassword=''

    const history = useHistory()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function onSubmit(){
        if(username===dusername) {
            if (password===dpassword){
                console.log(username);
                history.push("/homepage")
            }
        }
    }
    return (
        <div className="sign-main">
            <div className="sign-left">
                <div className="sign-head">
                    <h2>Sign In</h2>
                    <p>New user?<a href="#">&nbsp;Create an account</a></p>
                </div>
                <div className="sign-form">
                    <form action="">
                        <input type="text" placeholder="Username or email"   onChange={e => setUsername(e.target.value)}/><br/>
                        <input type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/><br/>
                        <input type="checkbox" />
                        <label htmlFor="checkbox">Keep me signed in</label><br/>
                        {/* <input id="submit" type="submit" onClick={()=>onSubmit()}></input> */}
                        <button id="submit" onClick={()=>onSubmit()}><a href="/homepage">Sign In</a></button>
                       
                    </form>
                </div>
                <div className="sign-other">
                    <p>------Or Sign In With------</p>
                    <div className="sign-other-icon">
                        <i class="fab fa-google"></i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </div>
            </div>
            <div className="sign-right">
                <img src="images/sign.jpg" alt="" />
            </div>
        </div>
    )
}
