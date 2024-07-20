import {Component} from 'react'
import './index.css'

class SignUp extends Component{
    constructor(props){
        super(props)        
        this.state = {emailId: '', username: '', contact: '', password: ''}
    }    

    onChangeEmailId = e => {
        this.setState({emailId: e.target.value})
    }

    onChangeUsername = e => {
        this.setState({username: e.target.value})
    }

    onChangeContact= e => {
        this.setState({contact: e.target.value})
    }

    onChangePassword= e => {
        this.setState({password: e.target.value})
    }

    onSubmitSignUp = (event) => {
        event.preventDefault()
        const {emailId, username, contact, password} = this.state
        const {updateSignnedUpUsersList, moveToSignIn} = this.props       

        const isEmailValid = /^[a-z]+@[^@]+\.com$/.test(emailId) 
        const isUsernameValid = /^[a-z]{4,20}$/.test(username)
        const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/.test(password)
        const isContactValid = /^[0-9]{10,10}$/.test(contact)
        
              
        const newUser = {
            existedEmailId: emailId,
            existedUsername: username, 
            existedContact: contact, 
            existedPassword: password
        }
        
        /* for all inputs empty */               
        if(emailId !== '' && username !== '' && contact !== '' && password !== ''){            
            updateSignnedUpUsersList(newUser)
        }else if(emailId === '' && username === '' && contact === '' && password === ''){            
            alert('Please Enter Email Address')
        }else if(isEmailValid && username === ''){
            alert('Please Enter Username')
        }else if(isEmailValid && isUsernameValid && contact === ''){
            alert('Please Enter Contact Number')
        }else if(isEmailValid && isUsernameValid && isContactValid && password === ''){
            alert('Please Enter Password')
        }

              
       
        if(emailId !== '' && isEmailValid === false){
            alert("Enter valid email address")
         }else if(username !== '' && isEmailValid && isUsernameValid === false){
           alert('Enter valid username with atleast 4 characters')
        }
        
       
        if(contact !== '' && isEmailValid && isUsernameValid && isContactValid === false){
           return alert('Enter valid contact number with [0-9]')
        }

         
         if(password !== '' && isEmailValid && isUsernameValid && isContactValid && isPasswordValid === false ){
           return alert('Enter Valid Password With numbers, special characters and upper & lower case letters')
        }

        /* All entries done */ 
        if(isEmailValid && isPasswordValid && isContactValid && isUsernameValid){
            alert("Successfully Signned Up")
            moveToSignIn()
        }
    }

    
    renderEmailIdInput = () => {
        const {emailId} = this.state

        return(
            <>
                <div className='email-container'>
                    <label className='input-label' htmlFor='emailId'>Enter your username or email address</label>
                    <input type="text" className='user-input' id="emailId" placeholder='Username or email address' value={emailId} onChange={this.onChangeEmailId}/>
                </div>
            </>
        )
    }

    renderUsernameInput = () => {
        const {username} = this.state

        return(
            <>
                <div className='username-container'>
                    <label className='input-label' htmlFor='username'>Username</label>
                    <input type="text" className='user-input' id="username" placeholder='User name' value={username} onChange={this.onChangeUsername}/>
                </div>
            </>
        )

    }

    renderContactInput = () => {
        const {contact} = this.state

        return(
            <>
                <div className='number-container'>
                    <label className='input-label' htmlFor='contact'>Contact Number</label>
                    <input type="text" maxLength={10} className='user-input' id="contact" placeholder='Contact Number' value={contact} onChange={this.onChangeContact}/>
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

    onClickSignIn = () => {
        const {moveToSignIn} = this.props
        moveToSignIn()
    }

    renderSignUp = () => {
        return(
            <>
               
                    <div className='sign-up-card'>
                        <div className='welcome-container welcome-mobile-container'>
                            <span className='welcome-note'>Welcome to <span className='lorem-text'>Lorem</span></span>
                            <div className='sign-in-button-container'>
                                <span className='sign-in-question'>Have an account?</span>
                                <button type="button" className='sign-in-button' onClick={this.onClickSignIn}>Sign In</button>
                            </div>
                        </div>
                        <h1 className='sign-up-heading'>Sign UP</h1>
                        <form className='input-content-container' onSubmit={this.onSubmitSignUp}>
                            {this.renderEmailIdInput()}
                            <div className='contact-container'>
                                {this.renderUsernameInput()}
                                {this.renderContactInput()}
                            </div>
                            {this.renderPasswordInput()}
                            <button type='submit' className='sign-up-submit-button'>Sign Up</button>                     
                        </form>
                    </div>
                
            </>
        )
    }

    render(){
              
        return(
            <>
                <div className='sign-up-bg-container'>{this.renderSignUp()}</div>
                <div className='mobile-sign-up'>
                    <p className='logo-text'>Your Logo</p>
                    {this.renderSignUp()}
                </div>                
            </>
        )
    }
}

export default SignUp
