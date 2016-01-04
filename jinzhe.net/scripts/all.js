function tips() {
	setInterval(function() {
		$("#subtitle").fadeOut(function() {
			$(this).html(TIPS[Math.random() * TIPS.length >> 0]), $(this).fadeIn()
		})
	}, 1e4)
}

function show_tip(e, t, n) {
	if (0 == $("#tip").size()) {
		var i = ($(document).width() - n) / 2,
			r = ($(window).height() / 2 + $(document).scrollTop(), $("<div />"));
		r.attr("id", "tip"), r.css({
			left: i + "px",
			width: n + "px"
		}), $("body").append(r)
	} else var r = $("#tip");
	r.animate({
		top: 0
	}), r.html(e), t > 0 && setTimeout(function() {
		r.animate({
			top: "-40px"
		})
	}, 1e3 * t)
}

function cookie(e, t, n) {
	if ("undefined" == typeof t) {
		var i = null;
		if (document.cookie && "" != document.cookie)
			for (var r = document.cookie.split(";"), o = 0; o < r.length; o++) {
				var a = String(r[o]).replace(/(^\s*)|(\s*$ )/g, "");
				if (a.substring(0, e.length + 1) == e + "=") {
					i = decodeURIComponent(a.substring(e.length + 1));
					break
				}
			}
		return i
	}
	n = n || {}, null === t && (t = "", n.expires = -1);
	var s = "";
	if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
		var l;
		"number" == typeof n.expires ? (l = new Date, l.setTime(l.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : l = n.expires, s = "; expires=" + l.toUTCString()
	}
	var u = n.path ? "; path=" + n.path : "",
		c = n.domain ? "; domain=" + n.domain : "",
		p = n.secure ? "; secure" : "";
	document.cookie = [e, "=", encodeURIComponent(t), s, u, c, p].join("")
}! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = "length" in e && e.length,
			n = re.type(e);
		return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function i(e, t, n) {
		if (re.isFunction(t)) return re.grep(e, function(e, i) {
			return !!t.call(e, i, e) !== n
		});
		if (t.nodeType) return re.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (de.test(t)) return re.filter(t, e, n);
			t = re.filter(t, e)
		}
		return re.grep(e, function(e) {
			return re.inArray(e, t) >= 0 !== n
		})
	}

	function r(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function o(e) {
		var t = be[e] = {};
		return re.each(e.match(xe) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function a() {
		he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
	}

	function s() {
		(he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), re.ready())
	}

	function l(e, t, n) {
		if (void 0 === n && 1 === e.nodeType) {
			var i = "data-" + t.replace(Ee, "-$1").toLowerCase();
			if (n = e.getAttribute(i), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? re.parseJSON(n) : n
				} catch (r) {}
				re.data(e, t, n)
			} else n = void 0
		}
		return n
	}

	function u(e) {
		var t;
		for (t in e)
			if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function c(e, t, n, i) {
		if (re.acceptData(e)) {
			var r, o, a = re.expando,
				s = e.nodeType,
				l = s ? re.cache : e,
				u = s ? e[a] : e[a] && a;
			if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = V.pop() || re.guid++ : a), l[u] || (l[u] = s ? {} : {
				toJSON: re.noop
			}), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = re.extend(l[u], t) : l[u].data = re.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[re.camelCase(t)])) : r = o, r
		}
	}

	function p(e, t, n) {
		if (re.acceptData(e)) {
			var i, r, o = e.nodeType,
				a = o ? re.cache : e,
				s = o ? e[re.expando] : re.expando;
			if (a[s]) {
				if (t && (i = n ? a[s] : a[s].data)) {
					re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
					for (; r--;) delete i[t[r]];
					if (n ? !u(i) : !re.isEmptyObject(i)) return
				}(n || (delete a[s].data, u(a[s]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}

	function d() {
		return !0
	}

	function f() {
		return !1
	}

	function h() {
		try {
			return he.activeElement
		} catch (e) {}
	}

	function m(e) {
		var t = _e.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}

	function g(e, t) {
		var n, i, r = 0,
			o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
		if (!o)
			for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, g(i, t));
		return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], o) : o
	}

	function v(e) {
		De.test(e.type) && (e.defaultChecked = e.checked)
	}

	function y(e, t) {
		return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function x(e) {
		return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
	}

	function b(e) {
		var t = Ue.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function w(e, t) {
		for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
	}

	function T(e, t) {
		if (1 === t.nodeType && re.hasData(e)) {
			var n, i, r, o = re._data(e),
				a = re._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (i = 0, r = s[n].length; r > i; i++) re.event.add(t, n, s[n][i])
			}
			a.data && (a.data = re.extend({}, a.data))
		}
	}

	function C(e, t) {
		var n, i, r;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
				r = re._data(t);
				for (i in r.events) re.removeEvent(t, i, r.handle);
				t.removeAttribute(re.expando)
			}
			"script" === n && t.text !== e.text ? (x(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && De.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}

	function k(t, n) {
		var i, r = re(n.createElement(t)).appendTo(n.body),
			o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
		return r.detach(), o
	}

	function E(e) {
		var t = he,
			n = Ze[e];
		return n || (n = k(e, t), "none" !== n && n || (Ke = (Ke || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Ke.detach()), Ze[e] = n), n
	}

	function $(e, t) {
		return {
			get: function() {
				var n = e();
				return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
			}
		}
	}

	function N(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = dt.length; r--;)
			if (t = dt[r] + n, t in e) return t;
		return i
	}

	function S(e, t) {
		for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Se(i) && (o[a] = re._data(i, "olddisplay", E(i.nodeName)))) : (r = Se(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
		for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
		return e
	}

	function A(e, t, n) {
		var i = lt.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}

	function D(e, t, n, i, r) {
		for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += re.css(e, n + Ne[o], !0, r)), i ? ("content" === n && (a -= re.css(e, "padding" + Ne[o], !0, r)), "margin" !== n && (a -= re.css(e, "border" + Ne[o] + "Width", !0, r))) : (a += re.css(e, "padding" + Ne[o], !0, r), "padding" !== n && (a += re.css(e, "border" + Ne[o] + "Width", !0, r)));
		return a
	}

	function j(e, t, n) {
		var i = !0,
			r = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = et(e),
			a = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
		if (0 >= r || null == r) {
			if (r = tt(e, t, o), (0 > r || null == r) && (r = e.style[t]), it.test(r)) return r;
			i = a && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
		}
		return r + D(e, t, n || (a ? "border" : "content"), i, o) + "px"
	}

	function L(e, t, n, i, r) {
		return new L.prototype.init(e, t, n, i, r)
	}

	function H() {
		return setTimeout(function() {
			ft = void 0
		}), ft = re.now()
	}

	function F(e, t) {
		var n, i = {
				height: e
			},
			r = 0;
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ne[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function M(e, t, n) {
		for (var i, r = (xt[t] || []).concat(xt["*"]), o = 0, a = r.length; a > o; o++)
			if (i = r[o].call(n, t, e)) return i
	}

	function _(e, t, n) {
		var i, r, o, a, s, l, u, c, p = this,
			d = {},
			f = e.style,
			h = e.nodeType && Se(e),
			m = re._data(e, "fxshow");
		n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, p.always(function() {
			p.always(function() {
				s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = re.css(e, "display"), c = "none" === u ? re._data(e, "olddisplay") || E(e.nodeName) : u, "inline" === c && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || p.always(function() {
			f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
		}));
		for (i in t)
			if (r = t[i], mt.exec(r)) {
				if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
					if ("show" !== r || !m || void 0 === m[i]) continue;
					h = !0
				}
				d[i] = m && m[i] || re.style(e, i)
			} else u = void 0;
		if (re.isEmptyObject(d)) "inline" === ("none" === u ? E(e.nodeName) : u) && (f.display = u);
		else {
			m ? "hidden" in m && (h = m.hidden) : m = re._data(e, "fxshow", {}), o && (m.hidden = !h), h ? re(e).show() : p.done(function() {
				re(e).hide()
			}), p.done(function() {
				var t;
				re._removeData(e, "fxshow");
				for (t in d) re.style(e, t, d[t])
			});
			for (i in d) a = M(h ? m[i] : 0, i, p), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function q(e, t) {
		var n, i, r, o, a;
		for (n in e)
			if (i = re.camelCase(n), r = t[i], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = re.cssHooks[i], a && "expand" in a) {
				o = a.expand(o), delete e[i];
				for (n in o) n in e || (e[n] = o[n], t[n] = r)
			} else t[i] = r
	}

	function O(e, t, n) {
		var i, r, o = 0,
			a = yt.length,
			s = re.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (r) return !1;
				for (var t = ft || H(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
				return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
			},
			u = s.promise({
				elem: e,
				props: re.extend({}, t),
				opts: re.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: ft || H(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						i = t ? u.tweens.length : 0;
					if (r) return this;
					for (r = !0; i > n; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (q(c, u.opts.specialEasing); a > o; o++)
			if (i = yt[o].call(u, e, c, u.opts)) return i;
		return re.map(c, M, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function R(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, r = 0,
				o = t.toLowerCase().match(xe) || [];
			if (re.isFunction(n))
				for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function P(e, t, n, i) {
		function r(s) {
			var l;
			return o[s] = !0, re.each(e[s] || [], function(e, s) {
				var u = s(t, n, i);
				return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
			}), l
		}
		var o = {},
			a = e === zt;
		return r(t.dataTypes[0]) || !o["*"] && r("*")
	}

	function B(e, t) {
		var n, i, r = re.ajaxSettings.flatOptions || {};
		for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
		return n && re.extend(!0, e, n), e
	}

	function W(e, t, n) {
		for (var i, r, o, a, s = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (a in s)
				if (s[a] && s[a].test(r)) {
					l.unshift(a);
					break
				}
		if (l[0] in n) o = l[0];
		else {
			for (a in n) {
				if (!l[0] || e.converters[a + " " + l[0]]) {
					o = a;
					break
				}
				i || (i = a)
			}
			o = o || i
		}
		return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
	}

	function z(e, t, n, i) {
		var r, o, a, s, l, u = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
		for (o = c.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
				if ("*" === o) o = l;
				else if ("*" !== l && l !== o) {
			if (a = u[l + " " + o] || u["* " + o], !a)
				for (r in u)
					if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
						a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (p) {
					return {
						state: "parsererror",
						error: a ? p : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function X(e, t, n, i) {
		var r;
		if (re.isArray(t)) re.each(t, function(t, r) {
			n || Ut.test(e) ? i(e, r) : X(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
		});
		else if (n || "object" !== re.type(t)) i(e, t);
		else
			for (r in t) X(e + "[" + r + "]", t[r], n, i)
	}

	function I() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function Y() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function U(e) {
		return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var V = [],
		J = V.slice,
		Q = V.concat,
		G = V.push,
		K = V.indexOf,
		Z = {},
		ee = Z.toString,
		te = Z.hasOwnProperty,
		ne = {},
		ie = "1.11.3",
		re = function(e, t) {
			return new re.fn.init(e, t)
		},
		oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ae = /^-ms-/,
		se = /-([\da-z])/gi,
		le = function(e, t) {
			return t.toUpperCase()
		};
	re.fn = re.prototype = {
		jquery: ie,
		constructor: re,
		selector: "",
		length: 0,
		toArray: function() {
			return J.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
		},
		pushStack: function(e) {
			var t = re.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return re.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(re.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(J.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: G,
		sort: V.sort,
		splice: V.splice
	}, re.extend = re.fn.extend = function() {
		var e, t, n, i, r, o, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
			if (null != (r = arguments[s]))
				for (i in r) e = a[i], n = r[i], a !== n && (u && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {}, a[i] = re.extend(u, o, n)) : void 0 !== n && (a[i] = n));
		return a
	}, re.extend({
		expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === re.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === re.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !re.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			var t;
			if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
			try {
				if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (ne.ownLast)
				for (t in e) return te.call(e, t);
			for (t in e);
			return void 0 === t || te.call(e, t)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
		},
		globalEval: function(t) {
			t && re.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(ae, "ms-").replace(se, le)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, i) {
			var r, o = 0,
				a = e.length,
				s = n(e);
			if (i) {
				if (s)
					for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
				else
					for (o in e)
						if (r = t.apply(e[o], i), r === !1) break
			} else if (s)
				for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
			else
				for (o in e)
					if (r = t.call(e[o], o, e[o]), r === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(oe, "")
		},
		makeArray: function(e, t) {
			var i = t || [];
			return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : G.call(i, e)), i
		},
		inArray: function(e, t, n) {
			var i;
			if (t) {
				if (K) return K.call(t, e, n);
				for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, t) {
			for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
			if (n !== n)
				for (; void 0 !== t[i];) e[r++] = t[i++];
			return e.length = r, e
		},
		grep: function(e, t, n) {
			for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
			return r
		},
		map: function(e, t, i) {
			var r, o = 0,
				a = e.length,
				s = n(e),
				l = [];
			if (s)
				for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
			else
				for (o in e) r = t(e[o], o, i), null != r && l.push(r);
			return Q.apply([], l)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, i, r;
			return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = J.call(arguments, 2), i = function() {
				return e.apply(t || this, n.concat(J.call(arguments)))
			}, i.guid = e.guid = e.guid || re.guid++, i) : void 0
		},
		now: function() {
			return +new Date
		},
		support: ne
	}), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		Z["[object " + t + "]"] = t.toLowerCase()
	});
	var ue = function(e) {
		function t(e, t, n, i) {
			var r, o, a, s, l, u, p, f, h, m;
			if ((t ? t.ownerDocument || t : P) !== L && j(t), t = t || L, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
			if (!i && F) {
				if (11 !== s && (r = ye.exec(e)))
					if (a = r[1]) {
						if (9 === s) {
							if (o = t.getElementById(a), !o || !o.parentNode) return n;
							if (o.id === a) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o), n
					} else {
						if (r[2]) return K.apply(n, t.getElementsByTagName(e)), n;
						if ((a = r[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
					}
				if (w.qsa && (!M || !M.test(e))) {
					if (f = p = R, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						for (u = E(e), (p = t.getAttribute("id")) ? f = p.replace(be, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
						h = xe.test(e) && c(t.parentNode) || t, m = u.join(",")
					}
					if (m) try {
						return K.apply(n, h.querySelectorAll(m)), n
					} catch (g) {} finally {
						p || t.removeAttribute("id")
					}
				}
			}
			return N(e.replace(le, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[R] = !0, e
		}

		function r(e) {
			var t = L.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
		}

		function a(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function l(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function u(e) {
			return i(function(t) {
				return t = +t, i(function(n, i) {
					for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
				})
			})
		}

		function c(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function p() {}

		function d(e) {
			for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
			return i
		}

		function f(e, t, n) {
			var i = t.dir,
				r = n && "parentNode" === i,
				o = W++;
			return t.first ? function(t, n, o) {
				for (; t = t[i];)
					if (1 === t.nodeType || r) return e(t, n, o)
			} : function(t, n, a) {
				var s, l, u = [B, o];
				if (a) {
					for (; t = t[i];)
						if ((1 === t.nodeType || r) && e(t, n, a)) return !0
				} else
					for (; t = t[i];)
						if (1 === t.nodeType || r) {
							if (l = t[R] || (t[R] = {}), (s = l[i]) && s[0] === B && s[1] === o) return u[2] = s[2];
							if (l[i] = u, u[2] = e(t, n, a)) return !0
						}
			}
		}

		function h(e) {
			return e.length > 1 ? function(t, n, i) {
				for (var r = e.length; r--;)
					if (!e[r](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function m(e, n, i) {
			for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
			return i
		}

		function g(e, t, n, i, r) {
			for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
			return a
		}

		function v(e, t, n, r, o, a) {
			return r && !r[R] && (r = v(r)), o && !o[R] && (o = v(o, a)), i(function(i, a, s, l) {
				var u, c, p, d = [],
					f = [],
					h = a.length,
					v = i || m(t || "*", s.nodeType ? [s] : s, []),
					y = !e || !i && t ? v : g(v, d, e, s, l),
					x = n ? o || (i ? e : h || r) ? [] : a : y;
				if (n && n(y, x, s, l), r)
					for (u = g(x, f), r(u, [], s, l), c = u.length; c--;)(p = u[c]) && (x[f[c]] = !(y[f[c]] = p));
				if (i) {
					if (o || e) {
						if (o) {
							for (u = [], c = x.length; c--;)(p = x[c]) && u.push(y[c] = p);
							o(null, x = [], u, l)
						}
						for (c = x.length; c--;)(p = x[c]) && (u = o ? ee(i, p) : d[c]) > -1 && (i[u] = !(a[u] = p))
					}
				} else x = g(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, l) : K.apply(a, x)
			})
		}

		function y(e) {
			for (var t, n, i, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = f(function(e) {
					return e === t
				}, a, !0), u = f(function(e) {
					return ee(t, e) > -1
				}, a, !0), c = [function(e, n, i) {
					var r = !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
					return t = null, r
				}]; r > s; s++)
				if (n = T.relative[e[s].type]) c = [f(h(c), n)];
				else {
					if (n = T.filter[e[s].type].apply(null, e[s].matches), n[R]) {
						for (i = ++s; r > i && !T.relative[e[i].type]; i++);
						return v(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(le, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && d(e))
					}
					c.push(n)
				}
			return h(c)
		}

		function x(e, n) {
			var r = n.length > 0,
				o = e.length > 0,
				a = function(i, a, s, l, u) {
					var c, p, d, f = 0,
						h = "0",
						m = i && [],
						v = [],
						y = S,
						x = i || o && T.find.TAG("*", u),
						b = B += null == y ? 1 : Math.random() || .1,
						w = x.length;
					for (u && (S = a !== L && a); h !== w && null != (c = x[h]); h++) {
						if (o && c) {
							for (p = 0; d = e[p++];)
								if (d(c, a, s)) {
									l.push(c);
									break
								}
							u && (B = b)
						}
						r && ((c = !d && c) && f--, i && m.push(c))
					}
					if (f += h, r && h !== f) {
						for (p = 0; d = n[p++];) d(m, v, a, s);
						if (i) {
							if (f > 0)
								for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
							v = g(v)
						}
						K.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
					}
					return u && (B = b, S = y), m
				};
			return r ? i(a) : a
		}
		var b, w, T, C, k, E, $, N, S, A, D, j, L, H, F, M, _, q, O, R = "sizzle" + 1 * new Date,
			P = e.document,
			B = 0,
			W = 0,
			z = n(),
			X = n(),
			I = n(),
			Y = function(e, t) {
				return e === t && (D = !0), 0
			},
			U = 1 << 31,
			V = {}.hasOwnProperty,
			J = [],
			Q = J.pop,
			G = J.push,
			K = J.push,
			Z = J.slice,
			ee = function(e, t) {
				for (var n = 0, i = e.length; i > n; n++)
					if (e[n] === t) return n;
				return -1
			},
			te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ne = "[\\x20\\t\\r\\n\\f]",
			ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			re = ie.replace("w", "w#"),
			oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
			ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
			se = new RegExp(ne + "+", "g"),
			le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			ue = new RegExp("^" + ne + "*," + ne + "*"),
			ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			de = new RegExp(ae),
			fe = new RegExp("^" + re + "$"),
			he = {
				ID: new RegExp("^#(" + ie + ")"),
				CLASS: new RegExp("^\\.(" + ie + ")"),
				TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + oe),
				PSEUDO: new RegExp("^" + ae),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + te + ")$", "i"),
				needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
			},
			me = /^(?:input|select|textarea|button)$/i,
			ge = /^h\d$/i,
			ve = /^[^{]+\{\s*\[native \w/,
			ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			xe = /[+~]/,
			be = /'|\\/g,
			we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			Te = function(e, t, n) {
				var i = "0x" + t - 65536;
				return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			Ce = function() {
				j()
			};
		try {
			K.apply(J = Z.call(P.childNodes), P.childNodes), J[P.childNodes.length].nodeType
		} catch (ke) {
			K = {
				apply: J.length ? function(e, t) {
					G.apply(e, Z.call(t))
				} : function(e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		w = t.support = {}, k = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, j = t.setDocument = function(e) {
			var t, n, i = e ? e.ownerDocument || e : P;
			return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, H = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), F = !k(i), w.attributes = r(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), w.getElementsByTagName = r(function(e) {
				return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
			}), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = r(function(e) {
				return H.appendChild(e).id = R, !i.getElementsByName || !i.getElementsByName(R).length
			}), w.getById ? (T.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && F) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, T.filter.ID = function(e) {
				var t = e.replace(we, Te);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete T.find.ID, T.filter.ID = function(e) {
				var t = e.replace(we, Te);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), T.find.TAG = w.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, i = [],
					r = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[r++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return o
			}, T.find.CLASS = w.getElementsByClassName && function(e, t) {
				return F ? t.getElementsByClassName(e) : void 0
			}, _ = [], M = [], (w.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
				H.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || M.push(".#.+[+~]")
			}), r(function(e) {
				var t = i.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
			})), (w.matchesSelector = ve.test(q = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && r(function(e) {
				w.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), _.push("!=", ae)
			}), M = M.length && new RegExp(M.join("|")), _ = _.length && new RegExp(_.join("|")), t = ve.test(H.compareDocumentPosition), O = t || ve.test(H.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, Y = t ? function(e, t) {
				if (e === t) return D = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === P && O(P, e) ? -1 : t === i || t.ownerDocument === P && O(P, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if (e === t) return D = !0, 0;
				var n, r = 0,
					o = e.parentNode,
					s = t.parentNode,
					l = [e],
					u = [t];
				if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
				if (o === s) return a(e, t);
				for (n = e; n = n.parentNode;) l.unshift(n);
				for (n = t; n = n.parentNode;) u.unshift(n);
				for (; l[r] === u[r];) r++;
				return r ? a(l[r], u[r]) : l[r] === P ? -1 : u[r] === P ? 1 : 0
			}, i) : L
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if ((e.ownerDocument || e) !== L && j(e), n = n.replace(pe, "='$1']"), !(!w.matchesSelector || !F || _ && _.test(n) || M && M.test(n))) try {
				var i = q.call(e, n);
				if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (r) {}
			return t(n, L, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== L && j(e), O(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== L && j(e);
			var n = T.attrHandle[t.toLowerCase()],
				i = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
			return void 0 !== i ? i : w.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				i = 0,
				r = 0;
			if (D = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(Y), D) {
				for (; t = e[r++];) t === e[r] && (i = n.push(r));
				for (; i--;) e.splice(n[i], 1)
			}
			return A = null, e
		}, C = t.getText = function(e) {
			var t, n = "",
				i = 0,
				r = e.nodeType;
			if (r) {
				if (1 === r || 9 === r || 11 === r) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
				} else if (3 === r || 4 === r) return e.nodeValue
			} else
				for (; t = e[i++];) n += C(t);
			return n
		}, T = t.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: he,
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
				ATTR: function(e) {
					return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(we, Te).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = z[e + " "];
					return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, i) {
					return function(r) {
						var o = t.attr(r, e);
						return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, i, r) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === i && 0 === r ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var u, c, p, d, f, h, m = o !== a ? "nextSibling" : "previousSibling",
							g = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							y = !l && !s;
						if (g) {
							if (o) {
								for (; m;) {
									for (p = t; p = p[m];)
										if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
									h = m = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? g.firstChild : g.lastChild], a && y) {
								for (c = g[R] || (g[R] = {}), u = c[e] || [], f = u[0] === B && u[1], d = u[0] === B && u[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (d = f = 0) || h.pop();)
									if (1 === p.nodeType && ++d && p === t) {
										c[e] = [B, f, d];
										break
									}
							} else if (y && (u = (t[R] || (t[R] = {}))[e]) && u[0] === B) d = u[1];
							else
								for (;
									(p = ++f && p && p[m] || (d = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[R] || (p[R] = {}))[e] = [B, d]), p !== t)););
							return d -= r, d === i || d % i === 0 && d / i >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
						for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
					}) : function(e) {
						return o(e, 0, r)
					}) : o
				}
			},
			pseudos: {
				not: i(function(e) {
					var t = [],
						n = [],
						r = $(e.replace(le, "$1"));
					return r[R] ? i(function(e, t, n, i) {
						for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, i, o) {
						return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
					}
				}),
				has: i(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: i(function(e) {
					return e = e.replace(we, Te),
						function(t) {
							return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
						}
				}),
				lang: i(function(e) {
					return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
						function(t) {
							var n;
							do
								if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === H
				},
				focus: function(e) {
					return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !T.pseudos.empty(e)
				},
				header: function(e) {
					return ge.test(e.nodeName)
				},
				input: function(e) {
					return me.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: u(function() {
					return [0]
				}),
				last: u(function(e, t) {
					return [t - 1]
				}),
				eq: u(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: u(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: u(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: u(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: u(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}, T.pseudos.nth = T.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) T.pseudos[b] = s(b);
		for (b in {
				submit: !0,
				reset: !0
			}) T.pseudos[b] = l(b);
		return p.prototype = T.filters = T.pseudos, T.setFilters = new p, E = t.tokenize = function(e, n) {
			var i, r, o, a, s, l, u, c = X[e + " "];
			if (c) return n ? 0 : c.slice(0);
			for (s = e, l = [], u = T.preFilter; s;) {
				(!i || (r = ue.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
					value: i,
					type: r[0].replace(le, " ")
				}), s = s.slice(i.length));
				for (a in T.filter) !(r = he[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
					value: i,
					type: a,
					matches: r
				}), s = s.slice(i.length));
				if (!i) break
			}
			return n ? s.length : s ? t.error(e) : X(e, l).slice(0)
		}, $ = t.compile = function(e, t) {
			var n, i = [],
				r = [],
				o = I[e + " "];
			if (!o) {
				for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[R] ? i.push(o) : r.push(o);
				o = I(e, x(r, i)), o.selector = e
			}
			return o
		}, N = t.select = function(e, t, n, i) {
			var r, o, a, s, l, u = "function" == typeof e && e,
				p = !i && E(e = u.selector || e);
			if (n = n || [], 1 === p.length) {
				if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && F && T.relative[o[1].type]) {
					if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
					u && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !T.relative[s = a.type]);)
					if ((l = T.find[s]) && (i = l(a.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
						if (o.splice(r, 1), e = i.length && d(o), !e) return K.apply(n, i), n;
						break
					}
			}
			return (u || $(e, p))(i, t, !F, n, xe.test(e) && c(t.parentNode) || t), n
		}, w.sortStable = R.split("").sort(Y).join("") === R, w.detectDuplicates = !!D, j(), w.sortDetached = r(function(e) {
			return 1 & e.compareDocumentPosition(L.createElement("div"))
		}), r(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), w.attributes && r(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), r(function(e) {
			return null == e.getAttribute("disabled")
		}) || o(te, function(e, t, n) {
			var i;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
	var ce = re.expr.match.needsContext,
		pe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		de = /^.[^:#\[\.,]*$/;
	re.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, re.fn.extend({
		find: function(e) {
			var t, n = [],
				i = this,
				r = i.length;
			if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
				for (t = 0; r > t; t++)
					if (re.contains(i[t], this)) return !0
			}));
			for (t = 0; r > t; t++) re.find(e, i[t], n);
			return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function(e) {
			return this.pushStack(i(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(i(this, e || [], !0))
		},
		is: function(e) {
			return !!i(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length
		}
	});
	var fe, he = e.document,
		me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ge = re.fn.init = function(e, t) {
			var n, i;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), pe.test(n[1]) && re.isPlainObject(t))
						for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				if (i = he.getElementById(n[2]), i && i.parentNode) {
					if (i.id !== n[2]) return fe.find(e);
					this.length = 1, this[0] = i
				}
				return this.context = he, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
		};
	ge.prototype = re.fn, fe = re(he);
	var ve = /^(?:parents|prev(?:Until|All))/,
		ye = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	re.extend({
		dir: function(e, t, n) {
			for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
			return i
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), re.fn.extend({
		has: function(e) {
			var t, n = re(e, this),
				i = n.length;
			return this.filter(function() {
				for (t = 0; i > t; t++)
					if (re.contains(this, n[t])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, i = 0, r = this.length, o = [], a = ce.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
				for (n = this[i]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? re.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), re.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return re.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return re.dir(e, "parentNode", n)
		},
		next: function(e) {
			return r(e, "nextSibling")
		},
		prev: function(e) {
			return r(e, "previousSibling")
		},
		nextAll: function(e) {
			return re.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return re.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return re.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return re.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return re.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return re.sibling(e.firstChild)
		},
		contents: function(e) {
			return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
		}
	}, function(e, t) {
		re.fn[e] = function(n, i) {
			var r = re.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[e] || (r = re.unique(r)), ve.test(e) && (r = r.reverse())), this.pushStack(r)
		}
	});
	var xe = /\S+/g,
		be = {};
	re.Callbacks = function(e) {
		e = "string" == typeof e ? be[e] || o(e) : re.extend({}, e);
		var t, n, i, r, a, s, l = [],
			u = !e.once && [],
			c = function(o) {
				for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++)
					if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
				t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : p.disable())
			},
			p = {
				add: function() {
					if (l) {
						var i = l.length;
						! function o(t) {
							re.each(t, function(t, n) {
								var i = re.type(n);
								"function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
							})
						}(arguments), t ? r = l.length : n && (s = i, c(n))
					}
					return this
				},
				remove: function() {
					return l && re.each(arguments, function(e, n) {
						for (var i;
							(i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, a >= i && a--)
					}), this
				},
				has: function(e) {
					return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], r = 0, this
				},
				disable: function() {
					return l = u = n = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return u = void 0, n || p.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, n) {
					return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
				},
				fire: function() {
					return p.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return p
	}, re.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", re.Callbacks("once memory"), "resolved"],
					["reject", "fail", re.Callbacks("once memory"), "rejected"],
					["notify", "progress", re.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return re.Deferred(function(n) {
							re.each(t, function(t, o) {
								var a = re.isFunction(e[t]) && e[t];
								r[o[1]](function() {
									var e = a && a.apply(this, arguments);
									e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? re.extend(e, i) : i
					}
				},
				r = {};
			return i.pipe = i.then, re.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				i[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
					return r[o[0] + "With"](this === r ? i : this, arguments), this
				}, r[o[0] + "With"] = a.fireWith
			}), i.promise(r), e && e.call(r, r), r
		},
		when: function(e) {
			var t, n, i, r = 0,
				o = J.call(arguments),
				a = o.length,
				s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
				l = 1 === s ? e : re.Deferred(),
				u = function(e, n, i) {
					return function(r) {
						n[e] = this, i[e] = arguments.length > 1 ? J.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
					}
				};
			if (a > 1)
				for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
			return s || l.resolveWith(i, o), l.promise()
		}
	});
	var we;
	re.fn.ready = function(e) {
		return re.ready.promise().done(e), this
	}, re.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? re.readyWait++ : re.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--re.readyWait : !re.isReady) {
				if (!he.body) return setTimeout(re.ready);
				re.isReady = !0, e !== !0 && --re.readyWait > 0 || (we.resolveWith(he, [re]), re.fn.triggerHandler && (re(he).triggerHandler("ready"), re(he).off("ready")))
			}
		}
	}), re.ready.promise = function(t) {
		if (!we)
			if (we = re.Deferred(), "complete" === he.readyState) setTimeout(re.ready);
			else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
		else {
			he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
			var n = !1;
			try {
				n = null == e.frameElement && he.documentElement
			} catch (i) {}
			n && n.doScroll && ! function r() {
				if (!re.isReady) {
					try {
						n.doScroll("left")
					} catch (e) {
						return setTimeout(r, 50)
					}
					a(), re.ready()
				}
			}()
		}
		return we.promise(t)
	};
	var Te, Ce = "undefined";
	for (Te in re(ne)) break;
	ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, re(function() {
			var e, t, n, i;
			n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
		}),
		function() {
			var e = he.createElement("div");
			if (null == ne.deleteExpando) {
				ne.deleteExpando = !0;
				try {
					delete e.test
				} catch (t) {
					ne.deleteExpando = !1
				}
			}
			e = null
		}(), re.acceptData = function(e) {
			var t = re.noData[(e.nodeName + " ").toLowerCase()],
				n = +e.nodeType || 1;
			return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
		};
	var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ee = /([A-Z])/g;
	re.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !u(e)
		},
		data: function(e, t, n) {
			return c(e, t, n)
		},
		removeData: function(e, t) {
			return p(e, t)
		},
		_data: function(e, t, n) {
			return c(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return p(e, t, !0)
		}
	}), re.fn.extend({
		data: function(e, t) {
			var n, i, r, o = this[0],
				a = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
					for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
					re._data(o, "parsedAttrs", !0)
				}
				return r
			}
			return "object" == typeof e ? this.each(function() {
				re.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				re.data(this, e, t)
			}) : o ? l(o, e, re.data(o, e)) : void 0
		},
		removeData: function(e) {
			return this.each(function() {
				re.removeData(this, e)
			})
		}
	}), re.extend({
		queue: function(e, t, n) {
			var i;
			return e ? (t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = re.queue(e, t),
				i = n.length,
				r = n.shift(),
				o = re._queueHooks(e, t),
				a = function() {
					re.dequeue(e, t)
				};
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return re._data(e, n) || re._data(e, n, {
				empty: re.Callbacks("once memory").add(function() {
					re._removeData(e, t + "queue"), re._removeData(e, n)
				})
			})
		}
	}), re.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = re.queue(this, e, t);
				re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				re.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, i = 1,
				r = re.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--i || r.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = re._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
			return s(), r.promise(t)
		}
	});
	var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Ne = ["Top", "Right", "Bottom", "Left"],
		Se = function(e, t) {
			return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
		},
		Ae = re.access = function(e, t, n, i, r, o, a) {
			var s = 0,
				l = e.length,
				u = null == n;
			if ("object" === re.type(n)) {
				r = !0;
				for (s in n) re.access(e, t, s, n[s], !0, o, a)
			} else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
					return u.call(re(e), n)
				})), t))
				for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
			return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
		},
		De = /^(?:checkbox|radio)$/i;
	! function() {
		var e = he.createElement("input"),
			t = he.createElement("div"),
			n = he.createDocumentFragment();
		if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
				ne.noCloneEvent = !1
			}), t.cloneNode(!0).click()), null == ne.deleteExpando) {
			ne.deleteExpando = !0;
			try {
				delete t.test
			} catch (i) {
				ne.deleteExpando = !1
			}
		}
	}(),
	function() {
		var t, n, i = he.createElement("div");
		for (t in {
				submit: !0,
				change: !0,
				focusin: !0
			}) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
		i = null
	}();
	var je = /^(?:input|select|textarea)$/i,
		Le = /^key/,
		He = /^(?:mouse|pointer|contextmenu)|click/,
		Fe = /^(?:focusinfocus|focusoutblur)$/,
		Me = /^([^.]*)(?:\.(.+)|)$/;
	re.event = {
		global: {},
		add: function(e, t, n, i, r) {
			var o, a, s, l, u, c, p, d, f, h, m, g = re._data(e);
			if (g) {
				for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
						return typeof re === Ce || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
					}, c.elem = e), t = (t || "").match(xe) || [""], s = t.length; s--;) o = Me.exec(t[s]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (u = re.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = re.event.special[f] || {}, p = re.extend({
					type: f,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && re.expr.match.needsContext.test(r),
					namespace: h.join(".")
				}, l), (d = a[f]) || (d = a[f] = [], d.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, p) : d.push(p), re.event.global[f] = !0);
				e = null
			}
		},
		remove: function(e, t, n, i, r) {
			var o, a, s, l, u, c, p, d, f, h, m, g = re.hasData(e) && re._data(e);
			if (g && (c = g.events)) {
				for (t = (t || "").match(xe) || [""], u = t.length; u--;)
					if (s = Me.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
						for (p = re.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, p.remove && p.remove.call(e, a));
						l && !d.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || re.removeEvent(e, f, g.handle), delete c[f])
					} else
						for (f in c) re.event.remove(e, f + t[u], n, i, !0);
				re.isEmptyObject(c) && (delete g.handle, re._removeData(e, "events"))
			}
		},
		trigger: function(t, n, i, r) {
			var o, a, s, l, u, c, p, d = [i || he],
				f = te.call(t, "type") ? t.type : t,
				h = te.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = c = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !Fe.test(f + re.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[re.expando] ? t : new re.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), u = re.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
				if (!r && !u.noBubble && !re.isWindow(i)) {
					for (l = u.delegateType || f, Fe.test(l + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
					c === (i.ownerDocument || he) && d.push(c.defaultView || c.parentWindow || e)
				}
				for (p = 0;
					(s = d[p++]) && !t.isPropagationStopped();) t.type = p > 1 ? l : u.bindType || f, o = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && re.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
				if (t.type = f, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && re.acceptData(i) && a && i[f] && !re.isWindow(i)) {
					c = i[a], c && (i[a] = null), re.event.triggered = f;
					try {
						i[f]()
					} catch (m) {}
					re.event.triggered = void 0, c && (i[a] = c)
				}
				return t.result
			}
		},
		dispatch: function(e) {
			e = re.event.fix(e);
			var t, n, i, r, o, a = [],
				s = J.call(arguments),
				l = (re._data(this, "events") || {})[e.type] || [],
				u = re.event.special[e.type] || {};
			if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
				for (a = re.event.handlers.call(this, e, l), t = 0;
					(r = a[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = r.elem, o = 0;
						(i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, i, r, o, a = [],
				s = t.delegateCount,
				l = e.target;
			if (s && l.nodeType && (!e.button || "click" !== e.type))
				for (; l != this; l = l.parentNode || this)
					if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
						for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
						r.length && a.push({
							elem: l,
							handlers: r
						})
					}
			return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		fix: function(e) {
			if (e[re.expando]) return e;
			var t, n, i, r = e.type,
				o = e,
				a = this.fixHooks[r];
			for (a || (this.fixHooks[r] = a = He.test(r) ? this.mouseHooks : Le.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, i, r, o = t.button,
					a = t.fromElement;
				return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== h() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === h() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return re.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, i) {
			var r = re.extend(new re.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
		}
	}, re.removeEvent = he.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var i = "on" + t;
		e.detachEvent && (typeof e[i] === Ce && (e[i] = null), e.detachEvent(i, n))
	}, re.Event = function(e, t) {
		return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : f) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
	}, re.Event.prototype = {
		isDefaultPrevented: f,
		isPropagationStopped: f,
		isImmediatePropagationStopped: f,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = d, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, re.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		re.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, i = this,
					r = e.relatedTarget,
					o = e.handleObj;
				return (!r || r !== i && !re.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), ne.submitBubbles || (re.event.special.submit = {
		setup: function() {
			return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
				var t = e.target,
					n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
				n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), re._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
		}
	}), ne.changeBubbles || (re.event.special.change = {
		setup: function() {
			return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), re.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
			})), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				je.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
				}), re._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return re.event.remove(this, "._change"), !je.test(this.nodeName)
		}
	}), ne.focusinBubbles || re.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			re.event.simulate(t, e.target, re.event.fix(e), !0)
		};
		re.event.special[t] = {
			setup: function() {
				var i = this.ownerDocument || this,
					r = re._data(i, t);
				r || i.addEventListener(e, n, !0), re._data(i, t, (r || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this,
					r = re._data(i, t) - 1;
				r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
			}
		}
	}), re.fn.extend({
		on: function(e, t, n, i, r) {
			var o, a;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (o in e) this.on(o, t, n, e[o], r);
				return this
			}
			if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
			else if (!i) return this;
			return 1 === r && (a = i, i = function(e) {
				return re().off(e), a.apply(this, arguments)
			}, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
				re.event.add(this, e, i, n, t)
			})
		},
		one: function(e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, r;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (r in e) this.off(r, t, e[r]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
				re.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				re.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? re.event.trigger(e, t, n, !0) : void 0
		}
	});
	var _e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		qe = / jQuery\d+="(?:null|\d+)"/g,
		Oe = new RegExp("<(?:" + _e + ")[\\s/>]", "i"),
		Re = /^\s+/,
		Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Be = /<([\w:]+)/,
		We = /<tbody/i,
		ze = /<|&#?\w+;/,
		Xe = /<(?:script|style|link)/i,
		Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ye = /^$|\/(?:java|ecma)script/i,
		Ue = /^true\/(.*)/,
		Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Je = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Qe = m(he),
		Ge = Qe.appendChild(he.createElement("div"));
	Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, re.extend({
		clone: function(e, t, n) {
			var i, r, o, a, s, l = re.contains(e.ownerDocument, e);
			if (ne.html5Clone || re.isXMLDoc(e) || !Oe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(o = Ge.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
				for (i = g(o), s = g(e), a = 0; null != (r = s[a]); ++a) i[a] && C(r, i[a]);
			if (t)
				if (n)
					for (s = s || g(e), i = i || g(o), a = 0; null != (r = s[a]); a++) T(r, i[a]);
				else T(e, o);
			return i = g(o, "script"), i.length > 0 && w(i, !l && g(e, "script")), i = s = r = null, o
		},
		buildFragment: function(e, t, n, i) {
			for (var r, o, a, s, l, u, c, p = e.length, d = m(t), f = [], h = 0; p > h; h++)
				if (o = e[h], o || 0 === o)
					if ("object" === re.type(o)) re.merge(f, o.nodeType ? [o] : o);
					else if (ze.test(o)) {
				for (s = s || d.appendChild(t.createElement("div")), l = (Be.exec(o) || ["", ""])[1].toLowerCase(), c = Je[l] || Je._default, s.innerHTML = c[1] + o.replace(Pe, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
				if (!ne.leadingWhitespace && Re.test(o) && f.push(t.createTextNode(Re.exec(o)[0])), !ne.tbody)
					for (o = "table" !== l || We.test(o) ? "<table>" !== c[1] || We.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
				for (re.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = d.lastChild
			} else f.push(t.createTextNode(o));
			for (s && d.removeChild(s), ne.appendChecked || re.grep(g(f, "input"), v), h = 0; o = f[h++];)
				if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = g(d.appendChild(o), "script"), a && w(s), n))
					for (r = 0; o = s[r++];) Ye.test(o.type || "") && n.push(o);
			return s = null, d
		},
		cleanData: function(e, t) {
			for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, u = ne.deleteExpando, c = re.event.special; null != (n = e[a]); a++)
				if ((t || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
					if (o.events)
						for (i in o.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
					l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, V.push(r))
				}
		}
	}), re.fn.extend({
		text: function(e) {
			return Ae(this, function(e) {
				return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && re.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return re.clone(this, e, t)
			})
		},
		html: function(e) {
			return Ae(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(qe, "") : void 0;
				if (!("string" != typeof e || Xe.test(e) || !ne.htmlSerialize && Oe.test(e) || !ne.leadingWhitespace && Re.test(e) || Je[(Be.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(Pe, "<$1></$2>");
					try {
						for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(g(t, !1)), t.innerHTML = e);
						t = 0
					} catch (r) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, re.cleanData(g(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = Q.apply([], e);
			var n, i, r, o, a, s, l = 0,
				u = this.length,
				c = this,
				p = u - 1,
				d = e[0],
				f = re.isFunction(d);
			if (f || u > 1 && "string" == typeof d && !ne.checkClone && Ie.test(d)) return this.each(function(n) {
				var i = c.eq(n);
				f && (e[0] = d.call(this, n, i.html())), i.domManip(e, t)
			});
			if (u && (s = re.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
				for (o = re.map(g(s, "script"), x), r = o.length; u > l; l++) i = s, l !== p && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), t.call(this[l], i, l);
				if (r)
					for (a = o[o.length - 1].ownerDocument, re.map(o, b), l = 0; r > l; l++) i = o[l], Ye.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ve, "")));
				s = n = null
			}
			return this
		}
	}), re.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		re.fn[e] = function(e) {
			for (var n, i = 0, r = [], o = re(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0),
				re(o[i])[t](n), G.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var Ke, Ze = {};
	! function() {
		var e;
		ne.shrinkWrapBlocks = function() {
			if (null != e) return e;
			e = !1;
			var t, n, i;
			return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
		}
	}();
	var et, tt, nt = /^margin/,
		it = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
		rt = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (et = function(t) {
		return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
	}, tt = function(e, t, n) {
		var i, r, o, a, s = e.style;
		return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
	}) : he.documentElement.currentStyle && (et = function(e) {
		return e.currentStyle
	}, tt = function(e, t, n) {
		var i, r, o, a, s = e.style;
		return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !rt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
	}), ! function() {
		function t() {
			var t, n, i, r;
			n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
				width: "4px"
			}).width, r = t.appendChild(he.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), t.removeChild(r)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
		}
		var n, i, r, o, a, s, l;
		n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], (i = r && r.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
			reliableHiddenOffsets: function() {
				return null == s && t(), s
			},
			boxSizingReliable: function() {
				return null == a && t(), a
			},
			pixelPosition: function() {
				return null == o && t(), o
			},
			reliableMarginRight: function() {
				return null == l && t(), l
			}
		}))
	}(), re.swap = function(e, t, n, i) {
		var r, o, a = {};
		for (o in t) a[o] = e.style[o], e.style[o] = t[o];
		r = n.apply(e, i || []);
		for (o in t) e.style[o] = a[o];
		return r
	};
	var ot = /alpha\([^)]*\)/i,
		at = /opacity\s*=\s*([^)]*)/,
		st = /^(none|table(?!-c[ea]).+)/,
		lt = new RegExp("^(" + $e + ")(.*)$", "i"),
		ut = new RegExp("^([+-])=(" + $e + ")", "i"),
		ct = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		pt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		dt = ["Webkit", "O", "Moz", "ms"];
	re.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = tt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ne.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r, o, a, s = re.camelCase(t),
					l = e.style;
				if (t = re.cssProps[s] || (re.cssProps[s] = N(l, s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
				if (o = typeof n, "string" === o && (r = ut.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
					l[t] = n
				} catch (u) {}
			}
		},
		css: function(e, t, n, i) {
			var r, o, a, s = re.camelCase(t);
			return t = re.cssProps[s] || (re.cssProps[s] = N(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in pt && (o = pt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
		}
	}), re.each(["height", "width"], function(e, t) {
		re.cssHooks[t] = {
			get: function(e, n, i) {
				return n ? st.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ct, function() {
					return j(e, t, i)
				}) : j(e, t, i) : void 0
			},
			set: function(e, n, i) {
				var r = i && et(e);
				return A(e, n, i ? D(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
			}
		}
	}), ne.opacity || (re.cssHooks.opacity = {
		get: function(e, t) {
			return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				i = e.currentStyle,
				r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = i && i.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
		}
	}), re.cssHooks.marginRight = $(ne.reliableMarginRight, function(e, t) {
		return t ? re.swap(e, {
			display: "inline-block"
		}, tt, [e, "marginRight"]) : void 0
	}), re.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		re.cssHooks[e + t] = {
			expand: function(n) {
				for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Ne[i] + t] = o[i] || o[i - 2] || o[0];
				return r
			}
		}, nt.test(e) || (re.cssHooks[e + t].set = A)
	}), re.fn.extend({
		css: function(e, t) {
			return Ae(this, function(e, t, n) {
				var i, r, o = {},
					a = 0;
				if (re.isArray(t)) {
					for (i = et(e), r = t.length; r > a; a++) o[t[a]] = re.css(e, t[a], !1, i);
					return o
				}
				return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return S(this, !0)
		},
		hide: function() {
			return S(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Se(this) ? re(this).show() : re(this).hide()
			})
		}
	}), re.Tween = L, L.prototype = {
		constructor: L,
		init: function(e, t, n, i, r, o) {
			this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = L.propHooks[this.prop];
			return e && e.get ? e.get(this) : L.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = L.propHooks[this.prop];
			return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
		}
	}, L.prototype.init.prototype = L.prototype, L.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, re.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, re.fx = L.prototype.init, re.fx.step = {};
	var ft, ht, mt = /^(?:toggle|show|hide)$/,
		gt = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
		vt = /queueHooks$/,
		yt = [_],
		xt = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					i = n.cur(),
					r = gt.exec(t),
					o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
					a = (re.cssNumber[e] || "px" !== o && +i) && gt.exec(re.css(n.elem, e)),
					s = 1,
					l = 20;
				if (a && a[3] !== o) {
					o = o || a[3], r = r || [], a = +i || 1;
					do s = s || ".5", a /= s, re.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
				}
				return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
			}]
		};
	re.Animation = re.extend(O, {
			tweener: function(e, t) {
				re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, i = 0, r = e.length; r > i; i++) n = e[i], xt[n] = xt[n] || [], xt[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? yt.unshift(e) : yt.push(e)
			}
		}), re.speed = function(e, t, n) {
			var i = e && "object" == typeof e ? re.extend({}, e) : {
				complete: n || !n && t || re.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !re.isFunction(t) && t
			};
			return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
			}, i
		}, re.fn.extend({
			fadeTo: function(e, t, n, i) {
				return this.filter(Se).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function(e, t, n, i) {
				var r = re.isEmptyObject(e),
					o = re.speed(t, n, i),
					a = function() {
						var t = O(this, re.extend({}, e), o);
						(r || re._data(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(e, t, n) {
				var i = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						r = null != e && e + "queueHooks",
						o = re.timers,
						a = re._data(this);
					if (r) a[r] && a[r].stop && i(a[r]);
					else
						for (r in a) a[r] && a[r].stop && vt.test(r) && i(a[r]);
					for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
					(t || !n) && re.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = re._data(this),
						i = n[e + "queue"],
						r = n[e + "queueHooks"],
						o = re.timers,
						a = i ? i.length : 0;
					for (n.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), re.each(["toggle", "show", "hide"], function(e, t) {
			var n = re.fn[t];
			re.fn[t] = function(e, i, r) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, r)
			}
		}), re.each({
			slideDown: F("show"),
			slideUp: F("hide"),
			slideToggle: F("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			re.fn[e] = function(e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), re.timers = [], re.fx.tick = function() {
			var e, t = re.timers,
				n = 0;
			for (ft = re.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
			t.length || re.fx.stop(), ft = void 0
		}, re.fx.timer = function(e) {
			re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
		}, re.fx.interval = 13, re.fx.start = function() {
			ht || (ht = setInterval(re.fx.tick, re.fx.interval))
		}, re.fx.stop = function() {
			clearInterval(ht), ht = null
		}, re.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, re.fn.delay = function(e, t) {
			return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var i = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},
		function() {
			var e, t, n, i, r;
			t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), r = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = r.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
		}();
	var bt = /\r/g;
	re.fn.extend({
		val: function(e) {
			var t, n, i, r = this[0];
			return arguments.length ? (i = re.isFunction(e), this.each(function(n) {
				var r;
				1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
					return null == e ? "" : e + ""
				})), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
			})) : r ? (t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)) : void 0
		}
	}), re.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = re.find.attr(e, "value");
					return null != t ? t : re.trim(re.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
						if (n = i[l], !(!n.selected && l !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
							if (t = re(n).val(), o) return t;
							a.push(t)
						}
					return a
				},
				set: function(e, t) {
					for (var n, i, r = e.options, o = re.makeArray(t), a = r.length; a--;)
						if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0) try {
							i.selected = n = !0
						} catch (s) {
							i.scrollHeight
						} else i.selected = !1;
					return n || (e.selectedIndex = -1), r
				}
			}
		}
	}), re.each(["radio", "checkbox"], function() {
		re.valHooks[this] = {
			set: function(e, t) {
				return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
			}
		}, ne.checkOn || (re.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var wt, Tt, Ct = re.expr.attrHandle,
		kt = /^(?:checked|selected)$/i,
		Et = ne.getSetAttribute,
		$t = ne.input;
	re.fn.extend({
		attr: function(e, t) {
			return Ae(this, re.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				re.removeAttr(this, e)
			})
		}
	}), re.extend({
		attr: function(e, t, n) {
			var i, r, o = e.nodeType;
			return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Ce ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t)) : void 0
		},
		removeAttr: function(e, t) {
			var n, i, r = 0,
				o = t && t.match(xe);
			if (o && 1 === e.nodeType)
				for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? $t && Et || !kt.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(Et ? n : i)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), Tt = {
		set: function(e, t, n) {
			return t === !1 ? re.removeAttr(e, n) : $t && Et || !kt.test(n) ? e.setAttribute(!Et && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = Ct[t] || re.find.attr;
		Ct[t] = $t && Et || !kt.test(t) ? function(e, t, i) {
			var r, o;
			return i || (o = Ct[t], Ct[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Ct[t] = o), r
		} : function(e, t, n) {
			return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
		}
	}), $t && Et || (re.attrHooks.value = {
		set: function(e, t, n) {
			return re.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
		}
	}), Et || (wt = {
		set: function(e, t, n) {
			var i = e.getAttributeNode(n);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
		}
	}, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
		var i;
		return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
	}, re.valHooks.button = {
		get: function(e, t) {
			var n = e.getAttributeNode(t);
			return n && n.specified ? n.value : void 0
		},
		set: wt.set
	}, re.attrHooks.contenteditable = {
		set: function(e, t, n) {
			wt.set(e, "" === t ? !1 : t, n)
		}
	}, re.each(["width", "height"], function(e, t) {
		re.attrHooks[t] = {
			set: function(e, n) {
				return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
			}
		}
	})), ne.style || (re.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || void 0
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	});
	var Nt = /^(?:input|select|textarea|button|object)$/i,
		St = /^(?:a|area)$/i;
	re.fn.extend({
		prop: function(e, t) {
			return Ae(this, re.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = re.propFix[e] || e, this.each(function() {
				try {
					this[e] = void 0, delete this[e]
				} catch (t) {}
			})
		}
	}), re.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var i, r, o, a = e.nodeType;
			return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, r = re.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = re.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Nt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
		re.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), ne.optSelected || (re.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		re.propFix[this.toLowerCase()] = this
	}), ne.enctype || (re.propFix.enctype = "encoding");
	var At = /[\t\r\n\f]/g;
	re.fn.extend({
		addClass: function(e) {
			var t, n, i, r, o, a, s = 0,
				l = this.length,
				u = "string" == typeof e && e;
			if (re.isFunction(e)) return this.each(function(t) {
				re(this).addClass(e.call(this, t, this.className))
			});
			if (u)
				for (t = (e || "").match(xe) || []; l > s; s++)
					if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
						for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
						a = re.trim(i), n.className !== a && (n.className = a)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, r, o, a, s = 0,
				l = this.length,
				u = 0 === arguments.length || "string" == typeof e && e;
			if (re.isFunction(e)) return this.each(function(t) {
				re(this).removeClass(e.call(this, t, this.className))
			});
			if (u)
				for (t = (e || "").match(xe) || []; l > s; s++)
					if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
						for (o = 0; r = t[o++];)
							for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
						a = e ? re.trim(i) : "", n.className !== a && (n.className = a)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(n) {
				re(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function() {
				if ("string" === n)
					for (var t, i = 0, r = re(this), o = e.match(xe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
				else(n === Ce || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	}), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		re.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), re.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Dt = re.now(),
		jt = /\?/,
		Lt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	re.parseJSON = function(t) {
		if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var n, i = null,
			r = re.trim(t + "");
		return r && !re.trim(r.replace(Lt, function(e, t, r, o) {
			return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
		})) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
	}, re.parseXML = function(t) {
		var n, i;
		if (!t || "string" != typeof t) return null;
		try {
			e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
		} catch (r) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
	};
	var Ht, Ft, Mt = /#.*$/,
		_t = /([?&])_=[^&]*/,
		qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Rt = /^(?:GET|HEAD)$/,
		Pt = /^\/\//,
		Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Wt = {},
		zt = {},
		Xt = "*/".concat("*");
	try {
		Ft = location.href
	} catch (It) {
		Ft = he.createElement("a"), Ft.href = "", Ft = Ft.href
	}
	Ht = Bt.exec(Ft.toLowerCase()) || [], re.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ft,
			type: "GET",
			isLocal: Ot.test(Ht[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Xt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": re.parseJSON,
				"text xml": re.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? B(B(e, re.ajaxSettings), t) : B(re.ajaxSettings, e)
		},
		ajaxPrefilter: R(Wt),
		ajaxTransport: R(zt),
		ajax: function(e, t) {
			function n(e, t, n, i) {
				var r, c, v, y, b, T = t;
				2 !== x && (x = 2, s && clearTimeout(s), u = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = W(p, w, n)), y = z(p, y, w, r), r ? (p.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (re.lastModified[o] = b), b = w.getResponseHeader("etag"), b && (re.etag[o] = b)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, r = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", r ? h.resolveWith(d, [c, T, w]) : h.rejectWith(d, [w, T, v]), w.statusCode(g), g = void 0, l && f.trigger(r ? "ajaxSuccess" : "ajaxError", [w, p, r ? c : v]), m.fireWith(d, [w, T]), l && (f.trigger("ajaxComplete", [w, p]), --re.active || re.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var i, r, o, a, s, l, u, c, p = re.ajaxSetup({}, t),
				d = p.context || p,
				f = p.context && (d.nodeType || d.jquery) ? re(d) : re.event,
				h = re.Deferred(),
				m = re.Callbacks("once memory"),
				g = p.statusCode || {},
				v = {},
				y = {},
				x = 0,
				b = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!c)
								for (c = {}; t = qt.exec(a);) c[t[1].toLowerCase()] = t[2];
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = y[n] = y[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (p.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > x)
								for (t in e) g[t] = [g[t], e[t]];
							else w.always(e[w.status]);
						return this
					},
					abort: function(e) {
						var t = e || b;
						return u && u.abort(t), n(0, t), this
					}
				};
			if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Ft) + "").replace(Mt, "").replace(Pt, Ht[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = re.trim(p.dataType || "*").toLowerCase().match(xe) || [""], null == p.crossDomain && (i = Bt.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Ht[1] && i[2] === Ht[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ht[3] || ("http:" === Ht[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = re.param(p.data, p.traditional)), P(Wt, p, t, w), 2 === x) return w;
			l = re.event && p.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Rt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (jt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = _t.test(o) ? o.replace(_t, "$1_=" + Dt++) : o + (jt.test(o) ? "&" : "?") + "_=" + Dt++)), p.ifModified && (re.lastModified[o] && w.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && w.setRequestHeader("If-None-Match", re.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : p.accepts["*"]);
			for (r in p.headers) w.setRequestHeader(r, p.headers[r]);
			if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x)) return w.abort();
			b = "abort";
			for (r in {
					success: 1,
					error: 1,
					complete: 1
				}) w[r](p[r]);
			if (u = P(zt, p, t, w)) {
				w.readyState = 1, l && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
					w.abort("timeout")
				}, p.timeout));
				try {
					x = 1, u.send(v, n)
				} catch (T) {
					if (!(2 > x)) throw T;
					n(-1, T)
				}
			} else n(-1, "No Transport");
			return w
		},
		getJSON: function(e, t, n) {
			return re.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return re.get(e, void 0, t, "script")
		}
	}), re.each(["get", "post"], function(e, t) {
		re[t] = function(e, n, i, r) {
			return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
				url: e,
				type: t,
				dataType: r,
				data: n,
				success: i
			})
		}
	}), re._evalUrl = function(e) {
		return re.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, re.fn.extend({
		wrapAll: function(e) {
			if (re.isFunction(e)) return this.each(function(t) {
				re(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return this.each(re.isFunction(e) ? function(t) {
				re(this).wrapInner(e.call(this, t))
			} : function() {
				var t = re(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = re.isFunction(e);
			return this.each(function(n) {
				re(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
			}).end()
		}
	}), re.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
	}, re.expr.filters.visible = function(e) {
		return !re.expr.filters.hidden(e)
	};
	var Yt = /%20/g,
		Ut = /\[\]$/,
		Vt = /\r?\n/g,
		Jt = /^(?:submit|button|image|reset|file)$/i,
		Qt = /^(?:input|select|textarea|keygen)/i;
	re.param = function(e, t) {
		var n, i = [],
			r = function(e, t) {
				t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
			r(this.name, this.value)
		});
		else
			for (n in e) X(n, e[n], t, r);
		return i.join("&").replace(Yt, "+")
	}, re.fn.extend({
		serialize: function() {
			return re.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = re.prop(this, "elements");
				return e ? re.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !re(this).is(":disabled") && Qt.test(this.nodeName) && !Jt.test(e) && (this.checked || !De.test(e))
			}).map(function(e, t) {
				var n = re(this).val();
				return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Vt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Vt, "\r\n")
				}
			}).get()
		}
	}), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && I() || Y()
	} : I;
	var Gt = 0,
		Kt = {},
		Zt = re.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in Kt) Kt[e](void 0, !0)
	}), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && re.ajaxTransport(function(e) {
		if (!e.crossDomain || ne.cors) {
			var t;
			return {
				send: function(n, i) {
					var r, o = e.xhr(),
						a = ++Gt;
					if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (r in e.xhrFields) o[r] = e.xhrFields[r];
					e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
					o.send(e.hasContent && e.data || null), t = function(n, r) {
						var s, l, u;
						if (t && (r || 4 === o.readyState))
							if (delete Kt[a], t = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
							else {
								u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
								try {
									l = o.statusText
								} catch (c) {
									l = ""
								}
								s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
							}
						u && i(s, l, u, o.getAllResponseHeaders())
					}, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[a] = t : t()
				},
				abort: function() {
					t && t(void 0, !0)
				}
			}
		}
	}), re.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return re.globalEval(e), e
			}
		}
	}), re.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), re.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n = he.head || re("head")[0] || he.documentElement;
			return {
				send: function(i, r) {
					t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
						(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
					}, n.insertBefore(t, n.firstChild)
				},
				abort: function() {
					t && t.onload(void 0, !0)
				}
			}
		}
	});
	var en = [],
		tn = /(=)\?(?=&|$)|\?\?/;
	re.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = en.pop() || re.expando + "_" + Dt++;
			return this[e] = !0, e
		}
	}), re.ajaxPrefilter("json jsonp", function(t, n, i) {
		var r, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
			return a || re.error(r + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
			a = arguments
		}, i.always(function() {
			e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, en.push(r)), a && re.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), re.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || he;
		var i = pe.exec(e),
			r = !n && [];
		return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
	};
	var nn = re.fn.load;
	re.fn.load = function(e, t, n) {
		if ("string" != typeof e && nn) return nn.apply(this, arguments);
		var i, r, o, a = this,
			s = e.indexOf(" ");
		return s >= 0 && (i = re.trim(e.slice(s, e.length)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
			url: e,
			type: o,
			dataType: "html",
			data: t
		}).done(function(e) {
			r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
		}).complete(n && function(e, t) {
			a.each(n, r || [e.responseText, t, e])
		}), this
	}, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		re.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), re.expr.filters.animated = function(e) {
		return re.grep(re.timers, function(t) {
			return e === t.elem
		}).length
	};
	var rn = e.document.documentElement;
	re.offset = {
		setOffset: function(e, t, n) {
			var i, r, o, a, s, l, u, c = re.css(e, "position"),
				p = re(e),
				d = {};
			"static" === c && (e.style.position = "relative"), s = p.offset(), o = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [o, l]) > -1, u ? (i = p.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : p.css(d)
		}
	}, re.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				re.offset.setOffset(this, e, t)
			});
			var t, n, i = {
					top: 0,
					left: 0
				},
				r = this[0],
				o = r && r.ownerDocument;
			return o ? (t = o.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== Ce && (i = r.getBoundingClientRect()), n = U(o), {
				top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : i) : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					i = this[0];
				return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
					t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - re.css(i, "marginTop", !0),
					left: t.left - n.left - re.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || rn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
				return e || rn
			})
		}
	}), re.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = /Y/.test(t);
		re.fn[e] = function(i) {
			return Ae(this, function(e, i, r) {
				var o = U(e);
				return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r)
			}, e, i, arguments.length, null)
		}
	}), re.each(["top", "left"], function(e, t) {
		re.cssHooks[t] = $(ne.pixelPosition, function(e, n) {
			return n ? (n = tt(e, t), it.test(n) ? re(e).position()[t] + "px" : n) : void 0
		})
	}), re.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		re.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, i) {
			re.fn[i] = function(i, r) {
				var o = arguments.length && (n || "boolean" != typeof i),
					a = n || (i === !0 || r === !0 ? "margin" : "border");
				return Ae(this, function(t, n, i) {
					var r;
					return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a)
				}, t, o ? i : void 0, o, null)
			}
		})
	}), re.fn.size = function() {
		return this.length
	}, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return re
	});
	var on = e.jQuery,
		an = e.$;
	return re.noConflict = function(t) {
		return e.$ === re && (e.$ = an), t && e.jQuery === re && (e.jQuery = on), re
	}, typeof t === Ce && (e.jQuery = e.$ = re), re
}),
function() {
	for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
		var i = (new Date).getTime(),
			r = Math.max(0, 16 - (i - e)),
			o = window.setTimeout(function() {
				t(i + r)
			}, r);
		return e = i + r, o
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
		clearTimeout(e)
	})
}(),
function(e, t, n, i) {
	"use strict";

	function r(t, n) {
		this.element = t, this.$context = e(t).data("api", this), this.$layers = this.$context.find(".layer");
		var i = {
			calibrateX: this.$context.data("calibrate-x") || null,
			calibrateY: this.$context.data("calibrate-y") || null,
			invertX: this.$context.data("invert-x") || null,
			invertY: this.$context.data("invert-y") || null,
			limitX: parseFloat(this.$context.data("limit-x")) || null,
			limitY: parseFloat(this.$context.data("limit-y")) || null,
			scalarX: parseFloat(this.$context.data("scalar-x")) || null,
			scalarY: parseFloat(this.$context.data("scalar-y")) || null,
			frictionX: parseFloat(this.$context.data("friction-x")) || null,
			frictionY: parseFloat(this.$context.data("friction-y")) || null,
			originX: parseFloat(this.$context.data("origin-x")) || null,
			originY: parseFloat(this.$context.data("origin-y")) || null
		};
		for (var r in i) null === i[r] && delete i[r];
		e.extend(this, s, n, i), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
	}
	var o = "parallax",
		a = 30,
		s = {
			relativeInput: !1,
			clipRelativeInput: !1,
			calibrationThreshold: 100,
			calibrationDelay: 500,
			supportDelay: 1e3,
			calibrateX: !1,
			calibrateY: !0,
			invertX: !0,
			invertY: !0,
			limitX: !1,
			limitY: !1,
			scalarX: 10,
			scalarY: 10,
			frictionX: .1,
			frictionY: .1,
			originX: .5,
			originY: .5
		};
	r.prototype.transformSupport = function(e) {
		for (var r = n.createElement("div"), o = !1, a = null, s = !1, l = null, u = null, c = 0, p = this.vendors.length; p > c; c++)
			if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform", u = this.vendors[c][1] + "Transform") : (l = "transform", u = "transform"), r.style[u] !== i) {
				o = !0;
				break
			}
		switch (e) {
			case "2D":
				s = o;
				break;
			case "3D":
				if (o) {
					var d = n.body || n.createElement("body"),
						f = n.documentElement,
						h = f.style.overflow,
						m = !1;
					n.body || (m = !0, f.style.overflow = "hidden", f.appendChild(d), d.style.overflow = "hidden", d.style.background = ""), d.appendChild(r), r.style[u] = "translate3d(1px,1px,1px)", a = t.getComputedStyle(r).getPropertyValue(l), s = a !== i && a.length > 0 && "none" !== a, f.style.overflow = h, d.removeChild(r), m && (d.removeAttribute("style"), d.parentNode.removeChild(d))
				}
		}
		return s
	}, r.prototype.ww = null, r.prototype.wh = null, r.prototype.wcx = null, r.prototype.wcy = null, r.prototype.wrx = null, r.prototype.wry = null, r.prototype.portrait = null, r.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), r.prototype.vendors = [null, ["-webkit-", "webkit"],
		["-moz-", "Moz"],
		["-o-", "O"],
		["-ms-", "ms"]
	], r.prototype.motionSupport = !!t.DeviceMotionEvent, r.prototype.orientationSupport = !!t.DeviceOrientationEvent, r.prototype.orientationStatus = 0, r.prototype.transform2DSupport = r.prototype.transformSupport("2D"), r.prototype.transform3DSupport = r.prototype.transformSupport("3D"), r.prototype.propertyCache = {}, r.prototype.initialise = function() {
		"static" === this.$context.css("position") && this.$context.css({
			position: "relative"
		}), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
	}, r.prototype.updateLayers = function() {
		this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
			position: "absolute",
			display: "block",
			left: 0,
			top: 0
		}), this.$layers.first().css({
			position: "relative"
		}), this.accelerate(this.$layers), this.$layers.each(e.proxy(function(t, n) {
			this.depths.push(e(n).data("depth") || 0)
		}, this))
	}, r.prototype.updateDimensions = function() {
		this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
	}, r.prototype.updateBounds = function() {
		this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
	}, r.prototype.queueCalibration = function(e) {
		clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, e)
	}, r.prototype.enable = function() {
		this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, t.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
	}, r.prototype.disable = function() {
		this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
	}, r.prototype.calibrate = function(e, t) {
		this.calibrateX = e === i ? this.calibrateX : e, this.calibrateY = t === i ? this.calibrateY : t
	}, r.prototype.invert = function(e, t) {
		this.invertX = e === i ? this.invertX : e, this.invertY = t === i ? this.invertY : t
	}, r.prototype.friction = function(e, t) {
		this.frictionX = e === i ? this.frictionX : e, this.frictionY = t === i ? this.frictionY : t
	}, r.prototype.scalar = function(e, t) {
		this.scalarX = e === i ? this.scalarX : e, this.scalarY = t === i ? this.scalarY : t
	}, r.prototype.limit = function(e, t) {
		this.limitX = e === i ? this.limitX : e, this.limitY = t === i ? this.limitY : t
	}, r.prototype.origin = function(e, t) {
		this.originX = e === i ? this.originX : e, this.originY = t === i ? this.originY : t
	}, r.prototype.clamp = function(e, t, n) {
		return e = Math.max(e, t), e = Math.min(e, n)
	}, r.prototype.css = function(t, n, r) {
		var o = this.propertyCache[n];
		if (!o)
			for (var a = 0, s = this.vendors.length; s > a; a++)
				if (o = null !== this.vendors[a] ? e.camelCase(this.vendors[a][1] + "-" + n) : n, t.style[o] !== i) {
					this.propertyCache[n] = o;
					break
				}
		t.style[o] = r
	}, r.prototype.accelerate = function(e) {
		for (var t = 0, n = e.length; n > t; t++) {
			var i = e[t];
			this.css(i, "transform", "translate3d(0,0,0)"), this.css(i, "transform-style", "preserve-3d"), this.css(i, "backface-visibility", "hidden")
		}
	}, r.prototype.setPosition = function(e, t, n) {
		t += "px", n += "px", this.transform3DSupport ? this.css(e, "transform", "translate3d(" + t + "," + n + ",0)") : this.transform2DSupport ? this.css(e, "transform", "translate(" + t + "," + n + ")") : (e.style.left = t, e.style.top = n)
	}, r.prototype.onOrientationTimer = function(e) {
		this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
	}, r.prototype.onCalibrationTimer = function(e) {
		this.calibrationFlag = !0
	}, r.prototype.onWindowResize = function(e) {
		this.updateDimensions()
	}, r.prototype.onAnimationFrame = function() {
		this.updateBounds();
		var e = this.ix - this.cx,
			t = this.iy - this.cy;
		(Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? t : this.iy, this.my = this.calibrateY ? e : this.ix) : (this.mx = this.calibrateX ? e : this.ix, this.my = this.calibrateY ? t : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
		for (var n = 0, i = this.$layers.length; i > n; n++) {
			var r = this.depths[n],
				o = this.$layers[n],
				a = this.vx * r * (this.invertX ? -1 : 1),
				s = this.vy * r * (this.invertY ? -1 : 1);
			this.setPosition(o, a, s)
		}
		this.raf = requestAnimationFrame(this.onAnimationFrame)
	}, r.prototype.onDeviceOrientation = function(e) {
		if (!this.desktop && null !== e.beta && null !== e.gamma) {
			this.orientationStatus = 1;
			var n = (e.beta || 0) / a,
				i = (e.gamma || 0) / a,
				r = t.innerHeight > t.innerWidth;
			this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = n, this.cy = i), this.ix = n, this.iy = i
		}
	}, r.prototype.onMouseMove = function(e) {
		var t = e.clientX,
			n = e.clientY;
		!this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.ex), t = Math.min(t, this.ex + this.ew), n = Math.max(n, this.ey), n = Math.min(n, this.ey + this.eh)), this.ix = (t - this.ex - this.ecx) / this.erx, this.iy = (n - this.ey - this.ecy) / this.ery) : (this.ix = (t - this.wcx) / this.wrx, this.iy = (n - this.wcy) / this.wry)
	};
	var l = {
		enable: r.prototype.enable,
		disable: r.prototype.disable,
		updateLayers: r.prototype.updateLayers,
		calibrate: r.prototype.calibrate,
		friction: r.prototype.friction,
		invert: r.prototype.invert,
		scalar: r.prototype.scalar,
		limit: r.prototype.limit,
		origin: r.prototype.origin
	};
	e.fn[o] = function(t) {
		var n = arguments;
		return this.each(function() {
			var i = e(this),
				a = i.data(o);
			a || (a = new r(this, t), i.data(o, a)), l[t] && a[t].apply(a, Array.prototype.slice.call(n, 1))
		})
	}
}(window.jQuery || window.Zepto, window, document), ! function() {
	var e = "ontouchstart" in window,
		t = e ? "touchstart" : "click";
	$.fn.wisePagination = function(e) {
		var e = $.extend({
				total: 0,
				size: 10,
				active: 1,
				step: 4,
				first: '<i class="fa fa-fw fa-angle-double-left"></i>',
				last: '<i class="fa fa-fw fa-angle-double-right"></i>',
				prev: '<i class="fa fa-fw fa-angle-left"></i>',
				next: '<i class="fa fa-fw fa-angle-right"></i>',
				callback: function() {}
			}, e),
			n = $(this),
			i = 1;
		if (0 == e.total) return !1;
		var r = Math.ceil(e.total / e.size),
			o = function() {
				var a = i - e.step,
					s = i + e.step;
				i <= e.step && (a = 1, s = 2 * e.step + 1), i > r - 2 * e.step && (a = r - 2 * e.step, s = r), 1 > a && (a = 1), s > r && (s = r);
				var l = [];
				1 != i && l.push('<a href="javascript:void(0)" data-page="1">' + e.first + "</a>");
				var u = i - 1;
				u >= 1 && l.push('<a href="javascript:void(0)" data-page="' + u + '">' + e.prev + "</a>");
				for (var c = a; s >= c; c++) l.push('<a href="javascript:void(0)" data-page="' + c + '" ' + (i == c ? 'class="active"' : "") + ">" + c + "</a>");
				var p = i + 1;
				r >= p && l.push('<a href="javascript:void(0)" data-page="' + p + '">' + e.next + "</a>"), i != r && l.push('<a href="javascript:void(0)" data-page="' + u + '">' + e.last + "</a>"), n.html(l.join("")), n.find("a").off(t), n.find("a").on(t, function(t) {
					t.preventDefault();
					var n = $(this),
						r = n.data("page");
					i = r, o(), e.callback(i)
				})
			};
		o()
	}
}(jQuery), ! function() {
	function e(e) {
		return e.replace(x, "").replace(b, ",").replace(w, "").replace(T, "").replace(C, "").split(k)
	}

	function t(e) {
		return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
	}

	function n(n, i) {
		function r(e) {
			return d += e.split(/\n/).length - 1, c && (e = e.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), e && (e = y[1] + t(e) + y[2] + "\n"), e
		}

		function o(t) {
			var n = d;
			if (u ? t = u(t, i) : a && (t = t.replace(/\n/g, function() {
					return d++, "$line=" + d + ";"
				})), 0 === t.indexOf("=")) {
				var r = p && !/^=[=#]/.test(t);
				if (t = t.replace(/^=[=#]?|[\s;]*$/g, ""), r) {
					var o = t.replace(/\s*\([^\)]+\)/, "");
					f[o] || /^(include|print)$/.test(o) || (t = "$escape(" + t + ")")
				} else t = "$string(" + t + ")";
				t = y[1] + t + y[2]
			}
			return a && (t = "$line=" + n + ";" + t), v(e(t), function(e) {
				if (e && !m[e]) {
					var t;
					t = "print" === e ? b : "include" === e ? w : f[e] ? "$utils." + e : h[e] ? "$helpers." + e : "$data." + e, T += e + "=" + t + ",", m[e] = !0
				}
			}), t + "\n"
		}
		var a = i.debug,
			s = i.openTag,
			l = i.closeTag,
			u = i.parser,
			c = i.compress,
			p = i.escape,
			d = 1,
			m = {
				$data: 1,
				$filename: 1,
				$utils: 1,
				$helpers: 1,
				$out: 1,
				$line: 1
			},
			g = "".trim,
			y = g ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
			x = g ? "$out+=text;return $out;" : "$out.push(text);",
			b = "function(){var text=''.concat.apply('',arguments);" + x + "}",
			w = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + x + "}",
			T = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (a ? "$line=0," : ""),
			C = y[0],
			k = "return new String(" + y[3] + ");";
		v(n.split(s), function(e) {
			e = e.split(l);
			var t = e[0],
				n = e[1];
			1 === e.length ? C += r(t) : (C += o(t), n && (C += r(n)))
		});
		var E = T + C + k;
		a && (E = "try{" + E + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + t(n) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
		try {
			var $ = new Function("$data", "$filename", E);
			return $.prototype = f, $
		} catch (N) {
			throw N.temp = "function anonymous($data,$filename) {" + E + "}", N
		}
	}
	var i = function(e, t) {
		return "string" == typeof t ? g(t, {
			filename: e
		}) : a(e, t)
	};
	i.version = "3.0.0", i.config = function(e, t) {
		r[e] = t
	};
	var r = i.defaults = {
			openTag: "<%",
			closeTag: "%>",
			escape: !0,
			cache: !0,
			compress: !1,
			parser: null
		},
		o = i.cache = {};
	i.render = function(e, t) {
		return g(e, t)
	};
	var a = i.renderFile = function(e, t) {
		var n = i.get(e) || m({
			filename: e,
			name: "Render Error",
			message: "Template not found"
		});
		return t ? n(t) : n
	};
	i.get = function(e) {
		var t;
		if (o[e]) t = o[e];
		else if ("object" == typeof document) {
			var n = document.getElementById(e);
			if (n) {
				var i = (n.value || n.innerHTML).replace(/^\s*|\s*$/g, "");
				t = g(i, {
					filename: e
				})
			}
		}
		return t
	};
	var s = function(e, t) {
			return "string" != typeof e && (t = typeof e, "number" === t ? e += "" : e = "function" === t ? s(e.call(e)) : ""), e
		},
		l = {
			"<": "&#60;",
			">": "&#62;",
			'"': "&#34;",
			"'": "&#39;",
			"&": "&#38;"
		},
		u = function(e) {
			return l[e]
		},
		c = function(e) {
			return s(e).replace(/&(?![\w#]+;)|[<>"']/g, u)
		},
		p = Array.isArray || function(e) {
			return "[object Array]" === {}.toString.call(e)
		},
		d = function(e, t) {
			var n, i;
			if (p(e))
				for (n = 0, i = e.length; i > n; n++) t.call(e, e[n], n, e);
			else
				for (n in e) t.call(e, e[n], n)
		},
		f = i.utils = {
			$helpers: {},
			$include: a,
			$string: s,
			$escape: c,
			$each: d
		};
	i.helper = function(e, t) {
		h[e] = t
	};
	var h = i.helpers = f.$helpers;
	i.onerror = function(e) {
		var t = "Template Error\n\n";
		for (var n in e) t += "<" + n + ">\n" + e[n] + "\n\n";
		"object" == typeof console && console.error(t)
	};
	var m = function(e) {
			return i.onerror(e),
				function() {
					return "{Template Error}"
				}
		},
		g = i.compile = function(e, t) {
			function i(n) {
				try {
					return new l(n, s) + ""
				} catch (i) {
					return t.debug ? m(i)() : (t.debug = !0, g(e, t)(n))
				}
			}
			t = t || {};
			for (var a in r) void 0 === t[a] && (t[a] = r[a]);
			var s = t.filename;
			try {
				var l = n(e, t)
			} catch (u) {
				return u.filename = s || "anonymous", u.name = "Syntax Error", m(u)
			}
			return i.prototype = l.prototype, i.toString = function() {
				return l.toString()
			}, s && t.cache && (o[s] = i), i
		},
		v = f.$each,
		y = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
		x = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
		b = /[^\w$]+/g,
		w = new RegExp(["\\b" + y.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
		T = /^\d[^,]*|,\d[^,]*/g,
		C = /^,+|,+$/g,
		k = /^$|,+/;
	"function" == typeof define ? define(function() {
		return i
	}) : "undefined" != typeof exports ? module.exports = i : this.template = i
}();
var hash = location.hash,
	$parallax, w, h;
$(function() {
	w = $(window).width(), h = $(window).height(), $("#banner").width(w).height(h), "home" != $("body").data("nav") && $("html,body").animate({
		scrollTop: h + "px"
	});
	var e = 3840 / 1900,
		t = h + 100,
		n = t * e;
	w + 100 > n && (n = w + 100, t = 1900 / 3840 * n);
	var i = (n - w) / 2,
		r = (t - h) / 2,
		o = new Image;
	o.src = $(".banner").attr("src"), o.complete ? $(".loading").fadeOut() : o.onload = function() {
		$(".loading").fadeOut()
	}, $(".banner").each(function() {
		var e = $(this);
		e.css({
			height: t + "px",
			width: n + "px",
			marginLeft: -i + "px",
			marginTop: -r + "px"
		})
	}), $(window).resize(function() {
		w = $(window).width(), h = $(window).height(), $("#banner").width(w).height(h);
		var e = 3840 / 1900,
			t = h + 100,
			n = t * e;
		w + 100 > n && (n = w + 100, t = 1900 / 3840 * n);
		var i = (n - w) / 2,
			r = (t - h) / 2;
		$(".banner").each(function() {
			var e = $(this);
			e.css({
				height: t + "px",
				width: n + "px",
				marginLeft: -i + "px",
				marginTop: -r + "px"
			})
		})
	}), $parallax = $("#banner").parallax(), $(window).scroll(function() {
		h = $(window).height();
		var e = $(this).scrollTop();
		e >= h ? $parallax.parallax("disable") : $parallax.parallax("enable")
	});
	var a = "ontouchstart" in window,
		s = a ? "touchstart" : "click";
	$("link[rel='prev']").size() > 0 && $(document).keydown(function(e) {
		37 == e.keyCode && (location.href = $("link[rel='prev']").attr("href"))
	}), $("link[rel='next']").size() > 0 && $(document).keydown(function(e) {
		39 == e.keyCode && (location.href = $("link[rel='next']").attr("href"))
	}), $("#bars").on(s, function() {
		"none" == $("#category").css("display") ? $(this).css("color", "#69AD65") : $(this).css("color", "#999"), $("#category").toggle()
	}), $("[data-week]").each(function(e) {
		var t = $(this),
			n = t.data("week"),
			i = {
				1: "鏄熸湡涓€",
				2: "鏄熸湡浜�",
				3: "鏄熸湡涓�",
				4: "鏄熸湡鍥�",
				5: "鏄熸湡浜�",
				6: "鏄熸湡鍏�",
				0: "鏄熸湡鏃�"
			};
		t.html(i[n])
	});
	var l = $("#search"),
		u = function() {
			var e = $.trim(l.find("input").val());
			return "" == e ? (l.tooltip("show"), setTimeout(function() {
				l.tooltip("destroy")
			}, 3e3), l.find("input").focus(), !1) : (e = e.replace(/\'/gi, ""), e = e.replace(/\"/gi, ""), e = e.replace(/\?/gi, ""), e = e.replace(/\%/gi, ""), e = e.replace(/\./gi, ""), e = e.replace(/\*/gi, ""), void(location.href = PATH + "search/" + encodeURI(e) + "/"))
		};
	if (l.find("i").on("click", function(e) {
			e.preventDefault(), u()
		}), l.find("input").on("keydown", function(e) {
			13 == e.keyCode && u()
		}), null != cookie("nickname") && $("#comment-nickname").val(cookie("nickname")), null != cookie("email") && $("#comment-email").val(cookie("email")), $("#comment-content").click(function() {
			$("#comment-info").slideDown()
		}), $("#comment-button").on("click", function(e) {
			e.preventDefault();
			var t = $(this),
				n = t.html(),
				i = t.data("post-id"),
				r = t.data("category-id"),
				o = t.data("parent-id"),
				a = t.data("interval-timeout"),
				s = (t.data("type"), $.trim($("#comment-content textarea").val()));
			if ("" == s) return show_tip("鍙戣〃鍐呭涓嶈兘涓虹┖", 3, 300), $("#comment-content textarea").focus(), !1;
			s = encodeURI(s);
			var l = encodeURI($.trim($("#comment-nickname").val()));
			if ("" == l) return show_tip("鏄电О涓嶈兘涓虹┖", 3, 300), $("#comment-nickname").focus(), !1;
			var u = encodeURI($.trim($("#comment-email").val()));
			if ("" == u) return show_tip("閭涓嶈兘涓虹┖", 3, 300), $("#comment-email").focus(), !1;
			if (!/^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/.test(u)) return show_tip("閭涓嶅悎娉�", 3, 300), $("#comment-email").focus(), !1;
			var c = PATH + "api.php?action=post&do=comment",
				p = {
					content: s,
					post_id: i,
					category_id: r,
					parent_id: o,
					nickname: l,
					email: u
				};
			t.html("Waiting..."), $.post(c, p, function(e) {
				if (t.html(n), 2 == e.result.error) return show_tip("鍙戝竷闂撮殧蹇呴』澶т簬" + a + "鍒嗛挓", 3, 300), !1;
				if (e.success) {
					var i = "璇风瓑寰呯鐞嗗憳瀹℃牳鎮ㄧ殑璇勮";
					"0" == t.data("check") && (i = "鍙戝竷鎴愬姛"), show_tip(i, 3, 300), $("#comment-content textarea").val(""), cookie("nickname", $.trim($("#comment-nickname").val()), {
						expires: 365
					}), cookie("email", $.trim($("#comment-email").val()), {
						expires: 365
					})
				}
			})
		}), $(document).on("click", ".reply", function() {
			var e = $(this),
				t = e.data("id");
			$("#comment-button").attr("data-parent-id", t), $("#comment-content textarea").focus()
		}), $(".post-comment").data("post-id")) {
		var c;
		if (void 0 != $(".post-comment").data("user-id")) c = PATH + "api.php?action=user&do=comment-data";
		else {
			var p = $(".post-comment").data("post-id");
			c = PATH + "api.php?action=post&do=comment&post_id=" + p
		}
		$.getJSON(c, function(e) {
			e.success && ($("#comment-loop").html(template("__comment", e.result)), $(".pagination").wisePagination({
				total: e.result.count,
				size: e.result.size,
				callback: function(e) {
					$.getJSON(c + "&page=" + e, function(e) {
						e.success && $("#comment-loop").html(template("__comment", e.result))
					})
				}
			}))
		})
	}
	tips()
});