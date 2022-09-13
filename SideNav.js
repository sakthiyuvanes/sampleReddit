import React from "react";
import './SideNav.css'
export default function SideNav(){
    const menus = [
        {to:'/r/popular' ,text:"Popular"},
        {to:'/r/all' ,text:"All"},
        {to:'/random/' ,text:"Random"},
    ]
    const subreddits =[
        "askreddit",
        "worldNews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "new",
        "pics",
        "gifts",
        "aww",
        "mildyintresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful",
    
        
    
        
        
    ]
    return (
        <div className="sideNav">
            <div className="sideNav__logo">
                <img src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg"/>

            </div>
            <div className="sideNav__search"/>
            <input type="text" name="search" placeholder="search"/>
            <i className="fas fa-search"></i>
            <div>
            <div className="sideNav__link">
                <ul className="sideNav__menu">
                    {menus.map(menu => (
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}

                </ul>
                <hr />
                <ul className="sideNav__subreddit">
                    {subreddits.map(subreddit => (
                        <li><a href={ `/r/${subreddit}`}>{subreddit}</a></li>
                    ))}

                </ul>
                </div>           
            </div>
            </div>
            


        

    )
}