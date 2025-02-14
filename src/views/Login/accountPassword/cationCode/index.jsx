import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "@/components/Input/index";
import { Button } from "antd";

const CationCode = ({ isTag }) => {
    const [formValues, setFormValues] = useState({
        phoneNumber: '',
        verificationCode: ''
    });

    const handleInputChange = (field) => (e) => {
        setFormValues(prevState => ({
            ...prevState,
            [field]: e.target.value
        }));
    };
    useEffect(() => {
        if (isTag) {
            setFormValues({
                phoneNumber: '',
                verificationCode: ''
            });
        }
    }, [isTag]);

    const isDisabled = formValues.phoneNumber.length !== 11;

    const inputStyle = { borderRadius: '10px 10px 0 0', borderBottom: 'none' };
    const verificationCodeStyle = { borderRadius: '0 0 10px 10px' };

    return (
        <>
            {!isTag && (
                <div>
                    <form>
                        <Input
                            size="large"
                            value={formValues.phoneNumber}
                            onChange={handleInputChange('phoneNumber')}
                            type="number"
                            maxLength={11}
                            prefix={<div>手机号</div>}
                            prefixCls={
                                <div className="flex items-center">
                                    <div
                                        className="w-[2px] h-[20px] bg-[#e3e5e7]"
                                        style={{ borderRadius: '10px' }}
                                    ></div>
                                    <div
                                        className="flex-1 text-[14px] color-[#409eff] m-l-[10px] cursor-pointer"
                                        style={{
                                            color: isDisabled ? '#bfbfbf' : '#409eff'
                                        }}
                                    >
                                        获取验证码
                                    </div>
                                </div>
                            }
                            placeholder="请输入手机号"
                            style={inputStyle}
                        />
                        <Input
                            size="large"
                            value={formValues.verificationCode}
                            onChange={handleInputChange('verificationCode')}
                            maxLength={6}
                            prefix={<div>验证码</div>}
                            placeholder="请输入验证码"
                            style={verificationCodeStyle}
                        />
                    </form>
                    <div className="flex justify-center items-center m-t-[20px]">
                        <Button
                            size="large"
                            type="primary"
                            disabled={formValues.phoneNumber === '' || formValues.verificationCode === ''}
                            className="w-[50%]"
                            style={{ fontSize: '14px' }}
                        >
                            登录
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

CationCode.propTypes = {
    isTag: PropTypes.bool
};

export default CationCode;
