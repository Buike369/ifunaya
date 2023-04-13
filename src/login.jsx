import React from 'react'
import "./styles/login.css"

const login = () => {
  return (
    <div>
        <div className="formDiv2">
            <div className="formDiv3">
                <div className="signIn">Sign In</div>
                <form>
                   <div> <label>Account</label>
                       <input type="text" placeholder=" Email address or username " className="inputDiv"/></div>
                   <div>
                   <label>Password</label>
                        <input type="password" placeholder="password"  className="inputDiv" /></div>
                    <div className="loginButton">Login</div>
                </form>
                <p>Forget password?<span>Click Here</span></p>
                <div>
                    <div></div>
                    <div>Or register with</div>
                    <div></div>
                </div>
                <div>
                    <div>facebook</div>
                    <div>google</div>
                    <div>linkedIn</div>
                </div>
                <p>Don't have an account?</p>
                <button>Register Here</button>
            </div>

        </div>
    </div>
  )
}

export default login