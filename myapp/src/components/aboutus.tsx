import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Components/aboutus.css';
import { aboutusObj } from '../utils/data';


export function Aboutus() {

    useEffect(() => {
        (document.querySelector('.aboutusDiv') as HTMLElement).innerHTML = aboutusObj.innerHTMLh

    }, [])

    return (
        <div className='DivAroundAll'>
            <div className="aboutusDiv">


            </div>
            <Link className='Link' to="/Ask">Go to asking page</Link>
        </div>
    )
}
