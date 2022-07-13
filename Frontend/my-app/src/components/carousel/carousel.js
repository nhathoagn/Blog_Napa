import React from "react";
import {Button, Carousel, Image} from "antd";
import "./carousel.css"
import image1 from '../../assets/images/bg-works.jpg';
import image2 from '../../assets/images/bg-hero.jpg';
const image4 = require("../../assets/images/home_slider.jpg")

const items = [
    {
        key: '1',
        categories: "Discovery",
        title: 'Web and mobile payment built for developers',
        content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        img: image4
    },
    {
        key: '2',
        categories: "Sport",
        title: 'Work better together. Schedule meetings',
        content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        img: image4

    },
    {
        key: '3',
        categories: "Food",
        title: 'The best app to increase your productivity',
        content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        img: image4
    },
]
function AppCarousel() {


    return(
        <Carousel autoplay>
            {items.map( item => {
                return(
                    <div className="heroBlock" key={item.key}>
                           <div className="content" >
                               <div className="img-carousel">
                                   <Image src={item.img} preview={false}/>
                               </div>
                               <div className="content-carousel">
                                   <h2 className="categories-carousel">{item.categories}</h2>
                                   <h3>{item.title}</h3>
                                   <p>{item.content}</p>
                               </div>
                               <div className="btnHolder">
                                   <Button type="primary" size="large">Read more</Button>
                               </div>
                           </div>
                       </div>

                )
            })}
        </Carousel>
    );

    // return(
    //     <div className="heroBlock"  id="hero">
    //         <Carousel >
    //             {items.map( item => {
    //                 return(
    //                         <div className="container-fluid"  key={item.key}>
    //                             <div  className="content">
    //                                 <div className="img-carousel heroBlock">
    //                                     <Image className="img-carousel" src={image4}/>
    //                                 </div>
    //                                 <div className="content-carousel">
    //                                     <h3>{item.title}</h3>
    //                                     <p>{item.content}</p>
    //                                     <div className="btnHolder">
    //                                         <Button type="primary" size="large">Learn more</Button>
    //                                         <Button size="large"><i className="fas fa-desktop"></i>Wath a Demo</Button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //
    //                 )
    //             })}
    //         </Carousel>
    //     </div>
    // )


}
export default AppCarousel
