import { useContext } from 'react';
import { MessageContext } from './allCreateContext';  // 引入 MessageContext

/**
 * useMessage 是一个自定义 Hook，用于在组件中访问 MessageContext 提供的 API。
 * @returns {Object} 返回一个对象，包含 success、warning 和 error 方法，用于显示不同类型的消息。
*/
export const useMessage = () => {
    const messageApi = useContext(MessageContext);  // 获取 messageApi
    if (!messageApi) {
        throw new Error('useMessage must be used within a MessageProvider');
    }
    const success = (content) => {
        return messageApi.open({
            type: 'success',
            content: content,
        })
    }
    const warning = (content) => {
        return messageApi.open({
            type: 'warning',
            content: content,
        })
    }
    const error = (content) => {
        return messageApi.open({
            type: 'error',
            content: content,
        })
    }
    return {
        success,
        warning,
        error,
    };
};
