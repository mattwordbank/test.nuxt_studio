import{u as P,V as d,c as _,W as C,X as B,I as O,Y as v,Z as M,$ as N,a0 as V,C as E,J as H,a1 as R,e as S}from"./DU6__bzE.js";const x=s=>s==="defer"||s===!1;function I(...s){var p;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[e,f,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=P(),j=f,w=()=>d.value,b=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server=a.server??!0,a.default=a.default??w,a.getCachedData=a.getCachedData??b,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const u=a.getCachedData(e,t),h=u!=null;if(!t._asyncData[e]||!a.immediate){(p=t.payload._errors)[e]??(p[e]=d.errorValue);const i=a.deep?_:C;t._asyncData[e]={data:i(h?u:a.default()),pending:_(!h),error:B(t.payload._errors,e),status:_("idle"),_default:a.default}}const n={...t._asyncData[e]};delete n._default,n.refresh=n.execute=(i={})=>{if(t._asyncDataPromises[e]){if(x(i.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(i._initial||t.isHydrating&&i._initial!==!1){const c=i._initial?u:a.getCachedData(e,t);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,o)=>{try{c(j(t))}catch(y){o(y)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[e];let o=c;a.transform&&(o=await a.transform(c)),a.pick&&(o=T(o,a.pick)),t.payload.data[e]=o,n.data.value=o,n.error.value=d.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[e];n.error.value=V(c),n.data.value=E(a.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},n.clear=()=>z(t,e);const m=()=>n.refresh({_initial:!0}),D=a.server!==!1&&t.payload.serverRendered;{const i=H();if(i&&D&&a.immediate&&!i.sp&&(i.sp=[]),i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const o=i._nuxtOnBeforeMountCbs;R(()=>{o.forEach(y=>{y()}),o.splice(0,o.length)}),S(()=>o.splice(0,o.length))}D&&t.isHydrating&&(n.error.value||u!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):i&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(m):a.immediate&&m();const l=N();if(a.watch){const o=O(a.watch,()=>n.refresh());l&&v(o)}const c=t.hook("app:data:refresh",async o=>{(!o||o.includes(e))&&await n.refresh()});l&&v(c)}const g=Promise.resolve(t._asyncDataPromises[e]).then(()=>n);return Object.assign(g,n),g}async function J(s){await new Promise(e=>M(e)),await P().hooks.callHookParallel("app:data:refresh",void 0)}function z(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=d.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=void 0,s._asyncData[r].error.value=d.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function T(s,r){const e={};for(const f of r)e[f]=s[f];return e}const K={content:"v3.2.0--FabNj4vEJ9",json:"v3.2.0--1VtgNdBlnT"},U={content:"_content_content",json:"_content_json",info:"_content_info"},W={content:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},json:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},info:{type:"data",fields:{}}};export{W as a,K as c,J as r,U as t,I as u};
