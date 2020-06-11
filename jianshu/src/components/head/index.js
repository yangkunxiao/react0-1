import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import "./index.css";
import HomeImage from "../../assets/images/header-home.png";

class Header extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   inputFocus: true,
    // };
    // this.searchFocusOrBlur = this.searchFocusOrBlur.bind(this);
  }

  //   searchFocusOrBlur(e) {
  //     const inputFocus = this.props.inputFocus;
  // this.setState(() => ({
  //   inputFocus: !inputFocus,
  // }));
  //   }

  render() {
    return (
      <header>
        <div className="header_left">
          <a href="/">
            <img src={HomeImage} alt="首页" className="header_left-img" />
          </a>
        </div>
        <div className="header_center">
          <div className="header_center-left">
            <div className="nav-item header_center-left-home">
              <i className="icon icon-home"></i>
              <span>首页</span>
            </div>
            <div className="nav-item header_center-left-download">
              <i className="icon icon-download"></i>
              <span>下载App</span>
            </div>
            <div className="nav-item header_center-left-search">
              {/* 2. 通过 CSSTransition 包裹 input */}
              <CSSTransition
                in={this.props.inputFocus}
                timeout={200}
                classNames="slide"
              >
                <input
                  className={
                    this.props.inputFocus ? "input-nor-active" : "input-active"
                  }
                  placeholder="搜索"
                  onFocus={this.props.searchFocusOrBlur}
                  onBlur={this.props.searchFocusOrBlur}
                />
              </CSSTransition>
              <i
                className={
                  this.props.inputFocus
                    ? "icon icon-search"
                    : "icon icon-search icon-active"
                }
              ></i>
            </div>
          </div>
          <div className="header_center-right">
            <div className="nav-item header_right-center-setting">
              <span>Aa</span>
            </div>
            <div className="nav-item header_right-center-login">
              <span>登录</span>
            </div>
          </div>
        </div>
        <div className="header_right nav-item">
          <span className="header_right-register">注册</span>
          <span className="header_right-write nav-item">
            <i className="icon icon-write"></i>
            <span>写文章</span>
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputFocus: state.inputFocus,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    searchFocusOrBlur() {
        const action = {
            type:'search_focus_or_blur'
        }
        dispatch(action)
      // const inputFocus = this.props.inputFocus;
      // this.setState(() => ({
      //   inputFocus: !inputFocus,
      // }));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
