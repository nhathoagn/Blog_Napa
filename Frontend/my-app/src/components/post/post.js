import React from "react";
import "./post.css"
import {Card, Col, Divider, Row} from "antd";
import Meta from "antd/es/card/Meta";
import image1 from "../../assets/images/post/recipe-1.jpg"

function AppPost() {
    return (
        <div className="post-container">
            <div className="post-top-view">
                <div className="top-recipe spad">
                    <div className="section-title">
                        <h5>Top read this Week</h5>
                    </div>
                </div>
                <div className="post-card-view">
                    {/*gutter={[16, 16]}*/}
                    <Row justify="space-around">
                        <Col span={4}>
                            <Card
                                hoverable
                                style={{
                                    width: 754,

                                }}
                                cover={<img alt="example"
                                            src={image1}
                                />}
                            >
                                <div className="post-card-categories">
                                    <h2>Food</h2>
                                </div>
                                <Meta title="Europe Street beat" description="www.instagram.com"/>
                            </Card>

                        </Col>
                        <Col span={4}>
                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <Row gutter={[65, 65]}>
                                        <Col span={12}>
                                            <img style={{
                                                width: 180,
                                                height: 180,
                                                borderRadius: 10
                                            }} alt="example"
                                                 src="https://th.bing.com/th/id/OIP.1KbCzbtgkjIQ0bPGQAoh2AHaF-?w=233&h=187&c=7&r=0&o=5&pid=1.7"/>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{width: "294px", height: 180}}>
                                                <div className="post-card-categories">
                                                    <h2>Food</h2>
                                                </div>
                                                <Meta title="Europe Street beat" description="www.instagram.com"/>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row gutter={[65, 65]}>
                                        <Col span={12}>
                                            <img style={{
                                                width: 180,
                                                height: 180,
                                                borderRadius: 10
                                            }} alt="example"
                                                 src="https://th.bing.com/th/id/OIP.1KbCzbtgkjIQ0bPGQAoh2AHaF-?w=233&h=187&c=7&r=0&o=5&pid=1.7"/>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{width: "294px", height: 180}}>
                                                <div className="post-card-categories">
                                                    <h2>Food</h2>
                                                </div>
                                                <Meta title="Europe Street beat" description="www.instagram.com"/>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row gutter={[65, 65]}>
                                        <Col span={12}>
                                            <img style={{
                                                width: 180,
                                                height: 180,
                                                borderRadius: 10
                                            }} alt="example"
                                                 src="https://th.bing.com/th/id/OIP.1KbCzbtgkjIQ0bPGQAoh2AHaF-?w=233&h=187&c=7&r=0&o=5&pid=1.7"/>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{width: "294px", height: 180}}>
                                                <div className="post-card-categories">
                                                    <h2>Food</h2>
                                                </div>
                                                <Meta title="Europe Street beat" description="www.instagram.com"/>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="post-new">
                <div className="top-recipe spad">
                    <div className="section-title">
                        <h5>New blogs</h5>
                    </div>
                </div>
                <div className="post-card-new">
                    {/*gutter={[16, 16]}*/}
                    <Row justify="space-around">
                        <Col span={4}>
                            <Card
                                hoverable
                                style={{
                                    width: 754,

                                }}
                                cover={<img alt="example"
                                            src={image1}
                                />}
                            >
                                <div className="post-card-categories">
                                    <h2>Food</h2>
                                </div>
                                <Meta title="Europe Street beat" description="www.instagram.com"/>
                            </Card>

                        </Col>
                        <Col span={4}>
                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <Row gutter={[65, 65]}>
                                        <Col span={12}>
                                            <img style={{
                                                width: 180,
                                                height: 180,
                                                borderRadius: 10
                                            }} alt="example"
                                                 src="https://th.bing.com/th/id/OIP.1KbCzbtgkjIQ0bPGQAoh2AHaF-?w=233&h=187&c=7&r=0&o=5&pid=1.7"/>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{width: "294px", height: 180}}>
                                                <div className="post-card-categories">
                                                    <h2>Food</h2>
                                                </div>
                                                <Meta title="Europe Street beat" description="www.instagram.com"/>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row gutter={[65, 65]}>
                                        <Col span={12}>
                                            <img style={{
                                                width: 180,
                                                height: 180,
                                                borderRadius: 10
                                            }} alt="example"
                                                 src="https://th.bing.com/th/id/OIP.1KbCzbtgkjIQ0bPGQAoh2AHaF-?w=233&h=187&c=7&r=0&o=5&pid=1.7"/>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{width: "294px", height: 180}}>
                                                <div className="post-card-categories">
                                                    <h2>Food</h2>
                                                </div>
                                                <Meta title="Europe Street beat" description="www.instagram.com"/>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row gutter={[65, 65]}>
                                        <Col span={12}>
                                            <img style={{
                                                width: 180,
                                                height: 180,
                                                borderRadius: 10
                                            }} alt="example"
                                                 src="https://th.bing.com/th/id/OIP.1KbCzbtgkjIQ0bPGQAoh2AHaF-?w=233&h=187&c=7&r=0&o=5&pid=1.7"/>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{width: "294px", height: 180}}>
                                                <div className="post-card-categories">
                                                    <h2>Food</h2>
                                                </div>
                                                <Meta title="Europe Street beat" description="www.instagram.com"/>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    )
}

export default AppPost;
