import React from 'react';
import style from '../../style/login/login.module.css'
import Login_amine from './login_amine/login'
class Login extends React.Component{
    constructor(props){
    super(props)
    this.onchangehandler=this.onchangehandler.bind(this)    
    this.closelogin=this.closelogin.bind(this)
    this.state={
        username:'',
        password:''
    }   
}
onchangehandler(event){
    const {name,value}=event.target;
    console.log(name)
    this.setState({
        [name]:value
    })
}
closelogin(){
    this.props.setStatevalue(false)
}
render(){
    return(
        <div className={style.body}>
        <div className={style.login_template}>
            <Login_amine/>      
             </div>
    </div>
    )
}
}
export default Login