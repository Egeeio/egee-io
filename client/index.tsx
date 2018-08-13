import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
 

export default class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

Meteor.startup(() => {
  ReactDom.render(<HelloWorld />, document.getElementById('root'));
});
