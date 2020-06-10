import Loadable from 'react-loadable';
import React, { Component } from 'react';

const LoadOtherComponent = Loadable({
  loader: () => import('./OtherComponent.js'),
  loading: () => <div>loading.......</div>,
});

export default class MyComponent extends Component {
  render() {
    return <LoadOtherComponent />;
  }
}
