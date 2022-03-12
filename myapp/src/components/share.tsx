import "../styles/Components/share.css";
import { PermMedia } from "@material-ui/icons";
import { getId } from '../configstore';
import axios from "axios";
import { useEffect, useState } from "react";

export function Share() {
    let url = 'http://127.0.0.1:5789/people/';
    let url1 = 'http://127.0.0.1:5789/post/';
    const Id = getId().id;
    url = url + Id;
    url1 = url1 + Id;

    const [user, setuser] = useState({ nickname: "", posts: [{}] });
    const [desc, setDesc] = useState('');
    const [needPro, setneedPro] = useState(false);
    const [category, setcategory] = useState("");
    let [fetching, setFetch] = useState(true);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data);

                setuser(response.data);
                setFetch(false);
            });
    }, [])

    function addPost() {
        const post = {
            postId: (user.posts.length !== undefined ? JSON.stringify(user.posts.length + 1) : "0"),
            userId: Id,
            desc: desc,
            Askpro: needPro,
            img: "",
            likes: [],
            Comment: [],
            category: category
        }

        axios.put(url1, {
            post
        })
            .then(response => {
                console.log(response.data);

            });
    }

    return fetching ? (<>loading</>) :
        (

            <div className="sharearoundAll">
                <div className="share">
                    <div className="shareWrapper">
                        <div className="shareTop">
                            <img className="shareProfileImg" src="./images/anonymous.jpg" alt="" />
                            <input onChange={event => setDesc(event.target.value)}
                                placeholder={"Whats in your mind" + " " + user.nickname + "?"}
                                className="shareInput"

                            />
                        </div>

                        <hr className="shareHr" />
                        <div className="shareBottom">
                            <div className="shareOptions">
                                <div className="shareOption">
                                    <PermMedia htmlColor="tomato" className="shareIcon" />
                                    <span className="shareOptionText">Photo or Video</span>
                                </div>
                                <div className="shareOption">
                                    <input type="checkbox" onChange={event => setneedPro(event.target.checked)} />
                                    <span className="shareOptionText">Professional</span>
                                </div>
                                <div className="shareOption">
                                    <span className="shareOptionText">Category:</span>
                                    <select name="" id="" onChange={event => setcategory(event.target.value)} >
                                        <option value="select" > select a category</option>
                                        <option value="ADHD"> my child - adhd   </option>
                                        <option value="visual impairment"> my child - visual impairment  </option>
                                        <option value="hearing impairment"> my child - hearing impairment  </option>
                                        <option value="bullying"> my child - bullying  </option>
                                        <option value=" physical "> violence - physical   </option>
                                        <option value="sexual"> violence - sexual  </option>
                                        <option value="verbal"> violence - verbal  </option>
                                    </select>
                                </div>
                            </div>
                            <button onClick={addPost} className="shareButton">Share</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}

