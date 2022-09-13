import React from "react"
import "./PostItem.css"
export default function PostItem(props) {
    const {title,upvote,image,user,subreddit,comment_count } = props.post
    return (
        <div className="post">
            <div className="post__left"></div>
            <i className="fas fa-caret-up"></i>
            <span>{upvote}</span>
            <i className="fas fa-caret-down"></i>
            <div className="post__counter">
            <img src={image} style={{ width: "80px", height: "80px" }} />
            </div>
            <div className="post__right">
                <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
                <span className="post__info">
                    submiited an hour ago by
                    <a href={`/u/${user}`}>{user}</a>{" "}
                    to
                    {" "}<a href={`/r/${subreddit}`}>{subreddit}</a>
                </span>
                <p className="post__info">
                    {comment_count} comments | save |hide |report
                </p>
            </div>

        </div>

    )
}