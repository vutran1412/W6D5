import React from 'react';
import ReactDOM from 'react-dom';
import { Clock } from './clock';
import { Tabs } from './tabs';

function Root() {
    return (
      <>
        <Clock />
        <Tabs tabs={
          [
            {title: "New", content: "Crete new File"}, 
            {title: "Edit", content: "Edit File"}, 
            {title: "View", content: "Here a the files"}
          ]
          }/>
      </>
    );
}



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});