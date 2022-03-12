import axios from 'axios';
import '../styles/Pages/login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { setId } from '../configstore';



/* Function that returns an HTML form for logging in to web */
export function Login() {
    const navigate = useNavigate();
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = 'http://127.0.0.1:5789/auth/login';
        var formData = new FormData(e.target as HTMLFormElement);

        const user = {
            "username": formData.get('username'),
            "password": formData.get('password')
        }

        axios.post(url, {
            user
        })

            .then(response => {
                console.log(response);
                let users = response.data.user;
                // console.log(response.data.user.username);
                //check password
                if (users === undefined) {
                    (document.querySelector(".passwordCorrection") as HTMLElement).innerHTML = response.data

                }
                else {
                    setId(users.id);
                    localStorage.setItem("idLogged", users.id);
                    (document.querySelector(".passwordCorrection") as HTMLElement).innerHTML = 'Logged in Successfully';
                    navigate('/Ask');
                }
            })

    };

    if (localStorage.getItem('idLogged') != "") {
        localStorage.setItem("idLogged", "")
        return (<Navigate to="/login" />)
    }
    else {
        return (
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <span className="loginDesc">
                            <h3> Welcome Back !</h3>
                        </span>
                    </div>
                    <div className="loginRight">
                        <div className="loggedBox">
                            <form className="loginBox" onSubmit={(e) => { handleLogin(e) }}>
                                <input type="text" name="username" placeholder="Email" className="loginInput" />
                                <input type="password" name="password" placeholder="Password" className="loginInput" />
                                <label className="passwordCorrection"> </label>
                                <input className="loginButton" type="submit" value="Log In" id="Submit" />
                                <span className="loginForgot">Dont have an account?</span>
                                <span className='create'> <Link to={'/Signup'}> create </Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}