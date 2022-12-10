import React from 'react';
import { CesiumContext } from '../CesiumCore';

export default function withCesium(Component) {
  return function WrapperComponent(props) {
    return (
      <CesiumContext.Consumer>
        {cesium => <Component {...props} cesium={cesium} />}
      </CesiumContext.Consumer>
    );
  };
}