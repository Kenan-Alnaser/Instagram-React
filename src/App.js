import React, { useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Data from "./data.json";
import "./sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  // const [posts, setPosts] = useState(Data);

  return (
    <React.Fragment>
      <Header />
      <Gallery Data={Data} />
      <div className="loader"></div>
    </React.Fragment>
  );
}
export default App;
