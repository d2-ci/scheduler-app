(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[127],{202:function(e,t,a){e.exports={header:"JobList_header__23tFt",headerTitle:"JobList_headerTitle__21D__",headerLink:"JobList_headerLink__2zepi",headerLinkIcon:"JobList_headerLinkIcon__XdfBB",controlContainer:"JobList_controlContainer__3Yzj_",controlRight:"JobList_controlRight__38lfB"}},203:function(e,t,a){e.exports={list:"FormErrorBox_list__3BejY"}},204:function(e,t,a){e.exports={headerTitle:"ParameterFields_headerTitle__IBF76"}},205:function(e,t,a){e.exports={formButtonContainer:"JobAddForm_formButtonContainer__1MLSp",saveButton:"JobAddForm_saveButton__RfxZ9"}},206:function(e,t,a){e.exports={formButtonContainer:"JobEditForm_formButtonContainer__2b6Fi",deleteButton:"JobEditForm_deleteButton__VQxBE",saveButton:"JobEditForm_saveButton__278Ab"}},213:function(e,t,a){e.exports={wrapper:"JobDetails_wrapper__1-YkO",title:"JobDetails_title__1Cht7",details:"JobDetails_details__2HITJ"}},214:function(e,t,a){e.exports={pageHeader:"JobEdit_pageHeader__3Fywp",pageHeaderButton:"JobEdit_pageHeaderButton__29yjJ",pageHeaderTitle:"JobEdit_pageHeaderTitle__jZrIG",card:"JobEdit_card__2QqEg",cardHeader:"JobEdit_cardHeader__Mv_cj",cardHeaderTitle:"JobEdit_cardHeaderTitle__29Y64",cardHeaderInfo:"JobEdit_cardHeaderInfo__3VWZt",cardHeaderLink:"JobEdit_cardHeaderLink__2frj7",jobDetails:"JobEdit_jobDetails__194v-"}},215:function(e,t,a){e.exports={pageHeader:"JobAdd_pageHeader__2NZzc",pageHeaderButton:"JobAdd_pageHeaderButton__Xg_R9",pageHeaderTitle:"JobAdd_pageHeaderTitle__1RMl0",card:"JobAdd_card__1HH6H",cardHeader:"JobAdd_cardHeader__1D3sS",cardHeaderTitle:"JobAdd_cardHeaderTitle__2TG9a",cardHeaderInfo:"JobAdd_cardHeaderInfo__vq_Y1",cardHeaderLink:"JobAdd_cardHeaderLink__2CzPt"}},216:function(e,t,a){e.exports={noticeBoxWrapper:"AuthWall_noticeBoxWrapper__1ums5"}},217:function(e,t,a){e.exports={wrapper:"PageWrapper_wrapper__t-CJy"}},218:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"getJobsStore",(function(){return h})),a.d(r,"getJobTypesStore",(function(){return g})),a.d(r,"getParameterOptionsStore",(function(){return _})),a.d(r,"getRefetchJobs",(function(){return f})),a.d(r,"getJobById",(function(){return v})),a.d(r,"getJobType",(function(){return T})),a.d(r,"getJobTypeParameters",(function(){return j})),a.d(r,"getParameterOptions",(function(){return y}));var n=a(1),l=a.n(n),o=a(181),s=a(219),c=a(182),i=a(13);var m=Object(n.createContext)({jobs:{},jobTypes:{},parameterOptions:{},refetchJobs:()=>{throw new Error("Store context needs a valid provider")}});const d={jobs:{resource:"jobConfigurations",params:{fields:"*",paging:!1}}},u={jobTypes:{resource:"jobConfigurations/jobTypes",params:{fields:"*",paging:!1}}},E={skipTableTypes:{resource:"analytics/tableTypes"},validationRuleGroups:{resource:"validationRuleGroups",params:{paging:!1}},pushAnalysis:{resource:"pushAnalysis",params:{paging:!1}},predictors:{resource:"predictors",params:{paging:!1}},predictorGroups:{resource:"predictorGroups",params:{paging:!1}}},{node:p}=c.a;var b=({children:e})=>{const t=Object(i.e)(d),a=Object(i.e)(u),r=Object(i.e)(E);if(t.loading||a.loading||r.loading)return l.a.createElement(o.n,null,l.a.createElement(o.e,null,l.a.createElement(o.f,null)));const n=t.error||a.error||r.error;if(n)throw n;const{jobConfigurations:s}=t.data.jobs,{jobTypes:c}=a.data.jobTypes,{skipTableTypes:p,validationRuleGroups:{validationRuleGroups:b},pushAnalysis:{pushAnalysis:h},predictors:{predictors:g},predictorGroups:{predictorGroups:_}}=r.data,f={skipTableTypes:p,validationRuleGroups:b,pushAnalysis:h,predictors:g,predictorGroups:_};return l.a.createElement(m.Provider,{value:{jobs:s,jobTypes:c,parameterOptions:f,refetchJobs:t.refetch}},e)};const h=e=>e.jobs,g=e=>e.jobTypes,_=e=>e.parameterOptions,f=e=>e.refetchJobs,v=(e,t)=>h(e).find(e=>e.id===t),T=(e,t)=>g(e).find(e=>e.jobType===t),j=(e,t)=>{const a=T(e,t);return"jobParameters"in a?a.jobParameters:[]},y=(e,t)=>_(e)[t];var C=a(8),x=a.n(C),N=a(193);var O=Object(N.a)();var S={DATA_VALUE:x.a.t("Data value"),COMPLETENESS:x.a.t("Completeness"),COMPLETENESS_TARGET:x.a.t("Completeness target"),ORG_UNIT_TARGET:x.a.t("Org unit target"),EVENT:x.a.t("Event"),ENROLLMENT:x.a.t("Enrollment"),VALIDATION_RESULT:x.a.t("Validation result")};var A={ANALYTICS_TABLE:x.a.t("Analytics table"),CONTINUOUS_ANALYTICS_TABLE:x.a.t("Continuous analytics table"),CREDENTIALS_EXPIRY_ALERT:x.a.t("Credentials expiry alert"),DATA_INTEGRITY:x.a.t("Data integrity"),DATA_SET_NOTIFICATION:x.a.t("Dataset notification"),DATA_STATISTICS:x.a.t("Data statistics"),DATA_SYNC:x.a.t("Data synchronization"),EVENT_PROGRAMS_DATA_SYNC:x.a.t("Event programs data sync"),FILE_RESOURCE_CLEANUP:x.a.t("File resource clean up"),META_DATA_SYNC:x.a.t("Metadata synchronization"),MONITORING:x.a.t("Monitoring"),PREDICTOR:x.a.t("Predictor"),PROGRAM_NOTIFICATIONS:x.a.t("Program notifications"),PUSH_ANALYSIS:x.a.t("Push analysis"),REMOVE_EXPIRED_RESERVED_VALUES:x.a.t("Remove expired reserved values"),RESOURCE_TABLE:x.a.t("Resource table"),SEND_SCHEDULED_MESSAGE:x.a.t("Send scheduled message"),TRACKER_PROGRAMS_DATA_SYNC:x.a.t("Tracker programs data sync"),VALIDATION_RESULTS_NOTIFICATION:x.a.t("Validation results notification")};var J={COMPLETED:x.a.t("Completed"),DISABLED:x.a.t("Disabled"),DONE:x.a.t("Done"),FAILED:x.a.t("Failed"),NOT_STARTED:x.a.t("Not started"),RUNNING:x.a.t("Running"),SCHEDULED:x.a.t("Scheduled"),STOPPED:x.a.t("Stopped")};const R={resource:"jobConfigurations",id:({id:e})=>e,type:"update",partial:!0,data:({enabled:e})=>({enabled:e})},{bool:D,string:I}=c.a;var F=({id:e,checked:t})=>{const[a,{loading:s}]=Object(i.d)(R),c=Object(n.useContext)(m),d=r.getRefetchJobs(c),u=!t;return l.a.createElement(o.z,{name:"toggle-job-".concat(e),disabled:s,checked:t,onChange:()=>{a({id:e,enabled:u}).then(()=>d())}})};const{string:L}=c.a;var k=({id:e})=>l.a.createElement(o.o,{dense:!0,onClick:()=>O.push("/edit/".concat(e)),label:x.a.t("Edit")});const P=[{label:x.a.t("Every hour"),value:"0 0 * ? * *"},{label:x.a.t("Every day at midnight"),value:"0 0 1 ? * *"},{label:x.a.t("Every day at 3 am"),value:"0 0 3 ? * *"},{label:x.a.t("Every day at noon"),value:"0 0 12 ? * MON-FRI"},{label:x.a.t("Every week"),value:"0 0 3 ? * MON"}],{func:H}=c.a;var w=({setCron:e,hideModal:t})=>{const[a,r]=Object(n.useState)("");return l.a.createElement(o.p,{open:!0,small:!0,onClose:t},l.a.createElement(o.s,null,x.a.t("Choose a preset time/interval")),l.a.createElement(o.r,null,P.map(e=>l.a.createElement(o.w,Object.assign({},e,{checked:a===e.value,key:e.value,onChange:({value:e})=>r(e)})))),l.a.createElement(o.q,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{secondary:!0,onClick:t,name:"hide-modal"},x.a.t("Cancel")),l.a.createElement(o.b,{primary:!0,name:"insert-preset",disabled:!a,onClick:()=>{t(),e(a)}},x.a.t("Insert preset")))))};const B={resource:"jobConfigurations",id:({id:e})=>e,type:"delete"},{func:M,string:G}=c.a;var U=({id:e,hideModal:t,onSuccess:a})=>{const[r]=Object(i.d)(B);return l.a.createElement(o.p,{open:!0,small:!0,onClose:t},l.a.createElement(o.r,null,x.a.t("Are you sure you want to delete this job?")),l.a.createElement(o.q,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"hide-modal",secondary:!0,onClick:t},x.a.t("Cancel")),l.a.createElement(o.b,{name:"delete-job-".concat(e),destructive:!0,onClick:()=>{r({id:e}).then(()=>{t(),a()})}},x.a.t("Delete")))))};const{func:Y}=c.a;var W=({hideModal:e})=>l.a.createElement(o.p,{open:!0,small:!0,onClose:e},l.a.createElement(o.r,null,x.a.t("Are you sure you want to discard this form?")),l.a.createElement(o.q,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"cancel-discard-form",secondary:!0,onClick:e},x.a.t("Cancel")),l.a.createElement(o.b,{name:"discard-form",destructive:!0,onClick:()=>{e(),O.push("/")}},x.a.t("Discard")))));const{func:q,string:V}=c.a;var z=({id:e,hideModal:t})=>{const a=Object(i.c)(),s={jobs:{resource:"jobConfigurations/".concat(e,"/execute")}},c=Object(n.useContext)(m),d=r.getRefetchJobs(c);return l.a.createElement(o.p,{open:!0,small:!0,onClose:t},l.a.createElement(o.r,null,x.a.t("Are you sure you want to run this job?")),l.a.createElement(o.q,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"hide-modal",secondary:!0,onClick:t},x.a.t("Cancel")),l.a.createElement(o.b,{name:"run-job-".concat(e),primary:!0,onClick:()=>{a.query(s).then(()=>{t(),d()})}},x.a.t("Run")))))};const{string:X}=c.a;var Z=({id:e})=>{const[t,a]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.o,{dense:!0,onClick:()=>{a(!0)},label:x.a.t("Run manually")}),t&&l.a.createElement(z,{id:e,hideModal:()=>a(!1)}))};const{string:K}=c.a;var Q=({id:e})=>{const[t,a]=Object(n.useState)(!1),s=Object(n.useContext)(m),c=r.getRefetchJobs(s);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.o,{dense:!0,destructive:!0,onClick:()=>{a(!0)},label:x.a.t("Delete")}),t&&l.a.createElement(U,{id:e,hideModal:()=>a(!1),onSuccess:c}))};const $=({id:e,configurable:t})=>l.a.createElement(o.h,{small:!0,component:l.a.createElement(o.j,null,t&&l.a.createElement(k,{id:e}),l.a.createElement(Z,{id:e}),l.a.createElement(Q,{id:e}))},x.a.t("Actions"));$.defaultProps={configurable:!1};const{string:ee,bool:te}=c.a;var ae=$;const{string:re}=c.a;var ne=({status:e})=>{switch(e){case"STOPPED":case"DISABLED":return l.a.createElement(o.I,null,J[e]);case"RUNNING":case"NOT_STARTED":case"SCHEDULED":return l.a.createElement(o.I,{neutral:!0},J[e]);case"FAILED":return l.a.createElement(o.I,{negative:!0},J[e]);case"DONE":return l.a.createElement(o.I,{positive:!0},J[e]);default:return null}},le=a(28),oe=a.n(le);const se=({nextExecutionTime:e,enabled:t})=>{if(!t||!e)return"-";const a=oe()(Date.now()),r=oe.a.utc(e);return r.isSameOrBefore(a,"minute")?x.a.t("Not scheduled"):a.to(r)},{bool:ce,string:ie}=c.a;se.propTypes={enabled:ce.isRequired,nextExecutionTime:ie};var me=se,de=a(200),ue=a.n(de);const Ee=["MON","TUE","WED","THU","FRI","SAT","SUN"],pe=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],be=(e,t,a)=>e>=t&&e<=a,he=e=>"*"===e,ge=e=>"?"===e,_e=(e,t,a)=>he(e)||be(e,t,a)||((e,t,a)=>{const r=e.split("-");return!(!r||2!==r.length)&&(be(r[0],t,a)&&be(r[1],t,a)&&r[0]<=r[1])})(e,t,a)||((e,t,a)=>{const r=e.split("/");return!(!r||2!==r.length)&&((he(r[0])||be(r[0],t,a))&&be(r[1],t,a))})(e,t,a),fe=e=>_e(e,1,12)||(e=>{const t=e.split("-"),[a,r]=t.map(e=>pe.indexOf(e));return-1!==a&&void 0===r||-1!==a&&-1!==r&&a<=r})(e),ve=e=>_e(e,1,7)||(e=>{const t=e.split("-"),[a,r]=t.map(e=>Ee.indexOf(e));return-1!==a&&void 0===r||-1!==a&&-1!==r&&a<=r})(e)||ge(e);var Te=e=>{if(!e)return!1;const t=e.trim().split(" ");return!!(e=>e&&6===e.length)(t)&&(a=t[0],_e(a,0,59)&&(e=>_e(e,0,59))(t[1])&&(e=>_e(e,0,23))(t[2])&&(e=>_e(e,0,31)||ge(e))(t[3])&&fe(t[4])&&ve(t[5]));var a};var je=e=>"string"===typeof e&&e.length>0?Te(e)?void 0:x.a.t("Please enter a valid CRON expression"):x.a.t("A CRON expression is required");var ye=e=>{const t=x.a.language||"en";return e&&Te(e)?ue.a.toString(e,{locale:t}):""};const Ce=({cronExpression:e,schedulingType:t,delay:a})=>{switch(t){case"CRON":return ye(e);case"FIXED_DELAY":return x.a.t("{{ delay }} seconds after last run",{delay:a});default:return"-"}},{string:xe,number:Ne}=c.a;Ce.propTypes={schedulingType:xe.isRequired,cronExpression:xe,delay:Ne};var Oe=Ce;const{shape:Se,string:Ae,bool:Je,number:Re}=c.a;var De=({job:{id:e,displayName:t,jobType:a,cronExpression:r,delay:n,jobStatus:s,nextExecutionTime:c,schedulingType:i,enabled:m,configurable:d}})=>l.a.createElement(o.G,null,l.a.createElement(o.D,null,t),l.a.createElement(o.D,null,A[a]),l.a.createElement(o.D,null,l.a.createElement(Oe,{cronExpression:r,delay:n,schedulingType:i})),l.a.createElement(o.D,null,l.a.createElement(me,{nextExecutionTime:c,enabled:m})),l.a.createElement(o.D,null,l.a.createElement(ne,{status:s})),l.a.createElement(o.D,null,l.a.createElement(F,{id:e,checked:m})),l.a.createElement(o.D,null,l.a.createElement(ae,{id:e,configurable:d})));const{object:Ie,arrayOf:Fe}=c.a;var Le=({jobs:e})=>l.a.createElement(o.B,null,l.a.createElement(o.F,null,l.a.createElement(o.H,null,l.a.createElement(o.E,null,x.a.t("Job name")),l.a.createElement(o.E,null,x.a.t("Type")),l.a.createElement(o.E,null,x.a.t("Schedule")),l.a.createElement(o.E,null,x.a.t("Next run")),l.a.createElement(o.E,null,x.a.t("Status")),l.a.createElement(o.E,null,x.a.t("On/off")),l.a.createElement(o.E,null))),l.a.createElement(o.C,null,0===e.length?l.a.createElement(o.G,null,l.a.createElement(o.D,null,x.a.t("No jobs to display"))):e.map(e=>l.a.createElement(De,{key:e.id,job:e})))),ke=a(202),Pe=a.n(ke);const{bool:He,object:we,string:Be,arrayOf:Me,func:Ge}=c.a;var Ue=({jobs:e,showSystemJobs:t,setShowSystemJobs:a,jobFilter:r,setJobFilter:n})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Pe.a.header},l.a.createElement("h1",{className:Pe.a.headerTitle},x.a.t("Scheduled jobs")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Pe.a.headerLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Pe.a.headerLinkIcon},l.a.createElement(o.k,null)),x.a.t("About job configuration"))),l.a.createElement(o.d,null,l.a.createElement("div",{className:Pe.a.controlContainer},l.a.createElement(o.l,{dataTest:"job-filter-input",placeholder:x.a.t("Filter jobs"),onChange:({value:e})=>{n(e)},value:r}),l.a.createElement("div",{className:Pe.a.controlRight},l.a.createElement(o.z,{dataTest:"job-toggle-switch",checked:t,label:x.a.t("Show system jobs"),onChange:({checked:e})=>{a(e)}}),l.a.createElement(o.b,{dataTest:"new-job-button",onClick:()=>{O.push("/add")}},x.a.t("New job")))),l.a.createElement(Le,{jobs:e})));var Ye=()=>{const[e,t]=Object(n.useState)(!1),[a,o]=Object(n.useState)(""),s=Object(n.useContext)(m),c=((e,t)=>e.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())))(r.getJobsStore(s),a),i=e?c:(e=>e.filter(e=>e.configurable))(c);return l.a.createElement(Ue,{jobs:i,showSystemJobs:e,setShowSystemJobs:t,jobFilter:a,setJobFilter:o})};const We=({setCron:e,small:t})=>{const[a,r]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{onClick:()=>r(!0),small:t},x.a.t("Choose from preset times")),a&&l.a.createElement(w,{hideModal:()=>r(!1),setCron:e}))};We.defaultProps={small:!1};const{func:qe,bool:Ve}=c.a;var ze=We;const{string:Xe,func:Ze}=c.a;var Ke=({id:e,onSuccess:t})=>{const[a,r]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{destructive:!0,onClick:()=>r(!0)},x.a.t("Delete job")),a&&l.a.createElement(U,{id:e,hideModal:()=>r(!1),onSuccess:t}))};const Qe=({shouldConfirm:e,children:t,small:a,className:r})=>{const[s,c]=Object(n.useState)(!1),i=e?()=>c(!0):()=>O.push("/");return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{onClick:i,small:a,className:r},t),s&&l.a.createElement(W,{hideModal:()=>c(!1)}))};Qe.defaultProps={className:"",shouldConfirm:!1,small:!1};const{string:$e,bool:et}=c.a;var tt=Qe;const{FORM_ERROR:at}=o.i;var rt=e=>{const{details:{response:t}}=e,a={},r=[];return t.errorReports&&t.errorReports.length&&t.errorReports.forEach(e=>{e.errorProperty?a[e.errorProperty]=e.message:r.push(e.message)}),r.length>0&&(a[at]=r),a};const nt={resource:"jobConfigurations",type:"create",data:({job:e})=>e};var lt=()=>{const{refetchJobs:e}=Object(n.useContext)(m),t=Object(i.c)();return[a=>t.mutate(nt,{variables:{job:a}}).then(()=>{O.push("/"),e()}).catch(e=>{if("access"===e.type)return rt(e);throw e})]};const ot={resource:"jobConfigurations",type:"update",id:({id:e})=>e,data:({job:e})=>e};var st=({id:e})=>{const{refetchJobs:t}=Object(n.useContext)(m),a=Object(i.c)();return[r=>a.mutate(ot,{variables:{job:r,id:e}}).then(()=>{O.push("/"),t()}).catch(e=>{if("access"===e.type)return rt(e);throw e})]},ct=a(203),it=a.n(ct);const{array:mt}=c.a;var dt=({submitError:e})=>e.length>0?l.a.createElement(o.v,{error:!0,title:x.a.t("Something went wrong whilst creating your job")},l.a.createElement("ul",{className:it.a.list},e.map(e=>l.a.createElement("li",{key:e},e)))):null;const{Field:ut}=o.x,Et=Object(o.J)(o.N,o.L);var pt=()=>l.a.createElement(ut,{name:"name",component:o.m,validate:Et,label:x.a.t("Name"),type:"text",required:!0});const{Field:bt}=o.x,ht=Object(o.J)(o.N,o.L);var gt=()=>{const e=Object(n.useContext)(m),t=r.getJobTypesStore(e).map(({jobType:e})=>({value:e,label:A[e]}));return l.a.createElement(bt,{name:"jobType",validate:ht,component:o.y,options:t,label:x.a.t("Job type"),required:!0})};const _t=e=>"number"===typeof e?e.toString():e,{Field:ft}=o.x,{string:vt}=c.a;var Tt=({label:e,name:t,parameterName:a})=>{const s=Object(n.useContext)(m),c=r.getParameterOptions(s,a);if(0===c.length)return l.a.createElement(o.t,{disabled:!0,helpText:x.a.t("No options available"),label:e});const i=c.map(e=>({value:e,label:S[e]||e}));return l.a.createElement(ft,{name:t,component:o.u,options:i,label:e})};const{Field:jt}=o.x,{string:yt}=c.a;var Ct=({label:e,name:t,parameterName:a})=>{const s=Object(n.useContext)(m),c=r.getParameterOptions(s,a);if(0===c.length)return l.a.createElement(o.t,{disabled:!0,helpText:x.a.t("No options available"),label:e});const i=c.map(({id:e,displayName:t})=>({value:e,label:t}));return l.a.createElement(jt,{name:t,component:o.u,options:i,label:e})},xt=a(204),Nt=a.n(xt);const{Field:Ot}=o.x,{string:St}=c.a;var At=({jobType:e})=>{const t=Object(n.useContext)(m),a=r.getJobTypeParameters(t,e);if(0===a.length)return null;const s=a.map(({fieldName:e,name:t,klass:a})=>{const r={label:e,name:"".concat("jobParameters",".").concat(t)};let n=null;if("skipTableTypes"===t)return l.a.createElement(o.a,{marginTop:"16px",key:t},l.a.createElement(Tt,Object.assign({},r,{parameterName:t})));switch(a){case"java.lang.String":n=l.a.createElement(Ot,Object.assign({},r,{component:o.m,type:"text"}));break;case"java.lang.Boolean":n=l.a.createElement(Ot,Object.assign({},r,{component:o.A,type:"checkbox"}));break;case"java.lang.Integer":n=l.a.createElement(Ot,Object.assign({},r,{component:o.m,format:_t,type:"number"}));break;case"java.util.List":n=l.a.createElement(Ct,Object.assign({},r,{parameterName:t}))}return l.a.createElement(o.a,{marginTop:"16px",key:t},n)});return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h4",{className:Nt.a.headerTitle},x.a.t("Parameters"))),s)};const{Field:Jt,useFormState:Rt,useForm:Dt}=o.x,It=je;var Ft=()=>{const e=Dt(),{values:t}=Rt({subscription:{values:!0}}),a=t.cronExpression,r=ye(a);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Jt,{component:o.m,name:"cronExpression",validate:It,label:x.a.t("CRON Expression"),type:"text",helpText:r,required:!0}),l.a.createElement(o.a,{marginTop:"8px"},l.a.createElement(ze,{setCron:t=>e.change("cronExpression",t),small:!0})))};const{Field:Lt}=o.x,kt=Object(o.J)(o.M,o.L,Object(o.K)(1,86400));var Pt=()=>l.a.createElement(Lt,{component:o.m,name:"delay",validate:kt,label:x.a.t("Delay"),type:"number",format:_t,helpText:x.a.t("Delay in seconds ({{ lowerbound }} - {{ upperbound }})",{lowerbound:1,upperbound:86400}),required:!0});const{string:Ht}=c.a;var wt=({jobType:e})=>{const t=Object(n.useContext)(m);switch(r.getJobType(t,e).schedulingType){case"CRON":return l.a.createElement(Ft,null);case"FIXED_DELAY":return l.a.createElement(Pt,null);default:return null}};const Bt="jobType";var Mt=a(205),Gt=a.n(Mt);const{useForm:Ut}=o.x,Yt=({handleSubmit:e,pristine:t,submitting:a,submitError:r,hasSubmitErrors:s,values:c,setIsPristine:i})=>{const{subscribe:m}=Ut();Object(n.useEffect)(()=>{m(({pristine:e})=>i(e),{pristine:!0})});const d=c[Bt],u=a?l.a.createElement(o.f,{small:!0}):null;return l.a.createElement("form",{onSubmit:e},l.a.createElement(o.a,{maxWidth:"600px"},l.a.createElement(pt,null)),l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(gt,null)),d&&l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(wt,{jobType:d})),d&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(At,{jobType:d})),s&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(dt,{submitError:r})),l.a.createElement("div",{className:Gt.a.formButtonContainer},l.a.createElement(o.b,{primary:!0,type:"submit",disabled:t||a,icon:u,className:Gt.a.saveButton},x.a.t("Save")),l.a.createElement(tt,{shouldConfirm:!t},x.a.t("Cancel"))))},{func:Wt,bool:qt,object:Vt,array:zt}=c.a;Yt.defaultProps={submitError:[]};var Xt=Yt;const{Form:Zt}=o.x,{func:Kt}=c.a;var Qt=({setIsPristine:e})=>{const[t]=lt();return l.a.createElement(Zt,{onSubmit:t,component:Xt,setIsPristine:e,destroyOnUnregister:!0})},$t=a(206),ea=a.n($t);const{useForm:ta}=o.x,aa=({id:e,refetchJobs:t,handleSubmit:a,pristine:r,submitting:s,submitError:c,hasSubmitErrors:i,values:m,setIsPristine:d})=>{const{subscribe:u}=ta();Object(n.useEffect)(()=>{u(({pristine:e})=>d(e),{pristine:!0})});const E=m[Bt],p=s?l.a.createElement(o.f,{small:!0}):null;return l.a.createElement("form",{onSubmit:a},l.a.createElement(o.a,{maxWidth:"600px"},l.a.createElement(pt,null)),l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(gt,null)),E&&l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(wt,{jobType:E})),E&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(At,{jobType:E})),i&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(dt,{submitError:c})),l.a.createElement("div",{className:ea.a.formButtonContainer},l.a.createElement(o.b,{primary:!0,type:"submit",disabled:r||s,icon:p,className:ea.a.saveButton},x.a.t("Save")),l.a.createElement(tt,{shouldConfirm:!r},x.a.t("Cancel")),l.a.createElement("span",{className:ea.a.deleteButton},l.a.createElement(Ke,{id:e,onSuccess:()=>{O.push("/"),t()}}))))},{func:ra,bool:na,object:la,array:oa,string:sa}=c.a;aa.defaultProps={submitError:[]};var ca=aa;const{Form:ia}=o.x,ma={job:{resource:"jobConfigurations",id:({id:e})=>e,params:{paging:!1,fields:["cronExpression","delay","jobParameters","jobType","name","schedulingType"].join(",")}}},{func:da}=c.a;var ua=({setIsPristine:e})=>{const{id:t}=Object(s.c)(),{loading:a,error:o,data:c}=Object(i.e)(ma,{variables:{id:t}}),[d]=st({id:t}),u=Object(n.useContext)(m),E=r.getRefetchJobs(u);if(a)return null;if(o)throw o;return l.a.createElement(ia,{onSubmit:d,component:ca,setIsPristine:e,initialValues:c.job,id:t,refetchJobs:E,destroyOnUnregister:!0})},Ea=a(213),pa=a.n(Ea);const{string:ba}=c.a;var ha=({created:e,lastExecutedStatus:t,lastExecuted:a})=>{const r=Date.now(),n=oe()(e).from(r),o=J[t],s=a?oe()(a).from(r):"";return l.a.createElement("div",{className:pa.a.wrapper},l.a.createElement("h4",{className:pa.a.title},x.a.t("Job details")),l.a.createElement("div",{className:pa.a.details},l.a.createElement("div",null,x.a.t("Created {{ createdFromNow }}.",{createdFromNow:n})),s&&l.a.createElement("div",null,x.a.t("Last run {{ lastRunFromNow }}.",{lastRunFromNow:s})),o&&l.a.createElement("div",null,x.a.t("Last run status: {{ translatedStatus }}.",{translatedStatus:o,nsSeparator:">"}))))},ga=a(214),_a=a.n(ga);const{bool:fa,func:va,string:Ta}=c.a;var ja=({isPristine:e,setIsPristine:t,name:a,created:r,lastExecutedStatus:n,lastExecuted:s})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:_a.a.pageHeader},l.a.createElement(tt,{shouldConfirm:!e,className:_a.a.pageHeaderButton,small:!0},x.a.t("Back to all jobs")),l.a.createElement("h2",{className:_a.a.pageHeaderTitle},x.a.t("Job: {{ name }}",{name:a,nsSeparator:">"}))),l.a.createElement(o.d,{className:_a.a.card},l.a.createElement("header",{className:_a.a.cardHeader},l.a.createElement("h3",{className:_a.a.cardHeaderTitle},x.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:_a.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:_a.a.cardHeaderInfo},l.a.createElement(o.k,null)),x.a.t("About job configuration"))),l.a.createElement("div",{className:_a.a.jobDetails},l.a.createElement(ha,{created:r,lastExecutedStatus:n,lastExecuted:s})),l.a.createElement(ua,{setIsPristine:t})));var ya=()=>{const e=Object(n.useContext)(m),[t,a]=Object(n.useState)(!0),{id:o}=Object(s.c)(),c=r.getJobById(e,o);return l.a.createElement(ja,{isPristine:t,setIsPristine:a,name:c.name,created:c.created,lastExecutedStatus:c.lastExecutedStatus,lastExecuted:c.lastExecuted})},Ca=a(215),xa=a.n(Ca);const{bool:Na,func:Oa}=c.a;var Sa=({isPristine:e,setIsPristine:t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:xa.a.pageHeader},l.a.createElement(tt,{shouldConfirm:!e,className:xa.a.pageHeaderButton,small:!0},x.a.t("Back to all jobs")),l.a.createElement("h2",{className:xa.a.pageHeaderTitle},x.a.t("New Job"))),l.a.createElement(o.d,{className:xa.a.card},l.a.createElement("header",{className:xa.a.cardHeader},l.a.createElement("h3",{className:xa.a.cardHeaderTitle},x.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:xa.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:xa.a.cardHeaderInfo},l.a.createElement(o.k,null)),x.a.t("About job configuration"))),l.a.createElement(Qt,{setIsPristine:t})));var Aa=()=>{const[e,t]=Object(n.useState)(!0);return l.a.createElement(Sa,{isPristine:e,setIsPristine:t})};var Ja=()=>l.a.createElement(s.b,{history:O},l.a.createElement(s.a,{exact:!0,path:"/",component:Ye}),l.a.createElement(s.a,{path:"/edit/:id",component:ya}),l.a.createElement(s.a,{path:"/add",component:Aa}));var Ra=a(216),Da=a.n(Ra);const Ia={me:{resource:"me"}},{node:Fa}=c.a;var La=({children:e})=>{const{loading:t,error:a,data:r}=Object(i.e)(Ia);if(t)return l.a.createElement(o.n,null,l.a.createElement(o.e,null,l.a.createElement(o.f,null)));if(a)throw a;return(e=>{const{authorities:t}=e;return!!t&&(t.includes("ALL")||t.includes("F_SCHEDULING_ADMIN"))})(r.me)?l.a.createElement(l.a.Fragment,null,e):l.a.createElement("div",{className:Da.a.noticeBoxWrapper},l.a.createElement(o.v,{error:!0,title:x.a.t("Not authorized")},x.a.t("You don't have access to the Job Scheduler. Contact a system administrator to request access.")))},ka=a(217),Pa=a.n(ka);const{node:Ha}=c.a;var wa=({children:e})=>l.a.createElement("div",{className:Pa.a.wrapper},e);a(218);var Ba=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(o.g,{spacers:!0,colors:!0}),l.a.createElement(wa,null,l.a.createElement(La,null,l.a.createElement(b,null,l.a.createElement(Ja,null)))));a.d(t,"default",(function(){return Ba}))}}]);
//# sourceMappingURL=app.8f9d257f.chunk.js.map