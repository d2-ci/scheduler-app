(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[135],{211:function(e,a,t){e.exports={header:"JobList_header__23tFt",headerTitle:"JobList_headerTitle__21D__",headerLink:"JobList_headerLink__2zepi",headerLinkIcon:"JobList_headerLinkIcon__XdfBB",controlContainer:"JobList_controlContainer__3Yzj_",controlRight:"JobList_controlRight__38lfB"}},212:function(e,a,t){e.exports={list:"FormErrorBox_list__3BejY"}},213:function(e,a,t){e.exports={headerTitle:"ParameterFields_headerTitle__IBF76"}},214:function(e,a,t){e.exports={formButtonContainer:"JobAddForm_formButtonContainer__1MLSp",saveButton:"JobAddForm_saveButton__RfxZ9"}},215:function(e,a,t){e.exports={formButtonContainer:"JobEditForm_formButtonContainer__2b6Fi",deleteButton:"JobEditForm_deleteButton__VQxBE",saveButton:"JobEditForm_saveButton__278Ab"}},222:function(e,a,t){e.exports={wrapper:"JobDetails_wrapper__1-YkO",title:"JobDetails_title__1Cht7",details:"JobDetails_details__2HITJ"}},223:function(e,a,t){e.exports={pageHeader:"JobEdit_pageHeader__3Fywp",pageHeaderButton:"JobEdit_pageHeaderButton__29yjJ",pageHeaderTitle:"JobEdit_pageHeaderTitle__jZrIG",card:"JobEdit_card__2QqEg",cardHeader:"JobEdit_cardHeader__Mv_cj",cardHeaderTitle:"JobEdit_cardHeaderTitle__29Y64",cardHeaderInfo:"JobEdit_cardHeaderInfo__3VWZt",cardHeaderLink:"JobEdit_cardHeaderLink__2frj7",jobDetails:"JobEdit_jobDetails__194v-"}},224:function(e,a,t){e.exports={pageHeader:"JobView_pageHeader__3d3IR",pageHeaderButton:"JobView_pageHeaderButton__2VF9Z",pageHeaderTitle:"JobView_pageHeaderTitle__3wHyg",card:"JobView_card__3LlD0",cardHeader:"JobView_cardHeader__3v0pX",cardHeaderTitle:"JobView_cardHeaderTitle__tPEnV",cardHeaderInfo:"JobView_cardHeaderInfo__j1GsD",cardHeaderLink:"JobView_cardHeaderLink__86M36",jobDetails:"JobView_jobDetails__3cu4z"}},225:function(e,a,t){e.exports={pageHeader:"JobAdd_pageHeader__2NZzc",pageHeaderButton:"JobAdd_pageHeaderButton__Xg_R9",pageHeaderTitle:"JobAdd_pageHeaderTitle__1RMl0",card:"JobAdd_card__1HH6H",cardHeader:"JobAdd_cardHeader__1D3sS",cardHeaderTitle:"JobAdd_cardHeaderTitle__2TG9a",cardHeaderInfo:"JobAdd_cardHeaderInfo__vq_Y1",cardHeaderLink:"JobAdd_cardHeaderLink__2CzPt"}},226:function(e,a,t){e.exports={noticeBoxWrapper:"AuthWall_noticeBoxWrapper__1ums5"}},227:function(e,a,t){e.exports={wrapper:"PageWrapper_wrapper__t-CJy"}},228:function(e,a,t){},233:function(e,a,t){"use strict";t.r(a);var r={};t.r(r),t.d(r,"useAllJobs",(function(){return h})),t.d(r,"useAllParameterOptions",(function(){return g})),t.d(r,"useAllJobTypes",(function(){return _})),t.d(r,"useRefetchJobs",(function(){return f})),t.d(r,"useJobFilter",(function(){return v})),t.d(r,"useShowSystemJobs",(function(){return T})),t.d(r,"useJobListJobs",(function(){return y})),t.d(r,"useJob",(function(){return j})),t.d(r,"useJobType",(function(){return N})),t.d(r,"useJobTypeParameters",(function(){return x})),t.d(r,"useParameterOptions",(function(){return C}));var n=t(1),l=t.n(n),s=t(188),o=t(216),c=t(189),i=t(13);var d=Object(n.createContext)({jobs:{},jobTypes:{},parameterOptions:{},refetchJobs:()=>{throw new Error("Store context needs a valid provider")}});const m={jobs:{resource:"jobConfigurations",params:{fields:"*",paging:!1}}},u={jobTypes:{resource:"jobConfigurations/jobTypes",params:{fields:"*",paging:!1}}},E={skipTableTypes:{resource:"analytics/tableTypes"},validationRuleGroups:{resource:"validationRuleGroups",params:{paging:!1}},pushAnalysis:{resource:"pushAnalysis",params:{paging:!1}},predictors:{resource:"predictors",params:{paging:!1}},predictorGroups:{resource:"predictorGroups",params:{paging:!1}}},{node:p}=c.a;var b=({children:e})=>{const a=Object(n.useState)(""),t=Object(n.useState)(!1),r=Object(i.e)(m),o=Object(i.e)(u),c=Object(i.e)(E);if(r.loading||o.loading||c.loading)return l.a.createElement(s.p,null,l.a.createElement(s.e,null,l.a.createElement(s.g,null)));const p=r.error||o.error||c.error;if(p)throw p;const{jobConfigurations:b}=r.data.jobs,{jobTypes:h}=o.data.jobTypes,{skipTableTypes:g,validationRuleGroups:{validationRuleGroups:_},pushAnalysis:{pushAnalysis:f},predictors:{predictors:v},predictorGroups:{predictorGroups:T}}=c.data,y={skipTableTypes:g,validationRuleGroups:_,pushAnalysis:f,predictors:v,predictorGroups:T};return l.a.createElement(d.Provider,{value:{jobs:b,jobTypes:h,parameterOptions:y,refetchJobs:r.refetch,jobFilter:a,showSystemJobs:t}},e)};const h=()=>Object(n.useContext)(d).jobs,g=()=>Object(n.useContext)(d).parameterOptions,_=()=>Object(n.useContext)(d).jobTypes,f=()=>Object(n.useContext)(d).refetchJobs,v=()=>Object(n.useContext)(d).jobFilter,T=()=>Object(n.useContext)(d).showSystemJobs,y=()=>{const[e]=v(),[a]=T();return h().filter(a=>a.name.toLowerCase().includes(e.toLowerCase())).filter(e=>!!a||e.configurable)},j=e=>h().find(a=>a.id===e),N=e=>_().find(a=>a.jobType===e),x=e=>{const a=N(e);return"jobParameters"in a?a.jobParameters:[]},C=e=>g()[e];var S=t(8),O=t.n(S),A=t(201);var J=Object(A.a)();var H={DATA_VALUE:O.a.t("Data value"),COMPLETENESS:O.a.t("Completeness"),COMPLETENESS_TARGET:O.a.t("Completeness target"),ORG_UNIT_TARGET:O.a.t("Org unit target"),EVENT:O.a.t("Event"),ENROLLMENT:O.a.t("Enrollment"),VALIDATION_RESULT:O.a.t("Validation result")};var I={ANALYTICS_TABLE:O.a.t("Analytics table"),CONTINUOUS_ANALYTICS_TABLE:O.a.t("Continuous analytics table"),CREDENTIALS_EXPIRY_ALERT:O.a.t("Credentials expiry alert"),DATA_INTEGRITY:O.a.t("Data integrity"),DATA_SET_NOTIFICATION:O.a.t("Dataset notification"),DATA_STATISTICS:O.a.t("Data statistics"),DATA_SYNC:O.a.t("Data synchronization"),EVENT_PROGRAMS_DATA_SYNC:O.a.t("Event programs data sync"),FILE_RESOURCE_CLEANUP:O.a.t("File resource clean up"),META_DATA_SYNC:O.a.t("Metadata synchronization"),MONITORING:O.a.t("Monitoring"),PREDICTOR:O.a.t("Predictor"),PROGRAM_NOTIFICATIONS:O.a.t("Program notifications"),PUSH_ANALYSIS:O.a.t("Push analysis"),REMOVE_EXPIRED_RESERVED_VALUES:O.a.t("Remove expired reserved values"),RESOURCE_TABLE:O.a.t("Resource table"),SEND_SCHEDULED_MESSAGE:O.a.t("Send scheduled message"),TRACKER_PROGRAMS_DATA_SYNC:O.a.t("Tracker programs data sync"),VALIDATION_RESULTS_NOTIFICATION:O.a.t("Validation results notification"),DISABLE_INACTIVE_USERS:O.a.t("Disable inactive users")};var R={COMPLETED:O.a.t("Completed"),DISABLED:O.a.t("Disabled"),DONE:O.a.t("Done"),FAILED:O.a.t("Failed"),NOT_STARTED:O.a.t("Not started"),RUNNING:O.a.t("Running"),SCHEDULED:O.a.t("Scheduled"),STOPPED:O.a.t("Stopped")};const D={resource:"jobConfigurations",id:({id:e})=>e,type:"update",partial:!0,data:({enabled:e})=>({enabled:e})},{bool:F,string:k}=c.a;var L=({id:e,checked:a,disabled:t})=>{const[n,{loading:o}]=Object(i.d)(D),c=r.useRefetchJobs(),d=!a;return l.a.createElement(s.D,{name:"toggle-job-".concat(e),disabled:t||o,checked:a,onChange:()=>{n({id:e,enabled:d}).then(()=>c())}})};const{string:P}=c.a;var w=({id:e})=>l.a.createElement(s.q,{dense:!0,onClick:()=>J.push("/edit/".concat(e)),label:O.a.t("Edit")});const{string:B}=c.a;var M=({id:e})=>l.a.createElement(s.q,{dense:!0,onClick:()=>J.push("/view/".concat(e)),label:O.a.t("View")});const G=[{label:O.a.t("Every hour"),value:"0 0 * ? * *"},{label:O.a.t("Every day at midnight"),value:"0 0 1 ? * *"},{label:O.a.t("Every day at 3 am"),value:"0 0 3 ? * *"},{label:O.a.t("Every day at noon"),value:"0 0 12 ? * MON-FRI"},{label:O.a.t("Every week"),value:"0 0 3 ? * MON"}],{func:V}=c.a;var U=({setCron:e,hideModal:a})=>{const[t,r]=Object(n.useState)("");return l.a.createElement(s.r,{open:!0,small:!0,onClose:a},l.a.createElement(s.u,null,O.a.t("Choose a preset time/interval")),l.a.createElement(s.t,null,G.map(e=>l.a.createElement(s.y,Object.assign({},e,{checked:t===e.value,key:e.value,onChange:({value:e})=>r(e)})))),l.a.createElement(s.s,null,l.a.createElement(s.c,{end:!0},l.a.createElement(s.b,{secondary:!0,onClick:a,name:"hide-modal"},O.a.t("Cancel")),l.a.createElement(s.b,{primary:!0,name:"insert-preset",disabled:!t,onClick:()=>{a(),e(t)}},O.a.t("Insert preset")))))};const W={resource:"jobConfigurations",id:({id:e})=>e,type:"delete"},{func:z,string:Y}=c.a;var q=({id:e,hideModal:a,onSuccess:t})=>{const[r]=Object(i.d)(W);return l.a.createElement(s.r,{open:!0,small:!0,onClose:a},l.a.createElement(s.t,null,O.a.t("Are you sure you want to delete this job?")),l.a.createElement(s.s,null,l.a.createElement(s.c,{end:!0},l.a.createElement(s.b,{name:"hide-modal",secondary:!0,onClick:a},O.a.t("Cancel")),l.a.createElement(s.b,{name:"delete-job-".concat(e),destructive:!0,onClick:()=>{r({id:e}).then(()=>{a(),t()})}},O.a.t("Delete")))))};const{func:X}=c.a;var Z=({hideModal:e})=>l.a.createElement(s.r,{open:!0,small:!0,onClose:e},l.a.createElement(s.t,null,O.a.t("Are you sure you want to discard this form?")),l.a.createElement(s.s,null,l.a.createElement(s.c,{end:!0},l.a.createElement(s.b,{name:"cancel-discard-form",secondary:!0,onClick:e},O.a.t("Cancel")),l.a.createElement(s.b,{name:"discard-form",destructive:!0,onClick:()=>{e(),J.push("/")}},O.a.t("Discard")))));const{func:K,string:Q}=c.a;var $=({id:e,hideModal:a})=>{const t=Object(i.c)(),n={jobs:{resource:"jobConfigurations/".concat(e,"/execute")}},o=r.useRefetchJobs();return l.a.createElement(s.r,{open:!0,small:!0,onClose:a},l.a.createElement(s.t,null,O.a.t("Are you sure you want to run this job?")),l.a.createElement(s.s,null,l.a.createElement(s.c,{end:!0},l.a.createElement(s.b,{name:"hide-modal",secondary:!0,onClick:a},O.a.t("Cancel")),l.a.createElement(s.b,{name:"run-job-".concat(e),primary:!0,onClick:()=>{t.query(n).then(()=>{a(),o()})}},O.a.t("Run")))))};const{string:ee}=c.a;var ae=({id:e})=>{const{enabled:a}=r.useJob(e),[t,o]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.q,{dense:!0,onClick:()=>{o(!0)},disabled:!a,label:O.a.t("Run manually")}),t&&l.a.createElement($,{id:e,hideModal:()=>o(!1)}))};const{string:te}=c.a;var re=({id:e})=>{const[a,t]=Object(n.useState)(!1),o=r.useRefetchJobs();return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.q,{dense:!0,destructive:!0,onClick:()=>{t(!0)},label:O.a.t("Delete")}),a&&l.a.createElement(q,{id:e,hideModal:()=>t(!1),onSuccess:o}))};const ne=({id:e,configurable:a})=>l.a.createElement(s.i,{small:!0,component:l.a.createElement(s.k,null,a?l.a.createElement(w,{id:e}):l.a.createElement(M,{id:e}),a&&l.a.createElement(ae,{id:e}),a&&l.a.createElement(re,{id:e}))},O.a.t("Actions"));ne.defaultProps={configurable:!1};const{string:le,bool:se}=c.a;var oe=ne;const{string:ce}=c.a;var ie=({status:e})=>{switch(e){case"STOPPED":case"DISABLED":return l.a.createElement(s.M,null,R[e]);case"RUNNING":case"NOT_STARTED":case"SCHEDULED":return l.a.createElement(s.M,{neutral:!0},R[e]);case"FAILED":return l.a.createElement(s.M,{negative:!0},R[e]);case"DONE":return l.a.createElement(s.M,{positive:!0},R[e]);default:return null}},de=t(27),me=t.n(de);const ue=({nextExecutionTime:e,enabled:a})=>{if(!a||!e)return"-";const t=me()(Date.now()),r=me.a.utc(e);return r.isSameOrBefore(t,"minute")?O.a.t("Not scheduled"):t.to(r)},{bool:Ee,string:pe}=c.a;ue.propTypes={enabled:Ee.isRequired,nextExecutionTime:pe};var be=ue,he=t(209),ge=t.n(he);const _e=["MON","TUE","WED","THU","FRI","SAT","SUN"],fe=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],ve=(e,a,t)=>e>=a&&e<=t,Te=e=>"*"===e,ye=e=>"?"===e,je=(e,a,t)=>Te(e)||ve(e,a,t)||((e,a,t)=>{const r=e.split("-");return!(!r||2!==r.length)&&(ve(r[0],a,t)&&ve(r[1],a,t)&&r[0]<=r[1])})(e,a,t)||((e,a,t)=>{const r=e.split("/");return!(!r||2!==r.length)&&((Te(r[0])||ve(r[0],a,t))&&ve(r[1],a,t))})(e,a,t),Ne=e=>je(e,1,12)||(e=>{const a=e.split("-"),[t,r]=a.map(e=>fe.indexOf(e));return-1!==t&&void 0===r||-1!==t&&-1!==r&&t<=r})(e),xe=e=>je(e,1,7)||(e=>{const a=e.split("-"),[t,r]=a.map(e=>_e.indexOf(e));return-1!==t&&void 0===r||-1!==t&&-1!==r&&t<=r})(e)||ye(e);var Ce=e=>{if(!e)return!1;const a=e.trim().split(" ");return!!(e=>e&&6===e.length)(a)&&(t=a[0],je(t,0,59)&&(e=>je(e,0,59))(a[1])&&(e=>je(e,0,23))(a[2])&&(e=>je(e,0,31)||ye(e))(a[3])&&Ne(a[4])&&xe(a[5]));var t};var Se=e=>"string"===typeof e&&e.length>0?Ce(e)?void 0:O.a.t("Please enter a valid CRON expression"):O.a.t("A CRON expression is required");var Oe=e=>{const a=O.a.language||"en";return e&&Ce(e)?ge.a.toString(e,{locale:a}):""};const Ae=({cronExpression:e,schedulingType:a,delay:t})=>{switch(a){case"CRON":return Oe(e);case"FIXED_DELAY":return O.a.t("{{ delay }} seconds after last run",{delay:t});default:return"-"}},{string:Je,number:He}=c.a;Ae.propTypes={schedulingType:Je.isRequired,cronExpression:Je,delay:He};var Ie=Ae;const{shape:Re,string:De,bool:Fe,number:ke}=c.a;var Le=({job:{id:e,displayName:a,jobType:t,cronExpression:r,delay:n,jobStatus:o,nextExecutionTime:c,schedulingType:i,enabled:d,configurable:m}})=>l.a.createElement(s.K,null,l.a.createElement(s.H,null,a),l.a.createElement(s.H,null,I[t]),l.a.createElement(s.H,null,l.a.createElement(Ie,{cronExpression:r,delay:n,schedulingType:i})),l.a.createElement(s.H,null,l.a.createElement(be,{nextExecutionTime:c,enabled:d})),l.a.createElement(s.H,null,l.a.createElement(ie,{status:o})),l.a.createElement(s.H,null,l.a.createElement(L,{id:e,checked:d,disabled:!m})),l.a.createElement(s.H,null,l.a.createElement(oe,{id:e,configurable:m})));const{object:Pe,arrayOf:we}=c.a;var Be=({jobs:e})=>l.a.createElement(s.F,null,l.a.createElement(s.J,null,l.a.createElement(s.L,null,l.a.createElement(s.I,null,O.a.t("Job name")),l.a.createElement(s.I,null,O.a.t("Type")),l.a.createElement(s.I,null,O.a.t("Schedule")),l.a.createElement(s.I,null,O.a.t("Next run")),l.a.createElement(s.I,null,O.a.t("Status")),l.a.createElement(s.I,null,O.a.t("On/off")),l.a.createElement(s.I,null))),l.a.createElement(s.G,null,0===e.length?l.a.createElement(s.K,null,l.a.createElement(s.H,null,O.a.t("No jobs to display"))):e.map(e=>l.a.createElement(Le,{key:e.id,job:e})))),Me=t(211),Ge=t.n(Me);const{bool:Ve,object:Ue,string:We,arrayOf:ze,func:Ye}=c.a;var qe=({jobs:e,showSystemJobs:a,setShowSystemJobs:t,jobFilter:r,setJobFilter:n})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Ge.a.header},l.a.createElement("h1",{className:Ge.a.headerTitle},O.a.t("Scheduled jobs")),l.a.createElement("a",{href:"https://docs.dhis2.org/en/use/user-guides/dhis-core-version-236/maintaining-the-system/scheduling.html",className:Ge.a.headerLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Ge.a.headerLinkIcon},l.a.createElement(s.l,null)),O.a.t("About job configuration"))),l.a.createElement(s.d,null,l.a.createElement("div",{className:Ge.a.controlContainer},l.a.createElement(s.m,{dataTest:"job-filter-input",placeholder:O.a.t("Filter jobs"),onChange:({value:e})=>{n(e)},value:r}),l.a.createElement("div",{className:Ge.a.controlRight},l.a.createElement(s.f,{dataTest:"job-toggle-checkbox",checked:a,label:O.a.t("Include system jobs in list"),onChange:({checked:e})=>{t(e)}}),l.a.createElement(s.b,{dataTest:"new-job-button",onClick:()=>{J.push("/add")}},O.a.t("New job")))),l.a.createElement(Be,{jobs:e})));var Xe=()=>{const[e,a]=r.useJobFilter(),[t,n]=r.useShowSystemJobs(),s=r.useJobListJobs();return l.a.createElement(qe,{jobs:s,showSystemJobs:t,setShowSystemJobs:n,jobFilter:e,setJobFilter:a})};const Ze=({setCron:e,small:a})=>{const[t,r]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{onClick:()=>r(!0),small:a},O.a.t("Choose from preset times")),t&&l.a.createElement(U,{hideModal:()=>r(!1),setCron:e}))};Ze.defaultProps={small:!1};const{func:Ke,bool:Qe}=c.a;var $e=Ze;const{string:ea,func:aa}=c.a;var ta=({id:e,onSuccess:a})=>{const[t,r]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{destructive:!0,onClick:()=>r(!0)},O.a.t("Delete job")),t&&l.a.createElement(q,{id:e,hideModal:()=>r(!1),onSuccess:a}))};const ra=({shouldConfirm:e,children:a,small:t,className:r})=>{const[o,c]=Object(n.useState)(!1),i=e?()=>c(!0):()=>J.push("/");return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{onClick:i,small:t,className:r},a),o&&l.a.createElement(Z,{hideModal:()=>c(!1)}))};ra.defaultProps={className:"",shouldConfirm:!1,small:!1};const{string:na,bool:la}=c.a;var sa=ra;const{FORM_ERROR:oa}=s.j;var ca=e=>{const{details:{response:a}}=e,t={},r=[];return a.errorReports&&a.errorReports.length&&a.errorReports.forEach(e=>{e.errorProperty?t[e.errorProperty]=e.message:r.push(e.message)}),r.length>0&&(t[oa]=r),t};const ia={resource:"jobConfigurations",type:"create",data:({job:e})=>e};var da=()=>{const{refetchJobs:e}=Object(n.useContext)(d),a=Object(i.c)();return[t=>a.mutate(ia,{variables:{job:t}}).then(()=>{J.push("/"),e()}).catch(e=>{if("access"===e.type)return ca(e);throw e})]};const ma={resource:"jobConfigurations",type:"update",id:({id:e})=>e,data:({job:e})=>e};var ua=({id:e})=>{const{refetchJobs:a}=Object(n.useContext)(d),t=Object(i.c)();return[r=>t.mutate(ma,{variables:{job:r,id:e}}).then(()=>{J.push("/"),a()}).catch(e=>{if("access"===e.type)return ca(e);throw e})]},Ea=t(212),pa=t.n(Ea);const{array:ba}=c.a;var ha=({submitError:e})=>e.length>0?l.a.createElement(s.x,{error:!0,title:O.a.t("Something went wrong whilst creating your job")},l.a.createElement("ul",{className:pa.a.list},e.map(e=>l.a.createElement("li",{key:e},e)))):null;const{Field:ga}=s.z,_a=Object(s.N)(s.R,s.P);var fa=()=>l.a.createElement(ga,{name:"name",component:s.o,validate:_a,label:O.a.t("Name"),type:"text",required:!0});const{Field:va}=s.z,Ta=Object(s.N)(s.R,s.P);var ya=()=>{const e=r.useAllJobTypes().map(({jobType:e})=>({value:e,label:I[e]}));return l.a.createElement(va,{name:"jobType",validate:Ta,component:s.B,options:e,label:O.a.t("Job type"),required:!0})};const ja=e=>"number"===typeof e?e.toString():e,{Field:Na}=s.z,{string:xa}=c.a;var Ca=({label:e,name:a,parameterName:t})=>{const n=r.useParameterOptions(t);if(0===n.length)return l.a.createElement(s.v,{disabled:!0,helpText:O.a.t("No options available"),label:e});const o=n.map(e=>({value:e,label:H[e]||e}));return l.a.createElement(Na,{name:a,component:s.w,options:o,label:e})};const{Field:Sa}=s.z,{string:Oa}=c.a;var Aa=({label:e,name:a,parameterName:t})=>{const n=r.useParameterOptions(t);if(0===n.length)return l.a.createElement(s.v,{disabled:!0,helpText:O.a.t("No options available"),label:e});const o=n.map(({id:e,displayName:a})=>({value:e,label:a}));return l.a.createElement(Sa,{name:a,component:s.w,options:o,label:e})},Ja=t(213),Ha=t.n(Ja);const{Field:Ia}=s.z,{string:Ra}=c.a;var Da=({jobType:e})=>{const a=r.useJobTypeParameters(e);if(0===a.length)return null;const t=a.map(({fieldName:e,name:a,klass:t})=>{const r={label:e,name:"".concat("jobParameters",".").concat(a)};let n=null;if("skipTableTypes"===a)return l.a.createElement(s.a,{marginTop:"16px",key:a},l.a.createElement(Ca,Object.assign({},r,{parameterName:a})));switch(t){case"java.lang.String":n=l.a.createElement(Ia,Object.assign({},r,{component:s.o,type:"text"}));break;case"java.lang.Boolean":n=l.a.createElement(Ia,Object.assign({},r,{component:s.E,type:"checkbox"}));break;case"java.lang.Integer":n=l.a.createElement(Ia,Object.assign({},r,{component:s.o,format:ja,type:"number"}));break;case"java.util.List":n=l.a.createElement(Aa,Object.assign({},r,{parameterName:a}))}return l.a.createElement(s.a,{marginTop:"16px",key:a},n)});return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h4",{className:Ha.a.headerTitle},O.a.t("Parameters"))),t)};const{Field:Fa,useFormState:ka,useForm:La}=s.z,Pa=Se;var wa=()=>{const e=La(),{values:a}=ka({subscription:{values:!0}}),t=a.cronExpression,r=Oe(t);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Fa,{component:s.o,name:"cronExpression",validate:Pa,label:O.a.t("CRON Expression"),type:"text",helpText:r,required:!0}),l.a.createElement(s.a,{marginTop:"8px"},l.a.createElement($e,{setCron:a=>e.change("cronExpression",a),small:!0})))};const{Field:Ba}=s.z,Ma=Object(s.N)(s.Q,s.P,Object(s.O)(1,86400));var Ga=()=>l.a.createElement(Ba,{component:s.o,name:"delay",validate:Ma,label:O.a.t("Delay"),type:"number",format:ja,helpText:O.a.t("Delay in seconds ({{ lowerbound }} - {{ upperbound }})",{lowerbound:1,upperbound:86400}),required:!0});const{string:Va}=c.a;var Ua=({jobType:e})=>{switch(r.useJobType(e).schedulingType){case"CRON":return l.a.createElement(wa,null);case"FIXED_DELAY":return l.a.createElement(Ga,null);default:return null}};const Wa="jobType";var za=t(214),Ya=t.n(za);const{useForm:qa}=s.z,Xa=({handleSubmit:e,pristine:a,submitting:t,submitError:r,hasSubmitErrors:o,values:c,setIsPristine:i})=>{const{subscribe:d}=qa();Object(n.useEffect)(()=>d(({pristine:e})=>i(e),{pristine:!0}));const m=c[Wa],u=t?l.a.createElement(s.g,{small:!0}):null;return l.a.createElement("form",{onSubmit:e},l.a.createElement(s.a,{maxWidth:"600px"},l.a.createElement(fa,null)),l.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(ya,null)),m&&l.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(Ua,{jobType:m})),m&&l.a.createElement(s.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(Da,{jobType:m})),o&&l.a.createElement(s.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(ha,{submitError:r})),l.a.createElement("div",{className:Ya.a.formButtonContainer},l.a.createElement(s.b,{primary:!0,type:"submit",disabled:a||t,icon:u,className:Ya.a.saveButton},O.a.t("Save")),l.a.createElement(sa,{shouldConfirm:!a},O.a.t("Cancel"))))},{func:Za,bool:Ka,object:Qa,array:$a}=c.a;Xa.defaultProps={submitError:[]};var et=Xa;const{Form:at}=s.z,{func:tt}=c.a;var rt=({setIsPristine:e})=>{const[a]=da();return l.a.createElement(at,{onSubmit:a,component:et,setIsPristine:e,destroyOnUnregister:!0})},nt=t(215),lt=t.n(nt);const{useForm:st}=s.z,ot=({id:e,refetchJobs:a,handleSubmit:t,pristine:r,submitting:o,submitError:c,hasSubmitErrors:i,values:d,setIsPristine:m})=>{const{subscribe:u}=st();Object(n.useEffect)(()=>u(({pristine:e})=>m(e),{pristine:!0}));const E=d[Wa],p=o?l.a.createElement(s.g,{small:!0}):null;return l.a.createElement("form",{onSubmit:t},l.a.createElement(s.a,{maxWidth:"600px"},l.a.createElement(fa,null)),l.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(ya,null)),E&&l.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(Ua,{jobType:E})),E&&l.a.createElement(s.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(Da,{jobType:E})),i&&l.a.createElement(s.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(ha,{submitError:c})),l.a.createElement("div",{className:lt.a.formButtonContainer},l.a.createElement(s.b,{primary:!0,type:"submit",disabled:r||o,icon:p,className:lt.a.saveButton},O.a.t("Save")),l.a.createElement(sa,{shouldConfirm:!r},O.a.t("Cancel")),l.a.createElement("span",{className:lt.a.deleteButton},l.a.createElement(ta,{id:e,onSuccess:()=>{J.push("/"),a()}}))))},{func:ct,bool:it,object:dt,array:mt,string:ut}=c.a;ot.defaultProps={submitError:[]};var Et=ot;const{Form:pt}=s.z,bt=["cronExpression","delay","jobParameters","jobType","name","schedulingType"],{func:ht}=c.a;var gt=({setIsPristine:e})=>{const{id:a}=Object(o.c)(),[t]=ua({id:a}),n=r.useRefetchJobs(),s=r.useJob(a),c=bt.reduce((e,a)=>(e[a]=s[a],e),{});return l.a.createElement(pt,{onSubmit:t,component:Et,setIsPristine:e,initialValues:c,id:a,refetchJobs:n,destroyOnUnregister:!0})},_t=t(222),ft=t.n(_t);const{string:vt}=c.a;var Tt=({created:e,lastExecutedStatus:a,lastExecuted:t})=>{const r=Date.now(),n=me()(e).from(r),s=R[a],o=t?me()(t).from(r):"";return l.a.createElement("div",{className:ft.a.wrapper},l.a.createElement("h4",{className:ft.a.title},O.a.t("Job details")),l.a.createElement("div",{className:ft.a.details},l.a.createElement("div",null,O.a.t("Created {{ createdFromNow }}.",{createdFromNow:n})),o&&l.a.createElement("div",null,O.a.t("Last run {{ lastRunFromNow }}.",{lastRunFromNow:o})),s&&l.a.createElement("div",null,O.a.t("Last run status: {{ translatedStatus }}.",{translatedStatus:s,nsSeparator:">"}))))},yt=t(223),jt=t.n(yt);const{bool:Nt,func:xt,string:Ct}=c.a;var St=({isPristine:e,setIsPristine:a,name:t,created:r,lastExecutedStatus:n,lastExecuted:o})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:jt.a.pageHeader},l.a.createElement(sa,{shouldConfirm:!e,className:jt.a.pageHeaderButton,small:!0},O.a.t("Back to all jobs")),l.a.createElement("h2",{className:jt.a.pageHeaderTitle},O.a.t("Job: {{ name }}",{name:t,nsSeparator:">"}))),l.a.createElement(s.d,{className:jt.a.card},l.a.createElement("header",{className:jt.a.cardHeader},l.a.createElement("h3",{className:jt.a.cardHeaderTitle},O.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/en/use/user-guides/dhis-core-version-236/maintaining-the-system/scheduling.html",className:jt.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:jt.a.cardHeaderInfo},l.a.createElement(s.l,null)),O.a.t("About job configuration"))),l.a.createElement("div",{className:jt.a.jobDetails},l.a.createElement(Tt,{created:r,lastExecutedStatus:n,lastExecuted:o})),l.a.createElement(gt,{setIsPristine:a})));var Ot=()=>{const[e,a]=Object(n.useState)(!0),{id:t}=Object(o.c)(),s=r.useJob(t);return l.a.createElement(St,{isPristine:e,setIsPristine:a,name:s.name,created:s.created,lastExecutedStatus:s.lastExecutedStatus,lastExecuted:s.lastExecuted})},At=t(224),Jt=t.n(At);var Ht=()=>{const{id:e}=Object(o.c)(),{name:a,created:t,lastExecutedStatus:n,lastExecuted:c,jobType:i,cronExpression:d}=r.useJob(e);return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Jt.a.pageHeader},l.a.createElement(sa,{className:Jt.a.pageHeaderButton,small:!0},O.a.t("Back to all jobs")),l.a.createElement("h2",{className:Jt.a.pageHeaderTitle},O.a.t("System job: {{ name }}",{name:a,nsSeparator:">"}))),l.a.createElement(s.d,{className:Jt.a.card},l.a.createElement("header",{className:Jt.a.cardHeader},l.a.createElement("h3",{className:Jt.a.cardHeaderTitle},O.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/en/use/user-guides/dhis-core-version-236/maintaining-the-system/scheduling.html",className:Jt.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Jt.a.cardHeaderInfo},l.a.createElement(s.l,null)),O.a.t("About job configuration"))),l.a.createElement("div",{className:Jt.a.jobDetails},l.a.createElement(Tt,{created:t,lastExecutedStatus:n,lastExecuted:c})),l.a.createElement(s.a,{maxWidth:"600px"},l.a.createElement(s.n,{label:O.a.t("Name"),disabled:!0,value:a})),l.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(s.A,{label:O.a.t("Job type"),disabled:!0,selected:i},l.a.createElement(s.C,{value:i,label:I[i]}))),l.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(s.n,{label:O.a.t("CRON Expression"),disabled:!0,value:d,helpText:Oe(d)})),l.a.createElement(s.a,{marginTop:"24px"},l.a.createElement(sa,null,O.a.t("Back to all jobs")))))},It=t(225),Rt=t.n(It);const{bool:Dt,func:Ft}=c.a;var kt=({isPristine:e,setIsPristine:a})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Rt.a.pageHeader},l.a.createElement(sa,{shouldConfirm:!e,className:Rt.a.pageHeaderButton,small:!0},O.a.t("Back to all jobs")),l.a.createElement("h2",{className:Rt.a.pageHeaderTitle},O.a.t("New Job"))),l.a.createElement(s.d,{className:Rt.a.card},l.a.createElement("header",{className:Rt.a.cardHeader},l.a.createElement("h3",{className:Rt.a.cardHeaderTitle},O.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/en/use/user-guides/dhis-core-version-236/maintaining-the-system/scheduling.html",className:Rt.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Rt.a.cardHeaderInfo},l.a.createElement(s.l,null)),O.a.t("About job configuration"))),l.a.createElement(rt,{setIsPristine:a})));var Lt=()=>{const[e,a]=Object(n.useState)(!0);return l.a.createElement(kt,{isPristine:e,setIsPristine:a})};var Pt=()=>l.a.createElement(o.b,{history:J},l.a.createElement(o.a,{exact:!0,path:"/",component:Xe}),l.a.createElement(o.a,{path:"/edit/:id",component:Ot}),l.a.createElement(o.a,{path:"/view/:id",component:Ht}),l.a.createElement(o.a,{path:"/add",component:Lt}));var wt=t(226),Bt=t.n(wt);const Mt={me:{resource:"me"}},{node:Gt}=c.a;var Vt=({children:e})=>{const{loading:a,error:t,data:r}=Object(i.e)(Mt);if(a)return l.a.createElement(s.p,null,l.a.createElement(s.e,null,l.a.createElement(s.g,null)));if(t)throw t;return(e=>{const{authorities:a}=e;return!!a&&(a.includes("ALL")||a.includes("F_SCHEDULING_ADMIN"))})(r.me)?l.a.createElement(l.a.Fragment,null,e):l.a.createElement("div",{className:Bt.a.noticeBoxWrapper},l.a.createElement(s.x,{error:!0,title:O.a.t("Not authorized")},O.a.t("You don't have access to the Job Scheduler. Contact a system administrator to request access.")))},Ut=t(227),Wt=t.n(Ut);const{node:zt}=c.a;var Yt=({children:e})=>l.a.createElement("div",{className:Wt.a.wrapper},e);t(228);var qt=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(s.h,{spacers:!0,colors:!0}),l.a.createElement(Yt,null,l.a.createElement(Vt,null,l.a.createElement(b,null,l.a.createElement(Pt,null)))));t.d(a,"default",(function(){return qt}))}}]);
//# sourceMappingURL=app.a96a278d.chunk.js.map