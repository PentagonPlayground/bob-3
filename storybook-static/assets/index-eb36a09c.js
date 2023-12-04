import{r as f}from"./index-76fb7be0.js";var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=f,u=Symbol.for("react.element"),m=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function x(t,e,p){var r,o={},s=null,_=null;p!==void 0&&(s=""+p),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(_=e.ref);for(r in e)a.call(e,r)&&!y.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:u,type:t,key:s,ref:_,props:o,_owner:c.current}}n.Fragment=m;n.jsx=x;n.jsxs=x;l.exports=n;var v=l.exports;const j=v.jsx,E=f.createContext(null);export{E as T,j};
