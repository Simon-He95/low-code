(function(u,m){typeof exports=="object"&&typeof module!="undefined"?module.exports=m():typeof define=="function"&&define.amd?define(m):(u=typeof globalThis!="undefined"?globalThis:u||self,u.LcImage=m())})(this,function(){"use strict";function u(t){if(_(t)){const n={};for(let e=0;e<t.length;e++){const l=t[e],s=f(l)?T(l):u(l);if(s)for(const i in s)n[i]=s[i]}return n}else{if(f(t))return t;if(y(t))return t}}const m=/;(?![^(]*\))/g,O=/:(.+)/;function T(t){const n={};return t.split(m).forEach(e=>{if(e){const l=e.split(O);l.length>1&&(n[l[0].trim()]=l[1].trim())}}),n}function k(t){let n="";if(f(t))n=t;else if(_(t))for(let e=0;e<t.length;e++){const l=k(t[e]);l&&(n+=l+" ")}else if(y(t))for(const e in t)t[e]&&(n+=e+" ");return n.trim()}const x=[],E=/^on[^a-z]/,j=t=>E.test(t),F=Object.assign,_=Array.isArray,g=t=>typeof t=="function",f=t=>typeof t=="string",y=t=>t!==null&&typeof t=="object";function S(t){return R(t)?S(t.__v_raw):!!(t&&t.__v_isReactive)}function R(t){return!!(t&&t.__v_isReadonly)}function N(t){return S(t)||R(t)}function B(t){return!!(t&&t.__v_isRef===!0)}let p=null,w=null;const M=t=>t.__isSuspense;function D(t){return g(t)?{setup:t,name:t.name}:t}const L=t=>t.__isTeleport,K=Symbol(),I=Symbol(void 0),P=Symbol(void 0),Y=Symbol(void 0),d=[];let a=null;function U(t=!1){d.push(a=t?null:[])}function q(){d.pop(),a=d[d.length-1]||null}function G(t){return t.dynamicChildren=a||x,q(),a&&a.push(t),t}function H(t,n,e,l,s,i){return G(A(t,n,e,l,s,i,!0))}function J(t){return t?t.__v_isVNode===!0:!1}const V="__vInternal",z=({key:t})=>t!=null?t:null,C=({ref:t,ref_key:n,ref_for:e})=>t!=null?f(t)||B(t)||g(t)?{i:p,r:t,k:n,f:!!e}:t:null;function A(t,n=null,e=null,l=0,s=null,i=t===I?0:1,r=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&z(n),ref:n&&C(n),scopeId:w,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:l,dynamicProps:s,dynamicChildren:null,appContext:null};return o?(h(c,e),i&128&&t.normalize(c)):e&&(c.shapeFlag|=f(e)?8:16),!r&&a&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&a.push(c),c}const Q=W;function W(t,n=null,e=null,l=0,s=null,i=!1){if((!t||t===K)&&(t=Y),J(t)){const o=b(t,n,!0);return e&&h(o,e),o}if(v(t)&&(t=t.__vccOpts),n){n=X(n);let{class:o,style:c}=n;o&&!f(o)&&(n.class=k(o)),y(c)&&(N(c)&&!_(c)&&(c=F({},c)),n.style=u(c))}const r=f(t)?1:M(t)?128:L(t)?64:y(t)?4:g(t)?2:0;return A(t,n,e,l,s,r,i,!0)}function X(t){return t?N(t)||V in t?F({},t):t:null}function b(t,n,e=!1){const{props:l,ref:s,patchFlag:i,children:r}=t,o=n?$(l||{},n):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&z(o),ref:n&&n.ref?e&&s?_(s)?s.concat(C(n)):[s,C(n)]:C(n):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==I?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&b(t.ssContent),ssFallback:t.ssFallback&&b(t.ssFallback),el:t.el,anchor:t.anchor}}function Z(t=" ",n=0){return Q(P,null,t,n)}function h(t,n){let e=0;const{shapeFlag:l}=t;if(n==null)n=null;else if(_(n))e=16;else if(typeof n=="object")if(l&65){const s=n.default;s&&(s._c&&(s._d=!1),h(t,s()),s._c&&(s._d=!0));return}else{e=32;const s=n._;!s&&!(V in n)?n._ctx=p:s===3&&p&&(p.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else g(n)?(n={default:n,_ctx:p},e=32):(n=String(n),l&64?(e=16,n=[Z(n)]):e=8);t.children=n,t.shapeFlag|=e}function $(...t){const n={};for(let e=0;e<t.length;e++){const l=t[e];for(const s in l)if(s==="class")n.class!==l.class&&(n.class=k([n.class,l.class]));else if(s==="style")n.style=u([n.style,l.style]);else if(j(s)){const i=n[s],r=l[s];r&&i!==r&&!(_(i)&&i.includes(r))&&(n[s]=i?[].concat(i,r):r)}else s!==""&&(n[s]=l[s])}return n}function v(t){return g(t)&&"__vccOpts"in t}const tt=["src"];var nt={render:D({props:{src:null},setup(t){return(n,e)=>(U(),H("img",{src:t.src},null,8,tt))}}),editorProps:{src:{type:"string",defaultValue:"https://www.baidu.com/img/bd_logo1.png"}}};return nt});