* /var a, s, r, i, o;
/**INDENT** Error@1: Unbalanced parens */
	if (Object.defineProperty(t, "__esModule", {
value:	!0
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
	}), "undefined" == typeof window || "function" != typeof MessageChannel) {
		var		c = null,	u = null, l = function() {if (null !== c)
			try {var e = t.unstable_now();
			c(!0, e), c = null
			} catch(e) {
			throw		setTimeout(l, 0), e
			}
	}              , d = Date.now();
	t.unstable_now = function() {
		return Date.now() - d
	}, a = function(e) {
		null !== c ? setTimeout(a, 0, e) : (c = e, setTimeout(l, 0))
	}, s = function(e, t) {
		u = setTimeout(e, t)
	}, r = function() {
		clearTimeout(u)
	}, i = function() {
		return !1
	}, o = t.unstable_forceFrameRate = function() {
	}
/**INDENT** Error@1: Unmatched 'else' */
	} else {
		var		h = window.performance, p = window.Date, m = window.setTimeout,
				f = window.clearTimeout;
		if ("undefined" != typeof console) {
			var		_ = window.cancelAnimationFrame;
			"function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof _ && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
		} if ("object" == typeof h && "function" == typeof h.now)
			t.unstable_now = function() {
			return h.now()
			};
/**INDENT** Error@1: Unmatched 'else' */
		else {
			var		b = p.now();
			t.unstable_now = function() {
				return p.now() - b
			}
		} var		g = !1,	v = null, P = -1, w = 5, y = 0;
		i = function() {
			return t.unstable_now() >= y
		}, o = function() {
		}, t.unstable_forceFrameRate = function(e) {
			0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : w = 0 < e ? Math.floor(1e3 / e) : 5
		};
		var		E = new MessageChannel, T = E.port2;
		E.port1.onmessage = function() {
			if (null !== v) {
				var		e = t.unstable_now();
				y = e + w;
				try {
					v(!0, e) ? T.postMessage(null) : (g = !1, v = null)
				} catch(e) {
					throw		T.	postMessage(null), e
				}
			} else
/**INDENT** Error@1: Statement nesting error */
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
				g = !1},	a = function(e) {v = e, g || (g = !0, T.postMessage(null))}, s = function(e, n) {P = m((function() {e(t.unstable_now())}), n)}, r = function() {f(P), P = -1}} function A(e, t) {var n = e.length;
			e.push(t);
	e:		for (;;) {
				var		a = Math.floor((n - 1) / 2), s = e[a];
				if (!(void 0 !== s && 0 < O(s, t)))
					break e;
				e[a] = t, e[n] = s, n = a
			}
		} function	C    (e) {
/**INDENT** Error@1: Statement nesting error */
			return void	0 == = (e = e[0]) ? null : e} function x(e) {var t = e[0];
				if (void 0 !== t){
					var		n = e.pop();
					if              (n !== t) {
						e[0] = n;
				e:		for (var a = 0, s = e.length; a < s;) {
							var		r = 2 * (a + 1) - 1,
									i = e[r],	o = r + 1,
									c = e[o];
							if              (void 0 !== i && 0 > O(i, n))
								void		0 !==	c && 0 > O(c, i) ? (e[a] = c, e[o] = n, a = o) : (e[a] = i, e[r] = n, a = r);
							else {
								if (!(void 0 !== c && 0 > O(c, n)))
									break e;
								e[a] = c, e[o] = n, a = o
							}
						}
					}		return	t
				}		return	null
			} function	O    (e, t) {
				var		n = e.sortIndex - t.sortIndex;
						return	0 !==	n ? n : e.id - t.id
			} var		L =[],	k =[], M = 1, S = null, N = 3, I = !1,
					R = !1,	V = !1;
			function	q      (e) {
				for (var t = C(k); null !== t;) {
					if (null == = t.callback)
						x(k);
					else {
						if (!(t.startTime <= e))
							break;
						x(k), t.sortIndex = t.expirationTime, A(L, t)
					}		t =		C       (k)
				}
			} function	D    (e) {
				if (V = !1, q(e), !R)
					if (null !== C(L))
						R = !0, a(F);
					else {
						var		t = C(k);
								null !==	t &&	s(D, t.startTime - e)
					}
			} function	F    (e, n) {
				R = !1, V && (V = !1, r()), I = !0;
				var		a = N;
						try {
					for (q(n), S = C(L); null !== S && (!(S.expirationTime > n) || e && !i());) {
						var		o = S.callback;
						if              (null !== o) {
							S.callback = null, N = S.priorityLevel;
							var		c = o(S.expirationTime <= n);
									n =		t.	unstable_now(), "function" == typeof c ? S.callback = c : S == = C(L) && x(L), q(n)
						} else
									x             (L);
						S = C(L)
					} if (null !== S)
						var		u = !0;
					else {
						var		l = C(k);
						null !== l && s(D, l.startTime - n), u = !1
					} return u
				} finally {
					S = null, N = a, I = !1
				}
			} function	j    (e) {
				switch (e) {
					case 1:return -1;
				case 2:
					return 250;
				case 5:
					return 1073741823;
				case 4:
					return 1e4;
				default:
					return 5e3
				}
			} var		W = o;
			t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, t) {
				switch (e) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					e = 3
				} var		n = N;
				N = e;
				try {
					return t()
				} finally {
					N = n
				}
			}, t.unstable_next = function(e) {
				switch (N) {
				case 1:
				case 2:
				case 3:
					var t = 3;
					break;
				default:
					t = N
				} var		n = N;
				N = t;
				try {
					return e()
				} finally {
					N = n
				}
			}, t.unstable_scheduleCallback = function(e, n, i) {
				var		o = t.unstable_now();
				if ("object" == typeof i && null !== i) {
					var		c = i.delay;
					c = "number" == typeof c && 0 < c ? o + c : o, i = "number" == typeof i.timeout ? i.timeout : j(e)
				} else
					i = j(e), c = o;
				return e = {
			id: M++, callback: n, priorityLevel: e, startTime: c, expirationTime: i = c + i, sortIndex:-1
				}, c > o ? (e.sortIndex = c, A(k, e), null == = C(L) && e == = C(k) && (V ? r() : V = !0, s(D, c - o))) : (e.sortIndex = i, A(L, e), R || I || (R = !0, a(F))), e
			}, t.unstable_cancelCallback = function(e) {
				e.callback = null
			}, t.unstable_wrapCallback = function(e) {
				var		t = N;
				return function() {
					var		n = N;
					N = t;
					try {
						return e.apply(this, arguments)
					} finally {
						N = n
					}
				}
			}, t.unstable_getCurrentPriorityLevel = function() {
				return N
			}, t.unstable_shouldYield = function() {
				var		e = t.unstable_now();
				q(e);
				var		n = C(L);
				return n !== S && null !== S && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < S.expirationTime || i()
			}, t.unstable_requestPaint = W, t.unstable_continueExecution = function() {
				R || I || (R = !0, a(F))
			}, t.unstable_pauseExecution = function() {
			}, t.unstable_getFirstCallbackNode = function() {
				return C(L)
			}, t.unstable_Profiling = null
		}, function(e, t, n) {
			"use strict";
			var		a = n(28);
			function	s      () {
			} function	r    () {
					}		r.		resetWarningCache = s, e.exports = function() {function e(e, t, n, s, r, i) {if (i !== a) {
						var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw		o.	name = "Invariant Violation",
								o
					}
			} function	t    () {
				return e
			}		e.		isRequired = e;
			var		n = {array:e, bool:e, func:e, number:e, object:e, string:e, symbol:e, any:e, arrayOf:t, element:e, elementType:e, instanceOf:t, node:e, objectOf:t, oneOf:t, oneOfType:t, shape:t, exact:t, checkPropTypes:r, resetWarningCache:s};
					return	n.	PropTypes = n, n
			}
		}              , function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}, function(e, t) {
			e.exports = function(e) {
/**INDENT** Error@1: Unbalanced parens */
				return e.webpackPolyfill || (e.deprecate = function() {
/**INDENT** Error@1: Unbalanced parens */
				}, e.paths =[], e.children || (e.children =[]), Object.defineProperty(e, "loaded", {
			enumerable: !0, get:function() {
						return e.l
					}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
				}), Object.defineProperty(e, "id", {
			enumerable: !0, get:function() {
						return e.i
					}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
				}), e.webpackPolyfill = 1), e
			}
		}, function(e) {
			e.exports = JSON.parse('
                        
[
    {
        "groups": [
            {
                "displayRowText": "Men", 
                "key": "Male", 
                "leaderLabel": "Men", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 36
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 11.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 32.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 9.5
                    }
                ], 
                "num_row": 2, 
                "row": 1, 
                "rowLabel": "MALE", 
                "rowText": "Male", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 61, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 20, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 39, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 16, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 37, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 45, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 13, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 36, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 44, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 31, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 44, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 29, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 38, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 41, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 37, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 42, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 42, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 43, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 38, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 47, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 38, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 43, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 33, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 34, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 44, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 49, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 43, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 53, 
                                "median_hpct": 32.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 48, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Women", 
                "key": "Female", 
                "leaderLabel": "Women", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 36
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 12.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 25.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 15.5
                    }
                ], 
                "num_row": 2, 
                "row": 2, 
                "rowLabel": "FEMALE", 
                "rowText": "Female", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 65, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 14, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 61, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 31, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 55, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 16, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 56, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 26, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 24, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 56, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 37, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 59, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 41, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 25, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 58, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 42, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 57, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 19, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 53, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 44, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 23, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 57, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 33, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 56, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 57, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 19, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 57, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 20, 
                                "median_hpct": 36, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 51, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 52, 
                        "stusps": "VT"
                    }
                ]
            }
        ], 
        "key": "SEX", 
        "label": "Are you:", 
        "question_id": 279, 
        "question_label": "SEX", 
        "question_label_full": "Sex"
    }, 
    {
        "groups": [
            {
                "displayRowText": "White", 
                "key": "White", 
                "leaderLabel": "White", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 34
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 12.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 26.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 15.5
                    }
                ], 
                "num_row": 5, 
                "row": 1, 
                "rowLabel": "WHITE", 
                "rowText": "White", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 57, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 22, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 46, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 21, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 55, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 14, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 26, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 72, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 36, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 21, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 80, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 32, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 95, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 42, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 85, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 25, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 62, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 23, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 79, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 37, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 26, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 70, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 28, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 30, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 45, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 48, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 23, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 61, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 22, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 51, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 12.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 15.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 94, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Black", 
                "key": "Black", 
                "leaderLabel": "Black", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 57.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 14.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 17
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 5
                    }
                ], 
                "num_row": 5, 
                "row": 2, 
                "rowLabel": "BLACK", 
                "rowText": "Black", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 72, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 10, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 4, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 49, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 33, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 16, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 23, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 7, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 6, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 36, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 7, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 1, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 47, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 43, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 5, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 6, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 62, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 17, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 27, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 4, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 57, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 19, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 4, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 26, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 58, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 15, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 20, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 69, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 17, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 28, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 57.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 14.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 5, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 2, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Hispanic/Latino", 
                "key": "Hispanic/Latino", 
                "leaderLabel": "Hispanic/Latino", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 26
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 12
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 35
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 8
                    }
                ], 
                "num_row": 5, 
                "row": 3, 
                "rowLabel": "HISP", 
                "rowText": "Hispanic/Latino", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 3, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 19, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 49, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 27, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 18, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 21, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 34, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 9, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 2, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 4, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 43, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 35, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 6, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 7, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 2, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 26, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 39, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 20, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 32, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 46, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 33, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 6, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 26, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 35, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 12, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 8, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 2, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Asian", 
                "key": "Asian", 
                "leaderLabel": "Asian", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 14
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 15
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 41
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 9.5
                    }
                ], 
                "num_row": 5, 
                "row": 4, 
                "rowLabel": "ASIAN", 
                "rowText": "Asian", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 0, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 12, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 23, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 7, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 1, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 3, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 1, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 3, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 1, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 1, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 1, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 16, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 55, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 2, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 3, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 41, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 15, 
                                "median_stcount": 2
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9.5, 
                                "median_stcount": 2
                            }
                        ], 
                        "share": 1, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Other", 
                "key": "Other", 
                "leaderLabel": "Other", 
                "medians": [], 
                "num_row": 5, 
                "row": 5, 
                "rowLabel": "OTHER", 
                "rowText": "Other", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 2, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 3, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 3, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 2, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 1, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 2, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 3, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 10, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 1, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 2, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 3, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": null, 
                                "median_stcount": null
                            }
                        ], 
                        "share": 1, 
                        "stusps": "VT"
                    }
                ]
            }
        ], 
        "key": "RACE", 
        "label": "Are you:", 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race"
    }, 
    {
        "groups": [
            {
                "displayRowText": "18-29", 
                "key": "18-29", 
                "leaderLabel": "Ages 18 to 29", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 16.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 3.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 57.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 11
                    }
                ], 
                "num_row": 4, 
                "row": 1, 
                "rowLabel": "18-29", 
                "rowText": "18-29", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 30, 
                                "median_hpct": 16.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 46, 
                                "median_hpct": 57.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 3.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 11, 
                                "median_stcount": 10
                            }
                        ], 
                        "share": 10, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 5, 
                                "median_hpct": 16.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 57, 
                                "median_hpct": 57.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 2, 
                                "median_hpct": 3.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 11, 
                                "median_stcount": 10
                            }
                        ], 
                        "share": 14, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 16.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 57.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 3.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 11, 
                                "median_stcount": 10
                            }
                        ], 
                        "share": 11, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 21, 
                                "median_hpct": 16.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 51, 
                                "median_hpct": 57.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 3, 
                                "median_hpct": 3.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 21, 
                                "median_hpct": 11, 
                                "median_stcount": 10
                            }
                        ], 
                        "share": 16, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 16.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 57.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 3.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 11, 
                                "median_stcount": 10
                            }
                        ], 
                        "share": 10, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 16, 
                                "median_hpct": 16.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 63, 
                                "median_hpct": 57.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 3, 
                                "median_hpct": 3.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 11, 
                                "median_stcount": 10
                            }
                        ], 
                        "share": 11, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 13, 
                                "median_hpct": 16.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 58, 
                                "median_hpct": 57.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 3.5, 
                                "median_stcount": 10
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 11, 
                                "median_stcount": 10
                            }
                        ], 
                        "share": 15, 
                        "stusps": "TX"
                    }
                ]
            }, 
            {
                "displayRowText": "30-44", 
                "key": "30-44", 
                "leaderLabel": "Ages 30 to 44", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 22.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 8
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 41
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 18
                    }
                ], 
                "num_row": 4, 
                "row": 2, 
                "rowLabel": "30-44", 
                "rowText": "30-44", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 54, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 24, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 18, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 23, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 9, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 52, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 18, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 25, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 8, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 46, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 4, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 21, 
                                "median_hpct": 18, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 20, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 22, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 39, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 5, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 27, 
                                "median_hpct": 18, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 21, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 21, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 47, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 18, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 23, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 25, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 40, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 18, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 22, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 20, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 42, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 18, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 22, 
                        "stusps": "TX"
                    }
                ]
            }, 
            {
                "displayRowText": "45-64", 
                "key": "45-64", 
                "leaderLabel": "Ages 45 to 64", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 41.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 15
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 19.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 11.5
                    }
                ], 
                "num_row": 4, 
                "row": 3, 
                "rowLabel": "45-64", 
                "rowText": "45-64", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 67, 
                                "median_hpct": 41.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 11, 
                                "median_hpct": 19.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 38, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 25, 
                                "median_hpct": 41.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 24, 
                                "median_hpct": 19.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 20, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 33, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 16, 
                                "median_hpct": 41.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 31, 
                                "median_hpct": 19.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 32, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 38, 
                                "median_hpct": 41.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 19.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 36, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 41, 
                                "median_hpct": 41.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 16, 
                                "median_hpct": 19.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 32, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 49, 
                                "median_hpct": 41.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 16, 
                                "median_hpct": 19.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 18, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 40, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 42, 
                                "median_hpct": 41.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 19.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 38, 
                        "stusps": "TX"
                    }
                ]
            }, 
            {
                "displayRowText": "65+", 
                "key": "65 or over", 
                "leaderLabel": "Ages 65 and older", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 47.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 18.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 15
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 9.5
                    }
                ], 
                "num_row": 4, 
                "row": 4, 
                "rowLabel": "65+", 
                "rowText": "65 or over", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 78, 
                                "median_hpct": 47.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 6, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 18.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 1, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 28, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 32, 
                                "median_hpct": 47.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 16, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 21, 
                                "median_hpct": 18.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 28, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 22, 
                                "median_hpct": 47.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 17, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 22, 
                                "median_hpct": 18.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 36, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 47, 
                                "median_hpct": 47.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 16, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 18.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 26, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 48, 
                                "median_hpct": 47.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 6, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 25, 
                                "median_hpct": 18.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 35, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 52, 
                                "median_hpct": 47.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 13, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 20, 
                                "median_hpct": 18.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 28, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 43, 
                                "median_hpct": 47.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 16, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 24, 
                                "median_hpct": 18.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 9.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 25, 
                        "stusps": "TX"
                    }
                ]
            }
        ], 
        "key": "AGE", 
        "label": "In which age group are you?", 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age"
    }, 
    {
        "groups": [
            {
                "displayRowText": "17-29", 
                "key": "17-29", 
                "leaderLabel": "Ages 17 to 29", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 0
                    }
                ], 
                "num_row": 4, 
                "row": 1, 
                "rowLabel": "17-29", 
                "rowText": "17-29", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 9, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 67, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 1, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 15, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 17, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 65, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 3, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 19, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 19, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 57, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 14, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 26, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 55, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 5, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 13, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 6, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 68, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 4, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 11, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "30-44", 
                "key": "30-44", 
                "leaderLabel": "Ages 30 to 44", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 0
                    }
                ], 
                "num_row": 4, 
                "row": 2, 
                "rowLabel": "30-44", 
                "rowText": "30-44", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 23, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 49, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 4, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 21, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 19, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 25, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 38, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 4, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 25, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 24, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 33, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 22, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 23, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 7, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 68, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 3, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 20, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "45-64", 
                "key": "45-64", 
                "leaderLabel": "Ages 45 to 64", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 0
                    }
                ], 
                "num_row": 4, 
                "row": 3, 
                "rowLabel": "45-64", 
                "rowText": "45-64", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 38, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 24, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 33, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 49, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 18, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 32, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 47, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 18, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 37, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 57, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 18, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 40, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 22, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 47, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 41, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "65+", 
                "key": "65 or over", 
                "leaderLabel": "Ages 65 and older", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 0
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 0
                    }
                ], 
                "num_row": 4, 
                "row": 4, 
                "rowLabel": "65+", 
                "rowText": "65 or over", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 46, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 18, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 33, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 59, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 14, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 26, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 53, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 8, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 18, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 27, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 76, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 7, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 23, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 37, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 41, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 0, 
                                "median_stcount": 0
                            }
                        ], 
                        "share": 28, 
                        "stusps": "VT"
                    }
                ]
            }
        ], 
        "key": "XAGE", 
        "label": "In which age group are you?", 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age"
    }, 
    {
        "groups": [
            {
                "displayRowText": "Democrats", 
                "key": "Democrat", 
                "leaderLabel": "Democrats", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 41
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 12
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 26.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 14.5
                    }
                ], 
                "num_row": 3, 
                "row": 1, 
                "rowLabel": "DEMOCRAT", 
                "rowText": "Democrat", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 67, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 14, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 74, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 23, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 32, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 77, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 20, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 63, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 25, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 28, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 54, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 31, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 20, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 67, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 43, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 69, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 47, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 20, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 69, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 45, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 64, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 46, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 23, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 70, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 36, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 72, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 58, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 66, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 22, 
                                "median_hpct": 41, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 51, 
                                "median_hpct": 26.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 50, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Republicans", 
                "key": "Republican", 
                "leaderLabel": "Republicans", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 43
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 17
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 22
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 3
                    }
                ], 
                "num_row": 3, 
                "row": 2, 
                "rowLabel": "REPUBLICAN", 
                "rowText": "Republican", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 3, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 2, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 0, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 4, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 1, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 4, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 3, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 7, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 3, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 3, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 43, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 22, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 3, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 7, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 43, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 17, 
                                "median_stcount": 1
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 3, 
                                "median_stcount": 1
                            }
                        ], 
                        "share": 5, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Independents or Something else", 
                "key": "Independent or something else", 
                "leaderLabel": "Independents or Something else", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 26
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 14.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 35.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 11
                    }
                ], 
                "num_row": 3, 
                "row": 3, 
                "rowLabel": "IND/OTHER", 
                "rowText": "Independent or something else", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 51, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 24, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 23, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 12, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 44, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 21, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 8, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 37, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 36, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 32, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 33, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 41, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 22, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 40, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 32, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 39, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 27, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 29, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 34, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 27, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 20, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 31, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 29, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 29, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 33, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 27, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 23, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 39, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 25, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 43, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 27, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 18, 
                                "median_hpct": 26, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 57, 
                                "median_hpct": 35.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 45, 
                        "stusps": "VT"
                    }
                ]
            }
        ], 
        "key": "PARTY", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification"
    }, 
    {
        "groups": [
            {
                "displayRowText": "College graduate", 
                "key": "College graduate", 
                "leaderLabel": "College graduates", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 34
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 12
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 24.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 17.5
                    }
                ], 
                "num_row": 2, 
                "row": 1, 
                "rowLabel": "COLLEGEGRAD", 
                "rowText": "College graduate", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 61, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 17, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 36, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 18, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 32, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 55, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 13, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 61, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 31, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 24, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 26, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 53, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 33, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 31, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 22, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 51, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 25, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 22, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 50, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 37, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 46, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 24, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 31, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 24, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 45, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 30, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 40, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 50, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 20, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 50, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 23, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 49, 
                                "median_hpct": 24.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 53, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "No college degree", 
                "key": "No college degree", 
                "leaderLabel": "No college degree", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 37
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 12
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 33
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 7.5
                    }
                ], 
                "num_row": 2, 
                "row": 2, 
                "rowLabel": "NODEGREE", 
                "rowText": "No college degree", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 64, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 17, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 4, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 64, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 36, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 45, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 18, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 37, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 39, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 37, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 34, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 47, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 35, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 49, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 41, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 36, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 50, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 46, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 54, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 37, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 24, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 69, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 47, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 26, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 55, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 32, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 60, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 57, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 26, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 50, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 21, 
                                "median_hpct": 37, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 55, 
                                "median_hpct": 33, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 7.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 47, 
                        "stusps": "VT"
                    }
                ]
            }
        ], 
        "key": "EDUCCOLL", 
        "label": "What was the last grade of school you completed?", 
        "question_id": 1951, 
        "question_label": "EDUCCOLL", 
        "question_label_full": "Education"
    }, 
    {
        "groups": [
            {
                "displayRowText": "In the last few days", 
                "key": "Last few days", 
                "leaderLabel": "Decided in last few days", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 47
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 14
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 17
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 14
                    }
                ], 
                "num_row": 2, 
                "row": 1, 
                "rowLabel": "LASTFEWDAYS", 
                "rowText": "Last few days", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 64, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 11, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 40, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 30, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 19, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 23, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 19, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 43, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 18, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 20, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 51, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 47, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 17, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 47, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 53, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 19, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 55, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 53, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 22, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 32, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 41, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 15, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 18, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 50, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 61, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 15, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 28, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 45, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 16, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 24, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 59, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 17, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 49, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 47, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 32, 
                                "median_hpct": 17, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 14, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 38, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Decided before last few days", 
                "key": "Earlier than that", 
                "leaderLabel": "Decided before last few days", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 29
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 10
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 33
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 11
                    }
                ], 
                "num_row": 2, 
                "row": 2, 
                "rowLabel": "EARLIER", 
                "rowText": "Earlier than that", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 63, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 20, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 59, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 17, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 37, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 77, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 40, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 22, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 48, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 22, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 47, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 52, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 45, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 45, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 26, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 67, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 31, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 32, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 50, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 18, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 71, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 29, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 33, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 76, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 50, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 51, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 13, 
                                "median_hpct": 29, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 64, 
                                "median_hpct": 33, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 10, 
                                "median_stcount": 11
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 11, 
                                "median_stcount": 11
                            }
                        ], 
                        "share": 61, 
                        "stusps": "VT"
                    }
                ]
            }
        ], 
        "key": "TIMEPRIFEWDAYS", 
        "label": "Time: Last few days/Earlier than that", 
        "question_id": 2543, 
        "question_label": "TIMEPRIFEWDAYS", 
        "question_label_full": "When did you decide?"
    }, 
    {
        "groups": [
            {
                "displayRowText": "Very liberal", 
                "key": "Very liberal", 
                "leaderLabel": "Very liberal", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 19
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 48.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 20
                    }
                ], 
                "num_row": 4, 
                "row": 1, 
                "rowLabel": "VERYLIB", 
                "rowText": "Very liberal", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 51, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 22, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 13, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 49, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 22, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 29, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 7, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 54, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 5, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 24, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 26, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 19, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 40, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 4, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 33, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 27, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 16, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 55, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 3, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 25, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 31, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 16, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 51, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 1, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 26, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 24, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 31, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 39, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 23, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 23, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 51, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 20, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 18, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 28, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 41, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 24, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 19, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 48, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 24, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 37, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 41, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 5, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 19, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 7, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 68, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 1, 
                                "median_hpct": 5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 20, 
                                "median_hpct": 20, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 29, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Somewhat liberal", 
                "key": "Somewhat liberal", 
                "leaderLabel": "Somewhat liberal", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 38.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 10.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 28
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 16
                    }
                ], 
                "num_row": 4, 
                "row": 2, 
                "rowLabel": "SOMEWHTLIB", 
                "rowText": "Somewhat liberal", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 58, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 22, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 33, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 18, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 34, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 35, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 14, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 40, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 24, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 37, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 38, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 33, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 20, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 39, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 30, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 42, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 41, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 23, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 36, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 30, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 30, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 33, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 36, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 33, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 50, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 22, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 34, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 23, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 55, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 10.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 16, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 37, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Moderate or conservative", 
                "key": "Moderate or conservative", 
                "leaderLabel": "Moderate or conservative", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 46.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 19
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 16.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 6
                    }
                ], 
                "num_row": 4, 
                "row": 3, 
                "rowLabel": "MODCON", 
                "rowText": "Moderate or conservative", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 71, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 8, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 3, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 46, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 29, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 23, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 21, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 36, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 23, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 20, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 21, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 34, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 46, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 20, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 18, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 36, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 48, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 13, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 22, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 30, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 58, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 15, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 34, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 47, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 16, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 18, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 41, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 11, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 24, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 52, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 49, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 16, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 42, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 23, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 43, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 62, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 17, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 47, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 28, 
                                "median_hpct": 46.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 39, 
                                "median_hpct": 16.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 19, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 6, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 35, 
                        "stusps": "VT"
                    }
                ]
            }
        ], 
        "key": "PHIL4", 
        "label": "On most political matters, do you consider yourself:", 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology"
    }, 
    {
        "groups": [
            {
                "displayRowText": "Race relations", 
                "key": "Race relations", 
                "leaderLabel": "Top issue: Race relations", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 47.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 14
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 22
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 9
                    }
                ], 
                "num_row": 4, 
                "row": 1, 
                "rowLabel": "RACERELATIONS", 
                "rowText": "Race relations", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 69, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 8, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 18, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 28, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 8, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 7, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 49, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 15, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 7, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 4, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 44, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 20, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 7, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 47, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 23, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 13, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 7, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 48, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 11, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 42, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 25, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 18, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 14, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 60, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 24, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 12, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 0, 
                                "median_hpct": 47.5, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 0, 
                                "median_hpct": 22, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 0, 
                                "median_hpct": 14, 
                                "median_stcount": 8
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 0, 
                                "median_hpct": 9, 
                                "median_stcount": 8
                            }
                        ], 
                        "share": 3, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Health care", 
                "key": "Health care", 
                "leaderLabel": "Top issue: Health care", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 38.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 13.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 29.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 10
                    }
                ], 
                "num_row": 4, 
                "row": 2, 
                "rowLabel": "HEALTHCARE", 
                "rowText": "Health care", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 62, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 15, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 47, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 22, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 34, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 35, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 18, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 31, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 36, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 37, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 38, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 34, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 45, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 42, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 31, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 46, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 43, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 26, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 42, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 40, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 50, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 43, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 44, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 32, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 47, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 55, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 42, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 21, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 54, 
                                "median_hpct": 29.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 10, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 41, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Climate change", 
                "key": "Climate change", 
                "leaderLabel": "Top issue: Climate change", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 34
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 11.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 28.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 14.5
                    }
                ], 
                "num_row": 4, 
                "row": 3, 
                "rowLabel": "CLIMATE", 
                "rowText": "Climate change", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 64, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 26, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 3, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 11, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 23, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 25, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 18, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 20, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 25, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 22, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 27, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 32, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 28, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 43, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 24, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 36, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 23, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 22, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 27, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 22, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 15, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 19, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 31, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 16, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 53, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 22, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 18, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 19, 
                                "median_hpct": 34, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 53, 
                                "median_hpct": 28.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 11.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 14.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 29, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Income inequality", 
                "key": "Income inequality", 
                "leaderLabel": "Top issue: Income inequality", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 28
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 9
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 35
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 17.5
                    }
                ], 
                "num_row": 4, 
                "row": 4, 
                "rowLabel": "INCOMEINEQ", 
                "rowText": "Income inequality", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 53, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 26, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 18, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 12, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 45, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 24, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 8, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 41, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 20, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 23, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 38, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 30, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 20, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 22, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 42, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 3, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 27, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 18, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 30, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 39, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 5, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 18, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 18, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 25, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 19, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 33, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 31, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 20, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 37, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 25, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 20, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 19, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 26, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 32, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 18, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 19, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 44, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 28, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 22, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 17, 
                                "median_hpct": 28, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 57, 
                                "median_hpct": 35, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 5, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 21, 
                        "stusps": "VT"
                    }
                ]
            }
        ], 
        "key": "ISSDEM20B", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote"
    }, 
    {
        "groups": [
            {
                "displayRowText": "Agrees with you on major issues", 
                "key": "Agrees with you on major issues", 
                "leaderLabel": "Prefer candidate who agrees with you on issues", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 25
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 12
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 38.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 12
                    }
                ], 
                "num_row": 2, 
                "row": 1, 
                "rowLabel": "AGREEISS", 
                "rowText": "Agrees with you on major issues", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 55, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 4, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 42, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 13, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 48, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 32, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 8, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 46, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 28, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 36, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 32, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 18, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 48, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 32, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 25, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 49, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 32, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 35, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 33, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 34, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 25, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 29, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 42, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 31, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 35, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 35, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 26, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 41, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 13, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 40, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 33, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 39, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 6, 
                                "median_hpct": 25, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 64, 
                                "median_hpct": 38.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 12, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 34, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Can beat Donald Trump", 
                "key": "Can beat Donald Trump", 
                "leaderLabel": "Prefer candidate who can beat Donald Trump", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 43
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 13
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 22.5
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 13.5
                    }
                ], 
                "num_row": 2, 
                "row": 2, 
                "rowLabel": "BEATTRUMP", 
                "rowText": "Can beat Donald Trump", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 69, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 14, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 53, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 64, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 18, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 25, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 69, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 39, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 24, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 22, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 65, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 42, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 25, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 66, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 47, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 21, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 17, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 65, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 44, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 19, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 12, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 63, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 45, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 20, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 55, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 47, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 20, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 11, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 61, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 38, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 24, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 16, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 57, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 63, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 16, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 58, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 29, 
                                "median_hpct": 43, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 47, 
                                "median_hpct": 22.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 13, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 13.5, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 63, 
                        "stusps": "VT"
                    }
                ]
            }
        ], 
        "key": "WINORISS20", 
        "label": "If you had to choose, would you rather see the Democratic Party nominate a candidate who:", 
        "question_id": 4151, 
        "question_label": "WINORISS20", 
        "question_label_full": "Rather nominate a candidate who..."
    }, 
    {
        "groups": [
            {
                "displayRowText": "Support", 
                "key": "Support", 
                "leaderLabel": "Support changing to single government health plan", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 25.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 9
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 40
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 15
                    }
                ], 
                "num_row": 2, 
                "row": 1, 
                "rowLabel": "SUPPORT", 
                "rowText": "Support", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 50, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 27, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 9, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 51, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 12, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 47, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 55, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 7, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 49, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 57, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 23, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 41, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 27, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 50, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 44, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 20, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 69, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 26, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 44, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 20, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 62, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 34, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 36, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 10, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 55, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 33, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 38, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 53, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 32, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 38, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 53, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 25, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 39, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 64, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 42, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 33, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 52, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 14, 
                                "median_hpct": 25.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 62, 
                                "median_hpct": 40, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 7, 
                                "median_hpct": 9, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 15, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 73, 
                        "stusps": "VT"
                    }
                ]
            }, 
            {
                "displayRowText": "Oppose", 
                "key": "Oppose", 
                "leaderLabel": "Oppose changing to single government health plan", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 48.5
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 17.5
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 11
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 8
                    }
                ], 
                "num_row": 2, 
                "row": 2, 
                "rowLabel": "OPPOSE", 
                "rowText": "Oppose", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 76, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 5, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 2, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 43, 
                        "stusps": "AL"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 30, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 14, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 29, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 35, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 10, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 21, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 36, 
                        "stusps": "CO"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 46, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 13, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 18, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 14, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 45, 
                        "stusps": "MA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 56, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 8, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 15, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 28, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 64, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 6, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 11, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 35, 
                        "stusps": "MN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 54, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 12, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 17, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 41, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 40, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 6, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 21, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 13, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 43, 
                        "stusps": "OK"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 51, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 9, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 26, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 43, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 46, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 13, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 33, 
                        "stusps": "TX"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 67, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 12, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 45, 
                        "stusps": "VA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 42, 
                                "median_hpct": 48.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 25, 
                                "median_hpct": 11, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 14, 
                                "median_hpct": 17.5, 
                                "median_stcount": 12
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 10, 
                                "median_hpct": 8, 
                                "median_stcount": 12
                            }
                        ], 
                        "share": 23, 
                        "stusps": "VT"
                    }
                ]
            }
        ], 
        "key": "SINGLEPAYER20", 
        "label": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "question_id": 4152, 
        "question_label": "SINGLEPAYER20", 
        "question_label_full": "How do you feel about replacing all private health insurance with a single government plan for everyone?"
    }, 
    {
        "groups": [
            {
                "displayRowText": "Favorable", 
                "key": "Favorable", 
                "leaderLabel": "Favorable view of socialism", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 24
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 9
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 41
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 16
                    }
                ], 
                "num_row": 2, 
                "row": 1, 
                "rowLabel": "FAVORABLE", 
                "rowText": "Favorable", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 13, 
                                "median_hpct": 24, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 47, 
                                "median_hpct": 41, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 9, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 19, 
                                "median_hpct": 16, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 52, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 21, 
                                "median_hpct": 24, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 49, 
                                "median_hpct": 41, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 6, 
                                "median_hpct": 9, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 22, 
                                "median_hpct": 16, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 60, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 33, 
                                "median_hpct": 24, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 35, 
                                "median_hpct": 41, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 9, 
                                "median_hpct": 9, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 16, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 50, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 33, 
                                "median_hpct": 24, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 38, 
                                "median_hpct": 41, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 8, 
                                "median_hpct": 9, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 15, 
                                "median_hpct": 16, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 47, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 24, 
                                "median_hpct": 24, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 41, 
                                "median_hpct": 41, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 12, 
                                "median_hpct": 9, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 16, 
                                "median_hpct": 16, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 56, 
                        "stusps": "TX"
                    }
                ]
            }, 
            {
                "displayRowText": "Unfavorable", 
                "key": "Unfavorable", 
                "leaderLabel": "Unfavorable view of socialism", 
                "medians": [
                    {
                        "cand": "biden", 
                        "hPct": 48
                    }, 
                    {
                        "cand": "bloomberg", 
                        "hPct": 21
                    }, 
                    {
                        "cand": "sanders", 
                        "hPct": 14
                    }, 
                    {
                        "cand": "warren", 
                        "hPct": 7
                    }
                ], 
                "num_row": 2, 
                "row": 2, 
                "rowLabel": "UNFAVORABLE", 
                "rowText": "Unfavorable", 
                "states": [
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 30, 
                                "median_hpct": 48, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 18, 
                                "median_hpct": 14, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 24, 
                                "median_hpct": 21, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 7, 
                                "median_hpct": 7, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 34, 
                        "stusps": "CA"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 56, 
                                "median_hpct": 48, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 6, 
                                "median_hpct": 14, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 21, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 7, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 32, 
                        "stusps": "ME"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 53, 
                                "median_hpct": 48, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 14, 
                                "median_hpct": 14, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 19, 
                                "median_hpct": 21, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 6, 
                                "median_hpct": 7, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 40, 
                        "stusps": "NC"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 48, 
                                "median_hpct": 48, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 11, 
                                "median_hpct": 14, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 26, 
                                "median_hpct": 21, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 5, 
                                "median_hpct": 7, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 44, 
                        "stusps": "TN"
                    }, 
                    {
                        "candidates": [
                            {
                                "cand": "biden", 
                                "hPct": 44, 
                                "median_hpct": 48, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "sanders", 
                                "hPct": 15, 
                                "median_hpct": 14, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "bloomberg", 
                                "hPct": 21, 
                                "median_hpct": 21, 
                                "median_stcount": 5
                            }, 
                            {
                                "cand": "warren", 
                                "hPct": 8, 
                                "median_hpct": 7, 
                                "median_stcount": 5
                            }
                        ], 
                        "share": 37, 
                        "stusps": "TX"
                    }
                ]
            }
        ], 
        "key": "FAVSOCIALISM", 
        "label": "Is your opinion of socialism:", 
        "question_id": 4212, 
        "question_label": "FAVSOCIALISM", 
        "question_label_full": "Is your opinion of socialism..."
    }
]
                        ')
		}, function(e) {
			e.exports = JSON.parse('
                        
                        
[
    {
        "cand": "biden", 
        "displayRowText": "18-29", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 18 to 29", 
        "median_hpct": 16.5, 
        "median_stcount": 10, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 1, 
        "rowLabel": "18-29", 
        "rowText": "18-29", 
        "states": [
            {
                "hPct": 30, 
                "share": 10, 
                "stusps": "AL"
            }, 
            {
                "hPct": 21, 
                "share": 16, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 10, 
                "stusps": "OK"
            }, 
            {
                "hPct": 16, 
                "share": 11, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 11, 
                "stusps": "CO"
            }, 
            {
                "hPct": 13, 
                "share": 15, 
                "stusps": "TX"
            }, 
            {
                "hPct": 5, 
                "share": 14, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "18-29", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 18 to 29", 
        "median_hpct": 3.5, 
        "median_stcount": 10, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 1, 
        "rowLabel": "18-29", 
        "rowText": "18-29", 
        "states": [
            {
                "hPct": 12, 
                "share": 10, 
                "stusps": "AL"
            }, 
            {
                "hPct": 3, 
                "share": 16, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 10, 
                "stusps": "OK"
            }, 
            {
                "hPct": 3, 
                "share": 11, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 11, 
                "stusps": "CO"
            }, 
            {
                "hPct": 9, 
                "share": 15, 
                "stusps": "TX"
            }, 
            {
                "hPct": 2, 
                "share": 14, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "18-29", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 18 to 29", 
        "median_hpct": 57.5, 
        "median_stcount": 10, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 1, 
        "rowLabel": "18-29", 
        "rowText": "18-29", 
        "states": [
            {
                "hPct": 46, 
                "share": 10, 
                "stusps": "AL"
            }, 
            {
                "hPct": 51, 
                "share": 16, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 10, 
                "stusps": "OK"
            }, 
            {
                "hPct": 63, 
                "share": 11, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 11, 
                "stusps": "CO"
            }, 
            {
                "hPct": 58, 
                "share": 15, 
                "stusps": "TX"
            }, 
            {
                "hPct": 57, 
                "share": 14, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "18-29", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 18 to 29", 
        "median_hpct": 11, 
        "median_stcount": 10, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 1, 
        "rowLabel": "18-29", 
        "rowText": "18-29", 
        "states": [
            {
                "hPct": 10, 
                "share": 10, 
                "stusps": "AL"
            }, 
            {
                "hPct": 21, 
                "share": 16, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 10, 
                "stusps": "OK"
            }, 
            {
                "hPct": 11, 
                "share": 11, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 11, 
                "stusps": "CO"
            }, 
            {
                "hPct": 9, 
                "share": 15, 
                "stusps": "TX"
            }, 
            {
                "hPct": 12, 
                "share": 14, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "30-44", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 30 to 44", 
        "median_hpct": 22.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 2, 
        "rowLabel": "30-44", 
        "rowText": "30-44", 
        "states": [
            {
                "hPct": 54, 
                "share": 23, 
                "stusps": "AL"
            }, 
            {
                "hPct": 22, 
                "share": 21, 
                "stusps": "MA"
            }, 
            {
                "hPct": 21, 
                "share": 23, 
                "stusps": "OK"
            }, 
            {
                "hPct": 25, 
                "share": 22, 
                "stusps": "TN"
            }, 
            {
                "hPct": 8, 
                "share": 20, 
                "stusps": "CO"
            }, 
            {
                "hPct": 20, 
                "share": 22, 
                "stusps": "TX"
            }, 
            {
                "hPct": 9, 
                "share": 25, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "30-44", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 30 to 44", 
        "median_hpct": 8, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 2, 
        "rowLabel": "30-44", 
        "rowText": "30-44", 
        "states": [
            {
                "hPct": 9, 
                "share": 23, 
                "stusps": "AL"
            }, 
            {
                "hPct": 5, 
                "share": 21, 
                "stusps": "MA"
            }, 
            {
                "hPct": 9, 
                "share": 23, 
                "stusps": "OK"
            }, 
            {
                "hPct": 12, 
                "share": 22, 
                "stusps": "TN"
            }, 
            {
                "hPct": 4, 
                "share": 20, 
                "stusps": "CO"
            }, 
            {
                "hPct": 8, 
                "share": 22, 
                "stusps": "TX"
            }, 
            {
                "hPct": 9, 
                "share": 25, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "30-44", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 30 to 44", 
        "median_hpct": 41, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 2, 
        "rowLabel": "30-44", 
        "rowText": "30-44", 
        "states": [
            {
                "hPct": 24, 
                "share": 23, 
                "stusps": "AL"
            }, 
            {
                "hPct": 39, 
                "share": 21, 
                "stusps": "MA"
            }, 
            {
                "hPct": 47, 
                "share": 23, 
                "stusps": "OK"
            }, 
            {
                "hPct": 40, 
                "share": 22, 
                "stusps": "TN"
            }, 
            {
                "hPct": 46, 
                "share": 20, 
                "stusps": "CO"
            }, 
            {
                "hPct": 42, 
                "share": 22, 
                "stusps": "TX"
            }, 
            {
                "hPct": 52, 
                "share": 25, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "30-44", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 30 to 44", 
        "median_hpct": 18, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 2, 
        "rowLabel": "30-44", 
        "rowText": "30-44", 
        "states": [
            {
                "hPct": 8, 
                "share": 23, 
                "stusps": "AL"
            }, 
            {
                "hPct": 27, 
                "share": 21, 
                "stusps": "MA"
            }, 
            {
                "hPct": 18, 
                "share": 23, 
                "stusps": "OK"
            }, 
            {
                "hPct": 16, 
                "share": 22, 
                "stusps": "TN"
            }, 
            {
                "hPct": 21, 
                "share": 20, 
                "stusps": "CO"
            }, 
            {
                "hPct": 17, 
                "share": 22, 
                "stusps": "TX"
            }, 
            {
                "hPct": 18, 
                "share": 25, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "45-64", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 45 to 64", 
        "median_hpct": 41.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 3, 
        "rowLabel": "45-64", 
        "rowText": "45-64", 
        "states": [
            {
                "hPct": 67, 
                "share": 38, 
                "stusps": "AL"
            }, 
            {
                "hPct": 38, 
                "share": 36, 
                "stusps": "MA"
            }, 
            {
                "hPct": 41, 
                "share": 32, 
                "stusps": "OK"
            }, 
            {
                "hPct": 49, 
                "share": 40, 
                "stusps": "TN"
            }, 
            {
                "hPct": 16, 
                "share": 32, 
                "stusps": "CO"
            }, 
            {
                "hPct": 42, 
                "share": 38, 
                "stusps": "TX"
            }, 
            {
                "hPct": 25, 
                "share": 33, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "45-64", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 45 to 64", 
        "median_hpct": 15, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 3, 
        "rowLabel": "45-64", 
        "rowText": "45-64", 
        "states": [
            {
                "hPct": 13, 
                "share": 38, 
                "stusps": "AL"
            }, 
            {
                "hPct": 15, 
                "share": 36, 
                "stusps": "MA"
            }, 
            {
                "hPct": 12, 
                "share": 32, 
                "stusps": "OK"
            }, 
            {
                "hPct": 18, 
                "share": 40, 
                "stusps": "TN"
            }, 
            {
                "hPct": 16, 
                "share": 32, 
                "stusps": "CO"
            }, 
            {
                "hPct": 17, 
                "share": 38, 
                "stusps": "TX"
            }, 
            {
                "hPct": 20, 
                "share": 33, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "45-64", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 45 to 64", 
        "median_hpct": 19.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 3, 
        "rowLabel": "45-64", 
        "rowText": "45-64", 
        "states": [
            {
                "hPct": 11, 
                "share": 38, 
                "stusps": "AL"
            }, 
            {
                "hPct": 21, 
                "share": 36, 
                "stusps": "MA"
            }, 
            {
                "hPct": 16, 
                "share": 32, 
                "stusps": "OK"
            }, 
            {
                "hPct": 16, 
                "share": 40, 
                "stusps": "TN"
            }, 
            {
                "hPct": 31, 
                "share": 32, 
                "stusps": "CO"
            }, 
            {
                "hPct": 21, 
                "share": 38, 
                "stusps": "TX"
            }, 
            {
                "hPct": 24, 
                "share": 33, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "45-64", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 45 to 64", 
        "median_hpct": 11.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 3, 
        "rowLabel": "45-64", 
        "rowText": "45-64", 
        "states": [
            {
                "hPct": 7, 
                "share": 38, 
                "stusps": "AL"
            }, 
            {
                "hPct": 19, 
                "share": 36, 
                "stusps": "MA"
            }, 
            {
                "hPct": 15, 
                "share": 32, 
                "stusps": "OK"
            }, 
            {
                "hPct": 8, 
                "share": 40, 
                "stusps": "TN"
            }, 
            {
                "hPct": 14, 
                "share": 32, 
                "stusps": "CO"
            }, 
            {
                "hPct": 11, 
                "share": 38, 
                "stusps": "TX"
            }, 
            {
                "hPct": 12, 
                "share": 33, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "65+", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 65 and older", 
        "median_hpct": 47.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 4, 
        "rowLabel": "65+", 
        "rowText": "65 or over", 
        "states": [
            {
                "hPct": 78, 
                "share": 28, 
                "stusps": "AL"
            }, 
            {
                "hPct": 47, 
                "share": 26, 
                "stusps": "MA"
            }, 
            {
                "hPct": 48, 
                "share": 35, 
                "stusps": "OK"
            }, 
            {
                "hPct": 52, 
                "share": 28, 
                "stusps": "TN"
            }, 
            {
                "hPct": 22, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 43, 
                "share": 25, 
                "stusps": "TX"
            }, 
            {
                "hPct": 32, 
                "share": 28, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "65+", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 65 and older", 
        "median_hpct": 18.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 4, 
        "rowLabel": "65+", 
        "rowText": "65 or over", 
        "states": [
            {
                "hPct": 12, 
                "share": 28, 
                "stusps": "AL"
            }, 
            {
                "hPct": 15, 
                "share": 26, 
                "stusps": "MA"
            }, 
            {
                "hPct": 25, 
                "share": 35, 
                "stusps": "OK"
            }, 
            {
                "hPct": 20, 
                "share": 28, 
                "stusps": "TN"
            }, 
            {
                "hPct": 22, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 24, 
                "share": 25, 
                "stusps": "TX"
            }, 
            {
                "hPct": 21, 
                "share": 28, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "65+", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 65 and older", 
        "median_hpct": 15, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 4, 
        "rowLabel": "65+", 
        "rowText": "65 or over", 
        "states": [
            {
                "hPct": 6, 
                "share": 28, 
                "stusps": "AL"
            }, 
            {
                "hPct": 16, 
                "share": 26, 
                "stusps": "MA"
            }, 
            {
                "hPct": 6, 
                "share": 35, 
                "stusps": "OK"
            }, 
            {
                "hPct": 13, 
                "share": 28, 
                "stusps": "TN"
            }, 
            {
                "hPct": 17, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 16, 
                "share": 25, 
                "stusps": "TX"
            }, 
            {
                "hPct": 16, 
                "share": 28, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "65+", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 65 and older", 
        "median_hpct": 9.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 159, 
        "question_label": "AGE", 
        "question_label_full": "Age", 
        "row": 4, 
        "rowLabel": "65+", 
        "rowText": "65 or over", 
        "states": [
            {
                "hPct": 1, 
                "share": 28, 
                "stusps": "AL"
            }, 
            {
                "hPct": 17, 
                "share": 26, 
                "stusps": "MA"
            }, 
            {
                "hPct": 10, 
                "share": 35, 
                "stusps": "OK"
            }, 
            {
                "hPct": 9, 
                "share": 28, 
                "stusps": "TN"
            }, 
            {
                "hPct": 12, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 8, 
                "share": 25, 
                "stusps": "TX"
            }, 
            {
                "hPct": 10, 
                "share": 28, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Democrats", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Democrats", 
        "median_hpct": 41, 
        "median_stcount": 12, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 1, 
        "rowLabel": "DEMOCRAT", 
        "rowText": "Democrat", 
        "states": [
            {
                "hPct": 58, 
                "share": 66, 
                "stusps": "VA"
            }, 
            {
                "hPct": 22, 
                "share": 50, 
                "stusps": "VT"
            }, 
            {
                "hPct": 47, 
                "share": 69, 
                "stusps": "NC"
            }, 
            {
                "hPct": 67, 
                "share": 74, 
                "stusps": "AL"
            }, 
            {
                "hPct": 39, 
                "share": 67, 
                "stusps": "ME"
            }, 
            {
                "hPct": 34, 
                "share": 54, 
                "stusps": "MA"
            }, 
            {
                "hPct": 45, 
                "share": 64, 
                "stusps": "OK"
            }, 
            {
                "hPct": 46, 
                "share": 70, 
                "stusps": "TN"
            }, 
            {
                "hPct": 20, 
                "share": 63, 
                "stusps": "CO"
            }, 
            {
                "hPct": 43, 
                "share": 69, 
                "stusps": "MN"
            }, 
            {
                "hPct": 36, 
                "share": 72, 
                "stusps": "TX"
            }, 
            {
                "hPct": 23, 
                "share": 77, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Democrats", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Democrats", 
        "median_hpct": 12, 
        "median_stcount": 12, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 1, 
        "rowLabel": "DEMOCRAT", 
        "rowText": "Democrat", 
        "states": [
            {
                "hPct": 8, 
                "share": 66, 
                "stusps": "VA"
            }, 
            {
                "hPct": 7, 
                "share": 50, 
                "stusps": "VT"
            }, 
            {
                "hPct": 13, 
                "share": 69, 
                "stusps": "NC"
            }, 
            {
                "hPct": 11, 
                "share": 74, 
                "stusps": "AL"
            }, 
            {
                "hPct": 8, 
                "share": 67, 
                "stusps": "ME"
            }, 
            {
                "hPct": 9, 
                "share": 54, 
                "stusps": "MA"
            }, 
            {
                "hPct": 13, 
                "share": 64, 
                "stusps": "OK"
            }, 
            {
                "hPct": 14, 
                "share": 70, 
                "stusps": "TN"
            }, 
            {
                "hPct": 13, 
                "share": 63, 
                "stusps": "CO"
            }, 
            {
                "hPct": 6, 
                "share": 69, 
                "stusps": "MN"
            }, 
            {
                "hPct": 15, 
                "share": 72, 
                "stusps": "TX"
            }, 
            {
                "hPct": 15, 
                "share": 77, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Democrats", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Democrats", 
        "median_hpct": 26.5, 
        "median_stcount": 12, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 1, 
        "rowLabel": "DEMOCRAT", 
        "rowText": "Democrat", 
        "states": [
            {
                "hPct": 21, 
                "share": 66, 
                "stusps": "VA"
            }, 
            {
                "hPct": 51, 
                "share": 50, 
                "stusps": "VT"
            }, 
            {
                "hPct": 20, 
                "share": 69, 
                "stusps": "NC"
            }, 
            {
                "hPct": 14, 
                "share": 74, 
                "stusps": "AL"
            }, 
            {
                "hPct": 31, 
                "share": 67, 
                "stusps": "ME"
            }, 
            {
                "hPct": 25, 
                "share": 54, 
                "stusps": "MA"
            }, 
            {
                "hPct": 21, 
                "share": 64, 
                "stusps": "OK"
            }, 
            {
                "hPct": 23, 
                "share": 70, 
                "stusps": "TN"
            }, 
            {
                "hPct": 29, 
                "share": 63, 
                "stusps": "CO"
            }, 
            {
                "hPct": 28, 
                "share": 69, 
                "stusps": "MN"
            }, 
            {
                "hPct": 28, 
                "share": 72, 
                "stusps": "TX"
            }, 
            {
                "hPct": 32, 
                "share": 77, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Democrats", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Democrats", 
        "median_hpct": 14.5, 
        "median_stcount": 12, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 1, 
        "rowLabel": "DEMOCRAT", 
        "rowText": "Democrat", 
        "states": [
            {
                "hPct": 12, 
                "share": 66, 
                "stusps": "VA"
            }, 
            {
                "hPct": 15, 
                "share": 50, 
                "stusps": "VT"
            }, 
            {
                "hPct": 11, 
                "share": 69, 
                "stusps": "NC"
            }, 
            {
                "hPct": 6, 
                "share": 74, 
                "stusps": "AL"
            }, 
            {
                "hPct": 20, 
                "share": 67, 
                "stusps": "ME"
            }, 
            {
                "hPct": 28, 
                "share": 54, 
                "stusps": "MA"
            }, 
            {
                "hPct": 14, 
                "share": 64, 
                "stusps": "OK"
            }, 
            {
                "hPct": 11, 
                "share": 70, 
                "stusps": "TN"
            }, 
            {
                "hPct": 17, 
                "share": 63, 
                "stusps": "CO"
            }, 
            {
                "hPct": 18, 
                "share": 69, 
                "stusps": "MN"
            }, 
            {
                "hPct": 13, 
                "share": 72, 
                "stusps": "TX"
            }, 
            {
                "hPct": 15, 
                "share": 77, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Independents or Something else", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Independents or Something else", 
        "median_hpct": 26, 
        "median_stcount": 12, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 3, 
        "rowLabel": "IND/OTHER", 
        "rowText": "Independent or something else", 
        "states": [
            {
                "hPct": 43, 
                "share": 27, 
                "stusps": "VA"
            }, 
            {
                "hPct": 18, 
                "share": 45, 
                "stusps": "VT"
            }, 
            {
                "hPct": 29, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 51, 
                "share": 23, 
                "stusps": "AL"
            }, 
            {
                "hPct": 22, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 32, 
                "share": 41, 
                "stusps": "MA"
            }, 
            {
                "hPct": 20, 
                "share": 29, 
                "stusps": "OK"
            }, 
            {
                "hPct": 29, 
                "share": 27, 
                "stusps": "TN"
            }, 
            {
                "hPct": 8, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 35, 
                "share": 27, 
                "stusps": "MN"
            }, 
            {
                "hPct": 23, 
                "share": 25, 
                "stusps": "TX"
            }, 
            {
                "hPct": 12, 
                "share": 21, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Independents or Something else", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Independents or Something else", 
        "median_hpct": 14.5, 
        "median_stcount": 12, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 3, 
        "rowLabel": "IND/OTHER", 
        "rowText": "Independent or something else", 
        "states": [
            {
                "hPct": 12, 
                "share": 27, 
                "stusps": "VA"
            }, 
            {
                "hPct": 9, 
                "share": 45, 
                "stusps": "VT"
            }, 
            {
                "hPct": 15, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 12, 
                "share": 23, 
                "stusps": "AL"
            }, 
            {
                "hPct": 16, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 14, 
                "share": 41, 
                "stusps": "MA"
            }, 
            {
                "hPct": 17, 
                "share": 29, 
                "stusps": "OK"
            }, 
            {
                "hPct": 17, 
                "share": 27, 
                "stusps": "TN"
            }, 
            {
                "hPct": 17, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 10, 
                "share": 27, 
                "stusps": "MN"
            }, 
            {
                "hPct": 13, 
                "share": 25, 
                "stusps": "TX"
            }, 
            {
                "hPct": 16, 
                "share": 21, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Independents or Something else", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Independents or Something else", 
        "median_hpct": 35.5, 
        "median_stcount": 12, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 3, 
        "rowLabel": "IND/OTHER", 
        "rowText": "Independent or something else", 
        "states": [
            {
                "hPct": 29, 
                "share": 27, 
                "stusps": "VA"
            }, 
            {
                "hPct": 57, 
                "share": 45, 
                "stusps": "VT"
            }, 
            {
                "hPct": 34, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 24, 
                "share": 23, 
                "stusps": "AL"
            }, 
            {
                "hPct": 40, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 33, 
                "share": 41, 
                "stusps": "MA"
            }, 
            {
                "hPct": 31, 
                "share": 29, 
                "stusps": "OK"
            }, 
            {
                "hPct": 33, 
                "share": 27, 
                "stusps": "TN"
            }, 
            {
                "hPct": 37, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 39, 
                "share": 27, 
                "stusps": "MN"
            }, 
            {
                "hPct": 39, 
                "share": 25, 
                "stusps": "TX"
            }, 
            {
                "hPct": 44, 
                "share": 21, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Independents or Something else", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Independents or Something else", 
        "median_hpct": 11, 
        "median_stcount": 12, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 3, 
        "rowLabel": "IND/OTHER", 
        "rowText": "Independent or something else", 
        "states": [
            {
                "hPct": 11, 
                "share": 27, 
                "stusps": "VA"
            }, 
            {
                "hPct": 11, 
                "share": 45, 
                "stusps": "VT"
            }, 
            {
                "hPct": 10, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 7, 
                "share": 23, 
                "stusps": "AL"
            }, 
            {
                "hPct": 12, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 13, 
                "share": 41, 
                "stusps": "MA"
            }, 
            {
                "hPct": 15, 
                "share": 29, 
                "stusps": "OK"
            }, 
            {
                "hPct": 11, 
                "share": 27, 
                "stusps": "TN"
            }, 
            {
                "hPct": 12, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 10, 
                "share": 27, 
                "stusps": "MN"
            }, 
            {
                "hPct": 10, 
                "share": 25, 
                "stusps": "TX"
            }, 
            {
                "hPct": 8, 
                "share": 21, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Republicans", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Republicans", 
        "median_hpct": 43, 
        "median_stcount": 1, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 2, 
        "rowLabel": "REPUBLICAN", 
        "rowText": "Republican", 
        "states": [
            {
                "hPct": 43, 
                "share": 7, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 5, 
                "stusps": "VT"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 0, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MN"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "TX"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Republicans", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Republicans", 
        "median_hpct": 17, 
        "median_stcount": 1, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 2, 
        "rowLabel": "REPUBLICAN", 
        "rowText": "Republican", 
        "states": [
            {
                "hPct": 17, 
                "share": 7, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 5, 
                "stusps": "VT"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 0, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MN"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "TX"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Republicans", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Republicans", 
        "median_hpct": 22, 
        "median_stcount": 1, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 2, 
        "rowLabel": "REPUBLICAN", 
        "rowText": "Republican", 
        "states": [
            {
                "hPct": 22, 
                "share": 7, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 5, 
                "stusps": "VT"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 0, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MN"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "TX"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Republicans", 
        "label": "No matter how you voted today, do you usually think of yourself as a:", 
        "leaderLabel": "Republicans", 
        "median_hpct": 3, 
        "median_stcount": 1, 
        "num_row": 3, 
        "question_id": 248, 
        "question_label": "PARTY", 
        "question_label_full": "Party self-identification", 
        "row": 2, 
        "rowLabel": "REPUBLICAN", 
        "rowText": "Republican", 
        "states": [
            {
                "hPct": 3, 
                "share": 7, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 5, 
                "stusps": "VT"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 0, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MN"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "TX"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Asian", 
        "label": "Are you:", 
        "leaderLabel": "Asian", 
        "median_hpct": 14, 
        "median_stcount": 2, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 4, 
        "rowLabel": "ASIAN", 
        "rowText": "Asian", 
        "states": [
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "VT"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 0, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "MN"
            }, 
            {
                "hPct": 16, 
                "share": 2, 
                "stusps": "TX"
            }, 
            {
                "hPct": 12, 
                "share": 7, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Asian", 
        "label": "Are you:", 
        "leaderLabel": "Asian", 
        "median_hpct": 15, 
        "median_stcount": 2, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 4, 
        "rowLabel": "ASIAN", 
        "rowText": "Asian", 
        "states": [
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "VT"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 0, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "MN"
            }, 
            {
                "hPct": 7, 
                "share": 2, 
                "stusps": "TX"
            }, 
            {
                "hPct": 23, 
                "share": 7, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Asian", 
        "label": "Are you:", 
        "leaderLabel": "Asian", 
        "median_hpct": 41, 
        "median_stcount": 2, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 4, 
        "rowLabel": "ASIAN", 
        "rowText": "Asian", 
        "states": [
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "VT"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 0, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "MN"
            }, 
            {
                "hPct": 55, 
                "share": 2, 
                "stusps": "TX"
            }, 
            {
                "hPct": 27, 
                "share": 7, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Asian", 
        "label": "Are you:", 
        "leaderLabel": "Asian", 
        "median_hpct": 9.5, 
        "median_stcount": 2, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 4, 
        "rowLabel": "ASIAN", 
        "rowText": "Asian", 
        "states": [
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "VT"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 0, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "MN"
            }, 
            {
                "hPct": 10, 
                "share": 2, 
                "stusps": "TX"
            }, 
            {
                "hPct": 9, 
                "share": 7, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Black", 
        "label": "Are you:", 
        "leaderLabel": "Black", 
        "median_hpct": 57.5, 
        "median_stcount": 8, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 2, 
        "rowLabel": "BLACK", 
        "rowText": "Black", 
        "states": [
            {
                "hPct": 69, 
                "share": 28, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "VT"
            }, 
            {
                "hPct": 62, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 72, 
                "share": 49, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 36, 
                "share": 7, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "OK"
            }, 
            {
                "hPct": 57, 
                "share": 26, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 6, 
                "stusps": "CO"
            }, 
            {
                "hPct": 47, 
                "share": 6, 
                "stusps": "MN"
            }, 
            {
                "hPct": 58, 
                "share": 20, 
                "stusps": "TX"
            }, 
            {
                "hPct": 33, 
                "share": 7, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Black", 
        "label": "Are you:", 
        "leaderLabel": "Black", 
        "median_hpct": 14.5, 
        "median_stcount": 8, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 2, 
        "rowLabel": "BLACK", 
        "rowText": "Black", 
        "states": [
            {
                "hPct": 8, 
                "share": 28, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "VT"
            }, 
            {
                "hPct": 12, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 13, 
                "share": 49, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 16, 
                "share": 7, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "OK"
            }, 
            {
                "hPct": 16, 
                "share": 26, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 6, 
                "stusps": "CO"
            }, 
            {
                "hPct": 5, 
                "share": 6, 
                "stusps": "MN"
            }, 
            {
                "hPct": 16, 
                "share": 20, 
                "stusps": "TX"
            }, 
            {
                "hPct": 23, 
                "share": 7, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Black", 
        "label": "Are you:", 
        "leaderLabel": "Black", 
        "median_hpct": 17, 
        "median_stcount": 8, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 2, 
        "rowLabel": "BLACK", 
        "rowText": "Black", 
        "states": [
            {
                "hPct": 17, 
                "share": 28, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "VT"
            }, 
            {
                "hPct": 17, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 10, 
                "share": 49, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 29, 
                "share": 7, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "OK"
            }, 
            {
                "hPct": 19, 
                "share": 26, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 6, 
                "stusps": "CO"
            }, 
            {
                "hPct": 43, 
                "share": 6, 
                "stusps": "MN"
            }, 
            {
                "hPct": 15, 
                "share": 20, 
                "stusps": "TX"
            }, 
            {
                "hPct": 16, 
                "share": 7, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Black", 
        "label": "Are you:", 
        "leaderLabel": "Black", 
        "median_hpct": 5, 
        "median_stcount": 8, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 2, 
        "rowLabel": "BLACK", 
        "rowText": "Black", 
        "states": [
            {
                "hPct": 5, 
                "share": 28, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "VT"
            }, 
            {
                "hPct": 5, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 4, 
                "share": 49, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 1, 
                "stusps": "ME"
            }, 
            {
                "hPct": 14, 
                "share": 7, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "OK"
            }, 
            {
                "hPct": 4, 
                "share": 26, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 6, 
                "stusps": "CO"
            }, 
            {
                "hPct": 5, 
                "share": 6, 
                "stusps": "MN"
            }, 
            {
                "hPct": 6, 
                "share": 20, 
                "stusps": "TX"
            }, 
            {
                "hPct": 11, 
                "share": 7, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Hispanic/Latino", 
        "label": "Are you:", 
        "leaderLabel": "Hispanic/Latino", 
        "median_hpct": 26, 
        "median_stcount": 5, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 3, 
        "rowLabel": "HISP", 
        "rowText": "Hispanic/Latino", 
        "states": [
            {
                "hPct": 46, 
                "share": 6, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "VT"
            }, 
            {
                "hPct": 43, 
                "share": 6, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "ME"
            }, 
            {
                "hPct": 21, 
                "share": 9, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 18, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MN"
            }, 
            {
                "hPct": 26, 
                "share": 32, 
                "stusps": "TX"
            }, 
            {
                "hPct": 19, 
                "share": 27, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Hispanic/Latino", 
        "label": "Are you:", 
        "leaderLabel": "Hispanic/Latino", 
        "median_hpct": 12, 
        "median_stcount": 5, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 3, 
        "rowLabel": "HISP", 
        "rowText": "Hispanic/Latino", 
        "states": [
            {
                "hPct": 12, 
                "share": 6, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "VT"
            }, 
            {
                "hPct": 8, 
                "share": 6, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "ME"
            }, 
            {
                "hPct": 7, 
                "share": 9, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 18, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MN"
            }, 
            {
                "hPct": 20, 
                "share": 32, 
                "stusps": "TX"
            }, 
            {
                "hPct": 12, 
                "share": 27, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Hispanic/Latino", 
        "label": "Are you:", 
        "leaderLabel": "Hispanic/Latino", 
        "median_hpct": 35, 
        "median_stcount": 5, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 3, 
        "rowLabel": "HISP", 
        "rowText": "Hispanic/Latino", 
        "states": [
            {
                "hPct": 33, 
                "share": 6, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "VT"
            }, 
            {
                "hPct": 35, 
                "share": 6, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "ME"
            }, 
            {
                "hPct": 34, 
                "share": 9, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 18, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MN"
            }, 
            {
                "hPct": 39, 
                "share": 32, 
                "stusps": "TX"
            }, 
            {
                "hPct": 49, 
                "share": 27, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Hispanic/Latino", 
        "label": "Are you:", 
        "leaderLabel": "Hispanic/Latino", 
        "median_hpct": 8, 
        "median_stcount": 5, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 3, 
        "rowLabel": "HISP", 
        "rowText": "Hispanic/Latino", 
        "states": [
            {
                "hPct": 6, 
                "share": 6, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "VT"
            }, 
            {
                "hPct": 9, 
                "share": 6, 
                "stusps": "NC"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "ME"
            }, 
            {
                "hPct": 17, 
                "share": 9, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 0, 
                "share": 2, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 18, 
                "stusps": "CO"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "MN"
            }, 
            {
                "hPct": 8, 
                "share": 32, 
                "stusps": "TX"
            }, 
            {
                "hPct": 7, 
                "share": 27, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "White", 
        "label": "Are you:", 
        "leaderLabel": "White", 
        "median_hpct": 34, 
        "median_stcount": 12, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 1, 
        "rowLabel": "WHITE", 
        "rowText": "White", 
        "states": [
            {
                "hPct": 48, 
                "share": 61, 
                "stusps": "VA"
            }, 
            {
                "hPct": 22, 
                "share": 94, 
                "stusps": "VT"
            }, 
            {
                "hPct": 34, 
                "share": 62, 
                "stusps": "NC"
            }, 
            {
                "hPct": 57, 
                "share": 46, 
                "stusps": "AL"
            }, 
            {
                "hPct": 34, 
                "share": 95, 
                "stusps": "ME"
            }, 
            {
                "hPct": 36, 
                "share": 80, 
                "stusps": "MA"
            }, 
            {
                "hPct": 34, 
                "share": 79, 
                "stusps": "OK"
            }, 
            {
                "hPct": 37, 
                "share": 70, 
                "stusps": "TN"
            }, 
            {
                "hPct": 14, 
                "share": 72, 
                "stusps": "CO"
            }, 
            {
                "hPct": 42, 
                "share": 85, 
                "stusps": "MN"
            }, 
            {
                "hPct": 28, 
                "share": 45, 
                "stusps": "TX"
            }, 
            {
                "hPct": 21, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "White", 
        "label": "Are you:", 
        "leaderLabel": "White", 
        "median_hpct": 12.5, 
        "median_stcount": 12, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 1, 
        "rowLabel": "WHITE", 
        "rowText": "White", 
        "states": [
            {
                "hPct": 11, 
                "share": 61, 
                "stusps": "VA"
            }, 
            {
                "hPct": 9, 
                "share": 94, 
                "stusps": "VT"
            }, 
            {
                "hPct": 14, 
                "share": 62, 
                "stusps": "NC"
            }, 
            {
                "hPct": 10, 
                "share": 46, 
                "stusps": "AL"
            }, 
            {
                "hPct": 12, 
                "share": 95, 
                "stusps": "ME"
            }, 
            {
                "hPct": 11, 
                "share": 80, 
                "stusps": "MA"
            }, 
            {
                "hPct": 16, 
                "share": 79, 
                "stusps": "OK"
            }, 
            {
                "hPct": 16, 
                "share": 70, 
                "stusps": "TN"
            }, 
            {
                "hPct": 14, 
                "share": 72, 
                "stusps": "CO"
            }, 
            {
                "hPct": 8, 
                "share": 85, 
                "stusps": "MN"
            }, 
            {
                "hPct": 13, 
                "share": 45, 
                "stusps": "TX"
            }, 
            {
                "hPct": 15, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "White", 
        "label": "Are you:", 
        "leaderLabel": "White", 
        "median_hpct": 26.5, 
        "median_stcount": 12, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 1, 
        "rowLabel": "WHITE", 
        "rowText": "White", 
        "states": [
            {
                "hPct": 23, 
                "share": 61, 
                "stusps": "VA"
            }, 
            {
                "hPct": 51, 
                "share": 94, 
                "stusps": "VT"
            }, 
            {
                "hPct": 25, 
                "share": 62, 
                "stusps": "NC"
            }, 
            {
                "hPct": 22, 
                "share": 46, 
                "stusps": "AL"
            }, 
            {
                "hPct": 32, 
                "share": 95, 
                "stusps": "ME"
            }, 
            {
                "hPct": 28, 
                "share": 80, 
                "stusps": "MA"
            }, 
            {
                "hPct": 23, 
                "share": 79, 
                "stusps": "OK"
            }, 
            {
                "hPct": 26, 
                "share": 70, 
                "stusps": "TN"
            }, 
            {
                "hPct": 26, 
                "share": 72, 
                "stusps": "CO"
            }, 
            {
                "hPct": 27, 
                "share": 85, 
                "stusps": "MN"
            }, 
            {
                "hPct": 30, 
                "share": 45, 
                "stusps": "TX"
            }, 
            {
                "hPct": 29, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "White", 
        "label": "Are you:", 
        "leaderLabel": "White", 
        "median_hpct": 15.5, 
        "median_stcount": 12, 
        "num_row": 5, 
        "question_id": 260, 
        "question_label": "RACE", 
        "question_label_full": "Race", 
        "row": 1, 
        "rowLabel": "WHITE", 
        "rowText": "White", 
        "states": [
            {
                "hPct": 14, 
                "share": 61, 
                "stusps": "VA"
            }, 
            {
                "hPct": 13, 
                "share": 94, 
                "stusps": "VT"
            }, 
            {
                "hPct": 14, 
                "share": 62, 
                "stusps": "NC"
            }, 
            {
                "hPct": 7, 
                "share": 46, 
                "stusps": "AL"
            }, 
            {
                "hPct": 17, 
                "share": 95, 
                "stusps": "ME"
            }, 
            {
                "hPct": 21, 
                "share": 80, 
                "stusps": "MA"
            }, 
            {
                "hPct": 15, 
                "share": 79, 
                "stusps": "OK"
            }, 
            {
                "hPct": 12, 
                "share": 70, 
                "stusps": "TN"
            }, 
            {
                "hPct": 18, 
                "share": 72, 
                "stusps": "CO"
            }, 
            {
                "hPct": 17, 
                "share": 85, 
                "stusps": "MN"
            }, 
            {
                "hPct": 16, 
                "share": 45, 
                "stusps": "TX"
            }, 
            {
                "hPct": 17, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Men", 
        "label": "Are you:", 
        "leaderLabel": "Men", 
        "median_hpct": 36, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 279, 
        "question_label": "SEX", 
        "question_label_full": "Sex", 
        "row": 1, 
        "rowLabel": "MALE", 
        "rowText": "Male", 
        "states": [
            {
                "hPct": 49, 
                "share": 43, 
                "stusps": "VA"
            }, 
            {
                "hPct": 24, 
                "share": 48, 
                "stusps": "VT"
            }, 
            {
                "hPct": 42, 
                "share": 43, 
                "stusps": "NC"
            }, 
            {
                "hPct": 61, 
                "share": 39, 
                "stusps": "AL"
            }, 
            {
                "hPct": 29, 
                "share": 41, 
                "stusps": "ME"
            }, 
            {
                "hPct": 34, 
                "share": 44, 
                "stusps": "MA"
            }, 
            {
                "hPct": 38, 
                "share": 47, 
                "stusps": "OK"
            }, 
            {
                "hPct": 38, 
                "share": 43, 
                "stusps": "TN"
            }, 
            {
                "hPct": 13, 
                "share": 44, 
                "stusps": "CO"
            }, 
            {
                "hPct": 39, 
                "share": 42, 
                "stusps": "MN"
            }, 
            {
                "hPct": 33, 
                "share": 44, 
                "stusps": "TX"
            }, 
            {
                "hPct": 16, 
                "share": 45, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Men", 
        "label": "Are you:", 
        "leaderLabel": "Men", 
        "median_hpct": 11.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 279, 
        "question_label": "SEX", 
        "question_label_full": "Sex", 
        "row": 1, 
        "rowLabel": "MALE", 
        "rowText": "Male", 
        "states": [
            {
                "hPct": 10, 
                "share": 43, 
                "stusps": "VA"
            }, 
            {
                "hPct": 11, 
                "share": 48, 
                "stusps": "VT"
            }, 
            {
                "hPct": 12, 
                "share": 43, 
                "stusps": "NC"
            }, 
            {
                "hPct": 11, 
                "share": 39, 
                "stusps": "AL"
            }, 
            {
                "hPct": 13, 
                "share": 41, 
                "stusps": "ME"
            }, 
            {
                "hPct": 10, 
                "share": 44, 
                "stusps": "MA"
            }, 
            {
                "hPct": 10, 
                "share": 47, 
                "stusps": "OK"
            }, 
            {
                "hPct": 19, 
                "share": 43, 
                "stusps": "TN"
            }, 
            {
                "hPct": 14, 
                "share": 44, 
                "stusps": "CO"
            }, 
            {
                "hPct": 9, 
                "share": 42, 
                "stusps": "MN"
            }, 
            {
                "hPct": 16, 
                "share": 44, 
                "stusps": "TX"
            }, 
            {
                "hPct": 14, 
                "share": 45, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Men", 
        "label": "Are you:", 
        "leaderLabel": "Men", 
        "median_hpct": 32.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 279, 
        "question_label": "SEX", 
        "question_label_full": "Sex", 
        "row": 1, 
        "rowLabel": "MALE", 
        "rowText": "Male", 
        "states": [
            {
                "hPct": 29, 
                "share": 43, 
                "stusps": "VA"
            }, 
            {
                "hPct": 53, 
                "share": 48, 
                "stusps": "VT"
            }, 
            {
                "hPct": 27, 
                "share": 43, 
                "stusps": "NC"
            }, 
            {
                "hPct": 20, 
                "share": 39, 
                "stusps": "AL"
            }, 
            {
                "hPct": 38, 
                "share": 41, 
                "stusps": "ME"
            }, 
            {
                "hPct": 31, 
                "share": 44, 
                "stusps": "MA"
            }, 
            {
                "hPct": 28, 
                "share": 47, 
                "stusps": "OK"
            }, 
            {
                "hPct": 27, 
                "share": 43, 
                "stusps": "TN"
            }, 
            {
                "hPct": 36, 
                "share": 44, 
                "stusps": "CO"
            }, 
            {
                "hPct": 37, 
                "share": 42, 
                "stusps": "MN"
            }, 
            {
                "hPct": 34, 
                "share": 44, 
                "stusps": "TX"
            }, 
            {
                "hPct": 37, 
                "share": 45, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Men", 
        "label": "Are you:", 
        "leaderLabel": "Men", 
        "median_hpct": 9.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 279, 
        "question_label": "SEX", 
        "question_label_full": "Sex", 
        "row": 1, 
        "rowLabel": "MALE", 
        "rowText": "Male", 
        "states": [
            {
                "hPct": 9, 
                "share": 43, 
                "stusps": "VA"
            }, 
            {
                "hPct": 8, 
                "share": 48, 
                "stusps": "VT"
            }, 
            {
                "hPct": 8, 
                "share": 43, 
                "stusps": "NC"
            }, 
            {
                "hPct": 5, 
                "share": 39, 
                "stusps": "AL"
            }, 
            {
                "hPct": 14, 
                "share": 41, 
                "stusps": "ME"
            }, 
            {
                "hPct": 17, 
                "share": 44, 
                "stusps": "MA"
            }, 
            {
                "hPct": 11, 
                "share": 47, 
                "stusps": "OK"
            }, 
            {
                "hPct": 9, 
                "share": 43, 
                "stusps": "TN"
            }, 
            {
                "hPct": 10, 
                "share": 44, 
                "stusps": "CO"
            }, 
            {
                "hPct": 11, 
                "share": 42, 
                "stusps": "MN"
            }, 
            {
                "hPct": 8, 
                "share": 44, 
                "stusps": "TX"
            }, 
            {
                "hPct": 11, 
                "share": 45, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Women", 
        "label": "Are you:", 
        "leaderLabel": "Women", 
        "median_hpct": 36, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 279, 
        "question_label": "SEX", 
        "question_label_full": "Sex", 
        "row": 2, 
        "rowLabel": "FEMALE", 
        "rowText": "Female", 
        "states": [
            {
                "hPct": 57, 
                "share": 57, 
                "stusps": "VA"
            }, 
            {
                "hPct": 20, 
                "share": 52, 
                "stusps": "VT"
            }, 
            {
                "hPct": 42, 
                "share": 57, 
                "stusps": "NC"
            }, 
            {
                "hPct": 65, 
                "share": 61, 
                "stusps": "AL"
            }, 
            {
                "hPct": 37, 
                "share": 59, 
                "stusps": "ME"
            }, 
            {
                "hPct": 34, 
                "share": 56, 
                "stusps": "MA"
            }, 
            {
                "hPct": 35, 
                "share": 53, 
                "stusps": "OK"
            }, 
            {
                "hPct": 44, 
                "share": 57, 
                "stusps": "TN"
            }, 
            {
                "hPct": 16, 
                "share": 56, 
                "stusps": "CO"
            }, 
            {
                "hPct": 41, 
                "share": 58, 
                "stusps": "MN"
            }, 
            {
                "hPct": 33, 
                "share": 56, 
                "stusps": "TX"
            }, 
            {
                "hPct": 24, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Women", 
        "label": "Are you:", 
        "leaderLabel": "Women", 
        "median_hpct": 12.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 279, 
        "question_label": "SEX", 
        "question_label_full": "Sex", 
        "row": 2, 
        "rowLabel": "FEMALE", 
        "rowText": "Female", 
        "states": [
            {
                "hPct": 9, 
                "share": 57, 
                "stusps": "VA"
            }, 
            {
                "hPct": 8, 
                "share": 52, 
                "stusps": "VT"
            }, 
            {
                "hPct": 14, 
                "share": 57, 
                "stusps": "NC"
            }, 
            {
                "hPct": 12, 
                "share": 61, 
                "stusps": "AL"
            }, 
            {
                "hPct": 11, 
                "share": 59, 
                "stusps": "ME"
            }, 
            {
                "hPct": 11, 
                "share": 56, 
                "stusps": "MA"
            }, 
            {
                "hPct": 19, 
                "share": 53, 
                "stusps": "OK"
            }, 
            {
                "hPct": 13, 
                "share": 57, 
                "stusps": "TN"
            }, 
            {
                "hPct": 15, 
                "share": 56, 
                "stusps": "CO"
            }, 
            {
                "hPct": 8, 
                "share": 58, 
                "stusps": "MN"
            }, 
            {
                "hPct": 15, 
                "share": 56, 
                "stusps": "TX"
            }, 
            {
                "hPct": 17, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Women", 
        "label": "Are you:", 
        "leaderLabel": "Women", 
        "median_hpct": 25.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 279, 
        "question_label": "SEX", 
        "question_label_full": "Sex", 
        "row": 2, 
        "rowLabel": "FEMALE", 
        "rowText": "Female", 
        "states": [
            {
                "hPct": 19, 
                "share": 57, 
                "stusps": "VA"
            }, 
            {
                "hPct": 51, 
                "share": 52, 
                "stusps": "VT"
            }, 
            {
                "hPct": 21, 
                "share": 57, 
                "stusps": "NC"
            }, 
            {
                "hPct": 14, 
                "share": 61, 
                "stusps": "AL"
            }, 
            {
                "hPct": 29, 
                "share": 59, 
                "stusps": "ME"
            }, 
            {
                "hPct": 26, 
                "share": 56, 
                "stusps": "MA"
            }, 
            {
                "hPct": 19, 
                "share": 53, 
                "stusps": "OK"
            }, 
            {
                "hPct": 23, 
                "share": 57, 
                "stusps": "TN"
            }, 
            {
                "hPct": 28, 
                "share": 56, 
                "stusps": "CO"
            }, 
            {
                "hPct": 25, 
                "share": 58, 
                "stusps": "MN"
            }, 
            {
                "hPct": 27, 
                "share": 56, 
                "stusps": "TX"
            }, 
            {
                "hPct": 31, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Women", 
        "label": "Are you:", 
        "leaderLabel": "Women", 
        "median_hpct": 15.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 279, 
        "question_label": "SEX", 
        "question_label_full": "Sex", 
        "row": 2, 
        "rowLabel": "FEMALE", 
        "rowText": "Female", 
        "states": [
            {
                "hPct": 12, 
                "share": 57, 
                "stusps": "VA"
            }, 
            {
                "hPct": 16, 
                "share": 52, 
                "stusps": "VT"
            }, 
            {
                "hPct": 13, 
                "share": 57, 
                "stusps": "NC"
            }, 
            {
                "hPct": 6, 
                "share": 61, 
                "stusps": "AL"
            }, 
            {
                "hPct": 18, 
                "share": 59, 
                "stusps": "ME"
            }, 
            {
                "hPct": 24, 
                "share": 56, 
                "stusps": "MA"
            }, 
            {
                "hPct": 16, 
                "share": 53, 
                "stusps": "OK"
            }, 
            {
                "hPct": 12, 
                "share": 57, 
                "stusps": "TN"
            }, 
            {
                "hPct": 19, 
                "share": 56, 
                "stusps": "CO"
            }, 
            {
                "hPct": 19, 
                "share": 58, 
                "stusps": "MN"
            }, 
            {
                "hPct": 14, 
                "share": 56, 
                "stusps": "TX"
            }, 
            {
                "hPct": 15, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Moderate or conservative", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Moderate or conservative", 
        "median_hpct": 46.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 3, 
        "rowLabel": "MODCON", 
        "rowText": "Moderate or conservative", 
        "states": [
            {
                "hPct": 62, 
                "share": 47, 
                "stusps": "VA"
            }, 
            {
                "hPct": 28, 
                "share": 35, 
                "stusps": "VT"
            }, 
            {
                "hPct": 47, 
                "share": 41, 
                "stusps": "NC"
            }, 
            {
                "hPct": 71, 
                "share": 46, 
                "stusps": "AL"
            }, 
            {
                "hPct": 48, 
                "share": 30, 
                "stusps": "ME"
            }, 
            {
                "hPct": 46, 
                "share": 36, 
                "stusps": "MA"
            }, 
            {
                "hPct": 39, 
                "share": 52, 
                "stusps": "OK"
            }, 
            {
                "hPct": 49, 
                "share": 42, 
                "stusps": "TN"
            }, 
            {
                "hPct": 23, 
                "share": 34, 
                "stusps": "CO"
            }, 
            {
                "hPct": 58, 
                "share": 34, 
                "stusps": "MN"
            }, 
            {
                "hPct": 39, 
                "share": 43, 
                "stusps": "TX"
            }, 
            {
                "hPct": 29, 
                "share": 36, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Moderate or conservative", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Moderate or conservative", 
        "median_hpct": 19, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 3, 
        "rowLabel": "MODCON", 
        "rowText": "Moderate or conservative", 
        "states": [
            {
                "hPct": 13, 
                "share": 47, 
                "stusps": "VA"
            }, 
            {
                "hPct": 19, 
                "share": 35, 
                "stusps": "VT"
            }, 
            {
                "hPct": 18, 
                "share": 41, 
                "stusps": "NC"
            }, 
            {
                "hPct": 13, 
                "share": 46, 
                "stusps": "AL"
            }, 
            {
                "hPct": 22, 
                "share": 30, 
                "stusps": "ME"
            }, 
            {
                "hPct": 18, 
                "share": 36, 
                "stusps": "MA"
            }, 
            {
                "hPct": 24, 
                "share": 52, 
                "stusps": "OK"
            }, 
            {
                "hPct": 19, 
                "share": 42, 
                "stusps": "TN"
            }, 
            {
                "hPct": 21, 
                "share": 34, 
                "stusps": "CO"
            }, 
            {
                "hPct": 13, 
                "share": 34, 
                "stusps": "MN"
            }, 
            {
                "hPct": 19, 
                "share": 43, 
                "stusps": "TX"
            }, 
            {
                "hPct": 21, 
                "share": 36, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Moderate or conservative", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Moderate or conservative", 
        "median_hpct": 16.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 3, 
        "rowLabel": "MODCON", 
        "rowText": "Moderate or conservative", 
        "states": [
            {
                "hPct": 17, 
                "share": 47, 
                "stusps": "VA"
            }, 
            {
                "hPct": 39, 
                "share": 35, 
                "stusps": "VT"
            }, 
            {
                "hPct": 16, 
                "share": 41, 
                "stusps": "NC"
            }, 
            {
                "hPct": 8, 
                "share": 46, 
                "stusps": "AL"
            }, 
            {
                "hPct": 13, 
                "share": 30, 
                "stusps": "ME"
            }, 
            {
                "hPct": 20, 
                "share": 36, 
                "stusps": "MA"
            }, 
            {
                "hPct": 11, 
                "share": 52, 
                "stusps": "OK"
            }, 
            {
                "hPct": 16, 
                "share": 42, 
                "stusps": "TN"
            }, 
            {
                "hPct": 20, 
                "share": 34, 
                "stusps": "CO"
            }, 
            {
                "hPct": 15, 
                "share": 34, 
                "stusps": "MN"
            }, 
            {
                "hPct": 23, 
                "share": 43, 
                "stusps": "TX"
            }, 
            {
                "hPct": 23, 
                "share": 36, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Moderate or conservative", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Moderate or conservative", 
        "median_hpct": 6, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 3, 
        "rowLabel": "MODCON", 
        "rowText": "Moderate or conservative", 
        "states": [
            {
                "hPct": 5, 
                "share": 47, 
                "stusps": "VA"
            }, 
            {
                "hPct": 8, 
                "share": 35, 
                "stusps": "VT"
            }, 
            {
                "hPct": 6, 
                "share": 41, 
                "stusps": "NC"
            }, 
            {
                "hPct": 3, 
                "share": 46, 
                "stusps": "AL"
            }, 
            {
                "hPct": 6, 
                "share": 30, 
                "stusps": "ME"
            }, 
            {
                "hPct": 8, 
                "share": 36, 
                "stusps": "MA"
            }, 
            {
                "hPct": 8, 
                "share": 52, 
                "stusps": "OK"
            }, 
            {
                "hPct": 8, 
                "share": 42, 
                "stusps": "TN"
            }, 
            {
                "hPct": 5, 
                "share": 34, 
                "stusps": "CO"
            }, 
            {
                "hPct": 6, 
                "share": 34, 
                "stusps": "MN"
            }, 
            {
                "hPct": 10, 
                "share": 43, 
                "stusps": "TX"
            }, 
            {
                "hPct": 5, 
                "share": 36, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Somewhat liberal", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Somewhat liberal", 
        "median_hpct": 38.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 2, 
        "rowLabel": "SOMEWHTLIB", 
        "rowText": "Somewhat liberal", 
        "states": [
            {
                "hPct": 50, 
                "share": 34, 
                "stusps": "VA"
            }, 
            {
                "hPct": 23, 
                "share": 37, 
                "stusps": "VT"
            }, 
            {
                "hPct": 41, 
                "share": 36, 
                "stusps": "NC"
            }, 
            {
                "hPct": 58, 
                "share": 33, 
                "stusps": "AL"
            }, 
            {
                "hPct": 38, 
                "share": 39, 
                "stusps": "ME"
            }, 
            {
                "hPct": 34, 
                "share": 37, 
                "stusps": "MA"
            }, 
            {
                "hPct": 39, 
                "share": 30, 
                "stusps": "OK"
            }, 
            {
                "hPct": 39, 
                "share": 33, 
                "stusps": "TN"
            }, 
            {
                "hPct": 14, 
                "share": 40, 
                "stusps": "CO"
            }, 
            {
                "hPct": 39, 
                "share": 42, 
                "stusps": "MN"
            }, 
            {
                "hPct": 36, 
                "share": 33, 
                "stusps": "TX"
            }, 
            {
                "hPct": 18, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Somewhat liberal", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Somewhat liberal", 
        "median_hpct": 10.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 2, 
        "rowLabel": "SOMEWHTLIB", 
        "rowText": "Somewhat liberal", 
        "states": [
            {
                "hPct": 8, 
                "share": 34, 
                "stusps": "VA"
            }, 
            {
                "hPct": 6, 
                "share": 37, 
                "stusps": "VT"
            }, 
            {
                "hPct": 13, 
                "share": 36, 
                "stusps": "NC"
            }, 
            {
                "hPct": 12, 
                "share": 33, 
                "stusps": "AL"
            }, 
            {
                "hPct": 8, 
                "share": 39, 
                "stusps": "ME"
            }, 
            {
                "hPct": 9, 
                "share": 37, 
                "stusps": "MA"
            }, 
            {
                "hPct": 8, 
                "share": 30, 
                "stusps": "OK"
            }, 
            {
                "hPct": 16, 
                "share": 33, 
                "stusps": "TN"
            }, 
            {
                "hPct": 14, 
                "share": 40, 
                "stusps": "CO"
            }, 
            {
                "hPct": 7, 
                "share": 42, 
                "stusps": "MN"
            }, 
            {
                "hPct": 16, 
                "share": 33, 
                "stusps": "TX"
            }, 
            {
                "hPct": 15, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Somewhat liberal", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Somewhat liberal", 
        "median_hpct": 28, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 2, 
        "rowLabel": "SOMEWHTLIB", 
        "rowText": "Somewhat liberal", 
        "states": [
            {
                "hPct": 22, 
                "share": 34, 
                "stusps": "VA"
            }, 
            {
                "hPct": 55, 
                "share": 37, 
                "stusps": "VT"
            }, 
            {
                "hPct": 23, 
                "share": 36, 
                "stusps": "NC"
            }, 
            {
                "hPct": 22, 
                "share": 33, 
                "stusps": "AL"
            }, 
            {
                "hPct": 33, 
                "share": 39, 
                "stusps": "ME"
            }, 
            {
                "hPct": 27, 
                "share": 37, 
                "stusps": "MA"
            }, 
            {
                "hPct": 30, 
                "share": 30, 
                "stusps": "OK"
            }, 
            {
                "hPct": 27, 
                "share": 33, 
                "stusps": "TN"
            }, 
            {
                "hPct": 28, 
                "share": 40, 
                "stusps": "CO"
            }, 
            {
                "hPct": 30, 
                "share": 42, 
                "stusps": "MN"
            }, 
            {
                "hPct": 28, 
                "share": 33, 
                "stusps": "TX"
            }, 
            {
                "hPct": 34, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Somewhat liberal", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Somewhat liberal", 
        "median_hpct": 16, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 2, 
        "rowLabel": "SOMEWHTLIB", 
        "rowText": "Somewhat liberal", 
        "states": [
            {
                "hPct": 18, 
                "share": 34, 
                "stusps": "VA"
            }, 
            {
                "hPct": 11, 
                "share": 37, 
                "stusps": "VT"
            }, 
            {
                "hPct": 12, 
                "share": 36, 
                "stusps": "NC"
            }, 
            {
                "hPct": 8, 
                "share": 33, 
                "stusps": "AL"
            }, 
            {
                "hPct": 20, 
                "share": 39, 
                "stusps": "ME"
            }, 
            {
                "hPct": 24, 
                "share": 37, 
                "stusps": "MA"
            }, 
            {
                "hPct": 18, 
                "share": 30, 
                "stusps": "OK"
            }, 
            {
                "hPct": 10, 
                "share": 33, 
                "stusps": "TN"
            }, 
            {
                "hPct": 17, 
                "share": 40, 
                "stusps": "CO"
            }, 
            {
                "hPct": 18, 
                "share": 42, 
                "stusps": "MN"
            }, 
            {
                "hPct": 11, 
                "share": 33, 
                "stusps": "TX"
            }, 
            {
                "hPct": 15, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Very liberal", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Very liberal", 
        "median_hpct": 19, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 1, 
        "rowLabel": "VERYLIB", 
        "rowText": "Very liberal", 
        "states": [
            {
                "hPct": 37, 
                "share": 19, 
                "stusps": "VA"
            }, 
            {
                "hPct": 7, 
                "share": 29, 
                "stusps": "VT"
            }, 
            {
                "hPct": 31, 
                "share": 23, 
                "stusps": "NC"
            }, 
            {
                "hPct": 51, 
                "share": 22, 
                "stusps": "AL"
            }, 
            {
                "hPct": 16, 
                "share": 31, 
                "stusps": "ME"
            }, 
            {
                "hPct": 19, 
                "share": 27, 
                "stusps": "MA"
            }, 
            {
                "hPct": 23, 
                "share": 18, 
                "stusps": "OK"
            }, 
            {
                "hPct": 28, 
                "share": 24, 
                "stusps": "TN"
            }, 
            {
                "hPct": 7, 
                "share": 26, 
                "stusps": "CO"
            }, 
            {
                "hPct": 16, 
                "share": 24, 
                "stusps": "MN"
            }, 
            {
                "hPct": 19, 
                "share": 24, 
                "stusps": "TX"
            }, 
            {
                "hPct": 13, 
                "share": 29, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Very liberal", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Very liberal", 
        "median_hpct": 5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 1, 
        "rowLabel": "VERYLIB", 
        "rowText": "Very liberal", 
        "states": [
            {
                "hPct": 5, 
                "share": 19, 
                "stusps": "VA"
            }, 
            {
                "hPct": 1, 
                "share": 29, 
                "stusps": "VT"
            }, 
            {
                "hPct": 7, 
                "share": 23, 
                "stusps": "NC"
            }, 
            {
                "hPct": 9, 
                "share": 22, 
                "stusps": "AL"
            }, 
            {
                "hPct": 3, 
                "share": 31, 
                "stusps": "ME"
            }, 
            {
                "hPct": 4, 
                "share": 27, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 18, 
                "stusps": "OK"
            }, 
            {
                "hPct": 9, 
                "share": 24, 
                "stusps": "TN"
            }, 
            {
                "hPct": 5, 
                "share": 26, 
                "stusps": "CO"
            }, 
            {
                "hPct": 1, 
                "share": 24, 
                "stusps": "MN"
            }, 
            {
                "hPct": 8, 
                "share": 24, 
                "stusps": "TX"
            }, 
            {
                "hPct": 6, 
                "share": 29, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Very liberal", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Very liberal", 
        "median_hpct": 48.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 1, 
        "rowLabel": "VERYLIB", 
        "rowText": "Very liberal", 
        "states": [
            {
                "hPct": 41, 
                "share": 19, 
                "stusps": "VA"
            }, 
            {
                "hPct": 68, 
                "share": 29, 
                "stusps": "VT"
            }, 
            {
                "hPct": 39, 
                "share": 23, 
                "stusps": "NC"
            }, 
            {
                "hPct": 29, 
                "share": 22, 
                "stusps": "AL"
            }, 
            {
                "hPct": 55, 
                "share": 31, 
                "stusps": "ME"
            }, 
            {
                "hPct": 40, 
                "share": 27, 
                "stusps": "MA"
            }, 
            {
                "hPct": 51, 
                "share": 18, 
                "stusps": "OK"
            }, 
            {
                "hPct": 41, 
                "share": 24, 
                "stusps": "TN"
            }, 
            {
                "hPct": 54, 
                "share": 26, 
                "stusps": "CO"
            }, 
            {
                "hPct": 51, 
                "share": 24, 
                "stusps": "MN"
            }, 
            {
                "hPct": 48, 
                "share": 24, 
                "stusps": "TX"
            }, 
            {
                "hPct": 49, 
                "share": 29, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Very liberal", 
        "label": "On most political matters, do you consider yourself:", 
        "leaderLabel": "Very liberal", 
        "median_hpct": 20, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 569, 
        "question_label": "PHIL4", 
        "question_label_full": "Ideology", 
        "row": 1, 
        "rowLabel": "VERYLIB", 
        "rowText": "Very liberal", 
        "states": [
            {
                "hPct": 16, 
                "share": 19, 
                "stusps": "VA"
            }, 
            {
                "hPct": 20, 
                "share": 29, 
                "stusps": "VT"
            }, 
            {
                "hPct": 18, 
                "share": 23, 
                "stusps": "NC"
            }, 
            {
                "hPct": 9, 
                "share": 22, 
                "stusps": "AL"
            }, 
            {
                "hPct": 25, 
                "share": 31, 
                "stusps": "ME"
            }, 
            {
                "hPct": 33, 
                "share": 27, 
                "stusps": "MA"
            }, 
            {
                "hPct": 20, 
                "share": 18, 
                "stusps": "OK"
            }, 
            {
                "hPct": 18, 
                "share": 24, 
                "stusps": "TN"
            }, 
            {
                "hPct": 24, 
                "share": 26, 
                "stusps": "CO"
            }, 
            {
                "hPct": 26, 
                "share": 24, 
                "stusps": "MN"
            }, 
            {
                "hPct": 17, 
                "share": 24, 
                "stusps": "TX"
            }, 
            {
                "hPct": 22, 
                "share": 29, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "17-29", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 17 to 29", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 1, 
        "rowLabel": "17-29", 
        "rowText": "17-29", 
        "states": [
            {
                "hPct": 26, 
                "share": 13, 
                "stusps": "VA"
            }, 
            {
                "hPct": 6, 
                "share": 11, 
                "stusps": "VT"
            }, 
            {
                "hPct": 19, 
                "share": 14, 
                "stusps": "NC"
            }, 
            {
                "hPct": 9, 
                "share": 15, 
                "stusps": "ME"
            }, 
            {
                "hPct": 17, 
                "share": 19, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "17-29", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 17 to 29", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 1, 
        "rowLabel": "17-29", 
        "rowText": "17-29", 
        "states": [
            {
                "hPct": 5, 
                "share": 13, 
                "stusps": "VA"
            }, 
            {
                "hPct": 4, 
                "share": 11, 
                "stusps": "VT"
            }, 
            {
                "hPct": 6, 
                "share": 14, 
                "stusps": "NC"
            }, 
            {
                "hPct": 1, 
                "share": 15, 
                "stusps": "ME"
            }, 
            {
                "hPct": 3, 
                "share": 19, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "17-29", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 17 to 29", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 1, 
        "rowLabel": "17-29", 
        "rowText": "17-29", 
        "states": [
            {
                "hPct": 55, 
                "share": 13, 
                "stusps": "VA"
            }, 
            {
                "hPct": 68, 
                "share": 11, 
                "stusps": "VT"
            }, 
            {
                "hPct": 57, 
                "share": 14, 
                "stusps": "NC"
            }, 
            {
                "hPct": 67, 
                "share": 15, 
                "stusps": "ME"
            }, 
            {
                "hPct": 65, 
                "share": 19, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "17-29", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 17 to 29", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 1, 
        "rowLabel": "17-29", 
        "rowText": "17-29", 
        "states": [
            {
                "hPct": 10, 
                "share": 13, 
                "stusps": "VA"
            }, 
            {
                "hPct": 10, 
                "share": 11, 
                "stusps": "VT"
            }, 
            {
                "hPct": 11, 
                "share": 14, 
                "stusps": "NC"
            }, 
            {
                "hPct": 16, 
                "share": 15, 
                "stusps": "ME"
            }, 
            {
                "hPct": 11, 
                "share": 19, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "30-44", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 30 to 44", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 2, 
        "rowLabel": "30-44", 
        "rowText": "30-44", 
        "states": [
            {
                "hPct": 39, 
                "share": 23, 
                "stusps": "VA"
            }, 
            {
                "hPct": 7, 
                "share": 20, 
                "stusps": "VT"
            }, 
            {
                "hPct": 35, 
                "share": 22, 
                "stusps": "NC"
            }, 
            {
                "hPct": 23, 
                "share": 19, 
                "stusps": "ME"
            }, 
            {
                "hPct": 25, 
                "share": 24, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "30-44", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 30 to 44", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 2, 
        "rowLabel": "30-44", 
        "rowText": "30-44", 
        "states": [
            {
                "hPct": 9, 
                "share": 23, 
                "stusps": "VA"
            }, 
            {
                "hPct": 3, 
                "share": 20, 
                "stusps": "VT"
            }, 
            {
                "hPct": 8, 
                "share": 22, 
                "stusps": "NC"
            }, 
            {
                "hPct": 4, 
                "share": 19, 
                "stusps": "ME"
            }, 
            {
                "hPct": 4, 
                "share": 24, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "30-44", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 30 to 44", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 2, 
        "rowLabel": "30-44", 
        "rowText": "30-44", 
        "states": [
            {
                "hPct": 29, 
                "share": 23, 
                "stusps": "VA"
            }, 
            {
                "hPct": 68, 
                "share": 20, 
                "stusps": "VT"
            }, 
            {
                "hPct": 33, 
                "share": 22, 
                "stusps": "NC"
            }, 
            {
                "hPct": 49, 
                "share": 19, 
                "stusps": "ME"
            }, 
            {
                "hPct": 38, 
                "share": 24, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "30-44", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 30 to 44", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 2, 
        "rowLabel": "30-44", 
        "rowText": "30-44", 
        "states": [
            {
                "hPct": 19, 
                "share": 23, 
                "stusps": "VA"
            }, 
            {
                "hPct": 17, 
                "share": 20, 
                "stusps": "VT"
            }, 
            {
                "hPct": 15, 
                "share": 22, 
                "stusps": "NC"
            }, 
            {
                "hPct": 21, 
                "share": 19, 
                "stusps": "ME"
            }, 
            {
                "hPct": 25, 
                "share": 24, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "45-64", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 45 to 64", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 3, 
        "rowLabel": "45-64", 
        "rowText": "45-64", 
        "states": [
            {
                "hPct": 57, 
                "share": 40, 
                "stusps": "VA"
            }, 
            {
                "hPct": 22, 
                "share": 41, 
                "stusps": "VT"
            }, 
            {
                "hPct": 47, 
                "share": 37, 
                "stusps": "NC"
            }, 
            {
                "hPct": 38, 
                "share": 33, 
                "stusps": "ME"
            }, 
            {
                "hPct": 49, 
                "share": 32, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "45-64", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 45 to 64", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 3, 
        "rowLabel": "45-64", 
        "rowText": "45-64", 
        "states": [
            {
                "hPct": 11, 
                "share": 40, 
                "stusps": "VA"
            }, 
            {
                "hPct": 15, 
                "share": 41, 
                "stusps": "VT"
            }, 
            {
                "hPct": 16, 
                "share": 37, 
                "stusps": "NC"
            }, 
            {
                "hPct": 13, 
                "share": 33, 
                "stusps": "ME"
            }, 
            {
                "hPct": 10, 
                "share": 32, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "45-64", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 45 to 64", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 3, 
        "rowLabel": "45-64", 
        "rowText": "45-64", 
        "states": [
            {
                "hPct": 18, 
                "share": 40, 
                "stusps": "VA"
            }, 
            {
                "hPct": 47, 
                "share": 41, 
                "stusps": "VT"
            }, 
            {
                "hPct": 18, 
                "share": 37, 
                "stusps": "NC"
            }, 
            {
                "hPct": 24, 
                "share": 33, 
                "stusps": "ME"
            }, 
            {
                "hPct": 18, 
                "share": 32, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "45-64", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 45 to 64", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 3, 
        "rowLabel": "45-64", 
        "rowText": "45-64", 
        "states": [
            {
                "hPct": 10, 
                "share": 40, 
                "stusps": "VA"
            }, 
            {
                "hPct": 11, 
                "share": 41, 
                "stusps": "VT"
            }, 
            {
                "hPct": 11, 
                "share": 37, 
                "stusps": "NC"
            }, 
            {
                "hPct": 19, 
                "share": 33, 
                "stusps": "ME"
            }, 
            {
                "hPct": 17, 
                "share": 32, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "65+", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 65 and older", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 4, 
        "rowLabel": "65+", 
        "rowText": "65 or over", 
        "states": [
            {
                "hPct": 76, 
                "share": 23, 
                "stusps": "VA"
            }, 
            {
                "hPct": 37, 
                "share": 28, 
                "stusps": "VT"
            }, 
            {
                "hPct": 53, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 46, 
                "share": 33, 
                "stusps": "ME"
            }, 
            {
                "hPct": 59, 
                "share": 26, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "65+", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 65 and older", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 4, 
        "rowLabel": "65+", 
        "rowText": "65 or over", 
        "states": [
            {
                "hPct": 11, 
                "share": 23, 
                "stusps": "VA"
            }, 
            {
                "hPct": 7, 
                "share": 28, 
                "stusps": "VT"
            }, 
            {
                "hPct": 18, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 19, 
                "share": 33, 
                "stusps": "ME"
            }, 
            {
                "hPct": 13, 
                "share": 26, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "65+", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 65 and older", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 4, 
        "rowLabel": "65+", 
        "rowText": "65 or over", 
        "states": [
            {
                "hPct": 7, 
                "share": 23, 
                "stusps": "VA"
            }, 
            {
                "hPct": 41, 
                "share": 28, 
                "stusps": "VT"
            }, 
            {
                "hPct": 8, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 18, 
                "share": 33, 
                "stusps": "ME"
            }, 
            {
                "hPct": 14, 
                "share": 26, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "65+", 
        "label": "In which age group are you?", 
        "leaderLabel": "Ages 65 and older", 
        "median_hpct": 0, 
        "median_stcount": 0, 
        "num_row": 4, 
        "question_id": 710, 
        "question_label": "XAGE", 
        "question_label_full": "Age", 
        "row": 4, 
        "rowLabel": "65+", 
        "rowText": "65 or over", 
        "states": [
            {
                "hPct": 5, 
                "share": 23, 
                "stusps": "VA"
            }, 
            {
                "hPct": 12, 
                "share": 28, 
                "stusps": "VT"
            }, 
            {
                "hPct": 8, 
                "share": 27, 
                "stusps": "NC"
            }, 
            {
                "hPct": 11, 
                "share": 33, 
                "stusps": "ME"
            }, 
            {
                "hPct": 9, 
                "share": 26, 
                "stusps": "MN"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "College graduate", 
        "label": "What was the last grade of school you completed?", 
        "leaderLabel": "College graduates", 
        "median_hpct": 34, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 1951, 
        "question_label": "EDUCCOLL", 
        "question_label_full": "Education", 
        "row": 1, 
        "rowLabel": "COLLEGEGRAD", 
        "rowText": "College graduate", 
        "states": [
            {
                "hPct": 50, 
                "share": 50, 
                "stusps": "VA"
            }, 
            {
                "hPct": 23, 
                "share": 53, 
                "stusps": "VT"
            }, 
            {
                "hPct": 37, 
                "share": 46, 
                "stusps": "NC"
            }, 
            {
                "hPct": 61, 
                "share": 36, 
                "stusps": "AL"
            }, 
            {
                "hPct": 33, 
                "share": 51, 
                "stusps": "ME"
            }, 
            {
                "hPct": 31, 
                "share": 53, 
                "stusps": "MA"
            }, 
            {
                "hPct": 35, 
                "share": 31, 
                "stusps": "OK"
            }, 
            {
                "hPct": 35, 
                "share": 45, 
                "stusps": "TN"
            }, 
            {
                "hPct": 13, 
                "share": 61, 
                "stusps": "CO"
            }, 
            {
                "hPct": 39, 
                "share": 50, 
                "stusps": "MN"
            }, 
            {
                "hPct": 30, 
                "share": 40, 
                "stusps": "TX"
            }, 
            {
                "hPct": 18, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "College graduate", 
        "label": "What was the last grade of school you completed?", 
        "leaderLabel": "College graduates", 
        "median_hpct": 12, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 1951, 
        "question_label": "EDUCCOLL", 
        "question_label_full": "Education", 
        "row": 1, 
        "rowLabel": "COLLEGEGRAD", 
        "rowText": "College graduate", 
        "states": [
            {
                "hPct": 12, 
                "share": 50, 
                "stusps": "VA"
            }, 
            {
                "hPct": 7, 
                "share": 53, 
                "stusps": "VT"
            }, 
            {
                "hPct": 15, 
                "share": 46, 
                "stusps": "NC"
            }, 
            {
                "hPct": 10, 
                "share": 36, 
                "stusps": "AL"
            }, 
            {
                "hPct": 11, 
                "share": 51, 
                "stusps": "ME"
            }, 
            {
                "hPct": 13, 
                "share": 53, 
                "stusps": "MA"
            }, 
            {
                "hPct": 10, 
                "share": 31, 
                "stusps": "OK"
            }, 
            {
                "hPct": 15, 
                "share": 45, 
                "stusps": "TN"
            }, 
            {
                "hPct": 14, 
                "share": 61, 
                "stusps": "CO"
            }, 
            {
                "hPct": 7, 
                "share": 50, 
                "stusps": "MN"
            }, 
            {
                "hPct": 12, 
                "share": 40, 
                "stusps": "TX"
            }, 
            {
                "hPct": 16, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "College graduate", 
        "label": "What was the last grade of school you completed?", 
        "leaderLabel": "College graduates", 
        "median_hpct": 24.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 1951, 
        "question_label": "EDUCCOLL", 
        "question_label_full": "Education", 
        "row": 1, 
        "rowLabel": "COLLEGEGRAD", 
        "rowText": "College graduate", 
        "states": [
            {
                "hPct": 20, 
                "share": 50, 
                "stusps": "VA"
            }, 
            {
                "hPct": 49, 
                "share": 53, 
                "stusps": "VT"
            }, 
            {
                "hPct": 21, 
                "share": 46, 
                "stusps": "NC"
            }, 
            {
                "hPct": 17, 
                "share": 36, 
                "stusps": "AL"
            }, 
            {
                "hPct": 31, 
                "share": 51, 
                "stusps": "ME"
            }, 
            {
                "hPct": 24, 
                "share": 53, 
                "stusps": "MA"
            }, 
            {
                "hPct": 21, 
                "share": 31, 
                "stusps": "OK"
            }, 
            {
                "hPct": 24, 
                "share": 45, 
                "stusps": "TN"
            }, 
            {
                "hPct": 28, 
                "share": 61, 
                "stusps": "CO"
            }, 
            {
                "hPct": 25, 
                "share": 50, 
                "stusps": "MN"
            }, 
            {
                "hPct": 28, 
                "share": 40, 
                "stusps": "TX"
            }, 
            {
                "hPct": 32, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "College graduate", 
        "label": "What was the last grade of school you completed?", 
        "leaderLabel": "College graduates", 
        "median_hpct": 17.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 1951, 
        "question_label": "EDUCCOLL", 
        "question_label_full": "Education", 
        "row": 1, 
        "rowLabel": "COLLEGEGRAD", 
        "rowText": "College graduate", 
        "states": [
            {
                "hPct": 15, 
                "share": 50, 
                "stusps": "VA"
            }, 
            {
                "hPct": 17, 
                "share": 53, 
                "stusps": "VT"
            }, 
            {
                "hPct": 16, 
                "share": 46, 
                "stusps": "NC"
            }, 
            {
                "hPct": 9, 
                "share": 36, 
                "stusps": "AL"
            }, 
            {
                "hPct": 22, 
                "share": 51, 
                "stusps": "ME"
            }, 
            {
                "hPct": 26, 
                "share": 53, 
                "stusps": "MA"
            }, 
            {
                "hPct": 24, 
                "share": 31, 
                "stusps": "OK"
            }, 
            {
                "hPct": 16, 
                "share": 45, 
                "stusps": "TN"
            }, 
            {
                "hPct": 19, 
                "share": 61, 
                "stusps": "CO"
            }, 
            {
                "hPct": 22, 
                "share": 50, 
                "stusps": "MN"
            }, 
            {
                "hPct": 18, 
                "share": 40, 
                "stusps": "TX"
            }, 
            {
                "hPct": 17, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "No college degree", 
        "label": "What was the last grade of school you completed?", 
        "leaderLabel": "No college degree", 
        "median_hpct": 37, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 1951, 
        "question_label": "EDUCCOLL", 
        "question_label_full": "Education", 
        "row": 2, 
        "rowLabel": "NODEGREE", 
        "rowText": "No college degree", 
        "states": [
            {
                "hPct": 57, 
                "share": 50, 
                "stusps": "VA"
            }, 
            {
                "hPct": 21, 
                "share": 47, 
                "stusps": "VT"
            }, 
            {
                "hPct": 46, 
                "share": 54, 
                "stusps": "NC"
            }, 
            {
                "hPct": 64, 
                "share": 64, 
                "stusps": "AL"
            }, 
            {
                "hPct": 35, 
                "share": 49, 
                "stusps": "ME"
            }, 
            {
                "hPct": 37, 
                "share": 47, 
                "stusps": "MA"
            }, 
            {
                "hPct": 37, 
                "share": 69, 
                "stusps": "OK"
            }, 
            {
                "hPct": 47, 
                "share": 55, 
                "stusps": "TN"
            }, 
            {
                "hPct": 18, 
                "share": 39, 
                "stusps": "CO"
            }, 
            {
                "hPct": 41, 
                "share": 50, 
                "stusps": "MN"
            }, 
            {
                "hPct": 35, 
                "share": 60, 
                "stusps": "TX"
            }, 
            {
                "hPct": 24, 
                "share": 45, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "No college degree", 
        "label": "What was the last grade of school you completed?", 
        "leaderLabel": "No college degree", 
        "median_hpct": 12, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 1951, 
        "question_label": "EDUCCOLL", 
        "question_label_full": "Education", 
        "row": 2, 
        "rowLabel": "NODEGREE", 
        "rowText": "No college degree", 
        "states": [
            {
                "hPct": 8, 
                "share": 50, 
                "stusps": "VA"
            }, 
            {
                "hPct": 12, 
                "share": 47, 
                "stusps": "VT"
            }, 
            {
                "hPct": 12, 
                "share": 54, 
                "stusps": "NC"
            }, 
            {
                "hPct": 12, 
                "share": 64, 
                "stusps": "AL"
            }, 
            {
                "hPct": 12, 
                "share": 49, 
                "stusps": "ME"
            }, 
            {
                "hPct": 9, 
                "share": 47, 
                "stusps": "MA"
            }, 
            {
                "hPct": 17, 
                "share": 69, 
                "stusps": "OK"
            }, 
            {
                "hPct": 16, 
                "share": 55, 
                "stusps": "TN"
            }, 
            {
                "hPct": 16, 
                "share": 39, 
                "stusps": "CO"
            }, 
            {
                "hPct": 9, 
                "share": 50, 
                "stusps": "MN"
            }, 
            {
                "hPct": 17, 
                "share": 60, 
                "stusps": "TX"
            }, 
            {
                "hPct": 14, 
                "share": 45, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "No college degree", 
        "label": "What was the last grade of school you completed?", 
        "leaderLabel": "No college degree", 
        "median_hpct": 33, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 1951, 
        "question_label": "EDUCCOLL", 
        "question_label_full": "Education", 
        "row": 2, 
        "rowLabel": "NODEGREE", 
        "rowText": "No college degree", 
        "states": [
            {
                "hPct": 26, 
                "share": 50, 
                "stusps": "VA"
            }, 
            {
                "hPct": 55, 
                "share": 47, 
                "stusps": "VT"
            }, 
            {
                "hPct": 27, 
                "share": 54, 
                "stusps": "NC"
            }, 
            {
                "hPct": 17, 
                "share": 64, 
                "stusps": "AL"
            }, 
            {
                "hPct": 35, 
                "share": 49, 
                "stusps": "ME"
            }, 
            {
                "hPct": 34, 
                "share": 47, 
                "stusps": "MA"
            }, 
            {
                "hPct": 24, 
                "share": 69, 
                "stusps": "OK"
            }, 
            {
                "hPct": 26, 
                "share": 55, 
                "stusps": "TN"
            }, 
            {
                "hPct": 37, 
                "share": 39, 
                "stusps": "CO"
            }, 
            {
                "hPct": 36, 
                "share": 50, 
                "stusps": "MN"
            }, 
            {
                "hPct": 32, 
                "share": 60, 
                "stusps": "TX"
            }, 
            {
                "hPct": 36, 
                "share": 45, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "No college degree", 
        "label": "What was the last grade of school you completed?", 
        "leaderLabel": "No college degree", 
        "median_hpct": 7.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 1951, 
        "question_label": "EDUCCOLL", 
        "question_label_full": "Education", 
        "row": 2, 
        "rowLabel": "NODEGREE", 
        "rowText": "No college degree", 
        "states": [
            {
                "hPct": 7, 
                "share": 50, 
                "stusps": "VA"
            }, 
            {
                "hPct": 7, 
                "share": 47, 
                "stusps": "VT"
            }, 
            {
                "hPct": 6, 
                "share": 54, 
                "stusps": "NC"
            }, 
            {
                "hPct": 4, 
                "share": 64, 
                "stusps": "AL"
            }, 
            {
                "hPct": 11, 
                "share": 49, 
                "stusps": "ME"
            }, 
            {
                "hPct": 15, 
                "share": 47, 
                "stusps": "MA"
            }, 
            {
                "hPct": 9, 
                "share": 69, 
                "stusps": "OK"
            }, 
            {
                "hPct": 6, 
                "share": 55, 
                "stusps": "TN"
            }, 
            {
                "hPct": 9, 
                "share": 39, 
                "stusps": "CO"
            }, 
            {
                "hPct": 9, 
                "share": 50, 
                "stusps": "MN"
            }, 
            {
                "hPct": 7, 
                "share": 60, 
                "stusps": "TX"
            }, 
            {
                "hPct": 8, 
                "share": 45, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Decided before last few days", 
        "label": "Time: Last few days/Earlier than that", 
        "leaderLabel": "Decided before last few days", 
        "median_hpct": 29, 
        "median_stcount": 11, 
        "num_row": 2, 
        "question_id": 2543, 
        "question_label": "TIMEPRIFEWDAYS", 
        "question_label_full": "When did you decide?", 
        "row": 2, 
        "rowLabel": "EARLIER", 
        "rowText": "Earlier than that", 
        "states": [
            {
                "hPct": 50, 
                "share": 51, 
                "stusps": "VA"
            }, 
            {
                "hPct": 13, 
                "share": 61, 
                "stusps": "VT"
            }, 
            {
                "hPct": 39, 
                "share": 67, 
                "stusps": "NC"
            }, 
            {
                "hPct": 63, 
                "share": 59, 
                "stusps": "AL"
            }, 
            {
                "hPct": 22, 
                "share": 52, 
                "stusps": "ME"
            }, 
            {
                "hPct": 24, 
                "share": 48, 
                "stusps": "MA"
            }, 
            {
                "hPct": 31, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 34, 
                "share": 71, 
                "stusps": "TN"
            }, 
            {
                "hPct": 24, 
                "share": 45, 
                "stusps": "MN"
            }, 
            {
                "hPct": 29, 
                "share": 76, 
                "stusps": "TX"
            }, 
            {
                "hPct": 17, 
                "share": 77, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Decided before last few days", 
        "label": "Time: Last few days/Earlier than that", 
        "leaderLabel": "Decided before last few days", 
        "median_hpct": 10, 
        "median_stcount": 11, 
        "num_row": 2, 
        "question_id": 2543, 
        "question_label": "TIMEPRIFEWDAYS", 
        "question_label_full": "When did you decide?", 
        "row": 2, 
        "rowLabel": "EARLIER", 
        "rowText": "Earlier than that", 
        "states": [
            {
                "hPct": 6, 
                "share": 51, 
                "stusps": "VA"
            }, 
            {
                "hPct": 7, 
                "share": 61, 
                "stusps": "VT"
            }, 
            {
                "hPct": 13, 
                "share": 67, 
                "stusps": "NC"
            }, 
            {
                "hPct": 9, 
                "share": 59, 
                "stusps": "AL"
            }, 
            {
                "hPct": 10, 
                "share": 52, 
                "stusps": "ME"
            }, 
            {
                "hPct": 8, 
                "share": 48, 
                "stusps": "MA"
            }, 
            {
                "hPct": 11, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 18, 
                "share": 71, 
                "stusps": "TN"
            }, 
            {
                "hPct": 8, 
                "share": 45, 
                "stusps": "MN"
            }, 
            {
                "hPct": 17, 
                "share": 76, 
                "stusps": "TX"
            }, 
            {
                "hPct": 14, 
                "share": 77, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Decided before last few days", 
        "label": "Time: Last few days/Earlier than that", 
        "leaderLabel": "Decided before last few days", 
        "median_hpct": 33, 
        "median_stcount": 11, 
        "num_row": 2, 
        "question_id": 2543, 
        "question_label": "TIMEPRIFEWDAYS", 
        "question_label_full": "When did you decide?", 
        "row": 2, 
        "rowLabel": "EARLIER", 
        "rowText": "Earlier than that", 
        "states": [
            {
                "hPct": 29, 
                "share": 51, 
                "stusps": "VA"
            }, 
            {
                "hPct": 64, 
                "share": 61, 
                "stusps": "VT"
            }, 
            {
                "hPct": 26, 
                "share": 67, 
                "stusps": "NC"
            }, 
            {
                "hPct": 20, 
                "share": 59, 
                "stusps": "AL"
            }, 
            {
                "hPct": 47, 
                "share": 52, 
                "stusps": "ME"
            }, 
            {
                "hPct": 40, 
                "share": 48, 
                "stusps": "MA"
            }, 
            {
                "hPct": 32, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 28, 
                "share": 71, 
                "stusps": "TN"
            }, 
            {
                "hPct": 45, 
                "share": 45, 
                "stusps": "MN"
            }, 
            {
                "hPct": 33, 
                "share": 76, 
                "stusps": "TX"
            }, 
            {
                "hPct": 37, 
                "share": 77, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Decided before last few days", 
        "label": "Time: Last few days/Earlier than that", 
        "leaderLabel": "Decided before last few days", 
        "median_hpct": 11, 
        "median_stcount": 11, 
        "num_row": 2, 
        "question_id": 2543, 
        "question_label": "TIMEPRIFEWDAYS", 
        "question_label_full": "When did you decide?", 
        "row": 2, 
        "rowLabel": "EARLIER", 
        "rowText": "Earlier than that", 
        "states": [
            {
                "hPct": 11, 
                "share": 51, 
                "stusps": "VA"
            }, 
            {
                "hPct": 11, 
                "share": 61, 
                "stusps": "VT"
            }, 
            {
                "hPct": 10, 
                "share": 67, 
                "stusps": "NC"
            }, 
            {
                "hPct": 5, 
                "share": 59, 
                "stusps": "AL"
            }, 
            {
                "hPct": 16, 
                "share": 52, 
                "stusps": "ME"
            }, 
            {
                "hPct": 22, 
                "share": 48, 
                "stusps": "MA"
            }, 
            {
                "hPct": 12, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 10, 
                "share": 71, 
                "stusps": "TN"
            }, 
            {
                "hPct": 15, 
                "share": 45, 
                "stusps": "MN"
            }, 
            {
                "hPct": 11, 
                "share": 76, 
                "stusps": "TX"
            }, 
            {
                "hPct": 13, 
                "share": 77, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "In the last few days", 
        "label": "Time: Last few days/Earlier than that", 
        "leaderLabel": "Decided in last few days", 
        "median_hpct": 47, 
        "median_stcount": 11, 
        "num_row": 2, 
        "question_id": 2543, 
        "question_label": "TIMEPRIFEWDAYS", 
        "question_label_full": "When did you decide?", 
        "row": 1, 
        "rowLabel": "LASTFEWDAYS", 
        "rowText": "Last few days", 
        "states": [
            {
                "hPct": 59, 
                "share": 49, 
                "stusps": "VA"
            }, 
            {
                "hPct": 35, 
                "share": 38, 
                "stusps": "VT"
            }, 
            {
                "hPct": 53, 
                "share": 32, 
                "stusps": "NC"
            }, 
            {
                "hPct": 64, 
                "share": 40, 
                "stusps": "AL"
            }, 
            {
                "hPct": 47, 
                "share": 47, 
                "stusps": "ME"
            }, 
            {
                "hPct": 43, 
                "share": 51, 
                "stusps": "MA"
            }, 
            {
                "hPct": 41, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 61, 
                "share": 28, 
                "stusps": "TN"
            }, 
            {
                "hPct": 53, 
                "share": 55, 
                "stusps": "MN"
            }, 
            {
                "hPct": 45, 
                "share": 24, 
                "stusps": "TX"
            }, 
            {
                "hPct": 30, 
                "share": 19, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "In the last few days", 
        "label": "Time: Last few days/Earlier than that", 
        "leaderLabel": "Decided in last few days", 
        "median_hpct": 14, 
        "median_stcount": 11, 
        "num_row": 2, 
        "question_id": 2543, 
        "question_label": "TIMEPRIFEWDAYS", 
        "question_label_full": "When did you decide?", 
        "row": 1, 
        "rowLabel": "LASTFEWDAYS", 
        "rowText": "Last few days", 
        "states": [
            {
                "hPct": 10, 
                "share": 49, 
                "stusps": "VA"
            }, 
            {
                "hPct": 13, 
                "share": 38, 
                "stusps": "VT"
            }, 
            {
                "hPct": 12, 
                "share": 32, 
                "stusps": "NC"
            }, 
            {
                "hPct": 16, 
                "share": 40, 
                "stusps": "AL"
            }, 
            {
                "hPct": 14, 
                "share": 47, 
                "stusps": "ME"
            }, 
            {
                "hPct": 14, 
                "share": 51, 
                "stusps": "MA"
            }, 
            {
                "hPct": 18, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 14, 
                "share": 28, 
                "stusps": "TN"
            }, 
            {
                "hPct": 8, 
                "share": 55, 
                "stusps": "MN"
            }, 
            {
                "hPct": 16, 
                "share": 24, 
                "stusps": "TX"
            }, 
            {
                "hPct": 23, 
                "share": 19, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "In the last few days", 
        "label": "Time: Last few days/Earlier than that", 
        "leaderLabel": "Decided in last few days", 
        "median_hpct": 17, 
        "median_stcount": 11, 
        "num_row": 2, 
        "question_id": 2543, 
        "question_label": "TIMEPRIFEWDAYS", 
        "question_label_full": "When did you decide?", 
        "row": 1, 
        "rowLabel": "LASTFEWDAYS", 
        "rowText": "Last few days", 
        "states": [
            {
                "hPct": 17, 
                "share": 49, 
                "stusps": "VA"
            }, 
            {
                "hPct": 32, 
                "share": 38, 
                "stusps": "VT"
            }, 
            {
                "hPct": 22, 
                "share": 32, 
                "stusps": "NC"
            }, 
            {
                "hPct": 11, 
                "share": 40, 
                "stusps": "AL"
            }, 
            {
                "hPct": 17, 
                "share": 47, 
                "stusps": "ME"
            }, 
            {
                "hPct": 18, 
                "share": 51, 
                "stusps": "MA"
            }, 
            {
                "hPct": 15, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 15, 
                "share": 28, 
                "stusps": "TN"
            }, 
            {
                "hPct": 19, 
                "share": 55, 
                "stusps": "MN"
            }, 
            {
                "hPct": 16, 
                "share": 24, 
                "stusps": "TX"
            }, 
            {
                "hPct": 19, 
                "share": 19, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "In the last few days", 
        "label": "Time: Last few days/Earlier than that", 
        "leaderLabel": "Decided in last few days", 
        "median_hpct": 14, 
        "median_stcount": 11, 
        "num_row": 2, 
        "question_id": 2543, 
        "question_label": "TIMEPRIFEWDAYS", 
        "question_label_full": "When did you decide?", 
        "row": 1, 
        "rowLabel": "LASTFEWDAYS", 
        "rowText": "Last few days", 
        "states": [
            {
                "hPct": 12, 
                "share": 49, 
                "stusps": "VA"
            }, 
            {
                "hPct": 14, 
                "share": 38, 
                "stusps": "VT"
            }, 
            {
                "hPct": 11, 
                "share": 32, 
                "stusps": "NC"
            }, 
            {
                "hPct": 6, 
                "share": 40, 
                "stusps": "AL"
            }, 
            {
                "hPct": 17, 
                "share": 47, 
                "stusps": "ME"
            }, 
            {
                "hPct": 20, 
                "share": 51, 
                "stusps": "MA"
            }, 
            {
                "hPct": 16, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 8, 
                "share": 28, 
                "stusps": "TN"
            }, 
            {
                "hPct": 16, 
                "share": 55, 
                "stusps": "MN"
            }, 
            {
                "hPct": 14, 
                "share": 24, 
                "stusps": "TX"
            }, 
            {
                "hPct": 8, 
                "share": 19, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Agrees with you on major issues", 
        "label": "If you had to choose, would you rather see the Democratic Party nominate a candidate who:", 
        "leaderLabel": "Prefer candidate who agrees with you on issues", 
        "median_hpct": 25, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4151, 
        "question_label": "WINORISS20", 
        "question_label_full": "Rather nominate a candidate who...", 
        "row": 1, 
        "rowLabel": "AGREEISS", 
        "rowText": "Agrees with you on major issues", 
        "states": [
            {
                "hPct": 39, 
                "share": 39, 
                "stusps": "VA"
            }, 
            {
                "hPct": 6, 
                "share": 34, 
                "stusps": "VT"
            }, 
            {
                "hPct": 35, 
                "share": 34, 
                "stusps": "NC"
            }, 
            {
                "hPct": 55, 
                "share": 42, 
                "stusps": "AL"
            }, 
            {
                "hPct": 18, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 24, 
                "share": 32, 
                "stusps": "MA"
            }, 
            {
                "hPct": 25, 
                "share": 42, 
                "stusps": "OK"
            }, 
            {
                "hPct": 31, 
                "share": 35, 
                "stusps": "TN"
            }, 
            {
                "hPct": 8, 
                "share": 28, 
                "stusps": "CO"
            }, 
            {
                "hPct": 25, 
                "share": 32, 
                "stusps": "MN"
            }, 
            {
                "hPct": 26, 
                "share": 40, 
                "stusps": "TX"
            }, 
            {
                "hPct": 13, 
                "share": 32, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Agrees with you on major issues", 
        "label": "If you had to choose, would you rather see the Democratic Party nominate a candidate who:", 
        "leaderLabel": "Prefer candidate who agrees with you on issues", 
        "median_hpct": 12, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4151, 
        "question_label": "WINORISS20", 
        "question_label_full": "Rather nominate a candidate who...", 
        "row": 1, 
        "rowLabel": "AGREEISS", 
        "rowText": "Agrees with you on major issues", 
        "states": [
            {
                "hPct": 10, 
                "share": 39, 
                "stusps": "VA"
            }, 
            {
                "hPct": 12, 
                "share": 34, 
                "stusps": "VT"
            }, 
            {
                "hPct": 12, 
                "share": 34, 
                "stusps": "NC"
            }, 
            {
                "hPct": 15, 
                "share": 42, 
                "stusps": "AL"
            }, 
            {
                "hPct": 10, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 10, 
                "share": 32, 
                "stusps": "MA"
            }, 
            {
                "hPct": 14, 
                "share": 42, 
                "stusps": "OK"
            }, 
            {
                "hPct": 15, 
                "share": 35, 
                "stusps": "TN"
            }, 
            {
                "hPct": 12, 
                "share": 28, 
                "stusps": "CO"
            }, 
            {
                "hPct": 7, 
                "share": 32, 
                "stusps": "MN"
            }, 
            {
                "hPct": 13, 
                "share": 40, 
                "stusps": "TX"
            }, 
            {
                "hPct": 8, 
                "share": 32, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Agrees with you on major issues", 
        "label": "If you had to choose, would you rather see the Democratic Party nominate a candidate who:", 
        "leaderLabel": "Prefer candidate who agrees with you on issues", 
        "median_hpct": 38.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4151, 
        "question_label": "WINORISS20", 
        "question_label_full": "Rather nominate a candidate who...", 
        "row": 1, 
        "rowLabel": "AGREEISS", 
        "rowText": "Agrees with you on major issues", 
        "states": [
            {
                "hPct": 33, 
                "share": 39, 
                "stusps": "VA"
            }, 
            {
                "hPct": 64, 
                "share": 34, 
                "stusps": "VT"
            }, 
            {
                "hPct": 33, 
                "share": 34, 
                "stusps": "NC"
            }, 
            {
                "hPct": 21, 
                "share": 42, 
                "stusps": "AL"
            }, 
            {
                "hPct": 48, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 36, 
                "share": 32, 
                "stusps": "MA"
            }, 
            {
                "hPct": 29, 
                "share": 42, 
                "stusps": "OK"
            }, 
            {
                "hPct": 35, 
                "share": 35, 
                "stusps": "TN"
            }, 
            {
                "hPct": 46, 
                "share": 28, 
                "stusps": "CO"
            }, 
            {
                "hPct": 49, 
                "share": 32, 
                "stusps": "MN"
            }, 
            {
                "hPct": 41, 
                "share": 40, 
                "stusps": "TX"
            }, 
            {
                "hPct": 48, 
                "share": 32, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Agrees with you on major issues", 
        "label": "If you had to choose, would you rather see the Democratic Party nominate a candidate who:", 
        "leaderLabel": "Prefer candidate who agrees with you on issues", 
        "median_hpct": 12, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4151, 
        "question_label": "WINORISS20", 
        "question_label_full": "Rather nominate a candidate who...", 
        "row": 1, 
        "rowLabel": "AGREEISS", 
        "rowText": "Agrees with you on major issues", 
        "states": [
            {
                "hPct": 12, 
                "share": 39, 
                "stusps": "VA"
            }, 
            {
                "hPct": 11, 
                "share": 34, 
                "stusps": "VT"
            }, 
            {
                "hPct": 9, 
                "share": 34, 
                "stusps": "NC"
            }, 
            {
                "hPct": 4, 
                "share": 42, 
                "stusps": "AL"
            }, 
            {
                "hPct": 13, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 19, 
                "share": 32, 
                "stusps": "MA"
            }, 
            {
                "hPct": 14, 
                "share": 42, 
                "stusps": "OK"
            }, 
            {
                "hPct": 11, 
                "share": 35, 
                "stusps": "TN"
            }, 
            {
                "hPct": 12, 
                "share": 28, 
                "stusps": "CO"
            }, 
            {
                "hPct": 12, 
                "share": 32, 
                "stusps": "MN"
            }, 
            {
                "hPct": 10, 
                "share": 40, 
                "stusps": "TX"
            }, 
            {
                "hPct": 12, 
                "share": 32, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Can beat Donald Trump", 
        "label": "If you had to choose, would you rather see the Democratic Party nominate a candidate who:", 
        "leaderLabel": "Prefer candidate who can beat Donald Trump", 
        "median_hpct": 43, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4151, 
        "question_label": "WINORISS20", 
        "question_label_full": "Rather nominate a candidate who...", 
        "row": 2, 
        "rowLabel": "BEATTRUMP", 
        "rowText": "Can beat Donald Trump", 
        "states": [
            {
                "hPct": 63, 
                "share": 58, 
                "stusps": "VA"
            }, 
            {
                "hPct": 29, 
                "share": 63, 
                "stusps": "VT"
            }, 
            {
                "hPct": 44, 
                "share": 63, 
                "stusps": "NC"
            }, 
            {
                "hPct": 69, 
                "share": 53, 
                "stusps": "AL"
            }, 
            {
                "hPct": 42, 
                "share": 66, 
                "stusps": "ME"
            }, 
            {
                "hPct": 39, 
                "share": 65, 
                "stusps": "MA"
            }, 
            {
                "hPct": 45, 
                "share": 55, 
                "stusps": "OK"
            }, 
            {
                "hPct": 47, 
                "share": 61, 
                "stusps": "TN"
            }, 
            {
                "hPct": 18, 
                "share": 69, 
                "stusps": "CO"
            }, 
            {
                "hPct": 47, 
                "share": 65, 
                "stusps": "MN"
            }, 
            {
                "hPct": 38, 
                "share": 57, 
                "stusps": "TX"
            }, 
            {
                "hPct": 24, 
                "share": 64, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Can beat Donald Trump", 
        "label": "If you had to choose, would you rather see the Democratic Party nominate a candidate who:", 
        "leaderLabel": "Prefer candidate who can beat Donald Trump", 
        "median_hpct": 13, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4151, 
        "question_label": "WINORISS20", 
        "question_label_full": "Rather nominate a candidate who...", 
        "row": 2, 
        "rowLabel": "BEATTRUMP", 
        "rowText": "Can beat Donald Trump", 
        "states": [
            {
                "hPct": 9, 
                "share": 58, 
                "stusps": "VA"
            }, 
            {
                "hPct": 8, 
                "share": 63, 
                "stusps": "VT"
            }, 
            {
                "hPct": 14, 
                "share": 63, 
                "stusps": "NC"
            }, 
            {
                "hPct": 9, 
                "share": 53, 
                "stusps": "AL"
            }, 
            {
                "hPct": 12, 
                "share": 66, 
                "stusps": "ME"
            }, 
            {
                "hPct": 12, 
                "share": 65, 
                "stusps": "MA"
            }, 
            {
                "hPct": 15, 
                "share": 55, 
                "stusps": "OK"
            }, 
            {
                "hPct": 15, 
                "share": 61, 
                "stusps": "TN"
            }, 
            {
                "hPct": 16, 
                "share": 69, 
                "stusps": "CO"
            }, 
            {
                "hPct": 8, 
                "share": 65, 
                "stusps": "MN"
            }, 
            {
                "hPct": 16, 
                "share": 57, 
                "stusps": "TX"
            }, 
            {
                "hPct": 19, 
                "share": 64, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Can beat Donald Trump", 
        "label": "If you had to choose, would you rather see the Democratic Party nominate a candidate who:", 
        "leaderLabel": "Prefer candidate who can beat Donald Trump", 
        "median_hpct": 22.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4151, 
        "question_label": "WINORISS20", 
        "question_label_full": "Rather nominate a candidate who...", 
        "row": 2, 
        "rowLabel": "BEATTRUMP", 
        "rowText": "Can beat Donald Trump", 
        "states": [
            {
                "hPct": 16, 
                "share": 58, 
                "stusps": "VA"
            }, 
            {
                "hPct": 47, 
                "share": 63, 
                "stusps": "VT"
            }, 
            {
                "hPct": 19, 
                "share": 63, 
                "stusps": "NC"
            }, 
            {
                "hPct": 14, 
                "share": 53, 
                "stusps": "AL"
            }, 
            {
                "hPct": 25, 
                "share": 66, 
                "stusps": "ME"
            }, 
            {
                "hPct": 24, 
                "share": 65, 
                "stusps": "MA"
            }, 
            {
                "hPct": 20, 
                "share": 55, 
                "stusps": "OK"
            }, 
            {
                "hPct": 20, 
                "share": 61, 
                "stusps": "TN"
            }, 
            {
                "hPct": 25, 
                "share": 69, 
                "stusps": "CO"
            }, 
            {
                "hPct": 21, 
                "share": 65, 
                "stusps": "MN"
            }, 
            {
                "hPct": 24, 
                "share": 57, 
                "stusps": "TX"
            }, 
            {
                "hPct": 27, 
                "share": 64, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Can beat Donald Trump", 
        "label": "If you had to choose, would you rather see the Democratic Party nominate a candidate who:", 
        "leaderLabel": "Prefer candidate who can beat Donald Trump", 
        "median_hpct": 13.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4151, 
        "question_label": "WINORISS20", 
        "question_label_full": "Rather nominate a candidate who...", 
        "row": 2, 
        "rowLabel": "BEATTRUMP", 
        "rowText": "Can beat Donald Trump", 
        "states": [
            {
                "hPct": 10, 
                "share": 58, 
                "stusps": "VA"
            }, 
            {
                "hPct": 13, 
                "share": 63, 
                "stusps": "VT"
            }, 
            {
                "hPct": 12, 
                "share": 63, 
                "stusps": "NC"
            }, 
            {
                "hPct": 7, 
                "share": 53, 
                "stusps": "AL"
            }, 
            {
                "hPct": 19, 
                "share": 66, 
                "stusps": "ME"
            }, 
            {
                "hPct": 22, 
                "share": 65, 
                "stusps": "MA"
            }, 
            {
                "hPct": 14, 
                "share": 55, 
                "stusps": "OK"
            }, 
            {
                "hPct": 11, 
                "share": 61, 
                "stusps": "TN"
            }, 
            {
                "hPct": 17, 
                "share": 69, 
                "stusps": "CO"
            }, 
            {
                "hPct": 17, 
                "share": 65, 
                "stusps": "MN"
            }, 
            {
                "hPct": 13, 
                "share": 57, 
                "stusps": "TX"
            }, 
            {
                "hPct": 14, 
                "share": 64, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Oppose", 
        "label": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "leaderLabel": "Oppose changing to single government health plan", 
        "median_hpct": 48.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4152, 
        "question_label": "SINGLEPAYER20", 
        "question_label_full": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "row": 2, 
        "rowLabel": "OPPOSE", 
        "rowText": "Oppose", 
        "states": [
            {
                "hPct": 67, 
                "share": 45, 
                "stusps": "VA"
            }, 
            {
                "hPct": 42, 
                "share": 23, 
                "stusps": "VT"
            }, 
            {
                "hPct": 54, 
                "share": 41, 
                "stusps": "NC"
            }, 
            {
                "hPct": 76, 
                "share": 43, 
                "stusps": "AL"
            }, 
            {
                "hPct": 56, 
                "share": 28, 
                "stusps": "ME"
            }, 
            {
                "hPct": 46, 
                "share": 45, 
                "stusps": "MA"
            }, 
            {
                "hPct": 40, 
                "share": 43, 
                "stusps": "OK"
            }, 
            {
                "hPct": 51, 
                "share": 43, 
                "stusps": "TN"
            }, 
            {
                "hPct": 24, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 64, 
                "share": 35, 
                "stusps": "MN"
            }, 
            {
                "hPct": 46, 
                "share": 33, 
                "stusps": "TX"
            }, 
            {
                "hPct": 30, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Oppose", 
        "label": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "leaderLabel": "Oppose changing to single government health plan", 
        "median_hpct": 17.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4152, 
        "question_label": "SINGLEPAYER20", 
        "question_label_full": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "row": 2, 
        "rowLabel": "OPPOSE", 
        "rowText": "Oppose", 
        "states": [
            {
                "hPct": 9, 
                "share": 45, 
                "stusps": "VA"
            }, 
            {
                "hPct": 14, 
                "share": 23, 
                "stusps": "VT"
            }, 
            {
                "hPct": 17, 
                "share": 41, 
                "stusps": "NC"
            }, 
            {
                "hPct": 12, 
                "share": 43, 
                "stusps": "AL"
            }, 
            {
                "hPct": 15, 
                "share": 28, 
                "stusps": "ME"
            }, 
            {
                "hPct": 18, 
                "share": 45, 
                "stusps": "MA"
            }, 
            {
                "hPct": 21, 
                "share": 43, 
                "stusps": "OK"
            }, 
            {
                "hPct": 26, 
                "share": 43, 
                "stusps": "TN"
            }, 
            {
                "hPct": 21, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 11, 
                "share": 35, 
                "stusps": "MN"
            }, 
            {
                "hPct": 19, 
                "share": 33, 
                "stusps": "TX"
            }, 
            {
                "hPct": 29, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Oppose", 
        "label": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "leaderLabel": "Oppose changing to single government health plan", 
        "median_hpct": 11, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4152, 
        "question_label": "SINGLEPAYER20", 
        "question_label_full": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "row": 2, 
        "rowLabel": "OPPOSE", 
        "rowText": "Oppose", 
        "states": [
            {
                "hPct": 12, 
                "share": 45, 
                "stusps": "VA"
            }, 
            {
                "hPct": 25, 
                "share": 23, 
                "stusps": "VT"
            }, 
            {
                "hPct": 12, 
                "share": 41, 
                "stusps": "NC"
            }, 
            {
                "hPct": 5, 
                "share": 43, 
                "stusps": "AL"
            }, 
            {
                "hPct": 8, 
                "share": 28, 
                "stusps": "ME"
            }, 
            {
                "hPct": 13, 
                "share": 45, 
                "stusps": "MA"
            }, 
            {
                "hPct": 6, 
                "share": 43, 
                "stusps": "OK"
            }, 
            {
                "hPct": 9, 
                "share": 43, 
                "stusps": "TN"
            }, 
            {
                "hPct": 10, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 6, 
                "share": 35, 
                "stusps": "MN"
            }, 
            {
                "hPct": 13, 
                "share": 33, 
                "stusps": "TX"
            }, 
            {
                "hPct": 14, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Oppose", 
        "label": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "leaderLabel": "Oppose changing to single government health plan", 
        "median_hpct": 8, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4152, 
        "question_label": "SINGLEPAYER20", 
        "question_label_full": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "row": 2, 
        "rowLabel": "OPPOSE", 
        "rowText": "Oppose", 
        "states": [
            {
                "hPct": 7, 
                "share": 45, 
                "stusps": "VA"
            }, 
            {
                "hPct": 10, 
                "share": 23, 
                "stusps": "VT"
            }, 
            {
                "hPct": 5, 
                "share": 41, 
                "stusps": "NC"
            }, 
            {
                "hPct": 2, 
                "share": 43, 
                "stusps": "AL"
            }, 
            {
                "hPct": 10, 
                "share": 28, 
                "stusps": "ME"
            }, 
            {
                "hPct": 14, 
                "share": 45, 
                "stusps": "MA"
            }, 
            {
                "hPct": 13, 
                "share": 43, 
                "stusps": "OK"
            }, 
            {
                "hPct": 5, 
                "share": 43, 
                "stusps": "TN"
            }, 
            {
                "hPct": 10, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 8, 
                "share": 35, 
                "stusps": "MN"
            }, 
            {
                "hPct": 8, 
                "share": 33, 
                "stusps": "TX"
            }, 
            {
                "hPct": 6, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Support", 
        "label": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "leaderLabel": "Support changing to single government health plan", 
        "median_hpct": 25.5, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4152, 
        "question_label": "SINGLEPAYER20", 
        "question_label_full": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "row": 1, 
        "rowLabel": "SUPPORT", 
        "rowText": "Support", 
        "states": [
            {
                "hPct": 42, 
                "share": 52, 
                "stusps": "VA"
            }, 
            {
                "hPct": 14, 
                "share": 73, 
                "stusps": "VT"
            }, 
            {
                "hPct": 34, 
                "share": 55, 
                "stusps": "NC"
            }, 
            {
                "hPct": 50, 
                "share": 51, 
                "stusps": "AL"
            }, 
            {
                "hPct": 24, 
                "share": 69, 
                "stusps": "ME"
            }, 
            {
                "hPct": 23, 
                "share": 50, 
                "stusps": "MA"
            }, 
            {
                "hPct": 33, 
                "share": 53, 
                "stusps": "OK"
            }, 
            {
                "hPct": 32, 
                "share": 53, 
                "stusps": "TN"
            }, 
            {
                "hPct": 7, 
                "share": 57, 
                "stusps": "CO"
            }, 
            {
                "hPct": 26, 
                "share": 62, 
                "stusps": "MN"
            }, 
            {
                "hPct": 25, 
                "share": 64, 
                "stusps": "TX"
            }, 
            {
                "hPct": 12, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Support", 
        "label": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "leaderLabel": "Support changing to single government health plan", 
        "median_hpct": 9, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4152, 
        "question_label": "SINGLEPAYER20", 
        "question_label_full": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "row": 1, 
        "rowLabel": "SUPPORT", 
        "rowText": "Support", 
        "states": [
            {
                "hPct": 7, 
                "share": 52, 
                "stusps": "VA"
            }, 
            {
                "hPct": 7, 
                "share": 73, 
                "stusps": "VT"
            }, 
            {
                "hPct": 10, 
                "share": 55, 
                "stusps": "NC"
            }, 
            {
                "hPct": 12, 
                "share": 51, 
                "stusps": "AL"
            }, 
            {
                "hPct": 9, 
                "share": 69, 
                "stusps": "ME"
            }, 
            {
                "hPct": 6, 
                "share": 50, 
                "stusps": "MA"
            }, 
            {
                "hPct": 9, 
                "share": 53, 
                "stusps": "OK"
            }, 
            {
                "hPct": 9, 
                "share": 53, 
                "stusps": "TN"
            }, 
            {
                "hPct": 9, 
                "share": 57, 
                "stusps": "CO"
            }, 
            {
                "hPct": 6, 
                "share": 62, 
                "stusps": "MN"
            }, 
            {
                "hPct": 14, 
                "share": 64, 
                "stusps": "TX"
            }, 
            {
                "hPct": 9, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Support", 
        "label": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "leaderLabel": "Support changing to single government health plan", 
        "median_hpct": 40, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4152, 
        "question_label": "SINGLEPAYER20", 
        "question_label_full": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "row": 1, 
        "rowLabel": "SUPPORT", 
        "rowText": "Support", 
        "states": [
            {
                "hPct": 33, 
                "share": 52, 
                "stusps": "VA"
            }, 
            {
                "hPct": 62, 
                "share": 73, 
                "stusps": "VT"
            }, 
            {
                "hPct": 36, 
                "share": 55, 
                "stusps": "NC"
            }, 
            {
                "hPct": 27, 
                "share": 51, 
                "stusps": "AL"
            }, 
            {
                "hPct": 44, 
                "share": 69, 
                "stusps": "ME"
            }, 
            {
                "hPct": 41, 
                "share": 50, 
                "stusps": "MA"
            }, 
            {
                "hPct": 38, 
                "share": 53, 
                "stusps": "OK"
            }, 
            {
                "hPct": 38, 
                "share": 53, 
                "stusps": "TN"
            }, 
            {
                "hPct": 49, 
                "share": 57, 
                "stusps": "CO"
            }, 
            {
                "hPct": 44, 
                "share": 62, 
                "stusps": "MN"
            }, 
            {
                "hPct": 39, 
                "share": 64, 
                "stusps": "TX"
            }, 
            {
                "hPct": 47, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Support", 
        "label": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "leaderLabel": "Support changing to single government health plan", 
        "median_hpct": 15, 
        "median_stcount": 12, 
        "num_row": 2, 
        "question_id": 4152, 
        "question_label": "SINGLEPAYER20", 
        "question_label_full": "How do you feel about replacing all private health insurance with a single government plan for everyone?", 
        "row": 1, 
        "rowLabel": "SUPPORT", 
        "rowText": "Support", 
        "states": [
            {
                "hPct": 15, 
                "share": 52, 
                "stusps": "VA"
            }, 
            {
                "hPct": 14, 
                "share": 73, 
                "stusps": "VT"
            }, 
            {
                "hPct": 14, 
                "share": 55, 
                "stusps": "NC"
            }, 
            {
                "hPct": 9, 
                "share": 51, 
                "stusps": "AL"
            }, 
            {
                "hPct": 20, 
                "share": 69, 
                "stusps": "ME"
            }, 
            {
                "hPct": 27, 
                "share": 50, 
                "stusps": "MA"
            }, 
            {
                "hPct": 15, 
                "share": 53, 
                "stusps": "OK"
            }, 
            {
                "hPct": 14, 
                "share": 53, 
                "stusps": "TN"
            }, 
            {
                "hPct": 19, 
                "share": 57, 
                "stusps": "CO"
            }, 
            {
                "hPct": 20, 
                "share": 62, 
                "stusps": "MN"
            }, 
            {
                "hPct": 15, 
                "share": 64, 
                "stusps": "TX"
            }, 
            {
                "hPct": 16, 
                "share": 55, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Climate change", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Climate change", 
        "median_hpct": 34, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 3, 
        "rowLabel": "CLIMATE", 
        "rowText": "Climate change", 
        "states": [
            {
                "hPct": 53, 
                "share": 18, 
                "stusps": "VA"
            }, 
            {
                "hPct": 19, 
                "share": 29, 
                "stusps": "VT"
            }, 
            {
                "hPct": 36, 
                "share": 22, 
                "stusps": "NC"
            }, 
            {
                "hPct": 64, 
                "share": 11, 
                "stusps": "AL"
            }, 
            {
                "hPct": 35, 
                "share": 28, 
                "stusps": "ME"
            }, 
            {
                "hPct": 34, 
                "share": 27, 
                "stusps": "MA"
            }, 
            {
                "hPct": 27, 
                "share": 15, 
                "stusps": "OK"
            }, 
            {
                "hPct": 34, 
                "share": 19, 
                "stusps": "TN"
            }, 
            {
                "hPct": 18, 
                "share": 25, 
                "stusps": "CO"
            }, 
            {
                "hPct": 43, 
                "share": 24, 
                "stusps": "MN"
            }, 
            {
                "hPct": 31, 
                "share": 16, 
                "stusps": "TX"
            }, 
            {
                "hPct": 23, 
                "share": 25, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Climate change", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Climate change", 
        "median_hpct": 11.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 3, 
        "rowLabel": "CLIMATE", 
        "rowText": "Climate change", 
        "states": [
            {
                "hPct": 10, 
                "share": 18, 
                "stusps": "VA"
            }, 
            {
                "hPct": 6, 
                "share": 29, 
                "stusps": "VT"
            }, 
            {
                "hPct": 15, 
                "share": 22, 
                "stusps": "NC"
            }, 
            {
                "hPct": 6, 
                "share": 11, 
                "stusps": "AL"
            }, 
            {
                "hPct": 11, 
                "share": 28, 
                "stusps": "ME"
            }, 
            {
                "hPct": 12, 
                "share": 27, 
                "stusps": "MA"
            }, 
            {
                "hPct": 22, 
                "share": 15, 
                "stusps": "OK"
            }, 
            {
                "hPct": 16, 
                "share": 19, 
                "stusps": "TN"
            }, 
            {
                "hPct": 11, 
                "share": 25, 
                "stusps": "CO"
            }, 
            {
                "hPct": 8, 
                "share": 24, 
                "stusps": "MN"
            }, 
            {
                "hPct": 13, 
                "share": 16, 
                "stusps": "TX"
            }, 
            {
                "hPct": 16, 
                "share": 25, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Climate change", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Climate change", 
        "median_hpct": 28.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 3, 
        "rowLabel": "CLIMATE", 
        "rowText": "Climate change", 
        "states": [
            {
                "hPct": 22, 
                "share": 18, 
                "stusps": "VA"
            }, 
            {
                "hPct": 53, 
                "share": 29, 
                "stusps": "VT"
            }, 
            {
                "hPct": 23, 
                "share": 22, 
                "stusps": "NC"
            }, 
            {
                "hPct": 26, 
                "share": 11, 
                "stusps": "AL"
            }, 
            {
                "hPct": 32, 
                "share": 28, 
                "stusps": "ME"
            }, 
            {
                "hPct": 27, 
                "share": 27, 
                "stusps": "MA"
            }, 
            {
                "hPct": 29, 
                "share": 15, 
                "stusps": "OK"
            }, 
            {
                "hPct": 29, 
                "share": 19, 
                "stusps": "TN"
            }, 
            {
                "hPct": 28, 
                "share": 25, 
                "stusps": "CO"
            }, 
            {
                "hPct": 27, 
                "share": 24, 
                "stusps": "MN"
            }, 
            {
                "hPct": 29, 
                "share": 16, 
                "stusps": "TX"
            }, 
            {
                "hPct": 29, 
                "share": 25, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Climate change", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Climate change", 
        "median_hpct": 14.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 3, 
        "rowLabel": "CLIMATE", 
        "rowText": "Climate change", 
        "states": [
            {
                "hPct": 11, 
                "share": 18, 
                "stusps": "VA"
            }, 
            {
                "hPct": 15, 
                "share": 29, 
                "stusps": "VT"
            }, 
            {
                "hPct": 13, 
                "share": 22, 
                "stusps": "NC"
            }, 
            {
                "hPct": 3, 
                "share": 11, 
                "stusps": "AL"
            }, 
            {
                "hPct": 16, 
                "share": 28, 
                "stusps": "ME"
            }, 
            {
                "hPct": 22, 
                "share": 27, 
                "stusps": "MA"
            }, 
            {
                "hPct": 16, 
                "share": 15, 
                "stusps": "OK"
            }, 
            {
                "hPct": 11, 
                "share": 19, 
                "stusps": "TN"
            }, 
            {
                "hPct": 20, 
                "share": 25, 
                "stusps": "CO"
            }, 
            {
                "hPct": 18, 
                "share": 24, 
                "stusps": "MN"
            }, 
            {
                "hPct": 14, 
                "share": 16, 
                "stusps": "TX"
            }, 
            {
                "hPct": 14, 
                "share": 25, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Health care", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Health care", 
        "median_hpct": 38.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 2, 
        "rowLabel": "HEALTHCARE", 
        "rowText": "Health care", 
        "states": [
            {
                "hPct": 55, 
                "share": 42, 
                "stusps": "VA"
            }, 
            {
                "hPct": 21, 
                "share": 41, 
                "stusps": "VT"
            }, 
            {
                "hPct": 43, 
                "share": 42, 
                "stusps": "NC"
            }, 
            {
                "hPct": 62, 
                "share": 47, 
                "stusps": "AL"
            }, 
            {
                "hPct": 35, 
                "share": 45, 
                "stusps": "ME"
            }, 
            {
                "hPct": 37, 
                "share": 38, 
                "stusps": "MA"
            }, 
            {
                "hPct": 40, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 43, 
                "share": 44, 
                "stusps": "TN"
            }, 
            {
                "hPct": 18, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 42, 
                "share": 46, 
                "stusps": "MN"
            }, 
            {
                "hPct": 34, 
                "share": 47, 
                "stusps": "TX"
            }, 
            {
                "hPct": 22, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Health care", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Health care", 
        "median_hpct": 13.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 2, 
        "rowLabel": "HEALTHCARE", 
        "rowText": "Health care", 
        "states": [
            {
                "hPct": 11, 
                "share": 42, 
                "stusps": "VA"
            }, 
            {
                "hPct": 13, 
                "share": 41, 
                "stusps": "VT"
            }, 
            {
                "hPct": 13, 
                "share": 42, 
                "stusps": "NC"
            }, 
            {
                "hPct": 15, 
                "share": 47, 
                "stusps": "AL"
            }, 
            {
                "hPct": 13, 
                "share": 45, 
                "stusps": "ME"
            }, 
            {
                "hPct": 11, 
                "share": 38, 
                "stusps": "MA"
            }, 
            {
                "hPct": 14, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 17, 
                "share": 44, 
                "stusps": "TN"
            }, 
            {
                "hPct": 16, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 9, 
                "share": 46, 
                "stusps": "MN"
            }, 
            {
                "hPct": 14, 
                "share": 47, 
                "stusps": "TX"
            }, 
            {
                "hPct": 15, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Health care", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Health care", 
        "median_hpct": 29.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 2, 
        "rowLabel": "HEALTHCARE", 
        "rowText": "Health care", 
        "states": [
            {
                "hPct": 21, 
                "share": 42, 
                "stusps": "VA"
            }, 
            {
                "hPct": 54, 
                "share": 41, 
                "stusps": "VT"
            }, 
            {
                "hPct": 26, 
                "share": 42, 
                "stusps": "NC"
            }, 
            {
                "hPct": 15, 
                "share": 47, 
                "stusps": "AL"
            }, 
            {
                "hPct": 34, 
                "share": 45, 
                "stusps": "ME"
            }, 
            {
                "hPct": 28, 
                "share": 38, 
                "stusps": "MA"
            }, 
            {
                "hPct": 21, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 27, 
                "share": 44, 
                "stusps": "TN"
            }, 
            {
                "hPct": 31, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 31, 
                "share": 46, 
                "stusps": "MN"
            }, 
            {
                "hPct": 32, 
                "share": 47, 
                "stusps": "TX"
            }, 
            {
                "hPct": 34, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Health care", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Health care", 
        "median_hpct": 10, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 2, 
        "rowLabel": "HEALTHCARE", 
        "rowText": "Health care", 
        "states": [
            {
                "hPct": 10, 
                "share": 42, 
                "stusps": "VA"
            }, 
            {
                "hPct": 10, 
                "share": 41, 
                "stusps": "VT"
            }, 
            {
                "hPct": 9, 
                "share": 42, 
                "stusps": "NC"
            }, 
            {
                "hPct": 5, 
                "share": 47, 
                "stusps": "AL"
            }, 
            {
                "hPct": 14, 
                "share": 45, 
                "stusps": "ME"
            }, 
            {
                "hPct": 18, 
                "share": 38, 
                "stusps": "MA"
            }, 
            {
                "hPct": 13, 
                "share": 50, 
                "stusps": "OK"
            }, 
            {
                "hPct": 8, 
                "share": 44, 
                "stusps": "TN"
            }, 
            {
                "hPct": 12, 
                "share": 36, 
                "stusps": "CO"
            }, 
            {
                "hPct": 12, 
                "share": 46, 
                "stusps": "MN"
            }, 
            {
                "hPct": 10, 
                "share": 47, 
                "stusps": "TX"
            }, 
            {
                "hPct": 10, 
                "share": 35, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Income inequality", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Income inequality", 
        "median_hpct": 28, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 4, 
        "rowLabel": "INCOMEINEQ", 
        "rowText": "Income inequality", 
        "states": [
            {
                "hPct": 44, 
                "share": 22, 
                "stusps": "VA"
            }, 
            {
                "hPct": 17, 
                "share": 21, 
                "stusps": "VT"
            }, 
            {
                "hPct": 39, 
                "share": 19, 
                "stusps": "NC"
            }, 
            {
                "hPct": 53, 
                "share": 18, 
                "stusps": "AL"
            }, 
            {
                "hPct": 22, 
                "share": 18, 
                "stusps": "ME"
            }, 
            {
                "hPct": 24, 
                "share": 20, 
                "stusps": "MA"
            }, 
            {
                "hPct": 33, 
                "share": 20, 
                "stusps": "OK"
            }, 
            {
                "hPct": 37, 
                "share": 19, 
                "stusps": "TN"
            }, 
            {
                "hPct": 8, 
                "share": 23, 
                "stusps": "CO"
            }, 
            {
                "hPct": 30, 
                "share": 18, 
                "stusps": "MN"
            }, 
            {
                "hPct": 26, 
                "share": 19, 
                "stusps": "TX"
            }, 
            {
                "hPct": 12, 
                "share": 24, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Income inequality", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Income inequality", 
        "median_hpct": 9, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 4, 
        "rowLabel": "INCOMEINEQ", 
        "rowText": "Income inequality", 
        "states": [
            {
                "hPct": 7, 
                "share": 22, 
                "stusps": "VA"
            }, 
            {
                "hPct": 5, 
                "share": 21, 
                "stusps": "VT"
            }, 
            {
                "hPct": 11, 
                "share": 19, 
                "stusps": "NC"
            }, 
            {
                "hPct": 7, 
                "share": 18, 
                "stusps": "AL"
            }, 
            {
                "hPct": 3, 
                "share": 18, 
                "stusps": "ME"
            }, 
            {
                "hPct": 6, 
                "share": 20, 
                "stusps": "MA"
            }, 
            {
                "hPct": 14, 
                "share": 20, 
                "stusps": "OK"
            }, 
            {
                "hPct": 14, 
                "share": 19, 
                "stusps": "TN"
            }, 
            {
                "hPct": 13, 
                "share": 23, 
                "stusps": "CO"
            }, 
            {
                "hPct": 5, 
                "share": 18, 
                "stusps": "MN"
            }, 
            {
                "hPct": 18, 
                "share": 19, 
                "stusps": "TX"
            }, 
            {
                "hPct": 12, 
                "share": 24, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Income inequality", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Income inequality", 
        "median_hpct": 35, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 4, 
        "rowLabel": "INCOMEINEQ", 
        "rowText": "Income inequality", 
        "states": [
            {
                "hPct": 28, 
                "share": 22, 
                "stusps": "VA"
            }, 
            {
                "hPct": 57, 
                "share": 21, 
                "stusps": "VT"
            }, 
            {
                "hPct": 25, 
                "share": 19, 
                "stusps": "NC"
            }, 
            {
                "hPct": 26, 
                "share": 18, 
                "stusps": "AL"
            }, 
            {
                "hPct": 42, 
                "share": 18, 
                "stusps": "ME"
            }, 
            {
                "hPct": 38, 
                "share": 20, 
                "stusps": "MA"
            }, 
            {
                "hPct": 31, 
                "share": 20, 
                "stusps": "OK"
            }, 
            {
                "hPct": 25, 
                "share": 19, 
                "stusps": "TN"
            }, 
            {
                "hPct": 41, 
                "share": 23, 
                "stusps": "CO"
            }, 
            {
                "hPct": 39, 
                "share": 18, 
                "stusps": "MN"
            }, 
            {
                "hPct": 32, 
                "share": 19, 
                "stusps": "TX"
            }, 
            {
                "hPct": 45, 
                "share": 24, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Income inequality", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Income inequality", 
        "median_hpct": 17.5, 
        "median_stcount": 12, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 4, 
        "rowLabel": "INCOMEINEQ", 
        "rowText": "Income inequality", 
        "states": [
            {
                "hPct": 17, 
                "share": 22, 
                "stusps": "VA"
            }, 
            {
                "hPct": 16, 
                "share": 21, 
                "stusps": "VT"
            }, 
            {
                "hPct": 16, 
                "share": 19, 
                "stusps": "NC"
            }, 
            {
                "hPct": 10, 
                "share": 18, 
                "stusps": "AL"
            }, 
            {
                "hPct": 27, 
                "share": 18, 
                "stusps": "ME"
            }, 
            {
                "hPct": 30, 
                "share": 20, 
                "stusps": "MA"
            }, 
            {
                "hPct": 16, 
                "share": 20, 
                "stusps": "OK"
            }, 
            {
                "hPct": 20, 
                "share": 19, 
                "stusps": "TN"
            }, 
            {
                "hPct": 20, 
                "share": 23, 
                "stusps": "CO"
            }, 
            {
                "hPct": 18, 
                "share": 18, 
                "stusps": "MN"
            }, 
            {
                "hPct": 16, 
                "share": 19, 
                "stusps": "TX"
            }, 
            {
                "hPct": 19, 
                "share": 24, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Race relations", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Race relations", 
        "median_hpct": 47.5, 
        "median_stcount": 8, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 1, 
        "rowLabel": "RACERELATIONS", 
        "rowText": "Race relations", 
        "states": [
            {
                "hPct": 60, 
                "share": 12, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "VT"
            }, 
            {
                "hPct": 47, 
                "share": 13, 
                "stusps": "NC"
            }, 
            {
                "hPct": 69, 
                "share": 18, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "ME"
            }, 
            {
                "hPct": 49, 
                "share": 7, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 48, 
                "share": 11, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "CO"
            }, 
            {
                "hPct": 44, 
                "share": 7, 
                "stusps": "MN"
            }, 
            {
                "hPct": 42, 
                "share": 14, 
                "stusps": "TX"
            }, 
            {
                "hPct": 28, 
                "share": 8, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Race relations", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Race relations", 
        "median_hpct": 14, 
        "median_stcount": 8, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 1, 
        "rowLabel": "RACERELATIONS", 
        "rowText": "Race relations", 
        "states": [
            {
                "hPct": 8, 
                "share": 12, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "VT"
            }, 
            {
                "hPct": 15, 
                "share": 13, 
                "stusps": "NC"
            }, 
            {
                "hPct": 12, 
                "share": 18, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "ME"
            }, 
            {
                "hPct": 14, 
                "share": 7, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 14, 
                "share": 11, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "CO"
            }, 
            {
                "hPct": 8, 
                "share": 7, 
                "stusps": "MN"
            }, 
            {
                "hPct": 18, 
                "share": 14, 
                "stusps": "TX"
            }, 
            {
                "hPct": 19, 
                "share": 8, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Race relations", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Race relations", 
        "median_hpct": 22, 
        "median_stcount": 8, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 1, 
        "rowLabel": "RACERELATIONS", 
        "rowText": "Race relations", 
        "states": [
            {
                "hPct": 24, 
                "share": 12, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "VT"
            }, 
            {
                "hPct": 23, 
                "share": 13, 
                "stusps": "NC"
            }, 
            {
                "hPct": 8, 
                "share": 18, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "ME"
            }, 
            {
                "hPct": 15, 
                "share": 7, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 21, 
                "share": 11, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "CO"
            }, 
            {
                "hPct": 20, 
                "share": 7, 
                "stusps": "MN"
            }, 
            {
                "hPct": 25, 
                "share": 14, 
                "stusps": "TX"
            }, 
            {
                "hPct": 29, 
                "share": 8, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Race relations", 
        "label": "Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)", 
        "leaderLabel": "Top issue: Race relations", 
        "median_hpct": 9, 
        "median_stcount": 8, 
        "num_row": 4, 
        "question_id": 4209, 
        "question_label": "ISSDEM20B", 
        "question_label_full": "Most important issue in vote", 
        "row": 1, 
        "rowLabel": "RACERELATIONS", 
        "rowText": "Race relations", 
        "states": [
            {
                "hPct": 7, 
                "share": 12, 
                "stusps": "VA"
            }, 
            {
                "hPct": 0, 
                "share": 3, 
                "stusps": "VT"
            }, 
            {
                "hPct": 8, 
                "share": 13, 
                "stusps": "NC"
            }, 
            {
                "hPct": 6, 
                "share": 18, 
                "stusps": "AL"
            }, 
            {
                "hPct": 0, 
                "share": 4, 
                "stusps": "ME"
            }, 
            {
                "hPct": 16, 
                "share": 7, 
                "stusps": "MA"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "OK"
            }, 
            {
                "hPct": 10, 
                "share": 11, 
                "stusps": "TN"
            }, 
            {
                "hPct": 0, 
                "share": 7, 
                "stusps": "CO"
            }, 
            {
                "hPct": 19, 
                "share": 7, 
                "stusps": "MN"
            }, 
            {
                "hPct": 8, 
                "share": 14, 
                "stusps": "TX"
            }, 
            {
                "hPct": 13, 
                "share": 8, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Favorable", 
        "label": "Is your opinion of socialism:", 
        "leaderLabel": "Favorable view of socialism", 
        "median_hpct": 24, 
        "median_stcount": 5, 
        "num_row": 2, 
        "question_id": 4212, 
        "question_label": "FAVSOCIALISM", 
        "question_label_full": "Is your opinion of socialism...", 
        "row": 1, 
        "rowLabel": "FAVORABLE", 
        "rowText": "Favorable", 
        "states": [
            {
                "hPct": 33, 
                "share": 50, 
                "stusps": "NC"
            }, 
            {
                "hPct": 21, 
                "share": 60, 
                "stusps": "ME"
            }, 
            {
                "hPct": 33, 
                "share": 47, 
                "stusps": "TN"
            }, 
            {
                "hPct": 24, 
                "share": 56, 
                "stusps": "TX"
            }, 
            {
                "hPct": 13, 
                "share": 52, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Favorable", 
        "label": "Is your opinion of socialism:", 
        "leaderLabel": "Favorable view of socialism", 
        "median_hpct": 9, 
        "median_stcount": 5, 
        "num_row": 2, 
        "question_id": 4212, 
        "question_label": "FAVSOCIALISM", 
        "question_label_full": "Is your opinion of socialism...", 
        "row": 1, 
        "rowLabel": "FAVORABLE", 
        "rowText": "Favorable", 
        "states": [
            {
                "hPct": 9, 
                "share": 50, 
                "stusps": "NC"
            }, 
            {
                "hPct": 6, 
                "share": 60, 
                "stusps": "ME"
            }, 
            {
                "hPct": 8, 
                "share": 47, 
                "stusps": "TN"
            }, 
            {
                "hPct": 12, 
                "share": 56, 
                "stusps": "TX"
            }, 
            {
                "hPct": 9, 
                "share": 52, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Favorable", 
        "label": "Is your opinion of socialism:", 
        "leaderLabel": "Favorable view of socialism", 
        "median_hpct": 41, 
        "median_stcount": 5, 
        "num_row": 2, 
        "question_id": 4212, 
        "question_label": "FAVSOCIALISM", 
        "question_label_full": "Is your opinion of socialism...", 
        "row": 1, 
        "rowLabel": "FAVORABLE", 
        "rowText": "Favorable", 
        "states": [
            {
                "hPct": 35, 
                "share": 50, 
                "stusps": "NC"
            }, 
            {
                "hPct": 49, 
                "share": 60, 
                "stusps": "ME"
            }, 
            {
                "hPct": 38, 
                "share": 47, 
                "stusps": "TN"
            }, 
            {
                "hPct": 41, 
                "share": 56, 
                "stusps": "TX"
            }, 
            {
                "hPct": 47, 
                "share": 52, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Favorable", 
        "label": "Is your opinion of socialism:", 
        "leaderLabel": "Favorable view of socialism", 
        "median_hpct": 16, 
        "median_stcount": 5, 
        "num_row": 2, 
        "question_id": 4212, 
        "question_label": "FAVSOCIALISM", 
        "question_label_full": "Is your opinion of socialism...", 
        "row": 1, 
        "rowLabel": "FAVORABLE", 
        "rowText": "Favorable", 
        "states": [
            {
                "hPct": 16, 
                "share": 50, 
                "stusps": "NC"
            }, 
            {
                "hPct": 22, 
                "share": 60, 
                "stusps": "ME"
            }, 
            {
                "hPct": 15, 
                "share": 47, 
                "stusps": "TN"
            }, 
            {
                "hPct": 16, 
                "share": 56, 
                "stusps": "TX"
            }, 
            {
                "hPct": 19, 
                "share": 52, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "biden", 
        "displayRowText": "Unfavorable", 
        "label": "Is your opinion of socialism:", 
        "leaderLabel": "Unfavorable view of socialism", 
        "median_hpct": 48, 
        "median_stcount": 5, 
        "num_row": 2, 
        "question_id": 4212, 
        "question_label": "FAVSOCIALISM", 
        "question_label_full": "Is your opinion of socialism...", 
        "row": 2, 
        "rowLabel": "UNFAVORABLE", 
        "rowText": "Unfavorable", 
        "states": [
            {
                "hPct": 53, 
                "share": 40, 
                "stusps": "NC"
            }, 
            {
                "hPct": 56, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 48, 
                "share": 44, 
                "stusps": "TN"
            }, 
            {
                "hPct": 44, 
                "share": 37, 
                "stusps": "TX"
            }, 
            {
                "hPct": 30, 
                "share": 34, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "bloomberg", 
        "displayRowText": "Unfavorable", 
        "label": "Is your opinion of socialism:", 
        "leaderLabel": "Unfavorable view of socialism", 
        "median_hpct": 21, 
        "median_stcount": 5, 
        "num_row": 2, 
        "question_id": 4212, 
        "question_label": "FAVSOCIALISM", 
        "question_label_full": "Is your opinion of socialism...", 
        "row": 2, 
        "rowLabel": "UNFAVORABLE", 
        "rowText": "Unfavorable", 
        "states": [
            {
                "hPct": 19, 
                "share": 40, 
                "stusps": "NC"
            }, 
            {
                "hPct": 19, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 26, 
                "share": 44, 
                "stusps": "TN"
            }, 
            {
                "hPct": 21, 
                "share": 37, 
                "stusps": "TX"
            }, 
            {
                "hPct": 24, 
                "share": 34, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "sanders", 
        "displayRowText": "Unfavorable", 
        "label": "Is your opinion of socialism:", 
        "leaderLabel": "Unfavorable view of socialism", 
        "median_hpct": 14, 
        "median_stcount": 5, 
        "num_row": 2, 
        "question_id": 4212, 
        "question_label": "FAVSOCIALISM", 
        "question_label_full": "Is your opinion of socialism...", 
        "row": 2, 
        "rowLabel": "UNFAVORABLE", 
        "rowText": "Unfavorable", 
        "states": [
            {
                "hPct": 14, 
                "share": 40, 
                "stusps": "NC"
            }, 
            {
                "hPct": 6, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 11, 
                "share": 44, 
                "stusps": "TN"
            }, 
            {
                "hPct": 15, 
                "share": 37, 
                "stusps": "TX"
            }, 
            {
                "hPct": 18, 
                "share": 34, 
                "stusps": "CA"
            }
        ]
    }, 
    {
        "cand": "warren", 
        "displayRowText": "Unfavorable", 
        "label": "Is your opinion of socialism:", 
        "leaderLabel": "Unfavorable view of socialism", 
        "median_hpct": 7, 
        "median_stcount": 5, 
        "num_row": 2, 
        "question_id": 4212, 
        "question_label": "FAVSOCIALISM", 
        "question_label_full": "Is your opinion of socialism...", 
        "row": 2, 
        "rowLabel": "UNFAVORABLE", 
        "rowText": "Unfavorable", 
        "states": [
            {
                "hPct": 6, 
                "share": 40, 
                "stusps": "NC"
            }, 
            {
                "hPct": 8, 
                "share": 32, 
                "stusps": "ME"
            }, 
            {
                "hPct": 5, 
                "share": 44, 
                "stusps": "TN"
            }, 
            {
                "hPct": 8, 
                "share": 37, 
                "stusps": "TX"
            }, 
            {
                "hPct": 7, 
                "share": 34, 
                "stusps": "CA"
            }
        ]
    }
]
                        
                        ')
		}, function(e) {
			e.exports = JSON.parse('{"max":78}')
		}, function(e) {
			e.exports = JSON.parse('[{"candidate":"biden","groups":[{"questionLabel":"SEX","leaderLabel":"Women","diff":"10.5"},{"questionLabel":"RACE","leaderLabel":"Black","diff":"40.5"},{"questionLabel":"AGE","leaderLabel":"Ages 45 to 64","diff":"22.0"},{"questionLabel":"AGE","leaderLabel":"Ages 65 and older","diff":"29.0"},{"questionLabel":"EDUCCOLL","leaderLabel":"College graduates","diff":"9.5"},{"questionLabel":"PARTY","leaderLabel":"Democrats","diff":"14.5"},{"questionLabel":"PHIL4","leaderLabel":"Somewhat liberal","diff":"10.5"},{"questionLabel":"PHIL4","leaderLabel":"Moderate or conservative","diff":"27.5"},{"questionLabel":"ISSDEM20B","leaderLabel":"Top issue: Race relations","diff":"25.5"},{"questionLabel":"ISSDEM20B","leaderLabel":"Top issue: Health care","diff":"9.0"},{"questionLabel":"WINORISS20","leaderLabel":"Prefer candidate who can beat Donald Trump","diff":"20.5"},{"questionLabel":"SINGLEPAYER20","leaderLabel":"Oppose changing to single government health plan","diff":"31.0"},{"questionLabel":"TIMEPRIFEWDAYS","leaderLabel":"Decided in last few days","diff":"30.0"},{"questionLabel":"FAVSOCIALISM","leaderLabel":"Unfavorable view of socialism","diff":"27.0"}]},{"candidate":"sanders","groups":[{"questionLabel":"RACE","leaderLabel":"Hispanic/Latino","diff":"9.0"},{"questionLabel":"AGE","leaderLabel":"Ages 30 to 44","diff":"18.5"},{"questionLabel":"PARTY","leaderLabel":"Independents or Something else","diff":"9.5"},{"questionLabel":"PHIL4","leaderLabel":"Very liberal","diff":"28.5"},{"questionLabel":"WINORISS20","leaderLabel":"Prefer candidate who agrees with you on issues","diff":"13.5"},{"questionLabel":"SINGLEPAYER20","leaderLabel":"Support changing to single government health plan","diff":"14.5"},{"questionLabel":"FAVSOCIALISM","leaderLabel":"Favorable view of socialism","diff":"17.0"},{"questionLabel":"AGE","leaderLabel":"Ages 18 to 29","diff":"41.0"}]}]')
		}, function(e) {
			e.exports = JSON.parse('[{"candidate":"biden","best":[{"cand":"biden","median_hpct":"57.5","median_stcount":"8.0","displayRowText":"Black","rowLabel":"BLACK","rowText":"Black","label":"Are you:","leaderLabel":"Black","question_id":"260","question_label":"RACE","question_label_full":"Race","tag":"best"},{"cand":"biden","median_hpct":"48.5","median_stcount":"12.0","displayRowText":"Oppose","rowLabel":"OPPOSE","rowText":"Oppose","label":"How do you feel about replacing all private health insurance with a single government plan for everyone?","leaderLabel":"Oppose changing to single government health plan","question_id":"4152","question_label":"SINGLEPAYER20","question_label_full":"How do you feel about replacing all private health insurance with a single government plan for everyone?","tag":"best"},{"cand":"biden","median_hpct":"48.0","median_stcount":"5.0","displayRowText":"Unfavorable","rowLabel":"UNFAVORABLE","rowText":"Unfavorable","label":"Is your opinion of socialism:","leaderLabel":"Unfavorable view of socialism","question_id":"4212","question_label":"FAVSOCIALISM","question_label_full":"Is your opinion of socialism...","tag":"best"},{"cand":"biden","median_hpct":"47.5","median_stcount":"12.0","displayRowText":"65+","rowLabel":"65+","rowText":"65 or over","label":"In which age group are you?","leaderLabel":"Ages 65 and older","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"best"},{"cand":"biden","median_hpct":"47.5","median_stcount":"8.0","displayRowText":"Race relations","rowLabel":"RACERELATIONS","rowText":"Race relations","label":"Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)","leaderLabel":"Top issue: Race relations","question_id":"4209","question_label":"ISSDEM20B","question_label_full":"Most important issue in vote","tag":"best"}],"worst":[{"cand":"biden","median_hpct":"16.5","median_stcount":"10.0","displayRowText":"18-29","rowLabel":"18-29","rowText":"18-29","label":"In which age group are you?","leaderLabel":"Ages 18 to 29","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"worst"},{"cand":"biden","median_hpct":"19.0","median_stcount":"12.0","displayRowText":"Very liberal","rowLabel":"VERYLIB","rowText":"Very liberal","label":"On most political matters, do you consider yourself:","leaderLabel":"Very liberal","question_id":"569","question_label":"PHIL4","question_label_full":"Ideology","tag":"worst"},{"cand":"biden","median_hpct":"22.5","median_stcount":"12.0","displayRowText":"30-44","rowLabel":"30-44","rowText":"30-44","label":"In which age group are you?","leaderLabel":"Ages 30 to 44","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"worst"},{"cand":"biden","median_hpct":"24.0","median_stcount":"5.0","displayRowText":"Favorable","rowLabel":"FAVORABLE","rowText":"Favorable","label":"Is your opinion of socialism:","leaderLabel":"Favorable view of socialism","question_id":"4212","question_label":"FAVSOCIALISM","question_label_full":"Is your opinion of socialism...","tag":"worst"},{"cand":"biden","median_hpct":"25.0","median_stcount":"12.0","displayRowText":"Agrees with you on major issues","rowLabel":"AGREEISS","rowText":"Agrees with you on major issues","label":"If you had to choose, would you rather see the Democratic Party nominate a candidate who:","leaderLabel":"Prefer candidate who agrees with you on issues","question_id":"4151","question_label":"WINORISS20","question_label_full":"Rather nominate a candidate who...","tag":"worst"}]},{"candidate":"sanders","best":[{"cand":"sanders","median_hpct":"57.5","median_stcount":"10.0","displayRowText":"18-29","rowLabel":"18-29","rowText":"18-29","label":"In which age group are you?","leaderLabel":"Ages 18 to 29","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"best"},{"cand":"sanders","median_hpct":"48.5","median_stcount":"12.0","displayRowText":"Very liberal","rowLabel":"VERYLIB","rowText":"Very liberal","label":"On most political matters, do you consider yourself:","leaderLabel":"Very liberal","question_id":"569","question_label":"PHIL4","question_label_full":"Ideology","tag":"best"},{"cand":"sanders","median_hpct":"41.0","median_stcount":"12.0","displayRowText":"30-44","rowLabel":"30-44","rowText":"30-44","label":"In which age group are you?","leaderLabel":"Ages 30 to 44","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"best"},{"cand":"sanders","median_hpct":"41.0","median_stcount":"5.0","displayRowText":"Favorable","rowLabel":"FAVORABLE","rowText":"Favorable","label":"Is your opinion of socialism:","leaderLabel":"Favorable view of socialism","question_id":"4212","question_label":"FAVSOCIALISM","question_label_full":"Is your opinion of socialism...","tag":"best"},{"cand":"sanders","median_hpct":"40.0","median_stcount":"12.0","displayRowText":"Support","rowLabel":"SUPPORT","rowText":"Support","label":"How do you feel about replacing all private health insurance with a single government plan for everyone?","leaderLabel":"Support changing to single government health plan","question_id":"4152","question_label":"SINGLEPAYER20","question_label_full":"How do you feel about replacing all private health insurance with a single government plan for everyone?","tag":"best"}],"worst":[{"cand":"sanders","median_hpct":"11.0","median_stcount":"12.0","displayRowText":"Oppose","rowLabel":"OPPOSE","rowText":"Oppose","label":"How do you feel about replacing all private health insurance with a single government plan for everyone?","leaderLabel":"Oppose changing to single government health plan","question_id":"4152","question_label":"SINGLEPAYER20","question_label_full":"How do you feel about replacing all private health insurance with a single government plan for everyone?","tag":"worst"},{"cand":"sanders","median_hpct":"14.0","median_stcount":"5.0","displayRowText":"Unfavorable","rowLabel":"UNFAVORABLE","rowText":"Unfavorable","label":"Is your opinion of socialism:","leaderLabel":"Unfavorable view of socialism","question_id":"4212","question_label":"FAVSOCIALISM","question_label_full":"Is your opinion of socialism...","tag":"worst"},{"cand":"sanders","median_hpct":"15.0","median_stcount":"12.0","displayRowText":"65+","rowLabel":"65+","rowText":"65 or over","label":"In which age group are you?","leaderLabel":"Ages 65 and older","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"worst"},{"cand":"sanders","median_hpct":"16.5","median_stcount":"12.0","displayRowText":"Moderate or conservative","rowLabel":"MODCON","rowText":"Moderate or conservative","label":"On most political matters, do you consider yourself:","leaderLabel":"Moderate or conservative","question_id":"569","question_label":"PHIL4","question_label_full":"Ideology","tag":"worst"},{"cand":"sanders","median_hpct":"17.0","median_stcount":"8.0","displayRowText":"Black","rowLabel":"BLACK","rowText":"Black","label":"Are you:","leaderLabel":"Black","question_id":"260","question_label":"RACE","question_label_full":"Race","tag":"worst"}]},{"candidate":"bloomberg","best":[{"cand":"bloomberg","median_hpct":"21.0","median_stcount":"5.0","displayRowText":"Unfavorable","rowLabel":"UNFAVORABLE","rowText":"Unfavorable","label":"Is your opinion of socialism:","leaderLabel":"Unfavorable view of socialism","question_id":"4212","question_label":"FAVSOCIALISM","question_label_full":"Is your opinion of socialism...","tag":"best"},{"cand":"bloomberg","median_hpct":"19.0","median_stcount":"12.0","displayRowText":"Moderate or conservative","rowLabel":"MODCON","rowText":"Moderate or conservative","label":"On most political matters, do you consider yourself:","leaderLabel":"Moderate or conservative","question_id":"569","question_label":"PHIL4","question_label_full":"Ideology","tag":"best"},{"cand":"bloomberg","median_hpct":"18.5","median_stcount":"12.0","displayRowText":"65+","rowLabel":"65+","rowText":"65 or over","label":"In which age group are you?","leaderLabel":"Ages 65 and older","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"best"},{"cand":"bloomberg","median_hpct":"17.5","median_stcount":"12.0","displayRowText":"Oppose","rowLabel":"OPPOSE","rowText":"Oppose","label":"How do you feel about replacing all private health insurance with a single government plan for everyone?","leaderLabel":"Oppose changing to single government health plan","question_id":"4152","question_label":"SINGLEPAYER20","question_label_full":"How do you feel about replacing all private health insurance with a single government plan for everyone?","tag":"best"},{"cand":"bloomberg","median_hpct":"15.0","median_stcount":"12.0","displayRowText":"45-64","rowLabel":"45-64","rowText":"45-64","label":"In which age group are you?","leaderLabel":"Ages 45 to 64","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"best"}],"worst":[{"cand":"bloomberg","median_hpct":"3.5","median_stcount":"10.0","displayRowText":"18-29","rowLabel":"18-29","rowText":"18-29","label":"In which age group are you?","leaderLabel":"Ages 18 to 29","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"worst"},{"cand":"bloomberg","median_hpct":"5.0","median_stcount":"12.0","displayRowText":"Very liberal","rowLabel":"VERYLIB","rowText":"Very liberal","label":"On most political matters, do you consider yourself:","leaderLabel":"Very liberal","question_id":"569","question_label":"PHIL4","question_label_full":"Ideology","tag":"worst"},{"cand":"bloomberg","median_hpct":"8.0","median_stcount":"12.0","displayRowText":"30-44","rowLabel":"30-44","rowText":"30-44","label":"In which age group are you?","leaderLabel":"Ages 30 to 44","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"worst"},{"cand":"bloomberg","median_hpct":"9.0","median_stcount":"12.0","displayRowText":"Income inequality","rowLabel":"INCOMEINEQ","rowText":"Income inequality","label":"Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)","leaderLabel":"Top issue: Income inequality","question_id":"4209","question_label":"ISSDEM20B","question_label_full":"Most important issue in vote","tag":"worst"},{"cand":"bloomberg","median_hpct":"9.0","median_stcount":"12.0","displayRowText":"Support","rowLabel":"SUPPORT","rowText":"Support","label":"How do you feel about replacing all private health insurance with a single government plan for everyone?","leaderLabel":"Support changing to single government health plan","question_id":"4152","question_label":"SINGLEPAYER20","question_label_full":"How do you feel about replacing all private health insurance with a single government plan for everyone?","tag":"worst"}]},{"candidate":"warren","best":[{"cand":"warren","median_hpct":"20.0","median_stcount":"12.0","displayRowText":"Very liberal","rowLabel":"VERYLIB","rowText":"Very liberal","label":"On most political matters, do you consider yourself:","leaderLabel":"Very liberal","question_id":"569","question_label":"PHIL4","question_label_full":"Ideology","tag":"best"},{"cand":"warren","median_hpct":"18.0","median_stcount":"12.0","displayRowText":"30-44","rowLabel":"30-44","rowText":"30-44","label":"In which age group are you?","leaderLabel":"Ages 30 to 44","question_id":"159","question_label":"AGE","question_label_full":"Age","tag":"best"},{"cand":"warren","median_hpct":"17.5","median_stcount":"12.0","displayRowText":"College graduate","rowLabel":"COLLEGEGRAD","rowText":"College graduate","label":"What was the last grade of school you completed?","leaderLabel":"College graduates","question_id":"1951","question_label":"EDUCCOLL","question_label_full":"Education","tag":"best"},{"cand":"warren","median_hpct":"17.5","median_stcount":"12.0","displayRowText":"Income inequality","rowLabel":"INCOMEINEQ","rowText":"Income inequality","label":"Which ONE of these four issues mattered most in deciding how you voted today? (CHECK ONLY ONE)","leaderLabel":"Top issue: Income inequality","question_id":"4209","question_label":"ISSDEM20B","question_label_full":"Most important issue in vote","tag":"best"},{"cand":"warren","median_hpct":"16.0","median_stcount":"12.0","displayRowText":"Somewhat liberal","rowLabel":"SOMEWHTLIB","rowText":"Somewhat liberal","label":"On most political matters, do you consider yourself:","leaderLabel":"Somewhat liberal","question_id":"569","question_label":"PHIL4","question_label_full":"Ideology","tag":"best"}],"worst":[{"cand":"warren","median_hpct":"5.0","median_stcount":"8.0","displayRowText":"Black","rowLabel":"BLACK","rowText":"Black","label":"Are you:","leaderLabel":"Black","question_id":"260","question_label":"RACE","question_label_full":"Race","tag":"worst"},{"cand":"warren","median_hpct":"6.0","median_stcount":"12.0","displayRowText":"Moderate or conservative","rowLabel":"MODCON","rowText":"Moderate or conservative","label":"On most political matters, do you consider yourself:","leaderLabel":"Moderate or conservative","question_id":"569","question_label":"PHIL4","question_label_full":"Ideology","tag":"worst"},{"cand":"warren","median_hpct":"7.0","median_stcount":"5.0","displayRowText":"Unfavorable","rowLabel":"UNFAVORABLE","rowText":"Unfavorable","label":"Is your opinion of socialism:","leaderLabel":"Unfavorable view of socialism","question_id":"4212","question_label":"FAVSOCIALISM","question_label_full":"Is your opinion of socialism...","tag":"worst"},{"cand":"warren","median_hpct":"7.5","median_stcount":"12.0","displayRowText":"No college degree","rowLabel":"NODEGREE","rowText":"No college degree","label":"What was the last grade of school you completed?","leaderLabel":"No college degree","question_id":"1951","question_label":"EDUCCOLL","question_label_full":"Education","tag":"worst"},{"cand":"warren","median_hpct":"8.0","median_stcount":"5.0","displayRowText":"Hispanic/Latino","rowLabel":"HISP","rowText":"Hispanic/Latino","label":"Are you:","leaderLabel":"Hispanic/Latino","question_id":"260","question_label":"RACE","question_label_full":"Race","tag":"worst"}]}]')
		}, function(e) {
			e.exports = JSON.parse("[]")
		}, function(e) {
			e.exports = JSON.parse('{"Sheet1":[{"label":"Virginia","value":"VA","status":"Expected around 7 p.m.","publish":"yes","socialism":"NO","link":"https://www.washingtonpost.com/elections/election-results/virginia-democratic-primary-live-results/"},{"label":"Vermont","value":"VT","status":"7 p.m.","publish":"yes","socialism":"NO","link":"https://www.washingtonpost.com/elections/election-results/vermont-democratic-primary-live-results/"},{"label":"North Carolina","value":"NC","status":"After 8 p.m.","publish":"yes","socialism":null,"link":"https://www.washingtonpost.com/elections/election-results/north-carolina-democratic-primary-live-results/"},{"label":"Alabama","value":"AL","status":"After 8 p.m.","publish":"yes","socialism":"NO","link":"https://www.washingtonpost.com/elections/election-results/alabama-democratic-primary-live-results/"},{"label":"Maine","value":"ME","status":"After 8 p.m.","publish":"yes","socialism":null,"link":"https://www.washingtonpost.com/elections/election-results/maine-democratic-primary-live-results/"},{"label":"Massachusetts","value":"MA","status":"After 8 p.m.","publish":"yes","socialism":"NO","link":"https://www.washingtonpost.com/elections/election-results/massachussetts-democratic-primary-live-results/"},{"label":"Oklahoma","value":"OK","status":"After 8 p.m.","publish":"yes","socialism":"NO","link":"https://www.washingtonpost.com/elections/election-results/oklahoma-democratic-primary-live-results/"},{"label":"Tennessee","value":"TN","status":"Expected after 9 p.m.","publish":"yes","socialism":null,"link":"https://www.washingtonpost.com/elections/election-results/tennessee-democratic-primary-live-results/"},{"label":"Colorado","value":"CO","status":"After 9 p.m.","publish":"yes","socialism":"NO","link":"https://www.washingtonpost.com/elections/election-results/colorado-democratic-primary-live-results/"},{"label":"Minnesota","value":"MN","status":"After 9 p.m.","publish":"yes","socialism":"NO","link":"https://www.washingtonpost.com/elections/election-results/minnesota-democratic-primary-live-results/"},{"label":"Texas","value":"TX","status":"After 9 p.m.","publish":"yes","socialism":null,"link":"https://www.washingtonpost.com/elections/election-results/texas-democratic-primary-live-results/"},{"label":"California","value":"CA","status":"After 11 p.m.","publish":"yes","socialism":null,"link":"https://www.washingtonpost.com/elections/election-results/california-democratic-primary-live-results/"}]}')
		}, function(e, t, n) {
			"use strict";
			n.r(t);
			var		a = n(0),	s = n.n(a), r = n(2), i = n.n(r),
					o = n(1),	c = n.n(o);
			function	u      () {
/**INDENT** Error@1: Unbalanced parens */
					return (u = Object.assign || function(e) {for (var t = 1; t < arguments.length; t++) {
						var		n = arguments[t];
						for             (var a in n)
									Object.	prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
/**INDENT** Error@1: Statement nesting error */
							} return e
/**INDENT** Error@1: Statement nesting error */
/**INDENT** Warning@1: Extra ) */
							}).		apply      (this, arguments)
/**INDENT** Error@1: Statement nesting error */
							} function	l    (e, t) {
								if (null == e)
									return {};
								var		n         ,
										a            ,
										s = {},	r = Object.keys(e);
								for             (a = 0; a < r.length; a++)
											n =		r        [a], t.indexOf(n) >= 0 || (s[n] = e[n]);
										return	s
							} var		d = n(9),
								h =["client", "offset", "scroll", "bounds", "margin"];
						function	p      (e) {
							var		t =[];
/**INDENT** Error@1: Unbalanced parens */
									return	h.	forEach((function(n) {
								e[n] && t.push(n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
							}))            , t
						} function	m    (e, t) {
							var		n = {};
/**INDENT** Error@1: Unbalanced parens */
								if              (t.indexOf("client") > -1 && (n.client = {
						top: e.clientTop, left: e.clientLeft, width: e.clientWidth, height:e.clientHeight
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
								})             , t.indexOf("offset") > -1 && (n.offset = {
						top: e.offsetTop, left: e.offsetLeft, width: e.offsetWidth, height:e.offsetHeight
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
								}), t.indexOf("scroll") > -1 && (n.scroll = {
							top: e.scrollTop, left: e.scrollLeft, width: e.scrollWidth, height:e.scrollHeight
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
								}), t.indexOf("bounds") > -1) {
									var		a = e.getBoundingClientRect();
									n.bounds = {
								top: a.top, right: a.right, bottom: a.bottom, left: a.left, width: a.width, height:a.height
									}
								} if (t.indexOf("margin") > -1) {
									var		s = getComputedStyle(e);
									n.margin = {
								top: s ? parseInt(s.marginTop) : 0, right: s ? parseInt(s.marginRight) : 0, bottom: s ? parseInt(s.marginBottom) : 0, left:s ? parseInt(s.marginLeft) : 0
									}
								} return n
						} var		f       , _, b,
/**INDENT** Error@1: Unbalanced parens */
								g            , v = (f = function(e) {var t = e.measure, n = e.measureRef, a = e.contentRect;
/**INDENT** Error@1: Unbalanced parens */
							return (0, e.children) ({
						measure: t, measureRef: n, contentRect:a
/**INDENT** Warning@1: Extra ) */
							})
						}              , b = _ = function(e) {
							var		t         ,
									n;
							function	s      () {
								for (var t, n = arguments.length, a = new Array(n), s = 0; s < n; s++)
									a[s] = arguments[s];
								return (t = e.call.apply(e,[this].concat(a)) || this).state = {
							contentRect:	{
								entry:		{
								}              , client:{
								}, offset:	{
								}, scroll:	{
								}, bounds:	{
								}, margin:	{
										}
									}
								}, t._animationFrameID = null, t._resizeObserver = null, t._node = null, t.measure = function(e) {
									var		n = m(t._node, g || p(t.props));
/**INDENT** Error@1: Unbalanced parens */
									e && (n.entry = e[0].contentRect), t._animationFrameID = window.requestAnimationFrame((function() {
/**INDENT** Error@1: Unbalanced parens */
										null !== t._resizeObserver && (t.setState({
									contentRect:	n
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
										}), "function" == typeof t.props.onResize && t.props.onResize(n))
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
									}))
								}, t._handleRef = function(e) {
									null !== t._resizeObserver && null !== t._node && t._resizeObserver.unobserve(t._node), t._node = e, null !== t._resizeObserver && null !== t._node && t._resizeObserver.observe(t._node);
									var		n = t.props.innerRef;
									n && ("function" == typeof n ? n(t._node) : n.current = t._node)
								}, t
							} n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
							var		r = s.prototype;
							return r.componentDidMount = function() {
								this._resizeObserver = new d.a(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), "function" == typeof this.props.onResize && this.props.onResize(m(this._node, g || p(this.props))))
							}, r.componentWillUnmount = function() {
								null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null), window.cancelAnimationFrame(this._animationFrameID)
							}, r.render = function() {
								var		e = this.props,
										t = (e.innerRef, e.onResize, l(e,["innerRef", "onResize"]));
/**INDENT** Error@1: Unbalanced parens */
								return Object(a.createElement) (f, u({
								}, t, {
							measureRef: this._handleRef, measure: this.measure, contentRect:this.state.contentRect
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
								}))
							}, s
						} (a.Component), _.propTypes = {
					client: c.a.bool, offset: c.a.bool, scroll: c.a.bool, bounds: c.a.bool, margin: c.a.bool, innerRef: c.a.oneOfType([c.a.object, c.a.func]), onResize:c.a.func
/**INDENT** Warning@1: Extra ) */
						}, b);
						v.displayName = "Measure", v.propTypes.children = c.a.func;
						var		P = v;
						function	w      (e, t) {
							if (null == e)
								return {};
							var		n         ,
									a            ,
									s = l(e, t);
							if              (Object.getOwnPropertySymbols) {
								var		r = Object.getOwnPropertySymbols(e);
								for             (a = 0; a < r.length; a++)
											n =		r        [a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
/**INDENT** Error@1: Statement nesting error */
									}		return	s
/**INDENT** Error@1: Statement nesting error */
									} function	y    (e) {
										return function(e) {
											if (Array.isArray(e)) {
												for (var t = 0, n = new Array(e.length); t < e.length; t++)
													n[t] = e[t];
												return n
											}
										} (e) || function(e) {
											if (Symbol.iterator in Object(e) || "[object Arguments]" == = Object.prototype.toString.call(e))
												return Array.from(e)
/**INDENT** Error@1: Statement nesting error */
												}               (e) || function() {
												throw new	TypeError("Invalid attempt to spread non-iterable instance")
												}               ()
										} function	E    (e, t, n) {
/**INDENT** Error@1: Unbalanced parens */
											return t in e ? Object.defineProperty(e, t, {
												value : n, enumerable:!0, configurable:!0, writable:!0
/**INDENT** Warning@1: Extra ) */
											}):e[t] = n, e
										} function	T    (e) {
											for (var t = 1; t < arguments.length; t++) {
												var		n = null != arguments[t] ? Object(arguments[t]) : {}, a = Object.keys(n);
/**INDENT** Error@1: Unbalanced parens */
														"function" ==	typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
													return Object.getOwnPropertyDescriptor(n, e).enumerable
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
												}))))          , a.forEach((function(t) {
													E(e, t, n[t])
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
												}))
											} return e
										} function	A    (e, t) {
											if (!(e instanceof t))
												throw new	TypeError("Cannot call a class as a function")
										} function	C    (e, t) {
											for (var n = 0; n < t.length; n++) {
												var		a = t[n];
														a.		enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
											}
										} function	x    (e, t, n) {
											return t && C(e.prototype, t), n && C(e, n), e
										} function	O    (e) {
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
											return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {return typeof e} : function(e) {return e && "function" == typeof Symbol && e.constructor == = Symbol && e !== Symbol.prototype ? "symbol" : typeof e}) (e)} function L(e) {if (void 0 == = e)
												throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
											return e
										} function	k    (e, t) {
											return !t || "object" !== O(t) && "function" != typeof t ? L(e) : t
										} function	M    (e) {
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
											return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {return e.__proto__ || Object.getPrototypeOf(e)}) (e)} function S(e, t) {return (S = Object.setPrototypeOf || function(e, t) {return e.__proto__ = t, e}) (e, t)} function N(e, t) {if ("function" != typeof t && null !== t)
												throw new TypeError("Super expression must either be null or a function");
/**INDENT** Error@1: Unbalanced parens */
											e.prototype = Object.create(t && t.prototype, {
										constructor:	{
											value: e, writable: !0, configurable:!0
												}
/**INDENT** Warning@1: Extra ) */
											})             , t && S(e, t)
										} function	I    (e, t) {
											if (e.length !== t.length)
												return !1;
											for (var n = 0; n < e.length; n++)
												if (e[n] !== t[n])
													return !1;
											return !0
										} var		R = function(e, t) {var n;
											void		0 == = t && (t = I);
											var		a         ,
													s =[],
													r = !1;
													return	function() {
												for (var i =[], o = 0; o < arguments.length; o++)
													i[o] = arguments[o];
												return r && n == = this && t(i, s) || (a = e.apply(this, i), r = !0, n = this, s = i), a
											}
										}              , V = n(10), q = n.n(V);
										var		D = function() {function e(e) {this.isSpeedy = void 0 == = e.speedy || e.speedy,
												this.tags =[],
												this.ctr = 0,
												this.nonce = e.nonce,
												this.key = e.key,
												this.container = e.container,
/**INDENT** Error@1: Statement nesting error */
												this.before = null} var t = e.prototype;
												return t.insert = function(e) {
													if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
														var		t         ,
																n = function(e) {var t = document.createElement("style");
															return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
																	t.		appendChild(document.createTextNode("")),
																	t
														}               (this);
																t =		0 == =	this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(n, t), this.tags.push(n)
													} var		a = this.tags[this.tags.length - 1];
													if (this.isSpeedy) {
															var		s = function(e) {if (e.sheet)
																return e.sheet;
															for (var t = 0; t < document.styleSheets.length; t++)
																if (document.styleSheets[t].ownerNode == = e)
																	return document.styleSheets[t]
/**INDENT** Error@1: Statement nesting error */
																	}               (a);
															try {
																var		r = 105 == = e.charCodeAt(1) && 64 == = e.charCodeAt(0);
																s.insertRule(e, r ? 0 : s.cssRules.length)
															} catch(e) {
																0
															}
/**INDENT** Error@1: Unmatched 'else' */
														} else
														a.appendChild(document.createTextNode(e));
														this.ctr++
													}, t.flush = function() {
/**INDENT** Error@1: Unbalanced parens */
														this.tags.forEach((function(e) {
															return e.parentNode.removeChild(e)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
														})), this.tags =[], this.ctr = 0
													}, e
												} ();
												var		F = function(e) {function t(e, t, a) {var s = t.trim().split(m);
														t = s;
														var		r = s.length,
																i = e.length;
														switch          (i) {
														case 0:
														case 1:
															var o = 0;
															for (e = 0 == = i ? "" : e[0] + " "; o < r; ++o)
																t[o] = n(e, t[o], a).trim();
															break;
														default:
															var c = o = 0;
															for (t =[]; o < r; ++o)
																for (var u = 0; u < i; ++u)
																	t[c++] = n(e[u] + " ", s[o], a).trim()
/**INDENT** Error@1: Statement nesting error */
																	} return t
/**INDENT** Error@1: Statement nesting error */
																	} function	n    (e, t, n) {
																		var		a = t.charCodeAt(0);
																		switch          (33 > a && (a = (t = t.trim()).charCodeAt(0)), a) {
																		case 38:
																			return t.replace(f, "$1" + e.trim());
																		case 58:
																			return e.trim() + t.replace(f, "$1" + e.trim());
																		default:
																			if (0 < 1 * n && 0 < t.indexOf("\f"))
																				return t.replace(f, (58 == = e.charCodeAt(0) ? "" : "$1") + e.trim())
/**INDENT** Error@1: Statement nesting error */
																				}		return	e +	t
/**INDENT** Error@1: Statement nesting error */
																				} function	a    (e, t, n, r) {
																					var		i = e + ";",
																							o = 2 * t + 3 * n + 4 * r;
																					if              (944 == = o) {
																						e = i.indexOf(":", 9) + 1;
																						var		c = i.substring(e, i.length - 1).trim();
																								return	c =	i.	substring(0, e).trim() + c + ";", 1 == = L || 2 == = L && s(c, 1) ? "-webkit-" + c + c : c
																					} if            (0 == = L || 2 == = L && !s(i, 1))
																								return	i;
																					switch (o) {
																					case 1015:
																						return 97 == = i.charCodeAt(10) ? "-webkit-" + i + i : i;
																					case 951:
																						return 116 == = i.charCodeAt(3) ? "-webkit-" + i + i : i;
																					case 963:
																						return 110 == = i.charCodeAt(5) ? "-webkit-" + i + i : i;
																					case 1009:
																						if (100 !== i.charCodeAt(4))
																							break;
																					case 969:
																					case 942:
																						return "-webkit-" + i + i;
																					case 978:
																						return "-webkit-" + i + "-moz-" + i + i;
																					case 1019:
																					case 983:
																						return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
																					case 883:
																						if (45 == = i.charCodeAt(8))
																							return "-webkit-" + i + i;
																						if (0 < i.indexOf("image-set(", 11))
																							return i.replace(A, "$1-webkit-$2") + i;
																						break;
																					case 932:
																						if (45 == = i.charCodeAt(4))
																							switch (i.charCodeAt(5)) {
																							case 103:
																								return "-webkit-box-" + i.replace("-grow", "") + "-webkit-" + i + "-ms-" + i.replace("grow", "positive") + i;
																							case 115:
																								return "-webkit-" + i + "-ms-" + i.replace("shrink", "negative") + i;
																							case 98:
																								return "-webkit-" + i + "-ms-" + i.replace("basis", "preferred-size") + i
																							} return "-webkit-" + i + "-ms-" + i + i;
																					case 964:
																						return "-webkit-" + i + "-ms-flex-" + i + i;
																					case 1023:
																						if (99 !== i.charCodeAt(8))
																							break;
																						return "-webkit-box-pack" + (c = i.substring(i.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + i + "-ms-flex-pack" + c + i;
																					case 1005:
																						return h.test(i) ? i.replace(d, ":-webkit-") + i.replace(d, ":-moz-") + i : i;
																					case 1e3:
																						switch (t = (c = i.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(t)) {
																						case 226:
																							c = i.replace(v, "tb");
																							break;
																						case 232:
																							c = i.replace(v, "tb-rl");
																							break;
																						case 220:
																							c = i.replace(v, "lr");
																							break;
																						default:
																							return i
																						} return "-webkit-" + i + "-ms-" + c + i;
																					case 1017:
																						if (-1 == = i.indexOf("sticky", 9))
																							break;
																					case 975:
																						switch (t = (i = e).length - 10, o = (c = (33 == = i.charCodeAt(t) ? i.substring(0, t) : i).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
																						case 203:
																							if (111 > c.charCodeAt(8))
																								break;
																						case 115:
																							i = i.replace(c, "-webkit-" + c) + ";" + i;
																							break;
																						case 207:
																						case 102:
																							i = i.replace(c, "-webkit-" + (102 < o ? "inline-" : "") + "box") + ";" + i.replace(c, "-webkit-" + c) + ";" + i.replace(c, "-ms-" + c + "box") + ";" + i
																						} return i + ";";
																					case 938:
																						if (45 == = i.charCodeAt(5))
																							switch (i.charCodeAt(6)) {
																							case 105:
																								return c = i.replace("-items", ""), "-webkit-" + i + "-webkit-box-" + c + "-ms-flex-" + c + i;
																							case 115:
																								return "-webkit-" + i + "-ms-flex-item-" + i.replace(y, "") + i;
																							default:
																								return "-webkit-" + i + "-ms-flex-line-pack" + i.replace("align-content", "").replace(y, "") + i
																							} break;
																					case 973:
																					case 989:
																						if (45 !== i.charCodeAt(3) || 122 == = i.charCodeAt(4))
																							break;
																					case 931:
																					case 953:
																						if (!0 == = T.test(e))
																							return 115 == = (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? a(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : i.replace(c, "-webkit-" + c) + i.replace(c, "-moz-" + c.replace("fill-", "")) + i;
																						break;
																					case 962:
																						if (i = "-webkit-" + i + (102 == = i.charCodeAt(5) ? "-ms-" + i : "") + i, 211 == = n + r && 105 == = i.charCodeAt(13) && 0 < i.indexOf("transform", 10))
																							return i.substring(0, i.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + i
/**INDENT** Error@1: Statement nesting error */
																							} return i
/**INDENT** Error@1: Statement nesting error */
																							} function	s    (e, t) {
																								var		n = e.indexOf(1 == = t ? ":" : "{"),
																										a = e.substring(0, 3 !== t ? n : 10);
																										return	n =	e.	substring(n + 1, e.length - 1), N(2 !== t ? a : a.replace(E, "$1"), n, t)
																							} function	r    (e, t) {
																							var		n = a(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
																									return	n !==	t + ";" ? n.replace(w, " or ($1)").substring(4) : "(" + t + ")"
																							} function	i    (e, t, n, a, s, r, i, o, u, l) {
																							for (var d, h = 0, p = t; h < S; ++h)
																								switch (d = M[h].call(c, e, p, n, a, s, r, i, o, u, l)) {
																									case void	0:case !1:case !0:case null:break;
																								default:
																											p =		d
																							} if            (p !== t)
																										return	p
/**INDENT** Error@1: Statement nesting error */
																								} function	o    (e) {
																									return void	0 !== (e = e.prefix) && (N = null, e ? "function" != typeof e ? L = 1 : (L = 2, N = e) : L = 0),
																											o
																								} function	c    (e, n) {
																								var		o = e;
																								if              (33 > o.charCodeAt(0) && (o = o.trim()), o =[o], 0 < S) {
																									var		c = i(-1, n, o, o, x, C, 0, 0, 0, 0);
/**INDENT** Error@1: Statement nesting error */
																										void		0 !==	c && "string" == typeof c && (n = c)} var d = function e(n, o, c, d, h) {for (var p, m, f, v, w, y = 0, E = 0, T = 0, A = 0, M = 0, N = 0, R = f = p = 0, V = 0, q = 0, D = 0, F = 0, j = c.length, W = j - 1, H = "", B = "", z = "", U = ""; V < j;) {
																											if (m = c.charCodeAt(V), V == = W && 0 !== E + A + T + y && (0 !== E && (m = 47 == = E ? 10 : 47), A = T = y = 0, j++, W++), 0 == = E + A + T + y) {
																												if (V == = W && (0 < q && (H = H.replace(l, "")), 0 < H.trim().length)) {
																													switch (m) {
																													case 32:
																													case 9:
																													case 59:
																													case 13:
																													case 10:
																														break;
																													default:
																														H += c.charAt(V)
																													}		m =		59
																												} switch        (m) {
																												case 123:
																													for (p = (H = H.trim()).charCodeAt(0), f = 1, F = ++V; V < j;) {
																														switch (m = c.charCodeAt(V)) {
																														case 123:
																															f++;
																															break;
																														case 125:
																															f--;
																															break;
																														case 47:
																															switch (m = c.charCodeAt(V + 1)) {
																															case 42:
																															case 47:
																														e:		{
																																	for (R = V + 1; R < W; ++R)
																																		switch (c.charCodeAt(R)) {
																																		case 47:
																																			if (42 == = m && 42 == = c.charCodeAt(R - 1) && V + 2 !== R) {
																																				V = R + 1;
																																				break e
																																			} break;
																																		case 10:
																																			if (47 == = m) {
																																				V = R + 1;
																																				break e
																																			}
																																		} V = R
																																}
																															} break;
																														case 91:
																															m++;
																														case 40:
																															m++;
																														case 34:
																														case 39:
																															for (; V++ < W && c.charCodeAt(V) !== m;);
																														} if (0 == = f)
																															break;
																														V++
																													} switch (f = c.substring(F, V), 0 == = p && (p = (H = H.replace(u, "").trim()).charCodeAt(0)), p) {
																													case 64:
																														switch (0 < q && (H = H.replace(l, "")), m = H.charCodeAt(1)) {
																														case 100:
																														case 109:
																														case 115:
																														case 45:
																															q = o;
																															break;
																														default:
																															q = k
																														} if (F = (f = e(o, q, f, m, h + 1)).length, 0 < S && (w = i(3, f, q = t(k, H, D), o, x, C, F, m, h, d), H = q.join(""), void 0 !== w && 0 == = (F = (f = w.trim()).length) && (m = 0, f = "")), 0 < F)
																															switch (m) {
																															case 115:
																																H = H.replace(P, r);
																															case 100:
																															case 109:
																															case 45:
																																f = H + "{" + f + "}";
																																break;
																															case 107:
																																f = (H = H.replace(_, "$1 $2")) + "{" + f + "}", f = 1 == = L || 2 == = L && s("@" + f, 3) ? "@-webkit-" + f + "@" + f : "@" + f;
																																break;
																															default:
																																f = H + f, 112 == = d && (B += f, f = "")
																														} else
																															f = "";
																														break;
																													default:
																														f = e(o, t(o, H, D), f, d, h + 1)
																													} z += f, f = D = q = R = p = 0, H = "", m = c.charCodeAt(++V);
																													break;
																												case 125:
																												case 59:
																													if (1 < (F = (H = (0 < q ? H.replace(l, "") : H).trim()).length))
																														switch (0 == = R && (p = H.charCodeAt(0), 45 == = p || 96 < p && 123 > p) && (F = (H = H.replace(" ", ":")).length), 0 < S && void 0 !== (w = i(1, H, o, n, x, C, B.length, d, h, d)) && 0 == = (F = (H = w.trim()).length) && (H = "\0\0"), p = H.charCodeAt(0), m = H.charCodeAt(1), p){
																														case 0:
																															break;
																														case 64:
																															if (105 == = m || 99 == = m) {
																																U += H + c.charAt(V);
																																break
																														} default:
																															58 !== H.charCodeAt(F - 1) && (B += a(H, p, m, H.charCodeAt(2)))
																														} D = q = R = p = 0, H = "", m = c.charCodeAt(++V)
																												}
																											} switch (m) {
																											case 13:
																											case 10:
																												47 == = E ? E = 0 : 0 == = 1 + p && 107 !== d && 0 < H.length && (q = 1, H += "\0"), 0 < S * I && i(0, H, o, n, x, C, B.length, d, h, d), C = 1, x++;
																												break;
																											case 59:
																											case 125:
																												if (0 == = E + A + T + y) {
																													C++;
																													break
																											} default:
																												switch (C++, v = c.charAt(V), m) {
																												case 9:
																												case 32:
																													if (0 == = A + y + E)
																														switch (M) {
																														case 44:
																														case 58:
																														case 9:
																														case 32:
																															v = "";
																															break;
																														default:
																															32 !== m && (v = " ")
																														} break;
																												case 0:
																													v = "\\0";
																													break;
																												case 12:
																													v = "\\f";
																													break;
																												case 11:
																													v = "\\v";
																													break;
																												case 38:
																													0 == = A + E + y && (q = D = 1, v = "\f" + v);
																													break;
																												case 108:
																													if (0 == = A + E + y + O && 0 < R)
																														switch (V - R) {
																														case 2:
																															112 == = M && 58 == = c.charCodeAt(V - 3) && (O = M);
																														case 8:
																															111 == = N && (O = N)
																														} break;
																												case 58:
																													0 == = A + E + y && (R = V);
																													break;
																												case 44:
																													0 == = E + T + A + y && (q = 1, v += "\r");
																													break;
																												case 34:
																												case 39:
																													0 == = E && (A = A == = m ? 0 : 0 == = A ? m : A);
																													break;
																												case 91:
																													0 == = A + E + T && y++;
																													break;
																												case 93:
																													0 == = A + E + T && y--;
																													break;
																												case 41:
																													0 == = A + E + y && T--;
																													break;
																												case 40:
																													if (0 == = A + E + y) {
																														if (0 == = p)
																															switch (2 * M + 3 * N) {
																															case 533:
																																break;
																															default:
																																p = 1
																															} T++
																													} break;
																												case 64:
																													0 == = E + T + A + y + R + f && (f = 1);
																													break;
																												case 42:
																												case 47:
																													if (!(0 < A + y + T))
																														switch (E) {
																														case 0:
																															switch (2 * m + 3 * c.charCodeAt(V + 1)) {
																															case 235:
																																E = 47;
																																break;
																															case 220:
																																F = V, E = 42
																															} break;
																														case 42:
																															47 == = m && 42 == = M && F + 2 !== V && (33 == = c.charCodeAt(F + 2) && (B += c.substring(F, V + 1)), v = "", E = 0)
																														}
																												} 0 == = E && (H += v)
																											} N = M, M = m, V++
																										} if (0 < (F = B.length)) {
																											if (q = o, 0 < S && (void 0 !== (w = i(2, B, q, n, x, C, F, d, h, d)) && 0 == = (B = w).length))
																												return U + B + z;
																											if (B = q.join(",") + "{" + B + "}", 0 != L * O) {
																												switch (2 !== L || s(B, 2) || (O = 0), O) {
																												case 111:
																													B = B.replace(g, ":-moz-$1") + B;
																													break;
																												case 112:
																													B = B.replace(b, "::-webkit-input-$1") + B.replace(b, "::-moz-$1") + B.replace(b, ":-ms-input-$1") + B
																												} O = 0
																											}
																										} return U + B + z
																									} (k, o, n, 0, 0);
																									return 0 < S && (void 0 !== (c = i(-2, d, o, o, x, C, d.length, 0, 0, 0)) && (d = c)), "", O = 0, C = x = 1, d
																								} var		u = /^\0 + /g,
																										l = /[\0 \ r \ f] / g,
																										d = /:*/g,
																										h = /zoo | gra /,
																										p = /([,:]) (transform) / g,
																										m = /,
																								               \r + ? /g,
																										f = /([\t \ r \ n]) * \f ? &/g,
																										_ = /@(k \ w +) \ s * (\S *) \ s * /,
																										b = /: : (place) / g,
																										g = /:(read - only) / g,
																										v = /[svh] \ w + -[tblr] {2} /, P = /\(\s * (.*) \ s * \) / g, w = /([\s \ S] * ?);
/**INDENT** Error@1: Unbalanced parens */
																						/g, y = /-self | flex - /g, E = /[^] * ? (:[rp][el] a[\w -] +)[^] * /, T = /stretch |:\s * \w + \-(? : conte | avail) /, A = /([^-]) (image - set \ () /, C = 1, x = 1, O = 0, L = 1, k =[], M =[], S = 0, N = null, I = 0;
																								return c.use = function e(t) {
																									switch (t) {
																										case void	0:case null:S = M.length = 0;
																										break;
																									default:
																										if ("function" == typeof t)
																											M[S++] = t;
																										else if ("object" == typeof t)
																											for (var n = 0, a = t.length; n < a; ++n)
																												e(t[n]);
																										else
																											I = 0 | !!t
/**INDENT** Error@1: Statement nesting error */
																											} return e
/**INDENT** Error@1: Statement nesting error */
																											}, c.set = o, void 0 !== e && o(e),
																													c
																									};
																									function	j      (e) {
																										e && W.current.insert(e + "}")
																									} var		W = {current:null}, H = function(e, t, n, a, s, r, i, o, c, u) {switch (e) {
																											case 1:switch (t.charCodeAt(0)) {
																												case 64:return W.current.insert(t + ";"), "";
																											case 108:
																												if (98 == = t.charCodeAt(2))
																													return ""
/**INDENT** Error@1: Statement nesting error */
																													} break;
																											case 2:
																												if (0 == = o)
																													return t + "/*|*/";
																												break;
																											case 3:
																												switch (o) {
																												case 102:
																												case 112:
																													return W.current.insert(n[0] + t), "";
																												default:
																													return t + (0 == = u ? "/*|*/" : "")
																											} case -2:
																												t.split("/*|*/}").forEach(j)
																											}
																									}              , B = function(e) {
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
																											void		0 == = e && (e = {});
																											var		t         ,
																													n = e.key || "css";
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
																											void		0 !==	e.	prefix && (t = {prefix:e.prefix});
																											var		a = new F(t);
																											var		s         ,
																													r = {};
																											s = e.container || document.head;
																											var		i         ,
																													o = document.querySelectorAll("style[data-emotion-" + n + "]");
/**INDENT** Error@1: Unbalanced parens */
																											Array.prototype.forEach.call(o, (function(e) {
/**INDENT** Error@1: Unbalanced parens */
																												e.getAttribute("data-emotion-" + n).split(" ").forEach((function(e) {
																													r[e] = !0
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																												})), e.parentNode !== s && s.appendChild(e)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																											})), a.use(e.stylisPlugins) (H), i = function(e, t, n, s) {
																												var		r = t.name;
																												W.current = n, a(e, t.styles), s && (c.inserted[r] = !0)
																											};
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
																											var		c = {key:n, sheet:new D({key:n, container:s, nonce:e.nonce, speedy:e.speedy}), nonce:e.nonce, inserted:r, registered:{}, insert:i};
																											return c
																									};
																									function	z      (e, t, n) {
																										var		a = "";
/**INDENT** Error@1: Unbalanced parens */
																												return	n.	split(" ").forEach((function(n) {
																											void		0 !==	e   [n] ? t.push(e[n]) : a += n + " "
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																										}))            , a
																									} var		U = function(e, t, n) {var a = e.key + "-" + t.name;
																										if (!1 == = n && void 0 == = e.registered[a] && (e.registered[a] = t.styles), void 0 == = e.inserted[t.name]){
																											var		s = t;
																											do {
																												e.insert("." + a, s, e.sheet, !0);
																												s = s.next
																											} while         (void 0 !== s)
																										}
																									};
																										var		K = function(e) {for (var t, n = 0, a = 0, s = e.length; s >= 4; ++a, s -= 4)
																											t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24)) + (59797 * (t >> >16) << 16), n = 1540483477 * (65535 & (t ^= t >> >24)) + (59797 * (t >> >16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >> >16) << 16);
																										switch (s) {
																										case 3:
																											n ^= (255 & e.charCodeAt(a + 2)) << 16;
																										case 2:
																											n ^= (255 & e.charCodeAt(a + 1)) << 8;
																										case 1:
																											n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(a))) + (59797 * (n >> >16) << 16)
																										}		return       (((n = 1540483477 * (65535 & (n ^= n >> >13)) + (59797 * (n >> >16) << 16)) ^ n >> >15) >> >0).toString(36)
																									}              , X = {
																								animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth:1
																									};
																									var		G = /[A - Z] | ^ms / g,
																											Y = /_EMO_([^_] + ?) _([^] * ?) _EMO_ / g,
																											Q = function(e) {return 45 == = e.charCodeAt(1)}, Z = function(e) {return null != e && "boolean" != typeof e}, J = function(e) {var t = {};
																									return function(n) {
																										return void	0 == = t[n] && (t[n] = e(n)),
																												t             [n]
																									}
/**INDENT** Error@1: Unbalanced parens */
																									}               ((function(e) {
																										return Q(e) ? e : e.replace(G, "-$&").toLowerCase()
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																									}))            , ee = function(e, t) {switch (e) {
																											case "animation":case "animationName":if ("string" == typeof t)
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																									return t.replace(Y, (function(e, t, n) {return ne = {name:t, styles:n, next:ne}, t}))} return 1 == = X[e] || Q(e) || "number" != typeof t || 0 == = t ? t : t + "px"};
																									function	te     (e, t, n, a) {
																										if (null == n)
																											return "";
																										if (void 0 !== n.__emotion_styles)
																											return n;
																										switch (typeof n) {
																										case "boolean":
																											return "";
																										case "object":
																											if (1 == = n.anim)
																												return ne = {
																										name: n.name, styles: n.styles, next:ne
																												}              , n.name;
																											if (void 0 !== n.styles){
																												var		s = n.next;
																												if (void 0 !== s)
																													for (; void 0 !== s;)
																														ne = {
																												name: s.name, styles: s.styles, next:ne
																														}, s = s.next;
																												return n.styles + ";"
																											} return function(e, t, n) {
																												var		a = "";
																												if (Array.isArray(n))
																													for (var s = 0; s < n.length; s++)
																														a += te(e, t, n[s], !1);
																												else
																													for (var r in n) {
																														var		i = n[r];
																														if ("object" != typeof i)
																															null != t && void 0 !== t[i] ? a += r + "{" + t[i] + "}" : Z(i) && (a += J(r) + ":" + ee(r, i) + ";");
																														else if (!Array.isArray(i) || "string" != typeof i[0] || null != t && void 0 !== t[i[0]]){
																															var		o = te(e, t, i, !1);
																															switch (r) {
																															case "animation":
																															case "animationName":
																																a += J(r) + ":" + o + ";";
																																break;
																															default:
																																a += r + "{" + o + "}"
																															}
																														} else
																															for (var c = 0; c < i.length; c++)
																																Z(i[c]) && (a += J(r) + ":" + ee(r, i[c]) + ";")
/**INDENT** Error@1: Statement nesting error */
																																} return a
/**INDENT** Error@1: Statement nesting error */
																																} (e, t, n);
																										case "function":
																														if (void 0 !== e){
																															var		r = ne,
																																	i = n(e);
																															return ne = r, te(e, t, i, a)
																														} break;
																										case "string":
																												} if (null == t)
																													return n;
																												var		o = t[n];
/**INDENT** Error@1: Statement nesting error */
																												return void	0 == = o || a ? n : o} var ne,
/**INDENT** Error@1: Unbalanced parens */
																														ae = /label:\s * ([^\s;
																												\n {
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																													] +) \ s *;
																													/g;
																														var		se = function(e, t, n) {if (1 == = e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles)
																															return e[0];
																														var		a = !0,
																																s = "";
																																ne = void	0;
																														var		r = e[0];
																																null ==	r || void 0 == = r.raw ? (a = !1, s += te(n, t, r, !1)) : s += r[0];
																														for             (var i = 1; i < e.length; i++)
																																	s +=		te      (n, t, e[i], 46 == = s.charCodeAt(s.length - 1)), a && (s += r[i]);
																																ae.		lastIndex = 0;
																														for             (var o, c = ""; null !== (o = ae.exec(s));)
																																	c +=		"-" +	o [1];
																																return {
																													name: K(s) + c, styles: s, next:ne
																														}
																													};
																														var		re = function() {for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
																															t[n] = arguments[n];
																														return se(t)
/**INDENT** Error@1: Unbalanced parens */
																													}              , ie = Object(a.createContext) ("undefined" != typeof HTMLElement ? B() : null), oe = Object(a.createContext) ({
/**INDENT** Warning@1: Extra ) */
																													}), ce = ie.Provider, ue = function(e) {
/**INDENT** Error@1: Unbalanced parens */
																														return Object(a.forwardRef) ((function(t, n) {
/**INDENT** Error@1: Unbalanced parens */
																															return Object(a.createElement) (ie.Consumer, null, (function(a) {
																																return e(t, a, n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																															}))
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}))
																													}, le = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", de = Object.prototype.hasOwnProperty, he = function(e, t, n, s) {
																														var		r = null == = n ? t.css : t.css(n);
																														"string" == typeof r && void 0 !== e.registered[r] && (r = e.registered[r]);
																														var		i = t[le],
																																o =[r],
																																c = "";
																														"string" == typeof t.className ? c = z(e.registered, o, t.className) : null != t.className && (c = t.className + " ");
																														var		u = se(o);
																														U(e, u, "string" == typeof i);
																														c += e.key + "-" + u.name;
																														var		l = {};
																														for (var d in t)
																															de.call(t, d) && "css" !== d && d !== le && (l[d] = t[d]);
																														return l.ref = s, l.className = c, Object(a.createElement) (i, l)
/**INDENT** Error@1: Unbalanced parens */
																													}, pe = ue((function(e, t, n) {
/**INDENT** Error@1: Unbalanced parens */
																														return "function" == typeof e.css ? Object(a.createElement) (oe.Consumer, null, (function(a) {
																															return he(t, e, a, n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														})) : he(t, e, null, n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																													}));
																													var		me = function(e, t) {var n = arguments;
																														if (null == t || !de.call(t, "css"))
																															return a.createElement.apply(void 0, n);
																														var		s = n.length,
																																r = new Array(s);
																																r             [0] = pe;
																														var		i = {};
																														for             (var o in t)
																																	de.		call     (t, o) && (i[o] = t[o]);
																																i             [le] = e, r[1] = i;
																														for             (var c = 2; c < s; c++)
																																	r             [c] = n[c];
																																return	a.	createElement.apply(null, r)
/**INDENT** Error@1: Unbalanced parens */
																													}              , fe = (a.Component, function e(t) {
																														for (var n = t.length, a = 0, s = ""; a < n; a++) {
																															var		r = t[a];
																															if (null != r) {
																																var		i = void 0;
																																switch (typeof r) {
																																case "boolean":
																																	break;
																																case "object":
																																	if (Array.isArray(r))
																																		i = e(r);
																																	else
																																		for (var o in i = "", r)
																																			r[o] && o && (i && (i += " "), i += o);
																																	break;
																																default:
																																	i = r
																																} i && (s && (s += " "), s += i)
																															}
																														} return s
/**INDENT** Warning@1: Extra ) */
																													});
																													function	_e     (e, t, n) {
																														var		a =[],
																																s = z(e, a, n);
																																return	a.	length < 2 ? n : s + t(a)
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Error@1: Unbalanced parens */
																																} var		be = ue((function(e, t) {return Object(a.createElement) (oe.Consumer, null, (function(n) {var a = function() {for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
																																	n[a] = arguments[a];
																																var		s = se(n, t.registered);
																																		return	U      (t, s, !1), t.key + "-" + s.name
																													}, s = {
																												css: a, cx:	function() {
																															for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++)
																																n[s] = arguments[s];
																															return _e(t.registered, a, fe(n))
																												}, theme:	n
																													}              , r = e.children(s);
																													return !0, r
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																													}))
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																													})), ge = function() {
																													};
																													function	ve     (e, t) {
																													return t ? "-" == = t[0] ? e + t : e + "__" + t : e} function Pe(e, t, n) {var a =[n];
																														if (t && e)
																															for (var s in t)
																																t.hasOwnProperty(s) && t[s] && a.push("".concat(ve(e, s)));
/**INDENT** Error@1: Unbalanced parens */
																														return a.filter((function(e) {
																															return e
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																														})).		map       ((function(e) {
																															return String(e).trim()
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														})).join(" ")
																													} var		we = function(e) {return Array.isArray(e) ? e.filter(Boolean) : "object" == = O(e) && null !== e ?[e] :[]};
																													function	ye     (e) {
																														return[document.documentElement, document.body, window].indexOf(e) > -1
																													} function	Ee   (e) {
																														return ye(e) ? window.pageYOffset : e.scrollTop
																													} function	Te   (e, t) {
																													ye(e) ? window.scrollTo(0, t) : e.scrollTop = t} function Ae(e, t, n, a) {return n * ((e = e / a - 1) * e * e + 1) + t} function Ce(e, t) {var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
																														a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ge,
																														s = Ee(e),
																														r = t - s,
																														i = 10,
																														o = 0;
																														function	c      () {
																															var		t = Ae(o += i, s, r, n);
																																	Te            (e, t), o < n ? window.requestAnimationFrame(c) : a(e)
																														}		c            ()
																													} function	xe   () {
																														try {
																															return document.createEvent("TouchEvent"), !0
																														} catch(e) {
																															return !1
																														}
																													} var		Oe = n(4),
																															Le = n.n(Oe);
																													function	ke     (e) {
																														var		t = e.maxHeight,
																																n = e.menuEl,
																																a = e.minHeight,
																																s = e.placement,
																																r = e.shouldScroll,
																																i = e.isFixedPosition,
																																o = e.theme.spacing,
																																c = function(e) {var t = getComputedStyle(e), n = "absolute" == = t.position, a = /(auto | scroll) /, s = document.documentElement;
																															if ("fixed" == = t.position)
																																return s;
																															for (var r = e; r = r.parentElement;)
																																if (t = getComputedStyle(r), (!n || "static" !== t.position) && a.test(t.overflow + t.overflowY + t.overflowX))
																																	return r;
																															return s
																														}               (n), u = {
																													placement: "bottom", maxHeight:t
																														};
																														if (!n || !n.offsetParent)
																															return u;
																														var		l = c.getBoundingClientRect().height,
																																d = n.getBoundingClientRect(),
																																h = d.bottom,
																																p = d.height,
																																m = d.top,
																																f = n.offsetParent.getBoundingClientRect().top,
																																_ = window.innerHeight,
																																b = Ee(c),
																																g = parseInt(getComputedStyle(n).marginBottom, 10),
																																v = parseInt(getComputedStyle(n).marginTop, 10),
																																P = f - v,
																																w = _ - m,
																																y = P + b,
																																E = l - b - m,
																																T = h - _ + b + g,
																																A = b + m - v;
																														switch (s) {
																														case "auto":
																														case "bottom":
																															if (w >= p)
																																return {
																														placement: "bottom", maxHeight:t
																																};
																															if (E >= p && !i)
																																return r && Ce(c, T, 160), {
																														placement: "bottom", maxHeight:t
																																};
																															if (!i && E >= a || i && w >= a)
																																return r && Ce(c, T, 160), {
																														placement: "bottom", maxHeight:i ? w - g : E - g
																																};
																															if ("auto" == = s || i) {
																																var		C = t,
																																		x = i ? P : y;
																																return x >= a && (C = Math.min(x - g - o.controlHeight, t)), {
																															placement: "top", maxHeight:C
																																}
																															} if ("bottom" == = s)
																																return Te(c, T), {
																														placement: "bottom", maxHeight:t
																																};
																															break;
																														case "top":
																															if (P >= p)
																																return {
																														placement: "top", maxHeight:t
																																};
																															if (y >= p && !i)
																																return r && Ce(c, A, 160), {
																														placement: "top", maxHeight:t
																																};
																															if (!i && y >= a || i && P >= a) {
																																var		O = t;
																																return (!i && y >= a || i && P >= a) && (O = i ? P - v : y - v), r && Ce(c, A, 160), {
																															placement: "top", maxHeight:O
																																}
																															} return {
																														placement: "bottom", maxHeight:t
																															};
																														default:
																															throw new Error('Invalid placement provided "'.concat(s, '".'))
																														} return u
																													} var		Me = function(e) {return "auto" == = e ? "bottom" : e}, Se = function(e) {function t() {var e, n;
																															A(this, t);
																															for (var a = arguments.length, s = new Array(a), r = 0; r < a; r++)
																																s[r] = arguments[r];
/**INDENT** Error@1: Unbalanced parens */
																															return E(L(L(n = k(this, (e = M(t)).call.apply(e,[this].concat(s))))), "state", {
																														maxHeight: n.props.maxMenuHeight, placement:null
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															}), E(L(L(n)), "getPlacement", (function(e) {
																																var		t = n.props,
																																		a = t.minMenuHeight,
																																		s = t.maxMenuHeight,
																																		r = t.menuPlacement,
																																		i = t.menuPosition,
																																		o = t.menuShouldScrollIntoView,
																																		c = t.theme,
																																		u = n.context.getPortalPlacement;
																																if              (e) {
																																	var		l = "fixed" == = i,
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
																																			d = ke({maxHeight:s, menuEl:e, minHeight:a, placement:r, shouldScroll:o && !l, isFixedPosition:l, theme:c});
																																			u &&		u       (d), n.setState(d)
																																}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															}))            , E(L(L(n)), "getUpdatedProps", (function() {
																																var		e = n.props.menuPlacement,
																																		t = n.state.placement || Me(e);
/**INDENT** Error@1: Unbalanced parens */
																																return T({
																																}, n.props, {
																															placement: t, maxHeight:n.state.maxHeight
/**INDENT** Warning@1: Extra ) */
																																})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																															})), n
/**INDENT** Error@1: Unbalanced parens */
																													} return N(t, e), x(t,[{
																												key: "render", value:function() {
/**INDENT** Error@1: Unbalanced parens */
																															return (0, this.props.children) ({
																														ref: this.getPlacement, placerProps:this.getUpdatedProps()
/**INDENT** Warning@1: Extra ) */
																															})
																														}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																													}]), t
																													} (a.Component);
/**INDENT** Error@1: Unbalanced parens */
																													E(Se, "contextTypes", {
																												getPortalPlacement:c.a.func
/**INDENT** Warning@1: Extra ) */
																													});
																													var		Ne = function(e) {var t = e.theme, n = t.spacing.baseUnit;
																														return {
																													color: t.colors.neutral40, padding: "".concat(2 * n, "px ").concat(3 * n, "px"), textAlign:"center"
																														}
																													}              , Ie = Ne, Re = Ne, Ve = function(e) {
																														var		t = e.children,
																																n = e.className,
																																a = e.cx,
																																s = e.getStyles,
																																r = e.innerProps;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
/**INDENT** Error@1: Unbalanced parens */
																													css: s("noOptionsMessage", e), className:a({
																														"menu-notice": !0, "menu-notice--no-options":!0
/**INDENT** Warning@1: Extra ) */
																															}, n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}, r), t)
																													};
																													Ve.defaultProps = {
																												children:	"No options"
																													};
																													var		qe = function(e) {var t = e.children, n = e.className, a = e.cx, s = e.getStyles, r = e.innerProps;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
/**INDENT** Error@1: Unbalanced parens */
																													css: s("loadingMessage", e), className:a({
																														"menu-notice": !0, "menu-notice--loading":!0
/**INDENT** Warning@1: Extra ) */
																															}              , n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}              , r), t)
																													};
																													qe.defaultProps = {
																												children:	"Loading..."
																													};
																													var		De = function(e) {function t() {var e, n;
																															A(this, t);
																															for (var a = arguments.length, s = new Array(a), r = 0; r < a; r++)
																																s[r] = arguments[r];
/**INDENT** Error@1: Unbalanced parens */
																															return E(L(L(n = k(this, (e = M(t)).call.apply(e,[this].concat(s))))), "state", {
																														placement:	null
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															}), E(L(L(n)), "getPortalPlacement", (function(e) {
																																var		t = e.placement;
/**INDENT** Error@1: Unbalanced parens */
																																		t !==		Me     (n.props.menuPlacement) && n.setState({
																															placement:	t
/**INDENT** Warning@1: Extra ) */
																																})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																															}))            , n
/**INDENT** Error@1: Unbalanced parens */
																													}		return	N     (t, e), x(t,[{
																												key: "getChildContext", value:function() {
																															return {
																														getPortalPlacement:this.getPortalPlacement
																															}
																														}
																													}, {
																												key: "render", value:function() {
																															var		e = this.props,
																																	t = e.appendTo,
																																	n = e.children,
																																	a = e.controlElement,
																																	s = e.menuPlacement,
																																	i = e.menuPosition,
																																	o = e.getStyles,
																																	c = "fixed" == = i;
																															if (!t && !c || !a)
																																return null;
																															var		u = this.state.placement || Me(s),
																																	l = function(e) {var t = e.getBoundingClientRect();
																																return {
																															bottom: t.bottom, height: t.height, left: t.left, right: t.right, top: t.top, width:t.width
																																}
/**INDENT** Error@1: Unbalanced parens */
																															}               (a), d = c ? 0 : window.pageYOffset, h = l[u] + d, p = me("div", {
/**INDENT** Error@1: Unbalanced parens */
																														css:		o("menuPortal", {
																															offset: h, position: i, rect:l
/**INDENT** Warning@1: Extra ) */
																																})
/**INDENT** Warning@1: Extra ) */
																															}, n);
																															return t ? Object(r.createPortal) (p, t) : p
																														}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																													}]), t
																													} (a.Component);
/**INDENT** Error@1: Unbalanced parens */
																													E(De, "childContextTypes", {
																												getPortalPlacement:c.a.func
/**INDENT** Warning@1: Extra ) */
																													});
																													var		Fe = Array.isArray,
																															je = Object.keys,
																															We = Object.prototype.hasOwnProperty;
																													function	He     (e, t) {
																														try {
																															return function e(t, n) {
																																if (t == = n)
																																	return !0;
																																if (t && n && "object" == O(t) && "object" == O(n)) {
																																	var		a         ,
																																			s            ,
																																			r            ,
																																			i = Fe(t),
																																			o = Fe(n);
																																	if              (i && o) {
																																		if ((s = t.length) != n.length)
																																			return !1;
																																		for (a = s; 0 != a--;)
																																			if (!e(t[a], n[a]))
																																				return !1;
																																		return !0
																																	} if (i != o)
																																		return !1;
																																	var		c = t instanceof Date,
																																			u = n instanceof Date;
																																	if              (c != u)
																																				return       !1;
																																	if              (c && u)
																																				return	t.	getTime() == n.getTime();
																																	var		l = t instanceof RegExp,
																																			d = n instanceof RegExp;
																																	if              (l != d)
																																				return       !1;
																																	if              (l && d)
																																				return	t.	toString() == n.toString();
																																	var		h = je(t);
																																	if              ((s = h.length) !== je(n).length)
																																				return       !1;
																																	for             (a = s; 0 != a--;)
																																		if              (!We.call(n, h[a]))
																																					return       !1;
																																	for             (a = s; 0 != a--;)
																																		if              (!("_owner" == = (r = h[a]) && t.$$typeof || e(t[r], n[r])))
																																					return       !1;
																																			return       !0
																																} return t != t && n != n
																															}               (e, t)
																														}		catch        (e) {
																															if (e.message && e.message.match(/stack | recursion / i))
																																return console.warn("Warning: react-fast-compare does not handle circular references.", e.name, e.message), !1;
																															throw		e
																														}
/**INDENT** Error@1: Unbalanced parens */
																													} var		Be = function(e) {function t() {return A(this, t), k(this, M(t).apply(this, arguments))} return N(t, e), x(t,[{key:"render", value:function() {var e = this.props, t = e.children, n = e.className, a = e.cx, s = e.isMulti, r = e.getStyles, i = e.hasValue;
/**INDENT** Error@1: Unbalanced parens */
																															return me("div", {
/**INDENT** Error@1: Unbalanced parens */
																														css: r("valueContainer", this.props), className:a({
																															"value-container": !0, "value-container--is-multi": s, "value-container--has-value":i
/**INDENT** Warning@1: Extra ) */
																																}, n)
/**INDENT** Warning@1: Extra ) */
																															}, t)
																													}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																													}])            , t
																													}               (a.Component);
																													function	ze     () {
																														var		e         ,
																																t            ,
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																n = (e =["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw:{value:Object.freeze(t)}})));
																																return	ze =	function() {
																															return n
																														}              , n
																													} var		Ue = {name:"19bqh2r", styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;"}, Ke = function(e) {var t = e.size, n = w(e,["size"]);
/**INDENT** Error@1: Unbalanced parens */
																														return me("svg", u({
																													height: t, width: t, viewBox: "0 0 20 20", "aria-hidden": "true", focusable: "false", css:Ue
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}              , n))
																													}              , Xe = function(e) {
/**INDENT** Error@1: Unbalanced parens */
																														return me(Ke, u({
																													size:		20
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																														}, e), me("path", {
																													d:		"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}))
																													}, $e = function(e) {
/**INDENT** Error@1: Unbalanced parens */
																														return me(Ke, u({
																													size:		20
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																														}, e), me("path", {
																													d:		"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}))
																													}, Ge = function(e) {
																														var		t = e.isFocused,
																																n = e.theme,
																																a = n.spacing.baseUnit,
																																s = n.colors;
																														return {
																													label: "indicatorContainer", color: t ? s.neutral60 : s.neutral20, display: "flex", padding: 2 * a, transition: "color 150ms", ":hover":{
																														color:		t ? s.neutral80 : s.neutral40
																															}
																														}
																													}, Ye = Ge, Qe = Ge, Ze = function() {
																														var		e = re.apply(void 0, arguments),
																																t = "animation-" + e.name;
																														return {
																													name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString:function() {
																																return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
																															}
																														}
																													} (ze()), Je = function(e) {
																														var		t = e.delay,
																																n = e.offset;
/**INDENT** Error@1: Unbalanced parens */
																														return me("span", {
/**INDENT** Error@1: Unbalanced parens */
																													css:		re({
																														animation: "".concat(Ze, " 1s ease-in-out ").concat(t, "ms infinite;"), backgroundColor: "currentColor", borderRadius: "1em", display: "inline-block", marginLeft: n ? "1em" : null, height: "1em", verticalAlign: "top", width:"1em"
/**INDENT** Warning@1: Extra ) */
																															}, "")
/**INDENT** Warning@1: Extra ) */
																														})
																													}, et = function(e) {
																														var		t = e.className,
																																n = e.cx,
																																a = e.getStyles,
																																s = e.innerProps,
																																r = e.isRtl;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
																														}, s, {
/**INDENT** Error@1: Unbalanced parens */
																													css: a("loadingIndicator", e), className:n({
																														indicator: !0, "loading-indicator":!0
/**INDENT** Warning@1: Extra ) */
																															}, t)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																														}), me(Je, {
																													delay: 0, offset:r
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																														}), me(Je, {
																													delay: 160, offset:!0
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																														}), me(Je, {
																													delay: 320, offset:!r
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}))
																													};
																													et.defaultProps = {
																												size:		4
																													};
																													var		tt = function(e) {return {label:"input", background:0, border:0, fontSize:"inherit", opacity:e ? 0 : 1, outline:0, padding:0, color:"inherit"}}, nt = function(e) {var t = e.children, n = e.innerProps;
																														return me("div", n, t)
																													}              , at = nt, st = nt, rt = function(e) {
																														function	t      () {
																															return A(this, t), k(this, M(t).apply(this, arguments))
/**INDENT** Error@1: Unbalanced parens */
																														}		return	N     (t, e), x(t,[{
																															key:"render", value:function() {
																																var		e = this.props,
																																		t = e.children,
																																		n = e.innerProps;
/**INDENT** Error@1: Unbalanced parens */
																																		return	me     ("div", n, t || me(Xe, {
																															size:		14
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																}))
																															}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																														}])            , t
																													}               (a.Component), it = function(e) {
																														function	t      () {
																															return A(this, t), k(this, M(t).apply(this, arguments))
/**INDENT** Error@1: Unbalanced parens */
																														}		return	N     (t, e), x(t,[{
																															key:"render", value:function() {
																																var		e = this,
																																		t = this.props,
																																		n = t.children,
																																		a = t.className,
																																		s = t.components,
																																		r = t.cx,
																																		i = t.data,
																																		o = t.getStyles,
																																		c = t.innerProps,
																																		u = t.isDisabled,
																																		l = t.removeProps,
																																		d = t.selectProps,
																																		h = s.Container,
																																		p = s.Label,
																																		m = s.Remove;
/**INDENT** Error@1: Unbalanced parens */
																																		return	me     (be, null, (function(t) {
																																	var		s = t.css,
																																			f = t.cx;
/**INDENT** Error@1: Unbalanced parens */
																																			return	me     (h, {
/**INDENT** Error@1: Unbalanced parens */
																																data: i, innerProps:T({
																																		}, c, {
/**INDENT** Error@1: Unbalanced parens */
																																	className:	f(s(o("multiValue", e.props)), r({
																																		"multi-value": !0, "multi-value--is-disabled":u
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																			}              , a))
/**INDENT** Warning@1: Extra ) */
																																})             , selectProps:		d
/**INDENT** Error@1: Unbalanced parens */
																																	}              , me(p, {
																																data: i, innerProps:{
/**INDENT** Error@1: Unbalanced parens */
																																	className:	f(s(o("multiValueLabel", e.props)), r({
																																		"multi-value__label":!0
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																			}, a))
																																}, selectProps:d
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																	}, n), me(m, {
/**INDENT** Error@1: Unbalanced parens */
																																data: i, innerProps:T({
/**INDENT** Error@1: Unbalanced parens */
																																	className:	f(s(o("multiValueRemove", e.props)), r({
																																		"multi-value__remove":!0
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																			}, a))
/**INDENT** Warning@1: Extra ) */
																																}, l), selectProps:d
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																	}))
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																}))
																															}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																														}]), t
																													} (a.Component);
/**INDENT** Error@1: Unbalanced parens */
																													E(it, "defaultProps", {
																												cropWithEllipsis:!0
/**INDENT** Warning@1: Extra ) */
																													});
																													var		ot = {ClearIndicator:function(e) {var t = e.children, n = e.className, a = e.cx, s = e.getStyles, r = e.innerProps;
/**INDENT** Error@1: Unbalanced parens */
																															return me("div", u({
																															}, r, {
/**INDENT** Error@1: Unbalanced parens */
																														css: s("clearIndicator", e), className:a({
																															indicator: !0, "clear-indicator":!0
/**INDENT** Warning@1: Extra ) */
																																}              , n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																															})             , t || me(Xe, null))
																											}              , Control:		function      (e) {
																														var		t = e.children,
																																n = e.cx,
																																a = e.getStyles,
																																s = e.className,
																																r = e.isDisabled,
																																i = e.isFocused,
																																o = e.innerRef,
																																c = e.innerProps,
																																l = e.menuIsOpen;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
/**INDENT** Error@1: Unbalanced parens */
																													ref: o, css: a("control", e), className:n({
																														control: !0, "control--is-disabled": r, "control--is-focused": i, "control--menu-is-open":l
/**INDENT** Warning@1: Extra ) */
																															}, s)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}, c), t)
																											}, DropdownIndicator:function(e) {
																														var		t = e.children,
																																n = e.className,
																																a = e.cx,
																																s = e.getStyles,
																																r = e.innerProps;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
																														}, r, {
/**INDENT** Error@1: Unbalanced parens */
																													css: s("dropdownIndicator", e), className:a({
																														indicator: !0, "dropdown-indicator":!0
/**INDENT** Warning@1: Extra ) */
																															}, n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}), t || me($e, null))
																											}, DownChevron: $e, CrossIcon: Xe, Group:function(e) {
																														var		t = e.children,
																																n = e.className,
																																a = e.cx,
																																s = e.getStyles,
																																r = e.Heading,
																																i = e.headingProps,
																																o = e.label,
																																c = e.theme,
																																l = e.selectProps;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", {
/**INDENT** Error@1: Unbalanced parens */
																													css: s("group", e), className:a({
																														group:		!0
/**INDENT** Warning@1: Extra ) */
																															}, n)
/**INDENT** Error@1: Unbalanced parens */
																														}, me(r, u({
																														}, i, {
																													selectProps: l, theme: c, getStyles: s, cx:a
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}), o), me("div", null, t))
																											}, GroupHeading:function(e) {
																														var		t = e.className,
																																n = e.cx,
																																a = e.getStyles,
																																s = e.theme,
																																r = (e.selectProps, w(e,["className", "cx", "getStyles", "theme", "selectProps"]));
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
/**INDENT** Error@1: Unbalanced parens */
																													css:		a("groupHeading", T({
																														theme:		s
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																													}, r)), className:n({
																														"group-heading":!0
/**INDENT** Warning@1: Extra ) */
																															}, t)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}, r))
																											}, IndicatorsContainer:function(e) {
																														var		t = e.children,
																																n = e.className,
																																a = e.cx,
																																s = e.getStyles;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", {
/**INDENT** Error@1: Unbalanced parens */
																													css: s("indicatorsContainer", e), className:a({
																														indicators:	!0
/**INDENT** Warning@1: Extra ) */
																															}, n)
/**INDENT** Warning@1: Extra ) */
																														}, t)
																											}, IndicatorSeparator:function(e) {
																														var		t = e.className,
																																n = e.cx,
																																a = e.getStyles,
																																s = e.innerProps;
/**INDENT** Error@1: Unbalanced parens */
																														return me("span", u({
																														}, s, {
/**INDENT** Error@1: Unbalanced parens */
																													css: a("indicatorSeparator", e), className:n({
																														"indicator-separator":!0
/**INDENT** Warning@1: Extra ) */
																															}, t)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}))
																											}, Input:	function(e) {
																														var		t = e.className,
																																n = e.cx,
																																a = e.getStyles,
																																s = e.innerRef,
																																r = e.isHidden,
																																i = e.isDisabled,
																																o = e.theme,
																																c = (e.selectProps, w(e,["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]));
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", {
/**INDENT** Error@1: Unbalanced parens */
																													css:		a("input", T({
																														theme:		o
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																															}, c))
/**INDENT** Error@1: Unbalanced parens */
																														}, me(Le.a, u({
/**INDENT** Error@1: Unbalanced parens */
																													className:	n({
																														input:		!0
/**INDENT** Warning@1: Extra ) */
																													}, t), inputRef: s, inputStyle: tt(r), disabled:i
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}, c)))
																											}, LoadingIndicator: et, Menu:function(e) {
																														var		t = e.children,
																																n = e.className,
																																a = e.cx,
																																s = e.getStyles,
																																r = e.innerRef,
																																i = e.innerProps;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
/**INDENT** Error@1: Unbalanced parens */
																													css: s("menu", e), className:a({
																														menu:		!0
/**INDENT** Warning@1: Extra ) */
																															}, n)
																														}, i, {
																													ref:		r
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}), t)
																											}, MenuList:	function(e) {
																														var		t = e.children,
																																n = e.className,
																																a = e.cx,
																																s = e.getStyles,
																																r = e.isMulti,
																																i = e.innerRef;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", {
/**INDENT** Error@1: Unbalanced parens */
																													css: s("menuList", e), className:a({
																														"menu-list": !0, "menu-list--is-multi":r
/**INDENT** Warning@1: Extra ) */
																													}, n), ref:	i
/**INDENT** Warning@1: Extra ) */
																														}, t)
																											}, MenuPortal: De, LoadingMessage: qe, NoOptionsMessage: Ve, MultiValue: it, MultiValueContainer: at, MultiValueLabel: st, MultiValueRemove: rt, Option:function(e) {
																														var		t = e.children,
																																n = e.className,
																																a = e.cx,
																																s = e.getStyles,
																																r = e.isDisabled,
																																i = e.isFocused,
																																o = e.isSelected,
																																c = e.innerRef,
																																l = e.innerProps;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
/**INDENT** Error@1: Unbalanced parens */
																													css: s("option", e), className:a({
																														option: !0, "option--is-disabled": r, "option--is-focused": i, "option--is-selected":o
/**INDENT** Warning@1: Extra ) */
																													}, n), ref:	c
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}, l), t)
																											}, Placeholder:function(e) {
																														var		t = e.children,
																																n = e.className,
																																a = e.cx,
																																s = e.getStyles,
																																r = e.innerProps;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
/**INDENT** Error@1: Unbalanced parens */
																													css: s("placeholder", e), className:a({
																														placeholder:	!0
/**INDENT** Warning@1: Extra ) */
																															}, n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}, r), t)
																											}, SelectContainer:function(e) {
																														var		t = e.children,
																																n = e.className,
																																a = e.cx,
																																s = e.getStyles,
																																r = e.innerProps,
																																i = e.isDisabled,
																																o = e.isRtl;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
/**INDENT** Error@1: Unbalanced parens */
																													css: s("container", e), className:a({
																														"--is-disabled": i, "--is-rtl":o
/**INDENT** Warning@1: Extra ) */
																															}, n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}, r), t)
																											}, SingleValue:function(e) {
																														var		t = e.children,
																																n = e.className,
																																a = e.cx,
																																s = e.getStyles,
																																r = e.isDisabled,
																																i = e.innerProps;
/**INDENT** Error@1: Unbalanced parens */
																														return me("div", u({
/**INDENT** Error@1: Unbalanced parens */
																													css: s("singleValue", e), className:a({
																														"single-value": !0, "single-value--is-disabled":r
/**INDENT** Warning@1: Extra ) */
																															}, n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}, i), t)
																											}, ValueContainer:Be
/**INDENT** Error@1: Unbalanced parens */
																													}, ct =[{
																												base: "A", letters:/[\u0041 \ u24B6 \ uFF21 \ u00C0 \ u00C1 \ u00C2 \ u1EA6 \ u1EA4 \ u1EAA \ u1EA8 \ u00C3 \ u0100 \ u0102 \ u1EB0 \ u1EAE \ u1EB4 \ u1EB2 \ u0226 \ u01E0 \ u00C4 \ u01DE \ u1EA2 \ u00C5 \ u01FA \ u01CD \ u0200 \ u0202 \ u1EA0 \ u1EAC \ u1EB6 \ u1E00 \ u0104 \ u023A \ u2C6F] / g
																													}, {
																												base: "AA", letters:/[\uA732] / g
																													}, {
																												base: "AE", letters:/[\u00C6 \ u01FC \ u01E2] / g
																													}, {
																												base: "AO", letters:/[\uA734] / g
																													}, {
																												base: "AU", letters:/[\uA736] / g
																													}, {
																												base: "AV", letters:/[\uA738 \ uA73A] / g
																													}, {
																												base: "AY", letters:/[\uA73C] / g
																													}, {
																												base: "B", letters:/[\u0042 \ u24B7 \ uFF22 \ u1E02 \ u1E04 \ u1E06 \ u0243 \ u0182 \ u0181] / g
																													}, {
																												base: "C", letters:/[\u0043 \ u24B8 \ uFF23 \ u0106 \ u0108 \ u010A \ u010C \ u00C7 \ u1E08 \ u0187 \ u023B \ uA73E] / g
																													}, {
																												base: "D", letters:/[\u0044 \ u24B9 \ uFF24 \ u1E0A \ u010E \ u1E0C \ u1E10 \ u1E12 \ u1E0E \ u0110 \ u018B \ u018A \ u0189 \ uA779] / g
																													}, {
																												base: "DZ", letters:/[\u01F1 \ u01C4] / g
																													}, {
																												base: "Dz", letters:/[\u01F2 \ u01C5] / g
																													}, {
																												base: "E", letters:/[\u0045 \ u24BA \ uFF25 \ u00C8 \ u00C9 \ u00CA \ u1EC0 \ u1EBE \ u1EC4 \ u1EC2 \ u1EBC \ u0112 \ u1E14 \ u1E16 \ u0114 \ u0116 \ u00CB \ u1EBA \ u011A \ u0204 \ u0206 \ u1EB8 \ u1EC6 \ u0228 \ u1E1C \ u0118 \ u1E18 \ u1E1A \ u0190 \ u018E] / g
																													}, {
																												base: "F", letters:/[\u0046 \ u24BB \ uFF26 \ u1E1E \ u0191 \ uA77B] / g
																													}, {
																												base: "G", letters:/[\u0047 \ u24BC \ uFF27 \ u01F4 \ u011C \ u1E20 \ u011E \ u0120 \ u01E6 \ u0122 \ u01E4 \ u0193 \ uA7A0 \ uA77D \ uA77E] / g
																													}, {
																												base: "H", letters:/[\u0048 \ u24BD \ uFF28 \ u0124 \ u1E22 \ u1E26 \ u021E \ u1E24 \ u1E28 \ u1E2A \ u0126 \ u2C67 \ u2C75 \ uA78D] / g
																													}, {
																												base: "I", letters:/[\u0049 \ u24BE \ uFF29 \ u00CC \ u00CD \ u00CE \ u0128 \ u012A \ u012C \ u0130 \ u00CF \ u1E2E \ u1EC8 \ u01CF \ u0208 \ u020A \ u1ECA \ u012E \ u1E2C \ u0197] / g
																													}, {
																												base: "J", letters:/[\u004A \ u24BF \ uFF2A \ u0134 \ u0248] / g
																													}, {
																												base: "K", letters:/[\u004B \ u24C0 \ uFF2B \ u1E30 \ u01E8 \ u1E32 \ u0136 \ u1E34 \ u0198 \ u2C69 \ uA740 \ uA742 \ uA744 \ uA7A2] / g
																													}, {
																												base: "L", letters:/[\u004C \ u24C1 \ uFF2C \ u013F \ u0139 \ u013D \ u1E36 \ u1E38 \ u013B \ u1E3C \ u1E3A \ u0141 \ u023D \ u2C62 \ u2C60 \ uA748 \ uA746 \ uA780] / g
																													}, {
																												base: "LJ", letters:/[\u01C7] / g
																													}, {
																												base: "Lj", letters:/[\u01C8] / g
																													}, {
																												base: "M", letters:/[\u004D \ u24C2 \ uFF2D \ u1E3E \ u1E40 \ u1E42 \ u2C6E \ u019C] / g
																													}, {
																												base: "N", letters:/[\u004E \ u24C3 \ uFF2E \ u01F8 \ u0143 \ u00D1 \ u1E44 \ u0147 \ u1E46 \ u0145 \ u1E4A \ u1E48 \ u0220 \ u019D \ uA790 \ uA7A4] / g
																													}, {
																												base: "NJ", letters:/[\u01CA] / g
																													}, {
																												base: "Nj", letters:/[\u01CB] / g
																													}, {
																												base: "O", letters:/[\u004F \ u24C4 \ uFF2F \ u00D2 \ u00D3 \ u00D4 \ u1ED2 \ u1ED0 \ u1ED6 \ u1ED4 \ u00D5 \ u1E4C \ u022C \ u1E4E \ u014C \ u1E50 \ u1E52 \ u014E \ u022E \ u0230 \ u00D6 \ u022A \ u1ECE \ u0150 \ u01D1 \ u020C \ u020E \ u01A0 \ u1EDC \ u1EDA \ u1EE0 \ u1EDE \ u1EE2 \ u1ECC \ u1ED8 \ u01EA \ u01EC \ u00D8 \ u01FE \ u0186 \ u019F \ uA74A \ uA74C] / g
																													}, {
																												base: "OI", letters:/[\u01A2] / g
																													}, {
																												base: "OO", letters:/[\uA74E] / g
																													}, {
																												base: "OU", letters:/[\u0222] / g
																													}, {
																												base: "P", letters:/[\u0050 \ u24C5 \ uFF30 \ u1E54 \ u1E56 \ u01A4 \ u2C63 \ uA750 \ uA752 \ uA754] / g
																													}, {
																												base: "Q", letters:/[\u0051 \ u24C6 \ uFF31 \ uA756 \ uA758 \ u024A] / g
																													}, {
																												base: "R", letters:/[\u0052 \ u24C7 \ uFF32 \ u0154 \ u1E58 \ u0158 \ u0210 \ u0212 \ u1E5A \ u1E5C \ u0156 \ u1E5E \ u024C \ u2C64 \ uA75A \ uA7A6 \ uA782] / g
																													}, {
																												base: "S", letters:/[\u0053 \ u24C8 \ uFF33 \ u1E9E \ u015A \ u1E64 \ u015C \ u1E60 \ u0160 \ u1E66 \ u1E62 \ u1E68 \ u0218 \ u015E \ u2C7E \ uA7A8 \ uA784] / g
																													}, {
																												base: "T", letters:/[\u0054 \ u24C9 \ uFF34 \ u1E6A \ u0164 \ u1E6C \ u021A \ u0162 \ u1E70 \ u1E6E \ u0166 \ u01AC \ u01AE \ u023E \ uA786] / g
																													}, {
																												base: "TZ", letters:/[\uA728] / g
																													}, {
																												base: "U", letters:/[\u0055 \ u24CA \ uFF35 \ u00D9 \ u00DA \ u00DB \ u0168 \ u1E78 \ u016A \ u1E7A \ u016C \ u00DC \ u01DB \ u01D7 \ u01D5 \ u01D9 \ u1EE6 \ u016E \ u0170 \ u01D3 \ u0214 \ u0216 \ u01AF \ u1EEA \ u1EE8 \ u1EEE \ u1EEC \ u1EF0 \ u1EE4 \ u1E72 \ u0172 \ u1E76 \ u1E74 \ u0244] / g
																													}, {
																												base: "V", letters:/[\u0056 \ u24CB \ uFF36 \ u1E7C \ u1E7E \ u01B2 \ uA75E \ u0245] / g
																													}, {
																												base: "VY", letters:/[\uA760] / g
																													}, {
																												base: "W", letters:/[\u0057 \ u24CC \ uFF37 \ u1E80 \ u1E82 \ u0174 \ u1E86 \ u1E84 \ u1E88 \ u2C72] / g
																													}, {
																												base: "X", letters:/[\u0058 \ u24CD \ uFF38 \ u1E8A \ u1E8C] / g
																													}, {
																												base: "Y", letters:/[\u0059 \ u24CE \ uFF39 \ u1EF2 \ u00DD \ u0176 \ u1EF8 \ u0232 \ u1E8E \ u0178 \ u1EF6 \ u1EF4 \ u01B3 \ u024E \ u1EFE] / g
																													}, {
																												base: "Z", letters:/[\u005A \ u24CF \ uFF3A \ u0179 \ u1E90 \ u017B \ u017D \ u1E92 \ u1E94 \ u01B5 \ u0224 \ u2C7F \ u2C6B \ uA762] / g
																													}, {
																												base: "a", letters:/[\u0061 \ u24D0 \ uFF41 \ u1E9A \ u00E0 \ u00E1 \ u00E2 \ u1EA7 \ u1EA5 \ u1EAB \ u1EA9 \ u00E3 \ u0101 \ u0103 \ u1EB1 \ u1EAF \ u1EB5 \ u1EB3 \ u0227 \ u01E1 \ u00E4 \ u01DF \ u1EA3 \ u00E5 \ u01FB \ u01CE \ u0201 \ u0203 \ u1EA1 \ u1EAD \ u1EB7 \ u1E01 \ u0105 \ u2C65 \ u0250] / g
																													}, {
																												base: "aa", letters:/[\uA733] / g
																													}, {
																												base: "ae", letters:/[\u00E6 \ u01FD \ u01E3] / g
																													}, {
																												base: "ao", letters:/[\uA735] / g
																													}, {
																												base: "au", letters:/[\uA737] / g
																													}, {
																												base: "av", letters:/[\uA739 \ uA73B] / g
																													}, {
																												base: "ay", letters:/[\uA73D] / g
																													}, {
																												base: "b", letters:/[\u0062 \ u24D1 \ uFF42 \ u1E03 \ u1E05 \ u1E07 \ u0180 \ u0183 \ u0253] / g
																													}, {
																												base: "c", letters:/[\u0063 \ u24D2 \ uFF43 \ u0107 \ u0109 \ u010B \ u010D \ u00E7 \ u1E09 \ u0188 \ u023C \ uA73F \ u2184] / g
																													}, {
																												base: "d", letters:/[\u0064 \ u24D3 \ uFF44 \ u1E0B \ u010F \ u1E0D \ u1E11 \ u1E13 \ u1E0F \ u0111 \ u018C \ u0256 \ u0257 \ uA77A] / g
																													}, {
																												base: "dz", letters:/[\u01F3 \ u01C6] / g
																													}, {
																												base: "e", letters:/[\u0065 \ u24D4 \ uFF45 \ u00E8 \ u00E9 \ u00EA \ u1EC1 \ u1EBF \ u1EC5 \ u1EC3 \ u1EBD \ u0113 \ u1E15 \ u1E17 \ u0115 \ u0117 \ u00EB \ u1EBB \ u011B \ u0205 \ u0207 \ u1EB9 \ u1EC7 \ u0229 \ u1E1D \ u0119 \ u1E19 \ u1E1B \ u0247 \ u025B \ u01DD] / g
																													}, {
																												base: "f", letters:/[\u0066 \ u24D5 \ uFF46 \ u1E1F \ u0192 \ uA77C] / g
																													}, {
																												base: "g", letters:/[\u0067 \ u24D6 \ uFF47 \ u01F5 \ u011D \ u1E21 \ u011F \ u0121 \ u01E7 \ u0123 \ u01E5 \ u0260 \ uA7A1 \ u1D79 \ uA77F] / g
																													}, {
																												base: "h", letters:/[\u0068 \ u24D7 \ uFF48 \ u0125 \ u1E23 \ u1E27 \ u021F \ u1E25 \ u1E29 \ u1E2B \ u1E96 \ u0127 \ u2C68 \ u2C76 \ u0265] / g
																													}, {
																												base: "hv", letters:/[\u0195] / g
																													}, {
																												base: "i", letters:/[\u0069 \ u24D8 \ uFF49 \ u00EC \ u00ED \ u00EE \ u0129 \ u012B \ u012D \ u00EF \ u1E2F \ u1EC9 \ u01D0 \ u0209 \ u020B \ u1ECB \ u012F \ u1E2D \ u0268 \ u0131] / g
																													}, {
																												base: "j", letters:/[\u006A \ u24D9 \ uFF4A \ u0135 \ u01F0 \ u0249] / g
																													}, {
																												base: "k", letters:/[\u006B \ u24DA \ uFF4B \ u1E31 \ u01E9 \ u1E33 \ u0137 \ u1E35 \ u0199 \ u2C6A \ uA741 \ uA743 \ uA745 \ uA7A3] / g
																													}, {
																												base: "l", letters:/[\u006C \ u24DB \ uFF4C \ u0140 \ u013A \ u013E \ u1E37 \ u1E39 \ u013C \ u1E3D \ u1E3B \ u017F \ u0142 \ u019A \ u026B \ u2C61 \ uA749 \ uA781 \ uA747] / g
																													}, {
																												base: "lj", letters:/[\u01C9] / g
																													}, {
																												base: "m", letters:/[\u006D \ u24DC \ uFF4D \ u1E3F \ u1E41 \ u1E43 \ u0271 \ u026F] / g
																													}, {
																												base: "n", letters:/[\u006E \ u24DD \ uFF4E \ u01F9 \ u0144 \ u00F1 \ u1E45 \ u0148 \ u1E47 \ u0146 \ u1E4B \ u1E49 \ u019E \ u0272 \ u0149 \ uA791 \ uA7A5] / g
																													}, {
																												base: "nj", letters:/[\u01CC] / g
																													}, {
																												base: "o", letters:/[\u006F \ u24DE \ uFF4F \ u00F2 \ u00F3 \ u00F4 \ u1ED3 \ u1ED1 \ u1ED7 \ u1ED5 \ u00F5 \ u1E4D \ u022D \ u1E4F \ u014D \ u1E51 \ u1E53 \ u014F \ u022F \ u0231 \ u00F6 \ u022B \ u1ECF \ u0151 \ u01D2 \ u020D \ u020F \ u01A1 \ u1EDD \ u1EDB \ u1EE1 \ u1EDF \ u1EE3 \ u1ECD \ u1ED9 \ u01EB \ u01ED \ u00F8 \ u01FF \ u0254 \ uA74B \ uA74D \ u0275] / g
																													}, {
																												base: "oi", letters:/[\u01A3] / g
																													}, {
																												base: "ou", letters:/[\u0223] / g
																													}, {
																												base: "oo", letters:/[\uA74F] / g
																													}, {
																												base: "p", letters:/[\u0070 \ u24DF \ uFF50 \ u1E55 \ u1E57 \ u01A5 \ u1D7D \ uA751 \ uA753 \ uA755] / g
																													}, {
																												base: "q", letters:/[\u0071 \ u24E0 \ uFF51 \ u024B \ uA757 \ uA759] / g
																													}, {
																												base: "r", letters:/[\u0072 \ u24E1 \ uFF52 \ u0155 \ u1E59 \ u0159 \ u0211 \ u0213 \ u1E5B \ u1E5D \ u0157 \ u1E5F \ u024D \ u027D \ uA75B \ uA7A7 \ uA783] / g
																													}, {
																												base: "s", letters:/[\u0073 \ u24E2 \ uFF53 \ u00DF \ u015B \ u1E65 \ u015D \ u1E61 \ u0161 \ u1E67 \ u1E63 \ u1E69 \ u0219 \ u015F \ u023F \ uA7A9 \ uA785 \ u1E9B] / g
																													}, {
																												base: "t", letters:/[\u0074 \ u24E3 \ uFF54 \ u1E6B \ u1E97 \ u0165 \ u1E6D \ u021B \ u0163 \ u1E71 \ u1E6F \ u0167 \ u01AD \ u0288 \ u2C66 \ uA787] / g
																													}, {
																												base: "tz", letters:/[\uA729] / g
																													}, {
																												base: "u", letters:/[\u0075 \ u24E4 \ uFF55 \ u00F9 \ u00FA \ u00FB \ u0169 \ u1E79 \ u016B \ u1E7B \ u016D \ u00FC \ u01DC \ u01D8 \ u01D6 \ u01DA \ u1EE7 \ u016F \ u0171 \ u01D4 \ u0215 \ u0217 \ u01B0 \ u1EEB \ u1EE9 \ u1EEF \ u1EED \ u1EF1 \ u1EE5 \ u1E73 \ u0173 \ u1E77 \ u1E75 \ u0289] / g
																													}, {
																												base: "v", letters:/[\u0076 \ u24E5 \ uFF56 \ u1E7D \ u1E7F \ u028B \ uA75F \ u028C] / g
																													}, {
																												base: "vy", letters:/[\uA761] / g
																													}, {
																												base: "w", letters:/[\u0077 \ u24E6 \ uFF57 \ u1E81 \ u1E83 \ u0175 \ u1E87 \ u1E85 \ u1E98 \ u1E89 \ u2C73] / g
																													}, {
																												base: "x", letters:/[\u0078 \ u24E7 \ uFF58 \ u1E8B \ u1E8D] / g
																													}, {
																												base: "y", letters:/[\u0079 \ u24E8 \ uFF59 \ u1EF3 \ u00FD \ u0177 \ u1EF9 \ u0233 \ u1E8F \ u00FF \ u1EF7 \ u1E99 \ u1EF5 \ u01B4 \ u024F \ u1EFF] / g
																													}, {
																												base: "z", letters:/[\u007A \ u24E9 \ uFF5A \ u017A \ u1E91 \ u017C \ u017E \ u1E93 \ u1E95 \ u01B6 \ u0225 \ u0240 \ u2C6C \ uA763] / g
/**INDENT** Warning@1: Extra ] */
																													}], ut = function(e) {
																														for (var t = 0; t < ct.length; t++)
																															e = e.replace(ct[t].letters, ct[t].base);
																														return e
																													}, lt = function(e) {
																														return e.replace(/^\s + |\s + $ / g, "")
																													}, dt = function(e) {
																														return "".concat(e.label, " ").concat(e.value)
																													}, ht = {
																												name: "1laao21-a11yText", styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;"
																													}, pt = function(e) {
/**INDENT** Error@1: Unbalanced parens */
																														return me("span", u({
																													css:		ht
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																														}, e))
																													}, mt = function(e) {
																														function	t      () {
																															return A(this, t), k(this, M(t).apply(this, arguments))
/**INDENT** Error@1: Unbalanced parens */
																														}		return	N     (t, e), x(t,[{
																															key:"render", value:function() {
																																var		e = this.props,
																																		t = (e.in, e.out, e.onExited, e.appear, e.enter, e.exit, e.innerRef),
																																		n = (e.emotion, w(e,["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]));
/**INDENT** Error@1: Unbalanced parens */
																																		return	me     ("input", u({
																															ref:		t
																																}, n, {
/**INDENT** Error@1: Unbalanced parens */
																															css:		re({
																																label: "dummyInput", background: 0, border: 0, fontSize: "inherit", outline: 0, padding: 0, width: 1, color: "transparent", left: -100, opacity: 0, position: "relative", transform:"scale(0)"
/**INDENT** Warning@1: Extra ) */
																																	}              , "")
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																}))
																															}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																														}])            , t
																													}               (a.Component), ft = function(e) {
																														function	t      () {
																															return A(this, t), k(this, M(t).apply(this, arguments))
/**INDENT** Error@1: Unbalanced parens */
																														}		return	N     (t, e), x(t,[{
																															key:"componentDidMount", value:function() {
																																this.props.innerRef(Object(r.findDOMNode) (this))
																															}
																														}              , {
																															key:"componentWillUnmount", value:function() {
																																this.props.innerRef(null)
																															}
																														}              , {
																															key:"render", value:function() {
																																return this.props.children
																															}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																														}])            , t
																													}               (a.Component), _t =["boxSizing", "height", "overflow", "paddingRight", "position"], bt = {boxSizing:"border-box", overflow:"hidden", position:"relative", height:"100%"};
																													function	gt     (e) {
																														e.preventDefault()
																													} function	vt   (e) {
																														e.stopPropagation()
																													} function	Pt   () {
																														var		e = this.scrollTop,
																																t = this.scrollHeight,
																																n = e + this.offsetHeight;
																																0 == =	e ?	this.scrollTop = 1 : n == = t && (this.scrollTop = e - 1)
																													} function	wt   () {
																														return "ontouchstart" in window || navigator.maxTouchPoints
																													} var		yt = !(!window.document || !window.document.createElement),
																															Et = 0,
																															Tt = function(e) {function t() {var e, n;
																															A(this, t);
																															for (var a = arguments.length, s = new Array(a), r = 0; r < a; r++)
																																s[r] = arguments[r];
/**INDENT** Error@1: Unbalanced parens */
																															return E(L(L(n = k(this, (e = M(t)).call.apply(e,[this].concat(s))))), "originalStyles", {
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															}), E(L(L(n)), "listenerOptions", {
																														capture: !1, passive:!1
/**INDENT** Warning@1: Extra ) */
																															})             , n
/**INDENT** Error@1: Unbalanced parens */
																													}		return	N     (t, e), x(t,[{
																												key: "componentDidMount", value:function() {
																															var		e = this;
																															if (yt) {
																																var		t = this.props,
																																		n = t.accountForScrollbars,
																																		a = t.touchScrollTarget,
																																		s = document.body,
																																		r = s && s.style;
/**INDENT** Error@1: Unbalanced parens */
																																	if (n && _t.forEach((function(t) {
																																	var		n = r && r[t];
																																	e.originalStyles[t] = n
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																	})), n && Et < 1) {
																																	var		i = parseInt(this.originalStyles.paddingRight, 10) || 0,
																																			o = document.body ? document.body.clientWidth : 0,
																																			c = window.innerWidth - o + i || 0;
/**INDENT** Error@1: Unbalanced parens */
																																	Object.keys(bt).forEach((function(e) {
																																		var		t = bt[e];
																																		r && (r[e] = t)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																	})), r && (r.paddingRight = "".concat(c, "px"))
																																	} s && wt() && (s.addEventListener("touchmove", gt, this.listenerOptions), a && (a.addEventListener("touchstart", Pt, this.listenerOptions), a.addEventListener("touchmove", vt, this.listenerOptions))), Et += 1
																															}
																														}
																													}, {
																												key: "componentWillUnmount", value:function() {
																															var		e = this;
																															if (yt) {
																																var		t = this.props,
																																		n = t.accountForScrollbars,
																																		a = t.touchScrollTarget,
																																		s = document.body,
																																		r = s && s.style;
/**INDENT** Error@1: Unbalanced parens */
																																Et = Math.max(Et - 1, 0), n && Et < 1 && _t.forEach((function(t) {
																																	var		n = e.originalStyles[t];
																																	r && (r[t] = n)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																})), s && wt() && (s.removeEventListener("touchmove", gt, this.listenerOptions), a && (a.removeEventListener("touchstart", Pt, this.listenerOptions), a.removeEventListener("touchmove", vt, this.listenerOptions)))
																															}
																														}
																													}, {
																												key: "render", value:function() {
																															return null
																														}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																													}]), t
																													} (a.Component);
/**INDENT** Error@1: Unbalanced parens */
																													E(Tt, "defaultProps", {
																												accountForScrollbars:!0
/**INDENT** Warning@1: Extra ) */
																													});
																													var		At = {name:"1dsbpcp", styles:"position:fixed;left:0;bottom:0;right:0;top:0;"}, Ct = function(e) {function t() {var e, n;
																															A(this, t);
																															for (var a = arguments.length, s = new Array(a), r = 0; r < a; r++)
																																s[r] = arguments[r];
/**INDENT** Error@1: Unbalanced parens */
																															return E(L(L(n = k(this, (e = M(t)).call.apply(e,[this].concat(s))))), "state", {
																														touchScrollTarget:null
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															}), E(L(L(n)), "getScrollTarget", (function(e) {
/**INDENT** Error@1: Unbalanced parens */
																																e !== n.state.touchScrollTarget && n.setState({
																															touchScrollTarget:e
/**INDENT** Warning@1: Extra ) */
																																})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															}))            , E(L(L(n)), "blurSelectInput", (function() {
																																document.activeElement && document.activeElement.blur()
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																															})), n
/**INDENT** Error@1: Unbalanced parens */
																													} return N(t, e), x(t,[{
																												key: "render", value:function() {
																															var		e = this.props,
																																	t = e.children,
																																	n = e.isEnabled,
																																	a = this.state.touchScrollTarget;
/**INDENT** Error@1: Unbalanced parens */
																															return n ? me("div", null, me("div", {
																														onClick : this.blurSelectInput, css:At
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															}), me(ft, {
																														innerRef:	this.getScrollTarget
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															}, t), a ? me(Tt, {
																																touchScrollTarget : a
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																													}): null):	t
																														}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																													}]), t
																													} (a.PureComponent), xt = function(e) {
																														function	t      () {
																															var		e         ,
																																	n;
																																	A             (this, t);
																															for             (var a = arguments.length, s = new Array(a), r = 0; r < a; r++)
																																		s             [r] = arguments[r];
/**INDENT** Error@1: Unbalanced parens */
																																	return	E      (L(L(n = k(this, (e = M(t)).call.apply(e,[this].concat(s))))), "isBottom", !1), E(L(L(n)), "isTop", !1), E(L(L(n)), "scrollTarget", void 0), E(L(L(n)), "touchStart", void 0), E(L(L(n)), "cancelScroll", (function(e) {
																																e.preventDefault(), e.stopPropagation()
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															}))            , E(L(L(n)), "handleEventDelta", (function(e, t) {
																																var		a = n.props,
																																		s = a.onBottomArrive,
																																		r = a.onBottomLeave,
																																		i = a.onTopArrive,
																																		o = a.onTopLeave,
																																		c = n.scrollTarget,
																																		u = c.scrollTop,
																																		l = c.scrollHeight,
																																		d = c.clientHeight,
																																		h = n.scrollTarget,
																																		p = t > 0,
																																		m = l - d - u,
																																		f = !1;
																																m > t && n.isBottom && (r && r(e), n.isBottom = !1), p && n.isTop && (o && o(e), n.isTop = !1), p && t > m ? (s && !n.isBottom && s(e), h.scrollTop = l, f = !0, n.isBottom = !0) : !p && -t > u && (i && !n.isTop && i(e), h.scrollTop = 0, f = !0, n.isTop = !0), f && n.cancelScroll(e)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onWheel", (function(e) {
																																n.handleEventDelta(e, e.deltaY)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onTouchStart", (function(e) {
																																n.touchStart = e.changedTouches[0].clientY
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onTouchMove", (function(e) {
																																var		t = n.touchStart - e.changedTouches[0].clientY;
																																n.handleEventDelta(e, t)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "getScrollTarget", (function(e) {
																																n.scrollTarget = e
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																															})), n
/**INDENT** Error@1: Unbalanced parens */
																														} return N(t, e), x(t,[{
																													key: "componentDidMount", value:function() {
																																this.startListening(this.scrollTarget)
																															}
																														}, {
																													key: "componentWillUnmount", value:function() {
																																this.stopListening(this.scrollTarget)
																															}
																														}, {
																													key: "startListening", value:function(e) {
																																e && ("function" == typeof e.addEventListener && e.addEventListener("wheel", this.onWheel, !1), "function" == typeof e.addEventListener && e.addEventListener("touchstart", this.onTouchStart, !1), "function" == typeof e.addEventListener && e.addEventListener("touchmove", this.onTouchMove, !1))
																															}
																														}, {
																													key: "stopListening", value:function(e) {
																																"function" == typeof e.removeEventListener && e.removeEventListener("wheel", this.onWheel, !1), "function" == typeof e.removeEventListener && e.removeEventListener("touchstart", this.onTouchStart, !1), "function" == typeof e.removeEventListener && e.removeEventListener("touchmove", this.onTouchMove, !1)
																															}
																														}, {
																													key: "render", value:function() {
/**INDENT** Error@1: Unbalanced parens */
																																return s.a.createElement(ft, {
																															innerRef:	this.getScrollTarget
/**INDENT** Warning@1: Extra ) */
																																}, this.props.children)
																															}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																														}]), t
																													} (a.Component), Ot = function(e) {
																														function	t      () {
																															return A(this, t), k(this, M(t).apply(this, arguments))
/**INDENT** Error@1: Unbalanced parens */
																														}		return	N     (t, e), x(t,[{
																															key:"render", value:function() {
																																var		e = this.props,
																																		t = e.isEnabled,
																																		n = w(e,["isEnabled"]);
																																		return	t ?	s.	a.createElement(xt, n) : this.props.children
																															}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																														}])            , t
																													}               (a.Component);
/**INDENT** Error@1: Unbalanced parens */
																													E(Ot, "defaultProps", {
																												isEnabled:	!0
/**INDENT** Warning@1: Extra ) */
																													});
																													var		Lt = function(e) {var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.isSearchable, a = t.isMulti, s = t.label, r = t.isDisabled;
																														switch          (e) {
																														case "menu":
																															return "Use Up and Down to choose options".concat(r ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu, press Tab to select the option and exit the menu.");
																														case "input":
																															return "".concat(s || "Select", " is focused ").concat(n ? ",type to refine list" : "", ", press Down to open the menu, ").concat(a ? " press left to focus selected values" : "");
																														case "value":
																															return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value"
																														}
																													}              , kt = function(e, t) {
																														var		n = t.value,
																																a = t.isDisabled;
																														if (n)
																															switch (e) {
																															case "deselect-option":
																															case "pop-value":
																															case "remove-value":
																																return "option ".concat(n, ", deselected.");
																															case "select-option":
																																return "option ".concat(n, a ? " is disabled. Select another option." : ", selected.")
																															}
																													}, Mt = function(e) {
																														return !!e.isDisabled
																													}, St = {
																												clearIndicator: Qe, container:function(e) {
																															var		t = e.isDisabled;
																															return {
																														label: "container", direction: e.isRtl ? "rtl" : null, pointerEvents: t ? "none" : null, position:"relative"
																															}
																												}, control:	function(e) {
																															var		t = e.isDisabled,
																																	n = e.isFocused,
																																	a = e.theme,
																																	s = a.colors,
																																	r = a.borderRadius,
																																	i = a.spacing;
																															return {
																														label: "control", alignItems: "center", backgroundColor: t ? s.neutral5 : s.neutral0, borderColor: t ? s.neutral10 : n ? s.primary : s.neutral20, borderRadius: r, borderStyle: "solid", borderWidth: 1, boxShadow: n ? "0 0 0 1px ".concat(s.primary) : null, cursor: "default", display: "flex", flexWrap: "wrap", justifyContent: "space-between", minHeight: i.controlHeight, outline: "0 !important", position: "relative", transition: "all 100ms", "&:hover":{
																															borderColor:	n ? s.primary : s.neutral30
																																}
																															}
																												}, dropdownIndicator: Ye, group:function(e) {
																															var		t = e.theme.spacing;
																															return {
																														paddingBottom: 2 * t.baseUnit, paddingTop:2 * t.baseUnit
																															}
																												}, groupHeading:function(e) {
																															var		t = e.theme.spacing;
																															return {
																														label: "group", color: "#999", cursor: "default", display: "block", fontSize: "75%", fontWeight: "500", marginBottom: "0.25em", paddingLeft: 3 * t.baseUnit, paddingRight: 3 * t.baseUnit, textTransform:"uppercase"
																															}
																												}, indicatorsContainer:function() {
																															return {
																														alignItems: "center", alignSelf: "stretch", display: "flex", flexShrink:0
																															}
																												}, indicatorSeparator:function(e) {
																															var		t = e.isDisabled,
																																	n = e.theme,
																																	a = n.spacing.baseUnit,
																																	s = n.colors;
																															return {
																														label: "indicatorSeparator", alignSelf: "stretch", backgroundColor: t ? s.neutral10 : s.neutral20, marginBottom: 2 * a, marginTop: 2 * a, width:1
																															}
																												}, input:	function(e) {
																															var		t = e.isDisabled,
																																	n = e.theme,
																																	a = n.spacing,
																																	s = n.colors;
																															return {
																														margin: a.baseUnit / 2, paddingBottom: a.baseUnit / 2, paddingTop: a.baseUnit / 2, visibility: t ? "hidden" : "visible", color:s.neutral80
																															}
																												}, loadingIndicator:function(e) {
																															var		t = e.isFocused,
																																	n = e.size,
																																	a = e.theme,
																																	s = a.colors,
																																	r = a.spacing.baseUnit;
																															return {
																														label: "loadingIndicator", color: t ? s.neutral60 : s.neutral20, display: "flex", padding: 2 * r, transition: "color 150ms", alignSelf: "center", fontSize: n, lineHeight: 1, marginRight: n, textAlign: "center", verticalAlign:"middle"
																															}
																												}, loadingMessage: Re, menu:function(e) {
																															var		t         ,
																																	n = e.placement,
																																	a = e.theme,
																																	s = a.borderRadius,
																																	r = a.spacing,
																																	i = a.colors;
/**INDENT** Error@1: Unbalanced parens */
																															return E(t = {
																														label:		"menu"
																															}, function(e) {
																																return e ? {
																															bottom : "top", top:"bottom"
																														}[e]:		"bottom"
/**INDENT** Warning@1: Extra ) */
																															} (n), "100%"), E(t, "backgroundColor", i.neutral0), E(t, "borderRadius", s), E(t, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), E(t, "marginBottom", r.menuGutter), E(t, "marginTop", r.menuGutter), E(t, "position", "absolute"), E(t, "width", "100%"), E(t, "zIndex", 1), t
																												}, menuList:	function(e) {
																															var		t = e.maxHeight,
																																	n = e.theme.spacing.baseUnit;
																															return {
																														maxHeight: t, overflowY: "auto", paddingBottom: n, paddingTop: n, position: "relative", WebkitOverflowScrolling:"touch"
																															}
																												}, menuPortal:	function(e) {
																															var		t = e.rect,
																																	n = e.offset,
																																	a = e.position;
																															return {
																														left: t.left, position: a, top: n, width: t.width, zIndex:1
																															}
																												}, multiValue:	function(e) {
																															var		t = e.theme,
																																	n = t.spacing,
																																	a = t.borderRadius;
																															return {
																														label: "multiValue", backgroundColor: t.colors.neutral10, borderRadius: a / 2, display: "flex", margin: n.baseUnit / 2, minWidth:0
																															}
																												}, multiValueLabel:function(e) {
																															var		t = e.theme,
																																	n = t.borderRadius,
																																	a = t.colors,
																																	s = e.cropWithEllipsis;
																															return {
																														borderRadius: n / 2, color: a.neutral80, fontSize: "85%", overflow: "hidden", padding: 3, paddingLeft: 6, textOverflow: s ? "ellipsis" : null, whiteSpace:"nowrap"
																															}
																												}, multiValueRemove:function(e) {
																															var		t = e.theme,
																																	n = t.spacing,
																																	a = t.borderRadius,
																																	s = t.colors;
																															return {
																														alignItems: "center", borderRadius: a / 2, backgroundColor: e.isFocused && s.dangerLight, display: "flex", paddingLeft: n.baseUnit, paddingRight: n.baseUnit, ":hover":{
																															backgroundColor: s.dangerLight, color:s.danger
																																}
																															}
																												}, noOptionsMessage: Ie, option:function(e) {
																															var		t = e.isDisabled,
																																	n = e.isFocused,
																																	a = e.isSelected,
																																	s = e.theme,
																																	r = s.spacing,
																																	i = s.colors;
																															return {
																														label: "option", backgroundColor: a ? i.primary : n ? i.primary25 : "transparent", color: t ? i.neutral20 : a ? i.neutral0 : "inherit", cursor: "default", display: "block", fontSize: "inherit", padding: "".concat(2 * r.baseUnit, "px ").concat(3 * r.baseUnit, "px"), width: "100%", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", ":active":{
																															backgroundColor:!t && (a ? i.primary : i.primary50)
																																}
																															}
																												}, placeholder:function(e) {
																															var		t = e.theme,
																																	n = t.spacing;
																															return {
																														label: "placeholder", color: t.colors.neutral50, marginLeft: n.baseUnit / 2, marginRight: n.baseUnit / 2, position: "absolute", top: "50%", transform:"translateY(-50%)"
																															}
																												}, singleValue:function(e) {
																															var		t = e.isDisabled,
																																	n = e.theme,
																																	a = n.spacing,
																																	s = n.colors;
																															return {
																														label: "singleValue", color: t ? s.neutral40 : s.neutral80, marginLeft: a.baseUnit / 2, marginRight: a.baseUnit / 2, maxWidth: "calc(100% - ".concat(2 * a.baseUnit, "px)"), overflow: "hidden", position: "absolute", textOverflow: "ellipsis", whiteSpace: "nowrap", top: "50%", transform:"translateY(-50%)"
																															}
																												}, valueContainer:function(e) {
																															var		t = e.theme.spacing;
																															return {
																														alignItems: "center", display: "flex", flex: 1, flexWrap: "wrap", padding: "".concat(t.baseUnit / 2, "px ").concat(2 * t.baseUnit, "px"), WebkitOverflowScrolling: "touch", position: "relative", overflow:"hidden"
																															}
																														}
																													};
																													var		Nt        ,
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
																															It = {borderRadius:4, colors:{primary:"#2684FF", primary75:"#4C9AFF", primary50:"#B2D4FF", primary25:"#DEEBFF", danger:"#DE350B", dangerLight:"#FFBDAD", neutral0:"hsl(0, 0%, 100%)", neutral5:"hsl(0, 0%, 95%)", neutral10:"hsl(0, 0%, 90%)", neutral20:"hsl(0, 0%, 80%)", neutral30:"hsl(0, 0%, 70%)", neutral40:"hsl(0, 0%, 60%)", neutral50:"hsl(0, 0%, 50%)", neutral60:"hsl(0, 0%, 40%)", neutral70:"hsl(0, 0%, 30%)", neutral80:"hsl(0, 0%, 20%)", neutral90:"hsl(0, 0%, 10%)"}, spacing:{baseUnit:4, controlHeight:38, menuGutter:8}}, Rt = {backspaceRemovesValue:!0, blurInputOnSelect:xe(), captureMenuScroll:!xe(), closeMenuOnSelect:!0, closeMenuOnScroll:!1, components:{}, controlShouldRenderValue:!0, escapeClearsValue:!1, filterOption:function(e, t) {var n = T({ignoreCase:!0, ignoreAccents:!0, stringify:dt, trim:!0, matchFrom:"any"}, Nt), a = n.ignoreCase, s = n.ignoreAccents, r = n.stringify, i = n.trim, o = n.matchFrom, c = i ? lt(t) : t, u = i ? lt(r(e)) : r(e);
																													return a && (c = c.toLowerCase(), u = u.toLowerCase()), s && (c = ut(c), u = ut(u)), "start" == = o ? u.substr(0, c.length) == = c : u.indexOf(c) > -1
																											}, formatGroupLabel:function(e) {
																														return e.label
																											}              , getOptionLabel:		function      (e) {
																														return e.label
																											}, getOptionValue:function(e) {
																														return e.value
																											}, isDisabled: !1, isLoading: !1, isMulti: !1, isRtl: !1, isSearchable: !0, isOptionDisabled: Mt, loadingMessage:function() {
																														return "Loading..."
																											}, maxMenuHeight: 300, minMenuHeight: 140, menuIsOpen: !1, menuPlacement: "bottom", menuPosition: "absolute", menuShouldBlockScroll: !1, menuShouldScrollIntoView:!function() {
																														try {
																															return /Android | webOS | iPhone | iPad | iPod | BlackBerry | IEMobile | Opera Mini / i.test(navigator.userAgent)
																														} catch(e) {
																															return !1
																														}
																											} (), noOptionsMessage:function() {
																														return "No options"
																											}, openMenuOnFocus: !1, openMenuOnClick: !0, options: [], pageSize: 5, placeholder: "Select...", screenReaderStatus:function(e) {
																														var		t = e.count;
																														return "".concat(t, " result").concat(1 !== t ? "s" : "", " available")
																											}, styles:	{
																											}, tabIndex: "0", tabSelectsValue:!0
																													}, Vt = 1, qt = function(e) {
																														function	t      (e) {
																															var		n;
/**INDENT** Error@1: Unbalanced parens */
																																	A             (this, t), E(L(L(n = k(this, M(t).call(this, e)))), "state", {
																														ariaLiveSelection: "", ariaLiveContext: "", focusedOption: null, focusedValue: null, inputIsHidden: !1, isFocused: !1, menuOptions:{
																															render: [], focusable:[]
																														}              , selectValue:                []
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})             , E(L(L(n)), "blockOptionHover", !1), E(L(L(n)), "isComposing", !1), E(L(L(n)), "clearFocusValueOnUpdate", !1), E(L(L(n)), "commonProps", void 0), E(L(L(n)), "components", void 0), E(L(L(n)), "hasGroups", !1), E(L(L(n)), "initialTouchX", 0), E(L(L(n)), "initialTouchY", 0), E(L(L(n)), "inputIsHiddenAfterUpdate", void 0), E(L(L(n)), "instancePrefix", ""), E(L(L(n)), "openAfterFocus", !1), E(L(L(n)), "scrollToFocusedOptionOnUpdate", !1), E(L(L(n)), "userIsDragging", void 0), E(L(L(n)), "controlRef", null), E(L(L(n)), "getControlRef", (function(e) {
																																n.controlRef = e
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "focusedOptionRef", null), E(L(L(n)), "getFocusedOptionRef", (function(e) {
																																n.focusedOptionRef = e
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "menuListRef", null), E(L(L(n)), "getMenuListRef", (function(e) {
																																n.menuListRef = e
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "inputRef", null), E(L(L(n)), "getInputRef", (function(e) {
																																n.inputRef = e
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "cacheComponents", (function(e) {
/**INDENT** Error@1: Unbalanced parens */
																																n.components = T({
																																}, ot, {
																															components:	e
/**INDENT** Warning@1: Extra ) */
																																}.components)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "focus", n.focusInput), E(L(L(n)), "blur", n.blurInput), E(L(L(n)), "onChange", (function(e, t) {
																																var		a = n.props;
/**INDENT** Error@1: Unbalanced parens */
																																(0, a.onChange) (e, T({
																																}, t, {
																															name:		a.name
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																}))
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "setValue", (function(e) {
																																var		t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "set-value",
																																		a = arguments.length > 2 ? arguments[2] : void 0,
																																		s = n.props,
																																		r = s.closeMenuOnSelect,
																																		i = s.isMulti;
/**INDENT** Error@1: Unbalanced parens */
																																n.onInputChange("", {
																															action:	"set-value"
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																}), r && (n.inputIsHiddenAfterUpdate = !i, n.onMenuClose()), n.clearFocusValueOnUpdate = !0, n.onChange(e, {
																															action: t, option:a
/**INDENT** Warning@1: Extra ) */
																																})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "selectOption", (function(e) {
																																var		t = n.props,
																																		a = t.blurInputOnSelect,
																																		s = t.isMulti,
																																		r = n.state.selectValue;
																																if (s)
																																	if (n.isOptionSelected(e, r)) {
																																		var		i = n.getOptionValue(e);
/**INDENT** Error@1: Unbalanced parens */
																																		n.setValue(r.filter((function(e) {
																																			return n.getOptionValue(e) !== i
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																		})), "deselect-option", e), n.announceAriaLiveSelection({
																																	event: "deselect-option", context:{
																																		value:		n.getOptionLabel(e)
																																			}
/**INDENT** Warning@1: Extra ) */
																																		})
																																	} else
/**INDENT** Error@1: Unbalanced parens */
																																		n.isOptionDisabled(e, r) ? n.announceAriaLiveSelection({
																																event : "select-option", context:{
																																	value: n.getOptionLabel(e), isDisabled:!0
																																		}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																}):		(n.setValue([].concat(y(r),[e]), "select-option", e), n.announceAriaLiveSelection({
																															event: "select-option", context:{
																																value:		n.getOptionLabel(e)
																																	}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																		}));
/**INDENT** Error@1: Unmatched 'else' */
																																		else
/**INDENT** Error@1: Unbalanced parens */
																																		n.isOptionDisabled(e, r) ? n.announceAriaLiveSelection({
																																	event : "select-option", context:{
																																		value: n.getOptionLabel(e), isDisabled:!0
																																			}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																}):		(n.setValue(e, "select-option"), n.announceAriaLiveSelection({
																																	event: "select-option", context:{
																																		value:		n.getOptionLabel(e)
																																			}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																		}));
																																		a && n.blurInput()
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "removeValue", (function(e) {
																																var		t = n.state.selectValue,
																																		a = n.getOptionValue(e),
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																		s = t.filter((function(e) {return n.getOptionValue(e) !== a}));
/**INDENT** Error@1: Unbalanced parens */
																																n.onChange(s.length ? s : null, {
																															action: "remove-value", removedValue:e
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																}), n.announceAriaLiveSelection({
																															event: "remove-value", context:{
																																value:		e ? n.getOptionLabel(e) : ""
																																	}
/**INDENT** Warning@1: Extra ) */
																																}), n.focusInput()
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "clearValue", (function() {
																																var		e = n.props.isMulti;
/**INDENT** Error@1: Unbalanced parens */
																																n.onChange(e ?[] : null, {
																															action:	"clear"
/**INDENT** Warning@1: Extra ) */
																																})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "popValue", (function() {
																																var		e = n.state.selectValue,
																																		t = e[e.length - 1],
																																		a = e.slice(0, e.length - 1);
/**INDENT** Error@1: Unbalanced parens */
																																n.announceAriaLiveSelection({
																															event: "pop-value", context:{
																																value:		t ? n.getOptionLabel(t) : ""
																																	}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																}), n.onChange(a.length ? a : null, {
																															action: "pop-value", removedValue:t
/**INDENT** Warning@1: Extra ) */
																																})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "getOptionLabel", (function(e) {
																																return n.props.getOptionLabel(e)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "getOptionValue", (function(e) {
																																return n.props.getOptionValue(e)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "getStyles", (function(e, t) {
																																var		a = St[e] (t);
																																a.boxSizing = "border-box";
																																var		s = n.props.styles[e];
																																return s ? s(a, t) : a
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "getElementId", (function(e) {
																																return "".concat(n.instancePrefix, "-").concat(e)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "getActiveDescendentId", (function() {
																																var		e = n.props.menuIsOpen,
																																		t = n.state,
																																		a = t.menuOptions,
																																		s = t.focusedOption;
																																if (s && e) {
																																	var		r = a.focusable.indexOf(s),
																																			i = a.render[r];
																																	return i && i.key
																																}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "announceAriaLiveSelection", (function(e) {
																																var		t = e.event,
																																		a = e.context;
/**INDENT** Error@1: Unbalanced parens */
																																n.setState({
																															ariaLiveSelection:kt(t, a)
/**INDENT** Warning@1: Extra ) */
																																})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "announceAriaLiveContext", (function(e) {
																																var		t = e.event,
																																		a = e.context;
/**INDENT** Error@1: Unbalanced parens */
																																n.setState({
/**INDENT** Error@1: Unbalanced parens */
																															ariaLiveContext:Lt(t, T({
																																	}, a, {
																																label:		n.props["aria-label"]
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																	}))
/**INDENT** Warning@1: Extra ) */
																																})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onMenuMouseDown", (function(e) {
																																0 == = e.button && (e.stopPropagation(), e.preventDefault(), n.focusInput())
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onMenuMouseMove", (function(e) {
																																n.blockOptionHover = !1
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onControlMouseDown", (function(e) {
																																var		t = n.props.openMenuOnClick;
																																n.state.isFocused ? n.props.menuIsOpen ? "INPUT" !== e.target.tagName && n.onMenuClose() : t && n.openMenu("first") : (t && (n.openAfterFocus = !0), n.focusInput()), "INPUT" !== e.target.tagName && e.preventDefault()
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onDropdownIndicatorMouseDown", (function(e) {
																																if (!(e && "mousedown" == = e.type && 0 !== e.button || n.props.isDisabled)) {
																																	var		t = n.props,
																																			a = t.isMulti,
																																			s = t.menuIsOpen;
																																	n.focusInput(), s ? (n.inputIsHiddenAfterUpdate = !a, n.onMenuClose()) : n.openMenu("first"), e.preventDefault(), e.stopPropagation()
																																}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onClearIndicatorMouseDown", (function(e) {
/**INDENT** Error@1: Unbalanced parens */
																																e && "mousedown" == = e.type && 0 !== e.button || (n.clearValue(), e.stopPropagation(), n.openAfterFocus = !1, "touchend" == = e.type ? n.focusInput() : setTimeout((function() {
																																	return n.focusInput()
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																})))
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onScroll", (function(e) {
																																"boolean" == typeof n.props.closeMenuOnScroll ? e.target instanceof HTMLElement && ye(e.target) && n.props.onMenuClose() : "function" == typeof n.props.closeMenuOnScroll && n.props.closeMenuOnScroll(e) && n.props.onMenuClose()
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onCompositionStart", (function() {
																																n.isComposing = !0
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onCompositionEnd", (function() {
																																n.isComposing = !1
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onTouchStart", (function(e) {
																																var		t = e.touches.item(0);
																																t && (n.initialTouchX = t.clientX, n.initialTouchY = t.clientY, n.userIsDragging = !1)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onTouchMove", (function(e) {
																																var		t = e.touches.item(0);
																																if (t) {
																																	var		a = Math.abs(t.clientX - n.initialTouchX),
																																			s = Math.abs(t.clientY - n.initialTouchY);
																																	n.userIsDragging = a > 5 || s > 5
																																}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onTouchEnd", (function(e) {
																																n.userIsDragging || (n.controlRef && !n.controlRef.contains(e.target) && n.menuListRef && !n.menuListRef.contains(e.target) && n.blurInput(), n.initialTouchX = 0, n.initialTouchY = 0)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onControlTouchEnd", (function(e) {
																																n.userIsDragging || n.onControlMouseDown(e)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onClearIndicatorTouchEnd", (function(e) {
																																n.userIsDragging || n.onClearIndicatorMouseDown(e)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onDropdownIndicatorTouchEnd", (function(e) {
																																n.userIsDragging || n.onDropdownIndicatorMouseDown(e)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "handleInputChange", (function(e) {
																																var		t = e.currentTarget.value;
/**INDENT** Error@1: Unbalanced parens */
																																n.inputIsHiddenAfterUpdate = !1, n.onInputChange(t, {
																															action:	"input-change"
/**INDENT** Warning@1: Extra ) */
																																}), n.onMenuOpen()
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onInputFocus", (function(e) {
																																var		t = n.props,
																																		a = t.isSearchable,
																																		s = t.isMulti;
/**INDENT** Error@1: Unbalanced parens */
																																n.props.onFocus && n.props.onFocus(e), n.inputIsHiddenAfterUpdate = !1, n.announceAriaLiveContext({
																															event: "input", context:{
																																isSearchable: a, isMulti:s
																																	}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																}), n.setState({
																															isFocused:	!0
/**INDENT** Warning@1: Extra ) */
																																}), (n.openAfterFocus || n.props.openMenuOnFocus) && n.openMenu("first"), n.openAfterFocus = !1
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onInputBlur", (function(e) {
/**INDENT** Error@1: Unbalanced parens */
																																n.menuListRef && n.menuListRef.contains(document.activeElement) ? n.inputRef.focus() : (n.props.onBlur && n.props.onBlur(e), n.onInputChange("", {
																															action:	"input-blur"
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																}), n.onMenuClose(), n.setState({
																															focusedValue: null, isFocused:!1
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																}))
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "onOptionHover", (function(e) {
/**INDENT** Error@1: Unbalanced parens */
																																n.blockOptionHover || n.state.focusedOption == = e || n.setState({
																															focusedOption:	e
/**INDENT** Warning@1: Extra ) */
																																})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																															})), E(L(L(n)), "shouldHideSelectedOptions", (function() {
																																var		e = n.props,
																																		t = e.hideSelectedOptions,
																																		a = e.isMulti;
/**INDENT** Error@1: Statement nesting error */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																return void	0 == = t ? a : t})),
/**INDENT** Error@1: Unbalanced parens */
																																		E             (L(L(n)), "onKeyDown", (function(e) {
																																	var		t = n.props,
																																			a = t.isMulti,
																																			s = t.backspaceRemovesValue,
																																			r = t.escapeClearsValue,
																																			i = t.inputValue,
																																			o = t.isClearable,
																																			c = t.isDisabled,
																																			u = t.menuIsOpen,
																																			l = t.onKeyDown,
																																			d = t.tabSelectsValue,
																																			h = t.openMenuOnFocus,
																																			p = n.state,
																																			m = p.focusedOption,
																																			f = p.focusedValue,
																																			_ = p.selectValue;
																																	if              (!(c || "function" == typeof l && (l(e), e.defaultPrevented))) {
																																		switch (n.blockOptionHover = !0, e.key) {
																																		case "ArrowLeft":
																																			if (!a || i)
																																				return;
																																			n.focusValue("previous");
																																			break;
																																		case "ArrowRight":
																																			if (!a || i)
																																				return;
																																			n.focusValue("next");
																																			break;
																																		case "Delete":
																																		case "Backspace":
																																			if (i)
																																				return;
																																			if (f)
																																				n.removeValue(f);
																																			else {
																																				if (!s)
																																					return;
																																				a ? n.popValue() : o && n.clearValue()
																																			}		break;
																																		case "Tab":
																																			if (n.isComposing)
																																				return;
																																			if (e.shiftKey || !u || !d || !m || h && n.isOptionSelected(m, _))
																																				return;
																																			n.selectOption(m);
																																			break;
																																		case "Enter":
																																			if (229 == = e.keyCode)
																																				break;
																																			if (u) {
																																				if (!m)
																																					return;
																																				if (n.isComposing)
																																					return;
																																				n.selectOption(m);
																																				break
																																			} return;
																																		case "Escape":
/**INDENT** Error@1: Unbalanced parens */
																																			u ? (n.inputIsHiddenAfterUpdate = !1, n.onInputChange("", {
																																				action : "menu-close"
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																	}), n.onMenuClose()):o && r && n.clearValue();
																																			break;
																																		case " ":
																																			if (i)
																																				return;
																																			if (!u) {
																																				n.openMenu("first");
																																				break
																																			} if (!m)
																																				return;
																																			n.selectOption(m);
																																			break;
																																		case "ArrowUp":
																																			u ? n.focusOption("up") : n.openMenu("last");
																																			break;
																																		case "ArrowDown":
																																			u ? n.focusOption("down") : n.openMenu("first");
																																			break;
																																		case "PageUp":
																																			if (!u)
																																				return;
																																			n.focusOption("pageup");
																																			break;
																																		case "PageDown":
																																			if (!u)
																																				return;
																																			n.focusOption("pagedown");
																																			break;
																																		case "Home":
																																			if (!u)
																																				return;
																																			n.focusOption("first");
																																			break;
																																		case "End":
																																			if (!u)
																																				return;
																																			n.focusOption("last");
																																			break;
																																		default:
																																			return
																																		} e.preventDefault()
																																	}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																}));
																																var		a = e.value;
																																n.cacheComponents = R(n.cacheComponents, He).bind(L(L(n))), n.cacheComponents(e.components), n.instancePrefix = "react-select-" + (n.props.instanceId || ++Vt);
																																var		s = we(a),
																																		r = e.menuIsOpen ? n.buildMenuOptions(e, s) : {render:[], focusable:[]};
																																return n.state.menuOptions = r, n.state.selectValue = s, n
/**INDENT** Error@1: Unbalanced parens */
																															} return N(t, e), x(t,[{
																														key: "componentDidMount", value:function() {
																																	this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput()
																																}
																															}, {
																														key: "UNSAFE_componentWillReceiveProps", value:function(e) {
																																	var		t = this.props,
																																			n = t.options,
																																			a = t.value,
																																			s = t.menuIsOpen,
																																			r = t.inputValue;
																																	if (this.cacheComponents(e.components), e.value !== a || e.options !== n || e.menuIsOpen !== s || e.inputValue !== r) {
																																		var		i = we(e.value),
																																				o = e.menuIsOpen ? this.buildMenuOptions(e, i) : {render:[], focusable:[]}, c = this.getNextFocusedValue(i), u = this.getNextFocusedOption(o.focusable);
/**INDENT** Error@1: Unbalanced parens */
																																		this.setState({
																																	menuOptions: o, selectValue: i, focusedOption: u, focusedValue:c
/**INDENT** Warning@1: Extra ) */
																																		})
/**INDENT** Error@1: Unbalanced parens */
																																	} null != this.inputIsHiddenAfterUpdate && (this.setState({
																																inputIsHidden:	this.inputIsHiddenAfterUpdate
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																	}), delete this.inputIsHiddenAfterUpdate)
																																}
																															}, {
																														key: "componentDidUpdate", value:function(e) {
																																	var		t         ,
																																			n            ,
																																			a            ,
																																			s            ,
																																			r            ,
																																			i = this.props,
																																			o = i.isDisabled,
																																			c = i.menuIsOpen,
																																			u = this.state.isFocused;
																																	(u && !o && e.isDisabled || u && c && !e.menuIsOpen) && this.focusInput(), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (t = this.menuListRef, n = this.focusedOptionRef, a = t.getBoundingClientRect(), s = n.getBoundingClientRect(), r = n.offsetHeight / 3, s.bottom + r > a.bottom ? Te(t, Math.min(n.offsetTop + n.clientHeight - t.offsetHeight + r, t.scrollHeight)) : s.top - r < a.top && Te(t, Math.max(n.offsetTop - r, 0))), this.scrollToFocusedOptionOnUpdate = !1
																																}
																															}, {
																														key: "componentWillUnmount", value:function() {
																																	this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0)
																																}
																															}, {
																														key: "onMenuOpen", value:function() {
																																	this.props.onMenuOpen()
																																}
																															}, {
																														key: "onMenuClose", value:function() {
																																	var		e = this.props,
																																			t = e.isSearchable,
																																			n = e.isMulti;
/**INDENT** Error@1: Unbalanced parens */
																																	this.announceAriaLiveContext({
																																event: "input", context:{
																																	isSearchable: t, isMulti:n
																																		}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																	}), this.onInputChange("", {
																																action:	"menu-close"
/**INDENT** Warning@1: Extra ) */
																																	}), this.props.onMenuClose()
																																}
																															}, {
																														key: "onInputChange", value:function(e, t) {
																																	this.props.onInputChange(e, t)
																																}
																															}, {
																														key: "focusInput", value:function() {
																																	this.inputRef && this.inputRef.focus()
																																}
																															}, {
																														key: "blurInput", value:function() {
																																	this.inputRef && this.inputRef.blur()
																																}
																															}, {
																														key: "openMenu", value:function(e) {
																																	var		t = this.state,
																																			n = t.menuOptions,
																																			a = t.selectValue,
																																			s = t.isFocused,
																																			r = this.props.isMulti,
																																			i = "first" == = e ? 0 : n.focusable.length - 1;
																																	if (!r) {
																																		var		o = n.focusable.indexOf(a[0]);
																																		o > -1 && (i = o)
/**INDENT** Error@1: Unbalanced parens */
																																	} this.scrollToFocusedOptionOnUpdate = !(s && this.menuListRef), this.inputIsHiddenAfterUpdate = !1, this.onMenuOpen(), this.setState({
																																focusedValue: null, focusedOption:n.focusable[i]
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																	}), this.announceAriaLiveContext({
																																event:		"menu"
/**INDENT** Warning@1: Extra ) */
																																	})
																																}
																															}, {
																														key: "focusValue", value:function(e) {
																																	var		t = this.props,
																																			n = t.isMulti,
																																			a = t.isSearchable,
																																			s = this.state,
																																			r = s.selectValue,
																																			i = s.focusedValue;
																																	if (n) {
/**INDENT** Error@1: Unbalanced parens */
																																		this.setState({
																																	focusedOption:	null
/**INDENT** Warning@1: Extra ) */
																																		});
																																		var		o = r.indexOf(i);
/**INDENT** Error@1: Unbalanced parens */
																																		i || (o = -1, this.announceAriaLiveContext({
																																	event:		"value"
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																		}));
																																		var		c = r.length - 1,
																																				u = -1;
																																		if (r.length) {
																																			switch (e) {
																																			case "previous":
																																				u = 0 == = o ? 0 : -1 == = o ? c : o - 1;
																																				break;
																																			case "next":
																																				o > -1 && o < c && (u = o + 1)
/**INDENT** Error@1: Unbalanced parens */
																																			} -1 == = u && this.announceAriaLiveContext({
																																		event: "input", context:{
																																			isSearchable: a, isMulti:n
																																				}
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																			}), this.setState({
																																		inputIsHidden: -1 !== u, focusedValue:r[u]
/**INDENT** Warning@1: Extra ) */
																																			})
																																		}
																																	}
																																}
																															}, {
																														key: "focusOption", value:function() {
																																	var		e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
																																			t = this.props.pageSize,
																																			n = this.state,
																																			a = n.focusedOption,
																																			s = n.menuOptions,
																																			r = s.focusable;
																																	if (r.length) {
																																		var		i = 0,
																																				o = r.indexOf(a);
/**INDENT** Error@1: Unbalanced parens */
																																		a || (o = -1, this.announceAriaLiveContext({
																																	event:		"menu"
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																		})), "up" == = e ? i = o > 0 ? o - 1 : r.length - 1 : "down" == = e ? i = (o + 1) % r.length : "pageup" == = e ? (i = o - t) < 0 && (i = 0) : "pagedown" == = e ? (i = o + t) > r.length - 1 && (i = r.length - 1) : "last" == = e && (i = r.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
																																	focusedOption: r[i], focusedValue:null
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																		}), this.announceAriaLiveContext({
																																	event: "menu", context:{
																																		isDisabled:	Mt(r[i])
																																			}
/**INDENT** Warning@1: Extra ) */
																																		})
																																	}
																																}
																															}, {
																														key: "getTheme", value:function() {
/**INDENT** Error@1: Unbalanced parens */
																																	return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(It) : T({
/**INDENT** Warning@1: Extra ) */
																																	}, It, this.props.theme) : It
																																}
																															}, {
																														key: "getCommonProps", value:function() {
																																	var		e = this.clearValue,
																																			t = this.getStyles,
																																			n = this.setValue,
																																			a = this.selectOption,
																																			s = this.props,
																																			r = s.classNamePrefix,
																																			i = s.isMulti,
																																			o = s.isRtl,
																																			c = s.options,
																																			u = this.state.selectValue,
																																			l = this.hasValue();
																																	return {
																																cx: Pe.bind(null, r), clearValue: e, getStyles: t, getValue:function() {
																																			return u
																																}, hasValue: l, isMulti: i, isRtl: o, options: c, selectOption: a, setValue: n, selectProps: s, theme:this.getTheme()
																																	}
																																}
																															}, {
																														key: "getNextFocusedValue", value:function(e) {
																																	if (this.clearFocusValueOnUpdate)
																																		return this.clearFocusValueOnUpdate = !1, null;
																																	var		t = this.state,
																																			n = t.focusedValue,
																																			a = t.selectValue.indexOf(n);
																																	if (a > -1) {
																																		if (e.indexOf(n) > -1)
																																			return n;
																																		if (a < e.length)
																																			return e[a]
/**INDENT** Error@1: Statement nesting error */
																																			} return null
/**INDENT** Error@1: Statement nesting error */
																																			}
/**INDENT** Error@1: Statement nesting error */
																																			}, {
																																	key: "getNextFocusedOption", value:function(e) {
																																				var		t = this.state.focusedOption;
																																				return t && e.indexOf(t) > -1 ? t : e[0]
																																			}
																																			}, {
																																	key: "hasValue", value:function() {
																																				return this.state.selectValue.length > 0
																																			}
																																			}, {
																																		key: "hasOptions", value:function() {
																																					return !!this.state.menuOptions.render.length
																																				}
																																			}, {
																																		key: "countOptions", value:function() {
																																					return this.state.menuOptions.focusable.length
																																				}
																																			}, {
																																		key: "isClearable", value:function() {
																																					var		e = this.props,
																																							t = e.isClearable,
																																							n = e.isMulti;
/**INDENT** Error@1: Statement nesting error */
/**INDENT** Error@1: Statement nesting error */
																																					return void	0 == = t ? n : t}}, {
																																						key:"isOptionDisabled", value:function(e, t) {
																																					return "function" == typeof this.props.isOptionDisabled && this.props.isOptionDisabled(e, t)}}, {
																																						key:"isOptionSelected", value:function(e, t) {
																																							var		n = this;
																																							if              (t.indexOf(e) > -1)
																																										return       !0;
																																							if              ("function" == typeof this.props.isOptionSelected)
																																										return	this.	props.isOptionSelected(e, t);
																																							var		a = this.getOptionValue(e);
/**INDENT** Error@1: Unbalanced parens */
																																									return	t.	some((function(e) {
																																								return n.getOptionValue(e) == = a
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																							}))
																																						}
																																					}              , {
																																				key: "filterOption", value:function(e, t) {
																																							return !this.props.filterOption || this.props.filterOption(e, t)
																																						}
																																					}, {
																																				key: "formatOptionLabel", value:function(e, t) {
																																							if ("function" == typeof this.props.formatOptionLabel) {
																																								var		n = this.props.inputValue,
																																										a = this.state.selectValue;
/**INDENT** Error@1: Unbalanced parens */
																																								return this.props.formatOptionLabel(e, {
																																							context: t, inputValue: n, selectValue:a
/**INDENT** Warning@1: Extra ) */
																																								})
																																							} return this.getOptionLabel(e)
																																						}
																																					}, {
																																				key: "formatGroupLabel", value:function(e) {
																																							return this.props.formatGroupLabel(e)
																																						}
																																					}, {
																																				key: "startListeningComposition", value:function() {
																																							document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1))
																																						}
																																					}, {
																																				key: "stopListeningComposition", value:function() {
																																							document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd))
																																						}
																																					}, {
																																				key: "startListeningToTouch", value:function() {
																																							document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1))
																																						}
																																					}, {
																																				key: "stopListeningToTouch", value:function() {
																																							document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd))
																																						}
																																					}, {
																																				key: "buildMenuOptions", value:function(e, t) {
																																							var		n = this,
																																									a = e.inputValue,
																																									s = void 0 == = a ? "" : a,
																																									r = e.options,
																																									i = function(e, a) {var r = n.isOptionDisabled(e, t), i = n.isOptionSelected(e, t), o = n.getOptionLabel(e), c = n.getOptionValue(e);
/**INDENT** Error@1: Unbalanced parens */
																																									if (!(n.shouldHideSelectedOptions() && i || !n.filterOption({
																																							label: o, value: c, data:e
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																									}              , s))) {
																																									var		u = r ? void 0 : function() {return n.onOptionHover(e)}, l = r ? void 0 : function() {return n.selectOption(e)}, d = "".concat(n.getElementId("option"), "-").concat(a);
																																									return {
																																								innerProps:	{
																																									id: d, onClick: l, onMouseMove: u, onMouseOver: u, tabIndex:-1
																																								}, data: e, isDisabled: r, isSelected: i, key: d, label: o, type: "option", value:c
																																									}
																																									}
																																							};
/**INDENT** Error@1: Unbalanced parens */
																																							return r.reduce((function(e, t, a) {
																																								if (t.options) {
																																									n.hasGroups || (n.hasGroups = !0);
/**INDENT** Error@1: Unbalanced parens */
																																									var		s = t.options.map((function(t, n) {var s = i(t, "".concat(a, "-").concat(n));
																																										return s && e.focusable.push(t), s
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																									})).		filter    (Boolean);
																																									if (s.length) {
																																										var		r = "".concat(n.getElementId("group"), "-").concat(a);
/**INDENT** Error@1: Unbalanced parens */
																																										e.render.push({
																																									type: "group", key: r, data: t, options:s
/**INDENT** Warning@1: Extra ) */
																																										})
																																									}
																																								} else {
																																									var		o = i(t, "".concat(a));
																																									o && (e.render.push(o), e.focusable.push(t))
																																								} return e
/**INDENT** Warning@1: Extra ) */
																																							}), {
																																						render: [], focusable:[]
/**INDENT** Warning@1: Extra ) */
																																							})
																																						}
																																					}, {
																																				key: "constructAriaLiveMessage", value:function() {
																																							var		e = this.state,
																																									t = e.ariaLiveContext,
																																									n = e.selectValue,
																																									a = e.focusedValue,
																																									s = e.focusedOption,
																																									r = this.props,
																																									i = r.options,
																																									o = r.menuIsOpen,
																																									c = r.inputValue,
																																									u = r.screenReaderStatus,
																																									l = a ? function(e) {var t = e.focusedValue, n = e.getOptionLabel, a = e.selectValue;
																																								return "value ".concat(n(t), " focused, ").concat(a.indexOf(t) + 1, " of ").concat(a.length, ".")
/**INDENT** Error@1: Unbalanced parens */
																																							}               ({
																																						focusedValue: a, getOptionLabel: this.getOptionLabel, selectValue:n
/**INDENT** Warning@1: Extra ) */
																																					}):		"", d = s && o ? function(e) {
																																								var		t = e.focusedOption,
																																										n = e.getOptionLabel,
																																										a = e.options;
																																								return "option ".concat(n(t), " focused").concat(t.isDisabled ? " disabled" : "", ", ").concat(a.indexOf(t) + 1, " of ").concat(a.length, ".")
/**INDENT** Error@1: Unbalanced parens */
																																							} ({
																																						focusedOption: s, getOptionLabel: this.getOptionLabel, options:i
/**INDENT** Warning@1: Extra ) */
																																					}):		"", h = function(e) {
																																								var		t = e.inputValue,
																																										n = e.screenReaderMessage;
																																								return "".concat(n).concat(t ? " for search term " + t : "", ".")
/**INDENT** Error@1: Unbalanced parens */
																																							} ({
/**INDENT** Error@1: Unbalanced parens */
																																						inputValue: c, screenReaderMessage:u({
																																							count:		this.countOptions()
/**INDENT** Warning@1: Extra ) */
																																								})
/**INDENT** Warning@1: Extra ) */
																																							});
																																							return "".concat(l, " ").concat(d, " ").concat(h, " ").concat(t)
																																						}
																																					}, {
																																				key: "renderInput", value:function() {
																																							var		e = this.props,
																																									t = e.isDisabled,
																																									n = e.isSearchable,
																																									a = e.inputId,
																																									r = e.inputValue,
																																									i = e.tabIndex,
																																									o = this.components.Input,
																																									c = this.state.inputIsHidden,
																																									l = a || this.getElementId("input");
																																							if (!n)
/**INDENT** Error@1: Unbalanced parens */
																																								return s.a.createElement(mt, {
																																						id: l, innerRef: this.getInputRef, onBlur: this.onInputBlur, onChange: ge, onFocus: this.onInputFocus, readOnly: !0, disabled: t, tabIndex: i, value:""
/**INDENT** Warning@1: Extra ) */
																																								});
																																							var		d = {"aria-autocomplete":"list", "aria-label":this.props["aria-label"], "aria-labelledby":this.props["aria-labelledby"]}, h = this.commonProps, p = h.cx, m = h.theme, f = h.selectProps;
/**INDENT** Error@1: Unbalanced parens */
																																							return s.a.createElement(o, u({
																																						autoCapitalize: "none", autoComplete: "off", autoCorrect: "off", cx: p, getStyles: this.getStyles, id: l, innerRef: this.getInputRef, isDisabled: t, isHidden: c, onBlur: this.onInputBlur, onChange: this.handleInputChange, onFocus: this.onInputFocus, selectProps: f, spellCheck: "false", tabIndex: i, theme: m, type: "text", value:r
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																							}, d))
																																						}
																																					}, {
																																				key: "renderPlaceholderOrValue", value:function() {
																																							var		e = this,
																																									t = this.components,
																																									n = t.MultiValue,
																																									a = t.MultiValueContainer,
																																									r = t.MultiValueLabel,
																																									i = t.MultiValueRemove,
																																									o = t.SingleValue,
																																									c = t.Placeholder,
																																									l = this.commonProps,
																																									d = this.props,
																																									h = d.controlShouldRenderValue,
																																									p = d.isDisabled,
																																									m = d.isMulti,
																																									f = d.inputValue,
																																									_ = d.placeholder,
																																									b = this.state,
																																									g = b.selectValue,
																																									v = b.focusedValue,
																																									P = b.isFocused;
																																							if (!this.hasValue() || !h)
/**INDENT** Error@1: Unbalanced parens */
																																								return f ? null : s.a.createElement(c, u({
																																								}, l, {
																																						key: "placeholder", isDisabled: p, isFocused:P
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																								}), _);
																																								if (m)
/**INDENT** Error@1: Unbalanced parens */
																																									return g.map((function(t, o) {
																																									var		c = t == = v;
/**INDENT** Error@1: Unbalanced parens */
																																									return s.a.createElement(n, u({
																																									}, l, {
																																								components:	{
																																									Container: a, Label: r, Remove:i
																																								}, isFocused: c, isDisabled: p, key: e.getOptionValue(t), index: o, removeProps:{
																																									onClick:	function() {
																																												return e.removeValue(t)
																																									}, onTouchEnd:	function() {
																																												return e.removeValue(t)
																																									}, onMouseDown:function(e) {
																																												e.preventDefault(), e.stopPropagation()
																																											}
																																								}, data:	t
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																									}), e.formatOptionLabel(t, "value"))
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																									}));
																																							if (f)
																																								return null;
																																							var		w = g[0];
/**INDENT** Error@1: Unbalanced parens */
																																							return s.a.createElement(o, u({
																																							}, l, {
																																						data: w, isDisabled:p
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																							}), this.formatOptionLabel(w, "value"))
																																						}
																																					}, {
																																				key: "renderClearIndicator", value:function() {
																																							var		e = this.components.ClearIndicator,
																																									t = this.commonProps,
																																									n = this.props,
																																									a = n.isDisabled,
																																									r = n.isLoading,
																																									i = this.state.isFocused;
																																							if (!this.isClearable() || !e || a || !this.hasValue() || r)
																																								return null;
																																							var		o = {onMouseDown:this.onClearIndicatorMouseDown, onTouchEnd:this.onClearIndicatorTouchEnd, "aria-hidden":"true"};
/**INDENT** Error@1: Unbalanced parens */
																																							return s.a.createElement(e, u({
																																							}, t, {
																																						innerProps: o, isFocused:i
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																							}))
																																						}
																																					}, {
																																				key: "renderLoadingIndicator", value:function() {
																																							var		e = this.components.LoadingIndicator,
																																									t = this.commonProps,
																																									n = this.props,
																																									a = n.isDisabled,
																																									r = n.isLoading,
																																									i = this.state.isFocused;
																																							if (!e || !r)
																																								return null;
/**INDENT** Error@1: Unbalanced parens */
																																							return s.a.createElement(e, u({
																																							}, t, {
																																						innerProps:	{
																																							"aria-hidden":	"true"
																																						}, isDisabled: a, isFocused:i
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																							}))
																																						}
																																					}, {
																																				key: "renderIndicatorSeparator", value:function() {
																																							var		e = this.components,
																																									t = e.DropdownIndicator,
																																									n = e.IndicatorSeparator;
																																							if (!t || !n)
																																								return null;
																																							var		a = this.commonProps,
																																									r = this.props.isDisabled,
																																									i = this.state.isFocused;
/**INDENT** Error@1: Unbalanced parens */
																																							return s.a.createElement(n, u({
																																							}, a, {
																																						isDisabled: r, isFocused:i
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																							}))
																																						}
																																					}, {
																																				key: "renderDropdownIndicator", value:function() {
																																							var		e = this.components.DropdownIndicator;
																																							if (!e)
																																								return null;
																																							var		t = this.commonProps,
																																									n = this.props.isDisabled,
																																									a = this.state.isFocused,
																																									r = {onMouseDown:this.onDropdownIndicatorMouseDown, onTouchEnd:this.onDropdownIndicatorTouchEnd, "aria-hidden":"true"};
/**INDENT** Error@1: Unbalanced parens */
																																							return s.a.createElement(e, u({
																																							}, t, {
																																						innerProps: r, isDisabled: n, isFocused:a
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																							}))
																																						}
																																					}, {
																																				key: "renderMenu", value:function() {
																																							var		e = this,
																																									t = this.components,
																																									n = t.Group,
																																									a = t.GroupHeading,
																																									r = t.Menu,
																																									i = t.MenuList,
																																									o = t.MenuPortal,
																																									c = t.LoadingMessage,
																																									l = t.NoOptionsMessage,
																																									d = t.Option,
																																									h = this.commonProps,
																																									p = this.state,
																																									m = p.focusedOption,
																																									f = p.menuOptions,
																																									_ = this.props,
																																									b = _.captureMenuScroll,
																																									g = _.inputValue,
																																									v = _.isLoading,
																																									P = _.loadingMessage,
																																									y = _.minMenuHeight,
																																									E = _.maxMenuHeight,
																																									T = _.menuIsOpen,
																																									A = _.menuPlacement,
																																									C = _.menuPosition,
																																									x = _.menuPortalTarget,
																																									O = _.menuShouldBlockScroll,
																																									L = _.menuShouldScrollIntoView,
																																									k = _.noOptionsMessage,
																																									M = _.onMenuScrollToTop,
																																									S = _.onMenuScrollToBottom;
																																							if (!T)
																																								return null;
																																							var		N         ,
																																									I = function(t) {var n = m == = t.data;
																																								return t.innerRef = n ? e.getFocusedOptionRef : void 0,
/**INDENT** Error@1: Unbalanced parens */
																																										s.		a.	createElement(d, u({
																																								}              , h, t, {
																																									isFocused:n
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																								})             , e.formatOptionLabel(t.data, "menu"))
																																							};
																																							if (this.hasOptions())
/**INDENT** Error@1: Unbalanced parens */
																																								N = f.render.map((function(t) {
																																								if ("group" == = t.type) {
																																									t.type;
																																									var		r = w(t,["type"]),
																																											i = "".concat(t.key, "-heading");
/**INDENT** Error@1: Unbalanced parens */
																																									return s.a.createElement(n, u({
																																									}, h, r, {
																																								Heading: a, headingProps:{
																																									id:		i
																																								}, label:	e.formatGroupLabel(t.data)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																									}), t.options.map((function(e) {
																																										return I(e)
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																									})))
																																								} if ("option" == = t.type)
																																									return I(t)
/**INDENT** Error@1: Statement nesting error */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																									}));
																																								else if (v) {
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
																																									var		R = P({inputValue:g});
																																									if (null == = R)
																																										return null;
																																									N = s.a.createElement(c, h, R)
																																								} else {
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
																																									var		V = k({inputValue:g});
																																									if (null == = V)
																																										return null;
																																									N = s.a.createElement(l, h, V)
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																								} var		q = {minMenuHeight:y, maxMenuHeight:E, menuPlacement:A, menuPosition:C, menuShouldScrollIntoView:L}, D = s.a.createElement(Se, u({}, h, q), (function(t) {
																																									var		n = t.ref,
																																											a = t.placerProps,
																																											o = a.placement,
																																											c = a.maxHeight;
/**INDENT** Error@1: Unbalanced parens */
																																											return	s.	a.	createElement(r, u({
																																									}              , h, q, {
																																								innerRef: n, innerProps:{
																																									onMouseDown: e.onMenuMouseDown, onMouseMove:e.onMenuMouseMove
																																								}, isLoading: v, placement:o
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																									}), s.a.createElement(Ot, {
																																								isEnabled: b, onTopArrive: M, onBottomArrive:S
/**INDENT** Error@1: Unbalanced parens */
																																									}, s.a.createElement(Ct, {
																																								isEnabled:	O
/**INDENT** Error@1: Unbalanced parens */
																																									}, s.a.createElement(i, u({
																																									}, h, {
																																								innerRef: e.getMenuListRef, isLoading: v, maxHeight:c
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																									}), N))))
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																								}));
/**INDENT** Error@1: Unbalanced parens */
																																								return x || "fixed" == = C ? s.a.createElement(o, u({
																																								}, h, {
																																							appendTo : x, controlElement: this.controlRef, menuPlacement: A, menuPosition:C
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																						}), D):	D
																																								}
																																						}, {
																																					key: "renderFormField", value:function() {
																																								var		e = this,
																																										t = this.props,
																																										n = t.delimiter,
																																										a = t.isDisabled,
																																										r = t.isMulti,
																																										i = t.name,
																																										o = this.state.selectValue;
																																								if (i && !a) {
																																									if (r) {
																																										if (n) {
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																											var		c = o.map((function(t) {return e.getOptionValue(t)})).join(n);
/**INDENT** Error@1: Unbalanced parens */
																																											return s.a.createElement("input", {
																																										name: i, type: "hidden", value:c
/**INDENT** Warning@1: Extra ) */
																																											})
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
																																										} var		u = o.length > 0 ? o.map((function(t, n) {return s.a.createElement("input", {key : "i-".concat(n), name:i, type:"hidden", value:e.getOptionValue(t)})})):s.a.createElement("input", {name:i, type:"hidden"});
																																										return s.a.createElement("div", null, u)
																																									} var		l = o[0] ? this.getOptionValue(o[0]) : "";
/**INDENT** Error@1: Unbalanced parens */
																																									return s.a.createElement("input", {
																																								name: i, type: "hidden", value:l
/**INDENT** Warning@1: Extra ) */
																																									})
																																								}
																																							}
																																						}, {
																																					key: "renderLiveRegion", value:function() {
/**INDENT** Error@1: Unbalanced parens */
																																								return this.state.isFocused ? s.a.createElement(pt, {
																																									"aria-live" : "polite"
/**INDENT** Error@1: Unbalanced parens */
																																								}, s.a.createElement("p", {
																																							id:		"aria-selection-event"
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																								}, " ", this.state.ariaLiveSelection), s.a.createElement("p", {
																																							id:		"aria-context"
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																						}, " ", this.constructAriaLiveMessage())):null
																																							}
																																						}, {
																																					key: "render", value:function() {
																																								var		e = this.components,
																																										t = e.Control,
																																										n = e.IndicatorsContainer,
																																										a = e.SelectContainer,
																																										r = e.ValueContainer,
																																										i = this.props,
																																										o = i.className,
																																										c = i.id,
																																										l = i.isDisabled,
																																										d = i.menuIsOpen,
																																										h = this.state.isFocused,
																																										p = this.commonProps = this.getCommonProps();
/**INDENT** Error@1: Unbalanced parens */
																																								return s.a.createElement(a, u({
																																								}, p, {
																																							className: o, innerProps:{
																																								id: c, onKeyDown:this.onKeyDown
																																							}, isDisabled: l, isFocused:h
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																								}), this.renderLiveRegion(), s.a.createElement(t, u({
																																								}, p, {
																																							innerRef: this.getControlRef, innerProps:{
																																								onMouseDown: this.onControlMouseDown, onTouchEnd:this.onControlTouchEnd
																																							}, isDisabled: l, isFocused: h, menuIsOpen:d
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																								}), s.a.createElement(r, u({
																																								}, p, {
																																							isDisabled:	l
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																								}), this.renderPlaceholderOrValue(), this.renderInput()), s.a.createElement(n, u({
																																								}, p, {
																																							isDisabled:	l
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																								}), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField())
																																							}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																																						}]), t
																																					} (a.Component);
																																					E(qt, "defaultProps", Rt);
/**INDENT** Error@1: Unbalanced parens */
																																					var		Dt = {defaultInputValue:"", defaultMenuIsOpen:!1, defaultValue:null}, Ft = (a.Component, function(e) {var t, n;
																																						return n = t = function(t) {
																																							function	n      () {
																																								var		e         ,
																																										t;
																																										A             (this, n);
																																								for             (var a = arguments.length, s = new Array(a), r = 0; r < a; r++)
																																											s             [r] = arguments[r];
/**INDENT** Error@1: Unbalanced parens */
																																										return	E      (L(L(t = k(this, (e = M(n)).call.apply(e,[this].concat(s))))), "select", void 0), E(L(L(t)), "state", {
																																							inputValue:	void		0 !==	t.	props.inputValue ? t.props.inputValue : t.props.defaultInputValue,
																																											menuIsOpen:void 0 !== t.props.menuIsOpen ? t.props.menuIsOpen : t.props.defaultMenuIsOpen,
																																											value:void	0 !== t.props.value ? t.props.value : t.props.defaultValue
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																								})             , E(L(L(t)), "onChange", (function(e, n) {
/**INDENT** Error@1: Unbalanced parens */
																																									t.callProp("onChange", e, n), t.setState({
																																										value:e
/**INDENT** Warning@1: Extra ) */
																																									})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																								}))            , E(L(L(t)), "onInputChange", (function(e, n) {
																																									var		a = t.callProp("onInputChange", e, n);
/**INDENT** Error@1: Unbalanced parens */
																																											t.		setState  ({
																																								inputValue:	void		0 !==	a ?	a : e
/**INDENT** Warning@1: Extra ) */
																																									})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																								}))            , E(L(L(t)), "onMenuOpen", (function() {
/**INDENT** Error@1: Unbalanced parens */
																																									t.callProp("onMenuOpen"), t.setState({
																																										menuIsOpen:!0
/**INDENT** Warning@1: Extra ) */
																																									})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																								}))            , E(L(L(t)), "onMenuClose", (function() {
/**INDENT** Error@1: Unbalanced parens */
																																									t.callProp("onMenuClose"), t.setState({
																																										menuIsOpen:!1
/**INDENT** Warning@1: Extra ) */
																																									})
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																								}))            , t
/**INDENT** Error@1: Unbalanced parens */
																																							}		return	N     (n, t), x(n,[{
																																								key:"focus", value:function() {
																																									this.select.focus()
																																								}
																																							}              , {
																																								key:"blur", value:function() {
																																									this.select.blur()
																																								}
																																							}              , {
																																								key:"getProp", value:function(e) {
																																									return void	0 !== this.props[e] ? this.props[e] : this.state[e]
																																								}
																																							}              , {
																																								key:"callProp", value:function(e) {
																																									if ("function" == typeof this.props[e]) {
																																										for (var t, n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
																																											a[s - 1] = arguments[s];
																																										return (t = this.props)[e].apply(t, a)
																																									}
																																								}
																																							}              , {
																																						key: "render", value:function() {
																																									var		t = this,
																																											n = this.props,
																																											a = (n.defaultInputValue, n.defaultMenuIsOpen, n.defaultValue, w(n,["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]));
/**INDENT** Error@1: Unbalanced parens */
																																									return s.a.createElement(e, u({
																																									}, a, {
																																								ref:		function(e) {
																																											t.select = e
																																								}, inputValue: this.getProp("inputValue"), menuIsOpen: this.getProp("menuIsOpen"), onChange: this.onChange, onInputChange: this.onInputChange, onMenuClose: this.onMenuClose, onMenuOpen: this.onMenuOpen, value:this.getProp("value")
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																									}))
																																								}
/**INDENT** Warning@1: Extra ] */
/**INDENT** Warning@1: Extra ) */
																																							}]), n
																																						} (a.Component), E(t, "defaultProps", Dt), n
/**INDENT** Warning@1: Extra ) */
																																					} (qt));
																																					function	jt     () {
/**INDENT** Error@1: Unbalanced parens */
																																							return (jt = Object.assign || function(e) {for (var t = 1; t < arguments.length; t++) {
																																								var		n = arguments[t];
																																								for             (var a in n)
																																											Object.	prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
/**INDENT** Error@1: Statement nesting error */
																																									} return e
/**INDENT** Error@1: Statement nesting error */
/**INDENT** Warning@1: Extra ) */
																																									}).		apply      (this, arguments)
/**INDENT** Error@1: Statement nesting error */
																																									} function	Wt   (e, t) {
																																										return function(e) {
																																											if (Array.isArray(e))
																																												return e
/**INDENT** Error@1: Statement nesting error */
																																												} (e) || function(e, t) {
																																												if (!(Symbol.iterator in Object(e) || "[object Arguments]" == = Object.prototype.toString.call(e)))
																																													return;
																																												var		n =[],
																																														a = !0,
																																														s = !1,
																																														r = void 0;
																																														try {
																																													for (var i, o = e[Symbol.iterator] (); !(a = (i = o.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
																																												} catch(e) {
																																													s = !0, r = e
																																												}		finally {
																																													try {
																																														a || null == o.return ||o.return ()
																																													} finally {
																																														if (s)
																																															throw		r
																																													}
																																												}		return	n
																																												}               (e, t) || function() {
																																												throw new	TypeError("Invalid attempt to destructure non-iterable instance")
																																												}               ()
																																										} function	Ht   (e, t) {
																																											if (null == e)
																																												return {};
																																											var		n         ,
																																													a            ,
																																														s = function(e, t) {if (null == e)
																																													return {};
																																												var		n         ,
																																														a            ,
																																														s = {},	r = Object.keys(e);
																																												for             (a = 0; a < r.length; a++)
																																															n =		r        [a], t.indexOf(n) >= 0 || (s[n] = e[n]);
																																														return	s
																																											}               (e, t);
																																											if              (Object.getOwnPropertySymbols) {
																																												var		r = Object.getOwnPropertySymbols(e);
																																												for             (a = 0; a < r.length; a++)
																																															n =		r        [a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
/**INDENT** Error@1: Statement nesting error */
																																													}		return	s
/**INDENT** Error@1: Statement nesting error */
																																													} var		Bt = function(e) {var t = e.updateEvent, n = e.defaultOption, r = e.label, i = e.className, o = Ht(e,["updateEvent", "defaultOption", "label", "className"]), c = Wt(Object(a.useState) (n), 2), u = c[0], l = c[1];
/**INDENT** Error@1: Unbalanced parens */
																																														return s.a.createElement(s.a.Fragment, null, r && s.a.createElement("p", {
																																													className:	"dropdown-label gray-dark font--meta-text"
/**INDENT** Warning@1: Extra ) */
/**INDENT** Error@1: Unbalanced parens */
																																														}              , r), s.a.createElement(Ft, jt({
																																													value: u, onChange:function(e) {
																																																l(e), t(e)
																																													}, classNamePrefix: "pg-dropdown", className: "pg-dropdown ".concat(o.isInline ? "pg-dropdown-inline" : "", " ").concat(i), styles:{
																																														container:	function() {
																																														}, control:	function() {
																																																}
																																													}, "aria-label":r || o.ariaLabel
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																														}, o)))
																																													};
																																												Bt.propTypes = {
/**INDENT** Error@1: Unbalanced parens */
																																											options:	c.a.arrayOf(c.a.shape({
																																												label: c.a.string, value:c.a.string
/**INDENT** Warning@1: Extra ) */
/**INDENT** Warning@1: Extra ) */
																																											})).isRequired, updateEvent: c.a.func.isRequired, isInline: c.a.bool, defaultOption: c.a.object, label: c.a.string, ariaLabel: c.a.string, className:c.a.string
																																												}, Bt.defaultProps = {
																																											isInline: !1, className:""
																																												};
																																												var		zt = Bt,
																																														Ut = Math.sqrt(50),
																																														Kt = Math.sqrt(10),
																																														Xt = Math.sqrt(2);
																																												function $t(e, t, n) {
																																													var		a = (t - e) / Math.max(0, n),
																							indent(35346,0x7fff77fbd000) malloc: *** error for object 0x7ff2a0c03398: incorrect checksum for freed object - object was probably modified after being freed.
*** set a breakpoint in malloc_error_break to debug
																								s = Math.floor(Math.log(a) / Math.LN10),
																																															r = a / Math.pow(10, s);
																																													return s >= 0 ? (r >= Ut ? 10 : r >= Kt ? 5 : r >= Xt ? 2 : 1) * Math.pow(10, s) : -Math.pow(10, -s) / (r >= Ut ? 10 : r >= Kt ? 5 : r >= Xt ? 2 : 1)
																																												} var		Gt = function(e, t) {return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN};
																																												var		Yt        ,
																																														Qt           ,
/**INDENT** Error@1: Unbalanced parens */
/**INDENT** Warning@1: Extra ) */
																																														Zt = (1 == = (Yt = Gt).length && (Qt = Yt, Yt = function(e, t) {return Gt(Qt(e), t)}), {
																																													left:function(e, t, n, a) {
																																														for (null == n && (n = 0), null == a && (a = e.length); n < a;) {
																																															var		s = n + a >> >1;
																																																	Yt            (e[s], t) < 0 ? n = s + 1 : a = s
																																														} return n
																																											}              , right:		function      (e, t, n, a) {
																																														for (null == n && (n = 0), null == a && (a = e.length); n < a;) {
																																															var		s = n + a >> >1;
																																															Yt(e[s], t) > 0 ? a = s : n = s + 1
																																														} return n
																																													}
/**INDENT** Warning@1: Extra ) */
																																												}), Jt = Zt.right, en = function(e, t, n) {
																																													e.prototype = t.prototype = n, n.constructor = e
																																												};
																																												function	tn     (e, t) {
																																													var		n = Object.create(e.prototype);
																																													for             (var a in t)
																																																n             [a] = t[a];
																																															return	n
																																												} function	nn   () {
																																												} var		an = "\\s*([+-]?\\d+)\\s*",
																																														sn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
																																														rn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
																																														on = /^
