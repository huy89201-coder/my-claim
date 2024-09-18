import React from "react";
import "./App.scss";
import { Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="btn-routing">
        <Button className="btn btn-blue" onClick={() => navigate("TRAVAUX")}>
          TRAVAUX
        </Button>
        <Button className="btn btn-blue" onClick={() => navigate("SYNDIC")}>
          SYNDIC
        </Button>
        <Button className="btn btn-blue" onClick={() => navigate("RESTAURANT")}>
          RESTAURANT
        </Button>
        <Button className="btn btn-blue" onClick={() => navigate("HOTELLERIE")}>
          HOTELLERIE
        </Button>
      </div>
      <div className="form">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
