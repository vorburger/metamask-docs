"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[2741],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},817:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const o={description:"Learn about convenience libraries."},a="Convenience libraries",c={unversionedId:"concepts/convenience-libraries",id:"concepts/convenience-libraries",title:"Convenience libraries",description:"Learn about convenience libraries.",source:"@site/wallet/concepts/convenience-libraries.md",sourceDirName:"concepts",slug:"/concepts/convenience-libraries",permalink:"/design-guidelines/wallet/concepts/convenience-libraries",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about convenience libraries."},sidebar:"walletSidebar",previous:{title:"Signing methods",permalink:"/design-guidelines/wallet/concepts/signing-methods"},next:{title:"Tutorials",permalink:"/design-guidelines/wallet/tutorials/"}},s={},l=[],p={toc:l};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"convenience-libraries"},"Convenience libraries"),(0,i.kt)("p",null,"Various convenience libraries exist for dapp developers.\nSome of them simplify the creation of specific user interface elements, some entirely manage the\nuser account onboarding, and others give you a variety of methods for interacting with smart\ncontracts, for a variety of API preferences (for example, promises, callbacks, and strong types)."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/design-guidelines/wallet/reference/provider-api"},"MetaMask Ethereum provider API")," is very simple, and wraps\n",(0,i.kt)("a",{parentName:"p",href:"https://eth.wiki/json-rpc/API#json-rpc-methods"},"Ethereum JSON-RPC")," formatted messages, which is why\nsome developers use a convenience library for interacting with the provider, such as\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ethers"},"Ethers"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3.js"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/"},"Truffle"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://framework.embarklabs.io/"},"Embark"),".\nYou can refer to those tools' documentation to interact with the provider."),(0,i.kt)("p",null,"The provider API is all you need to create a full-featured web3 application, but if you need\nhigher-level abstractions than those provided by the API, we recommend using a convenience library."))}u.isMDXComponent=!0}}]);