import { useEffect, useState } from "react"
import { MoreVert } from "@material-ui/icons";
import { TiDelete } from "react-icons/ti";
import '../styles/Components/post.css'
import axios from "axios";
import { Star } from "@material-ui/icons";
import { getId } from "../configstore";


export function Post(props: { postItems: { postId: string, userId: string, desc: string, like: Array<any>, Comment: Array<any>, date: string, img: string, Askpro: Boolean } }) {

    // const [like, setLike] = useState(props.postItems.like.length);
    // const [isLiked, setIsLiked] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    const [isopen, setisopen] = useState(false);
    let [fetching, setfetch] = useState(true);
    let [Fetching, setFetch] = useState(true);
    let Id = props.postItems.userId;
    let [comments, setcomments] = useState(props.postItems.Comment);
    let [isEditing, setisEditing] = useState(false)
    let [postInfo, setpostInfo] = useState({
        userId: props.postItems.userId,
        desc: ""
    })

    let url = 'http://127.0.0.1:5789/people/';
    let url1 = 'http://127.0.0.1:5789/post/' + props.postItems.postId;
    let url2 = 'http://127.0.0.1:5789/post/AddComment/' + props.postItems.userId + '/' + props.postItems.postId
    let url3 = "http://127.0.0.1:5789/post/put/" + props.postItems.postId;

    const [user, setuser] = useState({ nickname: "", proCategory: "" })
    const [desc, setDesc] = useState('');

    const [Commenter, setCommenter] = useState({ nickname: "" })

    useEffect(() => {

        axios.get(url + Id)
            .then(response => {
                setuser(response.data)
                setfetch(false)
            });


        axios.get(url + getId().id)
            .then(response => {
                setCommenter(response.data)
                setFetch(false)
            });
    }, [])



    const likeHandler = () => {
        // setLike(isLiked ? like + 1 : like - 1)
        // setIsLiked(!isLiked)
    }

    const handleUpdate = () => {

        axios.put(url3, {
            postInfo
        })
            .then(response => {
                console.log(response.data);

            });

    }

    const handleDelete = () => {

        axios.delete(url1, {
            data: {
                userId: Id
            }
        })
            .then(response => {
                console.log(response.data);

            });
    }

    const SendComment = () => {
        const comment = {
            nickname: Commenter.nickname,
            content: desc,
            commentId: JSON.stringify(props.postItems.Comment.length + 1),
            secCommentId: "-1"
        }

        axios.put(url2, {
            comment
        })
            .then(response => {
                console.log(response.data);
                comments.push(comment);
                setcomments(comments);
                setDesc("")
            });
    }
    function textWasChanged(e: React.ChangeEvent<HTMLInputElement>, arg1: string) {
        let newObj = {
            userId: postInfo.userId,
            desc: e.target.value
        };
        console.log(newObj);
        setpostInfo(newObj);
        console.log(postInfo);


    }


    return fetching && Fetching ? (<>loading</>) :
        (
            <div className="aroundAll">
                <div className="post">
                    <div className="postWrapper">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img
                                    className="postProfileImg"
                                    src="./images/anonymous.jpg"
                                    alt=""
                                />
                                <span className="postUsername">
                                    {user.nickname}

                                </span>
                                <span className="postDate">{props.postItems?.date}</span>
                            </div>
                            <div className="postTopRight">
                                {props.postItems.Askpro &&
                                    <Star htmlColor="green" />
                                }
                                <MoreVert onClick={() => { setisopen(isopen ? false : true) }} />
                                {isopen &&
                                    <div>
                                        <ul>
                                            <li onClick={() => { setisEditing(!isEditing) }}> edit </li>
                                            <li onClick={() => { handleDelete() }}>delete </li>
                                        </ul>
                                    </div>
                                }

                            </div>
                        </div>
                        <div className="postCenter">
                            <img className="postImg" src={props.postItems.img} />

                            {isEditing ? <div><input type="text" name="content" defaultValue={props.postItems.desc} onBlur={(e: React.ChangeEvent<HTMLInputElement>) => { textWasChanged(e, "location") }}
                            />
                                <button onClick={() => { handleUpdate() }}> save </button></div>
                                : <p> {props.postItems.desc} </p>
                            }


                        </div>
                        <div className="postBottom">
                            <div className="postBottomLeft">

                                <img className="likeIcon" src="../images/like.png" onClick={likeHandler} alt="" />
                                <img className="likeIcon" src="../images/heart.png" onClick={likeHandler} alt="" />
                                {/* <span className="postLikeCounter">{like} people like it</span> */}
                            </div>
                            {(user.proCategory !== "" && props.postItems.Askpro || user.proCategory === "" && !props.postItems.Askpro) &&
                                <div className="postBottomRight">
                                    <span onClick={() => { setisOpen(isOpen ? false : true) }} className="postCommentText">{props.postItems.Comment.length} comments</span>
                                </div>
                            }
                            {isOpen &&
                                <div>

                                    {comments.map((curr, i) => (
                                        curr.secCommentId === "-1" ?
                                            <Comment key={i} Comment={props.postItems.Comment} userId={props.postItems.userId} postId={props.postItems.postId} commentItems={curr} />
                                            : null
                                    ))
                                    }
                                    <input type="text" placeholder="Add comment" value={desc} onChange={event => setDesc(event.target.value)} />
                                    <button onClick={() => { SendComment() }}>send </button>

                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
}



function Comment(props: { userId: string, postId: string, Comment: Array<any>, commentItems: { nickname: string, content: string, commentId: string, secCommentId: string } }) {
    const url = 'http://127.0.0.1:5789/post/DeleteComment/' + props.userId + '/' + props.postId + '/' + props.commentItems.commentId;
    const [isOpen, setisOpen] = useState(false);
    let [comments, setcomments] = useState(props.Comment);
    const [desc, setDesc] = useState('');
    let url2 = 'http://127.0.0.1:5789/post/AddComment/' + props.userId + '/' + props.postId



    const handleDelete = () => {

        axios.delete(url)

            .then(response => {
                console.log(response.data);

            });
    }

    const SendComment = () => {
        const comment = {
            nickname: "sally",
            content: desc,
            commentId: JSON.stringify(props.Comment.length + 1),
            secCommentId: props.commentItems.commentId
        }

        axios.put(url2, {
            comment
        })
            .then(response => {
                console.log(response.data);
                comments.push(comment);
                setcomments(comments);
                setDesc("")
            });
    }


    return (
        <div>
            <span >
                {props.commentItems.nickname}

            </span>
            <input defaultValue={props.commentItems.content} />
            <span onClick={() => { setisOpen(isOpen ? false : true) }}> Reply </span>
            {isOpen &&
                <div>
                    {comments.map((curr, i) => (
                        curr.secCommentId === props.commentItems.commentId ?
                            <div key={i}>
                                <span> {curr.nickname}</span>
                                <input defaultValue={curr.content} />
                            </div>
                            : null
                    ))
                    }
                    <input type="text" placeholder="Add comment" value={desc} onChange={event => setDesc(event.target.value)} />
                    <button onClick={() => { SendComment() }}>send </button>

                </div>

            }
            <TiDelete onClick={() => { handleDelete() }} />


        </div >
    )
}
