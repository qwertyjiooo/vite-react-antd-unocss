
import { Provider } from 'react-redux'
import { MessageProvider } from "./components/MessageProvider";
import Router from "@/router/index";
import store from "@/store";
import '@/App.css'
function App() {
  return (
    <>
      <Provider store={store}>
        <MessageProvider>
          <Router />
        </MessageProvider>
      </Provider>
    </>
  )
}

export default App
