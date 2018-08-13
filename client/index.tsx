import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
 
function Welcome (props: any) {
  return <h1>Hello, {props.name!}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="Chaim" />
      <Welcome name="Pls" />
      <Welcome name="Stahp" />
    </div>
  );
}

Meteor.startup(() => {
  ReactDom.render(
  <App />,
  document.getElementById('root'));
});
