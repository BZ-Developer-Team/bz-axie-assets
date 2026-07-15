//#region src/metadata-formatter.ts
var e = {
	ammo: "กระสุน",
	durability: "ความทนทาน",
	serial: "ซีเรียล",
	owner: "เจ้าของ",
	equipped: "สวมใส่",
	slot: "ช่อง"
}, t = (e) => typeof e == "object" && e ? JSON.stringify(e) : String(e), n = (n) => {
	if (!n || typeof n != "object") return [];
	let r = [];
	for (let [i, a] of Object.entries(n)) i.startsWith("_") || a != null && r.push({
		key: i,
		label: e[i] || i,
		value: t(a)
	});
	return r;
}, r = "\n:host {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 2147483647;\n    display: block;\n    width: 330px;\n    visibility: hidden;\n    pointer-events: none;\n    user-select: none;\n    color: #f5f5f5;\n    font-family: \"Kanit\", system-ui, sans-serif;\n    contain: layout style;\n}\n\n:host([open]) {\n    visibility: visible;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n.tooltip {\n    position: relative;\n    width: 330px;\n    overflow: hidden;\n    border: 1px solid #2a2a2e;\n    border-radius: 16px;\n    background: #111111;\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);\n}\n\n.background,\n.glow {\n    position: absolute;\n    z-index: 0;\n    pointer-events: none;\n    animation: bz-tooltip-pulse 2s ease-in-out infinite;\n}\n\n.background {\n    top: 0;\n    left: 0;\n    width: 330px;\n}\n\n.glow {\n    top: -20px;\n    right: -80px;\n    width: 300px;\n    height: 200px;\n    object-fit: contain;\n    opacity: 0.4;\n    filter: blur(40px);\n}\n\n.header,\n.details {\n    position: relative;\n    z-index: 1;\n}\n\n.header {\n    display: flex;\n    gap: 12px;\n    padding: 12px;\n}\n\n.title-wrap {\n    display: flex;\n    flex: 1;\n    min-width: 0;\n    margin-right: 14px;\n    flex-direction: column;\n    justify-content: center;\n    gap: 4px;\n}\n\n.title {\n    overflow-wrap: anywhere;\n    font-size: 20px;\n    line-height: 1.375;\n}\n\n.category {\n    color: #46ecd5;\n    font-size: 10px;\n    line-height: 1;\n}\n\n.item-image {\n    width: 90px;\n    height: 90px;\n    flex: 0 0 auto;\n    object-fit: contain;\n}\n\n.details {\n    display: flex;\n    padding: 12px;\n    flex-direction: column;\n    gap: 6px;\n}\n\n.description {\n    margin-bottom: 8px;\n    color: #838383;\n    font-size: 14px;\n    line-height: 1.45;\n    overflow-wrap: anywhere;\n    white-space: pre-line;\n}\n\n.description highlight {\n    color: #46ecd5;\n}\n\n.row {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    padding: 2px 8px;\n    border-radius: 12px;\n    background: rgba(31, 31, 31, 0.63);\n    font-size: 14px;\n    line-height: 1.45;\n}\n\n.row-label {\n    color: #737373;\n}\n\n.row-value {\n    min-width: 0;\n    color: #d4d4d4;\n    font-weight: 500;\n    text-align: right;\n    overflow-wrap: anywhere;\n    font-variant-numeric: tabular-nums;\n}\n\n.metadata-title {\n    margin-top: 4px;\n    color: #46ecd5;\n    font-size: 11px;\n}\n\n@keyframes bz-tooltip-pulse {\n    0%, 100% { opacity: 0.45; }\n    50% { opacity: 0.8; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n    .background,\n    .glow {\n        animation: none;\n    }\n}\n";
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/checkPrivateRedeclaration.js
function i(e, t) {
	if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
}
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/classPrivateMethodInitSpec.js
function a(e, t) {
	i(e, t), t.add(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/classPrivateFieldInitSpec.js
function o(e, t, n) {
	i(e, t), t.set(e, n);
}
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/assertClassBrand.js
function s(e, t, n) {
	if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
	throw TypeError("Private element is not present on this object");
}
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/classPrivateFieldSet2.js
function c(e, t, n) {
	return e.set(s(e, t), n), n;
}
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/classPrivateFieldGet2.js
function l(e, t) {
	return e.get(s(e, t));
}
//#endregion
//#region src/bz-tooltip.ts
var u = "bz-item-tooltip", d = 10, f = (e) => String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), p = (e) => f(e).replace(/&lt;highlight&gt;/gi, "<highlight>").replace(/&lt;\/highlight&gt;/gi, "</highlight>"), m = (e) => e && CSS.supports("color", e) ? e : "#f5f5f5", h = (e) => "clientX" in e ? {
	x: e.clientX,
	y: e.clientY
} : e, g = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakSet(), x = class extends HTMLElement {
	constructor() {
		super(), a(this, b), o(this, g, void 0), o(this, _, null), o(this, v, !0), o(this, y, (e) => {
			this.move(e);
		}), c(g, this, this.attachShadow({ mode: "open" }));
	}
	connectedCallback() {
		s(b, this, S).call(this);
	}
	disconnectedCallback() {
		window.removeEventListener("pointermove", l(y, this));
	}
	show(e, t, n = {}) {
		c(_, this, e), c(v, this, n.followCursor ?? !0), this.dataset.rawItemId = e.rawItemId, s(b, this, S).call(this), this.setAttribute("open", ""), this.move(t), window.removeEventListener("pointermove", l(y, this)), l(v, this) && window.addEventListener("pointermove", l(y, this));
	}
	hide() {
		this.removeAttribute("open"), window.removeEventListener("pointermove", l(y, this));
	}
	move(e) {
		let { x: t, y: n } = h(e), r = this.offsetWidth, i = this.offsetHeight, a = t + d, o = n + d;
		a + r + d > window.innerWidth && (a = window.innerWidth - r - d), o + i + d > window.innerHeight && (o = window.innerHeight - i - d), a = Math.max(d, a), o = Math.max(d, o), this.style.transform = `translate(${a}px, ${o}px)`;
	}
};
function S() {
	let e = l(_, this);
	if (!e) {
		l(g, this).innerHTML = `<style>${r}</style>`;
		return;
	}
	let t = n(e.metadata), i = e.description ? `<div class="description">${p(e.description)}</div>` : "", a = e.category ? `<div class="category">${f(e.category)}</div>` : "", o = e.backgroundUrl ? `<img class="background" src="${f(e.backgroundUrl)}" alt="">` : `<img class="glow" src="${f(e.imageUrl)}" alt="">`, c = e.weight === void 0 ? "" : s(b, this, C).call(this, "น้ำหนัก", `${(e.weight * e.count).toFixed(1)} kg`), u = t.length > 0 ? `
                <div class="metadata-title">ข้อมูลเพิ่มเติม</div>
                ${t.map((e) => s(b, this, C).call(this, e.label, e.value)).join("")}
            ` : "", d = `${e.count.toLocaleString()}${e.limit === void 0 ? "" : ` / ${e.limit.toLocaleString()}`}`;
	l(g, this).innerHTML = `
            <style>${r}</style>
            <article class="tooltip" role="tooltip">
                ${o}
                <header class="header">
                    <div class="title-wrap">
                        <div class="title" style="color: ${f(m(e.labelColor))}">
                            ${f(e.label)}
                        </div>
                        ${a}
                    </div>
                    <img class="item-image" src="${f(e.imageUrl)}" alt="${f(e.label)}">
                </header>
                <section class="details">
                    ${i}
                    ${s(b, this, C).call(this, "จำนวน", d)}
                    ${c}
                    ${u}
                </section>
            </article>
        `;
}
function C(e, t) {
	return `
            <div class="row">
                <span class="row-label">${f(e)}</span>
                <span class="row-value">${f(t)}</span>
            </div>
        `;
}
var w = () => {
	customElements.get("bz-item-tooltip") || customElements.define(u, x);
}, T = "https://raw.githubusercontent.com/BZ-Developer-Team/bz-axie-assets/refs/heads/main", E = "common", D = (e) => e.replace(/\/+$/, ""), O = (e, t, n) => {
	let r = D(e);
	return `${r.endsWith(`/${t}`) ? r : `${r}/${t}`}/${encodeURIComponent(n)}.webp`;
}, k = (e) => {
	if (!e) return {
		itemId: "",
		itemUuid: void 0
	};
	let [t, n] = e.split("*");
	return {
		itemId: t,
		itemUuid: n
	};
}, A = (e, t = T) => O(t, "items", k(e).itemId), j = (e, t = T) => O(t, "item_bg_rarity", e), M = (e, t = T) => O(t, "item_bg_tooltip", e), N = (e) => {
	if (!e || e.length < 3) return;
	let [t, n, r] = e;
	return `rgb(${t}, ${n}, ${r})`;
}, P = (e, t) => {
	let n = k(e).itemId;
	return t?.ItemRarity?.[n] || E;
}, F = (e, t) => {
	let n = P(e, t);
	return t?.Rarity?.[n] ?? t?.Rarity?.[E] ?? null;
}, I = (e, t) => N(F(e, t)?.label), L = (e, t) => N(F(e, t)?.hover), R = (e, t) => {
	let n = k(e).itemId, r = t?.Category;
	if (!(!r?.Menu || !r.Items)) {
		for (let e of r.Menu) if (e.Id !== "All" && (r.Items[e.Id] || []).includes(n)) return e.Name;
	}
}, z = (e, t = {}) => {
	let n = k(e).itemId, r = t.config, i = t.item, a = t.itemConfig, o = F(e, r), s = t.assetBaseUrl || r?.Image?.CDN || "https://raw.githubusercontent.com/BZ-Developer-Team/bz-axie-assets/refs/heads/main", c = t.overrides || {};
	return {
		rawItemId: e,
		label: c.label ?? a?.label ?? e,
		imageUrl: c.imageUrl ?? A(e, s),
		count: c.count ?? i?.count ?? a?.count ?? 0,
		limit: c.limit ?? a?.limit,
		weight: c.weight ?? a?.weight,
		category: c.category ?? R(n, r),
		description: c.description ?? r?.Description?.[n] ?? r?.Description?.Default,
		labelColor: c.labelColor ?? N(o?.label),
		backgroundUrl: c.backgroundUrl ?? o?.tooltip_bg,
		metadata: c.metadata ?? i?.metadata ?? a?.metadata
	};
}, B = (e, t) => {
	let n = 0, r = Object.keys(e).length;
	for (let [r, i] of Object.entries(e)) {
		let e = t[k(r).itemId]?.weight ?? 0;
		n += e * (i.count ?? 0);
	}
	return {
		totalWeight: n,
		slots: r
	};
}, V = null, H = () => V?.isConnected ? V : (w(), V = document.createElement(u), (document.body || document.documentElement).append(V), V), U = (e, t, n) => {
	let r = H();
	return r.show(e, t, n), r;
}, W = () => {
	V?.hide();
}, G = (e, t, n = {}) => {
	let r, i = () => {
		r !== void 0 && clearTimeout(r), r = void 0;
	}, a = (e) => {
		let a = e, o = t(a);
		if (!o) return;
		i();
		let s = () => {
			U(o, a, n);
		};
		(n.delay ?? 0) > 0 ? r = setTimeout(s, n.delay) : s();
	}, o = () => {
		i(), W();
	}, s = () => {
		(n.hideOnPointerDown ?? !0) && o();
	};
	return e.addEventListener("pointerenter", a), e.addEventListener("pointerleave", o), e.addEventListener("pointerdown", s), () => {
		i(), e.removeEventListener("pointerenter", a), e.removeEventListener("pointerleave", o), e.removeEventListener("pointerdown", s);
	};
};
typeof window < "u" && "customElements" in window && w();
//#endregion
export { x as BZTooltipElement, u as BZ_TOOLTIP_TAG, T as DEFAULT_ASSET_BASE_URL, G as bindTooltip, B as calculateInventoryStats, w as defineBZTooltip, A as getImageUrl, R as getItemCategory, n as getMetadataRows, F as getRarityData, L as getRarityHoverColor, j as getRarityImageUrl, I as getRarityLabelColor, P as getRarityName, M as getTooltipImageUrl, W as hideTooltip, k as parseRawItemId, z as resolveTooltipItem, N as rgbToCss, U as showTooltip };

//# sourceMappingURL=bz-tooltips.es.js.map