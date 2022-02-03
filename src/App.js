import React from 'react'

import Radium, { StyleRoot } from 'radium';
// stylesheet
import './Styles/index.scss';


// home page
import HomePage from './Pages/HomePage';


function App() {
  return (
    <StyleRoot>
      <main-wrapper>
      
        <HomePage />

      </main-wrapper>
    </StyleRoot>
  );
}

export default Radium(App);
