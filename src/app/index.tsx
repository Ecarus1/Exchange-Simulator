import React from "react";
import {Routes, Route} from 'react-router-dom';
import Main from "./main";

function App(): React.ReactElement {
  return(
    <>
      <Routes>
        <Route path={''} element={<Main/>}/>
      </Routes>
    </>
  );
}

export default React.memo(App);