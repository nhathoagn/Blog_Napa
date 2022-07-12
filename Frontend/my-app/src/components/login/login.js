import React, {useState} from "react";
import {Button, Checkbox, Divider, Form, Input} from "antd";
import {useNavigate} from "react-router-dom"
import LoginServices from "../../services/login/login"
import './login.css'
import {connect} from "react-redux";
function Login(props) {
    let natigate = useNavigate()
    const signUp = () => {
        natigate('/signup')
    }
    const [state, setState] = useState({
        user: ""
    });
    const login = async (values) => {
        console.log('Received values of form: ', values);
        const infoUser = await LoginServices.login(values)
        console.log("res login FE", infoUser.data.login)
        const users = infoUser.data.login
       await setState({...state,user: users})
        console.log("state", state.user)
        props.getInfoUser(state.user)
        props.changeStatusLogin()
        natigate('/home')

    }
    console.log("props",props)
    return (
        <>
            <div className="container-login">
                <h3 className="title-login">Log in</h3>

                <Form
                    onFinish={login}
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
                        name="email"
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
const mapStateToProps = (state, ownProps) =>{
    return {
        userObj: state.userObj,
        isLogin: state.isLogin

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
      return{
          getInfoUser: (userInfo) => {
              dispatch({type: "GET_DATA_USER", userInfo})
          },
          changeStatusLogin: () => {
              dispatch({type: "CHANGE_STATUS_LOGIN"})
          }
      }
}
    // return {
    //     getInfoUser: (userInfo) => {
    //         dispatch({type: "GET_DATA_USER", userInfo})
    //     }
    // }, {
    //     changeStatusLogin: () => {
    //         dispatch({type: "CHANGE_STATUS_LOGIN"})
    //     }
    // }
export default connect(mapStateToProps, mapDispatchToProps)(Login)
