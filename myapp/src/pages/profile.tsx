import axios from 'axios';
import React from 'react';
import { getId } from '../configstore';
import '../styles/Pages/profile.css';
import { useState } from 'react';
import { useEffect } from 'react';

export function Profile() {
    let url = 'http://127.0.0.1:5789/people/';
    url = url + getId().id;

    let [user, setuser] = useState({
        id: getId().id,
        nickname: "",
        password: "",
        username: ""
    });


    useEffect(() => {
        axios.get(url)
            .then(response => {

                setuser(response.data);

            });
    }, []);


    function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        var formdata = new FormData(e.target as HTMLFormElement);
        // let url = 'http://127.0.0.1:5789/people/';
        // url = url + getId().id;

        let updatedUser = {
            id: getId().id,

            nickname: formdata.get('nickname'),
            username: formdata.get('username'),
            password: formdata.get('password'),
        }
        // if (formdata.get('password') === "") {


        // }

        console.log(updatedUser);


        axios.put(url,
            updatedUser
        )
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <div className='divAroundallpage'>
            <div className='divAroundProfile'>
                <div>
                    <h1>  Edit profile </h1>

                    <form onSubmit={(e) => { handleUpdate(e) }}   >
                        <div id="DivAroundFormElements">
                            <label>Nick Name :</label>
                            <input type="text" id="nicknameProfile" name="nickname" defaultValue={user.nickname} />
                            <br />
                            <label className='validNick'></label>
                            <label> User Name:</label>
                            <input type="text" id="usernameProfile" name="username" defaultValue={user.username} />
                            <label className='validUser'></label>
                            <br />
                            <label >Password:</label>
                            <input id="passwordProfile" name="password" placeholder='New Password?' required />
                            <br />
                            <input type="submit" value="Update" id="profileSubmit" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}


