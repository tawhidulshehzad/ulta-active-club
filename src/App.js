import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";

function App() {
  return (
    <div>
      <Header></Header>
      <Items></Items>
      <Blog></Blog>
      <ToastContainer />
    </div>
  );
}

export default App;
