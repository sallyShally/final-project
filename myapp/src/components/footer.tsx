
import { useEffect } from 'react';
import { footerTitleObj } from '../utils/data';
import '../styles/Components/footer.css';


export function Footer(props: { footerItems: { Icon: JSX.Element, url: string }[] }) {
    useEffect(() => {
        (document.querySelector('.footerTitle') as HTMLElement).innerHTML = footerTitleObj.innerHTML

    }, [])
    return (
        <div className="footer">
            <div className="allItems">
                <div className='footerTitle'></div>
                <ul className="pagesItemsUl">
                    {props.footerItems.map((curr, i) => (
                        <li key={i}> <a href={curr.url}> {curr.Icon} </a></li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
