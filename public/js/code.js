

( () => {
    var jv = Object.create;
    var Dn = Object.defineProperty;
    var Yv = Object.getOwnPropertyDescriptor;
    var Qv = Object.getOwnPropertyNames;
    var $v = Object.getPrototypeOf
      , Zv = Object.prototype.hasOwnProperty;
    var ve = (e, t) => () => (e && (t = e(e = 0)),
    t);
    var d = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Ne = (e, t) => {
        for (var n in t)
            Dn(e, n, {
                get: t[n],
                enumerable: !0
            })
    }
      , pa = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of Qv(t))
                !Zv.call(e, i) && i !== n && Dn(e, i, {
                    get: () => t[i],
                    enumerable: !(r = Yv(t, i)) || r.enumerable
                });
        return e
    }
    ;
    var fe = (e, t, n) => (n = e != null ? jv($v(e)) : {},
    pa(t || !e || !e.__esModule ? Dn(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e))
      , Qe = e => pa(Dn({}, "__esModule", {
        value: !0
    }), e);
    var Yr = d( () => {
        "use strict";
        window.tram = function(e) {
            function t(l, _) {
                var w = new U.Bare;
                return w.init(l, _)
            }
            function n(l) {
                return l.replace(/[A-Z]/g, function(_) {
                    return "-" + _.toLowerCase()
                })
            }
            function r(l) {
                var _ = parseInt(l.slice(1), 16)
                  , w = _ >> 16 & 255
                  , P = _ >> 8 & 255
                  , F = 255 & _;
                return [w, P, F]
            }
            function i(l, _, w) {
                return "#" + (1 << 24 | l << 16 | _ << 8 | w).toString(16).slice(1)
            }
            function o() {}
            function a(l, _) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof _ + "] " + _)
            }
            function u(l, _, w) {
                f("Units do not match [" + l + "]: " + _ + ", " + w)
            }
            function s(l, _, w) {
                if (_ !== void 0 && (w = _),
                l === void 0)
                    return w;
                var P = w;
                return Oe.test(l) || !ke.test(l) ? P = parseInt(l, 10) : ke.test(l) && (P = 1e3 * parseFloat(l)),
                0 > P && (P = 0),
                P === P ? P : w
            }
            function f(l) {
                W.debug && window && window.console.warn(l)
            }
            function y(l) {
                for (var _ = -1, w = l ? l.length : 0, P = []; ++_ < w; ) {
                    var F = l[_];
                    F && P.push(F)
                }
                return P
            }
            var m = function(l, _, w) {
                function P(ae) {
                    return typeof ae == "object"
                }
                function F(ae) {
                    return typeof ae == "function"
                }
                function q() {}
                function te(ae, ne) {
                    function V() {
                        var Se = new se;
                        return F(Se.init) && Se.init.apply(Se, arguments),
                        Se
                    }
                    function se() {}
                    ne === w && (ne = ae,
                    ae = Object),
                    V.Bare = se;
                    var ue, _e = q[l] = ae[l], Ge = se[l] = V[l] = new q;
                    return Ge.constructor = V,
                    V.mixin = function(Se) {
                        return se[l] = V[l] = te(V, Se)[l],
                        V
                    }
                    ,
                    V.open = function(Se) {
                        if (ue = {},
                        F(Se) ? ue = Se.call(V, Ge, _e, V, ae) : P(Se) && (ue = Se),
                        P(ue))
                            for (var nn in ue)
                                _.call(ue, nn) && (Ge[nn] = ue[nn]);
                        return F(Ge.init) || (Ge.init = ae),
                        V
                    }
                    ,
                    V.open(ne)
                }
                return te
            }("prototype", {}.hasOwnProperty)
              , g = {
                ease: ["ease", function(l, _, w, P) {
                    var F = (l /= P) * l
                      , q = F * l;
                    return _ + w * (-2.75 * q * F + 11 * F * F + -15.5 * q + 8 * F + .25 * l)
                }
                ],
                "ease-in": ["ease-in", function(l, _, w, P) {
                    var F = (l /= P) * l
                      , q = F * l;
                    return _ + w * (-1 * q * F + 3 * F * F + -3 * q + 2 * F)
                }
                ],
                "ease-out": ["ease-out", function(l, _, w, P) {
                    var F = (l /= P) * l
                      , q = F * l;
                    return _ + w * (.3 * q * F + -1.6 * F * F + 2.2 * q + -1.8 * F + 1.9 * l)
                }
                ],
                "ease-in-out": ["ease-in-out", function(l, _, w, P) {
                    var F = (l /= P) * l
                      , q = F * l;
                    return _ + w * (2 * q * F + -5 * F * F + 2 * q + 2 * F)
                }
                ],
                linear: ["linear", function(l, _, w, P) {
                    return w * l / P + _
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, _, w, P) {
                    return w * (l /= P) * l + _
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, _, w, P) {
                    return -w * (l /= P) * (l - 2) + _
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, _, w, P) {
                    return (l /= P / 2) < 1 ? w / 2 * l * l + _ : -w / 2 * (--l * (l - 2) - 1) + _
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, _, w, P) {
                    return w * (l /= P) * l * l + _
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, _, w, P) {
                    return w * ((l = l / P - 1) * l * l + 1) + _
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, _, w, P) {
                    return (l /= P / 2) < 1 ? w / 2 * l * l * l + _ : w / 2 * ((l -= 2) * l * l + 2) + _
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, _, w, P) {
                    return w * (l /= P) * l * l * l + _
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, _, w, P) {
                    return -w * ((l = l / P - 1) * l * l * l - 1) + _
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, _, w, P) {
                    return (l /= P / 2) < 1 ? w / 2 * l * l * l * l + _ : -w / 2 * ((l -= 2) * l * l * l - 2) + _
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, _, w, P) {
                    return w * (l /= P) * l * l * l * l + _
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, _, w, P) {
                    return w * ((l = l / P - 1) * l * l * l * l + 1) + _
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, _, w, P) {
                    return (l /= P / 2) < 1 ? w / 2 * l * l * l * l * l + _ : w / 2 * ((l -= 2) * l * l * l * l + 2) + _
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, _, w, P) {
                    return -w * Math.cos(l / P * (Math.PI / 2)) + w + _
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, _, w, P) {
                    return w * Math.sin(l / P * (Math.PI / 2)) + _
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, _, w, P) {
                    return -w / 2 * (Math.cos(Math.PI * l / P) - 1) + _
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, _, w, P) {
                    return l === 0 ? _ : w * Math.pow(2, 10 * (l / P - 1)) + _
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, _, w, P) {
                    return l === P ? _ + w : w * (-Math.pow(2, -10 * l / P) + 1) + _
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, _, w, P) {
                    return l === 0 ? _ : l === P ? _ + w : (l /= P / 2) < 1 ? w / 2 * Math.pow(2, 10 * (l - 1)) + _ : w / 2 * (-Math.pow(2, -10 * --l) + 2) + _
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, _, w, P) {
                    return -w * (Math.sqrt(1 - (l /= P) * l) - 1) + _
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, _, w, P) {
                    return w * Math.sqrt(1 - (l = l / P - 1) * l) + _
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, _, w, P) {
                    return (l /= P / 2) < 1 ? -w / 2 * (Math.sqrt(1 - l * l) - 1) + _ : w / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + _
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, _, w, P, F) {
                    return F === void 0 && (F = 1.70158),
                    w * (l /= P) * l * ((F + 1) * l - F) + _
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, _, w, P, F) {
                    return F === void 0 && (F = 1.70158),
                    w * ((l = l / P - 1) * l * ((F + 1) * l + F) + 1) + _
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, _, w, P, F) {
                    return F === void 0 && (F = 1.70158),
                    (l /= P / 2) < 1 ? w / 2 * l * l * (((F *= 1.525) + 1) * l - F) + _ : w / 2 * ((l -= 2) * l * (((F *= 1.525) + 1) * l + F) + 2) + _
                }
                ]
            }
              , E = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , b = document
              , I = window
              , O = "bkwld-tram"
              , T = /[\-\.0-9]/g
              , R = /[A-Z]/
              , C = "number"
              , N = /^(rgb|#)/
              , M = /(em|cm|mm|in|pt|pc|px)$/
              , D = /(em|cm|mm|in|pt|pc|px|%)$/
              , B = /(deg|rad|turn)$/
              , z = "unitless"
              , j = /(all|none) 0s ease 0s/
              , Z = /^(width|height)$/
              , J = " "
              , k = b.createElement("a")
              , A = ["Webkit", "Moz", "O", "ms"]
              , G = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , Y = function(l) {
                if (l in k.style)
                    return {
                        dom: l,
                        css: l
                    };
                var _, w, P = "", F = l.split("-");
                for (_ = 0; _ < F.length; _++)
                    P += F[_].charAt(0).toUpperCase() + F[_].slice(1);
                for (_ = 0; _ < A.length; _++)
                    if (w = A[_] + P,
                    w in k.style)
                        return {
                            dom: w,
                            css: G[_] + l
                        }
            }
              , K = t.support = {
                bind: Function.prototype.bind,
                transform: Y("transform"),
                transition: Y("transition"),
                backface: Y("backface-visibility"),
                timing: Y("transition-timing-function")
            };
            if (K.transition) {
                var re = K.timing.dom;
                if (k.style[re] = g["ease-in-back"][0],
                !k.style[re])
                    for (var ie in E)
                        g[ie][0] = E[ie]
            }
            var ce = t.frame = function() {
                var l = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
                return l && K.bind ? l.bind(I) : function(_) {
                    I.setTimeout(_, 16)
                }
            }()
              , Ee = t.now = function() {
                var l = I.performance
                  , _ = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return _ && K.bind ? _.bind(l) : Date.now || function() {
                    return +new Date
                }
            }()
              , v = m(function(l) {
                function _(oe, le) {
                    var me = y(("" + oe).split(J))
                      , pe = me[0];
                    le = le || {};
                    var xe = H[pe];
                    if (!xe)
                        return f("Unsupported property: " + pe);
                    if (!le.weak || !this.props[pe]) {
                        var Ve = xe[0]
                          , Pe = this.props[pe];
                        return Pe || (Pe = this.props[pe] = new Ve.Bare),
                        Pe.init(this.$el, me, xe, le),
                        Pe
                    }
                }
                function w(oe, le, me) {
                    if (oe) {
                        var pe = typeof oe;
                        if (le || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        pe == "number" && le)
                            return this.timer = new $({
                                duration: oe,
                                context: this,
                                complete: q
                            }),
                            void (this.active = !0);
                        if (pe == "string" && le) {
                            switch (oe) {
                            case "hide":
                                V.call(this);
                                break;
                            case "stop":
                                te.call(this);
                                break;
                            case "redraw":
                                se.call(this);
                                break;
                            default:
                                _.call(this, oe, me && me[1])
                            }
                            return q.call(this)
                        }
                        if (pe == "function")
                            return void oe.call(this, this);
                        if (pe == "object") {
                            var xe = 0;
                            Ge.call(this, oe, function(Ie, Kv) {
                                Ie.span > xe && (xe = Ie.span),
                                Ie.stop(),
                                Ie.animate(Kv)
                            }, function(Ie) {
                                "wait"in Ie && (xe = s(Ie.wait, 0))
                            }),
                            _e.call(this),
                            xe > 0 && (this.timer = new $({
                                duration: xe,
                                context: this
                            }),
                            this.active = !0,
                            le && (this.timer.complete = q));
                            var Ve = this
                              , Pe = !1
                              , Nn = {};
                            ce(function() {
                                Ge.call(Ve, oe, function(Ie) {
                                    Ie.active && (Pe = !0,
                                    Nn[Ie.name] = Ie.nextStyle)
                                }),
                                Pe && Ve.$el.css(Nn)
                            })
                        }
                    }
                }
                function P(oe) {
                    oe = s(oe, 0),
                    this.active ? this.queue.push({
                        options: oe
                    }) : (this.timer = new $({
                        duration: oe,
                        context: this,
                        complete: q
                    }),
                    this.active = !0)
                }
                function F(oe) {
                    return this.active ? (this.queue.push({
                        options: oe,
                        args: arguments
                    }),
                    void (this.timer.complete = q)) : f("No active transition timer. Use start() or wait() before then().")
                }
                function q() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var oe = this.queue.shift();
                        w.call(this, oe.options, !0, oe.args)
                    }
                }
                function te(oe) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var le;
                    typeof oe == "string" ? (le = {},
                    le[oe] = 1) : le = typeof oe == "object" && oe != null ? oe : this.props,
                    Ge.call(this, le, Se),
                    _e.call(this)
                }
                function ae(oe) {
                    te.call(this, oe),
                    Ge.call(this, oe, nn, Bv)
                }
                function ne(oe) {
                    typeof oe != "string" && (oe = "block"),
                    this.el.style.display = oe
                }
                function V() {
                    te.call(this),
                    this.el.style.display = "none"
                }
                function se() {
                    this.el.offsetHeight
                }
                function ue() {
                    te.call(this),
                    e.removeData(this.el, O),
                    this.$el = this.el = null
                }
                function _e() {
                    var oe, le, me = [];
                    this.upstream && me.push(this.upstream);
                    for (oe in this.props)
                        le = this.props[oe],
                        le.active && me.push(le.string);
                    me = me.join(","),
                    this.style !== me && (this.style = me,
                    this.el.style[K.transition.dom] = me)
                }
                function Ge(oe, le, me) {
                    var pe, xe, Ve, Pe, Nn = le !== Se, Ie = {};
                    for (pe in oe)
                        Ve = oe[pe],
                        pe in de ? (Ie.transform || (Ie.transform = {}),
                        Ie.transform[pe] = Ve) : (R.test(pe) && (pe = n(pe)),
                        pe in H ? Ie[pe] = Ve : (Pe || (Pe = {}),
                        Pe[pe] = Ve));
                    for (pe in Ie) {
                        if (Ve = Ie[pe],
                        xe = this.props[pe],
                        !xe) {
                            if (!Nn)
                                continue;
                            xe = _.call(this, pe)
                        }
                        le.call(this, xe, Ve)
                    }
                    me && Pe && me.call(this, Pe)
                }
                function Se(oe) {
                    oe.stop()
                }
                function nn(oe, le) {
                    oe.set(le)
                }
                function Bv(oe) {
                    this.$el.css(oe)
                }
                function Ue(oe, le) {
                    l[oe] = function() {
                        return this.children ? zv.call(this, le, arguments) : (this.el && le.apply(this, arguments),
                        this)
                    }
                }
                function zv(oe, le) {
                    var me, pe = this.children.length;
                    for (me = 0; pe > me; me++)
                        oe.apply(this.children[me], le);
                    return this
                }
                l.init = function(oe) {
                    if (this.$el = e(oe),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    W.keepInherited && !W.fallback) {
                        var le = X(this.el, "transition");
                        le && !j.test(le) && (this.upstream = le)
                    }
                    K.backface && W.hideBackface && p(this.el, K.backface.css, "hidden")
                }
                ,
                Ue("add", _),
                Ue("start", w),
                Ue("wait", P),
                Ue("then", F),
                Ue("next", q),
                Ue("stop", te),
                Ue("set", ae),
                Ue("show", ne),
                Ue("hide", V),
                Ue("redraw", se),
                Ue("destroy", ue)
            })
              , U = m(v, function(l) {
                function _(w, P) {
                    var F = e.data(w, O) || e.data(w, O, new v.Bare);
                    return F.el || F.init(w),
                    P ? F.start(P) : F
                }
                l.init = function(w, P) {
                    var F = e(w);
                    if (!F.length)
                        return this;
                    if (F.length === 1)
                        return _(F[0], P);
                    var q = [];
                    return F.each(function(te, ae) {
                        q.push(_(ae, P))
                    }),
                    this.children = q,
                    this
                }
            })
              , h = m(function(l) {
                function _() {
                    var q = this.get();
                    this.update("auto");
                    var te = this.get();
                    return this.update(q),
                    te
                }
                function w(q, te, ae) {
                    return te !== void 0 && (ae = te),
                    q in g ? q : ae
                }
                function P(q) {
                    var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(q);
                    return (te ? i(te[1], te[2], te[3]) : q).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var F = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                l.init = function(q, te, ae, ne) {
                    this.$el = q,
                    this.el = q[0];
                    var V = te[0];
                    ae[2] && (V = ae[2]),
                    Q[V] && (V = Q[V]),
                    this.name = V,
                    this.type = ae[1],
                    this.duration = s(te[1], this.duration, F.duration),
                    this.ease = w(te[2], this.ease, F.ease),
                    this.delay = s(te[3], this.delay, F.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = Z.test(this.name),
                    this.unit = ne.unit || this.unit || W.defaultUnit,
                    this.angle = ne.angle || this.angle || W.defaultAngle,
                    W.fallback || ne.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + J + this.duration + "ms" + (this.ease != "ease" ? J + g[this.ease][0] : "") + (this.delay ? J + this.delay + "ms" : ""))
                }
                ,
                l.set = function(q) {
                    q = this.convert(q, this.type),
                    this.update(q),
                    this.redraw()
                }
                ,
                l.transition = function(q) {
                    this.active = !0,
                    q = this.convert(q, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    q == "auto" && (q = _.call(this))),
                    this.nextStyle = q
                }
                ,
                l.fallback = function(q) {
                    var te = this.el.style[this.name] || this.convert(this.get(), this.type);
                    q = this.convert(q, this.type),
                    this.auto && (te == "auto" && (te = this.convert(this.get(), this.type)),
                    q == "auto" && (q = _.call(this))),
                    this.tween = new L({
                        from: te,
                        to: q,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.get = function() {
                    return X(this.el, this.name)
                }
                ,
                l.update = function(q) {
                    p(this.el, this.name, q)
                }
                ,
                l.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    p(this.el, this.name, this.get()));
                    var q = this.tween;
                    q && q.context && q.destroy()
                }
                ,
                l.convert = function(q, te) {
                    if (q == "auto" && this.auto)
                        return q;
                    var ae, ne = typeof q == "number", V = typeof q == "string";
                    switch (te) {
                    case C:
                        if (ne)
                            return q;
                        if (V && q.replace(T, "") === "")
                            return +q;
                        ae = "number(unitless)";
                        break;
                    case N:
                        if (V) {
                            if (q === "" && this.original)
                                return this.original;
                            if (te.test(q))
                                return q.charAt(0) == "#" && q.length == 7 ? q : P(q)
                        }
                        ae = "hex or rgb string";
                        break;
                    case M:
                        if (ne)
                            return q + this.unit;
                        if (V && te.test(q))
                            return q;
                        ae = "number(px) or string(unit)";
                        break;
                    case D:
                        if (ne)
                            return q + this.unit;
                        if (V && te.test(q))
                            return q;
                        ae = "number(px) or string(unit or %)";
                        break;
                    case B:
                        if (ne)
                            return q + this.angle;
                        if (V && te.test(q))
                            return q;
                        ae = "number(deg) or string(angle)";
                        break;
                    case z:
                        if (ne || V && D.test(q))
                            return q;
                        ae = "number(unitless) or string(unit or %)"
                    }
                    return a(ae, q),
                    q
                }
                ,
                l.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , c = m(h, function(l, _) {
                l.init = function() {
                    _.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), N))
                }
            })
              , S = m(h, function(l, _) {
                l.init = function() {
                    _.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                l.get = function() {
                    return this.$el[this.name]()
                }
                ,
                l.update = function(w) {
                    this.$el[this.name](w)
                }
            })
              , x = m(h, function(l, _) {
                function w(P, F) {
                    var q, te, ae, ne, V;
                    for (q in P)
                        ne = de[q],
                        ae = ne[0],
                        te = ne[1] || q,
                        V = this.convert(P[q], ae),
                        F.call(this, te, V, ae)
                }
                l.init = function() {
                    _.init.apply(this, arguments),
                    this.current || (this.current = {},
                    de.perspective && W.perspective && (this.current.perspective = W.perspective,
                    p(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                l.set = function(P) {
                    w.call(this, P, function(F, q) {
                        this.current[F] = q
                    }),
                    p(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                l.transition = function(P) {
                    var F = this.values(P);
                    this.tween = new ee({
                        current: this.current,
                        values: F,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var q, te = {};
                    for (q in this.current)
                        te[q] = q in F ? F[q] : this.current[q];
                    this.active = !0,
                    this.nextStyle = this.style(te)
                }
                ,
                l.fallback = function(P) {
                    var F = this.values(P);
                    this.tween = new ee({
                        current: this.current,
                        values: F,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.update = function() {
                    p(this.el, this.name, this.style(this.current))
                }
                ,
                l.style = function(P) {
                    var F, q = "";
                    for (F in P)
                        q += F + "(" + P[F] + ") ";
                    return q
                }
                ,
                l.values = function(P) {
                    var F, q = {};
                    return w.call(this, P, function(te, ae, ne) {
                        q[te] = ae,
                        this.current[te] === void 0 && (F = 0,
                        ~te.indexOf("scale") && (F = 1),
                        this.current[te] = this.convert(F, ne))
                    }),
                    q
                }
            })
              , L = m(function(l) {
                function _(V) {
                    ae.push(V) === 1 && ce(w)
                }
                function w() {
                    var V, se, ue, _e = ae.length;
                    if (_e)
                        for (ce(w),
                        se = Ee(),
                        V = _e; V--; )
                            ue = ae[V],
                            ue && ue.render(se)
                }
                function P(V) {
                    var se, ue = e.inArray(V, ae);
                    ue >= 0 && (se = ae.slice(ue + 1),
                    ae.length = ue,
                    se.length && (ae = ae.concat(se)))
                }
                function F(V) {
                    return Math.round(V * ne) / ne
                }
                function q(V, se, ue) {
                    return i(V[0] + ue * (se[0] - V[0]), V[1] + ue * (se[1] - V[1]), V[2] + ue * (se[2] - V[2]))
                }
                var te = {
                    ease: g.ease[1],
                    from: 0,
                    to: 1
                };
                l.init = function(V) {
                    this.duration = V.duration || 0,
                    this.delay = V.delay || 0;
                    var se = V.ease || te.ease;
                    g[se] && (se = g[se][1]),
                    typeof se != "function" && (se = te.ease),
                    this.ease = se,
                    this.update = V.update || o,
                    this.complete = V.complete || o,
                    this.context = V.context || this,
                    this.name = V.name;
                    var ue = V.from
                      , _e = V.to;
                    ue === void 0 && (ue = te.from),
                    _e === void 0 && (_e = te.to),
                    this.unit = V.unit || "",
                    typeof ue == "number" && typeof _e == "number" ? (this.begin = ue,
                    this.change = _e - ue) : this.format(_e, ue),
                    this.value = this.begin + this.unit,
                    this.start = Ee(),
                    V.autoplay !== !1 && this.play()
                }
                ,
                l.play = function() {
                    this.active || (this.start || (this.start = Ee()),
                    this.active = !0,
                    _(this))
                }
                ,
                l.stop = function() {
                    this.active && (this.active = !1,
                    P(this))
                }
                ,
                l.render = function(V) {
                    var se, ue = V - this.start;
                    if (this.delay) {
                        if (ue <= this.delay)
                            return;
                        ue -= this.delay
                    }
                    if (ue < this.duration) {
                        var _e = this.ease(ue, 0, 1, this.duration);
                        return se = this.startRGB ? q(this.startRGB, this.endRGB, _e) : F(this.begin + _e * this.change),
                        this.value = se + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    se = this.endHex || this.begin + this.change,
                    this.value = se + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                l.format = function(V, se) {
                    if (se += "",
                    V += "",
                    V.charAt(0) == "#")
                        return this.startRGB = r(se),
                        this.endRGB = r(V),
                        this.endHex = V,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var ue = se.replace(T, "")
                          , _e = V.replace(T, "");
                        ue !== _e && u("tween", se, V),
                        this.unit = ue
                    }
                    se = parseFloat(se),
                    V = parseFloat(V),
                    this.begin = this.value = se,
                    this.change = V - se
                }
                ,
                l.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var ae = []
                  , ne = 1e3
            })
              , $ = m(L, function(l) {
                l.init = function(_) {
                    this.duration = _.duration || 0,
                    this.complete = _.complete || o,
                    this.context = _.context,
                    this.play()
                }
                ,
                l.render = function(_) {
                    var w = _ - this.start;
                    w < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , ee = m(L, function(l, _) {
                l.init = function(w) {
                    this.context = w.context,
                    this.update = w.update,
                    this.tweens = [],
                    this.current = w.current;
                    var P, F;
                    for (P in w.values)
                        F = w.values[P],
                        this.current[P] !== F && this.tweens.push(new L({
                            name: P,
                            from: this.current[P],
                            to: F,
                            duration: w.duration,
                            delay: w.delay,
                            ease: w.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                l.render = function(w) {
                    var P, F, q = this.tweens.length, te = !1;
                    for (P = q; P--; )
                        F = this.tweens[P],
                        F.context && (F.render(w),
                        this.current[F.name] = F.value,
                        te = !0);
                    return te ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                l.destroy = function() {
                    if (_.destroy.call(this),
                    this.tweens) {
                        var w, P = this.tweens.length;
                        for (w = P; w--; )
                            this.tweens[w].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , W = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !K.transition,
                agentTests: []
            };
            t.fallback = function(l) {
                if (!K.transition)
                    return W.fallback = !0;
                W.agentTests.push("(" + l + ")");
                var _ = new RegExp(W.agentTests.join("|"),"i");
                W.fallback = _.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(l) {
                return new L(l)
            }
            ,
            t.delay = function(l, _, w) {
                return new $({
                    complete: _,
                    duration: l,
                    context: w
                })
            }
            ,
            e.fn.tram = function(l) {
                return t.call(null, this, l)
            }
            ;
            var p = e.style
              , X = e.css
              , Q = {
                transform: K.transform && K.transform.css
            }
              , H = {
                color: [c, N],
                background: [c, N, "background-color"],
                "outline-color": [c, N],
                "border-color": [c, N],
                "border-top-color": [c, N],
                "border-right-color": [c, N],
                "border-bottom-color": [c, N],
                "border-left-color": [c, N],
                "border-width": [h, M],
                "border-top-width": [h, M],
                "border-right-width": [h, M],
                "border-bottom-width": [h, M],
                "border-left-width": [h, M],
                "border-spacing": [h, M],
                "letter-spacing": [h, M],
                margin: [h, M],
                "margin-top": [h, M],
                "margin-right": [h, M],
                "margin-bottom": [h, M],
                "margin-left": [h, M],
                padding: [h, M],
                "padding-top": [h, M],
                "padding-right": [h, M],
                "padding-bottom": [h, M],
                "padding-left": [h, M],
                "outline-width": [h, M],
                opacity: [h, C],
                top: [h, D],
                right: [h, D],
                bottom: [h, D],
                left: [h, D],
                "font-size": [h, D],
                "text-indent": [h, D],
                "word-spacing": [h, D],
                width: [h, D],
                "min-width": [h, D],
                "max-width": [h, D],
                height: [h, D],
                "min-height": [h, D],
                "max-height": [h, D],
                "line-height": [h, z],
                "scroll-top": [S, C, "scrollTop"],
                "scroll-left": [S, C, "scrollLeft"]
            }
              , de = {};
            K.transform && (H.transform = [x],
            de = {
                x: [D, "translateX"],
                y: [D, "translateY"],
                rotate: [B],
                rotateX: [B],
                rotateY: [B],
                scale: [C],
                scaleX: [C],
                scaleY: [C],
                skew: [B],
                skewX: [B],
                skewY: [B]
            }),
            K.transform && K.backface && (de.z = [D, "translateZ"],
            de.rotateZ = [B],
            de.scaleZ = [C],
            de.perspective = [M]);
            var Oe = /ms/
              , ke = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var ha = d( (FF, ga) => {
        "use strict";
        var Jv = window.$
          , eE = Yr() && Jv.tram;
        ga.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , n = Array.prototype
              , r = Object.prototype
              , i = Function.prototype
              , o = n.push
              , a = n.slice
              , u = n.concat
              , s = r.toString
              , f = r.hasOwnProperty
              , y = n.forEach
              , m = n.map
              , g = n.reduce
              , E = n.reduceRight
              , b = n.filter
              , I = n.every
              , O = n.some
              , T = n.indexOf
              , R = n.lastIndexOf
              , C = Array.isArray
              , N = Object.keys
              , M = i.bind
              , D = e.each = e.forEach = function(A, G, Y) {
                if (A == null)
                    return A;
                if (y && A.forEach === y)
                    A.forEach(G, Y);
                else if (A.length === +A.length) {
                    for (var K = 0, re = A.length; K < re; K++)
                        if (G.call(Y, A[K], K, A) === t)
                            return
                } else
                    for (var ie = e.keys(A), K = 0, re = ie.length; K < re; K++)
                        if (G.call(Y, A[ie[K]], ie[K], A) === t)
                            return;
                return A
            }
            ;
            e.map = e.collect = function(A, G, Y) {
                var K = [];
                return A == null ? K : m && A.map === m ? A.map(G, Y) : (D(A, function(re, ie, ce) {
                    K.push(G.call(Y, re, ie, ce))
                }),
                K)
            }
            ,
            e.find = e.detect = function(A, G, Y) {
                var K;
                return B(A, function(re, ie, ce) {
                    if (G.call(Y, re, ie, ce))
                        return K = re,
                        !0
                }),
                K
            }
            ,
            e.filter = e.select = function(A, G, Y) {
                var K = [];
                return A == null ? K : b && A.filter === b ? A.filter(G, Y) : (D(A, function(re, ie, ce) {
                    G.call(Y, re, ie, ce) && K.push(re)
                }),
                K)
            }
            ;
            var B = e.some = e.any = function(A, G, Y) {
                G || (G = e.identity);
                var K = !1;
                return A == null ? K : O && A.some === O ? A.some(G, Y) : (D(A, function(re, ie, ce) {
                    if (K || (K = G.call(Y, re, ie, ce)))
                        return t
                }),
                !!K)
            }
            ;
            e.contains = e.include = function(A, G) {
                return A == null ? !1 : T && A.indexOf === T ? A.indexOf(G) != -1 : B(A, function(Y) {
                    return Y === G
                })
            }
            ,
            e.delay = function(A, G) {
                var Y = a.call(arguments, 2);
                return setTimeout(function() {
                    return A.apply(null, Y)
                }, G)
            }
            ,
            e.defer = function(A) {
                return e.delay.apply(e, [A, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(A) {
                var G, Y, K;
                return function() {
                    G || (G = !0,
                    Y = arguments,
                    K = this,
                    eE.frame(function() {
                        G = !1,
                        A.apply(K, Y)
                    }))
                }
            }
            ,
            e.debounce = function(A, G, Y) {
                var K, re, ie, ce, Ee, v = function() {
                    var U = e.now() - ce;
                    U < G ? K = setTimeout(v, G - U) : (K = null,
                    Y || (Ee = A.apply(ie, re),
                    ie = re = null))
                };
                return function() {
                    ie = this,
                    re = arguments,
                    ce = e.now();
                    var U = Y && !K;
                    return K || (K = setTimeout(v, G)),
                    U && (Ee = A.apply(ie, re),
                    ie = re = null),
                    Ee
                }
            }
            ,
            e.defaults = function(A) {
                if (!e.isObject(A))
                    return A;
                for (var G = 1, Y = arguments.length; G < Y; G++) {
                    var K = arguments[G];
                    for (var re in K)
                        A[re] === void 0 && (A[re] = K[re])
                }
                return A
            }
            ,
            e.keys = function(A) {
                if (!e.isObject(A))
                    return [];
                if (N)
                    return N(A);
                var G = [];
                for (var Y in A)
                    e.has(A, Y) && G.push(Y);
                return G
            }
            ,
            e.has = function(A, G) {
                return f.call(A, G)
            }
            ,
            e.isObject = function(A) {
                return A === Object(A)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var z = /(.)^/
              , j = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , Z = /\\|'|\r|\n|\u2028|\u2029/g
              , J = function(A) {
                return "\\" + j[A]
            }
              , k = /^\s*(\w|\$)+\s*$/;
            return e.template = function(A, G, Y) {
                !G && Y && (G = Y),
                G = e.defaults({}, G, e.templateSettings);
                var K = RegExp([(G.escape || z).source, (G.interpolate || z).source, (G.evaluate || z).source].join("|") + "|$", "g")
                  , re = 0
                  , ie = "__p+='";
                A.replace(K, function(U, h, c, S, x) {
                    return ie += A.slice(re, x).replace(Z, J),
                    re = x + U.length,
                    h ? ie += `'+
((__t=(` + h + `))==null?'':_.escape(__t))+
'` : c ? ie += `'+
((__t=(` + c + `))==null?'':__t)+
'` : S && (ie += `';
` + S + `
__p+='`),
                    U
                }),
                ie += `';
`;
                var ce = G.variable;
                if (ce) {
                    if (!k.test(ce))
                        throw new Error("variable is not a bare identifier: " + ce)
                } else
                    ie = `with(obj||{}){
` + ie + `}
`,
                    ce = "obj";
                ie = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ie + `return __p;
`;
                var Ee;
                try {
                    Ee = new Function(G.variable || "obj","_",ie)
                } catch (U) {
                    throw U.source = ie,
                    U
                }
                var v = function(U) {
                    return Ee.call(this, U, e)
                };
                return v.source = "function(" + ce + `){
` + ie + "}",
                v
            }
            ,
            e
        }()
    }
    );
    var De = d( (qF, ba) => {
        "use strict";
        var ge = {}
          , St = {}
          , xt = []
          , $r = window.Webflow || []
          , lt = window.jQuery
          , He = lt(window)
          , tE = lt(document)
          , $e = lt.isFunction
          , We = ge._ = ha()
          , Ea = ge.tram = Yr() && lt.tram
          , Fn = !1
          , Zr = !1;
        Ea.config.hideBackface = !1;
        Ea.config.keepInherited = !0;
        ge.define = function(e, t, n) {
            St[e] && ya(St[e]);
            var r = St[e] = t(lt, We, n) || {};
            return ma(r),
            r
        }
        ;
        ge.require = function(e) {
            return St[e]
        }
        ;
        function ma(e) {
            ge.env() && ($e(e.design) && He.on("__wf_design", e.design),
            $e(e.preview) && He.on("__wf_preview", e.preview)),
            $e(e.destroy) && He.on("__wf_destroy", e.destroy),
            e.ready && $e(e.ready) && nE(e)
        }
        function nE(e) {
            if (Fn) {
                e.ready();
                return
            }
            We.contains(xt, e.ready) || xt.push(e.ready)
        }
        function ya(e) {
            $e(e.design) && He.off("__wf_design", e.design),
            $e(e.preview) && He.off("__wf_preview", e.preview),
            $e(e.destroy) && He.off("__wf_destroy", e.destroy),
            e.ready && $e(e.ready) && rE(e)
        }
        function rE(e) {
            xt = We.filter(xt, function(t) {
                return t !== e.ready
            })
        }
        ge.push = function(e) {
            if (Fn) {
                $e(e) && e();
                return
            }
            $r.push(e)
        }
        ;
        ge.env = function(e) {
            var t = window.__wf_design
              , n = typeof t < "u";
            if (!e)
                return n;
            if (e === "design")
                return n && t;
            if (e === "preview")
                return n && !t;
            if (e === "slug")
                return n && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var Mn = navigator.userAgent.toLowerCase()
          , _a = ge.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , iE = ge.env.chrome = /chrome/.test(Mn) && /Google/.test(navigator.vendor) && parseInt(Mn.match(/chrome\/(\d+)\./)[1], 10)
          , oE = ge.env.ios = /(ipod|iphone|ipad)/.test(Mn);
        ge.env.safari = /safari/.test(Mn) && !iE && !oE;
        var Qr;
        _a && tE.on("touchstart mousedown", function(e) {
            Qr = e.target
        });
        ge.validClick = _a ? function(e) {
            return e === Qr || lt.contains(e, Qr)
        }
        : function() {
            return !0
        }
        ;
        var Ia = "resize.webflow orientationchange.webflow load.webflow"
          , aE = "scroll.webflow " + Ia;
        ge.resize = Jr(He, Ia);
        ge.scroll = Jr(He, aE);
        ge.redraw = Jr();
        function Jr(e, t) {
            var n = []
              , r = {};
            return r.up = We.throttle(function(i) {
                We.each(n, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, r.up),
            r.on = function(i) {
                typeof i == "function" && (We.contains(n, i) || n.push(i))
            }
            ,
            r.off = function(i) {
                if (!arguments.length) {
                    n = [];
                    return
                }
                n = We.filter(n, function(o) {
                    return o !== i
                })
            }
            ,
            r
        }
        ge.location = function(e) {
            window.location = e
        }
        ;
        ge.env() && (ge.location = function() {}
        );
        ge.ready = function() {
            Fn = !0,
            Zr ? sE() : We.each(xt, va),
            We.each($r, va),
            ge.resize.up()
        }
        ;
        function va(e) {
            $e(e) && e()
        }
        function sE() {
            Zr = !1,
            We.each(St, ma)
        }
        var mt;
        ge.load = function(e) {
            mt.then(e)
        }
        ;
        function Ta() {
            mt && (mt.reject(),
            He.off("load", mt.resolve)),
            mt = new lt.Deferred,
            He.on("load", mt.resolve)
        }
        ge.destroy = function(e) {
            e = e || {},
            Zr = !0,
            He.triggerHandler("__wf_destroy"),
            e.domready != null && (Fn = e.domready),
            We.each(St, ya),
            ge.resize.off(),
            ge.scroll.off(),
            ge.redraw.off(),
            xt = [],
            $r = [],
            mt.state() === "pending" && Ta()
        }
        ;
        lt(ge.ready);
        Ta();
        ba.exports = window.Webflow = ge
    }
    );
    var Oa = d( (kF, Aa) => {
        "use strict";
        var wa = De();
        wa.define("brand", Aa.exports = function(e) {
            var t = {}, n = document, r = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, u = /PhantomJS/i.test(navigator.userAgent), s = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", f;
            t.ready = function() {
                var E = r.attr("data-wf-status")
                  , b = r.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(b) && a.hostname !== b && (E = !0),
                E && !u && (f = f || m(),
                g(),
                setTimeout(g, 500),
                e(n).off(s, y).on(s, y))
            }
            ;
            function y() {
                var E = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen || n.msFullscreenElement || !!n.webkitFullscreenElement;
                e(f).attr("style", E ? "display: none !important;" : "")
            }
            function m() {
                var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return E.append(b, I),
                E[0]
            }
            function g() {
                var E = i.children(o)
                  , b = E.length && E.get(0) === f
                  , I = wa.env("editor");
                if (b) {
                    I && E.remove();
                    return
                }
                E.length && E.remove(),
                I || i.append(f)
            }
            return t
        }
        )
    }
    );
    var xa = d( (GF, Sa) => {
        "use strict";
        var ei = De();
        ei.define("edit", Sa.exports = function(e, t, n) {
            if (n = n || {},
            (ei.env("test") || ei.env("frame")) && !n.fixture && !uE())
                return {
                    exit: 1
                };
            var r = {}, i = e(window), o = e(document.documentElement), a = document.location, u = "hashchange", s, f = n.load || g, y = !1;
            try {
                y = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            y ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : i.on(u, m).triggerHandler(u);
            function m() {
                s || /\?edit/.test(a.hash) && f()
            }
            function g() {
                s = !0,
                window.WebflowEditor = !0,
                i.off(u, m),
                R(function(N) {
                    e.ajax({
                        url: T("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: E(N)
                    })
                })
            }
            function E(N) {
                return function(M) {
                    if (!M) {
                        console.error("Could not load editor data");
                        return
                    }
                    M.thirdPartyCookiesSupported = N,
                    b(O(M.scriptPath), function() {
                        window.WebflowEditor(M)
                    })
                }
            }
            function b(N, M) {
                e.ajax({
                    type: "GET",
                    url: N,
                    dataType: "script",
                    cache: !0
                }).then(M, I)
            }
            function I(N, M, D) {
                throw console.error("Could not load editor script: " + M),
                D
            }
            function O(N) {
                return N.indexOf("//") >= 0 ? N : T("https://editor-api.webflow.com" + N)
            }
            function T(N) {
                return N.replace(/([^:])\/\//g, "$1/")
            }
            function R(N) {
                var M = window.document.createElement("iframe");
                M.src = "https://webflow.com/site/third-party-cookie-check.html",
                M.style.display = "none",
                M.sandbox = "allow-scripts allow-same-origin";
                var D = function(B) {
                    B.data === "WF_third_party_cookies_unsupported" ? (C(M, D),
                    N(!1)) : B.data === "WF_third_party_cookies_supported" && (C(M, D),
                    N(!0))
                };
                M.onerror = function() {
                    C(M, D),
                    N(!1)
                }
                ,
                window.addEventListener("message", D, !1),
                window.document.body.appendChild(M)
            }
            function C(N, M) {
                window.removeEventListener("message", M, !1),
                N.remove()
            }
            return r
        }
        );
        function uE() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var Ca = d( (XF, Ra) => {
        "use strict";
        var cE = De();
        cE.define("focus-visible", Ra.exports = function() {
            function e(n) {
                var r = !0
                  , i = !1
                  , o = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function u(C) {
                    return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList"in C && "contains"in C.classList)
                }
                function s(C) {
                    var N = C.type
                      , M = C.tagName;
                    return !!(M === "INPUT" && a[N] && !C.readOnly || M === "TEXTAREA" && !C.readOnly || C.isContentEditable)
                }
                function f(C) {
                    C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true")
                }
                function y(C) {
                    C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible")
                }
                function m(C) {
                    C.metaKey || C.altKey || C.ctrlKey || (u(n.activeElement) && f(n.activeElement),
                    r = !0)
                }
                function g() {
                    r = !1
                }
                function E(C) {
                    u(C.target) && (r || s(C.target)) && f(C.target)
                }
                function b(C) {
                    u(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    y(C.target))
                }
                function I() {
                    document.visibilityState === "hidden" && (i && (r = !0),
                    O())
                }
                function O() {
                    document.addEventListener("mousemove", R),
                    document.addEventListener("mousedown", R),
                    document.addEventListener("mouseup", R),
                    document.addEventListener("pointermove", R),
                    document.addEventListener("pointerdown", R),
                    document.addEventListener("pointerup", R),
                    document.addEventListener("touchmove", R),
                    document.addEventListener("touchstart", R),
                    document.addEventListener("touchend", R)
                }
                function T() {
                    document.removeEventListener("mousemove", R),
                    document.removeEventListener("mousedown", R),
                    document.removeEventListener("mouseup", R),
                    document.removeEventListener("pointermove", R),
                    document.removeEventListener("pointerdown", R),
                    document.removeEventListener("pointerup", R),
                    document.removeEventListener("touchmove", R),
                    document.removeEventListener("touchstart", R),
                    document.removeEventListener("touchend", R)
                }
                function R(C) {
                    C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (r = !1,
                    T())
                }
                document.addEventListener("keydown", m, !0),
                document.addEventListener("mousedown", g, !0),
                document.addEventListener("pointerdown", g, !0),
                document.addEventListener("touchstart", g, !0),
                document.addEventListener("visibilitychange", I, !0),
                O(),
                n.addEventListener("focus", E, !0),
                n.addEventListener("blur", b, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Na = d( (UF, Pa) => {
        "use strict";
        var La = De();
        La.define("focus", Pa.exports = function() {
            var e = []
              , t = !1;
            function n(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function r(a) {
                var u = a.target
                  , s = u.tagName;
                return /^a$/i.test(s) && u.href != null || /^(button|textarea)$/i.test(s) && u.disabled !== !0 || /^input$/i.test(s) && /^(button|reset|submit|radio|checkbox)$/i.test(u.type) && !u.disabled || !/^(button|input|textarea|select|a)$/i.test(s) && !Number.isNaN(Number.parseFloat(u.tabIndex)) || /^audio$/i.test(s) || /^video$/i.test(s) && u.controls === !0
            }
            function i(a) {
                r(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var u = e.pop();
                        u.target.dispatchEvent(new MouseEvent(u.type,u))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && La.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var Fa = d( (VF, Ma) => {
        "use strict";
        var ti = window.jQuery
          , Ze = {}
          , qn = []
          , Da = ".w-ix"
          , kn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                ti(t).triggerHandler(Ze.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                ti(t).triggerHandler(Ze.types.OUTRO))
            }
        };
        Ze.triggers = {};
        Ze.types = {
            INTRO: "w-ix-intro" + Da,
            OUTRO: "w-ix-outro" + Da
        };
        Ze.init = function() {
            for (var e = qn.length, t = 0; t < e; t++) {
                var n = qn[t];
                n[0](0, n[1])
            }
            qn = [],
            ti.extend(Ze.triggers, kn)
        }
        ;
        Ze.async = function() {
            for (var e in kn) {
                var t = kn[e];
                kn.hasOwnProperty(e) && (Ze.triggers[e] = function(n, r) {
                    qn.push([t, r])
                }
                )
            }
        }
        ;
        Ze.async();
        Ma.exports = Ze
    }
    );
    var rn = d( (WF, Ga) => {
        "use strict";
        var ni = Fa();
        function qa(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(n)
        }
        var lE = window.jQuery
          , Gn = {}
          , ka = ".w-ix"
          , fE = {
            reset: function(e, t) {
                ni.triggers.reset(e, t)
            },
            intro: function(e, t) {
                ni.triggers.intro(e, t),
                qa(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                ni.triggers.outro(e, t),
                qa(t, "COMPONENT_INACTIVE")
            }
        };
        Gn.triggers = {};
        Gn.types = {
            INTRO: "w-ix-intro" + ka,
            OUTRO: "w-ix-outro" + ka
        };
        lE.extend(Gn.triggers, fE);
        Ga.exports = Gn
    }
    );
    var ri = d( (HF, Xa) => {
        var dE = typeof global == "object" && global && global.Object === Object && global;
        Xa.exports = dE
    }
    );
    var Be = d( (BF, Ua) => {
        var pE = ri()
          , gE = typeof self == "object" && self && self.Object === Object && self
          , hE = pE || gE || Function("return this")();
        Ua.exports = hE
    }
    );
    var Rt = d( (zF, Va) => {
        var vE = Be()
          , EE = vE.Symbol;
        Va.exports = EE
    }
    );
    var za = d( (KF, Ba) => {
        var Wa = Rt()
          , Ha = Object.prototype
          , mE = Ha.hasOwnProperty
          , yE = Ha.toString
          , on = Wa ? Wa.toStringTag : void 0;
        function _E(e) {
            var t = mE.call(e, on)
              , n = e[on];
            try {
                e[on] = void 0;
                var r = !0
            } catch {}
            var i = yE.call(e);
            return r && (t ? e[on] = n : delete e[on]),
            i
        }
        Ba.exports = _E
    }
    );
    var ja = d( (jF, Ka) => {
        var IE = Object.prototype
          , TE = IE.toString;
        function bE(e) {
            return TE.call(e)
        }
        Ka.exports = bE
    }
    );
    var ft = d( (YF, $a) => {
        var Ya = Rt()
          , wE = za()
          , AE = ja()
          , OE = "[object Null]"
          , SE = "[object Undefined]"
          , Qa = Ya ? Ya.toStringTag : void 0;
        function xE(e) {
            return e == null ? e === void 0 ? SE : OE : Qa && Qa in Object(e) ? wE(e) : AE(e)
        }
        $a.exports = xE
    }
    );
    var ii = d( (QF, Za) => {
        function RE(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        Za.exports = RE
    }
    );
    var oi = d( ($F, Ja) => {
        var CE = ii()
          , LE = CE(Object.getPrototypeOf, Object);
        Ja.exports = LE
    }
    );
    var ot = d( (ZF, es) => {
        function PE(e) {
            return e != null && typeof e == "object"
        }
        es.exports = PE
    }
    );
    var ai = d( (JF, ns) => {
        var NE = ft()
          , DE = oi()
          , ME = ot()
          , FE = "[object Object]"
          , qE = Function.prototype
          , kE = Object.prototype
          , ts = qE.toString
          , GE = kE.hasOwnProperty
          , XE = ts.call(Object);
        function UE(e) {
            if (!ME(e) || NE(e) != FE)
                return !1;
            var t = DE(e);
            if (t === null)
                return !0;
            var n = GE.call(t, "constructor") && t.constructor;
            return typeof n == "function" && n instanceof n && ts.call(n) == XE
        }
        ns.exports = UE
    }
    );
    var rs = d(si => {
        "use strict";
        Object.defineProperty(si, "__esModule", {
            value: !0
        });
        si.default = VE;
        function VE(e) {
            var t, n = e.Symbol;
            return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"),
            n.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var is = d( (ci, ui) => {
        "use strict";
        Object.defineProperty(ci, "__esModule", {
            value: !0
        });
        var WE = rs()
          , HE = BE(WE);
        function BE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ct;
        typeof self < "u" ? Ct = self : typeof window < "u" ? Ct = window : typeof global < "u" ? Ct = global : typeof ui < "u" ? Ct = ui : Ct = Function("return this")();
        var zE = (0,
        HE.default)(Ct);
        ci.default = zE
    }
    );
    var li = d(an => {
        "use strict";
        an.__esModule = !0;
        an.ActionTypes = void 0;
        an.default = us;
        var KE = ai()
          , jE = ss(KE)
          , YE = is()
          , os = ss(YE);
        function ss(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var as = an.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function us(e, t, n) {
            var r;
            if (typeof t == "function" && typeof n > "u" && (n = t,
            t = void 0),
            typeof n < "u") {
                if (typeof n != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return n(us)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , a = []
              , u = a
              , s = !1;
            function f() {
                u === a && (u = a.slice())
            }
            function y() {
                return o
            }
            function m(I) {
                if (typeof I != "function")
                    throw new Error("Expected listener to be a function.");
                var O = !0;
                return f(),
                u.push(I),
                function() {
                    if (O) {
                        O = !1,
                        f();
                        var R = u.indexOf(I);
                        u.splice(R, 1)
                    }
                }
            }
            function g(I) {
                if (!(0,
                jE.default)(I))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof I.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (s)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    s = !0,
                    o = i(o, I)
                } finally {
                    s = !1
                }
                for (var O = a = u, T = 0; T < O.length; T++)
                    O[T]();
                return I
            }
            function E(I) {
                if (typeof I != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = I,
                g({
                    type: as.INIT
                })
            }
            function b() {
                var I, O = m;
                return I = {
                    subscribe: function(R) {
                        if (typeof R != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function C() {
                            R.next && R.next(y())
                        }
                        C();
                        var N = O(C);
                        return {
                            unsubscribe: N
                        }
                    }
                },
                I[os.default] = function() {
                    return this
                }
                ,
                I
            }
            return g({
                type: as.INIT
            }),
            r = {
                dispatch: g,
                subscribe: m,
                getState: y,
                replaceReducer: E
            },
            r[os.default] = b,
            r
        }
    }
    );
    var di = d(fi => {
        "use strict";
        fi.__esModule = !0;
        fi.default = QE;
        function QE(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var fs = d(pi => {
        "use strict";
        pi.__esModule = !0;
        pi.default = tm;
        var cs = li()
          , $E = ai()
          , r1 = ls($E)
          , ZE = di()
          , i1 = ls(ZE);
        function ls(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function JE(e, t) {
            var n = t && t.type
              , r = n && '"' + n.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function em(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t]
                  , r = n(void 0, {
                    type: cs.ActionTypes.INIT
                });
                if (typeof r > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof n(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + cs.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function tm(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                typeof e[i] == "function" && (n[i] = e[i])
            }
            var o = Object.keys(n);
            if (!1)
                var a;
            var u;
            try {
                em(n)
            } catch (s) {
                u = s
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , y = arguments[1];
                if (u)
                    throw u;
                if (!1)
                    var m;
                for (var g = !1, E = {}, b = 0; b < o.length; b++) {
                    var I = o[b]
                      , O = n[I]
                      , T = f[I]
                      , R = O(T, y);
                    if (typeof R > "u") {
                        var C = JE(I, y);
                        throw new Error(C)
                    }
                    E[I] = R,
                    g = g || R !== T
                }
                return g ? E : f
            }
        }
    }
    );
    var ps = d(gi => {
        "use strict";
        gi.__esModule = !0;
        gi.default = nm;
        function ds(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function nm(e, t) {
            if (typeof e == "function")
                return ds(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
                var o = n[i]
                  , a = e[o];
                typeof a == "function" && (r[o] = ds(a, t))
            }
            return r
        }
    }
    );
    var vi = d(hi => {
        "use strict";
        hi.__esModule = !0;
        hi.default = rm;
        function rm() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var r = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, r.apply(void 0, arguments))
            }
        }
    }
    );
    var gs = d(Ei => {
        "use strict";
        Ei.__esModule = !0;
        var im = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ;
        Ei.default = um;
        var om = vi()
          , am = sm(om);
        function sm(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function um() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(r) {
                return function(i, o, a) {
                    var u = r(i, o, a)
                      , s = u.dispatch
                      , f = []
                      , y = {
                        getState: u.getState,
                        dispatch: function(g) {
                            return s(g)
                        }
                    };
                    return f = t.map(function(m) {
                        return m(y)
                    }),
                    s = am.default.apply(void 0, f)(u.dispatch),
                    im({}, u, {
                        dispatch: s
                    })
                }
            }
        }
    }
    );
    var mi = d(Xe => {
        "use strict";
        Xe.__esModule = !0;
        Xe.compose = Xe.applyMiddleware = Xe.bindActionCreators = Xe.combineReducers = Xe.createStore = void 0;
        var cm = li()
          , lm = Lt(cm)
          , fm = fs()
          , dm = Lt(fm)
          , pm = ps()
          , gm = Lt(pm)
          , hm = gs()
          , vm = Lt(hm)
          , Em = vi()
          , mm = Lt(Em)
          , ym = di()
          , c1 = Lt(ym);
        function Lt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Xe.createStore = lm.default;
        Xe.combineReducers = dm.default;
        Xe.bindActionCreators = gm.default;
        Xe.applyMiddleware = vm.default;
        Xe.compose = mm.default
    }
    );
    var ze, yi, Je, _m, Im, Xn, Tm, _i = ve( () => {
        "use strict";
        ze = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        yi = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        Je = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        _m = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        Im = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        Xn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        Tm = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var Re, bm, Un = ve( () => {
        "use strict";
        Re = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        bm = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var wm, hs = ve( () => {
        "use strict";
        wm = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var Am, Om, Sm, xm, Rm, Cm, Lm, Ii, vs = ve( () => {
        "use strict";
        Un();
        ({TRANSFORM_MOVE: Am, TRANSFORM_SCALE: Om, TRANSFORM_ROTATE: Sm, TRANSFORM_SKEW: xm, STYLE_SIZE: Rm, STYLE_FILTER: Cm, STYLE_FONT_VARIATION: Lm} = Re),
        Ii = {
            [Am]: !0,
            [Om]: !0,
            [Sm]: !0,
            [xm]: !0,
            [Rm]: !0,
            [Cm]: !0,
            [Lm]: !0
        }
    }
    );
    var Te = {};
    Ne(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => jm,
        IX2_ANIMATION_FRAME_CHANGED: () => Vm,
        IX2_CLEAR_REQUESTED: () => Gm,
        IX2_ELEMENT_STATE_CHANGED: () => Km,
        IX2_EVENT_LISTENER_ADDED: () => Xm,
        IX2_EVENT_STATE_CHANGED: () => Um,
        IX2_INSTANCE_ADDED: () => Hm,
        IX2_INSTANCE_REMOVED: () => zm,
        IX2_INSTANCE_STARTED: () => Bm,
        IX2_MEDIA_QUERIES_DEFINED: () => Qm,
        IX2_PARAMETER_CHANGED: () => Wm,
        IX2_PLAYBACK_REQUESTED: () => qm,
        IX2_PREVIEW_REQUESTED: () => Fm,
        IX2_RAW_DATA_IMPORTED: () => Pm,
        IX2_SESSION_INITIALIZED: () => Nm,
        IX2_SESSION_STARTED: () => Dm,
        IX2_SESSION_STOPPED: () => Mm,
        IX2_STOP_REQUESTED: () => km,
        IX2_TEST_FRAME_RENDERED: () => $m,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Ym
    });
    var Pm, Nm, Dm, Mm, Fm, qm, km, Gm, Xm, Um, Vm, Wm, Hm, Bm, zm, Km, jm, Ym, Qm, $m, Es = ve( () => {
        "use strict";
        Pm = "IX2_RAW_DATA_IMPORTED",
        Nm = "IX2_SESSION_INITIALIZED",
        Dm = "IX2_SESSION_STARTED",
        Mm = "IX2_SESSION_STOPPED",
        Fm = "IX2_PREVIEW_REQUESTED",
        qm = "IX2_PLAYBACK_REQUESTED",
        km = "IX2_STOP_REQUESTED",
        Gm = "IX2_CLEAR_REQUESTED",
        Xm = "IX2_EVENT_LISTENER_ADDED",
        Um = "IX2_EVENT_STATE_CHANGED",
        Vm = "IX2_ANIMATION_FRAME_CHANGED",
        Wm = "IX2_PARAMETER_CHANGED",
        Hm = "IX2_INSTANCE_ADDED",
        Bm = "IX2_INSTANCE_STARTED",
        zm = "IX2_INSTANCE_REMOVED",
        Km = "IX2_ELEMENT_STATE_CHANGED",
        jm = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        Ym = "IX2_VIEWPORT_WIDTH_CHANGED",
        Qm = "IX2_MEDIA_QUERIES_DEFINED",
        $m = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var Ae = {};
    Ne(Ae, {
        ABSTRACT_NODE: () => Yy,
        AUTO: () => ky,
        BACKGROUND: () => Py,
        BACKGROUND_COLOR: () => Ly,
        BAR_DELIMITER: () => Uy,
        BORDER_COLOR: () => Ny,
        BOUNDARY_SELECTOR: () => ny,
        CHILDREN: () => Vy,
        COLON_DELIMITER: () => Xy,
        COLOR: () => Dy,
        COMMA_DELIMITER: () => Gy,
        CONFIG_UNIT: () => ly,
        CONFIG_VALUE: () => ay,
        CONFIG_X_UNIT: () => sy,
        CONFIG_X_VALUE: () => ry,
        CONFIG_Y_UNIT: () => uy,
        CONFIG_Y_VALUE: () => iy,
        CONFIG_Z_UNIT: () => cy,
        CONFIG_Z_VALUE: () => oy,
        DISPLAY: () => My,
        FILTER: () => Sy,
        FLEX: () => Fy,
        FONT_VARIATION_SETTINGS: () => xy,
        HEIGHT: () => Cy,
        HTML_ELEMENT: () => Ky,
        IMMEDIATE_CHILDREN: () => Wy,
        IX2_ID_DELIMITER: () => Zm,
        OPACITY: () => Oy,
        PARENT: () => By,
        PLAIN_OBJECT: () => jy,
        PRESERVE_3D: () => zy,
        RENDER_GENERAL: () => $y,
        RENDER_PLUGIN: () => Jy,
        RENDER_STYLE: () => Zy,
        RENDER_TRANSFORM: () => Qy,
        ROTATE_X: () => _y,
        ROTATE_Y: () => Iy,
        ROTATE_Z: () => Ty,
        SCALE_3D: () => yy,
        SCALE_X: () => vy,
        SCALE_Y: () => Ey,
        SCALE_Z: () => my,
        SIBLINGS: () => Hy,
        SKEW: () => by,
        SKEW_X: () => wy,
        SKEW_Y: () => Ay,
        TRANSFORM: () => fy,
        TRANSLATE_3D: () => hy,
        TRANSLATE_X: () => dy,
        TRANSLATE_Y: () => py,
        TRANSLATE_Z: () => gy,
        WF_PAGE: () => Jm,
        WIDTH: () => Ry,
        WILL_CHANGE: () => qy,
        W_MOD_IX: () => ty,
        W_MOD_JS: () => ey
    });
    var Zm, Jm, ey, ty, ny, ry, iy, oy, ay, sy, uy, cy, ly, fy, dy, py, gy, hy, vy, Ey, my, yy, _y, Iy, Ty, by, wy, Ay, Oy, Sy, xy, Ry, Cy, Ly, Py, Ny, Dy, My, Fy, qy, ky, Gy, Xy, Uy, Vy, Wy, Hy, By, zy, Ky, jy, Yy, Qy, $y, Zy, Jy, ms = ve( () => {
        "use strict";
        Zm = "|",
        Jm = "data-wf-page",
        ey = "w-mod-js",
        ty = "w-mod-ix",
        ny = ".w-dyn-item",
        ry = "xValue",
        iy = "yValue",
        oy = "zValue",
        ay = "value",
        sy = "xUnit",
        uy = "yUnit",
        cy = "zUnit",
        ly = "unit",
        fy = "transform",
        dy = "translateX",
        py = "translateY",
        gy = "translateZ",
        hy = "translate3d",
        vy = "scaleX",
        Ey = "scaleY",
        my = "scaleZ",
        yy = "scale3d",
        _y = "rotateX",
        Iy = "rotateY",
        Ty = "rotateZ",
        by = "skew",
        wy = "skewX",
        Ay = "skewY",
        Oy = "opacity",
        Sy = "filter",
        xy = "font-variation-settings",
        Ry = "width",
        Cy = "height",
        Ly = "backgroundColor",
        Py = "background",
        Ny = "borderColor",
        Dy = "color",
        My = "display",
        Fy = "flex",
        qy = "willChange",
        ky = "AUTO",
        Gy = ",",
        Xy = ":",
        Uy = "|",
        Vy = "CHILDREN",
        Wy = "IMMEDIATE_CHILDREN",
        Hy = "SIBLINGS",
        By = "PARENT",
        zy = "preserve-3d",
        Ky = "HTML_ELEMENT",
        jy = "PLAIN_OBJECT",
        Yy = "ABSTRACT_NODE",
        Qy = "RENDER_TRANSFORM",
        $y = "RENDER_GENERAL",
        Zy = "RENDER_STYLE",
        Jy = "RENDER_PLUGIN"
    }
    );
    var ys = {};
    Ne(ys, {
        ActionAppliesTo: () => bm,
        ActionTypeConsts: () => Re,
        EventAppliesTo: () => yi,
        EventBasedOn: () => Je,
        EventContinuousMouseAxes: () => _m,
        EventLimitAffectedElements: () => Im,
        EventTypeConsts: () => ze,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => Ae,
        InteractionTypeConsts: () => wm,
        QuickEffectDirectionConsts: () => Tm,
        QuickEffectIds: () => Xn,
        ReducedMotionTypes: () => Ii
    });
    var Me = ve( () => {
        "use strict";
        _i();
        Un();
        hs();
        vs();
        Es();
        ms();
        Un();
        _i()
    }
    );
    var e_, _s, Is = ve( () => {
        "use strict";
        Me();
        ({IX2_RAW_DATA_IMPORTED: e_} = Te),
        _s = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case e_:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var Pt = d(ye => {
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var t_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        ye.clone = Wn;
        ye.addLast = ws;
        ye.addFirst = As;
        ye.removeLast = Os;
        ye.removeFirst = Ss;
        ye.insert = xs;
        ye.removeAt = Rs;
        ye.replaceAt = Cs;
        ye.getIn = Hn;
        ye.set = Bn;
        ye.setIn = zn;
        ye.update = Ps;
        ye.updateIn = Ns;
        ye.merge = Ds;
        ye.mergeDeep = Ms;
        ye.mergeIn = Fs;
        ye.omit = qs;
        ye.addDefaults = ks;
        var Ts = "INVALID_ARGS";
        function bs(e) {
            throw new Error(e)
        }
        function Ti(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var n_ = {}.hasOwnProperty;
        function Wn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = Ti(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                n[i] = e[i]
            }
            return n
        }
        function Fe(e, t, n) {
            var r = n;
            r == null && bs(Ts);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3; u < o; u++)
                a[u - 3] = arguments[u];
            for (var s = 0; s < a.length; s++) {
                var f = a[s];
                if (f != null) {
                    var y = Ti(f);
                    if (y.length)
                        for (var m = 0; m <= y.length; m++) {
                            var g = y[m];
                            if (!(e && r[g] !== void 0)) {
                                var E = f[g];
                                t && Vn(r[g]) && Vn(E) && (E = Fe(e, t, r[g], E)),
                                !(E === void 0 || E === r[g]) && (i || (i = !0,
                                r = Wn(r)),
                                r[g] = E)
                            }
                        }
                }
            }
            return r
        }
        function Vn(e) {
            var t = typeof e > "u" ? "undefined" : t_(e);
            return e != null && (t === "object" || t === "function")
        }
        function ws(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function As(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Os(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Ss(e) {
            return e.length ? e.slice(1) : e
        }
        function xs(e, t, n) {
            return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t))
        }
        function Rs(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Cs(e, t, n) {
            if (e[t] === n)
                return e;
            for (var r = e.length, i = Array(r), o = 0; o < r; o++)
                i[o] = e[o];
            return i[t] = n,
            i
        }
        function Hn(e, t) {
            if (!Array.isArray(t) && bs(Ts),
            e != null) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (n = n?.[i],
                    n === void 0)
                        return n
                }
                return n
            }
        }
        function Bn(e, t, n) {
            var r = typeof t == "number" ? [] : {}
              , i = e ?? r;
            if (i[t] === n)
                return i;
            var o = Wn(i);
            return o[t] = n,
            o
        }
        function Ls(e, t, n, r) {
            var i = void 0
              , o = t[r];
            if (r === t.length - 1)
                i = n;
            else {
                var a = Vn(e) && Vn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
                i = Ls(a, t, n, r + 1)
            }
            return Bn(e, o, i)
        }
        function zn(e, t, n) {
            return t.length ? Ls(e, t, n, 0) : n
        }
        function Ps(e, t, n) {
            var r = e?.[t]
              , i = n(r);
            return Bn(e, t, i)
        }
        function Ns(e, t, n) {
            var r = Hn(e, t)
              , i = n(r);
            return zn(e, t, i)
        }
        function Ds(e, t, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++)
                u[s - 6] = arguments[s];
            return u.length ? Fe.call.apply(Fe, [null, !1, !1, e, t, n, r, i, o].concat(u)) : Fe(!1, !1, e, t, n, r, i, o)
        }
        function Ms(e, t, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++)
                u[s - 6] = arguments[s];
            return u.length ? Fe.call.apply(Fe, [null, !1, !0, e, t, n, r, i, o].concat(u)) : Fe(!1, !0, e, t, n, r, i, o)
        }
        function Fs(e, t, n, r, i, o, a) {
            var u = Hn(e, t);
            u == null && (u = {});
            for (var s = void 0, f = arguments.length, y = Array(f > 7 ? f - 7 : 0), m = 7; m < f; m++)
                y[m - 7] = arguments[m];
            return y.length ? s = Fe.call.apply(Fe, [null, !1, !1, u, n, r, i, o, a].concat(y)) : s = Fe(!1, !1, u, n, r, i, o, a),
            zn(e, t, s)
        }
        function qs(e, t) {
            for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
                if (n_.call(e, n[i])) {
                    r = !0;
                    break
                }
            if (!r)
                return e;
            for (var o = {}, a = Ti(e), u = 0; u < a.length; u++) {
                var s = a[u];
                n.indexOf(s) >= 0 || (o[s] = e[s])
            }
            return o
        }
        function ks(e, t, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++)
                u[s - 6] = arguments[s];
            return u.length ? Fe.call.apply(Fe, [null, !0, !1, e, t, n, r, i, o].concat(u)) : Fe(!0, !1, e, t, n, r, i, o)
        }
        var r_ = {
            clone: Wn,
            addLast: ws,
            addFirst: As,
            removeLast: Os,
            removeFirst: Ss,
            insert: xs,
            removeAt: Rs,
            replaceAt: Cs,
            getIn: Hn,
            set: Bn,
            setIn: zn,
            update: Ps,
            updateIn: Ns,
            merge: Ds,
            mergeDeep: Ms,
            mergeIn: Fs,
            omit: qs,
            addDefaults: ks
        };
        ye.default = r_
    }
    );
    var Xs, i_, o_, a_, s_, u_, Gs, Us, Vs = ve( () => {
        "use strict";
        Me();
        Xs = fe(Pt()),
        {IX2_PREVIEW_REQUESTED: i_, IX2_PLAYBACK_REQUESTED: o_, IX2_STOP_REQUESTED: a_, IX2_CLEAR_REQUESTED: s_} = Te,
        u_ = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Gs = Object.create(null, {
            [i_]: {
                value: "preview"
            },
            [o_]: {
                value: "playback"
            },
            [a_]: {
                value: "stop"
            },
            [s_]: {
                value: "clear"
            }
        }),
        Us = (e=u_, t) => {
            if (t.type in Gs) {
                let n = [Gs[t.type]];
                return (0,
                Xs.setIn)(e, [n], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var Ce, c_, l_, f_, d_, p_, g_, h_, v_, E_, m_, Ws, y_, Hs, Bs = ve( () => {
        "use strict";
        Me();
        Ce = fe(Pt()),
        {IX2_SESSION_INITIALIZED: c_, IX2_SESSION_STARTED: l_, IX2_TEST_FRAME_RENDERED: f_, IX2_SESSION_STOPPED: d_, IX2_EVENT_LISTENER_ADDED: p_, IX2_EVENT_STATE_CHANGED: g_, IX2_ANIMATION_FRAME_CHANGED: h_, IX2_ACTION_LIST_PLAYBACK_CHANGED: v_, IX2_VIEWPORT_WIDTH_CHANGED: E_, IX2_MEDIA_QUERIES_DEFINED: m_} = Te,
        Ws = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        y_ = 20,
        Hs = (e=Ws, t) => {
            switch (t.type) {
            case c_:
                {
                    let {hasBoundaryNodes: n, reducedMotion: r} = t.payload;
                    return (0,
                    Ce.merge)(e, {
                        hasBoundaryNodes: n,
                        reducedMotion: r
                    })
                }
            case l_:
                return (0,
                Ce.set)(e, "active", !0);
            case f_:
                {
                    let {payload: {step: n=y_}} = t;
                    return (0,
                    Ce.set)(e, "tick", e.tick + n)
                }
            case d_:
                return Ws;
            case h_:
                {
                    let {payload: {now: n}} = t;
                    return (0,
                    Ce.set)(e, "tick", n)
                }
            case p_:
                {
                    let n = (0,
                    Ce.addLast)(e.eventListeners, t.payload);
                    return (0,
                    Ce.set)(e, "eventListeners", n)
                }
            case g_:
                {
                    let {stateKey: n, newState: r} = t.payload;
                    return (0,
                    Ce.setIn)(e, ["eventState", n], r)
                }
            case v_:
                {
                    let {actionListId: n, isPlaying: r} = t.payload;
                    return (0,
                    Ce.setIn)(e, ["playbackState", n], r)
                }
            case E_:
                {
                    let {width: n, mediaQueries: r} = t.payload
                      , i = r.length
                      , o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: u, min: s, max: f} = r[a];
                        if (n >= s && n <= f) {
                            o = u;
                            break
                        }
                    }
                    return (0,
                    Ce.merge)(e, {
                        viewportWidth: n,
                        mediaQueryKey: o
                    })
                }
            case m_:
                return (0,
                Ce.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var Ks = d( (R1, zs) => {
        function __() {
            this.__data__ = [],
            this.size = 0
        }
        zs.exports = __
    }
    );
    var Kn = d( (C1, js) => {
        function I_(e, t) {
            return e === t || e !== e && t !== t
        }
        js.exports = I_
    }
    );
    var sn = d( (L1, Ys) => {
        var T_ = Kn();
        function b_(e, t) {
            for (var n = e.length; n--; )
                if (T_(e[n][0], t))
                    return n;
            return -1
        }
        Ys.exports = b_
    }
    );
    var $s = d( (P1, Qs) => {
        var w_ = sn()
          , A_ = Array.prototype
          , O_ = A_.splice;
        function S_(e) {
            var t = this.__data__
              , n = w_(t, e);
            if (n < 0)
                return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : O_.call(t, n, 1),
            --this.size,
            !0
        }
        Qs.exports = S_
    }
    );
    var Js = d( (N1, Zs) => {
        var x_ = sn();
        function R_(e) {
            var t = this.__data__
              , n = x_(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        Zs.exports = R_
    }
    );
    var tu = d( (D1, eu) => {
        var C_ = sn();
        function L_(e) {
            return C_(this.__data__, e) > -1
        }
        eu.exports = L_
    }
    );
    var ru = d( (M1, nu) => {
        var P_ = sn();
        function N_(e, t) {
            var n = this.__data__
              , r = P_(n, e);
            return r < 0 ? (++this.size,
            n.push([e, t])) : n[r][1] = t,
            this
        }
        nu.exports = N_
    }
    );
    var un = d( (F1, iu) => {
        var D_ = Ks()
          , M_ = $s()
          , F_ = Js()
          , q_ = tu()
          , k_ = ru();
        function Nt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Nt.prototype.clear = D_;
        Nt.prototype.delete = M_;
        Nt.prototype.get = F_;
        Nt.prototype.has = q_;
        Nt.prototype.set = k_;
        iu.exports = Nt
    }
    );
    var au = d( (q1, ou) => {
        var G_ = un();
        function X_() {
            this.__data__ = new G_,
            this.size = 0
        }
        ou.exports = X_
    }
    );
    var uu = d( (k1, su) => {
        function U_(e) {
            var t = this.__data__
              , n = t.delete(e);
            return this.size = t.size,
            n
        }
        su.exports = U_
    }
    );
    var lu = d( (G1, cu) => {
        function V_(e) {
            return this.__data__.get(e)
        }
        cu.exports = V_
    }
    );
    var du = d( (X1, fu) => {
        function W_(e) {
            return this.__data__.has(e)
        }
        fu.exports = W_
    }
    );
    var et = d( (U1, pu) => {
        function H_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        pu.exports = H_
    }
    );
    var bi = d( (V1, gu) => {
        var B_ = ft()
          , z_ = et()
          , K_ = "[object AsyncFunction]"
          , j_ = "[object Function]"
          , Y_ = "[object GeneratorFunction]"
          , Q_ = "[object Proxy]";
        function $_(e) {
            if (!z_(e))
                return !1;
            var t = B_(e);
            return t == j_ || t == Y_ || t == K_ || t == Q_
        }
        gu.exports = $_
    }
    );
    var vu = d( (W1, hu) => {
        var Z_ = Be()
          , J_ = Z_["__core-js_shared__"];
        hu.exports = J_
    }
    );
    var yu = d( (H1, mu) => {
        var wi = vu()
          , Eu = function() {
            var e = /[^.]+$/.exec(wi && wi.keys && wi.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function eI(e) {
            return !!Eu && Eu in e
        }
        mu.exports = eI
    }
    );
    var Ai = d( (B1, _u) => {
        var tI = Function.prototype
          , nI = tI.toString;
        function rI(e) {
            if (e != null) {
                try {
                    return nI.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        _u.exports = rI
    }
    );
    var Tu = d( (z1, Iu) => {
        var iI = bi()
          , oI = yu()
          , aI = et()
          , sI = Ai()
          , uI = /[\\^$.*+?()[\]{}|]/g
          , cI = /^\[object .+?Constructor\]$/
          , lI = Function.prototype
          , fI = Object.prototype
          , dI = lI.toString
          , pI = fI.hasOwnProperty
          , gI = RegExp("^" + dI.call(pI).replace(uI, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function hI(e) {
            if (!aI(e) || oI(e))
                return !1;
            var t = iI(e) ? gI : cI;
            return t.test(sI(e))
        }
        Iu.exports = hI
    }
    );
    var wu = d( (K1, bu) => {
        function vI(e, t) {
            return e?.[t]
        }
        bu.exports = vI
    }
    );
    var dt = d( (j1, Au) => {
        var EI = Tu()
          , mI = wu();
        function yI(e, t) {
            var n = mI(e, t);
            return EI(n) ? n : void 0
        }
        Au.exports = yI
    }
    );
    var jn = d( (Y1, Ou) => {
        var _I = dt()
          , II = Be()
          , TI = _I(II, "Map");
        Ou.exports = TI
    }
    );
    var cn = d( (Q1, Su) => {
        var bI = dt()
          , wI = bI(Object, "create");
        Su.exports = wI
    }
    );
    var Cu = d( ($1, Ru) => {
        var xu = cn();
        function AI() {
            this.__data__ = xu ? xu(null) : {},
            this.size = 0
        }
        Ru.exports = AI
    }
    );
    var Pu = d( (Z1, Lu) => {
        function OI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Lu.exports = OI
    }
    );
    var Du = d( (J1, Nu) => {
        var SI = cn()
          , xI = "__lodash_hash_undefined__"
          , RI = Object.prototype
          , CI = RI.hasOwnProperty;
        function LI(e) {
            var t = this.__data__;
            if (SI) {
                var n = t[e];
                return n === xI ? void 0 : n
            }
            return CI.call(t, e) ? t[e] : void 0
        }
        Nu.exports = LI
    }
    );
    var Fu = d( (e2, Mu) => {
        var PI = cn()
          , NI = Object.prototype
          , DI = NI.hasOwnProperty;
        function MI(e) {
            var t = this.__data__;
            return PI ? t[e] !== void 0 : DI.call(t, e)
        }
        Mu.exports = MI
    }
    );
    var ku = d( (t2, qu) => {
        var FI = cn()
          , qI = "__lodash_hash_undefined__";
        function kI(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            n[e] = FI && t === void 0 ? qI : t,
            this
        }
        qu.exports = kI
    }
    );
    var Xu = d( (n2, Gu) => {
        var GI = Cu()
          , XI = Pu()
          , UI = Du()
          , VI = Fu()
          , WI = ku();
        function Dt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Dt.prototype.clear = GI;
        Dt.prototype.delete = XI;
        Dt.prototype.get = UI;
        Dt.prototype.has = VI;
        Dt.prototype.set = WI;
        Gu.exports = Dt
    }
    );
    var Wu = d( (r2, Vu) => {
        var Uu = Xu()
          , HI = un()
          , BI = jn();
        function zI() {
            this.size = 0,
            this.__data__ = {
                hash: new Uu,
                map: new (BI || HI),
                string: new Uu
            }
        }
        Vu.exports = zI
    }
    );
    var Bu = d( (i2, Hu) => {
        function KI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Hu.exports = KI
    }
    );
    var ln = d( (o2, zu) => {
        var jI = Bu();
        function YI(e, t) {
            var n = e.__data__;
            return jI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
        }
        zu.exports = YI
    }
    );
    var ju = d( (a2, Ku) => {
        var QI = ln();
        function $I(e) {
            var t = QI(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Ku.exports = $I
    }
    );
    var Qu = d( (s2, Yu) => {
        var ZI = ln();
        function JI(e) {
            return ZI(this, e).get(e)
        }
        Yu.exports = JI
    }
    );
    var Zu = d( (u2, $u) => {
        var eT = ln();
        function tT(e) {
            return eT(this, e).has(e)
        }
        $u.exports = tT
    }
    );
    var ec = d( (c2, Ju) => {
        var nT = ln();
        function rT(e, t) {
            var n = nT(this, e)
              , r = n.size;
            return n.set(e, t),
            this.size += n.size == r ? 0 : 1,
            this
        }
        Ju.exports = rT
    }
    );
    var Yn = d( (l2, tc) => {
        var iT = Wu()
          , oT = ju()
          , aT = Qu()
          , sT = Zu()
          , uT = ec();
        function Mt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Mt.prototype.clear = iT;
        Mt.prototype.delete = oT;
        Mt.prototype.get = aT;
        Mt.prototype.has = sT;
        Mt.prototype.set = uT;
        tc.exports = Mt
    }
    );
    var rc = d( (f2, nc) => {
        var cT = un()
          , lT = jn()
          , fT = Yn()
          , dT = 200;
        function pT(e, t) {
            var n = this.__data__;
            if (n instanceof cT) {
                var r = n.__data__;
                if (!lT || r.length < dT - 1)
                    return r.push([e, t]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new fT(r)
            }
            return n.set(e, t),
            this.size = n.size,
            this
        }
        nc.exports = pT
    }
    );
    var Oi = d( (d2, ic) => {
        var gT = un()
          , hT = au()
          , vT = uu()
          , ET = lu()
          , mT = du()
          , yT = rc();
        function Ft(e) {
            var t = this.__data__ = new gT(e);
            this.size = t.size
        }
        Ft.prototype.clear = hT;
        Ft.prototype.delete = vT;
        Ft.prototype.get = ET;
        Ft.prototype.has = mT;
        Ft.prototype.set = yT;
        ic.exports = Ft
    }
    );
    var ac = d( (p2, oc) => {
        var _T = "__lodash_hash_undefined__";
        function IT(e) {
            return this.__data__.set(e, _T),
            this
        }
        oc.exports = IT
    }
    );
    var uc = d( (g2, sc) => {
        function TT(e) {
            return this.__data__.has(e)
        }
        sc.exports = TT
    }
    );
    var lc = d( (h2, cc) => {
        var bT = Yn()
          , wT = ac()
          , AT = uc();
        function Qn(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.__data__ = new bT; ++t < n; )
                this.add(e[t])
        }
        Qn.prototype.add = Qn.prototype.push = wT;
        Qn.prototype.has = AT;
        cc.exports = Qn
    }
    );
    var dc = d( (v2, fc) => {
        function OT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e))
                    return !0;
            return !1
        }
        fc.exports = OT
    }
    );
    var gc = d( (E2, pc) => {
        function ST(e, t) {
            return e.has(t)
        }
        pc.exports = ST
    }
    );
    var Si = d( (m2, hc) => {
        var xT = lc()
          , RT = dc()
          , CT = gc()
          , LT = 1
          , PT = 2;
        function NT(e, t, n, r, i, o) {
            var a = n & LT
              , u = e.length
              , s = t.length;
            if (u != s && !(a && s > u))
                return !1;
            var f = o.get(e)
              , y = o.get(t);
            if (f && y)
                return f == t && y == e;
            var m = -1
              , g = !0
              , E = n & PT ? new xT : void 0;
            for (o.set(e, t),
            o.set(t, e); ++m < u; ) {
                var b = e[m]
                  , I = t[m];
                if (r)
                    var O = a ? r(I, b, m, t, e, o) : r(b, I, m, e, t, o);
                if (O !== void 0) {
                    if (O)
                        continue;
                    g = !1;
                    break
                }
                if (E) {
                    if (!RT(t, function(T, R) {
                        if (!CT(E, R) && (b === T || i(b, T, n, r, o)))
                            return E.push(R)
                    })) {
                        g = !1;
                        break
                    }
                } else if (!(b === I || i(b, I, n, r, o))) {
                    g = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            g
        }
        hc.exports = NT
    }
    );
    var Ec = d( (y2, vc) => {
        var DT = Be()
          , MT = DT.Uint8Array;
        vc.exports = MT
    }
    );
    var yc = d( (_2, mc) => {
        function FT(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach(function(r, i) {
                n[++t] = [i, r]
            }),
            n
        }
        mc.exports = FT
    }
    );
    var Ic = d( (I2, _c) => {
        function qT(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach(function(r) {
                n[++t] = r
            }),
            n
        }
        _c.exports = qT
    }
    );
    var Oc = d( (T2, Ac) => {
        var Tc = Rt()
          , bc = Ec()
          , kT = Kn()
          , GT = Si()
          , XT = yc()
          , UT = Ic()
          , VT = 1
          , WT = 2
          , HT = "[object Boolean]"
          , BT = "[object Date]"
          , zT = "[object Error]"
          , KT = "[object Map]"
          , jT = "[object Number]"
          , YT = "[object RegExp]"
          , QT = "[object Set]"
          , $T = "[object String]"
          , ZT = "[object Symbol]"
          , JT = "[object ArrayBuffer]"
          , eb = "[object DataView]"
          , wc = Tc ? Tc.prototype : void 0
          , xi = wc ? wc.valueOf : void 0;
        function tb(e, t, n, r, i, o, a) {
            switch (n) {
            case eb:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case JT:
                return !(e.byteLength != t.byteLength || !o(new bc(e), new bc(t)));
            case HT:
            case BT:
            case jT:
                return kT(+e, +t);
            case zT:
                return e.name == t.name && e.message == t.message;
            case YT:
            case $T:
                return e == t + "";
            case KT:
                var u = XT;
            case QT:
                var s = r & VT;
                if (u || (u = UT),
                e.size != t.size && !s)
                    return !1;
                var f = a.get(e);
                if (f)
                    return f == t;
                r |= WT,
                a.set(e, t);
                var y = GT(u(e), u(t), r, i, o, a);
                return a.delete(e),
                y;
            case ZT:
                if (xi)
                    return xi.call(e) == xi.call(t)
            }
            return !1
        }
        Ac.exports = tb
    }
    );
    var $n = d( (b2, Sc) => {
        function nb(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r; )
                e[i + n] = t[n];
            return e
        }
        Sc.exports = nb
    }
    );
    var be = d( (w2, xc) => {
        var rb = Array.isArray;
        xc.exports = rb
    }
    );
    var Ri = d( (A2, Rc) => {
        var ib = $n()
          , ob = be();
        function ab(e, t, n) {
            var r = t(e);
            return ob(e) ? r : ib(r, n(e))
        }
        Rc.exports = ab
    }
    );
    var Lc = d( (O2, Cc) => {
        function sb(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a)
            }
            return o
        }
        Cc.exports = sb
    }
    );
    var Ci = d( (S2, Pc) => {
        function ub() {
            return []
        }
        Pc.exports = ub
    }
    );
    var Li = d( (x2, Dc) => {
        var cb = Lc()
          , lb = Ci()
          , fb = Object.prototype
          , db = fb.propertyIsEnumerable
          , Nc = Object.getOwnPropertySymbols
          , pb = Nc ? function(e) {
            return e == null ? [] : (e = Object(e),
            cb(Nc(e), function(t) {
                return db.call(e, t)
            }))
        }
        : lb;
        Dc.exports = pb
    }
    );
    var Fc = d( (R2, Mc) => {
        function gb(e, t) {
            for (var n = -1, r = Array(e); ++n < e; )
                r[n] = t(n);
            return r
        }
        Mc.exports = gb
    }
    );
    var kc = d( (C2, qc) => {
        var hb = ft()
          , vb = ot()
          , Eb = "[object Arguments]";
        function mb(e) {
            return vb(e) && hb(e) == Eb
        }
        qc.exports = mb
    }
    );
    var fn = d( (L2, Uc) => {
        var Gc = kc()
          , yb = ot()
          , Xc = Object.prototype
          , _b = Xc.hasOwnProperty
          , Ib = Xc.propertyIsEnumerable
          , Tb = Gc(function() {
            return arguments
        }()) ? Gc : function(e) {
            return yb(e) && _b.call(e, "callee") && !Ib.call(e, "callee")
        }
        ;
        Uc.exports = Tb
    }
    );
    var Wc = d( (P2, Vc) => {
        function bb() {
            return !1
        }
        Vc.exports = bb
    }
    );
    var Zn = d( (dn, qt) => {
        var wb = Be()
          , Ab = Wc()
          , zc = typeof dn == "object" && dn && !dn.nodeType && dn
          , Hc = zc && typeof qt == "object" && qt && !qt.nodeType && qt
          , Ob = Hc && Hc.exports === zc
          , Bc = Ob ? wb.Buffer : void 0
          , Sb = Bc ? Bc.isBuffer : void 0
          , xb = Sb || Ab;
        qt.exports = xb
    }
    );
    var Jn = d( (N2, Kc) => {
        var Rb = 9007199254740991
          , Cb = /^(?:0|[1-9]\d*)$/;
        function Lb(e, t) {
            var n = typeof e;
            return t = t ?? Rb,
            !!t && (n == "number" || n != "symbol" && Cb.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Kc.exports = Lb
    }
    );
    var er = d( (D2, jc) => {
        var Pb = 9007199254740991;
        function Nb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pb
        }
        jc.exports = Nb
    }
    );
    var Qc = d( (M2, Yc) => {
        var Db = ft()
          , Mb = er()
          , Fb = ot()
          , qb = "[object Arguments]"
          , kb = "[object Array]"
          , Gb = "[object Boolean]"
          , Xb = "[object Date]"
          , Ub = "[object Error]"
          , Vb = "[object Function]"
          , Wb = "[object Map]"
          , Hb = "[object Number]"
          , Bb = "[object Object]"
          , zb = "[object RegExp]"
          , Kb = "[object Set]"
          , jb = "[object String]"
          , Yb = "[object WeakMap]"
          , Qb = "[object ArrayBuffer]"
          , $b = "[object DataView]"
          , Zb = "[object Float32Array]"
          , Jb = "[object Float64Array]"
          , ew = "[object Int8Array]"
          , tw = "[object Int16Array]"
          , nw = "[object Int32Array]"
          , rw = "[object Uint8Array]"
          , iw = "[object Uint8ClampedArray]"
          , ow = "[object Uint16Array]"
          , aw = "[object Uint32Array]"
          , he = {};
        he[Zb] = he[Jb] = he[ew] = he[tw] = he[nw] = he[rw] = he[iw] = he[ow] = he[aw] = !0;
        he[qb] = he[kb] = he[Qb] = he[Gb] = he[$b] = he[Xb] = he[Ub] = he[Vb] = he[Wb] = he[Hb] = he[Bb] = he[zb] = he[Kb] = he[jb] = he[Yb] = !1;
        function sw(e) {
            return Fb(e) && Mb(e.length) && !!he[Db(e)]
        }
        Yc.exports = sw
    }
    );
    var Zc = d( (F2, $c) => {
        function uw(e) {
            return function(t) {
                return e(t)
            }
        }
        $c.exports = uw
    }
    );
    var el = d( (pn, kt) => {
        var cw = ri()
          , Jc = typeof pn == "object" && pn && !pn.nodeType && pn
          , gn = Jc && typeof kt == "object" && kt && !kt.nodeType && kt
          , lw = gn && gn.exports === Jc
          , Pi = lw && cw.process
          , fw = function() {
            try {
                var e = gn && gn.require && gn.require("util").types;
                return e || Pi && Pi.binding && Pi.binding("util")
            } catch {}
        }();
        kt.exports = fw
    }
    );
    var tr = d( (q2, rl) => {
        var dw = Qc()
          , pw = Zc()
          , tl = el()
          , nl = tl && tl.isTypedArray
          , gw = nl ? pw(nl) : dw;
        rl.exports = gw
    }
    );
    var Ni = d( (k2, il) => {
        var hw = Fc()
          , vw = fn()
          , Ew = be()
          , mw = Zn()
          , yw = Jn()
          , _w = tr()
          , Iw = Object.prototype
          , Tw = Iw.hasOwnProperty;
        function bw(e, t) {
            var n = Ew(e)
              , r = !n && vw(e)
              , i = !n && !r && mw(e)
              , o = !n && !r && !i && _w(e)
              , a = n || r || i || o
              , u = a ? hw(e.length, String) : []
              , s = u.length;
            for (var f in e)
                (t || Tw.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || yw(f, s))) && u.push(f);
            return u
        }
        il.exports = bw
    }
    );
    var nr = d( (G2, ol) => {
        var ww = Object.prototype;
        function Aw(e) {
            var t = e && e.constructor
              , n = typeof t == "function" && t.prototype || ww;
            return e === n
        }
        ol.exports = Aw
    }
    );
    var sl = d( (X2, al) => {
        var Ow = ii()
          , Sw = Ow(Object.keys, Object);
        al.exports = Sw
    }
    );
    var rr = d( (U2, ul) => {
        var xw = nr()
          , Rw = sl()
          , Cw = Object.prototype
          , Lw = Cw.hasOwnProperty;
        function Pw(e) {
            if (!xw(e))
                return Rw(e);
            var t = [];
            for (var n in Object(e))
                Lw.call(e, n) && n != "constructor" && t.push(n);
            return t
        }
        ul.exports = Pw
    }
    );
    var yt = d( (V2, cl) => {
        var Nw = bi()
          , Dw = er();
        function Mw(e) {
            return e != null && Dw(e.length) && !Nw(e)
        }
        cl.exports = Mw
    }
    );
    var hn = d( (W2, ll) => {
        var Fw = Ni()
          , qw = rr()
          , kw = yt();
        function Gw(e) {
            return kw(e) ? Fw(e) : qw(e)
        }
        ll.exports = Gw
    }
    );
    var dl = d( (H2, fl) => {
        var Xw = Ri()
          , Uw = Li()
          , Vw = hn();
        function Ww(e) {
            return Xw(e, Vw, Uw)
        }
        fl.exports = Ww
    }
    );
    var hl = d( (B2, gl) => {
        var pl = dl()
          , Hw = 1
          , Bw = Object.prototype
          , zw = Bw.hasOwnProperty;
        function Kw(e, t, n, r, i, o) {
            var a = n & Hw
              , u = pl(e)
              , s = u.length
              , f = pl(t)
              , y = f.length;
            if (s != y && !a)
                return !1;
            for (var m = s; m--; ) {
                var g = u[m];
                if (!(a ? g in t : zw.call(t, g)))
                    return !1
            }
            var E = o.get(e)
              , b = o.get(t);
            if (E && b)
                return E == t && b == e;
            var I = !0;
            o.set(e, t),
            o.set(t, e);
            for (var O = a; ++m < s; ) {
                g = u[m];
                var T = e[g]
                  , R = t[g];
                if (r)
                    var C = a ? r(R, T, g, t, e, o) : r(T, R, g, e, t, o);
                if (!(C === void 0 ? T === R || i(T, R, n, r, o) : C)) {
                    I = !1;
                    break
                }
                O || (O = g == "constructor")
            }
            if (I && !O) {
                var N = e.constructor
                  , M = t.constructor;
                N != M && "constructor"in e && "constructor"in t && !(typeof N == "function" && N instanceof N && typeof M == "function" && M instanceof M) && (I = !1)
            }
            return o.delete(e),
            o.delete(t),
            I
        }
        gl.exports = Kw
    }
    );
    var El = d( (z2, vl) => {
        var jw = dt()
          , Yw = Be()
          , Qw = jw(Yw, "DataView");
        vl.exports = Qw
    }
    );
    var yl = d( (K2, ml) => {
        var $w = dt()
          , Zw = Be()
          , Jw = $w(Zw, "Promise");
        ml.exports = Jw
    }
    );
    var Il = d( (j2, _l) => {
        var eA = dt()
          , tA = Be()
          , nA = eA(tA, "Set");
        _l.exports = nA
    }
    );
    var Di = d( (Y2, Tl) => {
        var rA = dt()
          , iA = Be()
          , oA = rA(iA, "WeakMap");
        Tl.exports = oA
    }
    );
    var ir = d( (Q2, Rl) => {
        var Mi = El()
          , Fi = jn()
          , qi = yl()
          , ki = Il()
          , Gi = Di()
          , xl = ft()
          , Gt = Ai()
          , bl = "[object Map]"
          , aA = "[object Object]"
          , wl = "[object Promise]"
          , Al = "[object Set]"
          , Ol = "[object WeakMap]"
          , Sl = "[object DataView]"
          , sA = Gt(Mi)
          , uA = Gt(Fi)
          , cA = Gt(qi)
          , lA = Gt(ki)
          , fA = Gt(Gi)
          , _t = xl;
        (Mi && _t(new Mi(new ArrayBuffer(1))) != Sl || Fi && _t(new Fi) != bl || qi && _t(qi.resolve()) != wl || ki && _t(new ki) != Al || Gi && _t(new Gi) != Ol) && (_t = function(e) {
            var t = xl(e)
              , n = t == aA ? e.constructor : void 0
              , r = n ? Gt(n) : "";
            if (r)
                switch (r) {
                case sA:
                    return Sl;
                case uA:
                    return bl;
                case cA:
                    return wl;
                case lA:
                    return Al;
                case fA:
                    return Ol
                }
            return t
        }
        );
        Rl.exports = _t
    }
    );
    var ql = d( ($2, Fl) => {
        var Xi = Oi()
          , dA = Si()
          , pA = Oc()
          , gA = hl()
          , Cl = ir()
          , Ll = be()
          , Pl = Zn()
          , hA = tr()
          , vA = 1
          , Nl = "[object Arguments]"
          , Dl = "[object Array]"
          , or = "[object Object]"
          , EA = Object.prototype
          , Ml = EA.hasOwnProperty;
        function mA(e, t, n, r, i, o) {
            var a = Ll(e)
              , u = Ll(t)
              , s = a ? Dl : Cl(e)
              , f = u ? Dl : Cl(t);
            s = s == Nl ? or : s,
            f = f == Nl ? or : f;
            var y = s == or
              , m = f == or
              , g = s == f;
            if (g && Pl(e)) {
                if (!Pl(t))
                    return !1;
                a = !0,
                y = !1
            }
            if (g && !y)
                return o || (o = new Xi),
                a || hA(e) ? dA(e, t, n, r, i, o) : pA(e, t, s, n, r, i, o);
            if (!(n & vA)) {
                var E = y && Ml.call(e, "__wrapped__")
                  , b = m && Ml.call(t, "__wrapped__");
                if (E || b) {
                    var I = E ? e.value() : e
                      , O = b ? t.value() : t;
                    return o || (o = new Xi),
                    i(I, O, n, r, o)
                }
            }
            return g ? (o || (o = new Xi),
            gA(e, t, n, r, i, o)) : !1
        }
        Fl.exports = mA
    }
    );
    var Ui = d( (Z2, Xl) => {
        var yA = ql()
          , kl = ot();
        function Gl(e, t, n, r, i) {
            return e === t ? !0 : e == null || t == null || !kl(e) && !kl(t) ? e !== e && t !== t : yA(e, t, n, r, Gl, i)
        }
        Xl.exports = Gl
    }
    );
    var Vl = d( (J2, Ul) => {
        var _A = Oi()
          , IA = Ui()
          , TA = 1
          , bA = 2;
        function wA(e, t, n, r) {
            var i = n.length
              , o = i
              , a = !r;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var u = n[i];
                if (a && u[2] ? u[1] !== e[u[0]] : !(u[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                u = n[i];
                var s = u[0]
                  , f = e[s]
                  , y = u[1];
                if (a && u[2]) {
                    if (f === void 0 && !(s in e))
                        return !1
                } else {
                    var m = new _A;
                    if (r)
                        var g = r(f, y, s, e, t, m);
                    if (!(g === void 0 ? IA(y, f, TA | bA, r, m) : g))
                        return !1
                }
            }
            return !0
        }
        Ul.exports = wA
    }
    );
    var Vi = d( (eq, Wl) => {
        var AA = et();
        function OA(e) {
            return e === e && !AA(e)
        }
        Wl.exports = OA
    }
    );
    var Bl = d( (tq, Hl) => {
        var SA = Vi()
          , xA = hn();
        function RA(e) {
            for (var t = xA(e), n = t.length; n--; ) {
                var r = t[n]
                  , i = e[r];
                t[n] = [r, i, SA(i)]
            }
            return t
        }
        Hl.exports = RA
    }
    );
    var Wi = d( (nq, zl) => {
        function CA(e, t) {
            return function(n) {
                return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
            }
        }
        zl.exports = CA
    }
    );
    var jl = d( (rq, Kl) => {
        var LA = Vl()
          , PA = Bl()
          , NA = Wi();
        function DA(e) {
            var t = PA(e);
            return t.length == 1 && t[0][2] ? NA(t[0][0], t[0][1]) : function(n) {
                return n === e || LA(n, e, t)
            }
        }
        Kl.exports = DA
    }
    );
    var vn = d( (iq, Yl) => {
        var MA = ft()
          , FA = ot()
          , qA = "[object Symbol]";
        function kA(e) {
            return typeof e == "symbol" || FA(e) && MA(e) == qA
        }
        Yl.exports = kA
    }
    );
    var ar = d( (oq, Ql) => {
        var GA = be()
          , XA = vn()
          , UA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , VA = /^\w*$/;
        function WA(e, t) {
            if (GA(e))
                return !1;
            var n = typeof e;
            return n == "number" || n == "symbol" || n == "boolean" || e == null || XA(e) ? !0 : VA.test(e) || !UA.test(e) || t != null && e in Object(t)
        }
        Ql.exports = WA
    }
    );
    var Jl = d( (aq, Zl) => {
        var $l = Yn()
          , HA = "Expected a function";
        function Hi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(HA);
            var n = function() {
                var r = arguments
                  , i = t ? t.apply(this, r) : r[0]
                  , o = n.cache;
                if (o.has(i))
                    return o.get(i);
                var a = e.apply(this, r);
                return n.cache = o.set(i, a) || o,
                a
            };
            return n.cache = new (Hi.Cache || $l),
            n
        }
        Hi.Cache = $l;
        Zl.exports = Hi
    }
    );
    var tf = d( (sq, ef) => {
        var BA = Jl()
          , zA = 500;
        function KA(e) {
            var t = BA(e, function(r) {
                return n.size === zA && n.clear(),
                r
            })
              , n = t.cache;
            return t
        }
        ef.exports = KA
    }
    );
    var rf = d( (uq, nf) => {
        var jA = tf()
          , YA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , QA = /\\(\\)?/g
          , $A = jA(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(YA, function(n, r, i, o) {
                t.push(i ? o.replace(QA, "$1") : r || n)
            }),
            t
        });
        nf.exports = $A
    }
    );
    var Bi = d( (cq, of) => {
        function ZA(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
                i[n] = t(e[n], n, e);
            return i
        }
        of.exports = ZA
    }
    );
    var ff = d( (lq, lf) => {
        var af = Rt()
          , JA = Bi()
          , e0 = be()
          , t0 = vn()
          , n0 = 1 / 0
          , sf = af ? af.prototype : void 0
          , uf = sf ? sf.toString : void 0;
        function cf(e) {
            if (typeof e == "string")
                return e;
            if (e0(e))
                return JA(e, cf) + "";
            if (t0(e))
                return uf ? uf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -n0 ? "-0" : t
        }
        lf.exports = cf
    }
    );
    var pf = d( (fq, df) => {
        var r0 = ff();
        function i0(e) {
            return e == null ? "" : r0(e)
        }
        df.exports = i0
    }
    );
    var En = d( (dq, gf) => {
        var o0 = be()
          , a0 = ar()
          , s0 = rf()
          , u0 = pf();
        function c0(e, t) {
            return o0(e) ? e : a0(e, t) ? [e] : s0(u0(e))
        }
        gf.exports = c0
    }
    );
    var Xt = d( (pq, hf) => {
        var l0 = vn()
          , f0 = 1 / 0;
        function d0(e) {
            if (typeof e == "string" || l0(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -f0 ? "-0" : t
        }
        hf.exports = d0
    }
    );
    var sr = d( (gq, vf) => {
        var p0 = En()
          , g0 = Xt();
        function h0(e, t) {
            t = p0(t, e);
            for (var n = 0, r = t.length; e != null && n < r; )
                e = e[g0(t[n++])];
            return n && n == r ? e : void 0
        }
        vf.exports = h0
    }
    );
    var ur = d( (hq, Ef) => {
        var v0 = sr();
        function E0(e, t, n) {
            var r = e == null ? void 0 : v0(e, t);
            return r === void 0 ? n : r
        }
        Ef.exports = E0
    }
    );
    var yf = d( (vq, mf) => {
        function m0(e, t) {
            return e != null && t in Object(e)
        }
        mf.exports = m0
    }
    );
    var If = d( (Eq, _f) => {
        var y0 = En()
          , _0 = fn()
          , I0 = be()
          , T0 = Jn()
          , b0 = er()
          , w0 = Xt();
        function A0(e, t, n) {
            t = y0(t, e);
            for (var r = -1, i = t.length, o = !1; ++r < i; ) {
                var a = w0(t[r]);
                if (!(o = e != null && n(e, a)))
                    break;
                e = e[a]
            }
            return o || ++r != i ? o : (i = e == null ? 0 : e.length,
            !!i && b0(i) && T0(a, i) && (I0(e) || _0(e)))
        }
        _f.exports = A0
    }
    );
    var bf = d( (mq, Tf) => {
        var O0 = yf()
          , S0 = If();
        function x0(e, t) {
            return e != null && S0(e, t, O0)
        }
        Tf.exports = x0
    }
    );
    var Af = d( (yq, wf) => {
        var R0 = Ui()
          , C0 = ur()
          , L0 = bf()
          , P0 = ar()
          , N0 = Vi()
          , D0 = Wi()
          , M0 = Xt()
          , F0 = 1
          , q0 = 2;
        function k0(e, t) {
            return P0(e) && N0(t) ? D0(M0(e), t) : function(n) {
                var r = C0(n, e);
                return r === void 0 && r === t ? L0(n, e) : R0(t, r, F0 | q0)
            }
        }
        wf.exports = k0
    }
    );
    var cr = d( (_q, Of) => {
        function G0(e) {
            return e
        }
        Of.exports = G0
    }
    );
    var zi = d( (Iq, Sf) => {
        function X0(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Sf.exports = X0
    }
    );
    var Rf = d( (Tq, xf) => {
        var U0 = sr();
        function V0(e) {
            return function(t) {
                return U0(t, e)
            }
        }
        xf.exports = V0
    }
    );
    var Lf = d( (bq, Cf) => {
        var W0 = zi()
          , H0 = Rf()
          , B0 = ar()
          , z0 = Xt();
        function K0(e) {
            return B0(e) ? W0(z0(e)) : H0(e)
        }
        Cf.exports = K0
    }
    );
    var pt = d( (wq, Pf) => {
        var j0 = jl()
          , Y0 = Af()
          , Q0 = cr()
          , $0 = be()
          , Z0 = Lf();
        function J0(e) {
            return typeof e == "function" ? e : e == null ? Q0 : typeof e == "object" ? $0(e) ? Y0(e[0], e[1]) : j0(e) : Z0(e)
        }
        Pf.exports = J0
    }
    );
    var Ki = d( (Aq, Nf) => {
        var eO = pt()
          , tO = yt()
          , nO = hn();
        function rO(e) {
            return function(t, n, r) {
                var i = Object(t);
                if (!tO(t)) {
                    var o = eO(n, 3);
                    t = nO(t),
                    n = function(u) {
                        return o(i[u], u, i)
                    }
                }
                var a = e(t, n, r);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Nf.exports = rO
    }
    );
    var ji = d( (Oq, Df) => {
        function iO(e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        Df.exports = iO
    }
    );
    var Ff = d( (Sq, Mf) => {
        var oO = /\s/;
        function aO(e) {
            for (var t = e.length; t-- && oO.test(e.charAt(t)); )
                ;
            return t
        }
        Mf.exports = aO
    }
    );
    var kf = d( (xq, qf) => {
        var sO = Ff()
          , uO = /^\s+/;
        function cO(e) {
            return e && e.slice(0, sO(e) + 1).replace(uO, "")
        }
        qf.exports = cO
    }
    );
    var lr = d( (Rq, Uf) => {
        var lO = kf()
          , Gf = et()
          , fO = vn()
          , Xf = 0 / 0
          , dO = /^[-+]0x[0-9a-f]+$/i
          , pO = /^0b[01]+$/i
          , gO = /^0o[0-7]+$/i
          , hO = parseInt;
        function vO(e) {
            if (typeof e == "number")
                return e;
            if (fO(e))
                return Xf;
            if (Gf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Gf(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = lO(e);
            var n = pO.test(e);
            return n || gO.test(e) ? hO(e.slice(2), n ? 2 : 8) : dO.test(e) ? Xf : +e
        }
        Uf.exports = vO
    }
    );
    var Hf = d( (Cq, Wf) => {
        var EO = lr()
          , Vf = 1 / 0
          , mO = 17976931348623157e292;
        function yO(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = EO(e),
            e === Vf || e === -Vf) {
                var t = e < 0 ? -1 : 1;
                return t * mO
            }
            return e === e ? e : 0
        }
        Wf.exports = yO
    }
    );
    var Yi = d( (Lq, Bf) => {
        var _O = Hf();
        function IO(e) {
            var t = _O(e)
              , n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        Bf.exports = IO
    }
    );
    var Kf = d( (Pq, zf) => {
        var TO = ji()
          , bO = pt()
          , wO = Yi()
          , AO = Math.max;
        function OO(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r)
                return -1;
            var i = n == null ? 0 : wO(n);
            return i < 0 && (i = AO(r + i, 0)),
            TO(e, bO(t, 3), i)
        }
        zf.exports = OO
    }
    );
    var Qi = d( (Nq, jf) => {
        var SO = Ki()
          , xO = Kf()
          , RO = SO(xO);
        jf.exports = RO
    }
    );
    var $f = {};
    Ne($f, {
        ELEMENT_MATCHES: () => CO,
        FLEX_PREFIXED: () => $i,
        IS_BROWSER_ENV: () => Ke,
        TRANSFORM_PREFIXED: () => gt,
        TRANSFORM_STYLE_PREFIXED: () => dr,
        withBrowser: () => fr
    });
    var Qf, Ke, fr, CO, $i, gt, Yf, dr, pr = ve( () => {
        "use strict";
        Qf = fe(Qi()),
        Ke = typeof window < "u",
        fr = (e, t) => Ke ? e() : t,
        CO = fr( () => (0,
        Qf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        $i = fr( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , n = "";
            try {
                let {length: r} = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return n
            } catch {
                return n
            }
        }
        , "flex"),
        gt = fr( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , n = "Transform"
                  , {length: r} = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i] + n;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        Yf = gt.split("transform")[0],
        dr = Yf ? Yf + "TransformStyle" : "transformStyle"
    }
    );
    var Zi = d( (Dq, nd) => {
        var LO = 4
          , PO = .001
          , NO = 1e-7
          , DO = 10
          , mn = 11
          , gr = 1 / (mn - 1)
          , MO = typeof Float32Array == "function";
        function Zf(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function Jf(e, t) {
            return 3 * t - 6 * e
        }
        function ed(e) {
            return 3 * e
        }
        function hr(e, t, n) {
            return ((Zf(t, n) * e + Jf(t, n)) * e + ed(t)) * e
        }
        function td(e, t, n) {
            return 3 * Zf(t, n) * e * e + 2 * Jf(t, n) * e + ed(t)
        }
        function FO(e, t, n, r, i) {
            var o, a, u = 0;
            do
                a = t + (n - t) / 2,
                o = hr(a, r, i) - e,
                o > 0 ? n = a : t = a;
            while (Math.abs(o) > NO && ++u < DO);
            return a
        }
        function qO(e, t, n, r) {
            for (var i = 0; i < LO; ++i) {
                var o = td(t, n, r);
                if (o === 0)
                    return t;
                var a = hr(t, n, r) - e;
                t -= a / o
            }
            return t
        }
        nd.exports = function(t, n, r, i) {
            if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = MO ? new Float32Array(mn) : new Array(mn);
            if (t !== n || r !== i)
                for (var a = 0; a < mn; ++a)
                    o[a] = hr(a * gr, t, r);
            function u(s) {
                for (var f = 0, y = 1, m = mn - 1; y !== m && o[y] <= s; ++y)
                    f += gr;
                --y;
                var g = (s - o[y]) / (o[y + 1] - o[y])
                  , E = f + g * gr
                  , b = td(E, t, r);
                return b >= PO ? qO(s, E, t, r) : b === 0 ? E : FO(s, f, f + gr, t, r)
            }
            return function(f) {
                return t === n && r === i ? f : f === 0 ? 0 : f === 1 ? 1 : hr(u(f), n, i)
            }
        }
    }
    );
    var _n = {};
    Ne(_n, {
        bounce: () => yS,
        bouncePast: () => _S,
        ease: () => kO,
        easeIn: () => GO,
        easeInOut: () => UO,
        easeOut: () => XO,
        inBack: () => lS,
        inCirc: () => aS,
        inCubic: () => BO,
        inElastic: () => pS,
        inExpo: () => rS,
        inOutBack: () => dS,
        inOutCirc: () => uS,
        inOutCubic: () => KO,
        inOutElastic: () => hS,
        inOutExpo: () => oS,
        inOutQuad: () => HO,
        inOutQuart: () => QO,
        inOutQuint: () => JO,
        inOutSine: () => nS,
        inQuad: () => VO,
        inQuart: () => jO,
        inQuint: () => $O,
        inSine: () => eS,
        outBack: () => fS,
        outBounce: () => cS,
        outCirc: () => sS,
        outCubic: () => zO,
        outElastic: () => gS,
        outExpo: () => iS,
        outQuad: () => WO,
        outQuart: () => YO,
        outQuint: () => ZO,
        outSine: () => tS,
        swingFrom: () => ES,
        swingFromTo: () => vS,
        swingTo: () => mS
    });
    function VO(e) {
        return Math.pow(e, 2)
    }
    function WO(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function HO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function BO(e) {
        return Math.pow(e, 3)
    }
    function zO(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function KO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function jO(e) {
        return Math.pow(e, 4)
    }
    function YO(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function QO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function $O(e) {
        return Math.pow(e, 5)
    }
    function ZO(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function JO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function eS(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function tS(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function nS(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function rS(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function iS(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function oS(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function aS(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function sS(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function uS(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function cS(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function lS(e) {
        let t = at;
        return e * e * ((t + 1) * e - t)
    }
    function fS(e) {
        let t = at;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function dS(e) {
        let t = at;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function pS(e) {
        let t = at
          , n = 0
          , r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
    }
    function gS(e) {
        let t = at
          , n = 0
          , r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
    }
    function hS(e) {
        let t = at
          , n = 0
          , r = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (n || (n = .3 * 1.5),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
    }
    function vS(e) {
        let t = at;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function ES(e) {
        let t = at;
        return e * e * ((t + 1) * e - t)
    }
    function mS(e) {
        let t = at;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function yS(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function _S(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var yn, at, kO, GO, XO, UO, Ji = ve( () => {
        "use strict";
        yn = fe(Zi()),
        at = 1.70158,
        kO = (0,
        yn.default)(.25, .1, .25, 1),
        GO = (0,
        yn.default)(.42, 0, 1, 1),
        XO = (0,
        yn.default)(0, 0, .58, 1),
        UO = (0,
        yn.default)(.42, 0, .58, 1)
    }
    );
    var id = {};
    Ne(id, {
        applyEasing: () => TS,
        createBezierEasing: () => IS,
        optimizeFloat: () => In
    });
    function In(e, t=5, n=10) {
        let r = Math.pow(n, t)
          , i = Number(Math.round(e * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function IS(e) {
        return (0,
        rd.default)(...e)
    }
    function TS(e, t, n) {
        return t === 0 ? 0 : t === 1 ? 1 : In(n ? t > 0 ? n(t) : t : t > 0 && e && _n[e] ? _n[e](t) : t)
    }
    var rd, eo = ve( () => {
        "use strict";
        Ji();
        rd = fe(Zi())
    }
    );
    var sd = {};
    Ne(sd, {
        createElementState: () => ad,
        ixElements: () => FS,
        mergeActionState: () => to
    });
    function ad(e, t, n, r, i) {
        let o = n === bS ? (0,
        Ut.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        Ut.mergeIn)(e, [r], {
            id: r,
            ref: t,
            refId: o,
            refType: n
        })
    }
    function to(e, t, n, r, i) {
        let o = kS(i);
        return (0,
        Ut.mergeIn)(e, [t, MS, n], r, o)
    }
    function kS(e) {
        let {config: t} = e;
        return qS.reduce( (n, r) => {
            let i = r[0]
              , o = r[1]
              , a = t[i]
              , u = t[o];
            return a != null && u != null && (n[o] = u),
            n
        }
        , {})
    }
    var Ut, Fq, bS, qq, wS, AS, OS, SS, xS, RS, CS, LS, PS, NS, DS, od, MS, FS, qS, ud = ve( () => {
        "use strict";
        Ut = fe(Pt());
        Me();
        ({HTML_ELEMENT: Fq, PLAIN_OBJECT: bS, ABSTRACT_NODE: qq, CONFIG_X_VALUE: wS, CONFIG_Y_VALUE: AS, CONFIG_Z_VALUE: OS, CONFIG_VALUE: SS, CONFIG_X_UNIT: xS, CONFIG_Y_UNIT: RS, CONFIG_Z_UNIT: CS, CONFIG_UNIT: LS} = Ae),
        {IX2_SESSION_STOPPED: PS, IX2_INSTANCE_ADDED: NS, IX2_ELEMENT_STATE_CHANGED: DS} = Te,
        od = {},
        MS = "refState",
        FS = (e=od, t={}) => {
            switch (t.type) {
            case PS:
                return od;
            case NS:
                {
                    let {elementId: n, element: r, origin: i, actionItem: o, refType: a} = t.payload
                      , {actionTypeId: u} = o
                      , s = e;
                    return (0,
                    Ut.getIn)(s, [n, r]) !== r && (s = ad(s, r, a, n, o)),
                    to(s, n, u, i, o)
                }
            case DS:
                {
                    let {elementId: n, actionTypeId: r, current: i, actionItem: o} = t.payload;
                    return to(e, n, r, i, o)
                }
            default:
                return e
            }
        }
        ;
        qS = [[wS, xS], [AS, RS], [OS, CS], [SS, LS]]
    }
    );
    var cd = d(no => {
        "use strict";
        Object.defineProperty(no, "__esModule", {
            value: !0
        });
        function GS(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        GS(no, {
            clearPlugin: function() {
                return zS
            },
            createPluginInstance: function() {
                return HS
            },
            getPluginConfig: function() {
                return XS
            },
            getPluginDestination: function() {
                return WS
            },
            getPluginDuration: function() {
                return US
            },
            getPluginOrigin: function() {
                return VS
            },
            renderPlugin: function() {
                return BS
            }
        });
        var XS = e => e.value
          , US = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
          , VS = e => e || {
            value: 0
        }
          , WS = e => ({
            value: e.value
        })
          , HS = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
          , BS = (e, t, n) => {
            if (!e)
                return;
            let r = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * r)
        }
          , zS = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
    }
    );
    var fd = d(ro => {
        "use strict";
        Object.defineProperty(ro, "__esModule", {
            value: !0
        });
        function KS(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        KS(ro, {
            clearPlugin: function() {
                return rx
            },
            createPluginInstance: function() {
                return tx
            },
            getPluginConfig: function() {
                return $S
            },
            getPluginDestination: function() {
                return ex
            },
            getPluginDuration: function() {
                return ZS
            },
            getPluginOrigin: function() {
                return JS
            },
            renderPlugin: function() {
                return nx
            }
        });
        var jS = e => document.querySelector(`[data-w-id="${e}"]`)
          , YS = () => window.Webflow.require("spline")
          , QS = (e, t) => e.filter(n => !t.includes(n))
          , $S = (e, t) => e.value[t]
          , ZS = () => null
          , ld = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , JS = (e, t) => {
            let n = t.config.value
              , r = Object.keys(n);
            if (e) {
                let o = Object.keys(e)
                  , a = QS(r, o);
                return a.length ? a.reduce( (s, f) => (s[f] = ld[f],
                s), e) : e
            }
            return r.reduce( (o, a) => (o[a] = ld[a],
            o), {})
        }
          , ex = e => e.value
          , tx = (e, t) => {
            let n = t?.config?.target?.pluginElement;
            return n ? jS(n) : null
        }
          , nx = (e, t, n) => {
            let r = YS()
              , i = r.getInstance(e)
              , o = n.config.target.objectId
              , a = u => {
                if (!u)
                    throw new Error("Invalid spline app passed to renderSpline");
                let s = o && u.findObjectById(o);
                if (!s)
                    return;
                let {PLUGIN_SPLINE: f} = t;
                f.positionX != null && (s.position.x = f.positionX),
                f.positionY != null && (s.position.y = f.positionY),
                f.positionZ != null && (s.position.z = f.positionZ),
                f.rotationX != null && (s.rotation.x = f.rotationX),
                f.rotationY != null && (s.rotation.y = f.rotationY),
                f.rotationZ != null && (s.rotation.z = f.rotationZ),
                f.scaleX != null && (s.scale.x = f.scaleX),
                f.scaleY != null && (s.scale.y = f.scaleY),
                f.scaleZ != null && (s.scale.z = f.scaleZ)
            }
            ;
            i ? a(i.spline) : r.setLoadHandler(e, a)
        }
          , rx = () => null
    }
    );
    var dd = d(ao => {
        "use strict";
        Object.defineProperty(ao, "__esModule", {
            value: !0
        });
        function ix(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        ix(ao, {
            clearPlugin: function() {
                return px
            },
            createPluginInstance: function() {
                return fx
            },
            getPluginConfig: function() {
                return sx
            },
            getPluginDestination: function() {
                return lx
            },
            getPluginDuration: function() {
                return ux
            },
            getPluginOrigin: function() {
                return cx
            },
            renderPlugin: function() {
                return dx
            }
        });
        var io = "--wf-rive-fit"
          , oo = "--wf-rive-alignment"
          , ox = e => document.querySelector(`[data-w-id="${e}"]`)
          , ax = () => window.Webflow.require("rive")
          , sx = (e, t) => e.value.inputs[t]
          , ux = () => null
          , cx = (e, t) => {
            if (e)
                return e;
            let n = {}
              , {inputs: r={}} = t.config.value;
            for (let i in r)
                r[i] == null && (n[i] = 0);
            return n
        }
          , lx = e => e.value.inputs ?? {}
          , fx = (e, t) => {
            if ((t.config?.target?.selectorGuids || []).length > 0)
                return e;
            let r = t?.config?.target?.pluginElement;
            return r ? ox(r) : null
        }
          , dx = (e, {PLUGIN_RIVE: t}, n) => {
            let r = ax()
              , i = r.getInstance(e)
              , o = r.rive.StateMachineInputType
              , {name: a, inputs: u={}} = n.config.value || {};
            function s(f) {
                if (f.loaded)
                    y();
                else {
                    let m = () => {
                        y(),
                        f?.off("load", m)
                    }
                    ;
                    f?.on("load", m)
                }
                function y() {
                    let m = f.stateMachineInputs(a);
                    if (m != null) {
                        if (f.isPlaying || f.play(a, !1),
                        io in u || oo in u) {
                            let g = f.layout
                              , E = u[io] ?? g.fit
                              , b = u[oo] ?? g.alignment;
                            (E !== g.fit || b !== g.alignment) && (f.layout = g.copyWith({
                                fit: E,
                                alignment: b
                            }))
                        }
                        for (let g in u) {
                            if (g === io || g === oo)
                                continue;
                            let E = m.find(b => b.name === g);
                            if (E != null)
                                switch (E.type) {
                                case o.Boolean:
                                    {
                                        if (u[g] != null) {
                                            let b = !!u[g];
                                            E.value = b
                                        }
                                        break
                                    }
                                case o.Number:
                                    {
                                        let b = t[g];
                                        b != null && (E.value = b);
                                        break
                                    }
                                case o.Trigger:
                                    {
                                        u[g] && E.fire();
                                        break
                                    }
                                }
                        }
                    }
                }
            }
            i?.rive ? s(i.rive) : r.setLoadHandler(e, s)
        }
          , px = (e, t) => null
    }
    );
    var uo = d(so => {
        "use strict";
        Object.defineProperty(so, "__esModule", {
            value: !0
        });
        Object.defineProperty(so, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return gx
            }
        });
        var pd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function gx(e) {
            let t, n, r, i = 1, o = e.replace(/\s/g, "").toLowerCase(), u = (typeof pd[o] == "string" ? pd[o].toLowerCase() : null) || o;
            if (u.startsWith("#")) {
                let s = u.substring(1);
                s.length === 3 || s.length === 4 ? (t = parseInt(s[0] + s[0], 16),
                n = parseInt(s[1] + s[1], 16),
                r = parseInt(s[2] + s[2], 16),
                s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255)) : (s.length === 6 || s.length === 8) && (t = parseInt(s.substring(0, 2), 16),
                n = parseInt(s.substring(2, 4), 16),
                r = parseInt(s.substring(4, 6), 16),
                s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255))
            } else if (u.startsWith("rgba")) {
                let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10),
                n = parseInt(s[1], 10),
                r = parseInt(s[2], 10),
                i = parseFloat(s[3])
            } else if (u.startsWith("rgb")) {
                let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10),
                n = parseInt(s[1], 10),
                r = parseInt(s[2], 10)
            } else if (u.startsWith("hsla")) {
                let s = u.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , f = parseFloat(s[0])
                  , y = parseFloat(s[1].replace("%", "")) / 100
                  , m = parseFloat(s[2].replace("%", "")) / 100;
                i = parseFloat(s[3]);
                let g = (1 - Math.abs(2 * m - 1)) * y, E = g * (1 - Math.abs(f / 60 % 2 - 1)), b = m - g / 2, I, O, T;
                f >= 0 && f < 60 ? (I = g,
                O = E,
                T = 0) : f >= 60 && f < 120 ? (I = E,
                O = g,
                T = 0) : f >= 120 && f < 180 ? (I = 0,
                O = g,
                T = E) : f >= 180 && f < 240 ? (I = 0,
                O = E,
                T = g) : f >= 240 && f < 300 ? (I = E,
                O = 0,
                T = g) : (I = g,
                O = 0,
                T = E),
                t = Math.round((I + b) * 255),
                n = Math.round((O + b) * 255),
                r = Math.round((T + b) * 255)
            } else if (u.startsWith("hsl")) {
                let s = u.match(/hsl\(([^)]+)\)/)[1].split(","), f = parseFloat(s[0]), y = parseFloat(s[1].replace("%", "")) / 100, m = parseFloat(s[2].replace("%", "")) / 100, g = (1 - Math.abs(2 * m - 1)) * y, E = g * (1 - Math.abs(f / 60 % 2 - 1)), b = m - g / 2, I, O, T;
                f >= 0 && f < 60 ? (I = g,
                O = E,
                T = 0) : f >= 60 && f < 120 ? (I = E,
                O = g,
                T = 0) : f >= 120 && f < 180 ? (I = 0,
                O = g,
                T = E) : f >= 180 && f < 240 ? (I = 0,
                O = E,
                T = g) : f >= 240 && f < 300 ? (I = E,
                O = 0,
                T = g) : (I = g,
                O = 0,
                T = E),
                t = Math.round((I + b) * 255),
                n = Math.round((O + b) * 255),
                r = Math.round((T + b) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: n,
                blue: r,
                alpha: i
            }
        }
    }
    );
    var gd = d(co => {
        "use strict";
        Object.defineProperty(co, "__esModule", {
            value: !0
        });
        function hx(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        hx(co, {
            clearPlugin: function() {
                return wx
            },
            createPluginInstance: function() {
                return Ix
            },
            getPluginConfig: function() {
                return Ex
            },
            getPluginDestination: function() {
                return _x
            },
            getPluginDuration: function() {
                return mx
            },
            getPluginOrigin: function() {
                return yx
            },
            renderPlugin: function() {
                return bx
            }
        });
        var vx = uo()
          , Ex = (e, t) => e.value[t]
          , mx = () => null
          , yx = (e, t) => {
            if (e)
                return e;
            let n = t.config.value
              , r = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(r);
            if (n.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (n.unit === "%" || n.unit === "-")
                return {
                    size: parseFloat(i)
                };
            if (n.red != null && n.green != null && n.blue != null)
                return (0,
                vx.normalizeColor)(i)
        }
          , _x = e => e.value
          , Ix = () => null
          , Tx = {
            color: {
                match: ({red: e, green: t, blue: n, alpha: r}) => [e, t, n, r].every(i => i != null),
                getValue: ({red: e, green: t, blue: n, alpha: r}) => `rgba(${e}, ${t}, ${n}, ${r})`
            },
            size: {
                match: ({size: e}) => e != null,
                getValue: ({size: e}, t) => {
                    switch (t) {
                    case "-":
                        return e;
                    default:
                        return `${e}${t}`
                    }
                }
            }
        }
          , bx = (e, t, n) => {
            let {target: {objectId: r}, value: {unit: i}} = n.config
              , o = t.PLUGIN_VARIABLE
              , a = Object.values(Tx).find(u => u.match(o, i));
            a && document.documentElement.style.setProperty(r, a.getValue(o, i))
        }
          , wx = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n)
        }
    }
    );
    var vd = d(lo => {
        "use strict";
        Object.defineProperty(lo, "__esModule", {
            value: !0
        });
        Object.defineProperty(lo, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return Rx
            }
        });
        var vr = (Me(),
        Qe(ys))
          , Ax = Er(cd())
          , Ox = Er(fd())
          , Sx = Er(dd())
          , xx = Er(gd());
        function hd(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (hd = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function Er(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = hd(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        var Rx = new Map([[vr.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...Ax
        }], [vr.ActionTypeConsts.PLUGIN_SPLINE, {
            ...Ox
        }], [vr.ActionTypeConsts.PLUGIN_RIVE, {
            ...Sx
        }], [vr.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...xx
        }]])
    }
    );
    var Ed = {};
    Ne(Ed, {
        clearPlugin: () => Eo,
        createPluginInstance: () => Lx,
        getPluginConfig: () => po,
        getPluginDestination: () => ho,
        getPluginDuration: () => Cx,
        getPluginOrigin: () => go,
        isPluginType: () => It,
        renderPlugin: () => vo
    });
    function It(e) {
        return fo.pluginMethodMap.has(e)
    }
    var fo, Tt, po, go, Cx, ho, Lx, vo, Eo, mo = ve( () => {
        "use strict";
        pr();
        fo = fe(vd());
        Tt = e => t => {
            if (!Ke)
                return () => null;
            let n = fo.pluginMethodMap.get(t);
            if (!n)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let r = n[e];
            if (!r)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return r
        }
        ,
        po = Tt("getPluginConfig"),
        go = Tt("getPluginOrigin"),
        Cx = Tt("getPluginDuration"),
        ho = Tt("getPluginDestination"),
        Lx = Tt("createPluginInstance"),
        vo = Tt("renderPlugin"),
        Eo = Tt("clearPlugin")
    }
    );
    var yd = d( (Bq, md) => {
        function Px(e, t) {
            return e == null || e !== e ? t : e
        }
        md.exports = Px
    }
    );
    var Id = d( (zq, _d) => {
        function Nx(e, t, n, r) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (r && o && (n = e[++i]); ++i < o; )
                n = t(n, e[i], i, e);
            return n
        }
        _d.exports = Nx
    }
    );
    var bd = d( (Kq, Td) => {
        function Dx(e) {
            return function(t, n, r) {
                for (var i = -1, o = Object(t), a = r(t), u = a.length; u--; ) {
                    var s = a[e ? u : ++i];
                    if (n(o[s], s, o) === !1)
                        break
                }
                return t
            }
        }
        Td.exports = Dx
    }
    );
    var Ad = d( (jq, wd) => {
        var Mx = bd()
          , Fx = Mx();
        wd.exports = Fx
    }
    );
    var yo = d( (Yq, Od) => {
        var qx = Ad()
          , kx = hn();
        function Gx(e, t) {
            return e && qx(e, t, kx)
        }
        Od.exports = Gx
    }
    );
    var xd = d( (Qq, Sd) => {
        var Xx = yt();
        function Ux(e, t) {
            return function(n, r) {
                if (n == null)
                    return n;
                if (!Xx(n))
                    return e(n, r);
                for (var i = n.length, o = t ? i : -1, a = Object(n); (t ? o-- : ++o < i) && r(a[o], o, a) !== !1; )
                    ;
                return n
            }
        }
        Sd.exports = Ux
    }
    );
    var _o = d( ($q, Rd) => {
        var Vx = yo()
          , Wx = xd()
          , Hx = Wx(Vx);
        Rd.exports = Hx
    }
    );
    var Ld = d( (Zq, Cd) => {
        function Bx(e, t, n, r, i) {
            return i(e, function(o, a, u) {
                n = r ? (r = !1,
                o) : t(n, o, a, u)
            }),
            n
        }
        Cd.exports = Bx
    }
    );
    var Nd = d( (Jq, Pd) => {
        var zx = Id()
          , Kx = _o()
          , jx = pt()
          , Yx = Ld()
          , Qx = be();
        function $x(e, t, n) {
            var r = Qx(e) ? zx : Yx
              , i = arguments.length < 3;
            return r(e, jx(t, 4), n, i, Kx)
        }
        Pd.exports = $x
    }
    );
    var Md = d( (ek, Dd) => {
        var Zx = ji()
          , Jx = pt()
          , eR = Yi()
          , tR = Math.max
          , nR = Math.min;
        function rR(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r)
                return -1;
            var i = r - 1;
            return n !== void 0 && (i = eR(n),
            i = n < 0 ? tR(r + i, 0) : nR(i, r - 1)),
            Zx(e, Jx(t, 3), i, !0)
        }
        Dd.exports = rR
    }
    );
    var qd = d( (tk, Fd) => {
        var iR = Ki()
          , oR = Md()
          , aR = iR(oR);
        Fd.exports = aR
    }
    );
    function kd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function sR(e, t) {
        if (kd(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (let i = 0; i < n.length; i++)
            if (!Object.hasOwn(t, n[i]) || !kd(e[n[i]], t[n[i]]))
                return !1;
        return !0
    }
    var Io, Gd = ve( () => {
        "use strict";
        Io = sR
    }
    );
    var rp = {};
    Ne(rp, {
        cleanupHTMLElement: () => iC,
        clearAllStyles: () => rC,
        clearObjectCache: () => wR,
        getActionListProgress: () => aC,
        getAffectedElements: () => Oo,
        getComputedStyle: () => PR,
        getDestinationValues: () => GR,
        getElementId: () => xR,
        getInstanceId: () => OR,
        getInstanceOrigin: () => MR,
        getItemConfigByKey: () => kR,
        getMaxDurationItemIndex: () => np,
        getNamespacedParameterId: () => cC,
        getRenderType: () => Jd,
        getStyleProp: () => XR,
        mediaQueriesEqual: () => fC,
        observeStore: () => LR,
        reduceListToGroup: () => sC,
        reifyState: () => RR,
        renderHTMLElement: () => UR,
        shallowEqual: () => Io,
        shouldAllowMediaQuery: () => lC,
        shouldNamespaceEventParameter: () => uC,
        stringifyTarget: () => dC
    });
    function wR() {
        mr.clear()
    }
    function OR() {
        return "i" + AR++
    }
    function xR(e, t) {
        for (let n in e) {
            let r = e[n];
            if (r && r.ref === t)
                return r.id
        }
        return "e" + SR++
    }
    function RR({events: e, actionLists: t, site: n}={}) {
        let r = (0,
        Tr.default)(e, (a, u) => {
            let {eventTypeId: s} = u;
            return a[s] || (a[s] = {}),
            a[s][u.id] = u,
            a
        }
        , {})
          , i = n && n.mediaQueries
          , o = [];
        return i ? o = i.map(a => a.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: r,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function LR({store: e, select: t, onChange: n, comparator: r=CR}) {
        let {getState: i, subscribe: o} = e
          , a = o(s)
          , u = t(i());
        function s() {
            let f = t(i());
            if (f == null) {
                a();
                return
            }
            r(f, u) || (u = f,
            n(u, e))
        }
        return a
    }
    function Vd(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: n, objectId: r, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: u} = e;
            return {
                id: n,
                objectId: r,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: u
            }
        }
        return {}
    }
    function Oo({config: e, event: t, eventTarget: n, elementRoot: r, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce( (k, A) => k.concat(Oo({
                config: {
                    target: A
                },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: i
            })), []);
        let {getValidDocument: a, getQuerySelector: u, queryDocument: s, getChildElements: f, getSiblingElements: y, matchSelector: m, elementContains: g, isSiblingNode: E} = i
          , {target: b} = e;
        if (!b)
            return [];
        let {id: I, objectId: O, selector: T, selectorGuids: R, appliesTo: C, useEventTarget: N} = Vd(b);
        if (O)
            return [mr.has(O) ? mr.get(O) : mr.set(O, {}).get(O)];
        if (C === yi.PAGE) {
            let k = a(I);
            return k ? [k] : []
        }
        let D = (t?.action?.config?.affectedElements ?? {})[I || T] || {}, B = !!(D.id || D.selector), z, j, Z, J = t && u(Vd(t.target));
        if (B ? (z = D.limitAffectedElements,
        j = J,
        Z = u(D)) : j = Z = u({
            id: I,
            selector: T,
            selectorGuids: R
        }),
        t && N) {
            let k = n && (Z || N === !0) ? [n] : s(J);
            if (Z) {
                if (N === IR)
                    return s(Z).filter(A => k.some(G => g(A, G)));
                if (N === Xd)
                    return s(Z).filter(A => k.some(G => g(G, A)));
                if (N === Ud)
                    return s(Z).filter(A => k.some(G => E(G, A)))
            }
            return k
        }
        return j == null || Z == null ? [] : Ke && r ? s(Z).filter(k => r.contains(k)) : z === Xd ? s(j, Z) : z === _R ? f(s(j)).filter(m(Z)) : z === Ud ? y(s(j)).filter(m(Z)) : s(Z)
    }
    function PR({element: e, actionItem: t}) {
        if (!Ke)
            return {};
        let {actionTypeId: n} = t;
        switch (n) {
        case zt:
        case Kt:
        case jt:
        case Yt:
        case wr:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function MR(e, t={}, n={}, r, i) {
        let {getStyle: o} = i
          , {actionTypeId: a} = r;
        if (It(a))
            return go(a)(t[a], r);
        switch (r.actionTypeId) {
        case Wt:
        case Ht:
        case Bt:
        case An:
            return t[r.actionTypeId] || So[r.actionTypeId];
        case On:
            return NR(t[r.actionTypeId], r.config.filters);
        case Sn:
            return DR(t[r.actionTypeId], r.config.fontVariations);
        case Qd:
            return {
                value: (0,
                st.default)(parseFloat(o(e, _r)), 1)
            };
        case zt:
            {
                let u = o(e, tt), s = o(e, nt), f, y;
                return r.config.widthUnit === ht ? f = Wd.test(u) ? parseFloat(u) : parseFloat(n.width) : f = (0,
                st.default)(parseFloat(u), parseFloat(n.width)),
                r.config.heightUnit === ht ? y = Wd.test(s) ? parseFloat(s) : parseFloat(n.height) : y = (0,
                st.default)(parseFloat(s), parseFloat(n.height)),
                {
                    widthValue: f,
                    heightValue: y
                }
            }
        case Kt:
        case jt:
        case Yt:
            return eC({
                element: e,
                actionTypeId: r.actionTypeId,
                computedStyle: n,
                getStyle: o
            });
        case wr:
            return {
                value: (0,
                st.default)(o(e, Ir), n.display)
            };
        case bR:
            return t[r.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function GR({element: e, actionItem: t, elementApi: n}) {
        if (It(t.actionTypeId))
            return ho(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case Wt:
        case Ht:
        case Bt:
        case An:
            {
                let {xValue: r, yValue: i, zValue: o} = t.config;
                return {
                    xValue: r,
                    yValue: i,
                    zValue: o
                }
            }
        case zt:
            {
                let {getStyle: r, setStyle: i, getProperty: o} = n
                  , {widthUnit: a, heightUnit: u} = t.config
                  , {widthValue: s, heightValue: f} = t.config;
                if (!Ke)
                    return {
                        widthValue: s,
                        heightValue: f
                    };
                if (a === ht) {
                    let y = r(e, tt);
                    i(e, tt, ""),
                    s = o(e, "offsetWidth"),
                    i(e, tt, y)
                }
                if (u === ht) {
                    let y = r(e, nt);
                    i(e, nt, ""),
                    f = o(e, "offsetHeight"),
                    i(e, nt, y)
                }
                return {
                    widthValue: s,
                    heightValue: f
                }
            }
        case Kt:
        case jt:
        case Yt:
            {
                let {rValue: r, gValue: i, bValue: o, aValue: a, globalSwatchId: u} = t.config;
                if (u && u.startsWith("--")) {
                    let {getStyle: s} = n
                      , f = s(e, u)
                      , y = (0,
                    zd.normalizeColor)(f);
                    return {
                        rValue: y.red,
                        gValue: y.green,
                        bValue: y.blue,
                        aValue: y.alpha
                    }
                }
                return {
                    rValue: r,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
        case On:
            return t.config.filters.reduce(FR, {});
        case Sn:
            return t.config.fontVariations.reduce(qR, {});
        default:
            {
                let {value: r} = t.config;
                return {
                    value: r
                }
            }
        }
    }
    function Jd(e) {
        if (/^TRANSFORM_/.test(e))
            return jd;
        if (/^STYLE_/.test(e))
            return wo;
        if (/^GENERAL_/.test(e))
            return bo;
        if (/^PLUGIN_/.test(e))
            return Yd
    }
    function XR(e, t) {
        return e === wo ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function UR(e, t, n, r, i, o, a, u, s) {
        switch (u) {
        case jd:
            return zR(e, t, n, i, a);
        case wo:
            return tC(e, t, n, i, o, a);
        case bo:
            return nC(e, i, a);
        case Yd:
            {
                let {actionTypeId: f} = i;
                if (It(f))
                    return vo(f)(s, t, i)
            }
        }
    }
    function zR(e, t, n, r, i) {
        let o = BR.map(u => {
            let s = So[u]
              , {xValue: f=s.xValue, yValue: y=s.yValue, zValue: m=s.zValue, xUnit: g="", yUnit: E="", zUnit: b=""} = t[u] || {};
            switch (u) {
            case Wt:
                return `${lR}(${f}${g}, ${y}${E}, ${m}${b})`;
            case Ht:
                return `${fR}(${f}${g}, ${y}${E}, ${m}${b})`;
            case Bt:
                return `${dR}(${f}${g}) ${pR}(${y}${E}) ${gR}(${m}${b})`;
            case An:
                return `${hR}(${f}${g}, ${y}${E})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = i;
        bt(e, gt, i),
        a(e, gt, o),
        YR(r, n) && a(e, dr, vR)
    }
    function KR(e, t, n, r) {
        let i = (0,
        Tr.default)(t, (a, u, s) => `${a} ${s}(${u}${HR(s, n)})`, "")
          , {setStyle: o} = r;
        bt(e, Tn, r),
        o(e, Tn, i)
    }
    function jR(e, t, n, r) {
        let i = (0,
        Tr.default)(t, (a, u, s) => (a.push(`"${s}" ${u}`),
        a), []).join(", ")
          , {setStyle: o} = r;
        bt(e, bn, r),
        o(e, bn, i)
    }
    function YR({actionTypeId: e}, {xValue: t, yValue: n, zValue: r}) {
        return e === Wt && r !== void 0 || e === Ht && r !== void 0 || e === Bt && (t !== void 0 || n !== void 0)
    }
    function JR(e, t) {
        let n = e.exec(t);
        return n ? n[1] : ""
    }
    function eC({element: e, actionTypeId: t, computedStyle: n, getStyle: r}) {
        let i = Ao[t]
          , o = r(e, i)
          , a = $R.test(o) ? o : n[i]
          , u = JR(ZR, a).split(wn);
        return {
            rValue: (0,
            st.default)(parseInt(u[0], 10), 255),
            gValue: (0,
            st.default)(parseInt(u[1], 10), 255),
            bValue: (0,
            st.default)(parseInt(u[2], 10), 255),
            aValue: (0,
            st.default)(parseFloat(u[3]), 1)
        }
    }
    function tC(e, t, n, r, i, o) {
        let {setStyle: a} = o;
        switch (r.actionTypeId) {
        case zt:
            {
                let {widthUnit: u="", heightUnit: s=""} = r.config
                  , {widthValue: f, heightValue: y} = n;
                f !== void 0 && (u === ht && (u = "px"),
                bt(e, tt, o),
                a(e, tt, f + u)),
                y !== void 0 && (s === ht && (s = "px"),
                bt(e, nt, o),
                a(e, nt, y + s));
                break
            }
        case On:
            {
                KR(e, n, r.config, o);
                break
            }
        case Sn:
            {
                jR(e, n, r.config, o);
                break
            }
        case Kt:
        case jt:
        case Yt:
            {
                let u = Ao[r.actionTypeId]
                  , s = Math.round(n.rValue)
                  , f = Math.round(n.gValue)
                  , y = Math.round(n.bValue)
                  , m = n.aValue;
                bt(e, u, o),
                a(e, u, m >= 1 ? `rgb(${s},${f},${y})` : `rgba(${s},${f},${y},${m})`);
                break
            }
        default:
            {
                let {unit: u=""} = r.config;
                bt(e, i, o),
                a(e, i, n.value + u);
                break
            }
        }
    }
    function nC(e, t, n) {
        let {setStyle: r} = n;
        switch (t.actionTypeId) {
        case wr:
            {
                let {value: i} = t.config;
                i === ER && Ke ? r(e, Ir, $i) : r(e, Ir, i);
                return
            }
        }
    }
    function bt(e, t, n) {
        if (!Ke)
            return;
        let r = Zd[t];
        if (!r)
            return;
        let {getStyle: i, setStyle: o} = n
          , a = i(e, Vt);
        if (!a) {
            o(e, Vt, r);
            return
        }
        let u = a.split(wn).map($d);
        u.indexOf(r) === -1 && o(e, Vt, u.concat(r).join(wn))
    }
    function ep(e, t, n) {
        if (!Ke)
            return;
        let r = Zd[t];
        if (!r)
            return;
        let {getStyle: i, setStyle: o} = n
          , a = i(e, Vt);
        !a || a.indexOf(r) === -1 || o(e, Vt, a.split(wn).map($d).filter(u => u !== r).join(wn))
    }
    function rC({store: e, elementApi: t}) {
        let {ixData: n} = e.getState()
          , {events: r={}, actionLists: i={}} = n;
        Object.keys(r).forEach(o => {
            let a = r[o]
              , {config: u} = a.action
              , {actionListId: s} = u
              , f = i[s];
            f && Hd({
                actionList: f,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o => {
            Hd({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function Hd({actionList: e={}, event: t, elementApi: n}) {
        let {actionItemGroups: r, continuousParameterGroups: i} = e;
        r && r.forEach(o => {
            Bd({
                actionGroup: o,
                event: t,
                elementApi: n
            })
        }
        ),
        i && i.forEach(o => {
            let {continuousActionGroups: a} = o;
            a.forEach(u => {
                Bd({
                    actionGroup: u,
                    event: t,
                    elementApi: n
                })
            }
            )
        }
        )
    }
    function Bd({actionGroup: e, event: t, elementApi: n}) {
        let {actionItems: r} = e;
        r.forEach(i => {
            let {actionTypeId: o, config: a} = i, u;
            It(o) ? u = s => Eo(o)(s, i) : u = tp({
                effect: oC,
                actionTypeId: o,
                elementApi: n
            }),
            Oo({
                config: a,
                event: t,
                elementApi: n
            }).forEach(u)
        }
        )
    }
    function iC(e, t, n) {
        let {setStyle: r, getStyle: i} = n
          , {actionTypeId: o} = t;
        if (o === zt) {
            let {config: a} = t;
            a.widthUnit === ht && r(e, tt, ""),
            a.heightUnit === ht && r(e, nt, "")
        }
        i(e, Vt) && tp({
            effect: ep,
            actionTypeId: o,
            elementApi: n
        })(e)
    }
    function oC(e, t, n) {
        let {setStyle: r} = n;
        ep(e, t, n),
        r(e, t, ""),
        t === gt && r(e, dr, "")
    }
    function np(e) {
        let t = 0
          , n = 0;
        return e.forEach( (r, i) => {
            let {config: o} = r
              , a = o.delay + o.duration;
            a >= t && (t = a,
            n = i)
        }
        ),
        n
    }
    function aC(e, t) {
        let {actionItemGroups: n, useFirstGroupAsInitialState: r} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , a = 0
          , u = 0;
        return n.forEach( (s, f) => {
            if (r && f === 0)
                return;
            let {actionItems: y} = s
              , m = y[np(y)]
              , {config: g, actionTypeId: E} = m;
            i.id === m.id && (u = a + o);
            let b = Jd(E) === bo ? 0 : g.duration;
            a += g.delay + b
        }
        ),
        a > 0 ? In(u / a) : 0
    }
    function sC({actionList: e, actionItemId: t, rawData: n}) {
        let {actionItemGroups: r, continuousParameterGroups: i} = e
          , o = []
          , a = u => (o.push((0,
        br.mergeIn)(u, ["config"], {
            delay: 0,
            duration: 0
        })),
        u.id === t);
        return r && r.some( ({actionItems: u}) => u.some(a)),
        i && i.some(u => {
            let {continuousActionGroups: s} = u;
            return s.some( ({actionItems: f}) => f.some(a))
        }
        ),
        (0,
        br.setIn)(n, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function uC(e, {basedOn: t}) {
        return e === ze.SCROLLING_IN_VIEW && (t === Je.ELEMENT || t == null) || e === ze.MOUSE_MOVE && t === Je.ELEMENT
    }
    function cC(e, t) {
        return e + TR + t
    }
    function lC(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function fC(e, t) {
        return Io(e && e.sort(), t && t.sort())
    }
    function dC(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + To + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: n="", useEventTarget: r=""} = e;
        return t + To + n + To + r
    }
    var st, Tr, yr, br, zd, uR, cR, lR, fR, dR, pR, gR, hR, vR, ER, _r, Tn, bn, tt, nt, Kd, mR, yR, Xd, _R, Ud, IR, Ir, Vt, ht, wn, TR, To, jd, bo, wo, Yd, Wt, Ht, Bt, An, Qd, On, Sn, zt, Kt, jt, Yt, wr, bR, $d, Ao, Zd, mr, AR, SR, CR, Wd, NR, DR, FR, qR, kR, So, VR, WR, HR, BR, QR, $R, ZR, tp, ip = ve( () => {
        "use strict";
        st = fe(yd()),
        Tr = fe(Nd()),
        yr = fe(qd()),
        br = fe(Pt());
        Me();
        Gd();
        eo();
        zd = fe(uo());
        mo();
        pr();
        ({BACKGROUND: uR, TRANSFORM: cR, TRANSLATE_3D: lR, SCALE_3D: fR, ROTATE_X: dR, ROTATE_Y: pR, ROTATE_Z: gR, SKEW: hR, PRESERVE_3D: vR, FLEX: ER, OPACITY: _r, FILTER: Tn, FONT_VARIATION_SETTINGS: bn, WIDTH: tt, HEIGHT: nt, BACKGROUND_COLOR: Kd, BORDER_COLOR: mR, COLOR: yR, CHILDREN: Xd, IMMEDIATE_CHILDREN: _R, SIBLINGS: Ud, PARENT: IR, DISPLAY: Ir, WILL_CHANGE: Vt, AUTO: ht, COMMA_DELIMITER: wn, COLON_DELIMITER: TR, BAR_DELIMITER: To, RENDER_TRANSFORM: jd, RENDER_GENERAL: bo, RENDER_STYLE: wo, RENDER_PLUGIN: Yd} = Ae),
        {TRANSFORM_MOVE: Wt, TRANSFORM_SCALE: Ht, TRANSFORM_ROTATE: Bt, TRANSFORM_SKEW: An, STYLE_OPACITY: Qd, STYLE_FILTER: On, STYLE_FONT_VARIATION: Sn, STYLE_SIZE: zt, STYLE_BACKGROUND_COLOR: Kt, STYLE_BORDER: jt, STYLE_TEXT_COLOR: Yt, GENERAL_DISPLAY: wr, OBJECT_VALUE: bR} = Re,
        $d = e => e.trim(),
        Ao = Object.freeze({
            [Kt]: Kd,
            [jt]: mR,
            [Yt]: yR
        }),
        Zd = Object.freeze({
            [gt]: cR,
            [Kd]: uR,
            [_r]: _r,
            [Tn]: Tn,
            [tt]: tt,
            [nt]: nt,
            [bn]: bn
        }),
        mr = new Map;
        AR = 1;
        SR = 1;
        CR = (e, t) => e === t;
        Wd = /px/,
        NR = (e, t) => t.reduce( (n, r) => (n[r.type] == null && (n[r.type] = VR[r.type]),
        n), e || {}),
        DR = (e, t) => t.reduce( (n, r) => (n[r.type] == null && (n[r.type] = WR[r.type] || r.defaultValue || 0),
        n), e || {});
        FR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        qR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        kR = (e, t, n) => {
            if (It(e))
                return po(e)(n, t);
            switch (e) {
            case On:
                {
                    let r = (0,
                    yr.default)(n.filters, ({type: i}) => i === t);
                    return r ? r.value : 0
                }
            case Sn:
                {
                    let r = (0,
                    yr.default)(n.fontVariations, ({type: i}) => i === t);
                    return r ? r.value : 0
                }
            default:
                return n[t]
            }
        }
        ;
        So = {
            [Wt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Ht]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Bt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [An]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        VR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        WR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        HR = (e, t) => {
            let n = (0,
            yr.default)(t.filters, ({type: r}) => r === e);
            if (n && n.unit)
                return n.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        BR = Object.keys(So);
        QR = "\\(([^)]+)\\)",
        $R = /^rgb/,
        ZR = RegExp(`rgba?${QR}`);
        tp = ({effect: e, actionTypeId: t, elementApi: n}) => r => {
            switch (t) {
            case Wt:
            case Ht:
            case Bt:
            case An:
                e(r, gt, n);
                break;
            case On:
                e(r, Tn, n);
                break;
            case Sn:
                e(r, bn, n);
                break;
            case Qd:
                e(r, _r, n);
                break;
            case zt:
                e(r, tt, n),
                e(r, nt, n);
                break;
            case Kt:
            case jt:
            case Yt:
                e(r, Ao[t], n);
                break;
            case wr:
                e(r, Ir, n);
                break
            }
        }
    }
    );
    var wt = d(xo => {
        "use strict";
        Object.defineProperty(xo, "__esModule", {
            value: !0
        });
        function pC(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        pC(xo, {
            IX2BrowserSupport: function() {
                return gC
            },
            IX2EasingUtils: function() {
                return vC
            },
            IX2Easings: function() {
                return hC
            },
            IX2ElementsReducer: function() {
                return EC
            },
            IX2VanillaPlugins: function() {
                return mC
            },
            IX2VanillaUtils: function() {
                return yC
            }
        });
        var gC = Qt((pr(),
        Qe($f)))
          , hC = Qt((Ji(),
        Qe(_n)))
          , vC = Qt((eo(),
        Qe(id)))
          , EC = Qt((ud(),
        Qe(sd)))
          , mC = Qt((mo(),
        Qe(Ed)))
          , yC = Qt((ip(),
        Qe(rp)));
        function op(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (op = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function Qt(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = op(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
    }
    );
    var Or, ut, _C, IC, TC, bC, wC, AC, Ar, ap, OC, SC, Ro, xC, RC, CC, LC, sp, up = ve( () => {
        "use strict";
        Me();
        Or = fe(wt()),
        ut = fe(Pt()),
        {IX2_RAW_DATA_IMPORTED: _C, IX2_SESSION_STOPPED: IC, IX2_INSTANCE_ADDED: TC, IX2_INSTANCE_STARTED: bC, IX2_INSTANCE_REMOVED: wC, IX2_ANIMATION_FRAME_CHANGED: AC} = Te,
        {optimizeFloat: Ar, applyEasing: ap, createBezierEasing: OC} = Or.IX2EasingUtils,
        {RENDER_GENERAL: SC} = Ae,
        {getItemConfigByKey: Ro, getRenderType: xC, getStyleProp: RC} = Or.IX2VanillaUtils,
        CC = (e, t) => {
            let {position: n, parameterId: r, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: u, actionTypeId: s, customEasingFn: f, skipMotion: y, skipToValue: m} = e
              , {parameters: g} = t.payload
              , E = Math.max(1 - a, .01)
              , b = g[r];
            b == null && (E = 1,
            b = u);
            let I = Math.max(b, 0) || 0
              , O = Ar(I - n)
              , T = y ? m : Ar(n + O * E)
              , R = T * 100;
            if (T === n && e.current)
                return e;
            let C, N, M, D;
            for (let z = 0, {length: j} = i; z < j; z++) {
                let {keyframe: Z, actionItems: J} = i[z];
                if (z === 0 && (C = J[0]),
                R >= Z) {
                    C = J[0];
                    let k = i[z + 1]
                      , A = k && R !== Z;
                    N = A ? k.actionItems[0] : null,
                    A && (M = Z / 100,
                    D = (k.keyframe - Z) / 100)
                }
            }
            let B = {};
            if (C && !N)
                for (let z = 0, {length: j} = o; z < j; z++) {
                    let Z = o[z];
                    B[Z] = Ro(s, Z, C.config)
                }
            else if (C && N && M !== void 0 && D !== void 0) {
                let z = (T - M) / D
                  , j = C.config.easing
                  , Z = ap(j, z, f);
                for (let J = 0, {length: k} = o; J < k; J++) {
                    let A = o[J]
                      , G = Ro(s, A, C.config)
                      , re = (Ro(s, A, N.config) - G) * Z + G;
                    B[A] = re
                }
            }
            return (0,
            ut.merge)(e, {
                position: T,
                current: B
            })
        }
        ,
        LC = (e, t) => {
            let {active: n, origin: r, start: i, immediate: o, renderType: a, verbose: u, actionItem: s, destination: f, destinationKeys: y, pluginDuration: m, instanceDelay: g, customEasingFn: E, skipMotion: b} = e
              , I = s.config.easing
              , {duration: O, delay: T} = s.config;
            m != null && (O = m),
            T = g ?? T,
            a === SC ? O = 0 : (o || b) && (O = T = 0);
            let {now: R} = t.payload;
            if (n && r) {
                let C = R - (i + T);
                if (u) {
                    let z = R - i
                      , j = O + T
                      , Z = Ar(Math.min(Math.max(0, z / j), 1));
                    e = (0,
                    ut.set)(e, "verboseTimeElapsed", j * Z)
                }
                if (C < 0)
                    return e;
                let N = Ar(Math.min(Math.max(0, C / O), 1))
                  , M = ap(I, N, E)
                  , D = {}
                  , B = null;
                return y.length && (B = y.reduce( (z, j) => {
                    let Z = f[j]
                      , J = parseFloat(r[j]) || 0
                      , A = (parseFloat(Z) - J) * M + J;
                    return z[j] = A,
                    z
                }
                , {})),
                D.current = B,
                D.position = N,
                N === 1 && (D.active = !1,
                D.complete = !0),
                (0,
                ut.merge)(e, D)
            }
            return e
        }
        ,
        sp = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case _C:
                return t.payload.ixInstances || Object.freeze({});
            case IC:
                return Object.freeze({});
            case TC:
                {
                    let {instanceId: n, elementId: r, actionItem: i, eventId: o, eventTarget: a, eventStateKey: u, actionListId: s, groupIndex: f, isCarrier: y, origin: m, destination: g, immediate: E, verbose: b, continuous: I, parameterId: O, actionGroups: T, smoothing: R, restingValue: C, pluginInstance: N, pluginDuration: M, instanceDelay: D, skipMotion: B, skipToValue: z} = t.payload
                      , {actionTypeId: j} = i
                      , Z = xC(j)
                      , J = RC(Z, j)
                      , k = Object.keys(g).filter(G => g[G] != null && typeof g[G] != "string")
                      , {easing: A} = i.config;
                    return (0,
                    ut.set)(e, n, {
                        id: n,
                        elementId: r,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: m,
                        destination: g,
                        destinationKeys: k,
                        immediate: E,
                        verbose: b,
                        current: null,
                        actionItem: i,
                        actionTypeId: j,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: u,
                        actionListId: s,
                        groupIndex: f,
                        renderType: Z,
                        isCarrier: y,
                        styleProp: J,
                        continuous: I,
                        parameterId: O,
                        actionGroups: T,
                        smoothing: R,
                        restingValue: C,
                        pluginInstance: N,
                        pluginDuration: M,
                        instanceDelay: D,
                        skipMotion: B,
                        skipToValue: z,
                        customEasingFn: Array.isArray(A) && A.length === 4 ? OC(A) : void 0
                    })
                }
            case bC:
                {
                    let {instanceId: n, time: r} = t.payload;
                    return (0,
                    ut.mergeIn)(e, [n], {
                        active: !0,
                        complete: !1,
                        start: r
                    })
                }
            case wC:
                {
                    let {instanceId: n} = t.payload;
                    if (!e[n])
                        return e;
                    let r = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let u = i[a];
                        u !== n && (r[u] = e[u])
                    }
                    return r
                }
            case AC:
                {
                    let n = e
                      , r = Object.keys(e)
                      , {length: i} = r;
                    for (let o = 0; o < i; o++) {
                        let a = r[o]
                          , u = e[a]
                          , s = u.continuous ? CC : LC;
                        n = (0,
                        ut.set)(n, a, s(u, t))
                    }
                    return n
                }
            default:
                return e
            }
        }
    }
    );
    var PC, NC, DC, cp, lp = ve( () => {
        "use strict";
        Me();
        ({IX2_RAW_DATA_IMPORTED: PC, IX2_SESSION_STOPPED: NC, IX2_PARAMETER_CHANGED: DC} = Te),
        cp = (e={}, t) => {
            switch (t.type) {
            case PC:
                return t.payload.ixParameters || {};
            case NC:
                return {};
            case DC:
                {
                    let {key: n, value: r} = t.payload;
                    return e[n] = r,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var pp = {};
    Ne(pp, {
        default: () => FC
    });
    var fp, dp, MC, FC, gp = ve( () => {
        "use strict";
        fp = fe(mi());
        Is();
        Vs();
        Bs();
        dp = fe(wt());
        up();
        lp();
        ({ixElements: MC} = dp.IX2ElementsReducer),
        FC = (0,
        fp.combineReducers)({
            ixData: _s,
            ixRequest: Us,
            ixSession: Hs,
            ixElements: MC,
            ixInstances: sp,
            ixParameters: cp
        })
    }
    );
    var vp = d( (yk, hp) => {
        var qC = ft()
          , kC = be()
          , GC = ot()
          , XC = "[object String]";
        function UC(e) {
            return typeof e == "string" || !kC(e) && GC(e) && qC(e) == XC
        }
        hp.exports = UC
    }
    );
    var mp = d( (_k, Ep) => {
        var VC = zi()
          , WC = VC("length");
        Ep.exports = WC
    }
    );
    var _p = d( (Ik, yp) => {
        var HC = "\\ud800-\\udfff"
          , BC = "\\u0300-\\u036f"
          , zC = "\\ufe20-\\ufe2f"
          , KC = "\\u20d0-\\u20ff"
          , jC = BC + zC + KC
          , YC = "\\ufe0e\\ufe0f"
          , QC = "\\u200d"
          , $C = RegExp("[" + QC + HC + jC + YC + "]");
        function ZC(e) {
            return $C.test(e)
        }
        yp.exports = ZC
    }
    );
    var Rp = d( (Tk, xp) => {
        var Tp = "\\ud800-\\udfff"
          , JC = "\\u0300-\\u036f"
          , eL = "\\ufe20-\\ufe2f"
          , tL = "\\u20d0-\\u20ff"
          , nL = JC + eL + tL
          , rL = "\\ufe0e\\ufe0f"
          , iL = "[" + Tp + "]"
          , Co = "[" + nL + "]"
          , Lo = "\\ud83c[\\udffb-\\udfff]"
          , oL = "(?:" + Co + "|" + Lo + ")"
          , bp = "[^" + Tp + "]"
          , wp = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , Ap = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , aL = "\\u200d"
          , Op = oL + "?"
          , Sp = "[" + rL + "]?"
          , sL = "(?:" + aL + "(?:" + [bp, wp, Ap].join("|") + ")" + Sp + Op + ")*"
          , uL = Sp + Op + sL
          , cL = "(?:" + [bp + Co + "?", Co, wp, Ap, iL].join("|") + ")"
          , Ip = RegExp(Lo + "(?=" + Lo + ")|" + cL + uL, "g");
        function lL(e) {
            for (var t = Ip.lastIndex = 0; Ip.test(e); )
                ++t;
            return t
        }
        xp.exports = lL
    }
    );
    var Lp = d( (bk, Cp) => {
        var fL = mp()
          , dL = _p()
          , pL = Rp();
        function gL(e) {
            return dL(e) ? pL(e) : fL(e)
        }
        Cp.exports = gL
    }
    );
    var Np = d( (wk, Pp) => {
        var hL = rr()
          , vL = ir()
          , EL = yt()
          , mL = vp()
          , yL = Lp()
          , _L = "[object Map]"
          , IL = "[object Set]";
        function TL(e) {
            if (e == null)
                return 0;
            if (EL(e))
                return mL(e) ? yL(e) : e.length;
            var t = vL(e);
            return t == _L || t == IL ? e.size : hL(e).length
        }
        Pp.exports = TL
    }
    );
    var Mp = d( (Ak, Dp) => {
        var bL = "Expected a function";
        function wL(e) {
            if (typeof e != "function")
                throw new TypeError(bL);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Dp.exports = wL
    }
    );
    var Po = d( (Ok, Fp) => {
        var AL = dt()
          , OL = function() {
            try {
                var e = AL(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Fp.exports = OL
    }
    );
    var No = d( (Sk, kp) => {
        var qp = Po();
        function SL(e, t, n) {
            t == "__proto__" && qp ? qp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        kp.exports = SL
    }
    );
    var Xp = d( (xk, Gp) => {
        var xL = No()
          , RL = Kn()
          , CL = Object.prototype
          , LL = CL.hasOwnProperty;
        function PL(e, t, n) {
            var r = e[t];
            (!(LL.call(e, t) && RL(r, n)) || n === void 0 && !(t in e)) && xL(e, t, n)
        }
        Gp.exports = PL
    }
    );
    var Wp = d( (Rk, Vp) => {
        var NL = Xp()
          , DL = En()
          , ML = Jn()
          , Up = et()
          , FL = Xt();
        function qL(e, t, n, r) {
            if (!Up(e))
                return e;
            t = DL(t, e);
            for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o; ) {
                var s = FL(t[i])
                  , f = n;
                if (s === "__proto__" || s === "constructor" || s === "prototype")
                    return e;
                if (i != a) {
                    var y = u[s];
                    f = r ? r(y, s, u) : void 0,
                    f === void 0 && (f = Up(y) ? y : ML(t[i + 1]) ? [] : {})
                }
                NL(u, s, f),
                u = u[s]
            }
            return e
        }
        Vp.exports = qL
    }
    );
    var Bp = d( (Ck, Hp) => {
        var kL = sr()
          , GL = Wp()
          , XL = En();
        function UL(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                var a = t[r]
                  , u = kL(e, a);
                n(u, a) && GL(o, XL(a, e), u)
            }
            return o
        }
        Hp.exports = UL
    }
    );
    var Kp = d( (Lk, zp) => {
        var VL = $n()
          , WL = oi()
          , HL = Li()
          , BL = Ci()
          , zL = Object.getOwnPropertySymbols
          , KL = zL ? function(e) {
            for (var t = []; e; )
                VL(t, HL(e)),
                e = WL(e);
            return t
        }
        : BL;
        zp.exports = KL
    }
    );
    var Yp = d( (Pk, jp) => {
        function jL(e) {
            var t = [];
            if (e != null)
                for (var n in Object(e))
                    t.push(n);
            return t
        }
        jp.exports = jL
    }
    );
    var $p = d( (Nk, Qp) => {
        var YL = et()
          , QL = nr()
          , $L = Yp()
          , ZL = Object.prototype
          , JL = ZL.hasOwnProperty;
        function eP(e) {
            if (!YL(e))
                return $L(e);
            var t = QL(e)
              , n = [];
            for (var r in e)
                r == "constructor" && (t || !JL.call(e, r)) || n.push(r);
            return n
        }
        Qp.exports = eP
    }
    );
    var Jp = d( (Dk, Zp) => {
        var tP = Ni()
          , nP = $p()
          , rP = yt();
        function iP(e) {
            return rP(e) ? tP(e, !0) : nP(e)
        }
        Zp.exports = iP
    }
    );
    var tg = d( (Mk, eg) => {
        var oP = Ri()
          , aP = Kp()
          , sP = Jp();
        function uP(e) {
            return oP(e, sP, aP)
        }
        eg.exports = uP
    }
    );
    var rg = d( (Fk, ng) => {
        var cP = Bi()
          , lP = pt()
          , fP = Bp()
          , dP = tg();
        function pP(e, t) {
            if (e == null)
                return {};
            var n = cP(dP(e), function(r) {
                return [r]
            });
            return t = lP(t),
            fP(e, n, function(r, i) {
                return t(r, i[0])
            })
        }
        ng.exports = pP
    }
    );
    var og = d( (qk, ig) => {
        var gP = pt()
          , hP = Mp()
          , vP = rg();
        function EP(e, t) {
            return vP(e, hP(gP(t)))
        }
        ig.exports = EP
    }
    );
    var sg = d( (kk, ag) => {
        var mP = rr()
          , yP = ir()
          , _P = fn()
          , IP = be()
          , TP = yt()
          , bP = Zn()
          , wP = nr()
          , AP = tr()
          , OP = "[object Map]"
          , SP = "[object Set]"
          , xP = Object.prototype
          , RP = xP.hasOwnProperty;
        function CP(e) {
            if (e == null)
                return !0;
            if (TP(e) && (IP(e) || typeof e == "string" || typeof e.splice == "function" || bP(e) || AP(e) || _P(e)))
                return !e.length;
            var t = yP(e);
            if (t == OP || t == SP)
                return !e.size;
            if (wP(e))
                return !mP(e).length;
            for (var n in e)
                if (RP.call(e, n))
                    return !1;
            return !0
        }
        ag.exports = CP
    }
    );
    var cg = d( (Gk, ug) => {
        var LP = No()
          , PP = yo()
          , NP = pt();
        function DP(e, t) {
            var n = {};
            return t = NP(t, 3),
            PP(e, function(r, i, o) {
                LP(n, i, t(r, i, o))
            }),
            n
        }
        ug.exports = DP
    }
    );
    var fg = d( (Xk, lg) => {
        function MP(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
                ;
            return e
        }
        lg.exports = MP
    }
    );
    var pg = d( (Uk, dg) => {
        var FP = cr();
        function qP(e) {
            return typeof e == "function" ? e : FP
        }
        dg.exports = qP
    }
    );
    var hg = d( (Vk, gg) => {
        var kP = fg()
          , GP = _o()
          , XP = pg()
          , UP = be();
        function VP(e, t) {
            var n = UP(e) ? kP : GP;
            return n(e, XP(t))
        }
        gg.exports = VP
    }
    );
    var Eg = d( (Wk, vg) => {
        var WP = Be()
          , HP = function() {
            return WP.Date.now()
        };
        vg.exports = HP
    }
    );
    var _g = d( (Hk, yg) => {
        var BP = et()
          , Do = Eg()
          , mg = lr()
          , zP = "Expected a function"
          , KP = Math.max
          , jP = Math.min;
        function YP(e, t, n) {
            var r, i, o, a, u, s, f = 0, y = !1, m = !1, g = !0;
            if (typeof e != "function")
                throw new TypeError(zP);
            t = mg(t) || 0,
            BP(n) && (y = !!n.leading,
            m = "maxWait"in n,
            o = m ? KP(mg(n.maxWait) || 0, t) : o,
            g = "trailing"in n ? !!n.trailing : g);
            function E(D) {
                var B = r
                  , z = i;
                return r = i = void 0,
                f = D,
                a = e.apply(z, B),
                a
            }
            function b(D) {
                return f = D,
                u = setTimeout(T, t),
                y ? E(D) : a
            }
            function I(D) {
                var B = D - s
                  , z = D - f
                  , j = t - B;
                return m ? jP(j, o - z) : j
            }
            function O(D) {
                var B = D - s
                  , z = D - f;
                return s === void 0 || B >= t || B < 0 || m && z >= o
            }
            function T() {
                var D = Do();
                if (O(D))
                    return R(D);
                u = setTimeout(T, I(D))
            }
            function R(D) {
                return u = void 0,
                g && r ? E(D) : (r = i = void 0,
                a)
            }
            function C() {
                u !== void 0 && clearTimeout(u),
                f = 0,
                r = s = i = u = void 0
            }
            function N() {
                return u === void 0 ? a : R(Do())
            }
            function M() {
                var D = Do()
                  , B = O(D);
                if (r = arguments,
                i = this,
                s = D,
                B) {
                    if (u === void 0)
                        return b(s);
                    if (m)
                        return clearTimeout(u),
                        u = setTimeout(T, t),
                        E(s)
                }
                return u === void 0 && (u = setTimeout(T, t)),
                a
            }
            return M.cancel = C,
            M.flush = N,
            M
        }
        yg.exports = YP
    }
    );
    var Tg = d( (Bk, Ig) => {
        var QP = _g()
          , $P = et()
          , ZP = "Expected a function";
        function JP(e, t, n) {
            var r = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(ZP);
            return $P(n) && (r = "leading"in n ? !!n.leading : r,
            i = "trailing"in n ? !!n.trailing : i),
            QP(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }
        Ig.exports = JP
    }
    );
    var wg = {};
    Ne(wg, {
        actionListPlaybackChanged: () => Zt,
        animationFrameChanged: () => xr,
        clearRequested: () => wN,
        elementStateChanged: () => Vo,
        eventListenerAdded: () => Sr,
        eventStateChanged: () => Go,
        instanceAdded: () => Xo,
        instanceRemoved: () => Uo,
        instanceStarted: () => Rr,
        mediaQueriesDefined: () => Ho,
        parameterChanged: () => $t,
        playbackRequested: () => TN,
        previewRequested: () => IN,
        rawDataImported: () => Mo,
        sessionInitialized: () => Fo,
        sessionStarted: () => qo,
        sessionStopped: () => ko,
        stopRequested: () => bN,
        testFrameRendered: () => AN,
        viewportWidthChanged: () => Wo
    });
    var bg, eN, tN, nN, rN, iN, oN, aN, sN, uN, cN, lN, fN, dN, pN, gN, hN, vN, EN, mN, yN, _N, Mo, Fo, qo, ko, IN, TN, bN, wN, Sr, AN, Go, xr, $t, Xo, Rr, Uo, Vo, Zt, Wo, Ho, Cr = ve( () => {
        "use strict";
        Me();
        bg = fe(wt()),
        {IX2_RAW_DATA_IMPORTED: eN, IX2_SESSION_INITIALIZED: tN, IX2_SESSION_STARTED: nN, IX2_SESSION_STOPPED: rN, IX2_PREVIEW_REQUESTED: iN, IX2_PLAYBACK_REQUESTED: oN, IX2_STOP_REQUESTED: aN, IX2_CLEAR_REQUESTED: sN, IX2_EVENT_LISTENER_ADDED: uN, IX2_TEST_FRAME_RENDERED: cN, IX2_EVENT_STATE_CHANGED: lN, IX2_ANIMATION_FRAME_CHANGED: fN, IX2_PARAMETER_CHANGED: dN, IX2_INSTANCE_ADDED: pN, IX2_INSTANCE_STARTED: gN, IX2_INSTANCE_REMOVED: hN, IX2_ELEMENT_STATE_CHANGED: vN, IX2_ACTION_LIST_PLAYBACK_CHANGED: EN, IX2_VIEWPORT_WIDTH_CHANGED: mN, IX2_MEDIA_QUERIES_DEFINED: yN} = Te,
        {reifyState: _N} = bg.IX2VanillaUtils,
        Mo = e => ({
            type: eN,
            payload: {
                ..._N(e)
            }
        }),
        Fo = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: tN,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        qo = () => ({
            type: nN
        }),
        ko = () => ({
            type: rN
        }),
        IN = ({rawData: e, defer: t}) => ({
            type: iN,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        TN = ({actionTypeId: e=Re.GENERAL_START_ACTION, actionListId: t, actionItemId: n, eventId: r, allowEvents: i, immediate: o, testManual: a, verbose: u, rawData: s}) => ({
            type: oN,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: n,
                testManual: a,
                eventId: r,
                allowEvents: i,
                immediate: o,
                verbose: u,
                rawData: s
            }
        }),
        bN = e => ({
            type: aN,
            payload: {
                actionListId: e
            }
        }),
        wN = () => ({
            type: sN
        }),
        Sr = (e, t) => ({
            type: uN,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        AN = (e=1) => ({
            type: cN,
            payload: {
                step: e
            }
        }),
        Go = (e, t) => ({
            type: lN,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        xr = (e, t) => ({
            type: fN,
            payload: {
                now: e,
                parameters: t
            }
        }),
        $t = (e, t) => ({
            type: dN,
            payload: {
                key: e,
                value: t
            }
        }),
        Xo = e => ({
            type: pN,
            payload: {
                ...e
            }
        }),
        Rr = (e, t) => ({
            type: gN,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        Uo = e => ({
            type: hN,
            payload: {
                instanceId: e
            }
        }),
        Vo = (e, t, n, r) => ({
            type: vN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: n,
                actionItem: r
            }
        }),
        Zt = ({actionListId: e, isPlaying: t}) => ({
            type: EN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        Wo = ({width: e, mediaQueries: t}) => ({
            type: mN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        Ho = () => ({
            type: yN
        })
    }
    );
    var Le = {};
    Ne(Le, {
        elementContains: () => Ko,
        getChildElements: () => MN,
        getClosestElement: () => xn,
        getProperty: () => CN,
        getQuerySelector: () => zo,
        getRefType: () => jo,
        getSiblingElements: () => FN,
        getStyle: () => RN,
        getValidDocument: () => PN,
        isSiblingNode: () => DN,
        matchSelector: () => LN,
        queryDocument: () => NN,
        setStyle: () => xN
    });
    function xN(e, t, n) {
        e.style[t] = n
    }
    function RN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function CN(e, t) {
        return e[t]
    }
    function LN(e) {
        return t => t[Bo](e)
    }
    function zo({id: e, selector: t}) {
        if (e) {
            let n = e;
            if (e.indexOf(Ag) !== -1) {
                let r = e.split(Ag)
                  , i = r[0];
                if (n = r[1],
                i !== document.documentElement.getAttribute(Sg))
                    return null
            }
            return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`
        }
        return t
    }
    function PN(e) {
        return e == null || e === document.documentElement.getAttribute(Sg) ? document : null
    }
    function NN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function Ko(e, t) {
        return e.contains(t)
    }
    function DN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function MN(e) {
        let t = [];
        for (let n = 0, {length: r} = e || []; n < r; n++) {
            let {children: i} = e[n]
              , {length: o} = i;
            if (o)
                for (let a = 0; a < o; a++)
                    t.push(i[a])
        }
        return t
    }
    function FN(e=[]) {
        let t = []
          , n = [];
        for (let r = 0, {length: i} = e; r < i; r++) {
            let {parentNode: o} = e[r];
            if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1)
                continue;
            n.push(o);
            let a = o.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function jo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? ON : SN : null
    }
    var Og, Bo, Ag, ON, SN, Sg, xn, xg = ve( () => {
        "use strict";
        Og = fe(wt());
        Me();
        ({ELEMENT_MATCHES: Bo} = Og.IX2BrowserSupport),
        {IX2_ID_DELIMITER: Ag, HTML_ELEMENT: ON, PLAIN_OBJECT: SN, WF_PAGE: Sg} = Ae;
        xn = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let n = e;
            do {
                if (n[Bo] && n[Bo](t))
                    return n;
                n = n.parentNode
            } while (n != null);
            return null
        }
    }
    );
    var Yo = d( (jk, Cg) => {
        var qN = et()
          , Rg = Object.create
          , kN = function() {
            function e() {}
            return function(t) {
                if (!qN(t))
                    return {};
                if (Rg)
                    return Rg(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0,
                n
            }
        }();
        Cg.exports = kN
    }
    );
    var Lr = d( (Yk, Lg) => {
        function GN() {}
        Lg.exports = GN
    }
    );
    var Nr = d( (Qk, Pg) => {
        var XN = Yo()
          , UN = Lr();
        function Pr(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        Pr.prototype = XN(UN.prototype);
        Pr.prototype.constructor = Pr;
        Pg.exports = Pr
    }
    );
    var Fg = d( ($k, Mg) => {
        var Ng = Rt()
          , VN = fn()
          , WN = be()
          , Dg = Ng ? Ng.isConcatSpreadable : void 0;
        function HN(e) {
            return WN(e) || VN(e) || !!(Dg && e && e[Dg])
        }
        Mg.exports = HN
    }
    );
    var Gg = d( (Zk, kg) => {
        var BN = $n()
          , zN = Fg();
        function qg(e, t, n, r, i) {
            var o = -1
              , a = e.length;
            for (n || (n = zN),
            i || (i = []); ++o < a; ) {
                var u = e[o];
                t > 0 && n(u) ? t > 1 ? qg(u, t - 1, n, r, i) : BN(i, u) : r || (i[i.length] = u)
            }
            return i
        }
        kg.exports = qg
    }
    );
    var Ug = d( (Jk, Xg) => {
        var KN = Gg();
        function jN(e) {
            var t = e == null ? 0 : e.length;
            return t ? KN(e, 1) : []
        }
        Xg.exports = jN
    }
    );
    var Wg = d( (eG, Vg) => {
        function YN(e, t, n) {
            switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        Vg.exports = YN
    }
    );
    var zg = d( (tG, Bg) => {
        var QN = Wg()
          , Hg = Math.max;
        function $N(e, t, n) {
            return t = Hg(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, i = -1, o = Hg(r.length - t, 0), a = Array(o); ++i < o; )
                    a[i] = r[t + i];
                i = -1;
                for (var u = Array(t + 1); ++i < t; )
                    u[i] = r[i];
                return u[t] = n(a),
                QN(e, this, u)
            }
        }
        Bg.exports = $N
    }
    );
    var jg = d( (nG, Kg) => {
        function ZN(e) {
            return function() {
                return e
            }
        }
        Kg.exports = ZN
    }
    );
    var $g = d( (rG, Qg) => {
        var JN = jg()
          , Yg = Po()
          , eD = cr()
          , tD = Yg ? function(e, t) {
            return Yg(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: JN(t),
                writable: !0
            })
        }
        : eD;
        Qg.exports = tD
    }
    );
    var Jg = d( (iG, Zg) => {
        var nD = 800
          , rD = 16
          , iD = Date.now;
        function oD(e) {
            var t = 0
              , n = 0;
            return function() {
                var r = iD()
                  , i = rD - (r - n);
                if (n = r,
                i > 0) {
                    if (++t >= nD)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Zg.exports = oD
    }
    );
    var th = d( (oG, eh) => {
        var aD = $g()
          , sD = Jg()
          , uD = sD(aD);
        eh.exports = uD
    }
    );
    var rh = d( (aG, nh) => {
        var cD = Ug()
          , lD = zg()
          , fD = th();
        function dD(e) {
            return fD(lD(e, void 0, cD), e + "")
        }
        nh.exports = dD
    }
    );
    var ah = d( (sG, oh) => {
        var ih = Di()
          , pD = ih && new ih;
        oh.exports = pD
    }
    );
    var uh = d( (uG, sh) => {
        function gD() {}
        sh.exports = gD
    }
    );
    var Qo = d( (cG, lh) => {
        var ch = ah()
          , hD = uh()
          , vD = ch ? function(e) {
            return ch.get(e)
        }
        : hD;
        lh.exports = vD
    }
    );
    var dh = d( (lG, fh) => {
        var ED = {};
        fh.exports = ED
    }
    );
    var $o = d( (fG, gh) => {
        var ph = dh()
          , mD = Object.prototype
          , yD = mD.hasOwnProperty;
        function _D(e) {
            for (var t = e.name + "", n = ph[t], r = yD.call(ph, t) ? n.length : 0; r--; ) {
                var i = n[r]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        gh.exports = _D
    }
    );
    var Mr = d( (dG, hh) => {
        var ID = Yo()
          , TD = Lr()
          , bD = 4294967295;
        function Dr(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = bD,
            this.__views__ = []
        }
        Dr.prototype = ID(TD.prototype);
        Dr.prototype.constructor = Dr;
        hh.exports = Dr
    }
    );
    var Eh = d( (pG, vh) => {
        function wD(e, t) {
            var n = -1
              , r = e.length;
            for (t || (t = Array(r)); ++n < r; )
                t[n] = e[n];
            return t
        }
        vh.exports = wD
    }
    );
    var yh = d( (gG, mh) => {
        var AD = Mr()
          , OD = Nr()
          , SD = Eh();
        function xD(e) {
            if (e instanceof AD)
                return e.clone();
            var t = new OD(e.__wrapped__,e.__chain__);
            return t.__actions__ = SD(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        mh.exports = xD
    }
    );
    var Th = d( (hG, Ih) => {
        var RD = Mr()
          , _h = Nr()
          , CD = Lr()
          , LD = be()
          , PD = ot()
          , ND = yh()
          , DD = Object.prototype
          , MD = DD.hasOwnProperty;
        function Fr(e) {
            if (PD(e) && !LD(e) && !(e instanceof RD)) {
                if (e instanceof _h)
                    return e;
                if (MD.call(e, "__wrapped__"))
                    return ND(e)
            }
            return new _h(e)
        }
        Fr.prototype = CD.prototype;
        Fr.prototype.constructor = Fr;
        Ih.exports = Fr
    }
    );
    var wh = d( (vG, bh) => {
        var FD = Mr()
          , qD = Qo()
          , kD = $o()
          , GD = Th();
        function XD(e) {
            var t = kD(e)
              , n = GD[t];
            if (typeof n != "function" || !(t in FD.prototype))
                return !1;
            if (e === n)
                return !0;
            var r = qD(n);
            return !!r && e === r[0]
        }
        bh.exports = XD
    }
    );
    var xh = d( (EG, Sh) => {
        var Ah = Nr()
          , UD = rh()
          , VD = Qo()
          , Zo = $o()
          , WD = be()
          , Oh = wh()
          , HD = "Expected a function"
          , BD = 8
          , zD = 32
          , KD = 128
          , jD = 256;
        function YD(e) {
            return UD(function(t) {
                var n = t.length
                  , r = n
                  , i = Ah.prototype.thru;
                for (e && t.reverse(); r--; ) {
                    var o = t[r];
                    if (typeof o != "function")
                        throw new TypeError(HD);
                    if (i && !a && Zo(o) == "wrapper")
                        var a = new Ah([],!0)
                }
                for (r = a ? r : n; ++r < n; ) {
                    o = t[r];
                    var u = Zo(o)
                      , s = u == "wrapper" ? VD(o) : void 0;
                    s && Oh(s[0]) && s[1] == (KD | BD | zD | jD) && !s[4].length && s[9] == 1 ? a = a[Zo(s[0])].apply(a, s[3]) : a = o.length == 1 && Oh(o) ? a[u]() : a.thru(o)
                }
                return function() {
                    var f = arguments
                      , y = f[0];
                    if (a && f.length == 1 && WD(y))
                        return a.plant(y).value();
                    for (var m = 0, g = n ? t[m].apply(this, f) : y; ++m < n; )
                        g = t[m].call(this, g);
                    return g
                }
            })
        }
        Sh.exports = YD
    }
    );
    var Ch = d( (mG, Rh) => {
        var QD = xh()
          , $D = QD();
        Rh.exports = $D
    }
    );
    var Ph = d( (yG, Lh) => {
        function ZD(e, t, n) {
            return e === e && (n !== void 0 && (e = e <= n ? e : n),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        Lh.exports = ZD
    }
    );
    var Dh = d( (_G, Nh) => {
        var JD = Ph()
          , Jo = lr();
        function eM(e, t, n) {
            return n === void 0 && (n = t,
            t = void 0),
            n !== void 0 && (n = Jo(n),
            n = n === n ? n : 0),
            t !== void 0 && (t = Jo(t),
            t = t === t ? t : 0),
            JD(Jo(e), t, n)
        }
        Nh.exports = eM
    }
    );
    var Wh, Hh, Bh, zh, tM, nM, rM, iM, oM, aM, sM, uM, cM, lM, fM, dM, pM, gM, hM, Kh, jh, vM, EM, mM, Yh, yM, _M, Qh, IM, ea, $h, Mh, Fh, Zh, Cn, TM, rt, Jh, bM, qe, je, Ln, ev, ta, qh, na, wM, Rn, AM, OM, SM, tv, kh, xM, Gh, RM, CM, LM, Xh, qr, kr, Uh, Vh, nv, rv = ve( () => {
        "use strict";
        Wh = fe(Ch()),
        Hh = fe(ur()),
        Bh = fe(Dh());
        Me();
        ra();
        Cr();
        zh = fe(wt()),
        {MOUSE_CLICK: tM, MOUSE_SECOND_CLICK: nM, MOUSE_DOWN: rM, MOUSE_UP: iM, MOUSE_OVER: oM, MOUSE_OUT: aM, DROPDOWN_CLOSE: sM, DROPDOWN_OPEN: uM, SLIDER_ACTIVE: cM, SLIDER_INACTIVE: lM, TAB_ACTIVE: fM, TAB_INACTIVE: dM, NAVBAR_CLOSE: pM, NAVBAR_OPEN: gM, MOUSE_MOVE: hM, PAGE_SCROLL_DOWN: Kh, SCROLL_INTO_VIEW: jh, SCROLL_OUT_OF_VIEW: vM, PAGE_SCROLL_UP: EM, SCROLLING_IN_VIEW: mM, PAGE_FINISH: Yh, ECOMMERCE_CART_CLOSE: yM, ECOMMERCE_CART_OPEN: _M, PAGE_START: Qh, PAGE_SCROLL: IM} = ze,
        ea = "COMPONENT_ACTIVE",
        $h = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Mh} = Ae,
        {getNamespacedParameterId: Fh} = zh.IX2VanillaUtils,
        Zh = e => t => typeof t == "object" && e(t) ? !0 : t,
        Cn = Zh( ({element: e, nativeEvent: t}) => e === t.target),
        TM = Zh( ({element: e, nativeEvent: t}) => e.contains(t.target)),
        rt = (0,
        Wh.default)([Cn, TM]),
        Jh = (e, t) => {
            if (t) {
                let {ixData: n} = e.getState()
                  , {events: r} = n
                  , i = r[t];
                if (i && !wM[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        bM = ({store: e, event: t}) => {
            let {action: n} = t
              , {autoStopEventId: r} = n.config;
            return !!Jh(e, r)
        }
        ,
        qe = ({store: e, event: t, element: n, eventStateKey: r}, i) => {
            let {action: o, id: a} = t
              , {actionListId: u, autoStopEventId: s} = o.config
              , f = Jh(e, s);
            return f && Jt({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + Mh + r.split(Mh)[1],
                actionListId: (0,
                Hh.default)(f, "action.config.actionListId")
            }),
            Jt({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: u
            }),
            Pn({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: u
            }),
            i
        }
        ,
        je = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
        Ln = {
            handler: je(rt, qe)
        },
        ev = {
            ...Ln,
            types: [ea, $h].join(" ")
        },
        ta = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        qh = "mouseover mouseout",
        na = {
            types: ta
        },
        wM = {
            PAGE_START: Qh,
            PAGE_FINISH: Yh
        },
        Rn = ( () => {
            let e = window.pageXOffset !== void 0
              , n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : n.scrollLeft,
                scrollTop: e ? window.pageYOffset : n.scrollTop,
                stiffScrollTop: (0,
                Bh.default)(e ? window.pageYOffset : n.scrollTop, 0, n.scrollHeight - window.innerHeight),
                scrollWidth: n.scrollWidth,
                scrollHeight: n.scrollHeight,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        AM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        OM = ({element: e, nativeEvent: t}) => {
            let {type: n, target: r, relatedTarget: i} = t
              , o = e.contains(r);
            if (n === "mouseover" && o)
                return !0;
            let a = e.contains(i);
            return !!(n === "mouseout" && o && a)
        }
        ,
        SM = e => {
            let {element: t, event: {config: n}} = e
              , {clientWidth: r, clientHeight: i} = Rn()
              , o = n.scrollOffsetValue
              , s = n.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return AM(t.getBoundingClientRect(), {
                left: 0,
                top: s,
                right: r,
                bottom: i - s
            })
        }
        ,
        tv = e => (t, n) => {
            let {type: r} = t.nativeEvent
              , i = [ea, $h].indexOf(r) !== -1 ? r === ea : n.isActive
              , o = {
                ...n,
                isActive: i
            };
            return (!n || o.isActive !== n.isActive) && e(t, o) || o
        }
        ,
        kh = e => (t, n) => {
            let r = {
                elementHovered: OM(t)
            };
            return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r) || r
        }
        ,
        xM = e => (t, n) => {
            let r = {
                ...n,
                elementVisible: SM(t)
            };
            return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r) || r
        }
        ,
        Gh = e => (t, n={}) => {
            let {stiffScrollTop: r, scrollHeight: i, innerHeight: o} = Rn()
              , {event: {config: a, eventTypeId: u}} = t
              , {scrollOffsetValue: s, scrollOffsetUnit: f} = a
              , y = f === "PX"
              , m = i - o
              , g = Number((r / m).toFixed(2));
            if (n && n.percentTop === g)
                return n;
            let E = (y ? s : o * (s || 0) / 100) / m, b, I, O = 0;
            n && (b = g > n.percentTop,
            I = n.scrollingDown !== b,
            O = I ? g : n.anchorTop);
            let T = u === Kh ? g >= O + E : g <= O - E
              , R = {
                ...n,
                percentTop: g,
                inBounds: T,
                anchorTop: O,
                scrollingDown: b
            };
            return n && T && (I || R.inBounds !== n.inBounds) && e(t, R) || R
        }
        ,
        RM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        CM = e => (t, n) => {
            let r = {
                finished: document.readyState === "complete"
            };
            return r.finished && !(n && n.finshed) && e(t),
            r
        }
        ,
        LM = e => (t, n) => {
            let r = {
                started: !0
            };
            return n || e(t),
            r
        }
        ,
        Xh = e => (t, n={
            clickCount: 0
        }) => {
            let r = {
                clickCount: n.clickCount % 2 + 1
            };
            return r.clickCount !== n.clickCount && e(t, r) || r
        }
        ,
        qr = (e=!0) => ({
            ...ev,
            handler: je(e ? rt : Cn, tv( (t, n) => n.isActive ? Ln.handler(t, n) : n))
        }),
        kr = (e=!0) => ({
            ...ev,
            handler: je(e ? rt : Cn, tv( (t, n) => n.isActive ? n : Ln.handler(t, n)))
        }),
        Uh = {
            ...na,
            handler: xM( (e, t) => {
                let {elementVisible: n} = t
                  , {event: r, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: a} = o;
                return !a[r.action.config.autoStopEventId] && t.triggered ? t : r.eventTypeId === jh === n ? (qe(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        Vh = .05,
        nv = {
            [cM]: qr(),
            [lM]: kr(),
            [uM]: qr(),
            [sM]: kr(),
            [gM]: qr(!1),
            [pM]: kr(!1),
            [fM]: qr(),
            [dM]: kr(),
            [_M]: {
                types: "ecommerce-cart-open",
                handler: je(rt, qe)
            },
            [yM]: {
                types: "ecommerce-cart-close",
                handler: je(rt, qe)
            },
            [tM]: {
                types: "click",
                handler: je(rt, Xh( (e, {clickCount: t}) => {
                    bM(e) ? t === 1 && qe(e) : qe(e)
                }
                ))
            },
            [nM]: {
                types: "click",
                handler: je(rt, Xh( (e, {clickCount: t}) => {
                    t === 2 && qe(e)
                }
                ))
            },
            [rM]: {
                ...Ln,
                types: "mousedown"
            },
            [iM]: {
                ...Ln,
                types: "mouseup"
            },
            [oM]: {
                types: qh,
                handler: je(rt, kh( (e, t) => {
                    t.elementHovered && qe(e)
                }
                ))
            },
            [aM]: {
                types: qh,
                handler: je(rt, kh( (e, t) => {
                    t.elementHovered || qe(e)
                }
                ))
            },
            [hM]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: n, nativeEvent: r, eventStateKey: i}, o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: u, continuousParameterGroupId: s, reverse: f, restingState: y=0} = n
                      , {clientX: m=o.clientX, clientY: g=o.clientY, pageX: E=o.pageX, pageY: b=o.pageY} = r
                      , I = u === "X_AXIS"
                      , O = r.type === "mouseout"
                      , T = y / 100
                      , R = s
                      , C = !1;
                    switch (a) {
                    case Je.VIEWPORT:
                        {
                            T = I ? Math.min(m, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case Je.PAGE:
                        {
                            let {scrollLeft: N, scrollTop: M, scrollWidth: D, scrollHeight: B} = Rn();
                            T = I ? Math.min(N + E, D) / D : Math.min(M + b, B) / B;
                            break
                        }
                    case Je.ELEMENT:
                    default:
                        {
                            R = Fh(i, s);
                            let N = r.type.indexOf("mouse") === 0;
                            if (N && rt({
                                element: t,
                                nativeEvent: r
                            }) !== !0)
                                break;
                            let M = t.getBoundingClientRect()
                              , {left: D, top: B, width: z, height: j} = M;
                            if (!N && !RM({
                                left: m,
                                top: g
                            }, M))
                                break;
                            C = !0,
                            T = I ? (m - D) / z : (g - B) / j;
                            break
                        }
                    }
                    return O && (T > 1 - Vh || T < Vh) && (T = Math.round(T)),
                    (a !== Je.ELEMENT || C || C !== o.elementHovered) && (T = f ? 1 - T : T,
                    e.dispatch($t(R, T))),
                    {
                        elementHovered: C,
                        clientX: m,
                        clientY: g,
                        pageX: E,
                        pageY: b
                    }
                }
            },
            [IM]: {
                types: ta,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: n, reverse: r} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: a} = Rn()
                      , u = i / (o - a);
                    u = r ? 1 - u : u,
                    e.dispatch($t(n, u))
                }
            },
            [mM]: {
                types: ta,
                handler: ({element: e, store: t, eventConfig: n, eventStateKey: r}, i={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: o, scrollTop: a, scrollWidth: u, scrollHeight: s, clientHeight: f} = Rn()
                      , {basedOn: y, selectedAxis: m, continuousParameterGroupId: g, startsEntering: E, startsExiting: b, addEndOffset: I, addStartOffset: O, addOffsetValue: T=0, endOffsetValue: R=0} = n
                      , C = m === "X_AXIS";
                    if (y === Je.VIEWPORT) {
                        let N = C ? o / u : a / s;
                        return N !== i.scrollPercent && t.dispatch($t(g, N)),
                        {
                            scrollPercent: N
                        }
                    } else {
                        let N = Fh(r, g)
                          , M = e.getBoundingClientRect()
                          , D = (O ? T : 0) / 100
                          , B = (I ? R : 0) / 100;
                        D = E ? D : 1 - D,
                        B = b ? B : 1 - B;
                        let z = M.top + Math.min(M.height * D, f)
                          , Z = M.top + M.height * B - z
                          , J = Math.min(f + Z, s)
                          , A = Math.min(Math.max(0, f - z), J) / J;
                        return A !== i.scrollPercent && t.dispatch($t(N, A)),
                        {
                            scrollPercent: A
                        }
                    }
                }
            },
            [jh]: Uh,
            [vM]: Uh,
            [Kh]: {
                ...na,
                handler: Gh( (e, t) => {
                    t.scrollingDown && qe(e)
                }
                )
            },
            [EM]: {
                ...na,
                handler: Gh( (e, t) => {
                    t.scrollingDown || qe(e)
                }
                )
            },
            [Yh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: je(Cn, CM(qe))
            },
            [Qh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: je(Cn, LM(qe))
            }
        }
    }
    );
    var _v = {};
    Ne(_v, {
        observeRequests: () => $M,
        startActionGroup: () => Pn,
        startEngine: () => Hr,
        stopActionGroup: () => Jt,
        stopAllActionGroups: () => Ev,
        stopEngine: () => Br
    });
    function $M(e) {
        At({
            store: e,
            select: ({ixRequest: t}) => t.preview,
            onChange: eF
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: tF
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.stop,
            onChange: nF
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: rF
        })
    }
    function ZM(e) {
        At({
            store: e,
            select: ({ixSession: t}) => t.mediaQueryKey,
            onChange: () => {
                Br(e),
                pv({
                    store: e,
                    elementApi: Le
                }),
                Hr({
                    store: e,
                    allowEvents: !0
                }),
                gv()
            }
        })
    }
    function JM(e, t) {
        let n = At({
            store: e,
            select: ({ixSession: r}) => r.tick,
            onChange: r => {
                t(r),
                n()
            }
        })
    }
    function eF({rawData: e, defer: t}, n) {
        let r = () => {
            Hr({
                store: n,
                rawData: e,
                allowEvents: !0
            }),
            gv()
        }
        ;
        t ? setTimeout(r, 0) : r()
    }
    function gv() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function tF(e, t) {
        let {actionTypeId: n, actionListId: r, actionItemId: i, eventId: o, allowEvents: a, immediate: u, testManual: s, verbose: f=!0} = e
          , {rawData: y} = e;
        if (r && i && y && u) {
            let m = y.actionLists[r];
            m && (y = XM({
                actionList: m,
                actionItemId: i,
                rawData: y
            }))
        }
        if (Hr({
            store: t,
            rawData: y,
            allowEvents: a,
            testManual: s
        }),
        r && n === Re.GENERAL_START_ACTION || ia(n)) {
            Jt({
                store: t,
                actionListId: r
            }),
            vv({
                store: t,
                actionListId: r,
                eventId: o
            });
            let m = Pn({
                store: t,
                eventId: o,
                actionListId: r,
                immediate: u,
                verbose: f
            });
            f && m && t.dispatch(Zt({
                actionListId: r,
                isPlaying: !u
            }))
        }
    }
    function nF({actionListId: e}, t) {
        e ? Jt({
            store: t,
            actionListId: e
        }) : Ev({
            store: t
        }),
        Br(t)
    }
    function rF(e, t) {
        Br(t),
        pv({
            store: t,
            elementApi: Le
        })
    }
    function Hr({store: e, rawData: t, allowEvents: n, testManual: r}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(Mo(t)),
        i.active || (e.dispatch(Fo({
            hasBoundaryNodes: !!document.querySelector(Xr),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        n && (cF(e),
        iF(),
        e.getState().ixSession.hasDefinedMediaQueries && ZM(e)),
        e.dispatch(qo()),
        oF(e, r))
    }
    function iF() {
        let {documentElement: e} = document;
        e.className.indexOf(iv) === -1 && (e.className += ` ${iv}`)
    }
    function oF(e, t) {
        let n = r => {
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(xr(r, o)),
            t ? JM(e, n) : requestAnimationFrame(n))
        }
        ;
        n(window.performance.now())
    }
    function Br(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: n} = t;
            n.forEach(aF),
            HM(),
            e.dispatch(ko())
        }
    }
    function aF({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function sF({store: e, eventStateKey: t, eventTarget: n, eventId: r, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: u, restingValue: s}) {
        let {ixData: f, ixSession: y} = e.getState()
          , {events: m} = f
          , g = m[r]
          , {eventTypeId: E} = g
          , b = {}
          , I = {}
          , O = []
          , {continuousActionGroups: T} = a
          , {id: R} = a;
        UM(E, i) && (R = VM(t, R));
        let C = y.hasBoundaryNodes && n ? xn(n, Xr) : null;
        T.forEach(N => {
            let {keyframe: M, actionItems: D} = N;
            D.forEach(B => {
                let {actionTypeId: z} = B
                  , {target: j} = B.config;
                if (!j)
                    return;
                let Z = j.boundaryMode ? C : null
                  , J = BM(j) + oa + z;
                if (I[J] = uF(I[J], M, B),
                !b[J]) {
                    b[J] = !0;
                    let {config: k} = B;
                    Ur({
                        config: k,
                        event: g,
                        eventTarget: n,
                        elementRoot: Z,
                        elementApi: Le
                    }).forEach(A => {
                        O.push({
                            element: A,
                            key: J
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        O.forEach( ({element: N, key: M}) => {
            let D = I[M]
              , B = (0,
            ct.default)(D, "[0].actionItems[0]", {})
              , {actionTypeId: z} = B
              , Z = (z === Re.PLUGIN_RIVE ? (B.config?.target?.selectorGuids || []).length === 0 : Wr(z)) ? sa(z)(N, B) : null
              , J = aa({
                element: N,
                actionItem: B,
                elementApi: Le
            }, Z);
            ua({
                store: e,
                element: N,
                eventId: r,
                actionListId: o,
                actionItem: B,
                destination: J,
                continuous: !0,
                parameterId: R,
                actionGroups: D,
                smoothing: u,
                restingValue: s,
                pluginInstance: Z
            })
        }
        )
    }
    function uF(e=[], t, n) {
        let r = [...e], i;
        return r.some( (o, a) => o.keyframe === t ? (i = a,
        !0) : !1),
        i == null && (i = r.length,
        r.push({
            keyframe: t,
            actionItems: []
        })),
        r[i].actionItems.push(n),
        r
    }
    function cF(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: n} = t;
        hv(e),
        (0,
        en.default)(n, (i, o) => {
            let a = nv[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            hF({
                logic: a,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: r} = e.getState();
        r.eventListeners.length && fF(e)
    }
    function fF(e) {
        let t = () => {
            hv(e)
        }
        ;
        lF.forEach(n => {
            window.addEventListener(n, t),
            e.dispatch(Sr(window, [n, t]))
        }
        ),
        t()
    }
    function hv(e) {
        let {ixSession: t, ixData: n} = e.getState()
          , r = window.innerWidth;
        if (r !== t.viewportWidth) {
            let {mediaQueries: i} = n;
            e.dispatch(Wo({
                width: r,
                mediaQueries: i
            }))
        }
    }
    function hF({logic: e, store: t, events: n}) {
        vF(n);
        let {types: r, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: a} = o
          , u = dF(n, gF);
        if (!(0,
        sv.default)(u))
            return;
        (0,
        en.default)(u, (m, g) => {
            let E = n[g]
              , {action: b, id: I, mediaQueries: O=o.mediaQueryKeys} = E
              , {actionListId: T} = b.config;
            zM(O, o.mediaQueryKeys) || t.dispatch(Ho()),
            b.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(C => {
                let {continuousParameterGroupId: N} = C
                  , M = (0,
                ct.default)(a, `${T}.continuousParameterGroups`, [])
                  , D = (0,
                av.default)(M, ({id: j}) => j === N)
                  , B = (C.smoothing || 0) / 100
                  , z = (C.restingState || 0) / 100;
                D && m.forEach( (j, Z) => {
                    let J = I + oa + Z;
                    sF({
                        store: t,
                        eventStateKey: J,
                        eventTarget: j,
                        eventId: I,
                        eventConfig: C,
                        actionListId: T,
                        parameterGroup: D,
                        smoothing: B,
                        restingValue: z
                    })
                }
                )
            }
            ),
            (b.actionTypeId === Re.GENERAL_START_ACTION || ia(b.actionTypeId)) && vv({
                store: t,
                actionListId: T,
                eventId: I
            })
        }
        );
        let s = m => {
            let {ixSession: g} = t.getState();
            pF(u, (E, b, I) => {
                let O = n[b]
                  , T = g.eventState[I]
                  , {action: R, mediaQueries: C=o.mediaQueryKeys} = O;
                if (!Vr(C, g.mediaQueryKey))
                    return;
                let N = (M={}) => {
                    let D = i({
                        store: t,
                        element: E,
                        event: O,
                        eventConfig: M,
                        nativeEvent: m,
                        eventStateKey: I
                    }, T);
                    KM(D, T) || t.dispatch(Go(I, D))
                }
                ;
                R.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(N) : N()
            }
            )
        }
          , f = (0,
        fv.default)(s, QM)
          , y = ({target: m=document, types: g, throttle: E}) => {
            g.split(" ").filter(Boolean).forEach(b => {
                let I = E ? f : s;
                m.addEventListener(b, I),
                t.dispatch(Sr(m, [b, I]))
            }
            )
        }
        ;
        Array.isArray(r) ? r.forEach(y) : typeof r == "string" && y(e)
    }
    function vF(e) {
        if (!YM)
            return;
        let t = {}
          , n = "";
        for (let r in e) {
            let {eventTypeId: i, target: o} = e[r]
              , a = zo(o);
            t[a] || (i === ze.MOUSE_CLICK || i === ze.MOUSE_SECOND_CLICK) && (t[a] = !0,
            n += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (n) {
            let r = document.createElement("style");
            r.textContent = n,
            document.body.appendChild(r)
        }
    }
    function vv({store: e, actionListId: t, eventId: n}) {
        let {ixData: r, ixSession: i} = e.getState()
          , {actionLists: o, events: a} = r
          , u = a[n]
          , s = o[t];
        if (s && s.useFirstGroupAsInitialState) {
            let f = (0,
            ct.default)(s, "actionItemGroups[0].actionItems", [])
              , y = (0,
            ct.default)(u, "mediaQueries", r.mediaQueryKeys);
            if (!Vr(y, i.mediaQueryKey))
                return;
            f.forEach(m => {
                let {config: g, actionTypeId: E} = m
                  , b = g?.target?.useEventTarget === !0 && g?.target?.objectId == null ? {
                    target: u.target,
                    targets: u.targets
                } : g
                  , I = Ur({
                    config: b,
                    event: u,
                    elementApi: Le
                })
                  , O = Wr(E);
                I.forEach(T => {
                    let R = O ? sa(E)(T, m) : null;
                    ua({
                        destination: aa({
                            element: T,
                            actionItem: m,
                            elementApi: Le
                        }, R),
                        immediate: !0,
                        store: e,
                        element: T,
                        eventId: n,
                        actionItem: m,
                        actionListId: t,
                        pluginInstance: R
                    })
                }
                )
            }
            )
        }
    }
    function Ev({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        en.default)(t, n => {
            if (!n.continuous) {
                let {actionListId: r, verbose: i} = n;
                ca(n, e),
                i && e.dispatch(Zt({
                    actionListId: r,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Jt({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState()
          , u = a.hasBoundaryNodes && n ? xn(n, Xr) : null;
        (0,
        en.default)(o, s => {
            let f = (0,
            ct.default)(s, "actionItem.config.target.boundaryMode")
              , y = r ? s.eventStateKey === r : !0;
            if (s.actionListId === i && s.eventId === t && y) {
                if (u && f && !Ko(u, s.element))
                    return;
                ca(s, e),
                s.verbose && e.dispatch(Zt({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Pn({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i, groupIndex: o=0, immediate: a, verbose: u}) {
        let {ixData: s, ixSession: f} = e.getState()
          , {events: y} = s
          , m = y[t] || {}
          , {mediaQueries: g=s.mediaQueryKeys} = m
          , E = (0,
        ct.default)(s, `actionLists.${i}`, {})
          , {actionItemGroups: b, useFirstGroupAsInitialState: I} = E;
        if (!b || !b.length)
            return !1;
        o >= b.length && (0,
        ct.default)(m, "config.loop") && (o = 0),
        o === 0 && I && o++;
        let T = (o === 0 || o === 1 && I) && ia(m.action?.actionTypeId) ? m.config.delay : void 0
          , R = (0,
        ct.default)(b, [o, "actionItems"], []);
        if (!R.length || !Vr(g, f.mediaQueryKey))
            return !1;
        let C = f.hasBoundaryNodes && n ? xn(n, Xr) : null
          , N = qM(R)
          , M = !1;
        return R.forEach( (D, B) => {
            let {config: z, actionTypeId: j} = D
              , Z = Wr(j)
              , {target: J} = z;
            if (!J)
                return;
            let k = J.boundaryMode ? C : null;
            Ur({
                config: z,
                event: m,
                eventTarget: n,
                elementRoot: k,
                elementApi: Le
            }).forEach( (G, Y) => {
                let K = Z ? sa(j)(G, D) : null
                  , re = Z ? jM(j)(G, D) : null;
                M = !0;
                let ie = N === B && Y === 0
                  , ce = kM({
                    element: G,
                    actionItem: D
                })
                  , Ee = aa({
                    element: G,
                    actionItem: D,
                    elementApi: Le
                }, K);
                ua({
                    store: e,
                    element: G,
                    actionItem: D,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ie,
                    computedStyle: ce,
                    destination: Ee,
                    immediate: a,
                    verbose: u,
                    pluginInstance: K,
                    pluginDuration: re,
                    instanceDelay: T
                })
            }
            )
        }
        ),
        M
    }
    function ua(e) {
        let {store: t, computedStyle: n, ...r} = e, {element: i, actionItem: o, immediate: a, pluginInstance: u, continuous: s, restingValue: f, eventId: y} = r, m = !s, g = MM(), {ixElements: E, ixSession: b, ixData: I} = t.getState(), O = DM(E, i), {refState: T} = E[O] || {}, R = jo(i), C = b.reducedMotion && Ii[o.actionTypeId], N;
        if (C && s)
            switch (I.events[y]?.eventTypeId) {
            case ze.MOUSE_MOVE:
            case ze.MOUSE_MOVE_IN_VIEWPORT:
                N = f;
                break;
            default:
                N = .5;
                break
            }
        let M = GM(i, T, n, o, Le, u);
        if (t.dispatch(Xo({
            instanceId: g,
            elementId: O,
            origin: M,
            refType: R,
            skipMotion: C,
            skipToValue: N,
            ...r
        })),
        mv(document.body, "ix2-animation-started", g),
        a) {
            EF(t, g);
            return
        }
        At({
            store: t,
            select: ({ixInstances: D}) => D[g],
            onChange: yv
        }),
        m && t.dispatch(Rr(g, b.tick))
    }
    function ca(e, t) {
        mv(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: n, actionItem: r} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: a} = i[n] || {};
        a === dv && WM(o, r, Le),
        t.dispatch(Uo(e.id))
    }
    function mv(e, t, n) {
        let r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n),
        e.dispatchEvent(r)
    }
    function EF(e, t) {
        let {ixParameters: n} = e.getState();
        e.dispatch(Rr(t, 0)),
        e.dispatch(xr(performance.now(), n));
        let {ixInstances: r} = e.getState();
        yv(r[t], e)
    }
    function yv(e, t) {
        let {active: n, continuous: r, complete: i, elementId: o, actionItem: a, actionTypeId: u, renderType: s, current: f, groupIndex: y, eventId: m, eventTarget: g, eventStateKey: E, actionListId: b, isCarrier: I, styleProp: O, verbose: T, pluginInstance: R} = e
          , {ixData: C, ixSession: N} = t.getState()
          , {events: M} = C
          , D = M && M[m] ? M[m] : {}
          , {mediaQueries: B=C.mediaQueryKeys} = D;
        if (Vr(B, N.mediaQueryKey) && (r || n || i)) {
            if (f || s === NM && i) {
                t.dispatch(Vo(o, u, f, a));
                let {ixElements: z} = t.getState()
                  , {ref: j, refType: Z, refState: J} = z[o] || {}
                  , k = J && J[u];
                (Z === dv || Wr(u)) && FM(j, J, k, m, a, O, Le, s, R)
            }
            if (i) {
                if (I) {
                    let z = Pn({
                        store: t,
                        eventId: m,
                        eventTarget: g,
                        eventStateKey: E,
                        actionListId: b,
                        groupIndex: y + 1,
                        verbose: T
                    });
                    T && !z && t.dispatch(Zt({
                        actionListId: b,
                        isPlaying: !1
                    }))
                }
                ca(e, t)
            }
        }
    }
    var av, ct, sv, uv, cv, lv, en, fv, Gr, PM, ia, oa, Xr, dv, NM, iv, Ur, DM, aa, At, MM, FM, pv, qM, kM, GM, XM, UM, VM, Vr, WM, HM, BM, zM, KM, Wr, sa, jM, ov, YM, QM, lF, dF, pF, gF, ra = ve( () => {
        "use strict";
        av = fe(Qi()),
        ct = fe(ur()),
        sv = fe(Np()),
        uv = fe(og()),
        cv = fe(sg()),
        lv = fe(cg()),
        en = fe(hg()),
        fv = fe(Tg());
        Me();
        Gr = fe(wt());
        Cr();
        xg();
        rv();
        PM = Object.keys(Xn),
        ia = e => PM.includes(e),
        {COLON_DELIMITER: oa, BOUNDARY_SELECTOR: Xr, HTML_ELEMENT: dv, RENDER_GENERAL: NM, W_MOD_IX: iv} = Ae,
        {getAffectedElements: Ur, getElementId: DM, getDestinationValues: aa, observeStore: At, getInstanceId: MM, renderHTMLElement: FM, clearAllStyles: pv, getMaxDurationItemIndex: qM, getComputedStyle: kM, getInstanceOrigin: GM, reduceListToGroup: XM, shouldNamespaceEventParameter: UM, getNamespacedParameterId: VM, shouldAllowMediaQuery: Vr, cleanupHTMLElement: WM, clearObjectCache: HM, stringifyTarget: BM, mediaQueriesEqual: zM, shallowEqual: KM} = Gr.IX2VanillaUtils,
        {isPluginType: Wr, createPluginInstance: sa, getPluginDuration: jM} = Gr.IX2VanillaPlugins,
        ov = navigator.userAgent,
        YM = ov.match(/iPad/i) || ov.match(/iPhone/),
        QM = 12;
        lF = ["resize", "orientationchange"];
        dF = (e, t) => (0,
        uv.default)((0,
        lv.default)(e, t), cv.default),
        pF = (e, t) => {
            (0,
            en.default)(e, (n, r) => {
                n.forEach( (i, o) => {
                    let a = r + oa + o;
                    t(i, r, a)
                }
                )
            }
            )
        }
        ,
        gF = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ur({
                config: t,
                elementApi: Le
            })
        }
    }
    );
    var bv = d(fa => {
        "use strict";
        Object.defineProperty(fa, "__esModule", {
            value: !0
        });
        function mF(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        mF(fa, {
            actions: function() {
                return IF
            },
            destroy: function() {
                return Tv
            },
            init: function() {
                return AF
            },
            setEnv: function() {
                return wF
            },
            store: function() {
                return zr
            }
        });
        var yF = mi()
          , _F = TF((gp(),
        Qe(pp)))
          , la = (ra(),
        Qe(_v))
          , IF = bF((Cr(),
        Qe(wg)));
        function TF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Iv(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (Iv = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function bF(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = Iv(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        var zr = (0,
        yF.createStore)(_F.default);
        function wF(e) {
            e() && (0,
            la.observeRequests)(zr)
        }
        function AF(e) {
            Tv(),
            (0,
            la.startEngine)({
                store: zr,
                rawData: e,
                allowEvents: !0
            })
        }
        function Tv() {
            (0,
            la.stopEngine)(zr)
        }
    }
    );
    var Sv = d( (CG, Ov) => {
        "use strict";
        var wv = De()
          , Av = bv();
        Av.setEnv(wv.env);
        wv.define("ix2", Ov.exports = function() {
            return Av
        }
        )
    }
    );
    var Rv = d( (LG, xv) => {
        "use strict";
        var tn = De();
        tn.define("links", xv.exports = function(e, t) {
            var n = {}, r = e(window), i, o = tn.env(), a = window.location, u = document.createElement("a"), s = "w--current", f = /index\.(html|php)$/, y = /\/$/, m, g;
            n.ready = n.design = n.preview = E;
            function E() {
                i = o && tn.env("design"),
                g = tn.env("slug") || a.pathname || "",
                tn.scroll.off(I),
                m = [];
                for (var T = document.links, R = 0; R < T.length; ++R)
                    b(T[R]);
                m.length && (tn.scroll.on(I),
                I())
            }
            function b(T) {
                if (!T.getAttribute("hreflang")) {
                    var R = i && T.getAttribute("href-disabled") || T.getAttribute("href");
                    if (u.href = R,
                    !(R.indexOf(":") >= 0)) {
                        var C = e(T);
                        if (u.hash.length > 1 && u.host + u.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash))
                                return;
                            var N = e(u.hash);
                            N.length && m.push({
                                link: C,
                                sec: N,
                                active: !1
                            });
                            return
                        }
                        if (!(R === "#" || R === "")) {
                            var M = u.href === a.href || R === g || f.test(R) && y.test(g);
                            O(C, s, M)
                        }
                    }
                }
            }
            function I() {
                var T = r.scrollTop()
                  , R = r.height();
                t.each(m, function(C) {
                    if (!C.link.attr("hreflang")) {
                        var N = C.link
                          , M = C.sec
                          , D = M.offset().top
                          , B = M.outerHeight()
                          , z = R * .5
                          , j = M.is(":visible") && D + B - z >= T && D + z <= T + R;
                        C.active !== j && (C.active = j,
                        O(N, s, j))
                    }
                })
            }
            function O(T, R, C) {
                var N = T.hasClass(R);
                C && N || !C && !N || (C ? T.addClass(R) : T.removeClass(R))
            }
            return n
        }
        )
    }
    );
    var Lv = d( (PG, Cv) => {
        "use strict";
        var Kr = De();
        Kr.define("scroll", Cv.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , n = window.location
              , r = b() ? null : window.history
              , i = e(window)
              , o = e(document)
              , a = e(document.body)
              , u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(k) {
                window.setTimeout(k, 15)
            }
              , s = Kr.env("editor") ? ".w-editor-body" : "body"
              , f = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])"
              , y = 'a[href="#"]'
              , m = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")"
              , g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , E = document.createElement("style");
            E.appendChild(document.createTextNode(g));
            function b() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var I = /^#[a-zA-Z0-9][\w:.-]*$/;
            function O(k) {
                return I.test(k.hash) && k.host + k.pathname === n.host + n.pathname
            }
            let T = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function R() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || T.matches
            }
            function C(k, A) {
                var G;
                switch (A) {
                case "add":
                    G = k.attr("tabindex"),
                    G ? k.attr("data-wf-tabindex-swap", G) : k.attr("tabindex", "-1");
                    break;
                case "remove":
                    G = k.attr("data-wf-tabindex-swap"),
                    G ? (k.attr("tabindex", G),
                    k.removeAttr("data-wf-tabindex-swap")) : k.removeAttr("tabindex");
                    break
                }
                k.toggleClass("wf-force-outline-none", A === "add")
            }
            function N(k) {
                var A = k.currentTarget;
                if (!(Kr.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(A.className))) {
                    var G = O(A) ? A.hash : "";
                    if (G !== "") {
                        var Y = e(G);
                        Y.length && (k && (k.preventDefault(),
                        k.stopPropagation()),
                        M(G, k),
                        window.setTimeout(function() {
                            D(Y, function() {
                                C(Y, "add"),
                                Y.get(0).focus({
                                    preventScroll: !0
                                }),
                                C(Y, "remove")
                            })
                        }, k ? 0 : 300))
                    }
                }
            }
            function M(k) {
                if (n.hash !== k && r && r.pushState && !(Kr.env.chrome && n.protocol === "file:")) {
                    var A = r.state && r.state.hash;
                    A !== k && r.pushState({
                        hash: k
                    }, "", k)
                }
            }
            function D(k, A) {
                var G = i.scrollTop()
                  , Y = B(k);
                if (G !== Y) {
                    var K = z(k, G, Y)
                      , re = Date.now()
                      , ie = function() {
                        var ce = Date.now() - re;
                        window.scroll(0, j(G, Y, ce, K)),
                        ce <= K ? u(ie) : typeof A == "function" && A()
                    };
                    u(ie)
                }
            }
            function B(k) {
                var A = e(f)
                  , G = A.css("position") === "fixed" ? A.outerHeight() : 0
                  , Y = k.offset().top - G;
                if (k.data("scroll") === "mid") {
                    var K = i.height() - G
                      , re = k.outerHeight();
                    re < K && (Y -= Math.round((K - re) / 2))
                }
                return Y
            }
            function z(k, A, G) {
                if (R())
                    return 0;
                var Y = 1;
                return a.add(k).each(function(K, re) {
                    var ie = parseFloat(re.getAttribute("data-scroll-time"));
                    !isNaN(ie) && ie >= 0 && (Y = ie)
                }),
                (472.143 * Math.log(Math.abs(A - G) + 125) - 2e3) * Y
            }
            function j(k, A, G, Y) {
                return G > Y ? A : k + (A - k) * Z(G / Y)
            }
            function Z(k) {
                return k < .5 ? 4 * k * k * k : (k - 1) * (2 * k - 2) * (2 * k - 2) + 1
            }
            function J() {
                var {WF_CLICK_EMPTY: k, WF_CLICK_SCROLL: A} = t;
                o.on(A, m, N),
                o.on(k, y, function(G) {
                    G.preventDefault()
                }),
                document.head.insertBefore(E, document.head.firstChild)
            }
            return {
                ready: J
            }
        }
        )
    }
    );
    var Nv = d( (NG, Pv) => {
        "use strict";
        var OF = De();
        OF.define("touch", Pv.exports = function(e) {
            var t = {}
              , n = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new r(o) : null
            }
            ;
            function r(o) {
                var a = !1, u = !1, s = Math.min(Math.round(window.innerWidth * .04), 40), f, y;
                o.addEventListener("touchstart", m, !1),
                o.addEventListener("touchmove", g, !1),
                o.addEventListener("touchend", E, !1),
                o.addEventListener("touchcancel", b, !1),
                o.addEventListener("mousedown", m, !1),
                o.addEventListener("mousemove", g, !1),
                o.addEventListener("mouseup", E, !1),
                o.addEventListener("mouseout", b, !1);
                function m(O) {
                    var T = O.touches;
                    T && T.length > 1 || (a = !0,
                    T ? (u = !0,
                    f = T[0].clientX) : f = O.clientX,
                    y = f)
                }
                function g(O) {
                    if (a) {
                        if (u && O.type === "mousemove") {
                            O.preventDefault(),
                            O.stopPropagation();
                            return
                        }
                        var T = O.touches
                          , R = T ? T[0].clientX : O.clientX
                          , C = R - y;
                        y = R,
                        Math.abs(C) > s && n && String(n()) === "" && (i("swipe", O, {
                            direction: C > 0 ? "right" : "left"
                        }),
                        b())
                    }
                }
                function E(O) {
                    if (a && (a = !1,
                    u && O.type === "mouseup")) {
                        O.preventDefault(),
                        O.stopPropagation(),
                        u = !1;
                        return
                    }
                }
                function b() {
                    a = !1
                }
                function I() {
                    o.removeEventListener("touchstart", m, !1),
                    o.removeEventListener("touchmove", g, !1),
                    o.removeEventListener("touchend", E, !1),
                    o.removeEventListener("touchcancel", b, !1),
                    o.removeEventListener("mousedown", m, !1),
                    o.removeEventListener("mousemove", g, !1),
                    o.removeEventListener("mouseup", E, !1),
                    o.removeEventListener("mouseout", b, !1),
                    o = null
                }
                this.destroy = I
            }
            function i(o, a, u) {
                var s = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(s, u)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var Fv = d( (DG, Mv) => {
        "use strict";
        var Ot = De()
          , SF = rn()
          , Ye = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , Dv = !0
          , xF = /^#[a-zA-Z0-9\-_]+$/;
        Ot.define("dropdown", Mv.exports = function(e, t) {
            var n = t.debounce, r = {}, i = Ot.env(), o = !1, a, u = Ot.env.touch, s = ".w-dropdown", f = "w--open", y = SF.triggers, m = 900, g = "focusout" + s, E = "keydown" + s, b = "mouseenter" + s, I = "mousemove" + s, O = "mouseleave" + s, T = (u ? "click" : "mouseup") + s, R = "w-close" + s, C = "setting" + s, N = e(document), M;
            r.ready = D,
            r.design = function() {
                o && A(),
                o = !1,
                D()
            }
            ,
            r.preview = function() {
                o = !0,
                D()
            }
            ;
            function D() {
                a = i && Ot.env("design"),
                M = N.find(s),
                M.each(B)
            }
            function B(c, S) {
                var x = e(S)
                  , L = e.data(S, s);
                L || (L = e.data(S, s, {
                    open: !1,
                    el: x,
                    config: {},
                    selectedIdx: -1
                })),
                L.toggle = L.el.children(".w-dropdown-toggle"),
                L.list = L.el.children(".w-dropdown-list"),
                L.links = L.list.find("a:not(.w-dropdown .w-dropdown a)"),
                L.complete = K(L),
                L.mouseLeave = ie(L),
                L.mouseUpOutside = Y(L),
                L.mouseMoveOutside = ce(L),
                z(L);
                var $ = L.toggle.attr("id")
                  , ee = L.list.attr("id");
                $ || ($ = "w-dropdown-toggle-" + c),
                ee || (ee = "w-dropdown-list-" + c),
                L.toggle.attr("id", $),
                L.toggle.attr("aria-controls", ee),
                L.toggle.attr("aria-haspopup", "menu"),
                L.toggle.attr("aria-expanded", "false"),
                L.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
                L.toggle.prop("tagName") !== "BUTTON" && (L.toggle.attr("role", "button"),
                L.toggle.attr("tabindex") || L.toggle.attr("tabindex", "0")),
                L.list.attr("id", ee),
                L.list.attr("aria-labelledby", $),
                L.links.each(function(p, X) {
                    X.hasAttribute("tabindex") || X.setAttribute("tabindex", "0"),
                    xF.test(X.hash) && X.addEventListener("click", k.bind(null, L))
                }),
                L.el.off(s),
                L.toggle.off(s),
                L.nav && L.nav.off(s);
                var W = Z(L, Dv);
                a && L.el.on(C, j(L)),
                a || (i && (L.hovering = !1,
                k(L)),
                L.config.hover && L.toggle.on(b, re(L)),
                L.el.on(R, W),
                L.el.on(E, Ee(L)),
                L.el.on(g, h(L)),
                L.toggle.on(T, W),
                L.toggle.on(E, U(L)),
                L.nav = L.el.closest(".w-nav"),
                L.nav.on(R, W))
            }
            function z(c) {
                var S = Number(c.el.css("z-index"));
                c.manageZ = S === m || S === m + 1,
                c.config = {
                    hover: c.el.attr("data-hover") === "true" && !u,
                    delay: c.el.attr("data-delay")
                }
            }
            function j(c) {
                return function(S, x) {
                    x = x || {},
                    z(c),
                    x.open === !0 && J(c),
                    x.open === !1 && k(c, {
                        immediate: !0
                    })
                }
            }
            function Z(c, S) {
                return n(function(x) {
                    if (c.open || x && x.type === "w-close")
                        return k(c, {
                            forceClose: S
                        });
                    J(c)
                })
            }
            function J(c) {
                if (!c.open) {
                    G(c),
                    c.open = !0,
                    c.list.addClass(f),
                    c.toggle.addClass(f),
                    c.toggle.attr("aria-expanded", "true"),
                    y.intro(0, c.el[0]),
                    Ot.redraw.up(),
                    c.manageZ && c.el.css("z-index", m + 1);
                    var S = Ot.env("editor");
                    a || N.on(T, c.mouseUpOutside),
                    c.hovering && !S && c.el.on(O, c.mouseLeave),
                    c.hovering && S && N.on(I, c.mouseMoveOutside),
                    window.clearTimeout(c.delayId)
                }
            }
            function k(c, {immediate: S, forceClose: x}={}) {
                if (c.open && !(c.config.hover && c.hovering && !x)) {
                    c.toggle.attr("aria-expanded", "false"),
                    c.open = !1;
                    var L = c.config;
                    if (y.outro(0, c.el[0]),
                    N.off(T, c.mouseUpOutside),
                    N.off(I, c.mouseMoveOutside),
                    c.el.off(O, c.mouseLeave),
                    window.clearTimeout(c.delayId),
                    !L.delay || S)
                        return c.complete();
                    c.delayId = window.setTimeout(c.complete, L.delay)
                }
            }
            function A() {
                N.find(s).each(function(c, S) {
                    e(S).triggerHandler(R)
                })
            }
            function G(c) {
                var S = c.el[0];
                M.each(function(x, L) {
                    var $ = e(L);
                    $.is(S) || $.has(S).length || $.triggerHandler(R)
                })
            }
            function Y(c) {
                return c.mouseUpOutside && N.off(T, c.mouseUpOutside),
                n(function(S) {
                    if (c.open) {
                        var x = e(S.target);
                        if (!x.closest(".w-dropdown-toggle").length) {
                            var L = e.inArray(c.el[0], x.parents(s)) === -1
                              , $ = Ot.env("editor");
                            if (L) {
                                if ($) {
                                    var ee = x.parents().length === 1 && x.parents("svg").length === 1
                                      , W = x.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (ee || W)
                                        return
                                }
                                k(c)
                            }
                        }
                    }
                })
            }
            function K(c) {
                return function() {
                    c.list.removeClass(f),
                    c.toggle.removeClass(f),
                    c.manageZ && c.el.css("z-index", "")
                }
            }
            function re(c) {
                return function() {
                    c.hovering = !0,
                    J(c)
                }
            }
            function ie(c) {
                return function() {
                    c.hovering = !1,
                    c.links.is(":focus") || k(c)
                }
            }
            function ce(c) {
                return n(function(S) {
                    if (c.open) {
                        var x = e(S.target)
                          , L = e.inArray(c.el[0], x.parents(s)) === -1;
                        if (L) {
                            var $ = x.parents(".w-editor-bem-EditorHoverControls").length
                              , ee = x.parents(".w-editor-bem-RTToolbar").length
                              , W = e(".w-editor-bem-EditorOverlay")
                              , p = W.find(".w-editor-edit-outline").length || W.find(".w-editor-bem-RTToolbar").length;
                            if ($ || ee || p)
                                return;
                            c.hovering = !1,
                            k(c)
                        }
                    }
                })
            }
            function Ee(c) {
                return function(S) {
                    if (!(a || !c.open))
                        switch (c.selectedIdx = c.links.index(document.activeElement),
                        S.keyCode) {
                        case Ye.HOME:
                            return c.open ? (c.selectedIdx = 0,
                            v(c),
                            S.preventDefault()) : void 0;
                        case Ye.END:
                            return c.open ? (c.selectedIdx = c.links.length - 1,
                            v(c),
                            S.preventDefault()) : void 0;
                        case Ye.ESCAPE:
                            return k(c),
                            c.toggle.focus(),
                            S.stopPropagation();
                        case Ye.ARROW_RIGHT:
                        case Ye.ARROW_DOWN:
                            return c.selectedIdx = Math.min(c.links.length - 1, c.selectedIdx + 1),
                            v(c),
                            S.preventDefault();
                        case Ye.ARROW_LEFT:
                        case Ye.ARROW_UP:
                            return c.selectedIdx = Math.max(-1, c.selectedIdx - 1),
                            v(c),
                            S.preventDefault()
                        }
                }
            }
            function v(c) {
                c.links[c.selectedIdx] && c.links[c.selectedIdx].focus()
            }
            function U(c) {
                var S = Z(c, Dv);
                return function(x) {
                    if (!a) {
                        if (!c.open)
                            switch (x.keyCode) {
                            case Ye.ARROW_UP:
                            case Ye.ARROW_DOWN:
                                return x.stopPropagation()
                            }
                        switch (x.keyCode) {
                        case Ye.SPACE:
                        case Ye.ENTER:
                            return S(),
                            x.stopPropagation(),
                            x.preventDefault()
                        }
                    }
                }
            }
            function h(c) {
                return n(function(S) {
                    var {relatedTarget: x, target: L} = S
                      , $ = c.el[0]
                      , ee = $.contains(x) || $.contains(L);
                    return ee || k(c),
                    S.stopPropagation()
                })
            }
            return r
        }
        )
    }
    );
    var qv = d(da => {
        "use strict";
        Object.defineProperty(da, "__esModule", {
            value: !0
        });
        Object.defineProperty(da, "default", {
            enumerable: !0,
            get: function() {
                return RF
            }
        });
        function RF(e, t, n, r, i, o, a, u, s, f, y, m, g) {
            return function(E) {
                e(E);
                var b = E.form
                  , I = {
                    name: b.attr("data-name") || b.attr("name") || "Untitled Form",
                    pageId: b.attr("data-wf-page-id") || "",
                    elementId: b.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: n.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(b.html()),
                    trackingCookies: r()
                };
                let O = b.attr("data-wf-flow");
                O && (I.wfFlow = O),
                i(E);
                var T = o(b, I.fields);
                if (T)
                    return a(T);
                if (I.fileUploads = u(b),
                s(E),
                !f) {
                    y(E);
                    return
                }
                m.ajax({
                    url: g,
                    type: "POST",
                    data: I,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(R) {
                    R && R.code === 200 && (E.success = !0),
                    y(E)
                }).fail(function() {
                    y(E)
                })
            }
        }
    }
    );
    var Gv = d( (FG, kv) => {
        "use strict";
        var jr = De()
          , CF = (e, t, n, r) => {
            let i = document.createElement("div");
            t.appendChild(i),
            turnstile.render(i, {
                sitekey: e,
                callback: function(o) {
                    n(o)
                },
                "error-callback": function() {
                    r()
                }
            })
        }
        ;
        jr.define("forms", kv.exports = function(e, t) {
            let n = "TURNSTILE_LOADED";
            var r = {}, i = e(document), o, a = window.location, u = window.XDomainRequest && !window.atob, s = ".w-form", f, y = /e(-)?mail/i, m = /^\S+@\S+$/, g = window.alert, E = jr.env(), b, I, O;
            let T = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"), R;
            var C = /list-manage[1-9]?.com/i
              , N = t.debounce(function() {
                g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                D(),
                M(),
                !E && !b && z()
            }
            ;
            function M() {
                f = e("html").attr("data-wf-site"),
                I = "https://webflow.com/api/v1/form/" + f,
                u && I.indexOf("https://webflow.com") >= 0 && (I = I.replace("https://webflow.com", "https://formdata.webflow.com")),
                O = `${I}/signFile`,
                o = e(s + " form"),
                o.length && o.each(B)
            }
            function D() {
                T && (R = document.createElement("script"),
                R.src = "https://challenges.cloudflare.com/turnstile/v0/api.js",
                document.head.appendChild(R),
                R.onload = () => {
                    i.trigger(n)
                }
                )
            }
            function B(h, c) {
                var S = e(c)
                  , x = e.data(c, s);
                x || (x = e.data(c, s, {
                    form: S
                })),
                j(x);
                var L = S.closest("div.w-form");
                x.done = L.find("> .w-form-done"),
                x.fail = L.find("> .w-form-fail"),
                x.fileUploads = L.find(".w-file-upload"),
                x.fileUploads.each(function(W) {
                    Ee(W, x)
                }),
                T && (x.wait = !1,
                Z(x),
                i.on(typeof turnstile < "u" ? "ready" : n, function() {
                    CF(T, c, W => {
                        x.turnstileToken = W,
                        j(x)
                    }
                    , () => {
                        Z(x)
                    }
                    )
                }));
                var $ = x.form.attr("aria-label") || x.form.attr("data-name") || "Form";
                x.done.attr("aria-label") || x.form.attr("aria-label", $),
                x.done.attr("tabindex", "-1"),
                x.done.attr("role", "region"),
                x.done.attr("aria-label") || x.done.attr("aria-label", $ + " success"),
                x.fail.attr("tabindex", "-1"),
                x.fail.attr("role", "region"),
                x.fail.attr("aria-label") || x.fail.attr("aria-label", $ + " failure");
                var ee = x.action = S.attr("action");
                if (x.handler = null,
                x.redirect = S.attr("data-redirect"),
                C.test(ee)) {
                    x.handler = re;
                    return
                }
                if (!ee) {
                    if (f) {
                        x.handler = ( () => {
                            let W = qv().default;
                            return W(j, a, jr, G, ce, J, g, k, Z, f, ie, e, I)
                        }
                        )();
                        return
                    }
                    N()
                }
            }
            function z() {
                b = !0,
                i.on("submit", s + " form", function(W) {
                    var p = e.data(this, s);
                    p.handler && (p.evt = W,
                    p.handler(p))
                });
                let h = ".w-checkbox-input"
                  , c = ".w-radio-input"
                  , S = "w--redirected-checked"
                  , x = "w--redirected-focus"
                  , L = "w--redirected-focus-visible"
                  , $ = ":focus-visible, [data-wf-focus-visible]"
                  , ee = [["checkbox", h], ["radio", c]];
                i.on("change", s + ' form input[type="checkbox"]:not(' + h + ")", W => {
                    e(W.target).siblings(h).toggleClass(S)
                }
                ),
                i.on("change", s + ' form input[type="radio"]', W => {
                    e(`input[name="${W.target.name}"]:not(${h})`).map( (X, Q) => e(Q).siblings(c).removeClass(S));
                    let p = e(W.target);
                    p.hasClass("w-radio-input") || p.siblings(c).addClass(S)
                }
                ),
                ee.forEach( ([W,p]) => {
                    i.on("focus", s + ` form input[type="${W}"]:not(` + p + ")", X => {
                        e(X.target).siblings(p).addClass(x),
                        e(X.target).filter($).siblings(p).addClass(L)
                    }
                    ),
                    i.on("blur", s + ` form input[type="${W}"]:not(` + p + ")", X => {
                        e(X.target).siblings(p).removeClass(`${x} ${L}`)
                    }
                    )
                }
                )
            }
            function j(h) {
                var c = h.btn = h.form.find(':input[type="submit"]');
                h.wait = h.btn.attr("data-wait") || null,
                h.success = !1,
                c.prop("disabled", !!(T && !h.turnstileToken)),
                h.label && c.val(h.label)
            }
            function Z(h) {
                var c = h.btn
                  , S = h.wait;
                c.prop("disabled", !0),
                S && (h.label = c.val(),
                c.val(S))
            }
            function J(h, c) {
                var S = null;
                return c = c || {},
                h.find(':input:not([type="submit"]):not([type="file"])').each(function(x, L) {
                    var $ = e(L)
                      , ee = $.attr("type")
                      , W = $.attr("data-name") || $.attr("name") || "Field " + (x + 1);
                    W = encodeURIComponent(W);
                    var p = $.val();
                    if (ee === "checkbox")
                        p = $.is(":checked");
                    else if (ee === "radio") {
                        if (c[W] === null || typeof c[W] == "string")
                            return;
                        p = h.find('input[name="' + $.attr("name") + '"]:checked').val() || null
                    }
                    typeof p == "string" && (p = e.trim(p)),
                    c[W] = p,
                    S = S || Y($, ee, W, p)
                }),
                S
            }
            function k(h) {
                var c = {};
                return h.find(':input[type="file"]').each(function(S, x) {
                    var L = e(x)
                      , $ = L.attr("data-name") || L.attr("name") || "File " + (S + 1)
                      , ee = L.attr("data-value");
                    typeof ee == "string" && (ee = e.trim(ee)),
                    c[$] = ee
                }),
                c
            }
            let A = {
                _mkto_trk: "marketo"
            };
            function G() {
                return document.cookie.split("; ").reduce(function(c, S) {
                    let x = S.split("=")
                      , L = x[0];
                    if (L in A) {
                        let $ = A[L]
                          , ee = x.slice(1).join("=");
                        c[$] = ee
                    }
                    return c
                }, {})
            }
            function Y(h, c, S, x) {
                var L = null;
                return c === "password" ? L = "Passwords cannot be submitted." : h.attr("required") ? x ? y.test(h.attr("type")) && (m.test(x) || (L = "Please enter a valid email address for: " + S)) : L = "Please fill out the required field: " + S : S === "g-recaptcha-response" && !x && (L = "Please confirm you\u2019re not a robot."),
                L
            }
            function K(h) {
                ce(h),
                ie(h)
            }
            function re(h) {
                j(h);
                var c = h.form
                  , S = {};
                if (/^https/.test(a.href) && !/^https/.test(h.action)) {
                    c.attr("method", "post");
                    return
                }
                ce(h);
                var x = J(c, S);
                if (x)
                    return g(x);
                Z(h);
                var L;
                t.each(S, function(p, X) {
                    y.test(X) && (S.EMAIL = p),
                    /^((full[ _-]?)?name)$/i.test(X) && (L = p),
                    /^(first[ _-]?name)$/i.test(X) && (S.FNAME = p),
                    /^(last[ _-]?name)$/i.test(X) && (S.LNAME = p)
                }),
                L && !S.FNAME && (L = L.split(" "),
                S.FNAME = L[0],
                S.LNAME = S.LNAME || L[1]);
                var $ = h.action.replace("/post?", "/post-json?") + "&c=?"
                  , ee = $.indexOf("u=") + 2;
                ee = $.substring(ee, $.indexOf("&", ee));
                var W = $.indexOf("id=") + 3;
                W = $.substring(W, $.indexOf("&", W)),
                S["b_" + ee + "_" + W] = "",
                e.ajax({
                    url: $,
                    data: S,
                    dataType: "jsonp"
                }).done(function(p) {
                    h.success = p.result === "success" || /already/.test(p.msg),
                    h.success || console.info("MailChimp error: " + p.msg),
                    ie(h)
                }).fail(function() {
                    ie(h)
                })
            }
            function ie(h) {
                var c = h.form
                  , S = h.redirect
                  , x = h.success;
                if (x && S) {
                    jr.location(S);
                    return
                }
                h.done.toggle(x),
                h.fail.toggle(!x),
                x ? h.done.focus() : h.fail.focus(),
                c.toggle(!x),
                j(h)
            }
            function ce(h) {
                h.evt && h.evt.preventDefault(),
                h.evt = null
            }
            function Ee(h, c) {
                if (!c.fileUploads || !c.fileUploads[h])
                    return;
                var S, x = e(c.fileUploads[h]), L = x.find("> .w-file-upload-default"), $ = x.find("> .w-file-upload-uploading"), ee = x.find("> .w-file-upload-success"), W = x.find("> .w-file-upload-error"), p = L.find(".w-file-upload-input"), X = L.find(".w-file-upload-label"), Q = X.children(), H = W.find(".w-file-upload-error-msg"), de = ee.find(".w-file-upload-file"), Oe = ee.find(".w-file-remove-link"), ke = de.find(".w-file-upload-file-name"), l = H.attr("data-w-size-error"), _ = H.attr("data-w-type-error"), w = H.attr("data-w-generic-error");
                if (E || X.on("click keydown", function(ne) {
                    ne.type === "keydown" && ne.which !== 13 && ne.which !== 32 || (ne.preventDefault(),
                    p.click())
                }),
                X.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                Oe.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                E)
                    p.on("click", function(ne) {
                        ne.preventDefault()
                    }),
                    X.on("click", function(ne) {
                        ne.preventDefault()
                    }),
                    Q.on("click", function(ne) {
                        ne.preventDefault()
                    });
                else {
                    Oe.on("click keydown", function(ne) {
                        if (ne.type === "keydown") {
                            if (ne.which !== 13 && ne.which !== 32)
                                return;
                            ne.preventDefault()
                        }
                        p.removeAttr("data-value"),
                        p.val(""),
                        ke.html(""),
                        L.toggle(!0),
                        ee.toggle(!1),
                        X.focus()
                    }),
                    p.on("change", function(ne) {
                        S = ne.target && ne.target.files && ne.target.files[0],
                        S && (L.toggle(!1),
                        W.toggle(!1),
                        $.toggle(!0),
                        $.focus(),
                        ke.text(S.name),
                        ae() || Z(c),
                        c.fileUploads[h].uploading = !0,
                        v(S, q))
                    });
                    var P = X.outerHeight();
                    p.height(P),
                    p.width(1)
                }
                function F(ne) {
                    var V = ne.responseJSON && ne.responseJSON.msg
                      , se = w;
                    typeof V == "string" && V.indexOf("InvalidFileTypeError") === 0 ? se = _ : typeof V == "string" && V.indexOf("MaxFileSizeError") === 0 && (se = l),
                    H.text(se),
                    p.removeAttr("data-value"),
                    p.val(""),
                    $.toggle(!1),
                    L.toggle(!0),
                    W.toggle(!0),
                    W.focus(),
                    c.fileUploads[h].uploading = !1,
                    ae() || j(c)
                }
                function q(ne, V) {
                    if (ne)
                        return F(ne);
                    var se = V.fileName
                      , ue = V.postData
                      , _e = V.fileId
                      , Ge = V.s3Url;
                    p.attr("data-value", _e),
                    U(Ge, ue, S, se, te)
                }
                function te(ne) {
                    if (ne)
                        return F(ne);
                    $.toggle(!1),
                    ee.css("display", "inline-block"),
                    ee.focus(),
                    c.fileUploads[h].uploading = !1,
                    ae() || j(c)
                }
                function ae() {
                    var ne = c.fileUploads && c.fileUploads.toArray() || [];
                    return ne.some(function(V) {
                        return V.uploading
                    })
                }
            }
            function v(h, c) {
                var S = new URLSearchParams({
                    name: h.name,
                    size: h.size
                });
                e.ajax({
                    type: "GET",
                    url: `${O}?${S}`,
                    crossDomain: !0
                }).done(function(x) {
                    c(null, x)
                }).fail(function(x) {
                    c(x)
                })
            }
            function U(h, c, S, x, L) {
                var $ = new FormData;
                for (var ee in c)
                    $.append(ee, c[ee]);
                $.append("file", S, x),
                e.ajax({
                    type: "POST",
                    url: h,
                    data: $,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    L(null)
                }).fail(function(W) {
                    L(W)
                })
            }
            return r
        }
        )
    }
    );
    var Uv = d( (qG, Xv) => {
        "use strict";
        var vt = De()
          , LF = rn()
          , we = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        vt.define("navbar", Xv.exports = function(e, t) {
            var n = {}, r = e.tram, i = e(window), o = e(document), a = t.debounce, u, s, f, y, m = vt.env(), g = '<div class="w-nav-overlay" data-wf-ignore />', E = ".w-nav", b = "w--open", I = "w--nav-dropdown-open", O = "w--nav-dropdown-toggle-open", T = "w--nav-dropdown-list-open", R = "w--nav-link-open", C = LF.triggers, N = e();
            n.ready = n.design = n.preview = M,
            n.destroy = function() {
                N = e(),
                D(),
                s && s.length && s.each(Z)
            }
            ;
            function M() {
                f = m && vt.env("design"),
                y = vt.env("editor"),
                u = e(document.body),
                s = o.find(E),
                s.length && (s.each(j),
                D(),
                B())
            }
            function D() {
                vt.resize.off(z)
            }
            function B() {
                vt.resize.on(z)
            }
            function z() {
                s.each(h)
            }
            function j(p, X) {
                var Q = e(X)
                  , H = e.data(X, E);
                H || (H = e.data(X, E, {
                    open: !1,
                    el: Q,
                    config: {},
                    selectedIdx: -1
                })),
                H.menu = Q.find(".w-nav-menu"),
                H.links = H.menu.find(".w-nav-link"),
                H.dropdowns = H.menu.find(".w-dropdown"),
                H.dropdownToggle = H.menu.find(".w-dropdown-toggle"),
                H.dropdownList = H.menu.find(".w-dropdown-list"),
                H.button = Q.find(".w-nav-button"),
                H.container = Q.find(".w-container"),
                H.overlayContainerId = "w-nav-overlay-" + p,
                H.outside = v(H);
                var de = Q.find(".w-nav-brand");
                de && de.attr("href") === "/" && de.attr("aria-label") == null && de.attr("aria-label", "home"),
                H.button.attr("style", "-webkit-user-select: text;"),
                H.button.attr("aria-label") == null && H.button.attr("aria-label", "menu"),
                H.button.attr("role", "button"),
                H.button.attr("tabindex", "0"),
                H.button.attr("aria-controls", H.overlayContainerId),
                H.button.attr("aria-haspopup", "menu"),
                H.button.attr("aria-expanded", "false"),
                H.el.off(E),
                H.button.off(E),
                H.menu.off(E),
                A(H),
                f ? (J(H),
                H.el.on("setting" + E, G(H))) : (k(H),
                H.button.on("click" + E, ce(H)),
                H.menu.on("click" + E, "a", Ee(H)),
                H.button.on("keydown" + E, Y(H)),
                H.el.on("keydown" + E, K(H))),
                h(p, X)
            }
            function Z(p, X) {
                var Q = e.data(X, E);
                Q && (J(Q),
                e.removeData(X, E))
            }
            function J(p) {
                p.overlay && (W(p, !0),
                p.overlay.remove(),
                p.overlay = null)
            }
            function k(p) {
                p.overlay || (p.overlay = e(g).appendTo(p.el),
                p.overlay.attr("id", p.overlayContainerId),
                p.parent = p.menu.parent(),
                W(p, !0))
            }
            function A(p) {
                var X = {}
                  , Q = p.config || {}
                  , H = X.animation = p.el.attr("data-animation") || "default";
                X.animOver = /^over/.test(H),
                X.animDirect = /left$/.test(H) ? -1 : 1,
                Q.animation !== H && p.open && t.defer(ie, p),
                X.easing = p.el.attr("data-easing") || "ease",
                X.easing2 = p.el.attr("data-easing2") || "ease";
                var de = p.el.attr("data-duration");
                X.duration = de != null ? Number(de) : 400,
                X.docHeight = p.el.attr("data-doc-height"),
                p.config = X
            }
            function G(p) {
                return function(X, Q) {
                    Q = Q || {};
                    var H = i.width();
                    A(p),
                    Q.open === !0 && $(p, !0),
                    Q.open === !1 && W(p, !0),
                    p.open && t.defer(function() {
                        H !== i.width() && ie(p)
                    })
                }
            }
            function Y(p) {
                return function(X) {
                    switch (X.keyCode) {
                    case we.SPACE:
                    case we.ENTER:
                        return ce(p)(),
                        X.preventDefault(),
                        X.stopPropagation();
                    case we.ESCAPE:
                        return W(p),
                        X.preventDefault(),
                        X.stopPropagation();
                    case we.ARROW_RIGHT:
                    case we.ARROW_DOWN:
                    case we.HOME:
                    case we.END:
                        return p.open ? (X.keyCode === we.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0,
                        re(p),
                        X.preventDefault(),
                        X.stopPropagation()) : (X.preventDefault(),
                        X.stopPropagation())
                    }
                }
            }
            function K(p) {
                return function(X) {
                    if (p.open)
                        switch (p.selectedIdx = p.links.index(document.activeElement),
                        X.keyCode) {
                        case we.HOME:
                        case we.END:
                            return X.keyCode === we.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0,
                            re(p),
                            X.preventDefault(),
                            X.stopPropagation();
                        case we.ESCAPE:
                            return W(p),
                            p.button.focus(),
                            X.preventDefault(),
                            X.stopPropagation();
                        case we.ARROW_LEFT:
                        case we.ARROW_UP:
                            return p.selectedIdx = Math.max(-1, p.selectedIdx - 1),
                            re(p),
                            X.preventDefault(),
                            X.stopPropagation();
                        case we.ARROW_RIGHT:
                        case we.ARROW_DOWN:
                            return p.selectedIdx = Math.min(p.links.length - 1, p.selectedIdx + 1),
                            re(p),
                            X.preventDefault(),
                            X.stopPropagation()
                        }
                }
            }
            function re(p) {
                if (p.links[p.selectedIdx]) {
                    var X = p.links[p.selectedIdx];
                    X.focus(),
                    Ee(X)
                }
            }
            function ie(p) {
                p.open && (W(p, !0),
                $(p, !0))
            }
            function ce(p) {
                return a(function() {
                    p.open ? W(p) : $(p)
                })
            }
            function Ee(p) {
                return function(X) {
                    var Q = e(this)
                      , H = Q.attr("href");
                    if (!vt.validClick(X.currentTarget)) {
                        X.preventDefault();
                        return
                    }
                    H && H.indexOf("#") === 0 && p.open && W(p)
                }
            }
            function v(p) {
                return p.outside && o.off("click" + E, p.outside),
                function(X) {
                    var Q = e(X.target);
                    y && Q.closest(".w-editor-bem-EditorOverlay").length || U(p, Q)
                }
            }
            var U = a(function(p, X) {
                if (p.open) {
                    var Q = X.closest(".w-nav-menu");
                    p.menu.is(Q) || W(p)
                }
            });
            function h(p, X) {
                var Q = e.data(X, E)
                  , H = Q.collapsed = Q.button.css("display") !== "none";
                if (Q.open && !H && !f && W(Q, !0),
                Q.container.length) {
                    var de = S(Q);
                    Q.links.each(de),
                    Q.dropdowns.each(de)
                }
                Q.open && ee(Q)
            }
            var c = "max-width";
            function S(p) {
                var X = p.container.css(c);
                return X === "none" && (X = ""),
                function(Q, H) {
                    H = e(H),
                    H.css(c, ""),
                    H.css(c) === "none" && H.css(c, X)
                }
            }
            function x(p, X) {
                X.setAttribute("data-nav-menu-open", "")
            }
            function L(p, X) {
                X.removeAttribute("data-nav-menu-open")
            }
            function $(p, X) {
                if (p.open)
                    return;
                p.open = !0,
                p.menu.each(x),
                p.links.addClass(R),
                p.dropdowns.addClass(I),
                p.dropdownToggle.addClass(O),
                p.dropdownList.addClass(T),
                p.button.addClass(b);
                var Q = p.config
                  , H = Q.animation;
                (H === "none" || !r.support.transform || Q.duration <= 0) && (X = !0);
                var de = ee(p)
                  , Oe = p.menu.outerHeight(!0)
                  , ke = p.menu.outerWidth(!0)
                  , l = p.el.height()
                  , _ = p.el[0];
                if (h(0, _),
                C.intro(0, _),
                vt.redraw.up(),
                f || o.on("click" + E, p.outside),
                X) {
                    F();
                    return
                }
                var w = "transform " + Q.duration + "ms " + Q.easing;
                if (p.overlay && (N = p.menu.prev(),
                p.overlay.show().append(p.menu)),
                Q.animOver) {
                    r(p.menu).add(w).set({
                        x: Q.animDirect * ke,
                        height: de
                    }).start({
                        x: 0
                    }).then(F),
                    p.overlay && p.overlay.width(ke);
                    return
                }
                var P = l + Oe;
                r(p.menu).add(w).set({
                    y: -P
                }).start({
                    y: 0
                }).then(F);
                function F() {
                    p.button.attr("aria-expanded", "true")
                }
            }
            function ee(p) {
                var X = p.config
                  , Q = X.docHeight ? o.height() : u.height();
                return X.animOver ? p.menu.height(Q) : p.el.css("position") !== "fixed" && (Q -= p.el.outerHeight(!0)),
                p.overlay && p.overlay.height(Q),
                Q
            }
            function W(p, X) {
                if (!p.open)
                    return;
                p.open = !1,
                p.button.removeClass(b);
                var Q = p.config;
                if ((Q.animation === "none" || !r.support.transform || Q.duration <= 0) && (X = !0),
                C.outro(0, p.el[0]),
                o.off("click" + E, p.outside),
                X) {
                    r(p.menu).stop(),
                    _();
                    return
                }
                var H = "transform " + Q.duration + "ms " + Q.easing2
                  , de = p.menu.outerHeight(!0)
                  , Oe = p.menu.outerWidth(!0)
                  , ke = p.el.height();
                if (Q.animOver) {
                    r(p.menu).add(H).start({
                        x: Oe * Q.animDirect
                    }).then(_);
                    return
                }
                var l = ke + de;
                r(p.menu).add(H).start({
                    y: -l
                }).then(_);
                function _() {
                    p.menu.height(""),
                    r(p.menu).set({
                        x: 0,
                        y: 0
                    }),
                    p.menu.each(L),
                    p.links.removeClass(R),
                    p.dropdowns.removeClass(I),
                    p.dropdownToggle.removeClass(O),
                    p.dropdownList.removeClass(T),
                    p.overlay && p.overlay.children().length && (N.length ? p.menu.insertAfter(N) : p.menu.prependTo(p.parent),
                    p.overlay.attr("style", "").hide()),
                    p.el.triggerHandler("w-close"),
                    p.button.attr("aria-expanded", "false")
                }
            }
            return n
        }
        )
    }
    );
    var Hv = d( (kG, Wv) => {
        "use strict";
        var Et = De()
          , PF = rn()
          , it = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , Vv = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Et.define("slider", Wv.exports = function(e, t) {
            var n = {}, r = e.tram, i = e(document), o, a, u = Et.env(), s = ".w-slider", f = '<div class="w-slider-dot" data-wf-ignore />', y = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', m = "w-slider-force-show", g = PF.triggers, E, b = !1;
            n.ready = function() {
                a = Et.env("design"),
                I()
            }
            ,
            n.design = function() {
                a = !0,
                setTimeout(I, 1e3)
            }
            ,
            n.preview = function() {
                a = !1,
                I()
            }
            ,
            n.redraw = function() {
                b = !0,
                I(),
                b = !1
            }
            ,
            n.destroy = O;
            function I() {
                o = i.find(s),
                o.length && (o.each(C),
                !E && (O(),
                T()))
            }
            function O() {
                Et.resize.off(R),
                Et.redraw.off(n.redraw)
            }
            function T() {
                Et.resize.on(R),
                Et.redraw.on(n.redraw)
            }
            function R() {
                o.filter(":visible").each(K)
            }
            function C(v, U) {
                var h = e(U)
                  , c = e.data(U, s);
                c || (c = e.data(U, s, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: h,
                    config: {}
                })),
                c.mask = h.children(".w-slider-mask"),
                c.left = h.children(".w-slider-arrow-left"),
                c.right = h.children(".w-slider-arrow-right"),
                c.nav = h.children(".w-slider-nav"),
                c.slides = c.mask.children(".w-slide"),
                c.slides.each(g.reset),
                b && (c.maskWidth = 0),
                h.attr("role") === void 0 && h.attr("role", "region"),
                h.attr("aria-label") === void 0 && h.attr("aria-label", "carousel");
                var S = c.mask.attr("id");
                if (S || (S = "w-slider-mask-" + v,
                c.mask.attr("id", S)),
                !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(y).appendTo(c.mask)),
                c.left.attr("role", "button"),
                c.left.attr("tabindex", "0"),
                c.left.attr("aria-controls", S),
                c.left.attr("aria-label") === void 0 && c.left.attr("aria-label", "previous slide"),
                c.right.attr("role", "button"),
                c.right.attr("tabindex", "0"),
                c.right.attr("aria-controls", S),
                c.right.attr("aria-label") === void 0 && c.right.attr("aria-label", "next slide"),
                !r.support.transform) {
                    c.left.hide(),
                    c.right.hide(),
                    c.nav.hide(),
                    E = !0;
                    return
                }
                c.el.off(s),
                c.left.off(s),
                c.right.off(s),
                c.nav.off(s),
                N(c),
                a ? (c.el.on("setting" + s, A(c)),
                k(c),
                c.hasTimer = !1) : (c.el.on("swipe" + s, A(c)),
                c.left.on("click" + s, z(c)),
                c.right.on("click" + s, j(c)),
                c.left.on("keydown" + s, B(c, z)),
                c.right.on("keydown" + s, B(c, j)),
                c.nav.on("keydown" + s, "> div", A(c)),
                c.config.autoplay && !c.hasTimer && (c.hasTimer = !0,
                c.timerCount = 1,
                J(c)),
                c.el.on("mouseenter" + s, D(c, !0, "mouse")),
                c.el.on("focusin" + s, D(c, !0, "keyboard")),
                c.el.on("mouseleave" + s, D(c, !1, "mouse")),
                c.el.on("focusout" + s, D(c, !1, "keyboard"))),
                c.nav.on("click" + s, "> div", A(c)),
                u || c.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var x = h.filter(":hidden");
                x.addClass(m);
                var L = h.parents(":hidden");
                L.addClass(m),
                b || K(v, U),
                x.removeClass(m),
                L.removeClass(m)
            }
            function N(v) {
                var U = {};
                U.crossOver = 0,
                U.animation = v.el.attr("data-animation") || "slide",
                U.animation === "outin" && (U.animation = "cross",
                U.crossOver = .5),
                U.easing = v.el.attr("data-easing") || "ease";
                var h = v.el.attr("data-duration");
                if (U.duration = h != null ? parseInt(h, 10) : 500,
                M(v.el.attr("data-infinite")) && (U.infinite = !0),
                M(v.el.attr("data-disable-swipe")) && (U.disableSwipe = !0),
                M(v.el.attr("data-hide-arrows")) ? U.hideArrows = !0 : v.config.hideArrows && (v.left.show(),
                v.right.show()),
                M(v.el.attr("data-autoplay"))) {
                    U.autoplay = !0,
                    U.delay = parseInt(v.el.attr("data-delay"), 10) || 2e3,
                    U.timerMax = parseInt(v.el.attr("data-autoplay-limit"), 10);
                    var c = "mousedown" + s + " touchstart" + s;
                    a || v.el.off(c).one(c, function() {
                        k(v)
                    })
                }
                var S = v.right.width();
                U.edge = S ? S + 40 : 100,
                v.config = U
            }
            function M(v) {
                return v === "1" || v === "true"
            }
            function D(v, U, h) {
                return function(c) {
                    if (U)
                        v.hasFocus[h] = U;
                    else if (e.contains(v.el.get(0), c.relatedTarget) || (v.hasFocus[h] = U,
                    v.hasFocus.mouse && h === "keyboard" || v.hasFocus.keyboard && h === "mouse"))
                        return;
                    U ? (v.ariaLiveLabel.attr("aria-live", "polite"),
                    v.hasTimer && k(v)) : (v.ariaLiveLabel.attr("aria-live", "off"),
                    v.hasTimer && J(v))
                }
            }
            function B(v, U) {
                return function(h) {
                    switch (h.keyCode) {
                    case it.SPACE:
                    case it.ENTER:
                        return U(v)(),
                        h.preventDefault(),
                        h.stopPropagation()
                    }
                }
            }
            function z(v) {
                return function() {
                    Y(v, {
                        index: v.index - 1,
                        vector: -1
                    })
                }
            }
            function j(v) {
                return function() {
                    Y(v, {
                        index: v.index + 1,
                        vector: 1
                    })
                }
            }
            function Z(v, U) {
                var h = null;
                U === v.slides.length && (I(),
                re(v)),
                t.each(v.anchors, function(c, S) {
                    e(c.els).each(function(x, L) {
                        e(L).index() === U && (h = S)
                    })
                }),
                h != null && Y(v, {
                    index: h,
                    immediate: !0
                })
            }
            function J(v) {
                k(v);
                var U = v.config
                  , h = U.timerMax;
                h && v.timerCount++ > h || (v.timerId = window.setTimeout(function() {
                    v.timerId == null || a || (j(v)(),
                    J(v))
                }, U.delay))
            }
            function k(v) {
                window.clearTimeout(v.timerId),
                v.timerId = null
            }
            function A(v) {
                return function(U, h) {
                    h = h || {};
                    var c = v.config;
                    if (a && U.type === "setting") {
                        if (h.select === "prev")
                            return z(v)();
                        if (h.select === "next")
                            return j(v)();
                        if (N(v),
                        re(v),
                        h.select == null)
                            return;
                        Z(v, h.select);
                        return
                    }
                    if (U.type === "swipe")
                        return c.disableSwipe || Et.env("editor") ? void 0 : h.direction === "left" ? j(v)() : h.direction === "right" ? z(v)() : void 0;
                    if (v.nav.has(U.target).length) {
                        var S = e(U.target).index();
                        if (U.type === "click" && Y(v, {
                            index: S
                        }),
                        U.type === "keydown")
                            switch (U.keyCode) {
                            case it.ENTER:
                            case it.SPACE:
                                {
                                    Y(v, {
                                        index: S
                                    }),
                                    U.preventDefault();
                                    break
                                }
                            case it.ARROW_LEFT:
                            case it.ARROW_UP:
                                {
                                    G(v.nav, Math.max(S - 1, 0)),
                                    U.preventDefault();
                                    break
                                }
                            case it.ARROW_RIGHT:
                            case it.ARROW_DOWN:
                                {
                                    G(v.nav, Math.min(S + 1, v.pages)),
                                    U.preventDefault();
                                    break
                                }
                            case it.HOME:
                                {
                                    G(v.nav, 0),
                                    U.preventDefault();
                                    break
                                }
                            case it.END:
                                {
                                    G(v.nav, v.pages),
                                    U.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function G(v, U) {
                var h = v.children().eq(U).focus();
                v.children().not(h)
            }
            function Y(v, U) {
                U = U || {};
                var h = v.config
                  , c = v.anchors;
                v.previous = v.index;
                var S = U.index
                  , x = {};
                S < 0 ? (S = c.length - 1,
                h.infinite && (x.x = -v.endX,
                x.from = 0,
                x.to = c[0].width)) : S >= c.length && (S = 0,
                h.infinite && (x.x = c[c.length - 1].width,
                x.from = -c[c.length - 1].x,
                x.to = x.from - x.x)),
                v.index = S;
                var L = v.nav.children().eq(S).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                v.nav.children().not(L).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                h.hideArrows && (v.index === c.length - 1 ? v.right.hide() : v.right.show(),
                v.index === 0 ? v.left.hide() : v.left.show());
                var $ = v.offsetX || 0
                  , ee = v.offsetX = -c[v.index].x
                  , W = {
                    x: ee,
                    opacity: 1,
                    visibility: ""
                }
                  , p = e(c[v.index].els)
                  , X = e(c[v.previous] && c[v.previous].els)
                  , Q = v.slides.not(p)
                  , H = h.animation
                  , de = h.easing
                  , Oe = Math.round(h.duration)
                  , ke = U.vector || (v.index > v.previous ? 1 : -1)
                  , l = "opacity " + Oe + "ms " + de
                  , _ = "transform " + Oe + "ms " + de;
                if (p.find(Vv).removeAttr("tabindex"),
                p.removeAttr("aria-hidden"),
                p.find("*").removeAttr("aria-hidden"),
                Q.find(Vv).attr("tabindex", "-1"),
                Q.attr("aria-hidden", "true"),
                Q.find("*").attr("aria-hidden", "true"),
                a || (p.each(g.intro),
                Q.each(g.outro)),
                U.immediate && !b) {
                    r(p).set(W),
                    F();
                    return
                }
                if (v.index === v.previous)
                    return;
                if (a || v.ariaLiveLabel.text(`Slide ${S + 1} of ${c.length}.`),
                H === "cross") {
                    var w = Math.round(Oe - Oe * h.crossOver)
                      , P = Math.round(Oe - w);
                    l = "opacity " + w + "ms " + de,
                    r(X).set({
                        visibility: ""
                    }).add(l).start({
                        opacity: 0
                    }),
                    r(p).set({
                        visibility: "",
                        x: ee,
                        opacity: 0,
                        zIndex: v.depth++
                    }).add(l).wait(P).then({
                        opacity: 1
                    }).then(F);
                    return
                }
                if (H === "fade") {
                    r(X).set({
                        visibility: ""
                    }).stop(),
                    r(p).set({
                        visibility: "",
                        x: ee,
                        opacity: 0,
                        zIndex: v.depth++
                    }).add(l).start({
                        opacity: 1
                    }).then(F);
                    return
                }
                if (H === "over") {
                    W = {
                        x: v.endX
                    },
                    r(X).set({
                        visibility: ""
                    }).stop(),
                    r(p).set({
                        visibility: "",
                        zIndex: v.depth++,
                        x: ee + c[v.index].width * ke
                    }).add(_).start({
                        x: ee
                    }).then(F);
                    return
                }
                h.infinite && x.x ? (r(v.slides.not(X)).set({
                    visibility: "",
                    x: x.x
                }).add(_).start({
                    x: ee
                }),
                r(X).set({
                    visibility: "",
                    x: x.from
                }).add(_).start({
                    x: x.to
                }),
                v.shifted = X) : (h.infinite && v.shifted && (r(v.shifted).set({
                    visibility: "",
                    x: $
                }),
                v.shifted = null),
                r(v.slides).set({
                    visibility: ""
                }).add(_).start({
                    x: ee
                }));
                function F() {
                    p = e(c[v.index].els),
                    Q = v.slides.not(p),
                    H !== "slide" && (W.visibility = "hidden"),
                    r(Q).set(W)
                }
            }
            function K(v, U) {
                var h = e.data(U, s);
                if (h) {
                    if (ce(h))
                        return re(h);
                    a && Ee(h) && re(h)
                }
            }
            function re(v) {
                var U = 1
                  , h = 0
                  , c = 0
                  , S = 0
                  , x = v.maskWidth
                  , L = x - v.config.edge;
                L < 0 && (L = 0),
                v.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                v.slides.each(function(ee, W) {
                    c - h > L && (U++,
                    h += x,
                    v.anchors[U - 1] = {
                        els: [],
                        x: c,
                        width: 0
                    }),
                    S = e(W).outerWidth(!0),
                    c += S,
                    v.anchors[U - 1].width += S,
                    v.anchors[U - 1].els.push(W);
                    var p = ee + 1 + " of " + v.slides.length;
                    e(W).attr("aria-label", p),
                    e(W).attr("role", "group")
                }),
                v.endX = c,
                a && (v.pages = null),
                v.nav.length && v.pages !== U && (v.pages = U,
                ie(v));
                var $ = v.index;
                $ >= U && ($ = U - 1),
                Y(v, {
                    immediate: !0,
                    index: $
                })
            }
            function ie(v) {
                var U = [], h, c = v.el.attr("data-nav-spacing");
                c && (c = parseFloat(c) + "px");
                for (var S = 0, x = v.pages; S < x; S++)
                    h = e(f),
                    h.attr("aria-label", "Show slide " + (S + 1) + " of " + x).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    v.nav.hasClass("w-num") && h.text(S + 1),
                    c != null && h.css({
                        "margin-left": c,
                        "margin-right": c
                    }),
                    U.push(h);
                v.nav.empty().append(U)
            }
            function ce(v) {
                var U = v.mask.width();
                return v.maskWidth !== U ? (v.maskWidth = U,
                !0) : !1
            }
            function Ee(v) {
                var U = 0;
                return v.slides.each(function(h, c) {
                    U += e(c).outerWidth(!0)
                }),
                v.slidesWidth !== U ? (v.slidesWidth = U,
                !0) : !1
            }
            return n
        }
        )
    }
    );
    Oa();
    xa();
    Ca();
    Na();
    rn();
    Sv();
    Rv();
    Lv();
    Nv();
    Fv();
    Gv();
    Uv();
    Hv();
}
)();

Webflow.require('ix2').init({
    "events": {
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf03a|4db19d0f-04e5-84fa-2495-88a836cfe21a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf03a|4db19d0f-04e5-84fa-2495-88a836cfe21a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659458765838
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf03a|4db19d0f-04e5-84fa-2495-88a836cfe21a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf03a|4db19d0f-04e5-84fa-2495-88a836cfe21a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659458765840
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-618"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1643668887055
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-624"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1643668887055
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653387472352
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653387472362
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653387589489
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653387589497
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1663393539812
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1663393539812
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1663393539812
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1663393539812
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "5d852efa-8106-c00b-da3b-afd629aa8cd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5d852efa-8106-c00b-da3b-afd629aa8cd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1664031172708
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "5d852efa-8106-c00b-da3b-afd629aa8cd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5d852efa-8106-c00b-da3b-afd629aa8cd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1664031172710
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-81"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "5d852efa-8106-c00b-da3b-afd629aa8cd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5d852efa-8106-c00b-da3b-afd629aa8cd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1664032121105
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "5d852efa-8106-c00b-da3b-afd629aa8cd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5d852efa-8106-c00b-da3b-afd629aa8cd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1664032121107
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6674f0cdb5b7b401612cf071|104d0b58-d15a-2e87-f133-ea6c415226c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf071|104d0b58-d15a-2e87-f133-ea6c415226c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1664467180945
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6674f0cdb5b7b401612cf071|104d0b58-d15a-2e87-f133-ea6c415226c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf071|104d0b58-d15a-2e87-f133-ea6c415226c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1664467180945
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf071|104d0b58-d15a-2e87-f133-ea6c415226c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf071|104d0b58-d15a-2e87-f133-ea6c415226c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1664467180945
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf071|104d0b58-d15a-2e87-f133-ea6c415226c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf071|104d0b58-d15a-2e87-f133-ea6c415226c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1664467180945
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "5d852efa-8106-c00b-da3b-afd629aa8ccf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5d852efa-8106-c00b-da3b-afd629aa8ccf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1665071261845
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "5d852efa-8106-c00b-da3b-afd629aa8ccf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5d852efa-8106-c00b-da3b-afd629aa8ccf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1665071261846
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6674f0cdb5b7b401612cf079",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf079",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1665136469932
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6674f0cdb5b7b401612cf017",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6674f0cdb5b7b401612cf017",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 97,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-18-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 97,
                "restingState": 50
            }],
            "createdOn": 1665667486044
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1726082135366
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1726082135366
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1726082135366
        },
        "e-102": {
            "id": "e-102",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1726082135366
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1726082135366
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|bcf87d8f-de14-66ce-77c2-9a12fd37b0b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1726082135366
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66e1ec5663942641be63d888|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1726082135366
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66e1ec5663942641be63d888|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1726082135366
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "66e1ec5663942641be63d888|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1726082135366
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "66e1ec5663942641be63d888|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|539bf5a7-6883-cbde-e146-f94462bcb903",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1726082135366
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66e1ec5663942641be63d888",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 97,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-18-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 97,
                "restingState": 50
            }],
            "createdOn": 1726082135366
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66e1ec5663942641be63d888|71709802-b38b-05e0-2222-1051c58d4d84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|71709802-b38b-05e0-2222-1051c58d4d84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648715961688
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66e1ec5663942641be63d888|71709802-b38b-05e0-2222-1051c58d4d84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66e1ec5663942641be63d888|71709802-b38b-05e0-2222-1051c58d4d84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648715961639
        }
    },
    "actionLists": {
        "a-9": {
            "id": "a-9",
            "title": "Hover In Tooltip",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".tooltip_content",
                            "selectorGuids": ["8bd224f3-c375-663f-66da-7f62a5ff0482"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".tooltip_content",
                            "selectorGuids": ["8bd224f3-c375-663f-66da-7f62a5ff0482"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".tooltip_content",
                            "selectorGuids": ["8bd224f3-c375-663f-66da-7f62a5ff0482"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".tooltip_content",
                            "selectorGuids": ["8bd224f3-c375-663f-66da-7f62a5ff0482"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1649889247888
        },
        "a-10": {
            "id": "a-10",
            "title": "Hover Out Tooltip",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".tooltip_content",
                            "selectorGuids": ["8bd224f3-c375-663f-66da-7f62a5ff0482"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".tooltip_content",
                            "selectorGuids": ["8bd224f3-c375-663f-66da-7f62a5ff0482"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1649889340001
        },
        "a-11": {
            "id": "a-11",
            "title": "Navbar 11 [Open Menu]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon1_line-middle",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffca8"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon1_line-bottom",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb8"]
                        },
                        "yValue": -8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon1_line-top",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffca7"]
                        },
                        "yValue": 8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon1_line-top",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffca7"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-11-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon1_line-bottom",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb8"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168378054
        },
        "a-12": {
            "id": "a-12",
            "title": "Navbar 11 [Close Menu]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon1_line-bottom",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb8"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon1_line-top",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffca7"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon1_line-bottom",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb8"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-12-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon1_line-top",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffca7"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "inOutQuint",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon1_line-middle",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffca8"]
                        },
                        "widthValue": 24,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168766736
        },
        "a-13": {
            "id": "a-13",
            "title": "Navbar 11 Dropdown [Open] [Desktop]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar_dropdown-list",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb7"]
                        },
                        "yValue": -0.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar_dropdown-list",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar_dropdown-list",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb7"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar_dropdown-list",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-icon",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcac"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1626241970095
        },
        "a-14": {
            "id": "a-14",
            "title": "Navbar 11 Dropdown [Close] [Desktop]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar_dropdown-list",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-icon",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcac"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar_dropdown-list",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb7"]
                        },
                        "yValue": -0.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626241970095
        },
        "a-15": {
            "id": "a-15",
            "title": "Navbar 11 Dropdown [Open] [Tablet]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar_dropdown-list",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb7"]
                        },
                        "heightValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar_dropdown-list",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb7"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-icon",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcac"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1626241970095
        },
        "a-16": {
            "id": "a-16",
            "title": "Navbar 11 Dropdown [Close] [Tablet]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar_dropdown-list",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcb7"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-icon",
                            "selectorGuids": ["7fdacdd8-d4b7-9c3e-7902-ab92097ffcac"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626241970095
        },
        "a-17": {
            "id": "a-17",
            "title": "Blinking Cursor",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".blinking-cursor_cursor",
                            "selectorGuids": ["ee0bb7e4-a234-07e6-a65a-b6124503e70b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".blinking-cursor_cursor",
                            "selectorGuids": ["ee0bb7e4-a234-07e6-a65a-b6124503e70b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1664465168231
        },
        "a-18": {
            "id": "a-18",
            "title": "Header Mouse Animation",
            "continuousParameterGroups": [{
                "id": "a-18-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-18-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header_floating-langs-item-x-y",
                                "selectorGuids": ["bb70ac84-c789-1d91-7850-64cbe2677183"]
                            },
                            "xValue": -6,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-18-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header_floating-langs-item-x-y",
                                "selectorGuids": ["bb70ac84-c789-1d91-7850-64cbe2677183"]
                            },
                            "xValue": 6,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-18-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-18-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header_floating-langs-item-x-y",
                                "selectorGuids": ["bb70ac84-c789-1d91-7850-64cbe2677183"]
                            },
                            "yValue": -6,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-18-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header_floating-langs-item-x-y",
                                "selectorGuids": ["bb70ac84-c789-1d91-7850-64cbe2677183"]
                            },
                            "yValue": 6,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1665145622336
        },
        "a-20": {
            "id": "a-20",
            "title": "FAQ 2 accordion [Close]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq2_answer",
                            "selectorGuids": ["22f582e3-47d3-a2a8-7b3b-db087062ea4d"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq2_icon-wrapper",
                            "selectorGuids": ["22f582e3-47d3-a2a8-7b3b-db087062ea4b"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1628306749914
        },
        "a-19": {
            "id": "a-19",
            "title": "FAQ 2 accordion [Open]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq2_answer",
                            "selectorGuids": ["22f582e3-47d3-a2a8-7b3b-db087062ea4d"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq2_answer",
                            "selectorGuids": ["22f582e3-47d3-a2a8-7b3b-db087062ea4d"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq2_icon-wrapper",
                            "selectorGuids": ["22f582e3-47d3-a2a8-7b3b-db087062ea4b"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1628306749914
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
