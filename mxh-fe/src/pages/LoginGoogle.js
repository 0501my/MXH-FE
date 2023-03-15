import React from 'react';
import {LoginSocialGoogle} from "reactjs-social-login";
import {GoogleLoginButton} from "react-social-login-buttons";

const LoginGoogle= () => {
    return (
        <>
            <LoginSocialGoogle client_id="1004137847361-3p3lh814vts1f6ts9e2al867rjrjp9gc.apps.googleusercontent.com"
                               discoveryDocs="claims_supported" access_type="offline" onReject={({e}) => {
                console.log(e)
            }
            } onResolve={(data) => {
                console.log( data)
            }
            }>
                <GoogleLoginButton/>
            </LoginSocialGoogle>
        </>

    )
}
export default LoginGoogle;
