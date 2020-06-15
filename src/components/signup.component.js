import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>註冊</h3>

                <div className="form-group">
                    <label>姓名</label>
                    <input type="text" className="form-control" placeholder="姓名" />
                </div>

                <div className="form-group">
                    <label>手機號碼</label>
                    <input type="text" className="form-control" placeholder="請輸入手機號碼" />
                </div>

                <div className="form-group">
                    <label>密碼</label>
                    <input type="password" className="form-control" placeholder="請輸入密碼" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">註冊</button>
                <p className="forgot-password text-right">
                    已經是會員 <a href="#">登入?</a>
                </p>
            </form>
        );
    }
}
