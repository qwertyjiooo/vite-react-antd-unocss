import { useState, useEffect } from 'react';

/**
 * 防抖 Hook
 * @param {Function} callback - 要执行的回调函数
 * @param {number} delay - 延迟时间，单位是毫秒
 * @return {Function} - 返回一个防抖函数
 */
const useDebounce = (callback, delay) => {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    // 设置一个定时器
    const handler = setTimeout(() => {
      callback(debouncedValue);  // 延迟执行传入的回调函数
    }, delay);

    // 清除之前的定时器（防止多次触发）
    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, delay, callback]);

  // 更新防抖值
  const debounce = (value) => {
    setDebouncedValue(value);
  };

  return debounce;
};

export default useDebounce;

/**
 * 使用示例：
 * const debouncedSearch = useDebounce((searchTerm) => {
 *   // 执行搜索操作
 },[500]);
 *
 * <input type="text" onChange={(e) => debouncedSearch(e.target.value)} />
 * 当用户输入时，会延迟500毫秒执行搜索操作
 * 
*/
