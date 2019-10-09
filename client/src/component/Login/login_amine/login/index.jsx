import React from "react";
import style from "./style.module.scss";
import  { Login } from "./login"
import { Register } from "./register"



class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isLogginActive: true
        };
      }
      componentDidMount() {
        //Add .right by default
        this.rightSide.classList.add(style.right);
      }
      changeState() {
        const { isLogginActive } = this.state;
    
        if (isLogginActive) {
          this.rightSide.classList.remove(style.right);
          this.rightSide.classList.add(style.left);
        } else {
          this.rightSide.classList.remove(style.left);
          this.rightSide.classList.add(style.right);
        }
        this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
      }
      render() {
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "register" : "login";
        const currentActive = isLogginActive ? "login" : "register";
        return (
          <div className={style.App}>
            <div className={style.login}>
              <div className={style.container} ref={ref => (this.container = ref)}>
                {isLogginActive && (
                  <Login containerRef={ref => (this.current = ref)} />
                )}
                {!isLogginActive && (
                  <Register containerRef={ref => (this.current = ref)} />
                )}
              </div>
              <RightSide
                current={current}
                currentActive={currentActive}
                containerRef={ref => (this.rightSide = ref)}
                onClick={this.changeState.bind(this)}
              />
            </div>
          </div>
        );
      }        
}
const RightSide = props => {
    return (
      <div
        className={style.rightside}
        ref={props.containerRef}
        onClick={props.onClick}
      >
        <div className={style.innercontainer}>
          <div className={style.text}>{props.current}</div>
        </div>
      </div>
    );
  };
export default Index;