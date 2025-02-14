import { useState } from 'react';
import PropTypes from 'prop-types';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './index.scss';

const Input = ({ prefix, prefixCls, placeholder, maxLength, type, size = 'default', value, onChange, className, style }) => {
  const [isEye, setIsEye] = useState(false);
  const [isPassword, setIsPassword] = useState('password');

  // 切换密码显示
  const toggleEye = () => {
    setIsEye(!isEye);
    setIsPassword(isEye ? 'password' : 'text');
  };

  // 限制输入为数字
  const restrictInput = (e) => {
    const restrictedValue = e.target.value.replace(/[^\d]/g, '');
    e.target.value = restrictedValue;
  };

  // 渲染类型不同的input
  const renderInput = () => {
    switch (type) {
      case 'password':
        return (
          <div className='flex-1 flex items-center'>
            <input
              className='flex-1'
              value={value}
              onChange={onChange}
              type={isPassword}
              maxLength={maxLength}
              placeholder={placeholder}
            />
            {isEye ? (
              <EyeOutlined className='color-[#a9adb3] hover:color-[#409eff]' onClick={toggleEye} />
            ) : (
              <EyeInvisibleOutlined className='color-[#a9adb3] hover:color-[#409eff]' onClick={toggleEye} />
            )}
          </div>
        );
      case 'number':
        return (
          <input
            className="flex-1"
            value={value || ''}
            onChange={onChange}
            type="text"
            maxLength={maxLength}
            placeholder={placeholder}
            onInput={restrictInput}
          />
        );
      default:
        return (
          <input
            className='flex-1'
            value={value}
            onChange={onChange}
            type={type}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        );
    }
  };

  return (
    <div className={`input_container ${size} ${className}`} style={style}>
      {prefix && <div className='input_title'>{prefix}</div>}
      {renderInput()}
      {prefixCls && <div className='input_title'>{prefixCls}</div>}
    </div>
  );
};

Input.propTypes = {
  prefix: PropTypes.string, // 前缀
  prefixCls: PropTypes.string, // 后缀
  placeholder: PropTypes.string, // 提示
  maxLength: PropTypes.number, // 最大长度
  type: PropTypes.string, // 类型
  size: PropTypes.string, // 尺寸
  value: PropTypes.string, // 值
  onChange: PropTypes.func, // 事件
  className: PropTypes.string, // 类名
  style: PropTypes.object, // 样式
};

export default Input;
