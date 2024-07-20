import {Component} from 'react'
import SignIn from '../SignIn'


const usersList = [
    {
        existedEmailId: 'nagaprasanna@ext.com',
        existedUsername: "prasanna",
        existedContact: '7075680073',
        existedPassword: "Prasanna@12",        
    },
    {
        existedEmailId: 'bharathi@ext.com',
        existedUsername: "bharathi",
        existedContact: "8654216548",
        existedPassword: "Bharathia@234",        
    },
    {
        existedEmailId: 'sai@ext.com',
        existedUsername: "sai",
        existedContact: "7825216548",
        existedPassword: "Sai@234",        
    },
    {
        existedEmailId: 'vinay@ext.com',
        existedUsername: "vinay",
        existedContact: "8654216548",
        existedPassword: "Vinay@234",        
    },
    {
        existedEmailId: 'vamsi@extwebtech.com',
        existedUsername: "vamsi",
        existedContact: "9834566548",
        existedPassword: "Vamsi@234",        
    },
    {
        existedEmailId: 'krishna@ext.com',
        existedUsername: "krishna",
        existedContact: "8256456418",
        existedPassword: "Krishna@234",        
    },
    {
        existedEmailId: 'sriram@ext.com',
        existedUsername: "sriram",
        existedContact: "6253216548",
        existedPassword: "Sriram@234",        
    },
]


class Main extends Component{
    constructor(props){
        super(props)
        this.state=({signnedUpUsersList: usersList})
    }

    updateSignnedUpUsersList = (newUser) => {
        this.setState((prevState) => ({
          signnedUpUsersList: [...prevState.signnedUpUsersList, newUser],
        }));
      }

      render() {
        const {signnedUpUsersList} = this.state
        
        return(
            <>
                <SignIn signnedUpUsersList={signnedUpUsersList} updateSignnedUpUsersList={this.updateSignnedUpUsersList}/>
            </>
        )
      }

}

export default Main
