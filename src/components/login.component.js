import React, { useState, useEffect } from "react";
import { LOCAL_USER_ID_STR, LOCAL_USER_NAME_STR, LOCAL_USER_TOKEN_STR, setLocalStorage } from '../common/common';
import { GUEST_API_PRODUCTS_URL, API_LOGIN_URL, postData } from '../apis/api';

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        
    });

    function handleChangeName(event) {
        setName(event.target.value);
    }

    function handleChangePassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        postData(API_LOGIN_URL, { name, password })
        .then(data => {
            console.log(data.data);
            setLocalStorage(LOCAL_USER_NAME_STR, name);
            setLocalStorage(LOCAL_USER_ID_STR, data.data.id);
            setLocalStorage(LOCAL_USER_TOKEN_STR, data.data.token);
        })
        .catch(error => console.error(error))
    }

    return (
        <form>
            <h3>登入</h3>
            <div className="form-group">
                <label>帳號</label>
                <input type="text" className="form-control" value={name} onChange={handleChangeName} placeholder="請輸入帳號" />
            </div>

            <div className="form-group">
                <label>密碼</label>
                <input type="password" className="form-control" value={password} onChange={handleChangePassword} placeholder="請輸入密碼" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">記住我</label>
                </div>
            </div>

            <button type="button" className="btn btn-primary btn-block" onClick={handleSubmit}>登入</button>
            <p className="forgot-password text-right">
                忘記 <a href="#">密碼?</a>
            </p>
        </form>
    );
}
