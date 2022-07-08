import React from "react";
import {Button, Checkbox, Divider, Form, Input} from "antd";
import {useNavigate} from "react-router-dom"
import './login.css'
function Login() {
    let natigate = useNavigate()
    const signUp = () => {
        natigate('/signup')
    }
    return (
        <>
            <div className="container-login">
                <h3 className="title-login">Log in</h3>

                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 2,
                            span: 8,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 10,
                            span: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit"className="button-signup">
                            Login
                        </Button>
                        <Button type="primary"  htmlType="submit" onClick={ () => signUp()}>
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>

           );

}
export default Login
