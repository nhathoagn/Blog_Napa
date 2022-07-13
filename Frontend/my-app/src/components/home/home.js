import React from "react";
import AppCarousel from "../carousel/carousel";
import AppPost from "../post/post";

function AppHome() {
    return(
        <div className="main">
            <AppCarousel/>
            <AppPost/>
        </div>
    )
}
export default AppHome
