
import { Card } from './card';

export function Gallery(props: { imagesUrl: { src: string, title: string, url: string }[] }) {


    return (
        <div className="gallery">
            {props.imagesUrl.map((curr, i) => (
                <Card imagesUrl={curr} key={i} />
            ))}
        </div>
    );
}


export function GalleryWithnoClicking(props: { images: { src: string, title: string }[] }) {
    return (
        <div className='galleryWithnoclick'>
            {props.images.map((curr, i) => (
                <img src={curr.src} key={i} />
            ))}
        </div>
    )
}


