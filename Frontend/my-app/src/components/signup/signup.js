import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
} from 'antd';
import React, {useRef, useState} from 'react';
import  "./signup.css"
import {useNavigate} from "react-router-dom";
import redux from "redux";
import {connect} from "react-redux";
import UserServices from "../../services/users/users"
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 16,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 8,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 8,
            offset: 8,

        },
        sm: {
            span: 10,
            offset: 8,

        },
    },
};

function Signup (props) {
    const [form] = Form.useForm();
    let natigate = useNavigate()
    const sign = async (values) => {
        console.log('Received values of form: ', values);
       // await  setState({
       //      firstName: values.firstname,
       //      lastName: values.lastname,
       //      email: values.email,
       //      gender: values.gender,
       //      phoneNumber: values.phoneNumber,
       //      address: values.address,
       //      password: values.password
       //  })
       //  let data = {
       //      firstName: "athoanng01",
       //      lastName: "nguyennh",
       //      email: "nguyennhathoang35@gmail.com",
       //      gender: "maleee",
       //      phoneNumber: "2315351",
       //      avatar: "https://hinhnen123.com/avatar-trang/",
       //      password: "anhoango",
       //      address: "230 Đường Trần Hưng Đạo, An Hải, An Hải Tây, Sơn Trà, Da Nang"
       //  }
        // const data1 = JSON.stringify(data)
        await UserServices.create(values)
        natigate("/login")
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        phoneNumber: "",
        address: "",
        avatar: "",
        password: ""

    });

    console.log("state", state)

    const isChange = (e) =>{
        setState({...state})
    }

    const login = () => {
        natigate('/login')
    }

    return (
        <div className="container-signup">
            <h3 className="title-signup">Sign up</h3>
            <Form className="form-signup"
                {...formItemLayout}
                form={form}
                name="register"
                  onFinish={sign}
                  autoComplete="off"
                initialValues={{
                    prefix: '86',
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                        {
                            type: 'string',
                            message: 'The input is not valid !',
                        },
                        {
                            required: true,
                            message: 'Please input your First Name !',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                        {
                            type: 'string',
                            message: 'The input is not valid !',
                        },
                        {
                            required: true,
                            message: 'Please input your Last Name !',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please select your habitual residence!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="phoneNumber"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}

                    />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"

                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout} >
                    <Button type="primary" className="button-signup" htmlType="submit">
                        Sign up
                    </Button>
                    <Button type="primary" htmlType="submit" onClick={ () => login()}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Signup













































