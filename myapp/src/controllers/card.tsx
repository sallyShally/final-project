import '../styles/Components/Card.css';

export function Card(props: { imagesUrl: { src: string, title: string, url: string } }) {

    return (
        <div className="card" >

            <a href={props.imagesUrl.url}> <img src={props.imagesUrl.src} /></a>
            <div className='cardTitle'> {props.imagesUrl.title} </div>
        </div>
    );
};





