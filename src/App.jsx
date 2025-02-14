
// import { RouterProvider } from "react-router-dom";
// import router from "./router/index";
import { MessageProvider } from "./components/MessageProvider";
import Router from "@/router/index";
function App() {
  return (
    <>
      <MessageProvider>
        <Router />
      </MessageProvider>
    </>
  )
}

export default App
