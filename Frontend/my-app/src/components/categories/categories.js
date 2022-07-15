import React from "react";
import "./categories.css"
import {Col, Descriptions, Row} from "antd";
import DescriptionsItem from "antd/lib/descriptions/Item";
const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;
function AppCategories() {
    return(
        // <div className="different_places">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-lg-12">
        //                 <div className="main_title">
        //                     <h1>Let Us Find Your Places Within a Sec.</h1>
        //                     <p>
        //                         There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
        //                         exciting to think
        //                         about setting up your own viewing station.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="col-lg-3 col-md-6">
        //                 <div className="single_place wow fadeIn text-center mt-480" data-wow-duration="1s">
        //                     <img className="img-fluid w-100" src="../../assets/images/places/p1.jpg" alt="" />
        //                     <div className="overlay" />
        //                     <h4>Waterfall
        //                         <br /> Mountain Island</h4>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3 col-md-6">
        //                 <div className="single_place wow fadeIn text-center mt-240" data-wow-duration="1s" data-wow-delay=".2s">
        //                     <img className="img-fluid w-100" src="../../assets/images/places/p2.jpg" alt="" />
        //                     <div className="overlay" />
        //                     <h4>Waterfall
        //                         <br /> Mountain Island</h4>
        //                 </div>
        //                 <div className="single_place wow fadeIn text-center" data-wow-duration="1s" data-wow-delay="1s">
        //                     <img className="img-fluid w-100" src="../../assets/images/places/p3.jpg" alt="" />
        //                     <div className="overlay" />
        //                     <h4>Waterfall
        //                         <br /> Mountain Island</h4>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3 col-md-6">
        //                 <div className="single_place wow fadeIn text-center" data-wow-duration="1s" data-wow-delay=".4s">
        //                     <img className="img-fluid w-100" src="../../assets/images/places/p4.jpg" alt="" />
        //                     <div className="overlay" />
        //                     <h4>Waterfall
        //                         <br /> Mountain Island</h4>
        //                 </div>
        //                 <div className="single_place wow fadeIn text-center" data-wow-duration="1s" data-wow-delay=".8s">
        //                     <img className="img-fluid w-100" src="../../assets/images/places/p5.jpg" alt="" />
        //                     <div className="overlay" />
        //                     <h4>Waterfall
        //                         <br /> Mountain Island</h4>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3 col-md-6">
        //                 <div className="single_place wow fadeIn text-center mt-240" data-wow-duration="1s" data-wow-delay=".6s">
        //                     <img className="img-fluid w-100" src="../../assets/images/places/p5.jpg" alt="" />
        //                     <div className="overlay" />
        //                     <h4>Waterfall
        //                         <br /> Mountain Island</h4>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>



        <div className="categories-container">
            <Row gutter={[16,16]}>
                <Col span={24}>
                    <div className="title-categories">
                        <h1>Let Us Find Your Places Within a Sec.</h1>
                        <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
                    </div>
                    <div className="content-categories">
                    </div>
                </Col>
            </Row>
           <div>
               <Row gutter={[16,16]}>
                   <Row gutter={[16, 16]}>
                       <Col span={6} style={{width:"100%", backgroundColor: "black"}}/>
                       <Col span={6} style={{width:"100%", backgroundColor: "black"}}/>
                       <Col span={6} style={ {backgroundColor: "red", height: "23px"}}>
                       </Col>
                       <Col span={6} style={{width:"100%", backgroundColor: "black"}}/>
                   </Row>
               </Row>
           </div>
        </div>
    )
}
export default AppCategories
