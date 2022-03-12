
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Post } from './post'

export function Feed(props: { category: string }) {
    let [Posts, setPosts] = useState([{ postId: "", userId: "", desc: "", like: [], Comment: [], date: "", img: "", Askpro: false }]);
    let [fetching, setFetch] = useState(true);
    let url = 'http://127.0.0.1:5789/post/' + props.category

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(url);
                console.log(response.data);
                setPosts(response.data);
                setFetch(false);
            });
    }, [])

    return fetching ? (<>loading</>) :
        (
            <div>
                {Posts.map((curr, i) => (

                    <Post key={i} postItems={curr} />

                ))}
            </div>
        )
}
