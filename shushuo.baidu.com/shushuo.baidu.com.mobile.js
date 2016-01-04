/*!  app.js 10-14 16:31 */
function start() {
    console.log('开始执行');
	function a(a) {
		var b = a.accelerationIncludingGravity;
		if (Math.abs(b.x) < 2 && Math.abs(b.y) < 2) return !1;
		var c = 3 * -(0 | b.x);
		$("#cover .cols").anim({
			"-webkit-transform": "translate3d(" + (c - 280) + "px,200px,0px)"
		}, 0);
		var d = -30 + 10 * b.x / Math.PI;
		$("#cover .title>img").css({
			"-webkit-transform": "rotateY(" + d + "deg)"
		})
	}

	function b() {
		return navigator.userAgent.toLowerCase().indexOf("micromessenger") >= 0
	}
	var c, d = ["<h2>学生和农村用户人均下载略有下降:</h2><ul><li>学生在Q2面临期末考试的影响</li><li>农村用户Q2处在农忙时节，下载活跃度减弱</li></ul><h2>城市打工族和城市白领人均下载呈现上升:</h2><ul><li>城市打工族的需求快速上升，与学生和城市白领的差距迅速缩小</li></ul>", "百度应用市场，包含百度手机助手、91助手和安卓市场三大应用分发平台。", "<ul><li>城市打工族：在城市，主要从事体力劳动的人群</li><li>城市白领：在城市，主要从事脑力劳动的人群</li><li>农村用户：在农村，从事脑力/体力劳动的人群</li><li>学生：以大学、中学生为主</li></ul>"],
		e = function() {
			return navigator.userAgent.indexOf("iPhone") > -1
		},
		f = function() {
			function a() {
				j = new FSS.CanvasRenderer, t.appendChild(j.element), k = new FSS.Scene, b(), c(), d(t.offsetWidth, t.offsetHeight), f()
			}

			function b() {
				k.remove(l), j.clear(), m = new FSS.Plane(o.width * j.width, o.height * j.height, o.segments, o.slices), n = new FSS.Material(o.ambient, o.diffuse), l = new FSS.Mesh(m, n), k.add(l);
				var a, b;
				for (a = m.vertices.length - 1; a >= 0; a--) b = m.vertices[a], b.anchor = FSS.Vector3.clone(b.position), b.step = FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1)), b.time = Math.randomInRange(0, Math.PIM2)
			}

			function c() {
				var a, b;
				for (a = k.lights.length - 1; a >= 0; a--) b = k.lights[a], k.remove(b);
				for (j.clear(), a = 0; a < p.count; a++) b = new FSS.Light(p.ambient, p.diffuse), b.ambientHex = b.ambient.format(), b.diffuseHex = b.diffuse.format(), k.add(b), b.mass = Math.randomInRange(.5, 1), b.velocity = FSS.Vector3.create(), b.acceleration = FSS.Vector3.create(), b.force = FSS.Vector3.create()
			}

			function d(a, c) {
				j.setSize(a, c), FSS.Vector3.set(r, j.halfWidth, j.halfHeight), b()
			}

			function f() {
				i = Date.now() - q, g(), h(), requestAnimationFrame(f)
			}

			function g() {
				if (!e()) {
					var a = j.element.getContext("2d");
					a.globalAlpha = .1
				}
				var b, c, d, f, g, h, l, n = o.depth / 2;
				for (FSS.Vector3.copy(p.bounds, r), FSS.Vector3.multiplyScalar(p.bounds, p.xyScalar), FSS.Vector3.setZ(s, p.zOffset), p.autopilot && (b = Math.sin(p.step[0] * i * p.speed), c = Math.cos(p.step[1] * i * p.speed), FSS.Vector3.set(s, p.bounds[0] * b, p.bounds[1] * c, p.zOffset)), f = k.lights.length - 1; f >= 0; f--) {
					g = k.lights[f], FSS.Vector3.setZ(g.position, p.zOffset);
					var q = Math.clamp(FSS.Vector3.distanceSquared(g.position, s), p.minDistance, p.maxDistance),
						t = p.gravity * g.mass / q;
					FSS.Vector3.subtractVectors(g.force, s, g.position), FSS.Vector3.normalise(g.force), FSS.Vector3.multiplyScalar(g.force, t), FSS.Vector3.set(g.acceleration), FSS.Vector3.add(g.acceleration, g.force), FSS.Vector3.add(g.velocity, g.acceleration), FSS.Vector3.multiplyScalar(g.velocity, p.dampening), FSS.Vector3.limit(g.velocity, p.minLimit, p.maxLimit), FSS.Vector3.add(g.position, g.velocity)
				}
				for (h = m.vertices.length - 1; h >= 0; h--) l = m.vertices[h], b = Math.sin(l.time + l.step[0] * i * o.speed), c = Math.cos(l.time + l.step[1] * i * o.speed), d = Math.sin(l.time + l.step[2] * i * o.speed), FSS.Vector3.set(l.position, o.xRange * m.segmentWidth * b, o.yRange * m.sliceHeight * c, o.zRange * n * d - n), FSS.Vector3.add(l.position, l.anchor);
				m.dirty = !0
			}

			function h() {
				if (j.render(k), p.draw) {
					var a, b, c, d;
					for (a = k.lights.length - 1; a >= 0; a--) d = k.lights[a], b = d.position[0], c = d.position[1]
				}
			}
			e() && $("#bg").css({
				opacity: ".2"
			});
			var i, j, k, l, m, n, o = {
					width: 1.5,
					height: 1.5,
					depth: 10,
					segments: 5,
					slices: 8,
					xRange: .8,
					yRange: .1,
					zRange: 1,
					ambient: "#555555",
					diffuse: "#FFFFFF",
					speed: 25e-5
				},
				p = {
					count: 2,
					xyScalar: 1,
					zOffset: 100,
					ambient: "#000000",
					diffuse: "#d4d4d4",
					speed: .001,
					gravity: 1200,
					dampening: .95,
					minLimit: 10,
					maxLimit: null,
					minDistance: 20,
					maxDistance: 400,
					autopilot: !1,
					draw: !0,
					bounds: FSS.Vector3.create(),
					step: FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1))
				},
				q = Date.now(),
				r = FSS.Vector3.create(),
				s = FSS.Vector3.create(),
				t = document.getElementById("bg");
			a()
		},
		g = $("#chart-area"),
		h = $("body").height();
	g.height(h - 145), $(window).on("resize", function() {
		h = $("body").height(), g.height(h - 145)
	});
	var i = g.height(),
		j = (g.width(), {}),
		k = [{
			pagenum: "1",
			title: "2014上半年应用市场用户量<br/>增长27%，分发量增长25%",
			background: "#04a5a7",
			enter: function() {
				var a = $("#templates").find("#bubble-container");
				g.html(a), a.css("margin-top", (g.height() - a.height()) / 2), Charts.get("bubble").init()
			},
			leave: function() {
				var a = g.find("#bubble-container");
				a.find(".chart-container>.bubble-container").remove(), $("#templates").append(a)
			}
		}, {
			pagenum: "2",
			title: "应用市场日分发量持续上涨，<br/>TOP3占据70%以上份额",
			background: "#1f64b0",
			enter: function() {
				var a = $("#templates").find("#area-container");
				g.html(a), Charts.get("area").init(), a.find(".legend").css({
					"margin-top": .72 * i
				})
			},
			leave: function() {
				var a = g.find("#area-container");
				a.find("#area").html(""), $("#templates").append(a)
			}
		}, {
			pagenum: "3",
			title: "移动端成为最主流的下载渠<br/>道，PC端下载比例降低",
			background: "#aa67c8",
			enter: function() {
				var a = $("#templates").find("#donut0-container");
				g.html(a), Charts.get("donut").init(), $("#donut0-container .qselect").on("touchstart", "li", function() {
					var a = $(this);
					Charts.get("donut").select(a.data("select")), a.siblings().removeClass("active"), a.addClass("active")
				}), a.find(".legend").css({
					"margin-top": "-20px"
				}), a.css("margin-top", (g.height() - a.height()) / 2 - 20)
			},
			leave: function() {
				var a = g.find("#donut0-container");
				a.find("svg").remove(), $("#templates").append(a)
			}
		}, {
			pagenum: "4",
			title: "用户群体<div class='img-r question1 btn description' idx='2'></div>年轻化特征鲜<br/>明，学生人均下载量最高",
			background: "#e09e29",
			enter: function() {
				var a = $("#templates").find("#column2-container");
				g.html(a), Charts.get("column2").init(), a.find(".legend").css({
					"margin-top": .74 * i
				})
			},
			leave: function() {
				var a = g.find("#column2-container");
				a.find("#column2").html(""), $("#templates").append(a)
			}
		}, {
			pagenum: "5",
			title: "影音视频类应用位列累计下<br/>载量第一，休闲益智类游戏<br/>最受欢迎",
			background: "#039c58",
			enter: function() {
				var a = $("#templates").find("#radars"),
					b = ["影音视频", "办公学习", "社交", "通信", "娱乐工具", "生活消费", "阅读", "浏览器"],
					c = ["动作射击", "休闲益智", "棋牌桌游", "角色扮演", "赛车竞速", "模拟辅助", "经营养成", "体育竞技", "其他游戏"];
				a.find(".row").height((i - 50) / 2);
				var d = ["countryside", "bluecollar", "student", "whitecollar"],
					e = {
						countryside: {
							items: ["#fffc00"],
							net: "white"
						},
						bluecollar: {
							items: ["#5ce700"],
							net: "white"
						},
						student: {
							items: ["#ff9999"],
							net: "white"
						},
						whitecollar: {
							items: ["#00f0ff"],
							net: "white"
						}
					},
					f = [{
						countryside: {
							categories: b,
							series: [{
								name: "countryside",
								data: [.33, .15, .08, .23, .07, .02, .05, .07].map(function(a) {
									return 2 * a
								})
							}]
						},
						bluecollar: {
							categories: b,
							series: [{
								name: "bluecollar",
								data: [.33, .11, .11, .17, .08, .06, .05, .08].map(function(a) {
									return 2 * a
								})
							}]
						},
						student: {
							categories: b,
							series: [{
								name: "student",
								data: [.25, .16, .14, .13, .1, .09, .08, .06].map(function(a) {
									return 2 * a
								})
							}]
						},
						whitecollar: {
							categories: b,
							series: [{
								name: "whitecollar",
								data: [.29, .14, .1, .14, .09, .1, .08, .07].map(function(a) {
									return 2 * a
								})
							}]
						}
					}, {
						countryside: {
							categories: c,
							series: [{
								name: "countryside",
								data: [.26, .25, .13, .09, .08, .05, .05, .04, .04].map(function(a) {
									return 2 * a
								})
							}]
						},
						bluecollar: {
							categories: c,
							series: [{
								name: "bluecollar",
								data: [.2, .3, .15, .11, .07, .04, .06, .04, .04].map(function(a) {
									return 2 * a
								})
							}]
						},
						student: {
							categories: c,
							series: [{
								name: "student",
								data: [.13, .38, .1, .12, .06, .07, .07, .04, .04].map(function(a) {
									return 2 * a
								})
							}]
						},
						whitecollar: {
							categories: c,
							series: [{
								name: "whitecollar",
								data: [.17, .32, .12, .13, .07, .05, .06, .04, .04].map(function(a) {
									return 2 * a
								})
							}]
						}
					}];
				g.html(a);
				var h = new kc.RadarChart("radar-software", {
						colors: e.countryside,
						radius: (i - 100) / 4 * .85,
						netStyle: "outer"
					}),
					j = new kc.RadarChart("radar-game", {
						colors: e.countryside,
						radius: (i - 100) / 4 * .85,
						netStyle: "outer"
					}),
					k = function(a) {
						$(".user-type>li").removeClass("active"), $(".user-type>li[data-idx='" + a + "']").addClass("active"), h.setColors(e[a]), j.setColors(e[a]), h.getData().update(f[0][a]), j.getData().update(f[1][a])
					},
					l = 0;
				a.attr("loop", m);
				var m = setInterval(function() {
					k(d[l]), l++, 4 === l && window.clearInterval(m)
				}, 1e3);
				a.attr("loop", m), $(".user-type").on("touchstart", "li", function() {
					window.clearInterval(m);
					var a = $(this),
						b = a.data("idx");
					k(b)
				})
			},
			leave: function() {
				var a = g.find("#radars"),
					b = parseInt(a.attr("loop", b));
				window.clearInterval(b), a.find("#radar-software").html(""), a.find("#radar-game").html(""), $("#templates").append(a)
			}
		}, {
			pagenum: "6",
			title: "百度平台首发应用下载量增<br>长约2-4倍，是最具人气的应<br>用首发平台",
			background: "#a7a004",
			enter: function() {
				var a = $("#templates").find("#column3-container");
				g.html(a), Charts.get("column3").init(), a.find(".legend").css({
					"margin-top": .75 * i
				})
			},
			leave: function() {
				var a = g.find("#column3-container");
				a.find("#column3").html(""), $("#templates").append(a)
			}
		}, {
			pagenum: "7",
			title: "百度分发平台坐拥庞大的入<br/>口流量与分发规模，稳居行<br/>业第一",
			background: "#059fbd",
			enter: function() {
				var a = $("#templates").find("#lights"),
					b = i / 315;
				a.css({
					"-webkit-transform": "scale(" + b + ") translate3d(0,-" + i * (1 - b) / 2 + "px,0)"
				}), g.html(a), $("#round1,#round2,#round3").anim({
					"-webkit-transform": "scale(1) translateX(0)"
				}, 1, "ease-in", function() {
					$("#light1,#light2,#light3").anim({
						"-webkit-transform": "scale(1)"
					})
				})
			},
			leave: function() {
				var a = g.find("#lights");
				$("#round1,#round3").anim({
					"-webkit-transform": "scale(5) translateX(500px)"
				}, 0), $("#round2").anim({
					"-webkit-transform": "scale(5) translateX(-500px)"
				}, 0), $("#light1,#light2,#light3").anim({
					"-webkit-transform": "scale(0.01)"
				}, 0), $("#templates").append(a)
			}
		}, {
			pagenum: "8",
			title: "百度通过一站式多平台分发<br/>矩阵，构建最高效的分发生<br/>态闭环",
			background: "#b63d90",
			enter: function() {
				var a = $("#templates").find("#donut-container");
				g.html(a), j.donut2 = Charts.get("donut2").init();
				var b = i / 300;
				a.css({
					"-webkit-transform": "scale(" + b + ") translate3d(0,-" + i * (1 - b) / 2 + "px,0)"
				})
			},
			leave: function() {
				var a = g.find("#donut-container");
				a.css({
					"-webkit-transform": "scale(1) translate3d(0,0,0)"
				}), a.find("#donut2").html("").css("-webkit-transform", "rotate(0deg)"), j.donut2.unbind(), a.find(".center").html(""), $("#templates").append(a)
			}
		}, {
			pagenum: "9",
			title: "应用分发发展趋势",
			background: "#ce3b5b",
			enter: function() {
				$(".number,#chart-area").addClass("page9");
				var a = $("#templates").find("#text-container"),
					b = i / 348;
				a.css({
					"-webkit-transform": "scale(" + b + ") translate3d(0,-" + i * (1 - b) / 2 + "px,0)"
				}), g.html(a);
				var c = 0;
				a.find("p,h1").anim({
					"-webkit-transform": "translateY(500px)"
				}, 0, null, function() {
					$(this).anim({
						"-webkit-transform": "translateY(0)"
					}, .3 + .1 * c), c++
				}), a.css("margin-top", (g.height() - a.height()) / 2 - 10)
			},
			leave: function() {
				$(".number,#chart-area").removeClass("page9");
				var a = g.find("#text-container");
				$("#templates").append(a)
			}
		}];
	f(), $("body").on("touchmove", function(a) {
		a.preventDefault()
	}).on("touchstart", ".description", function() {
		var a = $(this),
			b = $(".mask"),
			c = a.attr("idx");
		b.find(".msg-body").html(d[c]), b.show()
	}), $(".mask").on("touchstart", ".msg-ok", function() {
		$(".mask").hide()
	}), $("#inner").hammer().bind({
		swipeup: function() {
			8 === c.curState ? $("#inner").anim({
				"-webkit-transform": "translateY(" + -h + "px)"
			}) : c.toNextState()
		},
		swipedown: function() {
			0 === c.curState ? $("#cover").anim({
				"-webkit-transform": "translateY(0)"
			}) : c.toPrevState()
		}
	}), window.DeviceMotionEvent && window.addEventListener("devicemotion", a, !1), $("#cover").hammer().bind({
		swipeup: function() {
			var a = $(this),
				b = $("body").height();
			a.anim({
				"-webkit-transform": "translateY(" + -b + "px)"
			}, .2, null, function() {
				c ? c.toState(0) : c = new Utils.StateTranser(k, 0)
			})
		}
	}), $("#back").hammer().bind({
		swipedown: function() {
			$("#inner").anim({
				"-webkit-transform": "translateY(0)"
			}, .5)
		}
	}), b() || ($(".header").css("text-align", "center"), $(".share").remove()), document.addEventListener("WeixinJSBridgeReady", function() {
		function a() {
			window._hmt && _hmt.push(["_trackEvent", "91dist", "share", "message"])
		}

		function b() {
			window._hmt && _hmt.push(["_trackEvent", "91dist", "share", "friend"])
		}
		var c = {
			img_width: 300,
			img_height: 300,
			img_url: "http://img.baidu.com/hunter/t/91_weixin_pic.jpg",
			link: "http://shushuo.baidu.com/act/91dist/app/",
			desc: "2014上半年移动分发趋势报告",
			title: "2014上半年移动分发趋势报告"
		};
		WeixinJSBridge.on("menu:share:appmessage", function() {
			WeixinJSBridge.invoke("sendAppMessage", c, a)
		}), WeixinJSBridge.on("menu:share:timeline", function() {
			WeixinJSBridge.invoke("shareTimeline", c, b)
		})
	}), $("#more").hammer().on("tap", function(a) {
		a.preventDefault(), setTimeout(function() {
			location.href = "http://mp.weixin.qq.com/s?__biz=MjM5MDEzMDYyMQ==&mid=200630200&idx=1&sn=4a0be02786b78c67ab447d111a8316d8&scene=1#rd"
		}, 400)
	}), $("#shushuo").hammer().on("tap", function(a) {
		a.preventDefault(), setTimeout(function() {
			location.href = "http://shushuo.baidu.com/"
		}, 400)
	})
}
var Zepto = function() {
	function a(a) {
		return null == a ? String(a) : U[V.call(a)] || "object"
	}

	function b(b) {
		return "function" == a(b)
	}

	function c(a) {
		return null != a && a == a.window
	}

	function d(a) {
		return null != a && a.nodeType == a.DOCUMENT_NODE
	}

	function e(b) {
		return "object" == a(b)
	}

	function f(a) {
		return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype
	}

	function g(a) {
		return "number" == typeof a.length
	}

	function h(a) {
		return D.call(a, function(a) {
			return null != a
		})
	}

	function i(a) {
		return a.length > 0 ? x.fn.concat.apply([], a) : a
	}

	function j(a) {
		return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}

	function k(a) {
		return a in G ? G[a] : G[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
	}

	function l(a, b) {
		return "number" != typeof b || H[j(a)] ? b : b + "px"
	}

	function m(a) {
		var b, c;
		return F[a] || (b = E.createElement(a), E.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), F[a] = c), F[a]
	}

	function n(a) {
		return "children" in a ? C.call(a.children) : x.map(a.childNodes, function(a) {
			return 1 == a.nodeType ? a : void 0
		})
	}

	function o(a, b, c) {
		for (w in b) c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Z(b[w]) && !Z(a[w]) && (a[w] = []), o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w])
	}

	function p(a, b) {
		return null == b ? x(a) : x(a).filter(b)
	}

	function q(a, c, d, e) {
		return b(c) ? c.call(a, d, e) : c
	}

	function r(a, b, c) {
		null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
	}

	function s(a, b) {
		var c = a.className,
			d = c && c.baseVal !== v;
		return b === v ? d ? c.baseVal : c : void(d ? c.baseVal = b : a.className = b)
	}

	function t(a) {
		var b;
		try {
			return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : /^0/.test(a) || isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? x.parseJSON(a) : a : b) : a
		} catch (c) {
			return a
		}
	}

	function u(a, b) {
		b(a);
		for (var c = 0, d = a.childNodes.length; d > c; c++) u(a.childNodes[c], b)
	}
	var v, w, x, y, z, A, B = [],
		C = B.slice,
		D = B.filter,
		E = window.document,
		F = {},
		G = {},
		H = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		I = /^\s*<(\w+|!)[^>]*>/,
		J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		L = /^(?:body|html)$/i,
		M = /([A-Z])/g,
		N = ["val", "css", "html", "text", "data", "width", "height", "offset"],
		O = ["after", "prepend", "before", "append"],
		P = E.createElement("table"),
		Q = E.createElement("tr"),
		R = {
			tr: E.createElement("tbody"),
			tbody: P,
			thead: P,
			tfoot: P,
			td: Q,
			th: Q,
			"*": E.createElement("div")
		},
		S = /complete|loaded|interactive/,
		T = /^[\w-]*$/,
		U = {},
		V = U.toString,
		W = {},
		X = E.createElement("div"),
		Y = {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		Z = Array.isArray || function(a) {
			return a instanceof Array
		};
	return W.matches = function(a, b) {
		if (!b || !a || 1 !== a.nodeType) return !1;
		var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
		if (c) return c.call(a, b);
		var d, e = a.parentNode,
			f = !e;
		return f && (e = X).appendChild(a), d = ~W.qsa(e, b).indexOf(a), f && X.removeChild(a), d
	}, z = function(a) {
		return a.replace(/-+(.)?/g, function(a, b) {
			return b ? b.toUpperCase() : ""
		})
	}, A = function(a) {
		return D.call(a, function(b, c) {
			return a.indexOf(b) == c
		})
	}, W.fragment = function(a, b, c) {
		var d, e, g;
		return J.test(a) && (d = x(E.createElement(RegExp.$1))), d || (a.replace && (a = a.replace(K, "<$1></$2>")), b === v && (b = I.test(a) && RegExp.$1), b in R || (b = "*"), g = R[b], g.innerHTML = "" + a, d = x.each(C.call(g.childNodes), function() {
			g.removeChild(this)
		})), f(c) && (e = x(d), x.each(c, function(a, b) {
			N.indexOf(a) > -1 ? e[a](b) : e.attr(a, b)
		})), d
	}, W.Z = function(a, b) {
		return a = a || [], a.__proto__ = x.fn, a.selector = b || "", a
	}, W.isZ = function(a) {
		return a instanceof W.Z
	}, W.init = function(a, c) {
		var d;
		if (!a) return W.Z();
		if ("string" == typeof a)
			if (a = a.trim(), "<" == a[0] && I.test(a)) d = W.fragment(a, RegExp.$1, c), a = null;
			else {
				if (c !== v) return x(c).find(a);
				d = W.qsa(E, a)
			} else {
			if (b(a)) return x(E).ready(a);
			if (W.isZ(a)) return a;
			if (Z(a)) d = h(a);
			else if (e(a)) d = [a], a = null;
			else if (I.test(a)) d = W.fragment(a.trim(), RegExp.$1, c), a = null;
			else {
				if (c !== v) return x(c).find(a);
				d = W.qsa(E, a)
			}
		}
		return W.Z(d, a)
	}, x = function(a, b) {
		return W.init(a, b)
	}, x.extend = function(a) {
		var b, c = C.call(arguments, 1);
		return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function(c) {
			o(a, c, b)
		}), a
	}, W.qsa = function(a, b) {
		var c, e = "#" == b[0],
			f = !e && "." == b[0],
			g = e || f ? b.slice(1) : b,
			h = T.test(g);
		return d(a) && h && e ? (c = a.getElementById(g)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : C.call(h && !e ? f ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
	}, x.contains = E.documentElement.contains ? function(a, b) {
		return a !== b && a.contains(b)
	} : function(a, b) {
		for (; b && (b = b.parentNode);)
			if (b === a) return !0;
		return !1
	}, x.type = a, x.isFunction = b, x.isWindow = c, x.isArray = Z, x.isPlainObject = f, x.isEmptyObject = function(a) {
		var b;
		for (b in a) return !1;
		return !0
	}, x.inArray = function(a, b, c) {
		return B.indexOf.call(b, a, c)
	}, x.camelCase = z, x.trim = function(a) {
		return null == a ? "" : String.prototype.trim.call(a)
	}, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function(a, b) {
		var c, d, e, f = [];
		if (g(a))
			for (d = 0; d < a.length; d++) c = b(a[d], d), null != c && f.push(c);
		else
			for (e in a) c = b(a[e], e), null != c && f.push(c);
		return i(f)
	}, x.each = function(a, b) {
		var c, d;
		if (g(a)) {
			for (c = 0; c < a.length; c++)
				if (b.call(a[c], c, a[c]) === !1) return a
		} else
			for (d in a)
				if (b.call(a[d], d, a[d]) === !1) return a;
		return a
	}, x.grep = function(a, b) {
		return D.call(a, b)
	}, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
		U["[object " + b + "]"] = b.toLowerCase()
	}), x.fn = {
		forEach: B.forEach,
		reduce: B.reduce,
		push: B.push,
		sort: B.sort,
		indexOf: B.indexOf,
		concat: B.concat,
		map: function(a) {
			return x(x.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return x(C.apply(this, arguments))
		},
		ready: function(a) {
			return S.test(E.readyState) && E.body ? a(x) : E.addEventListener("DOMContentLoaded", function() {
				a(x)
			}, !1), this
		},
		get: function(a) {
			return a === v ? C.call(this) : this[a >= 0 ? a : a + this.length]
		},
		toArray: function() {
			return this.get()
		},
		size: function() {
			return this.length
		},
		remove: function() {
			return this.each(function() {
				null != this.parentNode && this.parentNode.removeChild(this)
			})
		},
		each: function(a) {
			return B.every.call(this, function(b, c) {
				return a.call(b, c, b) !== !1
			}), this
		},
		filter: function(a) {
			return b(a) ? this.not(this.not(a)) : x(D.call(this, function(b) {
				return W.matches(b, a)
			}))
		},
		add: function(a, b) {
			return x(A(this.concat(x(a, b))))
		},
		is: function(a) {
			return this.length > 0 && W.matches(this[0], a)
		},
		not: function(a) {
			var c = [];
			if (b(a) && a.call !== v) this.each(function(b) {
				a.call(this, b) || c.push(this)
			});
			else {
				var d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? C.call(a) : x(a);
				this.forEach(function(a) {
					d.indexOf(a) < 0 && c.push(a)
				})
			}
			return x(c)
		},
		has: function(a) {
			return this.filter(function() {
				return e(a) ? x.contains(this, a) : x(this).find(a).size()
			})
		},
		eq: function(a) {
			return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
		},
		first: function() {
			var a = this[0];
			return a && !e(a) ? a : x(a)
		},
		last: function() {
			var a = this[this.length - 1];
			return a && !e(a) ? a : x(a)
		},
		find: function(a) {
			var b, c = this;
			return b = a ? "object" == typeof a ? x(a).filter(function() {
				var a = this;
				return B.some.call(c, function(b) {
					return x.contains(b, a)
				})
			}) : 1 == this.length ? x(W.qsa(this[0], a)) : this.map(function() {
				return W.qsa(this, a)
			}) : []
		},
		closest: function(a, b) {
			var c = this[0],
				e = !1;
			for ("object" == typeof a && (e = x(a)); c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a));) c = c !== b && !d(c) && c.parentNode;
			return x(c)
		},
		parents: function(a) {
			for (var b = [], c = this; c.length > 0;) c = x.map(c, function(a) {
				return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
			});
			return p(b, a)
		},
		parent: function(a) {
			return p(A(this.pluck("parentNode")), a)
		},
		children: function(a) {
			return p(this.map(function() {
				return n(this)
			}), a)
		},
		contents: function() {
			return this.map(function() {
				return C.call(this.childNodes)
			})
		},
		siblings: function(a) {
			return p(this.map(function(a, b) {
				return D.call(n(b.parentNode), function(a) {
					return a !== b
				})
			}), a)
		},
		empty: function() {
			return this.each(function() {
				this.innerHTML = ""
			})
		},
		pluck: function(a) {
			return x.map(this, function(b) {
				return b[a]
			})
		},
		show: function() {
			return this.each(function() {
				"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
			})
		},
		replaceWith: function(a) {
			return this.before(a).remove()
		},
		wrap: function(a) {
			var c = b(a);
			if (this[0] && !c) var d = x(a).get(0),
				e = d.parentNode || this.length > 1;
			return this.each(function(b) {
				x(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
			})
		},
		wrapAll: function(a) {
			if (this[0]) {
				x(this[0]).before(a = x(a));
				for (var b;
					(b = a.children()).length;) a = b.first();
				x(a).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			var c = b(a);
			return this.each(function(b) {
				var d = x(this),
					e = d.contents(),
					f = c ? a.call(this, b) : a;
				e.length ? e.wrapAll(f) : d.append(f)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				x(this).replaceWith(x(this).children())
			}), this
		},
		clone: function() {
			return this.map(function() {
				return this.cloneNode(!0)
			})
		},
		hide: function() {
			return this.css("display", "none")
		},
		toggle: function(a) {
			return this.each(function() {
				var b = x(this);
				(a === v ? "none" == b.css("display") : a) ? b.show(): b.hide()
			})
		},
		prev: function(a) {
			return x(this.pluck("previousElementSibling")).filter(a || "*")
		},
		next: function(a) {
			return x(this.pluck("nextElementSibling")).filter(a || "*")
		},
		html: function(a) {
			return 0 in arguments ? this.each(function(b) {
				var c = this.innerHTML;
				x(this).empty().append(q(this, a, b, c))
			}) : 0 in this ? this[0].innerHTML : null
		},
		text: function(a) {
			return 0 in arguments ? this.each(function(b) {
				var c = q(this, a, b, this.textContent);
				this.textContent = null == c ? "" : "" + c
			}) : 0 in this ? this[0].textContent : null
		},
		attr: function(a, b) {
			var c;
			return "string" != typeof a || 1 in arguments ? this.each(function(c) {
				if (1 === this.nodeType)
					if (e(a))
						for (w in a) r(this, w, a[w]);
					else r(this, a, q(this, b, c, this.getAttribute(a)))
			}) : this.length && 1 === this[0].nodeType ? !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : v
		},
		removeAttr: function(a) {
			return this.each(function() {
				1 === this.nodeType && r(this, a)
			})
		},
		prop: function(a, b) {
			return a = Y[a] || a, 1 in arguments ? this.each(function(c) {
				this[a] = q(this, b, c, this[a])
			}) : this[0] && this[0][a]
		},
		data: function(a, b) {
			var c = "data-" + a.replace(M, "-$1").toLowerCase(),
				d = 1 in arguments ? this.attr(c, b) : this.attr(c);
			return null !== d ? t(d) : v
		},
		val: function(a) {
			return 0 in arguments ? this.each(function(b) {
				this.value = q(this, a, b, this.value)
			}) : this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
				return this.selected
			}).pluck("value") : this[0].value)
		},
		offset: function(a) {
			if (a) return this.each(function(b) {
				var c = x(this),
					d = q(this, a, b, c.offset()),
					e = c.offsetParent().offset(),
					f = {
						top: d.top - e.top,
						left: d.left - e.left
					};
				"static" == c.css("position") && (f.position = "relative"), c.css(f)
			});
			if (!this.length) return null;
			var b = this[0].getBoundingClientRect();
			return {
				left: b.left + window.pageXOffset,
				top: b.top + window.pageYOffset,
				width: Math.round(b.width),
				height: Math.round(b.height)
			}
		},
		css: function(b, c) {
			if (arguments.length < 2) {
				var d = this[0],
					e = getComputedStyle(d, "");
				if (!d) return;
				if ("string" == typeof b) return d.style[z(b)] || e.getPropertyValue(b);
				if (Z(b)) {
					var f = {};
					return x.each(Z(b) ? b : [b], function(a, b) {
						f[b] = d.style[z(b)] || e.getPropertyValue(b)
					}), f
				}
			}
			var g = "";
			if ("string" == a(b)) c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function() {
				this.style.removeProperty(j(b))
			});
			else
				for (w in b) b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";" : this.each(function() {
					this.style.removeProperty(j(w))
				});
			return this.each(function() {
				this.style.cssText += ";" + g
			})
		},
		index: function(a) {
			return a ? this.indexOf(x(a)[0]) : this.parent().children().indexOf(this[0])
		},
		hasClass: function(a) {
			return a ? B.some.call(this, function(a) {
				return this.test(s(a))
			}, k(a)) : !1
		},
		addClass: function(a) {
			return a ? this.each(function(b) {
				y = [];
				var c = s(this),
					d = q(this, a, b, c);
				d.split(/\s+/g).forEach(function(a) {
					x(this).hasClass(a) || y.push(a)
				}, this), y.length && s(this, c + (c ? " " : "") + y.join(" "))
			}) : this
		},
		removeClass: function(a) {
			return this.each(function(b) {
				return a === v ? s(this, "") : (y = s(this), q(this, a, b, y).split(/\s+/g).forEach(function(a) {
					y = y.replace(k(a), " ")
				}), void s(this, y.trim()))
			})
		},
		toggleClass: function(a, b) {
			return a ? this.each(function(c) {
				var d = x(this),
					e = q(this, a, c, s(this));
				e.split(/\s+/g).forEach(function(a) {
					(b === v ? !d.hasClass(a) : b) ? d.addClass(a): d.removeClass(a)
				})
			}) : this
		},
		scrollTop: function(a) {
			if (this.length) {
				var b = "scrollTop" in this[0];
				return a === v ? b ? this[0].scrollTop : this[0].pageYOffset : this.each(b ? function() {
					this.scrollTop = a
				} : function() {
					this.scrollTo(this.scrollX, a)
				})
			}
		},
		scrollLeft: function(a) {
			if (this.length) {
				var b = "scrollLeft" in this[0];
				return a === v ? b ? this[0].scrollLeft : this[0].pageXOffset : this.each(b ? function() {
					this.scrollLeft = a
				} : function() {
					this.scrollTo(a, this.scrollY)
				})
			}
		},
		position: function() {
			if (this.length) {
				var a = this[0],
					b = this.offsetParent(),
					c = this.offset(),
					d = L.test(b[0].nodeName) ? {
						top: 0,
						left: 0
					} : b.offset();
				return c.top -= parseFloat(x(a).css("margin-top")) || 0, c.left -= parseFloat(x(a).css("margin-left")) || 0, d.top += parseFloat(x(b[0]).css("border-top-width")) || 0, d.left += parseFloat(x(b[0]).css("border-left-width")) || 0, {
					top: c.top - d.top,
					left: c.left - d.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && "static" == x(a).css("position");) a = a.offsetParent;
				return a
			})
		}
	}, x.fn.detach = x.fn.remove, ["width", "height"].forEach(function(a) {
		var b = a.replace(/./, function(a) {
			return a[0].toUpperCase()
		});
		x.fn[a] = function(e) {
			var f, g = this[0];
			return e === v ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function(b) {
				g = x(this), g.css(a, q(this, e, b, g[a]()))
			})
		}
	}), O.forEach(function(b, c) {
		var d = c % 2;
		x.fn[b] = function() {
			var b, e, f = x.map(arguments, function(c) {
					return b = a(c), "object" == b || "array" == b || null == c ? c : W.fragment(c)
				}),
				g = this.length > 1;
			return f.length < 1 ? this : this.each(function(a, b) {
				e = d ? b : b.parentNode, b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null;
				var h = x.contains(E.documentElement, e);
				f.forEach(function(a) {
					if (g) a = a.cloneNode(!0);
					else if (!e) return x(a).remove();
					e.insertBefore(a, b), h && u(a, function(a) {
						null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
					})
				})
			})
		}, x.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
			return x(a)[b](this), this
		}
	}), W.Z.prototype = x.fn, W.uniq = A, W.deserializeValue = t, x.zepto = W, x
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
	function(a) {
		function b(a) {
			return a._zid || (a._zid = m++)
		}

		function c(a, c, f, g) {
			if (c = d(c), c.ns) var h = e(c.ns);
			return (q[b(a)] || []).filter(function(a) {
				return !(!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
			})
		}

		function d(a) {
			var b = ("" + a).split(".");
			return {
				e: b[0],
				ns: b.slice(1).sort().join(" ")
			}
		}

		function e(a) {
			return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
		}

		function f(a, b) {
			return a.del && !s && a.e in t || !!b
		}

		function g(a) {
			return u[a] || s && t[a] || a
		}

		function h(c, e, h, i, k, m, n) {
			var o = b(c),
				p = q[o] || (q[o] = []);
			e.split(/\s/).forEach(function(b) {
				if ("ready" == b) return a(document).ready(h);
				var e = d(b);
				e.fn = h, e.sel = k, e.e in u && (h = function(b) {
					console.log('aa');
					var c = b.relatedTarget;
					return !c || c !== this && !a.contains(this, c) ? e.fn.apply(this, arguments) : void 0
				}), e.del = m;
				var o = m || h;
				e.proxy = function(a) {
					if (a = j(a), !a.isImmediatePropagationStopped()) {
						a.data = i;
						var b = o.apply(c, a._args == l ? [a] : [a].concat(a._args));
						return b === !1 && (a.preventDefault(), a.stopPropagation()), b
					}
				}, e.i = p.length, p.push(e), "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n))
			})
		}

		function i(a, d, e, h, i) {
			var j = b(a);
			(d || "").split(/\s/).forEach(function(b) {
				c(a, b, e, h).forEach(function(b) {
					delete q[j][b.i], "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i))
				})
			})
		}

		function j(b, c) {
			return (c || !b.isDefaultPrevented) && (c || (c = b), a.each(y, function(a, d) {
				var e = c[a];
				b[a] = function() {
					return this[d] = v, e && e.apply(c, arguments)
				}, b[d] = w
			}), (c.defaultPrevented !== l ? c.defaultPrevented : "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)), b
		}

		function k(a) {
			var b, c = {
				originalEvent: a
			};
			for (b in a) x.test(b) || a[b] === l || (c[b] = a[b]);
			return j(c, a)
		}
		var l, m = 1,
			n = Array.prototype.slice,
			o = a.isFunction,
			p = function(a) {
				return "string" == typeof a
			},
			q = {},
			r = {},
			s = "onfocusin" in window,
			t = {
				focus: "focusin",
				blur: "focusout"
			},
			u = {
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			};
		r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents", a.event = {
			add: h,
			remove: i
		}, a.proxy = function(c, d) {
			var e = 2 in arguments && n.call(arguments, 2);
			if (o(c)) {
				var f = function() {
					return c.apply(d, e ? e.concat(n.call(arguments)) : arguments)
				};
				return f._zid = b(c), f
			}
			if (p(d)) return e ? (e.unshift(c[d], c), a.proxy.apply(null, e)) : a.proxy(c[d], c);
			throw new TypeError("expected function")
		}, a.fn.bind = function(a, b, c) {
			return this.on(a, b, c)
		}, a.fn.unbind = function(a, b) {
			return this.off(a, b)
		}, a.fn.one = function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		};
		var v = function() {
				return !0
			},
			w = function() {
				return !1
			},
			x = /^([A-Z]|returnValue$|layer[XY]$)/,
			y = {
				preventDefault: "isDefaultPrevented",
				stopImmediatePropagation: "isImmediatePropagationStopped",
				stopPropagation: "isPropagationStopped"
			};
		a.fn.delegate = function(a, b, c) {
			return this.on(b, a, c)
		}, a.fn.undelegate = function(a, b, c) {
			return this.off(b, a, c)
		}, a.fn.live = function(b, c) {
			return a(document.body).delegate(this.selector, b, c), this
		}, a.fn.die = function(b, c) {
			return a(document.body).undelegate(this.selector, b, c), this
		}, a.fn.on = function(b, c, d, e, f) {
			var g, j, m = this;
			return b && !p(b) ? (a.each(b, function(a, b) {
				m.on(a, c, d, b, f)
			}), m) : (p(c) || o(e) || e === !1 || (e = d, d = c, c = l), (o(d) || d === !1) && (e = d, d = l), e === !1 && (e = w), m.each(function(l, m) {
				f && (g = function(a) {
					return i(m, a.type, e), e.apply(this, arguments)
				}), c && (j = function(b) {
					var d, f = a(b.target).closest(c, m).get(0);
					return f && f !== m ? (d = a.extend(k(b), {
						currentTarget: f,
						liveFired: m
					}), (g || e).apply(f, [d].concat(n.call(arguments, 1)))) : void 0
				}), h(m, b, e, d, c, j || g)
			}))
		}, a.fn.off = function(b, c, d) {
			var e = this;
			return b && !p(b) ? (a.each(b, function(a, b) {
				e.off(a, c, b)
			}), e) : (p(c) || o(d) || d === !1 || (d = c, c = l), d === !1 && (d = w), e.each(function() {
				i(this, b, d, c)
			}))
		}, a.fn.trigger = function(b, c) {
			return b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b), b._args = c, this.each(function() {
				"dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
			})
		}, a.fn.triggerHandler = function(b, d) {
			var e, f;
			return this.each(function(g, h) {
				e = k(p(b) ? a.Event(b) : b), e._args = d, e.target = h, a.each(c(h, b.type || b), function(a, b) {
					return f = b.proxy(e), e.isImmediatePropagationStopped() ? !1 : void 0
				})
			}), f
		}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
			a.fn[b] = function(a) {
				return a ? this.bind(b, a) : this.trigger(b)
			}
		}), ["focus", "blur"].forEach(function(b) {
			a.fn[b] = function(a) {
				return a ? this.bind(b, a) : this.each(function() {
					try {
						this[b]()
					} catch (a) {}
				}), this
			}
		}), a.Event = function(a, b) {
			p(a) || (b = a, a = b.type);
			var c = document.createEvent(r[a] || "Events"),
				d = !0;
			if (b)
				for (var e in b) "bubbles" == e ? d = !!b[e] : c[e] = b[e];
			return c.initEvent(a, d, !0), j(c)
		}
	}(Zepto),
	function(a) {
		function b(b, c, d) {
			var e = a.Event(c);
			return a(b).trigger(e, d), !e.isDefaultPrevented()
		}

		function c(a, c, d, e) {
			return a.global ? b(c || s, d, e) : void 0
		}

		function d(b) {
			b.global && 0 === a.active++ && c(b, null, "ajaxStart")
		}

		function e(b) {
			b.global && !--a.active && c(b, null, "ajaxStop")
		}

		function f(a, b) {
			var d = b.context;
			return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [a, b]) === !1 ? !1 : void c(b, d, "ajaxSend", [a, b])
		}

		function g(a, b, d, e) {
			var f = d.context,
				g = "success";
			d.success.call(f, a, g, b), e && e.resolveWith(f, [a, g, b]), c(d, f, "ajaxSuccess", [b, d, a]), i(g, b, d)
		}

		function h(a, b, d, e, f) {
			var g = e.context;
			e.error.call(g, d, b, a), f && f.rejectWith(g, [d, b, a]), c(e, g, "ajaxError", [d, e, a || b]), i(b, d, e)
		}

		function i(a, b, d) {
			var f = d.context;
			d.complete.call(f, b, a), c(d, f, "ajaxComplete", [b, d]), e(d)
		}

		function j() {}

		function k(a) {
			return a && (a = a.split(";", 2)[0]), a && (a == x ? "html" : a == w ? "json" : u.test(a) ? "script" : v.test(a) && "xml") || "text"
		}

		function l(a, b) {
			return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
		}

		function m(b) {
			b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)), !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data), b.data = void 0)
		}

		function n(b, c, d, e) {
			return a.isFunction(c) && (e = d, d = c, c = void 0), a.isFunction(d) || (e = d, d = void 0), {
				url: b,
				data: c,
				success: d,
				dataType: e
			}
		}

		function o(b, c, d, e) {
			var f, g = a.isArray(c),
				h = a.isPlainObject(c);
			a.each(c, function(c, i) {
				f = a.type(i), e && (c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"), !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i)
			})
		}
		var p, q, r = 0,
			s = window.document,
			t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			u = /^(?:text|application)\/javascript/i,
			v = /^(?:text|application)\/xml/i,
			w = "application/json",
			x = "text/html",
			y = /^\s*$/;
		a.active = 0, a.ajaxJSONP = function(b, c) {
			if (!("type" in b)) return a.ajax(b);
			var d, e, i = b.jsonpCallback,
				j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r,
				k = s.createElement("script"),
				l = window[j],
				m = function(b) {
					a(k).triggerHandler("error", b || "abort")
				},
				n = {
					abort: m
				};
			return c && c.promise(n), a(k).on("load error", function(f, i) {
				clearTimeout(e), a(k).off().remove(), "error" != f.type && d ? g(d[0], n, b, c) : h(null, i || "error", n, b, c), window[j] = l, d && a.isFunction(l) && l(d[0]), l = d = void 0
			}), f(n, b) === !1 ? (m("abort"), n) : (window[j] = function() {
				d = arguments
			}, k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j), s.head.appendChild(k), b.timeout > 0 && (e = setTimeout(function() {
				m("timeout")
			}, b.timeout)), n)
		}, a.ajaxSettings = {
			type: "GET",
			beforeSend: j,
			success: j,
			error: j,
			complete: j,
			context: null,
			global: !0,
			xhr: function() {
				return new window.XMLHttpRequest
			},
			accepts: {
				script: "text/javascript, application/javascript, application/x-javascript",
				json: w,
				xml: "application/xml, text/xml",
				html: x,
				text: "text/plain"
			},
			crossDomain: !1,
			timeout: 0,
			processData: !0,
			cache: !0
		}, a.ajax = function(b) {
			var c = a.extend({}, b || {}),
				e = a.Deferred && a.Deferred();
			for (p in a.ajaxSettings) void 0 === c[p] && (c[p] = a.ajaxSettings[p]);
			d(c), c.crossDomain || (c.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(c.url) && RegExp.$2 != window.location.host), c.url || (c.url = window.location.toString()), m(c);
			var i = c.dataType,
				n = /\?.+=\?/.test(c.url);
			if (n && (i = "jsonp"), c.cache !== !1 && (b && b.cache === !0 || "script" != i && "jsonp" != i) || (c.url = l(c.url, "_=" + Date.now())), "jsonp" == i) return n || (c.url = l(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")), a.ajaxJSONP(c, e);
			var o, r = c.accepts[i],
				s = {},
				t = function(a, b) {
					s[a.toLowerCase()] = [a, b]
				},
				u = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : window.location.protocol,
				v = c.xhr(),
				w = v.setRequestHeader;
			if (e && e.promise(v), c.crossDomain || t("X-Requested-With", "XMLHttpRequest"), t("Accept", r || "*/*"), (r = c.mimeType || r) && (r.indexOf(",") > -1 && (r = r.split(",", 2)[0]), v.overrideMimeType && v.overrideMimeType(r)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && t("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers)
				for (q in c.headers) t(q, c.headers[q]);
			if (v.setRequestHeader = t, v.onreadystatechange = function() {
					if (4 == v.readyState) {
						v.onreadystatechange = j, clearTimeout(o);
						var b, d = !1;
						if (v.status >= 200 && v.status < 300 || 304 == v.status || 0 == v.status && "file:" == u) {
							i = i || k(c.mimeType || v.getResponseHeader("content-type")), b = v.responseText;
							try {
								"script" == i ? (1, eval)(b) : "xml" == i ? b = v.responseXML : "json" == i && (b = y.test(b) ? null : a.parseJSON(b))
							} catch (f) {
								d = f
							}
							d ? h(d, "parsererror", v, c, e) : g(b, v, c, e)
						} else h(v.statusText || null, v.status ? "error" : "abort", v, c, e)
					}
				}, f(v, c) === !1) return v.abort(), h(null, "abort", v, c, e), v;
			if (c.xhrFields)
				for (q in c.xhrFields) v[q] = c.xhrFields[q];
			var x = "async" in c ? c.async : !0;
			v.open(c.type, c.url, x, c.username, c.password);
			for (q in s) w.apply(v, s[q]);
			return c.timeout > 0 && (o = setTimeout(function() {
				v.onreadystatechange = j, v.abort(), h(null, "timeout", v, c, e)
			}, c.timeout)), v.send(c.data ? c.data : null), v
		}, a.get = function() {
			return a.ajax(n.apply(null, arguments))
		}, a.post = function() {
			var b = n.apply(null, arguments);
			return b.type = "POST", a.ajax(b)
		}, a.getJSON = function() {
			var b = n.apply(null, arguments);
			return b.dataType = "json", a.ajax(b)
		}, a.fn.load = function(b, c, d) {
			if (!this.length) return this;
			var e, f = this,
				g = b.split(/\s/),
				h = n(b, c, d),
				i = h.success;
			return g.length > 1 && (h.url = g[0], e = g[1]), h.success = function(b) {
				f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b), i && i.apply(f, arguments)
			}, a.ajax(h), this
		};
		var z = encodeURIComponent;
		a.param = function(a, b) {
			var c = [];
			return c.add = function(a, b) {
				this.push(z(a) + "=" + z(b))
			}, o(c, a, b), c.join("&").replace(/%20/g, "+")
		}
	}(Zepto),
	function(a) {
		a.fn.serializeArray = function() {
			var b, c = [];
			return a([].slice.call(this.get(0).elements)).each(function() {
				b = a(this);
				var d = b.attr("type");
				"fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != d && "reset" != d && "button" != d && ("radio" != d && "checkbox" != d || this.checked) && c.push({
					name: b.attr("name"),
					value: b.val()
				})
			}), c
		}, a.fn.serialize = function() {
			var a = [];
			return this.serializeArray().forEach(function(b) {
				a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
			}), a.join("&")
		}, a.fn.submit = function(b) {
			if (b) this.bind("submit", b);
			else if (this.length) {
				var c = a.Event("submit");
				this.eq(0).trigger(c), c.isDefaultPrevented() || this.get(0).submit()
			}
			return this
		}
	}(Zepto),
	function(a) {
		"__proto__" in {} || a.extend(a.zepto, {
			Z: function(b, c) {
				return b = b || [], a.extend(b, a.fn), b.selector = c || "", b.__Z = !0, b
			},
			isZ: function(b) {
				return "array" === a.type(b) && "__Z" in b
			}
		});
		try {
			getComputedStyle(void 0)
		} catch (b) {
			var c = getComputedStyle;
			window.getComputedStyle = function(a) {
				try {
					return c(a)
				} catch (b) {
					return null
				}
			}
		}
	}(Zepto),
	function(a, b) {
		function c(a) {
			return a.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
		}

		function d(a) {
			return e ? e + a : a.toLowerCase()
		}
		var e, f, g, h, i, j, k, l, m, n, o = "",
			p = {
				Webkit: "webkit",
				Moz: "",
				O: "o"
			},
			q = window.document,
			r = q.createElement("div"),
			s = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
			t = {};
		a.each(p, function(a, c) {
			return r.style[a + "TransitionProperty"] !== b ? (o = "-" + a.toLowerCase() + "-", e = c, !1) : void 0
		}), f = o + "transform", t[g = o + "transition-property"] = t[h = o + "transition-duration"] = t[j = o + "transition-delay"] = t[i = o + "transition-timing-function"] = t[k = o + "animation-name"] = t[l = o + "animation-duration"] = t[n = o + "animation-delay"] = t[m = o + "animation-timing-function"] = "", a.fx = {
			off: e === b && r.style.transitionProperty === b,
			speeds: {
				_default: 400,
				fast: 200,
				slow: 600
			},
			cssPrefix: o,
			transitionEnd: d("TransitionEnd"),
			animationEnd: d("AnimationEnd")
		}, a.fn.animate = function(c, d, e, f, g) {
			return a.isFunction(d) && (f = d, e = b, d = b), a.isFunction(e) && (f = e, e = b), a.isPlainObject(d) && (e = d.easing, f = d.complete, g = d.delay, d = d.duration), d && (d = ("number" == typeof d ? d : a.fx.speeds[d] || a.fx.speeds._default) / 1e3), g && (g = parseFloat(g) / 1e3), this.anim(c, d, e, f, g)
		}, a.fn.anim = function(d, e, o, p, q) {
			var r, u, v, w = {},
				x = "",
				y = this,
				z = a.fx.transitionEnd,
				A = !1;
			if (e === b && (e = a.fx.speeds._default / 1e3), q === b && (q = 0), a.fx.off && (e = 0), "string" == typeof d) w[k] = d, w[l] = e + "s", w[n] = q + "s", w[m] = o || "linear", z = a.fx.animationEnd;
			else {
				u = [];
				for (r in d) s.test(r) ? x += r + "(" + d[r] + ") " : (w[r] = d[r], u.push(c(r)));
				x && (w[f] = x, u.push(f)), e > 0 && "object" == typeof d && (w[g] = u.join(", "), w[h] = e + "s", w[j] = q + "s", w[i] = o || "linear")
			}
			return v = function(b) {
				if ("undefined" != typeof b) {
					if (b.target !== b.currentTarget) return;
					a(b.target).unbind(z, v)
				} else a(this).unbind(z, v);
				A = !0, a(this).css(t), p && p.call(this)
			}, e > 0 && (this.bind(z, v), setTimeout(function() {
				A || v.call(y)
			}, 1e3 * e + 25)), this.size() && this.get(0).clientLeft, this.css(w), 0 >= e && setTimeout(function() {
				y.each(function() {
					v.call(this)
				})
			}, 0), this
		}, r = null
	}(Zepto),
	function(a, b) {
		function c(c, d, e, f, g) {
			"function" != typeof d || g || (g = d, d = b);
			var h = {
				opacity: e
			};
			return f && (h.scale = f, c.css(a.fx.cssPrefix + "transform-origin", "0 0")), c.animate(h, d, null, g)
		}

		function d(b, d, e, f) {
			return c(b, d, 0, e, function() {
				g.call(a(this)), f && f.call(this)
			})
		}
		var e = window.document,
			f = (e.documentElement, a.fn.show),
			g = a.fn.hide,
			h = a.fn.toggle;
		a.fn.show = function(a, d) {
			return f.call(this), a === b ? a = 0 : this.css("opacity", 0), c(this, a, 1, "1,1", d)
		}, a.fn.hide = function(a, c) {
			return a === b ? g.call(this) : d(this, a, "0,0", c)
		}, a.fn.toggle = function(c, d) {
			return c === b || "boolean" == typeof c ? h.call(this, c) : this.each(function() {
				var b = a(this);
				b["none" == b.css("display") ? "show" : "hide"](c, d)
			})
		}, a.fn.fadeTo = function(a, b, d) {
			return c(this, a, b, null, d)
		}, a.fn.fadeIn = function(a, b) {
			var c = this.css("opacity");
			return c > 0 ? this.css("opacity", 0) : c = 1, f.call(this).fadeTo(a, c, b)
		}, a.fn.fadeOut = function(a, b) {
			return d(this, a, null, b)
		}, a.fn.fadeToggle = function(b, c) {
			return this.each(function() {
				var d = a(this);
				d[0 == d.css("opacity") || "none" == d.css("display") ? "fadeIn" : "fadeOut"](b, c)
			})
		}
	}(Zepto),
	function(a) {
		a.___animateList = {}, a.extend(a, {
			queue: function(b, c) {
				a.___animateList[b] = c
			},
			dequeue: function(b) {
				var c = a.___animateList[b],
					d = c.shift();
				d && d()
			}
		})
	}(Zepto),
	function(a) {
		a.___stateList = {}, a.extend(a, {
			state: function(b, c) {
				a.___stateList[b] = c
			},
			toState: function(b, c) {
				var d = a.___stateList[b];
				for (var b in d) {
					var e = d[b];
					c ? (a.fx.off = !0, a(b).anim(e.attr), a.fx.off = !1) : a(b).anim(e.attr, e.duraction, e.easing)
				}
			}
		})
	}(Zepto),
	function(a, b) {
		"use strict";

		function c() {
			if (!d.READY) {
				d.event.determineEventTypes();
				for (var a in d.gestures) d.gestures.hasOwnProperty(a) && d.detection.register(d.gestures[a]);
				d.event.onTouch(d.DOCUMENT, d.EVENT_MOVE, d.detection.detect), d.event.onTouch(d.DOCUMENT, d.EVENT_END, d.detection.detect), d.READY = !0
			}
		}
		var d = function(a, b) {
			return new d.Instance(a, b || {})
		};
		d.defaults = {
			stop_browser_behavior: {
				userSelect: "none",
				touchAction: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		}, d.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, d.HAS_TOUCHEVENTS = "ontouchstart" in a, d.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, d.NO_MOUSEEVENTS = d.HAS_TOUCHEVENTS && navigator.userAgent.match(d.MOBILE_REGEX), d.EVENT_TYPES = {}, d.DIRECTION_DOWN = "down", d.DIRECTION_LEFT = "left", d.DIRECTION_UP = "up", d.DIRECTION_RIGHT = "right", d.POINTER_MOUSE = "mouse", d.POINTER_TOUCH = "touch", d.POINTER_PEN = "pen", d.EVENT_START = "start", d.EVENT_MOVE = "move", d.EVENT_END = "end", d.DOCUMENT = document, d.plugins = {}, d.READY = !1, d.Instance = function(a, b) {
			var e = this;
			return c(), this.element = a, this.enabled = !0, this.options = d.utils.extend(d.utils.extend({}, d.defaults), b || {}), this.options.stop_browser_behavior && d.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), d.event.onTouch(a, d.EVENT_START, function(a) {
				e.enabled && d.detection.startDetect(e, a)
			}), this
		}, d.Instance.prototype = {
			on: function(a, b) {
				for (var c = a.split(" "), d = 0; c.length > d; d++) this.element.addEventListener(c[d], b, !1);
				return this
			},
			off: function(a, b) {
				for (var c = a.split(" "), d = 0; c.length > d; d++) this.element.removeEventListener(c[d], b, !1);
				return this
			},
			trigger: function(a, b) {
				var c = d.DOCUMENT.createEvent("Event");
				c.initEvent(a, !0, !0), c.gesture = b;
				var e = this.element;
				return d.utils.hasParent(b.target, e) && (e = b.target), e.dispatchEvent(c), this
			},
			enable: function(a) {
				return this.enabled = a, this
			}
		};
		var e = null,
			f = !1,
			g = !1;
		d.event = {
			bindDom: function(a, b, c) {
				for (var d = b.split(" "), e = 0; d.length > e; e++) a.addEventListener(d[e], c, !1)
			},
			onTouch: function(a, b, c) {
				var h = this;
				this.bindDom(a, d.EVENT_TYPES[b], function(i) {
					var j = i.type.toLowerCase();
					if (!j.match(/mouse/) || !g) {
						(j.match(/touch/) || j.match(/pointerdown/) || j.match(/mouse/) && 1 === i.which) && (f = !0), j.match(/touch|pointer/) && (g = !0);
						var k = 0;
						f && (d.HAS_POINTEREVENTS && b != d.EVENT_END ? k = d.PointerEvent.updatePointer(b, i) : j.match(/touch/) ? k = i.touches.length : g || (k = j.match(/up/) ? 0 : 1), k > 0 && b == d.EVENT_END ? b = d.EVENT_MOVE : k || (b = d.EVENT_END), k || null === e ? e = i : i = e, c.call(d.detection, h.collectEventData(a, b, i)), d.HAS_POINTEREVENTS && b == d.EVENT_END && (k = d.PointerEvent.updatePointer(b, i))), k || (e = null, f = !1, g = !1, d.PointerEvent.reset())
					}
				})
			},
			determineEventTypes: function() {
				var a;
				a = d.HAS_POINTEREVENTS ? d.PointerEvent.getEvents() : d.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], d.EVENT_TYPES[d.EVENT_START] = a[0], d.EVENT_TYPES[d.EVENT_MOVE] = a[1], d.EVENT_TYPES[d.EVENT_END] = a[2]
			},
			getTouchList: function(a) {
				return d.HAS_POINTEREVENTS ? d.PointerEvent.getTouchList() : a.touches ? a.touches : [{
					identifier: 1,
					pageX: a.pageX,
					pageY: a.pageY,
					target: a.target
				}]
			},
			collectEventData: function(a, b, c) {
				var e = this.getTouchList(c, b),
					f = d.POINTER_TOUCH;
				return (c.type.match(/mouse/) || d.PointerEvent.matchType(d.POINTER_MOUSE, c)) && (f = d.POINTER_MOUSE), {
					center: d.utils.getCenter(e),
					timeStamp: (new Date).getTime(),
					target: c.target,
					touches: e,
					eventType: b,
					pointerType: f,
					srcEvent: c,
					preventDefault: function() {
						this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
					},
					stopPropagation: function() {
						this.srcEvent.stopPropagation()
					},
					stopDetect: function() {
						return d.detection.stopDetect()
					}
				}
			}
		}, d.PointerEvent = {
			pointers: {},
			getTouchList: function() {
				var a = this,
					b = [];
				return Object.keys(a.pointers).sort().forEach(function(c) {
					b.push(a.pointers[c])
				}), b
			},
			updatePointer: function(a, b) {
				return a == d.EVENT_END ? this.pointers = {} : (b.identifier = b.pointerId, this.pointers[b.pointerId] = b), Object.keys(this.pointers).length
			},
			matchType: function(a, b) {
				if (!b.pointerType) return !1;
				var c = {};
				return c[d.POINTER_MOUSE] = b.pointerType == b.MSPOINTER_TYPE_MOUSE || b.pointerType == d.POINTER_MOUSE, c[d.POINTER_TOUCH] = b.pointerType == b.MSPOINTER_TYPE_TOUCH || b.pointerType == d.POINTER_TOUCH, c[d.POINTER_PEN] = b.pointerType == b.MSPOINTER_TYPE_PEN || b.pointerType == d.POINTER_PEN, c[a]
			},
			getEvents: function() {
				return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
			},
			reset: function() {
				this.pointers = {}
			}
		}, d.utils = {
			extend: function(a, c, d) {
				for (var e in c) a[e] !== b && d || (a[e] = c[e]);
				return a
			},
			hasParent: function(a, b) {
				for (; a;) {
					if (a == b) return !0;
					a = a.parentNode
				}
				return !1
			},
			getCenter: function(a) {
				for (var b = [], c = [], d = 0, e = a.length; e > d; d++) b.push(a[d].pageX), c.push(a[d].pageY);
				return {
					pageX: (Math.min.apply(Math, b) + Math.max.apply(Math, b)) / 2,
					pageY: (Math.min.apply(Math, c) + Math.max.apply(Math, c)) / 2
				}
			},
			getVelocity: function(a, b, c) {
				return {
					x: Math.abs(b / a) || 0,
					y: Math.abs(c / a) || 0
				}
			},
			getAngle: function(a, b) {
				var c = b.pageY - a.pageY,
					d = b.pageX - a.pageX;
				return 180 * Math.atan2(c, d) / Math.PI
			},
			getDirection: function(a, b) {
				var c = Math.abs(a.pageX - b.pageX),
					e = Math.abs(a.pageY - b.pageY);
				return c >= e ? a.pageX - b.pageX > 0 ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT : a.pageY - b.pageY > 0 ? d.DIRECTION_UP : d.DIRECTION_DOWN
			},
			getDistance: function(a, b) {
				var c = b.pageX - a.pageX,
					d = b.pageY - a.pageY;
				return Math.sqrt(c * c + d * d)
			},
			getScale: function(a, b) {
				return a.length >= 2 && b.length >= 2 ? this.getDistance(b[0], b[1]) / this.getDistance(a[0], a[1]) : 1
			},
			getRotation: function(a, b) {
				return a.length >= 2 && b.length >= 2 ? this.getAngle(b[1], b[0]) - this.getAngle(a[1], a[0]) : 0
			},
			isVertical: function(a) {
				return a == d.DIRECTION_UP || a == d.DIRECTION_DOWN
			},
			stopDefaultBrowserBehavior: function(a, b) {
				var c, d = ["webkit", "khtml", "moz", "ms", "o", ""];
				if (b && a.style) {
					for (var e = 0; d.length > e; e++)
						for (var f in b) b.hasOwnProperty(f) && (c = f, d[e] && (c = d[e] + c.substring(0, 1).toUpperCase() + c.substring(1)), a.style[c] = b[f]);
					"none" == b.userSelect && (a.onselectstart = function() {
						return !1
					})
				}
			}
		}, d.detection = {
			gestures: [],
			current: null,
			previous: null,
			stopped: !1,
			startDetect: function(a, b) {
				this.current || (this.stopped = !1, this.current = {
					inst: a,
					startEvent: d.utils.extend({}, b),
					lastEvent: !1,
					name: ""
				}, this.detect(b))
			},
			detect: function(a) {
				if (this.current && !this.stopped) {
					a = this.extendEventData(a);
					for (var b = this.current.inst.options, c = 0, e = this.gestures.length; e > c; c++) {
						var f = this.gestures[c];
						if (!this.stopped && b[f.name] !== !1 && f.handler.call(f, a, this.current.inst) === !1) {
							this.stopDetect();
							break
						}
					}
					return this.current && (this.current.lastEvent = a), a.eventType == d.EVENT_END && !a.touches.length - 1 && this.stopDetect(), a
				}
			},
			stopDetect: function() {
				this.previous = d.utils.extend({}, this.current), this.current = null, this.stopped = !0
			},
			extendEventData: function(a) {
				var b = this.current.startEvent;
				if (b && (a.touches.length != b.touches.length || a.touches === b.touches)) {
					b.touches = [];
					for (var c = 0, e = a.touches.length; e > c; c++) b.touches.push(d.utils.extend({}, a.touches[c]))
				}
				var f = a.timeStamp - b.timeStamp,
					g = a.center.pageX - b.center.pageX,
					h = a.center.pageY - b.center.pageY,
					i = d.utils.getVelocity(f, g, h);
				return d.utils.extend(a, {
					deltaTime: f,
					deltaX: g,
					deltaY: h,
					velocityX: i.x,
					velocityY: i.y,
					distance: d.utils.getDistance(b.center, a.center),
					angle: d.utils.getAngle(b.center, a.center),
					direction: d.utils.getDirection(b.center, a.center),
					scale: d.utils.getScale(b.touches, a.touches),
					rotation: d.utils.getRotation(b.touches, a.touches),
					startEvent: b
				}), a
			},
			register: function(a) {
				var c = a.defaults || {};
				return c[a.name] === b && (c[a.name] = !0), d.utils.extend(d.defaults, c, !0), a.index = a.index || 1e3, this.gestures.push(a), this.gestures.sort(function(a, b) {
					return a.index < b.index ? -1 : a.index > b.index ? 1 : 0
				}), this.gestures
			}
		}, d.gestures = d.gestures || {}, d.gestures.Hold = {
			name: "hold",
			index: 10,
			defaults: {
				hold_timeout: 500,
				hold_threshold: 1
			},
			timer: null,
			handler: function(a, b) {
				switch (a.eventType) {
					case d.EVENT_START:
						clearTimeout(this.timer), d.detection.current.name = this.name, this.timer = setTimeout(function() {
							"hold" == d.detection.current.name && b.trigger("hold", a)
						}, b.options.hold_timeout);
						break;
					case d.EVENT_MOVE:
						a.distance > b.options.hold_threshold && clearTimeout(this.timer);
						break;
					case d.EVENT_END:
						clearTimeout(this.timer)
				}
			}
		}, d.gestures.Tap = {
			name: "tap",
			index: 100,
			defaults: {
				tap_max_touchtime: 250,
				tap_max_distance: 10,
				tap_always: !0,
				doubletap_distance: 20,
				doubletap_interval: 300
			},
			handler: function(a, b) {
				if (a.eventType == d.EVENT_END) {
					var c = d.detection.previous,
						e = !1;
					if (a.deltaTime > b.options.tap_max_touchtime || a.distance > b.options.tap_max_distance) return;
					c && "tap" == c.name && a.timeStamp - c.lastEvent.timeStamp < b.options.doubletap_interval && a.distance < b.options.doubletap_distance && (b.trigger("doubletap", a), e = !0), (!e || b.options.tap_always) && (d.detection.current.name = "tap", b.trigger(d.detection.current.name, a))
				}
			}
		}, d.gestures.Swipe = {
			name: "swipe",
			index: 40,
			defaults: {
				swipe_max_touches: 1,
				swipe_velocity: .7
			},
			handler: function(a, b) {
				if (a.eventType == d.EVENT_END) {
					if (b.options.swipe_max_touches > 0 && a.touches.length > b.options.swipe_max_touches) return;
					(a.velocityX > b.options.swipe_velocity || a.velocityY > b.options.swipe_velocity) && (b.trigger(this.name, a), b.trigger(this.name + a.direction, a))
				}
			}
		}, d.gestures.Drag = {
			name: "drag",
			index: 50,
			defaults: {
				drag_min_distance: 10,
				drag_max_touches: 1,
				drag_block_horizontal: !1,
				drag_block_vertical: !1,
				drag_lock_to_axis: !1,
				drag_lock_min_distance: 25
			},
			triggered: !1,
			handler: function(a, c) {
				if (d.detection.current.name != this.name && this.triggered) return c.trigger(this.name + "end", a), this.triggered = !1, b;
				if (!(c.options.drag_max_touches > 0 && a.touches.length > c.options.drag_max_touches)) switch (a.eventType) {
					case d.EVENT_START:
						this.triggered = !1;
						break;
					case d.EVENT_MOVE:
						if (a.distance < c.options.drag_min_distance && d.detection.current.name != this.name) return;
						d.detection.current.name = this.name, (d.detection.current.lastEvent.drag_locked_to_axis || c.options.drag_lock_to_axis && c.options.drag_lock_min_distance <= a.distance) && (a.drag_locked_to_axis = !0);
						var e = d.detection.current.lastEvent.direction;
						a.drag_locked_to_axis && e !== a.direction && (a.direction = d.utils.isVertical(e) ? 0 > a.deltaY ? d.DIRECTION_UP : d.DIRECTION_DOWN : 0 > a.deltaX ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT), this.triggered || (c.trigger(this.name + "start", a), this.triggered = !0), c.trigger(this.name, a), c.trigger(this.name + a.direction, a), (c.options.drag_block_vertical && d.utils.isVertical(a.direction) || c.options.drag_block_horizontal && !d.utils.isVertical(a.direction)) && a.preventDefault();
						break;
					case d.EVENT_END:
						this.triggered && c.trigger(this.name + "end", a), this.triggered = !1
				}
			}
		}, d.gestures.Transform = {
			name: "transform",
			index: 45,
			defaults: {
				transform_min_scale: .01,
				transform_min_rotation: 1,
				transform_always_block: !1
			},
			triggered: !1,
			handler: function(a, c) {
				if (d.detection.current.name != this.name && this.triggered) return c.trigger(this.name + "end", a), this.triggered = !1, b;
				if (!(2 > a.touches.length)) switch (c.options.transform_always_block && a.preventDefault(), a.eventType) {
					case d.EVENT_START:
						this.triggered = !1;
						break;
					case d.EVENT_MOVE:
						var e = Math.abs(1 - a.scale),
							f = Math.abs(a.rotation);
						if (c.options.transform_min_scale > e && c.options.transform_min_rotation > f) return;
						d.detection.current.name = this.name, this.triggered || (c.trigger(this.name + "start", a), this.triggered = !0), c.trigger(this.name, a), f > c.options.transform_min_rotation && c.trigger("rotate", a), e > c.options.transform_min_scale && (c.trigger("pinch", a), c.trigger("pinch" + (1 > a.scale ? "in" : "out"), a));
						break;
					case d.EVENT_END:
						this.triggered && c.trigger(this.name + "end", a), this.triggered = !1
				}
			}
		}, d.gestures.Touch = {
			name: "touch",
			index: -1 / 0,
			defaults: {
				prevent_default: !1,
				prevent_mouseevents: !1
			},
			handler: function(a, c) {
				return c.options.prevent_mouseevents && a.pointerType == d.POINTER_MOUSE ? (a.stopDetect(), b) : (c.options.prevent_default && a.preventDefault(), a.eventType == d.EVENT_START && c.trigger(this.name, a), b)
			}
		}, d.gestures.Release = {
			name: "release",
			index: 1 / 0,
			handler: function(a, b) {
				a.eventType == d.EVENT_END && b.trigger(this.name, a)
			}
		}, "object" == typeof module && "object" == typeof module.exports ? module.exports = d : (a.Hammer = d, "function" == typeof a.define && a.define.amd && a.define("hammer", [], function() {
			return d
		}))
	}(this),
	function(a, b) {
		"use strict";
		a !== b && (Hammer.event.bindDom = function(c, d, e) {
			a(c).on(d, function(a) {
				var c = a.originalEvent || a;
				c.pageX === b && (c.pageX = a.pageX, c.pageY = a.pageY), c.target || (c.target = a.target), c.which === b && (c.which = c.button), c.preventDefault || (c.preventDefault = a.preventDefault), c.stopPropagation || (c.stopPropagation = a.stopPropagation), e.call(this, c)
			})
		}, Hammer.Instance.prototype.on = function(b, c) {
			return a(this.element).on(b, c)
		}, Hammer.Instance.prototype.off = function(b, c) {
			return a(this.element).off(b, c)
		}, Hammer.Instance.prototype.trigger = function(b, c) {
			var d = a(this.element);
			return d.has(c.target).length && (d = a(c.target)), d.trigger({
				type: b,
				gesture: c
			})
		}, a.fn.hammer = function(b) {
			return this.each(function() {
				var c = a(this),
					d = c.data("hammer");
				d ? d && b && Hammer.utils.extend(d.options, b) : c.data("hammer", new Hammer(this, b || {}))
			})
		})
	}(window.jQuery || window.Zepto), ! function() {
		function use(a) {
			_p.r([moduleMapping[a]])
		}
		var _p = {
			r: function(a) {
				if (_p[a].inited) return _p[a].value;
				if ("function" != typeof _p[a].value) return _p[a].inited = !0, _p[a].value;
				var b = {
						exports: {}
					},
					c = _p[a].value(null, b.exports, b);
				if (_p[a].inited = !0, _p[a].value = c, void 0 !== c) return c;
				for (var d in b.exports)
					if (b.exports.hasOwnProperty(d)) return _p[a].inited = !0, _p[a].value = b.exports, b.exports
			}
		};
		_p[0] = {
			value: function() {
				function a(a) {
					var b = parseFloat(a, 10);
					return /ms/.test(a) ? b : /s/.test(a) ? 1e3 * b : /min/.test(a) ? 60 * b * 1e3 : b
				}
				var b = _p.r(8),
					c = _p.r(1),
					d = _p.r(11).createClass("Animator", {
						constructor: function(a, b, c) {
							if (1 == arguments.length) {
								var d = arguments[0];
								this.beginValue = d.beginValue, this.finishValue = d.finishValue, this.setter = d.setter
							} else this.beginValue = a, this.finishValue = b, this.setter = c
						},
						start: function(b, c, d, e, f) {
							2 === arguments.length && "object" == typeof c && (d = c.easing, e = c.delay, f = c.callback, c = c.duration), 4 === arguments.length && "function" == typeof e && (f = e, e = 0);
							var g = this.create(b, c, d, f);
							return e = a(e), e > 0 ? setTimeout(function() {
								g.play()
							}, e) : g.play(), g
						},
						create: function(e, f, g, h) {
							var i;
							return f = f && a(f) || d.DEFAULT_DURATION, g = g || d.DEFAULT_EASING, "string" == typeof g && (g = c[g]), i = new b(this, e, f, g), "function" == typeof h && i.on("finish", h), i
						},
						reverse: function() {
							return new d(this.finishValue, this.beginValue, this.setter)
						}
					});
				d.DEFAULT_DURATION = 300, d.DEFAULT_EASING = "linear";
				var e = _p.r(61);
				return _p.r(11).extendClass(e, {
					animate: function(a, b, c, d, e) {
						function f() {
							g.shift(), g.length && setTimeout(g[0].t.play.bind(g[0].t), g[0].d)
						}
						var g = this._KityAnimateQueue = this._KityAnimateQueue || [],
							h = a.create(this, b, c, e);
						return h.on("finish", f), g.push({
							t: h,
							d: d
						}), 1 == g.length && setTimeout(h.play.bind(h), d), this
					},
					timeline: function() {
						return this._KityAnimateQueue[0].t
					},
					stop: function() {
						var a = this._KityAnimateQueue;
						if (a)
							for (; a.length;) a.shift().t.stop();
						return this
					}
				}), d
			}
		}, _p[1] = {
			value: function() {
				var a = {
					linear: function(a, b, c, d) {
						return c * (a / d) + b
					},
					swing: function(b, c, d, e) {
						return a.easeOutQuad(b, c, d, e)
					},
					ease: function(b, c, d, e) {
						return a.easeInOutCubic(b, c, d, e)
					},
					easeInQuad: function(a, b, c, d) {
						return c * (a /= d) * a + b
					},
					easeOutQuad: function(a, b, c, d) {
						return -c * (a /= d) * (a - 2) + b
					},
					easeInOutQuad: function(a, b, c, d) {
						return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
					},
					easeInCubic: function(a, b, c, d) {
						return c * (a /= d) * a * a + b
					},
					easeOutCubic: function(a, b, c, d) {
						return c * ((a = a / d - 1) * a * a + 1) + b
					},
					easeInOutCubic: function(a, b, c, d) {
						return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
					},
					easeInQuart: function(a, b, c, d) {
						return c * (a /= d) * a * a * a + b
					},
					easeOutQuart: function(a, b, c, d) {
						return -c * ((a = a / d - 1) * a * a * a - 1) + b
					},
					easeInOutQuart: function(a, b, c, d) {
						return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
					},
					easeInQuint: function(a, b, c, d) {
						return c * (a /= d) * a * a * a * a + b
					},
					easeOutQuint: function(a, b, c, d) {
						return c * ((a = a / d - 1) * a * a * a * a + 1) + b
					},
					easeInOutQuint: function(a, b, c, d) {
						return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
					},
					easeInSine: function(a, b, c, d) {
						return -c * Math.cos(a / d * (Math.PI / 2)) + c + b
					},
					easeOutSine: function(a, b, c, d) {
						return c * Math.sin(a / d * (Math.PI / 2)) + b
					},
					easeInOutSine: function(a, b, c, d) {
						return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b
					},
					easeInExpo: function(a, b, c, d) {
						return 0 === a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b
					},
					easeOutExpo: function(a, b, c, d) {
						return a == d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b
					},
					easeInOutExpo: function(a, b, c, d) {
						return 0 === a ? b : a == d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
					},
					easeInCirc: function(a, b, c, d) {
						return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b
					},
					easeOutCirc: function(a, b, c, d) {
						return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
					},
					easeInOutCirc: function(a, b, c, d) {
						return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
					},
					easeInElastic: function(a, b, c, d) {
						var e = 1.70158,
							f = 0,
							g = c;
						return 0 === a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), g < Math.abs(c) ? (g = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / g), -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f)) + b)
					},
					easeOutElastic: function(a, b, c, d) {
						var e = 1.70158,
							f = 0,
							g = c;
						return 0 === a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), g < Math.abs(c) ? (g = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / g), g * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - e) * Math.PI / f) + c + b)
					},
					easeInOutElastic: function(a, b, c, d) {
						var e = 1.70158,
							f = 0,
							g = c;
						if (0 === a) return b;
						if (2 == (a /= d / 2)) return b + c;
						if (f || (f = .3 * d * 1.5), g < Math.abs(c)) {
							g = c;
							var e = f / 4
						} else var e = f / (2 * Math.PI) * Math.asin(c / g);
						return 1 > a ? -.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f) + b : g * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f) * .5 + c + b
					},
					easeInBack: function(a, b, c, d, e) {
						return void 0 == e && (e = 1.70158), c * (a /= d) * a * ((e + 1) * a - e) + b
					},
					easeOutBack: function(a, b, c, d, e) {
						return void 0 == e && (e = 1.70158), c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b
					},
					easeInOutBack: function(a, b, c, d, e) {
						return void 0 == e && (e = 1.70158), (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b
					},
					easeInBounce: function(b, c, d, e) {
						return d - a.easeOutBounce(e - b, 0, d, e) + c
					},
					easeOutBounce: function(a, b, c, d) {
						return (a /= d) < 1 / 2.75 ? 7.5625 * c * a * a + b : 2 / 2.75 > a ? c * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : 2.5 / 2.75 > a ? c * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
					},
					easeInOutBounce: function(b, c, d, e) {
						return e / 2 > b ? .5 * a.easeInBounce(2 * b, 0, d, e) + c : .5 * a.easeOutBounce(2 * b - e, 0, d, e) + .5 * d + c
					}
				};
				return a
			}
		}, _p[2] = {
			value: function(a, b) {
				function c(a) {
					1 === l.push(a) && (i = j(d))
				}

				function d() {
					var a = l;
					for (l = []; a.length;) h(a.pop());
					i = 0
				}

				function e(a) {
					var b = g(a);
					return c(b), b
				}

				function f(a) {
					var b = l.indexOf(a);
					~b && l.splice(b, 1), 0 === l.length && k(i)
				}

				function g(a) {
					var b = {
						index: 0,
						time: +new Date,
						elapsed: 0,
						action: a,
						next: function() {
							c(b)
						}
					};
					return b
				}

				function h(a) {
					var b = +new Date,
						c = b - a.time;
					c > 200 && (c = 1e3 / 60), a.dur = c, a.elapsed += c, a.time = b, a.action.call(null, a), a.index++
				}
				var i, j = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
						return setTimeout(a, 1e3 / 60)
					},
					k = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout,
					l = [];
				b.requestFrame = e, b.releaseFrame = f
			}
		}, _p[3] = {
			value: function() {
				var a = _p.r(0),
					b = _p.r(35),
					c = _p.r(47),
					d = _p.r(61),
					e = _p.r(11).createClass("MotionAnimator", {
						base: a,
						constructor: function(a, d) {
							var e = this;
							this.callBase({
								beginValue: 0,
								finishValue: 1,
								setter: function(a, d) {
									var f = e.motionPath instanceof c ? e.motionPath.getPathData() : e.motionPath,
										g = b.pointAtPath(f, d);
									a.setTranslate(g.x, g.y), this.doRotate && a.setRotate(g.tan.getAngle())
								}
							}), this.doRotate = d, this.motionPath = a
						}
					});
				return _p.r(11).extendClass(d, {
					motion: function(a, b, c, d, f) {
						return this.animate(new e(a), b, c, d, f)
					}
				}), e
			}
		}, _p[4] = {
			value: function() {
				var a = _p.r(0),
					b = _p.r(11).createClass("OpacityAnimator", {
						base: a,
						constructor: function(a) {
							this.callBase({
								beginValue: function(a) {
									return a.getOpacity()
								},
								finishValue: a,
								setter: function(a, b) {
									a.setOpacity(b)
								}
							})
						}
					}),
					c = _p.r(61);
				return _p.r(11).extendClass(c, {
					fxOpacity: function(a, c, d, e, f) {
						return this.animate(new b(a), c, d, e, f)
					},
					fadeTo: function() {
						return this.fxOpacity.apply(this, arguments)
					},
					fadeIn: function() {
						return this.fxOpacity.apply(this, [1].concat([].slice.call(arguments)))
					},
					fadeOut: function() {
						return this.fxOpacity.apply(this, [0].concat([].slice.call(arguments)))
					}
				}), b
			}
		}, _p[5] = {
			value: function() {
				var a = _p.r(0),
					b = _p.r(35),
					c = _p.r(11).createClass("OpacityAnimator", {
						base: a,
						constructor: function(a) {
							this.callBase({
								beginValue: function(a) {
									return this.beginPath = a.getPathData(), 0
								},
								finishValue: 1,
								setter: function(c, d) {
									c.setPathData(b.pathTween(this.beginPath, a, d))
								}
							})
						}
					}),
					d = _p.r(47);
				return _p.r(11).extendClass(d, {
					fxPath: function(a, b, d, e, f) {
						return this.animate(new c(a), b, d, e, f)
					}
				}), c
			}
		}, _p[6] = {
			value: function() {
				var a = _p.r(0),
					b = _p.r(11).createClass("RotateAnimator", {
						base: a,
						constructor: function(a) {
							this.callBase({
								beginValue: 0,
								finishValue: a,
								setter: function(a, b, c) {
									var d = c.getDelta();
									a.rotate(d, ax, ay)
								}
							})
						}
					}),
					c = _p.r(61);
				return _p.r(11).extendClass(c, {
					fxRotate: function(a, c, d, e, f) {
						return this.animate(new b(a), c, d, e, f)
					}
				}), b
			}
		}, _p[7] = {
			value: function() {
				var a = _p.r(0),
					b = _p.r(11).createClass("ScaleAnimator", {
						base: a,
						constructor: function(a, b) {
							this.callBase({
								beginValue: 0,
								finishValue: 1,
								setter: function(c, d, e) {
									var f = e.getDelta(),
										g = Math.pow(a, f),
										h = Math.pow(b, f);
									c.scale(h, g)
								}
							})
						}
					}),
					c = _p.r(61);
				return _p.r(11).extendClass(c, {
					fxScale: function(a, c, d, e, f, g) {
						return this.animate(new b(a, c), d, e, f, g)
					}
				}), b
			}
		}, _p[8] = {
			value: function() {
				function a(a, b, c) {
					return f.paralle(a, b, function(a, b) {
						return a + (b - a) * c
					})
				}

				function b(a, b) {
					return f.paralle(a, b, function(a, b) {
						return b - a
					})
				}

				function c(a, b, c) {
					this.timeline = a, this.target = a.target, this.type = b;
					for (var d in c) c.hasOwnProperty(d) && (this[d] = c[d])
				}
				var d = _p.r(34),
					e = _p.r(2),
					f = _p.r(12),
					g = _p.r(11).createClass("Timeline", {
						mixins: [d],
						constructor: function(a, b, c, d) {
							this.callMixin(), this.target = b, this.time = 0, this.duration = c, this.easing = d, this.animator = a, this.beginValue = a.beginValue, this.finishValue = a.finishValue, this.setter = a.setter, this.status = "ready"
						},
						nextFrame: function(a) {
							"playing" == this.status && (this.time += a.dur, this.setValue(this.getValue()), this.time >= this.duration && this.timeUp(), a.next())
						},
						getPlayTime: function() {
							return this.rollbacking ? this.duration - this.time : this.time
						},
						getTimeProportion: function() {
							return this.getPlayTime() / this.duration
						},
						getValueProportion: function() {
							return this.easing(this.getPlayTime(), 0, 1, this.duration)
						},
						getValue: function() {
							var b = this.beginValue,
								c = this.finishValue,
								d = this.getValueProportion();
							return a(b, c, d)
						},
						setValue: function(a) {
							this.lastValue = this.currentValue, this.currentValue = a, this.setter.call(this.target, this.target, a, this)
						},
						getDelta: function() {
							return this.lastValue = void 0 === this.lastValue ? this.beginValue : this.lastValue, b(this.lastValue, this.currentValue)
						},
						play: function() {
							var a = this.status;
							switch (this.status = "playing", a) {
								case "ready":
									f.isFunction(this.beginValue) && (this.beginValue = this.beginValue.call(this.target, this.target)), f.isFunction(this.finishValue) && (this.finishValue = this.finishValue.call(this.target, this.target)), this.time = 0, this.setValue(this.beginValue), this.frame = e.requestFrame(this.nextFrame.bind(this));
									break;
								case "finished":
								case "stoped":
									this.time = 0, this.frame = e.requestFrame(this.nextFrame.bind(this));
									break;
								case "paused":
									this.frame.next()
							}
							return this.fire("play", new c(this, "play", {
								lastStatus: a
							})), this
						},
						pause: function() {
							return this.status = "paused", this.fire("pause", new c(this, "pause")), e.releaseFrame(this.frame), this
						},
						stop: function() {
							return this.status = "stoped", this.setValue(this.finishValue), this.rollbacking = !1, this.fire("stop", new c(this, "stop")), e.releaseFrame(this.frame), this
						},
						timeUp: function() {
							this.repeatOption ? (this.time = 0, this.rollback ? this.rollbacking ? (this.decreaseRepeat(), this.rollbacking = !1) : (this.rollbacking = !0, this.fire("rollback", new c(this, "rollback"))) : this.decreaseRepeat(), this.repeatOption ? this.fire("repeat", new c(this, "repeat")) : this.finish()) : this.finish()
						},
						finish: function() {
							this.setValue(this.finishValue), this.status = "finished", this.fire("finish", new c(this, "finish")), e.releaseFrame(this.frame)
						},
						decreaseRepeat: function() {
							this.repeatOption !== !0 && this.repeatOption--
						},
						repeat: function(a, b) {
							return this.repeatOption = a, this.rollback = b, this
						}
					});
				return g.requestFrame = e.requestFrame, g.releaseFrame = e.releaseFrame, g
			}
		}, _p[9] = {
			value: function() {
				var a = _p.r(0),
					b = _p.r(11).createClass("TranslateAnimator", {
						base: a,
						constructor: function(a, b) {
							this.callBase({
								x: 0,
								y: 0
							}, {
								x: a,
								y: b
							}, function(a, b, c) {
								var d = c.getDelta();
								a.translate(d.x, d.y)
							})
						}
					}),
					c = _p.r(61);
				return _p.r(11).extendClass(c, {
					fxTranslate: function(a, c, d, e, f, g) {
						return this.animate(new b(a, c), d, e, f, g)
					}
				}), b
			}
		}, _p[10] = {
			value: function() {
				var a = function() {
					var a, b = navigator.userAgent.toLowerCase(),
						c = window.opera;
					a = {
						ie: /(msie\s|trident.*rv:)([\w.]+)/.test(b),
						opera: !!c && c.version,
						webkit: b.indexOf(" applewebkit/") > -1,
						mac: b.indexOf("macintosh") > -1
					}, a.gecko = "Gecko" == navigator.product && !a.webkit && !a.opera && !a.ie;
					var d = 0;
					if (a.ie && (d = 1 * (b.match(/(msie\s|trident.*rv:)([\w.]+)/)[2] || 0), a.ie11Compat = 11 == document.documentMode, a.ie9Compat = 9 == document.documentMode), a.gecko) {
						var e = b.match(/rv:([\d\.]+)/);
						e && (e = e[1].split("."), d = 1e4 * e[0] + 100 * (e[1] || 0) + 1 * (e[2] || 0))
					}
					return /chrome\/(\d+\.\d)/i.test(b) && (a.chrome = +RegExp.$1), /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(b) && !/chrome/i.test(b) && (a.safari = +(RegExp.$1 || RegExp.$2)), a.opera && (d = parseFloat(c.version())), a.webkit && (d = parseFloat(b.match(/ applewebkit\/(\d+)/)[1])), a.version = d, a.isCompatible = !a.mobile && (a.ie && d >= 6 || a.gecko && d >= 10801 || a.opera && d >= 9.5 || a.air && d >= 1 || a.webkit && d >= 522 || !1), a
				}();
				return a
			}
		}, _p[11] = {
			value: function(require, exports) {
				function Class() {}

				function checkBaseConstructorCall(a, b) {
					var c = a.toString();
					if (!/this\.callBase/.test(c)) throw new Error(b + " : 类构造函数没有调用父类的构造函数！为了安全，请调用父类的构造函数")
				}

				function inherit(constructor, BaseClass, classname) {
					var KityClass = eval("(function " + classname + "( __inherit__flag ) {if( __inherit__flag != KITY_INHERIT_FLAG ) {KityClass.__KityConstructor.apply(this, arguments);}this.__KityClassName = KityClass.__KityClassName;})");
					KityClass.__KityConstructor = constructor, KityClass.prototype = new BaseClass(KITY_INHERIT_FLAG);
					for (var methodName in BaseClass.prototype) BaseClass.prototype.hasOwnProperty(methodName) && 0 !== methodName.indexOf("__Kity") && (KityClass.prototype[methodName] = BaseClass.prototype[methodName]);
					return KityClass.prototype.constructor = KityClass, KityClass
				}

				function mixin(a, b) {
					if (0 == b instanceof Array) return a;
					var c, d, e, f = b.length;
					for (a.__KityMixins = {
							constructor: []
						}, c = 0; f > c; c++) {
						d = b[c].prototype;
						for (e in d) !1 !== d.hasOwnProperty(e) && 0 !== e.indexOf("__Kity") && ("constructor" === e ? a.__KityMixins.constructor.push(d[e]) : a.prototype[e] = a.__KityMixins[e] = d[e])
					}
					return a
				}

				function extend(a, b) {
					b.__KityClassName && (b = b.prototype);
					for (var c in b)
						if (b.hasOwnProperty(c) && c.indexOf("__Kity") && "constructor" != c) {
							var d = a.prototype[c] = b[c];
							d.__KityMethodClass = a, d.__KityMethodName = c
						}
					return a
				}
				Function.prototype.bind = Function.prototype.bind || function(a) {
					var b = Array.prototype.slice.call(arguments, 1);
					return this.apply(a, b)
				}, exports.Class = Class, Class.__KityClassName = "Class", Class.prototype.base = function(a) {
					var b = arguments.callee.caller,
						c = b.__KityMethodClass.__KityBaseClass.prototype[a];
					return c.apply(this, Array.prototype.slice.call(arguments, 1))
				}, Class.prototype.callBase = function() {
					var a = arguments.callee.caller,
						b = a.__KityMethodClass.__KityBaseClass.prototype[a.__KityMethodName];
					return b.apply(this, arguments)
				}, Class.prototype.mixin = function(a) {
					var b = arguments.callee.caller,
						c = b.__KityMethodClass.__KityMixins;
					if (!c) return this;
					var d = c[a];
					return d.apply(this, Array.prototype.slice.call(arguments, 1))
				}, Class.prototype.callMixin = function() {
					var a = arguments.callee.caller,
						b = a.__KityMethodName,
						c = a.__KityMethodClass.__KityMixins;
					if (!c) return this;
					var d = c[b];
					if ("constructor" == b) {
						for (var e = 0, f = d.length; f > e; e++) d[e].call(this);
						return this
					}
					return d.apply(this, arguments)
				}, Class.prototype.pipe = function(a) {
					return "function" == typeof a && a.call(this, this), this
				}, Class.prototype.getType = function() {
					return this.__KityClassName
				}, Class.prototype.getClass = function() {
					return this.constructor
				};
				var KITY_INHERIT_FLAG = "__KITY_INHERIT_FLAG_" + +new Date;
				exports.createClass = function(a, b) {
					var c, d, e;
					return 1 === arguments.length && (b = arguments[0], a = "AnonymousClass"), e = b.base || Class, b.hasOwnProperty("constructor") ? (c = b.constructor, e != Class && checkBaseConstructorCall(c, a)) : c = function() {
						this.callBase.apply(this, arguments), this.callMixin.apply(this, arguments)
					}, d = inherit(c, e, a), d = mixin(d, b.mixins), d.__KityClassName = c.__KityClassName = a, d.__KityBaseClass = c.__KityBaseClass = e, d.__KityMethodName = c.__KityMethodName = "constructor", d.__KityMethodClass = c.__KityMethodClass = d, delete b.mixins, delete b.constructor, delete b.base, d = extend(d, b)
				}, exports.extendClass = extend
			}
		}, _p[12] = {
			value: function() {
				var a = {
					each: function(a, b, c) {
						if (null !== a)
							if (a.length === +a.length) {
								for (var d = 0, e = a.length; e > d; d++)
									if (b.call(c, a[d], d, a) === !1) return !1
							} else
								for (var f in a)
									if (a.hasOwnProperty(f) && b.call(c, a[f], f, a) === !1) return !1
					},
					extend: function(a) {
						for (var b = arguments, c = this.isBoolean(b[b.length - 1]) ? b[b.length - 1] : !1, d = this.isBoolean(b[b.length - 1]) ? b.length - 1 : b.length, e = 1; d > e; e++) {
							var f = b[e];
							for (var g in f) c && a.hasOwnProperty(g) || (a[g] = f[g])
						}
						return a
					},
					deepExtend: function(a) {
						for (var b = arguments, c = this.isBoolean(b[b.length - 1]) ? b[b.length - 1] : !1, d = this.isBoolean(b[b.length - 1]) ? b.length - 1 : b.length, e = 1; d > e; e++) {
							var f = b[e];
							for (var g in f) c && a.hasOwnProperty(g) || (this.isObject(a[g]) && this.isObject(f[g]) ? this.deepExtend(a[g], f[g], c) : a[g] = f[g])
						}
						return a
					},
					clone: function(a) {
						var b = {};
						for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
						return b
					},
					copy: function(a) {
						return "object" != typeof a ? a : "function" == typeof a ? null : JSON.parse(JSON.stringify(a))
					},
					queryPath: function(a, b) {
						for (var c = a.split("."), d = 0, e = b, f = c.length; f > d;) {
							if (!(c[d] in e)) return void 0;
							if (e = e[c[d]], d++, d >= f || void 0 === e) return e
						}
					},
					getValue: function(a, b) {
						return void 0 !== a ? a : b
					},
					flatten: function(b) {
						var c, d = [],
							e = b.length;
						for (c = 0; e > c; c++) b[c] instanceof Array ? d = d.concat(a.flatten(b[c])) : d.push(b[c]);
						return d
					},
					paralle: function(b, c, d) {
						var e, f, g, h;
						if (b instanceof Array) {
							for (h = [], f = 0; f < b.length; f++) h.push(a.paralle(b[f], c[f], d));
							return h
						}
						if (b instanceof Object) {
							if (e = b.getClass && b.getClass(), e && e.parse) b = b.valueOf(), c = c.valueOf(), h = a.paralle(b, c, d), h = e.parse(h);
							else {
								h = {};
								for (g in b) b.hasOwnProperty(g) && c.hasOwnProperty(g) && (h[g] = a.paralle(b[g], c[g], d))
							}
							return h
						}
						return !1 === isNaN(parseFloat(b)) ? d(b, c) : h
					},
					parallelize: function(b) {
						return function(c, d) {
							return a.paralle(c, d, b)
						}
					}
				};
				return a.each(["String", "Function", "Array", "Number", "RegExp", "Object", "Boolean"], function(b) {
					a["is" + b] = function(a) {
						return Object.prototype.toString.apply(a) == "[object " + b + "]"
					}
				}), a
			}
		}, _p[13] = {
			value: function() {
				var a = _p.r(16),
					b = _p.r(12),
					c = _p.r(11).createClass("ColorMatrixEffect", {
						base: a,
						constructor: function(d, e) {
							this.callBase(a.NAME_COLOR_MATRIX), this.set("type", b.getValue(d, c.TYPE_MATRIX)), this.set("in", b.getValue(e, a.INPUT_SOURCE_GRAPHIC))
						}
					});
				return b.extend(c, {
					TYPE_MATRIX: "matrix",
					TYPE_SATURATE: "saturate",
					TYPE_HUE_ROTATE: "hueRotate",
					TYPE_LUMINANCE_TO_ALPHA: "luminanceToAlpha",
					MATRIX_ORIGINAL: "10000010000010000010".split("").join(" "),
					MATRIX_EMPTY: "00000000000000000000".split("").join(" ")
				}), c
			}
		}, _p[14] = {
			value: function() {
				var a = _p.r(16),
					b = _p.r(12),
					c = _p.r(11).createClass("CompositeEffect", {
						base: a,
						constructor: function(d, e, f) {
							this.callBase(a.NAME_COMPOSITE), this.set("operator", b.getValue(d, c.OPERATOR_OVER)), e && this.set("in", e), f && this.set("in2", f)
						}
					});
				return b.extend(c, {
					OPERATOR_OVER: "over",
					OPERATOR_IN: "in",
					OPERATOR_OUT: "out",
					OPERATOR_ATOP: "atop",
					OPERATOR_XOR: "xor",
					OPERATOR_ARITHMETIC: "arithmetic"
				}), c
			}
		}, _p[15] = {
			value: function() {
				var a = _p.r(16),
					b = _p.r(12),
					c = _p.r(11).createClass("ConvolveMatrixEffect", {
						base: a,
						constructor: function(d, e) {
							this.callBase(a.NAME_CONVOLVE_MATRIX), this.set("edgeMode", b.getValue(d, c.MODE_DUPLICATE)), this.set("in", b.getValue(e, a.INPUT_SOURCE_GRAPHIC))
						}
					});
				return b.extend(c, {
					MODE_DUPLICATE: "duplicate",
					MODE_WRAP: "wrap",
					MODE_NONE: "none"
				}), c
			}
		}, _p[16] = {
			value: function() {
				var a = _p.r(68),
					b = _p.r(11).createClass("Effect", {
						constructor: function(b) {
							this.node = a.createNode(b)
						},
						getId: function() {
							return this.node.id
						},
						setId: function(a) {
							return this.node.id = a, this
						},
						set: function(a, b) {
							return this.node.setAttribute(a, b), this
						},
						get: function(a) {
							return this.node.getAttribute(a)
						},
						getNode: function() {
							return this.node
						},
						toString: function() {
							return this.node.getAttribute("result") || ""
						}
					});
				return _p.r(12).extend(b, {
					NAME_GAUSSIAN_BLUR: "feGaussianBlur",
					NAME_OFFSET: "feOffset",
					NAME_COMPOSITE: "feComposite",
					NAME_COLOR_MATRIX: "feColorMatrix",
					NAME_CONVOLVE_MATRIX: "feConvolveMatrix",
					INPUT_SOURCE_GRAPHIC: "SourceGraphic",
					INPUT_SOURCE_ALPHA: "SourceAlpha",
					INPUT_BACKGROUND_IMAGE: "BackgroundImage",
					INPUT_BACKGROUND_ALPHA: "BackgroundAlpha",
					INPUT_FILL_PAINT: "FillPaint",
					INPUT_STROKE_PAINT: "StrokePaint"
				}), b
			}
		}, _p[17] = {
			value: function() {
				var a = _p.r(16),
					b = _p.r(12);
				return _p.r(11).createClass("GaussianblurEffect", {
					base: a,
					constructor: function(c, d) {
						this.callBase(a.NAME_GAUSSIAN_BLUR), this.set("stdDeviation", b.getValue(c, 1)), this.set("in", b.getValue(d, a.INPUT_SOURCE_GRAPHIC))
					}
				})
			}
		}, _p[18] = {
			value: function() {
				var a = _p.r(16),
					b = _p.r(12);
				return _p.r(11).createClass("OffsetEffect", {
					base: a,
					constructor: function(c, d, e) {
						this.callBase(a.NAME_OFFSET), this.set("dx", b.getValue(c, 0)), this.set("dy", b.getValue(d, 0)), this.set("in", b.getValue(e, a.INPUT_SOURCE_GRAPHIC))
					}
				})
			}
		}, _p[19] = {
			value: function() {
				return _p.r(11).createClass("EffectContainer", {
					base: _p.r(29),
					addEffect: function() {
						return this.addItem.apply(this, arguments)
					},
					prependEffect: function() {
						return this.prependItem.apply(this, arguments)
					},
					appendEffect: function() {
						return this.appendItem.apply(this, arguments)
					},
					removeEffect: function() {
						return this.removeItem.apply(this, arguments)
					},
					addEffects: function() {
						return this.addItems.apply(this, arguments)
					},
					setEffects: function() {
						return this.setItems.apply(this, arguments)
					},
					getEffect: function() {
						return this.getItem.apply(this, arguments)
					},
					getEffects: function() {
						return this.getItems.apply(this, arguments)
					},
					getFirstEffect: function() {
						return this.getFirstItem.apply(this, arguments)
					},
					getLastEffect: function() {
						return this.getLastItem.apply(this, arguments)
					},
					handleAdd: function(a, b) {
						var c = this.getEffects().length,
							d = this.getItem(b + 1);
						return c === b + 1 ? void this.node.appendChild(a.getNode()) : void this.node.insertBefore(a.getNode(), d.getNode())
					}
				})
			}
		}, _p[20] = {
			value: function() {
				var a = _p.r(68),
					b = _p.r(11),
					c = b.createClass("Filter", {
						mixins: [_p.r(19)],
						constructor: function(b, c, d, e) {
							this.node = a.createNode("filter"), void 0 !== b && this.set("x", b), void 0 !== c && this.set("y", c), void 0 !== d && this.set("width", d), void 0 !== e && this.set("height", e)
						},
						getId: function() {
							return this.id
						},
						setId: function(a) {
							return this.node.id = a, this
						},
						set: function(a, b) {
							return this.node.setAttribute(a, b), this
						},
						get: function(a) {
							return this.node.getAttribute(a)
						},
						getNode: function() {
							return this.node
						}
					}),
					d = _p.r(61);
				return b.extendClass(d, {
					applyFilter: function(a) {
						var b = a.get("id");
						return b && this.node.setAttribute("filter", "url(#" + b + ")"), this
					}
				}), c
			}
		}, _p[21] = {
			value: function() {
				var a = _p.r(17);
				return _p.r(11).createClass("GaussianblurFilter", {
					base: _p.r(20),
					constructor: function(b) {
						this.callBase(), this.addEffect(new a(b))
					}
				})
			}
		}, _p[22] = {
			value: function() {
				var a = _p.r(17),
					b = _p.r(16),
					c = _p.r(13),
					d = _p.r(28),
					e = _p.r(12),
					f = _p.r(14),
					g = _p.r(18);
				return _p.r(11).createClass("ProjectionFilter", {
					base: _p.r(20),
					constructor: function(d, e, h) {
						this.callBase(), this.gaussianblurEffect = new a(d, b.INPUT_SOURCE_ALPHA), this.gaussianblurEffect.set("result", "gaussianblur"), this.addEffect(this.gaussianblurEffect), this.offsetEffect = new g(e, h, this.gaussianblurEffect), this.offsetEffect.set("result", "offsetBlur"), this.addEffect(this.offsetEffect), this.colorMatrixEffect = new c(c.TYPE_MATRIX, this.offsetEffect), this.colorMatrixEffect.set("values", c.MATRIX_ORIGINAL), this.colorMatrixEffect.set("result", "colorOffsetBlur"), this.addEffect(this.colorMatrixEffect), this.compositeEffect = new f(f.OPERATOR_OVER, b.INPUT_SOURCE_GRAPHIC, this.colorMatrixEffect), this.addEffect(this.compositeEffect)
					},
					setColor: function(a) {
						var b = null,
							f = [];
						if (e.isString(a) && (a = d.parse(a)), !a) return this;
						b = c.MATRIX_EMPTY.split(" "), f.push(a.get("r")), f.push(a.get("g")), f.push(a.get("b"));
						for (var g = 0, h = f.length; h > g; g++) b[5 * g + 3] = f[g] / 255;
						return b[18] = a.get("a"), this.colorMatrixEffect.set("values", b.join(" ")), this
					},
					setOpacity: function(a) {
						var b = this.colorMatrixEffect.get("values").split(" ");
						return b[18] = a, this.colorMatrixEffect.set("values", b.join(" ")), this
					},
					setOffset: function(a, b) {
						this.setOffsetX(a), this.setOffsetY(b)
					},
					setOffsetX: function(a) {
						this.offsetEffect.set("dx", a)
					},
					setOffsetY: function(a) {
						this.offsetEffect.set("dy", a)
					},
					setDeviation: function(a) {
						this.gaussianblurEffect.set("stdDeviation", a)
					}
				})
			}
		}, _p[23] = {
			value: function() {
				return _p.r(11).createClass("Bezier", {
					mixins: [_p.r(52)],
					base: _p.r(47),
					constructor: function(a) {
						this.callBase(), a = a || [], this.changeable = !0, this.setBezierPoints(a)
					},
					getBezierPoints: function() {
						return this.getPoints()
					},
					setBezierPoints: function(a) {
						return this.setPoints(a)
					},
					onContainerChanged: function() {
						this.changeable && this.update()
					},
					update: function() {
						var a = null,
							b = this.getBezierPoints();
						if (!(b.length < 2)) {
							a = this.getDrawer(), a.clear();
							var c = b[0].getVertex(),
								d = null,
								e = null;
							a.moveTo(c.x, c.y);
							for (var f = 1, g = b.length; g > f; f++) c = b[f].getVertex(), e = b[f].getBackward(), d = b[f - 1].getForward(), a.bezierTo(d.x, d.y, e.x, e.y, c.x, c.y);
							return this
						}
					}
				})
			}
		}, _p[24] = {
			value: function() {
				var a = _p.r(64),
					b = _p.r(74),
					c = _p.r(11).createClass("BezierPoint", {
						constructor: function(b, c, d) {
							this.vertex = new a(b, c), this.forward = new a(b, c), this.backward = new a(b, c), this.setSmooth(void 0 === d || d), this.setSymReflaction(!0)
						},
						clone: function() {
							var a = new c,
								b = null;
							return b = this.getVertex(), a.setVertex(b.x, b.y), b = this.getForward(), a.setForward(b.x, b.y), b = this.getBackward(), a.setBackward(b.x, b.y), a.setSymReflaction(this.isSymReflaction), a.setSmooth(this.isSmooth()), a
						},
						setVertex: function(a, b) {
							return this.vertex.setPoint(a, b), this.update(), this
						},
						moveTo: function(a, b) {
							var c = this.forward.getPoint(),
								d = this.backward.getPoint(),
								e = this.vertex.getPoint(),
								f = {
									left: a - e.x,
									top: b - e.y
								};
							this.forward.setPoint(c.x + f.left, c.y + f.top), this.backward.setPoint(d.x + f.left, d.y + f.top), this.vertex.setPoint(a, b), this.update()
						},
						setForward: function(a, b) {
							return this.forward.setPoint(a, b), this.smooth && this.updateAnother(this.forward, this.backward), this.update(), this.lastControlPointSet = this.forward, this
						},
						setBackward: function(a, b) {
							return this.backward.setPoint(a, b), this.smooth && this.updateAnother(this.backward, this.forward), this.update(), this.lastControlPointSet = this.backward, this
						},
						setSymReflaction: function(a) {
							return this.symReflaction = a, this.smooth && this.setSmooth(!0), this
						},
						isSymReflaction: function() {
							return this.symReflaction
						},
						updateAnother: function(a, c) {
							var d = this.getVertex(),
								e = b.fromPoints(a.getPoint(), d),
								f = b.fromPoints(d, c.getPoint());
							return f = e.normalize(this.isSymReflaction() ? e.length() : f.length()), c.setPoint(d.x + f.x, d.y + f.y), this
						},
						setSmooth: function(a) {
							var b;
							return this.smooth = !!a, this.smooth && (b = this.lastControlPointSet) && this.updateAnother(b, b == this.forward ? this.backward : this.forward), this
						},
						isSmooth: function() {
							return this.smooth
						},
						getVertex: function() {
							return this.vertex.getPoint()
						},
						getForward: function() {
							return this.forward.getPoint()
						},
						getBackward: function() {
							return this.backward.getPoint()
						},
						update: function() {
							return this.container ? void(this.container.update && this.container.update(this)) : this
						}
					});
				return c
			}
		}, _p[25] = {
			value: function() {
				var a = _p.r(11).createClass("Box", {
					constructor: function(a, b, c, d) {
						var e = arguments[0];
						e && "object" == typeof e && (a = e.x, b = e.y, c = e.width, d = e.height), 0 > c && (a -= c = -c), 0 > d && (b -= d = -d), this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0, this.left = this.x, this.right = this.x + this.width, this.top = this.y, this.bottom = this.y + this.height, this.cx = this.x + this.width / 2, this.cy = this.y + this.height / 2
					},
					getRangeX: function() {
						return [this.left, this.right]
					},
					getRangeY: function() {
						return [this.top, this.bottom]
					},
					merge: function(b) {
						var c = Math.min(this.left, b.left),
							d = Math.max(this.right, b.right),
							e = Math.min(this.top, b.top),
							f = Math.max(this.bottom, b.bottom);
						return new a(c, e, d - c, f - e)
					},
					expand: function(b, c, d, e) {
						if (arguments.length < 1) return new a(this);
						arguments.length < 2 && (c = b), arguments.length < 3 && (d = b), arguments.length < 4 && (e = c);
						var f = this.left - e,
							g = this.top - b,
							h = this.width + c,
							i = this.height + b;
						return new a(f, g, h, i)
					},
					valueOf: function() {
						return [this.x, this.y, this.width, this.height]
					},
					toString: function() {
						return this.valueOf().join(" ")
					}
				});
				return a.parse = function(b) {
					return "string" == typeof b ? a.parse(b.split(/[\s,]+/).map(parseFloat)) : b instanceof Array ? new a(b[0], b[1], b[2], b[3]) : "x" in b ? new a(b) : null
				}, a
			}
		}, _p[26] = {
			value: function() {
				return _p.r(11).createClass("Circle", {
					base: _p.r(33),
					constructor: function(a, b, c) {
						this.callBase(a, a, b, c)
					},
					getRadius: function() {
						return this.getRadiusX()
					},
					setRadius: function(a) {
						return this.callBase(a, a)
					}
				})
			}
		}, _p[27] = {
			value: function() {
				var a = _p.r(11),
					b = _p.r(61),
					c = a.createClass("Clip", {
						base: b,
						mixins: [_p.r(62)],
						constructor: function() {
							this.callBase("clipPath")
						},
						clip: function(a) {
							return a.getNode().setAttribute("clip-path", "url(#" + this.getId() + ")"), this
						}
					});
				return a.extendClass(b, {
					clipWith: function(a) {
						return a.clip(this), this
					}
				}), c
			}
		}, _p[28] = {
			value: function() {
				var a = _p.r(12),
					b = _p.r(65),
					c = {},
					d = _p.r(11).createClass("Color", {
						constructor: function() {
							var b = null;
							"string" == typeof arguments[0] ? (b = c.parseToValue(arguments[0]), null === b && (b = {
								r: 0,
								g: 0,
								b: 0,
								h: 0,
								s: 0,
								l: 0,
								a: 1
							})) : (b = {
								r: 0 | arguments[0],
								g: 0 | arguments[1],
								b: 0 | arguments[2],
								a: parseFloat(arguments[3]) || 1
							}, b = c.overflowFormat(b), b = a.extend(b, c.rgbValueToHslValue(b))), this._color = b
						},
						set: function(b, e) {
							if (!d._MAX_VALUE[b]) throw new Error("Color set(): Illegal parameter");
							return "a" !== b && (e = Math.floor(e)), "h" == b && (e = (e + 360) % 360), this._color[b] = Math.max(d._MIN_VALUE[b], Math.min(d._MAX_VALUE[b], e)), -1 !== "rgb".indexOf(b) ? this._color = a.extend(this._color, c.rgbValueToHslValue(this._color)) : -1 !== "hsl".indexOf(b) && (this._color = a.extend(this._color, c.hslValueToRGBValue(this._color))), this
						},
						inc: function(a, b) {
							return b = this.get(a) + b, "h" == a ? b = (b + 360) % 360 : (b = Math.min(d._MAX_VALUE[a], b), b = Math.max(d._MIN_VALUE[a], b)), this.clone().set(a, b)
						},
						dec: function(a, b) {
							return this.inc(a, -b)
						},
						clone: function() {
							return new d(this.toRGBA())
						},
						get: function(a) {
							return d._MAX_VALUE[a] ? this._color[a] : null
						},
						getValues: function() {
							return a.clone(this._color)
						},
						valueOf: function() {
							return this.getValues()
						},
						toRGB: function() {
							return c.toString(this._color, "rgb")
						},
						toRGBA: function() {
							return c.toString(this._color, "rgba")
						},
						toHEX: function() {
							return c.toString(this._color, "hex")
						},
						toHSL: function() {
							return c.toString(this._color, "hsl")
						},
						toHSLA: function() {
							return c.toString(this._color, "hsla")
						},
						toString: function() {
							return 1 === this._color.a ? this.toRGB() : this.toRGBA()
						}
					});
				return a.extend(d, {
					_MAX_VALUE: {
						r: 255,
						g: 255,
						b: 255,
						h: 360,
						s: 100,
						l: 100,
						a: 1
					},
					_MIN_VALUE: {
						r: 0,
						g: 0,
						b: 0,
						h: 0,
						s: 0,
						l: 0,
						a: 0
					},
					R: "r",
					G: "g",
					B: "b",
					H: "h",
					S: "s",
					L: "l",
					A: "a",
					parse: function(b) {
						var e;
						return a.isString(b) && (e = c.parseToValue(b)), a.isObject(b) && "r" in b && (e = b), null === e ? new d : new d(e.r, e.g, e.b, e.a)
					},
					createHSL: function(a, b, c) {
						return d.createHSLA(a, b, c, 1)
					},
					createHSLA: function(a, b, c, e) {
						var f = null;
						return b += "%", c += "%", f = ["hsla(" + a, b, c, e + ")"], d.parse(f.join(", "))
					},
					createRGB: function(a, b, c) {
						return d.createRGBA(a, b, c, 1)
					},
					createRGBA: function(a, b, c, e) {
						return new d(a, b, c, e)
					}
				}), a.extend(c, {
					parseToValue: function(a) {
						var d = {};
						if (a = b.EXTEND_STANDARD[a] || b.COLOR_STANDARD[a] || a, /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(a)) d = c.hexToValue(a);
						else if (/^(rgba?)/i.test(a)) d = c.rgbaToValue(a);
						else {
							if (!/^(hsla?)/i.test(a)) return null;
							d = c.hslaToValue(a)
						}
						return c.overflowFormat(d)
					},
					hexToValue: function(b) {
						var d = {},
							e = ["r", "g", "b"];
						return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(b) ? (b = RegExp.$1.split(""), a.each(e, function(a, e) {
							d[a] = c.toNumber(3 === b.length ? b[e] + b[e] : b[2 * e] + b[2 * e + 1])
						}), d = a.extend(d, c.rgbValueToHslValue(d)), d.a = 1, d) : null
					},
					rgbaToValue: function(b) {
						var d = {},
							e = !1,
							f = ["r", "g", "b"];
						return /^(rgba?)/i.test(b) ? (e = 4 === RegExp.$1.length, b = b.replace(/^rgba?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(","), a.each(f, function(a, c) {
							d[a] = 0 | b[c]
						}), d = a.extend(d, c.rgbValueToHslValue(d)), d.a = e ? parseFloat(b[3]) : 1, d) : null
					},
					hslaToValue: function(b) {
						var d = {},
							e = !1;
						return /^(hsla?)/i.test(b) ? (e = 4 === RegExp.$1.length, b = b.replace(/^hsla?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(","), d.h = 0 | b[0], d.s = 0 | b[1], d.l = 0 | b[2], d = a.extend(d, c.hslValueToRGBValue(d)), d = c.hslValueToRGBValue(d), d.a = e ? parseFloat(b[3]) : 1, d) : null
					},
					hslValueToRGBValue: function(b) {
						function c(a, b, c) {
							return 0 > c ? c += 1 : c > 1 && (c -= 1), 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
						}
						var d = null,
							e = null,
							f = {};
						return b = a.extend({}, b), b.h = b.h / 360, b.s = b.s / 100, b.l = b.l / 100, 0 === b.s ? f.r = f.g = f.b = b.l : (d = b.l < .5 ? b.l * (1 + b.s) : b.l + b.s - b.l * b.s, e = 2 * b.l - d, f.r = c(e, d, b.h + 1 / 3), f.g = c(e, d, b.h), f.b = c(e, d, b.h - 1 / 3)), f.r = Math.min(Math.round(255 * f.r), 255), f.g = Math.min(Math.round(255 * f.g), 255), f.b = Math.min(Math.round(255 * f.b), 255), f
					},
					rgbValueToHslValue: function(b) {
						var c = null,
							d = null,
							e = {};
						return b = a.extend({}, b), b.r = b.r / 255, b.g = b.g / 255, b.b = b.b / 255, c = Math.max(b.r, b.g, b.b), d = Math.min(b.r, b.g, b.b), c === d ? e.h = 0 : c === b.r ? e.h = b.g >= b.b ? 60 * (b.g - b.b) / (c - d) : 60 * (b.g - b.b) / (c - d) + 360 : c === b.g ? e.h = 60 * (b.b - b.r) / (c - d) + 120 : c === b.b && (e.h = 60 * (b.r - b.g) / (c - d) + 240), e.l = (c + d) / 2, e.s = 0 === e.l || c === d ? 0 : e.l > 0 && e.l <= .5 ? (c - d) / (c + d) : (c - d) / (2 - c - d), e.h = Math.round(e.h), e.s = Math.round(100 * e.s), e.l = Math.round(100 * e.l), e
					},
					toString: function(b, d) {
						var e = [];
						return b = a.extend({}, b), -1 !== d.indexOf("hsl") && (b.s += "%", b.l += "%"), "hex" !== d ? (a.each(d.split(""), function(a) {
							e.push(b[a])
						}), (d + "(" + e.join(", ") + ")").toLowerCase()) : (e.push(c.toHexValue(+b.r)), e.push(c.toHexValue(+b.g)), e.push(c.toHexValue(+b.b)), ("#" + e.join("")).toLowerCase())
					},
					toNumber: function(a) {
						return 0 | Number("0x" + a)
					},
					toHexValue: function(a) {
						var b = a.toString(16);
						return 1 === b.length ? "0" + b : b
					},
					overflowFormat: function(b) {
						var c = a.extend({}, b),
							e = "rgba";
						return a.each(e.split(""), function(a) {
							c.hasOwnProperty(a) && (c[a] = Math.min(d._MAX_VALUE[a], c[a]), c[a] = Math.max(d._MIN_VALUE[a], c[a]))
						}), c
					}
				}), d
			}
		}, _p[29] = {
			value: function() {
				function a() {
					return this.container.removeItem(this), this
				}
				return _p.r(11).createClass("Container", {
					getItems: function() {
						return this.items || (this.items = [])
					},
					getItem: function(a) {
						return this.getItems()[a]
					},
					getFirstItem: function() {
						return this.getItem(0)
					},
					getLastItem: function() {
						return this.getItem(this.getItems().length - 1)
					},
					indexOf: function(a) {
						return this.getItems().indexOf(a)
					},
					eachItem: function(a) {
						var b, c = this.getItems(),
							d = c.length;
						for (b = 0; d > b; b++) a.call(this, b, c[b]);
						return this
					},
					addItem: function(b, c, d) {
						var e = this.getItems(),
							f = e.length;
						return ~e.indexOf(b) ? this : (c >= 0 && f > c || (c = f), e.splice(c, 0, b), "object" == typeof b && (b.container = this, b.remove = a), this.handleAdd(b, c), d || this.onContainerChanged("add", [b]), this)
					},
					addItems: function(a) {
						for (var b = 0, c = a.length; c > b; b++) this.addItem(a[b], -1, !0);
						return this.onContainerChanged("add", a), this
					},
					setItems: function(a) {
						return this.clear().addItems(a)
					},
					appendItem: function(a) {
						return this.addItem(a)
					},
					prependItem: function(a) {
						return this.addItem(a, 0)
					},
					removeItem: function(a, b) {
						if ("number" != typeof a) return this.removeItem(this.indexOf(a));
						var c = this.getItems(),
							d = (c.length, c[a]);
						return void 0 === d ? this : (c.splice(a, 1), d.container && delete d.container, d.remove && delete d.remove, this.handleRemove(d, a), b || this.onContainerChanged("remove", [d]), this)
					},
					clear: function() {
						for (var a, b = []; a = this.getFirstItem();) b.push(a), this.removeItem(0, !0);
						return this.onContainerChanged("remove", b), this
					},
					onContainerChanged: function() {},
					handleAdd: function() {},
					handleRemove: function() {}
				})
			}
		}, _p[30] = {
			value: function() {
				var a = _p.r(12),
					b = {
						getCurvePanLines: function(a, c) {
							var d = b.getCenterPoints(a),
								e = b.getPanLine(a.length, d);
							return b.getMovedPanLines(a, e, c)
						},
						getCenterPoints: function(a) {
							for (var b = {}, c = null, d = 0, e = 0, f = a.length; f > d; d++) e = d === f - 1 ? 0 : d + 1, c = d + "," + e, b[c] = {
								x: (a[d].x + a[e].y) / 2,
								y: (a[d].x + a[e].y) / 2
							};
							return b
						},
						getPanLine: function(a, b) {
							for (var c, d = {}, e = null, f = 0; a > f; f++) {
								var g = null,
									h = null;
								c = (f + 1) % a, e = c, g = b[f + "," + c], f = c, c = (f + 1) % a, h = b[f + "," + c], d[e] = {
									points: [{
										x: g.x,
										y: g.y
									}, {
										x: h.x,
										y: h.y
									}],
									center: {
										x: (g.x + h.x) / 2,
										y: (g.y + h.y) / 2
									}
								}, f = (e + a - 1) % a
							}
							return d
						},
						getMovedPanLines: function(b, c, d) {
							var e = {};
							return a.each(b, function(b, f) {
								var g = c[f],
									h = g.center,
									i = {
										x: h.x - b.x,
										y: h.y - b.y
									},
									j = e[f] = {
										points: [],
										center: {
											x: b.x,
											y: b.y
										}
									};
								a.each(g.points, function(a) {
									var b = {
											x: a.x - i.x,
											y: a.y - i.y
										},
										c = j.center,
										e = b.x - c.x,
										f = b.y - c.y;
									b.x = c.x + d * e, b.y = c.y + d * f, j.points.push(b)
								})
							}), e
						}
					};
				return _p.r(11).createClass("Curve", {
					base: _p.r(47),
					mixins: [_p.r(52)],
					constructor: function(a, b) {
						this.callBase(), this.setPoints(a || []), this.closeState = !!b, this.changeable = !0, this.smoothFactor = 1, this.update()
					},
					onContainerChanged: function() {
						this.changeable && this.update()
					},
					setSmoothFactor: function(a) {
						return this.smoothFactor = 0 > a ? 0 : a, this.update(), this
					},
					getSmoothFactor: function() {
						return this.smoothFactor
					},
					update: function() {
						var a = this.getPoints(),
							c = null,
							d = this.getDrawer(),
							e = null,
							f = null,
							g = null;
						if (d.clear(), 0 === a.length) return this;
						if (d.moveTo(a[0]), 1 === a.length) return this;
						if (2 === a.length) return d.lineTo(a[1]), this;
						c = b.getCurvePanLines(a, this.getSmoothFactor());
						for (var h = 1, i = a.length; i > h; h++) e = c[h].center, f = this.closeState || h != i - 1 ? c[h].points[0] : c[h].center, g = this.closeState || 1 != h ? c[h - 1].points[1] : c[h - 1].center, d.bezierTo(g.x, g.y, f.x, f.y, e.x, e.y);
						return this.closeState && (e = c[0].center, f = c[0].points[0], g = c[a.length - 1].points[1], d.bezierTo(g.x, g.y, f.x, f.y, e.x, e.y)), this
					},
					close: function() {
						return this.closeState = !0, this.update()
					},
					open: function() {
						return this.closeState = !1, this.update()
					},
					isClose: function() {
						return !!this.closeState
					}
				})
			}
		}, _p[31] = {
			value: function() {
				return _p.r(11).createClass("Data", {
					constructor: function() {
						this._data = {}
					},
					setData: function(a, b) {
						return this._data[a] = b, this
					},
					getData: function(a) {
						return this._data[a]
					},
					removeData: function(a) {
						return delete this._data[a], this
					}
				})
			}
		}, _p[32] = {
			value: function() {
				return _p.r(11).createClass("GradientBrush", {
					base: _p.r(59),
					constructor: function(a) {
						this.callBase(a)
					}
				})
			}
		}, _p[33] = {
			value: function() {
				var a = (_p.r(12), _p.r(51));
				return _p.r(11).createClass("Ellipse", {
					base: _p.r(47),
					constructor: function(a, b, c, d) {
						this.callBase(), this.rx = a || 0, this.ry = b || 0, this.cx = c || 0, this.cy = d || 0, this.update()
					},
					update: function() {
						var a = this.rx,
							b = this.ry,
							c = this.cx + a,
							d = this.cx - a,
							e = this.cy,
							f = this.getDrawer();
						return f.clear(), f.moveTo(c, e), f.arcTo(a, b, 0, 1, 1, d, e), f.arcTo(a, b, 0, 1, 1, c, e), this
					},
					getRadius: function() {
						return {
							x: this.rx,
							y: this.ry
						}
					},
					getRadiusX: function() {
						return this.rx
					},
					getRadiusY: function() {
						return this.ry
					},
					getCenter: function() {
						return new a(this.cx, this.cy)
					},
					getCenterX: function() {
						return this.cx
					},
					getCenterY: function() {
						return this.cy
					},
					setRadius: function(a, b) {
						return this.rx = a, this.ry = b, this.update()
					},
					setRadiusX: function(a) {
						return this.rx = a, this.update()
					},
					setRadiusY: function(a) {
						return this.ry = a, this.update()
					},
					setCenter: function(b, c) {
						if (1 == arguments.length) {
							var d = a.parse(arguments[0]);
							b = d.x, c = d.y
						}
						return this.cx = b, this.cy = c, this.update()
					},
					setCenterX: function(a) {
						return this.cx = a, this.update()
					},
					setCenterY: function(a) {
						return this.cy = a, this.update()
					}
				})
			}
		}, _p[34] = {
			value: function() {
				function a(a, b, d) {
					return d = !!d, h.isString(a) && (a = a.match(/\S+/g)), h.each(a, function(a) {
						c.call(this, this.node, a, b, d)
					}, this), this
				}

				function b(a, b) {
					var c = null,
						d = this._EVNET_UID,
						f = void 0 === b;
					try {
						c = k[d][a]
					} catch (g) {
						return
					}
					return f || (f = !0, h.each(c, function(a, d) {
						a === b ? delete c[d] : f = !1
					})), f && (e(this.node, a, j[d][a]), delete k[d][a], delete j[d][a]), this
				}

				function c(a, b, c, e) {
					var f = this._EVNET_UID,
						g = this;
					j[f] || (j[f] = {}), j[f][b] || (j[f][b] = function(a) {
						a = new i(a || window.event), h.each(k[f][b], function(c) {
							var d;
							return c && (d = c.call(g, a), e && g.off(b, c)), d
						}, g)
					}), k[f] || (k[f] = {}), k[f][b] ? k[f][b].push(c) : (k[f][b] = [c], a && d(a, b, j[f][b]))
				}

				function d(a, b, c) {
					a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
				}

				function e(a, b, c) {
					a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent(b, c)
				}

				function f(a, b, c) {
					var d = new CustomEvent(b, {
						bubbles: !0,
						cancelable: !0
					});
					d._kityParam = c, a.dispatchEvent(d)
				}

				function g(a, b, c) {
					var d = null,
						e = null;
					try {
						if (e = j[a._EVNET_UID][b], !e) return
					} catch (f) {
						return
					}
					d = h.extend({
						type: b,
						target: a
					}, c || {}), e.call(a, d)
				}! function() {
					function a(a, b) {
						b = b || {
							bubbles: !1,
							cancelable: !1,
							detail: void 0
						};
						var c = document.createEvent("CustomEvent");
						return c.initCustomEvent(a, b.bubbles, b.cancelable, b.detail), c
					}
					a.prototype = window.Event.prototype, window.CustomEvent = a
				}();
				var h = _p.r(12),
					i = _p.r(63),
					j = {},
					k = {},
					l = 0;
				return _p.r(11).createClass("EventHandler", {
					constructor: function() {
						this._EVNET_UID = ++l
					},
					addEventListener: function(b, c) {
						return a.call(this, b, c, !1)
					},
					addOnceEventListener: function(b, c) {
						return a.call(this, b, c, !0)
					},
					removeEventListener: function(a, c) {
						return b.call(this, a, c)
					},
					on: function() {
						return this.addEventListener.apply(this, arguments)
					},
					once: function() {
						return this.addOnceEventListener.apply(this, arguments)
					},
					off: function() {
						return this.removeEventListener.apply(this, arguments)
					},
					fire: function() {
						return this.trigger.apply(this, arguments)
					},
					trigger: function(a, b) {
						return this.node ? f(this.node, a, b) : g(this, a, b), this
					}
				})
			}
		}, _p[35] = {
			value: function() {
				function a(a) {
					var b, c, d, e, f;
					for (b = [], c = 0; c < a.length; c++)
						for (e = a[c], b.push(f = []), d = 0; d < e.length; d++) f.push(e[d]);
					return a.isUniform && (b.isUniform = !0), a.isAbsolute && (b.isAbsolute = !0), a.isCurve && (b.isCurve = !0), b
				}

				function b(a, b, c) {
					function d(a, b) {
						for (var c = 0, d = a.length; d > c; c++)
							if (a[c] === b) return a.push(a.splice(c, 1)[0])
					}

					function e() {
						var f = Array.prototype.slice.call(arguments, 0),
							g = f.join("␀"),
							h = e.cache = e.cache || {},
							i = e.count = e.count || [];
						return h.hasOwnProperty(g) ? (d(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a.apply(b, f), c ? c(h[g]) : h[g])
					}
					return e
				}

				function c(a, b, d, e, f, g, h, i, j, k) {
					var l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q = Math,
						R = Q.PI,
						S = Math.abs,
						T = 120 * R / 180,
						U = R / 180 * (+f || 0),
						V = [],
						W = function(a, b, c) {
							var d = a * Q.cos(c) - b * Q.sin(c),
								e = a * Q.sin(c) + b * Q.cos(c);
							return {
								x: d,
								y: e
							}
						};
					if (k ? (w = k[0], x = k[1], u = k[2], v = k[3]) : (l = W(a, b, -U), a = l.x, b = l.y, l = W(i, j, -U), i = l.x, j = l.y, m = Q.cos(R / 180 * f), n = Q.sin(R / 180 * f), p = (a - i) / 2, q = (b - j) / 2, o = p * p / (d * d) + q * q / (e * e), o > 1 && (o = Q.sqrt(o), d = o * d, e = o * e), r = d * d, s = e * e, t = (g == h ? -1 : 1) * Q.sqrt(S((r * s - r * q * q - s * p * p) / (r * q * q + s * p * p))), u = t * d * q / e + (a + i) / 2, v = t * -e * p / d + (b + j) / 2, w = Q.asin(((b - v) / e).toFixed(9)), x = Q.asin(((j - v) / e).toFixed(9)), w = u > a ? R - w : w, x = u > i ? R - x : x, 0 > w && (w = 2 * R + w), 0 > x && (x = 2 * R + x), h && w > x && (w -= 2 * R), !h && x > w && (x -= 2 * R)), y = x - w, S(y) > T && (z = x, A = i, B = j, x = w + T * (h && x > w ? 1 : -1), i = u + d * Q.cos(x), j = v + e * Q.sin(x), V = c(i, j, d, e, f, 0, h, A, B, [x, z, u, v])), y = x - w, C = Q.cos(w), D = Q.sin(w), E = Q.cos(x), F = Q.sin(x), G = Q.tan(y / 4), H = 4 / 3 * d * G, I = 4 / 3 * e * G, J = [a, b], K = [a + H * D, b - I * C], L = [i + H * F, j - I * E], M = [i, j], K[0] = 2 * J[0] - K[0], K[1] = 2 * J[1] - K[1], k) return [K, L, M].concat(V);
					for (V = [K, L, M].concat(V).join().split(","), N = [], O = 0, P = V.length; P > O; O++) N[O] = O % 2 ? W(V[O - 1], V[O], U).y : W(V[O], V[O + 1], U).x;
					return N
				}

				function d(a, b, c, d, e, f) {
					var g = 1 / 3,
						h = 2 / 3;
					return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
				}

				function e(a, b) {
					function c(a) {
						return function(b, c) {
							return b + a * (c - b)
						}
					}
					var d = c(b || .5),
						e = a,
						f = e[0],
						g = e[1],
						h = e[2],
						i = e[3],
						j = e[4],
						k = e[5],
						l = e[6],
						m = e[7],
						n = d(f, h),
						o = d(g, i),
						p = d(h, j),
						q = d(i, k),
						r = d(j, l),
						s = d(k, m),
						t = d(n, p),
						u = d(o, q),
						v = d(p, r),
						w = d(q, s),
						x = d(t, v),
						y = d(u, w);
					return [
						[f, g, n, o, t, u, x, y],
						[x, y, v, w, r, s, l, m]
					]
				}
				var f = _p.r(12),
					g = _p.r(51),
					h = _p.r(74),
					i = _p.r(44),
					j = {},
					k = /([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?\s*)+)/gi,
					l = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/gi,
					m = {
						a: 7,
						c: 6,
						h: 1,
						l: 2,
						m: 2,
						q: 4,
						s: 4,
						t: 2,
						v: 1,
						z: 0
					};
				j.pathToString = function(a) {
					return a = a || this, "string" == typeof a ? a : a instanceof Array ? (a = f.flatten(a), a.join(",").replace(/,?([achlmqrstvxz]),?/gi, "$1")) : void 0
				}, j.parsePathString = b(function(a) {
					var b = [];
					return a.replace(k, function(a, c, d) {
						var e = [],
							f = c.toLowerCase();
						if (d.replace(l, function(a, b) {
								b && e.push(+b)
							}), "m" == f && e.length > 2 && (b.push([c].concat(e.splice(0, 2))), f = "l", c = "m" == c ? "l" : "L"), "r" == f) b.push([c].concat(e));
						else
							for (; e.length >= m[f] && (b.push([c].concat(e.splice(0, m[f]))), m[f]););
					}), b.isUniform = !0, b.toString = j.pathToString, b
				}), j.pathToAbsolute = b(function(a) {
					var b, c, d, e, f, g, h, i, k = a.isUniform ? a : j.parsePathString(j.pathToString(a)),
						l = [],
						m = 0,
						n = 0,
						o = 0,
						p = 0,
						q = 0;
					for ("M" == k[0][0] && (m = +k[0][1], n = +k[0][2], o = m, p = n, q++, l[0] = ["M", m, n]), d = q, g = k.length; g > d; d++) {
						if (l.push(b = []), c = k[d], c[0] != c[0].toUpperCase()) switch (b[0] = c[0].toUpperCase(), b[0]) {
							case "A":
								b[1] = c[1], b[2] = c[2], b[3] = c[3], b[4] = c[4], b[5] = c[5], b[6] = +(c[6] + m), b[7] = +(c[7] + n);
								break;
							case "V":
								b[1] = +c[1] + n;
								break;
							case "H":
								b[1] = +c[1] + m;
								break;
							case "M":
								o = +c[1] + m, p = +c[2] + n;
								break;
							default:
								for (e = 1, h = c.length; h > e; e++) b[e] = +c[e] + (e % 2 ? m : n)
						} else
							for (f = 0, i = c.length; i > f; f++) b[f] = c[f];
						switch (b[0]) {
							case "Z":
								m = o, n = p;
								break;
							case "H":
								m = b[1];
								break;
							case "V":
								n = b[1];
								break;
							case "M":
								o = b[b.length - 2], p = b[b.length - 1];
								break;
							default:
								m = b[b.length - 2], n = b[b.length - 1]
						}
					}
					return l.isUniform = !0, l.isAbsolute = !0, l.toString = j.pathToString, l
				}), j.pathToCurve = b(function(a) {
					var b, e, f, g, h, i, k, l, m, n, o, p, q = [];
					for (a.isAbsolute || (a = j.pathToAbsolute(a)), b = 0; b < a.length; b++)
						if (f = a[b][0], g = a[b].slice(1), "M" != f) {
							switch ("Z" == f && (l = !0, f = "L", g = h), k = g.slice(g.length - 2), "H" == f && (k = [g[0], i[1]], f = "L"), "V" == f && (k = [i[0], g[0]], f = "L"), ("S" == f || "T" == f) && (n = [i[0] + (i[0] - m[0]), i[1] + (i[1] - m[1])]), f) {
								case "L":
									o = i, p = k;
									break;
								case "C":
									o = g.slice(0, 2), p = g.slice(2, 4);
									break;
								case "S":
									o = n.slice(), p = g.slice(0, 2);
									break;
								case "Q":
									m = g.slice(0, 2), g = d.apply(null, i.concat(g)), o = g.slice(0, 2), p = g.slice(2, 4);
									break;
								case "T":
									g = d.apply(null, i.concat(n).concat(g)), o = g.slice(0, 2), p = g.slice(2, 4);
									break;
								case "A":
									for (g = c.apply(null, i.concat(g)), e = 0; e in g;) o = g.slice(e, e + 2), p = g.slice(e + 2, e + 4), k = g.slice(e + 4, e + 6), q.push(["C"].concat(o).concat(p).concat(k)), e += 6
							}
							"A" != f && q.push(["C"].concat(o).concat(p).concat(k)), i = k, "Q" != f && (m = p), l && (q.push(["Z"]), l = !1)
						} else h = m = i = g, q.push(a[b]);
					return q.isUniform = !0, q.isAbsolute = !0, q.isCurve = !0, q.toString = j.pathToString, q
				}), j.cutBezier = b(e), j.subBezier = function(a, b, c) {
					var d = e(a, b)[0];
					return c ? e(d, c / b)[1] : d
				}, j.pointAtBezier = function(a, b) {
					var c = e(a, b)[0],
						d = g.parse(c.slice(6)),
						f = g.parse(c.slice(4, 2)),
						i = h.fromPoints(f, d);
					return d.tan = 0 === b ? j.pointAtBezier(a, .01).tan : i.normalize(), d
				}, j.bezierLength = b(function(a) {
					function b(a) {
						var b = i * Math.pow(a, 4) + j * Math.pow(a, 3) + k * Math.pow(a, 2) + l * a + m;
						return 0 > b && (b = 0), Math.pow(b, .5)
					}
					var c, d, e, f, g, h, i, j, k, l, m, n = a;
					return c = -3 * n[0] + 9 * n[2] - 9 * n[4] + 3 * n[6], d = 6 * n[0] - 12 * n[2] + 6 * n[4], e = -3 * n[0] + 3 * n[2], f = -3 * n[1] + 9 * n[3] - 9 * n[5] + 3 * n[7], g = 6 * n[1] - 12 * n[3] + 6 * n[5], h = -3 * n[1] + 3 * n[3], i = Math.pow(c, 2) + Math.pow(f, 2), j = 2 * (c * d + f * g), k = 2 * (c * e + f * h) + Math.pow(d, 2) + Math.pow(g, 2), l = 2 * (d * e + g * h), m = Math.pow(e, 2) + Math.pow(h, 2), (b(0) + b(1) + 4 * (b(.125) + b(.375) + b(.625) + b(.875)) + 2 * (b(.25) + b(.5) + b(.75))) / 24
				});
				var n = b(function(a) {
					var b, c, d, e, f, g, h;
					for (g = [], h = 0, b = 0, c = a.length; c > b; b++) d = a[b], "M" != d[0] ? "Z" != d[0] ? (f = j.bezierLength(e.concat(d.slice(1))), g.push([h, h + f]), h += f, e = d.slice(4)) : g.push(null) : (e = d.slice(1), g.push(null));
					return g.totalLength = h, g
				});
				j.subPath = function(a, b, c) {
					var d;
					if (c = c || 0, d = b - c, d -= 0 | d, c -= 0 | c, b = c + d, b > 1) return j.subPath(a, 1, c).concat(j.subPath(a, b - 1));
					a.isCurve || (a = j.pathToCurve(a));
					var e, f, g, h, i, k, l, m, o, p = n(a),
						q = p.totalLength,
						r = q * b,
						s = q * (c || 0),
						t = [];
					for (e = 0, f = a.length; f > e; e++)
						if ("M" != a[e][0]) {
							if ("Z" != a[e][0])
								if (g = p[e][0], h = p[e][1], i = h - g, l = k.concat(a[e].slice(1)), s > h) k = l.slice(l.length - 2);
								else {
									if (s >= g) m = j.subBezier(l, Math.min((r - g) / i, 1), (s - g) / i), o = !0, k = m.slice(0, 2), t.push(["M"].concat(m.slice(0, 2))), t.push(["C"].concat(m.slice(2)));
									else if (r >= h) t.push(a[e].slice());
									else {
										if (!(r >= g)) break;
										m = j.subBezier(l, (r - g) / i), t.push(["C"].concat(m.slice(2))), o = !1
									}
									k = l.slice(l.length - 2)
								}
						} else k = a[e].slice(1), o && t.push(a[e].slice());
					return t.isAbsolute = !0, t.isCurve = !0, t.isUniform = !0, t.toString = j.pathToString, t
				}, j.pointAtPath = function(a, b) {
					a.isCurve || (a = j.pathToCurve(a));
					var c = j.subPath(a, b),
						d = "Z" == c[c.length - 1][0] ? c[c.length - 2] : c[c.length - 1];
					d = d.slice(1);
					var e = g.parse(d.slice(4)),
						f = g.parse(d.slice(2, 4));
					return e.tan = h.fromPoints(f, e).normalize(), e
				}, j.pathLength = b(function(a) {
					a.isCurve || (a = j.pathToCurve(a));
					var b = n(a);
					return b.totalLength
				}), j.pathKeyPoints = b(function(a) {
					var b, c, d;
					for (a.isCurve || (a = j.pathToCurve(a)), d = [], b = 0, c = a.length; c > b; b++) "z" != a[b][0] && d.push(a[b].slice(a[b].length - 2));
					return d
				});
				var o = b(function(b, c) {
					function d(a, b) {
						return a[b || a.i] && a[b || a.i][0]
					}

					function e(a, b) {
						return a[b || a.i] && a[b || a.i].slice(1)
					}

					function f(a, b) {
						var c = e(a, b);
						return c && c.slice(-2)
					}

					function g(a) {
						return "Z" == d(a) ? (a.splice(a.i, 1), !0) : !1
					}

					function h(a) {
						return "M" == d(a) ? (a.o.splice(a.o.i, 0, ["M"].concat(f(a.o, a.o.i - 1))), a.i++, a.o.i++, !0) : !1
					}

					function i(a) {
						for (var b, c = 1; !b;) b = f(a, a.length - c++);
						for (a.o.i = a.i; a.length < a.o.length;) g(a.o) || h(a.o) || (a.push(["C"].concat(b).concat(b).concat(b)), a.i++, a.o.i++)
					}
					b.isCurve || (b = j.pathToCurve(b)), c.isCurve || (c = j.pathToCurve(c));
					var k = a(b),
						l = a(c);
					for (k.i = 0, l.i = 0, k.o = l, l.o = k; k.i < k.length && l.i < l.length;) g(k) || g(l) || (d(k) != d(l) ? h(k) || h(l) || (k.i++, l.i++) : (k.i++, l.i++));
					return k.i == k.length && i(k), l.i == l.length && i(l), delete k.i, delete k.o, delete l.i, delete l.o, [k, l]
				});
				return j.alignCurve = o, j.pathTween = function(a, b, c) {
					if (0 === c) return a;
					if (1 === c) return b;
					var d, e, f, g = o(a, b),
						h = [];
					for (a = g[0], b = g[1], e = 0; e < a.length; e++)
						for (h.push(d = []), d.push(a[e][0]), f = 1; f < a[e].length; f++) d.push(a[e][f] + c * (b[e][f] - a[e][f]));
					return h.isUniform = h.isCurve = h.isAbsolute = !0, h
				}, j.transformPath = b(function(a, b) {
					var c, d, e, f, h, i;
					for (a.isCurve || (a = j.pathToCurve(a)), f = [], c = 0, d = a.length; d > c; c++)
						for (f.push(h = [a[c][0]]), e = 1; e < a[c].length; e += 2) i = a[c].slice(e, e + 2), i = b.transformPoint(g.parse(i)), f.push(i);
					return f
				}), _p.r(11).extendClass(i, {
					transformPath: function(a) {
						return j.transformPath(a, this)
					}
				}), j
			}
		}, _p[36] = {
			value: function() {
				var a = _p.r(68),
					b = _p.r(32),
					c = _p.r(28);
				return _p.r(11).createClass("GradientBrush", {
					base: b,
					constructor: function(a) {
						this.callBase(a), this.stops = []
					},
					addStop: function(b, d, e) {
						var f = a.createNode("stop");
						return d instanceof c || (d = c.parse(d)), void 0 === e && (e = d.get("a")), f.setAttribute("offset", b), f.setAttribute("stop-color", d.toRGB()), 1 > e && f.setAttribute("stop-opacity", e), this.node.appendChild(f), this
					}
				})
			}
		}, _p[37] = {
			value: function() {
				var a = _p.r(62);
				return _p.r(11).createClass("Group", {
					mixins: [a],
					base: _p.r(61),
					constructor: function() {
						this.callBase("g")
					}
				})
			}
		}, _p[38] = {
			value: function() {
				var a = _p.r(62);
				return _p.r(11).createClass("HyperLink", {
					mixins: [a],
					base: _p.r(61),
					constructor: function(a) {
						this.callBase("a"), this.setHref(a)
					},
					setHref: function(a) {
						return this.node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), this
					},
					getHref: function() {
						return this.node.getAttributeNS("xlink:href")
					},
					setTarget: function(a) {
						return this.node.setAttribute("target", a), this
					},
					getTarget: function() {
						return this.node.getAttribute("target")
					}
				})
			}
		}, _p[39] = {
			value: function() {
				return _p.r(11).createClass("Image", {
					base: _p.r(61),
					constructor: function(a, b, c, d, e) {
						this.callBase("image"), this.url = a, this.width = b || 0, this.height = c || 0, this.x = d || 0, this.y = e || 0, this.update()
					},
					update: function() {
						return this.node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.url), this.node.setAttribute("x", this.x), this.node.setAttribute("y", this.y), this.node.setAttribute("width", this.width), this.node.setAttribute("height", this.height), this
					},
					setUrl: function(a) {
						return this.url = "" === a ? null : a, this.update()
					},
					getUrl: function() {
						return this.url
					},
					setWidth: function(a) {
						return this.width = a, this.update()
					},
					getWidth: function() {
						return this.width
					},
					setHeight: function(a) {
						return this.height = a, this.update()
					},
					getHeight: function() {
						return this.height
					},
					setX: function(a) {
						return this.x = a, this.update()
					},
					getX: function() {
						return this.x
					},
					setY: function(a) {
						return this.y = a, this.update()
					},
					getY: function() {
						return this.y
					}
				})
			}
		}, _p[40] = {
			value: function() {
				return _p.r(11).createClass("Line", {
					base: _p.r(47),
					constructor: function(a, b, c, d) {
						this.callBase(), this.point1 = {
							x: a || 0,
							y: b || 0
						}, this.point2 = {
							x: c || 0,
							y: d || 0
						}, this.update()
					},
					setPoint1: function(a, b) {
						return this.point1.x = a, this.point1.y = b, this.update()
					},
					setPoint2: function(a, b) {
						return this.point2.x = a, this.point2.y = b, this.update()
					},
					getPoint1: function() {
						return {
							x: this.point1.x,
							y: this.point1.y
						}
					},
					getPoint2: function() {
						return {
							x: this.point2.x,
							y: this.point2.y
						}
					},
					update: function() {
						var a = this.getDrawer();
						return a.clear(), a.moveTo(this.point1.x, this.point1.y), a.lineTo(this.point2.x, this.point2.y), this
					}
				})
			}
		}, _p[41] = {
			value: function() {
				var a = "LinearGradientBrush",
					b = (_p.r(68), _p.r(36));
				return _p.r(11).createClass(a, {
					base: b,
					constructor: function(a) {
						this.callBase("linearGradient"), this.setStartPosition(0, 0), this.setEndPosition(1, 0), "function" == typeof a && a.call(this, this)
					},
					setStartPosition: function(a, b) {
						return this.node.setAttribute("x1", a), this.node.setAttribute("y1", b), this
					},
					setEndPosition: function(a, b) {
						return this.node.setAttribute("x2", a), this.node.setAttribute("y2", b), this
					},
					getStartPosition: function() {
						return {
							x: +this.node.getAttribute("x1"),
							y: +this.node.getAttribute("y1")
						}
					},
					getEndPosition: function() {
						return {
							x: +this.node.getAttribute("x2"),
							y: +this.node.getAttribute("y2")
						}
					}
				})
			}
		}, _p[42] = {
			value: function() {
				var a = _p.r(51),
					b = _p.r(11).createClass("Marker", {
						base: _p.r(59),
						mixins: [_p.r(62), _p.r(76)],
						constructor: function() {
							this.callBase("marker"), this.setOrient("auto")
						},
						setRef: function(a, b) {
							return 1 === arguments.length && (b = a.y, a = a.x), this.node.setAttribute("refX", a), this.node.setAttribute("refY", b), this
						},
						getRef: function() {
							return new a(+this.node.getAttribute("refX"), +this.node.getAttribute("refY"))
						},
						setWidth: function(a) {
							return this.node.setAttribute("markerWidth", this.width = a), this
						},
						setOrient: function(a) {
							return this.node.setAttribute("orient", this.orient = a), this
						},
						getOrient: function() {
							return this.orient
						},
						getWidth: function() {
							return +this.width
						},
						setHeight: function(a) {
							return this.node.setAttribute("markerHeight", this.height = a), this
						},
						getHeight: function() {
							return +this.height
						}
					}),
					c = _p.r(47);
				return _p.r(11).extendClass(c, {
					setMarker: function(a, b) {
						return b = b || "end", a ? this.node.setAttribute("marker-" + b, a.toString()) : this.node.removeAttribute("marker-" + b), this
					}
				}), b
			}
		}, _p[43] = {
			value: function() {
				var a = _p.r(11),
					b = _p.r(61),
					c = a.createClass("Mask", {
						base: b,
						mixins: [_p.r(62)],
						constructor: function() {
							this.callBase("mask")
						},
						mask: function(a) {
							return a.getNode().setAttribute("mask", "url(#" + this.getId() + ")"), this
						}
					});
				return a.extendClass(b, {
					maskWith: function(a) {
						return a.mask(this), this
					}
				}), c
			}
		}, _p[44] = {
			value: function() {
				function a(a, b) {
					return {
						a: b.a * a.a + b.c * a.b,
						b: b.b * a.a + b.d * a.b,
						c: b.a * a.c + b.c * a.d,
						d: b.b * a.c + b.d * a.d,
						e: b.a * a.e + b.c * a.f + b.e,
						f: b.b * a.e + b.d * a.f + b.f
					}
				}

				function b(a) {
					return a * Math.PI / 180
				}
				var c = _p.r(12),
					d = _p.r(25),
					e = /matrix\((.+)\)/i,
					f = _p.r(51),
					g = _p.r(11).createClass("Matrix", {
						constructor: function() {
							arguments.length ? this.setMatrix.apply(this, arguments) : this.setMatrix(1, 0, 0, 1, 0, 0)
						},
						translate: function(b, c) {
							return this.m = a(this.m, {
								a: 1,
								c: 0,
								e: b,
								b: 0,
								d: 1,
								f: c
							}), this
						},
						rotate: function(c) {
							var d = b(c),
								e = Math.sin(d),
								f = Math.cos(d);
							return this.m = a(this.m, {
								a: f,
								c: -e,
								e: 0,
								b: e,
								d: f,
								f: 0
							}), this
						},
						scale: function(b, c) {
							return void 0 === c && (c = b), this.m = a(this.m, {
								a: b,
								c: 0,
								e: 0,
								b: 0,
								d: c,
								f: 0
							}), this
						},
						skew: function(c, d) {
							void 0 === d && (d = c);
							var e = Math.tan(b(c)),
								f = Math.tan(b(d));
							return this.m = a(this.m, {
								a: 1,
								c: e,
								e: 0,
								b: f,
								d: 1,
								f: 0
							}), this
						},
						inverse: function() {
							var a, b, c, d, e, f, h, i = this.m,
								j = i.a,
								k = i.b,
								l = i.c,
								m = i.d,
								n = i.e,
								o = i.f;
							return a = j * m - k * l, b = m / a, c = -k / a, d = -l / a, e = j / a, f = (l * o - n * m) / a, h = (k * n - j * o) / a, new g(b, c, d, e, f, h)
						},
						setMatrix: function(a, b, d, e, f, g) {
							return this.m = 1 === arguments.length ? c.clone(arguments[0]) : {
								a: a,
								b: b,
								c: d,
								d: e,
								e: f,
								f: g
							}, this
						},
						getMatrix: function() {
							return c.clone(this.m)
						},
						getTranslate: function() {
							var a = this.m;
							return {
								x: a.e / a.a,
								y: a.f / a.d
							}
						},
						mergeMatrix: function(b) {
							return new g(a(this.m, b.m))
						},
						merge: function(a) {
							return this.mergeMatrix(a)
						},
						toString: function() {
							return this.valueOf().join(" ")
						},
						valueOf: function() {
							var a = this.m;
							return [a.a, a.b, a.c, a.d, a.e, a.f]
						},
						equals: function(a) {
							var b = this.m,
								c = a.m;
							return b.a == c.a && b.b == c.b && b.c == c.c && b.d == c.d && b.e == c.e && b.f == c.f
						},
						transformPoint: function() {
							return g.transformPoint.apply(null, [].slice.call(arguments).concat([this.m]))
						},
						transformBox: function(a) {
							return g.transformBox(a, this.m)
						}
					});
				return g.parse = function(a) {
					var b, c = parseFloat;
					if (a instanceof Array) return new g({
						a: a[0],
						b: a[1],
						c: a[2],
						d: a[3],
						e: a[4],
						f: a[5]
					});
					if (b = e.exec(a)) {
						var d = b[1].split(",");
						return 6 != d.length && (d = b[1].split(" ")), new g({
							a: c(d[0]),
							b: c(d[1]),
							c: c(d[2]),
							d: c(d[3]),
							e: c(d[4]),
							f: c(d[5])
						})
					}
					return new g
				}, g.transformPoint = function(a, b, c) {
					return 2 === arguments.length && (c = b, b = a.y, a = a.x), new f(c.a * a + c.c * b + c.e, c.b * a + c.d * b + c.f)
				}, g.transformBox = function(a, b) {
					for (var e, f, h = Number.MAX_VALUE, i = -Number.MAX_VALUE, j = Number.MAX_VALUE, k = -Number.MAX_VALUE, l = [
							[a.x, a.y],
							[a.x + a.width, a.y],
							[a.x, a.y + a.height],
							[a.x + a.width, a.y + a.height]
						], m = []; e = l.pop();) f = g.transformPoint(e[0], e[1], b), m.push(f), h = Math.min(h, f.x), i = Math.max(i, f.x), j = Math.min(j, f.y), k = Math.max(k, f.y);
					return a = new d({
						x: h,
						y: j,
						width: i - h,
						height: k - j
					}), c.extend(a, {
						closurePoints: m
					}), a
				}, g.getCTM = function(a, b) {
					var c = {
							a: 1,
							b: 0,
							c: 0,
							d: 1,
							e: 0,
							f: 0
						},
						d = a.shapeNode || a.node;
					switch (b = b || "parent") {
						case "screen":
							c = d.getScreenCTM();
							break;
						case "doc":
						case "paper":
							c = d.getCTM();
							break;
						case "view":
						case "top":
							a.getPaper() && (c = d.getTransformToElement(a.getPaper().shapeNode));
							break;
						case "parent":
							a.node.parentNode && (c = d.getTransformToElement(a.node.parentNode));
							break;
						default:
							b.node && (c = d.getTransformToElement(b.shapeNode || b.node))
					}
					return c ? new g(c.a, c.b, c.c, c.d, c.e, c.f) : new g
				}, g
			}
		}, _p[45] = {
			value: function() {
				var a = _p.r(65),
					b = _p.r(28),
					c = _p.r(12),
					d = _p.r(11).createClass("Palette", {
						constructor: function() {
							this.color = {}
						},
						get: function(c) {
							var d = this.color[c] || a.EXTEND_STANDARD[c] || a.COLOR_STANDARD[c] || "";
							return d ? new b(d) : null
						},
						getColorValue: function(b) {
							return this.color[b] || a.EXTEND_STANDARD[b] || a.COLOR_STANDARD[b] || ""
						},
						add: function(a, c) {
							return this.color[a] = "string" == typeof c ? new b(c).toRGBA() : c.toRGBA(), c
						},
						remove: function(a) {
							return this.color.hasOwnProperty(a) ? (delete this.color[a], !0) : !1
						}
					});
				return c.extend(d, {
					getColor: function(c) {
						var d = a.EXTEND_STANDARD[c] || a.COLOR_STANDARD[c];
						return d ? new b(d) : null
					},
					getColorValue: function(b) {
						return a.EXTEND_STANDARD[b] || a.COLOR_STANDARD[b] || ""
					},
					addColor: function(c, d) {
						return a.EXTEND_STANDARD[c] = "string" == typeof d ? new b(d).toRGBA() : d.toRGBA(), d
					},
					removeColor: function(b) {
						return a.EXTEND_STANDARD.hasOwnProperty(b) ? (delete a.EXTEND_STANDARD[b], !0) : !1
					}
				}), d
			}
		}, _p[46] = {
			value: function() {
				var a = _p.r(11),
					b = _p.r(12),
					c = _p.r(68),
					d = _p.r(29),
					e = _p.r(62),
					f = _p.r(76),
					g = _p.r(34),
					h = _p.r(67),
					i = _p.r(44),
					j = a.createClass("Paper", {
						mixins: [e, g, h, f],
						constructor: function(a) {
							this.callBase(), this.node = this.createSVGNode(), this.node.paper = this, this.node.appendChild(this.resourceNode = c.createNode("defs")), this.node.appendChild(this.shapeNode = c.createNode("g")), this.resources = new d, this.setWidth("100%").setHeight("100%"), a && this.renderTo(a), this.callMixin()
						},
						renderTo: function(a) {
							b.isString(a) && (a = document.getElementById(a)), this.container = a, a.appendChild(this.node)
						},
						createSVGNode: function() {
							var a = c.createNode("svg");
							return a.setAttribute("xmlns", "http://www.w3.org/2000/svg"), a.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), a
						},
						getNode: function() {
							return this.node
						},
						getContainer: function() {
							return this.container
						},
						getWidth: function() {
							return this.node.clientWidth
						},
						setWidth: function(a) {
							return this.node.setAttribute("width", a), this
						},
						getHeight: function() {
							return this.node.clientHeight
						},
						setHeight: function(a) {
							return this.node.setAttribute("height", a), this
						},
						setViewPort: function(a, b, c) {
							var d, e;
							1 == arguments.length && (d = arguments[0], a = d.center.x, b = d.center.y, c = d.zoom), c = c || 1, e = this.getViewBox();
							var f = new i,
								g = e.x + e.width / 2 - a,
								h = e.y + e.height / 2 - b;
							return f.translate(-a, -b), f.scale(c), f.translate(a, b), f.translate(g, h), this.shapeNode.setAttribute("transform", "matrix(" + f + ")"), this.viewport = {
								center: {
									x: a,
									y: b
								},
								offset: {
									x: g,
									y: h
								},
								zoom: c
							}, this
						},
						getViewPort: function() {
							if (!this.viewport) {
								var a = this.getViewBox();
								return {
									zoom: 1,
									center: {
										x: a.x + a.width / 2,
										y: a.y + a.height / 2
									},
									offset: {
										x: 0,
										y: 0
									}
								}
							}
							return this.viewport
						},
						getViewPortTransform: function() {
							var a = this.shapeNode.getCTM();
							return new i(a.a, a.b, a.c, a.d, a.e, a.f)
						},
						getTransform: function() {
							return this.getViewPortTransform().reverse()
						},
						addResource: function(a) {
							return this.resources.appendItem(a), a.node && this.resourceNode.appendChild(a.node), this
						},
						removeResource: function(a) {
							return a.remove && a.remove(), a.node && this.resourceNode.removeChild(a.node), this
						},
						getPaper: function() {
							return this
						}
					}),
					k = _p.r(61);
				return a.extendClass(k, {
					getPaper: function() {
						for (var a = this.container; a && a instanceof j == 0;) a = a.container;
						return a
					},
					isAttached: function() {
						return !!this.getPaper()
					},
					whenPaperReady: function(a) {
						function b() {
							var b = c.getPaper();
							return b && a && a.call(c, b), b
						}
						var c = this;
						return b() || this.on("add treeadd", function d() {
							b() && (c.off("add", d), c.off("treeadd", d))
						}), this
					}
				}), j
			}
		}, _p[47] = {
			value: function() {
				var a = _p.r(12),
					b = _p.r(11).createClass,
					c = _p.r(61),
					d = _p.r(68),
					e = _p.r(35),
					f = Array.prototype.slice,
					g = (a.flatten, b("PathDrawer", {
						constructor: function(a) {
							this.segment = [], this.path = a, this.__clear = !1
						},
						getPath: function() {
							return this.path
						},
						redraw: function() {
							return this._transation = this._transation || [], this.clear()
						},
						done: function() {
							var a = this._transation;
							return this._transation = null, this.push(a), this
						},
						clear: function() {
							return this._transation ? this._transation = [] : this.path.setPathData("M 0 0"), this._clear = !0, this
						},
						push: function() {
							var a, b = f.call(arguments);
							return this._transation ? (this._transation.push(b), this) : (this._clear ? (a = "", this._clear = !1) : a = this.path.getPathData(), a = a || "", this.path.setPathData(a + e.pathToString(b)), this)
						},
						moveTo: function() {
							return this.push("M", f.call(arguments))
						},
						moveBy: function() {
							return this.push("m", f.call(arguments))
						},
						lineTo: function() {
							return this.push("L", f.call(arguments))
						},
						lineBy: function() {
							return this.push("l", f.call(arguments))
						},
						arcTo: function() {
							return this.push("A", f.call(arguments))
						},
						arcBy: function() {
							return this.push("a", arguments)
						},
						carcTo: function(a) {
							return this.push("A", [a, a, 0].concat(f.call(arguments, 1)))
						},
						carcBy: function(a) {
							return this.push("a", [a, a, 0].concat(f.call(arguments, 1)))
						},
						bezierTo: function() {
							return this.push("C", f.call(arguments))
						},
						bezierBy: function() {
							return this.push("c", f.call(arguments))
						},
						close: function() {
							return this.push("z")
						}
					}));
				return b("Path", {
					base: c,
					constructor: function(a) {
						this.callBase("path"), a && this.setPathData(a), this.node.setAttribute("fill", d.defaults.fill), this.node.setAttribute("stroke", d.defaults.stroke)
					},
					setPathData: function(a) {
						return a = a || "M0,0", this.pathdata = e.pathToString(a), this.node.setAttribute("d", this.pathdata), this.trigger("shapeupdate", {
							type: "pathdata"
						}), this
					},
					getPathData: function() {
						return this.pathdata || ""
					},
					getDrawer: function() {
						return new g(this)
					},
					isClosed: function() {
						var a = this.getPathData();
						return !!~a.indexOf("z") || !!~a.indexOf("Z")
					}
				})
			}
		}, _p[48] = {
			value: function() {
				var a = _p.r(32),
					b = _p.r(62);
				return _p.r(68), _p.r(11).createClass("PatternBrush", {
					base: a,
					mixins: [b],
					constructor: function() {
						this.callBase("pattern"), this.node.setAttribute("patternUnits", "userSpaceOnUse")
					},
					setX: function(a) {
						return this.x = a, this.node.setAttribute("x", a), this
					},
					setY: function(a) {
						return this.y = a, this.node.setAttribute("y", a), this
					},
					setWidth: function(a) {
						return this.width = a, this.node.setAttribute("width", a), this
					},
					setHeight: function(a) {
						return this.height = a, this.node.setAttribute("height", a), this
					},
					getWidth: function() {
						return this.width
					},
					getHeight: function() {
						return this.height
					}
				})
			}
		}, _p[49] = {
			value: function() {
				var a = _p.r(28);
				return _p.r(11).createClass("Pen", {
					constructor: function(a, b) {
						this.brush = a, this.width = b || 1, this.linecap = null, this.linejoin = null, this.dashArray = null, this.opacity = 1
					},
					getBrush: function() {
						return this.brush
					},
					setBrush: function(a) {
						return this.brush = a, this
					},
					setColor: function(a) {
						return this.setBrush(a)
					},
					getColor: function() {
						return this.brush instanceof a ? this.brush : null
					},
					getWidth: function() {
						return this.width
					},
					setWidth: function(a) {
						return this.width = a, this
					},
					getOpacity: function() {
						return this.opacity
					},
					setOpacity: function(a) {
						this.opacity = a
					},
					getLineCap: function() {
						return this.linecap
					},
					setLineCap: function(a) {
						return this.linecap = a, this
					},
					getLineJoin: function() {
						return this.linejoin
					},
					setLineJoin: function(a) {
						return this.linejoin = a, this
					},
					getDashArray: function() {
						return this.dashArray
					},
					setDashArray: function(a) {
						return this.dashArray = a, this
					},
					stroke: function(a) {
						var b = a.node;
						b.setAttribute("stroke", this.brush.toString()), b.setAttribute("stroke-width", this.getWidth()), this.getOpacity() < 1 && b.setAttribute("stroke-opacity", this.getOpacity()), this.getLineCap() && b.setAttribute("stroke-linecap", this.getLineCap()), this.getLineJoin() && b.setAttribute("stroke-linejoin", this.getLineJoin()), this.getDashArray() && b.setAttribute("stroke-dasharray", this.getDashArray())
					}
				})
			}
		}, _p[50] = {
			value: function() {
				return _p.r(11).createClass({
					base: _p.r(69),
					constructor: function(a, b, c) {
						this.callBase([0, a], b, c)
					},
					getRadius: function() {
						return this.getSectionArray()[1]
					},
					setRadius: function(a) {
						this.setSectionArray([0, a])
					}
				})
			}
		}, _p[51] = {
			value: function() {
				var a = _p.r(11).createClass("Point", {
					constructor: function(a, b) {
						this.x = a || 0, this.y = b || 0
					},
					offset: function(b, c) {
						return 1 == arguments.length && (c = b.y, b = b.x), new a(this.x + b, this.y + c)
					},
					valueOf: function() {
						return [this.x, this.y]
					},
					toString: function() {
						return this.valueOf().join(" ")
					},
					spof: function() {
						return new a((0 | this.x) + .5, (0 | this.y) + .5)
					}
				});
				return a.fromPolar = function(b, c, d) {
					return "rad" != d && (c = c / 180 * Math.PI), new a(b * Math.cos(c), b * Math.sin(c))
				}, a.parse = function(b) {
					return b instanceof a ? b : "string" == typeof b ? a.parse(b.split(/\s*[\s,]\s*/)) : "0" in b && "1" in b ? new a(b[0], b[1]) : void 0
				}, a
			}
		}, _p[52] = {
			value: function() {
				return _p.r(11).createClass("PointContainer", {
					base: _p.r(29),
					constructor: function() {
						this.callBase()
					},
					addPoint: function() {
						return this.addItem.apply(this, arguments)
					},
					prependPoint: function() {
						return this.prependItem.apply(this, arguments)
					},
					appendPoint: function() {
						return this.appendItem.apply(this, arguments)
					},
					removePoint: function() {
						return this.removeItem.apply(this, arguments)
					},
					addPoints: function() {
						return this.addItems.apply(this, arguments)
					},
					setPoints: function() {
						return this.setItems.apply(this, arguments)
					},
					getPoint: function() {
						return this.getItem.apply(this, arguments)
					},
					getPoints: function() {
						return this.getItems.apply(this, arguments)
					},
					getFirstPoint: function() {
						return this.getFirstItem.apply(this, arguments)
					},
					getLastPoint: function() {
						return this.getLastItem.apply(this, arguments)
					}
				})
			}
		}, _p[53] = {
			value: function() {
				return _p.r(12), _p.r(11).createClass("Poly", {
					base: _p.r(47),
					mixins: [_p.r(52)],
					constructor: function(a, b) {
						this.callBase(), this.closeable = !!b, this.setPoints(a || []), this.changeable = !0, this.update()
					},
					onContainerChanged: function() {
						this.changeable && this.update()
					},
					update: function() {
						var a = this.getDrawer(),
							b = this.getPoints();
						if (a.clear(), !b.length) return this;
						a.moveTo(b[0]);
						for (var c, d = 1, e = b.length; e > d; d++) c = b[d], a.lineTo(c);
						return this.closeable && b.length > 2 && a.close(), this
					}
				})
			}
		}, _p[54] = {
			value: function() {
				return _p.r(11).createClass("Polygon", {
					base: _p.r(53),
					constructor: function(a) {
						this.callBase(a, !0)
					}
				})
			}
		}, _p[55] = {
			value: function() {
				return _p.r(11).createClass("Polyline", {
					base: _p.r(53),
					constructor: function(a) {
						this.callBase(a)
					}
				})
			}
		}, _p[56] = {
			value: function() {
				var a = _p.r(36);
				return _p.r(11).createClass("RadialGradientBrush", {
					base: a,
					constructor: function(a) {
						this.callBase("radialGradient"), this.setCenter(.5, .5), this.setFocal(.5, .5), this.setRadius(.5), "function" == typeof a && a.call(this, this)
					},
					setCenter: function(a, b) {
						return this.node.setAttribute("cx", a), this.node.setAttribute("cy", b), this
					},
					getCenter: function() {
						return {
							x: +this.node.getAttribute("cx"),
							y: +this.node.getAttribute("cy")
						}
					},
					setFocal: function(a, b) {
						return this.node.setAttribute("fx", a), this.node.setAttribute("fy", b), this
					},
					getFocal: function() {
						return {
							x: +this.node.getAttribute("fx"),
							y: +this.node.getAttribute("fy")
						}
					},
					setRadius: function(a) {
						return this.node.setAttribute("r", a), this
					},
					getRadius: function() {
						return +this.node.getAttribute("r")
					}
				})
			}
		}, _p[57] = {
			value: function() {
				var a = {},
					b = _p.r(12),
					c = _p.r(51),
					d = _p.r(25);
				b.extend(a, {
					formatRadius: function(a, b, c) {
						var d = Math.floor(Math.min(a / 2, b / 2));
						return Math.min(d, c)
					}
				});
				var e = _p.r(11).createClass("Rect", {
					base: _p.r(47),
					constructor: function(b, c, d, e, f) {
						this.callBase(), this.x = d || 0, this.y = e || 0, this.width = b || 0, this.height = c || 0, this.radius = a.formatRadius(this.width, this.height, f || 0), this.update()
					},
					update: function() {
						var a = this.x,
							b = this.y,
							c = this.width,
							d = this.height,
							e = this.radius,
							f = this.getDrawer().redraw();
						return e ? (c -= 2 * e, d -= 2 * e, f.push("M", a + e, b), f.push("h", c), f.push("a", e, e, 0, 0, 1, e, e), f.push("v", d), f.push("a", e, e, 0, 0, 1, -e, e), f.push("h", -c), f.push("a", e, e, 0, 0, 1, -e, -e), f.push("v", -d), f.push("a", e, e, 0, 0, 1, e, -e), f.push("z")) : (f.push("M", a, b), f.push("h", c), f.push("v", d), f.push("h", -c), f.push("z")), f.done(), this
					},
					setWidth: function(a) {
						return this.width = a, this.update()
					},
					setHeight: function(a) {
						return this.height = a, this.update()
					},
					setSize: function(a, b) {
						return this.width = a, this.height = b, this.update()
					},
					setBox: function(a) {
						return this.x = a.x, this.y = a.y, this.width = a.width, this.height = a.height, this.update()
					},
					getBox: function() {
						return new d(this.x, this.y, this.width, this.height)
					},
					getRadius: function() {
						return this.radius
					},
					setRadius: function(a) {
						return this.radius = a, this.update()
					},
					getPosition: function() {
						return new c(this.x, this.y)
					},
					setPosition: function(a, b) {
						if (1 == arguments.length) {
							var d = c.parse(arguments[0]);
							b = d.y, a = d.x
						}
						return this.x = a, this.y = b, this.update()
					},
					getWidth: function() {
						return this.width
					},
					getHeight: function() {
						return this.height
					},
					getPositionX: function() {
						return this.x
					},
					getPositionY: function() {
						return this.y
					},
					setPositionX: function(a) {
						return this.x = a, this.update()
					},
					setPositionY: function(a) {
						return this.y = a, this.update()
					}
				});
				return e
			}
		}, _p[58] = {
			value: function() {
				var a = _p.r(51);
				return _p.r(11).createClass("RegularPolygon", {
					base: _p.r(47),
					constructor: function(b, c, d, e) {
						this.callBase(), this.radius = c || 0, this.side = Math.max(b || 3, 3), arguments.length > 2 && 3 == arguments.length && (e = d.y, d = d.x), this.center = new a(d, e), this.draw()
					},
					getSide: function() {
						return this.side
					},
					setSide: function(a) {
						return this.side = a, this.draw()
					},
					getRadius: function() {
						return this.radius
					},
					setRadius: function(a) {
						return this.radius = a, this.draw()
					},
					draw: function() {
						var b, c = this.radius,
							d = this.side,
							e = 2 * Math.PI / d,
							f = this.getDrawer();
						for (f.clear(), f.moveTo(a.fromPolar(c, Math.PI / 2, "rad").offset(this.center)), b = 0; d >= b; b++) f.lineTo(a.fromPolar(c, e * b + Math.PI / 2, "rad").offset(this.center));
						return f.close(), this
					}
				})
			}
		}, _p[59] = {
			value: function() {
				var a = _p.r(68);
				return _p.r(11).createClass("Resource", {
					constructor: function(b) {
						this.callBase(), this.node = a.createNode(b)
					},
					toString: function() {
						return "url(#" + this.node.id + ")"
					}
				})
			}
		}, _p[60] = {
			value: function() {
				return _p.r(11).createClass({
					base: _p.r(69),
					constructor: function(a, b) {
						this.callBase([a, b], 360, 0)
					},
					getInnerRadius: function() {
						return this.getSectionArray()[0]
					},
					getOuterRadius: function() {
						return this.getSectionArray()[1]
					},
					setInnerRadius: function(a) {
						this.setSectionArray([a, this.getOuterRadius()])
					},
					setOuterRadius: function(a) {
						this.setSectionArray([this.getInnerRadius(), a])
					}
				})
			}
		}, _p[61] = {
			value: function() {
				var a = _p.r(68),
					b = _p.r(12),
					c = _p.r(34),
					d = _p.r(67),
					e = _p.r(31),
					f = _p.r(44),
					g = (_p.r(49), Array.prototype.slice),
					h = _p.r(25),
					i = _p.r(11).createClass("Shape", {
						mixins: [c, d, e],
						constructor: function(b) {
							this.node = a.createNode(b), this.node.shape = this, this.transform = {
								translate: null,
								rotate: null,
								scale: null,
								matrix: null
							}, this.callMixin()
						},
						getId: function() {
							return this.node.id
						},
						setId: function(a) {
							return this.node.id = a, this
						},
						getNode: function() {
							return this.node
						},
						getBoundaryBox: function() {
							var a;
							try {
								a = this.node.getBBox()
							} catch (b) {
								a = {
									x: this.node.clientLeft,
									y: this.node.clientTop,
									width: this.node.clientWidth,
									height: this.node.clientHeight
								}
							}
							return new h(a)
						},
						getRenderBox: function(a) {
							var b = this.getBoundaryBox(),
								c = this.getTransform(a);
							return c.transformBox(b)
						},
						getWidth: function() {
							return this.getRenderBox().width
						},
						getHeight: function() {
							return this.getRenderBox().height
						},
						getSize: function() {
							var a = this.getRenderBox();
							return delete a.x, delete a.y, a
						},
						setOpacity: function(a) {
							return this.node.setAttribute("opacity", a), this
						},
						getOpacity: function() {
							var a = this.node.getAttribute("opacity");
							return a ? +a : 1
						},
						setVisible: function(a) {
							return a ? this.node.removeAttribute("display") : this.node.setAttribute("display", "none"), this
						},
						getVisible: function() {
							this.node.getAttribute("display")
						},
						hasAncestor: function(a) {
							for (var b = this.container; b;) {
								if (b === a) return !0;
								b = b.container
							}
							return !1
						},
						getTransform: function(a) {
							return f.getCTM(this, a)
						},
						clearTransform: function() {
							return this.node.removeAttribute("transform"), this.transform = {
								translate: null,
								rotate: null,
								scale: null,
								matrix: null
							}, this.trigger("shapeupdate", {
								type: "transform"
							}), this
						},
						_applyTransform: function() {
							var a = this.transform,
								c = [];
							return a.translate && c.push(["translate(", a.translate, ")"]), a.rotate && c.push(["rotate(", a.rotate, ")"]), a.scale && c.push(["scale(", a.scale, ")"]), a.matrix && c.push(["matrix(", a.matrix, ")"]), this.node.setAttribute("transform", b.flatten(c).join(" ")), this
						},
						setMatrix: function(a) {
							return this.transform.matrix = a, this._applyTransform()
						},
						setTranslate: function(a) {
							return this.transform.translate = null !== a && g.call(arguments) || null, this._applyTransform()
						},
						setRotate: function(a) {
							return this.transform.rotate = null !== a && g.call(arguments) || null, this._applyTransform()
						},
						setScale: function(a) {
							return this.transform.scale = null !== a && g.call(arguments) || null, this._applyTransform()
						},
						translate: function(a, b) {
							var c = this.transform.matrix || new f;
							return void 0 === b && (b = 0), this.transform.matrix = c.translate(a, b), this._applyTransform()
						},
						rotate: function(a) {
							var b = this.transform.matrix || new f;
							return this.transform.matrix = b.rotate(a), this._applyTransform()
						},
						scale: function(a, b) {
							var c = this.transform.matrix || new f;
							return void 0 === b && (b = a), this.transform.matrix = c.scale(a, b), this._applyTransform()
						},
						skew: function(a, b) {
							var c = this.transform.matrix || new f;
							return void 0 === b && (b = a), this.transform.matrix = c.skew(a, b), this._applyTransform()
						},
						stroke: function(a, b) {
							return a && a.stroke ? a.stroke(this) : a ? (this.node.setAttribute("stroke", a.toString()), b && this.node.setAttribute("stroke-width", b)) : null === a && this.node.removeAttribute("stroe"), this
						},
						fill: function(a) {
							return a && this.node.setAttribute("fill", a.toString()), null === a && this.node.removeAttribute("fill"), this
						},
						setAttr: function(a, c) {
							var d = this;
							return b.isObject(a) && b.each(a, function(a, b) {
								d.setAttr(b, a)
							}), void 0 === c || null === c || "" === c ? this.node.removeAttribute(a) : this.node.setAttribute(a, c), this
						},
						getAttr: function(a) {
							return this.node.getAttribute(a)
						}
					});
				return i
			}
		}, _p[62] = {
			value: function() {
				var a = _p.r(29),
					b = _p.r(12),
					c = _p.r(11).createClass("ShapeContainer", {
						base: a,
						isShapeContainer: !0,
						handleAdd: function(a, b) {
							var c = this.getShapeNode();
							c.insertBefore(a.node, c.childNodes[b] || null), a.trigger("add", {
								container: this
							}), a.notifyTreeModification && a.notifyTreeModification("treeadd", this)
						},
						handleRemove: function(a) {
							var b = this.getShapeNode();
							b.removeChild(a.node), a.trigger("remove", {
								container: this
							}), a.notifyTreeModification && a.notifyTreeModification("treeremove", this)
						},
						notifyTreeModification: function(a, b) {
							this.eachItem(function(c, d) {
								d.notifyTreeModification && d.notifyTreeModification(a, b), d.trigger(a, {
									container: b
								})
							})
						},
						getShape: function(a) {
							return this.getItem(a)
						},
						addShape: function(a, b) {
							return this.addItem(a, b)
						},
						put: function(a) {
							return this.addShape(a), a
						},
						appendShape: function(a) {
							return this.addShape(a)
						},
						prependShape: function(a) {
							return this.addShape(a, 0)
						},
						replaceShape: function(a, b) {
							var c = this.indexOf(b);
							return -1 !== c ? (this.removeShape(c), this.addShape(a, c), this) : void 0
						},
						addShapeBefore: function(a, b) {
							var c = this.indexOf(b);
							return this.addShape(a, c)
						},
						addShapeAfter: function(a, b) {
							var c = this.indexOf(b);
							return this.addShape(a, -1 === c ? void 0 : c + 1)
						},
						addShapes: function(a) {
							return this.addItems(a)
						},
						removeShape: function(a) {
							return this.removeItem(a)
						},
						getShapes: function() {
							return this.getItems()
						},
						getShapesByType: function(a) {
							function c(e) {
								a.toLowerCase() == e.getType().toLowerCase() && d.push(e), e.isShapeContainer && b.each(e.getShapes(), function(a) {
									c(a)
								})
							}
							var d = [];
							return c(this), d
						},
						getShapeById: function(a) {
							return this.getShapeNode().getElementById(a).shape
						},
						arrangeShape: function(a, b) {
							return this.removeShape(a).addShape(a, b)
						},
						getShapeNode: function() {
							return this.shapeNode || this.node
						}
					}),
					d = _p.r(61);
				return _p.r(11).extendClass(d, {
					bringTo: function(a) {
						return this.container.arrangeShape(this, a), this
					},
					bringFront: function() {
						return this.bringTo(this.container.indexOf(this) + 1)
					},
					bringBack: function() {
						return this.bringTo(this.container.indexOf(this) - 1)
					},
					bringTop: function() {
						return this.container.removeShape(this).addShape(this), this
					},
					bringRear: function() {
						return this.bringTo(0)
					},
					bringRefer: function(a, b) {
						return a.container && (this.remove && this.remove(), a.container.addShape(this, a.container.indexOf(a) + (b || 0))), this
					},
					bringAbove: function(a) {
						return this.bringRefer(a)
					},
					bringBelow: function(a) {
						return this.bringRefer(a, 1)
					},
					replaceBy: function(a) {
						return this.container && (a.bringAbove(this), this.remove()), this
					}
				}), c
			}
		}, _p[63] = {
			value: function() {
				var a = _p.r(44),
					b = _p.r(12),
					c = _p.r(51);
				return _p.r(11).createClass("ShapeEvent", {
					constructor: function(a) {
						var c = null;
						b.isObject(a.target) ? b.extend(this, a) : (this.type = a.type, c = a.target, c.correspondingUseElement && (c = c.correspondingUseElement), this.originEvent = a, this.targetShape = c.shape || c.paper || a.currentTarget && (a.currentTarget.shape || a.currentTarget.paper), a._kityParam && b.extend(this, a._kityParam))
					},
					preventDefault: function() {
						var a = this.originEvent;
						return a ? a.preventDefault ? (a.preventDefault(), a.cancelable) : (a.returnValue = !1, !0) : !0
					},
					getPosition: function(b, d) {
						if (!this.originEvent) return null;
						var e = this.originEvent.touches ? this.originEvent.touches[d || 0] : this.originEvent,
							f = this.targetShape,
							g = f.shapeNode || f.node,
							h = new c(e && e.clientX || 0, e && e.clientY || 0),
							i = a.transformPoint(h, g.getScreenCTM().inverse()),
							j = a.getCTM(f, b || "view").transformPoint(i);
						return j
					},
					stopPropagation: function() {
						var a = this.originEvent;
						return a ? void(a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !1) : !0
					}
				})
			}
		}, _p[64] = {
			value: function() {
				return _p.r(11).createClass("ShapePoint", {
					base: _p.r(51),
					constructor: function(a, b) {
						this.callBase(a, b)
					},
					setX: function(a) {
						return this.setPoint(a, this.y)
					},
					setY: function(a) {
						return this.setPoint(this.x, a)
					},
					setPoint: function(a, b) {
						return this.x = a, this.y = b, this.update(), this
					},
					getPoint: function() {
						return this
					},
					update: function() {
						return this.container && this.container.update && this.container.update(), this
					}
				})
			}
		}, _p[65] = {
			value: {
				COLOR_STANDARD: {
					aliceblue: "#f0f8ff",
					antiquewhite: "#faebd7",
					aqua: "#00ffff",
					aquamarine: "#7fffd4",
					azure: "#f0ffff",
					beige: "#f5f5dc",
					bisque: "#ffe4c4",
					black: "#000000",
					blanchedalmond: "#ffebcd",
					blue: "#0000ff",
					blueviolet: "#8a2be2",
					brown: "#a52a2a",
					burlywood: "#deb887",
					cadetblue: "#5f9ea0",
					chartreuse: "#7fff00",
					chocolate: "#d2691e",
					coral: "#ff7f50",
					cornflowerblue: "#6495ed",
					cornsilk: "#fff8dc",
					crimson: "#dc143c",
					cyan: "#00ffff",
					darkblue: "#00008b",
					darkcyan: "#008b8b",
					darkgoldenrod: "#b8860b",
					darkgray: "#a9a9a9",
					darkgreen: "#006400",
					darkgrey: "#a9a9a9",
					darkkhaki: "#bdb76b",
					darkmagenta: "#8b008b",
					darkolivegreen: "#556b2f",
					darkorange: "#ff8c00",
					darkorchid: "#9932cc",
					darkred: "#8b0000",
					darksalmon: "#e9967a",
					darkseagreen: "#8fbc8f",
					darkslateblue: "#483d8b",
					darkslategray: "#2f4f4f",
					darkslategrey: "#2f4f4f",
					darkturquoise: "#00ced1",
					darkviolet: "#9400d3",
					deeppink: "#ff1493",
					deepskyblue: "#00bfff",
					dimgray: "#696969",
					dimgrey: "#696969",
					dodgerblue: "#1e90ff",
					firebrick: "#b22222",
					floralwhite: "#fffaf0",
					forestgreen: "#228b22",
					fuchsia: "#ff00ff",
					gainsboro: "#dcdcdc",
					ghostwhite: "#f8f8ff",
					gold: "#ffd700",
					goldenrod: "#daa520",
					gray: "#808080",
					green: "#008000",
					greenyellow: "#adff2f",
					grey: "#808080",
					honeydew: "#f0fff0",
					hotpink: "#ff69b4",
					indianred: "#cd5c5c",
					indigo: "#4b0082",
					ivory: "#fffff0",
					khaki: "#f0e68c",
					lavender: "#e6e6fa",
					lavenderblush: "#fff0f5",
					lawngreen: "#7cfc00",
					lemonchiffon: "#fffacd",
					lightblue: "#add8e6",
					lightcoral: "#f08080",
					lightcyan: "#e0ffff",
					lightgoldenrodyellow: "#fafad2",
					lightgray: "#d3d3d3",
					lightgreen: "#90ee90",
					lightgrey: "#d3d3d3",
					lightpink: "#ffb6c1",
					lightsalmon: "#ffa07a",
					lightseagreen: "#20b2aa",
					lightskyblue: "#87cefa",
					lightslategray: "#778899",
					lightslategrey: "#778899",
					lightsteelblue: "#b0c4de",
					lightyellow: "#ffffe0",
					lime: "#00ff00",
					limegreen: "#32cd32",
					linen: "#faf0e6",
					magenta: "#ff00ff",
					maroon: "#800000",
					mediumaquamarine: "#66cdaa",
					mediumblue: "#0000cd",
					mediumorchid: "#ba55d3",
					mediumpurple: "#9370db",
					mediumseagreen: "#3cb371",
					mediumslateblue: "#7b68ee",
					mediumspringgreen: "#00fa9a",
					mediumturquoise: "#48d1cc",
					mediumvioletred: "#c71585",
					midnightblue: "#191970",
					mintcream: "#f5fffa",
					mistyrose: "#ffe4e1",
					moccasin: "#ffe4b5",
					navajowhite: "#ffdead",
					navy: "#000080",
					oldlace: "#fdf5e6",
					olive: "#808000",
					olivedrab: "#6b8e23",
					orange: "#ffa500",
					orangered: "#ff4500",
					orchid: "#da70d6",
					palegoldenrod: "#eee8aa",
					palegreen: "#98fb98",
					paleturquoise: "#afeeee",
					palevioletred: "#db7093",
					papayawhip: "#ffefd5",
					peachpuff: "#ffdab9",
					peru: "#cd853f",
					pink: "#ffc0cb",
					plum: "#dda0dd",
					powderblue: "#b0e0e6",
					purple: "#800080",
					red: "#ff0000",
					rosybrown: "#bc8f8f",
					royalblue: "#4169e1",
					saddlebrown: "#8b4513",
					salmon: "#fa8072",
					sandybrown: "#f4a460",
					seagreen: "#2e8b57",
					seashell: "#fff5ee",
					sienna: "#a0522d",
					silver: "#c0c0c0",
					skyblue: "#87ceeb",
					slateblue: "#6a5acd",
					slategray: "#708090",
					slategrey: "#708090",
					snow: "#fffafa",
					springgreen: "#00ff7f",
					steelblue: "#4682b4",
					tan: "#d2b48c",
					teal: "#008080",
					thistle: "#d8bfd8",
					tomato: "#ff6347",
					turquoise: "#40e0d0",
					violet: "#ee82ee",
					wheat: "#f5deb3",
					white: "#ffffff",
					whitesmoke: "#f5f5f5",
					yellow: "#ffff00"
				},
				EXTEND_STANDARD: {}
			}
		}, _p[66] = {
			value: function() {
				var a = {
						3: .2,
						5: .38196601125,
						6: .57735026919,
						8: .541196100146,
						10: .726542528005,
						12: .707106781187
					},
					b = _p.r(51);
				return _p.r(11).createClass("Star", {
					base: _p.r(47),
					constructor: function(a, c, d, e, f) {
						this.callBase(), this.vertex = a || 3, this.radius = c || 0, this.shrink = d, this.offset = e || new b(0, 0), this.angleOffset = f || 0, this.draw()
					},
					getVertex: function() {
						return this.vertex
					},
					setVertex: function(a) {
						return this.vertex = a, this.draw()
					},
					getRadius: function() {
						return this.radius
					},
					setRadius: function(a) {
						return this.radius = a, this.draw()
					},
					getShrink: function() {
						return this.shrink
					},
					setShrink: function(a) {
						return this.shrink = a, this.draw()
					},
					getOffset: function() {
						return this.offset
					},
					setOffset: function(a) {
						return this.offset = a, this.draw()
					},
					getAngleOffset: function() {
						return this.angleOffset
					},
					setAngleOffset: function(a) {
						return this.angleOffset = a, this.draw()
					},
					draw: function() {
						var c, d, e = this.radius,
							f = this.radius * (this.shrink || a[this.vertex] || .5),
							g = this.vertex,
							h = this.offset,
							i = 90,
							j = 180 / g,
							k = this.angleOffset,
							l = this.getDrawer();
						for (l.clear(), l.moveTo(b.fromPolar(f, i)), c = 1; 2 * g >= c; c++) d = i + j * c, l.lineTo(c % 2 ? b.fromPolar(e, d + k).offset(h) : b.fromPolar(f, d));
						l.close()
					}
				})
			}
		}, _p[67] = {
			value: function() {
				function a(a) {
					return a.classList || (a.classList = new b(a)), a.classList
				}
				var b = _p.r(11).createClass("ClassList", {
					constructor: function(a) {
						this._node = a, this._list = a.className.toString().split(" ")
					},
					_update: function() {
						this._node.className = this._list.join(" ")
					},
					add: function(a) {
						this._list.push(a), this._update()
					},
					remove: function(a) {
						var b = this._list.indexOf(a);
						~b && this._list.splice(b, 1), this._update()
					},
					contains: function(a) {
						return !!~this._list.indexOf(a)
					}
				});
				return _p.r(11).createClass("Styled", {
					addClass: function(b) {
						return a(this.node).add(b), this
					},
					removeClass: function(b) {
						return a(this.node).remove(b), this
					},
					hasClass: function(b) {
						return a(this.node).contains(b)
					},
					setStyle: function(a) {
						if (2 == arguments.length) return this.node.style[arguments[0]] = arguments[1], this;
						for (var b in a) a.hasOwnProperty(b) && (this.node.style[b] = a[b]);
						return this
					}
				})
			}
		}, _p[68] = {
			value: function() {
				var a = document,
					b = 0,
					c = {
						createNode: function(d) {
							var e = a.createElementNS(c.ns, d);
							return e.id = "kity_" + d + "_" + b++, e
						},
						defaults: {
							stroke: "none",
							fill: "none"
						},
						xlink: "http://www.w3.org/1999/xlink",
						ns: "http://www.w3.org/2000/svg"
					};
				return c
			}
		}, _p[69] = {
			value: function() {
				var a = _p.r(51);
				return _p.r(11).createClass("Sweep", {
					base: _p.r(47),
					constructor: function(a, b, c) {
						this.callBase(), this.sectionArray = a || [], this.angle = b || 0, this.angleOffset = c || 0, this.draw()
					},
					getSectionArray: function() {
						return this.sectionArray
					},
					setSectionArray: function(a) {
						return this.sectionArray = a, this.draw()
					},
					getAngle: function() {
						return this.angle
					},
					setAngle: function(a) {
						return this.angle = a, this.draw()
					},
					getAngleOffset: function() {
						return this.angleOffset
					},
					setAngleOffset: function(a) {
						return this.angleOffset = a, this.draw()
					},
					draw: function() {
						var a, b = this.sectionArray;
						for (a = 0; a < b.length; a += 2) this.drawSection(b[a], b[a + 1]);
						return this
					},
					drawSection: function(b, c) {
						var d = this.angle && (this.angle % 360 ? this.angle % 360 : 360),
							e = this.angleOffset,
							f = e + d / 2,
							g = e + d,
							h = this.getDrawer();
						return h.redraw(), 0 === d ? void h.done() : (h.moveTo(a.fromPolar(b, e)), h.lineTo(a.fromPolar(c, e)), c && (h.carcTo(c, 0, 1, a.fromPolar(c, f)), h.carcTo(c, 0, 1, a.fromPolar(c, g))), h.lineTo(a.fromPolar(b, g)), b && (h.carcTo(b, 0, 1, a.fromPolar(b, f)), h.carcTo(b, 0, 1, a.fromPolar(b, e))), h.close(), void h.done())
					}
				})
			}
		}, _p[70] = {
			value: function() {
				function a(a) {
					var b = a._cachedFontHash;
					if (f[b]) return f[b];
					var c = a.getContent();
					a.setContent("test");
					var d = a.getBoundaryBox(),
						e = a.getY() + +a.node.getAttribute("dy"),
						g = e - d.y,
						h = g - d.height;
					return a.setContent(c), f[b] = {
						top: g,
						bottom: h,
						middle: (g + h) / 2
					}
				}
				var b = _p.r(71),
					c = _p.r(62),
					d = _p.r(68),
					e = _p.r(12),
					f = {};
				return _p.r(11).createClass("Text", {
					base: b,
					mixins: [c],
					constructor: function(a) {
						this.callBase("text"), void 0 !== a && this.setContent(a), this._buildFontHash()
					},
					_buildFontHash: function() {
						var a = window.getComputedStyle(this.node);
						this._cachedFontHash = [a.fontFamily, a.fontSize, a.fontStretch, a.fontStyle, a.fontVariant, a.fontWeight].join("-")
					},
					_fontChanged: function(a) {
						var b = this._lastFont,
							c = e.extend({}, b, a);
						if (!b) return b = a, !0;
						var d = b.family != c.family || b.size != c.size || b.style != c.style || b.weight != c.weight;
						return b = c, d
					},
					setX: function(a) {
						return this.node.setAttribute("x", a), this
					},
					setPosition: function(a, b) {
						return this.setX(a).setY(b)
					},
					setY: function(a) {
						return this.node.setAttribute("y", a), this
					},
					getX: function() {
						return +this.node.getAttribute("x") || 0
					},
					getY: function() {
						return +this.node.getAttribute("y") || 0
					},
					setFont: function(a) {
						return this.callBase(a), this._fontChanged(a) && (this._buildFontHash(), this.setVerticalAlign(this.getVerticalAlign())), this
					},
					setTextAnchor: function(a) {
						return this.node.setAttribute("text-anchor", a), this
					},
					getTextAnchor: function() {
						return this.node.getAttribute("text-anchor") || "start"
					},
					setVerticalAlign: function(b) {
						return this.whenPaperReady(function() {
							var c;
							switch (b) {
								case "top":
									c = a(this).top;
									break;
								case "bottom":
									c = a(this).bottom;
									break;
								case "middle":
									c = a(this).middle;
									break;
								default:
									c = 0
							}
							this.node.setAttribute("dy", c)
						}), this.verticalAlign = b, this
					},
					getVerticalAlign: function() {
						return this.verticalAlign || "baseline"
					},
					setStartOffset: function(a) {
						this.shapeNode != this.node && this.shapeNode.setAttribute("startOffset", 100 * a + "%")
					},
					addSpan: function(a) {
						return this.addShape(a), this
					},
					setPath: function(a) {
						var b = this.shapeNode;
						if (this.shapeNode == this.node) {
							for (b = this.shapeNode = d.createNode("textPath"); this.node.firstChild;) this.shapeNode.appendChild(this.node.firstChild);
							this.node.appendChild(b)
						}
						return b.setAttributeNS(d.xlink, "xlink:href", "#" + a.node.id), this.setTextAnchor(this.getTextAnchor()), this
					}
				})
			}
		}, _p[71] = {
			value: function() {
				var a = _p.r(61);
				return _p.r(11).createClass("TextContent", {
					base: a,
					constructor: function(a) {
						this.callBase(a), this.shapeNode = this.shapeNode || this.node, this.shapeNode.setAttribute("text-rendering", "geometricPrecision")
					},
					clearContent: function() {
						for (; this.shapeNode.firstChild;) this.shapeNode.removeChild(this.shapeNode.firstChild);
						return this
					},
					setContent: function(a) {
						return this.shapeNode.textContent = a, this
					},
					getContent: function() {
						return this.shapeNode.textContent
					},
					appendContent: function(a) {
						return this.shapeNode.textContent += a, this
					},
					setSize: function(a) {
						return this.setFontSize(a)
					},
					setFontSize: function(a) {
						return this.setFont({
							size: a
						})
					},
					setFontFamily: function(a) {
						return this.setFont({
							family: a
						})
					},
					setFontBold: function(a) {
						return this.setFont({
							weight: a ? "bold" : "normal"
						})
					},
					setFontItalic: function(a) {
						return this.setFont({
							style: a ? "italic" : "normal"
						})
					},
					setFont: function(a) {
						var b = this.node;
						return ["family", "size", "weight", "style"].forEach(function(c) {
							null === a[c] ? b.removeAttribute("font-" + c) : a[c] && b.setAttribute("font-" + c, a[c])
						}), this
					},
					getExtentOfChar: function(a) {
						return this.node.getExtentOfChar(a)
					},
					getRotationOfChar: function(a) {
						return this.node.getRotationOfChar(a)
					},
					getCharNumAtPosition: function(a, b) {
						return this.node.getCharNumAtPosition(this.node.viewportElement.createSVGPoint(a, b))
					}
				})
			}
		}, _p[72] = {
			value: function() {
				var a = _p.r(71),
					b = _p.r(67);
				return _p.r(11).createClass("TextSpan", {
					base: a,
					mixins: [b],
					constructor: function(a) {
						this.callBase("tspan"), this.setContent(a)
					}
				})
			}
		}, _p[73] = {
			value: function() {
				var a = _p.r(68),
					b = _p.r(11),
					c = b.createClass("Use", {
						base: _p.r(61),
						constructor: function(a) {
							this.callBase("use"), this.ref(a)
						},
						ref: function(b) {
							if (!b) return this.node.removeAttributeNS(a.xlink, "xlink:href"), this;
							var c = b.getId();
							return c && this.node.setAttributeNS(a.xlink, "xlink:href", "#" + c), "none" === b.node.getAttribute("fill") && b.node.removeAttribute("fill"), "none" === b.node.getAttribute("stroke") && b.node.removeAttribute("stroke"), this
						}
					}),
					d = _p.r(61);
				return b.extendClass(d, {
					use: function() {
						return new c(this)
					}
				}), c
			}
		}, _p[74] = {
			value: function() {
				var a = _p.r(51),
					b = _p.r(44),
					c = _p.r(11).createClass("Vector", {
						base: a,
						constructor: function(a, b) {
							this.callBase(a, b)
						},
						square: function() {
							return this.x * this.x + this.y * this.y
						},
						length: function() {
							return Math.sqrt(this.square())
						},
						add: function(a) {
							return new c(this.x + a.x, this.y + a.y)
						},
						minus: function(a) {
							return new c(this.x - a.x, this.y - a.y)
						},
						dot: function(a) {
							return this.x * a.x + this.y * a.y
						},
						project: function(a) {
							return a.multipy(this.dot(a) / a.square())
						},
						normalize: function(a) {
							return void 0 === a && (a = 1), this.multipy(a / this.length())
						},
						multipy: function(a) {
							return new c(this.x * a, this.y * a)
						},
						rotate: function(a, d) {
							"rad" == d && (a = a / Math.PI * 180);
							var e = (new b).rotate(a).transformPoint(this);
							return new c(e.x, e.y)
						},
						vertical: function() {
							return new c(this.y, -this.x)
						},
						reverse: function() {
							return this.multipy(-1)
						},
						getAngle: function() {
							var a = this.length();
							if (0 === a) return 0;
							var b = Math.acos(this.x / a),
								c = this.y > 0 ? 1 : -1;
							return 180 * c * b / Math.PI
						}
					});
				return c.fromPoints = function(a, b) {
					return new c(b.x - a.x, b.y - a.y)
				}, _p.r(11).extendClass(a, {
					asVector: function() {
						return new c(this.x, this.y)
					}
				}), c
			}
		}, _p[75] = {
			value: function() {
				var a = _p.r(62),
					b = _p.r(76);
				return _p.r(11).createClass("View", {
					mixins: [a, b],
					base: _p.r(75),
					constructor: function() {
						this.callBase("view")
					}
				})
			}
		}, _p[76] = {
			value: function() {
				return _p.r(11).createClass("ViewBox", {
					getViewBox: function() {
						var a = this.node.getAttribute("viewBox");
						return null === a ? {
							x: 0,
							y: 0,
							width: this.node.clientWidth || this.node.parentNode.clientWidth,
							height: this.node.clientHeight || this.node.parentNode.clientHeight
						} : (a = a.split(" "), {
							x: +a[0],
							y: +a[1],
							width: +a[2],
							height: +a[3]
						})
					},
					setViewBox: function(a, b, c, d) {
						return this.node.setAttribute("viewBox", [a, b, c, d].join(" ")), this
					}
				})
			}
		}, _p[77] = {
			value: function() {
				var a = {},
					b = _p.r(12);
				return a.version = "2.0.0", b.extend(a, {
					createClass: _p.r(11).createClass,
					extendClass: _p.r(11).extendClass,
					Utils: b,
					Browser: _p.r(10),
					Box: _p.r(25),
					Bezier: _p.r(23),
					BezierPoint: _p.r(24),
					Circle: _p.r(26),
					Clip: _p.r(27),
					Color: _p.r(28),
					Container: _p.r(29),
					Curve: _p.r(30),
					Ellipse: _p.r(33),
					GradientBrush: _p.r(36),
					Group: _p.r(37),
					HyperLink: _p.r(38),
					Image: _p.r(39),
					Line: _p.r(40),
					LinearGradientBrush: _p.r(41),
					Mask: _p.r(43),
					Matrix: _p.r(44),
					Marker: _p.r(42),
					Palette: _p.r(45),
					Paper: _p.r(46),
					Path: _p.r(47),
					PatternBrush: _p.r(48),
					Pen: _p.r(49),
					Point: _p.r(51),
					PointContainer: _p.r(52),
					Polygon: _p.r(54),
					Polyline: _p.r(55),
					Pie: _p.r(50),
					RadialGradientBrush: _p.r(56),
					Rect: _p.r(57),
					RegularPolygon: _p.r(58),
					Ring: _p.r(60),
					Shape: _p.r(61),
					ShapePoint: _p.r(64),
					ShapeContainer: _p.r(62),
					Sweep: _p.r(69),
					Star: _p.r(66),
					Text: _p.r(70),
					TextSpan: _p.r(72),
					Use: _p.r(73),
					Vector: _p.r(74),
					g: _p.r(35),
					Animator: _p.r(0),
					Easing: _p.r(1),
					OpacityAnimator: _p.r(4),
					RotateAnimator: _p.r(6),
					ScaleAnimator: _p.r(7),
					Timeline: _p.r(8),
					TranslateAnimator: _p.r(9),
					PathAnimator: _p.r(5),
					MotionAnimator: _p.r(3),
					requestFrame: _p.r(2).requestFrame,
					releaseFrame: _p.r(2).releaseFrame,
					Filter: _p.r(20),
					GaussianblurFilter: _p.r(21),
					ProjectionFilter: _p.r(22),
					ColorMatrixEffect: _p.r(13),
					CompositeEffect: _p.r(14),
					ConvolveMatrixEffect: _p.r(15),
					Effect: _p.r(16),
					GaussianblurEffect: _p.r(17),
					OffsetEffect: _p.r(18)
				}), window.kity = a
			}
		};
		var moduleMapping = {
			kity: 77
		};
		use("kity")
	}(),
	function(kity, window) {
		function getCamelName(a) {
			return a.replace(/_(\w)/gi, function(a) {
				return a[1].toUpperCase()
			})
		}
		var exports = exports || window,
			kc = {};
		kc.version = "1.0.1", kc.fx = !0, exports.kc = kc;
		var Ruler = kc.Ruler = kity.createClass("Ruler", {
			constructor: function(a, b) {
				this.ref_grid = [], this.map_grid = [], this.ref(a, b), this.map(a, b)
			},
			ref: function(a, b) {
				return arguments.length ? (this._ref = {
					from: +a,
					to: +b,
					dur: +b - +a
				}, this) : this._ref
			},
			map: function(a, b) {
				return arguments.length ? (this._map = {
					from: +a,
					to: +b,
					dur: +b - +a
				}, this) : this._map
			},
			reverse: function() {
				var a = this._ref,
					b = this._map;
				return new Ruler(b.from, b.to).map(a.from, a.to)
			},
			measure: function(a) {
				if (0 === this._ref.dur) return 0;
				var b = this._ref,
					c = this._map;
				return c.from + (a - b.from) / b.dur * c.dur
			},
			grid: function(a, b, c) {
				var d, e = this._ref,
					f = (this._map, []),
					g = [];
				if (kity.Utils.isArray(a)) f = a;
				else
					for (d = a; d < e.to + b; d += b) f.push(d);
				this.ref_grid = f, c && this.ref(f[0], f[f.length - 1]);
				for (var h = 0; h < f.length; h++) g.push(this.measure(f[h]));
				return this.map_grid = g, {
					ref: f,
					map: g
				}
			},
			gridBySize: function(a) {
				var b = this._ref,
					c = kc.sugar.snap(b.from, a, "right");
				return this.grid(c, a)
			},
			fagm: function(a) {
				var b = this._ref.dur,
					c = b / a,
					d = 1,
					e = 0;
				if (0 == b) return 1;
				for (; c > 10;) c /= 10, d *= 10, e = 1;
				for (; 1 > c;) c *= 10, d /= 10, e = 0;
				switch (Math.floor(c)) {
					case 1:
						c = 1;
						break;
					case 2:
					case 3:
						c = 2;
						break;
					case 4:
					case 5:
					case 6:
						c = 5;
						break;
					case 7:
					case 8:
					case 9:
						c = 1, d *= 10
				}
				return c * d
			},
			align: function(a, b, c) {
				var d = a > 0 ? a - a % b : a - a % b - b,
					e = d + b;
				return "left" == c ? d : "right" == c ? e : e - a > a - d ? d : e
			},
			gridByCount: function(a, b, c, d) {
				b = b || this.fagm(a);
				var e = this._ref;
				d = kity.Utils.isNumber(d) ? d : this.align(e.from, b, "left");
				var f = b;
				return this.grid(d, f, c)
			},
			gridByArray: function(a) {
				return this.grid(a, null, !0)
			},
			gridByCategories: function(a) {
				var b, c = [],
					d = [];
				for (b = 0; a > b; b++) c.push(b);
				for (this.ref_grid = c, b = 0; b < c.length; b++) d.push(this.measure(c[b]));
				return this.map_grid = d, {
					ref: c,
					map: d
				}
			},
			checkOverflow: function(a) {
				return a < this._ref.from ? -1 : a > this._ref.to ? 1 : 0
			},
			leanTo: function(a, b) {
				var c = "map" == b ? this.map_grid : this.ref_grid;
				if (!c || 0 === c.length) return null;
				if (1 == c.length) return {
					value: c[0],
					index: 0
				};
				var d = c[0];
				if (d > a) return {
					value: d,
					index: 0
				};
				var e = c[c.length - 1];
				if (a > e) return {
					value: e,
					index: c.length - 1
				};
				var f = c[1] - c[0],
					g = this.align(a, f),
					h = Math.round(g / f);
				return {
					value: g,
					index: h
				}
			}
		});
		Ruler.from = function(a) {
			return {
				to: function(b) {
					return new Ruler(a, b)
				}
			}
		}, kc.sharpen = function(a) {
			return "number" == typeof a ? (0 | a) + .5 : "x" in a && "y" in a ? {
				x: (0 | a.x) + .5,
				y: (0 | a.y) + .5
			} : void 0
		};
		var ChartEvent = kc.ChartEvent = kity.createClass("ChartEvent", {
				constructor: function(a, b) {
					b && (this.kityEvent = b), this.target = a
				},
				getTargetChartElement: function() {
					for (var a = this.kityEvent.targetShape; a && !a.host;) a = a.container;
					return a.host
				}
			}),
			EventHandler = kc.EventHandler = kity.createClass("EventHandler", function() {
				function a(a, b) {
					return function(c) {
						a.call(b, new kc.ChartEvent(b, c))
					}
				}
				var b = "click dblclick mousedown contextmenu mouseup mouseout mouseover mouseenter mouseleave mousemove mousewheel touchstart touchmove touchend".split(" ");
				return {
					constructor: function() {
						this._initEvents()
					},
					on: function(c, d) {
						for (var e = this._eventCallbacks, f = c.split(" "), g = 0; g < f.length; g++) {
							var h = e[f[g]];
							h || (e[f[g]] = []), ~b.indexOf(f[g]) && this.canvas ? this.canvas.on(f[g], a(d, this)) : e[f[g]].push(d)
						}
					},
					off: function() {},
					trigger: function(a, c) {
						~b.indexOf(a) && this.canvas ? this.canvas.fire(a, c) : this._fire(a, c)
					},
					_fire: function(a, b) {
						var c, d = this;
						"string" == typeof a ? (c = new kc.ChartEvent(d), c.name = a) : c = a, c.data = b;
						var e = d._eventCallbacks[c.name];
						if (!e) return !1;
						for (var f = 0; f < e.length; f++) e[f].call(d, c)
					},
					_initEvents: function() {
						this._eventCallbacks = {}
					},
					_resetEvents: function() {
						this._bindEvents()
					}
				}
			}()),
			Data = kc.Data = kity.createClass("Data", {
				mixins: [kc.EventHandler],
				constructor: function(a) {
					this.origin = a || {}, this.callMixin()
				},
				format: function() {
					return this.origin
				},
				update: function(a) {
					this.origin = kity.Utils.extend(this.origin, a), this.trigger("update")
				},
				clear: function() {
					this.origin = {}, this.trigger("update")
				},
				reset: function(a) {
					this.origin = a
				}
			}),
			elementUUID = 0,
			ChartElement = kc.ChartElement = kity.createClass("ChartElement", {
				mixins: [kc.EventHandler],
				constructor: function(a) {
					this.canvas = new kity.Group, this.canvas.host = this, this.visible = !0, this.param = a || {}, this._bindData(), this.elements = {}, this.callMixin()
				},
				addElement: function(a, b) {
					return 1 === arguments.length && (b = a, a = "ChartElement_" + elementUUID++), this.elements[a] = b, this.canvas.addShape(b.canvas), b.container = this, b
				},
				getElement: function(a) {
					return this.elements[a] || null
				},
				removeElement: function(a) {
					var b = this.elements[a];
					if (b) delete b.container, this.canvas.removeShape(b.canvas), delete this.elements[a];
					else if (void 0 === a)
						for (var c in this.elements) b = this.elements[c], delete b.container, this.canvas.removeShape(b.canvas), delete this.elements[c]
				},
				setVisible: function(a) {
					return void 0 !== a && (this.visible = a, this.canvas.setStyle({
						display: a ? "inline" : "none"
					})), this
				},
				isVisible: function() {
					return this.visible
				},
				setPosition: function(a, b) {
					"object" == typeof a && "x" in a && "y" in a && (b = a.y || 0, a = a.x || 0), a = a || 0, b = b || 0;
					var c = a - (this.x || 0),
						d = b - (this.y || 0);
					this.x = a, this.y = b, this.canvas.translate(c, d)
				},
				setOpacity: function(a) {
					this.canvas.setOpacity(a)
				},
				getPosition: function() {
					return {
						x: this.param.x || 0,
						y: this.param.y || 0
					}
				},
				getInterestPoint: function() {
					return this.getPosition()
				},
				registerUpdateRules: function() {
					return {
						setPosition: ["x", "y"],
						setVisible: ["visible"],
						setOpacity: ["opacity"]
					}
				},
				updateByRule: function(a, b, c, d, e) {
					var f, g, h, i;
					for (g = this.param, h = 0; h < b.length; h++)
						if (i = b[h], i in c && (!this._firstUpdate || g[i] !== c[i])) {
							f = !0;
							break
						}
					if (f) {
						var j = b.map(function(a) {
							return a in c ? c[a] : g[a]
						});
						j = j.concat([d, e]), this[a].apply(this, j)
					}
				},
				update: function(a, b, c) {
					var d, e, f, g;
					this._bindData(), this._updateRules || (this._updateRules = this.registerUpdateRules(), a = kity.Utils.extend(this.param, a)), e = this._updateRules, a || (a = this.param), g = [];
					for (f in e) this.updateByRule(f, e[f], a, b, c), g = g.concat(e[f]);
					a && a != this.param && kity.Utils.extend(this.param, a);
					for (d in a) !~g.indexOf(d) && this.elements[d] && this.elements[d].update(a[d]);
					return this._firstUpdate = this._firstUpdate || +new Date, this.trigger("update"), this
				},
				getBoundaryBox: function() {
					return this.canvas.getBoundaryBox()
				},
				getSize: function() {
					var a = this.getBoundaryBox();
					return {
						width: a.width,
						height: a.height
					}
				},
				flipX: function() {
					this.canvas.scale(-1, 1)
				},
				flipY: function() {
					this.canvas.scale(1, -1)
				},
				getParam: function(a) {
					return this.param[a]
				},
				setParam: function(a, b) {
					this.param[a] = b
				},
				setOpacity: function(a) {
					this.canvas.setOpacity(a)
				},
				_bindData: function() {
					void 0 !== this.param.bind && (this.canvas.bind = this.param.bind)
				},
				setBindData: function(a) {
					this.canvas.bind = a
				},
				getBindData: function() {
					return this.canvas.bind
				},
				getPaper: function() {
					for (var a = this.canvas; a && a.container && (a = a.container, !(a instanceof kity.Paper)););
					return a
				}
			});
		! function(a, b) {
			a.AnimatedChartElement = b.createClass("AnimatedChartElement", {
				base: a.ChartElement,
				getAnimatedParam: function() {
					throw new Error("请实现接口: getAnimatedParam()")
				},
				fxEnabled: function() {
					return a.fx && "off" != this.param.fx
				},
				stop: function() {
					return this.timeline && this.timeline.stop(), this
				},
				animate: function(a, c, d, e) {
					if (!this.fxEnabled()) return this.update(a);
					var f, g = this.getAnimatedParam(),
						h = this.param,
						i = b.Utils.copy(h),
						j = {},
						k = {},
						l = {};
					g.push("x"), g.push("y"), g.push("opacity");
					for (var m in a) m in h && ~g.indexOf(m) ? (j[m] = h[m], k[m] = a[m]) : l[m] = a[m];
					return this.update(l), f = new b.Animator({
						beginValue: j,
						finishValue: k,
						setter: function(a, b, c) {
							var d = c.getValueProportion();
							d > 1 && (d = 1), a.update(b, i, d)
						}
					}), this.timeline && this.timeline.stop(), this.timeline = f.start(this, c || this.param.fxTiming || this.fxTiming || 500, d || this.param.fxEasing || this.fxEasing || "ease", e), this
				}
			})
		}(kc, kity);
		var Chart = kc.Chart = kity.createClass("Chart", {
				base: kc.AnimatedChartElement,
				constructor: function(a, b) {
					this.callBase(b), this.setData({}), "string" == typeof a && (a = document.getElementById(a)), a.setAttribute("onselectstart", "return false"), this.paper = new kity.Paper(a), this.paper.addShape(this.canvas), this.container = a, a.paper = this.paper
				},
				getWidth: function() {
					return this.paper.getContainer().clientWidth
				},
				getHeight: function() {
					return this.paper.getContainer().clientHeight
				},
				setData: function(a) {
					this._dataBind && this.data.off("update", this._dataBind), this.data = a instanceof kc.Data ? a : new kc.Data(a), this.data.on("update", this._dataBind = function() {
						this.update()
					}.bind(this))
				},
				getData: function() {
					return this.data
				},
				update: function(a) {
					var b = this.data.format();
					this.callBase(a, b), this.updateChart && this.updateChart(this.param, b)
				}
			}),
			ConfigHandler = kc.ConfigHandler = kity.createClass("ConfigHandler", {
				constructor: function() {},
				getConfig: function() {
					return this.config
				},
				getOption: function(a) {
					return kity.Utils.queryPath(a, this.config)
				},
				setConfig: function(a) {
					this.config = a
				},
				setOption: function(path, value) {
					function getPath(a, b) {
						for (var c = [], d = 0; a >= d; d++) c.push(b[d]);
						return c.join(".")
					}
					if (path.indexOf("series") >= 0) return void console.log("该接口不支持设置series");
					var arr = path.split(".");
					arr.unshift("config");
					for (var i = 1, p, cur, exp; i < arr.length;) cur = arr[i], p = getPath(i - 1, arr), eval('"' + cur + '" in this.' + p) ? i == arr.length - 1 && (exp = "this." + p + "." + cur + " = value", eval(exp)) : (exp = "this." + p + "." + cur + " = " + (i == arr.length - 1 ? "value" : "{}"), eval(exp)), i++
				}
			}),
			Pie = kity.Pie = kity.createClass("Pie", {
				base: kity.Path,
				constructor: function(a, b, c, d) {
					this.callBase(), this.outerRadius = a || 100, this.pieAngle = b || 90, this.startAngle = c || 0, this.innerRadius = d || 0, this.draw()
				},
				draw: function() {
					var a = this.getDrawer().clear(),
						b = this.innerRadius,
						c = this.outerRadius,
						d = this.startAngle,
						e = this.pieAngle;
					e > 0 && e % 360 === 0 && (e = 359.99), 0 > e && e % 360 === 0 && (e = -359.99);
					var f = kity.Point.fromPolar(b, d),
						g = kity.Point.fromPolar(c, d),
						h = kity.Point.fromPolar(c, d + e % 360),
						i = kity.Point.fromPolar(b, d + e % 360),
						j = Math.abs(e) > 180 ? 1 : 0,
						k = e > 0 ? 1 : 0;
					a.moveTo(f.x, f.y), a.lineTo(g.x, g.y), a.carcTo(c, j, k, h.x, h.y), a.lineTo(i.x, i.y), a.carcTo(b, j, k ? 0 : 1, f.x, f.y), a.close()
				}
			}),
			Line = kc.Line = kity.createClass("Line", {
				base: kc.AnimatedChartElement,
				constructor: function(a) {
					this.callBase(kity.Utils.extend({
						x1: 0,
						y1: 0,
						x2: 100,
						y2: 0,
						bound: null,
						width: 1,
						color: "black",
						dash: null
					}, a)), this.line = new kity.Path, this.canvas.addShape(this.line)
				},
				getAnimatedParam: function() {
					return ["x1", "y1", "x2", "y2", "width"]
				},
				registerUpdateRules: function() {
					return kity.Utils.extend(this.callBase(), {
						draw: ["x1", "y1", "x2", "y2", "bound"],
						stroke: ["color", "width", "dash"]
					})
				},
				draw: function(a, b, c, d, e) {
					var f = this.line.getDrawer(),
						g = kc.sharpen;
					e && (e = this.boundTo(a, b, c, d, e)), e = e || [
						[a, b],
						[c, d]
					], f.clear(), f.moveTo(g(e[0][0]), g(e[0][1])), f.lineTo(g(e[1][0]), g(e[1][1]))
				},
				stroke: function(a, b, c) {
					var d = new kity.Pen;
					d.setWidth(b), d.setColor(a), c && d.setDashArray(c), this.line.stroke(d)
				},
				boundTo: function(a, b, c, d, e) {
					function f(a, b, c) {
						return a >= b && c >= a || b >= a && a >= c
					}
					var g, h, i, j, k, l, m = e,
						n = m.x1,
						o = m.y1,
						p = m.x2,
						q = m.y2;
					if (a == c) return [
						[a, m.y1],
						[c, m.y2]
					];
					if (b == d) return [
						[m.x1, b],
						[m.x2, d]
					];
					g = (a - c) / (b - d), h = 1 / g, i = h * (n - a) + b, j = h * (p - a) + b, k = g * (o - b) + a, l = g * (q - b) + a;
					var r = [];
					return f(i, o, q) && r.push([n, i]), f(j, o, q) && r.push([p, j]), f(k, n, p) && r.push([k, o]), f(l, n, p) && r.push([l, q]), r.length > 1 ? r : void 0
				}
			}),
			Polyline = kc.Polyline = kity.createClass("Polyline", {
				base: kc.AnimatedChartElement,
				constructor: function(a) {
					this.callBase(kity.Utils.extend({
						points: [
							[0, 0],
							[0, 0]
						],
						width: 3,
						color: "black",
						dash: null,
						animatedDir: "y",
						fxEasing: "ease",
						factor: 0,
						close: !1,
						fill: null
					}, a)), this.polyline = new kity.Path, this.canvas.addShape(this.polyline)
				},
				getAnimatedParam: function() {
					return ["factor"]
				},
				registerUpdateRules: function() {
					return kity.Utils.extend(this.callBase(), {
						draw: ["points", "factor", "close", "fill"],
						stroke: ["color", "width", "dash"]
					})
				},
				parsePoint: function(a, b, c) {
					return c && c[a] ? c[a][b] : 0
				},
				draw: function(a, b, c, d, e, f) {
					var g = this.polyline.getDrawer(),
						h = kc.sharpen;
					if (a.length > 0) {
						g.clear();
						var i, j, k = this.param.animatedDir;
						if (("x" == k || "both" == k) && (i = !0), ("y" == k || "both" == k) && (j = !0), e) {
							var l, m, n = e.points,
								o = this.parsePoint(0, 0, n),
								p = this.parsePoint(0, 1, n);
							g.moveTo(h(i ? (a[0][0] - o) * f + o : a[0][0]), h(j ? (a[0][1] - p) * f + p : a[0][1]));
							for (var q = 1; q < a.length; q++) i && (l = this.parsePoint(q, 0, n)), j && (m = this.parsePoint(q, 1, n)), g.lineTo(h(i ? (a[q][0] - l) * f + l : a[q][0]), h(j ? (a[q][1] - m) * f + m : a[q][1]))
						} else {
							g.moveTo(h(a[0][0]), h(a[0][1]));
							for (var q = 1; q < a.length; q++) g.lineTo(h(a[q][0]), h(a[q][1]))
						}
						if (c) {
							g.close(); {
								var r = d;
								this.polyline
							}
							kity.Utils.isArray(d) && this.polyline.whenPaperReady(function(a) {
								r = (new kity.LinearGradientBrush).pipe(function() {
									for (var b, c = 0; c < d.length; c++) b = d[c], this.addStop(b.pos, b.color || "#000", d[c].opacity);
									this.setStartPosition(0, 0), this.setEndPosition(0, 1), a.addResource(this)
								})
							}), this.polyline.fill(r)
						}
					}
				},
				stroke: function(a, b, c) {
					0 === b && (b = .001);
					var d = new kity.Pen;
					d.setWidth(b), d.setColor(a), c && d.setDashArray(c), this.polyline.stroke(d)
				}
			}),
			Label = kc.Label = kity.createClass("Label", {
				base: kc.AnimatedChartElement,
				constructor: function(a) {
					this.callBase(kity.Utils.extend({
						text: "",
						at: "center",
						margin: 0,
						style: {
							fontFamily: "Arial",
							fontSize: "auto"
						},
						color: "black",
						rotate: 0
					}, a)), this.text = (new kity.Text).setFont({
						fontSize: "auto",
						fontFamily: "Arial"
					}), this.canvas.addShape(this.text)
				},
				registerUpdateRules: function() {
					return kity.Utils.extend(this.callBase(), {
						updateText: ["text"],
						updateAnchor: ["at", "margin", "rotate"],
						updateColor: ["color"],
						updateStyle: ["style"]
					})
				},
				getAnimatedParam: function() {
					return []
				},
				updateText: function(a) {
					this.text.setContent(a), this.updateSize(), this.updateAnchor(this.param.at, this.param.margin, this.param.rotate)
				},
				updateSize: function() {
					this.size = 0, this.size = this.getSize(), this.trigger("sizechanged")
				},
				getSize: function() {
					return this.size || this.callBase()
				},
				updateStyle: function(a) {
					this.text.setStyle(a), this.updateSize()
				},
				updateAnchor: function(a, b, c) {
					var d = this.size.height / 2;
					switch (a) {
						case "left":
							this.text.setTextAnchor("end").setPosition(b, d / 1.5);
							break;
						case "right":
							this.text.setTextAnchor("start").setPosition(b, d / 1.5);
							break;
						case "up":
						case "top":
							this.text.setTextAnchor("middle").setPosition(0, d - b);
							break;
						case "down":
						case "bottom":
							var e = "middle";
							0 !== c && (e = "end"), this.text.setTextAnchor(e).setPosition(0, d + b);
							break;
						default:
							this.text.setTextAnchor("middle").setPosition(0, .75 * d)
					}
					0 !== c && this.text.setRotate(c)
				},
				updateColor: function(a) {
					this.text.fill(a)
				}
			});
		! function(a, b) {
			b.Bar = a.createClass("Bar", {
				base: b.AnimatedChartElement,
				constructor: function(c) {
					this.callBase(a.Utils.extend({
						dir: -1,
						offset: 0,
						color: "#000",
						width: 10,
						height: 0,
						rotate: 0,
						label: {
							at: "bottom",
							color: "black",
							text: null
						}
					}, c)), this.rect = new a.Path, this.canvas.addShape(this.rect), this.addElement("label", new b.Label)
				},
				registerUpdateRules: function() {
					return a.Utils.extend(this.callBase(), {
						draw: ["width", "height", "dir", "offset", "rotate"],
						fill: ["color"]
					})
				},
				getAnimatedParam: function() {
					return ["width", "height", "offset"]
				},
				fill: function(a) {
					this.rect.fill(a)
				},
				draw: function(a, b, c, d, e) {
					var f = a / 2,
						g = [];
					g.push("M", -f, -d), g.push("L", -f, -d + c * b), g.push("L", f, -d + c * b), g.push("L", f, -d), g.push("L", f, -d), g.push("Z"), this.rect.setPathData(g).setRotate(e), this.interestPoint = {
						x: 0,
						y: c * b
					}
				},
				getInterestPoint: function() {
					return this.canvas.getTransform().transformPoint(this.interestPoint)
				}
			})
		}(kity, kc);
		var Coordinate = kc.Coordinate = kity.createClass("Coordinate", function() {
				return {
					base: kc.ChartElement
				}
			}()),
			CategoryCoordinate = kc.CategoryCoordinate = kity.createClass("CategoryCoordinate", function() {
				function a(a) {
					if (a > 1e3) return a / 1e3 + "K";
					var b = a.toString(),
						c = b.split(".");
					return c.length > 1 && c[1].length > 4 ? parseFloat(a.toFixed(4)) : a
				}
				var b = {
						w: 0,
						h: 1,
						a: 7,
						b: 2,
						c: 3,
						d: 0,
						t: 0
					},
					c = ["xMesh", "yMesh", "xCat", "yCat", "xAxis", "yAxis", "xAxisArrow", "yAxisArrow"],
					d = {
						xMesh: function() {
							!this.getElement("xMesh") && this.addElement("xMesh", new kc.Mesh({
								type: "vertical"
							}))
						},
						yMesh: function() {
							!this.getElement("yMesh") && this.addElement("yMesh", new kc.Mesh({
								type: "horizon",
								dir: 1
							}))
						},
						xCat: function() {
							!this.getElement("xCat") && this.addElement("xCat", new kc.Categories({
								at: "bottom",
								rotate: this.param.xLabelRotate
							}))
						},
						yCat: function() {
							!this.getElement("yCat") && this.addElement("yCat", new kc.Categories({
								at: "left",
								rotate: this.param.yLabelRotate
							}))
						},
						xAxis: function() {
							!this.getElement("xAxis") && this.addElement("xAxis", new kc.Line({
								color: "#999"
							}))
						},
						yAxis: function() {
							!this.getElement("yAxis") && this.addElement("yAxis", new kc.Line({
								color: "#999"
							}))
						},
						xAxisArrow: function() {
							var a = new kity.Arrow(b).fill("#999");
							a.canvas = a, !this.getElement("xAxisArrow") && this.addElement("xAxisArrow", a)
						},
						yAxisArrow: function() {
							var a = new kity.Arrow(b).fill("#999");
							a.canvas = a, !this.getElement("yAxisArrow") && this.addElement("yAxisArrow", a)
						}
					};
				return {
					base: kc.Coordinate,
					constructor: function(a) {
						var b = kity.Utils.extend({
							components: null,
							dataSet: [],
							margin: {
								top: 20,
								right: 20,
								bottom: 90,
								left: 100
							},
							padding: {
								top: 20,
								right: 20,
								bottom: 0,
								left: 0
							},
							unitX: null,
							unitY: null,
							meshX: !0,
							meshY: !0,
							formatX: null,
							formatY: null,
							rangeX: [0, 100],
							rangeY: [0, 100],
							minX: null,
							minY: null,
							xLabelsAt: null,
							yLabelsAt: null,
							labelMargin: 10,
							xAxisArrow: null,
							yAxisArrow: null,
							xLabelRotate: 0,
							yLabelRotate: 0,
							xLabelFont: null,
							yLabelFont: null,
							xAxisStyle: null,
							yAxisStyle: null,
							xMeshStyle: null,
							yMeshStyle: null
						}, a);
						this.callBase(b), this._initRulers()
					},
					_initRulers: function() {
						this.xRuler = new kc.Ruler, this.yRuler = new kc.Ruler
					},
					_initElements: function(a) {
						a = a ? a : c, this._processComponents(a)
					},
					registerUpdateRules: function() {
						return kity.Utils.extend(this.callBase(), {
							updateAll: ["components", "dataSet", "margin", "padding", "unitX", "unitY", "meshX", "meshY", "formatX", "formatY", "rangeX", "rangeY", "minX", "minY", "xLabelsAt", "yLabelsAt", "labelMargin", "xAxisArrow", "yAxisArrow", "xLabelRotate", "yLabelRotate", "xLabelFont", "yLabelFont", "xAxisStyle", "yAxisStyle", "xMeshStyle", "yMeshStyle"]
						})
					},
					getXRuler: function() {
						return this.xRuler
					},
					getYRuler: function() {
						return this.yRuler
					},
					_processComponents: function(a) {
						var b, e;
						for (b in c) e = c[b], ~a.indexOf(e) ? (func = d[e], func && func.bind(this)()) : this.removeElement(e)
					},
					getXLabels: function() {
						return this.xLabels
					},
					getYLabels: function() {
						return this.yLabels
					},
					measurePoint: function(a) {
						var b = this.param,
							c = this.xRuler.measure(a[0]) + b.margin.left,
							d = this.yRuler.measure(a[1]) + b.margin.top + b.padding.top;
						return [c, d]
					},
					measurePointX: function(a) {
						return this.xRuler.measure(a) + this.param.margin.left
					},
					measurePointY: function(a) {
						return this.yRuler.measure(a) + this.param.margin.top + this.param.padding.top
					},
					measureValueRange: function(a, b) {
						var c = "x" == b ? "measurePointX" : "measurePointY";
						return this[c](a) - this[c](0)
					},
					updateAll: function(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B) {
						this._initElements(b);
						var C, D, E, F, G, H, I = this.container.getWidth() - d.left - d.right,
							J = this.container.getHeight() - d.top - d.bottom,
							K = c.xAxis && c.xAxis.categories,
							L = c.yAxis && c.yAxis.categories,
							M = c.xAxis && c.xAxis.grid,
							N = c.yAxis && c.yAxis.grid,
							O = j || a,
							P = k || a,
							Q = this.xRuler,
							R = this.yRuler;
						K && (l = [0, K.length - 1]), C = kity.Utils.isNumber(n) ? n : l[0], D = l[1], L && (m = [0, L.length - 1]), F = kity.Utils.isNumber(o) ? o : m[0], G = m[1];
						var S, T;
						Q.ref(C, D).map(e.left, I - e.right), K ? S = Q.gridByCategories(K.length) : kity.Utils.isArray(M) ? S = Q.gridByArray(M) : (E = I / 60 | 0, S = Q.gridByCount(E, null, !0, n)), R.ref(F, G).map(J - e.top - e.bottom, 0), L ? T = R.gridByCategories(L.length) : kity.Utils.isArray(N) ? T = R.gridByArray(N) : (H = J / 40 | 0, T = R.gridByCount(H, null, !0, o));
						for (var U = 0; U < T.map.length; U++) T.map[U] = T.map[U] + e.top;
						var V = this.getElement("xAxis"),
							W = this.getElement("yAxis"),
							X = this.getElement("xCat"),
							Y = this.getElement("yCat"),
							Z = this.getElement("xMesh"),
							$ = this.getElement("yMesh");
						V && V.update({
							x1: 0,
							y1: J,
							x2: I,
							y2: J,
							width: y.width,
							color: y.color
						}), W && W.update({
							x1: 0,
							y1: 0,
							x2: 0,
							y2: J,
							width: z.width,
							color: z.color
						}), f && (this.unitXLabel = this.unitXLabel || this.addElement("unitXLabel", new kc.Label), this.unitXLabel.update({
							text: f.text,
							at: "right",
							margin: 0,
							style: f.font || w,
							x: I + 10,
							y: J + 16
						})), g && (this.unitYLabel = this.unitYLabel || this.addElement("unitYLabel", new kc.Label), this.unitYLabel.update({
							text: g.text,
							at: q,
							margin: 0,
							style: g.font || x,
							color: g.font && g.font.color || "#000",
							x: -8,
							y: -14
						}));
						var _ = K ? K : S.ref.map(O);
						X && X.update({
							rules: S.map,
							labels: _,
							y: J,
							step: c.xAxis && c.xAxis.step || 1,
							at: p || "bottom",
							font: w
						}), K && (this.xLabels = _);
						var ab = L ? L : T.ref.map(P);
						Y && (d = "right" == q ? Q._map.to + r : r, Y.update({
							rules: T.map,
							labels: ab,
							x: 0,
							step: c.yAxis && c.yAxis.step || 1,
							at: q || "left",
							margin: d,
							font: x
						})), L && (this.yLabels = ab), Z && Z.update({
							rules: S.map,
							length: J,
							y: J,
							width: A.width,
							color: A.color,
							dash: A.dash,
							step: c.xAxis && c.xAxis.step || 1
						}), $ && $.update({
							rules: T.map,
							length: I,
							x: 0,
							y: 0,
							width: B.width,
							color: B.color,
							dash: B.dash,
							step: c.yAxis && c.yAxis.step || 1
						});
						var bb, cb;
						(bb = this.getElement("xAxisArrow")) && bb.setTranslate(I, J + .5), (cb = this.getElement("yAxisArrow")) && cb.setRotate(-90).setTranslate(.5, 0)
					},
					setCoordinateConf: function(a) {
						var b = {},
							c = [],
							d = a.xAxis,
							e = a.yAxis;
						d.axis.enabled && c.push("xAxis"), d.ticks.enabled && c.push("xMesh"), d.label.enabled && c.push("xCat"), d.axis.arrow && c.push("xAxisArrow"), e.axis.enabled && c.push("yAxis"), e.ticks.enabled && c.push("yMesh"), e.label.enabled && c.push("yCat"), e.axis.arrow && c.push("yAxisArrow"), b.components = c, b.xAxisArrow = d.axis.arrow, b.xAxisStyle = {
							width: d.axis.width,
							color: d.axis.color
						}, b.yAxisArrow = e.axis.arrow, b.yAxisStyle = {
							width: e.axis.width,
							color: e.axis.color
						}, b.xMeshStyle = {
							width: d.ticks.width,
							color: d.ticks.color,
							dash: d.ticks.dash
						}, b.yMeshStyle = {
							width: e.ticks.width,
							color: e.ticks.color,
							dash: e.ticks.dash
						};
						var f = d.margin,
							g = e.margin;
						b.margin = {
							left: f.left || 0,
							right: f.right || 0,
							top: g.top || 0,
							bottom: g.bottom || 0
						};
						var h = d.padding,
							i = e.padding;
						b.padding = {
							left: h.left || 0,
							right: h.right || 0,
							top: i.top || 0,
							bottom: i.bottom || 0
						};
						var j = kity.Utils.queryPath("xAxis.min", a);
						kity.Utils.isNumber(j) && (b.minX = j);
						var k = kity.Utils.queryPath("yAxis.min", a);
						kity.Utils.isNumber(k) && (b.minY = k), a.rangeX && (b.rangeX = a.rangeX), a.rangeY && (b.rangeY = a.rangeY), b.xLabelRotate = d.label.rotate, b.xLabelFont = d.label.font, b.yLabelsAt = e.label.at || "left", b.yLabelRotate = e.label.rotate, b.yLabelFont = e.label.font, b.labelMargin = e.label.margin || 10, b.formatX = kity.Utils.queryPath("xAxis.label.format", a), b.formatY = kity.Utils.queryPath("yAxis.label.format", a), b.unitX = kity.Utils.queryPath("xAxis.unit", a) || "", b.unitY = kity.Utils.queryPath("yAxis.unit", a) || "", b.x = kity.Utils.queryPath("xAxis.margin.left", a) || 0, b.y = kity.Utils.queryPath("yAxis.margin.top", a) || 0;
						var l = kity.Utils.copy(a);
						return l.yAxis.inverted ? (l.yAxis.categories = l.xAxis.categories, delete l.xAxis.categories, b.minX = k, delete b.minY) : delete l.yAxis.categories, b.dataSet = l, b
					}
				}
			}()),
			ElementList = kc.ElementList = kity.createClass("ElementList", {
				base: kc.ChartElement,
				constructor: function(a) {
					this.callBase(kity.Utils.extend({
						list: [],
						fx: !0,
						common: {}
					}, a)), this.elementList = [], this.updateClass(this.param.elementClass), this.fxTimers = []
				},
				getElementList: function() {
					return this.elementList
				},
				registerUpdateRules: function() {
					return kity.Utils.extend(this.callBase(), {
						updateClass: ["elementClass"],
						updateCommon: ["common"],
						updateList: ["list"]
					})
				},
				updateCommon: function(a) {
					this.elementList.forEach(function(b) {
						b.update(a)
					})
				},
				updateList: function(a) {
					function b() {
						k == j && c.trigger("listupdatefinish")
					}
					var c = this,
						d = this.elementList,
						e = a.length - d.length,
						f = kc.fx && this.param.fx,
						g = 0,
						h = 500 / a.length,
						i = this.fxTimers;
					for (this.adjust(e); i.length;) clearTimeout(this.fxTimers.pop());
					var j = d.length,
						k = 0,
						c = this;
					d.forEach(function(d, e) {
						f && "animate" in d ? (i.push(setTimeout(function() {
							d.animate(a[e], c.param.animateDuration || 600, c.param.fxEasing || "ease").timeline.on("finish", function() {
								k++, b()
							})
						}, a[e].delay || g)), g += Math.random() * h) : (k++, b(), d.update(a[e]))
					})
				},
				updateClass: function(a) {
					a && this.elementClass != a && (this.elementClass = a, this.shrink(this.elementList.length))
				},
				adjust: function(a) {
					a > 0 ? this.grow(a) : 0 > a && this.shrink(-a)
				},
				grow: function(a) {
					for (var b; a--;) b = new this.elementClass, b.container = this, this.canvas.addShape(b.canvas), this.elementList.push(b), b.update(this.param.common), this.param.fx ? b.canvas.setOpacity(0).fadeIn(200, "ease") : b.canvas.setOpacity(1)
				},
				shrink: function(a) {
					for (var b = this.elementList.splice(-a); b.length;) this.canvas.removeShape(b.pop().canvas)
				},
				find: function(a) {
					for (var b = 0, c = this.elementList.length; c > b; b++)
						if (this.elementList[b].param.id == a) return this.elementList[b]
				}
			}),
			Pie = kc.Pie = kity.createClass("Pie", {
				base: kc.AnimatedChartElement,
				constructor: function(a) {
					this.callBase(kity.Utils.extend({
						labelText: null,
						labelColor: "#62a9dd",
						labelPosition: "inside",
						connectLineWidth: 1,
						connectLineColor: "#62a9dd",
						originAngle: 0,
						innerRadius: 0,
						outerRadius: 0,
						startAngle: 0,
						pieAngle: 0,
						strokeWidth: 1,
						strokeColor: "#FFF",
						color: "#62a9dd"
					}, a)), this.pie = new kity.Pie, this.canvas.addShape(this.pie), this.label = this.addElement("label", new kc.Label), this.connectLine = this.addElement("connectLine", new kc.Line)
				},
				registerUpdateRules: function() {
					return kity.Utils.extend(this.callBase(), {
						updatePies: ["innerRadius", "outerRadius", "originAngle", "startAngle", "pieAngle", "strokeWidth", "strokeColor"],
						updatePiesColor: ["color"],
						updateLabel: ["labelText", "labelColor", "labelPosition", "outerRadius", "originAngle", "startAngle", "pieAngle"],
						updateConnectLine: ["labelText", "connectLineWidth", "connectLineColor", "labelPosition", "innerRadius", "outerRadius", "originAngle", "startAngle", "pieAngle"]
					})
				},
				getAnimatedParam: function() {
					return ["startAngle", "pieAngle"]
				},
				updatePiesColor: function(a) {
					this.pie.fill(a)
				},
				updatePies: function(a, b, c, d, e, f, g) {
					this.pie.innerRadius = a, this.pie.outerRadius = b, this.pie.startAngle = d - 90 + c, this.pie.pieAngle = e, this.pie.draw(), this.pie.bringTop(), 0 === f && (f = .001);
					var h = new kity.Pen;
					h.setWidth(f), h.setColor(g), this.pie.stroke(h)
				},
				updateLabel: function(a, b, c, d, e, f, g) {
					if ("none" != c) {
						var h = "inside" == c ? d - 30 : d + 50,
							i = (f + g / 2 - 90 + e) / 180 * Math.PI;
						this.label.setVisible(!0), this.label.update({
							text: a,
							color: b,
							at: "bottom",
							margin: 0,
							x: h * Math.cos(i),
							y: h * Math.sin(i)
						})
					}
				},
				updateConnectLine: function(a, b, c, d, e, f, g, h, i) {
					if ("outside" == d && a) {
						var j = f + 30,
							k = (h + i / 2 - 90 + g) / 180 * Math.PI;
						this.connectLine.update({
							x1: (e + 2) * Math.cos(k),
							y1: (e + 2) * Math.sin(k),
							x2: j * Math.cos(k),
							y2: j * Math.sin(k),
							width: b,
							color: c
						})
					}
				}
			}),
			Mesh = kc.Mesh = kity.createClass("Mesh", {
				base: kc.ChartElement,
				constructor: function(a) {
					this.callBase(kity.Utils.extend({
						type: "vertical",
						dir: -1,
						length: 0,
						width: 1,
						color: "#CCC",
						rules: [],
						dash: [2, 2],
						step: 1,
						fx: !0
					}, a)), this.addElement("lines", new kc.ElementList({
						elementClass: kc.Line,
						list: []
					}))
				},
				registerUpdateRules: function() {
					return kity.Utils.extend(this.callBase(), {
						updateRules: ["rules", "type", "dir", "length", "step"],
						updateLines: ["width", "color", "dash"]
					})
				},
				updateRules: function(a, b, c, d, e) {
					for (var f, g, h, i = [], f = 0; f < a.length; f += e) g = a[f], h = "vertical" == b ? {
						x1: g,
						x2: g,
						y1: 0,
						y2: c * d
					} : {
						x1: 0,
						x2: c * d,
						y1: g,
						y2: g
					}, i.push(h);
					this.getElement("lines").update({
						list: i
					})
				},
				updateLines: function(a, b, c) {
					this.getElement("lines").update({
						common: {
							width: a,
							color: b,
							dash: c
						}
					})
				}
			}),
			Categories = kc.Categories = kity.createClass("Categories", {
				base: kc.ChartElement,
				constructor: function(a) {
					this.callBase(kity.Utils.extend({
						at: "bottom",
						rules: [],
						labels: [],
						color: "black",
						margin: 10,
						step: 1,
						rotate: 0,
						font: {}
					}, a)), this.addElement("labels", new kc.ElementList({
						elementClass: kc.Label
					}))
				},
				registerUpdateRules: function() {
					return kity.Utils.extend(this.callBase(), {
						updateCategories: ["rules", "labels", "at", "margin", "rotate", "font", "step"],
						updateCommon: "common"
					})
				},
				updateCategories: function(a, b, c, d, e, f, g) {
					var h, i, j, k, l = [];
					for (h = 0; h < a.length; h += g) i = a[h], "left" == c ? (j = -d, k = i) : "bottom" == c ? (j = i, k = d) : "right" == c && (j = d, k = i), l.push({
						x: j,
						y: k,
						at: c,
						rotate: e,
						text: b[h],
						style: f,
						color: f && f.color || "black"
					});
					this.getElement("labels").update({
						list: l,
						fx: !0
					})
				}
			});
		kc.ChartsConfig = function() {
				function a(a, b) {
					c[a] = b
				}

				function b(a) {
					var b = kity.Utils.copy(c.base);
					return a in c ? kity.Utils.deepExtend(b, c[a]) : b
				}
				var c = {};
				return {
					add: a,
					init: b
				}
			}(), kc.ChartsConfig.add("base", {
				color: ["rgb(31, 119, 180)", "rgb(174, 199, 232)", "rgb(255, 127, 14)", "rgb(255, 187, 120)", "green"],
				finalColor: "rgb(255, 187, 120)",
				xAxis: {
					ticks: {
						enabled: !0,
						dash: [1],
						width: 1,
						color: "#808080"
					},
					axis: {
						enabled: !0,
						arrow: !1,
						width: 1,
						color: "#000"
					},
					label: {
						enabled: !0,
						rotate: 0,
						font: {
							color: "#000",
							fontSize: 12,
							family: "Arial"
						}
					},
					padding: {
						left: 0,
						right: 20
					},
					margin: {
						left: 80,
						right: 50
					}
				},
				yAxis: {
					categories: [],
					ticks: {
						enabled: !0,
						dash: [1],
						width: 1,
						color: "#808080"
					},
					axis: {
						enabled: !0,
						arrow: !1,
						width: 1,
						color: "#000"
					},
					label: {
						enabled: !0,
						rotate: 0,
						font: {
							color: "#000",
							fontSize: 12,
							family: "Arial"
						}
					},
					padding: {
						top: 20,
						bottom: 0
					},
					margin: {
						top: 20,
						bottom: 60
					}
				},
				plotOptions: {
					label: {
						enabled: !1,
						text: {
							color: "#333",
							margin: -15
						}
					}
				},
				interaction: {
					indicatrix: {
						enabled: !1,
						color: "#BBB",
						width: 1,
						dash: [4, 2]
					},
					hover: {
						enabled: !1,
						circle: {
							radius: 4,
							stroke: {
								width: 2,
								color: "#FFF"
							}
						}
					}
				},
				legend: {
					enabled: !0,
					level: "entry"
				},
				animation: {
					enabled: !0,
					duration: 600,
					mode: "ease"
				}
			}), kc.ChartsConfig.add("column", {
				xAxis: {
					margin: {
						right: 60,
						left: 60
					},
					padding: {
						left: 40,
						right: 40
					}
				},
				yAxis: {
					min: 0,
					padding: {
						top: 0,
						bottom: 0
					}
				},
				plotOptions: {
					column: {
						width: 8,
						margin: 1
					}
				}
			}), kc.ChartsConfig.add("area", {
				plotOptions: {
					area: {
						stroke: {
							width: 1,
							color: "#FFF"
						},
						label: {
							enabled: !0,
							radius: 3
						},
						fill: {
							gradientStopOpacity: .5
						},
						dot: {
							enabled: !0,
							radius: 3
						}
					}
				}
			}), kc.ChartsConfig.add("pie", {
				plotOptions: {
					pie: {
						center: {
							x: 200,
							y: 200
						},
						stroke: {
							width: 1,
							color: "#FFF"
						},
						shadow: {
							enabled: !1,
							size: 2,
							x: 1,
							y: 1,
							color: "rgba( 0, 0, 0, 0.3 )"
						},
						innerRadius: 40,
						outerRadius: 80,
						incrementRadius: 30
					}
				}
			}), kc.ChartData = kity.createClass("ChartData", {
				base: kc.Data,
				format: function() {
					function a(a, b) {
						var c, d, e, f = 0,
							g = [],
							h = {},
							i = [],
							j = {},
							k = [],
							l = [];
						for (c = 0; b > c; c++) {
							for (l.push(0), f = 0, d = 0; d < a.length; d++) f += Number(a[d][c] || 0), h[d + 1] = h[d + 1] || [], h[d + 1][c] = f;
							for (g.push(f), k = [], e = 0; e < a.length; e++) i[e] = i[e] || [], i[e][c] = a[e][c] / f * 100, j[e + 1] = j[e + 1] || [], j[e + 1][c] = h[e + 1][c] / f * 100
						}
						return h[0] = j[0] = l, {
							offset: h,
							percentageOffsetLevel: j,
							percentage: i
						}
					}
					var b, c, d, e, f, g, h, i, j, k, l = this.origin,
						m = kity.Utils.queryPath,
						n = [],
						o = 0,
						p = 100,
						q = l.series,
						r = "_" + +new Date,
						s = m("xAxis.categories.length", l) || m("yAxis.categories.length", l),
						t = m("yAxis.percentage", l),
						u = m("yAxis.stacked", l),
						v = {},
						w = {},
						x = 0;
					if (q) {
						for (e = q, v = {}, w = {}, b = 0; b < e.length; b++) e[b].index = b, e[b].group = u ? e[b].group || r : b, f = e[b].group, v[f] = v[f] || [], v[f].push(e[b].data), w[f] = w[f] || [], w[f].push(e[b]);
						x = 0;
						for (g in v) {
							for (j = a(v[g], s), h = j.offset, i = w[g], c = 0; c < i.length; c++) k = i[c], k.indexInGroup = c, k.groupIndex = x, k.offset = h[c], k.allOffset = h, k.sum = h[v[g].length], k.percentage = j.percentage[c], k.percentageOffset = j.percentageOffsetLevel[c], k.allPercentageOffset = j.percentageOffsetLevel;
							x++
						}
						for (l.yAxis = l.yAxis || {}, l.yAxis.groupCount = x, b = 0; b < e.length; b++) d = u || t ? e[b].sum : e[b].data, n = n.concat(d);
						t || (o = n.length > 0 ? Math.min.apply([], n) : 0, p = n.length > 0 ? Math.max.apply([], n) : 100), (u || t) && (o = 0)
					}
					var y = {
						chart: l.chart || "line",
						xAxis: {
							categories: m("xAxis.categories", l) || [],
							step: m("xAxis.step", l) || 1
						},
						yAxis: m("yAxis", l) || {},
						plotOptions: l.plotOptions || {},
						series: l.series || [],
						rangeY: [o, p],
						rangeX: [o, p]
					};
					return y
				}
			}), kc.PieData = kity.createClass("PieData", {
				base: kc.Data,
				format: function() {
					function a(a) {
						var b, a, c = 0,
							d = [];
						for (b = 0; b < a.length; b++) d.push(c), c += kity.Utils.isNumber(a[b].value) ? a[b].value : a[b];
						var e, f, g, h = 0;
						for (b = 0; b < a.length; b++) e = kity.Utils.isNumber(a[b].value) ? a[b].value : a[b], g = a[b] = kity.Utils.isObject(a[b]) ? a[b] : {}, g.percent = f = e / c, g.angle = 360 * f, g.offsetAngle = h, g.index = b, h += g.angle;
						return a
					}
					var b, c = this.origin,
						d = kity.Utils.queryPath,
						e = c.series;
					if (e)
						for (b = 0; b < e.length; b++) e[b].index = b, a(e[b].data);
					var f = {
						chart: c.chart,
						xAxis: {
							categories: d("xAxis.categories", c) || [],
							step: d("xAxis.step", c) || 1
						},
						yAxis: d("yAxis", c) || {},
						plotOptions: c.plotOptions || {},
						series: c.series || []
					};
					return f
				}
			}),
			function() {
				kc.PiePlots = kity.createClass("PiePlots", {
					base: kc.ChartElement,
					constructor: function(a) {
						this.callBase(a), this.chartType = "pie", this.config = a || {}, this.pies = this.addElement("pies", new kc.ElementList)
					},
					update: function(a) {
						this.config = kity.Utils.extend(this.config, a), this.drawPlots(this.config)
					},
					getEntryColor: function(a) {
						return a.color || this.config.color[a.index] || this.config.finalColor
					},
					getLabelColor: function(a) {
						var b = this.config.plotOptions,
							c = b.pie.labelPosition,
							d = b.label.text;
						return "outside" == c ? d.color : a ? "#FFF" : d.color
					},
					drawPlots: function(a) {
						var b = this,
							c = [],
							d = a.series,
							e = a.plotOptions,
							f = e.pie,
							g = 0,
							h = f.outerRadius,
							i = f.innerRadius,
							j = f.incrementRadius;
						lpos = f.labelPosition, gap = f.gap || 0, originAngle = f.originAngle || 0, animateAngle = f.animateAngle || 0;
						for (var k = 0; k < d.length; k++) d[k].data.map(function(a) {
							g = 0 == k ? i : h + k * (j + gap) - j, c.push({
								labelText: e.label.enabled && a.angle > 10 ? a.label ? a.label : a.value : null,
								labelColor: b.getLabelColor(0 == k),
								labelPosition: lpos ? lpos : 0 == k ? "inside" : "none",
								connectLineWidth: 1,
								connectLineColor: b.getEntryColor(a),
								originAngle: originAngle,
								innerRadius: g,
								outerRadius: h + (j + gap) * k,
								startAngle: a.offsetAngle + animateAngle,
								pieAngle: a.angle,
								strokeWidth: e.pie.stroke.width,
								strokeColor: e.pie.stroke.color,
								color: b.getEntryColor(a),
								x: e.pie.center.x,
								y: e.pie.center.y
							})
						});
						this.pies.update({
							elementClass: kc.Pie,
							common: {},
							list: c,
							fx: a.animation.enabled,
							animateDuration: a.animation.duration,
							fxEasing: a.animation.mode
						});
						var l = a.plotOptions.pie.shadow;
						if (l.enabled) {
							var m = new kity.ProjectionFilter(l.size, l.x, l.y);
							m.setColor(l.color), this.getPaper().addResource(m), this.pies.getElementList().forEach(function(a, b) {
								var d = c[b].color;
								(0 != d.indexOf("rgba(") || d.indexOf("0)") != d.length - 2) && a.canvas.applyFilter(m)
							})
						}
					}
				})
			}(),
			function() {
				kc.BasePlots = kity.createClass("BasePlots", {
					base: kc.ChartElement,
					constructor: function(a, b) {
						this.callBase(a, b), this.coordinate = a, this.config = b || {}, this.plotsElements = this.addElement("plotsElements", new kc.ElementList), this.plotsAttrsInit()
					},
					getPlotsElements: function() {
						return this.plotsElements
					},
					getEntryColor: function(a, b) {
						var c = a.style && a.style[b];
						return c && c.color ? c.color : a.color || this.config.color[a.index] || this.config.finalColor
					},
					update: function(a, b) {
						this.coordinate = a || this.coordinate, this.config = kity.Utils.extend(this.config, b), this.drawPlots(this.coordinate, this.config)
					}
				})
			}(),
			function() {
				kc.StickPlots = kity.createClass("StickPlots", {
					base: kc.BasePlots,
					constructor: function(a, b) {
						this.callBase(a, b)
					},
					drawPlots: function(a, b) {
						var c = a,
							d = b.plotOptions;
						rotateAngle = this.rotateAngle, measureCategoryMethod = this.measureCategoryMethod, measureValueMethod = this.measureValueMethod, g = this.stickDir;
						var e, f, g, h, i, j, k, l, m, n, o = (c.xRuler, c.yRuler, b.series),
							p = [],
							q = d[this.chartType].width,
							r = 0,
							s = 0,
							t = b.chart.mirror ? 0 : q + d[this.chartType].margin,
							u = b.yAxis.percentage;
						for (e = 0; e < o.length; e++)
							for (i = o[e], h = u ? o[e].percentage : o[e].data, f = 0; f < h.length; f++) j = h[f], k = c[measureCategoryMethod](f), r = (b.yAxis.groupCount - 1) * t / 2, l = c.measureValueRange(j, this.valueAxis), m = u ? i.percentageOffset : i.offset, s = m ? m[f] : 0, n = l * g, stickParam = {
								offset: c.measureValueRange(s, this.valueAxis) * g,
								color: this.getEntryColor(i, f),
								width: q,
								height: n,
								rotate: rotateAngle,
								delay: b.animation.delayInterval * f,
								bind: {
									data: j,
									indexInSeries: e,
									indexInCategories: f
								}
							}, d.label.enabled && (stickParam.label = this.getStickLabelParam(n, j, b)), stickParam[this.valueAxis] = c[measureValueMethod](0), stickParam[this.categoryAxis] = k - r + t * i.groupIndex, p.unshift(stickParam);
						var v = b.animation;
						return this.getPlotsElements().update({
							elementClass: kc.Bar,
							list: p,
							fx: v.enabled,
							animateDuration: v.duration,
							fxEasing: v.mode
						}), b
					}
				})
			}(),
			function() {
				kc.ColumnPlots = kity.createClass("ColumnPlots", {
					base: kc.StickPlots,
					constructor: function(a, b) {
						this.callBase(a, b)
					},
					plotsAttrsInit: function() {
						this.chartType = "column", this.stickDir = -1, this.rotateAngle = 0, this.categoryAxis = "x", this.valueAxis = "y", this.measureCategoryMethod = "measurePointX", this.measureValueMethod = "measurePointY"
					},
					getStickLabelParam: function(a, b, c) {
						return {
							at: "bottom",
							color: c.plotOptions.label.text.color,
							text: b,
							x: 0,
							y: -a - c.plotOptions.label.text.margin
						}
					}
				})
			}(),
			function() {
				kc.LinearPlots = kity.createClass("LinearPlots", {
					base: kc.BasePlots,
					constructor: function(a, b) {
						this.callBase(a, b), this.lineDots = this.addElement("lineDots", new kc.ElementList)
					},
					drawPlots: function(a, b) {
						var c, d, e, f = b.series,
							g = (b.plotOptions, []),
							h = [],
							i = (kity.Utils.queryPath, 0);
						for (this.dotArr = [], c = 0; c < f.length; c++) {
							if (d = f[c], d.positions = [], this.renderByData(d), this.config.yAxis.stacked) {
								var j = this.config.yAxis.percentage,
									k = j ? "allPercentageOffset" : "allOffset";
								g = this.array2points(d[k][c + 1], i)
							} else g = this.array2points(d.data, i);
							e = {
								line: d,
								currentData: d.data[c],
								currentLabel: b.xAxis.categories[c]
							}, h.push({
								points: g,
								color: this.getEntryColor(d),
								dash: d.dash || null,
								width: this.getLineWidth(),
								animatedDir: "y",
								defaultPos: a.param.height,
								factor: +new Date,
								bind: e
							}), d.positions = g, this.addLabels(d)
						}
						this.getPlotsElements().update({
							elementClass: kc.Polyline,
							list: h,
							fx: b.animation.enabled
						}), this.addDots()
					},
					renderByData: function() {},
					array2points: function(a, b) {
						for (var c, b = b || 0, d = [], e = 0; e < a.length; e++) c = this.coordinate.measurePoint([e, a[e]]), c[0] += b, d.push(c);
						return d
					},
					addLabels: function(a) {
						var b = this.config.plotOptions;
						if (b.label.enabled || b[this.chartType].dot.enabled) {
							var c, d, e, f = 0;
							for (e = 0; e < a.positions.length; e++) c = a.positions[e], b[this.chartType].dot.enabled && (f = b[this.chartType].dot.radius), d = {
								color: this.getEntryColor(a),
								radius: f,
								x: c[0],
								y: c[1]
							}, b.label.enabled && (d.label = {
								margin: b.label.text.margin,
								color: b.label.text.color,
								text: a.data[e]
							}), this.dotArr.push(d);
							a.dots = this.dotArr
						}
					},
					addDots: function() {
						var a = this.config.plotOptions;
						if (a.label.enabled || a[this.chartType].dot.enabled) {
							var b = this.getElement("lineDots");
							b.update({
								elementClass: kc.CircleDot,
								list: this.dotArr,
								fx: this.config.animation.enabled
							})
						}
					}
				})
			}(),
			function() {
				kc.AreaPlots = kity.createClass("AreaPlots", {
					base: kc.LinearPlots,
					constructor: function(a, b) {
						this.callBase(a, b)
					},
					plotsAttrsInit: function() {
						this.chartType = "area"
					},
					getLineWidth: function() {
						return this.config.plotOptions.area.stroke.width
					},
					areas: [],
					renderByData: function(a) {
						var b, c, d, e = a.offsetX || 0;
						if (this.config.yAxis.stacked) {
							var f = this.config.yAxis.percentage,
								g = f ? "percentageOffset" : "offset",
								h = f ? "allPercentageOffset" : "allOffset";
							c = this.array2points(a[g], e), d = this.array2points(kity.Utils.copy(a[h][a.indexInGroup + 1]), e).reverse()
						} else {
							b = this.array2points(a.data, e);
							for (var i = (kity.Utils.copy(b), this.coordinate), j = (i.measurePointX(0), i.measurePointY(i.yRuler._ref.from)), c = b.slice(0), d = [], k = b.length; k-- > 0;) d.push([b[k][0], j])
						}
						var l = this.drawPolygon(c, d, a);
						this.areas.push(l)
					},
					drawPolygon: function(a, b, c) {
						var d, e, f = a.concat(b),
							g = new kity.Polygon(f),
							h = this.container.paper,
							i = this.getEntryColor(c),
							j = this;
						return d = kity.Utils.isNumber(e = this.config.plotOptions.area.fill.opacity) ? new kity.Color(i).set("a", e) : (new kity.LinearGradientBrush).pipe(function() {
							for (var a, b = c.gradient || j.config.plotOptions.area.fill.gradient, d = 0; d < b.length; d++) a = b[d], this.addStop(a.pos, a.color || i, b[d].opacity);
							this.setStartPosition(0, 0), this.setEndPosition(0, 1), h.addResource(this)
						}), g.fill(d), this.canvas.addShape(g), g.bringRear(), g
					}
				})
			}(),
			function() {
				kc.BaseChart = kity.createClass("BaseChart", {
					mixins: [kc.ConfigHandler],
					base: kc.Chart,
					constructor: function(a, b) {
						this.callBase(a, b), this.config = this.param, this.callMixin(), this.bindAction(), this.initTooltip()
					},
					_setConfig: function(a, b) {
						var c, d = kity.Utils.deepExtend(this.config, a),
							e = kc.ChartsConfig.init(this.chartType || "");
						this.config = kity.Utils.deepExtend(e, d), this.setData(new b(this.config)), c = this.data.format(), this.config = kity.Utils.deepExtend(this.config, c)
					},
					update: function(a) {
						var b = arguments[1] || kc.ChartData;
						this._setConfig(a, b), coordConf = this.coordinate.setCoordinateConf(this.config), this.coordinate.update(coordConf), this.getPlots().update(this.coordinate, this.config), this.getOption("legend.enabled") && this.addLegend()
					},
					getPlots: function() {
						return this.plots
					},
					setPlots: function(a) {
						this.plots = a
					},
					getXOffset: function() {
						var a = this.coordinate,
							b = a.param.padding.left + a.param.margin.left;
						return b
					},
					isOutOfXRange: function(a) {
						var b = this.getXOffset(a),
							c = this.coordinate;
						return a - b < c.param.padding.left || a - b + c.param.padding.left > c.xRuler.map_grid[c.xRuler.map_grid.length - 1]
					},
					getChartElementByShape: function(a) {
						return a.container.host
					},
					getXInfoByPosX: function(a) {
						var b = this.getXOffset(),
							c = this.coordinate;
						if (0 == c.xRuler.map_grid.length) return {
							index: 0,
							posX: 0
						};
						var d = c.xRuler.leanTo(a - b, "map");
						return d.value += c.param.padding.left, {
							index: d.index,
							posX: d.value
						}
					},
					bindAction: function() {
						var a = this;
						this.currentIndex = -1, this.paper.on("mousemove", function(b) {
							a.onmousemove && a.onmousemove(b)
						}), this.paper.on("click", function(b) {
							var c = a.coordinate;
							c && a.onclick && a.onclick(b)
						})
					},
					getEntryColor: function(a) {
						return a.color || this.config.color[a.index] || this.config.finalColor
					},
					initTooltip: function() {
						var a = $(this.container);
						~["absolute", "relative"].indexOf(a.css("position")) || a.css("position", "relative"), this.setTooltipContainer()
					},
					setTooltipContainer: function(a) {
						this.tooltip = a ? $(a).css({
							position: "absolute",
							left: "-3000px"
						}) : $("<div></div>").appendTo(this.container).css({
							position: "absolute",
							boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
							borderRadius: "4px",
							backgroundColor: "#FFF",
							color: "#888",
							padding: "6px 10px",
							left: "-1000px",
							marginLeft: "10px",
							fontSize: "10px",
							lineHeight: "16px"
						})
					},
					updateTooltip: function(a, b, c) {
						this.tooltip.html(a);
						var d = this.tooltip[0].clientWidth;
						b + d > $(this.container).width() && (b -= d + 15), this.tooltip.clearQueue().animate({
							left: b,
							top: c
						}, 100)
					},
					getTooltip: function() {
						return this.tooltip
					},
					addLegend: function() {
						var a, b, c, d, e, f, g = this.config.series || [];
						this.legend && this.legend.remove(), this.legend = $('<div class="kitycharts-legend"></div>').css({
							position: "absolute",
							bottom: "5px",
							right: "30px",
							height: "26px",
							lineHeight: "26px"
						}).appendTo(this.container);
						var h = [],
							i = [];
						for (a = 0; a < g.length; a++)
							if (b = g[a], "data" == this.config.legend.level)
								for (var a = 0; a < b.data.length; a++) f = b.data[a], h.push(f.name), i.push(this.getEntryColor(f));
							else c = b.name, d = this.getEntryColor(b), h.push(c), i.push(d);
						var j = this;
						h.forEach(function(a, b) {
							e = $("<div></div>").css({
								marginRight: "20px",
								display: "inline-block"
							}).appendTo(j.legend), $('<div class="kitycharts-legend-color"></div>').css({
								width: "12px",
								height: "12px",
								backgroundColor: i[b],
								display: "inline-block",
								marginRight: "5px",
								position: "relative",
								top: "1px"
							}).appendTo(e), $('<div class="kitycharts-legend-label">' + a + "</div>").css({
								fontSize: "12px",
								display: "inline-block"
							}).appendTo(e)
						})
					}
				})
			}(),
			function() {
				kc.StickChart = kity.createClass("StickChart", {
					base: kc.BaseChart,
					constructor: function(a, b) {
						this.callBase(a, b), this.setData(new kc.ChartData(b)), this.coordinate = this.addElement("oxy", new kc.CategoryCoordinate)
					},
					isStick: function(a) {
						return a instanceof kc.Bar
					},
					onmousemove: function(a) {
						this.currentStick, this.currentStickParam;
						var b = this.getChartElementByShape(a.targetShape);
						this.isStick(b) ? this.currentStick != b ? this.onMouseOut(b) : this.onMouseIn(b) : this.onMouseOut(b)
					},
					getPosXByIndex: function(a) {
						return this.coordinate.measurePointX(a)
					},
					getPosYByValue: function(a) {
						return this.coordinate.measurePointY(a)
					},
					onMouseIn: function(a) {
						var b = new kity.Color(a.param.color);
						b.set("a", .7), a.update({
							color: b.toRGBA()
						});
						var c = a.getBindData();
						this.processHover(c)
					},
					onMouseOut: function(a) {
						this.currentStickParam && this.currentStick.update({
							color: this.currentStickParam.color
						}), this.isStick(a) && (this.currentStick = a, this.currentStickParam = kity.Utils.copy(a.param))
					},
					processHover: function(a) {
						this.currentMark != a.indexInSeries + a.indexInCategories && (this.currentMark = a.indexInSeries + a.indexInCategories, this.callHover(a))
					},
					callHover: function(a) {
						var b = this.config.interaction.onStickHover;
						"function" == typeof b ? b.call(this, a, this.currentStick) : null !== b && this.defaultCallHover(a)
					},
					defaultCallHover: function(a) {
						var b = this.config.series[a.indexInSeries].sum[a.indexInCategories],
							c = this.setTooltipContent(a),
							d = this.getTooltipPosition(b);
						this.updateTooltip(c, d.x, d.y)
					},
					setTooltipContent: function(a) {
						var b = a.indexInSeries,
							c = a.indexInCategories,
							d = kity.Utils.queryPath("tooltip.content", this.config);
						if (d) return d(c, b);
						var e = this.config.series,
							f = this.config.xAxis.categories,
							g = '<div style="font-weight:bold">' + f[c] + "</div>",
							h = "x" == this.getPlots().valueAxis ? "xAxis" : "yAxis",
							i = this.config[h].unit && this.config[h].unit.text || "";
						return g += "<div>" + e[b].name + " : " + e[b].data[c] + i + "</div>", this.config.yAxis.stacked && (g += "<div> Total : " + e[b].sum[c] + "</div>"), g
					}
				})
			}(),
			function() {
				kc.ColumnChart = kity.createClass("ColumnChart", {
					base: kc.StickChart,
					constructor: function(a, b) {
						this.chartType = "column", this.callBase(a, b);
						var c = this.addElement("plots", new kc.ColumnPlots);
						this.setPlots(c)
					},
					getTooltipPosition: function(a) {
						return {
							x: this.currentStick.param.x,
							y: this.coordinate.measurePointY(a)
						}
					}
				})
			}(),
			function() {
				kc.LinearChart = kity.createClass("LinearChart", {
					base: kc.BaseChart,
					constructor: function(a, b) {
						this.callBase(a, b), this.hoverDots = this.addElement("hoverDots", new kc.ElementList), this.setData(new kc.ChartData(b)), this.coordinate = this.addElement("oxy", new kc.CategoryCoordinate)
					},
					onmousemove: function(a) {
						var b, c, d = this.coordinate,
							e = (d.param, a.originEvent),
							f = e.offsetX || e.layerX,
							g = (e.offsetY || e.layerY, this),
							h = 0,
							i = g.config.series;
						if (!g.isOutOfXRange(f)) {
							var j = g.getXInfoByPosX(f);
							if (i && 0 != i.length && i[0].positions) {
								for (b = 0; b < i.length; b++) c = i[b].positions.length, c > h && (h = c);
								!j || j.index > h || g.processHover(j)
							}
						}
					},
					onclick: function(a) {
						var b = this,
							c = (this.coordinate, b.config, a.targetShape);
						if (c instanceof kity.Circle && b.config.interaction.onCircleClick) {
							var d = b.currentIndex,
								e = b.getChartElementByShape(c),
								f = e.param.bind,
								g = {
									data: f.data,
									indexInCategories: d,
									indexInSeries: f.indexInSeries,
									position: e.getPosition()
								};
							b.callCircleClick(g, e)
						}
					},
					callCircleClick: function(a, b) {
						var c = this.config.interaction.onCircleClick;
						"function" == typeof c ? c(a, b) : null !== c && this.defaultCircleClick(a)
					},
					defaultCircleClick: function(a) {
						this.updateTooltip(this.config.xAxis.categories[a.indexInCategories] + " : " + a.data, a.position.x, a.position.y)
					},
					update: function(a) {
						this.callBase(a), this.hoverDots.update({
							elementClass: kc.CircleDot,
							list: [],
							fx: !1
						})
					},
					setCirclePosYByIndex: function(a) {
						var b, c = 0,
							d = this,
							e = d.config.series;
						for (d.circleArr = [], b = 0; b < e.length; b++) tmpPos = e[b].positions[a], tmpPos ? c = tmpPos[1] : pX = c = -100, d.circleArr.push({
							color: "#FFF",
							radius: 5,
							strokeWidth: 3,
							strokeColor: this.getEntryColor(e[b]),
							x: d.currentPX,
							y: c,
							bind: {
								data: e[b].data[a],
								indexInSeries: b,
								indexInCategories: a
							}
						});
						d.hoverDots.update({
							elementClass: kc.CircleDot,
							list: d.circleArr,
							fx: !1
						}), d.hoverDots.canvas.bringTop()
					},
					setTooltipContent: function(a) {
						var b = kity.Utils.queryPath("tooltip.content", this.config);
						if (b) return b(a);
						var c = this.config.series,
							d = this.config.xAxis.categories,
							e = '<div style="font-weight:bold">' + d[a] + "</div>";
						return c.forEach(function(b) {
							e += "<div>" + b.name + " : " + b.data[a] + "</div>"
						}), e
					},
					defaultHover: function(a) {
						for (var b, c = a[0].bind.indexInCategories, d = this.config.series, e = [], f = 0, g = 0; g < d.length; g++) b = d[g].positions[c], f = b[0], e.push(b[1]);
						var h = Math.min.apply([], e),
							i = Math.max.apply([], e);
						this.updateTooltip(this.setTooltipContent(c), f, (h + i) / 2)
					},
					callCircleHover: function() {
						var a = [];
						this.circleArr.forEach(function(b) {
							a.push(b)
						});
						var b = this.config.interaction.onHover;
						"function" == typeof b ? b(a) : null !== b && this.defaultHover(a)
					},
					processHover: function(a) {
						if (this.config.interaction.hover.enabled) {
							var b = this,
								c = a.posX + this.coordinate.param.margin.left,
								d = a.index;
							b.currentPX = c, d != b.currentIndex && (b.currentIndex = d, b.setCirclePosYByIndex(d), b.callCircleHover())
						}
					}
				})
			}(),
			function() {
				kc.AreaChart = kity.createClass("AreaChart", {
					base: kc.LinearChart,
					constructor: function(a, b) {
						this.chartType = "area", this.callBase(a, b);
						var c = this.addElement("plots", new kc.AreaPlots);
						this.setPlots(c)
					}
				})
			}();
		var RadarData = kc.RadarData = kity.createClass("RadarData", {
				base: kc.Data
			}),
			RadarChart = kc.RadarChart = kity.createClass("RadarChart", {
				base: kc.Chart,
				constructor: function(a, b) {
					this.callBase(a, b), this.addElement("net", new kc.ElementList), this.addElement("items", new kc.ElementList), this.addElement("circles", new kc.ElementList), this.addElement("labels", new kc.ElementList), this.setData(new kc.RadarData)
				},
				setColors: function(a) {
					this.param.colors = a
				},
				render: function() {
					for (var a = this.getData().format(), b = this.param, c = b.netStyle, d = b.colors, e = a.categories.length, f = 2 * Math.PI / e, g = this.getElement("net"), h = this.getElement("items"), i = this.getElement("circles"), j = this.getElement("labels"), k = [], l = [], m = [], n = this.container, o = n.offsetWidth, p = n.offsetHeight, q = o / 2, r = p / 2, s = b.radius || (p > o ? o : p) / 2 - 50, t = s / 5, u = 0, v = 0; e > v; v++) {
						for (var w = 0; 6 > w; w++)
							if ("outer" !== c || 5 === w) {
								var x = t * w,
									y = {
										x1: q + x * Math.cos(u),
										y1: r + x * Math.sin(u),
										x2: q + x * Math.cos(u + f),
										y2: r + x * Math.sin(u + f),
										color: d.net
									};
								k.push(y)
							}
						var z = {
							x1: q,
							y1: r,
							x2: q + s * Math.cos(u),
							y2: r + s * Math.sin(u),
							color: d.net
						};
						k.push(z), u += f
					}
					g.update({
						elementClass: kc.Line,
						list: k,
						fx: !1
					});
					for (var A = d.items, B = [], C = a.series, D = 0; D < C.length; D++) {
						for (var E = [], F = C[D].data, G = 0; G < F.length; G++) {
							var x = s * F[G],
								H = q + x * Math.cos(f * G),
								I = r + x * Math.sin(f * G);
							E.push([H, I]), l.push({
								radius: b.circle && b.circle.radius || 5,
								fxEasing: b.circle && b.circle.fxEasing || "ease",
								color: A[D] || "#7ecffe",
								x: H,
								y: I
							})
						}
						var y = {
							points: E,
							color: A[D],
							fxEasing: "ease",
							close: !0,
							fill: kity.Color.parse(A[D]).set(kity.Color.A, .3),
							animatedDir: "both",
							factor: +new Date
						};
						B.push(y)
					}
					h.update({
						elementClass: kc.Polyline,
						list: B
					}), b.circle && b.circle.enabled && i.update({
						elementClass: kc.CircleDot,
						list: l
					});
					for (var J = 0; J < a.categories.length; J++) {
						var K = a.categories[J],
							y = {
								text: K,
								x: q + (s + 10) * Math.cos(f * J),
								y: r + (s + 10) * Math.sin(f * J)
							};
						y.x > q ? y.at = "right" : y.x < q && (y.at = "left"), m.push(y)
					}
					j.update({
						elementClass: kc.Label,
						list: m
					})
				},
				update: function() {
					this.render()
				}
			});
		! function() {
			kc.PieChart = kity.createClass("PieChart", {
				base: kc.BaseChart,
				constructor: function(a, b) {
					this.chartType = "pie", this.callBase(a, b), this.config = this.param, this.setData(new kc.PieData(b));
					var c = this.addElement("plots", new kc.PiePlots);
					this.setPlots(c)
				},
				update: function(a) {
					this._setConfig(a, kc.PieData), this.getPlots().update(this.config), this.getOption("legend.enabled") && this.addLegend()
				},
				getCenter: function() {
					var a = this.config.plotOptions.pie.center;
					return {
						x: a.x,
						y: a.y
					}
				},
				getSeries: function() {
					return this.config.series
				},
				getParamList: function() {
					return this.getPlots().pies.param.list
				},
				bindAction: function() {}
			})
		}(window)
	}(kity, window);
var Com = {};
! function() {
	var a = Com.Tip = function(a) {
		this.conf = a, a.style.backgroundColor = a.bgColor, this.dir = "top", 0 == a.pos.indexOf("left") ? this.dir = "right" : 0 == a.pos.indexOf("right") && (this.dir = "left");
		var b = this.tip = $('<div class="tip hit-' + a.pos + '">' + a.content + '<div class="hit" style="border-' + this.dir + "-color: " + a.bgColor + '"></div></div>').css({
				position: "absolute"
			}).css(a.style).addClass(a.className || "").appendTo(a.container),
			c = this.getRect(),
			d = -c.width / 2,
			e = -c.height;
		0 == a.pos.indexOf("left") ? (d = 6, e = -c.height / 2) : 0 == a.pos.indexOf("right") && (d = -c.width, e = -c.height / 2), b.css({
			left: d,
			top: e
		}), this.updatePosition(a.point.x, a.point.y, 0)
	};
	a.prototype = {
		getTip: function() {
			this.tip
		},
		getRect: function() {
			var a = y = 0;
			return "bottom" == this.dir ? y = 6 : a = 6, {
				width: this.tip.width() + a,
				height: this.tip.height() + y
			}
		},
		update: function(a, b) {
			var c = this;
			setTimeout(function() {
				a.apply(c)
			}, b || 0)
		},
		updatePosition: function(a, b, c) {
			this.tip.css({
				"-webkit-transition": (void 0 !== c ? c : this.conf.duration || 500) + "ms",
				"-webkit-transform": "translate3d(" + a + "px, " + b + "px, 0)"
			})
		}
	};
	var b = Com.CenterLabel = function(a, b, c, d) {
		var e = $(a),
			f = e.width(),
			g = e.height();
		this.label = $("<div>" + b + "</div>").css("position", "absolute").css(c || {}).appendTo(a), d && this.label.addClass(d), this.label.css({
			left: (f - this.label.width()) / 2 + "px",
			top: (g - this.label.height()) / 2 + "px"
		})
	};
	b.prototype = {
		getLabel: function() {
			return this.label
		},
		setLabel: function(a) {
			this.label.html(a)
		}
	}
}();
var Swiper = function(a, b) {
	"use strict";

	function c(a, b) {
		return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b)
	}

	function d(a) {
		return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1
	}

	function e() {
		var a = F - I;
		return b.freeMode && (a = F - I), b.slidesPerView > C.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a
	}

	function f() {
		function a(a) {
			var c = new Image;
			c.onload = function() {
				C && void 0 !== C.imagesLoaded && C.imagesLoaded++, C.imagesLoaded === C.imagesToLoad.length && (C.reInit(), b.onImagesReady && C.fireCallback(b.onImagesReady, C))
			}, c.src = a
		}
		var d = C.h.addEventListener,
			e = "wrapper" === b.eventTarget ? C.wrapper : C.container;
		if (C.browser.ie10 || C.browser.ie11 ? (d(e, C.touchEvents.touchStart, p), d(document, C.touchEvents.touchMove, q), d(document, C.touchEvents.touchEnd, r)) : (C.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", C.resizeFix), g(), C._wheelEvent = !1, b.mousewheelControl) {
			if (void 0 !== document.onmousewheel && (C._wheelEvent = "mousewheel"), !C._wheelEvent) try {
				new WheelEvent("wheel"), C._wheelEvent = "wheel"
			} catch (f) {}
			C._wheelEvent || (C._wheelEvent = "DOMMouseScroll"), C._wheelEvent && d(C.container, C._wheelEvent, j)
		}
		if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
			C.imagesToLoad = c("img", C.container);
			for (var h = 0; h < C.imagesToLoad.length; h++) a(C.imagesToLoad[h].getAttribute("src"))
		}
	}

	function g() {
		var a, d = C.h.addEventListener;
		if (b.preventLinks) {
			var e = c("a", C.container);
			for (a = 0; a < e.length; a++) d(e[a], "click", n)
		}
		if (b.releaseFormElements) {
			var f = c("input, textarea, select", C.container);
			for (a = 0; a < f.length; a++) d(f[a], C.touchEvents.touchStart, o, !0)
		}
		if (b.onSlideClick)
			for (a = 0; a < C.slides.length; a++) d(C.slides[a], "click", k);
		if (b.onSlideTouch)
			for (a = 0; a < C.slides.length; a++) d(C.slides[a], C.touchEvents.touchStart, l)
	}

	function h() {
		var a, d = C.h.removeEventListener;
		if (b.onSlideClick)
			for (a = 0; a < C.slides.length; a++) d(C.slides[a], "click", k);
		if (b.onSlideTouch)
			for (a = 0; a < C.slides.length; a++) d(C.slides[a], C.touchEvents.touchStart, l);
		if (b.releaseFormElements) {
			var e = c("input, textarea, select", C.container);
			for (a = 0; a < e.length; a++) d(e[a], C.touchEvents.touchStart, o, !0)
		}
		if (b.preventLinks) {
			var f = c("a", C.container);
			for (a = 0; a < f.length; a++) d(f[a], "click", n)
		}
	}

	function i(a) {
		var b = a.keyCode || a.charCode;
		if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
			if (37 === b || 39 === b || 38 === b || 40 === b) {
				for (var c = !1, d = C.h.getOffset(C.container), e = C.h.windowScroll().left, f = C.h.windowScroll().top, g = C.h.windowWidth(), h = C.h.windowHeight(), i = [
						[d.left, d.top],
						[d.left + C.width, d.top],
						[d.left, d.top + C.height],
						[d.left + C.width, d.top + C.height]
					], j = 0; j < i.length; j++) {
					var k = i[j];
					k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0)
				}
				if (!c) return
			}
			M ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && C.swipeNext(), 37 === b && C.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && C.swipeNext(), 38 === b && C.swipePrev())
		}
	}

	function j(a) {
		var c = C._wheelEvent,
			d = 0;
		if (a.detail) d = -a.detail;
		else if ("mousewheel" === c)
			if (b.mousewheelControlForceToAxis)
				if (M) {
					if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
					d = a.wheelDeltaX
				} else {
					if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
					d = a.wheelDeltaY
				} else d = a.wheelDelta;
		else if ("DOMMouseScroll" === c) d = -a.detail;
		else if ("wheel" === c)
			if (b.mousewheelControlForceToAxis)
				if (M) {
					if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
					d = -a.deltaX
				} else {
					if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
					d = -a.deltaY
				} else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
		if (b.freeMode) {
			var f = C.getWrapperTranslate() + d;
			if (f > 0 && (f = 0), f < -e() && (f = -e()), C.setWrapperTransition(0), C.setWrapperTranslate(f), C.updateActiveSlide(f), 0 === f || f === -e()) return
		} else(new Date).getTime() - U > 60 && (0 > d ? C.swipeNext() : C.swipePrev()), U = (new Date).getTime();
		return b.autoplay && C.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
	}

	function k(a) {
		C.allowSlideClick && (m(a), C.fireCallback(b.onSlideClick, C, a))
	}

	function l(a) {
		m(a), C.fireCallback(b.onSlideTouch, C, a)
	}

	function m(a) {
		if (a.currentTarget) C.clickedSlide = a.currentTarget;
		else {
			var c = a.srcElement;
			do {
				if (c.className.indexOf(b.slideClass) > -1) break;
				c = c.parentNode
			} while (c);
			C.clickedSlide = c
		}
		C.clickedSlideIndex = C.slides.indexOf(C.clickedSlide), C.clickedSlideLoopIndex = C.clickedSlideIndex - (C.loopedSlides || 0)
	}

	function n(a) {
		return C.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in a && a.stopPropagation(), !1)
	}

	function o(a) {
		return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1
	}

	function p(a) {
		if (b.preventLinks && (C.allowLinks = !0), C.isTouched || b.onlyExternal) return !1;
		if (b.noSwiping && (a.target || a.srcElement) && s(a.target || a.srcElement)) return !1;
		if ($ = !1, C.isTouched = !0, Z = "touchstart" === a.type, !Z || 1 === a.targetTouches.length) {
			C.callPlugins("onTouchStartBegin"), Z || C.isAndroid || (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
			var c = Z ? a.targetTouches[0].pageX : a.pageX || a.clientX,
				d = Z ? a.targetTouches[0].pageY : a.pageY || a.clientY;
			C.touches.startX = C.touches.currentX = c, C.touches.startY = C.touches.currentY = d, C.touches.start = C.touches.current = M ? c : d, C.setWrapperTransition(0), C.positions.start = C.positions.current = C.getWrapperTranslate(), C.setWrapperTranslate(C.positions.start), C.times.start = (new Date).getTime(), H = void 0, b.moveStartThreshold > 0 && (W = !1), b.onTouchStart && C.fireCallback(b.onTouchStart, C), C.callPlugins("onTouchStartEnd")
		}
	}

	function q(a) {
		if (C.isTouched && !b.onlyExternal && (!Z || "mousemove" !== a.type)) {
			var c = Z ? a.targetTouches[0].pageX : a.pageX || a.clientX,
				d = Z ? a.targetTouches[0].pageY : a.pageY || a.clientY;
			if ("undefined" == typeof H && M && (H = !!(H || Math.abs(d - C.touches.startY) > Math.abs(c - C.touches.startX))), "undefined" != typeof H || M || (H = !!(H || Math.abs(d - C.touches.startY) < Math.abs(c - C.touches.startX))), H) return void(C.isTouched = !1);
			if (a.assignedToSwiper) return void(C.isTouched = !1);
			if (a.assignedToSwiper = !0, b.preventLinks && (C.allowLinks = !1), b.onSlideClick && (C.allowSlideClick = !1), b.autoplay && C.stopAutoplay(!0), !Z || 1 === a.touches.length) {
				if (C.isMoved || (C.callPlugins("onTouchMoveStart"), b.loop && (C.fixLoop(), C.positions.start = C.getWrapperTranslate()), b.onTouchMoveStart && C.fireCallback(b.onTouchMoveStart, C)), C.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, C.touches.current = M ? c : d, C.positions.current = (C.touches.current - C.touches.start) * b.touchRatio + C.positions.start, C.positions.current > 0 && b.onResistanceBefore && C.fireCallback(b.onResistanceBefore, C, C.positions.current), C.positions.current < -e() && b.onResistanceAfter && C.fireCallback(b.onResistanceAfter, C, Math.abs(C.positions.current + e())), b.resistance && "100%" !== b.resistance) {
					var f;
					if (C.positions.current > 0 && (f = 1 - C.positions.current / I / 2, C.positions.current = .5 > f ? I / 2 : C.positions.current * f), C.positions.current < -e()) {
						var g = (C.touches.current - C.touches.start) * b.touchRatio + (e() + C.positions.start);
						f = (I + g) / I;
						var h = C.positions.current - g * (1 - f) / 2,
							i = -e() - I / 2;
						C.positions.current = i > h || 0 >= f ? i : h
					}
				}
				if (b.resistance && "100%" === b.resistance && (C.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (C.positions.current = 0), C.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (C.positions.current = -e())), !b.followFinger) return;
				if (b.moveStartThreshold)
					if (Math.abs(C.touches.current - C.touches.start) > b.moveStartThreshold || W) {
						if (!W) return W = !0, void(C.touches.start = C.touches.current);
						C.setWrapperTranslate(C.positions.current)
					} else C.positions.current = C.positions.start;
				else C.setWrapperTranslate(C.positions.current);
				return (b.freeMode || b.watchActiveIndex) && C.updateActiveSlide(C.positions.current), b.grabCursor && (C.container.style.cursor = "move", C.container.style.cursor = "grabbing", C.container.style.cursor = "-moz-grabbin", C.container.style.cursor = "-webkit-grabbing"), X || (X = C.touches.current), Y || (Y = (new Date).getTime()), C.velocity = (C.touches.current - X) / ((new Date).getTime() - Y) / 2, Math.abs(C.touches.current - X) < 2 && (C.velocity = 0), X = C.touches.current, Y = (new Date).getTime(), C.callPlugins("onTouchMoveEnd"), b.onTouchMove && C.fireCallback(b.onTouchMove, C), !1
			}
		}
	}

	function r() {
		if (H && C.swipeReset(), !b.onlyExternal && C.isTouched) {
			C.isTouched = !1, b.grabCursor && (C.container.style.cursor = "move", C.container.style.cursor = "grab", C.container.style.cursor = "-moz-grab", C.container.style.cursor = "-webkit-grab"), C.positions.current || 0 === C.positions.current || (C.positions.current = C.positions.start), b.followFinger && C.setWrapperTranslate(C.positions.current), C.times.end = (new Date).getTime(), C.touches.diff = C.touches.current - C.touches.start, C.touches.abs = Math.abs(C.touches.diff), C.positions.diff = C.positions.current - C.positions.start, C.positions.abs = Math.abs(C.positions.diff);
			var a = C.positions.diff,
				c = C.positions.abs,
				d = C.times.end - C.times.start;
			5 > c && 300 > d && C.allowLinks === !1 && (b.freeMode || 0 === c || C.swipeReset(), b.preventLinks && (C.allowLinks = !0), b.onSlideClick && (C.allowSlideClick = !0)), setTimeout(function() {
				b.preventLinks && (C.allowLinks = !0), b.onSlideClick && (C.allowSlideClick = !0)
			}, 100);
			var f = e();
			if (!C.isMoved && b.freeMode) return C.isMoved = !1, b.onTouchEnd && C.fireCallback(b.onTouchEnd, C), void C.callPlugins("onTouchEnd");
			if (!C.isMoved || C.positions.current > 0 || C.positions.current < -f) return C.swipeReset(), b.onTouchEnd && C.fireCallback(b.onTouchEnd, C), void C.callPlugins("onTouchEnd");
			if (C.isMoved = !1, b.freeMode) {
				if (b.freeModeFluid) {
					var g, h = 1e3 * b.momentumRatio,
						i = C.velocity * h,
						j = C.positions.current + i,
						k = !1,
						l = 20 * Math.abs(C.velocity) * b.momentumBounceRatio; - f > j && (b.momentumBounce && C.support.transitions ? (-l > j + f && (j = -f - l), g = -f, k = !0, $ = !0) : j = -f), j > 0 && (b.momentumBounce && C.support.transitions ? (j > l && (j = l), g = 0, k = !0, $ = !0) : j = 0), 0 !== C.velocity && (h = Math.abs((j - C.positions.current) / C.velocity)), C.setWrapperTranslate(j), C.setWrapperTransition(h), b.momentumBounce && k && C.wrapperTransitionEnd(function() {
						$ && (b.onMomentumBounce && C.fireCallback(b.onMomentumBounce, C), C.callPlugins("onMomentumBounce"), C.setWrapperTranslate(g), C.setWrapperTransition(300))
					}), C.updateActiveSlide(j)
				}
				return (!b.freeModeFluid || d >= 300) && C.updateActiveSlide(C.positions.current), b.onTouchEnd && C.fireCallback(b.onTouchEnd, C), void C.callPlugins("onTouchEnd")
			}
			G = 0 > a ? "toNext" : "toPrev", "toNext" === G && 300 >= d && (30 > c || !b.shortSwipes ? C.swipeReset() : C.swipeNext(!0)), "toPrev" === G && 300 >= d && (30 > c || !b.shortSwipes ? C.swipeReset() : C.swipePrev(!0));
			var m = 0;
			if ("auto" === b.slidesPerView) {
				for (var n, o = Math.abs(C.getWrapperTranslate()), p = 0, q = 0; q < C.slides.length; q++)
					if (n = M ? C.slides[q].getWidth(!0, b.roundLengths) : C.slides[q].getHeight(!0, b.roundLengths), p += n, p > o) {
						m = n;
						break
					}
				m > I && (m = I)
			} else m = E * b.slidesPerView;
			"toNext" === G && d > 300 && (c >= m * b.longSwipesRatio ? C.swipeNext(!0) : C.swipeReset()), "toPrev" === G && d > 300 && (c >= m * b.longSwipesRatio ? C.swipePrev(!0) : C.swipeReset()), b.onTouchEnd && C.fireCallback(b.onTouchEnd, C), C.callPlugins("onTouchEnd")
		}
	}

	function s(a) {
		var c = !1;
		do a.className.indexOf(b.noSwipingClass) > -1 && (c = !0), a = a.parentElement; while (!c && a.parentElement && -1 === a.className.indexOf(b.wrapperClass));
		return !c && a.className.indexOf(b.wrapperClass) > -1 && a.className.indexOf(b.noSwipingClass) > -1 && (c = !0), c
	}

	function t(a, b) {
		var c, d = document.createElement("div");
		return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML
	}

	function u(a, c, d) {
		function e() {
			var f = +new Date,
				l = f - g;
			h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (C.setWrapperTranslate(Math.round(h)), C._DOMAnimating = !0, window.setTimeout(function() {
				e()
			}, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && C.fireCallback(b.onSlideChangeEnd, C) : C.fireCallback(b.onSlideChangeEnd, C)), C.setWrapperTranslate(a), C._DOMAnimating = !1)
		}
		var f = "to" === c && d.speed >= 0 ? d.speed : b.speed,
			g = +new Date;
		if (C.support.transitions || !b.DOMAnimation) C.setWrapperTranslate(a), C.setWrapperTransition(f);
		else {
			var h = C.getWrapperTranslate(),
				i = Math.ceil((a - h) / f * (1e3 / 60)),
				j = h > a ? "toNext" : "toPrev",
				k = "toNext" === j ? h > a : a > h;
			if (C._DOMAnimating) return;
			e()
		}
		C.updateActiveSlide(a), b.onSlideNext && "next" === c && C.fireCallback(b.onSlideNext, C, a), b.onSlidePrev && "prev" === c && C.fireCallback(b.onSlidePrev, C, a), b.onSlideReset && "reset" === c && C.fireCallback(b.onSlideReset, C, a), ("next" === c || "prev" === c || "to" === c && d.runCallbacks === !0) && v(c)
	}

	function v(a) {
		if (C.callPlugins("onSlideChangeStart"), b.onSlideChangeStart)
			if (b.queueStartCallbacks && C.support.transitions) {
				if (C._queueStartCallbacks) return;
				C._queueStartCallbacks = !0, C.fireCallback(b.onSlideChangeStart, C, a), C.wrapperTransitionEnd(function() {
					C._queueStartCallbacks = !1
				})
			} else C.fireCallback(b.onSlideChangeStart, C, a);
		if (b.onSlideChangeEnd)
			if (C.support.transitions)
				if (b.queueEndCallbacks) {
					if (C._queueEndCallbacks) return;
					C._queueEndCallbacks = !0, C.wrapperTransitionEnd(function(c) {
						C.fireCallback(b.onSlideChangeEnd, c, a)
					})
				} else C.wrapperTransitionEnd(function(c) {
					C.fireCallback(b.onSlideChangeEnd, c, a)
				});
		else b.DOMAnimation || setTimeout(function() {
			C.fireCallback(b.onSlideChangeEnd, C, a)
		}, 10)
	}

	function w() {
		var a = C.paginationButtons;
		if (a)
			for (var b = 0; b < a.length; b++) C.h.removeEventListener(a[b], "click", y)
	}

	function x() {
		var a = C.paginationButtons;
		if (a)
			for (var b = 0; b < a.length; b++) C.h.addEventListener(a[b], "click", y)
	}

	function y(a) {
		for (var b, c = a.target || a.srcElement, d = C.paginationButtons, e = 0; e < d.length; e++) c === d[e] && (b = e);
		C.swipeTo(b)
	}

	function z() {
		_ = setTimeout(function() {
			b.loop ? (C.fixLoop(), C.swipeNext(!0)) : C.swipeNext(!0) || (b.autoplayStopOnLast ? (clearTimeout(_), _ = void 0) : C.swipeTo(0)), C.wrapperTransitionEnd(function() {
				"undefined" != typeof _ && z()
			})
		}, b.autoplay)
	}

	function A() {
		C.calcSlides(), b.loader.slides.length > 0 && 0 === C.slides.length && C.loadSlides(), b.loop && C.createLoop(), C.init(), f(), b.pagination && C.createPagination(!0), b.loop || b.initialSlide > 0 ? C.swipeTo(b.initialSlide, 0, !1) : C.updateActiveSlide(0), b.autoplay && C.startAutoplay(), C.centerIndex = C.activeIndex, b.onSwiperCreated && C.fireCallback(b.onSwiperCreated, C), C.callPlugins("onSwiperCreated")
	}
	if (document.body.__defineGetter__ && HTMLElement) {
		var B = HTMLElement.prototype;
		B.__defineGetter__ && B.__defineGetter__("outerHTML", function() {
			return (new XMLSerializer).serializeToString(this)
		})
	}
	if (window.getComputedStyle || (window.getComputedStyle = function(a) {
			return this.el = a, this.getPropertyValue = function(b) {
				var c = /(\-([a-z]){1})/g;
				return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function() {
					return arguments[2].toUpperCase()
				})), a.currentStyle[b] ? a.currentStyle[b] : null
			}, this
		}), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
			for (var c = b || 0, d = this.length; d > c; c++)
				if (this[c] === a) return c;
			return -1
		}), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
		var C = this;
		C.touches = {
			start: 0,
			startX: 0,
			startY: 0,
			current: 0,
			currentX: 0,
			currentY: 0,
			diff: 0,
			abs: 0
		}, C.positions = {
			start: 0,
			abs: 0,
			diff: 0,
			current: 0
		}, C.times = {
			start: 0,
			end: 0
		}, C.id = (new Date).getTime(), C.container = a.nodeType ? a : c(a)[0], C.isTouched = !1, C.isMoved = !1, C.activeIndex = 0, C.centerIndex = 0, C.activeLoaderIndex = 0, C.activeLoopIndex = 0, C.previousIndex = null, C.velocity = 0, C.snapGrid = [], C.slidesGrid = [], C.imagesToLoad = [], C.imagesLoaded = 0, C.wrapperLeft = 0, C.wrapperRight = 0, C.wrapperTop = 0, C.wrapperBottom = 0, C.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
		var D, E, F, G, H, I, J = {
			eventTarget: "wrapper",
			mode: "horizontal",
			touchRatio: 1,
			speed: 300,
			freeMode: !1,
			freeModeFluid: !1,
			momentumRatio: 1,
			momentumBounce: !0,
			momentumBounceRatio: 1,
			slidesPerView: 1,
			slidesPerGroup: 1,
			slidesPerViewFit: !0,
			simulateTouch: !0,
			followFinger: !0,
			shortSwipes: !0,
			longSwipesRatio: .5,
			moveStartThreshold: !1,
			onlyExternal: !1,
			createPagination: !0,
			pagination: !1,
			paginationElement: "span",
			paginationClickable: !1,
			paginationAsRange: !0,
			resistance: !0,
			scrollContainer: !1,
			preventLinks: !0,
			preventLinksPropagation: !1,
			noSwiping: !1,
			noSwipingClass: "swiper-no-swiping",
			initialSlide: 0,
			keyboardControl: !1,
			mousewheelControl: !1,
			mousewheelControlForceToAxis: !1,
			useCSS3Transforms: !0,
			autoplay: !1,
			autoplayDisableOnInteraction: !0,
			autoplayStopOnLast: !1,
			loop: !1,
			loopAdditionalSlides: 0,
			roundLengths: !1,
			calculateHeight: !1,
			cssWidthAndHeight: !1,
			updateOnImagesReady: !0,
			releaseFormElements: !0,
			watchActiveIndex: !1,
			visibilityFullFit: !1,
			offsetPxBefore: 0,
			offsetPxAfter: 0,
			offsetSlidesBefore: 0,
			offsetSlidesAfter: 0,
			centeredSlides: !1,
			queueStartCallbacks: !1,
			queueEndCallbacks: !1,
			autoResize: !0,
			resizeReInit: !1,
			DOMAnimation: !0,
			loader: {
				slides: [],
				slidesHTMLType: "inner",
				surroundGroups: 1,
				logic: "reload",
				loadAllSlides: !1
			},
			slideElement: "div",
			slideClass: "swiper-slide",
			slideActiveClass: "swiper-slide-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			wrapperClass: "swiper-wrapper",
			paginationElementClass: "swiper-pagination-switch",
			paginationActiveClass: "swiper-active-switch",
			paginationVisibleClass: "swiper-visible-switch"
		};
		b = b || {};
		for (var K in J)
			if (K in b && "object" == typeof b[K])
				for (var L in J[K]) L in b[K] || (b[K][L] = J[K][L]);
			else K in b || (b[K] = J[K]);
		C.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");
		var M = "horizontal" === b.mode,
			N = ["mousedown", "mousemove", "mouseup"];
		C.browser.ie10 && (N = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), C.browser.ie11 && (N = ["pointerdown", "pointermove", "pointerup"]), C.touchEvents = {
			touchStart: C.support.touch || !b.simulateTouch ? "touchstart" : N[0],
			touchMove: C.support.touch || !b.simulateTouch ? "touchmove" : N[1],
			touchEnd: C.support.touch || !b.simulateTouch ? "touchend" : N[2]
		};
		for (var O = C.container.childNodes.length - 1; O >= 0; O--)
			if (C.container.childNodes[O].className)
				for (var P = C.container.childNodes[O].className.split(/\s+/), Q = 0; Q < P.length; Q++) P[Q] === b.wrapperClass && (D = C.container.childNodes[O]);
		C.wrapper = D, C._extendSwiperSlide = function(a) {
			return a.append = function() {
				return b.loop ? a.insertAfter(C.slides.length - C.loopedSlides) : (C.wrapper.appendChild(a), C.reInit()), a
			}, a.prepend = function() {
				return b.loop ? (C.wrapper.insertBefore(a, C.slides[C.loopedSlides]), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : C.wrapper.insertBefore(a, C.wrapper.firstChild), C.reInit(), a
			}, a.insertAfter = function(c) {
				if ("undefined" == typeof c) return !1;
				var d;
				return b.loop ? (d = C.slides[c + 1 + C.loopedSlides], d ? C.wrapper.insertBefore(a, d) : C.wrapper.appendChild(a), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : (d = C.slides[c + 1], C.wrapper.insertBefore(a, d)), C.reInit(), a
			}, a.clone = function() {
				return C._extendSwiperSlide(a.cloneNode(!0))
			}, a.remove = function() {
				C.wrapper.removeChild(a), C.reInit()
			}, a.html = function(b) {
				return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a)
			}, a.index = function() {
				for (var b, c = C.slides.length - 1; c >= 0; c--) a === C.slides[c] && (b = c);
				return b
			}, a.isActive = function() {
				return a.index() === C.activeIndex ? !0 : !1
			}, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function(b) {
				return a.swiperSlideDataStorage[b]
			}, a.setData = function(b, c) {
				return a.swiperSlideDataStorage[b] = c, a
			}, a.data = function(b, c) {
				return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a)
			}, a.getWidth = function(b, c) {
				return C.h.getWidth(a, b, c)
			}, a.getHeight = function(b, c) {
				return C.h.getHeight(a, b, c)
			}, a.getOffset = function() {
				return C.h.getOffset(a)
			}, a
		}, C.calcSlides = function(a) {
			var c = C.slides ? C.slides.length : !1;
			C.slides = [], C.displaySlides = [];
			for (var d = 0; d < C.wrapper.childNodes.length; d++)
				if (C.wrapper.childNodes[d].className)
					for (var e = C.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++) f[i] === b.slideClass && C.slides.push(C.wrapper.childNodes[d]);
			for (d = C.slides.length - 1; d >= 0; d--) C._extendSwiperSlide(C.slides[d]);
			c !== !1 && (c !== C.slides.length || a) && (h(), g(), C.updateActiveSlide(), C.params.pagination && C.createPagination(), C.callPlugins("numberOfSlidesChanged"))
		}, C.createSlide = function(a, c, d) {
			c = c || C.params.slideClass, d = d || b.slideElement;
			var e = document.createElement(d);
			return e.innerHTML = a || "", e.className = c, C._extendSwiperSlide(e)
		}, C.appendSlide = function(a, b, c) {
			return a ? a.nodeType ? C._extendSwiperSlide(a).append() : C.createSlide(a, b, c).append() : void 0
		}, C.prependSlide = function(a, b, c) {
			return a ? a.nodeType ? C._extendSwiperSlide(a).prepend() : C.createSlide(a, b, c).prepend() : void 0
		}, C.insertSlideAfter = function(a, b, c, d) {
			return "undefined" == typeof a ? !1 : b.nodeType ? C._extendSwiperSlide(b).insertAfter(a) : C.createSlide(b, c, d).insertAfter(a)
		}, C.removeSlide = function(a) {
			if (C.slides[a]) {
				if (b.loop) {
					if (!C.slides[a + C.loopedSlides]) return !1;
					C.slides[a + C.loopedSlides].remove(), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()
				} else C.slides[a].remove();
				return !0
			}
			return !1
		}, C.removeLastSlide = function() {
			return C.slides.length > 0 ? (b.loop ? (C.slides[C.slides.length - 1 - C.loopedSlides].remove(), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : C.slides[C.slides.length - 1].remove(), !0) : !1
		}, C.removeAllSlides = function() {
			for (var a = C.slides.length - 1; a >= 0; a--) C.slides[a].remove()
		}, C.getSlide = function(a) {
			return C.slides[a]
		}, C.getLastSlide = function() {
			return C.slides[C.slides.length - 1]
		}, C.getFirstSlide = function() {
			return C.slides[0]
		}, C.activeSlide = function() {
			return C.slides[C.activeIndex]
		}, C.fireCallback = function() {
			var a = arguments[0];
			if ("[object Array]" === Object.prototype.toString.call(a))
				for (var c = 0; c < a.length; c++) "function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
			else "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && C.fireCallback(b["on" + a]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
		}, C.addCallback = function(a, b) {
			var c, e = this;
			return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b))
		}, C.removeCallbacks = function(a) {
			C.params["on" + a] && (C.params["on" + a] = null)
		};
		var R = [];
		for (var S in C.plugins)
			if (b[S]) {
				var T = C.plugins[S](C, b[S]);
				T && R.push(T)
			}
		C.callPlugins = function(a, b) {
			b || (b = {});
			for (var c = 0; c < R.length; c++) a in R[c] && R[c][a](b)
		}, !C.browser.ie10 && !C.browser.ie11 || b.onlyExternal || C.wrapper.classList.add("swiper-wp8-" + (M ? "horizontal" : "vertical")), b.freeMode && (C.container.className += " swiper-free-mode"), C.initialized = !1, C.init = function(a, c) {
			var d = C.h.getWidth(C.container, !1, b.roundLengths),
				e = C.h.getHeight(C.container, !1, b.roundLengths);
			if (d !== C.width || e !== C.height || a) {
				C.width = d, C.height = e;
				var f, g, h, i, j, k, l;
				I = M ? d : e;
				var m = C.wrapper;
				if (a && C.calcSlides(c), "auto" === b.slidesPerView) {
					var n = 0,
						o = 0;
					b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (M ? C.wrapperLeft = b.offsetPxBefore : C.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (M ? C.wrapperRight = b.offsetPxAfter : C.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (M ? (C.wrapperLeft = (I - this.slides[0].getWidth(!0, b.roundLengths)) / 2, C.wrapperRight = (I - C.slides[C.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (C.wrapperTop = (I - C.slides[0].getHeight(!0, b.roundLengths)) / 2, C.wrapperBottom = (I - C.slides[C.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), M ? (C.wrapperLeft >= 0 && (m.style.paddingLeft = C.wrapperLeft + "px"), C.wrapperRight >= 0 && (m.style.paddingRight = C.wrapperRight + "px")) : (C.wrapperTop >= 0 && (m.style.paddingTop = C.wrapperTop + "px"), C.wrapperBottom >= 0 && (m.style.paddingBottom = C.wrapperBottom + "px")), k = 0;
					var p = 0;
					for (C.snapGrid = [], C.slidesGrid = [], h = 0, l = 0; l < C.slides.length; l++) {
						f = C.slides[l].getWidth(!0, b.roundLengths), g = C.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));
						var q = M ? f : g;
						if (b.centeredSlides) {
							var r = l === C.slides.length - 1 ? 0 : C.slides[l + 1].getWidth(!0, b.roundLengths),
								s = l === C.slides.length - 1 ? 0 : C.slides[l + 1].getHeight(!0, b.roundLengths),
								t = M ? r : s;
							if (q > I) {
								if (b.slidesPerViewFit) C.snapGrid.push(k + C.wrapperLeft), C.snapGrid.push(k + q - I + C.wrapperLeft);
								else
									for (var u = 0; u <= Math.floor(q / (I + C.wrapperLeft)); u++) C.snapGrid.push(0 === u ? k + C.wrapperLeft : k + C.wrapperLeft + I * u);
								C.slidesGrid.push(k + C.wrapperLeft)
							} else C.snapGrid.push(p), C.slidesGrid.push(p);
							p += q / 2 + t / 2
						} else {
							if (q > I)
								if (b.slidesPerViewFit) C.snapGrid.push(k), C.snapGrid.push(k + q - I);
								else if (0 !== I)
								for (var v = 0; v <= Math.floor(q / I); v++) C.snapGrid.push(k + I * v);
							else C.snapGrid.push(k);
							else C.snapGrid.push(k);
							C.slidesGrid.push(k)
						}
						k += q, n += f, o += g
					}
					b.calculateHeight && (C.height = h), M ? (F = n + C.wrapperRight + C.wrapperLeft, m.style.width = n + "px", m.style.height = C.height + "px") : (F = o + C.wrapperTop + C.wrapperBottom, m.style.width = C.width + "px", m.style.height = o + "px")
				} else if (b.scrollContainer) m.style.width = "", m.style.height = "", i = C.slides[0].getWidth(!0, b.roundLengths), j = C.slides[0].getHeight(!0, b.roundLengths), F = M ? i : j, m.style.width = i + "px", m.style.height = j + "px", E = M ? i : j;
				else {
					if (b.calculateHeight) {
						for (h = 0, j = 0, M || (C.container.style.height = ""), m.style.height = "", l = 0; l < C.slides.length; l++) C.slides[l].style.height = "", h = Math.max(C.slides[l].getHeight(!0), h), M || (j += C.slides[l].getHeight(!0));
						g = h, C.height = g, M ? j = g : (I = g, C.container.style.height = I + "px")
					} else g = M ? C.height : C.height / b.slidesPerView, b.roundLengths && (g = Math.round(g)), j = M ? C.height : C.slides.length * g;
					for (f = M ? C.width / b.slidesPerView : C.width, b.roundLengths && (f = Math.round(f)), i = M ? C.slides.length * f : C.width, E = M ? f : g, b.offsetSlidesBefore > 0 && (M ? C.wrapperLeft = E * b.offsetSlidesBefore : C.wrapperTop = E * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (M ? C.wrapperRight = E * b.offsetSlidesAfter : C.wrapperBottom = E * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (M ? C.wrapperLeft = b.offsetPxBefore : C.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (M ? C.wrapperRight = b.offsetPxAfter : C.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (M ? (C.wrapperLeft = (I - E) / 2, C.wrapperRight = (I - E) / 2) : (C.wrapperTop = (I - E) / 2, C.wrapperBottom = (I - E) / 2)), M ? (C.wrapperLeft > 0 && (m.style.paddingLeft = C.wrapperLeft + "px"), C.wrapperRight > 0 && (m.style.paddingRight = C.wrapperRight + "px")) : (C.wrapperTop > 0 && (m.style.paddingTop = C.wrapperTop + "px"), C.wrapperBottom > 0 && (m.style.paddingBottom = C.wrapperBottom + "px")), F = M ? i + C.wrapperRight + C.wrapperLeft : j + C.wrapperTop + C.wrapperBottom, b.cssWidthAndHeight || (parseFloat(i) > 0 && (m.style.width = i + "px"), parseFloat(j) > 0 && (m.style.height = j + "px")), k = 0, C.snapGrid = [], C.slidesGrid = [], l = 0; l < C.slides.length; l++) C.snapGrid.push(k), C.slidesGrid.push(k), k += E, b.cssWidthAndHeight || (parseFloat(f) > 0 && (C.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (C.slides[l].style.height = g + "px"))
				}
				C.initialized ? (C.callPlugins("onInit"), b.onInit && C.fireCallback(b.onInit, C)) : (C.callPlugins("onFirstInit"), b.onFirstInit && C.fireCallback(b.onFirstInit, C)), C.initialized = !0
			}
		}, C.reInit = function(a) {
			C.init(!0, a)
		}, C.resizeFix = function(a) {
			C.callPlugins("beforeResizeFix"), C.init(b.resizeReInit || a), b.freeMode ? C.getWrapperTranslate() < -e() && (C.setWrapperTransition(0), C.setWrapperTranslate(-e())) : (C.swipeTo(b.loop ? C.activeLoopIndex : C.activeIndex, 0, !1), b.autoplay && (C.support.transitions && "undefined" != typeof _ ? "undefined" != typeof _ && (clearTimeout(_), _ = void 0, C.startAutoplay()) : "undefined" != typeof ab && (clearInterval(ab), ab = void 0, C.startAutoplay()))), C.callPlugins("afterResizeFix")
		}, C.destroy = function() {
			var a = C.h.removeEventListener,
				c = "wrapper" === b.eventTarget ? C.wrapper : C.container;
			C.browser.ie10 || C.browser.ie11 ? (a(c, C.touchEvents.touchStart, p), a(document, C.touchEvents.touchMove, q), a(document, C.touchEvents.touchEnd, r)) : (C.support.touch && (a(c, "touchstart", p), a(c, "touchmove", q), a(c, "touchend", r)), b.simulateTouch && (a(c, "mousedown", p), a(document, "mousemove", q), a(document, "mouseup", r))), b.autoResize && a(window, "resize", C.resizeFix), h(), b.paginationClickable && w(), b.mousewheelControl && C._wheelEvent && a(C.container, C._wheelEvent, j), b.keyboardControl && a(document, "keydown", i), b.autoplay && C.stopAutoplay(), C.callPlugins("onDestroy"), C = null
		}, C.disableKeyboardControl = function() {
			b.keyboardControl = !1, C.h.removeEventListener(document, "keydown", i)
		}, C.enableKeyboardControl = function() {
			b.keyboardControl = !0, C.h.addEventListener(document, "keydown", i)
		};
		var U = (new Date).getTime();
		if (b.grabCursor) {
			var V = C.container.style;
			V.cursor = "move", V.cursor = "grab", V.cursor = "-moz-grab", V.cursor = "-webkit-grab"
		}
		C.allowSlideClick = !0, C.allowLinks = !0;
		var W, X, Y, Z = !1,
			$ = !0;
		C.swipeNext = function(a) {
			!a && b.loop && C.fixLoop(), !a && b.autoplay && C.stopAutoplay(!0), C.callPlugins("onSwipeNext");
			var c = C.getWrapperTranslate(),
				d = c;
			if ("auto" === b.slidesPerView) {
				for (var f = 0; f < C.snapGrid.length; f++)
					if (-c >= C.snapGrid[f] && -c < C.snapGrid[f + 1]) {
						d = -C.snapGrid[f + 1];
						break
					}
			} else {
				var g = E * b.slidesPerGroup;
				d = -(Math.floor(Math.abs(c) / Math.floor(g)) * g + g)
			}
			return d < -e() && (d = -e()), d === c ? !1 : (u(d, "next"), !0)
		}, C.swipePrev = function(a) {
			!a && b.loop && C.fixLoop(), !a && b.autoplay && C.stopAutoplay(!0), C.callPlugins("onSwipePrev");
			var c, d = Math.ceil(C.getWrapperTranslate());
			if ("auto" === b.slidesPerView) {
				c = 0;
				for (var e = 1; e < C.snapGrid.length; e++) {
					if (-d === C.snapGrid[e]) {
						c = -C.snapGrid[e - 1];
						break
					}
					if (-d > C.snapGrid[e] && -d < C.snapGrid[e + 1]) {
						c = -C.snapGrid[e];
						break
					}
				}
			} else {
				var f = E * b.slidesPerGroup;
				c = -(Math.ceil(-d / f) - 1) * f
			}
			return c > 0 && (c = 0), c === d ? !1 : (u(c, "prev"), !0)
		}, C.swipeReset = function() {
			C.callPlugins("onSwipeReset"); {
				var a, c = C.getWrapperTranslate(),
					d = E * b.slidesPerGroup; - e()
			}
			if ("auto" === b.slidesPerView) {
				a = 0;
				for (var f = 0; f < C.snapGrid.length; f++) {
					if (-c === C.snapGrid[f]) return;
					if (-c >= C.snapGrid[f] && -c < C.snapGrid[f + 1]) {
						a = C.positions.diff > 0 ? -C.snapGrid[f + 1] : -C.snapGrid[f];
						break
					}
				} - c >= C.snapGrid[C.snapGrid.length - 1] && (a = -C.snapGrid[C.snapGrid.length - 1]), c <= -e() && (a = -e())
			} else a = 0 > c ? Math.round(c / d) * d : 0;
			return b.scrollContainer && (a = 0 > c ? c : 0), a < -e() && (a = -e()), b.scrollContainer && I > E && (a = 0), a === c ? !1 : (u(a, "reset"), !0)
		}, C.swipeTo = function(a, c, d) {
			a = parseInt(a, 10), C.callPlugins("onSwipeTo", {
				index: a,
				speed: c
			}), b.loop && (a += C.loopedSlides);
			var f = C.getWrapperTranslate();
			if (!(a > C.slides.length - 1 || 0 > a)) {
				var g;
				return g = "auto" === b.slidesPerView ? -C.slidesGrid[a] : -a * E, g < -e() && (g = -e()), g === f ? !1 : (d = d === !1 ? !1 : !0, u(g, "to", {
					index: a,
					speed: c,
					runCallbacks: d
				}), !0)
			}
		}, C._queueStartCallbacks = !1, C._queueEndCallbacks = !1, C.updateActiveSlide = function(a) {
			if (C.initialized && 0 !== C.slides.length) {
				C.previousIndex = C.activeIndex, "undefined" == typeof a && (a = C.getWrapperTranslate()), a > 0 && (a = 0);
				var c;
				if ("auto" === b.slidesPerView) {
					if (C.activeIndex = C.slidesGrid.indexOf(-a), C.activeIndex < 0) {
						for (c = 0; c < C.slidesGrid.length - 1 && !(-a > C.slidesGrid[c] && -a < C.slidesGrid[c + 1]); c++);
						var d = Math.abs(C.slidesGrid[c] + a),
							e = Math.abs(C.slidesGrid[c + 1] + a);
						C.activeIndex = e >= d ? c : c + 1
					}
				} else C.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / E);
				if (C.activeIndex === C.slides.length && (C.activeIndex = C.slides.length - 1), C.activeIndex < 0 && (C.activeIndex = 0), C.slides[C.activeIndex]) {
					if (C.calcVisibleSlides(a), C.support.classList) {
						var f;
						for (c = 0; c < C.slides.length; c++) f = C.slides[c], f.classList.remove(b.slideActiveClass), C.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
						C.slides[C.activeIndex].classList.add(b.slideActiveClass)
					} else {
						var g = new RegExp("\\s*" + b.slideActiveClass),
							h = new RegExp("\\s*" + b.slideVisibleClass);
						for (c = 0; c < C.slides.length; c++) C.slides[c].className = C.slides[c].className.replace(g, "").replace(h, ""), C.visibleSlides.indexOf(C.slides[c]) >= 0 && (C.slides[c].className += " " + b.slideVisibleClass);
						C.slides[C.activeIndex].className += " " + b.slideActiveClass
					}
					if (b.loop) {
						var i = C.loopedSlides;
						C.activeLoopIndex = C.activeIndex - i, C.activeLoopIndex >= C.slides.length - 2 * i && (C.activeLoopIndex = C.slides.length - 2 * i - C.activeLoopIndex), C.activeLoopIndex < 0 && (C.activeLoopIndex = C.slides.length - 2 * i + C.activeLoopIndex), C.activeLoopIndex < 0 && (C.activeLoopIndex = 0)
					} else C.activeLoopIndex = C.activeIndex;
					b.pagination && C.updatePagination(a)
				}
			}
		}, C.createPagination = function(a) {
			if (b.paginationClickable && C.paginationButtons && w(), C.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
				var d = "",
					e = C.slides.length,
					f = e;
				b.loop && (f -= 2 * C.loopedSlides);
				for (var g = 0; f > g; g++) d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
				C.paginationContainer.innerHTML = d
			}
			C.paginationButtons = c("." + b.paginationElementClass, C.paginationContainer), a || C.updatePagination(), C.callPlugins("onCreatePagination"), b.paginationClickable && x()
		}, C.updatePagination = function(a) {
			if (b.pagination && !(C.slides.length < 1)) {
				var d = c("." + b.paginationActiveClass, C.paginationContainer);
				if (d) {
					var e = C.paginationButtons;
					if (0 !== e.length) {
						for (var f = 0; f < e.length; f++) e[f].className = b.paginationElementClass;
						var g = b.loop ? C.loopedSlides : 0;
						if (b.paginationAsRange) {
							C.visibleSlides || C.calcVisibleSlides(a);
							var h, i = [];
							for (h = 0; h < C.visibleSlides.length; h++) {
								var j = C.slides.indexOf(C.visibleSlides[h]) - g;
								b.loop && 0 > j && (j = C.slides.length - 2 * C.loopedSlides + j), b.loop && j >= C.slides.length - 2 * C.loopedSlides && (j = C.slides.length - 2 * C.loopedSlides - j, j = Math.abs(j)), i.push(j)
							}
							for (h = 0; h < i.length; h++) e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
							b.loop ? void 0 !== e[C.activeLoopIndex] && (e[C.activeLoopIndex].className += " " + b.paginationActiveClass) : e[C.activeIndex].className += " " + b.paginationActiveClass
						} else b.loop ? e[C.activeLoopIndex] && (e[C.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[C.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass
					}
				}
			}
		}, C.calcVisibleSlides = function(a) {
			var c = [],
				d = 0,
				e = 0,
				f = 0;
			M && C.wrapperLeft > 0 && (a += C.wrapperLeft), !M && C.wrapperTop > 0 && (a += C.wrapperTop);
			for (var g = 0; g < C.slides.length; g++) {
				d += e, e = "auto" === b.slidesPerView ? M ? C.h.getWidth(C.slides[g], !0, b.roundLengths) : C.h.getHeight(C.slides[g], !0, b.roundLengths) : E, f = d + e;
				var h = !1;
				b.visibilityFullFit ? (d >= -a && -a + I >= f && (h = !0), -a >= d && f >= -a + I && (h = !0)) : (f > -a && -a + I >= f && (h = !0), d >= -a && -a + I > d && (h = !0), -a > d && f > -a + I && (h = !0)), h && c.push(C.slides[g])
			}
			0 === c.length && (c = [C.slides[C.activeIndex]]), C.visibleSlides = c
		};
		var _, ab;
		C.startAutoplay = function() {
			if (C.support.transitions) {
				if ("undefined" != typeof _) return !1;
				if (!b.autoplay) return;
				C.callPlugins("onAutoplayStart"), b.onAutoplayStart && C.fireCallback(b.onAutoplayStart, C), z()
			} else {
				if ("undefined" != typeof ab) return !1;
				if (!b.autoplay) return;
				C.callPlugins("onAutoplayStart"), b.onAutoplayStart && C.fireCallback(b.onAutoplayStart, C), ab = setInterval(function() {
					b.loop ? (C.fixLoop(), C.swipeNext(!0)) : C.swipeNext(!0) || (b.autoplayStopOnLast ? (clearInterval(ab), ab = void 0) : C.swipeTo(0))
				}, b.autoplay)
			}
		}, C.stopAutoplay = function(a) {
			if (C.support.transitions) {
				if (!_) return;
				_ && clearTimeout(_), _ = void 0, a && !b.autoplayDisableOnInteraction && C.wrapperTransitionEnd(function() {
					z()
				}), C.callPlugins("onAutoplayStop"), b.onAutoplayStop && C.fireCallback(b.onAutoplayStop, C)
			} else ab && clearInterval(ab), ab = void 0, C.callPlugins("onAutoplayStop"), b.onAutoplayStop && C.fireCallback(b.onAutoplayStop, C)
		}, C.loopCreated = !1, C.removeLoopedSlides = function() {
			if (C.loopCreated)
				for (var a = 0; a < C.slides.length; a++) C.slides[a].getData("looped") === !0 && C.wrapper.removeChild(C.slides[a])
		}, C.createLoop = function() {
			if (0 !== C.slides.length) {
				C.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : b.slidesPerView + b.loopAdditionalSlides, C.loopedSlides > C.slides.length && (C.loopedSlides = C.slides.length);
				var a, c = "",
					d = "",
					e = "",
					f = C.slides.length,
					g = Math.floor(C.loopedSlides / f),
					h = C.loopedSlides % f;
				for (a = 0; g * f > a; a++) {
					var i = a;
					if (a >= f) {
						var j = Math.floor(a / f);
						i = a - f * j
					}
					e += C.slides[i].outerHTML
				}
				for (a = 0; h > a; a++) d += t(b.slideDuplicateClass, C.slides[a].outerHTML);
				for (a = f - h; f > a; a++) c += t(b.slideDuplicateClass, C.slides[a].outerHTML);
				var k = c + e + D.innerHTML + e + d;
				for (D.innerHTML = k, C.loopCreated = !0, C.calcSlides(), a = 0; a < C.slides.length; a++)(a < C.loopedSlides || a >= C.slides.length - C.loopedSlides) && C.slides[a].setData("looped", !0);
				C.callPlugins("onCreateLoop")
			}
		}, C.fixLoop = function() {
			var a;
			C.activeIndex < C.loopedSlides ? (a = C.slides.length - 3 * C.loopedSlides + C.activeIndex, C.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && C.activeIndex >= 2 * C.loopedSlides || C.activeIndex > C.slides.length - 2 * b.slidesPerView) && (a = -C.slides.length + C.activeIndex + C.loopedSlides, C.swipeTo(a, 0, !1))
		}, C.loadSlides = function() {
			var a = "";
			C.activeLoaderIndex = 0;
			for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++) a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
			C.wrapper.innerHTML = a, C.calcSlides(!0), b.loader.loadAllSlides || C.wrapperTransitionEnd(C.reloadSlides, !0)
		}, C.reloadSlides = function() {
			var a = b.loader.slides,
				c = parseInt(C.activeSlide().data("swiperindex"), 10);
			if (!(0 > c || c > a.length - 1)) {
				C.activeLoaderIndex = c;
				var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
					e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
				if (c > 0) {
					var f = -E * (c - d);
					C.setWrapperTranslate(f), C.setWrapperTransition(0)
				}
				var g;
				if ("reload" === b.loader.logic) {
					C.wrapper.innerHTML = "";
					var h = "";
					for (g = d; e >= g; g++) h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
					C.wrapper.innerHTML = h
				} else {
					var i = 1e3,
						j = 0;
					for (g = 0; g < C.slides.length; g++) {
						var k = C.slides[g].data("swiperindex");
						d > k || k > e ? C.wrapper.removeChild(C.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j))
					}
					for (g = d; e >= g; g++) {
						var l;
						i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], C.wrapper.insertBefore(l, C.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], C.wrapper.appendChild(l))
					}
				}
				C.reInit(!0)
			}
		}, A()
	}
};
Swiper.prototype = {
	plugins: {},
	wrapperTransitionEnd: function(a, b) {
		"use strict";

		function c() {
			if (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b)
				for (d = 0; d < g.length; d++) e.h.removeEventListener(f, g[d], c)
		}
		var d, e = this,
			f = e.wrapper,
			g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
		if (a)
			for (d = 0; d < g.length; d++) e.h.addEventListener(f, g[d], c)
	},
	getWrapperTranslate: function(a) {
		"use strict";
		var b, c, d, e, f = this.wrapper;
		return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix(d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0
	},
	setWrapperTranslate: function(a, b, c) {
		"use strict";
		var d, e = this.wrapper.style,
			f = {
				x: 0,
				y: 0,
				z: 0
			};
		3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f)
	},
	setWrapperTransition: function(a) {
		"use strict";
		var b = this.wrapper.style;
		b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {
			duration: a
		}), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a)
	},
	h: {
		getWidth: function(a, b, c) {
			"use strict";
			var d = window.getComputedStyle(a, null).getPropertyValue("width"),
				e = parseFloat(d);
			return (isNaN(e) || d.indexOf("%") > 0) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.round(e) : e
		},
		getHeight: function(a, b, c) {
			"use strict";
			if (b) return a.offsetHeight;
			var d = window.getComputedStyle(a, null).getPropertyValue("height"),
				e = parseFloat(d);
			return (isNaN(e) || d.indexOf("%") > 0) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.round(e) : e
		},
		getOffset: function(a) {
			"use strict";
			var b = a.getBoundingClientRect(),
				c = document.body,
				d = a.clientTop || c.clientTop || 0,
				e = a.clientLeft || c.clientLeft || 0,
				f = window.pageYOffset || a.scrollTop,
				g = window.pageXOffset || a.scrollLeft;
			return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), {
				top: b.top + f - d,
				left: b.left + g - e
			}
		},
		windowWidth: function() {
			"use strict";
			return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
		},
		windowHeight: function() {
			"use strict";
			return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
		},
		windowScroll: function() {
			"use strict";
			return "undefined" != typeof pageYOffset ? {
				left: window.pageXOffset,
				top: window.pageYOffset
			} : document.documentElement ? {
				left: document.documentElement.scrollLeft,
				top: document.documentElement.scrollTop
			} : void 0
		},
		addEventListener: function(a, b, c, d) {
			"use strict";
			"undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		removeEventListener: function(a, b, c, d) {
			"use strict";
			"undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
		}
	},
	setTransform: function(a, b) {
		"use strict";
		var c = a.style;
		c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b
	},
	setTranslate: function(a, b) {
		"use strict";
		var c = a.style,
			d = {
				x: b.x || 0,
				y: b.y || 0,
				z: b.z || 0
			},
			e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";
		c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px")
	},
	setTransition: function(a, b) {
		"use strict";
		var c = a.style;
		c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms"
	},
	support: {
		touch: window.Modernizr && Modernizr.touch === !0 || function() {
			"use strict";
			return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
		}(),
		transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
			"use strict";
			var a = document.createElement("div").style;
			return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
		}(),
		transforms: window.Modernizr && Modernizr.csstransforms === !0 || function() {
			"use strict";
			var a = document.createElement("div").style;
			return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a
		}(),
		transitions: window.Modernizr && Modernizr.csstransitions === !0 || function() {
			"use strict";
			var a = document.createElement("div").style;
			return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a
		}(),
		classList: function() {
			"use strict";
			var a = document.createElement("div").style;
			return "classList" in a
		}()
	},
	browser: {
		ie8: function() {
			"use strict";
			var a = -1;
			if ("Microsoft Internet Explorer" === navigator.appName) {
				var b = navigator.userAgent,
					c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
				null !== c.exec(b) && (a = parseFloat(RegExp.$1))
			}
			return -1 !== a && 9 > a
		}(),
		ie10: window.navigator.msPointerEnabled,
		ie11: window.navigator.pointerEnabled
	}
}, (window.jQuery || window.Zepto) && ! function(a) {
	"use strict";
	a.fn.swiper = function(b) {
		var c = new Swiper(a(this)[0], b);
		return a(this).data("swiper", c), c
	}
}(window.jQuery || window.Zepto), "undefined" != typeof module && (module.exports = Swiper), "function" == typeof define && define.amd && define([], function() {
	"use strict";
	return Swiper
});
var CompoundCharts = {};
! function() {
	function a(a) {
		this.config = a, this.init()
	}
	a.prototype = {
		addLabel: function() {
			var a = this.config,
				b = this.config.container,
				c = [
					["left", "right"],
					["right", "left"]
				],
				d = c[a.posType],
				e = "";
			a.values.enabled && (e = '<ul class="value ' + d[0] + '"><li class="bubble-num">' + a.values.data.join('</li><li class="bubble-num">') + "</li></ul>");
			var f = "";
			a.labels.enabled && (f = '<ul class="company ' + d[1] + '"><li>' + a.labels.data.join("</li><li>") + "</li></ul>");
			var g = a.values.data.length,
				h = this.lineHeight = (b.height() - 20) / g,
				i = (a.labels.enabled ? e : "", $('<div class="bubble-container">' + e + f + "</div>").css({
					height: g * h + "px",
					width: b.width() + "px"
				}).appendTo(b));
			i.find("li").css({
				height: h + "px",
				lineHeight: h + "px"
			}), this.bubbleContainer = i
		},
		addBubble: function() {
			var a = this.config,
				b = a.values.data.length,
				c = this.bubbleContainer,
				d = this;
			a.values.data.forEach(function(e, f) {
				var g = e * a.radiusBase,
					h = a.bubble.className;
				$('<div class="bubble">' + (a.bubble.innerLabels[f] || "") + "</div>").css({
					position: "absolute",
					width: g + "px",
					height: g + "px",
					lineHeight: g + "px",
					textAlign: "center",
					left: (c.width() - g) / 2 + "px",
					top: (b - .5) * d.lineHeight - g / 2 + "px",
					"-webkit-transform": "scale(0.1)",
					zIndex: b - f
				}).appendTo(c).addClass("string" == typeof h ? h : h[f])
			}), this.bubble = this.bubbleContainer.find(".bubble")
		},
		init: function() {
			this.addLabel(), this.addBubble()
		},
		update: function() {
			var a = this.bubble,
				b = this.config,
				c = b.values.data.length,
				d = this;
			b.values.data.forEach(function(b, e) {
				var f = a[e];
				f.offsetWidth, $(f).css({
					"-webkit-transform": "translate3d(0px, " + (e - c + 1) * d.lineHeight + "px, 0px) scale(1)"
				})
			})
		}
	}, CompoundCharts.BubbleChart = a
}(),
function() {
	function a(a, b) {
		this.containerId = a, this.config = b, this.init()
	}
	a.prototype = {
		addDonut: function() {
			this.donut = new kc.PieChart(this.containerId, this.config)
		},
		addCenterRound: function(a, b, c) {
			{
				var d = $("#" + this.containerId)[0];
				new Com.CenterLabel(d, a, b, c)
			}
		},
		init: function() {
			this.addDonut()
		},
		getLabelPoints: function(a) {
			var b = this.donut.getPlots().pies.param.list,
				c = this.donut.getCenter();
			return b.map(function(b) {
				var d = a,
					e = b.startAngle + b.pieAngle / 2,
					f = e - 90,
					g = f / 180 * Math.PI;
				return {
					x: c.x + d * Math.cos(g),
					y: c.y + d * Math.sin(g),
					angle: f
				}
			})
		},
		update: function() {
			this.donut.update()
		}
	}, CompoundCharts.DonutRoundChart = a
}(),
function() {
	function a(a, b, c) {
		this.config = b, this.data = c, this.donut = new kc.PieChart(a), this.donut.setConfig(b)
	}
	a.prototype = {
		select: function(a) {
			this.config.series = [this.data[a]], this.donut.update(this.config)
		},
		autoRun: function(a, b, c) {
			var d = this;
			this.data.forEach(function(e, f) {
				! function(e) {
					setTimeout(function() {
						c && d.select(e), b(f)
					}, e * a)
				}(f)
			})
		},
		getTipPoints: function(a) {
			var b = this.donut.getPlots().pies.param.list,
				c = this.donut.getCenter(),
				d = this;
			return b.map(function(b) {
				var e = a || d.config.plotOptions.pie.outerRadius + 10,
					f = b.startAngle + b.pieAngle / 2,
					g = f - 90,
					h = g / 180 * Math.PI;
				return {
					x: c.x + e * Math.cos(h),
					y: c.y + e * Math.sin(h),
					angle: g
				}
			})
		}
	}, CompoundCharts.DonutGroupChart = a
}(), $.fn.animClass = function(a) {
	var b = $(this).removeClass(a);
	setTimeout(function() {
		b.addClass(a)
	}, 50)
}, Utils = {
	addTip: function(a) {
		var b = a.hit === !1 ? "" : '<div class="hit" style="border-top-color: ' + a.bgColor + '"></div>';
		return $("<div " + (a.id ? "id=" + a.id : "") + ' class="tip" style="background-color:' + a.bgColor + '"><span class="content">' + a.content + "</span>" + b + "</div>").appendTo(a.container).css(a.style)
	},
	addTip2: function(a) {
		function b() {
			return $('<div class="tip-2 hit-' + a.pos + '">' + a.content + '<div class="hit" style="border-top-color: ' + a.bgColor + '"></div></div>').appendTo(a.container).css({
				left: a.left + "px",
				top: a.top + "px",
				right: a.right + "px",
				bottom: a.bottom + "px",
				backgroundColor: a.bgColor,
				color: a.color || "#000"
			}).addClass("tip-2-do-anim")
		}
		var c = a.delay || 0;
		return c ? void setTimeout(function() {
			b()
		}, c) : b()
	},
	arraySum: function(a) {
		var b = 0;
		return a.forEach(function(a) {
			b += a
		}), b
	},
	angle2radian: function(a) {
		return a / 180 * Math.PI
	},
	once: function(a) {
		var b = a;
		return function() {
			b(), b = function() {
				return !1
			}
		}
	}
};
var Charts = {
	_all: {},
	add: function(a, b) {
		this._all[a] = b
	},
	get: function(a) {
		return this._all[a]
	}
};
! function() {
	var a, b = {
			color: ["#46dffa", "#70ce00", "#ddca00", "#f68500"],
			plotOptions: {
				pie: {
					center: {},
					shadow: {
						enabled: !1,
						size: 4,
						x: 0,
						y: 0,
						color: "rgba( 0, 0, 0, 0.3 )"
					},
					innerRadius: 42,
					outerRadius: 78,
					incrementRadius: 30,
					stroke: {
						width: 0
					}
				},
				label: {
					enabled: !1
				}
			},
			legend: {
				enabled: !1,
				level: "data"
			},
			animation: {
				enabled: !0,
				duration: 600,
				mode: "ease"
			}
		},
		c = [{
			name: "2013.12",
			data: [{
				name: "手机客户端",
				value: 44
			}, {
				name: "手机网页",
				value: 23
			}, {
				name: "PC客户端",
				value: 23
			}, {
				name: "其他",
				value: 9
			}]
		}, {
			name: "2014.06",
			data: [{
				name: "手机客户端",
				value: 52
			}, {
				name: "手机网页",
				value: 25
			}, {
				name: "PC客户端",
				value: 13
			}, {
				name: "其他",
				value: 9
			}]
		}],
		d = [{
			name: "百度搜索",
			pos: [{
				x: -21,
				y: 56
			}, {
				x: -46,
				y: 37
			}]
		}, {
			name: "百度手机助手",
			pos: [{
				x: -55,
				y: -18
			}, {
				x: -49,
				y: -35
			}]
		}, {
			name: "百度手机助手",
			pos: [{
				x: 40,
				y: -45
			}, {
				x: 43,
				y: -45
			}]
		}, {
			name: "安卓市场",
			pos: [{
				x: 60,
				y: 0
			}, {
				x: 63,
				y: 6
			}]
		}, {
			name: "91助手",
			pos: [{
				x: 46,
				y: 41
			}, {
				x: 33,
				y: 51
			}]
		}];
	Charts.add("donut", {
		init: function() {
			function e(a) {
				i.each(function(b, c) {
					var e = d[b].pos[a];
					$(c).css({
						"-webkit-transition": "500ms",
						"-webkit-transform": "translate3d(" + e.x + "px, " + e.y + "px, 0)"
					})
				})
			}
			var f = $("#donut"),
				g = f.width(),
				h = f.height();
			b.plotOptions.pie.center = {
				x: g / 2,
				y: h / 2
			}, a = new CompoundCharts.DonutGroupChart("donut", b, c), a.autoRun(1e3, function(b) {
				a.change(b)
			}), setTimeout(function() {
				$(".shadow").css("opacity", 1)
			}, 600), f.find("svg").css({
				position: "relative",
				zIndex: 3
			});
			var i = $(".icon").css({
				left: g / 2 - 11 + "px",
				top: h / 2 - 11 + "px",
				zIndex: 4
			});
			a.change = function(b) {
				a.select(b), e(b)
			}
		},
		select: function(b) {
			a.change(b)
		}
	})
}(),
function() {
	var a = {
			plotOptions: {
				pie: {
					shadow: {
						enabled: !1,
						size: 4,
						x: 0,
						y: 0,
						color: "rgba( 0, 0, 0, 0.3 )"
					},
					innerRadius: 52,
					outerRadius: 136,
					stroke: {
						width: 1,
						color: "#a43782"
					}
				},
				label: {
					enabled: !1,
					distance: 57
				}
			},
			legend: {
				enabled: !1,
				level: "data"
			},
			animation: {
				enabled: !1,
				duration: 600,
				mode: "ease"
			},
			series: [{
				name: "",
				data: [{
					name: "1",
					color: "#602d4f",
					value: 1
				}, {
					name: "2",
					color: "#602d4f",
					value: 1
				}, {
					name: "3",
					color: "#602d4f",
					value: 1
				}, {
					name: "4",
					color: "#602d4f",
					value: 1
				}, {
					name: "5",
					color: "#602d4f",
					value: 1
				}, {
					name: "6",
					color: "#602d4f",
					value: 1
				}, {
					name: "7",
					color: "#602d4f",
					value: 1
				}, {
					name: "8",
					color: "#602d4f",
					value: 1
				}, {
					name: "9",
					color: "#602d4f",
					value: 1
				}, {
					name: "10",
					color: "#602d4f",
					value: 1
				}]
			}]
		},
		b = [{
			name: "安卓市场",
			y: -183
		}, {
			name: "悠悠村",
			y: -219
		}, {
			name: "百度<br>手机助手<br>web版",
			y: -30
		}, {
			name: "苹果园",
			y: -73
		}, {
			name: " 91助手<br>(iOS)",
			y: -146
		}, {
			name: "91桌面",
			y: -108
		}, {
			name: "手机百度",
			y: -264
		}, {
			name: "移动搜索",
			y: 4
		}, {
			name: "百度<br>手机助手",
			y: -35
		}, {
			name: "91助手",
			y: -108
		}];
	Charts.add("donut2", {
		init: function() {
			var c = $("#donut2").css({
					"-webkit-transition": "opacity 800ms",
					opacity: 0
				}),
				d = c.width(),
				e = c.height();
			a.plotOptions.pie.center = {
				x: d / 2,
				y: e / 2
			};
			var f = new CompoundCharts.DonutRoundChart("donut2", a);
			new Com.CenterLabel($(".donut .center"), "分发矩阵", {}, "distribute-center"), f.update(), setTimeout(function() {
				c.css("opacity", 1)
			}, 200);
			var g = a.plotOptions.label.distance,
				h = f.getLabelPoints(g),
				i = f.getLabelPoints(g + 200);
			i.forEach(function(a, d) {
				var e = b[d],
					f = {
						position: "absolute",
						left: 0,
						top: 0,
						"-webkit-transform": "",
						width: "200px",
						color: "#FFF",
						"font-size": "12px",
						lineHeight: "11px",
						"background-image": "url(./shushuo.baidu.com.mobile.images/icons.png)",
						"background-repeat": "no-repeat",
						"background-size": "22px",
						"background-position": "0px " + e.y + "px"
					};
				e.name.indexOf("<br") >= 0 ? f["padding-left"] = "23px" : f.padding = "8px 0 8px 23px";
				var g = $('<div class="label">' + e.name + "</div>").css(f).appendTo(c);
				g.css({
					"margin-top": -g.height() / 2 + "px",
					"-webkit-transform-origin": "0 50%",
					"-webkit-transform": "translate3d(" + a.x + "px," + a.y + "px,0) rotate(" + a.angle + "deg)"
				})
			});
			var j = $(".label", c),
				k = j.length;
			setTimeout(function() {
				h.forEach(function(a, b) {
					$(j[b]).css({
						"-webkit-transition": "400ms ease " + 300 * (k - 1 - b) + "ms",
						"-webkit-transform": "translate3d(" + a.x + "px," + a.y + "px,0) rotate(" + a.angle + "deg)"
					})
				})
			}, 500);
			var l = function() {
					var a = 360 / k,
						b = 1;
					$(".donut").hammer().on("tap", function() {
						c.css({
							"-webkit-transition": "300ms ease",
							"-webkit-transform": "rotate(" + a * b++ +"deg)"
						})
					})
				},
				m = function() {
					$(".donut").hammer().off("tap")
				};
			return setTimeout(function() {
				l()
			}, 400 * (k - 1)), {
				unbind: m
			}
		}
	})
}(),
function() {
	var a = {
		color: ["#fbd204", "#fd9902"],
		xAxis: {
			categories: ["整体应用市场", "百度应用市场"],
			ticks: {
				enabled: !1
			},
			margin: {
				right: 50,
				left: 50
			},
			axis: {
				enabled: !1
			},
			padding: {
				left: 50,
				right: 50
			},
			label: {
				enabled: !0,
				rotate: 0,
				font: {
					color: "#FFF",
					fontSize: 10
				}
			}
		},
		yAxis: {
			min: 0,
			ticks: {
				enabled: !0,
				color: "rgba(255, 255, 255, 0.2)",
				width: 1,
				dash: null
			},
			grid: [0, 1, 2, 3, 4],
			label: {
				enabled: !1,
				rotate: 0,
				font: {
					color: "#FFF",
					fontSize: 10
				},
				format: function(a) {
					return parseInt(100 * a) + "%"
				}
			},
			axis: {
				enabled: !1
			},
			padding: {
				top: 0,
				bottom: 0
			}
		},
		plotOptions: {
			column: {
				width: 35,
				margin: 0
			},
			label: {
				enabled: !1
			}
		},
		legend: {
			enabled: !1
		},
		interaction: {
			onStickHover: null
		},
		animation: {
			enabled: !0,
			duration: 1500,
			mode: "ease",
			delayInterval: 200
		},
		series: [{
			name: "2013Q4",
			data: [3, 1.25]
		}, {
			name: "2014Q2",
			data: [3.8, 1.7]
		}]
	};
	Charts.add("column", {
		init: function() {
			var b = ($("#column"), new kc.ColumnChart("column"));
			b.update(a)
		}
	})
}(),
function() {
	var a = {
		color: ["#fbd204", "#da0f04"],
		xAxis: {
			categories: ["学生", "城市白领", "城市打工族", "农村用户"],
			ticks: {
				enabled: !1
			},
			margin: {
				right: 30,
				left: 50
			},
			axis: {
				enabled: !1
			},
			padding: {
				left: 18,
				right: 18
			},
			label: {
				enabled: !0,
				rotate: 0,
				font: {
					color: "#FFF",
					fontSize: 10
				}
			}
		},
		yAxis: {
			min: 0,
			ticks: {
				enabled: !0,
				color: "rgba(255, 255, 255, 0.2)",
				width: 1,
				dash: null
			},
			grid: [0, 1, 2, 3],
			label: {
				enabled: !0,
				rotate: 0,
				font: {
					color: "#FFF",
					fontSize: 10
				}
			},
			axis: {
				enabled: !1
			},
			padding: {
				top: 0,
				bottom: 0
			},
			margin: {
				top: 10,
				bottom: 30
			}
		},
		plotOptions: {
			column: {
				width: 17,
				margin: 0
			},
			label: {
				enabled: !1
			}
		},
		legend: {
			enabled: !1
		},
		interaction: {
			onStickHover: null
		},
		animation: {
			enabled: !0,
			duration: 1500,
			mode: "ease",
			delayInterval: 200
		},
		series: [{
			name: "2013.12",
			data: [3, 2.86, 2.54, 2.49]
		}, {
			name: "2014.6",
			data: [2.95, 2.93, 2.93, 2.41]
		}]
	};
	Charts.add("column2", {
		init: function() {
			var b = new kc.ColumnChart("column2");
			b.update(a)
		}
	})
}(),
function() {
	var a = {
		color: ["#fbd204", "#8ce829"],
		xAxis: {
			categories: ["软件", "游戏"],
			ticks: {
				enabled: !1
			},
			margin: {
				right: 50,
				left: 80
			},
			axis: {
				enabled: !1
			},
			padding: {
				left: 40,
				right: 50
			},
			label: {
				enabled: !0,
				rotate: 0,
				font: {
					color: "#FFF",
					fontSize: 14
				}
			}
		},
		yAxis: {
			min: 0,
			ticks: {
				enabled: !0,
				color: "rgba(255, 255, 255, 0.2)",
				width: 1,
				dash: null
			},
			grid: [0, 32500, 65e3, 97500, 13e4],
			label: {
				enabled: !1,
				rotate: 0,
				font: {
					color: "#FFF",
					fontSize: 10
				}
			},
			axis: {
				enabled: !1
			},
			padding: {
				top: 0,
				bottom: 0
			},
			margin: {
				top: 30,
				bottom: 30
			}
		},
		plotOptions: {
			column: {
				width: 34,
				margin: 1
			},
			label: {
				enabled: !1
			}
		},
		legend: {
			enabled: !1
		},
		interaction: {
			onStickHover: null
		},
		animation: {
			enabled: !0,
			duration: 1500,
			mode: "ease",
			delayInterval: 200
		},
		series: [{
			name: "13Q4",
			data: [28780, 45230]
		}, {
			name: "14Q2",
			data: [129932, 119850]
		}]
	};
	Charts.add("column3", {
		init: function() {
			var b = new kc.ColumnChart("column3");
			b.update(a);
			var c = b.getPlots().elements.plotsElements.param.list,
				d = ["+165%", "+351%"];
			c.forEach(function(a, b) {
				if (2 > b) {
					var c = new Com.Tip({
						container: $("#column3"),
						point: {
							x: a.x + 3,
							y: a.y
						},
						content: d[b],
						bgColor: "rgba(0,0,0,0.5)",
						pos: "bottom-middle",
						style: {
							color: "#FFF",
							width: "50px",
							padding: "5px",
							"font-size": "14px",
							"font-style": "italic",
							"text-align": "center"
						}
					});
					setTimeout(function() {
						c.updatePosition(a.x + 3, a.y - a.height - 10, 1800)
					}, 0)
				}
			}), window.column = b
		}
	})
}(),
function() {
	Charts.add("bubble", {
		init: function() {
			var a = new CompoundCharts.BubbleChart({
				container: $("#bubble1"),
				values: {
					data: [3.8, 3],
					enabled: true
				},
				labels: {
					data: ["2014Q2", "2013Q4"],
					enabled: true
				},
				radiusBase: 23,
				bubble: {
					className: ["color-top", "color-bottom"],
					innerLabels: ["+27%"]
				},
				posType: 0
			});
			a.update();
			var b = new CompoundCharts.BubbleChart({
				container: $("#bubble2"),
				values: {
					data: [1.7, 1.25],
					enabled: true
				},
				labels: {
					data: ["2014Q2", "2013Q4"],
					enabled: true
				},
				radiusBase: 50,
				bubble: {
					className: ["color-top", "color-bottom"],
					innerLabels: ["+25%"]
				},
				posType: 1
			});
			b.update()
		}
	})
}(),
function() {
	var a = {
		color: ["#FFF", "#FFF", "#FFF", "#FFF"],
		xAxis: {
			categories: ["13Q3", "13Q4", "14Q1", "14Q2"],
			ticks: {
				enabled: !1
			},
			margin: {
				right: 10,
				left: 100
			},
			axis: {
				enabled: !1
			},
			padding: {
				left: 10,
				right: 10
			},
			label: {
				enabled: !0,
				rotate: 0,
				font: {
					color: "#FFF",
					fontSize: 10
				}
			},
			min: 0
		},
		yAxis: {
			min: 0,
			ticks: {
				enabled: !1
			},
			label: {
				enabled: !1,
				rotate: 0,
				font: {
					color: "#FFF",
					fontSize: 10
				}
			},
			axis: {
				enabled: !1
			},
			padding: {
				top: 0,
				bottom: 0
			},
			margin: {
				top: 30,
				bottom: 30
			},
			stacked: !0
		},
		plotOptions: {
			area: {
				stroke: {
					width: 2
				},
				dot: {
					enabled: !1
				}
			},
			label: {
				enabled: !1
			}
		},
		legend: {
			enabled: !1
		},
		interaction: {
			onHover: null
		},
		series: [{
			name: "其他",
			color: "#FFF",
			gradient: [{
				pos: 0,
				opacity: 1,
				color: "#d45a10"
			}, {
				pos: 1,
				opacity: 1,
				color: "#fb6d17"
			}],
			data: [.46, .52, .37, .37]
		}, {
			name: "应用宝",
			color: "#FFF",
			gradient: [{
				pos: 0,
				opacity: 1,
				color: "#a5ab0f"
			}, {
				pos: 1,
				opacity: 1,
				color: "#9cbe0f"
			}],
			data: [.2, .32, .43, .56]
		}, {
			name: "360<br>手机助手",
			color: "#FFF",
			gradient: [{
				pos: 0,
				opacity: 1,
				color: "#6dd119"
			}, {
				pos: 1,
				opacity: 1,
				color: "#9ff533"
			}],
			data: [.49, .6, .72, .7]
		}, {
			name: "百度<br>应用市场",
			color: "#FFF",
			gradient: [{
				pos: 0,
				opacity: 1,
				color: "#09f"
			}, {
				pos: 1,
				opacity: 1,
				color: "#00cbff"
			}],
			data: [.69, .9, 1, 1.3]
		}].reverse(),
		animation: {
			enabled: !1
		}
	};
	Charts.add("area", {
		init: function() {
			function b(a, b) {
				var c = new kity.Path,
					d = c.getDrawer(),
					e = 0,
					f = a.length;
				for (e = 0; f > e; e++) d.moveTo(a[e][0], a[e][1]), d.lineTo(b[f - e - 1][0], b[f - e - 1][1]);
				c.stroke("rgba(255,255,255,0.5)", .5), h.addShape(c), c.bringTop()
			}
			var c = $("#area"),
				d = $('<div id="area-inner" style="position:relative;width:100%;height:100%;visibility:hidden;"></div>');
			c.append(d);
			var e = new kc.AreaChart("area-inner"),
				f = e.getPlots(),
				g = f.drawPolygon.bind(f);
			f.drawPolygon = function(a, c, d) {
				g(a, c, d), b(a, c)
			};
			var h = e.getPaper(),
				i = 50;
			a.xAxis.margin.left = i, e.update(a), d.css({
				visibility: "visible",
				width: "0%"
			}), setTimeout(function() {
				d.css({
					visibility: "visible",
					"-webkit-transition": "2000ms",
					width: "100%"
				})
			}, 100); {
				var j = a.series[0].allOffset;
				e.coordinate.measurePointY
			}
			a.series.forEach(function(a, b) {
				var d = (e.coordinate.measurePointY(j[b][0]) + e.coordinate.measurePointY(j[b + 1][0])) / 2,
					f = $("<div>" + a.name + "</div>").css({
						position: "absolute",
						color: "#FFF",
						fontSize: "12px",
						textAlign: "right",
						lineHeight: "11px",
						"-webkit-transform": "scale(0.85)"
					}).appendTo(c);
				f.css({
					top: d - f.height() / 2 + "px",
					left: i - f.width() + "px"
				})
			})
		}
	})
}(), FSS = {
		FRONT: 0,
		BACK: 1,
		DOUBLE: 2,
		SVGNS: "http://www.w3.org/2000/svg"
	}, FSS.Array = "function" == typeof Float32Array ? Float32Array : Array, FSS.Utils = {
		isNumber: function(a) {
			return !isNaN(parseFloat(a)) && isFinite(a)
		}
	},
	function() {
		for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; b.length > c && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
		window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
			var c = (new Date).getTime(),
				d = Math.max(0, 16 - (c - a)),
				e = window.setTimeout(function() {
					b(c + d)
				}, d);
			return a = c + d, e
		}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
			clearTimeout(a)
		})
	}(), Math.PIM2 = 2 * Math.PI, Math.PID2 = Math.PI / 2, Math.randomInRange = function(a, b) {
		return a + (b - a) * Math.random()
	}, Math.clamp = function(a, b, c) {
		return a = Math.max(a, b), a = Math.min(a, c)
	}, FSS.Vector3 = {
		create: function(a, b, c) {
			var d = new FSS.Array(3);
			return this.set(d, a, b, c), d
		},
		clone: function(a) {
			var b = this.create();
			return this.copy(b, a), b
		},
		set: function(a, b, c, d) {
			return a[0] = b || 0, a[1] = c || 0, a[2] = d || 0, this
		},
		setX: function(a, b) {
			return a[0] = b || 0, this
		},
		setY: function(a, b) {
			return a[1] = b || 0, this
		},
		setZ: function(a, b) {
			return a[2] = b || 0, this
		},
		copy: function(a, b) {
			return a[0] = b[0], a[1] = b[1], a[2] = b[2], this
		},
		add: function(a, b) {
			return a[0] += b[0], a[1] += b[1], a[2] += b[2], this
		},
		addVectors: function(a, b, c) {
			return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a[2] = b[2] + c[2], this
		},
		addScalar: function(a, b) {
			return a[0] += b, a[1] += b, a[2] += b, this
		},
		subtract: function(a, b) {
			return a[0] -= b[0], a[1] -= b[1], a[2] -= b[2], this
		},
		subtractVectors: function(a, b, c) {
			return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a[2] = b[2] - c[2], this
		},
		subtractScalar: function(a, b) {
			return a[0] -= b, a[1] -= b, a[2] -= b, this
		},
		multiply: function(a, b) {
			return a[0] *= b[0], a[1] *= b[1], a[2] *= b[2], this
		},
		multiplyVectors: function(a, b, c) {
			return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a[2] = b[2] * c[2], this
		},
		multiplyScalar: function(a, b) {
			return a[0] *= b, a[1] *= b, a[2] *= b, this
		},
		divide: function(a, b) {
			return a[0] /= b[0], a[1] /= b[1], a[2] /= b[2], this
		},
		divideVectors: function(a, b, c) {
			return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a[2] = b[2] / c[2], this
		},
		divideScalar: function(a, b) {
			return 0 !== b ? (a[0] /= b, a[1] /= b, a[2] /= b) : (a[0] = 0, a[1] = 0, a[2] = 0), this
		},
		cross: function(a, b) {
			var c = a[0],
				d = a[1],
				e = a[2];
			return a[0] = d * b[2] - e * b[1], a[1] = e * b[0] - c * b[2], a[2] = c * b[1] - d * b[0], this
		},
		crossVectors: function(a, b, c) {
			return a[0] = b[1] * c[2] - b[2] * c[1], a[1] = b[2] * c[0] - b[0] * c[2], a[2] = b[0] * c[1] - b[1] * c[0], this
		},
		min: function(a, b) {
			return b > a[0] && (a[0] = b), b > a[1] && (a[1] = b), b > a[2] && (a[2] = b), this
		},
		max: function(a, b) {
			return a[0] > b && (a[0] = b), a[1] > b && (a[1] = b), a[2] > b && (a[2] = b), this
		},
		clamp: function(a, b, c) {
			return this.min(a, b), this.max(a, c), this
		},
		limit: function(a, b, c) {
			var d = this.length(a);
			return null !== b && b > d ? this.setLength(a, b) : null !== c && d > c && this.setLength(a, c), this
		},
		dot: function(a, b) {
			return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
		},
		normalise: function(a) {
			return this.divideScalar(a, this.length(a))
		},
		negate: function(a) {
			return this.multiplyScalar(a, -1)
		},
		distanceSquared: function(a, b) {
			var c = a[0] - b[0],
				d = a[1] - b[1],
				e = a[2] - b[2];
			return c * c + d * d + e * e
		},
		distance: function(a, b) {
			return Math.sqrt(this.distanceSquared(a, b))
		},
		lengthSquared: function(a) {
			return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
		},
		length: function(a) {
			return Math.sqrt(this.lengthSquared(a))
		},
		setLength: function(a, b) {
			var c = this.length(a);
			return 0 !== c && b !== c && this.multiplyScalar(a, b / c), this
		}
	}, FSS.Vector4 = {
		create: function(a, b, c) {
			var d = new FSS.Array(4);
			return this.set(d, a, b, c), d
		},
		set: function(a, b, c, d, e) {
			return a[0] = b || 0, a[1] = c || 0, a[2] = d || 0, a[3] = e || 0, this
		},
		setX: function(a, b) {
			return a[0] = b || 0, this
		},
		setY: function(a, b) {
			return a[1] = b || 0, this
		},
		setZ: function(a, b) {
			return a[2] = b || 0, this
		},
		setW: function(a, b) {
			return a[3] = b || 0, this
		},
		add: function(a, b) {
			return a[0] += b[0], a[1] += b[1], a[2] += b[2], a[3] += b[3], this
		},
		multiplyVectors: function(a, b, c) {
			return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a[2] = b[2] * c[2], a[3] = b[3] * c[3], this
		},
		multiplyScalar: function(a, b) {
			return a[0] *= b, a[1] *= b, a[2] *= b, a[3] *= b, this
		},
		min: function(a, b) {
			return b > a[0] && (a[0] = b), b > a[1] && (a[1] = b), b > a[2] && (a[2] = b), b > a[3] && (a[3] = b), this
		},
		max: function(a, b) {
			return a[0] > b && (a[0] = b), a[1] > b && (a[1] = b), a[2] > b && (a[2] = b), a[3] > b && (a[3] = b), this
		},
		clamp: function(a, b, c) {
			return this.min(a, b), this.max(a, c), this
		}
	}, FSS.Color = function(a, b) {
		this.rgba = FSS.Vector4.create(), this.hex = a || "#000000", this.opacity = FSS.Utils.isNumber(b) ? b : 1, this.set(this.hex, this.opacity)
	}, FSS.Color.prototype = {
		set: function(a, b) {
			a = a.replace("#", "");
			var c = a.length / 3;
			return this.rgba[0] = parseInt(a.substring(0 * c, 1 * c), 16) / 255, this.rgba[1] = parseInt(a.substring(1 * c, 2 * c), 16) / 255, this.rgba[2] = parseInt(a.substring(2 * c, 3 * c), 16) / 255, this.rgba[3] = FSS.Utils.isNumber(b) ? b : this.rgba[3], this
		},
		hexify: function(a) {
			var b = Math.ceil(255 * a).toString(16);
			return 1 === b.length && (b = "0" + b), b
		},
		format: function() {
			var a = this.hexify(this.rgba[0]),
				b = this.hexify(this.rgba[1]),
				c = this.hexify(this.rgba[2]);
			return this.hex = "#" + a + b + c, this.hex
		}
	}, FSS.Object = function() {
		this.position = FSS.Vector3.create()
	}, FSS.Object.prototype = {
		setPosition: function(a, b, c) {
			return FSS.Vector3.set(this.position, a, b, c), this
		}
	}, FSS.Light = function(a, b) {
		FSS.Object.call(this), this.ambient = new FSS.Color(a || "#FFFFFF"), this.diffuse = new FSS.Color(b || "#FFFFFF"), this.ray = FSS.Vector3.create()
	}, FSS.Light.prototype = Object.create(FSS.Object.prototype), FSS.Vertex = function(a, b, c) {
		this.position = FSS.Vector3.create(a, b, c)
	}, FSS.Vertex.prototype = {
		setPosition: function(a, b, c) {
			return FSS.Vector3.set(this.position, a, b, c), this
		}
	}, FSS.Triangle = function(a, b, c) {
		this.a = a || new FSS.Vertex, this.b = b || new FSS.Vertex, this.c = c || new FSS.Vertex, this.vertices = [this.a, this.b, this.c], this.u = FSS.Vector3.create(), this.v = FSS.Vector3.create(), this.centroid = FSS.Vector3.create(), this.normal = FSS.Vector3.create(), this.color = new FSS.Color, this.polygon = document.createElementNS(FSS.SVGNS, "polygon"), this.polygon.setAttributeNS(null, "stroke-linejoin", "round"), this.polygon.setAttributeNS(null, "stroke-miterlimit", "1"), this.polygon.setAttributeNS(null, "stroke-width", "1"), this.computeCentroid(), this.computeNormal()
	}, FSS.Triangle.prototype = {
		computeCentroid: function() {
			return this.centroid[0] = this.a.position[0] + this.b.position[0] + this.c.position[0], this.centroid[1] = this.a.position[1] + this.b.position[1] + this.c.position[1], this.centroid[2] = this.a.position[2] + this.b.position[2] + this.c.position[2], FSS.Vector3.divideScalar(this.centroid, 3), this
		},
		computeNormal: function() {
			return FSS.Vector3.subtractVectors(this.u, this.b.position, this.a.position), FSS.Vector3.subtractVectors(this.v, this.c.position, this.a.position), FSS.Vector3.crossVectors(this.normal, this.u, this.v), FSS.Vector3.normalise(this.normal), this
		}
	}, FSS.Geometry = function() {
		this.vertices = [], this.triangles = [], this.dirty = !1
	}, FSS.Geometry.prototype = {
		update: function() {
			if (this.dirty) {
				var a, b;
				for (a = this.triangles.length - 1; a >= 0; a--) b = this.triangles[a], b.computeCentroid(), b.computeNormal();
				this.dirty = !1
			}
			return this
		}
	}, FSS.Plane = function(a, b, c, d) {
		FSS.Geometry.call(this), this.width = a || 100, this.height = b || 100, this.segments = c || 4, this.slices = d || 4, this.segmentWidth = this.width / this.segments, this.sliceHeight = this.height / this.slices;
		var e, f, g, h, i, j, k, l = [],
			m = this.width * -.5,
			n = .5 * this.height;
		for (e = 0; this.segments >= e; e++)
			for (l.push([]), f = 0; this.slices >= f; f++) k = new FSS.Vertex(m + e * this.segmentWidth, n - f * this.sliceHeight), l[e].push(k), this.vertices.push(k);
		for (e = 0; this.segments > e; e++)
			for (f = 0; this.slices > f; f++) g = l[e + 0][f + 0], h = l[e + 0][f + 1], i = l[e + 1][f + 0], j = l[e + 1][f + 1], t0 = new FSS.Triangle(g, h, i), t1 = new FSS.Triangle(i, h, j), this.triangles.push(t0, t1)
	}, FSS.Plane.prototype = Object.create(FSS.Geometry.prototype), FSS.Material = function(a, b) {
		this.ambient = new FSS.Color(a || "#444444"), this.diffuse = new FSS.Color(b || "#FFFFFF"), this.slave = new FSS.Color
	}, FSS.Mesh = function(a, b) {
		FSS.Object.call(this), this.geometry = a || new FSS.Geometry, this.material = b || new FSS.Material, this.side = FSS.FRONT, this.visible = !0
	}, FSS.Mesh.prototype = Object.create(FSS.Object.prototype), FSS.Mesh.prototype.update = function(a, b) {
		var c, d, e, f, g;
		if (this.geometry.update(), b)
			for (c = this.geometry.triangles.length - 1; c >= 0; c--) {
				for (d = this.geometry.triangles[c], FSS.Vector4.set(d.color.rgba), e = a.length - 1; e >= 0; e--) f = a[e], FSS.Vector3.subtractVectors(f.ray, f.position, d.centroid), FSS.Vector3.normalise(f.ray), g = FSS.Vector3.dot(d.normal, f.ray), this.side === FSS.FRONT ? g = Math.max(g, 0) : this.side === FSS.BACK ? g = Math.abs(Math.min(g, 0)) : this.side === FSS.DOUBLE && (g = Math.max(Math.abs(g), 0)), FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.ambient.rgba, f.ambient.rgba), FSS.Vector4.add(d.color.rgba, this.material.slave.rgba), FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.diffuse.rgba, f.diffuse.rgba), FSS.Vector4.multiplyScalar(this.material.slave.rgba, g), FSS.Vector4.add(d.color.rgba, this.material.slave.rgba);
				FSS.Vector4.clamp(d.color.rgba, 0, 1)
			}
		return this
	}, FSS.Scene = function() {
		this.meshes = [], this.lights = []
	}, FSS.Scene.prototype = {
		add: function(a) {
			return a instanceof FSS.Mesh && !~this.meshes.indexOf(a) ? this.meshes.push(a) : a instanceof FSS.Light && !~this.lights.indexOf(a) && this.lights.push(a), this
		},
		remove: function(a) {
			return a instanceof FSS.Mesh && ~this.meshes.indexOf(a) ? this.meshes.splice(this.meshes.indexOf(a), 1) : a instanceof FSS.Light && ~this.lights.indexOf(a) && this.lights.splice(this.lights.indexOf(a), 1), this
		}
	}, FSS.Renderer = function() {
		this.width = 0, this.height = 0, this.halfWidth = 0, this.halfHeight = 0
	}, FSS.Renderer.prototype = {
		setSize: function(a, b) {
			return this.width !== a || this.height !== b ? (this.width = a, this.height = b, this.halfWidth = .5 * this.width, this.halfHeight = .5 * this.height, this) : void 0
		},
		clear: function() {
			return this
		},
		render: function() {
			return this
		}
	}, FSS.CanvasRenderer = function() {
		FSS.Renderer.call(this), this.element = document.createElement("canvas"), this.element.style.display = "block", this.context = this.element.getContext("2d"), this.setSize(this.element.width, this.element.height)
	}, FSS.CanvasRenderer.prototype = Object.create(FSS.Renderer.prototype), FSS.CanvasRenderer.prototype.setSize = function(a, b) {
		return FSS.Renderer.prototype.setSize.call(this, a, b), this.element.width = a, this.element.height = b, this.context.setTransform(1, 0, 0, -1, this.halfWidth, this.halfHeight), this
	}, FSS.CanvasRenderer.prototype.clear = function() {
		return FSS.Renderer.prototype.clear.call(this), this.context.clearRect(-this.halfWidth, -this.halfHeight, this.width, this.height), this
	}, FSS.CanvasRenderer.prototype.render = function(a) {
		FSS.Renderer.prototype.render.call(this, a);
		var b, c, d, e, f;
		for (this.clear(), this.context.lineJoin = "round", this.context.lineWidth = 1, b = a.meshes.length - 1; b >= 0; b--)
			if (c = a.meshes[b], c.visible)
				for (c.update(a.lights, !0), d = c.geometry.triangles.length - 1; d >= 0; d--) e = c.geometry.triangles[d], f = e.color.format(), this.context.beginPath(), this.context.moveTo(e.a.position[0], e.a.position[1]), this.context.lineTo(e.b.position[0], e.b.position[1]), this.context.lineTo(e.c.position[0], e.c.position[1]), this.context.closePath(), this.context.strokeStyle = f, this.context.fillStyle = f, this.context.stroke(), this.context.fill();
		return this
	}, FSS.WebGLRenderer = function() {
		FSS.Renderer.call(this), this.element = document.createElement("canvas"), this.element.style.display = "block", this.vertices = null, this.lights = null;
		var a = {
			preserveDrawingBuffer: !1,
			premultipliedAlpha: !0,
			antialias: !0,
			stencil: !0,
			alpha: !0
		};
		return this.gl = this.getContext(this.element, a), this.unsupported = !this.gl, this.unsupported ? "WebGL is not supported by your browser." : (this.gl.clearColor(0, 0, 0, 0), this.gl.enable(this.gl.DEPTH_TEST), void this.setSize(this.element.width, this.element.height))
	}, FSS.WebGLRenderer.prototype = Object.create(FSS.Renderer.prototype), FSS.WebGLRenderer.prototype.getContext = function(a, b) {
		var c = !1;
		try {
			if (!(c = a.getContext("experimental-webgl", b))) throw "Error creating WebGL context."
		} catch (d) {
			console.error(d)
		}
		return c
	}, FSS.WebGLRenderer.prototype.setSize = function(a, b) {
		return FSS.Renderer.prototype.setSize.call(this, a, b), this.unsupported ? void 0 : (this.element.width = a, this.element.height = b, this.gl.viewport(0, 0, a, b), this)
	}, FSS.WebGLRenderer.prototype.clear = function() {
		return FSS.Renderer.prototype.clear.call(this), this.unsupported ? void 0 : (this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT), this)
	}, FSS.WebGLRenderer.prototype.render = function(a) {
		if (FSS.Renderer.prototype.render.call(this, a), !this.unsupported) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q = !1,
				r = a.lights.length,
				s = 0;
			if (this.clear(), this.lights !== r) {
				if (this.lights = r, !(this.lights > 0)) return;
				this.buildProgram(r)
			}
			if (this.program) {
				for (b = a.meshes.length - 1; b >= 0; b--) c = a.meshes[b], c.geometry.dirty && (q = !0), c.update(a.lights, !1), s += 3 * c.geometry.triangles.length;
				if (q || this.vertices !== s) {
					this.vertices = s;
					for (i in this.program.attributes) {
						for (k = this.program.attributes[i], k.data = new FSS.Array(s * k.size), n = 0, b = a.meshes.length - 1; b >= 0; b--)
							for (c = a.meshes[b], d = 0, e = c.geometry.triangles.length; e > d; d++)
								for (f = c.geometry.triangles[d], o = 0, p = f.vertices.length; p > o; o++) {
									switch (vertex = f.vertices[o], i) {
										case "side":
											this.setBufferData(n, k, c.side);
											break;
										case "position":
											this.setBufferData(n, k, vertex.position);
											break;
										case "centroid":
											this.setBufferData(n, k, f.centroid);
											break;
										case "normal":
											this.setBufferData(n, k, f.normal);
											break;
										case "ambient":
											this.setBufferData(n, k, c.material.ambient.rgba);
											break;
										case "diffuse":
											this.setBufferData(n, k, c.material.diffuse.rgba)
									}
									n++
								}
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, k.buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, k.data, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(k.location), this.gl.vertexAttribPointer(k.location, k.size, this.gl.FLOAT, !1, 0, 0)
					}
				}
				for (this.setBufferData(0, this.program.uniforms.resolution, [this.width, this.height, this.width]), g = r - 1; g >= 0; g--) h = a.lights[g], this.setBufferData(g, this.program.uniforms.lightPosition, h.position), this.setBufferData(g, this.program.uniforms.lightAmbient, h.ambient.rgba), this.setBufferData(g, this.program.uniforms.lightDiffuse, h.diffuse.rgba);
				for (j in this.program.uniforms) switch (k = this.program.uniforms[j], m = k.location, l = k.data, k.structure) {
					case "3f":
						this.gl.uniform3f(m, l[0], l[1], l[2]);
						break;
					case "3fv":
						this.gl.uniform3fv(m, l);
						break;
					case "4fv":
						this.gl.uniform4fv(m, l)
				}
			}
			return this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertices), this
		}
	}, FSS.WebGLRenderer.prototype.setBufferData = function(a, b, c) {
		if (FSS.Utils.isNumber(c)) b.data[a * b.size] = c;
		else
			for (var d = c.length - 1; d >= 0; d--) b.data[a * b.size + d] = c[d]
	}, FSS.WebGLRenderer.prototype.buildProgram = function(a) {
		if (!this.unsupported) {
			var b = FSS.WebGLRenderer.VS(a),
				c = FSS.WebGLRenderer.FS(a),
				d = b + c;
			if (!this.program || this.program.code !== d) {
				var e = this.gl.createProgram(),
					f = this.buildShader(this.gl.VERTEX_SHADER, b),
					g = this.buildShader(this.gl.FRAGMENT_SHADER, c);
				if (this.gl.attachShader(e, f), this.gl.attachShader(e, g), this.gl.linkProgram(e), !this.gl.getProgramParameter(e, this.gl.LINK_STATUS)) {
					var h = this.gl.getError(),
						i = this.gl.getProgramParameter(e, this.gl.VALIDATE_STATUS);
					return console.error("Could not initialise shader.\nVALIDATE_STATUS: " + i + "\nERROR: " + h), null
				}
				return this.gl.deleteShader(g), this.gl.deleteShader(f), e.code = d, e.attributes = {
					side: this.buildBuffer(e, "attribute", "aSide", 1, "f"),
					position: this.buildBuffer(e, "attribute", "aPosition", 3, "v3"),
					centroid: this.buildBuffer(e, "attribute", "aCentroid", 3, "v3"),
					normal: this.buildBuffer(e, "attribute", "aNormal", 3, "v3"),
					ambient: this.buildBuffer(e, "attribute", "aAmbient", 4, "v4"),
					diffuse: this.buildBuffer(e, "attribute", "aDiffuse", 4, "v4")
				}, e.uniforms = {
					resolution: this.buildBuffer(e, "uniform", "uResolution", 3, "3f", 1),
					lightPosition: this.buildBuffer(e, "uniform", "uLightPosition", 3, "3fv", a),
					lightAmbient: this.buildBuffer(e, "uniform", "uLightAmbient", 4, "4fv", a),
					lightDiffuse: this.buildBuffer(e, "uniform", "uLightDiffuse", 4, "4fv", a)
				}, this.program = e, this.gl.useProgram(this.program), e
			}
		}
	}, FSS.WebGLRenderer.prototype.buildShader = function(a, b) {
		if (!this.unsupported) {
			var c = this.gl.createShader(a);
			return this.gl.shaderSource(c, b), this.gl.compileShader(c), this.gl.getShaderParameter(c, this.gl.COMPILE_STATUS) ? c : (console.error(this.gl.getShaderInfoLog(c)), null)
		}
	}, FSS.WebGLRenderer.prototype.buildBuffer = function(a, b, c, d, e, f) {
		var g = {
			buffer: this.gl.createBuffer(),
			size: d,
			structure: e,
			data: null
		};
		switch (b) {
			case "attribute":
				g.location = this.gl.getAttribLocation(a, c);
				break;
			case "uniform":
				g.location = this.gl.getUniformLocation(a, c)
		}
		return f && (g.data = new FSS.Array(f * d)), g
	}, FSS.WebGLRenderer.VS = function(a) {
		var b = ["precision mediump float;", "#define LIGHTS " + a, "attribute float aSide;", "attribute vec3 aPosition;", "attribute vec3 aCentroid;", "attribute vec3 aNormal;", "attribute vec4 aAmbient;", "attribute vec4 aDiffuse;", "uniform vec3 uResolution;", "uniform vec3 uLightPosition[LIGHTS];", "uniform vec4 uLightAmbient[LIGHTS];", "uniform vec4 uLightDiffuse[LIGHTS];", "varying vec4 vColor;", "void main() {", "vColor = vec4(0.0);", "vec3 position = aPosition / uResolution * 2.0;", "for (int i = 0; i < LIGHTS; i++) {", "vec3 lightPosition = uLightPosition[i];", "vec4 lightAmbient = uLightAmbient[i];", "vec4 lightDiffuse = uLightDiffuse[i];", "vec3 ray = normalize(lightPosition - aCentroid);", "float illuminance = dot(aNormal, ray);", "if (aSide == 0.0) {", "illuminance = max(illuminance, 0.0);", "} else if (aSide == 1.0) {", "illuminance = abs(min(illuminance, 0.0));", "} else if (aSide == 2.0) {", "illuminance = max(abs(illuminance), 0.0);", "}", "vColor += aAmbient * lightAmbient;", "vColor += aDiffuse * lightDiffuse * illuminance;", "}", "vColor = clamp(vColor, 0.0, 1.0);", "gl_Position = vec4(position, 1.0);", "}"].join("\n");
		return b
	}, FSS.WebGLRenderer.FS = function() {
		var a = ["precision mediump float;", "varying vec4 vColor;", "void main() {", "gl_FragColor = vColor;", "}"].join("\n");
		return a
	}, FSS.SVGRenderer = function() {
		FSS.Renderer.call(this), this.element = document.createElementNS(FSS.SVGNS, "svg"), this.element.setAttribute("xmlns", FSS.SVGNS), this.element.setAttribute("version", "1.1"), this.element.style.display = "block", this.setSize(300, 150)
	}, FSS.SVGRenderer.prototype = Object.create(FSS.Renderer.prototype), FSS.SVGRenderer.prototype.setSize = function(a, b) {
		return FSS.Renderer.prototype.setSize.call(this, a, b), this.element.setAttribute("width", a), this.element.setAttribute("height", b), this
	}, FSS.SVGRenderer.prototype.clear = function() {
		FSS.Renderer.prototype.clear.call(this);
		for (var a = this.element.childNodes.length - 1; a >= 0; a--) this.element.removeChild(this.element.childNodes[a]);
		return this
	}, FSS.SVGRenderer.prototype.render = function(a) {
		FSS.Renderer.prototype.render.call(this, a);
		var b, c, d, e, f, g;
		for (b = a.meshes.length - 1; b >= 0; b--)
			if (c = a.meshes[b], c.visible)
				for (c.update(a.lights, !0), d = c.geometry.triangles.length - 1; d >= 0; d--) e = c.geometry.triangles[d], e.polygon.parentNode !== this.element && this.element.appendChild(e.polygon), f = this.formatPoint(e.a) + " ", f += this.formatPoint(e.b) + " ", f += this.formatPoint(e.c), g = this.formatStyle(e.color.format()), e.polygon.setAttributeNS(null, "points", f), e.polygon.setAttributeNS(null, "style", g);
		return this
	}, FSS.SVGRenderer.prototype.formatPoint = function(a) {
		return this.halfWidth + a.position[0] + "," + (this.halfHeight - a.position[1])
	}, FSS.SVGRenderer.prototype.formatStyle = function(a) {
		var b = "fill:" + a + ";";
		return b += "stroke:" + a + ";"
	},
	function() {
		var a = window.Utils = {},
			b = a.StateTranser = function(a, b) {
				this.init(a, b)
			};
		b.prototype.init = function(a, b) {
			this.states = a || {}, this.container = $(".total-container"), this.maintitle = $("#main-title"), this.toState(b)
		}, b.prototype.toState = function(a) {
			var b = $("#chart-area"),
				c = $("body").height();
			b.height(c - 145);
			var d = this.states,
				e = d[a];
			if (d[this.curState] && d[this.curState].leave(), !e) return !1;
			this.curState = a;
			var f = this.container,
				g = this.maintitle,
				h = g.find(".content-outer>.number"),
				i = g.find(".content-outer>.title");
			h.anim({
				"-webkit-transform": "translateX(100px)"
			}, .5, "ease-in", function() {
				h.html(e.pagenum), h.anim({
					"-webkit-transform": "translateX(0)"
				}, .5)
			}), i.anim({
				"-webkit-transform": "translateX(-300px)"
			}, .5, "ease-in", function() {
				i.html(e.title), i.anim({
					"-webkit-transform": "translateX(0)"
				}, .5)
			}), f.anim({
				"background-color": e.background
			}, .5), e.enter()
		}, b.prototype.toNextState = function() {
			this.toState(this.curState + 1)
		}, b.prototype.toPrevState = function() {
			this.toState(this.curState - 1)
		}
	}(),
	function(a) {
		function b(a) {
			"100%" == a && 0 == i && (i = !0, d())
		}

		function c() {}

		function d() {
			$("#loading").hide(), setTimeout(function() {
				document.body.scrollTop = 1, document.body.scrollTop = 0, a()
			}, 100)
		}
		var e = ["./shushuo.baidu.com.mobile.images/all.png", "./shushuo.baidu.com.mobile.images/cols.png", "./shushuo.baidu.com.mobile.images/cover.png", "./shushuo.baidu.com.mobile.images/coverbg.jpg", "./shushuo.baidu.com.mobile.images/icons.png", "./shushuo.baidu.com.mobile.images/question2.png", "./shushuo.baidu.com.mobile.images/t-bg.png"],
			f = "0%",
			g = 0,
			h = e.length,
			i = !1,
			j = 3e3;
		e.forEach(function(a) {
			var d = new Image;
			d.onload = function() {
				g++, f = (g / h * 100).toFixed(0) + "%", b(f), c(f)
			}, d.src = a
		}), setTimeout(function() {
			b("100%")
		}, j)
	}(start);