"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549,7590],{89485:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(34051),a=t.n(r),o=t(85893),i=t(67294),s=t(32512),c=t(79442),l=t(85826),u=t(27590),d=t(23793);function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}var g=function(e){var n=e.cta,t=e.markdownTextValue,r=e.size,a=void 0===r?"xl":r,i=e.selectedTab,s=e.onMarkdownTextChange,c=e.setSelectedTab,m=e.fileProgress,g=e.getRootProps,p=e.isDragActive,v=e.getInputProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{value:t,onChange:s,selectedTab:i,onTabChange:c,generateMarkdownPreview:function(e){return Promise.resolve((0,o.jsx)(u.default,{source:e}))},classes:{textArea:"outline-none focus:ring  focus:ring-blue-400  rounded-md form-input bg-gray-50 dark:bg-gray-500 mt-5 ",preview:"mt-5 text-sm"},minEditorHeight:"xl"===a?500:200,minPreviewHeight:"xl"===a?500:200}),m.isUploading&&(0,o.jsx)("div",{className:"mt-5",children:(0,o.jsx)(d.Z,{kind:"info",text:"Uploading file ".concat(m.uploadedFiles+1," of ").concat(m.totalFiles,"...")})}),(0,o.jsxs)("div",f({},g(),{className:"w-full mt-5 flex justify-center px-6 pt-5 pb-6 border-2 ".concat(p?"border-blue-500":"border-gray-300"," border-dashed rounded-md"),children:[(0,o.jsx)("input",f({className:"hidden"},v())),(0,o.jsxs)("div",{className:"text-center",children:["xl"===a?p?(0,o.jsx)("svg",{fill:"currentColor",className:"mx-auto h-12 w-12 text-gray-400",viewBox:"0 0 20 20",children:(0,o.jsx)("path",{d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd",fillRule:"evenodd"})}):(0,o.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48",children:(0,o.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):null,(0,o.jsx)("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-300",children:p?"Drop here to start uploading.":(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{className:"font-medium mr-1 text-blue-600 hover:text-blue-500 dark:text-blue-50 focus:outline-none focus:underline transition duration-150 ease-in-out",children:"Upload a file"}),"or drag and drop"]})}),(0,o.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-100",children:"PNG, JPG, GIF up to 10MB"})]})]})),(0,o.jsx)("button",{type:"submit",className:"flex w-full mt-10 justify-center items-center px-4 py-3 border border-white text-sm leading-5 font-medium rounded-md text-white dark:bg-white dark:text-gray-700 border-none dark:border dark:hover:border-gray-100 dark:hover:bg-gray-300 bg-green-600 hover:bg-green-700 focus:outline-none focus:border-green-700 active:bg-green-700 transition ease-in-out duration-150",children:n})]})};function p(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}var h=function(e){var n=e.cta,t=e.markdownTextValue,r=e.setMarkdownText,l=e.size,u=void 0===l?"xl":l,d=(0,i.useState)("write"),m=d[0],f=d[1],v=function(){var e,n=(e=a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.ZG)(n);case 2:""!==(t=e.sent)&&(C((function(e){return x({},e,{uploadedFiles:e.uploadedFiles+1})})),r((function(e){return"".concat(e,"\n![](").concat(t,")\n")})),P.uploadedFiles===P.totalFiles&&C((function(e){return x({},e,{isUploading:!1})})));case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){p(o,r,a,i,s,"next",e)}function s(e){p(o,r,a,i,s,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}(),h=(0,s.uI)({onDrop:function(e){e.length>0&&(C((function(n){return x({},n,{isUploading:!0,totalFiles:e.length})})),e.forEach(v))},accept:["image/jpeg","image/png","image/gif"]}),w=h.getRootProps,b=h.getInputProps,y=h.isDragActive,j=(0,i.useState)({totalFiles:0,uploadedFiles:0,isUploading:!1}),P=j[0],C=j[1];return(0,o.jsx)(g,{cta:n,markdownTextValue:t,size:u,selectedTab:m,onMarkdownTextChange:function(e){return r(e)},setSelectedTab:f,fileProgress:P,getRootProps:w,isDragActive:y,getInputProps:b})}},27590:function(e,n,t){t.r(n);var r=t(24268);n.default=r.Z},24268:function(e,n,t){var r=(0,t(5152).default)((function(){return Promise.all([t.e(5460),t.e(1140)]).then(t.bind(t,98568))}),{loadableGenerated:{webpack:function(){return[98568]}},ssr:!1});n.Z=r},23793:function(e,n,t){var r=t(85893),a=t(41664);n.Z=function(e){var n,t=e.kind,o=e.text,i=e.linkHref,s=e.linkText,c=e.onClick,l=e.linkAs,u=e.className,d=void 0===u?"mb-5":u,m=e.messageClassName,f=e.textContainerClassName,g=e.linkContainerClassName,p=void 0===g?"md:ml-6":g;n=t;return(0,r.jsx)("div",{className:"rounded-md ".concat("info"===t?"bg-blue-50":""," ").concat("error"===t?"bg-red-50":""," ").concat("success"===t?"bg-green-50":""," ").concat("warning"===t?"bg-yellow-50":""," p-4 ").concat(d),children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("div",{className:"flex-shrink-0",children:["error"===t?(0,r.jsx)("svg",{className:"h-5 w-5 text-red-400",fill:"currentColor",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}):null,"info"===t?(0,r.jsx)("svg",{className:"h-5 w-5 text-blue-400",fill:"currentColor",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}):null,"success"===t?(0,r.jsx)("svg",{className:"h-5 w-5 text-green-400",fill:"currentColor",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}):null,"warning"===t?(0,r.jsx)("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}):null]}),(0,r.jsxs)("div",{className:"".concat(f," ml-3 flex-1 md:flex md:justify-between "),children:[(0,r.jsx)("p",{className:"text-sm leading-5 ".concat("info"===t?"text-blue-700":""," ").concat("error"===t?"text-red-700":""," ").concat("success"===t?"text-green-700":""," ").concat("warning"===t?"text-yellow-700":""," ").concat(m),dangerouslySetInnerHTML:{__html:o}}),i?i.includes("http")?(0,r.jsx)("p",{className:"".concat(p," mt-3 text-sm leading-5 md:mt-0"),children:(0,r.jsxs)("a",{href:i,target:"_blank",className:"whitespace-nowrap hover:underline font-medium ".concat("info"===t?"text-blue-700":""," ").concat("error"===t?"text-red-700":""," ").concat("success"===t?"text-green-700":""," ").concat("warning"===t?"text-yellow-700":""," \n            \n            ").concat("info"===t?"hover:text-blue-600":""," ").concat("error"===t?"hover:text-red-600":""," ").concat("success"===t?"hover:text-green-600":""," ").concat("warning"===t?"hover:text-yellow-600":"","\n             transition ease-in-out duration-150"),children:[s||""," \u2192"]})}):(0,r.jsx)("p",{className:"".concat(p," mt-3 text-sm leading-5 md:mt-0"),children:(0,r.jsx)(a.default,{href:i,as:l,children:(0,r.jsxs)("a",{className:"whitespace-nowrap hover:underline font-medium ".concat("info"===t?"text-blue-700":""," ").concat("error"===t?"text-red-700":""," ").concat("success"===t?"text-green-700":""," ").concat("warning"===t?"text-yellow-700":""," \n            \n            ").concat("info"===t?"hover:text-blue-600":""," ").concat("error"===t?"hover:text-red-600":""," ").concat("success"===t?"hover:text-green-600":""," ").concat("warning"===t?"hover:text-yellow-600":"","\n             transition ease-in-out duration-150"),children:[s||null," \u2192"]})})}):null,c&&(0,r.jsx)("p",{className:"".concat(p," mt-3 text-sm leading-5 md:mt-0"),children:(0,r.jsxs)("a",{href:"#",onClick:c,className:"whitespace-nowrap font-medium ".concat("info"===t?"text-blue-700":""," ").concat("error"===t?"text-red-700":""," ").concat("success"===t?"text-green-700":""," ").concat("warning"===t?"text-yellow-700":""," \n        \n        ").concat("info"===t?"hover:text-blue-600":""," ").concat("error"===t?"hover:text-red-600":""," ").concat("success"===t?"hover:text-green-600":""," ").concat("warning"===t?"hover:text-yellow-600":""," transition ease-in-out duration-150"),children:[s||""," \u2192"]})})]})]})})}},39425:function(e,n,t){var r=t(85893),a=t(9008);n.Z=function(e){var n=e.description,t=void 0===n?"":n,o=e.pageTitle,i=e.ogTitle,s=void 0===i?o:i,c=e.image,l=void 0===c?"graphDefault":c,u=(e.price,e.index,e.path);return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:o}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{property:"og:title",content:s}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://nomadcoders.co".concat(u)}),(0,r.jsx)("meta",{property:"og:image",content:"https://d1telmomo28umc.cloudfront.net/media/seo/".concat(l,".jpg")}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:"Nomad Coders"}),(0,r.jsx)("meta",{property:"og:locale",content:"ko_KR"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,r.jsx)("meta",{property:"og:image:height",content:"630"}),(0,r.jsx)("meta",{property:"fb:admins",content:"2366600330252017"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"twitter:title",content:s}),(0,r.jsx)("meta",{name:"twitter:description",content:t}),(0,r.jsx)("meta",{name:"twitter:image",content:l}),(0,r.jsx)("meta",{name:"naver-site-verification",content:"202966525a961e258ded0fcc0042857cea6d15f3"})]})}},33306:function(e,n,t){t.d(n,{xe:function(){return x},ZS:function(){return w},hq:function(){return b},Gs:function(){return y},yG:function(){return j},_R:function(){return P},Qs:function(){return C},AY:function(){return k},NL:function(){return N},sN:function(){return T},q8:function(){return O}});var r=t(19989);function a(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function o(){var e=a(["\n  fragment CourseCard on CourseType {\n    name\n    progress\n    progressLectures\n    isEnrolled\n    isFree\n    isReward\n    isComingSoon\n    slug\n    thumbnail\n    subtitleOne\n    subtitleTwo\n    promptChallenge\n    challengeInfo\n    level {\n      name\n      color\n    }\n    badges {\n      id\n    }\n  }\n"]);return o=function(){return e},e}function i(){var e=a(["\n  fragment CommentReplyParts on CommentType {\n    id\n    user {\n      username\n      avatar\n      amazing\n      tier\n    }\n    content\n    isOwner\n    created\n  }\n"]);return i=function(){return e},e}function s(){var e=a(["\n  fragment CommentParts on CommentType {\n    id\n    user {\n      username\n      avatar\n      amazing\n      tier\n    }\n    parent {\n      id\n    }\n    isUpvoted\n    upvotes\n    content\n    isOwner\n    created\n    isTestimonial\n    replies {\n      ...CommentReplyParts\n    }\n  }\n  ","\n"]);return s=function(){return e},e}function c(){var e=a(["\n  fragment IssueCommentParts on IssueCommentType {\n    id\n    comment\n    isSolution\n    isOwner\n    created\n    user {\n      username\n      avatar\n      tier\n      amazing\n    }\n  }\n"]);return c=function(){return e},e}function l(){var e=a(["\n  fragment ChallengeCard on ChallengeType {\n    name\n    slug\n    batch\n    duration\n    inProgress\n    comingSoon\n    finished\n    canEnroll\n    startDate\n    isEnrolled\n    isWaiting\n    isCompleted\n    isOnReview\n    challengersNumber\n    waitingNumber\n    assignmentsNumber\n    currentDay\n    inBufferZone\n    isPremiumChallenge\n    nextStartDate\n    course {\n      name\n      subtitleOne\n      slug\n      thumbnail\n      progressLectures\n      isEnrolled\n      promptChallenge\n    }\n    unlocks {\n      image\n    }\n  }\n"]);return l=function(){return e},e}function u(){var e=a(["\n  fragment ReportParts on ReportType {\n    assignments {\n      number\n    }\n    progressList {\n      user {\n        username\n      }\n      submissions {\n        url\n        quizResponse {\n          totalScore\n        }\n      }\n    }\n  }\n"]);return u=function(){return e},e}function d(){var e=a(["\n  fragment CouponParts on CouponType {\n    created\n    discountAmount\n    used\n    id\n    isExpired\n    expirationDate\n  }\n"]);return d=function(){return e},e}function m(){var e=a(["\n  fragment NoteParts on NoteType {\n    id\n    content\n    minutes\n    seconds\n    created\n  }\n"]);return m=function(){return e},e}function f(){var e=a(["\n  fragment CategoryParts on CategoryType {\n    name\n    id\n    slug\n    isPublic\n    tagline\n    totalThreads\n  }\n"]);return f=function(){return e},e}function g(){var e=a(["\n  fragment ThreadParts on ThreadType {\n    id\n    user {\n      username\n      avatar\n      tier\n      amazing\n    }\n    category {\n      name\n    }\n    title\n    isPinned\n    totalVotes\n    totalReplies\n    isOwner\n    isUpvoted\n    created\n    showing\n    preview\n  }\n"]);return g=function(){return e},e}function p(){var e=a(["\n  fragment ReplyParts on ReplyType {\n    id\n    user {\n      username\n      avatar\n      tier\n    }\n    payload\n    isPinned\n    totalVotes\n    isOwner\n    isUpvoted\n    created\n    totalReplies\n    replies {\n      user {\n        username\n        avatar\n      }\n      id\n      created\n      isOwner\n      payload\n    }\n  }\n"]);return p=function(){return e},e}function v(){var e=a(["\n  fragment ThreadPreview on ThreadType {\n    id\n    title\n    views\n    totalReplies\n  }\n"]);return v=function(){return e},e}var x=(0,r.Ps)(o()),h=(0,r.Ps)(i()),w=(0,r.Ps)(s(),h),b=(0,r.Ps)(c()),y=(0,r.Ps)(l()),j=(0,r.Ps)(u()),P=(0,r.Ps)(d()),C=(0,r.Ps)(m()),k=(0,r.Ps)(f()),N=(0,r.Ps)(g()),T=(0,r.Ps)(p()),O=(0,r.Ps)(v())},28879:function(e,n,t){var r=t(67294),a=t(49384),o=t(62286);n.Z=function(){var e=(0,r.useState)(a.YN in(0,o.parseCookies)()),n=e[0];e[1];return n}},19733:function(e,n,t){var r=t(19989),a=t(71641),o=t(67294),i=t(50542),s=t(28879);function c(){var e,n,t=(e=["\n  query me {\n    me {\n      name\n      avatar\n      username\n      email\n      isSuperuser\n      tier\n      accountLanguage\n      dateJoined\n      githubUsername\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return c=function(){return t},t}var l=(0,r.Ps)(c());n.Z=function(){var e=(0,s.Z)(),n=(0,a.a)(l,{skip:!e});return(0,o.useEffect)((function(){try{var e,t;if(null===(e=n.data)||void 0===e||null===(t=e.me)||void 0===t?void 0:t.dateJoined)if(window.gtag("set","user_data",{email:n.data.me.email}),!localStorage.getItem("loveyou"))new Date(1e3*n.data.me.dateJoined).toLocaleDateString()===(new Date).toLocaleDateString()&&(localStorage.setItem("loveyou","1"),i.ZP.event({category:"Users",action:"Created Account"}),window.gtag("event","conversion",{send_to:"AW-604270696/lIj9CJu_7_UBEOjgkaAC",ec_email:n.data.me.email,email:n.data.me.email}),window.dataLayer&&(window.dataLayer.push({event:"create_account",ec_email:n.data.me.email,email:n.data.me.email}),window.dataLayer.push({event:"create_an_account",ec_email:n.data.me.email,email:n.data.me.email})))}catch(r){}}),[n]),n}},49384:function(e,n,t){t.d(n,{HN:function(){return r},YN:function(){return a},D:function(){return o},L8:function(){return i},XB:function(){return s}});var r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a="sessionid",o=function(e){var n,t,r,a;return a=Math.floor(e/1e3),r=Math.floor(a/60),a=String(a%60),t=Math.floor(r/60),r=String(r%60),n=String(Math.floor(t/24)),t=String(t%24),"\n      ".concat(n.padStart(2,"0"),"d ").concat(t.padStart(2,"0"),"h ").concat(r.padStart(2,"0"),"m ").concat(a.padStart(2,"0"),"s")},i=function(e){return" ".concat(e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=e,t=Date.now()/1e3,r=Math.ceil((n-t)/86400);return r<0?n:r}}}]);