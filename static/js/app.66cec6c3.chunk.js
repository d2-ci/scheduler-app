(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[127],{202:function(e,t,a){e.exports={header:"JobList_header__23tFt",headerTitle:"JobList_headerTitle__21D__",headerLink:"JobList_headerLink__2zepi",headerLinkIcon:"JobList_headerLinkIcon__XdfBB",controlContainer:"JobList_controlContainer__3Yzj_",controlRight:"JobList_controlRight__38lfB"}},203:function(e,t,a){e.exports={list:"FormErrorBox_list__3BejY"}},204:function(e,t,a){e.exports={headerTitle:"ParameterFields_headerTitle__IBF76"}},205:function(e,t,a){e.exports={formButtonContainer:"JobAddForm_formButtonContainer__1MLSp",saveButton:"JobAddForm_saveButton__RfxZ9"}},206:function(e,t,a){e.exports={formButtonContainer:"JobEditForm_formButtonContainer__2b6Fi",deleteButton:"JobEditForm_deleteButton__VQxBE",saveButton:"JobEditForm_saveButton__278Ab"}},213:function(e,t,a){e.exports={wrapper:"JobDetails_wrapper__1-YkO",title:"JobDetails_title__1Cht7",details:"JobDetails_details__2HITJ"}},214:function(e,t,a){e.exports={pageHeader:"JobEdit_pageHeader__3Fywp",pageHeaderButton:"JobEdit_pageHeaderButton__29yjJ",pageHeaderTitle:"JobEdit_pageHeaderTitle__jZrIG",card:"JobEdit_card__2QqEg",cardHeader:"JobEdit_cardHeader__Mv_cj",cardHeaderTitle:"JobEdit_cardHeaderTitle__29Y64",cardHeaderInfo:"JobEdit_cardHeaderInfo__3VWZt",cardHeaderLink:"JobEdit_cardHeaderLink__2frj7",jobDetails:"JobEdit_jobDetails__194v-"}},215:function(e,t,a){e.exports={pageHeader:"JobAdd_pageHeader__2NZzc",pageHeaderButton:"JobAdd_pageHeaderButton__Xg_R9",pageHeaderTitle:"JobAdd_pageHeaderTitle__1RMl0",card:"JobAdd_card__1HH6H",cardHeader:"JobAdd_cardHeader__1D3sS",cardHeaderTitle:"JobAdd_cardHeaderTitle__2TG9a",cardHeaderInfo:"JobAdd_cardHeaderInfo__vq_Y1",cardHeaderLink:"JobAdd_cardHeaderLink__2CzPt"}},216:function(e,t,a){e.exports={noticeBoxWrapper:"AuthWall_noticeBoxWrapper__1ums5"}},217:function(e,t,a){e.exports={wrapper:"PageWrapper_wrapper__t-CJy"}},218:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getEntities",(function(){return b})),a.d(n,"getIds",(function(){return p})),a.d(n,"getUserJobs",(function(){return g})),a.d(n,"getJobsMatchingFilter",(function(){return h}));var r=a(1),l=a.n(r),o=a(181),s=a(219),c=a(182),i=a(13);var d=Object(r.createContext)({refetch:()=>{},jobs:{}});const m={jobs:{resource:"jobConfigurations",params:{fields:"*",paging:!1}}},{node:u}=c.a;var E=({children:e})=>{const{loading:t,error:a,data:n,refetch:r}=Object(i.e)(m);if(t)return l.a.createElement(o.n,null,l.a.createElement(o.e,null,l.a.createElement(o.f,null)));if(a)throw a;const{jobConfigurations:s}=n.jobs;return l.a.createElement(d.Provider,{value:{refetch:r,jobs:s}},e)};const b=e=>e.reduce((e,t)=>(e[t.id]=t,e),{}),p=e=>e.map(e=>e.id),g=e=>e.filter(e=>e.configurable),h=(e,t)=>e.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()));var f=a(8),_=a.n(f),j=a(193);var v=Object(j.a)();var T={DATA_VALUE:_.a.t("Data value"),COMPLETENESS:_.a.t("Completeness"),COMPLETENESS_TARGET:_.a.t("Completeness target"),ORG_UNIT_TARGET:_.a.t("Org unit target"),EVENT:_.a.t("Event"),ENROLLMENT:_.a.t("Enrollment"),VALIDATION_RESULT:_.a.t("Validation result")};var y={ANALYTICS_TABLE:_.a.t("Analytics table"),CONTINUOUS_ANALYTICS_TABLE:_.a.t("Continuous analytics table"),CREDENTIALS_EXPIRY_ALERT:_.a.t("Credentials expiry alert"),DATA_INTEGRITY:_.a.t("Data integrity"),DATA_SET_NOTIFICATION:_.a.t("Dataset notification"),DATA_STATISTICS:_.a.t("Data statistics"),DATA_SYNC:_.a.t("Data sync"),EVENT_PROGRAMS_DATA_SYNC:_.a.t("Event programs data sync"),FILE_RESOURCE_CLEANUP:_.a.t("File resource clean up"),META_DATA_SYNC:_.a.t("Meta data sync"),MONITORING:_.a.t("Monitoring"),PREDICTOR:_.a.t("Predictor"),PROGRAM_NOTIFICATIONS:_.a.t("Program notifications"),PUSH_ANALYSIS:_.a.t("Push analysis"),REMOVE_EXPIRED_RESERVED_VALUES:_.a.t("Remove expired reserved values"),RESOURCE_TABLE:_.a.t("Resource table"),SEND_SCHEDULED_MESSAGE:_.a.t("Send scheduled message"),TRACKER_PROGRAMS_DATA_SYNC:_.a.t("Tracker programs data sync"),VALIDATION_RESULTS_NOTIFICATION:_.a.t("Validation results notification")};var N={COMPLETED:_.a.t("Completed"),DISABLED:_.a.t("Disabled"),DONE:_.a.t("Done"),FAILED:_.a.t("Failed"),NOT_STARTED:_.a.t("Not started"),RUNNING:_.a.t("Running"),SCHEDULED:_.a.t("Scheduled"),STOPPED:_.a.t("Stopped")};const C={resource:"jobConfigurations",id:({id:e})=>e,type:"update",partial:!0,data:({enabled:e})=>({enabled:e})},{bool:x,string:O}=c.a;var S=({id:e,checked:t})=>{const[a,{loading:n}]=Object(i.d)(C),{refetch:s}=Object(r.useContext)(d),c=!t;return l.a.createElement(o.A,{name:"toggle-job-".concat(e),disabled:n,checked:t,onChange:()=>{a({id:e,enabled:c}).then(()=>s())}})};const{string:A}=c.a;var I=({id:e})=>l.a.createElement(o.o,{dense:!0,onClick:()=>v.push("/edit/".concat(e)),label:_.a.t("Edit")});const D=[{label:_.a.t("Every hour"),value:"0 0 * ? * *"},{label:_.a.t("Every day at midnight"),value:"0 0 1 ? * *"},{label:_.a.t("Every day at 3 am"),value:"0 0 3 ? * *"},{label:_.a.t("Every day at noon"),value:"0 0 12 ? * MON-FRI"},{label:_.a.t("Every week"),value:"0 0 3 ? * MON"}],{func:F}=c.a;var R=({setCron:e,hideModal:t})=>{const[a,n]=Object(r.useState)("");return l.a.createElement(o.p,{open:!0,small:!0,onClose:t},l.a.createElement(o.s,null,_.a.t("Choose a preset time/interval")),l.a.createElement(o.r,null,D.map(e=>l.a.createElement(o.w,Object.assign({},e,{checked:a===e.value,key:e.value,onChange:({value:e})=>n(e)})))),l.a.createElement(o.q,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{secondary:!0,onClick:t,name:"hide-modal"},_.a.t("Cancel")),l.a.createElement(o.b,{primary:!0,name:"insert-preset",disabled:!a,onClick:()=>{t(),e(a)}},_.a.t("Insert preset")))))};const L={resource:"jobConfigurations",id:({id:e})=>e,type:"delete"},{func:J,string:k}=c.a;var P=({id:e,hideModal:t,onSuccess:a})=>{const[n]=Object(i.d)(L);return l.a.createElement(o.p,{open:!0,small:!0,onClose:t},l.a.createElement(o.r,null,_.a.t("Are you sure you want to delete this job?")),l.a.createElement(o.q,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"hide-modal",secondary:!0,onClick:t},_.a.t("Cancel")),l.a.createElement(o.b,{name:"delete-job-".concat(e),destructive:!0,onClick:()=>{n({id:e}).then(()=>{t(),a()})}},_.a.t("Delete")))))};const{func:H}=c.a;var w=({hideModal:e})=>l.a.createElement(o.p,{open:!0,small:!0,onClose:e},l.a.createElement(o.r,null,_.a.t("Are you sure you want to discard this form?")),l.a.createElement(o.q,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"cancel-discard-form",secondary:!0,onClick:e},_.a.t("Cancel")),l.a.createElement(o.b,{name:"discard-form",destructive:!0,onClick:()=>{e(),v.push("/")}},_.a.t("Discard")))));const{func:B,string:M}=c.a;var U=({id:e,hideModal:t})=>{const a=Object(i.c)(),n={jobs:{resource:"jobConfigurations/".concat(e,"/execute")}},{refetch:s}=Object(r.useContext)(d);return l.a.createElement(o.p,{open:!0,small:!0,onClose:t},l.a.createElement(o.r,null,_.a.t("Are you sure you want to run this job?")),l.a.createElement(o.q,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"hide-modal",secondary:!0,onClick:t},_.a.t("Cancel")),l.a.createElement(o.b,{name:"run-job-".concat(e),primary:!0,onClick:()=>{a.query(n).then(()=>{t(),s()})}},_.a.t("Run")))))};const{string:W}=c.a;var Y=({id:e})=>{const[t,a]=Object(r.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.o,{dense:!0,onClick:()=>{a(!0)},label:_.a.t("Run manually")}),t&&l.a.createElement(U,{id:e,hideModal:()=>a(!1)}))};const{string:q}=c.a;var G=({id:e})=>{const[t,a]=Object(r.useState)(!1),{refetch:n}=Object(r.useContext)(d);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.o,{dense:!0,destructive:!0,onClick:()=>{a(!0)},label:_.a.t("Delete")}),t&&l.a.createElement(P,{id:e,hideModal:()=>a(!1),onSuccess:n}))};const V=({id:e,configurable:t})=>l.a.createElement(o.h,{small:!0,component:l.a.createElement(o.j,null,t&&l.a.createElement(I,{id:e}),l.a.createElement(Y,{id:e}),l.a.createElement(G,{id:e}))},_.a.t("Actions"));V.defaultProps={configurable:!1};const{string:z,bool:X}=c.a;var K=V;const{string:Z}=c.a;var Q=({status:e})=>{switch(e){case"STOPPED":case"DISABLED":return l.a.createElement(o.J,null,N[e]);case"RUNNING":case"NOT_STARTED":case"SCHEDULED":return l.a.createElement(o.J,{neutral:!0},N[e]);case"FAILED":return l.a.createElement(o.J,{negative:!0},N[e]);case"DONE":return l.a.createElement(o.J,{positive:!0},N[e]);default:return null}},$=a(28),ee=a.n($);const te=({nextExecutionTime:e,enabled:t})=>{if(!t||!e)return"-";const a=ee()(Date.now()),n=ee.a.utc(e);return n.isSameOrBefore(a,"minute")?_.a.t("Not scheduled"):a.to(n)},{bool:ae,string:ne}=c.a;te.propTypes={enabled:ae.isRequired,nextExecutionTime:ne};var re=te,le=a(200),oe=a.n(le);const se=["MON","TUE","WED","THU","FRI","SAT","SUN"],ce=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],ie=(e,t,a)=>e>=t&&e<=a,de=e=>"*"===e,me=e=>"?"===e,ue=(e,t,a)=>de(e)||ie(e,t,a)||((e,t,a)=>{const n=e.split("-");return!(!n||2!==n.length)&&(ie(n[0],t,a)&&ie(n[1],t,a)&&n[0]<=n[1])})(e,t,a)||((e,t,a)=>{const n=e.split("/");return!(!n||2!==n.length)&&((de(n[0])||ie(n[0],t,a))&&ie(n[1],t,a))})(e,t,a),Ee=e=>ue(e,1,12)||(e=>{const t=e.split("-"),[a,n]=t.map(e=>ce.indexOf(e));return-1!==a&&void 0===n||-1!==a&&-1!==n&&a<=n})(e),be=e=>ue(e,1,7)||(e=>{const t=e.split("-"),[a,n]=t.map(e=>se.indexOf(e));return-1!==a&&void 0===n||-1!==a&&-1!==n&&a<=n})(e)||me(e);var pe=e=>{if(!e)return!1;const t=e.trim().split(" ");return!!(e=>e&&6===e.length)(t)&&(a=t[0],ue(a,0,59)&&(e=>ue(e,0,59))(t[1])&&(e=>ue(e,0,23))(t[2])&&(e=>ue(e,0,31)||me(e))(t[3])&&Ee(t[4])&&be(t[5]));var a};var ge=e=>"string"===typeof e&&e.length>0?pe(e)?void 0:_.a.t("Please enter a valid CRON expression"):_.a.t("A CRON expression is required");var he=e=>{const t=_.a.language||"en";return e&&pe(e)?oe.a.toString(e,{locale:t}):""};const fe=({cronExpression:e,schedulingType:t,delay:a})=>{switch(t){case"CRON":return he(e);case"FIXED_DELAY":return _.a.t("{{ delay }} seconds after last run",{delay:a});default:return"-"}},{string:_e,number:je}=c.a;fe.propTypes={schedulingType:_e.isRequired,cronExpression:_e,delay:je};var ve=fe;const{shape:Te,string:ye,bool:Ne,number:Ce}=c.a;var xe=({job:{id:e,displayName:t,jobType:a,cronExpression:n,delay:r,jobStatus:s,nextExecutionTime:c,schedulingType:i,enabled:d,configurable:m}})=>l.a.createElement(o.H,null,l.a.createElement(o.E,null,t),l.a.createElement(o.E,null,y[a]),l.a.createElement(o.E,null,l.a.createElement(ve,{cronExpression:n,delay:r,schedulingType:i})),l.a.createElement(o.E,null,l.a.createElement(re,{nextExecutionTime:c,enabled:d})),l.a.createElement(o.E,null,l.a.createElement(Q,{status:s})),l.a.createElement(o.E,null,l.a.createElement(S,{id:e,checked:d})),l.a.createElement(o.E,null,l.a.createElement(K,{id:e,configurable:m})));const{object:Oe,arrayOf:Se,string:Ae}=c.a;var Ie=({jobIds:e,jobEntities:t})=>l.a.createElement(o.C,null,l.a.createElement(o.G,null,l.a.createElement(o.I,null,l.a.createElement(o.F,null,_.a.t("Job name")),l.a.createElement(o.F,null,_.a.t("Type")),l.a.createElement(o.F,null,_.a.t("Schedule")),l.a.createElement(o.F,null,_.a.t("Next run")),l.a.createElement(o.F,null,_.a.t("Status")),l.a.createElement(o.F,null,_.a.t("On/off")),l.a.createElement(o.F,null))),l.a.createElement(o.D,null,0===e.length?l.a.createElement(o.H,null,l.a.createElement(o.E,null,_.a.t("No jobs to display"))):e.map(e=>l.a.createElement(xe,{key:e,job:t[e]})))),De=a(202),Fe=a.n(De);const{bool:Re,object:Le,string:Je,arrayOf:ke,func:Pe}=c.a;var He=({jobIds:e,jobEntities:t,showSystemJobs:a,setShowSystemJobs:n,jobFilter:r,setJobFilter:s})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Fe.a.header},l.a.createElement("h1",{className:Fe.a.headerTitle},_.a.t("Scheduled jobs")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Fe.a.headerLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Fe.a.headerLinkIcon},l.a.createElement(o.k,null)),_.a.t("About job configuration"))),l.a.createElement(o.d,null,l.a.createElement("div",{className:Fe.a.controlContainer},l.a.createElement(o.l,{dataTest:"job-filter-input",placeholder:_.a.t("Filter jobs"),onChange:({value:e})=>{s(e)},value:r}),l.a.createElement("div",{className:Fe.a.controlRight},l.a.createElement(o.A,{dataTest:"job-toggle-switch",checked:a,label:_.a.t("Show system jobs"),onChange:({checked:e})=>{n(e)}}),l.a.createElement(o.b,{dataTest:"new-job-button",onClick:()=>{v.push("/add")}},_.a.t("New job")))),l.a.createElement(Ie,{jobIds:e,jobEntities:t})));var we=()=>{const[e,t]=Object(r.useState)(!1),[a,o]=Object(r.useState)(""),{jobs:s}=Object(r.useContext)(d),c=n.getJobsMatchingFilter(s,a),i=e?n.getIds(c):n.getIds(n.getUserJobs(c));return l.a.createElement(He,{jobIds:i,jobEntities:n.getEntities(s),showSystemJobs:e,setShowSystemJobs:t,jobFilter:a,setJobFilter:o})};const Be=({setCron:e,small:t})=>{const[a,n]=Object(r.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{onClick:()=>n(!0),small:t},_.a.t("Choose from preset times")),a&&l.a.createElement(R,{hideModal:()=>n(!1),setCron:e}))};Be.defaultProps={small:!1};const{func:Me,bool:Ue}=c.a;var We=Be;const{string:Ye,func:qe}=c.a;var Ge=({id:e,onSuccess:t})=>{const[a,n]=Object(r.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{destructive:!0,onClick:()=>n(!0)},_.a.t("Delete job")),a&&l.a.createElement(P,{id:e,hideModal:()=>n(!1),onSuccess:t}))};const Ve=({shouldConfirm:e,children:t,small:a,className:n})=>{const[s,c]=Object(r.useState)(!1),i=e?()=>c(!0):()=>v.push("/");return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{onClick:i,small:a,className:n},t),s&&l.a.createElement(w,{hideModal:()=>c(!1)}))};Ve.defaultProps={className:"",shouldConfirm:!1,small:!1};const{string:ze,bool:Xe}=c.a;var Ke=Ve;const{FORM_ERROR:Ze}=o.i;var Qe=e=>{const{details:{response:t}}=e,a={},n=[];return t.errorReports&&t.errorReports.length&&t.errorReports.forEach(e=>{e.errorProperty?a[e.errorProperty]=e.message:n.push(e.message)}),n.length>0&&(a[Ze]=n),a};const $e={resource:"jobConfigurations",type:"create",data:({job:e})=>e};var et=()=>{const{refetch:e}=Object(r.useContext)(d),t=Object(i.c)();return[a=>t.mutate($e,{variables:{job:a}}).then(()=>{v.push("/"),e()}).catch(e=>{if("access"===e.type)return Qe(e);throw e})]};const tt={resource:"jobConfigurations",type:"update",id:({id:e})=>e,data:({job:e})=>e};var at=({id:e})=>{const{refetch:t}=Object(r.useContext)(d),a=Object(i.c)();return[n=>a.mutate(tt,{variables:{job:n,id:e}}).then(()=>{v.push("/"),t()}).catch(e=>{if("access"===e.type)return Qe(e);throw e})]},nt=a(203),rt=a.n(nt);const{array:lt}=c.a;var ot=({submitError:e})=>e.length>0?l.a.createElement(o.v,{error:!0,title:_.a.t("Something went wrong whilst creating your job")},l.a.createElement("ul",{className:rt.a.list},e.map(e=>l.a.createElement("li",{key:e},e)))):null;const{Field:st}=o.x,ct=Object(o.K)(o.O,o.M);var it=()=>l.a.createElement(st,{name:"name",component:o.m,validate:ct,label:_.a.t("Name"),type:"text",required:!0});const{Field:dt}=o.x,mt=Object(o.K)(o.O,o.M),ut={jobTypes:{resource:"jobConfigurations/jobTypes"}};var Et=()=>{const{loading:e,error:t,data:a}=Object(i.e)(ut);if(e)return l.a.createElement(o.y,{loading:!0,loadingText:_.a.t("Loading"),label:_.a.t("Job type"),required:!0});if(t)throw t;const n=a.jobTypes.jobTypes.map(({jobType:e})=>({value:e,label:y[e]}));return l.a.createElement(dt,{name:"jobType",validate:mt,component:o.z,options:n,label:_.a.t("Job type"),required:!0})};const bt=(e,t)=>e.find(e=>e.jobType===t),pt=e=>"number"===typeof e?e.toString():e,{Field:gt}=o.x,ht={options:{resource:"/",id:({id:e})=>e,params:{paging:!1}}},{string:ft}=c.a;var _t=({endpoint:e,label:t,name:a})=>{const{loading:n,error:r,data:s}=Object(i.e)(ht,{variables:{id:e}});if(n)return l.a.createElement(o.t,{loading:!0,label:t});if(r)throw r;if(0===s.options.length)return l.a.createElement(o.t,{disabled:!0,helpText:_.a.t("No options available"),label:t});const c=s.options.map(e=>({value:e,label:e}));return l.a.createElement(gt,{name:a,component:o.u,options:c,label:t})};const{Field:jt}=o.x,vt={options:{resource:"/",id:({id:e})=>e,params:{paging:!1}}},{string:Tt}=c.a;var yt=({endpoint:e,label:t,name:a})=>{const{loading:n,error:r,data:s}=Object(i.e)(vt,{variables:{id:e}});if(n)return l.a.createElement(o.t,{loading:!0,label:t});if(r)throw r;if(0===s.options.length)return l.a.createElement(o.t,{disabled:!0,helpText:_.a.t("No options available"),label:t});const c=s.options.map(e=>({value:e,label:T[e]||e}));return l.a.createElement(jt,{name:a,component:o.u,options:c,label:t})};const{Field:Nt}=o.x,Ct={options:{resource:"/",id:({id:e})=>e,params:{paging:!1}}},{string:xt}=c.a;var Ot=({endpoint:e,label:t,name:a,parameterName:n})=>{const{loading:r,error:s,data:c}=Object(i.e)(Ct,{variables:{id:e}});if(r)return l.a.createElement(o.t,{loading:!0,label:t});if(s)throw s;if(!(n in c.options)||0===c.options[n].length)return l.a.createElement(o.t,{disabled:!0,helpText:_.a.t("No options available"),label:t});const d=c.options[n].map(({id:e,displayName:t})=>({value:e,label:t}));return l.a.createElement(Nt,{name:a,component:o.u,options:d,label:t})},St=a(204),At=a.n(St);const{Field:It}=o.x,Dt={jobTypes:{resource:"jobConfigurations/jobTypes"}},{string:Ft}=c.a;var Rt=({jobType:e})=>{const{loading:t,error:a,data:n}=Object(i.e)(Dt);if(t)return null;if(a)throw a;const r=((e,t)=>{const a=bt(e,t);return"jobParameters"in a?a.jobParameters:[]})(n.jobTypes.jobTypes,e);if(0===r.length)return null;const s=r.map(({fieldName:e,name:t,klass:a,relativeApiEndpoint:n})=>{const r={label:e,name:"".concat("jobParameters",".").concat(t)},s=(e=>e&&e.startsWith("/api/")?e.slice(5):e)(n);let c=null;if("skipTableTypes"===t)return l.a.createElement(o.a,{marginTop:"16px",key:t},l.a.createElement(yt,Object.assign({},r,{endpoint:s})));switch(a){case"java.lang.String":c=l.a.createElement(It,Object.assign({},r,{component:o.m,type:"text"}));break;case"java.lang.Boolean":c=l.a.createElement(It,Object.assign({},r,{component:o.B,type:"checkbox"}));break;case"java.lang.Integer":c=l.a.createElement(It,Object.assign({},r,{component:o.m,format:pt,type:"number"}));break;case"java.util.Set":c=l.a.createElement(_t,Object.assign({},r,{endpoint:s}));break;case"java.util.List":c=l.a.createElement(Ot,Object.assign({},r,{parameterName:t,endpoint:s}))}return l.a.createElement(o.a,{marginTop:"16px",key:t},c)});return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h4",{className:At.a.headerTitle},_.a.t("Parameters"))),s)};const{Field:Lt,useFormState:Jt,useForm:kt}=o.x,Pt=ge;var Ht=()=>{const e=kt(),{values:t}=Jt({subscription:{values:!0}}),a=t.cronExpression,n=he(a);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Lt,{component:o.m,name:"cronExpression",validate:Pt,label:_.a.t("CRON Expression"),type:"text",helpText:n,required:!0}),l.a.createElement(o.a,{marginTop:"8px"},l.a.createElement(We,{setCron:t=>e.change("cronExpression",t),small:!0})))};const{Field:wt}=o.x,Bt=Object(o.K)(o.N,o.M,Object(o.L)(1,86400));var Mt=()=>l.a.createElement(wt,{component:o.m,name:"delay",validate:Bt,label:_.a.t("Delay"),type:"number",format:pt,helpText:_.a.t("Delay in seconds ({{ LOWERBOUND }} - {{ UPPERBOUND }})",{LOWERBOUND:1,UPPERBOUND:86400}),required:!0});const Ut={jobTypes:{resource:"jobConfigurations/jobTypes"}},{string:Wt}=c.a;var Yt=({jobType:e})=>{const{loading:t,error:a,data:n}=Object(i.e)(Ut);if(t)return null;if(a)throw a;switch(bt(n.jobTypes.jobTypes,e).schedulingType){case"CRON":return l.a.createElement(Ht,null);case"FIXED_DELAY":return l.a.createElement(Mt,null);default:return null}};const qt="jobType";var Gt=a(205),Vt=a.n(Gt);const{useForm:zt}=o.x,Xt=({handleSubmit:e,pristine:t,submitting:a,submitError:n,hasSubmitErrors:s,values:c,setIsPristine:i})=>{const{subscribe:d}=zt();Object(r.useEffect)(()=>{d(({pristine:e})=>i(e),{pristine:!0})});const m=c[qt],u=a?l.a.createElement(o.f,{small:!0}):null;return l.a.createElement("form",{onSubmit:e},l.a.createElement(o.a,{maxWidth:"600px"},l.a.createElement(it,null)),l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(Et,null)),m&&l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(Yt,{jobType:m})),m&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(Rt,{jobType:m})),s&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(ot,{submitError:n})),l.a.createElement("div",{className:Vt.a.formButtonContainer},l.a.createElement(o.b,{primary:!0,type:"submit",disabled:t||a,icon:u,className:Vt.a.saveButton},_.a.t("Save")),l.a.createElement(Ke,{shouldConfirm:!t},_.a.t("Cancel"))))},{func:Kt,bool:Zt,object:Qt,array:$t}=c.a;Xt.defaultProps={submitError:[]};var ea=Xt;const{Form:ta}=o.x,{func:aa}=c.a;var na=({setIsPristine:e})=>{const[t]=et();return l.a.createElement(ta,{onSubmit:t,component:ea,setIsPristine:e,destroyOnUnregister:!0})},ra=a(206),la=a.n(ra);const{useForm:oa}=o.x,sa=({id:e,handleSubmit:t,pristine:a,submitting:n,submitError:s,hasSubmitErrors:c,values:i,setIsPristine:d})=>{const{subscribe:m}=oa();Object(r.useEffect)(()=>{m(({pristine:e})=>d(e),{pristine:!0})});const u=i[qt],E=n?l.a.createElement(o.f,{small:!0}):null;return l.a.createElement("form",{onSubmit:t},l.a.createElement(o.a,{maxWidth:"600px"},l.a.createElement(it,null)),l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(Et,null)),u&&l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(Yt,{jobType:u})),u&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(Rt,{jobType:u})),c&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(ot,{submitError:s})),l.a.createElement("div",{className:la.a.formButtonContainer},l.a.createElement(o.b,{primary:!0,type:"submit",disabled:a||n,icon:E,className:la.a.saveButton},_.a.t("Save")),l.a.createElement(Ke,{shouldConfirm:!a},_.a.t("Cancel")),l.a.createElement("span",{className:la.a.deleteButton},l.a.createElement(Ge,{id:e,onSuccess:()=>v.push("/")}))))},{func:ca,bool:ia,object:da,array:ma,string:ua}=c.a;sa.defaultProps={submitError:[]};var Ea=sa;const{Form:ba}=o.x,pa={job:{resource:"jobConfigurations",id:({id:e})=>e,params:{paging:!1,fields:["cronExpression","delay","jobParameters","jobType","name","schedulingType"].join(",")}}},{func:ga}=c.a;var ha=({setIsPristine:e})=>{const{id:t}=Object(s.c)(),{loading:a,error:n,data:r}=Object(i.e)(pa,{variables:{id:t}}),[o]=at({id:t});if(a)return null;if(n)throw n;return l.a.createElement(ba,{onSubmit:o,component:Ea,setIsPristine:e,initialValues:r.job,id:t,destroyOnUnregister:!0})},fa=a(213),_a=a.n(fa);const{string:ja}=c.a;var va=({created:e,lastExecutedStatus:t,lastExecuted:a})=>{const n=Date.now(),r=ee()(e).from(n),o=N[t],s=a?ee()(a).from(n):"";return l.a.createElement("div",{className:_a.a.wrapper},l.a.createElement("h4",{className:_a.a.title},_.a.t("Job details")),l.a.createElement("div",{className:_a.a.details},l.a.createElement("div",null,_.a.t("Created {{ createdFromNow }}.",{createdFromNow:r})),s&&l.a.createElement("div",null,_.a.t("Last run {{ lastRunFromNow }}.",{lastRunFromNow:s})),o&&l.a.createElement("div",null,_.a.t("Last run status: {{ translatedStatus }}.",{translatedStatus:o,nsSeparator:">"}))))},Ta=a(214),ya=a.n(Ta);const{bool:Na,func:Ca,string:xa}=c.a;var Oa=({isPristine:e,setIsPristine:t,name:a,created:n,lastExecutedStatus:r,lastExecuted:s})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:ya.a.pageHeader},l.a.createElement(Ke,{shouldConfirm:!e,className:ya.a.pageHeaderButton,small:!0},_.a.t("Back to all jobs")),l.a.createElement("h2",{className:ya.a.pageHeaderTitle},_.a.t("Job: {{ name }}",{name:a,nsSeparator:">"}))),l.a.createElement(o.d,{className:ya.a.card},l.a.createElement("header",{className:ya.a.cardHeader},l.a.createElement("h3",{className:ya.a.cardHeaderTitle},_.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:ya.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:ya.a.cardHeaderInfo},l.a.createElement(o.k,null)),_.a.t("About job configuration"))),l.a.createElement("div",{className:ya.a.jobDetails},l.a.createElement(va,{created:n,lastExecutedStatus:r,lastExecuted:s})),l.a.createElement(ha,{setIsPristine:t})));const Sa={job:{resource:"jobConfigurations",id:({id:e})=>e,params:{paging:!1}}};var Aa=()=>{const[e,t]=Object(r.useState)(!0),{id:a}=Object(s.c)(),{loading:n,error:c,data:d}=Object(i.e)(Sa,{variables:{id:a}});if(n)return l.a.createElement(o.n,null,l.a.createElement(o.e,null,l.a.createElement(o.f,null)));if(c)throw c;return l.a.createElement(Oa,{isPristine:e,setIsPristine:t,name:d.job.name,created:d.job.created,lastExecutedStatus:d.job.lastExecutedStatus,lastExecuted:d.job.lastExecuted})},Ia=a(215),Da=a.n(Ia);const{bool:Fa,func:Ra}=c.a;var La=({isPristine:e,setIsPristine:t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Da.a.pageHeader},l.a.createElement(Ke,{shouldConfirm:!e,className:Da.a.pageHeaderButton,small:!0},_.a.t("Back to all jobs")),l.a.createElement("h2",{className:Da.a.pageHeaderTitle},_.a.t("New Job"))),l.a.createElement(o.d,{className:Da.a.card},l.a.createElement("header",{className:Da.a.cardHeader},l.a.createElement("h3",{className:Da.a.cardHeaderTitle},_.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Da.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Da.a.cardHeaderInfo},l.a.createElement(o.k,null)),_.a.t("About job configuration"))),l.a.createElement(na,{setIsPristine:t})));var Ja=()=>{const[e,t]=Object(r.useState)(!0);return l.a.createElement(La,{isPristine:e,setIsPristine:t})};var ka=()=>l.a.createElement(s.b,{history:v},l.a.createElement(s.a,{exact:!0,path:"/",component:we}),l.a.createElement(s.a,{path:"/edit/:id",component:Aa}),l.a.createElement(s.a,{path:"/add",component:Ja}));var Pa=a(216),Ha=a.n(Pa);const wa={me:{resource:"me"}},{node:Ba}=c.a;var Ma=({children:e})=>{const{loading:t,error:a,data:n}=Object(i.e)(wa);if(t)return l.a.createElement(o.n,null,l.a.createElement(o.e,null,l.a.createElement(o.f,null)));if(a)throw a;return(e=>{const{authorities:t}=e;return!!t&&(t.includes("ALL")||t.includes("F_SCHEDULING_ADMIN"))})(n.me)?l.a.createElement(l.a.Fragment,null,e):l.a.createElement("div",{className:Ha.a.noticeBoxWrapper},l.a.createElement(o.v,{error:!0,title:_.a.t("Not authorized")},_.a.t("You don't have access to the Job Scheduler. Contact a system administrator to request access.")))},Ua=a(217),Wa=a.n(Ua);const{node:Ya}=c.a;var qa=({children:e})=>l.a.createElement("div",{className:Wa.a.wrapper},e);a(218);var Ga=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(o.g,{spacers:!0,colors:!0}),l.a.createElement(qa,null,l.a.createElement(Ma,null,l.a.createElement(E,null,l.a.createElement(ka,null)))));a.d(t,"default",(function(){return Ga}))}}]);
//# sourceMappingURL=app.66cec6c3.chunk.js.map