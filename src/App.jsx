
import { MessageProvider } from "./components/MessageProvider";
import Router from "@/router/index";
import useBearStore from "@/store";
import { ConfigProvider, theme } from "antd";
import '@/App.css'
function App() {
  // import('@/style/theme/13C2C2.less')
  const { bears } = useBearStore();
  return (
    <>
      <MessageProvider>
        <ConfigProvider
          theme={{
            algorithm: bears == 'default' ? theme.defaultAlgorithm  : theme.darkAlgorithm,
          }}
        >
          <Router />
        </ConfigProvider>
      </MessageProvider>
    </>
  )
}

export default App
