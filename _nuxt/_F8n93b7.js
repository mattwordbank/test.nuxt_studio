import{u as P,V as d,c as _,W as C,X as B,E as O,Y as v,Z as M,$ as E,a0 as H,O as R,G as V,a1 as z,e as N}from"./BTfZTVj9.js";const S=s=>s==="defer"||s===!1;function T(...s){var p;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[a,f,e={}]=s;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=P(),j=f,w=()=>d.value,b=()=>t.isHydrating?t.payload.data[a]:t.static.data[a];e.server=e.server??!0,e.default=e.default??w,e.getCachedData=e.getCachedData??b,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??d.deep,e.dedupe=e.dedupe??"cancel";const u=e.getCachedData(a,t),h=u!=null;if(!t._asyncData[a]||!e.immediate){(p=t.payload._errors)[a]??(p[a]=d.errorValue);const i=e.deep?_:C;t._asyncData[a]={data:i(h?u:e.default()),pending:_(!h),error:B(t.payload._errors,a),status:_("idle"),_default:e.default}}const n={...t._asyncData[a]};delete n._default,n.refresh=n.execute=(i={})=>{if(t._asyncDataPromises[a]){if(S(i.dedupe??e.dedupe))return t._asyncDataPromises[a];t._asyncDataPromises[a].cancelled=!0}if(i._initial||t.isHydrating&&i._initial!==!1){const c=i._initial?u:e.getCachedData(a,t);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,o)=>{try{c(j(t))}catch(y){o(y)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[a];let o=c;e.transform&&(o=await e.transform(c)),e.pick&&(o=K(o,e.pick)),t.payload.data[a]=o,n.data.value=o,n.error.value=d.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[a];n.error.value=H(c),n.data.value=R(e.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[a])});return t._asyncDataPromises[a]=l,t._asyncDataPromises[a]},n.clear=()=>x(t,a);const m=()=>n.refresh({_initial:!0}),D=e.server!==!1&&t.payload.serverRendered;{const i=V();if(i&&D&&e.immediate&&!i.sp&&(i.sp=[]),i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const o=i._nuxtOnBeforeMountCbs;z(()=>{o.forEach(y=>{y()}),o.splice(0,o.length)}),N(()=>o.splice(0,o.length))}D&&t.isHydrating&&(n.error.value||u!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):i&&(t.payload.serverRendered&&t.isHydrating||e.lazy)&&e.immediate?i._nuxtOnBeforeMountCbs.push(m):e.immediate&&m();const l=E();if(e.watch){const o=O(e.watch,()=>n.refresh());l&&v(o)}const c=t.hook("app:data:refresh",async o=>{(!o||o.includes(a))&&await n.refresh()});l&&v(c)}const g=Promise.resolve(t._asyncDataPromises[a]).then(()=>n);return Object.assign(g,n),g}async function U(s){await new Promise(a=>M(a)),await P().hooks.callHookParallel("app:data:refresh",void 0)}function x(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=d.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=void 0,s._asyncData[r].error.value=d.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function K(s,r){const a={};for(const f of r)a[f]=s[f];return a}const W={content:"v3.2.0--UWr3d76eKB",json:"v3.2.0--8yg4XBz6Ij"},X={content:"_content_content",json:"_content_json",info:"_content_info"},F={content:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},json:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},info:{type:"data",fields:{}}};export{F as a,W as c,U as r,X as t,T as u};
