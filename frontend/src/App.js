import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Homepage from "./Pages/Homepage";
import axios from "axios";
import Display from "./components/Display";
import Data from "./Data";
import Next from "./Pages/Next";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/mandi" component={Next} exact />
          {/* <Route path="/" render={() => <Display userData={userData} />} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
