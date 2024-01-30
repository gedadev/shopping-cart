import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ContextProvider from "./ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
