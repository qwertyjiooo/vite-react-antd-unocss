import { createRoot } from 'react-dom/client'
import 'virtual:uno.css'
import '@ant-design/v5-patch-for-react-19'; // antd v5 修复 react 19
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
