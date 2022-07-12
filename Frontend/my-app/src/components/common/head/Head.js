import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';
import "./Head.css"
import {ThunderboltFilled, ThunderboltTwoTone} from "@ant-design/icons";
const { Link } = Anchor;

function AppHeader() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <div className="top-logo">
                        <ThunderboltTwoTone style={{fontSize: '52px'}} />
                        <h3 className="site-title">
                            <a>NhatHoang</a>
                        </h3>
                    </div>
                    <p className="site-description">Personal Blog</p>
                </div>
                <div className="mobileHidden">
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features" />
                        <Link href="#works" title="How it works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Anchor targetOffset="65">
                            <Link href="#hero" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#feature" title="Features" />
                            <Link href="#works" title="How it works" />
                            <Link href="#faq" title="FAQ" />
                            <Link href="#pricing" title="Pricing" />
                            <Link href="#contact" title="Contact" />
                        </Anchor>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
