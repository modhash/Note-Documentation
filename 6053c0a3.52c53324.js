(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{69:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return o})),s.d(t,"metadata",(function(){return r})),s.d(t,"rightToc",(function(){return c})),s.d(t,"default",(function(){return l}));var n=s(2),a=s(6),i=(s(0),s(88)),o={id:"SessionStatus",title:"Session Status"},r={unversionedId:"Session/SessionStatus",id:"Session/SessionStatus",isDocsHomePage:!1,title:"Session Status",description:"To help you differentiate between sessions, every session has a session status. The status icon appears for each session on the session list. You can also see the status in the General tab of the session. Sessions are color-coded to help you make sense of your schedule at a glance.",source:"@site/docs/Session/Status.md",permalink:"/Note-Documentation/docs/Session/SessionStatus",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Session/Status.md",sidebar:"someSidebar",previous:{title:"Main Session Details",permalink:"/Note-Documentation/docs/Session/SessionDetails"},next:{title:"Create Session",permalink:"/Note-Documentation/docs/Session/SessionCreate"}},c=[{value:"Session statuses",id:"session-statuses",children:[]}],u={rightToc:c};function l(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To help you differentiate between sessions, every session has a session status. The status icon appears for each session on the session list. You can also see the status in the General tab of the session. Sessions are color-coded to help you make sense of your schedule at a glance."),Object(i.b)("h2",{id:"session-statuses"},"Session statuses"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Pending Validation")," \u2013 This status indicates that your session was saved in the app and will soon be validated by the agency's server. The app will sync with your agency's database every few minutes and any new session will be validated. You may trigger a sync if you your session is stuck in this status (link)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Validating")," \u2013 This status indicates that your session is currently being validated by your agency. You may not even notice your session going through this status. You cannot edit scheduling details while your session is validating."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Scheduled")," \u2013 This status indicates that your session is a valid scheduled session."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Incomplete")," \u2013 This status indicates that your session is missing required session data. Once a session is in the past, session data is required. Enter the missing details to complete your session."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Ready to Submit")," \u2013 This status indicates that your session is valid and has session data."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Submitted")," \u2013 This status indicates that your session has been submitted. You cannot edit a submitted session."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Cancelled")," \u2013 This status indicates that your session was cancelled. You can see the reason for cancellation in the General tab of the session. You cannot edit a cancelled session. To cancel a session, see (link). You can undo session cancellation if your session was cancelled in error."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Declined")," \u2013 This status indicates that your session has been declined by your agency. You can see the reason in the General tab of the session. Reach out to your case manager if you are still unsure why your session was declined. You can edit the session to correct the issue (Link). Once you save your changes, the session will revalidate.")))}l.isMDXComponent=!0},88:function(e,t,s){"use strict";s.d(t,"a",(function(){return d})),s.d(t,"b",(function(){return h}));var n=s(0),a=s.n(n);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(s),b=n,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return s?a.a.createElement(h,r(r({ref:t},u),{},{components:s})):a.a.createElement(h,r({ref:t},u))}));function h(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,o=new Array(i);o[0]=b;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var u=2;u<i;u++)o[u]=s[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,s)}b.displayName="MDXCreateElement"}}]);