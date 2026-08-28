import { useEffect, useState } from "react";
import PostLayout from "./PostLayout";

function GetPostsData() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let getData = async () => {
            let response = await fetch("https://dummyjson.com/posts");
            let data = await response.json();

            setPosts(data.posts);
        };

        getData();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <PostLayout
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
}

export default GetPostsData;