import axios from 'axios';
import { useEffect } from 'react';
import { setId } from '../configstore';
import '../styles/Pages/signup.css';
import { getId } from './../configstore';
import { Link, useNavigate } from 'react-router-dom';



export function Signup() {

    let Navigate = useNavigate()
    const url = 'http://127.0.0.1:5789/people';
    const url1 = 'http://127.0.0.1:5789/auth/register'
    var nextId = "";
    useEffect(() => {
        axios.get(url)
            .then(response => {
                nextId = JSON.stringify(response.data.length + 1);
                setId(nextId);
                console.log(response.data);
            });
    }, []);

    function mySubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        var formDatasignup = new FormData(e.target as HTMLFormElement);
        const user = {
            id: getId().id,
            nickname: formDatasignup.get('nickname'),
            username: formDatasignup.get('username'),
            password: formDatasignup.get('password'),
        }
        const confirmedPass = formDatasignup.get('Cpassword')
        console.log(user);


        axios.get(url)
            .then(response => {
                let users = response.data;
                for (let val of users) {
                    console.log(val.nickname);
                    console.log(user);
                    if ((val.nickname === user.nickname) || (val.username === user.username)) {

                        (document.querySelector(".validNick") as HTMLElement).innerHTML = 'invalid nickname or user name ';
                        return;
                    }


                }

                axios.post(url1, {
                    user
                })
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                        Navigate('/Home');

                    })

            })
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <span className="loginDesc">
                        <h1> Glad to see you here</h1>
                        Join our 'Speak Your Heart Out' family

                    </span>
                </div>
                <div className="loginRight">
                    <div className="loggedBox">
                        <form className="loginBox" onSubmit={(e) => { mySubmit(e) }} >
                            <input type="text" name='nickname' placeholder="Nick name" className="loginInput" />
                            <input type="text" name='username' placeholder="Email" className="loginInput" />
                            <input type="password" name='password' placeholder="Password" className="loginInput" />
                            <input type="password" name='Cpassword' placeholder="Confirm password" className="loginInput" />
                            <label className='validNick'></label>
                            <input className="loginButton" type="submit" value="Sign Up" id="Submit" />
                            <span> Already member?</span>
                            <span className='signLink'> <Link to={'/Login'}> log in</Link> </span>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}



