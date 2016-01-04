function isWeiXin() {
    return navigator.userAgent.toLowerCase().indexOf("micromessenger") >= 0
}

if (isWeiXin()) {
    var c = {
        img_width: 300,
        img_height: 300,
        img_url: "http://img.baidu.com/hunter/t/91_weixin_pic.jpg",
        link: "http://shushuo.baidu.com/act/91dist/app/",
        desc: "2014上半年移动分发趋势报告",
        title: "2014上半年移动分发趋势报告"
    };
    document.addEventListener("WeixinJSBridgeReady", function() {
        WeixinJSBridge.on("menu:share:appmessage", function() {
            WeixinJSBridge.invoke("sendAppMessage", c, callback)
        }), WeixinJSBridge.on("menu:share:timeline", function() {
            WeixinJSBridge.invoke("shareTimeline", c, callback)
        });
    })
}

function isiPhone() {
    return navigator.userAgent.indexOf("iPhone") > -1
};

var imgHammer;
Hammer.each($("img"), function(img) {
    imgHammer = Hammer(img);
    imgHammer.on("pan", function(ev) {
        ev.preventDefault();
    });
});

$(".header").css("text-align", "center");
$(".share").remove();
var st;

var chartArea = $("#chart-area"),
    bodyHeight = $("body").height();
chartArea.height(bodyHeight - 145);

$(window).on("resize", function() {
    bodyHeight = $("body").height();
    chartArea.height(bodyHeight - 145);
});

var chartAreaHeight = chartArea.height();
var states = [{
    pagenum: "1",
    title: "2014上半年应用市场用户量<br/>增长27%，分发量增长25%",
    background: "#04a5a7",
    enter: function() {
        var tpl = $("#templates").find("#bubble-container");
        chartArea.html(tpl),
            tpl.css("margin-top", (chartArea.height() - tpl.height()) / 2);
        Charts.get("bubble").init();
    },
    leave: function() {
        var tpl = chartArea.find("#bubble-container");
        tpl.find(".chart-container>.bubble-container").remove();
        $("#templates").append(tpl);
    }
}, {
    pagenum: "2",
    title: "应用市场日分发量持续上涨，<br/>TOP3占据70%以上份额",
    background: "#1f64b0",
    enter: function() {
        var tpl = $("#templates").find("#area-container");
        chartArea.html(tpl);
        Charts.get("area").init();
        tpl.find(".legend").css({
            "margin-top": .72 * chartAreaHeight
        });
    },
    leave: function() {
        var tpl = chartArea.find("#area-container");
        tpl.find("#area").html("");
        $("#templates").append(tpl);
    }
}, {
    pagenum: "3",
    title: "移动端成为最主流的下载渠<br/>道，PC端下载比例降低",
    background: "#aa67c8",
    enter: function() {
        var tpl = $("#templates").find("#donut0-container");
        chartArea.html(tpl);

            $("#donut0-container .qselect").on("touchstart", "li", function() {
                var tpl = $(this);
                //Charts.get("donut").select(tpl.data("select"));
                tpl.siblings().removeClass("active");
                tpl.addClass("active")
            });

            tpl.find(".legend").css({
                "margin-top": "-20px"
            });
            tpl.css("margin-top", (chartArea.height() - tpl.height()) / 2 - 20);
    },
    leave: function() {
        var tpl = chartArea.find("#donut0-container");
        tpl.find("svg").remove();
        $("#templates").append(tpl);
    }
}, {
    pagenum: "4",
    title: "用户群体<div class='img-r question1 btn description' idx='2'></div>年轻化特征鲜<br/>明，学生人均下载量最高",
    background: "#e09e29",
    enter: function() {
        var tpl = $("#templates").find("#column2-container");
        chartArea.html(tpl);
        tpl.find(".legend").css({
            "margin-top": .74 * chartAreaHeight
        })
        // Charts.get("column2").init(), 
    },
    leave: function() {
        var tpl = chartArea.find("#column2-container");
        tpl.find("#column2").html("");
        $("#templates").append(tpl)
    }
}]


function hammer(container, direction) {
    this.container = container;
    this.direction = direction;

    this.hammer = new Hammer.Manager(this.container);
    this.hammer.add(new Hammer.Pan({
        direction: this.direction,
        threshold: 10
    }));
    this.hammer.on("panstart panmove panend pancancel", Hammer.bindFn(this.onPan, this));
}

hammer.prototype = {
    onPan: function(ev) {
        if (ev.type == 'panend' || ev.type == 'pancancel') {
            switch ($(this.container).attr('id')) {
                case 'cover':
                    if (ev.direction & Hammer.DIRECTION_UP) {
                        $("#cover").animate({
                            translateY: -bodyHeight + 'px'
                        }, {
                            complete: function() {
                                st ? st.toState(0) : st = new stateTranser(states, 0);
                            }
                        });
                    }
                    break;
                case 'back':
                    if (ev.direction & Hammer.DIRECTION_DOWN) {
                        $("#inner").animate({
                            translateY: '0'
                        });
                    }
                    break;
                default:
                    if (ev.direction & Hammer.DIRECTION_UP) {
                        this.swipeup();
                    };
                    if (ev.direction & Hammer.DIRECTION_DOWN) {
                        this.swipedown();
                    };
                    break;
            };
        }
    },

    swipeup: function() {
        if (states.length - 1 === st.curStateNumber) {
            $("#inner").animate({
                translateY: -bodyHeight + 'px'
            });
        } else {
            st.toNextState()
        }
    },

    swipedown: function() {
        if (0 === st.curStateNumber) {
            $("#cover").animate({
                translateY: '0'
            });
        } else {
            st.toPrevState()
        }
    }

};

Hammer.each(document.querySelectorAll(".total-container"), function(container) {
    new hammer(container, Hammer.DIRECTION_VERTICAL);
});

function stateTranser(states, curState) {
    this.states = states || {};
    this.container = $(".total-container");
    this.maintitle = $("#main-title");
    this.toState(curState);
    this.curStateNumber = 0;
}

stateTranser.prototype = {
    toState: function(stateNumber) {
        var chartArea = $("#chart-area"),
            bodyHeight = $("body").height();
        chartArea.height(bodyHeight - 145);

        var states = this.states,
            state = states[stateNumber];

        if (!state) return false;
        if (states[this.curStateNumber]) {
            states[this.curStateNumber].leave();
        }

        this.curStateNumber = stateNumber;
        var container = this.container,
            maintitle = this.maintitle,
            number = maintitle.find(".content-outer>.number"),
            title = maintitle.find(".content-outer>.title");

        number.animate({
                translateX: '100px'
            }, 200, "ease-in",
            function() {
                number.html(state.pagenum);
                number.animate({
                    translateX: '0'
                }, 200);
            });
        title.animate({
                translateX: '-300px'
            }, 200, "ease-in",
            function() {
                title.html(state.title);
                title.animate({
                    translateX: '0'
                }, 200);
            });
        container.animate({
            "background-color": state.background
        });
        state.enter();
    },
    toNextState: function() {
        this.toState(this.curStateNumber + 1)
    },
    toPrevState: function() {
        this.toState(this.curStateNumber - 1)
    }

};
/*
    function bgCanvas() {
        //t q j k l m n i o p r s
        var container = document.getElementById("bg"),
            start = Date.now(),
            renderer,
            scene,
            mesh,
            geometry,
            material,
            now,
            param = {
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
            lightParam = {
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
                step: FSS.Vector3.create(
                    Math.randomInRange(.2, 1),
                    Math.randomInRange(.2, 1),
                    Math.randomInRange(.2, 1)
                )
            },
            v1 = FSS.Vector3.create(),
            v2 = FSS.Vector3.create();

        $("#bg").css({
            opacity: ".2"
        });


        function init() {
            renderer = new FSS.CanvasRenderer;
            container.appendChild(renderer.element);
            scene = new FSS.Scene;
            tweakMesh();
            drawLights();
            //setSize(container.offsetWidth, container.offsetHeight);
            //f();
        }

        init();

        function tweakMesh() {
            scene.remove(mesh);
            renderer.clear();
            geometry = new FSS.Plane(param.width * renderer.width, param.height * renderer.height, param.segments, param.slices);
            material = new FSS.Material(param.ambient, param.diffuse);
            mesh = new FSS.Mesh(geometry, material);
            scene.add(mesh);
            var v, vertex;
            for (v = geometry.vertices.length - 1; v >= 0; v--) {
                vertex = geometry.vertices[v];
                vertex.anchor = FSS.Vector3.clone(vertex.position);
                vertex.step = FSS.Vector3.create(
                    Math.randomInRange(.2, 1),
                    Math.randomInRange(.2, 1),
                    Math.randomInRange(.2, 1)
                );
            }
            vertex.time = Math.randomInRange(0, Math.PIM2);
        }

        function drawLights() {
            var i, light;
            for (i = scene.lights.length - 1; i >= 0; i--) {
                light = scene.lights[i];
                scene.remove(light);
            }
            renderer.clear();
            for (i = 0; i < lightParam.count; i++) {
                light = new FSS.Light(lightParam.ambient, lightParam.diffuse);
                light.ambientHex = light.ambient.format();
                light.diffuseHex = light.diffuse.format()
                scene.add(light);
                light.mass = Math.randomInRange(.5, 1);
                light.velocity = FSS.Vector3.create();
                light.acceleration = FSS.Vector3.create();
                light.force = FSS.Vector3.create();
            }
        }

        function setSize(width, height) {
            renderer.setSize(width, height);
            FSS.Vector3.set(v1, renderer.halfWidth, renderer.halfHeight);
            tweakMesh();
        }

        function f() {
            now = Date.now() - start;
            distortMesh();
            h();
            requestAnimationFrame(f)
        }

        function distortMesh() {
            if (!isiPhone()) {
                var context = renderer.element.getContext("2d");
                context.globalAlpha = .1
            }
            //h l, b c d, f g, n
            var v, vertex, ox, oy, oz, i, light,
                offset = param.depth / 2;

            FSS.Vector3.copy(
                lightParam.bounds, v1
            );
            FSS.Vector3.multiplyScalar(
                lightParam.bounds, lightParam.xyScalar
            );
            FSS.Vector3.setZ(
                v2, lightParam.zOffset
            );

            if (lightParam.autopilot) {
                ox = Math.sin(lightParam.step[0] * now * lightParam.speed);
                oy = Math.cos(lightParam.step[1] * now * lightParam.speed);
                FSS.Vector3.set(
                    v2,
                    lightParam.bounds[0] * ox,
                    lightParam.bounds[1] * oy,
                    lightParam.zOffset
                );
                for (i = scene.lights.length - 1; i >= 0; i--) {
                    light = scene.lights[i];
                    FSS.Vector3.setZ(
                        light.position, lightParam.zOffset
                    );
                    var clamp = Math.clamp(
                            FSS.Vector3.distanceSquared(light.position, v2),
                            lightParam.minDistance,
                            lightParam.maxDistance
                        ),
                        gravity = lightParam.gravity * light.mass / clamp;
                    FSS.Vector3.subtractVectors(light.force, v2, light.position);
                    FSS.Vector3.normalise(light.force);
                    FSS.Vector3.multiplyScalar(light.force, gravity);
                    FSS.Vector3.set(light.acceleration);
                    FSS.Vector3.add(light.acceleration, light.force);
                    FSS.Vector3.add(light.velocity, light.acceleration);
                    FSS.Vector3.multiplyScalar(light.velocity, p.dampening);
                    FSS.Vector3.limit(light.velocity, p.minLimit, p.maxLimit);
                    FSS.Vector3.add(light.position, light.velocity);
                }
            }

            for (v = geometry.vertices.length - 1; v >= 0; v--) {
                vertex = geometry.vertices[v],
                    ox = Math.sin(vertex.time + vertex.step[0] * now * param.speed),
                    oy = Math.cos(vertex.time + vertex.step[1] * now * param.speed),
                    oz = Math.sin(vertex.time + vertex.step[2] * now * param.speed),
                    FSS.Vector3.set(
                        vertex.position,
                        param.xRange * geometry.segmentWidth * ox,
                        param.yRange * geometry.sliceHeight * oz,
                        param.zRange * offset * oz - offset);

                FSS.Vector3.add(vertex.position, vertex.anchor);
            }
            geometry.dirty = true
        }

        function h() {
            if (renderer.render(scene), lightParam.draw) {
                var i, p1, p2, light;
                for (i = scene.lights.length - 1; i >= 0; i--) {
                    light = scene.lights[i];
                    p1 = light.position[0];
                    p2 = light.position[1];
                }
            }
        }
    };
    */
var CompoundCharts = {};

(function() {
    CompoundCharts.BubbleChart = Chart;

    function Chart(config) {
        this.config = config;
        this.init();
    }
    Chart.prototype = {
        addLabel: function() {
            var config = this.config,
                container = this.config.container,
                positions = [
                    ["left", "right"],
                    ["right", "left"]
                ],
                position = positions[config.posType];
            var valuesHtml = "";
            if (config.values.enabled) {
                valuesHtml = '<ul class="value ' + position[0] + '"><li class="bubble-num">' + config.values.data.join('</li><li class="bubble-num">') + '</li></ul>'
            }

            var labelsHtml = "";
            if (config.labels.enabled) {
                labelsHtml = '<ul class="company ' + position[1] + '"><li>' + config.labels.data.join("</li><li>") + '</li></ul>'
            }

            var valuesDataLength = config.values.data.length;
            this.lineHeight = (container.height() - 20) / valuesDataLength;
            //config.labels.enabled ? valuesHtml : "";

            var bubbleContainer = $('<div class="bubble-container">' + valuesHtml + labelsHtml + "</div>").css({
                height: valuesDataLength * this.lineHeight + "px",
                width: container.width() + "px"
            }).appendTo(container);
            bubbleContainer.find("li").css({
                height: this.lineHeight + "px",
                lineHeight: this.lineHeight + "px"
            });
            this.bubbleContainer = bubbleContainer;
        },
        addBubble: function() {
            var config = this.config,
                valuesDataLength = config.values.data.length,
                bubbleContainer = this.bubbleContainer,
                chart = this;
            config.values.data.forEach(function(data, i) {
                var radiusBase = data * config.radiusBase,
                    className = config.bubble.className;
                $('<div class="bubble">' + (config.bubble.innerLabels[i] || "") + "</div>").css({
                    position: "absolute",
                    width: radiusBase + "px",
                    height: radiusBase + "px",
                    lineHeight: radiusBase + "px",
                    textAlign: "center",
                    left: (bubbleContainer.width() - radiusBase) / 2 + "px",
                    top: (valuesDataLength - .5) * chart.lineHeight - radiusBase / 2 + "px",
                    "-webkit-transform": "scale(0.1)",
                    zIndex: valuesDataLength - i
                }).appendTo(bubbleContainer).addClass("string" == typeof className ? className : className[i])
            });
            this.bubble = this.bubbleContainer.find(".bubble");
        },
        init: function() {
            this.addLabel();
            this.addBubble();
        },
        update: function() {
            var bubble = this.bubble,
                config = this.config,
                valuesDataLength = config.values.data.length,
                chart = this;
            config.values.data.forEach(function(data, i) {
                var bubbleObj = bubble[i];
                bubbleObj.offsetWidth, $(bubbleObj).css({
                    "-webkit-transform": "translate3d(0px, " + (i - valuesDataLength + 1) * chart.lineHeight + "px, 0px) scale(1)"
                })
            })
        }
    }
})();
(function() {
    CompoundCharts.DonutGroupChart = a;
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
    };
})();

var Charts = {
    _all: {},
    add: function(name, chart) {
        this._all[name] = chart
    },
    get: function(name) {
        return this._all[name]
    }
};
(function() {
    Charts.add("bubble", {
        init: function() {
            var bc1 = new CompoundCharts.BubbleChart({
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
            bc1.update();
            var bc2 = new CompoundCharts.BubbleChart({
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
            bc2.update();
        }
    });
})();
(function(){
    var a = {
        color: ["#FFF", "#FFF", "#FFF", "#FFF"],
        xAxis: {
            categories: ["13Q3", "13Q4", "14Q1", "14Q2"],
            ticks: {
                enabled: true
            },
            margin: {
                right: 10,
                left: 100
            },
            axis: {
                enabled: false
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
                enabled: false
            },
            label: {
                enabled: false,
                rotate: 0,
                font: {
                    color: "#FFF",
                    fontSize: 10
                }
            },
            axis: {
                enabled: false
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
                    enabled: false
                }
            },
            label: {
                enabled: false
            }
        },
        legend: {
            enabled: false
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
            enabled: false
        }
    };
    Charts.add("area", {
        init: function() {
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
            a.xAxis.margin.left = i;
            e.update(a);
            d.css({
                visibility: "visible",
                width: "0%"
            });
            
            function b(lines, b) {
                var path = new kity.Path,
                    drawer = path.getDrawer(),
                    count = lines.length,
                    i = 0;
                for (i = 0; count > i; i++) {
                    drawer.moveTo(lines[i][0], lines[i][1]), drawer.lineTo(b[count - i - 1][0], b[count - i - 1][1]);
                }
                path.stroke("rgba(255,255,255,0.5)", .5);
                h.addShape(path);
                path.bringTop()
            }

            setTimeout(function() {
                d.css({
                    visibility: "visible",
                    "-webkit-transition": "2000ms",
                    width: "100%"
                }) 
            }, 100); 
            {
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
})();