(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[135],{212:function(e,t,a){e.exports={header:"JobList_header__23tFt",headerTitle:"JobList_headerTitle__21D__",headerLink:"JobList_headerLink__2zepi",headerLinkIcon:"JobList_headerLinkIcon__XdfBB",controlContainer:"JobList_controlContainer__3Yzj_",controlRight:"JobList_controlRight__38lfB"}},213:function(e,t,a){e.exports={list:"FormErrorBox_list__3BejY"}},214:function(e,t,a){e.exports={headerTitle:"ParameterFields_headerTitle__IBF76"}},215:function(e,t,a){e.exports={formButtonContainer:"JobAddForm_formButtonContainer__1MLSp",saveButton:"JobAddForm_saveButton__RfxZ9"}},216:function(e,t,a){e.exports={formButtonContainer:"JobEditForm_formButtonContainer__2b6Fi",deleteButton:"JobEditForm_deleteButton__VQxBE",saveButton:"JobEditForm_saveButton__278Ab"}},223:function(e,t,a){e.exports={wrapper:"JobDetails_wrapper__1-YkO",title:"JobDetails_title__1Cht7",details:"JobDetails_details__2HITJ"}},224:function(e,t,a){e.exports={pageHeader:"JobEdit_pageHeader__3Fywp",pageHeaderButton:"JobEdit_pageHeaderButton__29yjJ",pageHeaderTitle:"JobEdit_pageHeaderTitle__jZrIG",card:"JobEdit_card__2QqEg",cardHeader:"JobEdit_cardHeader__Mv_cj",cardHeaderTitle:"JobEdit_cardHeaderTitle__29Y64",cardHeaderInfo:"JobEdit_cardHeaderInfo__3VWZt",cardHeaderLink:"JobEdit_cardHeaderLink__2frj7",jobDetails:"JobEdit_jobDetails__194v-"}},225:function(e,t,a){e.exports={pageHeader:"JobAdd_pageHeader__2NZzc",pageHeaderButton:"JobAdd_pageHeaderButton__Xg_R9",pageHeaderTitle:"JobAdd_pageHeaderTitle__1RMl0",card:"JobAdd_card__1HH6H",cardHeader:"JobAdd_cardHeader__1D3sS",cardHeaderTitle:"JobAdd_cardHeaderTitle__2TG9a",cardHeaderInfo:"JobAdd_cardHeaderInfo__vq_Y1",cardHeaderLink:"JobAdd_cardHeaderLink__2CzPt"}},226:function(e,t,a){e.exports={noticeBoxWrapper:"AuthWall_noticeBoxWrapper__1ums5"}},227:function(e,t,a){e.exports={wrapper:"PageWrapper_wrapper__t-CJy"}},228:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"getJobsStore",(function(){return h})),a.d(r,"getJobTypesStore",(function(){return g})),a.d(r,"getParameterOptionsStore",(function(){return _})),a.d(r,"getRefetchJobs",(function(){return f})),a.d(r,"getJobById",(function(){return y})),a.d(r,"getJobType",(function(){return v})),a.d(r,"getJobTypeParameters",(function(){return T})),a.d(r,"getParameterOptions",(function(){return j}));var n=a(1),l=a.n(n),o=a(189),s=a(217),c=a(190),i=a(13);var m=Object(n.createContext)({jobs:{},jobTypes:{},parameterOptions:{},refetchJobs:()=>{throw new Error("Store context needs a valid provider")}});const d={jobs:{resource:"jobConfigurations",params:{fields:"*",paging:!1}}},u={jobTypes:{resource:"jobConfigurations/jobTypes",params:{fields:"*",paging:!1}}},E={skipTableTypes:{resource:"analytics/tableTypes"},validationRuleGroups:{resource:"validationRuleGroups",params:{paging:!1}},pushAnalysis:{resource:"pushAnalysis",params:{paging:!1}},predictors:{resource:"predictors",params:{paging:!1}},predictorGroups:{resource:"predictorGroups",params:{paging:!1}}},{node:p}=c.a;var b=({children:e})=>{const t=Object(i.e)(d),a=Object(i.e)(u),r=Object(i.e)(E);if(t.loading||a.loading||r.loading)return l.a.createElement(o.o,null,l.a.createElement(o.e,null,l.a.createElement(o.g,null)));const n=t.error||a.error||r.error;if(n)throw n;const{jobConfigurations:s}=t.data.jobs,{jobTypes:c}=a.data.jobTypes,{skipTableTypes:p,validationRuleGroups:{validationRuleGroups:b},pushAnalysis:{pushAnalysis:h},predictors:{predictors:g},predictorGroups:{predictorGroups:_}}=r.data,f={skipTableTypes:p,validationRuleGroups:b,pushAnalysis:h,predictors:g,predictorGroups:_};return l.a.createElement(m.Provider,{value:{jobs:s,jobTypes:c,parameterOptions:f,refetchJobs:t.refetch}},e)};const h=e=>e.jobs,g=e=>e.jobTypes,_=e=>e.parameterOptions,f=e=>e.refetchJobs,y=(e,t)=>h(e).find(e=>e.id===t),v=(e,t)=>g(e).find(e=>e.jobType===t),T=(e,t)=>{const a=v(e,t);return"jobParameters"in a?a.jobParameters:[]},j=(e,t)=>_(e)[t];var C=a(8),N=a.n(C),O=a(202);var x=Object(O.a)();var S={DATA_VALUE:N.a.t("Data value"),COMPLETENESS:N.a.t("Completeness"),COMPLETENESS_TARGET:N.a.t("Completeness target"),ORG_UNIT_TARGET:N.a.t("Org unit target"),EVENT:N.a.t("Event"),ENROLLMENT:N.a.t("Enrollment"),VALIDATION_RESULT:N.a.t("Validation result")};var A={ANALYTICS_TABLE:N.a.t("Analytics table"),CONTINUOUS_ANALYTICS_TABLE:N.a.t("Continuous analytics table"),CREDENTIALS_EXPIRY_ALERT:N.a.t("Credentials expiry alert"),DATA_INTEGRITY:N.a.t("Data integrity"),DATA_SET_NOTIFICATION:N.a.t("Dataset notification"),DATA_STATISTICS:N.a.t("Data statistics"),DATA_SYNC:N.a.t("Data synchronization"),EVENT_PROGRAMS_DATA_SYNC:N.a.t("Event programs data sync"),FILE_RESOURCE_CLEANUP:N.a.t("File resource clean up"),META_DATA_SYNC:N.a.t("Metadata synchronization"),MONITORING:N.a.t("Monitoring"),PREDICTOR:N.a.t("Predictor"),PROGRAM_NOTIFICATIONS:N.a.t("Program notifications"),PUSH_ANALYSIS:N.a.t("Push analysis"),REMOVE_EXPIRED_RESERVED_VALUES:N.a.t("Remove expired reserved values"),RESOURCE_TABLE:N.a.t("Resource table"),SEND_SCHEDULED_MESSAGE:N.a.t("Send scheduled message"),TRACKER_PROGRAMS_DATA_SYNC:N.a.t("Tracker programs data sync"),VALIDATION_RESULTS_NOTIFICATION:N.a.t("Validation results notification")};var J={COMPLETED:N.a.t("Completed"),DISABLED:N.a.t("Disabled"),DONE:N.a.t("Done"),FAILED:N.a.t("Failed"),NOT_STARTED:N.a.t("Not started"),RUNNING:N.a.t("Running"),SCHEDULED:N.a.t("Scheduled"),STOPPED:N.a.t("Stopped")};const R={resource:"jobConfigurations",id:({id:e})=>e,type:"update",partial:!0,data:({enabled:e})=>({enabled:e})},{bool:I,string:F}=c.a;var D=({id:e,checked:t})=>{const[a,{loading:s}]=Object(i.d)(R),c=Object(n.useContext)(m),d=r.getRefetchJobs(c),u=!t;return l.a.createElement(o.A,{name:"toggle-job-".concat(e),disabled:s,checked:t,onChange:()=>{a({id:e,enabled:u}).then(()=>d())}})};const{string:k}=c.a;var L=({id:e})=>l.a.createElement(o.p,{dense:!0,onClick:()=>x.push("/edit/".concat(e)),label:N.a.t("Edit")});const P=[{label:N.a.t("Every hour"),value:"0 0 * ? * *"},{label:N.a.t("Every day at midnight"),value:"0 0 1 ? * *"},{label:N.a.t("Every day at 3 am"),value:"0 0 3 ? * *"},{label:N.a.t("Every day at noon"),value:"0 0 12 ? * MON-FRI"},{label:N.a.t("Every week"),value:"0 0 3 ? * MON"}],{func:H}=c.a;var w=({setCron:e,hideModal:t})=>{const[a,r]=Object(n.useState)("");return l.a.createElement(o.q,{open:!0,small:!0,onClose:t},l.a.createElement(o.t,null,N.a.t("Choose a preset time/interval")),l.a.createElement(o.s,null,P.map(e=>l.a.createElement(o.x,Object.assign({},e,{checked:a===e.value,key:e.value,onChange:({value:e})=>r(e)})))),l.a.createElement(o.r,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{secondary:!0,onClick:t,name:"hide-modal"},N.a.t("Cancel")),l.a.createElement(o.b,{primary:!0,name:"insert-preset",disabled:!a,onClick:()=>{t(),e(a)}},N.a.t("Insert preset")))))};const B={resource:"jobConfigurations",id:({id:e})=>e,type:"delete"},{func:M,string:G}=c.a;var U=({id:e,hideModal:t,onSuccess:a})=>{const[r]=Object(i.d)(B);return l.a.createElement(o.q,{open:!0,small:!0,onClose:t},l.a.createElement(o.s,null,N.a.t("Are you sure you want to delete this job?")),l.a.createElement(o.r,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"hide-modal",secondary:!0,onClick:t},N.a.t("Cancel")),l.a.createElement(o.b,{name:"delete-job-".concat(e),destructive:!0,onClick:()=>{r({id:e}).then(()=>{t(),a()})}},N.a.t("Delete")))))};const{func:Y}=c.a;var W=({hideModal:e})=>l.a.createElement(o.q,{open:!0,small:!0,onClose:e},l.a.createElement(o.s,null,N.a.t("Are you sure you want to discard this form?")),l.a.createElement(o.r,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"cancel-discard-form",secondary:!0,onClick:e},N.a.t("Cancel")),l.a.createElement(o.b,{name:"discard-form",destructive:!0,onClick:()=>{e(),x.push("/")}},N.a.t("Discard")))));const{func:q,string:V}=c.a;var z=({id:e,hideModal:t})=>{const a=Object(i.c)(),s={jobs:{resource:"jobConfigurations/".concat(e,"/execute")}},c=Object(n.useContext)(m),d=r.getRefetchJobs(c);return l.a.createElement(o.q,{open:!0,small:!0,onClose:t},l.a.createElement(o.s,null,N.a.t("Are you sure you want to run this job?")),l.a.createElement(o.r,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"hide-modal",secondary:!0,onClick:t},N.a.t("Cancel")),l.a.createElement(o.b,{name:"run-job-".concat(e),primary:!0,onClick:()=>{a.query(s).then(()=>{t(),d()})}},N.a.t("Run")))))};const{string:X}=c.a;var K=({id:e})=>{const[t,a]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.p,{dense:!0,onClick:()=>{a(!0)},label:N.a.t("Run manually")}),t&&l.a.createElement(z,{id:e,hideModal:()=>a(!1)}))};const{string:Z}=c.a;var Q=({id:e})=>{const[t,a]=Object(n.useState)(!1),s=Object(n.useContext)(m),c=r.getRefetchJobs(s);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.p,{dense:!0,destructive:!0,onClick:()=>{a(!0)},label:N.a.t("Delete")}),t&&l.a.createElement(U,{id:e,hideModal:()=>a(!1),onSuccess:c}))};const $=({id:e,configurable:t})=>l.a.createElement(o.i,{small:!0,component:l.a.createElement(o.k,null,t&&l.a.createElement(L,{id:e}),l.a.createElement(K,{id:e}),l.a.createElement(Q,{id:e}))},N.a.t("Actions"));$.defaultProps={configurable:!1};const{string:ee,bool:te}=c.a;var ae=$;const{string:re}=c.a;var ne=({status:e})=>{switch(e){case"STOPPED":case"DISABLED":return l.a.createElement(o.J,null,J[e]);case"RUNNING":case"NOT_STARTED":case"SCHEDULED":return l.a.createElement(o.J,{neutral:!0},J[e]);case"FAILED":return l.a.createElement(o.J,{negative:!0},J[e]);case"DONE":return l.a.createElement(o.J,{positive:!0},J[e]);default:return null}},le=a(28),oe=a.n(le);const se=({nextExecutionTime:e,enabled:t})=>{if(!t||!e)return"-";const a=oe()(Date.now()),r=oe.a.utc(e);return r.isSameOrBefore(a,"minute")?N.a.t("Not scheduled"):a.to(r)},{bool:ce,string:ie}=c.a;se.propTypes={enabled:ce.isRequired,nextExecutionTime:ie};var me=se,de=a(210),ue=a.n(de);const Ee=["MON","TUE","WED","THU","FRI","SAT","SUN"],pe=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],be=(e,t,a)=>e>=t&&e<=a,he=e=>"*"===e,ge=e=>"?"===e,_e=(e,t,a)=>he(e)||be(e,t,a)||((e,t,a)=>{const r=e.split("-");return!(!r||2!==r.length)&&(be(r[0],t,a)&&be(r[1],t,a)&&r[0]<=r[1])})(e,t,a)||((e,t,a)=>{const r=e.split("/");return!(!r||2!==r.length)&&((he(r[0])||be(r[0],t,a))&&be(r[1],t,a))})(e,t,a),fe=e=>_e(e,1,12)||(e=>{const t=e.split("-"),[a,r]=t.map(e=>pe.indexOf(e));return-1!==a&&void 0===r||-1!==a&&-1!==r&&a<=r})(e),ye=e=>_e(e,1,7)||(e=>{const t=e.split("-"),[a,r]=t.map(e=>Ee.indexOf(e));return-1!==a&&void 0===r||-1!==a&&-1!==r&&a<=r})(e)||ge(e);var ve=e=>{if(!e)return!1;const t=e.trim().split(" ");return!!(e=>e&&6===e.length)(t)&&(a=t[0],_e(a,0,59)&&(e=>_e(e,0,59))(t[1])&&(e=>_e(e,0,23))(t[2])&&(e=>_e(e,0,31)||ge(e))(t[3])&&fe(t[4])&&ye(t[5]));var a};var Te=e=>"string"===typeof e&&e.length>0?ve(e)?void 0:N.a.t("Please enter a valid CRON expression"):N.a.t("A CRON expression is required");var je=e=>{const t=N.a.language||"en";return e&&ve(e)?ue.a.toString(e,{locale:t}):""};const Ce=({cronExpression:e,schedulingType:t,delay:a})=>{switch(t){case"CRON":return je(e);case"FIXED_DELAY":return N.a.t("{{ delay }} seconds after last run",{delay:a});default:return"-"}},{string:Ne,number:Oe}=c.a;Ce.propTypes={schedulingType:Ne.isRequired,cronExpression:Ne,delay:Oe};var xe=Ce;const{shape:Se,string:Ae,bool:Je,number:Re}=c.a;var Ie=({job:{id:e,displayName:t,jobType:a,cronExpression:r,delay:n,jobStatus:s,nextExecutionTime:c,schedulingType:i,enabled:m,configurable:d}})=>l.a.createElement(o.H,null,l.a.createElement(o.E,null,t),l.a.createElement(o.E,null,A[a]),l.a.createElement(o.E,null,l.a.createElement(xe,{cronExpression:r,delay:n,schedulingType:i})),l.a.createElement(o.E,null,l.a.createElement(me,{nextExecutionTime:c,enabled:m})),l.a.createElement(o.E,null,l.a.createElement(ne,{status:s})),l.a.createElement(o.E,null,l.a.createElement(D,{id:e,checked:m})),l.a.createElement(o.E,null,l.a.createElement(ae,{id:e,configurable:d})));const{object:Fe,arrayOf:De}=c.a;var ke=({jobs:e})=>l.a.createElement(o.C,null,l.a.createElement(o.G,null,l.a.createElement(o.I,null,l.a.createElement(o.F,null,N.a.t("Job name")),l.a.createElement(o.F,null,N.a.t("Type")),l.a.createElement(o.F,null,N.a.t("Schedule")),l.a.createElement(o.F,null,N.a.t("Next run")),l.a.createElement(o.F,null,N.a.t("Status")),l.a.createElement(o.F,null,N.a.t("On/off")),l.a.createElement(o.F,null))),l.a.createElement(o.D,null,0===e.length?l.a.createElement(o.H,null,l.a.createElement(o.E,null,N.a.t("No jobs to display"))):e.map(e=>l.a.createElement(Ie,{key:e.id,job:e})))),Le=a(212),Pe=a.n(Le);const{bool:He,object:we,string:Be,arrayOf:Me,func:Ge}=c.a;var Ue=({jobs:e,showSystemJobs:t,setShowSystemJobs:a,jobFilter:r,setJobFilter:n})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Pe.a.header},l.a.createElement("h1",{className:Pe.a.headerTitle},N.a.t("Scheduled jobs")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Pe.a.headerLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Pe.a.headerLinkIcon},l.a.createElement(o.l,null)),N.a.t("About job configuration"))),l.a.createElement(o.d,null,l.a.createElement("div",{className:Pe.a.controlContainer},l.a.createElement(o.m,{dataTest:"job-filter-input",placeholder:N.a.t("Filter jobs"),onChange:({value:e})=>{n(e)},value:r}),l.a.createElement("div",{className:Pe.a.controlRight},l.a.createElement(o.f,{dataTest:"job-toggle-checkbox",checked:t,label:N.a.t("Include system jobs in list"),onChange:({checked:e})=>{a(e)}}),l.a.createElement(o.b,{dataTest:"new-job-button",onClick:()=>{x.push("/add")}},N.a.t("New job")))),l.a.createElement(ke,{jobs:e})));var Ye=()=>{const[e,t]=Object(n.useState)(!1),[a,o]=Object(n.useState)(""),s=Object(n.useContext)(m),c=((e,t)=>e.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())))(r.getJobsStore(s),a),i=e?c:(e=>e.filter(e=>e.configurable))(c);return l.a.createElement(Ue,{jobs:i,showSystemJobs:e,setShowSystemJobs:t,jobFilter:a,setJobFilter:o})};const We=({setCron:e,small:t})=>{const[a,r]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{onClick:()=>r(!0),small:t},N.a.t("Choose from preset times")),a&&l.a.createElement(w,{hideModal:()=>r(!1),setCron:e}))};We.defaultProps={small:!1};const{func:qe,bool:Ve}=c.a;var ze=We;const{string:Xe,func:Ke}=c.a;var Ze=({id:e,onSuccess:t})=>{const[a,r]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{destructive:!0,onClick:()=>r(!0)},N.a.t("Delete job")),a&&l.a.createElement(U,{id:e,hideModal:()=>r(!1),onSuccess:t}))};const Qe=({shouldConfirm:e,children:t,small:a,className:r})=>{const[s,c]=Object(n.useState)(!1),i=e?()=>c(!0):()=>x.push("/");return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{onClick:i,small:a,className:r},t),s&&l.a.createElement(W,{hideModal:()=>c(!1)}))};Qe.defaultProps={className:"",shouldConfirm:!1,small:!1};const{string:$e,bool:et}=c.a;var tt=Qe;const{FORM_ERROR:at}=o.j;var rt=e=>{const{details:{response:t}}=e,a={},r=[];return t.errorReports&&t.errorReports.length&&t.errorReports.forEach(e=>{e.errorProperty?a[e.errorProperty]=e.message:r.push(e.message)}),r.length>0&&(a[at]=r),a};const nt={resource:"jobConfigurations",type:"create",data:({job:e})=>e};var lt=()=>{const{refetchJobs:e}=Object(n.useContext)(m),t=Object(i.c)();return[a=>t.mutate(nt,{variables:{job:a}}).then(()=>{x.push("/"),e()}).catch(e=>{if("access"===e.type)return rt(e);throw e})]};const ot={resource:"jobConfigurations",type:"update",id:({id:e})=>e,data:({job:e})=>e};var st=({id:e})=>{const{refetchJobs:t}=Object(n.useContext)(m),a=Object(i.c)();return[r=>a.mutate(ot,{variables:{job:r,id:e}}).then(()=>{x.push("/"),t()}).catch(e=>{if("access"===e.type)return rt(e);throw e})]},ct=a(213),it=a.n(ct);const{array:mt}=c.a;var dt=({submitError:e})=>e.length>0?l.a.createElement(o.w,{error:!0,title:N.a.t("Something went wrong whilst creating your job")},l.a.createElement("ul",{className:it.a.list},e.map(e=>l.a.createElement("li",{key:e},e)))):null;const{Field:ut}=o.y,Et=Object(o.K)(o.O,o.M);var pt=()=>l.a.createElement(ut,{name:"name",component:o.n,validate:Et,label:N.a.t("Name"),type:"text",required:!0});const{Field:bt}=o.y,ht=Object(o.K)(o.O,o.M);var gt=()=>{const e=Object(n.useContext)(m),t=r.getJobTypesStore(e).map(({jobType:e})=>({value:e,label:A[e]}));return l.a.createElement(bt,{name:"jobType",validate:ht,component:o.z,options:t,label:N.a.t("Job type"),required:!0})};const _t=e=>"number"===typeof e?e.toString():e,{Field:ft}=o.y,{string:yt}=c.a;var vt=({label:e,name:t,parameterName:a})=>{const s=Object(n.useContext)(m),c=r.getParameterOptions(s,a);if(0===c.length)return l.a.createElement(o.u,{disabled:!0,helpText:N.a.t("No options available"),label:e});const i=c.map(e=>({value:e,label:S[e]||e}));return l.a.createElement(ft,{name:t,component:o.v,options:i,label:e})};const{Field:Tt}=o.y,{string:jt}=c.a;var Ct=({label:e,name:t,parameterName:a})=>{const s=Object(n.useContext)(m),c=r.getParameterOptions(s,a);if(0===c.length)return l.a.createElement(o.u,{disabled:!0,helpText:N.a.t("No options available"),label:e});const i=c.map(({id:e,displayName:t})=>({value:e,label:t}));return l.a.createElement(Tt,{name:t,component:o.v,options:i,label:e})},Nt=a(214),Ot=a.n(Nt);const{Field:xt}=o.y,{string:St}=c.a;var At=({jobType:e})=>{const t=Object(n.useContext)(m),a=r.getJobTypeParameters(t,e);if(0===a.length)return null;const s=a.map(({fieldName:e,name:t,klass:a})=>{const r={label:e,name:"".concat("jobParameters",".").concat(t)};let n=null;if("skipTableTypes"===t)return l.a.createElement(o.a,{marginTop:"16px",key:t},l.a.createElement(vt,Object.assign({},r,{parameterName:t})));switch(a){case"java.lang.String":n=l.a.createElement(xt,Object.assign({},r,{component:o.n,type:"text"}));break;case"java.lang.Boolean":n=l.a.createElement(xt,Object.assign({},r,{component:o.B,type:"checkbox"}));break;case"java.lang.Integer":n=l.a.createElement(xt,Object.assign({},r,{component:o.n,format:_t,type:"number"}));break;case"java.util.List":n=l.a.createElement(Ct,Object.assign({},r,{parameterName:t}))}return l.a.createElement(o.a,{marginTop:"16px",key:t},n)});return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h4",{className:Ot.a.headerTitle},N.a.t("Parameters"))),s)};const{Field:Jt,useFormState:Rt,useForm:It}=o.y,Ft=Te;var Dt=()=>{const e=It(),{values:t}=Rt({subscription:{values:!0}}),a=t.cronExpression,r=je(a);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Jt,{component:o.n,name:"cronExpression",validate:Ft,label:N.a.t("CRON Expression"),type:"text",helpText:r,required:!0}),l.a.createElement(o.a,{marginTop:"8px"},l.a.createElement(ze,{setCron:t=>e.change("cronExpression",t),small:!0})))};const{Field:kt}=o.y,Lt=Object(o.K)(o.N,o.M,Object(o.L)(1,86400));var Pt=()=>l.a.createElement(kt,{component:o.n,name:"delay",validate:Lt,label:N.a.t("Delay"),type:"number",format:_t,helpText:N.a.t("Delay in seconds ({{ lowerbound }} - {{ upperbound }})",{lowerbound:1,upperbound:86400}),required:!0});const{string:Ht}=c.a;var wt=({jobType:e})=>{const t=Object(n.useContext)(m);switch(r.getJobType(t,e).schedulingType){case"CRON":return l.a.createElement(Dt,null);case"FIXED_DELAY":return l.a.createElement(Pt,null);default:return null}};const Bt="jobType";var Mt=a(215),Gt=a.n(Mt);const{useForm:Ut}=o.y,Yt=({handleSubmit:e,pristine:t,submitting:a,submitError:r,hasSubmitErrors:s,values:c,setIsPristine:i})=>{const{subscribe:m}=Ut();Object(n.useEffect)(()=>m(({pristine:e})=>i(e),{pristine:!0}));const d=c[Bt],u=a?l.a.createElement(o.g,{small:!0}):null;return l.a.createElement("form",{onSubmit:e},l.a.createElement(o.a,{maxWidth:"600px"},l.a.createElement(pt,null)),l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(gt,null)),d&&l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(wt,{jobType:d})),d&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(At,{jobType:d})),s&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(dt,{submitError:r})),l.a.createElement("div",{className:Gt.a.formButtonContainer},l.a.createElement(o.b,{primary:!0,type:"submit",disabled:t||a,icon:u,className:Gt.a.saveButton},N.a.t("Save")),l.a.createElement(tt,{shouldConfirm:!t},N.a.t("Cancel"))))},{func:Wt,bool:qt,object:Vt,array:zt}=c.a;Yt.defaultProps={submitError:[]};var Xt=Yt;const{Form:Kt}=o.y,{func:Zt}=c.a;var Qt=({setIsPristine:e})=>{const[t]=lt();return l.a.createElement(Kt,{onSubmit:t,component:Xt,setIsPristine:e,destroyOnUnregister:!0})},$t=a(216),ea=a.n($t);const{useForm:ta}=o.y,aa=({id:e,refetchJobs:t,handleSubmit:a,pristine:r,submitting:s,submitError:c,hasSubmitErrors:i,values:m,setIsPristine:d})=>{const{subscribe:u}=ta();Object(n.useEffect)(()=>u(({pristine:e})=>d(e),{pristine:!0}));const E=m[Bt],p=s?l.a.createElement(o.g,{small:!0}):null;return l.a.createElement("form",{onSubmit:a},l.a.createElement(o.a,{maxWidth:"600px"},l.a.createElement(pt,null)),l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(gt,null)),E&&l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(wt,{jobType:E})),E&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(At,{jobType:E})),i&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(dt,{submitError:c})),l.a.createElement("div",{className:ea.a.formButtonContainer},l.a.createElement(o.b,{primary:!0,type:"submit",disabled:r||s,icon:p,className:ea.a.saveButton},N.a.t("Save")),l.a.createElement(tt,{shouldConfirm:!r},N.a.t("Cancel")),l.a.createElement("span",{className:ea.a.deleteButton},l.a.createElement(Ze,{id:e,onSuccess:()=>{x.push("/"),t()}}))))},{func:ra,bool:na,object:la,array:oa,string:sa}=c.a;aa.defaultProps={submitError:[]};var ca=aa;const{Form:ia}=o.y,ma=["cronExpression","delay","jobParameters","jobType","name","schedulingType"],{func:da}=c.a;var ua=({setIsPristine:e})=>{const{id:t}=Object(s.c)(),[a]=st({id:t}),o=Object(n.useContext)(m),c=r.getRefetchJobs(o),i=r.getJobById(o,t),d=ma.reduce((e,t)=>(e[t]=i[t],e),{});return l.a.createElement(ia,{onSubmit:a,component:ca,setIsPristine:e,initialValues:d,id:t,refetchJobs:c,destroyOnUnregister:!0})},Ea=a(223),pa=a.n(Ea);const{string:ba}=c.a;var ha=({created:e,lastExecutedStatus:t,lastExecuted:a})=>{const r=Date.now(),n=oe()(e).from(r),o=J[t],s=a?oe()(a).from(r):"";return l.a.createElement("div",{className:pa.a.wrapper},l.a.createElement("h4",{className:pa.a.title},N.a.t("Job details")),l.a.createElement("div",{className:pa.a.details},l.a.createElement("div",null,N.a.t("Created {{ createdFromNow }}.",{createdFromNow:n})),s&&l.a.createElement("div",null,N.a.t("Last run {{ lastRunFromNow }}.",{lastRunFromNow:s})),o&&l.a.createElement("div",null,N.a.t("Last run status: {{ translatedStatus }}.",{translatedStatus:o,nsSeparator:">"}))))},ga=a(224),_a=a.n(ga);const{bool:fa,func:ya,string:va}=c.a;var Ta=({isPristine:e,setIsPristine:t,name:a,created:r,lastExecutedStatus:n,lastExecuted:s})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:_a.a.pageHeader},l.a.createElement(tt,{shouldConfirm:!e,className:_a.a.pageHeaderButton,small:!0},N.a.t("Back to all jobs")),l.a.createElement("h2",{className:_a.a.pageHeaderTitle},N.a.t("Job: {{ name }}",{name:a,nsSeparator:">"}))),l.a.createElement(o.d,{className:_a.a.card},l.a.createElement("header",{className:_a.a.cardHeader},l.a.createElement("h3",{className:_a.a.cardHeaderTitle},N.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:_a.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:_a.a.cardHeaderInfo},l.a.createElement(o.l,null)),N.a.t("About job configuration"))),l.a.createElement("div",{className:_a.a.jobDetails},l.a.createElement(ha,{created:r,lastExecutedStatus:n,lastExecuted:s})),l.a.createElement(ua,{setIsPristine:t})));var ja=()=>{const e=Object(n.useContext)(m),[t,a]=Object(n.useState)(!0),{id:o}=Object(s.c)(),c=r.getJobById(e,o);return l.a.createElement(Ta,{isPristine:t,setIsPristine:a,name:c.name,created:c.created,lastExecutedStatus:c.lastExecutedStatus,lastExecuted:c.lastExecuted})},Ca=a(225),Na=a.n(Ca);const{bool:Oa,func:xa}=c.a;var Sa=({isPristine:e,setIsPristine:t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Na.a.pageHeader},l.a.createElement(tt,{shouldConfirm:!e,className:Na.a.pageHeaderButton,small:!0},N.a.t("Back to all jobs")),l.a.createElement("h2",{className:Na.a.pageHeaderTitle},N.a.t("New Job"))),l.a.createElement(o.d,{className:Na.a.card},l.a.createElement("header",{className:Na.a.cardHeader},l.a.createElement("h3",{className:Na.a.cardHeaderTitle},N.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Na.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Na.a.cardHeaderInfo},l.a.createElement(o.l,null)),N.a.t("About job configuration"))),l.a.createElement(Qt,{setIsPristine:t})));var Aa=()=>{const[e,t]=Object(n.useState)(!0);return l.a.createElement(Sa,{isPristine:e,setIsPristine:t})};var Ja=()=>l.a.createElement(s.b,{history:x},l.a.createElement(s.a,{exact:!0,path:"/",component:Ye}),l.a.createElement(s.a,{path:"/edit/:id",component:ja}),l.a.createElement(s.a,{path:"/add",component:Aa}));var Ra=a(226),Ia=a.n(Ra);const Fa={me:{resource:"me"}},{node:Da}=c.a;var ka=({children:e})=>{const{loading:t,error:a,data:r}=Object(i.e)(Fa);if(t)return l.a.createElement(o.o,null,l.a.createElement(o.e,null,l.a.createElement(o.g,null)));if(a)throw a;return(e=>{const{authorities:t}=e;return!!t&&(t.includes("ALL")||t.includes("F_SCHEDULING_ADMIN"))})(r.me)?l.a.createElement(l.a.Fragment,null,e):l.a.createElement("div",{className:Ia.a.noticeBoxWrapper},l.a.createElement(o.w,{error:!0,title:N.a.t("Not authorized")},N.a.t("You don't have access to the Job Scheduler. Contact a system administrator to request access.")))},La=a(227),Pa=a.n(La);const{node:Ha}=c.a;var wa=({children:e})=>l.a.createElement("div",{className:Pa.a.wrapper},e);a(228);var Ba=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(o.h,{spacers:!0,colors:!0}),l.a.createElement(wa,null,l.a.createElement(ka,null,l.a.createElement(b,null,l.a.createElement(Ja,null)))));a.d(t,"default",(function(){return Ba}))}}]);
//# sourceMappingURL=app.b18131ba.chunk.js.map