import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "@/components/Input/index";
import { Button } from "antd";
import { api } from "@/api/index"
import md5 from "js-md5";
import { useNavigate } from "react-router-dom"
import { useMessage } from "@/hooks/useMessage";

// 常量提取
const DEFAULT_FORM_VALUES = {
    inputValue: '',
    passwordValue: '',
};

const Account = ({ isTag, dispatch }) => {
    const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);

    const handleInputChange = (field) => (e) => {
        setFormValues((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }));
    };

    // 登录按钮是否可点击的条件
    // const isLoginButtonDisabled = formValues.inputValue === '' || formValues.passwordValue === '';

    // 点击登录按钮
    const navigate = useNavigate()
    const Message = useMessage();
    const handleLogin = () => {
        const data = {
            username: formValues.inputValue,
            password: md5(formValues.passwordValue + "chaoxingqiu~!@#$%^&*()_+147258369"),
        }
        api.login(data).then((res) => {
            Message.success("success", "登录成功");
            sessionStorage.setItem("token", res.data.sessionid);
            navigate('/home')
        }).catch(err => {
            Message.error(err.desc);
        })
    }

    useEffect(() => {
        if (!isTag) {
            setFormValues(DEFAULT_FORM_VALUES);
        }
    }, [isTag]);

    return (
        <>
            {/* {contextHolder} */}
            {isTag && (
                <div>
                    <form>
                        <Input
                            size="large"
                            prefix={<div>账号</div>}
                            value={formValues.inputValue}
                            maxLength={11}
                            placeholder="请输入账号"
                            onChange={handleInputChange("inputValue")}
                            autocomplete="username"
                            style={{ borderRadius: '10px 10px 0 0', borderBottom: 'none' }}
                        />
                        <Input
                            size="large"
                            type="password"
                            value={formValues.passwordValue}
                            onChange={handleInputChange("passwordValue")}
                            maxLength={11}
                            prefix={<div>密码</div>}
                            prefixCls={
                                <div className="m-l-[10px] text-[14px] color-[#409eff] cursor-pointer" onClick={() => Message.warning('warning', '功能开发中...')}>
                                    忘记密码？
                                </div>
                            }
                            placeholder="请输入密码"
                            autocomplete="current-password"
                            style={{ borderRadius: '0 0 10px 10px' }}
                        />
                    </form>

                    <div className="flex justify-center items-center m-t-[20px]">
                        <Button
                            type="default"
                            size="large"
                            className="flex-1 m-r-[10px] p-[10px]"
                            style={{ fontSize: "14px" }}
                            onClick={() => dispatch({ type: "accountIsTag", payload: false })}
                        >
                            注册
                        </Button>

                        <Button
                            size="large"
                            type="primary"
                            // disabled={isLoginButtonDisabled}
                            className="flex-1 m-l-[10px] p-[10px]"
                            style={{ fontSize: "14px" }}
                            onClick={handleLogin}
                        >
                            登录
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

Account.propTypes = {
    isTag: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default Account;
