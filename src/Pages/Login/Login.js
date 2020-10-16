import React, { useContext } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import logo from '../../Images/logo/logo.png';
import './Login.css';
import { UserContext } from '../../App';
import { googleSignIn, initializeFramework, storeAuthToken } from '../../Components/LoginItems/LoginManager/LoginManager';
import Button from '../../Components/Shared/Button/Button';

const Login = () => {
    //Context use
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //Private Route element 
    let { replace } = useHistory();
    let { state } = useLocation();
    let { from } = state || { from: { pathname: "/dashboard/order" } };

    // Initialize
    initializeFramework();
    //Google SignIn function
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                setLoggedInUser(res);
                replace(from);
                // authToken();
            })
            .catch(err => {
                setLoggedInUser(err);
            })
    }
    // const authToken = () => {
    //     storeAuthToken()
    //         .then(result => {
    //             sessionStorage.setItem('token', result);
    //             replace(from);
    //         })
    //         .catch(error => console.log(error))
    // }
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center flex-column mt-5">
                <NavLink className="navbar-brand mb-5" to="/"> <img className="logo" src={logo} alt="Logo" /> </NavLink>
                <div className="card login_card">
                    <div className="card-body p-5">
                        <h4 className="login_title py-3 mt-5">Login With</h4>
                        <Button handleClick={handleGoogleSignIn} buttonName={"Continue with Google"} className={"login_btn"} />
                        <p className="login_text py-3 mb-5">Don't have an account? <NavLink to="/signup">Create an account</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;