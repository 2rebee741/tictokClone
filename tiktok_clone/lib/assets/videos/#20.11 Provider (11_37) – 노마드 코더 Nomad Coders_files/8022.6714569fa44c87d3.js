"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8022],{78022:function(r,n,e){e.r(n),e.d(n,{ApolloCache:function(){return c.R},ApolloClient:function(){return i.f},ApolloConsumer:function(){return H},ApolloError:function(){return a.c},ApolloLink:function(){return p.i},ApolloProvider:function(){return j},Cache:function(){return t},DocumentType:function(){return z.n_},HttpLink:function(){return R.u},InMemoryCache:function(){return s.h},MissingFieldError:function(){return d.y},NetworkStatus:function(){return l.I},Observable:function(){return Q.y},ObservableQuery:function(){return u.ue},applyNextFetchPolicy:function(){return u.fb},checkFetcher:function(){return E.U},concat:function(){return m},createHttpLink:function(){return O.L},createSignalIfSupported:function(){return w.$},defaultDataIdFromObject:function(){return v.uG},defaultPrinter:function(){return C.sb},disableExperimentalFragmentVariables:function(){return V.J9},disableFragmentWarnings:function(){return V._t},empty:function(){return b},enableExperimentalFragmentVariables:function(){return V.wO},execute:function(){return y.h},fallbackHttpConfig:function(){return C.SC},from:function(){return h},fromError:function(){return x.Q},fromPromise:function(){return M},getApolloContext:function(){return N.K},gql:function(){return V.Ps},isApolloError:function(){return a.M},isReference:function(){return I.Yk},makeReference:function(){return I.kQ},makeVar:function(){return f.QS},mergeOptions:function(){return i.J},operationName:function(){return z.mw},parseAndCheckHttpResponse:function(){return k.d},parser:function(){return z.E2},resetApolloContext:function(){return N.K},resetCaches:function(){return V.HW},rewriteURIForGET:function(){return _.H},selectHttpOptionsAndBody:function(){return C.E4},selectHttpOptionsAndBodyInternal:function(){return C.ve},selectURI:function(){return S.r},serializeFetchParameter:function(){return P.g},setLogVerbosity:function(){return F.U6},split:function(){return g},throwServerError:function(){return A.P},toPromise:function(){return D},useApolloClient:function(){return q.x},useLazyQuery:function(){return U},useMutation:function(){return J.D},useQuery:function(){return T.a},useReactiveVar:function(){return Y},useSubscription:function(){return B}});var t,o=e(85433),i=e(28291),u=e(44780),l=e(1644),a=e(30990);t||(t={});var c=e(11294),s=e(35526),d=e(75727),v=e(49641),f=e(66438),p=e(48702),b=p.i.empty,h=p.i.from,g=p.i.split,m=p.i.concat,y=e(47037),k=e(94805),P=e(15049),C=e(58995),E=e(23178),w=e(77388),S=e(11037),O=e(34747),R=e(72198),_=e(88663),x=e(16261);function D(r){var n=!1;return new Promise((function(e,t){r.subscribe({next:function(r){n?__DEV__&&o.kG.warn("Promise Wrapper does not support multiple results from Observable"):(n=!0,e(r))},error:t})}))}var Q=e(48216);function M(r){return new Q.y((function(n){r.then((function(r){n.next(r),n.complete()})).catch(n.error.bind(n))}))}var A=e(12782),I=e(51761),F=e(47591),V=e(19989);(0,F.U6)(o.Rk?"log":"silent");var L=e(67294),N=e(85317),j=function(r){var n=r.client,e=r.children,t=(0,N.K)();return L.createElement(t.Consumer,null,(function(r){return void 0===r&&(r={}),n&&r.client!==n&&(r=Object.assign({},r,{client:n})),__DEV__?(0,o.kG)(r.client,'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.'):(0,o.kG)(r.client,26),L.createElement(t.Provider,{value:r},e)}))},H=function(r){var n=(0,N.K)();return L.createElement(n.Consumer,null,(function(n){return __DEV__?(0,o.kG)(n&&n.client,'Could not find "client" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>.'):(0,o.kG)(n&&n.client,25),r.children(n.client)}))},q=e(66252),G=e(70655),T=e(71641),K=["refetch","fetchMore","updateQuery","startPolling","subscribeToMore"];function U(r,n){var e=(0,L.useState)({called:!1}),t=e[0],o=e[1],i=(0,T.a)(r,(0,G.pi)((0,G.pi)((0,G.pi)({},n),t.options),{fetchPolicy:t.called?null===n||void 0===n?void 0:n.fetchPolicy:"standby",skip:void 0}));t.called||(i=(0,G.pi)((0,G.pi)({},i),{loading:!1,data:void 0,error:void 0,called:!1}));var u=(0,L.useMemo)((function(){for(var r={},n=function(n){var e=i[n];r[n]=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return o((function(r){return(0,G.pi)((0,G.pi)({},r),{called:!0})})),e.apply(void 0,r)}},e=0,t=K;e<t.length;e++){n(t[e])}return r}),[]);return i.error=i.error||void 0,Object.assign(i,u),[(0,L.useCallback)((function(r){o({called:!0,options:r});var n=i.refetch(null===r||void 0===r?void 0:r.variables).then((function(r){var n=(0,G.pi)((0,G.pi)({},i),{data:r.data,error:r.error,called:!0,loading:!1});return Object.assign(n,u),n}));return n.catch((function(){})),n}),[]),i]}var J=e(50319),W=e(82152),z=e(14692);function B(r,n){var e=(0,q.x)(null===n||void 0===n?void 0:n.client);(0,z.Vp)(r,z.n_.Subscription);var t=(0,L.useState)({loading:!(null===n||void 0===n?void 0:n.skip),error:void 0,data:void 0,variables:null===n||void 0===n?void 0:n.variables}),o=t[0],i=t[1],u=(0,L.useState)((function(){return(null===n||void 0===n?void 0:n.skip)?null:e.subscribe({query:r,variables:null===n||void 0===n?void 0:n.variables,fetchPolicy:null===n||void 0===n?void 0:n.fetchPolicy,context:null===n||void 0===n?void 0:n.context})})),l=u[0],a=u[1],c=(0,L.useRef)({client:e,subscription:r,options:n});return(0,L.useEffect)((function(){var t,o,u,l,s=null===n||void 0===n?void 0:n.shouldResubscribe;"function"===typeof s&&(s=!!s(n)),(null===n||void 0===n?void 0:n.skip)?!(null===n||void 0===n?void 0:n.skip)!==!(null===(t=c.current.options)||void 0===t?void 0:t.skip)&&(i({loading:!1,data:void 0,error:void 0,variables:null===n||void 0===n?void 0:n.variables}),a(null)):!1===s||e===c.current.client&&r===c.current.subscription&&(null===n||void 0===n?void 0:n.fetchPolicy)===(null===(o=c.current.options)||void 0===o?void 0:o.fetchPolicy)&&!(null===n||void 0===n?void 0:n.skip)===!(null===(u=c.current.options)||void 0===u?void 0:u.skip)&&(0,W.D)(null===n||void 0===n?void 0:n.variables,null===(l=c.current.options)||void 0===l?void 0:l.variables)||(i({loading:!0,data:void 0,error:void 0,variables:null===n||void 0===n?void 0:n.variables}),a(e.subscribe({query:r,variables:null===n||void 0===n?void 0:n.variables,fetchPolicy:null===n||void 0===n?void 0:n.fetchPolicy,context:null===n||void 0===n?void 0:n.context}))),Object.assign(c.current,{client:e,subscription:r,options:n})}),[e,r,n]),(0,L.useEffect)((function(){if(l){var r=l.subscribe({next:function(r){var t,o,u={loading:!1,data:r.data,error:void 0,variables:null===n||void 0===n?void 0:n.variables};i(u),null===(o=null===(t=c.current.options)||void 0===t?void 0:t.onSubscriptionData)||void 0===o||o.call(t,{client:e,subscriptionData:u})},error:function(r){i({loading:!1,data:void 0,error:r,variables:null===n||void 0===n?void 0:n.variables})},complete:function(){var r,n;null===(n=null===(r=c.current.options)||void 0===r?void 0:r.onSubscriptionComplete)||void 0===n||n.call(r)}});return function(){r.unsubscribe()}}}),[l]),o}function Y(r){var n=r(),e=(0,L.useState)(n)[1];return(0,L.useEffect)((function(){var t=r();if(n===t)return r.onNextChange(e);e(t)}),[n]),n}},50319:function(r,n,e){e.d(n,{D:function(){return s}});var t=e(70655),o=e(67294),i=e(28291),u=e(82152),l=e(14692),a=e(30990),c=e(66252);function s(r,n){var e=(0,c.x)(null===n||void 0===n?void 0:n.client);(0,l.Vp)(r,l.n_.Mutation);var s=(0,o.useState)({called:!1,loading:!1,client:e}),d=s[0],v=s[1],f=(0,o.useRef)({result:d,mutationId:0,isMounted:!0,client:e,mutation:r,options:n});Object.assign(f.current,{client:e,options:n,mutation:r});var p=(0,o.useCallback)((function(r){void 0===r&&(r={});var n=f.current,e=n.client,o=n.options,l=n.mutation,c=(0,t.pi)((0,t.pi)({},o),{mutation:l});f.current.result.loading||c.ignoreResults||v(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++f.current.mutationId,d=(0,i.J)(c,r);return e.mutate(d).then((function(n){var t,o,i=n.data,l=n.errors,p=l&&l.length>0?new a.c({graphQLErrors:l}):void 0;if(s===f.current.mutationId&&!d.ignoreResults){var b={called:!0,loading:!1,data:i,error:p,client:e};f.current.isMounted&&!(0,u.D)(f.current.result,b)&&v(f.current.result=b)}return null===(t=c.onCompleted)||void 0===t||t.call(c,n.data),null===(o=r.onCompleted)||void 0===o||o.call(r,n.data),n})).catch((function(n){var t,o;if(s===f.current.mutationId&&f.current.isMounted){var i={loading:!1,error:n,data:void 0,called:!0,client:e};(0,u.D)(f.current.result,i)||v(f.current.result=i)}if(c.onError||d.onError)return null===(t=c.onError)||void 0===t||t.call(c,n),null===(o=r.onError)||void 0===o||o.call(r,n),{data:void 0,errors:n};throw n}))}),[]),b=(0,o.useCallback)((function(){v({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return function(){f.current.isMounted=!1}}),[]),[p,(0,t.pi)({reset:b},d)]}},71641:function(r,n,e){e.d(n,{a:function(){return v}});var t=e(70655),o=e(67294),i=e(82152),u=e(28291),l=e(85317),a=e(30990),c=e(1644),s=e(14692),d=e(66252);function v(r,n){var e,u=(0,o.useContext)((0,l.K)()),v=(0,d.x)(null===n||void 0===n?void 0:n.client),p=v.defaultOptions.watchQuery;(0,s.Vp)(r,s.n_.Query);var b,h=(0,o.useState)((function(){var e=f(r,n,p),t=null;return u.renderPromises&&(t=u.renderPromises.getSSRObservable(e)),t||(t=v.watchQuery(e),u.renderPromises&&u.renderPromises.registerSSRObservable(t,e)),u.renderPromises&&!1!==(null===n||void 0===n?void 0:n.ssr)&&!(null===n||void 0===n?void 0:n.skip)&&t.getCurrentResult().loading&&u.renderPromises.addQueryPromise({getOptions:function(){return f(r,n,p)},fetchData:function(){return new Promise((function(r){var n=t.subscribe({next:function(e){e.loading||(r(),n.unsubscribe())},error:function(){r(),n.unsubscribe()},complete:function(){r()}})}))}},(function(){return null})),t})),g=h[0],m=h[1],y=(0,o.useState)((function(){var r,e,t=g.getCurrentResult();return!t.loading&&n&&(t.error?null===(r=n.onError)||void 0===r||r.call(n,t.error):t.data&&(null===(e=n.onCompleted)||void 0===e||e.call(n,t.data))),t})),k=y[0],P=y[1],C=(0,o.useRef)({client:v,query:r,options:n,result:k,previousData:void 0,watchQueryOptions:f(r,n,p)});(0,o.useEffect)((function(){var e,t,o,u=f(r,n,p);if(C.current.client===v&&(0,i.D)(C.current.query,r))(0,i.D)(C.current.watchQueryOptions,u)||(g.setOptions(u).catch((function(){})),o=g.getCurrentResult(),C.current.watchQueryOptions=u);else{var l=v.watchQuery(u);m(l),o=l.getCurrentResult()}if(o){var a=C.current.result;a.data&&(C.current.previousData=a.data),P(C.current.result=o),!o.loading&&n&&(o.error?null===(e=n.onError)||void 0===e||e.call(n,o.error):o.data&&(null===(t=n.onCompleted)||void 0===t||t.call(n,o.data)))}Object.assign(C.current,{client:v,query:r})}),[g,v,r,n]),(0,o.useEffect)((function(){if(!u.renderPromises){var r=g.subscribe(n,(function e(t){var o,u,l=g.last;r.unsubscribe();try{g.resetLastResults(),r=g.subscribe(n,e)}finally{g.last=l}if(!t.hasOwnProperty("graphQLErrors"))throw t;var a=C.current.result;(a&&a.loading||!(0,i.D)(t,a.error))&&(P(C.current.result={data:a.data,error:t,loading:!1,networkStatus:c.I.error}),null===(u=null===(o=C.current.options)||void 0===o?void 0:o.onError)||void 0===u||u.call(o,t))}));return function(){return r.unsubscribe()}}function n(){var r,n,e=C.current.result,t=g.getCurrentResult();e&&e.loading===t.loading&&e.networkStatus===t.networkStatus&&(0,i.D)(e.data,t.data)||(e.data&&(C.current.previousData=e.data),P(C.current.result=t),t.loading||null===(n=null===(r=C.current.options)||void 0===r?void 0:r.onCompleted)||void 0===n||n.call(r,t.data))}}),[g,u.renderPromises,v.disableNetworkFetches]),b=(e=k).partial,k=(0,t._T)(e,["partial"]),!b||!(null===n||void 0===n?void 0:n.partialRefetch)||k.loading||k.data&&0!==Object.keys(k.data).length||"cache-only"===g.options.fetchPolicy||(k=(0,t.pi)((0,t.pi)({},k),{loading:!0,networkStatus:c.I.refetch}),g.refetch()),u.renderPromises&&!1!==(null===n||void 0===n?void 0:n.ssr)&&!(null===n||void 0===n?void 0:n.skip)&&k.loading&&g.setOptions(f(r,n,p)).catch((function(){})),Object.assign(C.current,{options:n}),(u.renderPromises||v.disableNetworkFetches)&&!1===(null===n||void 0===n?void 0:n.ssr)?k=C.current.result={loading:!0,data:void 0,error:void 0,networkStatus:c.I.loading}:((null===n||void 0===n?void 0:n.skip)||"standby"===(null===n||void 0===n?void 0:n.fetchPolicy))&&(k={loading:!1,data:void 0,error:void 0,networkStatus:c.I.ready}),k.errors&&k.errors.length&&(k=(0,t.pi)((0,t.pi)({},k),{error:k.error||new a.c({graphQLErrors:k.errors})}));var E=(0,o.useMemo)((function(){return{refetch:g.refetch.bind(g),fetchMore:g.fetchMore.bind(g),updateQuery:g.updateQuery.bind(g),startPolling:g.startPolling.bind(g),stopPolling:g.stopPolling.bind(g),subscribeToMore:g.subscribeToMore.bind(g)}}),[g]);return(0,t.pi)((0,t.pi)((0,t.pi)({},E),{variables:f(r,n,p).variables,client:v,called:!0,previousData:C.current.previousData}),k)}function f(r,n,e){var o;void 0===n&&(n={});var i=n.skip,l=(n.ssr,n.onCompleted,n.onError,n.displayName,(0,t._T)(n,["skip","ssr","onCompleted","onError","displayName"])),a=(0,t.pi)({query:r},l);return e&&(a=(0,u.J)(e,a)),i?a.fetchPolicy="standby":(!(null===(o=a.context)||void 0===o?void 0:o.renderPromises)||"network-only"!==a.fetchPolicy&&"cache-and-network"!==a.fetchPolicy)&&a.fetchPolicy||(a.fetchPolicy="cache-first"),a.variables||(a.variables={}),a}}}]);