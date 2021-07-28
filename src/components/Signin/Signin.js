import React from 'react'
import './Signin.css'

export default function Signin() {
    return (
        <div className="sign-main">
            <div className="sign-left">
                <div className="sign-head">
                    <h2>Sign In</h2>
                    <h6>New user?<a>Create an account</a></h6>
                </div>
                <div className="sign-form">
                    <form action="">
                        <input type="text" placeholder="Username or email" /><br/>
                        <input type="password" /><br/>
                        <input type="checkbox" />
                        <label htmlFor="checkbox">Keep me signed in</label><br/>
                        {/* <input type="submit" /> */}
                        <button><a href="/homepage">Submit</a></button>
                    </form>
                </div>
                <div className="sign-other">

                </div>
            </div>
            <div className="sign-right">

            </div>
        </div>
    )
}
