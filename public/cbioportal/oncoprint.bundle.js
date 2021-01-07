module.exports = function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {i: r, l: !1, exports: {}};
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
            return t[e]
        }.bind(null, i));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 18)
}([function (t, e, n) {
    var r;
    /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
    !function (e, n) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, (function (n, i) {
        "use strict";
        var o = [], a = Object.getPrototypeOf, s = o.slice, l = o.flat ? function (t) {
                return o.flat.call(t)
            } : function (t) {
                return o.concat.apply([], t)
            }, u = o.push, c = o.indexOf, h = {}, f = h.toString, d = h.hasOwnProperty, p = d.toString, g = p.call(Object),
            _ = {}, m = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            }, v = function (t) {
                return null != t && t === t.window
            }, y = n.document, b = {type: !0, src: !0, nonce: !0, noModule: !0};

        function x(t, e, n) {
            var r, i, o = (n = n || y).createElement("script");
            if (o.text = t, e) for (r in b) (i = e[r] || e.getAttribute && e.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function w(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[f.call(t)] || "object" : typeof t
        }

        var k = function (t, e) {
            return new k.fn.init(t, e)
        };

        function S(t) {
            var e = !!t && "length" in t && t.length, n = w(t);
            return !m(t) && !v(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        k.fn = k.prototype = {
            jquery: "3.5.1", constructor: k, length: 0, toArray: function () {
                return s.call(this)
            }, get: function (t) {
                return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
            }, pushStack: function (t) {
                var e = k.merge(this.constructor(), t);
                return e.prevObject = this, e
            }, each: function (t) {
                return k.each(this, t)
            }, map: function (t) {
                return this.pushStack(k.map(this, (function (e, n) {
                    return t.call(e, n, e)
                })))
            }, slice: function () {
                return this.pushStack(s.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, even: function () {
                return this.pushStack(k.grep(this, (function (t, e) {
                    return (e + 1) % 2
                })))
            }, odd: function () {
                return this.pushStack(k.grep(this, (function (t, e) {
                    return e % 2
                })))
            }, eq: function (t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: u, sort: o.sort, splice: o.splice
        }, k.extend = k.fn.extend = function () {
            var t, e, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (t = arguments[s])) for (e in t) r = t[e], "__proto__" !== e && a !== r && (u && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[e], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[e] = k.extend(u, o, r)) : void 0 !== r && (a[e] = r));
            return a
        }, k.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== f.call(t)) && (!(e = a(t)) || "function" == typeof (n = d.call(e, "constructor") && e.constructor) && p.call(n) === g)
            }, isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }, globalEval: function (t, e, n) {
                x(t, {nonce: e && e.nonce}, n)
            }, each: function (t, e) {
                var n, r = 0;
                if (S(t)) for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++) ; else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
                return t
            }, makeArray: function (t, e) {
                var n = e || [];
                return null != t && (S(Object(t)) ? k.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)), n
            }, inArray: function (t, e, n) {
                return null == e ? -1 : c.call(e, t, n)
            }, merge: function (t, e) {
                for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
                return t.length = i, t
            }, grep: function (t, e, n) {
                for (var r = [], i = 0, o = t.length, a = !n; i < o; i++) !e(t[i], i) !== a && r.push(t[i]);
                return r
            }, map: function (t, e, n) {
                var r, i, o = 0, a = [];
                if (S(t)) for (r = t.length; o < r; o++) null != (i = e(t[o], o, n)) && a.push(i); else for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
                return l(a)
            }, guid: 1, support: _
        }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = o[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (t, e) {
            h["[object " + e + "]"] = e.toLowerCase()
        }));
        var M =
            /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
            function (t) {
                var e, n, r, i, o, a, s, l, u, c, h, f, d, p, g, _, m, v, y, b = "sizzle" + 1 * new Date,
                    x = t.document, w = 0, k = 0, S = lt(), M = lt(), T = lt(), I = lt(), C = function (t, e) {
                        return t === e && (h = !0), 0
                    }, A = {}.hasOwnProperty, D = [], z = D.pop, O = D.push, L = D.push, R = D.slice, E = function (t, e) {
                        for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                        return -1
                    },
                    F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    N = "[\\x20\\t\\r\\n\\f]",
                    P = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    j = "\\[" + N + "*(" + P + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + N + "*\\]",
                    H = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
                    V = new RegExp(N + "+", "g"),
                    $ = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                    B = new RegExp("^" + N + "*," + N + "*"), q = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                    G = new RegExp(N + "|>"), W = new RegExp(H), U = new RegExp("^" + P + "$"), Z = {
                        ID: new RegExp("^#(" + P + ")"),
                        CLASS: new RegExp("^\\.(" + P + ")"),
                        TAG: new RegExp("^(" + P + "|[*])"),
                        ATTR: new RegExp("^" + j),
                        PSEUDO: new RegExp("^" + H),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + F + ")$", "i"),
                        needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
                    }, Y = /HTML$/i, X = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
                    K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/,
                    et = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g"), nt = function (t, e) {
                        var n = "0x" + t.slice(1) - 65536;
                        return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    }, rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, it = function (t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    }, ot = function () {
                        f()
                    }, at = bt((function (t) {
                        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                    }), {dir: "parentNode", next: "legend"});
                try {
                    L.apply(D = R.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType
                } catch (t) {
                    L = {
                        apply: D.length ? function (t, e) {
                            O.apply(t, R.call(e))
                        } : function (t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++];) ;
                            t.length = n - 1
                        }
                    }
                }

                function st(t, e, r, i) {
                    var o, s, u, c, h, p, m, v = e && e.ownerDocument, x = e ? e.nodeType : 9;
                    if (r = r || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return r;
                    if (!i && (f(e), e = e || d, g)) {
                        if (11 !== x && (h = K.exec(t))) if (o = h[1]) {
                            if (9 === x) {
                                if (!(u = e.getElementById(o))) return r;
                                if (u.id === o) return r.push(u), r
                            } else if (v && (u = v.getElementById(o)) && y(e, u) && u.id === o) return r.push(u), r
                        } else {
                            if (h[2]) return L.apply(r, e.getElementsByTagName(t)), r;
                            if ((o = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(r, e.getElementsByClassName(o)), r
                        }
                        if (n.qsa && !I[t + " "] && (!_ || !_.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                            if (m = t, v = e, 1 === x && (G.test(t) || q.test(t))) {
                                for ((v = tt.test(t) && mt(e.parentNode) || e) === e && n.scope || ((c = e.getAttribute("id")) ? c = c.replace(rt, it) : e.setAttribute("id", c = b)), s = (p = a(t)).length; s--;) p[s] = (c ? "#" + c : ":scope") + " " + yt(p[s]);
                                m = p.join(",")
                            }
                            try {
                                return L.apply(r, v.querySelectorAll(m)), r
                            } catch (e) {
                                I(t, !0)
                            } finally {
                                c === b && e.removeAttribute("id")
                            }
                        }
                    }
                    return l(t.replace($, "$1"), e, r, i)
                }

                function lt() {
                    var t = [];
                    return function e(n, i) {
                        return t.push(n + " ") > r.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }
                }

                function ut(t) {
                    return t[b] = !0, t
                }

                function ct(t) {
                    var e = d.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ht(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = e
                }

                function ft(t, e) {
                    var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (r) return r;
                    if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                    return t ? 1 : -1
                }

                function dt(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function pt(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function gt(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function _t(t) {
                    return ut((function (e) {
                        return e = +e, ut((function (n, r) {
                            for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        }))
                    }))
                }

                function mt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                for (e in n = st.support = {}, o = st.isXML = function (t) {
                    var e = t.namespaceURI, n = (t.ownerDocument || t).documentElement;
                    return !Y.test(e || n && n.nodeName || "HTML")
                }, f = st.setDocument = function (t) {
                    var e, i, a = t ? t.ownerDocument || t : x;
                    return a != d && 9 === a.nodeType && a.documentElement ? (p = (d = a).documentElement, g = !o(d), x != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ot, !1) : i.attachEvent && i.attachEvent("onunload", ot)), n.scope = ct((function (t) {
                        return p.appendChild(t).appendChild(d.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                    })), n.attributes = ct((function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    })), n.getElementsByTagName = ct((function (t) {
                        return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
                    })), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ct((function (t) {
                        return p.appendChild(t).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                    })), n.getById ? (r.filter.ID = function (t) {
                        var e = t.replace(et, nt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }, r.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function (t) {
                        var e = t.replace(et, nt);
                        return function (t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }, r.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var n, r, i, o = e.getElementById(t);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                for (i = e.getElementsByName(t), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, r = [], i = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                    }, m = [], _ = [], (n.qsa = Q.test(d.querySelectorAll)) && (ct((function (t) {
                        var e;
                        p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || _.push("\\[" + N + "*(?:value|" + F + ")"), t.querySelectorAll("[id~=" + b + "-]").length || _.push("~="), (e = d.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || _.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || _.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || _.push(".#.+[+~]"), t.querySelectorAll("\\\f"), _.push("[\\r\\n\\f]")
                    })), ct((function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = d.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && _.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && _.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && _.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), _.push(",.*:")
                    }))), (n.matchesSelector = Q.test(v = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ct((function (t) {
                        n.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), m.push("!=", H)
                    })), _ = _.length && new RegExp(_.join("|")), m = m.length && new RegExp(m.join("|")), e = Q.test(p.compareDocumentPosition), y = e || Q.test(p.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    } : function (t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return !0;
                        return !1
                    }, C = e ? function (t, e) {
                        if (t === e) return h = !0, 0;
                        var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return r || (1 & (r = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === r ? t == d || t.ownerDocument == x && y(x, t) ? -1 : e == d || e.ownerDocument == x && y(x, e) ? 1 : c ? E(c, t) - E(c, e) : 0 : 4 & r ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return h = !0, 0;
                        var n, r = 0, i = t.parentNode, o = e.parentNode, a = [t], s = [e];
                        if (!i || !o) return t == d ? -1 : e == d ? 1 : i ? -1 : o ? 1 : c ? E(c, t) - E(c, e) : 0;
                        if (i === o) return ft(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? ft(a[r], s[r]) : a[r] == x ? -1 : s[r] == x ? 1 : 0
                    }, d) : d
                }, st.matches = function (t, e) {
                    return st(t, null, null, e)
                }, st.matchesSelector = function (t, e) {
                    if (f(t), n.matchesSelector && g && !I[e + " "] && (!m || !m.test(e)) && (!_ || !_.test(e))) try {
                        var r = v.call(t, e);
                        if (r || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                    } catch (t) {
                        I(e, !0)
                    }
                    return st(e, d, null, [t]).length > 0
                }, st.contains = function (t, e) {
                    return (t.ownerDocument || t) != d && f(t), y(t, e)
                }, st.attr = function (t, e) {
                    (t.ownerDocument || t) != d && f(t);
                    var i = r.attrHandle[e.toLowerCase()],
                        o = i && A.call(r.attrHandle, e.toLowerCase()) ? i(t, e, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                }, st.escape = function (t) {
                    return (t + "").replace(rt, it)
                }, st.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, st.uniqueSort = function (t) {
                    var e, r = [], i = 0, o = 0;
                    if (h = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(C), h) {
                        for (; e = t[o++];) e === t[o] && (i = r.push(o));
                        for (; i--;) t.splice(r[i], 1)
                    }
                    return c = null, t
                }, i = st.getText = function (t) {
                    var e, n = "", r = 0, o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += i(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else for (; e = t[r++];) n += i(e);
                    return n
                }, (r = st.selectors = {
                    cacheLength: 50,
                    createPseudo: ut,
                    match: Z,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return Z.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && W.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(et, nt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = S[t + " "];
                            return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && S(t, (function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            }))
                        }, ATTR: function (t, e, n) {
                            return function (r) {
                                var i = st.attr(r, t);
                                return null == i ? "!=" === e : !e || (i += "", "=" === e ? i === n : "!=" === e ? i !== n : "^=" === e ? n && 0 === i.indexOf(n) : "*=" === e ? n && i.indexOf(n) > -1 : "$=" === e ? n && i.slice(-n.length) === n : "~=" === e ? (" " + i.replace(V, " ") + " ").indexOf(n) > -1 : "|=" === e && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        }, CHILD: function (t, e, n, r, i) {
                            var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                            return 1 === r && 0 === i ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, l) {
                                var u, c, h, f, d, p, g = o !== a ? "nextSibling" : "previousSibling", _ = e.parentNode,
                                    m = s && e.nodeName.toLowerCase(), v = !l && !s, y = !1;
                                if (_) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = e; f = f[g];) if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? _.firstChild : _.lastChild], a && v) {
                                        for (y = (d = (u = (c = (h = (f = _)[b] || (f[b] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === w && u[1]) && u[2], f = d && _.childNodes[d]; f = ++d && f && f[g] || (y = d = 0) || p.pop();) if (1 === f.nodeType && ++y && f === e) {
                                            c[t] = [w, d, y];
                                            break
                                        }
                                    } else if (v && (y = d = (u = (c = (h = (f = e)[b] || (f[b] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === w && u[1]), !1 === y) for (; (f = ++d && f && f[g] || (y = d = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++y || (v && ((c = (h = f[b] || (f[b] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] = [w, y]), f !== e));) ;
                                    return (y -= i) === r || y % r == 0 && y / r >= 0
                                }
                            }
                        }, PSEUDO: function (t, e) {
                            var n,
                                i = r.pseudos[t] || r.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                            return i[b] ? i(e) : i.length > 1 ? (n = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? ut((function (t, n) {
                                for (var r, o = i(t, e), a = o.length; a--;) t[r = E(t, o[a])] = !(n[r] = o[a])
                            })) : function (t) {
                                return i(t, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: ut((function (t) {
                            var e = [], n = [], r = s(t.replace($, "$1"));
                            return r[b] ? ut((function (t, e, n, i) {
                                for (var o, a = r(t, null, i, []), s = t.length; s--;) (o = a[s]) && (t[s] = !(e[s] = o))
                            })) : function (t, i, o) {
                                return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                            }
                        })), has: ut((function (t) {
                            return function (e) {
                                return st(t, e).length > 0
                            }
                        })), contains: ut((function (t) {
                            return t = t.replace(et, nt), function (e) {
                                return (e.textContent || i(e)).indexOf(t) > -1
                            }
                        })), lang: ut((function (t) {
                            return U.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(), function (e) {
                                var n;
                                do {
                                    if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        })), target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function (t) {
                            return t === p
                        }, focus: function (t) {
                            return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: gt(!1), disabled: gt(!0), checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        }, parent: function (t) {
                            return !r.pseudos.empty(t)
                        }, header: function (t) {
                            return J.test(t.nodeName)
                        }, input: function (t) {
                            return X.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: _t((function () {
                            return [0]
                        })), last: _t((function (t, e) {
                            return [e - 1]
                        })), eq: _t((function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        })), even: _t((function (t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        })), odd: _t((function (t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        })), lt: _t((function (t, e, n) {
                            for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0;) t.push(r);
                            return t
                        })), gt: _t((function (t, e, n) {
                            for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                            return t
                        }))
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[e] = dt(e);
                for (e in {submit: !0, reset: !0}) r.pseudos[e] = pt(e);

                function vt() {
                }

                function yt(t) {
                    for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
                    return r
                }

                function bt(t, e, n) {
                    var r = e.dir, i = e.next, o = i || r, a = n && "parentNode" === o, s = k++;
                    return e.first ? function (e, n, i) {
                        for (; e = e[r];) if (1 === e.nodeType || a) return t(e, n, i);
                        return !1
                    } : function (e, n, l) {
                        var u, c, h, f = [w, s];
                        if (l) {
                            for (; e = e[r];) if ((1 === e.nodeType || a) && t(e, n, l)) return !0
                        } else for (; e = e[r];) if (1 === e.nodeType || a) if (c = (h = e[b] || (e[b] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), i && i === e.nodeName.toLowerCase()) e = e[r] || e; else {
                            if ((u = c[o]) && u[0] === w && u[1] === s) return f[2] = u[2];
                            if (c[o] = f, f[2] = t(e, n, l)) return !0
                        }
                        return !1
                    }
                }

                function xt(t) {
                    return t.length > 1 ? function (e, n, r) {
                        for (var i = t.length; i--;) if (!t[i](e, n, r)) return !1;
                        return !0
                    } : t[0]
                }

                function wt(t, e, n, r, i) {
                    for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++) (o = t[s]) && (n && !n(o, r, i) || (a.push(o), u && e.push(s)));
                    return a
                }

                function kt(t, e, n, r, i, o) {
                    return r && !r[b] && (r = kt(r)), i && !i[b] && (i = kt(i, o)), ut((function (o, a, s, l) {
                        var u, c, h, f = [], d = [], p = a.length, g = o || function (t, e, n) {
                                for (var r = 0, i = e.length; r < i; r++) st(t, e[r], n);
                                return n
                            }(e || "*", s.nodeType ? [s] : s, []), _ = !t || !o && e ? g : wt(g, f, t, s, l),
                            m = n ? i || (o ? t : p || r) ? [] : a : _;
                        if (n && n(_, m, s, l), r) for (u = wt(m, d), r(u, [], s, l), c = u.length; c--;) (h = u[c]) && (m[d[c]] = !(_[d[c]] = h));
                        if (o) {
                            if (i || t) {
                                if (i) {
                                    for (u = [], c = m.length; c--;) (h = m[c]) && u.push(_[c] = h);
                                    i(null, m = [], u, l)
                                }
                                for (c = m.length; c--;) (h = m[c]) && (u = i ? E(o, h) : f[c]) > -1 && (o[u] = !(a[u] = h))
                            }
                        } else m = wt(m === a ? m.splice(p, m.length) : m), i ? i(null, a, m, l) : L.apply(a, m)
                    }))
                }

                function St(t) {
                    for (var e, n, i, o = t.length, a = r.relative[t[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = bt((function (t) {
                        return t === e
                    }), s, !0), h = bt((function (t) {
                        return E(e, t) > -1
                    }), s, !0), f = [function (t, n, r) {
                        var i = !a && (r || n !== u) || ((e = n).nodeType ? c(t, n, r) : h(t, n, r));
                        return e = null, i
                    }]; l < o; l++) if (n = r.relative[t[l].type]) f = [bt(xt(f), n)]; else {
                        if ((n = r.filter[t[l].type].apply(null, t[l].matches))[b]) {
                            for (i = ++l; i < o && !r.relative[t[i].type]; i++) ;
                            return kt(l > 1 && xt(f), l > 1 && yt(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace($, "$1"), n, l < i && St(t.slice(l, i)), i < o && St(t = t.slice(i)), i < o && yt(t))
                        }
                        f.push(n)
                    }
                    return xt(f)
                }

                return vt.prototype = r.filters = r.pseudos, r.setFilters = new vt, a = st.tokenize = function (t, e) {
                    var n, i, o, a, s, l, u, c = M[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (s = t, l = [], u = r.preFilter; s;) {
                        for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = q.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace($, " ")
                        }), s = s.slice(n.length)), r.filter) !(i = Z[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return e ? s.length : s ? st.error(t) : M(t, l).slice(0)
                }, s = st.compile = function (t, e) {
                    var n, i = [], o = [], s = T[t + " "];
                    if (!s) {
                        for (e || (e = a(t)), n = e.length; n--;) (s = St(e[n]))[b] ? i.push(s) : o.push(s);
                        (s = T(t, function (t, e) {
                            var n = e.length > 0, i = t.length > 0, o = function (o, a, s, l, c) {
                                var h, p, _, m = 0, v = "0", y = o && [], b = [], x = u,
                                    k = o || i && r.find.TAG("*", c), S = w += null == x ? 1 : Math.random() || .1,
                                    M = k.length;
                                for (c && (u = a == d || a || c); v !== M && null != (h = k[v]); v++) {
                                    if (i && h) {
                                        for (p = 0, a || h.ownerDocument == d || (f(h), s = !g); _ = t[p++];) if (_(h, a || d, s)) {
                                            l.push(h);
                                            break
                                        }
                                        c && (w = S)
                                    }
                                    n && ((h = !_ && h) && m--, o && y.push(h))
                                }
                                if (m += v, n && v !== m) {
                                    for (p = 0; _ = e[p++];) _(y, b, a, s);
                                    if (o) {
                                        if (m > 0) for (; v--;) y[v] || b[v] || (b[v] = z.call(l));
                                        b = wt(b)
                                    }
                                    L.apply(l, b), c && !o && b.length > 0 && m + e.length > 1 && st.uniqueSort(l)
                                }
                                return c && (w = S, u = x), y
                            };
                            return n ? ut(o) : o
                        }(o, i))).selector = t
                    }
                    return s
                }, l = st.select = function (t, e, n, i) {
                    var o, l, u, c, h, f = "function" == typeof t && t, d = !i && a(t = f.selector || t);
                    if (n = n || [], 1 === d.length) {
                        if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && r.relative[l[1].type]) {
                            if (!(e = (r.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                            f && (e = e.parentNode), t = t.slice(l.shift().value.length)
                        }
                        for (o = Z.needsContext.test(t) ? 0 : l.length; o-- && (u = l[o], !r.relative[c = u.type]);) if ((h = r.find[c]) && (i = h(u.matches[0].replace(et, nt), tt.test(l[0].type) && mt(e.parentNode) || e))) {
                            if (l.splice(o, 1), !(t = i.length && yt(l))) return L.apply(n, i), n;
                            break
                        }
                    }
                    return (f || s(t, d))(i, e, !g, n, !e || tt.test(t) && mt(e.parentNode) || e), n
                }, n.sortStable = b.split("").sort(C).join("") === b, n.detectDuplicates = !!h, f(), n.sortDetached = ct((function (t) {
                    return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
                })), ct((function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                })) || ht("type|href|height|width", (function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                })), n.attributes && ct((function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                })) || ht("value", (function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                })), ct((function (t) {
                    return null == t.getAttribute("disabled")
                })) || ht(F, (function (t, e, n) {
                    var r;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                })), st
            }(n);
        k.find = M, k.expr = M.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = M.uniqueSort, k.text = M.getText, k.isXMLDoc = M.isXML, k.contains = M.contains, k.escapeSelector = M.escape;
        var T = function (t, e, n) {
            for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (i && k(t).is(n)) break;
                r.push(t)
            }
            return r
        }, I = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }, C = k.expr.match.needsContext;

        function A(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function z(t, e, n) {
            return m(e) ? k.grep(t, (function (t, r) {
                return !!e.call(t, r, t) !== n
            })) : e.nodeType ? k.grep(t, (function (t) {
                return t === e !== n
            })) : "string" != typeof e ? k.grep(t, (function (t) {
                return c.call(e, t) > -1 !== n
            })) : k.filter(e, t, n)
        }

        k.filter = function (t, e, n) {
            var r = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? k.find.matchesSelector(r, t) ? [r] : [] : k.find.matches(t, k.grep(e, (function (t) {
                return 1 === t.nodeType
            })))
        }, k.fn.extend({
            find: function (t) {
                var e, n, r = this.length, i = this;
                if ("string" != typeof t) return this.pushStack(k(t).filter((function () {
                    for (e = 0; e < r; e++) if (k.contains(i[e], this)) return !0
                })));
                for (n = this.pushStack([]), e = 0; e < r; e++) k.find(t, i[e], n);
                return r > 1 ? k.uniqueSort(n) : n
            }, filter: function (t) {
                return this.pushStack(z(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(z(this, t || [], !0))
            }, is: function (t) {
                return !!z(this, "string" == typeof t && C.test(t) ? k(t) : t || [], !1).length
            }
        });
        var O, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (k.fn.init = function (t, e, n) {
            var r, i;
            if (!t) return this;
            if (n = n || O, "string" == typeof t) {
                if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : L.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof k ? e[0] : e, k.merge(this, k.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : y, !0)), D.test(r[1]) && k.isPlainObject(e)) for (r in e) m(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                return (i = y.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(k) : k.makeArray(t, this)
        }).prototype = k.fn, O = k(y);
        var R = /^(?:parents|prev(?:Until|All))/, E = {children: !0, contents: !0, next: !0, prev: !0};

        function F(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;) ;
            return t
        }

        k.fn.extend({
            has: function (t) {
                var e = k(t, this), n = e.length;
                return this.filter((function () {
                    for (var t = 0; t < n; t++) if (k.contains(this, e[t])) return !0
                }))
            }, closest: function (t, e) {
                var n, r = 0, i = this.length, o = [], a = "string" != typeof t && k(t);
                if (!C.test(t)) for (; r < i; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, t))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o)
            }, index: function (t) {
                return t ? "string" == typeof t ? c.call(k(t), this[0]) : c.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), k.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return T(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return T(t, "parentNode", n)
            }, next: function (t) {
                return F(t, "nextSibling")
            }, prev: function (t) {
                return F(t, "previousSibling")
            }, nextAll: function (t) {
                return T(t, "nextSibling")
            }, prevAll: function (t) {
                return T(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return T(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return T(t, "previousSibling", n)
            }, siblings: function (t) {
                return I((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return I(t.firstChild)
            }, contents: function (t) {
                return null != t.contentDocument && a(t.contentDocument) ? t.contentDocument : (A(t, "template") && (t = t.content || t), k.merge([], t.childNodes))
            }
        }, (function (t, e) {
            k.fn[t] = function (n, r) {
                var i = k.map(this, e, n);
                return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = k.filter(r, i)), this.length > 1 && (E[t] || k.uniqueSort(i), R.test(t) && i.reverse()), this.pushStack(i)
            }
        }));
        var N = /[^\x20\t\r\n\f]+/g;

        function P(t) {
            return t
        }

        function j(t) {
            throw t
        }

        function H(t, e, n, r) {
            var i;
            try {
                t && m(i = t.promise) ? i.call(t).done(e).fail(n) : t && m(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [t].slice(r))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }

        k.Callbacks = function (t) {
            t = "string" == typeof t ? function (t) {
                var e = {};
                return k.each(t.match(N) || [], (function (t, n) {
                    e[n] = !0
                })), e
            }(t) : k.extend({}, t);
            var e, n, r, i, o = [], a = [], s = -1, l = function () {
                for (i = i || t.once, r = e = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && (s = o.length, n = !1);
                t.memory || (n = !1), e = !1, i && (o = n ? [] : "")
            }, u = {
                add: function () {
                    return o && (n && !e && (s = o.length - 1, a.push(n)), function e(n) {
                        k.each(n, (function (n, r) {
                            m(r) ? t.unique && u.has(r) || o.push(r) : r && r.length && "string" !== w(r) && e(r)
                        }))
                    }(arguments), n && !e && l()), this
                }, remove: function () {
                    return k.each(arguments, (function (t, e) {
                        for (var n; (n = k.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    })), this
                }, has: function (t) {
                    return t ? k.inArray(t, o) > -1 : o.length > 0
                }, empty: function () {
                    return o && (o = []), this
                }, disable: function () {
                    return i = a = [], o = n = "", this
                }, disabled: function () {
                    return !o
                }, lock: function () {
                    return i = a = [], n || e || (o = n = ""), this
                }, locked: function () {
                    return !!i
                }, fireWith: function (t, n) {
                    return i || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || l()), this
                }, fire: function () {
                    return u.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return u
        }, k.extend({
            Deferred: function (t) {
                var e = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
                    r = "pending", i = {
                        state: function () {
                            return r
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, catch: function (t) {
                            return i.then(null, t)
                        }, pipe: function () {
                            var t = arguments;
                            return k.Deferred((function (n) {
                                k.each(e, (function (e, r) {
                                    var i = m(t[r[4]]) && t[r[4]];
                                    o[r[1]]((function () {
                                        var t = i && i.apply(this, arguments);
                                        t && m(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [t] : arguments)
                                    }))
                                })), t = null
                            })).promise()
                        }, then: function (t, r, i) {
                            var o = 0;

                            function a(t, e, r, i) {
                                return function () {
                                    var s = this, l = arguments, u = function () {
                                        var n, u;
                                        if (!(t < o)) {
                                            if ((n = r.apply(s, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                            u = n && ("object" == typeof n || "function" == typeof n) && n.then, m(u) ? i ? u.call(n, a(o, e, P, i), a(o, e, j, i)) : (o++, u.call(n, a(o, e, P, i), a(o, e, j, i), a(o, e, P, e.notifyWith))) : (r !== P && (s = void 0, l = [n]), (i || e.resolveWith)(s, l))
                                        }
                                    }, c = i ? u : function () {
                                        try {
                                            u()
                                        } catch (n) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= o && (r !== j && (s = void 0, l = [n]), e.rejectWith(s, l))
                                        }
                                    };
                                    t ? c() : (k.Deferred.getStackHook && (c.stackTrace = k.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }

                            return k.Deferred((function (n) {
                                e[0][3].add(a(0, n, m(i) ? i : P, n.notifyWith)), e[1][3].add(a(0, n, m(t) ? t : P)), e[2][3].add(a(0, n, m(r) ? r : j))
                            })).promise()
                        }, promise: function (t) {
                            return null != t ? k.extend(t, i) : i
                        }
                    }, o = {};
                return k.each(e, (function (t, n) {
                    var a = n[2], s = n[5];
                    i[n[1]] = a.add, s && a.add((function () {
                        r = s
                    }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), a.add(n[3].fire), o[n[0]] = function () {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = a.fireWith
                })), i.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e = arguments.length, n = e, r = Array(n), i = s.call(arguments), o = k.Deferred(),
                    a = function (t) {
                        return function (n) {
                            r[t] = this, i[t] = arguments.length > 1 ? s.call(arguments) : n, --e || o.resolveWith(r, i)
                        }
                    };
                if (e <= 1 && (H(t, o.done(a(n)).resolve, o.reject, !e), "pending" === o.state() || m(i[n] && i[n].then))) return o.then();
                for (; n--;) H(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        k.Deferred.exceptionHook = function (t, e) {
            n.console && n.console.warn && t && V.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, k.readyException = function (t) {
            n.setTimeout((function () {
                throw t
            }))
        };
        var $ = k.Deferred();

        function B() {
            y.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), k.ready()
        }

        k.fn.ready = function (t) {
            return $.then(t).catch((function (t) {
                k.readyException(t)
            })), this
        }, k.extend({
            isReady: !1, readyWait: 1, ready: function (t) {
                (!0 === t ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== t && --k.readyWait > 0 || $.resolveWith(y, [k]))
            }
        }), k.ready.then = $.then, "complete" === y.readyState || "loading" !== y.readyState && !y.documentElement.doScroll ? n.setTimeout(k.ready) : (y.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));
        var q = function (t, e, n, r, i, o, a) {
            var s = 0, l = t.length, u = null == n;
            if ("object" === w(n)) for (s in i = !0, n) q(t, e, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), u && (a ? (e.call(t, r), e = null) : (u = e, e = function (t, e, n) {
                return u.call(k(t), n)
            })), e)) for (; s < l; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
            return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
        }, G = /^-ms-/, W = /-([a-z])/g;

        function U(t, e) {
            return e.toUpperCase()
        }

        function Z(t) {
            return t.replace(G, "ms-").replace(W, U)
        }

        var Y = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function X() {
            this.expando = k.expando + X.uid++
        }

        X.uid = 1, X.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, Y(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            }, set: function (t, e, n) {
                var r, i = this.cache(t);
                if ("string" == typeof e) i[Z(e)] = n; else for (r in e) i[Z(r)] = e[r];
                return i
            }, get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Z(e)]
            }, access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            }, remove: function (t, e) {
                var n, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(Z) : (e = Z(e)) in r ? [e] : e.match(N) || []).length;
                        for (; n--;) delete r[e[n]]
                    }
                    (void 0 === e || k.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }, hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !k.isEmptyObject(e)
            }
        };
        var J = new X, Q = new X, K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, tt = /[A-Z]/g;

        function et(t, e, n) {
            var r;
            if (void 0 === n && 1 === t.nodeType) if (r = "data-" + e.replace(tt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(r))) {
                try {
                    n = function (t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : K.test(t) ? JSON.parse(t) : t)
                    }(n)
                } catch (t) {
                }
                Q.set(t, e, n)
            } else n = void 0;
            return n
        }

        k.extend({
            hasData: function (t) {
                return Q.hasData(t) || J.hasData(t)
            }, data: function (t, e, n) {
                return Q.access(t, e, n)
            }, removeData: function (t, e) {
                Q.remove(t, e)
            }, _data: function (t, e, n) {
                return J.access(t, e, n)
            }, _removeData: function (t, e) {
                J.remove(t, e)
            }
        }), k.fn.extend({
            data: function (t, e) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (i = Q.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Z(r.slice(5)), et(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof t ? this.each((function () {
                    Q.set(this, t)
                })) : q(this, (function (e) {
                    var n;
                    if (o && void 0 === e) return void 0 !== (n = Q.get(o, t)) || void 0 !== (n = et(o, t)) ? n : void 0;
                    this.each((function () {
                        Q.set(this, t, e)
                    }))
                }), null, e, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each((function () {
                    Q.remove(this, t)
                }))
            }
        }), k.extend({
            queue: function (t, e, n) {
                var r;
                if (t) return e = (e || "fx") + "queue", r = J.get(t, e), n && (!r || Array.isArray(n) ? r = J.access(t, e, k.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = k.queue(t, e), r = n.length, i = n.shift(), o = k._queueHooks(t, e);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, (function () {
                    k.dequeue(t, e)
                }), o)), !r && o && o.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return J.get(t, n) || J.access(t, n, {
                    empty: k.Callbacks("once memory").add((function () {
                        J.remove(t, [e + "queue", n])
                    }))
                })
            }
        }), k.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? k.queue(this[0], t) : void 0 === e ? this : this.each((function () {
                    var n = k.queue(this, t, e);
                    k._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && k.dequeue(this, t)
                }))
            }, dequeue: function (t) {
                return this.each((function () {
                    k.dequeue(this, t)
                }))
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) (n = J.get(o[a], t + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(e)
            }
        });
        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            rt = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"), it = ["Top", "Right", "Bottom", "Left"],
            ot = y.documentElement, at = function (t) {
                return k.contains(t.ownerDocument, t)
            }, st = {composed: !0};
        ot.getRootNode && (at = function (t) {
            return k.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument
        });
        var lt = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && at(t) && "none" === k.css(t, "display")
        };

        function ut(t, e, n, r) {
            var i, o, a = 20, s = r ? function () {
                    return r.cur()
                } : function () {
                    return k.css(t, e, "")
                }, l = s(), u = n && n[3] || (k.cssNumber[e] ? "" : "px"),
                c = t.nodeType && (k.cssNumber[e] || "px" !== u && +l) && rt.exec(k.css(t, e));
            if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; a--;) k.style(t, e, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
                c *= 2, k.style(t, e, c + u), n = n || []
            }
            return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
        }

        var ct = {};

        function ht(t) {
            var e, n = t.ownerDocument, r = t.nodeName, i = ct[r];
            return i || (e = n.body.appendChild(n.createElement(r)), i = k.css(e, "display"), e.parentNode.removeChild(e), "none" === i && (i = "block"), ct[r] = i, i)
        }

        function ft(t, e) {
            for (var n, r, i = [], o = 0, a = t.length; o < a; o++) (r = t[o]).style && (n = r.style.display, e ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && lt(r) && (i[o] = ht(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (t[o].style.display = i[o]);
            return t
        }

        k.fn.extend({
            show: function () {
                return ft(this, !0)
            }, hide: function () {
                return ft(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function () {
                    lt(this) ? k(this).show() : k(this).hide()
                }))
            }
        });
        var dt, pt, gt = /^(?:checkbox|radio)$/i, _t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            mt = /^$|^module$|\/(?:java|ecma)script/i;
        dt = y.createDocumentFragment().appendChild(y.createElement("div")), (pt = y.createElement("input")).setAttribute("type", "radio"), pt.setAttribute("checked", "checked"), pt.setAttribute("name", "t"), dt.appendChild(pt), _.checkClone = dt.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.innerHTML = "<textarea>x</textarea>", _.noCloneChecked = !!dt.cloneNode(!0).lastChild.defaultValue, dt.innerHTML = "<option></option>", _.option = !!dt.lastChild;
        var vt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function yt(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? k.merge([t], n) : n
        }

        function bt(t, e) {
            for (var n = 0, r = t.length; n < r; n++) J.set(t[n], "globalEval", !e || J.get(e[n], "globalEval"))
        }

        vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead, vt.th = vt.td, _.option || (vt.optgroup = vt.option = [1, "<select multiple='multiple'>", "</select>"]);
        var xt = /<|&#?\w+;/;

        function wt(t, e, n, r, i) {
            for (var o, a, s, l, u, c, h = e.createDocumentFragment(), f = [], d = 0, p = t.length; d < p; d++) if ((o = t[d]) || 0 === o) if ("object" === w(o)) k.merge(f, o.nodeType ? [o] : o); else if (xt.test(o)) {
                for (a = a || h.appendChild(e.createElement("div")), s = (_t.exec(o) || ["", ""])[1].toLowerCase(), l = vt[s] || vt._default, a.innerHTML = l[1] + k.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
                k.merge(f, a.childNodes), (a = h.firstChild).textContent = ""
            } else f.push(e.createTextNode(o));
            for (h.textContent = "", d = 0; o = f[d++];) if (r && k.inArray(o, r) > -1) i && i.push(o); else if (u = at(o), a = yt(h.appendChild(o), "script"), u && bt(a), n) for (c = 0; o = a[c++];) mt.test(o.type || "") && n.push(o);
            return h
        }

        var kt = /^key/, St = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Mt = /^([^.]*)(?:\.(.+)|)/;

        function Tt() {
            return !0
        }

        function It() {
            return !1
        }

        function Ct(t, e) {
            return t === function () {
                try {
                    return y.activeElement
                } catch (t) {
                }
            }() == ("focus" === e)
        }

        function At(t, e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), e) At(t, s, n, r, e[s], o);
                return t
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = It; else if (!i) return t;
            return 1 === o && (a = i, (i = function (t) {
                return k().off(t), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = k.guid++)), t.each((function () {
                k.event.add(this, e, i, r, n)
            }))
        }

        function Dt(t, e, n) {
            n ? (J.set(t, e, !1), k.event.add(t, e, {
                namespace: !1, handler: function (t) {
                    var r, i, o = J.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (o.length) (k.event.special[e] || {}).delegateType && t.stopPropagation(); else if (o = s.call(arguments), J.set(this, e, o), r = n(this, e), this[e](), o !== (i = J.get(this, e)) || r ? J.set(this, e, !1) : i = {}, o !== i) return t.stopImmediatePropagation(), t.preventDefault(), i.value
                    } else o.length && (J.set(this, e, {value: k.event.trigger(k.extend(o[0], k.Event.prototype), o.slice(1), this)}), t.stopImmediatePropagation())
                }
            })) : void 0 === J.get(t, e) && k.event.add(t, e, Tt)
        }

        k.event = {
            global: {}, add: function (t, e, n, r, i) {
                var o, a, s, l, u, c, h, f, d, p, g, _ = J.get(t);
                if (Y(t)) for (n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ot, i), n.guid || (n.guid = k.guid++), (l = _.events) || (l = _.events = Object.create(null)), (a = _.handle) || (a = _.handle = function (e) {
                    return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }), u = (e = (e || "").match(N) || [""]).length; u--;) d = g = (s = Mt.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), d && (h = k.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, h = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (f = l[d]) || ((f = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(d, a)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), k.event.global[d] = !0)
            }, remove: function (t, e, n, r, i) {
                var o, a, s, l, u, c, h, f, d, p, g, _ = J.hasData(t) && J.get(t);
                if (_ && (l = _.events)) {
                    for (u = (e = (e || "").match(N) || [""]).length; u--;) if (d = g = (s = Mt.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), d) {
                        for (h = k.event.special[d] || {}, f = l[d = (r ? h.delegateType : h.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(t, c));
                        a && !f.length && (h.teardown && !1 !== h.teardown.call(t, p, _.handle) || k.removeEvent(t, d, _.handle), delete l[d])
                    } else for (d in l) k.event.remove(t, d + e[u], n, r, !0);
                    k.isEmptyObject(l) && J.remove(t, "handle events")
                }
            }, dispatch: function (t) {
                var e, n, r, i, o, a, s = new Array(arguments.length), l = k.event.fix(t),
                    u = (J.get(this, "events") || Object.create(null))[l.type] || [], c = k.event.special[l.type] || {};
                for (s[0] = l, e = 1; e < arguments.length; e++) s[e] = arguments[e];
                if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (a = k.event.handlers.call(this, l, u), e = 0; (i = a[e++]) && !l.isPropagationStopped();) for (l.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l), l.result
                }
            }, handlers: function (t, e) {
                var n, r, i, o, a, s = [], l = e.delegateCount, u = t.target;
                if (l && u.nodeType && !("click" === t.type && t.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                    for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = e[n]).selector + " "] && (a[i] = r.needsContext ? k(i, this).index(u) > -1 : k.find(i, this, null, [u]).length), a[i] && o.push(r);
                    o.length && s.push({elem: u, handlers: o})
                }
                return u = this, l < e.length && s.push({elem: u, handlers: e.slice(l)}), s
            }, addProp: function (t, e) {
                Object.defineProperty(k.Event.prototype, t, {
                    enumerable: !0, configurable: !0, get: m(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    }, set: function (e) {
                        Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                    }
                })
            }, fix: function (t) {
                return t[k.expando] ? t : new k.Event(t)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && A(e, "input") && Dt(e, "click", Tt), !1
                    }, trigger: function (t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && A(e, "input") && Dt(e, "click"), !0
                    }, _default: function (t) {
                        var e = t.target;
                        return gt.test(e.type) && e.click && A(e, "input") && J.get(e, "click") || A(e, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, k.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, k.Event = function (t, e) {
            if (!(this instanceof k.Event)) return new k.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : It, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && k.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[k.expando] = !0
        }, k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: It,
            isPropagationStopped: It,
            isImmediatePropagationStopped: It,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = Tt, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = Tt, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Tt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, k.each({
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
            which: function (t) {
                var e = t.button;
                return null == t.which && kt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && St.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, k.event.addProp), k.each({focus: "focusin", blur: "focusout"}, (function (t, e) {
            k.event.special[t] = {
                setup: function () {
                    return Dt(this, t, Ct), !1
                }, trigger: function () {
                    return Dt(this, t), !0
                }, delegateType: e
            }
        })), k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function (t, e) {
            k.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, r = this, i = t.relatedTarget, o = t.handleObj;
                    return i && (i === r || k.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        })), k.fn.extend({
            on: function (t, e, n, r) {
                return At(this, t, e, n, r)
            }, one: function (t, e, n, r) {
                return At(this, t, e, n, r, 1)
            }, off: function (t, e, n) {
                var r, i;
                if (t && t.preventDefault && t.handleObj) return r = t.handleObj, k(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof t) {
                    for (i in t) this.off(i, e, t[i]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = It), this.each((function () {
                    k.event.remove(this, t, n, e)
                }))
            }
        });
        var zt = /<script|<style|<link/i, Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Rt(t, e) {
            return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && k(t).children("tbody")[0] || t
        }

        function Et(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Ft(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Nt(t, e) {
            var n, r, i, o, a, s;
            if (1 === e.nodeType) {
                if (J.hasData(t) && (s = J.get(t).events)) for (i in J.remove(e, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) k.event.add(e, i, s[i][n]);
                Q.hasData(t) && (o = Q.access(t), a = k.extend({}, o), Q.set(e, a))
            }
        }

        function Pt(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && gt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function jt(t, e, n, r) {
            e = l(e);
            var i, o, a, s, u, c, h = 0, f = t.length, d = f - 1, p = e[0], g = m(p);
            if (g || f > 1 && "string" == typeof p && !_.checkClone && Ot.test(p)) return t.each((function (i) {
                var o = t.eq(i);
                g && (e[0] = p.call(this, i, o.html())), jt(o, e, n, r)
            }));
            if (f && (o = (i = wt(e, t[0].ownerDocument, !1, t, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (s = (a = k.map(yt(i, "script"), Et)).length; h < f; h++) u = i, h !== d && (u = k.clone(u, !0, !0), s && k.merge(a, yt(u, "script"))), n.call(t[h], u, h);
                if (s) for (c = a[a.length - 1].ownerDocument, k.map(a, Ft), h = 0; h < s; h++) u = a[h], mt.test(u.type || "") && !J.access(u, "globalEval") && k.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, c) : x(u.textContent.replace(Lt, ""), u, c))
            }
            return t
        }

        function Ht(t, e, n) {
            for (var r, i = e ? k.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(yt(r)), r.parentNode && (n && at(r) && bt(yt(r, "script")), r.parentNode.removeChild(r));
            return t
        }

        k.extend({
            htmlPrefilter: function (t) {
                return t
            }, clone: function (t, e, n) {
                var r, i, o, a, s = t.cloneNode(!0), l = at(t);
                if (!(_.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t))) for (a = yt(s), r = 0, i = (o = yt(t)).length; r < i; r++) Pt(o[r], a[r]);
                if (e) if (n) for (o = o || yt(t), a = a || yt(s), r = 0, i = o.length; r < i; r++) Nt(o[r], a[r]); else Nt(t, s);
                return (a = yt(s, "script")).length > 0 && bt(a, !l && yt(t, "script")), s
            }, cleanData: function (t) {
                for (var e, n, r, i = k.event.special, o = 0; void 0 !== (n = t[o]); o++) if (Y(n)) {
                    if (e = n[J.expando]) {
                        if (e.events) for (r in e.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, e.handle);
                        n[J.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
            }
        }), k.fn.extend({
            detach: function (t) {
                return Ht(this, t, !0)
            }, remove: function (t) {
                return Ht(this, t)
            }, text: function (t) {
                return q(this, (function (t) {
                    return void 0 === t ? k.text(this) : this.empty().each((function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    }))
                }), null, t, arguments.length)
            }, append: function () {
                return jt(this, arguments, (function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, t).appendChild(t)
                }))
            }, prepend: function () {
                return jt(this, arguments, (function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Rt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                }))
            }, before: function () {
                return jt(this, arguments, (function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                }))
            }, after: function () {
                return jt(this, arguments, (function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                }))
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(yt(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map((function () {
                    return k.clone(this, t, e)
                }))
            }, html: function (t) {
                return q(this, (function (t) {
                    var e = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !zt.test(t) && !vt[(_t.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = k.htmlPrefilter(t);
                        try {
                            for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (k.cleanData(yt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }), null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return jt(this, arguments, (function (e) {
                    var n = this.parentNode;
                    k.inArray(this, t) < 0 && (k.cleanData(yt(this)), n && n.replaceChild(e, this))
                }), t)
            }
        }), k.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function (t, e) {
            k.fn[t] = function (t) {
                for (var n, r = [], i = k(t), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), k(i[a])[e](n), u.apply(r, n.get());
                return this.pushStack(r)
            }
        }));
        var Vt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"), $t = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = n), e.getComputedStyle(t)
        }, Bt = function (t, e, n) {
            var r, i, o = {};
            for (i in e) o[i] = t.style[i], t.style[i] = e[i];
            for (i in r = n.call(t), e) t.style[i] = o[i];
            return r
        }, qt = new RegExp(it.join("|"), "i");

        function Gt(t, e, n) {
            var r, i, o, a, s = t.style;
            return (n = n || $t(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || at(t) || (a = k.style(t, e)), !_.pixelBoxStyles() && Vt.test(a) && qt.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function Wt(t, e) {
            return {
                get: function () {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function t() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ot.appendChild(u).appendChild(c);
                    var t = n.getComputedStyle(c);
                    r = "1%" !== t.top, l = 12 === e(t.marginLeft), c.style.right = "60%", a = 36 === e(t.right), i = 36 === e(t.width), c.style.position = "absolute", o = 12 === e(c.offsetWidth / 3), ot.removeChild(u), c = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }

            var r, i, o, a, s, l, u = y.createElement("div"), c = y.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", _.clearCloneStyle = "content-box" === c.style.backgroundClip, k.extend(_, {
                boxSizingReliable: function () {
                    return t(), i
                }, pixelBoxStyles: function () {
                    return t(), a
                }, pixelPosition: function () {
                    return t(), r
                }, reliableMarginLeft: function () {
                    return t(), l
                }, scrollboxSize: function () {
                    return t(), o
                }, reliableTrDimensions: function () {
                    var t, e, r, i;
                    return null == s && (t = y.createElement("table"), e = y.createElement("tr"), r = y.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", r.style.height = "9px", ot.appendChild(t).appendChild(e).appendChild(r), i = n.getComputedStyle(e), s = parseInt(i.height) > 3, ot.removeChild(t)), s
                }
            }))
        }();
        var Ut = ["Webkit", "Moz", "ms"], Zt = y.createElement("div").style, Yt = {};

        function Xt(t) {
            var e = k.cssProps[t] || Yt[t];
            return e || (t in Zt ? t : Yt[t] = function (t) {
                for (var e = t[0].toUpperCase() + t.slice(1), n = Ut.length; n--;) if ((t = Ut[n] + e) in Zt) return t
            }(t) || t)
        }

        var Jt = /^(none|table(?!-c[ea]).+)/, Qt = /^--/,
            Kt = {position: "absolute", visibility: "hidden", display: "block"},
            te = {letterSpacing: "0", fontWeight: "400"};

        function ee(t, e, n) {
            var r = rt.exec(e);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
        }

        function ne(t, e, n, r, i, o) {
            var a = "width" === e ? 1 : 0, s = 0, l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (l += k.css(t, n + it[a], !0, i)), r ? ("content" === n && (l -= k.css(t, "padding" + it[a], !0, i)), "margin" !== n && (l -= k.css(t, "border" + it[a] + "Width", !0, i))) : (l += k.css(t, "padding" + it[a], !0, i), "padding" !== n ? l += k.css(t, "border" + it[a] + "Width", !0, i) : s += k.css(t, "border" + it[a] + "Width", !0, i));
            return !r && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - s - .5)) || 0), l
        }

        function re(t, e, n) {
            var r = $t(t), i = (!_.boxSizingReliable() || n) && "border-box" === k.css(t, "boxSizing", !1, r), o = i,
                a = Gt(t, e, r), s = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Vt.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!_.boxSizingReliable() && i || !_.reliableTrDimensions() && A(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === k.css(t, "display", !1, r)) && t.getClientRects().length && (i = "border-box" === k.css(t, "boxSizing", !1, r), (o = s in t) && (a = t[s])), (a = parseFloat(a) || 0) + ne(t, e, n || (i ? "border" : "content"), o, r, a) + "px"
        }

        function ie(t, e, n, r, i) {
            return new ie.prototype.init(t, e, n, r, i)
        }

        k.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = Gt(t, "opacity");
                            return "" === n ? "1" : n
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
            style: function (t, e, n, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var i, o, a, s = Z(e), l = Qt.test(e), u = t.style;
                    if (l || (e = Xt(s)), a = k.cssHooks[e] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e];
                    "string" === (o = typeof n) && (i = rt.exec(n)) && i[1] && (n = ut(t, e, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), _.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (l ? u.setProperty(e, n) : u[e] = n))
                }
            },
            css: function (t, e, n, r) {
                var i, o, a, s = Z(e);
                return Qt.test(e) || (e = Xt(s)), (a = k.cssHooks[e] || k.cssHooks[s]) && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = Gt(t, e, r)), "normal" === i && e in te && (i = te[e]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), k.each(["height", "width"], (function (t, e) {
            k.cssHooks[e] = {
                get: function (t, n, r) {
                    if (n) return !Jt.test(k.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? re(t, e, r) : Bt(t, Kt, (function () {
                        return re(t, e, r)
                    }))
                }, set: function (t, n, r) {
                    var i, o = $t(t), a = !_.scrollboxSize() && "absolute" === o.position,
                        s = (a || r) && "border-box" === k.css(t, "boxSizing", !1, o), l = r ? ne(t, e, r, s, o) : 0;
                    return s && a && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ne(t, e, "border", !1, o) - .5)), l && (i = rt.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = k.css(t, e)), ee(0, n, l)
                }
            }
        })), k.cssHooks.marginLeft = Wt(_.reliableMarginLeft, (function (t, e) {
            if (e) return (parseFloat(Gt(t, "marginLeft")) || t.getBoundingClientRect().left - Bt(t, {marginLeft: 0}, (function () {
                return t.getBoundingClientRect().left
            }))) + "px"
        })), k.each({margin: "", padding: "", border: "Width"}, (function (t, e) {
            k.cssHooks[t + e] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + it[r] + e] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, "margin" !== t && (k.cssHooks[t + e].set = ee)
        })), k.fn.extend({
            css: function (t, e) {
                return q(this, (function (t, e, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(e)) {
                        for (r = $t(t), i = e.length; a < i; a++) o[e[a]] = k.css(t, e[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? k.style(t, e, n) : k.css(t, e)
                }), t, e, arguments.length > 1)
            }
        }), k.Tween = ie, ie.prototype = {
            constructor: ie, init: function (t, e, n, r, i, o) {
                this.elem = t, this.prop = n, this.easing = i || k.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = ie.propHooks[this.prop];
                return t && t.get ? t.get(this) : ie.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = ie.propHooks[this.prop];
                return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ie.propHooks._default.set(this), this
            }
        }, ie.prototype.init.prototype = ie.prototype, ie.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                }, set: function (t) {
                    k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !k.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, ie.propHooks.scrollTop = ie.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, k.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, k.fx = ie.prototype.init, k.fx.step = {};
        var oe, ae, se = /^(?:toggle|show|hide)$/, le = /queueHooks$/;

        function ue() {
            ae && (!1 === y.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ue) : n.setTimeout(ue, k.fx.interval), k.fx.tick())
        }

        function ce() {
            return n.setTimeout((function () {
                oe = void 0
            })), oe = Date.now()
        }

        function he(t, e) {
            var n, r = 0, i = {height: t};
            for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = it[r])] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function fe(t, e, n) {
            for (var r, i = (de.tweeners[e] || []).concat(de.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, e, t)) return r
        }

        function de(t, e, n) {
            var r, i, o = 0, a = de.prefilters.length, s = k.Deferred().always((function () {
                delete l.elem
            })), l = function () {
                if (i) return !1;
                for (var e = oe || ce(), n = Math.max(0, u.startTime + u.duration - e), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
                return s.notifyWith(t, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u]), !1)
            }, u = s.promise({
                elem: t,
                props: k.extend({}, e),
                opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: oe || ce(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var r = k.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (e) {
                    var n = 0, r = e ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]), this
                }
            }), c = u.props;
            for (!function (t, e) {
                var n, r, i, o, a;
                for (n in t) if (i = e[r = Z(n)], o = t[n], Array.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete t[r], o) n in t || (t[n] = o[n], e[n] = i); else e[r] = i
            }(c, u.opts.specialEasing); o < a; o++) if (r = de.prefilters[o].call(u, t, c, u.opts)) return m(r.stop) && (k._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
            return k.map(c, fe, u), m(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), k.fx.timer(k.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u
        }

        k.Animation = k.extend(de, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return ut(n.elem, t, rt.exec(e), n), n
                }]
            }, tweener: function (t, e) {
                m(t) ? (e = t, t = ["*"]) : t = t.match(N);
                for (var n, r = 0, i = t.length; r < i; r++) n = t[r], de.tweeners[n] = de.tweeners[n] || [], de.tweeners[n].unshift(e)
            }, prefilters: [function (t, e, n) {
                var r, i, o, a, s, l, u, c, h = "width" in e || "height" in e, f = this, d = {}, p = t.style,
                    g = t.nodeType && lt(t), _ = J.get(t, "fxshow");
                for (r in n.queue || (null == (a = k._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, f.always((function () {
                    f.always((function () {
                        a.unqueued--, k.queue(t, "fx").length || a.empty.fire()
                    }))
                }))), e) if (i = e[r], se.test(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !_ || void 0 === _[r]) continue;
                        g = !0
                    }
                    d[r] = _ && _[r] || k.style(t, r)
                }
                if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(d)) for (r in h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = _ && _.display) && (u = J.get(t, "display")), "none" === (c = k.css(t, "display")) && (u ? c = u : (ft([t], !0), u = t.style.display || u, c = k.css(t, "display"), ft([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === k.css(t, "float") && (l || (f.done((function () {
                    p.display = u
                })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always((function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                }))), l = !1, d) l || (_ ? "hidden" in _ && (g = _.hidden) : _ = J.access(t, "fxshow", {display: u}), o && (_.hidden = !g), g && ft([t], !0), f.done((function () {
                    for (r in g || ft([t]), J.remove(t, "fxshow"), d) k.style(t, r, d[r])
                }))), l = fe(g ? _[r] : 0, r, f), r in _ || (_[r] = l.start, g && (l.end = l.start, l.start = 0))
            }], prefilter: function (t, e) {
                e ? de.prefilters.unshift(t) : de.prefilters.push(t)
            }
        }), k.speed = function (t, e, n) {
            var r = t && "object" == typeof t ? k.extend({}, t) : {
                complete: n || !n && e || m(t) && t,
                duration: t,
                easing: n && e || e && !m(e) && e
            };
            return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
            }, r
        }, k.fn.extend({
            fadeTo: function (t, e, n, r) {
                return this.filter(lt).css("opacity", 0).show().end().animate({opacity: e}, t, n, r)
            }, animate: function (t, e, n, r) {
                var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function () {
                    var e = de(this, k.extend({}, t), o);
                    (i || J.get(this, "finish")) && e.stop(!0)
                };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (t, e, n) {
                var r = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function () {
                    var e = !0, i = null != t && t + "queueHooks", o = k.timers, a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && le.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                    !e && n || k.dequeue(this, t)
                }))
            }, finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each((function () {
                    var e, n = J.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = k.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, k.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish
                }))
            }
        }), k.each(["toggle", "show", "hide"], (function (t, e) {
            var n = k.fn[e];
            k.fn[e] = function (t, r, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(he(e, !0), t, r, i)
            }
        })), k.each({
            slideDown: he("show"),
            slideUp: he("hide"),
            slideToggle: he("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, (function (t, e) {
            k.fn[t] = function (t, n, r) {
                return this.animate(e, t, n, r)
            }
        })), k.timers = [], k.fx.tick = function () {
            var t, e = 0, n = k.timers;
            for (oe = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || k.fx.stop(), oe = void 0
        }, k.fx.timer = function (t) {
            k.timers.push(t), k.fx.start()
        }, k.fx.interval = 13, k.fx.start = function () {
            ae || (ae = !0, ue())
        }, k.fx.stop = function () {
            ae = null
        }, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (t, e) {
            return t = k.fx && k.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function (e, r) {
                var i = n.setTimeout(e, t);
                r.stop = function () {
                    n.clearTimeout(i)
                }
            }))
        }, function () {
            var t = y.createElement("input"), e = y.createElement("select").appendChild(y.createElement("option"));
            t.type = "checkbox", _.checkOn = "" !== t.value, _.optSelected = e.selected, (t = y.createElement("input")).value = "t", t.type = "radio", _.radioValue = "t" === t.value
        }();
        var pe, ge = k.expr.attrHandle;
        k.fn.extend({
            attr: function (t, e) {
                return q(this, k.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each((function () {
                    k.removeAttr(this, t)
                }))
            }
        }), k.extend({
            attr: function (t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? k.prop(t, e, n) : (1 === o && k.isXMLDoc(t) || (i = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? pe : void 0)), void 0 !== n ? null === n ? void k.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : null == (r = k.find.attr(t, e)) ? void 0 : r)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!_.radioValue && "radio" === e && A(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }, removeAttr: function (t, e) {
                var n, r = 0, i = e && e.match(N);
                if (i && 1 === t.nodeType) for (; n = i[r++];) t.removeAttribute(n)
            }
        }), pe = {
            set: function (t, e, n) {
                return !1 === e ? k.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, k.each(k.expr.match.bool.source.match(/\w+/g), (function (t, e) {
            var n = ge[e] || k.find.attr;
            ge[e] = function (t, e, r) {
                var i, o, a = e.toLowerCase();
                return r || (o = ge[a], ge[a] = i, i = null != n(t, e, r) ? a : null, ge[a] = o), i
            }
        }));
        var _e = /^(?:input|select|textarea|button)$/i, me = /^(?:a|area)$/i;

        function ve(t) {
            return (t.match(N) || []).join(" ")
        }

        function ye(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function be(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(N) || []
        }

        k.fn.extend({
            prop: function (t, e) {
                return q(this, k.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each((function () {
                    delete this[k.propFix[t] || t]
                }))
            }
        }), k.extend({
            prop: function (t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(t) || (e = k.propFix[e] || e, i = k.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = k.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : _e.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), _.optSelected || (k.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }, set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
            k.propFix[this.toLowerCase()] = this
        })), k.fn.extend({
            addClass: function (t) {
                var e, n, r, i, o, a, s, l = 0;
                if (m(t)) return this.each((function (e) {
                    k(this).addClass(t.call(this, e, ye(this)))
                }));
                if ((e = be(t)).length) for (; n = this[l++];) if (i = ye(n), r = 1 === n.nodeType && " " + ve(i) + " ") {
                    for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (s = ve(r)) && n.setAttribute("class", s)
                }
                return this
            }, removeClass: function (t) {
                var e, n, r, i, o, a, s, l = 0;
                if (m(t)) return this.each((function (e) {
                    k(this).removeClass(t.call(this, e, ye(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((e = be(t)).length) for (; n = this[l++];) if (i = ye(n), r = 1 === n.nodeType && " " + ve(i) + " ") {
                    for (a = 0; o = e[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                    i !== (s = ve(r)) && n.setAttribute("class", s)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t, r = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && r ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each((function (n) {
                    k(this).toggleClass(t.call(this, n, ye(this), e), e)
                })) : this.each((function () {
                    var e, i, o, a;
                    if (r) for (i = 0, o = k(this), a = be(t); e = a[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== n || ((e = ye(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""))
                }))
            }, hasClass: function (t) {
                var e, n, r = 0;
                for (e = " " + t + " "; n = this[r++];) if (1 === n.nodeType && (" " + ve(ye(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var xe = /\r/g;
        k.fn.extend({
            val: function (t) {
                var e, n, r, i = this[0];
                return arguments.length ? (r = m(t), this.each((function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? t.call(this, n, k(this).val()) : t) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = k.map(i, (function (t) {
                        return null == t ? "" : t + ""
                    }))), (e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                }))) : i ? (e = k.valHooks[i.type] || k.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(xe, "") : null == n ? "" : n : void 0
            }
        }), k.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = k.find.attr(t, "value");
                        return null != e ? e : ve(k.text(t))
                    }
                }, select: {
                    get: function (t) {
                        var e, n, r, i = t.options, o = t.selectedIndex, a = "select-one" === t.type, s = a ? null : [],
                            l = a ? o + 1 : i.length;
                        for (r = o < 0 ? l : a ? o : 0; r < l; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (e = k(n).val(), a) return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, r, i = t.options, o = k.makeArray(e), a = i.length; a--;) ((r = i[a]).selected = k.inArray(k.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), k.each(["radio", "checkbox"], (function () {
            k.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return t.checked = k.inArray(k(t).val(), e) > -1
                }
            }, _.checkOn || (k.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        })), _.focusin = "onfocusin" in n;
        var we = /^(?:focusinfocus|focusoutblur)$/, ke = function (t) {
            t.stopPropagation()
        };
        k.extend(k.event, {
            trigger: function (t, e, r, i) {
                var o, a, s, l, u, c, h, f, p = [r || y], g = d.call(t, "type") ? t.type : t,
                    _ = d.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = f = s = r = r || y, 3 !== r.nodeType && 8 !== r.nodeType && !we.test(g + k.event.triggered) && (g.indexOf(".") > -1 && (_ = g.split("."), g = _.shift(), _.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[k.expando] ? t : new k.Event(g, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : k.makeArray(e, [t]), h = k.event.special[g] || {}, i || !h.trigger || !1 !== h.trigger.apply(r, e))) {
                    if (!i && !h.noBubble && !v(r)) {
                        for (l = h.delegateType || g, we.test(l + g) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                        s === (r.ownerDocument || y) && p.push(s.defaultView || s.parentWindow || n)
                    }
                    for (o = 0; (a = p[o++]) && !t.isPropagationStopped();) f = a, t.type = o > 1 ? l : h.bindType || g, (c = (J.get(a, "events") || Object.create(null))[t.type] && J.get(a, "handle")) && c.apply(a, e), (c = u && a[u]) && c.apply && Y(a) && (t.result = c.apply(a, e), !1 === t.result && t.preventDefault());
                    return t.type = g, i || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), e) || !Y(r) || u && m(r[g]) && !v(r) && ((s = r[u]) && (r[u] = null), k.event.triggered = g, t.isPropagationStopped() && f.addEventListener(g, ke), r[g](), t.isPropagationStopped() && f.removeEventListener(g, ke), k.event.triggered = void 0, s && (r[u] = s)), t.result
                }
            }, simulate: function (t, e, n) {
                var r = k.extend(new k.Event, n, {type: t, isSimulated: !0});
                k.event.trigger(r, null, e)
            }
        }), k.fn.extend({
            trigger: function (t, e) {
                return this.each((function () {
                    k.event.trigger(t, e, this)
                }))
            }, triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return k.event.trigger(t, e, n, !0)
            }
        }), _.focusin || k.each({focus: "focusin", blur: "focusout"}, (function (t, e) {
            var n = function (t) {
                k.event.simulate(e, t.target, k.event.fix(t))
            };
            k.event.special[e] = {
                setup: function () {
                    var r = this.ownerDocument || this.document || this, i = J.access(r, e);
                    i || r.addEventListener(t, n, !0), J.access(r, e, (i || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this.document || this, i = J.access(r, e) - 1;
                    i ? J.access(r, e, i) : (r.removeEventListener(t, n, !0), J.remove(r, e))
                }
            }
        }));
        var Se = n.location, Me = {guid: Date.now()}, Te = /\?/;
        k.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + t), e
        };
        var Ie = /\[\]$/, Ce = /\r?\n/g, Ae = /^(?:submit|button|image|reset|file)$/i,
            De = /^(?:input|select|textarea|keygen)/i;

        function ze(t, e, n, r) {
            var i;
            if (Array.isArray(e)) k.each(e, (function (e, i) {
                n || Ie.test(t) ? r(t, i) : ze(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
            })); else if (n || "object" !== w(e)) r(t, e); else for (i in e) ze(t + "[" + i + "]", e[i], n, r)
        }

        k.param = function (t, e) {
            var n, r = [], i = function (t, e) {
                var n = m(e) ? e() : e;
                r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !k.isPlainObject(t)) k.each(t, (function () {
                i(this.name, this.value)
            })); else for (n in t) ze(n, t[n], e, i);
            return r.join("&")
        }, k.fn.extend({
            serialize: function () {
                return k.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map((function () {
                    var t = k.prop(this, "elements");
                    return t ? k.makeArray(t) : this
                })).filter((function () {
                    var t = this.type;
                    return this.name && !k(this).is(":disabled") && De.test(this.nodeName) && !Ae.test(t) && (this.checked || !gt.test(t))
                })).map((function (t, e) {
                    var n = k(this).val();
                    return null == n ? null : Array.isArray(n) ? k.map(n, (function (t) {
                        return {name: e.name, value: t.replace(Ce, "\r\n")}
                    })) : {name: e.name, value: n.replace(Ce, "\r\n")}
                })).get()
            }
        });
        var Oe = /%20/g, Le = /#.*$/, Re = /([?&])_=[^&]*/, Ee = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fe = /^(?:GET|HEAD)$/,
            Ne = /^\/\//, Pe = {}, je = {}, He = "*/".concat("*"), Ve = y.createElement("a");

        function $e(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var r, i = 0, o = e.toLowerCase().match(N) || [];
                if (m(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
            }
        }

        function Be(t, e, n, r) {
            var i = {}, o = t === je;

            function a(s) {
                var l;
                return i[s] = !0, k.each(t[s] || [], (function (t, s) {
                    var u = s(e, n, r);
                    return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), a(u), !1)
                })), l
            }

            return a(e.dataTypes[0]) || !i["*"] && a("*")
        }

        function qe(t, e) {
            var n, r, i = k.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
            return r && k.extend(!0, t, r), t
        }

        Ve.href = Se.href, k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Se.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Se.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": He,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? qe(qe(t, k.ajaxSettings), e) : qe(k.ajaxSettings, t)
            },
            ajaxPrefilter: $e(Pe),
            ajaxTransport: $e(je),
            ajax: function (t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var r, i, o, a, s, l, u, c, h, f, d = k.ajaxSetup({}, e), p = d.context || d,
                    g = d.context && (p.nodeType || p.jquery) ? k(p) : k.event, _ = k.Deferred(),
                    m = k.Callbacks("once memory"), v = d.statusCode || {}, b = {}, x = {}, w = "canceled", S = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (u) {
                                if (!a) for (a = {}; e = Ee.exec(o);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = a[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        }, getAllResponseHeaders: function () {
                            return u ? o : null
                        }, setRequestHeader: function (t, e) {
                            return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, b[t] = e), this
                        }, overrideMimeType: function (t) {
                            return null == u && (d.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t) if (u) S.always(t[S.status]); else for (e in t) v[e] = [v[e], t[e]];
                            return this
                        }, abort: function (t) {
                            var e = t || w;
                            return r && r.abort(e), M(0, e), this
                        }
                    };
                if (_.promise(S), d.url = ((t || d.url || Se.href) + "").replace(Ne, Se.protocol + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(N) || [""], null == d.crossDomain) {
                    l = y.createElement("a");
                    try {
                        l.href = d.url, l.href = l.href, d.crossDomain = Ve.protocol + "//" + Ve.host != l.protocol + "//" + l.host
                    } catch (t) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = k.param(d.data, d.traditional)), Be(Pe, d, e, S), u) return S;
                for (h in (c = k.event && d.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Fe.test(d.type), i = d.url.replace(Le, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Oe, "+")) : (f = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (Te.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (i = i.replace(Re, "$1"), f = (Te.test(i) ? "&" : "?") + "_=" + Me.guid++ + f), d.url = i + f), d.ifModified && (k.lastModified[i] && S.setRequestHeader("If-Modified-Since", k.lastModified[i]), k.etag[i] && S.setRequestHeader("If-None-Match", k.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || e.contentType) && S.setRequestHeader("Content-Type", d.contentType), S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + He + "; q=0.01" : "") : d.accepts["*"]), d.headers) S.setRequestHeader(h, d.headers[h]);
                if (d.beforeSend && (!1 === d.beforeSend.call(p, S, d) || u)) return S.abort();
                if (w = "abort", m.add(d.complete), S.done(d.success), S.fail(d.error), r = Be(je, d, e, S)) {
                    if (S.readyState = 1, c && g.trigger("ajaxSend", [S, d]), u) return S;
                    d.async && d.timeout > 0 && (s = n.setTimeout((function () {
                        S.abort("timeout")
                    }), d.timeout));
                    try {
                        u = !1, r.send(b, M)
                    } catch (t) {
                        if (u) throw t;
                        M(-1, t)
                    }
                } else M(-1, "No Transport");

                function M(t, e, a, l) {
                    var h, f, y, b, x, w = e;
                    u || (u = !0, s && n.clearTimeout(s), r = void 0, o = l || "", S.readyState = t > 0 ? 4 : 0, h = t >= 200 && t < 300 || 304 === t, a && (b = function (t, e, n) {
                        for (var r, i, o, a, s = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (r) for (i in s) if (s[i] && s[i].test(r)) {
                            l.unshift(i);
                            break
                        }
                        if (l[0] in n) o = l[0]; else {
                            for (i in n) {
                                if (!l[0] || t.converters[i + " " + l[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o]
                    }(d, S, a)), !h && k.inArray("script", d.dataTypes) > -1 && (d.converters["text script"] = function () {
                    }), b = function (t, e, n, r) {
                        var i, o, a, s, l, u = {}, c = t.dataTypes.slice();
                        if (c[1]) for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
                        for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                            if (!(a = u[l + " " + o] || u["* " + o])) for (i in u) if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                break
                            }
                            if (!0 !== a) if (a && t.throws) e = a(e); else try {
                                e = a(e)
                            } catch (t) {
                                return {state: "parsererror", error: a ? t : "No conversion from " + l + " to " + o}
                            }
                        }
                        return {state: "success", data: e}
                    }(d, b, S, h), h ? (d.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (k.lastModified[i] = x), (x = S.getResponseHeader("etag")) && (k.etag[i] = x)), 204 === t || "HEAD" === d.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = b.state, f = b.data, h = !(y = b.error))) : (y = w, !t && w || (w = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (e || w) + "", h ? _.resolveWith(p, [f, w, S]) : _.rejectWith(p, [S, w, y]), S.statusCode(v), v = void 0, c && g.trigger(h ? "ajaxSuccess" : "ajaxError", [S, d, h ? f : y]), m.fireWith(p, [S, w]), c && (g.trigger("ajaxComplete", [S, d]), --k.active || k.event.trigger("ajaxStop")))
                }

                return S
            },
            getJSON: function (t, e, n) {
                return k.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return k.get(t, void 0, e, "script")
            }
        }), k.each(["get", "post"], (function (t, e) {
            k[e] = function (t, n, r, i) {
                return m(n) && (i = i || r, r = n, n = void 0), k.ajax(k.extend({
                    url: t,
                    type: e,
                    dataType: i,
                    data: n,
                    success: r
                }, k.isPlainObject(t) && t))
            }
        })), k.ajaxPrefilter((function (t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        })), k._evalUrl = function (t, e, n) {
            return k.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (t) {
                    k.globalEval(t, e, n)
                }
            })
        }, k.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (m(t) && (t = t.call(this[0])), e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                })).append(this)), this
            }, wrapInner: function (t) {
                return m(t) ? this.each((function (e) {
                    k(this).wrapInner(t.call(this, e))
                })) : this.each((function () {
                    var e = k(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                }))
            }, wrap: function (t) {
                var e = m(t);
                return this.each((function (n) {
                    k(this).wrapAll(e ? t.call(this, n) : t)
                }))
            }, unwrap: function (t) {
                return this.parent(t).not("body").each((function () {
                    k(this).replaceWith(this.childNodes)
                })), this
            }
        }), k.expr.pseudos.hidden = function (t) {
            return !k.expr.pseudos.visible(t)
        }, k.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, k.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (t) {
            }
        };
        var Ge = {0: 200, 1223: 204}, We = k.ajaxSettings.xhr();
        _.cors = !!We && "withCredentials" in We, _.ajax = We = !!We, k.ajaxTransport((function (t) {
            var e, r;
            if (_.cors || We && !t.crossDomain) return {
                send: function (i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                    e = function (t) {
                        return function () {
                            e && (e = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ge[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                        }
                    }, s.onload = e(), r = s.onerror = s.ontimeout = e("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                        4 === s.readyState && n.setTimeout((function () {
                            e && r()
                        }))
                    }, e = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                }, abort: function () {
                    e && e()
                }
            }
        })), k.ajaxPrefilter((function (t) {
            t.crossDomain && (t.contents.script = !1)
        })), k.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return k.globalEval(t), t
                }
            }
        }), k.ajaxPrefilter("script", (function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        })), k.ajaxTransport("script", (function (t) {
            var e, n;
            if (t.crossDomain || t.scriptAttrs) return {
                send: function (r, i) {
                    e = k("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function (t) {
                        e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                    }), y.head.appendChild(e[0])
                }, abort: function () {
                    n && n()
                }
            }
        }));
        var Ue, Ze = [], Ye = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = Ze.pop() || k.expando + "_" + Me.guid++;
                return this[t] = !0, t
            }
        }), k.ajaxPrefilter("json jsonp", (function (t, e, r) {
            var i, o, a,
                s = !1 !== t.jsonp && (Ye.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ye, "$1" + i) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return a || k.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = n[i], n[i] = function () {
                a = arguments
            }, r.always((function () {
                void 0 === o ? k(n).removeProp(i) : n[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Ze.push(i)), a && m(o) && o(a[0]), a = o = void 0
            })), "script"
        })), _.createHTMLDocument = ((Ue = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ue.childNodes.length), k.parseHTML = function (t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (_.createHTMLDocument ? ((r = (e = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href, e.head.appendChild(r)) : e = y), o = !n && [], (i = D.exec(t)) ? [e.createElement(i[1])] : (i = wt([t], e, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
            var r, i, o
        }, k.fn.load = function (t, e, n) {
            var r, i, o, a = this, s = t.indexOf(" ");
            return s > -1 && (r = ve(t.slice(s)), t = t.slice(0, s)), m(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && k.ajax({
                url: t,
                type: i || "GET",
                dataType: "html",
                data: e
            }).done((function (t) {
                o = arguments, a.html(r ? k("<div>").append(k.parseHTML(t)).find(r) : t)
            })).always(n && function (t, e) {
                a.each((function () {
                    n.apply(this, o || [t.responseText, e, t])
                }))
            }), this
        }, k.expr.pseudos.animated = function (t) {
            return k.grep(k.timers, (function (e) {
                return t === e.elem
            })).length
        }, k.offset = {
            setOffset: function (t, e, n) {
                var r, i, o, a, s, l, u = k.css(t, "position"), c = k(t), h = {};
                "static" === u && (t.style.position = "relative"), s = c.offset(), o = k.css(t, "top"), l = k.css(t, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), m(e) && (e = e.call(t, n, k.extend({}, s))), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + i), "using" in e ? e.using.call(t, h) : ("number" == typeof h.top && (h.top += "px"), "number" == typeof h.left && (h.left += "px"), c.css(h))
            }
        }, k.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each((function (e) {
                    k.offset.setOffset(this, t, e)
                }));
                var e, n, r = this[0];
                return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var t, e, n, r = this[0], i = {top: 0, left: 0};
                    if ("fixed" === k.css(r, "position")) e = r.getBoundingClientRect(); else {
                        for (e = this.offset(), n = r.ownerDocument, t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === k.css(t, "position");) t = t.parentNode;
                        t && t !== r && 1 === t.nodeType && ((i = k(t).offset()).top += k.css(t, "borderTopWidth", !0), i.left += k.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - i.top - k.css(r, "marginTop", !0),
                        left: e.left - i.left - k.css(r, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map((function () {
                    for (var t = this.offsetParent; t && "static" === k.css(t, "position");) t = t.offsetParent;
                    return t || ot
                }))
            }
        }), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (t, e) {
            var n = "pageYOffset" === e;
            k.fn[t] = function (r) {
                return q(this, (function (t, r, i) {
                    var o;
                    if (v(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === i) return o ? o[e] : t[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i
                }), t, r, arguments.length)
            }
        })), k.each(["top", "left"], (function (t, e) {
            k.cssHooks[e] = Wt(_.pixelPosition, (function (t, n) {
                if (n) return n = Gt(t, e), Vt.test(n) ? k(t).position()[e] + "px" : n
            }))
        })), k.each({Height: "height", Width: "width"}, (function (t, e) {
            k.each({padding: "inner" + t, content: e, "": "outer" + t}, (function (n, r) {
                k.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return q(this, (function (e, n, i) {
                        var o;
                        return v(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? k.css(e, n, s) : k.style(e, n, i, s)
                    }), e, a ? i : void 0, a)
                }
            }))
        })), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (t, e) {
            k.fn[e] = function (t) {
                return this.on(e, t)
            }
        })), k.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, r) {
                return this.on(e, t, n, r)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }, hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (t, e) {
            k.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }));
        var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        k.proxy = function (t, e) {
            var n, r, i;
            if ("string" == typeof e && (n = t[e], e = t, t = n), m(t)) return r = s.call(arguments, 2), (i = function () {
                return t.apply(e || this, r.concat(s.call(arguments)))
            }).guid = t.guid = t.guid || k.guid++, i
        }, k.holdReady = function (t) {
            t ? k.readyWait++ : k.ready(!0)
        }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = v, k.camelCase = Z, k.type = w, k.now = Date.now, k.isNumeric = function (t) {
            var e = k.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, k.trim = function (t) {
            return null == t ? "" : (t + "").replace(Xe, "")
        }, void 0 === (r = function () {
            return k
        }.apply(e, [])) || (t.exports = r);
        var Je = n.jQuery, Qe = n.$;
        return k.noConflict = function (t) {
            return n.$ === k && (n.$ = Qe), t && n.jQuery === k && (n.jQuery = Je), k
        }, void 0 === i && (n.jQuery = n.$ = k), k
    }))
}, function (t, e, n) {
    e.glMatrix = n(2), e.mat2 = n(13), e.mat2d = n(14), e.mat3 = n(5), e.mat4 = n(15), e.quat = n(16), e.vec2 = n(17), e.vec3 = n(6), e.vec4 = n(7)
}, function (t, e) {
    var n = {EPSILON: 1e-6};
    n.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, n.RANDOM = Math.random, n.ENABLE_SIMD = !1, n.SIMD_AVAILABLE = n.ARRAY_TYPE === Float32Array && "SIMD" in this, n.USE_SIMD = n.ENABLE_SIMD && n.SIMD_AVAILABLE, n.setMatrixArrayType = function (t) {
        n.ARRAY_TYPE = t
    };
    var r = Math.PI / 180;
    n.toRadian = function (t) {
        return t * r
    }, n.equals = function (t, e) {
        return Math.abs(t - e) <= n.EPSILON * Math.max(1, Math.abs(t), Math.abs(e))
    }, t.exports = n
}, function (t, e, n) {
    (function (t, r) {
        var i;
        /**
         * @license
         * Lodash <https://lodash.com/>
         * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */(function () {
            var o = "Expected a function", a = "__lodash_placeholder__",
                s = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]],
                l = "[object Arguments]", u = "[object Array]", c = "[object Boolean]", h = "[object Date]",
                f = "[object Error]", d = "[object Function]", p = "[object GeneratorFunction]", g = "[object Map]",
                _ = "[object Number]", m = "[object Object]", v = "[object RegExp]", y = "[object Set]",
                b = "[object String]", x = "[object Symbol]", w = "[object WeakMap]", k = "[object ArrayBuffer]",
                S = "[object DataView]", M = "[object Float32Array]", T = "[object Float64Array]",
                I = "[object Int8Array]", C = "[object Int16Array]", A = "[object Int32Array]",
                D = "[object Uint8Array]", z = "[object Uint16Array]", O = "[object Uint32Array]", L = /\b__p \+= '';/g,
                R = /\b(__p \+=) '' \+/g, E = /(__e\(.*?\)|\b__t\)) \+\n'';/g, F = /&(?:amp|lt|gt|quot|#39);/g,
                N = /[&<>"']/g, P = RegExp(F.source), j = RegExp(N.source), H = /<%-([\s\S]+?)%>/g,
                V = /<%([\s\S]+?)%>/g, $ = /<%=([\s\S]+?)%>/g, B = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                q = /^\w*$/,
                G = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                W = /[\\^$.*+?()[\]{}|]/g, U = RegExp(W.source), Z = /^\s+|\s+$/g, Y = /^\s+/, X = /\s+$/,
                J = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Q = /\{\n\/\* \[wrapped with (.+)\] \*/, K = /,? & /,
                tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, et = /\\(\\)?/g,
                nt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, rt = /\w*$/, it = /^[-+]0x[0-9a-f]+$/i, ot = /^0b[01]+$/i,
                at = /^\[object .+?Constructor\]$/, st = /^0o[0-7]+$/i, lt = /^(?:0|[1-9]\d*)$/,
                ut = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ct = /($^)/, ht = /['\n\r\u2028\u2029\\]/g,
                ft = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                dt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                pt = "[\\ud800-\\udfff]", gt = "[" + dt + "]", _t = "[" + ft + "]", mt = "\\d+",
                vt = "[\\u2700-\\u27bf]", yt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                bt = "[^\\ud800-\\udfff" + dt + mt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                xt = "\\ud83c[\\udffb-\\udfff]", wt = "[^\\ud800-\\udfff]", kt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                St = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mt = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                Tt = "(?:" + yt + "|" + bt + ")", It = "(?:" + Mt + "|" + bt + ")",
                Ct = "(?:" + _t + "|" + xt + ")" + "?",
                At = "[\\ufe0e\\ufe0f]?" + Ct + ("(?:\\u200d(?:" + [wt, kt, St].join("|") + ")[\\ufe0e\\ufe0f]?" + Ct + ")*"),
                Dt = "(?:" + [vt, kt, St].join("|") + ")" + At,
                zt = "(?:" + [wt + _t + "?", _t, kt, St, pt].join("|") + ")", Ot = RegExp("['’]", "g"),
                Lt = RegExp(_t, "g"), Rt = RegExp(xt + "(?=" + xt + ")|" + zt + At, "g"),
                Et = RegExp([Mt + "?" + yt + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [gt, Mt, "$"].join("|") + ")", It + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [gt, Mt + Tt, "$"].join("|") + ")", Mt + "?" + Tt + "+(?:['’](?:d|ll|m|re|s|t|ve))?", Mt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", mt, Dt].join("|"), "g"),
                Ft = RegExp("[\\u200d\\ud800-\\udfff" + ft + "\\ufe0e\\ufe0f]"),
                Nt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                Pt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                jt = -1, Ht = {};
            Ht[M] = Ht[T] = Ht[I] = Ht[C] = Ht[A] = Ht[D] = Ht["[object Uint8ClampedArray]"] = Ht[z] = Ht[O] = !0, Ht[l] = Ht[u] = Ht[k] = Ht[c] = Ht[S] = Ht[h] = Ht[f] = Ht[d] = Ht[g] = Ht[_] = Ht[m] = Ht[v] = Ht[y] = Ht[b] = Ht[w] = !1;
            var Vt = {};
            Vt[l] = Vt[u] = Vt[k] = Vt[S] = Vt[c] = Vt[h] = Vt[M] = Vt[T] = Vt[I] = Vt[C] = Vt[A] = Vt[g] = Vt[_] = Vt[m] = Vt[v] = Vt[y] = Vt[b] = Vt[x] = Vt[D] = Vt["[object Uint8ClampedArray]"] = Vt[z] = Vt[O] = !0, Vt[f] = Vt[d] = Vt[w] = !1;
            var $t = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"},
                Bt = parseFloat, qt = parseInt, Gt = "object" == typeof t && t && t.Object === Object && t,
                Wt = "object" == typeof self && self && self.Object === Object && self,
                Ut = Gt || Wt || Function("return this")(), Zt = e && !e.nodeType && e,
                Yt = Zt && "object" == typeof r && r && !r.nodeType && r, Xt = Yt && Yt.exports === Zt,
                Jt = Xt && Gt.process, Qt = function () {
                    try {
                        var t = Yt && Yt.require && Yt.require("util").types;
                        return t || Jt && Jt.binding && Jt.binding("util")
                    } catch (t) {
                    }
                }(), Kt = Qt && Qt.isArrayBuffer, te = Qt && Qt.isDate, ee = Qt && Qt.isMap, ne = Qt && Qt.isRegExp,
                re = Qt && Qt.isSet, ie = Qt && Qt.isTypedArray;

            function oe(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }

            function ae(t, e, n, r) {
                for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) {
                    var a = t[i];
                    e(r, a, n(a), t)
                }
                return r
            }

            function se(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);) ;
                return t
            }

            function le(t, e) {
                for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t);) ;
                return t
            }

            function ue(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) if (!e(t[n], n, t)) return !1;
                return !0
            }

            function ce(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
                    var a = t[n];
                    e(a, n, t) && (o[i++] = a)
                }
                return o
            }

            function he(t, e) {
                return !!(null == t ? 0 : t.length) && xe(t, e, 0) > -1
            }

            function fe(t, e, n) {
                for (var r = -1, i = null == t ? 0 : t.length; ++r < i;) if (n(e, t[r])) return !0;
                return !1
            }

            function de(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
                return i
            }

            function pe(t, e) {
                for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
                return t
            }

            function ge(t, e, n, r) {
                var i = -1, o = null == t ? 0 : t.length;
                for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
                return n
            }

            function _e(t, e, n, r) {
                var i = null == t ? 0 : t.length;
                for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
                return n
            }

            function me(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) if (e(t[n], n, t)) return !0;
                return !1
            }

            var ve = Me("length");

            function ye(t, e, n) {
                var r;
                return n(t, (function (t, n, i) {
                    if (e(t, n, i)) return r = n, !1
                })), r
            }

            function be(t, e, n, r) {
                for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) if (e(t[o], o, t)) return o;
                return -1
            }

            function xe(t, e, n) {
                return e == e ? function (t, e, n) {
                    var r = n - 1, i = t.length;
                    for (; ++r < i;) if (t[r] === e) return r;
                    return -1
                }(t, e, n) : be(t, ke, n)
            }

            function we(t, e, n, r) {
                for (var i = n - 1, o = t.length; ++i < o;) if (r(t[i], e)) return i;
                return -1
            }

            function ke(t) {
                return t != t
            }

            function Se(t, e) {
                var n = null == t ? 0 : t.length;
                return n ? Ce(t, e) / n : NaN
            }

            function Me(t) {
                return function (e) {
                    return null == e ? void 0 : e[t]
                }
            }

            function Te(t) {
                return function (e) {
                    return null == t ? void 0 : t[e]
                }
            }

            function Ie(t, e, n, r, i) {
                return i(t, (function (t, i, o) {
                    n = r ? (r = !1, t) : e(n, t, i, o)
                })), n
            }

            function Ce(t, e) {
                for (var n, r = -1, i = t.length; ++r < i;) {
                    var o = e(t[r]);
                    void 0 !== o && (n = void 0 === n ? o : n + o)
                }
                return n
            }

            function Ae(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }

            function De(t) {
                return function (e) {
                    return t(e)
                }
            }

            function ze(t, e) {
                return de(e, (function (e) {
                    return t[e]
                }))
            }

            function Oe(t, e) {
                return t.has(e)
            }

            function Le(t, e) {
                for (var n = -1, r = t.length; ++n < r && xe(e, t[n], 0) > -1;) ;
                return n
            }

            function Re(t, e) {
                for (var n = t.length; n-- && xe(e, t[n], 0) > -1;) ;
                return n
            }

            function Ee(t, e) {
                for (var n = t.length, r = 0; n--;) t[n] === e && ++r;
                return r
            }

            var Fe = Te({
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }), Ne = Te({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"});

            function Pe(t) {
                return "\\" + $t[t]
            }

            function je(t) {
                return Ft.test(t)
            }

            function He(t) {
                var e = -1, n = Array(t.size);
                return t.forEach((function (t, r) {
                    n[++e] = [r, t]
                })), n
            }

            function Ve(t, e) {
                return function (n) {
                    return t(e(n))
                }
            }

            function $e(t, e) {
                for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
                    var s = t[n];
                    s !== e && s !== a || (t[n] = a, o[i++] = n)
                }
                return o
            }

            function Be(t) {
                var e = -1, n = Array(t.size);
                return t.forEach((function (t) {
                    n[++e] = t
                })), n
            }

            function qe(t) {
                var e = -1, n = Array(t.size);
                return t.forEach((function (t) {
                    n[++e] = [t, t]
                })), n
            }

            function Ge(t) {
                return je(t) ? function (t) {
                    var e = Rt.lastIndex = 0;
                    for (; Rt.test(t);) ++e;
                    return e
                }(t) : ve(t)
            }

            function We(t) {
                return je(t) ? function (t) {
                    return t.match(Rt) || []
                }(t) : function (t) {
                    return t.split("")
                }(t)
            }

            var Ue = Te({"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'"});
            var Ze = function t(e) {
                var n, r = (e = null == e ? Ut : Ze.defaults(Ut.Object(), e, Ze.pick(Ut, Pt))).Array, i = e.Date,
                    ft = e.Error, dt = e.Function, pt = e.Math, gt = e.Object, _t = e.RegExp, mt = e.String,
                    vt = e.TypeError, yt = r.prototype, bt = dt.prototype, xt = gt.prototype,
                    wt = e["__core-js_shared__"], kt = bt.toString, St = xt.hasOwnProperty, Mt = 0,
                    Tt = (n = /[^.]+$/.exec(wt && wt.keys && wt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                    It = xt.toString, Ct = kt.call(gt), At = Ut._,
                    Dt = _t("^" + kt.call(St).replace(W, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    zt = Xt ? e.Buffer : void 0, Rt = e.Symbol, Ft = e.Uint8Array, $t = zt ? zt.allocUnsafe : void 0,
                    Gt = Ve(gt.getPrototypeOf, gt), Wt = gt.create, Zt = xt.propertyIsEnumerable, Yt = yt.splice,
                    Jt = Rt ? Rt.isConcatSpreadable : void 0, Qt = Rt ? Rt.iterator : void 0,
                    ve = Rt ? Rt.toStringTag : void 0, Te = function () {
                        try {
                            var t = Ki(gt, "defineProperty");
                            return t({}, "", {}), t
                        } catch (t) {
                        }
                    }(), Ye = e.clearTimeout !== Ut.clearTimeout && e.clearTimeout,
                    Xe = i && i.now !== Ut.Date.now && i.now, Je = e.setTimeout !== Ut.setTimeout && e.setTimeout,
                    Qe = pt.ceil, Ke = pt.floor, tn = gt.getOwnPropertySymbols, en = zt ? zt.isBuffer : void 0,
                    nn = e.isFinite, rn = yt.join, on = Ve(gt.keys, gt), an = pt.max, sn = pt.min, ln = i.now,
                    un = e.parseInt, cn = pt.random, hn = yt.reverse, fn = Ki(e, "DataView"), dn = Ki(e, "Map"),
                    pn = Ki(e, "Promise"), gn = Ki(e, "Set"), _n = Ki(e, "WeakMap"), mn = Ki(gt, "create"),
                    vn = _n && new _n, yn = {}, bn = Io(fn), xn = Io(dn), wn = Io(pn), kn = Io(gn), Sn = Io(_n),
                    Mn = Rt ? Rt.prototype : void 0, Tn = Mn ? Mn.valueOf : void 0, In = Mn ? Mn.toString : void 0;

                function Cn(t) {
                    if (qa(t) && !La(t) && !(t instanceof On)) {
                        if (t instanceof zn) return t;
                        if (St.call(t, "__wrapped__")) return Co(t)
                    }
                    return new zn(t)
                }

                var An = function () {
                    function t() {
                    }

                    return function (e) {
                        if (!Ba(e)) return {};
                        if (Wt) return Wt(e);
                        t.prototype = e;
                        var n = new t;
                        return t.prototype = void 0, n
                    }
                }();

                function Dn() {
                }

                function zn(t, e) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
                }

                function On(t) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                }

                function Ln(t) {
                    var e = -1, n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function Rn(t) {
                    var e = -1, n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function En(t) {
                    var e = -1, n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function Fn(t) {
                    var e = -1, n = null == t ? 0 : t.length;
                    for (this.__data__ = new En; ++e < n;) this.add(t[e])
                }

                function Nn(t) {
                    var e = this.__data__ = new Rn(t);
                    this.size = e.size
                }

                function Pn(t, e) {
                    var n = La(t), r = !n && Oa(t), i = !n && !r && Na(t), o = !n && !r && !i && Qa(t),
                        a = n || r || i || o, s = a ? Ae(t.length, mt) : [], l = s.length;
                    for (var u in t) !e && !St.call(t, u) || a && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ao(u, l)) || s.push(u);
                    return s
                }

                function jn(t) {
                    var e = t.length;
                    return e ? t[Fr(0, e - 1)] : void 0
                }

                function Hn(t, e) {
                    return So(mi(t), Yn(e, 0, t.length))
                }

                function Vn(t) {
                    return So(mi(t))
                }

                function $n(t, e, n) {
                    (void 0 !== n && !Aa(t[e], n) || void 0 === n && !(e in t)) && Un(t, e, n)
                }

                function Bn(t, e, n) {
                    var r = t[e];
                    St.call(t, e) && Aa(r, n) && (void 0 !== n || e in t) || Un(t, e, n)
                }

                function qn(t, e) {
                    for (var n = t.length; n--;) if (Aa(t[n][0], e)) return n;
                    return -1
                }

                function Gn(t, e, n, r) {
                    return tr(t, (function (t, i, o) {
                        e(r, t, n(t), o)
                    })), r
                }

                function Wn(t, e) {
                    return t && vi(e, bs(e), t)
                }

                function Un(t, e, n) {
                    "__proto__" == e && Te ? Te(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : t[e] = n
                }

                function Zn(t, e) {
                    for (var n = -1, i = e.length, o = r(i), a = null == t; ++n < i;) o[n] = a ? void 0 : gs(t, e[n]);
                    return o
                }

                function Yn(t, e, n) {
                    return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
                }

                function Xn(t, e, n, r, i, o) {
                    var a, s = 1 & e, u = 2 & e, f = 4 & e;
                    if (n && (a = i ? n(t, r, i, o) : n(t)), void 0 !== a) return a;
                    if (!Ba(t)) return t;
                    var w = La(t);
                    if (w) {
                        if (a = function (t) {
                            var e = t.length, n = new t.constructor(e);
                            e && "string" == typeof t[0] && St.call(t, "index") && (n.index = t.index, n.input = t.input);
                            return n
                        }(t), !s) return mi(t, a)
                    } else {
                        var L = no(t), R = L == d || L == p;
                        if (Na(t)) return hi(t, s);
                        if (L == m || L == l || R && !i) {
                            if (a = u || R ? {} : io(t), !s) return u ? function (t, e) {
                                return vi(t, eo(t), e)
                            }(t, function (t, e) {
                                return t && vi(e, xs(e), t)
                            }(a, t)) : function (t, e) {
                                return vi(t, to(t), e)
                            }(t, Wn(a, t))
                        } else {
                            if (!Vt[L]) return i ? t : {};
                            a = function (t, e, n) {
                                var r = t.constructor;
                                switch (e) {
                                    case k:
                                        return fi(t);
                                    case c:
                                    case h:
                                        return new r(+t);
                                    case S:
                                        return function (t, e) {
                                            var n = e ? fi(t.buffer) : t.buffer;
                                            return new t.constructor(n, t.byteOffset, t.byteLength)
                                        }(t, n);
                                    case M:
                                    case T:
                                    case I:
                                    case C:
                                    case A:
                                    case D:
                                    case"[object Uint8ClampedArray]":
                                    case z:
                                    case O:
                                        return di(t, n);
                                    case g:
                                        return new r;
                                    case _:
                                    case b:
                                        return new r(t);
                                    case v:
                                        return function (t) {
                                            var e = new t.constructor(t.source, rt.exec(t));
                                            return e.lastIndex = t.lastIndex, e
                                        }(t);
                                    case y:
                                        return new r;
                                    case x:
                                        return i = t, Tn ? gt(Tn.call(i)) : {}
                                }
                                var i
                            }(t, L, s)
                        }
                    }
                    o || (o = new Nn);
                    var E = o.get(t);
                    if (E) return E;
                    o.set(t, a), Ya(t) ? t.forEach((function (r) {
                        a.add(Xn(r, e, n, r, t, o))
                    })) : Ga(t) && t.forEach((function (r, i) {
                        a.set(i, Xn(r, e, n, i, t, o))
                    }));
                    var F = w ? void 0 : (f ? u ? Wi : Gi : u ? xs : bs)(t);
                    return se(F || t, (function (r, i) {
                        F && (r = t[i = r]), Bn(a, i, Xn(r, e, n, i, t, o))
                    })), a
                }

                function Jn(t, e, n) {
                    var r = n.length;
                    if (null == t) return !r;
                    for (t = gt(t); r--;) {
                        var i = n[r], o = e[i], a = t[i];
                        if (void 0 === a && !(i in t) || !o(a)) return !1
                    }
                    return !0
                }

                function Qn(t, e, n) {
                    if ("function" != typeof t) throw new vt(o);
                    return bo((function () {
                        t.apply(void 0, n)
                    }), e)
                }

                function Kn(t, e, n, r) {
                    var i = -1, o = he, a = !0, s = t.length, l = [], u = e.length;
                    if (!s) return l;
                    n && (e = de(e, De(n))), r ? (o = fe, a = !1) : e.length >= 200 && (o = Oe, a = !1, e = new Fn(e));
                    t:for (; ++i < s;) {
                        var c = t[i], h = null == n ? c : n(c);
                        if (c = r || 0 !== c ? c : 0, a && h == h) {
                            for (var f = u; f--;) if (e[f] === h) continue t;
                            l.push(c)
                        } else o(e, h, r) || l.push(c)
                    }
                    return l
                }

                Cn.templateSettings = {
                    escape: H,
                    evaluate: V,
                    interpolate: $,
                    variable: "",
                    imports: {_: Cn}
                }, Cn.prototype = Dn.prototype, Cn.prototype.constructor = Cn, zn.prototype = An(Dn.prototype), zn.prototype.constructor = zn, On.prototype = An(Dn.prototype), On.prototype.constructor = On, Ln.prototype.clear = function () {
                    this.__data__ = mn ? mn(null) : {}, this.size = 0
                }, Ln.prototype.delete = function (t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }, Ln.prototype.get = function (t) {
                    var e = this.__data__;
                    if (mn) {
                        var n = e[t];
                        return "__lodash_hash_undefined__" === n ? void 0 : n
                    }
                    return St.call(e, t) ? e[t] : void 0
                }, Ln.prototype.has = function (t) {
                    var e = this.__data__;
                    return mn ? void 0 !== e[t] : St.call(e, t)
                }, Ln.prototype.set = function (t, e) {
                    var n = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, n[t] = mn && void 0 === e ? "__lodash_hash_undefined__" : e, this
                }, Rn.prototype.clear = function () {
                    this.__data__ = [], this.size = 0
                }, Rn.prototype.delete = function (t) {
                    var e = this.__data__, n = qn(e, t);
                    return !(n < 0) && (n == e.length - 1 ? e.pop() : Yt.call(e, n, 1), --this.size, !0)
                }, Rn.prototype.get = function (t) {
                    var e = this.__data__, n = qn(e, t);
                    return n < 0 ? void 0 : e[n][1]
                }, Rn.prototype.has = function (t) {
                    return qn(this.__data__, t) > -1
                }, Rn.prototype.set = function (t, e) {
                    var n = this.__data__, r = qn(n, t);
                    return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
                }, En.prototype.clear = function () {
                    this.size = 0, this.__data__ = {hash: new Ln, map: new (dn || Rn), string: new Ln}
                }, En.prototype.delete = function (t) {
                    var e = Ji(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }, En.prototype.get = function (t) {
                    return Ji(this, t).get(t)
                }, En.prototype.has = function (t) {
                    return Ji(this, t).has(t)
                }, En.prototype.set = function (t, e) {
                    var n = Ji(this, t), r = n.size;
                    return n.set(t, e), this.size += n.size == r ? 0 : 1, this
                }, Fn.prototype.add = Fn.prototype.push = function (t) {
                    return this.__data__.set(t, "__lodash_hash_undefined__"), this
                }, Fn.prototype.has = function (t) {
                    return this.__data__.has(t)
                }, Nn.prototype.clear = function () {
                    this.__data__ = new Rn, this.size = 0
                }, Nn.prototype.delete = function (t) {
                    var e = this.__data__, n = e.delete(t);
                    return this.size = e.size, n
                }, Nn.prototype.get = function (t) {
                    return this.__data__.get(t)
                }, Nn.prototype.has = function (t) {
                    return this.__data__.has(t)
                }, Nn.prototype.set = function (t, e) {
                    var n = this.__data__;
                    if (n instanceof Rn) {
                        var r = n.__data__;
                        if (!dn || r.length < 199) return r.push([t, e]), this.size = ++n.size, this;
                        n = this.__data__ = new En(r)
                    }
                    return n.set(t, e), this.size = n.size, this
                };
                var tr = xi(lr), er = xi(ur, !0);

                function nr(t, e) {
                    var n = !0;
                    return tr(t, (function (t, r, i) {
                        return n = !!e(t, r, i)
                    })), n
                }

                function rr(t, e, n) {
                    for (var r = -1, i = t.length; ++r < i;) {
                        var o = t[r], a = e(o);
                        if (null != a && (void 0 === s ? a == a && !Ja(a) : n(a, s))) var s = a, l = o
                    }
                    return l
                }

                function ir(t, e) {
                    var n = [];
                    return tr(t, (function (t, r, i) {
                        e(t, r, i) && n.push(t)
                    })), n
                }

                function or(t, e, n, r, i) {
                    var o = -1, a = t.length;
                    for (n || (n = oo), i || (i = []); ++o < a;) {
                        var s = t[o];
                        e > 0 && n(s) ? e > 1 ? or(s, e - 1, n, r, i) : pe(i, s) : r || (i[i.length] = s)
                    }
                    return i
                }

                var ar = wi(), sr = wi(!0);

                function lr(t, e) {
                    return t && ar(t, e, bs)
                }

                function ur(t, e) {
                    return t && sr(t, e, bs)
                }

                function cr(t, e) {
                    return ce(e, (function (e) {
                        return Ha(t[e])
                    }))
                }

                function hr(t, e) {
                    for (var n = 0, r = (e = si(e, t)).length; null != t && n < r;) t = t[To(e[n++])];
                    return n && n == r ? t : void 0
                }

                function fr(t, e, n) {
                    var r = e(t);
                    return La(t) ? r : pe(r, n(t))
                }

                function dr(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : ve && ve in gt(t) ? function (t) {
                        var e = St.call(t, ve), n = t[ve];
                        try {
                            t[ve] = void 0;
                            var r = !0
                        } catch (t) {
                        }
                        var i = It.call(t);
                        r && (e ? t[ve] = n : delete t[ve]);
                        return i
                    }(t) : function (t) {
                        return It.call(t)
                    }(t)
                }

                function pr(t, e) {
                    return t > e
                }

                function gr(t, e) {
                    return null != t && St.call(t, e)
                }

                function _r(t, e) {
                    return null != t && e in gt(t)
                }

                function mr(t, e, n) {
                    for (var i = n ? fe : he, o = t[0].length, a = t.length, s = a, l = r(a), u = 1 / 0, c = []; s--;) {
                        var h = t[s];
                        s && e && (h = de(h, De(e))), u = sn(h.length, u), l[s] = !n && (e || o >= 120 && h.length >= 120) ? new Fn(s && h) : void 0
                    }
                    h = t[0];
                    var f = -1, d = l[0];
                    t:for (; ++f < o && c.length < u;) {
                        var p = h[f], g = e ? e(p) : p;
                        if (p = n || 0 !== p ? p : 0, !(d ? Oe(d, g) : i(c, g, n))) {
                            for (s = a; --s;) {
                                var _ = l[s];
                                if (!(_ ? Oe(_, g) : i(t[s], g, n))) continue t
                            }
                            d && d.push(g), c.push(p)
                        }
                    }
                    return c
                }

                function vr(t, e, n) {
                    var r = null == (t = _o(t, e = si(e, t))) ? t : t[To(jo(e))];
                    return null == r ? void 0 : oe(r, t, n)
                }

                function yr(t) {
                    return qa(t) && dr(t) == l
                }

                function br(t, e, n, r, i) {
                    return t === e || (null == t || null == e || !qa(t) && !qa(e) ? t != t && e != e : function (t, e, n, r, i, o) {
                        var a = La(t), s = La(e), d = a ? u : no(t), p = s ? u : no(e), w = (d = d == l ? m : d) == m,
                            M = (p = p == l ? m : p) == m, T = d == p;
                        if (T && Na(t)) {
                            if (!Na(e)) return !1;
                            a = !0, w = !1
                        }
                        if (T && !w) return o || (o = new Nn), a || Qa(t) ? Bi(t, e, n, r, i, o) : function (t, e, n, r, i, o, a) {
                            switch (n) {
                                case S:
                                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                    t = t.buffer, e = e.buffer;
                                case k:
                                    return !(t.byteLength != e.byteLength || !o(new Ft(t), new Ft(e)));
                                case c:
                                case h:
                                case _:
                                    return Aa(+t, +e);
                                case f:
                                    return t.name == e.name && t.message == e.message;
                                case v:
                                case b:
                                    return t == e + "";
                                case g:
                                    var s = He;
                                case y:
                                    var l = 1 & r;
                                    if (s || (s = Be), t.size != e.size && !l) return !1;
                                    var u = a.get(t);
                                    if (u) return u == e;
                                    r |= 2, a.set(t, e);
                                    var d = Bi(s(t), s(e), r, i, o, a);
                                    return a.delete(t), d;
                                case x:
                                    if (Tn) return Tn.call(t) == Tn.call(e)
                            }
                            return !1
                        }(t, e, d, n, r, i, o);
                        if (!(1 & n)) {
                            var I = w && St.call(t, "__wrapped__"), C = M && St.call(e, "__wrapped__");
                            if (I || C) {
                                var A = I ? t.value() : t, D = C ? e.value() : e;
                                return o || (o = new Nn), i(A, D, n, r, o)
                            }
                        }
                        if (!T) return !1;
                        return o || (o = new Nn), function (t, e, n, r, i, o) {
                            var a = 1 & n, s = Gi(t), l = s.length, u = Gi(e).length;
                            if (l != u && !a) return !1;
                            var c = l;
                            for (; c--;) {
                                var h = s[c];
                                if (!(a ? h in e : St.call(e, h))) return !1
                            }
                            var f = o.get(t), d = o.get(e);
                            if (f && d) return f == e && d == t;
                            var p = !0;
                            o.set(t, e), o.set(e, t);
                            var g = a;
                            for (; ++c < l;) {
                                h = s[c];
                                var _ = t[h], m = e[h];
                                if (r) var v = a ? r(m, _, h, e, t, o) : r(_, m, h, t, e, o);
                                if (!(void 0 === v ? _ === m || i(_, m, n, r, o) : v)) {
                                    p = !1;
                                    break
                                }
                                g || (g = "constructor" == h)
                            }
                            if (p && !g) {
                                var y = t.constructor, b = e.constructor;
                                y == b || !("constructor" in t) || !("constructor" in e) || "function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b || (p = !1)
                            }
                            return o.delete(t), o.delete(e), p
                        }(t, e, n, r, i, o)
                    }(t, e, n, r, br, i))
                }

                function xr(t, e, n, r) {
                    var i = n.length, o = i, a = !r;
                    if (null == t) return !o;
                    for (t = gt(t); i--;) {
                        var s = n[i];
                        if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
                    }
                    for (; ++i < o;) {
                        var l = (s = n[i])[0], u = t[l], c = s[1];
                        if (a && s[2]) {
                            if (void 0 === u && !(l in t)) return !1
                        } else {
                            var h = new Nn;
                            if (r) var f = r(u, c, l, t, e, h);
                            if (!(void 0 === f ? br(c, u, 3, r, h) : f)) return !1
                        }
                    }
                    return !0
                }

                function wr(t) {
                    return !(!Ba(t) || (e = t, Tt && Tt in e)) && (Ha(t) ? Dt : at).test(Io(t));
                    var e
                }

                function kr(t) {
                    return "function" == typeof t ? t : null == t ? Ws : "object" == typeof t ? La(t) ? Ar(t[0], t[1]) : Cr(t) : el(t)
                }

                function Sr(t) {
                    if (!ho(t)) return on(t);
                    var e = [];
                    for (var n in gt(t)) St.call(t, n) && "constructor" != n && e.push(n);
                    return e
                }

                function Mr(t) {
                    if (!Ba(t)) return function (t) {
                        var e = [];
                        if (null != t) for (var n in gt(t)) e.push(n);
                        return e
                    }(t);
                    var e = ho(t), n = [];
                    for (var r in t) ("constructor" != r || !e && St.call(t, r)) && n.push(r);
                    return n
                }

                function Tr(t, e) {
                    return t < e
                }

                function Ir(t, e) {
                    var n = -1, i = Ea(t) ? r(t.length) : [];
                    return tr(t, (function (t, r, o) {
                        i[++n] = e(t, r, o)
                    })), i
                }

                function Cr(t) {
                    var e = Qi(t);
                    return 1 == e.length && e[0][2] ? po(e[0][0], e[0][1]) : function (n) {
                        return n === t || xr(n, t, e)
                    }
                }

                function Ar(t, e) {
                    return lo(t) && fo(e) ? po(To(t), e) : function (n) {
                        var r = gs(n, t);
                        return void 0 === r && r === e ? _s(n, t) : br(e, r, 3)
                    }
                }

                function Dr(t, e, n, r, i) {
                    t !== e && ar(e, (function (o, a) {
                        if (i || (i = new Nn), Ba(o)) !function (t, e, n, r, i, o, a) {
                            var s = vo(t, n), l = vo(e, n), u = a.get(l);
                            if (u) return void $n(t, n, u);
                            var c = o ? o(s, l, n + "", t, e, a) : void 0, h = void 0 === c;
                            if (h) {
                                var f = La(l), d = !f && Na(l), p = !f && !d && Qa(l);
                                c = l, f || d || p ? La(s) ? c = s : Fa(s) ? c = mi(s) : d ? (h = !1, c = hi(l, !0)) : p ? (h = !1, c = di(l, !0)) : c = [] : Ua(l) || Oa(l) ? (c = s, Oa(s) ? c = as(s) : Ba(s) && !Ha(s) || (c = io(l))) : h = !1
                            }
                            h && (a.set(l, c), i(c, l, r, o, a), a.delete(l));
                            $n(t, n, c)
                        }(t, e, a, n, Dr, r, i); else {
                            var s = r ? r(vo(t, a), o, a + "", t, e, i) : void 0;
                            void 0 === s && (s = o), $n(t, a, s)
                        }
                    }), xs)
                }

                function zr(t, e) {
                    var n = t.length;
                    if (n) return ao(e += e < 0 ? n : 0, n) ? t[e] : void 0
                }

                function Or(t, e, n) {
                    e = e.length ? de(e, (function (t) {
                        return La(t) ? function (e) {
                            return hr(e, 1 === t.length ? t[0] : t)
                        } : t
                    })) : [Ws];
                    var r = -1;
                    return e = de(e, De(Xi())), function (t, e) {
                        var n = t.length;
                        for (t.sort(e); n--;) t[n] = t[n].value;
                        return t
                    }(Ir(t, (function (t, n, i) {
                        return {
                            criteria: de(e, (function (e) {
                                return e(t)
                            })), index: ++r, value: t
                        }
                    })), (function (t, e) {
                        return function (t, e, n) {
                            var r = -1, i = t.criteria, o = e.criteria, a = i.length, s = n.length;
                            for (; ++r < a;) {
                                var l = pi(i[r], o[r]);
                                if (l) {
                                    if (r >= s) return l;
                                    var u = n[r];
                                    return l * ("desc" == u ? -1 : 1)
                                }
                            }
                            return t.index - e.index
                        }(t, e, n)
                    }))
                }

                function Lr(t, e, n) {
                    for (var r = -1, i = e.length, o = {}; ++r < i;) {
                        var a = e[r], s = hr(t, a);
                        n(s, a) && Vr(o, si(a, t), s)
                    }
                    return o
                }

                function Rr(t, e, n, r) {
                    var i = r ? we : xe, o = -1, a = e.length, s = t;
                    for (t === e && (e = mi(e)), n && (s = de(t, De(n))); ++o < a;) for (var l = 0, u = e[o], c = n ? n(u) : u; (l = i(s, c, l, r)) > -1;) s !== t && Yt.call(s, l, 1), Yt.call(t, l, 1);
                    return t
                }

                function Er(t, e) {
                    for (var n = t ? e.length : 0, r = n - 1; n--;) {
                        var i = e[n];
                        if (n == r || i !== o) {
                            var o = i;
                            ao(i) ? Yt.call(t, i, 1) : Kr(t, i)
                        }
                    }
                    return t
                }

                function Fr(t, e) {
                    return t + Ke(cn() * (e - t + 1))
                }

                function Nr(t, e) {
                    var n = "";
                    if (!t || e < 1 || e > 9007199254740991) return n;
                    do {
                        e % 2 && (n += t), (e = Ke(e / 2)) && (t += t)
                    } while (e);
                    return n
                }

                function Pr(t, e) {
                    return xo(go(t, e, Ws), t + "")
                }

                function jr(t) {
                    return jn(As(t))
                }

                function Hr(t, e) {
                    var n = As(t);
                    return So(n, Yn(e, 0, n.length))
                }

                function Vr(t, e, n, r) {
                    if (!Ba(t)) return t;
                    for (var i = -1, o = (e = si(e, t)).length, a = o - 1, s = t; null != s && ++i < o;) {
                        var l = To(e[i]), u = n;
                        if ("__proto__" === l || "constructor" === l || "prototype" === l) return t;
                        if (i != a) {
                            var c = s[l];
                            void 0 === (u = r ? r(c, l, s) : void 0) && (u = Ba(c) ? c : ao(e[i + 1]) ? [] : {})
                        }
                        Bn(s, l, u), s = s[l]
                    }
                    return t
                }

                var $r = vn ? function (t, e) {
                    return vn.set(t, e), t
                } : Ws, Br = Te ? function (t, e) {
                    return Te(t, "toString", {configurable: !0, enumerable: !1, value: Bs(e), writable: !0})
                } : Ws;

                function qr(t) {
                    return So(As(t))
                }

                function Gr(t, e, n) {
                    var i = -1, o = t.length;
                    e < 0 && (e = -e > o ? 0 : o + e), (n = n > o ? o : n) < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
                    for (var a = r(o); ++i < o;) a[i] = t[i + e];
                    return a
                }

                function Wr(t, e) {
                    var n;
                    return tr(t, (function (t, r, i) {
                        return !(n = e(t, r, i))
                    })), !!n
                }

                function Ur(t, e, n) {
                    var r = 0, i = null == t ? r : t.length;
                    if ("number" == typeof e && e == e && i <= 2147483647) {
                        for (; r < i;) {
                            var o = r + i >>> 1, a = t[o];
                            null !== a && !Ja(a) && (n ? a <= e : a < e) ? r = o + 1 : i = o
                        }
                        return i
                    }
                    return Zr(t, e, Ws, n)
                }

                function Zr(t, e, n, r) {
                    var i = 0, o = null == t ? 0 : t.length;
                    if (0 === o) return 0;
                    for (var a = (e = n(e)) != e, s = null === e, l = Ja(e), u = void 0 === e; i < o;) {
                        var c = Ke((i + o) / 2), h = n(t[c]), f = void 0 !== h, d = null === h, p = h == h, g = Ja(h);
                        if (a) var _ = r || p; else _ = u ? p && (r || f) : s ? p && f && (r || !d) : l ? p && f && !d && (r || !g) : !d && !g && (r ? h <= e : h < e);
                        _ ? i = c + 1 : o = c
                    }
                    return sn(o, 4294967294)
                }

                function Yr(t, e) {
                    for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
                        var a = t[n], s = e ? e(a) : a;
                        if (!n || !Aa(s, l)) {
                            var l = s;
                            o[i++] = 0 === a ? 0 : a
                        }
                    }
                    return o
                }

                function Xr(t) {
                    return "number" == typeof t ? t : Ja(t) ? NaN : +t
                }

                function Jr(t) {
                    if ("string" == typeof t) return t;
                    if (La(t)) return de(t, Jr) + "";
                    if (Ja(t)) return In ? In.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e
                }

                function Qr(t, e, n) {
                    var r = -1, i = he, o = t.length, a = !0, s = [], l = s;
                    if (n) a = !1, i = fe; else if (o >= 200) {
                        var u = e ? null : Ni(t);
                        if (u) return Be(u);
                        a = !1, i = Oe, l = new Fn
                    } else l = e ? [] : s;
                    t:for (; ++r < o;) {
                        var c = t[r], h = e ? e(c) : c;
                        if (c = n || 0 !== c ? c : 0, a && h == h) {
                            for (var f = l.length; f--;) if (l[f] === h) continue t;
                            e && l.push(h), s.push(c)
                        } else i(l, h, n) || (l !== s && l.push(h), s.push(c))
                    }
                    return s
                }

                function Kr(t, e) {
                    return null == (t = _o(t, e = si(e, t))) || delete t[To(jo(e))]
                }

                function ti(t, e, n, r) {
                    return Vr(t, e, n(hr(t, e)), r)
                }

                function ei(t, e, n, r) {
                    for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(t[o], o, t);) ;
                    return n ? Gr(t, r ? 0 : o, r ? o + 1 : i) : Gr(t, r ? o + 1 : 0, r ? i : o)
                }

                function ni(t, e) {
                    var n = t;
                    return n instanceof On && (n = n.value()), ge(e, (function (t, e) {
                        return e.func.apply(e.thisArg, pe([t], e.args))
                    }), n)
                }

                function ri(t, e, n) {
                    var i = t.length;
                    if (i < 2) return i ? Qr(t[0]) : [];
                    for (var o = -1, a = r(i); ++o < i;) for (var s = t[o], l = -1; ++l < i;) l != o && (a[o] = Kn(a[o] || s, t[l], e, n));
                    return Qr(or(a, 1), e, n)
                }

                function ii(t, e, n) {
                    for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i;) {
                        var s = r < o ? e[r] : void 0;
                        n(a, t[r], s)
                    }
                    return a
                }

                function oi(t) {
                    return Fa(t) ? t : []
                }

                function ai(t) {
                    return "function" == typeof t ? t : Ws
                }

                function si(t, e) {
                    return La(t) ? t : lo(t, e) ? [t] : Mo(ss(t))
                }

                var li = Pr;

                function ui(t, e, n) {
                    var r = t.length;
                    return n = void 0 === n ? r : n, !e && n >= r ? t : Gr(t, e, n)
                }

                var ci = Ye || function (t) {
                    return Ut.clearTimeout(t)
                };

                function hi(t, e) {
                    if (e) return t.slice();
                    var n = t.length, r = $t ? $t(n) : new t.constructor(n);
                    return t.copy(r), r
                }

                function fi(t) {
                    var e = new t.constructor(t.byteLength);
                    return new Ft(e).set(new Ft(t)), e
                }

                function di(t, e) {
                    var n = e ? fi(t.buffer) : t.buffer;
                    return new t.constructor(n, t.byteOffset, t.length)
                }

                function pi(t, e) {
                    if (t !== e) {
                        var n = void 0 !== t, r = null === t, i = t == t, o = Ja(t), a = void 0 !== e, s = null === e,
                            l = e == e, u = Ja(e);
                        if (!s && !u && !o && t > e || o && a && l && !s && !u || r && a && l || !n && l || !i) return 1;
                        if (!r && !o && !u && t < e || u && n && i && !r && !o || s && n && i || !a && i || !l) return -1
                    }
                    return 0
                }

                function gi(t, e, n, i) {
                    for (var o = -1, a = t.length, s = n.length, l = -1, u = e.length, c = an(a - s, 0), h = r(u + c), f = !i; ++l < u;) h[l] = e[l];
                    for (; ++o < s;) (f || o < a) && (h[n[o]] = t[o]);
                    for (; c--;) h[l++] = t[o++];
                    return h
                }

                function _i(t, e, n, i) {
                    for (var o = -1, a = t.length, s = -1, l = n.length, u = -1, c = e.length, h = an(a - l, 0), f = r(h + c), d = !i; ++o < h;) f[o] = t[o];
                    for (var p = o; ++u < c;) f[p + u] = e[u];
                    for (; ++s < l;) (d || o < a) && (f[p + n[s]] = t[o++]);
                    return f
                }

                function mi(t, e) {
                    var n = -1, i = t.length;
                    for (e || (e = r(i)); ++n < i;) e[n] = t[n];
                    return e
                }

                function vi(t, e, n, r) {
                    var i = !n;
                    n || (n = {});
                    for (var o = -1, a = e.length; ++o < a;) {
                        var s = e[o], l = r ? r(n[s], t[s], s, n, t) : void 0;
                        void 0 === l && (l = t[s]), i ? Un(n, s, l) : Bn(n, s, l)
                    }
                    return n
                }

                function yi(t, e) {
                    return function (n, r) {
                        var i = La(n) ? ae : Gn, o = e ? e() : {};
                        return i(n, t, Xi(r, 2), o)
                    }
                }

                function bi(t) {
                    return Pr((function (e, n) {
                        var r = -1, i = n.length, o = i > 1 ? n[i - 1] : void 0, a = i > 2 ? n[2] : void 0;
                        for (o = t.length > 3 && "function" == typeof o ? (i--, o) : void 0, a && so(n[0], n[1], a) && (o = i < 3 ? void 0 : o, i = 1), e = gt(e); ++r < i;) {
                            var s = n[r];
                            s && t(e, s, r, o)
                        }
                        return e
                    }))
                }

                function xi(t, e) {
                    return function (n, r) {
                        if (null == n) return n;
                        if (!Ea(n)) return t(n, r);
                        for (var i = n.length, o = e ? i : -1, a = gt(n); (e ? o-- : ++o < i) && !1 !== r(a[o], o, a);) ;
                        return n
                    }
                }

                function wi(t) {
                    return function (e, n, r) {
                        for (var i = -1, o = gt(e), a = r(e), s = a.length; s--;) {
                            var l = a[t ? s : ++i];
                            if (!1 === n(o[l], l, o)) break
                        }
                        return e
                    }
                }

                function ki(t) {
                    return function (e) {
                        var n = je(e = ss(e)) ? We(e) : void 0, r = n ? n[0] : e.charAt(0),
                            i = n ? ui(n, 1).join("") : e.slice(1);
                        return r[t]() + i
                    }
                }

                function Si(t) {
                    return function (e) {
                        return ge(Hs(Os(e).replace(Ot, "")), t, "")
                    }
                }

                function Mi(t) {
                    return function () {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                            case 5:
                                return new t(e[0], e[1], e[2], e[3], e[4]);
                            case 6:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                            case 7:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                        }
                        var n = An(t.prototype), r = t.apply(n, e);
                        return Ba(r) ? r : n
                    }
                }

                function Ti(t) {
                    return function (e, n, r) {
                        var i = gt(e);
                        if (!Ea(e)) {
                            var o = Xi(n, 3);
                            e = bs(e), n = function (t) {
                                return o(i[t], t, i)
                            }
                        }
                        var a = t(e, n, r);
                        return a > -1 ? i[o ? e[a] : a] : void 0
                    }
                }

                function Ii(t) {
                    return qi((function (e) {
                        var n = e.length, r = n, i = zn.prototype.thru;
                        for (t && e.reverse(); r--;) {
                            var a = e[r];
                            if ("function" != typeof a) throw new vt(o);
                            if (i && !s && "wrapper" == Zi(a)) var s = new zn([], !0)
                        }
                        for (r = s ? r : n; ++r < n;) {
                            var l = Zi(a = e[r]), u = "wrapper" == l ? Ui(a) : void 0;
                            s = u && uo(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? s[Zi(u[0])].apply(s, u[3]) : 1 == a.length && uo(a) ? s[l]() : s.thru(a)
                        }
                        return function () {
                            var t = arguments, r = t[0];
                            if (s && 1 == t.length && La(r)) return s.plant(r).value();
                            for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                            return o
                        }
                    }))
                }

                function Ci(t, e, n, i, o, a, s, l, u, c) {
                    var h = 128 & e, f = 1 & e, d = 2 & e, p = 24 & e, g = 512 & e, _ = d ? void 0 : Mi(t);
                    return function m() {
                        for (var v = arguments.length, y = r(v), b = v; b--;) y[b] = arguments[b];
                        if (p) var x = Yi(m), w = Ee(y, x);
                        if (i && (y = gi(y, i, o, p)), a && (y = _i(y, a, s, p)), v -= w, p && v < c) {
                            var k = $e(y, x);
                            return Ei(t, e, Ci, m.placeholder, n, y, k, l, u, c - v)
                        }
                        var S = f ? n : this, M = d ? S[t] : t;
                        return v = y.length, l ? y = mo(y, l) : g && v > 1 && y.reverse(), h && u < v && (y.length = u), this && this !== Ut && this instanceof m && (M = _ || Mi(M)), M.apply(S, y)
                    }
                }

                function Ai(t, e) {
                    return function (n, r) {
                        return function (t, e, n, r) {
                            return lr(t, (function (t, i, o) {
                                e(r, n(t), i, o)
                            })), r
                        }(n, t, e(r), {})
                    }
                }

                function Di(t, e) {
                    return function (n, r) {
                        var i;
                        if (void 0 === n && void 0 === r) return e;
                        if (void 0 !== n && (i = n), void 0 !== r) {
                            if (void 0 === i) return r;
                            "string" == typeof n || "string" == typeof r ? (n = Jr(n), r = Jr(r)) : (n = Xr(n), r = Xr(r)), i = t(n, r)
                        }
                        return i
                    }
                }

                function zi(t) {
                    return qi((function (e) {
                        return e = de(e, De(Xi())), Pr((function (n) {
                            var r = this;
                            return t(e, (function (t) {
                                return oe(t, r, n)
                            }))
                        }))
                    }))
                }

                function Oi(t, e) {
                    var n = (e = void 0 === e ? " " : Jr(e)).length;
                    if (n < 2) return n ? Nr(e, t) : e;
                    var r = Nr(e, Qe(t / Ge(e)));
                    return je(e) ? ui(We(r), 0, t).join("") : r.slice(0, t)
                }

                function Li(t) {
                    return function (e, n, i) {
                        return i && "number" != typeof i && so(e, n, i) && (n = i = void 0), e = ns(e), void 0 === n ? (n = e, e = 0) : n = ns(n), function (t, e, n, i) {
                            for (var o = -1, a = an(Qe((e - t) / (n || 1)), 0), s = r(a); a--;) s[i ? a : ++o] = t, t += n;
                            return s
                        }(e, n, i = void 0 === i ? e < n ? 1 : -1 : ns(i), t)
                    }
                }

                function Ri(t) {
                    return function (e, n) {
                        return "string" == typeof e && "string" == typeof n || (e = os(e), n = os(n)), t(e, n)
                    }
                }

                function Ei(t, e, n, r, i, o, a, s, l, u) {
                    var c = 8 & e;
                    e |= c ? 32 : 64, 4 & (e &= ~(c ? 64 : 32)) || (e &= -4);
                    var h = [t, e, i, c ? o : void 0, c ? a : void 0, c ? void 0 : o, c ? void 0 : a, s, l, u],
                        f = n.apply(void 0, h);
                    return uo(t) && yo(f, h), f.placeholder = r, wo(f, t, e)
                }

                function Fi(t) {
                    var e = pt[t];
                    return function (t, n) {
                        if (t = os(t), (n = null == n ? 0 : sn(rs(n), 292)) && nn(t)) {
                            var r = (ss(t) + "e").split("e");
                            return +((r = (ss(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                        }
                        return e(t)
                    }
                }

                var Ni = gn && 1 / Be(new gn([, -0]))[1] == 1 / 0 ? function (t) {
                    return new gn(t)
                } : Js;

                function Pi(t) {
                    return function (e) {
                        var n = no(e);
                        return n == g ? He(e) : n == y ? qe(e) : function (t, e) {
                            return de(e, (function (e) {
                                return [e, t[e]]
                            }))
                        }(e, t(e))
                    }
                }

                function ji(t, e, n, i, s, l, u, c) {
                    var h = 2 & e;
                    if (!h && "function" != typeof t) throw new vt(o);
                    var f = i ? i.length : 0;
                    if (f || (e &= -97, i = s = void 0), u = void 0 === u ? u : an(rs(u), 0), c = void 0 === c ? c : rs(c), f -= s ? s.length : 0, 64 & e) {
                        var d = i, p = s;
                        i = s = void 0
                    }
                    var g = h ? void 0 : Ui(t), _ = [t, e, n, i, s, d, p, l, u, c];
                    if (g && function (t, e) {
                        var n = t[1], r = e[1], i = n | r, o = i < 131,
                            s = 128 == r && 8 == n || 128 == r && 256 == n && t[7].length <= e[8] || 384 == r && e[7].length <= e[8] && 8 == n;
                        if (!o && !s) return t;
                        1 & r && (t[2] = e[2], i |= 1 & n ? 0 : 4);
                        var l = e[3];
                        if (l) {
                            var u = t[3];
                            t[3] = u ? gi(u, l, e[4]) : l, t[4] = u ? $e(t[3], a) : e[4]
                        }
                        (l = e[5]) && (u = t[5], t[5] = u ? _i(u, l, e[6]) : l, t[6] = u ? $e(t[5], a) : e[6]);
                        (l = e[7]) && (t[7] = l);
                        128 & r && (t[8] = null == t[8] ? e[8] : sn(t[8], e[8]));
                        null == t[9] && (t[9] = e[9]);
                        t[0] = e[0], t[1] = i
                    }(_, g), t = _[0], e = _[1], n = _[2], i = _[3], s = _[4], !(c = _[9] = void 0 === _[9] ? h ? 0 : t.length : an(_[9] - f, 0)) && 24 & e && (e &= -25), e && 1 != e) m = 8 == e || 16 == e ? function (t, e, n) {
                        var i = Mi(t);
                        return function o() {
                            for (var a = arguments.length, s = r(a), l = a, u = Yi(o); l--;) s[l] = arguments[l];
                            var c = a < 3 && s[0] !== u && s[a - 1] !== u ? [] : $e(s, u);
                            if ((a -= c.length) < n) return Ei(t, e, Ci, o.placeholder, void 0, s, c, void 0, void 0, n - a);
                            var h = this && this !== Ut && this instanceof o ? i : t;
                            return oe(h, this, s)
                        }
                    }(t, e, c) : 32 != e && 33 != e || s.length ? Ci.apply(void 0, _) : function (t, e, n, i) {
                        var o = 1 & e, a = Mi(t);
                        return function e() {
                            for (var s = -1, l = arguments.length, u = -1, c = i.length, h = r(c + l), f = this && this !== Ut && this instanceof e ? a : t; ++u < c;) h[u] = i[u];
                            for (; l--;) h[u++] = arguments[++s];
                            return oe(f, o ? n : this, h)
                        }
                    }(t, e, n, i); else var m = function (t, e, n) {
                        var r = 1 & e, i = Mi(t);
                        return function e() {
                            var o = this && this !== Ut && this instanceof e ? i : t;
                            return o.apply(r ? n : this, arguments)
                        }
                    }(t, e, n);
                    return wo((g ? $r : yo)(m, _), t, e)
                }

                function Hi(t, e, n, r) {
                    return void 0 === t || Aa(t, xt[n]) && !St.call(r, n) ? e : t
                }

                function Vi(t, e, n, r, i, o) {
                    return Ba(t) && Ba(e) && (o.set(e, t), Dr(t, e, void 0, Vi, o), o.delete(e)), t
                }

                function $i(t) {
                    return Ua(t) ? void 0 : t
                }

                function Bi(t, e, n, r, i, o) {
                    var a = 1 & n, s = t.length, l = e.length;
                    if (s != l && !(a && l > s)) return !1;
                    var u = o.get(t), c = o.get(e);
                    if (u && c) return u == e && c == t;
                    var h = -1, f = !0, d = 2 & n ? new Fn : void 0;
                    for (o.set(t, e), o.set(e, t); ++h < s;) {
                        var p = t[h], g = e[h];
                        if (r) var _ = a ? r(g, p, h, e, t, o) : r(p, g, h, t, e, o);
                        if (void 0 !== _) {
                            if (_) continue;
                            f = !1;
                            break
                        }
                        if (d) {
                            if (!me(e, (function (t, e) {
                                if (!Oe(d, e) && (p === t || i(p, t, n, r, o))) return d.push(e)
                            }))) {
                                f = !1;
                                break
                            }
                        } else if (p !== g && !i(p, g, n, r, o)) {
                            f = !1;
                            break
                        }
                    }
                    return o.delete(t), o.delete(e), f
                }

                function qi(t) {
                    return xo(go(t, void 0, Ro), t + "")
                }

                function Gi(t) {
                    return fr(t, bs, to)
                }

                function Wi(t) {
                    return fr(t, xs, eo)
                }

                var Ui = vn ? function (t) {
                    return vn.get(t)
                } : Js;

                function Zi(t) {
                    for (var e = t.name + "", n = yn[e], r = St.call(yn, e) ? n.length : 0; r--;) {
                        var i = n[r], o = i.func;
                        if (null == o || o == t) return i.name
                    }
                    return e
                }

                function Yi(t) {
                    return (St.call(Cn, "placeholder") ? Cn : t).placeholder
                }

                function Xi() {
                    var t = Cn.iteratee || Us;
                    return t = t === Us ? kr : t, arguments.length ? t(arguments[0], arguments[1]) : t
                }

                function Ji(t, e) {
                    var n, r, i = t.__data__;
                    return ("string" == (r = typeof (n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof e ? "string" : "hash"] : i.map
                }

                function Qi(t) {
                    for (var e = bs(t), n = e.length; n--;) {
                        var r = e[n], i = t[r];
                        e[n] = [r, i, fo(i)]
                    }
                    return e
                }

                function Ki(t, e) {
                    var n = function (t, e) {
                        return null == t ? void 0 : t[e]
                    }(t, e);
                    return wr(n) ? n : void 0
                }

                var to = tn ? function (t) {
                    return null == t ? [] : (t = gt(t), ce(tn(t), (function (e) {
                        return Zt.call(t, e)
                    })))
                } : il, eo = tn ? function (t) {
                    for (var e = []; t;) pe(e, to(t)), t = Gt(t);
                    return e
                } : il, no = dr;

                function ro(t, e, n) {
                    for (var r = -1, i = (e = si(e, t)).length, o = !1; ++r < i;) {
                        var a = To(e[r]);
                        if (!(o = null != t && n(t, a))) break;
                        t = t[a]
                    }
                    return o || ++r != i ? o : !!(i = null == t ? 0 : t.length) && $a(i) && ao(a, i) && (La(t) || Oa(t))
                }

                function io(t) {
                    return "function" != typeof t.constructor || ho(t) ? {} : An(Gt(t))
                }

                function oo(t) {
                    return La(t) || Oa(t) || !!(Jt && t && t[Jt])
                }

                function ao(t, e) {
                    var n = typeof t;
                    return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && lt.test(t)) && t > -1 && t % 1 == 0 && t < e
                }

                function so(t, e, n) {
                    if (!Ba(n)) return !1;
                    var r = typeof e;
                    return !!("number" == r ? Ea(n) && ao(e, n.length) : "string" == r && e in n) && Aa(n[e], t)
                }

                function lo(t, e) {
                    if (La(t)) return !1;
                    var n = typeof t;
                    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Ja(t)) || (q.test(t) || !B.test(t) || null != e && t in gt(e))
                }

                function uo(t) {
                    var e = Zi(t), n = Cn[e];
                    if ("function" != typeof n || !(e in On.prototype)) return !1;
                    if (t === n) return !0;
                    var r = Ui(n);
                    return !!r && t === r[0]
                }

                (fn && no(new fn(new ArrayBuffer(1))) != S || dn && no(new dn) != g || pn && "[object Promise]" != no(pn.resolve()) || gn && no(new gn) != y || _n && no(new _n) != w) && (no = function (t) {
                    var e = dr(t), n = e == m ? t.constructor : void 0, r = n ? Io(n) : "";
                    if (r) switch (r) {
                        case bn:
                            return S;
                        case xn:
                            return g;
                        case wn:
                            return "[object Promise]";
                        case kn:
                            return y;
                        case Sn:
                            return w
                    }
                    return e
                });
                var co = wt ? Ha : ol;

                function ho(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || xt)
                }

                function fo(t) {
                    return t == t && !Ba(t)
                }

                function po(t, e) {
                    return function (n) {
                        return null != n && (n[t] === e && (void 0 !== e || t in gt(n)))
                    }
                }

                function go(t, e, n) {
                    return e = an(void 0 === e ? t.length - 1 : e, 0), function () {
                        for (var i = arguments, o = -1, a = an(i.length - e, 0), s = r(a); ++o < a;) s[o] = i[e + o];
                        o = -1;
                        for (var l = r(e + 1); ++o < e;) l[o] = i[o];
                        return l[e] = n(s), oe(t, this, l)
                    }
                }

                function _o(t, e) {
                    return e.length < 2 ? t : hr(t, Gr(e, 0, -1))
                }

                function mo(t, e) {
                    for (var n = t.length, r = sn(e.length, n), i = mi(t); r--;) {
                        var o = e[r];
                        t[r] = ao(o, n) ? i[o] : void 0
                    }
                    return t
                }

                function vo(t, e) {
                    if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                }

                var yo = ko($r), bo = Je || function (t, e) {
                    return Ut.setTimeout(t, e)
                }, xo = ko(Br);

                function wo(t, e, n) {
                    var r = e + "";
                    return xo(t, function (t, e) {
                        var n = e.length;
                        if (!n) return t;
                        var r = n - 1;
                        return e[r] = (n > 1 ? "& " : "") + e[r], e = e.join(n > 2 ? ", " : " "), t.replace(J, "{\n/* [wrapped with " + e + "] */\n")
                    }(r, function (t, e) {
                        return se(s, (function (n) {
                            var r = "_." + n[0];
                            e & n[1] && !he(t, r) && t.push(r)
                        })), t.sort()
                    }(function (t) {
                        var e = t.match(Q);
                        return e ? e[1].split(K) : []
                    }(r), n)))
                }

                function ko(t) {
                    var e = 0, n = 0;
                    return function () {
                        var r = ln(), i = 16 - (r - n);
                        if (n = r, i > 0) {
                            if (++e >= 800) return arguments[0]
                        } else e = 0;
                        return t.apply(void 0, arguments)
                    }
                }

                function So(t, e) {
                    var n = -1, r = t.length, i = r - 1;
                    for (e = void 0 === e ? r : e; ++n < e;) {
                        var o = Fr(n, i), a = t[o];
                        t[o] = t[n], t[n] = a
                    }
                    return t.length = e, t
                }

                var Mo = function (t) {
                    var e = ka(t, (function (t) {
                        return 500 === n.size && n.clear(), t
                    })), n = e.cache;
                    return e
                }((function (t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(G, (function (t, n, r, i) {
                        e.push(r ? i.replace(et, "$1") : n || t)
                    })), e
                }));

                function To(t) {
                    if ("string" == typeof t || Ja(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e
                }

                function Io(t) {
                    if (null != t) {
                        try {
                            return kt.call(t)
                        } catch (t) {
                        }
                        try {
                            return t + ""
                        } catch (t) {
                        }
                    }
                    return ""
                }

                function Co(t) {
                    if (t instanceof On) return t.clone();
                    var e = new zn(t.__wrapped__, t.__chain__);
                    return e.__actions__ = mi(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
                }

                var Ao = Pr((function (t, e) {
                    return Fa(t) ? Kn(t, or(e, 1, Fa, !0)) : []
                })), Do = Pr((function (t, e) {
                    var n = jo(e);
                    return Fa(n) && (n = void 0), Fa(t) ? Kn(t, or(e, 1, Fa, !0), Xi(n, 2)) : []
                })), zo = Pr((function (t, e) {
                    var n = jo(e);
                    return Fa(n) && (n = void 0), Fa(t) ? Kn(t, or(e, 1, Fa, !0), void 0, n) : []
                }));

                function Oo(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = null == n ? 0 : rs(n);
                    return i < 0 && (i = an(r + i, 0)), be(t, Xi(e, 3), i)
                }

                function Lo(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = r - 1;
                    return void 0 !== n && (i = rs(n), i = n < 0 ? an(r + i, 0) : sn(i, r - 1)), be(t, Xi(e, 3), i, !0)
                }

                function Ro(t) {
                    return (null == t ? 0 : t.length) ? or(t, 1) : []
                }

                function Eo(t) {
                    return t && t.length ? t[0] : void 0
                }

                var Fo = Pr((function (t) {
                    var e = de(t, oi);
                    return e.length && e[0] === t[0] ? mr(e) : []
                })), No = Pr((function (t) {
                    var e = jo(t), n = de(t, oi);
                    return e === jo(n) ? e = void 0 : n.pop(), n.length && n[0] === t[0] ? mr(n, Xi(e, 2)) : []
                })), Po = Pr((function (t) {
                    var e = jo(t), n = de(t, oi);
                    return (e = "function" == typeof e ? e : void 0) && n.pop(), n.length && n[0] === t[0] ? mr(n, void 0, e) : []
                }));

                function jo(t) {
                    var e = null == t ? 0 : t.length;
                    return e ? t[e - 1] : void 0
                }

                var Ho = Pr(Vo);

                function Vo(t, e) {
                    return t && t.length && e && e.length ? Rr(t, e) : t
                }

                var $o = qi((function (t, e) {
                    var n = null == t ? 0 : t.length, r = Zn(t, e);
                    return Er(t, de(e, (function (t) {
                        return ao(t, n) ? +t : t
                    })).sort(pi)), r
                }));

                function Bo(t) {
                    return null == t ? t : hn.call(t)
                }

                var qo = Pr((function (t) {
                    return Qr(or(t, 1, Fa, !0))
                })), Go = Pr((function (t) {
                    var e = jo(t);
                    return Fa(e) && (e = void 0), Qr(or(t, 1, Fa, !0), Xi(e, 2))
                })), Wo = Pr((function (t) {
                    var e = jo(t);
                    return e = "function" == typeof e ? e : void 0, Qr(or(t, 1, Fa, !0), void 0, e)
                }));

                function Uo(t) {
                    if (!t || !t.length) return [];
                    var e = 0;
                    return t = ce(t, (function (t) {
                        if (Fa(t)) return e = an(t.length, e), !0
                    })), Ae(e, (function (e) {
                        return de(t, Me(e))
                    }))
                }

                function Zo(t, e) {
                    if (!t || !t.length) return [];
                    var n = Uo(t);
                    return null == e ? n : de(n, (function (t) {
                        return oe(e, void 0, t)
                    }))
                }

                var Yo = Pr((function (t, e) {
                    return Fa(t) ? Kn(t, e) : []
                })), Xo = Pr((function (t) {
                    return ri(ce(t, Fa))
                })), Jo = Pr((function (t) {
                    var e = jo(t);
                    return Fa(e) && (e = void 0), ri(ce(t, Fa), Xi(e, 2))
                })), Qo = Pr((function (t) {
                    var e = jo(t);
                    return e = "function" == typeof e ? e : void 0, ri(ce(t, Fa), void 0, e)
                })), Ko = Pr(Uo);
                var ta = Pr((function (t) {
                    var e = t.length, n = e > 1 ? t[e - 1] : void 0;
                    return n = "function" == typeof n ? (t.pop(), n) : void 0, Zo(t, n)
                }));

                function ea(t) {
                    var e = Cn(t);
                    return e.__chain__ = !0, e
                }

                function na(t, e) {
                    return e(t)
                }

                var ra = qi((function (t) {
                    var e = t.length, n = e ? t[0] : 0, r = this.__wrapped__, i = function (e) {
                        return Zn(e, t)
                    };
                    return !(e > 1 || this.__actions__.length) && r instanceof On && ao(n) ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                        func: na,
                        args: [i],
                        thisArg: void 0
                    }), new zn(r, this.__chain__).thru((function (t) {
                        return e && !t.length && t.push(void 0), t
                    }))) : this.thru(i)
                }));
                var ia = yi((function (t, e, n) {
                    St.call(t, n) ? ++t[n] : Un(t, n, 1)
                }));
                var oa = Ti(Oo), aa = Ti(Lo);

                function sa(t, e) {
                    return (La(t) ? se : tr)(t, Xi(e, 3))
                }

                function la(t, e) {
                    return (La(t) ? le : er)(t, Xi(e, 3))
                }

                var ua = yi((function (t, e, n) {
                    St.call(t, n) ? t[n].push(e) : Un(t, n, [e])
                }));
                var ca = Pr((function (t, e, n) {
                    var i = -1, o = "function" == typeof e, a = Ea(t) ? r(t.length) : [];
                    return tr(t, (function (t) {
                        a[++i] = o ? oe(e, t, n) : vr(t, e, n)
                    })), a
                })), ha = yi((function (t, e, n) {
                    Un(t, n, e)
                }));

                function fa(t, e) {
                    return (La(t) ? de : Ir)(t, Xi(e, 3))
                }

                var da = yi((function (t, e, n) {
                    t[n ? 0 : 1].push(e)
                }), (function () {
                    return [[], []]
                }));
                var pa = Pr((function (t, e) {
                    if (null == t) return [];
                    var n = e.length;
                    return n > 1 && so(t, e[0], e[1]) ? e = [] : n > 2 && so(e[0], e[1], e[2]) && (e = [e[0]]), Or(t, or(e, 1), [])
                })), ga = Xe || function () {
                    return Ut.Date.now()
                };

                function _a(t, e, n) {
                    return e = n ? void 0 : e, ji(t, 128, void 0, void 0, void 0, void 0, e = t && null == e ? t.length : e)
                }

                function ma(t, e) {
                    var n;
                    if ("function" != typeof e) throw new vt(o);
                    return t = rs(t), function () {
                        return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = void 0), n
                    }
                }

                var va = Pr((function (t, e, n) {
                    var r = 1;
                    if (n.length) {
                        var i = $e(n, Yi(va));
                        r |= 32
                    }
                    return ji(t, r, e, n, i)
                })), ya = Pr((function (t, e, n) {
                    var r = 3;
                    if (n.length) {
                        var i = $e(n, Yi(ya));
                        r |= 32
                    }
                    return ji(e, r, t, n, i)
                }));

                function ba(t, e, n) {
                    var r, i, a, s, l, u, c = 0, h = !1, f = !1, d = !0;
                    if ("function" != typeof t) throw new vt(o);

                    function p(e) {
                        var n = r, o = i;
                        return r = i = void 0, c = e, s = t.apply(o, n)
                    }

                    function g(t) {
                        return c = t, l = bo(m, e), h ? p(t) : s
                    }

                    function _(t) {
                        var n = t - u;
                        return void 0 === u || n >= e || n < 0 || f && t - c >= a
                    }

                    function m() {
                        var t = ga();
                        if (_(t)) return v(t);
                        l = bo(m, function (t) {
                            var n = e - (t - u);
                            return f ? sn(n, a - (t - c)) : n
                        }(t))
                    }

                    function v(t) {
                        return l = void 0, d && r ? p(t) : (r = i = void 0, s)
                    }

                    function y() {
                        var t = ga(), n = _(t);
                        if (r = arguments, i = this, u = t, n) {
                            if (void 0 === l) return g(u);
                            if (f) return ci(l), l = bo(m, e), p(u)
                        }
                        return void 0 === l && (l = bo(m, e)), s
                    }

                    return e = os(e) || 0, Ba(n) && (h = !!n.leading, a = (f = "maxWait" in n) ? an(os(n.maxWait) || 0, e) : a, d = "trailing" in n ? !!n.trailing : d), y.cancel = function () {
                        void 0 !== l && ci(l), c = 0, r = u = i = l = void 0
                    }, y.flush = function () {
                        return void 0 === l ? s : v(ga())
                    }, y
                }

                var xa = Pr((function (t, e) {
                    return Qn(t, 1, e)
                })), wa = Pr((function (t, e, n) {
                    return Qn(t, os(e) || 0, n)
                }));

                function ka(t, e) {
                    if ("function" != typeof t || null != e && "function" != typeof e) throw new vt(o);
                    var n = function () {
                        var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
                        if (o.has(i)) return o.get(i);
                        var a = t.apply(this, r);
                        return n.cache = o.set(i, a) || o, a
                    };
                    return n.cache = new (ka.Cache || En), n
                }

                function Sa(t) {
                    if ("function" != typeof t) throw new vt(o);
                    return function () {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return !t.call(this);
                            case 1:
                                return !t.call(this, e[0]);
                            case 2:
                                return !t.call(this, e[0], e[1]);
                            case 3:
                                return !t.call(this, e[0], e[1], e[2])
                        }
                        return !t.apply(this, e)
                    }
                }

                ka.Cache = En;
                var Ma = li((function (t, e) {
                    var n = (e = 1 == e.length && La(e[0]) ? de(e[0], De(Xi())) : de(or(e, 1), De(Xi()))).length;
                    return Pr((function (r) {
                        for (var i = -1, o = sn(r.length, n); ++i < o;) r[i] = e[i].call(this, r[i]);
                        return oe(t, this, r)
                    }))
                })), Ta = Pr((function (t, e) {
                    return ji(t, 32, void 0, e, $e(e, Yi(Ta)))
                })), Ia = Pr((function (t, e) {
                    return ji(t, 64, void 0, e, $e(e, Yi(Ia)))
                })), Ca = qi((function (t, e) {
                    return ji(t, 256, void 0, void 0, void 0, e)
                }));

                function Aa(t, e) {
                    return t === e || t != t && e != e
                }

                var Da = Ri(pr), za = Ri((function (t, e) {
                    return t >= e
                })), Oa = yr(function () {
                    return arguments
                }()) ? yr : function (t) {
                    return qa(t) && St.call(t, "callee") && !Zt.call(t, "callee")
                }, La = r.isArray, Ra = Kt ? De(Kt) : function (t) {
                    return qa(t) && dr(t) == k
                };

                function Ea(t) {
                    return null != t && $a(t.length) && !Ha(t)
                }

                function Fa(t) {
                    return qa(t) && Ea(t)
                }

                var Na = en || ol, Pa = te ? De(te) : function (t) {
                    return qa(t) && dr(t) == h
                };

                function ja(t) {
                    if (!qa(t)) return !1;
                    var e = dr(t);
                    return e == f || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !Ua(t)
                }

                function Ha(t) {
                    if (!Ba(t)) return !1;
                    var e = dr(t);
                    return e == d || e == p || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }

                function Va(t) {
                    return "number" == typeof t && t == rs(t)
                }

                function $a(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                }

                function Ba(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }

                function qa(t) {
                    return null != t && "object" == typeof t
                }

                var Ga = ee ? De(ee) : function (t) {
                    return qa(t) && no(t) == g
                };

                function Wa(t) {
                    return "number" == typeof t || qa(t) && dr(t) == _
                }

                function Ua(t) {
                    if (!qa(t) || dr(t) != m) return !1;
                    var e = Gt(t);
                    if (null === e) return !0;
                    var n = St.call(e, "constructor") && e.constructor;
                    return "function" == typeof n && n instanceof n && kt.call(n) == Ct
                }

                var Za = ne ? De(ne) : function (t) {
                    return qa(t) && dr(t) == v
                };
                var Ya = re ? De(re) : function (t) {
                    return qa(t) && no(t) == y
                };

                function Xa(t) {
                    return "string" == typeof t || !La(t) && qa(t) && dr(t) == b
                }

                function Ja(t) {
                    return "symbol" == typeof t || qa(t) && dr(t) == x
                }

                var Qa = ie ? De(ie) : function (t) {
                    return qa(t) && $a(t.length) && !!Ht[dr(t)]
                };
                var Ka = Ri(Tr), ts = Ri((function (t, e) {
                    return t <= e
                }));

                function es(t) {
                    if (!t) return [];
                    if (Ea(t)) return Xa(t) ? We(t) : mi(t);
                    if (Qt && t[Qt]) return function (t) {
                        for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
                        return n
                    }(t[Qt]());
                    var e = no(t);
                    return (e == g ? He : e == y ? Be : As)(t)
                }

                function ns(t) {
                    return t ? (t = os(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
                }

                function rs(t) {
                    var e = ns(t), n = e % 1;
                    return e == e ? n ? e - n : e : 0
                }

                function is(t) {
                    return t ? Yn(rs(t), 0, 4294967295) : 0
                }

                function os(t) {
                    if ("number" == typeof t) return t;
                    if (Ja(t)) return NaN;
                    if (Ba(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = Ba(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(Z, "");
                    var n = ot.test(t);
                    return n || st.test(t) ? qt(t.slice(2), n ? 2 : 8) : it.test(t) ? NaN : +t
                }

                function as(t) {
                    return vi(t, xs(t))
                }

                function ss(t) {
                    return null == t ? "" : Jr(t)
                }

                var ls = bi((function (t, e) {
                    if (ho(e) || Ea(e)) vi(e, bs(e), t); else for (var n in e) St.call(e, n) && Bn(t, n, e[n])
                })), us = bi((function (t, e) {
                    vi(e, xs(e), t)
                })), cs = bi((function (t, e, n, r) {
                    vi(e, xs(e), t, r)
                })), hs = bi((function (t, e, n, r) {
                    vi(e, bs(e), t, r)
                })), fs = qi(Zn);
                var ds = Pr((function (t, e) {
                    t = gt(t);
                    var n = -1, r = e.length, i = r > 2 ? e[2] : void 0;
                    for (i && so(e[0], e[1], i) && (r = 1); ++n < r;) for (var o = e[n], a = xs(o), s = -1, l = a.length; ++s < l;) {
                        var u = a[s], c = t[u];
                        (void 0 === c || Aa(c, xt[u]) && !St.call(t, u)) && (t[u] = o[u])
                    }
                    return t
                })), ps = Pr((function (t) {
                    return t.push(void 0, Vi), oe(ks, void 0, t)
                }));

                function gs(t, e, n) {
                    var r = null == t ? void 0 : hr(t, e);
                    return void 0 === r ? n : r
                }

                function _s(t, e) {
                    return null != t && ro(t, e, _r)
                }

                var ms = Ai((function (t, e, n) {
                    null != e && "function" != typeof e.toString && (e = It.call(e)), t[e] = n
                }), Bs(Ws)), vs = Ai((function (t, e, n) {
                    null != e && "function" != typeof e.toString && (e = It.call(e)), St.call(t, e) ? t[e].push(n) : t[e] = [n]
                }), Xi), ys = Pr(vr);

                function bs(t) {
                    return Ea(t) ? Pn(t) : Sr(t)
                }

                function xs(t) {
                    return Ea(t) ? Pn(t, !0) : Mr(t)
                }

                var ws = bi((function (t, e, n) {
                    Dr(t, e, n)
                })), ks = bi((function (t, e, n, r) {
                    Dr(t, e, n, r)
                })), Ss = qi((function (t, e) {
                    var n = {};
                    if (null == t) return n;
                    var r = !1;
                    e = de(e, (function (e) {
                        return e = si(e, t), r || (r = e.length > 1), e
                    })), vi(t, Wi(t), n), r && (n = Xn(n, 7, $i));
                    for (var i = e.length; i--;) Kr(n, e[i]);
                    return n
                }));
                var Ms = qi((function (t, e) {
                    return null == t ? {} : function (t, e) {
                        return Lr(t, e, (function (e, n) {
                            return _s(t, n)
                        }))
                    }(t, e)
                }));

                function Ts(t, e) {
                    if (null == t) return {};
                    var n = de(Wi(t), (function (t) {
                        return [t]
                    }));
                    return e = Xi(e), Lr(t, n, (function (t, n) {
                        return e(t, n[0])
                    }))
                }

                var Is = Pi(bs), Cs = Pi(xs);

                function As(t) {
                    return null == t ? [] : ze(t, bs(t))
                }

                var Ds = Si((function (t, e, n) {
                    return e = e.toLowerCase(), t + (n ? zs(e) : e)
                }));

                function zs(t) {
                    return js(ss(t).toLowerCase())
                }

                function Os(t) {
                    return (t = ss(t)) && t.replace(ut, Fe).replace(Lt, "")
                }

                var Ls = Si((function (t, e, n) {
                    return t + (n ? "-" : "") + e.toLowerCase()
                })), Rs = Si((function (t, e, n) {
                    return t + (n ? " " : "") + e.toLowerCase()
                })), Es = ki("toLowerCase");
                var Fs = Si((function (t, e, n) {
                    return t + (n ? "_" : "") + e.toLowerCase()
                }));
                var Ns = Si((function (t, e, n) {
                    return t + (n ? " " : "") + js(e)
                }));
                var Ps = Si((function (t, e, n) {
                    return t + (n ? " " : "") + e.toUpperCase()
                })), js = ki("toUpperCase");

                function Hs(t, e, n) {
                    return t = ss(t), void 0 === (e = n ? void 0 : e) ? function (t) {
                        return Nt.test(t)
                    }(t) ? function (t) {
                        return t.match(Et) || []
                    }(t) : function (t) {
                        return t.match(tt) || []
                    }(t) : t.match(e) || []
                }

                var Vs = Pr((function (t, e) {
                    try {
                        return oe(t, void 0, e)
                    } catch (t) {
                        return ja(t) ? t : new ft(t)
                    }
                })), $s = qi((function (t, e) {
                    return se(e, (function (e) {
                        e = To(e), Un(t, e, va(t[e], t))
                    })), t
                }));

                function Bs(t) {
                    return function () {
                        return t
                    }
                }

                var qs = Ii(), Gs = Ii(!0);

                function Ws(t) {
                    return t
                }

                function Us(t) {
                    return kr("function" == typeof t ? t : Xn(t, 1))
                }

                var Zs = Pr((function (t, e) {
                    return function (n) {
                        return vr(n, t, e)
                    }
                })), Ys = Pr((function (t, e) {
                    return function (n) {
                        return vr(t, n, e)
                    }
                }));

                function Xs(t, e, n) {
                    var r = bs(e), i = cr(e, r);
                    null != n || Ba(e) && (i.length || !r.length) || (n = e, e = t, t = this, i = cr(e, bs(e)));
                    var o = !(Ba(n) && "chain" in n && !n.chain), a = Ha(t);
                    return se(i, (function (n) {
                        var r = e[n];
                        t[n] = r, a && (t.prototype[n] = function () {
                            var e = this.__chain__;
                            if (o || e) {
                                var n = t(this.__wrapped__), i = n.__actions__ = mi(this.__actions__);
                                return i.push({func: r, args: arguments, thisArg: t}), n.__chain__ = e, n
                            }
                            return r.apply(t, pe([this.value()], arguments))
                        })
                    })), t
                }

                function Js() {
                }

                var Qs = zi(de), Ks = zi(ue), tl = zi(me);

                function el(t) {
                    return lo(t) ? Me(To(t)) : function (t) {
                        return function (e) {
                            return hr(e, t)
                        }
                    }(t)
                }

                var nl = Li(), rl = Li(!0);

                function il() {
                    return []
                }

                function ol() {
                    return !1
                }

                var al = Di((function (t, e) {
                    return t + e
                }), 0), sl = Fi("ceil"), ll = Di((function (t, e) {
                    return t / e
                }), 1), ul = Fi("floor");
                var cl, hl = Di((function (t, e) {
                    return t * e
                }), 1), fl = Fi("round"), dl = Di((function (t, e) {
                    return t - e
                }), 0);
                return Cn.after = function (t, e) {
                    if ("function" != typeof e) throw new vt(o);
                    return t = rs(t), function () {
                        if (--t < 1) return e.apply(this, arguments)
                    }
                }, Cn.ary = _a, Cn.assign = ls, Cn.assignIn = us, Cn.assignInWith = cs, Cn.assignWith = hs, Cn.at = fs, Cn.before = ma, Cn.bind = va, Cn.bindAll = $s, Cn.bindKey = ya, Cn.castArray = function () {
                    if (!arguments.length) return [];
                    var t = arguments[0];
                    return La(t) ? t : [t]
                }, Cn.chain = ea, Cn.chunk = function (t, e, n) {
                    e = (n ? so(t, e, n) : void 0 === e) ? 1 : an(rs(e), 0);
                    var i = null == t ? 0 : t.length;
                    if (!i || e < 1) return [];
                    for (var o = 0, a = 0, s = r(Qe(i / e)); o < i;) s[a++] = Gr(t, o, o += e);
                    return s
                }, Cn.compact = function (t) {
                    for (var e = -1, n = null == t ? 0 : t.length, r = 0, i = []; ++e < n;) {
                        var o = t[e];
                        o && (i[r++] = o)
                    }
                    return i
                }, Cn.concat = function () {
                    var t = arguments.length;
                    if (!t) return [];
                    for (var e = r(t - 1), n = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                    return pe(La(n) ? mi(n) : [n], or(e, 1))
                }, Cn.cond = function (t) {
                    var e = null == t ? 0 : t.length, n = Xi();
                    return t = e ? de(t, (function (t) {
                        if ("function" != typeof t[1]) throw new vt(o);
                        return [n(t[0]), t[1]]
                    })) : [], Pr((function (n) {
                        for (var r = -1; ++r < e;) {
                            var i = t[r];
                            if (oe(i[0], this, n)) return oe(i[1], this, n)
                        }
                    }))
                }, Cn.conforms = function (t) {
                    return function (t) {
                        var e = bs(t);
                        return function (n) {
                            return Jn(n, t, e)
                        }
                    }(Xn(t, 1))
                }, Cn.constant = Bs, Cn.countBy = ia, Cn.create = function (t, e) {
                    var n = An(t);
                    return null == e ? n : Wn(n, e)
                }, Cn.curry = function t(e, n, r) {
                    var i = ji(e, 8, void 0, void 0, void 0, void 0, void 0, n = r ? void 0 : n);
                    return i.placeholder = t.placeholder, i
                }, Cn.curryRight = function t(e, n, r) {
                    var i = ji(e, 16, void 0, void 0, void 0, void 0, void 0, n = r ? void 0 : n);
                    return i.placeholder = t.placeholder, i
                }, Cn.debounce = ba, Cn.defaults = ds, Cn.defaultsDeep = ps, Cn.defer = xa, Cn.delay = wa, Cn.difference = Ao, Cn.differenceBy = Do, Cn.differenceWith = zo, Cn.drop = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r ? Gr(t, (e = n || void 0 === e ? 1 : rs(e)) < 0 ? 0 : e, r) : []
                }, Cn.dropRight = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r ? Gr(t, 0, (e = r - (e = n || void 0 === e ? 1 : rs(e))) < 0 ? 0 : e) : []
                }, Cn.dropRightWhile = function (t, e) {
                    return t && t.length ? ei(t, Xi(e, 3), !0, !0) : []
                }, Cn.dropWhile = function (t, e) {
                    return t && t.length ? ei(t, Xi(e, 3), !0) : []
                }, Cn.fill = function (t, e, n, r) {
                    var i = null == t ? 0 : t.length;
                    return i ? (n && "number" != typeof n && so(t, e, n) && (n = 0, r = i), function (t, e, n, r) {
                        var i = t.length;
                        for ((n = rs(n)) < 0 && (n = -n > i ? 0 : i + n), (r = void 0 === r || r > i ? i : rs(r)) < 0 && (r += i), r = n > r ? 0 : is(r); n < r;) t[n++] = e;
                        return t
                    }(t, e, n, r)) : []
                }, Cn.filter = function (t, e) {
                    return (La(t) ? ce : ir)(t, Xi(e, 3))
                }, Cn.flatMap = function (t, e) {
                    return or(fa(t, e), 1)
                }, Cn.flatMapDeep = function (t, e) {
                    return or(fa(t, e), 1 / 0)
                }, Cn.flatMapDepth = function (t, e, n) {
                    return n = void 0 === n ? 1 : rs(n), or(fa(t, e), n)
                }, Cn.flatten = Ro, Cn.flattenDeep = function (t) {
                    return (null == t ? 0 : t.length) ? or(t, 1 / 0) : []
                }, Cn.flattenDepth = function (t, e) {
                    return (null == t ? 0 : t.length) ? or(t, e = void 0 === e ? 1 : rs(e)) : []
                }, Cn.flip = function (t) {
                    return ji(t, 512)
                }, Cn.flow = qs, Cn.flowRight = Gs, Cn.fromPairs = function (t) {
                    for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n;) {
                        var i = t[e];
                        r[i[0]] = i[1]
                    }
                    return r
                }, Cn.functions = function (t) {
                    return null == t ? [] : cr(t, bs(t))
                }, Cn.functionsIn = function (t) {
                    return null == t ? [] : cr(t, xs(t))
                }, Cn.groupBy = ua, Cn.initial = function (t) {
                    return (null == t ? 0 : t.length) ? Gr(t, 0, -1) : []
                }, Cn.intersection = Fo, Cn.intersectionBy = No, Cn.intersectionWith = Po, Cn.invert = ms, Cn.invertBy = vs, Cn.invokeMap = ca, Cn.iteratee = Us, Cn.keyBy = ha, Cn.keys = bs, Cn.keysIn = xs, Cn.map = fa, Cn.mapKeys = function (t, e) {
                    var n = {};
                    return e = Xi(e, 3), lr(t, (function (t, r, i) {
                        Un(n, e(t, r, i), t)
                    })), n
                }, Cn.mapValues = function (t, e) {
                    var n = {};
                    return e = Xi(e, 3), lr(t, (function (t, r, i) {
                        Un(n, r, e(t, r, i))
                    })), n
                }, Cn.matches = function (t) {
                    return Cr(Xn(t, 1))
                }, Cn.matchesProperty = function (t, e) {
                    return Ar(t, Xn(e, 1))
                }, Cn.memoize = ka, Cn.merge = ws, Cn.mergeWith = ks, Cn.method = Zs, Cn.methodOf = Ys, Cn.mixin = Xs, Cn.negate = Sa, Cn.nthArg = function (t) {
                    return t = rs(t), Pr((function (e) {
                        return zr(e, t)
                    }))
                }, Cn.omit = Ss, Cn.omitBy = function (t, e) {
                    return Ts(t, Sa(Xi(e)))
                }, Cn.once = function (t) {
                    return ma(2, t)
                }, Cn.orderBy = function (t, e, n, r) {
                    return null == t ? [] : (La(e) || (e = null == e ? [] : [e]), La(n = r ? void 0 : n) || (n = null == n ? [] : [n]), Or(t, e, n))
                }, Cn.over = Qs, Cn.overArgs = Ma, Cn.overEvery = Ks, Cn.overSome = tl, Cn.partial = Ta, Cn.partialRight = Ia, Cn.partition = da, Cn.pick = Ms, Cn.pickBy = Ts, Cn.property = el, Cn.propertyOf = function (t) {
                    return function (e) {
                        return null == t ? void 0 : hr(t, e)
                    }
                }, Cn.pull = Ho, Cn.pullAll = Vo, Cn.pullAllBy = function (t, e, n) {
                    return t && t.length && e && e.length ? Rr(t, e, Xi(n, 2)) : t
                }, Cn.pullAllWith = function (t, e, n) {
                    return t && t.length && e && e.length ? Rr(t, e, void 0, n) : t
                }, Cn.pullAt = $o, Cn.range = nl, Cn.rangeRight = rl, Cn.rearg = Ca, Cn.reject = function (t, e) {
                    return (La(t) ? ce : ir)(t, Sa(Xi(e, 3)))
                }, Cn.remove = function (t, e) {
                    var n = [];
                    if (!t || !t.length) return n;
                    var r = -1, i = [], o = t.length;
                    for (e = Xi(e, 3); ++r < o;) {
                        var a = t[r];
                        e(a, r, t) && (n.push(a), i.push(r))
                    }
                    return Er(t, i), n
                }, Cn.rest = function (t, e) {
                    if ("function" != typeof t) throw new vt(o);
                    return Pr(t, e = void 0 === e ? e : rs(e))
                }, Cn.reverse = Bo,Cn.sampleSize = function (t, e, n) {
                    return e = (n ? so(t, e, n) : void 0 === e) ? 1 : rs(e), (La(t) ? Hn : Hr)(t, e)
                },Cn.set = function (t, e, n) {
                    return null == t ? t : Vr(t, e, n)
                },Cn.setWith = function (t, e, n, r) {
                    return r = "function" == typeof r ? r : void 0, null == t ? t : Vr(t, e, n, r)
                },Cn.shuffle = function (t) {
                    return (La(t) ? Vn : qr)(t)
                },Cn.slice = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r ? (n && "number" != typeof n && so(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : rs(e), n = void 0 === n ? r : rs(n)), Gr(t, e, n)) : []
                },Cn.sortBy = pa,Cn.sortedUniq = function (t) {
                    return t && t.length ? Yr(t) : []
                },Cn.sortedUniqBy = function (t, e) {
                    return t && t.length ? Yr(t, Xi(e, 2)) : []
                },Cn.split = function (t, e, n) {
                    return n && "number" != typeof n && so(t, e, n) && (e = n = void 0), (n = void 0 === n ? 4294967295 : n >>> 0) ? (t = ss(t)) && ("string" == typeof e || null != e && !Za(e)) && !(e = Jr(e)) && je(t) ? ui(We(t), 0, n) : t.split(e, n) : []
                },Cn.spread = function (t, e) {
                    if ("function" != typeof t) throw new vt(o);
                    return e = null == e ? 0 : an(rs(e), 0), Pr((function (n) {
                        var r = n[e], i = ui(n, 0, e);
                        return r && pe(i, r), oe(t, this, i)
                    }))
                },Cn.tail = function (t) {
                    var e = null == t ? 0 : t.length;
                    return e ? Gr(t, 1, e) : []
                },Cn.take = function (t, e, n) {
                    return t && t.length ? Gr(t, 0, (e = n || void 0 === e ? 1 : rs(e)) < 0 ? 0 : e) : []
                },Cn.takeRight = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r ? Gr(t, (e = r - (e = n || void 0 === e ? 1 : rs(e))) < 0 ? 0 : e, r) : []
                },Cn.takeRightWhile = function (t, e) {
                    return t && t.length ? ei(t, Xi(e, 3), !1, !0) : []
                },Cn.takeWhile = function (t, e) {
                    return t && t.length ? ei(t, Xi(e, 3)) : []
                },Cn.tap = function (t, e) {
                    return e(t), t
                },Cn.throttle = function (t, e, n) {
                    var r = !0, i = !0;
                    if ("function" != typeof t) throw new vt(o);
                    return Ba(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), ba(t, e, {
                        leading: r,
                        maxWait: e,
                        trailing: i
                    })
                },Cn.thru = na,Cn.toArray = es,Cn.toPairs = Is,Cn.toPairsIn = Cs,Cn.toPath = function (t) {
                    return La(t) ? de(t, To) : Ja(t) ? [t] : mi(Mo(ss(t)))
                },Cn.toPlainObject = as,Cn.transform = function (t, e, n) {
                    var r = La(t), i = r || Na(t) || Qa(t);
                    if (e = Xi(e, 4), null == n) {
                        var o = t && t.constructor;
                        n = i ? r ? new o : [] : Ba(t) && Ha(o) ? An(Gt(t)) : {}
                    }
                    return (i ? se : lr)(t, (function (t, r, i) {
                        return e(n, t, r, i)
                    })), n
                },Cn.unary = function (t) {
                    return _a(t, 1)
                },Cn.union = qo,Cn.unionBy = Go,Cn.unionWith = Wo,Cn.uniq = function (t) {
                    return t && t.length ? Qr(t) : []
                },Cn.uniqBy = function (t, e) {
                    return t && t.length ? Qr(t, Xi(e, 2)) : []
                },Cn.uniqWith = function (t, e) {
                    return e = "function" == typeof e ? e : void 0, t && t.length ? Qr(t, void 0, e) : []
                },Cn.unset = function (t, e) {
                    return null == t || Kr(t, e)
                },Cn.unzip = Uo,Cn.unzipWith = Zo,Cn.update = function (t, e, n) {
                    return null == t ? t : ti(t, e, ai(n))
                },Cn.updateWith = function (t, e, n, r) {
                    return r = "function" == typeof r ? r : void 0, null == t ? t : ti(t, e, ai(n), r)
                },Cn.values = As,Cn.valuesIn = function (t) {
                    return null == t ? [] : ze(t, xs(t))
                },Cn.without = Yo,Cn.words = Hs,Cn.wrap = function (t, e) {
                    return Ta(ai(e), t)
                },Cn.xor = Xo,Cn.xorBy = Jo,Cn.xorWith = Qo,Cn.zip = Ko,Cn.zipObject = function (t, e) {
                    return ii(t || [], e || [], Bn)
                },Cn.zipObjectDeep = function (t, e) {
                    return ii(t || [], e || [], Vr)
                },Cn.zipWith = ta,Cn.entries = Is,Cn.entriesIn = Cs,Cn.extend = us,Cn.extendWith = cs,Xs(Cn, Cn),Cn.add = al,Cn.attempt = Vs,Cn.camelCase = Ds,Cn.capitalize = zs,Cn.ceil = sl,Cn.clamp = function (t, e, n) {
                    return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = os(n)) == n ? n : 0), void 0 !== e && (e = (e = os(e)) == e ? e : 0), Yn(os(t), e, n)
                },Cn.clone = function (t) {
                    return Xn(t, 4)
                },Cn.cloneDeep = function (t) {
                    return Xn(t, 5)
                },Cn.cloneDeepWith = function (t, e) {
                    return Xn(t, 5, e = "function" == typeof e ? e : void 0)
                },Cn.cloneWith = function (t, e) {
                    return Xn(t, 4, e = "function" == typeof e ? e : void 0)
                },Cn.conformsTo = function (t, e) {
                    return null == e || Jn(t, e, bs(e))
                },Cn.deburr = Os,Cn.defaultTo = function (t, e) {
                    return null == t || t != t ? e : t
                },Cn.divide = ll,Cn.endsWith = function (t, e, n) {
                    t = ss(t), e = Jr(e);
                    var r = t.length, i = n = void 0 === n ? r : Yn(rs(n), 0, r);
                    return (n -= e.length) >= 0 && t.slice(n, i) == e
                },Cn.eq = Aa,Cn.escape = function (t) {
                    return (t = ss(t)) && j.test(t) ? t.replace(N, Ne) : t
                },Cn.escapeRegExp = function (t) {
                    return (t = ss(t)) && U.test(t) ? t.replace(W, "\\$&") : t
                },Cn.every = function (t, e, n) {
                    var r = La(t) ? ue : nr;
                    return n && so(t, e, n) && (e = void 0), r(t, Xi(e, 3))
                },Cn.find = oa,Cn.findIndex = Oo,Cn.findKey = function (t, e) {
                    return ye(t, Xi(e, 3), lr)
                },Cn.findLast = aa,Cn.findLastIndex = Lo,Cn.findLastKey = function (t, e) {
                    return ye(t, Xi(e, 3), ur)
                },Cn.floor = ul,Cn.forEach = sa,Cn.forEachRight = la,Cn.forIn = function (t, e) {
                    return null == t ? t : ar(t, Xi(e, 3), xs)
                },Cn.forInRight = function (t, e) {
                    return null == t ? t : sr(t, Xi(e, 3), xs)
                },Cn.forOwn = function (t, e) {
                    return t && lr(t, Xi(e, 3))
                },Cn.forOwnRight = function (t, e) {
                    return t && ur(t, Xi(e, 3))
                },Cn.get = gs,Cn.gt = Da,Cn.gte = za,Cn.has = function (t, e) {
                    return null != t && ro(t, e, gr)
                },Cn.hasIn = _s,Cn.head = Eo,Cn.identity = Ws,Cn.includes = function (t, e, n, r) {
                    t = Ea(t) ? t : As(t), n = n && !r ? rs(n) : 0;
                    var i = t.length;
                    return n < 0 && (n = an(i + n, 0)), Xa(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && xe(t, e, n) > -1
                },Cn.indexOf = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = null == n ? 0 : rs(n);
                    return i < 0 && (i = an(r + i, 0)), xe(t, e, i)
                },Cn.inRange = function (t, e, n) {
                    return e = ns(e), void 0 === n ? (n = e, e = 0) : n = ns(n), function (t, e, n) {
                        return t >= sn(e, n) && t < an(e, n)
                    }(t = os(t), e, n)
                },Cn.invoke = ys,Cn.isArguments = Oa,Cn.isArray = La,Cn.isArrayBuffer = Ra,Cn.isArrayLike = Ea,Cn.isArrayLikeObject = Fa,Cn.isBoolean = function (t) {
                    return !0 === t || !1 === t || qa(t) && dr(t) == c
                },Cn.isBuffer = Na,Cn.isDate = Pa,Cn.isElement = function (t) {
                    return qa(t) && 1 === t.nodeType && !Ua(t)
                },Cn.isEmpty = function (t) {
                    if (null == t) return !0;
                    if (Ea(t) && (La(t) || "string" == typeof t || "function" == typeof t.splice || Na(t) || Qa(t) || Oa(t))) return !t.length;
                    var e = no(t);
                    if (e == g || e == y) return !t.size;
                    if (ho(t)) return !Sr(t).length;
                    for (var n in t) if (St.call(t, n)) return !1;
                    return !0
                },Cn.isEqual = function (t, e) {
                    return br(t, e)
                },Cn.isEqualWith = function (t, e, n) {
                    var r = (n = "function" == typeof n ? n : void 0) ? n(t, e) : void 0;
                    return void 0 === r ? br(t, e, void 0, n) : !!r
                },Cn.isError = ja,Cn.isFinite = function (t) {
                    return "number" == typeof t && nn(t)
                },Cn.isFunction = Ha,Cn.isInteger = Va,Cn.isLength = $a,Cn.isMap = Ga,Cn.isMatch = function (t, e) {
                    return t === e || xr(t, e, Qi(e))
                },Cn.isMatchWith = function (t, e, n) {
                    return n = "function" == typeof n ? n : void 0, xr(t, e, Qi(e), n)
                },Cn.isNaN = function (t) {
                    return Wa(t) && t != +t
                },Cn.isNative = function (t) {
                    if (co(t)) throw new ft("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                    return wr(t)
                },Cn.isNil = function (t) {
                    return null == t
                },Cn.isNull = function (t) {
                    return null === t
                },Cn.isNumber = Wa,Cn.isObject = Ba,Cn.isObjectLike = qa,Cn.isPlainObject = Ua,Cn.isRegExp = Za,Cn.isSafeInteger = function (t) {
                    return Va(t) && t >= -9007199254740991 && t <= 9007199254740991
                },Cn.isSet = Ya,Cn.isString = Xa,Cn.isSymbol = Ja,Cn.isTypedArray = Qa,Cn.isUndefined = function (t) {
                    return void 0 === t
                },Cn.isWeakMap = function (t) {
                    return qa(t) && no(t) == w
                },Cn.isWeakSet = function (t) {
                    return qa(t) && "[object WeakSet]" == dr(t)
                },Cn.join = function (t, e) {
                    return null == t ? "" : rn.call(t, e)
                },Cn.kebabCase = Ls,Cn.last = jo,Cn.lastIndexOf = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = r;
                    return void 0 !== n && (i = (i = rs(n)) < 0 ? an(r + i, 0) : sn(i, r - 1)), e == e ? function (t, e, n) {
                        for (var r = n + 1; r--;) if (t[r] === e) return r;
                        return r
                    }(t, e, i) : be(t, ke, i, !0)
                },Cn.lowerCase = Rs,Cn.lowerFirst = Es,Cn.lt = Ka,Cn.lte = ts,Cn.max = function (t) {
                    return t && t.length ? rr(t, Ws, pr) : void 0
                },Cn.maxBy = function (t, e) {
                    return t && t.length ? rr(t, Xi(e, 2), pr) : void 0
                },Cn.mean = function (t) {
                    return Se(t, Ws)
                },Cn.meanBy = function (t, e) {
                    return Se(t, Xi(e, 2))
                },Cn.min = function (t) {
                    return t && t.length ? rr(t, Ws, Tr) : void 0
                },Cn.minBy = function (t, e) {
                    return t && t.length ? rr(t, Xi(e, 2), Tr) : void 0
                },Cn.stubArray = il,Cn.stubFalse = ol,Cn.stubObject = function () {
                    return {}
                },Cn.stubString = function () {
                    return ""
                },Cn.stubTrue = function () {
                    return !0
                },Cn.multiply = hl,Cn.nth = function (t, e) {
                    return t && t.length ? zr(t, rs(e)) : void 0
                },Cn.noConflict = function () {
                    return Ut._ === this && (Ut._ = At), this
                },Cn.noop = Js,Cn.now = ga,Cn.pad = function (t, e, n) {
                    t = ss(t);
                    var r = (e = rs(e)) ? Ge(t) : 0;
                    if (!e || r >= e) return t;
                    var i = (e - r) / 2;
                    return Oi(Ke(i), n) + t + Oi(Qe(i), n)
                },Cn.padEnd = function (t, e, n) {
                    t = ss(t);
                    var r = (e = rs(e)) ? Ge(t) : 0;
                    return e && r < e ? t + Oi(e - r, n) : t
                },Cn.padStart = function (t, e, n) {
                    t = ss(t);
                    var r = (e = rs(e)) ? Ge(t) : 0;
                    return e && r < e ? Oi(e - r, n) + t : t
                },Cn.parseInt = function (t, e, n) {
                    return n || null == e ? e = 0 : e && (e = +e), un(ss(t).replace(Y, ""), e || 0)
                },Cn.random = function (t, e, n) {
                    if (n && "boolean" != typeof n && so(t, e, n) && (e = n = void 0), void 0 === n && ("boolean" == typeof e ? (n = e, e = void 0) : "boolean" == typeof t && (n = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = ns(t), void 0 === e ? (e = t, t = 0) : e = ns(e)), t > e) {
                        var r = t;
                        t = e, e = r
                    }
                    if (n || t % 1 || e % 1) {
                        var i = cn();
                        return sn(t + i * (e - t + Bt("1e-" + ((i + "").length - 1))), e)
                    }
                    return Fr(t, e)
                },Cn.reduce = function (t, e, n) {
                    var r = La(t) ? ge : Ie, i = arguments.length < 3;
                    return r(t, Xi(e, 4), n, i, tr)
                },Cn.reduceRight = function (t, e, n) {
                    var r = La(t) ? _e : Ie, i = arguments.length < 3;
                    return r(t, Xi(e, 4), n, i, er)
                },Cn.repeat = function (t, e, n) {
                    return e = (n ? so(t, e, n) : void 0 === e) ? 1 : rs(e), Nr(ss(t), e)
                },Cn.replace = function () {
                    var t = arguments, e = ss(t[0]);
                    return t.length < 3 ? e : e.replace(t[1], t[2])
                },Cn.result = function (t, e, n) {
                    var r = -1, i = (e = si(e, t)).length;
                    for (i || (i = 1, t = void 0); ++r < i;) {
                        var o = null == t ? void 0 : t[To(e[r])];
                        void 0 === o && (r = i, o = n), t = Ha(o) ? o.call(t) : o
                    }
                    return t
                },Cn.round = fl,Cn.runInContext = t,Cn.sample = function (t) {
                    return (La(t) ? jn : jr)(t)
                },Cn.size = function (t) {
                    if (null == t) return 0;
                    if (Ea(t)) return Xa(t) ? Ge(t) : t.length;
                    var e = no(t);
                    return e == g || e == y ? t.size : Sr(t).length
                },Cn.snakeCase = Fs,Cn.some = function (t, e, n) {
                    var r = La(t) ? me : Wr;
                    return n && so(t, e, n) && (e = void 0), r(t, Xi(e, 3))
                },Cn.sortedIndex = function (t, e) {
                    return Ur(t, e)
                },Cn.sortedIndexBy = function (t, e, n) {
                    return Zr(t, e, Xi(n, 2))
                },Cn.sortedIndexOf = function (t, e) {
                    var n = null == t ? 0 : t.length;
                    if (n) {
                        var r = Ur(t, e);
                        if (r < n && Aa(t[r], e)) return r
                    }
                    return -1
                },Cn.sortedLastIndex = function (t, e) {
                    return Ur(t, e, !0)
                },Cn.sortedLastIndexBy = function (t, e, n) {
                    return Zr(t, e, Xi(n, 2), !0)
                },Cn.sortedLastIndexOf = function (t, e) {
                    if (null == t ? 0 : t.length) {
                        var n = Ur(t, e, !0) - 1;
                        if (Aa(t[n], e)) return n
                    }
                    return -1
                },Cn.startCase = Ns,Cn.startsWith = function (t, e, n) {
                    return t = ss(t), n = null == n ? 0 : Yn(rs(n), 0, t.length), e = Jr(e), t.slice(n, n + e.length) == e
                },Cn.subtract = dl,Cn.sum = function (t) {
                    return t && t.length ? Ce(t, Ws) : 0
                },Cn.sumBy = function (t, e) {
                    return t && t.length ? Ce(t, Xi(e, 2)) : 0
                },Cn.template = function (t, e, n) {
                    var r = Cn.templateSettings;
                    n && so(t, e, n) && (e = void 0), t = ss(t), e = cs({}, e, r, Hi);
                    var i, o, a = cs({}, e.imports, r.imports, Hi), s = bs(a), l = ze(a, s), u = 0,
                        c = e.interpolate || ct, h = "__p += '",
                        f = _t((e.escape || ct).source + "|" + c.source + "|" + (c === $ ? nt : ct).source + "|" + (e.evaluate || ct).source + "|$", "g"),
                        d = "//# sourceURL=" + (St.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++jt + "]") + "\n";
                    t.replace(f, (function (e, n, r, a, s, l) {
                        return r || (r = a), h += t.slice(u, l).replace(ht, Pe), n && (i = !0, h += "' +\n__e(" + n + ") +\n'"), s && (o = !0, h += "';\n" + s + ";\n__p += '"), r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), u = l + e.length, e
                    })), h += "';\n";
                    var p = St.call(e, "variable") && e.variable;
                    p || (h = "with (obj) {\n" + h + "\n}\n"), h = (o ? h.replace(L, "") : h).replace(R, "$1").replace(E, "$1;"), h = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
                    var g = Vs((function () {
                        return dt(s, d + "return " + h).apply(void 0, l)
                    }));
                    if (g.source = h, ja(g)) throw g;
                    return g
                },Cn.times = function (t, e) {
                    if ((t = rs(t)) < 1 || t > 9007199254740991) return [];
                    var n = 4294967295, r = sn(t, 4294967295);
                    t -= 4294967295;
                    for (var i = Ae(r, e = Xi(e)); ++n < t;) e(n);
                    return i
                },Cn.toFinite = ns,Cn.toInteger = rs,Cn.toLength = is,Cn.toLower = function (t) {
                    return ss(t).toLowerCase()
                },Cn.toNumber = os,Cn.toSafeInteger = function (t) {
                    return t ? Yn(rs(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0
                },Cn.toString = ss,Cn.toUpper = function (t) {
                    return ss(t).toUpperCase()
                },Cn.trim = function (t, e, n) {
                    if ((t = ss(t)) && (n || void 0 === e)) return t.replace(Z, "");
                    if (!t || !(e = Jr(e))) return t;
                    var r = We(t), i = We(e);
                    return ui(r, Le(r, i), Re(r, i) + 1).join("")
                },Cn.trimEnd = function (t, e, n) {
                    if ((t = ss(t)) && (n || void 0 === e)) return t.replace(X, "");
                    if (!t || !(e = Jr(e))) return t;
                    var r = We(t);
                    return ui(r, 0, Re(r, We(e)) + 1).join("")
                },Cn.trimStart = function (t, e, n) {
                    if ((t = ss(t)) && (n || void 0 === e)) return t.replace(Y, "");
                    if (!t || !(e = Jr(e))) return t;
                    var r = We(t);
                    return ui(r, Le(r, We(e))).join("")
                },Cn.truncate = function (t, e) {
                    var n = 30, r = "...";
                    if (Ba(e)) {
                        var i = "separator" in e ? e.separator : i;
                        n = "length" in e ? rs(e.length) : n, r = "omission" in e ? Jr(e.omission) : r
                    }
                    var o = (t = ss(t)).length;
                    if (je(t)) {
                        var a = We(t);
                        o = a.length
                    }
                    if (n >= o) return t;
                    var s = n - Ge(r);
                    if (s < 1) return r;
                    var l = a ? ui(a, 0, s).join("") : t.slice(0, s);
                    if (void 0 === i) return l + r;
                    if (a && (s += l.length - s), Za(i)) {
                        if (t.slice(s).search(i)) {
                            var u, c = l;
                            for (i.global || (i = _t(i.source, ss(rt.exec(i)) + "g")), i.lastIndex = 0; u = i.exec(c);) var h = u.index;
                            l = l.slice(0, void 0 === h ? s : h)
                        }
                    } else if (t.indexOf(Jr(i), s) != s) {
                        var f = l.lastIndexOf(i);
                        f > -1 && (l = l.slice(0, f))
                    }
                    return l + r
                },Cn.unescape = function (t) {
                    return (t = ss(t)) && P.test(t) ? t.replace(F, Ue) : t
                },Cn.uniqueId = function (t) {
                    var e = ++Mt;
                    return ss(t) + e
                },Cn.upperCase = Ps,Cn.upperFirst = js,Cn.each = sa,Cn.eachRight = la,Cn.first = Eo,Xs(Cn, (cl = {}, lr(Cn, (function (t, e) {
                    St.call(Cn.prototype, e) || (cl[e] = t)
                })), cl), {chain: !1}),Cn.VERSION = "4.17.20",se(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function (t) {
                    Cn[t].placeholder = Cn
                })),se(["drop", "take"], (function (t, e) {
                    On.prototype[t] = function (n) {
                        n = void 0 === n ? 1 : an(rs(n), 0);
                        var r = this.__filtered__ && !e ? new On(this) : this.clone();
                        return r.__filtered__ ? r.__takeCount__ = sn(n, r.__takeCount__) : r.__views__.push({
                            size: sn(n, 4294967295),
                            type: t + (r.__dir__ < 0 ? "Right" : "")
                        }), r
                    }, On.prototype[t + "Right"] = function (e) {
                        return this.reverse()[t](e).reverse()
                    }
                })),se(["filter", "map", "takeWhile"], (function (t, e) {
                    var n = e + 1, r = 1 == n || 3 == n;
                    On.prototype[t] = function (t) {
                        var e = this.clone();
                        return e.__iteratees__.push({
                            iteratee: Xi(t, 3),
                            type: n
                        }), e.__filtered__ = e.__filtered__ || r, e
                    }
                })),se(["head", "last"], (function (t, e) {
                    var n = "take" + (e ? "Right" : "");
                    On.prototype[t] = function () {
                        return this[n](1).value()[0]
                    }
                })),se(["initial", "tail"], (function (t, e) {
                    var n = "drop" + (e ? "" : "Right");
                    On.prototype[t] = function () {
                        return this.__filtered__ ? new On(this) : this[n](1)
                    }
                })),On.prototype.compact = function () {
                    return this.filter(Ws)
                },On.prototype.find = function (t) {
                    return this.filter(t).head()
                },On.prototype.findLast = function (t) {
                    return this.reverse().find(t)
                },On.prototype.invokeMap = Pr((function (t, e) {
                    return "function" == typeof t ? new On(this) : this.map((function (n) {
                        return vr(n, t, e)
                    }))
                })),On.prototype.reject = function (t) {
                    return this.filter(Sa(Xi(t)))
                },On.prototype.slice = function (t, e) {
                    t = rs(t);
                    var n = this;
                    return n.__filtered__ && (t > 0 || e < 0) ? new On(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), void 0 !== e && (n = (e = rs(e)) < 0 ? n.dropRight(-e) : n.take(e - t)), n)
                },On.prototype.takeRightWhile = function (t) {
                    return this.reverse().takeWhile(t).reverse()
                },On.prototype.toArray = function () {
                    return this.take(4294967295)
                },lr(On.prototype, (function (t, e) {
                    var n = /^(?:filter|find|map|reject)|While$/.test(e), r = /^(?:head|last)$/.test(e),
                        i = Cn[r ? "take" + ("last" == e ? "Right" : "") : e], o = r || /^find/.test(e);
                    i && (Cn.prototype[e] = function () {
                        var e = this.__wrapped__, a = r ? [1] : arguments, s = e instanceof On, l = a[0],
                            u = s || La(e), c = function (t) {
                                var e = i.apply(Cn, pe([t], a));
                                return r && h ? e[0] : e
                            };
                        u && n && "function" == typeof l && 1 != l.length && (s = u = !1);
                        var h = this.__chain__, f = !!this.__actions__.length, d = o && !h, p = s && !f;
                        if (!o && u) {
                            e = p ? e : new On(this);
                            var g = t.apply(e, a);
                            return g.__actions__.push({func: na, args: [c], thisArg: void 0}), new zn(g, h)
                        }
                        return d && p ? t.apply(this, a) : (g = this.thru(c), d ? r ? g.value()[0] : g.value() : g)
                    })
                })),se(["pop", "push", "shift", "sort", "splice", "unshift"], (function (t) {
                    var e = yt[t], n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                        r = /^(?:pop|shift)$/.test(t);
                    Cn.prototype[t] = function () {
                        var t = arguments;
                        if (r && !this.__chain__) {
                            var i = this.value();
                            return e.apply(La(i) ? i : [], t)
                        }
                        return this[n]((function (n) {
                            return e.apply(La(n) ? n : [], t)
                        }))
                    }
                })),lr(On.prototype, (function (t, e) {
                    var n = Cn[e];
                    if (n) {
                        var r = n.name + "";
                        St.call(yn, r) || (yn[r] = []), yn[r].push({name: e, func: n})
                    }
                })),yn[Ci(void 0, 2).name] = [{name: "wrapper", func: void 0}],On.prototype.clone = function () {
                    var t = new On(this.__wrapped__);
                    return t.__actions__ = mi(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = mi(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = mi(this.__views__), t
                },On.prototype.reverse = function () {
                    if (this.__filtered__) {
                        var t = new On(this);
                        t.__dir__ = -1, t.__filtered__ = !0
                    } else (t = this.clone()).__dir__ *= -1;
                    return t
                },On.prototype.value = function () {
                    var t = this.__wrapped__.value(), e = this.__dir__, n = La(t), r = e < 0, i = n ? t.length : 0,
                        o = function (t, e, n) {
                            var r = -1, i = n.length;
                            for (; ++r < i;) {
                                var o = n[r], a = o.size;
                                switch (o.type) {
                                    case"drop":
                                        t += a;
                                        break;
                                    case"dropRight":
                                        e -= a;
                                        break;
                                    case"take":
                                        e = sn(e, t + a);
                                        break;
                                    case"takeRight":
                                        t = an(t, e - a)
                                }
                            }
                            return {start: t, end: e}
                        }(0, i, this.__views__), a = o.start, s = o.end, l = s - a, u = r ? s : a - 1,
                        c = this.__iteratees__, h = c.length, f = 0, d = sn(l, this.__takeCount__);
                    if (!n || !r && i == l && d == l) return ni(t, this.__actions__);
                    var p = [];
                    t:for (; l-- && f < d;) {
                        for (var g = -1, _ = t[u += e]; ++g < h;) {
                            var m = c[g], v = m.iteratee, y = m.type, b = v(_);
                            if (2 == y) _ = b; else if (!b) {
                                if (1 == y) continue t;
                                break t
                            }
                        }
                        p[f++] = _
                    }
                    return p
                },Cn.prototype.at = ra,Cn.prototype.chain = function () {
                    return ea(this)
                },Cn.prototype.commit = function () {
                    return new zn(this.value(), this.__chain__)
                },Cn.prototype.next = function () {
                    void 0 === this.__values__ && (this.__values__ = es(this.value()));
                    var t = this.__index__ >= this.__values__.length;
                    return {done: t, value: t ? void 0 : this.__values__[this.__index__++]}
                },Cn.prototype.plant = function (t) {
                    for (var e, n = this; n instanceof Dn;) {
                        var r = Co(n);
                        r.__index__ = 0, r.__values__ = void 0, e ? i.__wrapped__ = r : e = r;
                        var i = r;
                        n = n.__wrapped__
                    }
                    return i.__wrapped__ = t, e
                },Cn.prototype.reverse = function () {
                    var t = this.__wrapped__;
                    if (t instanceof On) {
                        var e = t;
                        return this.__actions__.length && (e = new On(this)), (e = e.reverse()).__actions__.push({
                            func: na,
                            args: [Bo],
                            thisArg: void 0
                        }), new zn(e, this.__chain__)
                    }
                    return this.thru(Bo)
                },Cn.prototype.toJSON = Cn.prototype.valueOf = Cn.prototype.value = function () {
                    return ni(this.__wrapped__, this.__actions__)
                },Cn.prototype.first = Cn.prototype.head,Qt && (Cn.prototype[Qt] = function () {
                    return this
                }),Cn
            }();
            Ut._ = Ze, void 0 === (i = function () {
                return Ze
            }.call(e, n, e, r)) || (r.exports = i)
        }).call(this)
    }).call(this, n(11), n(12)(t))
}, function (t, e) {
    t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNHB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9Ii0wLjAzMSAwIDQgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTAuMDMxIDAgNCAxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Y2lyY2xlIGZpbGw9IiNCMkIzQjMiIGN4PSIxLjk2OSIgY3k9IjQiIHI9IjEuNSIvPg0KPGNpcmNsZSBmaWxsPSIjQjJCM0IzIiBjeD0iMS45NjkiIGN5PSI4IiByPSIxLjUiLz4NCjxjaXJjbGUgZmlsbD0iI0IyQjNCMyIgY3g9IjEuOTY5IiBjeT0iMTIiIHI9IjEuNSIvPg0KPC9zdmc+DQo="
}, function (t, e, n) {
    var r = n(2), i = {
        create: function () {
            var t = new r.ARRAY_TYPE(9);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
        }, fromMat4: function (t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t
        }, clone: function (t) {
            var e = new r.ARRAY_TYPE(9);
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
        }, copy: function (t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
        }, fromValues: function (t, e, n, i, o, a, s, l, u) {
            var c = new r.ARRAY_TYPE(9);
            return c[0] = t, c[1] = e, c[2] = n, c[3] = i, c[4] = o, c[5] = a, c[6] = s, c[7] = l, c[8] = u, c
        }, set: function (t, e, n, r, i, o, a, s, l, u) {
            return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = s, t[7] = l, t[8] = u, t
        }, identity: function (t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
        }, transpose: function (t, e) {
            if (t === e) {
                var n = e[1], r = e[2], i = e[5];
                t[1] = e[3], t[2] = e[6], t[3] = n, t[5] = e[7], t[6] = r, t[7] = i
            } else t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8];
            return t
        }, invert: function (t, e) {
            var n = e[0], r = e[1], i = e[2], o = e[3], a = e[4], s = e[5], l = e[6], u = e[7], c = e[8],
                h = c * a - s * u, f = -c * o + s * l, d = u * o - a * l, p = n * h + r * f + i * d;
            return p ? (p = 1 / p, t[0] = h * p, t[1] = (-c * r + i * u) * p, t[2] = (s * r - i * a) * p, t[3] = f * p, t[4] = (c * n - i * l) * p, t[5] = (-s * n + i * o) * p, t[6] = d * p, t[7] = (-u * n + r * l) * p, t[8] = (a * n - r * o) * p, t) : null
        }, adjoint: function (t, e) {
            var n = e[0], r = e[1], i = e[2], o = e[3], a = e[4], s = e[5], l = e[6], u = e[7], c = e[8];
            return t[0] = a * c - s * u, t[1] = i * u - r * c, t[2] = r * s - i * a, t[3] = s * l - o * c, t[4] = n * c - i * l, t[5] = i * o - n * s, t[6] = o * u - a * l, t[7] = r * l - n * u, t[8] = n * a - r * o, t
        }, determinant: function (t) {
            var e = t[0], n = t[1], r = t[2], i = t[3], o = t[4], a = t[5], s = t[6], l = t[7], u = t[8];
            return e * (u * o - a * l) + n * (-u * i + a * s) + r * (l * i - o * s)
        }, multiply: function (t, e, n) {
            var r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], l = e[5], u = e[6], c = e[7], h = e[8], f = n[0],
                d = n[1], p = n[2], g = n[3], _ = n[4], m = n[5], v = n[6], y = n[7], b = n[8];
            return t[0] = f * r + d * a + p * u, t[1] = f * i + d * s + p * c, t[2] = f * o + d * l + p * h, t[3] = g * r + _ * a + m * u, t[4] = g * i + _ * s + m * c, t[5] = g * o + _ * l + m * h, t[6] = v * r + y * a + b * u, t[7] = v * i + y * s + b * c, t[8] = v * o + y * l + b * h, t
        }
    };
    i.mul = i.multiply, i.translate = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], l = e[5], u = e[6], c = e[7], h = e[8], f = n[0],
            d = n[1];
        return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t[6] = f * r + d * a + u, t[7] = f * i + d * s + c, t[8] = f * o + d * l + h, t
    }, i.rotate = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], l = e[5], u = e[6], c = e[7], h = e[8], f = Math.sin(n),
            d = Math.cos(n);
        return t[0] = d * r + f * a, t[1] = d * i + f * s, t[2] = d * o + f * l, t[3] = d * a - f * r, t[4] = d * s - f * i, t[5] = d * l - f * o, t[6] = u, t[7] = c, t[8] = h, t
    }, i.scale = function (t, e, n) {
        var r = n[0], i = n[1];
        return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = i * e[3], t[4] = i * e[4], t[5] = i * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
    }, i.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t
    }, i.fromRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, i.fromMat2d = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t
    }, i.fromQuat = function (t, e) {
        var n = e[0], r = e[1], i = e[2], o = e[3], a = n + n, s = r + r, l = i + i, u = n * a, c = r * a, h = r * s,
            f = i * a, d = i * s, p = i * l, g = o * a, _ = o * s, m = o * l;
        return t[0] = 1 - h - p, t[3] = c - m, t[6] = f + _, t[1] = c + m, t[4] = 1 - u - p, t[7] = d - g, t[2] = f - _, t[5] = d + g, t[8] = 1 - u - h, t
    }, i.normalFromMat4 = function (t, e) {
        var n = e[0], r = e[1], i = e[2], o = e[3], a = e[4], s = e[5], l = e[6], u = e[7], c = e[8], h = e[9],
            f = e[10], d = e[11], p = e[12], g = e[13], _ = e[14], m = e[15], v = n * s - r * a, y = n * l - i * a,
            b = n * u - o * a, x = r * l - i * s, w = r * u - o * s, k = i * u - o * l, S = c * g - h * p,
            M = c * _ - f * p, T = c * m - d * p, I = h * _ - f * g, C = h * m - d * g, A = f * m - d * _,
            D = v * A - y * C + b * I + x * T - w * M + k * S;
        return D ? (D = 1 / D, t[0] = (s * A - l * C + u * I) * D, t[1] = (l * T - a * A - u * M) * D, t[2] = (a * C - s * T + u * S) * D, t[3] = (i * C - r * A - o * I) * D, t[4] = (n * A - i * T + o * M) * D, t[5] = (r * T - n * C - o * S) * D, t[6] = (g * k - _ * w + m * x) * D, t[7] = (_ * b - p * k - m * y) * D, t[8] = (p * w - g * b + m * v) * D, t) : null
    }, i.str = function (t) {
        return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
    }, i.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
    }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t
    }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t
    }, i.sub = i.subtract, i.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t
    }, i.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t
    }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
    }, i.equals = function (t, e) {
        var n = t[0], i = t[1], o = t[2], a = t[3], s = t[4], l = t[5], u = t[6], c = t[7], h = t[8], f = e[0],
            d = e[1], p = e[2], g = e[3], _ = e[4], m = e[5], v = t[6], y = e[7], b = e[8];
        return Math.abs(n - f) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(i - d) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(o - p) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(p)) && Math.abs(a - g) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(g)) && Math.abs(s - _) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(_)) && Math.abs(l - m) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(m)) && Math.abs(u - v) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(c - y) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(y)) && Math.abs(h - b) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(b))
    }, t.exports = i
}, function (t, e, n) {
    var r, i = n(2), o = {};
    o.create = function () {
        var t = new i.ARRAY_TYPE(3);
        return t[0] = 0, t[1] = 0, t[2] = 0, t
    }, o.clone = function (t) {
        var e = new i.ARRAY_TYPE(3);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }, o.fromValues = function (t, e, n) {
        var r = new i.ARRAY_TYPE(3);
        return r[0] = t, r[1] = e, r[2] = n, r
    }, o.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
    }, o.set = function (t, e, n, r) {
        return t[0] = e, t[1] = n, t[2] = r, t
    }, o.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t
    }, o.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t
    }, o.sub = o.subtract, o.multiply = function (t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t
    }, o.mul = o.multiply, o.divide = function (t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t
    }, o.div = o.divide, o.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t
    }, o.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t
    }, o.min = function (t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t
    }, o.max = function (t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t
    }, o.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t
    }, o.scale = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t
    }, o.scaleAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t
    }, o.distance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
        return Math.sqrt(n * n + r * r + i * i)
    }, o.dist = o.distance, o.squaredDistance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
        return n * n + r * r + i * i
    }, o.sqrDist = o.squaredDistance, o.length = function (t) {
        var e = t[0], n = t[1], r = t[2];
        return Math.sqrt(e * e + n * n + r * r)
    }, o.len = o.length, o.squaredLength = function (t) {
        var e = t[0], n = t[1], r = t[2];
        return e * e + n * n + r * r
    }, o.sqrLen = o.squaredLength, o.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t
    }, o.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t
    }, o.normalize = function (t, e) {
        var n = e[0], r = e[1], i = e[2], o = n * n + r * r + i * i;
        return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o), t
    }, o.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }, o.cross = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = n[0], s = n[1], l = n[2];
        return t[0] = i * l - o * s, t[1] = o * a - r * l, t[2] = r * s - i * a, t
    }, o.lerp = function (t, e, n, r) {
        var i = e[0], o = e[1], a = e[2];
        return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t
    }, o.hermite = function (t, e, n, r, i, o) {
        var a = o * o, s = a * (2 * o - 3) + 1, l = a * (o - 2) + o, u = a * (o - 1), c = a * (3 - 2 * o);
        return t[0] = e[0] * s + n[0] * l + r[0] * u + i[0] * c, t[1] = e[1] * s + n[1] * l + r[1] * u + i[1] * c, t[2] = e[2] * s + n[2] * l + r[2] * u + i[2] * c, t
    }, o.bezier = function (t, e, n, r, i, o) {
        var a = 1 - o, s = a * a, l = o * o, u = s * a, c = 3 * o * s, h = 3 * l * a, f = l * o;
        return t[0] = e[0] * u + n[0] * c + r[0] * h + i[0] * f, t[1] = e[1] * u + n[1] * c + r[1] * h + i[1] * f, t[2] = e[2] * u + n[2] * c + r[2] * h + i[2] * f, t
    }, o.random = function (t, e) {
        e = e || 1;
        var n = 2 * i.RANDOM() * Math.PI, r = 2 * i.RANDOM() - 1, o = Math.sqrt(1 - r * r) * e;
        return t[0] = Math.cos(n) * o, t[1] = Math.sin(n) * o, t[2] = r * e, t
    }, o.transformMat4 = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = n[3] * r + n[7] * i + n[11] * o + n[15];
        return a = a || 1, t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a, t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a, t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a, t
    }, o.transformMat3 = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2];
        return t[0] = r * n[0] + i * n[3] + o * n[6], t[1] = r * n[1] + i * n[4] + o * n[7], t[2] = r * n[2] + i * n[5] + o * n[8], t
    }, o.transformQuat = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = n[0], s = n[1], l = n[2], u = n[3], c = u * r + s * o - l * i,
            h = u * i + l * r - a * o, f = u * o + a * i - s * r, d = -a * r - s * i - l * o;
        return t[0] = c * u + d * -a + h * -l - f * -s, t[1] = h * u + d * -s + f * -a - c * -l, t[2] = f * u + d * -l + c * -s - h * -a, t
    }, o.rotateX = function (t, e, n, r) {
        var i = [], o = [];
        return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0], o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r), o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
    }, o.rotateY = function (t, e, n, r) {
        var i = [], o = [];
        return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r), o[1] = i[1], o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
    }, o.rotateZ = function (t, e, n, r) {
        var i = [], o = [];
        return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), o[2] = i[2], t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
    }, o.forEach = (r = o.create(), function (t, e, n, i, o, a) {
        var s, l;
        for (e || (e = 3), n || (n = 0), l = i ? Math.min(i * e + n, t.length) : t.length, s = n; s < l; s += e) r[0] = t[s], r[1] = t[s + 1], r[2] = t[s + 2], o(r, r, a), t[s] = r[0], t[s + 1] = r[1], t[s + 2] = r[2];
        return t
    }), o.angle = function (t, e) {
        var n = o.fromValues(t[0], t[1], t[2]), r = o.fromValues(e[0], e[1], e[2]);
        o.normalize(n, n), o.normalize(r, r);
        var i = o.dot(n, r);
        return i > 1 ? 0 : Math.acos(i)
    }, o.str = function (t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
    }, o.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
    }, o.equals = function (t, e) {
        var n = t[0], r = t[1], o = t[2], a = e[0], s = e[1], l = e[2];
        return Math.abs(n - a) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - s) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(o - l) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(l))
    }, t.exports = o
}, function (t, e, n) {
    var r, i = n(2), o = {};
    o.create = function () {
        var t = new i.ARRAY_TYPE(4);
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
    }, o.clone = function (t) {
        var e = new i.ARRAY_TYPE(4);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, o.fromValues = function (t, e, n, r) {
        var o = new i.ARRAY_TYPE(4);
        return o[0] = t, o[1] = e, o[2] = n, o[3] = r, o
    }, o.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }, o.set = function (t, e, n, r, i) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t
    }, o.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t
    }, o.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t
    }, o.sub = o.subtract, o.multiply = function (t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t[3] = e[3] * n[3], t
    }, o.mul = o.multiply, o.divide = function (t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t[3] = e[3] / n[3], t
    }, o.div = o.divide, o.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t[3] = Math.ceil(e[3]), t
    }, o.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t[3] = Math.floor(e[3]), t
    }, o.min = function (t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t[3] = Math.min(e[3], n[3]), t
    }, o.max = function (t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t[3] = Math.max(e[3], n[3]), t
    }, o.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t[3] = Math.round(e[3]), t
    }, o.scale = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t
    }, o.scaleAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t
    }, o.distance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2], o = e[3] - t[3];
        return Math.sqrt(n * n + r * r + i * i + o * o)
    }, o.dist = o.distance, o.squaredDistance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2], o = e[3] - t[3];
        return n * n + r * r + i * i + o * o
    }, o.sqrDist = o.squaredDistance, o.length = function (t) {
        var e = t[0], n = t[1], r = t[2], i = t[3];
        return Math.sqrt(e * e + n * n + r * r + i * i)
    }, o.len = o.length, o.squaredLength = function (t) {
        var e = t[0], n = t[1], r = t[2], i = t[3];
        return e * e + n * n + r * r + i * i
    }, o.sqrLen = o.squaredLength, o.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t
    }, o.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t[3] = 1 / e[3], t
    }, o.normalize = function (t, e) {
        var n = e[0], r = e[1], i = e[2], o = e[3], a = n * n + r * r + i * i + o * o;
        return a > 0 && (a = 1 / Math.sqrt(a), t[0] = n * a, t[1] = r * a, t[2] = i * a, t[3] = o * a), t
    }, o.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
    }, o.lerp = function (t, e, n, r) {
        var i = e[0], o = e[1], a = e[2], s = e[3];
        return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t[3] = s + r * (n[3] - s), t
    }, o.random = function (t, e) {
        return e = e || 1, t[0] = i.RANDOM(), t[1] = i.RANDOM(), t[2] = i.RANDOM(), t[3] = i.RANDOM(), o.normalize(t, t), o.scale(t, t, e), t
    }, o.transformMat4 = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3];
        return t[0] = n[0] * r + n[4] * i + n[8] * o + n[12] * a, t[1] = n[1] * r + n[5] * i + n[9] * o + n[13] * a, t[2] = n[2] * r + n[6] * i + n[10] * o + n[14] * a, t[3] = n[3] * r + n[7] * i + n[11] * o + n[15] * a, t
    }, o.transformQuat = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = n[0], s = n[1], l = n[2], u = n[3], c = u * r + s * o - l * i,
            h = u * i + l * r - a * o, f = u * o + a * i - s * r, d = -a * r - s * i - l * o;
        return t[0] = c * u + d * -a + h * -l - f * -s, t[1] = h * u + d * -s + f * -a - c * -l, t[2] = f * u + d * -l + c * -s - h * -a, t[3] = e[3], t
    }, o.forEach = (r = o.create(), function (t, e, n, i, o, a) {
        var s, l;
        for (e || (e = 4), n || (n = 0), l = i ? Math.min(i * e + n, t.length) : t.length, s = n; s < l; s += e) r[0] = t[s], r[1] = t[s + 1], r[2] = t[s + 2], r[3] = t[s + 3], o(r, r, a), t[s] = r[0], t[s + 1] = r[1], t[s + 2] = r[2], t[s + 3] = r[3];
        return t
    }), o.str = function (t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }, o.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
    }, o.equals = function (t, e) {
        var n = t[0], r = t[1], o = t[2], a = t[3], s = e[0], l = e[1], u = e[2], c = e[3];
        return Math.abs(n - s) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(r - l) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(o - u) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(u)) && Math.abs(a - c) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(c))
    }, t.exports = o
}, function (t, e, n) {
    t.exports = function () {
        return n(10)('!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=4)}([function(n,r,t){n.exports={hcluster:t(5),Kmeans:t(3),kmeans:t(3).kmeans}},function(n,r,t){var e;n.exports=(function(n,r){var t=n.utils.isFunction;function e(n,r){return n-r}function o(n,t,e){return r.max(t,r.min(n,e))}n.sum=function(n){for(var r=0,t=n.length;--t>=0;)r+=n[t];return r},n.sumsqrd=function(n){for(var r=0,t=n.length;--t>=0;)r+=n[t]*n[t];return r},n.sumsqerr=function(r){for(var t,e=n.mean(r),o=0,i=r.length;--i>=0;)o+=(t=r[i]-e)*t;return o},n.sumrow=function(n){for(var r=0,t=n.length;--t>=0;)r+=n[t];return r},n.product=function(n){for(var r=1,t=n.length;--t>=0;)r*=n[t];return r},n.min=function(n){for(var r=n[0],t=0;++t<n.length;)n[t]<r&&(r=n[t]);return r},n.max=function(n){for(var r=n[0],t=0;++t<n.length;)n[t]>r&&(r=n[t]);return r},n.unique=function(n){for(var r={},t=[],e=0;e<n.length;e++)r[n[e]]||(r[n[e]]=!0,t.push(n[e]));return t},n.mean=function(r){return n.sum(r)/r.length},n.meansqerr=function(r){return n.sumsqerr(r)/r.length},n.geomean=function(t){return r.pow(n.product(t),1/t.length)},n.median=function(n){var r=n.length,t=n.slice().sort(e);return 1&r?t[r/2|0]:(t[r/2-1]+t[r/2])/2},n.cumsum=function(r){return n.cumreduce(r,(function(n,r){return n+r}))},n.cumprod=function(r){return n.cumreduce(r,(function(n,r){return n*r}))},n.diff=function(n){var r,t=[],e=n.length;for(r=1;r<e;r++)t.push(n[r]-n[r-1]);return t},n.rank=function(n){var r,t=[],o={};for(r=0;r<n.length;r++)o[f=n[r]]?o[f]++:(o[f]=1,t.push(f));var i=t.sort(e),a={},u=1;for(r=0;r<i.length;r++){var f,s=o[f=i[r]],c=(u+(u+s-1))/2;a[f]=c,u+=s}return n.map((function(n){return a[n]}))},n.mode=function(n){var r,t=n.length,o=n.slice().sort(e),i=1,a=0,u=0,f=[];for(r=0;r<t;r++)o[r]===o[r+1]?i++:(i>a?(f=[o[r]],a=i,u=0):i===a&&(f.push(o[r]),u++),i=1);return 0===u?f[0]:f},n.range=function(r){return n.max(r)-n.min(r)},n.variance=function(r,t){return n.sumsqerr(r)/(r.length-(t?1:0))},n.pooledvariance=function(r){return r.reduce((function(r,t){return r+n.sumsqerr(t)}),0)/(r.reduce((function(n,r){return n+r.length}),0)-r.length)},n.deviation=function(r){for(var t=n.mean(r),e=r.length,o=new Array(e),i=0;i<e;i++)o[i]=r[i]-t;return o},n.stdev=function(t,e){return r.sqrt(n.variance(t,e))},n.pooledstdev=function(t){return r.sqrt(n.pooledvariance(t))},n.meandev=function(t){for(var e=n.mean(t),o=[],i=t.length-1;i>=0;i--)o.push(r.abs(t[i]-e));return n.mean(o)},n.meddev=function(t){for(var e=n.median(t),o=[],i=t.length-1;i>=0;i--)o.push(r.abs(t[i]-e));return n.median(o)},n.coeffvar=function(r){return n.stdev(r)/n.mean(r)},n.quartiles=function(n){var t=n.length,o=n.slice().sort(e);return[o[r.round(t/4)-1],o[r.round(t/2)-1],o[r.round(3*t/4)-1]]},n.quantiles=function(n,t,i,a){var u,f,s,c,l,m=n.slice().sort(e),d=[t.length],h=n.length;for(void 0===i&&(i=3/8),void 0===a&&(a=3/8),u=0;u<t.length;u++)s=h*(f=t[u])+(i+f*(1-i-a)),c=r.floor(o(s,1,h-1)),l=o(s-c,0,1),d[u]=(1-l)*m[c-1]+l*m[c];return d},n.percentile=function(n,r,t){var o=n.slice().sort(e),i=r*(o.length+(t?1:-1))+(t?0:1),a=parseInt(i),u=i-a;return a+1<o.length?o[a-1]+u*(o[a]-o[a-1]):o[a-1]},n.percentileOfScore=function(n,r,t){var e,o,i=0,a=n.length,u=!1;for("strict"===t&&(u=!0),o=0;o<a;o++)e=n[o],(u&&e<r||!u&&e<=r)&&i++;return i/a},n.histogram=function(t,e){e=e||4;var o,i=n.min(t),a=(n.max(t)-i)/e,u=t.length,f=[];for(o=0;o<e;o++)f[o]=0;for(o=0;o<u;o++)f[r.min(r.floor((t[o]-i)/a),e-1)]+=1;return f},n.covariance=function(r,t){var e,o=n.mean(r),i=n.mean(t),a=r.length,u=new Array(a);for(e=0;e<a;e++)u[e]=(r[e]-o)*(t[e]-i);return n.sum(u)/(a-1)},n.corrcoeff=function(r,t){return n.covariance(r,t)/n.stdev(r,1)/n.stdev(t,1)},n.spearmancoeff=function(r,t){return r=n.rank(r),t=n.rank(t),n.corrcoeff(r,t)},n.stanMoment=function(t,e){for(var o=n.mean(t),i=n.stdev(t),a=t.length,u=0,f=0;f<a;f++)u+=r.pow((t[f]-o)/i,e);return u/t.length},n.skewness=function(r){return n.stanMoment(r,3)},n.kurtosis=function(r){return n.stanMoment(r,4)-3};var i=n.prototype;!function(r){for(var e=0;e<r.length;e++)!function(r){i[r]=function(e,o){var a=[],u=0,f=this;if(t(e)&&(o=e,e=!1),o)return setTimeout((function(){o.call(f,i[r].call(f,e))})),this;if(this.length>1){for(f=!0===e?this:this.transpose();u<f.length;u++)a[u]=n[r](f[u]);return a}return n[r](this[0],e)}}(r[e])}("cumsum cumprod".split(" ")),function(r){for(var e=0;e<r.length;e++)!function(r){i[r]=function(e,o){var a=[],u=0,f=this;if(t(e)&&(o=e,e=!1),o)return setTimeout((function(){o.call(f,i[r].call(f,e))})),this;if(this.length>1){for("sumrow"!==r&&(f=!0===e?this:this.transpose());u<f.length;u++)a[u]=n[r](f[u]);return!0===e?n[r](n.utils.toVector(a)):a}return n[r](this[0],e)}}(r[e])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(r){for(var e=0;e<r.length;e++)!function(r){i[r]=function(){var e,o=[],a=0,u=this,f=Array.prototype.slice.call(arguments);if(t(f[f.length-1])){e=f[f.length-1];var s=f.slice(0,f.length-1);return setTimeout((function(){e.call(u,i[r].apply(u,s))})),this}e=void 0;var c=function(t){return n[r].apply(u,[t].concat(f))};if(this.length>1){for(u=u.transpose();a<u.length;a++)o[a]=c(u[a]);return o}return c(this[0])}}(r[e])}("quantiles percentileOfScore".split(" "))}(e=function(n,r){var t=Array.prototype.concat,e=Array.prototype.slice,o=Object.prototype.toString;function i(r,t){var e=r>t?r:t;return n.pow(10,17-~~(n.log(e>0?e:-e)*n.LOG10E))}var a=Array.isArray||function(n){return"[object Array]"===o.call(n)};function u(n){return"[object Function]"===o.call(n)}function f(n){return"number"==typeof n&&n-n==0}function s(){return new s._init(arguments)}function c(){return 0}function l(){return 1}function m(n,r){return n===r?1:0}s.fn=s.prototype,s._init=function(n){if(a(n[0]))if(a(n[0][0])){u(n[1])&&(n[0]=s.map(n[0],n[1]));for(var r=0;r<n[0].length;r++)this[r]=n[0][r];this.length=n[0].length}else this[0]=u(n[1])?s.map(n[0],n[1]):n[0],this.length=1;else if(f(n[0]))this[0]=s.seq.apply(null,n),this.length=1;else{if(n[0]instanceof s)return s(n[0].toArray());this[0]=[],this.length=1}return this},s._init.prototype=s.prototype,s._init.constructor=s,s.utils={calcRdx:i,isArray:a,isFunction:u,isNumber:f,toVector:function(n){return t.apply([],n)}},s._random_fn=n.random,s.setRandom=function(n){if("function"!=typeof n)throw new TypeError("fn is not a function");s._random_fn=n},s.extend=function(n){var r,t;if(1===arguments.length){for(t in n)s[t]=n[t];return this}for(r=1;r<arguments.length;r++)for(t in arguments[r])n[t]=arguments[r][t];return n},s.rows=function(n){return n.length||1},s.cols=function(n){return n[0].length||1},s.dimensions=function(n){return{rows:s.rows(n),cols:s.cols(n)}},s.row=function(n,r){return a(r)?r.map((function(r){return s.row(n,r)})):n[r]},s.rowa=function(n,r){return s.row(n,r)},s.col=function(n,r){if(a(r)){var t=s.arange(n.length).map((function(){return new Array(r.length)}));return r.forEach((function(r,e){s.arange(n.length).forEach((function(o){t[o][e]=n[o][r]}))})),t}for(var e=new Array(n.length),o=0;o<n.length;o++)e[o]=[n[o][r]];return e},s.cola=function(n,r){return s.col(n,r).map((function(n){return n[0]}))},s.diag=function(n){for(var r=s.rows(n),t=new Array(r),e=0;e<r;e++)t[e]=[n[e][e]];return t},s.antidiag=function(n){for(var r=s.rows(n)-1,t=new Array(r),e=0;r>=0;r--,e++)t[e]=[n[e][r]];return t},s.transpose=function(n){var r,t,e,o,i,u=[];for(a(n[0])||(n=[n]),t=n.length,e=n[0].length,i=0;i<e;i++){for(r=new Array(t),o=0;o<t;o++)r[o]=n[o][i];u.push(r)}return 1===u.length?u[0]:u},s.map=function(n,r,t){var e,o,i,u,f;for(a(n[0])||(n=[n]),o=n.length,i=n[0].length,u=t?n:new Array(o),e=0;e<o;e++)for(u[e]||(u[e]=new Array(i)),f=0;f<i;f++)u[e][f]=r(n[e][f],e,f);return 1===u.length?u[0]:u},s.cumreduce=function(n,r,t){var e,o,i,u,f;for(a(n[0])||(n=[n]),o=n.length,i=n[0].length,u=t?n:new Array(o),e=0;e<o;e++)for(u[e]||(u[e]=new Array(i)),i>0&&(u[e][0]=n[e][0]),f=1;f<i;f++)u[e][f]=r(u[e][f-1],n[e][f]);return 1===u.length?u[0]:u},s.alter=function(n,r){return s.map(n,r,!0)},s.create=function(n,r,t){var e,o,i=new Array(n);for(u(r)&&(t=r,r=n),e=0;e<n;e++)for(i[e]=new Array(r),o=0;o<r;o++)i[e][o]=t(e,o);return i},s.zeros=function(n,r){return f(r)||(r=n),s.create(n,r,c)},s.ones=function(n,r){return f(r)||(r=n),s.create(n,r,l)},s.rand=function(n,r){return f(r)||(r=n),s.create(n,r,s._random_fn)},s.identity=function(n,r){return f(r)||(r=n),s.create(n,r,m)},s.symmetric=function(n){var r,t,e=n.length;if(n.length!==n[0].length)return!1;for(r=0;r<e;r++)for(t=0;t<e;t++)if(n[t][r]!==n[r][t])return!1;return!0},s.clear=function(n){return s.alter(n,c)},s.seq=function(n,r,t,e){u(e)||(e=!1);var o,a=[],f=i(n,r),s=(r*f-n*f)/((t-1)*f),c=n;for(o=0;c<=r&&o<t;c=(n*f+s*f*++o)/f)a.push(e?e(c,o):c);return a},s.arange=function(n,r,t){var e,o=[];if(t=t||1,void 0===r&&(r=n,n=0),n===r||0===t)return[];if(n<r&&t<0)return[];if(n>r&&t>0)return[];if(t>0)for(e=n;e<r;e+=t)o.push(e);else for(e=n;e>r;e+=t)o.push(e);return o},s.slice=function(){function n(n,r,t,e){var o,i=[],a=n.length;if(void 0===r&&void 0===t&&void 0===e)return s.copy(n);if(e=e||1,(r=(r=r||0)>=0?r:a+r)===(t=(t=t||n.length)>=0?t:a+t)||0===e)return[];if(r<t&&e<0)return[];if(r>t&&e>0)return[];if(e>0)for(o=r;o<t;o+=e)i.push(n[o]);else for(o=r;o>t;o+=e)i.push(n[o]);return i}return function(r,t){var e,o;return f((t=t||{}).row)?f(t.col)?r[t.row][t.col]:n(s.rowa(r,t.row),(e=t.col||{}).start,e.end,e.step):f(t.col)?n(s.cola(r,t.col),(o=t.row||{}).start,o.end,o.step):(o=t.row||{},e=t.col||{},n(r,o.start,o.end,o.step).map((function(r){return n(r,e.start,e.end,e.step)})))}}(),s.sliceAssign=function(r,t,e){var o,i;if(f(t.row)){if(f(t.col))return r[t.row][t.col]=e;t.col=t.col||{},t.col.start=t.col.start||0,t.col.end=t.col.end||r[0].length,t.col.step=t.col.step||1,o=s.arange(t.col.start,n.min(r.length,t.col.end),t.col.step);var a=t.row;return o.forEach((function(n,t){r[a][n]=e[t]})),r}if(f(t.col)){t.row=t.row||{},t.row.start=t.row.start||0,t.row.end=t.row.end||r.length,t.row.step=t.row.step||1,i=s.arange(t.row.start,n.min(r[0].length,t.row.end),t.row.step);var u=t.col;return i.forEach((function(n,t){r[n][u]=e[t]})),r}return void 0===e[0].length&&(e=[e]),t.row.start=t.row.start||0,t.row.end=t.row.end||r.length,t.row.step=t.row.step||1,t.col.start=t.col.start||0,t.col.end=t.col.end||r[0].length,t.col.step=t.col.step||1,i=s.arange(t.row.start,n.min(r.length,t.row.end),t.row.step),o=s.arange(t.col.start,n.min(r[0].length,t.col.end),t.col.step),i.forEach((function(n,t){o.forEach((function(o,i){r[n][o]=e[t][i]}))})),r},s.diagonal=function(n){var r=s.zeros(n.length,n.length);return n.forEach((function(n,t){r[t][t]=n})),r},s.copy=function(n){return n.map((function(n){return f(n)?n:n.map((function(n){return n}))}))};var d=s.prototype;return d.length=0,d.push=Array.prototype.push,d.sort=Array.prototype.sort,d.splice=Array.prototype.splice,d.slice=Array.prototype.slice,d.toArray=function(){return this.length>1?e.call(this):e.call(this)[0]},d.map=function(n,r){return s(s.map(this,n,r))},d.cumreduce=function(n,r){return s(s.cumreduce(this,n,r))},d.alter=function(n){return s.alter(this,n),this},function(n){for(var r=0;r<n.length;r++)!function(n){d[n]=function(r){var t,e=this;return r?(setTimeout((function(){r.call(e,d[n].call(e))})),this):(t=s[n](this),a(t)?s(t):t)}}(n[r])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(n){for(var r=0;r<n.length;r++)!function(n){d[n]=function(r,t){var e=this;return t?(setTimeout((function(){t.call(e,d[n].call(e,r))})),this):s(s[n](this,r))}}(n[r])}("row col".split(" ")),function(n){for(var r=0;r<n.length;r++)!function(n){d[n]=function(){return s(s[n].apply(null,arguments))}}(n[r])}("create zeros ones rand identity".split(" ")),s}(Math),Math),function(n,r){n.gammaln=function(n){var t,e,o,i=0,a=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],u=1.000000000190015;for(o=(e=t=n)+5.5,o-=(t+.5)*r.log(o);i<6;i++)u+=a[i]/++e;return r.log(2.5066282746310007*u/t)-o},n.loggam=function(n){var t,e,o,i,a,u,f,s=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(t=n,f=0,1==n||2==n)return 0;for(n<=7&&(t=n+(f=r.floor(7-n))),e=1/(t*t),o=2*r.PI,a=s[9],u=8;u>=0;u--)a*=e,a+=s[u];if(i=a/t+.5*r.log(o)+(t-.5)*r.log(t)-t,n<=7)for(u=1;u<=f;u++)i-=r.log(t-1),t-=1;return i},n.gammafn=function(n){var t,e,o,i,a=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],u=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],f=!1,s=0,c=0,l=0,m=n;if(n>171.6243769536076)return 1/0;if(m<=0){if(!(i=m%1+36e-17))return 1/0;f=(1&m?-1:1)*r.PI/r.sin(r.PI*i),m=1-m}for(o=m,e=m<1?m++:(m-=s=(0|m)-1)-1,t=0;t<8;++t)l=(l+a[t])*e,c=c*e+u[t];if(i=l/c+1,o<m)i/=o;else if(o>m)for(t=0;t<s;++t)i*=m,m++;return f&&(i=f/i),i},n.gammap=function(r,t){return n.lowRegGamma(r,t)*n.gammafn(r)},n.lowRegGamma=function(t,e){var o,i=n.gammaln(t),a=t,u=1/t,f=u,s=e+1-t,c=1/1e-30,l=1/s,m=l,d=1,h=-~(8.5*r.log(t>=1?t:1/t)+.4*t+17);if(e<0||t<=0)return NaN;if(e<t+1){for(;d<=h;d++)u+=f*=e/++a;return u*r.exp(-e+t*r.log(e)-i)}for(;d<=h;d++)m*=(l=1/(l=(o=-d*(d-t))*l+(s+=2)))*(c=s+o/c);return 1-m*r.exp(-e+t*r.log(e)-i)},n.factorialln=function(r){return r<0?NaN:n.gammaln(r+1)},n.factorial=function(r){return r<0?NaN:n.gammafn(r+1)},n.combination=function(t,e){return t>170||e>170?r.exp(n.combinationln(t,e)):n.factorial(t)/n.factorial(e)/n.factorial(t-e)},n.combinationln=function(r,t){return n.factorialln(r)-n.factorialln(t)-n.factorialln(r-t)},n.permutation=function(r,t){return n.factorial(r)/n.factorial(r-t)},n.betafn=function(t,e){if(!(t<=0||e<=0))return t+e>170?r.exp(n.betaln(t,e)):n.gammafn(t)*n.gammafn(e)/n.gammafn(t+e)},n.betaln=function(r,t){return n.gammaln(r)+n.gammaln(t)-n.gammaln(r+t)},n.betacf=function(n,t,e){var o,i,a,u,f=1,s=t+e,c=t+1,l=t-1,m=1,d=1-s*n/c;for(r.abs(d)<1e-30&&(d=1e-30),u=d=1/d;f<=100&&(d=1+(i=f*(e-f)*n/((l+(o=2*f))*(t+o)))*d,r.abs(d)<1e-30&&(d=1e-30),m=1+i/m,r.abs(m)<1e-30&&(m=1e-30),u*=(d=1/d)*m,d=1+(i=-(t+f)*(s+f)*n/((t+o)*(c+o)))*d,r.abs(d)<1e-30&&(d=1e-30),m=1+i/m,r.abs(m)<1e-30&&(m=1e-30),u*=a=(d=1/d)*m,!(r.abs(a-1)<3e-7));f++);return u},n.gammapinv=function(t,e){var o,i,a,u,f,s,c=0,l=e-1,m=n.gammaln(e);if(t>=1)return r.max(100,e+100*r.sqrt(e));if(t<=0)return 0;for(e>1?(f=r.log(l),s=r.exp(l*(f-1)-m),u=t<.5?t:1-t,o=(2.30753+.27061*(i=r.sqrt(-2*r.log(u))))/(1+i*(.99229+.04481*i))-i,t<.5&&(o=-o),o=r.max(.001,e*r.pow(1-1/(9*e)-o/(3*r.sqrt(e)),3))):o=t<(i=1-e*(.253+.12*e))?r.pow(t/i,1/e):1-r.log(1-(t-i)/(1-i));c<12;c++){if(o<=0)return 0;if((o-=i=(a=(n.lowRegGamma(e,o)-t)/(i=e>1?s*r.exp(-(o-l)+l*(r.log(o)-f)):r.exp(-o+l*r.log(o)-m)))/(1-.5*r.min(1,a*((e-1)/o-1))))<=0&&(o=.5*(o+i)),r.abs(i)<1e-8*o)break}return o},n.erf=function(n){var t,e,o,i,a=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],u=a.length-1,f=!1,s=0,c=0;for(n<0&&(n=-n,f=!0),e=4*(t=2/(2+n))-2;u>0;u--)o=s,s=e*s-c+a[u],c=o;return i=t*r.exp(-n*n+.5*(a[0]+e*s)-c),f?i-1:1-i},n.erfc=function(r){return 1-n.erf(r)},n.erfcinv=function(t){var e,o,i,a,u=0;if(t>=2)return-100;if(t<=0)return 100;for(a=t<1?t:2-t,e=-.70711*((2.30753+.27061*(i=r.sqrt(-2*r.log(a/2))))/(1+i*(.99229+.04481*i))-i);u<2;u++)e+=(o=n.erfc(e)-a)/(1.1283791670955126*r.exp(-e*e)-e*o);return t<1?e:-e},n.ibetainv=function(t,e,o){var i,a,u,f,s,c,l,m,d,h,g=e-1,p=o-1,v=0;if(t<=0)return 0;if(t>=1)return 1;for(e>=1&&o>=1?(u=t<.5?t:1-t,c=(2.30753+.27061*(f=r.sqrt(-2*r.log(u))))/(1+f*(.99229+.04481*f))-f,t<.5&&(c=-c),l=(c*c-3)/6,m=2/(1/(2*e-1)+1/(2*o-1)),d=c*r.sqrt(l+m)/m-(1/(2*o-1)-1/(2*e-1))*(l+5/6-2/(3*m)),c=e/(e+o*r.exp(2*d))):(i=r.log(e/(e+o)),a=r.log(o/(e+o)),c=t<(f=r.exp(e*i)/e)/(d=f+(s=r.exp(o*a)/o))?r.pow(e*d*t,1/e):1-r.pow(o*d*(1-t),1/o)),h=-n.gammaln(e)-n.gammaln(o)+n.gammaln(e+o);v<10;v++){if(0===c||1===c)return c;if((c-=f=(s=(n.ibeta(c,e,o)-t)/(f=r.exp(g*r.log(c)+p*r.log(1-c)+h)))/(1-.5*r.min(1,s*(g/c-p/(1-c)))))<=0&&(c=.5*(c+f)),c>=1&&(c=.5*(c+f+1)),r.abs(f)<1e-8*c&&v>0)break}return c},n.ibeta=function(t,e,o){var i=0===t||1===t?0:r.exp(n.gammaln(e+o)-n.gammaln(e)-n.gammaln(o)+e*r.log(t)+o*r.log(1-t));return!(t<0||t>1)&&(t<(e+1)/(e+o+2)?i*n.betacf(t,e,o)/e:1-i*n.betacf(1-t,o,e)/o)},n.randn=function(t,e){var o,i,a,u,f;if(e||(e=t),t)return n.create(t,e,(function(){return n.randn()}));do{o=n._random_fn(),i=1.7156*(n._random_fn()-.5),f=(a=o-.449871)*a+(u=r.abs(i)+.386595)*(.196*u-.25472*a)}while(f>.27597&&(f>.27846||i*i>-4*r.log(o)*o*o));return i/o},n.randg=function(t,e,o){var i,a,u,f,s,c,l=t;if(o||(o=e),t||(t=1),e)return(c=n.zeros(e,o)).alter((function(){return n.randg(t)})),c;t<1&&(t+=1),i=t-1/3,a=1/r.sqrt(9*i);do{do{f=1+a*(s=n.randn())}while(f<=0);f*=f*f,u=n._random_fn()}while(u>1-.331*r.pow(s,4)&&r.log(u)>.5*s*s+i*(1-f+r.log(f)));if(t==l)return i*f;do{u=n._random_fn()}while(0===u);return r.pow(u,1/l)*i*f},function(r){for(var t=0;t<r.length;t++)!function(r){n.fn[r]=function(){return n(n.map(this,(function(t){return n[r](t)})))}}(r[t])}("gammaln gammafn factorial factorialln".split(" ")),function(r){for(var t=0;t<r.length;t++)!function(r){n.fn[r]=function(){return n(n[r].apply(null,arguments))}}(r[t])}("randn".split(" "))}(e,Math),function(n,r){function t(n,t,e,o){for(var i,a=0,u=1,f=1,s=1,c=0,l=0;r.abs((f-l)/f)>o;)l=f,u=s+(i=-(t+c)*(t+e+c)*n/(t+2*c)/(t+2*c+1))*u,f=(a=f+i*a)+(i=(c+=1)*(e-c)*n/(t+2*c-1)/(t+2*c))*f,a/=s=u+i*s,u/=s,f/=s,s=1;return f/t}function e(t,e,o){var i=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],a=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],u=.5*t;if(u>=8)return 1;var f,s=2*n.normal.cdf(u,0,1,1,0)-1;s=s>=r.exp(-50/o)?r.pow(s,o):0;for(var c=u,l=(8-u)/(f=t>3?2:3),m=c+l,d=0,h=o-1,g=1;g<=f;g++){for(var p=0,v=.5*(m+c),y=.5*(m-c),w=1;w<=12;w++){var b,x=v+y*(6<w?i[(b=12-w+1)-1]:-i[(b=w)-1]),q=x*x;if(q>60)break;var k=2*n.normal.cdf(x,0,1,1,0)*.5-2*n.normal.cdf(x,t,1,1,0)*.5;k>=r.exp(-30/h)&&(p+=k=a[b-1]*r.exp(-.5*q)*r.pow(k,h))}d+=p*=2*y*o/r.sqrt(2*r.PI),c=m,m+=l}return(s+=d)<=r.exp(-30/e)?0:(s=r.pow(s,e))>=1?1:s}!function(r){for(var t=0;t<r.length;t++)!function(r){n[r]=function n(r,t,e){return this instanceof n?(this._a=r,this._b=t,this._c=e,this):new n(r,t,e)},n.fn[r]=function(t,e,o){var i=n[r](t,e,o);return i.data=this,i},n[r].prototype.sample=function(t){var e=this._a,o=this._b,i=this._c;return t?n.alter(t,(function(){return n[r].sample(e,o,i)})):n[r].sample(e,o,i)},function(t){for(var e=0;e<t.length;e++)!function(t){n[r].prototype[t]=function(e){var o=this._a,i=this._b,a=this._c;return e||0===e||(e=this.data),"number"!=typeof e?n.fn.map.call(e,(function(e){return n[r][t](e,o,i,a)})):n[r][t](e,o,i,a)}}(t[e])}("pdf cdf inv".split(" ")),function(t){for(var e=0;e<t.length;e++)!function(t){n[r].prototype[t]=function(){return n[r][t](this._a,this._b,this._c)}}(t[e])}("mean median mode variance".split(" "))}(r[t])}("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),n.extend(n.beta,{pdf:function(t,e,o){return t>1||t<0?0:1==e&&1==o?1:e<512&&o<512?r.pow(t,e-1)*r.pow(1-t,o-1)/n.betafn(e,o):r.exp((e-1)*r.log(t)+(o-1)*r.log(1-t)-n.betaln(e,o))},cdf:function(r,t,e){return r>1||r<0?1*(r>1):n.ibeta(r,t,e)},inv:function(r,t,e){return n.ibetainv(r,t,e)},mean:function(n,r){return n/(n+r)},median:function(r,t){return n.ibetainv(.5,r,t)},mode:function(n,r){return(n-1)/(n+r-2)},sample:function(r,t){var e=n.randg(r);return e/(e+n.randg(t))},variance:function(n,t){return n*t/(r.pow(n+t,2)*(n+t+1))}}),n.extend(n.centralF,{pdf:function(t,e,o){var i;return t<0?0:e<=2?0===t&&e<2?1/0:0===t&&2===e?1:1/n.betafn(e/2,o/2)*r.pow(e/o,e/2)*r.pow(t,e/2-1)*r.pow(1+e/o*t,-(e+o)/2):(i=e*t/(o+t*e),e*(o/(o+t*e))/2*n.binomial.pdf((e-2)/2,(e+o-2)/2,i))},cdf:function(r,t,e){return r<0?0:n.ibeta(t*r/(t*r+e),t/2,e/2)},inv:function(r,t,e){return e/(t*(1/n.ibetainv(r,t/2,e/2)-1))},mean:function(n,r){return r>2?r/(r-2):void 0},mode:function(n,r){return n>2?r*(n-2)/(n*(r+2)):void 0},sample:function(r,t){return 2*n.randg(r/2)/r/(2*n.randg(t/2)/t)},variance:function(n,r){if(!(r<=4))return 2*r*r*(n+r-2)/(n*(r-2)*(r-2)*(r-4))}}),n.extend(n.cauchy,{pdf:function(n,t,e){return e<0?0:e/(r.pow(n-t,2)+r.pow(e,2))/r.PI},cdf:function(n,t,e){return r.atan((n-t)/e)/r.PI+.5},inv:function(n,t,e){return t+e*r.tan(r.PI*(n-.5))},median:function(n){return n},mode:function(n){return n},sample:function(t,e){return n.randn()*r.sqrt(1/(2*n.randg(.5)))*e+t}}),n.extend(n.chisquare,{pdf:function(t,e){return t<0?0:0===t&&2===e?.5:r.exp((e/2-1)*r.log(t)-t/2-e/2*r.log(2)-n.gammaln(e/2))},cdf:function(r,t){return r<0?0:n.lowRegGamma(t/2,r/2)},inv:function(r,t){return 2*n.gammapinv(r,.5*t)},mean:function(n){return n},median:function(n){return n*r.pow(1-2/(9*n),3)},mode:function(n){return n-2>0?n-2:0},sample:function(r){return 2*n.randg(r/2)},variance:function(n){return 2*n}}),n.extend(n.exponential,{pdf:function(n,t){return n<0?0:t*r.exp(-t*n)},cdf:function(n,t){return n<0?0:1-r.exp(-t*n)},inv:function(n,t){return-r.log(1-n)/t},mean:function(n){return 1/n},median:function(n){return 1/n*r.log(2)},mode:function(){return 0},sample:function(t){return-1/t*r.log(n._random_fn())},variance:function(n){return r.pow(n,-2)}}),n.extend(n.gamma,{pdf:function(t,e,o){return t<0?0:0===t&&1===e?1/o:r.exp((e-1)*r.log(t)-t/o-n.gammaln(e)-e*r.log(o))},cdf:function(r,t,e){return r<0?0:n.lowRegGamma(t,r/e)},inv:function(r,t,e){return n.gammapinv(r,t)*e},mean:function(n,r){return n*r},mode:function(n,r){if(n>1)return(n-1)*r},sample:function(r,t){return n.randg(r)*t},variance:function(n,r){return n*r*r}}),n.extend(n.invgamma,{pdf:function(t,e,o){return t<=0?0:r.exp(-(e+1)*r.log(t)-o/t-n.gammaln(e)+e*r.log(o))},cdf:function(r,t,e){return r<=0?0:1-n.lowRegGamma(t,e/r)},inv:function(r,t,e){return e/n.gammapinv(1-r,t)},mean:function(n,r){return n>1?r/(n-1):void 0},mode:function(n,r){return r/(n+1)},sample:function(r,t){return t/n.randg(r)},variance:function(n,r){if(!(n<=2))return r*r/((n-1)*(n-1)*(n-2))}}),n.extend(n.kumaraswamy,{pdf:function(n,t,e){return 0===n&&1===t?e:1===n&&1===e?t:r.exp(r.log(t)+r.log(e)+(t-1)*r.log(n)+(e-1)*r.log(1-r.pow(n,t)))},cdf:function(n,t,e){return n<0?0:n>1?1:1-r.pow(1-r.pow(n,t),e)},inv:function(n,t,e){return r.pow(1-r.pow(1-n,1/e),1/t)},mean:function(r,t){return t*n.gammafn(1+1/r)*n.gammafn(t)/n.gammafn(1+1/r+t)},median:function(n,t){return r.pow(1-r.pow(2,-1/t),1/n)},mode:function(n,t){if(n>=1&&t>=1&&1!==n&&1!==t)return r.pow((n-1)/(n*t-1),1/n)},variance:function(){throw new Error("variance not yet implemented")}}),n.extend(n.lognormal,{pdf:function(n,t,e){return n<=0?0:r.exp(-r.log(n)-.5*r.log(2*r.PI)-r.log(e)-r.pow(r.log(n)-t,2)/(2*e*e))},cdf:function(t,e,o){return t<0?0:.5+.5*n.erf((r.log(t)-e)/r.sqrt(2*o*o))},inv:function(t,e,o){return r.exp(-1.4142135623730951*o*n.erfcinv(2*t)+e)},mean:function(n,t){return r.exp(n+t*t/2)},median:function(n){return r.exp(n)},mode:function(n,t){return r.exp(n-t*t)},sample:function(t,e){return r.exp(n.randn()*e+t)},variance:function(n,t){return(r.exp(t*t)-1)*r.exp(2*n+t*t)}}),n.extend(n.noncentralt,{pdf:function(t,e,o){return r.abs(o)<1e-14?n.studentt.pdf(t,e):r.abs(t)<1e-14?r.exp(n.gammaln((e+1)/2)-o*o/2-.5*r.log(r.PI*e)-n.gammaln(e/2)):e/t*(n.noncentralt.cdf(t*r.sqrt(1+2/e),e+2,o)-n.noncentralt.cdf(t,e,o))},cdf:function(t,e,o){if(r.abs(o)<1e-14)return n.studentt.cdf(t,e);var i=!1;t<0&&(i=!0,o=-o);for(var a=n.normal.cdf(-o,0,1),u=1e-14+1,f=u,s=t*t/(t*t+e),c=0,l=r.exp(-o*o/2),m=r.exp(-o*o/2-.5*r.log(2)-n.gammaln(1.5))*o;c<200||f>1e-14||u>1e-14;)f=u,c>0&&(l*=o*o/(2*c),m*=o*o/(2*(c+.5))),a+=.5*(u=l*n.beta.cdf(s,c+.5,e/2)+m*n.beta.cdf(s,c+1,e/2)),c++;return i?1-a:a}}),n.extend(n.normal,{pdf:function(n,t,e){return r.exp(-.5*r.log(2*r.PI)-r.log(e)-r.pow(n-t,2)/(2*e*e))},cdf:function(t,e,o){return.5*(1+n.erf((t-e)/r.sqrt(2*o*o)))},inv:function(r,t,e){return-1.4142135623730951*e*n.erfcinv(2*r)+t},mean:function(n){return n},median:function(n){return n},mode:function(n){return n},sample:function(r,t){return n.randn()*t+r},variance:function(n,r){return r*r}}),n.extend(n.pareto,{pdf:function(n,t,e){return n<t?0:e*r.pow(t,e)/r.pow(n,e+1)},cdf:function(n,t,e){return n<t?0:1-r.pow(t/n,e)},inv:function(n,t,e){return t/r.pow(1-n,1/e)},mean:function(n,t){if(!(t<=1))return t*r.pow(n,t)/(t-1)},median:function(n,t){return n*(t*r.SQRT2)},mode:function(n){return n},variance:function(n,t){if(!(t<=2))return n*n*t/(r.pow(t-1,2)*(t-2))}}),n.extend(n.studentt,{pdf:function(t,e){return e=e>1e100?1e100:e,1/(r.sqrt(e)*n.betafn(.5,e/2))*r.pow(1+t*t/e,-(e+1)/2)},cdf:function(t,e){var o=e/2;return n.ibeta((t+r.sqrt(t*t+e))/(2*r.sqrt(t*t+e)),o,o)},inv:function(t,e){var o=n.ibetainv(2*r.min(t,1-t),.5*e,.5);return o=r.sqrt(e*(1-o)/o),t>.5?o:-o},mean:function(n){return n>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(t){return n.randn()*r.sqrt(t/(2*n.randg(t/2)))},variance:function(n){return n>2?n/(n-2):n>1?1/0:void 0}}),n.extend(n.weibull,{pdf:function(n,t,e){return n<0||t<0||e<0?0:e/t*r.pow(n/t,e-1)*r.exp(-r.pow(n/t,e))},cdf:function(n,t,e){return n<0?0:1-r.exp(-r.pow(n/t,e))},inv:function(n,t,e){return t*r.pow(-r.log(1-n),1/e)},mean:function(r,t){return r*n.gammafn(1+1/t)},median:function(n,t){return n*r.pow(r.log(2),1/t)},mode:function(n,t){return t<=1?0:n*r.pow((t-1)/t,1/t)},sample:function(t,e){return t*r.pow(-r.log(n._random_fn()),1/e)},variance:function(t,e){return t*t*n.gammafn(1+2/e)-r.pow(n.weibull.mean(t,e),2)}}),n.extend(n.uniform,{pdf:function(n,r,t){return n<r||n>t?0:1/(t-r)},cdf:function(n,r,t){return n<r?0:n<t?(n-r)/(t-r):1},inv:function(n,r,t){return r+n*(t-r)},mean:function(n,r){return.5*(n+r)},median:function(r,t){return n.mean(r,t)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,t){return r/2+t/2+(t/2-r/2)*(2*n._random_fn()-1)},variance:function(n,t){return r.pow(t-n,2)/12}}),n.extend(n.binomial,{pdf:function(t,e,o){return 0===o||1===o?e*o===t?1:0:n.combination(e,t)*r.pow(o,t)*r.pow(1-o,e-t)},cdf:function(e,o,i){var a;if(e<0)return 0;if(e>=o)return 1;if(i<0||i>1||o<=0)return NaN;var u=i,f=(e=r.floor(e))+1,s=o-e,c=f+s,l=r.exp(n.gammaln(c)-n.gammaln(s)-n.gammaln(f)+f*r.log(u)+s*r.log(1-u));return a=u<(f+1)/(c+2)?l*t(u,f,s,1e-10):1-l*t(1-u,s,f,1e-10),r.round(1/1e-10*(1-a))/(1/1e-10)}}),n.extend(n.negbin,{pdf:function(t,e,o){return t===t>>>0&&(t<0?0:n.combination(t+e-1,e-1)*r.pow(1-o,t)*r.pow(o,e))},cdf:function(r,t,e){var o=0,i=0;if(r<0)return 0;for(;i<=r;i++)o+=n.negbin.pdf(i,t,e);return o}}),n.extend(n.hypgeom,{pdf:function(t,e,o,i){if(t!=t|0)return!1;if(t<0||t<o-(e-i))return 0;if(t>i||t>o)return 0;if(2*o>e)return 2*i>e?n.hypgeom.pdf(e-o-i+t,e,e-o,e-i):n.hypgeom.pdf(i-t,e,e-o,i);if(2*i>e)return n.hypgeom.pdf(o-t,e,o,e-i);if(o<i)return n.hypgeom.pdf(t,e,i,o);for(var a=1,u=0,f=0;f<t;f++){for(;a>1&&u<i;)a*=1-o/(e-u),u++;a*=(i-f)*(o-f)/((f+1)*(e-o-i+f+1))}for(;u<i;u++)a*=1-o/(e-u);return r.min(1,r.max(0,a))},cdf:function(t,e,o,i){if(t<0||t<o-(e-i))return 0;if(t>=i||t>=o)return 1;if(2*o>e)return 2*i>e?n.hypgeom.cdf(e-o-i+t,e,e-o,e-i):1-n.hypgeom.cdf(i-t-1,e,e-o,i);if(2*i>e)return 1-n.hypgeom.cdf(o-t-1,e,o,e-i);if(o<i)return n.hypgeom.cdf(t,e,i,o);for(var a=1,u=1,f=0,s=0;s<t;s++){for(;a>1&&f<i;){var c=1-o/(e-f);u*=c,a*=c,f++}a+=u*=(i-s)*(o-s)/((s+1)*(e-o-i+s+1))}for(;f<i;f++)a*=1-o/(e-f);return r.min(1,r.max(0,a))}}),n.extend(n.poisson,{pdf:function(t,e){return e<0||t%1!=0||t<0?0:r.pow(e,t)*r.exp(-e)/n.factorial(t)},cdf:function(r,t){var e=[],o=0;if(r<0)return 0;for(;o<=r;o++)e.push(n.poisson.pdf(o,t));return n.sum(e)},mean:function(n){return n},variance:function(n){return n},sampleSmall:function(t){var e=1,o=0,i=r.exp(-t);do{o++,e*=n._random_fn()}while(e>i);return o-1},sampleLarge:function(t){var e,o,i,a,u,f,s,c,l,m,d=t;for(a=r.sqrt(d),u=r.log(d),f=.02483*(s=.931+2.53*a)-.059,c=1.1239+1.1328/(s-3.4),l=.9277-3.6224/(s-2);;){if(o=r.random()-.5,i=r.random(),m=.5-r.abs(o),e=r.floor((2*f/m+s)*o+d+.43),m>=.07&&i<=l)return e;if(!(e<0||m<.013&&i>m)&&r.log(i)+r.log(c)-r.log(f/(m*m)+s)<=e*u-d-n.loggam(e+1))return e}},sample:function(n){return n<10?this.sampleSmall(n):this.sampleLarge(n)}}),n.extend(n.triangular,{pdf:function(n,r,t,e){return t<=r||e<r||e>t?NaN:n<r||n>t?0:n<e?2*(n-r)/((t-r)*(e-r)):n===e?2/(t-r):2*(t-n)/((t-r)*(t-e))},cdf:function(n,t,e,o){return e<=t||o<t||o>e?NaN:n<=t?0:n>=e?1:n<=o?r.pow(n-t,2)/((e-t)*(o-t)):1-r.pow(e-n,2)/((e-t)*(e-o))},inv:function(n,t,e,o){return e<=t||o<t||o>e?NaN:n<=(o-t)/(e-t)?t+(e-t)*r.sqrt(n*((o-t)/(e-t))):t+(e-t)*(1-r.sqrt((1-n)*(1-(o-t)/(e-t))))},mean:function(n,r,t){return(n+r+t)/3},median:function(n,t,e){return e<=(n+t)/2?t-r.sqrt((t-n)*(t-e))/r.sqrt(2):e>(n+t)/2?n+r.sqrt((t-n)*(e-n))/r.sqrt(2):void 0},mode:function(n,r,t){return t},sample:function(t,e,o){var i=n._random_fn();return i<(o-t)/(e-t)?t+r.sqrt(i*(e-t)*(o-t)):e-r.sqrt((1-i)*(e-t)*(e-o))},variance:function(n,r,t){return(n*n+r*r+t*t-n*r-n*t-r*t)/18}}),n.extend(n.arcsine,{pdf:function(n,t,e){return e<=t?NaN:n<=t||n>=e?0:2/r.PI*r.pow(r.pow(e-t,2)-r.pow(2*n-t-e,2),-.5)},cdf:function(n,t,e){return n<t?0:n<e?2/r.PI*r.asin(r.sqrt((n-t)/(e-t))):1},inv:function(n,t,e){return t+(.5-.5*r.cos(r.PI*n))*(e-t)},mean:function(n,r){return r<=n?NaN:(n+r)/2},median:function(n,r){return r<=n?NaN:(n+r)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(t,e){return(t+e)/2+(e-t)/2*r.sin(2*r.PI*n.uniform.sample(0,1))},variance:function(n,t){return t<=n?NaN:r.pow(t-n,2)/8}}),n.extend(n.laplace,{pdf:function(n,t,e){return e<=0?0:r.exp(-r.abs(n-t)/e)/(2*e)},cdf:function(n,t,e){return e<=0?0:n<t?.5*r.exp((n-t)/e):1-.5*r.exp(-(n-t)/e)},mean:function(n){return n},median:function(n){return n},mode:function(n){return n},variance:function(n,r){return 2*r*r},sample:function(t,e){var o,i=n._random_fn()-.5;return t-e*((o=i)/r.abs(o))*r.log(1-2*r.abs(i))}}),n.extend(n.tukey,{cdf:function(t,o,i){var a=o,u=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],f=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(t<=0)return 0;if(i<2||a<2)return NaN;if(!Number.isFinite(t))return 1;if(i>25e3)return e(t,1,a);var s,c=.5*i,l=c*r.log(i)-i*r.log(2)-n.gammaln(c),m=c-1,d=.25*i;s=i<=100?1:i<=800?.5:i<=5e3?.25:.125,l+=r.log(s);for(var h=0,g=1;g<=50;g++){for(var p=0,v=(2*g-1)*s,y=1;y<=16;y++){var w,b;8<y?(w=y-8-1,b=l+m*r.log(v+u[w]*s)-(u[w]*s+v)*d):(w=y-1,b=l+m*r.log(v-u[w]*s)+(u[w]*s-v)*d),b>=-30&&(p+=e(8<y?t*r.sqrt(.5*(u[w]*s+v)):t*r.sqrt(.5*(-u[w]*s+v)),1,a)*f[w]*r.exp(b))}if(g*s>=1&&p<=1e-14)break;h+=p}if(p>1e-14)throw new Error("tukey.cdf failed to converge");return h>1&&(h=1),h},inv:function(t,e,o){if(o<2||e<2)return NaN;if(t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return 1/0;var i,a=function(n,t,e){var o=.5-.5*n,i=r.sqrt(r.log(1/(o*o))),a=i+((((-453642210148e-16*i-.204231210125)*i-.342242088547)*i-1)*i+.322232421088)/((((.0038560700634*i+.10353775285)*i+.531103462366)*i+.588581570495)*i+.099348462606);e<120&&(a+=(a*a*a+a)/e/4);var u=.8832-.2368*a;return e<120&&(u+=-1.214/e+1.208*a/e),a*(u*r.log(t-1)+1.4142)}(t,e,o),u=n.tukey.cdf(a,e,o)-t;i=u>0?r.max(0,a-1):a+1;for(var f,s=n.tukey.cdf(i,e,o)-t,c=1;c<50;c++)if(f=i-s*(i-a)/(s-u),u=s,a=i,f<0&&(f=0,s=-t),s=n.tukey.cdf(f,e,o)-t,i=f,r.abs(i-a)<1e-4)return f;throw new Error("tukey.inv failed to converge")}})}(e,Math),function(n,r){var t,e,o=Array.prototype.push,i=n.utils.isArray;function a(r){return i(r)||r instanceof n}n.extend({add:function(r,t){return a(t)?(a(t[0])||(t=[t]),n.map(r,(function(n,r,e){return n+t[r][e]}))):n.map(r,(function(n){return n+t}))},subtract:function(r,t){return a(t)?(a(t[0])||(t=[t]),n.map(r,(function(n,r,e){return n-t[r][e]||0}))):n.map(r,(function(n){return n-t}))},divide:function(r,t){return a(t)?(a(t[0])||(t=[t]),n.multiply(r,n.inv(t))):n.map(r,(function(n){return n/t}))},multiply:function(r,t){var e,o,i,u,f,s,c,l;if(void 0===r.length&&void 0===t.length)return r*t;if(f=r.length,s=r[0].length,c=n.zeros(f,i=a(t)?t[0].length:s),l=0,a(t)){for(;l<i;l++)for(e=0;e<f;e++){for(u=0,o=0;o<s;o++)u+=r[e][o]*t[o][l];c[e][l]=u}return 1===f&&1===l?c[0][0]:c}return n.map(r,(function(n){return n*t}))},outer:function(r,t){return n.multiply(r.map((function(n){return[n]})),[t])},dot:function(r,t){a(r[0])||(r=[r]),a(t[0])||(t=[t]);for(var e,o,i=1===r[0].length&&1!==r.length?n.transpose(r):r,u=1===t[0].length&&1!==t.length?n.transpose(t):t,f=[],s=0,c=i.length,l=i[0].length;s<c;s++){for(f[s]=[],e=0,o=0;o<l;o++)e+=i[s][o]*u[s][o];f[s]=e}return 1===f.length?f[0]:f},pow:function(t,e){return n.map(t,(function(n){return r.pow(n,e)}))},exp:function(t){return n.map(t,(function(n){return r.exp(n)}))},log:function(t){return n.map(t,(function(n){return r.log(n)}))},abs:function(t){return n.map(t,(function(n){return r.abs(n)}))},norm:function(n,t){var e=0,o=0;for(isNaN(t)&&(t=2),a(n[0])&&(n=n[0]);o<n.length;o++)e+=r.pow(r.abs(n[o]),t);return r.pow(e,1/t)},angle:function(t,e){return r.acos(n.dot(t,e)/(n.norm(t)*n.norm(e)))},aug:function(n,r){var t,e=[];for(t=0;t<n.length;t++)e.push(n[t].slice());for(t=0;t<e.length;t++)o.apply(e[t],r[t]);return e},inv:function(r){for(var t,e=r.length,o=r[0].length,i=n.identity(e,o),a=n.gauss_jordan(r,i),u=[],f=0;f<e;f++)for(u[f]=[],t=o;t<a[0].length;t++)u[f][t-o]=a[f][t];return u},det:function(n){var r,t=n.length,e=2*t,o=new Array(e),i=t-1,a=e-1,u=i-t+1,f=a,s=0,c=0;if(2===t)return n[0][0]*n[1][1]-n[0][1]*n[1][0];for(;s<e;s++)o[s]=1;for(s=0;s<t;s++){for(r=0;r<t;r++)o[u<0?u+t:u]*=n[s][r],o[f<t?f+t:f]*=n[s][r],u++,f--;u=--i-t+1,f=--a}for(s=0;s<t;s++)c+=o[s];for(;s<e;s++)c-=o[s];return c},gauss_elimination:function(t,e){var o,i,a,u,f=0,s=0,c=t.length,l=t[0].length,m=1,d=0,h=[];for(o=(t=n.aug(t,e))[0].length,f=0;f<c;f++){for(i=t[f][f],s=f,u=f+1;u<l;u++)i<r.abs(t[u][f])&&(i=t[u][f],s=u);if(s!=f)for(u=0;u<o;u++)a=t[f][u],t[f][u]=t[s][u],t[s][u]=a;for(s=f+1;s<c;s++)for(m=t[s][f]/t[f][f],u=f;u<o;u++)t[s][u]=t[s][u]-m*t[f][u]}for(f=c-1;f>=0;f--){for(d=0,s=f+1;s<=c-1;s++)d+=h[s]*t[f][s];h[f]=(t[f][o-1]-d)/t[f][f]}return h},gauss_jordan:function(t,e){var o,i,a,u=n.aug(t,e),f=u.length,s=u[0].length,c=0;for(i=0;i<f;i++){var l=i;for(a=i+1;a<f;a++)r.abs(u[a][i])>r.abs(u[l][i])&&(l=a);var m=u[i];for(u[i]=u[l],u[l]=m,a=i+1;a<f;a++)for(c=u[a][i]/u[i][i],o=i;o<s;o++)u[a][o]-=u[i][o]*c}for(i=f-1;i>=0;i--){for(c=u[i][i],a=0;a<i;a++)for(o=s-1;o>i-1;o--)u[a][o]-=u[i][o]*u[a][i]/c;for(u[i][i]/=c,o=f;o<s;o++)u[i][o]/=c}return u},triaUpSolve:function(r,t){var e,o=r[0].length,i=n.zeros(1,o)[0],a=!1;return null!=t[0].length&&(t=t.map((function(n){return n[0]})),a=!0),n.arange(o-1,-1,-1).forEach((function(a){e=n.arange(a+1,o).map((function(n){return i[n]*r[a][n]})),i[a]=(t[a]-n.sum(e))/r[a][a]})),a?i.map((function(n){return[n]})):i},triaLowSolve:function(r,t){var e,o=r[0].length,i=n.zeros(1,o)[0],a=!1;return null!=t[0].length&&(t=t.map((function(n){return n[0]})),a=!0),n.arange(o).forEach((function(o){e=n.arange(o).map((function(n){return r[o][n]*i[n]})),i[o]=(t[o]-n.sum(e))/r[o][o]})),a?i.map((function(n){return[n]})):i},lu:function(r){var t,e=r.length,o=n.identity(e),i=n.zeros(r.length,r[0].length);return n.arange(e).forEach((function(n){i[0][n]=r[0][n]})),n.arange(1,e).forEach((function(a){n.arange(a).forEach((function(e){t=n.arange(e).map((function(n){return o[a][n]*i[n][e]})),o[a][e]=(r[a][e]-n.sum(t))/i[e][e]})),n.arange(a,e).forEach((function(e){t=n.arange(a).map((function(n){return o[a][n]*i[n][e]})),i[a][e]=r[t.length][e]-n.sum(t)}))})),[o,i]},cholesky:function(t){var e,o=t.length,i=n.zeros(t.length,t[0].length);return n.arange(o).forEach((function(a){e=n.arange(a).map((function(n){return r.pow(i[a][n],2)})),i[a][a]=r.sqrt(t[a][a]-n.sum(e)),n.arange(a+1,o).forEach((function(r){e=n.arange(a).map((function(n){return i[a][n]*i[r][n]})),i[r][a]=(t[a][r]-n.sum(e))/i[a][a]}))})),i},gauss_jacobi:function(t,e,o,i){for(var a,u,f,s,c=0,l=0,m=t.length,d=[],h=[],g=[];c<m;c++)for(d[c]=[],h[c]=[],g[c]=[],l=0;l<m;l++)c>l?(d[c][l]=t[c][l],h[c][l]=g[c][l]=0):c<l?(h[c][l]=t[c][l],d[c][l]=g[c][l]=0):(g[c][l]=t[c][l],d[c][l]=h[c][l]=0);for(f=n.multiply(n.multiply(n.inv(g),n.add(d,h)),-1),u=n.multiply(n.inv(g),e),a=o,s=n.add(n.multiply(f,o),u),c=2;r.abs(n.norm(n.subtract(s,a)))>i;)a=s,s=n.add(n.multiply(f,a),u),c++;return s},gauss_seidel:function(t,e,o,i){for(var a,u,f,s,c,l=0,m=t.length,d=[],h=[],g=[];l<m;l++)for(d[l]=[],h[l]=[],g[l]=[],a=0;a<m;a++)l>a?(d[l][a]=t[l][a],h[l][a]=g[l][a]=0):l<a?(h[l][a]=t[l][a],d[l][a]=g[l][a]=0):(g[l][a]=t[l][a],d[l][a]=h[l][a]=0);for(s=n.multiply(n.multiply(n.inv(n.add(g,d)),h),-1),f=n.multiply(n.inv(n.add(g,d)),e),u=o,c=n.add(n.multiply(s,o),f),l=2;r.abs(n.norm(n.subtract(c,u)))>i;)u=c,c=n.add(n.multiply(s,u),f),l+=1;return c},SOR:function(t,e,o,i,a){for(var u,f,s,c,l,m=0,d=t.length,h=[],g=[],p=[];m<d;m++)for(h[m]=[],g[m]=[],p[m]=[],u=0;u<d;u++)m>u?(h[m][u]=t[m][u],g[m][u]=p[m][u]=0):m<u?(g[m][u]=t[m][u],h[m][u]=p[m][u]=0):(p[m][u]=t[m][u],h[m][u]=g[m][u]=0);for(c=n.multiply(n.inv(n.add(p,n.multiply(h,a))),n.subtract(n.multiply(p,1-a),n.multiply(g,a))),s=n.multiply(n.multiply(n.inv(n.add(p,n.multiply(h,a))),e),a),f=o,l=n.add(n.multiply(c,o),s),m=2;r.abs(n.norm(n.subtract(l,f)))>i;)f=l,l=n.add(n.multiply(c,f),s),m++;return l},householder:function(t){for(var e,o,i,a,u=t.length,f=t[0].length,s=0,c=[],l=[];s<u-1;s++){for(e=0,a=s+1;a<f;a++)e+=t[a][s]*t[a][s];for(e=(t[s+1][s]>0?-1:1)*r.sqrt(e),o=r.sqrt((e*e-t[s+1][s]*e)/2),(c=n.zeros(u,1))[s+1][0]=(t[s+1][s]-e)/(2*o),i=s+2;i<u;i++)c[i][0]=t[i][s]/(2*o);l=n.subtract(n.identity(u,f),n.multiply(n.multiply(c,n.transpose(c)),2)),t=n.multiply(l,n.multiply(t,l))}return t},QR:(t=n.sum,e=n.arange,function(o){var i,a,u,f=o.length,s=o[0].length,c=n.zeros(s,s);for(o=n.copy(o),a=0;a<s;a++){for(c[a][a]=r.sqrt(t(e(f).map((function(n){return o[n][a]*o[n][a]})))),i=0;i<f;i++)o[i][a]=o[i][a]/c[a][a];for(u=a+1;u<s;u++)for(c[a][u]=t(e(f).map((function(n){return o[n][a]*o[n][u]}))),i=0;i<f;i++)o[i][u]=o[i][u]-o[i][a]*c[a][u]}return[o,c]}),lstsq:function(r,t){var e=!1;void 0===t[0].length&&(t=t.map((function(n){return[n]})),e=!0);var o=n.QR(r),i=o[0],a=o[1],u=r[0].length,f=n.slice(i,{col:{end:u}}),s=function(r){var t=(r=n.copy(r)).length,e=n.identity(t);return n.arange(t-1,-1,-1).forEach((function(t){n.sliceAssign(e,{row:t},n.divide(n.slice(e,{row:t}),r[t][t])),n.sliceAssign(r,{row:t},n.divide(n.slice(r,{row:t}),r[t][t])),n.arange(t).forEach((function(o){var i=n.multiply(r[o][t],-1),a=n.slice(r,{row:o}),u=n.multiply(n.slice(r,{row:t}),i);n.sliceAssign(r,{row:o},n.add(a,u));var f=n.slice(e,{row:o}),s=n.multiply(n.slice(e,{row:t}),i);n.sliceAssign(e,{row:o},n.add(f,s))}))})),e}(n.slice(a,{row:{end:u}})),c=n.transpose(f);void 0===c[0].length&&(c=[c]);var l=n.multiply(n.multiply(s,c),t);return void 0===l.length&&(l=[[l]]),e?l.map((function(n){return n[0]})):l},jacobi:function(t){for(var e,o,i,a,u,f,s,c=1,l=t.length,m=n.identity(l,l),d=[];1===c;){for(u=t[0][1],i=0,a=1,e=0;e<l;e++)for(o=0;o<l;o++)e!=o&&u<r.abs(t[e][o])&&(u=r.abs(t[e][o]),i=e,a=o);for(f=t[i][i]===t[a][a]?t[i][a]>0?r.PI/4:-r.PI/4:r.atan(2*t[i][a]/(t[i][i]-t[a][a]))/2,(s=n.identity(l,l))[i][i]=r.cos(f),s[i][a]=-r.sin(f),s[a][i]=r.sin(f),s[a][a]=r.cos(f),m=n.multiply(m,s),t=n.multiply(n.multiply(n.inv(s),t),s),c=0,e=1;e<l;e++)for(o=1;o<l;o++)e!=o&&r.abs(t[e][o])>.001&&(c=1)}for(e=0;e<l;e++)d.push(t[e][e]);return[m,d]},rungekutta:function(n,r,t,e,o,i){var a,u,f;if(2===i)for(;e<=t;)o+=((a=r*n(e,o))+(u=r*n(e+r,o+a)))/2,e+=r;if(4===i)for(;e<=t;)o+=((a=r*n(e,o))+2*(u=r*n(e+r/2,o+a/2))+2*(f=r*n(e+r/2,o+u/2))+r*n(e+r,o+f))/6,e+=r;return o},romberg:function(n,t,e,o){for(var i,a,u,f,s,c=0,l=(e-t)/2,m=[],d=[],h=[];c<o/2;){for(s=n(t),u=t,f=0;u<=e;u+=l,f++)m[f]=u;for(i=m.length,u=1;u<i-1;u++)s+=(u%2!=0?4:2)*n(m[u]);s=l/3*(s+n(e)),h[c]=s,l/=2,c++}for(a=h.length,i=1;1!==a;){for(u=0;u<a-1;u++)d[u]=(r.pow(4,i)*h[u+1]-h[u])/(r.pow(4,i)-1);a=d.length,h=d,d=[],i++}return h},richardson:function(n,t,e,o){function i(n,r){for(var t,e=0,o=n.length;e<o;e++)n[e]===r&&(t=e);return t}for(var a,u,f,s,c,l=r.abs(e-n[i(n,e)+1]),m=0,d=[],h=[];o>=l;)a=i(n,e+o),u=i(n,e),d[m]=(t[a]-2*t[u]+t[2*u-a])/(o*o),o/=2,m++;for(s=d.length,f=1;1!=s;){for(c=0;c<s-1;c++)h[c]=(r.pow(4,f)*d[c+1]-d[c])/(r.pow(4,f)-1);s=h.length,d=h,h=[],f++}return d},simpson:function(n,r,t,e){for(var o,i=(t-r)/e,a=n(r),u=[],f=r,s=0,c=1;f<=t;f+=i,s++)u[s]=f;for(o=u.length;c<o-1;c++)a+=(c%2!=0?4:2)*n(u[c]);return i/3*(a+n(t))},hermite:function(n,r,t,e){for(var o,i=n.length,a=0,u=0,f=[],s=[],c=[],l=[];u<i;u++){for(f[u]=1,o=0;o<i;o++)u!=o&&(f[u]*=(e-n[o])/(n[u]-n[o]));for(s[u]=0,o=0;o<i;o++)u!=o&&(s[u]+=1/(n[u]-n[o]));c[u]=(1-2*(e-n[u])*s[u])*(f[u]*f[u]),l[u]=(e-n[u])*(f[u]*f[u]),a+=c[u]*r[u]+l[u]*t[u]}return a},lagrange:function(n,r,t){for(var e,o,i=0,a=0,u=n.length;a<u;a++){for(o=r[a],e=0;e<u;e++)a!=e&&(o*=(t-n[e])/(n[a]-n[e]));i+=o}return i},cubic_spline:function(r,t,e){for(var o,i,a=r.length,u=0,f=[],s=[],c=[],l=[],m=[],d=[];u<a-1;u++)l[u]=r[u+1]-r[u];for(c[0]=0,u=1;u<a-1;u++)c[u]=3/l[u]*(t[u+1]-t[u])-3/l[u-1]*(t[u]-t[u-1]);for(u=1;u<a-1;u++)f[u]=[],s[u]=[],f[u][u-1]=l[u-1],f[u][u]=2*(l[u-1]+l[u]),f[u][u+1]=l[u],s[u][0]=c[u];for(i=n.multiply(n.inv(f),s),o=0;o<a-1;o++)m[o]=(t[o+1]-t[o])/l[o]-l[o]*(i[o+1][0]+2*i[o][0])/3,d[o]=(i[o+1][0]-i[o][0])/(3*l[o]);for(o=0;o<a&&!(r[o]>e);o++);return t[o-=1]+(e-r[o])*m[o]+n.sq(e-r[o])*i[o]+(e-r[o])*n.sq(e-r[o])*d[o]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(r){var t,e,o,i,a,u=r.length,f=r[0].length,s=0,c=[],l=[],m=[],d=[],h=[],g=[],p=[];for(s=0;s<u;s++)c[s]=n.sum(r[s])/f;for(s=0;s<f;s++)for(h[s]=[],t=0;t<u;t++)h[s][t]=r[t][s]-c[t];for(h=n.transpose(h),s=0;s<u;s++)for(g[s]=[],t=0;t<u;t++)g[s][t]=n.dot([h[s]],[h[t]])/(f-1);for(a=(o=n.jacobi(g))[0],l=o[1],p=n.transpose(a),s=0;s<l.length;s++)for(t=s;t<l.length;t++)l[s]<l[t]&&(e=l[s],l[s]=l[t],l[t]=e,m=p[s],p[s]=p[t],p[t]=m);for(i=n.transpose(h),s=0;s<u;s++)for(d[s]=[],t=0;t<i.length;t++)d[s][t]=n.dot([p[s]],[i[t]]);return[r,l,p,d]}}),function(r){for(var t=0;t<r.length;t++)!function(r){n.fn[r]=function(t,e){var o=this;return e?(setTimeout((function(){e.call(o,n.fn[r].call(o,t))}),15),this):"number"==typeof n[r](this,t)?n[r](this,t):n(n[r](this,t))}}(r[t])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(e,Math),function(n,r){var t=[].slice,e=n.utils.isNumber,o=n.utils.isArray;function i(n,t,e,o){if(n>1||e>1||n<=0||e<=0)throw new Error("Proportions should be greater than 0 and less than 1");var i=(n*t+e*o)/(t+o);return(n-e)/r.sqrt(i*(1-i)*(1/t+1/o))}n.extend({zscore:function(){var r=t.call(arguments);return e(r[1])?(r[0]-r[1])/r[2]:(r[0]-n.mean(r[1]))/n.stdev(r[1],r[2])},ztest:function(){var e,i=t.call(arguments);return o(i[1])?(e=n.zscore(i[0],i[1],i[3]),1===i[2]?n.normal.cdf(-r.abs(e),0,1):2*n.normal.cdf(-r.abs(e),0,1)):i.length>2?(e=n.zscore(i[0],i[1],i[2]),1===i[3]?n.normal.cdf(-r.abs(e),0,1):2*n.normal.cdf(-r.abs(e),0,1)):(e=i[0],1===i[1]?n.normal.cdf(-r.abs(e),0,1):2*n.normal.cdf(-r.abs(e),0,1))}}),n.extend(n.fn,{zscore:function(n,r){return(n-this.mean())/this.stdev(r)},ztest:function(t,e,o){var i=r.abs(this.zscore(t,o));return 1===e?n.normal.cdf(-i,0,1):2*n.normal.cdf(-i,0,1)}}),n.extend({tscore:function(){var e=t.call(arguments);return 4===e.length?(e[0]-e[1])/(e[2]/r.sqrt(e[3])):(e[0]-n.mean(e[1]))/(n.stdev(e[1],!0)/r.sqrt(e[1].length))},ttest:function(){var o,i=t.call(arguments);return 5===i.length?(o=r.abs(n.tscore(i[0],i[1],i[2],i[3])),1===i[4]?n.studentt.cdf(-o,i[3]-1):2*n.studentt.cdf(-o,i[3]-1)):e(i[1])?(o=r.abs(i[0]),1==i[2]?n.studentt.cdf(-o,i[1]-1):2*n.studentt.cdf(-o,i[1]-1)):(o=r.abs(n.tscore(i[0],i[1])),1==i[2]?n.studentt.cdf(-o,i[1].length-1):2*n.studentt.cdf(-o,i[1].length-1))}}),n.extend(n.fn,{tscore:function(n){return(n-this.mean())/(this.stdev(!0)/r.sqrt(this.cols()))},ttest:function(t,e){return 1===e?1-n.studentt.cdf(r.abs(this.tscore(t)),this.cols()-1):2*n.studentt.cdf(-r.abs(this.tscore(t)),this.cols()-1)}}),n.extend({anovafscore:function(){var e,o,i,a,u,f,s,c,l=t.call(arguments);if(1===l.length){for(u=new Array(l[0].length),s=0;s<l[0].length;s++)u[s]=l[0][s];l=u}for(o=new Array,s=0;s<l.length;s++)o=o.concat(l[s]);for(i=n.mean(o),e=0,s=0;s<l.length;s++)e+=l[s].length*r.pow(n.mean(l[s])-i,2);for(e/=l.length-1,f=0,s=0;s<l.length;s++)for(a=n.mean(l[s]),c=0;c<l[s].length;c++)f+=r.pow(l[s][c]-a,2);return e/(f/=o.length-l.length)},anovaftest:function(){var r,o,i,a,u=t.call(arguments);if(e(u[0]))return 1-n.centralF.cdf(u[0],u[1],u[2]);var f=n.anovafscore(u);for(r=u.length-1,i=0,a=0;a<u.length;a++)i+=u[a].length;return o=i-r-1,1-n.centralF.cdf(f,r,o)},ftest:function(r,t,e){return 1-n.centralF.cdf(r,t,e)}}),n.extend(n.fn,{anovafscore:function(){return n.anovafscore(this.toArray())},anovaftes:function(){var r,t=0;for(r=0;r<this.length;r++)t+=this[r].length;return n.ftest(this.anovafscore(),this.length-1,t-this.length)}}),n.extend({qscore:function(){var o,i,a,u,f,s=t.call(arguments);return e(s[0])?(o=s[0],i=s[1],a=s[2],u=s[3],f=s[4]):(o=n.mean(s[0]),i=n.mean(s[1]),a=s[0].length,u=s[1].length,f=s[2]),r.abs(o-i)/(f*r.sqrt((1/a+1/u)/2))},qtest:function(){var r,e=t.call(arguments);3===e.length?(r=e[0],e=e.slice(1)):7===e.length?(r=n.qscore(e[0],e[1],e[2],e[3],e[4]),e=e.slice(5)):(r=n.qscore(e[0],e[1],e[2]),e=e.slice(3));var o=e[0],i=e[1];return 1-n.tukey.cdf(r,i,o-i)},tukeyhsd:function(r){for(var t=n.pooledstdev(r),e=r.map((function(r){return n.mean(r)})),o=r.reduce((function(n,r){return n+r.length}),0),i=[],a=0;a<r.length;++a)for(var u=a+1;u<r.length;++u){var f=n.qtest(e[a],e[u],r[a].length,r[u].length,t,o,r.length);i.push([[a,u],f])}return i}}),n.extend({normalci:function(){var e,o=t.call(arguments),i=new Array(2);return e=4===o.length?r.abs(n.normal.inv(o[1]/2,0,1)*o[2]/r.sqrt(o[3])):r.abs(n.normal.inv(o[1]/2,0,1)*n.stdev(o[2])/r.sqrt(o[2].length)),i[0]=o[0]-e,i[1]=o[0]+e,i},tci:function(){var e,o=t.call(arguments),i=new Array(2);return e=4===o.length?r.abs(n.studentt.inv(o[1]/2,o[3]-1)*o[2]/r.sqrt(o[3])):r.abs(n.studentt.inv(o[1]/2,o[2].length-1)*n.stdev(o[2],!0)/r.sqrt(o[2].length)),i[0]=o[0]-e,i[1]=o[0]+e,i},significant:function(n,r){return n<r}}),n.extend(n.fn,{normalci:function(r,t){return n.normalci(r,t,this.toArray())},tci:function(r,t){return n.tci(r,t,this.toArray())}}),n.extend(n.fn,{oneSidedDifferenceOfProportions:function(r,t,e,o){var a=i(r,t,e,o);return n.ztest(a,1)},twoSidedDifferenceOfProportions:function(r,t,e,o){var a=i(r,t,e,o);return n.ztest(a,2)}})}(e,Math),e.models=function(){function n(n,r){var t=n.length,o=r[0].length-1,i=t-o-1,a=e.lstsq(r,n),u=e.multiply(r,a.map((function(n){return[n]}))).map((function(n){return n[0]})),f=e.subtract(n,u),s=e.mean(n),c=e.sum(u.map((function(n){return Math.pow(n-s,2)}))),l=e.sum(n.map((function(n,r){return Math.pow(n-u[r],2)}))),m=c+l;return{exog:r,endog:n,nobs:t,df_model:o,df_resid:i,coef:a,predict:u,resid:f,ybar:s,SST:m,SSE:c,SSR:l,R2:c/m}}function r(r){var t,o,i=(t=r.exog,o=t[0].length,e.arange(o).map((function(r){var i=e.arange(o).filter((function(n){return n!==r}));return n(e.col(t,r).map((function(n){return n[0]})),e.col(t,i))}))),a=Math.sqrt(r.SSR/r.df_resid),u=i.map((function(n){var r=n.SST,t=n.R2;return a/Math.sqrt(r*(1-t))})),f=r.coef.map((function(n,r){return(n-0)/u[r]})),s=f.map((function(n){var t=e.studentt.cdf(n,r.df_resid);return 2*(t>.5?1-t:t)})),c=e.studentt.inv(.975,r.df_resid),l=r.coef.map((function(n,r){var t=c*u[r];return[n-t,n+t]}));return{se:u,t:f,p:s,sigmaHat:a,interval95:l}}return{ols:function(t,o){var i=n(t,o),a=r(i),u=function(n){var r,t,o,i=n.R2/n.df_model/((1-n.R2)/n.df_resid);return{F_statistic:i,pvalue:1-(r=i,t=n.df_model,o=n.df_resid,e.beta.cdf(r/(o/t+r),t/2,o/2))}}(i),f=1-(1-i.R2)*((i.nobs-1)/i.df_resid);return i.t=a,i.f=u,i.adjust_R2=f,i}}}(),e.extend({buildxmatrix:function(){for(var n=new Array(arguments.length),r=0;r<arguments.length;r++){var t=[1];n[r]=t.concat(arguments[r])}return e(n)},builddxmatrix:function(){for(var n=new Array(arguments[0].length),r=0;r<arguments[0].length;r++){var t=[1];n[r]=t.concat(arguments[0][r])}return e(n)},buildjxmatrix:function(n){for(var r=new Array(n.length),t=0;t<n.length;t++)r[t]=n[t];return e.builddxmatrix(r)},buildymatrix:function(n){return e(n).transpose()},buildjymatrix:function(n){return n.transpose()},matrixmult:function(n,r){var t,o,i,a,u;if(n.cols()==r.rows()){if(r.rows()>1){for(a=[],t=0;t<n.rows();t++)for(a[t]=[],o=0;o<r.cols();o++){for(u=0,i=0;i<n.cols();i++)u+=n.toArray()[t][i]*r.toArray()[i][o];a[t][o]=u}return e(a)}for(a=[],t=0;t<n.rows();t++)for(a[t]=[],o=0;o<r.cols();o++){for(u=0,i=0;i<n.cols();i++)u+=n.toArray()[t][i]*r.toArray()[o];a[t][o]=u}return e(a)}},regress:function(n,r){var t=e.xtranspxinv(n),o=n.transpose(),i=e.matrixmult(e(t),o);return e.matrixmult(i,r)},regresst:function(n,r,t){var o=e.regress(n,r),i={anova:{}},a=e.jMatYBar(n,o);i.yBar=a;var u=r.mean();i.anova.residuals=e.residuals(r,a),i.anova.ssr=e.ssr(a,u),i.anova.msr=i.anova.ssr/(n[0].length-1),i.anova.sse=e.sse(r,a),i.anova.mse=i.anova.sse/(r.length-(n[0].length-1)-1),i.anova.sst=e.sst(r,u),i.anova.mst=i.anova.sst/(r.length-1),i.anova.r2=1-i.anova.sse/i.anova.sst,i.anova.r2<0&&(i.anova.r2=0),i.anova.fratio=i.anova.msr/i.anova.mse,i.anova.pvalue=e.anovaftest(i.anova.fratio,n[0].length-1,r.length-(n[0].length-1)-1),i.anova.rmse=Math.sqrt(i.anova.mse),i.anova.r2adj=1-i.anova.mse/i.anova.mst,i.anova.r2adj<0&&(i.anova.r2adj=0),i.stats=new Array(n[0].length);for(var f,s,c,l=e.xtranspxinv(n),m=0;m<o.length;m++)f=Math.sqrt(i.anova.mse*Math.abs(l[m][m])),s=Math.abs(o[m]/f),c=e.ttest(s,r.length-n[0].length-1,t),i.stats[m]=[o[m],f,s,c];return i.regress=o,i},xtranspx:function(n){return e.matrixmult(n.transpose(),n)},xtranspxinv:function(n){var r=e.matrixmult(n.transpose(),n);return e.inv(r)},jMatYBar:function(n,r){var t=e.matrixmult(n,r);return new e(t)},residuals:function(n,r){return e.matrixsubtract(n,r)},ssr:function(n,r){for(var t=0,e=0;e<n.length;e++)t+=Math.pow(n[e]-r,2);return t},sse:function(n,r){for(var t=0,e=0;e<n.length;e++)t+=Math.pow(n[e]-r[e],2);return t},sst:function(n,r){for(var t=0,e=0;e<n.length;e++)t+=Math.pow(n[e]-r,2);return t},matrixsubtract:function(n,r){for(var t=new Array(n.length),o=0;o<n.length;o++){t[o]=new Array(n[o].length);for(var i=0;i<n[o].length;i++)t[o][i]=n[o][i]-r[o][i]}return e(t)}}),e.jStat=e,e)},function(n,r){n.exports={euclidean:function(n,r){for(var t=0,e=0;e<n.length;e++)t+=Math.pow(r[e]-n[e],2);return Math.sqrt(t)},manhattan:function(n,r){for(var t=0,e=0;e<n.length;e++)t+=Math.abs(r[e]-n[e]);return t},max:function(n,r){for(var t=0,e=0;e<n.length;e++)t=Math.max(t,Math.abs(r[e]-n[e]));return t}}},function(n,r,t){var e=t(2);function o(n){this.centroids=n||[]}o.prototype.randomCentroids=function(n,r){var t=n.slice(0);return t.sort((function(){return Math.round(Math.random())-.5})),t.slice(0,r)},o.prototype.classify=function(n,r){var t=1/0,o=0;"string"==typeof(r=r||"euclidean")&&(r=e[r]);for(var i=0;i<this.centroids.length;i++){var a=r(n,this.centroids[i]);a<t&&(t=a,o=i)}return o},o.prototype.cluster=function(n,r,t,o,i){r=r||Math.max(2,Math.ceil(Math.sqrt(n.length/2))),"string"==typeof(t=t||"euclidean")&&(t=e[t]),this.centroids=this.randomCentroids(n,r);for(var a=new Array(n.length),u=new Array(r),f=0,s=!0;s;){for(var c=0;c<n.length;c++)a[c]=this.classify(n[c],t);s=!1;for(var l=0;l<r;l++){var m=[];for(c=0;c<a.length;c++)a[c]==l&&m.push(n[c]);if(m.length){for(var d=this.centroids[l],h=new Array(d.length),g=0;g<d.length;g++){var p=0;for(c=0;c<m.length;c++)p+=m[c][g];h[g]=p/m.length,h[g]!=d[g]&&(s=!0)}this.centroids[l]=h,u[l]=m}}i&&f++%o==0&&i(u)}return u},o.prototype.toJSON=function(){return JSON.stringify(this.centroids)},o.prototype.fromJSON=function(n){return this.centroids=JSON.parse(n),this},n.exports=o,n.exports.kmeans=function(n,r){return(new o).cluster(n,r)}},function(n,r,t){"use strict";t.r(r);var e=t(0),o=t.n(e),i=t(1),a=t.n(i),u=self;function f(n){for(var r=0;r<n.length;r++){var t=n[r];if(!isNaN(t)&&null!=t&&0!=t)return!1}return!0}function s(n,r){if(n.isAllNaNs&&r.isAllNaNs)return 0;if(n.isAllNaNs||r.isAllNaNs)return 3;var t=n.preProcessedValueList,e=r.preProcessedValueList,o=a.a.corrcoeff(t,e);return isNaN(o)&&(console.log("NaN in correlation calculation"),o=-2),1-o}function c(n){for(var r=[],t=[],e=0;e<n.length;e++){var o=n[e];if(o.isAllNaNs=f(o.orderedValueList),o.isAllNaNs)r.push(o);else{t.push(o);var i=a.a.rank(o.orderedValueList);o.preProcessedValueList=i}}return{notAllNaN:t,allNaN:r}}function l(n){var r=[];for(var t in n)n.hasOwnProperty(t)&&r.push(t);return r}u.onmessage=function(n){console.log("Clustering worker received message");var r=null;if("CASES"===n.data.dimension)r=function(n){var r=null,t=[];for(var e in n)if(n.hasOwnProperty(e)){var i=n[e],a=new Object;a.caseId=e,a.orderedValueList=[],null==r&&(r=l(i));for(var u=0;u<r.length;u++){var f=r[u],m=i[f];a.orderedValueList.push(m)}t.push(a)}if(1==r.length)return t.sort((function(n,r){var t=n.orderedValueList[0],e=r.orderedValueList[0];return(t=null==t||isNaN(t)?Number.MAX_VALUE:t)>(e=null==e||isNaN(e)?Number.MAX_VALUE:e)?1:t<e?-1:0})),t;var d=c(t);return o.a.hcluster(d.notAllNaN,s).clusters(1)[0].concat(d.allNaN)}(n.data.casesAndEntities);else{if("ENTITIES"!==n.data.dimension)throw new Error("Illegal argument given to clustering-worker.js for m.data.dimension: "+n.data.dimension);r=function(n){var r=null,t=[],e=[];for(var i in n)if(n.hasOwnProperty(i)){var a=n[i];null==r&&(r=l(a)),e.push(i)}for(var u=0;u<r.length;u++){var f=r[u],m=new Object;m.entityId=f,m.orderedValueList=[];for(var d=0;d<e.length;d++){i=e[d];var h=(a=n[i])[f];m.orderedValueList.push(h)}t.push(m)}var g=c(t);return o.a.hcluster(g.notAllNaN,s).clusters(1)[0].concat(g.allNaN)}(n.data.casesAndEntities)}console.log("Posting clustering result back to main script"),u.postMessage(r)},r.default=null},function(n,r,t){var e=t(2),o=function(n,r,t){this.distance=n,this.linkage=r,this.threshold=null==t?1/0:t};o.prototype={tree:function(n,r,t){this.tree=[],this.dists=[],this.mins=[],this.index=[];for(var e=0;e<n.length;e++){var o={value:n[e],key:e,index:e,size:1};this.tree[e]=o,this.index[e]=o,this.dists[e]=[],this.mins[e]=0}for(e=0;e<this.tree.length;e++)for(var i=0;i<=e;i++){var a=e==i?1/0:this.distance(this.tree[e].value,this.tree[i].value);this.dists[e][i]=a,this.dists[i][e]=a,a<this.dists[e][this.mins[e]]&&(this.mins[e]=i)}var u=this.mergeClosest();for(e=0;u;)t&&e++%r==0&&t(this.tree),u=this.mergeClosest();return this.tree.forEach((function(n){delete n.key,delete n.index})),this.tree},mergeClosest:function(){for(var n=0,r=1/0,t=0;t<this.tree.length;t++){var e=this.tree[t].key;(u=this.dists[e][this.mins[e]])<r&&(n=e,r=u)}if(r>=this.threshold)return!1;var o=this.index[n],i=this.index[this.mins[n]],a={dist:r,left:o,right:i,key:o.key,size:o.size+i.size};this.tree[o.index]=a,this.tree.splice(i.index,1),this.index[o.key]=a;for(t=0;t<this.tree.length;t++){var u,f=this.tree[t];o.key==f.key?u=1/0:"single"==this.linkage?(u=this.dists[o.key][f.key],this.dists[o.key][f.key]>this.dists[i.key][f.key]&&(u=this.dists[i.key][f.key])):"complete"==this.linkage?(u=this.dists[o.key][f.key],this.dists[o.key][f.key]<this.dists[i.key][f.key]&&(u=this.dists[i.key][f.key])):u="average"==this.linkage?(this.dists[o.key][f.key]*o.size+this.dists[i.key][f.key]*i.size)/(o.size+i.size):this.distance(f.value,o.value),this.dists[o.key][f.key]=this.dists[f.key][o.key]=u}for(t=0;t<this.tree.length;t++){var s=this.tree[t].key;if(this.mins[s]==o.key||this.mins[s]==i.key){r=s;for(var c=0;c<this.tree.length;c++){var l=this.tree[c].key;this.dists[s][l]<this.dists[s][r]&&(r=l)}this.mins[s]=r}this.tree[t].index=t}return delete o.key,delete i.key,delete o.index,delete i.index,!0},clusters:function(n){(n>this.tree.size||n<1)&&(n=this.tree.size);for(var r=[],t=[this.tree];n>1;){var e=o(t);t.splice(t.indexOf(e),1),t.push(e.left,e.right),n--}function o(n){var r,t=-1;return n.forEach((function(n){n.dist>t&&(t=n.dist,r=n)})),r}return t.forEach((function(n){r.push(function n(r){return 1===r.size?[r.value]:n(r.left).concat(n(r.right))}(n))})),r}};n.exports=function(n,r,t,i,a,u){t=t||"average","string"==typeof(r=r||"euclidean")&&(r=e[r]);var f=new o(r,t,i),s=f.tree(n,a,u);return{tree:void 0===i?s[0]:s,clusters:f.clusters}}}]);', null)
    }
}, function (t, e) {
    t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxsaW5lIGZpbGw9Im5vbmUiIHgxPSI2Ljc5MiIgeTE9IjUuNjY3IiB4Mj0iNi43OTIiIHkyPSIxMi4xMjUiLz4NCjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMCw1IDAsMCA1LDAgIi8+DQo8cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjE0Ljk5OSwwIDIwLDAgMjAsNSAiLz4NCjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMjAsMTUgMjAsMjAgMTUsMjAgIi8+DQo8cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjUsMjAgMCwyMCAwLDE1ICIvPg0KPHJlY3QgeD0iMy43NSIgeT0iNC43MDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHdpZHRoPSIxMi41IiBoZWlnaHQ9IjEwLjU4MyIvPg0KPC9zdmc+DQo="
}, function (t, e, n) {
    "use strict";
    var r = window.URL || window.webkitURL;
    t.exports = function (t, e) {
        try {
            try {
                var n;
                try {
                    (n = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)).append(t), n = n.getBlob()
                } catch (e) {
                    n = new Blob([t])
                }
                return new Worker(r.createObjectURL(n))
            } catch (e) {
                return new Worker("data:application/javascript," + encodeURIComponent(t))
            }
        } catch (t) {
            if (!e) throw Error("Inline worker is not supported");
            return new Worker(e)
        }
    }
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0, get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e, n) {
    var r = n(2), i = {
        create: function () {
            var t = new r.ARRAY_TYPE(4);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
        }, clone: function (t) {
            var e = new r.ARRAY_TYPE(4);
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
        }, copy: function (t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
        }, identity: function (t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
        }, fromValues: function (t, e, n, i) {
            var o = new r.ARRAY_TYPE(4);
            return o[0] = t, o[1] = e, o[2] = n, o[3] = i, o
        }, set: function (t, e, n, r, i) {
            return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t
        }, transpose: function (t, e) {
            if (t === e) {
                var n = e[1];
                t[1] = e[2], t[2] = n
            } else t[0] = e[0], t[1] = e[2], t[2] = e[1], t[3] = e[3];
            return t
        }, invert: function (t, e) {
            var n = e[0], r = e[1], i = e[2], o = e[3], a = n * o - i * r;
            return a ? (a = 1 / a, t[0] = o * a, t[1] = -r * a, t[2] = -i * a, t[3] = n * a, t) : null
        }, adjoint: function (t, e) {
            var n = e[0];
            return t[0] = e[3], t[1] = -e[1], t[2] = -e[2], t[3] = n, t
        }, determinant: function (t) {
            return t[0] * t[3] - t[2] * t[1]
        }, multiply: function (t, e, n) {
            var r = e[0], i = e[1], o = e[2], a = e[3], s = n[0], l = n[1], u = n[2], c = n[3];
            return t[0] = r * s + o * l, t[1] = i * s + a * l, t[2] = r * u + o * c, t[3] = i * u + a * c, t
        }
    };
    i.mul = i.multiply, i.rotate = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3], s = Math.sin(n), l = Math.cos(n);
        return t[0] = r * l + o * s, t[1] = i * l + a * s, t[2] = r * -s + o * l, t[3] = i * -s + a * l, t
    }, i.scale = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3], s = n[0], l = n[1];
        return t[0] = r * s, t[1] = i * s, t[2] = o * l, t[3] = a * l, t
    }, i.fromRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t
    }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t
    }, i.str = function (t) {
        return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }, i.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
    }, i.LDU = function (t, e, n, r) {
        return t[2] = r[2] / r[0], n[0] = r[0], n[1] = r[1], n[3] = r[3] - t[2] * n[1], [t, e, n]
    }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t
    }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t
    }, i.sub = i.subtract, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
    }, i.equals = function (t, e) {
        var n = t[0], i = t[1], o = t[2], a = t[3], s = e[0], l = e[1], u = e[2], c = e[3];
        return Math.abs(n - s) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(i - l) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(o - u) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(u)) && Math.abs(a - c) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(c))
    }, i.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t
    }, i.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t
    }, t.exports = i
}, function (t, e, n) {
    var r = n(2), i = {
        create: function () {
            var t = new r.ARRAY_TYPE(6);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
        }, clone: function (t) {
            var e = new r.ARRAY_TYPE(6);
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
        }, copy: function (t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
        }, identity: function (t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
        }, fromValues: function (t, e, n, i, o, a) {
            var s = new r.ARRAY_TYPE(6);
            return s[0] = t, s[1] = e, s[2] = n, s[3] = i, s[4] = o, s[5] = a, s
        }, set: function (t, e, n, r, i, o, a) {
            return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t
        }, invert: function (t, e) {
            var n = e[0], r = e[1], i = e[2], o = e[3], a = e[4], s = e[5], l = n * o - r * i;
            return l ? (l = 1 / l, t[0] = o * l, t[1] = -r * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * a) * l, t[5] = (r * a - n * s) * l, t) : null
        }, determinant: function (t) {
            return t[0] * t[3] - t[1] * t[2]
        }, multiply: function (t, e, n) {
            var r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], l = e[5], u = n[0], c = n[1], h = n[2], f = n[3],
                d = n[4], p = n[5];
            return t[0] = r * u + o * c, t[1] = i * u + a * c, t[2] = r * h + o * f, t[3] = i * h + a * f, t[4] = r * d + o * p + s, t[5] = i * d + a * p + l, t
        }
    };
    i.mul = i.multiply, i.rotate = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], l = e[5], u = Math.sin(n), c = Math.cos(n);
        return t[0] = r * c + o * u, t[1] = i * c + a * u, t[2] = r * -u + o * c, t[3] = i * -u + a * c, t[4] = s, t[5] = l, t
    }, i.scale = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], l = e[5], u = n[0], c = n[1];
        return t[0] = r * u, t[1] = i * u, t[2] = o * c, t[3] = a * c, t[4] = s, t[5] = l, t
    }, i.translate = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], l = e[5], u = n[0], c = n[1];
        return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = r * u + o * c + s, t[5] = i * u + a * c + l, t
    }, i.fromRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t[4] = 0, t[5] = 0, t
    }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t[4] = 0, t[5] = 0, t
    }, i.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = e[0], t[5] = e[1], t
    }, i.str = function (t) {
        return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
    }, i.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
    }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t
    }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t
    }, i.sub = i.subtract, i.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t
    }, i.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t
    }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
    }, i.equals = function (t, e) {
        var n = t[0], i = t[1], o = t[2], a = t[3], s = t[4], l = t[5], u = e[0], c = e[1], h = e[2], f = e[3],
            d = e[4], p = e[5];
        return Math.abs(n - u) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(i - c) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(c)) && Math.abs(o - h) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(a - f) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(f)) && Math.abs(s - d) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(d)) && Math.abs(l - p) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(p))
    }, t.exports = i
}, function (t, e, n) {
    var r = n(2), i = {
        scalar: {}, SIMD: {}, create: function () {
            var t = new r.ARRAY_TYPE(16);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }, clone: function (t) {
            var e = new r.ARRAY_TYPE(16);
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
        }, copy: function (t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
        }, fromValues: function (t, e, n, i, o, a, s, l, u, c, h, f, d, p, g, _) {
            var m = new r.ARRAY_TYPE(16);
            return m[0] = t, m[1] = e, m[2] = n, m[3] = i, m[4] = o, m[5] = a, m[6] = s, m[7] = l, m[8] = u, m[9] = c, m[10] = h, m[11] = f, m[12] = d, m[13] = p, m[14] = g, m[15] = _, m
        }, set: function (t, e, n, r, i, o, a, s, l, u, c, h, f, d, p, g, _) {
            return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = s, t[7] = l, t[8] = u, t[9] = c, t[10] = h, t[11] = f, t[12] = d, t[13] = p, t[14] = g, t[15] = _, t
        }, identity: function (t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }
    };
    i.scalar.transpose = function (t, e) {
        if (t === e) {
            var n = e[1], r = e[2], i = e[3], o = e[6], a = e[7], s = e[11];
            t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = n, t[6] = e[9], t[7] = e[13], t[8] = r, t[9] = o, t[11] = e[14], t[12] = i, t[13] = a, t[14] = s
        } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
        return t
    }, i.SIMD.transpose = function (t, e) {
        var n, r, i, o, a, s, l, u, c, h;
        return n = SIMD.Float32x4.load(e, 0), r = SIMD.Float32x4.load(e, 4), i = SIMD.Float32x4.load(e, 8), o = SIMD.Float32x4.load(e, 12), a = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), s = SIMD.Float32x4.shuffle(i, o, 0, 1, 4, 5), l = SIMD.Float32x4.shuffle(a, s, 0, 2, 4, 6), u = SIMD.Float32x4.shuffle(a, s, 1, 3, 5, 7), SIMD.Float32x4.store(t, 0, l), SIMD.Float32x4.store(t, 4, u), a = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(i, o, 2, 3, 6, 7), c = SIMD.Float32x4.shuffle(a, s, 0, 2, 4, 6), h = SIMD.Float32x4.shuffle(a, s, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, c), SIMD.Float32x4.store(t, 12, h), t
    }, i.transpose = r.USE_SIMD ? i.SIMD.transpose : i.scalar.transpose, i.scalar.invert = function (t, e) {
        var n = e[0], r = e[1], i = e[2], o = e[3], a = e[4], s = e[5], l = e[6], u = e[7], c = e[8], h = e[9],
            f = e[10], d = e[11], p = e[12], g = e[13], _ = e[14], m = e[15], v = n * s - r * a, y = n * l - i * a,
            b = n * u - o * a, x = r * l - i * s, w = r * u - o * s, k = i * u - o * l, S = c * g - h * p,
            M = c * _ - f * p, T = c * m - d * p, I = h * _ - f * g, C = h * m - d * g, A = f * m - d * _,
            D = v * A - y * C + b * I + x * T - w * M + k * S;
        return D ? (D = 1 / D, t[0] = (s * A - l * C + u * I) * D, t[1] = (i * C - r * A - o * I) * D, t[2] = (g * k - _ * w + m * x) * D, t[3] = (f * w - h * k - d * x) * D, t[4] = (l * T - a * A - u * M) * D, t[5] = (n * A - i * T + o * M) * D, t[6] = (_ * b - p * k - m * y) * D, t[7] = (c * k - f * b + d * y) * D, t[8] = (a * C - s * T + u * S) * D, t[9] = (r * T - n * C - o * S) * D, t[10] = (p * w - g * b + m * v) * D, t[11] = (h * b - c * w - d * v) * D, t[12] = (s * M - a * I - l * S) * D, t[13] = (n * I - r * M + i * S) * D, t[14] = (g * y - p * x - _ * v) * D, t[15] = (c * x - h * y + f * v) * D, t) : null
    }, i.SIMD.invert = function (t, e) {
        var n, r, i, o, a, s, l, u, c, h, f = SIMD.Float32x4.load(e, 0), d = SIMD.Float32x4.load(e, 4),
            p = SIMD.Float32x4.load(e, 8), g = SIMD.Float32x4.load(e, 12);
        return a = SIMD.Float32x4.shuffle(f, d, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(p, g, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(a, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, a, 1, 3, 5, 7), a = SIMD.Float32x4.shuffle(f, d, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(p, g, 2, 3, 6, 7), i = SIMD.Float32x4.shuffle(a, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, a, 1, 3, 5, 7), a = SIMD.Float32x4.mul(i, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.mul(r, a), l = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, a), s), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), a = SIMD.Float32x4.mul(r, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), s), c = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, a)), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), a = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), s), u = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(i, a)), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), a = SIMD.Float32x4.mul(n, r), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), u), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, a), c), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, a), u), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(i, a)), a = SIMD.Float32x4.mul(n, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(i, a)), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), u), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), l), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.mul(n, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), l), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(o, a)), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), c), h = SIMD.Float32x4.mul(n, s), h = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), h), h = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(h, 1, 0, 3, 2), h), a = SIMD.Float32x4.reciprocalApproximation(h), h = SIMD.Float32x4.sub(SIMD.Float32x4.add(a, a), SIMD.Float32x4.mul(h, SIMD.Float32x4.mul(a, a))), (h = SIMD.Float32x4.swizzle(h, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(h, s)), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(h, l)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(h, u)), SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(h, c)), t) : null
    }, i.invert = r.USE_SIMD ? i.SIMD.invert : i.scalar.invert, i.scalar.adjoint = function (t, e) {
        var n = e[0], r = e[1], i = e[2], o = e[3], a = e[4], s = e[5], l = e[6], u = e[7], c = e[8], h = e[9],
            f = e[10], d = e[11], p = e[12], g = e[13], _ = e[14], m = e[15];
        return t[0] = s * (f * m - d * _) - h * (l * m - u * _) + g * (l * d - u * f), t[1] = -(r * (f * m - d * _) - h * (i * m - o * _) + g * (i * d - o * f)), t[2] = r * (l * m - u * _) - s * (i * m - o * _) + g * (i * u - o * l), t[3] = -(r * (l * d - u * f) - s * (i * d - o * f) + h * (i * u - o * l)), t[4] = -(a * (f * m - d * _) - c * (l * m - u * _) + p * (l * d - u * f)), t[5] = n * (f * m - d * _) - c * (i * m - o * _) + p * (i * d - o * f), t[6] = -(n * (l * m - u * _) - a * (i * m - o * _) + p * (i * u - o * l)), t[7] = n * (l * d - u * f) - a * (i * d - o * f) + c * (i * u - o * l), t[8] = a * (h * m - d * g) - c * (s * m - u * g) + p * (s * d - u * h), t[9] = -(n * (h * m - d * g) - c * (r * m - o * g) + p * (r * d - o * h)), t[10] = n * (s * m - u * g) - a * (r * m - o * g) + p * (r * u - o * s), t[11] = -(n * (s * d - u * h) - a * (r * d - o * h) + c * (r * u - o * s)), t[12] = -(a * (h * _ - f * g) - c * (s * _ - l * g) + p * (s * f - l * h)), t[13] = n * (h * _ - f * g) - c * (r * _ - i * g) + p * (r * f - i * h), t[14] = -(n * (s * _ - l * g) - a * (r * _ - i * g) + p * (r * l - i * s)), t[15] = n * (s * f - l * h) - a * (r * f - i * h) + c * (r * l - i * s), t
    }, i.SIMD.adjoint = function (t, e) {
        var n, r, i, o, a, s, l, u, c, h = SIMD.Float32x4.load(e, 0), f = SIMD.Float32x4.load(e, 4),
            d = SIMD.Float32x4.load(e, 8), p = SIMD.Float32x4.load(e, 12);
        return a = SIMD.Float32x4.shuffle(h, f, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(d, p, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(a, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, a, 1, 3, 5, 7), a = SIMD.Float32x4.shuffle(h, f, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(d, p, 2, 3, 6, 7), i = SIMD.Float32x4.shuffle(a, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, a, 1, 3, 5, 7), a = SIMD.Float32x4.mul(i, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.mul(r, a), l = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, a), s), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), a = SIMD.Float32x4.mul(r, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), s), c = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, a)), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), a = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), s), u = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(i, a)), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), a = SIMD.Float32x4.mul(n, r), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), u), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, a), c), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, a), u), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(i, a)), a = SIMD.Float32x4.mul(n, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(i, a)), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), u), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), l), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.mul(n, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), l), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(o, a)), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), c), SIMD.Float32x4.store(t, 0, s), SIMD.Float32x4.store(t, 4, l), SIMD.Float32x4.store(t, 8, u), SIMD.Float32x4.store(t, 12, c), t
    }, i.adjoint = r.USE_SIMD ? i.SIMD.adjoint : i.scalar.adjoint, i.determinant = function (t) {
        var e = t[0], n = t[1], r = t[2], i = t[3], o = t[4], a = t[5], s = t[6], l = t[7], u = t[8], c = t[9],
            h = t[10], f = t[11], d = t[12], p = t[13], g = t[14], _ = t[15];
        return (e * a - n * o) * (h * _ - f * g) - (e * s - r * o) * (c * _ - f * p) + (e * l - i * o) * (c * g - h * p) + (n * s - r * a) * (u * _ - f * d) - (n * l - i * a) * (u * g - h * d) + (r * l - i * s) * (u * p - c * d)
    }, i.SIMD.multiply = function (t, e, n) {
        var r = SIMD.Float32x4.load(e, 0), i = SIMD.Float32x4.load(e, 4), o = SIMD.Float32x4.load(e, 8),
            a = SIMD.Float32x4.load(e, 12), s = SIMD.Float32x4.load(n, 0),
            l = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 3, 3, 3, 3), a))));
        SIMD.Float32x4.store(t, 0, l);
        var u = SIMD.Float32x4.load(n, 4),
            c = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 3, 3, 3, 3), a))));
        SIMD.Float32x4.store(t, 4, c);
        var h = SIMD.Float32x4.load(n, 8),
            f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), a))));
        SIMD.Float32x4.store(t, 8, f);
        var d = SIMD.Float32x4.load(n, 12),
            p = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), a))));
        return SIMD.Float32x4.store(t, 12, p), t
    }, i.scalar.multiply = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], l = e[5], u = e[6], c = e[7], h = e[8], f = e[9],
            d = e[10], p = e[11], g = e[12], _ = e[13], m = e[14], v = e[15], y = n[0], b = n[1], x = n[2], w = n[3];
        return t[0] = y * r + b * s + x * h + w * g, t[1] = y * i + b * l + x * f + w * _, t[2] = y * o + b * u + x * d + w * m, t[3] = y * a + b * c + x * p + w * v, y = n[4], b = n[5], x = n[6], w = n[7], t[4] = y * r + b * s + x * h + w * g, t[5] = y * i + b * l + x * f + w * _, t[6] = y * o + b * u + x * d + w * m, t[7] = y * a + b * c + x * p + w * v, y = n[8], b = n[9], x = n[10], w = n[11], t[8] = y * r + b * s + x * h + w * g, t[9] = y * i + b * l + x * f + w * _, t[10] = y * o + b * u + x * d + w * m, t[11] = y * a + b * c + x * p + w * v, y = n[12], b = n[13], x = n[14], w = n[15], t[12] = y * r + b * s + x * h + w * g, t[13] = y * i + b * l + x * f + w * _, t[14] = y * o + b * u + x * d + w * m, t[15] = y * a + b * c + x * p + w * v, t
    }, i.multiply = r.USE_SIMD ? i.SIMD.multiply : i.scalar.multiply, i.mul = i.multiply, i.scalar.translate = function (t, e, n) {
        var r, i, o, a, s, l, u, c, h, f, d, p, g = n[0], _ = n[1], m = n[2];
        return e === t ? (t[12] = e[0] * g + e[4] * _ + e[8] * m + e[12], t[13] = e[1] * g + e[5] * _ + e[9] * m + e[13], t[14] = e[2] * g + e[6] * _ + e[10] * m + e[14], t[15] = e[3] * g + e[7] * _ + e[11] * m + e[15]) : (r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], l = e[5], u = e[6], c = e[7], h = e[8], f = e[9], d = e[10], p = e[11], t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t[6] = u, t[7] = c, t[8] = h, t[9] = f, t[10] = d, t[11] = p, t[12] = r * g + s * _ + h * m + e[12], t[13] = i * g + l * _ + f * m + e[13], t[14] = o * g + u * _ + d * m + e[14], t[15] = a * g + c * _ + p * m + e[15]), t
    }, i.SIMD.translate = function (t, e, n) {
        var r = SIMD.Float32x4.load(e, 0), i = SIMD.Float32x4.load(e, 4), o = SIMD.Float32x4.load(e, 8),
            a = SIMD.Float32x4.load(e, 12), s = SIMD.Float32x4(n[0], n[1], n[2], 0);
        e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11]), r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(s, 0, 0, 0, 0)), i = SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(s, 1, 1, 1, 1)), o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(s, 2, 2, 2, 2));
        var l = SIMD.Float32x4.add(r, SIMD.Float32x4.add(i, SIMD.Float32x4.add(o, a)));
        return SIMD.Float32x4.store(t, 12, l), t
    }, i.translate = r.USE_SIMD ? i.SIMD.translate : i.scalar.translate, i.scalar.scale = function (t, e, n) {
        var r = n[0], i = n[1], o = n[2];
        return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * o, t[9] = e[9] * o, t[10] = e[10] * o, t[11] = e[11] * o, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }, i.SIMD.scale = function (t, e, n) {
        var r, i, o, a = SIMD.Float32x4(n[0], n[1], n[2], 0);
        return r = SIMD.Float32x4.load(e, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(a, 0, 0, 0, 0))), i = SIMD.Float32x4.load(e, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(a, 1, 1, 1, 1))), o = SIMD.Float32x4.load(e, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(a, 2, 2, 2, 2))), t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }, i.scale = r.USE_SIMD ? i.SIMD.scale : i.scalar.scale, i.rotate = function (t, e, n, i) {
        var o, a, s, l, u, c, h, f, d, p, g, _, m, v, y, b, x, w, k, S, M, T, I, C, A = i[0], D = i[1], z = i[2],
            O = Math.sqrt(A * A + D * D + z * z);
        return Math.abs(O) < r.EPSILON ? null : (A *= O = 1 / O, D *= O, z *= O, o = Math.sin(n), s = 1 - (a = Math.cos(n)), l = e[0], u = e[1], c = e[2], h = e[3], f = e[4], d = e[5], p = e[6], g = e[7], _ = e[8], m = e[9], v = e[10], y = e[11], b = A * A * s + a, x = D * A * s + z * o, w = z * A * s - D * o, k = A * D * s - z * o, S = D * D * s + a, M = z * D * s + A * o, T = A * z * s + D * o, I = D * z * s - A * o, C = z * z * s + a, t[0] = l * b + f * x + _ * w, t[1] = u * b + d * x + m * w, t[2] = c * b + p * x + v * w, t[3] = h * b + g * x + y * w, t[4] = l * k + f * S + _ * M, t[5] = u * k + d * S + m * M, t[6] = c * k + p * S + v * M, t[7] = h * k + g * S + y * M, t[8] = l * T + f * I + _ * C, t[9] = u * T + d * I + m * C, t[10] = c * T + p * I + v * C, t[11] = h * T + g * I + y * C, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
    }, i.scalar.rotateX = function (t, e, n) {
        var r = Math.sin(n), i = Math.cos(n), o = e[4], a = e[5], s = e[6], l = e[7], u = e[8], c = e[9], h = e[10],
            f = e[11];
        return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = o * i + u * r, t[5] = a * i + c * r, t[6] = s * i + h * r, t[7] = l * i + f * r, t[8] = u * i - o * r, t[9] = c * i - a * r, t[10] = h * i - s * r, t[11] = f * i - l * r, t
    }, i.SIMD.rotateX = function (t, e, n) {
        var r = SIMD.Float32x4.splat(Math.sin(n)), i = SIMD.Float32x4.splat(Math.cos(n));
        e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        var o = SIMD.Float32x4.load(e, 4), a = SIMD.Float32x4.load(e, 8);
        return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, i), SIMD.Float32x4.mul(o, r))), t
    }, i.rotateX = r.USE_SIMD ? i.SIMD.rotateX : i.scalar.rotateX, i.scalar.rotateY = function (t, e, n) {
        var r = Math.sin(n), i = Math.cos(n), o = e[0], a = e[1], s = e[2], l = e[3], u = e[8], c = e[9], h = e[10],
            f = e[11];
        return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * i - u * r, t[1] = a * i - c * r, t[2] = s * i - h * r, t[3] = l * i - f * r, t[8] = o * r + u * i, t[9] = a * r + c * i, t[10] = s * r + h * i, t[11] = l * r + f * i, t
    }, i.SIMD.rotateY = function (t, e, n) {
        var r = SIMD.Float32x4.splat(Math.sin(n)), i = SIMD.Float32x4.splat(Math.cos(n));
        e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        var o = SIMD.Float32x4.load(e, 0), a = SIMD.Float32x4.load(e, 8);
        return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(a, i))), t
    }, i.rotateY = r.USE_SIMD ? i.SIMD.rotateY : i.scalar.rotateY, i.scalar.rotateZ = function (t, e, n) {
        var r = Math.sin(n), i = Math.cos(n), o = e[0], a = e[1], s = e[2], l = e[3], u = e[4], c = e[5], h = e[6],
            f = e[7];
        return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * i + u * r, t[1] = a * i + c * r, t[2] = s * i + h * r, t[3] = l * i + f * r, t[4] = u * i - o * r, t[5] = c * i - a * r, t[6] = h * i - s * r, t[7] = f * i - l * r, t
    }, i.SIMD.rotateZ = function (t, e, n) {
        var r = SIMD.Float32x4.splat(Math.sin(n)), i = SIMD.Float32x4.splat(Math.cos(n));
        e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        var o = SIMD.Float32x4.load(e, 0), a = SIMD.Float32x4.load(e, 4);
        return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, i), SIMD.Float32x4.mul(o, r))), t
    }, i.rotateZ = r.USE_SIMD ? i.SIMD.rotateZ : i.scalar.rotateZ, i.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t
    }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, i.fromRotation = function (t, e, n) {
        var i, o, a, s = n[0], l = n[1], u = n[2], c = Math.sqrt(s * s + l * l + u * u);
        return Math.abs(c) < r.EPSILON ? null : (s *= c = 1 / c, l *= c, u *= c, i = Math.sin(e), a = 1 - (o = Math.cos(e)), t[0] = s * s * a + o, t[1] = l * s * a + u * i, t[2] = u * s * a - l * i, t[3] = 0, t[4] = s * l * a - u * i, t[5] = l * l * a + o, t[6] = u * l * a + s * i, t[7] = 0, t[8] = s * u * a + l * i, t[9] = l * u * a - s * i, t[10] = u * u * a + o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
    }, i.fromXRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = n, t[7] = 0, t[8] = 0, t[9] = -n, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, i.fromYRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = r, t[1] = 0, t[2] = -n, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = n, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, i.fromZRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = 0, t[3] = 0, t[4] = -n, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, i.fromRotationTranslation = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3], s = r + r, l = i + i, u = o + o, c = r * s, h = r * l, f = r * u,
            d = i * l, p = i * u, g = o * u, _ = a * s, m = a * l, v = a * u;
        return t[0] = 1 - (d + g), t[1] = h + v, t[2] = f - m, t[3] = 0, t[4] = h - v, t[5] = 1 - (c + g), t[6] = p + _, t[7] = 0, t[8] = f + m, t[9] = p - _, t[10] = 1 - (c + d), t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
    }, i.getTranslation = function (t, e) {
        return t[0] = e[12], t[1] = e[13], t[2] = e[14], t
    }, i.getRotation = function (t, e) {
        var n = e[0] + e[5] + e[10], r = 0;
        return n > 0 ? (r = 2 * Math.sqrt(n + 1), t[3] = .25 * r, t[0] = (e[6] - e[9]) / r, t[1] = (e[8] - e[2]) / r, t[2] = (e[1] - e[4]) / r) : e[0] > e[5] & e[0] > e[10] ? (r = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]), t[3] = (e[6] - e[9]) / r, t[0] = .25 * r, t[1] = (e[1] + e[4]) / r, t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]), t[3] = (e[8] - e[2]) / r, t[0] = (e[1] + e[4]) / r, t[1] = .25 * r, t[2] = (e[6] + e[9]) / r) : (r = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]), t[3] = (e[1] - e[4]) / r, t[0] = (e[8] + e[2]) / r, t[1] = (e[6] + e[9]) / r, t[2] = .25 * r), t
    }, i.fromRotationTranslationScale = function (t, e, n, r) {
        var i = e[0], o = e[1], a = e[2], s = e[3], l = i + i, u = o + o, c = a + a, h = i * l, f = i * u, d = i * c,
            p = o * u, g = o * c, _ = a * c, m = s * l, v = s * u, y = s * c, b = r[0], x = r[1], w = r[2];
        return t[0] = (1 - (p + _)) * b, t[1] = (f + y) * b, t[2] = (d - v) * b, t[3] = 0, t[4] = (f - y) * x, t[5] = (1 - (h + _)) * x, t[6] = (g + m) * x, t[7] = 0, t[8] = (d + v) * w, t[9] = (g - m) * w, t[10] = (1 - (h + p)) * w, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
    }, i.fromRotationTranslationScaleOrigin = function (t, e, n, r, i) {
        var o = e[0], a = e[1], s = e[2], l = e[3], u = o + o, c = a + a, h = s + s, f = o * u, d = o * c, p = o * h,
            g = a * c, _ = a * h, m = s * h, v = l * u, y = l * c, b = l * h, x = r[0], w = r[1], k = r[2], S = i[0],
            M = i[1], T = i[2];
        return t[0] = (1 - (g + m)) * x, t[1] = (d + b) * x, t[2] = (p - y) * x, t[3] = 0, t[4] = (d - b) * w, t[5] = (1 - (f + m)) * w, t[6] = (_ + v) * w, t[7] = 0, t[8] = (p + y) * k, t[9] = (_ - v) * k, t[10] = (1 - (f + g)) * k, t[11] = 0, t[12] = n[0] + S - (t[0] * S + t[4] * M + t[8] * T), t[13] = n[1] + M - (t[1] * S + t[5] * M + t[9] * T), t[14] = n[2] + T - (t[2] * S + t[6] * M + t[10] * T), t[15] = 1, t
    }, i.fromQuat = function (t, e) {
        var n = e[0], r = e[1], i = e[2], o = e[3], a = n + n, s = r + r, l = i + i, u = n * a, c = r * a, h = r * s,
            f = i * a, d = i * s, p = i * l, g = o * a, _ = o * s, m = o * l;
        return t[0] = 1 - h - p, t[1] = c + m, t[2] = f - _, t[3] = 0, t[4] = c - m, t[5] = 1 - u - p, t[6] = d + g, t[7] = 0, t[8] = f + _, t[9] = d - g, t[10] = 1 - u - h, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, i.frustum = function (t, e, n, r, i, o, a) {
        var s = 1 / (n - e), l = 1 / (i - r), u = 1 / (o - a);
        return t[0] = 2 * o * s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * l, t[6] = 0, t[7] = 0, t[8] = (n + e) * s, t[9] = (i + r) * l, t[10] = (a + o) * u, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = a * o * 2 * u, t[15] = 0, t
    }, i.perspective = function (t, e, n, r, i) {
        var o = 1 / Math.tan(e / 2), a = 1 / (r - i);
        return t[0] = o / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (i + r) * a, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * i * r * a, t[15] = 0, t
    }, i.perspectiveFromFieldOfView = function (t, e, n, r) {
        var i = Math.tan(e.upDegrees * Math.PI / 180), o = Math.tan(e.downDegrees * Math.PI / 180),
            a = Math.tan(e.leftDegrees * Math.PI / 180), s = Math.tan(e.rightDegrees * Math.PI / 180), l = 2 / (a + s),
            u = 2 / (i + o);
        return t[0] = l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = 0, t[7] = 0, t[8] = -(a - s) * l * .5, t[9] = (i - o) * u * .5, t[10] = r / (n - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * n / (n - r), t[15] = 0, t
    }, i.ortho = function (t, e, n, r, i, o, a) {
        var s = 1 / (e - n), l = 1 / (r - i), u = 1 / (o - a);
        return t[0] = -2 * s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * l, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * u, t[11] = 0, t[12] = (e + n) * s, t[13] = (i + r) * l, t[14] = (a + o) * u, t[15] = 1, t
    }, i.lookAt = function (t, e, n, o) {
        var a, s, l, u, c, h, f, d, p, g, _ = e[0], m = e[1], v = e[2], y = o[0], b = o[1], x = o[2], w = n[0],
            k = n[1], S = n[2];
        return Math.abs(_ - w) < r.EPSILON && Math.abs(m - k) < r.EPSILON && Math.abs(v - S) < r.EPSILON ? i.identity(t) : (f = _ - w, d = m - k, p = v - S, a = b * (p *= g = 1 / Math.sqrt(f * f + d * d + p * p)) - x * (d *= g), s = x * (f *= g) - y * p, l = y * d - b * f, (g = Math.sqrt(a * a + s * s + l * l)) ? (a *= g = 1 / g, s *= g, l *= g) : (a = 0, s = 0, l = 0), u = d * l - p * s, c = p * a - f * l, h = f * s - d * a, (g = Math.sqrt(u * u + c * c + h * h)) ? (u *= g = 1 / g, c *= g, h *= g) : (u = 0, c = 0, h = 0), t[0] = a, t[1] = u, t[2] = f, t[3] = 0, t[4] = s, t[5] = c, t[6] = d, t[7] = 0, t[8] = l, t[9] = h, t[10] = p, t[11] = 0, t[12] = -(a * _ + s * m + l * v), t[13] = -(u * _ + c * m + h * v), t[14] = -(f * _ + d * m + p * v), t[15] = 1, t)
    }, i.str = function (t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
    }, i.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
    }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t[9] = e[9] + n[9], t[10] = e[10] + n[10], t[11] = e[11] + n[11], t[12] = e[12] + n[12], t[13] = e[13] + n[13], t[14] = e[14] + n[14], t[15] = e[15] + n[15], t
    }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t[9] = e[9] - n[9], t[10] = e[10] - n[10], t[11] = e[11] - n[11], t[12] = e[12] - n[12], t[13] = e[13] - n[13], t[14] = e[14] - n[14], t[15] = e[15] - n[15], t
    }, i.sub = i.subtract, i.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12] * n, t[13] = e[13] * n, t[14] = e[14] * n, t[15] = e[15] * n, t
    }, i.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t[9] = e[9] + n[9] * r, t[10] = e[10] + n[10] * r, t[11] = e[11] + n[11] * r, t[12] = e[12] + n[12] * r, t[13] = e[13] + n[13] * r, t[14] = e[14] + n[14] * r, t[15] = e[15] + n[15] * r, t
    }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
    }, i.equals = function (t, e) {
        var n = t[0], i = t[1], o = t[2], a = t[3], s = t[4], l = t[5], u = t[6], c = t[7], h = t[8], f = t[9],
            d = t[10], p = t[11], g = t[12], _ = t[13], m = t[14], v = t[15], y = e[0], b = e[1], x = e[2], w = e[3],
            k = e[4], S = e[5], M = e[6], T = e[7], I = e[8], C = e[9], A = e[10], D = e[11], z = e[12], O = e[13],
            L = e[14], R = e[15];
        return Math.abs(n - y) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(y)) && Math.abs(i - b) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(o - x) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(x)) && Math.abs(a - w) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(w)) && Math.abs(s - k) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(k)) && Math.abs(l - S) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(u - M) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(M)) && Math.abs(c - T) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(T)) && Math.abs(h - I) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(I)) && Math.abs(f - C) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(C)) && Math.abs(d - A) <= r.EPSILON * Math.max(1, Math.abs(d), Math.abs(A)) && Math.abs(p - D) <= r.EPSILON * Math.max(1, Math.abs(p), Math.abs(D)) && Math.abs(g - z) <= r.EPSILON * Math.max(1, Math.abs(g), Math.abs(z)) && Math.abs(_ - O) <= r.EPSILON * Math.max(1, Math.abs(_), Math.abs(O)) && Math.abs(m - L) <= r.EPSILON * Math.max(1, Math.abs(m), Math.abs(L)) && Math.abs(v - R) <= r.EPSILON * Math.max(1, Math.abs(v), Math.abs(R))
    }, t.exports = i
}, function (t, e, n) {
    var r, i, o, a, s, l, u = n(2), c = n(5), h = n(6), f = n(7), d = {};
    d.create = function () {
        var t = new u.ARRAY_TYPE(4);
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
    }, d.rotationTo = (r = h.create(), i = h.fromValues(1, 0, 0), o = h.fromValues(0, 1, 0), function (t, e, n) {
        var a = h.dot(e, n);
        return a < -.999999 ? (h.cross(r, i, e), h.length(r) < 1e-6 && h.cross(r, o, e), h.normalize(r, r), d.setAxisAngle(t, r, Math.PI), t) : a > .999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (h.cross(r, e, n), t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = 1 + a, d.normalize(t, t))
    }), d.setAxes = (a = c.create(), function (t, e, n, r) {
        return a[0] = n[0], a[3] = n[1], a[6] = n[2], a[1] = r[0], a[4] = r[1], a[7] = r[2], a[2] = -e[0], a[5] = -e[1], a[8] = -e[2], d.normalize(t, d.fromMat3(t, a))
    }), d.clone = f.clone, d.fromValues = f.fromValues, d.copy = f.copy, d.set = f.set, d.identity = function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
    }, d.setAxisAngle = function (t, e, n) {
        n *= .5;
        var r = Math.sin(n);
        return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(n), t
    }, d.getAxisAngle = function (t, e) {
        var n = 2 * Math.acos(e[3]), r = Math.sin(n / 2);
        return 0 != r ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 1, t[1] = 0, t[2] = 0), n
    }, d.add = f.add, d.multiply = function (t, e, n) {
        var r = e[0], i = e[1], o = e[2], a = e[3], s = n[0], l = n[1], u = n[2], c = n[3];
        return t[0] = r * c + a * s + i * u - o * l, t[1] = i * c + a * l + o * s - r * u, t[2] = o * c + a * u + r * l - i * s, t[3] = a * c - r * s - i * l - o * u, t
    }, d.mul = d.multiply, d.scale = f.scale, d.rotateX = function (t, e, n) {
        n *= .5;
        var r = e[0], i = e[1], o = e[2], a = e[3], s = Math.sin(n), l = Math.cos(n);
        return t[0] = r * l + a * s, t[1] = i * l + o * s, t[2] = o * l - i * s, t[3] = a * l - r * s, t
    }, d.rotateY = function (t, e, n) {
        n *= .5;
        var r = e[0], i = e[1], o = e[2], a = e[3], s = Math.sin(n), l = Math.cos(n);
        return t[0] = r * l - o * s, t[1] = i * l + a * s, t[2] = o * l + r * s, t[3] = a * l - i * s, t
    }, d.rotateZ = function (t, e, n) {
        n *= .5;
        var r = e[0], i = e[1], o = e[2], a = e[3], s = Math.sin(n), l = Math.cos(n);
        return t[0] = r * l + i * s, t[1] = i * l - r * s, t[2] = o * l + a * s, t[3] = a * l - o * s, t
    }, d.calculateW = function (t, e) {
        var n = e[0], r = e[1], i = e[2];
        return t[0] = n, t[1] = r, t[2] = i, t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - i * i)), t
    }, d.dot = f.dot, d.lerp = f.lerp, d.slerp = function (t, e, n, r) {
        var i, o, a, s, l, u = e[0], c = e[1], h = e[2], f = e[3], d = n[0], p = n[1], g = n[2], _ = n[3];
        return (o = u * d + c * p + h * g + f * _) < 0 && (o = -o, d = -d, p = -p, g = -g, _ = -_), 1 - o > 1e-6 ? (i = Math.acos(o), a = Math.sin(i), s = Math.sin((1 - r) * i) / a, l = Math.sin(r * i) / a) : (s = 1 - r, l = r), t[0] = s * u + l * d, t[1] = s * c + l * p, t[2] = s * h + l * g, t[3] = s * f + l * _, t
    }, d.sqlerp = (s = d.create(), l = d.create(), function (t, e, n, r, i, o) {
        return d.slerp(s, e, i, o), d.slerp(l, n, r, o), d.slerp(t, s, l, 2 * o * (1 - o)), t
    }), d.invert = function (t, e) {
        var n = e[0], r = e[1], i = e[2], o = e[3], a = n * n + r * r + i * i + o * o, s = a ? 1 / a : 0;
        return t[0] = -n * s, t[1] = -r * s, t[2] = -i * s, t[3] = o * s, t
    }, d.conjugate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t
    }, d.length = f.length, d.len = d.length, d.squaredLength = f.squaredLength, d.sqrLen = d.squaredLength, d.normalize = f.normalize, d.fromMat3 = function (t, e) {
        var n, r = e[0] + e[4] + e[8];
        if (r > 0) n = Math.sqrt(r + 1), t[3] = .5 * n, n = .5 / n, t[0] = (e[5] - e[7]) * n, t[1] = (e[6] - e[2]) * n, t[2] = (e[1] - e[3]) * n; else {
            var i = 0;
            e[4] > e[0] && (i = 1), e[8] > e[3 * i + i] && (i = 2);
            var o = (i + 1) % 3, a = (i + 2) % 3;
            n = Math.sqrt(e[3 * i + i] - e[3 * o + o] - e[3 * a + a] + 1), t[i] = .5 * n, n = .5 / n, t[3] = (e[3 * o + a] - e[3 * a + o]) * n, t[o] = (e[3 * o + i] + e[3 * i + o]) * n, t[a] = (e[3 * a + i] + e[3 * i + a]) * n
        }
        return t
    }, d.str = function (t) {
        return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }, d.exactEquals = f.exactEquals, d.equals = f.equals, t.exports = d
}, function (t, e, n) {
    var r, i = n(2), o = {};
    o.create = function () {
        var t = new i.ARRAY_TYPE(2);
        return t[0] = 0, t[1] = 0, t
    }, o.clone = function (t) {
        var e = new i.ARRAY_TYPE(2);
        return e[0] = t[0], e[1] = t[1], e
    }, o.fromValues = function (t, e) {
        var n = new i.ARRAY_TYPE(2);
        return n[0] = t, n[1] = e, n
    }, o.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }, o.set = function (t, e, n) {
        return t[0] = e, t[1] = n, t
    }, o.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }, o.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }, o.sub = o.subtract, o.multiply = function (t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
    }, o.mul = o.multiply, o.divide = function (t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
    }, o.div = o.divide, o.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t
    }, o.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t
    }, o.min = function (t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }, o.max = function (t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }, o.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t
    }, o.scale = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }, o.scaleAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t
    }, o.distance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1];
        return Math.sqrt(n * n + r * r)
    }, o.dist = o.distance, o.squaredDistance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1];
        return n * n + r * r
    }, o.sqrDist = o.squaredDistance, o.length = function (t) {
        var e = t[0], n = t[1];
        return Math.sqrt(e * e + n * n)
    }, o.len = o.length, o.squaredLength = function (t) {
        var e = t[0], n = t[1];
        return e * e + n * n
    }, o.sqrLen = o.squaredLength, o.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }, o.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t
    }, o.normalize = function (t, e) {
        var n = e[0], r = e[1], i = n * n + r * r;
        return i > 0 && (i = 1 / Math.sqrt(i), t[0] = e[0] * i, t[1] = e[1] * i), t
    }, o.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }, o.cross = function (t, e, n) {
        var r = e[0] * n[1] - e[1] * n[0];
        return t[0] = t[1] = 0, t[2] = r, t
    }, o.lerp = function (t, e, n, r) {
        var i = e[0], o = e[1];
        return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t
    }, o.random = function (t, e) {
        e = e || 1;
        var n = 2 * i.RANDOM() * Math.PI;
        return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t
    }, o.transformMat2 = function (t, e, n) {
        var r = e[0], i = e[1];
        return t[0] = n[0] * r + n[2] * i, t[1] = n[1] * r + n[3] * i, t
    }, o.transformMat2d = function (t, e, n) {
        var r = e[0], i = e[1];
        return t[0] = n[0] * r + n[2] * i + n[4], t[1] = n[1] * r + n[3] * i + n[5], t
    }, o.transformMat3 = function (t, e, n) {
        var r = e[0], i = e[1];
        return t[0] = n[0] * r + n[3] * i + n[6], t[1] = n[1] * r + n[4] * i + n[7], t
    }, o.transformMat4 = function (t, e, n) {
        var r = e[0], i = e[1];
        return t[0] = n[0] * r + n[4] * i + n[12], t[1] = n[1] * r + n[5] * i + n[13], t
    }, o.forEach = (r = o.create(), function (t, e, n, i, o, a) {
        var s, l;
        for (e || (e = 2), n || (n = 0), l = i ? Math.min(i * e + n, t.length) : t.length, s = n; s < l; s += e) r[0] = t[s], r[1] = t[s + 1], o(r, r, a), t[s] = r[0], t[s + 1] = r[1];
        return t
    }), o.str = function (t) {
        return "vec2(" + t[0] + ", " + t[1] + ")"
    }, o.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1]
    }, o.equals = function (t, e) {
        var n = t[0], r = t[1], o = e[0], a = e[1];
        return Math.abs(n - o) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - a) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(a))
    }, t.exports = o
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "RuleSetType", (function () {
        return J
    })), n.d(e, "RuleSet", (function () {
        return pt
    })), n.d(e, "LinearInterpRangeType", (function () {
        return dt
    })), n.d(e, "GeneticAlterationRuleSet", (function () {
        return wt
    })), n.d(e, "Rule", (function () {
        return kt
    })), n.d(e, "shapeToSvg", (function () {
        return F
    }));
    var r = Math;

    function i(t, e, n, r) {
        if (!t.length) return -1;
        for (var i, o = t.length, a = 0; a < o;) {
            var s = n(t[i = Math.floor((o + a) / 2)]);
            if (s === e) return i;
            if (e > s) a = i + 1; else {
                if (!(e < s)) return -1;
                o = i
            }
        }
        return r ? Math.max(0, a - 1) : -1
    }

    r.log2 = r.log2 || function (t) {
        return Math.log(t) / Math.LN2
    };
    var o = function () {
        function t(t, e) {
            this.value = t, this.updateFn = e, this.bound_properties = []
        }

        return t.prototype.update = function () {
            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            this.value = this.updateFn.apply(null, e);
            for (var r = 0; r < this.bound_properties.length; r++) (t = this.bound_properties[r]).update.apply(t, e)
        }, t.prototype.get = function () {
            return this.value
        }, t.prototype.updateAndGet = function () {
            return this.update(), this.get()
        }, t.prototype.addBoundProperty = function (t) {
            this.bound_properties.push(t)
        }, t
    }(), a = n(8), s = n.n(a);

    function l(t, e) {
        var n = new s.a, r = new Object, i = new $.Deferred;
        return r.casesAndEntities = t, r.dimension = e, n.postMessage(r), n.onmessage = function (t) {
            i.resolve(t.data)
        }, i.promise()
    }

    var u = n(0), c = n.n(u);

    function h(t) {
        for (var e = {}, n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            e[i] = t[i]
        }
        return e
    }

    function f(t, e) {
        for (var n = 0; n < e.length; n++) t.push(e[n])
    }

    function d(t, e) {
        return void 0 === t ? e : t
    }

    function p(t, e) {
        for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
            n[s = i[r]] = t[s]
        }
        for (var o = 0, a = Object.keys(e); o < a.length; o++) {
            var s;
            n[s = a[o]] = e[s]
        }
        return n
    }

    function g(t, e) {
        return t < e ? -1 : t > e ? 1 : 0
    }

    function _(t, e, n) {
        return Math.max(e, Math.min(n, t))
    }

    function m(t, e, n) {
        e = e || function (t) {
            return t
        };
        for (var r, i, o, a, s, l = t, u = [{
            lower_index_incl: 0,
            upper_index_excl: t.length
        }], c = [], h = 0; h < t.length; h++) (s = e(t[h])).length > c.length && (c = s);
        for (var d = c.length, p = 0; p < d; p++) {
            r = [], i = [];
            for (var g = 0; g < u.length; g++) f(r, (a = x(l, e, (o = u[g]).lower_index_incl, o.upper_index_excl, p, "string" == typeof c[p])).sorted_array), f(i, a.bucket_ranges);
            l = r, u = i
        }
        if (n) {
            var _;
            r = [];
            for (g = 0; g < u.length; g++) o = u[g], (_ = l.slice(o.lower_index_incl, o.upper_index_excl)).sort(n), f(r, _);
            l = r
        }
        return l
    }

    function v(t) {
        for (var e, n = [], r = t.length, i = -1, o = 0; o < r; o++) (e = t.charCodeAt(o)) >= 48 && e <= 57 ? -1 === i && (i = o) : (i > -1 && (n.push(parseInt(t.substring(i, o), 10)), i = -1), n.push(e));
        return i > -1 && n.push(parseInt(t.substring(i), 10)), n
    }

    function y(t, e, n, r) {
        var i = b(n(t), n(e));
        return 0 === i && r && (i = r(t, e)), i
    }

    function b(t, e) {
        for (var n, r, i, o = 0, a = 0; a < t.length; a++) {
            if (a >= e.length) {
                o = 1;
                break
            }
            if (r = t[a], i = e[a], 0 !== (n = "string" == typeof r ? b(v(r), v(i)) : g(r, i))) {
                o = n;
                break
            }
        }
        return 0 === o && t.length < e.length && (o = -1), o
    }

    function x(t, e, n, r, i, o) {
        if (!t.length || n >= r) return {sorted_array: [], bucket_ranges: []};
        for (var a, s, l = {}, u = [], c = [], h = n; h < r; h++) (a = e(t[h])).length > i ? ((s = a[i]) in l || u.push(s), l[s] = l[s] || [], l[s].push(t[h])) : c.push(t[h]);
        o ? u = function (t, e) {
            return e = e || function (t) {
                return t
            }, m(t.map((function (t) {
                return {d: t, vector: v(e(t))}
            })), (function (t) {
                return t.vector
            })).map((function (t) {
                return t.d
            }))
        }(u) : u.sort(g);
        var d, p, _ = [], y = [];
        c.length && (d = n + _.length, y.push({lower_index_incl: d, upper_index_excl: d + c.length}), f(_, c));
        for (h = 0; h < u.length; h++) {
            var b = l[u[h]];
            p = (d = n + _.length) + b.length, y.push({lower_index_incl: d, upper_index_excl: p}), f(_, b)
        }
        return {sorted_array: _, bucket_ranges: y}
    }

    var w = n(3), k = n.n(w), S = function () {
        function t(t, e, n, r) {
            e.isVector ? this.initializeVector(t, e, n, r) : this.initializeComparator(t, e, n, r)
        }

        return t.prototype.initializeComparator = function (t, e, n, r) {
            var i, o;

            function a(t) {
                return function (e, r) {
                    if (0 === n) return 0;
                    var i = t(e, r);
                    return 2 === i ? 1 : -2 === i ? -1 : i * n
                }
            }

            "function" == typeof e ? (i = e, o = e) : (i = e.preferred, o = e.mandatory);
            var s = a(i), l = a(o), u = t.sort(s);
            this.preferred_change_points = [0], this.mandatory_change_points = [0];
            for (var c = 1; c < u.length; c++) 0 !== l(u[c - 1], u[c]) ? this.mandatory_change_points.push(c) : 0 !== s(u[c - 1], u[c]) && this.preferred_change_points.push(c);
            this.id_to_index = {};
            for (c = 0; c < u.length; c++) this.id_to_index[u[c][r]] = c
        }, t.prototype.initializeVector = function (t, e, n, r) {
            function i(t) {
                return 0 === n ? function (t) {
                    return 0
                } : function (e) {
                    return t(e).map((function (t) {
                        return "number" == typeof t ? t * n : t
                    }))
                }
            }

            var o = i(e.preferred), a = i(e.mandatory), s = t.map((function (t) {
                return {d: t, preferred_vector: o(t), mandatory_vector: a(t)}
            })), l = e.compareEquals, u = l ? function (t, e) {
                return l(t.d, e.d)
            } : void 0, c = m(s, (function (t) {
                return t.preferred_vector
            }), u);
            this.preferred_change_points = [0], this.mandatory_change_points = [0];
            for (var h = function (t) {
                return t.mandatory_vector
            }, f = function (t) {
                return t.preferred_vector
            }, d = 1; d < c.length; d++) 0 !== y(c[d - 1], c[d], h) ? this.mandatory_change_points.push(d) : 0 !== y(c[d - 1], c[d], f, u) && this.preferred_change_points.push(d);
            this.id_to_index = {};
            for (d = 0; d < c.length; d++) this.id_to_index[c[d].d[r]] = d
        }, t.prototype.getSortValue = function (t) {
            var e = this.id_to_index[t], n = 0, r = 0;
            return this.mandatory_change_points.length && (n = this.mandatory_change_points[i(this.mandatory_change_points, e, (function (t) {
                return t
            }), !0)]), this.preferred_change_points.length && (r = this.preferred_change_points[i(this.preferred_change_points, e, (function (t) {
                return t
            }), !0)]), {mandatory: n, preferred: r}
        }, t
    }();

    function M(t, e) {
        return T(t, e).trackTops
    }

    function T(t, e) {
        for (var n = {}, r = {}, i = t.getTrackGroups(), o = 0, a = 0; a < i.length; a++) {
            var s = i[a];
            s.header && (r[a] = o), s.tracks.length > 0 && (o += t.getTrackGroupHeaderHeight(s));
            for (var l = 0; l < s.tracks.length; l++) {
                var u = s.tracks[l];
                n[u] = o, o += t.getTrackHeight(u, !e)
            }
            s.tracks.length > 0 && (o += t.getTrackGroupPadding(!e))
        }
        return {trackTops: n, headerTops: r}
    }

    var I = function () {
        function t() {
            this.union_count = {}, this.sets = {}
        }

        return t.prototype.setOfKeys = function (t) {
            for (var e = {}, n = 0, r = Object.keys(t); n < r.length; n++) {
                var i = r[n];
                void 0 !== t[i] && (e[i] = !0)
            }
            return e
        }, t.prototype.putSet = function (t, e) {
            this.removeSet(t), this.sets[t] = e;
            for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                var i = r[n];
                e[i] && (this.union_count[i] = this.union_count[i] || 0, this.union_count[i] += 1)
            }
        }, t.prototype.removeSet = function (t) {
            for (var e = this.union_count, n = this.sets[t] || {}, r = 0, i = Object.keys(n); r < i.length; r++) {
                var o = i[r];
                n[o] && (e[o] -= 1, 0 === e[o] && delete e[o])
            }
            delete this.sets[t]
        }, t.prototype.getUnion = function () {
            return this.setOfKeys(this.union_count)
        }, t
    }();

    function C(t) {
        for (var e = {}, n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            e[i] = t[i]
        }
        return e
    }

    function A(t, e, n) {
        return Math.min(n, Math.max(e, t))
    }

    var D = function () {
        function t(t) {
            var e = this;
            this.sort_config = {}, this.rendering_suppressed_depth = 0, this.max_height = d(t.max_height, 500), this.cell_width = d(t.init_cell_width, 6), this.horz_zoom = d(t.init_horz_zoom, 1), this.vert_zoom = d(t.init_vert_zoom, 1), this.horz_scroll = 0, this.vert_scroll = 0, this.bottom_padding = 0, this.track_group_padding = d(t.init_track_group_padding, 10), this.cell_padding = d(t.init_cell_padding, 3), this.cell_padding_on = d(t.init_cell_padding_on, !0), this.cell_padding_off_cell_width_threshold = d(t.cell_padding_off_cell_width_threshold, 2), this.cell_padding_off_because_of_zoom = this.getCellWidth() < this.cell_padding_off_cell_width_threshold, this.id_order = [], this.hidden_ids = {}, this.highlighted_ids = [], this.highlighted_tracks = [], this.track_group_legend_order = [], this.show_track_sublabels = !1, this.show_track_labels = !0, this.column_labels = {}, this.track_important_ids = {}, this.track_label = {}, this.track_label_color = {}, this.track_label_circle_color = {}, this.track_label_font_weight = {}, this.track_label_left_padding = {}, this.track_sublabel = {}, this.track_html_label = {}, this.track_link_url = {}, this.track_description = {}, this.cell_height = {}, this.track_padding = {}, this.track_data_id_key = {}, this.track_tooltip_fn = {}, this.track_movable = {}, this.track_removable = {}, this.track_remove_callback = {}, this.track_remove_option_callback = {}, this.track_sort_cmp_fn = {}, this.track_sort_direction_changeable = {}, this.track_sort_direction = {}, this.track_sort_direction_change_callback = {}, this.track_data = {}, this.track_rule_set_id = {}, this.track_active_rules = {}, this.track_info = {}, this.$track_info_tooltip_elt = {}, this.track_has_column_spacing = {}, this.track_expansion_enabled = {}, this.track_expand_callback = {}, this.track_expand_button_getter = {}, this.track_expansion_tracks = {}, this.track_expansion_parent = {}, this.track_custom_options = {}, this.track_can_show_gaps = {}, this.track_show_gaps = {}, this.rule_sets = {}, this.rule_set_active_rules = {}, this.visible_id_order = new o([], (function (t) {
                var e = t.hidden_ids;
                return t.id_order.filter((function (t) {
                    return !e[t]
                }))
            })), this.track_id_to_datum = new o({}, (function (t, e) {
                var n = t.track_id_to_datum.get();
                if (null !== t.getContainingTrackGroup(e)) {
                    for (var r = {}, i = t.getTrackData(e) || [], o = t.getTrackDataIdKey(e) || "", a = 0; a < i.length; a++) r[i[a][o]] = i[a];
                    n[e] = r
                } else delete n[e];
                return n
            })), this.track_present_ids = new o(new I, (function (t, e) {
                var n = t.track_present_ids.get();
                if (null !== t.getContainingTrackGroup(e)) {
                    for (var r = {}, i = t.getTrackData(e) || [], o = t.getTrackDataIdKey(e) || "", a = 0; a < i.length; a++) r[i[a][o]] = !0;
                    n.putSet(e, r)
                } else n.removeSet(e);
                return n
            })), this.present_ids = new o({}, (function () {
                return e.track_present_ids.get().getUnion()
            })), this.track_present_ids.addBoundProperty(this.present_ids), this.id_to_index = new o({}, (function () {
                for (var t = {}, n = e.getIdOrder(!0), r = 0; r < n.length; r++) t[n[r]] = r;
                return t
            })), this.visible_id_to_index = new o({}, (function () {
                for (var t = {}, n = e.getIdOrder(), r = 0; r < n.length; r++) t[n[r]] = r;
                return t
            })), this.visible_id_order.addBoundProperty(this.visible_id_to_index), this.track_groups = [], this.track_group_sort_priority = [], this.track_tops = new o({}, (function () {
                return M(e, !1)
            })), this.cell_tops = new o({}, (function () {
                for (var t = e.getTracks(), n = e.track_tops.get(), r = {}, i = 0, o = t; i < o.length; i++) {
                    var a = o[i];
                    a in n && (r[a] = n[a] + e.getTrackPadding(a, !0))
                }
                return r
            })), this.label_tops = new o({}, (function () {
                return e.cell_tops.get()
            })), this.track_tops.addBoundProperty(this.cell_tops), this.cell_tops.addBoundProperty(this.label_tops), this.track_tops_zoomed = new o({}, (function () {
                return M(e, !0)
            })), this.header_tops_zoomed = new o({}, (function () {
                return function (t, e) {
                    return T(t, e).headerTops
                }(e, !0)
            })), this.cell_tops_zoomed = new o({}, (function () {
                for (var t = e.getTracks(), n = e.track_tops_zoomed.get(), r = {}, i = 0, o = t; i < o.length; i++) {
                    var a = o[i];
                    a in n && (r[a] = n[a] + e.getTrackPadding(a))
                }
                return r
            })), this.label_tops_zoomed = new o({}, (function () {
                return e.cell_tops_zoomed.get()
            })), this.track_tops.addBoundProperty(this.track_tops_zoomed), this.track_tops_zoomed.addBoundProperty(this.cell_tops_zoomed), this.track_tops_zoomed.addBoundProperty(this.header_tops_zoomed), this.cell_tops_zoomed.addBoundProperty(this.label_tops_zoomed), this.precomputed_comparator = new o({}, (function (t, e) {
                var n = t.precomputed_comparator.get();
                return n[e] = new S(t.getTrackData(e), t.getTrackSortComparator(e), t.getTrackSortDirection(e), t.getTrackDataIdKey(e)), n
            })), this.ids_after_a_gap = new o({}, (function (t) {
                for (var e = {}, n = t.precomputed_comparator.get(), r = t.getTracks().filter((function (e) {
                    return t.getTrackShowGaps(e)
                })), i = t.visible_id_order.get(), o = 1; o < i.length; o++) for (var a = 0, s = r; a < s.length; a++) {
                    var l = n[s[a]];
                    l.getSortValue(i[o - 1]).mandatory !== l.getSortValue(i[o]).mandatory && (e[i[o]] = !0)
                }
                return e
            })), this.visible_id_order.addBoundProperty(this.ids_after_a_gap), this.precomputed_comparator.addBoundProperty(this.ids_after_a_gap), this.column_indexes_after_a_gap = new o([], (function (t) {
                var e = t.ids_after_a_gap.get(), n = t.getVisibleIdToIndexMap();
                return Object.keys(e).map((function (t) {
                    return n[t]
                }))
            })), this.ids_after_a_gap.addBoundProperty(this.column_indexes_after_a_gap), this.column_left = new o({}, (function () {
                for (var t = e.getCellWidth(!0), n = e.getGapSize(), r = e.ids_after_a_gap.get(), i = e.getCellPadding(!0), o = {}, a = e.getIdOrder(), s = 0, l = 0; l < a.length; l++) r[a[l]] && (s += n), o[a[l]] = s, s += t + i;
                return o
            })), this.ids_after_a_gap.addBoundProperty(this.column_left), this.column_left_always_with_padding = new o({}, (function () {
                for (var t = e.getCellWidth(!0), n = e.getGapSize(), r = e.ids_after_a_gap.get(), i = e.getCellPadding(!0, !0), o = {}, a = e.getIdOrder(), s = 0, l = 0; l < a.length; l++) r[a[l]] && (s += n), o[a[l]] = s, s += t + i;
                return o
            })), this.column_left.addBoundProperty(this.column_left_always_with_padding), this.zoomed_column_left = new o({}, (function () {
                for (var t = e.getCellWidth(), n = e.getGapSize(), r = e.ids_after_a_gap.get(), i = e.getCellPadding(), o = {}, a = e.getIdOrder(), s = 0, l = 0; l < a.length; l++) r[a[l]] && (s += n), o[a[l]] = s, s += t + i;
                return o
            })), this.ids_after_a_gap.addBoundProperty(this.zoomed_column_left), this.column_left.addBoundProperty(this.zoomed_column_left), this.column_left_no_padding = new o({}, (function () {
                for (var t = e.getCellWidth(!0), n = e.getGapSize(), r = e.ids_after_a_gap.get(), i = {}, o = e.getIdOrder(), a = 0, s = 0; s < o.length; s++) r[o[s]] && (a += n), i[o[s]] = a, a += t;
                return i
            })), this.ids_after_a_gap.addBoundProperty(this.column_left_no_padding), this.column_left.addBoundProperty(this.column_left_no_padding)
        }

        return t.prototype.setTrackShowGaps = function (t, e) {
            this.track_show_gaps[t] = e, this.ids_after_a_gap.update(this)
        }, t.prototype.getTrackShowGaps = function (t) {
            return this.track_show_gaps[t]
        }, t.prototype.getTrackCanShowGaps = function (t) {
            return this.track_can_show_gaps[t]
        }, t.prototype.getColumnIndexesAfterAGap = function () {
            return this.column_indexes_after_a_gap.get()
        }, t.prototype.setTrackGroupHeader = function (t, e) {
            this.ensureTrackGroupExists(t), this.getTrackGroups()[t].header = e, this.track_tops.update()
        }, t.prototype.getTrackGroupHeaderHeight = function (t) {
            return t.header ? 32 : 0
        }, t.prototype.toggleCellPadding = function () {
            return this.cell_padding_on = !this.cell_padding_on, this.column_left.update(), this.cell_padding_on
        }, t.prototype.getCellPadding = function (t, e) {
            return this.cell_padding * (t ? 1 : this.horz_zoom) * +this.cell_padding_on * (e ? 1 : +!this.cell_padding_off_because_of_zoom)
        }, t.prototype.getHorzZoom = function () {
            return this.horz_zoom
        }, t.prototype.getIdsInZoomedLeftInterval = function (t, e) {
            var n = this.getClosestColumnIndexToLeft(t, !0), r = this.getClosestColumnIndexToLeft(e, !0, !0);
            return this.getIdOrder().slice(n, r)
        }, t.prototype.getHorzZoomToFitCols = function (t, e, n) {
            var r, i = t - this.getColumnIndexesAfterAGap().filter((function (t) {
                    return t >= e && t < n
                })).length * this.getGapSize(), o = this.getCellWidth(!0) + this.getCellPadding(!0, !0),
                a = this.getCellWidth(!0), s = (n - e) * a, l = A(i / ((n - e) * o), 0, 1), u = A(i / s, 0, 1);
            if (this.cell_padding_on) {
                var c = this.getCellWidth(!0);
                r = c * l < this.cell_padding_off_cell_width_threshold ? c * u >= this.cell_padding_off_cell_width_threshold ? l : u : l
            } else r = u;
            return r
        }, t.prototype.getHorzZoomToFit = function (t, e) {
            if (0 === (e = e || []).length) return 1;
            for (var n = this.getVisibleIdToIndexMap(), r = e.map((function (t) {
                return n[t]
            })), i = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY, a = 0; a < r.length; a++) i = Math.max(r[a], i), o = Math.min(r[a], o);
            return this.getHorzZoomToFitCols(t, o, i + 1)
        }, t.prototype.getMinHorzZoom = function () {
            return Math.min(100 / this.getOncoprintWidth(!0), 1)
        }, t.prototype.getMinVertZoom = function () {
            return this.max_height < Number.POSITIVE_INFINITY ? this.max_height / this.getOncoprintHeight(!0) : 1
        }, t.prototype.setHorzScroll = function (t) {
            return this.horz_scroll = Math.max(0, t), this.horz_scroll
        }, t.prototype.setVertScroll = function (t) {
            return this.vert_scroll = Math.max(0, t), this.vert_scroll
        }, t.prototype.setScroll = function (t, e) {
            this.setHorzScroll(t), this.setVertScroll(e)
        }, t.prototype.getHorzScroll = function () {
            return this.horz_scroll
        }, t.prototype.getVertScroll = function () {
            return this.vert_scroll
        }, t.prototype.setZoom = function (t, e) {
            this.setHorzZoom(t), this.setVertZoom(e)
        }, t.prototype.setCellPaddingOffBecauseOfZoom = function (t) {
            this.cell_padding_off_because_of_zoom = t, this.column_left.update()
        }, t.prototype.setHorzZoom = function (t) {
            var e = this.getMinHorzZoom();
            return this.horz_zoom = A(t, e, 1), this.column_left.update(), this.getCellWidth() < this.cell_padding_off_cell_width_threshold && !this.cell_padding_off_because_of_zoom ? this.setCellPaddingOffBecauseOfZoom(!0) : this.getCellWidth() >= this.cell_padding_off_cell_width_threshold && this.cell_padding_off_because_of_zoom && this.setCellPaddingOffBecauseOfZoom(!1), this.horz_zoom
        }, t.prototype.getVertZoom = function () {
            return this.vert_zoom
        }, t.prototype.setVertZoom = function (t) {
            var e = this.getMinVertZoom();
            return this.vert_zoom = A(t, e, 1), this.track_tops.update(), this.vert_zoom
        }, t.prototype.setShowTrackLabels = function (t) {
            this.show_track_labels = t
        }, t.prototype.getShowTrackLabels = function () {
            return this.show_track_labels
        }, t.prototype.hideTrackLegends = function (t) {
            t = [].concat(t);
            for (var e = 0; e < t.length; e++) this.getRuleSet(t[e]).exclude_from_legend = !0
        }, t.prototype.showTrackLegends = function (t) {
            t = [].concat(t);
            for (var e = 0; e < t.length; e++) this.getRuleSet(t[e]).exclude_from_legend = !1
        }, t.prototype.clearTrackActiveRules = function (t) {
            for (var e = this.track_rule_set_id[t], n = this.track_active_rules[t], r = this.rule_set_active_rules[e], i = Object.keys(n).map((function (t) {
                return parseInt(t, 10)
            })), o = 0; o < i.length; o++) {
                var a = i[o];
                r.hasOwnProperty(a) && (r[a] -= 1, r[a] <= 0 && delete r[a])
            }
            this.track_active_rules[t] = {}
        }, t.prototype.setTrackActiveRules = function (t, e) {
            this.clearTrackActiveRules(t), this.track_active_rules[t] = e;
            for (var n = this.track_rule_set_id[t], r = this.rule_set_active_rules[n], i = Object.keys(e).map((function (t) {
                return parseInt(t, 0)
            })), o = 0; o < i.length; o++) {
                var a = i[o];
                r[a] = r[a] || 0, r[a] += 1
            }
        }, t.prototype.getIdentifiedShapeListList = function (t, e, n) {
            var r = {}, i = this.getTrackData(t), o = this.getTrackDataIdKey(t), a = this.getTrackHasColumnSpacing(t),
                s = this.getCellWidth(e) + (a ? 0 : this.getCellPadding(e, !0)),
                l = this.getRuleSet(t).apply(i, s, this.getCellHeight(t, e), r, o, this.getTrackImportantIds(t));

            function u(t, e) {
                var n = t.z, r = e.z;
                return n < r ? -1 : n > r ? 1 : 0
            }

            return this.setTrackActiveRules(t, r), l.map((function (t, e) {
                return n && t.sort(u), {id: i[e][o], shape_list: t}
            }))
        }, t.prototype.getActiveRules = function (t) {
            var e = this.rule_set_active_rules[t];
            return e ? this.rule_sets[t].getRulesWithId().filter((function (t) {
                return !!e[t.id]
            })) : []
        }, t.prototype.setTrackImportantIds = function (t, e) {
            this.track_important_ids[t] = e ? e.reduce((function (t, e) {
                return t[e] = !0, t
            }), {}) : void 0
        }, t.prototype.getTrackImportantIds = function (t) {
            return this.track_important_ids[t]
        }, t.prototype.getRuleSets = function () {
            for (var t = this, e = this.getTrackGroupLegendOrder(), n = {}, r = this.getTrackGroups(), i = [], o = 0; o < e.length; o++) n[e[o]] = !0, r[e[o]] && i.push(r[e[o]]);
            for (o = 0; o < r.length; o++) !n[o] && r[o] && i.push(r[o]);
            return function (t) {
                for (var e = {}, n = [], r = 0; r < t.length; r++) void 0 === e[t[r]] && (e[t[r]] = !0, n.push(t[r]));
                return n
            }(i.reduce((function (t, e) {
                return t.concat(e.tracks)
            }), []).map((function (e) {
                return t.track_rule_set_id[e]
            })).map((function (t) {
                return t.toString()
            }))).map((function (e) {
                return t.rule_sets[parseInt(e, 10)]
            }))
        }, t.prototype.getTrackHasColumnSpacing = function (t) {
            return !!this.track_has_column_spacing[t]
        }, t.prototype.getGapSize = function () {
            return this.getCellWidth(!0)
        }, t.prototype.getCellWidth = function (t) {
            return this.cell_width * (t ? 1 : this.horz_zoom)
        }, t.prototype.getCellHeight = function (t, e) {
            return this.cell_height[t] * (e ? 1 : this.vert_zoom)
        }, t.prototype.getTrackInfo = function (t) {
            return this.track_info[t]
        }, t.prototype.setTrackInfo = function (t, e) {
            this.track_info[t] = e
        }, t.prototype.getTrackHeight = function (t, e) {
            return this.getCellHeight(t, e) + 2 * this.getTrackPadding(t, e)
        }, t.prototype.getTrackPadding = function (t, e) {
            return this.track_padding[t] * (e ? 1 : this.vert_zoom)
        }, t.prototype.getBottomPadding = function () {
            return this.bottom_padding
        }, t.prototype.getTrackSortDirection = function (t) {
            return this.track_sort_direction[t]
        }, t.prototype.setTrackSortDirection = function (t, e, n) {
            this.track_sort_direction[t] = e, n || this.track_sort_direction_change_callback[t](t, e), this.precomputed_comparator.update(this, t)
        }, t.prototype.resetSortableTracksSortDirection = function (t) {
            for (var e = 0, n = this.getTracks(); e < n.length; e++) {
                var r = n[e];
                this.isTrackSortDirectionChangeable(r) && this.setTrackSortDirection(r, 0, t)
            }
        }, t.prototype.setCellPaddingOn = function (t) {
            this.cell_padding_on = t, this.column_left.update()
        }, t.prototype.getIdOrder = function (t) {
            return t ? this.id_order : this.visible_id_order.get()
        }, t.prototype.getClosestColumnIndexToLeft = function (t, e, n) {
            var r = e ? this.getZoomedColumnLeft() : this.getColumnLeft(), o = this.getIdOrder(), a = o[o.length - 1];
            if (t > r[a] + this.getCellWidth()) return o.length;
            if (t < r[o[0]]) return 0;
            var s = i(o, t, (function (t) {
                return r[t]
            }), !0), l = o[s], u = r[l];
            return n && t !== u ? s + 1 : s
        }, t.prototype.getIdToIndexMap = function () {
            return this.id_to_index.get()
        }, t.prototype.getVisibleIdToIndexMap = function () {
            return this.visible_id_to_index.get()
        }, t.prototype.getHiddenIds = function () {
            var t = this.hidden_ids;
            return this.id_order.filter((function (e) {
                return !!t[e]
            }))
        }, t.prototype.isSortAffected = function (t, e) {
            var n;
            t = [].concat(t);
            var r = this;
            return n = "track" === e ? t.map((function (t) {
                return r.getContainingTrackGroupIndex(t)
            })) : t, "cluster" !== this.sort_config.type || n.indexOf(this.sort_config.track_group_index) > -1
        }, t.prototype.setIdOrder = function (t) {
            this.id_order = t.slice(), Object.freeze(this.id_order), this.id_to_index.update(), this.visible_id_order.update(this), this.column_left.update()
        }, t.prototype.hideIds = function (t, e) {
            e && (this.hidden_ids = {});
            for (var n = 0, r = t.length; n < r; n++) this.hidden_ids[t[n]] = !0;
            this.visible_id_order.update(this), this.column_left.update()
        }, t.prototype.setHighlightedTracks = function (t) {
            this.highlighted_tracks = t
        }, t.prototype.getHighlightedTracks = function () {
            var t = k.a.keyBy(this.getTracks());
            return this.highlighted_tracks.filter((function (e) {
                return e in t
            }))
        }, t.prototype.setHighlightedIds = function (t) {
            this.highlighted_ids = t
        }, t.prototype.getVisibleHighlightedIds = function () {
            var t = this.getVisibleIdToIndexMap();
            return this.highlighted_ids.filter((function (e) {
                return e in t
            }))
        }, t.prototype.restoreClusteredTrackGroupOrder = function () {
            if ("cluster" === this.sort_config.type && this.unclustered_track_group_order) {
                var t = this.sort_config.track_group_index;
                this.setTrackGroupOrder(t, this.unclustered_track_group_order)
            }
            this.unclustered_track_group_order = void 0
        }, t.prototype.setTrackGroupOrder = function (t, e) {
            this.track_groups[t].tracks = e, this.track_tops.update()
        }, t.prototype.moveTrackGroup = function (t, e) {
            for (var n = [], r = this.track_groups[t], i = 0; i < this.track_groups.length; i++) i !== t && i !== e && n.push(this.track_groups[i]), i === e && n.push(r);
            return this.track_groups = n, this.track_tops.update(), this.track_groups
        }, t.prototype.addTracks = function (t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                this.addTrack(n)
            }
            this.track_tops.update()
        }, t.prototype.addTrack = function (t) {
            var e = t.track_id;
            this.$track_info_tooltip_elt[e] = t.$track_info_tooltip_elt, this.track_custom_options[e] = d(t.custom_track_options, []), this.track_label[e] = d(t.label, "Label"), this.track_sublabel[e] = d(t.sublabel, ""), this.track_label_color[e] = d(t.track_label_color, "black"), this.track_label_circle_color[e] = t.track_label_circle_color, this.track_label_font_weight[e] = t.track_label_font_weight, this.track_label_left_padding[e] = d(t.track_label_left_padding, 0), this.track_link_url[e] = d(t.link_url, null), this.track_description[e] = d(t.description, ""), this.cell_height[e] = d(t.cell_height, 23), this.track_padding[e] = d(t.track_padding, 5), this.track_has_column_spacing[e] = d(t.has_column_spacing, !0), this.track_tooltip_fn[e] = d(t.tooltipFn, (function (t) {
                return t + ""
            })), this.track_movable[e] = d(t.movable, !0), this.track_removable[e] = d(t.removable, !1), this.track_remove_callback[e] = d(t.removeCallback, (function () {
            })), this.track_remove_option_callback[e] = d(t.onClickRemoveInTrackMenu, (function () {
            })), void 0 !== t.expandCallback && (this.track_expand_callback[e] = t.expandCallback, this.track_expansion_enabled[e] = !0), void 0 !== t.expandButtonTextGetter && (this.track_expand_button_getter[e] = t.expandButtonTextGetter), this.track_can_show_gaps[e] = d(t.track_can_show_gaps, !1), this.track_show_gaps[e] = !1, this.track_sort_cmp_fn[e] = t.sortCmpFn, this.track_sort_direction_changeable[e] = d(t.sort_direction_changeable, !1), this.track_sort_direction_change_callback[e] = d(t.onSortDirectionChange, (function () {
            })), this.track_data[e] = d(t.data, []), this.track_data_id_key[e] = d(t.data_id_key, "id"), this.track_info[e] = d(t.track_info, ""), void 0 !== t.html_label && (this.track_html_label[e] = t.html_label), void 0 !== t.rule_set && (this.rule_sets[t.rule_set.rule_set_id] = t.rule_set, this.rule_set_active_rules[t.rule_set.rule_set_id] = {}, this.track_rule_set_id[e] = t.rule_set.rule_set_id), this.track_active_rules[e] = {}, t.important_ids && this.setTrackImportantIds(e, t.important_ids), this.track_sort_direction[e] = d(t.init_sort_direction, 1), t.target_group = d(t.target_group, 0), this.ensureTrackGroupExists(t.target_group);
            var n = [this.track_groups[t.target_group].tracks];
            "cluster" === this.sort_config.type && this.sort_config.track_group_index === t.target_group && n.push(this.unclustered_track_group_order);
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r],
                    a = void 0 !== t.expansion_of ? o.indexOf(this.getLastExpansion(t.expansion_of)) + 1 : o.length;
                o.splice(a, 0, e)
            }
            if (void 0 !== t.expansion_of) {
                if (this.track_expansion_tracks.hasOwnProperty(t.expansion_of) || (this.track_expansion_tracks[t.expansion_of] = []), -1 !== this.track_expansion_tracks[t.expansion_of].indexOf(e)) throw new Error("Illegal state: duplicate expansion track ID");
                this.track_expansion_parent[e] = t.expansion_of, this.track_expansion_tracks[t.expansion_of].push(e)
            }
            this.track_id_to_datum.update(this, e), this.track_present_ids.update(this, e), this.precomputed_comparator.update(this, e), this.setIdOrder(Object.keys(this.present_ids.get()))
        }, t.prototype.ensureTrackGroupExists = function (t) {
            for (; t >= this.track_groups.length;) this.track_groups.push({tracks: []})
        }, t.prototype._getMajorTrackGroup = function (t, e) {
            var n, r;
            for (r = 0; r < this.track_groups.length; r++) if (this.track_groups[r].tracks.indexOf(t) > -1) {
                n = this.track_groups[r];
                break
            }
            return n ? e ? r : n : null
        }, t.prototype._getEffectiveTrackGroupTracks = function (t) {
            var e, n, r = this, i = this.track_expansion_parent[t];
            return (e = void 0 === i ? null === (n = this._getMajorTrackGroup(t)) ? null : n.tracks.filter((function (t) {
                return void 0 === r.track_expansion_parent[t]
            })) : this.track_expansion_tracks[i]) ? e.slice() : null
        }, t.prototype.isRuleSetUsed = function (t) {
            for (var e = !1, n = this.getTracks(), r = 0; r < n.length; r++) if (this.track_rule_set_id[n[r]] === t) {
                e = !0;
                break
            }
            return e
        }, t.prototype.removeRuleSet = function (t) {
            delete this.rule_sets[t], delete this.rule_set_active_rules[t]
        }, t.prototype.removeTrack = function (t) {
            var e = this.track_rule_set_id[t];
            this.clearTrackActiveRules(t), this.track_remove_callback[t](t), delete this.track_data[t], delete this.track_rule_set_id[t], delete this.track_label[t], delete this.track_link_url[t], delete this.cell_height[t], delete this.track_padding[t], delete this.track_data_id_key[t], delete this.track_tooltip_fn[t], delete this.track_movable[t], delete this.track_removable[t], delete this.track_remove_callback[t], delete this.track_sort_cmp_fn[t], delete this.track_sort_direction_changeable[t], delete this.track_sort_direction[t], delete this.track_info[t], delete this.track_has_column_spacing[t], delete this.track_expansion_enabled[t], delete this.track_expand_callback[t], delete this.track_expand_button_getter[t], delete this.track_expansion_tracks[t], delete this.track_label_circle_color[t], delete this.track_label_font_weight[t], delete this.track_label_left_padding[t];
            var n = this._getMajorTrackGroup(t);
            null !== n && n.tracks.splice(n.tracks.indexOf(t), 1);
            var r = this.track_expansion_tracks[this.track_expansion_parent[t]];
            r && r.splice(r.indexOf(t), 1), this.unclustered_track_group_order && this.unclustered_track_group_order.indexOf(t) > -1 && this.unclustered_track_group_order.splice(this.unclustered_track_group_order.indexOf(t), 1), delete this.track_expansion_parent[t], this.track_tops.update(), this.track_present_ids.update(this, t), this.track_id_to_datum.update(this, t), this.ids_after_a_gap.update(this), this.setIdOrder(Object.keys(this.present_ids.get())), this.isRuleSetUsed(e) || this.removeRuleSet(e)
        }, t.prototype.getOverlappingCells = function (t, e) {
            var n = this.getIdOrder(), r = this.getZoomedColumnLeft(), o = i(n, t, (function (t) {
                return r[t]
            }), !0);
            if (-1 === o) return null;
            var a = this.getTracks(), s = this.getCellTops(), l = i(a, e, (function (t) {
                return s[t]
            }), !0);
            if (-1 === l) return null;
            var u = a[l];
            if (e >= s[u] + this.getCellHeight(u)) return null;
            var c, h, f, d = [], p = this.getCellWidth();
            this.getTrackHasColumnSpacing(u) || (p += this.getCellPadding());
            for (var g = o; g < n.length; g++) if (c = [r[n[g]], r[n[g]] + p], h = t, f = void 0, f = c[0], !(c[1] < h) && f < h + 1) d.push(n[g]); else if (r[n[g]] > t + 1) break;
            return d.length > 0 ? {ids: d, track: u, top: s[u], left: r[d[0]]} : null
        }, t.prototype.getTrackDatum = function (t, e) {
            var n = this.track_id_to_datum.get()[t];
            return n && n[e] || null
        }, t.prototype.getTrackTops = function (t) {
            return void 0 === t ? C(this.track_tops.get()) : this.track_tops.get()[t]
        }, t.prototype.getZoomedTrackTops = function (t) {
            return void 0 === t ? C(this.track_tops_zoomed.get()) : this.track_tops_zoomed.get()[t]
        }, t.prototype.getZoomedHeaderTops = function (t) {
            return void 0 === t ? C(this.header_tops_zoomed.get()) : this.header_tops_zoomed.get()[t]
        }, t.prototype.getCellTops = function (t, e) {
            return void 0 === t ? C((e ? this.cell_tops : this.cell_tops_zoomed).get()) : (e ? this.cell_tops : this.cell_tops_zoomed).get()[t]
        }, t.prototype.getLabelTops = function (t, e) {
            return void 0 === t ? C((e ? this.label_tops : this.label_tops_zoomed).get()) : (e ? this.label_tops : this.label_tops_zoomed).get()[t]
        }, t.prototype.getContainingTrackGroup = function (t) {
            return this._getEffectiveTrackGroupTracks(t)
        }, t.prototype.getContainingTrackGroupIndex = function (t) {
            return this._getMajorTrackGroup(t, !0)
        }, t.prototype.getTrackGroups = function () {
            return this.track_groups
        }, t.prototype.getTracks = function () {
            for (var t = [], e = 0; e < this.track_groups.length; e++) t.push.apply(t, this.track_groups[e].tracks);
            return t
        }, t.prototype.getColumnLeft = function (t) {
            return void 0 === t ? this.column_left.get() : this.column_left.get()[t]
        }, t.prototype.getColumnLeftNoPadding = function (t) {
            return void 0 === t ? this.column_left_no_padding.get() : this.column_left_no_padding.get()[t]
        }, t.prototype.getZoomedColumnLeft = function (t) {
            return void 0 === t ? this.zoomed_column_left.get() : this.zoomed_column_left.get()[t]
        }, t.prototype.getOncoprintHeight = function (t) {
            var e = this.getTracks(), n = e[e.length - 1];
            return (t ? this.getTrackTops(n) : this.getZoomedTrackTops(n)) + this.getTrackHeight(n, t) + this.getBottomPadding()
        }, t.prototype.getOncoprintWidth = function (t) {
            var e = this.getIdOrder(), n = e[e.length - 1];
            return (t ? this.getColumnLeft(n) : this.getZoomedColumnLeft(n)) + this.getCellWidth(t) + 1
        }, t.prototype.getOncoprintWidthNoColumnPaddingNoGaps = function () {
            return this.getIdOrder().length * this.getCellWidth(!0)
        }, t.prototype.getColumnLabels = function () {
            return this.column_labels
        }, t.prototype.setColumnLabels = function (t) {
            this.column_labels = t
        }, t.prototype.moveTrack = function (t, e) {
            function n(t, e, n, r) {
                var i = t.indexOf(e), o = t.indexOf(n), a = t.slice(i, o + 1);
                t.splice(i, a.length);
                var s = null === r ? 0 : t.indexOf(r) + 1;
                t.splice.bind(t, s, 0).apply(null, a)
            }

            var r, i = this._getMajorTrackGroup(t), o = this.track_expansion_parent[t];
            null !== i && (r = void 0 !== o && null === e ? o : this.getLastExpansion(e), n(i.tracks, t, this.getLastExpansion(t), r)), void 0 !== this.track_expansion_parent[t] && n(this.track_expansion_tracks[o], t, t, e), this.track_tops.update()
        }, t.prototype.getTrackLabel = function (t) {
            return this.track_label[t]
        }, t.prototype.getTrackSublabel = function (t) {
            return this.track_sublabel[t]
        }, t.prototype.getShowTrackSublabels = function () {
            return this.show_track_sublabels
        }, t.prototype.setShowTrackSublabels = function (t) {
            return this.show_track_sublabels = t
        }, t.prototype.getTrackLabelColor = function (t) {
            return this.track_label_color[t]
        }, t.prototype.getTrackLabelCircleColor = function (t) {
            return this.track_label_circle_color[t]
        }, t.prototype.getTrackLabelFontWeight = function (t) {
            return this.track_label_font_weight[t]
        }, t.prototype.getTrackLabelLeftPadding = function (t) {
            return this.track_label_left_padding[t]
        }, t.prototype.getOptionalHtmlTrackLabel = function (t) {
            return this.track_html_label[t]
        }, t.prototype.getTrackLinkUrl = function (t) {
            return this.track_link_url[t]
        },t.prototype.getTrackDescription = function (t) {
            return this.track_description[t]
        },t.prototype.getTrackTooltipFn = function (t) {
            return this.track_tooltip_fn[t]
        },t.prototype.setTrackTooltipFn = function (t, e) {
            this.track_tooltip_fn[t] = e
        },t.prototype.getTrackDataIdKey = function (t) {
            return this.track_data_id_key[t]
        },t.prototype.getTrackGroupPadding = function (t) {
            return this.track_group_padding * (t ? 1 : this.vert_zoom)
        },t.prototype.isTrackRemovable = function (t) {
            return this.track_removable[t]
        },t.prototype.getTrackRemoveOptionCallback = function (t) {
            return this.track_remove_option_callback[t]
        },t.prototype.isTrackSortDirectionChangeable = function (t) {
            return this.track_sort_direction_changeable[t]
        },t.prototype.isTrackExpandable = function (t) {
            return Boolean(this.track_expansion_enabled[t])
        },t.prototype.expandTrack = function (t) {
            return this.track_expand_callback[t](t)
        },t.prototype.disableTrackExpansion = function (t) {
            this.track_expansion_enabled[t] = !1
        },t.prototype.enableTrackExpansion = function (t) {
            if (!this.track_expand_callback.hasOwnProperty(t)) throw new Error("Track '" + t + "' has no expandCallback");
            this.track_expansion_enabled[t] = !0
        },t.prototype.isTrackExpanded = function (t) {
            return this.track_expansion_tracks.hasOwnProperty(t) && this.track_expansion_tracks[t].length > 0
        },t.prototype.getExpandButtonText = function (t) {
            var e = this;
            return function (t) {
                return e.track_expand_button_getter[t] || function (t) {
                    return t ? "Expand more" : "Expand"
                }
            }(t)(this.isTrackExpanded(t))
        },t.prototype.isExpansionOf = function (t, e) {
            return this.track_expansion_tracks.hasOwnProperty(e) && -1 !== this.track_expansion_tracks[e].indexOf(t)
        },t.prototype.getLastExpansion = function (t) {
            for (var e = this.track_expansion_tracks[t]; e && e.length;) t = e[e.length - 1], e = this.track_expansion_tracks[t];
            return t
        },t.prototype.getTrackCustomOptions = function (t) {
            return this.track_custom_options[t]
        },t.prototype.setTrackCustomOptions = function (t, e) {
            this.track_custom_options[t] = e
        },t.prototype.setTrackInfoTooltip = function (t, e) {
            this.$track_info_tooltip_elt[t] = e
        },t.prototype.$getTrackInfoTooltip = function (t) {
            return this.$track_info_tooltip_elt[t]
        },t.prototype.getRuleSet = function (t) {
            return this.rule_sets[this.track_rule_set_id[t]]
        },t.prototype.shareRuleSet = function (t, e) {
            this.setTrackActiveRules(e, {});
            var n = this.track_rule_set_id[e];
            this.track_rule_set_id[e] = this.track_rule_set_id[t], this.isRuleSetUsed(n) || this.removeRuleSet(n)
        },t.prototype.setRuleSet = function (t, e) {
            this.setTrackActiveRules(t, {});
            var n = this.track_rule_set_id[t];
            this.rule_sets[e.rule_set_id] = e, this.rule_set_active_rules[e.rule_set_id] = {}, this.track_rule_set_id[t] = e.rule_set_id, this.isRuleSetUsed(n) || this.removeRuleSet(n)
        },t.prototype.getTrackSortComparator = function (t) {
            return this.track_sort_cmp_fn[t]
        },t.prototype.setTrackSortComparator = function (t, e) {
            this.track_sort_cmp_fn[t] = e, this.precomputed_comparator.update(this, t)
        },t.prototype.getTrackData = function (t) {
            return this.track_data[t]
        },t.prototype.clusterTrackGroup = function (t, e) {
            var n, r = h(this.sort_config), i = this, o = new c.a.Deferred, a = {}, s = this.getTrackGroups()[t],
                u = [];
            void 0 !== s && (u = this._getEffectiveTrackGroupTracks(s.tracks[0]) || []);
            for (var f = 0; f < u.length; f++) for (var d = u[f], p = this.getTrackDataIdKey(d), g = this.getTrackData(d), _ = 0; _ < g.length; _++) {
                var m = g[_][p], v = e(g[_]);
                a[m] = a[m] || {}, a[m][d] = v
            }
            return Object.keys(a).length ? (c.a.when((n = a, l(n, "CASES")), function (t) {
                return l(t, "ENTITIES")
            }(a)).then((function (e, n) {
                if (k.a.isEqual(i.sort_config, r)) {
                    i.setIdOrder(e.map((function (t) {
                        return t.caseId
                    })));
                    var a = n.map((function (t) {
                        return parseInt(t.entityId, 10)
                    })), s = [];
                    a.forEach((function (t) {
                        s.push(t), Array.prototype.push.apply(s, i.track_expansion_tracks[t] || [])
                    })), i.unclustered_track_group_order || (i.unclustered_track_group_order = u), o.resolve({
                        track_group_index: t,
                        track_id_order: s
                    })
                }
            })).fail((function () {
                o.reject()
            })), o.promise()) : o.resolve().promise()
        },t.prototype.setTrackData = function (t, e, n) {
            this.track_data[t] = e, this.track_data_id_key[t] = n, this.track_id_to_datum.update(this, t), this.track_present_ids.update(this, t), this.setIdOrder(Object.keys(this.present_ids.get())), this.precomputed_comparator.update(this, t)
        },t.prototype.setTrackGroupLegendOrder = function (t) {
            this.track_group_legend_order = t.slice()
        },t.prototype.getTrackGroupLegendOrder = function () {
            return this.track_group_legend_order
        },t.prototype.setTrackGroupSortPriority = function (t) {
            this.track_group_sort_priority = t, this.sort()
        },t.prototype.sortAlphabetical = function () {
            var t = this.getIdOrder(!0).slice();
            t.sort((function (t, e) {
                return t.localeCompare(e)
            })), this.setIdOrder(t)
        },t.prototype.sortByTracks = function () {
            var t = this.track_group_sort_priority, e = this.getTrackGroups(),
                n = (t.length < e.length ? e : t.map((function (t) {
                    return e[t]
                }))).reduce((function (t, e) {
                    return t.concat(e.tracks)
                }), []), r = this.precomputed_comparator.get();

            function i(t) {
                for (var e = [], i = [], o = 0; o < n.length; o++) {
                    var a = r[n[o]].getSortValue(t);
                    e.push(a.mandatory), i.push(a.preferred)
                }
                return e.concat(i)
            }

            var o = m(this.getIdOrder(!0).map((function (t) {
                return {id: t, vector: i(t)}
            })), (function (t) {
                return t.vector
            }));
            this.setIdOrder(o.map((function (t) {
                return t.id
            })))
        },t.prototype.sort = function () {
            var t = new c.a.Deferred;
            return this.sort_config = this.sort_config || {}, "alphabetical" === this.sort_config.type ? (this.sortAlphabetical(), t.resolve()) : "order" === this.sort_config.type ? (this.setIdOrder(this.sort_config.order), t.resolve()) : "cluster" === this.sort_config.type ? this.clusterTrackGroup(this.sort_config.track_group_index, this.sort_config.clusterValueFn).then((function (e) {
                t.resolve(e)
            })) : (this.sortByTracks(), t.resolve()), t.promise()
        },t.prototype.setSortConfig = function (t) {
            "cluster" !== this.sort_config.type || "cluster" === t.type && t.track_group_index === this.sort_config.track_group_index || this.restoreClusteredTrackGroupOrder(), this.sort_config = t
        },t.prototype.getTrackMovable = function (t) {
            return this.track_movable[t]
        },t.prototype.setTrackMovable = function (t, e) {
            this.track_movable[t] = e
        },t.prototype.isTrackInClusteredGroup = function (t) {
            return "cluster" === this.sort_config.type && this.sort_config.track_group_index === this.getContainingTrackGroupIndex(t)
        },t
    }(), z = n(1), O = n.n(z);

    function L(t, e) {
        var n = document.createElementNS("http://www.w3.org/2000/svg", t);
        for (var r in e) e.hasOwnProperty(r) && n.setAttribute(r, e[r]);
        return n
    }

    function R(t) {
        var e = [0, 0, 0, 1];
        "#" === t[0] && (t = "rgba(" + parseInt(t[1] + t[2], 16) + "," + parseInt(t[3] + t[4], 16) + "," + parseInt(t[5] + t[6], 16) + ",1)");
        var n = t.match(/^[\s]*rgba\([\s]*([0-9.]+)[\s]*,[\s]*([0-9.]+)[\s]*,[\s]*([0-9.]+)[\s]*,[\s]*([0-9.]+)[\s]*\)[\s]*$/);
        return n && 5 === n.length && (e = [parseFloat(n[1]) / 255, parseFloat(n[2]) / 255, parseFloat(n[3]) / 255, parseFloat(n[4])]), e
    }

    function E(t) {
        if (t.indexOf("rgb(") > -1) return {rgb: t, opacity: 1};
        var e = R(t);
        return {rgb: "rgb(" + 255 * e[0] + "," + 255 * e[1] + "," + 255 * e[2] + ")", opacity: e[3]}
    }

    function F(t, e, n) {
        var r = t.type;
        return "rectangle" === r ? function (t, e, n) {
            var r = E(t.stroke), i = E(t.fill);
            return L("rect", {
                width: t.width,
                height: t.height,
                x: t.x + e,
                y: t.y + n,
                stroke: r.rgb,
                "stroke-opacity": r.opacity,
                "stroke-width": t["stroke-width"],
                fill: i.rgb,
                "fill-opacity": i.opacity
            })
        }(t, e, n) : "triangle" === r ? function (t, e, n) {
            var r = E(t.stroke), i = E(t.fill);
            return L("polygon", {
                points: [[t.x1 + e, t.y1 + n], [t.x2 + e, t.y2 + n], [t.x3 + e, t.y3 + n]].map((function (t) {
                    return t[0] + "," + t[1]
                })).join(" "),
                stroke: r.rgb,
                "stroke-opacity": r.opacity,
                "stroke-width": t["stroke-width"],
                fill: i.rgb,
                "fill-opacity": i.opacity
            })
        }(t, e, n) : "ellipse" === r ? function (t, e, n) {
            var r = E(t.stroke), i = E(t.fill);
            return L("ellipse", {
                rx: t.width / 2,
                height: t.height / 2,
                cx: t.x + e,
                cy: t.y + n,
                stroke: r.rgb,
                "stroke-opacity": r.opacity,
                "stroke-width": t["stroke-width"],
                fill: i.rgb,
                "fill-opacity": i.opacity
            })
        }(t, e, n) : "line" === r ? function (t, e, n) {
            var r = E(t.stroke);
            return L("line", {
                x1: t.x1 + e,
                y1: t.y1 + n,
                x2: t.x2 + e,
                y2: t.y2 + n,
                stroke: r.rgb,
                "stroke-opacity": r.opacity,
                "stroke-width": t["stroke-width"]
            })
        }(t, e, n) : void 0
    }

    function N(t) {
        if (t.indexOf("rgb(") > -1 || t.indexOf("url(") > -1) return {rgb: t, opacity: 1};
        var e = R(t);
        return {
            rgb: "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")",
            opacity: e[3]
        }
    }

    var P, j = (P = 0, function () {
        return P += 1
    }), H = {
        text: function (t, e, n, r, i, o, a, s, l) {
            var u = r = r || 12;
            "middle" === a ? u = r / 2 : "bottom" === a && (u = 0);
            var c = L("text", {
                x: e || 0,
                y: (n || 0) + u,
                "font-size": r,
                "font-family": i || "serif",
                "font-weight": o || "normal",
                "text-anchor": "start",
                fill: s,
                "text-decoration": l
            });
            return c.textContent = t + "", c
        }, group: function (t, e) {
            return L("g", {transform: "translate(" + (t = t || 0) + "," + (e = e || 0) + ")"})
        }, svg: function (t, e) {
            return L("svg", {width: t || 0, height: e || 0})
        }, wrapText: function (t, e) {
            var n = t.textContent;
            t.textContent = "";
            var r = n.split(" "), i = 0, o = L("tspan", {x: "0", dy: i});
            t.appendChild(o);
            for (var a = [], s = 0; s < r.length; s++) a.push(r[s]), o.textContent = a.join(" "), o.getComputedTextLength() > e && (o.textContent = a.slice(0, a.length - 1).join(" "), i = t.getBBox().height, a = [r[s]], o = L("tspan", {
                x: "0",
                dy: i
            }), t.appendChild(o), o.textContent = r[s])
        }, fromShape: function (t, e, n) {
            return F(t, e, n)
        }, polygon: function (t, e) {
            var n = N(e);
            return L("polygon", {points: t, fill: n.rgb, "fill-opacity": n.opacity})
        }, rect: function (t, e, n, r, i) {
            var o = N(i);
            return L("rect", {x: t, y: e, width: n, height: r, fill: o.rgb, "fill-opacity": o.opacity})
        }, bgrect: function (t, e, n) {
            var r = N(n);
            return L("rect", {width: t, height: e, fill: r.rgb, "fill-opacity": r.opacity})
        }, path: function (t, e, n, r) {
            var i, o, a = t.map((function (t) {
                return t.join(",")
            }));
            a[0] = "M" + t[0];
            for (var s = 1; s < t.length; s++) a[s] = "L" + t[s];
            return r || (i = N(e), o = N(n)), L("path", {
                d: a.join(" "),
                stroke: r ? "url(#" + r.getAttribute("id") + ")" : i.rgb,
                "stroke-opacity": r ? 0 : i.opacity,
                fill: r ? "url(#" + r.getAttribute("id") + ")" : o.rgb,
                "fill-opacity": r ? 1 : o.opacity
            })
        }, stop: function (t, e) {
            var n = N(e);
            return L("stop", {offset: t + "%", "stop-color": n.rgb, "stop-opacity": n.opacity})
        }, linearGradient: function () {
            return L("linearGradient", {id: "linearGradient" + j()})
        }, defs: function () {
            return L("defs", {})
        }, gradient: function (t) {
            for (var e = L("linearGradient", {
                id: "gradient" + j(),
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 0
            }), n = 0; n <= 100; n++) e.appendChild(this.stop(n, t(n / 100)));
            return e
        }
    }, V = Math.sqrt(2) / 2;

    function B(t) {
        var e = [0, 0, 0, 1];
        "#" === t[0] && (t = "rgba(" + parseInt(t[1] + t[2], 16) + "," + parseInt(t[3] + t[4], 16) + "," + parseInt(t[5] + t[6], 16) + ",1)");
        var n = t.match(/^[\s]*rgba\([\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*,[\s]*([0-9.]+)[\s]*\)[\s]*$/);
        return n && 5 === n.length && (e = [parseFloat(n[1]) / 255, parseFloat(n[2]) / 255, parseFloat(n[3]) / 255, parseFloat(n[4])]), e
    }

    var q, G = function (t, e, n) {
            var r = t.type;
            return "rectangle" === r ? function (t, e, n) {
                var r = t.x, i = t.y, o = t.height, a = t.width, s = B(t.fill);
                n([r, i, e], s), n([r + a, i, e], s), n([r + a, i + o, e], s), n([r, i, e], s), n([r + a, i + o, e], s), n([r, i + o, e], s);
                var l = t["stroke-width"];
                if (l > 0) {
                    var u = B(t.stroke);
                    n([r, i, e], u), n([r + l, i, e], u), n([r + l, i + o, e], u), n([r, i, e], u), n([r + l, i + o, e], u), n([r, i + o, e], u), n([r + a, i, e], u), n([r + a - l, i, e], u), n([r + a - l, i + o, e], u), n([r + a, i, e], u), n([r + a - l, i + o, e], u), n([r + a, i + o, e], u), n([r, i, e], u), n([r + a, i, e], u), n([r + a, i + l, e], u), n([r, i, e], u), n([r + a, i + l, e], u), n([r, i + l, e], u), n([r, i + o, e], u), n([r + a, i + o, e], u), n([r + a, i + o - l, e], u), n([r, i + o, e], u), n([r + a, i + o - l, e], u), n([r, i + o - l, e], u)
                }
            }(t, e, n) : "triangle" === r ? function (t, e, n) {
                var r = B(t.fill);
                n([t.x1, t.y1, e], r), n([t.x2, t.y2, e], r), n([t.x3, t.y3, e], r)
            }(t, e, n) : "ellipse" === r ? function (t, e, n) {
                var r = {x: t.x + t.width / 2, y: t.y + t.height / 2}, i = t.width / 2, o = t.height / 2, a = B(t.fill);
                n([r.x, r.y, e], a), n([r.x + i, r.y, e], a), n([r.x + V * i, r.y + V * o, e], a), n([r.x, r.y, e], a), n([r.x + V * i, r.y + V * o, e], a), n([r.x, r.y + o, e], a), n([r.x, r.y, e], a), n([r.x, r.y + o, e], a), n([r.x - V * i, r.y + V * o, e], a), n([r.x, r.y, e], a), n([r.x - V * i, r.y + V * o, e], a), n([r.x - i, r.y, e], a), n([r.x, r.y, e], a), n([r.x - i, r.y, e], a), n([r.x - V * i, r.y - V * o, e], a), n([r.x, r.y, e], a), n([r.x - V * i, r.y - V * o, e], a), n([r.x, r.y - o, e], a), n([r.x, r.y, e], a), n([r.x, r.y - o, e], a), n([r.x + V * i, r.y - V * o, e], a), n([r.x, r.y, e], a), n([r.x + V * i, r.y - V * o, e], a), n([r.x + i, r.y, e], a)
            }(t, e, n) : "line" === r ? function (t, e, n) {
                var r = t.x1, i = t.x2, o = t.y1, a = t.y2;
                if (r !== i && Math.min(r, i) === i) {
                    var s = r, l = o;
                    r = i, o = a, i = s, a = l
                }
                var u = [a - o, r - i], c = Math.sqrt(u[0] * u[0] + u[1] * u[1]), h = [u[0] / c, u[1] / c],
                    f = t["stroke-width"] / 2, d = [h[0] * f, h[1] * f], p = [-1 * d[0], -1 * d[1]],
                    g = [r + d[0], o + d[1]], _ = [r + p[0], o + p[1]], m = [i + d[0], a + d[1]], v = [i + p[0], a + p[1]],
                    y = B(t.stroke);
                n([g[0], g[1], e], y), n([_[0], _[1], e], y), n([m[0], m[1], e], y), n([m[0], m[1], e], y), n([v[0], v[1], e], y), n([_[0], _[1], e], y)
            }(t, e, n) : void 0
        }, W = (q = function (t, e) {
            return (q = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }

            q(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), U = {
            width: 100,
            height: 100,
            x: 0,
            y: 0,
            z: 0,
            x1: 0,
            x2: 0,
            x3: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            stroke: "rgba(0,0,0,0)",
            fill: "rgba(23,23,23,1)",
            "stroke-width": 0,
            "stroke-opacity": 0
        }, Z = {width: 0, x: 0, x1: 0, x2: 0, x3: 0, height: 1, y: 1, y1: 1, y2: 1, y3: 1},
        Y = ["width", "height", "x", "y", "z", "x1", "x2", "x3", "y1", "y2", "y3", "stroke", "fill", "stroke-width", "stroke-opacity", "type"];

    function X(t) {
        return t in Z
    }

    var J, Q = function () {
        function t(t) {
            this.params = t, this.params_with_type = {}, this.instanceCache = {
                lastComputedParams: null,
                lastWidth: -1,
                lastHeight: -1
            }, this.completeWithDefaults(), this.markParameterTypes()
        }

        return t.hashComputedShape = function (t, e) {
            return Y.reduce((function (e, n) {
                return e + "," + t[n]
            }), "") + "," + e
        }, t.getCachedShape = function (e) {
            var n = t.hashComputedShape(e);
            return t.cache[n] = t.cache[n] || Object.freeze(e), t.cache[n]
        }, t.prototype.getRequiredParameters = function () {
            throw"Not defined for base class"
        }, t.prototype.completeWithDefaults = function () {
            for (var t = this.getRequiredParameters(), e = 0; e < t.length; e++) {
                var n = t[e];
                this.params[n] = void 0 === this.params[n] ? U[n] : this.params[n]
            }
        }, t.prototype.markParameterTypes = function () {
            for (var t = Object.keys(this.params), e = !0, n = 0; n < t.length; n++) {
                var r = t[n], i = this.params[r];
                "function" == typeof i ? (this.params_with_type[r] = {
                    type: "function",
                    value: i
                }, e = !1) : this.params_with_type[r] = {type: "value", value: i}
            }
            this.onlyDependsOnWidthAndHeight = e
        }, t.prototype.getComputedParams = function (e, n, r) {
            if (this.onlyDependsOnWidthAndHeight && this.instanceCache.lastWidth === n && this.instanceCache.lastHeight === r) return this.instanceCache.lastComputedParams;
            for (var i = {}, o = Object.keys(this.params_with_type), a = [n, r], s = 0; s < o.length; s++) {
                var l = o[s], u = this.params_with_type[l], c = u.value;
                "type" !== l && ("function" === u.type && (c = c(e)), X(l) && (c = c / 100 * a[Z[l]])), i[l] = c
            }
            return this.onlyDependsOnWidthAndHeight && (this.instanceCache.lastHeight = r, this.instanceCache.lastWidth = n, this.instanceCache.lastComputedParams = t.getCachedShape(i)), t.getCachedShape(i)
        }, t.cache = {}, t
    }(), K = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return W(e, t), e.prototype.getRequiredParameters = function () {
            return ["width", "height", "x", "y", "z", "stroke", "fill", "stroke-width"]
        }, e
    }(Q), tt = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return W(e, t), e.prototype.getRequiredParameters = function () {
            return ["x1", "x2", "x3", "y1", "y2", "y3", "z", "stroke", "fill", "stroke-width"]
        }, e
    }(Q), et = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return W(e, t), e.prototype.getRequiredParameters = function () {
            return ["width", "height", "x", "y", "z", "stroke", "fill", "stroke-width"]
        }, e
    }(Q), nt = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return W(e, t), e.prototype.getRequiredParameters = function () {
            return ["x1", "x2", "y1", "y2", "z", "stroke", "stroke-width"]
        }, e
    }(Q), rt = function () {
        function t(t, e, n, r, i, a, s, l, u, h) {
            this.$container = t, this.$canvas = e, this.$overlay_canvas = n, this.$column_label_canvas = r, this.$dummy_scroll_div_contents = i, this.tooltip = s, this.highlight_area_callback = l, this.position_bit_pack_base = 128, this.supersampling_ratio = 2, this.antialias_on_cell_width_thresh = 5, this.antialias = !0, this.scroll_x = 0, this.scroll_y = 0, this.maximum_column_label_width = 0, this.maximum_column_label_height = 0, this.rendering_suppressed = !1, this.identified_shape_list_list = {}, this.vertex_data = {}, this.vertex_column_array = {}, this.vertex_position_buffer = {}, this.vertex_color_buffer = {}, this.vertex_column_buffer = {}, this.color_texture = {}, this.id_to_first_vertex_index = {}, this.getWebGLContextAndSetUpMatrices(), this.setUpShaders(a), this.getOverlayContextAndClear(), this.visible_area_width = e[0].width;
            var f = this;
            this.tooltip.center = !0, this.scroll_x = 0, this.scroll_y = 0, this.dummy_scroll_div_client_size = new o({
                width: i.parent()[0].clientWidth,
                height: i.parent()[0].clientHeight
            }, (function () {
                return {width: i.parent()[0].clientWidth, height: i.parent()[0].clientHeight}
            })), this.highlight_area_callback = void 0 === l ? function () {
            } : l, function (t) {
                var e, n, r = !1, i = null;

                function o(t, e) {
                    return Math.abs(t - e) >= 10
                }

                function l(i) {
                    if (r) if (r = !1, o(e, n)) {
                        var s = Math.min(e, n), l = Math.max(e, n);
                        t.highlight_area_callback(s + t.scroll_x, l + t.scroll_x)
                    } else if (i) {
                        var u = t.$overlay_canvas.offset(), c = i.pageX - u.left, f = i.pageY - u.top,
                            d = a.getOverlappingCells(c + t.scroll_x, f + t.scroll_y);
                        null === d ? h(null) : h(d.ids[0], d.track)
                    }
                }

                function f(e, n) {
                    var r = t.$overlay_canvas.offset(), i = t.$overlay_canvas.width(), o = t.$overlay_canvas.height();
                    return e >= r.left && e < i + r.left && n >= r.top && n < o + r.top
                }

                t.mouseMoveHandler = function (e) {
                    f(e.pageX, e.pageY) || (t.clearOverlay(), t.highlightHighlightedIds(a), t.highlightHighlightedTracks(a), s.hide(), null !== i && (i = null, u(null)))
                }, c()(document).on("mousemove", t.mouseMoveHandler), t.$overlay_canvas.on("mousemove", (function (l) {
                    if (!t.rendering_suppressed) {
                        t.clearOverlay();
                        var c = t.$overlay_canvas.offset(), h = l.pageX - c.left, f = l.pageY - c.top,
                            d = a.getOverlappingCells(h + t.scroll_x, f + t.scroll_y);
                        if (r) {
                            d = null, n = h;
                            var p = Math.min(h, e), g = Math.max(h, e),
                                _ = o(e, n) ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.2)";
                            t.overlayFillRect(p, 0, g - p, t.getVisibleAreaHeight(a), _)
                        } else {
                            var m = null === d ? null : d.ids.map((function (t) {
                                return a.getTrackDatum(d.track, t)
                            }));
                            if (null !== m) {
                                i = d, u(d.ids[0], d.track), t.highlightCell(a, d.track, d.ids[0]), t.highlightColumn(a, d.ids[0]);
                                var v = t.$overlay_canvas[0].getBoundingClientRect();
                                s.show(250, a.getZoomedColumnLeft(d.ids[0]) + a.getCellWidth() / 2 + v.left - t.scroll_x, a.getCellTops(d.track) + v.top - t.scroll_y, a.getTrackTooltipFn(d.track)(m))
                            } else s.hideIfNotAlreadyGoingTo(150), d = null
                        }
                        null === d && (i = null, u(null)), t.highlightHighlightedIds(a, d ? d.ids : []), t.highlightHighlightedTracks(a)
                    }
                })), t.$overlay_canvas.on("mousedown", (function (i) {
                    f(i.pageX, i.pageY) && (r = !0, e = i.pageX - t.$overlay_canvas.offset().left, n = e, s.hide())
                })), t.$overlay_canvas.on("mouseup", (function (t) {
                    f(t.pageX, t.pageY) && l(t)
                })), t.$overlay_canvas.on("mouseleave", (function (t) {
                    l()
                }))
            }(this), i.parent().scroll((function () {
                f.clearOverlay(), f.highlightHighlightedIds(a), f.highlightHighlightedTracks(a)
            }))
        }

        return t.prototype.getNewCanvas = function () {
            var t = this.$canvas[0], e = t.cloneNode(), n = t.parentNode;
            n.removeChild(t), n.insertBefore(e, n.childNodes[0]), this.$canvas = c()(e), this.ctx = null
        }, t.prototype.getWebGLCanvasContext = function () {
            try {
                var t = this.$canvas[0],
                    e = this.ctx || t.getContext("experimental-webgl", {alpha: !1, antialias: this.antialias});
                return e.clearColor(1, 1, 1, 1), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.viewportWidth = t.width, e.viewportHeight = t.height, e.viewport(0, 0, e.viewportWidth, e.viewportHeight), e.enable(e.DEPTH_TEST), e.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), e.depthMask(!1), e
            } catch (t) {
                return null
            }
        }, t.prototype.createShaderProgram = function (t, e) {
            var n = this.ctx.createProgram();
            if (this.ctx.attachShader(n, t), this.ctx.attachShader(n, e), this.ctx.linkProgram(n), !this.ctx.getProgramParameter(n, this.ctx.LINK_STATUS)) {
                var r = this.ctx.getProgramInfoLog(n);
                throw this.ctx.deleteProgram(n), "Unable to link shader program: " + r
            }
            return n
        }, t.prototype.createShader = function (t, e) {
            var n = this.ctx.createShader(this.ctx[e]);
            if (this.ctx.shaderSource(n, t), this.ctx.compileShader(n), !this.ctx.getShaderParameter(n, this.ctx.COMPILE_STATUS)) {
                var r = this.ctx.getShaderInfoLog(n);
                throw this.ctx.deleteShader(n), "Unable to compile shader: " + r
            }
            return n
        }, t.prototype.overlayStrokeRect = function (t, e, n, r, i) {
            var o = this.overlay_ctx;
            o.strokeStyle = i, o.strokeWidth = 10, o.strokeRect(this.supersampling_ratio * t, this.supersampling_ratio * e, this.supersampling_ratio * n, this.supersampling_ratio * r)
        }, t.prototype.overlayFillRect = function (t, e, n, r, i) {
            var o = this.overlay_ctx;
            o.fillStyle = i, o.fillRect(this.supersampling_ratio * t, this.supersampling_ratio * e, this.supersampling_ratio * n, this.supersampling_ratio * r)
        }, t.prototype.clearOverlay = function () {
            this.overlay_ctx.fillStyle = "rgba(0,0,0,0)", this.overlay_ctx.clearRect(0, 0, this.$overlay_canvas[0].width, this.$overlay_canvas[0].height)
        }, t.prototype.getOverlayContextAndClear = function () {
            this.overlay_ctx = this.$overlay_canvas[0].getContext("2d"), this.clearOverlay()
        }, t.prototype.getColumnLabelsContext = function () {
            this.column_label_ctx = this.$column_label_canvas[0].getContext("2d")
        }, t.prototype.getColumnLabelY = function (t) {
            return (t.getOncoprintHeight() + 10 - this.scroll_y) * this.supersampling_ratio
        }, t.prototype.overlayColumnLabelHighlight = function (t, e) {
            var n = t.getColumnLabels()[e];
            if (n) {
                this.prepareContextForColumnLabelText(t, this.overlay_ctx);
                var r = t.getCellWidth(), i = (n.left_padding_percent || 0) * r / 100, o = r * this.supersampling_ratio,
                    a = this.overlay_ctx.measureText(n.text).width + i * this.supersampling_ratio + 20,
                    s = i * this.supersampling_ratio;
                if (n.circle_color) {
                    var l = 2 * this.getColumnLabelCircleSpec(t).radius * this.supersampling_ratio;
                    o = Math.max(o, l), a = Math.max(a, l), s = Math.min(s, -l / 2)
                }
                var u = (t.getZoomedColumnLeft(e) + r / 2 - this.scroll_x) * this.supersampling_ratio,
                    c = this.getColumnLabelY(t);
                this.overlay_ctx.save(), this.overlay_ctx.translate(u, c);
                var h = this.getColumnLabelAngleRadians(n);
                this.overlay_ctx.rotate(h), this.overlay_ctx.fillStyle = "rgba(255,255,0,0.4)", this.overlay_ctx.fillRect(s, -o / 2, a, o), this.overlay_ctx.restore()
            }
        }, t.prototype.getWebGLContextAndSetUpMatrices = function () {
            this.ctx = this.getWebGLCanvasContext(), function (t) {
                var e = O.a.mat4.create();
                O.a.mat4.lookAt(e, [0, 0, 1], [0, 0, 0], [0, 1, 0]), t.mvMatrix = e;
                var n = O.a.mat4.create();
                O.a.mat4.ortho(n, 0, t.ctx.viewportWidth, t.ctx.viewportHeight, 0, -5, 1e3), t.pMatrix = n
            }(this)
        }, t.prototype.getColumnIndexesAfterAGap = function (t) {
            return t.getColumnIndexesAfterAGap().concat([Number.POSITIVE_INFINITY])
        }, t.prototype.setUpShaders = function (t) {
            var e = this.getColumnIndexesAfterAGap(t).length,
                n = "\n            precision highp float;\n            attribute float aPosVertex;\n            attribute float aColVertex;\n            attribute float aVertexOncoprintColumn;\n\n            uniform float gapSize;\n\n            uniform float columnsRightAfterGaps[" + e + "]; // sorted in ascending order\n\n            uniform float columnWidth;\n            uniform float scrollX;\n            uniform float zoomX;\n            uniform float scrollY;\n            uniform float zoomY;\n            uniform mat4 uMVMatrix;\n            uniform mat4 uPMatrix;\n            uniform float offsetY;\n            uniform float supersamplingRatio;\n            uniform float positionBitPackBase;\n            uniform float texSize;\n            varying float texCoord;\n\n            vec3 getUnpackedPositionVec3() {\n            \tfloat pos0 = floor(aPosVertex / (positionBitPackBase * positionBitPackBase));\n            \tfloat pos0Contr = pos0 * positionBitPackBase * positionBitPackBase;\n            \tfloat pos1 = floor((aPosVertex - pos0Contr)/positionBitPackBase);\n            \tfloat pos1Contr = pos1 * positionBitPackBase;\n            \tfloat pos2 = aPosVertex - pos0Contr - pos1Contr;\n            \treturn vec3(pos0, pos1, pos2);\n            }\n\n            float getGapOffset() {\n                // first do binary search to compute the number of gaps before this column, G(c)\n                // G(c) = the index in columnsRightAfterGaps of the first entry thats greater than c\n                 \n                int lower_incl = 0;\n                int upper_excl = " + e + ";\n                int numGaps = 0;\n                \n                for (int loopDummyVar = 0; loopDummyVar == 0; loopDummyVar += 0) {\n                    if (lower_incl >= upper_excl) {\n                        break;\n                    }\n                \n                    int middle = (lower_incl + upper_excl)/2;\n                    if (columnsRightAfterGaps[middle] < aVertexOncoprintColumn) {\n                        // G(c) > middle\n                        lower_incl = middle + 1;\n                    } else if (columnsRightAfterGaps[middle] == aVertexOncoprintColumn) {\n                        // G(c) = middle + 1\n                        numGaps = middle + 1;\n                        break;\n                    } else {\n                        // columnsRightAfterGaps[middle] > column, so G(c) <= middle\n                        if (middle == 0) {\n                            // 0 <= G(c) <= 0 -> G(c) = 0\n                            numGaps = 0;\n                            break;\n                        } else if (columnsRightAfterGaps[middle-1] < aVertexOncoprintColumn) {\n                            // G(c) = middle\n                            numGaps = middle;\n                            break;\n                        } else {\n                            // columnsRightAfterGaps[middle-1] >= column, so G(c) <= middle-1\n                            upper_excl = middle;\n                        }\n                    }\n                }\n \n                // multiply it by the gap size to get the total offset\n                return float(numGaps)*gapSize;\n            }\n\n            void main(void) {\n            \tgl_Position = vec4(getUnpackedPositionVec3(), 1.0);\n            \tgl_Position[0] += aVertexOncoprintColumn*columnWidth;\n            \tgl_Position *= vec4(zoomX, zoomY, 1.0, 1.0);\n\n            // gaps should not be affected by zoom:\n                gl_Position[0] += getGapOffset();\n\n            // offsetY is given zoomed:\n            \tgl_Position[1] += offsetY;\n\n            \tgl_Position -= vec4(scrollX, scrollY, 0.0, 0.0);\n            \tgl_Position[0] *= supersamplingRatio;\n            \tgl_Position[1] *= supersamplingRatio;\n            \tgl_Position = uPMatrix * uMVMatrix * gl_Position;\n\n            \ttexCoord = (aColVertex + 0.5) / texSize;\n            }",
                r = this.createShader(n, "VERTEX_SHADER"),
                i = this.createShader("\n            precision mediump float;\n            varying float texCoord;\n            uniform sampler2D uSampler;\n            void main(void) {\n                gl_FragColor = texture2D(uSampler, vec2(texCoord, 0.5));\n            }", "FRAGMENT_SHADER"),
                o = this.createShaderProgram(r, i);
            o.vertexPositionAttribute = this.ctx.getAttribLocation(o, "aPosVertex"), this.ctx.enableVertexAttribArray(o.vertexPositionAttribute), o.vertexColorAttribute = this.ctx.getAttribLocation(o, "aColVertex"), this.ctx.enableVertexAttribArray(o.vertexColorAttribute), o.vertexOncoprintColumnAttribute = this.ctx.getAttribLocation(o, "aVertexOncoprintColumn"), this.ctx.enableVertexAttribArray(o.vertexOncoprintColumnAttribute), o.gapSizeUniform = this.ctx.getUniformLocation(o, "gapSize"), o.columnsRightAfterGapsUniform = this.ctx.getUniformLocation(o, "columnsRightAfterGaps"), o.samplerUniform = this.ctx.getUniformLocation(o, "uSampler"), o.pMatrixUniform = this.ctx.getUniformLocation(o, "uPMatrix"), o.mvMatrixUniform = this.ctx.getUniformLocation(o, "uMVMatrix"), o.columnWidthUniform = this.ctx.getUniformLocation(o, "columnWidth"), o.scrollXUniform = this.ctx.getUniformLocation(o, "scrollX"), o.scrollYUniform = this.ctx.getUniformLocation(o, "scrollY"), o.zoomXUniform = this.ctx.getUniformLocation(o, "zoomX"), o.zoomYUniform = this.ctx.getUniformLocation(o, "zoomY"), o.offsetYUniform = this.ctx.getUniformLocation(o, "offsetY"), o.supersamplingRatioUniform = this.ctx.getUniformLocation(o, "supersamplingRatio"), o.positionBitPackBaseUniform = this.ctx.getUniformLocation(o, "positionBitPackBase"), o.texSizeUniform = this.ctx.getUniformLocation(o, "texSize"), this.shader_program = o
        }, t.prototype.resizeAndClear = function (t) {
            var e = this.getVisibleAreaHeight(t), n = this.getTotalWidth(t), r = this.visible_area_width;
            this.$dummy_scroll_div_contents.css({
                "min-width": n,
                "min-height": t.getOncoprintHeight()
            }), this.$dummy_scroll_div_contents.parent().css({
                height: e + 20,
                width: r + 20
            }), this.dummy_scroll_div_client_size.update(), this.$canvas[0].height = this.supersampling_ratio * e, this.$canvas[0].style.height = e + "px", this.$overlay_canvas[0].height = this.supersampling_ratio * e, this.$overlay_canvas[0].style.height = e + "px", this.$column_label_canvas[0].height = this.supersampling_ratio * e, this.$column_label_canvas[0].style.height = e + "px", this.$canvas[0].width = this.supersampling_ratio * r, this.$canvas[0].style.width = r + "px", this.$overlay_canvas[0].width = this.supersampling_ratio * r, this.$overlay_canvas[0].style.width = r + "px", this.$column_label_canvas[0].width = this.supersampling_ratio * r, this.$column_label_canvas[0].style.width = r + "px", this.$container.css("height", e), this.$container.css("width", r), this.getWebGLContextAndSetUpMatrices(), this.setUpShaders(t), this.getOverlayContextAndClear(), this.getColumnLabelsContext()
        }, t.prototype.renderAllTracks = function (t, e) {
            if (!this.rendering_suppressed) {
                var n = this.scroll_x, r = this.scroll_y, i = t.getHorzZoom(), o = t.getVertZoom(),
                    a = this.getViewportOncoprintSpace(t), s = a.left, l = a.right, u = a.top, c = a.bottom,
                    h = t.getIdOrder(), f = t.getClosestColumnIndexToLeft(s),
                    d = t.getClosestColumnIndexToLeft(l, !1, !0), p = h[f = f < 1 ? 0 : f - 1],
                    g = -1 === d || d === h.length ? null : h[d];
                e || this.resizeAndClear(t), this.ctx.clearColor(1, 1, 1, 1), this.ctx.clear(this.ctx.COLOR_BUFFER_BIT | this.ctx.DEPTH_BUFFER_BIT);
                for (var _ = t.getTracks(), m = 0; m < _.length; m++) {
                    var v = _[m], y = t.getCellTops(v), b = t.getCellHeight(v);
                    if (!(y / o >= c || (y + b) / o < u)) {
                        var x = this.getTrackBuffers(v);
                        if (0 !== x.position.numItems) {
                            var w = this.id_to_first_vertex_index[v][p],
                                k = null === g ? x.position.numItems : this.id_to_first_vertex_index[v][g];
                            this.ctx.useProgram(this.shader_program), this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, x.position), this.ctx.vertexAttribPointer(this.shader_program.vertexPositionAttribute, x.position.itemSize, this.ctx.FLOAT, !1, 0, 0), this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, x.color), this.ctx.vertexAttribPointer(this.shader_program.vertexColorAttribute, x.color.itemSize, this.ctx.FLOAT, !1, 0, 0), this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, x.column), this.ctx.vertexAttribPointer(this.shader_program.vertexOncoprintColumnAttribute, x.column.itemSize, this.ctx.FLOAT, !1, 0, 0), this.ctx.activeTexture(this.ctx.TEXTURE0), this.ctx.bindTexture(this.ctx.TEXTURE_2D, x.color_tex.texture), this.ctx.uniform1i(this.shader_program.samplerUniform, 0), this.ctx.uniform1f(this.shader_program.texSizeUniform, x.color_tex.size), this.ctx.uniform1fv(this.shader_program.columnsRightAfterGapsUniform, this.getColumnIndexesAfterAGap(t)), this.ctx.uniform1f(this.shader_program.gapSizeUniform, t.getGapSize()), this.ctx.uniformMatrix4fv(this.shader_program.pMatrixUniform, !1, this.pMatrix), this.ctx.uniformMatrix4fv(this.shader_program.mvMatrixUniform, !1, this.mvMatrix), this.ctx.uniform1f(this.shader_program.columnWidthUniform, t.getCellWidth(!0) + t.getCellPadding(!0)), this.ctx.uniform1f(this.shader_program.scrollXUniform, n), this.ctx.uniform1f(this.shader_program.scrollYUniform, r), this.ctx.uniform1f(this.shader_program.zoomXUniform, i), this.ctx.uniform1f(this.shader_program.zoomYUniform, o), this.ctx.uniform1f(this.shader_program.offsetYUniform, y), this.ctx.uniform1f(this.shader_program.supersamplingRatioUniform, this.supersampling_ratio), this.ctx.uniform1f(this.shader_program.positionBitPackBaseUniform, this.position_bit_pack_base), this.ctx.drawArrays(this.ctx.TRIANGLES, w, k - w)
                        }
                    }
                }
                this.renderColumnLabels(t, h.slice(f, -1 === d ? void 0 : d)), this.clearOverlay(), this.highlightHighlightedIds(t), this.highlightHighlightedTracks(t)
            }
        }, t.getColumnLabelsFontSize = function (t) {
            return t.getCellWidth() / 2 + 2
        }, t.prototype.prepareContextForColumnLabelText = function (e, n) {
            var r = t.getColumnLabelsFontSize(e);
            n.font = this.supersampling_ratio * r + "px Arial", n.textAlign = "left", n.textBaseline = "middle"
        }, t.prototype.renderColumnLabels = function (t, e) {
            this.column_label_ctx.fillStyle = "rgba(0,0,0,0)", this.column_label_ctx.clearRect(0, 0, this.$column_label_canvas[0].width, this.$column_label_canvas[0].height), this.maximum_column_label_width = 0, this.maximum_column_label_height = 0;
            var n = t.getColumnLabels();
            if (0 !== Object.keys(n).length) {
                var r = this.getColumnLabelY(t), i = t.getZoomedColumnLeft(), o = this.scroll_x, a = t.getCellWidth();
                this.prepareContextForColumnLabelText(t, this.column_label_ctx);
                for (var s = 0; s < e.length; s++) {
                    var l = n[e[s]], u = this.column_label_ctx.measureText("m").width / this.supersampling_ratio;
                    if (l) {
                        var c = (i[e[s]] + a / 2 - o) * this.supersampling_ratio;
                        if (l.circle_color) {
                            this.column_label_ctx.save();
                            var h = this.getColumnLabelCircleSpec(t);
                            u = Math.max(2 * h.radius, u), this.column_label_ctx.translate(c, r), this.column_label_ctx.fillStyle = l.circle_color, this.column_label_ctx.beginPath(), this.column_label_ctx.arc(0, 0, this.supersampling_ratio * h.radius, 0, 2 * Math.PI), this.column_label_ctx.fill(), this.column_label_ctx.restore()
                        }
                        this.column_label_ctx.save();
                        var f = this.getColumnLabelAngleRadians(l), d = (l.left_padding_percent || 0) * a / 100;
                        this.column_label_ctx.translate(c, r), this.column_label_ctx.rotate(f), this.column_label_ctx.fillStyle = l.text_color || "rgba(0,0,0,1)", this.column_label_ctx.fillText(l.text, d * this.supersampling_ratio, 0);
                        var p = this.column_label_ctx.measureText(l.text).width / this.supersampling_ratio;
                        this.maximum_column_label_width = Math.max(this.maximum_column_label_width, Math.cos(f) * p), this.maximum_column_label_height = Math.max(this.maximum_column_label_height, Math.sin(f) * p, u), this.column_label_ctx.restore()
                    }
                }
            }
        }, t.prototype.getColumnLabelAngleRadians = function (t) {
            return d(t.angle_in_degrees, 65) * Math.PI / 180
        }, t.prototype.getColumnLabelCircleSpec = function (t) {
            return {radius: t.getCellWidth() / 2 * .9}
        }, t.prototype.clearTrackPositionAndColorBuffers = function (t, e) {
            var n;
            n = void 0 === e ? t.getTracks() : [e];
            for (var r = 0; r < n.length; r++) this.vertex_position_buffer[n[r]] && (this.ctx.deleteBuffer(this.vertex_position_buffer[n[r]]), delete this.vertex_position_buffer[n[r]]), this.vertex_color_buffer[n[r]] && (this.ctx.deleteBuffer(this.vertex_color_buffer[n[r]]), delete this.vertex_color_buffer[n[r]]), this.color_texture[n[r]] && (this.ctx.deleteTexture(this.color_texture[n[r]].texture), delete this.color_texture[n[r]])
        }, t.prototype.clearTrackColumnBuffers = function (t, e) {
            var n;
            n = void 0 === e ? t.getTracks() : [e];
            for (var r = 0; r < n.length; r++) this.vertex_column_buffer[n[r]] && (this.ctx.deleteBuffer(this.vertex_column_buffer[n[r]]), delete this.vertex_column_buffer[n[r]])
        }, t.prototype.getTrackBuffers = function (t) {
            if (void 0 === this.vertex_position_buffer[t]) {
                var e = this.ctx.createBuffer(), n = this.vertex_data[t].pos_array;
                this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, e), this.ctx.bufferData(this.ctx.ARRAY_BUFFER, new Float32Array(n), this.ctx.STATIC_DRAW), e.itemSize = 1, e.numItems = n.length / e.itemSize, this.vertex_position_buffer[t] = e
            }
            if (void 0 === this.vertex_color_buffer[t]) {
                var r = this.ctx.createBuffer(), i = this.vertex_data[t].col_array;
                this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, r), this.ctx.bufferData(this.ctx.ARRAY_BUFFER, new Float32Array(i), this.ctx.STATIC_DRAW), r.itemSize = 1, r.numItems = i.length / r.itemSize, this.vertex_color_buffer[t] = r
            }
            if (void 0 === this.color_texture[t]) {
                var o = this.ctx.createTexture();
                this.ctx.bindTexture(this.ctx.TEXTURE_2D, o);
                for (var a = this.vertex_data[t].col_bank, s = Math.pow(2, Math.ceil(Math.log2(a.length / 4))); a.length < 4 * s;) a.push(0);
                this.ctx.texImage2D(this.ctx.TEXTURE_2D, 0, this.ctx.RGBA, s, 1, 0, this.ctx.RGBA, this.ctx.UNSIGNED_BYTE, new Uint8Array(a)), this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MIN_FILTER, this.ctx.NEAREST), this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MAG_FILTER, this.ctx.NEAREST), this.color_texture[t] = {
                    texture: o,
                    size: s
                }
            }
            if (void 0 === this.vertex_column_buffer[t]) {
                var l = this.ctx.createBuffer(), u = this.vertex_column_array[t];
                this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, l), this.ctx.bufferData(this.ctx.ARRAY_BUFFER, new Float32Array(u), this.ctx.STATIC_DRAW), l.itemSize = 1, l.numItems = u.length / l.itemSize, this.vertex_column_buffer[t] = l
            }
            return {
                position: this.vertex_position_buffer[t],
                color: this.vertex_color_buffer[t],
                color_tex: this.color_texture[t],
                column: this.vertex_column_buffer[t]
            }
        }, t.prototype.computeVertexColumns = function (t, e) {
            if (!this.rendering_suppressed) {
                for (var n = this.vertex_data[e].pos_array.length, r = this.id_to_first_vertex_index[e], i = t.getVisibleIdToIndexMap(), o = Object.keys(r).map((function (t) {
                    return [t, r[t]]
                })).sort((function (t, e) {
                    return g(t[1], e[1])
                })), a = [], s = 0; s < o.length; s++) for (var l = (s === o.length - 1 ? n : o[s + 1][1]) - o[s][1], u = i[o[s][0]], c = 0; c < l; c++) a.push(u);
                this.vertex_column_array[e] = a, this.clearTrackColumnBuffers(t, e)
            }
        }, t.prototype.computeVertexPositionsAndVertexColors = function (t, e) {
            if (!this.rendering_suppressed) {
                var n = this.identified_shape_list_list[e], r = t.getIdToIndexMap();
                n.sort((function (t, e) {
                    return g(r[t.id], r[e.id])
                }));
                for (var i = [], o = [], a = {}, s = [], l = {}, u = this.position_bit_pack_base, c = {}, h = 0; h < n.length; h++) {
                    var f = n[h].shape_list;
                    a[n[h].id] = i.length;
                    for (var d = function (t) {
                        var e = f[t], n = Q.hashComputedShape(e, t);
                        if (!c.hasOwnProperty(n)) {
                            c[n] = {position: [], color: []};
                            var r = c[n].position, a = c[n].color;
                            G(e, t, (function (t, e) {
                                var n;
                                t = t.map(Math.round), e = e.map((function (t) {
                                    return Math.round(255 * t)
                                })), r.push(u * u * (n = t)[0] + u * n[1] + n[2]);
                                var i = e.join(","), o = l[i];
                                void 0 === o && (o = s.length, s.push(e), l[i] = o), a.push(o)
                            }))
                        }
                        i.push.apply(i, c[n].position), o.push.apply(o, c[n].color)
                    }, p = 0; p < f.length; p++) d(p)
                }
                var _ = s.reduce((function (t, e) {
                    return t.concat(e)
                }), []);
                0 === _.length && _.push(0, 0, 0, 0), this.vertex_data[e] = {
                    pos_array: i,
                    col_array: o,
                    col_bank: _
                }, this.id_to_first_vertex_index[e] = a, this.clearTrackPositionAndColorBuffers(t, e)
            }
        }, t.prototype.getShapes = function (t, e) {
            this.rendering_suppressed || (this.identified_shape_list_list[e] = t.getIdentifiedShapeListList(e, !0, !0))
        }, t.prototype.refreshCanvas = function (t) {
            this.clearTrackPositionAndColorBuffers(t), this.clearTrackColumnBuffers(t), this.getNewCanvas(), this.getWebGLContextAndSetUpMatrices(), this.setUpShaders(t)
        }, t.prototype.highlightCell = function (t, e, n) {
            this.overlayStrokeRect(t.getZoomedColumnLeft(n) - this.scroll_x, t.getCellTops(e) - this.scroll_y, t.getCellWidth() + (t.getTrackHasColumnSpacing(e) ? 0 : t.getCellPadding()), t.getCellHeight(e), "rgba(0,0,0,1)")
        }, t.prototype.highlightTrack = function (t, e) {
            for (var n = t.getCellWidth() + (t.getTrackHasColumnSpacing(e) ? 0 : t.getCellPadding()), r = t.getCellHeight(e), i = t.getIdOrder(), o = t.getZoomedColumnLeft(), a = t.getCellTops(e) - this.scroll_y, s = 0, l = i; s < l.length; s++) {
                var u = l[s];
                null !== t.getTrackDatum(e, u) && u in o && this.overlayStrokeRect(o[u] - this.scroll_x, a, n, r, "rgba(0,0,0,0.5)")
            }
        }, t.prototype.highlightColumn = function (t, e) {
            for (var n = t.getZoomedColumnLeft(e) - this.scroll_x, r = t.getCellPadding(), i = t.getCellWidth(), o = t.getTracks(), a = 0; a < o.length; a++) null !== t.getTrackDatum(o[a], e) && this.overlayStrokeRect(n, t.getCellTops(o[a]) - this.scroll_y, i + (t.getTrackHasColumnSpacing(o[a]) ? 0 : r), t.getCellHeight(o[a]), "rgba(0,0,0,0.5)");
            this.overlayColumnLabelHighlight(t, e)
        }, t.prototype.getViewportOncoprintSpace = function (t) {
            var e, n = this.scroll_y, r = t.getVertZoom(), i = t.getIdOrder(),
                o = t.getClosestColumnIndexToLeft(this.scroll_x, !0), a = i[o],
                s = t.getClosestColumnIndexToLeft(this.scroll_x + this.visible_area_width, !0, !0);
            return e = s < i.length ? t.getColumnLeft(i[s]) : t.getColumnLeft(i[i.length - 1]) + t.getCellWidth(!0), {
                top: Math.round(n / r),
                bottom: Math.round((n + this.getVisibleAreaHeight(t)) / r),
                left: t.getColumnLeft(a),
                right: e,
                center_col_index: Math.floor((s + o) / 2)
            }
        }, t.prototype.isUsable = function () {
            return null !== this.ctx
        }, t.prototype.removeTrack = function (t, e) {
            delete this.identified_shape_list_list[e], delete this.vertex_data[e], delete this.vertex_column_array[e], delete this.id_to_first_vertex_index[e], this.clearTrackPositionAndColorBuffers(t, e), this.clearTrackColumnBuffers(t, e), this.rendering_suppressed || this.renderAllTracks(t)
        }, t.prototype.moveTrack = function (t) {
            this.rendering_suppressed || this.renderAllTracks(t)
        }, t.prototype.setTrackGroupOrder = function (t) {
            this.rendering_suppressed || this.renderAllTracks(t)
        }, t.prototype.setTrackShowGaps = function (t) {
            this.rendering_suppressed || (this.setUpShaders(t), this.renderAllTracks(t))
        }, t.prototype.setColumnLabels = function (t) {
            this.rendering_suppressed || this.renderAllTracks(t)
        }, t.prototype.addTracks = function (t, e) {
            if (!this.rendering_suppressed) {
                for (var n = 0; n < e.length; n++) this.getShapes(t, e[n]), this.computeVertexPositionsAndVertexColors(t, e[n]), this.computeVertexColumns(t, e[n]);
                this.renderAllTracks(t)
            }
        }, t.prototype.setIdOrder = function (t, e) {
            if (!this.rendering_suppressed) {
                for (var n = t.getTracks(), r = 0; r < n.length; r++) this.computeVertexColumns(t, n[r]);
                this.renderAllTracks(t)
            }
        }, t.prototype.setTrackGroupSortPriority = function (t) {
            this.rendering_suppressed || this.renderAllTracks(t)
        }, t.prototype.sort = function (t) {
            if (!this.rendering_suppressed) {
                for (var e = t.getTracks(), n = 0; n < e.length; n++) this.computeVertexPositionsAndVertexColors(t, e[n]), this.computeVertexColumns(t, e[n]);
                this.renderAllTracks(t)
            }
        }, t.prototype.suppressRendering = function () {
            this.rendering_suppressed = !0
        }, t.prototype.releaseRendering = function (t) {
            this.rendering_suppressed = !1, this.updateAntialiasSetting(t);
            for (var e = t.getTracks(), n = 0; n < e.length; n++) this.getShapes(t, e[n]), this.computeVertexPositionsAndVertexColors(t, e[n]), this.computeVertexColumns(t, e[n]);
            this.setUpShaders(t), this.renderAllTracks(t)
        }, t.prototype.hideIds = function (t) {
            if (!this.rendering_suppressed) {
                for (var e = t.getTracks(), n = 0; n < e.length; n++) this.computeVertexColumns(t, e[n]);
                this.renderAllTracks(t)
            }
        }, t.prototype.setTrackImportantIds = function (t, e) {
            this.rendering_suppressed || (this.getShapes(t, e), this.computeVertexPositionsAndVertexColors(t, e), this.computeVertexColumns(t, e), this.renderAllTracks(t))
        }, t.prototype.setTrackData = function (t, e) {
            this.rendering_suppressed || (this.getShapes(t, e), this.computeVertexPositionsAndVertexColors(t, e), this.computeVertexColumns(t, e), this.renderAllTracks(t))
        }, t.prototype.setRuleSet = function (t, e) {
            this.rendering_suppressed || (this.getShapes(t, e), this.computeVertexPositionsAndVertexColors(t, e), this.renderAllTracks(t))
        }, t.prototype.shareRuleSet = function (t, e) {
            this.rendering_suppressed || (this.getShapes(t, e), this.computeVertexPositionsAndVertexColors(t, e), this.renderAllTracks(t))
        }, t.prototype.setSortConfig = function (t) {
            this.rendering_suppressed || this.sort(t)
        }, t.prototype.setHorzScroll = function (t) {
            this.setScroll(t)
        }, t.prototype.setVertScroll = function (t) {
            this.setScroll(t)
        }, t.prototype.setScroll = function (t) {
            this.scroll_x = t.getHorzScroll(), this.scroll_y = t.getVertScroll(), this.rendering_suppressed || this.renderAllTracks(t, !0)
        }, t.prototype.updateAntialiasSetting = function (t) {
            t.getCellWidth() < this.antialias_on_cell_width_thresh ? this.antialias || (this.antialias = !0, this.refreshCanvas(t)) : this.antialias && (this.antialias = !1, this.refreshCanvas(t))
        }, t.prototype.setZoom = function (t) {
            this.rendering_suppressed || (this.updateAntialiasSetting(t), this.renderAllTracks(t))
        }, t.prototype.setHorzZoom = function (t) {
            this.rendering_suppressed || (this.updateAntialiasSetting(t), this.renderAllTracks(t))
        }, t.prototype.setVertZoom = function (t) {
            this.rendering_suppressed || this.renderAllTracks(t)
        }, t.prototype.setTrackGroupHeader = function (t) {
            this.rendering_suppressed || this.renderAllTracks(t)
        }, t.prototype.setViewport = function (t) {
            this.scroll_x = t.getHorzScroll(), this.scroll_y = t.getVertScroll(), this.rendering_suppressed || (this.updateAntialiasSetting(t), this.renderAllTracks(t))
        }, t.prototype.getTotalWidth = function (t, e) {
            var n = t.getOncoprintWidth(e);
            return this.maximum_column_label_width > 0 && (n += this.maximum_column_label_width), n
        }, t.prototype.getVisibleAreaWidth = function () {
            return this.visible_area_width
        }, t.prototype.setWidth = function (t, e) {
            this.visible_area_width = t, this.rendering_suppressed || this.renderAllTracks(e)
        }, t.prototype.getColumnLabelsHeight = function () {
            var t = 0;
            return this.maximum_column_label_height > 0 && (t += 30, t += this.maximum_column_label_height), t
        }, t.prototype.getTotalHeight = function (t) {
            return t.getOncoprintHeight() + this.getColumnLabelsHeight()
        }, t.prototype.getVisibleAreaHeight = function (t) {
            return Math.min(t.getOncoprintHeight(), t.max_height) + this.getColumnLabelsHeight()
        }, t.prototype.setCellPaddingOn = function (t) {
            if (!this.rendering_suppressed) {
                for (var e = t.getTracks(), n = 0; n < e.length; n++) t.getTrackHasColumnSpacing(e[n]) || (this.getShapes(t, e[n]), this.computeVertexPositionsAndVertexColors(t, e[n])), this.computeVertexColumns(t, e[n]);
                this.renderAllTracks(t)
            }
        }, t.prototype.setHighlightedIds = function (t) {
            this.clearOverlay(), this.highlightHighlightedIds(t), this.highlightHighlightedTracks(t)
        }, t.prototype.setHighlightedTracks = function (t) {
            this.clearOverlay(), this.highlightHighlightedIds(t), this.highlightHighlightedTracks(t)
        }, t.prototype.highlightHighlightedIds = function (t, e) {
            for (var n = t.getVisibleHighlightedIds(), r = 0; r < n.length; r++) e && -1 !== e.indexOf(n[r]) || this.highlightColumn(t, n[r])
        }, t.prototype.highlightHighlightedTracks = function (t) {
            for (var e = t.getHighlightedTracks(), n = 0; n < e.length; n++) this.highlightTrack(t, e[n])
        }, t.prototype.getDummyScrollDivClientSize = function () {
            return this.dummy_scroll_div_client_size.get()
        }, t.prototype.toSVGGroup = function (e, n, r) {
            for (var i = H.group(n || 0, r || 0), o = e.getCellTops(), a = e.getTracks(), s = e.getZoomedColumnLeft(), l = 0; l < a.length; l++) for (var u = a[l], c = o[u], h = e.getIdentifiedShapeListList(u, !1, !0), f = 0; f < h.length; f++) {
                var p = h[f], g = p.id, _ = p.shape_list, m = s[g];
                if (void 0 !== m) for (var v = 0; v < _.length; v++) i.appendChild(H.fromShape(_[v], m, c))
            }
            var y = e.getColumnLabels(), b = e.getZoomedColumnLeft(), x = Object.keys(y),
                w = e.getOncoprintHeight() + 10, k = t.getColumnLabelsFontSize(e), S = e.getCellWidth();
            for (l = 0; l < x.length; l++) {
                if ((g = x[l]) in b) {
                    var M = y[g], T = b[g] + S / 2;
                    if (M.circle_color) {
                        var I = this.getColumnLabelCircleSpec(e);
                        i.appendChild(L("ellipse", {
                            cx: T,
                            cy: w,
                            rx: I.radius,
                            ry: I.radius,
                            stroke: "rgba(0,0,0,0)",
                            fill: M.circle_color
                        }))
                    }
                    var C = T + (M.left_padding_percent || 0) / 100 * S, A = d(M.angle_in_degrees, 65), D = L("text", {
                        x: C,
                        y: w,
                        fill: M.text_color || "#000000",
                        "font-size": k,
                        "font-family": "Arial",
                        "font-weight": "normal",
                        "text-anchor": "start",
                        transform: "rotate(" + A + "," + C + "," + w + ")",
                        "alignment-baseline": "middle"
                    });
                    D.textContent = M.text, i.appendChild(D)
                }
            }
            return i
        }, t.prototype.destroy = function () {
            this.$overlay_canvas.off(), c()(document).off("mousemove", this.mouseMoveHandler)
        }, t
    }(), it = function () {
        function t(e, n, r) {
            this.$canvas = e, this.model = n, this.tooltip = r, this.supersampling_ratio = 2, this.base_font_size = 14, this.track_tops = {}, this.cell_tops = {}, this.cell_tops_view_space = {}, this.cell_tops_this_space = {}, this.cell_heights = {}, this.cell_heights_view_space = {}, this.cell_heights_this_space = {}, this.label_middles_view_space = {}, this.label_middles_this_space = {}, this.label_left_padding = {}, this.labels = {}, this.sublabels = {}, this.label_colors = {}, this.label_circle_colors = {}, this.label_font_weight = {}, this.html_labels = {}, this.track_link_urls = {}, this.track_descriptions = {}, this.minimum_track_height = Number.POSITIVE_INFINITY, this.maximum_label_width = Number.NEGATIVE_INFINITY, this.tracks = [], this.rendering_suppressed = !1, this.highlighted_track_label_only = null, this.scroll_y = 0;
            this.show_sublabels = n.getShowTrackSublabels(), this.setUpContext(), function (e) {
                e.drag_callback = function (t, e) {
                }, e.dragged_label_track_id = null, e.drag_mouse_y = null, e.$canvas.on("mousedown", (function (t) {
                    e.tooltip.hide();
                    var r = e.isMouseOnLabel(t.offsetY);
                    null !== r && n.getContainingTrackGroup(r).length > 1 && !n.isTrackInClusteredGroup(r) && n.getTrackMovable(r) && e.startDragging(n, r, t.offsetY)
                })), e.$canvas.on("mousemove", (function (r) {
                    if (null !== e.dragged_label_track_id) {
                        var i = n.getContainingTrackGroup(e.dragged_label_track_id),
                            o = n.getLastExpansion(i[i.length - 1]),
                            a = e.track_tops[o] + n.getTrackHeight(o) - e.scroll_y,
                            s = e.track_tops[i[0]] - 5 - e.scroll_y;
                        e.drag_mouse_y = Math.min(r.pageY - e.$canvas.offset().top, a), e.drag_mouse_y = Math.max(e.drag_mouse_y, s), e.renderAllLabels(n)
                    } else {
                        var l = e.isMouseOnLabel(r.pageY - e.$canvas.offset().top);
                        if (null !== l) {
                            var u = c()("<div>"), h = e.$canvas[0].getBoundingClientRect();
                            (e.isNecessaryToShortenLabel(e.labels[l]) || e.track_link_urls[l]) && u.append(t.formatTooltipHeader(e.labels[l], e.html_labels[l], e.track_link_urls[l]));
                            var f = e.track_descriptions[l];
                            f.length > 0 && u.append(c()("<div>").text(f)), n.getTrackMovable(l) && (n.isTrackInClusteredGroup(l) ? (e.$canvas.css("cursor", "not-allowed"), u.append("<b>dragging disabled for clustered tracks</b>")) : n.getContainingTrackGroup(l).length > 1 && (e.$canvas.css("cursor", "move"), u.append("<b>hold to drag</b>"))), u.contents().length > 0 && e.tooltip.fadeIn(200, e.renderedLabelWidth(e.labels[l]) + h.left, e.cell_tops[l] + h.top - e.scroll_y, u)
                        } else e.$canvas.css("cursor", "auto"), e.tooltip.hide()
                    }
                })), e.$canvas.on("mouseup mouseleave", (function (t) {
                    if (null !== e.dragged_label_track_id) {
                        var r = n.getContainingTrackGroup(e.dragged_label_track_id),
                            i = e.getLabelAboveMouseSpace(r, t.offsetY, e.dragged_label_track_id);
                        e.stopDragging(n, i)
                    }
                    e.tooltip.hideIfNotAlreadyGoingTo(150)
                }))
            }(this)
        }

        return t.prototype.circleRadius = function () {
            return .8 * this.minimum_track_height / 2
        }, t.prototype.renderedLabelWidth = function (t) {
            return this.ctx.measureText(this.shortenLabelIfNecessary(t)).width / this.supersampling_ratio
        }, t.prototype.updateFromModel = function (t) {
            if (!this.rendering_suppressed) {
                this.show_sublabels = t.getShowTrackSublabels(), this.scroll_y = t.getVertScroll(), this.track_tops = t.getZoomedTrackTops(), this.cell_tops = t.getCellTops(), this.cell_tops_this_space = {}, this.cell_heights = {}, this.tracks = t.getTracks(), this.track_descriptions = {}, this.ctx.font = "bold " + this.getFontSize() + "px Arial", this.minimum_track_height = Number.POSITIVE_INFINITY, this.maximum_label_width = 0;
                for (var e = 0; e < this.tracks.length; e++) {
                    this.minimum_track_height = Math.min(this.minimum_track_height, t.getTrackHeight(this.tracks[e]));
                    var n = this.shortenLabelIfNecessary(this.labels[this.tracks[e]]),
                        r = this.shortenLabelIfNecessary(this.sublabels[this.tracks[e]]),
                        i = this.ctx.measureText(n).width + (this.show_sublabels ? this.ctx.measureText(r).width : 0);
                    this.maximum_label_width = Math.max(this.maximum_label_width, i), this.cell_tops_this_space[this.tracks[e]] = this.cell_tops[this.tracks[e]] * this.supersampling_ratio - this.scroll_y * this.supersampling_ratio, this.track_descriptions[this.tracks[e]] = t.getTrackDescription(this.tracks[e]), this.cell_heights[this.tracks[e]] = t.getCellHeight(this.tracks[e]), this.cell_heights_this_space[this.tracks[e]] = this.cell_heights[this.tracks[e]] * this.supersampling_ratio, this.label_middles_this_space[this.tracks[e]] = this.cell_tops_this_space[this.tracks[e]] + this.cell_heights_this_space[this.tracks[e]] / 2
                }
            }
        }, t.prototype.setUpContext = function () {
            this.ctx = this.$canvas[0].getContext("2d"), this.ctx.textAlign = "start", this.ctx.textBaseline = "middle"
        }, t.prototype.resizeAndClear = function (t, e) {
            if (!this.rendering_suppressed) {
                var n = e(), r = this.getWidth();
                this.$canvas[0].height = this.supersampling_ratio * n, this.$canvas[0].width = this.supersampling_ratio * r, this.$canvas[0].style.height = n + "px", this.$canvas[0].style.width = r + "px", this.setUpContext()
            }
        }, t.prototype.isNecessaryToShortenLabel = function (t) {
            return t.length > this.getMaximumLabelLength()
        }, t.prototype.shortenLabelIfNecessary = function (t) {
            return this.isNecessaryToShortenLabel(t) ? t.substring(0, this.getMaximumLabelLength() - 3) + "..." : t
        }, t.formatTooltipHeader = function (t, e, n) {
            var r;
            return (r = n ? c()('<a target="_blank" rel="noopener noreferrer">').attr("href", n) : c()("<span>")).append(e || document.createTextNode(t)), c()('<b style="display: block;">').append(r)
        }, t.prototype.renderAllLabels = function (t) {
            if (!this.rendering_suppressed) {
                this.ctx.clearRect(0, 0, this.$canvas[0].width, this.$canvas[0].height);
                var e = [];
                e.push.apply(e, t.getHighlightedTracks()), null !== this.highlighted_track_label_only && e.push(this.highlighted_track_label_only);
                for (var n = 0, r = e; n < r.length; n++) {
                    var i = r[n];
                    this.cell_tops_this_space.hasOwnProperty(i) && (this.ctx.fillStyle = "rgba(255,255,0,0.4)", this.ctx.fillRect(0, this.cell_tops_this_space[i], this.getWidth() * this.supersampling_ratio, this.cell_heights_this_space[i]))
                }
                for (var o = this.getFontSize(), a = this.tracks, s = {}, l = 0; l < a.length; l++) {
                    this.label_circle_colors[a[l]] && (this.ctx.fillStyle = this.label_circle_colors[a[l]], this.ctx.beginPath(), this.ctx.arc(25 * this.supersampling_ratio, this.label_middles_this_space[a[l]], this.supersampling_ratio * this.circleRadius(), 0, 2 * Math.PI), this.ctx.fill()), this.ctx.font = (this.label_font_weight[a[l]] || "bold") + " " + o + "px Arial", this.ctx.fillStyle = "black", this.label_colors && this.label_colors[a[l]] && (this.ctx.fillStyle = this.label_colors[a[l]]);
                    var u = this.shortenLabelIfNecessary(this.labels[a[l]]);
                    this.ctx.fillText(u, this.label_left_padding[a[l]] * this.supersampling_ratio, this.label_middles_this_space[a[l]]), s[a[l]] = this.ctx.measureText(u).width
                }
                if (this.show_sublabels) {
                    this.ctx.font = o + "px Arial", this.ctx.fillStyle = "rgb(166,166,166)";
                    for (l = 0; l < a.length; l++) this.sublabels[a[l]] && this.ctx.fillText(this.shortenLabelIfNecessary(this.sublabels[a[l]]), s[a[l]], this.label_middles_this_space[a[l]])
                }
                if (null !== this.dragged_label_track_id) {
                    this.ctx.font = "bold " + o + "px Arial", this.ctx.fillStyle = "rgba(255,0,0,0.95)", this.ctx.fillText(this.shortenLabelIfNecessary(this.labels[this.dragged_label_track_id]), 0, this.supersampling_ratio * this.drag_mouse_y), this.ctx.fillStyle = "rgba(0,0,0,0.15)";
                    var c = this.model.getContainingTrackGroup(this.dragged_label_track_id),
                        h = this.model.getLastExpansion(this.getLabelAboveMouseSpace(c, this.drag_mouse_y, null)),
                        f = this.getLabelBelowMouseSpace(c, this.drag_mouse_y, null), d = void 0, p = void 0;
                    if (h === this.dragged_label_track_id || f === this.dragged_label_track_id) return;
                    null !== h && null !== f ? (d = this.cell_tops_this_space[h] + this.cell_heights_this_space[h], p = this.cell_tops_this_space[f] - d) : null === h ? (d = this.cell_tops_this_space[c[0]] - this.ctx.measureText("m").width, p = this.ctx.measureText("m").width) : null === f && (d = this.cell_tops_this_space[h] + this.cell_heights_this_space[h], p = this.ctx.measureText("m").width);
                    p = Math.max(p, 4), this.ctx.fillRect(this.label_left_padding[a[a.length - 1]] * this.supersampling_ratio, d, this.getWidth() * this.supersampling_ratio, p)
                }
            }
        }, t.prototype.isMouseOnLabel = function (t) {
            var e = this.getLabelAboveMouseSpace(this.tracks, t, null);
            return null === e ? null : t <= this.cell_tops[e] - this.scroll_y + this.cell_heights[e] ? e : null
        }, t.prototype.getLabelAboveMouseSpace = function (t, e, n) {
            if (e < this.cell_tops[t[0]] - this.scroll_y) return null;
            for (var r = null, i = 0; i < t.length; i++) if (null === n || n !== t[i]) {
                if (this.cell_tops[t[i]] - this.scroll_y > e) break;
                r = t[i]
            }
            return r
        }, t.prototype.getLabelBelowMouseSpace = function (t, e, n) {
            if (e > this.cell_tops[t[t.length - 1]] - this.scroll_y) return null;
            for (var r = null, i = t.length - 1; i >= 0; i--) if (null === n || n !== t[i]) {
                if (this.cell_tops[t[i]] - this.scroll_y < e) break;
                r = t[i]
            }
            return r
        }, t.prototype.startDragging = function (t, e, n) {
            this.dragged_label_track_id = e, this.drag_mouse_y = n, this.renderAllLabels(t)
        }, t.prototype.stopDragging = function (t, e) {
            this.drag_callback(this.dragged_label_track_id, e), this.dragged_label_track_id = null, this.renderAllLabels(t)
        }, t.prototype.getMaximumLabelLength = function () {
            return 18
        }, t.prototype.getWidth = function () {
            return this.model.getShowTrackLabels() ? Math.max(this.maximum_label_width / this.supersampling_ratio + 10, 70) : 0
        }, t.prototype.getFontSize = function (t) {
            return (t ? 1 : this.supersampling_ratio) * Math.max(Math.min(this.base_font_size, this.minimum_track_height), 7)
        }, t.prototype.setDragCallback = function (t) {
            this.drag_callback = t
        }, t.prototype.removeTrack = function (t, e) {
            this.updateFromModel(t), this.resizeAndClear(t, e), this.renderAllLabels(t)
        }, t.prototype.moveTrack = function (t, e) {
            this.updateFromModel(t), this.resizeAndClear(t, e), this.renderAllLabels(t)
        }, t.prototype.setTrackGroupOrder = function (t, e) {
            this.updateFromModel(t), this.resizeAndClear(t, e), this.renderAllLabels(t)
        }, t.prototype.setShowTrackLabels = function (t, e) {
            this.updateFromModel(t), this.resizeAndClear(t, e), this.renderAllLabels(t)
        }, t.prototype.addTracks = function (t, e, n) {
            for (var r = 0; r < e.length; r++) this.labels[e[r]] = t.getTrackLabel(e[r]), this.sublabels[e[r]] = t.getTrackSublabel(e[r]), this.label_colors[e[r]] = t.getTrackLabelColor(e[r]), this.label_circle_colors[e[r]] = t.getTrackLabelCircleColor(e[r]), this.label_left_padding[e[r]] = t.getTrackLabelLeftPadding(e[r]), this.label_font_weight[e[r]] = t.getTrackLabelFontWeight(e[r]), this.html_labels[e[r]] = t.getOptionalHtmlTrackLabel(e[r]), this.track_link_urls[e[r]] = t.getTrackLinkUrl(e[r]);
            this.updateFromModel(t), this.resizeAndClear(t, n), this.renderAllLabels(t)
        }, t.prototype.setShowTrackSublabels = function (t, e) {
            this.updateFromModel(t), this.resizeAndClear(t, e), this.renderAllLabels(t)
        }, t.prototype.setScroll = function (t, e) {
            this.setVertScroll(t, e)
        }, t.prototype.setHorzScroll = function (t) {
        }, t.prototype.setViewport = function (t, e) {
            this.setVertScroll(t, e)
        }, t.prototype.setVertScroll = function (t, e) {
            this.updateFromModel(t), this.resizeAndClear(t, e), this.renderAllLabels(t)
        }, t.prototype.setVertZoom = function (t, e) {
            this.updateFromModel(t), this.resizeAndClear(t, e), this.renderAllLabels(t)
        }, t.prototype.setZoom = function (t, e) {
            this.setVertZoom(t, e)
        }, t.prototype.highlightTrackLabelOnly = function (t, e) {
            this.highlighted_track_label_only = t, this.renderAllLabels(e)
        }, t.prototype.setHighlightedTracks = function (t) {
            this.renderAllLabels(t)
        }, t.prototype.setTrackMovable = function (t) {
            this.renderAllLabels(t)
        }, t.prototype.setTrackGroupHeader = function (t, e) {
            this.updateFromModel(t), this.resizeAndClear(t, e), this.renderAllLabels(t)
        }, t.prototype.sort = function (t, e) {
            this.updateFromModel(t), this.resizeAndClear(t, e), this.renderAllLabels(t)
        }, t.prototype.suppressRendering = function () {
            this.rendering_suppressed = !0
        }, t.prototype.releaseRendering = function (t, e) {
            this.rendering_suppressed = !1, this.updateFromModel(t), this.resizeAndClear(t, e), this.renderAllLabels(t)
        }, t.prototype.toSVGGroup = function (t, e, n, r) {
            var i = H.group(n || 0, r || 0);
            if (!t.getShowTrackLabels()) return i;
            for (var o = t.getCellTops(), a = t.getTracks(), s = 0; s < a.length; s++) {
                var l = a[s], u = o[l] + t.getCellHeight(l) / 2, c = t.getTrackLabel(l),
                    h = t.getTrackLabelCircleColor(l);
                h && i.appendChild(L("ellipse", {
                    cx: 25..toString(),
                    cy: u.toString(),
                    rx: this.circleRadius().toString(),
                    ry: this.circleRadius().toString(),
                    stroke: "rgba(0,0,0,0)",
                    fill: h
                }));
                var f = H.text(e ? c : this.shortenLabelIfNecessary(c), t.getTrackLabelLeftPadding(l), u, this.getFontSize(!0), "Arial", t.getTrackLabelFontWeight(l) || "bold", "bottom", h ? "white" : "black");
                f.setAttribute("dy", "0.35em"), i.appendChild(f)
            }
            return i
        }, t
    }(), ot = {
        viridis: [[68.08602, 1.24287, 84.000825, 1], [68.47005, 2.449275, 85.533885, 1], [68.83572, 3.729375, 87.051645, 1], [69.182775, 5.08521, 88.553595, 1], [69.51147, 6.518565, 90.038715, 1], [69.821295, 8.031735, 91.507515, 1], [70.11276, 9.62676, 92.958465, 1], [70.38561, 11.262585, 94.39182, 1], [70.63959, 12.83772, 95.807325, 1], [70.874955, 14.36262, 97.203705, 1], [71.091705, 15.846975, 98.58096, 1], [71.28933, 17.29818, 99.938835, 1], [71.468085, 18.721335, 101.276565, 1], [71.62797, 20.121285, 102.593895, 1], [71.76873, 21.5016, 103.89057, 1], [71.89062, 22.86483, 105.165825, 1], [71.993385, 24.213525, 106.419405, 1], [72.07728, 25.54998, 107.6508, 1], [72.14205, 26.875215, 108.86001, 1], [72.188205, 28.191015, 110.04627, 1], [72.215235, 29.4984, 111.209325, 1], [72.223395, 30.798135, 112.34892, 1], [72.212685, 32.09124, 113.4648, 1], [72.18336, 33.378225, 114.556455, 1], [72.13542, 34.6596, 115.623885, 1], [72.068865, 35.93613, 116.666835, 1], [71.98395, 37.20756, 117.68505, 1], [71.881185, 38.474655, 118.678275, 1], [71.76006, 39.73767, 119.646255, 1], [71.62134, 40.996605, 120.589245, 1], [71.465025, 42.251715, 121.50699, 1], [71.29137, 43.502745, 122.399235, 1], [71.10063, 44.74995, 123.266235, 1], [70.89306, 45.993585, 124.107735, 1], [70.66917, 47.23314, 124.92399, 1], [70.42947, 48.46887, 125.715255, 1], [70.173705, 49.700775, 126.481275, 1], [69.90264, 50.928855, 127.222305, 1], [69.61653, 52.1526, 127.938855, 1], [69.31614, 53.372265, 128.63067, 1], [69.001725, 54.587595, 129.29826, 1], [68.67354, 55.79859, 129.942135, 1], [68.33184, 57.004995, 130.56204, 1], [67.9779, 58.20681, 131.158995, 1], [67.611975, 59.40378, 131.732745, 1], [67.234065, 60.595905, 132.28431, 1], [66.84519, 61.78293, 132.813435, 1], [66.445605, 62.96511, 133.32114, 1], [66.036075, 64.141935, 133.80768, 1], [65.61711, 65.31315, 134.273565, 1], [65.189475, 66.479265, 134.71956, 1], [64.753425, 67.63977, 135.145665, 1], [64.30947, 68.794665, 135.552645, 1], [63.858375, 69.94395, 135.941265, 1], [63.400395, 71.087625, 136.31178, 1], [62.936805, 72.225435, 136.664955, 1], [62.46786, 73.357125, 137.0013, 1], [61.993815, 74.48346, 137.32158, 1], [61.515435, 75.603675, 137.625795, 1], [61.03323, 76.718025, 137.91522, 1], [60.547455, 77.82651, 138.189855, 1], [60.05913, 78.929385, 138.45072, 1], [59.568765, 80.02614, 138.69807, 1], [59.07687, 81.11703, 138.93267, 1], [58.583445, 82.202055, 139.15503, 1], [58.08951, 83.28147, 139.36566, 1], [57.595065, 84.355275, 139.56507, 1], [57.100875, 85.42347, 139.753515, 1], [56.607195, 86.486055, 139.93176, 1], [56.114535, 87.543285, 140.100315, 1], [55.62315, 88.59516, 140.25969, 1], [55.13355, 89.641425, 140.409885, 1], [54.64599, 90.682845, 140.55192, 1], [54.160725, 91.719165, 140.68605, 1], [53.678265, 92.750385, 140.81253, 1], [53.198865, 93.77676, 140.932125, 1], [52.72278, 94.79829, 141.044835, 1], [52.250265, 95.81523, 141.150915, 1], [51.781065, 96.82758, 141.250875, 1], [51.315945, 97.83585, 141.34497, 1], [50.85465, 98.839785, 141.43371, 1], [50.39718, 99.83964, 141.517095, 1], [49.9443, 100.835415, 141.59538, 1], [49.4955, 101.827365, 141.669075, 1], [49.051035, 102.815745, 141.73818, 1], [48.610905, 103.800555, 141.802695, 1], [48.175365, 104.78205, 141.86313, 1], [47.743905, 105.76023, 141.919485, 1], [47.31678, 106.73535, 141.972015, 1], [46.89399, 107.707665, 142.02072, 1], [46.47528, 108.67692, 142.0656, 1], [46.060395, 109.643625, 142.10691, 1], [45.649845, 110.60778, 142.14465, 1], [45.242865, 111.569385, 142.179075, 1], [44.839455, 112.52895, 142.209675, 1], [44.43987, 113.48622, 142.23696, 1], [44.043345, 114.441705, 142.260675, 1], [43.64988, 115.39515, 142.281075, 1], [43.25973, 116.34681, 142.29765, 1], [42.87213, 117.29694, 142.31091, 1], [42.487335, 118.24554, 142.320345, 1], [42.104835, 119.192865, 142.325955, 1], [41.724375, 120.138915, 142.32774, 1], [41.34621, 121.08369, 142.3257, 1], [40.969575, 122.0277, 142.319325, 1], [40.59447, 122.970435, 142.308615, 1], [40.220895, 123.91266, 142.293315, 1], [39.84885, 124.85412, 142.27368, 1], [39.477825, 125.794815, 142.2492, 1], [39.10782, 126.735, 142.21962, 1], [38.73909, 127.674675, 142.184685, 1], [38.37138, 128.614095, 142.14465, 1], [38.004945, 129.553005, 142.09875, 1], [37.639785, 130.491915, 142.047495, 1], [37.2759, 131.430315, 141.989865, 1], [36.913545, 132.368715, 141.92586, 1], [36.552465, 133.307115, 141.855225, 1], [36.193425, 134.245515, 141.777705, 1], [35.83668, 135.18366, 141.693045, 1], [35.482485, 136.12206, 141.60099, 1], [35.13135, 137.06046, 141.50103, 1], [34.78404, 137.999115, 141.393165, 1], [34.44183, 138.937515, 141.277395, 1], [34.104465, 139.876425, 141.152955, 1], [33.77322, 140.81508, 141.01959, 1], [33.44886, 141.754245, 140.877045, 1], [33.132915, 142.69341, 140.72532, 1], [32.825895, 143.632575, 140.563395, 1], [32.52984, 144.571995, 140.39178, 1], [32.245515, 145.511415, 140.209455, 1], [31.97547, 146.45109, 140.01693, 1], [31.720725, 147.39051, 139.813185, 1], [31.483065, 148.330185, 139.598475, 1], [31.26453, 149.269605, 139.372035, 1], [31.066905, 150.209025, 139.133865, 1], [30.89274, 151.148445, 138.883455, 1], [30.744075, 152.08761, 138.620805, 1], [30.62346, 153.02652, 138.34515, 1], [30.53319, 153.965175, 138.057, 1], [30.47556, 154.90332, 137.75559, 1], [30.452865, 155.840955, 137.44041, 1], [30.468165, 156.778335, 137.11146, 1], [30.523245, 157.71495, 136.768485, 1], [30.620655, 158.651055, 136.41123, 1], [30.76269, 159.58614, 136.03944, 1], [30.9519, 160.52046, 135.653115, 1], [31.18956, 161.454015, 135.25149, 1], [31.47822, 162.386295, 134.834565, 1], [31.8189, 163.317555, 134.40234, 1], [32.21313, 164.247285, 133.954305, 1], [32.662185, 165.175995, 133.490205, 1], [33.167085, 166.10292, 133.01004, 1], [33.72834, 167.02857, 132.513555, 1], [34.34646, 167.95218, 132.000495, 1], [35.021445, 168.87426, 131.470605, 1], [35.75355, 169.794045, 130.923885, 1], [36.542265, 170.712045, 130.359825, 1], [37.38708, 171.62775, 129.77868, 1], [38.28774, 172.540905, 129.180195, 1], [39.24297, 173.451765, 128.56386, 1], [40.252005, 174.360075, 127.92993, 1], [41.31408, 175.26558, 127.277895, 1], [42.427665, 176.16828, 126.60801, 1], [43.59174, 177.06792, 125.919765, 1], [44.805285, 177.9645, 125.213415, 1], [46.066515, 178.85751, 124.488195, 1], [47.374665, 179.747205, 123.744615, 1], [48.72795, 180.63333, 122.98242, 1], [50.125605, 181.515885, 122.201355, 1], [51.565845, 182.39436, 121.40142, 1], [53.04765, 183.268755, 120.582615, 1], [54.57, 184.13907, 119.74494, 1], [56.13162, 185.004795, 118.88763, 1], [57.731235, 185.86644, 118.011195, 1], [59.367825, 186.722985, 117.115635, 1], [61.04037, 187.57494, 116.20044, 1], [62.74785, 188.42205, 115.26612, 1], [64.489245, 189.263805, 114.31242, 1], [66.263535, 190.10046, 113.339085, 1], [68.069955, 190.931505, 112.346115, 1], [69.907995, 191.75694, 111.333255, 1], [71.776635, 192.576765, 110.30076, 1], [73.674855, 193.39047, 109.24863, 1], [75.602145, 194.198055, 108.176865, 1], [77.55774, 194.99952, 107.085465, 1], [79.540875, 195.79461, 105.97443, 1], [81.551295, 196.58307, 104.84376, 1], [83.58798, 197.3649, 103.6932, 1], [85.650675, 198.13959, 102.522495, 1], [87.73887, 198.907395, 101.332155, 1], [89.8518, 199.667805, 100.12218, 1], [91.988955, 200.42082, 98.89257, 1], [94.14957, 201.16644, 97.64307, 1], [96.333645, 201.904155, 96.374445, 1], [98.540415, 202.63422, 95.08593, 1], [100.76937, 203.356125, 93.778035, 1], [103.020255, 204.070125, 92.45076, 1], [105.292815, 204.775455, 91.103595, 1], [107.58654, 205.47237, 89.73705, 1], [109.900665, 206.160615, 88.35138, 1], [112.234935, 206.84019, 86.946585, 1], [114.58884, 207.51084, 85.52292, 1], [116.96187, 208.172565, 84.080385, 1], [119.353515, 208.824855, 82.61949, 1], [121.76352, 209.46822, 81.139725, 1], [124.19163, 210.101895, 79.641855, 1], [126.636825, 210.72588, 78.126135, 1], [129.099105, 211.34043, 76.59231, 1], [131.57796, 211.94529, 75.041145, 1], [134.07288, 212.540205, 73.472385, 1], [136.583355, 213.125175, 71.88654, 1], [139.10862, 213.699945, 70.28463, 1], [141.64842, 214.26477, 68.666655, 1], [144.20199, 214.81965, 67.033635, 1], [146.768565, 215.36433, 65.385825, 1], [149.34789, 215.898555, 63.723735, 1], [151.938945, 216.422835, 62.048895, 1], [154.541475, 216.936915, 60.36156, 1], [157.154715, 217.440795, 58.66326, 1], [159.777645, 217.934475, 56.955015, 1], [162.41001, 218.41821, 55.2381, 1], [165.050535, 218.892, 53.514555, 1], [167.69871, 219.355845, 51.78591, 1], [170.35377, 219.809745, 50.054715, 1], [173.014695, 220.25421, 48.323265, 1], [175.68072, 220.68924, 46.594875, 1], [178.350825, 221.114835, 44.872605, 1], [181.02399, 221.531505, 43.160535, 1], [183.699705, 221.93925, 41.463765, 1], [186.376695, 222.33858, 39.787395, 1], [189.05394, 222.729495, 38.138055, 1], [191.73042, 223.112505, 36.52314, 1], [194.405115, 223.48812, 34.95132, 1], [197.07726, 223.85634, 33.432795, 1], [199.745325, 224.217675, 31.978275, 1], [202.4088, 224.57289, 30.601275, 1], [205.06641, 224.92173, 29.316075, 1], [207.71688, 225.265215, 28.138485, 1], [210.3597, 225.6036, 27.085335, 1], [212.99385, 225.937395, 26.17473, 1], [215.618055, 226.26711, 25.42401, 1], [218.23155, 226.593255, 24.85026, 1], [220.833315, 226.91634, 24.468015, 1], [223.42284, 227.236875, 24.28875, 1], [225.999105, 227.55537, 24.32037, 1], [228.5616, 227.87208, 24.565425, 1], [231.109305, 228.188025, 25.021875, 1], [233.64171, 228.503205, 25.682835, 1], [236.15703, 228.81915, 26.538105, 1], [238.65552, 229.13535, 27.573405, 1], [241.13718, 229.452825, 28.77369, 1], [243.6015, 229.771575, 30.12264, 1], [246.04797, 230.092365, 31.604955, 1], [248.476335, 230.41545, 33.204825, 1], [250.88634, 230.741085, 34.908735, 1], [253.27824, 231.070035, 36.70368, 1]],
        inferno: [[.37281, .11883, 3.53583, 1], [.578085, .32385, 4.73535, 1], [.841245, .573495, 6.180945, 1], [1.159485, .86496, 7.881795, 1], [1.53153, 1.19646, 9.83229, 1], [1.95738, 1.56468, 11.94318, 1], [2.438055, 1.966815, 14.061465, 1], [2.974065, 2.401335, 16.1823, 1], [3.568725, 2.862375, 18.32481, 1], [4.223055, 3.34968, 20.47191, 1], [4.940115, 3.858915, 22.635585, 1], [5.723985, 4.385745, 24.818385, 1], [6.577215, 4.929405, 27.01215, 1], [7.50516, 5.483265, 29.228355, 1], [8.513175, 6.04401, 31.466235, 1], [9.60534, 6.609855, 33.71916, 1], [10.774515, 7.175445, 35.990955, 1], [11.963325, 7.73262, 38.29182, 1], [13.16922, 8.28087, 40.60977, 1], [14.394495, 8.815095, 42.94557, 1], [15.6417, 9.33045, 45.29871, 1], [16.914405, 9.81852, 47.67531, 1], [18.214395, 10.27497, 50.07027, 1], [19.542435, 10.685775, 52.478745, 1], [20.90031, 11.04864, 54.898695, 1], [22.289805, 11.36178, 57.327315, 1], [23.71245, 11.623665, 59.76129, 1], [25.16901, 11.83251, 62.19552, 1], [26.660505, 11.98704, 64.62465, 1], [28.18668, 12.086745, 67.04256, 1], [29.74728, 12.13137, 69.441855, 1], [31.34154, 12.12168, 71.81412, 1], [32.967675, 12.059715, 74.15094, 1], [34.62339, 11.94828, 76.44288, 1], [36.30639, 11.79171, 78.681015, 1], [38.013615, 11.59434, 80.856675, 1], [39.74175, 11.362545, 82.96119, 1], [41.485695, 11.10627, 84.985635, 1], [43.241625, 10.834695, 86.92287, 1], [45.005715, 10.55751, 88.768305, 1], [46.774395, 10.283895, 90.517605, 1], [48.543585, 10.023795, 92.168985, 1], [50.310735, 9.792, 93.721425, 1], [52.073295, 9.59616, 95.17569, 1], [53.829225, 9.44265, 96.533565, 1], [55.576995, 9.336825, 97.79811, 1], [57.314565, 9.283275, 98.972895, 1], [59.04219, 9.283275, 100.062, 1], [60.759615, 9.338355, 101.070015, 1], [62.466585, 9.449025, 102.001785, 1], [64.1631, 9.614775, 102.86139, 1], [65.84967, 9.835605, 103.653675, 1], [67.52655, 10.109985, 104.382975, 1], [69.193485, 10.43511, 105.05388, 1], [70.85175, 10.800015, 105.66996, 1], [72.501855, 11.202915, 106.23504, 1], [74.144565, 11.63922, 106.752435, 1], [75.78039, 12.10485, 107.225205, 1], [77.40984, 12.59598, 107.65641, 1], [79.033425, 13.108785, 108.048855, 1], [80.65191, 13.63995, 108.40458, 1], [82.26555, 14.18667, 108.726135, 1], [83.874855, 14.745885, 109.015305, 1], [85.480335, 15.3153, 109.27362, 1], [87.0825, 15.892875, 109.503375, 1], [88.681605, 16.47708, 109.705335, 1], [90.27816, 17.065875, 109.88103, 1], [91.87242, 17.657985, 110.031735, 1], [93.464895, 18.252645, 110.15847, 1], [95.05584, 18.848325, 110.262, 1], [96.645255, 19.444515, 110.343345, 1], [98.23314, 20.040705, 110.403525, 1], [99.820515, 20.636385, 110.442795, 1], [101.40687, 21.230535, 110.461665, 1], [102.99297, 21.8229, 110.460645, 1], [104.578815, 22.41348, 110.43999, 1], [106.164405, 23.001765, 110.400465, 1], [107.749995, 23.587755, 110.34207, 1], [109.33584, 24.17145, 110.26506, 1], [110.921685, 24.752595, 110.169945, 1], [112.507785, 25.33119, 110.05647, 1], [114.09414, 25.907235, 109.9254, 1], [115.681005, 26.48124, 109.77699, 1], [117.268125, 27.052695, 109.61073, 1], [118.8555, 27.62211, 109.426875, 1], [120.44364, 28.189485, 109.22517, 1], [122.03229, 28.75482, 109.006125, 1], [123.621195, 29.31837, 108.76974, 1], [125.21061, 29.880645, 108.51576, 1], [126.800535, 30.441645, 108.24444, 1], [128.390715, 31.001625, 107.95578, 1], [129.98115, 31.561095, 107.64978, 1], [131.571585, 32.1198, 107.326185, 1], [133.16253, 32.67825, 106.984995, 1], [134.75322, 33.236955, 106.62621, 1], [136.344165, 33.79617, 106.250085, 1], [137.9346, 34.355895, 105.856365, 1], [139.525035, 34.916895, 105.445305, 1], [141.11496, 35.47917, 105.016395, 1], [142.70412, 36.04323, 104.56989, 1], [144.29277, 36.609585, 104.10579, 1], [145.880655, 37.178235, 103.624095, 1], [147.46752, 37.749945, 103.124805, 1], [149.052855, 38.32497, 102.608175, 1], [150.63717, 38.903565, 102.07395, 1], [152.2197, 39.48624, 101.521875, 1], [153.800445, 40.073505, 100.952205, 1], [155.37915, 40.66587, 100.365195, 1], [156.955815, 41.263335, 99.760845, 1], [158.529675, 41.86692, 99.139155, 1], [160.100985, 42.476625, 98.50038, 1], [161.66949, 43.09296, 97.84452, 1], [163.234425, 43.71669, 97.171575, 1], [164.7963, 44.34807, 96.481545, 1], [166.354095, 44.987355, 95.77443, 1], [167.908065, 45.63531, 95.05074, 1], [169.4577, 46.292445, 94.31073, 1], [171.002745, 46.959015, 93.554145, 1], [172.54269, 47.635785, 92.781495, 1], [174.07728, 48.322755, 91.993035, 1], [175.606515, 49.020945, 91.188765, 1], [177.129885, 49.730355, 90.36894, 1], [178.64688, 50.452005, 89.533815, 1], [180.1575, 51.18564, 88.683135, 1], [181.66098, 51.93228, 87.817665, 1], [183.15732, 52.69218, 86.937405, 1], [184.646265, 53.46585, 86.04312, 1], [186.126795, 54.253545, 85.134555, 1], [187.599165, 55.05603, 84.212475, 1], [189.062865, 55.87356, 83.27688, 1], [190.517385, 56.70639, 82.32828, 1], [191.96247, 57.55503, 81.366675, 1], [193.39761, 58.419735, 80.39283, 1], [194.82255, 59.30127, 79.406745, 1], [196.23678, 60.199635, 78.408675, 1], [197.640045, 61.115085, 77.39913, 1], [199.031835, 62.048385, 76.378365, 1], [200.411895, 62.99928, 75.346635, 1], [201.779715, 63.96828, 74.30445, 1], [203.134785, 64.95564, 73.25232, 1], [204.477105, 65.96187, 72.190245, 1], [205.80591, 66.98646, 71.11899, 1], [207.120945, 68.03043, 70.038555, 1], [208.421955, 69.09327, 68.94945, 1], [209.70843, 70.175235, 67.851675, 1], [210.97986, 71.276835, 66.74625, 1], [212.236245, 72.397815, 65.632665, 1], [213.477075, 73.538175, 64.51194, 1], [214.702095, 74.697915, 63.38382, 1], [215.910795, 75.877545, 62.248815, 1], [217.10292, 77.0763, 61.10718, 1], [218.27796, 78.29469, 59.958915, 1], [219.435915, 79.53246, 58.80453, 1], [220.57653, 80.78961, 57.644025, 1], [221.699295, 82.065885, 56.47791, 1], [222.803955, 83.36103, 55.30593, 1], [223.890255, 84.6753, 54.12834, 1], [224.95794, 86.008185, 52.94514, 1], [226.00701, 87.35943, 51.75684, 1], [227.036955, 88.729035, 50.56293, 1], [228.047775, 90.116745, 49.36392, 1], [229.03896, 91.522305, 48.1593, 1], [230.010765, 92.94546, 46.94958, 1], [230.962425, 94.3857, 45.73425, 1], [231.89445, 95.84328, 44.513565, 1], [232.80633, 97.31718, 43.287525, 1], [233.69781, 98.807655, 42.05562, 1], [234.569145, 100.314195, 40.81785, 1], [235.419825, 101.836545, 39.574215, 1], [236.24985, 103.374195, 38.32446, 1], [237.05922, 104.927145, 37.068585, 1], [237.847935, 106.494885, 35.806335, 1], [238.615485, 108.076905, 34.5372, 1], [239.362125, 109.673205, 33.26169, 1], [240.087855, 111.283275, 31.979295, 1], [240.792675, 112.90686, 30.69027, 1], [241.476075, 114.543705, 29.39436, 1], [242.13831, 116.1933, 28.09182, 1], [242.779125, 117.85539, 26.782905, 1], [243.39903, 119.52972, 25.46787, 1], [243.99726, 121.21578, 24.147225, 1], [244.57407, 122.91357, 22.822245, 1], [245.129715, 124.62258, 21.493695, 1], [245.663685, 126.34281, 20.163615, 1], [246.176235, 128.073495, 18.834045, 1], [246.66711, 129.81489, 17.508045, 1], [247.136565, 131.56623, 16.18944, 1], [247.584345, 133.327515, 14.883585, 1], [248.01045, 135.09849, 13.59762, 1], [248.41488, 136.8789, 12.33996, 1], [248.797635, 138.66849, 11.12259, 1], [249.15846, 140.46675, 9.95775, 1], [249.49761, 142.273935, 8.907405, 1], [249.81483, 144.089535, 8.009295, 1], [250.11012, 145.913295, 7.26954, 1], [250.383225, 147.74496, 6.69375, 1], [250.634655, 149.58453, 6.288555, 1], [250.863645, 151.431495, 6.06135, 1], [251.070705, 153.28611, 6.01953, 1], [251.255325, 155.14761, 6.17151, 1], [251.41776, 157.01625, 6.52596, 1], [251.55801, 158.891775, 7.09257, 1], [251.67582, 160.773675, 7.88154, 1], [251.770935, 162.66195, 8.90358, 1], [251.84361, 164.5566, 10.17093, 1], [251.893845, 166.457115, 11.623155, 1], [251.92113, 168.36375, 13.19625, 1], [251.925975, 170.27574, 14.873895, 1], [251.90787, 172.193085, 16.640535, 1], [251.86707, 174.115785, 18.484695, 1], [251.80332, 176.04333, 20.39745, 1], [251.71662, 177.97572, 22.371405, 1], [251.60697, 179.9127, 24.40197, 1], [251.474625, 181.854015, 26.485065, 1], [251.31933, 183.79941, 28.618395, 1], [251.140575, 185.748885, 30.800175, 1], [250.939125, 187.702185, 33.029385, 1], [250.71498, 189.65829, 35.305515, 1], [250.46814, 191.61771, 37.629075, 1], [250.199115, 193.579425, 40.000065, 1], [249.90816, 195.543435, 42.420015, 1], [249.59553, 197.508975, 44.889435, 1], [249.261735, 199.47579, 47.410365, 1], [248.90754, 201.44337, 49.98459, 1], [248.53269, 203.41146, 52.61466, 1], [248.13744, 205.379295, 55.303635, 1], [247.72434, 207.34611, 58.05279, 1], [247.294665, 209.310375, 60.86493, 1], [246.850455, 211.271325, 63.74286, 1], [246.391965, 213.228705, 66.69117, 1], [245.92047, 215.18124, 69.714705, 1], [245.441835, 217.12638, 72.81423, 1], [244.95963, 219.062595, 75.99255, 1], [244.4736, 220.98912, 79.2591, 1], [243.99267, 222.902895, 82.61337, 1], [243.524235, 224.800095, 86.056125, 1], [243.069825, 226.68021, 89.599095, 1], [242.64423, 228.53763, 93.234885, 1], [242.25459, 230.369295, 96.969105, 1], [241.914165, 232.170615, 100.798695, 1], [241.63647, 233.936745, 104.719575, 1], [241.436295, 235.66284, 108.725115, 1], [241.32996, 237.344055, 112.803585, 1], [241.332765, 238.975545, 116.94096, 1], [241.460265, 240.55374, 121.11735, 1], [241.723935, 242.07609, 125.31363, 1], [242.133975, 243.541065, 129.5043, 1], [242.6937, 244.949685, 133.671765, 1], [243.404895, 246.30348, 137.792055, 1], [244.26348, 247.605765, 141.850125, 1], [245.26206, 248.86062, 145.840875, 1], [246.393495, 250.07289, 149.73753, 1], [247.64631, 251.24691, 153.54927, 1], [249.010305, 252.387015, 157.2738, 1], [250.475535, 253.497795, 160.909335, 1], [252.03231, 254.58282, 164.45562, 1]]
    }, at = function () {
        var t = function (e, n) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(e, n)
        };
        return function (e, n) {
            function r() {
                this.constructor = e
            }

            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();

    function st() {
        var t = 0;
        return function () {
            return t += 1
        }
    }

    function lt(t) {
        t = t || [];
        for (var e = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac", "#b77322", "#16d620", "#b91383", "#f4359e", "#9c5935", "#a9c413", "#2a778d", "#668d1c", "#bea413", "#0c5922", "#743411"], n = 0, r = {}, i = 0; i < t.length; i++) r[t[i]] = !0;
        return function (t) {
            if (!t) {
                for (var i = e[n % e.length]; r[i];) {
                    var o = ft(i);
                    if (o === i) break;
                    i = o
                }
                return r[i] = !0, n += 1, i
            }
            r[t] = !0
        }
    }

    function ut(t) {
        return [{type: "rectangle", fill: "rgba(255,255,255,1)", z: t}, {
            type: "line",
            stroke: "rgba(190,190,190,1)",
            "stroke-width": 1,
            x1: 0,
            x2: 100,
            y1: 50,
            y2: 50,
            z: t
        }]
    }

    !function (t) {
        t.CATEGORICAL = "categorical", t.GRADIENT = "gradient", t.GRADIENT_AND_CATEGORICAL = "gradient+categorical", t.BAR = "bar", t.STACKED_BAR = "stacked_bar", t.GENE = "gene"
    }(J || (J = {}));

    function ct(t) {
        var e, n, r,
            i = t.match(/^[\s]*rgba\([\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*,[\s]*([0-9.]+)[\s]*\)[\s]*$/);
        if (i && 5 === i.length) return e = parseInt(i[1]).toString(16), n = parseInt(i[2]).toString(16), r = parseInt(i[3]).toString(16), 1 === e.length && (e = "0" + e), 1 === n.length && (n = "0" + n), 1 === r.length && (r = "0" + r), "#" + e + n + r;
        var o = t.match(/^[\s]*rgb\([\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*\)[\s]*$/);
        return o && 4 === o.length ? (e = parseInt(o[1]).toString(16), n = parseInt(o[2]).toString(16), r = parseInt(o[3]).toString(16), 1 === e.length && (e = "0" + e), 1 === n.length && (n = "0" + n), 1 === r.length && (r = "0" + r), "#" + e + n + r) : t
    }

    function ht(t) {
        var e = parseInt(t, 16);
        return e *= .95, 1 === (t = (e = Math.round(e)).toString(16)).length && (t = "0" + t), t
    }

    function ft(t) {
        var e = t[1] + t[2], n = t[3] + t[4], r = t[5] + t[6];
        return "#" + (e = ht(e)) + (n = ht(n)) + (r = ht(r))
    }

    var dt, pt = function () {
        function t(e) {
            this.rule_set_id = t.getRuleSetId(), this.legend_label = e.legend_label, this.legend_base_color = e.legend_base_color, this.exclude_from_legend = e.exclude_from_legend, this.active_rule_ids = {}, this.rules_with_id = []
        }

        return t.prototype.getLegendLabel = function () {
            return this.legend_label
        }, t.prototype.getRuleSetId = function () {
            return this.rule_set_id
        }, t.prototype.addRules = function (t) {
            var e = this;
            return t.map((function (t) {
                return e._addRule(t)
            }))
        }, t.prototype._addRule = function (e, n) {
            return void 0 === n && (n = t.getRuleId()), this.rules_with_id.push({id: n, rule: new kt(e)}), n
        }, t.prototype.removeRule = function (t) {
            for (var e = -1, n = 0; n < this.rules_with_id.length; n++) if (this.rules_with_id[n].id === t) {
                e = n;
                break
            }
            e > -1 && this.rules_with_id.splice(e, 1), delete this.active_rule_ids[t]
        }, t.prototype.getRuleWithId = function (t) {
            for (var e = null, n = 0; n < this.rules_with_id.length; n++) if (this.rules_with_id[n].id === t) {
                e = this.rules_with_id[n];
                break
            }
            return e
        }, t.prototype.isExcludedFromLegend = function () {
            return this.exclude_from_legend
        }, t.prototype.getRule = function (t) {
            return this.getRuleWithId(t).rule
        }, t.prototype.getRecentlyUsedRules = function () {
            var t = this;
            return Object.keys(this.active_rule_ids).map((function (e) {
                return t.getRule(parseInt(e, 10))
            }))
        }, t.prototype.applyRulesToDatum = function (t, e, n, r) {
            for (var i = [], o = t.length, a = 0; a < o; a++) i = i.concat(t[a].rule.apply(e, n, r));
            return i
        }, t.prototype.getRulesWithId = function (t) {
            throw"Not implemented on base class"
        }, t.prototype.apply = function (t, e, n, r, i, o) {
            for (var a = [], s = 0; s < t.length; s++) {
                var l = t[s], u = !o || !!o[l[i]], c = this.getRulesWithId(l);
                if (void 0 !== r && u) for (var h = 0; h < c.length; h++) r[c[h].id] = !0;
                a.push(this.applyRulesToDatum(c, t[s], e, n))
            }
            return a
        }, t.getRuleSetId = st(), t.getRuleId = st(), t
    }(), gt = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.lookup_map_by_key_and_value = {}, e.lookup_map_by_key = {}, e.universal_rules = [], e.rule_id_to_conditions = {}, e
        }

        return at(e, t), e.prototype.getRulesWithId = function (t) {
            if (void 0 === t) return this.rules_with_id;
            var e = [];
            for (var n in e = e.concat(this.universal_rules), t) if (void 0 !== t[n] && t.hasOwnProperty(n)) {
                var r = this.lookup_map_by_key[n];
                void 0 !== r && e.push(r);
                var i = this.lookup_map_by_key_and_value[n] && this.lookup_map_by_key_and_value[n][t[n]] || void 0;
                void 0 !== i && e.push(i)
            }
            return e
        }, e.prototype.indexRuleForLookup = function (t, e, n) {
            null === t ? this.universal_rules.push(n) : null === e ? this.lookup_map_by_key[t] = n : (this.lookup_map_by_key_and_value[t] = this.lookup_map_by_key_and_value[t] || {}, this.lookup_map_by_key_and_value[t][e] = n), this.rule_id_to_conditions[n.id] = this.rule_id_to_conditions[n.id] || [], this.rule_id_to_conditions[n.id].push({
                key: t,
                value: e
            })
        }, e.prototype.addRule = function (t, e, n) {
            var r = this._addRule(n);
            return this.indexRuleForLookup(t, e, this.getRuleWithId(r)), r
        }, e.prototype.linkExistingRule = function (t, e, n) {
            this.indexRuleForLookup(t, e, this.getRuleWithId(n))
        }, e.prototype.removeRule = function (e) {
            for (t.prototype.removeRule.call(this, e); this.rule_id_to_conditions[e].length > 0;) {
                var n = this.rule_id_to_conditions[e].pop();
                if (null === n.key) {
                    for (var r = -1, i = 0; i < this.universal_rules.length; i++) if (this.universal_rules[i].id === e) {
                        r = i;
                        break
                    }
                    r > -1 && this.universal_rules.splice(r, 1)
                } else null === n.value ? delete this.lookup_map_by_key[n.key] : delete this.lookup_map_by_key_and_value[n.key][n.value]
            }
            delete this.rule_id_to_conditions[e]
        }, e
    }(pt), _t = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.rule_id_to_condition = {}, n || r.addRule((function (t) {
                return !0 === t.na
            }), {
                shapes: e.na_shapes || ut(e.na_z || 1e3),
                legend_label: e.na_legend_label || "No data",
                exclude_from_legend: !1,
                legend_config: {type: "rule", target: {na: !0}},
                legend_order: Number.POSITIVE_INFINITY
            }), r
        }

        return at(e, t), e.prototype.getRulesWithId = function (t) {
            if (void 0 === t) return this.rules_with_id;
            for (var e = [], n = 0; n < this.rules_with_id.length; n++) this.rule_id_to_condition[this.rules_with_id[n].id](t) && e.push(this.rules_with_id[n]);
            return e
        }, e.prototype.addRule = function (t, e, n) {
            return n = this._addRule(e, n), this.rule_id_to_condition[n] = t, n
        }, e.prototype.removeRule = function (e) {
            t.prototype.removeRule.call(this, e), delete this.rule_id_to_condition[e]
        }, e
    }(pt), mt = function (t) {
        function e(e, n) {
            var r, i = t.call(this, e) || this;
            n || i.addRule("na", !0, {
                shapes: e.na_shapes || ut(e.na_z || 1e3),
                legend_label: e.na_legend_label || "No data",
                exclude_from_legend: !1,
                legend_config: {type: "rule", target: {na: !0}},
                legend_order: Number.POSITIVE_INFINITY
            }), i.category_key = e.category_key, i.category_to_color = h(d(e.category_to_color, {})), i.getUnusedColor = lt((r = i.category_to_color, Object.keys(r).map((function (t) {
                return r[t]
            }))).map(ct));
            for (var o = 0, a = Object.keys(i.category_to_color); o < a.length; o++) {
                var s = a[o], l = i.category_to_color[s];
                i.addCategoryRule(s, l), i.getUnusedColor(l)
            }
            return i
        }

        return at(e, t), e.prototype.addCategoryRule = function (t, e) {
            var n = {};
            n[this.category_key] = t;
            var r = {
                shapes: [{type: "rectangle", fill: e}],
                legend_label: t,
                exclude_from_legend: !1,
                legend_config: {type: "rule", target: n}
            };
            this.addRule(this.category_key, t, r)
        }, e.prototype.apply = function (e, n, r, i, o, a) {
            for (var s = 0, l = e.length; s < l; s++) if (!e[s].na) {
                var u = e[s][this.category_key];
                if (!this.category_to_color.hasOwnProperty(u)) {
                    var c = this.getUnusedColor();
                    this.category_to_color[u] = c, this.addCategoryRule(u, c)
                }
            }
            return t.prototype.apply.call(this, e, n, r, i, o, a)
        }, e
    }(gt);
    !function (t) {
        t.ALL = "ALL", t.NON_NEGATIVE = "NON_NEGATIVE", t.NON_POSITIVE = "NON_POSITIVE"
    }(dt || (dt = {}));
    var vt = function (t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.value_key = e.value_key, n.value_range = e.value_range, n.log_scale = e.log_scale, n.type = e.type, n.makeInterpFn = function () {
                var t = this.getEffectiveValueRange(), e = this.getValueRangeType(), n = this.type;
                if (this.log_scale) {
                    var r = Math.abs(t[0]) + 1, i = Math.log(t[1] + r) - Math.log(t[0] + r), o = Math.log(t[0] + r);
                    return function (t) {
                        return (Math.log(t + r) - o) / i
                    }
                }
                return function (r) {
                    var i = t[1] - t[0], o = t[0], a = t[1];
                    return "bar" !== n ? (r - o) / i : e === dt.NON_POSITIVE ? (r - a) / i : e === dt.NON_NEGATIVE ? (r - o) / i : e === dt.ALL ? r / (i = Math.abs(t[0]) > t[1] ? Math.abs(t[0]) : t[1]) : void 0
                }
            }, n
        }

        return at(e, t), e.prototype.getEffectiveValueRange = function () {
            var t = this.value_range && this.value_range.slice() || [void 0, void 0];
            return void 0 === t[0] && (t[0] = this.inferred_value_range[0]), void 0 === t[1] && (t[1] = this.inferred_value_range[1]), t[0] === t[1] && (t[0] -= t[0] / 2, t[1] += t[1] / 2), t
        }, e.prototype.getValueRangeType = function () {
            var t = this.getEffectiveValueRange();
            return t[0] < 0 && t[1] <= 0 ? dt.NON_POSITIVE : t[0] >= 0 && t[1] > 0 ? dt.NON_NEGATIVE : dt.ALL
        }, e.prototype.apply = function (e, n, r, i, o, a) {
            for (var s = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY, u = 0, c = e.length; u < c; u++) {
                var h = e[u];
                isNaN(h[this.value_key]) || (s = Math.min(s, h[this.value_key]), l = Math.max(l, h[this.value_key]))
            }
            return s === Number.POSITIVE_INFINITY && (s = 0), l === Number.NEGATIVE_INFINITY && (l = 0), this.inferred_value_range = [s, l], this.updateLinearRules(), t.prototype.apply.call(this, e, n, r, i, o, a)
        }, e.prototype.updateLinearRules = function () {
            throw"Not implemented in abstract class"
        }, e
    }(_t), yt = function (t) {
        function e(e) {
            var n, r = t.call(this, e) || this;
            r.colors = [], e.colors ? r.colors = e.colors || [] : e.colormap_name && (r.colors = ot[e.colormap_name] || []), 0 === r.colors.length && r.colors.push([0, 0, 0, 1], [255, 0, 0, 1]), r.value_stop_points = e.value_stop_points, r.null_color = e.null_color || "rgba(211,211,211,1)";
            var i = r, o = r.value_key;
            return r.addRule((function (t) {
                return !0 !== t.na && null === t[o]
            }), {
                shapes: [{type: "rectangle", fill: i.null_color}],
                legend_label: e.null_legend_label || "Not a number",
                exclude_from_legend: !1,
                legend_config: {type: "rule", target: (n = {}, n[o] = null, n)}
            }), r
        }

        return at(e, t), e.linInterpColors = function (t, e, n) {
            return [Math.round(e[0] * (1 - t) + n[0] * t), Math.round(e[1] * (1 - t) + n[1] * t), Math.round(e[2] * (1 - t) + n[2] * t), e[3] * (1 - t) + n[3] * t]
        }, e.prototype.makeColorFn = function (t, n) {
            var r, o = this.value_stop_points;
            return r = o ? o.map(n) : function (t) {
                for (var e = [], n = 0; n < t; n++) e.push(n);
                return e
            }(t.length).map((function (e) {
                return e / (t.length - 1)
            })), function (n) {
                var o = i(r, n, (function (t) {
                    return t
                }), !0);
                if (-1 === o) return "rgba(0,0,0,1)";
                var a = Math.min(t.length - 1, o + 1), s = r[a] - r[o];
                if (0 === s) return "rgba(" + t[a].join(",") + ")";
                var l = (n - r[o]) / s, u = t[o], c = t[a];
                return "rgba(" + e.linInterpColors(l, u, c).join(",") + ")"
            }
        }, e.prototype.updateLinearRules = function () {
            var t;
            void 0 !== this.gradient_rule && (t = this.gradient_rule, this.removeRule(this.gradient_rule));
            var e = this.makeInterpFn(), n = this.makeColorFn(this.colors, e), r = this.value_key;
            this.null_color;
            this.gradient_rule = this.addRule((function (t) {
                return !0 !== t.na && null !== t[r]
            }), {
                shapes: [{
                    type: "rectangle", fill: function (t) {
                        var i = e(t[r]);
                        return n(i)
                    }
                }],
                exclude_from_legend: !1,
                legend_config: {type: "gradient", range: this.getEffectiveValueRange(), colorFn: n}
            }, t)
        }, e
    }(vt), bt = function (t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.fill = e.fill || "rgba(0,128,0,1)", n.negative_fill = e.negative_fill || "rgba(255,0,0,1)", n
        }

        return at(e, t), e.prototype.updateLinearRules = function () {
            var t;
            void 0 !== this.bar_rule && (t = this.bar_rule, this.removeRule(this.bar_rule));
            var e = this.makeInterpFn(), n = this.value_key, r = this.fill, i = this.negative_fill,
                o = this.getYPosPercentagesFn(), a = this.getCellHeightPercentagesFn();
            this.bar_rule = this.addRule((function (t) {
                return !0 !== t.na
            }), {
                shapes: [{
                    type: "rectangle", y: function (t) {
                        var r = e(t[n]);
                        return o(r)
                    }, height: function (t) {
                        var r = e(t[n]);
                        return a(r)
                    }, fill: function (t) {
                        return t[n] < 0 ? i : r
                    }
                }],
                exclude_from_legend: !1,
                legend_config: {
                    type: "number",
                    range: this.getEffectiveValueRange(),
                    range_type: this.getValueRangeType(),
                    positive_color: r,
                    negative_color: i,
                    interpFn: e
                }
            }, t)
        }, e.prototype.getYPosPercentagesFn = function () {
            var t;
            switch (this.getValueRangeType()) {
                case dt.NON_POSITIVE:
                    t = function (t) {
                        return 0
                    };
                    break;
                case dt.NON_NEGATIVE:
                    t = function (t) {
                        return 100 * (1 - t)
                    };
                    break;
                case dt.ALL:
                    t = function (t) {
                        return 50 * Math.min(1 - t, 1)
                    }
            }
            return t
        }, e.prototype.getCellHeightPercentagesFn = function () {
            var t;
            switch (this.getValueRangeType()) {
                case dt.NON_POSITIVE:
                    t = function (t) {
                        return 100 * -t
                    };
                    break;
                case dt.NON_NEGATIVE:
                    t = function (t) {
                        return 100 * t
                    };
                    break;
                case dt.ALL:
                    t = function (t) {
                        return 50 * Math.abs(t)
                    }
            }
            return t
        }, e
    }(vt), xt = function (t) {
        function e(e) {
            for (var n = t.call(this, e) || this, r = e.value_key, i = e.fills || [], o = e.categories || [], a = lt(i); i.length < o.length;) i.push(a());
            for (var s = n, l = 0; l < o.length; l++) !function (t) {
                var e = {};
                e[r] = {};
                for (var n = 0; n < o.length; n++) e[r][o[n]] = 0;
                e[r][o[t]] = 1, s.addRule((function (t) {
                    return !0 !== t.na
                }), {
                    shapes: [{
                        type: "rectangle", fill: i[t], width: 100, height: function (e) {
                            for (var n = 0, i = 0; i < o.length; i++) n += parseFloat(e[r][o[i]]);
                            return 100 * parseFloat(e[r][o[t]]) / n
                        }, y: function (e) {
                            for (var n = 0, i = 0, a = 0; a < o.length; a++) {
                                var s = parseFloat(e[r][o[a]]);
                                a < t && (i += s), n += s
                            }
                            return 100 * i / n
                        }
                    }], exclude_from_legend: !1, legend_config: {type: "rule", target: e}, legend_label: o[t]
                })
            }(l);
            return n
        }

        return at(e, t), e
    }(_t), wt = function (t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.addRulesFromParams(e), n.addRule("na", !0, {
                shapes: e.na_shapes || ut(e.na_z || 1),
                legend_label: e.na_legend_label || "No data",
                exclude_from_legend: !1,
                legend_config: {type: "rule", target: {na: !0}},
                legend_order: Number.POSITIVE_INFINITY
            }), n
        }

        return at(e, t), e.prototype.addRulesFromParams = function (t) {
            var e = this, n = t.rule_params;
            k.a.forEach(n.conditional, (function (t, n) {
                k.a.forEach(t, (function (t, r) {
                    var i = r.split(","), o = {};
                    o[i[0]] = r;
                    for (var a = e.addRule(n, "*" === i[0] ? null : i[0], p(t, {
                        shapes: t.shapes,
                        legend_config: {type: "rule", target: o},
                        legend_base_color: d(e.legend_base_color, "")
                    })), s = 1; s < i.length; s++) e.linkExistingRule(n, "*" === i[s] ? null : i[s], a)
                }))
            })), n.always && this.addRule(null, null, p(n.always, {
                shapes: n.always.shapes,
                legend_config: {type: "rule", target: {}}
            }))
        }, e
    }(gt), kt = function () {
        function t(t) {
            this.shapes = t.shapes.map((function (t) {
                return "rectangle" === t.type ? new K(t) : "triangle" === t.type ? new tt(t) : "ellipse" === t.type ? new et(t) : "line" === t.type ? new nt(t) : void 0
            })), this.legend_label = void 0 === t.legend_label ? "" : t.legend_label, this.legend_base_color = t.legend_base_color, this.exclude_from_legend = t.exclude_from_legend, this.legend_config = t.legend_config, this.legend_order = t.legend_order
        }

        return t.prototype.getLegendConfig = function () {
            return this.legend_config
        }, t.prototype.apply = function (t, e, n) {
            for (var r = [], i = 0, o = this.shapes.length; i < o; i++) r.push(this.shapes[i].getComputedParams(t, e, n));
            return r
        }, t.prototype.isExcludedFromLegend = function () {
            return this.exclude_from_legend
        }, t
    }(), St = function (t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.gradientRuleSet = new yt(e), n.categoricalRuleSet = new mt(e, !0), n
        }

        return at(e, t), e.prototype.apply = function (t, e, n, r, i, o) {
            for (var a = [], s = 0; s < t.length; s++) {
                var l = t[s];
                this.isCategorical(l) ? a.push(this.categoricalRuleSet.apply([l], e, n, r, i, o)[0]) : a.push(this.gradientRuleSet.apply([l], e, n, r, i, o)[0])
            }
            return a
        }, e.prototype.getRulesWithId = function (t) {
            var e = this.categoricalRuleSet.getRulesWithId(t), n = this.gradientRuleSet.getRulesWithId(t);
            return e.concat(n)
        }, e.prototype.isCategorical = function (t) {
            return void 0 !== t[this.categoricalRuleSet.category_key]
        }, e
    }(pt), Mt = function (t) {
        var e;
        switch (t.type) {
            case J.CATEGORICAL:
                e = new mt(t);
                break;
            case J.GRADIENT:
                e = new yt(t);
                break;
            case J.GRADIENT_AND_CATEGORICAL:
                e = new St(t);
                break;
            case J.BAR:
                e = new bt(t);
                break;
            case J.STACKED_BAR:
                e = new xt(t);
                break;
            case J.GENE:
            default:
                e = new wt(t)
        }
        return e
    }, Tt = n(4), It = n.n(Tt), Ct = "oncoprint-header-view.do-close-menus", At = function () {
        function t(t) {
            var e = this;
            this.rendering_suppressed = !1, this.$dropdowns = [], t.css({
                position: "relative",
                "pointer-events": "none"
            });
            var n = c()("<div/>").appendTo(t).css({
                position: "relative",
                "overflow-y": "hidden",
                "overflow-x": "hidden",
                width: "100%",
                height: "100%"
            });
            this.$occluded_ctr = c()("<div/>").appendTo(n).css({
                position: "absolute",
                width: "100%",
                height: "100%"
            }), this.$dropdowns_ctr = c()("<div/>").appendTo(t).css({
                position: "absolute",
                width: "100%",
                height: "100%"
            }), this.clickHandler = function () {
                c()(document).trigger(Ct)
            }, c()(document).on("click", this.clickHandler), c()(document).on(Ct, (function () {
                e.closeAllDropdowns()
            }))
        }

        return t.prototype.destroy = function () {
            c()(document).off("click", this.clickHandler), c()(document).off(Ct)
        }, t.prototype.closeAllDropdowns = function () {
            for (var t = 0, e = this.$dropdowns; t < e.length; t++) {
                e[t].fadeOut(100)
            }
        }, t.prototype.closeDropdownsExcept = function (t) {
            for (var e = 0, n = this.$dropdowns; e < n.length; e++) {
                var r = n[e];
                r !== t && r.fadeOut(100)
            }
            c()(document).trigger(Dt)
        }, t.$makeDropdownOption = function (t, e, n, r) {
            var i = c()("<li>").text(t).css({
                "font-weight": e,
                "font-size": 12,
                "border-bottom": "1px solid rgba(0,0,0,0.3)"
            });
            return n && n() ? (i.addClass("disabled"), i.css({
                color: "rgb(200, 200, 200)",
                cursor: "default"
            })) : r ? (i.addClass("clickable"), i.css({cursor: "pointer"}), i.click(r).hover((function () {
                c()(this).css({"background-color": "rgb(200,200,200)"})
            }), (function () {
                c()(this).css({"background-color": "rgba(255,255,255,0)"})
            }))) : i.click((function (t) {
                t.stopPropagation()
            })), i
        }, t.$makeDropdownSeparator = function () {
            return c()("<li>").css({"border-top": "1px solid black"}).addClass("oncoprintjs__header__separator")
        }, t.prototype.render = function (e) {
            var n = this;
            this.$occluded_ctr.empty(), this.$occluded_ctr.css({top: -e.getVertScroll()}), this.$dropdowns_ctr.empty(), this.$dropdowns_ctr.css({top: -e.getVertScroll()}), this.$dropdowns = [];
            var r = e.getTrackGroups(), i = e.getZoomedHeaderTops();
            r.forEach((function (e, r) {
                if (e.header) {
                    var o = c()("<div/>").css({"pointer-events": "auto"});
                    if (c()("<span>" + e.header.label.text + "</span>").appendTo(o).css({
                        "margin-right": 10,
                        "font-weight": "bold",
                        "text-decoration": "underline",
                        "font-size": 16,
                        "font-family": "Arial"
                    }).addClass("oncoprintjs__header__label"), e.header.options.length > 0) {
                        var a = c()("<ul>").appendTo(n.$dropdowns_ctr).css({
                            position: "absolute",
                            width: 120,
                            display: "none",
                            "list-style-type": "none",
                            "padding-left": "6",
                            "padding-right": "6",
                            float: "right",
                            "background-color": "rgb(255,255,255)",
                            left: "0px",
                            top: i[r] + 20,
                            "pointer-events": "auto"
                        }).addClass("oncoprintjs__header__dropdown").addClass("track-group-" + r);
                        n.$dropdowns.push(a);
                        var s = function () {
                            a.empty(), e.header.options.forEach((function (e) {
                                e.separator ? a.append(t.$makeDropdownSeparator()) : a.append(t.$makeDropdownOption(e.label || "", e.weight ? e.weight() : "normal", e.disabled, (function (t) {
                                    t.stopPropagation(), e.onClick && e.onClick(r), s()
                                })))
                            }))
                        }, l = c()("<img/>").appendTo(o).attr({
                            src: It.a,
                            width: 20,
                            height: 20
                        }).css({
                            cursor: "pointer",
                            border: "1px solid rgba(125,125,125,0)",
                            display: "inline-block"
                        }).addClass("oncoprintjs__header__toggle_btn_img").addClass("track-group-" + r).on("click", (function (t) {
                            t.stopPropagation(), a.is(":visible") ? (l.removeClass("oncoprintjs__header__open"), a.fadeOut(100)) : (s(), a.css("left", l.offset().left), l.addClass("oncoprintjs__header__open"), a.fadeIn(100), n.closeDropdownsExcept(a))
                        }))
                    }
                    o.css({position: "absolute", top: i[r], left: 0, width: "100%"}), n.$occluded_ctr.append(o)
                }
            }))
        }, t.prototype.setScroll = function (t) {
            this.$occluded_ctr.css({top: -t.getVertScroll()}), this.$dropdowns_ctr.css({top: -t.getVertScroll()}), this.closeAllDropdowns()
        }, t.prototype.setVertScroll = function (t) {
            this.setScroll(t)
        }, t.prototype.suppressRendering = function () {
            this.rendering_suppressed = !0
        }, t.prototype.releaseRendering = function (t) {
            this.rendering_suppressed = !1, this.render(t)
        }, t.prototype.toSVGGroup = function (t, e, n) {
            var r = H.group(e || 0, n || 0), i = t.getTrackGroups(), o = t.getZoomedHeaderTops();
            return i.forEach((function (t, e) {
                var n = t.header;
                if (n) {
                    var i = o[e];
                    r.appendChild(H.text(n.label.text, 0, i, 16, "Arial", "bold", void 0, void 0, "underline"))
                }
            })), r
        }, t
    }(), Dt = "oncoprint-track-options-view.do-close-menus", zt = function () {
        function t(t, e, n, r, i, o, a) {
            this.$div = t, this.moveUpCallback = e, this.moveDownCallback = n, this.removeCallback = r, this.sortChangeCallback = i, this.unexpandCallback = o, this.showGapsCallback = a, this.rendering_suppressed = !1, this.track_options_$elts = {}, this.menu_shown = {}, this.interaction_disabled = !1;
            var s = t.css("position");
            "absolute" !== s && "relative" !== s && console.log("WARNING: div passed to OncoprintTrackOptionsView must be absolute or relative positioned - layout problems will occur"), this.$ctr = c()("<div></div>").css({
                position: "absolute",
                "overflow-y": "hidden",
                "overflow-x": "hidden"
            }).appendTo(this.$div), this.$buttons_ctr = c()("<div></div>").css({position: "absolute"}).appendTo(this.$ctr), this.$dropdown_ctr = c()("<div></div>").css({position: "absolute"}).appendTo(this.$div);
            this.clickHandler = function () {
                c()(document).trigger(Dt)
            }, c()(document).on("click", this.clickHandler)
        }

        return t.prototype.renderAllOptions = function (t) {
            if (!this.rendering_suppressed) {
                var e = this;
                c()(document).off(Dt), c()(document).on(Dt, (function () {
                    e.hideAllMenus()
                })), this.$buttons_ctr.empty(), this.$dropdown_ctr.empty(), this.scroll(t.getVertScroll());
                for (var n = t.getTracks(), r = Number.POSITIVE_INFINITY, i = 0; i < n.length; i++) r = Math.min(r, t.getTrackHeight(n[i]));
                this.img_size = Math.floor(.75 * r);
                for (i = 0; i < n.length; i++) this.renderTrackOptions(t, n[i], i)
            }
        }, t.prototype.scroll = function (t) {
            this.rendering_suppressed || (this.$buttons_ctr.css({top: -t}), this.$dropdown_ctr.css({top: -t}), this.hideAllMenus())
        }, t.prototype.resize = function (t, e) {
            this.rendering_suppressed || (this.$div.css({
                width: this.getWidth(),
                height: e()
            }), this.$ctr.css({width: this.getWidth(), height: e()}))
        }, t.prototype.hideTrackMenu = function (t) {
            this.menu_shown[t] = !1;
            var e = this.track_options_$elts[t];
            e.$dropdown.css({"z-index": 1}), e.$dropdown.css({border: "1px solid rgba(125,125,125,0)"}), e.$img.css({border: "1px solid rgba(125,125,125,0)"}), e.$dropdown.fadeOut(100)
        }, t.prototype.showTrackMenu = function (t) {
            this.menu_shown[t] = !0;
            var e = this.track_options_$elts[t];
            e.$dropdown.css({"z-index": 10}), e.$dropdown.css({border: "1px solid rgba(125,125,125,1)"}), e.$img.css({border: "1px solid rgba(125,125,125,1)"}), e.$dropdown.fadeIn(100)
        }, t.prototype.hideAllMenus = function () {
            for (var t in this.track_options_$elts) this.track_options_$elts.hasOwnProperty(t) && this.hideTrackMenu(parseInt(t, 10))
        }, t.prototype.hideMenusExcept = function (t) {
            for (var e in this.track_options_$elts) if (this.track_options_$elts.hasOwnProperty(e)) {
                var n = parseInt(e, 10);
                if (n === t) continue;
                this.hideTrackMenu(n)
            }
            c()(document).trigger(Ct)
        }, t.$makeDropdownOption = function (t, e, n, r) {
            var i = c()("<li>").text(t).css({
                "font-weight": e,
                "font-size": 12,
                "border-bottom": "1px solid rgba(0,0,0,0.3)"
            });
            return n ? (i.addClass("disabled"), i.css({
                color: "rgb(200, 200, 200)",
                cursor: "default"
            })) : r ? (i.addClass("clickable"), i.css({cursor: "pointer"}), i.click(r).hover((function () {
                c()(this).css({"background-color": "rgb(200,200,200)"})
            }), (function () {
                c()(this).css({"background-color": "rgba(255,255,255,0)"})
            }))) : i.click((function (t) {
                t.stopPropagation()
            })), i
        }, t.$makeDropdownSeparator = function () {
            return c()("<li>").css({"border-top": "1px solid black"}).addClass("oncoprintjs__track_options__separator")
        }, t.renderSortArrow = function (t, e, n) {
            var r = "";
            e.isTrackSortDirectionChangeable(n) && (r = {
                1: '<i class="fa fa-signal" aria-hidden="true" title="Sorted ascending"></i>',
                "-1": '<i class="fa fa-signal" style="transform: scaleX(-1);" aria-hidden="true" title="Sorted descending"></i>',
                0: ""
            }[e.getTrackSortDirection(n)]), t.html(r)
        }, t.prototype.renderTrackOptions = function (e, n, r) {
            var i, o, a, s, l = e.getZoomedTrackTops(n);
            i = c()("<div>").appendTo(this.$buttons_ctr).css({
                position: "absolute",
                left: "0px",
                top: l + "px",
                "white-space": "nowrap"
            }), o = c()("<img/>").appendTo(i).attr({
                src: It.a,
                width: this.img_size,
                height: this.img_size
            }).css({
                float: "left",
                cursor: "pointer",
                border: "1px solid rgba(125,125,125,0)"
            }).addClass("oncoprintjs__track_options__toggle_btn_img").addClass("nth-" + (r + 1)), a = c()("<span>").appendTo(i).css({
                position: "absolute",
                top: Math.floor(this.img_size / 4) + "px"
            }), s = c()("<ul>").appendTo(this.$dropdown_ctr).css({
                position: "absolute",
                width: 120,
                display: "none",
                "list-style-type": "none",
                "padding-left": "6",
                "padding-right": "6",
                float: "right",
                "background-color": "rgb(255,255,255)",
                left: "0px",
                top: l + this.img_size + "px"
            }).addClass("oncoprintjs__track_options__dropdown").addClass("nth-" + (r + 1)), this.track_options_$elts[n] = {
                $div: i,
                $img: o,
                $dropdown: s
            }, t.renderSortArrow(a, e, n);
            var u = this;
            o.hover((function (t) {
                u.menu_shown[n] || c()(this).css({border: "1px solid rgba(125,125,125,0.3)"})
            }), (function (t) {
                u.menu_shown[n] || c()(this).css({border: "1px solid rgba(125,125,125,0)"})
            })), o.click((function (t) {
                t.stopPropagation(), s.is(":visible") ? (o.addClass("oncoprintjs__track_options__open"), u.hideTrackMenu(n)) : (o.removeClass("oncoprintjs__track_options__open"), u.showTrackMenu(n)), u.hideMenusExcept(n)
            }));
            var h, f, d, p = e.getTrackMovable(n) && e.isTrackInClusteredGroup(n);
            (e.getTrackMovable(n) && (s.append(t.$makeDropdownOption("Move up", "normal", p, (function (t) {
                t.stopPropagation(), u.moveUpCallback(n)
            }))), s.append(t.$makeDropdownOption("Move down", "normal", p, (function (t) {
                t.stopPropagation(), u.moveDownCallback(n)
            })))), e.isTrackRemovable(n) && s.append(t.$makeDropdownOption("Remove track", "normal", !1, (function (t) {
                t.stopPropagation(), u.removeCallback(n)
            }))), e.isTrackSortDirectionChangeable(n)) && (s.append(t.$makeDropdownSeparator()), h = t.$makeDropdownOption("Sort a-Z", 1 === e.getTrackSortDirection(n) ? "bold" : "normal", !1, (function (r) {
                r.stopPropagation(), h.css("font-weight", "bold"), f.css("font-weight", "normal"), d.css("font-weight", "normal"), u.sortChangeCallback(n, 1), t.renderSortArrow(a, e, n)
            })), f = t.$makeDropdownOption("Sort Z-a", -1 === e.getTrackSortDirection(n) ? "bold" : "normal", !1, (function (r) {
                r.stopPropagation(), h.css("font-weight", "normal"), f.css("font-weight", "bold"), d.css("font-weight", "normal"), u.sortChangeCallback(n, -1), t.renderSortArrow(a, e, n)
            })), d = t.$makeDropdownOption("Don't sort track", 0 === e.getTrackSortDirection(n) ? "bold" : "normal", !1, (function (r) {
                r.stopPropagation(), h.css("font-weight", "normal"), f.css("font-weight", "normal"), d.css("font-weight", "bold"), u.sortChangeCallback(n, 0), t.renderSortArrow(a, e, n)
            })), s.append(h), s.append(f), s.append(d));
            if (e.isTrackExpandable(n) && s.append(t.$makeDropdownOption(e.getExpandButtonText(n), "normal", !1, (function (t) {
                t.stopPropagation(), u.renderAllOptions(e), e.expandTrack(n)
            }))), e.isTrackExpanded(n) && s.append(t.$makeDropdownOption("Remove expansion", "normal", !1, (function (t) {
                t.stopPropagation(), u.unexpandCallback(n)
            }))), e.getTrackCanShowGaps(n)) {
                s.append(t.$makeDropdownSeparator());
                var g = t.$makeDropdownOption("Show gaps", e.getTrackShowGaps(n) ? "bold" : "normal", !1, (function (t) {
                        t.stopPropagation(), g.css("font-weight", "bold"), _.css("font-weight", "normal"), u.showGapsCallback(n, !0)
                    })),
                    _ = t.$makeDropdownOption("Don't show gaps", e.getTrackShowGaps(n) ? "normal" : "bold", !1, (function (t) {
                        t.stopPropagation(), g.css("font-weight", "normal"), _.css("font-weight", "bold"), u.showGapsCallback(n, !1)
                    }));
                s.append(g), s.append(_)
            }
            var m = e.getTrackCustomOptions(n);
            if (m && m.length > 0) for (var v = 0; v < m.length; v++) !function () {
                var e = m[v];
                e.separator ? s.append(t.$makeDropdownSeparator()) : s.append(t.$makeDropdownOption(e.label || "", e.weight || "normal", e.disabled, e.onClick && function (t) {
                    t.stopPropagation(), e.onClick(n)
                }))
            }();
            s.is(":empty") && (i.remove(), s.remove())
        }, t.prototype.enableInteraction = function () {
            this.interaction_disabled = !1
        }, t.prototype.disableInteraction = function () {
            this.interaction_disabled = !0
        }, t.prototype.suppressRendering = function () {
            this.rendering_suppressed = !0
        }, t.prototype.releaseRendering = function (t, e) {
            this.rendering_suppressed = !1, this.renderAllOptions(t), this.resize(t, e), this.scroll(t.getVertScroll())
        }, t.prototype.setScroll = function (t) {
            this.setVertScroll(t)
        }, t.prototype.setHorzScroll = function (t) {
        }, t.prototype.setVertScroll = function (t) {
            this.scroll(t.getVertScroll())
        }, t.prototype.setZoom = function (t, e) {
            this.setVertZoom(t, e)
        }, t.prototype.setVertZoom = function (t, e) {
            this.renderAllOptions(t), this.resize(t, e)
        }, t.prototype.setTrackGroupHeader = function (t, e) {
            this.renderAllOptions(t), this.resize(t, e)
        }, t.prototype.sort = function (t, e) {
            this.renderAllOptions(t), this.resize(t, e)
        }, t.prototype.setViewport = function (t, e) {
            this.renderAllOptions(t), this.resize(t, e), this.scroll(t.getVertScroll())
        }, t.prototype.getWidth = function () {
            return this.$buttons_ctr.is(":empty") ? 0 : 18 + this.img_size
        }, t.prototype.setTrackShowGaps = function (t, e) {
            this.renderAllOptions(t), this.resize(t, e)
        }, t.prototype.addTracks = function (t, e) {
            this.renderAllOptions(t), this.resize(t, e)
        }, t.prototype.moveTrack = function (t, e) {
            this.renderAllOptions(t), this.resize(t, e)
        }, t.prototype.setTrackGroupOrder = function (t) {
            this.renderAllOptions(t)
        }, t.prototype.setSortConfig = function (t) {
            this.renderAllOptions(t)
        }, t.prototype.removeTrack = function (t, e, n) {
            delete this.track_options_$elts[e], this.renderAllOptions(t), this.resize(t, n)
        }, t.prototype.destroy = function () {
            c()(document).off("click", this.clickHandler), c()(document).off(Dt)
        }, t.prototype.setTrackCustomOptions = function (t) {
            this.renderAllOptions(t)
        }, t.prototype.setTrackMovable = function (t) {
            this.renderAllOptions(t)
        }, t
    }();
    var Ot = function () {
        function t(t, e, n) {
            this.$div = t, this.base_width = e, this.base_height = n, this.rendering_suppressed = !1, this.rule_set_label_config = {
                weight: "bold",
                size: 12,
                font: "Arial"
            }, this.rule_label_config = {
                weight: "normal",
                size: 12,
                font: "Arial"
            }, this.padding_after_rule_set_label = 10, this.padding_between_rules = 20, this.padding_between_rule_set_rows = 10, this.$svg = c()(H.svg(200, 200)).appendTo(this.$div), this.width = t.width()
        }

        return t.prototype.renderLegend = function (t, e, n) {
            if (!this.rendering_suppressed && (void 0 === e && (e = this.$svg[0]), function (t) {
                for (var e = !0; t && "html" !== t.tagName.toLowerCase();) {
                    if ("none" === c()(t).css("display")) {
                        e = !1;
                        break
                    }
                    t = t.parentNode
                }
                return e
            }(e))) {
                c()(e).empty();
                var r = H.defs();
                e.appendChild(r);
                var i = H.group(0, 0);
                e.appendChild(i);
                for (var o = t.getRuleSets(), a = 0, s = function (s) {
                    if (o[s].exclude_from_legend && !n) return "continue";
                    var u = t.getActiveRules(o[s].rule_set_id);
                    if (0 === u.length) return "continue";
                    var c = H.group(0, a);
                    i.appendChild(c), function () {
                        if (void 0 !== o[s].legend_label && o[s].legend_label.length > 0) {
                            var t = H.text(o[s].legend_label, 0, 0, 12, "Arial", "bold");
                            c.appendChild(t), H.wrapText(t, 200)
                        }
                    }();
                    var h = 200 + l.padding_after_rule_set_label, f = 0, d = function (t, e) {
                        var n = t.rule.legend_label, r = e.rule.legend_label;
                        return n && r ? n.localeCompare(r) : n || r ? n ? r ? void 0 : 1 : -1 : 0
                    };
                    u.sort((function (t, e) {
                        var n = t.rule.legend_order, r = e.rule.legend_order;
                        return void 0 === n && void 0 === r ? d(t, e) : void 0 !== n && void 0 !== r ? n < r ? -1 : n > r ? 1 : d(t, e) : void 0 === n ? r === Number.POSITIVE_INFINITY ? -1 : 1 : void 0 === r ? n === Number.POSITIVE_INFINITY ? 1 : -1 : void 0
                    }));
                    for (var p = 0; p < u.length; p++) {
                        var g = u[p].rule;
                        if (!g.exclude_from_legend) {
                            var _ = l.ruleToSVGGroup(g, t, e, r);
                            _.setAttribute("transform", "translate(" + h + "," + f + ")"), c.appendChild(_), h + _.getBBox().width > l.width && (h = 200 + l.padding_after_rule_set_label, f = c.getBBox().height + l.padding_between_rule_set_rows, _.setAttribute("transform", "translate(" + h + "," + f + ")")), h += _.getBBox().width, h += l.padding_between_rules
                        }
                    }
                    a += c.getBBox().height, a += 3 * l.padding_between_rule_set_rows
                }, l = this, u = 0; u < o.length; u++) s(u);
                var h = i.getBBox();
                this.$svg[0].setAttribute("width", h.width.toString()), this.$svg[0].setAttribute("height", (h.height + 10).toString())
            }
        }, t.prototype.ruleToSVGGroup = function (t, e, n, r) {
            var i = H.group(0, 0), o = t.getLegendConfig();
            if ("rule" === o.type) {
                var a = t.apply(o.target, e.getCellWidth(!0), this.base_height);
                if (t.legend_base_color) {
                    var s = H.rect(0, 0, e.getCellWidth(!0), this.base_height, t.legend_base_color);
                    i.appendChild(s)
                }
                for (var l = 0; l < a.length; l++) i.appendChild(H.fromShape(a[l], 0, 0));
                if (void 0 !== t.legend_label) {
                    var u = H.text(t.legend_label, e.getCellWidth(!0) + 5, this.base_height / 2, 12, "Arial", "normal");
                    n.appendChild(u);
                    var c = u.getBBox().height;
                    u.setAttribute("y", (parseFloat(u.getAttribute("y")) - c / 2).toString()), n.removeChild(u), i.appendChild(u)
                }
            } else if ("number" === o.type) {
                var h = o.range.map((function (t) {
                    var e = Math.pow(10, 2);
                    return Math.round(t * e) / e
                }));
                i.appendChild(H.text(h[0].toString(), 0, 0, 12, "Arial", "normal")), i.appendChild(H.text(h[1].toString(), 50, 0, 12, "Arial", "normal"));
                var f = [], d = null, p = null;
                if ("NON_POSITIVE" === o.range_type) d = o.negative_color; else if ("NON_NEGATIVE" === o.range_type) d = o.positive_color; else if ("ALL" === o.range_type) {
                    p = H.linearGradient();
                    var g = Math.abs(h[0]) / (Math.abs(h[0]) + h[1]) * 100;
                    p.appendChild(H.stop(g, o.negative_color)), p.appendChild(H.stop(g, o.positive_color)), r.appendChild(p)
                }
                f.push([5, 20]);
                for (l = 0; l < 100; l++) {
                    var _ = l / 100;
                    c = 20 * o.interpFn((1 - _) * o.range[0] + _ * o.range[1]);
                    f.push([5 + 40 * l / 100, 20 - c])
                }
                f.push([45, 20]), i.appendChild(H.path(f, d, d, p))
            } else if ("gradient" === o.type) {
                h = o.range.map((function (t) {
                    var e = Math.pow(10, 2);
                    return Math.round(t * e) / e
                }));
                var m = H.gradient(o.colorFn), v = m.getAttribute("id");
                r.appendChild(m), i.appendChild(H.text(h[0].toString(), 0, 0, 12, "Arial", "normal")), i.appendChild(H.text(h[1].toString(), 120, 0, 12, "Arial", "normal")), i.appendChild(H.rect(30, 0, 60, 20, "url(#" + v + ")"))
            }
            return i
        }, t.prototype.setWidth = function (t, e) {
            this.width = t, this.renderLegend(e)
        }, t.prototype.removeTrack = function (t) {
            this.renderLegend(t)
        }, t.prototype.addTracks = function (t) {
            this.renderLegend(t)
        }, t.prototype.setTrackData = function (t) {
            this.renderLegend(t)
        }, t.prototype.setTrackImportantIds = function (t) {
            this.renderLegend(t)
        }, t.prototype.shareRuleSet = function (t) {
            this.renderLegend(t)
        }, t.prototype.setRuleSet = function (t) {
            this.renderLegend(t)
        }, t.prototype.setTrackGroupLegendOrder = function (t) {
            this.renderLegend(t)
        }, t.prototype.hideTrackLegends = function (t) {
            this.renderLegend(t)
        }, t.prototype.showTrackLegends = function (t) {
            this.renderLegend(t)
        }, t.prototype.suppressRendering = function () {
            this.rendering_suppressed = !0
        }, t.prototype.releaseRendering = function (t) {
            this.rendering_suppressed = !1, this.renderLegend(t)
        }, t.prototype.toSVGGroup = function (t, e, n) {
            var r = H.group(e || 0, n || 0);
            return this.$svg.append(r), this.renderLegend(t, r, !0), r.parentNode.removeChild(r), r
        }, t
    }(), Lt = function () {
        function t(t, e) {
            this.$container = t, e = e || {}, this.$div = c()("<div></div>").addClass("oncoprintjs__tooltip").appendTo(t).css({
                "background-color": "rgba(255,255,255,1)",
                position: "absolute",
                display: "none",
                border: "1px solid black",
                "max-width": 300,
                "min-width": 150
            }), e.noselect && this.$div.addClass("noselect"), this.hide_timeout_id = void 0, this.show_timeout_id = void 0, this.center = !1, this.shown = !1;
            var n = this;
            this.$div.on("mousemove", (function (t) {
                t.stopPropagation(), n.cancelScheduledHide()
            })), this.$div.on("mouseleave", (function (t) {
                t.stopPropagation(), n.hide()
            }))
        }

        return t.prototype.show = function (t, e, n, r, i) {
            if (this.cancelScheduledHide(), void 0 === t || this.shown) this.doShow(e, n, r, i); else {
                var o = this;
                this.cancelScheduledShow(), this.show_timeout_id = setTimeout((function () {
                    o.doShow(e, n, r, i)
                }), t)
            }
        }, t.prototype.doShow = function (t, e, n, r) {
            this.cancelScheduledShow(), this.show_timeout_id = void 0, this.$div.empty(), this.$div.css({
                top: 0,
                left: 0,
                "z-index": 9999
            }), this.$div.append(n), r ? this.$div.stop().fadeIn("fast") : this.$div.show();
            var i = t - (this.center ? this.$div.width() / 2 : 0), o = e - this.$div.height();
            o = Math.max(o, 20), o = Math.min(o, c()(window).height() - this.$div.height()), i = Math.max(i, 20), i = Math.min(i, c()(window).width() - this.$div.width() - 20), this.$div.css({
                top: o,
                left: i,
                "z-index": 9999
            }), this.shown = !0
        }, t.prototype.doHide = function (t) {
            this.cancelScheduledHide(), this.hide_timeout_id = void 0, t ? this.$div.fadeOut() : this.$div.hide(), this.shown = !1
        }, t.prototype.cancelScheduledShow = function () {
            clearTimeout(this.show_timeout_id), this.show_timeout_id = void 0
        }, t.prototype.cancelScheduledHide = function () {
            clearTimeout(this.hide_timeout_id), this.hide_timeout_id = void 0
        }, t.prototype.showIfNotAlreadyGoingTo = function (t, e, n, r) {
            void 0 === this.show_timeout_id && this.show(t, e, n, r)
        }, t.prototype.hideIfNotAlreadyGoingTo = function (t) {
            void 0 === this.hide_timeout_id && this.hide(t)
        }, t.prototype.hide = function (t) {
            if (this.cancelScheduledShow(), this.shown) if (void 0 !== t) {
                var e = this;
                this.cancelScheduledHide(), this.hide_timeout_id = setTimeout((function () {
                    e.doHide()
                }), t)
            } else this.doHide()
        }, t.prototype.fadeIn = function (t, e, n, r) {
            this.show(t, e, n, r, !0)
        }, t
    }(), Rt = function () {
        function t(t, e) {
            this.$div = t, this.tooltip = e, this.base_font_size = 12, this.font_family = "Arial", this.font_weight = "bold", this.width = 0, this.$label_elts = [], this.rendering_suppressed = !1, this.tooltip.center = !1, this.$ctr = c()("<div></div>").css({
                position: "absolute",
                "overflow-y": "hidden",
                "overflow-x": "hidden"
            }).appendTo(this.$div), this.$text_ctr = c()("<div></div>").css({position: "absolute"}).appendTo(this.$ctr)
        }

        return t.prototype.destroyLabelElts = function () {
            for (var t = 0; t < this.$label_elts.length; t++) this.$label_elts[t].off("mousemove mouseleave");
            this.$label_elts = []
        }, t.prototype.renderAllInfo = function (t) {
            if (!this.rendering_suppressed) {
                this.$text_ctr.empty(), this.destroyLabelElts();
                var e = t.getTracks();
                this.minimum_track_height = Number.POSITIVE_INFINITY;
                for (var n = 0; n < e.length; n++) this.minimum_track_height = Math.min(this.minimum_track_height, t.getTrackHeight(e[n]));
                this.width = 0;
                var r = t.getLabelTops();
                this.scroll(t.getVertScroll());
                for (var i = this.getFontSize(), o = this, a = function (n) {
                    !function () {
                        var a = n, s = c()("<span>").css({
                            position: "absolute",
                            "font-family": o.font_family,
                            "font-weight": o.font_weight,
                            "font-size": i
                        }).addClass("noselect"), l = t.getTrackInfo(e[a]);
                        if (l) {
                            s.text(l), s.appendTo(o.$text_ctr), o.$label_elts.push(s), setTimeout((function () {
                                s.on("mousemove", (function () {
                                    var n = t.$getTrackInfoTooltip(e[a]);
                                    if (n) {
                                        var r = s[0].getBoundingClientRect();
                                        o.tooltip.fadeIn(200, r.left, r.top, n)
                                    }
                                })).on("mouseleave", (function () {
                                    o.tooltip.hideIfNotAlreadyGoingTo(150)
                                }))
                            }), 0);
                            var u = r[e[a]] + (t.getCellHeight(e[a]) - s.outerHeight()) / 2;
                            s.css({top: u + "px"}), o.width = Math.max(32, o.width, s[0].clientWidth)
                        }
                    }()
                }, s = 0; s < e.length; s++) a(s);
                this.width > 0 && (this.width += 10)
            }
        }, t.prototype.scroll = function (t) {
            this.rendering_suppressed || this.$text_ctr.css({top: -t})
        }, t.prototype.resize = function (t, e) {
            this.rendering_suppressed || (this.$div.css({
                width: this.getWidth(),
                height: e()
            }), this.$ctr.css({width: this.getWidth(), height: e()}))
        }, t.prototype.getFontSize = function () {
            return Math.max(Math.min(this.base_font_size, this.minimum_track_height), 7)
        }, t.prototype.getWidth = function () {
            return this.width
        }, t.prototype.addTracks = function (t, e) {
            this.renderAllInfo(t), this.resize(t, e)
        }, t.prototype.moveTrack = function (t, e) {
            this.renderAllInfo(t), this.resize(t, e)
        }, t.prototype.setTrackGroupOrder = function (t, e) {
            this.renderAllInfo(t), this.resize(t, e)
        }, t.prototype.removeTrack = function (t, e) {
            this.renderAllInfo(t), this.resize(t, e)
        }, t.prototype.setTrackInfo = function (t, e) {
            this.renderAllInfo(t), this.resize(t, e)
        }, t.prototype.setTrackGroupHeader = function (t, e) {
            this.renderAllInfo(t), this.resize(t, e)
        }, t.prototype.setScroll = function (t) {
            this.setVertScroll(t)
        }, t.prototype.setHorzScroll = function (t) {
        }, t.prototype.setVertScroll = function (t) {
            this.scroll(t.getVertScroll())
        }, t.prototype.setZoom = function (t, e) {
            this.setVertZoom(t, e)
        }, t.prototype.setViewport = function (t, e) {
            this.renderAllInfo(t), this.resize(t, e), this.scroll(t.getVertScroll())
        }, t.prototype.setVertZoom = function (t, e) {
            this.renderAllInfo(t), this.resize(t, e)
        }, t.prototype.suppressRendering = function () {
            this.rendering_suppressed = !0
        }, t.prototype.releaseRendering = function (t, e) {
            this.rendering_suppressed = !1, this.renderAllInfo(t), this.resize(t, e), this.scroll(t.getVertScroll())
        }, t.prototype.destroy = function () {
            this.destroyLabelElts()
        }, t.prototype.toSVGGroup = function (t, e, n) {
            for (var r = H.group(e || 0, n || 0), i = t.getCellTops(), o = t.getTracks(), a = this.getFontSize(), s = 0; s < o.length; s++) {
                var l = o[s], u = i[l] + t.getCellHeight(l) / 2, c = t.getTrackInfo(l),
                    h = H.text(c, 0, u, a, this.font_family, this.font_weight, "bottom");
                h.setAttribute("dy", "0.35em"), r.appendChild(h)
            }
            return r
        }, t
    }();
    var Et, Ft = function () {
        function t(t, e) {
            this.$div = c()("<div>").css({
                position: "absolute",
                top: e.top || 0,
                left: e.left || 0
            }).appendTo(t), (e = e || {}).btn_size = e.btn_size || 13, this.onChange = e.onChange || function () {
            }, this.initialize(e), this.value = void 0 === e.init_val ? .5 : e.init_val, this.slider_bar_size = ("v" === this.orientation ? e.height : e.width) - 2 * e.btn_size, this.updateSliderPos()
        }

        return t.prototype.initialize = function (t) {
            var e = this.$div, n = Math.round(.7 * t.btn_size), r = Math.round((t.btn_size - n) / 2),
                i = c()("<div>").css({
                    position: "absolute",
                    "background-color": "#ffffff",
                    outline: "solid 1px black"
                }).appendTo(e), o = c()("<div>").css({
                    position: "absolute",
                    "background-color": "#ffffff",
                    border: "solid 1px black",
                    "border-radius": "3px",
                    cursor: "pointer"
                }).appendTo(e), a = c()("<div>").css({
                    position: "absolute",
                    "min-height": t.btn_size,
                    "min-width": t.btn_size,
                    "background-color": "#ffffff",
                    border: "solid 1px black",
                    "border-radius": "3px",
                    cursor: "pointer"
                }).appendTo(e);
            c()("<span>").addClass("icon fa fa-plus").css({
                position: "absolute",
                top: r,
                left: r,
                "min-width": n,
                "min-height": n
            }).appendTo(a);
            var s = c()("<div>").css({
                position: "absolute",
                "min-height": t.btn_size,
                "min-width": t.btn_size,
                "background-color": "#ffffff",
                border: "solid 1px black",
                "border-radius": "3px",
                cursor: "pointer"
            }).appendTo(e);
            c()("<span>").addClass("icon fa fa-minus").css({
                position: "absolute",
                top: r,
                left: r,
                "min-width": n,
                "min-height": n
            }).appendTo(s), t.vertical ? (i.css({
                "min-height": t.height - 2 * t.btn_size,
                "min-width": Math.round(t.btn_size / 5)
            }), o.css({"min-height": Math.round(t.btn_size / 2), "min-width": t.btn_size}), a.css({
                top: 0,
                left: 0
            }), s.css({top: t.height - t.btn_size, left: 0}), i.css({
                top: t.btn_size,
                left: .4 * t.btn_size
            }), o.css({left: 0}), this.orientation = "v") : (i.css({
                "min-height": Math.round(t.btn_size / 5),
                "min-width": t.width - 2 * t.btn_size
            }), o.css({"min-height": t.btn_size, "min-width": Math.round(t.btn_size / 2)}), a.css({
                top: 0,
                left: t.width - t.btn_size
            }), s.css({top: 0, left: 0}), i.css({
                top: .4 * t.btn_size,
                left: t.btn_size
            }), o.css({top: 0}), this.orientation = "h");
            var l = this;
            a.click((function () {
                l.value /= .7, t.onChange(l.value)
            })), s.click((function () {
                l.value *= .7, t.onChange(l.value)
            })), [o, a, s].map((function (t) {
                t.hover((function () {
                    c()(this).css({"background-color": "#cccccc"})
                }), (function () {
                    c()(this).css({"background-color": "#ffffff"})
                }))
            })), this.$slider = o, this.$plus_btn = a, this.$minus_btn = s, function () {
                var t, e, n;

                function r(n) {
                    n.stopPropagation(), n.preventDefault();
                    var r = ("v" === l.orientation ? t - n.pageY : n.pageX - t) / l.slider_bar_size;
                    l.setSliderValue(e + r)
                }

                l.$slider.on("mousedown", (function (i) {
                    t = "v" === l.orientation ? i.pageY : i.pageX, e = l.value, n = !0, c()(document).on("mousemove", r)
                })), c()(document).on("mouseup click", (function () {
                    c()(document).off("mousemove", r), n && e !== l.value && l.onChange(l.value), n = !1
                }))
            }()
        }, t.prototype.updateSliderPos = function () {
            var t = this.value, e = this.$slider, n = this.getSliderBounds();
            "v" === this.orientation ? e.css("top", n.bottom * (1 - t) + n.top * t) : "h" === this.orientation && e.css("left", n.left * (1 - t) + n.right * t)
        }, t.prototype.getSliderBounds = function () {
            return "v" === this.orientation ? {
                bottom: parseInt(this.$minus_btn.css("top"), 10) - parseInt(this.$slider.css("min-height"), 10),
                top: parseInt(this.$plus_btn.css("top"), 10) + parseInt(this.$plus_btn.css("min-height"), 10)
            } : {
                left: parseInt(this.$minus_btn.css("left"), 10) + parseInt(this.$minus_btn.css("min-width"), 10),
                right: parseInt(this.$plus_btn.css("left"), 10) - parseInt(this.$slider.css("min-width"), 10)
            }
        }, t.prototype.setSliderValue = function (t) {
            var e;
            this.value = (e = t, Math.max(Math.min(e, 1), 0)), this.updateSliderPos()
        }, t
    }(), Nt = n(9), Pt = n.n(Nt), jt = function () {
        function t(t, e) {
            this.params = t, this.getCellWidth = e
        }

        return t.prototype.setParams = function (t) {
            this.params = t
        }, t.prototype.clone = function () {
            return new t(h(this.params), this.getCellWidth)
        }, Object.defineProperty(t.prototype, "left_col", {
            get: function () {
                return this.params.left_col
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "right_col", {
            get: function () {
                return this.params.right_col
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "top", {
            get: function () {
                return this.params.top
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "height", {
            get: function () {
                return this.params.height
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "num_cols", {
            get: function () {
                return this.right_col - this.left_col
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "left", {
            get: function () {
                return this.left_col * this.getCellWidth()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "right", {
            get: function () {
                return this.right_col * this.getCellWidth()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "width", {
            get: function () {
                return this.right - this.left
            }, enumerable: !1, configurable: !0
        }), t
    }(), Ht = function () {
        function t(t, e, n, r, i, o, a, s, l, u, h, f, d) {
            var p = this;
            this.$div = t, this.$canvas = e, this.$overlay_canvas = n, this.layout_numbers = {
                window_width: -1,
                window_height: -1,
                vertical_zoom_area_width: -1,
                horizontal_zoom_area_height: -1,
                padding: -1,
                window_bar_height: -1,
                canvas_left: -1,
                canvas_top: -1
            }, this.resize_hover = !1, this.rendering_suppressed = !1, this.visible = !1, this.$div = t, this.$canvas = e, this.$overlay_canvas = n, this.current_rect = new jt({
                top: 0,
                left_col: 0,
                right_col: 0,
                height: 0
            }, (function () {
                return r.getCellWidth(!0) * p.getZoom(r).x
            }));
            var g, m, v, y = this;
            this.handleContextLost = function () {
                y.drawOncoprintAndOverlayRect(r, i)
            }.bind(this), this.$canvas[0].addEventListener("webglcontextlost", this.handleContextLost), this.layout_numbers = {
                window_width: 4 + o + 4 + 20,
                window_height: 24 + a + 4 + 20,
                vertical_zoom_area_width: 20,
                horizontal_zoom_area_height: 20,
                padding: 4,
                window_bar_height: 20,
                canvas_left: 4,
                canvas_top: 24
            }, this.$div.css({
                "min-width": this.layout_numbers.window_width,
                "min-height": this.layout_numbers.window_height,
                outline: "solid 1px black",
                "background-color": "#ffffff"
            }), this.$window_bar = c()("<div>").css({
                position: "absolute",
                "min-width": this.layout_numbers.window_width,
                "min-height": this.layout_numbers.window_bar_height,
                "background-color": "#cccccc"
            }).appendTo(this.$div), this.$close_btn = c()("<div>").css({
                position: "absolute",
                top: 3,
                left: 3,
                "min-width": this.layout_numbers.window_bar_height - 6,
                "min-height": this.layout_numbers.window_bar_height - 6,
                cursor: "pointer"
            }).appendTo(this.$div), c()("<span>").addClass("icon fa fa-times-circle").css("font-size", this.layout_numbers.window_bar_height - 6 + "px").appendTo(this.$close_btn), this.$close_btn.click(d || function () {
            }), this.$canvas[0].width = o, this.$canvas[0].height = a, this.$canvas.css({
                top: this.layout_numbers.canvas_top,
                left: this.layout_numbers.canvas_left
            }), this.$overlay_canvas[0].width = o, this.$overlay_canvas[0].height = o, this.$overlay_canvas.css({
                top: this.layout_numbers.canvas_top,
                left: this.layout_numbers.canvas_left,
                outline: "solid 1px #444444"
            }), this.horizontal_zoom = new Ft(this.$div, {
                btn_size: this.layout_numbers.horizontal_zoom_area_height - 4,
                horizontal: !0,
                width: o,
                init_val: r.getHorzZoom(),
                left: 4,
                top: this.layout_numbers.canvas_top + a + 4,
                onChange: function (t) {
                    u(t)
                }
            }), this.vertical_zoom = new Ft(this.$div, {
                btn_size: this.layout_numbers.vertical_zoom_area_width - 4,
                vertical: !0,
                height: a,
                init_val: r.getVertZoom(),
                left: this.layout_numbers.canvas_left + o + 4,
                top: this.layout_numbers.window_bar_height + 4,
                onChange: function (t) {
                    h(t)
                }
            }), g = y.layout_numbers.horizontal_zoom_area_height - 4, m = y.layout_numbers.vertical_zoom_area_width - 4, (v = c()("<div>").css({
                position: "absolute",
                "min-height": g,
                "min-width": m,
                outline: "solid 1px black",
                left: y.layout_numbers.canvas_left + o + 4,
                top: y.layout_numbers.canvas_top + a + 4,
                "background-size": m - 4 + "px " + (g - 4) + "px",
                "background-position": "2px 2px",
                "background-image": "url(" + Pt.a + ")",
                "background-repeat": "no-repeat",
                cursor: "pointer"
            }).addClass("oncoprint-zoomtofit-btn").appendTo(t)).hover((function () {
                c()(this).css({"background-color": "#cccccc"})
            }), (function () {
                c()(this).css({"background-color": "#ffffff"})
            })), f = f || function () {
            }, v.click(f), this.getWebGLContextAndSetUpMatrices(), this.setUpShaders(), this.overlay_ctx = n[0].getContext("2d");

            function b(t, e) {
                return t >= y.current_rect.left + 5 && t <= y.current_rect.left + y.current_rect.width - 5 && e >= y.current_rect.top + 5 && e <= y.current_rect.top + y.current_rect.height - 5
            }

            function x(t, e) {
                return t >= y.current_rect.left - 5 && t <= y.current_rect.left + y.current_rect.width + 5 && e >= y.current_rect.top - 5 && e <= y.current_rect.top + y.current_rect.height + 5
            }

            function w(t, e) {
                return !T(t, e) && !C(t, e) && !I(t, e) && !A(t, e) && x(t, e) && Math.abs(t - (y.current_rect.left + y.current_rect.width)) < 5
            }

            function k(t, e) {
                return !T(t, e) && !C(t, e) && !I(t, e) && !A(t, e) && x(t, e) && Math.abs(t - y.current_rect.left) < 5
            }

            function S(t, e) {
                return !T(t, e) && !C(t, e) && !I(t, e) && !A(t, e) && x(t, e) && Math.abs(e - y.current_rect.top) < 5
            }

            function M(t, e) {
                return !T(t, e) && !C(t, e) && !I(t, e) && !A(t, e) && x(t, e) && Math.abs(e - (y.current_rect.top + y.current_rect.height)) < 5
            }

            function T(t, e) {
                return Math.abs(e - y.current_rect.top) < 5 && Math.abs(t - y.current_rect.left) < 5
            }

            function I(t, e) {
                return Math.abs(e - (y.current_rect.top + y.current_rect.height)) < 5 && Math.abs(t - y.current_rect.left) < 5
            }

            function C(t, e) {
                return Math.abs(e - y.current_rect.top) < 5 && Math.abs(t - (y.current_rect.left + y.current_rect.width)) < 5
            }

            function A(t, e) {
                return Math.abs(e - (y.current_rect.top + y.current_rect.height)) < 5 && Math.abs(t - (y.current_rect.left + y.current_rect.width)) < 5
            }

            function D(t, e) {
                void 0 === t ? y.resize_hover = !1 : w(t, e) ? y.resize_hover = "r" : k(t, e) ? y.resize_hover = "l" : S(t, e) ? y.resize_hover = "t" : M(t, e) ? y.resize_hover = "b" : T(t, e) ? y.resize_hover = "tl" : A(t, e) ? y.resize_hover = "br" : I(t, e) ? y.resize_hover = "bl" : C(t, e) ? y.resize_hover = "tr" : y.resize_hover = !1
            }

            function z(e, n) {
                var r;
                r = void 0 === e ? "auto" : b(e, n) ? "move" : w(e, n) || k(e, n) ? "ew-resize" : S(e, n) || M(e, n) ? "ns-resize" : T(e, n) || A(e, n) ? "nwse-resize" : I(e, n) || C(e, n) ? "nesw-resize" : "auto", t.css("cursor", r)
            }

            function O(t, e, n) {
                var r = parseInt(t.$canvas[0].style.top, 10), i = parseInt(t.$canvas[0].style.left, 10),
                    o = parseInt(t.$canvas[0].width, 10), a = parseInt(t.$canvas[0].height, 10), s = e - i, l = n - r;
                return {mouse_x: s, mouse_y: l, outside: s < 0 || s >= o || l < 0 || l >= a}
            }

            var L, R = !1, E = !1, F = -1, N = -1, P = -1, j = -1, H = -1, V = -1;
            c()(document).on("mousedown", (function (t) {
                var e = y.$div.offset(), n = t.pageX - e.left, i = t.pageY - e.top, o = O(y, n, i);
                if (!o.outside) {
                    var a = o.mouse_x, s = o.mouse_y;
                    R = !1, E = !1, V = r.getOncoprintHeight() / parseInt(y.$canvas[0].height, 10), b(a, s) ? E = "move" : w(a, s) ? E = "resize_r" : k(a, s) ? E = "resize_l" : S(a, s) ? E = "resize_t" : M(a, s) ? E = "resize_b" : C(a, s) ? E = "resize_tr" : A(a, s) ? E = "resize_br" : T(a, s) ? E = "resize_tl" : I(a, s) && (E = "resize_bl"), !1 !== E && (R = !0, P = a, j = s, F = r.getClosestColumnIndexToLeft(r.getHorzScroll(), !0), N = r.getVertScroll(), H = r.getVertZoom(), L = y.current_rect.clone())
                }
            })), c()(document).on("mousemove", (function (t) {
                var e = y.$div.offset(), n = t.pageX - e.left, o = t.pageY - e.top, a = O(y, n, o), l = a.mouse_x,
                    u = a.mouse_y, c = y.getZoom(r), h = r.getCellWidth(!0) * c.x;
                if (R) {
                    t.preventDefault();
                    var f = Math.floor(l / h) - Math.floor(P / h), d = u - j;
                    if ("move" === E) {
                        var p = d * V;
                        s(y.colToLeft(r, _(F + f, 0, r.getIdOrder().length - 1)), N + p)
                    } else {
                        var g = void 0;
                        c = y.getZoom(r);
                        var m = r.getIdOrder().length,
                            v = Math.ceil(i.getVisibleAreaWidth() / (r.getCellWidth(!0) + r.getCellPadding(!0, !0))),
                            b = r.getOncoprintHeight(!0) * c.y, x = i.getVisibleAreaHeight(r) * c.y, w = L.right_col,
                            k = L.top + L.height;
                        "resize_r" === E ? (f = _(f, v - L.num_cols, m - L.num_cols), f = Math.min(f, m - w), g = {
                            top: L.top,
                            left_col: L.left_col,
                            right_col: L.right_col + f,
                            height: L.height
                        }) : "resize_l" === E ? (f = _(f, L.num_cols - m, L.num_cols - v), f = Math.max(f, -L.left_col), g = {
                            top: L.top,
                            left_col: L.left_col + f,
                            right_col: L.right_col,
                            height: L.height
                        }) : "resize_t" === E ? (d = _(d, L.height - b, L.height - x), d = Math.max(d, -L.top), g = {
                            top: L.top + d,
                            left_col: L.left_col,
                            right_col: L.right_col,
                            height: L.height - d
                        }) : "resize_b" === E ? (d = _(d, x - L.height, b - L.height), d = Math.min(d, b - k), g = {
                            top: L.top,
                            left_col: L.left_col,
                            right_col: L.right_col,
                            height: L.height + d
                        }) : "resize_tr" === E ? (f = _(f, v - L.num_cols, m - L.num_cols), f = Math.min(f, m - w), d = _(d, L.height - b, L.height - x), d = Math.max(d, -L.top), g = {
                            top: L.top + d,
                            left_col: L.left_col,
                            right_col: L.right_col + f,
                            height: L.height - d
                        }) : "resize_tl" === E ? (f = _(f, L.num_cols - m, L.num_cols - v), f = Math.max(f, -L.left_col), d = _(d, L.height - b, L.height - x), d = Math.max(d, -L.top), g = {
                            top: L.top + d,
                            left_col: L.left_col + f,
                            right_col: L.right_col,
                            height: L.height - d
                        }) : "resize_br" === E ? (d = _(d, x - L.height, b - L.height), d = Math.min(d, b - k), f = _(f, v - L.num_cols, m - L.num_cols), f = Math.min(f, m - w), g = {
                            top: L.top,
                            left_col: L.left_col,
                            right_col: L.right_col + f,
                            height: L.height + d
                        }) : "resize_bl" === E && (d = _(d, x - L.height, b - L.height), d = Math.min(d, b - k), f = _(f, L.num_cols - m, L.num_cols - v), f = Math.max(f, -L.left_col), g = {
                            top: L.top,
                            left_col: L.left_col + f,
                            right_col: L.right_col,
                            height: L.height + d
                        }), y.current_rect.setParams(g), y.drawOverlayRect(null, null, y.current_rect)
                    }
                } else a.outside ? (z(), D()) : (z(l, u), D(l, u)), y.drawOverlayRect(r, i)
            })), c()(document).on("mouseup", (function (t) {
                var e = y.$div.offset(), n = t.pageX - e.left, o = t.pageY - e.top;
                R && (["resize_t", "resize_b", "resize_l", "resize_r", "resize_tl", "resize_tr", "resize_bl", "resize_br"].indexOf(E) > -1 && l({
                    left_col: y.current_rect.left_col,
                    scroll_y_proportion: y.current_rect.top / parseInt(y.$canvas[0].height, 10),
                    right_col: y.current_rect.right_col,
                    zoom_y: L.height / y.current_rect.height * H
                }), R = !1, E = !1);
                var a = O(y, n, o);
                if (a.outside) z(), D(); else {
                    var s = a.mouse_x, u = a.mouse_y;
                    z(s, u), D(s, u)
                }
                y.drawOverlayRect(r, i)
            })), function () {
                var t = 0, e = 0, n = 0, r = 0;

                function i(i) {
                    i.preventDefault();
                    var o = i.pageX - t, a = i.pageY - e;
                    y.setWindowPosition(n + o, r + a)
                }

                y.$window_bar.hover((function () {
                    c()(this).css({cursor: "move"})
                }), (function () {
                    c()(this).css({cursor: "auto"})
                })), y.$window_bar.on("mousedown", (function (o) {
                    t = o.pageX, e = o.pageY, n = parseInt(y.$div.css("left"), 10), r = parseInt(y.$div.css("top"), 10), c()(document).on("mousemove", i)
                })), c()(document).on("mouseup click", (function () {
                    c()(document).off("mousemove", i)
                }))
            }()
        }

        return t.prototype.colToLeft = function (t, e) {
            return t.getZoomedColumnLeft(t.getIdOrder()[e])
        }, Object.defineProperty(t.prototype, "shouldRender", {
            get: function () {
                return this.visible && !this.rendering_suppressed
            }, enumerable: !1, configurable: !0
        }), t.prototype.getNewCanvas = function () {
            var t = this.$canvas[0];
            t.removeEventListener("webglcontextlost", this.handleContextLost);
            var e = t.cloneNode();
            e.addEventListener("webglcontextlost", this.handleContextLost);
            var n = t.parentNode;
            n.removeChild(t), n.insertBefore(e, this.$overlay_canvas[0]), this.$canvas = c()(e), this.ctx = null
        }, t.prototype.getWebGLCanvasContext = function () {
            try {
                var t = this.$canvas[0], e = this.ctx || t.getContext("experimental-webgl", {alpha: !1, antialias: !0});
                return e.clearColor(1, 1, 1, 1), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.viewportWidth = t.width, e.viewportHeight = t.height, e.viewport(0, 0, e.viewportWidth, e.viewportHeight), e.enable(e.DEPTH_TEST), e.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), e.depthMask(!1), e
            } catch (t) {
                return null
            }
        }, t.prototype.ensureWebGLContext = function () {
            for (var t = 0; t < 5 && (!this.ctx || this.ctx.isContextLost()); t++) this.getNewCanvas(), this.ctx = this.getWebGLCanvasContext(), this.setUpShaders();
            if (!this.ctx || this.ctx.isContextLost()) throw new Error("Unable to get WebGL context for Oncoprint Minimap")
        }, t.prototype.createShaderProgram = function (t, e) {
            var n = this.ctx.createProgram();
            if (this.ctx.attachShader(n, t), this.ctx.attachShader(n, e), this.ctx.linkProgram(n), !this.ctx.getProgramParameter(n, this.ctx.LINK_STATUS)) {
                var r = this.ctx.getProgramInfoLog(n);
                throw this.ctx.deleteProgram(n), "Unable to link shader program: " + r
            }
            return n
        }, t.prototype.createShader = function (t, e) {
            var n = this.ctx.createShader(this.ctx[e]);
            if (this.ctx.shaderSource(n, t), this.ctx.compileShader(n), !this.ctx.getShaderParameter(n, this.ctx.COMPILE_STATUS)) {
                var r = this.ctx.getShaderInfoLog(n);
                throw this.ctx.deleteShader(n), "Unable to compile shader: " + r
            }
            return n
        }, t.prototype.getWebGLContextAndSetUpMatrices = function () {
            this.ctx = this.getWebGLCanvasContext(), function (t) {
                var e = O.a.mat4.create();
                O.a.mat4.lookAt(e, [0, 0, 1], [0, 0, 0], [0, 1, 0]), t.mvMatrix = e;
                var n = O.a.mat4.create();
                O.a.mat4.ortho(n, 0, t.ctx.viewportWidth, t.ctx.viewportHeight, 0, -5, 1e3), t.pMatrix = n
            }(this)
        }, t.prototype.setUpShaders = function () {
            var t = ["precision highp float;", "attribute float aPosVertex;", "attribute float aColVertex;", "attribute float aVertexOncoprintColumn;", "uniform float columnWidth;", "uniform float zoomX;", "uniform float zoomY;", "uniform mat4 uMVMatrix;", "uniform mat4 uPMatrix;", "uniform float offsetY;", "uniform float positionBitPackBase;", "uniform float texSize;", "varying float texCoord;", "vec3 unpackVec3(float packedVec3, float base) {", "\tfloat pos0 = floor(packedVec3 / (base*base));", "\tfloat pos0Contr = pos0*base*base;", "\tfloat pos1 = floor((packedVec3 - pos0Contr)/base);", "\tfloat pos1Contr = pos1*base;", "\tfloat pos2 = packedVec3 - pos0Contr - pos1Contr;", "\treturn vec3(pos0, pos1, pos2);", "}", "void main(void) {", "\tgl_Position = vec4(unpackVec3(aPosVertex, positionBitPackBase), 1.0);", "\tgl_Position[0] += aVertexOncoprintColumn*columnWidth;", "\tgl_Position[1] += offsetY;", "\tgl_Position *= vec4(zoomX, zoomY, 1.0, 1.0);", "\tgl_Position = uPMatrix * uMVMatrix * gl_Position;", "\ttexCoord = (aColVertex + 0.5) / texSize;", "}"].join("\n"),
                e = ["precision mediump float;", "varying float texCoord;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(texCoord, 0.5));", "}"].join("\n"),
                n = this.createShader(t, "VERTEX_SHADER"), r = this.createShader(e, "FRAGMENT_SHADER"),
                i = this.createShaderProgram(n, r);
            i.vertexPositionAttribute = this.ctx.getAttribLocation(i, "aPosVertex"), this.ctx.enableVertexAttribArray(i.vertexPositionAttribute), i.vertexColorAttribute = this.ctx.getAttribLocation(i, "aColVertex"), this.ctx.enableVertexAttribArray(i.vertexColorAttribute), i.vertexOncoprintColumnAttribute = this.ctx.getAttribLocation(i, "aVertexOncoprintColumn"), this.ctx.enableVertexAttribArray(i.vertexOncoprintColumnAttribute), i.samplerUniform = this.ctx.getUniformLocation(i, "uSampler"), i.pMatrixUniform = this.ctx.getUniformLocation(i, "uPMatrix"), i.mvMatrixUniform = this.ctx.getUniformLocation(i, "uMVMatrix"), i.columnWidthUniform = this.ctx.getUniformLocation(i, "columnWidth"), i.zoomXUniform = this.ctx.getUniformLocation(i, "zoomX"), i.zoomYUniform = this.ctx.getUniformLocation(i, "zoomY"), i.offsetYUniform = this.ctx.getUniformLocation(i, "offsetY"), i.positionBitPackBaseUniform = this.ctx.getUniformLocation(i, "positionBitPackBase"), i.texSizeUniform = this.ctx.getUniformLocation(i, "texSize"), this.shader_program = i
        }, t.prototype.getTrackBuffers = function (t, e) {
            var n = this.ctx.createBuffer(), r = t.vertex_data[e].pos_array;
            this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, n), this.ctx.bufferData(this.ctx.ARRAY_BUFFER, new Float32Array(r), this.ctx.STATIC_DRAW), n.itemSize = 1, n.numItems = r.length / n.itemSize;
            var i = this.ctx.createBuffer(), o = t.vertex_data[e].col_array;
            this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, i), this.ctx.bufferData(this.ctx.ARRAY_BUFFER, new Float32Array(o), this.ctx.STATIC_DRAW), i.itemSize = 1, i.numItems = o.length / i.itemSize;
            var a = this.ctx.createTexture();
            this.ctx.bindTexture(this.ctx.TEXTURE_2D, a);
            for (var s = t.vertex_data[e].col_bank, l = Math.pow(2, Math.ceil(Math.log2(s.length / 4))); s.length < 4 * l;) s.push(0);
            this.ctx.texImage2D(this.ctx.TEXTURE_2D, 0, this.ctx.RGBA, l, 1, 0, this.ctx.RGBA, this.ctx.UNSIGNED_BYTE, new Uint8Array(s)), this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MIN_FILTER, this.ctx.NEAREST), this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MAG_FILTER, this.ctx.NEAREST);
            var u = {texture: a, size: l}, c = this.ctx.createBuffer(), h = t.vertex_column_array[e];
            return this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, c), this.ctx.bufferData(this.ctx.ARRAY_BUFFER, new Float32Array(h), this.ctx.STATIC_DRAW), c.itemSize = 1, c.numItems = h.length / c.itemSize, {
                position: n,
                color: i,
                color_tex: u,
                column: c
            }
        }, t.prototype.drawOncoprint = function (t, e) {
            if (this.shouldRender) {
                this.ensureWebGLContext();
                var n = this.getZoom(t);
                this.ctx.clearColor(1, 1, 1, 1), this.ctx.clear(this.ctx.COLOR_BUFFER_BIT | this.ctx.DEPTH_BUFFER_BIT);
                for (var r = t.getTracks(), i = 0; i < r.length; i++) {
                    var o = r[i], a = t.getCellTops(o, !0), s = this.getTrackBuffers(e, o);
                    0 !== s.position.numItems && (this.ctx.useProgram(this.shader_program), this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, s.position), this.ctx.vertexAttribPointer(this.shader_program.vertexPositionAttribute, s.position.itemSize, this.ctx.FLOAT, !1, 0, 0), this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, s.color), this.ctx.vertexAttribPointer(this.shader_program.vertexColorAttribute, s.color.itemSize, this.ctx.FLOAT, !1, 0, 0), this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, s.column), this.ctx.vertexAttribPointer(this.shader_program.vertexOncoprintColumnAttribute, s.column.itemSize, this.ctx.FLOAT, !1, 0, 0), this.ctx.activeTexture(this.ctx.TEXTURE0), this.ctx.bindTexture(this.ctx.TEXTURE_2D, s.color_tex.texture), this.ctx.uniform1i(this.shader_program.samplerUniform, 0), this.ctx.uniform1f(this.shader_program.texSizeUniform, s.color_tex.size), this.ctx.uniformMatrix4fv(this.shader_program.pMatrixUniform, !1, this.pMatrix), this.ctx.uniformMatrix4fv(this.shader_program.mvMatrixUniform, !1, this.mvMatrix), this.ctx.uniform1f(this.shader_program.columnWidthUniform, t.getCellWidth(!0)), this.ctx.uniform1f(this.shader_program.zoomXUniform, n.x), this.ctx.uniform1f(this.shader_program.zoomYUniform, n.y), this.ctx.uniform1f(this.shader_program.offsetYUniform, a), this.ctx.uniform1f(this.shader_program.positionBitPackBaseUniform, e.position_bit_pack_base), this.ctx.drawArrays(this.ctx.TRIANGLES, 0, s.position.numItems))
                }
            }
        }, t.prototype.getZoom = function (t) {
            var e = parseInt(this.$canvas[0].width, 10) / t.getOncoprintWidthNoColumnPaddingNoGaps(),
                n = parseInt(this.$canvas[0].height, 10) / t.getOncoprintHeight(!0);
            return {x: e = Math.max(0, Math.min(1, e)), y: n = Math.max(0, Math.min(1, n))}
        }, t.prototype.drawOverlayRect = function (t, e, n) {
            if (this.shouldRender) {
                var r, i, o, a, s, l;
                if (n) r = n.left, i = n.width, o = n.top, a = n.height, s = n.left_col, l = n.right_col; else {
                    var u = t.getCellWidth(!0), c = (t.getCellPadding(!0), e.getViewportOncoprintSpace(t)),
                        h = this.getZoom(t);
                    s = t.getClosestColumnIndexToLeft(c.left, !1), l = t.getClosestColumnIndexToLeft(c.right, !1, !0), r = s * u * h.x, i = (l - s) * u * h.x, o = c.top * h.y, a = (c.bottom - c.top) * h.y
                }
                var f = this.overlay_ctx, d = this.$overlay_canvas[0], p = parseInt(d.width, 10),
                    g = parseInt(d.height, 10);
                f.fillStyle = "rgba(0,0,0,0)", f.clearRect(0, 0, p, g), f.fillStyle = "rgba(255,255,255,0.4)", f.fillRect(r, o, i, a);
                var _ = "t" === this.resize_hover || "tr" === this.resize_hover || "tl" === this.resize_hover,
                    m = "r" === this.resize_hover || "tr" === this.resize_hover || "br" === this.resize_hover,
                    v = "b" === this.resize_hover || "br" === this.resize_hover || "bl" === this.resize_hover,
                    y = "l" === this.resize_hover || "tl" === this.resize_hover || "bl" === this.resize_hover;
                f.beginPath(), f.moveTo(r, o), f.strokeStyle = _ ? "rgba(255,0,0,1)" : "rgba(0,0,0,0.75)", f.lineWidth = _ ? 2 : 1, f.lineTo(r + i, o), f.stroke(), f.beginPath(), f.moveTo(r + i, o), f.strokeStyle = m ? "rgba(255,0,0,1)" : "rgba(0,0,0,0.75)", f.lineWidth = m ? 2 : 1, f.lineTo(r + i, o + a), f.stroke(), f.beginPath(), f.moveTo(r + i, o + a), f.strokeStyle = v ? "rgba(255,0,0,1)" : "rgba(0,0,0,0.75)", f.lineWidth = v ? 2 : 1, f.lineTo(r, o + a), f.stroke(), f.beginPath(), f.moveTo(r, o + a), f.strokeStyle = y ? "rgba(255,0,0,1)" : "rgba(0,0,0,0.75)", f.lineWidth = y ? 2 : 1, f.lineTo(r, o), f.stroke(), this.current_rect.setParams({
                    top: o,
                    left_col: s,
                    right_col: l,
                    height: a
                })
            }
        }, t.prototype.drawOncoprintAndOverlayRect = function (t, e) {
            this.shouldRender && (this.drawOncoprint(t, e), this.drawOverlayRect(t, e))
        }, t.prototype.moveTrack = function (t, e) {
            this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.addTracks = function (t, e) {
            this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.removeTrack = function (t, e) {
            this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.setHorzZoom = function (t, e) {
            this.drawOverlayRect(t, e), this.horizontal_zoom.setSliderValue(t.getHorzZoom())
        }, t.prototype.setVertZoom = function (t, e) {
            this.drawOverlayRect(t, e), this.vertical_zoom.setSliderValue(t.getVertZoom())
        }, t.prototype.setZoom = function (t, e) {
            this.drawOverlayRect(t, e), this.horizontal_zoom.setSliderValue(t.getHorzZoom()), this.vertical_zoom.setSliderValue(t.getVertZoom())
        }, t.prototype.setScroll = function (t, e) {
            this.drawOverlayRect(t, e)
        }, t.prototype.setHorzScroll = function (t, e) {
            this.drawOverlayRect(t, e)
        }, t.prototype.setVertScroll = function (t, e) {
            this.drawOverlayRect(t, e)
        }, t.prototype.setViewport = function (t, e) {
            this.drawOverlayRect(t, e), this.horizontal_zoom.setSliderValue(t.getHorzZoom()), this.vertical_zoom.setSliderValue(t.getVertZoom())
        }, t.prototype.sort = function (t, e) {
            this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.setTrackData = function (t, e) {
            this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.shareRuleSet = function (t, e) {
            this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.setRuleSet = function (t, e) {
            this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.setIdOrder = function (t, e) {
            this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.setTrackGroupHeader = function (t, e) {
            this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.suppressRendering = function () {
            this.rendering_suppressed = !0
        }, t.prototype.releaseRendering = function (t, e) {
            this.rendering_suppressed = !1, this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.hideIds = function (t, e) {
            this.drawOncoprintAndOverlayRect(t, e)
        }, t.prototype.setMinimapVisible = function (t, e, n) {
            this.visible = t, this.visible && e && n && this.drawOncoprintAndOverlayRect(e, n)
        }, t.prototype.setWindowPosition = function (t, e) {
            this.$div.css({top: e, left: t})
        }, t.prototype.setWidth = function (t, e, n) {
            this.$canvas[0].width = t, this.$overlay_canvas[0].width = t, this.getWebGLContextAndSetUpMatrices(), this.setUpShaders(), this.overlay_ctx = this.$overlay_canvas[0].getContext("2d"), this.drawOncoprintAndOverlayRect(e, n)
        }, t
    }(), Vt = (Et = 0, function () {
        return Et += 1
    }), $t = function () {
        function t(t, e, n) {
            var r = this;
            this.ctr_selector = t, this.width = e, this.lastSortId = 0, this.getCellViewHeight = function () {
                return r.cell_view.getVisibleAreaHeight(r.model)
            }, n = n || {};
            var i = this;
            if (this.destroyed = !1, this.webgl_unavailable = null === document.createElement("canvas").getContext("experimental-webgl"), this.webgl_unavailable) c()(t).append("<p class='oncoprintjs__webgl_unavailable_message'>WebGL context cannot be retrieved, so oncoprint cannot be used. Please visit <a href='http://webglreport.com'>WebGL Report</a> to explore your browsers WebGL capabilities.</p>"); else {
                var o, a = c()("<span></span>").css({position: "relative", display: "inline-block"}).appendTo(t),
                    s = c()("<div></div>").css({position: "absolute", display: "inline-block"}).appendTo(a),
                    l = c()("<span></span>").css({position: "fixed", top: 0, left: 0, "z-index": 99999}).appendTo(t),
                    u = c()("<div></div>").css({
                        position: "absolute",
                        display: "inline-block",
                        top: 0,
                        left: 0,
                        "min-height": 1
                    }).appendTo(a), h = c()("<canvas></canvas>").css({
                        display: "inline-block",
                        position: "absolute",
                        left: "0px",
                        top: "0px"
                    }).addClass("noselect").attr({width: "150", height: "250"}),
                    f = c()("<div></div>").css({position: "absolute"}).addClass("oncoprintjs__header_div"),
                    d = c()("<div></div>").css({
                        position: "absolute",
                        left: "150px",
                        top: "0px"
                    }).addClass("noselect").attr({width: "50", height: "250"}), p = c()("<div></div>").css({
                        position: "absolute",
                        top: "250px",
                        "min-height": 1
                    }).addClass("noselect oncoprint-legend-div"), g = c()("<div>").css({
                        width: e,
                        display: "inline-block",
                        position: "absolute",
                        left: "200px",
                        top: "0px"
                    }).addClass("noselect"), m = c()("<canvas></canvas>").attr({width: "0px", height: "0px"}).css({
                        position: "absolute",
                        top: "0px",
                        left: "0px"
                    }).addClass("noselect"), v = c()("<div>").css({
                        position: "absolute",
                        "overflow-x": "scroll",
                        "overflow-y": "scroll",
                        top: "0",
                        left: "0px",
                        height: "1px"
                    }).addClass("oncoprintjs__scroll_div"), y = c()("<div>").appendTo(v),
                    b = c()("<canvas></canvas>").attr({width: "0px", height: "0px"}).css({
                        position: "absolute",
                        top: "0px",
                        left: "0px"
                    }).addClass("noselect").addClass("oncoprintjs__cell_overlay_div"),
                    x = c()("<canvas></canvas>").attr({width: "0px", height: "0px"}).css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        "pointer-events": "none"
                    }).addClass("noselect").addClass("oncoprintjs__column_label_canvas"),
                    w = c()("<div>").css({position: "absolute"}), k = c()("<div>").css({
                        position: "absolute",
                        outline: "solid 1px black",
                        display: "none"
                    }).addClass("noselect"), S = c()("<canvas></canvas>").attr("width", 300).attr("height", 300).css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        "z-index": 0
                    }).addClass("noselect"), M = c()("<canvas></canvas>").attr("width", 300).attr("height", 300).css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        "z-index": 1
                    }).addClass("noselect");
                h.appendTo(s), g.appendTo(s), d.appendTo(s), w.appendTo(s), f.appendTo(s), p.appendTo(u), k.appendTo(a), m.appendTo(g), b.appendTo(g), x.appendTo(g), v.appendTo(g), v.on("mousemove mousedown mouseup", (function (t) {
                    b.trigger(t)
                })), S.appendTo(k), M.appendTo(k), this.$ctr = a, this.$oncoprint_ctr = s, this.$header_div = f, this.$cell_div = g, this.$legend_div = p, this.$track_options_div = d, this.$track_info_div = w, this.$dummy_scroll_div = v, this.$minimap_div = k, this.$cell_canvas = m, this.$cell_overlay_canvas = b, this.model = new D(n), this.header_view = new At(this.$header_div), this.cell_view = new rt(g, m, b, x, y, this.model, new Lt(l), (function (t, e) {
                    var n = i.model.getIdsInZoomedLeftInterval(t, e);
                    i.setHorzZoom(i.model.getHorzZoomToFit(i.cell_view.getVisibleAreaWidth(), n)), i.$dummy_scroll_div.scrollLeft(i.model.getZoomedColumnLeft(n[0]))
                }), (function (t, e) {
                    i.doCellMouseOver(t, e)
                }), (function (t, e) {
                    i.doCellClick(t, e)
                })), this.minimap_view = new Ht(k, S, M, this.model, this.cell_view, 150, 150, (function (t, e) {
                    i.setScroll(t, e)
                }), (function (t) {
                    i.setViewport(t)
                }), (function (t) {
                    i.setHorzZoomCentered(t)
                }), (function (t) {
                    var e = i.cell_view.getViewportOncoprintSpace(i.model), n = (e.top + e.bottom) / 2;
                    i.setVertZoom(t);
                    var r = i.cell_view.getViewportOncoprintSpace(i.model),
                        o = i.model.getVertZoom() * (r.bottom - r.top) / 2;
                    i.setVertScroll(n * i.model.getVertZoom() - o)
                }), (function () {
                    i.updateHorzZoomToFit();
                    var t = i.model.getZoomedColumnLeft();
                    i.setHorzScroll(Math.min.apply(null, i.keep_horz_zoomed_to_fit_ids.map((function (e) {
                        return t[e]
                    }))))
                }), (function () {
                    i.setMinimapVisible(!1)
                })), this.track_options_view = new zt(d, (function (t) {
                    var e = i.model.getContainingTrackGroup(t), n = e.indexOf(t);
                    if (n > 0) {
                        var r = null;
                        n >= 2 && (r = e[n - 2]), i.moveTrack(t, r)
                    }
                }), (function (t) {
                    var e = i.model.getContainingTrackGroup(t), n = e.indexOf(t);
                    n < e.length - 1 && i.moveTrack(t, e[n + 1])
                }), (function (t) {
                    var e = i.model.getTrackRemoveOptionCallback(t);
                    e ? e(t) : i.removeTrack(t)
                }), (function (t, e) {
                    i.setTrackSortDirection(t, e)
                }), (function (t) {
                    i.removeExpansionTracksFor(t)
                }), i.setTrackShowGaps.bind(i)), this.track_info_view = new Rt(w, new Lt(l)), this.label_view = new it(h, this.model, new Lt(l, {noselect: !0})), this.label_view.setDragCallback((function (t, e) {
                    i.moveTrack(t, e)
                })), this.legend_view = new Ot(p, 10, 20), this.keep_sorted = !1, this.keep_horz_zoomed_to_fit = !1, this.keep_horz_zoomed_to_fit_ids = [], this.target_dummy_scroll_left = 0, this.target_dummy_scroll_top = 0, o = i, v.scroll((function (t) {
                    var e = v.scrollLeft(), n = v.scrollTop();
                    if (e !== i.target_dummy_scroll_left || n !== i.target_dummy_scroll_top) {
                        i.target_dummy_scroll_left = e, i.target_dummy_scroll_top = n;
                        var r = o.maxDummyScrollDivScroll(), a = r.left, s = r.top, l = a > 0 ? e / a : 0,
                            u = s > 0 ? n / s : 0;
                        l = _(l, 0, 1), u = _(u, 0, 1);
                        var c = o.maxOncoprintScrollLeft(), h = o.maxOncoprintScrollTop(), f = Math.round(c * l),
                            d = Math.round(h * u);
                        i.keep_horz_zoomed_to_fit = !1, o.doSetScroll(f, d)
                    }
                })), this.horz_zoom_callbacks = [], this.minimap_close_callbacks = [], this.cell_mouse_over_callbacks = [], this.cell_click_callbacks = [], this.id_clipboard = [], this.clipboard_change_callbacks = [], this.pending_resize_and_organize = !1
            }
        }

        return t.prototype.incrementLastSortId = function () {
            this.lastSortId = (this.lastSortId + 1) % 1e6
        }, t.prototype._SetLegendTop = function () {
            this.model.rendering_suppressed_depth > 0 || this.$legend_div.css({top: this.cell_view.getVisibleAreaHeight(this.model) + 30})
        }, t.prototype.setLegendTopAfterTimeout = function () {
            if (!(this.model.rendering_suppressed_depth > 0)) {
                var t = this;
                setTimeout((function () {
                    t.setHeight(), t._SetLegendTop()
                }), 0)
            }
        }, t.prototype.setHeight = function () {
            this.$ctr.css({"min-height": this.cell_view.getVisibleAreaHeight(this.model) + Math.max(this.$legend_div.outerHeight(), this.$minimap_div.is(":visible") ? this.$minimap_div.outerHeight() : 0) + 30})
        }, t.prototype.resizeAndOrganize = function (t) {
            if (!(this.model.rendering_suppressed_depth > 0)) if (0 !== c()(this.ctr_selector).width()) {
                this.$track_options_div.css({left: this.label_view.getWidth()}), this.$header_div.css({
                    left: 0,
                    top: 0,
                    width: this.width,
                    height: this.cell_view.getVisibleAreaHeight(this.model)
                }), this.$track_info_div.css({left: this.label_view.getWidth() + this.track_options_view.getWidth()});
                var e = this.label_view.getWidth() + this.track_options_view.getWidth() + this.track_info_view.getWidth();
                this.$cell_div.css("left", e), this.cell_view.setWidth(this.width - e - 20, this.model), this._SetLegendTop(), this.legend_view.setWidth(this.width - this.$minimap_div.outerWidth() - 20, this.model), this.setHeight(), this.$ctr.css({"min-width": this.width});
                var n = this;
                setTimeout((function () {
                    n.keep_horz_zoomed_to_fit && n.updateHorzZoomToFit(), t && t()
                }), 0)
            } else this.pending_resize_and_organize = !0
        }, t.prototype.resizeAndOrganizeAfterTimeout = function (t) {
            if (!(this.model.rendering_suppressed_depth > 0)) {
                var e = this;
                setTimeout((function () {
                    e.resizeAndOrganize(t)
                }), 0)
            }
        }, t.prototype.maxOncoprintScrollLeft = function () {
            return Math.max(0, this.cell_view.getTotalWidth(this.model) - this.cell_view.getVisibleAreaWidth())
        }, t.prototype.maxOncoprintScrollTop = function () {
            return Math.max(0, this.cell_view.getTotalHeight(this.model) - this.cell_view.getVisibleAreaHeight(this.model))
        }, t.prototype.maxDummyScrollDivScroll = function () {
            var t = this.cell_view.getDummyScrollDivClientSize();
            return {
                left: Math.max(0, this.$dummy_scroll_div[0].scrollWidth - t.width),
                top: Math.max(0, this.$dummy_scroll_div[0].scrollHeight - t.height)
            }
        }, t.prototype.setMinimapVisible = function (t) {
            this.webgl_unavailable || this.destroyed || (t ? (this.$minimap_div.css({
                display: "block",
                top: 0,
                left: c()(this.ctr_selector).width() - this.$minimap_div.outerWidth() - 10
            }), this.minimap_view.setMinimapVisible(!0, this.model, this.cell_view)) : (this.$minimap_div.css("display", "none"), this.minimap_view.setMinimapVisible(!1), this.executeMinimapCloseCallbacks()), this.resizeAndOrganizeAfterTimeout())
        }, t.prototype.scrollTo = function (t) {
            this.webgl_unavailable || this.destroyed || this.$dummy_scroll_div.scrollLeft(t)
        }, t.prototype.onHorzZoom = function (t) {
            this.webgl_unavailable || this.destroyed || this.horz_zoom_callbacks.push(t)
        }, t.prototype.onMinimapClose = function (t) {
            this.webgl_unavailable || this.destroyed || this.minimap_close_callbacks.push(t)
        }, t.prototype.moveTrack = function (t, e) {
            this.webgl_unavailable || this.destroyed || (this.model.moveTrack(t, e), this.cell_view.moveTrack(this.model), this.header_view.render(this.model), this.label_view.moveTrack(this.model, this.getCellViewHeight), this.track_options_view.moveTrack(this.model, this.getCellViewHeight), this.track_info_view.moveTrack(this.model, this.getCellViewHeight), this.minimap_view.moveTrack(this.model, this.cell_view), this.keep_sorted && this.model.isSortAffected([t, e], "track") && this.sort(), this.resizeAndOrganizeAfterTimeout())
        }, t.prototype.setTrackGroupOrder = function (t, e, n) {
            this.webgl_unavailable || this.destroyed || (this.model.setTrackGroupOrder(t, e), this.cell_view.setTrackGroupOrder(this.model), this.header_view.render(this.model), this.label_view.setTrackGroupOrder(this.model, this.getCellViewHeight), this.track_options_view.setTrackGroupOrder(this.model), this.track_info_view.setTrackGroupOrder(this.model, this.getCellViewHeight), !n && this.keep_sorted && this.model.isSortAffected(t, "group") && this.sort(), this.resizeAndOrganizeAfterTimeout())
        }, t.prototype.setTrackGroupLegendOrder = function (t) {
            this.webgl_unavailable || this.destroyed || (this.model.setTrackGroupLegendOrder(t), this.legend_view.setTrackGroupLegendOrder(this.model), this.resizeAndOrganizeAfterTimeout())
        }, t.prototype.keepSorted = function (t) {
            this.webgl_unavailable || this.destroyed || (this.keep_sorted = void 0 === t || t, this.keep_sorted && this.sort())
        }, t.prototype.addTracks = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) {
                var e = [], n = t.map((function (t) {
                    return t.track_id = Vt(), t.rule_set = Mt(t.rule_set_params), e.push(t.track_id), t
                }));
                return this.model.addTracks(n), this.cell_view.addTracks(this.model, e), this.label_view.addTracks(this.model, e, this.getCellViewHeight), this.header_view.render(this.model), this.track_options_view.addTracks(this.model, this.getCellViewHeight), this.track_info_view.addTracks(this.model, this.getCellViewHeight), this.legend_view.addTracks(this.model), this.minimap_view.addTracks(this.model, this.cell_view), this.keep_sorted && this.model.isSortAffected(e, "track") && this.sort(), this.resizeAndOrganizeAfterTimeout(), e
            }
        }, t.prototype.removeTrack = function (t) {
            this.webgl_unavailable || this.destroyed || (this.model.removeTrack(t), this.cell_view.removeTrack(this.model, t), this.header_view.render(this.model), this.label_view.removeTrack(this.model, this.getCellViewHeight), this.track_options_view.removeTrack(this.model, t, this.getCellViewHeight), this.track_info_view.removeTrack(this.model, this.getCellViewHeight), this.legend_view.removeTrack(this.model), this.minimap_view.removeTrack(this.model, this.cell_view), this.keep_sorted && this.model.isSortAffected(t, "track") && this.sort(), this.resizeAndOrganizeAfterTimeout())
        }, t.prototype.removeTracks = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) {
                this.keepSorted(!1), this.suppressRendering();
                for (var e = 0; e < t.length; e++) this.removeTrack(t[e]);
                this.keepSorted(!0), this.releaseRendering()
            }
        }, t.prototype.getTracks = function () {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.getTracks().slice()
        }, t.prototype.removeAllTracks = function () {
            if (!this.webgl_unavailable && !this.destroyed) {
                var t = this.model.getTracks();
                this.removeTracks(t)
            }
        }, t.prototype.removeExpansionTracksFor = function (t) {
            this.removeTracks(this.model.track_expansion_tracks[t].slice())
        }, t.prototype.disableTrackExpansion = function (t) {
            this.model.disableTrackExpansion(t)
        }, t.prototype.enableTrackExpansion = function (t) {
            this.model.enableTrackExpansion(t)
        }, t.prototype.removeAllExpansionTracksInGroup = function (t) {
            var e, n = this.model.getTrackGroups()[t].tracks, r = [];
            for (e = 0; e < n.length; e++) this.model.isTrackExpanded(n[e]) && r.push(n[e]);
            for (this.suppressRendering(), e = 0; e < r.length; e++) this.removeExpansionTracksFor(r[e]);
            this.releaseRendering()
        }, t.prototype.setHorzZoomToFit = function (t) {
            this.webgl_unavailable || this.destroyed || (this.keep_horz_zoomed_to_fit = !0, this.updateHorzZoomToFitIds(t), this.updateHorzZoomToFit())
        }, t.prototype.updateHorzZoomToFitIds = function (t) {
            this.webgl_unavailable || this.destroyed || (this.keep_horz_zoomed_to_fit_ids = t.slice(), this.keep_horz_zoomed_to_fit && this.updateHorzZoomToFit())
        }, t.prototype.updateHorzZoomToFit = function () {
            this.setHorzZoom(this.getHorzZoomToFit(this.keep_horz_zoomed_to_fit_ids), !0)
        }, t.prototype.getHorzZoomToFit = function (t) {
            return t = t || [], this.model.getHorzZoomToFit(this.cell_view.getVisibleAreaWidth(), t)
        }, t.prototype.executeHorzZoomCallbacks = function () {
            for (var t = 0; t < this.horz_zoom_callbacks.length; t++) this.horz_zoom_callbacks[t](this.model.getHorzZoom())
        }, t.prototype.executeMinimapCloseCallbacks = function () {
            for (var t = 0; t < this.minimap_close_callbacks.length; t++) this.minimap_close_callbacks[t]()
        }, t.prototype.doCellMouseOver = function (t, e) {
            null !== t ? this.highlightTrackLabelOnly(e) : this.highlightTrackLabelOnly(null);
            for (var n = 0; n < this.cell_mouse_over_callbacks.length; n++) this.cell_mouse_over_callbacks[n](t, e)
        }, t.prototype.doCellClick = function (t, e) {
            for (var n = 0; n < this.cell_click_callbacks.length; n++) this.cell_click_callbacks[n](t, e)
        }, t.prototype.getHorzZoom = function () {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.getHorzZoom()
        }, t.prototype.setHorzZoomCentered = function (t) {
            var e = this.cell_view.getViewportOncoprintSpace(this.model).center_col_index,
                n = this.model.getIdOrder()[e];
            this.setHorzZoom(t), this.setHorzScroll(this.model.getZoomedColumnLeft(n) - this.cell_view.visible_area_width / 2)
        }, t.prototype.setHorzZoom = function (t, e) {
            if (!this.webgl_unavailable && !this.destroyed) return this.keep_horz_zoomed_to_fit = this.keep_horz_zoomed_to_fit && e, this.model.getHorzZoom() !== t && (this.model.setHorzZoom(t), this.cell_view.setHorzZoom(this.model), this.minimap_view.setHorzZoom(this.model, this.cell_view), this.executeHorzZoomCallbacks(), this.resizeAndOrganizeAfterTimeout()), this.model.getHorzZoom()
        }, t.prototype.getVertZoom = function () {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.getVertZoom()
        }, t.prototype.setVertZoom = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.setVertZoom(t), this.cell_view.setVertZoom(this.model), this.header_view.render(this.model), this.label_view.setVertZoom(this.model, this.getCellViewHeight), this.track_info_view.setVertZoom(this.model, this.getCellViewHeight), this.track_options_view.setVertZoom(this.model, this.getCellViewHeight), this.minimap_view.setVertZoom(this.model, this.cell_view), this.resizeAndOrganizeAfterTimeout(), this.model.getVertZoom()
        }, t.prototype.doSetScroll = function (t, e) {
            t = Math.min(t, this.maxOncoprintScrollLeft()), e = Math.min(e, this.maxOncoprintScrollTop()), this.model.setScroll(t, e), this.cell_view.setScroll(this.model), this.header_view.setScroll(this.model), this.label_view.setScroll(this.model, this.getCellViewHeight), this.track_info_view.setScroll(this.model), this.track_options_view.setScroll(this.model), this.minimap_view.setScroll(this.model, this.cell_view)
        }, t.prototype.setDummyScrollDivScroll = function () {
            var t = this.model.getHorzScroll(), e = this.model.getVertScroll(), n = this.maxOncoprintScrollLeft(),
                r = this.maxOncoprintScrollTop(), i = n > 0 ? t / n : 0, o = r > 0 ? e / r : 0;
            i = _(i, 0, 1), o = _(o, 0, 1);
            var a = this.maxDummyScrollDivScroll(), s = a.left, l = a.top;
            this.target_dummy_scroll_left = Math.round(i * s), this.target_dummy_scroll_top = Math.round(o * l), this.$dummy_scroll_div.scrollLeft(this.target_dummy_scroll_left), this.$dummy_scroll_div.scrollTop(this.target_dummy_scroll_top)
        }, t.prototype.setScroll = function (t, e) {
            this.webgl_unavailable || this.destroyed || (this.doSetScroll(t, e), this.setDummyScrollDivScroll())
        }, t.prototype.setZoom = function (t, e) {
            this.webgl_unavailable || this.destroyed || (this.model.setZoom(t, e), this.cell_view.setZoom(this.model), this.header_view.render(this.model), this.label_view.setZoom(this.model, this.getCellViewHeight), this.track_info_view.setZoom(this.model, this.getCellViewHeight), this.track_options_view.setZoom(this.model, this.getCellViewHeight), this.minimap_view.setZoom(this.model, this.cell_view))
        }, t.prototype.setHorzScroll = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.setHorzScroll(Math.min(t, this.maxOncoprintScrollLeft())), this.cell_view.setHorzScroll(this.model), this.label_view.setHorzScroll(this.model), this.track_info_view.setHorzScroll(this.model), this.track_options_view.setHorzScroll(this.model), this.minimap_view.setHorzScroll(this.model, this.cell_view), this.setDummyScrollDivScroll(), this.model.getHorzScroll()
        }, t.prototype.setVertScroll = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.setVertScroll(Math.min(t, this.maxOncoprintScrollTop())), this.cell_view.setVertScroll(this.model), this.header_view.setVertScroll(this.model), this.label_view.setVertScroll(this.model, this.getCellViewHeight), this.track_info_view.setVertScroll(this.model), this.track_options_view.setVertScroll(this.model), this.minimap_view.setVertScroll(this.model, this.cell_view), this.setDummyScrollDivScroll(), this.model.getVertScroll()
        }, t.prototype.setViewport = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) {
                var e = this.model.getHorzZoomToFitCols(this.cell_view.getVisibleAreaWidth(), t.left_col, t.right_col);
                this.setZoom(e, t.zoom_y);
                var n = Math.min(this.model.getZoomedColumnLeft(this.model.getIdOrder()[t.left_col]), this.maxOncoprintScrollLeft()),
                    r = Math.min(t.scroll_y_proportion * this.model.getOncoprintHeight(), this.maxOncoprintScrollTop());
                this.setScroll(n, r), this.executeHorzZoomCallbacks()
            }
        }, t.prototype.getTrackData = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.getTrackData(t)
        }, t.prototype.getTrackDataIdKey = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.getTrackDataIdKey(t)
        }, t.prototype.setTrackData = function (t, e, n) {
            this.webgl_unavailable || this.destroyed || (this.model.setTrackData(t, e, n), this.cell_view.setTrackData(this.model, t), this.header_view.render(this.model), this.legend_view.setTrackData(this.model), this.minimap_view.setTrackData(this.model, this.cell_view), this.keep_sorted && this.model.isSortAffected(t, "track") && this.sort(), this.resizeAndOrganizeAfterTimeout())
        }, t.prototype.setTrackImportantIds = function (t, e) {
            this.webgl_unavailable || this.destroyed || (this.model.setTrackImportantIds(t, e), this.cell_view.setTrackImportantIds(this.model, t), this.legend_view.setTrackImportantIds(this.model), this.resizeAndOrganizeAfterTimeout())
        }, t.prototype.setTrackGroupSortPriority = function (t) {
            this.webgl_unavailable || this.destroyed || (this.model.setTrackGroupSortPriority(t), this.cell_view.setTrackGroupSortPriority(this.model), this.keep_sorted && this.sort(), this.resizeAndOrganizeAfterTimeout())
        }, t.prototype.resetSortableTracksSortDirection = function () {
            this.webgl_unavailable || this.destroyed || (this.model.resetSortableTracksSortDirection(!0), this.keep_sorted && this.sort())
        }, t.prototype.setTrackSortDirection = function (t, e) {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.isTrackSortDirectionChangeable(t) && (this.model.setTrackSortDirection(t, e), this.keep_sorted && this.model.isSortAffected(t, "track") && this.sort(), 0 === this.model.getTrackSortDirection(t) && this.model.getTrackShowGaps(t) && this.setTrackShowGaps(t, !1)), this.model.getTrackSortDirection(t)
        }, t.prototype.setTrackSortComparator = function (t, e) {
            this.webgl_unavailable || this.destroyed || (this.model.setTrackSortComparator(t, e), this.keep_sorted && this.model.isSortAffected(t, "track") && this.sort())
        }, t.prototype.getTrackSortDirection = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.getTrackSortDirection(t)
        }, t.prototype.setTrackInfo = function (t, e) {
            this.webgl_unavailable || this.destroyed || (this.model.setTrackInfo(t, e), this.track_info_view.setTrackInfo(this.model, this.getCellViewHeight))
        }, t.prototype.setTrackTooltipFn = function (t, e) {
            this.webgl_unavailable || this.destroyed || this.model.setTrackTooltipFn(t, e)
        }, t.prototype.setShowTrackSublabels = function (t) {
            this.model.setShowTrackSublabels(t), this.label_view.setShowTrackSublabels(this.model, this.getCellViewHeight), this.resizeAndOrganizeAfterTimeout()
        }, t.prototype.setTrackShowGaps = function (t, e) {
            this.model.setTrackShowGaps(t, e), 0 === this.model.getTrackSortDirection(t) && e && this.setTrackSortDirection(t, 1), this.track_options_view.setTrackShowGaps(this.model, this.getCellViewHeight), this.cell_view.setTrackShowGaps(this.model)
        }, t.prototype.sort = function () {
            if (!this.webgl_unavailable && !this.destroyed) {
                var t = this;
                this.incrementLastSortId();
                var e = this.lastSortId;
                this.model.sort().then((function (n) {
                    t.lastSortId === e && (t.label_view.sort(t.model, t.getCellViewHeight), t.track_options_view.sort(t.model, t.getCellViewHeight), t.cell_view.sort(t.model), t.minimap_view.sort(t.model, t.cell_view), n && t.setTrackGroupOrder(n.track_group_index, n.track_id_order, !0))
                }))
            }
        }, t.prototype.shareRuleSet = function (t, e) {
            this.webgl_unavailable || this.destroyed || (this.model.shareRuleSet(t, e), this.cell_view.shareRuleSet(this.model, e), this.legend_view.shareRuleSet(this.model), this.minimap_view.shareRuleSet(this.model, this.cell_view))
        }, t.prototype.setRuleSet = function (t, e) {
            this.webgl_unavailable || this.destroyed || (this.model.setRuleSet(t, Mt(e)), this.cell_view.setRuleSet(this.model, t), this.legend_view.setRuleSet(this.model), this.minimap_view.setRuleSet(this.model, this.cell_view), this.resizeAndOrganizeAfterTimeout())
        }, t.prototype.setSortConfig = function (t) {
            this.webgl_unavailable || this.destroyed || (this.model.setSortConfig(t), this.cell_view.setSortConfig(this.model), this.track_options_view.setSortConfig(this.model), this.keep_sorted && this.sort())
        }, t.prototype.setIdOrder = function (t) {
            this.webgl_unavailable || this.destroyed || (this.model.setIdOrder(t), this.cell_view.setIdOrder(this.model, t), this.minimap_view.setIdOrder(this.model, this.cell_view), this.keep_sorted && this.sort())
        }, t.prototype.setTrackGroupHeader = function (t, e) {
            this.webgl_unavailable || this.destroyed || (this.model.setTrackGroupHeader(t, e), this.label_view.setTrackGroupHeader(this.model, this.getCellViewHeight), this.header_view.render(this.model), this.track_info_view.setTrackGroupHeader(this.model, this.getCellViewHeight), this.track_options_view.setTrackGroupHeader(this.model, this.getCellViewHeight), this.minimap_view.setTrackGroupHeader(this.model, this.cell_view), this.cell_view.setTrackGroupHeader(this.model), this.resizeAndOrganizeAfterTimeout())
        }, t.prototype.disableInteraction = function () {
            this.webgl_unavailable || this.destroyed || this.track_options_view.disableInteraction()
        }, t.prototype.enableInteraction = function () {
            this.webgl_unavailable || this.destroyed || this.track_options_view.enableInteraction()
        }, t.prototype.suppressRendering = function () {
            this.webgl_unavailable || this.destroyed || (this.model.rendering_suppressed_depth += 1, this.label_view.suppressRendering(), this.header_view.suppressRendering(), this.cell_view.suppressRendering(), this.track_options_view.suppressRendering(), this.track_info_view.suppressRendering(), this.legend_view.suppressRendering(), this.minimap_view.suppressRendering())
        }, t.prototype.releaseRendering = function (t) {
            this.webgl_unavailable || this.destroyed || (this.model.rendering_suppressed_depth -= 1, this.model.rendering_suppressed_depth = Math.max(0, this.model.rendering_suppressed_depth), 0 === this.model.rendering_suppressed_depth && (this.label_view.releaseRendering(this.model, this.getCellViewHeight), this.header_view.releaseRendering(this.model), this.cell_view.releaseRendering(this.model), this.track_options_view.releaseRendering(this.model, this.getCellViewHeight), this.track_info_view.releaseRendering(this.model, this.getCellViewHeight), this.legend_view.releaseRendering(this.model), this.minimap_view.releaseRendering(this.model, this.cell_view), this.resizeAndOrganizeAfterTimeout(t)))
        }, t.prototype.triggerPendingResizeAndOrganize = function (t) {
            this.webgl_unavailable || this.destroyed || this.pending_resize_and_organize && (this.pending_resize_and_organize = !1, this.resizeAndOrganizeAfterTimeout(t))
        }, t.prototype.hideIds = function (t, e) {
            this.webgl_unavailable || this.destroyed || (this.model.hideIds(t, e), this.cell_view.hideIds(this.model), this.minimap_view.hideIds(this.model, this.cell_view))
        }, t.prototype.hideTrackLegends = function (t) {
            this.webgl_unavailable || this.destroyed || (t = [].concat(t), this.model.hideTrackLegends(t), this.legend_view.hideTrackLegends(this.model), this.setLegendTopAfterTimeout())
        }, t.prototype.showTrackLegends = function (t) {
            this.webgl_unavailable || this.destroyed || (t = [].concat(t), this.model.showTrackLegends(t), this.legend_view.showTrackLegends(this.model), this.setLegendTopAfterTimeout())
        }, t.prototype.setCellPaddingOn = function (t) {
            this.webgl_unavailable || this.destroyed || (this.model.setCellPaddingOn(t), this.cell_view.setCellPaddingOn(this.model))
        }, t.prototype.setTrackCustomOptions = function (t, e) {
            this.model.setTrackCustomOptions(t, e), this.track_options_view.setTrackCustomOptions(this.model)
        }, t.prototype.setTrackInfoTooltip = function (t, e) {
            this.model.setTrackInfoTooltip(t, e)
        }, t.prototype.setTrackMovable = function (t, e) {
            this.model.setTrackMovable(t, e), this.track_options_view.setTrackMovable(this.model), this.label_view.setTrackMovable(this.model)
        }, t.prototype.setWidth = function (t) {
            this.width = t, this.resizeAndOrganize()
        }, t.prototype.setColumnLabels = function (t) {
            this.model.setColumnLabels(t), this.cell_view.setColumnLabels(this.model), this.resizeAndOrganizeAfterTimeout()
        }, t.prototype.setShowTrackLabels = function (t) {
            this.model.setShowTrackLabels(t), this.label_view.setShowTrackLabels(this.model, this.getCellViewHeight), this.resizeAndOrganizeAfterTimeout()
        }, t.prototype.onCellMouseOver = function (t) {
            this.cell_mouse_over_callbacks.push(t)
        }, t.prototype.onCellClick = function (t) {
            this.cell_click_callbacks.push(t)
        }, t.prototype.toSVG = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) {
                var e = H.svg(10, 10);
                this.$ctr.append(e);
                var n = H.group(0, 0);
                e.appendChild(n);
                var r = H.bgrect(10, 10, "#ffffff");
                t && n.appendChild(r);
                var i = this.label_view.toSVGGroup(this.model, !0, 0, 0);
                n.appendChild(i);
                var o = this.header_view.toSVGGroup(this.model, 0, 0);
                n.appendChild(o);
                var a = i.getBBox().width, s = a + (a > 0 ? 30 : 0),
                    l = this.track_info_view.toSVGGroup(this.model, s, 0);
                n.appendChild(l);
                var u = s + l.getBBox().width + 10, c = this.cell_view.toSVGGroup(this.model, u, 0);
                n.appendChild(c), n.appendChild(this.legend_view.toSVGGroup(this.model, 0, c.getBBox().y + c.getBBox().height + 20));
                var h = n.getBBox(), f = h.x + h.width, d = h.y + h.height;
                return e.setAttribute("width", f), e.setAttribute("height", d), t && (r.setAttribute("width", f), r.setAttribute("height", d)), e.parentNode.removeChild(e), e
            }
        }, t.prototype.toCanvas = function (t, e) {
            if (!this.webgl_unavailable && !this.destroyed) {
                var n = this.toSVG(!0);
                n.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                var r = parseInt(n.getAttribute("width"), 10), i = parseInt(n.getAttribute("height"), 10),
                    o = document.createElement("canvas"), a = r * (e = e || 1) > 8192 || i * e > 8192;
                o.setAttribute("width", Math.min(8192, r * e).toString()), o.setAttribute("height", Math.min(8192, i * e).toString());
                var s = document.createElement("div");
                s.appendChild(n);
                var l = s.innerHTML, u = "data:image/svg+xml;base64," + window.btoa(l), c = o.getContext("2d");
                c.setTransform(e, 0, 0, e, 0, 0);
                var h = new Image;
                return h.onload = function () {
                    c.drawImage(h, 0, 0), t(o, a)
                }, h.onerror = function () {
                    console.log("IMAGE LOAD ERROR")
                }, h.src = u, h
            }
        }, t.prototype.toDataUrl = function (t) {
            this.webgl_unavailable || this.destroyed || this.toCanvas((function (e) {
                t(e.toDataURL())
            }))
        }, t.prototype.highlightTrackLabelOnly = function (t) {
            this.webgl_unavailable || this.destroyed || this.label_view.highlightTrackLabelOnly(t, this.model)
        }, t.prototype.setHighlightedTracks = function (t) {
            this.webgl_unavailable || this.destroyed || (this.model.setHighlightedTracks(t), this.label_view.setHighlightedTracks(this.model), this.cell_view.setHighlightedTracks(this.model))
        }, t.prototype.setHighlightedIds = function (t) {
            this.webgl_unavailable || this.destroyed || (this.model.setHighlightedIds(t), this.cell_view.setHighlightedIds(this.model))
        }, t.prototype.getIdOrder = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) return this.model.getIdOrder(t)
        }, t.prototype.setIdClipboardContents = function (t) {
            if (!this.webgl_unavailable && !this.destroyed) {
                this.id_clipboard = t.slice();
                for (var e = 0; e < this.clipboard_change_callbacks.length; e++) this.clipboard_change_callbacks[e](t)
            }
        }, t.prototype.getIdClipboardContents = function () {
            if (!this.webgl_unavailable && !this.destroyed) return this.id_clipboard.slice()
        }, t.prototype.onClipboardChange = function (t) {
            this.webgl_unavailable || this.destroyed || this.clipboard_change_callbacks.push(t)
        }, t.prototype.destroy = function () {
            this.webgl_unavailable || this.destroyed || (this.cell_view.destroy(), this.header_view.destroy(), this.track_options_view.destroy(), this.track_info_view.destroy(), this.destroyed = !0)
        }, t.prototype.clearMouseOverEffects = function () {
            this.webgl_unavailable || this.destroyed || (this.cell_view.clearOverlay(), this.label_view.highlightTrackLabelOnly(null, this.model))
        }, t
    }();
    e.default = $t
}]);