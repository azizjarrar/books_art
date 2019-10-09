import React from "react";
import style from './style.module.scss'
import loginImg from "../../../../img/logo.png";


export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.basecontainer} ref={this.props.containerRef}>
        <div className={style.header}>Welcome!</div>
        <div className={style.content}>
          <div className={style.image}>
            <img src={loginImg} />
          </div>
          <div className={style.form}>
            <div className={style.formgroup}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className={style.formgroup}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <button type="button" className={style.btn}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
