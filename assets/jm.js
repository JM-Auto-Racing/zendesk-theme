const isMobile = false;
const tabletClass = () => {};

typeof jQuery == "undefined" && (! function(n, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
		if (!n.document) throw new Error("jQuery requires a window with a document");
		return t(n)
	} : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
	"use strict";

	function br(n, t, i) {
		var r, e, u = (i = i || f).createElement("script");
		if (u.text = n, t)
			for (r in oe)(e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
		i.head.appendChild(u).parentNode.removeChild(u)
	}

	function ut(n) {
		return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ri[pr.call(n)] || "object" : typeof n
	}

	function pi(n) {
		var t = !!n && "length" in n && n.length,
			i = ut(n);
		return !u(n) && !rt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
	}

	function c(n, t) {
		return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
	}

	function bi(n, t, r) {
		return u(t) ? i.grep(n, function(n, i) {
			return !!t.call(n, i, n) !== r
		}) : t.nodeType ? i.grep(n, function(n) {
			return n === t !== r
		}) : "string" != typeof t ? i.grep(n, function(n) {
			return -1 < ii.call(t, n) !== r
		}) : i.filter(t, n, r)
	}

	function uu(n, t) {
		while ((n = n[t]) && 1 !== n.nodeType);
		return n
	}

	function et(n) {
		return n
	}

	function fi(n) {
		throw n;
	}

	function fu(n, t, i, r) {
		var f;
		try {
			n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r))
		} catch (n) {
			i.apply(void 0, [n])
		}
	}

	function oi() {
		f.removeEventListener("DOMContentLoaded", oi);
		n.removeEventListener("load", oi);
		i.ready()
	}

	function ce(n, t) {
		return t.toUpperCase()
	}

	function y(n) {
		return n.replace(se, "ms-").replace(he, ce)
	}

	function bt() {
		this.expando = i.expando + bt.uid++
	}

	function ou(n, t, i) {
		var u, r;
		if (void 0 === i && 1 === n.nodeType)
			if (u = "data-" + t.replace(ae, "-$&").toLowerCase(), "string" == typeof(i = n.getAttribute(u))) {
				try {
					i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : le.test(r) ? JSON.parse(r) : r)
				} catch (n) {}
				o.set(n, t, i)
			} else i = void 0;
		return i
	}

	function hu(n, t, r, u) {
		var s, h, c = 20,
			l = u ? function() {
				return u.cur()
			} : function() {
				return i.css(n, t, "")
			},
			o = l(),
			e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
			f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && kt.exec(i.css(n, t));
		if (f && f[3] !== e) {
			for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
			f *= 2;
			i.style(n, t, f + e);
			r = r || []
		}
		return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
	}

	function ht(n, t) {
		for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)(f = n[u]).style && (h = f.style.display, t ? ("none" === h && (o[u] = r.get(f, "display") || null, o[u] || (f.style.display = "")), "" === f.style.display && dt(f) && (o[u] = (e = c = s = void 0, c = (a = f).ownerDocument, l = a.nodeName, (e = ki[l]) || (s = c.body.appendChild(c.createElement(l)), e = i.css(s, "display"), s.parentNode.removeChild(s), "none" === e && (e = "block"), ki[l] = e)))) : "none" !== h && (o[u] = "none", r.set(f, "display", h)));
		for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]);
		return n
	}

	function s(n, t) {
		var r;
		return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && c(n, t) ? i.merge([n], r) : r
	}

	function di(n, t) {
		for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
	}

	function vu(n, t, r, u, f) {
		for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
			if ((e = n[l]) || 0 === e)
				if ("object" === ut(e)) i.merge(y, e.nodeType ? [e] : e);
				else if (au.test(e)) {
			for (o = o || c.appendChild(t.createElement("div")), p = (cu.exec(e) || ["", ""])[1].toLowerCase(), a = h[p] || h._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) o = o.lastChild;
			i.merge(y, o.childNodes);
			(o = c.firstChild).textContent = ""
		} else y.push(t.createTextNode(e));
		for (c.textContent = "", l = 0; e = y[l++];)
			if (u && -1 < i.inArray(e, u)) f && f.push(e);
			else if (w = st(e), o = s(c.appendChild(e), "script"), w && di(o), r)
			for (v = 0; e = o[v++];) lu.test(e.type || "") && r.push(e);
		return c
	}

	function ct() {
		return !0
	}

	function lt() {
		return !1
	}

	function we(n, t) {
		return n === function() {
			try {
				return f.activeElement
			} catch (n) {}
		}() == ("focus" === t)
	}

	function gi(n, t, r, u, f, e) {
		var o, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof r && (u = u || r, r = void 0), t) gi(n, s, r, u, t[s], e);
			return n
		}
		if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = lt;
		else if (!f) return n;
		return 1 === e && (o = f, (f = function(n) {
			return i().off(n), o.apply(this, arguments)
		}).guid = o.guid || (o.guid = i.guid++)), n.each(function() {
			i.event.add(this, t, f, u, r)
		})
	}

	function hi(n, t, u) {
		u ? (r.set(n, t, !1), i.event.add(n, t, {
			namespace: !1,
			handler: function(n) {
				var o, e, f = r.get(this, t);
				if (1 & n.isTrigger && this[t]) {
					if (f.length)(i.event.special[t] || {}).delegateType && n.stopPropagation();
					else if (f = k.call(arguments), r.set(this, t, f), o = u(this, t), this[t](), f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = {}, f !== e) return n.stopImmediatePropagation(), n.preventDefault(), e.value
				} else f.length && (r.set(this, t, {
					value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this)
				}), n.stopImmediatePropagation())
			}
		})) : void 0 === r.get(n, t) && i.event.add(n, t, ct)
	}

	function pu(n, t) {
		return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n
	}

	function ge(n) {
		return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
	}

	function no(n) {
		return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n
	}

	function wu(n, t) {
		var u, s, f, h, c, e;
		if (1 === t.nodeType) {
			if (r.hasData(n) && (e = r.get(n).events))
				for (f in r.remove(t, "handle events"), e)
					for (u = 0, s = e[f].length; u < s; u++) i.event.add(t, f, e[f][u]);
			o.hasData(n) && (h = o.access(n), c = i.extend({}, h), o.set(t, c))
		}
	}

	function at(n, t, f, o) {
		t = yr(t);
		var a, b, l, v, h, y, c = 0,
			p = n.length,
			d = p - 1,
			w = t[0],
			k = u(w);
		if (k || 1 < p && "string" == typeof w && !e.checkClone && ke.test(w)) return n.each(function(i) {
			var r = n.eq(i);
			k && (t[0] = w.call(this, i, r.html()));
			at(r, t, f, o)
		});
		if (p && (b = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild, 1 === a.childNodes.length && (a = b), b || o)) {
			for (v = (l = i.map(s(a, "script"), ge)).length; c < p; c++) h = a, c !== d && (h = i.clone(h, !0, !0), v && i.merge(l, s(h, "script"))), f.call(n[c], h, c);
			if (v)
				for (y = l[l.length - 1].ownerDocument, i.map(l, no), c = 0; c < v; c++) h = l[c], lu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(y, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, {
					nonce: h.nonce || h.getAttribute("nonce")
				}, y) : br(h.textContent.replace(de, ""), h, y))
		}
		return n
	}

	function bu(n, t, r) {
		for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(s(u)), u.parentNode && (r && st(u) && di(s(u, "script")), u.parentNode.removeChild(u));
		return n
	}

	function ni(n, t, r) {
		var o, s, h, f, u = n.style;
		return (r = r || ci(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || st(n) || (f = i.style(n, t)), !e.pixelBoxStyles() && nr.test(f) && to.test(t) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = r.width, u.width = o, u.minWidth = s, u.maxWidth = h)), void 0 !== f ? f + "" : f
	}

	function du(n, t) {
		return {
			get: function() {
				if (!n()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}

	function tr(n) {
		var t = i.cssProps[n] || tf[n];
		return t || (n in nf ? n : tf[n] = function(n) {
			for (var i = n[0].toUpperCase() + n.slice(1), t = gu.length; t--;)
				if ((n = gu[t] + i) in nf) return n
		}(n) || n)
	}

	function ff(n, t, i) {
		var r = kt.exec(t);
		return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
	}

	function ir(n, t, r, u, f, e) {
		var o = "width" === t ? 1 : 0,
			h = 0,
			s = 0;
		if (r === (u ? "border" : "content")) return 0;
		for (; o < 4; o += 2) "margin" === r && (s += i.css(n, r + b[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + b[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + b[o] + "Width", !0, f))) : (s += i.css(n, "padding" + b[o], !0, f), "padding" !== r ? s += i.css(n, "border" + b[o] + "Width", !0, f) : h += i.css(n, "border" + b[o] + "Width", !0, f));
		return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s
	}

	function ef(n, t, r) {
		var f = ci(n),
			o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f),
			s = o,
			u = ni(n, t, f),
			h = "offset" + t[0].toUpperCase() + t.slice(1);
		if (nr.test(u)) {
			if (!r) return u;
			u = "auto"
		}
		return (!e.boxSizingReliable() && o || !e.reliableTrDimensions() && c(n, "tr") || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f), (s = h in n) && (u = n[h])), (u = parseFloat(u) || 0) + ir(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
	}

	function a(n, t, i, r, u) {
		return new a.prototype.init(n, t, i, r, u)
	}

	function rr() {
		li && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(rr) : n.setTimeout(rr, i.fx.interval), i.fx.tick())
	}

	function cf() {
		return n.setTimeout(function() {
			vt = void 0
		}), vt = Date.now()
	}

	function ai(n, t) {
		var u, r = 0,
			i = {
				height: n
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = b[r])] = i["padding" + u] = n;
		return t && (i.opacity = i.width = n), i
	}

	function lf(n, t, i) {
		for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
			if (u = f[r].call(i, t, n)) return u
	}

	function v(n, t, r) {
		var o, s, h = 0,
			a = v.prefilters.length,
			e = i.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (s) return !1;
				for (var o = vt || cf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i);
				return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1)
			},
			f = e.promise({
				elem: n,
				props: i.extend({}, t),
				opts: i.extend(!0, {
					specialEasing: {},
					easing: i.easing._default
				}, r),
				originalProperties: t,
				originalOptions: r,
				startTime: vt || cf(),
				duration: r.duration,
				tweens: [],
				createTween: function(t, r) {
					var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
					return f.tweens.push(u), u
				},
				stop: function(t) {
					var i = 0,
						r = t ? f.tweens.length : 0;
					if (s) return this;
					for (s = !0; i < r; i++) f.tweens[i].run(1);
					return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this
				}
			}),
			c = f.props;
		for (! function(n, t) {
				var r, f, e, u, o;
				for (r in n)
					if (e = t[f = y(r)], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o)
						for (r in u = o.expand(u), delete n[f], u) r in n || (n[r] = u[r], t[r] = e);
					else t[f] = e
			}(c, f.opts.specialEasing); h < a; h++)
			if (o = v.prefilters[h].call(f, n, c, f.opts)) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
		return i.map(c, lf, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(l, {
			elem: n,
			anim: f,
			queue: f.opts.queue
		})), f
	}

	function tt(n) {
		return (n.match(l) || []).join(" ")
	}

	function it(n) {
		return n.getAttribute && n.getAttribute("class") || ""
	}

	function ur(n) {
		return Array.isArray(n) ? n : "string" == typeof n && n.match(l) || []
	}

	function sr(n, t, r, u) {
		var f;
		if (Array.isArray(t)) i.each(t, function(t, i) {
			r || uo.test(n) ? u(n, i) : sr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
		});
		else if (r || "object" !== ut(t)) u(n, t);
		else
			for (f in t) sr(n + "[" + f + "]", t[f], r, u)
	}

	function gf(n) {
		return function(t, i) {
			"string" != typeof t && (i = t, t = "*");
			var r, f = 0,
				e = t.toLowerCase().match(l) || [];
			if (u(i))
				while (r = e[f++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
		}
	}

	function ne(n, t, r, u) {
		function e(s) {
			var h;
			return f[s] = !0, i.each(n[s] || [], function(n, i) {
				var s = i(t, r, u);
				return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
			}), h
		}
		var f = {},
			o = n === hr;
		return e(t.dataTypes[0]) || !f["*"] && e("*")
	}

	function lr(n, t) {
		var r, u, f = i.ajaxSettings.flatOptions || {};
		for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
		return u && i.extend(!0, n, u), n
	}
	var p = [],
		vr = Object.getPrototypeOf,
		k = p.slice,
		yr = p.flat ? function(n) {
			return p.flat.call(n)
		} : function(n) {
			return p.concat.apply([], n)
		},
		yi = p.push,
		ii = p.indexOf,
		ri = {},
		pr = ri.toString,
		ui = ri.hasOwnProperty,
		wr = ui.toString,
		ee = wr.call(Object),
		e = {},
		u = function(n) {
			return "function" == typeof n && "number" != typeof n.nodeType
		},
		rt = function(n) {
			return null != n && n === n.window
		},
		f = n.document,
		oe = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		},
		kr = "3.5.1",
		i = function(n, t) {
			return new i.fn.init(n, t)
		},
		d, wi, nu, tu, iu, ru, l, eu, ei, ot, dt, ki, h, au, vt, li, yt, of, sf, hf, af, pt, vf, yf, pf, fr, er, te, wt, ie, ar, vi, re, ue, fe;
	i.fn = i.prototype = {
		jquery: kr,
		constructor: i,
		length: 0,
		toArray: function() {
			return k.call(this)
		},
		get: function(n) {
			return null == n ? k.call(this) : n < 0 ? this[n + this.length] : this[n]
		},
		pushStack: function(n) {
			var t = i.merge(this.constructor(), n);
			return t.prevObject = this, t
		},
		each: function(n) {
			return i.each(this, n)
		},
		map: function(n) {
			return this.pushStack(i.map(this, function(t, i) {
				return n.call(t, i, t)
			}))
		},
		slice: function() {
			return this.pushStack(k.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(i.grep(this, function(n, t) {
				return (t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(i.grep(this, function(n, t) {
				return t % 2
			}))
		},
		eq: function(n) {
			var i = this.length,
				t = +n + (n < 0 ? i : 0);
			return this.pushStack(0 <= t && t < i ? [this[t]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: yi,
		sort: p.sort,
		splice: p.splice
	};
	i.extend = i.fn.extend = function() {
		var s, f, e, t, o, c, n = arguments[0] || {},
			r = 1,
			l = arguments.length,
			h = !1;
		for ("boolean" == typeof n && (h = n, n = arguments[r] || {}, r++), "object" == typeof n || u(n) || (n = {}), r === l && (n = this, r--); r < l; r++)
			if (null != (s = arguments[r]))
				for (f in s) t = s[f], "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f], c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {}, o = !1, n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
		return n
	};
	i.extend({
		expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(n) {
			throw new Error(n);
		},
		noop: function() {},
		isPlainObject: function(n) {
			var t, i;
			return !(!n || "[object Object]" !== pr.call(n)) && (!(t = vr(n)) || "function" == typeof(i = ui.call(t, "constructor") && t.constructor) && wr.call(i) === ee)
		},
		isEmptyObject: function(n) {
			for (var t in n) return !1;
			return !0
		},
		globalEval: function(n, t, i) {
			br(n, {
				nonce: t && t.nonce
			}, i)
		},
		each: function(n, t) {
			var r, i = 0;
			if (pi(n)) {
				for (r = n.length; i < r; i++)
					if (!1 === t.call(n[i], i, n[i])) break
			} else
				for (i in n)
					if (!1 === t.call(n[i], i, n[i])) break;
			return n
		},
		makeArray: function(n, t) {
			var r = t || [];
			return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : yi.call(r, n)), r
		},
		inArray: function(n, t, i) {
			return null == t ? -1 : ii.call(t, n, i)
		},
		merge: function(n, t) {
			for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
			return n.length = r, n
		},
		grep: function(n, t, i) {
			for (var u = [], r = 0, f = n.length, e = !i; r < f; r++) !t(n[r], r) !== e && u.push(n[r]);
			return u
		},
		map: function(n, t, i) {
			var e, u, r = 0,
				f = [];
			if (pi(n))
				for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
			else
				for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
			return yr(f)
		},
		guid: 1,
		support: e
	});
	"function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
	i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
		ri["[object " + t + "]"] = t.toLowerCase()
	});
	d = function(n) {
		function u(n, t, r, u) {
			var s, y, c, l, p, w, d, v = t && t.ownerDocument,
				a = t ? t.nodeType : 9;
			if (r = r || [], "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a) return r;
			if (!u && (b(t), t = t || i, h)) {
				if (11 !== a && (p = ar.exec(n)))
					if (s = p[1]) {
						if (9 === a) {
							if (!(c = t.getElementById(s))) return r;
							if (c.id === s) return r.push(c), r
						} else if (v && (c = v.getElementById(s)) && et(t, c) && c.id === s) return r.push(c), r
					} else {
						if (p[2]) return k.apply(r, t.getElementsByTagName(n)), r;
						if ((s = p[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
					} if (f.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) {
					if (d = n, v = t, 1 === a && (er.test(n) || yi.test(n))) {
						for ((v = ti.test(n) && ri(t.parentNode) || t) === t && f.scope || ((l = t.getAttribute("id")) ? l = l.replace(pi, wi) : t.setAttribute("id", l = e)), y = (w = ft(n)).length; y--;) w[y] = (l ? "#" + l : ":scope") + " " + pt(w[y]);
						d = w.join(",")
					}
					try {
						return k.apply(r, v.querySelectorAll(d)), r
					} catch (t) {
						lt(n, !0)
					} finally {
						l === e && t.removeAttribute("id")
					}
				}
			}
			return si(n.replace(at, "$1"), t, r, u)
		}

		function yt() {
			var n = [];
			return function i(r, u) {
				return n.push(r + " ") > t.cacheLength && delete i[n.shift()], i[r + " "] = u
			}
		}

		function l(n) {
			return n[e] = !0, n
		}

		function a(n) {
			var t = i.createElement("fieldset");
			try {
				return !!n(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t);
				t = null
			}
		}

		function ii(n, i) {
			for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
		}

		function ki(n, t) {
			var i = t && n,
				r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (i)
				while (i = i.nextSibling)
					if (i === t) return -1;
			return n ? 1 : -1
		}

		function yr(n) {
			return function(t) {
				return "input" === t.nodeName.toLowerCase() && t.type === n
			}
		}

		function pr(n) {
			return function(t) {
				var i = t.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && t.type === n
			}
		}

		function di(n) {
			return function(t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label" in t && t.disabled === n
			}
		}

		function it(n) {
			return l(function(t) {
				return t = +t, l(function(i, r) {
					for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
				})
			})
		}

		function ri(n) {
			return n && "undefined" != typeof n.getElementsByTagName && n
		}

		function gi() {}

		function pt(n) {
			for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
			return i
		}

		function wt(n, t, i) {
			var r = t.dir,
				u = t.next,
				f = u || r,
				o = i && "parentNode" === f,
				s = nr++;
			return t.first ? function(t, i, u) {
				while (t = t[r])
					if (1 === t.nodeType || o) return n(t, i, u);
				return !1
			} : function(t, i, h) {
				var c, l, a, y = [v, s];
				if (h) {
					while (t = t[r])
						if ((1 === t.nodeType || o) && n(t, i, h)) return !0
				} else
					while (t = t[r])
						if (1 === t.nodeType || o)
							if (l = (a = t[e] || (t[e] = {}))[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
							else {
								if ((c = l[f]) && c[0] === v && c[1] === s) return y[2] = c[2];
								if ((l[f] = y)[2] = n(t, i, h)) return !0
							} return !1
			}
		}

		function ui(n) {
			return 1 < n.length ? function(t, i, r) {
				for (var u = n.length; u--;)
					if (!n[u](t, i, r)) return !1;
				return !0
			} : n[0]
		}

		function bt(n, t, i, r, u) {
			for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
			return o
		}

		function fi(n, t, i, r, f, o) {
			return r && !r[e] && (r = fi(r)), f && !f[e] && (f = fi(f, o)), l(function(e, o, s, h) {
				var a, l, v, w = [],
					p = [],
					b = o.length,
					d = e || function(n, t, i) {
						for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
						return i
					}(t || "*", s.nodeType ? [s] : s, []),
					y = !n || !e && t ? d : bt(d, w, n, s, h),
					c = i ? f || (e ? n : b || r) ? [] : o : y;
				if (i && i(y, c, s, h), r)
					for (a = bt(c, p), r(a, [], s, h), l = a.length; l--;)(v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
				if (e) {
					if (f || n) {
						if (f) {
							for (a = [], l = c.length; l--;)(v = c[l]) && a.push(y[l] = v);
							f(null, c = [], a, h)
						}
						for (l = c.length; l--;)(v = c[l]) && -1 < (a = f ? nt(e, v) : w[l]) && (e[a] = !(o[a] = v))
					}
				} else c = bt(c === o ? c.splice(b, c.length) : c), f ? f(null, o, c, h) : k.apply(o, c)
			})
		}

		function ei(n) {
			for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) {
					return n === o
				}, c, !0), a = wt(function(n) {
					return -1 < nt(o, n)
				}, c, !0), f = [function(n, t, i) {
					var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
					return o = null, r
				}]; i < s; i++)
				if (u = t.relative[n[i].type]) f = [wt(ui(f), u)];
				else {
					if ((u = t.filter[n[i].type].apply(null, n[i].matches))[e]) {
						for (r = ++i; r < s; r++)
							if (t.relative[n[r].type]) break;
						return fi(1 < i && ui(f), 1 < i && pt(n.slice(0, i - 1).concat({
							value: " " === n[i - 2].type ? "*" : ""
						})).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
					}
					f.push(u)
				} return ui(f)
		}
		var rt, f, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
			c = n.document,
			v = 0,
			nr = 0,
			hi = yt(),
			ci = yt(),
			li = yt(),
			lt = yt(),
			dt = function(n, t) {
				return n === t && (ut = !0), 0
			},
			tr = {}.hasOwnProperty,
			g = [],
			ir = g.pop,
			rr = g.push,
			k = g.push,
			ai = g.slice,
			nt = function(n, t) {
				for (var i = 0, r = n.length; i < r; i++)
					if (n[i] === t) return i;
				return -1
			},
			gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			r = "[\\x20\\t\\r\\n\\f]",
			tt = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
			ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
			ur = new RegExp(r + "+", "g"),
			at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
			fr = new RegExp("^" + r + "*," + r + "*"),
			yi = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
			er = new RegExp(r + "|>"),
			or = new RegExp(ni),
			sr = new RegExp("^" + tt + "$"),
			vt = {
				ID: new RegExp("^#(" + tt + ")"),
				CLASS: new RegExp("^\\.(" + tt + ")"),
				TAG: new RegExp("^(" + tt + "|[*])"),
				ATTR: new RegExp("^" + vi),
				PSEUDO: new RegExp("^" + ni),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + gt + ")$", "i"),
				needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
			},
			hr = /HTML$/i,
			cr = /^(?:input|select|textarea|button)$/i,
			lr = /^h\d$/i,
			ot = /^[^{]+\{\s*\[native \w/,
			ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ti = /[+~]/,
			y = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
			p = function(n, t) {
				var i = "0x" + n.slice(1) - 65536;
				return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
			},
			pi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			wi = function(n, t) {
				return t ? "\0" === n ? "?" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
			},
			bi = function() {
				b()
			},
			vr = wt(function(n) {
				return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase()
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			k.apply(g = ai.call(c.childNodes), c.childNodes);
			g[c.childNodes.length].nodeType
		} catch (rt) {
			k = {
				apply: g.length ? function(n, t) {
					rr.apply(n, ai.call(t))
				} : function(n, t) {
					for (var i = n.length, r = 0; n[i++] = t[r++];);
					n.length = i - 1
				}
			}
		}
		for (rt in f = u.support = {}, oi = u.isXML = function(n) {
				var i = n.namespaceURI,
					t = (n.ownerDocument || n).documentElement;
				return !hr.test(i || t && t.nodeName || "HTML")
			}, b = u.setDocument = function(n) {
				var v, u, l = n ? n.ownerDocument || n : c;
				return l != i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement, h = !oi(i), c != i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", bi, !1) : u.attachEvent && u.attachEvent("onunload", bi)), f.scope = a(function(n) {
					return s.appendChild(n).appendChild(i.createElement("div")), "undefined" != typeof n.querySelectorAll && !n.querySelectorAll(":scope fieldset div").length
				}), f.attributes = a(function(n) {
					return n.className = "i", !n.getAttribute("className")
				}), f.getElementsByTagName = a(function(n) {
					return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
				}), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) {
					return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length
				}), f.getById ? (t.filter.ID = function(n) {
					var t = n.replace(y, p);
					return function(n) {
						return n.getAttribute("id") === t
					}
				}, t.find.ID = function(n, t) {
					if ("undefined" != typeof t.getElementById && h) {
						var i = t.getElementById(n);
						return i ? [i] : []
					}
				}) : (t.filter.ID = function(n) {
					var t = n.replace(y, p);
					return function(n) {
						var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
						return i && i.value === t
					}
				}, t.find.ID = function(n, t) {
					if ("undefined" != typeof t.getElementById && h) {
						var r, u, f, i = t.getElementById(n);
						if (i) {
							if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
							for (f = t.getElementsByName(n), u = 0; i = f[u++];)
								if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
						}
						return []
					}
				}), t.find.TAG = f.getElementsByTagName ? function(n, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0
				} : function(n, t) {
					var i, r = [],
						f = 0,
						u = t.getElementsByTagName(n);
					if ("*" === n) {
						while (i = u[f++]) 1 === i.nodeType && r.push(i);
						return r
					}
					return u
				}, t.find.CLASS = f.getElementsByClassName && function(n, t) {
					if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
				}, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
					var t;
					s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
					n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
					n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
					n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
					(t = i.createElement("input")).setAttribute("name", "");
					n.appendChild(t);
					n.querySelectorAll("[name='']").length || o.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")");
					n.querySelectorAll(":checked").length || o.push(":checked");
					n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]");
					n.querySelectorAll("\\\f");
					o.push("[\\r\\n\\f]")
				}), a(function(n) {
					n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
					var t = i.createElement("input");
					t.setAttribute("type", "hidden");
					n.appendChild(t).setAttribute("name", "D");
					n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
					2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
					s.appendChild(n).disabled = !0;
					2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
					n.querySelectorAll("*,:x");
					o.push(",.*:")
				})), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
					f.disconnectedMatch = ct.call(n, "*");
					ct.call(n, "[s!='']:x");
					d.push("!=", ni)
				}), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
					var r = 9 === n.nodeType ? n.documentElement : n,
						i = t && t.parentNode;
					return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
				} : function(n, t) {
					if (t)
						while (t = t.parentNode)
							if (t === n) return !0;
					return !1
				}, dt = v ? function(n, t) {
					if (n === t) return ut = !0, 0;
					var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
					return r || (1 & (r = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(n) === r ? n == i || n.ownerDocument == c && et(c, n) ? -1 : t == i || t.ownerDocument == c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
				} : function(n, t) {
					if (n === t) return ut = !0, 0;
					var r, u = 0,
						o = n.parentNode,
						s = t.parentNode,
						f = [n],
						e = [t];
					if (!o || !s) return n == i ? -1 : t == i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
					if (o === s) return ki(n, t);
					for (r = n; r = r.parentNode;) f.unshift(r);
					for (r = t; r = r.parentNode;) e.unshift(r);
					while (f[u] === e[u]) u++;
					return u ? ki(f[u], e[u]) : f[u] == c ? -1 : e[u] == c ? 1 : 0
				}), i
			}, u.matches = function(n, t) {
				return u(n, null, null, t)
			}, u.matchesSelector = function(n, t) {
				if (b(n), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
					var r = ct.call(n, t);
					if (r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
				} catch (n) {
					lt(t, !0)
				}
				return 0 < u(t, i, null, [n]).length
			}, u.contains = function(n, t) {
				return (n.ownerDocument || n) != i && b(n), et(n, t)
			}, u.attr = function(n, r) {
				(n.ownerDocument || n) != i && b(n);
				var e = t.attrHandle[r.toLowerCase()],
					u = e && tr.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
				return void 0 !== u ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
			}, u.escape = function(n) {
				return (n + "").replace(pi, wi)
			}, u.error = function(n) {
				throw new Error("Syntax error, unrecognized expression: " + n);
			}, u.uniqueSort = function(n) {
				var r, u = [],
					t = 0,
					i = 0;
				if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(dt), ut) {
					while (r = n[i++]) r === n[i] && (t = u.push(i));
					while (t--) n.splice(u[t], 1)
				}
				return w = null, n
			}, st = u.getText = function(n) {
				var r, i = "",
					u = 0,
					t = n.nodeType;
				if (t) {
					if (1 === t || 9 === t || 11 === t) {
						if ("string" == typeof n.textContent) return n.textContent;
						for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
					} else if (3 === t || 4 === t) return n.nodeValue
				} else
					while (r = n[u++]) i += st(r);
				return i
			}, (t = u.selectors = {
				cacheLength: 50,
				createPseudo: l,
				match: vt,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(n) {
						return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
					},
					CHILD: function(n) {
						return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
					},
					PSEUDO: function(n) {
						var i, t = !n[6] && n[2];
						return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
					}
				},
				filter: {
					TAG: function(n) {
						var t = n.replace(y, p).toLowerCase();
						return "*" === n ? function() {
							return !0
						} : function(n) {
							return n.nodeName && n.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(n) {
						var t = hi[n + " "];
						return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
							return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
						})
					},
					ATTR: function(n, t, i) {
						return function(r) {
							var f = u.attr(r, n);
							return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(ur, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(n, t, i, r, u) {
						var s = "nth" !== n.slice(0, 3),
							o = "last" !== n.slice(-4),
							f = "of-type" === t;
						return 1 === r && 0 === u ? function(n) {
							return !!n.parentNode
						} : function(t, i, h) {
							var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling",
								k = t.parentNode,
								nt = f && t.nodeName.toLowerCase(),
								g = !h && !f,
								l = !1;
							if (k) {
								if (s) {
									while (b) {
										for (c = t; c = c[b];)
											if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
										w = b = "only" === n && !w && "nextSibling"
									}
									return !0
								}
								if (w = [o ? k.firstChild : k.lastChild], o && g) {
									for (l = (a = (p = (d = (y = (c = k)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop();)
										if (1 === c.nodeType && ++l && c === t) {
											d[n] = [v, a, l];
											break
										}
								} else if (g && (l = a = (p = (d = (y = (c = t)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l)
									while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
										if ((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
								return (l -= u) === r || l % r == 0 && 0 <= l / r
							}
						}
					},
					PSEUDO: function(n, i) {
						var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
						return r[e] ? r(i) : 1 < r.length ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
							for (var e, u = r(n, i), f = u.length; f--;) n[e = nt(n, u[f])] = !(t[e] = u[f])
						}) : function(n) {
							return r(n, 0, f)
						}) : r
					}
				},
				pseudos: {
					not: l(function(n) {
						var t = [],
							r = [],
							i = kt(n.replace(at, "$1"));
						return i[e] ? l(function(n, t, r, u) {
							for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
						}) : function(n, u, f) {
							return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
						}
					}),
					has: l(function(n) {
						return function(t) {
							return 0 < u(n, t).length
						}
					}),
					contains: l(function(n) {
						return n = n.replace(y, p),
							function(t) {
								return -1 < (t.textContent || st(t)).indexOf(n)
							}
					}),
					lang: l(function(n) {
						return sr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
							function(t) {
								var i;
								do
									if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var i = n.location && n.location.hash;
						return i && i.slice(1) === t.id
					},
					root: function(n) {
						return n === s
					},
					focus: function(n) {
						return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
					},
					enabled: di(!1),
					disabled: di(!0),
					checked: function(n) {
						var t = n.nodeName.toLowerCase();
						return "input" === t && !!n.checked || "option" === t && !!n.selected
					},
					selected: function(n) {
						return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
					},
					empty: function(n) {
						for (n = n.firstChild; n; n = n.nextSibling)
							if (n.nodeType < 6) return !1;
						return !0
					},
					parent: function(n) {
						return !t.pseudos.empty(n)
					},
					header: function(n) {
						return lr.test(n.nodeName)
					},
					input: function(n) {
						return cr.test(n.nodeName)
					},
					button: function(n) {
						var t = n.nodeName.toLowerCase();
						return "input" === t && "button" === n.type || "button" === t
					},
					text: function(n) {
						var t;
						return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: it(function() {
						return [0]
					}),
					last: it(function(n, t) {
						return [t - 1]
					}),
					eq: it(function(n, t, i) {
						return [i < 0 ? i + t : i]
					}),
					even: it(function(n, t) {
						for (var i = 0; i < t; i += 2) n.push(i);
						return n
					}),
					odd: it(function(n, t) {
						for (var i = 1; i < t; i += 2) n.push(i);
						return n
					}),
					lt: it(function(n, t, i) {
						for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) n.push(r);
						return n
					}),
					gt: it(function(n, t, i) {
						for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
						return n
					})
				}
			}).pseudos.nth = t.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) t.pseudos[rt] = yr(rt);
		for (rt in {
				submit: !0,
				reset: !0
			}) t.pseudos[rt] = pr(rt);
		return gi.prototype = t.filters = t.pseudos, t.setFilters = new gi, ft = u.tokenize = function(n, i) {
			var e, f, s, o, r, h, c, l = ci[n + " "];
			if (l) return i ? 0 : l.slice(0);
			for (r = n, h = [], c = t.preFilter; r;) {
				for (o in e && !(f = fr.exec(r)) || (f && (r = r.slice(f[0].length) || r), h.push(s = [])), e = !1, (f = yi.exec(r)) && (e = f.shift(), s.push({
						value: e,
						type: f[0].replace(at, " ")
					}), r = r.slice(e.length)), t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
					value: e,
					type: o,
					matches: f
				}), r = r.slice(e.length));
				if (!e) break
			}
			return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
		}, kt = u.compile = function(n, r) {
			var s, c, a, o, y, p, w = [],
				d = [],
				f = li[n + " "];
			if (!f) {
				for (r || (r = ft(n)), s = r.length; s--;)(f = ei(r[s]))[e] ? w.push(f) : d.push(f);
				(f = li(n, (c = d, o = 0 < (a = w).length, y = 0 < c.length, p = function(n, r, f, e, s) {
					var l, nt, d, g = 0,
						p = "0",
						tt = n && [],
						w = [],
						it = ht,
						rt = n || y && t.find.TAG("*", s),
						ut = v += null == it ? 1 : Math.random() || .1,
						ft = rt.length;
					for (s && (ht = r == i || r || s); p !== ft && null != (l = rt[p]); p++) {
						if (y && l) {
							for (nt = 0, r || l.ownerDocument == i || (b(l), f = !h); d = c[nt++];)
								if (d(l, r || i, f)) {
									e.push(l);
									break
								} s && (v = ut)
						}
						o && ((l = !d && l) && g--, n && tt.push(l))
					}
					if (g += p, o && p !== g) {
						for (nt = 0; d = a[nt++];) d(tt, w, r, f);
						if (n) {
							if (0 < g)
								while (p--) tt[p] || w[p] || (w[p] = ir.call(e));
							w = bt(w)
						}
						k.apply(e, w);
						s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e)
					}
					return s && (v = ut, ht = it), tt
				}, o ? l(p) : p))).selector = n
			}
			return f
		}, si = u.select = function(n, i, r, u) {
			var o, f, e, l, a, c = "function" == typeof n && n,
				s = !u && ft(n = c.selector || n);
			if (r = r || [], 1 === s.length) {
				if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
					if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
					c && (i = i.parentNode);
					n = n.slice(f.shift().value.length)
				}
				for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
					if (e = f[o], t.relative[l = e.type]) break;
					if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) {
						if (f.splice(o, 1), !(n = u.length && pt(f))) return k.apply(r, u), r;
						break
					}
				}
			}
			return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i), r
		}, f.sortStable = e.split("").sort(dt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) {
			return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
		}), a(function(n) {
			return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
		}) || ii("type|href|height|width", function(n, t, i) {
			if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), f.attributes && a(function(n) {
			return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
		}) || ii("value", function(n, t, i) {
			if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
		}), a(function(n) {
			return null == n.getAttribute("disabled")
		}) || ii(gt, function(n, t, i) {
			var r;
			if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
		}), u
	}(n);
	i.find = d;
	i.expr = d.selectors;
	i.expr[":"] = i.expr.pseudos;
	i.uniqueSort = i.unique = d.uniqueSort;
	i.text = d.getText;
	i.isXMLDoc = d.isXML;
	i.contains = d.contains;
	i.escapeSelector = d.escape;
	var ft = function(n, t, r) {
			for (var u = [], f = void 0 !== r;
				(n = n[t]) && 9 !== n.nodeType;)
				if (1 === n.nodeType) {
					if (f && i(n).is(r)) break;
					u.push(n)
				} return u
		},
		dr = function(n, t) {
			for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
			return i
		},
		gr = i.expr.match.needsContext;
	wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	i.filter = function(n, t, r) {
		var u = t[0];
		return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
			return 1 === n.nodeType
		}))
	};
	i.fn.extend({
		find: function(n) {
			var t, r, u = this.length,
				f = this;
			if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
				for (t = 0; t < u; t++)
					if (i.contains(f[t], this)) return !0
			}));
			for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
			return 1 < u ? i.uniqueSort(r) : r
		},
		filter: function(n) {
			return this.pushStack(bi(this, n || [], !1))
		},
		not: function(n) {
			return this.pushStack(bi(this, n || [], !0))
		},
		is: function(n) {
			return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1).length
		}
	});
	tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(i.fn.init = function(n, t, r) {
		var e, o;
		if (!n) return this;
		if (r = r || nu, "string" == typeof n) {
			if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : tu.exec(n)) || !e[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
			if (e[1]) {
				if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), wi.test(e[1]) && i.isPlainObject(t))
					for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
				return this
			}
			return (o = f.getElementById(e[2])) && (this[0] = o, this.length = 1), this
		}
		return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
	}).prototype = i.fn;
	nu = i(f);
	iu = /^(?:parents|prev(?:Until|All))/;
	ru = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	};
	i.fn.extend({
		has: function(n) {
			var t = i(n, this),
				r = t.length;
			return this.filter(function() {
				for (var n = 0; n < r; n++)
					if (i.contains(this, t[n])) return !0
			})
		},
		closest: function(n, t) {
			var r, f = 0,
				o = this.length,
				u = [],
				e = "string" != typeof n && i(n);
			if (!gr.test(n))
				for (; f < o; f++)
					for (r = this[f]; r && r !== t; r = r.parentNode)
						if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
							u.push(r);
							break
						} return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
		},
		index: function(n) {
			return n ? "string" == typeof n ? ii.call(i(n), this[0]) : ii.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(n, t) {
			return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
		},
		addBack: function(n) {
			return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
		}
	});
	i.each({
		parent: function(n) {
			var t = n.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(n) {
			return ft(n, "parentNode")
		},
		parentsUntil: function(n, t, i) {
			return ft(n, "parentNode", i)
		},
		next: function(n) {
			return uu(n, "nextSibling")
		},
		prev: function(n) {
			return uu(n, "previousSibling")
		},
		nextAll: function(n) {
			return ft(n, "nextSibling")
		},
		prevAll: function(n) {
			return ft(n, "previousSibling")
		},
		nextUntil: function(n, t, i) {
			return ft(n, "nextSibling", i)
		},
		prevUntil: function(n, t, i) {
			return ft(n, "previousSibling", i)
		},
		siblings: function(n) {
			return dr((n.parentNode || {}).firstChild, n)
		},
		children: function(n) {
			return dr(n.firstChild)
		},
		contents: function(n) {
			return null != n.contentDocument && vr(n.contentDocument) ? n.contentDocument : (c(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
		}
	}, function(n, t) {
		i.fn[n] = function(r, u) {
			var f = i.map(this, t, r);
			return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), 1 < this.length && (ru[n] || i.uniqueSort(f), iu.test(n) && f.reverse()), this.pushStack(f)
		}
	});
	l = /[^\x20\t\r\n\f]+/g;
	i.Callbacks = function(n) {
		var a, h;
		n = "string" == typeof n ? (a = n, h = {}, i.each(a.match(l) || [], function(n, t) {
			h[t] = !0
		}), h) : i.extend({}, n);
		var o, r, v, f, t = [],
			s = [],
			e = -1,
			y = function() {
				for (f = f || n.once, v = o = !0; s.length; e = -1)
					for (r = s.shift(); ++e < t.length;) !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length, r = !1);
				n.memory || (r = !1);
				o = !1;
				f && (t = r ? [] : "")
			},
			c = {
				add: function() {
					return t && (r && !o && (e = t.length - 1, s.push(r)), function f(r) {
						i.each(r, function(i, r) {
							u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== ut(r) && f(r)
						})
					}(arguments), r && !o && y()), this
				},
				remove: function() {
					return i.each(arguments, function(n, r) {
						for (var u; - 1 < (u = i.inArray(r, t, u));) t.splice(u, 1), u <= e && e--
					}), this
				},
				has: function(n) {
					return n ? -1 < i.inArray(n, t) : 0 < t.length
				},
				empty: function() {
					return t && (t = []), this
				},
				disable: function() {
					return f = s = [], t = r = "", this
				},
				disabled: function() {
					return !t
				},
				lock: function() {
					return f = s = [], r || o || (t = r = ""), this
				},
				locked: function() {
					return !!f
				},
				fireWith: function(n, t) {
					return f || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), o || y()), this
				},
				fire: function() {
					return c.fireWith(this, arguments), this
				},
				fired: function() {
					return !!v
				}
			};
		return c
	};
	i.extend({
		Deferred: function(t) {
			var f = [
					["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
					["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
				],
				o = "pending",
				e = {
					state: function() {
						return o
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					"catch": function(n) {
						return e.then(null, n)
					},
					pipe: function() {
						var n = arguments;
						return i.Deferred(function(t) {
							i.each(f, function(i, f) {
								var e = u(n[f[4]]) && n[f[4]];
								r[f[1]](function() {
									var n = e && e.apply(this, arguments);
									n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
								})
							});
							n = null
						}).promise()
					},
					then: function(t, r, e) {
						function s(t, r, f, e) {
							return function() {
								var h = this,
									c = arguments,
									l = function() {
										var n, i;
										if (!(t < o)) {
											if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
											i = n && ("object" == typeof n || "function" == typeof n) && n.then;
											u(i) ? e ? i.call(n, s(o, r, et, e), s(o, r, fi, e)) : (o++, i.call(n, s(o, r, et, e), s(o, r, fi, e), s(o, r, et, r.notifyWith))) : (f !== et && (h = void 0, c = [n]), (e || r.resolveWith)(h, c))
										}
									},
									a = e ? l : function() {
										try {
											l()
										} catch (l) {
											i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
											o <= t + 1 && (f !== fi && (h = void 0, c = [l]), r.rejectWith(h, c))
										}
									};
								t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()), n.setTimeout(a))
							}
						}
						var o = 0;
						return i.Deferred(function(n) {
							f[0][3].add(s(0, n, u(e) ? e : et, n.notifyWith));
							f[1][3].add(s(0, n, u(t) ? t : et));
							f[2][3].add(s(0, n, u(r) ? r : fi))
						}).promise()
					},
					promise: function(n) {
						return null != n ? i.extend(n, e) : e
					}
				},
				r = {};
			return i.each(f, function(n, t) {
				var i = t[2],
					u = t[5];
				e[t[1]] = i.add;
				u && i.add(function() {
					o = u
				}, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
				i.add(t[3].fire);
				r[t[0]] = function() {
					return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
				};
				r[t[0] + "With"] = i.fireWith
			}), e.promise(r), t && t.call(r, r), r
		},
		when: function(n) {
			var e = arguments.length,
				t = e,
				o = Array(t),
				f = k.call(arguments),
				r = i.Deferred(),
				s = function(n) {
					return function(t) {
						o[n] = this;
						f[n] = 1 < arguments.length ? k.call(arguments) : t;
						--e || r.resolveWith(o, f)
					}
				};
			if (e <= 1 && (fu(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then();
			while (t--) fu(f[t], s(t), r.reject);
			return r.promise()
		}
	});
	eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	i.Deferred.exceptionHook = function(t, i) {
		n.console && n.console.warn && t && eu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
	};
	i.readyException = function(t) {
		n.setTimeout(function() {
			throw t;
		})
	};
	ei = i.Deferred();
	i.fn.ready = function(n) {
		return ei.then(n)["catch"](function(n) {
			i.readyException(n)
		}), this
	};
	i.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(n) {
			(!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ei.resolveWith(f, [i])
		}
	});
	i.ready.then = ei.then;
	"complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", oi), n.addEventListener("load", oi));
	var w = function(n, t, r, f, e, o, s) {
			var h = 0,
				l = n.length,
				c = null == r;
			if ("object" === ut(r))
				for (h in e = !0, r) w(n, t, h, r[h], !0, o, s);
			else if (void 0 !== f && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function(n, t, r) {
					return c.call(i(n), r)
				})), t))
				for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
			return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
		},
		se = /^-ms-/,
		he = /-([a-z])/g;
	ot = function(n) {
		return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
	};
	bt.uid = 1;
	bt.prototype = {
		cache: function(n) {
			var t = n[this.expando];
			return t || (t = {}, ot(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(n, t, i) {
			var r, u = this.cache(n);
			if ("string" == typeof t) u[y(t)] = i;
			else
				for (r in t) u[y(r)] = t[r];
			return u
		},
		get: function(n, t) {
			return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
		},
		access: function(n, t, i) {
			return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
		},
		remove: function(n, t) {
			var u, r = n[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t)
					for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t)) in r ? [t] : t.match(l) || []).length; u--;) delete r[t[u]];
				(void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
			}
		},
		hasData: function(n) {
			var t = n[this.expando];
			return void 0 !== t && !i.isEmptyObject(t)
		}
	};
	var r = new bt,
		o = new bt,
		le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		ae = /[A-Z]/g;
	i.extend({
		hasData: function(n) {
			return o.hasData(n) || r.hasData(n)
		},
		data: function(n, t, i) {
			return o.access(n, t, i)
		},
		removeData: function(n, t) {
			o.remove(n, t)
		},
		_data: function(n, t, i) {
			return r.access(n, t, i)
		},
		_removeData: function(n, t) {
			r.remove(n, t)
		}
	});
	i.fn.extend({
		data: function(n, t) {
			var f, u, e, i = this[0],
				s = i && i.attributes;
			if (void 0 === n) {
				if (this.length && (e = o.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
					for (f = s.length; f--;) s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)), ou(i, u, e[u]));
					r.set(i, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof n ? this.each(function() {
				o.set(this, n)
			}) : w(this, function(t) {
				var r;
				if (i && void 0 === t) return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = ou(i, n)) ? r : void 0;
				this.each(function() {
					o.set(this, n, t)
				})
			}, null, t, 1 < arguments.length, null, !0)
		},
		removeData: function(n) {
			return this.each(function() {
				o.remove(this, n)
			})
		}
	});
	i.extend({
		queue: function(n, t, u) {
			var f;
			if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
		},
		dequeue: function(n, t) {
			t = t || "fx";
			var r = i.queue(n, t),
				e = r.length,
				u = r.shift(),
				f = i._queueHooks(n, t);
			"inprogress" === u && (u = r.shift(), e--);
			u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, function() {
				i.dequeue(n, t)
			}, f));
			!e && f && f.empty.fire()
		},
		_queueHooks: function(n, t) {
			var u = t + "queueHooks";
			return r.get(n, u) || r.access(n, u, {
				empty: i.Callbacks("once memory").add(function() {
					r.remove(n, [t + "queue", u])
				})
			})
		}
	});
	i.fn.extend({
		queue: function(n, t) {
			var r = 2;
			return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
				var r = i.queue(this, n, t);
				i._queueHooks(this, n);
				"fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
			})
		},
		dequeue: function(n) {
			return this.each(function() {
				i.dequeue(this, n)
			})
		},
		clearQueue: function(n) {
			return this.queue(n || "fx", [])
		},
		promise: function(n, t) {
			var u, e = 1,
				o = i.Deferred(),
				f = this,
				s = this.length,
				h = function() {
					--e || o.resolveWith(f, [f])
				};
			for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
			return h(), o.promise(t)
		}
	});
	var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		kt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$", "i"),
		b = ["Top", "Right", "Bottom", "Left"],
		g = f.documentElement,
		st = function(n) {
			return i.contains(n.ownerDocument, n)
		},
		ve = {
			composed: !0
		};
	g.getRootNode && (st = function(n) {
		return i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument
	});
	dt = function(n, t) {
		return "none" === (n = t || n).style.display || "" === n.style.display && st(n) && "none" === i.css(n, "display")
	};
	ki = {};
	i.fn.extend({
		show: function() {
			return ht(this, !0)
		},
		hide: function() {
			return ht(this)
		},
		toggle: function(n) {
			return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
				dt(this) ? i(this).show() : i(this).hide()
			})
		}
	});
	var nt, si, gt = /^(?:checkbox|radio)$/i,
		cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		lu = /^$|^module$|\/(?:java|ecma)script/i;
	nt = f.createDocumentFragment().appendChild(f.createElement("div"));
	(si = f.createElement("input")).setAttribute("type", "radio");
	si.setAttribute("checked", "checked");
	si.setAttribute("name", "t");
	nt.appendChild(si);
	e.checkClone = nt.cloneNode(!0).cloneNode(!0).lastChild.checked;
	nt.innerHTML = "<textarea>x<\/textarea>";
	e.noCloneChecked = !!nt.cloneNode(!0).lastChild.defaultValue;
	nt.innerHTML = "<option><\/option>";
	e.option = !!nt.lastChild;
	h = {
		thead: [1, "<table>", "<\/table>"],
		col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
		tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
		td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
		_default: [0, "", ""]
	};
	h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
	h.th = h.td;
	e.option || (h.optgroup = h.option = [1, "<select multiple='multiple'>", "<\/select>"]);
	au = /<|&#?\w+;/;
	var ye = /^key/,
		pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		yu = /^([^.]*)(?:\.(.+)|)/;
	i.event = {
		global: {},
		add: function(n, t, u, f, e) {
			var p, a, k, v, w, h, s, c, o, b, d, y = r.get(n);
			if (ot(n))
				for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(g, e), u.guid || (u.guid = i.guid++), (v = y.events) || (v = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(t) {
						if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
					}), w = (t = (t || "").match(l) || [""]).length; w--;) o = d = (k = yu.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
					type: o,
					origType: d,
					data: f,
					handler: u,
					guid: u.guid,
					selector: e,
					needsContext: e && i.expr.match.needsContext.test(e),
					namespace: b.join(".")
				}, p), (c = v[o]) || ((c = v[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, a) || n.addEventListener && n.addEventListener(o, a)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
		},
		remove: function(n, t, u, f, e) {
			var y, k, c, v, p, s, h, a, o, b, d, w = r.hasData(n) && r.get(n);
			if (w && (v = w.events)) {
				for (p = (t = (t || "").match(l) || [""]).length; p--;)
					if (o = d = (c = yu.exec(t[p]) || [])[1], b = (c[2] || "").split(".").sort(), o) {
						for (h = i.event.special[o] || {}, a = v[o = (f ? h.delegateType : h.bindType) || o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, h.remove && h.remove.call(n, s));
						k && !a.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete v[o])
					} else
						for (o in v) i.event.remove(n, o + t[p], u, f, !0);
				i.isEmptyObject(v) && r.remove(n, "handle events")
			}
		},
		dispatch: function(n) {
			var u, h, c, e, f, l, s = new Array(arguments.length),
				t = i.event.fix(n),
				a = (r.get(this, "events") || Object.create(null))[t.type] || [],
				o = i.event.special[t.type] || {};
			for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
			if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
				for (l = i.event.handlers.call(this, t, a), u = 0;
					(e = l[u++]) && !t.isPropagationStopped();)
					for (t.currentTarget = e.elem, h = 0;
						(f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
				return o.postDispatch && o.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(n, t) {
			var f, h, u, e, o, c = [],
				s = t.delegateCount,
				r = n.target;
			if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
				for (; r !== this; r = r.parentNode || this)
					if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
						for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length), o[u] && e.push(h);
						e.length && c.push({
							elem: r,
							handlers: e
						})
					} return r = this, s < t.length && c.push({
				elem: r,
				handlers: t.slice(s)
			}), c
		},
		addProp: function(n, t) {
			Object.defineProperty(i.Event.prototype, n, {
				enumerable: !0,
				configurable: !0,
				get: u(t) ? function() {
					if (this.originalEvent) return t(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[n]
				},
				set: function(t) {
					Object.defineProperty(this, n, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(n) {
			return n[i.expando] ? n : new i.Event(n)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(n) {
					var t = this || n;
					return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ct), !1
				},
				trigger: function(n) {
					var t = this || n;
					return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click"), !0
				},
				_default: function(n) {
					var t = n.target;
					return gt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(n) {
					void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
				}
			}
		}
	};
	i.removeEvent = function(n, t, i) {
		n.removeEventListener && n.removeEventListener(t, i)
	};
	i.Event = function(n, t) {
		if (!(this instanceof i.Event)) return new i.Event(n, t);
		n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ct : lt, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
		t && i.extend(this, t);
		this.timeStamp = n && n.timeStamp || Date.now();
		this[i.expando] = !0
	};
	i.Event.prototype = {
		constructor: i.Event,
		isDefaultPrevented: lt,
		isPropagationStopped: lt,
		isImmediatePropagationStopped: lt,
		isSimulated: !1,
		preventDefault: function() {
			var n = this.originalEvent;
			this.isDefaultPrevented = ct;
			n && !this.isSimulated && n.preventDefault()
		},
		stopPropagation: function() {
			var n = this.originalEvent;
			this.isPropagationStopped = ct;
			n && !this.isSimulated && n.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var n = this.originalEvent;
			this.isImmediatePropagationStopped = ct;
			n && !this.isSimulated && n.stopImmediatePropagation();
			this.stopPropagation()
		}
	};
	i.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(n) {
			var t = n.button;
			return null == n.which && ye.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && pe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
		}
	}, i.event.addProp);
	i.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, t) {
		i.event.special[n] = {
			setup: function() {
				return hi(this, n, we), !1
			},
			trigger: function() {
				return hi(this, n), !0
			},
			delegateType: t
		}
	});
	i.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(n, t) {
		i.event.special[n] = {
			delegateType: t,
			bindType: t,
			handle: function(n) {
				var u, r = n.relatedTarget,
					f = n.handleObj;
				return r && (r === this || i.contains(this, r)) || (n.type = f.origType, u = f.handler.apply(this, arguments), n.type = t), u
			}
		}
	});
	i.fn.extend({
		on: function(n, t, i, r) {
			return gi(this, n, t, i, r)
		},
		one: function(n, t, i, r) {
			return gi(this, n, t, i, r, 1)
		},
		off: function(n, t, r) {
			var u, f;
			if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
			if ("object" == typeof n) {
				for (f in n) this.off(f, t, n[f]);
				return this
			}
			return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = lt), this.each(function() {
				i.event.remove(this, n, r, t)
			})
		}
	});
	var be = /<script|<style|<link/i,
		ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
		de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	i.extend({
		htmlPrefilter: function(n) {
			return n
		},
		clone: function(n, t, r) {
			var u, c, o, f, l, a, v, h = n.cloneNode(!0),
				y = st(n);
			if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
				for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) l = o[u], a = f[u], void 0, "input" === (v = a.nodeName.toLowerCase()) && gt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue);
			if (t)
				if (r)
					for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) wu(o[u], f[u]);
				else wu(n, h);
			return 0 < (f = s(h, "script")).length && di(f, !y && s(n, "script")), h
		},
		cleanData: function(n) {
			for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
				if (ot(t)) {
					if (u = t[r.expando]) {
						if (u.events)
							for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
						t[r.expando] = void 0
					}
					t[o.expando] && (t[o.expando] = void 0)
				}
		}
	});
	i.fn.extend({
		detach: function(n) {
			return bu(this, n, !0)
		},
		remove: function(n) {
			return bu(this, n)
		},
		text: function(n) {
			return w(this, function(n) {
				return void 0 === n ? i.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
				})
			}, null, n, arguments.length)
		},
		append: function() {
			return at(this, arguments, function(n) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pu(this, n).appendChild(n)
			})
		},
		prepend: function() {
			return at(this, arguments, function(n) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = pu(this, n);
					t.insertBefore(n, t.firstChild)
				}
			})
		},
		before: function() {
			return at(this, arguments, function(n) {
				this.parentNode && this.parentNode.insertBefore(n, this)
			})
		},
		after: function() {
			return at(this, arguments, function(n) {
				this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
			})
		},
		empty: function() {
			for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), n.textContent = "");
			return this
		},
		clone: function(n, t) {
			return n = null != n && n, t = null == t ? n : t, this.map(function() {
				return i.clone(this, n, t)
			})
		},
		html: function(n) {
			return w(this, function(n) {
				var t = this[0] || {},
					r = 0,
					u = this.length;
				if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof n && !be.test(n) && !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]) {
					n = i.htmlPrefilter(n);
					try {
						for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)), t.innerHTML = n);
						t = 0
					} catch (n) {}
				}
				t && this.empty().append(n)
			}, null, n, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return at(this, arguments, function(t) {
				var r = this.parentNode;
				i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this))
			}, n)
		}
	});
	i.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(n, t) {
		i.fn[n] = function(n) {
			for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), yi.apply(f, u.get());
			return this.pushStack(f)
		}
	});
	var nr = new RegExp("^(" + su + ")(?!px)[a-z%]+$", "i"),
		ci = function(t) {
			var i = t.ownerDocument.defaultView;
			return i && i.opener || (i = n), i.getComputedStyle(t)
		},
		ku = function(n, t, i) {
			var u, r, f = {};
			for (r in t) f[r] = n.style[r], n.style[r] = t[r];
			for (r in u = i.call(n), t) n.style[r] = f[r];
			return u
		},
		to = new RegExp(b.join("|"), "i");
	! function() {
		function r() {
			if (t) {
				s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
				t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
				g.appendChild(s).appendChild(t);
				var i = n.getComputedStyle(t);
				h = "1%" !== i.top;
				v = 12 === u(i.marginLeft);
				t.style.right = "60%";
				a = 36 === u(i.right);
				c = 36 === u(i.width);
				t.style.position = "absolute";
				l = 12 === u(t.offsetWidth / 3);
				g.removeChild(s);
				t = null
			}
		}

		function u(n) {
			return Math.round(parseFloat(n))
		}
		var h, c, l, a, o, v, s = f.createElement("div"),
			t = f.createElement("div");
		t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(e, {
			boxSizingReliable: function() {
				return r(), c
			},
			pixelBoxStyles: function() {
				return r(), a
			},
			pixelPosition: function() {
				return r(), h
			},
			reliableMarginLeft: function() {
				return r(), v
			},
			scrollboxSize: function() {
				return r(), l
			},
			reliableTrDimensions: function() {
				var t, i, r, u;
				return null == o && (t = f.createElement("table"), i = f.createElement("tr"), r = f.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", r.style.height = "9px", g.appendChild(t).appendChild(i).appendChild(r), u = n.getComputedStyle(i), o = 3 < parseInt(u.height), g.removeChild(t)), o
			}
		}))
	}();
	var gu = ["Webkit", "Moz", "ms"],
		nf = f.createElement("div").style,
		tf = {};
	var io = /^(none|table(?!-c[ea]).+)/,
		rf = /^--/,
		ro = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		uf = {
			letterSpacing: "0",
			fontWeight: "400"
		};
	i.extend({
		cssHooks: {
			opacity: {
				get: function(n, t) {
					if (t) {
						var i = ni(n, "opacity");
						return "" === i ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(n, t, r, u) {
			if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
				var f, h, o, c = y(t),
					l = rf.test(t),
					s = n.style;
				if (l || (t = tr(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
				"string" == (h = typeof r) && (f = kt.exec(r)) && f[1] && (r = hu(n, t, f), h = "number");
				null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")), e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
			}
		},
		css: function(n, t, r, u) {
			var f, e, o, s = y(t);
			return rf.test(t) || (t = tr(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = ni(n, t, u)), "normal" === f && t in uf && (f = uf[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f
		}
	});
	i.each(["height", "width"], function(n, t) {
		i.cssHooks[t] = {
			get: function(n, r, u) {
				if (r) return !io.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? ef(n, t, u) : ku(n, ro, function() {
					return ef(n, t, u)
				})
			},
			set: function(n, r, u) {
				var s, f = ci(n),
					h = !e.scrollboxSize() && "absolute" === f.position,
					c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f),
					o = u ? ir(n, t, u, c, f) : 0;
				return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - ir(n, t, "border", !1, f) - .5)), o && (s = kt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), ff(0, r, o)
			}
		}
	});
	i.cssHooks.marginLeft = du(e.reliableMarginLeft, function(n, t) {
		if (t) return (parseFloat(ni(n, "marginLeft")) || n.getBoundingClientRect().left - ku(n, {
			marginLeft: 0
		}, function() {
			return n.getBoundingClientRect().left
		})) + "px"
	});
	i.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(n, t) {
		i.cssHooks[n + t] = {
			expand: function(i) {
				for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
				return f
			}
		};
		"margin" !== n && (i.cssHooks[n + t].set = ff)
	});
	i.fn.extend({
		css: function(n, t) {
			return w(this, function(n, t, r) {
				var f, e, o = {},
					u = 0;
				if (Array.isArray(t)) {
					for (f = ci(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
					return o
				}
				return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
			}, n, t, 1 < arguments.length)
		}
	});
	((i.Tween = a).prototype = {
		constructor: a,
		init: function(n, t, r, u, f, e) {
			this.elem = n;
			this.prop = r;
			this.easing = f || i.easing._default;
			this.options = t;
			this.start = this.now = this.cur();
			this.end = u;
			this.unit = e || (i.cssNumber[r] ? "" : "px")
		},
		cur: function() {
			var n = a.propHooks[this.prop];
			return n && n.get ? n.get(this) : a.propHooks._default.get(this)
		},
		run: function(n) {
			var t, r = a.propHooks[this.prop];
			return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : a.propHooks._default.set(this), this
		}
	}).init.prototype = a.prototype;
	(a.propHooks = {
		_default: {
			get: function(n) {
				var t;
				return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(n) {
				i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[tr(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
			}
		}
	}).scrollTop = a.propHooks.scrollLeft = {
		set: function(n) {
			n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
		}
	};
	i.easing = {
		linear: function(n) {
			return n
		},
		swing: function(n) {
			return .5 - Math.cos(n * Math.PI) / 2
		},
		_default: "swing"
	};
	i.fx = a.prototype.init;
	i.fx.step = {};
	sf = /^(?:toggle|show|hide)$/;
	hf = /queueHooks$/;
	i.Animation = i.extend(v, {
		tweeners: {
			"*": [function(n, t) {
				var i = this.createTween(n, t);
				return hu(i.elem, n, kt.exec(t), i), i
			}]
		},
		tweener: function(n, t) {
			u(n) ? (t = n, n = ["*"]) : n = n.match(l);
			for (var i, r = 0, f = n.length; r < f; r++) i = n[r], v.tweeners[i] = v.tweeners[i] || [], v.tweeners[i].unshift(t)
		},
		prefilters: [function(n, t, u) {
			var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
				v = this,
				p = {},
				s = n.style,
				a = n.nodeType && dt(n),
				e = r.get(n, "fxshow");
			for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
					c.unqueued || b()
				}), c.unqueued++, v.always(function() {
					v.always(function() {
						c.unqueued--;
						i.queue(n, "fx").length || c.empty.fire()
					})
				})), t)
				if (y = t[f], sf.test(y)) {
					if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
						if ("show" !== y || !e || void 0 === e[f]) continue;
						a = !0
					}
					p[f] = e && e[f] || i.style(n, f)
				} if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
				for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (ht([n], !0), o = n.style.display || o, l = i.css(n, "display"), ht([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() {
						s.display = o
					}), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block")), u.overflow && (s.overflow = "hidden", v.always(function() {
						s.overflow = u.overflow[0];
						s.overflowX = u.overflow[1];
						s.overflowY = u.overflow[2]
					})), h = !1, p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
					display: o
				}), w && (e.hidden = !a), a && ht([n], !0), v.done(function() {
					for (f in a || ht([n]), r.remove(n, "fxshow"), p) i.style(n, f, p[f])
				})), h = lf(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
		}],
		prefilter: function(n, t) {
			t ? v.prefilters.unshift(n) : v.prefilters.push(n)
		}
	});
	i.speed = function(n, t, r) {
		var f = n && "object" == typeof n ? i.extend({}, n) : {
			complete: r || !r && t || u(n) && n,
			duration: n,
			easing: r && t || t && !u(t) && t
		};
		return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function() {
			u(f.old) && f.old.call(this);
			f.queue && i.dequeue(this, f.queue)
		}, f
	};
	i.fn.extend({
		fadeTo: function(n, t, i, r) {
			return this.filter(dt).css("opacity", 0).show().end().animate({
				opacity: t
			}, n, i, r)
		},
		animate: function(n, t, u, f) {
			var s = i.isEmptyObject(n),
				o = i.speed(t, u, f),
				e = function() {
					var t = v(this, i.extend({}, n), o);
					(s || r.get(this, "finish")) && t.stop(!0)
				};
			return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
		},
		stop: function(n, t, u) {
			var f = function(n) {
				var t = n.stop;
				delete n.stop;
				t(u)
			};
			return "string" != typeof n && (u = t, t = n, n = void 0), t && this.queue(n || "fx", []), this.each(function() {
				var s = !0,
					t = null != n && n + "queueHooks",
					o = i.timers,
					e = r.get(this);
				if (t) e[t] && e[t].stop && f(e[t]);
				else
					for (t in e) e[t] && e[t].stop && hf.test(t) && f(e[t]);
				for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
				!s && u || i.dequeue(this, n)
			})
		},
		finish: function(n) {
			return !1 !== n && (n = n || "fx"), this.each(function() {
				var t, e = r.get(this),
					u = e[n + "queue"],
					o = e[n + "queueHooks"],
					f = i.timers,
					s = u ? u.length : 0;
				for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
				for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
				delete e.finish
			})
		}
	});
	i.each(["toggle", "show", "hide"], function(n, t) {
		var r = i.fn[t];
		i.fn[t] = function(n, i, u) {
			return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ai(t, !0), n, i, u)
		}
	});
	i.each({
		slideDown: ai("show"),
		slideUp: ai("hide"),
		slideToggle: ai("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(n, t) {
		i.fn[n] = function(n, i, r) {
			return this.animate(t, n, i, r)
		}
	});
	i.timers = [];
	i.fx.tick = function() {
		var r, n = 0,
			t = i.timers;
		for (vt = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
		t.length || i.fx.stop();
		vt = void 0
	};
	i.fx.timer = function(n) {
		i.timers.push(n);
		i.fx.start()
	};
	i.fx.interval = 13;
	i.fx.start = function() {
		li || (li = !0, rr())
	};
	i.fx.stop = function() {
		li = null
	};
	i.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	};
	i.fn.delay = function(t, r) {
		return t = i.fx && i.fx.speeds[t] || t, r = r || "fx", this.queue(r, function(i, r) {
			var u = n.setTimeout(i, t);
			r.stop = function() {
				n.clearTimeout(u)
			}
		})
	};
	yt = f.createElement("input");
	of = f.createElement("select").appendChild(f.createElement("option"));
	yt.type = "checkbox";
	e.checkOn = "" !== yt.value;
	e.optSelected = of.selected;
	(yt = f.createElement("input")).value = "t";
	yt.type = "radio";
	e.radioValue = "t" === yt.value;
	pt = i.expr.attrHandle;
	i.fn.extend({
		attr: function(n, t) {
			return w(this, i.attr, n, t, 1 < arguments.length)
		},
		removeAttr: function(n) {
			return this.each(function() {
				i.removeAttr(this, n)
			})
		}
	});
	i.extend({
		attr: function(n, t, r) {
			var f, u, e = n.nodeType;
			if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? af : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
		},
		attrHooks: {
			type: {
				set: function(n, t) {
					if (!e.radioValue && "radio" === t && c(n, "input")) {
						var i = n.value;
						return n.setAttribute("type", t), i && (n.value = i), t
					}
				}
			}
		},
		removeAttr: function(n, t) {
			var i, u = 0,
				r = t && t.match(l);
			if (r && 1 === n.nodeType)
				while (i = r[u++]) n.removeAttribute(i)
		}
	});
	af = {
		set: function(n, t, r) {
			return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r
		}
	};
	i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
		var r = pt[t] || i.find.attr;
		pt[t] = function(n, t, i) {
			var f, e, u = t.toLowerCase();
			return i || (e = pt[u], pt[u] = f, f = null != r(n, t, i) ? u : null, pt[u] = e), f
		}
	});
	vf = /^(?:input|select|textarea|button)$/i;
	yf = /^(?:a|area)$/i;
	i.fn.extend({
		prop: function(n, t) {
			return w(this, i.prop, n, t, 1 < arguments.length)
		},
		removeProp: function(n) {
			return this.each(function() {
				delete this[i.propFix[n] || n]
			})
		}
	});
	i.extend({
		prop: function(n, t, r) {
			var f, u, e = n.nodeType;
			if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
		},
		propHooks: {
			tabIndex: {
				get: function(n) {
					var t = i.find.attr(n, "tabindex");
					return t ? parseInt(t, 10) : vf.test(n.nodeName) || yf.test(n.nodeName) && n.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});
	e.optSelected || (i.propHooks.selected = {
		get: function(n) {
			var t = n.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(n) {
			var t = n.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	});
	i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		i.propFix[this.toLowerCase()] = this
	});
	i.fn.extend({
		addClass: function(n) {
			var o, t, r, f, e, s, h, c = 0;
			if (u(n)) return this.each(function(t) {
				i(this).addClass(n.call(this, t, it(this)))
			});
			if ((o = ur(n)).length)
				while (t = this[c++])
					if (f = it(t), r = 1 === t.nodeType && " " + tt(f) + " ") {
						for (s = 0; e = o[s++];) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
						f !== (h = tt(r)) && t.setAttribute("class", h)
					} return this
		},
		removeClass: function(n) {
			var o, r, t, f, e, s, h, c = 0;
			if (u(n)) return this.each(function(t) {
				i(this).removeClass(n.call(this, t, it(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((o = ur(n)).length)
				while (r = this[c++])
					if (f = it(r), t = 1 === r.nodeType && " " + tt(f) + " ") {
						for (s = 0; e = o[s++];)
							while (-1 < t.indexOf(" " + e + " ")) t = t.replace(" " + e + " ", " ");
						f !== (h = tt(t)) && r.setAttribute("class", h)
					} return this
		},
		toggleClass: function(n, t) {
			var f = typeof n,
				e = "string" === f || Array.isArray(n);
			return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) {
				i(this).toggleClass(n.call(this, r, it(this), t), t)
			}) : this.each(function() {
				var t, o, u, s;
				if (e)
					for (o = 0, u = i(this), s = ur(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
				else void 0 !== n && "boolean" !== f || ((t = it(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
			})
		},
		hasClass: function(n) {
			for (var t, r = 0, i = " " + n + " "; t = this[r++];)
				if (1 === t.nodeType && -1 < (" " + tt(it(t)) + " ").indexOf(i)) return !0;
			return !1
		}
	});
	pf = /\r/g;
	i.fn.extend({
		val: function(n) {
			var t, r, e, f = this[0];
			return arguments.length ? (e = u(n), this.each(function(r) {
				var u;
				1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
					return null == n ? "" : n + ""
				})), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
			})) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof(r = f.value) ? r.replace(pf, "") : null == r ? "" : r : void 0
		}
	});
	i.extend({
		valHooks: {
			option: {
				get: function(n) {
					var t = i.find.attr(n, "value");
					return null != t ? t : tt(i.text(n))
				}
			},
			select: {
				get: function(n) {
					for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
						if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
							if (e = i(t).val(), f) return e;
							s.push(e)
						} return s
				},
				set: function(n, t) {
					for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
					return r || (n.selectedIndex = -1), e
				}
			}
		}
	});
	i.each(["radio", "checkbox"], function() {
		i.valHooks[this] = {
			set: function(n, t) {
				if (Array.isArray(t)) return n.checked = -1 < i.inArray(i(n).val(), t)
			}
		};
		e.checkOn || (i.valHooks[this].get = function(n) {
			return null === n.getAttribute("value") ? "on" : n.value
		})
	});
	e.focusin = "onfocusin" in n;
	fr = /^(?:focusinfocus|focusoutblur)$/;
	er = function(n) {
		n.stopPropagation()
	};
	i.extend(i.event, {
		trigger: function(t, e, o, s) {
			var k, c, l, d, v, y, a, p, w = [o || f],
				h = ui.call(t, "type") ? t.type : t,
				b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
			if (c = p = l = o = o || f, 3 !== o.nodeType && 8 !== o.nodeType && !fr.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
				if (!s && !a.noBubble && !rt(o)) {
					for (d = a.delegateType || h, fr.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
					l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
				}
				for (k = 0;
					(c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = 1 < k ? d : a.bindType || h, (y = (r.get(c, "events") || Object.create(null))[t.type] && r.get(c, "handle")) && y.apply(c, e), (y = v && c[v]) && y.apply && ot(c) && (t.result = y.apply(c, e), !1 === t.result && t.preventDefault());
				return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !ot(o) || v && u(o[h]) && !rt(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, er), o[h](), t.isPropagationStopped() && p.removeEventListener(h, er), i.event.triggered = void 0, l && (o[v] = l)), t.result
			}
		},
		simulate: function(n, t, r) {
			var u = i.extend(new i.Event, r, {
				type: n,
				isSimulated: !0
			});
			i.event.trigger(u, null, t)
		}
	});
	i.fn.extend({
		trigger: function(n, t) {
			return this.each(function() {
				i.event.trigger(n, t, this)
			})
		},
		triggerHandler: function(n, t) {
			var r = this[0];
			if (r) return i.event.trigger(n, t, r, !0)
		}
	});
	e.focusin || i.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, t) {
		var u = function(n) {
			i.event.simulate(t, n.target, i.event.fix(n))
		};
		i.event.special[t] = {
			setup: function() {
				var i = this.ownerDocument || this.document || this,
					f = r.access(i, t);
				f || i.addEventListener(n, u, !0);
				r.access(i, t, (f || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this.document || this,
					f = r.access(i, t) - 1;
				f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
			}
		}
	});
	var ti = n.location,
		wf = {
			guid: Date.now()
		},
		or = /\?/;
	i.parseXML = function(t) {
		var r;
		if (!t || "string" != typeof t) return null;
		try {
			r = (new n.DOMParser).parseFromString(t, "text/xml")
		} catch (t) {
			r = void 0
		}
		return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
	};
	var uo = /\[\]$/,
		bf = /\r?\n/g,
		fo = /^(?:submit|button|image|reset|file)$/i,
		eo = /^(?:input|select|textarea|keygen)/i;
	i.param = function(n, t) {
		var r, f = [],
			e = function(n, t) {
				var i = u(t) ? t() : t;
				f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
			};
		if (null == n) return "";
		if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
			e(this.name, this.value)
		});
		else
			for (r in n) sr(r, n[r], t, e);
		return f.join("&")
	};
	i.fn.extend({
		serialize: function() {
			return i.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var n = i.prop(this, "elements");
				return n ? i.makeArray(n) : this
			}).filter(function() {
				var n = this.type;
				return this.name && !i(this).is(":disabled") && eo.test(this.nodeName) && !fo.test(n) && (this.checked || !gt.test(n))
			}).map(function(n, t) {
				var r = i(this).val();
				return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
					return {
						name: t.name,
						value: n.replace(bf, "\r\n")
					}
				}) : {
					name: t.name,
					value: r.replace(bf, "\r\n")
				}
			}).get()
		}
	});
	var oo = /%20/g,
		so = /#.*$/,
		ho = /([?&])_=[^&]*/,
		co = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		lo = /^(?:GET|HEAD)$/,
		ao = /^\/\//,
		kf = {},
		hr = {},
		df = "*/".concat("*"),
		cr = f.createElement("a");
	return cr.href = ti.href, i.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ti.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ti.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": df,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": i.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(n, t) {
			return t ? lr(lr(n, i.ajaxSettings), t) : lr(i.ajaxSettings, n)
		},
		ajaxPrefilter: gf(kf),
		ajaxTransport: gf(hr),
		ajax: function(t, r) {
			function b(t, r, f, c) {
				var v, rt, b, p, g, l = r;
				s || (s = !0, d && n.clearTimeout(d), a = void 0, k = c || "", e.readyState = 0 < t ? 4 : 0, v = 200 <= t && t < 300 || 304 === t, f && (p = function(n, t, i) {
					for (var e, u, f, o, s = n.contents, r = n.dataTypes;
						"*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
					if (e)
						for (u in s)
							if (s[u] && s[u].test(e)) {
								r.unshift(u);
								break
							} if (r[0] in i) f = r[0];
					else {
						for (u in i) {
							if (!r[0] || n.converters[u + " " + r[0]]) {
								f = u;
								break
							}
							o || (o = u)
						}
						f = f || o
					}
					if (f) return f !== r[0] && r.unshift(f), i[f]
				}(u, e, f)), !v && -1 < i.inArray("script", u.dataTypes) && (u.converters["text script"] = function() {}), p = function(n, t, i, r) {
					var h, u, f, s, e, o = {},
						c = n.dataTypes.slice();
					if (c[1])
						for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
					for (u = c.shift(); u;)
						if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
							if ("*" === u) u = e;
							else if ("*" !== e && e !== u) {
						if (!(f = o[e + " " + u] || o["* " + u]))
							for (h in o)
								if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
									!0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1]));
									break
								} if (!0 !== f)
							if (f && n.throws) t = f(t);
							else try {
								t = f(t)
							} catch (n) {
								return {
									state: "parsererror",
									error: f ? n : "No conversion from " + e + " to " + u
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(u, p, e, v), v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, v = !(b = p.error))) : (b = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]), e.statusCode(w), w = void 0, y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]), it.fireWith(h, [e, l]), y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (r = t, t = void 0);
			r = r || {};
			var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r),
				h = u.context || u,
				nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
				tt = i.Deferred(),
				it = i.Callbacks("once memory"),
				w = u.statusCode || {},
				rt = {},
				ut = {},
				ft = "canceled",
				e = {
					readyState: 0,
					getResponseHeader: function(n) {
						var t;
						if (s) {
							if (!v)
								for (v = {}; t = co.exec(k);) v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
							t = v[n.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return s ? k : null
					},
					setRequestHeader: function(n, t) {
						return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
					},
					overrideMimeType: function(n) {
						return null == s && (u.mimeType = n), this
					},
					statusCode: function(n) {
						var t;
						if (n)
							if (s) e.always(n[e.status]);
							else
								for (t in n) w[t] = [w[t], n[t]];
						return this
					},
					abort: function(n) {
						var t = n || ft;
						return a && a.abort(t), b(0, t), this
					}
				};
			if (tt.promise(e), u.url = ((t || u.url || ti.href) + "").replace(ao, ti.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""], null == u.crossDomain) {
				c = f.createElement("a");
				try {
					c.href = u.url;
					c.href = c.href;
					u.crossDomain = cr.protocol + "//" + cr.host != c.protocol + "//" + c.host
				} catch (t) {
					u.crossDomain = !0
				}
			}
			if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), ne(kf, u, r, e), s) return e;
			for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !lo.test(u.type), o = u.url.replace(so, ""), u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(oo, "+")) : (p = u.url.slice(o.length), u.data && (u.processData || "string" == typeof u.data) && (o += (or.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (o = o.replace(ho, "$1"), p = (or.test(o) ? "&" : "?") + "_=" + wf.guid++ + p), u.url = o + p), u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType), e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + df + "; q=0.01" : "") : u.accepts["*"]), u.headers) e.setRequestHeader(g, u.headers[g]);
			if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort();
			if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), a = ne(hr, u, r, e)) {
				if (e.readyState = 1, y && nt.trigger("ajaxSend", [e, u]), s) return e;
				u.async && 0 < u.timeout && (d = n.setTimeout(function() {
					e.abort("timeout")
				}, u.timeout));
				try {
					s = !1;
					a.send(rt, b)
				} catch (t) {
					if (s) throw t;
					b(-1, t)
				}
			} else b(-1, "No Transport");
			return e
		},
		getJSON: function(n, t, r) {
			return i.get(n, t, r, "json")
		},
		getScript: function(n, t) {
			return i.get(n, void 0, t, "script")
		}
	}), i.each(["get", "post"], function(n, t) {
		i[t] = function(n, r, f, e) {
			return u(r) && (e = e || f, f = r, r = void 0), i.ajax(i.extend({
				url: n,
				type: t,
				dataType: e,
				data: r,
				success: f
			}, i.isPlainObject(n) && n))
		}
	}), i.ajaxPrefilter(function(n) {
		for (var t in n.headers) "content-type" === t.toLowerCase() && (n.contentType = n.headers[t] || "")
	}), i._evalUrl = function(n, t, r) {
		return i.ajax({
			url: n,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(n) {
				i.globalEval(n, t, r)
			}
		})
	}, i.fn.extend({
		wrapAll: function(n) {
			var t;
			return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var n = this; n.firstElementChild;) n = n.firstElementChild;
				return n
			}).append(this)), this
		},
		wrapInner: function(n) {
			return u(n) ? this.each(function(t) {
				i(this).wrapInner(n.call(this, t))
			}) : this.each(function() {
				var t = i(this),
					r = t.contents();
				r.length ? r.wrapAll(n) : t.append(n)
			})
		},
		wrap: function(n) {
			var t = u(n);
			return this.each(function(r) {
				i(this).wrapAll(t ? n.call(this, r) : n)
			})
		},
		unwrap: function(n) {
			return this.parent(n).not("body").each(function() {
				i(this).replaceWith(this.childNodes)
			}), this
		}
	}), i.expr.pseudos.hidden = function(n) {
		return !i.expr.pseudos.visible(n)
	}, i.expr.pseudos.visible = function(n) {
		return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
	}, i.ajaxSettings.xhr = function() {
		try {
			return new n.XMLHttpRequest
		} catch (t) {}
	}, te = {
		0: 200,
		1223: 204
	}, wt = i.ajaxSettings.xhr(), e.cors = !!wt && "withCredentials" in wt, e.ajax = wt = !!wt, i.ajaxTransport(function(t) {
		var i, r;
		if (e.cors || wt && !t.crossDomain) return {
			send: function(u, f) {
				var o, e = t.xhr();
				if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (o in t.xhrFields) e[o] = t.xhrFields[o];
				for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType), t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"), u) e.setRequestHeader(o, u[o]);
				i = function(n) {
					return function() {
						i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(te[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
							binary: e.response
						} : {
							text: e.responseText
						}, e.getAllResponseHeaders()))
					}
				};
				e.onload = i();
				r = e.onerror = e.ontimeout = i("error");
				void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
					4 === e.readyState && n.setTimeout(function() {
						i && r()
					})
				};
				i = i("abort");
				try {
					e.send(t.hasContent && t.data || null)
				} catch (u) {
					if (i) throw u;
				}
			},
			abort: function() {
				i && i()
			}
		}
	}), i.ajaxPrefilter(function(n) {
		n.crossDomain && (n.contents.script = !1)
	}), i.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(n) {
				return i.globalEval(n), n
			}
		}
	}), i.ajaxPrefilter("script", function(n) {
		void 0 === n.cache && (n.cache = !1);
		n.crossDomain && (n.type = "GET")
	}), i.ajaxTransport("script", function(n) {
		var r, t;
		if (n.crossDomain || n.scriptAttrs) return {
			send: function(u, e) {
				r = i("<script>").attr(n.scriptAttrs || {}).prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", t = function(n) {
					r.remove();
					t = null;
					n && e("error" === n.type ? 404 : 200, n.type)
				});
				f.head.appendChild(r[0])
			},
			abort: function() {
				t && t()
			}
		}
	}), ar = [], vi = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var n = ar.pop() || i.expando + "_" + wf.guid++;
			return this[n] = !0, n
		}
	}), i.ajaxPrefilter("json jsonp", function(t, r, f) {
		var e, o, s, h = !1 !== t.jsonp && (vi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && vi.test(t.data) && "data");
		if (h || "jsonp" === t.dataTypes[0]) return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(vi, "$1" + e) : !1 !== t.jsonp && (t.url += (or.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function() {
			return s || i.error(e + " was not called"), s[0]
		}, t.dataTypes[0] = "json", o = n[e], n[e] = function() {
			s = arguments
		}, f.always(function() {
			void 0 === o ? i(n).removeProp(e) : n[e] = o;
			t[e] && (t.jsonpCallback = r.jsonpCallback, ar.push(e));
			s && u(o) && o(s[0]);
			s = o = void 0
		}), "script"
	}), e.createHTMLDocument = ((ie = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>", 2 === ie.childNodes.length), i.parseHTML = function(n, t, r) {
		return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(s)) : t = f), u = !r && [], (o = wi.exec(n)) ? [t.createElement(o[1])] : (o = vu([n], t, u), u && u.length && i(u).remove(), i.merge([], o.childNodes)));
		var s, o, u
	}, i.fn.load = function(n, t, r) {
		var f, s, h, e = this,
			o = n.indexOf(" ");
		return -1 < o && (f = tt(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < e.length && i.ajax({
			url: n,
			type: s || "GET",
			dataType: "html",
			data: t
		}).done(function(n) {
			h = arguments;
			e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
		}).always(r && function(n, t) {
			e.each(function() {
				r.apply(this, h || [n.responseText, t, n])
			})
		}), this
	}, i.expr.pseudos.animated = function(n) {
		return i.grep(i.timers, function(t) {
			return n === t.elem
		}).length
	}, i.offset = {
		setOffset: function(n, t, r) {
			var v, o, s, h, e, c, l = i.css(n, "position"),
				a = i(n),
				f = {};
			"static" === l && (n.style.position = "relative");
			e = a.offset();
			s = i.css(n, "top");
			c = i.css(n, "left");
			("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
			u(t) && (t = t.call(n, r, i.extend({}, e)));
			null != t.top && (f.top = t.top - e.top + h);
			null != t.left && (f.left = t.left - e.left + o);
			"using" in t ? t.using.call(n, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), a.css(f))
		}
	}, i.fn.extend({
		offset: function(n) {
			if (arguments.length) return void 0 === n ? this : this.each(function(t) {
				i.offset.setOffset(this, n, t)
			});
			var r, u, t = this[0];
			if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, {
				top: r.top + u.pageYOffset,
				left: r.left + u.pageXOffset
			}) : {
				top: 0,
				left: 0
			}
		},
		position: function() {
			if (this[0]) {
				var n, r, u, t = this[0],
					f = {
						top: 0,
						left: 0
					};
				if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
				else {
					for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
					n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
				}
				return {
					top: r.top - f.top - i.css(t, "marginTop", !0),
					left: r.left - f.left - i.css(t, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
				return n || g
			})
		}
	}), i.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(n, t) {
		var r = "pageYOffset" === t;
		i.fn[n] = function(i) {
			return w(this, function(n, i, u) {
				var f;
				if (rt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
				f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
			}, n, i, arguments.length)
		}
	}), i.each(["top", "left"], function(n, t) {
		i.cssHooks[t] = du(e.pixelPosition, function(n, r) {
			if (r) return r = ni(n, t), nr.test(r) ? i(n).position()[t] + "px" : r
		})
	}), i.each({
		Height: "height",
		Width: "width"
	}, function(n, t) {
		i.each({
			padding: "inner" + n,
			content: t,
			"": "outer" + n
		}, function(r, u) {
			i.fn[u] = function(f, e) {
				var o = arguments.length && (r || "boolean" != typeof f),
					s = r || (!0 === f || !0 === e ? "margin" : "border");
				return w(this, function(t, r, f) {
					var e;
					return rt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
				}, t, o ? f : void 0, o)
			}
		})
	}), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
		i.fn[t] = function(n) {
			return this.on(t, n)
		}
	}), i.fn.extend({
		bind: function(n, t, i) {
			return this.on(n, null, t, i)
		},
		unbind: function(n, t) {
			return this.off(n, null, t)
		},
		delegate: function(n, t, i, r) {
			return this.on(t, n, i, r)
		},
		undelegate: function(n, t, i) {
			return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
		},
		hover: function(n, t) {
			return this.mouseenter(n).mouseleave(t || n)
		}
	}), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
		i.fn[t] = function(n, i) {
			return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t)
		}
	}), re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, i.proxy = function(n, t) {
		var r, f, e;
		if ("string" == typeof t && (r = n[t], t = n, n = r), u(n)) return f = k.call(arguments, 2), (e = function() {
			return n.apply(t || this, f.concat(k.call(arguments)))
		}).guid = n.guid = n.guid || i.guid++, e
	}, i.holdReady = function(n) {
		n ? i.readyWait++ : i.ready(!0)
	}, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = c, i.isFunction = u, i.isWindow = rt, i.camelCase = y, i.type = ut, i.now = Date.now, i.isNumeric = function(n) {
		var t = i.type(n);
		return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
	}, i.trim = function(n) {
		return null == n ? "" : (n + "").replace(re, "")
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return i
	}), ue = n.jQuery, fe = n.$, i.noConflict = function(t) {
		return n.$ === i && (n.$ = fe), t && n.jQuery === i && (n.jQuery = ue), i
	}, "undefined" == typeof t && (n.jQuery = n.$ = i), i
}), "undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function(n) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], function(t) {
		return n(t, window)
	}) : "object" == typeof module && module.exports ? module.exports = n(require("jquery"), window) : n(jQuery, window)
}(function(n, t) {
	"use strict";

	function u(t) {
		return 0 <= function(n, t) {
			for (var r = /^(\d+)\.(\d+)\.(\d+)/, u = r.exec(n) || [], f = r.exec(t) || [], i = 1; i <= 3; i++) {
				if (+u[i] > +f[i]) return 1;
				if (+u[i] < +f[i]) return -1
			}
			return 0
		}(n.fn.jquery, t)
	}

	function i(i) {
		var r = t.console;
		n.migrateDeduplicateWarnings && e[i] || (e[i] = !0, n.migrateWarnings.push(i), r && r.warn && !n.migrateMute && (r.warn("JQMIGRATE: " + i), n.migrateTrace && r.trace && r.trace()))
	}

	function h(n, t, r, u) {
		Object.defineProperty(n, t, {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return i(u), r
			},
			set: function(n) {
				i(u);
				r = n
			}
		})
	}

	function r(n, t, r, u) {
		n[t] = function() {
			return i(u), r.apply(this, arguments)
		}
	}

	function c(n) {
		return n.replace(/-([a-z])/g, function(n, t) {
			return t.toUpperCase()
		})
	}

	function nt(n) {
		var i = t.document.implementation.createHTMLDocument("");
		return i.body.innerHTML = n, i.body && i.body.innerHTML
	}

	function tt(n) {
		var t = n.replace(y, "<$1><\/$2>");
		t !== n && nt(n) !== nt(t) && i("HTML tags must be properly nested and closed: " + n)
	}
	var e, b, f, a, v, d, g, y, it, rt, ut, ft, p, et;
	n.migrateVersion = "3.3.0";
	t.console && t.console.log && (n && u("3.0.0") || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), n.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), t.console.log("JQMIGRATE: Migrate is installed" + (n.migrateMute ? "" : " with logging active") + ", version " + n.migrateVersion));
	e = {};
	n.migrateDeduplicateWarnings = !0;
	n.migrateWarnings = [];
	void 0 === n.migrateTrace && (n.migrateTrace = !0);
	n.migrateReset = function() {
		e = {};
		n.migrateWarnings.length = 0
	};
	"BackCompat" === t.document.compatMode && i("jQuery is not compatible with Quirks Mode");
	var o, w = {},
		ot = n.fn.init,
		s = n.find,
		st = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
		ht = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
		ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	for (o in n.fn.init = function(n) {
			var t = Array.prototype.slice.call(arguments);
			return "string" == typeof n && "#" === n && (i("jQuery( '#' ) is not a valid selector"), t[0] = []), ot.apply(this, t)
		}, n.fn.init.prototype = n.fn, n.find = function(n) {
			var r = Array.prototype.slice.call(arguments);
			if ("string" == typeof n && st.test(n)) try {
				t.document.querySelector(n)
			} catch (u) {
				n = n.replace(ht, function(n, t, i, r) {
					return "[" + t + i + '"' + r + '"]'
				});
				try {
					t.document.querySelector(n);
					i("Attribute selector with '#' must be quoted: " + r[0]);
					r[0] = n
				} catch (u) {
					i("Attribute selector with '#' was not fixed: " + r[0])
				}
			}
			return s.apply(this, r)
		}, s) Object.prototype.hasOwnProperty.call(s, o) && (n.find[o] = s[o]);
	(r(n.fn, "size", function() {
		return this.length
	}, "jQuery.fn.size() is deprecated and removed; use the .length property"), r(n, "parseJSON", function() {
		return JSON.parse.apply(null, arguments)
	}, "jQuery.parseJSON is deprecated; use JSON.parse"), r(n, "holdReady", n.holdReady, "jQuery.holdReady is deprecated"), r(n, "unique", n.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), h(n.expr, "filters", n.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), h(n.expr, ":", n.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), u("3.1.1") && r(n, "trim", function(n) {
		return null == n ? "" : (n + "").replace(ct, "")
	}, "jQuery.trim is deprecated; use String.prototype.trim"), u("3.2.0") && r(n, "nodeName", function(n, t) {
		return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
	}, "jQuery.nodeName is deprecated"), u("3.3.0") && (r(n, "isNumeric", function(n) {
		var t = typeof n;
		return ("number" == t || "string" == t) && !isNaN(n - parseFloat(n))
	}, "jQuery.isNumeric() is deprecated"), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
		w["[object " + t + "]"] = t.toLowerCase()
	}), r(n, "type", function(n) {
		return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? w[Object.prototype.toString.call(n)] || "object" : typeof n
	}, "jQuery.type is deprecated"), r(n, "isFunction", function(n) {
		return "function" == typeof n
	}, "jQuery.isFunction() is deprecated"), r(n, "isWindow", function(n) {
		return null != n && n === n.window
	}, "jQuery.isWindow() is deprecated"), r(n, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), n.ajax) && (b = n.ajax, n.ajax = function() {
		var n = b.apply(this, arguments);
		return n.promise && (r(n, "success", n.done, "jQXHR.success is deprecated and removed"), r(n, "error", n.fail, "jQXHR.error is deprecated and removed"), r(n, "complete", n.always, "jQXHR.complete is deprecated and removed")), n
	});
	var lt = n.fn.removeAttr,
		at = n.fn.toggleClass,
		vt = /\S+/g;
	n.fn.removeAttr = function(t) {
		var r = this;
		return n.each(t.match(vt), function(t, u) {
			n.expr.match.bool.test(u) && (i("jQuery.fn.removeAttr no longer sets boolean properties: " + u), r.prop(u, !1))
		}), lt.apply(this, arguments)
	};
	var k, l = !(n.fn.toggleClass = function(t) {
			return void 0 !== t && "boolean" != typeof t ? at.apply(this, arguments) : (i("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
				var i = this.getAttribute && this.getAttribute("class") || "";
				i && n.data(this, "__className__", i);
				this.setAttribute && this.setAttribute("class", i || !1 === t ? "" : n.data(this, "__className__") || "")
			}))
		}),
		yt = /^[a-z]/,
		pt = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
	n.swap && n.each(["height", "width", "reliableMarginRight"], function(t, i) {
		var r = n.cssHooks[i] && n.cssHooks[i].get;
		r && (n.cssHooks[i].get = function() {
			var n;
			return l = !0, n = r.apply(this, arguments), l = !1, n
		})
	});
	n.swap = function(n, t, r, u) {
		var e, f, o = {};
		for (f in l || i("jQuery.swap() is undocumented and deprecated"), t) o[f] = n.style[f], n.style[f] = t[f];
		for (f in e = r.apply(n, u || []), t) n.style[f] = o[f];
		return e
	};
	u("3.4.0") && "undefined" != typeof Proxy && (n.cssProps = new Proxy(n.cssProps || {}, {
		set: function() {
			return i("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
		}
	}));
	n.cssNumber || (n.cssNumber = {});
	k = n.fn.css;
	n.fn.css = function(t, r) {
		var u = this;
		return "string" != typeof t && n.each(t, function(t, i) {
			n.fn.css.call(u, t, i)
		}), "number" != typeof r || function(n) {
			return yt.test(n) && pt.test(n[0].toUpperCase() + n.slice(1))
		}(c(t)) || i("Use of number-typed values is deprecated in jQuery.fn.css"), k.apply(this, arguments)
	};
	f = n.data;
	(n.data = function(t, r, u) {
		var o, s, e;
		if (r && "object" == typeof r && 2 === arguments.length) {
			for (e in o = n.hasData(t) && f.call(this, t), s = {}, r) e !== c(e) ? (i("jQuery.data() always sets/gets camelCased names: " + e), o[e] = r[e]) : s[e] = r[e];
			return f.call(this, t, s), r
		}
		return r && "string" == typeof r && r !== c(r) && (o = n.hasData(t) && f.call(this, t)) && r in o ? (i("jQuery.data() always sets/gets camelCased names: " + r), 2 < arguments.length && (o[r] = u), o[r]) : f.apply(this, arguments)
	}, n.fx) && (d = n.Tween.prototype.run, g = function(n) {
		return n
	}, n.Tween.prototype.run = function() {
		1 < n.easing[this.easing].length && (i("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), n.easing[this.easing] = g);
		d.apply(this, arguments)
	}, a = n.fx.interval || 13, v = "jQuery.fx.interval is deprecated", t.requestAnimationFrame && Object.defineProperty(n.fx, "interval", {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return t.document.hidden || i(v), a
		},
		set: function(n) {
			i(v);
			a = n
		}
	}));
	var wt = n.fn.load,
		bt = n.event.add,
		kt = n.event.fix;
	return n.event.props = [], n.event.fixHooks = {}, h(n.event.props, "concat", n.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), n.event.fix = function(t) {
		var f, e = t.type,
			u = this.fixHooks[e],
			r = n.event.props;
		if (r.length)
			for (i("jQuery.event.props are deprecated and removed: " + r.join()); r.length;) n.event.addProp(r.pop());
		if (u && !u._migrated_ && (u._migrated_ = !0, i("jQuery.event.fixHooks are deprecated and removed: " + e), (r = u.props) && r.length))
			while (r.length) n.event.addProp(r.pop());
		return f = kt.call(this, t), u && u.filter ? u.filter(f, t) : f
	}, n.event.add = function(n, r) {
		return n === t && "load" === r && "complete" === t.document.readyState && i("jQuery(window).on('load'...) called after load event occurred"), bt.apply(this, arguments)
	}, n.each(["load", "unload", "error"], function(t, r) {
		n.fn[r] = function() {
			var n = Array.prototype.slice.call(arguments, 0);
			return "load" === r && "string" == typeof n[0] ? wt.apply(this, n) : (i("jQuery.fn." + r + "() is deprecated"), n.splice(0, 0, r), arguments.length ? this.on.apply(this, n) : (this.triggerHandler.apply(this, n), this))
		}
	}), n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, r) {
		n.fn[r] = function(n, t) {
			return i("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, n, t) : this.trigger(r)
		}
	}), n(function() {
		n(t.document).triggerHandler("ready")
	}), n.event.special.ready = {
		setup: function() {
			this === t.document && i("'ready' event is deprecated")
		}
	}, n.fn.extend({
		bind: function(n, t, r) {
			return i("jQuery.fn.bind() is deprecated"), this.on(n, null, t, r)
		},
		unbind: function(n, t) {
			return i("jQuery.fn.unbind() is deprecated"), this.off(n, null, t)
		},
		delegate: function(n, t, r, u) {
			return i("jQuery.fn.delegate() is deprecated"), this.on(t, n, r, u)
		},
		undelegate: function(n, t, r) {
			return i("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", r)
		},
		hover: function(n, t) {
			return i("jQuery.fn.hover() is deprecated"), this.on("mouseenter", n).on("mouseleave", t || n)
		}
	}), y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, it = n.htmlPrefilter, n.UNSAFE_restoreLegacyHtmlPrefilter = function() {
		n.htmlPrefilter = function(n) {
			return tt(n), n.replace(y, "<$1><\/$2>")
		}
	}, n.htmlPrefilter = function(n) {
		return tt(n), it(n)
	}, rt = n.fn.offset, (n.fn.offset = function() {
		var u, r = this[0];
		if (r && r.nodeType) return u = (r.ownerDocument || t.document).documentElement, n.contains(u, r) ? rt.apply(this, arguments) : (i("jQuery.fn.offset() requires an element connected to a document"), {
			top: 0,
			left: 0
		});
		i("jQuery.fn.offset() requires a valid DOM element")
	}, n.ajax) && (ut = n.param, n.param = function(t, r) {
		var u = n.ajaxSettings && n.ajaxSettings.traditional;
		return void 0 === r && u && (i("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), r = u), ut.call(this, t, r)
	}), ft = n.fn.andSelf || n.fn.addBack, (n.fn.andSelf = function() {
		return i("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), ft.apply(this, arguments)
	}, n.Deferred) && (p = n.Deferred, et = [
		["resolve", "done", n.Callbacks("once memory"), n.Callbacks("once memory"), "resolved"],
		["reject", "fail", n.Callbacks("once memory"), n.Callbacks("once memory"), "rejected"],
		["notify", "progress", n.Callbacks("memory"), n.Callbacks("memory")]
	], n.Deferred = function(t) {
		var r = p(),
			u = r.promise();
		return r.pipe = u.pipe = function() {
			var t = arguments;
			return i("deferred.pipe() is deprecated"), n.Deferred(function(i) {
				n.each(et, function(n, f) {
					var e = "function" == typeof t[n] && t[n];
					r[f[1]](function() {
						var n = e && e.apply(this, arguments);
						n && "function" == typeof n.promise ? n.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[f[0] + "With"](this === u ? i.promise() : this, e ? [n] : arguments)
					})
				});
				t = null
			}).promise()
		}, t && t.call(r, r), r
	}, n.Deferred.exceptionHook = p.exceptionHook), n
}));
! function(n, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = n || self).Swiper = t()
}(this, function() {
	"use strict";

	function t(n, t) {
		var s = [],
			u = 0,
			h, c, f, o;
		if (n && !t && n instanceof e) return n;
		if (n)
			if ("string" == typeof n)
				if (f = n.trim(), f.indexOf("<") >= 0 && f.indexOf(">") >= 0)
					for (o = "div", 0 === f.indexOf("<li") && (o = "ul"), 0 === f.indexOf("<tr") && (o = "tbody"), 0 !== f.indexOf("<td") && 0 !== f.indexOf("<th") || (o = "tr"), 0 === f.indexOf("<tbody") && (o = "table"), 0 === f.indexOf("<option") && (o = "select"), (c = r.createElement(o)).innerHTML = f, u = 0; u < c.childNodes.length; u += 1) s.push(c.childNodes[u]);
				else
					for (h = t || "#" !== n[0] || n.match(/[ .<>:~]/) ? (t || r).querySelectorAll(n.trim()) : [r.getElementById(n.trim().split("#")[1])], u = 0; u < h.length; u += 1) h[u] && s.push(h[u]);
		else if (n.nodeType || n === i || n === r) s.push(n);
		else if (n.length > 0 && n[0].nodeType)
			for (u = 0; u < n.length; u += 1) s.push(n[u]);
		return new e(s)
	}

	function ot(n) {
		for (var i = [], t = 0; t < n.length; t += 1) - 1 === i.indexOf(n[t]) && i.push(n[t]);
		return i
	}

	function ki(u) {
		var o = this.touchEventsData,
			e = this.params,
			s = this.touches,
			f, h, l, v;
		if ((!this.animating || !e.preventInteractionOnTransition) && (f = u, f.originalEvent && (f = f.originalEvent), h = t(f.target), ("wrapper" !== e.touchEventsTarget || h.closest(this.wrapperEl).length) && (o.isTouchEvent = "touchstart" === f.type, (o.isTouchEvent || !("which" in f) || 3 !== f.which) && !(!o.isTouchEvent && "button" in f && f.button > 0 || o.isTouched && o.isMoved))))
			if (e.noSwiping && h.closest(e.noSwipingSelector ? e.noSwipingSelector : "." + e.noSwipingClass)[0]) this.allowClick = !0;
			else if (!e.swipeHandler || h.closest(e.swipeHandler)[0]) {
			s.currentX = "touchstart" === f.type ? f.targetTouches[0].pageX : f.pageX;
			s.currentY = "touchstart" === f.type ? f.targetTouches[0].pageY : f.pageY;
			var c = s.currentX,
				y = s.currentY,
				p = e.edgeSwipeDetection || e.iOSEdgeSwipeDetection,
				a = e.edgeSwipeThreshold || e.iOSEdgeSwipeThreshold;
			p && (c <= a || c >= i.screen.width - a) || ((n.extend(o, {
				isTouched: !0,
				isMoved: !1,
				allowTouchCallbacks: !0,
				isScrolling: void 0,
				startMoving: void 0
			}), s.startX = c, s.startY = y, o.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, e.threshold > 0 && (o.allowThresholdMove = !1), "touchstart" !== f.type) && (l = !0, h.is(o.formElements) && (l = !1), r.activeElement && t(r.activeElement).is(o.formElements) && r.activeElement !== h[0] && r.activeElement.blur(), v = l && this.allowTouchMove && e.touchStartPreventDefault, (e.touchStartForcePreventDefault || v) && f.preventDefault()), this.emit("touchStart", f))
		}
	}

	function di(i) {
		var u = this.touchEventsData,
			o = this.params,
			f = this.touches,
			b = this.rtlTranslate,
			e = i,
			l, a, p, s, v, y;
		if (e.originalEvent && (e = e.originalEvent), u.isTouched) {
			if (!u.isTouchEvent || "mousemove" !== e.type) {
				var w = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]),
					h = "touchmove" === e.type ? w.pageX : e.pageX,
					c = "touchmove" === e.type ? w.pageY : e.pageY;
				if (e.preventedByNestedSwiper) return f.startX = h, void(f.startY = c);
				if (!this.allowTouchMove) return this.allowClick = !1, void(u.isTouched && (n.extend(f, {
					startX: h,
					startY: c,
					currentX: h,
					currentY: c
				}), u.touchStartTime = n.now()));
				if (u.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
					if (this.isVertical()) {
						if (c < f.startY && this.translate <= this.maxTranslate() || c > f.startY && this.translate >= this.minTranslate()) return u.isTouched = !1, void(u.isMoved = !1)
					} else if (h < f.startX && this.translate <= this.maxTranslate() || h > f.startX && this.translate >= this.minTranslate()) return;
				if (u.isTouchEvent && r.activeElement && e.target === r.activeElement && t(e.target).is(u.formElements)) return u.isMoved = !0, void(this.allowClick = !1);
				if ((u.allowTouchCallbacks && this.emit("touchMove", e), !(e.targetTouches && e.targetTouches.length > 1)) && (f.currentX = h, f.currentY = c, l = f.currentX - f.startX, a = f.currentY - f.startY, !(this.params.threshold && Math.sqrt(Math.pow(l, 2) + Math.pow(a, 2)) < this.params.threshold)))
					if (void 0 === u.isScrolling && (this.isHorizontal() && f.currentY === f.startY || this.isVertical() && f.currentX === f.startX ? u.isScrolling = !1 : l * l + a * a >= 25 && (p = 180 * Math.atan2(Math.abs(a), Math.abs(l)) / Math.PI, u.isScrolling = this.isHorizontal() ? p > o.touchAngle : 90 - p > o.touchAngle)), u.isScrolling && this.emit("touchMoveOpposite", e), void 0 === u.startMoving && (f.currentX === f.startX && f.currentY === f.startY || (u.startMoving = !0)), u.isScrolling) u.isTouched = !1;
					else if (u.startMoving) {
					if (this.allowClick = !1, o.cssMode || e.preventDefault(), o.touchMoveStopPropagation && !o.nested && e.stopPropagation(), u.isMoved || (o.loop && this.loopFix(), u.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), u.allowMomentumBounce = !1, !o.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", e)), this.emit("sliderMove", e), u.isMoved = !0, s = this.isHorizontal() ? l : a, f.diff = s, s *= o.touchRatio, b && (s = -s), this.swipeDirection = s > 0 ? "prev" : "next", u.currentTranslate = s + u.startTranslate, v = !0, y = o.resistanceRatio, o.touchReleaseOnEdges && (y = 0), s > 0 && u.currentTranslate > this.minTranslate() ? (v = !1, o.resistance && (u.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + u.startTranslate + s, y))) : s < 0 && u.currentTranslate < this.maxTranslate() && (v = !1, o.resistance && (u.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - u.startTranslate - s, y))), v && (e.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && u.currentTranslate < u.startTranslate && (u.currentTranslate = u.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && u.currentTranslate > u.startTranslate && (u.currentTranslate = u.startTranslate), o.threshold > 0) {
						if (!(Math.abs(s) > o.threshold || u.allowThresholdMove)) return void(u.currentTranslate = u.startTranslate);
						if (!u.allowThresholdMove) return u.allowThresholdMove = !0, f.startX = f.currentX, f.startY = f.currentY, u.currentTranslate = u.startTranslate, void(f.diff = this.isHorizontal() ? f.currentX - f.startX : f.currentY - f.startY)
					}
					o.followFinger && !o.cssMode && ((o.freeMode || o.watchSlidesProgress || o.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), o.freeMode && (0 === u.velocities.length && u.velocities.push({
						position: f[this.isHorizontal() ? "startX" : "startY"],
						time: u.touchStartTime
					}), u.velocities.push({
						position: f[this.isHorizontal() ? "currentX" : "currentY"],
						time: n.now()
					})), this.updateProgress(u.currentTranslate), this.setTranslate(u.currentTranslate))
				}
			}
		} else u.startMoving && u.isScrolling && this.emit("touchMoveOpposite", e)
	}

	function gi(t) {
		var i = this,
			u = i.touchEventsData,
			r = i.params,
			ht = i.touches,
			w = i.rtlTranslate,
			g = i.$wrapperEl,
			e = i.slidesGrid,
			c = i.snapGrid,
			s = t,
			l, nt, b, k, it, d, v, y, p, rt, ut, et;
		if (s.originalEvent && (s = s.originalEvent), u.allowTouchCallbacks && i.emit("touchEnd", s), u.allowTouchCallbacks = !1, !u.isTouched) return u.isMoved && r.grabCursor && i.setGrabCursor(!1), u.isMoved = !1, void(u.startMoving = !1);
		if (r.grabCursor && u.isMoved && u.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1), nt = n.now(), b = nt - u.touchStartTime, i.allowClick && (i.updateClickedSlide(s), i.emit("tap click", s), b < 300 && nt - u.lastClickTime < 300 && i.emit("doubleTap doubleClick", s)), u.lastClickTime = n.now(), n.nextTick(function() {
				i.destroyed || (i.allowClick = !0)
			}), !u.isTouched || !u.isMoved || !i.swipeDirection || 0 === ht.diff || u.currentTranslate === u.startTranslate) return u.isTouched = !1, u.isMoved = !1, void(u.startMoving = !1);
		if (u.isTouched = !1, u.isMoved = !1, u.startMoving = !1, l = r.followFinger ? w ? i.translate : -i.translate : -u.currentTranslate, !r.cssMode)
			if (r.freeMode) {
				if (l < -i.minTranslate()) return void i.slideTo(i.activeIndex);
				if (l > -i.maxTranslate()) return void(i.slides.length < c.length ? i.slideTo(c.length - 1) : i.slideTo(i.slides.length - 1));
				if (r.freeModeMomentum) {
					if (u.velocities.length > 1) {
						var tt = u.velocities.pop(),
							ot = u.velocities.pop(),
							ct = tt.position - ot.position,
							st = tt.time - ot.time;
						i.velocity = ct / st;
						i.velocity /= 2;
						Math.abs(i.velocity) < r.freeModeMinimumVelocity && (i.velocity = 0);
						(st > 150 || n.now() - tt.time > 300) && (i.velocity = 0)
					} else i.velocity = 0;
					i.velocity *= r.freeModeMomentumVelocityRatio;
					u.velocities.length = 0;
					var a = 1e3 * r.freeModeMomentumRatio,
						lt = i.velocity * a,
						f = i.translate + lt;
					if (w && (f = -f), d = !1, v = 20 * Math.abs(i.velocity) * r.freeModeMomentumBounceRatio, f < i.maxTranslate()) r.freeModeMomentumBounce ? (f + i.maxTranslate() < -v && (f = i.maxTranslate() - v), k = i.maxTranslate(), d = !0, u.allowMomentumBounce = !0) : f = i.maxTranslate(), r.loop && r.centeredSlides && (it = !0);
					else if (f > i.minTranslate()) r.freeModeMomentumBounce ? (f - i.minTranslate() > v && (f = i.minTranslate() + v), k = i.minTranslate(), d = !0, u.allowMomentumBounce = !0) : f = i.minTranslate(), r.loop && r.centeredSlides && (it = !0);
					else if (r.freeModeSticky) {
						for (p = 0; p < c.length; p += 1)
							if (c[p] > -f) {
								y = p;
								break
							} f = -(f = Math.abs(c[y] - f) < Math.abs(c[y - 1] - f) || "next" === i.swipeDirection ? c[y] : c[y - 1])
					}
					if (it && i.once("transitionEnd", function() {
							i.loopFix()
						}), 0 !== i.velocity)(a = w ? Math.abs((-f - i.translate) / i.velocity) : Math.abs((f - i.translate) / i.velocity), r.freeModeSticky) && (rt = Math.abs((w ? -f : f) - i.translate), ut = i.slidesSizesGrid[i.activeIndex], a = rt < ut ? r.speed : rt < 2 * ut ? 1.5 * r.speed : 2.5 * r.speed);
					else if (r.freeModeSticky) return void i.slideToClosest();
					r.freeModeMomentumBounce && d ? (i.updateProgress(k), i.setTransition(a), i.setTranslate(f), i.transitionStart(!0, i.swipeDirection), i.animating = !0, g.transitionEnd(function() {
						i && !i.destroyed && u.allowMomentumBounce && (i.emit("momentumBounce"), i.setTransition(r.speed), i.setTranslate(k), g.transitionEnd(function() {
							i && !i.destroyed && i.transitionEnd()
						}))
					})) : i.velocity ? (i.updateProgress(f), i.setTransition(a), i.setTranslate(f), i.transitionStart(!0, i.swipeDirection), i.animating || (i.animating = !0, g.transitionEnd(function() {
						i && !i.destroyed && i.transitionEnd()
					}))) : i.updateProgress(f);
					i.updateActiveIndex();
					i.updateSlidesClasses()
				} else if (r.freeModeSticky) return void i.slideToClosest();
				(!r.freeModeMomentum || b >= r.longSwipesMs) && (i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses())
			} else {
				for (var o = 0, ft = i.slidesSizesGrid[0], h = 0; h < e.length; h += r.slidesPerGroup) void 0 !== e[h + r.slidesPerGroup] ? l >= e[h] && l < e[h + r.slidesPerGroup] && (o = h, ft = e[h + r.slidesPerGroup] - e[h]) : l >= e[h] && (o = h, ft = e[e.length - 1] - e[e.length - 2]);
				if (et = (l - e[o]) / ft, b > r.longSwipesMs) {
					if (!r.longSwipes) return void i.slideTo(i.activeIndex);
					"next" === i.swipeDirection && (et >= r.longSwipesRatio ? i.slideTo(o + r.slidesPerGroup) : i.slideTo(o));
					"prev" === i.swipeDirection && (et > 1 - r.longSwipesRatio ? i.slideTo(o + r.slidesPerGroup) : i.slideTo(o))
				} else {
					if (!r.shortSwipes) return void i.slideTo(i.activeIndex);
					i.navigation && (s.target === i.navigation.nextEl || s.target === i.navigation.prevEl) ? s.target === i.navigation.nextEl ? i.slideTo(o + r.slidesPerGroup) : i.slideTo(o) : ("next" === i.swipeDirection && i.slideTo(o + r.slidesPerGroup), "prev" === i.swipeDirection && i.slideTo(o))
				}
			}
	}

	function vt() {
		var n = this.params,
			t = this.el;
		if (!t || 0 !== t.offsetWidth) {
			n.breakpoints && this.setBreakpoint();
			var i = this.allowSlideNext,
				r = this.allowSlidePrev,
				u = this.snapGrid;
			this.allowSlideNext = !0;
			this.allowSlidePrev = !0;
			this.updateSize();
			this.updateSlides();
			this.updateSlidesClasses();
			("auto" === n.slidesPerView || n.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
			this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run();
			this.allowSlidePrev = r;
			this.allowSlideNext = i;
			this.params.watchOverflow && u !== this.snapGrid && this.checkOverflow()
		}
	}

	function nr(n) {
		this.allowClick || (this.params.preventClicks && n.preventDefault(), this.params.preventClicksPropagation && this.animating && (n.stopPropagation(), n.stopImmediatePropagation()))
	}

	function tr() {
		var t = this.wrapperEl,
			n;
		this.previousTranslate = this.translate;
		this.translate = this.isHorizontal() ? -t.scrollLeft : -t.scrollTop; - 0 === this.translate && (this.translate = 0);
		this.updateActiveIndex();
		this.updateSlidesClasses();
		n = this.maxTranslate() - this.minTranslate();
		(0 === n ? 0 : (this.translate - this.minTranslate()) / n) !== this.progress && this.updateProgress(this.translate);
		this.emit("setTranslate", this.translate, !1)
	}

	function ir() {}
	var r = "undefined" == typeof document ? {
			body: {},
			addEventListener: function() {},
			removeEventListener: function() {},
			activeElement: {
				blur: function() {},
				nodeName: ""
			},
			querySelector: function() {
				return null
			},
			querySelectorAll: function() {
				return []
			},
			getElementById: function() {
				return null
			},
			createEvent: function() {
				return {
					initEvent: function() {}
				}
			},
			createElement: function() {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function() {},
					getElementsByTagName: function() {
						return []
					}
				}
			},
			location: {
				hash: ""
			}
		} : document,
		i = "undefined" == typeof window ? {
			document: r,
			navigator: {
				userAgent: ""
			},
			location: {},
			history: {},
			CustomEvent: function() {
				return this
			},
			addEventListener: function() {},
			removeEventListener: function() {},
			getComputedStyle: function() {
				return {
					getPropertyValue: function() {
						return ""
					}
				}
			},
			Image: function() {},
			Date: function() {},
			screen: {},
			setTimeout: function() {},
			clearTimeout: function() {}
		} : window,
		e = function(n) {
			for (var t = 0; t < n.length; t += 1) this[t] = n[t];
			return this.length = n.length, this
		},
		st, yt;
	t.fn = e.prototype;
	t.Class = e;
	t.Dom7 = e;
	st = {
		addClass: function(n) {
			var r, i, t;
			if (void 0 === n) return this;
			for (r = n.split(" "), i = 0; i < r.length; i += 1)
				for (t = 0; t < this.length; t += 1) void 0 !== this[t] && void 0 !== this[t].classList && this[t].classList.add(r[i]);
			return this
		},
		removeClass: function(n) {
			for (var t, r = n.split(" "), i = 0; i < r.length; i += 1)
				for (t = 0; t < this.length; t += 1) void 0 !== this[t] && void 0 !== this[t].classList && this[t].classList.remove(r[i]);
			return this
		},
		hasClass: function(n) {
			return !!this[0] && this[0].classList.contains(n)
		},
		toggleClass: function(n) {
			for (var t, r = n.split(" "), i = 0; i < r.length; i += 1)
				for (t = 0; t < this.length; t += 1) void 0 !== this[t] && void 0 !== this[t].classList && this[t].classList.toggle(r[i]);
			return this
		},
		attr: function(n, t) {
			var u = arguments,
				i, r;
			if (1 === arguments.length && "string" == typeof n) return this[0] ? this[0].getAttribute(n) : void 0;
			for (i = 0; i < this.length; i += 1)
				if (2 === u.length) this[i].setAttribute(n, t);
				else
					for (r in n) this[i][r] = n[r], this[i].setAttribute(r, n[r]);
			return this
		},
		removeAttr: function(n) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(n);
			return this
		},
		data: function(n, t) {
			var i, r, u;
			if (void 0 !== t) {
				for (r = 0; r < this.length; r += 1)(i = this[r]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[n] = t;
				return this
			}
			if (i = this[0]) return i.dom7ElementDataStorage && n in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[n] : (u = i.getAttribute("data-" + n), u || void 0)
		},
		transform: function(n) {
			for (var i, t = 0; t < this.length; t += 1) i = this[t].style, i.webkitTransform = n, i.transform = n;
			return this
		},
		transition: function(n) {
			var t, i;
			for ("string" != typeof n && (n += "ms"), t = 0; t < this.length; t += 1) i = this[t].style, i.webkitTransitionDuration = n, i.transitionDuration = n;
			return this
		},
		on: function() {
			function y(n) {
				var f = n.target,
					i, e, r;
				if (f)
					if (i = n.target.dom7EventData || [], i.indexOf(n) < 0 && i.unshift(n), t(f).is(c)) u.apply(f, i);
					else
						for (e = t(f).parents(), r = 0; r < e.length; r += 1) t(e[r]).is(c) && u.apply(e[r], i)
			}

			function p(n) {
				var t = n && n.target && n.target.dom7EventData || [];
				t.indexOf(n) < 0 && t.unshift(n);
				u.apply(this, t)
			}
			for (var a, r, e, l, n, o, s, i = [], h = arguments.length; h--;) i[h] = arguments[h];
			var v = i[0],
				c = i[1],
				u = i[2],
				f = i[3];
			for ("function" == typeof i[1] && (v = (a = i)[0], u = a[1], f = a[2], c = void 0), f || (f = !1), e = v.split(" "), l = 0; l < this.length; l += 1)
				if (n = this[l], c)
					for (r = 0; r < e.length; r += 1) o = e[r], n.dom7LiveListeners || (n.dom7LiveListeners = {}), n.dom7LiveListeners[o] || (n.dom7LiveListeners[o] = []), n.dom7LiveListeners[o].push({
						listener: u,
						proxyListener: y
					}), n.addEventListener(o, y, f);
				else
					for (r = 0; r < e.length; r += 1) s = e[r], n.dom7Listeners || (n.dom7Listeners = {}), n.dom7Listeners[s] || (n.dom7Listeners[s] = []), n.dom7Listeners[s].push({
						listener: u,
						proxyListener: p
					}), n.addEventListener(s, p, f);
			return this
		},
		off: function() {
			for (var l, v, h, o, c, i, n, u, r, t = [], s = arguments.length; s--;) t[s] = arguments[s];
			var y = t[0],
				a = t[1],
				f = t[2],
				e = t[3];
			for ("function" == typeof t[1] && (y = (l = t)[0], f = l[1], e = l[2], a = void 0), e || (e = !1), v = y.split(" "), h = 0; h < v.length; h += 1)
				for (o = v[h], c = 0; c < this.length; c += 1)
					if (i = this[c], n = void 0, !a && i.dom7Listeners ? n = i.dom7Listeners[o] : a && i.dom7LiveListeners && (n = i.dom7LiveListeners[o]), n && n.length)
						for (u = n.length - 1; u >= 0; u -= 1) r = n[u], f && r.listener === f ? (i.removeEventListener(o, r.proxyListener, e), n.splice(u, 1)) : f && r.listener && r.listener.dom7proxy && r.listener.dom7proxy === f ? (i.removeEventListener(o, r.proxyListener, e), n.splice(u, 1)) : f || (i.removeEventListener(o, r.proxyListener, e), n.splice(u, 1));
			return this
		},
		trigger: function() {
			for (var s, e, t, u, n = [], f = arguments.length; f--;) n[f] = arguments[f];
			for (var h = n[0].split(" "), c = n[1], o = 0; o < h.length; o += 1)
				for (s = h[o], e = 0; e < this.length; e += 1) {
					t = this[e];
					u = void 0;
					try {
						u = new i.CustomEvent(s, {
							detail: c,
							bubbles: !0,
							cancelable: !0
						})
					} catch (i) {
						(u = r.createEvent("Event")).initEvent(s, !0, !0);
						u.detail = c
					}
					t.dom7EventData = n.filter(function(n, t) {
						return t > 0
					});
					t.dispatchEvent(u);
					t.dom7EventData = [];
					delete t.dom7EventData
				}
			return this
		},
		transitionEnd: function(n) {
			function u(f) {
				if (f.target === this)
					for (n.call(this, f), t = 0; t < i.length; t += 1) r.off(i[t], u)
			}
			var t, i = ["webkitTransitionEnd", "transitionend"],
				r = this;
			if (n)
				for (t = 0; t < i.length; t += 1) r.on(i[t], u);
			return this
		},
		outerWidth: function(n) {
			if (this.length > 0) {
				if (n) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function(n) {
			if (this.length > 0) {
				if (n) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function() {
			if (this.length > 0) {
				var n = this[0],
					t = n.getBoundingClientRect(),
					u = r.body,
					f = n.clientTop || u.clientTop || 0,
					e = n.clientLeft || u.clientLeft || 0,
					o = n === i ? i.scrollY : n.scrollTop,
					s = n === i ? i.scrollX : n.scrollLeft;
				return {
					top: t.top + o - f,
					left: t.left + s - e
				}
			}
			return null
		},
		css: function(n, t) {
			var r, u;
			if (1 === arguments.length) {
				if ("string" != typeof n) {
					for (r = 0; r < this.length; r += 1)
						for (u in n) this[r].style[u] = n[u];
					return this
				}
				if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(n)
			}
			if (2 === arguments.length && "string" == typeof n) {
				for (r = 0; r < this.length; r += 1) this[r].style[n] = t;
				return this
			}
			return this
		},
		each: function(n) {
			if (!n) return this;
			for (var t = 0; t < this.length; t += 1)
				if (!1 === n.call(this[t], t, this[t])) return this;
			return this
		},
		html: function(n) {
			if (void 0 === n) return this[0] ? this[0].innerHTML : void 0;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = n;
			return this
		},
		text: function(n) {
			if (void 0 === n) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = n;
			return this
		},
		is: function(n) {
			var o, f, u = this[0];
			if (!u || void 0 === n) return !1;
			if ("string" == typeof n) {
				if (u.matches) return u.matches(n);
				if (u.webkitMatchesSelector) return u.webkitMatchesSelector(n);
				if (u.msMatchesSelector) return u.msMatchesSelector(n);
				for (o = t(n), f = 0; f < o.length; f += 1)
					if (o[f] === u) return !0;
				return !1
			}
			if (n === r) return u === r;
			if (n === i) return u === i;
			if (n.nodeType || n instanceof e) {
				for (o = n.nodeType ? [n] : n, f = 0; f < o.length; f += 1)
					if (o[f] === u) return !0;
				return !1
			}
			return !1
		},
		index: function() {
			var t, n = this[0];
			if (n) {
				for (t = 0; null !== (n = n.previousSibling);) 1 === n.nodeType && (t += 1);
				return t
			}
		},
		eq: function(n) {
			if (void 0 === n) return this;
			var t, i = this.length;
			return new e(n > i - 1 ? [] : n < 0 ? (t = i + n) < 0 ? [] : [this[t]] : [this[n]])
		},
		append: function() {
			for (var n, f, t, o, s, i = [], u = arguments.length; u--;) i[u] = arguments[u];
			for (f = 0; f < i.length; f += 1)
				for (n = i[f], t = 0; t < this.length; t += 1)
					if ("string" == typeof n)
						for (o = r.createElement("div"), o.innerHTML = n; o.firstChild;) this[t].appendChild(o.firstChild);
					else if (n instanceof e)
				for (s = 0; s < n.length; s += 1) this[t].appendChild(n[s]);
			else this[t].appendChild(n);
			return this
		},
		prepend: function(n) {
			for (var i, u, t = 0; t < this.length; t += 1)
				if ("string" == typeof n)
					for (u = r.createElement("div"), u.innerHTML = n, i = u.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(u.childNodes[i], this[t].childNodes[0]);
				else if (n instanceof e)
				for (i = 0; i < n.length; i += 1) this[t].insertBefore(n[i], this[t].childNodes[0]);
			else this[t].insertBefore(n, this[t].childNodes[0]);
			return this
		},
		next: function(n) {
			return this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? new e([this[0].nextElementSibling]) : new e([]) : this[0].nextElementSibling ? new e([this[0].nextElementSibling]) : new e([]) : new e([])
		},
		nextAll: function(n) {
			var u = [],
				r = this[0],
				i;
			if (!r) return new e([]);
			for (; r.nextElementSibling;) i = r.nextElementSibling, n ? t(i).is(n) && u.push(i) : u.push(i), r = i;
			return new e(u)
		},
		prev: function(n) {
			if (this.length > 0) {
				var i = this[0];
				return n ? i.previousElementSibling && t(i.previousElementSibling).is(n) ? new e([i.previousElementSibling]) : new e([]) : i.previousElementSibling ? new e([i.previousElementSibling]) : new e([])
			}
			return new e([])
		},
		prevAll: function(n) {
			var u = [],
				r = this[0],
				i;
			if (!r) return new e([]);
			for (; r.previousElementSibling;) i = r.previousElementSibling, n ? t(i).is(n) && u.push(i) : u.push(i), r = i;
			return new e(u)
		},
		parent: function(n) {
			for (var r = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (n ? t(this[i].parentNode).is(n) && r.push(this[i].parentNode) : r.push(this[i].parentNode));
			return t(ot(r))
		},
		parents: function(n) {
			for (var i, r = [], u = 0; u < this.length; u += 1)
				for (i = this[u].parentNode; i;) n ? t(i).is(n) && r.push(i) : r.push(i), i = i.parentNode;
			return t(ot(r))
		},
		closest: function(n) {
			var t = this;
			return void 0 === n ? new e([]) : (t.is(n) || (t = t.parents(n).eq(0)), t)
		},
		find: function(n) {
			for (var u, i, r = [], t = 0; t < this.length; t += 1)
				for (u = this[t].querySelectorAll(n), i = 0; i < u.length; i += 1) r.push(u[i]);
			return new e(r)
		},
		children: function(n) {
			for (var r, i, u = [], f = 0; f < this.length; f += 1)
				for (r = this[f].childNodes, i = 0; i < r.length; i += 1) n ? 1 === r[i].nodeType && t(r[i]).is(n) && u.push(r[i]) : 1 === r[i].nodeType && u.push(r[i]);
			return new e(ot(u))
		},
		filter: function(n) {
			for (var i = [], t = 0; t < this.length; t += 1) n.call(this[t], t, this[t]) && i.push(this[t]);
			return new e(i)
		},
		remove: function() {
			for (var n = 0; n < this.length; n += 1) this[n].parentNode && this[n].parentNode.removeChild(this[n]);
			return this
		},
		add: function() {
			for (var r, u, f, n = [], i = arguments.length; i--;) n[i] = arguments[i];
			for (r = 0; r < n.length; r += 1)
				for (f = t(n[r]), u = 0; u < f.length; u += 1) this[this.length] = f[u], this.length += 1;
			return this
		},
		styles: function() {
			return this[0] ? i.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(st).forEach(function(n) {
		t.fn[n] = t.fn[n] || st[n]
	});
	var n = {
			deleteProps: function(n) {
				var t = n;
				Object.keys(t).forEach(function(n) {
					try {
						t[n] = null
					} catch (n) {}
					try {
						delete t[n]
					} catch (n) {}
				})
			},
			nextTick: function(n, t) {
				return void 0 === t && (t = 0), setTimeout(n, t)
			},
			now: function() {
				return Date.now()
			},
			getTranslate: function(n, t) {
				var f, u, e, r;
				return void 0 === t && (t = "x"), r = i.getComputedStyle(n, null), i.WebKitCSSMatrix ? ((u = r.transform || r.webkitTransform).split(",").length > 6 && (u = u.split(", ").map(function(n) {
					return n.replace(",", ".")
				}).join(", ")), e = new i.WebKitCSSMatrix("none" === u ? "" : u)) : f = (e = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (u = i.WebKitCSSMatrix ? e.m41 : 16 === f.length ? parseFloat(f[12]) : parseFloat(f[4])), "y" === t && (u = i.WebKitCSSMatrix ? e.m42 : 16 === f.length ? parseFloat(f[13]) : parseFloat(f[5])), u || 0
			},
			parseUrlQuery: function(n) {
				var r, f, u, e, o = {},
					t = n || i.location.href;
				if ("string" == typeof t && t.length)
					for (e = (f = (t = t.indexOf("?") > -1 ? t.replace(/\S*\?/, "") : "").split("&").filter(function(n) {
							return "" !== n
						})).length, r = 0; r < e; r += 1) u = f[r].replace(/#\S+/g, "").split("="), o[decodeURIComponent(u[0])] = void 0 === u[1] ? void 0 : decodeURIComponent(u[1]) || "";
				return o
			},
			isObject: function(n) {
				return "object" == typeof n && null !== n && n.constructor && n.constructor === Object
			},
			extend: function() {
				for (var r, e, i, t, s, u = [], f = arguments.length; f--;) u[f] = arguments[f];
				for (r = Object(u[0]), e = 1; e < u.length; e += 1)
					if (i = u[e], null != i)
						for (var h = Object.keys(Object(i)), o = 0, c = h.length; o < c; o += 1) t = h[o], s = Object.getOwnPropertyDescriptor(i, t), void 0 !== s && s.enumerable && (n.isObject(r[t]) && n.isObject(i[t]) ? n.extend(r[t], i[t]) : !n.isObject(r[t]) && n.isObject(i[t]) ? (r[t] = {}, n.extend(r[t], i[t])) : r[t] = i[t]);
				return r
			}
		},
		u = {
			touch: i.Modernizr && !0 === i.Modernizr.touch || !!(i.navigator.maxTouchPoints > 0 || "ontouchstart" in i || i.DocumentTouch && r instanceof i.DocumentTouch),
			pointerEvents: !!i.PointerEvent && "maxTouchPoints" in i.navigator && i.navigator.maxTouchPoints > 0,
			observer: "MutationObserver" in i || "WebkitMutationObserver" in i,
			passiveListener: function() {
				var n = !1,
					t;
				try {
					t = Object.defineProperty({}, "passive", {
						get: function() {
							n = !0
						}
					});
					i.addEventListener("testPassiveListener", null, t)
				} catch (n) {}
				return n
			}(),
			gestures: "ongesturestart" in i
		},
		l = function(n) {
			void 0 === n && (n = {});
			var t = this;
			t.params = n;
			t.eventsListeners = {};
			t.params && t.params.on && Object.keys(t.params.on).forEach(function(n) {
				t.on(n, t.params.on[n])
			})
		},
		ni = {
			components: {
				configurable: !0
			}
		};
	l.prototype.on = function(n, t, i) {
		var r = this,
			u;
		return "function" != typeof t ? r : (u = i ? "unshift" : "push", n.split(" ").forEach(function(n) {
			r.eventsListeners[n] || (r.eventsListeners[n] = []);
			r.eventsListeners[n][u](t)
		}), r)
	};
	l.prototype.once = function(n, t, i) {
		function r() {
			for (var f = [], i = arguments.length; i--;) f[i] = arguments[i];
			u.off(n, r);
			r.f7proxy && delete r.f7proxy;
			t.apply(u, f)
		}
		var u = this;
		return "function" != typeof t ? u : (r.f7proxy = t, u.on(n, r, i))
	};
	l.prototype.off = function(n, t) {
		var i = this;
		return i.eventsListeners ? (n.split(" ").forEach(function(n) {
			void 0 === t ? i.eventsListeners[n] = [] : i.eventsListeners[n] && i.eventsListeners[n].length && i.eventsListeners[n].forEach(function(r, u) {
				(r === t || r.f7proxy && r.f7proxy === t) && i.eventsListeners[n].splice(u, 1)
			})
		}), i) : i
	};
	l.prototype.emit = function() {
		for (var i, u, f, t, e, n = [], r = arguments.length; r--;) n[r] = arguments[r];
		return (t = this, !t.eventsListeners) ? t : ("string" == typeof n[0] || Array.isArray(n[0]) ? (i = n[0], u = n.slice(1, n.length), f = t) : (i = n[0].events, u = n[0].data, f = n[0].context || t), e = Array.isArray(i) ? i : i.split(" "), e.forEach(function(n) {
			if (t.eventsListeners && t.eventsListeners[n]) {
				var i = [];
				t.eventsListeners[n].forEach(function(n) {
					i.push(n)
				});
				i.forEach(function(n) {
					n.apply(f, u)
				})
			}
		}), t)
	};
	l.prototype.useModulesParams = function(t) {
		var i = this;
		i.modules && Object.keys(i.modules).forEach(function(r) {
			var u = i.modules[r];
			u.params && n.extend(t, u.params)
		})
	};
	l.prototype.useModules = function(n) {
		void 0 === n && (n = {});
		var t = this;
		t.modules && Object.keys(t.modules).forEach(function(i) {
			var r = t.modules[i],
				u = n[i] || {};
			r.instance && Object.keys(r.instance).forEach(function(n) {
				var i = r.instance[n];
				t[n] = "function" == typeof i ? i.bind(t) : i
			});
			r.on && t.on && Object.keys(r.on).forEach(function(n) {
				t.on(n, r.on[n])
			});
			r.create && r.create.bind(t)(u)
		})
	};
	ni.components.set = function(n) {
		this.use && this.use(n)
	};
	l.installModule = function(t) {
		for (var i, f, u = [], r = arguments.length - 1; r-- > 0;) u[r] = arguments[r + 1];
		return i = this, i.prototype.modules || (i.prototype.modules = {}), f = t.name || Object.keys(i.prototype.modules).length + "_" + n.now(), i.prototype.modules[f] = t, t.proto && Object.keys(t.proto).forEach(function(n) {
			i.prototype[n] = t.proto[n]
		}), t.static && Object.keys(t.static).forEach(function(n) {
			i[n] = t.static[n]
		}), t.install && t.install.apply(i, u), i
	};
	l.use = function(n) {
		for (var t, r = [], i = arguments.length - 1; i-- > 0;) r[i] = arguments[i + 1];
		return t = this, Array.isArray(n) ? (n.forEach(function(n) {
			return t.installModule(n)
		}), t) : t.installModule.apply(t, [n].concat(r))
	};
	Object.defineProperties(l, ni);
	var li = {
			updateSize: function() {
				var t, i, r = this.$el;
				t = void 0 !== this.params.width ? this.params.width : r[0].clientWidth;
				i = void 0 !== this.params.height ? this.params.height : r[0].clientHeight;
				0 === t && this.isHorizontal() || 0 === i && this.isVertical() || (t = t - parseInt(r.css("padding-left"), 10) - parseInt(r.css("padding-right"), 10), i = i - parseInt(r.css("padding-top"), 10) - parseInt(r.css("padding-bottom"), 10), n.extend(this, {
					width: t,
					height: i,
					size: this.isHorizontal() ? t : i
				}))
			},
			updateSlides: function() {
				function ct(n) {
					return !t.cssMode || n !== o.length - 1
				}
				var t = this.params,
					p = this.$wrapperEl,
					c = this.size,
					ht = this.rtlTranslate,
					ci = this.wrongRTL,
					kt = this.virtual && t.virtual.enabled,
					li = kt ? this.virtual.slides.length : this.slides.length,
					o = p.children("." + this.params.slideClass),
					a = kt ? this.virtual.slides.length : o.length,
					r = [],
					w = [],
					rt = [],
					ut = t.slidesOffsetBefore,
					nt, b, f, h, tt, et, it, ot, pt, wt, st, bt;
				"function" == typeof ut && (ut = t.slidesOffsetBefore.call(this));
				nt = t.slidesOffsetAfter;
				"function" == typeof nt && (nt = t.slidesOffsetAfter.call(this));
				var ai = this.snapGrid.length,
					vi = this.snapGrid.length,
					s = t.spaceBetween,
					u = -ut,
					lt = 0,
					at = 0;
				if (void 0 !== c) {
					"string" == typeof s && s.indexOf("%") >= 0 && (s = parseFloat(s.replace("%", "")) / 100 * c);
					this.virtualSize = -s;
					ht ? o.css({
						marginLeft: "",
						marginTop: ""
					}) : o.css({
						marginRight: "",
						marginBottom: ""
					});
					t.slidesPerColumn > 1 && (b = Math.floor(a / t.slidesPerColumn) === a / this.params.slidesPerColumn ? a : Math.ceil(a / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (b = Math.max(b, t.slidesPerView * t.slidesPerColumn)));
					for (var k, v = t.slidesPerColumn, dt = b / v, gt = Math.floor(a / t.slidesPerColumn), e = 0; e < a; e += 1) {
						if (f = 0, h = o.eq(e), t.slidesPerColumn > 1) {
							var d = void 0,
								g = void 0,
								y = void 0;
							if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
								var ft = Math.floor(e / (t.slidesPerGroup * t.slidesPerColumn)),
									ni = e - t.slidesPerColumn * t.slidesPerGroup * ft,
									ti = 0 === ft ? t.slidesPerGroup : Math.min(Math.ceil((a - ft * v * t.slidesPerGroup) / v), t.slidesPerGroup);
								d = (g = ni - (y = Math.floor(ni / ti)) * ti + ft * t.slidesPerGroup) + y * b / v;
								h.css({
									"-webkit-box-ordinal-group": d,
									"-moz-box-ordinal-group": d,
									"-ms-flex-order": d,
									"-webkit-order": d,
									order: d
								})
							} else "column" === t.slidesPerColumnFill ? (y = e - (g = Math.floor(e / v)) * v, (g > gt || g === gt && y === v - 1) && (y += 1) >= v && (y = 0, g += 1)) : g = e - (y = Math.floor(e / dt)) * dt;
							h.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== y && t.spaceBetween && t.spaceBetween + "px")
						}
						if ("none" !== h.css("display")) {
							if ("auto" === t.slidesPerView) {
								var l = i.getComputedStyle(h[0], null),
									vt = h[0].style.transform,
									yt = h[0].style.webkitTransform;
								if (vt && (h[0].style.transform = "none"), yt && (h[0].style.webkitTransform = "none"), t.roundLengths) f = this.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0);
								else if (this.isHorizontal()) {
									var ii = parseFloat(l.getPropertyValue("width")),
										yi = parseFloat(l.getPropertyValue("padding-left")),
										pi = parseFloat(l.getPropertyValue("padding-right")),
										ri = parseFloat(l.getPropertyValue("margin-left")),
										ui = parseFloat(l.getPropertyValue("margin-right")),
										fi = l.getPropertyValue("box-sizing");
									f = fi && "border-box" === fi ? ii + ri + ui : ii + yi + pi + ri + ui
								} else {
									var ei = parseFloat(l.getPropertyValue("height")),
										wi = parseFloat(l.getPropertyValue("padding-top")),
										bi = parseFloat(l.getPropertyValue("padding-bottom")),
										oi = parseFloat(l.getPropertyValue("margin-top")),
										si = parseFloat(l.getPropertyValue("margin-bottom")),
										hi = l.getPropertyValue("box-sizing");
									f = hi && "border-box" === hi ? ei + oi + si : ei + wi + bi + oi + si
								}
								vt && (h[0].style.transform = vt);
								yt && (h[0].style.webkitTransform = yt);
								t.roundLengths && (f = Math.floor(f))
							} else f = (c - (t.slidesPerView - 1) * s) / t.slidesPerView, t.roundLengths && (f = Math.floor(f)), o[e] && (this.isHorizontal() ? o[e].style.width = f + "px" : o[e].style.height = f + "px");
							o[e] && (o[e].swiperSlideSize = f);
							rt.push(f);
							t.centeredSlides ? (u = u + f / 2 + lt / 2 + s, 0 === lt && 0 !== e && (u = u - c / 2 - s), 0 === e && (u = u - c / 2 - s), Math.abs(u) < .001 && (u = 0), t.roundLengths && (u = Math.floor(u)), at % t.slidesPerGroup == 0 && r.push(u), w.push(u)) : (t.roundLengths && (u = Math.floor(u)), at % t.slidesPerGroup == 0 && r.push(u), w.push(u), u = u + f + s);
							this.virtualSize += f + s;
							lt = f;
							at += 1
						}
					}
					if (this.virtualSize = Math.max(this.virtualSize, c) + nt, ht && ci && ("slide" === t.effect || "coverflow" === t.effect) && p.css({
							width: this.virtualSize + t.spaceBetween + "px"
						}), t.setWrapperSize && (this.isHorizontal() ? p.css({
							width: this.virtualSize + t.spaceBetween + "px"
						}) : p.css({
							height: this.virtualSize + t.spaceBetween + "px"
						})), t.slidesPerColumn > 1 && (this.virtualSize = (f + t.spaceBetween) * b, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? p.css({
							width: this.virtualSize + t.spaceBetween + "px"
						}) : p.css({
							height: this.virtualSize + t.spaceBetween + "px"
						}), t.centeredSlides)) {
						for (k = [], tt = 0; tt < r.length; tt += 1) et = r[tt], t.roundLengths && (et = Math.floor(et)), r[tt] < this.virtualSize + r[0] && k.push(et);
						r = k
					}
					if (!t.centeredSlides) {
						for (k = [], it = 0; it < r.length; it += 1) ot = r[it], t.roundLengths && (ot = Math.floor(ot)), r[it] <= this.virtualSize - c && k.push(ot);
						r = k;
						Math.floor(this.virtualSize - c) - Math.floor(r[r.length - 1]) > 1 && r.push(this.virtualSize - c)
					}(0 === r.length && (r = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? ht ? o.filter(ct).css({
						marginLeft: s + "px"
					}) : o.filter(ct).css({
						marginRight: s + "px"
					}) : o.filter(ct).css({
						marginBottom: s + "px"
					})), t.centeredSlides && t.centeredSlidesBounds) && (pt = 0, rt.forEach(function(n) {
						pt += n + (t.spaceBetween ? t.spaceBetween : 0)
					}), wt = (pt -= t.spaceBetween) - c, r = r.map(function(n) {
						return n < 0 ? -ut : n > wt ? wt + nt : n
					}));
					t.centerInsufficientSlides && (st = 0, (rt.forEach(function(n) {
						st += n + (t.spaceBetween ? t.spaceBetween : 0)
					}), (st -= t.spaceBetween) < c) && (bt = (c - st) / 2, r.forEach(function(n, t) {
						r[t] = n - bt
					}), w.forEach(function(n, t) {
						w[t] = n + bt
					})));
					n.extend(this, {
						slides: o,
						snapGrid: r,
						slidesGrid: w,
						slidesSizesGrid: rt
					});
					a !== li && this.emit("slidesLengthChange");
					r.length !== ai && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange"));
					w.length !== vi && this.emit("slidesGridLengthChange");
					(t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
				}
			},
			updateAutoHeight: function(n) {
				var t, i = [],
					r = 0,
					u, f;
				if ("number" == typeof n ? this.setTransition(n) : !0 === n && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
					for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
						if (u = this.activeIndex + t, u > this.slides.length) break;
						i.push(this.slides.eq(u)[0])
					} else i.push(this.slides.eq(this.activeIndex)[0]);
				for (t = 0; t < i.length; t += 1) void 0 !== i[t] && (f = i[t].offsetHeight, r = f > r ? f : r);
				r && this.$wrapperEl.css("height", r + "px")
			},
			updateSlidesOffset: function() {
				for (var t = this.slides, n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = this.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
			},
			updateSlidesProgress: function(n) {
				var o, i, u, h, e, s;
				void 0 === n && (n = this && this.translate || 0);
				var f = this.params,
					r = this.slides,
					c = this.rtlTranslate;
				if (0 !== r.length) {
					for (void 0 === r[0].swiperSlideOffset && this.updateSlidesOffset(), o = -n, c && (o = n), r.removeClass(f.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [], i = 0; i < r.length; i += 1) u = r[i], h = (o + (f.centeredSlides ? this.minTranslate() : 0) - u.swiperSlideOffset) / (u.swiperSlideSize + f.spaceBetween), f.watchSlidesVisibility && (e = -(o - u.swiperSlideOffset), s = e + this.slidesSizesGrid[i], (e >= 0 && e < this.size - 1 || s > 1 && s <= this.size || e <= 0 && s >= this.size) && (this.visibleSlides.push(u), this.visibleSlidesIndexes.push(i), r.eq(i).addClass(f.slideVisibleClass))), u.progress = c ? -h : h;
					this.visibleSlides = t(this.visibleSlides)
				}
			},
			updateProgress: function(t) {
				var f;
				void 0 === t && (f = this.rtlTranslate ? -1 : 1, t = this && this.translate && this.translate * f || 0);
				var e = this.params,
					o = this.maxTranslate() - this.minTranslate(),
					u = this.progress,
					i = this.isBeginning,
					r = this.isEnd,
					s = i,
					h = r;
				0 === o ? (u = 0, i = !0, r = !0) : (i = (u = (t - this.minTranslate()) / o) <= 0, r = u >= 1);
				n.extend(this, {
					progress: u,
					isBeginning: i,
					isEnd: r
				});
				(e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesProgress(t);
				i && !s && this.emit("reachBeginning toEdge");
				r && !h && this.emit("reachEnd toEdge");
				(s && !i || h && !r) && this.emit("fromEdge");
				this.emit("progress", u)
			},
			updateSlidesClasses: function() {
				var u, f = this.slides,
					n = this.params,
					t = this.$wrapperEl,
					e = this.activeIndex,
					o = this.realIndex,
					s = this.virtual && n.virtual.enabled,
					i, r;
				f.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass);
				(u = s ? this.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]') : f.eq(e)).addClass(n.slideActiveClass);
				n.loop && (u.hasClass(n.slideDuplicateClass) ? t.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(n.slideDuplicateActiveClass) : t.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(n.slideDuplicateActiveClass));
				i = u.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
				n.loop && 0 === i.length && (i = f.eq(0)).addClass(n.slideNextClass);
				r = u.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
				n.loop && 0 === r.length && (r = f.eq(-1)).addClass(n.slidePrevClass);
				n.loop && (i.hasClass(n.slideDuplicateClass) ? t.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : t.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), r.hasClass(n.slideDuplicateClass) ? t.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : t.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
			},
			updateActiveIndex: function(t) {
				var e, f = this.rtlTranslate ? this.translate : -this.translate,
					u = this.slidesGrid,
					o = this.snapGrid,
					h = this.params,
					c = this.activeIndex,
					l = this.realIndex,
					a = this.snapIndex,
					r = t,
					i, s;
				if (void 0 === r) {
					for (i = 0; i < u.length; i += 1) void 0 !== u[i + 1] ? f >= u[i] && f < u[i + 1] - (u[i + 1] - u[i]) / 2 ? r = i : f >= u[i] && f < u[i + 1] && (r = i + 1) : f >= u[i] && (r = i);
					h.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0)
				}((e = o.indexOf(f) >= 0 ? o.indexOf(f) : Math.floor(r / h.slidesPerGroup)) >= o.length && (e = o.length - 1), r !== c) ? (s = parseInt(this.slides.eq(r).attr("data-swiper-slide-index") || r, 10), n.extend(this, {
					snapIndex: e,
					realIndex: s,
					previousIndex: c,
					activeIndex: r
				}), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== s && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")) : e !== a && (this.snapIndex = e, this.emit("snapIndexChange"))
			},
			updateClickedSlide: function(n) {
				var u = this.params,
					i = t(n.target).closest("." + u.slideClass)[0],
					f = !1,
					r;
				if (i)
					for (r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (f = !0);
				if (!i || !f) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
				this.clickedSlide = i;
				this.clickedIndex = this.virtual && this.params.virtual.enabled ? parseInt(t(i).attr("data-swiper-slide-index"), 10) : t(i).index();
				u.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
			}
		},
		ai = {
			getTranslate: function(t) {
				var i;
				void 0 === t && (t = this.isHorizontal() ? "x" : "y");
				var u = this.params,
					f = this.rtlTranslate,
					r = this.translate,
					e = this.$wrapperEl;
				return u.virtualTranslate ? f ? -r : r : u.cssMode ? r : (i = n.getTranslate(e[0], t), f && (i = -i), i || 0)
			},
			setTranslate: function(n, t) {
				var e = this.rtlTranslate,
					u = this.params,
					o = this.$wrapperEl,
					s = this.wrapperEl,
					h = this.progress,
					i = 0,
					r = 0,
					f;
				this.isHorizontal() ? i = e ? -n : n : r = n;
				u.roundLengths && (i = Math.floor(i), r = Math.floor(r));
				u.cssMode ? s[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -i : -r : u.virtualTranslate || o.transform("translate3d(" + i + "px, " + r + "px, 0px)");
				this.previousTranslate = this.translate;
				this.translate = this.isHorizontal() ? i : r;
				f = this.maxTranslate() - this.minTranslate();
				(0 === f ? 0 : (n - this.minTranslate()) / f) !== h && this.updateProgress(n);
				this.emit("setTranslate", this.translate, t)
			},
			minTranslate: function() {
				return -this.snapGrid[0]
			},
			maxTranslate: function() {
				return -this.snapGrid[this.snapGrid.length - 1]
			},
			translateTo: function(n, t, i, r, u) {
				var h, e, c, l, s;
				void 0 === n && (n = 0);
				void 0 === t && (t = this.params.speed);
				void 0 === i && (i = !0);
				void 0 === r && (r = !0);
				var f = this,
					a = f.params,
					o = f.wrapperEl;
				return f.animating && a.preventInteractionOnTransition ? !1 : (c = f.minTranslate(), l = f.maxTranslate(), e = r && n > c ? c : r && n < l ? l : n, f.updateProgress(e), a.cssMode) ? (s = f.isHorizontal(), 0 === t ? o[s ? "scrollLeft" : "scrollTop"] = -e : o.scrollTo ? o.scrollTo(((h = {})[s ? "left" : "top"] = -e, h.behavior = "smooth", h)) : o[s ? "scrollLeft" : "scrollTop"] = -e, !0) : (0 === t ? (f.setTransition(0), f.setTranslate(e), i && (f.emit("beforeTransitionStart", t, u), f.emit("transitionEnd"))) : (f.setTransition(t), f.setTranslate(e), i && (f.emit("beforeTransitionStart", t, u), f.emit("transitionStart")), f.animating || (f.animating = !0, f.onTranslateToWrapperTransitionEnd || (f.onTranslateToWrapperTransitionEnd = function(n) {
					f && !f.destroyed && n.target === this && (f.$wrapperEl[0].removeEventListener("transitionend", f.onTranslateToWrapperTransitionEnd), f.$wrapperEl[0].removeEventListener("webkitTransitionEnd", f.onTranslateToWrapperTransitionEnd), f.onTranslateToWrapperTransitionEnd = null, delete f.onTranslateToWrapperTransitionEnd, i && f.emit("transitionEnd"))
				}), f.$wrapperEl[0].addEventListener("transitionend", f.onTranslateToWrapperTransitionEnd), f.$wrapperEl[0].addEventListener("webkitTransitionEnd", f.onTranslateToWrapperTransitionEnd))), !0)
			}
		},
		vi = {
			setTransition: function(n, t) {
				this.params.cssMode || this.$wrapperEl.transition(n);
				this.emit("setTransition", n, t)
			},
			transitionStart: function(n, t) {
				var i;
				void 0 === n && (n = !0);
				var r = this.activeIndex,
					f = this.params,
					u = this.previousIndex;
				if (!f.cssMode && (f.autoHeight && this.updateAutoHeight(), i = t, i || (i = r > u ? "next" : r < u ? "prev" : "reset"), this.emit("transitionStart"), n && r !== u)) {
					if ("reset" === i) return void this.emit("slideResetTransitionStart");
					this.emit("slideChangeTransitionStart");
					"next" === i ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
				}
			},
			transitionEnd: function(n, t) {
				var i;
				void 0 === n && (n = !0);
				var r = this.activeIndex,
					u = this.previousIndex,
					f = this.params;
				if ((this.animating = !1, !f.cssMode) && (this.setTransition(0), i = t, i || (i = r > u ? "next" : r < u ? "prev" : "reset"), this.emit("transitionEnd"), n && r !== u)) {
					if ("reset" === i) return void this.emit("slideResetTransitionEnd");
					this.emit("slideChangeTransitionEnd");
					"next" === i ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
				}
			}
		},
		yi = {
			slideTo: function(n, t, i, r) {
				var y, u, e, a, o, f, c, v;
				void 0 === n && (n = 0);
				void 0 === t && (t = this.params.speed);
				void 0 === i && (i = !0);
				u = this;
				e = n;
				e < 0 && (e = 0);
				var s = u.params,
					p = u.snapGrid,
					w = u.slidesGrid,
					k = u.previousIndex,
					h = u.activeIndex,
					b = u.rtlTranslate,
					l = u.wrapperEl;
				if (u.animating && s.preventInteractionOnTransition) return !1;
				if (a = Math.floor(e / s.slidesPerGroup), a >= p.length && (a = p.length - 1), (h || s.initialSlide || 0) === (k || 0) && i && u.emit("beforeSlideChangeStart"), f = -p[a], u.updateProgress(f), s.normalizeSlideIndex)
					for (c = 0; c < w.length; c += 1) - Math.floor(100 * f) >= Math.floor(100 * w[c]) && (e = c);
				return u.initialized && e !== h && (!u.allowSlideNext && f < u.translate && f < u.minTranslate() || !u.allowSlidePrev && f > u.translate && f > u.maxTranslate() && (h || 0) !== e) ? !1 : (o = e > h ? "next" : e < h ? "prev" : "reset", b && -f === u.translate || !b && f === u.translate) ? (u.updateActiveIndex(e), s.autoHeight && u.updateAutoHeight(), u.updateSlidesClasses(), "slide" !== s.effect && u.setTranslate(f), "reset" !== o && (u.transitionStart(i, o), u.transitionEnd(i, o)), !1) : s.cssMode ? (v = u.isHorizontal(), 0 === t ? l[v ? "scrollLeft" : "scrollTop"] = -f : l.scrollTo ? l.scrollTo(((y = {})[v ? "left" : "top"] = -f, y.behavior = "smooth", y)) : l[v ? "scrollLeft" : "scrollTop"] = -f, !0) : (0 === t ? (u.setTransition(0), u.setTranslate(f), u.updateActiveIndex(e), u.updateSlidesClasses(), u.emit("beforeTransitionStart", t, r), u.transitionStart(i, o), u.transitionEnd(i, o)) : (u.setTransition(t), u.setTranslate(f), u.updateActiveIndex(e), u.updateSlidesClasses(), u.emit("beforeTransitionStart", t, r), u.transitionStart(i, o), u.animating || (u.animating = !0, u.onSlideToWrapperTransitionEnd || (u.onSlideToWrapperTransitionEnd = function(n) {
					u && !u.destroyed && n.target === this && (u.$wrapperEl[0].removeEventListener("transitionend", u.onSlideToWrapperTransitionEnd), u.$wrapperEl[0].removeEventListener("webkitTransitionEnd", u.onSlideToWrapperTransitionEnd), u.onSlideToWrapperTransitionEnd = null, delete u.onSlideToWrapperTransitionEnd, u.transitionEnd(i, o))
				}), u.$wrapperEl[0].addEventListener("transitionend", u.onSlideToWrapperTransitionEnd), u.$wrapperEl[0].addEventListener("webkitTransitionEnd", u.onSlideToWrapperTransitionEnd))), !0)
			},
			slideToLoop: function(n, t, i, r) {
				void 0 === n && (n = 0);
				void 0 === t && (t = this.params.speed);
				void 0 === i && (i = !0);
				var u = n;
				return this.params.loop && (u += this.loopedSlides), this.slideTo(u, t, i, r)
			},
			slideNext: function(n, t, i) {
				void 0 === n && (n = this.params.speed);
				void 0 === t && (t = !0);
				var r = this.params,
					u = this.animating;
				return r.loop ? !u && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + r.slidesPerGroup, n, t, i)) : this.slideTo(this.activeIndex + r.slidesPerGroup, n, t, i)
			},
			slidePrev: function(n, t, i) {
				function f(n) {
					return n < 0 ? -Math.floor(Math.abs(n)) : Math.floor(n)
				}
				void 0 === n && (n = this.params.speed);
				void 0 === t && (t = !0);
				var s = this.params,
					l = this.animating,
					u = this.snapGrid,
					h = this.slidesGrid,
					a = this.rtlTranslate;
				if (s.loop) {
					if (l) return !1;
					this.loopFix();
					this._clientLeft = this.$wrapperEl[0].clientLeft
				}
				var e, o = f(a ? this.translate : -this.translate),
					c = u.map(function(n) {
						return f(n)
					}),
					r = (h.map(function(n) {
						return f(n)
					}), u[c.indexOf(o)], u[c.indexOf(o) - 1]);
				return void 0 === r && s.cssMode && u.forEach(function(n) {
					!r && o >= n && (r = n)
				}), void 0 !== r && (e = h.indexOf(r)) < 0 && (e = this.activeIndex - 1), this.slideTo(e, n, t, i)
			},
			slideReset: function(n, t, i) {
				return void 0 === n && (n = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, n, t, i)
			},
			slideToClosest: function(n, t, i, r) {
				var o, s;
				void 0 === n && (n = this.params.speed);
				void 0 === t && (t = !0);
				void 0 === r && (r = .5);
				var u = this.activeIndex,
					f = Math.floor(u / this.params.slidesPerGroup),
					e = this.rtlTranslate ? this.translate : -this.translate;
				return e >= this.snapGrid[f] ? (o = this.snapGrid[f], e - o > (this.snapGrid[f + 1] - o) * r && (u += this.params.slidesPerGroup)) : (s = this.snapGrid[f - 1], e - s <= (this.snapGrid[f] - s) * r && (u -= this.params.slidesPerGroup)), u = Math.max(u, 0), u = Math.min(u, this.snapGrid.length - 1), this.slideTo(u, n, t, i)
			},
			slideToClickedSlide: function() {
				var f, i = this,
					u = i.params,
					o = i.$wrapperEl,
					e = "auto" === u.slidesPerView ? i.slidesPerViewDynamic() : u.slidesPerView,
					r = i.clickedIndex;
				if (u.loop) {
					if (i.animating) return;
					f = parseInt(t(i.clickedSlide).attr("data-swiper-slide-index"), 10);
					u.centeredSlides ? r < i.loopedSlides - e / 2 || r > i.slides.length - i.loopedSlides + e / 2 ? (i.loopFix(), r = o.children("." + u.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.' + u.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function() {
						i.slideTo(r)
					})) : i.slideTo(r) : r > i.slides.length - e ? (i.loopFix(), r = o.children("." + u.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.' + u.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function() {
						i.slideTo(r)
					})) : i.slideTo(r)
				} else i.slideTo(r)
			}
		},
		pi = {
			loopCreate: function() {
				var u = this,
					n = u.params,
					f = u.$wrapperEl,
					i, c, l, a, e, o, s, h;
				if (f.children("." + n.slideClass + "." + n.slideDuplicateClass).remove(), i = f.children("." + n.slideClass), n.loopFillGroupWithBlank && (c = n.slidesPerGroup - i.length % n.slidesPerGroup, c !== n.slidesPerGroup)) {
					for (l = 0; l < c; l += 1) a = t(r.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass), f.append(a);
					i = f.children("." + n.slideClass)
				}
				for ("auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = i.length), u.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), u.loopedSlides += n.loopAdditionalSlides, u.loopedSlides > i.length && (u.loopedSlides = i.length), e = [], o = [], i.each(function(n, r) {
						var f = t(r);
						n < u.loopedSlides && o.push(r);
						n < i.length && n >= i.length - u.loopedSlides && e.push(r);
						f.attr("data-swiper-slide-index", n)
					}), s = 0; s < o.length; s += 1) f.append(t(o[s].cloneNode(!0)).addClass(n.slideDuplicateClass));
				for (h = e.length - 1; h >= 0; h -= 1) f.prepend(t(e[h].cloneNode(!0)).addClass(n.slideDuplicateClass))
			},
			loopFix: function() {
				var r;
				this.emit("beforeLoopFix");
				var n, i = this.activeIndex,
					u = this.slides,
					t = this.loopedSlides,
					e = this.allowSlidePrev,
					o = this.allowSlideNext,
					s = this.snapGrid,
					f = this.rtlTranslate;
				this.allowSlidePrev = !0;
				this.allowSlideNext = !0;
				r = -s[i] - this.getTranslate();
				i < t ? (n = u.length - 3 * t + i, n += t, this.slideTo(n, 0, !1, !0) && 0 !== r && this.setTranslate((f ? -this.translate : this.translate) - r)) : i >= u.length - t && (n = -u.length + i + t, n += t, this.slideTo(n, 0, !1, !0) && 0 !== r && this.setTranslate((f ? -this.translate : this.translate) - r));
				this.allowSlidePrev = e;
				this.allowSlideNext = o;
				this.emit("loopFix")
			},
			loopDestroy: function() {
				var t = this.$wrapperEl,
					n = this.params,
					i = this.slides;
				t.children("." + n.slideClass + "." + n.slideDuplicateClass + ",." + n.slideClass + "." + n.slideBlankClass).remove();
				i.removeAttr("data-swiper-slide-index")
			}
		},
		wi = {
			setGrabCursor: function(n) {
				if (!(u.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
					var t = this.el;
					t.style.cursor = "move";
					t.style.cursor = n ? "-webkit-grabbing" : "-webkit-grab";
					t.style.cursor = n ? "-moz-grabbin" : "-moz-grab";
					t.style.cursor = n ? "grabbing" : "grab"
				}
			},
			unsetGrabCursor: function() {
				u.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
			}
		},
		ht, o, f, b, k, ct, y, p, d, ti, ii, ri, lt, at, tt, bi = {
			appendSlide: function(n) {
				var r = this.$wrapperEl,
					i = this.params,
					t;
				if (i.loop && this.loopDestroy(), "object" == typeof n && "length" in n)
					for (t = 0; t < n.length; t += 1) n[t] && r.append(n[t]);
				else r.append(n);
				i.loop && this.loopCreate();
				i.observer && u.observer || this.update()
			},
			prependSlide: function(n) {
				var i = this.params,
					f = this.$wrapperEl,
					e = this.activeIndex,
					r, t;
				if (i.loop && this.loopDestroy(), r = e + 1, "object" == typeof n && "length" in n) {
					for (t = 0; t < n.length; t += 1) n[t] && f.prepend(n[t]);
					r = e + n.length
				} else f.prepend(n);
				i.loop && this.loopCreate();
				i.observer && u.observer || this.update();
				this.slideTo(r, 0, !1)
			},
			addSlide: function(n, t) {
				var e = this.$wrapperEl,
					r = this.params,
					i = this.activeIndex,
					s, a, f, o;
				if (r.loop && (i -= this.loopedSlides, this.loopDestroy(), this.slides = e.children("." + r.slideClass)), s = this.slides.length, n <= 0) this.prependSlide(t);
				else if (n >= s) this.appendSlide(t);
				else {
					for (var h = i > n ? i + 1 : i, c = [], l = s - 1; l >= n; l -= 1) a = this.slides.eq(l), a.remove(), c.unshift(a);
					if ("object" == typeof t && "length" in t) {
						for (f = 0; f < t.length; f += 1) t[f] && e.append(t[f]);
						h = i > n ? i + t.length : i
					} else e.append(t);
					for (o = 0; o < c.length; o += 1) e.append(c[o]);
					r.loop && this.loopCreate();
					r.observer && u.observer || this.update();
					r.loop ? this.slideTo(h + this.loopedSlides, 0, !1) : this.slideTo(h, 0, !1)
				}
			},
			removeSlide: function(n) {
				var r = this.params,
					o = this.$wrapperEl,
					e = this.activeIndex,
					i, t, f;
				if (r.loop && (e -= this.loopedSlides, this.loopDestroy(), this.slides = o.children("." + r.slideClass)), t = e, "object" == typeof n && "length" in n) {
					for (f = 0; f < n.length; f += 1) i = n[f], this.slides[i] && this.slides.eq(i).remove(), i < t && (t -= 1);
					t = Math.max(t, 0)
				} else i = n, this.slides[i] && this.slides.eq(i).remove(), i < t && (t -= 1), t = Math.max(t, 0);
				r.loop && this.loopCreate();
				r.observer && u.observer || this.update();
				r.loop ? this.slideTo(t + this.loopedSlides, 0, !1) : this.slideTo(t, 0, !1)
			},
			removeAllSlides: function() {
				for (var t = [], n = 0; n < this.slides.length; n += 1) t.push(n);
				this.removeSlide(t)
			}
		},
		s = (ht = i.navigator.platform, o = i.navigator.userAgent, f = {
			ios: !1,
			android: !1,
			androidChrome: !1,
			desktop: !1,
			iphone: !1,
			ipod: !1,
			ipad: !1,
			edge: !1,
			ie: !1,
			firefox: !1,
			macos: !1,
			windows: !1,
			cordova: !(!i.cordova && !i.phonegap),
			phonegap: !(!i.cordova && !i.phonegap),
			electron: !1
		}, b = i.screen.width, k = i.screen.height, ct = o.match(/(Android);?[\s\/]+([\d.]+)?/), y = o.match(/(iPad).*OS\s([\d_]+)/), p = o.match(/(iPod)(.*OS\s([\d_]+))?/), d = !y && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/), ti = o.indexOf("MSIE ") >= 0 || o.indexOf("Trident/") >= 0, ii = o.indexOf("Edge/") >= 0, ri = o.indexOf("Gecko/") >= 0 && o.indexOf("Firefox/") >= 0, lt = "Win32" === ht, at = o.toLowerCase().indexOf("electron") >= 0, tt = "MacIntel" === ht, !y && tt && u.touch && (1024 === b && 1366 === k || 834 === b && 1194 === k || 834 === b && 1112 === k || 768 === b && 1024 === k) && (y = o.match(/(Version)\/([\d.]+)/), tt = !1), f.ie = ti, f.edge = ii, f.firefox = ri, ct && !lt && (f.os = "android", f.osVersion = ct[2], f.android = !0, f.androidChrome = o.toLowerCase().indexOf("chrome") >= 0), (y || d || p) && (f.os = "ios", f.ios = !0), d && !p && (f.osVersion = d[2].replace(/_/g, "."), f.iphone = !0), y && (f.osVersion = y[2].replace(/_/g, "."), f.ipad = !0), p && (f.osVersion = p[3] ? p[3].replace(/_/g, ".") : null, f.ipod = !0), f.ios && f.osVersion && o.indexOf("Version/") >= 0 && "10" === f.osVersion.split(".")[0] && (f.osVersion = o.toLowerCase().split("version/")[1].split(" ")[0]), f.webView = !(!(d || y || p) || !o.match(/.*AppleWebKit(?!.*Safari)/i) && !i.navigator.standalone) || i.matchMedia && i.matchMedia("(display-mode: standalone)").matches, f.webview = f.webView, f.standalone = f.webView, f.desktop = !(f.ios || f.android) || at, f.desktop && (f.electron = at, f.macos = tt, f.windows = lt, f.macos && (f.os = "macos"), f.windows && (f.os = "windows")), f.pixelRatio = i.devicePixelRatio || 1, f);
	yt = !1;
	var ui = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			cssMode: !1,
			updateOnWindowResize: !0,
			preventInteractionOnTransition: !1,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			centeredSlides: !1,
			centeredSlidesBounds: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !1,
			touchStartPreventDefault: !0,
			touchStartForcePreventDefault: !1,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0
		},
		pt = {
			update: li,
			translate: ai,
			transition: vi,
			slide: yi,
			loop: pi,
			grabCursor: wi,
			manipulation: bi,
			events: {
				attachEvents: function() {
					var n = this.params,
						t = this.touchEvents,
						i = this.el,
						o = this.wrapperEl,
						f, e;
					this.onTouchStart = ki.bind(this);
					this.onTouchMove = di.bind(this);
					this.onTouchEnd = gi.bind(this);
					n.cssMode && (this.onScroll = tr.bind(this));
					this.onClick = nr.bind(this);
					f = !!n.nested;
					!u.touch && u.pointerEvents ? (i.addEventListener(t.start, this.onTouchStart, !1), r.addEventListener(t.move, this.onTouchMove, f), r.addEventListener(t.end, this.onTouchEnd, !1)) : (u.touch && (e = !("touchstart" !== t.start || !u.passiveListener || !n.passiveListeners) && {
						passive: !0,
						capture: !1
					}, i.addEventListener(t.start, this.onTouchStart, e), i.addEventListener(t.move, this.onTouchMove, u.passiveListener ? {
						passive: !1,
						capture: f
					} : f), i.addEventListener(t.end, this.onTouchEnd, e), t.cancel && i.addEventListener(t.cancel, this.onTouchEnd, e), yt || (r.addEventListener("touchstart", ir), yt = !0)), (n.simulateTouch && !s.ios && !s.android || n.simulateTouch && !u.touch && s.ios) && (i.addEventListener("mousedown", this.onTouchStart, !1), r.addEventListener("mousemove", this.onTouchMove, f), r.addEventListener("mouseup", this.onTouchEnd, !1)));
					(n.preventClicks || n.preventClicksPropagation) && i.addEventListener("click", this.onClick, !0);
					n.cssMode && o.addEventListener("scroll", this.onScroll);
					n.updateOnWindowResize ? this.on(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", vt, !0) : this.on("observerUpdate", vt, !0)
				},
				detachEvents: function() {
					var t = this.params,
						n = this.touchEvents,
						i = this.el,
						o = this.wrapperEl,
						e = !!t.nested,
						f;
					!u.touch && u.pointerEvents ? (i.removeEventListener(n.start, this.onTouchStart, !1), r.removeEventListener(n.move, this.onTouchMove, e), r.removeEventListener(n.end, this.onTouchEnd, !1)) : (u.touch && (f = !("onTouchStart" !== n.start || !u.passiveListener || !t.passiveListeners) && {
						passive: !0,
						capture: !1
					}, i.removeEventListener(n.start, this.onTouchStart, f), i.removeEventListener(n.move, this.onTouchMove, e), i.removeEventListener(n.end, this.onTouchEnd, f), n.cancel && i.removeEventListener(n.cancel, this.onTouchEnd, f)), (t.simulateTouch && !s.ios && !s.android || t.simulateTouch && !u.touch && s.ios) && (i.removeEventListener("mousedown", this.onTouchStart, !1), r.removeEventListener("mousemove", this.onTouchMove, e), r.removeEventListener("mouseup", this.onTouchEnd, !1)));
					(t.preventClicks || t.preventClicksPropagation) && i.removeEventListener("click", this.onClick, !0);
					t.cssMode && o.removeEventListener("scroll", this.onScroll);
					this.off(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", vt)
				}
			},
			breakpoints: {
				setBreakpoint: function() {
					var v = this.activeIndex,
						h = this.initialized,
						e = this.loopedSlides,
						u, f, s, a;
					void 0 === e && (e = 0);
					var t = this.params,
						o = this.$el,
						r = t.breakpoints;
					if (r && (!r || 0 !== Object.keys(r).length) && (u = this.getBreakpoint(r), u && this.currentBreakpoint !== u)) {
						f = u in r ? r[u] : void 0;
						f && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerColumn"].forEach(function(n) {
							var t = f[n];
							void 0 !== t && (f[n] = "slidesPerView" !== n || "AUTO" !== t && "auto" !== t ? "slidesPerView" === n ? parseFloat(t) : parseInt(t, 10) : "auto")
						});
						var i = f || this.originalParams,
							c = t.slidesPerColumn > 1,
							l = i.slidesPerColumn > 1;
						c && !l ? o.removeClass(t.containerModifierClass + "multirow " + t.containerModifierClass + "multirow-column") : !c && l && (o.addClass(t.containerModifierClass + "multirow"), "column" === i.slidesPerColumnFill && o.addClass(t.containerModifierClass + "multirow-column"));
						s = i.direction && i.direction !== t.direction;
						a = t.loop && (i.slidesPerView !== t.slidesPerView || s);
						s && h && this.changeDirection();
						n.extend(this.params, i);
						n.extend(this, {
							allowTouchMove: this.params.allowTouchMove,
							allowSlideNext: this.params.allowSlideNext,
							allowSlidePrev: this.params.allowSlidePrev
						});
						this.currentBreakpoint = u;
						a && h && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(v - e + this.loopedSlides, 0, !1));
						this.emit("breakpoint", i)
					}
				},
				getBreakpoint: function(n) {
					var u, t, r, f;
					if (n) {
						for (u = !1, t = [], Object.keys(n).forEach(function(n) {
								t.push(n)
							}), t.sort(function(n, t) {
								return parseInt(n, 10) - parseInt(t, 10)
							}), r = 0; r < t.length; r += 1) f = t[r], f <= i.innerWidth && (u = f);
						return u || "max"
					}
				}
			},
			checkOverflow: {
				checkOverflow: function() {
					var n = this.params,
						t = this.isLocked,
						i = this.slides.length > 0 && n.slidesOffsetBefore + n.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
					this.isLocked = n.slidesOffsetBefore && n.slidesOffsetAfter && i ? i <= this.size : 1 === this.snapGrid.length;
					this.allowSlideNext = !this.isLocked;
					this.allowSlidePrev = !this.isLocked;
					t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock");
					t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
				}
			},
			classes: {
				addClasses: function() {
					var i = this.classNames,
						t = this.params,
						r = this.rtl,
						u = this.$el,
						n = [];
					n.push("initialized");
					n.push(t.direction);
					t.freeMode && n.push("free-mode");
					t.autoHeight && n.push("autoheight");
					r && n.push("rtl");
					t.slidesPerColumn > 1 && (n.push("multirow"), "column" === t.slidesPerColumnFill && n.push("multirow-column"));
					s.android && n.push("android");
					s.ios && n.push("ios");
					t.cssMode && n.push("css-mode");
					n.forEach(function(n) {
						i.push(t.containerModifierClass + n)
					});
					u.addClass(i.join(" "))
				},
				removeClasses: function() {
					var n = this.$el,
						t = this.classNames;
					n.removeClass(t.join(" "))
				}
			},
			images: {
				loadImage: function(n, t, r, u, f, e) {
					function s() {
						e && e()
					}
					var o;
					n.complete && f ? s() : t ? ((o = new i.Image).onload = s, o.onerror = s, u && (o.sizes = u), r && (o.srcset = r), t && (o.src = t)) : s()
				},
				preloadImages: function() {
					function r() {
						null != n && n && !n.destroyed && (void 0 !== n.imagesLoaded && (n.imagesLoaded += 1), n.imagesLoaded === n.imagesToLoad.length && (n.params.updateOnImagesReady && n.update(), n.emit("imagesReady")))
					}
					var n = this,
						i, t;
					for (n.imagesToLoad = n.$el.find("img"), i = 0; i < n.imagesToLoad.length; i += 1) t = n.imagesToLoad[i], n.loadImage(t, t.currentSrc || t.getAttribute("src"), t.srcset || t.getAttribute("srcset"), t.sizes || t.getAttribute("sizes"), !0, r)
				}
			}
		},
		wt = {},
		c = function(i) {
			function r() {
				for (var w, o, e, f, y, s, p, c, l, a, h = [], v = arguments.length; v--;) h[v] = arguments[v];
				return 1 === h.length && h[0].constructor && h[0].constructor === Object ? e = h[0] : (o = (w = h)[0], e = w[1]), e || (e = {}), e = n.extend({}, e), o && !e.el && (e.el = o), i.call(this, e), Object.keys(pt).forEach(function(n) {
					Object.keys(pt[n]).forEach(function(t) {
						r.prototype[t] || (r.prototype[t] = pt[n][t])
					})
				}), f = this, void 0 === f.modules && (f.modules = {}), Object.keys(f.modules).forEach(function(n) {
					var r = f.modules[n],
						t, i;
					if (r.params) {
						if (t = Object.keys(r.params)[0], i = r.params[t], "object" != typeof i || null === i) return;
						if (!(t in e && "enabled" in i)) return;
						!0 === e[t] && (e[t] = {
							enabled: !0
						});
						"object" != typeof e[t] || "enabled" in e[t] || (e[t].enabled = !0);
						e[t] || (e[t] = {
							enabled: !1
						})
					}
				}), y = n.extend({}, ui), f.useModulesParams(y), f.params = n.extend({}, y, wt, e), f.originalParams = n.extend({}, f.params), f.passedParams = n.extend({}, e), f.$ = t, s = t(f.params.el), (o = s[0]) ? s.length > 1 ? (p = [], s.each(function(t, i) {
					var u = n.extend({}, e, {
						el: i
					});
					p.push(new r(u))
				}), p) : (o.swiper = f, s.data("swiper", f), o && o.shadowRoot && o.shadowRoot.querySelector ? (c = t(o.shadowRoot.querySelector("." + f.params.wrapperClass))).children = function(n) {
					return s.children(n)
				} : c = s.children("." + f.params.wrapperClass), n.extend(f, {
					$el: s,
					el: o,
					$wrapperEl: c,
					wrapperEl: c[0],
					classNames: [],
					slides: t(),
					slidesGrid: [],
					snapGrid: [],
					slidesSizesGrid: [],
					isHorizontal: function() {
						return "horizontal" === f.params.direction
					},
					isVertical: function() {
						return "vertical" === f.params.direction
					},
					rtl: "rtl" === o.dir.toLowerCase() || "rtl" === s.css("direction"),
					rtlTranslate: "horizontal" === f.params.direction && ("rtl" === o.dir.toLowerCase() || "rtl" === s.css("direction")),
					wrongRTL: "-webkit-box" === c.css("display"),
					activeIndex: 0,
					realIndex: 0,
					isBeginning: !0,
					isEnd: !1,
					translate: 0,
					previousTranslate: 0,
					progress: 0,
					velocity: 0,
					animating: !1,
					allowSlideNext: f.params.allowSlideNext,
					allowSlidePrev: f.params.allowSlidePrev,
					touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], a = ["mousedown", "mousemove", "mouseup"], u.pointerEvents && (a = ["pointerdown", "pointermove", "pointerup"]), f.touchEventsTouch = {
						start: l[0],
						move: l[1],
						end: l[2],
						cancel: l[3]
					}, f.touchEventsDesktop = {
						start: a[0],
						move: a[1],
						end: a[2]
					}, u.touch || !f.params.simulateTouch ? f.touchEventsTouch : f.touchEventsDesktop),
					touchEventsData: {
						isTouched: void 0,
						isMoved: void 0,
						allowTouchCallbacks: void 0,
						touchStartTime: void 0,
						isScrolling: void 0,
						currentTranslate: void 0,
						startTranslate: void 0,
						allowThresholdMove: void 0,
						formElements: "input, select, option, textarea, button, video",
						lastClickTime: n.now(),
						clickTimeout: void 0,
						velocities: [],
						allowMomentumBounce: void 0,
						isTouchEvent: void 0,
						startMoving: void 0
					},
					allowClick: !0,
					allowTouchMove: f.params.allowTouchMove,
					touches: {
						startX: 0,
						startY: 0,
						currentX: 0,
						currentY: 0,
						diff: 0
					},
					imagesToLoad: [],
					imagesLoaded: 0
				}), f.useModules(), f.params.init && f.init(), f) : void 0
			}
			i && (r.__proto__ = i);
			r.prototype = Object.create(i && i.prototype);
			r.prototype.constructor = r;
			var f = {
				extendedDefaults: {
					configurable: !0
				},
				defaults: {
					configurable: !0
				},
				Class: {
					configurable: !0
				},
				$: {
					configurable: !0
				}
			};
			return r.prototype.slidesPerViewDynamic = function() {
				var c = this.params,
					n = this.slides,
					h = this.slidesGrid,
					o = this.size,
					t = this.activeIndex,
					u = 1,
					f, s, i, r, e;
				if (c.centeredSlides) {
					for (s = n[t].swiperSlideSize, i = t + 1; i < n.length; i += 1) n[i] && !f && (u += 1, (s += n[i].swiperSlideSize) > o && (f = !0));
					for (r = t - 1; r >= 0; r -= 1) n[r] && !f && (u += 1, (s += n[r].swiperSlideSize) > o && (f = !0))
				} else
					for (e = t + 1; e < n.length; e += 1) h[e] - h[t] < o && (u += 1);
				return u
			}, r.prototype.update = function() {
				function r() {
					var t = n.rtlTranslate ? -1 * n.translate : n.translate,
						i = Math.min(Math.max(t, n.maxTranslate()), n.minTranslate());
					n.setTranslate(i);
					n.updateActiveIndex();
					n.updateSlidesClasses()
				}
				var n = this,
					i, t;
				n && !n.destroyed && (i = n.snapGrid, t = n.params, t.breakpoints && n.setBreakpoint(), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.params.freeMode ? (r(), n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || n.params.slidesPerView > 1) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || r(), t.watchOverflow && i !== n.snapGrid && n.checkOverflow(), n.emit("update"))
			}, r.prototype.changeDirection = function(n, t) {
				void 0 === t && (t = !0);
				var i = this.params.direction;
				return n || (n = "horizontal" === i ? "vertical" : "horizontal"), n === i || "horizontal" !== n && "vertical" !== n ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + n), this.params.direction = n, this.slides.each(function(t, i) {
					"vertical" === n ? i.style.width = "" : i.style.height = ""
				}), this.emit("changeDirection"), t && this.update(), this)
			}, r.prototype.init = function() {
				this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
			}, r.prototype.destroy = function(t, i) {
				void 0 === t && (t = !0);
				void 0 === i && (i = !0);
				var r = this,
					u = r.params,
					e = r.$el,
					o = r.$wrapperEl,
					f = r.slides;
				return void 0 === r.params || r.destroyed ? null : (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), u.loop && r.loopDestroy(), i && (r.removeClasses(), e.removeAttr("style"), o.removeAttr("style"), f && f.length && f.removeClass([u.slideVisibleClass, u.slideActiveClass, u.slideNextClass, u.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(function(n) {
					r.off(n)
				}), !1 !== t && (r.$el[0].swiper = null, r.$el.data("swiper", null), n.deleteProps(r)), r.destroyed = !0, null)
			}, r.extendDefaults = function(t) {
				n.extend(wt, t)
			}, f.extendedDefaults.get = function() {
				return wt
			}, f.defaults.get = function() {
				return ui
			}, f.Class.get = function() {
				return i
			}, f.$.get = function() {
				return t
			}, Object.defineProperties(r, f), r
		}(l),
		rr = {
			name: "device",
			proto: {
				device: s
			},
			"static": {
				device: s
			}
		},
		ur = {
			name: "support",
			proto: {
				support: u
			},
			"static": {
				support: u
			}
		},
		it = {
			isEdge: !!i.navigator.userAgent.match(/Edge/g),
			isSafari: function() {
				var n = i.navigator.userAgent.toLowerCase();
				return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0
			}(),
			isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)
		},
		fr = {
			name: "browser",
			proto: {
				browser: it
			},
			"static": {
				browser: it
			}
		},
		er = {
			name: "resize",
			create: function() {
				var t = this;
				n.extend(t, {
					resize: {
						resizeHandler: function() {
							t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"))
						},
						orientationChangeHandler: function() {
							t && !t.destroyed && t.initialized && t.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function() {
					i.addEventListener("resize", this.resize.resizeHandler);
					i.addEventListener("orientationchange", this.resize.orientationChangeHandler)
				},
				destroy: function() {
					i.removeEventListener("resize", this.resize.resizeHandler);
					i.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
				}
			}
		},
		rt = {
			func: i.MutationObserver || i.WebkitMutationObserver,
			attach: function(n, t) {
				void 0 === t && (t = {});
				var r = this,
					u = new rt.func(function(n) {
						if (1 !== n.length) {
							var t = function() {
								r.emit("observerUpdate", n[0])
							};
							i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
						} else r.emit("observerUpdate", n[0])
					});
				u.observe(n, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				});
				r.observer.observers.push(u)
			},
			init: function() {
				if (u.observer && this.params.observer) {
					if (this.params.observeParents)
						for (var t = this.$el.parents(), n = 0; n < t.length; n += 1) this.observer.attach(t[n]);
					this.observer.attach(this.$el[0], {
						childList: this.params.observeSlideChildren
					});
					this.observer.attach(this.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function() {
				this.observer.observers.forEach(function(n) {
					n.disconnect()
				});
				this.observer.observers = []
			}
		},
		or = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1,
				observeSlideChildren: !1
			},
			create: function() {
				n.extend(this, {
					observer: {
						init: rt.init.bind(this),
						attach: rt.attach.bind(this),
						destroy: rt.destroy.bind(this),
						observers: []
					}
				})
			},
			on: {
				init: function() {
					this.observer.init()
				},
				destroy: function() {
					this.observer.destroy()
				}
			}
		},
		w = {
			update: function(t) {
				function ut() {
					i.updateSlides();
					i.updateProgress();
					i.updateSlidesClasses();
					i.lazy && i.params.lazy.enabled && i.lazy.load()
				}
				var i = this,
					v = i.params,
					y = v.slidesPerView,
					c = v.slidesPerGroup,
					ft = v.centeredSlides,
					nt = i.params.virtual,
					tt = nt.addSlidesBefore,
					it = nt.addSlidesAfter,
					f = i.virtual,
					p = f.from,
					l = f.to,
					s = f.slides,
					et = f.slidesGrid,
					rt = f.renderSlide,
					ot = f.offset,
					w, b, k, d, g, a, o, r;
				i.updateActiveIndex();
				d = i.activeIndex || 0;
				w = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top";
				ft ? (b = Math.floor(y / 2) + c + tt, k = Math.floor(y / 2) + c + it) : (b = y + (c - 1) + tt, k = c + it);
				var u = Math.max((d || 0) - k, 0),
					e = Math.min((d || 0) + b, s.length - 1),
					h = (i.slidesGrid[u] || 0) - (i.slidesGrid[0] || 0);
				if (n.extend(i.virtual, {
						from: u,
						to: e,
						offset: h,
						slidesGrid: i.slidesGrid
					}), p === u && l === e && !t) return i.slidesGrid !== et && h !== ot && i.slides.css(w, h + "px"), void i.updateProgress();
				if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
					offset: h,
					from: u,
					to: e,
					slides: function() {
						for (var t = [], n = u; n <= e; n += 1) t.push(s[n]);
						return t
					}()
				}), void ut();
				if (g = [], a = [], t) i.$wrapperEl.find("." + i.params.slideClass).remove();
				else
					for (o = p; o <= l; o += 1)(o < u || o > e) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + o + '"]').remove();
				for (r = 0; r < s.length; r += 1) r >= u && r <= e && (void 0 === l || t ? a.push(r) : (r > l && a.push(r), r < p && g.push(r)));
				a.forEach(function(n) {
					i.$wrapperEl.append(rt(s[n], n))
				});
				g.sort(function(n, t) {
					return t - n
				}).forEach(function(n) {
					i.$wrapperEl.prepend(rt(s[n], n))
				});
				i.$wrapperEl.children(".swiper-slide").css(w, h + "px");
				ut()
			},
			renderSlide: function(n, i) {
				var u = this.params.virtual,
					r;
				return u.cache && this.virtual.cache[i] ? this.virtual.cache[i] : (r = u.renderSlide ? t(u.renderSlide.call(this, n, i)) : t('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + i + '">' + n + "<\/div>"), r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", i), u.cache && (this.virtual.cache[i] = r), r)
			},
			appendSlide: function(n) {
				if ("object" == typeof n && "length" in n)
					for (var t = 0; t < n.length; t += 1) n[t] && this.virtual.slides.push(n[t]);
				else this.virtual.slides.push(n);
				this.virtual.update(!0)
			},
			prependSlide: function(n) {
				var u = this.activeIndex,
					f = u + 1,
					e = 1,
					t, i, r;
				if (Array.isArray(n)) {
					for (t = 0; t < n.length; t += 1) n[t] && this.virtual.slides.unshift(n[t]);
					f = u + n.length;
					e = n.length
				} else this.virtual.slides.unshift(n);
				this.params.virtual.cache && (i = this.virtual.cache, r = {}, Object.keys(i).forEach(function(n) {
					var t = i[n],
						u = t.attr("data-swiper-slide-index");
					u && t.attr("data-swiper-slide-index", parseInt(u, 10) + 1);
					r[parseInt(n, 10) + e] = t
				}), this.virtual.cache = r);
				this.virtual.update(!0);
				this.slideTo(f, 0)
			},
			removeSlide: function(n) {
				var t, i;
				if (null != n) {
					if (t = this.activeIndex, Array.isArray(n))
						for (i = n.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(n[i], 1), this.params.virtual.cache && delete this.virtual.cache[n[i]], n[i] < t && (t -= 1), t = Math.max(t, 0);
					else this.virtual.slides.splice(n, 1), this.params.virtual.cache && delete this.virtual.cache[n], n < t && (t -= 1), t = Math.max(t, 0);
					this.virtual.update(!0);
					this.slideTo(t, 0)
				}
			},
			removeAllSlides: function() {
				this.virtual.slides = [];
				this.params.virtual.cache && (this.virtual.cache = {});
				this.virtual.update(!0);
				this.slideTo(0, 0)
			}
		},
		sr = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					addSlidesBefore: 0,
					addSlidesAfter: 0
				}
			},
			create: function() {
				n.extend(this, {
					virtual: {
						update: w.update.bind(this),
						appendSlide: w.appendSlide.bind(this),
						prependSlide: w.prependSlide.bind(this),
						removeSlide: w.removeSlide.bind(this),
						removeAllSlides: w.removeAllSlides.bind(this),
						renderSlide: w.renderSlide.bind(this),
						slides: this.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function() {
					if (this.params.virtual.enabled) {
						this.classNames.push(this.params.containerModifierClass + "virtual");
						var t = {
							watchSlidesProgress: !0
						};
						n.extend(this.params, t);
						n.extend(this.originalParams, t);
						this.params.initialSlide || this.virtual.update()
					}
				},
				setTranslate: function() {
					this.params.virtual.enabled && this.virtual.update()
				}
			}
		},
		bt = {
			handle: function(n) {
				var e = this.rtlTranslate,
					u = n,
					t, h, c, s, o;
				if ((u.originalEvent && (u = u.originalEvent), t = u.keyCode || u.charCode, !this.allowSlideNext && (this.isHorizontal() && 39 === t || this.isVertical() && 40 === t || 34 === t)) || !this.allowSlidePrev && (this.isHorizontal() && 37 === t || this.isVertical() && 38 === t || 33 === t)) return !1;
				if (!(u.shiftKey || u.altKey || u.ctrlKey || u.metaKey || r.activeElement && r.activeElement.nodeName && ("input" === r.activeElement.nodeName.toLowerCase() || "textarea" === r.activeElement.nodeName.toLowerCase()))) {
					if (this.params.keyboard.onlyInViewport && (33 === t || 34 === t || 37 === t || 39 === t || 38 === t || 40 === t)) {
						if (h = !1, this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
						var l = i.innerWidth,
							a = i.innerHeight,
							f = this.$el.offset();
						for (e && (f.left -= this.$el[0].scrollLeft), c = [
								[f.left, f.top],
								[f.left + this.width, f.top],
								[f.left, f.top + this.height],
								[f.left + this.width, f.top + this.height]
							], s = 0; s < c.length; s += 1) o = c[s], o[0] >= 0 && o[0] <= l && o[1] >= 0 && o[1] <= a && (h = !0);
						if (!h) return
					}
					this.isHorizontal() ? (33 !== t && 34 !== t && 37 !== t && 39 !== t || (u.preventDefault ? u.preventDefault() : u.returnValue = !1), (34 !== t && 39 !== t || e) && (33 !== t && 37 !== t || !e) || this.slideNext(), (33 !== t && 37 !== t || e) && (34 !== t && 39 !== t || !e) || this.slidePrev()) : (33 !== t && 34 !== t && 38 !== t && 40 !== t || (u.preventDefault ? u.preventDefault() : u.returnValue = !1), 34 !== t && 40 !== t || this.slideNext(), 33 !== t && 38 !== t || this.slidePrev());
					this.emit("keyPress", t)
				}
			},
			enable: function() {
				this.keyboard.enabled || (t(r).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
			},
			disable: function() {
				this.keyboard.enabled && (t(r).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
			}
		},
		hr = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1,
					onlyInViewport: !0
				}
			},
			create: function() {
				n.extend(this, {
					keyboard: {
						enabled: !1,
						enable: bt.enable.bind(this),
						disable: bt.disable.bind(this),
						handle: bt.handle.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.keyboard.enabled && this.keyboard.enable()
				},
				destroy: function() {
					this.keyboard.enabled && this.keyboard.disable()
				}
			}
		},
		a = {
			lastScrollTime: n.now(),
			lastEventBeforeSnap: void 0,
			recentWheelEvents: [],
			event: function() {
				return i.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
					var n = "onwheel" in r,
						t;
					return n || (t = r.createElement("div"), t.setAttribute("onwheel", "return;"), n = "function" == typeof t.onwheel), !n && r.implementation && r.implementation.hasFeature && !0 !== r.implementation.hasFeature("", "") && (n = r.implementation.hasFeature("Events.wheel", "3.0")), n
				}() ? "wheel" : "mousewheel"
			},
			normalize: function(n) {
				var u = 0,
					r = 0,
					t = 0,
					i = 0;
				return "detail" in n && (r = n.detail), "wheelDelta" in n && (r = -n.wheelDelta / 120), "wheelDeltaY" in n && (r = -n.wheelDeltaY / 120), "wheelDeltaX" in n && (u = -n.wheelDeltaX / 120), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (u = r, r = 0), t = 10 * u, i = 10 * r, "deltaY" in n && (i = n.deltaY), "deltaX" in n && (t = n.deltaX), n.shiftKey && !t && (t = i, i = 0), (t || i) && n.deltaMode && (1 === n.deltaMode ? (t *= 40, i *= 40) : (t *= 800, i *= 800)), t && !u && (u = t < 1 ? -1 : 1), i && !r && (r = i < 1 ? -1 : 1), {
					spinX: u,
					spinY: r,
					pixelX: t,
					pixelY: i
				}
			},
			handleMouseEnter: function() {
				this.mouseEntered = !0
			},
			handleMouseLeave: function() {
				this.mouseEntered = !1
			},
			handle: function(t) {
				var o = t,
					i = this,
					l = i.params.mousewheel,
					u, y, w, d, h, c, p;
				if (i.params.cssMode && o.preventDefault(), !i.mouseEntered && !l.releaseOnEdges) return !0;
				o.originalEvent && (o = o.originalEvent);
				var r = 0,
					b = i.rtlTranslate ? -1 : 1,
					e = a.normalize(o);
				if (l.forceToAxis)
					if (i.isHorizontal()) {
						if (!(Math.abs(e.pixelX) > Math.abs(e.pixelY))) return !0;
						r = e.pixelX * b
					} else {
						if (!(Math.abs(e.pixelY) > Math.abs(e.pixelX))) return !0;
						r = e.pixelY
					}
				else r = Math.abs(e.pixelX) > Math.abs(e.pixelY) ? -e.pixelX * b : -e.pixelY;
				if (0 === r) return !0;
				if (l.invert && (r = -r), i.params.freeMode) {
					var f = {
							time: n.now(),
							delta: Math.abs(r),
							direction: Math.sign(r)
						},
						v = i.mousewheel.lastEventBeforeSnap,
						k = v && f.time < v.time + 500 && f.delta <= v.delta && f.direction === v.direction;
					if (!k) {
						i.mousewheel.lastEventBeforeSnap = void 0;
						i.params.loop && i.loopFix();
						var s = i.getTranslate() + r * l.sensitivity,
							g = i.isBeginning,
							nt = i.isEnd;
						if ((s >= i.minTranslate() && (s = i.minTranslate()), s <= i.maxTranslate() && (s = i.maxTranslate()), i.setTransition(0), i.setTranslate(s), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!g && i.isBeginning || !nt && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0, u = i.mousewheel.recentWheelEvents, u.length >= 15 && u.shift(), y = u.length ? u[u.length - 1] : void 0, w = u[0], (u.push(f), y && (f.delta > y.delta || f.direction !== y.direction)) ? u.splice(0) : u.length >= 15 && f.time - w.time < 500 && w.delta - f.delta >= 1 && f.delta <= 6 && (d = r > 0 ? .8 : .2, i.mousewheel.lastEventBeforeSnap = f, u.splice(0), i.mousewheel.timeout = n.nextTick(function() {
								i.slideToClosest(i.params.speed, !0, void 0, d)
							}, 0)), i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick(function() {
								i.mousewheel.lastEventBeforeSnap = f;
								u.splice(0);
								i.slideToClosest(i.params.speed, !0, void 0, .5)
							}, 500))), k || i.emit("scroll", o), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), s === i.minTranslate() || s === i.maxTranslate()) return !0
					}
				} else if (h = {
						time: n.now(),
						delta: Math.abs(r),
						direction: Math.sign(r),
						raw: t
					}, c = i.mousewheel.recentWheelEvents, c.length >= 2 && c.shift(), p = c.length ? c[c.length - 1] : void 0, c.push(h), p ? (h.direction !== p.direction || h.delta > p.delta) && i.mousewheel.animateSlider(h) : i.mousewheel.animateSlider(h), i.mousewheel.releaseScroll(h)) return !0;
				return o.preventDefault ? o.preventDefault() : o.returnValue = !1, !1
			},
			animateSlider: function(t) {
				return t.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (t.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", t.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", t.raw)), this.mousewheel.lastScrollTime = (new i.Date).getTime(), !1)
			},
			releaseScroll: function(n) {
				var t = this.params.mousewheel;
				if (n.direction < 0) {
					if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
				} else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
				return !1
			},
			enable: function() {
				var i = a.event(),
					n;
				return this.params.cssMode ? (this.wrapperEl.removeEventListener(i, this.mousewheel.handle), !0) : i ? this.mousewheel.enabled ? !1 : (n = this.$el, "container" !== this.params.mousewheel.eventsTarged && (n = t(this.params.mousewheel.eventsTarged)), n.on("mouseenter", this.mousewheel.handleMouseEnter), n.on("mouseleave", this.mousewheel.handleMouseLeave), n.on(i, this.mousewheel.handle), this.mousewheel.enabled = !0, !0) : !1
			},
			disable: function() {
				var n = a.event(),
					i;
				return this.params.cssMode ? (this.wrapperEl.addEventListener(n, this.mousewheel.handle), !0) : n ? this.mousewheel.enabled ? (i = this.$el, "container" !== this.params.mousewheel.eventsTarged && (i = t(this.params.mousewheel.eventsTarged)), i.off(n, this.mousewheel.handle), this.mousewheel.enabled = !1, !0) : !1 : !1
			}
		},
		g = {
			update: function() {
				var n = this.params.navigation;
				if (!this.params.loop) {
					var r = this.navigation,
						t = r.$nextEl,
						i = r.$prevEl;
					i && i.length > 0 && (this.isBeginning ? i.addClass(n.disabledClass) : i.removeClass(n.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass));
					t && t.length > 0 && (this.isEnd ? t.addClass(n.disabledClass) : t.removeClass(n.disabledClass), t[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass))
				}
			},
			onPrevClick: function(n) {
				n.preventDefault();
				this.isBeginning && !this.params.loop || this.slidePrev()
			},
			onNextClick: function(n) {
				n.preventDefault();
				this.isEnd && !this.params.loop || this.slideNext()
			},
			init: function() {
				var r, u, i = this.params.navigation;
				(i.nextEl || i.prevEl) && (i.nextEl && (r = t(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && r.length > 1 && 1 === this.$el.find(i.nextEl).length && (r = this.$el.find(i.nextEl))), i.prevEl && (u = t(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && u.length > 1 && 1 === this.$el.find(i.prevEl).length && (u = this.$el.find(i.prevEl))), r && r.length > 0 && r.on("click", this.navigation.onNextClick), u && u.length > 0 && u.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
					$nextEl: r,
					nextEl: r && r[0],
					$prevEl: u,
					prevEl: u && u[0]
				}))
			},
			destroy: function() {
				var i = this.navigation,
					n = i.$nextEl,
					t = i.$prevEl;
				n && n.length && (n.off("click", this.navigation.onNextClick), n.removeClass(this.params.navigation.disabledClass));
				t && t.length && (t.off("click", this.navigation.onPrevClick), t.removeClass(this.params.navigation.disabledClass))
			}
		},
		ut = {
			update: function() {
				var g = this.rtl,
					n = this.params.pagination,
					f, o, a, i, c, v, s, w;
				if (n.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var r, h = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
						u = this.pagination.$el,
						e = this.params.loop ? Math.ceil((h - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
					if (this.params.loop ? ((r = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > h - 1 - 2 * this.loopedSlides && (r -= h - 2 * this.loopedSlides), r > e - 1 && (r -= e), r < 0 && "bullets" !== this.params.paginationType && (r = e + r)) : r = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === n.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
						if (i = this.pagination.bullets, n.dynamicBullets && (this.pagination.bulletSize = i.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), u.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += r - this.previousIndex, this.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), f = r - this.pagination.dynamicBulletIndex, a = ((o = f + (Math.min(i.length, n.dynamicMainBullets) - 1)) + f) / 2), i.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), u.length > 1) i.each(function(i, u) {
							var e = t(u),
								s = e.index();
							s === r && e.addClass(n.bulletActiveClass);
							n.dynamicBullets && (s >= f && s <= o && e.addClass(n.bulletActiveClass + "-main"), s === f && e.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), s === o && e.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
						});
						else if (c = i.eq(r), v = c.index(), c.addClass(n.bulletActiveClass), n.dynamicBullets) {
							for (var y = i.eq(f), p = i.eq(o), l = f; l <= o; l += 1) i.eq(l).addClass(n.bulletActiveClass + "-main");
							if (this.params.loop)
								if (v >= i.length - n.dynamicMainBullets) {
									for (s = n.dynamicMainBullets; s >= 0; s -= 1) i.eq(i.length - s).addClass(n.bulletActiveClass + "-main");
									i.eq(i.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev")
								} else y.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), p.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next");
							else y.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), p.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
						}
						if (n.dynamicBullets) {
							var nt = Math.min(i.length, n.dynamicMainBullets + 4),
								tt = (this.pagination.bulletSize * nt - this.pagination.bulletSize) / 2 - a * this.pagination.bulletSize,
								it = g ? "right" : "left";
							i.css(this.isHorizontal() ? it : "top", tt + "px")
						}
					}
					if ("fraction" === n.type && (u.find("." + n.currentClass).text(n.formatFractionCurrent(r + 1)), u.find("." + n.totalClass).text(n.formatFractionTotal(e))), "progressbar" === n.type) {
						w = n.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
						var b = (r + 1) / e,
							k = 1,
							d = 1;
						"horizontal" === w ? k = b : d = b;
						u.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + k + ") scaleY(" + d + ")").transition(this.params.speed)
					}
					"custom" === n.type && n.renderCustom ? (u.html(n.renderCustom(this, r + 1, e)), this.emit("paginationRender", this, u[0])) : this.emit("paginationUpdate", this, u[0]);
					u[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass)
				}
			},
			render: function() {
				var n = this.params.pagination,
					u, r;
				if (n.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
					var f = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
						i = this.pagination.$el,
						t = "";
					if ("bullets" === n.type) {
						for (u = this.params.loop ? Math.ceil((f - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < u; r += 1) t += n.renderBullet ? n.renderBullet.call(this, r, n.bulletClass) : "<" + n.bulletElement + ' class="' + n.bulletClass + '"><\/' + n.bulletElement + ">";
						i.html(t);
						this.pagination.bullets = i.find("." + n.bulletClass)
					}
					"fraction" === n.type && (t = n.renderFraction ? n.renderFraction.call(this, n.currentClass, n.totalClass) : '<span class="' + n.currentClass + '"><\/span> / <span class="' + n.totalClass + '"><\/span>', i.html(t));
					"progressbar" === n.type && (t = n.renderProgressbar ? n.renderProgressbar.call(this, n.progressbarFillClass) : '<span class="' + n.progressbarFillClass + '"><\/span>', i.html(t));
					"custom" !== n.type && this.emit("paginationRender", this.pagination.$el[0])
				}
			},
			init: function() {
				var u = this,
					i = u.params.pagination,
					r;
				i.el && (r = t(i.el), 0 !== r.length && (u.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === u.$el.find(i.el).length && (r = u.$el.find(i.el)), "bullets" === i.type && i.clickable && r.addClass(i.clickableClass), r.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (r.addClass("" + i.modifierClass + i.type + "-dynamic"), u.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && r.addClass(i.progressbarOppositeClass), i.clickable && r.on("click", "." + i.bulletClass, function(n) {
					n.preventDefault();
					var i = t(this).index() * u.params.slidesPerGroup;
					u.params.loop && (i += u.loopedSlides);
					u.slideTo(i)
				}), n.extend(u.pagination, {
					$el: r,
					el: r[0]
				})))
			},
			destroy: function() {
				var n = this.params.pagination,
					t;
				n.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length && (t = this.pagination.$el, t.removeClass(n.hiddenClass), t.removeClass(n.modifierClass + n.type), this.pagination.bullets && this.pagination.bullets.removeClass(n.bulletActiveClass), n.clickable && t.off("click", "." + n.bulletClass))
			}
		},
		h = {
			setTranslate: function() {
				if (this.params.scrollbar.el && this.scrollbar.el) {
					var u = this.scrollbar,
						o = this.rtlTranslate,
						s = this.progress,
						t = u.dragSize,
						r = u.trackSize,
						f = u.$dragEl,
						e = u.$el,
						h = this.params.scrollbar,
						i = t,
						n = (r - t) * s;
					o ? (n = -n) > 0 ? (i = t - n, n = 0) : -n + t > r && (i = r + n) : n < 0 ? (i = t + n, n = 0) : n + t > r && (i = r - n);
					this.isHorizontal() ? (f.transform("translate3d(" + n + "px, 0, 0)"), f[0].style.width = i + "px") : (f.transform("translate3d(0px, " + n + "px, 0)"), f[0].style.height = i + "px");
					h.hide && (clearTimeout(this.scrollbar.timeout), e[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
						e[0].style.opacity = 0;
						e.transition(400)
					}, 1e3))
				}
			},
			setTransition: function(n) {
				this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(n)
			},
			updateSize: function() {
				if (this.params.scrollbar.el && this.scrollbar.el) {
					var t = this.scrollbar,
						i = t.$dragEl,
						r = t.$el;
					i[0].style.width = "";
					i[0].style.height = "";
					var u, e = this.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight,
						f = this.size / this.virtualSize,
						o = f * (e / this.size);
					u = "auto" === this.params.scrollbar.dragSize ? e * f : parseInt(this.params.scrollbar.dragSize, 10);
					this.isHorizontal() ? i[0].style.width = u + "px" : i[0].style.height = u + "px";
					r[0].style.display = f >= 1 ? "none" : "";
					this.params.scrollbar.hide && (r[0].style.opacity = 0);
					n.extend(t, {
						trackSize: e,
						divider: f,
						moveDivider: o,
						dragSize: u
					});
					t.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
				}
			},
			getPointerPosition: function(n) {
				return this.isHorizontal() ? "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].clientX : n.clientX : "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].clientY : n.clientY
			},
			setDragPosition: function(n) {
				var t, i = this.scrollbar,
					e = this.rtlTranslate,
					o = i.$el,
					u = i.dragSize,
					s = i.trackSize,
					f = i.dragStartPos,
					r;
				t = (i.getPointerPosition(n) - o.offset()[this.isHorizontal() ? "left" : "top"] - (null !== f ? f : u / 2)) / (s - u);
				t = Math.max(Math.min(t, 1), 0);
				e && (t = 1 - t);
				r = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
				this.updateProgress(r);
				this.setTranslate(r);
				this.updateActiveIndex();
				this.updateSlidesClasses()
			},
			onDragStart: function(n) {
				var u = this.params.scrollbar,
					t = this.scrollbar,
					f = this.$wrapperEl,
					r = t.$el,
					i = t.$dragEl;
				this.scrollbar.isTouched = !0;
				this.scrollbar.dragStartPos = n.target === i[0] || n.target === i ? t.getPointerPosition(n) - n.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null;
				n.preventDefault();
				n.stopPropagation();
				f.transition(100);
				i.transition(100);
				t.setDragPosition(n);
				clearTimeout(this.scrollbar.dragTimeout);
				r.transition(0);
				u.hide && r.css("opacity", 1);
				this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none");
				this.emit("scrollbarDragStart", n)
			},
			onDragMove: function(n) {
				var t = this.scrollbar,
					i = this.$wrapperEl,
					r = t.$el,
					u = t.$dragEl;
				this.scrollbar.isTouched && (n.preventDefault ? n.preventDefault() : n.returnValue = !1, t.setDragPosition(n), i.transition(0), r.transition(0), u.transition(0), this.emit("scrollbarDragMove", n))
			},
			onDragEnd: function(t) {
				var i = this.params.scrollbar,
					u = this.scrollbar,
					f = this.$wrapperEl,
					r = u.$el;
				this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), f.transition("")), i.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick(function() {
					r.css("opacity", 0);
					r.transition(400)
				}, 1e3)), this.emit("scrollbarDragEnd", t), i.snapOnRelease && this.slideToClosest())
			},
			enableDraggable: function() {
				if (this.params.scrollbar.el) {
					var s = this.scrollbar,
						i = this.touchEventsTouch,
						f = this.touchEventsDesktop,
						e = this.params,
						n = s.$el[0],
						t = !(!u.passiveListener || !e.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!u.passiveListener || !e.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					u.touch ? (n.addEventListener(i.start, this.scrollbar.onDragStart, t), n.addEventListener(i.move, this.scrollbar.onDragMove, t), n.addEventListener(i.end, this.scrollbar.onDragEnd, o)) : (n.addEventListener(f.start, this.scrollbar.onDragStart, t), r.addEventListener(f.move, this.scrollbar.onDragMove, t), r.addEventListener(f.end, this.scrollbar.onDragEnd, o))
				}
			},
			disableDraggable: function() {
				if (this.params.scrollbar.el) {
					var s = this.scrollbar,
						i = this.touchEventsTouch,
						f = this.touchEventsDesktop,
						e = this.params,
						n = s.$el[0],
						t = !(!u.passiveListener || !e.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!u.passiveListener || !e.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					u.touch ? (n.removeEventListener(i.start, this.scrollbar.onDragStart, t), n.removeEventListener(i.move, this.scrollbar.onDragMove, t), n.removeEventListener(i.end, this.scrollbar.onDragEnd, o)) : (n.removeEventListener(f.start, this.scrollbar.onDragStart, t), r.removeEventListener(f.move, this.scrollbar.onDragMove, t), r.removeEventListener(f.end, this.scrollbar.onDragEnd, o))
				}
			},
			init: function() {
				var r;
				if (this.params.scrollbar.el) {
					var f = this.scrollbar,
						e = this.$el,
						u = this.params.scrollbar,
						i = t(u.el);
					this.params.uniqueNavElements && "string" == typeof u.el && i.length > 1 && 1 === e.find(u.el).length && (i = e.find(u.el));
					r = i.find("." + this.params.scrollbar.dragClass);
					0 === r.length && (r = t('<div class="' + this.params.scrollbar.dragClass + '"><\/div>'), i.append(r));
					n.extend(f, {
						$el: i,
						el: i[0],
						$dragEl: r,
						dragEl: r[0]
					});
					u.draggable && f.enableDraggable()
				}
			},
			destroy: function() {
				this.scrollbar.disableDraggable()
			}
		},
		kt = {
			setTransform: function(n, i) {
				var a = this.rtl,
					f = t(n),
					s = a ? -1 : 1,
					h = f.attr("data-swiper-parallax") || "0",
					r = f.attr("data-swiper-parallax-x"),
					u = f.attr("data-swiper-parallax-y"),
					e = f.attr("data-swiper-parallax-scale"),
					o = f.attr("data-swiper-parallax-opacity"),
					c, l;
				(r || u ? (r = r || "0", u = u || "0") : this.isHorizontal() ? (r = h, u = "0") : (u = h, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * s + "%" : r * i * s + "px", u = u.indexOf("%") >= 0 ? parseInt(u, 10) * i + "%" : u * i + "px", null != o) && (c = o - (o - 1) * (1 - Math.abs(i)), f[0].style.opacity = c);
				null == e ? f.transform("translate3d(" + r + ", " + u + ", 0px)") : (l = e - (e - 1) * (1 - Math.abs(i)), f.transform("translate3d(" + r + ", " + u + ", 0px) scale(" + l + ")"))
			},
			setTranslate: function() {
				var n = this,
					r = n.$el,
					u = n.slides,
					i = n.progress,
					f = n.snapGrid;
				r.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, r) {
					n.parallax.setTransform(r, i)
				});
				u.each(function(r, u) {
					var e = u.progress;
					n.params.slidesPerGroup > 1 && "auto" !== n.params.slidesPerView && (e += Math.ceil(r / 2) - i * (f.length - 1));
					e = Math.min(Math.max(e, -1), 1);
					t(u).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
						n.parallax.setTransform(i, e)
					})
				})
			},
			setTransition: function(n) {
				void 0 === n && (n = this.params.speed);
				this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(i, r) {
					var u = t(r),
						f = parseInt(u.attr("data-swiper-parallax-duration"), 10) || n;
					0 === n && (f = 0);
					u.transition(f)
				})
			}
		},
		dt = {
			getDistanceBetweenTouches: function(n) {
				if (n.targetTouches.length < 2) return 1;
				var t = n.targetTouches[0].pageX,
					i = n.targetTouches[0].pageY,
					r = n.targetTouches[1].pageX,
					u = n.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(r - t, 2) + Math.pow(u - i, 2))
			},
			onGestureStart: function(n) {
				var f = this.params.zoom,
					r = this.zoom,
					i = r.gesture;
				if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !u.gestures) {
					if ("touchstart" !== n.type || "touchstart" === n.type && n.targetTouches.length < 2) return;
					r.fakeGestureTouched = !0;
					i.scaleStart = dt.getDistanceBetweenTouches(n)
				}
				i.$slideEl && i.$slideEl.length || (i.$slideEl = t(n.target).closest(".swiper-slide"), 0 === i.$slideEl.length && (i.$slideEl = this.slides.eq(this.activeIndex)), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + f.containerClass), i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || f.maxRatio, 0 !== i.$imageWrapEl.length) ? (i.$imageEl.transition(0), this.zoom.isScaling = !0) : i.$imageEl = void 0
			},
			onGestureChange: function(n) {
				var r = this.params.zoom,
					t = this.zoom,
					i = t.gesture;
				if (!u.gestures) {
					if ("touchmove" !== n.type || "touchmove" === n.type && n.targetTouches.length < 2) return;
					t.fakeGestureMoved = !0;
					i.scaleMove = dt.getDistanceBetweenTouches(n)
				}
				i.$imageEl && 0 !== i.$imageEl.length && (t.scale = u.gestures ? n.scale * t.currentScale : i.scaleMove / i.scaleStart * t.currentScale, t.scale > i.maxRatio && (t.scale = i.maxRatio - 1 + Math.pow(t.scale - i.maxRatio + 1, .5)), t.scale < r.minRatio && (t.scale = r.minRatio + 1 - Math.pow(r.minRatio - t.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
			},
			onGestureEnd: function(n) {
				var r = this.params.zoom,
					t = this.zoom,
					i = t.gesture;
				if (!u.gestures) {
					if (!t.fakeGestureTouched || !t.fakeGestureMoved) return;
					if ("touchend" !== n.type || "touchend" === n.type && n.changedTouches.length < 2 && !s.android) return;
					t.fakeGestureTouched = !1;
					t.fakeGestureMoved = !1
				}
				i.$imageEl && 0 !== i.$imageEl.length && (t.scale = Math.max(Math.min(t.scale, i.maxRatio), r.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (i.$slideEl = void 0))
			},
			onTouchStart: function(n) {
				var i = this.zoom,
					r = i.gesture,
					t = i.image;
				r.$imageEl && 0 !== r.$imageEl.length && (t.isTouched || (s.android && n.preventDefault(), t.isTouched = !0, t.touchesStart.x = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX, t.touchesStart.y = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY))
			},
			onTouchMove: function(t) {
				var f = this.zoom,
					u = f.gesture,
					i = f.image,
					r = f.velocity,
					e, o;
				if (u.$imageEl && 0 !== u.$imageEl.length && (this.allowClick = !1, i.isTouched && u.$slideEl) && (i.isMoved || (i.width = u.$imageEl[0].offsetWidth, i.height = u.$imageEl[0].offsetHeight, i.startX = n.getTranslate(u.$imageWrapEl[0], "x") || 0, i.startY = n.getTranslate(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0), this.rtl && (i.startX = -i.startX, i.startY = -i.startY)), e = i.width * f.scale, o = i.height * f.scale, !(e < u.slideWidth && o < u.slideHeight))) {
					if ((i.minX = Math.min(u.slideWidth / 2 - e / 2, 0), i.maxX = -i.minX, i.minY = Math.min(u.slideHeight / 2 - o / 2, 0), i.maxY = -i.minY, i.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, i.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !i.isMoved && !f.isScaling) && (this.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x) || !this.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y))) return void(i.isTouched = !1);
					t.preventDefault();
					t.stopPropagation();
					i.isMoved = !0;
					i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX;
					i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY;
					i.currentX < i.minX && (i.currentX = i.minX + 1 - Math.pow(i.minX - i.currentX + 1, .8));
					i.currentX > i.maxX && (i.currentX = i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, .8));
					i.currentY < i.minY && (i.currentY = i.minY + 1 - Math.pow(i.minY - i.currentY + 1, .8));
					i.currentY > i.maxY && (i.currentY = i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, .8));
					r.prevPositionX || (r.prevPositionX = i.touchesCurrent.x);
					r.prevPositionY || (r.prevPositionY = i.touchesCurrent.y);
					r.prevTime || (r.prevTime = Date.now());
					r.x = (i.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2;
					r.y = (i.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2;
					Math.abs(i.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0);
					Math.abs(i.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0);
					r.prevPositionX = i.touchesCurrent.x;
					r.prevPositionY = i.touchesCurrent.y;
					r.prevTime = Date.now();
					u.$imageWrapEl.transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
				}
			},
			onTouchEnd: function() {
				var i = this.zoom,
					r = i.gesture,
					n = i.image,
					t = i.velocity,
					s, h, c;
				if (r.$imageEl && 0 !== r.$imageEl.length) {
					if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
					n.isTouched = !1;
					n.isMoved = !1;
					var u = 300,
						f = 300,
						l = t.x * u,
						e = n.currentX + l,
						a = t.y * f,
						o = n.currentY + a;
					0 !== t.x && (u = Math.abs((e - n.currentX) / t.x));
					0 !== t.y && (f = Math.abs((o - n.currentY) / t.y));
					s = Math.max(u, f);
					n.currentX = e;
					n.currentY = o;
					h = n.width * i.scale;
					c = n.height * i.scale;
					n.minX = Math.min(r.slideWidth / 2 - h / 2, 0);
					n.maxX = -n.minX;
					n.minY = Math.min(r.slideHeight / 2 - c / 2, 0);
					n.maxY = -n.minY;
					n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX);
					n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY);
					r.$imageWrapEl.transition(s).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
				}
			},
			onTransitionEnd: function() {
				var t = this.zoom,
					n = t.gesture;
				n.$slideEl && this.previousIndex !== this.activeIndex && (n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0)
			},
			toggle: function(n) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(n)
			},
			"in": function(n) {
				var o, s, w, b, u, f, k, d, g, nt, h, c, l, a, v, y, r = this.zoom,
					e = this.params.zoom,
					i = r.gesture,
					p = r.image;
				(i.$slideEl || (i.$slideEl = this.clickedSlide ? t(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass)), i.$imageEl && 0 !== i.$imageEl.length) && (i.$slideEl.addClass("" + e.zoomedSlideClass), void 0 === p.touchesStart.x && n ? (o = "touchend" === n.type ? n.changedTouches[0].pageX : n.pageX, s = "touchend" === n.type ? n.changedTouches[0].pageY : n.pageY) : (o = p.touchesStart.x, s = p.touchesStart.y), r.scale = i.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio, r.currentScale = i.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio, n ? (v = i.$slideEl[0].offsetWidth, y = i.$slideEl[0].offsetHeight, w = i.$slideEl.offset().left + v / 2 - o, b = i.$slideEl.offset().top + y / 2 - s, k = i.$imageEl[0].offsetWidth, d = i.$imageEl[0].offsetHeight, g = k * r.scale, nt = d * r.scale, l = -(h = Math.min(v / 2 - g / 2, 0)), a = -(c = Math.min(y / 2 - nt / 2, 0)), (u = w * r.scale) < h && (u = h), u > l && (u = l), (f = b * r.scale) < c && (f = c), f > a && (f = a)) : (u = 0, f = 0), i.$imageWrapEl.transition(300).transform("translate3d(" + u + "px, " + f + "px,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"))
			},
			out: function() {
				var i = this.zoom,
					r = this.params.zoom,
					n = i.gesture;
				n.$slideEl || (n.$slideEl = this.clickedSlide ? t(this.clickedSlide) : this.slides.eq(this.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + r.containerClass));
				n.$imageEl && 0 !== n.$imageEl.length && (i.scale = 1, i.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + r.zoomedSlideClass), n.$slideEl = void 0)
			},
			enable: function() {
				var n = this.zoom,
					t, i;
				n.enabled || (n.enabled = !0, t = !("touchstart" !== this.touchEvents.start || !u.passiveListener || !this.params.passiveListeners) && {
					passive: !0,
					capture: !1
				}, i = !u.passiveListener || {
					passive: !1,
					capture: !0
				}, u.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", n.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", n.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", n.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", n.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", n.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", n.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", n.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, n.onTouchMove, i))
			},
			disable: function() {
				var n = this.zoom,
					t, i;
				n.enabled && (this.zoom.enabled = !1, t = !("touchstart" !== this.touchEvents.start || !u.passiveListener || !this.params.passiveListeners) && {
					passive: !0,
					capture: !1
				}, i = !u.passiveListener || {
					passive: !1,
					capture: !0
				}, u.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", n.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", n.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", n.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", n.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", n.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", n.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", n.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, n.onTouchMove, i))
			}
		},
		fi = {
			loadInSlide: function(n, i) {
				var r, u, f, e;
				void 0 === i && (i = !0);
				r = this;
				u = r.params.lazy;
				void 0 !== n && 0 !== r.slides.length && (f = r.virtual && r.params.virtual.enabled ? r.$wrapperEl.children("." + r.params.slideClass + '[data-swiper-slide-index="' + n + '"]') : r.slides.eq(n), e = f.find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")"), !f.hasClass(u.elementClass) || f.hasClass(u.loadedClass) || f.hasClass(u.loadingClass) || (e = e.add(f[0])), 0 !== e.length && e.each(function(n, e) {
					var o = t(e);
					o.addClass(u.loadingClass);
					var s = o.attr("data-background"),
						h = o.attr("data-src"),
						c = o.attr("data-srcset"),
						l = o.attr("data-sizes");
					r.loadImage(o[0], h || s, c, l, !1, function() {
						var n, t, e;
						null != r && r && (!r || r.params) && !r.destroyed && ((s ? (o.css("background-image", 'url("' + s + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), l && (o.attr("sizes", l), o.removeAttr("data-sizes")), h && (o.attr("src", h), o.removeAttr("data-src"))), o.addClass(u.loadedClass).removeClass(u.loadingClass), f.find("." + u.preloaderClass).remove(), r.params.loop && i) && (n = f.attr("data-swiper-slide-index"), f.hasClass(r.params.slideDuplicateClass) ? (t = r.$wrapperEl.children('[data-swiper-slide-index="' + n + '"]:not(.' + r.params.slideDuplicateClass + ")"), r.lazy.loadInSlide(t.index(), !1)) : (e = r.$wrapperEl.children("." + r.params.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]'), r.lazy.loadInSlide(e.index(), !1))), r.emit("lazyImageReady", f[0], o[0]))
					});
					r.emit("lazyImageLoad", f[0], o[0])
				}))
			},
			load: function() {
				function l(n) {
					if (c) {
						if (o.children("." + i.slideClass + '[data-swiper-slide-index="' + n + '"]').length) return !0
					} else if (p[n]) return !0;
					return !1
				}

				function w(n) {
					return c ? t(n).attr("data-swiper-slide-index") : t(n).index()
				}
				var n = this,
					o = n.$wrapperEl,
					i = n.params,
					p = n.slides,
					r = n.activeIndex,
					c = n.virtual && i.virtual.enabled,
					s = i.lazy,
					u = i.slidesPerView,
					f, e, v, y;
				if ("auto" === u && (u = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) o.children("." + i.slideVisibleClass).each(function(i, r) {
					var u = c ? t(r).attr("data-swiper-slide-index") : t(r).index();
					n.lazy.loadInSlide(u)
				});
				else if (u > 1)
					for (f = r; f < r + u; f += 1) l(f) && n.lazy.loadInSlide(f);
				else n.lazy.loadInSlide(r);
				if (s.loadPrevNext)
					if (u > 1 || s.loadPrevNextAmount && s.loadPrevNextAmount > 1) {
						for (var b = s.loadPrevNextAmount, a = u, k = Math.min(r + a + Math.max(b, a), p.length), d = Math.max(r - Math.max(a, b), 0), h = r + u; h < k; h += 1) l(h) && n.lazy.loadInSlide(h);
						for (e = d; e < r; e += 1) l(e) && n.lazy.loadInSlide(e)
					} else v = o.children("." + i.slideNextClass), v.length > 0 && n.lazy.loadInSlide(w(v)), y = o.children("." + i.slidePrevClass), y.length > 0 && n.lazy.loadInSlide(w(y))
			}
		},
		nt = {
			LinearSpline: function(n, t) {
				var i, u, e, r, f, o = function(n, t) {
					for (u = -1, i = n.length; i - u > 1;) n[e = i + u >> 1] <= t ? u = e : i = e;
					return i
				};
				return this.x = n, this.y = t, this.lastIndex = n.length - 1, this.interpolate = function(n) {
					return n ? (f = o(this.x, n), r = f - 1, (n - this.x[r]) * (this.y[f] - this.y[r]) / (this.x[f] - this.x[r]) + this.y[r]) : 0
				}, this
			},
			getInterpolateFunction: function(n) {
				this.controller.spline || (this.controller.spline = this.params.loop ? new nt.LinearSpline(this.slidesGrid, n.slidesGrid) : new nt.LinearSpline(this.snapGrid, n.snapGrid))
			},
			setTranslate: function(n, t) {
				function o(n) {
					var t = i.rtlTranslate ? -i.translate : i.translate;
					"slide" === i.params.controller.by && (i.controller.getInterpolateFunction(n), u = -i.controller.spline.interpolate(-t));
					u && "container" !== i.params.controller.by || (e = (n.maxTranslate() - n.minTranslate()) / (i.maxTranslate() - i.minTranslate()), u = (t - i.minTranslate()) * e + n.minTranslate());
					i.params.controller.inverse && (u = n.maxTranslate() - u);
					n.updateProgress(u);
					n.setTranslate(u, i);
					n.updateActiveIndex();
					n.updateSlidesClasses()
				}
				var e, u, i = this,
					r = i.controller.control,
					f;
				if (Array.isArray(r))
					for (f = 0; f < r.length; f += 1) r[f] !== t && r[f] instanceof c && o(r[f]);
				else r instanceof c && t !== r && o(r)
			},
			setTransition: function(t, i) {
				function e(i) {
					i.setTransition(t, f);
					0 !== t && (i.transitionStart(), i.params.autoHeight && n.nextTick(function() {
						i.updateAutoHeight()
					}), i.$wrapperEl.transitionEnd(function() {
						r && (i.params.loop && "slide" === f.params.controller.by && i.loopFix(), i.transitionEnd())
					}))
				}
				var u, f = this,
					r = f.controller.control;
				if (Array.isArray(r))
					for (u = 0; u < r.length; u += 1) r[u] !== i && r[u] instanceof c && e(r[u]);
				else r instanceof c && i !== r && e(r)
			}
		},
		ei = {
			makeElFocusable: function(n) {
				return n.attr("tabIndex", "0"), n
			},
			addElRole: function(n, t) {
				return n.attr("role", t), n
			},
			addElLabel: function(n, t) {
				return n.attr("aria-label", t), n
			},
			disableEl: function(n) {
				return n.attr("aria-disabled", !0), n
			},
			enableEl: function(n) {
				return n.attr("aria-disabled", !1), n
			},
			onEnterKey: function(n) {
				var r = this.params.a11y,
					i;
				13 === n.keyCode && (i = t(n.target), this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(r.lastSlideMessage) : this.a11y.notify(r.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(r.firstSlideMessage) : this.a11y.notify(r.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click())
			},
			notify: function(n) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(n))
			},
			updateNavigation: function() {
				if (!this.params.loop && this.navigation) {
					var i = this.navigation,
						n = i.$nextEl,
						t = i.$prevEl;
					t && t.length > 0 && (this.isBeginning ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
					n && n.length > 0 && (this.isEnd ? this.a11y.disableEl(n) : this.a11y.enableEl(n))
				}
			},
			updatePagination: function() {
				var n = this,
					i = n.params.a11y;
				n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.bullets.each(function(r, u) {
					var f = t(u);
					n.a11y.makeElFocusable(f);
					n.a11y.addElRole(f, "button");
					n.a11y.addElLabel(f, i.paginationBulletMessage.replace(/{{index}}/, f.index() + 1))
				})
			},
			init: function() {
				this.$el.append(this.a11y.liveRegion);
				var n, t, i = this.params.a11y;
				this.navigation && this.navigation.$nextEl && (n = this.navigation.$nextEl);
				this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl);
				n && (this.a11y.makeElFocusable(n), this.a11y.addElRole(n, "button"), this.a11y.addElLabel(n, i.nextSlideMessage), n.on("keydown", this.a11y.onEnterKey));
				t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey));
				this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
			},
			destroy: function() {
				var n, t;
				this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove();
				this.navigation && this.navigation.$nextEl && (n = this.navigation.$nextEl);
				this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl);
				n && n.off("keydown", this.a11y.onEnterKey);
				t && t.off("keydown", this.a11y.onEnterKey);
				this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
			}
		},
		v = {
			init: function() {
				if (this.params.history) {
					if (!i.history || !i.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
					var n = this.history;
					n.initialized = !0;
					n.paths = v.getPathValues();
					(n.paths.key || n.paths.value) && (n.scrollToSlide(0, n.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || i.addEventListener("popstate", this.history.setHistoryPopState))
				}
			},
			destroy: function() {
				this.params.history.replaceState || i.removeEventListener("popstate", this.history.setHistoryPopState)
			},
			setHistoryPopState: function() {
				this.history.paths = v.getPathValues();
				this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
			},
			getPathValues: function() {
				var n = i.location.pathname.slice(1).split("/").filter(function(n) {
						return "" !== n
					}),
					t = n.length;
				return {
					key: n[t - 2],
					value: n[t - 1]
				}
			},
			setHistory: function(n, t) {
				var f, r, u;
				this.history.initialized && this.params.history.enabled && (f = this.slides.eq(t), r = v.slugify(f.attr("data-history")), i.location.pathname.includes(n) || (r = n + "/" + r), u = i.history.state, u && u.value === r || (this.params.history.replaceState ? i.history.replaceState({
					value: r
				}, null, r) : i.history.pushState({
					value: r
				}, null, r)))
			},
			slugify: function(n) {
				return n.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function(n, t, i) {
				var r, f, u, e;
				if (t)
					for (r = 0, f = this.slides.length; r < f; r += 1) u = this.slides.eq(r), v.slugify(u.attr("data-history")) !== t || u.hasClass(this.params.slideDuplicateClass) || (e = u.index(), this.slideTo(e, n, i));
				else this.slideTo(0, n, i)
			}
		},
		ft = {
			onHashCange: function() {
				var t = r.location.hash.replace("#", ""),
					n;
				if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
					if (n = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index(), void 0 === n) return;
					this.slideTo(n)
				}
			},
			setHash: function() {
				if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
					if (this.params.hashNavigation.replaceState && i.history && i.history.replaceState) i.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
					else {
						var n = this.slides.eq(this.activeIndex),
							t = n.attr("data-hash") || n.attr("data-history");
						r.location.hash = t || ""
					}
			},
			init: function() {
				var f, u, e, n, o;
				if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
					if (this.hashNavigation.initialized = !0, f = r.location.hash.replace("#", ""), f)
						for (u = 0, e = this.slides.length; u < e; u += 1) n = this.slides.eq(u), (n.attr("data-hash") || n.attr("data-history")) !== f || n.hasClass(this.params.slideDuplicateClass) || (o = n.index(), this.slideTo(o, 0, this.params.runCallbacksOnInit, !0));
					this.params.hashNavigation.watchState && t(i).on("hashchange", this.hashNavigation.onHashCange)
				}
			},
			destroy: function() {
				this.params.hashNavigation.watchState && t(i).off("hashchange", this.hashNavigation.onHashCange)
			}
		},
		et = {
			run: function() {
				var t = this,
					i = t.slides.eq(t.activeIndex),
					r = t.params.autoplay.delay;
				i.attr("data-swiper-autoplay") && (r = i.attr("data-swiper-autoplay") || t.params.autoplay.delay);
				clearTimeout(t.autoplay.timeout);
				t.autoplay.timeout = n.nextTick(function() {
					t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay"));
					t.params.cssMode && t.autoplay.running && t.autoplay.run()
				}, r)
			},
			start: function() {
				return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
			},
			stop: function() {
				return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
			},
			pause: function(n) {
				this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== n && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
			}
		},
		oi = {
			setTranslate: function() {
				for (var n, t, r, f, u = this.slides, i = 0; i < u.length; i += 1) n = this.slides.eq(i), t = -n[0].swiperSlideOffset, this.params.virtualTranslate || (t -= this.translate), r = 0, this.isHorizontal() || (r = t, t = 0), f = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0), n.css({
					opacity: f
				}).transform("translate3d(" + t + "px, " + r + "px, 0px)")
			},
			setTransition: function(n) {
				var t = this,
					r = t.slides,
					u = t.$wrapperEl,
					i;
				(r.transition(n), t.params.virtualTranslate && 0 !== n) && (i = !1, r.transitionEnd(function() {
					if (!i && t && !t.destroyed) {
						i = !0;
						t.animating = !1;
						for (var r = ["webkitTransitionEnd", "transitionend"], n = 0; n < r.length; n += 1) u.trigger(r[n])
					}
				}))
			}
		},
		si = {
			setTranslate: function() {
				var r, d = this.$el,
					w = this.$wrapperEl,
					g = this.slides,
					b = this.width,
					nt = this.height,
					k = this.rtlTranslate,
					n = this.size,
					o = this.params.cubeEffect,
					u = this.isHorizontal(),
					ot = this.virtual && this.params.virtual.enabled,
					h = 0,
					y, i, f, s, c, rt, a, v, et;
				for (o.shadow && (u ? (0 === (r = w.find(".swiper-cube-shadow")).length && (r = t('<div class="swiper-cube-shadow"><\/div>'), w.append(r)), r.css({
						height: b + "px"
					})) : 0 === (r = d.find(".swiper-cube-shadow")).length && (r = t('<div class="swiper-cube-shadow"><\/div>'), d.append(r))), y = 0; y < g.length; y += 1) {
					i = g.eq(y);
					f = y;
					ot && (f = parseInt(i.attr("data-swiper-slide-index"), 10));
					s = 90 * f;
					c = Math.floor(s / 360);
					k && (s = -s, c = Math.floor(-s / 360));
					var l = Math.max(Math.min(i[0].progress, 1), -1),
						e = 0,
						tt = 0,
						p = 0;
					f % 4 == 0 ? (e = 4 * -c * n, p = 0) : (f - 1) % 4 == 0 ? (e = 0, p = 4 * -c * n) : (f - 2) % 4 == 0 ? (e = n + 4 * c * n, p = n) : (f - 3) % 4 == 0 && (e = -n, p = 3 * n + 4 * n * c);
					k && (e = -e);
					u || (tt = e, e = 0);
					rt = "rotateX(" + (u ? 0 : -s) + "deg) rotateY(" + (u ? s : 0) + "deg) translate3d(" + e + "px, " + tt + "px, " + p + "px)";
					(l <= 1 && l > -1 && (h = 90 * f + 90 * l, k && (h = 90 * -f - 90 * l)), i.transform(rt), o.slideShadows) && (a = u ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"), v = u ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom"), 0 === a.length && (a = t('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"><\/div>'), i.append(a)), 0 === v.length && (v = t('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"><\/div>'), i.append(v)), a.length && (a[0].style.opacity = Math.max(-l, 0)), v.length && (v[0].style.opacity = Math.max(l, 0)))
				}
				if (w.css({
						"-webkit-transform-origin": "50% 50% -" + n / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + n / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + n / 2 + "px",
						"transform-origin": "50% 50% -" + n / 2 + "px"
					}), o.shadow)
					if (u) r.transform("translate3d(0px, " + (b / 2 + o.shadowOffset) + "px, " + -b / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + o.shadowScale + ")");
					else {
						var ut = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
							st = 1.5 - (Math.sin(2 * ut * Math.PI / 360) / 2 + Math.cos(2 * ut * Math.PI / 360) / 2),
							ht = o.shadowScale,
							ft = o.shadowScale / st,
							ct = o.shadowOffset;
						r.transform("scale3d(" + ht + ", 1, " + ft + ") translate3d(0px, " + (nt / 2 + ct) + "px, " + -nt / 2 / ft + "px) rotateX(-90deg)")
					} et = it.isSafari || it.isUiWebView ? -n / 2 : 0;
				w.transform("translate3d(0px,0," + et + "px) rotateX(" + (this.isHorizontal() ? 0 : h) + "deg) rotateY(" + (this.isHorizontal() ? -h : 0) + "deg)")
			},
			setTransition: function(n) {
				var t = this.$el;
				this.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n);
				this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(n)
			}
		},
		hi = {
			setTranslate: function() {
				for (var n, i, r, u, e = this.slides, l = this.rtlTranslate, o = 0; o < e.length; o += 1) {
					n = e.eq(o);
					i = n[0].progress;
					this.params.flipEffect.limitRotation && (i = Math.max(Math.min(n[0].progress, 1), -1));
					var f = -180 * i,
						h = 0,
						s = -n[0].swiperSlideOffset,
						c = 0;
					(this.isHorizontal() ? l && (f = -f) : (c = s, s = 0, h = -f, f = 0), n[0].style.zIndex = -Math.abs(Math.round(i)) + e.length, this.params.flipEffect.slideShadows) && (r = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"), u = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom"), 0 === r.length && (r = t('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"><\/div>'), n.append(r)), 0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"><\/div>'), n.append(u)), r.length && (r[0].style.opacity = Math.max(-i, 0)), u.length && (u[0].style.opacity = Math.max(i, 0)));
					n.transform("translate3d(" + s + "px, " + c + "px, 0px) rotateX(" + h + "deg) rotateY(" + f + "deg)")
				}
			},
			setTransition: function(n) {
				var t = this,
					r = t.slides,
					u = t.activeIndex,
					f = t.$wrapperEl,
					i;
				(r.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n), t.params.virtualTranslate && 0 !== n) && (i = !1, r.eq(u).transitionEnd(function() {
					if (!i && t && !t.destroyed) {
						i = !0;
						t.animating = !1;
						for (var r = ["webkitTransitionEnd", "transitionend"], n = 0; n < r.length; n += 1) f.trigger(r[n])
					}
				}))
			}
		},
		ci = {
			setTranslate: function() {
				for (var d, e, o, g = this.width, nt = this.height, y = this.slides, tt = this.$wrapperEl, it = this.slidesSizesGrid, f = this.params.coverflowEffect, n = this.isHorizontal(), p = this.translate, w = n ? g / 2 - p : nt / 2 - p, b = n ? f.rotate : -f.rotate, rt = f.depth, s = 0, ut = y.length; s < ut; s += 1) {
					var r = y.eq(s),
						k = it[s],
						i = (w - r[0].swiperSlideOffset - k / 2) / k * f.modifier,
						h = n ? b * i : 0,
						c = n ? 0 : b * i,
						l = -rt * Math.abs(i),
						a = n ? 0 : f.stretch * i,
						v = n ? f.stretch * i : 0;
					Math.abs(v) < .001 && (v = 0);
					Math.abs(a) < .001 && (a = 0);
					Math.abs(l) < .001 && (l = 0);
					Math.abs(h) < .001 && (h = 0);
					Math.abs(c) < .001 && (c = 0);
					d = "translate3d(" + v + "px," + a + "px," + l + "px)  rotateX(" + c + "deg) rotateY(" + h + "deg)";
					(r.transform(d), r[0].style.zIndex = 1 - Math.abs(Math.round(i)), f.slideShadows) && (e = n ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"), o = n ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom"), 0 === e.length && (e = t('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"><\/div>'), r.append(e)), 0 === o.length && (o = t('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"><\/div>'), r.append(o)), e.length && (e[0].style.opacity = i > 0 ? i : 0), o.length && (o[0].style.opacity = -i > 0 ? -i : 0))
				}(u.pointerEvents || u.prefixedPointerEvents) && (tt[0].style.perspectiveOrigin = w + "px 50%")
			},
			setTransition: function(n) {
				this.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n)
			}
		},
		gt = {
			init: function() {
				var t = this.params.thumbs,
					i = this.constructor;
				t.swiper instanceof i ? (this.thumbs.swiper = t.swiper, n.extend(this.thumbs.swiper.originalParams, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				}), n.extend(this.thumbs.swiper.params, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})) : n.isObject(t.swiper) && (this.thumbs.swiper = new i(n.extend({}, t.swiper, {
					watchSlidesVisibility: !0,
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})), this.thumbs.swiperCreated = !0);
				this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass);
				this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
			},
			onThumbClick: function() {
				var i = this.thumbs.swiper,
					e, o, r, n, u, f;
				i && (e = i.clickedIndex, o = i.clickedSlide, o && t(o).hasClass(this.params.thumbs.slideThumbActiveClass) || null == e || ((r = i.params.loop ? parseInt(t(i.clickedSlide).attr("data-swiper-slide-index"), 10) : e, this.params.loop) && (n = this.activeIndex, this.slides.eq(n).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, n = this.activeIndex), u = this.slides.eq(n).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(), f = this.slides.eq(n).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(), r = void 0 === u ? f : void 0 === f ? u : f - n < n - u ? f : u), this.slideTo(r)))
			},
			update: function(n) {
				var t = this.thumbs.swiper,
					o, r, i, f, e, u, s, h, c;
				if (t)
					if (o = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView, this.realIndex !== t.realIndex && (i = t.activeIndex, t.params.loop ? (t.slides.eq(i).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, i = t.activeIndex), f = t.slides.eq(i).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(), e = t.slides.eq(i).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(), r = void 0 === f ? e : void 0 === e ? f : e - i == i - f ? i : e - i < i - f ? e : f) : r = this.realIndex, t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > i ? r - Math.floor(o / 2) + 1 : r + Math.floor(o / 2) - 1 : r > i && (r = r - o + 1), t.slideTo(r, n ? 0 : void 0))), u = 1, s = this.params.thumbs.slideThumbActiveClass, this.params.slidesPerView > 1 && !this.params.centeredSlides && (u = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (u = 1), u = Math.floor(u), t.slides.removeClass(s), t.params.loop || t.params.virtual && t.params.virtual.enabled)
						for (h = 0; h < u; h += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + h) + '"]').addClass(s);
					else
						for (c = 0; c < u; c += 1) t.slides.eq(this.realIndex + c).addClass(s)
			}
		},
		cr = [rr, ur, fr, er, or, sr, hr, {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function() {
				n.extend(this, {
					mousewheel: {
						enabled: !1,
						enable: a.enable.bind(this),
						disable: a.disable.bind(this),
						handle: a.handle.bind(this),
						handleMouseEnter: a.handleMouseEnter.bind(this),
						handleMouseLeave: a.handleMouseLeave.bind(this),
						animateSlider: a.animateSlider.bind(this),
						releaseScroll: a.releaseScroll.bind(this),
						lastScrollTime: n.now(),
						lastEventBeforeSnap: void 0,
						recentWheelEvents: []
					}
				})
			},
			on: {
				init: function() {
					!this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable();
					this.params.mousewheel.enabled && this.mousewheel.enable()
				},
				destroy: function() {
					this.params.cssMode && this.mousewheel.enable();
					this.mousewheel.enabled && this.mousewheel.disable()
				}
			}
		}, {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock"
				}
			},
			create: function() {
				n.extend(this, {
					navigation: {
						init: g.init.bind(this),
						update: g.update.bind(this),
						destroy: g.destroy.bind(this),
						onNextClick: g.onNextClick.bind(this),
						onPrevClick: g.onPrevClick.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.navigation.init();
					this.navigation.update()
				},
				toEdge: function() {
					this.navigation.update()
				},
				fromEdge: function() {
					this.navigation.update()
				},
				destroy: function() {
					this.navigation.destroy()
				},
				click: function(n) {
					var u, f = this.navigation,
						i = f.$nextEl,
						r = f.$prevEl;
					!this.params.navigation.hideOnClick || t(n.target).is(r) || t(n.target).is(i) || (i ? u = i.hasClass(this.params.navigation.hiddenClass) : r && (u = r.hasClass(this.params.navigation.hiddenClass)), !0 === u ? this.emit("navigationShow", this) : this.emit("navigationHide", this), i && i.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
				}
			}
		}, {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: function(n) {
						return n
					},
					formatFractionTotal: function(n) {
						return n
					},
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
					clickableClass: "swiper-pagination-clickable",
					lockClass: "swiper-pagination-lock"
				}
			},
			create: function() {
				n.extend(this, {
					pagination: {
						init: ut.init.bind(this),
						render: ut.render.bind(this),
						update: ut.update.bind(this),
						destroy: ut.destroy.bind(this),
						dynamicBulletIndex: 0
					}
				})
			},
			on: {
				init: function() {
					this.pagination.init();
					this.pagination.render();
					this.pagination.update()
				},
				activeIndexChange: function() {
					this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
				},
				snapIndexChange: function() {
					this.params.loop || this.pagination.update()
				},
				slidesLengthChange: function() {
					this.params.loop && (this.pagination.render(), this.pagination.update())
				},
				snapGridLengthChange: function() {
					this.params.loop || (this.pagination.render(), this.pagination.update())
				},
				destroy: function() {
					this.pagination.destroy()
				},
				click: function(n) {
					this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !t(n.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
				}
			}
		}, {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag"
				}
			},
			create: function() {
				n.extend(this, {
					scrollbar: {
						init: h.init.bind(this),
						destroy: h.destroy.bind(this),
						updateSize: h.updateSize.bind(this),
						setTranslate: h.setTranslate.bind(this),
						setTransition: h.setTransition.bind(this),
						enableDraggable: h.enableDraggable.bind(this),
						disableDraggable: h.disableDraggable.bind(this),
						setDragPosition: h.setDragPosition.bind(this),
						getPointerPosition: h.getPointerPosition.bind(this),
						onDragStart: h.onDragStart.bind(this),
						onDragMove: h.onDragMove.bind(this),
						onDragEnd: h.onDragEnd.bind(this),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function() {
					this.scrollbar.init();
					this.scrollbar.updateSize();
					this.scrollbar.setTranslate()
				},
				update: function() {
					this.scrollbar.updateSize()
				},
				resize: function() {
					this.scrollbar.updateSize()
				},
				observerUpdate: function() {
					this.scrollbar.updateSize()
				},
				setTranslate: function() {
					this.scrollbar.setTranslate()
				},
				setTransition: function(n) {
					this.scrollbar.setTransition(n)
				},
				destroy: function() {
					this.scrollbar.destroy()
				}
			}
		}, {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function() {
				n.extend(this, {
					parallax: {
						setTransform: kt.setTransform.bind(this),
						setTranslate: kt.setTranslate.bind(this),
						setTransition: kt.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				init: function() {
					this.params.parallax.enabled && this.parallax.setTranslate()
				},
				setTranslate: function() {
					this.params.parallax.enabled && this.parallax.setTranslate()
				},
				setTransition: function(n) {
					this.params.parallax.enabled && this.parallax.setTransition(n)
				}
			}
		}, {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function() {
				var t = this,
					r = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					},
					i;
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(n) {
					r[n] = dt[n].bind(t)
				});
				n.extend(t, {
					zoom: r
				});
				i = 1;
				Object.defineProperty(t.zoom, "scale", {
					get: function() {
						return i
					},
					set: function(n) {
						if (i !== n) {
							var r = t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
								u = t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0;
							t.emit("zoomChange", n, r, u)
						}
						i = n
					}
				})
			},
			on: {
				init: function() {
					this.params.zoom.enabled && this.zoom.enable()
				},
				destroy: function() {
					this.zoom.disable()
				},
				touchStart: function(n) {
					this.zoom.enabled && this.zoom.onTouchStart(n)
				},
				touchEnd: function(n) {
					this.zoom.enabled && this.zoom.onTouchEnd(n)
				},
				doubleTap: function(n) {
					this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(n)
				},
				transitionEnd: function() {
					this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
				},
				slideChange: function() {
					this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
				}
			}
		}, {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function() {
				n.extend(this, {
					lazy: {
						initialImageLoaded: !1,
						load: fi.load.bind(this),
						loadInSlide: fi.loadInSlide.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
				},
				init: function() {
					this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
				},
				scroll: function() {
					this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
				},
				resize: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				scrollbarDragMove: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				transitionStart: function() {
					this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
				},
				transitionEnd: function() {
					this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
				},
				slideChange: function() {
					this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
				}
			}
		}, {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function() {
				n.extend(this, {
					controller: {
						control: this.params.controller.control,
						getInterpolateFunction: nt.getInterpolateFunction.bind(this),
						setTranslate: nt.setTranslate.bind(this),
						setTransition: nt.setTransition.bind(this)
					}
				})
			},
			on: {
				update: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				resize: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				observerUpdate: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				setTranslate: function(n, t) {
					this.controller.control && this.controller.setTranslate(n, t)
				},
				setTransition: function(n, t) {
					this.controller.control && this.controller.setTransition(n, t)
				}
			}
		}, {
			name: "a11y",
			params: {
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function() {
				var i = this;
				n.extend(i, {
					a11y: {
						liveRegion: t('<span class="' + i.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"><\/span>')
					}
				});
				Object.keys(ei).forEach(function(n) {
					i.a11y[n] = ei[n].bind(i)
				})
			},
			on: {
				init: function() {
					this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
				},
				toEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				fromEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				paginationUpdate: function() {
					this.params.a11y.enabled && this.a11y.updatePagination()
				},
				destroy: function() {
					this.params.a11y.enabled && this.a11y.destroy()
				}
			}
		}, {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function() {
				n.extend(this, {
					history: {
						init: v.init.bind(this),
						setHistory: v.setHistory.bind(this),
						setHistoryPopState: v.setHistoryPopState.bind(this),
						scrollToSlide: v.scrollToSlide.bind(this),
						destroy: v.destroy.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.history.enabled && this.history.init()
				},
				destroy: function() {
					this.params.history.enabled && this.history.destroy()
				},
				transitionEnd: function() {
					this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
				},
				slideChange: function() {
					this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
				}
			}
		}, {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function() {
				n.extend(this, {
					hashNavigation: {
						initialized: !1,
						init: ft.init.bind(this),
						destroy: ft.destroy.bind(this),
						setHash: ft.setHash.bind(this),
						onHashCange: ft.onHashCange.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.init()
				},
				destroy: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.destroy()
				},
				transitionEnd: function() {
					this.hashNavigation.initialized && this.hashNavigation.setHash()
				},
				slideChange: function() {
					this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
				}
			}
		}, {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					waitForTransition: !0,
					disableOnInteraction: !0,
					stopOnLastSlide: !1,
					reverseDirection: !1
				}
			},
			create: function() {
				var t = this;
				n.extend(t, {
					autoplay: {
						running: !1,
						paused: !1,
						run: et.run.bind(t),
						start: et.start.bind(t),
						stop: et.stop.bind(t),
						pause: et.pause.bind(t),
						onVisibilityChange: function() {
							"hidden" === document.visibilityState && t.autoplay.running && t.autoplay.pause();
							"visible" === document.visibilityState && t.autoplay.paused && (t.autoplay.run(), t.autoplay.paused = !1)
						},
						onTransitionEnd: function(n) {
							t && !t.destroyed && t.$wrapperEl && n.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
						}
					}
				})
			},
			on: {
				init: function() {
					this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
				},
				beforeTransitionStart: function(n, t) {
					this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(n) : this.autoplay.stop())
				},
				sliderFirstMove: function() {
					this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
				},
				touchEnd: function() {
					this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
				},
				destroy: function() {
					this.autoplay.running && this.autoplay.stop();
					document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
				}
			}
		}, {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function() {
				n.extend(this, {
					fadeEffect: {
						setTranslate: oi.setTranslate.bind(this),
						setTransition: oi.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					if ("fade" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "fade");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						n.extend(this.params, t);
						n.extend(this.originalParams, t)
					}
				},
				setTranslate: function() {
					"fade" === this.params.effect && this.fadeEffect.setTranslate()
				},
				setTransition: function(n) {
					"fade" === this.params.effect && this.fadeEffect.setTransition(n)
				}
			}
		}, {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function() {
				n.extend(this, {
					cubeEffect: {
						setTranslate: si.setTranslate.bind(this),
						setTransition: si.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					if ("cube" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "cube");
						this.classNames.push(this.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						n.extend(this.params, t);
						n.extend(this.originalParams, t)
					}
				},
				setTranslate: function() {
					"cube" === this.params.effect && this.cubeEffect.setTranslate()
				},
				setTransition: function(n) {
					"cube" === this.params.effect && this.cubeEffect.setTransition(n)
				}
			}
		}, {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function() {
				n.extend(this, {
					flipEffect: {
						setTranslate: hi.setTranslate.bind(this),
						setTransition: hi.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					if ("flip" === this.params.effect) {
						this.classNames.push(this.params.containerModifierClass + "flip");
						this.classNames.push(this.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						n.extend(this.params, t);
						n.extend(this.originalParams, t)
					}
				},
				setTranslate: function() {
					"flip" === this.params.effect && this.flipEffect.setTranslate()
				},
				setTransition: function(n) {
					"flip" === this.params.effect && this.flipEffect.setTransition(n)
				}
			}
		}, {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function() {
				n.extend(this, {
					coverflowEffect: {
						setTranslate: ci.setTranslate.bind(this),
						setTransition: ci.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					"coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function() {
					"coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
				},
				setTransition: function(n) {
					"coverflow" === this.params.effect && this.coverflowEffect.setTransition(n)
				}
			}
		}, {
			name: "thumbs",
			params: {
				thumbs: {
					multipleActiveThumbs: !0,
					swiper: null,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-container-thumbs"
				}
			},
			create: function() {
				n.extend(this, {
					thumbs: {
						swiper: null,
						init: gt.init.bind(this),
						update: gt.update.bind(this),
						onThumbClick: gt.onThumbClick.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var n = this.params.thumbs;
					n && n.swiper && (this.thumbs.init(), this.thumbs.update(!0))
				},
				slideChange: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				update: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				resize: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				observerUpdate: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				setTransition: function(n) {
					var t = this.thumbs.swiper;
					t && t.setTransition(n)
				},
				beforeDestroy: function() {
					var n = this.thumbs.swiper;
					n && this.thumbs.swiperCreated && n && n.destroy()
				}
			}
		}];
	return void 0 === c.use && (c.use = c.Class.use, c.installModule = c.Class.installModule), c.use(cr), c
});

function overlayBoxClose() {
	$("body, html").removeClass("hideScrollBar");
	$(".OverlayBoxBG").stop().fadeOut(200, function() {
		$(".OverlayBoxBG").remove()
	});
	$(".OverlayBoxWrapper").stop().fadeOut(200, function() {
		$.isFunction(settings.onClose) && settings.onClose.call(this);
		$(".OverlayBoxWrapper").remove()
	});
	$("body, html").removeClass("overlayBoxBlurBG");
	$(".DiscountNotificationWrap").length > 0 && $(".DiscountNotificationWrap").removeClass("floating");
	$("body").hasClass("mobile") && $(".MobileHeader").show();
	setTimeout(function() {
		$("body").removeClass("obFx-in");
		$("body").removeClass("obFx-pop")
	}, 200);
	$(window).unbind("resize.overlayBoxResizing");
	$(window).unbind("scroll.mobileSleek");
	$("html").removeClass("oBoxMobile");
	typeof overGallerySlider != "undefined" && (delete overGallerySlider, $(window).unbind("resize.overGallerySliderResize"));
	typeof winScr != "undefined" && $(window).scrollTop(winScr)
}

function aRelOverlayBox() {
	$("a[rel='overlaybox'], a[rel='shadowbox'], a[rel='lightbox']").click(function(n) {
		var t, e;
		if (n.preventDefault(), typeof $(this).attr("data-gallery") != "undefined") {
			var s = $(this).index(),
				h = $(this).parent(),
				c = $(this).attr("data-gallery"),
				r = '<div class="swiper-container overlayBoxGallery"><div class="swiper-wrapper">',
				f = $("*[data-gallery='" + c + "']:visible");
			for (t = 0; t < f.length; t++) r += '<div class="swiper-slide"><img src="' + $(f[t]).attr("href") + '" /><\/div>';
			e = "<h3>Customer Images by<\/h3><h1>" + $(this).closest(".rvwGrp").find(".rvwAut").text().split("by ")[1].split(" on")[0] + "<\/h1>";
			r += '<\/div><div class="swiper-button-prev sgalleryPrev"><\/div><div class="swiper-button-next sgalleryNext"><\/div><\/div><div class="sGalleryPagWrapper">   <div class="sGalleryTitle">' + e + '<\/div>   <div class="swiper-pagination sgalleryPag"><\/div>   <a href="#" class="CloseOverlayBoxLink btn btn-primary btn-block btn-sm">Close the Gallery<\/a><\/div>';
			overlayBox.setup({
				content: r,
				resize: !0,
				resizeType: "fixed",
				customclass: "sGalSL",
				onOpen: function() {
					renderOverGallerySlider(s, h)
				}
			})
		} else {
			var u = $(window).width(),
				o = $(this).attr("href"),
				i = new Image;
			i.src = o;
			$(i).load(function() {
				var n, t;
				n = u < $(i).get(0).naturalWidth ? Math.ceil(u - u * .18) : Math.ceil($(i).get(0).naturalWidth);
				t = "<img src='" + o + "' />";
				overlayBox.setup({
					content: t,
					width: n,
					padding: "0px",
					format: "popup",
					resize: !0,
					resizeType: "generated"
				})
			})
		}
	})
}
var overlayBox = {
	resize: function() {
		WW = $(window).width();
		WH = $(window).height();
		settings.format != "full" ? (typeof contentHeight == "undefined" && (contentHeight = $(".OverlayBox").height()), $(".OverlayBoxWrapper").css({
			top: WH / 2 - contentHeight / 2 + $(window).scrollTop(),
			left: WW / 2 - $(".OverlayBoxWrapper").width() / 2
		})) : $(".OverlayBoxWrapper").css({
			top: "0px",
			left: "0px"
		});
		$(window).bind("resize.overlayBoxResizing", function() {
			WW = $(window).width();
			WH = $(window).height();
			$(".OverlayBoxBG").width(WW).height(WH).show();
			overlayBox.setsize()
		})
	},
	setup: function(n) {
		var t, e, i, u, r, f, o;
		settings = $.extend({
			content: null,
			title: null,
			titleOutside: !1,
			width: 800,
			height: null,
			padding: 0,
			CSSBG: !1,
			customclass: "",
			modal: !1,
			resize: !1,
			loading: !1,
			resizeType: "fixed",
			showOverlay: !0,
			onClose: null,
			onOpen: null,
			format: "popup",
			effect: null,
			renderInForm: !1,
			backgroundBlur: !1,
			mobileSleek: !1,
			hideX: !1
		}, n);
		winScr = $(window).scrollTop();
		settings.format === "full" ? $("body, html").addClass("hideScrollBar") : $("body, html").removeClass("hideScrollBar");
		settings.backgroundBlur ? $("body, html").addClass("overlayBoxBlurBG") : $("body, html").removeClass("overlayBoxBlurBG");
		settings.mobileSleek == !0 && $("body, html").addClass("mobileSleek");
		t = "";
		settings.effect == "pop" && ($("body").addClass("obFx-pop"), t = "wFx");
		overlayBox.resize();
		e = !1;
		$(".OverlayBoxBG").length > 0 && ($(".OverlayBoxBG").remove(), $(".OverlayBoxWrapper").remove(), $("body, html").removeClass("overlayBoxBlurBG"), e = !0);
		overlay = settings.showOverlay ? "<div class='OverlayBoxBG " + t + "' style='display:none;'><\/div>" : settings.format === "full" ? "<div class='OverlayBoxBG " + t + "' style='display:none!important;'><\/div>" : "<div class='OverlayBoxBG " + t + "' style='display:none!important;'><\/div>";
		i = settings.title != null ? "<div class='overlayBoxTitle' style='padding:" + settings.padding + "''><span class='h2' style='margin:0; padding;0;'>" + settings.title + "<\/span><\/div>" : "";
		u = i == "" ? "<div class='OverlayBox' style='padding:" + settings.padding + "'>" + settings.content + "<\/div>" : "<div class='OverlayBox' style='padding:0 " + settings.padding + " " + settings.padding + " " + settings.padding + "'>" + settings.content + "<\/div>";
		r = "";
		r = settings.hideX ? "" : "<div class='OverlayBoxClose'><svg class='sceico-close'><use xlink:href='/scripts/svgIcons/icons.svg#sceico-close'><\/use><\/svg><\/div>";
		f = e ? "" : "animated slideInDownShort";
		settings.resizeType != "fixed" ? overlaybox = "<div class='OverlayBoxWrapper " + f + " GenType " + t + "'>" + i + r + u + "<\/div>" : settings.titleOutside ? (overlaybox = "<div class='OverlayBoxWrapper " + f + " FixedType " + t + "'>" + i + r + "   <div class='OverlayBoxWrapperInner FixedType'>" + u + "   <\/div>", "<\/div>") : (overlaybox = "<div class='OverlayBoxWrapper " + f + " FixedType " + t + "'>   <div class='OverlayBoxWrapperInner FixedType'>" + i + r + u + "   <\/div>", "<\/div>");
		settings.renderInForm == !1 ? $("body").append(overlay + overlaybox) : $("#Form").append(overlay + overlaybox);
		settings.format === "full" ? $(".OverlayBoxWrapper").addClass("full") : $(".OverlayBoxWrapper").removeClass("full");
		$(".OverlayBoxWrapper").removeClass("animated");
		settings.customclass != "" && $(".OverlayBoxWrapper").addClass(settings.customclass);
		settings.effect != null && setTimeout(function() {
			$("body").addClass("obFx-in")
		}, 100);
		settings.showOverlay && settings.format != "full" ? $(".OverlayBoxBG").width(WW).height(WH).show().animate({
			opacity: .5
		}, 100, function() {
			if ($.isFunction(settings.onOpen) && settings.onOpen.call(this), overlayBox.setsize(settings.width), $(".OverlayBoxWrapper").css({
					opacity: "1"
				}), typeof Blazy != "undefined") var n = new Blazy({
				offset: 300
			});
			$("body").hasClass("mobile") && settings.effect == null && $(".MobileHeader").hide();
			jQuery.event.trigger("OverlayBoxonOpen")
		}) : (overlayBox.setsize(settings.width), $(".OverlayBoxWrapper").delay(50).stop().animate({
			opacity: 1
		}, 100, function() {}), typeof Blazy != "undefined" && (o = new Blazy({
			offset: 300
		}), typeof o != "undefined" && o.revalidate()), $.isFunction(settings.onOpen) && settings.onOpen.call(this), $("body").hasClass("mobile") && settings.effect == null && $(".MobileHeader").hide(), jQuery.event.trigger("OverlayBoxonOpen"));
		$(".OverlayBoxBG,.OverlayBoxClose").click(function() {
			settings.modal == !0 && $(this).hasClass("OverlayBoxBG") || ($("body, html").removeClass("hideScrollBar"), settings.showOverlay && $(".OverlayBoxBG").stop().fadeOut(200, function() {
				$(".OverlayBoxBG").remove()
			}), settings.backgroundBlur && $("body, html").removeClass("overlayBoxBlurBG"), $(".OverlayBoxWrapper").stop().animate({
				opacity: 0
			}, 200, function() {
				$.isFunction(settings.onClose) && settings.onClose.call(this);
				$(".OverlayBoxWrapper").remove()
			}), $(".DiscountNotificationWrap").length > 0 && $(".DiscountNotificationWrap").removeClass("floating"), $("body").hasClass("mobile") && settings.effect == null && $(".MobileHeader").show(), settings.effect && setTimeout(function() {
				$("body").removeClass("obFx-in");
				$("body").removeClass("obFx-pop")
			}, 200), $(window).unbind("resize.overlayBoxResizing"), $(window).unbind("scroll.mobileSleek"), $("html").removeClass("oBoxMobile"), typeof overGallerySlider != "undefined" && (delete overGallerySlider, $(window).unbind("resize.overGallerySliderResize")), typeof winScr != "undefined" && $(window).scrollTop(winScr))
		});
		$(".CloseOverlayBoxLink").click(function(n) {
			n.preventDefault();
			overlayBoxClose()
		});
		$(window).bind("load", function() {
			$(".OverlayBoxWrapper").length > 0 && overlayBox.setsize(settings.width)
		})
	},
	setsize: function() {
		if (contentHeight = settings.height == null ? $(".OverlayBoxWrapper").outerHeight() : parseInt(settings.height), contentWidth = settings.width, setWidth = settings.width, settings.format != "full")
			if (settings.resize == !1)
				if ((WW < contentWidth || WW < setWidth) && (contentWidth = WW - 60, setWidth = WW - 60), WW <= 767) $("html").addClass("oBoxMobile"), $(".OverlayBoxWrapper").css({
					width: "100%",
					height: "100%"
				}), $(".OverlayBoxWrapperInner, .OverlayBox").css({
					height: "100%"
				});
				else if ($("html").removeClass("oBoxMobile"), $(".OverlayBoxWrapper").css({
				width: contentWidth,
				height: "auto"
			}), WH > contentHeight + 50) $(".OverlayBoxWrapper").width(setWidth), settings.height == null ? $(".OverlayBoxWrapper").css({
			position: "fixed",
			top: WH / 2 - contentHeight / 2 + 10,
			left: WW / 2 - setWidth / 2,
			height: "auto"
		}) : ($(".OverlayBoxWrapper").css({
			position: "fixed",
			top: WH / 2 - contentHeight / 2 + 10,
			left: WW / 2 - setWidth / 2,
			height: contentHeight + "px"
		}), $("body").hasClass("mobile") ? $(".OverlayBoxWrapperInner, .OverlayBox").css({
			height: "100%"
		}) : $(".OverlayBoxWrapperInner, .OverlayBox").height(contentHeight));
		else {
			$(".OverlayBoxWrapper").width(setWidth);
			settings.height == null ? $(".OverlayBoxWrapper").css({
				position: "absolute",
				top: $(window).scrollTop() + 40,
				left: WW / 2 - setWidth / 2,
				height: "auto"
			}) : ($(".OverlayBoxWrapper").css({
				position: "absolute",
				top: $(window).scrollTop() + 40,
				left: WW / 2 - setWidth / 2,
				height: contentHeight + "px"
			}), $("body").hasClass("mobile") ? $(".OverlayBoxWrapperInner, .OverlayBox").css({
				height: "100%"
			}) : $(".OverlayBoxWrapperInner, .OverlayBox").height(contentHeight));
			WW <= 767 && $(".OverlayBoxWrapper").css({
				marginBottom: "40px"
			});
			var n = $(window).scrollTop();
			$(window).bind("scroll.mobileSleek", function() {
				$(window).scrollTop() < n && $(window).scrollTop(n)
			})
		} else WW <= 768 ? $("html").addClass("oBoxMobile") : $("html").removeClass("oBoxMobile"), $(".OverlayBoxWrapper").css({
			position: "fixed"
		}), settings.resizeType != "fixed" ? $(".OverlayBox").find("img").length == 1 && $(".OverlayBox").find("div, span, p, table, i, svg, iframe").length <= 0 ? setTimeout(function() {
			natW = $(".OverlayBox").find("img").get(0).naturalWidth;
			natH = $(".OverlayBox").find("img").get(0).naturalHeight;
			var r = Math.ceil(WW - WW * .18),
				u = Math.ceil(WH - WH * .18),
				i = 0,
				n = $(".OverlayBox").find("img").get(0).naturalWidth,
				t = $(".OverlayBox").find("img").get(0).naturalHeight;
			n > r && (i = r / n, $(".OverlayBoxWrapper, .OverlayBox, .OverlayBox img").css("width", r), $(".OverlayBoxWrapper, .OverlayBox, .OverlayBox img").css("height", Math.ceil(t * i)), t = t * i, n = n * i);
			t > u && (i = u / t, $(".OverlayBoxWrapper, .OverlayBox, .OverlayBox img").css("height", u), $(".OverlayBoxWrapper, .OverlayBox, .OverlayBox img").css("width", Math.ceil(n * i)), n = n * i, t = t * i);
			n < r && t < u ? ($(".OverlayBoxWrapper, .OverlayBox, .OverlayBox img").css("height", t), $(".OverlayBoxWrapper, .OverlayBox, .OverlayBox img").css("width", n)) : (n < r || t < u) && ($(".OverlayBoxWrapper, .OverlayBox, .OverlayBox img").css("height", t), $(".OverlayBoxWrapper, .OverlayBox, .OverlayBox img").css("width", n));
			(typeof natW == "undefined" || natW == 0 || natW == null) && ($(".OverlayBoxWrapper, .OverlayBox, .OverlayBox img").css("height", "800px"), $(".OverlayBoxWrapper, .OverlayBox, .OverlayBox img").css("width", "800px"));
			$(".OverlayBoxWrapper").css({
				top: WH / 2 - $(".OverlayBoxWrapper").height() / 2,
				left: WW / 2 - $(".OverlayBoxWrapper").width() / 2
			})
		}, 250) : (contentWidth + 50 < WW && ($(".OverlayBoxWrapper").width(contentWidth), $(".OverlayBoxWrapper").css({
			left: WW / 2 - contentWidth / 2
		})), contentWidth + 50 >= WW && ($(".OverlayBoxWrapper").width(Math.ceil(WW - WW * .18)), $(".OverlayBoxWrapper").css({
			left: WW / 2 - $(".OverlayBoxWrapper").width() / 2
		})), settings.height == null && (contentHeight = $(".OverlayBox").height() >= WH - 80 || $(".OverlayBox").height() < WH * .7 ? WH - 80 : $(".OverlayBox").height()), $(".OverlayBoxWrapper").css({
			height: contentHeight,
			top: WH / 2 - contentHeight / 2
		})) : ($(".OverlayBoxWrapper").css({
			height: "auto",
			bottom: "5%",
			left: "5%",
			margin: "0",
			right: "5%",
			top: "10%",
			width: "90%"
		}), $(".OverlayBoxWrapperInner").css({
			width: "100%",
			height: "100%",
			overflow: "hidden",
			overflowY: "auto"
		}));
		else settings.format === "full" && $(".OverlayBoxWrapper").css({
			position: "fixed",
			top: "0px",
			left: "0px",
			height: WH,
			width: WW,
			"overflow-y": "auto",
			"overflow-x": "hidden"
		})
	}
};

function getParameterByName(n, t) {
	t || (t = window.location.href);
	n = n.replace(/[\[\]]/g, "\\$&");
	var r = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"),
		i = r.exec(t);
	return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
}

function updateURLParameter(n, t, i) {
	var e = "",
		r = n.split("?"),
		h = r[0],
		o = r[1],
		f = "",
		u, s;
	if (o)
		for (r = o.split("&"), u = 0; u < r.length; u++) r[u].split("=")[0] != t && (e += f + r[u], f = "&");
	return s = f + "" + t + "=" + i, h + "?" + e + s
}

function removeParam(n, t) {
	var u = t.split("?")[0],
		f, i = [],
		e = t.indexOf("?") !== -1 ? t.split("?")[1] : "",
		r;
	if (e !== "") {
		for (i = e.split("&"), r = i.length - 1; r >= 0; r -= 1) f = i[r].split("=")[0], f === n && i.splice(r, 1);
		u = u + "?" + i.join("&")
	}
	return u
}

function callAjax(n, t) {
	var i;
	i = new XMLHttpRequest;
	i.onreadystatechange = function() {
		i.readyState == 4 && i.status == 200 && t(i.responseText)
	};
	i.open("GET", n, !0);
	i.send()
}

function playCartAnim() {
	$(".MobileCartCount").css({
		transform: "scale(2)"
	});
	setTimeout(function() {
		$(".MobileCartCount").css({
			transform: "scale(1)"
		})
	}, 350)
}

function mobileUpdateCounter(n) {
	n > 0 && $(".CartLink").attr("href", "/cart?prodID=" + n);
	playCartAnim()
}

function itemAddedtoCart(n) {
	var t = $(n).find(".AddCartPopupTitle").text();
	$(".itemAddedtoCartPop,.CustomMobilePopupOverlay").remove();
	$("body").prepend("<div class='itemAddedtoCartPop' style=' left: " + (displaywidth / 2 - 65) + "px; opacity:0;'><i class='icon-cart'><\/i><span>" + t + "<\/span><div class='itemAddedCheckout'>Checkout<\/div><div class='itemAddedCart'>View Cart<\/div><div class='itemAddedContinue'>Continue Shopping<\/div><\/div><div class='CustomMobilePopupOverlay' style='opacity: 0.7; display:none; position:fixed; top:0; left:0; z-index:100; width:" + displaywidth + "px;  height:" + displayheight + "px;'><\/div>");
	$(".CustomMobilePopupOverlay").show();
	$(".itemAddedtoCartPop").show().css({
		top: "40%",
		opacity: "1"
	});
	$(".itemAddedContinue").click(function() {
		$(".itemAddedtoCartPop").hide();
		$(".CustomMobilePopupOverlay").hide();
		$(".itemAddedtoCartPop,.CustomMobilePopupOverlay").remove()
	})
}

function editCartItem(n) {
	$(".EditCartItemWrap").hide();
	$(".CartItemWrap").find("table").removeClass("BackBlur");
	itemH = $(n).closest(".CartItemWrap").outerHeight(!0);
	$(n).closest(".CartItemWrap").find(".EditCartItemWrap").css({
		height: itemH,
		paddingTop: (itemH - 50) / 2
	});
	$(n).closest(".CartItemWrap").find("table").addClass("BackBlur");
	$(n).closest(".CartItemWrap").find(".EditCartItemWrap").show()
}

function editCartItemClose() {
	$(".EditCartItemWrap").hide();
	$(".CartItemWrap").find("table").removeClass("BackBlur")
}

function getResponseTeaScore(n) {
	document.readyState === "complete" || document.readyState == "interactive" ? aftergetResponseTeaScore(n) : document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
		aftergetResponseTeaScore(n)
	}) : document.attachEvent && (DOMContentLoaded = function() {
		(document.readyState === "complete" || document.readyState == "interactive") && (document.detachEvent("onreadystatechange", DOMContentLoaded), aftergetResponseTeaScore(n))
	})
}

function rememberVehicle(n, t, i, r, u, f, e, o, s, h) {
	var w, c, b;
	if (typeof r == "undefined" || r === "") var l = escape($(n).find("option:selected").attr("value")),
		a = escape($(n).find("option:selected").text()),
		v = escape($(t).find("option:selected").attr("value")),
		y = escape($(t).find("option:selected").text()),
		p = escape($(i).find("option:selected").text());
	else var l = r,
		a = u,
		v = f,
		y = e,
		p = o;
	w = "";
	c = "";
	typeof s != "undefined" && s != "" && (c = s, w = h);
	readCookie("rCar") == null ? c === "" ? createCookie("rCar", l + "_" + a + "_" + v + "_" + y + "_" + p, 365) : createCookie("rCar", l + "_" + a + "_" + v + "_" + y + "_" + p + "_" + c + "_" + w, 365) : (readC = readCookie("rCar"), readC != null && readC.split("-!-")[4] != undefined && (b = readC.split("-!-")[0] + "-!-" + readC.split("-!-")[1] + "-!-" + readC.split("-!-")[2] + "-!-" + readC.split("-!-")[3], readC = b), c === "" ? createCookie("rCar", l + "_" + a + "_" + v + "_" + y + "_" + p + "-!-" + readC, 365) : createCookie("rCar", l + "_" + a + "_" + v + "_" + y + "_" + p + "_" + c + "_" + w + "-!-" + readC, 365))
}

function showLastCar(n) {
	var r, a, i, o, f, s, e, l, u, v;
	if (readCookie("rCar") != null) {
		r = readCookie("rCar").split("-!-");
		eraseCookie("rCar");
		$(".myVehs").html("");
		a = 0;
		n: for (i = 0; i < r.length; i++) {
			if (i > 5) break n;
			o = r[i].split("_")[0];
			f = typeof r[i].split("_")[1] != "undefined" ? r[i].split("_")[1].replace(/%20/g, " ") : r[i].split("_")[1];
			s = r[i].split("_")[2];
			e = typeof r[i].split("_")[3] != "undefined" ? r[i].split("_")[3].replace(/%20/g, " ") : r[i].split("_")[3];
			var t = r[i].split("_")[4],
				h = "",
				c = "";
			if (typeof r[i].split("_")[5] != "undefined" && (c = r[i].split("_")[5], h = r[i].split("_")[6].replace(/%20/g, " ")), l = document.querySelectorAll("[id$=hCurrentVehicle]")[0].value, u = h == "" ? o + "_" + f + "_" + s + "_" + e + "_" + t : o + "_" + f + "_" + s + "_" + e + "_" + t + "_" + c + "_" + h, typeof n != "undefined" && n != "" && (v = n.toString().trim(), u = u.toString().trim(), v == u)) {
				a += 1;
				continue n
			}
			h == "" ? l != "" && l == u ? $(".myVehs").append('<div class="rVehi" data-v="' + u + '">   <a href="/products?car=' + o + "-" + s + "-" + t + '&clev=0&hs=1" class="myVehL">' + t + " " + f + " " + e + '<\/a>   <a href="javascript:void(0)" class="remVeh" onClick="showLastCarClear(\'' + u + '\')" data-tooltip="Remove">x<\/a>   <a href="/?carsearch=1" onClick="closegDrop()" class="bCata btn btn-sm btn-primary wire" style="width:82px;" data-tooltip="Deselect <b>' + t + " " + f + " " + e + '<\/b>">DESELECT<\/a><\/div>') : $(".myVehs").append('<div class="rVehi" data-v="' + u + '">   <a href="/products?car=' + o + "-" + s + "-" + t + '&clev=0&hs=1" class="myVehL">' + t + " " + f + " " + e + '<\/a>   <a href="javascript:void(0)" class="remVeh" onClick="showLastCarClear(\'' + u + '\')" data-tooltip="Remove">x<\/a>   <a href="/products?car=' + o + "-" + s + "-" + t + '&clev=0&hs=1" class="bCata btn btn-sm btn-default wire" style="width:82px;" data-tooltip="Select and browse <b>' + t + " " + f + " " + e + '<\/b> catalog">SELECT<\/a><\/div>') : l != "" && l == u ? $(".myVehs").append('<div class="rVehi" data-v="' + u + '">   <a href="/products?car=' + o + "-" + s + "-" + t + "-" + c + '&clev=0&hs=1" class="myVehL">' + t + " " + f + " " + e + " " + h + '<\/a>   <a href="javascript:void(0)" class="remVeh" onClick="showLastCarClear(\'' + u + '\')" data-tooltip="Remove">x<\/a>   <a href="/?carsearch=1" onClick="closegDrop()" class="bCata btn btn-sm btn-primary wire" style="width:82px;" data-tooltip="Deselect <b>' + t + " " + f + " " + e + " " + h + '<\/b>">DESELECT<\/a><\/div>') : $(".myVehs").append('<div class="rVehi" data-v="' + u + '">   <a href="/products?car=' + o + "-" + s + "-" + t + "-" + c + '&clev=0&hs=1" class="myVehL">' + t + " " + f + " " + e + " " + h + '<\/a>   <a href="javascript:void(0)" class="remVeh" onClick="showLastCarClear(\'' + u + '\')" data-tooltip="Remove">x<\/a>   <a href="/products?car=' + o + "-" + s + "-" + t + "-" + c + '&clev=0&hs=1" class="bCata btn btn-sm btn-default wire" style="width:82px;" data-tooltip="Select and browse <b>' + t + " " + f + " " + e + " " + h + '<\/b> catalog">SELECT<\/a><\/div>');
			rememberVehicle("", "", "", o, f, s, e, t, c, h)
		}
		$(".myVehicles").find("span.num").html(r.length - a)
	}
}

function showLastCarClear(n) {
	showLastCar(n)
}

function qv(n, t, i) {
	var r, u;
	try {
		var e = document.getElementById("prod" + t),
			f = document.getElementById("prodImg" + t),
			s = getPosition(n);
		e != null && (r = f.width, u = f.height);
		(r == 0 || r == undefined) && (r = i);
		(u == 0 || u == undefined) && (u = i)
	} catch (o) {
		console.log("Error on: " + o)
	}
}

function getPosition(n) {
	for (var t = {
			x: n.offsetLeft || 0,
			y: n.offsetTop || 0
		}; n = n.offsetParent;) t.x += n.offsetLeft, t.y += n.offsetTop;
	return t
}

function showImage(n, t) {
	imgTmr != null && clearInterval(imgTmr);
	imgWaiting = n;
	t == 0 ? imgTmr = setTimeout('continueShowImage("' + n + '")', 50) : continueShowImage(n)
}

function continueShowImage(n) {
	var t, i;
	imgWaiting == n && (t = "", t = document.getElementById(n).src.toString(), i = t.replace(new RegExp("/150/", "ig"), "/" + LargeThumbnailSize + "/"), document.getElementById("pImg").src != i && (document.getElementById("pImg").src = document.getElementById(n).src.toString().replace(new RegExp("/150/", "ig"), "/" + LargeThumbnailSize + "/"), document.getElementById("pImg").alt = document.getElementById(n).alt, document.getElementById("pAimg") != null && document.getElementById("pAimg").href.indexOf("javascript:") != 0 && (document.getElementById("pAimg").href = t.replace(new RegExp("/150/", "ig"), "/800/")), imgWaiting = ""));
	setTimeout(function() {
		$(".bscPageZoom").length > 0 && ($(".bscPageZoom").attr("onmouseover", 'renderZoom("' + t.replace(new RegExp("/150/", "ig"), "/800/") + '",this)'), $(".bscPageZoom").find("img").attr("src", "" + t.replace(new RegExp("/150/", "ig"), "/800/") + ""), setTimeout(function() {
			$(".bscPageZoom").find("img").css({
				opacity: 0
			})
		}, 0))
	}, 100)
}

function ignoreImage() {
	imgWaiting = ""
}

function moveImages(n) {
	var r = Math.min(imgs.length, firstImage + 4),
		i = 0,
		t;
	if (n == 0) {
		if (r >= imgs.length) return;
		firstImage++
	} else if (n == 1) {
		if (firstImage == 0) return;
		firstImage--
	}
	for (t = firstImage; t <= r; t++)
		if (i++, document.getElementById("thumb" + i).src = imgs[t], i == 4) break
}

function getScrollXY() {
	var n = 0,
		t = 0;
	return typeof pageYOffset == "number" ? (t = window.pageYOffset, n = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (t = document.body.scrollTop, n = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (t = document.documentElement.scrollTop, n = document.documentElement.scrollLeft), [n, t]
}

function submitTicket(n, t, i, r, u, f, e, o, s, h) {
	var c = "https://jmautosports.com/ticket.aspx?em=" + escape(n) + "&fn=" + escape(t) + "&ln=" + escape(i) + "&ca=" + r + "&ts=" + escape(u) + "&b=" + escape(f) + "&bt=" + escape(e) + "&st=" + o;
	$.post(c, function(n) {
		var t = new String(n);
		t.trim() == "success" ? h != "" && h != undefined ? window.location = h : s != "" && s != undefined && ($(".OverlayBox").is(":visible") ? jQuery.event.trigger("SupportDeskSubmitted") : alert(s)) : $(".OverlayBox").is(":visible") ? (IsEmail($(".OverlayBox").find("#mbSupportDeskEM").val()) == !1 && $("#mbSupportDeskEM").addClass("required"), $(".OverlayBox").find(".req").each(function() {
			$(this).val() === "" && ($(this).addClass("required"), $("input.required").bind("keyup", function() {
				$(this).removeClass("required")
			}))
		}), $(".OverlayBox").find(".req").length <= 0 && alert("Error occured while submitting")) : alert("Error occured while submitting")
	})
}

function submitTicket2(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
	var y = "https://jmautosports.com/ticket.aspx?em=" + escape(n) + "&fn=" + escape(t) + "&ln=" + escape(i) + "&ca=" + r + "&ts=" + escape(u) + "&b=" + escape(f) + "&bt=" + escape(e) + "&st=" + o + "&ph=" + s + "&web=" + h + "&rn=" + c + "&rd=" + l;
	$.post(y, function(n) {
		var t = new String(n);
		t.trim() == "success" && (v != "" ? window.location = v : a != "" ? alert(a) : alert("Error occured while submitting"))
	})
}

function rotateThumb(n) {
	if (timoutID != n) {
		try {
			clearTimeout(timoutPt)
		} catch (i) {}
		if (window.thumbList != undefined) {
			var t = window.thumbList[n - 1];
			t != undefined && t.length > 1 && (timoutPt = setTimeout("showRotatedThumb(" + n + ",2,1)", 1500));
			timoutID = n
		}
	}
}

function showRotatedThumb(n, t, i) {
	var r, u;
	window.thumbList != undefined && (r = window.thumbList[n - 1], r != undefined && (r = r.split("~"), r != undefined && r[parseInt(t) - 1] != undefined && (u = document.getElementById("thumb" + n), u.src = r[t - 1], i == 1 && (timoutPt = t == r.length ? setTimeout("showRotatedThumb(" + n + ",1,1)", 1500) : setTimeout("showRotatedThumb(" + n + "," + (parseInt(t) + 1) + ",1)", 1500)))), (r == undefined || i == 0) && (clearTimeout(timoutPt), timoutID = 0))
}

function showWishListDropdown(n) {
	thisBut = typeof n.id == "undefined" ? $(".AddToWishDropArrow") : $(n);
	thisBox = thisBut.parent().find(".AddToWishDropDownBox");
	thisBox.hasClass("active") ? ($(".AddToWishDropDownBox").removeClass("active"), $(".AddToWishDropDownBox").hide()) : ($(".AddToWishDropDownBox").hide(), $(".AddToWishDropDownBox").removeClass("active"), $(".AddToWishDropDownBox li:last").addClass("last"), $(".AddToWishDropDownBox li").each(function() {
		$(this).mouseenter(function() {
			$(this).addClass("active")
		});
		$(this).mouseleave(function() {
			$(this).removeClass("active")
		})
	}), thisBox.addClass("active"), thisBox.show(), $(document).mouseup(function(n) {
		var t = thisBox;
		t.is(n.target) || t.has(n.target).length !== 0 || (t.hide(), $(".AddToWishDropDownBox").removeClass("active"), $(".AddToWishDropDownBox").hide())
	}))
}

function matchRelatedHeights(n) {
	typeof n != "undefined" && $(n).find(".prodTitle").matchHeight()
}

function equalizeGrid() {
	$(".contentBody.grid").length > 0 && ($(".GridProducts").find(".stock").matchHeight(), $(".GridProducts").find(".prodTitle").matchHeight())
}

function noProductsFound() {
	$(".CustomRefineText").length > 0 && jQuery.event.trigger("SearchNoProductsFound")
}

function relatedItemsSlider(n, t) {
	var i = 5,
		r;
	isMobile && (i = 2.2);
	r = new Swiper($(t).parent(), {
		slidesPerView: i,
		spaceBetween: 30,
		preventClicks: !0,
		loopAdditionalSlides: 0,
		loop: !1,
		roundLengths: !0,
		navigation: {
			nextEl: $(t).parent().parent().find(".homeSlidersNavRight"),
			prevEl: $(t).parent().parent().find(".homeSlidersNavLeft")
		},
		pagination: {
			el: $(t).parent().parent().find(".homeSlidersNav"),
			type: "bullets"
		},
		on: {
			slideNextTransitionEnd: function() {
				typeof bLazy != "undefined" && bLazy.revalidate()
			}
		},
		breakpoints: {
			767: {
				slidesPerView: 2.2,
				slidesPerGroup: 2,
				spaceBetween: 10
			},
			991: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 30
			}
		}
	});
	n == "related" ? jQuery.event.trigger("relatedProductsLoaded") : n == "recent" && jQuery.event.trigger("recentProductsLoaded");
	matchRelatedHeights(t)
}

function IsEmail(n) {
	return /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(n)
}

function TriggerRelatedPrTabs() {
	window.location.href.indexOf("?relatedproducts=1") > -1 && $(".TabsWrapper #aRelated").length > 0 && showProductTab("Related", "")
}

function SetNewWidthVehicleSearchForms() {
	$("#topVehicleSearch").addClass("short")
}

function upsellOverlayProdAdj() {
	var n = $(".OverlayBox").width(),
		t = n / ItemsperRow,
		i = parseInt($(".productListBorderTopBox").css("paddingLeft")) * 2;
	$(".OverlayBox").find(".productListInnerBox").width(t - i);
	$(".OverlayBox").find(".productListThumb").length > 0 && (thumbSizeSqare = $(".OverlayBox").find(".prodResultView.First").find(".productListThumb").width(), $(".OverlayBox").find(".productListThumpImg").css({
		width: thumbSizeSqare,
		height: thumbSizeSqare
	}))
}

function reloadPage() {
	window.location.reload()
}

function showBuyOptions(n) {
	n === 2 ? ($(".SubscribePurchase").removeClass("deactive").addClass("active strong"), $(".OneTimePurchase").removeClass("active strong").addClass("deactive"), $(".SubscribeBoxPP,.SubscribeQTYBox").show(), $(".addCart,.MasterWishDropWrap").hide()) : ($(".SubscribePurchase").removeClass("active strong").addClass("deactive"), $(".OneTimePurchase").removeClass("deactive").addClass("active strong"), $(".SubscribeBoxPP,.SubscribeQTYBox").hide(), $(".addCart,.MasterWishDropWrap").show())
}

function gridWishListPopup() {
	var t, n;
	$(".AddToWishDropDown.Grid").mouseenter(function() {
		$this = $(this);
		clearTimeout(n);
		n = setTimeout(function() {
			$(".AddToWishDropDownBox").hide();
			$(".myWishlistsTop").remove();
			$this.is(":visible") && ($this.find(".AddToWishDropDownBox").prepend('<li class="myWishlistsTop">My Wish Lists:<\/li>'), jQuery.event.trigger("gridWishListPopOpen"), $this.find(".AddToWishDropDownBox").show());
			$(".AddToWishDropDown.Grid:not(.active)").find("svg").attr("class", "sceico-heartempty");
			$(".AddToWishDropDown.Grid:not(.active)").find("use").attr("xlink:href", "https://jmautosports.com/scripts/svgIcons/icons.svg#sceico-heartempty");
			clearTimeout(t);
			$this.find("svg").attr("class", "sceico-heartfull");
			$this.find("use").attr("xlink:href", "https://jmautosports.com/scripts/svgIcons/icons.svg#sceico-heartfull");
			$this.find(".AddToWishDropDownBox").stop().fadeIn("fast")
		}, 150)
	});
	$(".AddToWishDropDown.Grid").mouseleave(function() {
		clearTimeout(n);
		$this = $(this);
		t = setTimeout(function() {
			$this.hasClass("active") || ($this.find("svg").attr("class", "sceico-heartempty"), $this.find("use").attr("xlink:href", "https://jmautosports.com/scripts/svgIcons/icons.svg#sceico-heartempty"));
			$this.find(".AddToWishDropDownBox").stop().fadeOut("fast")
		}, 150)
	})
}

function changeSubscriptionPopup(n) {
	n != "close" ? (changeTrig = $(n), buttonPos = $(n).position(), changeTrig.hasClass("active") ? (changeTrig.removeClass("active"), $(n).parent().find(".UpdateDeliveryBox").hide()) : ($(".changeSubscription").removeClass("active"), changeTrig.addClass("active"), $(".UpdateDeliveryBox").hide(), $(".UpdateDeliveryBox").css({
		left: "",
		right: ""
	}), $(n).parent().find(".UpdateDeliveryBox").show().css({
		top: buttonPos.top + $(n).outerHeight(!0) + 5,
		right: 30
	}))) : ($(".UpdateDeliveryBox").hide(), $(".changeSubscription").removeClass("active"))
}

function changeDeliveryDayPopup(n) {
	n != "close" ? (changeTrig = $(n), buttonPos = $(n).position(), changeTrig.hasClass("active") ? (changeTrig.removeClass("active"), $(n).parent().find(".SubscriptionDeliveryDayChange").hide()) : ($(".changeDeliveryDayButton").removeClass("active"), changeTrig.addClass("active"), $(".SubscriptionDeliveryDayChange").hide(), $(".SubscriptionDeliveryDayChange").css({
		left: "",
		right: ""
	}), $(n).parent().find(".SubscriptionDeliveryDayChange").show().css({
		top: buttonPos.top + $(n).outerHeight(!0) + 5,
		left: buttonPos.left
	}))) : ($(".SubscriptionDeliveryDayChange").hide(), $(".changeDeliveryDayButton").removeClass("active"))
}

function fadeInDashboard() {
	$(".MyAccountMenu,.wholeDashWrapperInner").css("opacity", 1);
	$(".loadingAnimation.dashboard").hide()
}

function closeNotification() {
	if ($(".DiscountNotificationWrap").length > 0) {
		var n = $(document).scrollTop(),
			t = $(".notificationTempBox").outerHeight(!0);
		$(".DiscountNotificationWrap").stop().slideUp(200, function() {
			$(".DiscountNotificationWrap").remove();
			$(".notificationTempBox").length > 0 && $("html, body").animate({
				scrollTop: n - t
			}, 0);
			$(".notificationTempBox").remove()
		});
		createCookie("discountnotif", "1", 2)
	}
}

function callSuccessfulReg() {
	if ($(".tempSubBoxRed").length <= 0) $(".OverlayBoxWrapper").is(":visible") ? (regmes = $(".OverlayBoxWrapper").find(".SubThankYouMes").length > 0 && $(".OverlayBoxWrapper").find(".SubThankYouMes").html() != "" ? $(".OverlayBoxWrapper").find(".SubThankYouMes").html() : "<b>Thank you for signing up for our newsletter.<\/b><br />Your information has been recorded and your subscription request has been received.", $(".OverlayBoxWrapper").find(".mbRegMessage").remove(), $(".OverlayBoxWrapper").find("#sce_newsletterEmail").hide(), $(".OverlayBoxWrapper").find("#sce_newsletterFirst").hide(), $(".OverlayBoxWrapper").find("#sce_newsletterLast").hide(), $(".OverlayBoxWrapper").find('*[onclick*="registerNewsletter"]').hide(), $(".OverlayBoxWrapper").find(".hideOriginal").length > 0 ? ($(".OverlayBoxWrapper").find(".modalContent").html("").append('<div class="mbRegMessage Success">' + decodeEntities(regmes) + "<\/div>"), $(".OverlayBoxWrapper").find(".ModalBoxContent").addClass("hiddenOriginal")) : ($(".OverlayBoxWrapper").find("#sce_newsletterEmail").parent().append('<div class="mbRegMessage Success">' + decodeEntities(regmes) + "<\/div>"), $(".OverlayBoxWrapper").find(".ModalBoxContent").removeClass("hiddenOriginal"))) : ($(".tempSubBoxThankYou").length > 0 && jQuery.trim($(".SubThankYouMes").html()).length > 0 ? (newslettermes = "<center><h1>Success<\/h1>" + decodeEntities($(".tempSubBoxThankYou").html()) + '<a class="btn btn-primary btn-block" onClick="overlayBoxClose();">OK<\/a><\/center>', $(".tempSubBoxThankYou").remove()) : (newslettermes = "<center><h1>Success<\/h1><p>Thank you for signing up for our newsletter. Your information has been recorded and your subscription request has been received.<\/p><a class='btn btn-primary btn-block' onClick='overlayBoxClose();'>OK<\/a><\/center>", $(".tempSubBoxThankYou").remove()), overlayBox.setup({
		content: newslettermes,
		width: 350
	}));
	else {
		var n = $(".tempSubBoxRed").val();
		$(".tempSubBoxRed").remove();
		window.location.replace(n + "?subscribed")
	}
}

function callErrorReg(n) {
	n === "exists" ? regmes = "The specified email address already exists" : n === "erroroc" ? regmes = "Error occured while registering" : n === "invalidemail" ? regmes = "Invalid email was specified" : n === "namereq" ? regmes = "First and Last name are required" : n === "specchar" ? regmes = "No special characters are allowed in the first or last name" : n === "invalidinfo" && (regmes = "Invalid information");
	$(".OverlayBoxWrapper").is(":visible") ? ($(".OverlayBoxWrapper").find(".mbRegMessage").remove(), $(".OverlayBoxWrapper").find("#sce_newsletterEmail").parent().append('<div class="mbRegMessage Error">' + regmes + "<\/div>"), $(".mbRegMessage").css({
		top: $(".OverlayBoxWrapper").find("#sce_newsletterEmail").position().top - $(".mbRegMessage").outerHeight(!0) - 5,
		left: $(".OverlayBoxWrapper").find("#sce_newsletterEmail").position().left
	}), $(".OverlayBoxWrapper").find("#sce_newsletterEmail").bind("keyup", function() {
		$(this).removeClass("required");
		$(".OverlayBoxWrapper").find(".mbRegMessage").remove()
	})) : (newslettermes = "<center><h1>Error<\/h1><p>" + regmes + "<\/p><a class='btn btn-danger btn-block' onClick='overlayBoxClose();'>CLOSE<\/a><\/center>", overlayBox.setup({
		content: newslettermes,
		width: 350
	}))
}

function copyCheckoutLink() {
	try {
		if ($(".ProceedBut").length > 0 && $(".MobileCartFootLinkHref.Checkout").length > 0) {
			var n = $(".ProceedBut").attr("href"),
				t = $(".ProceedBut").attr("onclick");
			$(".MobileCartFootLinkHref.Checkout").attr("href", n).attr("onclick", t)
		}
	} catch (i) {
		console.log("copycheckoutlink fail: " + i)
	}
}

function CheckoutProceedClone() {
	try {
		$(".CheckoutWrapper").each(function() {
			$(this).css("display") === "block" && (checkOutID = $(this).find('span[ID*="Checkout"]').attr("ID"), $(".MobileCartFootLinkHref").find("#" + checkOutID + "").length === 0 && (checkOutID != "Checkout3" ? ($(".MobileCartFootLinkHref.Proceed").find(".MobileCartFootLink").remove(), $(this).find("#" + checkOutID + "").clone().appendTo(".MobileCartFootLinkHref.Proceed"), $(this).find(".ProceedButtonsTD").clone().appendTo(".MobileCartFootLinkHref.Proceed"), $(".MobileCartWrap .ProceedButton").removeClass("btn btn-primary"), $(".MobileCartFootLinkHref.Proceed").find("a").find("span,div").addClass("MobileCartFootLink"), $(".continuecheckoutbutton, .ProceedButton").html("Proceed"), $(".CheckoutWrapper").find("span.MobileCartFootLink").removeClass("MobileCartFootLink"), $(".MobileCartFootLinkHref.back").find("span").remove(), $(this).find(".ProceedButtonsTDBack").detach().appendTo(".MobileCartFootLinkHref.back"), $(".MobileCartFootLinkHref.back").find(".CheckoutBackButton").removeClass("btn btn-default btn-sm").html("<span class='MobileCartFootLink'>Go Back<\/span>")) : ($(".MobileCartFootLinkHref.Proceed").find(".MobileCartFootLink").remove(), $(this).find("#" + checkOutID + "").clone().appendTo(".MobileCartFootLinkHref.Proceed"), $(this).find(".ConfirmPurchBut").clone().appendTo(".MobileCartFootLinkHref.Proceed"), $(".MobileCartWrap .ProceedButton").removeClass("btn btn-primary"), $(".MobileCartFootLinkHref.Proceed").find("a").find("span,div").addClass("MobileCartFootLink"), $(".ProceedButton").html("Confirm Order"), $(".MobileCartFootLinkHref.back").find("span").remove(), $(this).find(".ProceedButtonsTDBack").detach().appendTo(".MobileCartFootLinkHref.back"), $(".MobileCartFootLinkHref.back").find(".CheckoutBackButton").removeClass("btn btn-default btn-sm").html("<span class='MobileCartFootLink'>Go Back<\/span>"))));
			$(".MobileCartFootLinkHref.back").html() == "" ? $(".MobileCartFootLinkHref.back").parent().find("a").addClass("two") : $(".MobileCartFootLinkHref.back").parent().find("a").removeClass("two")
		})
	} catch (n) {
		console.log(n)
	}
}

function txtOverImageVertical(n) {
	n != undefined && n != null ? $(n).parent().find(".txtOverImageContent").outerHeight(!0) > $(n).outerHeight(!0) ? $(n).parent().find(".txtOverImageContent").hide() : ($(n).parent().find(".txtOverImageContent").css({
		display: ""
	}), $(n).parent().find(".txtOverImageContent").css({
		bottom: "auto",
		top: $(n).height() / 2 - $(n).parent().find(".txtOverImageContent").outerHeight(!0) / 2
	})) : $(".CustomHTMLBox").find(".box-middle").length > 0 && $(".CustomHTMLBox").find(".box-middle").each(function() {
		$(this).find(".txtOverImageContent").outerHeight(!0) > $(this).outerHeight(!0) ? $(this).find(".txtOverImageContent").hide() : ($(this).find(".txtOverImageContent").css({
			display: ""
		}), $(this).find(".txtOverImageContent").css({
			bottom: "auto",
			top: $(this).height() / 2 - $(this).find(".txtOverImageContent").outerHeight(!0) / 2
		}))
	})
}

function txtOverImageHorizontal(n) {
	n != undefined && n != null ? $(n).parent().find(".txtOverImageContent").css({
		right: "auto",
		left: $(n).width() / 2 - $(n).parent().find(".txtOverImageContent").outerWidth(!0) / 2
	}) : $(".CustomHTMLBox").find(".box-center").length > 0 && $(".CustomHTMLBox").find(".box-center").each(function() {
		$(this).find(".txtOverImageContent").css({
			right: "auto",
			left: $(this).width() / 2 - $(this).find(".txtOverImageContent").outerWidth(!0) / 2
		})
	})
}

function difMobileImgDim() {
	$("body").hasClass("mobile") && ($("img[data-mobw]").each(function() {
		$(this).hasClass("MobileOnly") == !1 && $(this).closest(".column").hasClass("MobileOnly") == !1 && $(this).css({
			width: parseInt($(this).attr("data-mobw")) + "%"
		})
	}), $(".rplbgimg[data-mobw]").each(function() {
		$(this).hasClass("MobileOnly") == !1 && $(this).closest(".column").hasClass("MobileOnly") == !1 && $(this).css({
			width: parseInt($(this).attr("data-mobw")) + "%"
		})
	}), $("img[data-mobh]").each(function() {
		$(this).hasClass("MobileOnly") == !1 && $(this).closest(".column").hasClass("MobileOnly") == !1 && $(this).css({
			height: parseInt($(this).attr("data-mobh")) + "px"
		})
	}), $(".rplbgimg[data-mobh]").each(function() {
		$(this).hasClass("MobileOnly") == !1 && $(this).closest(".column").hasClass("MobileOnly") == !1 && $(this).css({
			height: parseInt($(this).attr("data-mobh")) + "px"
		})
	}))
}

function isNumber(n) {
	n = n ? n : window.event;
	var t = n.which ? n.which : n.keyCode;
	return t > 31 && (t < 48 || t > 57) ? !1 : !0
}

function validateme(n) {
	var t = [];
	if (n != null && $(n).length > 0) return $(n).find(".has-error, .validate-error").removeClass("has-error validate-error"), $(n).find(".validate-req").each(function() {
		var i, n;
		valEl = $(this);
		valEl[0].tagName === "SELECT" ? valEl.find("option:selected").val().trim() === "" && (valEl.closest(".form-group").length > 0 ? valEl.closest(".form-group").addClass("has-error") : valEl.addClass("validate-error"), t.push(!1)) : valEl[0].tagName === "INPUT" ? (valEl.attr("type") != "radio" || valEl.attr("type") != "checkbox") && (valEl.attr("type") == "email" ? (i = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i, i.test(valEl.val()) || (valEl.closest(".form-group").length > 0 ? valEl.closest(".form-group").addClass("has-error") : valEl.addClass("validate-error"), t.push(!1))) : valEl.attr("type") == "tel" ? (n = valEl.val().trim().replace(/[^0-9]+/g, ""), (n === "" || n.length < 8 || n.startsWith("000") || n.startsWith("000") || n.endsWith("000") || n.startsWith("11111") || n.endsWith("11111") || n.startsWith("22222") || n.endsWith("22222") || n.startsWith("33333") || n.endsWith("33333") || n.startsWith("44444") || n.endsWith("44444") || n.startsWith("55555") || n.endsWith("55555") || n.startsWith("66666") || n.endsWith("66666") || n.startsWith("77777") || n.endsWith("77777") || n.startsWith("88888") || n.endsWith("88888") || n.startsWith("99999") || n.endsWith("99999") || n.startsWith("12345") || n.endsWith("12345") || n.startsWith("98765") || n.endsWith("98765") || n.startsWith("123123") || n.endsWith("123123") || n.startsWith("654321") || n.endsWith("654321") || n.startsWith("543210") || n.endsWith("543210")) && (valEl.closest(".form-group").length > 0 ? valEl.closest(".form-group").addClass("has-error") : valEl.addClass("validate-error"), t.push(!1))) : valEl.val().trim() === "" && (valEl.closest(".form-group").length > 0 ? valEl.closest(".form-group").addClass("has-error") : valEl.addClass("validate-error"), t.push(!1))) : valEl[0].tagName === "TEXTAREA" ? valEl.val().trim() === "" && (valEl.closest(".form-group").length > 0 ? valEl.closest(".form-group").addClass("has-error") : valEl.addClass("validate-error"), t.push(!1)) : valEl.find("input").length > 0 && valEl.find("input:checked").length <= 0 && (valEl.closest(".form-group").length > 0 ? valEl.closest(".form-group").addClass("has-error") : valEl.addClass("validate-error"), t.push(!1));
		valEl.bind("change.rainbows", function() {
			var n = $(this);
			n.hasClass("validate-error") ? n.removeClass("validate-error") : n.closest(".form-group").hasClass("has-error") && n.closest(".form-group").removeClass("has-error");
			n.unbind("change.rainbows")
		})
	}), t.length <= 0 ? !0 : !1;
	alert("Please verify your validateme() function.")
}

function showNotification(n) {
	var t, i;
	if (readCookie("discountnotif") != "1" && n != "" && n != null && typeof n != undefined) t = "<div class='DiscountNotificationWrap'><div class='DiscountNotificationContent'><svg class='sceico-bell notificationicon'><use xlink:href='/scripts/svgIcons/icons.svg#sceico-bell'><\/use><\/svg><span>" + n + "<\/span> <a href='javascript:void(0)' class='closenotification' onClick='closeNotification()'> <svg class='sceico-x'><use xlink:href='/scripts/svgIcons/icons.svg#sceico-x'><\/use><\/svg> <\/a><\/div><\/div>", $(".DiscountNotificationWrap").remove(), $("body").prepend(t), i = $(document).scrollTop(), i > 0 && $(".DiscountNotificationWrap").addClass("floating"), $("body").hasClass("bodyHome") ? $(".DiscountNotificationWrap").show() : $(".DiscountNotificationWrap").show(), $(window).scroll(function() {
		if ($(".DiscountNotificationWrap").length > 0) {
			var n = $(document).scrollTop();
			$(".OverlayBoxWrapper").length <= 0 && (n > $(".DiscountNotificationWrap").outerHeight(!0) ? ($(".notificationTempBox").length <= 0 && $(".DiscountNotificationWrap").before('<div class="notificationTempBox dt" style="width:100%; height:' + $(".DiscountNotificationWrap").outerHeight(!0) + 'px;"><\/div>'), $(".DiscountNotificationWrap").addClass("floating")) : ($(".notificationTempBox").remove(), $(".DiscountNotificationWrap").removeClass("floating")))
		}
	});
	else return 1
}

function getQuickViewInfoNew(n, t, i, r) {
	r.preventDefault();
	r.stopPropagation();
	overlayBox.setup({
		content: '<iframe src="/ajaxproductquickview.aspx?name=' + n + "&portalid=" + t + "&storename=" + i + '"><\/iframe>',
		width: 800,
		height: 550
	});
	return
}

function getquickviewinfo(n) {
	var i = decodehtml(qvraw[n]),
		t;
	for (imgs = imgsraw[n].split(","), t = 0; t < imgs.length; t++) imgs[t] = decodehtml(imgs[t]).replace('"', "").replace('"', "");
	firstimage = 0;
	document.getelementbyid(serverObjectsSide.hActionName).value = "";
	document.getelementbyid(serverObjectsSide.hActionValue).value = "";
	overlaybox.setup({
		content: i,
		width: 700,
		height: 450
	});
	return
}

function showquickviewinfo() {
	var n = document.getelementbyid("quickviewinfo").innerhtml;
	document.getelementbyid(serverObjectsSide.hActionName).value = "";
	document.getelementbyid(serverObjectsSide.hActionValue).value = "";
	overlaybox.setup({
		content: n,
		width: 700,
		height: 450
	})
}

function spinnerInput(n, t, i) {
	var r = $(n).parent().parent().find("input"),
		u;
	u = typeof i != "undefined" && i > 1 ? parseFloat(i) : 1;
	r.length > 0 && (val = parseInt(r.val()), but = t, but == "plus" ? (r.val(val + u), r.attr("value", val + u)) : val > oVal && (r.val(val - u), r.attr("value", val - u)))
}

function closegDrop() {
	$(".gDrop").removeClass("active")
}

function gDrop() {
	if ($(".gDrop").length > 0) {
		var n;
		$(".gDrop").each(function(t) {
			var i;
			if ($(this).hasClass("ready")) return !1;
			$(this).addClass("ready");
			gDrop[t] = $(this);
			gDrop[t].attr("data-trigger") != "undefined" ? gDrop[t].attr("data-trigger") === "parent" ? i = gDrop[t].parent() : gDrop[t].attr("data-trigger") === "self" && (i = gDrop[t]()) : i = gDrop[t].parent();
			gDrop[t].parent().css("position") === "static" && gDrop[t].parent().css({
				position: "relative"
			});
			gDrop[t].attr("data-align") != "undefined" ? gDrop[t].attr("data-align").toLowerCase() === "left" ? gDrop[t].css({
				left: 0
			}) : gDrop[t].attr("data-align").toLowerCase() === "right" ? gDrop[t].css({
				right: 0
			}) : gDrop[t].attr("data-align").toLowerCase() === "center" && gDrop[t].css({
				right: 0
			}) : gDrop[t].css({
				left: 0
			});
			$("body").hasClass("mobile");
			$(i).on("mouseenter", function() {
				var i;
				clearTimeout(n);
				gDrop[t].attr("data-target") != "undefined" ? gDrop[t].attr("data-target") === "-1" ? i = gDrop[t].parent() : gDrop[t].attr("data-target") === "-2" ? i = gDrop[t].parent().parent() : gDrop[t].attr("data-target") === "-3" ? i = gDrop[t].parent().parent().parent() : gDrop[t].attr("data-target") === "-4" && (i = gDrop[t].parent().parent().parent().parent()) : i = gDrop[t].parent().parent();
				gDrop[t].css({
					width: $(i).width()
				});
				gDrop[t].addClass("active")
			});
			$(i).on("mouseleave", function() {
				clearTimeout(n);
				n = setTimeout(function() {
					gDrop[t].removeClass("active")
				}, 200)
			})
		})
	}
}

function renderTabletSearch() {
	loc = $(".SearchWrapper").parent();
	overlayBox.setup({
		content: "",
		width: 1200,
		modal: !0,
		padding: "0px",
		resize: !0,
		resizeType: "generated",
		format: "full",
		customclass: "popupSearchModule",
		onClose: function() {
			$(".SearchWrapper").length > 0 && (typeof hadToggleSearch != "undefined" && hadToggleSearch == !0 && ($(".SearchWrapper").addClass("toggleSearchBoxWrap"), $(".toggleSearchPart").hide()), $(".SearchWrapper").detach().prependTo(loc), $(".SearchWrapper").removeAttr("style"), $(".SearchWrapper").removeClass("activated"), $(".SearchWrapper").find(".searchTrig").find("svg.appSearchIcon").remove());
			$(window).off("resize", resizeSug);
			$("#cscrollbarScript").remove()
		},
		onOpen: function() {
			var n;
			$(".SearchWrapper").length > 0 && ($(".SearchWrapper").hasClass("toggleSearchBoxWrap") && (hadToggleSearch = !0, $(".SearchWrapper").removeClass("toggleSearchBoxWrap"), $(".toggleSearchPart").show()), $(".SearchWrapper").detach().prependTo(".OverlayBox"), $(".OverlayBox .SearchWrapper").find(".searchTrig").prepend('<svg class="sceico-search appSearchIcon"><use xlink:href="https://jmautosports.com/scripts/svgIcons/icons.svg#sceico-search"><\/use><\/svg>'));
			$(window).resize(resizeSug);
			n = document.createElement("script");
			n.type = "text/javascript";
			n.id = "cscrollbarScript";
			n.src = "https://jmautosports.com/scripts/siteJS/jquery.mousewheel-3.0.6.min.js";
			document.body.appendChild(n);
			n = document.createElement("script");
			n.type = "text/javascript";
			n.id = "cscrollbarScript";
			n.src = "https://jmautosports.com/scripts/siteJS/jquery.mCustomScrollbar.min.js";
			document.body.appendChild(n);
			$("head").append('<link href="https://jmautosports.com/scripts/Blocks/css/jquery.mCustomScrollbar.min.css" id="cscrollbarScript" rel="stylesheet">')
		}
	});
	$(".OverlayBox .SearchWrapper").addClass("activated");
	$(".OverlayBox").find("input.SearchBoxInputField").focus()
}

function toggleActive(n, t, i, r) {
	var u = $(n),
		f = t,
		e = i,
		o = r;
	f != null && f != "" && (u = f == "-1" ? u.parent() : f == "-2" ? u.parent().parent() : f == "-3" ? u.parent().parent().parent() : f == "-4" ? u.parent().parent().parent().parent() : f == "-5" ? u.parent().parent().parent().parent().parent() : f == "-6" ? u.parent().parent().parent().parent().parent().parent() : u);
	u.hasClass("active") ? u.removeClass("active") : u.addClass("active");
	e && setTimeout(function() {
		$("body").unbind("click.toggleActiveFunction").bind("click.toggleActiveFunction", function(n) {
			var t = $(n.target);
			t != u && t.closest(u).length <= 0 && (u.removeClass("active"), $("body").unbind("click.toggleActiveFunction"))
		})
	}, 0)
}

function addToCompare(n, t, i) {
	if (!($(n.target).closest(".comparePopup").length >= 1) || !$(i).hasClass("active")) {
		var r = $(".SearchResultsTop").find(".cmprBtn").attr("onclick");
		($(".comparePopup").length <= 0 && $("body").append("<div class='comparePopup qtip-bootstrap' style='display:none;'><div class='qtip-content'> <h3>Selected Items<\/h3><div class='comparePopItems'><\/div>   <div class='comparePopActions'>       <a href='javascript:void(0)' class='btn btn-sm btn-default' onclick='compareReset()'>Reset<\/a>       <a href='javascript:void(0)' class='btn btn-sm btn-primary' onclick='" + r + "'>Compare<\/a>   <\/div> <\/div><\/div>"), n = n || window.event, $(".cmprProd.active").length !== 4 || $(i).hasClass("active") != !1) && ($(i).hasClass("active") ? ($(i).removeClass("active"), $(i).find("svg").attr("class", "sceico-checkempty"), $(i).find("use").attr("xlink:href", "https://jmautosports.com/scripts/svgIcons/icons.svg#sceico-checkempty"), $(".ci" + t + "").remove(), $(".comparePopup").hide().detach().appendTo("body"), $(".cmprProd.active").length > 1 && ($(".comparePopup").detach().appendTo($(i)).show(), $(".comparePopup").css({
			top: -($(".comparePopup").outerHeight(!0) / 2 - $(".cmprProd").outerHeight(!0) / 2)
		}))) : ($(i).find("svg").attr("class", "sceico-check2full"), $(i).find("use").attr("xlink:href", "https://jmautosports.com/scripts/svgIcons/icons.svg#sceico-check2full"), $(i).addClass("active"), $(".comparePopItems").append("<div class='comparePopItem ci" + t + "'>   <div class='cmppopimg'> <img src='" + $(i).attr("data-image") + "' /> <\/div>   <div class='cmppopname'> <span>" + $(i).attr("data-title") + "<\/span> <\/div><\/div>"), $(".comparePopup").detach().appendTo($(i)), $(".cmprProd.active").length > 1 && ($(".comparePopup").css({
			visibility: "hidden"
		}), $(".comparePopup").show(), setTimeout(function() {
			$(".comparePopup").css({
				top: -($(".comparePopup").outerHeight(!0) / 2 - $(".cmprProd").outerHeight(!0) / 2)
			});
			$(".comparePopup").css({
				visibility: "visible"
			})
		}, 100))), $(".cmprProd.active").length > 1 ? $(".cmprBtn").addClass("btn-primary") : $(".cmprBtn").removeClass("btn-primary"), $(".cmprProd.active").length <= 0 && $(".comparePopup").remove())
	}
}

function resizeOverGallerySlider() {
	$(".overlayBoxGallery").find(".swiper-slide").css({
		lineHeight: parseInt($(".overlayBoxGallery").find(".swiper-slide").height()) + "px"
	})
}

function renderOverGallerySlider(n, t) {
	var i;
	clearTimeout(i);
	i = setTimeout(function() {
		var i;
		typeof overGallerySlider != "undefined" && delete overGallerySlider;
		i = typeof n != "undefined" ? n : 0;
		resizeOverGallerySlider();
		overGallerySlider = new Swiper(".overlayBoxGallery", {
			direction: "horizontal",
			loop: !1,
			followFinger: !0,
			slidesPerGroup: 1,
			slidesPerView: 1,
			updateOnImagesReady: !0,
			spaceBetween: 0,
			preloadImages: !0,
			navigation: {
				nextEl: ".sgalleryNext",
				prevEl: ".sgalleryPrev"
			},
			pagination: {
				el: ".sgalleryPag",
				type: "bullets",
				renderBullet: function(n, i) {
					return typeof t == "undefined" ? $(".SwipePageSlide:eq(" + n + ")").attr("data-gallerythumb") != undefined && $(".SwipePageSlide:eq(" + n + ")").attr("data-gallerythumb") != "" ? '<div class="' + i + '"><img src="' + $(".SwipePageSlide:eq(" + n + ")").attr("data-gallerythumb") + '" /><\/div>' : '<div class="' + i + ' VideoThumbGallery"><img src="/images/generalVideo.png" /><\/div>' : '<div class="' + i + '"><img src="' + $(t).find("a:eq(" + n + ")").find("img").attr("src") + '" /><\/div>'
				}
			}
		});
		overGallerySlider.slideTo(i);
		$(".sGalleryPagWrapper").length > 0 && $(".sgalleryPag .swiper-pagination-bullet").each(function(n) {
			var t = $(this);
			t.off("click").on("click", function() {
				overGallerySlider != undefined && overGallerySlider.slideTo(n)
			})
		})
	}, 300);
	$(window).bind("resize.overGallerySliderResize", function() {
		clearTimeout(i);
		i = setTimeout(function() {
			resizeOverGallerySlider();
			overGallerySlider.update()
		}, 50)
	})
}

function trackSrchSugClose() {
	document.getElementsByClassName("SearchBox")[0].classList.add("isHot");
	var n = $("body");
	n.bind("click.searchsuggestions", function(t) {
		var i = t.target;
		!$(i).parents(".SearchBox").length > 0 && (hideSuggestions(), document.getElementsByClassName("SearchBox")[0].classList.remove("isHot"), n.unbind("click.searchsuggestions"))
	})
}

function trackHomeSrchBlocksClose(n) {
	var i = n[0],
		t;
	i.classList.add("isHot");
	t = $("body");
	t.bind("click.searchblocktype", function(n) {
		var r = n.target;
		!$(r).parents(".bigSearchTypeBox").length > 0 && (closeSearchBlock(), i.classList.remove("isHot"), t.unbind("click.searchblocktype"))
	})
}

function resizeSug() {
	w = $(window).width();
	h = $(window).height();
	$(".OverlayBoxWrapper").find(".sceSuggestion").offset() != null && (o = $(".OverlayBoxWrapper").find(".sceSuggestion").offset().top, $(".OverlayBoxWrapper").find(".sceSuggestion").css({
		maxHeight: h - o - 30
	}));
	$(".OverlayBoxWrapper").find(".sceSuggestion").mCustomScrollbar({
		scrollInertia: 0,
		scrollbarPosition: "inside",
		autoExpandScrollbar: !0,
		scrollButtons: !0,
		theme: "dark"
	})
}

function updateSuggestionBoxStyle() {
	$(".sceSuggestion").each(function() {
		var n, i, t, r;
		$this = $(this);
		n = 400;
		isMobile && (n = "100%");
		i = $(".OverSlideSearchWrap").height();
		$this.parents(".SearchWrapper") && $this.parents(".SearchWrapper").width() > 400 && !$(".popupSearchModule").is(":visible") ? n = $this.parents(".SearchWrapper").width() : $(".popupSearchModule").is(":visible") && (n = $(".popupSearchModule").find(".SearchBox").width());
		$this.closest(".BlockSearchTypeWrap").length > 0 ? ($(".suggestionsArrow").css({
			top: i + 10,
			left: $(".OverSlideSearchWrap").find(".CustomDDWrapperMake").width() / 2 - 5
		}), $this.css({
			right: "0px",
			top: i + 20,
			width: $(".OverSlideSearchWrap").width()
		})) : ($(".MobileHeader").is(":visible") ? (t = $(".MobileSearchWrapperHelper").outerHeight(!0), r = $(".MobileSearchWrapperHelper").outerWidth(!0)) : (t = $(".SearchBox").outerHeight() + 10, r = $(".SearchBox").outerWidth()), $(".sceSuggestion").css({
			right: "0px",
			top: t,
			width: n
		}), $(".suggestionsArrow").css({
			top: t - 7,
			left: $(".SearchBox").width() / 2 - 5
		}));
		$this.parents(".OverlayBoxWrapper").length > 0 && resizeSug()
	})
}

function ShowMobileSearch() {
	$(".bigSearchTypeBox").length > 0 && ($(".MobileSearchWrapperHelper").show(), $(".MobileSearchWrapper").show());
	$(".bodyOther").length > 0 && $(".MobileSearchWrapper").show();
	$(".MobileSearchWrapper").length > 0 && ($(".MobileSearchWrapper").velocity({
		boxShadowBlur: 50
	}, 150), $(".MobileSearchWrapper").css({
		position: "fixed",
		zIndex: 20
	}).stop().velocity({
		opacity: 1
	}), $(".mHeaderSearchButton").stop().velocity({
		scale: 0
	}, {
		duration: 100,
		complete: function() {
			$(".mHeaderSearchButton").removeClass("icon-sce-search1").addClass("icon-android-close").attr("onClick", "HideMobileSearch()");
			$(".mHeaderSearchButton").stop().velocity({
				scale: 1
			}, {
				duration: 100
			})
		}
	}));
	$(".SearchBoxInputField").focus()
}

function HideMobileSearch() {
	if ($(".bodyOther").length > 0 && $(".MobileSearchWrapper").hide(), $(".MobileSearchWrapper").length > 0) {
		$(".MobileSearchWrapper").velocity({
			boxShadowBlur: 0
		}, 0);
		var n = $(".MobileHeader").height();
		$(".sceSuggestion").hide();
		$(".bigSearchTypeBox").length <= 0 ? $(".MobileSearchWrapper").css({
			position: "relative",
			zIndex: 20
		}).stop().velocity({
			opacity: 1
		}) : $(".MobileSearchWrapper").hide();
		$(".mHeaderSearchButton").stop().velocity({
			scale: 0
		}, {
			duration: 100,
			complete: function() {
				$(".mHeaderSearchButton").removeClass("icon-android-close").addClass("icon-sce-search1").attr("onClick", "ShowMobileSearch()");
				$(".mHeaderSearchButton").stop().velocity({
					scale: 1
				}, {
					duration: 100
				})
			}
		})
	}
}

function ClearSearchInput(n) {
	$(n).parent().find(".SearchBoxInputField").attr("value", "Search")
}

function miniCartToggleOptions(n, t) {
	t.preventDefault();
	$(n).hasClass("active") ? ($(n).removeClass("active"), $(n).find("span").text("SHOW OPTIONS"), $(n).parent().find(".mcExtraOptions").slideUp("fast")) : ($(n).addClass("active"), $(n).find("span").text("HIDE OPTIONS"), $(n).parent().find(".mcExtraOptions").slideDown("fast"))
}

function genMiniCart() {
	var n, t;
	$(".cartInHead").length > 0 && $(".cartInHead").is(":visible") ? (crtTrg = $(".cartInHead"), crtTrgBoth = $(".cartInHead, .miniCart")) : (crtTrg = $(".headerLinkNew.Cart"), crtTrgBoth = $(".headerLinkNew.Cart, .miniCart"));
	crtTrgBoth.off("mouseover").on("mouseover", function() {
		var i, r;
		$(".myAccDrop").hide();
		$(".myAccDrop").removeClass("opened");
		clearTimeout(n);
		$(".miniCart").is(":hidden") && ($(".HeaderTDBackground").find(".sticky").length <= 0 ? (i = crtTrg.offset().top + crtTrg.outerHeight() + 15, $(".miniCart").removeClass("sticked")) : (i = crtTrg.offset().top + crtTrg.outerHeight() - $(window).scrollTop(), $(".miniCart").addClass("sticked")), r = crtTrg.offset().left + crtTrg.outerWidth(), crtTrg.addClass("active"), $(".miniCart").css({
			top: parseInt(i),
			left: parseInt(r) - 300
		}), $(".miniCart").show(), setTimeout(function() {
			$(".miniCart").addClass("opened")
		}, 5));
		$(window).bind("scroll.minicart", function() {
			clearTimeout(t);
			t = setTimeout(function() {
				$(".HeaderTDBackground").find(".sticky").length > 0 && !$(".miniCart").hasClass("sticked") ? ($(".miniCart").hide(), $(".miniCart").removeClass("opened")) : $(".HeaderTDBackground").find(".sticky").length <= 0 && $(".miniCart").hasClass("sticked") && ($(".miniCart").hide(), $(".miniCart").removeClass("opened"))
			}, 5)
		})
	});
	crtTrgBoth.off("mouseleave").on("mouseleave", function() {
		clearTimeout(n);
		n = setTimeout(function() {
			$(".miniCart").is(":visible") && (crtTrg.removeClass("active"), $(".miniCart").hide(), $(".miniCart").removeClass("opened"));
			$(window).unbind("scroll.minicart")
		}, 150)
	})
}

function ajaxGetMiniCart() {
	$.get("/ajaxShoppingCart.aspx?action=view&mode=mini", function(n) {
		var i, t, r, u;
		if (ajaxMiniCart = JSON.parse(n), ajaxMiniCart.Items.length > 0) {
			for (i = "", t = 0; t < ajaxMiniCart.Items.length; t++) r = ajaxMiniCart.Items[t].Options.toString().length > 90 ? "<span class='mcShowOptTgl' onclick='miniCartToggleOptions(this,event)'><span>SHOW OPTIONS<\/span> <svg class='sceico-plus-1'><use xlink:href='/scripts/svgIcons/icons.svg#sceico-plus-1'><\/use><\/svg><\/span><div class='mcExtraOptions' style='display:none;'>" + ajaxMiniCart.Items[t].Options.toString() + "<\/div>" : ajaxMiniCart.Items[t].Options.toString(), i += "<div class='mcItem " + ajaxMiniCart.Items[t].ID + "' data-id='" + ajaxMiniCart.Items[t].ID + "' data-name='" + ajaxMiniCart.Items[t].ProductName + "' data-brand='" + ajaxMiniCart.Items[t].Brand + "'>           <a href='" + ajaxMiniCart.Items[t].ProductURL.toString() + "' class='clearfix'>               <div class='mcImg fl cl'>                   <img src='" + ajaxMiniCart.Items[t].ProductImage.toString() + "' alt='" + ajaxMiniCart.Items[t].ProductName.toString() + "'/>               <\/div>               <div class='mcCnt fl cn'>                   <h3 class='mcName'>" + ajaxMiniCart.Items[t].ProductName.toString() + "<\/h3>                   <span class='mcOpt'>" + r + "<\/span>                   <span class='mcQty'>QTY: " + ajaxMiniCart.Items[t].Qty.toString() + "<\/span>                   <div class='mcPr'>                       <span class='mcPrice'>" + ajaxMiniCart.Items[t].PriceItem.toString() + "<\/span>                   <\/div>               <\/div>           <\/a>           <a href='javascript:void(0)' class='mcRmv' onclick='ajaxMiniCartRemove(" + ajaxMiniCart.Items[t].ID + ")'><svg class='sceico-close'><use xlink:href='/scripts/svgIcons/icons.svg#sceico-close'><\/use><\/svg><\/a><\/div>";
			u = "<div class='miniCart' style='display:none;'>   <span class='mcArrow'><\/span>   <div class='miniCartInner'>" + i + "   <\/div>   <div class='mcSubTotal'>       <span>Subtotal: " + ajaxMiniCart.Total.toString() + "<\/span>       <a href='/secure/cart' class='btn btn-primary btn-block'>VIEW CART<\/a>   <\/div><\/div>";
			$("#phMiniCart").html(u)
		}
		genMiniCart()
	})
}

function ajaxMiniCartRemove(n) {
	$.ajax({
		type: "POST",
		url: "/ajaxShoppingCart.aspx?view=0&action=removeitem",
		data: {
			item: n,
			value: 0
		},
		success: function(t) {
			gTrackCart(n, "remove", "", "minicart");
			$(".mcItem." + n).remove();
			var i = JSON.parse(t);
			$(".mcSubTotal span").html(i.Total.toString());
			refreshCartCount(i.ShoppingCartItemCount.toString(), i.Total.toString())
		},
		error: function() {}
	})
}

function isVisible(n) {
	return n.clientWidth !== 0 && n.clientHeight !== 0 && n.style.opacity !== 0 && n.style.visibility !== "hidden"
}

function universalLoading(n, t) {
	var r = document.querySelector(".loadingAnimation"),
		u, t, i;
	r && isVisible(r) && (r.style.display = "none");
	u = typeof n != "undefined" && n != "" ? n : "";
	t = typeof t != "undefined" && t != "" ? t : "";
	i = document.createElement("div");
	i.classList.add(u);
	i.id = t;
	document.body.appendChild(i)
}

function startSearchHeader(n, t) {
	var f = t,
		i = $(".SearchWrapper"),
		u, r;
	for (txt = new String(document.getElementById(n).value.toLowerCase()), u = 0; u < txt.length; u++) "!@#$%^&*()+=[]\\;,{}|:<>?".indexOf(txt.charAt(u)) != -1 && (txt = txt.replace(/[^a-zA-Z0-9]/g, " ")), txt = txt.replace(/"/g, ""), txt = txt.replace(/'/g, "");
	if (txt.indexOf("type in") >= 0 || txt.indexOf(".aspx") >= 0 || txt.trim() == "keyword" || txt.trim() == "search") return !1;
	if (f === "side" && txt.trim() != "") return r = "", document.getElementById(searchDropDown) && (r = document.getElementById(searchDropDown).options[document.getElementById(searchDropDown).selectedIndex].value), universalLoading("loadingAnimation", "HeadSearchLoading"), window.location.href = "https://jmautosports.com/products?keyword=" + escape(txt.replace('"', "").replace("'", "")) + "&mainc=" + r, !1;
	if (f === "side" && txt.trim() === "") return !1;
	if (txt.trim() != "" && (i.hasClass("toggleSearchBoxWrap") == !1 || i.hasClass("toggleSearchBoxWrap") && i.hasClass("searchTriggered"))) return r = "", document.getElementById(searchDropDown) && (r = document.getElementById(searchDropDown).options[document.getElementById(searchDropDown).selectedIndex].value), universalLoading("loadingAnimation", "HeadSearchLoading"), window.location.href = "https://jmautosports.com/products?keyword=" + escape(txt.replace('"', "").replace("'", "")) + "&mainc=" + r, !1;
	if (i.hasClass("searchTriggered")) i.removeClass("searchTriggered"), i.find(".toggleSearchPart").hide();
	else {
		i.addClass("searchTriggered");
		i.find(".toggleSearchPart").show();
		i.find(".SearchBoxInputField").focus();
		i.find(".SearchBoxInputField").on("focusout", function() {
			return i.find(".SearchBoxInputField").val() != "" || $(".searchTrig").is(":hover") || (i.removeClass("searchTriggered"), i.find(".toggleSearchPart").hide(), i.find(".SearchBoxInputField").unbind("focusout")), !1
		})
	}
	return !1
}

function ResizeSearch() {
	var t = $(".headerNavigation_new").outerWidth(),
		i = $(".headernavsec1").outerWidth(),
		u = $(".SearchWrapper").outerWidth(),
		n, r;
	t - u < i && (n = t - i - 10, $(".SearchBox").width(n), n < 250 && $(".SearchBoxDropDown").length > 0 && ($(".SearchBoxDropDown").hide(), r = $(".searchbuttonheader").outerWidth(), $(".SearchBoxInputField").width(n - r - 10)))
}

function convertBlockSliders() {
	var n = $(".SCEBlocksSlider");
	n.length > 0 && n.each(function() {
		var t = $(this),
			n = $(this).find("#sliderBlocks"),
			e, p, c, l, w, b, ft, y, et;
		if (isMobile ? (e = n.attr("data-mobileheight"), e != undefined && e != "" && t.css({
				height: "",
				maxHeight: e + "px"
			})) : n.attr("data-height") != undefined && n.attr("data-height") != "" ? t.css({
				maxHeight: n.attr("data-height") + "px",
				height: n.attr("data-height")
			}) : t.css({
				maxHeight: ""
			}), t.is(":visible") && t[0].swiper == undefined) {
			p = n.attr("data-nav");
			p == "true" ? (c = t.find(".swiper-button-next"), l = t.find(".swiper-button-prev")) : (c = "", l = "");
			w = n.attr("data-pag");
			b = w == "true" ? t.find(".swiper-pagination") : "";
			var nt = n.attr("data-pausehover"),
				tt = n.attr("data-txtoverlayresize"),
				i = n.attr("data-autoplay"),
				it = n.attr("data-speed"),
				r = n.attr("data-effect");
			(typeof r == "undefined" || r == "") && (r = "slide");
			var u = n.attr("data-slidesperview"),
				o = n.attr("data-slidesperview"),
				s = n.attr("data-slidesperview"),
				h = n.attr("data-space"),
				a = n.attr("data-center");
			a = a == "true" ? !0 : !1;
			var k = n.attr("data-loop") === "false" ? !1 : !0,
				rt = n.attr("data-loop-mobile") === "false" ? !1 : !0,
				ut = n.attr("data-loop-tablet") === "false" ? !1 : !0,
				v = 1,
				d = 1,
				g = 1,
				f = u;
			if (u > 1 && (v = u), n.attr("data-slidesperviewtab") != undefined && n.attr("data-slidesperviewtab") != "" && (o = n.attr("data-slidesperviewtab"), g = o), n.attr("data-slidesperviewmob") != undefined && n.attr("data-slidesperviewmob") != "" && (s = n.attr("data-slidesperviewmob"), d = s), isMobile ? f = s : isTablet && (f = o), f = parseFloat(Math.ceil(f)) + 1, ft = isMobile ? !0 : !1, tt, y = eval({
					delay: parseFloat(i)
				}), (i == undefined || i == null || i == "" || i == 0 || i <= 0) && (y = !1), et = new Swiper(t, {
					direction: "horizontal",
					loop: k,
					loopAdditionalSlides: 0,
					preloadImages: !1,
					autoHeight: !1,
					setWrapperSize: !0,
					lazy: {
						loadPrevNext: !0,
						loadPrevNextAmount: f,
						loadOnTransitionStart: !0
					},
					pagination: {
						el: b,
						type: "bullets",
						clickable: !0
					},
					preventClicks: !0,
					observer: !1,
					roundLengths: !0,
					observeParents: !1,
					effect: r,
					autoplay: y,
					speed: parseFloat(it),
					slidesPerView: u,
					slidesPerGroup: v,
					spaceBetween: parseFloat(h),
					centeredSlides: a,
					navigation: {
						nextEl: c,
						prevEl: l
					},
					on: {
						lazyImageReady: function(n, t) {
							setTimeout(function() {
								txtOverImageVertical($(t).children());
								txtOverImageHorizontal($(t).children())
							}, 0)
						}
					},
					breakpoints: {
						320: {
							loop: rt,
							slidesPerView: parseFloat(s),
							slidesPerGroup: parseFloat(d),
							spaceBetween: parseFloat(h)
						},
						768: {
							loop: ut,
							slidesPerView: parseFloat(o),
							slidesPerGroup: parseFloat(g),
							spaceBetween: parseFloat(h)
						},
						992: {
							loop: k,
							slidesPerView: u,
							slidesPerGroup: v,
							spaceBetween: parseFloat(h)
						}
					}
				}), nt == "true" && (t.mouseenter(function() {
					t.hasClass("swiperPauseOnHover") && t[0].swiper.autoplay.stop()
				}), t.mouseleave(function() {
					t.hasClass("swiperPauseOnHover") && t[0].swiper.autoplay.start()
				})), r == "coverflow") $(window).on("focus", function() {
				t[0].swiper.update()
			})
		}
	})
}

function loadWistiaScripts() {
	$(".wistia_embed").length > 0 && head.load("https://fast.wistia.com/assets/external/E-v1.js")
}

function convertBlockSnippets() {
	$(".snippetBox").length > 0 && head.load("https://jmautosports.com/scripts/Blocks/js/codemirror/codemirror.css", "https://jmautosports.com/scripts/Blocks/js/codemirror/codemirror.js", function() {
		for (var i, t = $(".snippetBox"), r = [], n = 0; n < t.length; n++) i = t.eq(n).attr("class").split(" ")[2], r[n] = CodeMirror.fromTextArea(t[n], {
			lineNumbers: !0,
			matchBrackets: !0,
			autoCloseBrackets: !0,
			readOnly: !0,
			mode: i
		})
	})
}

function glfnReadyandResize() {
	$(".matchScreenHeight").length > 0 && $("html").hasClass("csstransforms") === !1 && $(".matchScreenHeight").height(window.innerHeight)
}

function geBlazy() {
	bLazy = new Blazy({
		offset: 300,
		src: "data-src",
		loadInvisible: !1,
		success: function(n) {
			var t, i;
			if ((element = $(n), elementLink = element.closest("a"), element.hasClass("blazyLoaded") || !element.hasClass("prodImg")) || (element.parent().find(".txtOverImageContent").length > 0 && element.parent().find(".txtOverImageContent").css("display") === "none" && (txtOverImageVertical(n), txtOverImageHorizontal(n)), element.addClass("blazyLoaded"), elementLink.addClass("blazyLoaded"), element.removeClass("b-error"), t = document.getElementsByTagName("body")[0].classList, t.contains("category") ? (page = "Category - Best Sellers", gElement = element.closest(".prodBox")) : t.contains("products") && (page = "Search Results", document.querySelectorAll(".contentBody")[0] && (i = document.querySelectorAll(".contentBody")[0].classList, gElement = i.contains("grid") ? element.closest(".prodBox") : i.contains("row") ? element.closest(".rowProdBox") : element.closest(".srList.tr"))), gElement == undefined || gElement != undefined && gElement.length <= 0)) return !0;
			prodArray.push(gElement.data());
			clearTimeout(gImpTmr);
			gImpTmr = setTimeout(function() {
				gImpressions(prodArray, page);
				prodArray = []
			}, 1e3)
		},
		error: function(n) {
			$(n).closest("a").addClass("blazyLoaded");
			$(n).attr("data-src") != undefined && $(n).attr("data-src") != ""
		}
	})
}

function gImpressions(n, t) {
	var r, u, i;
	if (typeof dataLayer != "undefined")
		for (r = [], u = n.length, i = 0; i < u; i++) {
			var f = n[i].brand,
				e = parseInt(n[i].c),
				o = n[i].cat,
				s = n[i].id,
				h = n[i].name;
			vari = "";
			r[i] = {
				name: h,
				id: s,
				brand: f,
				category: o,
				list: t,
				variant: vari,
				position: e
			}
		}
}

function gTrackCart(n, t, i, r) {
	var o, c, f;
	if (typeof dataLayer != "undefined") {
		var e = document.getElementsByTagName("body")[0].classList,
			u, h = 1,
			s = t;
		if (s === "add") {
			if (f = $(n), e.contains("category") ? u = f.closest(".prodBox") : e.contains("products") ? document.querySelectorAll(".contentBody")[0] && (o = document.querySelectorAll(".contentBody")[0].classList, u = o.contains("grid") ? f.closest(".prodBox") : o.contains("row") ? f.closest(".rowProdBox") : f.closest(".srList.tr")) : e.contains("product") ? f.closest(".relatedProdBox").length > 0 ? u = f.closest(".relatedProdBox") : f.closest(".prodBox").length > 0 && (u = f.closest(".prodBox")) : e.contains("cart") && (u = f.closest(".relatedProdBox")), c = "", i != undefined && i != "" && i != 0 && (h = parseInt(i)), typeof u == "undefined" || u == "" || u == null) return !1
		} else if (s === "remove" && (f = n, r != undefined && r === "minicart" ? u = $(".mcItem." + f) : e.contains("cart") && (u = $(".cartItemWrp." + f)), typeof u == "undefined" || u == "" || u == null)) return !1
	}
}

function additemtocartAjax(n, t, i, r, u, f) {
	var o = 0,
		e, s;
	document.getElementById("qty" + r) && (o = document.getElementById("qty" + r).value);
	$("body").hasClass("bodyHome") == !1 && typeof i != "undefined" && i != window && (e = $(i.$this), gTrackCart(i, "add", o));
	s = "https://jmautosports.com/ajaxAddToCart.aspx?portalID=" + n + "&storeName=" + t + "&item=" + r + "&cartID=" + u + "&qty=" + o;
	$.post(s, function(n) {
		var t = new String(n).split("^^~^^"),
			r;
		t[0] != "-1" && t[1] != "-1" && setTimeout('refreshCartCount("' + t[0] + '","' + t[1] + '")', 0);
		$("body").hasClass("mobile") ? i != undefined && (r = $(i), $(".addedToCartNotice").remove(), r.after("<div class='addedToCartNotice'><div><svg class='sceico-circlecheck text-success'><use xlink:href='/scripts/svgIcons/icons.svg#sceico-circlecheck'><\/use><\/svg> <span class='text-success'>Added to Cart<\/span><\/div><\/div>"), clearTimeout(crtNtTmr), crtNtTmr = setTimeout(function() {
			$(".addedToCartNotice").fadeOut(400)
		}, 4e3)) : typeof f != "undefined" && f != "wish" ? overlayBox.setup({
			content: t[2],
			width: 800,
			onOpen: function() {
				upsellOverlayProdAdj()
			}
		}) : (e.addClass("active"), e.find("svg").attr("class", "sceico-heartfull"), e.find("use").attr("xlink:href", "https://jmautosports.com/scripts/svgIcons/icons.svg#sceico-heartfull"), $(".AddToWishDropDownBox").hide());
		$("body").hasClass("cart") && window.location.reload(!1);
		t[3] != "" && setTimeout(t[3], 0)
	})
}

function refreshCartCount(n, t, i) {
	document.getElementById("cartItems") && (document.getElementById("cartItems").innerHTML = n);
	document.getElementById("MobileCartCount1") && (document.getElementById("MobileCartCount1").innerHTML = n);
	document.getElementById("MobileCartCount2") && (document.getElementById("MobileCartCount2").innerHTML = n);
	document.getElementById("cartTotal") && (document.getElementById("cartTotal").innerHTML = t);
	$(".cartInHead").length > 0 && $(".cartInHead").find("div").html(n);
	try {
		isMobile ? (mobileUpdateCounter(i), n <= 0 ? $(".MobileCartCount").hide() : $(".MobileCartCount").show()) : ajaxGetMiniCart()
	} catch (r) {
		console.log("refreshcartcount " + r)
	}
	var u = new CustomEvent("cartCountRefresh");
	document.dispatchEvent(u)
}

function closeMega() {
	jQuery.event.trigger("onMegaMenuClose");
	$(".HeaderTDWrapper").find(".navBut").removeClass("megaActive");
	$(".HeaderTDWrapper").find(".mbut").find(".headermainnav").removeClass("headermainnavHighlight");
	$(".megaMPlch").find(".MainMenuHoverULWrapper.mega-active").hide().css({
		width: "auto",
		left: "auto"
	});
	$(".HeaderTDWrapper").find(".SubMenuArrow").hide();
	$(".megaMPlch").find(".MainMenuHoverULWrapper.mega-active").alterClass("mSize-*", "");
	$(".megaMPlch").find(".MainMenuHoverULWrapper").removeClass("mega-active");
	$(".touchDevOverlay").remove();
	$("nav").removeClass("MMOpen")
}

function setupHamburger() {
	var n = $("nav#nav1"),
		t = $("nav#nav2");
	if (n.length > 0) nav = n;
	else if (t.length > 0) nav = t;
	else if ($("nav").length > 0) nav = $("nav");
	else return !1;
	hamMen.attr('data-loaded') === 'false' && (nav.clone().appendTo(hamMen), $("main[role=main]").find(".opnHamOverlay").length <= 0 && $("main[role=main]").prepend("<div class='opnHamOverlay'><\/div>"), hamNav = hamMen.find("nav"), hamNav.prepend("<span class='h2 hamTitle shop'>Shop<\/span>"), $(".hamExtras").detach().appendTo(hamNav).show(), $(".megaMPlch").find(".MainMenuHoverULWrapper").each(function() {
		var t = $(this).attr("class").split("mID-")[1].split(" ")[0],
			n = hamMen.find(".mID-" + t).closest(".MainMenuULWrapper");
		n.append("<li class='Hams'><\/li>");
		$(this).clone().appendTo(n.find(".Hams"))
		hamMen.attr('data-loaded', 'true');
	}))
}

function openHamburgerSide() {
	var i = document.querySelector("main[role=main]"),
		n = $("body"),
		t;
	n.addClass("hamOpened");
	hamMen.addClass("active");
	isMobile ? ($(".MobileMenuToggle").addClass("active"), window.pageYOffset > 30 && (n.addClass("hamSecondX"), $(".HamburgerMenu").before("<a id='hamCloseSecondary' href='javascript:hamClose()'><svg class='sceico-x'><use xlink:href='/scripts/svgIcons/icons.svg#sceico-x'><\/use><\/svg><\/a>")), setTimeout(function() {
		n.addClass("hOpNow")
	}, 400)) : ($(".HamburgerTrigger").addClass("active"), $(".MobileHeader").is(":hidden") && (head.load("https://jmautosports.com/scripts/siteJS/jquery.mousewheel-3.0.6.min.js", "https://jmautosports.com/scripts/siteJS/jquery.mCustomScrollbar.min.js", "https://jmautosports.com/scripts/Blocks/css/jquery.mCustomScrollbar.min.css"), head.ready("jquery.mCustomScrollbar.min.js", function() {
		setTimeout(function() {
			hamMen.mCustomScrollbar({
				scrollInertia: 500,
				scrollbarPosition: "outside",
				autoExpandScrollbar: !0,
				scrollButtons: !0,
				theme: "dark"
			})
		}, 400)
	})));
	hamMen.find(".HasMega").find(".MegaArrow").unbind("click").bind("click", function(n) {
		expandHamMenus($(this), n)
	});
	t = $(".MobileCartCount").is(":visible") ? parseInt($(".MobileCartCount").html()) : $(".cartItems").is(":visible") ? parseInt($(".cartItems").html()) : 0;
	$(".hamCountItms").find("i").html(t);
	setTimeout(function() {
		i.setAttribute("onclick", "hamClose()");
		$(window).bind("resize.hamopened", function() {
			$(".mobile.ios").length === 0 && hamClose()
		})
	}, 0)
}

function hamClose() {
	$("#hamCloseSecondary").remove();
	$("body").removeClass("hOpNow hamSecondX");
	hamMen.removeClass("active");
	$("body").removeClass("hamOpened");
	$("main[role=main]").removeAttr("onclick");
	$(".HamburgerTrigger").removeClass("active");
	hamMen.find(".headermainnav a").removeClass("active");
	hamMen.find(".ULNavLi").removeClass("active");
	hamMen.find(".MainMenuHoverULWrapper").hide();
	$(window).unbind("resize.hamopened")
}

function expandHamMenus(n, t) {
	($(n).hasClass("MegaArrow") || $(n).parent().is("a") && !$(n).parent().hasClass("active")) && ($(n).closest(".headermainnav").find("a").hasClass("active") ? (t.preventDefault(), $(n).closest("a").removeClass("active"), $(n).closest(".ULNavLi").removeClass("active"), $(n).closest(".HasMega").find(".MainMenuHoverULWrapper").velocity("slideUp", {
		duration: "normal",
		easing: "easeInSine"
	})) : (t.preventDefault(), hamMen.find(".headermainnav a").removeClass("active"), hamMen.find(".ULNavLi").removeClass("active"), hamMen.find(".MainMenuHoverULWrapper").hide(), $(n).closest("a").addClass("active"), $(n).closest(".ULNavLi").addClass("active"), $(n).closest(".HasMega").find(".MainMenuHoverULWrapper").velocity("slideDown", {
		duration: "normal",
		easing: "easeInSine"
	}), setTimeout(function() {
		typeof bLazy != "undefined" && bLazy.revalidate()
	}, 0)))
}

function fixInvalidFormAction() {
	$("#Form").length > 0 && (formAction = $("#Form").attr("action"), index = formAction.indexOf("?404;"), index <= 0 ? formAction.indexOf(".aspx") < 0 && (formAction.indexOf("?") > 0 ? (formAction = formAction.replace("?", "/default.aspx?"), formAction = formAction.replace("//", "/")) : formAction = formAction.substring(formAction.length - 1) != "https://jmautosports.com/" ? formAction + "/default.aspx" : formAction + "default.aspx", $("#Form").attr("action", formAction)) : index > 0 && (formAction = formAction.substring(index), formAction = formAction.replace("?404;", ""), formAction = formAction.replace("http://", ""), formAction = formAction.replace("https://", ""), index = formAction.indexOf("/"), formAction = formAction.substring(index), formAction != "" && formAction.indexOf(".aspx") < 0 && (formAction.indexOf("?") > 0 ? (formAction = formAction.replace("?", "/default.aspx?"), formAction = formAction.replace("//", "/")) : formAction = formAction.substring(formAction.length - 1) != "https://jmautosports.com/" ? formAction + "/default.aspx" : formAction + "default.aspx"), $("#Form").attr("action", formAction)))
}

function requestCustomPopupResize() {}

function requestCustomPopup(n, t, i) {
	var r, u;
	try {
		r = n == "skip" || n == "resultsFilters" || n == "sortResults" ? "" : n;
		t === undefined && (t = " Close ");
		u = t;
		n == "resultsFilters" ? overlayBox.setup({
			content: r,
			width: 800,
			effect: "pop",
			title: "Search Filters <span class='itemsFound'>Showing <i id='lblCount' class='lblCount text-primary'><\/i> items<\/span>",
			titleOutside: !0,
			onOpen: function() {
				var n;
				$(".overlayBoxTitle").find("#lblCount").text($("#prodCountNum").text());
				$(".MobileCustomPopFilters").appendTo(".OverlayBox").show();
				$(".OverlayBox").append("<div class='mobFltrClBtnWrap dt w100 cb'><a href='javascript:overlayBoxClose()' class='btn btn-lg btn-primary wire black btn-block mobFiltersClose'>Close<\/a><\/div>");
				i != undefined && i === "quickFind" && (n = $(".OverlayBoxWrapperInner"), n.stop().animate({
					scrollTop: parseFloat($(".quickFindTtl").position().top) - 15
				}, 300, "swing"));
				jQuery.event.trigger("mobileFiltersOpen")
			},
			onClose: function() {
				$(".OverlayBox").find(".MobileCustomPopFilters").length > 0 && $(".MobileCustomPopFilters").prependTo(".SearchResultsWrapper").hide();
				jQuery.event.trigger("mobileFiltersClose")
			},
			customclass: "mobileSearchFilters"
		}) : n == "sortResults" ? overlayBox.setup({
			content: r,
			width: 800,
			effect: "pop",
			title: "Sort <span class='itemsFound'>Current: <i id='lblCount' class='lblCount text-primary'><\/i><\/span>",
			onOpen: function() {
				var n, t;
				document.getElementById("cboSort") && (n = $("#cboSort"), t = n.find(":selected").text(), $(".overlayBoxTitle").find("#lblCount").text(t), $(".OverlayBox").append("<div class='mobSortView'><\/div>"), n.find("option").each(function() {
					var n = $(this);
					n.is(":selected") ? $(".mobSortView").append("<a href='javascript:void(0)' class='db w100 active'>" + $(this).text() + "<\/a>") : $(".mobSortView").append("<a href='javascript:void(0)' class='db w100' onclick='ChangeResultSort(" + n.val() + ")'>" + $(this).text() + "<\/a>")
				}));
				jQuery.event.trigger("mobileSortingOpen")
			},
			onClose: function() {},
			customclass: "mobileSearchFilters"
		}) : overlayBox.setup({
			content: r,
			width: 800,
			effect: "pop",
			padding: "20px",
			title: u,
			onOpen: function() {},
			onClose: function() {},
			customclass: "mobileWarningPopup"
		})
	} catch (f) {
		console.log("requestCustomPopup error: " + f)
	}
}

function CustomPopupClose() {}

function screenRender() {}

function mobHdrBack() {
	document.referrer.split("/")[2] === window.location.host ? history.go(-1) : (document.body.classList.remove("browsing"), openHamburgerSide())
}

function postbackEndRequest() {
	screenRender();
	setMediaAttributeToPictureSource()
}

function setMediaAttributeToPictureSource() {
	var n = document.querySelectorAll(".pic_block");
	n && n.forEach(function(n) {
		var t = n.classList;
		!t.contains("h-xs") || t.contains("h-sm") || t.contains("h-lg") ? t.contains("h-xs") && t.contains("h-sm") && !t.contains("h-lg") ? n.getElementsByTagName("source")[0].setAttribute("media", "(max-width: 992px)") : !t.contains("h-xs") && t.contains("h-sm") && t.contains("h-lg") ? n.getElementsByTagName("source")[0].setAttribute("media", "(min-width: 769px)") : t.contains("h-xs") || t.contains("h-sm") || !t.contains("h-lg") ? t.contains("h-xs") && !t.contains("h-sm") && t.contains("h-lg") && n.getElementsByTagName("source")[0].setAttribute("media", "(max-width: 768px)") : n.getElementsByTagName("source")[0].setAttribute("media", "(min-width: 993px)") : n.getElementsByTagName("source")[0].setAttribute("media", "(max-width: 768px)")
	})
}

function UpdateQueryString(n, t, i, r) {
	var f, u, e;
	if (i || (i = window.location.href), f = new RegExp("([?&])" + n + "=.*?(&|#|$)(.*)", "gi"), f.test(i)) {
		if (typeof t != "undefined" && t !== null) return i.replace(f, "$1" + n + "=" + t + "$2$3");
		if (u = i.split("#"), i = u[0].replace(f, "$1$3").replace(/(&|\?)$/, ""), typeof u[1] != "undefined" && u[1] !== null && (i += "#" + u[1]), r) window.location.href = i;
		else return i
	} else if (typeof t != "undefined" && t !== null)
		if (e = i.indexOf("?") !== -1 ? "&" : "?", u = i.split("#"), i = u[0] + e + n + "=" + t, typeof u[1] != "undefined" && u[1] !== null && (i += "#" + u[1]), r) window.location.href = i;
		else return i;
	else if (r) window.location.href = i;
	else return i
}

function GetXmlHttpObject() {
	var n = null;
	try {
		n = new XMLHttpRequest
	} catch (t) {
		try {
			n = new ActiveXObject("Msxml2.XMLHTTP")
		} catch (t) {
			n = new ActiveXObject("Microsoft.XMLHTTP")
		}
	}
	return n
}

function ajaxUpdate(n, t, i) {
	return xmlhttp = GetXmlHttpObject(), null == xmlhttp ? void alert("Your browser does not support AJAX!") : void(xmlhttp && (xmlhttp.onreadystatechange = function() {
		4 != xmlhttp.readyState && "complete" != xmlhttp.readyState || 200 != xmlhttp.status || (document.getElementById(t).innerHTML = xmlhttp.responseText)
	}, xmlhttp.open("GET", n + "?q=" + Math.random() + "&" + t + "=" + i, !0), xmlhttp.send(null)))
}

function ajaxGetAllCounters() {
	return xmlhttp = GetXmlHttpObject(), null == xmlhttp ? void alert("Your browser does not support AJAX!") : void(xmlhttp && (xmlhttp.onreadystatechange = function() {
		if ((4 == xmlhttp.readyState || "complete" == xmlhttp.readyState) && 200 == xmlhttp.status) {
			var n = xmlhttp.responseText.split(",");
			document.getElementById("fShare") && (document.getElementById("fShare").innerHTML = n[0]);
			document.getElementById("fTwitt") && (document.getElementById("fTwitt").innerHTML = n[1]);
			document.getElementById("fMail") && (document.getElementById("fMail").innerHTML = n[2]);
			document.getElementById("gGplus") && (document.getElementById("gGplus").innerHTML = n[3]);
			document.getElementById("fLike") && (document.getElementById("fLike").innerHTML = n[4])
		}
	}, xmlhttp.open("GET", "/CountViews.aspx?q=" + Math.random() + "&All=0", !0), xmlhttp.send(null)))
}

function fShare_click() {
	return u = location.href, t = document.title, window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(u) + "&t=" + encodeURIComponent(t), "sharer", "toolbar=0,status=0,width=626,height=436"), !1
}

function fTwitt_click(n) {
	return u = location.href, t = document.title, window.open(n, "sharer", "toolbar=0,status=0,width=626,height=436"), !1
}

function fMail_click() {
	return u = location.href, t = document.title, window.open("https://mail.google.com", "mail", "toolbar=0,status=0,width=626,height=436"), !1
}

function fGplus_click() {
	return u = location.href, t = document.title, window.open("https://www.google.com/", "sharer", "toolbar=0,status=0,width=626,height=436"), !1
}

function fLike_click() {
	return u = location.href, t = document.title, window.open("http://www.facebook.com/plugins/like.php?href=" + encodeURIComponent(u) + "&t=" + encodeURIComponent(t), "sharer", "toolbar=0,status=0,width=626,height=436"), !1
}
var sanitizeHTML, MobileStart, firstImage, imgTmr, imgWaiting, LargeThumbnailSize, timoutID, decodeEntities, prodArray, gImpTmr, element, elementLink, page, gElement, addToCartAllowed, crtNtTmr, hamMen, prm;
$.fn.extend({
	hasClasses: function(n) {
		for (var t in n)
			if ($(this).hasClass(n[t])) return !0;
		return !1
	}
});
jQuery.fn.doesExist = function() {
	return jQuery(this).length > 0
};
! function(n) {
	var i, r, u, f = n.event,
		e = {
			_: 0
		},
		t = 0;
	i = f.special.throttledresize = {
		setup: function() {
			n(this).on("resize", i.handler)
		},
		teardown: function() {
			n(this).off("resize", i.handler)
		},
		handler: function(o, s) {
			var h = this,
				c = arguments;
			r = !0;
			u || (setInterval(function() {
				t++;
				(t > i.threshold && r || s) && (o.type = "throttledresize", f.dispatch.apply(h, c), r = !1, t = 0);
				t > 9 && (n(e).stop(), u = !1, t = 0)
			}, 30), u = !0)
		},
		threshold: 0
	}
}(jQuery);
! function(n) {
	var t, i, r = n.event;
	t = r.special.debouncedresize = {
		setup: function() {
			n(this).on("resize", t.handler)
		},
		teardown: function() {
			n(this).off("resize", t.handler)
		},
		handler: function(n, u) {
			var e = this,
				o = arguments,
				f = function() {
					n.type = "debouncedresize";
					r.dispatch.apply(e, o)
				};
			i && clearTimeout(i);
			u ? f() : i = setTimeout(f, t.threshold)
		},
		threshold: 150
	}
}(jQuery);
! function(n, t) {
	function f(n) {
		var t = it.call(arguments, 1);
		return function() {
			return n.apply(this, t.concat(it.call(arguments)))
		}
	}

	function ot(n) {
		return n.replace(/^[^#]*#?(.*)$/, "$1")
	}

	function st(n) {
		return n.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
	}

	function w(f, h, c, l, v) {
		var b, y, w, k, d;
		return l !== i ? (w = c.match(f ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/), d = w[3] || "", 2 === v && s(l) ? y = l.replace(f ? et : ft, "") : (k = r(w[2]), l = s(l) ? r[f ? u : e](l) : l, y = 2 === v ? l : 1 === v ? n.extend({}, l, k) : n.extend({}, k, l), y = $(y), f && (y = y.replace(tt, a))), b = w[1] + (f ? "#" : y || !w[1] ? "?" : "") + y + d) : b = h(c !== i ? c : t[p][o]), b
	}

	function b(n, t, f) {
		return t === i || "boolean" == typeof t ? (f = t, t = $[n ? u : e]()) : t = s(t) ? t.replace(n ? et : ft, "") : t, r(t, f)
	}

	function k(t, r, u, f) {
		return s(u) || "object" == typeof u || (f = u, u = r, r = i), this.each(function() {
			var e = n(this),
				i = r || nt()[(this.nodeName || "").toLowerCase()] || "",
				o = i && e.attr(i) || "";
			e.attr(i, $[t](o, u, f))
		})
	}

	function s(n) {
		return "string" == typeof n
	}
	var i, h, r, l, d, g, nt, tt, it = Array.prototype.slice,
		a = decodeURIComponent,
		$ = n.param,
		v = n.bbq = n.bbq || {},
		rt = n.event.special,
		ut = "hashchange",
		e = "querystring",
		u = "fragment",
		y = "elemUrlAttr",
		p = "location",
		o = "href",
		c = "src",
		ft = /^.*\?|#.*$/g,
		et = /^.*\#/,
		ht = {};
	$[e] = f(w, 0, st);
	$[u] = h = f(w, 1, ot);
	h.noEscape = function(t) {
		t = t || "";
		var i = n.map(t.split(""), encodeURIComponent);
		tt = new RegExp(i.join("|"), "g")
	};
	h.noEscape(",/");
	n.deparam = r = function(t, r) {
		var u = {},
			f = {
				"true": !0,
				"false": !1,
				"null": null
			};
		return n.each(t.replace(/\+/g, " ").split("&"), function(t, e) {
			var o, y = e.split("="),
				h = a(y[0]),
				v = u,
				l = 0,
				s = h.split("]["),
				c = s.length - 1;
			if (/\[/.test(s[0]) && /\]$/.test(s[c]) ? (s[c] = s[c].replace(/\]$/, ""), s = s.shift().split("[").concat(s), c = s.length - 1) : c = 0, 2 === y.length)
				if (o = a(y[1]), r && (o = o && !isNaN(o) ? +o : "undefined" === o ? i : f[o] !== i ? f[o] : o), c)
					for (; c >= l; l++) h = "" === s[l] ? v.length : s[l], v = v[h] = c > l ? v[h] || (s[l + 1] && isNaN(s[l + 1]) ? {} : []) : o;
				else n.isArray(u[h]) ? u[h].push(o) : u[h] = u[h] !== i ? [u[h], o] : o;
			else h && (u[h] = r ? i : "")
		}), u
	};
	r[e] = f(b, 0);
	r[u] = l = f(b, 1);
	n[y] || (n[y] = function(t) {
		return n.extend(ht, t)
	})({
		a: o,
		base: o,
		iframe: c,
		img: c,
		input: c,
		form: "action",
		link: o,
		script: c
	});
	nt = n[y];
	n.fn[e] = f(k, e);
	n.fn[u] = f(k, u);
	v.pushState = d = function(n, r) {
		s(n) && /^#/.test(n) && r === i && (r = 2);
		var u = n !== i,
			f = h(t[p][o], u ? n : {}, u ? r : 2);
		t[p][o] = f + (/#/.test(f) ? "" : "#")
	};
	v.getState = g = function(n, t) {
		return n === i || "boolean" == typeof n ? l(n) : l(t)[n]
	};
	v.removeState = function(t) {
		var r = {};
		t !== i && (r = g(), n.each(n.isArray(t) ? t : arguments, function(n, t) {
			delete r[t]
		}));
		d(r, 2)
	};
	rt[ut] = n.extend(rt[ut], {
		add: function(t) {
			function e(n) {
				var t = n[u] = h();
				n.getState = function(n, u) {
					return n === i || "boolean" == typeof n ? r(t, n) : r(t, u)[n]
				};
				f.apply(this, arguments)
			}
			var f;
			return n.isFunction(t) ? (f = t, e) : (f = t.handler, void(t.handler = e))
		}
	})
}(jQuery, this),
function(n, t, i) {
	function f(n) {
		return n = n || t[u][e], n.replace(/^[^#]*#?(.*)$/, "$1")
	}
	var o, s = n.event.special,
		u = "location",
		r = "hashchange",
		e = "href",
		a = n.browser,
		h = document.documentMode,
		c = null && (h === i || 8 > h),
		l = "on" + r in t && !c;
	n[r + "Delay"] = 100;
	s[r] = n.extend(s[r], {
		setup: function() {
			return l ? !1 : void n(o.start)
		},
		teardown: function() {
			return l ? !1 : void n(o.stop)
		}
	});
	o = function() {
		function a() {
			s = h = function(n) {
				return n
			};
			c && (o = n('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow, h = function() {
				return f(o.document[u][e])
			}, (s = function(n, t) {
				if (n !== t) {
					var i = o.document;
					i.open().close();
					i[u].hash = "#" + n
				}
			})(f()))
		}
		var i, o, s, h, l = {};
		return l.start = function() {
			if (!i) {
				var o = f();
				s || a(),
					function c() {
						var a = f(),
							l = h(o);
						a !== o ? (s(o = a, l), n(t).trigger(r)) : l !== o && (t[u][e] = t[u][e].replace(/#.*/, "") + "#" + l);
						i = setTimeout(c, n[r + "Delay"])
					}()
			}
		}, l.stop = function() {
			o || (i && clearTimeout(i), i = 0)
		}, l
	}()
}(jQuery, this),
function(n, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : n.Blazy = t()
}(this, function() {
	function h(n) {
		var i = n._util;
		i.elements = b(n.options);
		i.count = i.elements.length;
		i.destroyed && (i.destroyed = !1, n.options.container && t(n.options.container, function(n) {
			r(n, "scroll", i.validateT)
		}), r(window, "resize", i.saveViewportOffsetT), r(window, "resize", i.validateT), r(window, "scroll", i.validateT));
		c(n)
	}

	function c(n) {
		for (var s, r, t, h, f = n._util, o = 0; o < f.count; o++) {
			s = f.elements[o];
			n: {
				if (t = s, r = n.options, h = t.getBoundingClientRect(), r.container && w && (t = t.closest(r.containerClass))) {
					t = t.getBoundingClientRect();
					r = u(t, i) ? u(h, {
						top: t.top - r.offset,
						right: t.right + r.offset,
						bottom: t.bottom + r.offset,
						left: t.left - r.offset
					}) : !1;
					break n
				}
				r = u(h, i)
			}(r || e(s, n.options.successClass)) && (n.load(s), f.elements.splice(o, 1), f.count--, o--)
		}
		0 === f.count && n.destroy()
	}

	function u(n, t) {
		return n.right >= t.left && n.bottom >= t.top && n.left <= t.right && n.top <= t.bottom
	}

	function l(i, u, h) {
		if (!e(i, h.successClass) && (u || h.loadInvisible || 0 < i.offsetWidth && 0 < i.offsetHeight))
			if (u = i.getAttribute(s) || i.getAttribute(h.src)) {
				u = u.split(h.separator);
				var l = u[p && 1 < u.length ? 1 : 0],
					w = i.getAttribute(h.srcset),
					b = "img" === i.nodeName.toLowerCase(),
					k = (u = i.parentNode) && "picture" === u.nodeName.toLowerCase();
				if (b || void 0 === i.src) {
					var c = new Image,
						v = function() {
							h.error && h.error(i, "invalid");
							o(i, h.errorClass);
							n(c, "error", v);
							n(c, "load", y)
						},
						y = function() {
							b ? k || a(i, l, w) : i.style.backgroundImage = 'url("' + l + '")';
							f(i, h);
							n(c, "load", y);
							n(c, "error", v)
						};
					k && (c = i, t(u.getElementsByTagName("source"), function(n) {
						var t = h.srcset,
							i = n.getAttribute(t);
						i && (n.setAttribute("srcset", i), n.removeAttribute(t))
					}));
					r(c, "error", v);
					r(c, "load", y);
					a(c, l, w)
				} else i.src = l, f(i, h)
			} else "video" === i.nodeName.toLowerCase() ? (t(i.getElementsByTagName("source"), function(n) {
				var t = h.src,
					i = n.getAttribute(t);
				i && (n.setAttribute("src", i), n.removeAttribute(t))
			}), i.load(), f(i, h)) : (h.error && h.error(i, "missing"), o(i, h.errorClass))
	}

	function f(n, i) {
		o(n, i.successClass);
		i.success && i.success(n);
		n.removeAttribute(i.src);
		n.removeAttribute(i.srcset);
		t(i.breakpoints, function(t) {
			n.removeAttribute(t.src)
		})
	}

	function a(n, t, i) {
		i && n.setAttribute("srcset", i);
		n.src = t
	}

	function e(n, t) {
		return -1 !== (" " + n.className + " ").indexOf(" " + t + " ")
	}

	function o(n, t) {
		e(n, t) || (n.className += " " + t)
	}

	function b(n) {
		var i = [],
			t;
		for (n = n.root.querySelectorAll(n.selector), t = n.length; t--; i.unshift(n[t]));
		return i
	}

	function v(n) {
		i.bottom = (window.innerHeight || document.documentElement.clientHeight) + n;
		i.right = (window.innerWidth || document.documentElement.clientWidth) + n
	}

	function r(n, t, i) {
		n.attachEvent ? n.attachEvent && n.attachEvent("on" + t, i) : n.addEventListener(t, i, {
			capture: !1,
			passive: !0
		})
	}

	function n(n, t, i) {
		n.detachEvent ? n.detachEvent && n.detachEvent("on" + t, i) : n.removeEventListener(t, i, {
			capture: !1,
			passive: !0
		})
	}

	function t(n, t) {
		if (n && t)
			for (var r = n.length, i = 0; i < r && !1 !== t(n[i], i); i++);
	}

	function y(n, t, i) {
		var r = 0;
		return function() {
			var u = +new Date;
			u - r < t || (r = u, n.apply(i, arguments))
		}
	}
	var s, i, p, w;
	return function(r) {
		var e, u, f;
		document.querySelectorAll || (e = document.createStyleSheet(), document.querySelectorAll = function(n, t, i, r, u) {
			for (u = document.all, t = [], n = n.replace(/\[for\b/gi, "[htmlFor").split(","), i = n.length; i--;) {
				for (e.addRule(n[i], "k:v"), r = u.length; r--;) u[r].currentStyle.k && t.push(u[r]);
				e.removeRule(0)
			}
			return t
		});
		u = this;
		f = u._util = {};
		f.elements = [];
		f.destroyed = !0;
		u.options = r || {};
		u.options.error = u.options.error || !1;
		u.options.offset = u.options.offset || 100;
		u.options.root = u.options.root || document;
		u.options.success = u.options.success || !1;
		u.options.selector = u.options.selector || ".b-lazy";
		u.options.separator = u.options.separator || "|";
		u.options.containerClass = u.options.container;
		u.options.container = u.options.containerClass ? document.querySelectorAll(u.options.containerClass) : !1;
		u.options.errorClass = u.options.errorClass || "b-error";
		u.options.breakpoints = u.options.breakpoints || !1;
		u.options.loadInvisible = u.options.loadInvisible || !1;
		u.options.successClass = u.options.successClass || "b-loaded";
		u.options.validateDelay = u.options.validateDelay || 25;
		u.options.saveViewportOffsetDelay = u.options.saveViewportOffsetDelay || 50;
		u.options.srcset = u.options.srcset || "data-srcset";
		u.options.src = s = u.options.src || "data-src";
		w = Element.prototype.closest;
		p = 1 < window.devicePixelRatio;
		i = {};
		i.top = 0 - u.options.offset;
		i.left = 0 - u.options.offset;
		u.revalidate = function() {
			h(u)
		};
		u.load = function(n, i) {
			var r = this.options;
			void 0 === n.length ? l(n, i, r) : t(n, function(n) {
				l(n, i, r)
			})
		};
		u.destroy = function() {
			var i = this._util;
			this.options.container && t(this.options.container, function(t) {
				n(t, "scroll", i.validateT)
			});
			n(window, "scroll", i.validateT);
			n(window, "resize", i.validateT);
			n(window, "resize", i.saveViewportOffsetT);
			i.count = 0;
			i.elements.length = 0;
			i.destroyed = !0
		};
		f.validateT = y(function() {
			c(u)
		}, u.options.validateDelay, u);
		f.saveViewportOffsetT = y(function() {
			v(u.options.offset)
		}, u.options.saveViewportOffsetDelay, u);
		v(u.options.offset);
		t(u.options.breakpoints, function(n) {
			if (n.width >= window.screen.width) return s = n.src, !1
		});
		setTimeout(function() {
			h(u)
		})
	}
});
sanitizeHTML = function(n) {
	var t = document.createElement("div");
	return t.textContent = n, t.innerHTML
};
! function(n) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
	var o = -1,
		r = -1,
		i = function(n) {
			return parseFloat(n) || 0
		},
		s = function(t) {
			var f = 1,
				e = n(t),
				u = null,
				r = [];
			return e.each(function() {
				var t = n(this),
					e = t.offset().top - i(t.css("margin-top")),
					o = r.length > 0 ? r[r.length - 1] : null;
				null === o ? r.push(t) : Math.floor(Math.abs(u - e)) <= f ? r[r.length - 1] = o.add(t) : r.push(t);
				u = e
			}), r
		},
		u = function(t) {
			var i = {
				byRow: !0,
				property: "height",
				target: null,
				remove: !1
			};
			return "object" == typeof t ? n.extend(i, t) : ("boolean" == typeof t ? i.byRow = t : "remove" === t && (i.remove = !0), i)
		},
		t = n.fn.matchHeight = function(i) {
			var r = u(i),
				f;
			return r.remove ? (f = this, this.css(r.property, ""), n.each(t._groups, function(n, t) {
				t.elements = t.elements.not(f)
			}), this) : this.length <= 1 && !r.target ? this : (t._groups.push({
				elements: this,
				options: r
			}), t._apply(this, r), this)
		},
		f, e;
	t.version = "0.7.2";
	t._groups = [];
	t._throttle = 80;
	t._maintainScroll = !1;
	t._beforeUpdate = null;
	t._afterUpdate = null;
	t._rows = s;
	t._parse = i;
	t._parseOptions = u;
	t._apply = function(r, f) {
		var e = u(f),
			o = n(r),
			c = [o],
			l = n(window).scrollTop(),
			a = n("html").outerHeight(!0),
			h = o.parents().filter(":hidden");
		return h.each(function() {
			var t = n(this);
			t.data("style-cache", t.attr("style"))
		}), h.css("display", "block"), e.byRow && !e.target && (o.each(function() {
			var i = n(this),
				t = i.css("display");
			"inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block");
			i.data("style-cache", i.attr("style"));
			i.css({
				display: t,
				"padding-top": "0",
				"padding-bottom": "0",
				"margin-top": "0",
				"margin-bottom": "0",
				"border-top-width": "0",
				"border-bottom-width": "0",
				height: "100px",
				overflow: "hidden"
			})
		}), c = s(o), o.each(function() {
			var t = n(this);
			t.attr("style", t.data("style-cache") || "")
		})), n.each(c, function(t, r) {
			var u = n(r),
				f = 0;
			if (e.target) f = e.target.outerHeight(!1);
			else {
				if (e.byRow && u.length <= 1) return void u.css(e.property, "");
				u.each(function() {
					var t = n(this),
						u = t.attr("style"),
						i = t.css("display"),
						r;
					"inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
					r = {
						display: i
					};
					r[e.property] = "";
					t.css(r);
					t.outerHeight(!1) > f && (f = t.outerHeight(!1));
					u ? t.attr("style", u) : t.css("display", "")
				})
			}
			u.each(function() {
				var t = n(this),
					r = 0;
				e.target && t.is(e.target) || ("border-box" !== t.css("box-sizing") && (r += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), r += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(e.property, f - r + "px"))
			})
		}), h.each(function() {
			var t = n(this);
			t.attr("style", t.data("style-cache") || null)
		}), t._maintainScroll && n(window).scrollTop(l / a * n("html").outerHeight(!0)), this
	};
	t._applyDataApi = function() {
		var t = {};
		n("[data-match-height], [data-mh]").each(function() {
			var i = n(this),
				r = i.attr("data-mh") || i.attr("data-match-height");
			t[r] = r in t ? t[r].add(i) : i
		});
		n.each(t, function() {
			this.matchHeight(!0)
		})
	};
	f = function(i) {
		t._beforeUpdate && t._beforeUpdate(i, t._groups);
		n.each(t._groups, function() {
			t._apply(this.elements, this.options)
		});
		t._afterUpdate && t._afterUpdate(i, t._groups)
	};
	t._update = function(i, u) {
		if (u && "resize" === u.type) {
			var e = n(window).width();
			if (e === o) return;
			o = e
		}
		i ? r === -1 && (r = setTimeout(function() {
			f(u);
			r = -1
		}, t._throttle)) : f(u)
	};
	n(t._applyDataApi);
	e = n.fn.on ? "on" : "bind";
	n(window)[e]("load", function(n) {
		t._update(!1, n)
	});
	n(window)[e]("resize orientationchange", function(n) {
		t._update(!0, n)
	})
}),
function(n) {
	n.fn.alterClass = function(t, i) {
		var r = this,
			u;
		return t.indexOf("*") === -1 ? (r.removeClass(t), i ? r.addClass(i) : r) : (u = new RegExp("\\s" + t.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g"), r.each(function(t, i) {
			for (var r = " " + i.className + " "; u.test(r);) r = r.replace(u, " ");
			i.className = n.trim(r)
		}), i ? r.addClass(i) : r)
	}
}(jQuery);
MobileStart = {
	init: function() {
		displaywidth = $(window).width();
		displayheight = window.screen.height;
		headerheight = $(".MobileHeader").height();
		$(".MenuCatName").each(function() {
			thissub = $(this);
			thissub.text().match(/^\s*$/) && thissub.hide()
		});
		$(".footerLinkWrap").find("#sce_newsletterEmail").length > 0 && $(".footerLinkWrap").find("#sce_newsletterEmail").closest(".footerCategoryWrap").remove();
		try {
			$(".BlockSearchTypeWrap").children().length === 0 && $(".BlockSearchTypeWrap").hide()
		} catch (n) {}
		$(".footertxt").find(".DIVfooterLinkNoCategory:first").addClass("First")
	},
	ProductPage: function() {
		$(".SliderProductImgCustomNav").html() === "" && $(".MobileProductThumbsWrapper").hide()
	},
	ProductPageOptions: function() {
		$(".RadComboBox").click(function() {
			ddRole = $(this).attr("data-role");
			$(".RadComboBoxDropDown[id*=" + ddRole + "]").parent().detach().appendTo($(this))
		})
	},
	ProductPageOptionsShowFloats: function() {
		$(".MobileHeader").slideDown("fast")
	},
	ProductPageOptionsHideFloats: function() {
		$(".MobileHeader").slideUp("fast")
	}
};
$(document).ready(function() {
	try {
		MobileStart.init()
	} catch (n) {
		console.log(n)
	}
});
window.addEventListener("orientationchange", function() {
	MobileStart.init();
	MobileStart.ProductPage()
}, !1);
firstImage = 0;
LargeThumbnailSize = "600";
timoutID = 0;
decodeEntities = function() {
		var n = document.createElement("div"),
			t = /&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/ig;
		return function(i) {
			return typeof i != "undefined" && i != null && i != "" ? (i = i.replace(t, function(t) {
				return n.innerHTML = t, n.textContent
			}), n.textContent = "", i) : ""
		}
	}(),
	function(n) {
		n.fn.visible = function(t, i, r) {
			var u = n(this).eq(0),
				l = u.get(0),
				f = n(window),
				e = f.scrollTop(),
				a = e + f.height(),
				o = f.scrollLeft(),
				v = o + f.width(),
				s = u.offset().top,
				y = s + u.height(),
				h = u.offset().left,
				p = h + u.width(),
				w = t === !0 ? y : s,
				b = t === !0 ? s : y,
				k = t === !0 ? p : h,
				d = t === !0 ? h : p,
				c = i === !0 ? l.offsetWidth * l.offsetHeight : !0,
				r = r ? r : "both";
			return r === "both" ? !!c && b <= a && w >= e && d <= v && k >= o : r === "vertical" ? !!c && b <= a && w >= e : r === "horizontal" ? !!c && d <= v && k >= o : void 0
		}
	}(jQuery);
! function(n) {
	n.getScriptOnce = function(t, i) {
		return -1 === n.getScriptOnce.loaded.indexOf(t) ? (n.getScriptOnce.loaded.push(t), void 0 === i ? n.getScript(t) : n.getScript(t, function(n, t, r) {
			i(n, t, r)
		})) : !1
	};
	n.getScriptOnce.loaded = []
}(jQuery);
! function(n) {
	"use strict";

	function o(n) {
		var i = n.length,
			r = t.type(n);
		return "function" !== r && !t.isWindow(n) && (!(1 !== n.nodeType || !i) || "array" === r || 0 === i || "number" == typeof i && i > 0 && i - 1 in n)
	}
	var t, i;
	if (!n.jQuery) {
		t = function(n, i) {
			return new t.fn.init(n, i)
		};
		t.isWindow = function(n) {
			return n && n === n.window
		};
		t.type = function(n) {
			return n ? "object" == typeof n || "function" == typeof n ? r[s.call(n)] || "object" : typeof n : n + ""
		};
		t.isArray = Array.isArray || function(n) {
			return "array" === t.type(n)
		};
		t.isPlainObject = function(n) {
			var i;
			if (!n || "object" !== t.type(n) || n.nodeType || t.isWindow(n)) return !1;
			try {
				if (n.constructor && !f.call(n, "constructor") && !f.call(n.constructor.prototype, "isPrototypeOf")) return !1
			} catch (r) {
				return !1
			}
			for (i in n);
			return i === undefined || f.call(n, i)
		};
		t.each = function(n, t, i) {
			var r = 0,
				u = n.length,
				f = o(n);
			if (i) {
				if (f)
					for (; r < u && !1 !== t.apply(n[r], i); r++);
				else
					for (r in n)
						if (n.hasOwnProperty(r) && !1 === t.apply(n[r], i)) break
			} else if (f)
				for (; r < u && !1 !== t.call(n[r], r, n[r]); r++);
			else
				for (r in n)
					if (n.hasOwnProperty(r) && !1 === t.call(n[r], r, n[r])) break;
			return n
		};
		t.data = function(n, r, u) {
			var o, f, e;
			if (u === undefined) {
				if (o = n[t.expando], f = o && i[o], r === undefined) return f;
				if (f && r in f) return f[r]
			} else if (r !== undefined) return e = n[t.expando] || (n[t.expando] = ++t.uuid), i[e] = i[e] || {}, i[e][r] = u, u
		};
		t.removeData = function(n, r) {
			var u = n[t.expando],
				f = u && i[u];
			f && (r ? t.each(r, function(n, t) {
				delete f[t]
			}) : delete i[u])
		};
		t.extend = function() {
			var r, o, i, f, e, s, n = arguments[0] || {},
				u = 1,
				c = arguments.length,
				h = !1;
			for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" != typeof n && "function" !== t.type(n) && (n = {}), u === c && (n = this, u--); u < c; u++)
				if (e = arguments[u])
					for (f in e) e.hasOwnProperty(f) && (r = n[f], i = e[f], n !== i && (h && i && (t.isPlainObject(i) || (o = t.isArray(i))) ? (o ? (o = !1, s = r && t.isArray(r) ? r : []) : s = r && t.isPlainObject(r) ? r : {}, n[f] = t.extend(h, s, i)) : i !== undefined && (n[f] = i)));
			return n
		};
		t.queue = function(n, i, r) {
			if (n) {
				i = (i || "fx") + "queue";
				var u = t.data(n, i);
				return r ? (!u || t.isArray(r) ? u = t.data(n, i, function(n, t) {
					var i = t || [];
					return n && (o(Object(n)) ? function(n, t) {
						for (var r = +t.length, i = 0, u = n.length; i < r;) n[u++] = t[i++];
						if (r !== r)
							for (; t[i] !== undefined;) n[u++] = t[i++];
						n.length = u
					}(i, "string" == typeof n ? [n] : n) : [].push.call(i, n)), i
				}(r)) : u.push(r), u) : u || []
			}
		};
		t.dequeue = function(n, i) {
			t.each(n.nodeType ? [n] : n, function(n, r) {
				i = i || "fx";
				var f = t.queue(r, i),
					u = f.shift();
				"inprogress" === u && (u = f.shift());
				u && ("fx" === i && f.unshift("inprogress"), u.call(r, function() {
					t.dequeue(r, i)
				}))
			})
		};
		t.fn = t.prototype = {
			init: function(n) {
				if (n.nodeType) return this[0] = n, this;
				throw new Error("Not a DOM node.");
			},
			offset: function() {
				var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
					top: 0,
					left: 0
				};
				return {
					top: t.top + (n.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: t.left + (n.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				}
			},
			position: function() {
				var u = this[0],
					n = function(n) {
						for (var t = n.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position.toLowerCase();) t = t.offsetParent;
						return t || document
					}(u),
					i = this.offset(),
					r = /^(?:body|html)$/i.test(n.nodeName) ? {
						top: 0,
						left: 0
					} : t(n).offset();
				return i.top -= parseFloat(u.style.marginTop) || 0, i.left -= parseFloat(u.style.marginLeft) || 0, n.style && (r.top += parseFloat(n.style.borderTopWidth) || 0, r.left += parseFloat(n.style.borderLeftWidth) || 0), {
					top: i.top - r.top,
					left: i.left - r.left
				}
			}
		};
		i = {};
		t.expando = "velocity" + (new Date).getTime();
		t.uuid = 0;
		for (var r = {}, f = r.hasOwnProperty, s = r.toString, e = "Boolean Number String Function Array Date RegExp Object Error".split(" "), u = 0; u < e.length; u++) r["[object " + e[u] + "]"] = e[u].toLowerCase();
		t.fn.init.prototype = t.fn;
		n.Velocity = {
			Utilities: t
		}
	}
}(window),
function(n) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : n()
}(function() {
	"use strict";
	return function(n, t, i, r) {
		function ft(n) {
			for (var t, i = -1, u = n ? n.length : 0, r = []; ++i < u;) t = n[i], t && r.push(t);
			return r
		}

		function p(n) {
			return o.isWrapped(n) ? n = st.call(n) : o.isNode(n) && (n = [n]), n
		}

		function s(n) {
			var t = e.data(n, "velocity");
			return null === t ? r : t
		}

		function w(n, t) {
			var i = s(n);
			i && i.delayTimer && !i.delayPaused && (i.delayRemaining = i.delay - t + i.delayBegin, i.delayPaused = !0, clearTimeout(i.delayTimer.setTimeout))
		}

		function b(n) {
			var t = s(n);
			t && t.delayTimer && t.delayPaused && (t.delayPaused = !1, t.delayTimer.setTimeout = setTimeout(t.delayTimer.next, t.delayRemaining))
		}

		function et(n) {
			return function(t) {
				return Math.round(t * n) * (1 / n)
			}
		}

		function k(n, i, r, u) {
			function l(n, t) {
				return 1 - 3 * t + 3 * n
			}

			function a(n, t) {
				return 3 * t - 6 * n
			}

			function v(n) {
				return 3 * n
			}

			function s(n, t, i) {
				return ((l(t, i) * n + a(t, i)) * n + v(t)) * n
			}

			function y(n, t, i) {
				return 3 * l(t, i) * n * n + 2 * a(t, i) * n + v(t)
			}

			function b(t, i) {
				for (var f, u = 0; u < tt; ++u) {
					if (f = y(i, n, r), 0 === f) return i;
					i -= (s(i, n, r) - t) / f
				}
				return i
			}

			function k() {
				for (var t = 0; t < e; ++t) o[t] = s(t * h, n, r)
			}

			function d(t, i, u) {
				var e, f, o = 0;
				do f = i + (u - i) / 2, e = s(f, n, r) - t, e > 0 ? u = f : i = f; while (Math.abs(e) > rt && ++o < ut);
				return f
			}

			function g(t) {
				for (var u = 0, i = 1, c = e - 1; i !== c && o[i] <= t; ++i) u += h;
				--i;
				var l = (t - o[i]) / (o[i + 1] - o[i]),
					f = u + l * h,
					s = y(f, n, r);
				return s >= it ? b(t, f) : 0 === s ? f : d(t, u, u + h)
			}

			function nt() {
				p = !0;
				n === i && r === u || k()
			}
			var tt = 4,
				it = .001,
				rt = 1e-7,
				ut = 10,
				e = 11,
				h = 1 / (e - 1),
				ft = "Float32Array" in t,
				f, w;
			if (4 !== arguments.length) return !1;
			for (f = 0; f < 4; ++f)
				if ("number" != typeof arguments[f] || isNaN(arguments[f]) || !isFinite(arguments[f])) return !1;
			n = Math.min(n, 1);
			r = Math.min(r, 1);
			n = Math.max(n, 0);
			r = Math.max(r, 0);
			var o = ft ? new Float32Array(e) : new Array(e),
				p = !1,
				c = function(t) {
					return p || nt(), n === i && r === u ? t : 0 === t ? 0 : 1 === t ? 1 : s(g(t), i, u)
				};
			return c.getControlPoints = function() {
				return [{
					x: n,
					y: i
				}, {
					x: r,
					y: u
				}]
			}, w = "generateBezier(" + [n, i, r, u] + ")", c.toString = function() {
				return w
			}, c
		}

		function d(n, t) {
			var i = n;
			return o.isString(n) ? f.Easings[n] || (i = !1) : i = o.isArray(n) && 1 === n.length ? et.apply(null, n) : o.isArray(n) && 2 === n.length ? ut.apply(null, n.concat([t])) : !(!o.isArray(n) || 4 !== n.length) && k.apply(null, n), !1 === i && (i = f.Easings[f.defaults.easing] ? f.defaults.easing : rt), i
		}

		function a(n) {
			var d, it, y, nt, c, rt, pt, p, b, t, ht, wt, ct, tt, lt, ut;
			if (n)
				for (d = f.timestamp && !0 !== n ? n : ot.now(), it = f.State.calls.length, it > 1e4 && (f.State.calls = ft(f.State.calls), it = f.State.calls.length), y = 0; y < it; y++)
					if (f.State.calls[y]) {
						var v = f.State.calls[y],
							at = v[0],
							i = v[2],
							w = v[3],
							bt = !w,
							vt = null,
							yt = v[5],
							et = v[6];
						if (w || (w = f.State.calls[y][3] = d - 16), yt) {
							if (!0 !== yt.resume) continue;
							w = v[3] = Math.round(d - et - 16);
							v[5] = null
						}
						et = v[6] = d - w;
						for (var k = Math.min(et / i.duration, 1), st = 0, kt = at.length; st < kt; st++)
							if (nt = at[st], c = nt.element, s(c)) {
								rt = !1;
								i.display !== r && null !== i.display && "none" !== i.display && ("flex" === i.display && (pt = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], e.each(pt, function(n, t) {
									u.setPropertyValue(c, "display", t)
								})), u.setPropertyValue(c, "display", i.display));
								i.visibility !== r && "hidden" !== i.visibility && u.setPropertyValue(c, "visibility", i.visibility);
								for (p in nt)
									if (nt.hasOwnProperty(p) && "element" !== p) {
										if (t = nt[p], ht = o.isString(t.easing) ? f.Easings[t.easing] : t.easing, o.isString(t.pattern) ? (wt = 1 === k ? function(n, i, r) {
												var u = t.endValue[i];
												return r ? Math.round(u) : u
											} : function(n, r, u) {
												var f = t.startValue[r],
													e = t.endValue[r] - f,
													o = f + e * ht(k, i, e);
												return u ? Math.round(o) : o
											}, b = t.pattern.replace(/{(\d+)(!)?}/g, wt)) : 1 === k ? b = t.endValue : (ct = t.endValue - t.startValue, b = t.startValue + ct * ht(k, i, ct)), !bt && b === t.currentValue) continue;
										(t.currentValue = b, "tween" === p) ? vt = b: (u.Hooks.registered[p] && (tt = u.Hooks.getRoot(p), lt = s(c).rootPropertyValueCache[tt], lt && (t.rootPropertyValue = lt)), ut = u.setPropertyValue(c, p, t.currentValue + (h < 9 && 0 === parseFloat(b) ? "" : t.unitType), t.rootPropertyValue, t.scrollData), u.Hooks.registered[p] && (s(c).rootPropertyValueCache[tt] = u.Normalizations.registered[tt] ? u.Normalizations.registered[tt]("extract", null, ut[1]) : ut[1]), "transform" === ut[0] && (rt = !0))
									} i.mobileHA && s(c).transformCache.translate3d === r && (s(c).transformCache.translate3d = "(0px, 0px, 0px)", rt = !0);
								rt && u.flushTransformCache(c)
							} i.display !== r && "none" !== i.display && (f.State.calls[y][2].display = !1);
						i.visibility !== r && "hidden" !== i.visibility && (f.State.calls[y][2].visibility = !1);
						i.progress && i.progress.call(v[1], v[1], k, Math.max(0, w + i.duration - d), w, vt);
						1 === k && g(y)
					} f.State.isTicking && l(a)
		}

		function g(n, t) {
			var o, h, l, a, k;
			if (!f.State.calls[n]) return !1;
			for (var y = f.State.calls[n][0], v = f.State.calls[n][1], i = f.State.calls[n][2], p = f.State.calls[n][4], w = !1, c = 0, b = y.length; c < b; c++) {
				if (o = y[c].element, t || i.loop || ("none" === i.display && u.setPropertyValue(o, "display", i.display), "hidden" === i.visibility && u.setPropertyValue(o, "visibility", i.visibility)), h = s(o), !0 !== i.loop && (e.queue(o)[1] === r || !/\.velocityQueueEntryFlag/i.test(e.queue(o)[1])) && h && (h.isAnimating = !1, h.rootPropertyValueCache = {}, l = !1, e.each(u.Lists.transforms3D, function(n, t) {
						var i = /^scale/.test(t) ? 1 : 0,
							u = h.transformCache[t];
						h.transformCache[t] !== r && new RegExp("^\\(" + i + "[^.]").test(u) && (l = !0, delete h.transformCache[t])
					}), i.mobileHA && (l = !0, delete h.transformCache.translate3d), l && u.flushTransformCache(o), u.Values.removeClass(o, "velocity-animating")), !t && i.complete && !i.loop && c === b - 1) try {
					i.complete.call(v, v)
				} catch (d) {
					setTimeout(function() {
						throw d;
					}, 1)
				}
				p && !0 !== i.loop && p(v);
				h && !0 === i.loop && !t && (e.each(h.tweensContainer, function(n, t) {
					if (/^rotate/.test(n) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
						var i = t.startValue;
						t.startValue = t.endValue;
						t.endValue = i
					}
					/^backgroundPosition/.test(n) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
				}), f(o, "reverse", {
					loop: !0,
					delay: i.delay
				}));
				!1 !== i.queue && e.dequeue(o, i.queue)
			}
			for (f.State.calls[n] = !1, a = 0, k = f.State.calls.length; a < k; a++)
				if (!1 !== f.State.calls[a]) {
					w = !0;
					break
				}! 1 === w && (f.State.isTicking = !1, delete f.State.calls, f.State.calls = [])
		}
		var e, h = function() {
				var n, t;
				if (i.documentMode) return i.documentMode;
				for (n = 7; n > 4; n--)
					if (t = i.createElement("div"), t.innerHTML = "<!--[if IE " + n + "]><span><\/span><![endif]-->", t.getElementsByTagName("span").length) return t = null, n;
				return r
			}(),
			nt = function() {
				var n = 0;
				return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
					var i, r = (new Date).getTime();
					return i = Math.max(0, 16 - (r - n)), n = r + i, setTimeout(function() {
						t(r + i)
					}, i)
				}
			}(),
			ot = function() {
				var n = t.performance || {},
					i;
				return "function" != typeof n.now && (i = n.timing && n.timing.navigationStart ? n.timing.navigationStart : (new Date).getTime(), n.now = function() {
					return (new Date).getTime() - i
				}), n
			}(),
			st = function() {
				var n = Array.prototype.slice;
				try {
					return n.call(i.documentElement), n
				} catch (t) {
					return function(t, i) {
						var u = this.length;
						if ("number" != typeof t && (t = 0), "number" != typeof i && (i = u), this.slice) return n.call(this, t, i);
						var r, f = [],
							o = t >= 0 ? t : Math.max(0, u + t),
							s = i < 0 ? u + i : Math.min(i, u),
							e = s - o;
						if (e > 0)
							if (f = new Array(e), this.charAt)
								for (r = 0; r < e; r++) f[r] = this.charAt(o + r);
							else
								for (r = 0; r < e; r++) f[r] = this[o + r];
						return f
					}
				}
			}(),
			tt = function() {
				return Array.prototype.includes ? function(n, t) {
					return n.includes(t)
				} : Array.prototype.indexOf ? function(n, t) {
					return n.indexOf(t) >= 0
				} : function(n, t) {
					for (var i = 0; i < n.length; i++)
						if (n[i] === t) return !0;
					return !1
				}
			},
			o = {
				isNumber: function(n) {
					return "number" == typeof n
				},
				isString: function(n) {
					return "string" == typeof n
				},
				isArray: Array.isArray || function(n) {
					return "[object Array]" === Object.prototype.toString.call(n)
				},
				isFunction: function(n) {
					return "[object Function]" === Object.prototype.toString.call(n)
				},
				isNode: function(n) {
					return n && n.nodeType
				},
				isWrapped: function(n) {
					return n && n !== t && o.isNumber(n.length) && !o.isString(n) && !o.isFunction(n) && !o.isNode(n) && (0 === n.length || o.isNode(n[0]))
				},
				isSVG: function(n) {
					return t.SVGElement && n instanceof t.SVGElement
				},
				isEmptyObject: function(n) {
					for (var t in n)
						if (n.hasOwnProperty(t)) return !1;
					return !0
				}
			},
			it = !1,
			ut, u, c, l, y;
		if (n.fn && n.fn.jquery ? (e = n, it = !0) : e = t.Velocity.Utilities, h <= 8 && !it) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
		if (h <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
		var v = 400,
			rt = "swing",
			f = {
				State: {
					isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t.navigator.userAgent),
					isAndroid: /Android/i.test(t.navigator.userAgent),
					isGingerbread: /Android 2\.3\.[3-7]/i.test(t.navigator.userAgent),
					isChrome: t.chrome,
					isFirefox: /Firefox/i.test(t.navigator.userAgent),
					prefixElement: i.createElement("div"),
					prefixMatches: {},
					scrollAnchor: null,
					scrollPropertyLeft: null,
					scrollPropertyTop: null,
					isTicking: !1,
					calls: [],
					delayedElements: {
						count: 0
					}
				},
				CSS: {},
				Utilities: e,
				Redirects: {},
				Easings: {},
				Promise: t.Promise,
				defaults: {
					queue: "",
					duration: v,
					easing: rt,
					begin: r,
					complete: r,
					progress: r,
					display: r,
					visibility: r,
					loop: !1,
					delay: !1,
					mobileHA: !0,
					_cacheValues: !0,
					promiseRejectEmpty: !0
				},
				init: function(n) {
					e.data(n, "velocity", {
						isSVG: o.isSVG(n),
						isAnimating: !1,
						computedStyle: null,
						tweensContainer: null,
						rootPropertyValueCache: {},
						transformCache: {}
					})
				},
				hook: null,
				mock: !1,
				version: {
					major: 1,
					minor: 5,
					patch: 1
				},
				debug: !1,
				timestamp: !0,
				pauseAll: function(n) {
					var t = (new Date).getTime();
					e.each(f.State.calls, function(t, i) {
						if (i) {
							if (n !== r && (i[2].queue !== n || !1 === i[2].queue)) return !0;
							i[5] = {
								resume: !1
							}
						}
					});
					e.each(f.State.delayedElements, function(n, i) {
						i && w(i, t)
					})
				},
				resumeAll: function(n) {
					var t = (new Date).getTime();
					e.each(f.State.calls, function(t, i) {
						if (i) {
							if (n !== r && (i[2].queue !== n || !1 === i[2].queue)) return !0;
							i[5] && (i[5].resume = !0)
						}
					});
					e.each(f.State.delayedElements, function(n, i) {
						i && b(i, t)
					})
				}
			};
		return t.pageYOffset !== r ? (f.State.scrollAnchor = t, f.State.scrollPropertyLeft = "pageXOffset", f.State.scrollPropertyTop = "pageYOffset") : (f.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, f.State.scrollPropertyLeft = "scrollLeft", f.State.scrollPropertyTop = "scrollTop"), ut = function() {
			function t(n) {
				return -n.tension * n.x - n.friction * n.v
			}

			function n(n, i, r) {
				var u = {
					x: n.x + r.dx * i,
					v: n.v + r.dv * i,
					tension: n.tension,
					friction: n.friction
				};
				return {
					dx: u.v,
					dv: t(u)
				}
			}

			function i(i, r) {
				var u = {
						dx: i.v,
						dv: t(i)
					},
					f = n(i, .5 * r, u),
					e = n(i, .5 * r, f),
					o = n(i, r, e),
					s = 1 / 6 * (u.dx + 2 * (f.dx + e.dx) + o.dx),
					h = 1 / 6 * (u.dv + 2 * (f.dv + e.dv) + o.dv);
				return i.x = i.x + s * r, i.v = i.v + h * r, i
			}
			return function r(n, t, u) {
				var o, s, f, h = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
					c = [0],
					e = 0;
				for (n = parseFloat(n) || 500, t = parseFloat(t) || 20, u = u || null, h.tension = n, h.friction = t, o = null !== u, o ? (e = r(n, t), s = e / u * .016) : s = .016;;)
					if (f = i(f || h, s), c.push(1 + f.x), e += 16, !(Math.abs(f.x) > .0001 && Math.abs(f.v) > .0001)) break;
				return o ? function(n) {
					return c[n * (c.length - 1) | 0]
				} : e
			}
		}(), f.Easings = {
			linear: function(n) {
				return n
			},
			swing: function(n) {
				return .5 - Math.cos(n * Math.PI) / 2
			},
			spring: function(n) {
				return 1 - Math.cos(4.5 * n * Math.PI) * Math.exp(6 * -n)
			}
		}, e.each([
			["ease", [.25, .1, .25, 1]],
			["ease-in", [.42, 0, 1, 1]],
			["ease-out", [0, 0, .58, 1]],
			["ease-in-out", [.42, 0, .58, 1]],
			["easeInSine", [.47, 0, .745, .715]],
			["easeOutSine", [.39, .575, .565, 1]],
			["easeInOutSine", [.445, .05, .55, .95]],
			["easeInQuad", [.55, .085, .68, .53]],
			["easeOutQuad", [.25, .46, .45, .94]],
			["easeInOutQuad", [.455, .03, .515, .955]],
			["easeInCubic", [.55, .055, .675, .19]],
			["easeOutCubic", [.215, .61, .355, 1]],
			["easeInOutCubic", [.645, .045, .355, 1]],
			["easeInQuart", [.895, .03, .685, .22]],
			["easeOutQuart", [.165, .84, .44, 1]],
			["easeInOutQuart", [.77, 0, .175, 1]],
			["easeInQuint", [.755, .05, .855, .06]],
			["easeOutQuint", [.23, 1, .32, 1]],
			["easeInOutQuint", [.86, 0, .07, 1]],
			["easeInExpo", [.95, .05, .795, .035]],
			["easeOutExpo", [.19, 1, .22, 1]],
			["easeInOutExpo", [1, 0, 0, 1]],
			["easeInCirc", [.6, .04, .98, .335]],
			["easeOutCirc", [.075, .82, .165, 1]],
			["easeInOutCirc", [.785, .135, .15, .86]]
		], function(n, t) {
			f.Easings[t[0]] = k.apply(null, t[1])
		}), u = f.CSS = {
			RegEx: {
				isHex: /^#([A-f\d]{3}){1,2}$/i,
				valueUnwrap: /^[A-z]+\((.*)\)$/i,
				wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
				valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
			},
			Lists: {
				colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
				transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
				transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
				units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
				colorNames: {
					aliceblue: "240,248,255",
					antiquewhite: "250,235,215",
					aquamarine: "127,255,212",
					aqua: "0,255,255",
					azure: "240,255,255",
					beige: "245,245,220",
					bisque: "255,228,196",
					black: "0,0,0",
					blanchedalmond: "255,235,205",
					blueviolet: "138,43,226",
					blue: "0,0,255",
					brown: "165,42,42",
					burlywood: "222,184,135",
					cadetblue: "95,158,160",
					chartreuse: "127,255,0",
					chocolate: "210,105,30",
					coral: "255,127,80",
					cornflowerblue: "100,149,237",
					cornsilk: "255,248,220",
					crimson: "220,20,60",
					cyan: "0,255,255",
					darkblue: "0,0,139",
					darkcyan: "0,139,139",
					darkgoldenrod: "184,134,11",
					darkgray: "169,169,169",
					darkgrey: "169,169,169",
					darkgreen: "0,100,0",
					darkkhaki: "189,183,107",
					darkmagenta: "139,0,139",
					darkolivegreen: "85,107,47",
					darkorange: "255,140,0",
					darkorchid: "153,50,204",
					darkred: "139,0,0",
					darksalmon: "233,150,122",
					darkseagreen: "143,188,143",
					darkslateblue: "72,61,139",
					darkslategray: "47,79,79",
					darkturquoise: "0,206,209",
					darkviolet: "148,0,211",
					deeppink: "255,20,147",
					deepskyblue: "0,191,255",
					dimgray: "105,105,105",
					dimgrey: "105,105,105",
					dodgerblue: "30,144,255",
					firebrick: "178,34,34",
					floralwhite: "255,250,240",
					forestgreen: "34,139,34",
					fuchsia: "255,0,255",
					gainsboro: "220,220,220",
					ghostwhite: "248,248,255",
					gold: "255,215,0",
					goldenrod: "218,165,32",
					gray: "128,128,128",
					grey: "128,128,128",
					greenyellow: "173,255,47",
					green: "0,128,0",
					honeydew: "240,255,240",
					hotpink: "255,105,180",
					indianred: "205,92,92",
					indigo: "75,0,130",
					ivory: "255,255,240",
					khaki: "240,230,140",
					lavenderblush: "255,240,245",
					lavender: "230,230,250",
					lawngreen: "124,252,0",
					lemonchiffon: "255,250,205",
					lightblue: "173,216,230",
					lightcoral: "240,128,128",
					lightcyan: "224,255,255",
					lightgoldenrodyellow: "250,250,210",
					lightgray: "211,211,211",
					lightgrey: "211,211,211",
					lightgreen: "144,238,144",
					lightpink: "255,182,193",
					lightsalmon: "255,160,122",
					lightseagreen: "32,178,170",
					lightskyblue: "135,206,250",
					lightslategray: "119,136,153",
					lightsteelblue: "176,196,222",
					lightyellow: "255,255,224",
					limegreen: "50,205,50",
					lime: "0,255,0",
					linen: "250,240,230",
					magenta: "255,0,255",
					maroon: "128,0,0",
					mediumaquamarine: "102,205,170",
					mediumblue: "0,0,205",
					mediumorchid: "186,85,211",
					mediumpurple: "147,112,219",
					mediumseagreen: "60,179,113",
					mediumslateblue: "123,104,238",
					mediumspringgreen: "0,250,154",
					mediumturquoise: "72,209,204",
					mediumvioletred: "199,21,133",
					midnightblue: "25,25,112",
					mintcream: "245,255,250",
					mistyrose: "255,228,225",
					moccasin: "255,228,181",
					navajowhite: "255,222,173",
					navy: "0,0,128",
					oldlace: "253,245,230",
					olivedrab: "107,142,35",
					olive: "128,128,0",
					orangered: "255,69,0",
					orange: "255,165,0",
					orchid: "218,112,214",
					palegoldenrod: "238,232,170",
					palegreen: "152,251,152",
					paleturquoise: "175,238,238",
					palevioletred: "219,112,147",
					papayawhip: "255,239,213",
					peachpuff: "255,218,185",
					peru: "205,133,63",
					pink: "255,192,203",
					plum: "221,160,221",
					powderblue: "176,224,230",
					purple: "128,0,128",
					red: "255,0,0",
					rosybrown: "188,143,143",
					royalblue: "65,105,225",
					saddlebrown: "139,69,19",
					salmon: "250,128,114",
					sandybrown: "244,164,96",
					seagreen: "46,139,87",
					seashell: "255,245,238",
					sienna: "160,82,45",
					silver: "192,192,192",
					skyblue: "135,206,235",
					slateblue: "106,90,205",
					slategray: "112,128,144",
					snow: "255,250,250",
					springgreen: "0,255,127",
					steelblue: "70,130,180",
					tan: "210,180,140",
					teal: "0,128,128",
					thistle: "216,191,216",
					tomato: "255,99,71",
					turquoise: "64,224,208",
					violet: "238,130,238",
					wheat: "245,222,179",
					whitesmoke: "245,245,245",
					white: "255,255,255",
					yellowgreen: "154,205,50",
					yellow: "255,255,0"
				}
			},
			Hooks: {
				templates: {
					textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
					boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
					clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
					backgroundPosition: ["X Y", "0% 0%"],
					transformOrigin: ["X Y Z", "50% 50% 0px"],
					perspectiveOrigin: ["X Y", "50% 50%"]
				},
				registered: {},
				register: function() {
					for (var o, n, r, t, f, e, s, c, i = 0; i < u.Lists.colors.length; i++) o = "color" === u.Lists.colors[i] ? "0 0 0 1" : "255 255 255 1", u.Hooks.templates[u.Lists.colors[i]] = ["Red Green Blue Alpha", o];
					if (h)
						for (n in u.Hooks.templates) u.Hooks.templates.hasOwnProperty(n) && (r = u.Hooks.templates[n], t = r[0].split(" "), f = r[1].match(u.RegEx.valueSplit), "Color" === t[0] && (t.push(t.shift()), f.push(f.shift()), u.Hooks.templates[n] = [t.join(" "), f.join(" ")]));
					for (n in u.Hooks.templates)
						if (u.Hooks.templates.hasOwnProperty(n)) {
							r = u.Hooks.templates[n];
							t = r[0].split(" ");
							for (e in t) t.hasOwnProperty(e) && (s = n + t[e], c = e, u.Hooks.registered[s] = [n, c])
						}
				},
				getRoot: function(n) {
					var t = u.Hooks.registered[n];
					return t ? t[0] : n
				},
				getUnit: function(n, t) {
					var i = (n.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
					return i && tt(u.Lists.units, i) ? i : ""
				},
				fixColors: function(n) {
					return n.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(n, t, i) {
						return u.Lists.colorNames.hasOwnProperty(i) ? (t || "rgba(") + u.Lists.colorNames[i] + (t ? "" : ",1)") : t + i
					})
				},
				cleanRootPropertyValue: function(n, t) {
					return u.RegEx.valueUnwrap.test(t) && (t = t.match(u.RegEx.valueUnwrap)[1]), u.Values.isCSSNullValue(t) && (t = u.Hooks.templates[n][1]), t
				},
				extractValue: function(n, t) {
					var i = u.Hooks.registered[n],
						r, f;
					return i ? (r = i[0], f = i[1], t = u.Hooks.cleanRootPropertyValue(r, t), t.toString().match(u.RegEx.valueSplit)[f]) : t
				},
				injectValue: function(n, t, i) {
					var r = u.Hooks.registered[n],
						f, e, o;
					return r ? (e = r[0], o = r[1], i = u.Hooks.cleanRootPropertyValue(e, i), f = i.toString().match(u.RegEx.valueSplit), f[o] = t, f.join(" ")) : i
				}
			},
			Normalizations: {
				registered: {
					clip: function(n, t, i) {
						switch (n) {
							case "name":
								return "clip";
							case "extract":
								var r;
								return u.RegEx.wrappedValueAlreadyExtracted.test(i) ? r = i : (r = i.toString().match(u.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : i), r;
							case "inject":
								return "rect(" + i + ")"
						}
					},
					blur: function(n, t, i) {
						var r, u;
						switch (n) {
							case "name":
								return f.State.isFirefox ? "filter" : "-webkit-filter";
							case "extract":
								return r = parseFloat(i), r || 0 === r || (u = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i), r = u ? u[1] : 0), r;
							case "inject":
								return parseFloat(i) ? "blur(" + i + ")" : "none"
						}
					},
					opacity: function(n, t, i) {
						if (h <= 8) switch (n) {
							case "name":
								return "filter";
							case "extract":
								var r = i.toString().match(/alpha\(opacity=(.*)\)/i);
								return r ? r[1] / 100 : 1;
							case "inject":
								return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
						} else switch (n) {
							case "name":
								return "opacity";
							case "extract":
							case "inject":
								return i
						}
					}
				},
				register: function() {
					function e(n, t, i) {
						if ("border-box" === u.getPropertyValue(t, "boxSizing").toString().toLowerCase() === (i || !1)) {
							for (var e, o = 0, f = "width" === n ? ["Left", "Right"] : ["Top", "Bottom"], s = ["padding" + f[0], "padding" + f[1], "border" + f[0] + "Width", "border" + f[1] + "Width"], r = 0; r < s.length; r++) e = parseFloat(u.getPropertyValue(t, s[r])), isNaN(e) || (o += e);
							return i ? -o : o
						}
						return 0
					}

					function n(n, t) {
						return function(i, r, u) {
							switch (i) {
								case "name":
									return n;
								case "extract":
									return parseFloat(u) + e(n, r, t);
								case "inject":
									return parseFloat(u) - e(n, r, t) + "px"
							}
						}
					}
					var t, i;
					for ((!h || h > 9) && !f.State.isGingerbread && (u.Lists.transformsBase = u.Lists.transformsBase.concat(u.Lists.transforms3D)), t = 0; t < u.Lists.transformsBase.length; t++) ! function() {
						var n = u.Lists.transformsBase[t];
						u.Normalizations.registered[n] = function(t, i, u) {
							switch (t) {
								case "name":
									return "transform";
								case "extract":
									return s(i) === r || s(i).transformCache[n] === r ? /^scale/i.test(n) ? 1 : 0 : s(i).transformCache[n].replace(/[()]/g, "");
								case "inject":
									var e = !1;
									switch (n.substr(0, n.length - 1)) {
										case "translate":
											e = !/(%|px|em|rem|vw|vh|\d)$/i.test(u);
											break;
										case "scal":
										case "scale":
											f.State.isAndroid && s(i).transformCache[n] === r && u < 1 && (u = 1);
											e = !/(\d)$/i.test(u);
											break;
										case "skew":
										case "rotate":
											e = !/(deg|\d)$/i.test(u)
									}
									return e || (s(i).transformCache[n] = "(" + u + ")"), s(i).transformCache[n]
							}
						}
					}();
					for (i = 0; i < u.Lists.colors.length; i++) ! function() {
						var n = u.Lists.colors[i];
						u.Normalizations.registered[n] = function(t, i, f) {
							var e, s, o;
							switch (t) {
								case "name":
									return n;
								case "extract":
									return u.RegEx.wrappedValueAlreadyExtracted.test(f) ? e = f : (o = {
										black: "rgb(0, 0, 0)",
										blue: "rgb(0, 0, 255)",
										gray: "rgb(128, 128, 128)",
										green: "rgb(0, 128, 0)",
										red: "rgb(255, 0, 0)",
										white: "rgb(255, 255, 255)"
									}, /^[A-z]+$/i.test(f) ? s = o[f] !== r ? o[f] : o.black : u.RegEx.isHex.test(f) ? s = "rgb(" + u.Values.hexToRgb(f).join(" ") + ")" : /^rgba?\(/i.test(f) || (s = o.black), e = (s || f).toString().match(u.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")), (!h || h > 8) && 3 === e.split(" ").length && (e += " 1"), e;
								case "inject":
									return /^rgb/.test(f) ? f : (h <= 8 ? 4 === f.split(" ").length && (f = f.split(/\s+/).slice(0, 3).join(" ")) : 3 === f.split(" ").length && (f += " 1"), (h <= 8 ? "rgb" : "rgba") + "(" + f.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
							}
						}
					}();
					u.Normalizations.registered.innerWidth = n("width", !0);
					u.Normalizations.registered.innerHeight = n("height", !0);
					u.Normalizations.registered.outerWidth = n("width");
					u.Normalizations.registered.outerHeight = n("height")
				}
			},
			Names: {
				camelCase: function(n) {
					return n.replace(/-(\w)/g, function(n, t) {
						return t.toUpperCase()
					})
				},
				SVGAttribute: function(n) {
					var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
					return (h || f.State.isAndroid && !f.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(n)
				},
				prefixCheck: function(n) {
					var i;
					if (f.State.prefixMatches[n]) return [f.State.prefixMatches[n], !0];
					for (var r = ["", "Webkit", "Moz", "ms", "O"], t = 0, u = r.length; t < u; t++)
						if (i = 0 === t ? n : r[t] + n.replace(/^\w/, function(n) {
								return n.toUpperCase()
							}), o.isString(f.State.prefixElement.style[i])) return f.State.prefixMatches[n] = i, [i, !0];
					return [n, !1]
				}
			},
			Values: {
				hexToRgb: function(n) {
					var t;
					return n = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(n, t, i, r) {
						return t + t + i + i + r + r
					}), t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
				},
				isCSSNullValue: function(n) {
					return !n || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(n)
				},
				getUnitType: function(n) {
					return /^(rotate|skew)/i.test(n) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(n) ? "" : "px"
				},
				getDisplayType: function(n) {
					var t = n && n.tagName.toString().toLowerCase();
					return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
				},
				addClass: function(n, t) {
					if (n)
						if (n.classList) n.classList.add(t);
						else if (o.isString(n.className)) n.className += (n.className.length ? " " : "") + t;
					else {
						var i = n.getAttribute(h <= 7 ? "className" : "class") || "";
						n.setAttribute("class", i + (i ? " " : "") + t)
					}
				},
				removeClass: function(n, t) {
					if (n)
						if (n.classList) n.classList.remove(t);
						else if (o.isString(n.className)) n.className = n.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
					else {
						var i = n.getAttribute(h <= 7 ? "className" : "class") || "";
						n.setAttribute("class", i.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
					}
				}
			},
			getPropertyValue: function(n, i, o, c) {
				function y(n, i) {
					var f = 0,
						l, o, p, w, a, v;
					if (h <= 8) f = e.css(n, i);
					else {
						if (l = !1, /^(width|height)$/.test(i) && 0 === u.getPropertyValue(n, "display") && (l = !0, u.setPropertyValue(n, "display", u.Values.getDisplayType(n))), o = function() {
								l && u.setPropertyValue(n, "display", "none")
							}, !c) {
							if ("height" === i && "border-box" !== u.getPropertyValue(n, "boxSizing").toString().toLowerCase()) return p = n.offsetHeight - (parseFloat(u.getPropertyValue(n, "borderTopWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "borderBottomWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingTop")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingBottom")) || 0), o(), p;
							if ("width" === i && "border-box" !== u.getPropertyValue(n, "boxSizing").toString().toLowerCase()) return w = n.offsetWidth - (parseFloat(u.getPropertyValue(n, "borderLeftWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "borderRightWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingLeft")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingRight")) || 0), o(), w
						}
						a = s(n) === r ? t.getComputedStyle(n, null) : s(n).computedStyle ? s(n).computedStyle : s(n).computedStyle = t.getComputedStyle(n, null);
						"borderColor" === i && (i = "borderTopColor");
						f = 9 === h && "filter" === i ? a.getPropertyValue(i) : a[i];
						"" !== f && null !== f || (f = n.style[i]);
						o()
					}
					return "auto" === f && /^(top|right|bottom|left)$/i.test(i) && (v = y(n, "position"), ("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (f = e(n).position()[i] + "px")), f
				}
				var l, p, a, w, v, b;
				if (u.Hooks.registered[i] ? (p = i, a = u.Hooks.getRoot(p), o === r && (o = u.getPropertyValue(n, u.Names.prefixCheck(a)[0])), u.Normalizations.registered[a] && (o = u.Normalizations.registered[a]("extract", n, o)), l = u.Hooks.extractValue(p, o)) : u.Normalizations.registered[i] && (w = u.Normalizations.registered[i]("name", n), "transform" !== w && (v = y(n, u.Names.prefixCheck(w)[0]), u.Values.isCSSNullValue(v) && u.Hooks.templates[i] && (v = u.Hooks.templates[i][1])), l = u.Normalizations.registered[i]("extract", n, v)), !/^[\d-]/.test(l))
					if (b = s(n), b && b.isSVG && u.Names.SVGAttribute(i))
						if (/^(height|width)$/i.test(i)) try {
							l = n.getBBox()[i]
						} catch (k) {
							l = 0
						} else l = n.getAttribute(i);
						else l = y(n, u.Names.prefixCheck(i)[0]);
				return u.Values.isCSSNullValue(l) && (l = 0), f.debug >= 2 && console.log("Get " + i + ": " + l), l
			},
			setPropertyValue: function(n, i, r, e, o) {
				var c = i,
					v, l, a;
				if ("scroll" === i) o.container ? o.container["scroll" + o.direction] = r : "Left" === o.direction ? t.scrollTo(r, o.alternateValue) : t.scrollTo(o.alternateValue, r);
				else if (u.Normalizations.registered[i] && "transform" === u.Normalizations.registered[i]("name", n)) u.Normalizations.registered[i]("inject", n, r), c = "transform", r = s(n).transformCache[i];
				else {
					if (u.Hooks.registered[i] && (v = i, l = u.Hooks.getRoot(i), e = e || u.getPropertyValue(n, l), r = u.Hooks.injectValue(v, r, e), i = l), u.Normalizations.registered[i] && (r = u.Normalizations.registered[i]("inject", n, r), i = u.Normalizations.registered[i]("name", n)), c = u.Names.prefixCheck(i)[0], h <= 8) try {
						n.style[c] = r
					} catch (y) {
						f.debug && console.log("Browser does not support [" + r + "] for [" + c + "]")
					} else a = s(n), a && a.isSVG && u.Names.SVGAttribute(i) ? n.setAttribute(i, r) : n.style[c] = r;
					f.debug >= 2 && console.log("Set " + i + " (" + c + "): " + r)
				}
				return [c, r]
			},
			flushTransformCache: function(n) {
				var i = "",
					l = s(n),
					t, r, o, c;
				(h || f.State.isAndroid && !f.State.isChrome) && l && l.isSVG ? (t = function(t) {
					return parseFloat(u.getPropertyValue(n, t))
				}, r = {
					translate: [t("translateX"), t("translateY")],
					skewX: [t("skewX")],
					skewY: [t("skewY")],
					scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
					rotate: [t("rotateZ"), 0, 0]
				}, e.each(s(n).transformCache, function(n) {
					/^translate/i.test(n) ? n = "translate" : /^scale/i.test(n) ? n = "scale" : /^rotate/i.test(n) && (n = "rotate");
					r[n] && (i += n + "(" + r[n].join(" ") + ") ", delete r[n])
				})) : (e.each(s(n).transformCache, function(t) {
					if (o = s(n).transformCache[t], "transformPerspective" === t) return c = o, !0;
					9 === h && "rotateZ" === t && (t = "rotate");
					i += t + o + " "
				}), c && (i = "perspective" + c + " " + i));
				u.setPropertyValue(n, "transform", i)
			}
		}, u.Hooks.register(), u.Normalizations.register(), f.hook = function(n, t, i) {
			var o;
			return n = p(n), e.each(n, function(n, e) {
				if (s(e) === r && f.init(e), i === r) o === r && (o = u.getPropertyValue(e, t));
				else {
					var h = u.setPropertyValue(e, t, i);
					"transform" === h[0] && f.CSS.flushTransformCache(e);
					o = h
				}
			}), o
		}, c = function() {
			function ut() {
				return st ? nt.promise || null : bt
			}

			function ni(h, c) {
				function g() {
					var v, g, et, bt, vt, ut, yt, it, kt, wt, ct, lt, ot, at;
					if (p.begin && 0 === ht) try {
						p.begin.call(l, l)
					} catch (ri) {
						setTimeout(function() {
							throw ri;
						}, 1)
					}
					if ("scroll" === ft) ut = /^x$/i.test(p.axis) ? "Left" : "Top", yt = parseFloat(p.offset) || 0, p.container ? o.isWrapped(p.container) || o.isNode(p.container) ? (p.container = p.container[0] || p.container, et = p.container["scroll" + ut], vt = et + e(h).position()[ut.toLowerCase()] + yt) : p.container = null : (et = f.State.scrollAnchor[f.State["scrollProperty" + ut]], bt = f.State.scrollAnchor[f.State["scrollProperty" + ("Left" === ut ? "Top" : "Left")]], vt = e(h).offset()[ut.toLowerCase()] + yt), w = {
						scroll: {
							rootPropertyValue: !1,
							startValue: et,
							currentValue: et,
							endValue: vt,
							unitType: "",
							easing: p.easing,
							scrollData: {
								container: p.container,
								direction: ut,
								alternateValue: bt
							}
						},
						element: h
					}, f.debug && console.log("tweensContainer (scroll): ", w.scroll, h);
					else if ("reverse" === ft) {
						if (!(v = s(h))) return;
						if (!v.tweensContainer) return void e.dequeue(h, p.queue);
						"none" === v.opts.display && (v.opts.display = "auto");
						"hidden" === v.opts.visibility && (v.opts.visibility = "visible");
						v.opts.loop = !1;
						v.opts.begin = null;
						v.opts.complete = null;
						n.easing || delete p.easing;
						n.duration || delete p.duration;
						p = e.extend({}, v.opts, p);
						g = e.extend(!0, {}, v ? v.tweensContainer : null);
						for (it in g) g.hasOwnProperty(it) && "element" !== it && (kt = g[it].startValue, g[it].startValue = g[it].currentValue = g[it].endValue, g[it].endValue = kt, o.isEmptyObject(n) || (g[it].easing = p.easing), f.debug && console.log("reverse tweensContainer (" + it + "): " + JSON.stringify(g[it]), h));
						w = g
					} else if ("start" === ft) {
						v = s(h);
						v && v.tweensContainer && !0 === v.isAnimating && (g = v.tweensContainer);
						wt = function(n, s) {
							var nt, et = u.Hooks.getRoot(n),
								lt = !1,
								l = s[0],
								ii = s[1],
								c = s[2],
								ht, tt, ot, pt, dt, a, st, ct, bt, yt, kt, gt;
							if (!(v && v.isSVG || "tween" === et || !1 !== u.Names.prefixCheck(et)[1] || u.Normalizations.registered[et] !== r)) return void(f.debug && console.log("Skipping [" + et + "] due to a lack of browser support."));
							if ((p.display !== r && null !== p.display && "none" !== p.display || p.visibility !== r && "hidden" !== p.visibility) && /opacity|filter/.test(n) && !c && 0 !== l && (c = 0), p._cacheValues && g && g[n] ? (c === r && (c = g[n].endValue + g[n].unitType), lt = v.rootPropertyValueCache[et]) : u.Hooks.registered[n] ? c === r ? (lt = u.getPropertyValue(h, et), c = u.getPropertyValue(h, n, lt)) : lt = u.Hooks.templates[et][1] : c === r && (c = u.getPropertyValue(h, n)), pt = !1, dt = function(n, t) {
									var i, r;
									return r = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(n) {
										return i = n, ""
									}), i || (i = u.Values.getUnitType(n)), [r, i]
								}, c !== l && o.isString(c) && o.isString(l)) {
								nt = "";
								var ut = 0,
									ft = 0,
									it = [],
									at = [],
									d = 0,
									k = 0,
									rt = 0;
								for (c = u.Hooks.fixColors(c), l = u.Hooks.fixColors(l); ut < c.length && ft < l.length;)
									if (a = c[ut], st = l[ft], /[\d\.-]/.test(a) && /[\d\.-]/.test(st)) {
										for (var vt = a, wt = st, ni = ".", ti = "."; ++ut < c.length;) {
											if ((a = c[ut]) === ni) ni = "..";
											else if (!/\d/.test(a)) break;
											vt += a
										}
										for (; ++ft < l.length;) {
											if ((st = l[ft]) === ti) ti = "..";
											else if (!/\d/.test(st)) break;
											wt += st
										}
										ct = u.Hooks.getUnit(c, ut);
										bt = u.Hooks.getUnit(l, ft);
										(ut += ct.length, ft += bt.length, ct === bt) ? vt === wt ? nt += vt + ct : (nt += "{" + it.length + (k ? "!" : "") + "}" + ct, it.push(parseFloat(vt)), at.push(parseFloat(wt))): (yt = parseFloat(vt), kt = parseFloat(wt), nt += (d < 5 ? "calc" : "") + "(" + (yt ? "{" + it.length + (k ? "!" : "") + "}" : "0") + ct + " + " + (kt ? "{" + (it.length + (yt ? 1 : 0)) + (k ? "!" : "") + "}" : "0") + bt + ")", yt && (it.push(yt), at.push(0)), kt && (it.push(0), at.push(kt)))
									} else {
										if (a !== st) {
											d = 0;
											break
										}
										nt += a;
										ut++;
										ft++;
										0 === d && "c" === a || 1 === d && "a" === a || 2 === d && "l" === a || 3 === d && "c" === a || d >= 4 && "(" === a ? d++ : (d && d < 5 || d >= 4 && ")" === a && --d < 5) && (d = 0);
										0 === k && "r" === a || 1 === k && "g" === a || 2 === k && "b" === a || 3 === k && "a" === a || k >= 3 && "(" === a ? (3 === k && "a" === a && (rt = 1), k++) : rt && "," === a ? ++rt > 3 && (k = rt = 0) : (rt && k < (rt ? 5 : 4) || k >= (rt ? 4 : 3) && ")" === a && --k < (rt ? 5 : 4)) && (k = rt = 0)
									} ut === c.length && ft === l.length || (f.debug && console.error('Trying to pattern match mis-matched strings ["' + l + '", "' + c + '"]'), nt = r);
								nt && (it.length ? (f.debug && console.log('Pattern found "' + nt + '" -> ', it, at, "[" + c + "," + l + "]"), c = it, l = at, tt = ot = "") : nt = r)
							}
							if (nt || (ht = dt(n, c), c = ht[0], ot = ht[1], ht = dt(n, l), l = ht[0].replace(/^([+-\/*])=/, function(n, t) {
									return pt = t, ""
								}), tt = ht[1], c = parseFloat(c) || 0, l = parseFloat(l) || 0, "%" === tt && (/^(fontSize|lineHeight)$/.test(n) ? (l /= 100, tt = "em") : /^scale/.test(n) ? (l /= 100, tt = "") : /(Red|Green|Blue)$/i.test(n) && (l = l / 100 * 255, tt = ""))), /[\/*]/.test(pt)) tt = ot;
							else if (ot !== tt && 0 !== c)
								if (0 === l) tt = ot;
								else {
									b = b || function() {
										var o = {
												myParent: h.parentNode || i.body,
												position: u.getPropertyValue(h, "position"),
												fontSize: u.getPropertyValue(h, "fontSize")
											},
											s = o.position === y.lastPosition && o.myParent === y.lastParent,
											c = o.fontSize === y.lastFontSize,
											r, n;
										return y.lastParent = o.myParent, y.lastPosition = o.position, y.lastFontSize = o.fontSize, r = {}, c && s ? (r.emToPx = y.lastEmToPx, r.percentToPxWidth = y.lastPercentToPxWidth, r.percentToPxHeight = y.lastPercentToPxHeight) : (n = v && v.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div"), f.init(n), o.myParent.appendChild(n), e.each(["overflow", "overflowX", "overflowY"], function(t, i) {
											f.CSS.setPropertyValue(n, i, "hidden")
										}), f.CSS.setPropertyValue(n, "position", o.position), f.CSS.setPropertyValue(n, "fontSize", o.fontSize), f.CSS.setPropertyValue(n, "boxSizing", "content-box"), e.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, i) {
											f.CSS.setPropertyValue(n, i, "100%")
										}), f.CSS.setPropertyValue(n, "paddingLeft", "100em"), r.percentToPxWidth = y.lastPercentToPxWidth = (parseFloat(u.getPropertyValue(n, "width", null, !0)) || 1) / 100, r.percentToPxHeight = y.lastPercentToPxHeight = (parseFloat(u.getPropertyValue(n, "height", null, !0)) || 1) / 100, r.emToPx = y.lastEmToPx = (parseFloat(u.getPropertyValue(n, "paddingLeft")) || 1) / 100, o.myParent.removeChild(n)), null === y.remToPx && (y.remToPx = parseFloat(u.getPropertyValue(i.body, "fontSize")) || 16), null === y.vwToPx && (y.vwToPx = parseFloat(t.innerWidth) / 100, y.vhToPx = parseFloat(t.innerHeight) / 100), r.remToPx = y.remToPx, r.vwToPx = y.vwToPx, r.vhToPx = y.vhToPx, f.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(r), h), r
									}();
									gt = /margin|padding|left|right|width|text|word|letter/i.test(n) || /X$/.test(n) || "x" === n ? "x" : "y";
									switch (ot) {
										case "%":
											c *= "x" === gt ? b.percentToPxWidth : b.percentToPxHeight;
											break;
										case "px":
											break;
										default:
											c *= b[ot + "ToPx"]
									}
									switch (tt) {
										case "%":
											c *= 1 / ("x" === gt ? b.percentToPxWidth : b.percentToPxHeight);
											break;
										case "px":
											break;
										default:
											c *= 1 / b[tt + "ToPx"]
									}
								} switch (pt) {
								case "+":
									l = c + l;
									break;
								case "-":
									l = c - l;
									break;
								case "*":
									l *= c;
									break;
								case "/":
									l = c / l
							}
							w[n] = {
								rootPropertyValue: lt,
								startValue: c,
								currentValue: c,
								endValue: l,
								unitType: tt,
								easing: ii
							};
							nt && (w[n].pattern = nt);
							f.debug && console.log("tweensContainer (" + n + "): " + JSON.stringify(w[n]), h)
						};
						for (ct in k)
							if (k.hasOwnProperty(ct)) {
								if (lt = u.Names.camelCase(ct), ot = function(n, t) {
										var r, e, i;
										return o.isFunction(n) && (n = n.call(h, c, rt)), o.isArray(n) ? (r = n[0], !o.isArray(n[1]) && /^[\d-]/.test(n[1]) || o.isFunction(n[1]) || u.RegEx.isHex.test(n[1]) ? i = n[1] : o.isString(n[1]) && !u.RegEx.isHex.test(n[1]) && f.Easings[n[1]] || o.isArray(n[1]) ? (e = t ? n[1] : d(n[1], p.duration), i = n[2]) : i = n[1] || n[2]) : r = n, t || (e = e || p.easing), o.isFunction(r) && (r = r.call(h, c, rt)), o.isFunction(i) && (i = i.call(h, c, rt)), [r || 0, e, i]
									}(k[ct]), tt(u.Lists.colors, lt)) {
									var dt = ot[0],
										gt = ot[1],
										ni = ot[2];
									if (u.RegEx.isHex.test(dt)) {
										for (var ti = ["Red", "Green", "Blue"], ui = u.Values.hexToRgb(dt), ii = ni ? u.Values.hexToRgb(ni) : r, st = 0; st < ti.length; st++) at = [ui[st]], gt && at.push(gt), ii !== r && at.push(ii[st]), wt(lt + ti[st], at);
										continue
									}
								}
								wt(lt, ot)
							} w.element = h
					}
					w.element && (u.Values.addClass(h, "velocity-animating"), pt.push(w), v = s(h), v && ("" === p.queue && (v.tweensContainer = w, v.opts = p), v.isAnimating = !0), ht === rt - 1 ? (f.State.calls.push([pt, l, p, null, nt.resolver, null, 0]), !1 === f.State.isTicking && (f.State.isTicking = !0, a())) : ht++)
				}
				var b, p = e.extend({}, f.defaults, n),
					w = {},
					it, ut;
				switch (s(h) === r && f.init(h), parseFloat(p.delay) && !1 !== p.queue && e.queue(h, p.queue, function(n, t) {
						var i, r;
						if (!0 === t) return !0;
						f.velocityQueueEntryFlag = !0;
						i = f.State.delayedElements.count++;
						f.State.delayedElements[i] = h;
						r = function(t) {
							return function() {
								f.State.delayedElements[t] = !1;
								n()
							}
						}(i);
						s(h).delayBegin = (new Date).getTime();
						s(h).delay = parseFloat(p.delay);
						s(h).delayTimer = {
							setTimeout: setTimeout(n, parseFloat(p.delay)),
							next: r
						}
					}), p.duration.toString().toLowerCase()) {
					case "fast":
						p.duration = 200;
						break;
					case "normal":
						p.duration = v;
						break;
					case "slow":
						p.duration = 600;
						break;
					default:
						p.duration = parseFloat(p.duration) || 1
				}(!1 !== f.mock && (!0 === f.mock ? p.duration = p.delay = 1 : (p.duration *= parseFloat(f.mock) || 1, p.delay *= parseFloat(f.mock) || 1)), p.easing = d(p.easing, p.duration), p.begin && !o.isFunction(p.begin) && (p.begin = null), p.progress && !o.isFunction(p.progress) && (p.progress = null), p.complete && !o.isFunction(p.complete) && (p.complete = null), p.display !== r && null !== p.display && (p.display = p.display.toString().toLowerCase(), "auto" === p.display && (p.display = f.CSS.Values.getDisplayType(h))), p.visibility !== r && null !== p.visibility && (p.visibility = p.visibility.toString().toLowerCase()), p.mobileHA = p.mobileHA && f.State.isMobile && !f.State.isGingerbread, !1 === p.queue) ? p.delay ? (it = f.State.delayedElements.count++, f.State.delayedElements[it] = h, ut = function(n) {
					return function() {
						f.State.delayedElements[n] = !1;
						g()
					}
				}(it), s(h).delayBegin = (new Date).getTime(), s(h).delay = parseFloat(p.delay), s(h).delayTimer = {
					setTimeout: setTimeout(g, parseFloat(p.delay)),
					next: ut
				}) : g(): e.queue(h, p.queue, function(n, t) {
					if (!0 === t) return nt.promise && nt.resolver(l), !0;
					f.velocityQueueEntryFlag = !0;
					g(n)
				});
				"" !== p.queue && "fx" !== p.queue || "inprogress" === e.queue(h)[0] || e.dequeue(h)
			}
			var h, st, bt, et, l, k, n, kt = arguments[0] && (arguments[0].p || e.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || o.isString(arguments[0].properties)),
				nt, rt, ht, dt, it, ft, lt, at, gt, vt, yt, y, pt, wt, ct, ot;
			if (o.isWrapped(this) ? (st = !1, et = 0, l = this, bt = this) : (st = !0, et = 1, l = kt ? arguments[0].elements || arguments[0].e : arguments[0]), nt = {
					promise: null,
					resolver: null,
					rejecter: null
				}, st && f.Promise && (nt.promise = new f.Promise(function(n, t) {
					nt.resolver = n;
					nt.rejecter = t
				})), kt ? (k = arguments[0].properties || arguments[0].p, n = arguments[0].options || arguments[0].o) : (k = arguments[et], n = arguments[et + 1]), !(l = p(l))) return void(nt.promise && (k && n && !1 === n.promiseRejectEmpty ? nt.resolver() : nt.rejecter()));
			if (rt = l.length, ht = 0, !/^(stop|finish|finishAll|pause|resume)$/i.test(k) && !e.isPlainObject(n))
				for (dt = et + 1, n = {}, it = dt; it < arguments.length; it++) o.isArray(arguments[it]) || !/^(fast|normal|slow)$/i.test(arguments[it]) && !/^\d/.test(arguments[it]) ? o.isString(arguments[it]) || o.isArray(arguments[it]) ? n.easing = arguments[it] : o.isFunction(arguments[it]) && (n.complete = arguments[it]) : n.duration = arguments[it];
			switch (k) {
				case "scroll":
					ft = "scroll";
					break;
				case "reverse":
					ft = "reverse";
					break;
				case "pause":
					return lt = (new Date).getTime(), e.each(l, function(n, t) {
						w(t, lt)
					}), e.each(f.State.calls, function(t, i) {
						var u = !1;
						i && e.each(i[1], function(t, f) {
							var o = n === r ? "" : n;
							return !0 !== o && i[2].queue !== o && (n !== r || !1 !== i[2].queue) || (e.each(l, function(n, t) {
								if (t === f) return i[5] = {
									resume: !1
								}, u = !0, !1
							}), !u && void 0)
						})
					}), ut();
				case "resume":
					return e.each(l, function(n, t) {
						b(t, lt)
					}), e.each(f.State.calls, function(t, i) {
						var u = !1;
						i && e.each(i[1], function(t, f) {
							var o = n === r ? "" : n;
							return !0 !== o && i[2].queue !== o && (n !== r || !1 !== i[2].queue) || !i[5] || (e.each(l, function(n, t) {
								if (t === f) return i[5].resume = !0, u = !0, !1
							}), !u && void 0)
						})
					}), ut();
				case "finish":
				case "finishAll":
				case "stop":
					return e.each(l, function(t, i) {
						s(i) && s(i).delayTimer && (clearTimeout(s(i).delayTimer.setTimeout), s(i).delayTimer.next && s(i).delayTimer.next(), delete s(i).delayTimer);
						"finishAll" === k && (!0 === n || o.isString(n)) && (e.each(e.queue(i, o.isString(n) ? n : ""), function(n, t) {
							o.isFunction(t) && t()
						}), e.queue(i, o.isString(n) ? n : "", []))
					}), at = [], e.each(f.State.calls, function(t, i) {
						i && e.each(i[1], function(u, f) {
							var h = n === r ? "" : n;
							if (!0 !== h && i[2].queue !== h && (n !== r || !1 !== i[2].queue)) return !0;
							e.each(l, function(r, u) {
								if (u === f)
									if ((!0 === n || o.isString(n)) && (e.each(e.queue(u, o.isString(n) ? n : ""), function(n, t) {
											o.isFunction(t) && t(null, !0)
										}), e.queue(u, o.isString(n) ? n : "", [])), "stop" === k) {
										var c = s(u);
										c && c.tweensContainer && !1 !== h && e.each(c.tweensContainer, function(n, t) {
											t.endValue = t.currentValue
										});
										at.push(t)
									} else "finish" !== k && "finishAll" !== k || (i[2].duration = 1)
							})
						})
					}), "stop" === k && (e.each(at, function(n, t) {
						g(t, !0)
					}), nt.promise && nt.resolver(l)), ut();
				default:
					if (!e.isPlainObject(k) || o.isEmptyObject(k)) return o.isString(k) && f.Redirects[k] ? (h = e.extend({}, n), gt = h.duration, vt = h.delay || 0, !0 === h.backwards && (l = e.extend(!0, [], l).reverse()), e.each(l, function(n, t) {
						parseFloat(h.stagger) ? h.delay = vt + parseFloat(h.stagger) * n : o.isFunction(h.stagger) && (h.delay = vt + h.stagger.call(t, n, rt));
						h.drag && (h.duration = parseFloat(gt) || (/^(callout|transition)/.test(k) ? 1e3 : v), h.duration = Math.max(h.duration * (h.backwards ? 1 - n / rt : (n + 1) / rt), .75 * h.duration, 200));
						f.Redirects[k].call(t, t, h || {}, n, rt, l, nt.promise ? nt : r)
					}), ut()) : (yt = "Velocity: First argument (" + k + ") was not a property map, a known action, or a registered redirect. Aborting.", nt.promise ? nt.rejecter(new Error(yt)) : t.console && console.log(yt), ut());
					ft = "start"
			}
			if (y = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				}, pt = [], e.each(l, function(n, t) {
					o.isNode(t) && ni(t, n)
				}), h = e.extend({}, f.defaults, n), h.loop = parseInt(h.loop, 10), wt = 2 * h.loop - 1, h.loop)
				for (ct = 0; ct < wt; ct++) ot = {
					delay: h.delay,
					progress: h.progress
				}, ct === wt - 1 && (ot.display = h.display, ot.visibility = h.visibility, ot.complete = h.complete), c(l, "reverse", ot);
			return ut()
		}, f = e.extend(c, f), f.animate = c, l = t.requestAnimationFrame || nt, f.State.isMobile || i.hidden === r || (y = function() {
			i.hidden ? (l = function(n) {
				return setTimeout(function() {
					n(!0)
				}, 16)
			}, a()) : l = t.requestAnimationFrame || nt
		}, y(), i.addEventListener("visibilitychange", y)), n.Velocity = f, n !== t && (n.fn.velocity = c, n.fn.velocity.defaults = f.defaults), e.each(["Down", "Up"], function(n, t) {
			f.Redirects["slide" + t] = function(n, i, o, s, h, c) {
				var l = e.extend({}, i),
					y = l.begin,
					p = l.complete,
					a = {},
					v = {
						height: "",
						marginTop: "",
						marginBottom: "",
						paddingTop: "",
						paddingBottom: ""
					};
				l.display === r && (l.display = "Down" === t ? "inline" === f.CSS.Values.getDisplayType(n) ? "inline-block" : "block" : "none");
				l.begin = function() {
					var i, r;
					0 === o && y && y.call(h, h);
					for (i in v) v.hasOwnProperty(i) && (a[i] = n.style[i], r = u.getPropertyValue(n, i), v[i] = "Down" === t ? [r, 0] : [0, r]);
					a.overflow = n.style.overflow;
					n.style.overflow = "hidden"
				};
				l.complete = function() {
					for (var t in a) a.hasOwnProperty(t) && (n.style[t] = a[t]);
					o === s - 1 && (p && p.call(h, h), c && c.resolver(h))
				};
				f(n, v, l)
			}
		}), e.each(["In", "Out"], function(n, t) {
			f.Redirects["fade" + t] = function(n, i, u, o, s, h) {
				var c = e.extend({}, i),
					l = c.complete,
					a = {
						opacity: "In" === t ? 1 : 0
					};
				0 !== u && (c.begin = null);
				c.complete = u !== o - 1 ? null : function() {
					l && l.call(s, s);
					h && h.resolver(s)
				};
				c.display === r && (c.display = "In" === t ? "auto" : "none");
				f(this, a, c)
			}
		}), f
	}(window.jQuery || window.Zepto || window, window, window ? window.document : undefined)
});
! function(n) {
	"use strict";
	"function" == typeof require && "object" == typeof exports ? module.exports = n() : "function" == typeof define && define.amd ? define(["velocity"], n) : n()
}(function() {
	"use strict";
	return function(n, t) {
		var i = n.Velocity,
			f, u;
		if (!i || !i.Utilities) return void(t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
		var r = i.Utilities,
			e = i.version;
		if (function(n, t) {
				var i = [];
				return !(!n || !t) && (r.each([n, t], function(n, t) {
					var u = [];
					r.each(t, function(n, t) {
						for (; t.toString().length < 5;) t = "0" + t;
						u.push(t)
					});
					i.push(u.join(""))
				}), parseFloat(i[0]) > parseFloat(i[1]))
			}({
				major: 1,
				minor: 1,
				patch: 0
			}, e)) {
			f = "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
			throw alert(f), new Error(f);
		}
		i.RegisterEffect = i.RegisterUI = function(n, t) {
			function u(n, t, u, f) {
				var e, o = 0;
				r.each(n.nodeType ? [n] : n, function(n, t) {
					f && (u += n * f);
					e = t.parentNode;
					var s = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];
					"border-box" === i.CSS.getPropertyValue(t, "boxSizing").toString().toLowerCase() && (s = ["height"]);
					r.each(s, function(n, r) {
						o += parseFloat(i.CSS.getPropertyValue(t, r))
					})
				});
				i.animate(e, {
					height: ("In" === t ? "+" : "-") + "=" + o
				}, {
					queue: !1,
					easing: "ease-in-out",
					duration: u * ("In" === t ? .6 : 1)
				})
			}
			return i.Redirects[n] = function(f, e, o, s, h, c, l) {
				var nt = o === s - 1,
					b = 0,
					v, tt, d, g;
				for (l = l || t.loop, t.defaultDuration = "function" == typeof t.defaultDuration ? t.defaultDuration.call(h, h) : parseFloat(t.defaultDuration), v = 0; v < t.calls.length; v++) "number" == typeof(p = t.calls[v][1]) && (b += p);
				for (tt = b >= 1 ? 0 : t.calls.length ? (1 - b) / t.calls.length : 1, v = 0; v < t.calls.length; v++) {
					var k = t.calls[v],
						it = k[0],
						y = 1e3,
						p = k[1],
						w = k[2] || {},
						a = {};
					(void 0 !== e.duration ? y = e.duration : void 0 !== t.defaultDuration && (y = t.defaultDuration), a.duration = y * ("number" == typeof p ? p : tt), a.queue = e.queue || "", a.easing = w.easing || "ease", a.delay = parseFloat(w.delay) || 0, a.loop = !t.loop && w.loop, a._cacheValues = w._cacheValues || !0, 0 === v) && ((a.delay += parseFloat(e.delay) || 0, 0 === o && (a.begin = function() {
						e.begin && e.begin.call(h, h);
						var t = n.match(/(In|Out)$/);
						t && "In" === t[0] && void 0 !== it.opacity && r.each(h.nodeType ? [h] : h, function(n, t) {
							i.CSS.setPropertyValue(t, "opacity", 0)
						});
						e.animateParentHeight && t && u(h, t[0], y + a.delay, e.stagger)
					}), null !== e.display) && (void 0 !== e.display && "none" !== e.display ? a.display = e.display : /In$/.test(n) && (d = i.CSS.Values.getDisplayType(f), a.display = "inline" === d ? "inline-block" : d)), e.visibility && "hidden" !== e.visibility && (a.visibility = e.visibility));
					v === t.calls.length - 1 && (g = function() {
						(void 0 === e.display || "none" === e.display) && /Out$/.test(n) && r.each(h.nodeType ? [h] : h, function(n, t) {
							i.CSS.setPropertyValue(t, "display", "none")
						});
						e.complete && e.complete.call(h, h);
						c && c.resolver(h || f)
					}, a.complete = function() {
						var r, u, a;
						if (l && i.Redirects[n](f, e, o, s, h, c, l === !0 || Math.max(0, l - 1)), t.reset) {
							for (r in t.reset) t.reset.hasOwnProperty(r) && (u = t.reset[r], void 0 !== i.CSS.Hooks.registered[r] || "string" != typeof u && "number" != typeof u || (t.reset[r] = [t.reset[r], t.reset[r]]));
							a = {
								duration: 0,
								queue: !1
							};
							nt && (a.complete = g);
							i.animate(f, t.reset, a)
						} else nt && g()
					}, "hidden" === e.visibility && (a.visibility = e.visibility));
					i.animate(f, it, a)
				}
			}, i
		};
		i.RegisterEffect.packagedEffects = {
			"callout.bounce": {
				defaultDuration: 550,
				calls: [
					[{
						translateY: -30
					}, .25],
					[{
						translateY: 0
					}, .125],
					[{
						translateY: -15
					}, .125],
					[{
						translateY: 0
					}, .25]
				]
			},
			"callout.shake": {
				defaultDuration: 800,
				calls: [
					[{
						translateX: -11
					}],
					[{
						translateX: 11
					}],
					[{
						translateX: -11
					}],
					[{
						translateX: 11
					}],
					[{
						translateX: -11
					}],
					[{
						translateX: 11
					}],
					[{
						translateX: -11
					}],
					[{
						translateX: 0
					}]
				]
			},
			"callout.flash": {
				defaultDuration: 1100,
				calls: [
					[{
						opacity: [0, "easeInOutQuad", 1]
					}],
					[{
						opacity: [1, "easeInOutQuad"]
					}],
					[{
						opacity: [0, "easeInOutQuad"]
					}],
					[{
						opacity: [1, "easeInOutQuad"]
					}]
				]
			},
			"callout.pulse": {
				defaultDuration: 825,
				calls: [
					[{
						scaleX: 1.1,
						scaleY: 1.1
					}, .5, {
						easing: "easeInExpo"
					}],
					[{
						scaleX: 1,
						scaleY: 1
					}, .5]
				]
			},
			"callout.swing": {
				defaultDuration: 950,
				calls: [
					[{
						rotateZ: 15
					}],
					[{
						rotateZ: -10
					}],
					[{
						rotateZ: 5
					}],
					[{
						rotateZ: -5
					}],
					[{
						rotateZ: 0
					}]
				]
			},
			"callout.tada": {
				defaultDuration: 1e3,
				calls: [
					[{
						scaleX: .9,
						scaleY: .9,
						rotateZ: -3
					}, .1],
					[{
						scaleX: 1.1,
						scaleY: 1.1,
						rotateZ: 3
					}, .1],
					[{
						scaleX: 1.1,
						scaleY: 1.1,
						rotateZ: -3
					}, .1],
					["reverse", .125],
					["reverse", .125],
					["reverse", .125],
					["reverse", .125],
					["reverse", .125],
					[{
						scaleX: 1,
						scaleY: 1,
						rotateZ: 0
					}, .2]
				]
			},
			"transition.fadeIn": {
				defaultDuration: 500,
				calls: [
					[{
						opacity: [1, 0]
					}]
				]
			},
			"transition.fadeOut": {
				defaultDuration: 500,
				calls: [
					[{
						opacity: [0, 1]
					}]
				]
			},
			"transition.flipXIn": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						rotateY: [0, -55]
					}]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipXOut": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						rotateY: 55
					}]
				],
				reset: {
					transformPerspective: 0,
					rotateY: 0
				}
			},
			"transition.flipYIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						rotateX: [0, -45]
					}]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipYOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						rotateX: 25
					}]
				],
				reset: {
					transformPerspective: 0,
					rotateX: 0
				}
			},
			"transition.flipBounceXIn": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [.725, 0],
						transformPerspective: [400, 400],
						rotateY: [-10, 90]
					}, .5],
					[{
						opacity: .8,
						rotateY: 10
					}, .25],
					[{
						opacity: 1,
						rotateY: 0
					}, .25]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipBounceXOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [.9, 1],
						transformPerspective: [400, 400],
						rotateY: -10
					}],
					[{
						opacity: 0,
						rotateY: 90
					}]
				],
				reset: {
					transformPerspective: 0,
					rotateY: 0
				}
			},
			"transition.flipBounceYIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [.725, 0],
						transformPerspective: [400, 400],
						rotateX: [-10, 90]
					}, .5],
					[{
						opacity: .8,
						rotateX: 10
					}, .25],
					[{
						opacity: 1,
						rotateX: 0
					}, .25]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipBounceYOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [.9, 1],
						transformPerspective: [400, 400],
						rotateX: -15
					}],
					[{
						opacity: 0,
						rotateX: 90
					}]
				],
				reset: {
					transformPerspective: 0,
					rotateX: 0
				}
			},
			"transition.swoopIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["100%", "50%"],
						transformOriginY: ["100%", "100%"],
						scaleX: [1, 0],
						scaleY: [1, 0],
						translateX: [0, -700],
						translateZ: 0
					}]
				],
				reset: {
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.swoopOut": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [0, 1],
						transformOriginX: ["50%", "100%"],
						transformOriginY: ["100%", "100%"],
						scaleX: 0,
						scaleY: 0,
						translateX: -700,
						translateZ: 0
					}]
				],
				reset: {
					transformOriginX: "50%",
					transformOriginY: "50%",
					scaleX: 1,
					scaleY: 1,
					translateX: 0
				}
			},
			"transition.whirlIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: [1, 0],
						scaleY: [1, 0],
						rotateY: [0, 160]
					}, 1, {
						easing: "easeInOutSine"
					}]
				]
			},
			"transition.whirlOut": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [0, "easeInOutQuint", 1],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: 0,
						scaleY: 0,
						rotateY: 160
					}, 1, {
						easing: "swing"
					}]
				],
				reset: {
					scaleX: 1,
					scaleY: 1,
					rotateY: 0
				}
			},
			"transition.shrinkIn": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: [1, 1.5],
						scaleY: [1, 1.5],
						translateZ: 0
					}]
				]
			},
			"transition.shrinkOut": {
				defaultDuration: 600,
				calls: [
					[{
						opacity: [0, 1],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: 1.3,
						scaleY: 1.3,
						translateZ: 0
					}]
				],
				reset: {
					scaleX: 1,
					scaleY: 1
				}
			},
			"transition.expandIn": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: [1, .625],
						scaleY: [1, .625],
						translateZ: 0
					}]
				]
			},
			"transition.expandOut": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [0, 1],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: .5,
						scaleY: .5,
						translateZ: 0
					}]
				],
				reset: {
					scaleX: 1,
					scaleY: 1
				}
			},
			"transition.bounceIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						scaleX: [1.05, .3],
						scaleY: [1.05, .3]
					}, .35],
					[{
						scaleX: .9,
						scaleY: .9,
						translateZ: 0
					}, .2],
					[{
						scaleX: 1,
						scaleY: 1
					}, .45]
				]
			},
			"transition.bounceOut": {
				defaultDuration: 800,
				calls: [
					[{
						scaleX: .95,
						scaleY: .95
					}, .35],
					[{
						scaleX: 1.1,
						scaleY: 1.1,
						translateZ: 0
					}, .35],
					[{
						opacity: [0, 1],
						scaleX: .3,
						scaleY: .3
					}, .3]
				],
				reset: {
					scaleX: 1,
					scaleY: 1
				}
			},
			"transition.bounceUpIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [-30, 1e3]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateY: 10
					}, .2],
					[{
						translateY: 0
					}, .2]
				]
			},
			"transition.bounceUpOut": {
				defaultDuration: 1e3,
				calls: [
					[{
						translateY: 20
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateY: -1e3
					}, .8]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.bounceDownIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [30, -1e3]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateY: -10
					}, .2],
					[{
						translateY: 0
					}, .2]
				]
			},
			"transition.bounceDownOut": {
				defaultDuration: 1e3,
				calls: [
					[{
						translateY: -20
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateY: 1e3
					}, .8]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.bounceLeftIn": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [30, -1250]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateX: -10
					}, .2],
					[{
						translateX: 0
					}, .2]
				]
			},
			"transition.bounceLeftOut": {
				defaultDuration: 750,
				calls: [
					[{
						translateX: 30
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateX: -1250
					}, .8]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.bounceRightIn": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [-30, 1250]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateX: 10
					}, .2],
					[{
						translateX: 0
					}, .2]
				]
			},
			"transition.bounceRightOut": {
				defaultDuration: 750,
				calls: [
					[{
						translateX: -30
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateX: 1250
					}, .8]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideUpIn": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, 20],
						translateZ: 0
					}]
				]
			},
			"transition.slideUpOut": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [0, 1],
						translateY: -20,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideDownIn": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, -20],
						translateZ: 0
					}]
				]
			},
			"transition.slideDownOut": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [0, 1],
						translateY: 20,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideLeftIn": {
				defaultDuration: 1e3,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, -20],
						translateZ: 0
					}]
				]
			},
			"transition.slideLeftOut": {
				defaultDuration: 1050,
				calls: [
					[{
						opacity: [0, 1],
						translateX: -20,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideRightIn": {
				defaultDuration: 1e3,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, 20],
						translateZ: 0
					}]
				]
			},
			"transition.slideRightOut": {
				defaultDuration: 1050,
				calls: [
					[{
						opacity: [0, 1],
						translateX: 20,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideUpBigIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, 75],
						translateZ: 0
					}]
				]
			},
			"transition.slideUpBigOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [0, 1],
						translateY: -75,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideDownBigIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, -75],
						translateZ: 0
					}]
				]
			},
			"transition.slideDownBigOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [0, 1],
						translateY: 75,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideLeftBigIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, -75],
						translateZ: 0
					}]
				]
			},
			"transition.slideLeftBigOut": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [0, 1],
						translateX: -75,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideRightBigIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, 75],
						translateZ: 0
					}]
				]
			},
			"transition.slideRightBigOut": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [0, 1],
						translateX: 75,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.perspectiveUpIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: ["100%", "100%"],
						rotateX: [0, -180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveUpOut": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: ["100%", "100%"],
						rotateX: -180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateX: 0
				}
			},
			"transition.perspectiveDownIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateX: [0, 180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveDownOut": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateX: 180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateX: 0
				}
			},
			"transition.perspectiveLeftIn": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [2e3, 2e3],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateY: [0, -180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveLeftOut": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [2e3, 2e3],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateY: -180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateY: 0
				}
			},
			"transition.perspectiveRightIn": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [2e3, 2e3],
						transformOriginX: ["100%", "100%"],
						transformOriginY: [0, 0],
						rotateY: [0, 180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveRightOut": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [2e3, 2e3],
						transformOriginX: ["100%", "100%"],
						transformOriginY: [0, 0],
						rotateY: 180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateY: 0
				}
			}
		};
		for (u in i.RegisterEffect.packagedEffects) i.RegisterEffect.packagedEffects.hasOwnProperty(u) && i.RegisterEffect(u, i.RegisterEffect.packagedEffects[u]);
		i.RunSequence = function(n) {
			var t = r.extend(!0, [], n);
			t.length > 1 && (r.each(t.reverse(), function(n, u) {
				var f = t[n + 1];
				if (f) {
					var s = u.o || u.options,
						e = f.o || f.options,
						h = s && s.sequenceQueue === !1 ? "begin" : "complete",
						c = e && e[h],
						o = {};
					o[h] = function() {
						var n = f.e || f.elements,
							t = n.nodeType ? [n] : n;
						c && c.call(t, t);
						i(u)
					};
					f.o ? f.o = r.extend({}, e, o) : f.options = r.extend({}, e, o)
				}
			}), t.reverse());
			i(t[0])
		}
	}(window.jQuery || window.Zepto || window, window, window ? window.document : undefined)
});
head.load({
	bootstrapjs: "https://www.shoppingcartelite.com/scripts/bootstrap3_min.js"
});
head.load({
	qtip: "https://www.shoppingcartelite.com/scripts/sitejs/qtip/qtip_min.js"
});
$("html").hasClass("no-ie") && window.addEventListener("orientationchange", function() {
		var n = document.querySelectorAll(".MobileMenuToggle")[0];
		n && n.classList.contains("active") && document.getElementsByTagName("body")[0].classList.remove("blur");
		glfnReadyandResize()
	}, !1),
	function() {
		var n = window.alert;
		window.alert = function(t) {
			if ($(".OverlayBox").length <= 0 || $(".OverlayBox").is(":hidden") && typeof overlayBox != "undefined")
				if (t != undefined)
					if (t != "" && t.toString().length > 10) {
						var i = t.toString();
						overlayBox.setup({
							content: "<h2 class='text-center'>Hey,<\/h2><p class='text-center' style='padding:0 10px 10px 10px; font-size:15px; line-height:22px;'>" + i + "<\/p> <a href='javascript:void(overlayBoxClose())' class='btn btn-primary btn-sm AlignCenter' style='margin-bottom:15px;'>OK<\/a>",
							width: 400,
							modal: !1,
							padding: "0px",
							resize: !0,
							resizeType: "generated"
						});
						console.info("Window alert message: " + t)
					} else t != "" && t.toString().length < 10 ? n(t) : n(t);
			else n(t);
			else n(t)
		}
	}();
head.browser.name == "ios" && head.load("https://jmautosports.com/scripts/siteJS/fastclick.js", function() {
	$(function() {
		FastClick.attach(document.body)
	})
});
prodArray = [];
addToCartAllowed = !0;
$(document).ready(function() {
	var n, r, f, e;
	hamMen = $(".HamburgerMenu");

	screenRender();
	setupHamburger();
	fixInvalidFormAction();
	var i = $(".toggleSearchBoxWrap"),
		t = $(".SearchBoxDropDown"),
		u = $(".searchbuttonheader");
	if (i.length > 0 && i.find(".SearchBoxInputField").val() != "" && (i.find(".toggleSearchPart").show(), i.addClass("searchTriggered")), t.width() > 106 ? t.addClass("Wide") : t.removeClass("Wide"), $(".SearchBoxDropDown, .SearchBoxDropDown option").hover(function() {
			t.addClass("drophover");
			setTimeout(function() {
				t.removeClass("drophover")
			}, 5e3)
		}, function() {
			$(".SearchBoxSubmitGo").removeClass("drophover")
		}), u.hover(function() {
			u.addClass("Hover")
		}, function() {
			u.removeClass("Hover")
		}), $(".SearchBoxSubmitGo, .SearchBoxInputField").click(function() {
			t.removeClass("drophover")
		}), $(".headernavsec1").find(".MenuButton:first").addClass("first"), $(".headernavsec1").find(".MenuButton:last").addClass("last"), isMobile) difMobileImgDim(), $(window).scroll(function() {
		if ($(".bigSearchTypeBox").length <= 0 && !$(".MobileMenuSearchToggle").is("visible") && $(".bodyHome").length > 0 && $(".sceSuggestion").length === 0) {
			var n = $(".MobileSearchWrapperHelper").outerHeight(!0) + $(".MobileSearchWrapperHelper").position().top;
			$(".MobileSearchWrapper").css("position") != "fixed" ? $(document).scrollTop() > n ? ($(".MobileSearchWrapper").stop().velocity({
				opacity: 0
			}), $(".MobileMenuSearchToggle").fadeIn("fast")) : ($(".MobileSearchWrapper").stop().velocity({
				opacity: 1
			}), $(".MobileMenuSearchToggle").fadeOut("fast")) : $(document).scrollTop() === 0 && ($(".MobileSearchWrapper").stop().velocity({
				opacity: 1
			}), $(".MobileMenuSearchToggle").fadeOut("fast"), $(".MobileSearchWrapper").css({
				position: "relative"
			}), HideMobileSearch())
		}
	});
	else {
		$(".HeaderTDWrapper").find(".navBut").unbind("mouseover click").bind("mouseover click", function(t) {
			var u;
			if ($("#tblSuggestion").length > 0) return !1;
			var i = $(this),
				e = $(this).attr("data-bid"),
				f = !0;
			if ($(".HeaderTDWrapper").find(".navBut").not(this).removeClass("megaActive"), head.desktop == !0 && t.type === "click") return f = !1, loadData("refreshNav", location.href), 0;
			if (head.desktop == !1 && $("body").hasClass("desktop") && t.type === "click" && i.hasClass("megaActive") == !1 && i.closest(".MainMenuULWrapper").hasClass("HasMega")) t.preventDefault(), $(".touchDevOverlay").remove(), $(".megaMPlch").prepend("<div class='touchDevOverlay' onClick='closeMega()'><\/div>"), f = !0;
			else {
				if (head.desktop == !1 && $("body").hasClass("desktop") && t.type === "click" && i.closest(".MainMenuULWrapper").hasClass("No-Mega")) return f = !1, 0;
				if (head.desktop == !1 && $("body").hasClass("desktop") && t.type === "click" && i.hasClass("megaActive")) return f = !1, window.location = i.attr("href"), 0
			}
			f == !0 && i.closest(".HamburgerMenu").length <= 0 && (u = $(".megaMPlch").find("." + e), u.length > 0 && (clearTimeout(r), clearTimeout(n), r = setTimeout(function() {
				if (WW = $(window).width(), u.addClass("mega-active"), $(".headermainnav").removeClass("headermainnavHighlight"), $(".MainMenuHoverULWrapper").hide(), $(".mbut").find(".SubMenuArrow").hide(), jQuery.event.trigger("onMegaMenuOpen"), u.show(), i.closest(".headermainnav").addClass("headermainnavHighlight"), mxHlp = parseInt($(".mxPgWidthHelper").css("maxWidth")) - 30, contentW = $(".headerWrapperDiv").find(".NoWideMenu").length > 0 ? $(".headerWrapperDiv").find(".HeaderFirstPaneWrapperInner").width() : $(".headerWrapperDiv").width(), u.css({
						top: i.offset().top + i.outerHeight(!0)
					}), u.outerWidth(!0) > mxHlp * .7) console.log("mega-lg"), u.css({
					left: 0,
					width: WW,
					right: "auto"
				}), u.addClass("mSize-big");
				else if (u.outerWidth(!0) < mxHlp * .7 && u.outerWidth(!0) > mxHlp * .4)
					if (ContentRFrmEdge = mxHlp + parseInt((WW - mxHlp) / 2), console.log("mega-md"), u.addClass("mSize-md"), u.outerWidth(!0) + i.offset().left > ContentRFrmEdge) {
						console.log("bgr");
						var n = WW - (i.offset().left + i.outerWidth(!0));
						i.offset().left + i.outerWidth(!0) >= WW / 2 && u.outerWidth(!0) > WW - i.offset().left - u.outerWidth(!0) - ContentRFrmEdge && (n = (WW - mxHlp) / 2);
						u.css({
							left: "auto",
							right: n
						})
					} else console.log("smlr"), u.css({
						left: i.offset().left
					});
				else u.outerWidth(!0) < mxHlp * .4 && (ContentRFrmEdge = mxHlp + parseInt((WW - mxHlp) / 2), console.log("mega-sm"), u.addClass("mSize-sm"), u.outerWidth(!0) + i.offset().left > ContentRFrmEdge ? (console.log("bgr"), u.css({
					left: "auto",
					right: WW - (i.offset().left + i.outerWidth(!0))
				})) : (console.log("smlr"), u.css({
					left: i.offset().left
				})));
				i.addClass("megaActive");
				$("nav").addClass("MMOpen");
				i.closest(".HasMega").find(".SubMenuArrow").show();
				typeof bLazy != "undefined" && bLazy.revalidate()
			}, 100), u.mouseenter(function() {
				clearTimeout(n)
			})))
		});
		$(".HeaderTDWrapper").find(".navBut").mouseout(function() {
			clearTimeout(r);
			clearTimeout(n);
			$(".HeaderTDWrapper").find(".navBut").closest(".HamburgerMenu").length <= 0 && (n = setTimeout(function() {
				closeMega()
			}, 200))
		});
		$(".megaMPlch").find(".MainMenuHoverULWrapper").mouseover(function() {
			clearTimeout(n)
		});
		$(".megaMPlch").find(".MainMenuHoverULWrapper").mouseout(function() {
			clearTimeout(r);
			clearTimeout(n);
			$(".HeaderTDWrapper").find(".navBut").closest(".HamburgerMenu").length <= 0 && (n = setTimeout(function() {
				closeMega()
			}, 200))
		});
		$(window).on("debouncedresize", function() {
			genMiniCart()
		});
		if (false) {
			$(".myAccDrop").length > 0 && $(".myAccDrop").parent().hasClass("TopNavCartInner") && $(".myAccDrop").detach().prependTo("main[role=main]");
			mpopTrgBoth = $(".myAccBtnIndi, .myAccDrop");
			mpopTrgBoth.off("mouseover").on("mouseover", function() {
				if (mpopTrg = $(this).parent().find(".myAccBtnIndi"), $(".miniCart").hide(), $(".miniCart").removeClass("opened"), clearTimeout(f), $(".myAccDrop").is(":hidden")) {
					var n = mpopTrg.offset().top + mpopTrg.outerHeight() + 15,
						t = mpopTrg.offset().left + mpopTrg.outerWidth();
					mpopTrg.addClass("active");
					mpopTrg.offset().left > 400 ? ($(".myAccDrop").css({
						top: parseInt(n),
						left: parseInt(t) - parseInt($(".myAccDrop").outerWidth(!0))
					}), $(".mpopArrow").css({
						left: parseInt($(".myAccDrop").outerWidth(!0)) - (parseInt(mpopTrg.offset().left) - (parseInt(mpopTrg.offset().left) - parseInt(mpopTrg.outerWidth(!0)))) + parseInt(mpopTrg.outerWidth(!0) / 2)
					})) : ($(".myAccDrop").css({
						top: parseInt(n),
						left: parseInt(mpopTrg.offset().left)
					}), $(".mpopArrow").css({
						left: parseInt(mpopTrg.offset().left) + parseInt(mpopTrg.outerWidth(!0)) - parseInt(mpopTrg.outerWidth(!0) / 2)
					}), console.log("left " + mpopTrg.offset().left + " width " + mpopTrg.outerWidth(!0)));
					$(".myAccDrop").show();
					setTimeout(function() {
						$(".myAccDrop").addClass("opened")
					}, 5)
				}
			});
			mpopTrgBoth.off("mouseleave").on("mouseleave", function() {
				mpopTrg = $(this).parent().find(".myAccBtnIndi");
				clearTimeout(f);
				f = setTimeout(function() {
					$(".myAccDrop").is(":visible") && (mpopTrg.removeClass("active"), $(".myAccDrop").hide(), $(".myAccDrop").removeClass("opened"))
				}, 150)
			})
		}
		jQuery.trim($(".sideMenuWrap").find(".MainWrapSide").text()).length <= 0 && ($(".sideMenuWrap").hide(), ($(".inrCntWrp").hasClass("rightside") || $(".inrCntWrp").hasClass("leftside")) && $(".inrCntWrp").removeClass("col-md-9").addClass("col-md-12"))
	}
	oVal = $(".tblAppList").find(".appListQty").length > 0 ? $(".tblAppList").find(".appListQty").attr("value") : 1;
	$(".columnCaption").off("click").on("click", function() {
		var n = $(this);
		(n.closest(".row").hasClass("layoutToggleMobile") && $("body").hasClass("mobile") || n.closest(".row").hasClass("layoutToggleMobile") && $("body").hasClass("tablet") || n.closest(".row").hasClass("layoutToggleMobile") && $("html").hasClass("tablet") || n.closest(".row").hasClass("layoutToggleAllDevices")) && (n.hasClass("active") ? (n.removeClass("active"), n.find("svg")[0].classList.remove("r180"), n.parent().find(".columnCaptionContent").slideUp("fast")) : (n.addClass("active"), n.find("svg")[0].classList.add("r180"), n.parent().find(".columnCaptionContent").slideDown("fast")))
	});
	aRelOverlayBox();
	$(".OverlayBox-OpenThis").click(function(n) {
		var t, i, r;
		n.preventDefault();
		t = $(window).width();
		i = $(".OverlayBox-OpenThis").html();
		r = $(".OverlayBox-OpenThis").find("img").length > 0 ? t < $(".OverlayBox-OpenThis").find("img").get(0).naturalWidth ? Math.ceil(t - t * .18) : Math.ceil($(".OverlayBox-OpenThis").find("img").get(0).naturalWidth) : $(".OverlayBox-OpenThis").children().outerWidth(!0);
		overlayBox.setup({
			content: i,
			width: r,
			padding: "0px",
			format: "popup",
			resize: !0
		})
	});
	$(".ImageAnnocation").length > 0 && ($(".annPoint, .ImageAnnocationRight div").mouseenter(function() {
		a = $(this);
		cl = a.hasClass("annPoint") ? a.attr("class").split(" ")[1] : a.find(".annPoint").attr("class").split(" ")[1];
		a.closest(".ImageAnnocation").find(".annPoint").css({
			opacity: "0.3"
		});
		a.closest(".ImageAnnocation").find("." + cl).css({
			opacity: "1"
		})
	}), $(".annPoint, .ImageAnnocationRight div").mouseleave(function() {
		a = $(this);
		a.closest(".ImageAnnocation").find(".annPoint").css({
			opacity: "1"
		})
	}));
	convertBlockSliders();
	convertBlockSnippets();
	loadWistiaScripts();
	isMobile && ($(".footerHTMLContent").length > 0 && $(".footerHTMLContent").each(function() {
		$(this).parent().find(".footerLinkLI").length <= 0 && $(this).closest(".footerCategoryWrap").hide()
	}), $(".footerCategory").click(function() {
		$(this).parent().hasClass("active") ? ($(this).parent().removeClass("active"), $(this).parent().find(".footerLinkLI").stop().velocity("slideUp", {
			duration: 200
		}), $(this).find("i").attr("class", "icon-arrow-down")) : ($(this).parent().addClass("active"), $(this).parent().find(".footerLinkLI").stop().velocity("slideDown", {
			duration: 200
		}), $(this).find("i").attr("class", "icon-arrow-up-thin"))
	}));
	$(".footerCategory").each(function() {
		$this = $(this);
		$this.text().trim().length < 1 && $this.hide()
	});
	// readCookie("forceDesktop") == "1" && (forceMobile = "<div class='forceMobile' onclick=' createCookie(\"forceDesktop\", \"0\", \"30\"), reloadPage()'><div class='forceMobileInner'><i><\/i><span>Switch to Mobile Mode<\/span><\/div><\/div>", $("#FooterPane").append(forceMobile));
	$(".MainWrapSide").text().match(/^\s*$/) && ($(".MainWrapSide").closest(".sideMenuWrap").hide(), $(".mainContentPane").attr("class", "mainContentPane noside"));
	$(".articledetails").length > 0 && $(".articledetails").find(".mainContentPane").css("visibility", "visible").hide().fadeIn("fast");
	$("body").removeClass("StillLoading");
	$(".SocialBarSticky").length > 0 && (e = parseInt($(".SocialBarSticky").css("top")), $(window).scroll(function() {
		var n = $(window).scrollTop(),
			t = $(".SocialBarSticky").offset().top;
		n >= t && $(".SocialBarSticky").parent().addClass("sticky");
		n < e && $(".SocialBarSticky").parent().removeClass("sticky")
	}));
	TriggerRelatedPrTabs();
	$("body").append('<div class="ScrollTopArrow" style="display:none;"><svg class="sceico-circlearrow r180"><use xlink:href="https://jmautosports.com/scripts/svgIcons/icons.svg#sceico-circlearrow"><\/use><\/svg><\/div>');
	$(".ScrollTopArrow").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, "fast")
	});
	$(".ScrollTopArrow").mouseenter(function() {
		$(this).addClass("hover")
	});
	$(".ScrollTopArrow").mouseleave(function() {
		$(this).removeClass("hover")
	});
	$(".SCEBlocksSlider").length > 0 && $(".SCEBlocksSlider").each(function() {
		$this = $(this);
		$this.hasClass("homePageFeaturedSlider") === !1 && ($this.mouseenter(function() {
			$(this).find(".swiper-button-next").length > 0 && $(this).find(".swiper-button-next, .swiper-button-prev").show();
			$(this).find(".swiper-pagination").length > 0 && $(this).find(".swiper-pagination").show()
		}), $this.parent().mouseleave(function() {
			$(this).find(".swiper-button-next").length > 0 && $(this).find(".swiper-button-next, .swiper-button-prev").hide();
			$(this).find(".swiper-pagination").length > 0 && $(this).find(".swiper-pagination").hide()
		}))
	});
	mxPgWidth = parseInt($(".mxPgWidthHelper").css("maxWidth"));
	geBlazy();
	gDrop();
	isMobile || head.ready("qtip", function() {
		$(document).trigger("qtipLoaded");
		$('[data-tooltip!=""]').qtip({
			content: {
				attr: "data-tooltip"
			},
			show: "mouseover",
			hide: "mouseout",
			style: {
				classes: "qtip-bootstrap"
			},
			position: {
				my: "bottom center",
				at: "top center"
			},
			show: {
				solo: !0,
				effect: !1,
				delay: 0
			},
			hide: {
				effect: !1,
				delay: 0
			}
		})
	});
	glfnReadyandResize();
	$("a.sideBoxTitle").click(function() {
		sdBox = $(this).parent().find(".sideBoxIn");
		sdBox.is(":hidden") ? ($(this).closest(".sideBox").addClass("active"), sdBox.velocity("slideDown", {
			duration: 150,
			easing: "easeInSine"
		}), $(this).find("svg").attr("class", "sceico-minus-1"), $(this).find("svg > use").attr("xlink:href", "https://jmautosports.com/scripts/svgIcons/icons.svg#sceico-minus-1")) : ($(this).closest(".sideBox").removeClass("active"), sdBox.velocity("slideUp", {
			duration: 150,
			easing: "easeInSine"
		}), $(this).find("svg").attr("class", "sceico-plus-1"), $(this).find("svg > use").attr("xlink:href", "https://jmautosports.com/scripts/svgIcons/icons.svg#sceico-plus-1"))
	})
});
document.addEventListener("deviceSwitchEvent", function() {
	convertBlockSliders()
});
$(window).on("load", function() {
	$("body").removeClass("NotFullyLoaded");
	isMobile || ajaxGetMiniCart();
	typeof bLazy != "undefined" && bLazy.revalidate();
	gDrop();
	$("input.required").bind("keyup", function() {
		$(this).removeClass("required")
	});
	$(".txtOverImageWrap").length > 0 && setTimeout(function() {
		$(".txtOverImageWrap").each(function() {
			var n = $(this);
			n.hasClass("box-middle") && txtOverImageVertical();
			n.hasClass("box-center") && txtOverImageHorizontal();
			n.find(".txtOverImageContent, .txtOverImageItems").velocity({
				opacity: 1
			}, {
				duration: 400
			})
		})
	}, 10)
});
$(window).scroll(function() {
	isMobile || ($(document).scrollTop() > 500 && $(window).width() >= 1140 ? $(".ScrollTopArrow").fadeIn("fast") : $(".ScrollTopArrow").fadeOut("fast"))
});
$(window).on("debouncedresize", function() {
	$(".txtOverImageWrap").length > 0 && setTimeout(function() {
		$(".txtOverImageWrap").each(function() {
			var n = $(this);
			n.hasClass("box-middle") && txtOverImageVertical();
			n.hasClass("box-center") && txtOverImageHorizontal();
			n.find(".txtOverImageContent, .txtOverImageItems").velocity({
				opacity: 1
			}, {
				duration: 400
			})
		})
	}, 10);
	$(".layoutToggleMobile").length > 0 && $("html").hasClass("gt-768") && $(".layoutToggleMobile").find(".columnCaptionContent").css({
		display: ""
	});
	isMobile || (glfnReadyandResize(), $(window).width() < 1140 && $(".ScrollTopArrow").fadeOut("fast"))
});
if ($(document).ajaxComplete(function() {
		tabletClass();
		screenRender();
		try {
			$(".b-lazy").length > 0 && typeof bLazy != undefined && setTimeout(function() {
				typeof bLazy != "undefined" && bLazy.revalidate()
			}, 100);
			$("input.required").bind("keyup", function() {
				$(this).removeClass("required")
			})
		} catch (n) {}
	}), function(n) {
		n.fn.placeholder = function() {
			typeof document.createElement("input").placeholder == "undefined" && n("[placeholder]").focus(function() {
				var t = n(this);
				t.val() == t.attr("placeholder") && (t.val(""), t.removeClass("placeholder"))
			}).blur(function() {
				var t = n(this);
				(t.val() == "" || t.val() == t.attr("placeholder")) && (t.addClass("placeholder"), t.val(t.attr("placeholder")))
			}).blur().parents("form").submit(function() {
				n(this).find("[placeholder]").each(function() {
					var t = n(this);
					t.val() == t.attr("placeholder") && t.val("")
				})
			})
		}
	}(jQuery), $.fn.placeholder(), $("html").hasClass("safari7") && $("html").hasClass("desktop") && $("html").hasClass("tablet") == !1) {
	function safFlex() {
		$(".swiper-container").each(function() {
			var n = $(this),
				t;
			n.hasClass("ProdPageSlidWrap") == !1 && (n.hide(), t = n.parent().width(), n.css({
				display: "block",
				width: t + " !important",
				maxWidth: t + " !important"
			}), n.find(".swiper-wrapper").css({
				width: t + " !important",
				maxWidth: t + " !important"
			}), n.show())
		})
	}
	$(document).ready(function() {
		safFlex()
	});
	$(window).on("debouncedresize", function() {
		safFlex()
	})
}
if ($("html").hasClass("lt-ie10") || $("html").hasClass("safari7") && $("html").hasClass("desktop") && $("html").hasClass("tablet") == !1) {
	function oldFlex() {
		$(".swiper-container-no-flexbox").each(function() {
			f = $(this);
			w = f.find(".swiper-wrapper");
			s = f.find(".swiper-slide");
			f.hide();
			f.css({
				width: f.parent().width(),
				display: "block"
			});
			w.css({
				width: s.outerWidth(!0) * s.length,
				display: "block"
			});
			f.show()
		})
	}
	$(document).ready(function() {
		oldFlex()
	});
	$(document).ajaxComplete(function() {
		oldFlex()
	});
	$(window).on("load", function() {
		oldFlex()
	})
}
head.browser.name === "ie" && head.load("https://jmautosports.com/scripts/siteJS/svg4everybody.legacy.min.js", function() {
	svg4everybody()
});

function updatepage(n) {
	if (n != "") {
		hideSuggestions();
		var t = document.createElement("div");
		t.innerHTML = n;
		$get(resultDiv).appendChild(t);
		updateSuggestionBoxStyle();
		$(".sceSuggestSearch li:even").addClass("even");
		$(".sceSuggestSearch li:odd").addClass("odd");
		$(".sceSuggestProduct li:even").addClass("even");
		$(".sceSuggestProduct li:odd").addClass("odd")
	}
}

function hideSuggestions() {
	try {
		$get(resultDiv).removeChild($get(resultDiv).childNodes[0])
	} catch (n) {}
	try {
		$get(resultDiv).removeChild($get(resultDiv).childNodes[0])
	} catch (n) {}
	try {
		$("#searchSuggestion").children().remove()
	} catch (n) {}
}

function quickOrder(n) {
	var t = new String(document.getElementById(n).value.toLowerCase()),
		r = "",
		i;
	for (document.getElementById("qoItemQty") && (isNaN(document.getElementById("qoItemQty").value) || (r = document.getElementById("qoItemQty").value)), i = 0; i < t.length; i++)
		if ("!@#$%^&*()+=[]\\';,{}|\":<>?".indexOf(t.charAt(i)) != -1) return !1;
	if (t.indexOf("type in") >= 0 || t.indexOf("search") >= 0 || t.indexOf(".aspx") >= 0) return !1;
	window.location.href = "https://jmautosports.com/secure/cart?quickOrder=" + escape(t) + "&qo=" + serverObjectsFooter.qo + "&qty=" + r
}

function registerNewsletter(n, t) {
	n != undefined && $(n).parent().find("#sce_newsletterEmail").val() === "" && $(n).parent().find("#sce_newsletterEmail").addClass("required");
	$('[id="sce_newsletterEmail"]').each(function() {
		var i = $(this),
			r;
		$(this).val() != "" && (r = "https://jmautosports.com/ajaxNewsletterRegister.aspx?portalID=" + portalID + "&f=" + escape(i.parent().find("#sce_newsletterFirst").val()) + "&l=" + escape(i.parent().find("#sce_newsletterLast").val()) + "&e=" + escape(i.val()) + "&tse=1", $.post(r, function(i) {
			var r = new String(i),
				u;
			r != "" ? (setTimeout(r, 0), $(n).parent().find(".SubThankYouMes").length > 0 && $(n).parent().find(".SubThankYouMes").html() != "" && (u = $(n).parent().find(".SubThankYouMes").html(), $(".tempSubBoxThankYou").remove(), $("body").append('<textarea class="tempSubBoxThankYou" style="display:none;">' + u + "<\/textarea>")), t != undefined && t != "" && ($(".tempSubBoxRed").remove(), $("body").append('<input class="tempSubBoxRed" style="display:none;" value="' + t + '">'))) : (callErrorReg("invalidinfo"), $(".tempSubBoxThankYou").remove(), $(".tempSubBoxRed").remove())
		}))
	});
	$("input.required").bind("focus", function() {
		$(this).removeClass("required")
	})
}

function dropDownLoadind(n) {
	var t;
	n == 1 ? t = document.getElementById(serverObjectsSide.cboCarModel) : n == 2 && (t = document.getElementById(serverObjectsSide.cboCarYear));
	t.options.length = 0;
	t.options[0] = n == 1 ? new Option("Loading Model List", "", !0, !0) : n == 2 ? new Option("Loading Year List", "", !0, !0) : new Option("Loading Tire Sizes", "", !0, !0);
	t.options[1] = new Option("Please wait...", "")
}

function captureKeysSideSearch(n) {
	var t = document.layers ? n.which : document.all ? event.keyCode : n.keyCode;
	return t == 13 ? (window.location.href = "https://jmautosports.com/products?keyword=" + escape(document.getElementById(serverObjectsSide.txtKeyword).value), !1) : !0
}

function captureKeysReSearch(n) {
	var t = document.layers ? n.which : document.all ? event.keyCode : n.keyCode;
	return t == 13 ? (window.location.href = "https://jmautosports.com/products?keyword=" + escape(document.getElementById("txtbodySearch").value), !1) : !0
}

function captureQuickSideSearch(n, t) {
	var i = document.layers ? t.which : document.all ? event.keyCode : t.keyCode;
	return i == 13 ? (typeof n != "string" && (n = n.id), quickOrder(n), !1) : !0
}

function searchForTires() {
	var n = document.getElementById(serverObjectsSide.cboTireWidth),
		t = document.getElementById(serverObjectsSide.cboTireRatio),
		i = document.getElementById(serverObjectsSide.cboTireDiamter),
		r;
	n.selectedIndex > 0 && t.selectedIndex > 0 && i.selectedIndex > 0 && (r = new String(n.options[n.selectedIndex].value + "-" + t.options[t.selectedIndex].value + "-" + i.options[i.selectedIndex].value), window.location.href = "" + serverObjectsSide.NonSecureURL + "/products?tire=" + r + "&brand=0&clev=0", showLoading())
}

function toggleTires(n) {
	n == 2 ? (document.getElementById("tireFront").style.display = "none", document.getElementById("tireRear").style.display = "", document.getElementById("linkFront").className = "", document.getElementById("linkRear").className = "check_nav_active") : (document.getElementById("tireFront").style.display = "", document.getElementById("tireRear").style.display = "none", document.getElementById("linkRear").className = "", document.getElementById("linkFront").className = "check_nav_active")
}

function showLoading() {
	var n = document.getElementById("tResult"),
		t;
	n ? (t = n.offsetHeight, n.innerHTML = document.getElementById("loadingOverlay").innerHTML, n.style.minHeight = t, document.getElementById("bottomBar") && (document.getElementById("bottomBar").style.display = "none"), n.style.minHeight = "") : document.getElementById("waitDivSide").style.display = ""
}

function removeCarFilter() {
	document.getElementById(serverObjectsSide.hActionName).value = "removeCarFilter";
	__doPostBack("", "");
	showLastCarClear();
	showLoading()
}

function removeCarFilter2() {
	document.getElementById(serverObjectsSide.hActionName).value = "removeCarFilter2";
	__doPostBack("", "");
	showLoading()
}

function showDelayedResult(n) {
	typeof serverObjectsSide != "undefined" && document.getElementById(serverObjectsSide.hSearchResult).value != "" && showResult(n, !1);
	collapseControl()
}

function expandCollapseFilter(n) {
	n == 0 && document.getElementById("filterImg").className == "rightBoxBullet" && (n = 1);
	n == 1 ? (document.getElementById("filterImg").className = "rightBoxBullet_on", $(".topFilterWrap").css({
		display: ""
	}), document.getElementById(serverObjectsSide.hTopFilterClosed).value = "") : (document.getElementById("filterImg").className = "rightBoxBullet", $(".topFilterWrap").css({
		display: "none"
	}), document.getElementById(serverObjectsSide.hTopFilterClosed).value = "close")
}

function togglePannelAnimatedStatus(n, t, i) {
	var r, u, f;
	currentContent == null && (currentContent = n, r = n.style.display == "none", r && (n.style.display = ""), u = n.offsetHeight, f = i + (r ? 0 : -u), n.style.height = Math.abs(f) + "px", setTimeout("togglePannelAnimatingStatus(" + t + "," + i + "," + u + "," + f + ")", t))
}

function togglePannelAnimatingStatus(n, t, i, r) {
	var u = Math.abs(r),
		f;
	u >= t && u <= i - t ? (r += t, currentContent.style.height = Math.abs(r) + "px", f = Math.round(Math.abs(i * r / 1e4)), currentContent.style.opacity = f / 10, currentContent.style.filter = "alpha(opacity=" + f * 10 + ")", setTimeout("togglePannelAnimatingStatus(" + n + "," + t + "," + i + "," + r + ")", n)) : (u < t ? expandCollapseFilter(2) : (currentContent.style.opacity = 1, currentContent.style.filter = "alpha(opacity=100)", expandCollapseFilter(1)), currentContent.style.height = "", currentContent = null)
}

function subSliderFilter(n) {
	var t = $(n),
		i = t.attr("data-lnk1"),
		r = t.attr("data-lnk2");
	processFilterAction(i, r)
}

function showMoreFilters() {
	var n = document.getElementById(serverObjectsSide.hMaxOptionsPerFilter);
	n.value = parseInt(n.value) + parseInt(n.value);
	serverObjectsSide.IsDiamondFilterFound == "True" ? head.load("https://jmautosports.com/scripts/pgJS/search-createfilters.js", function() {
		createJewelryFilters()
	}) : head.load("https://jmautosports.com/scripts/pgJS/search-createfilters.js", function() {
		createFilters()
	})
}

function processFilterAction(n, t) {
	loadData(n, t);
	isMobile && setTimeout(function() {
		$(".CustomPopContent").find(".topFilterWrap").is(":hidden") && CustomPopupClose()
	}, 200);
	jQuery.event.trigger("filtersChange");
	return
}

function processJewelryFilters(n) {
	loadData("skip", "skip", n);
	isMobile && setTimeout(function() {
		$(".CustomPopContent").find(".topFilterWrap").is(":hidden") && CustomPopupClose()
	}, 200);
	jQuery.event.trigger("filtersChange");
	return
}

function processMoreFilter(n, t) {
	t.selectedIndex > 0 && processFilterAction(n, t.options[t.selectedIndex].value);
	t.selectedIndex = 0
}

function carSearch(n) {
	var t, i;
	n == 1 ? (t = document.getElementById(serverObjectsSide.cboCarYear), i = document.getElementById("cboCarYear"), t.selectedIndex = i.selectedIndex, loadCarMakes()) : n == 2 ? (t = document.getElementById(serverObjectsSide.cboCarMake), i = document.getElementById("cboCarMake"), t.selectedIndex = i.selectedIndex, loadCarModels()) : n == 3 ? (t = document.getElementById(serverObjectsSide.cboCarModel), i = document.getElementById("cboCarModel"), t.selectedIndex = i.selectedIndex, loadCarSubmodels()) : n == 4 && (t = document.getElementById(serverObjectsSide.cboCarSubModel), i = document.getElementById("cboCarSubmodel"), t.selectedIndex = i.selectedIndex, markForCarSearch())
}

function expandCollapseBox(n) {
	var i, t, r;
	if (n == 0) return !0;
	for (t = null, r = 0; r < filterBoxes.length; r++) filterBoxes[r][2] == n && (t = document.getElementById(filterBoxes[r][1]));
	document.getElementById("rbArrowImg" + n).className == "rightBoxBullet" ? (i = 1, t && (t.value = "on")) : document.getElementById("rbArrowImg" + n).className == "rightBoxBulletSort" ? (i = 10, t && (t.value = "on")) : document.getElementById("rbArrowImg" + n).className == "rightBoxBulletSort_on" ? (i = 11, t && (t.value = "on")) : document.getElementById("rbArrowImg" + n).className == "rightBoxBullet_on" && (i = 2, t && (t.value = "off"));
	i == 1 ? (document.getElementById("rbArrowImg" + n).className = "rightBoxBullet_on", document.getElementById("rbClear" + n).style.display = "inline", document.getElementById("rbContent" + n).style.display = "block") : i == 2 ? (document.getElementById("rbArrowImg" + n).className = "rightBoxBullet", document.getElementById("rbClear" + n).style.display = "none", document.getElementById("rbContent" + n).style.display = "none") : i == 10 ? (document.getElementById("rbArrowImg" + n).className = "rightBoxBulletSort_on", document.getElementById("rbClear" + n).style.display = "inline", document.getElementById("rbContent" + n).style.display = "block") : i == 11 && (document.getElementById("rbArrowImg" + n).className = "rightBoxBulletSort", document.getElementById("rbClear" + n).style.display = "none", document.getElementById("rbContent" + n).style.display = "none")
}

function select_star(n) {
	alert("Selected Star: " + n)
}

function updateResult(n, t) {
	var f;
	if (n = new String(n), n.indexOf("redirect:") == 0) window.location.href = n.substring(9, n.length);
	else if (n != "") {
		var i = new String(n).split("^^~^^"),
			r = i[0],
			u = i[2];
		if (document.getElementById(serverObjectsSide.hItemsPerPage).value = i[4], document.getElementById(serverObjectsSide.hInitialSearch).value = i[5], document.getElementById(serverObjectsSide.hPages).value = r, document.getElementById(serverObjectsSide.hProductCount).value = i[1], document.getElementById(serverObjectsSide.hCurrentPage).value = u, document.getElementById(serverObjectsSide.hCurrentSort).value = i[3], document.getElementById(serverObjectsSide.hTopFilter).value = i[6], document.getElementById(serverObjectsSide.hResultView).value = i[10], document.getElementById(serverObjectsSide.hSearchResult).value = i[11], currentURL = new String(i[12]), window.history && window.history.pushState && currentURL != "" && (currentURL == "categorySelect" && window.location.href.indexOf("categorySelection=") < 1 ? window.history.pushState("Categories", null, window.location.href + "&categorySelection=1") : currentURL != "categorySelect" && window.history.pushState("Products", null, window.location.href.split("?")[0] + "?filtercache=" + currentURL)), r == 1 || u == 1 || t == !0) eval("thumbList = new Array(" + i[9] + ")"), showResult(!1, !1), eval(i[9]);
		else {
			eval("tempList = new Array(" + i[9] + ")");
			try {
				typeof thumbList != "undefined" && thumbList.push.apply(thumbList, f)
			} catch (e) {
				console.log(e)
			}
			showResult(!1, !0)
		}
	}
}

function loadData(n, t, i) {
	var s = document.getElementById(serverObjectsSide.hItemsPerPage).value,
		r = parseInt(document.getElementById(serverObjectsSide.hCurrentPage).value),
		h = document.getElementById(serverObjectsSide.hResultView).value,
		t, f;
	if (n == "") {
		if (r >= parseInt(document.getElementById(serverObjectsSide.hPages).value)) return;
		r++;
		document.getElementById("bottomBar") && (document.getElementById("bottomBar").innerHTML = '<center><div class="loadingAnimationSmall"><\/div>Loading Next Page...<\/center>')
	} else r = 1, showLoading();
	if (n == "skip" && t && "skip" && i != "") {
		var n = "customFilterSet",
			e = !1,
			o = "",
			u = [];
		i.forEach(function(n, t) {
			this[t].name === "priceFilter" ? u[t] = this[t].activeprice == "" ? "priceFilter:" + this[t].available : "priceFilter:" + this[t].activeprice : (this[t].type === "button" && (e = !0, o += "removeFilter:" + this[t].filterid + "!0~!~"), u[t] = this[t].active == "" ? "customFilter:" + this[t].name + "@" + this[t].available : "customFilter:" + this[t].name + "@" + this[t].active)
		}, i);
		t = e ? o + u.join("~!~") : u.join("~!~");
		console.log(t)
	}
	if (alreadyloading = !0, f = "", serverObjectsSide.popularSearch == "True" && (f = "1"), ajaxRunning && typeof ajaxData != "undefined" && (ajaxData.abort(), ajaxRunning = !1), n == "requiredChoice4") {
		$("input[id$='hActionName']").val(n);
		$("input[id$='hActionValue']").val(t);
		document.forms.Form.submit();
		return
	}
	if (!ajaxRunning) {
		let i = "";
		window.location.href.indexOf("showpage=") > -1 && (i = getParameterByName("showpage"));
		ajaxData = $.ajax({
			type: "POST",
			data: {
				portalID: portalID,
				popularSearch: f,
				CurrentTabName: serverObjectsSide.CurrentTabName,
				itemsPerPage: s,
				currentPage: r,
				showPage: i,
				resultView: h,
				actionName: n,
				actionValue: t,
				currentURL: currentURL
			},
			beforeSend: function() {
				ajaxRunning = !0
			},
			url: "/ajaxSearchResultProducts.aspx",
			success: function(t) {
				if (n == "customFilter2" && !1) {
					setTimeout("window.location.href='/products'", 1e3);
					return
				}
				n != "" ? updateResult(t, !0) : updateResult(t, !1);
				alreadyloading = !1;
				document.getElementById(serverObjectsSide.hCurrentPage).value = r;
				typeof bLazy != "undefined" && bLazy.revalidate();
				isMobile && head.load("https://jmautosports.com/scripts/pgJS/modules/msDropdown.js", function() {
					$(".filtersDropDown").msDropDown({
						visibleRows: 10,
						rowHeight: 27
					});
					$(".CustomPopContent .sortFilters").find(".Filter").css("display") == "none" && CustomPopupClose()
				});
				r > 1 ? $(window).unbind("beforeunload.sp").bind("beforeunload.sp", function() {
					if (window.location.search == "") window.history.replaceState("Products", null, window.location.href + "?showpage=" + r);
					else if (window.location.href.indexOf("showpage=") > -1) {
						let n = updateURLParameter(window.location.href, "showpage", r);
						window.history.replaceState("Products", null, n)
					} else window.history.replaceState("Products", null, window.location.href + "&showpage=" + r)
				}) : $(window).unbind("beforeunload.sp");
				ajaxRunning = !1
			},
			error: function(n) {
				console.log("error - " + n.responseText);
				jaxRunning = !1
			}
		})
	}
}

function nextPage(n, t, i) {
	n < 0 && t > 0 ? ChangeResultPage(t - 1) : n > 0 && t < i && ChangeResultPage(t + 1)
}

function ChangeResultSort(n) {
	var t = document.getElementById(serverObjectsSide.hTopFilter).value;
	t.toString() != n.toString() && (document.getElementById(serverObjectsSide.hTopFilterClosed).value = n, loadData("sortOrder", n));
	overlayBoxClose()
}

function ChangeItemsPerPage(n) {
	var t = document.getElementById(serverObjectsSide.hTopFilter).value;
	t.toString() != n.toString() && (document.getElementById(serverObjectsSide.cboCarModel).value = n, loadData("itemsPerPage", n))
}

function ChangeResultView(n) {
	var t = document.getElementById(serverObjectsSide.hResultView).value;
	t != n && (document.getElementById(serverObjectsSide.hResultView).value = n, loadData("resultView", n));
	$(".cmprBtn").length > 0 && $(".cmprBtn").hasClass("btn-primary") && $(".cmprBtn").removeClass("btn-primary").find("span").text("Compare")
}

function registerNewsletterSide() {
	document.getElementById(serverObjectsSide.hActionName).value = "registerNewsletter";
	__doPostBack("", "")
}

function removeCategoryFilter(n) {
	loadData("removeCategoryFilter", n)
}

function removeSubCategoryFilter(n) {
	loadData("removeSubCategoryFilter", n)
}

function removeSecCategoryFilter(n) {
	loadData("removeSecCategoryFilter", n)
}

function removeBrandFilter(n) {
	loadData("removeBrandFilter", n)
}

function removePriceFilter(n) {
	loadData("removePriceFilter", n)
}

function removeCustomFilter(n) {
	loadData("removeCustomFilter", n)
}

function removeInitialSearch() {
	loadData("removeInitialSearch", "")
}

function markForCarSearch() {
	showLoading();
	var t = document.getElementById(serverObjectsSide.cboCarMake),
		i = document.getElementById(serverObjectsSide.cboCarModel),
		r = document.getElementById(serverObjectsSide.cboCarYear),
		n = document.getElementById(serverObjectsSide.cboCarSubModel),
		u = document.getElementById(serverObjectsSide.hCarRedirectQuery),
		f = t.options[t.selectedIndex].value,
		e = i.options[i.selectedIndex].value,
		o = r.options[r.selectedIndex].value,
		s;
	hCarRed = u.value == "" ? "" : u.value;
	n == null ? (rememberVehicle(t, i, r), window.location.href = "" + serverObjectsSide.NonSecureURL + "/products?car=" + f + "-" + e + "-" + o + hCarRed) : (s = n && n.selectedIndex > 0 ? n.options[n.selectedIndex].value : "0", rememberVehicle(t, i, r), window.location.href = "" + serverObjectsSide.NonSecureURL + "/products?car=" + f + "-" + e + "-" + o + "-" + s + hCarRed)
}

function showFeedbackBox() {
	s_address = document.getElementById(serverObjectsSide.txtEmailFeedback).value;
	s_name = document.getElementById(serverObjectsSide.collapseControl4).value;
	s_comment = document.getElementById(serverObjectsSide.collapseControl5).value;
	f_email = "";
	document.getElementById("trRow2").style.display = "none";
	overlayBox.setup({
		content: document.getElementById("divFeedback").innerHTML,
		width: 600,
		padding: "20px"
	})
}

function sendFeedback() {
	document.getElementById(serverObjectsSide.collapseControl1).value = s_address;
	document.getElementById(serverObjectsSide.collapseControl10).value = s_name;
	document.getElementById(serverObjectsSide.collapseControl6).value = s_comment;
	document.getElementById(serverObjectsSide.femail).value = f_email;
	checkFeedbackEmail() == !1 ? alert("Please enter valid email address") : document.getElementById(serverObjectsSide.txtCommentFeedback).value == "" ? alert("Please enter your message") : (document.getElementById("waitDivSide").style.display = "inline", __doPostBack("", ""))
}

function checkFeedbackEmail() {
	var n = document.getElementById(serverObjectsSide.collapseControl2).value;
	return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(n) ? !0 : !1
}

function showConfirmationFeedback() {
	overlayBox.setup({
		content: document.getElementById("divFeedbackConfirmation").innerHTML,
		width: 500,
		height: 300
	})
}

function loadCarMakes() {
	var n = document.getElementById(serverObjectsSide.cboCarMake),
		s = document.getElementById(serverObjectsSide.cboCarYear),
		t, e, r, i, o, u, f, h;
	if (n) {
		for (n.options.length = 0, document.getElementById(serverObjectsSide.cboCarModel).options.length = 0, n.options[0] = new Option("Select Make", ""), t = s.options[s.selectedIndex].value, e = 1, r = 0; r < carsList.length; r++) {
			i = carsList[r];
			o = !1;
			t: for (u = 0; u < i.models.length; u++)
				if (f = i.models[u], h = f.gapyears.split(","), !($.inArray(parseFloat(t).toString(), h) > -1)) {
					var c = parseFloat(f.startyear),
						l = parseFloat(f.endyear),
						t = parseFloat(t);
					if (t >= c && t <= l) {
						o = !0;
						break t
					}
				} o && (n.options[e] = new Option(i.name, i.id), e++)
		}
		createTopSearch()
	}
	n.options.length == 2 && ($(n).find("option:nth-child(2)").prop("selected", !0), loadCarModels())
}

function menuItemById(n, t) {
	for (var i = 0; i < n.length; i++)
		if (n[i].id == t) return n[i]
}

function loadCarModels() {
	var f = document.getElementById(serverObjectsSide.cboCarMake),
		t = document.getElementById(serverObjectsSide.cboCarModel),
		e = document.getElementById(serverObjectsSide.cboCarYear),
		u, r, n, h;
	if (t.options.length = 0, u = f.options[f.selectedIndex].value, u == "") return !1;
	t.options[0] = new Option("Select Model", "");
	var o = menuItemById(carsList, u),
		i = e.options[e.selectedIndex].value,
		s = 1;
	for (r = 0; r < o.models.length; r++)
		if (n = o.models[r], h = n.gapyears.split(","), !($.inArray(String(i), h) > -1)) {
			var c = parseFloat(n.startyear),
				l = parseFloat(n.endyear),
				i = parseFloat(i);
			if (i >= c && i <= l) {
				t.options[s] = new Option(n.name, n.id);
				s++;
				continue
			}
		} createTopSearch();
	t.options.length == 2 && ($(t).find("option:nth-child(2)").prop("selected", !0), loadCarSubmodels())
}

function mapEvents() {
	if (typeof Sys.WebForms != "undefined") {
		var n = Sys.WebForms.PageRequestManager.getInstance();
		n && n.add_endRequest(EndRequest)
	}
}

function EndRequest(n) {
	var i = !0,
		t;
	try {
		n._postBackSettings.sourceElement.id.indexOf("searchBox") > 0 && (i = !1)
	} catch (r) {}
	setTimeout("showDelayedResult(" + i + ")", 10);
	setTimeout("createTopSearch()", 0);
	try {
		t = document.getElementById(serverObjectsSide.newsletterError);
		t.value != "" && (setTimeout(t.value, 0), t.value = "")
	} catch (r) {}
}

function loadCarYears() {
	var r, u, n, i;
	if (document.getElementById(serverObjectsSide.cboCarYear)) {
		document.getElementById(serverObjectsSide.cboCarYear).options.length = 0;
		var e = document.getElementById(serverObjectsSide.cboCarMake),
			o = document.getElementById(serverObjectsSide.cboCarModel),
			f = document.getElementById(serverObjectsSide.cboCarYear),
			t = new Date,
			s = t.getFullYear();
		for (month = t.getMonth(), r = serverObjectsSide.carMinYear, u = month >= 7 ? t.getFullYear() + 1 : t.getFullYear(), n = r; n <= u; n++) i = document.createElement("option"), i.value = n, i.innerHTML = n, $("#" + serverObjectsSide.cboCarYear + "").prepend(i);
		$(f).prepend('<option selected="selected">Select Year<\/option>');
		createTopSearch()
	}
}

function createTopSearch() {
	var s, n, t, i;
	if (document.getElementById("topVehicleSearch") && document.getElementById(serverObjectsSide.hVehicleSearch).value != "") {
		if (isMobile ? (s = $(".MobileCustomPopFilters"), i = s.length > 0 ? s.find("#topVehicleSearch")[0] : document.getElementById("topVehicleSearch")) : i = document.getElementById("topVehicleSearch"), i.innerHTML = document.getElementById(serverObjectsSide.hVehicleSearch).value, i.style.display = "block", i.style.visibility = "visible", i.innerHTML.toLowerCase().indexOf("/select>") > 0) {
			var f = document.getElementById(serverObjectsSide.cboCarMake),
				e = document.getElementById(serverObjectsSide.cboCarModel),
				o = document.getElementById(serverObjectsSide.cboCarYear),
				r = document.getElementById(serverObjectsSide.cboCarSubModel),
				h = document.getElementById("cboCarMake"),
				c = document.getElementById("cboCarModel"),
				l = document.getElementById("cboCarYear"),
				u = document.getElementById("cboCarSubmodel");
			for (n = 0; n < f.options.length; n++) t = new Option(f.options[n].text, f.options[n].value), f.selectedIndex == n && (t.selected = !0), h.options[n] = t;
			for (n = 0; n < e.options.length; n++) t = new Option(e.options[n].text, e.options[n].value), e.selectedIndex == n && (t.selected = !0), c.options[n] = t;
			for (n = 0; n < o.options.length; n++) t = new Option(o.options[n].text, o.options[n].value), o.selectedIndex == n && (t.selected = !0), l.options[n] = t;
			if (r != null && r.options.length > 0)
				for (n = 0; n < r.options.length; n++) t = new Option(r.options[n].text, r.options[n].value), r.selectedIndex == n && (t.selected = !0), u.options[n] = t, u.style.display = "", u.parentElement.style.display = "";
			else u.style.display = "none", u.parentElement.style.display = "none"
		}
		isMobile && head.load("https://jmautosports.com/scripts/pgJS/modules/msDropdown.js", function() {
			$(".SelectVehicleFieldsTD select").msDropDown({
				visibleRows: 10,
				rowHeight: 27
			})
		})
	} else i = document.getElementById("topVehicleSearch"), i && (i.style.display = "none", i.style.visibility = "hidden");
	return
}

function collapseControl() {
	for (var i, n, t = 0; t < filterBoxes.length; t++) i = document.getElementById(filterBoxes[t][1]), n = filterBoxes[t][0].match(/\d/g), n = n.join(""), document.getElementById("rbArrowImg" + n) && (document.getElementById("rbArrowImg" + n).className == "rightBoxBullet" && i.value == "on" || document.getElementById("rbArrowImg" + n).className == "rightBoxBullet_on" && i.value == "off") && expandCollapseBox(n)
}

function showResult(n, t) {
	var c, r, l, i, f, u, s, h;
	if (document.getElementById("tResult") && typeof serverObjectsSide != "undefined") {
		if (c = new String(document.getElementById(serverObjectsSide.hSearchResult).value), r = decodeHTML(c), t ? ($(".contentBody").hasClass("list") ? (l = r.replace(/^<table[^>]*>|<\/table>$/g, ""), $(".firstLoadedTable > tbody").append(l), $(".firstLoadedTable").find("tr:empty").remove()) : $(".contentBody").hasClass("grid") ? ($("#tResult").find(".contentBody").append(r), $("#tResult").find(".contentBody").children(".contentBody").contents().unwrap()) : $("#tResult").append(r), typeof bLazy != "undefined" && setTimeout(function() {
				bLazy.revalidate()
			}, 100)) : (createTopSearch(), $("#tResult").html(r), $(".contentBody").hasClass("list") && ($(".contentBody.list").addClass("firstLoadedTable"), $(".firstLoadedTable").find("tr:empty").remove(), $(".firstLoadedTable").prepend("<thead><\/thead>"), $(".firstLoadedTable").find("th").parent("tr").detach().prependTo($(".firstLoadedTable").find("thead"))), collapseControl(), serverObjectsSide.IsDiamondFilterFound == "True" ? head.load("https://jmautosports.com/scripts/pgJS/search-createfilters.js", function() {
				createJewelryFilters()
			}) : head.load("https://jmautosports.com/scripts/pgJS/search-createfilters.js", function() {
				createFilters()
			})), document.getElementById("tResult").innerHTML.indexOf("unexpected error occured") >= 0) return document.getElementById("tResult").innerHTML.indexOf("page not found") >= 0 ? $("#tResult").html('<span class="h1">Page not found.  Please retry your search.<\/span>') : $("#tResult").html('<span class="h1">Unexpected Error Occured.  Please retry your search<\/span>'), i = document.getElementById("topVehicleSearch"), i && (i.style.display = "none", i.style.visibility = "hidden", i.innerHTML = ""), document.getElementsByClassName("topFilterWrap")[0] != undefined && (i = document.getElementsByClassName("topFilterWrap")[0], i && (i.style.display = "none")), document.getElementsByClassName("BtmFilterWrap")[0] != undefined && (i = document.getElementsByClassName("BtmFilterWrap")[0], i && (i.style.display = "none")), document.getElementById("bottomBar") != undefined && (i = document.getElementById("bottomBar"), i && (i.style.display = "none")), !1;
		document.getElementById("amazonSearch").style.display = document.getElementById("tResult").innerHTML.indexOf("No Products Found") >= 0 ? "inline" : "inline";
		var a = document.getElementById(serverObjectsSide.hItemsPerPage).value,
			u = document.getElementById(serverObjectsSide.hCurrentPage).value,
			e = document.getElementById("cboSort"),
			y = document.getElementById(serverObjectsSide.hCurrentSort).value;
		for (f = 0; f < e.options.length; f++) e.options[f].value == y && (e.selectedIndex = f);
		serverObjectsSide.hideSort == "True" && (e.style.display = "none");
		var w = $(".lblCount"),
			o = document.getElementById(serverObjectsSide.hProductCount).value,
			v = document.getElementById(serverObjectsSide.hInitialSearch).value,
			p = (parseInt(u) - 1) * parseInt(a) + 1,
			b = p + parseInt(a) - 1;
		o.indexOf("<") >= 0 && (o = "");
		v.indexOf("<") >= 0 && (v = "");
		isMobile && $("#prodCountNum").html(o.toString());
		$(".lblCount").html(o.toString());
		n && document.getElementById("topVehicleSearch") && document.getElementById(serverObjectsSide.hVehicleSearch).value != "" && (document.getElementById(serverObjectsSide.hVehicleSearch).value.toLowerCase().indexOf("/select>") > 0 ? window.scrollTo(0, 295) : window.scrollTo(0, 195));
		u = parseInt(document.getElementById(serverObjectsSide.hCurrentPage).value);
		s = parseInt(document.getElementById(serverObjectsSide.hPages).value);
		u < s ? (h = Math.round(u * 100 / s), document.getElementById("bottomBar").innerHTML = "<center><div class='pagesProgress'><span>Page: " + u + " / " + s + "<\/span> <div class='progress'><div class='progress-bar' role='progressbar' style='width: " + h + "%' aria-valuenow='" + h + "' aria-valuemin='0' aria-valuemax='100'><\/div><\/div> <\/div> <a href=\"javascript:void(loadData('',''))\" class='btn btn-default btn-modern AlignCenter'>Load More<\/a><\/center>", document.getElementById("bottomBar").style.display = "block") : document.getElementById("bottomBar").style.display = "none"
	}
	jQuery.event.trigger("searchResultsUpdated");
	setTimeout(function() {
		equalizeGrid();
		noProductsFound();
		$(".cmprProd").length > 0 && hoverComparePop()
	}, 100);
	typeof bLazy != "undefined" && bLazy.revalidate()
}

function loadCarSubmodels() {
	var n = document.getElementById(serverObjectsSide.cboCarMake),
		t = document.getElementById(serverObjectsSide.cboCarModel),
		i = document.getElementById(serverObjectsSide.cboCarYear),
		r = document.getElementById(serverObjectsSide.cboCarSubModel),
		e, o;
	SetNewWidthVehicleSearchForms();
	r != null && (r.options.length = 0);
	var u = n.options[n.selectedIndex].value,
		f = t.options[t.selectedIndex].value,
		s = i.options[i.selectedIndex].value;
	if (u == "" || f == "") return !1;
	e = "https://jmautosports.com/ajaxGetSubmodels.aspx";
	o = new String("mk=" + u.toString() + "&ml=" + f.toString() + "&y=" + s.toString());
	ajaxProcess.getAjax(e, getResponseSideSubmodel, o, "POST")
}

function getResponseSideSubmodel(n) {
	document.readyState === "complete" || document.readyState == "interactive" ? aftergetResponseSideSubmodel(n) : document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
		aftergetResponseSideSubmodel(n)
	}) : document.attachEvent && (DOMContentLoaded = function() {
		(document.readyState === "complete" || document.readyState == "interactive") && (document.detachEvent("onreadystatechange", DOMContentLoaded), aftergetResponseSideSubmodel(n))
	})
}

function aftergetResponseSideSubmodel(n) {
	var h = document.getElementById(serverObjectsSide.cboCarMake),
		c = document.getElementById(serverObjectsSide.cboCarModel),
		u = document.getElementById(serverObjectsSide.cboCarSubModel),
		l = h.options[h.selectedIndex].value,
		a = c.options[c.selectedIndex].value,
		t, f, i, o, s, r, e;
	if (u == null) markForCarSearch();
	else if (n.length <= 0) markForCarSearch();
	else {
		for (t = 1; t <= carsList.length; t++)
			if (l == carsList[t - 1].id)
				for (f = 1; f <= carsList[t - 1].models.length; f++)
					if (a == carsList[t - 1].models[f - 1].id) {
						if (u.options[0] = new Option("Select Submodel", ""), i = carsList[t - 1].models[f - 1], i.submodels.length == null || i.submodels.length == 0) return markForCarSearch(), !0;
						for (o = n.split(","), s = 0, r = 1; r <= i.submodels.length; r++)
							for (e = 0; e < o.length; e++) o[e] == i.submodels[r - 1].id && (s++, u.options[s] = new Option(i.submodels[r - 1].name, i.submodels[r - 1].id))
					} u.options.length <= 2 && ($(u).find("option:nth-child(2)").prop("selected", !0), markForCarSearch())
	}
	createTopSearch()
}

function AjaxProcess() {
	this.getAjax = function(n, t, i, r) {
		var f, e, o = navigator.userAgent.toLowerCase(),
			u;
		e = o.indexOf("msie") != -1 ? parseInt(o.split("msie")[1]) : !1;
		f = e && e <= 9 ? !0 : !1;
		u = f == !1 && window.XMLHttpRequest ? new XMLHttpRequest : window.XDomainRequest ? new XDomainRequest : new ActiveXObject("Microsoft.XMLHTTP");
		u.onreadystatechange = function() {
			u.readyState == 4 && t(u.responseText)
		};
		f == !1 ? (r == "POST" ? u.open("POST", n, !0) : u.open("GET", n + "?" + i, !0), u.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r == "POST" ? u.send(i) : u.send()) : (window.XDomainRequest && (u.onload = function() {
			t(u.responseText)
		}), u.open("GET", n + "?" + i, !0), u.send())
	}
}
var timoutPt, timoutID = 0,
	currentContent = null,
	dtStamp = new Date,
	changeFlag = "",
	currentURL, filterBoxes, ajaxProcess;
if (document.location.href.toString().toLowerCase().indexOf("/products/") > -1) $(window).on("popstate", function() {
	loadData("refreshNav", location.href)
});
currentURL = new String;
typeof serverObjectsSide != "undefined" && serverObjectsSide.CurrentTabName == "products" && serverObjectsSide.popularSearch == "False" && (alreadyloading = !1, cLoads = 0, cAnchor = 0, $(window).scroll(function() {
	$(".MoreResultsBar").length > 0 && $(".MoreResultsBar").is(":visible") && $(window).scrollTop() + $(window).height() > $(".MoreResultsBar").offset().top + 300 && alreadyloading == !1 && $(".didYouMeanList").length <= 0 && (cLoads += 1, $(".contentBody.grid").append("<div class='srchAnc clearfix fl cb ld" + cLoads + "' data-cload='" + cLoads + "'><\/div>"), loadData("", ""))
}));
ajaxRunning = !1;
var s_address = "",
	s_name = "",
	s_comment = "",
	f_email = "";
typeof serverObjectsSide != "undefined" && (filterBoxes = [
	["collapseControl9", serverObjectsSide.collapseControl9, 9],
	["collapseControl3", serverObjectsSide.collapseControl3, 3],
	["collapseControl4", serverObjectsSide.collapseControl4, 4],
	["collapseControl5", serverObjectsSide.collapseControl5, 5],
	["collapseControl1", serverObjectsSide.collapseControl1, 1],
	["collapseControl10", serverObjectsSide.collapseControl10, 10],
	["collapseControl6", serverObjectsSide.collapseControl6, 6],
	["collapseControl7", serverObjectsSide.collapseControl7, 7],
	["collapseControl2", serverObjectsSide.collapseControl2, 2],
	["collapseControl11", serverObjectsSide.collapseControl11, 11]
]);
ajaxProcess = new AjaxProcess;

function BodyFeatures() {
	$(".productCellHome, .categoryCell").mouseenter(function() {
		ThisParBox = $(this);
		$(".productCellHome, .categoryCell").removeClass("Hover");
		setTimeout(function() {
			ThisParBox.addClass("Hover");
			ThisParBox.find(".productlistredtxt").show()
		}, 5)
	});
	$(".productCellHome, .categoryCell").mouseleave(function() {
		$(".productCellHome, .categoryCell").removeClass("Hover");
		$(this).find(".productlistredtxt").hide()
	});
	$("#sortFilterA0").length > 0 && $("#sortFilterA1").is(":empty") && $("#sortFilterA0").attr("rowspan", 0)
}
$(document).ready(function() {
	BodyFeatures()
});
$(document).ajaxComplete(function() {
	BodyFeatures()
});
