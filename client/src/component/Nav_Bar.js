import React from 'react';
import style from '../style/navbar.module.css'
import icon from '../img/logo.png'
import Login from './Login/Login'
class Nav_bar extends React.Component{
    constructor(){
        super()
        this.signin=this.signin.bind(this)
        this.state={
            singin:false
        }
    }

    signin(){
        
        this.setState({singin:true})
        console.log(document.querySelector('#home_page_id'))
    }

    render(){
        return(
            <div className={style.navbar}>
                {this.state.singin && <Login/>}
                <div className={style.logocontainer}>  <div className={style.iconcontainer_div}><img className={style.icon} src={icon}/> </div>      <div className={style.logo_text_div}><h1 className={style.textlogo}>Books 'Art</h1></div> </div>
                <div className={style.searchcontainer}><input type="text" name="search" className={style.inputsearch}/><button className={style.searchbutton}>Search</button></div>
                <div className={style.sign_in_div}> <div className={style.sign_in_hover} onClick={this.signin}> <p className={style.sign_in_text}>Sign in</p>     </div></div>
            </div>
        )
    }



}


export default Nav_bar;
