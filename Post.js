import React from "react"
import PostItem from './PostItem'
import "./Post.css"
export default function Post(){
    const post = [
        {
            upvote:547,
            image: "https://images.unsplash.com/photo-1662374591460-702b18d133c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
            title : "question about new wallet",
            user : "theindependentonline",
            subreddit : "politics",
            comments_count:284,

        },
        
    ]
    return(
        <div className="post">
            {post.map(post =>(
                <PostItem post={post}/>

            ))}

            
        </div>

    )
}
