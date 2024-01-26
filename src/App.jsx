import "./styles/App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ContextProvider from "./ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Outlet />
      </ContextProvider>
    </>
  );
}

export default App;
