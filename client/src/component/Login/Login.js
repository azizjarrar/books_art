import React from 'react';
import style from '../../style/login/login.module.css'

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
            <div className={style.x_container}><p className={style.x} onClick={this.closelogin}>x</p></div>
            <div className={style.form}>
                <div style={{position:"relative"}}>
                    <h1 style={{position:"relative",left:'33%',width:'100%'}}>Sing in</h1>
                </div>
                <div style={{position:"relative"}}>
                    <input style={{position:"relative",left:'0%',width:'100%'}} name="username" className={style.input} onChange={this.onchangehandler} placeholder="username"/>
                    </div>
                <div>
                    <input style={{position:"relative",left:'0%',width:'100%'}} name="password" className={style.input} onChange={this.onchangehandler} placeholder="password"/>
                    </div>
                    <div style={{position:"relative"}}><button style={{position:"relative",left:'0%',width:'100%'}} className={style.buttonsubmit}>Submit</button></div>
            </div>
        </div>
    </div>
    )
}
}
export default Login