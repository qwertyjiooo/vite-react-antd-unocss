// 弹窗组件
import { message } from 'antd';
import PropTypes from 'prop-types';
import { MessageContext } from '@/hooks/allCreateContext';

export const MessageProvider = ({ children }) => {
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <MessageContext.Provider value={messageApi}>
            {contextHolder}
            {children}
        </MessageContext.Provider>
    );
};

MessageProvider.propTypes = {
    children: PropTypes.node.isRequired, // 子组件
};
