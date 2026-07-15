var BZTooltips=(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var t={ammo:`กระสุน`,durability:`ความทนทาน`,serial:`ซีเรียล`,owner:`เจ้าของ`,equipped:`สวมใส่`,slot:`ช่อง`},n=e=>typeof e==`object`&&e?JSON.stringify(e):String(e),r=e=>{if(!e||typeof e!=`object`)return[];let r=[];for(let[i,a]of Object.entries(e))i.startsWith(`_`)||a!=null&&r.push({key:i,label:t[i]||i,value:n(a)});return r},i=`
:host {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2147483647;
    display: block;
    width: 330px;
    visibility: hidden;
    pointer-events: none;
    user-select: none;
    color: #f5f5f5;
    font-family: "Kanit", system-ui, sans-serif;
    contain: layout style;
}

:host([open]) {
    visibility: visible;
}

*, *::before, *::after {
    box-sizing: border-box;
}

.tooltip {
    position: relative;
    width: 330px;
    overflow: hidden;
    border: 1px solid #2a2a2e;
    border-radius: 16px;
    background: #111111;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
}

.background,
.glow {
    position: absolute;
    z-index: 0;
    pointer-events: none;
    animation: bz-tooltip-pulse 2s ease-in-out infinite;
}

.background {
    top: 0;
    left: 0;
    width: 330px;
}

.glow {
    top: -20px;
    right: -80px;
    width: 300px;
    height: 200px;
    object-fit: contain;
    opacity: 0.4;
    filter: blur(40px);
}

.header,
.details {
    position: relative;
    z-index: 1;
}

.header {
    display: flex;
    gap: 12px;
    padding: 12px;
}

.title-wrap {
    display: flex;
    flex: 1;
    min-width: 0;
    margin-right: 14px;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
}

.title {
    overflow-wrap: anywhere;
    font-size: 20px;
    line-height: 1.375;
}

.category {
    color: #46ecd5;
    font-size: 10px;
    line-height: 1;
}

.item-image {
    width: 90px;
    height: 90px;
    flex: 0 0 auto;
    object-fit: contain;
}

.details {
    display: flex;
    padding: 12px;
    flex-direction: column;
    gap: 6px;
}

.description {
    margin-bottom: 8px;
    color: #838383;
    font-size: 14px;
    line-height: 1.45;
    overflow-wrap: anywhere;
    white-space: pre-line;
}

.description highlight {
    color: #46ecd5;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 2px 8px;
    border-radius: 12px;
    background: rgba(31, 31, 31, 0.63);
    font-size: 14px;
    line-height: 1.45;
}

.row-label {
    color: #737373;
}

.row-value {
    min-width: 0;
    color: #d4d4d4;
    font-weight: 500;
    text-align: right;
    overflow-wrap: anywhere;
    font-variant-numeric: tabular-nums;
}

.metadata-title {
    margin-top: 4px;
    color: #46ecd5;
    font-size: 11px;
}

@keyframes bz-tooltip-pulse {
    0%, 100% { opacity: 0.45; }
    50% { opacity: 0.8; }
}

@media (prefers-reduced-motion: reduce) {
    .background,
    .glow {
        animation: none;
    }
}
`;function a(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function o(e,t){a(e,t),t.add(e)}function s(e,t,n){a(e,t),t.set(e,n)}function c(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function l(e,t,n){return e.set(c(e,t),n),n}function u(e,t){return e.get(c(e,t))}var d=`bz-item-tooltip`,f=10,p=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`),m=e=>p(e).replace(/&lt;highlight&gt;/gi,`<highlight>`).replace(/&lt;\/highlight&gt;/gi,`</highlight>`),h=e=>e&&CSS.supports(`color`,e)?e:`#f5f5f5`,g=e=>`clientX`in e?{x:e.clientX,y:e.clientY}:e,_=new WeakMap,v=new WeakMap,y=new WeakMap,b=new WeakMap,x=new WeakSet,S=class extends HTMLElement{constructor(){super(),o(this,x),s(this,_,void 0),s(this,v,null),s(this,y,!0),s(this,b,e=>{this.move(e)}),l(_,this,this.attachShadow({mode:`open`}))}connectedCallback(){c(x,this,C).call(this)}disconnectedCallback(){window.removeEventListener(`pointermove`,u(b,this))}show(e,t,n={}){l(v,this,e),l(y,this,n.followCursor??!0),this.dataset.rawItemId=e.rawItemId,c(x,this,C).call(this),this.setAttribute(`open`,``),this.move(t),window.removeEventListener(`pointermove`,u(b,this)),u(y,this)&&window.addEventListener(`pointermove`,u(b,this))}hide(){this.removeAttribute(`open`),window.removeEventListener(`pointermove`,u(b,this))}move(e){let{x:t,y:n}=g(e),r=this.offsetWidth,i=this.offsetHeight,a=t+f,o=n+f;a+r+f>window.innerWidth&&(a=window.innerWidth-r-f),o+i+f>window.innerHeight&&(o=window.innerHeight-i-f),a=Math.max(f,a),o=Math.max(f,o),this.style.transform=`translate(${a}px, ${o}px)`}};function C(){let e=u(v,this);if(!e){u(_,this).innerHTML=`<style>${i}</style>`;return}let t=r(e.metadata),n=e.description?`<div class="description">${m(e.description)}</div>`:``,a=e.category?`<div class="category">${p(e.category)}</div>`:``,o=e.backgroundUrl?`<img class="background" src="${p(e.backgroundUrl)}" alt="">`:`<img class="glow" src="${p(e.imageUrl)}" alt="">`,s=e.weight===void 0?``:c(x,this,w).call(this,`น้ำหนัก`,`${(e.weight*e.count).toFixed(1)} kg`),l=t.length>0?`
                <div class="metadata-title">ข้อมูลเพิ่มเติม</div>
                ${t.map(e=>c(x,this,w).call(this,e.label,e.value)).join(``)}
            `:``,d=`${e.count.toLocaleString()}${e.limit===void 0?``:` / ${e.limit.toLocaleString()}`}`;u(_,this).innerHTML=`
            <style>${i}</style>
            <article class="tooltip" role="tooltip">
                ${o}
                <header class="header">
                    <div class="title-wrap">
                        <div class="title" style="color: ${p(h(e.labelColor))}">
                            ${p(e.label)}
                        </div>
                        ${a}
                    </div>
                    <img class="item-image" src="${p(e.imageUrl)}" alt="${p(e.label)}">
                </header>
                <section class="details">
                    ${n}
                    ${c(x,this,w).call(this,`จำนวน`,d)}
                    ${s}
                    ${l}
                </section>
            </article>
        `}function w(e,t){return`
            <div class="row">
                <span class="row-label">${p(e)}</span>
                <span class="row-value">${p(t)}</span>
            </div>
        `}var T=()=>{customElements.get(`bz-item-tooltip`)||customElements.define(d,S)},E=`https://raw.githubusercontent.com/BZ-Developer-Team/bz-axie-assets/refs/heads/main`,D=`common`,O=e=>e.replace(/\/+$/,``),k=(e,t,n)=>{let r=O(e);return`${r.endsWith(`/${t}`)?r:`${r}/${t}`}/${encodeURIComponent(n)}.webp`},A=e=>{if(!e)return{itemId:``,itemUuid:void 0};let[t,n]=e.split(`*`);return{itemId:t,itemUuid:n}},j=(e,t=E)=>k(t,`items`,A(e).itemId),M=(e,t=E)=>k(t,`item_bg_rarity`,e),N=(e,t=E)=>k(t,`item_bg_tooltip`,e),P=e=>{if(!e||e.length<3)return;let[t,n,r]=e;return`rgb(${t}, ${n}, ${r})`},F=(e,t)=>{let n=A(e).itemId;return t?.ItemRarity?.[n]||D},I=(e,t)=>{let n=F(e,t);return t?.Rarity?.[n]??t?.Rarity?.[D]??null},L=(e,t)=>P(I(e,t)?.label),R=(e,t)=>P(I(e,t)?.hover),z=(e,t)=>{let n=A(e).itemId,r=t?.Category;if(!(!r?.Menu||!r.Items)){for(let e of r.Menu)if(e.Id!==`All`&&(r.Items[e.Id]||[]).includes(n))return e.Name}},B=(e,t={})=>{let n=A(e).itemId,r=t.config,i=t.item,a=t.itemConfig,o=I(e,r),s=t.assetBaseUrl||r?.Image?.CDN||`https://raw.githubusercontent.com/BZ-Developer-Team/bz-axie-assets/refs/heads/main`,c=t.overrides||{};return{rawItemId:e,label:c.label??a?.label??e,imageUrl:c.imageUrl??j(e,s),count:c.count??i?.count??a?.count??0,limit:c.limit??a?.limit,weight:c.weight??a?.weight,category:c.category??z(n,r),description:c.description??r?.Description?.[n]??r?.Description?.Default,labelColor:c.labelColor??P(o?.label),backgroundUrl:c.backgroundUrl??o?.tooltip_bg,metadata:c.metadata??i?.metadata??a?.metadata}},V=(e,t)=>{let n=0,r=Object.keys(e).length;for(let[r,i]of Object.entries(e)){let e=t[A(r).itemId]?.weight??0;n+=e*(i.count??0)}return{totalWeight:n,slots:r}},H=null,U=()=>H?.isConnected?H:(T(),H=document.createElement(d),(document.body||document.documentElement).append(H),H),W=(e,t,n)=>{let r=U();return r.show(e,t,n),r},G=()=>{H?.hide()},K=(e,t,n={})=>{let r,i=()=>{r!==void 0&&clearTimeout(r),r=void 0},a=e=>{let a=e,o=t(a);if(!o)return;i();let s=()=>{W(o,a,n)};(n.delay??0)>0?r=setTimeout(s,n.delay):s()},o=()=>{i(),G()},s=()=>{(n.hideOnPointerDown??!0)&&o()};return e.addEventListener(`pointerenter`,a),e.addEventListener(`pointerleave`,o),e.addEventListener(`pointerdown`,s),()=>{i(),e.removeEventListener(`pointerenter`,a),e.removeEventListener(`pointerleave`,o),e.removeEventListener(`pointerdown`,s)}},q=`bz-tooltip-trigger`,J=new WeakMap,Y=new WeakMap,X=new WeakMap,Z=class extends HTMLElement{constructor(...e){super(...e),s(this,J,null),s(this,Y,null),s(this,X,{followCursor:!0,hideOnPointerDown:!0,delay:0})}get item(){return u(J,this)}set item(e){l(J,this,e)}get delay(){return u(X,this).delay??0}set delay(e){u(X,this).delay=Number.isFinite(e)?Math.max(0,e):0}get followCursor(){return u(X,this).followCursor??!0}set followCursor(e){u(X,this).followCursor=e}connectedCallback(){this.style.display||(this.style.display=`contents`),u(Y,this)?.call(this),l(Y,this,K(this,()=>u(J,this),u(X,this)))}disconnectedCallback(){u(Y,this)?.call(this),l(Y,this,null)}},Q=()=>{customElements.get(`bz-tooltip-trigger`)||customElements.define(q,Z)};return typeof window<`u`&&`customElements`in window&&(T(),Q()),e.BZTooltipElement=S,e.BZTooltipTriggerElement=Z,e.BZ_TOOLTIP_TAG=d,e.BZ_TOOLTIP_TRIGGER_TAG=q,e.DEFAULT_ASSET_BASE_URL=E,e.bindTooltip=K,e.calculateInventoryStats=V,e.defineBZTooltip=T,e.defineBZTooltipTrigger=Q,e.getImageUrl=j,e.getItemCategory=z,e.getMetadataRows=r,e.getRarityData=I,e.getRarityHoverColor=R,e.getRarityImageUrl=M,e.getRarityLabelColor=L,e.getRarityName=F,e.getTooltipImageUrl=N,e.hideTooltip=G,e.parseRawItemId=A,e.resolveTooltipItem=B,e.rgbToCss=P,e.showTooltip=W,e})({});
//# sourceMappingURL=bz-tooltips.iife.js.map