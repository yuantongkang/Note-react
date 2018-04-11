import React from "react";
import '../style/LoginStyle.less'

export default class Login extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div id="login">
                <div className="modal-mask">
                    <div className="modal-wrapper">
                        <div className="modal-container">
                            <div className="main">
                                <div className="form">
                                    <h3>创建账户</h3>
                                    <aside>
                                        <input type="text" placeholder="用户名"/>
                                        <input type="password" placeholder="密码"/>


                                    </aside>
                                    <h3>登录</h3>
                                    <aside name="slide">
                                        <div className="Login">
                                            <input type="text" placeholder="用户名"/>用户名
                                            <input type="password" placeholder="密码"/>密码
                                            <div className="button">登陆</div>



                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
    }
    }
