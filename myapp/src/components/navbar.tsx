import { useEffect, useState } from 'react';
import { webHeader } from '../utils/data';
import '../styles/Components/navbar.css';
import { useNavigate } from 'react-router-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { getId } from './../configstore';
import React from 'react';



export function Navbar1(props: { navItems: { Icon: JSX.Element, title: string, url: string }[] }) {
    return (
        <div className="Navbar1">
            <div className="allItems1">
                <ul className="pagesItemsUl1">
                    {props.navItems.map((curr, i) => (
                        <li key={i}> <a href={curr.url}> {curr.Icon}  {curr.title} </a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}



export function Navbar2(props: { navItems: { title: string, url: string }[] }) {

    useEffect(() => {
        (document.querySelector('.headerOfWeb') as HTMLElement).innerHTML = webHeader.innerHTML
    }, []);
    return (
        <div className="Navbar2">
            <div className="allItems2">
                <div className='headerOfWeb'>
                    <h1> speak your heart out </h1>
                </div>

                <ul className="pagesItemsUl2">
                    {props.navItems.map((curr, i) => (
                        <li key={i}> <a href={curr.url}>{curr.title}</a> </li>
                    ))}

                </ul>
            </div>
        </div >
    )
}

// {localStorage.getItem("idLogged") !== "" ? "log out" : "Login"}

export function AskNav(props: { navItems: { title: string, url: string, isopen: Boolean, options: { title: string, url: string }[] } }) {
    const navigate = useNavigate();
    const [isOpen, setisOpen] = useState(props.navItems.isopen);

    return (
        <div className="askNavDiv">
            <div className="allItems">
                <ul className="Ulnames">
                    <li onClick={() => { setisOpen(!isOpen) }} id='myLi' > {props.navItems.title} <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                        {isOpen &&
                            < ul className='optionUl'>
                                {props.navItems.options.map((curr, i) => (
                                    <li key={i}>
                                        <div className='url' data-url={'/Ask/' + curr.url}
                                            onClick={() => { navigate('/Ask/' + curr.url) }} >
                                            {curr.title}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        }
                    </li>


                </ul>
            </div>

        </div >
    )
}

export function AskIcons(props: { navItems: { Icon: JSX.Element, url: string, isopen: Boolean, options: { title: string, url: string }[] } }) {
    const navigate = useNavigate();
    const [isOpen, setisOpen] = useState(false);
    let url = 'http://127.0.0.1:5789/people/';

    useEffect(() => {
        axios.get(url)
            .then(response => {

                console.log(response.data);
            });
    }, []);

    const deleteUser = () => {
        url = url + getId().id;
        axios.delete(url)
            .then(response => {
                console.log(response.data);
            });

        navigate('/Home');
    }
    const updateUser = () => {

        axios.put(url)
            .then(response => {
                console.log(response.data);
            });
    }

    return (

        <div className="divAroundAll">
            <ul className='IconsUl'>
                <li onClick={() => { setisOpen(isOpen ? false : true) }}> <div className='divAroundIcons'> {props.navItems.Icon} </div>
                    <div> {isOpen &&
                        <ul className='optionUl' >
                            {props.navItems.options.map((curr, i) => (
                                <li id='links' key={i}>
                                    <div className='url' data-url={'/Ask/' + curr.url}
                                        onClick={() => { navigate('/Ask/' + curr.url) }} >
                                        {curr.title}
                                    </div>
                                </li>
                            ))}

                            <li onClick={() => { deleteUser() }}> delete </li>
                            <li onClick={() => { updateUser() }}> update </li>
                            <li> sign out</li>
                        </ul>
                    }
                    </div>
                </li>
            </ul>
        </div >
    )
}
