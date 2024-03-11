import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthorSegment from './Component/AuthorSegment';
import DisplayNames from './Component/DisplayNames';

const App=()=>{
  return(
      <Routes>
        <Route path="/assessment1-app" element={<AuthorSegment />}/>
        <Route path="/assessment1-app/names" element={<DisplayNames />}/>
      </Routes>
  )
}

export default App;