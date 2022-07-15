import React from "react";
import AppCarousel from "../carousel/carousel";
import AppPost from "../post/post";
import AppCategories from "../categories/categories";

function AppHome() {
    return(
        <div className="main">
            <AppCarousel/>
            <AppPost/>
            <AppCategories/>
        </div>
    )
}
export default AppHome
