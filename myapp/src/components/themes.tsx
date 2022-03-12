
import { GalleryWithnoClicking } from '../controllers/Gallery';
import { themesArr, TitleAndP } from '../utils/data';
import '../styles/Components/themes.css'
import { useEffect } from 'react';
export function Themes() {

    useEffect(() => {
        (document.querySelector('.themesTitle') as HTMLElement).innerHTML = TitleAndP.HTMLTitleh
    }, [])

    useEffect(() => {
        (document.querySelector('.divAroundParag') as HTMLElement).innerHTML = TitleAndP.HTMLParag
    }, [])

    return (

        <div className='themes'>
            < div className='themesTitle'> </div>
            <div className='divAroundgallery'>

                <GalleryWithnoClicking images={themesArr} />
                <div className='divAroundParag'></div>
            </div>

        </div>
    )
}