import {Component} from 'react'
import Home from '../Home'
import SignUp from '../SignUp'
import google from '../../../src/images/google.svg'
import facebook from '../../../src/images/Facebook.svg'
import apple from '../../../src/images/apple.svg'
import leftImg from '../../../src/images/Saly-3.svg'
import rightImg from '../../../src/images/Saly-2.svg'

import './index.css'

const successConstants = {
    initial: 'initial',
    success: 'success',
    failure: 'failure'
}

class SignIn extends Component{
    state = {emailId: '', password: '', isSuccess: successConstants.initial}

    onChangeUsername = event => {
        this.setState({emailId: event.target.value})
    }

    onChangePassword = event => {
        this.setState({password: event.target.value})
    }

   onSubmitSignIn = (event)  => {
    event.preventDefault()

    const {signnedUpUsersList} = this.props
    const {emailId, password} = this.state
    
    const isEmailValid = /^[a-z]+@[^@]+\.com$/.test(emailId)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/.test(password)

    const userExisted = signnedUpUsersList.find(eachUser => (
        eachUser.existedEmailId === emailId  && eachUser.existedPassword === password
    ))

    if (emailId === '' && password === '') {
        alert('Please enter both username and password');
        return
    }
    
    if( isEmailValid === false){
        alert("Enter Valid EmailId")
        return
    }else if(isEmailValid && password === ''){
        alert('Enter Password')
    }
    else if( isEmailValid && isPasswordValid === false){
        alert("Enter Valid Password With numbers, special characters and upper & lower case letters")
        return
    }else if(isEmailValid  && isPasswordValid){
        if (userExisted === undefined){
            alert('Email address is not registered please sign up')
            return this.setState({isSuccess: successConstants.failure})            
        }else{
            this.setState({isSuccess: successConstants.success})
        }   
    }    
    
  }

    renderUsernameInput = () => {
        const {emailId} = this.state        

        return(
            <>
                <div className='sign-in-email-container'>
                    <label className='input-label' htmlFor='username'>Enter your username or email address</label>
                    <input type="text" className='user-input' id="username" placeholder='Username or email address' value={emailId} onChange={this.onChangeUsername} onFocus={this.changeBorder}/>
                </div>
            </>
        )
    }

    renderPasswordInput = () => {
        const {password} = this.state

        return(
        <>
            <div className='password-container'>
                <label className='input-label' htmlFor="password">Enter your Password</label>
                <input type='password' className='user-input' id="password" placeholder='Password' value={password} onChange={this.onChangePassword}/>
            </div>
        </>
        )
    }

    onClickSignUp = () => {
       this.setState({isSuccess: successConstants.failure})
    }

    renderSignInPage = () => {
        return(
            <> 
                
                <div className='sign-in-card'>
                    <div className='welcome-container'>
                        <p className='welcome-note'>Welcome to <span className='lorem-text'>Lorem</span></p>
                        <div className='sign-up-button-container'>
                            <p className='sign-up-question'>No Account?</p>
                            <button type="button" className='sign-up-button' onClick={this.onClickSignUp}>Sign Up</button>
                        </div>
                    </div>
                    <h1 className='sign-in-heading'>Sign In</h1>

                    {/* mobile content */}
                    <div className='icons-container mobile-icons-container'>
                        <div className='google-container'>
                            <img src={google} alt="google logo" className='icons google'/>
                            <p className='google-text'>Sign in with Google</p>
                        </div>
                        <div className='social-container'>
                            <div className='facebook-container'>
                                <img src={facebook} alt="facebook logo" className='icons facebook'/>
                            </div>
                            <div className='apple-container'>
                                <img src={apple} alt="apple logo" className='icons apple'/>
                            </div>
                        </div>
                    </div>

                    <form className='input-content-container' onSubmit={this.onSubmitSignIn}>
                        {this.renderUsernameInput()}
                        {this.renderPasswordInput()}    
                        <button type='button' className='forgot-button'>Forgot Password</button>  
                        <button type='submit' className='sign-in-submit-button'>Sign In</button>                     
                    </form>
                    <p className='or-text'>OR</p>

                    <div className='icons-container large-icons-container'>
                        <div className='google-container'>
                            <img src={google} alt="google logo" className='icons google'/>
                            <p className='google-text'>Sign in with Google</p>
                        </div>
                        <div className='social-container'>
                            <div className='facebook-container'>
                                <img src={facebook} alt="facebook logo" className='icons facebook'/>
                            </div>
                            <div className='apple-container'>
                                <img src={apple} alt="apple logo" className='icons apple'/>
                            </div>
                        </div>
                    </div>
                </div>  
                                         
            </>
        )
    }

    moveToSignIn = () => {
        this.setState({isSuccess: successConstants.initial})
    }

    renderSignInOrHomePageOrSignUpPage = () => {
        const {isSuccess} = this.state
        const {updateSignnedUpUsersList} = this.props
       

        switch(isSuccess) {
            case successConstants.initial:
                return this.renderSignInPage()
            case successConstants.success:
                return <Home />
            case successConstants.failure:
                return <SignUp  updateSignnedUpUsersList={updateSignnedUpUsersList} moveToSignIn={this.moveToSignIn}/>
            default:
                return null
        }    
    }

    render(){    
        return(
            <>
                <div className='bg-container'>
                    <div className='left-container'> 
                        <p className='logo-text'>Your Logo</p>
                        <div className='img-container'>
                            <img src={leftImg} alt="style-1" className="left-img"/>
                        </div>                        
                    </div>
                    {this.renderSignInOrHomePageOrSignUpPage()} 
                    <img src={rightImg} alt="style-2" className="right-img"/>
                </div>
                <div className='mobile-content'>
                    <p className='logo-text'>Your Logo</p>
                    {this.renderSignInOrHomePageOrSignUpPage()} 
                </div>
            </>
        )
    }
}
export default SignIn