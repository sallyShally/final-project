import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Post } from '../components/post';

export function Sexual() {
    let [Posts, setPosts] = useState([{ postId: "", userId: "string", desc: "", like: [], Comment: [], date: "", img: "", Askpro: false }]);
    let url = 'http://127.0.0.1:5789/post/sexual';
    let [fetching, setFetching] = useState(true)

    useEffect(() => {

        axios.get(url)
            .then(response => {
                console.log(response.data);

                setPosts(response.data);
                setFetching(false);
            });
    }

        , [])

    return fetching ? (<>loading</>) :
        (
            <div>


                {Posts.map((curr, i) => (

                    <Post key={i} postItems={curr} />

                ))}
            </div>
        )
}

