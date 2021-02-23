(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[135],{211:function(e,a,t){e.exports={header:"JobList_header__23tFt",headerTitle:"JobList_headerTitle__21D__",headerLink:"JobList_headerLink__2zepi",headerLinkIcon:"JobList_headerLinkIcon__XdfBB",controlContainer:"JobList_controlContainer__3Yzj_",controlRight:"JobList_controlRight__38lfB"}},212:function(e,a,t){e.exports={list:"FormErrorBox_list__3BejY"}},213:function(e,a,t){e.exports={headerTitle:"ParameterFields_headerTitle__IBF76"}},214:function(e,a,t){e.exports={formButtonContainer:"JobAddForm_formButtonContainer__1MLSp",saveButton:"JobAddForm_saveButton__RfxZ9"}},215:function(e,a,t){e.exports={formButtonContainer:"JobEditForm_formButtonContainer__2b6Fi",deleteButton:"JobEditForm_deleteButton__VQxBE",saveButton:"JobEditForm_saveButton__278Ab"}},222:function(e,a,t){e.exports={wrapper:"JobDetails_wrapper__1-YkO",title:"JobDetails_title__1Cht7",details:"JobDetails_details__2HITJ"}},223:function(e,a,t){e.exports={pageHeader:"JobEdit_pageHeader__3Fywp",pageHeaderButton:"JobEdit_pageHeaderButton__29yjJ",pageHeaderTitle:"JobEdit_pageHeaderTitle__jZrIG",card:"JobEdit_card__2QqEg",cardHeader:"JobEdit_cardHeader__Mv_cj",cardHeaderTitle:"JobEdit_cardHeaderTitle__29Y64",cardHeaderInfo:"JobEdit_cardHeaderInfo__3VWZt",cardHeaderLink:"JobEdit_cardHeaderLink__2frj7",jobDetails:"JobEdit_jobDetails__194v-"}},224:function(e,a,t){e.exports={pageHeader:"JobView_pageHeader__3d3IR",pageHeaderButton:"JobView_pageHeaderButton__2VF9Z",pageHeaderTitle:"JobView_pageHeaderTitle__3wHyg",card:"JobView_card__3LlD0",cardHeader:"JobView_cardHeader__3v0pX",cardHeaderTitle:"JobView_cardHeaderTitle__tPEnV",cardHeaderInfo:"JobView_cardHeaderInfo__j1GsD",cardHeaderLink:"JobView_cardHeaderLink__86M36",jobDetails:"JobView_jobDetails__3cu4z"}},225:function(e,a,t){e.exports={pageHeader:"JobAdd_pageHeader__2NZzc",pageHeaderButton:"JobAdd_pageHeaderButton__Xg_R9",pageHeaderTitle:"JobAdd_pageHeaderTitle__1RMl0",card:"JobAdd_card__1HH6H",cardHeader:"JobAdd_cardHeader__1D3sS",cardHeaderTitle:"JobAdd_cardHeaderTitle__2TG9a",cardHeaderInfo:"JobAdd_cardHeaderInfo__vq_Y1",cardHeaderLink:"JobAdd_cardHeaderLink__2CzPt"}},226:function(e,a,t){e.exports={noticeBoxWrapper:"AuthWall_noticeBoxWrapper__1ums5"}},227:function(e,a,t){e.exports={wrapper:"PageWrapper_wrapper__t-CJy"}},228:function(e,a,t){},233:function(e,a,t){"use strict";t.r(a);var r={};t.r(r),t.d(r,"getJobsStore",(function(){return g})),t.d(r,"getJobTypesStore",(function(){return _})),t.d(r,"getParameterOptionsStore",(function(){return f})),t.d(r,"getRefetchJobs",(function(){return T})),t.d(r,"getJobById",(function(){return v})),t.d(r,"getJobType",(function(){return j})),t.d(r,"getJobTypeParameters",(function(){return y})),t.d(r,"getParameterOptions",(function(){return x}));var n={};t.r(n),t.d(n,"useJobs",(function(){return N})),t.d(n,"useJobFilter",(function(){return C})),t.d(n,"useShowSystemJobs",(function(){return S})),t.d(n,"useListJobs",(function(){return O}));var l=t(1),o=t.n(l),s=t(188),c=t(216),i=t(189),d=t(13);var m=Object(l.createContext)({jobs:{},jobTypes:{},parameterOptions:{},refetchJobs:()=>{throw new Error("Store context needs a valid provider")}});const u={jobs:{resource:"jobConfigurations",params:{fields:"*",paging:!1}}},E={jobTypes:{resource:"jobConfigurations/jobTypes",params:{fields:"*",paging:!1}}},p={skipTableTypes:{resource:"analytics/tableTypes"},validationRuleGroups:{resource:"validationRuleGroups",params:{paging:!1}},pushAnalysis:{resource:"pushAnalysis",params:{paging:!1}},predictors:{resource:"predictors",params:{paging:!1}},predictorGroups:{resource:"predictorGroups",params:{paging:!1}}},{node:b}=i.a;var h=({children:e})=>{const a=Object(l.useState)(""),t=Object(l.useState)(!1),r=Object(d.e)(u),n=Object(d.e)(E),c=Object(d.e)(p);if(r.loading||n.loading||c.loading)return o.a.createElement(s.p,null,o.a.createElement(s.e,null,o.a.createElement(s.g,null)));const i=r.error||n.error||c.error;if(i)throw i;const{jobConfigurations:b}=r.data.jobs,{jobTypes:h}=n.data.jobTypes,{skipTableTypes:g,validationRuleGroups:{validationRuleGroups:_},pushAnalysis:{pushAnalysis:f},predictors:{predictors:T},predictorGroups:{predictorGroups:v}}=c.data,j={skipTableTypes:g,validationRuleGroups:_,pushAnalysis:f,predictors:T,predictorGroups:v};return o.a.createElement(m.Provider,{value:{jobs:b,jobTypes:h,parameterOptions:j,refetchJobs:r.refetch,jobFilter:a,showSystemJobs:t}},e)};const g=e=>e.jobs,_=e=>e.jobTypes,f=e=>e.parameterOptions,T=e=>e.refetchJobs,v=(e,a)=>g(e).find(e=>e.id===a),j=(e,a)=>_(e).find(e=>e.jobType===a),y=(e,a)=>{const t=j(e,a);return"jobParameters"in t?t.jobParameters:[]},x=(e,a)=>f(e)[a],N=()=>Object(l.useContext)(m).jobs,C=()=>Object(l.useContext)(m).jobFilter,S=()=>Object(l.useContext)(m).showSystemJobs,O=()=>{const[e]=C(),[a]=S();return N().filter(a=>a.name.toLowerCase().includes(e.toLowerCase())).filter(e=>!!a||e.configurable)};var A=t(8),J=t.n(A),I=t(201);var H=Object(I.a)();var R={DATA_VALUE:J.a.t("Data value"),COMPLETENESS:J.a.t("Completeness"),COMPLETENESS_TARGET:J.a.t("Completeness target"),ORG_UNIT_TARGET:J.a.t("Org unit target"),EVENT:J.a.t("Event"),ENROLLMENT:J.a.t("Enrollment"),VALIDATION_RESULT:J.a.t("Validation result")};var D={ANALYTICS_TABLE:J.a.t("Analytics table"),CONTINUOUS_ANALYTICS_TABLE:J.a.t("Continuous analytics table"),CREDENTIALS_EXPIRY_ALERT:J.a.t("Credentials expiry alert"),DATA_INTEGRITY:J.a.t("Data integrity"),DATA_SET_NOTIFICATION:J.a.t("Dataset notification"),DATA_STATISTICS:J.a.t("Data statistics"),DATA_SYNC:J.a.t("Data synchronization"),EVENT_PROGRAMS_DATA_SYNC:J.a.t("Event programs data sync"),FILE_RESOURCE_CLEANUP:J.a.t("File resource clean up"),META_DATA_SYNC:J.a.t("Metadata synchronization"),MONITORING:J.a.t("Monitoring"),PREDICTOR:J.a.t("Predictor"),PROGRAM_NOTIFICATIONS:J.a.t("Program notifications"),PUSH_ANALYSIS:J.a.t("Push analysis"),REMOVE_EXPIRED_RESERVED_VALUES:J.a.t("Remove expired reserved values"),RESOURCE_TABLE:J.a.t("Resource table"),SEND_SCHEDULED_MESSAGE:J.a.t("Send scheduled message"),TRACKER_PROGRAMS_DATA_SYNC:J.a.t("Tracker programs data sync"),VALIDATION_RESULTS_NOTIFICATION:J.a.t("Validation results notification")};var F={COMPLETED:J.a.t("Completed"),DISABLED:J.a.t("Disabled"),DONE:J.a.t("Done"),FAILED:J.a.t("Failed"),NOT_STARTED:J.a.t("Not started"),RUNNING:J.a.t("Running"),SCHEDULED:J.a.t("Scheduled"),STOPPED:J.a.t("Stopped")};const k={resource:"jobConfigurations",id:({id:e})=>e,type:"update",partial:!0,data:({enabled:e})=>({enabled:e})},{bool:L,string:P}=i.a;var w=({id:e,checked:a,disabled:t})=>{const[n,{loading:c}]=Object(d.d)(k),i=Object(l.useContext)(m),u=r.getRefetchJobs(i),E=!a;return o.a.createElement(s.D,{name:"toggle-job-".concat(e),disabled:t||c,checked:a,onChange:()=>{n({id:e,enabled:E}).then(()=>u())}})};const{string:B}=i.a;var M=({id:e})=>o.a.createElement(s.q,{dense:!0,onClick:()=>H.push("/edit/".concat(e)),label:J.a.t("Edit")});const{string:G}=i.a;var V=({id:e})=>o.a.createElement(s.q,{dense:!0,onClick:()=>H.push("/view/".concat(e)),label:J.a.t("View")});const U=[{label:J.a.t("Every hour"),value:"0 0 * ? * *"},{label:J.a.t("Every day at midnight"),value:"0 0 1 ? * *"},{label:J.a.t("Every day at 3 am"),value:"0 0 3 ? * *"},{label:J.a.t("Every day at noon"),value:"0 0 12 ? * MON-FRI"},{label:J.a.t("Every week"),value:"0 0 3 ? * MON"}],{func:W}=i.a;var z=({setCron:e,hideModal:a})=>{const[t,r]=Object(l.useState)("");return o.a.createElement(s.r,{open:!0,small:!0,onClose:a},o.a.createElement(s.u,null,J.a.t("Choose a preset time/interval")),o.a.createElement(s.t,null,U.map(e=>o.a.createElement(s.y,Object.assign({},e,{checked:t===e.value,key:e.value,onChange:({value:e})=>r(e)})))),o.a.createElement(s.s,null,o.a.createElement(s.c,{end:!0},o.a.createElement(s.b,{secondary:!0,onClick:a,name:"hide-modal"},J.a.t("Cancel")),o.a.createElement(s.b,{primary:!0,name:"insert-preset",disabled:!t,onClick:()=>{a(),e(t)}},J.a.t("Insert preset")))))};const Y={resource:"jobConfigurations",id:({id:e})=>e,type:"delete"},{func:q,string:X}=i.a;var Z=({id:e,hideModal:a,onSuccess:t})=>{const[r]=Object(d.d)(Y);return o.a.createElement(s.r,{open:!0,small:!0,onClose:a},o.a.createElement(s.t,null,J.a.t("Are you sure you want to delete this job?")),o.a.createElement(s.s,null,o.a.createElement(s.c,{end:!0},o.a.createElement(s.b,{name:"hide-modal",secondary:!0,onClick:a},J.a.t("Cancel")),o.a.createElement(s.b,{name:"delete-job-".concat(e),destructive:!0,onClick:()=>{r({id:e}).then(()=>{a(),t()})}},J.a.t("Delete")))))};const{func:K}=i.a;var Q=({hideModal:e})=>o.a.createElement(s.r,{open:!0,small:!0,onClose:e},o.a.createElement(s.t,null,J.a.t("Are you sure you want to discard this form?")),o.a.createElement(s.s,null,o.a.createElement(s.c,{end:!0},o.a.createElement(s.b,{name:"cancel-discard-form",secondary:!0,onClick:e},J.a.t("Cancel")),o.a.createElement(s.b,{name:"discard-form",destructive:!0,onClick:()=>{e(),H.push("/")}},J.a.t("Discard")))));const{func:$,string:ee}=i.a;var ae=({id:e,hideModal:a})=>{const t=Object(d.c)(),n={jobs:{resource:"jobConfigurations/".concat(e,"/execute")}},c=Object(l.useContext)(m),i=r.getRefetchJobs(c);return o.a.createElement(s.r,{open:!0,small:!0,onClose:a},o.a.createElement(s.t,null,J.a.t("Are you sure you want to run this job?")),o.a.createElement(s.s,null,o.a.createElement(s.c,{end:!0},o.a.createElement(s.b,{name:"hide-modal",secondary:!0,onClick:a},J.a.t("Cancel")),o.a.createElement(s.b,{name:"run-job-".concat(e),primary:!0,onClick:()=>{t.query(n).then(()=>{a(),i()})}},J.a.t("Run")))))};const{string:te}=i.a;var re=({id:e})=>{const[a,t]=Object(l.useState)(!1);return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.q,{dense:!0,onClick:()=>{t(!0)},label:J.a.t("Run manually")}),a&&o.a.createElement(ae,{id:e,hideModal:()=>t(!1)}))};const{string:ne}=i.a;var le=({id:e})=>{const[a,t]=Object(l.useState)(!1),n=Object(l.useContext)(m),c=r.getRefetchJobs(n);return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.q,{dense:!0,destructive:!0,onClick:()=>{t(!0)},label:J.a.t("Delete")}),a&&o.a.createElement(Z,{id:e,hideModal:()=>t(!1),onSuccess:c}))};const oe=({id:e,configurable:a})=>o.a.createElement(s.i,{small:!0,component:o.a.createElement(s.k,null,a?o.a.createElement(M,{id:e}):o.a.createElement(V,{id:e}),a&&o.a.createElement(re,{id:e}),a&&o.a.createElement(le,{id:e}))},J.a.t("Actions"));oe.defaultProps={configurable:!1};const{string:se,bool:ce}=i.a;var ie=oe;const{string:de}=i.a;var me=({status:e})=>{switch(e){case"STOPPED":case"DISABLED":return o.a.createElement(s.M,null,F[e]);case"RUNNING":case"NOT_STARTED":case"SCHEDULED":return o.a.createElement(s.M,{neutral:!0},F[e]);case"FAILED":return o.a.createElement(s.M,{negative:!0},F[e]);case"DONE":return o.a.createElement(s.M,{positive:!0},F[e]);default:return null}},ue=t(27),Ee=t.n(ue);const pe=({nextExecutionTime:e,enabled:a})=>{if(!a||!e)return"-";const t=Ee()(Date.now()),r=Ee.a.utc(e);return r.isSameOrBefore(t,"minute")?J.a.t("Not scheduled"):t.to(r)},{bool:be,string:he}=i.a;pe.propTypes={enabled:be.isRequired,nextExecutionTime:he};var ge=pe,_e=t(209),fe=t.n(_e);const Te=["MON","TUE","WED","THU","FRI","SAT","SUN"],ve=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],je=(e,a,t)=>e>=a&&e<=t,ye=e=>"*"===e,xe=e=>"?"===e,Ne=(e,a,t)=>ye(e)||je(e,a,t)||((e,a,t)=>{const r=e.split("-");return!(!r||2!==r.length)&&(je(r[0],a,t)&&je(r[1],a,t)&&r[0]<=r[1])})(e,a,t)||((e,a,t)=>{const r=e.split("/");return!(!r||2!==r.length)&&((ye(r[0])||je(r[0],a,t))&&je(r[1],a,t))})(e,a,t),Ce=e=>Ne(e,1,12)||(e=>{const a=e.split("-"),[t,r]=a.map(e=>ve.indexOf(e));return-1!==t&&void 0===r||-1!==t&&-1!==r&&t<=r})(e),Se=e=>Ne(e,1,7)||(e=>{const a=e.split("-"),[t,r]=a.map(e=>Te.indexOf(e));return-1!==t&&void 0===r||-1!==t&&-1!==r&&t<=r})(e)||xe(e);var Oe=e=>{if(!e)return!1;const a=e.trim().split(" ");return!!(e=>e&&6===e.length)(a)&&(t=a[0],Ne(t,0,59)&&(e=>Ne(e,0,59))(a[1])&&(e=>Ne(e,0,23))(a[2])&&(e=>Ne(e,0,31)||xe(e))(a[3])&&Ce(a[4])&&Se(a[5]));var t};var Ae=e=>"string"===typeof e&&e.length>0?Oe(e)?void 0:J.a.t("Please enter a valid CRON expression"):J.a.t("A CRON expression is required");var Je=e=>{const a=J.a.language||"en";return e&&Oe(e)?fe.a.toString(e,{locale:a}):""};const Ie=({cronExpression:e,schedulingType:a,delay:t})=>{switch(a){case"CRON":return Je(e);case"FIXED_DELAY":return J.a.t("{{ delay }} seconds after last run",{delay:t});default:return"-"}},{string:He,number:Re}=i.a;Ie.propTypes={schedulingType:He.isRequired,cronExpression:He,delay:Re};var De=Ie;const{shape:Fe,string:ke,bool:Le,number:Pe}=i.a;var we=({job:{id:e,displayName:a,jobType:t,cronExpression:r,delay:n,jobStatus:l,nextExecutionTime:c,schedulingType:i,enabled:d,configurable:m}})=>o.a.createElement(s.K,null,o.a.createElement(s.H,null,a),o.a.createElement(s.H,null,D[t]),o.a.createElement(s.H,null,o.a.createElement(De,{cronExpression:r,delay:n,schedulingType:i})),o.a.createElement(s.H,null,o.a.createElement(ge,{nextExecutionTime:c,enabled:d})),o.a.createElement(s.H,null,o.a.createElement(me,{status:l})),o.a.createElement(s.H,null,o.a.createElement(w,{id:e,checked:d,disabled:!m})),o.a.createElement(s.H,null,o.a.createElement(ie,{id:e,configurable:m})));const{object:Be,arrayOf:Me}=i.a;var Ge=({jobs:e})=>o.a.createElement(s.F,null,o.a.createElement(s.J,null,o.a.createElement(s.L,null,o.a.createElement(s.I,null,J.a.t("Job name")),o.a.createElement(s.I,null,J.a.t("Type")),o.a.createElement(s.I,null,J.a.t("Schedule")),o.a.createElement(s.I,null,J.a.t("Next run")),o.a.createElement(s.I,null,J.a.t("Status")),o.a.createElement(s.I,null,J.a.t("On/off")),o.a.createElement(s.I,null))),o.a.createElement(s.G,null,0===e.length?o.a.createElement(s.K,null,o.a.createElement(s.H,null,J.a.t("No jobs to display"))):e.map(e=>o.a.createElement(we,{key:e.id,job:e})))),Ve=t(211),Ue=t.n(Ve);const{bool:We,object:ze,string:Ye,arrayOf:qe,func:Xe}=i.a;var Ze=({jobs:e,showSystemJobs:a,setShowSystemJobs:t,jobFilter:r,setJobFilter:n})=>o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:Ue.a.header},o.a.createElement("h1",{className:Ue.a.headerTitle},J.a.t("Scheduled jobs")),o.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Ue.a.headerLink,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:Ue.a.headerLinkIcon},o.a.createElement(s.l,null)),J.a.t("About job configuration"))),o.a.createElement(s.d,null,o.a.createElement("div",{className:Ue.a.controlContainer},o.a.createElement(s.m,{dataTest:"job-filter-input",placeholder:J.a.t("Filter jobs"),onChange:({value:e})=>{n(e)},value:r}),o.a.createElement("div",{className:Ue.a.controlRight},o.a.createElement(s.f,{dataTest:"job-toggle-checkbox",checked:a,label:J.a.t("Include system jobs in list"),onChange:({checked:e})=>{t(e)}}),o.a.createElement(s.b,{dataTest:"new-job-button",onClick:()=>{H.push("/add")}},J.a.t("New job")))),o.a.createElement(Ge,{jobs:e})));var Ke=()=>{const[e,a]=n.useJobFilter(),[t,r]=n.useShowSystemJobs(),l=n.useListJobs();return o.a.createElement(Ze,{jobs:l,showSystemJobs:t,setShowSystemJobs:r,jobFilter:e,setJobFilter:a})};const Qe=({setCron:e,small:a})=>{const[t,r]=Object(l.useState)(!1);return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.b,{onClick:()=>r(!0),small:a},J.a.t("Choose from preset times")),t&&o.a.createElement(z,{hideModal:()=>r(!1),setCron:e}))};Qe.defaultProps={small:!1};const{func:$e,bool:ea}=i.a;var aa=Qe;const{string:ta,func:ra}=i.a;var na=({id:e,onSuccess:a})=>{const[t,r]=Object(l.useState)(!1);return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.b,{destructive:!0,onClick:()=>r(!0)},J.a.t("Delete job")),t&&o.a.createElement(Z,{id:e,hideModal:()=>r(!1),onSuccess:a}))};const la=({shouldConfirm:e,children:a,small:t,className:r})=>{const[n,c]=Object(l.useState)(!1),i=e?()=>c(!0):()=>H.push("/");return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.b,{onClick:i,small:t,className:r},a),n&&o.a.createElement(Q,{hideModal:()=>c(!1)}))};la.defaultProps={className:"",shouldConfirm:!1,small:!1};const{string:oa,bool:sa}=i.a;var ca=la;const{FORM_ERROR:ia}=s.j;var da=e=>{const{details:{response:a}}=e,t={},r=[];return a.errorReports&&a.errorReports.length&&a.errorReports.forEach(e=>{e.errorProperty?t[e.errorProperty]=e.message:r.push(e.message)}),r.length>0&&(t[ia]=r),t};const ma={resource:"jobConfigurations",type:"create",data:({job:e})=>e};var ua=()=>{const{refetchJobs:e}=Object(l.useContext)(m),a=Object(d.c)();return[t=>a.mutate(ma,{variables:{job:t}}).then(()=>{H.push("/"),e()}).catch(e=>{if("access"===e.type)return da(e);throw e})]};const Ea={resource:"jobConfigurations",type:"update",id:({id:e})=>e,data:({job:e})=>e};var pa=({id:e})=>{const{refetchJobs:a}=Object(l.useContext)(m),t=Object(d.c)();return[r=>t.mutate(Ea,{variables:{job:r,id:e}}).then(()=>{H.push("/"),a()}).catch(e=>{if("access"===e.type)return da(e);throw e})]},ba=t(212),ha=t.n(ba);const{array:ga}=i.a;var _a=({submitError:e})=>e.length>0?o.a.createElement(s.x,{error:!0,title:J.a.t("Something went wrong whilst creating your job")},o.a.createElement("ul",{className:ha.a.list},e.map(e=>o.a.createElement("li",{key:e},e)))):null;const{Field:fa}=s.z,Ta=Object(s.N)(s.R,s.P);var va=()=>o.a.createElement(fa,{name:"name",component:s.o,validate:Ta,label:J.a.t("Name"),type:"text",required:!0});const{Field:ja}=s.z,ya=Object(s.N)(s.R,s.P);var xa=()=>{const e=Object(l.useContext)(m),a=r.getJobTypesStore(e).map(({jobType:e})=>({value:e,label:D[e]}));return o.a.createElement(ja,{name:"jobType",validate:ya,component:s.B,options:a,label:J.a.t("Job type"),required:!0})};const Na=e=>"number"===typeof e?e.toString():e,{Field:Ca}=s.z,{string:Sa}=i.a;var Oa=({label:e,name:a,parameterName:t})=>{const n=Object(l.useContext)(m),c=r.getParameterOptions(n,t);if(0===c.length)return o.a.createElement(s.v,{disabled:!0,helpText:J.a.t("No options available"),label:e});const i=c.map(e=>({value:e,label:R[e]||e}));return o.a.createElement(Ca,{name:a,component:s.w,options:i,label:e})};const{Field:Aa}=s.z,{string:Ja}=i.a;var Ia=({label:e,name:a,parameterName:t})=>{const n=Object(l.useContext)(m),c=r.getParameterOptions(n,t);if(0===c.length)return o.a.createElement(s.v,{disabled:!0,helpText:J.a.t("No options available"),label:e});const i=c.map(({id:e,displayName:a})=>({value:e,label:a}));return o.a.createElement(Aa,{name:a,component:s.w,options:i,label:e})},Ha=t(213),Ra=t.n(Ha);const{Field:Da}=s.z,{string:Fa}=i.a;var ka=({jobType:e})=>{const a=Object(l.useContext)(m),t=r.getJobTypeParameters(a,e);if(0===t.length)return null;const n=t.map(({fieldName:e,name:a,klass:t})=>{const r={label:e,name:"".concat("jobParameters",".").concat(a)};let n=null;if("skipTableTypes"===a)return o.a.createElement(s.a,{marginTop:"16px",key:a},o.a.createElement(Oa,Object.assign({},r,{parameterName:a})));switch(t){case"java.lang.String":n=o.a.createElement(Da,Object.assign({},r,{component:s.o,type:"text"}));break;case"java.lang.Boolean":n=o.a.createElement(Da,Object.assign({},r,{component:s.E,type:"checkbox"}));break;case"java.lang.Integer":n=o.a.createElement(Da,Object.assign({},r,{component:s.o,format:Na,type:"number"}));break;case"java.util.List":n=o.a.createElement(Ia,Object.assign({},r,{parameterName:a}))}return o.a.createElement(s.a,{marginTop:"16px",key:a},n)});return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h4",{className:Ra.a.headerTitle},J.a.t("Parameters"))),n)};const{Field:La,useFormState:Pa,useForm:wa}=s.z,Ba=Ae;var Ma=()=>{const e=wa(),{values:a}=Pa({subscription:{values:!0}}),t=a.cronExpression,r=Je(t);return o.a.createElement(o.a.Fragment,null,o.a.createElement(La,{component:s.o,name:"cronExpression",validate:Ba,label:J.a.t("CRON Expression"),type:"text",helpText:r,required:!0}),o.a.createElement(s.a,{marginTop:"8px"},o.a.createElement(aa,{setCron:a=>e.change("cronExpression",a),small:!0})))};const{Field:Ga}=s.z,Va=Object(s.N)(s.Q,s.P,Object(s.O)(1,86400));var Ua=()=>o.a.createElement(Ga,{component:s.o,name:"delay",validate:Va,label:J.a.t("Delay"),type:"number",format:Na,helpText:J.a.t("Delay in seconds ({{ lowerbound }} - {{ upperbound }})",{lowerbound:1,upperbound:86400}),required:!0});const{string:Wa}=i.a;var za=({jobType:e})=>{const a=Object(l.useContext)(m);switch(r.getJobType(a,e).schedulingType){case"CRON":return o.a.createElement(Ma,null);case"FIXED_DELAY":return o.a.createElement(Ua,null);default:return null}};const Ya="jobType";var qa=t(214),Xa=t.n(qa);const{useForm:Za}=s.z,Ka=({handleSubmit:e,pristine:a,submitting:t,submitError:r,hasSubmitErrors:n,values:c,setIsPristine:i})=>{const{subscribe:d}=Za();Object(l.useEffect)(()=>d(({pristine:e})=>i(e),{pristine:!0}));const m=c[Ya],u=t?o.a.createElement(s.g,{small:!0}):null;return o.a.createElement("form",{onSubmit:e},o.a.createElement(s.a,{maxWidth:"600px"},o.a.createElement(va,null)),o.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},o.a.createElement(xa,null)),m&&o.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},o.a.createElement(za,{jobType:m})),m&&o.a.createElement(s.a,{marginTop:"32px",maxWidth:"400px"},o.a.createElement(ka,{jobType:m})),n&&o.a.createElement(s.a,{marginTop:"32px",maxWidth:"600px"},o.a.createElement(_a,{submitError:r})),o.a.createElement("div",{className:Xa.a.formButtonContainer},o.a.createElement(s.b,{primary:!0,type:"submit",disabled:a||t,icon:u,className:Xa.a.saveButton},J.a.t("Save")),o.a.createElement(ca,{shouldConfirm:!a},J.a.t("Cancel"))))},{func:Qa,bool:$a,object:et,array:at}=i.a;Ka.defaultProps={submitError:[]};var tt=Ka;const{Form:rt}=s.z,{func:nt}=i.a;var lt=({setIsPristine:e})=>{const[a]=ua();return o.a.createElement(rt,{onSubmit:a,component:tt,setIsPristine:e,destroyOnUnregister:!0})},ot=t(215),st=t.n(ot);const{useForm:ct}=s.z,it=({id:e,refetchJobs:a,handleSubmit:t,pristine:r,submitting:n,submitError:c,hasSubmitErrors:i,values:d,setIsPristine:m})=>{const{subscribe:u}=ct();Object(l.useEffect)(()=>u(({pristine:e})=>m(e),{pristine:!0}));const E=d[Ya],p=n?o.a.createElement(s.g,{small:!0}):null;return o.a.createElement("form",{onSubmit:t},o.a.createElement(s.a,{maxWidth:"600px"},o.a.createElement(va,null)),o.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},o.a.createElement(xa,null)),E&&o.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},o.a.createElement(za,{jobType:E})),E&&o.a.createElement(s.a,{marginTop:"32px",maxWidth:"400px"},o.a.createElement(ka,{jobType:E})),i&&o.a.createElement(s.a,{marginTop:"32px",maxWidth:"600px"},o.a.createElement(_a,{submitError:c})),o.a.createElement("div",{className:st.a.formButtonContainer},o.a.createElement(s.b,{primary:!0,type:"submit",disabled:r||n,icon:p,className:st.a.saveButton},J.a.t("Save")),o.a.createElement(ca,{shouldConfirm:!r},J.a.t("Cancel")),o.a.createElement("span",{className:st.a.deleteButton},o.a.createElement(na,{id:e,onSuccess:()=>{H.push("/"),a()}}))))},{func:dt,bool:mt,object:ut,array:Et,string:pt}=i.a;it.defaultProps={submitError:[]};var bt=it;const{Form:ht}=s.z,gt=["cronExpression","delay","jobParameters","jobType","name","schedulingType"],{func:_t}=i.a;var ft=({setIsPristine:e})=>{const{id:a}=Object(c.c)(),[t]=pa({id:a}),n=Object(l.useContext)(m),s=r.getRefetchJobs(n),i=r.getJobById(n,a),d=gt.reduce((e,a)=>(e[a]=i[a],e),{});return o.a.createElement(ht,{onSubmit:t,component:bt,setIsPristine:e,initialValues:d,id:a,refetchJobs:s,destroyOnUnregister:!0})},Tt=t(222),vt=t.n(Tt);const{string:jt}=i.a;var yt=({created:e,lastExecutedStatus:a,lastExecuted:t})=>{const r=Date.now(),n=Ee()(e).from(r),l=F[a],s=t?Ee()(t).from(r):"";return o.a.createElement("div",{className:vt.a.wrapper},o.a.createElement("h4",{className:vt.a.title},J.a.t("Job details")),o.a.createElement("div",{className:vt.a.details},o.a.createElement("div",null,J.a.t("Created {{ createdFromNow }}.",{createdFromNow:n})),s&&o.a.createElement("div",null,J.a.t("Last run {{ lastRunFromNow }}.",{lastRunFromNow:s})),l&&o.a.createElement("div",null,J.a.t("Last run status: {{ translatedStatus }}.",{translatedStatus:l,nsSeparator:">"}))))},xt=t(223),Nt=t.n(xt);const{bool:Ct,func:St,string:Ot}=i.a;var At=({isPristine:e,setIsPristine:a,name:t,created:r,lastExecutedStatus:n,lastExecuted:l})=>o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:Nt.a.pageHeader},o.a.createElement(ca,{shouldConfirm:!e,className:Nt.a.pageHeaderButton,small:!0},J.a.t("Back to all jobs")),o.a.createElement("h2",{className:Nt.a.pageHeaderTitle},J.a.t("Job: {{ name }}",{name:t,nsSeparator:">"}))),o.a.createElement(s.d,{className:Nt.a.card},o.a.createElement("header",{className:Nt.a.cardHeader},o.a.createElement("h3",{className:Nt.a.cardHeaderTitle},J.a.t("Configuration")),o.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Nt.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:Nt.a.cardHeaderInfo},o.a.createElement(s.l,null)),J.a.t("About job configuration"))),o.a.createElement("div",{className:Nt.a.jobDetails},o.a.createElement(yt,{created:r,lastExecutedStatus:n,lastExecuted:l})),o.a.createElement(ft,{setIsPristine:a})));var Jt=()=>{const e=Object(l.useContext)(m),[a,t]=Object(l.useState)(!0),{id:n}=Object(c.c)(),s=r.getJobById(e,n);return o.a.createElement(At,{isPristine:a,setIsPristine:t,name:s.name,created:s.created,lastExecutedStatus:s.lastExecutedStatus,lastExecuted:s.lastExecuted})},It=t(224),Ht=t.n(It);var Rt=()=>{const e=Object(l.useContext)(m),{id:a}=Object(c.c)(),{name:t,created:n,lastExecutedStatus:i,lastExecuted:d,jobType:u,cronExpression:E}=r.getJobById(e,a);return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:Ht.a.pageHeader},o.a.createElement(ca,{className:Ht.a.pageHeaderButton,small:!0},J.a.t("Back to all jobs")),o.a.createElement("h2",{className:Ht.a.pageHeaderTitle},J.a.t("System job: {{ name }}",{name:t,nsSeparator:">"}))),o.a.createElement(s.d,{className:Ht.a.card},o.a.createElement("header",{className:Ht.a.cardHeader},o.a.createElement("h3",{className:Ht.a.cardHeaderTitle},J.a.t("Configuration")),o.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Ht.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:Ht.a.cardHeaderInfo},o.a.createElement(s.l,null)),J.a.t("About job configuration"))),o.a.createElement("div",{className:Ht.a.jobDetails},o.a.createElement(yt,{created:n,lastExecutedStatus:i,lastExecuted:d})),o.a.createElement(s.a,{maxWidth:"600px"},o.a.createElement(s.n,{label:J.a.t("Name"),disabled:!0,value:t})),o.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},o.a.createElement(s.A,{label:J.a.t("Job type"),disabled:!0,selected:u},o.a.createElement(s.C,{value:u,label:D[u]}))),o.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},o.a.createElement(s.n,{label:J.a.t("CRON Expression"),disabled:!0,value:E,helpText:Je(E)})),o.a.createElement(s.a,{marginTop:"24px"},o.a.createElement(ca,null,J.a.t("Back to all jobs")))))},Dt=t(225),Ft=t.n(Dt);const{bool:kt,func:Lt}=i.a;var Pt=({isPristine:e,setIsPristine:a})=>o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:Ft.a.pageHeader},o.a.createElement(ca,{shouldConfirm:!e,className:Ft.a.pageHeaderButton,small:!0},J.a.t("Back to all jobs")),o.a.createElement("h2",{className:Ft.a.pageHeaderTitle},J.a.t("New Job"))),o.a.createElement(s.d,{className:Ft.a.card},o.a.createElement("header",{className:Ft.a.cardHeader},o.a.createElement("h3",{className:Ft.a.cardHeaderTitle},J.a.t("Configuration")),o.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Ft.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:Ft.a.cardHeaderInfo},o.a.createElement(s.l,null)),J.a.t("About job configuration"))),o.a.createElement(lt,{setIsPristine:a})));var wt=()=>{const[e,a]=Object(l.useState)(!0);return o.a.createElement(Pt,{isPristine:e,setIsPristine:a})};var Bt=()=>o.a.createElement(c.b,{history:H},o.a.createElement(c.a,{exact:!0,path:"/",component:Ke}),o.a.createElement(c.a,{path:"/edit/:id",component:Jt}),o.a.createElement(c.a,{path:"/view/:id",component:Rt}),o.a.createElement(c.a,{path:"/add",component:wt}));var Mt=t(226),Gt=t.n(Mt);const Vt={me:{resource:"me"}},{node:Ut}=i.a;var Wt=({children:e})=>{const{loading:a,error:t,data:r}=Object(d.e)(Vt);if(a)return o.a.createElement(s.p,null,o.a.createElement(s.e,null,o.a.createElement(s.g,null)));if(t)throw t;return(e=>{const{authorities:a}=e;return!!a&&(a.includes("ALL")||a.includes("F_SCHEDULING_ADMIN"))})(r.me)?o.a.createElement(o.a.Fragment,null,e):o.a.createElement("div",{className:Gt.a.noticeBoxWrapper},o.a.createElement(s.x,{error:!0,title:J.a.t("Not authorized")},J.a.t("You don't have access to the Job Scheduler. Contact a system administrator to request access.")))},zt=t(227),Yt=t.n(zt);const{node:qt}=i.a;var Xt=({children:e})=>o.a.createElement("div",{className:Yt.a.wrapper},e);t(228);var Zt=()=>o.a.createElement(o.a.Fragment,null,o.a.createElement(s.h,{spacers:!0,colors:!0}),o.a.createElement(Xt,null,o.a.createElement(Wt,null,o.a.createElement(h,null,o.a.createElement(Bt,null)))));t.d(a,"default",(function(){return Zt}))}}]);
//# sourceMappingURL=app.30274fd5.chunk.js.map