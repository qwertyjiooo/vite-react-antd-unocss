// 获取token
const getToken = () => {
    // 从sessionStorage中获取token
    const token = sessionStorage.getItem("token");
    // 如果token存在，则返回token，否则返回null
    if (token) {
        return token;
    } else {
        return null;
    }
};

const setToken = (token) => {
    sessionStorage.setItem("token", token);
};

const removeToken = () => {
    sessionStorage.removeItem("token");
};

export const tokenUtils = {
    getToken,
    setToken,
    removeToken,
};