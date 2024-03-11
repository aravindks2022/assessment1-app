import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthorSegment from './Component/AuthorSegment';
import DisplayNames from './Component/DisplayNames';

const App=()=>{
  return(
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<AuthorSegment />}/>
        <Route path="/names" element={<DisplayNames />}/>
      </Routes>
  )
}

export default App;
