import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";

function App() {
  return (
    <div>
      <Header></Header>
      <Items></Items>
      <ToastContainer />
    </div>
  );
}

export default App;
