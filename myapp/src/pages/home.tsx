
import { Aboutus } from '../components/aboutus';
import { Themes } from '../components/themes';
import '../styles/Pages/home.css';
// import { Example } from './example';


export function Home() {


    return (
        <div className='home'>
            <div id='myMedia'></div>

            <Aboutus />
            <Themes />


        </div>
    )
}
