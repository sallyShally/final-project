import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import '../styles/Pages/asking.css'
import { AskIcons, AskNav } from './../components/navbar';
import { askNavArr, AskNAvIcons } from './../utils/data';
import { Search } from "@material-ui/icons";
// import { MoreVert } from "@material-ui/icons";
// import { Users } from "./../utils/data";
// import { useState } from "react";
import { getId } from './../configstore';


export function Asking() {


    return (

        <header className='askPage'>
            <div className='Ask'>
                <div className='divAroundNavs' >
                    {askNavArr.map((curr, i) => (
                        <AskNav key={i} navItems={curr} />
                    ))}
                    <div className="searchbar">
                        <Search className="searchIcon" />
                        <input
                            placeholder="Search for friend, post or video"
                            className="searchInput"
                        />
                    </div>
                    {localStorage.getItem("idLogged") !== "" &&
                        <div>
                            {AskNAvIcons.map((curr, i) => (

                                <AskIcons key={i} navItems={curr} />
                            ))}
                        </div>
                    }
                </div>
                <Outlet />
            </div>
        </header >

    )
}


