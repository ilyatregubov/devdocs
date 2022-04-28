"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3477],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1246:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],r={title:"Moodle App Development process",sidebar_label:"Process",sidebar_position:1,tags:["Moodle App"]},l=void 0,d={unversionedId:"guides/moodleapp/development/development-process",id:"guides/moodleapp/development/development-process",title:"Moodle App Development process",description:"The development of new features and improvements in the Moodle App is organised in the following six phases:",source:"@site/docs/guides/moodleapp/development/development-process.md",sourceDirName:"guides/moodleapp/development",slug:"/guides/moodleapp/development/development-process",permalink:"/devdocs/docs/guides/moodleapp/development/development-process",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/moodleapp/development/development-process.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1651109470,formattedLastUpdatedAt:"28/04/2022",sidebarPosition:1,frontMatter:{title:"Moodle App Development process",sidebar_label:"Process",sidebar_position:1,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Development",permalink:"/devdocs/docs/guides/moodleapp/development/"},next:{title:"Coding style",permalink:"/devdocs/docs/guides/moodleapp/development/coding-style"}},p={},u=[{value:"Discovery",id:"discovery",level:2},{value:"Prioritisation",id:"prioritisation",level:3},{value:"Schedule",id:"schedule",level:3},{value:"Shaping",id:"shaping",level:2},{value:"Implementation",id:"implementation",level:2},{value:"QA testing",id:"qa-testing",level:2},{value:"Release",id:"release",level:2},{value:"Evaluation",id:"evaluation",level:2}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The development of new features and improvements in the Moodle App is organised in the following six phases:"),(0,a.kt)("p",null,"Discovery - Shaping - Implementation - QA Testing - Release - Evaluation"),(0,a.kt)("p",null,"As a summary of the process we can say that during the discovery phase we do an initial selection of features and improvements to be included in the next release of the app by reviewing the feedback from different stakeholders and the improvements detected by Moodle HQ\u2019s UX team user research."),(0,a.kt)("p",null,"In the shaping phase we do an initial high-level design and specifications so we can commence with the implementation phase in which the developers, with the help of designers, will implement the selected features."),(0,a.kt)("p",null,"During the Testing & QA phase, we do intensive testing to check that there are no regressions and, sometimes, we publish Beta versions to check the upcoming new features in advance and provide feedback before the release so that we can make the necessary adjustments."),(0,a.kt)("p",null,"Once we are confident we have a stable new version that is aligned with our stakeholders\u2019 expectations we move to the Release phase in which the new version of the app is fully rolled-out to users."),(0,a.kt)("p",null,"During the evaluation phase we analyse stakeholders' feedback to validate if we met their expectations."),(0,a.kt)("h2",{id:"discovery"},"Discovery"),(0,a.kt)("p",null,"During this first phase we analyse different stakeholders\u2019 needs and then we prioritise them so we can build a short-term roadmap for upcoming app releases."),(0,a.kt)("p",null,"We have different stakeholders (order does not indicate importance):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"End users"),(0,a.kt)("li",{parentName:"ul"},"External compliance entities/organisations"),(0,a.kt)("li",{parentName:"ul"},"Moodle Partners and Resellers"),(0,a.kt)("li",{parentName:"ul"},"BMA clients"),(0,a.kt)("li",{parentName:"ul"},"Pro/Premium plans clients"),(0,a.kt)("li",{parentName:"ul"},"Moodle Community"),(0,a.kt)("li",{parentName:"ul"},"Other Moodle Product teams")),(0,a.kt)("h3",{id:"prioritisation"},"Prioritisation"),(0,a.kt)("p",null,"We use the MoSCoW method. The term MoSCoW itself is an acronym derived from the first letter of each of four prioritisation categories: M - Must have S - Should have C - Could have W - Won't have."),(0,a.kt)("p",null,"There is some existing criteria for what\u2019s mandatory (MUST) to include in a new release:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New Moodle LMS functionality (affecting students)"),(0,a.kt)("li",{parentName:"ul"},"New Moodle Workplace functionality (affecting students)"),(0,a.kt)("li",{parentName:"ul"},"User-facing serious UX problems (app speed/performance, notifications, navigation and resume activity/courses)"),(0,a.kt)("li",{parentName:"ul"},"Compliance (GDPR, accessibility)"),(0,a.kt)("li",{parentName:"ul"},"Technology (mandatory libraries updates etc\u2026)"),(0,a.kt)("li",{parentName:"ul"},"Critical bugs"),(0,a.kt)("li",{parentName:"ul"},"Security issues")),(0,a.kt)("p",null,"For what\u2019s not mandatory, we use additional methods such as \u201cValue versus Complexity\u201d but there is always a subjective evaluation and the Moodle Apps Product Manager is the one making the final decisions."),(0,a.kt)("p",null,"New features and improvements under the \u201cCould have\u201d category can be removed at any time during the implementation phase if we feel we won\u2019t be able to implement them."),(0,a.kt)("p",null,"Only critical issues (bugs or MUST not properly detected such as LMS changes) can be added once the implementation phase has commenced but minor nice-to-have improvements will often be added throughout the release cycle."),(0,a.kt)("h3",{id:"schedule"},"Schedule"),(0,a.kt)("p",null,"We usually release between four to six versions of the Moodle App per year."),(0,a.kt)("p",null,"Usually a few weeks after a Moodle LMS major release and also between two major LMS releases."),(0,a.kt)("h2",{id:"shaping"},"Shaping"),(0,a.kt)("p",null,"During this phase there are two major things happening:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A high-level design solution is drafted."),(0,a.kt)("li",{parentName:"ol"},"Technical specifications are created.")),(0,a.kt)("p",null,"So basically, we are defining what the feature should be doing, how it will work and how it interacts with other systems and the rest of the app. The evaluation criteria (used to check if we solved the problem once is used by end users) is also defined in this phase."),(0,a.kt)("p",null,"During this phase a developer and a designer will work together so the designer is aware of the technical limitations and the developer has a clear understanding of the high-level proposed solution to be refined during the implementation phase."),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"During this phase the developer and the designer will work on building the solution outlined in the Shaping phase, making decisions and choosing trade-offs about the finer details. Both the designer and the developer have full responsibility and they work autonomously unless they need specific help from other developers with more experience in certain areas."),(0,a.kt)("p",null,"Before the code gets integrated and it is ready for testing, a colleague has to perform the so-called peer-review, that is basically another developer (not involved in the original implementation) taking a fresh look at the code."),(0,a.kt)("p",null,"Once the code implementing the features is integrated, a tester will ensure that it works as expected. Automatic tests should be added by the developer in new features, so this step is mostly to look for regressions and to check that all the possible use cases for the solution were considered at implementation time."),(0,a.kt)("h2",{id:"qa-testing"},"QA testing"),(0,a.kt)("p",null,"Once all the selected new features, improvements and bugs fixes have been implemented and tested, we perform a complete review of the Moodle app functionality in order to detect possible regressions."),(0,a.kt)("p",null,"This is manually done, we go through a list of features of the Moodle app and we check that everything is working as expected in both Android and iOS devices."),(0,a.kt)("p",null,"At the beginning of this process, we also invite our community members to do some beta testing of the upcoming new features of improvements, to do this, we use Apple TestFlight and Android Beta Testing. Our community members are able to provide feedback prior to the release that will help to detect potential issues."),(0,a.kt)("h2",{id:"release"},"Release"),(0,a.kt)("p",null,"Once the QA testing phase has finished, we move on into the Release phase which consists basically in doing a full-rollout of the new version of the app in Google Play and the Apple App Store."),(0,a.kt)("h2",{id:"evaluation"},"Evaluation"),(0,a.kt)("p",null,"In this phase we basically collect feedback to see if the new features and improvements are well received by our final users. As well as using the evaluation criteria we defined in the Shaping phase.\nIf something is not working as expected because it has bugs or the selected design solution is not working for most of our users we will action in the next development cycle to address the problem."))}h.isMDXComponent=!0}}]);