import {useEffect, useState} from "react";

function GetPostsData() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let getData = async () => {
            let response = await fetch("https://dummyjson.com/posts");
            let data = await response.json()
            setPosts(data.posts)
        }

        getData();
    }, [])

    return (
        <>
            <ul>
                {posts.map(post => <li>
                    <h3 className="postTitle">{post.title}</h3>
                    <p className="postBody">{post.body}</p>
                    </li>)}
            </ul>
        </>
    )
}

export default GetPostsData;