function M5(e, n) {
  for (var i = 0; i < n.length; i++) {
    const o = n[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const l in o)
        if (l !== "default" && !(l in e)) {
          const c = Object.getOwnPropertyDescriptor(o, l);
          c && Object.defineProperty(e, l, c.get ? c : {
            enumerable: !0,
            get: () => o[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function U5(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oh = { exports: {} }, Oe = {};
var D2;
function j5() {
  if (D2) return Oe;
  D2 = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), l = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), A = Symbol.iterator;
  function x(E) {
    return E === null || typeof E != "object" ? null : (E = A && E[A] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var V = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, F = Object.assign, q = {};
  function te(E, j, K) {
    this.props = E, this.context = j, this.refs = q, this.updater = K || V;
  }
  te.prototype.isReactComponent = {}, te.prototype.setState = function(E, j) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, j, "setState");
  }, te.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function ne() {
  }
  ne.prototype = te.prototype;
  function W(E, j, K) {
    this.props = E, this.context = j, this.refs = q, this.updater = K || V;
  }
  var ee = W.prototype = new ne();
  ee.constructor = W, F(ee, te.prototype), ee.isPureReactComponent = !0;
  var ae = Array.isArray;
  function Ee() {
  }
  var ce = { H: null, A: null, T: null, S: null }, Q = Object.prototype.hasOwnProperty;
  function Ke(E, j, K) {
    var P = K.ref;
    return {
      $$typeof: e,
      type: E,
      key: j,
      ref: P !== void 0 ? P : null,
      props: K
    };
  }
  function nt(E, j) {
    return Ke(E.type, j, E.props);
  }
  function Je(E) {
    return typeof E == "object" && E !== null && E.$$typeof === e;
  }
  function ue(E) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(K) {
      return j[K];
    });
  }
  var ye = /\/+/g;
  function xe(E, j) {
    return typeof E == "object" && E !== null && E.key != null ? ue("" + E.key) : j.toString(36);
  }
  function Te(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(Ee, Ee) : (E.status = "pending", E.then(
          function(j) {
            E.status === "pending" && (E.status = "fulfilled", E.value = j);
          },
          function(j) {
            E.status === "pending" && (E.status = "rejected", E.reason = j);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function R(E, j, K, P, _e) {
    var Se = typeof E;
    (Se === "undefined" || Se === "boolean") && (E = null);
    var be = !1;
    if (E === null) be = !0;
    else
      switch (Se) {
        case "bigint":
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case e:
            case n:
              be = !0;
              break;
            case y:
              return be = E._init, R(
                be(E._payload),
                j,
                K,
                P,
                _e
              );
          }
      }
    if (be)
      return _e = _e(E), be = P === "" ? "." + xe(E, 0) : P, ae(_e) ? (K = "", be != null && (K = be.replace(ye, "$&/") + "/"), R(_e, j, K, "", function(Qt) {
        return Qt;
      })) : _e != null && (Je(_e) && (_e = nt(
        _e,
        K + (_e.key == null || E && E.key === _e.key ? "" : ("" + _e.key).replace(
          ye,
          "$&/"
        ) + "/") + be
      )), j.push(_e)), 1;
    be = 0;
    var ct = P === "" ? "." : P + ":";
    if (ae(E))
      for (var Ge = 0; Ge < E.length; Ge++)
        P = E[Ge], Se = ct + xe(P, Ge), be += R(
          P,
          j,
          K,
          Se,
          _e
        );
    else if (Ge = x(E), typeof Ge == "function")
      for (E = Ge.call(E), Ge = 0; !(P = E.next()).done; )
        P = P.value, Se = ct + xe(P, Ge++), be += R(
          P,
          j,
          K,
          Se,
          _e
        );
    else if (Se === "object") {
      if (typeof E.then == "function")
        return R(
          Te(E),
          j,
          K,
          P,
          _e
        );
      throw j = String(E), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return be;
  }
  function Y(E, j, K) {
    if (E == null) return E;
    var P = [], _e = 0;
    return R(E, P, "", "", function(Se) {
      return j.call(K, Se, _e++);
    }), P;
  }
  function Z(E) {
    if (E._status === -1) {
      var j = E._result;
      j = j(), j.then(
        function(K) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = K);
        },
        function(K) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = K);
        }
      ), E._status === -1 && (E._status = 0, E._result = j);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var Ne = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  }, Le = {
    map: Y,
    forEach: function(E, j, K) {
      Y(
        E,
        function() {
          j.apply(this, arguments);
        },
        K
      );
    },
    count: function(E) {
      var j = 0;
      return Y(E, function() {
        j++;
      }), j;
    },
    toArray: function(E) {
      return Y(E, function(j) {
        return j;
      }) || [];
    },
    only: function(E) {
      if (!Je(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return Oe.Activity = b, Oe.Children = Le, Oe.Component = te, Oe.Fragment = i, Oe.Profiler = l, Oe.PureComponent = W, Oe.StrictMode = o, Oe.Suspense = g, Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ce, Oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return ce.H.useMemoCache(E);
    }
  }, Oe.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, Oe.cacheSignal = function() {
    return null;
  }, Oe.cloneElement = function(E, j, K) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var P = F({}, E.props), _e = E.key;
    if (j != null)
      for (Se in j.key !== void 0 && (_e = "" + j.key), j)
        !Q.call(j, Se) || Se === "key" || Se === "__self" || Se === "__source" || Se === "ref" && j.ref === void 0 || (P[Se] = j[Se]);
    var Se = arguments.length - 2;
    if (Se === 1) P.children = K;
    else if (1 < Se) {
      for (var be = Array(Se), ct = 0; ct < Se; ct++)
        be[ct] = arguments[ct + 2];
      P.children = be;
    }
    return Ke(E.type, _e, P);
  }, Oe.createContext = function(E) {
    return E = {
      $$typeof: d,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: c,
      _context: E
    }, E;
  }, Oe.createElement = function(E, j, K) {
    var P, _e = {}, Se = null;
    if (j != null)
      for (P in j.key !== void 0 && (Se = "" + j.key), j)
        Q.call(j, P) && P !== "key" && P !== "__self" && P !== "__source" && (_e[P] = j[P]);
    var be = arguments.length - 2;
    if (be === 1) _e.children = K;
    else if (1 < be) {
      for (var ct = Array(be), Ge = 0; Ge < be; Ge++)
        ct[Ge] = arguments[Ge + 2];
      _e.children = ct;
    }
    if (E && E.defaultProps)
      for (P in be = E.defaultProps, be)
        _e[P] === void 0 && (_e[P] = be[P]);
    return Ke(E, Se, _e);
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(E) {
    return { $$typeof: h, render: E };
  }, Oe.isValidElement = Je, Oe.lazy = function(E) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: E },
      _init: Z
    };
  }, Oe.memo = function(E, j) {
    return {
      $$typeof: m,
      type: E,
      compare: j === void 0 ? null : j
    };
  }, Oe.startTransition = function(E) {
    var j = ce.T, K = {};
    ce.T = K;
    try {
      var P = E(), _e = ce.S;
      _e !== null && _e(K, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(Ee, Ne);
    } catch (Se) {
      Ne(Se);
    } finally {
      j !== null && K.types !== null && (j.types = K.types), ce.T = j;
    }
  }, Oe.unstable_useCacheRefresh = function() {
    return ce.H.useCacheRefresh();
  }, Oe.use = function(E) {
    return ce.H.use(E);
  }, Oe.useActionState = function(E, j, K) {
    return ce.H.useActionState(E, j, K);
  }, Oe.useCallback = function(E, j) {
    return ce.H.useCallback(E, j);
  }, Oe.useContext = function(E) {
    return ce.H.useContext(E);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(E, j) {
    return ce.H.useDeferredValue(E, j);
  }, Oe.useEffect = function(E, j) {
    return ce.H.useEffect(E, j);
  }, Oe.useEffectEvent = function(E) {
    return ce.H.useEffectEvent(E);
  }, Oe.useId = function() {
    return ce.H.useId();
  }, Oe.useImperativeHandle = function(E, j, K) {
    return ce.H.useImperativeHandle(E, j, K);
  }, Oe.useInsertionEffect = function(E, j) {
    return ce.H.useInsertionEffect(E, j);
  }, Oe.useLayoutEffect = function(E, j) {
    return ce.H.useLayoutEffect(E, j);
  }, Oe.useMemo = function(E, j) {
    return ce.H.useMemo(E, j);
  }, Oe.useOptimistic = function(E, j) {
    return ce.H.useOptimistic(E, j);
  }, Oe.useReducer = function(E, j, K) {
    return ce.H.useReducer(E, j, K);
  }, Oe.useRef = function(E) {
    return ce.H.useRef(E);
  }, Oe.useState = function(E) {
    return ce.H.useState(E);
  }, Oe.useSyncExternalStore = function(E, j, K) {
    return ce.H.useSyncExternalStore(
      E,
      j,
      K
    );
  }, Oe.useTransition = function() {
    return ce.H.useTransition();
  }, Oe.version = "19.2.4", Oe;
}
var M2;
function T1() {
  return M2 || (M2 = 1, Oh.exports = j5()), Oh.exports;
}
var B = T1();
const Ve = /* @__PURE__ */ U5(B), F3 = /* @__PURE__ */ M5({
  __proto__: null,
  default: Ve
}, [B]);
var Rh = { exports: {} }, ol = {}, zh = { exports: {} }, Nh = {};
var U2;
function H5() {
  return U2 || (U2 = 1, (function(e) {
    function n(R, Y) {
      var Z = R.length;
      R.push(Y);
      e: for (; 0 < Z; ) {
        var Ne = Z - 1 >>> 1, Le = R[Ne];
        if (0 < l(Le, Y))
          R[Ne] = Y, R[Z] = Le, Z = Ne;
        else break e;
      }
    }
    function i(R) {
      return R.length === 0 ? null : R[0];
    }
    function o(R) {
      if (R.length === 0) return null;
      var Y = R[0], Z = R.pop();
      if (Z !== Y) {
        R[0] = Z;
        e: for (var Ne = 0, Le = R.length, E = Le >>> 1; Ne < E; ) {
          var j = 2 * (Ne + 1) - 1, K = R[j], P = j + 1, _e = R[P];
          if (0 > l(K, Z))
            P < Le && 0 > l(_e, K) ? (R[Ne] = _e, R[P] = Z, Ne = P) : (R[Ne] = K, R[j] = Z, Ne = j);
          else if (P < Le && 0 > l(_e, Z))
            R[Ne] = _e, R[P] = Z, Ne = P;
          else break e;
        }
      }
      return Y;
    }
    function l(R, Y) {
      var Z = R.sortIndex - Y.sortIndex;
      return Z !== 0 ? Z : R.id - Y.id;
    }
    if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      e.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, h = d.now();
      e.unstable_now = function() {
        return d.now() - h;
      };
    }
    var g = [], m = [], y = 1, b = null, A = 3, x = !1, V = !1, F = !1, q = !1, te = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, W = typeof setImmediate < "u" ? setImmediate : null;
    function ee(R) {
      for (var Y = i(m); Y !== null; ) {
        if (Y.callback === null) o(m);
        else if (Y.startTime <= R)
          o(m), Y.sortIndex = Y.expirationTime, n(g, Y);
        else break;
        Y = i(m);
      }
    }
    function ae(R) {
      if (F = !1, ee(R), !V)
        if (i(g) !== null)
          V = !0, Ee || (Ee = !0, ue());
        else {
          var Y = i(m);
          Y !== null && Te(ae, Y.startTime - R);
        }
    }
    var Ee = !1, ce = -1, Q = 5, Ke = -1;
    function nt() {
      return q ? !0 : !(e.unstable_now() - Ke < Q);
    }
    function Je() {
      if (q = !1, Ee) {
        var R = e.unstable_now();
        Ke = R;
        var Y = !0;
        try {
          e: {
            V = !1, F && (F = !1, ne(ce), ce = -1), x = !0;
            var Z = A;
            try {
              t: {
                for (ee(R), b = i(g); b !== null && !(b.expirationTime > R && nt()); ) {
                  var Ne = b.callback;
                  if (typeof Ne == "function") {
                    b.callback = null, A = b.priorityLevel;
                    var Le = Ne(
                      b.expirationTime <= R
                    );
                    if (R = e.unstable_now(), typeof Le == "function") {
                      b.callback = Le, ee(R), Y = !0;
                      break t;
                    }
                    b === i(g) && o(g), ee(R);
                  } else o(g);
                  b = i(g);
                }
                if (b !== null) Y = !0;
                else {
                  var E = i(m);
                  E !== null && Te(
                    ae,
                    E.startTime - R
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              b = null, A = Z, x = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? ue() : Ee = !1;
        }
      }
    }
    var ue;
    if (typeof W == "function")
      ue = function() {
        W(Je);
      };
    else if (typeof MessageChannel < "u") {
      var ye = new MessageChannel(), xe = ye.port2;
      ye.port1.onmessage = Je, ue = function() {
        xe.postMessage(null);
      };
    } else
      ue = function() {
        te(Je, 0);
      };
    function Te(R, Y) {
      ce = te(function() {
        R(e.unstable_now());
      }, Y);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, e.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Q = 0 < R ? Math.floor(1e3 / R) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, e.unstable_next = function(R) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = A;
      }
      var Z = A;
      A = Y;
      try {
        return R();
      } finally {
        A = Z;
      }
    }, e.unstable_requestPaint = function() {
      q = !0;
    }, e.unstable_runWithPriority = function(R, Y) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var Z = A;
      A = R;
      try {
        return Y();
      } finally {
        A = Z;
      }
    }, e.unstable_scheduleCallback = function(R, Y, Z) {
      var Ne = e.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? Ne + Z : Ne) : Z = Ne, R) {
        case 1:
          var Le = -1;
          break;
        case 2:
          Le = 250;
          break;
        case 5:
          Le = 1073741823;
          break;
        case 4:
          Le = 1e4;
          break;
        default:
          Le = 5e3;
      }
      return Le = Z + Le, R = {
        id: y++,
        callback: Y,
        priorityLevel: R,
        startTime: Z,
        expirationTime: Le,
        sortIndex: -1
      }, Z > Ne ? (R.sortIndex = Z, n(m, R), i(g) === null && R === i(m) && (F ? (ne(ce), ce = -1) : F = !0, Te(ae, Z - Ne))) : (R.sortIndex = Le, n(g, R), V || x || (V = !0, Ee || (Ee = !0, ue()))), R;
    }, e.unstable_shouldYield = nt, e.unstable_wrapCallback = function(R) {
      var Y = A;
      return function() {
        var Z = A;
        A = Y;
        try {
          return R.apply(this, arguments);
        } finally {
          A = Z;
        }
      };
    };
  })(Nh)), Nh;
}
var j2;
function V5() {
  return j2 || (j2 = 1, zh.exports = H5()), zh.exports;
}
var Lh = { exports: {} }, dn = {};
var H2;
function G5() {
  if (H2) return dn;
  H2 = 1;
  var e = T1();
  function n(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var o = {
    d: {
      f: i,
      r: function() {
        throw Error(n(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, l = /* @__PURE__ */ Symbol.for("react.portal");
  function c(g, m, y) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: m,
      implementation: y
    };
  }
  var d = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, m) {
    if (g === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, dn.createPortal = function(g, m) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(n(299));
    return c(g, m, null, y);
  }, dn.flushSync = function(g) {
    var m = d.T, y = o.p;
    try {
      if (d.T = null, o.p = 2, g) return g();
    } finally {
      d.T = m, o.p = y, o.d.f();
    }
  }, dn.preconnect = function(g, m) {
    typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(g, m));
  }, dn.prefetchDNS = function(g) {
    typeof g == "string" && o.d.D(g);
  }, dn.preinit = function(g, m) {
    if (typeof g == "string" && m && typeof m.as == "string") {
      var y = m.as, b = h(y, m.crossOrigin), A = typeof m.integrity == "string" ? m.integrity : void 0, x = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      y === "style" ? o.d.S(
        g,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: b,
          integrity: A,
          fetchPriority: x
        }
      ) : y === "script" && o.d.X(g, {
        crossOrigin: b,
        integrity: A,
        fetchPriority: x,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, dn.preinitModule = function(g, m) {
    if (typeof g == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var y = h(
            m.as,
            m.crossOrigin
          );
          o.d.M(g, {
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && o.d.M(g);
  }, dn.preload = function(g, m) {
    if (typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var y = m.as, b = h(y, m.crossOrigin);
      o.d.L(g, y, {
        crossOrigin: b,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, dn.preloadModule = function(g, m) {
    if (typeof g == "string")
      if (m) {
        var y = h(m.as, m.crossOrigin);
        o.d.m(g, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else o.d.m(g);
  }, dn.requestFormReset = function(g) {
    o.d.r(g);
  }, dn.unstable_batchedUpdates = function(g, m) {
    return g(m);
  }, dn.useFormState = function(g, m, y) {
    return d.H.useFormState(g, m, y);
  }, dn.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, dn.version = "19.2.4", dn;
}
var V2;
function Z3() {
  if (V2) return Lh.exports;
  V2 = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), Lh.exports = G5(), Lh.exports;
}
var G2;
function B5() {
  if (G2) return ol;
  G2 = 1;
  var e = V5(), n = T1(), i = Z3();
  function o(t) {
    var a = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        a += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + t + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function c(t) {
    var a = t, r = t;
    if (t.alternate) for (; a.return; ) a = a.return;
    else {
      t = a;
      do
        a = t, (a.flags & 4098) !== 0 && (r = a.return), t = a.return;
      while (t);
    }
    return a.tag === 3 ? r : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var a = t.memoizedState;
      if (a === null && (t = t.alternate, t !== null && (a = t.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var a = t.memoizedState;
      if (a === null && (t = t.alternate, t !== null && (a = t.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (c(t) !== t)
      throw Error(o(188));
  }
  function m(t) {
    var a = t.alternate;
    if (!a) {
      if (a = c(t), a === null) throw Error(o(188));
      return a !== t ? null : t;
    }
    for (var r = t, s = a; ; ) {
      var u = r.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (s = u.return, s !== null) {
          r = s;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === r) return g(u), t;
          if (f === s) return g(u), a;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== s.return) r = u, s = f;
      else {
        for (var p = !1, v = u.child; v; ) {
          if (v === r) {
            p = !0, r = u, s = f;
            break;
          }
          if (v === s) {
            p = !0, s = u, r = f;
            break;
          }
          v = v.sibling;
        }
        if (!p) {
          for (v = f.child; v; ) {
            if (v === r) {
              p = !0, r = f, s = u;
              break;
            }
            if (v === s) {
              p = !0, s = f, r = u;
              break;
            }
            v = v.sibling;
          }
          if (!p) throw Error(o(189));
        }
      }
      if (r.alternate !== s) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? t : a;
  }
  function y(t) {
    var a = t.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return t;
    for (t = t.child; t !== null; ) {
      if (a = y(t), a !== null) return a;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign, A = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.transitional.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), F = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), te = /* @__PURE__ */ Symbol.for("react.profiler"), ne = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), ee = /* @__PURE__ */ Symbol.for("react.forward_ref"), ae = /* @__PURE__ */ Symbol.for("react.suspense"), Ee = /* @__PURE__ */ Symbol.for("react.suspense_list"), ce = /* @__PURE__ */ Symbol.for("react.memo"), Q = /* @__PURE__ */ Symbol.for("react.lazy"), Ke = /* @__PURE__ */ Symbol.for("react.activity"), nt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Je = Symbol.iterator;
  function ue(t) {
    return t === null || typeof t != "object" ? null : (t = Je && t[Je] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ye = /* @__PURE__ */ Symbol.for("react.client.reference");
  function xe(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ye ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case F:
        return "Fragment";
      case te:
        return "Profiler";
      case q:
        return "StrictMode";
      case ae:
        return "Suspense";
      case Ee:
        return "SuspenseList";
      case Ke:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case V:
          return "Portal";
        case W:
          return t.displayName || "Context";
        case ne:
          return (t._context.displayName || "Context") + ".Consumer";
        case ee:
          var a = t.render;
          return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ce:
          return a = t.displayName || null, a !== null ? a : xe(t.type) || "Memo";
        case Q:
          a = t._payload, t = t._init;
          try {
            return xe(t(a));
          } catch {
          }
      }
    return null;
  }
  var Te = Array.isArray, R = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ne = [], Le = -1;
  function E(t) {
    return { current: t };
  }
  function j(t) {
    0 > Le || (t.current = Ne[Le], Ne[Le] = null, Le--);
  }
  function K(t, a) {
    Le++, Ne[Le] = t.current, t.current = a;
  }
  var P = E(null), _e = E(null), Se = E(null), be = E(null);
  function ct(t, a) {
    switch (K(Se, a), K(_e, t), K(P, null), a.nodeType) {
      case 9:
      case 11:
        t = (t = a.documentElement) && (t = t.namespaceURI) ? a2(t) : 0;
        break;
      default:
        if (t = a.tagName, a = a.namespaceURI)
          a = a2(a), t = i2(a, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    j(P), K(P, t);
  }
  function Ge() {
    j(P), j(_e), j(Se);
  }
  function Qt(t) {
    t.memoizedState !== null && K(be, t);
    var a = P.current, r = i2(a, t.type);
    a !== r && (K(_e, t), K(P, r));
  }
  function _n(t) {
    _e.current === t && (j(P), j(_e)), be.current === t && (j(be), nl._currentValue = Z);
  }
  var Gt, _i;
  function va(t) {
    if (Gt === void 0)
      try {
        throw Error();
      } catch (r) {
        var a = r.stack.trim().match(/\n( *(at )?)/);
        Gt = a && a[1] || "", _i = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Gt + t + _i;
  }
  var Fr = !1;
  function Zr(t, a) {
    if (!t || Fr) return "";
    Fr = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var G = function() {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (C) {
                  var N = C;
                }
                Reflect.construct(t, [], G);
              } else {
                try {
                  G.call();
                } catch (C) {
                  N = C;
                }
                t.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                N = C;
              }
              (G = t()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (C) {
            if (C && N && typeof C.stack == "string")
              return [C.stack, N.stack];
          }
          return [null, null];
        }
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        s.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = s.DetermineComponentFrameRoot(), p = f[0], v = f[1];
      if (p && v) {
        var _ = p.split(`
`), O = v.split(`
`);
        for (u = s = 0; s < _.length && !_[s].includes("DetermineComponentFrameRoot"); )
          s++;
        for (; u < O.length && !O[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (s === _.length || u === O.length)
          for (s = _.length - 1, u = O.length - 1; 1 <= s && 0 <= u && _[s] !== O[u]; )
            u--;
        for (; 1 <= s && 0 <= u; s--, u--)
          if (_[s] !== O[u]) {
            if (s !== 1 || u !== 1)
              do
                if (s--, u--, 0 > u || _[s] !== O[u]) {
                  var U = `
` + _[s].replace(" at new ", " at ");
                  return t.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", t.displayName)), U;
                }
              while (1 <= s && 0 <= u);
            break;
          }
      }
    } finally {
      Fr = !1, Error.prepareStackTrace = r;
    }
    return (r = t ? t.displayName || t.name : "") ? va(r) : "";
  }
  function pf(t, a) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return va(t.type);
      case 16:
        return va("Lazy");
      case 13:
        return t.child !== a && a !== null ? va("Suspense Fallback") : va("Suspense");
      case 19:
        return va("SuspenseList");
      case 0:
      case 15:
        return Zr(t.type, !1);
      case 11:
        return Zr(t.type.render, !1);
      case 1:
        return Zr(t.type, !0);
      case 31:
        return va("Activity");
      default:
        return "";
    }
  }
  function Gl(t) {
    try {
      var a = "", r = null;
      do
        a += pf(t, r), r = t, t = t.return;
      while (t);
      return a;
    } catch (s) {
      return `
Error generating stack: ` + s.message + `
` + s.stack;
    }
  }
  var Bl = Object.prototype.hasOwnProperty, Ir = e.unstable_scheduleCallback, w = e.unstable_cancelCallback, z = e.unstable_shouldYield, M = e.unstable_requestPaint, $ = e.unstable_now, J = e.unstable_getCurrentPriorityLevel, X = e.unstable_ImmediatePriority, pe = e.unstable_UserBlockingPriority, Be = e.unstable_NormalPriority, Xe = e.unstable_LowPriority, $t = e.unstable_IdlePriority, Ya = e.log, Oa = e.unstable_setDisableYieldValue, nr = null, an = null;
  function Jn(t) {
    if (typeof Ya == "function" && Oa(t), an && typeof an.setStrictMode == "function")
      try {
        an.setStrictMode(nr, t);
      } catch {
      }
  }
  var pn = Math.clz32 ? Math.clz32 : Zl, Fl = Math.log, gf = Math.LN2;
  function Zl(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Fl(t) / gf | 0) | 0;
  }
  var Il = 256, ql = 262144, Yl = 4194304;
  function ar(t) {
    var a = t & 42;
    if (a !== 0) return a;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Kl(t, a, r) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var u = 0, f = t.suspendedLanes, p = t.pingedLanes;
    t = t.warmLanes;
    var v = s & 134217727;
    return v !== 0 ? (s = v & ~f, s !== 0 ? u = ar(s) : (p &= v, p !== 0 ? u = ar(p) : r || (r = v & ~t, r !== 0 && (u = ar(r))))) : (v = s & ~f, v !== 0 ? u = ar(v) : p !== 0 ? u = ar(p) : r || (r = s & ~t, r !== 0 && (u = ar(r)))), u === 0 ? 0 : a !== 0 && a !== u && (a & f) === 0 && (f = u & -u, r = a & -a, f >= r || f === 32 && (r & 4194048) !== 0) ? a : u;
  }
  function gs(t, a) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & a) === 0;
  }
  function A_(t, a) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Hp() {
    var t = Yl;
    return Yl <<= 1, (Yl & 62914560) === 0 && (Yl = 4194304), t;
  }
  function mf(t) {
    for (var a = [], r = 0; 31 > r; r++) a.push(t);
    return a;
  }
  function ms(t, a) {
    t.pendingLanes |= a, a !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function E_(t, a, r, s, u, f) {
    var p = t.pendingLanes;
    t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= r, t.entangledLanes &= r, t.errorRecoveryDisabledLanes &= r, t.shellSuspendCounter = 0;
    var v = t.entanglements, _ = t.expirationTimes, O = t.hiddenUpdates;
    for (r = p & ~r; 0 < r; ) {
      var U = 31 - pn(r), G = 1 << U;
      v[U] = 0, _[U] = -1;
      var N = O[U];
      if (N !== null)
        for (O[U] = null, U = 0; U < N.length; U++) {
          var C = N[U];
          C !== null && (C.lane &= -536870913);
        }
      r &= ~G;
    }
    s !== 0 && Vp(t, s, 0), f !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(p & ~a));
  }
  function Vp(t, a, r) {
    t.pendingLanes |= a, t.suspendedLanes &= ~a;
    var s = 31 - pn(a);
    t.entangledLanes |= a, t.entanglements[s] = t.entanglements[s] | 1073741824 | r & 261930;
  }
  function Gp(t, a) {
    var r = t.entangledLanes |= a;
    for (t = t.entanglements; r; ) {
      var s = 31 - pn(r), u = 1 << s;
      u & a | t[s] & a && (t[s] |= a), r &= ~u;
    }
  }
  function Bp(t, a) {
    var r = a & -a;
    return r = (r & 42) !== 0 ? 1 : vf(r), (r & (t.suspendedLanes | a)) !== 0 ? 0 : r;
  }
  function vf(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function yf(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Fp() {
    var t = Y.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : k2(t.type));
  }
  function Zp(t, a) {
    var r = Y.p;
    try {
      return Y.p = t, a();
    } finally {
      Y.p = r;
    }
  }
  var wi = Math.random().toString(36).slice(2), rn = "__reactFiber$" + wi, wn = "__reactProps$" + wi, qr = "__reactContainer$" + wi, bf = "__reactEvents$" + wi, S_ = "__reactListeners$" + wi, x_ = "__reactHandles$" + wi, Ip = "__reactResources$" + wi, vs = "__reactMarker$" + wi;
  function _f(t) {
    delete t[rn], delete t[wn], delete t[bf], delete t[S_], delete t[x_];
  }
  function Yr(t) {
    var a = t[rn];
    if (a) return a;
    for (var r = t.parentNode; r; ) {
      if (a = r[qr] || r[rn]) {
        if (r = a.alternate, a.child !== null || r !== null && r.child !== null)
          for (t = f2(t); t !== null; ) {
            if (r = t[rn]) return r;
            t = f2(t);
          }
        return a;
      }
      t = r, r = t.parentNode;
    }
    return null;
  }
  function Kr(t) {
    if (t = t[rn] || t[qr]) {
      var a = t.tag;
      if (a === 5 || a === 6 || a === 13 || a === 31 || a === 26 || a === 27 || a === 3)
        return t;
    }
    return null;
  }
  function ys(t) {
    var a = t.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Xr(t) {
    var a = t[Ip];
    return a || (a = t[Ip] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function Pt(t) {
    t[vs] = !0;
  }
  var qp = /* @__PURE__ */ new Set(), Yp = {};
  function ir(t, a) {
    Qr(t, a), Qr(t + "Capture", a);
  }
  function Qr(t, a) {
    for (Yp[t] = a, t = 0; t < a.length; t++)
      qp.add(a[t]);
  }
  var T_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Kp = {}, Xp = {};
  function k_(t) {
    return Bl.call(Xp, t) ? !0 : Bl.call(Kp, t) ? !1 : T_.test(t) ? Xp[t] = !0 : (Kp[t] = !0, !1);
  }
  function Xl(t, a, r) {
    if (k_(a))
      if (r === null) t.removeAttribute(a);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(a);
            return;
          case "boolean":
            var s = a.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              t.removeAttribute(a);
              return;
            }
        }
        t.setAttribute(a, "" + r);
      }
  }
  function Ql(t, a, r) {
    if (r === null) t.removeAttribute(a);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttribute(a, "" + r);
    }
  }
  function Ka(t, a, r, s) {
    if (s === null) t.removeAttribute(r);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(r);
          return;
      }
      t.setAttributeNS(a, r, "" + s);
    }
  }
  function Wn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Qp(t) {
    var a = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function O_(t, a, r) {
    var s = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      a
    );
    if (!t.hasOwnProperty(a) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var u = s.get, f = s.set;
      return Object.defineProperty(t, a, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(p) {
          r = "" + p, f.call(this, p);
        }
      }), Object.defineProperty(t, a, {
        enumerable: s.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(p) {
          r = "" + p;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[a];
        }
      };
    }
  }
  function wf(t) {
    if (!t._valueTracker) {
      var a = Qp(t) ? "checked" : "value";
      t._valueTracker = O_(
        t,
        a,
        "" + t[a]
      );
    }
  }
  function $p(t) {
    if (!t) return !1;
    var a = t._valueTracker;
    if (!a) return !0;
    var r = a.getValue(), s = "";
    return t && (s = Qp(t) ? t.checked ? "true" : "false" : t.value), t = s, t !== r ? (a.setValue(t), !0) : !1;
  }
  function $l(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var R_ = /[\n"\\]/g;
  function ea(t) {
    return t.replace(
      R_,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Af(t, a, r, s, u, f, p, v) {
    t.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.type = p : t.removeAttribute("type"), a != null ? p === "number" ? (a === 0 && t.value === "" || t.value != a) && (t.value = "" + Wn(a)) : t.value !== "" + Wn(a) && (t.value = "" + Wn(a)) : p !== "submit" && p !== "reset" || t.removeAttribute("value"), a != null ? Ef(t, p, Wn(a)) : r != null ? Ef(t, p, Wn(r)) : s != null && t.removeAttribute("value"), u == null && f != null && (t.defaultChecked = !!f), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Wn(v) : t.removeAttribute("name");
  }
  function Pp(t, a, r, s, u, f, p, v) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.type = f), a != null || r != null) {
      if (!(f !== "submit" && f !== "reset" || a != null)) {
        wf(t);
        return;
      }
      r = r != null ? "" + Wn(r) : "", a = a != null ? "" + Wn(a) : r, v || a === t.value || (t.value = a), t.defaultValue = a;
    }
    s = s ?? u, s = typeof s != "function" && typeof s != "symbol" && !!s, t.checked = v ? t.checked : !!s, t.defaultChecked = !!s, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.name = p), wf(t);
  }
  function Ef(t, a, r) {
    a === "number" && $l(t.ownerDocument) === t || t.defaultValue === "" + r || (t.defaultValue = "" + r);
  }
  function $r(t, a, r, s) {
    if (t = t.options, a) {
      a = {};
      for (var u = 0; u < r.length; u++)
        a["$" + r[u]] = !0;
      for (r = 0; r < t.length; r++)
        u = a.hasOwnProperty("$" + t[r].value), t[r].selected !== u && (t[r].selected = u), u && s && (t[r].defaultSelected = !0);
    } else {
      for (r = "" + Wn(r), a = null, u = 0; u < t.length; u++) {
        if (t[u].value === r) {
          t[u].selected = !0, s && (t[u].defaultSelected = !0);
          return;
        }
        a !== null || t[u].disabled || (a = t[u]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Jp(t, a, r) {
    if (a != null && (a = "" + Wn(a), a !== t.value && (t.value = a), r == null)) {
      t.defaultValue !== a && (t.defaultValue = a);
      return;
    }
    t.defaultValue = r != null ? "" + Wn(r) : "";
  }
  function Wp(t, a, r, s) {
    if (a == null) {
      if (s != null) {
        if (r != null) throw Error(o(92));
        if (Te(s)) {
          if (1 < s.length) throw Error(o(93));
          s = s[0];
        }
        r = s;
      }
      r == null && (r = ""), a = r;
    }
    r = Wn(a), t.defaultValue = r, s = t.textContent, s === r && s !== "" && s !== null && (t.value = s), wf(t);
  }
  function Pr(t, a) {
    if (a) {
      var r = t.firstChild;
      if (r && r === t.lastChild && r.nodeType === 3) {
        r.nodeValue = a;
        return;
      }
    }
    t.textContent = a;
  }
  var z_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function e0(t, a, r) {
    var s = a.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? s ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "" : s ? t.setProperty(a, r) : typeof r != "number" || r === 0 || z_.has(a) ? a === "float" ? t.cssFloat = r : t[a] = ("" + r).trim() : t[a] = r + "px";
  }
  function t0(t, a, r) {
    if (a != null && typeof a != "object")
      throw Error(o(62));
    if (t = t.style, r != null) {
      for (var s in r)
        !r.hasOwnProperty(s) || a != null && a.hasOwnProperty(s) || (s.indexOf("--") === 0 ? t.setProperty(s, "") : s === "float" ? t.cssFloat = "" : t[s] = "");
      for (var u in a)
        s = a[u], a.hasOwnProperty(u) && r[u] !== s && e0(t, u, s);
    } else
      for (var f in a)
        a.hasOwnProperty(f) && e0(t, f, a[f]);
  }
  function Sf(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var N_ = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), L_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pl(t) {
    return L_.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Xa() {
  }
  var xf = null;
  function Tf(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Jr = null, Wr = null;
  function n0(t) {
    var a = Kr(t);
    if (a && (t = a.stateNode)) {
      var r = t[wn] || null;
      e: switch (t = a.stateNode, a.type) {
        case "input":
          if (Af(
            t,
            r.value,
            r.defaultValue,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name
          ), a = r.name, r.type === "radio" && a != null) {
            for (r = t; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll(
              'input[name="' + ea(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < r.length; a++) {
              var s = r[a];
              if (s !== t && s.form === t.form) {
                var u = s[wn] || null;
                if (!u) throw Error(o(90));
                Af(
                  s,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (a = 0; a < r.length; a++)
              s = r[a], s.form === t.form && $p(s);
          }
          break e;
        case "textarea":
          Jp(t, r.value, r.defaultValue);
          break e;
        case "select":
          a = r.value, a != null && $r(t, !!r.multiple, a, !1);
      }
    }
  }
  var kf = !1;
  function a0(t, a, r) {
    if (kf) return t(a, r);
    kf = !0;
    try {
      var s = t(a);
      return s;
    } finally {
      if (kf = !1, (Jr !== null || Wr !== null) && (Hc(), Jr && (a = Jr, t = Wr, Wr = Jr = null, n0(a), t)))
        for (a = 0; a < t.length; a++) n0(t[a]);
    }
  }
  function bs(t, a) {
    var r = t.stateNode;
    if (r === null) return null;
    var s = r[wn] || null;
    if (s === null) return null;
    r = s[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) || (t = t.type, s = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !s;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (r && typeof r != "function")
      throw Error(
        o(231, a, typeof r)
      );
    return r;
  }
  var Qa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Of = !1;
  if (Qa)
    try {
      var _s = {};
      Object.defineProperty(_s, "passive", {
        get: function() {
          Of = !0;
        }
      }), window.addEventListener("test", _s, _s), window.removeEventListener("test", _s, _s);
    } catch {
      Of = !1;
    }
  var Ai = null, Rf = null, Jl = null;
  function i0() {
    if (Jl) return Jl;
    var t, a = Rf, r = a.length, s, u = "value" in Ai ? Ai.value : Ai.textContent, f = u.length;
    for (t = 0; t < r && a[t] === u[t]; t++) ;
    var p = r - t;
    for (s = 1; s <= p && a[r - s] === u[f - s]; s++) ;
    return Jl = u.slice(t, 1 < s ? 1 - s : void 0);
  }
  function Wl(t) {
    var a = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function ec() {
    return !0;
  }
  function r0() {
    return !1;
  }
  function An(t) {
    function a(r, s, u, f, p) {
      this._reactName = r, this._targetInst = u, this.type = s, this.nativeEvent = f, this.target = p, this.currentTarget = null;
      for (var v in t)
        t.hasOwnProperty(v) && (r = t[v], this[v] = r ? r(f) : f[v]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? ec : r0, this.isPropagationStopped = r0, this;
    }
    return b(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = ec);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = ec);
      },
      persist: function() {
      },
      isPersistent: ec
    }), a;
  }
  var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, tc = An(rr), ws = b({}, rr, { view: 0, detail: 0 }), C_ = An(ws), zf, Nf, As, nc = b({}, ws, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Cf,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== As && (As && t.type === "mousemove" ? (zf = t.screenX - As.screenX, Nf = t.screenY - As.screenY) : Nf = zf = 0, As = t), zf);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Nf;
    }
  }), o0 = An(nc), D_ = b({}, nc, { dataTransfer: 0 }), M_ = An(D_), U_ = b({}, ws, { relatedTarget: 0 }), Lf = An(U_), j_ = b({}, rr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), H_ = An(j_), V_ = b({}, rr, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), G_ = An(V_), B_ = b({}, rr, { data: 0 }), s0 = An(B_), F_ = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Z_ = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, I_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function q_(t) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(t) : (t = I_[t]) ? !!a[t] : !1;
  }
  function Cf() {
    return q_;
  }
  var Y_ = b({}, ws, {
    key: function(t) {
      if (t.key) {
        var a = F_[t.key] || t.key;
        if (a !== "Unidentified") return a;
      }
      return t.type === "keypress" ? (t = Wl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Z_[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cf,
    charCode: function(t) {
      return t.type === "keypress" ? Wl(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Wl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), K_ = An(Y_), X_ = b({}, nc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), l0 = An(X_), Q_ = b({}, ws, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cf
  }), $_ = An(Q_), P_ = b({}, rr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), J_ = An(P_), W_ = b({}, nc, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), e6 = An(W_), t6 = b({}, rr, {
    newState: 0,
    oldState: 0
  }), n6 = An(t6), a6 = [9, 13, 27, 32], Df = Qa && "CompositionEvent" in window, Es = null;
  Qa && "documentMode" in document && (Es = document.documentMode);
  var i6 = Qa && "TextEvent" in window && !Es, c0 = Qa && (!Df || Es && 8 < Es && 11 >= Es), u0 = " ", f0 = !1;
  function d0(t, a) {
    switch (t) {
      case "keyup":
        return a6.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function h0(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var eo = !1;
  function r6(t, a) {
    switch (t) {
      case "compositionend":
        return h0(a);
      case "keypress":
        return a.which !== 32 ? null : (f0 = !0, u0);
      case "textInput":
        return t = a.data, t === u0 && f0 ? null : t;
      default:
        return null;
    }
  }
  function o6(t, a) {
    if (eo)
      return t === "compositionend" || !Df && d0(t, a) ? (t = i0(), Jl = Rf = Ai = null, eo = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return c0 && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var s6 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function p0(t) {
    var a = t && t.nodeName && t.nodeName.toLowerCase();
    return a === "input" ? !!s6[t.type] : a === "textarea";
  }
  function g0(t, a, r, s) {
    Jr ? Wr ? Wr.push(s) : Wr = [s] : Jr = s, a = qc(a, "onChange"), 0 < a.length && (r = new tc(
      "onChange",
      "change",
      null,
      r,
      s
    ), t.push({ event: r, listeners: a }));
  }
  var Ss = null, xs = null;
  function l6(t) {
    Pm(t, 0);
  }
  function ac(t) {
    var a = ys(t);
    if ($p(a)) return t;
  }
  function m0(t, a) {
    if (t === "change") return a;
  }
  var v0 = !1;
  if (Qa) {
    var Mf;
    if (Qa) {
      var Uf = "oninput" in document;
      if (!Uf) {
        var y0 = document.createElement("div");
        y0.setAttribute("oninput", "return;"), Uf = typeof y0.oninput == "function";
      }
      Mf = Uf;
    } else Mf = !1;
    v0 = Mf && (!document.documentMode || 9 < document.documentMode);
  }
  function b0() {
    Ss && (Ss.detachEvent("onpropertychange", _0), xs = Ss = null);
  }
  function _0(t) {
    if (t.propertyName === "value" && ac(xs)) {
      var a = [];
      g0(
        a,
        xs,
        t,
        Tf(t)
      ), a0(l6, a);
    }
  }
  function c6(t, a, r) {
    t === "focusin" ? (b0(), Ss = a, xs = r, Ss.attachEvent("onpropertychange", _0)) : t === "focusout" && b0();
  }
  function u6(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ac(xs);
  }
  function f6(t, a) {
    if (t === "click") return ac(a);
  }
  function d6(t, a) {
    if (t === "input" || t === "change")
      return ac(a);
  }
  function h6(t, a) {
    return t === a && (t !== 0 || 1 / t === 1 / a) || t !== t && a !== a;
  }
  var Cn = typeof Object.is == "function" ? Object.is : h6;
  function Ts(t, a) {
    if (Cn(t, a)) return !0;
    if (typeof t != "object" || t === null || typeof a != "object" || a === null)
      return !1;
    var r = Object.keys(t), s = Object.keys(a);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var u = r[s];
      if (!Bl.call(a, u) || !Cn(t[u], a[u]))
        return !1;
    }
    return !0;
  }
  function w0(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function A0(t, a) {
    var r = w0(t);
    t = 0;
    for (var s; r; ) {
      if (r.nodeType === 3) {
        if (s = t + r.textContent.length, t <= a && s >= a)
          return { node: r, offset: a - t };
        t = s;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = w0(r);
    }
  }
  function E0(t, a) {
    return t && a ? t === a ? !0 : t && t.nodeType === 3 ? !1 : a && a.nodeType === 3 ? E0(t, a.parentNode) : "contains" in t ? t.contains(a) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function S0(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var a = $l(t.document); a instanceof t.HTMLIFrameElement; ) {
      try {
        var r = typeof a.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) t = a.contentWindow;
      else break;
      a = $l(t.document);
    }
    return a;
  }
  function jf(t) {
    var a = t && t.nodeName && t.nodeName.toLowerCase();
    return a && (a === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || a === "textarea" || t.contentEditable === "true");
  }
  var p6 = Qa && "documentMode" in document && 11 >= document.documentMode, to = null, Hf = null, ks = null, Vf = !1;
  function x0(t, a, r) {
    var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Vf || to == null || to !== $l(s) || (s = to, "selectionStart" in s && jf(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), ks && Ts(ks, s) || (ks = s, s = qc(Hf, "onSelect"), 0 < s.length && (a = new tc(
      "onSelect",
      "select",
      null,
      a,
      r
    ), t.push({ event: a, listeners: s }), a.target = to)));
  }
  function or(t, a) {
    var r = {};
    return r[t.toLowerCase()] = a.toLowerCase(), r["Webkit" + t] = "webkit" + a, r["Moz" + t] = "moz" + a, r;
  }
  var no = {
    animationend: or("Animation", "AnimationEnd"),
    animationiteration: or("Animation", "AnimationIteration"),
    animationstart: or("Animation", "AnimationStart"),
    transitionrun: or("Transition", "TransitionRun"),
    transitionstart: or("Transition", "TransitionStart"),
    transitioncancel: or("Transition", "TransitionCancel"),
    transitionend: or("Transition", "TransitionEnd")
  }, Gf = {}, T0 = {};
  Qa && (T0 = document.createElement("div").style, "AnimationEvent" in window || (delete no.animationend.animation, delete no.animationiteration.animation, delete no.animationstart.animation), "TransitionEvent" in window || delete no.transitionend.transition);
  function sr(t) {
    if (Gf[t]) return Gf[t];
    if (!no[t]) return t;
    var a = no[t], r;
    for (r in a)
      if (a.hasOwnProperty(r) && r in T0)
        return Gf[t] = a[r];
    return t;
  }
  var k0 = sr("animationend"), O0 = sr("animationiteration"), R0 = sr("animationstart"), g6 = sr("transitionrun"), m6 = sr("transitionstart"), v6 = sr("transitioncancel"), z0 = sr("transitionend"), N0 = /* @__PURE__ */ new Map(), Bf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Bf.push("scrollEnd");
  function ya(t, a) {
    N0.set(t, a), ir(a, [t]);
  }
  var ic = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var a = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(a)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ta = [], ao = 0, Ff = 0;
  function rc() {
    for (var t = ao, a = Ff = ao = 0; a < t; ) {
      var r = ta[a];
      ta[a++] = null;
      var s = ta[a];
      ta[a++] = null;
      var u = ta[a];
      ta[a++] = null;
      var f = ta[a];
      if (ta[a++] = null, s !== null && u !== null) {
        var p = s.pending;
        p === null ? u.next = u : (u.next = p.next, p.next = u), s.pending = u;
      }
      f !== 0 && L0(r, u, f);
    }
  }
  function oc(t, a, r, s) {
    ta[ao++] = t, ta[ao++] = a, ta[ao++] = r, ta[ao++] = s, Ff |= s, t.lanes |= s, t = t.alternate, t !== null && (t.lanes |= s);
  }
  function Zf(t, a, r, s) {
    return oc(t, a, r, s), sc(t);
  }
  function lr(t, a) {
    return oc(t, null, null, a), sc(t);
  }
  function L0(t, a, r) {
    t.lanes |= r;
    var s = t.alternate;
    s !== null && (s.lanes |= r);
    for (var u = !1, f = t.return; f !== null; )
      f.childLanes |= r, s = f.alternate, s !== null && (s.childLanes |= r), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & 1 || (u = !0)), t = f, f = f.return;
    return t.tag === 3 ? (f = t.stateNode, u && a !== null && (u = 31 - pn(r), t = f.hiddenUpdates, s = t[u], s === null ? t[u] = [a] : s.push(a), a.lane = r | 536870912), f) : null;
  }
  function sc(t) {
    if (50 < Qs)
      throw Qs = 0, Jd = null, Error(o(185));
    for (var a = t.return; a !== null; )
      t = a, a = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var io = {};
  function y6(t, a, r, s) {
    this.tag = t, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Dn(t, a, r, s) {
    return new y6(t, a, r, s);
  }
  function If(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function $a(t, a) {
    var r = t.alternate;
    return r === null ? (r = Dn(
      t.tag,
      a,
      t.key,
      t.mode
    ), r.elementType = t.elementType, r.type = t.type, r.stateNode = t.stateNode, r.alternate = t, t.alternate = r) : (r.pendingProps = a, r.type = t.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = t.flags & 65011712, r.childLanes = t.childLanes, r.lanes = t.lanes, r.child = t.child, r.memoizedProps = t.memoizedProps, r.memoizedState = t.memoizedState, r.updateQueue = t.updateQueue, a = t.dependencies, r.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, r.sibling = t.sibling, r.index = t.index, r.ref = t.ref, r.refCleanup = t.refCleanup, r;
  }
  function C0(t, a) {
    t.flags &= 65011714;
    var r = t.alternate;
    return r === null ? (t.childLanes = 0, t.lanes = a, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = r.childLanes, t.lanes = r.lanes, t.child = r.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = r.memoizedProps, t.memoizedState = r.memoizedState, t.updateQueue = r.updateQueue, t.type = r.type, a = r.dependencies, t.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), t;
  }
  function lc(t, a, r, s, u, f) {
    var p = 0;
    if (s = t, typeof t == "function") If(t) && (p = 1);
    else if (typeof t == "string")
      p = E5(
        t,
        r,
        P.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      e: switch (t) {
        case Ke:
          return t = Dn(31, r, a, u), t.elementType = Ke, t.lanes = f, t;
        case F:
          return cr(r.children, u, f, a);
        case q:
          p = 8, u |= 24;
          break;
        case te:
          return t = Dn(12, r, a, u | 2), t.elementType = te, t.lanes = f, t;
        case ae:
          return t = Dn(13, r, a, u), t.elementType = ae, t.lanes = f, t;
        case Ee:
          return t = Dn(19, r, a, u), t.elementType = Ee, t.lanes = f, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case W:
                p = 10;
                break e;
              case ne:
                p = 9;
                break e;
              case ee:
                p = 11;
                break e;
              case ce:
                p = 14;
                break e;
              case Q:
                p = 16, s = null;
                break e;
            }
          p = 29, r = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), s = null;
      }
    return a = Dn(p, r, a, u), a.elementType = t, a.type = s, a.lanes = f, a;
  }
  function cr(t, a, r, s) {
    return t = Dn(7, t, s, a), t.lanes = r, t;
  }
  function qf(t, a, r) {
    return t = Dn(6, t, null, a), t.lanes = r, t;
  }
  function D0(t) {
    var a = Dn(18, null, null, 0);
    return a.stateNode = t, a;
  }
  function Yf(t, a, r) {
    return a = Dn(
      4,
      t.children !== null ? t.children : [],
      t.key,
      a
    ), a.lanes = r, a.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, a;
  }
  var M0 = /* @__PURE__ */ new WeakMap();
  function na(t, a) {
    if (typeof t == "object" && t !== null) {
      var r = M0.get(t);
      return r !== void 0 ? r : (a = {
        value: t,
        source: a,
        stack: Gl(a)
      }, M0.set(t, a), a);
    }
    return {
      value: t,
      source: a,
      stack: Gl(a)
    };
  }
  var ro = [], oo = 0, cc = null, Os = 0, aa = [], ia = 0, Ei = null, Ra = 1, za = "";
  function Pa(t, a) {
    ro[oo++] = Os, ro[oo++] = cc, cc = t, Os = a;
  }
  function U0(t, a, r) {
    aa[ia++] = Ra, aa[ia++] = za, aa[ia++] = Ei, Ei = t;
    var s = Ra;
    t = za;
    var u = 32 - pn(s) - 1;
    s &= ~(1 << u), r += 1;
    var f = 32 - pn(a) + u;
    if (30 < f) {
      var p = u - u % 5;
      f = (s & (1 << p) - 1).toString(32), s >>= p, u -= p, Ra = 1 << 32 - pn(a) + u | r << u | s, za = f + t;
    } else
      Ra = 1 << f | r << u | s, za = t;
  }
  function Kf(t) {
    t.return !== null && (Pa(t, 1), U0(t, 1, 0));
  }
  function Xf(t) {
    for (; t === cc; )
      cc = ro[--oo], ro[oo] = null, Os = ro[--oo], ro[oo] = null;
    for (; t === Ei; )
      Ei = aa[--ia], aa[ia] = null, za = aa[--ia], aa[ia] = null, Ra = aa[--ia], aa[ia] = null;
  }
  function j0(t, a) {
    aa[ia++] = Ra, aa[ia++] = za, aa[ia++] = Ei, Ra = a.id, za = a.overflow, Ei = t;
  }
  var on = null, ft = null, He = !1, Si = null, ra = !1, Qf = Error(o(519));
  function xi(t) {
    var a = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Rs(na(a, t)), Qf;
  }
  function H0(t) {
    var a = t.stateNode, r = t.type, s = t.memoizedProps;
    switch (a[rn] = t, a[wn] = s, r) {
      case "dialog":
        Me("cancel", a), Me("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        Me("load", a);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Ps.length; r++)
          Me(Ps[r], a);
        break;
      case "source":
        Me("error", a);
        break;
      case "img":
      case "image":
      case "link":
        Me("error", a), Me("load", a);
        break;
      case "details":
        Me("toggle", a);
        break;
      case "input":
        Me("invalid", a), Pp(
          a,
          s.value,
          s.defaultValue,
          s.checked,
          s.defaultChecked,
          s.type,
          s.name,
          !0
        );
        break;
      case "select":
        Me("invalid", a);
        break;
      case "textarea":
        Me("invalid", a), Wp(a, s.value, s.defaultValue, s.children);
    }
    r = s.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || a.textContent === "" + r || s.suppressHydrationWarning === !0 || t2(a.textContent, r) ? (s.popover != null && (Me("beforetoggle", a), Me("toggle", a)), s.onScroll != null && Me("scroll", a), s.onScrollEnd != null && Me("scrollend", a), s.onClick != null && (a.onclick = Xa), a = !0) : a = !1, a || xi(t, !0);
  }
  function V0(t) {
    for (on = t.return; on; )
      switch (on.tag) {
        case 5:
        case 31:
        case 13:
          ra = !1;
          return;
        case 27:
        case 3:
          ra = !0;
          return;
        default:
          on = on.return;
      }
  }
  function so(t) {
    if (t !== on) return !1;
    if (!He) return V0(t), He = !0, !1;
    var a = t.tag, r;
    if ((r = a !== 3 && a !== 27) && ((r = a === 5) && (r = t.type, r = !(r !== "form" && r !== "button") || hh(t.type, t.memoizedProps)), r = !r), r && ft && xi(t), V0(t), a === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      ft = u2(t);
    } else if (a === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      ft = u2(t);
    } else
      a === 27 ? (a = ft, Vi(t.type) ? (t = yh, yh = null, ft = t) : ft = a) : ft = on ? sa(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ur() {
    ft = on = null, He = !1;
  }
  function $f() {
    var t = Si;
    return t !== null && (Tn === null ? Tn = t : Tn.push.apply(
      Tn,
      t
    ), Si = null), t;
  }
  function Rs(t) {
    Si === null ? Si = [t] : Si.push(t);
  }
  var Pf = E(null), fr = null, Ja = null;
  function Ti(t, a, r) {
    K(Pf, a._currentValue), a._currentValue = r;
  }
  function Wa(t) {
    t._currentValue = Pf.current, j(Pf);
  }
  function Jf(t, a, r) {
    for (; t !== null; ) {
      var s = t.alternate;
      if ((t.childLanes & a) !== a ? (t.childLanes |= a, s !== null && (s.childLanes |= a)) : s !== null && (s.childLanes & a) !== a && (s.childLanes |= a), t === r) break;
      t = t.return;
    }
  }
  function Wf(t, a, r, s) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var p = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var v = f;
          f = u;
          for (var _ = 0; _ < a.length; _++)
            if (v.context === a[_]) {
              f.lanes |= r, v = f.alternate, v !== null && (v.lanes |= r), Jf(
                f.return,
                r,
                t
              ), s || (p = null);
              break e;
            }
          f = v.next;
        }
      } else if (u.tag === 18) {
        if (p = u.return, p === null) throw Error(o(341));
        p.lanes |= r, f = p.alternate, f !== null && (f.lanes |= r), Jf(p, r, t), p = null;
      } else p = u.child;
      if (p !== null) p.return = u;
      else
        for (p = u; p !== null; ) {
          if (p === t) {
            p = null;
            break;
          }
          if (u = p.sibling, u !== null) {
            u.return = p.return, p = u;
            break;
          }
          p = p.return;
        }
      u = p;
    }
  }
  function lo(t, a, r, s) {
    t = null;
    for (var u = a, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var p = u.alternate;
        if (p === null) throw Error(o(387));
        if (p = p.memoizedProps, p !== null) {
          var v = u.type;
          Cn(u.pendingProps.value, p.value) || (t !== null ? t.push(v) : t = [v]);
        }
      } else if (u === be.current) {
        if (p = u.alternate, p === null) throw Error(o(387));
        p.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(nl) : t = [nl]);
      }
      u = u.return;
    }
    t !== null && Wf(
      a,
      t,
      r,
      s
    ), a.flags |= 262144;
  }
  function uc(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Cn(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function dr(t) {
    fr = t, Ja = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function sn(t) {
    return G0(fr, t);
  }
  function fc(t, a) {
    return fr === null && dr(t), G0(t, a);
  }
  function G0(t, a) {
    var r = a._currentValue;
    if (a = { context: a, memoizedValue: r, next: null }, Ja === null) {
      if (t === null) throw Error(o(308));
      Ja = a, t.dependencies = { lanes: 0, firstContext: a }, t.flags |= 524288;
    } else Ja = Ja.next = a;
    return r;
  }
  var b6 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(r, s) {
        t.push(s);
      }
    };
    this.abort = function() {
      a.aborted = !0, t.forEach(function(r) {
        return r();
      });
    };
  }, _6 = e.unstable_scheduleCallback, w6 = e.unstable_NormalPriority, Nt = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ed() {
    return {
      controller: new b6(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function zs(t) {
    t.refCount--, t.refCount === 0 && _6(w6, function() {
      t.controller.abort();
    });
  }
  var Ns = null, td = 0, co = 0, uo = null;
  function A6(t, a) {
    if (Ns === null) {
      var r = Ns = [];
      td = 0, co = ih(), uo = {
        status: "pending",
        value: void 0,
        then: function(s) {
          r.push(s);
        }
      };
    }
    return td++, a.then(B0, B0), a;
  }
  function B0() {
    if (--td === 0 && Ns !== null) {
      uo !== null && (uo.status = "fulfilled");
      var t = Ns;
      Ns = null, co = 0, uo = null;
      for (var a = 0; a < t.length; a++) (0, t[a])();
    }
  }
  function E6(t, a) {
    var r = [], s = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        r.push(u);
      }
    };
    return t.then(
      function() {
        s.status = "fulfilled", s.value = a;
        for (var u = 0; u < r.length; u++) (0, r[u])(a);
      },
      function(u) {
        for (s.status = "rejected", s.reason = u, u = 0; u < r.length; u++)
          (0, r[u])(void 0);
      }
    ), s;
  }
  var F0 = R.S;
  R.S = function(t, a) {
    xm = $(), typeof a == "object" && a !== null && typeof a.then == "function" && A6(t, a), F0 !== null && F0(t, a);
  };
  var hr = E(null);
  function nd() {
    var t = hr.current;
    return t !== null ? t : st.pooledCache;
  }
  function dc(t, a) {
    a === null ? K(hr, hr.current) : K(hr, a.pool);
  }
  function Z0() {
    var t = nd();
    return t === null ? null : { parent: Nt._currentValue, pool: t };
  }
  var fo = Error(o(460)), ad = Error(o(474)), hc = Error(o(542)), pc = { then: function() {
  } };
  function I0(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function q0(t, a, r) {
    switch (r = t[r], r === void 0 ? t.push(a) : r !== a && (a.then(Xa, Xa), a = r), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw t = a.reason, K0(t), t;
      default:
        if (typeof a.status == "string") a.then(Xa, Xa);
        else {
          if (t = st, t !== null && 100 < t.shellSuspendCounter)
            throw Error(o(482));
          t = a, t.status = "pending", t.then(
            function(s) {
              if (a.status === "pending") {
                var u = a;
                u.status = "fulfilled", u.value = s;
              }
            },
            function(s) {
              if (a.status === "pending") {
                var u = a;
                u.status = "rejected", u.reason = s;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw t = a.reason, K0(t), t;
        }
        throw gr = a, fo;
    }
  }
  function pr(t) {
    try {
      var a = t._init;
      return a(t._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (gr = r, fo) : r;
    }
  }
  var gr = null;
  function Y0() {
    if (gr === null) throw Error(o(459));
    var t = gr;
    return gr = null, t;
  }
  function K0(t) {
    if (t === fo || t === hc)
      throw Error(o(483));
  }
  var ho = null, Ls = 0;
  function gc(t) {
    var a = Ls;
    return Ls += 1, ho === null && (ho = []), q0(ho, t, a);
  }
  function Cs(t, a) {
    a = a.props.ref, t.ref = a !== void 0 ? a : null;
  }
  function mc(t, a) {
    throw a.$$typeof === A ? Error(o(525)) : (t = Object.prototype.toString.call(a), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : t
      )
    ));
  }
  function X0(t) {
    function a(T, S) {
      if (t) {
        var k = T.deletions;
        k === null ? (T.deletions = [S], T.flags |= 16) : k.push(S);
      }
    }
    function r(T, S) {
      if (!t) return null;
      for (; S !== null; )
        a(T, S), S = S.sibling;
      return null;
    }
    function s(T) {
      for (var S = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? S.set(T.key, T) : S.set(T.index, T), T = T.sibling;
      return S;
    }
    function u(T, S) {
      return T = $a(T, S), T.index = 0, T.sibling = null, T;
    }
    function f(T, S, k) {
      return T.index = k, t ? (k = T.alternate, k !== null ? (k = k.index, k < S ? (T.flags |= 67108866, S) : k) : (T.flags |= 67108866, S)) : (T.flags |= 1048576, S);
    }
    function p(T) {
      return t && T.alternate === null && (T.flags |= 67108866), T;
    }
    function v(T, S, k, H) {
      return S === null || S.tag !== 6 ? (S = qf(k, T.mode, H), S.return = T, S) : (S = u(S, k), S.return = T, S);
    }
    function _(T, S, k, H) {
      var me = k.type;
      return me === F ? U(
        T,
        S,
        k.props.children,
        H,
        k.key
      ) : S !== null && (S.elementType === me || typeof me == "object" && me !== null && me.$$typeof === Q && pr(me) === S.type) ? (S = u(S, k.props), Cs(S, k), S.return = T, S) : (S = lc(
        k.type,
        k.key,
        k.props,
        null,
        T.mode,
        H
      ), Cs(S, k), S.return = T, S);
    }
    function O(T, S, k, H) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== k.containerInfo || S.stateNode.implementation !== k.implementation ? (S = Yf(k, T.mode, H), S.return = T, S) : (S = u(S, k.children || []), S.return = T, S);
    }
    function U(T, S, k, H, me) {
      return S === null || S.tag !== 7 ? (S = cr(
        k,
        T.mode,
        H,
        me
      ), S.return = T, S) : (S = u(S, k), S.return = T, S);
    }
    function G(T, S, k) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return S = qf(
          "" + S,
          T.mode,
          k
        ), S.return = T, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case x:
            return k = lc(
              S.type,
              S.key,
              S.props,
              null,
              T.mode,
              k
            ), Cs(k, S), k.return = T, k;
          case V:
            return S = Yf(
              S,
              T.mode,
              k
            ), S.return = T, S;
          case Q:
            return S = pr(S), G(T, S, k);
        }
        if (Te(S) || ue(S))
          return S = cr(
            S,
            T.mode,
            k,
            null
          ), S.return = T, S;
        if (typeof S.then == "function")
          return G(T, gc(S), k);
        if (S.$$typeof === W)
          return G(
            T,
            fc(T, S),
            k
          );
        mc(T, S);
      }
      return null;
    }
    function N(T, S, k, H) {
      var me = S !== null ? S.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return me !== null ? null : v(T, S, "" + k, H);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case x:
            return k.key === me ? _(T, S, k, H) : null;
          case V:
            return k.key === me ? O(T, S, k, H) : null;
          case Q:
            return k = pr(k), N(T, S, k, H);
        }
        if (Te(k) || ue(k))
          return me !== null ? null : U(T, S, k, H, null);
        if (typeof k.then == "function")
          return N(
            T,
            S,
            gc(k),
            H
          );
        if (k.$$typeof === W)
          return N(
            T,
            S,
            fc(T, k),
            H
          );
        mc(T, k);
      }
      return null;
    }
    function C(T, S, k, H, me) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return T = T.get(k) || null, v(S, T, "" + H, me);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case x:
            return T = T.get(
              H.key === null ? k : H.key
            ) || null, _(S, T, H, me);
          case V:
            return T = T.get(
              H.key === null ? k : H.key
            ) || null, O(S, T, H, me);
          case Q:
            return H = pr(H), C(
              T,
              S,
              k,
              H,
              me
            );
        }
        if (Te(H) || ue(H))
          return T = T.get(k) || null, U(S, T, H, me, null);
        if (typeof H.then == "function")
          return C(
            T,
            S,
            k,
            gc(H),
            me
          );
        if (H.$$typeof === W)
          return C(
            T,
            S,
            k,
            fc(S, H),
            me
          );
        mc(S, H);
      }
      return null;
    }
    function ie(T, S, k, H) {
      for (var me = null, Ie = null, fe = S, ze = S = 0, je = null; fe !== null && ze < k.length; ze++) {
        fe.index > ze ? (je = fe, fe = null) : je = fe.sibling;
        var qe = N(
          T,
          fe,
          k[ze],
          H
        );
        if (qe === null) {
          fe === null && (fe = je);
          break;
        }
        t && fe && qe.alternate === null && a(T, fe), S = f(qe, S, ze), Ie === null ? me = qe : Ie.sibling = qe, Ie = qe, fe = je;
      }
      if (ze === k.length)
        return r(T, fe), He && Pa(T, ze), me;
      if (fe === null) {
        for (; ze < k.length; ze++)
          fe = G(T, k[ze], H), fe !== null && (S = f(
            fe,
            S,
            ze
          ), Ie === null ? me = fe : Ie.sibling = fe, Ie = fe);
        return He && Pa(T, ze), me;
      }
      for (fe = s(fe); ze < k.length; ze++)
        je = C(
          fe,
          T,
          ze,
          k[ze],
          H
        ), je !== null && (t && je.alternate !== null && fe.delete(
          je.key === null ? ze : je.key
        ), S = f(
          je,
          S,
          ze
        ), Ie === null ? me = je : Ie.sibling = je, Ie = je);
      return t && fe.forEach(function(Ii) {
        return a(T, Ii);
      }), He && Pa(T, ze), me;
    }
    function we(T, S, k, H) {
      if (k == null) throw Error(o(151));
      for (var me = null, Ie = null, fe = S, ze = S = 0, je = null, qe = k.next(); fe !== null && !qe.done; ze++, qe = k.next()) {
        fe.index > ze ? (je = fe, fe = null) : je = fe.sibling;
        var Ii = N(T, fe, qe.value, H);
        if (Ii === null) {
          fe === null && (fe = je);
          break;
        }
        t && fe && Ii.alternate === null && a(T, fe), S = f(Ii, S, ze), Ie === null ? me = Ii : Ie.sibling = Ii, Ie = Ii, fe = je;
      }
      if (qe.done)
        return r(T, fe), He && Pa(T, ze), me;
      if (fe === null) {
        for (; !qe.done; ze++, qe = k.next())
          qe = G(T, qe.value, H), qe !== null && (S = f(qe, S, ze), Ie === null ? me = qe : Ie.sibling = qe, Ie = qe);
        return He && Pa(T, ze), me;
      }
      for (fe = s(fe); !qe.done; ze++, qe = k.next())
        qe = C(fe, T, ze, qe.value, H), qe !== null && (t && qe.alternate !== null && fe.delete(qe.key === null ? ze : qe.key), S = f(qe, S, ze), Ie === null ? me = qe : Ie.sibling = qe, Ie = qe);
      return t && fe.forEach(function(D5) {
        return a(T, D5);
      }), He && Pa(T, ze), me;
    }
    function rt(T, S, k, H) {
      if (typeof k == "object" && k !== null && k.type === F && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case x:
            e: {
              for (var me = k.key; S !== null; ) {
                if (S.key === me) {
                  if (me = k.type, me === F) {
                    if (S.tag === 7) {
                      r(
                        T,
                        S.sibling
                      ), H = u(
                        S,
                        k.props.children
                      ), H.return = T, T = H;
                      break e;
                    }
                  } else if (S.elementType === me || typeof me == "object" && me !== null && me.$$typeof === Q && pr(me) === S.type) {
                    r(
                      T,
                      S.sibling
                    ), H = u(S, k.props), Cs(H, k), H.return = T, T = H;
                    break e;
                  }
                  r(T, S);
                  break;
                } else a(T, S);
                S = S.sibling;
              }
              k.type === F ? (H = cr(
                k.props.children,
                T.mode,
                H,
                k.key
              ), H.return = T, T = H) : (H = lc(
                k.type,
                k.key,
                k.props,
                null,
                T.mode,
                H
              ), Cs(H, k), H.return = T, T = H);
            }
            return p(T);
          case V:
            e: {
              for (me = k.key; S !== null; ) {
                if (S.key === me)
                  if (S.tag === 4 && S.stateNode.containerInfo === k.containerInfo && S.stateNode.implementation === k.implementation) {
                    r(
                      T,
                      S.sibling
                    ), H = u(S, k.children || []), H.return = T, T = H;
                    break e;
                  } else {
                    r(T, S);
                    break;
                  }
                else a(T, S);
                S = S.sibling;
              }
              H = Yf(k, T.mode, H), H.return = T, T = H;
            }
            return p(T);
          case Q:
            return k = pr(k), rt(
              T,
              S,
              k,
              H
            );
        }
        if (Te(k))
          return ie(
            T,
            S,
            k,
            H
          );
        if (ue(k)) {
          if (me = ue(k), typeof me != "function") throw Error(o(150));
          return k = me.call(k), we(
            T,
            S,
            k,
            H
          );
        }
        if (typeof k.then == "function")
          return rt(
            T,
            S,
            gc(k),
            H
          );
        if (k.$$typeof === W)
          return rt(
            T,
            S,
            fc(T, k),
            H
          );
        mc(T, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, S !== null && S.tag === 6 ? (r(T, S.sibling), H = u(S, k), H.return = T, T = H) : (r(T, S), H = qf(k, T.mode, H), H.return = T, T = H), p(T)) : r(T, S);
    }
    return function(T, S, k, H) {
      try {
        Ls = 0;
        var me = rt(
          T,
          S,
          k,
          H
        );
        return ho = null, me;
      } catch (fe) {
        if (fe === fo || fe === hc) throw fe;
        var Ie = Dn(29, fe, null, T.mode);
        return Ie.lanes = H, Ie.return = T, Ie;
      }
    };
  }
  var mr = X0(!0), Q0 = X0(!1), ki = !1;
  function id(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function rd(t, a) {
    t = t.updateQueue, a.updateQueue === t && (a.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Oi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ri(t, a, r) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Qe & 2) !== 0) {
      var u = s.pending;
      return u === null ? a.next = a : (a.next = u.next, u.next = a), s.pending = a, a = sc(t), L0(t, null, r), a;
    }
    return oc(t, s, a, r), sc(t);
  }
  function Ds(t, a, r) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (r & 4194048) !== 0)) {
      var s = a.lanes;
      s &= t.pendingLanes, r |= s, a.lanes = r, Gp(t, r);
    }
  }
  function od(t, a) {
    var r = t.updateQueue, s = t.alternate;
    if (s !== null && (s = s.updateQueue, r === s)) {
      var u = null, f = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var p = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          f === null ? u = f = p : f = f.next = p, r = r.next;
        } while (r !== null);
        f === null ? u = f = a : f = f.next = a;
      } else u = f = a;
      r = {
        baseState: s.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: s.shared,
        callbacks: s.callbacks
      }, t.updateQueue = r;
      return;
    }
    t = r.lastBaseUpdate, t === null ? r.firstBaseUpdate = a : t.next = a, r.lastBaseUpdate = a;
  }
  var sd = !1;
  function Ms() {
    if (sd) {
      var t = uo;
      if (t !== null) throw t;
    }
  }
  function Us(t, a, r, s) {
    sd = !1;
    var u = t.updateQueue;
    ki = !1;
    var f = u.firstBaseUpdate, p = u.lastBaseUpdate, v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var _ = v, O = _.next;
      _.next = null, p === null ? f = O : p.next = O, p = _;
      var U = t.alternate;
      U !== null && (U = U.updateQueue, v = U.lastBaseUpdate, v !== p && (v === null ? U.firstBaseUpdate = O : v.next = O, U.lastBaseUpdate = _));
    }
    if (f !== null) {
      var G = u.baseState;
      p = 0, U = O = _ = null, v = f;
      do {
        var N = v.lane & -536870913, C = N !== v.lane;
        if (C ? (Ue & N) === N : (s & N) === N) {
          N !== 0 && N === co && (sd = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var ie = t, we = v;
            N = a;
            var rt = r;
            switch (we.tag) {
              case 1:
                if (ie = we.payload, typeof ie == "function") {
                  G = ie.call(rt, G, N);
                  break e;
                }
                G = ie;
                break e;
              case 3:
                ie.flags = ie.flags & -65537 | 128;
              case 0:
                if (ie = we.payload, N = typeof ie == "function" ? ie.call(rt, G, N) : ie, N == null) break e;
                G = b({}, G, N);
                break e;
              case 2:
                ki = !0;
            }
          }
          N = v.callback, N !== null && (t.flags |= 64, C && (t.flags |= 8192), C = u.callbacks, C === null ? u.callbacks = [N] : C.push(N));
        } else
          C = {
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, U === null ? (O = U = C, _ = G) : U = U.next = C, p |= N;
        if (v = v.next, v === null) {
          if (v = u.shared.pending, v === null)
            break;
          C = v, v = C.next, C.next = null, u.lastBaseUpdate = C, u.shared.pending = null;
        }
      } while (!0);
      U === null && (_ = G), u.baseState = _, u.firstBaseUpdate = O, u.lastBaseUpdate = U, f === null && (u.shared.lanes = 0), Di |= p, t.lanes = p, t.memoizedState = G;
    }
  }
  function $0(t, a) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(a);
  }
  function P0(t, a) {
    var r = t.callbacks;
    if (r !== null)
      for (t.callbacks = null, t = 0; t < r.length; t++)
        $0(r[t], a);
  }
  var po = E(null), vc = E(0);
  function J0(t, a) {
    t = li, K(vc, t), K(po, a), li = t | a.baseLanes;
  }
  function ld() {
    K(vc, li), K(po, po.current);
  }
  function cd() {
    li = vc.current, j(po), j(vc);
  }
  var Mn = E(null), oa = null;
  function zi(t) {
    var a = t.alternate;
    K(Tt, Tt.current & 1), K(Mn, t), oa === null && (a === null || po.current !== null || a.memoizedState !== null) && (oa = t);
  }
  function ud(t) {
    K(Tt, Tt.current), K(Mn, t), oa === null && (oa = t);
  }
  function W0(t) {
    t.tag === 22 ? (K(Tt, Tt.current), K(Mn, t), oa === null && (oa = t)) : Ni();
  }
  function Ni() {
    K(Tt, Tt.current), K(Mn, Mn.current);
  }
  function Un(t) {
    j(Mn), oa === t && (oa = null), j(Tt);
  }
  var Tt = E(0);
  function yc(t) {
    for (var a = t; a !== null; ) {
      if (a.tag === 13) {
        var r = a.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || mh(r) || vh(r)))
          return a;
      } else if (a.tag === 19 && (a.memoizedProps.revealOrder === "forwards" || a.memoizedProps.revealOrder === "backwards" || a.memoizedProps.revealOrder === "unstable_legacy-backwards" || a.memoizedProps.revealOrder === "together")) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === t) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === t) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var ei = 0, Re = null, at = null, Lt = null, bc = !1, go = !1, vr = !1, _c = 0, js = 0, mo = null, S6 = 0;
  function At() {
    throw Error(o(321));
  }
  function fd(t, a) {
    if (a === null) return !1;
    for (var r = 0; r < a.length && r < t.length; r++)
      if (!Cn(t[r], a[r])) return !1;
    return !0;
  }
  function dd(t, a, r, s, u, f) {
    return ei = f, Re = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, R.H = t === null || t.memoizedState === null ? Ug : kd, vr = !1, f = r(s, u), vr = !1, go && (f = tg(
      a,
      r,
      s,
      u
    )), eg(t), f;
  }
  function eg(t) {
    R.H = Gs;
    var a = at !== null && at.next !== null;
    if (ei = 0, Lt = at = Re = null, bc = !1, js = 0, mo = null, a) throw Error(o(300));
    t === null || Ct || (t = t.dependencies, t !== null && uc(t) && (Ct = !0));
  }
  function tg(t, a, r, s) {
    Re = t;
    var u = 0;
    do {
      if (go && (mo = null), js = 0, go = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Lt = at = null, t.updateQueue != null) {
        var f = t.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      R.H = jg, f = a(r, s);
    } while (go);
    return f;
  }
  function x6() {
    var t = R.H, a = t.useState()[0];
    return a = typeof a.then == "function" ? Hs(a) : a, t = t.useState()[0], (at !== null ? at.memoizedState : null) !== t && (Re.flags |= 1024), a;
  }
  function hd() {
    var t = _c !== 0;
    return _c = 0, t;
  }
  function pd(t, a, r) {
    a.updateQueue = t.updateQueue, a.flags &= -2053, t.lanes &= ~r;
  }
  function gd(t) {
    if (bc) {
      for (t = t.memoizedState; t !== null; ) {
        var a = t.queue;
        a !== null && (a.pending = null), t = t.next;
      }
      bc = !1;
    }
    ei = 0, Lt = at = Re = null, go = !1, js = _c = 0, mo = null;
  }
  function gn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Lt === null ? Re.memoizedState = Lt = t : Lt = Lt.next = t, Lt;
  }
  function kt() {
    if (at === null) {
      var t = Re.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = at.next;
    var a = Lt === null ? Re.memoizedState : Lt.next;
    if (a !== null)
      Lt = a, at = t;
    else {
      if (t === null)
        throw Re.alternate === null ? Error(o(467)) : Error(o(310));
      at = t, t = {
        memoizedState: at.memoizedState,
        baseState: at.baseState,
        baseQueue: at.baseQueue,
        queue: at.queue,
        next: null
      }, Lt === null ? Re.memoizedState = Lt = t : Lt = Lt.next = t;
    }
    return Lt;
  }
  function wc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Hs(t) {
    var a = js;
    return js += 1, mo === null && (mo = []), t = q0(mo, t, a), a = Re, (Lt === null ? a.memoizedState : Lt.next) === null && (a = a.alternate, R.H = a === null || a.memoizedState === null ? Ug : kd), t;
  }
  function Ac(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Hs(t);
      if (t.$$typeof === W) return sn(t);
    }
    throw Error(o(438, String(t)));
  }
  function md(t) {
    var a = null, r = Re.updateQueue;
    if (r !== null && (a = r.memoCache), a == null) {
      var s = Re.alternate;
      s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (a = {
        data: s.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), r === null && (r = wc(), Re.updateQueue = r), r.memoCache = a, r = a.data[a.index], r === void 0)
      for (r = a.data[a.index] = Array(t), s = 0; s < t; s++)
        r[s] = nt;
    return a.index++, r;
  }
  function ti(t, a) {
    return typeof a == "function" ? a(t) : a;
  }
  function Ec(t) {
    var a = kt();
    return vd(a, at, t);
  }
  function vd(t, a, r) {
    var s = t.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = r;
    var u = t.baseQueue, f = s.pending;
    if (f !== null) {
      if (u !== null) {
        var p = u.next;
        u.next = f.next, f.next = p;
      }
      a.baseQueue = u = f, s.pending = null;
    }
    if (f = t.baseState, u === null) t.memoizedState = f;
    else {
      a = u.next;
      var v = p = null, _ = null, O = a, U = !1;
      do {
        var G = O.lane & -536870913;
        if (G !== O.lane ? (Ue & G) === G : (ei & G) === G) {
          var N = O.revertLane;
          if (N === 0)
            _ !== null && (_ = _.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), G === co && (U = !0);
          else if ((ei & N) === N) {
            O = O.next, N === co && (U = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, _ === null ? (v = _ = G, p = f) : _ = _.next = G, Re.lanes |= N, Di |= N;
          G = O.action, vr && r(f, G), f = O.hasEagerState ? O.eagerState : r(f, G);
        } else
          N = {
            lane: G,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, _ === null ? (v = _ = N, p = f) : _ = _.next = N, Re.lanes |= G, Di |= G;
        O = O.next;
      } while (O !== null && O !== a);
      if (_ === null ? p = f : _.next = v, !Cn(f, t.memoizedState) && (Ct = !0, U && (r = uo, r !== null)))
        throw r;
      t.memoizedState = f, t.baseState = p, t.baseQueue = _, s.lastRenderedState = f;
    }
    return u === null && (s.lanes = 0), [t.memoizedState, s.dispatch];
  }
  function yd(t) {
    var a = kt(), r = a.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = t;
    var s = r.dispatch, u = r.pending, f = a.memoizedState;
    if (u !== null) {
      r.pending = null;
      var p = u = u.next;
      do
        f = t(f, p.action), p = p.next;
      while (p !== u);
      Cn(f, a.memoizedState) || (Ct = !0), a.memoizedState = f, a.baseQueue === null && (a.baseState = f), r.lastRenderedState = f;
    }
    return [f, s];
  }
  function ng(t, a, r) {
    var s = Re, u = kt(), f = He;
    if (f) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = a();
    var p = !Cn(
      (at || u).memoizedState,
      r
    );
    if (p && (u.memoizedState = r, Ct = !0), u = u.queue, wd(rg.bind(null, s, u, t), [
      t
    ]), u.getSnapshot !== a || p || Lt !== null && Lt.memoizedState.tag & 1) {
      if (s.flags |= 2048, vo(
        9,
        { destroy: void 0 },
        ig.bind(
          null,
          s,
          u,
          r,
          a
        ),
        null
      ), st === null) throw Error(o(349));
      f || (ei & 127) !== 0 || ag(s, a, r);
    }
    return r;
  }
  function ag(t, a, r) {
    t.flags |= 16384, t = { getSnapshot: a, value: r }, a = Re.updateQueue, a === null ? (a = wc(), Re.updateQueue = a, a.stores = [t]) : (r = a.stores, r === null ? a.stores = [t] : r.push(t));
  }
  function ig(t, a, r, s) {
    a.value = r, a.getSnapshot = s, og(a) && sg(t);
  }
  function rg(t, a, r) {
    return r(function() {
      og(a) && sg(t);
    });
  }
  function og(t) {
    var a = t.getSnapshot;
    t = t.value;
    try {
      var r = a();
      return !Cn(t, r);
    } catch {
      return !0;
    }
  }
  function sg(t) {
    var a = lr(t, 2);
    a !== null && kn(a, t, 2);
  }
  function bd(t) {
    var a = gn();
    if (typeof t == "function") {
      var r = t;
      if (t = r(), vr) {
        Jn(!0);
        try {
          r();
        } finally {
          Jn(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = t, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ti,
      lastRenderedState: t
    }, a;
  }
  function lg(t, a, r, s) {
    return t.baseState = r, vd(
      t,
      at,
      typeof s == "function" ? s : ti
    );
  }
  function T6(t, a, r, s, u) {
    if (Tc(t)) throw Error(o(485));
    if (t = a.action, t !== null) {
      var f = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(p) {
          f.listeners.push(p);
        }
      };
      R.T !== null ? r(!0) : f.isTransition = !1, s(f), r = a.pending, r === null ? (f.next = a.pending = f, cg(a, f)) : (f.next = r.next, a.pending = r.next = f);
    }
  }
  function cg(t, a) {
    var r = a.action, s = a.payload, u = t.state;
    if (a.isTransition) {
      var f = R.T, p = {};
      R.T = p;
      try {
        var v = r(u, s), _ = R.S;
        _ !== null && _(p, v), ug(t, a, v);
      } catch (O) {
        _d(t, a, O);
      } finally {
        f !== null && p.types !== null && (f.types = p.types), R.T = f;
      }
    } else
      try {
        f = r(u, s), ug(t, a, f);
      } catch (O) {
        _d(t, a, O);
      }
  }
  function ug(t, a, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(s) {
        fg(t, a, s);
      },
      function(s) {
        return _d(t, a, s);
      }
    ) : fg(t, a, r);
  }
  function fg(t, a, r) {
    a.status = "fulfilled", a.value = r, dg(a), t.state = r, a = t.pending, a !== null && (r = a.next, r === a ? t.pending = null : (r = r.next, a.next = r, cg(t, r)));
  }
  function _d(t, a, r) {
    var s = t.pending;
    if (t.pending = null, s !== null) {
      s = s.next;
      do
        a.status = "rejected", a.reason = r, dg(a), a = a.next;
      while (a !== s);
    }
    t.action = null;
  }
  function dg(t) {
    t = t.listeners;
    for (var a = 0; a < t.length; a++) (0, t[a])();
  }
  function hg(t, a) {
    return a;
  }
  function pg(t, a) {
    if (He) {
      var r = st.formState;
      if (r !== null) {
        e: {
          var s = Re;
          if (He) {
            if (ft) {
              t: {
                for (var u = ft, f = ra; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (u = sa(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                f = u.data, u = f === "F!" || f === "F" ? u : null;
              }
              if (u) {
                ft = sa(
                  u.nextSibling
                ), s = u.data === "F!";
                break e;
              }
            }
            xi(s);
          }
          s = !1;
        }
        s && (a = r[0]);
      }
    }
    return r = gn(), r.memoizedState = r.baseState = a, s = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hg,
      lastRenderedState: a
    }, r.queue = s, r = Cg.bind(
      null,
      Re,
      s
    ), s.dispatch = r, s = bd(!1), f = Td.bind(
      null,
      Re,
      !1,
      s.queue
    ), s = gn(), u = {
      state: a,
      dispatch: null,
      action: t,
      pending: null
    }, s.queue = u, r = T6.bind(
      null,
      Re,
      u,
      f,
      r
    ), u.dispatch = r, s.memoizedState = t, [a, r, !1];
  }
  function gg(t) {
    var a = kt();
    return mg(a, at, t);
  }
  function mg(t, a, r) {
    if (a = vd(
      t,
      a,
      hg
    )[0], t = Ec(ti)[0], typeof a == "object" && a !== null && typeof a.then == "function")
      try {
        var s = Hs(a);
      } catch (p) {
        throw p === fo ? hc : p;
      }
    else s = a;
    a = kt();
    var u = a.queue, f = u.dispatch;
    return r !== a.memoizedState && (Re.flags |= 2048, vo(
      9,
      { destroy: void 0 },
      k6.bind(null, u, r),
      null
    )), [s, f, t];
  }
  function k6(t, a) {
    t.action = a;
  }
  function vg(t) {
    var a = kt(), r = at;
    if (r !== null)
      return mg(a, r, t);
    kt(), a = a.memoizedState, r = kt();
    var s = r.queue.dispatch;
    return r.memoizedState = t, [a, s, !1];
  }
  function vo(t, a, r, s) {
    return t = { tag: t, create: r, deps: s, inst: a, next: null }, a = Re.updateQueue, a === null && (a = wc(), Re.updateQueue = a), r = a.lastEffect, r === null ? a.lastEffect = t.next = t : (s = r.next, r.next = t, t.next = s, a.lastEffect = t), t;
  }
  function yg() {
    return kt().memoizedState;
  }
  function Sc(t, a, r, s) {
    var u = gn();
    Re.flags |= t, u.memoizedState = vo(
      1 | a,
      { destroy: void 0 },
      r,
      s === void 0 ? null : s
    );
  }
  function xc(t, a, r, s) {
    var u = kt();
    s = s === void 0 ? null : s;
    var f = u.memoizedState.inst;
    at !== null && s !== null && fd(s, at.memoizedState.deps) ? u.memoizedState = vo(a, f, r, s) : (Re.flags |= t, u.memoizedState = vo(
      1 | a,
      f,
      r,
      s
    ));
  }
  function bg(t, a) {
    Sc(8390656, 8, t, a);
  }
  function wd(t, a) {
    xc(2048, 8, t, a);
  }
  function O6(t) {
    Re.flags |= 4;
    var a = Re.updateQueue;
    if (a === null)
      a = wc(), Re.updateQueue = a, a.events = [t];
    else {
      var r = a.events;
      r === null ? a.events = [t] : r.push(t);
    }
  }
  function _g(t) {
    var a = kt().memoizedState;
    return O6({ ref: a, nextImpl: t }), function() {
      if ((Qe & 2) !== 0) throw Error(o(440));
      return a.impl.apply(void 0, arguments);
    };
  }
  function wg(t, a) {
    return xc(4, 2, t, a);
  }
  function Ag(t, a) {
    return xc(4, 4, t, a);
  }
  function Eg(t, a) {
    if (typeof a == "function") {
      t = t();
      var r = a(t);
      return function() {
        typeof r == "function" ? r() : a(null);
      };
    }
    if (a != null)
      return t = t(), a.current = t, function() {
        a.current = null;
      };
  }
  function Sg(t, a, r) {
    r = r != null ? r.concat([t]) : null, xc(4, 4, Eg.bind(null, a, t), r);
  }
  function Ad() {
  }
  function xg(t, a) {
    var r = kt();
    a = a === void 0 ? null : a;
    var s = r.memoizedState;
    return a !== null && fd(a, s[1]) ? s[0] : (r.memoizedState = [t, a], t);
  }
  function Tg(t, a) {
    var r = kt();
    a = a === void 0 ? null : a;
    var s = r.memoizedState;
    if (a !== null && fd(a, s[1]))
      return s[0];
    if (s = t(), vr) {
      Jn(!0);
      try {
        t();
      } finally {
        Jn(!1);
      }
    }
    return r.memoizedState = [s, a], s;
  }
  function Ed(t, a, r) {
    return r === void 0 || (ei & 1073741824) !== 0 && (Ue & 261930) === 0 ? t.memoizedState = a : (t.memoizedState = r, t = km(), Re.lanes |= t, Di |= t, r);
  }
  function kg(t, a, r, s) {
    return Cn(r, a) ? r : po.current !== null ? (t = Ed(t, r, s), Cn(t, a) || (Ct = !0), t) : (ei & 42) === 0 || (ei & 1073741824) !== 0 && (Ue & 261930) === 0 ? (Ct = !0, t.memoizedState = r) : (t = km(), Re.lanes |= t, Di |= t, a);
  }
  function Og(t, a, r, s, u) {
    var f = Y.p;
    Y.p = f !== 0 && 8 > f ? f : 8;
    var p = R.T, v = {};
    R.T = v, Td(t, !1, a, r);
    try {
      var _ = u(), O = R.S;
      if (O !== null && O(v, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
        var U = E6(
          _,
          s
        );
        Vs(
          t,
          a,
          U,
          Vn(t)
        );
      } else
        Vs(
          t,
          a,
          s,
          Vn(t)
        );
    } catch (G) {
      Vs(
        t,
        a,
        { then: function() {
        }, status: "rejected", reason: G },
        Vn()
      );
    } finally {
      Y.p = f, p !== null && v.types !== null && (p.types = v.types), R.T = p;
    }
  }
  function R6() {
  }
  function Sd(t, a, r, s) {
    if (t.tag !== 5) throw Error(o(476));
    var u = Rg(t).queue;
    Og(
      t,
      u,
      a,
      Z,
      r === null ? R6 : function() {
        return zg(t), r(s);
      }
    );
  }
  function Rg(t) {
    var a = t.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ti,
        lastRenderedState: Z
      },
      next: null
    };
    var r = {};
    return a.next = {
      memoizedState: r,
      baseState: r,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ti,
        lastRenderedState: r
      },
      next: null
    }, t.memoizedState = a, t = t.alternate, t !== null && (t.memoizedState = a), a;
  }
  function zg(t) {
    var a = Rg(t);
    a.next === null && (a = t.alternate.memoizedState), Vs(
      t,
      a.next.queue,
      {},
      Vn()
    );
  }
  function xd() {
    return sn(nl);
  }
  function Ng() {
    return kt().memoizedState;
  }
  function Lg() {
    return kt().memoizedState;
  }
  function z6(t) {
    for (var a = t.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var r = Vn();
          t = Oi(r);
          var s = Ri(a, t, r);
          s !== null && (kn(s, a, r), Ds(s, a, r)), a = { cache: ed() }, t.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function N6(t, a, r) {
    var s = Vn();
    r = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tc(t) ? Dg(a, r) : (r = Zf(t, a, r, s), r !== null && (kn(r, t, s), Mg(r, a, s)));
  }
  function Cg(t, a, r) {
    var s = Vn();
    Vs(t, a, r, s);
  }
  function Vs(t, a, r, s) {
    var u = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Tc(t)) Dg(a, u);
    else {
      var f = t.alternate;
      if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = a.lastRenderedReducer, f !== null))
        try {
          var p = a.lastRenderedState, v = f(p, r);
          if (u.hasEagerState = !0, u.eagerState = v, Cn(v, p))
            return oc(t, a, u, 0), st === null && rc(), !1;
        } catch {
        }
      if (r = Zf(t, a, u, s), r !== null)
        return kn(r, t, s), Mg(r, a, s), !0;
    }
    return !1;
  }
  function Td(t, a, r, s) {
    if (s = {
      lane: 2,
      revertLane: ih(),
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tc(t)) {
      if (a) throw Error(o(479));
    } else
      a = Zf(
        t,
        r,
        s,
        2
      ), a !== null && kn(a, t, 2);
  }
  function Tc(t) {
    var a = t.alternate;
    return t === Re || a !== null && a === Re;
  }
  function Dg(t, a) {
    go = bc = !0;
    var r = t.pending;
    r === null ? a.next = a : (a.next = r.next, r.next = a), t.pending = a;
  }
  function Mg(t, a, r) {
    if ((r & 4194048) !== 0) {
      var s = a.lanes;
      s &= t.pendingLanes, r |= s, a.lanes = r, Gp(t, r);
    }
  }
  var Gs = {
    readContext: sn,
    use: Ac,
    useCallback: At,
    useContext: At,
    useEffect: At,
    useImperativeHandle: At,
    useLayoutEffect: At,
    useInsertionEffect: At,
    useMemo: At,
    useReducer: At,
    useRef: At,
    useState: At,
    useDebugValue: At,
    useDeferredValue: At,
    useTransition: At,
    useSyncExternalStore: At,
    useId: At,
    useHostTransitionStatus: At,
    useFormState: At,
    useActionState: At,
    useOptimistic: At,
    useMemoCache: At,
    useCacheRefresh: At
  };
  Gs.useEffectEvent = At;
  var Ug = {
    readContext: sn,
    use: Ac,
    useCallback: function(t, a) {
      return gn().memoizedState = [
        t,
        a === void 0 ? null : a
      ], t;
    },
    useContext: sn,
    useEffect: bg,
    useImperativeHandle: function(t, a, r) {
      r = r != null ? r.concat([t]) : null, Sc(
        4194308,
        4,
        Eg.bind(null, a, t),
        r
      );
    },
    useLayoutEffect: function(t, a) {
      return Sc(4194308, 4, t, a);
    },
    useInsertionEffect: function(t, a) {
      Sc(4, 2, t, a);
    },
    useMemo: function(t, a) {
      var r = gn();
      a = a === void 0 ? null : a;
      var s = t();
      if (vr) {
        Jn(!0);
        try {
          t();
        } finally {
          Jn(!1);
        }
      }
      return r.memoizedState = [s, a], s;
    },
    useReducer: function(t, a, r) {
      var s = gn();
      if (r !== void 0) {
        var u = r(a);
        if (vr) {
          Jn(!0);
          try {
            r(a);
          } finally {
            Jn(!1);
          }
        }
      } else u = a;
      return s.memoizedState = s.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, s.queue = t, t = t.dispatch = N6.bind(
        null,
        Re,
        t
      ), [s.memoizedState, t];
    },
    useRef: function(t) {
      var a = gn();
      return t = { current: t }, a.memoizedState = t;
    },
    useState: function(t) {
      t = bd(t);
      var a = t.queue, r = Cg.bind(null, Re, a);
      return a.dispatch = r, [t.memoizedState, r];
    },
    useDebugValue: Ad,
    useDeferredValue: function(t, a) {
      var r = gn();
      return Ed(r, t, a);
    },
    useTransition: function() {
      var t = bd(!1);
      return t = Og.bind(
        null,
        Re,
        t.queue,
        !0,
        !1
      ), gn().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, a, r) {
      var s = Re, u = gn();
      if (He) {
        if (r === void 0)
          throw Error(o(407));
        r = r();
      } else {
        if (r = a(), st === null)
          throw Error(o(349));
        (Ue & 127) !== 0 || ag(s, a, r);
      }
      u.memoizedState = r;
      var f = { value: r, getSnapshot: a };
      return u.queue = f, bg(rg.bind(null, s, f, t), [
        t
      ]), s.flags |= 2048, vo(
        9,
        { destroy: void 0 },
        ig.bind(
          null,
          s,
          f,
          r,
          a
        ),
        null
      ), r;
    },
    useId: function() {
      var t = gn(), a = st.identifierPrefix;
      if (He) {
        var r = za, s = Ra;
        r = (s & ~(1 << 32 - pn(s) - 1)).toString(32) + r, a = "_" + a + "R_" + r, r = _c++, 0 < r && (a += "H" + r.toString(32)), a += "_";
      } else
        r = S6++, a = "_" + a + "r_" + r.toString(32) + "_";
      return t.memoizedState = a;
    },
    useHostTransitionStatus: xd,
    useFormState: pg,
    useActionState: pg,
    useOptimistic: function(t) {
      var a = gn();
      a.memoizedState = a.baseState = t;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return a.queue = r, a = Td.bind(
        null,
        Re,
        !0,
        r
      ), r.dispatch = a, [t, a];
    },
    useMemoCache: md,
    useCacheRefresh: function() {
      return gn().memoizedState = z6.bind(
        null,
        Re
      );
    },
    useEffectEvent: function(t) {
      var a = gn(), r = { impl: t };
      return a.memoizedState = r, function() {
        if ((Qe & 2) !== 0)
          throw Error(o(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, kd = {
    readContext: sn,
    use: Ac,
    useCallback: xg,
    useContext: sn,
    useEffect: wd,
    useImperativeHandle: Sg,
    useInsertionEffect: wg,
    useLayoutEffect: Ag,
    useMemo: Tg,
    useReducer: Ec,
    useRef: yg,
    useState: function() {
      return Ec(ti);
    },
    useDebugValue: Ad,
    useDeferredValue: function(t, a) {
      var r = kt();
      return kg(
        r,
        at.memoizedState,
        t,
        a
      );
    },
    useTransition: function() {
      var t = Ec(ti)[0], a = kt().memoizedState;
      return [
        typeof t == "boolean" ? t : Hs(t),
        a
      ];
    },
    useSyncExternalStore: ng,
    useId: Ng,
    useHostTransitionStatus: xd,
    useFormState: gg,
    useActionState: gg,
    useOptimistic: function(t, a) {
      var r = kt();
      return lg(r, at, t, a);
    },
    useMemoCache: md,
    useCacheRefresh: Lg
  };
  kd.useEffectEvent = _g;
  var jg = {
    readContext: sn,
    use: Ac,
    useCallback: xg,
    useContext: sn,
    useEffect: wd,
    useImperativeHandle: Sg,
    useInsertionEffect: wg,
    useLayoutEffect: Ag,
    useMemo: Tg,
    useReducer: yd,
    useRef: yg,
    useState: function() {
      return yd(ti);
    },
    useDebugValue: Ad,
    useDeferredValue: function(t, a) {
      var r = kt();
      return at === null ? Ed(r, t, a) : kg(
        r,
        at.memoizedState,
        t,
        a
      );
    },
    useTransition: function() {
      var t = yd(ti)[0], a = kt().memoizedState;
      return [
        typeof t == "boolean" ? t : Hs(t),
        a
      ];
    },
    useSyncExternalStore: ng,
    useId: Ng,
    useHostTransitionStatus: xd,
    useFormState: vg,
    useActionState: vg,
    useOptimistic: function(t, a) {
      var r = kt();
      return at !== null ? lg(r, at, t, a) : (r.baseState = t, [t, r.queue.dispatch]);
    },
    useMemoCache: md,
    useCacheRefresh: Lg
  };
  jg.useEffectEvent = _g;
  function Od(t, a, r, s) {
    a = t.memoizedState, r = r(s, a), r = r == null ? a : b({}, a, r), t.memoizedState = r, t.lanes === 0 && (t.updateQueue.baseState = r);
  }
  var Rd = {
    enqueueSetState: function(t, a, r) {
      t = t._reactInternals;
      var s = Vn(), u = Oi(s);
      u.payload = a, r != null && (u.callback = r), a = Ri(t, u, s), a !== null && (kn(a, t, s), Ds(a, t, s));
    },
    enqueueReplaceState: function(t, a, r) {
      t = t._reactInternals;
      var s = Vn(), u = Oi(s);
      u.tag = 1, u.payload = a, r != null && (u.callback = r), a = Ri(t, u, s), a !== null && (kn(a, t, s), Ds(a, t, s));
    },
    enqueueForceUpdate: function(t, a) {
      t = t._reactInternals;
      var r = Vn(), s = Oi(r);
      s.tag = 2, a != null && (s.callback = a), a = Ri(t, s, r), a !== null && (kn(a, t, r), Ds(a, t, r));
    }
  };
  function Hg(t, a, r, s, u, f, p) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(s, f, p) : a.prototype && a.prototype.isPureReactComponent ? !Ts(r, s) || !Ts(u, f) : !0;
  }
  function Vg(t, a, r, s) {
    t = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(r, s), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(r, s), a.state !== t && Rd.enqueueReplaceState(a, a.state, null);
  }
  function yr(t, a) {
    var r = a;
    if ("ref" in a) {
      r = {};
      for (var s in a)
        s !== "ref" && (r[s] = a[s]);
    }
    if (t = t.defaultProps) {
      r === a && (r = b({}, r));
      for (var u in t)
        r[u] === void 0 && (r[u] = t[u]);
    }
    return r;
  }
  function Gg(t) {
    ic(t);
  }
  function Bg(t) {
    console.error(t);
  }
  function Fg(t) {
    ic(t);
  }
  function kc(t, a) {
    try {
      var r = t.onUncaughtError;
      r(a.value, { componentStack: a.stack });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Zg(t, a, r) {
    try {
      var s = t.onCaughtError;
      s(r.value, {
        componentStack: r.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function zd(t, a, r) {
    return r = Oi(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      kc(t, a);
    }, r;
  }
  function Ig(t) {
    return t = Oi(t), t.tag = 3, t;
  }
  function qg(t, a, r, s) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = s.value;
      t.payload = function() {
        return u(f);
      }, t.callback = function() {
        Zg(a, r, s);
      };
    }
    var p = r.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (t.callback = function() {
      Zg(a, r, s), typeof u != "function" && (Mi === null ? Mi = /* @__PURE__ */ new Set([this]) : Mi.add(this));
      var v = s.stack;
      this.componentDidCatch(s.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function L6(t, a, r, s, u) {
    if (r.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
      if (a = r.alternate, a !== null && lo(
        a,
        r,
        u,
        !0
      ), r = Mn.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
            return oa === null ? Vc() : r.alternate === null && Et === 0 && (Et = 3), r.flags &= -257, r.flags |= 65536, r.lanes = u, s === pc ? r.flags |= 16384 : (a = r.updateQueue, a === null ? r.updateQueue = /* @__PURE__ */ new Set([s]) : a.add(s), th(t, s, u)), !1;
          case 22:
            return r.flags |= 65536, s === pc ? r.flags |= 16384 : (a = r.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([s])
            }, r.updateQueue = a) : (r = a.retryQueue, r === null ? a.retryQueue = /* @__PURE__ */ new Set([s]) : r.add(s)), th(t, s, u)), !1;
        }
        throw Error(o(435, r.tag));
      }
      return th(t, s, u), Vc(), !1;
    }
    if (He)
      return a = Mn.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = u, s !== Qf && (t = Error(o(422), { cause: s }), Rs(na(t, r)))) : (s !== Qf && (a = Error(o(423), {
        cause: s
      }), Rs(
        na(a, r)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, s = na(s, r), u = zd(
        t.stateNode,
        s,
        u
      ), od(t, u), Et !== 4 && (Et = 2)), !1;
    var f = Error(o(520), { cause: s });
    if (f = na(f, r), Xs === null ? Xs = [f] : Xs.push(f), Et !== 4 && (Et = 2), a === null) return !0;
    s = na(s, r), r = a;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, t = u & -u, r.lanes |= t, t = zd(r.stateNode, s, t), od(r, t), !1;
        case 1:
          if (a = r.type, f = r.stateNode, (r.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Mi === null || !Mi.has(f))))
            return r.flags |= 65536, u &= -u, r.lanes |= u, u = Ig(u), qg(
              u,
              t,
              r,
              s
            ), od(r, u), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Nd = Error(o(461)), Ct = !1;
  function ln(t, a, r, s) {
    a.child = t === null ? Q0(a, null, r, s) : mr(
      a,
      t.child,
      r,
      s
    );
  }
  function Yg(t, a, r, s, u) {
    r = r.render;
    var f = a.ref;
    if ("ref" in s) {
      var p = {};
      for (var v in s)
        v !== "ref" && (p[v] = s[v]);
    } else p = s;
    return dr(a), s = dd(
      t,
      a,
      r,
      p,
      f,
      u
    ), v = hd(), t !== null && !Ct ? (pd(t, a, u), ni(t, a, u)) : (He && v && Kf(a), a.flags |= 1, ln(t, a, s, u), a.child);
  }
  function Kg(t, a, r, s, u) {
    if (t === null) {
      var f = r.type;
      return typeof f == "function" && !If(f) && f.defaultProps === void 0 && r.compare === null ? (a.tag = 15, a.type = f, Xg(
        t,
        a,
        f,
        s,
        u
      )) : (t = lc(
        r.type,
        null,
        s,
        a,
        a.mode,
        u
      ), t.ref = a.ref, t.return = a, a.child = t);
    }
    if (f = t.child, !Vd(t, u)) {
      var p = f.memoizedProps;
      if (r = r.compare, r = r !== null ? r : Ts, r(p, s) && t.ref === a.ref)
        return ni(t, a, u);
    }
    return a.flags |= 1, t = $a(f, s), t.ref = a.ref, t.return = a, a.child = t;
  }
  function Xg(t, a, r, s, u) {
    if (t !== null) {
      var f = t.memoizedProps;
      if (Ts(f, s) && t.ref === a.ref)
        if (Ct = !1, a.pendingProps = s = f, Vd(t, u))
          (t.flags & 131072) !== 0 && (Ct = !0);
        else
          return a.lanes = t.lanes, ni(t, a, u);
    }
    return Ld(
      t,
      a,
      r,
      s,
      u
    );
  }
  function Qg(t, a, r, s) {
    var u = s.children, f = t !== null ? t.memoizedState : null;
    if (t === null && a.stateNode === null && (a.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), s.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | r : r, t !== null) {
          for (s = a.child = t.child, u = 0; s !== null; )
            u = u | s.lanes | s.childLanes, s = s.sibling;
          s = u & ~f;
        } else s = 0, a.child = null;
        return $g(
          t,
          a,
          f,
          r,
          s
        );
      }
      if ((r & 536870912) !== 0)
        a.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && dc(
          a,
          f !== null ? f.cachePool : null
        ), f !== null ? J0(a, f) : ld(), W0(a);
      else
        return s = a.lanes = 536870912, $g(
          t,
          a,
          f !== null ? f.baseLanes | r : r,
          r,
          s
        );
    } else
      f !== null ? (dc(a, f.cachePool), J0(a, f), Ni(), a.memoizedState = null) : (t !== null && dc(a, null), ld(), Ni());
    return ln(t, a, u, r), a.child;
  }
  function Bs(t, a) {
    return t !== null && t.tag === 22 || a.stateNode !== null || (a.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.sibling;
  }
  function $g(t, a, r, s, u) {
    var f = nd();
    return f = f === null ? null : { parent: Nt._currentValue, pool: f }, a.memoizedState = {
      baseLanes: r,
      cachePool: f
    }, t !== null && dc(a, null), ld(), W0(a), t !== null && lo(t, a, s, !0), a.childLanes = u, null;
  }
  function Oc(t, a) {
    return a = zc(
      { mode: a.mode, children: a.children },
      t.mode
    ), a.ref = t.ref, t.child = a, a.return = t, a;
  }
  function Pg(t, a, r) {
    return mr(a, t.child, null, r), t = Oc(a, a.pendingProps), t.flags |= 2, Un(a), a.memoizedState = null, t;
  }
  function C6(t, a, r) {
    var s = a.pendingProps, u = (a.flags & 128) !== 0;
    if (a.flags &= -129, t === null) {
      if (He) {
        if (s.mode === "hidden")
          return t = Oc(a, s), a.lanes = 536870912, Bs(null, t);
        if (ud(a), (t = ft) ? (t = c2(
          t,
          ra
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (a.memoizedState = {
          dehydrated: t,
          treeContext: Ei !== null ? { id: Ra, overflow: za } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = D0(t), r.return = a, a.child = r, on = a, ft = null)) : t = null, t === null) throw xi(a);
        return a.lanes = 536870912, null;
      }
      return Oc(a, s);
    }
    var f = t.memoizedState;
    if (f !== null) {
      var p = f.dehydrated;
      if (ud(a), u)
        if (a.flags & 256)
          a.flags &= -257, a = Pg(
            t,
            a,
            r
          );
        else if (a.memoizedState !== null)
          a.child = t.child, a.flags |= 128, a = null;
        else throw Error(o(558));
      else if (Ct || lo(t, a, r, !1), u = (r & t.childLanes) !== 0, Ct || u) {
        if (s = st, s !== null && (p = Bp(s, r), p !== 0 && p !== f.retryLane))
          throw f.retryLane = p, lr(t, p), kn(s, t, p), Nd;
        Vc(), a = Pg(
          t,
          a,
          r
        );
      } else
        t = f.treeContext, ft = sa(p.nextSibling), on = a, He = !0, Si = null, ra = !1, t !== null && j0(a, t), a = Oc(a, s), a.flags |= 4096;
      return a;
    }
    return t = $a(t.child, {
      mode: s.mode,
      children: s.children
    }), t.ref = a.ref, a.child = t, t.return = a, t;
  }
  function Rc(t, a) {
    var r = a.ref;
    if (r === null)
      t !== null && t.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(o(284));
      (t === null || t.ref !== r) && (a.flags |= 4194816);
    }
  }
  function Ld(t, a, r, s, u) {
    return dr(a), r = dd(
      t,
      a,
      r,
      s,
      void 0,
      u
    ), s = hd(), t !== null && !Ct ? (pd(t, a, u), ni(t, a, u)) : (He && s && Kf(a), a.flags |= 1, ln(t, a, r, u), a.child);
  }
  function Jg(t, a, r, s, u, f) {
    return dr(a), a.updateQueue = null, r = tg(
      a,
      s,
      r,
      u
    ), eg(t), s = hd(), t !== null && !Ct ? (pd(t, a, f), ni(t, a, f)) : (He && s && Kf(a), a.flags |= 1, ln(t, a, r, f), a.child);
  }
  function Wg(t, a, r, s, u) {
    if (dr(a), a.stateNode === null) {
      var f = io, p = r.contextType;
      typeof p == "object" && p !== null && (f = sn(p)), f = new r(s, f), a.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Rd, a.stateNode = f, f._reactInternals = a, f = a.stateNode, f.props = s, f.state = a.memoizedState, f.refs = {}, id(a), p = r.contextType, f.context = typeof p == "object" && p !== null ? sn(p) : io, f.state = a.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (Od(
        a,
        r,
        p,
        s
      ), f.state = a.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (p = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), p !== f.state && Rd.enqueueReplaceState(f, f.state, null), Us(a, s, f, u), Ms(), f.state = a.memoizedState), typeof f.componentDidMount == "function" && (a.flags |= 4194308), s = !0;
    } else if (t === null) {
      f = a.stateNode;
      var v = a.memoizedProps, _ = yr(r, v);
      f.props = _;
      var O = f.context, U = r.contextType;
      p = io, typeof U == "object" && U !== null && (p = sn(U));
      var G = r.getDerivedStateFromProps;
      U = typeof G == "function" || typeof f.getSnapshotBeforeUpdate == "function", v = a.pendingProps !== v, U || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v || O !== p) && Vg(
        a,
        f,
        s,
        p
      ), ki = !1;
      var N = a.memoizedState;
      f.state = N, Us(a, s, f, u), Ms(), O = a.memoizedState, v || N !== O || ki ? (typeof G == "function" && (Od(
        a,
        r,
        G,
        s
      ), O = a.memoizedState), (_ = ki || Hg(
        a,
        r,
        _,
        s,
        N,
        O,
        p
      )) ? (U || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = s, a.memoizedState = O), f.props = s, f.state = O, f.context = p, s = _) : (typeof f.componentDidMount == "function" && (a.flags |= 4194308), s = !1);
    } else {
      f = a.stateNode, rd(t, a), p = a.memoizedProps, U = yr(r, p), f.props = U, G = a.pendingProps, N = f.context, O = r.contextType, _ = io, typeof O == "object" && O !== null && (_ = sn(O)), v = r.getDerivedStateFromProps, (O = typeof v == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p !== G || N !== _) && Vg(
        a,
        f,
        s,
        _
      ), ki = !1, N = a.memoizedState, f.state = N, Us(a, s, f, u), Ms();
      var C = a.memoizedState;
      p !== G || N !== C || ki || t !== null && t.dependencies !== null && uc(t.dependencies) ? (typeof v == "function" && (Od(
        a,
        r,
        v,
        s
      ), C = a.memoizedState), (U = ki || Hg(
        a,
        r,
        U,
        s,
        N,
        C,
        _
      ) || t !== null && t.dependencies !== null && uc(t.dependencies)) ? (O || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(s, C, _), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        s,
        C,
        _
      )), typeof f.componentDidUpdate == "function" && (a.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || p === t.memoizedProps && N === t.memoizedState || (a.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === t.memoizedProps && N === t.memoizedState || (a.flags |= 1024), a.memoizedProps = s, a.memoizedState = C), f.props = s, f.state = C, f.context = _, s = U) : (typeof f.componentDidUpdate != "function" || p === t.memoizedProps && N === t.memoizedState || (a.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === t.memoizedProps && N === t.memoizedState || (a.flags |= 1024), s = !1);
    }
    return f = s, Rc(t, a), s = (a.flags & 128) !== 0, f || s ? (f = a.stateNode, r = s && typeof r.getDerivedStateFromError != "function" ? null : f.render(), a.flags |= 1, t !== null && s ? (a.child = mr(
      a,
      t.child,
      null,
      u
    ), a.child = mr(
      a,
      null,
      r,
      u
    )) : ln(t, a, r, u), a.memoizedState = f.state, t = a.child) : t = ni(
      t,
      a,
      u
    ), t;
  }
  function em(t, a, r, s) {
    return ur(), a.flags |= 256, ln(t, a, r, s), a.child;
  }
  var Cd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Dd(t) {
    return { baseLanes: t, cachePool: Z0() };
  }
  function Md(t, a, r) {
    return t = t !== null ? t.childLanes & ~r : 0, a && (t |= Hn), t;
  }
  function tm(t, a, r) {
    var s = a.pendingProps, u = !1, f = (a.flags & 128) !== 0, p;
    if ((p = f) || (p = t !== null && t.memoizedState === null ? !1 : (Tt.current & 2) !== 0), p && (u = !0, a.flags &= -129), p = (a.flags & 32) !== 0, a.flags &= -33, t === null) {
      if (He) {
        if (u ? zi(a) : Ni(), (t = ft) ? (t = c2(
          t,
          ra
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (a.memoizedState = {
          dehydrated: t,
          treeContext: Ei !== null ? { id: Ra, overflow: za } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = D0(t), r.return = a, a.child = r, on = a, ft = null)) : t = null, t === null) throw xi(a);
        return vh(t) ? a.lanes = 32 : a.lanes = 536870912, null;
      }
      var v = s.children;
      return s = s.fallback, u ? (Ni(), u = a.mode, v = zc(
        { mode: "hidden", children: v },
        u
      ), s = cr(
        s,
        u,
        r,
        null
      ), v.return = a, s.return = a, v.sibling = s, a.child = v, s = a.child, s.memoizedState = Dd(r), s.childLanes = Md(
        t,
        p,
        r
      ), a.memoizedState = Cd, Bs(null, s)) : (zi(a), Ud(a, v));
    }
    var _ = t.memoizedState;
    if (_ !== null && (v = _.dehydrated, v !== null)) {
      if (f)
        a.flags & 256 ? (zi(a), a.flags &= -257, a = jd(
          t,
          a,
          r
        )) : a.memoizedState !== null ? (Ni(), a.child = t.child, a.flags |= 128, a = null) : (Ni(), v = s.fallback, u = a.mode, s = zc(
          { mode: "visible", children: s.children },
          u
        ), v = cr(
          v,
          u,
          r,
          null
        ), v.flags |= 2, s.return = a, v.return = a, s.sibling = v, a.child = s, mr(
          a,
          t.child,
          null,
          r
        ), s = a.child, s.memoizedState = Dd(r), s.childLanes = Md(
          t,
          p,
          r
        ), a.memoizedState = Cd, a = Bs(null, s));
      else if (zi(a), vh(v)) {
        if (p = v.nextSibling && v.nextSibling.dataset, p) var O = p.dgst;
        p = O, s = Error(o(419)), s.stack = "", s.digest = p, Rs({ value: s, source: null, stack: null }), a = jd(
          t,
          a,
          r
        );
      } else if (Ct || lo(t, a, r, !1), p = (r & t.childLanes) !== 0, Ct || p) {
        if (p = st, p !== null && (s = Bp(p, r), s !== 0 && s !== _.retryLane))
          throw _.retryLane = s, lr(t, s), kn(p, t, s), Nd;
        mh(v) || Vc(), a = jd(
          t,
          a,
          r
        );
      } else
        mh(v) ? (a.flags |= 192, a.child = t.child, a = null) : (t = _.treeContext, ft = sa(
          v.nextSibling
        ), on = a, He = !0, Si = null, ra = !1, t !== null && j0(a, t), a = Ud(
          a,
          s.children
        ), a.flags |= 4096);
      return a;
    }
    return u ? (Ni(), v = s.fallback, u = a.mode, _ = t.child, O = _.sibling, s = $a(_, {
      mode: "hidden",
      children: s.children
    }), s.subtreeFlags = _.subtreeFlags & 65011712, O !== null ? v = $a(
      O,
      v
    ) : (v = cr(
      v,
      u,
      r,
      null
    ), v.flags |= 2), v.return = a, s.return = a, s.sibling = v, a.child = s, Bs(null, s), s = a.child, v = t.child.memoizedState, v === null ? v = Dd(r) : (u = v.cachePool, u !== null ? (_ = Nt._currentValue, u = u.parent !== _ ? { parent: _, pool: _ } : u) : u = Z0(), v = {
      baseLanes: v.baseLanes | r,
      cachePool: u
    }), s.memoizedState = v, s.childLanes = Md(
      t,
      p,
      r
    ), a.memoizedState = Cd, Bs(t.child, s)) : (zi(a), r = t.child, t = r.sibling, r = $a(r, {
      mode: "visible",
      children: s.children
    }), r.return = a, r.sibling = null, t !== null && (p = a.deletions, p === null ? (a.deletions = [t], a.flags |= 16) : p.push(t)), a.child = r, a.memoizedState = null, r);
  }
  function Ud(t, a) {
    return a = zc(
      { mode: "visible", children: a },
      t.mode
    ), a.return = t, t.child = a;
  }
  function zc(t, a) {
    return t = Dn(22, t, null, a), t.lanes = 0, t;
  }
  function jd(t, a, r) {
    return mr(a, t.child, null, r), t = Ud(
      a,
      a.pendingProps.children
    ), t.flags |= 2, a.memoizedState = null, t;
  }
  function nm(t, a, r) {
    t.lanes |= a;
    var s = t.alternate;
    s !== null && (s.lanes |= a), Jf(t.return, a, r);
  }
  function Hd(t, a, r, s, u, f) {
    var p = t.memoizedState;
    p === null ? t.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: s,
      tail: r,
      tailMode: u,
      treeForkCount: f
    } : (p.isBackwards = a, p.rendering = null, p.renderingStartTime = 0, p.last = s, p.tail = r, p.tailMode = u, p.treeForkCount = f);
  }
  function am(t, a, r) {
    var s = a.pendingProps, u = s.revealOrder, f = s.tail;
    s = s.children;
    var p = Tt.current, v = (p & 2) !== 0;
    if (v ? (p = p & 1 | 2, a.flags |= 128) : p &= 1, K(Tt, p), ln(t, a, s, r), s = He ? Os : 0, !v && t !== null && (t.flags & 128) !== 0)
      e: for (t = a.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && nm(t, r, a);
        else if (t.tag === 19)
          nm(t, r, a);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === a) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === a)
            break e;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "forwards":
        for (r = a.child, u = null; r !== null; )
          t = r.alternate, t !== null && yc(t) === null && (u = r), r = r.sibling;
        r = u, r === null ? (u = a.child, a.child = null) : (u = r.sibling, r.sibling = null), Hd(
          a,
          !1,
          u,
          r,
          f,
          s
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (r = null, u = a.child, a.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && yc(t) === null) {
            a.child = u;
            break;
          }
          t = u.sibling, u.sibling = r, r = u, u = t;
        }
        Hd(
          a,
          !0,
          r,
          null,
          f,
          s
        );
        break;
      case "together":
        Hd(
          a,
          !1,
          null,
          null,
          void 0,
          s
        );
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function ni(t, a, r) {
    if (t !== null && (a.dependencies = t.dependencies), Di |= a.lanes, (r & a.childLanes) === 0)
      if (t !== null) {
        if (lo(
          t,
          a,
          r,
          !1
        ), (r & a.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && a.child !== t.child)
      throw Error(o(153));
    if (a.child !== null) {
      for (t = a.child, r = $a(t, t.pendingProps), a.child = r, r.return = a; t.sibling !== null; )
        t = t.sibling, r = r.sibling = $a(t, t.pendingProps), r.return = a;
      r.sibling = null;
    }
    return a.child;
  }
  function Vd(t, a) {
    return (t.lanes & a) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && uc(t)));
  }
  function D6(t, a, r) {
    switch (a.tag) {
      case 3:
        ct(a, a.stateNode.containerInfo), Ti(a, Nt, t.memoizedState.cache), ur();
        break;
      case 27:
      case 5:
        Qt(a);
        break;
      case 4:
        ct(a, a.stateNode.containerInfo);
        break;
      case 10:
        Ti(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 31:
        if (a.memoizedState !== null)
          return a.flags |= 128, ud(a), null;
        break;
      case 13:
        var s = a.memoizedState;
        if (s !== null)
          return s.dehydrated !== null ? (zi(a), a.flags |= 128, null) : (r & a.child.childLanes) !== 0 ? tm(t, a, r) : (zi(a), t = ni(
            t,
            a,
            r
          ), t !== null ? t.sibling : null);
        zi(a);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (s = (r & a.childLanes) !== 0, s || (lo(
          t,
          a,
          r,
          !1
        ), s = (r & a.childLanes) !== 0), u) {
          if (s)
            return am(
              t,
              a,
              r
            );
          a.flags |= 128;
        }
        if (u = a.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), K(Tt, Tt.current), s) break;
        return null;
      case 22:
        return a.lanes = 0, Qg(
          t,
          a,
          r,
          a.pendingProps
        );
      case 24:
        Ti(a, Nt, t.memoizedState.cache);
    }
    return ni(t, a, r);
  }
  function im(t, a, r) {
    if (t !== null)
      if (t.memoizedProps !== a.pendingProps)
        Ct = !0;
      else {
        if (!Vd(t, r) && (a.flags & 128) === 0)
          return Ct = !1, D6(
            t,
            a,
            r
          );
        Ct = (t.flags & 131072) !== 0;
      }
    else
      Ct = !1, He && (a.flags & 1048576) !== 0 && U0(a, Os, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        e: {
          var s = a.pendingProps;
          if (t = pr(a.elementType), a.type = t, typeof t == "function")
            If(t) ? (s = yr(t, s), a.tag = 1, a = Wg(
              null,
              a,
              t,
              s,
              r
            )) : (a.tag = 0, a = Ld(
              null,
              a,
              t,
              s,
              r
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === ee) {
                a.tag = 11, a = Yg(
                  null,
                  a,
                  t,
                  s,
                  r
                );
                break e;
              } else if (u === ce) {
                a.tag = 14, a = Kg(
                  null,
                  a,
                  t,
                  s,
                  r
                );
                break e;
              }
            }
            throw a = xe(t) || t, Error(o(306, a, ""));
          }
        }
        return a;
      case 0:
        return Ld(
          t,
          a,
          a.type,
          a.pendingProps,
          r
        );
      case 1:
        return s = a.type, u = yr(
          s,
          a.pendingProps
        ), Wg(
          t,
          a,
          s,
          u,
          r
        );
      case 3:
        e: {
          if (ct(
            a,
            a.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          s = a.pendingProps;
          var f = a.memoizedState;
          u = f.element, rd(t, a), Us(a, s, null, r);
          var p = a.memoizedState;
          if (s = p.cache, Ti(a, Nt, s), s !== f.cache && Wf(
            a,
            [Nt],
            r,
            !0
          ), Ms(), s = p.element, f.isDehydrated)
            if (f = {
              element: s,
              isDehydrated: !1,
              cache: p.cache
            }, a.updateQueue.baseState = f, a.memoizedState = f, a.flags & 256) {
              a = em(
                t,
                a,
                s,
                r
              );
              break e;
            } else if (s !== u) {
              u = na(
                Error(o(424)),
                a
              ), Rs(u), a = em(
                t,
                a,
                s,
                r
              );
              break e;
            } else
              for (t = a.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, ft = sa(t.firstChild), on = a, He = !0, Si = null, ra = !0, r = Q0(
                a,
                null,
                s,
                r
              ), a.child = r; r; )
                r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (ur(), s === u) {
              a = ni(
                t,
                a,
                r
              );
              break e;
            }
            ln(t, a, s, r);
          }
          a = a.child;
        }
        return a;
      case 26:
        return Rc(t, a), t === null ? (r = g2(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = r : He || (r = a.type, t = a.pendingProps, s = Yc(
          Se.current
        ).createElement(r), s[rn] = a, s[wn] = t, cn(s, r, t), Pt(s), a.stateNode = s) : a.memoizedState = g2(
          a.type,
          t.memoizedProps,
          a.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Qt(a), t === null && He && (s = a.stateNode = d2(
          a.type,
          a.pendingProps,
          Se.current
        ), on = a, ra = !0, u = ft, Vi(a.type) ? (yh = u, ft = sa(s.firstChild)) : ft = u), ln(
          t,
          a,
          a.pendingProps.children,
          r
        ), Rc(t, a), t === null && (a.flags |= 4194304), a.child;
      case 5:
        return t === null && He && ((u = s = ft) && (s = u5(
          s,
          a.type,
          a.pendingProps,
          ra
        ), s !== null ? (a.stateNode = s, on = a, ft = sa(s.firstChild), ra = !1, u = !0) : u = !1), u || xi(a)), Qt(a), u = a.type, f = a.pendingProps, p = t !== null ? t.memoizedProps : null, s = f.children, hh(u, f) ? s = null : p !== null && hh(u, p) && (a.flags |= 32), a.memoizedState !== null && (u = dd(
          t,
          a,
          x6,
          null,
          null,
          r
        ), nl._currentValue = u), Rc(t, a), ln(t, a, s, r), a.child;
      case 6:
        return t === null && He && ((t = r = ft) && (r = f5(
          r,
          a.pendingProps,
          ra
        ), r !== null ? (a.stateNode = r, on = a, ft = null, t = !0) : t = !1), t || xi(a)), null;
      case 13:
        return tm(t, a, r);
      case 4:
        return ct(
          a,
          a.stateNode.containerInfo
        ), s = a.pendingProps, t === null ? a.child = mr(
          a,
          null,
          s,
          r
        ) : ln(t, a, s, r), a.child;
      case 11:
        return Yg(
          t,
          a,
          a.type,
          a.pendingProps,
          r
        );
      case 7:
        return ln(
          t,
          a,
          a.pendingProps,
          r
        ), a.child;
      case 8:
        return ln(
          t,
          a,
          a.pendingProps.children,
          r
        ), a.child;
      case 12:
        return ln(
          t,
          a,
          a.pendingProps.children,
          r
        ), a.child;
      case 10:
        return s = a.pendingProps, Ti(a, a.type, s.value), ln(t, a, s.children, r), a.child;
      case 9:
        return u = a.type._context, s = a.pendingProps.children, dr(a), u = sn(u), s = s(u), a.flags |= 1, ln(t, a, s, r), a.child;
      case 14:
        return Kg(
          t,
          a,
          a.type,
          a.pendingProps,
          r
        );
      case 15:
        return Xg(
          t,
          a,
          a.type,
          a.pendingProps,
          r
        );
      case 19:
        return am(t, a, r);
      case 31:
        return C6(t, a, r);
      case 22:
        return Qg(
          t,
          a,
          r,
          a.pendingProps
        );
      case 24:
        return dr(a), s = sn(Nt), t === null ? (u = nd(), u === null && (u = st, f = ed(), u.pooledCache = f, f.refCount++, f !== null && (u.pooledCacheLanes |= r), u = f), a.memoizedState = { parent: s, cache: u }, id(a), Ti(a, Nt, u)) : ((t.lanes & r) !== 0 && (rd(t, a), Us(a, null, null, r), Ms()), u = t.memoizedState, f = a.memoizedState, u.parent !== s ? (u = { parent: s, cache: s }, a.memoizedState = u, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = u), Ti(a, Nt, s)) : (s = f.cache, Ti(a, Nt, s), s !== u.cache && Wf(
          a,
          [Nt],
          r,
          !0
        ))), ln(
          t,
          a,
          a.pendingProps.children,
          r
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(o(156, a.tag));
  }
  function ai(t) {
    t.flags |= 4;
  }
  function Gd(t, a, r, s, u) {
    if ((a = (t.mode & 32) !== 0) && (a = !1), a) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Nm()) t.flags |= 8192;
        else
          throw gr = pc, ad;
    } else t.flags &= -16777217;
  }
  function rm(t, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !_2(a))
      if (Nm()) t.flags |= 8192;
      else
        throw gr = pc, ad;
  }
  function Nc(t, a) {
    a !== null && (t.flags |= 4), t.flags & 16384 && (a = t.tag !== 22 ? Hp() : 536870912, t.lanes |= a, wo |= a);
  }
  function Fs(t, a) {
    if (!He)
      switch (t.tailMode) {
        case "hidden":
          a = t.tail;
          for (var r = null; a !== null; )
            a.alternate !== null && (r = a), a = a.sibling;
          r === null ? t.tail = null : r.sibling = null;
          break;
        case "collapsed":
          r = t.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), r = r.sibling;
          s === null ? a || t.tail === null ? t.tail = null : t.tail.sibling = null : s.sibling = null;
      }
  }
  function dt(t) {
    var a = t.alternate !== null && t.alternate.child === t.child, r = 0, s = 0;
    if (a)
      for (var u = t.child; u !== null; )
        r |= u.lanes | u.childLanes, s |= u.subtreeFlags & 65011712, s |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        r |= u.lanes | u.childLanes, s |= u.subtreeFlags, s |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= s, t.childLanes = r, a;
  }
  function M6(t, a, r) {
    var s = a.pendingProps;
    switch (Xf(a), a.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dt(a), null;
      case 1:
        return dt(a), null;
      case 3:
        return r = a.stateNode, s = null, t !== null && (s = t.memoizedState.cache), a.memoizedState.cache !== s && (a.flags |= 2048), Wa(Nt), Ge(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (so(a) ? ai(a) : t === null || t.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, $f())), dt(a), null;
      case 26:
        var u = a.type, f = a.memoizedState;
        return t === null ? (ai(a), f !== null ? (dt(a), rm(a, f)) : (dt(a), Gd(
          a,
          u,
          null,
          s,
          r
        ))) : f ? f !== t.memoizedState ? (ai(a), dt(a), rm(a, f)) : (dt(a), a.flags &= -16777217) : (t = t.memoizedProps, t !== s && ai(a), dt(a), Gd(
          a,
          u,
          t,
          s,
          r
        )), null;
      case 27:
        if (_n(a), r = Se.current, u = a.type, t !== null && a.stateNode != null)
          t.memoizedProps !== s && ai(a);
        else {
          if (!s) {
            if (a.stateNode === null)
              throw Error(o(166));
            return dt(a), null;
          }
          t = P.current, so(a) ? H0(a) : (t = d2(u, s, r), a.stateNode = t, ai(a));
        }
        return dt(a), null;
      case 5:
        if (_n(a), u = a.type, t !== null && a.stateNode != null)
          t.memoizedProps !== s && ai(a);
        else {
          if (!s) {
            if (a.stateNode === null)
              throw Error(o(166));
            return dt(a), null;
          }
          if (f = P.current, so(a))
            H0(a);
          else {
            var p = Yc(
              Se.current
            );
            switch (f) {
              case 1:
                f = p.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                f = p.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    f = p.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    f = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    f = p.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                      f.firstChild
                    );
                    break;
                  case "select":
                    f = typeof s.is == "string" ? p.createElement("select", {
                      is: s.is
                    }) : p.createElement("select"), s.multiple ? f.multiple = !0 : s.size && (f.size = s.size);
                    break;
                  default:
                    f = typeof s.is == "string" ? p.createElement(u, { is: s.is }) : p.createElement(u);
                }
            }
            f[rn] = a, f[wn] = s;
            e: for (p = a.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6)
                f.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                p.child.return = p, p = p.child;
                continue;
              }
              if (p === a) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === a)
                  break e;
                p = p.return;
              }
              p.sibling.return = p.return, p = p.sibling;
            }
            a.stateNode = f;
            e: switch (cn(f, u, s), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break e;
              case "img":
                s = !0;
                break e;
              default:
                s = !1;
            }
            s && ai(a);
          }
        }
        return dt(a), Gd(
          a,
          a.type,
          t === null ? null : t.memoizedProps,
          a.pendingProps,
          r
        ), null;
      case 6:
        if (t && a.stateNode != null)
          t.memoizedProps !== s && ai(a);
        else {
          if (typeof s != "string" && a.stateNode === null)
            throw Error(o(166));
          if (t = Se.current, so(a)) {
            if (t = a.stateNode, r = a.memoizedProps, s = null, u = on, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  s = u.memoizedProps;
              }
            t[rn] = a, t = !!(t.nodeValue === r || s !== null && s.suppressHydrationWarning === !0 || t2(t.nodeValue, r)), t || xi(a, !0);
          } else
            t = Yc(t).createTextNode(
              s
            ), t[rn] = a, a.stateNode = t;
        }
        return dt(a), null;
      case 31:
        if (r = a.memoizedState, t === null || t.memoizedState !== null) {
          if (s = so(a), r !== null) {
            if (t === null) {
              if (!s) throw Error(o(318));
              if (t = a.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[rn] = a;
            } else
              ur(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            dt(a), t = !1;
          } else
            r = $f(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), t = !0;
          if (!t)
            return a.flags & 256 ? (Un(a), a) : (Un(a), null);
          if ((a.flags & 128) !== 0)
            throw Error(o(558));
        }
        return dt(a), null;
      case 13:
        if (s = a.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = so(a), s !== null && s.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (u = a.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[rn] = a;
            } else
              ur(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            dt(a), u = !1;
          } else
            u = $f(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return a.flags & 256 ? (Un(a), a) : (Un(a), null);
        }
        return Un(a), (a.flags & 128) !== 0 ? (a.lanes = r, a) : (r = s !== null, t = t !== null && t.memoizedState !== null, r && (s = a.child, u = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (u = s.alternate.memoizedState.cachePool.pool), f = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (f = s.memoizedState.cachePool.pool), f !== u && (s.flags |= 2048)), r !== t && r && (a.child.flags |= 8192), Nc(a, a.updateQueue), dt(a), null);
      case 4:
        return Ge(), t === null && lh(a.stateNode.containerInfo), dt(a), null;
      case 10:
        return Wa(a.type), dt(a), null;
      case 19:
        if (j(Tt), s = a.memoizedState, s === null) return dt(a), null;
        if (u = (a.flags & 128) !== 0, f = s.rendering, f === null)
          if (u) Fs(s, !1);
          else {
            if (Et !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = a.child; t !== null; ) {
                if (f = yc(t), f !== null) {
                  for (a.flags |= 128, Fs(s, !1), t = f.updateQueue, a.updateQueue = t, Nc(a, t), a.subtreeFlags = 0, t = r, r = a.child; r !== null; )
                    C0(r, t), r = r.sibling;
                  return K(
                    Tt,
                    Tt.current & 1 | 2
                  ), He && Pa(a, s.treeForkCount), a.child;
                }
                t = t.sibling;
              }
            s.tail !== null && $() > Uc && (a.flags |= 128, u = !0, Fs(s, !1), a.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = yc(f), t !== null) {
              if (a.flags |= 128, u = !0, t = t.updateQueue, a.updateQueue = t, Nc(a, t), Fs(s, !0), s.tail === null && s.tailMode === "hidden" && !f.alternate && !He)
                return dt(a), null;
            } else
              2 * $() - s.renderingStartTime > Uc && r !== 536870912 && (a.flags |= 128, u = !0, Fs(s, !1), a.lanes = 4194304);
          s.isBackwards ? (f.sibling = a.child, a.child = f) : (t = s.last, t !== null ? t.sibling = f : a.child = f, s.last = f);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = $(), t.sibling = null, r = Tt.current, K(
          Tt,
          u ? r & 1 | 2 : r & 1
        ), He && Pa(a, s.treeForkCount), t) : (dt(a), null);
      case 22:
      case 23:
        return Un(a), cd(), s = a.memoizedState !== null, t !== null ? t.memoizedState !== null !== s && (a.flags |= 8192) : s && (a.flags |= 8192), s ? (r & 536870912) !== 0 && (a.flags & 128) === 0 && (dt(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : dt(a), r = a.updateQueue, r !== null && Nc(a, r.retryQueue), r = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), s = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), s !== r && (a.flags |= 2048), t !== null && j(hr), null;
      case 24:
        return r = null, t !== null && (r = t.memoizedState.cache), a.memoizedState.cache !== r && (a.flags |= 2048), Wa(Nt), dt(a), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, a.tag));
  }
  function U6(t, a) {
    switch (Xf(a), a.tag) {
      case 1:
        return t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 3:
        return Wa(Nt), Ge(), t = a.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (a.flags = t & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return _n(a), null;
      case 31:
        if (a.memoizedState !== null) {
          if (Un(a), a.alternate === null)
            throw Error(o(340));
          ur();
        }
        return t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 13:
        if (Un(a), t = a.memoizedState, t !== null && t.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(o(340));
          ur();
        }
        return t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 19:
        return j(Tt), null;
      case 4:
        return Ge(), null;
      case 10:
        return Wa(a.type), null;
      case 22:
      case 23:
        return Un(a), cd(), t !== null && j(hr), t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 24:
        return Wa(Nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function om(t, a) {
    switch (Xf(a), a.tag) {
      case 3:
        Wa(Nt), Ge();
        break;
      case 26:
      case 27:
      case 5:
        _n(a);
        break;
      case 4:
        Ge();
        break;
      case 31:
        a.memoizedState !== null && Un(a);
        break;
      case 13:
        Un(a);
        break;
      case 19:
        j(Tt);
        break;
      case 10:
        Wa(a.type);
        break;
      case 22:
      case 23:
        Un(a), cd(), t !== null && j(hr);
        break;
      case 24:
        Wa(Nt);
    }
  }
  function Zs(t, a) {
    try {
      var r = a.updateQueue, s = r !== null ? r.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        r = u;
        do {
          if ((r.tag & t) === t) {
            s = void 0;
            var f = r.create, p = r.inst;
            s = f(), p.destroy = s;
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (v) {
      et(a, a.return, v);
    }
  }
  function Li(t, a, r) {
    try {
      var s = a.updateQueue, u = s !== null ? s.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        s = f;
        do {
          if ((s.tag & t) === t) {
            var p = s.inst, v = p.destroy;
            if (v !== void 0) {
              p.destroy = void 0, u = a;
              var _ = r, O = v;
              try {
                O();
              } catch (U) {
                et(
                  u,
                  _,
                  U
                );
              }
            }
          }
          s = s.next;
        } while (s !== f);
      }
    } catch (U) {
      et(a, a.return, U);
    }
  }
  function sm(t) {
    var a = t.updateQueue;
    if (a !== null) {
      var r = t.stateNode;
      try {
        P0(a, r);
      } catch (s) {
        et(t, t.return, s);
      }
    }
  }
  function lm(t, a, r) {
    r.props = yr(
      t.type,
      t.memoizedProps
    ), r.state = t.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (s) {
      et(t, a, s);
    }
  }
  function Is(t, a) {
    try {
      var r = t.ref;
      if (r !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = t.stateNode;
            break;
          case 30:
            s = t.stateNode;
            break;
          default:
            s = t.stateNode;
        }
        typeof r == "function" ? t.refCleanup = r(s) : r.current = s;
      }
    } catch (u) {
      et(t, a, u);
    }
  }
  function Na(t, a) {
    var r = t.ref, s = t.refCleanup;
    if (r !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (u) {
          et(t, a, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (u) {
          et(t, a, u);
        }
      else r.current = null;
  }
  function cm(t) {
    var a = t.type, r = t.memoizedProps, s = t.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && s.focus();
          break e;
        case "img":
          r.src ? s.src = r.src : r.srcSet && (s.srcset = r.srcSet);
      }
    } catch (u) {
      et(t, t.return, u);
    }
  }
  function Bd(t, a, r) {
    try {
      var s = t.stateNode;
      i5(s, t.type, r, a), s[wn] = a;
    } catch (u) {
      et(t, t.return, u);
    }
  }
  function um(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Vi(t.type) || t.tag === 4;
  }
  function Fd(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || um(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Vi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Zd(t, a, r) {
    var s = t.tag;
    if (s === 5 || s === 6)
      t = t.stateNode, a ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(t, a) : (a = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, a.appendChild(t), r = r._reactRootContainer, r != null || a.onclick !== null || (a.onclick = Xa));
    else if (s !== 4 && (s === 27 && Vi(t.type) && (r = t.stateNode, a = null), t = t.child, t !== null))
      for (Zd(t, a, r), t = t.sibling; t !== null; )
        Zd(t, a, r), t = t.sibling;
  }
  function Lc(t, a, r) {
    var s = t.tag;
    if (s === 5 || s === 6)
      t = t.stateNode, a ? r.insertBefore(t, a) : r.appendChild(t);
    else if (s !== 4 && (s === 27 && Vi(t.type) && (r = t.stateNode), t = t.child, t !== null))
      for (Lc(t, a, r), t = t.sibling; t !== null; )
        Lc(t, a, r), t = t.sibling;
  }
  function fm(t) {
    var a = t.stateNode, r = t.memoizedProps;
    try {
      for (var s = t.type, u = a.attributes; u.length; )
        a.removeAttributeNode(u[0]);
      cn(a, s, r), a[rn] = t, a[wn] = r;
    } catch (f) {
      et(t, t.return, f);
    }
  }
  var ii = !1, Dt = !1, Id = !1, dm = typeof WeakSet == "function" ? WeakSet : Set, Jt = null;
  function j6(t, a) {
    if (t = t.containerInfo, fh = Wc, t = S0(t), jf(t)) {
      if ("selectionStart" in t)
        var r = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        e: {
          r = (r = t.ownerDocument) && r.defaultView || window;
          var s = r.getSelection && r.getSelection();
          if (s && s.rangeCount !== 0) {
            r = s.anchorNode;
            var u = s.anchorOffset, f = s.focusNode;
            s = s.focusOffset;
            try {
              r.nodeType, f.nodeType;
            } catch {
              r = null;
              break e;
            }
            var p = 0, v = -1, _ = -1, O = 0, U = 0, G = t, N = null;
            t: for (; ; ) {
              for (var C; G !== r || u !== 0 && G.nodeType !== 3 || (v = p + u), G !== f || s !== 0 && G.nodeType !== 3 || (_ = p + s), G.nodeType === 3 && (p += G.nodeValue.length), (C = G.firstChild) !== null; )
                N = G, G = C;
              for (; ; ) {
                if (G === t) break t;
                if (N === r && ++O === u && (v = p), N === f && ++U === s && (_ = p), (C = G.nextSibling) !== null) break;
                G = N, N = G.parentNode;
              }
              G = C;
            }
            r = v === -1 || _ === -1 ? null : { start: v, end: _ };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (dh = { focusedElem: t, selectionRange: r }, Wc = !1, Jt = a; Jt !== null; )
      if (a = Jt, t = a.child, (a.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = a, Jt = t;
      else
        for (; Jt !== null; ) {
          switch (a = Jt, f = a.alternate, t = a.flags, a.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = a.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (r = 0; r < t.length; r++)
                  u = t[r], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && f !== null) {
                t = void 0, r = a, u = f.memoizedProps, f = f.memoizedState, s = r.stateNode;
                try {
                  var ie = yr(
                    r.type,
                    u
                  );
                  t = s.getSnapshotBeforeUpdate(
                    ie,
                    f
                  ), s.__reactInternalSnapshotBeforeUpdate = t;
                } catch (we) {
                  et(
                    r,
                    r.return,
                    we
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = a.stateNode.containerInfo, r = t.nodeType, r === 9)
                  gh(t);
                else if (r === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gh(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (t = a.sibling, t !== null) {
            t.return = a.return, Jt = t;
            break;
          }
          Jt = a.return;
        }
  }
  function hm(t, a, r) {
    var s = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        oi(t, r), s & 4 && Zs(5, r);
        break;
      case 1:
        if (oi(t, r), s & 4)
          if (t = r.stateNode, a === null)
            try {
              t.componentDidMount();
            } catch (p) {
              et(r, r.return, p);
            }
          else {
            var u = yr(
              r.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                a,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (p) {
              et(
                r,
                r.return,
                p
              );
            }
          }
        s & 64 && sm(r), s & 512 && Is(r, r.return);
        break;
      case 3:
        if (oi(t, r), s & 64 && (t = r.updateQueue, t !== null)) {
          if (a = null, r.child !== null)
            switch (r.child.tag) {
              case 27:
              case 5:
                a = r.child.stateNode;
                break;
              case 1:
                a = r.child.stateNode;
            }
          try {
            P0(t, a);
          } catch (p) {
            et(r, r.return, p);
          }
        }
        break;
      case 27:
        a === null && s & 4 && fm(r);
      case 26:
      case 5:
        oi(t, r), a === null && s & 4 && cm(r), s & 512 && Is(r, r.return);
        break;
      case 12:
        oi(t, r);
        break;
      case 31:
        oi(t, r), s & 4 && mm(t, r);
        break;
      case 13:
        oi(t, r), s & 4 && vm(t, r), s & 64 && (t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null && (r = Y6.bind(
          null,
          r
        ), d5(t, r))));
        break;
      case 22:
        if (s = r.memoizedState !== null || ii, !s) {
          a = a !== null && a.memoizedState !== null || Dt, u = ii;
          var f = Dt;
          ii = s, (Dt = a) && !f ? si(
            t,
            r,
            (r.subtreeFlags & 8772) !== 0
          ) : oi(t, r), ii = u, Dt = f;
        }
        break;
      case 30:
        break;
      default:
        oi(t, r);
    }
  }
  function pm(t) {
    var a = t.alternate;
    a !== null && (t.alternate = null, pm(a)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (a = t.stateNode, a !== null && _f(a)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ht = null, En = !1;
  function ri(t, a, r) {
    for (r = r.child; r !== null; )
      gm(t, a, r), r = r.sibling;
  }
  function gm(t, a, r) {
    if (an && typeof an.onCommitFiberUnmount == "function")
      try {
        an.onCommitFiberUnmount(nr, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        Dt || Na(r, a), ri(
          t,
          a,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Dt || Na(r, a);
        var s = ht, u = En;
        Vi(r.type) && (ht = r.stateNode, En = !1), ri(
          t,
          a,
          r
        ), Ws(r.stateNode), ht = s, En = u;
        break;
      case 5:
        Dt || Na(r, a);
      case 6:
        if (s = ht, u = En, ht = null, ri(
          t,
          a,
          r
        ), ht = s, En = u, ht !== null)
          if (En)
            try {
              (ht.nodeType === 9 ? ht.body : ht.nodeName === "HTML" ? ht.ownerDocument.body : ht).removeChild(r.stateNode);
            } catch (f) {
              et(
                r,
                a,
                f
              );
            }
          else
            try {
              ht.removeChild(r.stateNode);
            } catch (f) {
              et(
                r,
                a,
                f
              );
            }
        break;
      case 18:
        ht !== null && (En ? (t = ht, s2(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          r.stateNode
        ), Ro(t)) : s2(ht, r.stateNode));
        break;
      case 4:
        s = ht, u = En, ht = r.stateNode.containerInfo, En = !0, ri(
          t,
          a,
          r
        ), ht = s, En = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Li(2, r, a), Dt || Li(4, r, a), ri(
          t,
          a,
          r
        );
        break;
      case 1:
        Dt || (Na(r, a), s = r.stateNode, typeof s.componentWillUnmount == "function" && lm(
          r,
          a,
          s
        )), ri(
          t,
          a,
          r
        );
        break;
      case 21:
        ri(
          t,
          a,
          r
        );
        break;
      case 22:
        Dt = (s = Dt) || r.memoizedState !== null, ri(
          t,
          a,
          r
        ), Dt = s;
        break;
      default:
        ri(
          t,
          a,
          r
        );
    }
  }
  function mm(t, a) {
    if (a.memoizedState === null && (t = a.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ro(t);
      } catch (r) {
        et(a, a.return, r);
      }
    }
  }
  function vm(t, a) {
    if (a.memoizedState === null && (t = a.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ro(t);
      } catch (r) {
        et(a, a.return, r);
      }
  }
  function H6(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var a = t.stateNode;
        return a === null && (a = t.stateNode = new dm()), a;
      case 22:
        return t = t.stateNode, a = t._retryCache, a === null && (a = t._retryCache = new dm()), a;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Cc(t, a) {
    var r = H6(t);
    a.forEach(function(s) {
      if (!r.has(s)) {
        r.add(s);
        var u = K6.bind(null, t, s);
        s.then(u, u);
      }
    });
  }
  function Sn(t, a) {
    var r = a.deletions;
    if (r !== null)
      for (var s = 0; s < r.length; s++) {
        var u = r[s], f = t, p = a, v = p;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Vi(v.type)) {
                ht = v.stateNode, En = !1;
                break e;
              }
              break;
            case 5:
              ht = v.stateNode, En = !1;
              break e;
            case 3:
            case 4:
              ht = v.stateNode.containerInfo, En = !0;
              break e;
          }
          v = v.return;
        }
        if (ht === null) throw Error(o(160));
        gm(f, p, u), ht = null, En = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (a.subtreeFlags & 13886)
      for (a = a.child; a !== null; )
        ym(a, t), a = a.sibling;
  }
  var ba = null;
  function ym(t, a) {
    var r = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Sn(a, t), xn(t), s & 4 && (Li(3, t, t.return), Zs(3, t), Li(5, t, t.return));
        break;
      case 1:
        Sn(a, t), xn(t), s & 512 && (Dt || r === null || Na(r, r.return)), s & 64 && ii && (t = t.updateQueue, t !== null && (s = t.callbacks, s !== null && (r = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = r === null ? s : r.concat(s))));
        break;
      case 26:
        var u = ba;
        if (Sn(a, t), xn(t), s & 512 && (Dt || r === null || Na(r, r.return)), s & 4) {
          var f = r !== null ? r.memoizedState : null;
          if (s = t.memoizedState, r === null)
            if (s === null)
              if (t.stateNode === null) {
                e: {
                  s = t.type, r = t.memoizedProps, u = u.ownerDocument || u;
                  t: switch (s) {
                    case "title":
                      f = u.getElementsByTagName("title")[0], (!f || f[vs] || f[rn] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = u.createElement(s), u.head.insertBefore(
                        f,
                        u.querySelector("head > title")
                      )), cn(f, s, r), f[rn] = t, Pt(f), s = f;
                      break e;
                    case "link":
                      var p = y2(
                        "link",
                        "href",
                        u
                      ).get(s + (r.href || ""));
                      if (p) {
                        for (var v = 0; v < p.length; v++)
                          if (f = p[v], f.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && f.getAttribute("rel") === (r.rel == null ? null : r.rel) && f.getAttribute("title") === (r.title == null ? null : r.title) && f.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                            p.splice(v, 1);
                            break t;
                          }
                      }
                      f = u.createElement(s), cn(f, s, r), u.head.appendChild(f);
                      break;
                    case "meta":
                      if (p = y2(
                        "meta",
                        "content",
                        u
                      ).get(s + (r.content || ""))) {
                        for (v = 0; v < p.length; v++)
                          if (f = p[v], f.getAttribute("content") === (r.content == null ? null : "" + r.content) && f.getAttribute("name") === (r.name == null ? null : r.name) && f.getAttribute("property") === (r.property == null ? null : r.property) && f.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && f.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                            p.splice(v, 1);
                            break t;
                          }
                      }
                      f = u.createElement(s), cn(f, s, r), u.head.appendChild(f);
                      break;
                    default:
                      throw Error(o(468, s));
                  }
                  f[rn] = t, Pt(f), s = f;
                }
                t.stateNode = s;
              } else
                b2(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = v2(
                u,
                s,
                t.memoizedProps
              );
          else
            f !== s ? (f === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : f.count--, s === null ? b2(
              u,
              t.type,
              t.stateNode
            ) : v2(
              u,
              s,
              t.memoizedProps
            )) : s === null && t.stateNode !== null && Bd(
              t,
              t.memoizedProps,
              r.memoizedProps
            );
        }
        break;
      case 27:
        Sn(a, t), xn(t), s & 512 && (Dt || r === null || Na(r, r.return)), r !== null && s & 4 && Bd(
          t,
          t.memoizedProps,
          r.memoizedProps
        );
        break;
      case 5:
        if (Sn(a, t), xn(t), s & 512 && (Dt || r === null || Na(r, r.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Pr(u, "");
          } catch (ie) {
            et(t, t.return, ie);
          }
        }
        s & 4 && t.stateNode != null && (u = t.memoizedProps, Bd(
          t,
          u,
          r !== null ? r.memoizedProps : u
        )), s & 1024 && (Id = !0);
        break;
      case 6:
        if (Sn(a, t), xn(t), s & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          s = t.memoizedProps, r = t.stateNode;
          try {
            r.nodeValue = s;
          } catch (ie) {
            et(t, t.return, ie);
          }
        }
        break;
      case 3:
        if (Qc = null, u = ba, ba = Kc(a.containerInfo), Sn(a, t), ba = u, xn(t), s & 4 && r !== null && r.memoizedState.isDehydrated)
          try {
            Ro(a.containerInfo);
          } catch (ie) {
            et(t, t.return, ie);
          }
        Id && (Id = !1, bm(t));
        break;
      case 4:
        s = ba, ba = Kc(
          t.stateNode.containerInfo
        ), Sn(a, t), xn(t), ba = s;
        break;
      case 12:
        Sn(a, t), xn(t);
        break;
      case 31:
        Sn(a, t), xn(t), s & 4 && (s = t.updateQueue, s !== null && (t.updateQueue = null, Cc(t, s)));
        break;
      case 13:
        Sn(a, t), xn(t), t.child.flags & 8192 && t.memoizedState !== null != (r !== null && r.memoizedState !== null) && (Mc = $()), s & 4 && (s = t.updateQueue, s !== null && (t.updateQueue = null, Cc(t, s)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var _ = r !== null && r.memoizedState !== null, O = ii, U = Dt;
        if (ii = O || u, Dt = U || _, Sn(a, t), Dt = U, ii = O, xn(t), s & 8192)
          e: for (a = t.stateNode, a._visibility = u ? a._visibility & -2 : a._visibility | 1, u && (r === null || _ || ii || Dt || br(t)), r = null, a = t; ; ) {
            if (a.tag === 5 || a.tag === 26) {
              if (r === null) {
                _ = r = a;
                try {
                  if (f = _.stateNode, u)
                    p = f.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    v = _.stateNode;
                    var G = _.memoizedProps.style, N = G != null && G.hasOwnProperty("display") ? G.display : null;
                    v.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (ie) {
                  et(_, _.return, ie);
                }
              }
            } else if (a.tag === 6) {
              if (r === null) {
                _ = a;
                try {
                  _.stateNode.nodeValue = u ? "" : _.memoizedProps;
                } catch (ie) {
                  et(_, _.return, ie);
                }
              }
            } else if (a.tag === 18) {
              if (r === null) {
                _ = a;
                try {
                  var C = _.stateNode;
                  u ? l2(C, !0) : l2(_.stateNode, !1);
                } catch (ie) {
                  et(_, _.return, ie);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === t) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === t) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === t) break e;
              r === a && (r = null), a = a.return;
            }
            r === a && (r = null), a.sibling.return = a.return, a = a.sibling;
          }
        s & 4 && (s = t.updateQueue, s !== null && (r = s.retryQueue, r !== null && (s.retryQueue = null, Cc(t, r))));
        break;
      case 19:
        Sn(a, t), xn(t), s & 4 && (s = t.updateQueue, s !== null && (t.updateQueue = null, Cc(t, s)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Sn(a, t), xn(t);
    }
  }
  function xn(t) {
    var a = t.flags;
    if (a & 2) {
      try {
        for (var r, s = t.return; s !== null; ) {
          if (um(s)) {
            r = s;
            break;
          }
          s = s.return;
        }
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var u = r.stateNode, f = Fd(t);
            Lc(t, f, u);
            break;
          case 5:
            var p = r.stateNode;
            r.flags & 32 && (Pr(p, ""), r.flags &= -33);
            var v = Fd(t);
            Lc(t, v, p);
            break;
          case 3:
          case 4:
            var _ = r.stateNode.containerInfo, O = Fd(t);
            Zd(
              t,
              O,
              _
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (U) {
        et(t, t.return, U);
      }
      t.flags &= -3;
    }
    a & 4096 && (t.flags &= -4097);
  }
  function bm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var a = t;
        bm(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), t = t.sibling;
      }
  }
  function oi(t, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        hm(t, a.alternate, a), a = a.sibling;
  }
  function br(t) {
    for (t = t.child; t !== null; ) {
      var a = t;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Li(4, a, a.return), br(a);
          break;
        case 1:
          Na(a, a.return);
          var r = a.stateNode;
          typeof r.componentWillUnmount == "function" && lm(
            a,
            a.return,
            r
          ), br(a);
          break;
        case 27:
          Ws(a.stateNode);
        case 26:
        case 5:
          Na(a, a.return), br(a);
          break;
        case 22:
          a.memoizedState === null && br(a);
          break;
        case 30:
          br(a);
          break;
        default:
          br(a);
      }
      t = t.sibling;
    }
  }
  function si(t, a, r) {
    for (r = r && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var s = a.alternate, u = t, f = a, p = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          si(
            u,
            f,
            r
          ), Zs(4, f);
          break;
        case 1:
          if (si(
            u,
            f,
            r
          ), s = f, u = s.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (O) {
              et(s, s.return, O);
            }
          if (s = f, u = s.updateQueue, u !== null) {
            var v = s.stateNode;
            try {
              var _ = u.shared.hiddenCallbacks;
              if (_ !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < _.length; u++)
                  $0(_[u], v);
            } catch (O) {
              et(s, s.return, O);
            }
          }
          r && p & 64 && sm(f), Is(f, f.return);
          break;
        case 27:
          fm(f);
        case 26:
        case 5:
          si(
            u,
            f,
            r
          ), r && s === null && p & 4 && cm(f), Is(f, f.return);
          break;
        case 12:
          si(
            u,
            f,
            r
          );
          break;
        case 31:
          si(
            u,
            f,
            r
          ), r && p & 4 && mm(u, f);
          break;
        case 13:
          si(
            u,
            f,
            r
          ), r && p & 4 && vm(u, f);
          break;
        case 22:
          f.memoizedState === null && si(
            u,
            f,
            r
          ), Is(f, f.return);
          break;
        case 30:
          break;
        default:
          si(
            u,
            f,
            r
          );
      }
      a = a.sibling;
    }
  }
  function qd(t, a) {
    var r = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), t = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (t = a.memoizedState.cachePool.pool), t !== r && (t != null && t.refCount++, r != null && zs(r));
  }
  function Yd(t, a) {
    t = null, a.alternate !== null && (t = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== t && (a.refCount++, t != null && zs(t));
  }
  function _a(t, a, r, s) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        _m(
          t,
          a,
          r,
          s
        ), a = a.sibling;
  }
  function _m(t, a, r, s) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        _a(
          t,
          a,
          r,
          s
        ), u & 2048 && Zs(9, a);
        break;
      case 1:
        _a(
          t,
          a,
          r,
          s
        );
        break;
      case 3:
        _a(
          t,
          a,
          r,
          s
        ), u & 2048 && (t = null, a.alternate !== null && (t = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== t && (a.refCount++, t != null && zs(t)));
        break;
      case 12:
        if (u & 2048) {
          _a(
            t,
            a,
            r,
            s
          ), t = a.stateNode;
          try {
            var f = a.memoizedProps, p = f.id, v = f.onPostCommit;
            typeof v == "function" && v(
              p,
              a.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (_) {
            et(a, a.return, _);
          }
        } else
          _a(
            t,
            a,
            r,
            s
          );
        break;
      case 31:
        _a(
          t,
          a,
          r,
          s
        );
        break;
      case 13:
        _a(
          t,
          a,
          r,
          s
        );
        break;
      case 23:
        break;
      case 22:
        f = a.stateNode, p = a.alternate, a.memoizedState !== null ? f._visibility & 2 ? _a(
          t,
          a,
          r,
          s
        ) : qs(t, a) : f._visibility & 2 ? _a(
          t,
          a,
          r,
          s
        ) : (f._visibility |= 2, yo(
          t,
          a,
          r,
          s,
          (a.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && qd(p, a);
        break;
      case 24:
        _a(
          t,
          a,
          r,
          s
        ), u & 2048 && Yd(a.alternate, a);
        break;
      default:
        _a(
          t,
          a,
          r,
          s
        );
    }
  }
  function yo(t, a, r, s, u) {
    for (u = u && ((a.subtreeFlags & 10256) !== 0 || !1), a = a.child; a !== null; ) {
      var f = t, p = a, v = r, _ = s, O = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          yo(
            f,
            p,
            v,
            _,
            u
          ), Zs(8, p);
          break;
        case 23:
          break;
        case 22:
          var U = p.stateNode;
          p.memoizedState !== null ? U._visibility & 2 ? yo(
            f,
            p,
            v,
            _,
            u
          ) : qs(
            f,
            p
          ) : (U._visibility |= 2, yo(
            f,
            p,
            v,
            _,
            u
          )), u && O & 2048 && qd(
            p.alternate,
            p
          );
          break;
        case 24:
          yo(
            f,
            p,
            v,
            _,
            u
          ), u && O & 2048 && Yd(p.alternate, p);
          break;
        default:
          yo(
            f,
            p,
            v,
            _,
            u
          );
      }
      a = a.sibling;
    }
  }
  function qs(t, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var r = t, s = a, u = s.flags;
        switch (s.tag) {
          case 22:
            qs(r, s), u & 2048 && qd(
              s.alternate,
              s
            );
            break;
          case 24:
            qs(r, s), u & 2048 && Yd(s.alternate, s);
            break;
          default:
            qs(r, s);
        }
        a = a.sibling;
      }
  }
  var Ys = 8192;
  function bo(t, a, r) {
    if (t.subtreeFlags & Ys)
      for (t = t.child; t !== null; )
        wm(
          t,
          a,
          r
        ), t = t.sibling;
  }
  function wm(t, a, r) {
    switch (t.tag) {
      case 26:
        bo(
          t,
          a,
          r
        ), t.flags & Ys && t.memoizedState !== null && S5(
          r,
          ba,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        bo(
          t,
          a,
          r
        );
        break;
      case 3:
      case 4:
        var s = ba;
        ba = Kc(t.stateNode.containerInfo), bo(
          t,
          a,
          r
        ), ba = s;
        break;
      case 22:
        t.memoizedState === null && (s = t.alternate, s !== null && s.memoizedState !== null ? (s = Ys, Ys = 16777216, bo(
          t,
          a,
          r
        ), Ys = s) : bo(
          t,
          a,
          r
        ));
        break;
      default:
        bo(
          t,
          a,
          r
        );
    }
  }
  function Am(t) {
    var a = t.alternate;
    if (a !== null && (t = a.child, t !== null)) {
      a.child = null;
      do
        a = t.sibling, t.sibling = null, t = a;
      while (t !== null);
    }
  }
  function Ks(t) {
    var a = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (a !== null)
        for (var r = 0; r < a.length; r++) {
          var s = a[r];
          Jt = s, Sm(
            s,
            t
          );
        }
      Am(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Em(t), t = t.sibling;
  }
  function Em(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ks(t), t.flags & 2048 && Li(9, t, t.return);
        break;
      case 3:
        Ks(t);
        break;
      case 12:
        Ks(t);
        break;
      case 22:
        var a = t.stateNode;
        t.memoizedState !== null && a._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (a._visibility &= -3, Dc(t)) : Ks(t);
        break;
      default:
        Ks(t);
    }
  }
  function Dc(t) {
    var a = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (a !== null)
        for (var r = 0; r < a.length; r++) {
          var s = a[r];
          Jt = s, Sm(
            s,
            t
          );
        }
      Am(t);
    }
    for (t = t.child; t !== null; ) {
      switch (a = t, a.tag) {
        case 0:
        case 11:
        case 15:
          Li(8, a, a.return), Dc(a);
          break;
        case 22:
          r = a.stateNode, r._visibility & 2 && (r._visibility &= -3, Dc(a));
          break;
        default:
          Dc(a);
      }
      t = t.sibling;
    }
  }
  function Sm(t, a) {
    for (; Jt !== null; ) {
      var r = Jt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Li(8, r, a);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var s = r.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          zs(r.memoizedState.cache);
      }
      if (s = r.child, s !== null) s.return = r, Jt = s;
      else
        e: for (r = t; Jt !== null; ) {
          s = Jt;
          var u = s.sibling, f = s.return;
          if (pm(s), s === r) {
            Jt = null;
            break e;
          }
          if (u !== null) {
            u.return = f, Jt = u;
            break e;
          }
          Jt = f;
        }
    }
  }
  var V6 = {
    getCacheForType: function(t) {
      var a = sn(Nt), r = a.data.get(t);
      return r === void 0 && (r = t(), a.data.set(t, r)), r;
    },
    cacheSignal: function() {
      return sn(Nt).controller.signal;
    }
  }, G6 = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, st = null, De = null, Ue = 0, We = 0, jn = null, Ci = !1, _o = !1, Kd = !1, li = 0, Et = 0, Di = 0, _r = 0, Xd = 0, Hn = 0, wo = 0, Xs = null, Tn = null, Qd = !1, Mc = 0, xm = 0, Uc = 1 / 0, jc = null, Mi = null, Bt = 0, Ui = null, Ao = null, ci = 0, $d = 0, Pd = null, Tm = null, Qs = 0, Jd = null;
  function Vn() {
    return (Qe & 2) !== 0 && Ue !== 0 ? Ue & -Ue : R.T !== null ? ih() : Fp();
  }
  function km() {
    if (Hn === 0)
      if ((Ue & 536870912) === 0 || He) {
        var t = ql;
        ql <<= 1, (ql & 3932160) === 0 && (ql = 262144), Hn = t;
      } else Hn = 536870912;
    return t = Mn.current, t !== null && (t.flags |= 32), Hn;
  }
  function kn(t, a, r) {
    (t === st && (We === 2 || We === 9) || t.cancelPendingCommit !== null) && (Eo(t, 0), ji(
      t,
      Ue,
      Hn,
      !1
    )), ms(t, r), ((Qe & 2) === 0 || t !== st) && (t === st && ((Qe & 2) === 0 && (_r |= r), Et === 4 && ji(
      t,
      Ue,
      Hn,
      !1
    )), La(t));
  }
  function Om(t, a, r) {
    if ((Qe & 6) !== 0) throw Error(o(327));
    var s = !r && (a & 127) === 0 && (a & t.expiredLanes) === 0 || gs(t, a), u = s ? Z6(t, a) : eh(t, a, !0), f = s;
    do {
      if (u === 0) {
        _o && !s && ji(t, a, 0, !1);
        break;
      } else {
        if (r = t.current.alternate, f && !B6(r)) {
          u = eh(t, a, !1), f = !1;
          continue;
        }
        if (u === 2) {
          if (f = a, t.errorRecoveryDisabledLanes & f)
            var p = 0;
          else
            p = t.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            a = p;
            e: {
              var v = t;
              u = Xs;
              var _ = v.current.memoizedState.isDehydrated;
              if (_ && (Eo(v, p).flags |= 256), p = eh(
                v,
                p,
                !1
              ), p !== 2) {
                if (Kd && !_) {
                  v.errorRecoveryDisabledLanes |= f, _r |= f, u = 4;
                  break e;
                }
                f = Tn, Tn = u, f !== null && (Tn === null ? Tn = f : Tn.push.apply(
                  Tn,
                  f
                ));
              }
              u = p;
            }
            if (f = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Eo(t, 0), ji(t, a, 0, !0);
          break;
        }
        e: {
          switch (s = t, f = u, f) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              ji(
                s,
                a,
                Hn,
                !Ci
              );
              break e;
            case 2:
              Tn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((a & 62914560) === a && (u = Mc + 300 - $(), 10 < u)) {
            if (ji(
              s,
              a,
              Hn,
              !Ci
            ), Kl(s, 0, !0) !== 0) break e;
            ci = a, s.timeoutHandle = r2(
              Rm.bind(
                null,
                s,
                r,
                Tn,
                jc,
                Qd,
                a,
                Hn,
                _r,
                wo,
                Ci,
                f,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          Rm(
            s,
            r,
            Tn,
            jc,
            Qd,
            a,
            Hn,
            _r,
            wo,
            Ci,
            f,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    La(t);
  }
  function Rm(t, a, r, s, u, f, p, v, _, O, U, G, N, C) {
    if (t.timeoutHandle = -1, G = a.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
      G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xa
      }, wm(
        a,
        f,
        G
      );
      var ie = (f & 62914560) === f ? Mc - $() : (f & 4194048) === f ? xm - $() : 0;
      if (ie = x5(
        G,
        ie
      ), ie !== null) {
        ci = f, t.cancelPendingCommit = ie(
          jm.bind(
            null,
            t,
            a,
            f,
            r,
            s,
            u,
            p,
            v,
            _,
            U,
            G,
            null,
            N,
            C
          )
        ), ji(t, f, p, !O);
        return;
      }
    }
    jm(
      t,
      a,
      f,
      r,
      s,
      u,
      p,
      v,
      _
    );
  }
  function B6(t) {
    for (var a = t; ; ) {
      var r = a.tag;
      if ((r === 0 || r === 11 || r === 15) && a.flags & 16384 && (r = a.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var s = 0; s < r.length; s++) {
          var u = r[s], f = u.getSnapshot;
          u = u.value;
          try {
            if (!Cn(f(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (r = a.child, a.subtreeFlags & 16384 && r !== null)
        r.return = a, a = r;
      else {
        if (a === t) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === t) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function ji(t, a, r, s) {
    a &= ~Xd, a &= ~_r, t.suspendedLanes |= a, t.pingedLanes &= ~a, s && (t.warmLanes |= a), s = t.expirationTimes;
    for (var u = a; 0 < u; ) {
      var f = 31 - pn(u), p = 1 << f;
      s[f] = -1, u &= ~p;
    }
    r !== 0 && Vp(t, r, a);
  }
  function Hc() {
    return (Qe & 6) === 0 ? ($s(0), !1) : !0;
  }
  function Wd() {
    if (De !== null) {
      if (We === 0)
        var t = De.return;
      else
        t = De, Ja = fr = null, gd(t), ho = null, Ls = 0, t = De;
      for (; t !== null; )
        om(t.alternate, t), t = t.return;
      De = null;
    }
  }
  function Eo(t, a) {
    var r = t.timeoutHandle;
    r !== -1 && (t.timeoutHandle = -1, s5(r)), r = t.cancelPendingCommit, r !== null && (t.cancelPendingCommit = null, r()), ci = 0, Wd(), st = t, De = r = $a(t.current, null), Ue = a, We = 0, jn = null, Ci = !1, _o = gs(t, a), Kd = !1, wo = Hn = Xd = _r = Di = Et = 0, Tn = Xs = null, Qd = !1, (a & 8) !== 0 && (a |= a & 32);
    var s = t.entangledLanes;
    if (s !== 0)
      for (t = t.entanglements, s &= a; 0 < s; ) {
        var u = 31 - pn(s), f = 1 << u;
        a |= t[u], s &= ~f;
      }
    return li = a, rc(), r;
  }
  function zm(t, a) {
    Re = null, R.H = Gs, a === fo || a === hc ? (a = Y0(), We = 3) : a === ad ? (a = Y0(), We = 4) : We = a === Nd ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, jn = a, De === null && (Et = 1, kc(
      t,
      na(a, t.current)
    ));
  }
  function Nm() {
    var t = Mn.current;
    return t === null ? !0 : (Ue & 4194048) === Ue ? oa === null : (Ue & 62914560) === Ue || (Ue & 536870912) !== 0 ? t === oa : !1;
  }
  function Lm() {
    var t = R.H;
    return R.H = Gs, t === null ? Gs : t;
  }
  function Cm() {
    var t = R.A;
    return R.A = V6, t;
  }
  function Vc() {
    Et = 4, Ci || (Ue & 4194048) !== Ue && Mn.current !== null || (_o = !0), (Di & 134217727) === 0 && (_r & 134217727) === 0 || st === null || ji(
      st,
      Ue,
      Hn,
      !1
    );
  }
  function eh(t, a, r) {
    var s = Qe;
    Qe |= 2;
    var u = Lm(), f = Cm();
    (st !== t || Ue !== a) && (jc = null, Eo(t, a)), a = !1;
    var p = Et;
    e: do
      try {
        if (We !== 0 && De !== null) {
          var v = De, _ = jn;
          switch (We) {
            case 8:
              Wd(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Mn.current === null && (a = !0);
              var O = We;
              if (We = 0, jn = null, So(t, v, _, O), r && _o) {
                p = 0;
                break e;
              }
              break;
            default:
              O = We, We = 0, jn = null, So(t, v, _, O);
          }
        }
        F6(), p = Et;
        break;
      } catch (U) {
        zm(t, U);
      }
    while (!0);
    return a && t.shellSuspendCounter++, Ja = fr = null, Qe = s, R.H = u, R.A = f, De === null && (st = null, Ue = 0, rc()), p;
  }
  function F6() {
    for (; De !== null; ) Dm(De);
  }
  function Z6(t, a) {
    var r = Qe;
    Qe |= 2;
    var s = Lm(), u = Cm();
    st !== t || Ue !== a ? (jc = null, Uc = $() + 500, Eo(t, a)) : _o = gs(
      t,
      a
    );
    e: do
      try {
        if (We !== 0 && De !== null) {
          a = De;
          var f = jn;
          t: switch (We) {
            case 1:
              We = 0, jn = null, So(t, a, f, 1);
              break;
            case 2:
            case 9:
              if (I0(f)) {
                We = 0, jn = null, Mm(a);
                break;
              }
              a = function() {
                We !== 2 && We !== 9 || st !== t || (We = 7), La(t);
              }, f.then(a, a);
              break e;
            case 3:
              We = 7;
              break e;
            case 4:
              We = 5;
              break e;
            case 7:
              I0(f) ? (We = 0, jn = null, Mm(a)) : (We = 0, jn = null, So(t, a, f, 7));
              break;
            case 5:
              var p = null;
              switch (De.tag) {
                case 26:
                  p = De.memoizedState;
                case 5:
                case 27:
                  var v = De;
                  if (p ? _2(p) : v.stateNode.complete) {
                    We = 0, jn = null;
                    var _ = v.sibling;
                    if (_ !== null) De = _;
                    else {
                      var O = v.return;
                      O !== null ? (De = O, Gc(O)) : De = null;
                    }
                    break t;
                  }
              }
              We = 0, jn = null, So(t, a, f, 5);
              break;
            case 6:
              We = 0, jn = null, So(t, a, f, 6);
              break;
            case 8:
              Wd(), Et = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        I6();
        break;
      } catch (U) {
        zm(t, U);
      }
    while (!0);
    return Ja = fr = null, R.H = s, R.A = u, Qe = r, De !== null ? 0 : (st = null, Ue = 0, rc(), Et);
  }
  function I6() {
    for (; De !== null && !z(); )
      Dm(De);
  }
  function Dm(t) {
    var a = im(t.alternate, t, li);
    t.memoizedProps = t.pendingProps, a === null ? Gc(t) : De = a;
  }
  function Mm(t) {
    var a = t, r = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = Jg(
          r,
          a,
          a.pendingProps,
          a.type,
          void 0,
          Ue
        );
        break;
      case 11:
        a = Jg(
          r,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          Ue
        );
        break;
      case 5:
        gd(a);
      default:
        om(r, a), a = De = C0(a, li), a = im(r, a, li);
    }
    t.memoizedProps = t.pendingProps, a === null ? Gc(t) : De = a;
  }
  function So(t, a, r, s) {
    Ja = fr = null, gd(a), ho = null, Ls = 0;
    var u = a.return;
    try {
      if (L6(
        t,
        u,
        a,
        r,
        Ue
      )) {
        Et = 1, kc(
          t,
          na(r, t.current)
        ), De = null;
        return;
      }
    } catch (f) {
      if (u !== null) throw De = u, f;
      Et = 1, kc(
        t,
        na(r, t.current)
      ), De = null;
      return;
    }
    a.flags & 32768 ? (He || s === 1 ? t = !0 : _o || (Ue & 536870912) !== 0 ? t = !1 : (Ci = t = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = Mn.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Um(a, t)) : Gc(a);
  }
  function Gc(t) {
    var a = t;
    do {
      if ((a.flags & 32768) !== 0) {
        Um(
          a,
          Ci
        );
        return;
      }
      t = a.return;
      var r = M6(
        a.alternate,
        a,
        li
      );
      if (r !== null) {
        De = r;
        return;
      }
      if (a = a.sibling, a !== null) {
        De = a;
        return;
      }
      De = a = t;
    } while (a !== null);
    Et === 0 && (Et = 5);
  }
  function Um(t, a) {
    do {
      var r = U6(t.alternate, t);
      if (r !== null) {
        r.flags &= 32767, De = r;
        return;
      }
      if (r = t.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !a && (t = t.sibling, t !== null)) {
        De = t;
        return;
      }
      De = t = r;
    } while (t !== null);
    Et = 6, De = null;
  }
  function jm(t, a, r, s, u, f, p, v, _) {
    t.cancelPendingCommit = null;
    do
      Bc();
    while (Bt !== 0);
    if ((Qe & 6) !== 0) throw Error(o(327));
    if (a !== null) {
      if (a === t.current) throw Error(o(177));
      if (f = a.lanes | a.childLanes, f |= Ff, E_(
        t,
        r,
        f,
        p,
        v,
        _
      ), t === st && (De = st = null, Ue = 0), Ao = a, Ui = t, ci = r, $d = f, Pd = u, Tm = s, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, X6(Be, function() {
        return Fm(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), s = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || s) {
        s = R.T, R.T = null, u = Y.p, Y.p = 2, p = Qe, Qe |= 4;
        try {
          j6(t, a, r);
        } finally {
          Qe = p, Y.p = u, R.T = s;
        }
      }
      Bt = 1, Hm(), Vm(), Gm();
    }
  }
  function Hm() {
    if (Bt === 1) {
      Bt = 0;
      var t = Ui, a = Ao, r = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || r) {
        r = R.T, R.T = null;
        var s = Y.p;
        Y.p = 2;
        var u = Qe;
        Qe |= 4;
        try {
          ym(a, t);
          var f = dh, p = S0(t.containerInfo), v = f.focusedElem, _ = f.selectionRange;
          if (p !== v && v && v.ownerDocument && E0(
            v.ownerDocument.documentElement,
            v
          )) {
            if (_ !== null && jf(v)) {
              var O = _.start, U = _.end;
              if (U === void 0 && (U = O), "selectionStart" in v)
                v.selectionStart = O, v.selectionEnd = Math.min(
                  U,
                  v.value.length
                );
              else {
                var G = v.ownerDocument || document, N = G && G.defaultView || window;
                if (N.getSelection) {
                  var C = N.getSelection(), ie = v.textContent.length, we = Math.min(_.start, ie), rt = _.end === void 0 ? we : Math.min(_.end, ie);
                  !C.extend && we > rt && (p = rt, rt = we, we = p);
                  var T = A0(
                    v,
                    we
                  ), S = A0(
                    v,
                    rt
                  );
                  if (T && S && (C.rangeCount !== 1 || C.anchorNode !== T.node || C.anchorOffset !== T.offset || C.focusNode !== S.node || C.focusOffset !== S.offset)) {
                    var k = G.createRange();
                    k.setStart(T.node, T.offset), C.removeAllRanges(), we > rt ? (C.addRange(k), C.extend(S.node, S.offset)) : (k.setEnd(S.node, S.offset), C.addRange(k));
                  }
                }
              }
            }
            for (G = [], C = v; C = C.parentNode; )
              C.nodeType === 1 && G.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < G.length; v++) {
              var H = G[v];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Wc = !!fh, dh = fh = null;
        } finally {
          Qe = u, Y.p = s, R.T = r;
        }
      }
      t.current = a, Bt = 2;
    }
  }
  function Vm() {
    if (Bt === 2) {
      Bt = 0;
      var t = Ui, a = Ao, r = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || r) {
        r = R.T, R.T = null;
        var s = Y.p;
        Y.p = 2;
        var u = Qe;
        Qe |= 4;
        try {
          hm(t, a.alternate, a);
        } finally {
          Qe = u, Y.p = s, R.T = r;
        }
      }
      Bt = 3;
    }
  }
  function Gm() {
    if (Bt === 4 || Bt === 3) {
      Bt = 0, M();
      var t = Ui, a = Ao, r = ci, s = Tm;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? Bt = 5 : (Bt = 0, Ao = Ui = null, Bm(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Mi = null), yf(r), a = a.stateNode, an && typeof an.onCommitFiberRoot == "function")
        try {
          an.onCommitFiberRoot(
            nr,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        a = R.T, u = Y.p, Y.p = 2, R.T = null;
        try {
          for (var f = t.onRecoverableError, p = 0; p < s.length; p++) {
            var v = s[p];
            f(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          R.T = a, Y.p = u;
        }
      }
      (ci & 3) !== 0 && Bc(), La(t), u = t.pendingLanes, (r & 261930) !== 0 && (u & 42) !== 0 ? t === Jd ? Qs++ : (Qs = 0, Jd = t) : Qs = 0, $s(0);
    }
  }
  function Bm(t, a) {
    (t.pooledCacheLanes &= a) === 0 && (a = t.pooledCache, a != null && (t.pooledCache = null, zs(a)));
  }
  function Bc() {
    return Hm(), Vm(), Gm(), Fm();
  }
  function Fm() {
    if (Bt !== 5) return !1;
    var t = Ui, a = $d;
    $d = 0;
    var r = yf(ci), s = R.T, u = Y.p;
    try {
      Y.p = 32 > r ? 32 : r, R.T = null, r = Pd, Pd = null;
      var f = Ui, p = ci;
      if (Bt = 0, Ao = Ui = null, ci = 0, (Qe & 6) !== 0) throw Error(o(331));
      var v = Qe;
      if (Qe |= 4, Em(f.current), _m(
        f,
        f.current,
        p,
        r
      ), Qe = v, $s(0, !1), an && typeof an.onPostCommitFiberRoot == "function")
        try {
          an.onPostCommitFiberRoot(nr, f);
        } catch {
        }
      return !0;
    } finally {
      Y.p = u, R.T = s, Bm(t, a);
    }
  }
  function Zm(t, a, r) {
    a = na(r, a), a = zd(t.stateNode, a, 2), t = Ri(t, a, 2), t !== null && (ms(t, 2), La(t));
  }
  function et(t, a, r) {
    if (t.tag === 3)
      Zm(t, t, r);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Zm(
            a,
            t,
            r
          );
          break;
        } else if (a.tag === 1) {
          var s = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Mi === null || !Mi.has(s))) {
            t = na(r, t), r = Ig(2), s = Ri(a, r, 2), s !== null && (qg(
              r,
              s,
              a,
              t
            ), ms(s, 2), La(s));
            break;
          }
        }
        a = a.return;
      }
  }
  function th(t, a, r) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new G6();
      var u = /* @__PURE__ */ new Set();
      s.set(a, u);
    } else
      u = s.get(a), u === void 0 && (u = /* @__PURE__ */ new Set(), s.set(a, u));
    u.has(r) || (Kd = !0, u.add(r), t = q6.bind(null, t, a, r), a.then(t, t));
  }
  function q6(t, a, r) {
    var s = t.pingCache;
    s !== null && s.delete(a), t.pingedLanes |= t.suspendedLanes & r, t.warmLanes &= ~r, st === t && (Ue & r) === r && (Et === 4 || Et === 3 && (Ue & 62914560) === Ue && 300 > $() - Mc ? (Qe & 2) === 0 && Eo(t, 0) : Xd |= r, wo === Ue && (wo = 0)), La(t);
  }
  function Im(t, a) {
    a === 0 && (a = Hp()), t = lr(t, a), t !== null && (ms(t, a), La(t));
  }
  function Y6(t) {
    var a = t.memoizedState, r = 0;
    a !== null && (r = a.retryLane), Im(t, r);
  }
  function K6(t, a) {
    var r = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var s = t.stateNode, u = t.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      case 22:
        s = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    s !== null && s.delete(a), Im(t, r);
  }
  function X6(t, a) {
    return Ir(t, a);
  }
  var Fc = null, xo = null, nh = !1, Zc = !1, ah = !1, Hi = 0;
  function La(t) {
    t !== xo && t.next === null && (xo === null ? Fc = xo = t : xo = xo.next = t), Zc = !0, nh || (nh = !0, $6());
  }
  function $s(t, a) {
    if (!ah && Zc) {
      ah = !0;
      do
        for (var r = !1, s = Fc; s !== null; ) {
          if (t !== 0) {
            var u = s.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var p = s.suspendedLanes, v = s.pingedLanes;
              f = (1 << 31 - pn(42 | t) + 1) - 1, f &= u & ~(p & ~v), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (r = !0, Xm(s, f));
          } else
            f = Ue, f = Kl(
              s,
              s === st ? f : 0,
              s.cancelPendingCommit !== null || s.timeoutHandle !== -1
            ), (f & 3) === 0 || gs(s, f) || (r = !0, Xm(s, f));
          s = s.next;
        }
      while (r);
      ah = !1;
    }
  }
  function Q6() {
    qm();
  }
  function qm() {
    Zc = nh = !1;
    var t = 0;
    Hi !== 0 && o5() && (t = Hi);
    for (var a = $(), r = null, s = Fc; s !== null; ) {
      var u = s.next, f = Ym(s, a);
      f === 0 ? (s.next = null, r === null ? Fc = u : r.next = u, u === null && (xo = r)) : (r = s, (t !== 0 || (f & 3) !== 0) && (Zc = !0)), s = u;
    }
    Bt !== 0 && Bt !== 5 || $s(t), Hi !== 0 && (Hi = 0);
  }
  function Ym(t, a) {
    for (var r = t.suspendedLanes, s = t.pingedLanes, u = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
      var p = 31 - pn(f), v = 1 << p, _ = u[p];
      _ === -1 ? ((v & r) === 0 || (v & s) !== 0) && (u[p] = A_(v, a)) : _ <= a && (t.expiredLanes |= v), f &= ~v;
    }
    if (a = st, r = Ue, r = Kl(
      t,
      t === a ? r : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), s = t.callbackNode, r === 0 || t === a && (We === 2 || We === 9) || t.cancelPendingCommit !== null)
      return s !== null && s !== null && w(s), t.callbackNode = null, t.callbackPriority = 0;
    if ((r & 3) === 0 || gs(t, r)) {
      if (a = r & -r, a === t.callbackPriority) return a;
      switch (s !== null && w(s), yf(r)) {
        case 2:
        case 8:
          r = pe;
          break;
        case 32:
          r = Be;
          break;
        case 268435456:
          r = $t;
          break;
        default:
          r = Be;
      }
      return s = Km.bind(null, t), r = Ir(r, s), t.callbackPriority = a, t.callbackNode = r, a;
    }
    return s !== null && s !== null && w(s), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Km(t, a) {
    if (Bt !== 0 && Bt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var r = t.callbackNode;
    if (Bc() && t.callbackNode !== r)
      return null;
    var s = Ue;
    return s = Kl(
      t,
      t === st ? s : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), s === 0 ? null : (Om(t, s, a), Ym(t, $()), t.callbackNode != null && t.callbackNode === r ? Km.bind(null, t) : null);
  }
  function Xm(t, a) {
    if (Bc()) return null;
    Om(t, a, !0);
  }
  function $6() {
    l5(function() {
      (Qe & 6) !== 0 ? Ir(
        X,
        Q6
      ) : qm();
    });
  }
  function ih() {
    if (Hi === 0) {
      var t = co;
      t === 0 && (t = Il, Il <<= 1, (Il & 261888) === 0 && (Il = 256)), Hi = t;
    }
    return Hi;
  }
  function Qm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Pl("" + t);
  }
  function $m(t, a) {
    var r = a.ownerDocument.createElement("input");
    return r.name = a.name, r.value = a.value, t.id && r.setAttribute("form", t.id), a.parentNode.insertBefore(r, a), t = new FormData(t), r.parentNode.removeChild(r), t;
  }
  function P6(t, a, r, s, u) {
    if (a === "submit" && r && r.stateNode === u) {
      var f = Qm(
        (u[wn] || null).action
      ), p = s.submitter;
      p && (a = (a = p[wn] || null) ? Qm(a.formAction) : p.getAttribute("formAction"), a !== null && (f = a, p = null));
      var v = new tc(
        "action",
        "action",
        null,
        s,
        u
      );
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (s.defaultPrevented) {
                if (Hi !== 0) {
                  var _ = p ? $m(u, p) : new FormData(u);
                  Sd(
                    r,
                    {
                      pending: !0,
                      data: _,
                      method: u.method,
                      action: f
                    },
                    null,
                    _
                  );
                }
              } else
                typeof f == "function" && (v.preventDefault(), _ = p ? $m(u, p) : new FormData(u), Sd(
                  r,
                  {
                    pending: !0,
                    data: _,
                    method: u.method,
                    action: f
                  },
                  f,
                  _
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var rh = 0; rh < Bf.length; rh++) {
    var oh = Bf[rh], J6 = oh.toLowerCase(), W6 = oh[0].toUpperCase() + oh.slice(1);
    ya(
      J6,
      "on" + W6
    );
  }
  ya(k0, "onAnimationEnd"), ya(O0, "onAnimationIteration"), ya(R0, "onAnimationStart"), ya("dblclick", "onDoubleClick"), ya("focusin", "onFocus"), ya("focusout", "onBlur"), ya(g6, "onTransitionRun"), ya(m6, "onTransitionStart"), ya(v6, "onTransitionCancel"), ya(z0, "onTransitionEnd"), Qr("onMouseEnter", ["mouseout", "mouseover"]), Qr("onMouseLeave", ["mouseout", "mouseover"]), Qr("onPointerEnter", ["pointerout", "pointerover"]), Qr("onPointerLeave", ["pointerout", "pointerover"]), ir(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ir(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ir("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ir(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ir(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ir(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), e5 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ps)
  );
  function Pm(t, a) {
    a = (a & 4) !== 0;
    for (var r = 0; r < t.length; r++) {
      var s = t[r], u = s.event;
      s = s.listeners;
      e: {
        var f = void 0;
        if (a)
          for (var p = s.length - 1; 0 <= p; p--) {
            var v = s[p], _ = v.instance, O = v.currentTarget;
            if (v = v.listener, _ !== f && u.isPropagationStopped())
              break e;
            f = v, u.currentTarget = O;
            try {
              f(u);
            } catch (U) {
              ic(U);
            }
            u.currentTarget = null, f = _;
          }
        else
          for (p = 0; p < s.length; p++) {
            if (v = s[p], _ = v.instance, O = v.currentTarget, v = v.listener, _ !== f && u.isPropagationStopped())
              break e;
            f = v, u.currentTarget = O;
            try {
              f(u);
            } catch (U) {
              ic(U);
            }
            u.currentTarget = null, f = _;
          }
      }
    }
  }
  function Me(t, a) {
    var r = a[bf];
    r === void 0 && (r = a[bf] = /* @__PURE__ */ new Set());
    var s = t + "__bubble";
    r.has(s) || (Jm(a, t, 2, !1), r.add(s));
  }
  function sh(t, a, r) {
    var s = 0;
    a && (s |= 4), Jm(
      r,
      t,
      s,
      a
    );
  }
  var Ic = "_reactListening" + Math.random().toString(36).slice(2);
  function lh(t) {
    if (!t[Ic]) {
      t[Ic] = !0, qp.forEach(function(r) {
        r !== "selectionchange" && (e5.has(r) || sh(r, !1, t), sh(r, !0, t));
      });
      var a = t.nodeType === 9 ? t : t.ownerDocument;
      a === null || a[Ic] || (a[Ic] = !0, sh("selectionchange", !1, a));
    }
  }
  function Jm(t, a, r, s) {
    switch (k2(a)) {
      case 2:
        var u = O5;
        break;
      case 8:
        u = R5;
        break;
      default:
        u = Eh;
    }
    r = u.bind(
      null,
      a,
      r,
      t
    ), u = void 0, !Of || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (u = !0), s ? u !== void 0 ? t.addEventListener(a, r, {
      capture: !0,
      passive: u
    }) : t.addEventListener(a, r, !0) : u !== void 0 ? t.addEventListener(a, r, {
      passive: u
    }) : t.addEventListener(a, r, !1);
  }
  function ch(t, a, r, s, u) {
    var f = s;
    if ((a & 1) === 0 && (a & 2) === 0 && s !== null)
      e: for (; ; ) {
        if (s === null) return;
        var p = s.tag;
        if (p === 3 || p === 4) {
          var v = s.stateNode.containerInfo;
          if (v === u) break;
          if (p === 4)
            for (p = s.return; p !== null; ) {
              var _ = p.tag;
              if ((_ === 3 || _ === 4) && p.stateNode.containerInfo === u)
                return;
              p = p.return;
            }
          for (; v !== null; ) {
            if (p = Yr(v), p === null) return;
            if (_ = p.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
              s = f = p;
              continue e;
            }
            v = v.parentNode;
          }
        }
        s = s.return;
      }
    a0(function() {
      var O = f, U = Tf(r), G = [];
      e: {
        var N = N0.get(t);
        if (N !== void 0) {
          var C = tc, ie = t;
          switch (t) {
            case "keypress":
              if (Wl(r) === 0) break e;
            case "keydown":
            case "keyup":
              C = K_;
              break;
            case "focusin":
              ie = "focus", C = Lf;
              break;
            case "focusout":
              ie = "blur", C = Lf;
              break;
            case "beforeblur":
            case "afterblur":
              C = Lf;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = o0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = M_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = $_;
              break;
            case k0:
            case O0:
            case R0:
              C = H_;
              break;
            case z0:
              C = J_;
              break;
            case "scroll":
            case "scrollend":
              C = C_;
              break;
            case "wheel":
              C = e6;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = G_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = l0;
              break;
            case "toggle":
            case "beforetoggle":
              C = n6;
          }
          var we = (a & 4) !== 0, rt = !we && (t === "scroll" || t === "scrollend"), T = we ? N !== null ? N + "Capture" : null : N;
          we = [];
          for (var S = O, k; S !== null; ) {
            var H = S;
            if (k = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || k === null || T === null || (H = bs(S, T), H != null && we.push(
              Js(S, H, k)
            )), rt) break;
            S = S.return;
          }
          0 < we.length && (N = new C(
            N,
            ie,
            null,
            r,
            U
          ), G.push({ event: N, listeners: we }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (N = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", N && r !== xf && (ie = r.relatedTarget || r.fromElement) && (Yr(ie) || ie[qr]))
            break e;
          if ((C || N) && (N = U.window === U ? U : (N = U.ownerDocument) ? N.defaultView || N.parentWindow : window, C ? (ie = r.relatedTarget || r.toElement, C = O, ie = ie ? Yr(ie) : null, ie !== null && (rt = c(ie), we = ie.tag, ie !== rt || we !== 5 && we !== 27 && we !== 6) && (ie = null)) : (C = null, ie = O), C !== ie)) {
            if (we = o0, H = "onMouseLeave", T = "onMouseEnter", S = "mouse", (t === "pointerout" || t === "pointerover") && (we = l0, H = "onPointerLeave", T = "onPointerEnter", S = "pointer"), rt = C == null ? N : ys(C), k = ie == null ? N : ys(ie), N = new we(
              H,
              S + "leave",
              C,
              r,
              U
            ), N.target = rt, N.relatedTarget = k, H = null, Yr(U) === O && (we = new we(
              T,
              S + "enter",
              ie,
              r,
              U
            ), we.target = k, we.relatedTarget = rt, H = we), rt = H, C && ie)
              t: {
                for (we = t5, T = C, S = ie, k = 0, H = T; H; H = we(H))
                  k++;
                H = 0;
                for (var me = S; me; me = we(me))
                  H++;
                for (; 0 < k - H; )
                  T = we(T), k--;
                for (; 0 < H - k; )
                  S = we(S), H--;
                for (; k--; ) {
                  if (T === S || S !== null && T === S.alternate) {
                    we = T;
                    break t;
                  }
                  T = we(T), S = we(S);
                }
                we = null;
              }
            else we = null;
            C !== null && Wm(
              G,
              N,
              C,
              we,
              !1
            ), ie !== null && rt !== null && Wm(
              G,
              rt,
              ie,
              we,
              !0
            );
          }
        }
        e: {
          if (N = O ? ys(O) : window, C = N.nodeName && N.nodeName.toLowerCase(), C === "select" || C === "input" && N.type === "file")
            var Ie = m0;
          else if (p0(N))
            if (v0)
              Ie = d6;
            else {
              Ie = u6;
              var fe = c6;
            }
          else
            C = N.nodeName, !C || C.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? O && Sf(O.elementType) && (Ie = m0) : Ie = f6;
          if (Ie && (Ie = Ie(t, O))) {
            g0(
              G,
              Ie,
              r,
              U
            );
            break e;
          }
          fe && fe(t, N, O), t === "focusout" && O && N.type === "number" && O.memoizedProps.value != null && Ef(N, "number", N.value);
        }
        switch (fe = O ? ys(O) : window, t) {
          case "focusin":
            (p0(fe) || fe.contentEditable === "true") && (to = fe, Hf = O, ks = null);
            break;
          case "focusout":
            ks = Hf = to = null;
            break;
          case "mousedown":
            Vf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Vf = !1, x0(G, r, U);
            break;
          case "selectionchange":
            if (p6) break;
          case "keydown":
          case "keyup":
            x0(G, r, U);
        }
        var ze;
        if (Df)
          e: {
            switch (t) {
              case "compositionstart":
                var je = "onCompositionStart";
                break e;
              case "compositionend":
                je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                je = "onCompositionUpdate";
                break e;
            }
            je = void 0;
          }
        else
          eo ? d0(t, r) && (je = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (je = "onCompositionStart");
        je && (c0 && r.locale !== "ko" && (eo || je !== "onCompositionStart" ? je === "onCompositionEnd" && eo && (ze = i0()) : (Ai = U, Rf = "value" in Ai ? Ai.value : Ai.textContent, eo = !0)), fe = qc(O, je), 0 < fe.length && (je = new s0(
          je,
          t,
          null,
          r,
          U
        ), G.push({ event: je, listeners: fe }), ze ? je.data = ze : (ze = h0(r), ze !== null && (je.data = ze)))), (ze = i6 ? r6(t, r) : o6(t, r)) && (je = qc(O, "onBeforeInput"), 0 < je.length && (fe = new s0(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          U
        ), G.push({
          event: fe,
          listeners: je
        }), fe.data = ze)), P6(
          G,
          t,
          O,
          r,
          U
        );
      }
      Pm(G, a);
    });
  }
  function Js(t, a, r) {
    return {
      instance: t,
      listener: a,
      currentTarget: r
    };
  }
  function qc(t, a) {
    for (var r = a + "Capture", s = []; t !== null; ) {
      var u = t, f = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || f === null || (u = bs(t, r), u != null && s.unshift(
        Js(t, u, f)
      ), u = bs(t, a), u != null && s.push(
        Js(t, u, f)
      )), t.tag === 3) return s;
      t = t.return;
    }
    return [];
  }
  function t5(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Wm(t, a, r, s, u) {
    for (var f = a._reactName, p = []; r !== null && r !== s; ) {
      var v = r, _ = v.alternate, O = v.stateNode;
      if (v = v.tag, _ !== null && _ === s) break;
      v !== 5 && v !== 26 && v !== 27 || O === null || (_ = O, u ? (O = bs(r, f), O != null && p.unshift(
        Js(r, O, _)
      )) : u || (O = bs(r, f), O != null && p.push(
        Js(r, O, _)
      ))), r = r.return;
    }
    p.length !== 0 && t.push({ event: a, listeners: p });
  }
  var n5 = /\r\n?/g, a5 = /\u0000|\uFFFD/g;
  function e2(t) {
    return (typeof t == "string" ? t : "" + t).replace(n5, `
`).replace(a5, "");
  }
  function t2(t, a) {
    return a = e2(a), e2(t) === a;
  }
  function it(t, a, r, s, u, f) {
    switch (r) {
      case "children":
        typeof s == "string" ? a === "body" || a === "textarea" && s === "" || Pr(t, s) : (typeof s == "number" || typeof s == "bigint") && a !== "body" && Pr(t, "" + s);
        break;
      case "className":
        Ql(t, "class", s);
        break;
      case "tabIndex":
        Ql(t, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ql(t, r, s);
        break;
      case "style":
        t0(t, s, f);
        break;
      case "data":
        if (a !== "object") {
          Ql(t, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (a !== "a" || r !== "href")) {
          t.removeAttribute(r);
          break;
        }
        if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(r);
          break;
        }
        s = Pl("" + s), t.setAttribute(r, s);
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          t.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (r === "formAction" ? (a !== "input" && it(t, a, "name", u.name, u, null), it(
            t,
            a,
            "formEncType",
            u.formEncType,
            u,
            null
          ), it(
            t,
            a,
            "formMethod",
            u.formMethod,
            u,
            null
          ), it(
            t,
            a,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (it(t, a, "encType", u.encType, u, null), it(t, a, "method", u.method, u, null), it(t, a, "target", u.target, u, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(r);
          break;
        }
        s = Pl("" + s), t.setAttribute(r, s);
        break;
      case "onClick":
        s != null && (t.onclick = Xa);
        break;
      case "onScroll":
        s != null && Me("scroll", t);
        break;
      case "onScrollEnd":
        s != null && Me("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(o(61));
          if (r = s.__html, r != null) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = r;
          }
        }
        break;
      case "multiple":
        t.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        t.muted = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        r = Pl("" + s), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          r
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol" ? t.setAttribute(r, "" + s) : t.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol" ? t.setAttribute(r, "") : t.removeAttribute(r);
        break;
      case "capture":
      case "download":
        s === !0 ? t.setAttribute(r, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? t.setAttribute(r, s) : t.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? t.setAttribute(r, s) : t.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? t.removeAttribute(r) : t.setAttribute(r, s);
        break;
      case "popover":
        Me("beforetoggle", t), Me("toggle", t), Xl(t, "popover", s);
        break;
      case "xlinkActuate":
        Ka(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          s
        );
        break;
      case "xlinkArcrole":
        Ka(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          s
        );
        break;
      case "xlinkRole":
        Ka(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          s
        );
        break;
      case "xlinkShow":
        Ka(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          s
        );
        break;
      case "xlinkTitle":
        Ka(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          s
        );
        break;
      case "xlinkType":
        Ka(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          s
        );
        break;
      case "xmlBase":
        Ka(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          s
        );
        break;
      case "xmlLang":
        Ka(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          s
        );
        break;
      case "xmlSpace":
        Ka(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          s
        );
        break;
      case "is":
        Xl(t, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = N_.get(r) || r, Xl(t, r, s));
    }
  }
  function uh(t, a, r, s, u, f) {
    switch (r) {
      case "style":
        t0(t, s, f);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(o(61));
          if (r = s.__html, r != null) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof s == "string" ? Pr(t, s) : (typeof s == "number" || typeof s == "bigint") && Pr(t, "" + s);
        break;
      case "onScroll":
        s != null && Me("scroll", t);
        break;
      case "onScrollEnd":
        s != null && Me("scrollend", t);
        break;
      case "onClick":
        s != null && (t.onclick = Xa);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Yp.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (u = r.endsWith("Capture"), a = r.slice(2, u ? r.length - 7 : void 0), f = t[wn] || null, f = f != null ? f[r] : null, typeof f == "function" && t.removeEventListener(a, f, u), typeof s == "function")) {
              typeof f != "function" && f !== null && (r in t ? t[r] = null : t.hasAttribute(r) && t.removeAttribute(r)), t.addEventListener(a, s, u);
              break e;
            }
            r in t ? t[r] = s : s === !0 ? t.setAttribute(r, "") : Xl(t, r, s);
          }
    }
  }
  function cn(t, a, r) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Me("error", t), Me("load", t);
        var s = !1, u = !1, f;
        for (f in r)
          if (r.hasOwnProperty(f)) {
            var p = r[f];
            if (p != null)
              switch (f) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, a));
                default:
                  it(t, a, f, p, r, null);
              }
          }
        u && it(t, a, "srcSet", r.srcSet, r, null), s && it(t, a, "src", r.src, r, null);
        return;
      case "input":
        Me("invalid", t);
        var v = f = p = u = null, _ = null, O = null;
        for (s in r)
          if (r.hasOwnProperty(s)) {
            var U = r[s];
            if (U != null)
              switch (s) {
                case "name":
                  u = U;
                  break;
                case "type":
                  p = U;
                  break;
                case "checked":
                  _ = U;
                  break;
                case "defaultChecked":
                  O = U;
                  break;
                case "value":
                  f = U;
                  break;
                case "defaultValue":
                  v = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(o(137, a));
                  break;
                default:
                  it(t, a, s, U, r, null);
              }
          }
        Pp(
          t,
          f,
          v,
          _,
          O,
          p,
          u,
          !1
        );
        return;
      case "select":
        Me("invalid", t), s = p = f = null;
        for (u in r)
          if (r.hasOwnProperty(u) && (v = r[u], v != null))
            switch (u) {
              case "value":
                f = v;
                break;
              case "defaultValue":
                p = v;
                break;
              case "multiple":
                s = v;
              default:
                it(t, a, u, v, r, null);
            }
        a = f, r = p, t.multiple = !!s, a != null ? $r(t, !!s, a, !1) : r != null && $r(t, !!s, r, !0);
        return;
      case "textarea":
        Me("invalid", t), f = u = s = null;
        for (p in r)
          if (r.hasOwnProperty(p) && (v = r[p], v != null))
            switch (p) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                u = v;
                break;
              case "children":
                f = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(o(91));
                break;
              default:
                it(t, a, p, v, r, null);
            }
        Wp(t, s, u, f);
        return;
      case "option":
        for (_ in r)
          r.hasOwnProperty(_) && (s = r[_], s != null) && (_ === "selected" ? t.selected = s && typeof s != "function" && typeof s != "symbol" : it(t, a, _, s, r, null));
        return;
      case "dialog":
        Me("beforetoggle", t), Me("toggle", t), Me("cancel", t), Me("close", t);
        break;
      case "iframe":
      case "object":
        Me("load", t);
        break;
      case "video":
      case "audio":
        for (s = 0; s < Ps.length; s++)
          Me(Ps[s], t);
        break;
      case "image":
        Me("error", t), Me("load", t);
        break;
      case "details":
        Me("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Me("error", t), Me("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in r)
          if (r.hasOwnProperty(O) && (s = r[O], s != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, a));
              default:
                it(t, a, O, s, r, null);
            }
        return;
      default:
        if (Sf(a)) {
          for (U in r)
            r.hasOwnProperty(U) && (s = r[U], s !== void 0 && uh(
              t,
              a,
              U,
              s,
              r,
              void 0
            ));
          return;
        }
    }
    for (v in r)
      r.hasOwnProperty(v) && (s = r[v], s != null && it(t, a, v, s, r, null));
  }
  function i5(t, a, r, s) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, f = null, p = null, v = null, _ = null, O = null, U = null;
        for (C in r) {
          var G = r[C];
          if (r.hasOwnProperty(C) && G != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = G;
              default:
                s.hasOwnProperty(C) || it(t, a, C, null, s, G);
            }
        }
        for (var N in s) {
          var C = s[N];
          if (G = r[N], s.hasOwnProperty(N) && (C != null || G != null))
            switch (N) {
              case "type":
                f = C;
                break;
              case "name":
                u = C;
                break;
              case "checked":
                O = C;
                break;
              case "defaultChecked":
                U = C;
                break;
              case "value":
                p = C;
                break;
              case "defaultValue":
                v = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(o(137, a));
                break;
              default:
                C !== G && it(
                  t,
                  a,
                  N,
                  C,
                  s,
                  G
                );
            }
        }
        Af(
          t,
          p,
          v,
          _,
          O,
          U,
          f,
          u
        );
        return;
      case "select":
        C = p = v = N = null;
        for (f in r)
          if (_ = r[f], r.hasOwnProperty(f) && _ != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                C = _;
              default:
                s.hasOwnProperty(f) || it(
                  t,
                  a,
                  f,
                  null,
                  s,
                  _
                );
            }
        for (u in s)
          if (f = s[u], _ = r[u], s.hasOwnProperty(u) && (f != null || _ != null))
            switch (u) {
              case "value":
                N = f;
                break;
              case "defaultValue":
                v = f;
                break;
              case "multiple":
                p = f;
              default:
                f !== _ && it(
                  t,
                  a,
                  u,
                  f,
                  s,
                  _
                );
            }
        a = v, r = p, s = C, N != null ? $r(t, !!r, N, !1) : !!s != !!r && (a != null ? $r(t, !!r, a, !0) : $r(t, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        C = N = null;
        for (v in r)
          if (u = r[v], r.hasOwnProperty(v) && u != null && !s.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                it(t, a, v, null, s, u);
            }
        for (p in s)
          if (u = s[p], f = r[p], s.hasOwnProperty(p) && (u != null || f != null))
            switch (p) {
              case "value":
                N = u;
                break;
              case "defaultValue":
                C = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== f && it(t, a, p, u, s, f);
            }
        Jp(t, N, C);
        return;
      case "option":
        for (var ie in r)
          N = r[ie], r.hasOwnProperty(ie) && N != null && !s.hasOwnProperty(ie) && (ie === "selected" ? t.selected = !1 : it(
            t,
            a,
            ie,
            null,
            s,
            N
          ));
        for (_ in s)
          N = s[_], C = r[_], s.hasOwnProperty(_) && N !== C && (N != null || C != null) && (_ === "selected" ? t.selected = N && typeof N != "function" && typeof N != "symbol" : it(
            t,
            a,
            _,
            N,
            s,
            C
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var we in r)
          N = r[we], r.hasOwnProperty(we) && N != null && !s.hasOwnProperty(we) && it(t, a, we, null, s, N);
        for (O in s)
          if (N = s[O], C = r[O], s.hasOwnProperty(O) && N !== C && (N != null || C != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(o(137, a));
                break;
              default:
                it(
                  t,
                  a,
                  O,
                  N,
                  s,
                  C
                );
            }
        return;
      default:
        if (Sf(a)) {
          for (var rt in r)
            N = r[rt], r.hasOwnProperty(rt) && N !== void 0 && !s.hasOwnProperty(rt) && uh(
              t,
              a,
              rt,
              void 0,
              s,
              N
            );
          for (U in s)
            N = s[U], C = r[U], !s.hasOwnProperty(U) || N === C || N === void 0 && C === void 0 || uh(
              t,
              a,
              U,
              N,
              s,
              C
            );
          return;
        }
    }
    for (var T in r)
      N = r[T], r.hasOwnProperty(T) && N != null && !s.hasOwnProperty(T) && it(t, a, T, null, s, N);
    for (G in s)
      N = s[G], C = r[G], !s.hasOwnProperty(G) || N === C || N == null && C == null || it(t, a, G, N, s, C);
  }
  function n2(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function r5() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, a = 0, r = performance.getEntriesByType("resource"), s = 0; s < r.length; s++) {
        var u = r[s], f = u.transferSize, p = u.initiatorType, v = u.duration;
        if (f && v && n2(p)) {
          for (p = 0, v = u.responseEnd, s += 1; s < r.length; s++) {
            var _ = r[s], O = _.startTime;
            if (O > v) break;
            var U = _.transferSize, G = _.initiatorType;
            U && n2(G) && (_ = _.responseEnd, p += U * (_ < v ? 1 : (v - O) / (_ - O)));
          }
          if (--s, a += 8 * (f + p) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return a / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var fh = null, dh = null;
  function Yc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function a2(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function i2(t, a) {
    if (t === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && a === "foreignObject" ? 0 : t;
  }
  function hh(t, a) {
    return t === "textarea" || t === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var ph = null;
  function o5() {
    var t = window.event;
    return t && t.type === "popstate" ? t === ph ? !1 : (ph = t, !0) : (ph = null, !1);
  }
  var r2 = typeof setTimeout == "function" ? setTimeout : void 0, s5 = typeof clearTimeout == "function" ? clearTimeout : void 0, o2 = typeof Promise == "function" ? Promise : void 0, l5 = typeof queueMicrotask == "function" ? queueMicrotask : typeof o2 < "u" ? function(t) {
    return o2.resolve(null).then(t).catch(c5);
  } : r2;
  function c5(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Vi(t) {
    return t === "head";
  }
  function s2(t, a) {
    var r = a, s = 0;
    do {
      var u = r.nextSibling;
      if (t.removeChild(r), u && u.nodeType === 8)
        if (r = u.data, r === "/$" || r === "/&") {
          if (s === 0) {
            t.removeChild(u), Ro(a);
            return;
          }
          s--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          s++;
        else if (r === "html")
          Ws(t.ownerDocument.documentElement);
        else if (r === "head") {
          r = t.ownerDocument.head, Ws(r);
          for (var f = r.firstChild; f; ) {
            var p = f.nextSibling, v = f.nodeName;
            f[vs] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && f.rel.toLowerCase() === "stylesheet" || r.removeChild(f), f = p;
          }
        } else
          r === "body" && Ws(t.ownerDocument.body);
      r = u;
    } while (r);
    Ro(a);
  }
  function l2(t, a) {
    var r = t;
    t = 0;
    do {
      var s = r.nextSibling;
      if (r.nodeType === 1 ? a ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (a ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), s && s.nodeType === 8)
        if (r = s.data, r === "/$") {
          if (t === 0) break;
          t--;
        } else
          r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || t++;
      r = s;
    } while (r);
  }
  function gh(t) {
    var a = t.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var r = a;
      switch (a = a.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gh(r), _f(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(r);
    }
  }
  function u5(t, a, r, s) {
    for (; t.nodeType === 1; ) {
      var u = r;
      if (t.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (s) {
        if (!t[vs])
          switch (a) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (f !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (f = t.getAttribute("src"), (f !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (a === "input" && t.type === "hidden") {
        var f = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === f)
          return t;
      } else return t;
      if (t = sa(t.nextSibling), t === null) break;
    }
    return null;
  }
  function f5(t, a, r) {
    if (a === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !r || (t = sa(t.nextSibling), t === null)) return null;
    return t;
  }
  function c2(t, a) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = sa(t.nextSibling), t === null)) return null;
    return t;
  }
  function mh(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function vh(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function d5(t, a) {
    var r = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = a;
    else if (t.data !== "$?" || r.readyState !== "loading")
      a();
    else {
      var s = function() {
        a(), r.removeEventListener("DOMContentLoaded", s);
      };
      r.addEventListener("DOMContentLoaded", s), t._reactRetry = s;
    }
  }
  function sa(t) {
    for (; t != null; t = t.nextSibling) {
      var a = t.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = t.data, a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&" || a === "F!" || a === "F")
          break;
        if (a === "/$" || a === "/&") return null;
      }
    }
    return t;
  }
  var yh = null;
  function u2(t) {
    t = t.nextSibling;
    for (var a = 0; t; ) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "/$" || r === "/&") {
          if (a === 0)
            return sa(t.nextSibling);
          a--;
        } else
          r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || a++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function f2(t) {
    t = t.previousSibling;
    for (var a = 0; t; ) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (a === 0) return t;
          a--;
        } else r !== "/$" && r !== "/&" || a++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function d2(t, a, r) {
    switch (a = Yc(r), t) {
      case "html":
        if (t = a.documentElement, !t) throw Error(o(452));
        return t;
      case "head":
        if (t = a.head, !t) throw Error(o(453));
        return t;
      case "body":
        if (t = a.body, !t) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Ws(t) {
    for (var a = t.attributes; a.length; )
      t.removeAttributeNode(a[0]);
    _f(t);
  }
  var la = /* @__PURE__ */ new Map(), h2 = /* @__PURE__ */ new Set();
  function Kc(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ui = Y.d;
  Y.d = {
    f: h5,
    r: p5,
    D: g5,
    C: m5,
    L: v5,
    m: y5,
    X: _5,
    S: b5,
    M: w5
  };
  function h5() {
    var t = ui.f(), a = Hc();
    return t || a;
  }
  function p5(t) {
    var a = Kr(t);
    a !== null && a.tag === 5 && a.type === "form" ? zg(a) : ui.r(t);
  }
  var To = typeof document > "u" ? null : document;
  function p2(t, a, r) {
    var s = To;
    if (s && typeof a == "string" && a) {
      var u = ea(a);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof r == "string" && (u += '[crossorigin="' + r + '"]'), h2.has(u) || (h2.add(u), t = { rel: t, crossOrigin: r, href: a }, s.querySelector(u) === null && (a = s.createElement("link"), cn(a, "link", t), Pt(a), s.head.appendChild(a)));
    }
  }
  function g5(t) {
    ui.D(t), p2("dns-prefetch", t, null);
  }
  function m5(t, a) {
    ui.C(t, a), p2("preconnect", t, a);
  }
  function v5(t, a, r) {
    ui.L(t, a, r);
    var s = To;
    if (s && t && a) {
      var u = 'link[rel="preload"][as="' + ea(a) + '"]';
      a === "image" && r && r.imageSrcSet ? (u += '[imagesrcset="' + ea(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (u += '[imagesizes="' + ea(
        r.imageSizes
      ) + '"]')) : u += '[href="' + ea(t) + '"]';
      var f = u;
      switch (a) {
        case "style":
          f = ko(t);
          break;
        case "script":
          f = Oo(t);
      }
      la.has(f) || (t = b(
        {
          rel: "preload",
          href: a === "image" && r && r.imageSrcSet ? void 0 : t,
          as: a
        },
        r
      ), la.set(f, t), s.querySelector(u) !== null || a === "style" && s.querySelector(el(f)) || a === "script" && s.querySelector(tl(f)) || (a = s.createElement("link"), cn(a, "link", t), Pt(a), s.head.appendChild(a)));
    }
  }
  function y5(t, a) {
    ui.m(t, a);
    var r = To;
    if (r && t) {
      var s = a && typeof a.as == "string" ? a.as : "script", u = 'link[rel="modulepreload"][as="' + ea(s) + '"][href="' + ea(t) + '"]', f = u;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Oo(t);
      }
      if (!la.has(f) && (t = b({ rel: "modulepreload", href: t }, a), la.set(f, t), r.querySelector(u) === null)) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(tl(f)))
              return;
        }
        s = r.createElement("link"), cn(s, "link", t), Pt(s), r.head.appendChild(s);
      }
    }
  }
  function b5(t, a, r) {
    ui.S(t, a, r);
    var s = To;
    if (s && t) {
      var u = Xr(s).hoistableStyles, f = ko(t);
      a = a || "default";
      var p = u.get(f);
      if (!p) {
        var v = { loading: 0, preload: null };
        if (p = s.querySelector(
          el(f)
        ))
          v.loading = 5;
        else {
          t = b(
            { rel: "stylesheet", href: t, "data-precedence": a },
            r
          ), (r = la.get(f)) && bh(t, r);
          var _ = p = s.createElement("link");
          Pt(_), cn(_, "link", t), _._p = new Promise(function(O, U) {
            _.onload = O, _.onerror = U;
          }), _.addEventListener("load", function() {
            v.loading |= 1;
          }), _.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Xc(p, a, s);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: v
        }, u.set(f, p);
      }
    }
  }
  function _5(t, a) {
    ui.X(t, a);
    var r = To;
    if (r && t) {
      var s = Xr(r).hoistableScripts, u = Oo(t), f = s.get(u);
      f || (f = r.querySelector(tl(u)), f || (t = b({ src: t, async: !0 }, a), (a = la.get(u)) && _h(t, a), f = r.createElement("script"), Pt(f), cn(f, "link", t), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, s.set(u, f));
    }
  }
  function w5(t, a) {
    ui.M(t, a);
    var r = To;
    if (r && t) {
      var s = Xr(r).hoistableScripts, u = Oo(t), f = s.get(u);
      f || (f = r.querySelector(tl(u)), f || (t = b({ src: t, async: !0, type: "module" }, a), (a = la.get(u)) && _h(t, a), f = r.createElement("script"), Pt(f), cn(f, "link", t), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, s.set(u, f));
    }
  }
  function g2(t, a, r, s) {
    var u = (u = Se.current) ? Kc(u) : null;
    if (!u) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (a = ko(r.href), r = Xr(
          u
        ).hoistableStyles, s = r.get(a), s || (s = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, r.set(a, s)), s) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          t = ko(r.href);
          var f = Xr(
            u
          ).hoistableStyles, p = f.get(t);
          if (p || (u = u.ownerDocument || u, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(t, p), (f = u.querySelector(
            el(t)
          )) && !f._p && (p.instance = f, p.state.loading = 5), la.has(t) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, la.set(t, r), f || A5(
            u,
            t,
            r,
            p.state
          ))), a && s === null)
            throw Error(o(528, ""));
          return p;
        }
        if (a && s !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return a = r.async, r = r.src, typeof r == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = Oo(r), r = Xr(
          u
        ).hoistableScripts, s = r.get(a), s || (s = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, r.set(a, s)), s) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, t));
    }
  }
  function ko(t) {
    return 'href="' + ea(t) + '"';
  }
  function el(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function m2(t) {
    return b({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function A5(t, a, r, s) {
    t.querySelector('link[rel="preload"][as="style"][' + a + "]") ? s.loading = 1 : (a = t.createElement("link"), s.preload = a, a.addEventListener("load", function() {
      return s.loading |= 1;
    }), a.addEventListener("error", function() {
      return s.loading |= 2;
    }), cn(a, "link", r), Pt(a), t.head.appendChild(a));
  }
  function Oo(t) {
    return '[src="' + ea(t) + '"]';
  }
  function tl(t) {
    return "script[async]" + t;
  }
  function v2(t, a, r) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var s = t.querySelector(
            'style[data-href~="' + ea(r.href) + '"]'
          );
          if (s)
            return a.instance = s, Pt(s), s;
          var u = b({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return s = (t.ownerDocument || t).createElement(
            "style"
          ), Pt(s), cn(s, "style", u), Xc(s, r.precedence, t), a.instance = s;
        case "stylesheet":
          u = ko(r.href);
          var f = t.querySelector(
            el(u)
          );
          if (f)
            return a.state.loading |= 4, a.instance = f, Pt(f), f;
          s = m2(r), (u = la.get(u)) && bh(s, u), f = (t.ownerDocument || t).createElement("link"), Pt(f);
          var p = f;
          return p._p = new Promise(function(v, _) {
            p.onload = v, p.onerror = _;
          }), cn(f, "link", s), a.state.loading |= 4, Xc(f, r.precedence, t), a.instance = f;
        case "script":
          return f = Oo(r.src), (u = t.querySelector(
            tl(f)
          )) ? (a.instance = u, Pt(u), u) : (s = r, (u = la.get(f)) && (s = b({}, r), _h(s, u)), t = t.ownerDocument || t, u = t.createElement("script"), Pt(u), cn(u, "link", s), t.head.appendChild(u), a.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, a.type));
      }
    else
      a.type === "stylesheet" && (a.state.loading & 4) === 0 && (s = a.instance, a.state.loading |= 4, Xc(s, r.precedence, t));
    return a.instance;
  }
  function Xc(t, a, r) {
    for (var s = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = s.length ? s[s.length - 1] : null, f = u, p = 0; p < s.length; p++) {
      var v = s[p];
      if (v.dataset.precedence === a) f = v;
      else if (f !== u) break;
    }
    f ? f.parentNode.insertBefore(t, f.nextSibling) : (a = r.nodeType === 9 ? r.head : r, a.insertBefore(t, a.firstChild));
  }
  function bh(t, a) {
    t.crossOrigin == null && (t.crossOrigin = a.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = a.referrerPolicy), t.title == null && (t.title = a.title);
  }
  function _h(t, a) {
    t.crossOrigin == null && (t.crossOrigin = a.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = a.referrerPolicy), t.integrity == null && (t.integrity = a.integrity);
  }
  var Qc = null;
  function y2(t, a, r) {
    if (Qc === null) {
      var s = /* @__PURE__ */ new Map(), u = Qc = /* @__PURE__ */ new Map();
      u.set(r, s);
    } else
      u = Qc, s = u.get(r), s || (s = /* @__PURE__ */ new Map(), u.set(r, s));
    if (s.has(t)) return s;
    for (s.set(t, null), r = r.getElementsByTagName(t), u = 0; u < r.length; u++) {
      var f = r[u];
      if (!(f[vs] || f[rn] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = f.getAttribute(a) || "";
        p = t + p;
        var v = s.get(p);
        v ? v.push(f) : s.set(p, [f]);
      }
    }
    return s;
  }
  function b2(t, a, r) {
    t = t.ownerDocument || t, t.head.insertBefore(
      r,
      a === "title" ? t.querySelector("head > title") : null
    );
  }
  function E5(t, a, r) {
    if (r === 1 || a.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
          break;
        return !0;
      case "link":
        if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
          break;
        return a.rel === "stylesheet" ? (t = a.disabled, typeof a.precedence == "string" && t == null) : !0;
      case "script":
        if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
          return !0;
    }
    return !1;
  }
  function _2(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function S5(t, a, r, s) {
    if (r.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var u = ko(s.href), f = a.querySelector(
          el(u)
        );
        if (f) {
          a = f._p, a !== null && typeof a == "object" && typeof a.then == "function" && (t.count++, t = $c.bind(t), a.then(t, t)), r.state.loading |= 4, r.instance = f, Pt(f);
          return;
        }
        f = a.ownerDocument || a, s = m2(s), (u = la.get(u)) && bh(s, u), f = f.createElement("link"), Pt(f);
        var p = f;
        p._p = new Promise(function(v, _) {
          p.onload = v, p.onerror = _;
        }), cn(f, "link", s), r.instance = f;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(r, a), (a = r.state.preload) && (r.state.loading & 3) === 0 && (t.count++, r = $c.bind(t), a.addEventListener("load", r), a.addEventListener("error", r));
    }
  }
  var wh = 0;
  function x5(t, a) {
    return t.stylesheets && t.count === 0 && Jc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(r) {
      var s = setTimeout(function() {
        if (t.stylesheets && Jc(t, t.stylesheets), t.unsuspend) {
          var f = t.unsuspend;
          t.unsuspend = null, f();
        }
      }, 6e4 + a);
      0 < t.imgBytes && wh === 0 && (wh = 62500 * r5());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Jc(t, t.stylesheets), t.unsuspend)) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        },
        (t.imgBytes > wh ? 50 : 800) + a
      );
      return t.unsuspend = r, function() {
        t.unsuspend = null, clearTimeout(s), clearTimeout(u);
      };
    } : null;
  }
  function $c() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Jc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Pc = null;
  function Jc(t, a) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Pc = /* @__PURE__ */ new Map(), a.forEach(T5, t), Pc = null, $c.call(t));
  }
  function T5(t, a) {
    if (!(a.state.loading & 4)) {
      var r = Pc.get(t);
      if (r) var s = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), Pc.set(t, r);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < u.length; f++) {
          var p = u[f];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (r.set(p.dataset.precedence, p), s = p);
        }
        s && r.set(null, s);
      }
      u = a.instance, p = u.getAttribute("data-precedence"), f = r.get(p) || s, f === s && r.set(null, u), r.set(p, u), this.count++, s = $c.bind(this), u.addEventListener("load", s), u.addEventListener("error", s), f ? f.parentNode.insertBefore(u, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), a.state.loading |= 4;
    }
  }
  var nl = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function k5(t, a, r, s, u, f, p, v, _) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mf(0), this.hiddenUpdates = mf(null), this.identifierPrefix = s, this.onUncaughtError = u, this.onCaughtError = f, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function w2(t, a, r, s, u, f, p, v, _, O, U, G) {
    return t = new k5(
      t,
      a,
      r,
      p,
      _,
      O,
      U,
      G,
      v
    ), a = 1, f === !0 && (a |= 24), f = Dn(3, null, null, a), t.current = f, f.stateNode = t, a = ed(), a.refCount++, t.pooledCache = a, a.refCount++, f.memoizedState = {
      element: s,
      isDehydrated: r,
      cache: a
    }, id(f), t;
  }
  function A2(t) {
    return t ? (t = io, t) : io;
  }
  function E2(t, a, r, s, u, f) {
    u = A2(u), s.context === null ? s.context = u : s.pendingContext = u, s = Oi(a), s.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (s.callback = f), r = Ri(t, s, a), r !== null && (kn(r, t, a), Ds(r, t, a));
  }
  function S2(t, a) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var r = t.retryLane;
      t.retryLane = r !== 0 && r < a ? r : a;
    }
  }
  function Ah(t, a) {
    S2(t, a), (t = t.alternate) && S2(t, a);
  }
  function x2(t) {
    if (t.tag === 13 || t.tag === 31) {
      var a = lr(t, 67108864);
      a !== null && kn(a, t, 67108864), Ah(t, 67108864);
    }
  }
  function T2(t) {
    if (t.tag === 13 || t.tag === 31) {
      var a = Vn();
      a = vf(a);
      var r = lr(t, a);
      r !== null && kn(r, t, a), Ah(t, a);
    }
  }
  var Wc = !0;
  function O5(t, a, r, s) {
    var u = R.T;
    R.T = null;
    var f = Y.p;
    try {
      Y.p = 2, Eh(t, a, r, s);
    } finally {
      Y.p = f, R.T = u;
    }
  }
  function R5(t, a, r, s) {
    var u = R.T;
    R.T = null;
    var f = Y.p;
    try {
      Y.p = 8, Eh(t, a, r, s);
    } finally {
      Y.p = f, R.T = u;
    }
  }
  function Eh(t, a, r, s) {
    if (Wc) {
      var u = Sh(s);
      if (u === null)
        ch(
          t,
          a,
          s,
          eu,
          r
        ), O2(t, s);
      else if (N5(
        u,
        t,
        a,
        r,
        s
      ))
        s.stopPropagation();
      else if (O2(t, s), a & 4 && -1 < z5.indexOf(t)) {
        for (; u !== null; ) {
          var f = Kr(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var p = ar(f.pendingLanes);
                  if (p !== 0) {
                    var v = f;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; p; ) {
                      var _ = 1 << 31 - pn(p);
                      v.entanglements[1] |= _, p &= ~_;
                    }
                    La(f), (Qe & 6) === 0 && (Uc = $() + 500, $s(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = lr(f, 2), v !== null && kn(v, f, 2), Hc(), Ah(f, 2);
            }
          if (f = Sh(s), f === null && ch(
            t,
            a,
            s,
            eu,
            r
          ), f === u) break;
          u = f;
        }
        u !== null && s.stopPropagation();
      } else
        ch(
          t,
          a,
          s,
          null,
          r
        );
    }
  }
  function Sh(t) {
    return t = Tf(t), xh(t);
  }
  var eu = null;
  function xh(t) {
    if (eu = null, t = Yr(t), t !== null) {
      var a = c(t);
      if (a === null) t = null;
      else {
        var r = a.tag;
        if (r === 13) {
          if (t = d(a), t !== null) return t;
          t = null;
        } else if (r === 31) {
          if (t = h(a), t !== null) return t;
          t = null;
        } else if (r === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          t = null;
        } else a !== t && (t = null);
      }
    }
    return eu = t, null;
  }
  function k2(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (J()) {
          case X:
            return 2;
          case pe:
            return 8;
          case Be:
          case Xe:
            return 32;
          case $t:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Th = !1, Gi = null, Bi = null, Fi = null, al = /* @__PURE__ */ new Map(), il = /* @__PURE__ */ new Map(), Zi = [], z5 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function O2(t, a) {
    switch (t) {
      case "focusin":
      case "focusout":
        Gi = null;
        break;
      case "dragenter":
      case "dragleave":
        Bi = null;
        break;
      case "mouseover":
      case "mouseout":
        Fi = null;
        break;
      case "pointerover":
      case "pointerout":
        al.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        il.delete(a.pointerId);
    }
  }
  function rl(t, a, r, s, u, f) {
    return t === null || t.nativeEvent !== f ? (t = {
      blockedOn: a,
      domEventName: r,
      eventSystemFlags: s,
      nativeEvent: f,
      targetContainers: [u]
    }, a !== null && (a = Kr(a), a !== null && x2(a)), t) : (t.eventSystemFlags |= s, a = t.targetContainers, u !== null && a.indexOf(u) === -1 && a.push(u), t);
  }
  function N5(t, a, r, s, u) {
    switch (a) {
      case "focusin":
        return Gi = rl(
          Gi,
          t,
          a,
          r,
          s,
          u
        ), !0;
      case "dragenter":
        return Bi = rl(
          Bi,
          t,
          a,
          r,
          s,
          u
        ), !0;
      case "mouseover":
        return Fi = rl(
          Fi,
          t,
          a,
          r,
          s,
          u
        ), !0;
      case "pointerover":
        var f = u.pointerId;
        return al.set(
          f,
          rl(
            al.get(f) || null,
            t,
            a,
            r,
            s,
            u
          )
        ), !0;
      case "gotpointercapture":
        return f = u.pointerId, il.set(
          f,
          rl(
            il.get(f) || null,
            t,
            a,
            r,
            s,
            u
          )
        ), !0;
    }
    return !1;
  }
  function R2(t) {
    var a = Yr(t.target);
    if (a !== null) {
      var r = c(a);
      if (r !== null) {
        if (a = r.tag, a === 13) {
          if (a = d(r), a !== null) {
            t.blockedOn = a, Zp(t.priority, function() {
              T2(r);
            });
            return;
          }
        } else if (a === 31) {
          if (a = h(r), a !== null) {
            t.blockedOn = a, Zp(t.priority, function() {
              T2(r);
            });
            return;
          }
        } else if (a === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function tu(t) {
    if (t.blockedOn !== null) return !1;
    for (var a = t.targetContainers; 0 < a.length; ) {
      var r = Sh(t.nativeEvent);
      if (r === null) {
        r = t.nativeEvent;
        var s = new r.constructor(
          r.type,
          r
        );
        xf = s, r.target.dispatchEvent(s), xf = null;
      } else
        return a = Kr(r), a !== null && x2(a), t.blockedOn = r, !1;
      a.shift();
    }
    return !0;
  }
  function z2(t, a, r) {
    tu(t) && r.delete(a);
  }
  function L5() {
    Th = !1, Gi !== null && tu(Gi) && (Gi = null), Bi !== null && tu(Bi) && (Bi = null), Fi !== null && tu(Fi) && (Fi = null), al.forEach(z2), il.forEach(z2);
  }
  function nu(t, a) {
    t.blockedOn === a && (t.blockedOn = null, Th || (Th = !0, e.unstable_scheduleCallback(
      e.unstable_NormalPriority,
      L5
    )));
  }
  var au = null;
  function N2(t) {
    au !== t && (au = t, e.unstable_scheduleCallback(
      e.unstable_NormalPriority,
      function() {
        au === t && (au = null);
        for (var a = 0; a < t.length; a += 3) {
          var r = t[a], s = t[a + 1], u = t[a + 2];
          if (typeof s != "function") {
            if (xh(s || r) === null)
              continue;
            break;
          }
          var f = Kr(r);
          f !== null && (t.splice(a, 3), a -= 3, Sd(
            f,
            {
              pending: !0,
              data: u,
              method: r.method,
              action: s
            },
            s,
            u
          ));
        }
      }
    ));
  }
  function Ro(t) {
    function a(_) {
      return nu(_, t);
    }
    Gi !== null && nu(Gi, t), Bi !== null && nu(Bi, t), Fi !== null && nu(Fi, t), al.forEach(a), il.forEach(a);
    for (var r = 0; r < Zi.length; r++) {
      var s = Zi[r];
      s.blockedOn === t && (s.blockedOn = null);
    }
    for (; 0 < Zi.length && (r = Zi[0], r.blockedOn === null); )
      R2(r), r.blockedOn === null && Zi.shift();
    if (r = (t.ownerDocument || t).$$reactFormReplay, r != null)
      for (s = 0; s < r.length; s += 3) {
        var u = r[s], f = r[s + 1], p = u[wn] || null;
        if (typeof f == "function")
          p || N2(r);
        else if (p) {
          var v = null;
          if (f && f.hasAttribute("formAction")) {
            if (u = f, p = f[wn] || null)
              v = p.formAction;
            else if (xh(u) !== null) continue;
          } else v = p.action;
          typeof v == "function" ? r[s + 1] = v : (r.splice(s, 3), s -= 3), N2(r);
        }
      }
  }
  function L2() {
    function t(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(p) {
            return u = p;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function a() {
      u !== null && (u(), u = null), s || setTimeout(r, 20);
    }
    function r() {
      if (!s && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var s = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", a), navigation.addEventListener("navigateerror", a), setTimeout(r, 100), function() {
        s = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", a), navigation.removeEventListener("navigateerror", a), u !== null && (u(), u = null);
      };
    }
  }
  function kh(t) {
    this._internalRoot = t;
  }
  iu.prototype.render = kh.prototype.render = function(t) {
    var a = this._internalRoot;
    if (a === null) throw Error(o(409));
    var r = a.current, s = Vn();
    E2(r, s, t, a, null, null);
  }, iu.prototype.unmount = kh.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var a = t.containerInfo;
      E2(t.current, 2, null, t, null, null), Hc(), a[qr] = null;
    }
  };
  function iu(t) {
    this._internalRoot = t;
  }
  iu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var a = Fp();
      t = { blockedOn: null, target: t, priority: a };
      for (var r = 0; r < Zi.length && a !== 0 && a < Zi[r].priority; r++) ;
      Zi.splice(r, 0, t), r === 0 && R2(t);
    }
  };
  var C2 = n.version;
  if (C2 !== "19.2.4")
    throw Error(
      o(
        527,
        C2,
        "19.2.4"
      )
    );
  Y.findDOMNode = function(t) {
    var a = t._reactInternals;
    if (a === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = m(a), t = t !== null ? y(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var C5 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ru.isDisabled && ru.supportsFiber)
      try {
        nr = ru.inject(
          C5
        ), an = ru;
      } catch {
      }
  }
  return ol.createRoot = function(t, a) {
    if (!l(t)) throw Error(o(299));
    var r = !1, s = "", u = Gg, f = Bg, p = Fg;
    return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (s = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (p = a.onRecoverableError)), a = w2(
      t,
      1,
      !1,
      null,
      null,
      r,
      s,
      null,
      u,
      f,
      p,
      L2
    ), t[qr] = a.current, lh(t), new kh(a);
  }, ol.hydrateRoot = function(t, a, r) {
    if (!l(t)) throw Error(o(299));
    var s = !1, u = "", f = Gg, p = Bg, v = Fg, _ = null;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onUncaughtError !== void 0 && (f = r.onUncaughtError), r.onCaughtError !== void 0 && (p = r.onCaughtError), r.onRecoverableError !== void 0 && (v = r.onRecoverableError), r.formState !== void 0 && (_ = r.formState)), a = w2(
      t,
      1,
      !0,
      a,
      r ?? null,
      s,
      u,
      _,
      f,
      p,
      v,
      L2
    ), a.context = A2(null), r = a.current, s = Vn(), s = vf(s), u = Oi(s), u.callback = null, Ri(r, u, s), r = s, a.current.lanes = r, ms(a, r), La(a), t[qr] = a.current, lh(t), new iu(a);
  }, ol.version = "19.2.4", ol;
}
var B2;
function F5() {
  if (B2) return Rh.exports;
  B2 = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), Rh.exports = B5(), Rh.exports;
}
var Z5 = F5(), Ch = { exports: {} }, sl = {};
var F2;
function I5() {
  if (F2) return sl;
  F2 = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(o, l, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), l.key !== void 0 && (d = "" + l.key), "key" in l) {
      c = {};
      for (var h in l)
        h !== "key" && (c[h] = l[h]);
    } else c = l;
    return l = c.ref, {
      $$typeof: e,
      type: o,
      key: d,
      ref: l !== void 0 ? l : null,
      props: c
    };
  }
  return sl.Fragment = n, sl.jsx = i, sl.jsxs = i, sl;
}
var Z2;
function q5() {
  return Z2 || (Z2 = 1, Ch.exports = I5()), Ch.exports;
}
var L = q5();
const I3 = B.createContext(null);
function Y5({ children: e }) {
  const [n, i] = B.useState(null), [o, l] = B.useState("lite"), [c, d] = B.useState(!0), [h, g] = B.useState(null), [m, y] = B.useState(null), b = B.useMemo(
    () => ({
      user: n,
      model: o,
      mirror: c,
      frontalImage: h,
      sideImage: m,
      setUser: (A) => i(A),
      setModel: l,
      setMirror: d,
      setFrontalImage: g,
      setSideImage: y,
      reset: () => {
        i(null), l("lite"), d(!0), g(null), y(null);
      }
    }),
    [n, o, c, h, m]
  );
  return /* @__PURE__ */ L.jsx(I3.Provider, { value: b, children: e });
}
function Wo() {
  const e = B.useContext(I3);
  if (!e) throw new Error("usePoseFlow must be used within PoseFlowProvider");
  return e;
}
var Rl = (e) => e.type === "checkbox", xr = (e) => e instanceof Date, Nn = (e) => e == null;
const q3 = (e) => typeof e == "object";
var Ht = (e) => !Nn(e) && !Array.isArray(e) && q3(e) && !xr(e), K5 = (e) => Ht(e) && e.target ? Rl(e.target) ? e.target.checked : e.target.value : e, X5 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Q5 = (e, n) => e.has(X5(n)), $5 = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return Ht(n) && n.hasOwnProperty("isPrototypeOf");
}, k1 = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Zt(e) {
  if (e instanceof Date)
    return new Date(e);
  const n = typeof FileList < "u" && e instanceof FileList;
  if (k1 && (e instanceof Blob || n))
    return e;
  const i = Array.isArray(e);
  if (!i && !(Ht(e) && $5(e)))
    return e;
  const o = i ? [] : Object.create(Object.getPrototypeOf(e));
  for (const l in e)
    Object.prototype.hasOwnProperty.call(e, l) && (o[l] = Zt(e[l]));
  return o;
}
var Du = (e) => /^\w*$/.test(e), yt = (e) => e === void 0, O1 = (e) => Array.isArray(e) ? e.filter(Boolean) : [], R1 = (e) => O1(e.replace(/["|']|\]/g, "").split(/\.|\[/)), se = (e, n, i) => {
  if (!n || !Ht(e))
    return i;
  const o = (Du(n) ? [n] : R1(n)).reduce((l, c) => Nn(l) ? l : l[c], e);
  return yt(o) || o === e ? yt(e[n]) ? i : e[n] : o;
}, Ma = (e) => typeof e == "boolean", wa = (e) => typeof e == "function", lt = (e, n, i) => {
  let o = -1;
  const l = Du(n) ? [n] : R1(n), c = l.length, d = c - 1;
  for (; ++o < c; ) {
    const h = l[o];
    let g = i;
    if (o !== d) {
      const m = e[h];
      g = Ht(m) || Array.isArray(m) ? m : isNaN(+l[o + 1]) ? {} : [];
    }
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return;
    e[h] = g, e = e[h];
  }
};
const I2 = {
  BLUR: "blur",
  FOCUS_OUT: "focusout"
}, Aa = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, fi = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Y3 = Ve.createContext(null);
Y3.displayName = "HookFormControlContext";
const P5 = () => Ve.useContext(Y3);
var J5 = (e, n, i, o = !0) => {
  const l = {
    defaultValues: n._defaultValues
  };
  for (const c in e)
    Object.defineProperty(l, c, {
      get: () => {
        const d = c;
        return n._proxyFormState[d] !== Aa.all && (n._proxyFormState[d] = !o || Aa.all), e[d];
      }
    });
  return l;
};
const K3 = typeof window < "u" ? Ve.useLayoutEffect : Ve.useEffect;
var Zn = (e) => typeof e == "string", $h = (e, n, i, o, l) => Zn(e) ? (o && n.watch.add(e), se(i, e, l)) : Array.isArray(e) ? e.map((c) => (o && n.watch.add(c), se(i, c))) : (o && (n.watchAll = !0), i), Ph = (e) => Nn(e) || !q3(e);
function Ea(e, n, i = /* @__PURE__ */ new WeakSet()) {
  if (Ph(e) || Ph(n))
    return Object.is(e, n);
  if (xr(e) && xr(n))
    return Object.is(e.getTime(), n.getTime());
  const o = Object.keys(e), l = Object.keys(n);
  if (o.length !== l.length)
    return !1;
  if (i.has(e) || i.has(n))
    return !0;
  i.add(e), i.add(n);
  for (const c of o) {
    const d = e[c];
    if (!l.includes(c))
      return !1;
    if (c !== "ref") {
      const h = n[c];
      if (xr(d) && xr(h) || Ht(d) && Ht(h) || Array.isArray(d) && Array.isArray(h) ? !Ea(d, h, i) : !Object.is(d, h))
        return !1;
    }
  }
  return !0;
}
function Dh(e) {
  const n = P5(), { control: i = n, name: o, defaultValue: l, disabled: c, exact: d, compute: h } = e || {}, g = Ve.useRef(l), m = Ve.useRef(h), y = Ve.useRef(void 0), b = Ve.useRef(i), A = Ve.useRef(o);
  m.current = h;
  const [x, V] = Ve.useState(() => {
    const ee = i._getWatch(o, g.current);
    return m.current ? m.current(ee) : ee;
  }), F = Ve.useCallback((ee) => {
    const ae = $h(o, i._names, ee || i._formValues, !1, g.current);
    return m.current ? m.current(ae) : ae;
  }, [i._formValues, i._names, o]), q = Ve.useCallback((ee) => {
    if (!c) {
      const ae = $h(o, i._names, ee || i._formValues, !1, g.current);
      if (m.current) {
        const Ee = m.current(ae);
        Ea(Ee, y.current) || (V(Ee), y.current = Ee);
      } else
        V(ae);
    }
  }, [i._formValues, i._names, c, o]);
  K3(() => ((b.current !== i || !Ea(A.current, o)) && (b.current = i, A.current = o, q()), i._subscribe({
    name: o,
    formState: {
      values: !0
    },
    exact: d,
    callback: (ee) => {
      q(ee.values);
    }
  })), [i, d, o, q]), Ve.useEffect(() => i._removeUnmounted());
  const te = b.current !== i, ne = A.current, W = Ve.useMemo(() => {
    if (c)
      return null;
    const ee = !te && !Ea(ne, o);
    return te || ee ? F() : null;
  }, [c, te, o, ne, F]);
  return W !== null ? W : x;
}
const W5 = Ve.createContext(null);
W5.displayName = "HookFormContext";
var z1 = (e, n, i, o, l) => n ? {
  ...i[e],
  types: {
    ...i[e] && i[e].types ? i[e].types : {},
    [o]: l || !0
  }
} : {}, gl = (e) => Array.isArray(e) ? e : [e], q2 = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (l) => {
      for (const c of e)
        c.next && c.next(l);
    },
    subscribe: (l) => (e.push(l), {
      unsubscribe: () => {
        e = e.filter((c) => c !== l);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
};
function X3(e, n) {
  const i = {};
  for (const o in e)
    if (e.hasOwnProperty(o)) {
      const l = e[o], c = n[o];
      if (l && Ht(l) && c) {
        const d = X3(l, c);
        Ht(d) && (i[o] = d);
      } else e[o] && (i[o] = c);
    }
  return i;
}
var vn = (e) => Ht(e) && !Object.keys(e).length, N1 = (e) => e.type === "file", yu = (e) => {
  if (!k1)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, Q3 = (e) => e.type === "select-multiple", L1 = (e) => e.type === "radio", ew = (e) => L1(e) || Rl(e), Mh = (e) => yu(e) && e.isConnected;
function tw(e, n) {
  const i = n.slice(0, -1).length;
  let o = 0;
  for (; o < i; )
    e = yt(e) ? o++ : e[n[o++]];
  return e;
}
function nw(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !yt(e[n]))
      return !1;
  return !0;
}
function Mt(e, n) {
  const i = Array.isArray(n) ? n : Du(n) ? [n] : R1(n), o = i.length === 1 ? e : tw(e, i), l = i.length - 1, c = i[l];
  return o && delete o[c], l !== 0 && (Ht(o) && vn(o) || Array.isArray(o) && nw(o)) && Mt(e, i.slice(0, -1)), e;
}
var aw = (e) => {
  for (const n in e)
    if (wa(e[n]))
      return !0;
  return !1;
};
function $3(e) {
  return Array.isArray(e) || Ht(e) && !aw(e);
}
function Jh(e, n = {}) {
  for (const i in e) {
    const o = e[i];
    $3(o) ? (n[i] = Array.isArray(o) ? [] : {}, Jh(o, n[i])) : yt(o) || (n[i] = !0);
  }
  return n;
}
function Do(e, n, i) {
  i || (i = Jh(n));
  for (const o in e) {
    const l = e[o];
    if ($3(l))
      yt(n) || Ph(i[o]) ? i[o] = Jh(l, Array.isArray(l) ? [] : {}) : Do(l, Nn(n) ? {} : n[o], i[o]);
    else {
      const c = n[o];
      i[o] = !Ea(l, c);
    }
  }
  return i;
}
const Y2 = {
  value: !1,
  isValid: !1
}, K2 = { value: !0, isValid: !0 };
var P3 = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((i) => i && i.checked && !i.disabled).map((i) => i.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !yt(e[0].attributes.value) ? yt(e[0].value) || e[0].value === "" ? K2 : { value: e[0].value, isValid: !0 } : K2
    ) : Y2;
  }
  return Y2;
}, J3 = (e, { valueAsNumber: n, valueAsDate: i, setValueAs: o }) => yt(e) ? e : n ? e === "" ? NaN : e && +e : i && Zn(e) ? new Date(e) : o ? o(e) : e;
const X2 = {
  isValid: !1,
  value: null
};
var W3 = (e) => Array.isArray(e) ? e.reduce((n, i) => i && i.checked && !i.disabled ? {
  isValid: !0,
  value: i.value
} : n, X2) : X2;
function Q2(e) {
  const n = e.ref;
  return N1(n) ? n.files : L1(n) ? W3(e.refs).value : Q3(n) ? [...n.selectedOptions].map(({ value: i }) => i) : Rl(n) ? P3(e.refs).value : J3(yt(n.value) ? e.ref.value : n.value, e);
}
var iw = (e, n, i, o) => {
  const l = {};
  for (const c of e) {
    const d = se(n, c);
    d && lt(l, c, d._f);
  }
  return {
    criteriaMode: i,
    names: [...e],
    fields: l,
    shouldUseNativeValidation: o
  };
}, bu = (e) => e instanceof RegExp, ll = (e) => yt(e) ? e : bu(e) ? e.source : Ht(e) ? bu(e.value) ? e.value.source : e.value : e, $2 = (e) => ({
  isOnSubmit: !e || e === Aa.onSubmit,
  isOnBlur: e === Aa.onBlur,
  isOnChange: e === Aa.onChange,
  isOnAll: e === Aa.all,
  isOnTouch: e === Aa.onTouched
});
const P2 = "AsyncFunction";
var rw = (e) => !!e && !!e.validate && !!(wa(e.validate) && e.validate.constructor.name === P2 || Ht(e.validate) && Object.values(e.validate).find((n) => n.constructor.name === P2)), ow = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), J2 = (e, n, i) => !i && (n.watchAll || n.watch.has(e) || [...n.watch].some((o) => e.startsWith(o) && /^\.\w+/.test(e.slice(o.length))));
const ml = (e, n, i, o) => {
  for (const l of i || Object.keys(e)) {
    const c = se(e, l);
    if (c) {
      const { _f: d, ...h } = c;
      if (d) {
        if (d.refs && d.refs[0] && n(d.refs[0], l) && !o)
          return !0;
        if (d.ref && n(d.ref, d.name) && !o)
          return !0;
        if (ml(h, n))
          break;
      } else if (Ht(h) && ml(h, n))
        break;
    }
  }
};
function W2(e, n, i) {
  const o = se(e, i);
  if (o || Du(i))
    return {
      error: o,
      name: i
    };
  const l = i.split(".");
  for (; l.length; ) {
    const c = l.join("."), d = se(n, c), h = se(e, c);
    if (d && !Array.isArray(d) && i !== c)
      return { name: i };
    if (h && h.type)
      return {
        name: c,
        error: h
      };
    if (h && h.root && h.root.type)
      return {
        name: `${c}.root`,
        error: h.root
      };
    l.pop();
  }
  return {
    name: i
  };
}
var sw = (e, n, i, o) => {
  i(e);
  const { name: l, ...c } = e;
  return vn(c) || Object.keys(c).length >= Object.keys(n).length || Object.keys(c).find((d) => n[d] === (!o || Aa.all));
}, lw = (e, n, i) => !e || !n || e === n || gl(e).some((o) => o && (i ? o === n : o.startsWith(n) || n.startsWith(o))), cw = (e, n, i, o, l) => l.isOnAll ? !1 : !i && l.isOnTouch ? !(n || e) : (i ? o.isOnBlur : l.isOnBlur) ? !e : (i ? o.isOnChange : l.isOnChange) ? e : !0, uw = (e, n) => !O1(se(e, n)).length && Mt(e, n), fw = (e, n, i) => {
  const o = gl(se(e, i));
  return lt(o, "root", n[i]), lt(e, i, o), e;
};
function ev(e, n, i = "validate") {
  if (Zn(e) || Array.isArray(e) && e.every(Zn) || Ma(e) && !e)
    return {
      type: i,
      message: Zn(e) ? e : "",
      ref: n
    };
}
var zo = (e) => Ht(e) && !bu(e) ? e : {
  value: e,
  message: ""
}, tv = async (e, n, i, o, l, c) => {
  const { ref: d, refs: h, required: g, maxLength: m, minLength: y, min: b, max: A, pattern: x, validate: V, name: F, valueAsNumber: q, mount: te } = e._f, ne = se(i, F);
  if (!te || n.has(F))
    return {};
  const W = h ? h[0] : d, ee = (ue) => {
    l && W.reportValidity && (W.setCustomValidity(Ma(ue) ? "" : ue || ""), W.reportValidity());
  }, ae = {}, Ee = L1(d), ce = Rl(d), Q = Ee || ce, Ke = (q || N1(d)) && yt(d.value) && yt(ne) || yu(d) && d.value === "" || ne === "" || Array.isArray(ne) && !ne.length, nt = z1.bind(null, F, o, ae), Je = (ue, ye, xe, Te = fi.maxLength, R = fi.minLength) => {
    const Y = ue ? ye : xe;
    ae[F] = {
      type: ue ? Te : R,
      message: Y,
      ref: d,
      ...nt(ue ? Te : R, Y)
    };
  };
  if (c ? !Array.isArray(ne) || !ne.length : g && (!Q && (Ke || Nn(ne)) || Ma(ne) && !ne || ce && !P3(h).isValid || Ee && !W3(h).isValid)) {
    const { value: ue, message: ye } = Zn(g) ? { value: !!g, message: g } : zo(g);
    if (ue && (ae[F] = {
      type: fi.required,
      message: ye,
      ref: W,
      ...nt(fi.required, ye)
    }, !o))
      return ee(ye), ae;
  }
  if (!Ke && (!Nn(b) || !Nn(A))) {
    let ue, ye;
    const xe = zo(A), Te = zo(b);
    if (!Nn(ne) && !isNaN(ne)) {
      const R = d.valueAsNumber || ne && +ne;
      Nn(xe.value) || (ue = R > xe.value), Nn(Te.value) || (ye = R < Te.value);
    } else {
      const R = d.valueAsDate || new Date(ne), Y = (Le) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Le), Z = d.type == "time", Ne = d.type == "week";
      Zn(xe.value) && ne && (ue = Z ? Y(ne) > Y(xe.value) : Ne ? ne > xe.value : R > new Date(xe.value)), Zn(Te.value) && ne && (ye = Z ? Y(ne) < Y(Te.value) : Ne ? ne < Te.value : R < new Date(Te.value));
    }
    if ((ue || ye) && (Je(!!ue, xe.message, Te.message, fi.max, fi.min), !o))
      return ee(ae[F].message), ae;
  }
  if ((m || y) && !Ke && (Zn(ne) || c && Array.isArray(ne))) {
    const ue = zo(m), ye = zo(y), xe = !Nn(ue.value) && ne.length > +ue.value, Te = !Nn(ye.value) && ne.length < +ye.value;
    if ((xe || Te) && (Je(xe, ue.message, ye.message), !o))
      return ee(ae[F].message), ae;
  }
  if (x && !Ke && Zn(ne)) {
    const { value: ue, message: ye } = zo(x);
    if (bu(ue) && !ne.match(ue) && (ae[F] = {
      type: fi.pattern,
      message: ye,
      ref: d,
      ...nt(fi.pattern, ye)
    }, !o))
      return ee(ye), ae;
  }
  if (V) {
    if (wa(V)) {
      const ue = await V(ne, i), ye = ev(ue, W);
      if (ye && (ae[F] = {
        ...ye,
        ...nt(fi.validate, ye.message)
      }, !o))
        return ee(ye.message), ae;
    } else if (Ht(V)) {
      let ue = {};
      for (const ye in V) {
        if (!vn(ue) && !o)
          break;
        const xe = ev(await V[ye](ne, i), W, ye);
        xe && (ue = {
          ...xe,
          ...nt(ye, xe.message)
        }, ee(xe.message), o && (ae[F] = ue));
      }
      if (!vn(ue) && (ae[F] = {
        ref: W,
        ...ue
      }, !o))
        return ae;
    }
  }
  return ee(!0), ae;
};
const dw = {
  mode: Aa.onSubmit,
  reValidateMode: Aa.onChange,
  shouldFocusError: !0
};
function hw(e = {}) {
  let n = {
    ...dw,
    ...e
  }, i = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: wa(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: n.errors || {},
    disabled: n.disabled || !1
  }, o = {}, l = Ht(n.defaultValues) || Ht(n.values) ? Zt(n.defaultValues || n.values) || {} : {}, c = n.shouldUnregister ? {} : Zt(l), d = {
    action: !1,
    mount: !1,
    watch: !1,
    keepIsValid: !1
  }, h = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, g, m = 0;
  const y = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, b = {
    ...y
  };
  let A = {
    ...b
  };
  const x = {
    array: q2(),
    state: q2()
  }, V = n.criteriaMode === Aa.all, F = (w) => (z) => {
    clearTimeout(m), m = setTimeout(w, z);
  }, q = async (w) => {
    if (!d.keepIsValid && !n.disabled && (b.isValid || A.isValid || w)) {
      let z;
      n.resolver ? (z = vn((await Q()).errors), te()) : z = await nt(o, !0), z !== i.isValid && x.state.next({
        isValid: z
      });
    }
  }, te = (w, z) => {
    !n.disabled && (b.isValidating || b.validatingFields || A.isValidating || A.validatingFields) && ((w || Array.from(h.mount)).forEach((M) => {
      M && (z ? lt(i.validatingFields, M, z) : Mt(i.validatingFields, M));
    }), x.state.next({
      validatingFields: i.validatingFields,
      isValidating: !vn(i.validatingFields)
    }));
  }, ne = (w, z = [], M, $, J = !0, X = !0) => {
    if ($ && M && !n.disabled) {
      if (d.action = !0, X && Array.isArray(se(o, w))) {
        const pe = M(se(o, w), $.argA, $.argB);
        J && lt(o, w, pe);
      }
      if (X && Array.isArray(se(i.errors, w))) {
        const pe = M(se(i.errors, w), $.argA, $.argB);
        J && lt(i.errors, w, pe), uw(i.errors, w);
      }
      if ((b.touchedFields || A.touchedFields) && X && Array.isArray(se(i.touchedFields, w))) {
        const pe = M(se(i.touchedFields, w), $.argA, $.argB);
        J && lt(i.touchedFields, w, pe);
      }
      (b.dirtyFields || A.dirtyFields) && (i.dirtyFields = Do(l, c)), x.state.next({
        name: w,
        isDirty: ue(w, z),
        dirtyFields: i.dirtyFields,
        errors: i.errors,
        isValid: i.isValid
      });
    } else
      lt(c, w, z);
  }, W = (w, z) => {
    lt(i.errors, w, z), x.state.next({
      errors: i.errors
    });
  }, ee = (w) => {
    i.errors = w, x.state.next({
      errors: i.errors,
      isValid: !1
    });
  }, ae = (w, z, M, $) => {
    const J = se(o, w);
    if (J) {
      const X = se(c, w, yt(M) ? se(l, w) : M);
      yt(X) || $ && $.defaultChecked || z ? lt(c, w, z ? X : Q2(J._f)) : Te(w, X), d.mount && !d.action && q();
    }
  }, Ee = (w, z, M, $, J) => {
    let X = !1, pe = !1;
    const Be = {
      name: w
    };
    if (!n.disabled) {
      if (!M || $) {
        (b.isDirty || A.isDirty) && (pe = i.isDirty, i.isDirty = Be.isDirty = ue(), X = pe !== Be.isDirty);
        const Xe = Ea(se(l, w), z);
        pe = !!se(i.dirtyFields, w), Xe ? Mt(i.dirtyFields, w) : lt(i.dirtyFields, w, !0), Be.dirtyFields = i.dirtyFields, X = X || (b.dirtyFields || A.dirtyFields) && pe !== !Xe;
      }
      if (M) {
        const Xe = se(i.touchedFields, w);
        Xe || (lt(i.touchedFields, w, M), Be.touchedFields = i.touchedFields, X = X || (b.touchedFields || A.touchedFields) && Xe !== M);
      }
      X && J && x.state.next(Be);
    }
    return X ? Be : {};
  }, ce = (w, z, M, $) => {
    const J = se(i.errors, w), X = (b.isValid || A.isValid) && Ma(z) && i.isValid !== z;
    if (n.delayError && M ? (g = F(() => W(w, M)), g(n.delayError)) : (clearTimeout(m), g = null, M ? lt(i.errors, w, M) : Mt(i.errors, w)), (M ? !Ea(J, M) : J) || !vn($) || X) {
      const pe = {
        ...$,
        ...X && Ma(z) ? { isValid: z } : {},
        errors: i.errors,
        name: w
      };
      i = {
        ...i,
        ...pe
      }, x.state.next(pe);
    }
  }, Q = async (w) => (te(w, !0), await n.resolver(c, n.context, iw(w || h.mount, o, n.criteriaMode, n.shouldUseNativeValidation))), Ke = async (w) => {
    const { errors: z } = await Q(w);
    if (te(w), w)
      for (const M of w) {
        const $ = se(z, M);
        $ ? lt(i.errors, M, $) : Mt(i.errors, M);
      }
    else
      i.errors = z;
    return z;
  }, nt = async (w, z, M = {
    valid: !0
  }) => {
    for (const $ in w) {
      const J = w[$];
      if (J) {
        const { _f: X, ...pe } = J;
        if (X) {
          const Be = h.array.has(X.name), Xe = J._f && rw(J._f);
          Xe && b.validatingFields && te([X.name], !0);
          const $t = await tv(J, h.disabled, c, V, n.shouldUseNativeValidation && !z, Be);
          if (Xe && b.validatingFields && te([X.name]), $t[X.name] && (M.valid = !1, z || e.shouldUseNativeValidation))
            break;
          !z && (se($t, X.name) ? Be ? fw(i.errors, $t, X.name) : lt(i.errors, X.name, $t[X.name]) : Mt(i.errors, X.name));
        }
        !vn(pe) && await nt(pe, z, M);
      }
    }
    return M.valid;
  }, Je = () => {
    for (const w of h.unMount) {
      const z = se(o, w);
      z && (z._f.refs ? z._f.refs.every((M) => !Mh(M)) : !Mh(z._f.ref)) && ct(w);
    }
    h.unMount = /* @__PURE__ */ new Set();
  }, ue = (w, z) => !n.disabled && (w && z && lt(c, w, z), !Ea(E(), l)), ye = (w, z, M) => $h(w, h, {
    ...d.mount ? c : yt(z) ? l : Zn(w) ? { [w]: z } : z
  }, M, z), xe = (w) => O1(se(d.mount ? c : l, w, n.shouldUnregister ? se(l, w, []) : [])), Te = (w, z, M = {}) => {
    const $ = se(o, w);
    let J = z;
    if ($) {
      const X = $._f;
      X && (!X.disabled && lt(c, w, J3(z, X)), J = yu(X.ref) && Nn(z) ? "" : z, Q3(X.ref) ? [...X.ref.options].forEach((pe) => pe.selected = J.includes(pe.value)) : X.refs ? Rl(X.ref) ? X.refs.forEach((pe) => {
        (!pe.defaultChecked || !pe.disabled) && (Array.isArray(J) ? pe.checked = !!J.find((Be) => Be === pe.value) : pe.checked = J === pe.value || !!J);
      }) : X.refs.forEach((pe) => pe.checked = pe.value === J) : N1(X.ref) ? X.ref.value = "" : (X.ref.value = J, X.ref.type || x.state.next({
        name: w,
        values: Zt(c)
      })));
    }
    (M.shouldDirty || M.shouldTouch) && Ee(w, J, M.shouldTouch, M.shouldDirty, !0), M.shouldValidate && Le(w);
  }, R = (w, z, M) => {
    for (const $ in z) {
      if (!z.hasOwnProperty($))
        return;
      const J = z[$], X = w + "." + $, pe = se(o, X);
      (h.array.has(w) || Ht(J) || pe && !pe._f) && !xr(J) ? R(X, J, M) : Te(X, J, M);
    }
  }, Y = (w, z, M = {}) => {
    const $ = se(o, w), J = h.array.has(w), X = Zt(z);
    lt(c, w, X), J ? (x.array.next({
      name: w,
      values: Zt(c)
    }), (b.isDirty || b.dirtyFields || A.isDirty || A.dirtyFields) && M.shouldDirty && x.state.next({
      name: w,
      dirtyFields: Do(l, c),
      isDirty: ue(w, X)
    })) : $ && !$._f && !Nn(X) ? R(w, X, M) : Te(w, X, M), J2(w, h) ? x.state.next({
      ...i,
      name: w,
      values: Zt(c)
    }) : x.state.next({
      name: d.mount ? w : void 0,
      values: Zt(c)
    });
  }, Z = async (w) => {
    d.mount = !0;
    const z = w.target;
    let M = z.name, $ = !0;
    const J = se(o, M), X = (Xe) => {
      $ = Number.isNaN(Xe) || xr(Xe) && isNaN(Xe.getTime()) || Ea(Xe, se(c, M, Xe));
    }, pe = $2(n.mode), Be = $2(n.reValidateMode);
    if (J) {
      let Xe, $t;
      const Ya = z.type ? Q2(J._f) : K5(w), Oa = w.type === I2.BLUR || w.type === I2.FOCUS_OUT, nr = !ow(J._f) && !n.resolver && !se(i.errors, M) && !J._f.deps || cw(Oa, se(i.touchedFields, M), i.isSubmitted, Be, pe), an = J2(M, h, Oa);
      lt(c, M, Ya), Oa ? (!z || !z.readOnly) && (J._f.onBlur && J._f.onBlur(w), g && g(0)) : J._f.onChange && J._f.onChange(w);
      const Jn = Ee(M, Ya, Oa), pn = !vn(Jn) || an;
      if (!Oa && x.state.next({
        name: M,
        type: w.type,
        values: Zt(c)
      }), nr)
        return (b.isValid || A.isValid) && (n.mode === "onBlur" ? Oa && q() : Oa || q()), pn && x.state.next({ name: M, ...an ? {} : Jn });
      if (!Oa && an && x.state.next({ ...i }), n.resolver) {
        const { errors: Fl } = await Q([M]);
        if (te([M]), X(Ya), $) {
          const gf = W2(i.errors, o, M), Zl = W2(Fl, o, gf.name || M);
          Xe = Zl.error, M = Zl.name, $t = vn(Fl);
        }
      } else
        te([M], !0), Xe = (await tv(J, h.disabled, c, V, n.shouldUseNativeValidation))[M], te([M]), X(Ya), $ && (Xe ? $t = !1 : (b.isValid || A.isValid) && ($t = await nt(o, !0)));
      $ && (J._f.deps && (!Array.isArray(J._f.deps) || J._f.deps.length > 0) && Le(J._f.deps), ce(M, $t, Xe, Jn));
    }
  }, Ne = (w, z) => {
    if (se(i.errors, z) && w.focus)
      return w.focus(), 1;
  }, Le = async (w, z = {}) => {
    let M, $;
    const J = gl(w);
    if (n.resolver) {
      const X = await Ke(yt(w) ? w : J);
      M = vn(X), $ = w ? !J.some((pe) => se(X, pe)) : M;
    } else w ? ($ = (await Promise.all(J.map(async (X) => {
      const pe = se(o, X);
      return await nt(pe && pe._f ? { [X]: pe } : pe);
    }))).every(Boolean), !(!$ && !i.isValid) && q()) : $ = M = await nt(o);
    return x.state.next({
      ...!Zn(w) || (b.isValid || A.isValid) && M !== i.isValid ? {} : { name: w },
      ...n.resolver || !w ? { isValid: M } : {},
      errors: i.errors
    }), z.shouldFocus && !$ && ml(o, Ne, w ? J : h.mount), $;
  }, E = (w, z) => {
    let M = {
      ...d.mount ? c : l
    };
    return z && (M = X3(z.dirtyFields ? i.dirtyFields : i.touchedFields, M)), yt(w) ? M : Zn(w) ? se(M, w) : w.map(($) => se(M, $));
  }, j = (w, z) => ({
    invalid: !!se((z || i).errors, w),
    isDirty: !!se((z || i).dirtyFields, w),
    error: se((z || i).errors, w),
    isValidating: !!se(i.validatingFields, w),
    isTouched: !!se((z || i).touchedFields, w)
  }), K = (w) => {
    w && gl(w).forEach((z) => Mt(i.errors, z)), x.state.next({
      errors: w ? i.errors : {}
    });
  }, P = (w, z, M) => {
    const $ = (se(o, w, { _f: {} })._f || {}).ref, J = se(i.errors, w) || {}, { ref: X, message: pe, type: Be, ...Xe } = J;
    lt(i.errors, w, {
      ...Xe,
      ...z,
      ref: $
    }), x.state.next({
      name: w,
      errors: i.errors,
      isValid: !1
    }), M && M.shouldFocus && $ && $.focus && $.focus();
  }, _e = (w, z) => wa(w) ? x.state.subscribe({
    next: (M) => "values" in M && w(ye(void 0, z), M)
  }) : ye(w, z, !0), Se = (w) => x.state.subscribe({
    next: (z) => {
      lw(w.name, z.name, w.exact) && sw(z, w.formState || b, Gl, w.reRenderRoot) && w.callback({
        values: { ...c },
        ...i,
        ...z,
        defaultValues: l
      });
    }
  }).unsubscribe, be = (w) => (d.mount = !0, A = {
    ...A,
    ...w.formState
  }, Se({
    ...w,
    formState: {
      ...y,
      ...w.formState
    }
  })), ct = (w, z = {}) => {
    for (const M of w ? gl(w) : h.mount)
      h.mount.delete(M), h.array.delete(M), z.keepValue || (Mt(o, M), Mt(c, M)), !z.keepError && Mt(i.errors, M), !z.keepDirty && Mt(i.dirtyFields, M), !z.keepTouched && Mt(i.touchedFields, M), !z.keepIsValidating && Mt(i.validatingFields, M), !n.shouldUnregister && !z.keepDefaultValue && Mt(l, M);
    x.state.next({
      values: Zt(c)
    }), x.state.next({
      ...i,
      ...z.keepDirty ? { isDirty: ue() } : {}
    }), !z.keepIsValid && q();
  }, Ge = ({ disabled: w, name: z }) => {
    if (Ma(w) && d.mount || w || h.disabled.has(z)) {
      const J = h.disabled.has(z) !== !!w;
      w ? h.disabled.add(z) : h.disabled.delete(z), J && d.mount && !d.action && q();
    }
  }, Qt = (w, z = {}) => {
    let M = se(o, w);
    const $ = Ma(z.disabled) || Ma(n.disabled);
    return lt(o, w, {
      ...M || {},
      _f: {
        ...M && M._f ? M._f : { ref: { name: w } },
        name: w,
        mount: !0,
        ...z
      }
    }), h.mount.add(w), M ? Ge({
      disabled: Ma(z.disabled) ? z.disabled : n.disabled,
      name: w
    }) : ae(w, !0, z.value), {
      ...$ ? { disabled: z.disabled || n.disabled } : {},
      ...n.progressive ? {
        required: !!z.required,
        min: ll(z.min),
        max: ll(z.max),
        minLength: ll(z.minLength),
        maxLength: ll(z.maxLength),
        pattern: ll(z.pattern)
      } : {},
      name: w,
      onChange: Z,
      onBlur: Z,
      ref: (J) => {
        if (J) {
          Qt(w, z), M = se(o, w);
          const X = yt(J.value) && J.querySelectorAll && J.querySelectorAll("input,select,textarea")[0] || J, pe = ew(X), Be = M._f.refs || [];
          if (pe ? Be.find((Xe) => Xe === X) : X === M._f.ref)
            return;
          lt(o, w, {
            _f: {
              ...M._f,
              ...pe ? {
                refs: [
                  ...Be.filter(Mh),
                  X,
                  ...Array.isArray(se(l, w)) ? [{}] : []
                ],
                ref: { type: X.type, name: w }
              } : { ref: X }
            }
          }), ae(w, !1, void 0, X);
        } else
          M = se(o, w, {}), M._f && (M._f.mount = !1), (n.shouldUnregister || z.shouldUnregister) && !(Q5(h.array, w) && d.action) && h.unMount.add(w);
      }
    };
  }, _n = () => n.shouldFocusError && ml(o, Ne, h.mount), Gt = (w) => {
    Ma(w) && (x.state.next({ disabled: w }), ml(o, (z, M) => {
      const $ = se(o, M);
      $ && (z.disabled = $._f.disabled || w, Array.isArray($._f.refs) && $._f.refs.forEach((J) => {
        J.disabled = $._f.disabled || w;
      }));
    }, 0, !1));
  }, _i = (w, z) => async (M) => {
    let $;
    M && (M.preventDefault && M.preventDefault(), M.persist && M.persist());
    let J = Zt(c);
    if (x.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: X, values: pe } = await Q();
      te(), i.errors = X, J = Zt(pe);
    } else
      await nt(o);
    if (h.disabled.size)
      for (const X of h.disabled)
        Mt(J, X);
    if (Mt(i.errors, "root"), vn(i.errors)) {
      x.state.next({
        errors: {}
      });
      try {
        await w(J, M);
      } catch (X) {
        $ = X;
      }
    } else
      z && await z({ ...i.errors }, M), _n(), setTimeout(_n);
    if (x.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: vn(i.errors) && !$,
      submitCount: i.submitCount + 1,
      errors: i.errors
    }), $)
      throw $;
  }, va = (w, z = {}) => {
    se(o, w) && (yt(z.defaultValue) ? Y(w, Zt(se(l, w))) : (Y(w, z.defaultValue), lt(l, w, Zt(z.defaultValue))), z.keepTouched || Mt(i.touchedFields, w), z.keepDirty || (Mt(i.dirtyFields, w), i.isDirty = z.defaultValue ? ue(w, Zt(se(l, w))) : ue()), z.keepError || (Mt(i.errors, w), b.isValid && q()), x.state.next({ ...i }));
  }, Fr = (w, z = {}) => {
    const M = w ? Zt(w) : l, $ = Zt(M), J = vn(w), X = J ? l : $;
    if (z.keepDefaultValues || (l = M), !z.keepValues) {
      if (z.keepDirtyValues) {
        const pe = /* @__PURE__ */ new Set([
          ...h.mount,
          ...Object.keys(Do(l, c))
        ]);
        for (const Be of Array.from(pe)) {
          const Xe = se(i.dirtyFields, Be), $t = se(c, Be), Ya = se(X, Be);
          Xe && !yt($t) ? lt(X, Be, $t) : !Xe && !yt(Ya) && Y(Be, Ya);
        }
      } else {
        if (k1 && yt(w))
          for (const pe of h.mount) {
            const Be = se(o, pe);
            if (Be && Be._f) {
              const Xe = Array.isArray(Be._f.refs) ? Be._f.refs[0] : Be._f.ref;
              if (yu(Xe)) {
                const $t = Xe.closest("form");
                if ($t) {
                  $t.reset();
                  break;
                }
              }
            }
          }
        if (z.keepFieldsRef)
          for (const pe of h.mount)
            Y(pe, se(X, pe));
        else
          o = {};
      }
      c = n.shouldUnregister ? z.keepDefaultValues ? Zt(l) : {} : Zt(X), x.array.next({
        values: { ...X }
      }), x.state.next({
        values: { ...X }
      });
    }
    h = {
      mount: z.keepDirtyValues ? h.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, d.mount = !b.isValid || !!z.keepIsValid || !!z.keepDirtyValues || !n.shouldUnregister && !vn(X), d.watch = !!n.shouldUnregister, d.keepIsValid = !!z.keepIsValid, d.action = !1, z.keepErrors || (i.errors = {}), x.state.next({
      submitCount: z.keepSubmitCount ? i.submitCount : 0,
      isDirty: J ? !1 : z.keepDirty ? i.isDirty : !!(z.keepDefaultValues && !Ea(w, l)),
      isSubmitted: z.keepIsSubmitted ? i.isSubmitted : !1,
      dirtyFields: J ? {} : z.keepDirtyValues ? z.keepDefaultValues && c ? Do(l, c) : i.dirtyFields : z.keepDefaultValues && w ? Do(l, w) : z.keepDirty ? i.dirtyFields : {},
      touchedFields: z.keepTouched ? i.touchedFields : {},
      errors: z.keepErrors ? i.errors : {},
      isSubmitSuccessful: z.keepIsSubmitSuccessful ? i.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: l
    });
  }, Zr = (w, z) => Fr(wa(w) ? w(c) : w, { ...n.resetOptions, ...z }), pf = (w, z = {}) => {
    const M = se(o, w), $ = M && M._f;
    if ($) {
      const J = $.refs ? $.refs[0] : $.ref;
      J.focus && setTimeout(() => {
        J.focus(), z.shouldSelect && wa(J.select) && J.select();
      });
    }
  }, Gl = (w) => {
    i = {
      ...i,
      ...w
    };
  }, Ir = {
    control: {
      register: Qt,
      unregister: ct,
      getFieldState: j,
      handleSubmit: _i,
      setError: P,
      _subscribe: Se,
      _runSchema: Q,
      _updateIsValidating: te,
      _focusError: _n,
      _getWatch: ye,
      _getDirty: ue,
      _setValid: q,
      _setFieldArray: ne,
      _setDisabledField: Ge,
      _setErrors: ee,
      _getFieldArray: xe,
      _reset: Fr,
      _resetDefaultValues: () => wa(n.defaultValues) && n.defaultValues().then((w) => {
        Zr(w, n.resetOptions), x.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: Je,
      _disableForm: Gt,
      _subjects: x,
      _proxyFormState: b,
      get _fields() {
        return o;
      },
      get _formValues() {
        return c;
      },
      get _state() {
        return d;
      },
      set _state(w) {
        d = w;
      },
      get _defaultValues() {
        return l;
      },
      get _names() {
        return h;
      },
      set _names(w) {
        h = w;
      },
      get _formState() {
        return i;
      },
      get _options() {
        return n;
      },
      set _options(w) {
        n = {
          ...n,
          ...w
        };
      }
    },
    subscribe: be,
    trigger: Le,
    register: Qt,
    handleSubmit: _i,
    watch: _e,
    setValue: Y,
    getValues: E,
    reset: Zr,
    resetField: va,
    clearErrors: K,
    unregister: ct,
    setError: P,
    setFocus: pf,
    getFieldState: j
  };
  return {
    ...Ir,
    formControl: Ir
  };
}
function pw(e = {}) {
  const n = Ve.useRef(void 0), i = Ve.useRef(void 0), [o, l] = Ve.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: wa(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: wa(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!n.current)
    if (e.formControl)
      n.current = {
        ...e.formControl,
        formState: o
      }, e.defaultValues && !wa(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: d, ...h } = hw(e);
      n.current = {
        ...h,
        formState: o
      };
    }
  const c = n.current.control;
  return c._options = e, K3(() => {
    const d = c._subscribe({
      formState: c._proxyFormState,
      callback: () => l({ ...c._formState }),
      reRenderRoot: !0
    });
    return l((h) => ({
      ...h,
      isReady: !0
    })), c._formState.isReady = !0, d;
  }, [c]), Ve.useEffect(() => c._disableForm(e.disabled), [c, e.disabled]), Ve.useEffect(() => {
    e.mode && (c._options.mode = e.mode), e.reValidateMode && (c._options.reValidateMode = e.reValidateMode);
  }, [c, e.mode, e.reValidateMode]), Ve.useEffect(() => {
    e.errors && (c._setErrors(e.errors), c._focusError());
  }, [c, e.errors]), Ve.useEffect(() => {
    e.shouldUnregister && c._subjects.state.next({
      values: c._getWatch()
    });
  }, [c, e.shouldUnregister]), Ve.useEffect(() => {
    if (c._proxyFormState.isDirty) {
      const d = c._getDirty();
      d !== o.isDirty && c._subjects.state.next({
        isDirty: d
      });
    }
  }, [c, o.isDirty]), Ve.useEffect(() => {
    var d;
    e.values && !Ea(e.values, i.current) ? (c._reset(e.values, {
      keepFieldsRef: !0,
      ...c._options.resetOptions
    }), !((d = c._options.resetOptions) === null || d === void 0) && d.keepIsValid || c._setValid(), i.current = e.values, l((h) => ({ ...h }))) : c._resetDefaultValues();
  }, [c, e.values]), Ve.useEffect(() => {
    c._state.mount || (c._setValid(), c._state.mount = !0), c._state.watch && (c._state.watch = !1, c._subjects.state.next({ ...c._formState })), c._removeUnmounted();
  }), n.current.formState = Ve.useMemo(() => J5(o, c), [c, o]), n.current;
}
const nv = (e, n, i) => {
  if (e && "reportValidity" in e) {
    const o = se(i, n);
    e.setCustomValidity(o && o.message || ""), e.reportValidity();
  }
}, Wh = (e, n) => {
  for (const i in n.fields) {
    const o = n.fields[i];
    o && o.ref && "reportValidity" in o.ref ? nv(o.ref, i, e) : o && o.refs && o.refs.forEach((l) => nv(l, i, e));
  }
}, av = (e, n) => {
  n.shouldUseNativeValidation && Wh(e, n);
  const i = {};
  for (const o in e) {
    const l = se(n.fields, o), c = Object.assign(e[o] || {}, { ref: l && l.ref });
    if (gw(n.names || Object.keys(e), o)) {
      const d = Object.assign({}, se(i, o));
      lt(d, "root", c), lt(i, o, d);
    } else lt(i, o, c);
  }
  return i;
}, gw = (e, n) => {
  const i = iv(n);
  return e.some((o) => iv(o).match(`^${i}\\.\\d+`));
};
function iv(e) {
  return e.replace(/\]|\[/g, "");
}
function I(e, n, i) {
  function o(h, g) {
    if (h._zod || Object.defineProperty(h, "_zod", {
      value: {
        def: g,
        constr: d,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), h._zod.traits.has(e))
      return;
    h._zod.traits.add(e), n(h, g);
    const m = d.prototype, y = Object.keys(m);
    for (let b = 0; b < y.length; b++) {
      const A = y[b];
      A in h || (h[A] = m[A].bind(h));
    }
  }
  const l = i?.Parent ?? Object;
  class c extends l {
  }
  Object.defineProperty(c, "name", { value: e });
  function d(h) {
    var g;
    const m = i?.Parent ? new c() : this;
    o(m, h), (g = m._zod).deferred ?? (g.deferred = []);
    for (const y of m._zod.deferred)
      y();
    return m;
  }
  return Object.defineProperty(d, "init", { value: o }), Object.defineProperty(d, Symbol.hasInstance, {
    value: (h) => i?.Parent && h instanceof i.Parent ? !0 : h?._zod?.traits?.has(e)
  }), Object.defineProperty(d, "name", { value: e }), d;
}
class Ho extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class e4 extends Error {
  constructor(n) {
    super(`Encountered unidirectional transform during encode: ${n}`), this.name = "ZodEncodeError";
  }
}
const t4 = {};
function Cr(e) {
  return t4;
}
function n4(e) {
  const n = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, l]) => n.indexOf(+o) === -1).map(([o, l]) => l);
}
function e1(e, n) {
  return typeof n == "bigint" ? n.toString() : n;
}
function C1(e) {
  return {
    get value() {
      {
        const n = e();
        return Object.defineProperty(this, "value", { value: n }), n;
      }
    }
  };
}
function D1(e) {
  return e == null;
}
function M1(e) {
  const n = e.startsWith("^") ? 1 : 0, i = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(n, i);
}
const rv = /* @__PURE__ */ Symbol("evaluating");
function tt(e, n, i) {
  let o;
  Object.defineProperty(e, n, {
    get() {
      if (o !== rv)
        return o === void 0 && (o = rv, o = i()), o;
    },
    set(l) {
      Object.defineProperty(e, n, {
        value: l
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Hr(e, n, i) {
  Object.defineProperty(e, n, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Wi(...e) {
  const n = {};
  for (const i of e) {
    const o = Object.getOwnPropertyDescriptors(i);
    Object.assign(n, o);
  }
  return Object.defineProperties({}, n);
}
function ov(e) {
  return JSON.stringify(e);
}
function mw(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const a4 = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function _u(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const vw = C1(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function wl(e) {
  if (_u(e) === !1)
    return !1;
  const n = e.constructor;
  if (n === void 0 || typeof n != "function")
    return !0;
  const i = n.prototype;
  return !(_u(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function i4(e) {
  return wl(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const yw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Mu(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function er(e, n, i) {
  const o = new e._zod.constr(n ?? e._zod.def);
  return (!n || i?.parent) && (o._zod.parent = e), o;
}
function ke(e) {
  const n = e;
  if (!n)
    return {};
  if (typeof n == "string")
    return { error: () => n };
  if (n?.message !== void 0) {
    if (n?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    n.error = n.message;
  }
  return delete n.message, typeof n.error == "string" ? { ...n, error: () => n.error } : n;
}
function bw(e) {
  return Object.keys(e).filter((n) => e[n]._zod.optin === "optional" && e[n]._zod.optout === "optional");
}
function _w(e, n) {
  const i = e._zod.def, o = i.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const c = Wi(e._zod.def, {
    get shape() {
      const d = {};
      for (const h in n) {
        if (!(h in i.shape))
          throw new Error(`Unrecognized key: "${h}"`);
        n[h] && (d[h] = i.shape[h]);
      }
      return Hr(this, "shape", d), d;
    },
    checks: []
  });
  return er(e, c);
}
function ww(e, n) {
  const i = e._zod.def, o = i.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const c = Wi(e._zod.def, {
    get shape() {
      const d = { ...e._zod.def.shape };
      for (const h in n) {
        if (!(h in i.shape))
          throw new Error(`Unrecognized key: "${h}"`);
        n[h] && delete d[h];
      }
      return Hr(this, "shape", d), d;
    },
    checks: []
  });
  return er(e, c);
}
function Aw(e, n) {
  if (!wl(n))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = e._zod.def.checks;
  if (i && i.length > 0) {
    const c = e._zod.def.shape;
    for (const d in n)
      if (Object.getOwnPropertyDescriptor(c, d) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const l = Wi(e._zod.def, {
    get shape() {
      const c = { ...e._zod.def.shape, ...n };
      return Hr(this, "shape", c), c;
    }
  });
  return er(e, l);
}
function Ew(e, n) {
  if (!wl(n))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = Wi(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...n };
      return Hr(this, "shape", o), o;
    }
  });
  return er(e, i);
}
function Sw(e, n) {
  const i = Wi(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...n._zod.def.shape };
      return Hr(this, "shape", o), o;
    },
    get catchall() {
      return n._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return er(e, i);
}
function xw(e, n, i) {
  const l = n._zod.def.checks;
  if (l && l.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const d = Wi(n._zod.def, {
    get shape() {
      const h = n._zod.def.shape, g = { ...h };
      if (i)
        for (const m in i) {
          if (!(m in h))
            throw new Error(`Unrecognized key: "${m}"`);
          i[m] && (g[m] = e ? new e({
            type: "optional",
            innerType: h[m]
          }) : h[m]);
        }
      else
        for (const m in h)
          g[m] = e ? new e({
            type: "optional",
            innerType: h[m]
          }) : h[m];
      return Hr(this, "shape", g), g;
    },
    checks: []
  });
  return er(n, d);
}
function Tw(e, n, i) {
  const o = Wi(n._zod.def, {
    get shape() {
      const l = n._zod.def.shape, c = { ...l };
      if (i)
        for (const d in i) {
          if (!(d in c))
            throw new Error(`Unrecognized key: "${d}"`);
          i[d] && (c[d] = new e({
            type: "nonoptional",
            innerType: l[d]
          }));
        }
      else
        for (const d in l)
          c[d] = new e({
            type: "nonoptional",
            innerType: l[d]
          });
      return Hr(this, "shape", c), c;
    }
  });
  return er(n, o);
}
function Mo(e, n = 0) {
  if (e.aborted === !0)
    return !0;
  for (let i = n; i < e.issues.length; i++)
    if (e.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function r4(e, n) {
  return n.map((i) => {
    var o;
    return (o = i).path ?? (o.path = []), i.path.unshift(e), i;
  });
}
function ou(e) {
  return typeof e == "string" ? e : e?.message;
}
function Dr(e, n, i) {
  const o = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const l = ou(e.inst?._zod.def?.error?.(e)) ?? ou(n?.error?.(e)) ?? ou(i.customError?.(e)) ?? ou(i.localeError?.(e)) ?? "Invalid input";
    o.message = l;
  }
  return delete o.inst, delete o.continue, n?.reportInput || delete o.input, o;
}
function U1(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Al(...e) {
  const [n, i, o] = e;
  return typeof n == "string" ? {
    message: n,
    code: "custom",
    input: i,
    inst: o
  } : { ...n };
}
const o4 = (e, n) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: n,
    enumerable: !1
  }), e.message = JSON.stringify(n, e1, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, j1 = I("$ZodError", o4), Uu = I("$ZodError", o4, { Parent: Error });
function kw(e, n = (i) => i.message) {
  const i = {}, o = [];
  for (const l of e.issues)
    l.path.length > 0 ? (i[l.path[0]] = i[l.path[0]] || [], i[l.path[0]].push(n(l))) : o.push(n(l));
  return { formErrors: o, fieldErrors: i };
}
function Ow(e, n = (i) => i.message) {
  const i = { _errors: [] }, o = (l) => {
    for (const c of l.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((d) => o({ issues: d }));
      else if (c.code === "invalid_key")
        o({ issues: c.issues });
      else if (c.code === "invalid_element")
        o({ issues: c.issues });
      else if (c.path.length === 0)
        i._errors.push(n(c));
      else {
        let d = i, h = 0;
        for (; h < c.path.length; ) {
          const g = c.path[h];
          h === c.path.length - 1 ? (d[g] = d[g] || { _errors: [] }, d[g]._errors.push(n(c))) : d[g] = d[g] || { _errors: [] }, d = d[g], h++;
        }
      }
  };
  return o(e), i;
}
const ju = (e) => (n, i, o, l) => {
  const c = o ? Object.assign(o, { async: !1 }) : { async: !1 }, d = n._zod.run({ value: i, issues: [] }, c);
  if (d instanceof Promise)
    throw new Ho();
  if (d.issues.length) {
    const h = new (l?.Err ?? e)(d.issues.map((g) => Dr(g, c, Cr())));
    throw a4(h, l?.callee), h;
  }
  return d.value;
}, Rw = /* @__PURE__ */ ju(Uu), Hu = (e) => async (n, i, o, l) => {
  const c = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let d = n._zod.run({ value: i, issues: [] }, c);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const h = new (l?.Err ?? e)(d.issues.map((g) => Dr(g, c, Cr())));
    throw a4(h, l?.callee), h;
  }
  return d.value;
}, zw = /* @__PURE__ */ Hu(Uu), Vu = (e) => (n, i, o) => {
  const l = o ? { ...o, async: !1 } : { async: !1 }, c = n._zod.run({ value: i, issues: [] }, l);
  if (c instanceof Promise)
    throw new Ho();
  return c.issues.length ? {
    success: !1,
    error: new (e ?? j1)(c.issues.map((d) => Dr(d, l, Cr())))
  } : { success: !0, data: c.value };
}, Nw = /* @__PURE__ */ Vu(Uu), Gu = (e) => async (n, i, o) => {
  const l = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let c = n._zod.run({ value: i, issues: [] }, l);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new e(c.issues.map((d) => Dr(d, l, Cr())))
  } : { success: !0, data: c.value };
}, Lw = /* @__PURE__ */ Gu(Uu), Cw = (e) => (n, i, o) => {
  const l = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return ju(e)(n, i, l);
}, Dw = (e) => (n, i, o) => ju(e)(n, i, o), Mw = (e) => async (n, i, o) => {
  const l = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Hu(e)(n, i, l);
}, Uw = (e) => async (n, i, o) => Hu(e)(n, i, o), jw = (e) => (n, i, o) => {
  const l = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Vu(e)(n, i, l);
}, Hw = (e) => (n, i, o) => Vu(e)(n, i, o), Vw = (e) => async (n, i, o) => {
  const l = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Gu(e)(n, i, l);
}, Gw = (e) => async (n, i, o) => Gu(e)(n, i, o), Bw = /^[cC][^\s-]{8,}$/, Fw = /^[0-9a-z]+$/, Zw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Iw = /^[0-9a-vA-V]{20}$/, qw = /^[A-Za-z0-9]{27}$/, Yw = /^[a-zA-Z0-9_-]{21}$/, Kw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Xw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, sv = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Qw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, $w = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Pw() {
  return new RegExp($w, "u");
}
const Jw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ww = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, e8 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, t8 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, n8 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, s4 = /^[A-Za-z0-9_-]*$/, a8 = /^\+[1-9]\d{6,14}$/, l4 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", i8 = /* @__PURE__ */ new RegExp(`^${l4}$`);
function c4(e) {
  const n = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${n}` : e.precision === 0 ? `${n}:[0-5]\\d` : `${n}:[0-5]\\d\\.\\d{${e.precision}}` : `${n}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function r8(e) {
  return new RegExp(`^${c4(e)}$`);
}
function o8(e) {
  const n = c4({ precision: e.precision }), i = ["Z"];
  e.local && i.push(""), e.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${n}(?:${i.join("|")})`;
  return new RegExp(`^${l4}T(?:${o})$`);
}
const s8 = (e) => {
  const n = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${n}$`);
}, l8 = /^[^A-Z]*$/, c8 = /^[^a-z]*$/, Va = /* @__PURE__ */ I("$ZodCheck", (e, n) => {
  var i;
  e._zod ?? (e._zod = {}), e._zod.def = n, (i = e._zod).onattach ?? (i.onattach = []);
}), u8 = /* @__PURE__ */ I("$ZodCheckMaxLength", (e, n) => {
  var i;
  Va.init(e, n), (i = e._zod.def).when ?? (i.when = (o) => {
    const l = o.value;
    return !D1(l) && l.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const l = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    n.maximum < l && (o._zod.bag.maximum = n.maximum);
  }), e._zod.check = (o) => {
    const l = o.value;
    if (l.length <= n.maximum)
      return;
    const d = U1(l);
    o.issues.push({
      origin: d,
      code: "too_big",
      maximum: n.maximum,
      inclusive: !0,
      input: l,
      inst: e,
      continue: !n.abort
    });
  };
}), f8 = /* @__PURE__ */ I("$ZodCheckMinLength", (e, n) => {
  var i;
  Va.init(e, n), (i = e._zod.def).when ?? (i.when = (o) => {
    const l = o.value;
    return !D1(l) && l.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const l = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    n.minimum > l && (o._zod.bag.minimum = n.minimum);
  }), e._zod.check = (o) => {
    const l = o.value;
    if (l.length >= n.minimum)
      return;
    const d = U1(l);
    o.issues.push({
      origin: d,
      code: "too_small",
      minimum: n.minimum,
      inclusive: !0,
      input: l,
      inst: e,
      continue: !n.abort
    });
  };
}), d8 = /* @__PURE__ */ I("$ZodCheckLengthEquals", (e, n) => {
  var i;
  Va.init(e, n), (i = e._zod.def).when ?? (i.when = (o) => {
    const l = o.value;
    return !D1(l) && l.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const l = o._zod.bag;
    l.minimum = n.length, l.maximum = n.length, l.length = n.length;
  }), e._zod.check = (o) => {
    const l = o.value, c = l.length;
    if (c === n.length)
      return;
    const d = U1(l), h = c > n.length;
    o.issues.push({
      origin: d,
      ...h ? { code: "too_big", maximum: n.length } : { code: "too_small", minimum: n.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: e,
      continue: !n.abort
    });
  };
}), Bu = /* @__PURE__ */ I("$ZodCheckStringFormat", (e, n) => {
  var i, o;
  Va.init(e, n), e._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.format = n.format, n.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(n.pattern));
  }), n.pattern ? (i = e._zod).check ?? (i.check = (l) => {
    n.pattern.lastIndex = 0, !n.pattern.test(l.value) && l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: n.format,
      input: l.value,
      ...n.pattern ? { pattern: n.pattern.toString() } : {},
      inst: e,
      continue: !n.abort
    });
  }) : (o = e._zod).check ?? (o.check = () => {
  });
}), h8 = /* @__PURE__ */ I("$ZodCheckRegex", (e, n) => {
  Bu.init(e, n), e._zod.check = (i) => {
    n.pattern.lastIndex = 0, !n.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: n.pattern.toString(),
      inst: e,
      continue: !n.abort
    });
  };
}), p8 = /* @__PURE__ */ I("$ZodCheckLowerCase", (e, n) => {
  n.pattern ?? (n.pattern = l8), Bu.init(e, n);
}), g8 = /* @__PURE__ */ I("$ZodCheckUpperCase", (e, n) => {
  n.pattern ?? (n.pattern = c8), Bu.init(e, n);
}), m8 = /* @__PURE__ */ I("$ZodCheckIncludes", (e, n) => {
  Va.init(e, n);
  const i = Mu(n.includes), o = new RegExp(typeof n.position == "number" ? `^.{${n.position}}${i}` : i);
  n.pattern = o, e._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(o);
  }), e._zod.check = (l) => {
    l.value.includes(n.includes, n.position) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: n.includes,
      input: l.value,
      inst: e,
      continue: !n.abort
    });
  };
}), v8 = /* @__PURE__ */ I("$ZodCheckStartsWith", (e, n) => {
  Va.init(e, n);
  const i = new RegExp(`^${Mu(n.prefix)}.*`);
  n.pattern ?? (n.pattern = i), e._zod.onattach.push((o) => {
    const l = o._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(i);
  }), e._zod.check = (o) => {
    o.value.startsWith(n.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: n.prefix,
      input: o.value,
      inst: e,
      continue: !n.abort
    });
  };
}), y8 = /* @__PURE__ */ I("$ZodCheckEndsWith", (e, n) => {
  Va.init(e, n);
  const i = new RegExp(`.*${Mu(n.suffix)}$`);
  n.pattern ?? (n.pattern = i), e._zod.onattach.push((o) => {
    const l = o._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(i);
  }), e._zod.check = (o) => {
    o.value.endsWith(n.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: n.suffix,
      input: o.value,
      inst: e,
      continue: !n.abort
    });
  };
}), b8 = /* @__PURE__ */ I("$ZodCheckOverwrite", (e, n) => {
  Va.init(e, n), e._zod.check = (i) => {
    i.value = n.tx(i.value);
  };
});
class _8 {
  constructor(n = []) {
    this.content = [], this.indent = 0, this && (this.args = n);
  }
  indented(n) {
    this.indent += 1, n(this), this.indent -= 1;
  }
  write(n) {
    if (typeof n == "function") {
      n(this, { execution: "sync" }), n(this, { execution: "async" });
      return;
    }
    const o = n.split(`
`).filter((d) => d), l = Math.min(...o.map((d) => d.length - d.trimStart().length)), c = o.map((d) => d.slice(l)).map((d) => " ".repeat(this.indent * 2) + d);
    for (const d of c)
      this.content.push(d);
  }
  compile() {
    const n = Function, i = this?.args, l = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new n(...i, l.join(`
`));
  }
}
const w8 = {
  major: 4,
  minor: 3,
  patch: 6
}, Kt = /* @__PURE__ */ I("$ZodType", (e, n) => {
  var i;
  e ?? (e = {}), e._zod.def = n, e._zod.bag = e._zod.bag || {}, e._zod.version = w8;
  const o = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && o.unshift(e);
  for (const l of o)
    for (const c of l._zod.onattach)
      c(e);
  if (o.length === 0)
    (i = e._zod).deferred ?? (i.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const l = (d, h, g) => {
      let m = Mo(d), y;
      for (const b of h) {
        if (b._zod.def.when) {
          if (!b._zod.def.when(d))
            continue;
        } else if (m)
          continue;
        const A = d.issues.length, x = b._zod.check(d);
        if (x instanceof Promise && g?.async === !1)
          throw new Ho();
        if (y || x instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await x, d.issues.length !== A && (m || (m = Mo(d, A)));
          });
        else {
          if (d.issues.length === A)
            continue;
          m || (m = Mo(d, A));
        }
      }
      return y ? y.then(() => d) : d;
    }, c = (d, h, g) => {
      if (Mo(d))
        return d.aborted = !0, d;
      const m = l(h, o, g);
      if (m instanceof Promise) {
        if (g.async === !1)
          throw new Ho();
        return m.then((y) => e._zod.parse(y, g));
      }
      return e._zod.parse(m, g);
    };
    e._zod.run = (d, h) => {
      if (h.skipChecks)
        return e._zod.parse(d, h);
      if (h.direction === "backward") {
        const m = e._zod.parse({ value: d.value, issues: [] }, { ...h, skipChecks: !0 });
        return m instanceof Promise ? m.then((y) => c(y, d, h)) : c(m, d, h);
      }
      const g = e._zod.parse(d, h);
      if (g instanceof Promise) {
        if (h.async === !1)
          throw new Ho();
        return g.then((m) => l(m, o, h));
      }
      return l(g, o, h);
    };
  }
  tt(e, "~standard", () => ({
    validate: (l) => {
      try {
        const c = Nw(e, l);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Lw(e, l).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), H1 = /* @__PURE__ */ I("$ZodString", (e, n) => {
  Kt.init(e, n), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? s8(e._zod.bag), e._zod.parse = (i, o) => {
    if (n.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: e
    }), i;
  };
}), vt = /* @__PURE__ */ I("$ZodStringFormat", (e, n) => {
  Bu.init(e, n), H1.init(e, n);
}), A8 = /* @__PURE__ */ I("$ZodGUID", (e, n) => {
  n.pattern ?? (n.pattern = Xw), vt.init(e, n);
}), E8 = /* @__PURE__ */ I("$ZodUUID", (e, n) => {
  if (n.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[n.version];
    if (o === void 0)
      throw new Error(`Invalid UUID version: "${n.version}"`);
    n.pattern ?? (n.pattern = sv(o));
  } else
    n.pattern ?? (n.pattern = sv());
  vt.init(e, n);
}), S8 = /* @__PURE__ */ I("$ZodEmail", (e, n) => {
  n.pattern ?? (n.pattern = Qw), vt.init(e, n);
}), x8 = /* @__PURE__ */ I("$ZodURL", (e, n) => {
  vt.init(e, n), e._zod.check = (i) => {
    try {
      const o = i.value.trim(), l = new URL(o);
      n.hostname && (n.hostname.lastIndex = 0, n.hostname.test(l.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: n.hostname.source,
        input: i.value,
        inst: e,
        continue: !n.abort
      })), n.protocol && (n.protocol.lastIndex = 0, n.protocol.test(l.protocol.endsWith(":") ? l.protocol.slice(0, -1) : l.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: n.protocol.source,
        input: i.value,
        inst: e,
        continue: !n.abort
      })), n.normalize ? i.value = l.href : i.value = o;
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
}), T8 = /* @__PURE__ */ I("$ZodEmoji", (e, n) => {
  n.pattern ?? (n.pattern = Pw()), vt.init(e, n);
}), k8 = /* @__PURE__ */ I("$ZodNanoID", (e, n) => {
  n.pattern ?? (n.pattern = Yw), vt.init(e, n);
}), O8 = /* @__PURE__ */ I("$ZodCUID", (e, n) => {
  n.pattern ?? (n.pattern = Bw), vt.init(e, n);
}), R8 = /* @__PURE__ */ I("$ZodCUID2", (e, n) => {
  n.pattern ?? (n.pattern = Fw), vt.init(e, n);
}), z8 = /* @__PURE__ */ I("$ZodULID", (e, n) => {
  n.pattern ?? (n.pattern = Zw), vt.init(e, n);
}), N8 = /* @__PURE__ */ I("$ZodXID", (e, n) => {
  n.pattern ?? (n.pattern = Iw), vt.init(e, n);
}), L8 = /* @__PURE__ */ I("$ZodKSUID", (e, n) => {
  n.pattern ?? (n.pattern = qw), vt.init(e, n);
}), C8 = /* @__PURE__ */ I("$ZodISODateTime", (e, n) => {
  n.pattern ?? (n.pattern = o8(n)), vt.init(e, n);
}), D8 = /* @__PURE__ */ I("$ZodISODate", (e, n) => {
  n.pattern ?? (n.pattern = i8), vt.init(e, n);
}), M8 = /* @__PURE__ */ I("$ZodISOTime", (e, n) => {
  n.pattern ?? (n.pattern = r8(n)), vt.init(e, n);
}), U8 = /* @__PURE__ */ I("$ZodISODuration", (e, n) => {
  n.pattern ?? (n.pattern = Kw), vt.init(e, n);
}), j8 = /* @__PURE__ */ I("$ZodIPv4", (e, n) => {
  n.pattern ?? (n.pattern = Jw), vt.init(e, n), e._zod.bag.format = "ipv4";
}), H8 = /* @__PURE__ */ I("$ZodIPv6", (e, n) => {
  n.pattern ?? (n.pattern = Ww), vt.init(e, n), e._zod.bag.format = "ipv6", e._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
}), V8 = /* @__PURE__ */ I("$ZodCIDRv4", (e, n) => {
  n.pattern ?? (n.pattern = e8), vt.init(e, n);
}), G8 = /* @__PURE__ */ I("$ZodCIDRv6", (e, n) => {
  n.pattern ?? (n.pattern = t8), vt.init(e, n), e._zod.check = (i) => {
    const o = i.value.split("/");
    try {
      if (o.length !== 2)
        throw new Error();
      const [l, c] = o;
      if (!c)
        throw new Error();
      const d = Number(c);
      if (`${d}` !== c)
        throw new Error();
      if (d < 0 || d > 128)
        throw new Error();
      new URL(`http://[${l}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
});
function u4(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const B8 = /* @__PURE__ */ I("$ZodBase64", (e, n) => {
  n.pattern ?? (n.pattern = n8), vt.init(e, n), e._zod.bag.contentEncoding = "base64", e._zod.check = (i) => {
    u4(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: e,
      continue: !n.abort
    });
  };
});
function F8(e) {
  if (!s4.test(e))
    return !1;
  const n = e.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), i = n.padEnd(Math.ceil(n.length / 4) * 4, "=");
  return u4(i);
}
const Z8 = /* @__PURE__ */ I("$ZodBase64URL", (e, n) => {
  n.pattern ?? (n.pattern = s4), vt.init(e, n), e._zod.bag.contentEncoding = "base64url", e._zod.check = (i) => {
    F8(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: e,
      continue: !n.abort
    });
  };
}), I8 = /* @__PURE__ */ I("$ZodE164", (e, n) => {
  n.pattern ?? (n.pattern = a8), vt.init(e, n);
});
function q8(e, n = null) {
  try {
    const i = e.split(".");
    if (i.length !== 3)
      return !1;
    const [o] = i;
    if (!o)
      return !1;
    const l = JSON.parse(atob(o));
    return !("typ" in l && l?.typ !== "JWT" || !l.alg || n && (!("alg" in l) || l.alg !== n));
  } catch {
    return !1;
  }
}
const Y8 = /* @__PURE__ */ I("$ZodJWT", (e, n) => {
  vt.init(e, n), e._zod.check = (i) => {
    q8(i.value, n.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: e,
      continue: !n.abort
    });
  };
}), K8 = /* @__PURE__ */ I("$ZodUnknown", (e, n) => {
  Kt.init(e, n), e._zod.parse = (i) => i;
}), X8 = /* @__PURE__ */ I("$ZodNever", (e, n) => {
  Kt.init(e, n), e._zod.parse = (i, o) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: e
  }), i);
});
function lv(e, n, i) {
  e.issues.length && n.issues.push(...r4(i, e.issues)), n.value[i] = e.value;
}
const Q8 = /* @__PURE__ */ I("$ZodArray", (e, n) => {
  Kt.init(e, n), e._zod.parse = (i, o) => {
    const l = i.value;
    if (!Array.isArray(l))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: l,
        inst: e
      }), i;
    i.value = Array(l.length);
    const c = [];
    for (let d = 0; d < l.length; d++) {
      const h = l[d], g = n.element._zod.run({
        value: h,
        issues: []
      }, o);
      g instanceof Promise ? c.push(g.then((m) => lv(m, i, d))) : lv(g, i, d);
    }
    return c.length ? Promise.all(c).then(() => i) : i;
  };
});
function wu(e, n, i, o, l) {
  if (e.issues.length) {
    if (l && !(i in o))
      return;
    n.issues.push(...r4(i, e.issues));
  }
  e.value === void 0 ? i in o && (n.value[i] = void 0) : n.value[i] = e.value;
}
function f4(e) {
  const n = Object.keys(e.shape);
  for (const o of n)
    if (!e.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const i = bw(e.shape);
  return {
    ...e,
    keys: n,
    keySet: new Set(n),
    numKeys: n.length,
    optionalKeys: new Set(i)
  };
}
function d4(e, n, i, o, l, c) {
  const d = [], h = l.keySet, g = l.catchall._zod, m = g.def.type, y = g.optout === "optional";
  for (const b in n) {
    if (h.has(b))
      continue;
    if (m === "never") {
      d.push(b);
      continue;
    }
    const A = g.run({ value: n[b], issues: [] }, o);
    A instanceof Promise ? e.push(A.then((x) => wu(x, i, b, n, y))) : wu(A, i, b, n, y);
  }
  return d.length && i.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: n,
    inst: c
  }), e.length ? Promise.all(e).then(() => i) : i;
}
const $8 = /* @__PURE__ */ I("$ZodObject", (e, n) => {
  if (Kt.init(e, n), !Object.getOwnPropertyDescriptor(n, "shape")?.get) {
    const h = n.shape;
    Object.defineProperty(n, "shape", {
      get: () => {
        const g = { ...h };
        return Object.defineProperty(n, "shape", {
          value: g
        }), g;
      }
    });
  }
  const o = C1(() => f4(n));
  tt(e._zod, "propValues", () => {
    const h = n.shape, g = {};
    for (const m in h) {
      const y = h[m]._zod;
      if (y.values) {
        g[m] ?? (g[m] = /* @__PURE__ */ new Set());
        for (const b of y.values)
          g[m].add(b);
      }
    }
    return g;
  });
  const l = _u, c = n.catchall;
  let d;
  e._zod.parse = (h, g) => {
    d ?? (d = o.value);
    const m = h.value;
    if (!l(m))
      return h.issues.push({
        expected: "object",
        code: "invalid_type",
        input: m,
        inst: e
      }), h;
    h.value = {};
    const y = [], b = d.shape;
    for (const A of d.keys) {
      const x = b[A], V = x._zod.optout === "optional", F = x._zod.run({ value: m[A], issues: [] }, g);
      F instanceof Promise ? y.push(F.then((q) => wu(q, h, A, m, V))) : wu(F, h, A, m, V);
    }
    return c ? d4(y, m, h, g, o.value, e) : y.length ? Promise.all(y).then(() => h) : h;
  };
}), P8 = /* @__PURE__ */ I("$ZodObjectJIT", (e, n) => {
  $8.init(e, n);
  const i = e._zod.parse, o = C1(() => f4(n)), l = (A) => {
    const x = new _8(["shape", "payload", "ctx"]), V = o.value, F = (W) => {
      const ee = ov(W);
      return `shape[${ee}]._zod.run({ value: input[${ee}], issues: [] }, ctx)`;
    };
    x.write("const input = payload.value;");
    const q = /* @__PURE__ */ Object.create(null);
    let te = 0;
    for (const W of V.keys)
      q[W] = `key_${te++}`;
    x.write("const newResult = {};");
    for (const W of V.keys) {
      const ee = q[W], ae = ov(W), ce = A[W]?._zod?.optout === "optional";
      x.write(`const ${ee} = ${F(W)};`), ce ? x.write(`
        if (${ee}.issues.length) {
          if (${ae} in input) {
            payload.issues = payload.issues.concat(${ee}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${ae}, ...iss.path] : [${ae}]
            })));
          }
        }
        
        if (${ee}.value === undefined) {
          if (${ae} in input) {
            newResult[${ae}] = undefined;
          }
        } else {
          newResult[${ae}] = ${ee}.value;
        }
        
      `) : x.write(`
        if (${ee}.issues.length) {
          payload.issues = payload.issues.concat(${ee}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${ae}, ...iss.path] : [${ae}]
          })));
        }
        
        if (${ee}.value === undefined) {
          if (${ae} in input) {
            newResult[${ae}] = undefined;
          }
        } else {
          newResult[${ae}] = ${ee}.value;
        }
        
      `);
    }
    x.write("payload.value = newResult;"), x.write("return payload;");
    const ne = x.compile();
    return (W, ee) => ne(A, W, ee);
  };
  let c;
  const d = _u, h = !t4.jitless, m = h && vw.value, y = n.catchall;
  let b;
  e._zod.parse = (A, x) => {
    b ?? (b = o.value);
    const V = A.value;
    return d(V) ? h && m && x?.async === !1 && x.jitless !== !0 ? (c || (c = l(n.shape)), A = c(A, x), y ? d4([], V, A, x, b, e) : A) : i(A, x) : (A.issues.push({
      expected: "object",
      code: "invalid_type",
      input: V,
      inst: e
    }), A);
  };
});
function cv(e, n, i, o) {
  for (const c of e)
    if (c.issues.length === 0)
      return n.value = c.value, n;
  const l = e.filter((c) => !Mo(c));
  return l.length === 1 ? (n.value = l[0].value, l[0]) : (n.issues.push({
    code: "invalid_union",
    input: n.value,
    inst: i,
    errors: e.map((c) => c.issues.map((d) => Dr(d, o, Cr())))
  }), n);
}
const J8 = /* @__PURE__ */ I("$ZodUnion", (e, n) => {
  Kt.init(e, n), tt(e._zod, "optin", () => n.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), tt(e._zod, "optout", () => n.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), tt(e._zod, "values", () => {
    if (n.options.every((l) => l._zod.values))
      return new Set(n.options.flatMap((l) => Array.from(l._zod.values)));
  }), tt(e._zod, "pattern", () => {
    if (n.options.every((l) => l._zod.pattern)) {
      const l = n.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${l.map((c) => M1(c.source)).join("|")})$`);
    }
  });
  const i = n.options.length === 1, o = n.options[0]._zod.run;
  e._zod.parse = (l, c) => {
    if (i)
      return o(l, c);
    let d = !1;
    const h = [];
    for (const g of n.options) {
      const m = g._zod.run({
        value: l.value,
        issues: []
      }, c);
      if (m instanceof Promise)
        h.push(m), d = !0;
      else {
        if (m.issues.length === 0)
          return m;
        h.push(m);
      }
    }
    return d ? Promise.all(h).then((g) => cv(g, l, e, c)) : cv(h, l, e, c);
  };
}), W8 = /* @__PURE__ */ I("$ZodIntersection", (e, n) => {
  Kt.init(e, n), e._zod.parse = (i, o) => {
    const l = i.value, c = n.left._zod.run({ value: l, issues: [] }, o), d = n.right._zod.run({ value: l, issues: [] }, o);
    return c instanceof Promise || d instanceof Promise ? Promise.all([c, d]).then(([g, m]) => uv(i, g, m)) : uv(i, c, d);
  };
});
function t1(e, n) {
  if (e === n)
    return { valid: !0, data: e };
  if (e instanceof Date && n instanceof Date && +e == +n)
    return { valid: !0, data: e };
  if (wl(e) && wl(n)) {
    const i = Object.keys(n), o = Object.keys(e).filter((c) => i.indexOf(c) !== -1), l = { ...e, ...n };
    for (const c of o) {
      const d = t1(e[c], n[c]);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...d.mergeErrorPath]
        };
      l[c] = d.data;
    }
    return { valid: !0, data: l };
  }
  if (Array.isArray(e) && Array.isArray(n)) {
    if (e.length !== n.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let o = 0; o < e.length; o++) {
      const l = e[o], c = n[o], d = t1(l, c);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...d.mergeErrorPath]
        };
      i.push(d.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function uv(e, n, i) {
  const o = /* @__PURE__ */ new Map();
  let l;
  for (const h of n.issues)
    if (h.code === "unrecognized_keys") {
      l ?? (l = h);
      for (const g of h.keys)
        o.has(g) || o.set(g, {}), o.get(g).l = !0;
    } else
      e.issues.push(h);
  for (const h of i.issues)
    if (h.code === "unrecognized_keys")
      for (const g of h.keys)
        o.has(g) || o.set(g, {}), o.get(g).r = !0;
    else
      e.issues.push(h);
  const c = [...o].filter(([, h]) => h.l && h.r).map(([h]) => h);
  if (c.length && l && e.issues.push({ ...l, keys: c }), Mo(e))
    return e;
  const d = t1(n.value, i.value);
  if (!d.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
  return e.value = d.data, e;
}
const eA = /* @__PURE__ */ I("$ZodEnum", (e, n) => {
  Kt.init(e, n);
  const i = n4(n.entries), o = new Set(i);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${i.filter((l) => yw.has(typeof l)).map((l) => typeof l == "string" ? Mu(l) : l.toString()).join("|")})$`), e._zod.parse = (l, c) => {
    const d = l.value;
    return o.has(d) || l.issues.push({
      code: "invalid_value",
      values: i,
      input: d,
      inst: e
    }), l;
  };
}), tA = /* @__PURE__ */ I("$ZodTransform", (e, n) => {
  Kt.init(e, n), e._zod.parse = (i, o) => {
    if (o.direction === "backward")
      throw new e4(e.constructor.name);
    const l = n.transform(i.value, i);
    if (o.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((d) => (i.value = d, i));
    if (l instanceof Promise)
      throw new Ho();
    return i.value = l, i;
  };
});
function fv(e, n) {
  return e.issues.length && n === void 0 ? { issues: [], value: void 0 } : e;
}
const h4 = /* @__PURE__ */ I("$ZodOptional", (e, n) => {
  Kt.init(e, n), e._zod.optin = "optional", e._zod.optout = "optional", tt(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, void 0]) : void 0), tt(e._zod, "pattern", () => {
    const i = n.innerType._zod.pattern;
    return i ? new RegExp(`^(${M1(i.source)})?$`) : void 0;
  }), e._zod.parse = (i, o) => {
    if (n.innerType._zod.optin === "optional") {
      const l = n.innerType._zod.run(i, o);
      return l instanceof Promise ? l.then((c) => fv(c, i.value)) : fv(l, i.value);
    }
    return i.value === void 0 ? i : n.innerType._zod.run(i, o);
  };
}), nA = /* @__PURE__ */ I("$ZodExactOptional", (e, n) => {
  h4.init(e, n), tt(e._zod, "values", () => n.innerType._zod.values), tt(e._zod, "pattern", () => n.innerType._zod.pattern), e._zod.parse = (i, o) => n.innerType._zod.run(i, o);
}), aA = /* @__PURE__ */ I("$ZodNullable", (e, n) => {
  Kt.init(e, n), tt(e._zod, "optin", () => n.innerType._zod.optin), tt(e._zod, "optout", () => n.innerType._zod.optout), tt(e._zod, "pattern", () => {
    const i = n.innerType._zod.pattern;
    return i ? new RegExp(`^(${M1(i.source)}|null)$`) : void 0;
  }), tt(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, null]) : void 0), e._zod.parse = (i, o) => i.value === null ? i : n.innerType._zod.run(i, o);
}), iA = /* @__PURE__ */ I("$ZodDefault", (e, n) => {
  Kt.init(e, n), e._zod.optin = "optional", tt(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (i, o) => {
    if (o.direction === "backward")
      return n.innerType._zod.run(i, o);
    if (i.value === void 0)
      return i.value = n.defaultValue, i;
    const l = n.innerType._zod.run(i, o);
    return l instanceof Promise ? l.then((c) => dv(c, n)) : dv(l, n);
  };
});
function dv(e, n) {
  return e.value === void 0 && (e.value = n.defaultValue), e;
}
const rA = /* @__PURE__ */ I("$ZodPrefault", (e, n) => {
  Kt.init(e, n), e._zod.optin = "optional", tt(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (i, o) => (o.direction === "backward" || i.value === void 0 && (i.value = n.defaultValue), n.innerType._zod.run(i, o));
}), oA = /* @__PURE__ */ I("$ZodNonOptional", (e, n) => {
  Kt.init(e, n), tt(e._zod, "values", () => {
    const i = n.innerType._zod.values;
    return i ? new Set([...i].filter((o) => o !== void 0)) : void 0;
  }), e._zod.parse = (i, o) => {
    const l = n.innerType._zod.run(i, o);
    return l instanceof Promise ? l.then((c) => hv(c, e)) : hv(l, e);
  };
});
function hv(e, n) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: n
  }), e;
}
const sA = /* @__PURE__ */ I("$ZodCatch", (e, n) => {
  Kt.init(e, n), tt(e._zod, "optin", () => n.innerType._zod.optin), tt(e._zod, "optout", () => n.innerType._zod.optout), tt(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (i, o) => {
    if (o.direction === "backward")
      return n.innerType._zod.run(i, o);
    const l = n.innerType._zod.run(i, o);
    return l instanceof Promise ? l.then((c) => (i.value = c.value, c.issues.length && (i.value = n.catchValue({
      ...i,
      error: {
        issues: c.issues.map((d) => Dr(d, o, Cr()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = l.value, l.issues.length && (i.value = n.catchValue({
      ...i,
      error: {
        issues: l.issues.map((c) => Dr(c, o, Cr()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), lA = /* @__PURE__ */ I("$ZodPipe", (e, n) => {
  Kt.init(e, n), tt(e._zod, "values", () => n.in._zod.values), tt(e._zod, "optin", () => n.in._zod.optin), tt(e._zod, "optout", () => n.out._zod.optout), tt(e._zod, "propValues", () => n.in._zod.propValues), e._zod.parse = (i, o) => {
    if (o.direction === "backward") {
      const c = n.out._zod.run(i, o);
      return c instanceof Promise ? c.then((d) => su(d, n.in, o)) : su(c, n.in, o);
    }
    const l = n.in._zod.run(i, o);
    return l instanceof Promise ? l.then((c) => su(c, n.out, o)) : su(l, n.out, o);
  };
});
function su(e, n, i) {
  return e.issues.length ? (e.aborted = !0, e) : n._zod.run({ value: e.value, issues: e.issues }, i);
}
const cA = /* @__PURE__ */ I("$ZodReadonly", (e, n) => {
  Kt.init(e, n), tt(e._zod, "propValues", () => n.innerType._zod.propValues), tt(e._zod, "values", () => n.innerType._zod.values), tt(e._zod, "optin", () => n.innerType?._zod?.optin), tt(e._zod, "optout", () => n.innerType?._zod?.optout), e._zod.parse = (i, o) => {
    if (o.direction === "backward")
      return n.innerType._zod.run(i, o);
    const l = n.innerType._zod.run(i, o);
    return l instanceof Promise ? l.then(pv) : pv(l);
  };
});
function pv(e) {
  return e.value = Object.freeze(e.value), e;
}
const uA = /* @__PURE__ */ I("$ZodCustom", (e, n) => {
  Va.init(e, n), Kt.init(e, n), e._zod.parse = (i, o) => i, e._zod.check = (i) => {
    const o = i.value, l = n.fn(o);
    if (l instanceof Promise)
      return l.then((c) => gv(c, i, o, e));
    gv(l, i, o, e);
  };
});
function gv(e, n, i, o) {
  if (!e) {
    const l = {
      code: "custom",
      input: i,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (l.params = o._zod.def.params), n.issues.push(Al(l));
  }
}
var mv;
class fA {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(n, ...i) {
    const o = i[0];
    return this._map.set(n, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, n), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(n) {
    const i = this._map.get(n);
    return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(n), this;
  }
  get(n) {
    const i = n._zod.parent;
    if (i) {
      const o = { ...this.get(i) ?? {} };
      delete o.id;
      const l = { ...o, ...this._map.get(n) };
      return Object.keys(l).length ? l : void 0;
    }
    return this._map.get(n);
  }
  has(n) {
    return this._map.has(n);
  }
}
function dA() {
  return new fA();
}
(mv = globalThis).__zod_globalRegistry ?? (mv.__zod_globalRegistry = dA());
const dl = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function hA(e, n) {
  return new e({
    type: "string",
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function pA(e, n) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function vv(e, n) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function gA(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function mA(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function vA(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function yA(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function bA(e, n) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function _A(e, n) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function wA(e, n) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function AA(e, n) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function EA(e, n) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function SA(e, n) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function xA(e, n) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function TA(e, n) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function kA(e, n) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function OA(e, n) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function RA(e, n) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function zA(e, n) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function NA(e, n) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function LA(e, n) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function CA(e, n) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function DA(e, n) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function MA(e, n) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function UA(e, n) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function jA(e, n) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function HA(e, n) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function VA(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function GA(e, n) {
  return new e({
    type: "never",
    ...ke(n)
  });
}
// @__NO_SIDE_EFFECTS__
function p4(e, n) {
  return new u8({
    check: "max_length",
    ...ke(n),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Au(e, n) {
  return new f8({
    check: "min_length",
    ...ke(n),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function g4(e, n) {
  return new d8({
    check: "length_equals",
    ...ke(n),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function BA(e, n) {
  return new h8({
    check: "string_format",
    format: "regex",
    ...ke(n),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function FA(e) {
  return new p8({
    check: "string_format",
    format: "lowercase",
    ...ke(e)
  });
}
// @__NO_SIDE_EFFECTS__
function ZA(e) {
  return new g8({
    check: "string_format",
    format: "uppercase",
    ...ke(e)
  });
}
// @__NO_SIDE_EFFECTS__
function IA(e, n) {
  return new m8({
    check: "string_format",
    format: "includes",
    ...ke(n),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function qA(e, n) {
  return new v8({
    check: "string_format",
    format: "starts_with",
    ...ke(n),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function YA(e, n) {
  return new y8({
    check: "string_format",
    format: "ends_with",
    ...ke(n),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function es(e) {
  return new b8({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function KA(e) {
  return /* @__PURE__ */ es((n) => n.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function XA() {
  return /* @__PURE__ */ es((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function QA() {
  return /* @__PURE__ */ es((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function $A() {
  return /* @__PURE__ */ es((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function PA() {
  return /* @__PURE__ */ es((e) => mw(e));
}
// @__NO_SIDE_EFFECTS__
function JA(e, n, i) {
  return new e({
    type: "array",
    element: n,
    // get element() {
    //   return element;
    // },
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function WA(e, n, i) {
  return new e({
    type: "custom",
    check: "custom",
    fn: n,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function eE(e) {
  const n = /* @__PURE__ */ tE((i) => (i.addIssue = (o) => {
    if (typeof o == "string")
      i.issues.push(Al(o, i.value, n._zod.def));
    else {
      const l = o;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = i.value), l.inst ?? (l.inst = n), l.continue ?? (l.continue = !n._zod.def.abort), i.issues.push(Al(l));
    }
  }, e(i.value, i)));
  return n;
}
// @__NO_SIDE_EFFECTS__
function tE(e, n) {
  const i = new Va({
    check: "custom",
    ...ke(n)
  });
  return i._zod.check = e, i;
}
function m4(e) {
  let n = e?.target ?? "draft-2020-12";
  return n === "draft-4" && (n = "draft-04"), n === "draft-7" && (n = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? dl,
    target: n,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    external: e?.external ?? void 0
  };
}
function fn(e, n, i = { path: [], schemaPath: [] }) {
  var o;
  const l = e._zod.def, c = n.seen.get(e);
  if (c)
    return c.count++, i.schemaPath.includes(e) && (c.cycle = i.path), c.schema;
  const d = { schema: {}, count: 1, cycle: void 0, path: i.path };
  n.seen.set(e, d);
  const h = e._zod.toJSONSchema?.();
  if (h)
    d.schema = h;
  else {
    const y = {
      ...i,
      schemaPath: [...i.schemaPath, e],
      path: i.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(n, d.schema, y);
    else {
      const A = d.schema, x = n.processors[l.type];
      if (!x)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${l.type}`);
      x(e, n, A, y);
    }
    const b = e._zod.parent;
    b && (d.ref || (d.ref = b), fn(b, n, y), n.seen.get(b).isParent = !0);
  }
  const g = n.metadataRegistry.get(e);
  return g && Object.assign(d.schema, g), n.io === "input" && mn(e) && (delete d.schema.examples, delete d.schema.default), n.io === "input" && d.schema._prefault && ((o = d.schema).default ?? (o.default = d.schema._prefault)), delete d.schema._prefault, n.seen.get(e).schema;
}
function v4(e, n) {
  const i = e.seen.get(n);
  if (!i)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = /* @__PURE__ */ new Map();
  for (const d of e.seen.entries()) {
    const h = e.metadataRegistry.get(d[0])?.id;
    if (h) {
      const g = o.get(h);
      if (g && g !== d[0])
        throw new Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(h, d[0]);
    }
  }
  const l = (d) => {
    const h = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const b = e.external.registry.get(d[0])?.id, A = e.external.uri ?? ((V) => V);
      if (b)
        return { ref: A(b) };
      const x = d[1].defId ?? d[1].schema.id ?? `schema${e.counter++}`;
      return d[1].defId = x, { defId: x, ref: `${A("__shared")}#/${h}/${x}` };
    }
    if (d[1] === i)
      return { ref: "#" };
    const m = `#/${h}/`, y = d[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: y, ref: m + y };
  }, c = (d) => {
    if (d[1].schema.$ref)
      return;
    const h = d[1], { ref: g, defId: m } = l(d);
    h.def = { ...h.schema }, m && (h.defId = m);
    const y = h.schema;
    for (const b in y)
      delete y[b];
    y.$ref = g;
  };
  if (e.cycles === "throw")
    for (const d of e.seen.entries()) {
      const h = d[1];
      if (h.cycle)
        throw new Error(`Cycle detected: #/${h.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const d of e.seen.entries()) {
    const h = d[1];
    if (n === d[0]) {
      c(d);
      continue;
    }
    if (e.external) {
      const m = e.external.registry.get(d[0])?.id;
      if (n !== d[0] && m) {
        c(d);
        continue;
      }
    }
    if (e.metadataRegistry.get(d[0])?.id) {
      c(d);
      continue;
    }
    if (h.cycle) {
      c(d);
      continue;
    }
    if (h.count > 1 && e.reused === "ref") {
      c(d);
      continue;
    }
  }
}
function y4(e, n) {
  const i = e.seen.get(n);
  if (!i)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (d) => {
    const h = e.seen.get(d);
    if (h.ref === null)
      return;
    const g = h.def ?? h.schema, m = { ...g }, y = h.ref;
    if (h.ref = null, y) {
      o(y);
      const A = e.seen.get(y), x = A.schema;
      if (x.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(x)) : Object.assign(g, x), Object.assign(g, m), d._zod.parent === y)
        for (const F in g)
          F === "$ref" || F === "allOf" || F in m || delete g[F];
      if (x.$ref && A.def)
        for (const F in g)
          F === "$ref" || F === "allOf" || F in A.def && JSON.stringify(g[F]) === JSON.stringify(A.def[F]) && delete g[F];
    }
    const b = d._zod.parent;
    if (b && b !== y) {
      o(b);
      const A = e.seen.get(b);
      if (A?.schema.$ref && (g.$ref = A.schema.$ref, A.def))
        for (const x in g)
          x === "$ref" || x === "allOf" || x in A.def && JSON.stringify(g[x]) === JSON.stringify(A.def[x]) && delete g[x];
    }
    e.override({
      zodSchema: d,
      jsonSchema: g,
      path: h.path ?? []
    });
  };
  for (const d of [...e.seen.entries()].reverse())
    o(d[0]);
  const l = {};
  if (e.target === "draft-2020-12" ? l.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? l.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? l.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const d = e.external.registry.get(n)?.id;
    if (!d)
      throw new Error("Schema is missing an `id` property");
    l.$id = e.external.uri(d);
  }
  Object.assign(l, i.def ?? i.schema);
  const c = e.external?.defs ?? {};
  for (const d of e.seen.entries()) {
    const h = d[1];
    h.def && h.defId && (c[h.defId] = h.def);
  }
  e.external || Object.keys(c).length > 0 && (e.target === "draft-2020-12" ? l.$defs = c : l.definitions = c);
  try {
    const d = JSON.parse(JSON.stringify(l));
    return Object.defineProperty(d, "~standard", {
      value: {
        ...n["~standard"],
        jsonSchema: {
          input: Eu(n, "input", e.processors),
          output: Eu(n, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), d;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function mn(e, n) {
  const i = n ?? { seen: /* @__PURE__ */ new Set() };
  if (i.seen.has(e))
    return !1;
  i.seen.add(e);
  const o = e._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return mn(o.element, i);
  if (o.type === "set")
    return mn(o.valueType, i);
  if (o.type === "lazy")
    return mn(o.getter(), i);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault")
    return mn(o.innerType, i);
  if (o.type === "intersection")
    return mn(o.left, i) || mn(o.right, i);
  if (o.type === "record" || o.type === "map")
    return mn(o.keyType, i) || mn(o.valueType, i);
  if (o.type === "pipe")
    return mn(o.in, i) || mn(o.out, i);
  if (o.type === "object") {
    for (const l in o.shape)
      if (mn(o.shape[l], i))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const l of o.options)
      if (mn(l, i))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const l of o.items)
      if (mn(l, i))
        return !0;
    return !!(o.rest && mn(o.rest, i));
  }
  return !1;
}
const nE = (e, n = {}) => (i) => {
  const o = m4({ ...i, processors: n });
  return fn(e, o), v4(o, e), y4(o, e);
}, Eu = (e, n, i = {}) => (o) => {
  const { libraryOptions: l, target: c } = o ?? {}, d = m4({ ...l ?? {}, target: c, io: n, processors: i });
  return fn(e, d), v4(d, e), y4(d, e);
}, aE = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, iE = (e, n, i, o) => {
  const l = i;
  l.type = "string";
  const { minimum: c, maximum: d, format: h, patterns: g, contentEncoding: m } = e._zod.bag;
  if (typeof c == "number" && (l.minLength = c), typeof d == "number" && (l.maxLength = d), h && (l.format = aE[h] ?? h, l.format === "" && delete l.format, h === "time" && delete l.format), m && (l.contentEncoding = m), g && g.size > 0) {
    const y = [...g];
    y.length === 1 ? l.pattern = y[0].source : y.length > 1 && (l.allOf = [
      ...y.map((b) => ({
        ...n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: b.source
      }))
    ]);
  }
}, rE = (e, n, i, o) => {
  i.not = {};
}, oE = (e, n, i, o) => {
}, sE = (e, n, i, o) => {
  const l = e._zod.def, c = n4(l.entries);
  c.every((d) => typeof d == "number") && (i.type = "number"), c.every((d) => typeof d == "string") && (i.type = "string"), i.enum = c;
}, lE = (e, n, i, o) => {
  if (n.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, cE = (e, n, i, o) => {
  if (n.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, uE = (e, n, i, o) => {
  const l = i, c = e._zod.def, { minimum: d, maximum: h } = e._zod.bag;
  typeof d == "number" && (l.minItems = d), typeof h == "number" && (l.maxItems = h), l.type = "array", l.items = fn(c.element, n, { ...o, path: [...o.path, "items"] });
}, fE = (e, n, i, o) => {
  const l = i, c = e._zod.def;
  l.type = "object", l.properties = {};
  const d = c.shape;
  for (const m in d)
    l.properties[m] = fn(d[m], n, {
      ...o,
      path: [...o.path, "properties", m]
    });
  const h = new Set(Object.keys(d)), g = new Set([...h].filter((m) => {
    const y = c.shape[m]._zod;
    return n.io === "input" ? y.optin === void 0 : y.optout === void 0;
  }));
  g.size > 0 && (l.required = Array.from(g)), c.catchall?._zod.def.type === "never" ? l.additionalProperties = !1 : c.catchall ? c.catchall && (l.additionalProperties = fn(c.catchall, n, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : n.io === "output" && (l.additionalProperties = !1);
}, dE = (e, n, i, o) => {
  const l = e._zod.def, c = l.inclusive === !1, d = l.options.map((h, g) => fn(h, n, {
    ...o,
    path: [...o.path, c ? "oneOf" : "anyOf", g]
  }));
  c ? i.oneOf = d : i.anyOf = d;
}, hE = (e, n, i, o) => {
  const l = e._zod.def, c = fn(l.left, n, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), d = fn(l.right, n, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), h = (m) => "allOf" in m && Object.keys(m).length === 1, g = [
    ...h(c) ? c.allOf : [c],
    ...h(d) ? d.allOf : [d]
  ];
  i.allOf = g;
}, pE = (e, n, i, o) => {
  const l = e._zod.def, c = fn(l.innerType, n, o), d = n.seen.get(e);
  n.target === "openapi-3.0" ? (d.ref = l.innerType, i.nullable = !0) : i.anyOf = [c, { type: "null" }];
}, gE = (e, n, i, o) => {
  const l = e._zod.def;
  fn(l.innerType, n, o);
  const c = n.seen.get(e);
  c.ref = l.innerType;
}, mE = (e, n, i, o) => {
  const l = e._zod.def;
  fn(l.innerType, n, o);
  const c = n.seen.get(e);
  c.ref = l.innerType, i.default = JSON.parse(JSON.stringify(l.defaultValue));
}, vE = (e, n, i, o) => {
  const l = e._zod.def;
  fn(l.innerType, n, o);
  const c = n.seen.get(e);
  c.ref = l.innerType, n.io === "input" && (i._prefault = JSON.parse(JSON.stringify(l.defaultValue)));
}, yE = (e, n, i, o) => {
  const l = e._zod.def;
  fn(l.innerType, n, o);
  const c = n.seen.get(e);
  c.ref = l.innerType;
  let d;
  try {
    d = l.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  i.default = d;
}, bE = (e, n, i, o) => {
  const l = e._zod.def, c = n.io === "input" ? l.in._zod.def.type === "transform" ? l.out : l.in : l.out;
  fn(c, n, o);
  const d = n.seen.get(e);
  d.ref = c;
}, _E = (e, n, i, o) => {
  const l = e._zod.def;
  fn(l.innerType, n, o);
  const c = n.seen.get(e);
  c.ref = l.innerType, i.readOnly = !0;
}, b4 = (e, n, i, o) => {
  const l = e._zod.def;
  fn(l.innerType, n, o);
  const c = n.seen.get(e);
  c.ref = l.innerType;
};
function yv(e, n) {
  try {
    var i = e();
  } catch (o) {
    return n(o);
  }
  return i && i.then ? i.then(void 0, n) : i;
}
function wE(e, n) {
  for (var i = {}; e.length; ) {
    var o = e[0], l = o.code, c = o.message, d = o.path.join(".");
    if (!i[d]) if ("unionErrors" in o) {
      var h = o.unionErrors[0].errors[0];
      i[d] = { message: h.message, type: h.code };
    } else i[d] = { message: c, type: l };
    if ("unionErrors" in o && o.unionErrors.forEach(function(y) {
      return y.errors.forEach(function(b) {
        return e.push(b);
      });
    }), n) {
      var g = i[d].types, m = g && g[o.code];
      i[d] = z1(d, n, i, l, m ? [].concat(m, o.message) : o.message);
    }
    e.shift();
  }
  return i;
}
function AE(e, n) {
  for (var i = {}; e.length; ) {
    var o = e[0], l = o.code, c = o.message, d = o.path.join(".");
    if (!i[d]) if (o.code === "invalid_union" && o.errors.length > 0) {
      var h = o.errors[0][0];
      i[d] = { message: h.message, type: h.code };
    } else i[d] = { message: c, type: l };
    if (o.code === "invalid_union" && o.errors.forEach(function(y) {
      return y.forEach(function(b) {
        return e.push(b);
      });
    }), n) {
      var g = i[d].types, m = g && g[o.code];
      i[d] = z1(d, n, i, l, m ? [].concat(m, o.message) : o.message);
    }
    e.shift();
  }
  return i;
}
function EE(e, n, i) {
  if (i === void 0 && (i = {}), (function(o) {
    return "_def" in o && typeof o._def == "object" && "typeName" in o._def;
  })(e)) return function(o, l, c) {
    try {
      return Promise.resolve(yv(function() {
        return Promise.resolve(e[i.mode === "sync" ? "parse" : "parseAsync"](o, n)).then(function(d) {
          return c.shouldUseNativeValidation && Wh({}, c), { errors: {}, values: i.raw ? Object.assign({}, o) : d };
        });
      }, function(d) {
        if ((function(h) {
          return Array.isArray(h?.issues);
        })(d)) return { values: {}, errors: av(wE(d.errors, !c.shouldUseNativeValidation && c.criteriaMode === "all"), c) };
        throw d;
      }));
    } catch (d) {
      return Promise.reject(d);
    }
  };
  if ((function(o) {
    return "_zod" in o && typeof o._zod == "object";
  })(e)) return function(o, l, c) {
    try {
      return Promise.resolve(yv(function() {
        return Promise.resolve((i.mode === "sync" ? Rw : zw)(e, o, n)).then(function(d) {
          return c.shouldUseNativeValidation && Wh({}, c), { errors: {}, values: i.raw ? Object.assign({}, o) : d };
        });
      }, function(d) {
        if ((function(h) {
          return h instanceof j1;
        })(d)) return { values: {}, errors: av(AE(d.issues, !c.shouldUseNativeValidation && c.criteriaMode === "all"), c) };
        throw d;
      }));
    } catch (d) {
      return Promise.reject(d);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
function _4(e) {
  var n, i, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var l = e.length;
    for (n = 0; n < l; n++) e[n] && (i = _4(e[n])) && (o && (o += " "), o += i);
  } else for (i in e) e[i] && (o && (o += " "), o += i);
  return o;
}
function w4() {
  for (var e, n, i = 0, o = "", l = arguments.length; i < l; i++) (e = arguments[i]) && (n = _4(e)) && (o && (o += " "), o += n);
  return o;
}
const bv = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, _v = w4, A4 = (e, n) => (i) => {
  var o;
  if (n?.variants == null) return _v(e, i?.class, i?.className);
  const { variants: l, defaultVariants: c } = n, d = Object.keys(l).map((m) => {
    const y = i?.[m], b = c?.[m];
    if (y === null) return null;
    const A = bv(y) || bv(b);
    return l[m][A];
  }), h = i && Object.entries(i).reduce((m, y) => {
    let [b, A] = y;
    return A === void 0 || (m[b] = A), m;
  }, {}), g = n == null || (o = n.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((m, y) => {
    let { class: b, className: A, ...x } = y;
    return Object.entries(x).every((V) => {
      let [F, q] = V;
      return Array.isArray(q) ? q.includes({
        ...c,
        ...h
      }[F]) : {
        ...c,
        ...h
      }[F] === q;
    }) ? [
      ...m,
      b,
      A
    ] : m;
  }, []);
  return _v(e, d, g, i?.class, i?.className);
};
Z3();
function wv(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function E4(...e) {
  return (n) => {
    let i = !1;
    const o = e.map((l) => {
      const c = wv(l, n);
      return !i && typeof c == "function" && (i = !0), c;
    });
    if (i)
      return () => {
        for (let l = 0; l < o.length; l++) {
          const c = o[l];
          typeof c == "function" ? c() : wv(e[l], null);
        }
      };
  };
}
function pi(...e) {
  return B.useCallback(E4(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Su(e) {
  const n = /* @__PURE__ */ SE(e), i = B.forwardRef((o, l) => {
    const { children: c, ...d } = o, h = B.Children.toArray(c), g = h.find(TE);
    if (g) {
      const m = g.props.children, y = h.map((b) => b === g ? B.Children.count(m) > 1 ? B.Children.only(null) : B.isValidElement(m) ? m.props.children : null : b);
      return /* @__PURE__ */ L.jsx(n, { ...d, ref: l, children: B.isValidElement(m) ? B.cloneElement(m, void 0, y) : null });
    }
    return /* @__PURE__ */ L.jsx(n, { ...d, ref: l, children: c });
  });
  return i.displayName = `${e}.Slot`, i;
}
var S4 = /* @__PURE__ */ Su("Slot");
// @__NO_SIDE_EFFECTS__
function SE(e) {
  const n = B.forwardRef((i, o) => {
    const { children: l, ...c } = i;
    if (B.isValidElement(l)) {
      const d = OE(l), h = kE(c, l.props);
      return l.type !== B.Fragment && (h.ref = o ? E4(o, d) : d), B.cloneElement(l, h);
    }
    return B.Children.count(l) > 1 ? B.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var xE = /* @__PURE__ */ Symbol("radix.slottable");
function TE(e) {
  return B.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xE;
}
function kE(e, n) {
  const i = { ...n };
  for (const o in n) {
    const l = e[o], c = n[o];
    /^on[A-Z]/.test(o) ? l && c ? i[o] = (...h) => {
      const g = c(...h);
      return l(...h), g;
    } : l && (i[o] = l) : o === "style" ? i[o] = { ...l, ...c } : o === "className" && (i[o] = [l, c].filter(Boolean).join(" "));
  }
  return { ...e, ...i };
}
function OE(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning;
  return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning, i ? e.props.ref : e.props.ref || e.ref);
}
var RE = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Ga = RE.reduce((e, n) => {
  const i = /* @__PURE__ */ Su(`Primitive.${n}`), o = B.forwardRef((l, c) => {
    const { asChild: d, ...h } = l, g = d ? i : n;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ L.jsx(g, { ...h, ref: c });
  });
  return o.displayName = `Primitive.${n}`, { ...e, [n]: o };
}, {});
function zl(e, n = []) {
  let i = [];
  function o(c, d) {
    const h = B.createContext(d), g = i.length;
    i = [...i, d];
    const m = (b) => {
      const { scope: A, children: x, ...V } = b, F = A?.[e]?.[g] || h, q = B.useMemo(() => V, Object.values(V));
      return /* @__PURE__ */ L.jsx(F.Provider, { value: q, children: x });
    };
    m.displayName = c + "Provider";
    function y(b, A) {
      const x = A?.[e]?.[g] || h, V = B.useContext(x);
      if (V) return V;
      if (d !== void 0) return d;
      throw new Error(`\`${b}\` must be used within \`${c}\``);
    }
    return [m, y];
  }
  const l = () => {
    const c = i.map((d) => B.createContext(d));
    return function(h) {
      const g = h?.[e] || c;
      return B.useMemo(
        () => ({ [`__scope${e}`]: { ...h, [e]: g } }),
        [h, g]
      );
    };
  };
  return l.scopeName = e, [o, zE(l, ...n)];
}
function zE(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const i = () => {
    const o = e.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(c) {
      const d = o.reduce((h, { useScope: g, scopeName: m }) => {
        const b = g(c)[`__scope${m}`];
        return { ...h, ...b };
      }, {});
      return B.useMemo(() => ({ [`__scope${n.scopeName}`]: d }), [d]);
    };
  };
  return i.scopeName = n.scopeName, i;
}
function NE(e) {
  const n = e + "CollectionProvider", [i, o] = zl(n), [l, c] = i(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = (F) => {
    const { scope: q, children: te } = F, ne = Ve.useRef(null), W = Ve.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ L.jsx(l, { scope: q, itemMap: W, collectionRef: ne, children: te });
  };
  d.displayName = n;
  const h = e + "CollectionSlot", g = /* @__PURE__ */ Su(h), m = Ve.forwardRef(
    (F, q) => {
      const { scope: te, children: ne } = F, W = c(h, te), ee = pi(q, W.collectionRef);
      return /* @__PURE__ */ L.jsx(g, { ref: ee, children: ne });
    }
  );
  m.displayName = h;
  const y = e + "CollectionItemSlot", b = "data-radix-collection-item", A = /* @__PURE__ */ Su(y), x = Ve.forwardRef(
    (F, q) => {
      const { scope: te, children: ne, ...W } = F, ee = Ve.useRef(null), ae = pi(q, ee), Ee = c(y, te);
      return Ve.useEffect(() => (Ee.itemMap.set(ee, { ref: ee, ...W }), () => {
        Ee.itemMap.delete(ee);
      })), /* @__PURE__ */ L.jsx(A, { [b]: "", ref: ae, children: ne });
    }
  );
  x.displayName = y;
  function V(F) {
    const q = c(e + "CollectionConsumer", F);
    return Ve.useCallback(() => {
      const ne = q.collectionRef.current;
      if (!ne) return [];
      const W = Array.from(ne.querySelectorAll(`[${b}]`));
      return Array.from(q.itemMap.values()).sort(
        (Ee, ce) => W.indexOf(Ee.ref.current) - W.indexOf(ce.ref.current)
      );
    }, [q.collectionRef, q.itemMap]);
  }
  return [
    { Provider: d, Slot: m, ItemSlot: x },
    V,
    o
  ];
}
function ja(e, n, { checkForDefaultPrevented: i = !0 } = {}) {
  return function(l) {
    if (e?.(l), i === !1 || !l.defaultPrevented)
      return n?.(l);
  };
}
var El = globalThis?.document ? B.useLayoutEffect : () => {
}, LE = F3[" useInsertionEffect ".trim().toString()] || El;
function V1({
  prop: e,
  defaultProp: n,
  onChange: i = () => {
  },
  caller: o
}) {
  const [l, c, d] = CE({
    defaultProp: n,
    onChange: i
  }), h = e !== void 0, g = h ? e : l;
  {
    const y = B.useRef(e !== void 0);
    B.useEffect(() => {
      const b = y.current;
      b !== h && console.warn(
        `${o} is changing from ${b ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), y.current = h;
    }, [h, o]);
  }
  const m = B.useCallback(
    (y) => {
      if (h) {
        const b = DE(y) ? y(e) : y;
        b !== e && d.current?.(b);
      } else
        c(y);
    },
    [h, e, c, d]
  );
  return [g, m];
}
function CE({
  defaultProp: e,
  onChange: n
}) {
  const [i, o] = B.useState(e), l = B.useRef(i), c = B.useRef(n);
  return LE(() => {
    c.current = n;
  }, [n]), B.useEffect(() => {
    l.current !== i && (c.current?.(i), l.current = i);
  }, [i, l]), [i, o, c];
}
function DE(e) {
  return typeof e == "function";
}
function ME(e, n) {
  return B.useReducer((i, o) => n[i][o] ?? i, e);
}
var x4 = (e) => {
  const { present: n, children: i } = e, o = UE(n), l = typeof i == "function" ? i({ present: o.isPresent }) : B.Children.only(i), c = pi(o.ref, jE(l));
  return typeof i == "function" || o.isPresent ? B.cloneElement(l, { ref: c }) : null;
};
x4.displayName = "Presence";
function UE(e) {
  const [n, i] = B.useState(), o = B.useRef(null), l = B.useRef(e), c = B.useRef("none"), d = e ? "mounted" : "unmounted", [h, g] = ME(d, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return B.useEffect(() => {
    const m = lu(o.current);
    c.current = h === "mounted" ? m : "none";
  }, [h]), El(() => {
    const m = o.current, y = l.current;
    if (y !== e) {
      const A = c.current, x = lu(m);
      e ? g("MOUNT") : x === "none" || m?.display === "none" ? g("UNMOUNT") : g(y && A !== x ? "ANIMATION_OUT" : "UNMOUNT"), l.current = e;
    }
  }, [e, g]), El(() => {
    if (n) {
      let m;
      const y = n.ownerDocument.defaultView ?? window, b = (x) => {
        const F = lu(o.current).includes(CSS.escape(x.animationName));
        if (x.target === n && F && (g("ANIMATION_END"), !l.current)) {
          const q = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", m = y.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = q);
          });
        }
      }, A = (x) => {
        x.target === n && (c.current = lu(o.current));
      };
      return n.addEventListener("animationstart", A), n.addEventListener("animationcancel", b), n.addEventListener("animationend", b), () => {
        y.clearTimeout(m), n.removeEventListener("animationstart", A), n.removeEventListener("animationcancel", b), n.removeEventListener("animationend", b);
      };
    } else
      g("ANIMATION_END");
  }, [n, g]), {
    isPresent: ["mounted", "unmountSuspended"].includes(h),
    ref: B.useCallback((m) => {
      o.current = m ? getComputedStyle(m) : null, i(m);
    }, [])
  };
}
function lu(e) {
  return e?.animationName || "none";
}
function jE(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning;
  return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning, i ? e.props.ref : e.props.ref || e.ref);
}
var HE = F3[" useId ".trim().toString()] || (() => {
}), VE = 0;
function GE(e) {
  const [n, i] = B.useState(HE());
  return El(() => {
    i((o) => o ?? String(VE++));
  }, [e]), n ? `radix-${n}` : "";
}
var BE = B.createContext(void 0);
function T4(e) {
  const n = B.useContext(BE);
  return e || n || "ltr";
}
function FE(e) {
  const n = B.useRef(e);
  return B.useEffect(() => {
    n.current = e;
  }), B.useMemo(() => (...i) => n.current?.(...i), []);
}
function k4(e) {
  const n = B.useRef({ value: e, previous: e });
  return B.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
function O4(e) {
  const [n, i] = B.useState(void 0);
  return El(() => {
    if (e) {
      i({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const c = l[0];
        let d, h;
        if ("borderBoxSize" in c) {
          const g = c.borderBoxSize, m = Array.isArray(g) ? g[0] : g;
          d = m.inlineSize, h = m.blockSize;
        } else
          d = e.offsetWidth, h = e.offsetHeight;
        i({ width: d, height: h });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      i(void 0);
  }, [e]), n;
}
var Uh = "rovingFocusGroup.onEntryFocus", ZE = { bubbles: !1, cancelable: !0 }, Nl = "RovingFocusGroup", [n1, R4, IE] = NE(Nl), [qE, z4] = zl(
  Nl,
  [IE]
), [YE, KE] = qE(Nl), N4 = B.forwardRef(
  (e, n) => /* @__PURE__ */ L.jsx(n1.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ L.jsx(n1.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ L.jsx(XE, { ...e, ref: n }) }) })
);
N4.displayName = Nl;
var XE = B.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: i,
    orientation: o,
    loop: l = !1,
    dir: c,
    currentTabStopId: d,
    defaultCurrentTabStopId: h,
    onCurrentTabStopIdChange: g,
    onEntryFocus: m,
    preventScrollOnEntryFocus: y = !1,
    ...b
  } = e, A = B.useRef(null), x = pi(n, A), V = T4(c), [F, q] = V1({
    prop: d,
    defaultProp: h ?? null,
    onChange: g,
    caller: Nl
  }), [te, ne] = B.useState(!1), W = FE(m), ee = R4(i), ae = B.useRef(!1), [Ee, ce] = B.useState(0);
  return B.useEffect(() => {
    const Q = A.current;
    if (Q)
      return Q.addEventListener(Uh, W), () => Q.removeEventListener(Uh, W);
  }, [W]), /* @__PURE__ */ L.jsx(
    YE,
    {
      scope: i,
      orientation: o,
      dir: V,
      loop: l,
      currentTabStopId: F,
      onItemFocus: B.useCallback(
        (Q) => q(Q),
        [q]
      ),
      onItemShiftTab: B.useCallback(() => ne(!0), []),
      onFocusableItemAdd: B.useCallback(
        () => ce((Q) => Q + 1),
        []
      ),
      onFocusableItemRemove: B.useCallback(
        () => ce((Q) => Q - 1),
        []
      ),
      children: /* @__PURE__ */ L.jsx(
        Ga.div,
        {
          tabIndex: te || Ee === 0 ? -1 : 0,
          "data-orientation": o,
          ...b,
          ref: x,
          style: { outline: "none", ...e.style },
          onMouseDown: ja(e.onMouseDown, () => {
            ae.current = !0;
          }),
          onFocus: ja(e.onFocus, (Q) => {
            const Ke = !ae.current;
            if (Q.target === Q.currentTarget && Ke && !te) {
              const nt = new CustomEvent(Uh, ZE);
              if (Q.currentTarget.dispatchEvent(nt), !nt.defaultPrevented) {
                const Je = ee().filter((R) => R.focusable), ue = Je.find((R) => R.active), ye = Je.find((R) => R.id === F), Te = [ue, ye, ...Je].filter(
                  Boolean
                ).map((R) => R.ref.current);
                D4(Te, y);
              }
            }
            ae.current = !1;
          }),
          onBlur: ja(e.onBlur, () => ne(!1))
        }
      )
    }
  );
}), L4 = "RovingFocusGroupItem", C4 = B.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: i,
      focusable: o = !0,
      active: l = !1,
      tabStopId: c,
      children: d,
      ...h
    } = e, g = GE(), m = c || g, y = KE(L4, i), b = y.currentTabStopId === m, A = R4(i), { onFocusableItemAdd: x, onFocusableItemRemove: V, currentTabStopId: F } = y;
    return B.useEffect(() => {
      if (o)
        return x(), () => V();
    }, [o, x, V]), /* @__PURE__ */ L.jsx(
      n1.ItemSlot,
      {
        scope: i,
        id: m,
        focusable: o,
        active: l,
        children: /* @__PURE__ */ L.jsx(
          Ga.span,
          {
            tabIndex: b ? 0 : -1,
            "data-orientation": y.orientation,
            ...h,
            ref: n,
            onMouseDown: ja(e.onMouseDown, (q) => {
              o ? y.onItemFocus(m) : q.preventDefault();
            }),
            onFocus: ja(e.onFocus, () => y.onItemFocus(m)),
            onKeyDown: ja(e.onKeyDown, (q) => {
              if (q.key === "Tab" && q.shiftKey) {
                y.onItemShiftTab();
                return;
              }
              if (q.target !== q.currentTarget) return;
              const te = PE(q, y.orientation, y.dir);
              if (te !== void 0) {
                if (q.metaKey || q.ctrlKey || q.altKey || q.shiftKey) return;
                q.preventDefault();
                let W = A().filter((ee) => ee.focusable).map((ee) => ee.ref.current);
                if (te === "last") W.reverse();
                else if (te === "prev" || te === "next") {
                  te === "prev" && W.reverse();
                  const ee = W.indexOf(q.currentTarget);
                  W = y.loop ? JE(W, ee + 1) : W.slice(ee + 1);
                }
                setTimeout(() => D4(W));
              }
            }),
            children: typeof d == "function" ? d({ isCurrentTabStop: b, hasTabStop: F != null }) : d
          }
        )
      }
    );
  }
);
C4.displayName = L4;
var QE = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $E(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function PE(e, n, i) {
  const o = $E(e.key, i);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return QE[o];
}
function D4(e, n = !1) {
  const i = document.activeElement;
  for (const o of e)
    if (o === i || (o.focus({ preventScroll: n }), document.activeElement !== i)) return;
}
function JE(e, n) {
  return e.map((i, o) => e[(n + o) % e.length]);
}
var WE = N4, e9 = C4, t9 = "Label", M4 = B.forwardRef((e, n) => /* @__PURE__ */ L.jsx(
  Ga.label,
  {
    ...e,
    ref: n,
    onMouseDown: (i) => {
      i.target.closest("button, input, select, textarea") || (e.onMouseDown?.(i), !i.defaultPrevented && i.detail > 1 && i.preventDefault());
    }
  }
));
M4.displayName = t9;
var n9 = M4, G1 = "Radio", [a9, U4] = zl(G1), [i9, r9] = a9(G1), j4 = B.forwardRef(
  (e, n) => {
    const {
      __scopeRadio: i,
      name: o,
      checked: l = !1,
      required: c,
      disabled: d,
      value: h = "on",
      onCheck: g,
      form: m,
      ...y
    } = e, [b, A] = B.useState(null), x = pi(n, (q) => A(q)), V = B.useRef(!1), F = b ? m || !!b.closest("form") : !0;
    return /* @__PURE__ */ L.jsxs(i9, { scope: i, checked: l, disabled: d, children: [
      /* @__PURE__ */ L.jsx(
        Ga.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": l,
          "data-state": B4(l),
          "data-disabled": d ? "" : void 0,
          disabled: d,
          value: h,
          ...y,
          ref: x,
          onClick: ja(e.onClick, (q) => {
            l || g?.(), F && (V.current = q.isPropagationStopped(), V.current || q.stopPropagation());
          })
        }
      ),
      F && /* @__PURE__ */ L.jsx(
        G4,
        {
          control: b,
          bubbles: !V.current,
          name: o,
          value: h,
          checked: l,
          required: c,
          disabled: d,
          form: m,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
j4.displayName = G1;
var H4 = "RadioIndicator", V4 = B.forwardRef(
  (e, n) => {
    const { __scopeRadio: i, forceMount: o, ...l } = e, c = r9(H4, i);
    return /* @__PURE__ */ L.jsx(x4, { present: o || c.checked, children: /* @__PURE__ */ L.jsx(
      Ga.span,
      {
        "data-state": B4(c.checked),
        "data-disabled": c.disabled ? "" : void 0,
        ...l,
        ref: n
      }
    ) });
  }
);
V4.displayName = H4;
var o9 = "RadioBubbleInput", G4 = B.forwardRef(
  ({
    __scopeRadio: e,
    control: n,
    checked: i,
    bubbles: o = !0,
    ...l
  }, c) => {
    const d = B.useRef(null), h = pi(d, c), g = k4(i), m = O4(n);
    return B.useEffect(() => {
      const y = d.current;
      if (!y) return;
      const b = window.HTMLInputElement.prototype, x = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set;
      if (g !== i && x) {
        const V = new Event("click", { bubbles: o });
        x.call(y, i), y.dispatchEvent(V);
      }
    }, [g, i, o]), /* @__PURE__ */ L.jsx(
      Ga.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: i,
        ...l,
        tabIndex: -1,
        ref: h,
        style: {
          ...l.style,
          ...m,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
G4.displayName = o9;
function B4(e) {
  return e ? "checked" : "unchecked";
}
var s9 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Fu = "RadioGroup", [l9] = zl(Fu, [
  z4,
  U4
]), F4 = z4(), Z4 = U4(), [c9, u9] = l9(Fu), I4 = B.forwardRef(
  (e, n) => {
    const {
      __scopeRadioGroup: i,
      name: o,
      defaultValue: l,
      value: c,
      required: d = !1,
      disabled: h = !1,
      orientation: g,
      dir: m,
      loop: y = !0,
      onValueChange: b,
      ...A
    } = e, x = F4(i), V = T4(m), [F, q] = V1({
      prop: c,
      defaultProp: l ?? null,
      onChange: b,
      caller: Fu
    });
    return /* @__PURE__ */ L.jsx(
      c9,
      {
        scope: i,
        name: o,
        required: d,
        disabled: h,
        value: F,
        onValueChange: q,
        children: /* @__PURE__ */ L.jsx(
          WE,
          {
            asChild: !0,
            ...x,
            orientation: g,
            dir: V,
            loop: y,
            children: /* @__PURE__ */ L.jsx(
              Ga.div,
              {
                role: "radiogroup",
                "aria-required": d,
                "aria-orientation": g,
                "data-disabled": h ? "" : void 0,
                dir: V,
                ...A,
                ref: n
              }
            )
          }
        )
      }
    );
  }
);
I4.displayName = Fu;
var q4 = "RadioGroupItem", Y4 = B.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: i, disabled: o, ...l } = e, c = u9(q4, i), d = c.disabled || o, h = F4(i), g = Z4(i), m = B.useRef(null), y = pi(n, m), b = c.value === l.value, A = B.useRef(!1);
    return B.useEffect(() => {
      const x = (F) => {
        s9.includes(F.key) && (A.current = !0);
      }, V = () => A.current = !1;
      return document.addEventListener("keydown", x), document.addEventListener("keyup", V), () => {
        document.removeEventListener("keydown", x), document.removeEventListener("keyup", V);
      };
    }, []), /* @__PURE__ */ L.jsx(
      e9,
      {
        asChild: !0,
        ...h,
        focusable: !d,
        active: b,
        children: /* @__PURE__ */ L.jsx(
          j4,
          {
            disabled: d,
            required: c.required,
            checked: b,
            ...g,
            ...l,
            name: c.name,
            ref: y,
            onCheck: () => c.onValueChange(l.value),
            onKeyDown: ja((x) => {
              x.key === "Enter" && x.preventDefault();
            }),
            onFocus: ja(l.onFocus, () => {
              A.current && m.current?.click();
            })
          }
        )
      }
    );
  }
);
Y4.displayName = q4;
var f9 = "RadioGroupIndicator", K4 = B.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: i, ...o } = e, l = Z4(i);
    return /* @__PURE__ */ L.jsx(V4, { ...l, ...o, ref: n });
  }
);
K4.displayName = f9;
var d9 = I4, h9 = Y4, p9 = K4, g9 = "Separator", Av = "horizontal", m9 = ["horizontal", "vertical"], X4 = B.forwardRef((e, n) => {
  const { decorative: i, orientation: o = Av, ...l } = e, c = v9(o) ? o : Av, h = i ? { role: "none" } : { "aria-orientation": c === "vertical" ? c : void 0, role: "separator" };
  return /* @__PURE__ */ L.jsx(
    Ga.div,
    {
      "data-orientation": c,
      ...h,
      ...l,
      ref: n
    }
  );
});
X4.displayName = g9;
function v9(e) {
  return m9.includes(e);
}
var y9 = X4, Zu = "Switch", [b9] = zl(Zu), [_9, w9] = b9(Zu), Q4 = B.forwardRef(
  (e, n) => {
    const {
      __scopeSwitch: i,
      name: o,
      checked: l,
      defaultChecked: c,
      required: d,
      disabled: h,
      value: g = "on",
      onCheckedChange: m,
      form: y,
      ...b
    } = e, [A, x] = B.useState(null), V = pi(n, (W) => x(W)), F = B.useRef(!1), q = A ? y || !!A.closest("form") : !0, [te, ne] = V1({
      prop: l,
      defaultProp: c ?? !1,
      onChange: m,
      caller: Zu
    });
    return /* @__PURE__ */ L.jsxs(_9, { scope: i, checked: te, disabled: h, children: [
      /* @__PURE__ */ L.jsx(
        Ga.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": te,
          "aria-required": d,
          "data-state": W4(te),
          "data-disabled": h ? "" : void 0,
          disabled: h,
          value: g,
          ...b,
          ref: V,
          onClick: ja(e.onClick, (W) => {
            ne((ee) => !ee), q && (F.current = W.isPropagationStopped(), F.current || W.stopPropagation());
          })
        }
      ),
      q && /* @__PURE__ */ L.jsx(
        J4,
        {
          control: A,
          bubbles: !F.current,
          name: o,
          value: g,
          checked: te,
          required: d,
          disabled: h,
          form: y,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Q4.displayName = Zu;
var $4 = "SwitchThumb", P4 = B.forwardRef(
  (e, n) => {
    const { __scopeSwitch: i, ...o } = e, l = w9($4, i);
    return /* @__PURE__ */ L.jsx(
      Ga.span,
      {
        "data-state": W4(l.checked),
        "data-disabled": l.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }
);
P4.displayName = $4;
var A9 = "SwitchBubbleInput", J4 = B.forwardRef(
  ({
    __scopeSwitch: e,
    control: n,
    checked: i,
    bubbles: o = !0,
    ...l
  }, c) => {
    const d = B.useRef(null), h = pi(d, c), g = k4(i), m = O4(n);
    return B.useEffect(() => {
      const y = d.current;
      if (!y) return;
      const b = window.HTMLInputElement.prototype, x = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set;
      if (g !== i && x) {
        const V = new Event("click", { bubbles: o });
        x.call(y, i), y.dispatchEvent(V);
      }
    }, [g, i, o]), /* @__PURE__ */ L.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i,
        ...l,
        tabIndex: -1,
        ref: h,
        style: {
          ...l.style,
          ...m,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
J4.displayName = A9;
function W4(e) {
  return e ? "checked" : "unchecked";
}
var E9 = Q4, S9 = P4;
const x9 = (e, n) => {
  const i = new Array(e.length + n.length);
  for (let o = 0; o < e.length; o++)
    i[o] = e[o];
  for (let o = 0; o < n.length; o++)
    i[e.length + o] = n[o];
  return i;
}, T9 = (e, n) => ({
  classGroupId: e,
  validator: n
}), ey = (e = /* @__PURE__ */ new Map(), n = null, i) => ({
  nextPart: e,
  validators: n,
  classGroupId: i
}), xu = "-", Ev = [], k9 = "arbitrary..", O9 = (e) => {
  const n = z9(e), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return R9(d);
      const h = d.split(xu), g = h[0] === "" && h.length > 1 ? 1 : 0;
      return ty(h, g, n);
    },
    getConflictingClassGroupIds: (d, h) => {
      if (h) {
        const g = o[d], m = i[d];
        return g ? m ? x9(m, g) : g : m || Ev;
      }
      return i[d] || Ev;
    }
  };
}, ty = (e, n, i) => {
  if (e.length - n === 0)
    return i.classGroupId;
  const l = e[n], c = i.nextPart.get(l);
  if (c) {
    const m = ty(e, n + 1, c);
    if (m) return m;
  }
  const d = i.validators;
  if (d === null)
    return;
  const h = n === 0 ? e.join(xu) : e.slice(n).join(xu), g = d.length;
  for (let m = 0; m < g; m++) {
    const y = d[m];
    if (y.validator(h))
      return y.classGroupId;
  }
}, R9 = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), i = n.indexOf(":"), o = n.slice(0, i);
  return o ? k9 + o : void 0;
})(), z9 = (e) => {
  const {
    theme: n,
    classGroups: i
  } = e;
  return N9(i, n);
}, N9 = (e, n) => {
  const i = ey();
  for (const o in e) {
    const l = e[o];
    B1(l, i, o, n);
  }
  return i;
}, B1 = (e, n, i, o) => {
  const l = e.length;
  for (let c = 0; c < l; c++) {
    const d = e[c];
    L9(d, n, i, o);
  }
}, L9 = (e, n, i, o) => {
  if (typeof e == "string") {
    C9(e, n, i);
    return;
  }
  if (typeof e == "function") {
    D9(e, n, i, o);
    return;
  }
  M9(e, n, i, o);
}, C9 = (e, n, i) => {
  const o = e === "" ? n : ny(n, e);
  o.classGroupId = i;
}, D9 = (e, n, i, o) => {
  if (U9(e)) {
    B1(e(o), n, i, o);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(T9(i, e));
}, M9 = (e, n, i, o) => {
  const l = Object.entries(e), c = l.length;
  for (let d = 0; d < c; d++) {
    const [h, g] = l[d];
    B1(g, ny(n, h), i, o);
  }
}, ny = (e, n) => {
  let i = e;
  const o = n.split(xu), l = o.length;
  for (let c = 0; c < l; c++) {
    const d = o[c];
    let h = i.nextPart.get(d);
    h || (h = ey(), i.nextPart.set(d, h)), i = h;
  }
  return i;
}, U9 = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, j9 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, i = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const l = (c, d) => {
    i[c] = d, n++, n > e && (n = 0, o = i, i = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(c) {
      let d = i[c];
      if (d !== void 0)
        return d;
      if ((d = o[c]) !== void 0)
        return l(c, d), d;
    },
    set(c, d) {
      c in i ? i[c] = d : l(c, d);
    }
  };
}, a1 = "!", Sv = ":", H9 = [], xv = (e, n, i, o, l) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: i,
  maybePostfixModifierPosition: o,
  isExternal: l
}), V9 = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: i
  } = e;
  let o = (l) => {
    const c = [];
    let d = 0, h = 0, g = 0, m;
    const y = l.length;
    for (let F = 0; F < y; F++) {
      const q = l[F];
      if (d === 0 && h === 0) {
        if (q === Sv) {
          c.push(l.slice(g, F)), g = F + 1;
          continue;
        }
        if (q === "/") {
          m = F;
          continue;
        }
      }
      q === "[" ? d++ : q === "]" ? d-- : q === "(" ? h++ : q === ")" && h--;
    }
    const b = c.length === 0 ? l : l.slice(g);
    let A = b, x = !1;
    b.endsWith(a1) ? (A = b.slice(0, -1), x = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      b.startsWith(a1) && (A = b.slice(1), x = !0)
    );
    const V = m && m > g ? m - g : void 0;
    return xv(c, x, A, V);
  };
  if (n) {
    const l = n + Sv, c = o;
    o = (d) => d.startsWith(l) ? c(d.slice(l.length)) : xv(H9, !1, d, void 0, !0);
  }
  if (i) {
    const l = o;
    o = (c) => i({
      className: c,
      parseClassName: l
    });
  }
  return o;
}, G9 = (e) => {
  const n = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((i, o) => {
    n.set(i, 1e6 + o);
  }), (i) => {
    const o = [];
    let l = [];
    for (let c = 0; c < i.length; c++) {
      const d = i[c], h = d[0] === "[", g = n.has(d);
      h || g ? (l.length > 0 && (l.sort(), o.push(...l), l = []), o.push(d)) : l.push(d);
    }
    return l.length > 0 && (l.sort(), o.push(...l)), o;
  };
}, B9 = (e) => ({
  cache: j9(e.cacheSize),
  parseClassName: V9(e),
  sortModifiers: G9(e),
  ...O9(e)
}), F9 = /\s+/, Z9 = (e, n) => {
  const {
    parseClassName: i,
    getClassGroupId: o,
    getConflictingClassGroupIds: l,
    sortModifiers: c
  } = n, d = [], h = e.trim().split(F9);
  let g = "";
  for (let m = h.length - 1; m >= 0; m -= 1) {
    const y = h[m], {
      isExternal: b,
      modifiers: A,
      hasImportantModifier: x,
      baseClassName: V,
      maybePostfixModifierPosition: F
    } = i(y);
    if (b) {
      g = y + (g.length > 0 ? " " + g : g);
      continue;
    }
    let q = !!F, te = o(q ? V.substring(0, F) : V);
    if (!te) {
      if (!q) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (te = o(V), !te) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      q = !1;
    }
    const ne = A.length === 0 ? "" : A.length === 1 ? A[0] : c(A).join(":"), W = x ? ne + a1 : ne, ee = W + te;
    if (d.indexOf(ee) > -1)
      continue;
    d.push(ee);
    const ae = l(te, q);
    for (let Ee = 0; Ee < ae.length; ++Ee) {
      const ce = ae[Ee];
      d.push(W + ce);
    }
    g = y + (g.length > 0 ? " " + g : g);
  }
  return g;
}, I9 = (...e) => {
  let n = 0, i, o, l = "";
  for (; n < e.length; )
    (i = e[n++]) && (o = ay(i)) && (l && (l += " "), l += o);
  return l;
}, ay = (e) => {
  if (typeof e == "string")
    return e;
  let n, i = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (n = ay(e[o])) && (i && (i += " "), i += n);
  return i;
}, q9 = (e, ...n) => {
  let i, o, l, c;
  const d = (g) => {
    const m = n.reduce((y, b) => b(y), e());
    return i = B9(m), o = i.cache.get, l = i.cache.set, c = h, h(g);
  }, h = (g) => {
    const m = o(g);
    if (m)
      return m;
    const y = Z9(g, i);
    return l(g, y), y;
  };
  return c = d, (...g) => c(I9(...g));
}, Y9 = [], Ft = (e) => {
  const n = (i) => i[e] || Y9;
  return n.isThemeGetter = !0, n;
}, iy = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ry = /^\((?:(\w[\w-]*):)?(.+)\)$/i, K9 = /^\d+\/\d+$/, X9 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Q9 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $9 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, P9 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, J9 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, No = (e) => K9.test(e), Ce = (e) => !!e && !Number.isNaN(Number(e)), qi = (e) => !!e && Number.isInteger(Number(e)), jh = (e) => e.endsWith("%") && Ce(e.slice(0, -1)), di = (e) => X9.test(e), W9 = () => !0, e7 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Q9.test(e) && !$9.test(e)
), oy = () => !1, t7 = (e) => P9.test(e), n7 = (e) => J9.test(e), a7 = (e) => !re(e) && !oe(e), i7 = (e) => ts(e, cy, oy), re = (e) => iy.test(e), wr = (e) => ts(e, uy, e7), Hh = (e) => ts(e, c7, Ce), Tv = (e) => ts(e, sy, oy), r7 = (e) => ts(e, ly, n7), cu = (e) => ts(e, fy, t7), oe = (e) => ry.test(e), cl = (e) => ns(e, uy), o7 = (e) => ns(e, u7), kv = (e) => ns(e, sy), s7 = (e) => ns(e, cy), l7 = (e) => ns(e, ly), uu = (e) => ns(e, fy, !0), ts = (e, n, i) => {
  const o = iy.exec(e);
  return o ? o[1] ? n(o[1]) : i(o[2]) : !1;
}, ns = (e, n, i = !1) => {
  const o = ry.exec(e);
  return o ? o[1] ? n(o[1]) : i : !1;
}, sy = (e) => e === "position" || e === "percentage", ly = (e) => e === "image" || e === "url", cy = (e) => e === "length" || e === "size" || e === "bg-size", uy = (e) => e === "length", c7 = (e) => e === "number", u7 = (e) => e === "family-name", fy = (e) => e === "shadow", f7 = () => {
  const e = Ft("color"), n = Ft("font"), i = Ft("text"), o = Ft("font-weight"), l = Ft("tracking"), c = Ft("leading"), d = Ft("breakpoint"), h = Ft("container"), g = Ft("spacing"), m = Ft("radius"), y = Ft("shadow"), b = Ft("inset-shadow"), A = Ft("text-shadow"), x = Ft("drop-shadow"), V = Ft("blur"), F = Ft("perspective"), q = Ft("aspect"), te = Ft("ease"), ne = Ft("animate"), W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ee = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], ae = () => [...ee(), oe, re], Ee = () => ["auto", "hidden", "clip", "visible", "scroll"], ce = () => ["auto", "contain", "none"], Q = () => [oe, re, g], Ke = () => [No, "full", "auto", ...Q()], nt = () => [qi, "none", "subgrid", oe, re], Je = () => ["auto", {
    span: ["full", qi, oe, re]
  }, qi, oe, re], ue = () => [qi, "auto", oe, re], ye = () => ["auto", "min", "max", "fr", oe, re], xe = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Te = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], R = () => ["auto", ...Q()], Y = () => [No, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Q()], Z = () => [e, oe, re], Ne = () => [...ee(), kv, Tv, {
    position: [oe, re]
  }], Le = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], E = () => ["auto", "cover", "contain", s7, i7, {
    size: [oe, re]
  }], j = () => [jh, cl, wr], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    m,
    oe,
    re
  ], P = () => ["", Ce, cl, wr], _e = () => ["solid", "dashed", "dotted", "double"], Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], be = () => [Ce, jh, kv, Tv], ct = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    V,
    oe,
    re
  ], Ge = () => ["none", Ce, oe, re], Qt = () => ["none", Ce, oe, re], _n = () => [Ce, oe, re], Gt = () => [No, "full", ...Q()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [di],
      breakpoint: [di],
      color: [W9],
      container: [di],
      "drop-shadow": [di],
      ease: ["in", "out", "in-out"],
      font: [a7],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [di],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [di],
      shadow: [di],
      spacing: ["px", Ce],
      text: [di],
      "text-shadow": [di],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", No, re, oe, q]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ce, re, oe, h]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: ae()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ce()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ce()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ce()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: Ke()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Ke()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Ke()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: Ke()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: Ke()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Ke()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Ke()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Ke()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Ke()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [qi, "auto", oe, re]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [No, "full", "auto", h, ...Q()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Ce, No, "auto", "initial", "none", re]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ce, oe, re]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ce, oe, re]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [qi, "first", "last", "none", oe, re]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": nt()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Je()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ue()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ue()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": nt()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Je()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ue()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ue()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ye()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ye()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: Q()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Q()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Q()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...xe(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Te(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Te()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...xe()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Te(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Te(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": xe()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Te(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Te()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Q()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Q()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Q()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Q()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Q()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Q()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Q()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Q()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Q()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: R()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: R()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: R()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: R()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: R()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: R()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: R()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: R()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: R()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": Q()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": Q()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [h, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          h,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          h,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", i, cl, wr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, oe, Hh]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", jh, re]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [o7, re, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [l, oe, re]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ce, "none", oe, Hh]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          c,
          ...Q()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", oe, re]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", oe, re]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: Z()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: Z()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [..._e(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ce, "from-font", "auto", oe, wr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: Z()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ce, "auto", oe, re]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: Q()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", oe, re]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", oe, re]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Ne()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Le()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: E()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, qi, oe, re],
          radial: ["", oe, re],
          conic: [qi, oe, re]
        }, l7, r7]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: Z()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: j()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: Z()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: Z()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: Z()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: K()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": K()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": K()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": K()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": K()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": K()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": K()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": K()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": K()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": K()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": K()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": K()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": K()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": K()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": K()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: P()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": P()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": P()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": P()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": P()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": P()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": P()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": P()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": P()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": P()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": P()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [..._e(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [..._e(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: Z()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": Z()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": Z()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": Z()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": Z()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": Z()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": Z()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": Z()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": Z()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: Z()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [..._e(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ce, oe, re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ce, cl, wr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: Z()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          y,
          uu,
          cu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: Z()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", b, uu, cu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": Z()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: P()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: Z()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ce, wr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": Z()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": P()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": Z()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", A, uu, cu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": Z()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ce, oe, re]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Se()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Ce]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": be()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": be()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": Z()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": Z()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": be()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": be()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": Z()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": Z()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": be()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": be()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": Z()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": Z()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": be()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": be()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": Z()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": Z()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": be()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": be()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": Z()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": Z()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": be()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": be()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": Z()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": Z()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": be()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": be()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": Z()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": Z()
      }],
      "mask-image-radial": [{
        "mask-radial": [oe, re]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": be()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": be()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": Z()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": Z()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": ee()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ce]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": be()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": be()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": Z()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": Z()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Ne()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Le()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: E()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", oe, re]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          oe,
          re
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ct()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ce, oe, re]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ce, oe, re]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          x,
          uu,
          cu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": Z()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ce, oe, re]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ce, oe, re]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ce, oe, re]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ce, oe, re]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ce, oe, re]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          oe,
          re
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ct()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ce, oe, re]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ce, oe, re]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ce, oe, re]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ce, oe, re]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ce, oe, re]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ce, oe, re]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ce, oe, re]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ce, oe, re]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": Q()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Q()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Q()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", oe, re]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Ce, "initial", oe, re]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", te, oe, re]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ce, oe, re]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", ne, oe, re]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [F, oe, re]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ae()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ge()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ge()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ge()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ge()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Qt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Qt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Qt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Qt()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: _n()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": _n()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": _n()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [oe, re, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ae()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Gt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Gt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Gt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Gt()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: Z()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: Z()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", oe, re]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": Q()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Q()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Q()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Q()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Q()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Q()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Q()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Q()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Q()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Q()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Q()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Q()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Q()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Q()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Q()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Q()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Q()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Q()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", oe, re]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...Z()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ce, cl, wr, Hh]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...Z()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, d7 = /* @__PURE__ */ q9(f7);
function yn(...e) {
  return d7(w4(e));
}
const h7 = A4(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function vl({
  className: e,
  variant: n = "default",
  size: i = "default",
  asChild: o = !1,
  ...l
}) {
  const c = o ? S4 : "button";
  return /* @__PURE__ */ L.jsx(
    c,
    {
      "data-slot": "button",
      "data-variant": n,
      "data-size": i,
      className: yn(h7({ variant: n, size: i, className: e })),
      ...l
    }
  );
}
function dy({ className: e, ...n }) {
  return /* @__PURE__ */ L.jsx(
    "div",
    {
      "data-slot": "card",
      className: yn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...n
    }
  );
}
function p7({ className: e, ...n }) {
  return /* @__PURE__ */ L.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: yn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...n
    }
  );
}
function g7({ className: e, ...n }) {
  return /* @__PURE__ */ L.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: yn("leading-none font-semibold", e),
      ...n
    }
  );
}
function m7({ className: e, ...n }) {
  return /* @__PURE__ */ L.jsx(
    "div",
    {
      "data-slot": "card-description",
      className: yn("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function hy({ className: e, ...n }) {
  return /* @__PURE__ */ L.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: yn("px-6", e),
      ...n
    }
  );
}
function py({ className: e, ...n }) {
  return /* @__PURE__ */ L.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: yn("flex items-center px-6 [.border-t]:pt-6", e),
      ...n
    }
  );
}
function Vh({ className: e, type: n, ...i }) {
  return /* @__PURE__ */ L.jsx(
    "input",
    {
      type: n,
      "data-slot": "input",
      className: yn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...i
    }
  );
}
function Ar({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ L.jsx(
    n9,
    {
      "data-slot": "label",
      className: yn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...n
    }
  );
}
const gy = (...e) => e.filter((n, i, o) => !!n && n.trim() !== "" && o.indexOf(n) === i).join(" ").trim();
const v7 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const y7 = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, i, o) => o ? o.toUpperCase() : i.toLowerCase()
);
const Ov = (e) => {
  const n = y7(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
};
var b7 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const _7 = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
  return !1;
};
const w7 = B.forwardRef(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: o,
    className: l = "",
    children: c,
    iconNode: d,
    ...h
  }, g) => B.createElement(
    "svg",
    {
      ref: g,
      ...b7,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: o ? Number(i) * 24 / Number(n) : i,
      className: gy("lucide", l),
      ...!c && !_7(h) && { "aria-hidden": "true" },
      ...h
    },
    [
      ...d.map(([m, y]) => B.createElement(m, y)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
const A7 = (e, n) => {
  const i = B.forwardRef(
    ({ className: o, ...l }, c) => B.createElement(w7, {
      ref: c,
      iconNode: n,
      className: gy(
        `lucide-${v7(Ov(e))}`,
        `lucide-${e}`,
        o
      ),
      ...l
    })
  );
  return i.displayName = Ov(e), i;
};
const E7 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], S7 = A7("circle", E7);
function x7({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ L.jsx(
    d9,
    {
      "data-slot": "radio-group",
      className: yn("grid gap-3", e),
      ...n
    }
  );
}
function Rv({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ L.jsx(
    h9,
    {
      "data-slot": "radio-group-item",
      className: yn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n,
      children: /* @__PURE__ */ L.jsx(
        p9,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ L.jsx(S7, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function T7({
  className: e,
  size: n = "default",
  ...i
}) {
  return /* @__PURE__ */ L.jsx(
    E9,
    {
      "data-slot": "switch",
      "data-size": n,
      className: yn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6",
        e
      ),
      ...i,
      children: /* @__PURE__ */ L.jsx(
        S9,
        {
          "data-slot": "switch-thumb",
          className: yn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const k7 = /* @__PURE__ */ I("ZodISODateTime", (e, n) => {
  C8.init(e, n), wt.init(e, n);
});
function O7(e) {
  return /* @__PURE__ */ MA(k7, e);
}
const R7 = /* @__PURE__ */ I("ZodISODate", (e, n) => {
  D8.init(e, n), wt.init(e, n);
});
function z7(e) {
  return /* @__PURE__ */ UA(R7, e);
}
const N7 = /* @__PURE__ */ I("ZodISOTime", (e, n) => {
  M8.init(e, n), wt.init(e, n);
});
function L7(e) {
  return /* @__PURE__ */ jA(N7, e);
}
const C7 = /* @__PURE__ */ I("ZodISODuration", (e, n) => {
  U8.init(e, n), wt.init(e, n);
});
function D7(e) {
  return /* @__PURE__ */ HA(C7, e);
}
const M7 = (e, n) => {
  j1.init(e, n), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (i) => Ow(e, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => kw(e, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        e.issues.push(i), e.message = JSON.stringify(e.issues, e1, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        e.issues.push(...i), e.message = JSON.stringify(e.issues, e1, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, pa = I("ZodError", M7, {
  Parent: Error
}), U7 = /* @__PURE__ */ ju(pa), j7 = /* @__PURE__ */ Hu(pa), H7 = /* @__PURE__ */ Vu(pa), V7 = /* @__PURE__ */ Gu(pa), G7 = /* @__PURE__ */ Cw(pa), B7 = /* @__PURE__ */ Dw(pa), F7 = /* @__PURE__ */ Mw(pa), Z7 = /* @__PURE__ */ Uw(pa), I7 = /* @__PURE__ */ jw(pa), q7 = /* @__PURE__ */ Hw(pa), Y7 = /* @__PURE__ */ Vw(pa), K7 = /* @__PURE__ */ Gw(pa), Xt = /* @__PURE__ */ I("ZodType", (e, n) => (Kt.init(e, n), Object.assign(e["~standard"], {
  jsonSchema: {
    input: Eu(e, "input"),
    output: Eu(e, "output")
  }
}), e.toJSONSchema = nE(e, {}), e.def = n, e.type = n.type, Object.defineProperty(e, "_def", { value: n }), e.check = (...i) => e.clone(Wi(n, {
  checks: [
    ...n.checks ?? [],
    ...i.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (i, o) => er(e, i, o), e.brand = () => e, e.register = ((i, o) => (i.add(e, o), e)), e.parse = (i, o) => U7(e, i, o, { callee: e.parse }), e.safeParse = (i, o) => H7(e, i, o), e.parseAsync = async (i, o) => j7(e, i, o, { callee: e.parseAsync }), e.safeParseAsync = async (i, o) => V7(e, i, o), e.spa = e.safeParseAsync, e.encode = (i, o) => G7(e, i, o), e.decode = (i, o) => B7(e, i, o), e.encodeAsync = async (i, o) => F7(e, i, o), e.decodeAsync = async (i, o) => Z7(e, i, o), e.safeEncode = (i, o) => I7(e, i, o), e.safeDecode = (i, o) => q7(e, i, o), e.safeEncodeAsync = async (i, o) => Y7(e, i, o), e.safeDecodeAsync = async (i, o) => K7(e, i, o), e.refine = (i, o) => e.check(VS(i, o)), e.superRefine = (i) => e.check(GS(i)), e.overwrite = (i) => e.check(/* @__PURE__ */ es(i)), e.optional = () => Lv(e), e.exactOptional = () => TS(e), e.nullable = () => Cv(e), e.nullish = () => Lv(Cv(e)), e.nonoptional = (i) => LS(e, i), e.array = () => mS(e), e.or = (i) => _S([e, i]), e.and = (i) => AS(e, i), e.transform = (i) => Dv(e, SS(i)), e.default = (i) => RS(e, i), e.prefault = (i) => NS(e, i), e.catch = (i) => DS(e, i), e.pipe = (i) => Dv(e, i), e.readonly = () => jS(e), e.describe = (i) => {
  const o = e.clone();
  return dl.add(o, { description: i }), o;
}, Object.defineProperty(e, "description", {
  get() {
    return dl.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...i) => {
  if (i.length === 0)
    return dl.get(e);
  const o = e.clone();
  return dl.add(o, i[0]), o;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (i) => i(e), e)), my = /* @__PURE__ */ I("_ZodString", (e, n) => {
  H1.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (o, l, c) => iE(e, o, l);
  const i = e._zod.bag;
  e.format = i.format ?? null, e.minLength = i.minimum ?? null, e.maxLength = i.maximum ?? null, e.regex = (...o) => e.check(/* @__PURE__ */ BA(...o)), e.includes = (...o) => e.check(/* @__PURE__ */ IA(...o)), e.startsWith = (...o) => e.check(/* @__PURE__ */ qA(...o)), e.endsWith = (...o) => e.check(/* @__PURE__ */ YA(...o)), e.min = (...o) => e.check(/* @__PURE__ */ Au(...o)), e.max = (...o) => e.check(/* @__PURE__ */ p4(...o)), e.length = (...o) => e.check(/* @__PURE__ */ g4(...o)), e.nonempty = (...o) => e.check(/* @__PURE__ */ Au(1, ...o)), e.lowercase = (o) => e.check(/* @__PURE__ */ FA(o)), e.uppercase = (o) => e.check(/* @__PURE__ */ ZA(o)), e.trim = () => e.check(/* @__PURE__ */ XA()), e.normalize = (...o) => e.check(/* @__PURE__ */ KA(...o)), e.toLowerCase = () => e.check(/* @__PURE__ */ QA()), e.toUpperCase = () => e.check(/* @__PURE__ */ $A()), e.slugify = () => e.check(/* @__PURE__ */ PA());
}), X7 = /* @__PURE__ */ I("ZodString", (e, n) => {
  H1.init(e, n), my.init(e, n), e.email = (i) => e.check(/* @__PURE__ */ pA(Q7, i)), e.url = (i) => e.check(/* @__PURE__ */ bA($7, i)), e.jwt = (i) => e.check(/* @__PURE__ */ DA(fS, i)), e.emoji = (i) => e.check(/* @__PURE__ */ _A(P7, i)), e.guid = (i) => e.check(/* @__PURE__ */ vv(zv, i)), e.uuid = (i) => e.check(/* @__PURE__ */ gA(fu, i)), e.uuidv4 = (i) => e.check(/* @__PURE__ */ mA(fu, i)), e.uuidv6 = (i) => e.check(/* @__PURE__ */ vA(fu, i)), e.uuidv7 = (i) => e.check(/* @__PURE__ */ yA(fu, i)), e.nanoid = (i) => e.check(/* @__PURE__ */ wA(J7, i)), e.guid = (i) => e.check(/* @__PURE__ */ vv(zv, i)), e.cuid = (i) => e.check(/* @__PURE__ */ AA(W7, i)), e.cuid2 = (i) => e.check(/* @__PURE__ */ EA(eS, i)), e.ulid = (i) => e.check(/* @__PURE__ */ SA(tS, i)), e.base64 = (i) => e.check(/* @__PURE__ */ NA(lS, i)), e.base64url = (i) => e.check(/* @__PURE__ */ LA(cS, i)), e.xid = (i) => e.check(/* @__PURE__ */ xA(nS, i)), e.ksuid = (i) => e.check(/* @__PURE__ */ TA(aS, i)), e.ipv4 = (i) => e.check(/* @__PURE__ */ kA(iS, i)), e.ipv6 = (i) => e.check(/* @__PURE__ */ OA(rS, i)), e.cidrv4 = (i) => e.check(/* @__PURE__ */ RA(oS, i)), e.cidrv6 = (i) => e.check(/* @__PURE__ */ zA(sS, i)), e.e164 = (i) => e.check(/* @__PURE__ */ CA(uS, i)), e.datetime = (i) => e.check(O7(i)), e.date = (i) => e.check(z7(i)), e.time = (i) => e.check(L7(i)), e.duration = (i) => e.check(D7(i));
});
function Gh(e) {
  return /* @__PURE__ */ hA(X7, e);
}
const wt = /* @__PURE__ */ I("ZodStringFormat", (e, n) => {
  vt.init(e, n), my.init(e, n);
}), Q7 = /* @__PURE__ */ I("ZodEmail", (e, n) => {
  S8.init(e, n), wt.init(e, n);
}), zv = /* @__PURE__ */ I("ZodGUID", (e, n) => {
  A8.init(e, n), wt.init(e, n);
}), fu = /* @__PURE__ */ I("ZodUUID", (e, n) => {
  E8.init(e, n), wt.init(e, n);
}), $7 = /* @__PURE__ */ I("ZodURL", (e, n) => {
  x8.init(e, n), wt.init(e, n);
}), P7 = /* @__PURE__ */ I("ZodEmoji", (e, n) => {
  T8.init(e, n), wt.init(e, n);
}), J7 = /* @__PURE__ */ I("ZodNanoID", (e, n) => {
  k8.init(e, n), wt.init(e, n);
}), W7 = /* @__PURE__ */ I("ZodCUID", (e, n) => {
  O8.init(e, n), wt.init(e, n);
}), eS = /* @__PURE__ */ I("ZodCUID2", (e, n) => {
  R8.init(e, n), wt.init(e, n);
}), tS = /* @__PURE__ */ I("ZodULID", (e, n) => {
  z8.init(e, n), wt.init(e, n);
}), nS = /* @__PURE__ */ I("ZodXID", (e, n) => {
  N8.init(e, n), wt.init(e, n);
}), aS = /* @__PURE__ */ I("ZodKSUID", (e, n) => {
  L8.init(e, n), wt.init(e, n);
}), iS = /* @__PURE__ */ I("ZodIPv4", (e, n) => {
  j8.init(e, n), wt.init(e, n);
}), rS = /* @__PURE__ */ I("ZodIPv6", (e, n) => {
  H8.init(e, n), wt.init(e, n);
}), oS = /* @__PURE__ */ I("ZodCIDRv4", (e, n) => {
  V8.init(e, n), wt.init(e, n);
}), sS = /* @__PURE__ */ I("ZodCIDRv6", (e, n) => {
  G8.init(e, n), wt.init(e, n);
}), lS = /* @__PURE__ */ I("ZodBase64", (e, n) => {
  B8.init(e, n), wt.init(e, n);
}), cS = /* @__PURE__ */ I("ZodBase64URL", (e, n) => {
  Z8.init(e, n), wt.init(e, n);
}), uS = /* @__PURE__ */ I("ZodE164", (e, n) => {
  I8.init(e, n), wt.init(e, n);
}), fS = /* @__PURE__ */ I("ZodJWT", (e, n) => {
  Y8.init(e, n), wt.init(e, n);
}), dS = /* @__PURE__ */ I("ZodUnknown", (e, n) => {
  K8.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => oE();
});
function Nv() {
  return /* @__PURE__ */ VA(dS);
}
const hS = /* @__PURE__ */ I("ZodNever", (e, n) => {
  X8.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => rE(e, i, o);
});
function pS(e) {
  return /* @__PURE__ */ GA(hS, e);
}
const gS = /* @__PURE__ */ I("ZodArray", (e, n) => {
  Q8.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => uE(e, i, o, l), e.element = n.element, e.min = (i, o) => e.check(/* @__PURE__ */ Au(i, o)), e.nonempty = (i) => e.check(/* @__PURE__ */ Au(1, i)), e.max = (i, o) => e.check(/* @__PURE__ */ p4(i, o)), e.length = (i, o) => e.check(/* @__PURE__ */ g4(i, o)), e.unwrap = () => e.element;
});
function mS(e, n) {
  return /* @__PURE__ */ JA(gS, e, n);
}
const vS = /* @__PURE__ */ I("ZodObject", (e, n) => {
  P8.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => fE(e, i, o, l), tt(e, "shape", () => n.shape), e.keyof = () => vy(Object.keys(e._zod.def.shape)), e.catchall = (i) => e.clone({ ...e._zod.def, catchall: i }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Nv() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Nv() }), e.strict = () => e.clone({ ...e._zod.def, catchall: pS() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (i) => Aw(e, i), e.safeExtend = (i) => Ew(e, i), e.merge = (i) => Sw(e, i), e.pick = (i) => _w(e, i), e.omit = (i) => ww(e, i), e.partial = (...i) => xw(yy, e, i[0]), e.required = (...i) => Tw(by, e, i[0]);
});
function yS(e, n) {
  const i = {
    type: "object",
    shape: e ?? {},
    ...ke(n)
  };
  return new vS(i);
}
const bS = /* @__PURE__ */ I("ZodUnion", (e, n) => {
  J8.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => dE(e, i, o, l), e.options = n.options;
});
function _S(e, n) {
  return new bS({
    type: "union",
    options: e,
    ...ke(n)
  });
}
const wS = /* @__PURE__ */ I("ZodIntersection", (e, n) => {
  W8.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => hE(e, i, o, l);
});
function AS(e, n) {
  return new wS({
    type: "intersection",
    left: e,
    right: n
  });
}
const i1 = /* @__PURE__ */ I("ZodEnum", (e, n) => {
  eA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (o, l, c) => sE(e, o, l), e.enum = n.entries, e.options = Object.values(n.entries);
  const i = new Set(Object.keys(n.entries));
  e.extract = (o, l) => {
    const c = {};
    for (const d of o)
      if (i.has(d))
        c[d] = n.entries[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new i1({
      ...n,
      checks: [],
      ...ke(l),
      entries: c
    });
  }, e.exclude = (o, l) => {
    const c = { ...n.entries };
    for (const d of o)
      if (i.has(d))
        delete c[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new i1({
      ...n,
      checks: [],
      ...ke(l),
      entries: c
    });
  };
});
function vy(e, n) {
  const i = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new i1({
    type: "enum",
    entries: i,
    ...ke(n)
  });
}
const ES = /* @__PURE__ */ I("ZodTransform", (e, n) => {
  tA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => cE(e, i), e._zod.parse = (i, o) => {
    if (o.direction === "backward")
      throw new e4(e.constructor.name);
    i.addIssue = (c) => {
      if (typeof c == "string")
        i.issues.push(Al(c, i.value, n));
      else {
        const d = c;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = i.value), d.inst ?? (d.inst = e), i.issues.push(Al(d));
      }
    };
    const l = n.transform(i.value, i);
    return l instanceof Promise ? l.then((c) => (i.value = c, i)) : (i.value = l, i);
  };
});
function SS(e) {
  return new ES({
    type: "transform",
    transform: e
  });
}
const yy = /* @__PURE__ */ I("ZodOptional", (e, n) => {
  h4.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => b4(e, i, o, l), e.unwrap = () => e._zod.def.innerType;
});
function Lv(e) {
  return new yy({
    type: "optional",
    innerType: e
  });
}
const xS = /* @__PURE__ */ I("ZodExactOptional", (e, n) => {
  nA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => b4(e, i, o, l), e.unwrap = () => e._zod.def.innerType;
});
function TS(e) {
  return new xS({
    type: "optional",
    innerType: e
  });
}
const kS = /* @__PURE__ */ I("ZodNullable", (e, n) => {
  aA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => pE(e, i, o, l), e.unwrap = () => e._zod.def.innerType;
});
function Cv(e) {
  return new kS({
    type: "nullable",
    innerType: e
  });
}
const OS = /* @__PURE__ */ I("ZodDefault", (e, n) => {
  iA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => mE(e, i, o, l), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function RS(e, n) {
  return new OS({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : i4(n);
    }
  });
}
const zS = /* @__PURE__ */ I("ZodPrefault", (e, n) => {
  rA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => vE(e, i, o, l), e.unwrap = () => e._zod.def.innerType;
});
function NS(e, n) {
  return new zS({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : i4(n);
    }
  });
}
const by = /* @__PURE__ */ I("ZodNonOptional", (e, n) => {
  oA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => gE(e, i, o, l), e.unwrap = () => e._zod.def.innerType;
});
function LS(e, n) {
  return new by({
    type: "nonoptional",
    innerType: e,
    ...ke(n)
  });
}
const CS = /* @__PURE__ */ I("ZodCatch", (e, n) => {
  sA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => yE(e, i, o, l), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function DS(e, n) {
  return new CS({
    type: "catch",
    innerType: e,
    catchValue: typeof n == "function" ? n : () => n
  });
}
const MS = /* @__PURE__ */ I("ZodPipe", (e, n) => {
  lA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => bE(e, i, o, l), e.in = n.in, e.out = n.out;
});
function Dv(e, n) {
  return new MS({
    type: "pipe",
    in: e,
    out: n
    // ...util.normalizeParams(params),
  });
}
const US = /* @__PURE__ */ I("ZodReadonly", (e, n) => {
  cA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => _E(e, i, o, l), e.unwrap = () => e._zod.def.innerType;
});
function jS(e) {
  return new US({
    type: "readonly",
    innerType: e
  });
}
const HS = /* @__PURE__ */ I("ZodCustom", (e, n) => {
  uA.init(e, n), Xt.init(e, n), e._zod.processJSONSchema = (i, o, l) => lE(e, i);
});
function VS(e, n = {}) {
  return /* @__PURE__ */ WA(HS, e, n);
}
function GS(e) {
  return /* @__PURE__ */ eE(e);
}
const BS = yS({
  name: Gh().min(2, "Informe seu nome").max(80, "Nome muito longo"),
  weightKg: Gh().min(1, "Informe o peso").refine((e) => Number(e.replace(",", ".")) > 0, "Peso inválido"),
  heightCm: Gh().min(1, "Informe a altura").refine((e) => Number(e) > 0, "Altura inválida"),
  model: vy(["lite", "full"])
});
function FS(e) {
  return e.replace(/\D/g, "").replace(/^(\d{1,3})(\d{0,1}).*/, (n, i, o) => o ? `${i},${o}` : i);
}
function ZS(e) {
  return e.replace(/\D/g, "").slice(0, 3);
}
function IS({ onNext: e }) {
  const n = Wo(), i = pw({
    resolver: EE(BS),
    mode: "onChange",
    defaultValues: {
      name: n.user?.name ?? "",
      weightKg: n.user?.weightKg ? String(n.user.weightKg) : "",
      heightCm: n.user?.heightCm ? String(n.user.heightCm) : "",
      model: n.model
    }
  }), {
    register: o,
    handleSubmit: l,
    setValue: c,
    formState: { isValid: d, errors: h }
  } = i, g = Dh({
    control: i.control,
    name: "weightKg"
  }), m = Dh({
    control: i.control,
    name: "heightCm"
  }), y = Dh({
    control: i.control,
    name: "model"
  });
  function b(A) {
    n.setUser({
      name: A.name.trim(),
      weightKg: Number(A.weightKg.replace(",", ".")),
      heightCm: Number(A.heightCm)
    }), n.setModel(A.model), e();
  }
  return /* @__PURE__ */ L.jsx("div", { className: "min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-6", children: /* @__PURE__ */ L.jsxs(dy, { className: "w-full max-w-lg", children: [
    /* @__PURE__ */ L.jsxs(p7, { children: [
      /* @__PURE__ */ L.jsx(g7, { children: "Dados do usuário" }),
      /* @__PURE__ */ L.jsx(m7, { children: "Preencha os dados para iniciar a captura de pose" })
    ] }),
    /* @__PURE__ */ L.jsxs("form", { onSubmit: l(b), className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ L.jsxs(hy, { className: "space-y-5", children: [
        /* @__PURE__ */ L.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ L.jsx(Ar, { children: "Nome" }),
          /* @__PURE__ */ L.jsx(Vh, { placeholder: "Seu nome", ...o("name") }),
          h.name && /* @__PURE__ */ L.jsx("p", { className: "text-sm text-red-500", children: h.name.message })
        ] }),
        /* @__PURE__ */ L.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ L.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ L.jsx(Ar, { children: "Peso (kg)" }),
            /* @__PURE__ */ L.jsx(
              Vh,
              {
                inputMode: "decimal",
                placeholder: "ex: 72,5",
                value: g ?? "",
                onChange: (A) => c("weightKg", FS(A.target.value), {
                  shouldValidate: !0
                })
              }
            ),
            h.weightKg && /* @__PURE__ */ L.jsx("p", { className: "text-sm text-red-500", children: h.weightKg.message })
          ] }),
          /* @__PURE__ */ L.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ L.jsx(Ar, { children: "Altura (cm)" }),
            /* @__PURE__ */ L.jsx(
              Vh,
              {
                inputMode: "numeric",
                placeholder: "ex: 175",
                value: m ?? "",
                onChange: (A) => c("heightCm", ZS(A.target.value), {
                  shouldValidate: !0
                })
              }
            ),
            h.heightCm && /* @__PURE__ */ L.jsx("p", { className: "text-sm text-red-500", children: h.heightCm.message })
          ] })
        ] }),
        /* @__PURE__ */ L.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ L.jsx(Ar, { children: "Modelo" }),
          /* @__PURE__ */ L.jsxs(
            x7,
            {
              value: y,
              onValueChange: (A) => c("model", A, {
                shouldValidate: !0
              }),
              className: "flex gap-6",
              children: [
                /* @__PURE__ */ L.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ L.jsx(Rv, { value: "lite", id: "lite" }),
                  /* @__PURE__ */ L.jsx(Ar, { htmlFor: "lite", children: "Lite (mais rápido)" })
                ] }),
                /* @__PURE__ */ L.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ L.jsx(Rv, { value: "full", id: "full" }),
                  /* @__PURE__ */ L.jsx(Ar, { htmlFor: "full", children: "Full (mais preciso)" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ L.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ L.jsx(Ar, { children: "Espelhar câmera" }),
          /* @__PURE__ */ L.jsx(T7, { checked: n.mirror, onCheckedChange: n.setMirror })
        ] })
      ] }),
      /* @__PURE__ */ L.jsx(py, { className: "flex justify-end", children: /* @__PURE__ */ L.jsx(vl, { type: "submit", disabled: !d, children: "Ir para pose frontal" }) })
    ] })
  ] }) });
}
var Bo = typeof self < "u" ? self : {};
function Sl(e, n) {
  e: {
    for (var i = ["CLOSURE_FLAGS"], o = Bo, l = 0; l < i.length; l++) if ((o = o[i[l]]) == null) {
      i = null;
      break e;
    }
    i = o;
  }
  return (e = i && i[e]) != null ? e : n;
}
function Er() {
  throw Error("Invalid UTF8");
}
function Mv(e, n) {
  return n = String.fromCharCode.apply(null, n), e == null ? n : e + n;
}
let du, Bh;
const qS = typeof TextDecoder < "u";
let YS;
const KS = typeof TextEncoder < "u";
function _y(e) {
  if (KS) e = (YS ||= new TextEncoder()).encode(e);
  else {
    let i = 0;
    const o = new Uint8Array(3 * e.length);
    for (let l = 0; l < e.length; l++) {
      var n = e.charCodeAt(l);
      if (n < 128) o[i++] = n;
      else {
        if (n < 2048) o[i++] = n >> 6 | 192;
        else {
          if (n >= 55296 && n <= 57343) {
            if (n <= 56319 && l < e.length) {
              const c = e.charCodeAt(++l);
              if (c >= 56320 && c <= 57343) {
                n = 1024 * (n - 55296) + c - 56320 + 65536, o[i++] = n >> 18 | 240, o[i++] = n >> 12 & 63 | 128, o[i++] = n >> 6 & 63 | 128, o[i++] = 63 & n | 128;
                continue;
              }
              l--;
            }
            n = 65533;
          }
          o[i++] = n >> 12 | 224, o[i++] = n >> 6 & 63 | 128;
        }
        o[i++] = 63 & n | 128;
      }
    }
    e = i === o.length ? o : o.subarray(0, i);
  }
  return e;
}
function wy(e) {
  Bo.setTimeout((() => {
    throw e;
  }), 0);
}
var r1, XS = Sl(610401301, !1), Uv = Sl(748402147, !0), F1 = Sl(824648567, !0), Z1 = Sl(824656860, Sl(1, !0));
function jv() {
  var e = Bo.navigator;
  return e && (e = e.userAgent) ? e : "";
}
const Hv = Bo.navigator;
function Iu(e) {
  return Iu[" "](e), e;
}
r1 = Hv && Hv.userAgentData || null, Iu[" "] = function() {
};
const Ay = {};
let hl = null;
function QS(e) {
  const n = e.length;
  let i = 3 * n / 4;
  i % 3 ? i = Math.floor(i) : "=.".indexOf(e[n - 1]) != -1 && (i = "=.".indexOf(e[n - 2]) != -1 ? i - 2 : i - 1);
  const o = new Uint8Array(i);
  let l = 0;
  return (function(c, d) {
    function h(m) {
      for (; g < c.length; ) {
        const y = c.charAt(g++), b = hl[y];
        if (b != null) return b;
        if (!/^[\s\xa0]*$/.test(y)) throw Error("Unknown base64 encoding at char: " + y);
      }
      return m;
    }
    Ey();
    let g = 0;
    for (; ; ) {
      const m = h(-1), y = h(0), b = h(64), A = h(64);
      if (A === 64 && m === -1) break;
      d(m << 2 | y >> 4), b != 64 && (d(y << 4 & 240 | b >> 2), A != 64 && d(b << 6 & 192 | A));
    }
  })(e, (function(c) {
    o[l++] = c;
  })), l !== i ? o.subarray(0, l) : o;
}
function Ey() {
  if (!hl) {
    hl = {};
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), n = ["+/=", "+/", "-_=", "-_.", "-_"];
    for (let i = 0; i < 5; i++) {
      const o = e.concat(n[i].split(""));
      Ay[i] = o;
      for (let l = 0; l < o.length; l++) {
        const c = o[l];
        hl[c] === void 0 && (hl[c] = l);
      }
    }
  }
}
var $S = typeof Uint8Array < "u", Sy = !(!(XS && r1 && r1.brands.length > 0) && (jv().indexOf("Trident") != -1 || jv().indexOf("MSIE") != -1)) && typeof btoa == "function";
const Vv = /[-_.]/g, PS = { "-": "+", _: "/", ".": "=" };
function JS(e) {
  return PS[e] || "";
}
function xy(e) {
  if (!Sy) return QS(e);
  e = Vv.test(e) ? e.replace(Vv, JS) : e, e = atob(e);
  const n = new Uint8Array(e.length);
  for (let i = 0; i < e.length; i++) n[i] = e.charCodeAt(i);
  return n;
}
function I1(e) {
  return $S && e != null && e instanceof Uint8Array;
}
var Fo = {};
function Mr() {
  return WS ||= new Ha(null, Fo);
}
function q1(e) {
  Ty(Fo);
  var n = e.g;
  return (n = n == null || I1(n) ? n : typeof n == "string" ? xy(n) : null) == null ? n : e.g = n;
}
var Ha = class {
  h() {
    return new Uint8Array(q1(this) || 0);
  }
  constructor(e, n) {
    if (Ty(n), this.g = e, e != null && e.length === 0) throw Error("ByteString should be constructed with non-empty values");
  }
};
let WS, ex;
function Ty(e) {
  if (e !== Fo) throw Error("illegal external caller");
}
function ky(e, n) {
  e.__closure__error__context__984382 || (e.__closure__error__context__984382 = {}), e.__closure__error__context__984382.severity = n;
}
function o1(e) {
  return ky(e = Error(e), "warning"), e;
}
function Zo(e, n) {
  if (e != null) {
    var i = ex ??= {}, o = i[e] || 0;
    o >= n || (i[e] = o + 1, ky(e = Error(), "incident"), wy(e));
  }
}
function as() {
  return typeof BigInt == "function";
}
var is = typeof Symbol == "function" && typeof /* @__PURE__ */ Symbol() == "symbol";
function Ba(e, n, i = !1) {
  return typeof Symbol == "function" && typeof /* @__PURE__ */ Symbol() == "symbol" ? i && Symbol.for && e ? Symbol.for(e) : e != null ? Symbol(e) : /* @__PURE__ */ Symbol() : n;
}
var tx = Ba("jas", void 0, !0), Gv = Ba(void 0, "0di"), ul = Ba(void 0, "1oa"), In = Ba(void 0, /* @__PURE__ */ Symbol()), nx = Ba(void 0, "0ub"), ax = Ba(void 0, "0ubs"), s1 = Ba(void 0, "0ubsb"), ix = Ba(void 0, "0actk"), Io = Ba("m_m", "Pa", !0), Bv = Ba();
const Oy = { Ga: { value: 0, configurable: !0, writable: !0, enumerable: !1 } }, Ry = Object.defineProperties, de = is ? tx : "Ga";
var Vr;
const Fv = [];
function Ll(e, n) {
  is || de in e || Ry(e, Oy), e[de] |= n;
}
function Yt(e, n) {
  is || de in e || Ry(e, Oy), e[de] = n;
}
function Cl(e) {
  return Ll(e, 34), e;
}
function xl(e) {
  return Ll(e, 8192), e;
}
Yt(Fv, 7), Vr = Object.freeze(Fv);
var qo = {};
function Yn(e, n) {
  return n === void 0 ? e.h !== Ur && !!(2 & (0 | e.v[de])) : !!(2 & n) && e.h !== Ur;
}
const Ur = {};
function Y1(e, n) {
  if (e != null) {
    if (typeof e == "string") e = e ? new Ha(e, Fo) : Mr();
    else if (e.constructor !== Ha) if (I1(e)) e = e.length ? new Ha(new Uint8Array(e), Fo) : Mr();
    else {
      if (!n) throw Error();
      e = void 0;
    }
  }
  return e;
}
class Zv {
  constructor(n, i, o) {
    this.g = n, this.h = i, this.l = o;
  }
  next() {
    const n = this.g.next();
    return n.done || (n.value = this.h.call(this.l, n.value)), n;
  }
  [Symbol.iterator]() {
    return this;
  }
}
var rx = Object.freeze({});
function zy(e, n, i) {
  const o = 128 & n ? 0 : -1, l = e.length;
  var c;
  (c = !!l) && (c = (c = e[l - 1]) != null && typeof c == "object" && c.constructor === Object);
  const d = l + (c ? -1 : 0);
  for (n = 128 & n ? 1 : 0; n < d; n++) i(n - o, e[n]);
  if (c) {
    e = e[l - 1];
    for (const h in e) !isNaN(h) && i(+h, e[h]);
  }
}
var Ny = {};
function rs(e) {
  return 128 & e ? Ny : void 0;
}
function qu(e) {
  return e.Na = !0, e;
}
var ox = qu(((e) => typeof e == "number")), Iv = qu(((e) => typeof e == "string")), sx = qu(((e) => typeof e == "boolean")), Yu = typeof Bo.BigInt == "function" && typeof Bo.BigInt(0) == "bigint";
function qn(e) {
  var n = e;
  if (Iv(n)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(n)) throw Error(String(n));
  } else if (ox(n) && !Number.isSafeInteger(n)) throw Error(String(n));
  return Yu ? BigInt(e) : e = sx(e) ? e ? "1" : "0" : Iv(e) ? e.trim() || "0" : String(e);
}
var l1 = qu(((e) => Yu ? e >= cx && e <= fx : e[0] === "-" ? qv(e, lx) : qv(e, ux)));
const lx = Number.MIN_SAFE_INTEGER.toString(), cx = Yu ? BigInt(Number.MIN_SAFE_INTEGER) : void 0, ux = Number.MAX_SAFE_INTEGER.toString(), fx = Yu ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function qv(e, n) {
  if (e.length > n.length) return !1;
  if (e.length < n.length || e === n) return !0;
  for (let i = 0; i < e.length; i++) {
    const o = e[i], l = n[i];
    if (o > l) return !1;
    if (o < l) return !0;
  }
}
const dx = typeof Uint8Array.prototype.slice == "function";
let hx, bt = 0, Ut = 0;
function Yv(e) {
  const n = e >>> 0;
  bt = n, Ut = (e - n) / 4294967296 >>> 0;
}
function Yo(e) {
  if (e < 0) {
    Yv(-e);
    const [n, i] = $1(bt, Ut);
    bt = n >>> 0, Ut = i >>> 0;
  } else Yv(e);
}
function K1(e) {
  const n = hx ||= new DataView(new ArrayBuffer(8));
  n.setFloat32(0, +e, !0), Ut = 0, bt = n.getUint32(0, !0);
}
function c1(e, n) {
  const i = 4294967296 * n + (e >>> 0);
  return Number.isSafeInteger(i) ? i : Tl(e, n);
}
function px(e, n) {
  return qn(as() ? BigInt.asUintN(64, (BigInt(n >>> 0) << BigInt(32)) + BigInt(e >>> 0)) : Tl(e, n));
}
function X1(e, n) {
  const i = 2147483648 & n;
  return i && (n = ~n >>> 0, (e = 1 + ~e >>> 0) == 0 && (n = n + 1 >>> 0)), typeof (e = c1(e, n)) == "number" ? i ? -e : e : i ? "-" + e : e;
}
function Ly(e, n) {
  return as() ? qn(BigInt.asIntN(64, (BigInt.asUintN(32, BigInt(n)) << BigInt(32)) + BigInt.asUintN(32, BigInt(e)))) : qn(Q1(e, n));
}
function Tl(e, n) {
  if (e >>>= 0, (n >>>= 0) <= 2097151) var i = "" + (4294967296 * n + e);
  else as() ? i = "" + (BigInt(n) << BigInt(32) | BigInt(e)) : (e = (16777215 & e) + 6777216 * (i = 16777215 & (e >>> 24 | n << 8)) + 6710656 * (n = n >> 16 & 65535), i += 8147497 * n, n *= 2, e >= 1e7 && (i += e / 1e7 >>> 0, e %= 1e7), i >= 1e7 && (n += i / 1e7 >>> 0, i %= 1e7), i = n + Kv(i) + Kv(e));
  return i;
}
function Kv(e) {
  return e = String(e), "0000000".slice(e.length) + e;
}
function Q1(e, n) {
  if (2147483648 & n) if (as()) e = "" + (BigInt(0 | n) << BigInt(32) | BigInt(e >>> 0));
  else {
    const [i, o] = $1(e, n);
    e = "-" + Tl(i, o);
  }
  else e = Tl(e, n);
  return e;
}
function Ku(e) {
  if (e.length < 16) Yo(Number(e));
  else if (as()) e = BigInt(e), bt = Number(e & BigInt(4294967295)) >>> 0, Ut = Number(e >> BigInt(32) & BigInt(4294967295));
  else {
    const n = +(e[0] === "-");
    Ut = bt = 0;
    const i = e.length;
    for (let o = n, l = (i - n) % 6 + n; l <= i; o = l, l += 6) {
      const c = Number(e.slice(o, l));
      Ut *= 1e6, bt = 1e6 * bt + c, bt >= 4294967296 && (Ut += Math.trunc(bt / 4294967296), Ut >>>= 0, bt >>>= 0);
    }
    if (n) {
      const [o, l] = $1(bt, Ut);
      bt = o, Ut = l;
    }
  }
}
function $1(e, n) {
  return n = ~n, e ? e = 1 + ~e : n += 1, [e, n];
}
function Sa(e) {
  return Array.prototype.slice.call(e);
}
const Dl = typeof BigInt == "function" ? BigInt.asIntN : void 0, gx = typeof BigInt == "function" ? BigInt.asUintN : void 0, jr = Number.isSafeInteger, Xu = Number.isFinite, Ko = Math.trunc, mx = qn(0);
function pl(e) {
  if (e != null && typeof e != "number") throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);
  return e;
}
function Ua(e) {
  return e == null || typeof e == "number" ? e : e === "NaN" || e === "Infinity" || e === "-Infinity" ? Number(e) : void 0;
}
function kl(e) {
  if (e != null && typeof e != "boolean") {
    var n = typeof e;
    throw Error(`Expected boolean but got ${n != "object" ? n : e ? Array.isArray(e) ? "array" : n : "null"}: ${e}`);
  }
  return e;
}
function Cy(e) {
  return e == null || typeof e == "boolean" ? e : typeof e == "number" ? !!e : void 0;
}
const vx = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Ml(e) {
  switch (typeof e) {
    case "bigint":
      return !0;
    case "number":
      return Xu(e);
    case "string":
      return vx.test(e);
    default:
      return !1;
  }
}
function os(e) {
  if (e == null) return e;
  if (typeof e == "string" && e) e = +e;
  else if (typeof e != "number") return;
  return Xu(e) ? 0 | e : void 0;
}
function Dy(e) {
  if (e == null) return e;
  if (typeof e == "string" && e) e = +e;
  else if (typeof e != "number") return;
  return Xu(e) ? e >>> 0 : void 0;
}
function My(e) {
  const n = e.length;
  return (e[0] === "-" ? n < 20 || n === 20 && e <= "-9223372036854775808" : n < 19 || n === 19 && e <= "9223372036854775807") ? e : (Ku(e), Q1(bt, Ut));
}
function P1(e) {
  return e = Ko(e), jr(e) || (Yo(e), e = X1(bt, Ut)), e;
}
function Uy(e) {
  var n = Ko(Number(e));
  return jr(n) ? String(n) : ((n = e.indexOf(".")) !== -1 && (e = e.substring(0, n)), My(e));
}
function jy(e) {
  var n = Ko(Number(e));
  return jr(n) ? qn(n) : ((n = e.indexOf(".")) !== -1 && (e = e.substring(0, n)), as() ? qn(Dl(64, BigInt(e))) : qn(My(e)));
}
function Hy(e) {
  return jr(e) ? e = qn(P1(e)) : (e = Ko(e), jr(e) ? e = String(e) : (Yo(e), e = Q1(bt, Ut)), e = qn(e)), e;
}
function yx(e) {
  return e == null ? e : typeof e == "bigint" ? (l1(e) ? e = Number(e) : (e = Dl(64, e), e = l1(e) ? Number(e) : String(e)), e) : Ml(e) ? typeof e == "number" ? P1(e) : Uy(e) : void 0;
}
function Tu(e) {
  const n = typeof e;
  return e == null ? e : n === "bigint" ? qn(Dl(64, e)) : Ml(e) ? n === "string" ? jy(e) : Hy(e) : void 0;
}
function Vy(e) {
  if (typeof e != "string") throw Error();
  return e;
}
function Ul(e) {
  if (e != null && typeof e != "string") throw Error();
  return e;
}
function un(e) {
  return e == null || typeof e == "string" ? e : void 0;
}
function J1(e, n, i, o) {
  return e != null && e[Io] === qo ? e : Array.isArray(e) ? ((o = (i = 0 | e[de]) | 32 & o | 2 & o) !== i && Yt(e, o), new n(e)) : (i ? 2 & o ? ((e = n[Gv]) || (Cl((e = new n()).v), e = n[Gv] = e), n = e) : n = new n() : n = void 0, n);
}
function bx(e, n, i) {
  if (n) e: {
    if (!Ml(n = e)) throw o1("int64");
    switch (typeof n) {
      case "string":
        n = jy(n);
        break e;
      case "bigint":
        n = qn(Dl(64, n));
        break e;
      default:
        n = Hy(n);
    }
  }
  else n = Tu(e);
  return (e = n) == null ? i ? mx : void 0 : e;
}
const _x = {};
let wx = (function() {
  try {
    return Iu(new class extends Map {
      constructor() {
        super();
      }
    }()), !1;
  } catch {
    return !0;
  }
})();
class Fh {
  constructor() {
    this.g = /* @__PURE__ */ new Map();
  }
  get(n) {
    return this.g.get(n);
  }
  set(n, i) {
    return this.g.set(n, i), this.size = this.g.size, this;
  }
  delete(n) {
    return n = this.g.delete(n), this.size = this.g.size, n;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(n) {
    return this.g.has(n);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(n, i) {
    return this.g.forEach(n, i);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
}
const Ax = wx ? (Object.setPrototypeOf(Fh.prototype, Map.prototype), Object.defineProperties(Fh.prototype, { size: { value: 0, configurable: !0, enumerable: !0, writable: !0 } }), Fh) : class extends Map {
  constructor() {
    super();
  }
};
function Xv(e) {
  return e;
}
function Zh(e) {
  if (2 & e.J) throw Error("Cannot mutate an immutable Map");
}
var gi = class extends Ax {
  constructor(e, n, i = Xv, o = Xv) {
    super(), this.J = 0 | e[de], this.K = n, this.S = i, this.fa = this.K ? Ex : o;
    for (let l = 0; l < e.length; l++) {
      const c = e[l], d = i(c[0], !1, !0);
      let h = c[1];
      n ? h === void 0 && (h = null) : h = o(c[1], !1, !0, void 0, void 0, this.J), super.set(d, h);
    }
  }
  V(e) {
    return xl(Array.from(super.entries(), e));
  }
  clear() {
    Zh(this), super.clear();
  }
  delete(e) {
    return Zh(this), super.delete(this.S(e, !0, !1));
  }
  entries() {
    if (this.K) {
      var e = super.keys();
      e = new Zv(e, Sx, this);
    } else e = super.entries();
    return e;
  }
  values() {
    if (this.K) {
      var e = super.keys();
      e = new Zv(e, gi.prototype.get, this);
    } else e = super.values();
    return e;
  }
  forEach(e, n) {
    this.K ? super.forEach(((i, o, l) => {
      e.call(n, l.get(o), o, l);
    })) : super.forEach(e, n);
  }
  set(e, n) {
    return Zh(this), (e = this.S(e, !0, !1)) == null ? this : n == null ? (super.delete(e), this) : super.set(e, this.fa(n, !0, !0, this.K, !1, this.J));
  }
  Ma(e) {
    const n = this.S(e[0], !1, !0);
    e = e[1], e = this.K ? e === void 0 ? null : e : this.fa(e, !1, !0, void 0, !1, this.J), super.set(n, e);
  }
  has(e) {
    return super.has(this.S(e, !1, !1));
  }
  get(e) {
    e = this.S(e, !1, !1);
    const n = super.get(e);
    if (n !== void 0) {
      var i = this.K;
      return i ? ((i = this.fa(n, !1, !0, i, this.ra, this.J)) !== n && super.set(e, i), i) : n;
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function Ex(e, n, i, o, l, c) {
  return e = J1(e, o, i, c), l && (e = ep(e)), e;
}
function Sx(e) {
  return [e, this.get(e)];
}
let xx;
function Qv() {
  return xx ||= new gi(Cl([]), void 0, void 0, void 0, _x);
}
function Qu(e) {
  return In ? e[In] : void 0;
}
function ku(e, n) {
  for (const i in e) !isNaN(i) && n(e, +i, e[i]);
}
gi.prototype.toJSON = void 0;
var u1 = class {
};
const Tx = { Ka: !0 };
function kx(e, n) {
  n < 100 || Zo(ax, 1);
}
function $u(e, n, i, o) {
  const l = o !== void 0;
  o = !!o;
  var c, d = In;
  !l && is && d && (c = e[d]) && ku(c, kx), d = [];
  var h = e.length;
  let g;
  c = 4294967295;
  let m = !1;
  const y = !!(64 & n), b = y ? 128 & n ? 0 : -1 : void 0;
  1 & n || (g = h && e[h - 1], g != null && typeof g == "object" && g.constructor === Object ? c = --h : g = void 0, !y || 128 & n || l || (m = !0, c = c - b + b)), n = void 0;
  for (var A = 0; A < h; A++) {
    let x = e[A];
    if (x != null && (x = i(x, o)) != null) if (y && A >= c) {
      const V = A - b;
      (n ??= {})[V] = x;
    } else d[A] = x;
  }
  if (g) for (let x in g) {
    if ((h = g[x]) == null || (h = i(h, o)) == null) continue;
    let V;
    A = +x, y && !Number.isNaN(A) && (V = A + b) < c ? d[V] = h : (n ??= {})[x] = h;
  }
  return n && (m ? d.push(n) : d[c] = n), l && In && (e = Qu(e)) && e instanceof u1 && (d[In] = (function(x) {
    const V = new u1();
    return ku(x, ((F, q, te) => {
      V[q] = Sa(te);
    })), V.da = x.da, V;
  })(e)), d;
}
function Ox(e) {
  return e[0] = Ol(e[0]), e[1] = Ol(e[1]), e;
}
function Ol(e) {
  switch (typeof e) {
    case "number":
      return Number.isFinite(e) ? e : "" + e;
    case "bigint":
      return l1(e) ? Number(e) : "" + e;
    case "boolean":
      return e ? 1 : 0;
    case "object":
      if (Array.isArray(e)) {
        var n = 0 | e[de];
        return e.length === 0 && 1 & n ? void 0 : $u(e, n, Ol);
      }
      if (e != null && e[Io] === qo) return Gy(e);
      if (e instanceof Ha) {
        if ((n = e.g) == null) e = "";
        else if (typeof n == "string") e = n;
        else {
          if (Sy) {
            for (var i = "", o = 0, l = n.length - 10240; o < l; ) i += String.fromCharCode.apply(null, n.subarray(o, o += 10240));
            i += String.fromCharCode.apply(null, o ? n.subarray(o) : n), n = btoa(i);
          } else {
            i === void 0 && (i = 0), Ey(), i = Ay[i], o = Array(Math.floor(n.length / 3)), l = i[64] || "";
            let m = 0, y = 0;
            for (; m < n.length - 2; m += 3) {
              var c = n[m], d = n[m + 1], h = n[m + 2], g = i[c >> 2];
              c = i[(3 & c) << 4 | d >> 4], d = i[(15 & d) << 2 | h >> 6], h = i[63 & h], o[y++] = g + c + d + h;
            }
            switch (g = 0, h = l, n.length - m) {
              case 2:
                h = i[(15 & (g = n[m + 1])) << 2] || l;
              case 1:
                n = n[m], o[y] = i[n >> 2] + i[(3 & n) << 4 | g >> 4] + h + l;
            }
            n = o.join("");
          }
          e = e.g = n;
        }
        return e;
      }
      return e instanceof gi ? e = e.size !== 0 ? e.V(Ox) : void 0 : void 0;
  }
  return e;
}
function Gy(e) {
  return $u(e = e.v, 0 | e[de], Ol);
}
let Rx, zx;
function Or(e, n) {
  return By(e, n[0], n[1]);
}
function By(e, n, i, o = 0) {
  if (e == null) {
    var l = 32;
    i ? (e = [i], l |= 128) : e = [], n && (l = -16760833 & l | (1023 & n) << 14);
  } else {
    if (!Array.isArray(e)) throw Error("narr");
    if (l = 0 | e[de], Uv && 1 & l) throw Error("rfarr");
    if (2048 & l && !(2 & l) && (function() {
      if (Uv) throw Error("carr");
      Zo(ix, 5);
    })(), 256 & l) throw Error("farr");
    if (64 & l) return (l | o) !== l && Yt(e, l | o), e;
    if (i && (l |= 128, i !== e[0])) throw Error("mid");
    e: {
      l |= 64;
      var c = (i = e).length;
      if (c) {
        var d = c - 1;
        const g = i[d];
        if (g != null && typeof g == "object" && g.constructor === Object) {
          if ((d -= n = 128 & l ? 0 : -1) >= 1024) throw Error("pvtlmt");
          for (var h in g) (c = +h) < d && (i[c + n] = g[h], delete g[h]);
          l = -16760833 & l | (1023 & d) << 14;
          break e;
        }
      }
      if (n) {
        if ((h = Math.max(n, c - (128 & l ? 0 : -1))) > 1024) throw Error("spvt");
        l = -16760833 & l | (1023 & h) << 14;
      }
    }
  }
  return Yt(e, 64 | l | o), e;
}
function Nx(e, n) {
  if (typeof e != "object") return e;
  if (Array.isArray(e)) {
    var i = 0 | e[de];
    return e.length === 0 && 1 & i ? void 0 : $v(e, i, n);
  }
  if (e != null && e[Io] === qo) return Pv(e);
  if (e instanceof gi) {
    if (2 & (n = e.J)) return e;
    if (!e.size) return;
    if (i = Cl(e.V()), e.K) for (e = 0; e < i.length; e++) {
      const o = i[e];
      let l = o[1];
      l = l == null || typeof l != "object" ? void 0 : l != null && l[Io] === qo ? Pv(l) : Array.isArray(l) ? $v(l, 0 | l[de], !!(32 & n)) : void 0, o[1] = l;
    }
    return i;
  }
  return e instanceof Ha ? e : void 0;
}
function $v(e, n, i) {
  return 2 & n || (!i || 4096 & n || 16 & n ? e = ss(e, n, !1, i && !(16 & n)) : (Ll(e, 34), 4 & n && Object.freeze(e))), e;
}
function W1(e, n, i) {
  return e = new e.constructor(n), i && (e.h = Ur), e.m = Ur, e;
}
function Pv(e) {
  const n = e.v, i = 0 | n[de];
  return Yn(e, i) ? e : tp(e, n, i) ? W1(e, n) : ss(n, i);
}
function ss(e, n, i, o) {
  return o ??= !!(34 & n), e = $u(e, n, Nx, o), o = 32, i && (o |= 2), Yt(e, n = 16769217 & n | o), e;
}
function ep(e) {
  const n = e.v, i = 0 | n[de];
  return Yn(e, i) ? tp(e, n, i) ? W1(e, n, !0) : new e.constructor(ss(n, i, !1)) : e;
}
function ls(e) {
  if (e.h !== Ur) return !1;
  var n = e.v;
  return Ll(n = ss(n, 0 | n[de]), 2048), e.v = n, e.h = void 0, e.m = void 0, !0;
}
function cs(e) {
  if (!ls(e) && Yn(e, 0 | e.v[de])) throw Error();
}
function Gr(e, n) {
  n === void 0 && (n = 0 | e[de]), 32 & n && !(4096 & n) && Yt(e, 4096 | n);
}
function tp(e, n, i) {
  return !!(2 & i) || !(!(32 & i) || 4096 & i) && (Yt(n, 2 | i), e.h = Ur, !0);
}
const Lx = qn(0), Yi = {};
function gt(e, n, i, o, l) {
  if ((n = mi(e.v, n, i, l)) !== null || o && e.m !== Ur) return n;
}
function mi(e, n, i, o) {
  if (n === -1) return null;
  const l = n + (i ? 0 : -1), c = e.length - 1;
  let d, h;
  if (!(c < 1 + (i ? 0 : -1))) {
    if (l >= c) if (d = e[c], d != null && typeof d == "object" && d.constructor === Object) i = d[n], h = !0;
    else {
      if (l !== c) return;
      i = d;
    }
    else i = e[l];
    if (o && i != null) {
      if ((o = o(i)) == null) return o;
      if (!Object.is(o, i)) return h ? d[n] = o : e[l] = o, o;
    }
    return i;
  }
}
function ot(e, n, i, o) {
  cs(e), It(e = e.v, 0 | e[de], n, i, o);
}
function It(e, n, i, o, l) {
  const c = i + (l ? 0 : -1);
  var d = e.length - 1;
  if (d >= 1 + (l ? 0 : -1) && c >= d) {
    const h = e[d];
    if (h != null && typeof h == "object" && h.constructor === Object) return h[i] = o, n;
  }
  return c <= d ? (e[c] = o, n) : (o !== void 0 && (i >= (d = (n ??= 0 | e[de]) >> 14 & 1023 || 536870912) ? o != null && (e[d + (l ? 0 : -1)] = { [i]: o }) : e[c] = o), n);
}
function Tr() {
  return rx === void 0 ? 2 : 4;
}
function kr(e, n, i, o, l) {
  let c = e.v, d = 0 | c[de];
  o = Yn(e, d) ? 1 : o, l = !!l || o === 3, o === 2 && ls(e) && (c = e.v, d = 0 | c[de]);
  let h = (e = np(c, n)) === Vr ? 7 : 0 | e[de], g = ap(h, d);
  var m = !(4 & g);
  if (m) {
    4 & g && (e = Sa(e), h = 0, g = zr(g, d), d = It(c, d, n, e));
    let y = 0, b = 0;
    for (; y < e.length; y++) {
      const A = i(e[y]);
      A != null && (e[b++] = A);
    }
    b < y && (e.length = b), i = -513 & (4 | g), g = i &= -1025, g &= -4097;
  }
  return g !== h && (Yt(e, g), 2 & g && Object.freeze(e)), Fy(e, g, c, d, n, o, m, l);
}
function Fy(e, n, i, o, l, c, d, h) {
  let g = n;
  return c === 1 || c === 4 && (2 & n || !(16 & n) && 32 & o) ? Rr(n) || ((n |= !e.length || d && !(4096 & n) || 32 & o && !(4096 & n || 16 & n) ? 2 : 256) !== g && Yt(e, n), Object.freeze(e)) : (c === 2 && Rr(n) && (e = Sa(e), g = 0, n = zr(n, o), o = It(i, o, l, e)), Rr(n) || (h || (n |= 16), n !== g && Yt(e, n))), 2 & n || !(4096 & n || 16 & n) || Gr(i, o), e;
}
function np(e, n, i) {
  return e = mi(e, n, i), Array.isArray(e) ? e : Vr;
}
function ap(e, n) {
  return 2 & n && (e |= 2), 1 | e;
}
function Rr(e) {
  return !!(2 & e) && !!(4 & e) || !!(256 & e);
}
function Zy(e) {
  return Y1(e, !0);
}
function Iy(e) {
  e = Sa(e);
  for (let n = 0; n < e.length; n++) {
    const i = e[n] = Sa(e[n]);
    Array.isArray(i[1]) && (i[1] = Cl(i[1]));
  }
  return xl(e);
}
function Xi(e, n, i, o) {
  cs(e), It(e = e.v, 0 | e[de], n, (o === "0" ? Number(i) === 0 : i === o) ? void 0 : i);
}
function us(e, n, i) {
  if (2 & n) throw Error();
  const o = rs(n);
  let l = np(e, i, o), c = l === Vr ? 7 : 0 | l[de], d = ap(c, n);
  return (2 & d || Rr(d) || 16 & d) && (d === c || Rr(d) || Yt(l, d), l = Sa(l), c = 0, d = zr(d, n), It(e, n, i, l, o)), d &= -13, d !== c && Yt(l, d), l;
}
function Ih(e, n) {
  var i = Ub;
  return rp(ip(e = e.v), e, void 0, i) === n ? n : -1;
}
function ip(e) {
  if (is) return e[ul] ?? (e[ul] = /* @__PURE__ */ new Map());
  if (ul in e) return e[ul];
  const n = /* @__PURE__ */ new Map();
  return Object.defineProperty(e, ul, { value: n }), n;
}
function qy(e, n, i, o, l) {
  const c = ip(e), d = rp(c, e, n, i, l);
  return d !== o && (d && (n = It(e, n, d, void 0, l)), c.set(i, o)), n;
}
function rp(e, n, i, o, l) {
  let c = e.get(o);
  if (c != null) return c;
  c = 0;
  for (let d = 0; d < o.length; d++) {
    const h = o[d];
    mi(n, h, l) != null && (c !== 0 && (i = It(n, i, c, void 0, l)), c = h);
  }
  return e.set(o, c), c;
}
function op(e, n, i) {
  let o = 0 | e[de];
  const l = rs(o), c = mi(e, i, l);
  let d;
  if (c != null && c[Io] === qo) {
    if (!Yn(c)) return ls(c), c.v;
    d = c.v;
  } else Array.isArray(c) && (d = c);
  if (d) {
    const h = 0 | d[de];
    2 & h && (d = ss(d, h));
  }
  return d = Or(d, n), d !== c && It(e, o, i, d, l), d;
}
function Yy(e, n, i, o, l) {
  let c = !1;
  if ((o = mi(e, o, l, ((d) => {
    const h = J1(d, i, !1, n);
    return c = h !== d && h != null, h;
  }))) != null) return c && !Yn(o) && Gr(e, n), o;
}
function Ye(e, n, i, o) {
  let l = e.v, c = 0 | l[de];
  if ((n = Yy(l, c, n, i, o)) == null) return n;
  if (c = 0 | l[de], !Yn(e, c)) {
    const d = ep(n);
    d !== n && (ls(e) && (l = e.v, c = 0 | l[de]), c = It(l, c, i, n = d, o), Gr(l, c));
  }
  return n;
}
function Ky(e, n, i, o, l, c, d, h) {
  var g = Yn(e, i);
  c = g ? 1 : c, d = !!d || c === 3, g = h && !g, (c === 2 || g) && ls(e) && (i = 0 | (n = e.v)[de]);
  var m = (e = np(n, l)) === Vr ? 7 : 0 | e[de], y = ap(m, i);
  if (h = !(4 & y)) {
    var b = e, A = i;
    const x = !!(2 & y);
    x && (A |= 2);
    let V = !x, F = !0, q = 0, te = 0;
    for (; q < b.length; q++) {
      const ne = J1(b[q], o, !1, A);
      if (ne instanceof o) {
        if (!x) {
          const W = Yn(ne);
          V &&= !W, F &&= W;
        }
        b[te++] = ne;
      }
    }
    te < q && (b.length = te), y |= 4, y = F ? -4097 & y : 4096 | y, y = V ? 8 | y : -9 & y;
  }
  if (y !== m && (Yt(e, y), 2 & y && Object.freeze(e)), g && !(8 & y || !e.length && (c === 1 || c === 4 && (2 & y || !(16 & y) && 32 & i)))) {
    for (Rr(y) && (e = Sa(e), y = zr(y, i), i = It(n, i, l, e)), o = e, g = y, m = 0; m < o.length; m++) (b = o[m]) !== (y = ep(b)) && (o[m] = y);
    g |= 8, Yt(e, y = g = o.length ? 4096 | g : -4097 & g);
  }
  return Fy(e, y, n, i, l, c, h, d);
}
function vi(e, n, i) {
  const o = e.v;
  return Ky(e, o, 0 | o[de], n, i, Tr(), !1, !0);
}
function Xy(e) {
  return e == null && (e = void 0), e;
}
function Ae(e, n, i, o, l) {
  return ot(e, i, o = Xy(o), l), o && !Yn(o) && Gr(e.v), e;
}
function yl(e, n, i, o) {
  e: {
    var l = o = Xy(o);
    cs(e);
    const c = e.v;
    let d = 0 | c[de];
    if (l == null) {
      const h = ip(c);
      if (rp(h, c, d, i) !== n) break e;
      h.set(i, 0);
    } else d = qy(c, d, i, n);
    It(c, d, n, l);
  }
  o && !Yn(o) && Gr(e.v);
}
function zr(e, n) {
  return -273 & (2 & n ? 2 | e : -3 & e);
}
function sp(e, n, i, o) {
  var l = o;
  cs(e), e = Ky(e, o = e.v, 0 | o[de], i, n, 2, !0), l = l ?? new i(), e.push(l), n = i = e === Vr ? 7 : 0 | e[de], (l = Yn(l)) ? (i &= -9, e.length === 1 && (i &= -4097)) : i |= 4096, i !== n && Yt(e, i), l || Gr(o);
}
function ha(e, n, i) {
  return os(gt(e, n, void 0, i));
}
function Qy(e) {
  return (Z1 ? gt(e, 2, void 0, void 0, Tu) : Tu(gt(e, 2))) ?? Lx;
}
function Rt(e, n) {
  return gt(e, n, void 0, void 0, Ua) ?? 0;
}
function yi(e, n, i) {
  if (i != null) {
    if (typeof i != "number" || !Xu(i)) throw o1("int32");
    i |= 0;
  }
  ot(e, n, i);
}
function ve(e, n, i) {
  ot(e, n, pl(i));
}
function Kn(e, n, i) {
  Xi(e, n, Ul(i), "");
}
function Ou(e, n, i) {
  {
    cs(e);
    const d = e.v;
    let h = 0 | d[de];
    if (i == null) It(d, h, n);
    else {
      var o = e = i === Vr ? 7 : 0 | i[de], l = Rr(e), c = l || Object.isFrozen(i);
      for (l || (e = 0), c || (i = Sa(i), o = 0, e = zr(e, h), c = !1), e |= 5, e |= (4 & e ? 512 & e ? 512 : 1024 & e ? 1024 : 0 : void 0) ?? (Z1 ? 1024 : 0), l = 0; l < i.length; l++) {
        const g = i[l], m = Vy(g);
        Object.is(g, m) || (c && (i = Sa(i), o = 0, e = zr(e, h), c = !1), i[l] = m);
      }
      e !== o && (c && (i = Sa(i), e = zr(e, h)), Yt(i, e)), It(d, h, n, i);
    }
  }
}
function Pu(e, n, i) {
  cs(e), kr(e, n, un, 2, !0).push(Vy(i));
}
var Lo = class {
  constructor(e, n, i) {
    if (this.buffer = e, i && !n) throw Error();
    this.g = n;
  }
};
function lp(e, n) {
  if (typeof e == "string") return new Lo(xy(e), n);
  if (Array.isArray(e)) return new Lo(new Uint8Array(e), n);
  if (e.constructor === Uint8Array) return new Lo(e, !1);
  if (e.constructor === ArrayBuffer) return e = new Uint8Array(e), new Lo(e, !1);
  if (e.constructor === Ha) return n = q1(e) || new Uint8Array(0), new Lo(n, !0, e);
  if (e instanceof Uint8Array) return e = e.constructor === Uint8Array ? e : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Lo(e, !1);
  throw Error();
}
function Xo(e, n) {
  let i, o = 0, l = 0, c = 0;
  const d = e.h;
  let h = e.g;
  do
    i = d[h++], o |= (127 & i) << c, c += 7;
  while (c < 32 && 128 & i);
  if (c > 32) for (l |= (127 & i) >> 4, c = 3; c < 32 && 128 & i; c += 7) i = d[h++], l |= (127 & i) << c;
  if (Nr(e, h), !(128 & i)) return n(o >>> 0, l >>> 0);
  throw Error();
}
function cp(e) {
  let n = 0, i = e.g;
  const o = i + 10, l = e.h;
  for (; i < o; ) {
    const c = l[i++];
    if (n |= c, (128 & c) == 0) return Nr(e, i), !!(127 & n);
  }
  throw Error();
}
function Pi(e) {
  const n = e.h;
  let i = e.g, o = n[i++], l = 127 & o;
  if (128 & o && (o = n[i++], l |= (127 & o) << 7, 128 & o && (o = n[i++], l |= (127 & o) << 14, 128 & o && (o = n[i++], l |= (127 & o) << 21, 128 & o && (o = n[i++], l |= o << 28, 128 & o && 128 & n[i++] && 128 & n[i++] && 128 & n[i++] && 128 & n[i++] && 128 & n[i++]))))) throw Error();
  return Nr(e, i), l;
}
function bi(e) {
  return Pi(e) >>> 0;
}
function Ru(e) {
  var n = e.h;
  const i = e.g;
  var o = n[i], l = n[i + 1];
  const c = n[i + 2];
  return n = n[i + 3], Nr(e, e.g + 4), e = 2 * ((l = (o << 0 | l << 8 | c << 16 | n << 24) >>> 0) >> 31) + 1, o = l >>> 23 & 255, l &= 8388607, o == 255 ? l ? NaN : e * (1 / 0) : o == 0 ? 1401298464324817e-60 * e * l : e * Math.pow(2, o - 150) * (l + 8388608);
}
function Cx(e) {
  return Pi(e);
}
function Nr(e, n) {
  if (e.g = n, n > e.l) throw Error();
}
function $y(e, n) {
  if (n < 0) throw Error();
  const i = e.g;
  if ((n = i + n) > e.l) throw Error();
  return e.g = n, i;
}
function Py(e, n) {
  if (n == 0) return Mr();
  var i = $y(e, n);
  return e.Y && e.j ? i = e.h.subarray(i, i + n) : (e = e.h, i = i === (n = i + n) ? new Uint8Array(0) : dx ? e.slice(i, n) : new Uint8Array(e.subarray(i, n))), i.length == 0 ? Mr() : new Ha(i, Fo);
}
var Jv = [];
function Jy(e, n, i, o) {
  if (zu.length) {
    const l = zu.pop();
    return l.o(o), l.g.init(e, n, i, o), l;
  }
  return new Dx(e, n, i, o);
}
function Wy(e) {
  e.g.clear(), e.l = -1, e.h = -1, zu.length < 100 && zu.push(e);
}
function eb(e) {
  var n = e.g;
  if (n.g == n.l) return !1;
  e.m = e.g.g;
  var i = bi(e.g);
  if (n = i >>> 3, !((i &= 7) >= 0 && i <= 5) || n < 1) throw Error();
  return e.l = n, e.h = i, !0;
}
function mu(e) {
  switch (e.h) {
    case 0:
      e.h != 0 ? mu(e) : cp(e.g);
      break;
    case 1:
      Nr(e = e.g, e.g + 8);
      break;
    case 2:
      if (e.h != 2) mu(e);
      else {
        var n = bi(e.g);
        Nr(e = e.g, e.g + n);
      }
      break;
    case 5:
      Nr(e = e.g, e.g + 4);
      break;
    case 3:
      for (n = e.l; ; ) {
        if (!eb(e)) throw Error();
        if (e.h == 4) {
          if (e.l != n) throw Error();
          break;
        }
        mu(e);
      }
      break;
    default:
      throw Error();
  }
}
function jl(e, n, i) {
  const o = e.g.l;
  var l = bi(e.g);
  let c = (l = e.g.g + l) - o;
  if (c <= 0 && (e.g.l = l, i(n, e, void 0, void 0, void 0), c = l - e.g.g), c) throw Error();
  return e.g.g = l, e.g.l = o, n;
}
function up(e) {
  var n = bi(e.g), i = $y(e = e.g, n);
  if (e = e.h, qS) {
    var o, l = e;
    (o = Bh) || (o = Bh = new TextDecoder("utf-8", { fatal: !0 })), n = i + n, l = i === 0 && n === l.length ? l : l.subarray(i, n);
    try {
      var c = o.decode(l);
    } catch (h) {
      if (du === void 0) {
        try {
          o.decode(new Uint8Array([128]));
        } catch {
        }
        try {
          o.decode(new Uint8Array([97])), du = !0;
        } catch {
          du = !1;
        }
      }
      throw !du && (Bh = void 0), h;
    }
  } else {
    n = (c = i) + n, i = [];
    let h, g = null;
    for (; c < n; ) {
      var d = e[c++];
      d < 128 ? i.push(d) : d < 224 ? c >= n ? Er() : (h = e[c++], d < 194 || (192 & h) != 128 ? (c--, Er()) : i.push((31 & d) << 6 | 63 & h)) : d < 240 ? c >= n - 1 ? Er() : (h = e[c++], (192 & h) != 128 || d === 224 && h < 160 || d === 237 && h >= 160 || (192 & (o = e[c++])) != 128 ? (c--, Er()) : i.push((15 & d) << 12 | (63 & h) << 6 | 63 & o)) : d <= 244 ? c >= n - 2 ? Er() : (h = e[c++], (192 & h) != 128 || h - 144 + (d << 28) >> 30 != 0 || (192 & (o = e[c++])) != 128 || (192 & (l = e[c++])) != 128 ? (c--, Er()) : (d = (7 & d) << 18 | (63 & h) << 12 | (63 & o) << 6 | 63 & l, d -= 65536, i.push(55296 + (d >> 10 & 1023), 56320 + (1023 & d)))) : Er(), i.length >= 8192 && (g = Mv(g, i), i.length = 0);
    }
    c = Mv(g, i);
  }
  return c;
}
function tb(e) {
  const n = bi(e.g);
  return Py(e.g, n);
}
function Ju(e, n, i) {
  var o = bi(e.g);
  for (o = e.g.g + o; e.g.g < o; ) i.push(n(e.g));
}
var Dx = class {
  constructor(e, n, i, o) {
    if (Jv.length) {
      const l = Jv.pop();
      l.init(e, n, i, o), e = l;
    } else e = new class {
      constructor(l, c, d, h) {
        this.h = null, this.j = !1, this.g = this.l = this.m = 0, this.init(l, c, d, h);
      }
      init(l, c, d, { Y: h = !1, ea: g = !1 } = {}) {
        this.Y = h, this.ea = g, l && (l = lp(l, this.ea), this.h = l.buffer, this.j = l.g, this.m = c || 0, this.l = d !== void 0 ? this.m + d : this.h.length, this.g = this.m);
      }
      clear() {
        this.h = null, this.j = !1, this.g = this.l = this.m = 0, this.Y = !1;
      }
    }(e, n, i, o);
    this.g = e, this.m = this.g.g, this.h = this.l = -1, this.o(o);
  }
  o({ ha: e = !1 } = {}) {
    this.ha = e;
  }
}, zu = [];
function Wv(e) {
  return e ? /^\d+$/.test(e) ? (Ku(e), new f1(bt, Ut)) : null : Mx ||= new f1(0, 0);
}
var f1 = class {
  constructor(e, n) {
    this.h = e >>> 0, this.g = n >>> 0;
  }
};
let Mx;
function e3(e) {
  return e ? /^-?\d+$/.test(e) ? (Ku(e), new d1(bt, Ut)) : null : Ux ||= new d1(0, 0);
}
var d1 = class {
  constructor(e, n) {
    this.h = e >>> 0, this.g = n >>> 0;
  }
};
let Ux;
function Vo(e, n, i) {
  for (; i > 0 || n > 127; ) e.g.push(127 & n | 128), n = (n >>> 7 | i << 25) >>> 0, i >>>= 7;
  e.g.push(n);
}
function fs(e, n) {
  for (; n > 127; ) e.g.push(127 & n | 128), n >>>= 7;
  e.g.push(n);
}
function Wu(e, n) {
  if (n >= 0) fs(e, n);
  else {
    for (let i = 0; i < 9; i++) e.g.push(127 & n | 128), n >>= 7;
    e.g.push(1);
  }
}
function fp(e) {
  var n = bt;
  e.g.push(n >>> 0 & 255), e.g.push(n >>> 8 & 255), e.g.push(n >>> 16 & 255), e.g.push(n >>> 24 & 255);
}
function Qo(e, n) {
  n.length !== 0 && (e.l.push(n), e.h += n.length);
}
function ga(e, n, i) {
  fs(e.g, 8 * n + i);
}
function dp(e, n) {
  return ga(e, n, 2), n = e.g.end(), Qo(e, n), n.push(e.h), n;
}
function hp(e, n) {
  var i = n.pop();
  for (i = e.h + e.g.length() - i; i > 127; ) n.push(127 & i | 128), i >>>= 7, e.h++;
  n.push(i), e.h++;
}
function ef(e, n, i) {
  ga(e, n, 2), fs(e.g, i.length), Qo(e, e.g.end()), Qo(e, i);
}
function Nu(e, n, i, o) {
  i != null && (n = dp(e, n), o(i, e), hp(e, n));
}
function Fa() {
  const e = class {
    constructor() {
      throw Error();
    }
  };
  return Object.setPrototypeOf(e, e.prototype), e;
}
var pp = Fa(), nb = Fa(), gp = Fa(), mp = Fa(), ab = Fa(), ib = Fa(), jx = Fa(), tf = Fa(), rb = Fa(), ob = Fa();
function Za(e, n, i) {
  var o = e.v;
  In && In in o && (o = o[In]) && delete o[n.g], n.h ? n.j(e, n.h, n.g, i, n.l) : n.j(e, n.g, i, n.l);
}
var he = class {
  constructor(e, n) {
    this.v = By(e, n, void 0, 2048);
  }
  toJSON() {
    return Gy(this);
  }
  j() {
    var e = bT, n = this.v, i = e.g, o = In;
    if (is && o && n[o]?.[i] != null && Zo(nx, 3), n = e.g, Bv && In && Bv === void 0 && (o = (i = this.v)[In]) && (o = o.da)) try {
      o(i, n, Tx);
    } catch (l) {
      wy(l);
    }
    return e.h ? e.m(this, e.h, e.g, e.l) : e.m(this, e.g, e.defaultValue, e.l);
  }
  clone() {
    const e = this.v, n = 0 | e[de];
    return tp(this, e, n) ? W1(this, e, !0) : new this.constructor(ss(e, n, !1));
  }
};
he.prototype[Io] = qo, he.prototype.toString = function() {
  return this.v.toString();
};
var ds = class {
  constructor(e, n, i) {
    this.g = e, this.h = n, e = pp, this.l = !!e && i === e || !1;
  }
};
function nf(e, n) {
  return new ds(e, n, pp);
}
function sb(e, n, i, o, l) {
  Nu(e, i, fb(n, o), l);
}
const Hx = nf((function(e, n, i, o, l) {
  return e.h === 2 && (jl(e, op(n, o, i), l), !0);
}), sb), Vx = nf((function(e, n, i, o, l) {
  return e.h === 2 && (jl(e, op(n, o, i), l), !0);
}), sb);
var af = /* @__PURE__ */ Symbol(), rf = /* @__PURE__ */ Symbol(), h1 = /* @__PURE__ */ Symbol(), t3 = /* @__PURE__ */ Symbol(), n3 = /* @__PURE__ */ Symbol();
let lb, cb;
function Br(e, n, i, o) {
  var l = o[e];
  if (l) return l;
  (l = {}).qa = o, l.T = (function(b) {
    switch (typeof b) {
      case "boolean":
        return Rx ||= [0, void 0, !0];
      case "number":
        return b > 0 ? void 0 : b === 0 ? zx ||= [0, void 0] : [-b, void 0];
      case "string":
        return [0, b];
      case "object":
        return b;
    }
  })(o[0]);
  var c = o[1];
  let d = 1;
  c && c.constructor === Object && (l.ba = c, typeof (c = o[++d]) == "function" && (l.ma = !0, lb ??= c, cb ??= o[d + 1], c = o[d += 2]));
  const h = {};
  for (; c && Array.isArray(c) && c.length && typeof c[0] == "number" && c[0] > 0; ) {
    for (var g = 0; g < c.length; g++) h[c[g]] = c;
    c = o[++d];
  }
  for (g = 1; c !== void 0; ) {
    let b;
    typeof c == "number" && (g += c, c = o[++d]);
    var m = void 0;
    if (c instanceof ds ? b = c : (b = Hx, d--), b?.l) {
      c = o[++d], m = o;
      var y = d;
      typeof c == "function" && (c = c(), m[y] = c), m = c;
    }
    for (y = g + 1, typeof (c = o[++d]) == "number" && c < 0 && (y -= c, c = o[++d]); g < y; g++) {
      const A = h[g];
      m ? i(l, g, b, m, A) : n(l, g, b, A);
    }
  }
  return o[e] = l;
}
function ub(e) {
  return Array.isArray(e) ? e[0] instanceof ds ? e : [Vx, e] : [e, void 0];
}
function fb(e, n) {
  return e instanceof he ? e.v : Array.isArray(e) ? Or(e, n) : void 0;
}
function vp(e, n, i, o) {
  const l = i.g;
  e[n] = o ? (c, d, h) => l(c, d, h, o) : l;
}
function yp(e, n, i, o, l) {
  const c = i.g;
  let d, h;
  e[n] = (g, m, y) => c(g, m, y, h ||= Br(rf, vp, yp, o).T, d ||= bp(o), l);
}
function bp(e) {
  let n = e[h1];
  if (n != null) return n;
  const i = Br(rf, vp, yp, e);
  return n = i.ma ? (o, l) => lb(o, l, i) : (o, l) => {
    for (; eb(l) && l.h != 4; ) {
      var c = l.l, d = i[c];
      if (d == null) {
        var h = i.ba;
        h && (h = h[c]) && (h = Bx(h)) != null && (d = i[c] = h);
      }
      if (d == null || !d(l, o, c)) {
        if (d = (h = l).m, mu(h), h.ha) var g = void 0;
        else g = h.g.g - d, h.g.g = d, g = Py(h.g, g);
        d = void 0, h = o, g && ((d = h[In] ?? (h[In] = new u1()))[c] ?? (d[c] = [])).push(g);
      }
    }
    return (o = Qu(o)) && (o.da = i.qa[n3]), !0;
  }, e[h1] = n, e[n3] = Gx.bind(e), n;
}
function Gx(e, n, i, o) {
  var l = this[rf];
  const c = this[h1], d = Or(void 0, l.T), h = Qu(e);
  if (h) {
    var g = !1, m = l.ba;
    if (m) {
      if (l = (y, b, A) => {
        if (A.length !== 0) if (m[b]) for (const x of A) {
          y = Jy(x);
          try {
            g = !0, c(d, y);
          } finally {
            Wy(y);
          }
        }
        else o?.(e, b, A);
      }, n == null) ku(h, l);
      else if (h != null) {
        const y = h[n];
        y && l(h, n, y);
      }
      if (g) {
        let y = 0 | e[de];
        if (2 & y && 2048 & y && !i?.Ka) throw Error();
        const b = rs(y), A = (x, V) => {
          if (mi(e, x, b) != null) {
            if (i?.Qa === 1) return;
            throw Error();
          }
          V != null && (y = It(e, y, x, V, b)), delete h[x];
        };
        n == null ? zy(d, 0 | d[de], ((x, V) => {
          A(x, V);
        })) : A(n, mi(d, n, b));
      }
    }
  }
}
function Bx(e) {
  const n = (e = ub(e))[0].g;
  if (e = e[1]) {
    const i = bp(e), o = Br(rf, vp, yp, e).T;
    return (l, c, d) => n(l, c, d, o, i);
  }
  return n;
}
function of(e, n, i) {
  e[n] = i.h;
}
function sf(e, n, i, o) {
  let l, c;
  const d = i.h;
  e[n] = (h, g, m) => d(h, g, m, c ||= Br(af, of, sf, o).T, l ||= db(o));
}
function db(e) {
  let n = e[t3];
  if (!n) {
    const i = Br(af, of, sf, e);
    n = (o, l) => hb(o, l, i), e[t3] = n;
  }
  return n;
}
function hb(e, n, i) {
  zy(e, 0 | e[de], ((o, l) => {
    if (l != null) {
      var c = (function(d, h) {
        var g = d[h];
        if (g) return g;
        if ((g = d.ba) && (g = g[h])) {
          var m = (g = ub(g))[0].h;
          if (g = g[1]) {
            const y = db(g), b = Br(af, of, sf, g).T;
            g = d.ma ? cb(b, y) : (A, x, V) => m(A, x, V, b, y);
          } else g = m;
          return d[h] = g;
        }
      })(i, o);
      c ? c(n, l, o) : o < 500 || Zo(s1, 3);
    }
  })), (e = Qu(e)) && ku(e, ((o, l, c) => {
    for (Qo(n, n.g.end()), o = 0; o < c.length; o++) Qo(n, q1(c[o]) || new Uint8Array(0));
  }));
}
const Fx = qn(0);
function hs(e, n) {
  if (Array.isArray(n)) {
    var i = 0 | n[de];
    if (4 & i) return n;
    for (var o = 0, l = 0; o < n.length; o++) {
      const c = e(n[o]);
      c != null && (n[l++] = c);
    }
    return l < o && (n.length = l), (e = -1537 & (5 | i)) !== i && Yt(n, e), 2 & e && Object.freeze(n), n;
  }
}
function bn(e, n, i) {
  return new ds(e, n, i);
}
function ps(e, n, i) {
  return new ds(e, n, i);
}
function nn(e, n, i) {
  It(e, 0 | e[de], n, i, rs(0 | e[de]));
}
var Zx = nf((function(e, n, i, o, l) {
  if (e.h !== 2) return !1;
  if (e = Sa(e = jl(e, Or([void 0, void 0], o), l)), l = rs(o = 0 | n[de]), 2 & o) throw Error();
  let c = mi(n, i, l);
  if (c instanceof gi) (2 & c.J) != 0 ? (c = c.V(), c.push(e), It(n, o, i, c, l)) : c.Ma(e);
  else if (Array.isArray(c)) {
    var d = 0 | c[de];
    8192 & d || Yt(c, d |= 8192), 2 & d && (c = Iy(c), It(n, o, i, c, l)), c.push(e);
  } else It(n, o, i, xl([e]), l);
  return !0;
}), (function(e, n, i, o, l) {
  if (n instanceof gi) n.forEach(((c, d) => {
    Nu(e, i, Or([d, c], o), l);
  }));
  else if (Array.isArray(n)) {
    for (let c = 0; c < n.length; c++) {
      const d = n[c];
      Array.isArray(d) && Nu(e, i, Or(d, o), l);
    }
    xl(n);
  }
}));
function pb(e, n, i) {
  (n = Ua(n)) != null && (ga(e, i, 5), e = e.g, K1(n), fp(e));
}
function gb(e, n, i) {
  if (n = (function(o) {
    if (o == null) return o;
    const l = typeof o;
    if (l === "bigint") return String(Dl(64, o));
    if (Ml(o)) {
      if (l === "string") return Uy(o);
      if (l === "number") return P1(o);
    }
  })(n), n != null && (typeof n == "string" && e3(n), n != null))
    switch (ga(e, i, 0), typeof n) {
      case "number":
        e = e.g, Yo(n), Vo(e, bt, Ut);
        break;
      case "bigint":
        i = BigInt.asUintN(64, n), i = new d1(Number(i & BigInt(4294967295)), Number(i >> BigInt(32))), Vo(e.g, i.h, i.g);
        break;
      default:
        i = e3(n), Vo(e.g, i.h, i.g);
    }
}
function mb(e, n, i) {
  (n = os(n)) != null && n != null && (ga(e, i, 0), Wu(e.g, n));
}
function vb(e, n, i) {
  (n = Cy(n)) != null && (ga(e, i, 0), e.g.g.push(n ? 1 : 0));
}
function yb(e, n, i) {
  (n = un(n)) != null && ef(e, i, _y(n));
}
function bb(e, n, i, o, l) {
  Nu(e, i, fb(n, o), l);
}
function _b(e, n, i) {
  (n = n == null || typeof n == "string" || n instanceof Ha ? n : void 0) != null && ef(e, i, lp(n, !0).buffer);
}
function wb(e, n, i) {
  return (e.h === 5 || e.h === 2) && (n = us(n, 0 | n[de], i), e.h == 2 ? Ju(e, Ru, n) : n.push(Ru(e.g)), !0);
}
var jt = bn((function(e, n, i) {
  return e.h === 5 && (nn(n, i, Ru(e.g)), !0);
}), pb, tf), Ix = ps(wb, (function(e, n, i) {
  if ((n = hs(Ua, n)) != null) for (let d = 0; d < n.length; d++) {
    var o = e, l = i, c = n[d];
    c != null && (ga(o, l, 5), o = o.g, K1(c), fp(o));
  }
}), tf), _p = ps(wb, (function(e, n, i) {
  if ((n = hs(Ua, n)) != null && n.length) {
    ga(e, i, 2), fs(e.g, 4 * n.length);
    for (let o = 0; o < n.length; o++) i = e.g, K1(n[o]), fp(i);
  }
}), tf), qx = bn((function(e, n, i) {
  return e.h === 5 && (nn(n, i, (e = Ru(e.g)) === 0 ? void 0 : e), !0);
}), pb, tf), Ji = bn((function(e, n, i) {
  return F1 ? (e.h !== 0 ? e = !1 : (nn(n, i, Xo(e.g, Ly)), e = !0), e) : e.h === 0 && (nn(n, i, Xo(e.g, X1)), !0);
}), gb, ib), qh = bn((function(e, n, i) {
  return F1 ? (e.h !== 0 ? n = !1 : (nn(n, i, (e = Xo(e.g, Ly)) === Fx ? void 0 : e), n = !0), n) : e.h === 0 && (nn(n, i, (e = Xo(e.g, X1)) === 0 ? void 0 : e), !0);
}), gb, ib), Yx = bn((function(e, n, i) {
  return F1 ? (e.h !== 0 ? e = !1 : (nn(n, i, Xo(e.g, px)), e = !0), e) : e.h === 0 && (nn(n, i, Xo(e.g, c1)), !0);
}), (function(e, n, i) {
  if (n = (function(o) {
    if (o == null) return o;
    var l = typeof o;
    if (l === "bigint") return String(gx(64, o));
    if (Ml(o)) {
      if (l === "string") return l = Ko(Number(o)), jr(l) && l >= 0 ? o = String(l) : ((l = o.indexOf(".")) !== -1 && (o = o.substring(0, l)), (l = o[0] !== "-" && ((l = o.length) < 20 || l === 20 && o <= "18446744073709551615")) || (Ku(o), o = Tl(bt, Ut))), o;
      if (l === "number") return (o = Ko(o)) >= 0 && jr(o) || (Yo(o), o = c1(bt, Ut)), o;
    }
  })(n), n != null && (typeof n == "string" && Wv(n), n != null))
    switch (ga(e, i, 0), typeof n) {
      case "number":
        e = e.g, Yo(n), Vo(e, bt, Ut);
        break;
      case "bigint":
        i = BigInt.asUintN(64, n), i = new f1(Number(i & BigInt(4294967295)), Number(i >> BigInt(32))), Vo(e.g, i.h, i.g);
        break;
      default:
        i = Wv(n), Vo(e.g, i.h, i.g);
    }
}), jx), tn = bn((function(e, n, i) {
  return e.h === 0 && (nn(n, i, Pi(e.g)), !0);
}), mb, mp), Hl = ps((function(e, n, i) {
  return (e.h === 0 || e.h === 2) && (n = us(n, 0 | n[de], i), e.h == 2 ? Ju(e, Pi, n) : n.push(Pi(e.g)), !0);
}), (function(e, n, i) {
  if ((n = hs(os, n)) != null && n.length) {
    i = dp(e, i);
    for (let o = 0; o < n.length; o++) Wu(e.g, n[o]);
    hp(e, i);
  }
}), mp), Uo = bn((function(e, n, i) {
  return e.h === 0 && (nn(n, i, (e = Pi(e.g)) === 0 ? void 0 : e), !0);
}), mb, mp), zt = bn((function(e, n, i) {
  return e.h === 0 && (nn(n, i, cp(e.g)), !0);
}), vb, nb), Lr = bn((function(e, n, i) {
  return e.h === 0 && (nn(n, i, (e = cp(e.g)) === !1 ? void 0 : e), !0);
}), vb, nb), hn = ps((function(e, n, i) {
  return e.h === 2 && (e = up(e), us(n, 0 | n[de], i).push(e), !0);
}), (function(e, n, i) {
  if ((n = hs(un, n)) != null) for (let d = 0; d < n.length; d++) {
    var o = e, l = i, c = n[d];
    c != null && ef(o, l, _y(c));
  }
}), gp), Qi = bn((function(e, n, i) {
  return e.h === 2 && (nn(n, i, (e = up(e)) === "" ? void 0 : e), !0);
}), yb, gp), ut = bn((function(e, n, i) {
  return e.h === 2 && (nn(n, i, up(e)), !0);
}), yb, gp), en = (function(e, n, i = pp) {
  return new ds(e, n, i);
})((function(e, n, i, o, l) {
  return e.h === 2 && (o = Or(void 0, o), us(n, 0 | n[de], i).push(o), jl(e, o, l), !0);
}), (function(e, n, i, o, l) {
  if (Array.isArray(n)) {
    for (let c = 0; c < n.length; c++) bb(e, n[c], i, o, l);
    1 & (e = 0 | n[de]) || Yt(n, 1 | e);
  }
})), Ot = nf((function(e, n, i, o, l, c) {
  if (e.h !== 2) return !1;
  let d = 0 | n[de];
  return qy(n, d, c, i, rs(d)), jl(e, n = op(n, o, i), l), !0;
}), bb), Ab = bn((function(e, n, i) {
  return e.h === 2 && (nn(n, i, tb(e)), !0);
}), _b, rb), Kx = ps((function(e, n, i) {
  return (e.h === 0 || e.h === 2) && (n = us(n, 0 | n[de], i), e.h == 2 ? Ju(e, bi, n) : n.push(bi(e.g)), !0);
}), (function(e, n, i) {
  if ((n = hs(Dy, n)) != null) for (let d = 0; d < n.length; d++) {
    var o = e, l = i, c = n[d];
    c != null && (ga(o, l, 0), fs(o.g, c));
  }
}), ab), Xx = bn((function(e, n, i) {
  return e.h === 0 && (nn(n, i, (e = bi(e.g)) === 0 ? void 0 : e), !0);
}), (function(e, n, i) {
  (n = Dy(n)) != null && n != null && (ga(e, i, 0), fs(e.g, n));
}), ab), Xn = bn((function(e, n, i) {
  return e.h === 0 && (nn(n, i, Pi(e.g)), !0);
}), (function(e, n, i) {
  (n = os(n)) != null && (n = parseInt(n, 10), ga(e, i, 0), Wu(e.g, n));
}), ob);
class Qx {
  constructor(n, i) {
    var o = $n;
    this.g = n, this.h = i, this.m = Ye, this.j = Ae, this.defaultValue = void 0, this.l = o.Oa != null ? Ny : void 0;
  }
  register() {
    Iu(this);
  }
}
function Ia(e, n) {
  return new Qx(e, n);
}
function tr(e, n) {
  return (i, o) => {
    {
      const c = { ea: !0 };
      o && Object.assign(c, o), i = Jy(i, void 0, void 0, c);
      try {
        const d = new e(), h = d.v;
        bp(n)(h, i);
        var l = d;
      } finally {
        Wy(i);
      }
    }
    return l;
  };
}
function lf(e) {
  return function() {
    const n = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const d = this.g;
            return this.g = [], d;
          }
        }();
      }
    }();
    hb(this.v, n, Br(af, of, sf, e)), Qo(n, n.g.end());
    const i = new Uint8Array(n.h), o = n.l, l = o.length;
    let c = 0;
    for (let d = 0; d < l; d++) {
      const h = o[d];
      i.set(h, c), c += h.length;
    }
    return n.l = [i], i;
  };
}
var a3 = class extends he {
  constructor(e) {
    super(e);
  }
}, i3 = [0, Qi, bn((function(e, n, i) {
  return e.h === 2 && (nn(n, i, (e = tb(e)) === Mr() ? void 0 : e), !0);
}), (function(e, n, i) {
  if (n != null) {
    if (n instanceof he) {
      const o = n.Ra;
      return void (o ? (n = o(n), n != null && ef(e, i, lp(n, !0).buffer)) : Zo(s1, 3));
    }
    if (Array.isArray(n)) return void Zo(s1, 3);
  }
  _b(e, n, i);
}), rb)];
let Yh, r3 = globalThis.trustedTypes;
function o3(e) {
  var n;
  return Yh === void 0 && (Yh = (function() {
    let i = null;
    if (!r3) return i;
    try {
      const o = (l) => l;
      i = r3.createPolicy("goog#html", { createHTML: o, createScript: o, createScriptURL: o });
    } catch {
    }
    return i;
  })()), e = (n = Yh) ? n.createScriptURL(e) : e, new class {
    constructor(i) {
      this.g = i;
    }
    toString() {
      return this.g + "";
    }
  }(e);
}
function $x(e, ...n) {
  if (n.length === 0) return o3(e[0]);
  let i = e[0];
  for (let o = 0; o < n.length; o++) i += encodeURIComponent(n[o]) + e[o + 1];
  return o3(i);
}
var Eb = [0, tn, Xn, zt, -1, Hl, Xn, -1, zt], Px = class extends he {
  constructor(e) {
    super(e);
  }
}, Sb = [0, zt, ut, zt, Xn, -1, ps((function(e, n, i) {
  return (e.h === 0 || e.h === 2) && (n = us(n, 0 | n[de], i), e.h == 2 ? Ju(e, Cx, n) : n.push(Pi(e.g)), !0);
}), (function(e, n, i) {
  if ((n = hs(os, n)) != null && n.length) {
    i = dp(e, i);
    for (let o = 0; o < n.length; o++) Wu(e.g, n[o]);
    hp(e, i);
  }
}), ob), ut, -1, [0, zt, -1], Xn, zt, -1], xb = [0, 3, zt, -1, 2, [0, tn], [0, Xn, zt], [0, ut, -1], [0]], Tb = [0, ut, -2], s3 = class extends he {
  constructor(e) {
    super(e);
  }
}, kb = [0], Ob = [0, tn, zt, 1, zt, -4], $n = class extends he {
  constructor(e) {
    super(e, 2);
  }
}, qt = {};
qt[336783863] = [0, ut, zt, -1, tn, [0, [1, 2, 3, 4, 5, 6, 7, 8, 9], Ot, kb, Ot, Sb, Ot, Tb, Ot, Ob, Ot, Eb, Ot, [0, ut, -2], Ot, [0, ut, Xn], Ot, xb, Ot, [0, Xn, -1, zt]], [0, ut], zt, [0, [1, 3], [2, 4], Ot, [0, Hl], -1, Ot, [0, hn], -1, en, [0, ut, -1]], ut];
var l3 = [0, qh, -1, Lr, -3, qh, Hl, Qi, Uo, qh, -1, Lr, Uo, Lr, -2, Qi];
function mt(e, n) {
  Pu(e, 3, n);
}
function Fe(e, n) {
  Pu(e, 4, n);
}
var Ln = class extends he {
  constructor(e) {
    super(e, 500);
  }
  o(e) {
    return Ae(this, 0, 7, e);
  }
}, bl = [-1, {}], c3 = [0, ut, 1, bl], u3 = [0, ut, hn, bl];
function ma(e, n) {
  sp(e, 1, Ln, n);
}
function _t(e, n) {
  Pu(e, 10, n);
}
function Pe(e, n) {
  Pu(e, 15, n);
}
var Pn = class extends he {
  constructor(e) {
    super(e, 500);
  }
  o(e) {
    return Ae(this, 0, 1001, e);
  }
}, Rb = [-500, en, [-500, Qi, -1, hn, -3, [-2, qt, zt], en, i3, Uo, -1, c3, u3, en, [0, Qi, Lr], Qi, l3, Uo, hn, 987, hn], 4, en, [-500, ut, -1, [-1, {}], 998, ut], en, [-500, ut, hn, -1, [-2, {}, zt], 997, hn, -1], Uo, en, [-500, ut, hn, bl, 998, hn], hn, Uo, c3, u3, en, [0, Qi, -1, bl], hn, -2, l3, Qi, -1, Lr, [0, Lr, Xx], 978, bl, en, i3];
Pn.prototype.g = lf(Rb);
var Jx = tr(Pn, Rb), Wx = class extends he {
  constructor(e) {
    super(e);
  }
}, zb = class extends he {
  constructor(e) {
    super(e);
  }
  g() {
    return vi(this, Wx, 1);
  }
}, Nb = [0, en, [0, tn, jt, ut, -1]], cf = tr(zb, Nb), eT = class extends he {
  constructor(e) {
    super(e);
  }
}, tT = class extends he {
  constructor(e) {
    super(e);
  }
}, Kh = class extends he {
  constructor(e) {
    super(e);
  }
  l() {
    return Ye(this, eT, 2);
  }
  g() {
    return vi(this, tT, 5);
  }
}, Lb = tr(class extends he {
  constructor(e) {
    super(e);
  }
}, [0, hn, Hl, _p, [0, Xn, [0, tn, -3], [0, jt, -3], [0, tn, -1, [0, en, [0, tn, -2]]], en, [0, jt, -1, ut, jt]], ut, -1, Ji, en, [0, tn, jt], hn, Ji]), Cb = class extends he {
  constructor(e) {
    super(e);
  }
}, Go = tr(class extends he {
  constructor(e) {
    super(e);
  }
}, [0, en, [0, jt, -4]]), Db = class extends he {
  constructor(e) {
    super(e);
  }
}, Vl = tr(class extends he {
  constructor(e) {
    super(e);
  }
}, [0, en, [0, jt, -4]]), nT = class extends he {
  constructor(e) {
    super(e);
  }
}, aT = [0, tn, -1, _p, Xn], Mb = class extends he {
  constructor(e) {
    super(e);
  }
};
Mb.prototype.g = lf([0, jt, -4, Ji]);
var iT = class extends he {
  constructor(e) {
    super(e);
  }
}, rT = tr(class extends he {
  constructor(e) {
    super(e);
  }
}, [0, en, [0, 1, tn, ut, Nb], Ji]), f3 = class extends he {
  constructor(e) {
    super(e);
  }
}, oT = class extends he {
  constructor(e) {
    super(e);
  }
  na() {
    const e = gt(this, 1, void 0, void 0, Zy);
    return e ?? Mr();
  }
}, sT = class extends he {
  constructor(e) {
    super(e);
  }
}, Ub = [1, 2], lT = tr(class extends he {
  constructor(e) {
    super(e);
  }
}, [0, en, [0, Ub, Ot, [0, _p], Ot, [0, Ab], tn, ut], Ji]), wp = class extends he {
  constructor(e) {
    super(e);
  }
}, jb = [0, ut, tn, jt, hn, -1], d3 = class extends he {
  constructor(e) {
    super(e);
  }
}, cT = [0, zt, -1], h3 = class extends he {
  constructor(e) {
    super(e);
  }
}, vu = [1, 2, 3, 4, 5, 6], Lu = class extends he {
  constructor(e) {
    super(e);
  }
  g() {
    return gt(this, 1, void 0, void 0, Zy) != null;
  }
  l() {
    return un(gt(this, 2)) != null;
  }
}, xt = class extends he {
  constructor(e) {
    super(e);
  }
  g() {
    return Cy(gt(this, 2)) ?? !1;
  }
}, Hb = [0, Ab, ut, [0, tn, Ji, -1], [0, Yx, Ji]], Vt = [0, Hb, zt, [0, vu, Ot, Ob, Ot, Sb, Ot, Eb, Ot, kb, Ot, Tb, Ot, xb], Xn], uf = class extends he {
  constructor(e) {
    super(e);
  }
}, Ap = [0, Vt, jt, -1, tn], uT = Ia(502141897, uf);
qt[502141897] = Ap;
var fT = tr(class extends he {
  constructor(e) {
    super(e);
  }
}, [0, [0, Xn, -1, Ix, Kx], aT]), Vb = class extends he {
  constructor(e) {
    super(e);
  }
}, Gb = class extends he {
  constructor(e) {
    super(e);
  }
}, p1 = [0, Vt, jt, [0, Vt], zt], dT = Ia(508968150, Gb);
qt[508968150] = [0, Vt, Ap, p1, jt, [0, [0, Hb]]], qt[508968149] = p1;
var Co = class extends he {
  constructor(e) {
    super(e);
  }
  l() {
    return Ye(this, wp, 2);
  }
  g() {
    ot(this, 2);
  }
}, Bb = [0, Vt, jb];
qt[478825465] = Bb;
var hT = class extends he {
  constructor(e) {
    super(e);
  }
}, Fb = class extends he {
  constructor(e) {
    super(e);
  }
}, Ep = class extends he {
  constructor(e) {
    super(e);
  }
}, Sp = class extends he {
  constructor(e) {
    super(e);
  }
}, Zb = class extends he {
  constructor(e) {
    super(e);
  }
}, p3 = [0, Vt, [0, Vt], Bb, -1], Ib = [0, Vt, jt, tn], xp = [0, Vt, jt], qb = [0, Vt, Ib, xp, jt], pT = Ia(479097054, Zb);
qt[479097054] = [0, Vt, qb, p3], qt[463370452] = p3, qt[464864288] = Ib;
var gT = Ia(462713202, Sp);
qt[462713202] = qb, qt[474472470] = xp;
var mT = class extends he {
  constructor(e) {
    super(e);
  }
}, Yb = class extends he {
  constructor(e) {
    super(e);
  }
}, Kb = class extends he {
  constructor(e) {
    super(e);
  }
}, Xb = class extends he {
  constructor(e) {
    super(e);
  }
}, Tp = [0, Vt, jt, -1, tn], g1 = [0, Vt, jt, zt];
Xb.prototype.g = lf([0, Vt, xp, [0, Vt], Ap, p1, Tp, g1]);
var Qb = class extends he {
  constructor(e) {
    super(e);
  }
}, vT = Ia(456383383, Qb);
qt[456383383] = [0, Vt, jb];
var $b = class extends he {
  constructor(e) {
    super(e);
  }
}, yT = Ia(476348187, $b);
qt[476348187] = [0, Vt, cT];
var Pb = class extends he {
  constructor(e) {
    super(e);
  }
}, g3 = class extends he {
  constructor(e) {
    super(e);
  }
}, Jb = [0, Xn, -1], bT = Ia(458105876, class extends he {
  constructor(e) {
    super(e);
  }
  g() {
    let e;
    var n = this.v;
    const i = 0 | n[de];
    return e = Yn(this, i), n = (function(o, l, c, d) {
      var h = g3;
      !d && ls(o) && (c = 0 | (l = o.v)[de]);
      var g = mi(l, 2);
      if (o = !1, g == null) {
        if (d) return Qv();
        g = [];
      } else if (g.constructor === gi) {
        if (!(2 & g.J) || d) return g;
        g = g.V();
      } else Array.isArray(g) ? o = !!(2 & (0 | g[de])) : g = [];
      if (d) {
        if (!g.length) return Qv();
        o || (o = !0, Cl(g));
      } else o && (o = !1, xl(g), g = Iy(g));
      return !o && 32 & c && Ll(g, 32), c = It(l, c, 2, d = new gi(g, h, bx, void 0)), o || Gr(l, c), d;
    })(this, n, i, e), !e && g3 && (n.ra = !0), n;
  }
});
qt[458105876] = [0, Jb, Zx, [!0, Ji, [0, ut, -1, hn]], [0, Hl, zt, Xn]];
var kp = class extends he {
  constructor(e) {
    super(e);
  }
}, Wb = Ia(458105758, kp);
qt[458105758] = [0, Vt, ut, Jb];
var Xh = class extends he {
  constructor(e) {
    super(e);
  }
}, m3 = [0, qx, -1, Lr], _T = class extends he {
  constructor(e) {
    super(e);
  }
}, e_ = class extends he {
  constructor(e) {
    super(e);
  }
}, m1 = [1, 2];
e_.prototype.g = lf([0, m1, Ot, m3, Ot, [0, en, m3]]);
var t_ = class extends he {
  constructor(e) {
    super(e);
  }
}, wT = Ia(443442058, t_);
qt[443442058] = [0, Vt, ut, tn, jt, hn, -1, zt, jt], qt[514774813] = Tp;
var n_ = class extends he {
  constructor(e) {
    super(e);
  }
}, AT = Ia(516587230, n_);
function v1(e, n) {
  return n = n ? n.clone() : new wp(), e.displayNamesLocale !== void 0 ? ot(n, 1, Ul(e.displayNamesLocale)) : e.displayNamesLocale === void 0 && ot(n, 1), e.maxResults !== void 0 ? yi(n, 2, e.maxResults) : "maxResults" in e && ot(n, 2), e.scoreThreshold !== void 0 ? ve(n, 3, e.scoreThreshold) : "scoreThreshold" in e && ot(n, 3), e.categoryAllowlist !== void 0 ? Ou(n, 4, e.categoryAllowlist) : "categoryAllowlist" in e && ot(n, 4), e.categoryDenylist !== void 0 ? Ou(n, 5, e.categoryDenylist) : "categoryDenylist" in e && ot(n, 5), n;
}
function a_(e) {
  const n = Number(e);
  return Number.isSafeInteger(n) ? n : String(e);
}
function Op(e, n = -1, i = "") {
  return { categories: e.map(((o) => ({ index: ha(o, 1) ?? 0 ?? -1, score: Rt(o, 2) ?? 0, categoryName: un(gt(o, 3)) ?? "" ?? "", displayName: un(gt(o, 4)) ?? "" ?? "" }))), headIndex: n, headName: i };
}
function ET(e) {
  const n = { classifications: vi(e, iT, 1).map(((i) => Op(Ye(i, zb, 4)?.g() ?? [], ha(i, 2) ?? 0, un(gt(i, 3)) ?? ""))) };
  return (function(i) {
    return yx(Z1 ? gt(i, 2, void 0, void 0, Tu) : gt(i, 2));
  })(e) != null && (n.timestampMs = a_(Qy(e))), n;
}
function i_(e) {
  var n = kr(e, 3, Ua, Tr()), i = kr(e, 2, os, Tr()), o = kr(e, 1, un, Tr()), l = kr(e, 9, un, Tr());
  const c = { categories: [], keypoints: [] };
  for (let d = 0; d < n.length; d++) c.categories.push({ score: n[d], index: i[d] ?? -1, categoryName: o[d] ?? "", displayName: l[d] ?? "" });
  if ((n = Ye(e, Kh, 4)?.l()) && (c.boundingBox = { originX: ha(n, 1, Yi) ?? 0, originY: ha(n, 2, Yi) ?? 0, width: ha(n, 3, Yi) ?? 0, height: ha(n, 4, Yi) ?? 0, angle: 0 }), Ye(e, Kh, 4)?.g().length) for (const d of Ye(e, Kh, 4).g()) c.keypoints.push({ x: gt(d, 1, void 0, Yi, Ua) ?? 0, y: gt(d, 2, void 0, Yi, Ua) ?? 0, score: gt(d, 4, void 0, Yi, Ua) ?? 0, label: un(gt(d, 3, void 0, Yi)) ?? "" });
  return c;
}
function ff(e) {
  const n = [];
  for (const i of vi(e, Db, 1)) n.push({ x: Rt(i, 1) ?? 0, y: Rt(i, 2) ?? 0, z: Rt(i, 3) ?? 0, visibility: Rt(i, 4) ?? 0 });
  return n;
}
function _l(e) {
  const n = [];
  for (const i of vi(e, Cb, 1)) n.push({ x: Rt(i, 1) ?? 0, y: Rt(i, 2) ?? 0, z: Rt(i, 3) ?? 0, visibility: Rt(i, 4) ?? 0 });
  return n;
}
function v3(e) {
  return Array.from(e, ((n) => n > 127 ? n - 256 : n));
}
function y3(e, n) {
  if (e.length !== n.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${n.length}).`);
  let i = 0, o = 0, l = 0;
  for (let c = 0; c < e.length; c++) i += e[c] * n[c], o += e[c] * e[c], l += n[c] * n[c];
  if (o <= 0 || l <= 0) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return i / Math.sqrt(o * l);
}
let hu;
qt[516587230] = [0, Vt, Tp, g1, jt], qt[518928384] = g1;
const ST = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
async function r_() {
  if (hu === void 0) try {
    await WebAssembly.instantiate(ST), hu = !0;
  } catch {
    hu = !1;
  }
  return hu;
}
async function fl(e, n = $x``) {
  const i = await r_() ? "wasm_internal" : "wasm_nosimd_internal";
  return { wasmLoaderPath: `${n}/${e}_${i}.js`, wasmBinaryPath: `${n}/${e}_${i}.wasm` };
}
var Sr = class {
};
function o_() {
  var e = navigator;
  return typeof OffscreenCanvas < "u" && (!(function(n = navigator) {
    return (n = n.userAgent).includes("Safari") && !n.includes("Chrome");
  })(e) || !!((e = e.userAgent.match(/Version\/([\d]+).*Safari/)) && e.length >= 1 && Number(e[1]) >= 17));
}
async function b3(e) {
  if (typeof importScripts != "function") {
    const n = document.createElement("script");
    return n.src = e.toString(), n.crossOrigin = "anonymous", new Promise(((i, o) => {
      n.addEventListener("load", (() => {
        i();
      }), !1), n.addEventListener("error", ((l) => {
        o(l);
      }), !1), document.body.appendChild(n);
    }));
  }
  try {
    importScripts(e.toString());
  } catch (n) {
    if (!(n instanceof TypeError)) throw n;
    await self.import(e.toString());
  }
}
function s_(e) {
  return e.videoWidth !== void 0 ? [e.videoWidth, e.videoHeight] : e.naturalWidth !== void 0 ? [e.naturalWidth, e.naturalHeight] : e.displayWidth !== void 0 ? [e.displayWidth, e.displayHeight] : [e.width, e.height];
}
function ge(e, n, i) {
  e.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), i(n = e.i.stringToNewUTF8(n)), e.i._free(n);
}
function _3(e, n, i) {
  if (!e.i.canvas) throw Error("No OpenGL canvas configured.");
  if (i ? e.i._bindTextureToStream(i) : e.i._bindTextureToCanvas(), !(i = e.i.canvas.getContext("webgl2") || e.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  e.i.gpuOriginForWebTexturesIsBottomLeft && i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !0), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, n), e.i.gpuOriginForWebTexturesIsBottomLeft && i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1);
  const [o, l] = s_(n);
  return !e.l || o === e.i.canvas.width && l === e.i.canvas.height || (e.i.canvas.width = o, e.i.canvas.height = l), [o, l];
}
function w3(e, n, i) {
  e.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const o = new Uint32Array(n.length);
  for (let l = 0; l < n.length; l++) o[l] = e.i.stringToNewUTF8(n[l]);
  n = e.i._malloc(4 * o.length), e.i.HEAPU32.set(o, n >> 2), i(n);
  for (const l of o) e.i._free(l);
  e.i._free(n);
}
function Ca(e, n, i) {
  e.i.simpleListeners = e.i.simpleListeners || {}, e.i.simpleListeners[n] = i;
}
function Ki(e, n, i) {
  let o = [];
  e.i.simpleListeners = e.i.simpleListeners || {}, e.i.simpleListeners[n] = (l, c, d) => {
    c ? (i(o, d), o = []) : o.push(l);
  };
}
Sr.forVisionTasks = function(e) {
  return fl("vision", e);
}, Sr.forTextTasks = function(e) {
  return fl("text", e);
}, Sr.forGenAiExperimentalTasks = function(e) {
  return fl("genai_experimental", e);
}, Sr.forGenAiTasks = function(e) {
  return fl("genai", e);
}, Sr.forAudioTasks = function(e) {
  return fl("audio", e);
}, Sr.isSimdSupported = function() {
  return r_();
};
async function xT(e, n, i, o) {
  return e = await (async (l, c, d, h, g) => {
    if (c && await b3(c), !self.ModuleFactory || d && (await b3(d), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
    return self.Module && g && ((c = self.Module).locateFile = g.locateFile, g.mainScriptUrlOrBlob && (c.mainScriptUrlOrBlob = g.mainScriptUrlOrBlob)), g = await self.ModuleFactory(self.Module || g), self.ModuleFactory = self.Module = void 0, new l(g, h);
  })(e, i.wasmLoaderPath, i.assetLoaderPath, n, { locateFile: (l) => l.endsWith(".wasm") ? i.wasmBinaryPath.toString() : i.assetBinaryPath && l.endsWith(".data") ? i.assetBinaryPath.toString() : l }), await e.o(o), e;
}
function Qh(e, n) {
  const i = Ye(e.baseOptions, Lu, 1) || new Lu();
  typeof n == "string" ? (ot(i, 2, Ul(n)), ot(i, 1)) : n instanceof Uint8Array && (ot(i, 1, Y1(n, !1)), ot(i, 2)), Ae(e.baseOptions, 0, 1, i);
}
function A3(e) {
  try {
    const n = e.H.length;
    if (n === 1) throw Error(e.H[0].message);
    if (n > 1) throw Error("Encountered multiple errors: " + e.H.map(((i) => i.message)).join(", "));
  } finally {
    e.H = [];
  }
}
function le(e, n) {
  e.C = Math.max(e.C, n);
}
function df(e, n) {
  e.B = new Ln(), Kn(e.B, 2, "PassThroughCalculator"), mt(e.B, "free_memory"), Fe(e.B, "free_memory_unused_out"), _t(n, "free_memory"), ma(n, e.B);
}
function $o(e, n) {
  mt(e.B, n), Fe(e.B, n + "_unused_out");
}
function hf(e) {
  e.g.addBoolToStream(!0, "free_memory", e.C);
}
var y1 = class {
  constructor(e) {
    this.g = e, this.H = [], this.C = 0, this.g.setAutoRenderToScreen(!1);
  }
  l(e, n = !0) {
    if (n) {
      const i = e.baseOptions || {};
      if (e.baseOptions?.modelAssetBuffer && e.baseOptions?.modelAssetPath) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!(Ye(this.baseOptions, Lu, 1)?.g() || Ye(this.baseOptions, Lu, 1)?.l() || e.baseOptions?.modelAssetBuffer || e.baseOptions?.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if ((function(o, l) {
        let c = Ye(o.baseOptions, h3, 3);
        if (!c) {
          var d = c = new h3(), h = new s3();
          yl(d, 4, vu, h);
        }
        "delegate" in l && (l.delegate === "GPU" ? (l = c, d = new Px(), yl(l, 2, vu, d)) : (l = c, d = new s3(), yl(l, 4, vu, d))), Ae(o.baseOptions, 0, 3, c);
      })(this, i), i.modelAssetPath) return fetch(i.modelAssetPath.toString()).then(((o) => {
        if (o.ok) return o.arrayBuffer();
        throw Error(`Failed to fetch model: ${i.modelAssetPath} (${o.status})`);
      })).then(((o) => {
        try {
          this.g.i.FS_unlink("/model.dat");
        } catch {
        }
        this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(o), !0, !1, !1), Qh(this, "/model.dat"), this.m(), this.L();
      }));
      if (i.modelAssetBuffer instanceof Uint8Array) Qh(this, i.modelAssetBuffer);
      else if (i.modelAssetBuffer) return (async function(o) {
        const l = [];
        for (var c = 0; ; ) {
          const { done: d, value: h } = await o.read();
          if (d) break;
          l.push(h), c += h.length;
        }
        if (l.length === 0) return new Uint8Array(0);
        if (l.length === 1) return l[0];
        o = new Uint8Array(c), c = 0;
        for (const d of l) o.set(d, c), c += d.length;
        return o;
      })(i.modelAssetBuffer).then(((o) => {
        Qh(this, o), this.m(), this.L();
      }));
    }
    return this.m(), this.L(), Promise.resolve();
  }
  L() {
  }
  ca() {
    let e;
    if (this.g.ca(((n) => {
      e = Jx(n);
    })), !e) throw Error("Failed to retrieve CalculatorGraphConfig");
    return e;
  }
  setGraph(e, n) {
    this.g.attachErrorListener(((i, o) => {
      this.H.push(Error(o));
    })), this.g.Ja(), this.g.setGraph(e, n), this.B = void 0, A3(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), A3(this);
  }
  close() {
    this.B = void 0, this.g.closeGraph();
  }
};
function $i(e, n) {
  if (!e) throw Error(`Unable to obtain required WebGL resource: ${n}`);
  return e;
}
y1.prototype.close = y1.prototype.close;
class TT {
  constructor(n, i, o, l) {
    this.g = n, this.h = i, this.m = o, this.l = l;
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
  }
}
function E3(e, n, i) {
  const o = e.g;
  if (i = $i(o.createShader(i), "Failed to create WebGL shader"), o.shaderSource(i, n), o.compileShader(i), !o.getShaderParameter(i, o.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${o.getShaderInfoLog(i)}`);
  return o.attachShader(e.h, i), i;
}
function S3(e, n) {
  const i = e.g, o = $i(i.createVertexArray(), "Failed to create vertex array");
  i.bindVertexArray(o);
  const l = $i(i.createBuffer(), "Failed to create buffer");
  i.bindBuffer(i.ARRAY_BUFFER, l), i.enableVertexAttribArray(e.O), i.vertexAttribPointer(e.O, 2, i.FLOAT, !1, 0, 0), i.bufferData(i.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), i.STATIC_DRAW);
  const c = $i(i.createBuffer(), "Failed to create buffer");
  return i.bindBuffer(i.ARRAY_BUFFER, c), i.enableVertexAttribArray(e.L), i.vertexAttribPointer(e.L, 2, i.FLOAT, !1, 0, 0), i.bufferData(i.ARRAY_BUFFER, new Float32Array(n ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), i.STATIC_DRAW), i.bindBuffer(i.ARRAY_BUFFER, null), i.bindVertexArray(null), new TT(i, o, l, c);
}
function Rp(e, n) {
  if (e.g) {
    if (n !== e.g) throw Error("Cannot change GL context once initialized");
  } else e.g = n;
}
function kT(e, n, i, o) {
  return Rp(e, n), e.h || (e.m(), e.D()), i ? (e.u || (e.u = S3(e, !0)), i = e.u) : (e.A || (e.A = S3(e, !1)), i = e.A), n.useProgram(e.h), i.bind(), e.l(), e = o(), i.g.bindVertexArray(null), e;
}
function l_(e, n, i) {
  return Rp(e, n), e = $i(n.createTexture(), "Failed to create texture"), n.bindTexture(n.TEXTURE_2D, e), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, i ?? n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, i ?? n.LINEAR), n.bindTexture(n.TEXTURE_2D, null), e;
}
function c_(e, n, i) {
  Rp(e, n), e.B || (e.B = $i(n.createFramebuffer(), "Failed to create framebuffe.")), n.bindFramebuffer(n.FRAMEBUFFER, e.B), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, i, 0);
}
function OT(e) {
  e.g?.bindFramebuffer(e.g.FRAMEBUFFER, null);
}
var u_ = class {
  H() {
    return `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `;
  }
  m() {
    const e = this.g;
    if (this.h = $i(e.createProgram(), "Failed to create WebGL program"), this.X = E3(this, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, e.VERTEX_SHADER), this.W = E3(this, this.H(), e.FRAGMENT_SHADER), e.linkProgram(this.h), !e.getProgramParameter(this.h, e.LINK_STATUS)) throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);
    this.O = e.getAttribLocation(this.h, "aVertex"), this.L = e.getAttribLocation(this.h, "aTex");
  }
  D() {
  }
  l() {
  }
  close() {
    if (this.h) {
      const e = this.g;
      e.deleteProgram(this.h), e.deleteShader(this.X), e.deleteShader(this.W);
    }
    this.B && this.g.deleteFramebuffer(this.B), this.A && this.A.close(), this.u && this.u.close();
  }
};
function hi(e, n) {
  switch (n) {
    case 0:
      return e.g.find(((i) => i instanceof Uint8Array));
    case 1:
      return e.g.find(((i) => i instanceof Float32Array));
    case 2:
      return e.g.find(((i) => typeof WebGLTexture < "u" && i instanceof WebGLTexture));
    default:
      throw Error(`Type is not supported: ${n}`);
  }
}
function b1(e) {
  var n = hi(e, 1);
  if (!n) {
    if (n = hi(e, 0)) n = new Float32Array(n).map(((o) => o / 255));
    else {
      n = new Float32Array(e.width * e.height);
      const o = Po(e);
      var i = zp(e);
      if (c_(i, o, f_(e)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "document" in self && "ontouchend" in self.document) {
        i = new Float32Array(e.width * e.height * 4), o.readPixels(0, 0, e.width, e.height, o.RGBA, o.FLOAT, i);
        for (let l = 0, c = 0; l < n.length; ++l, c += 4) n[l] = i[c];
      } else o.readPixels(0, 0, e.width, e.height, o.RED, o.FLOAT, n);
    }
    e.g.push(n);
  }
  return n;
}
function f_(e) {
  let n = hi(e, 2);
  if (!n) {
    const i = Po(e);
    n = h_(e);
    const o = b1(e), l = d_(e);
    i.texImage2D(i.TEXTURE_2D, 0, l, e.width, e.height, 0, i.RED, i.FLOAT, o), _1(e);
  }
  return n;
}
function Po(e) {
  if (!e.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return e.h || (e.h = $i(e.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), e.h;
}
function d_(e) {
  if (e = Po(e), !pu) if (e.getExtension("EXT_color_buffer_float") && e.getExtension("OES_texture_float_linear") && e.getExtension("EXT_float_blend")) pu = e.R32F;
  else {
    if (!e.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
    pu = e.R16F;
  }
  return pu;
}
function zp(e) {
  return e.l || (e.l = new u_()), e.l;
}
function h_(e) {
  const n = Po(e);
  n.viewport(0, 0, e.width, e.height), n.activeTexture(n.TEXTURE0);
  let i = hi(e, 2);
  return i || (i = l_(zp(e), n, e.m ? n.LINEAR : n.NEAREST), e.g.push(i), e.j = !0), n.bindTexture(n.TEXTURE_2D, i), i;
}
function _1(e) {
  e.h.bindTexture(e.h.TEXTURE_2D, null);
}
var pu, Wt = class {
  constructor(e, n, i, o, l, c, d) {
    this.g = e, this.m = n, this.j = i, this.canvas = o, this.l = l, this.width = c, this.height = d, this.j && --x3 === 0 && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
  }
  Fa() {
    return !!hi(this, 0);
  }
  ka() {
    return !!hi(this, 1);
  }
  R() {
    return !!hi(this, 2);
  }
  ja() {
    return (n = hi(e = this, 0)) || (n = b1(e), n = new Uint8Array(n.map(((i) => Math.round(255 * i)))), e.g.push(n)), n;
    var e, n;
  }
  ia() {
    return b1(this);
  }
  N() {
    return f_(this);
  }
  clone() {
    const e = [];
    for (const n of this.g) {
      let i;
      if (n instanceof Uint8Array) i = new Uint8Array(n);
      else if (n instanceof Float32Array) i = new Float32Array(n);
      else {
        if (!(n instanceof WebGLTexture)) throw Error(`Type is not supported: ${n}`);
        {
          const o = Po(this), l = zp(this);
          o.activeTexture(o.TEXTURE1), i = l_(l, o, this.m ? o.LINEAR : o.NEAREST), o.bindTexture(o.TEXTURE_2D, i);
          const c = d_(this);
          o.texImage2D(o.TEXTURE_2D, 0, c, this.width, this.height, 0, o.RED, o.FLOAT, null), o.bindTexture(o.TEXTURE_2D, null), c_(l, o, i), kT(l, o, !1, (() => {
            h_(this), o.clearColor(0, 0, 0, 0), o.clear(o.COLOR_BUFFER_BIT), o.drawArrays(o.TRIANGLE_FAN, 0, 4), _1(this);
          })), OT(l), _1(this);
        }
      }
      e.push(i);
    }
    return new Wt(e, this.m, this.R(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && Po(this).deleteTexture(hi(this, 2)), x3 = -1;
  }
};
Wt.prototype.close = Wt.prototype.close, Wt.prototype.clone = Wt.prototype.clone, Wt.prototype.getAsWebGLTexture = Wt.prototype.N, Wt.prototype.getAsFloat32Array = Wt.prototype.ia, Wt.prototype.getAsUint8Array = Wt.prototype.ja, Wt.prototype.hasWebGLTexture = Wt.prototype.R, Wt.prototype.hasFloat32Array = Wt.prototype.ka, Wt.prototype.hasUint8Array = Wt.prototype.Fa;
var x3 = 250;
function xa(...e) {
  return e.map((([n, i]) => ({ start: n, end: i })));
}
const RT = /* @__PURE__ */ (function(e) {
  return class extends e {
    Ja() {
      this.i._registerModelResourcesGraphService();
    }
  };
})((T3 = class {
  constructor(e, n) {
    this.l = !0, this.i = e, this.g = null, this.h = 0, this.m = typeof this.i._addIntToInputStream == "function", n !== void 0 ? this.i.canvas = n : o_() ? this.i.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas"));
  }
  async initializeGraph(e) {
    const n = await (await fetch(e)).arrayBuffer();
    e = !(e.endsWith(".pbtxt") || e.endsWith(".textproto")), this.setGraph(new Uint8Array(n), e);
  }
  setGraphFromString(e) {
    this.setGraph(new TextEncoder().encode(e), !1);
  }
  setGraph(e, n) {
    const i = e.length, o = this.i._malloc(i);
    this.i.HEAPU8.set(e, o), n ? this.i._changeBinaryGraph(i, o) : this.i._changeTextGraph(i, o), this.i._free(o);
  }
  configureAudio(e, n, i, o, l) {
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), ge(this, o || "input_audio", ((c) => {
      ge(this, l = l || "audio_header", ((d) => {
        this.i._configureAudio(c, d, e, n ?? 0, i);
      }));
    }));
  }
  setAutoResizeCanvas(e) {
    this.l = e;
  }
  setAutoRenderToScreen(e) {
    this.i._setAutoRenderToScreen(e);
  }
  setGpuBufferVerticalFlip(e) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = e;
  }
  ca(e) {
    Ca(this, "__graph_config__", ((n) => {
      e(n);
    })), ge(this, "__graph_config__", ((n) => {
      this.i._getGraphConfig(n, void 0);
    })), delete this.i.simpleListeners.__graph_config__;
  }
  attachErrorListener(e) {
    this.i.errorListener = e;
  }
  attachEmptyPacketListener(e, n) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[e] = n;
  }
  addAudioToStream(e, n, i) {
    this.addAudioToStreamWithShape(e, 0, 0, n, i);
  }
  addAudioToStreamWithShape(e, n, i, o, l) {
    const c = 4 * e.length;
    this.h !== c && (this.g && this.i._free(this.g), this.g = this.i._malloc(c), this.h = c), this.i.HEAPF32.set(e, this.g / 4), ge(this, o, ((d) => {
      this.i._addAudioToInputStream(this.g, n, i, d, l);
    }));
  }
  addGpuBufferToStream(e, n, i) {
    ge(this, n, ((o) => {
      const [l, c] = _3(this, e, o);
      this.i._addBoundTextureToStream(o, l, c, i);
    }));
  }
  addBoolToStream(e, n, i) {
    ge(this, n, ((o) => {
      this.i._addBoolToInputStream(e, o, i);
    }));
  }
  addDoubleToStream(e, n, i) {
    ge(this, n, ((o) => {
      this.i._addDoubleToInputStream(e, o, i);
    }));
  }
  addFloatToStream(e, n, i) {
    ge(this, n, ((o) => {
      this.i._addFloatToInputStream(e, o, i);
    }));
  }
  addIntToStream(e, n, i) {
    ge(this, n, ((o) => {
      this.i._addIntToInputStream(e, o, i);
    }));
  }
  addUintToStream(e, n, i) {
    ge(this, n, ((o) => {
      this.i._addUintToInputStream(e, o, i);
    }));
  }
  addStringToStream(e, n, i) {
    ge(this, n, ((o) => {
      ge(this, e, ((l) => {
        this.i._addStringToInputStream(l, o, i);
      }));
    }));
  }
  addStringRecordToStream(e, n, i) {
    ge(this, n, ((o) => {
      w3(this, Object.keys(e), ((l) => {
        w3(this, Object.values(e), ((c) => {
          this.i._addFlatHashMapToInputStream(l, c, Object.keys(e).length, o, i);
        }));
      }));
    }));
  }
  addProtoToStream(e, n, i, o) {
    ge(this, i, ((l) => {
      ge(this, n, ((c) => {
        const d = this.i._malloc(e.length);
        this.i.HEAPU8.set(e, d), this.i._addProtoToInputStream(d, e.length, c, l, o), this.i._free(d);
      }));
    }));
  }
  addEmptyPacketToStream(e, n) {
    ge(this, e, ((i) => {
      this.i._addEmptyPacketToInputStream(i, n);
    }));
  }
  addBoolVectorToStream(e, n, i) {
    ge(this, n, ((o) => {
      const l = this.i._allocateBoolVector(e.length);
      if (!l) throw Error("Unable to allocate new bool vector on heap.");
      for (const c of e) this.i._addBoolVectorEntry(l, c);
      this.i._addBoolVectorToInputStream(l, o, i);
    }));
  }
  addDoubleVectorToStream(e, n, i) {
    ge(this, n, ((o) => {
      const l = this.i._allocateDoubleVector(e.length);
      if (!l) throw Error("Unable to allocate new double vector on heap.");
      for (const c of e) this.i._addDoubleVectorEntry(l, c);
      this.i._addDoubleVectorToInputStream(l, o, i);
    }));
  }
  addFloatVectorToStream(e, n, i) {
    ge(this, n, ((o) => {
      const l = this.i._allocateFloatVector(e.length);
      if (!l) throw Error("Unable to allocate new float vector on heap.");
      for (const c of e) this.i._addFloatVectorEntry(l, c);
      this.i._addFloatVectorToInputStream(l, o, i);
    }));
  }
  addIntVectorToStream(e, n, i) {
    ge(this, n, ((o) => {
      const l = this.i._allocateIntVector(e.length);
      if (!l) throw Error("Unable to allocate new int vector on heap.");
      for (const c of e) this.i._addIntVectorEntry(l, c);
      this.i._addIntVectorToInputStream(l, o, i);
    }));
  }
  addUintVectorToStream(e, n, i) {
    ge(this, n, ((o) => {
      const l = this.i._allocateUintVector(e.length);
      if (!l) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const c of e) this.i._addUintVectorEntry(l, c);
      this.i._addUintVectorToInputStream(l, o, i);
    }));
  }
  addStringVectorToStream(e, n, i) {
    ge(this, n, ((o) => {
      const l = this.i._allocateStringVector(e.length);
      if (!l) throw Error("Unable to allocate new string vector on heap.");
      for (const c of e) ge(this, c, ((d) => {
        this.i._addStringVectorEntry(l, d);
      }));
      this.i._addStringVectorToInputStream(l, o, i);
    }));
  }
  addBoolToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      this.i._addBoolToInputSidePacket(e, i);
    }));
  }
  addDoubleToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      this.i._addDoubleToInputSidePacket(e, i);
    }));
  }
  addFloatToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      this.i._addFloatToInputSidePacket(e, i);
    }));
  }
  addIntToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      this.i._addIntToInputSidePacket(e, i);
    }));
  }
  addUintToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      this.i._addUintToInputSidePacket(e, i);
    }));
  }
  addStringToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      ge(this, e, ((o) => {
        this.i._addStringToInputSidePacket(o, i);
      }));
    }));
  }
  addProtoToInputSidePacket(e, n, i) {
    ge(this, i, ((o) => {
      ge(this, n, ((l) => {
        const c = this.i._malloc(e.length);
        this.i.HEAPU8.set(e, c), this.i._addProtoToInputSidePacket(c, e.length, l, o), this.i._free(c);
      }));
    }));
  }
  addBoolVectorToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      const o = this.i._allocateBoolVector(e.length);
      if (!o) throw Error("Unable to allocate new bool vector on heap.");
      for (const l of e) this.i._addBoolVectorEntry(o, l);
      this.i._addBoolVectorToInputSidePacket(o, i);
    }));
  }
  addDoubleVectorToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      const o = this.i._allocateDoubleVector(e.length);
      if (!o) throw Error("Unable to allocate new double vector on heap.");
      for (const l of e) this.i._addDoubleVectorEntry(o, l);
      this.i._addDoubleVectorToInputSidePacket(o, i);
    }));
  }
  addFloatVectorToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      const o = this.i._allocateFloatVector(e.length);
      if (!o) throw Error("Unable to allocate new float vector on heap.");
      for (const l of e) this.i._addFloatVectorEntry(o, l);
      this.i._addFloatVectorToInputSidePacket(o, i);
    }));
  }
  addIntVectorToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      const o = this.i._allocateIntVector(e.length);
      if (!o) throw Error("Unable to allocate new int vector on heap.");
      for (const l of e) this.i._addIntVectorEntry(o, l);
      this.i._addIntVectorToInputSidePacket(o, i);
    }));
  }
  addUintVectorToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      const o = this.i._allocateUintVector(e.length);
      if (!o) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const l of e) this.i._addUintVectorEntry(o, l);
      this.i._addUintVectorToInputSidePacket(o, i);
    }));
  }
  addStringVectorToInputSidePacket(e, n) {
    ge(this, n, ((i) => {
      const o = this.i._allocateStringVector(e.length);
      if (!o) throw Error("Unable to allocate new string vector on heap.");
      for (const l of e) ge(this, l, ((c) => {
        this.i._addStringVectorEntry(o, c);
      }));
      this.i._addStringVectorToInputSidePacket(o, i);
    }));
  }
  attachBoolListener(e, n) {
    Ca(this, e, n), ge(this, e, ((i) => {
      this.i._attachBoolListener(i);
    }));
  }
  attachBoolVectorListener(e, n) {
    Ki(this, e, n), ge(this, e, ((i) => {
      this.i._attachBoolVectorListener(i);
    }));
  }
  attachIntListener(e, n) {
    Ca(this, e, n), ge(this, e, ((i) => {
      this.i._attachIntListener(i);
    }));
  }
  attachIntVectorListener(e, n) {
    Ki(this, e, n), ge(this, e, ((i) => {
      this.i._attachIntVectorListener(i);
    }));
  }
  attachUintListener(e, n) {
    Ca(this, e, n), ge(this, e, ((i) => {
      this.i._attachUintListener(i);
    }));
  }
  attachUintVectorListener(e, n) {
    Ki(this, e, n), ge(this, e, ((i) => {
      this.i._attachUintVectorListener(i);
    }));
  }
  attachDoubleListener(e, n) {
    Ca(this, e, n), ge(this, e, ((i) => {
      this.i._attachDoubleListener(i);
    }));
  }
  attachDoubleVectorListener(e, n) {
    Ki(this, e, n), ge(this, e, ((i) => {
      this.i._attachDoubleVectorListener(i);
    }));
  }
  attachFloatListener(e, n) {
    Ca(this, e, n), ge(this, e, ((i) => {
      this.i._attachFloatListener(i);
    }));
  }
  attachFloatVectorListener(e, n) {
    Ki(this, e, n), ge(this, e, ((i) => {
      this.i._attachFloatVectorListener(i);
    }));
  }
  attachStringListener(e, n) {
    Ca(this, e, n), ge(this, e, ((i) => {
      this.i._attachStringListener(i);
    }));
  }
  attachStringVectorListener(e, n) {
    Ki(this, e, n), ge(this, e, ((i) => {
      this.i._attachStringVectorListener(i);
    }));
  }
  attachProtoListener(e, n, i) {
    Ca(this, e, n), ge(this, e, ((o) => {
      this.i._attachProtoListener(o, i || !1);
    }));
  }
  attachProtoVectorListener(e, n, i) {
    Ki(this, e, n), ge(this, e, ((o) => {
      this.i._attachProtoVectorListener(o, i || !1);
    }));
  }
  attachAudioListener(e, n, i) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), Ca(this, e, ((o, l) => {
      o = new Float32Array(o.buffer, o.byteOffset, o.length / 4), n(o, l);
    })), ge(this, e, ((o) => {
      this.i._attachAudioListener(o, i || !1);
    }));
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends T3 {
  get ga() {
    return this.i;
  }
  pa(e, n, i) {
    ge(this, n, ((o) => {
      const [l, c] = _3(this, e, o);
      this.ga._addBoundTextureAsImageToStream(o, l, c, i);
    }));
  }
  Z(e, n) {
    Ca(this, e, n), ge(this, e, ((i) => {
      this.ga._attachImageListener(i);
    }));
  }
  aa(e, n) {
    Ki(this, e, n), ge(this, e, ((i) => {
      this.ga._attachImageVectorListener(i);
    }));
  }
}));
var T3, Ta = class extends RT {
};
async function Ze(e, n, i) {
  return (async function(o, l, c, d) {
    return xT(o, l, c, d);
  })(e, i.canvas ?? (o_() ? void 0 : document.createElement("canvas")), n, i);
}
function p_(e, n, i, o) {
  if (e.U) {
    const c = new Mb();
    if (i?.regionOfInterest) {
      if (!e.oa) throw Error("This task doesn't support region-of-interest.");
      var l = i.regionOfInterest;
      if (l.left >= l.right || l.top >= l.bottom) throw Error("Expected RectF with left < right and top < bottom.");
      if (l.left < 0 || l.top < 0 || l.right > 1 || l.bottom > 1) throw Error("Expected RectF values to be in [0,1].");
      ve(c, 1, (l.left + l.right) / 2), ve(c, 2, (l.top + l.bottom) / 2), ve(c, 4, l.right - l.left), ve(c, 3, l.bottom - l.top);
    } else ve(c, 1, 0.5), ve(c, 2, 0.5), ve(c, 4, 1), ve(c, 3, 1);
    if (i?.rotationDegrees) {
      if (i?.rotationDegrees % 90 != 0) throw Error("Expected rotation to be a multiple of 90°.");
      if (ve(c, 5, -Math.PI * i.rotationDegrees / 180), i?.rotationDegrees % 180 != 0) {
        const [d, h] = s_(n);
        i = Rt(c, 3) * h / d, l = Rt(c, 4) * d / h, ve(c, 4, i), ve(c, 3, l);
      }
    }
    e.g.addProtoToStream(c.g(), "mediapipe.NormalizedRect", e.U, o);
  }
  e.g.pa(n, e.X, o ?? performance.now()), e.finishProcessing();
}
function ka(e, n, i) {
  if (e.baseOptions?.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  p_(e, n, i, e.C + 1);
}
function qa(e, n, i, o) {
  if (!e.baseOptions?.g()) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  p_(e, n, i, o);
}
function Jo(e, n, i, o) {
  var l = n.data;
  const c = n.width, d = c * (n = n.height);
  if ((l instanceof Uint8Array || l instanceof Float32Array) && l.length !== d) throw Error("Unsupported channel count: " + l.length / d);
  return e = new Wt([l], i, !1, e.g.i.canvas, e.P, c, n), o ? e.clone() : e;
}
var Qn = class extends y1 {
  constructor(e, n, i, o) {
    super(e), this.g = e, this.X = n, this.U = i, this.oa = o, this.P = new u_();
  }
  l(e, n = !0) {
    if ("runningMode" in e && ot(this.baseOptions, 2, kl(!!e.runningMode && e.runningMode !== "IMAGE")), e.canvas !== void 0 && this.g.i.canvas !== e.canvas) throw Error("You must create a new task to reset the canvas.");
    return super.l(e, n);
  }
  close() {
    this.P.close(), super.close();
  }
};
Qn.prototype.close = Qn.prototype.close;
var ca = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "image_in", "norm_rect_in", !1), this.j = { detections: [] }, Ae(e = this.h = new uf(), 0, 1, n = new xt()), ve(this.h, 2, 0.5), ve(this.h, 3, 0.3);
  }
  get baseOptions() {
    return Ye(this.h, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.h, 0, 1, e);
  }
  o(e) {
    return "minDetectionConfidence" in e && ve(this.h, 2, e.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in e && ve(this.h, 3, e.minSuppressionThreshold ?? 0.3), this.l(e);
  }
  F(e, n) {
    return this.j = { detections: [] }, ka(this, e, n), this.j;
  }
  G(e, n, i) {
    return this.j = { detections: [] }, qa(this, e, i, n), this.j;
  }
  m() {
    var e = new Pn();
    _t(e, "image_in"), _t(e, "norm_rect_in"), Pe(e, "detections");
    const n = new $n();
    Za(n, uT, this.h);
    const i = new Ln();
    Kn(i, 2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), mt(i, "IMAGE:image_in"), mt(i, "NORM_RECT:norm_rect_in"), Fe(i, "DETECTIONS:detections"), i.o(n), ma(e, i), this.g.attachProtoVectorListener("detections", ((o, l) => {
      for (const c of o) o = Lb(c), this.j.detections.push(i_(o));
      le(this, l);
    })), this.g.attachEmptyPacketListener("detections", ((o) => {
      le(this, o);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
ca.prototype.detectForVideo = ca.prototype.G, ca.prototype.detect = ca.prototype.F, ca.prototype.setOptions = ca.prototype.o, ca.createFromModelPath = async function(e, n) {
  return Ze(ca, e, { baseOptions: { modelAssetPath: n } });
}, ca.createFromModelBuffer = function(e, n) {
  return Ze(ca, e, { baseOptions: { modelAssetBuffer: n } });
}, ca.createFromOptions = function(e, n) {
  return Ze(ca, e, n);
};
var Np = xa([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]), Lp = xa([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]), Cp = xa([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]), g_ = xa([474, 475], [475, 476], [476, 477], [477, 474]), Dp = xa([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]), Mp = xa([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]), m_ = xa([469, 470], [470, 471], [471, 472], [472, 469]), Up = xa([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]), v_ = [...Np, ...Lp, ...Cp, ...Dp, ...Mp, ...Up], y_ = xa([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function k3(e) {
  e.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var St = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "image_in", "norm_rect", !1), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = !1, Ae(e = this.h = new Gb(), 0, 1, n = new xt()), this.A = new Vb(), Ae(this.h, 0, 3, this.A), this.u = new uf(), Ae(this.h, 0, 2, this.u), yi(this.u, 4, 1), ve(this.u, 2, 0.5), ve(this.A, 2, 0.5), ve(this.h, 4, 0.5);
  }
  get baseOptions() {
    return Ye(this.h, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.h, 0, 1, e);
  }
  o(e) {
    return "numFaces" in e && yi(this.u, 4, e.numFaces ?? 1), "minFaceDetectionConfidence" in e && ve(this.u, 2, e.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && ve(this.h, 4, e.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in e && ve(this.A, 2, e.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in e && (this.outputFaceBlendshapes = !!e.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in e && (this.outputFacialTransformationMatrixes = !!e.outputFacialTransformationMatrixes), this.l(e);
  }
  F(e, n) {
    return k3(this), ka(this, e, n), this.j;
  }
  G(e, n, i) {
    return k3(this), qa(this, e, i, n), this.j;
  }
  m() {
    var e = new Pn();
    _t(e, "image_in"), _t(e, "norm_rect"), Pe(e, "face_landmarks");
    const n = new $n();
    Za(n, dT, this.h);
    const i = new Ln();
    Kn(i, 2, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), mt(i, "IMAGE:image_in"), mt(i, "NORM_RECT:norm_rect"), Fe(i, "NORM_LANDMARKS:face_landmarks"), i.o(n), ma(e, i), this.g.attachProtoVectorListener("face_landmarks", ((o, l) => {
      for (const c of o) o = Vl(c), this.j.faceLandmarks.push(ff(o));
      le(this, l);
    })), this.g.attachEmptyPacketListener("face_landmarks", ((o) => {
      le(this, o);
    })), this.outputFaceBlendshapes && (Pe(e, "blendshapes"), Fe(i, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", ((o, l) => {
      if (this.outputFaceBlendshapes) for (const c of o) o = cf(c), this.j.faceBlendshapes.push(Op(o.g() ?? []));
      le(this, l);
    })), this.g.attachEmptyPacketListener("blendshapes", ((o) => {
      le(this, o);
    }))), this.outputFacialTransformationMatrixes && (Pe(e, "face_geometry"), Fe(i, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", ((o, l) => {
      if (this.outputFacialTransformationMatrixes) for (const c of o) (o = Ye(o = fT(c), nT, 2)) && this.j.facialTransformationMatrixes.push({ rows: ha(o, 1) ?? 0 ?? 0, columns: ha(o, 2) ?? 0 ?? 0, data: kr(o, 3, Ua, Tr()).slice() ?? [] });
      le(this, l);
    })), this.g.attachEmptyPacketListener("face_geometry", ((o) => {
      le(this, o);
    }))), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
St.prototype.detectForVideo = St.prototype.G, St.prototype.detect = St.prototype.F, St.prototype.setOptions = St.prototype.o, St.createFromModelPath = function(e, n) {
  return Ze(St, e, { baseOptions: { modelAssetPath: n } });
}, St.createFromModelBuffer = function(e, n) {
  return Ze(St, e, { baseOptions: { modelAssetBuffer: n } });
}, St.createFromOptions = function(e, n) {
  return Ze(St, e, n);
}, St.FACE_LANDMARKS_LIPS = Np, St.FACE_LANDMARKS_LEFT_EYE = Lp, St.FACE_LANDMARKS_LEFT_EYEBROW = Cp, St.FACE_LANDMARKS_LEFT_IRIS = g_, St.FACE_LANDMARKS_RIGHT_EYE = Dp, St.FACE_LANDMARKS_RIGHT_EYEBROW = Mp, St.FACE_LANDMARKS_RIGHT_IRIS = m_, St.FACE_LANDMARKS_FACE_OVAL = Up, St.FACE_LANDMARKS_CONTOURS = v_, St.FACE_LANDMARKS_TESSELATION = y_;
var jp = xa([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function O3(e) {
  e.gestures = [], e.landmarks = [], e.worldLandmarks = [], e.handedness = [];
}
function R3(e) {
  return e.gestures.length === 0 ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: e.gestures, landmarks: e.landmarks, worldLandmarks: e.worldLandmarks, handedness: e.handedness, handednesses: e.handedness };
}
function z3(e, n = !0) {
  const i = [];
  for (const l of e) {
    var o = cf(l);
    e = [];
    for (const c of o.g()) o = n && ha(c, 1) != null ? ha(c, 1) ?? 0 : -1, e.push({ score: Rt(c, 2) ?? 0, index: o, categoryName: un(gt(c, 3)) ?? "" ?? "", displayName: un(gt(c, 4)) ?? "" ?? "" });
    i.push(e);
  }
  return i;
}
var Gn = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "image_in", "norm_rect", !1), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Ae(e = this.j = new Zb(), 0, 1, n = new xt()), this.u = new Sp(), Ae(this.j, 0, 2, this.u), this.D = new Ep(), Ae(this.u, 0, 3, this.D), this.A = new Fb(), Ae(this.u, 0, 2, this.A), this.h = new hT(), Ae(this.j, 0, 3, this.h), ve(this.A, 2, 0.5), ve(this.u, 4, 0.5), ve(this.D, 2, 0.5);
  }
  get baseOptions() {
    return Ye(this.j, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.j, 0, 1, e);
  }
  o(e) {
    if (yi(this.A, 3, e.numHands ?? 1), "minHandDetectionConfidence" in e && ve(this.A, 2, e.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && ve(this.u, 4, e.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in e && ve(this.D, 2, e.minHandPresenceConfidence ?? 0.5), e.cannedGesturesClassifierOptions) {
      var n = new Co(), i = n, o = v1(e.cannedGesturesClassifierOptions, Ye(this.h, Co, 3)?.l());
      Ae(i, 0, 2, o), Ae(this.h, 0, 3, n);
    } else e.cannedGesturesClassifierOptions === void 0 && Ye(this.h, Co, 3)?.g();
    return e.customGesturesClassifierOptions ? (Ae(i = n = new Co(), 0, 2, o = v1(e.customGesturesClassifierOptions, Ye(this.h, Co, 4)?.l())), Ae(this.h, 0, 4, n)) : e.customGesturesClassifierOptions === void 0 && Ye(this.h, Co, 4)?.g(), this.l(e);
  }
  Ha(e, n) {
    return O3(this), ka(this, e, n), R3(this);
  }
  Ia(e, n, i) {
    return O3(this), qa(this, e, i, n), R3(this);
  }
  m() {
    var e = new Pn();
    _t(e, "image_in"), _t(e, "norm_rect"), Pe(e, "hand_gestures"), Pe(e, "hand_landmarks"), Pe(e, "world_hand_landmarks"), Pe(e, "handedness");
    const n = new $n();
    Za(n, pT, this.j);
    const i = new Ln();
    Kn(i, 2, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), mt(i, "IMAGE:image_in"), mt(i, "NORM_RECT:norm_rect"), Fe(i, "HAND_GESTURES:hand_gestures"), Fe(i, "LANDMARKS:hand_landmarks"), Fe(i, "WORLD_LANDMARKS:world_hand_landmarks"), Fe(i, "HANDEDNESS:handedness"), i.o(n), ma(e, i), this.g.attachProtoVectorListener("hand_landmarks", ((o, l) => {
      for (const c of o) {
        o = Vl(c);
        const d = [];
        for (const h of vi(o, Db, 1)) d.push({ x: Rt(h, 1) ?? 0, y: Rt(h, 2) ?? 0, z: Rt(h, 3) ?? 0, visibility: Rt(h, 4) ?? 0 });
        this.landmarks.push(d);
      }
      le(this, l);
    })), this.g.attachEmptyPacketListener("hand_landmarks", ((o) => {
      le(this, o);
    })), this.g.attachProtoVectorListener("world_hand_landmarks", ((o, l) => {
      for (const c of o) {
        o = Go(c);
        const d = [];
        for (const h of vi(o, Cb, 1)) d.push({ x: Rt(h, 1) ?? 0, y: Rt(h, 2) ?? 0, z: Rt(h, 3) ?? 0, visibility: Rt(h, 4) ?? 0 });
        this.worldLandmarks.push(d);
      }
      le(this, l);
    })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((o) => {
      le(this, o);
    })), this.g.attachProtoVectorListener("hand_gestures", ((o, l) => {
      this.gestures.push(...z3(o, !1)), le(this, l);
    })), this.g.attachEmptyPacketListener("hand_gestures", ((o) => {
      le(this, o);
    })), this.g.attachProtoVectorListener("handedness", ((o, l) => {
      this.handedness.push(...z3(o)), le(this, l);
    })), this.g.attachEmptyPacketListener("handedness", ((o) => {
      le(this, o);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
function N3(e) {
  return { landmarks: e.landmarks, worldLandmarks: e.worldLandmarks, handednesses: e.handedness, handedness: e.handedness };
}
Gn.prototype.recognizeForVideo = Gn.prototype.Ia, Gn.prototype.recognize = Gn.prototype.Ha, Gn.prototype.setOptions = Gn.prototype.o, Gn.createFromModelPath = function(e, n) {
  return Ze(Gn, e, { baseOptions: { modelAssetPath: n } });
}, Gn.createFromModelBuffer = function(e, n) {
  return Ze(Gn, e, { baseOptions: { modelAssetBuffer: n } });
}, Gn.createFromOptions = function(e, n) {
  return Ze(Gn, e, n);
}, Gn.HAND_CONNECTIONS = jp;
var Bn = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Ae(e = this.h = new Sp(), 0, 1, n = new xt()), this.u = new Ep(), Ae(this.h, 0, 3, this.u), this.j = new Fb(), Ae(this.h, 0, 2, this.j), yi(this.j, 3, 1), ve(this.j, 2, 0.5), ve(this.u, 2, 0.5), ve(this.h, 4, 0.5);
  }
  get baseOptions() {
    return Ye(this.h, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.h, 0, 1, e);
  }
  o(e) {
    return "numHands" in e && yi(this.j, 3, e.numHands ?? 1), "minHandDetectionConfidence" in e && ve(this.j, 2, e.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && ve(this.h, 4, e.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in e && ve(this.u, 2, e.minHandPresenceConfidence ?? 0.5), this.l(e);
  }
  F(e, n) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], ka(this, e, n), N3(this);
  }
  G(e, n, i) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], qa(this, e, i, n), N3(this);
  }
  m() {
    var e = new Pn();
    _t(e, "image_in"), _t(e, "norm_rect"), Pe(e, "hand_landmarks"), Pe(e, "world_hand_landmarks"), Pe(e, "handedness");
    const n = new $n();
    Za(n, gT, this.h);
    const i = new Ln();
    Kn(i, 2, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), mt(i, "IMAGE:image_in"), mt(i, "NORM_RECT:norm_rect"), Fe(i, "LANDMARKS:hand_landmarks"), Fe(i, "WORLD_LANDMARKS:world_hand_landmarks"), Fe(i, "HANDEDNESS:handedness"), i.o(n), ma(e, i), this.g.attachProtoVectorListener("hand_landmarks", ((o, l) => {
      for (const c of o) o = Vl(c), this.landmarks.push(ff(o));
      le(this, l);
    })), this.g.attachEmptyPacketListener("hand_landmarks", ((o) => {
      le(this, o);
    })), this.g.attachProtoVectorListener("world_hand_landmarks", ((o, l) => {
      for (const c of o) o = Go(c), this.worldLandmarks.push(_l(o));
      le(this, l);
    })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((o) => {
      le(this, o);
    })), this.g.attachProtoVectorListener("handedness", ((o, l) => {
      var c = this.handedness, d = c.push;
      const h = [];
      for (const g of o) {
        o = cf(g);
        const m = [];
        for (const y of o.g()) m.push({ score: Rt(y, 2) ?? 0, index: ha(y, 1) ?? 0 ?? -1, categoryName: un(gt(y, 3)) ?? "" ?? "", displayName: un(gt(y, 4)) ?? "" ?? "" });
        h.push(m);
      }
      d.call(c, ...h), le(this, l);
    })), this.g.attachEmptyPacketListener("handedness", ((o) => {
      le(this, o);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Bn.prototype.detectForVideo = Bn.prototype.G, Bn.prototype.detect = Bn.prototype.F, Bn.prototype.setOptions = Bn.prototype.o, Bn.createFromModelPath = function(e, n) {
  return Ze(Bn, e, { baseOptions: { modelAssetPath: n } });
}, Bn.createFromModelBuffer = function(e, n) {
  return Ze(Bn, e, { baseOptions: { modelAssetBuffer: n } });
}, Bn.createFromOptions = function(e, n) {
  return Ze(Bn, e, n);
}, Bn.HAND_CONNECTIONS = jp;
var b_ = xa([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
function L3(e) {
  e.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] };
}
function C3(e) {
  try {
    if (!e.D) return e.h;
    e.D(e.h);
  } finally {
    hf(e);
  }
}
function gu(e, n) {
  e = Vl(e), n.push(ff(e));
}
var pt = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "input_frames_image", null, !1), this.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] }, this.outputPoseSegmentationMasks = this.outputFaceBlendshapes = !1, Ae(e = this.j = new Xb(), 0, 1, n = new xt()), this.I = new Ep(), Ae(this.j, 0, 2, this.I), this.W = new mT(), Ae(this.j, 0, 3, this.W), this.u = new uf(), Ae(this.j, 0, 4, this.u), this.O = new Vb(), Ae(this.j, 0, 5, this.O), this.A = new Yb(), Ae(this.j, 0, 6, this.A), this.M = new Kb(), Ae(this.j, 0, 7, this.M), ve(this.u, 2, 0.5), ve(this.u, 3, 0.3), ve(this.O, 2, 0.5), ve(this.A, 2, 0.5), ve(this.A, 3, 0.3), ve(this.M, 2, 0.5), ve(this.I, 2, 0.5);
  }
  get baseOptions() {
    return Ye(this.j, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.j, 0, 1, e);
  }
  o(e) {
    return "minFaceDetectionConfidence" in e && ve(this.u, 2, e.minFaceDetectionConfidence ?? 0.5), "minFaceSuppressionThreshold" in e && ve(this.u, 3, e.minFaceSuppressionThreshold ?? 0.3), "minFacePresenceConfidence" in e && ve(this.O, 2, e.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in e && (this.outputFaceBlendshapes = !!e.outputFaceBlendshapes), "minPoseDetectionConfidence" in e && ve(this.A, 2, e.minPoseDetectionConfidence ?? 0.5), "minPoseSuppressionThreshold" in e && ve(this.A, 3, e.minPoseSuppressionThreshold ?? 0.3), "minPosePresenceConfidence" in e && ve(this.M, 2, e.minPosePresenceConfidence ?? 0.5), "outputPoseSegmentationMasks" in e && (this.outputPoseSegmentationMasks = !!e.outputPoseSegmentationMasks), "minHandLandmarksConfidence" in e && ve(this.I, 2, e.minHandLandmarksConfidence ?? 0.5), this.l(e);
  }
  F(e, n, i) {
    const o = typeof n != "function" ? n : {};
    return this.D = typeof n == "function" ? n : i, L3(this), ka(this, e, o), C3(this);
  }
  G(e, n, i, o) {
    const l = typeof i != "function" ? i : {};
    return this.D = typeof i == "function" ? i : o, L3(this), qa(this, e, l, n), C3(this);
  }
  m() {
    var e = new Pn();
    _t(e, "input_frames_image"), Pe(e, "pose_landmarks"), Pe(e, "pose_world_landmarks"), Pe(e, "face_landmarks"), Pe(e, "left_hand_landmarks"), Pe(e, "left_hand_world_landmarks"), Pe(e, "right_hand_landmarks"), Pe(e, "right_hand_world_landmarks");
    const n = new $n(), i = new a3();
    Kn(i, 1, "type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"), (function(l, c) {
      if (c != null) if (Array.isArray(c)) ot(l, 2, $u(c, 0, Ol));
      else {
        if (!(typeof c == "string" || c instanceof Ha || I1(c))) throw Error("invalid value in Any.value field: " + c + " expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");
        Xi(l, 2, Y1(c, !1), Mr());
      }
    })(i, this.j.g());
    const o = new Ln();
    Kn(o, 2, "mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"), sp(o, 8, a3, i), mt(o, "IMAGE:input_frames_image"), Fe(o, "POSE_LANDMARKS:pose_landmarks"), Fe(o, "POSE_WORLD_LANDMARKS:pose_world_landmarks"), Fe(o, "FACE_LANDMARKS:face_landmarks"), Fe(o, "LEFT_HAND_LANDMARKS:left_hand_landmarks"), Fe(o, "LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"), Fe(o, "RIGHT_HAND_LANDMARKS:right_hand_landmarks"), Fe(o, "RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"), o.o(n), ma(e, o), df(this, e), this.g.attachProtoListener("pose_landmarks", ((l, c) => {
      gu(l, this.h.poseLandmarks), le(this, c);
    })), this.g.attachEmptyPacketListener("pose_landmarks", ((l) => {
      le(this, l);
    })), this.g.attachProtoListener("pose_world_landmarks", ((l, c) => {
      var d = this.h.poseWorldLandmarks;
      l = Go(l), d.push(_l(l)), le(this, c);
    })), this.g.attachEmptyPacketListener("pose_world_landmarks", ((l) => {
      le(this, l);
    })), this.outputPoseSegmentationMasks && (Fe(o, "POSE_SEGMENTATION_MASK:pose_segmentation_mask"), $o(this, "pose_segmentation_mask"), this.g.Z("pose_segmentation_mask", ((l, c) => {
      this.h.poseSegmentationMasks = [Jo(this, l, !0, !this.D)], le(this, c);
    })), this.g.attachEmptyPacketListener("pose_segmentation_mask", ((l) => {
      this.h.poseSegmentationMasks = [], le(this, l);
    }))), this.g.attachProtoListener("face_landmarks", ((l, c) => {
      gu(l, this.h.faceLandmarks), le(this, c);
    })), this.g.attachEmptyPacketListener("face_landmarks", ((l) => {
      le(this, l);
    })), this.outputFaceBlendshapes && (Pe(e, "extra_blendshapes"), Fe(o, "FACE_BLENDSHAPES:extra_blendshapes"), this.g.attachProtoListener("extra_blendshapes", ((l, c) => {
      var d = this.h.faceBlendshapes;
      this.outputFaceBlendshapes && (l = cf(l), d.push(Op(l.g() ?? []))), le(this, c);
    })), this.g.attachEmptyPacketListener("extra_blendshapes", ((l) => {
      le(this, l);
    }))), this.g.attachProtoListener("left_hand_landmarks", ((l, c) => {
      gu(l, this.h.leftHandLandmarks), le(this, c);
    })), this.g.attachEmptyPacketListener("left_hand_landmarks", ((l) => {
      le(this, l);
    })), this.g.attachProtoListener("left_hand_world_landmarks", ((l, c) => {
      var d = this.h.leftHandWorldLandmarks;
      l = Go(l), d.push(_l(l)), le(this, c);
    })), this.g.attachEmptyPacketListener("left_hand_world_landmarks", ((l) => {
      le(this, l);
    })), this.g.attachProtoListener("right_hand_landmarks", ((l, c) => {
      gu(l, this.h.rightHandLandmarks), le(this, c);
    })), this.g.attachEmptyPacketListener("right_hand_landmarks", ((l) => {
      le(this, l);
    })), this.g.attachProtoListener("right_hand_world_landmarks", ((l, c) => {
      var d = this.h.rightHandWorldLandmarks;
      l = Go(l), d.push(_l(l)), le(this, c);
    })), this.g.attachEmptyPacketListener("right_hand_world_landmarks", ((l) => {
      le(this, l);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
pt.prototype.detectForVideo = pt.prototype.G, pt.prototype.detect = pt.prototype.F, pt.prototype.setOptions = pt.prototype.o, pt.createFromModelPath = function(e, n) {
  return Ze(pt, e, { baseOptions: { modelAssetPath: n } });
}, pt.createFromModelBuffer = function(e, n) {
  return Ze(pt, e, { baseOptions: { modelAssetBuffer: n } });
}, pt.createFromOptions = function(e, n) {
  return Ze(pt, e, n);
}, pt.HAND_CONNECTIONS = jp, pt.POSE_CONNECTIONS = b_, pt.FACE_LANDMARKS_LIPS = Np, pt.FACE_LANDMARKS_LEFT_EYE = Lp, pt.FACE_LANDMARKS_LEFT_EYEBROW = Cp, pt.FACE_LANDMARKS_LEFT_IRIS = g_, pt.FACE_LANDMARKS_RIGHT_EYE = Dp, pt.FACE_LANDMARKS_RIGHT_EYEBROW = Mp, pt.FACE_LANDMARKS_RIGHT_IRIS = m_, pt.FACE_LANDMARKS_FACE_OVAL = Up, pt.FACE_LANDMARKS_CONTOURS = v_, pt.FACE_LANDMARKS_TESSELATION = y_;
var ua = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "input_image", "norm_rect", !0), this.j = { classifications: [] }, Ae(e = this.h = new Qb(), 0, 1, n = new xt());
  }
  get baseOptions() {
    return Ye(this.h, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.h, 0, 1, e);
  }
  o(e) {
    return Ae(this.h, 0, 2, v1(e, Ye(this.h, wp, 2))), this.l(e);
  }
  sa(e, n) {
    return this.j = { classifications: [] }, ka(this, e, n), this.j;
  }
  ta(e, n, i) {
    return this.j = { classifications: [] }, qa(this, e, i, n), this.j;
  }
  m() {
    var e = new Pn();
    _t(e, "input_image"), _t(e, "norm_rect"), Pe(e, "classifications");
    const n = new $n();
    Za(n, vT, this.h);
    const i = new Ln();
    Kn(i, 2, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), mt(i, "IMAGE:input_image"), mt(i, "NORM_RECT:norm_rect"), Fe(i, "CLASSIFICATIONS:classifications"), i.o(n), ma(e, i), this.g.attachProtoListener("classifications", ((o, l) => {
      this.j = ET(rT(o)), le(this, l);
    })), this.g.attachEmptyPacketListener("classifications", ((o) => {
      le(this, o);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
ua.prototype.classifyForVideo = ua.prototype.ta, ua.prototype.classify = ua.prototype.sa, ua.prototype.setOptions = ua.prototype.o, ua.createFromModelPath = function(e, n) {
  return Ze(ua, e, { baseOptions: { modelAssetPath: n } });
}, ua.createFromModelBuffer = function(e, n) {
  return Ze(ua, e, { baseOptions: { modelAssetBuffer: n } });
}, ua.createFromOptions = function(e, n) {
  return Ze(ua, e, n);
};
var Fn = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "image_in", "norm_rect", !0), this.h = new $b(), this.embeddings = { embeddings: [] }, Ae(e = this.h, 0, 1, n = new xt());
  }
  get baseOptions() {
    return Ye(this.h, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.h, 0, 1, e);
  }
  o(e) {
    var n = this.h, i = Ye(this.h, d3, 2);
    return i = i ? i.clone() : new d3(), e.l2Normalize !== void 0 ? ot(i, 1, kl(e.l2Normalize)) : "l2Normalize" in e && ot(i, 1), e.quantize !== void 0 ? ot(i, 2, kl(e.quantize)) : "quantize" in e && ot(i, 2), Ae(n, 0, 2, i), this.l(e);
  }
  za(e, n) {
    return ka(this, e, n), this.embeddings;
  }
  Aa(e, n, i) {
    return qa(this, e, i, n), this.embeddings;
  }
  m() {
    var e = new Pn();
    _t(e, "image_in"), _t(e, "norm_rect"), Pe(e, "embeddings_out");
    const n = new $n();
    Za(n, yT, this.h);
    const i = new Ln();
    Kn(i, 2, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), mt(i, "IMAGE:image_in"), mt(i, "NORM_RECT:norm_rect"), Fe(i, "EMBEDDINGS:embeddings_out"), i.o(n), ma(e, i), this.g.attachProtoListener("embeddings_out", ((o, l) => {
      o = lT(o), this.embeddings = (function(c) {
        return { embeddings: vi(c, sT, 1).map(((d) => {
          const h = { headIndex: ha(d, 3) ?? 0 ?? -1, headName: un(gt(d, 4)) ?? "" ?? "" };
          var g = d.v;
          return Yy(g, 0 | g[de], f3, Ih(d, 1)) !== void 0 ? (d = kr(d = Ye(d, f3, Ih(d, 1), void 0), 1, Ua, Tr()), h.floatEmbedding = d.slice()) : (g = new Uint8Array(0), h.quantizedEmbedding = Ye(d, oT, Ih(d, 2), void 0)?.na()?.h() ?? g), h;
        })), timestampMs: a_(Qy(c)) };
      })(o), le(this, l);
    })), this.g.attachEmptyPacketListener("embeddings_out", ((o) => {
      le(this, o);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Fn.cosineSimilarity = function(e, n) {
  if (e.floatEmbedding && n.floatEmbedding) e = y3(e.floatEmbedding, n.floatEmbedding);
  else {
    if (!e.quantizedEmbedding || !n.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    e = y3(v3(e.quantizedEmbedding), v3(n.quantizedEmbedding));
  }
  return e;
}, Fn.prototype.embedForVideo = Fn.prototype.Aa, Fn.prototype.embed = Fn.prototype.za, Fn.prototype.setOptions = Fn.prototype.o, Fn.createFromModelPath = function(e, n) {
  return Ze(Fn, e, { baseOptions: { modelAssetPath: n } });
}, Fn.createFromModelBuffer = function(e, n) {
  return Ze(Fn, e, { baseOptions: { modelAssetBuffer: n } });
}, Fn.createFromOptions = function(e, n) {
  return Ze(Fn, e, n);
};
var w1 = class {
  constructor(e, n, i) {
    this.confidenceMasks = e, this.categoryMask = n, this.qualityScores = i;
  }
  close() {
    this.confidenceMasks?.forEach(((e) => {
      e.close();
    })), this.categoryMask?.close();
  }
};
function zT(e) {
  const n = (function(i) {
    return vi(i, Ln, 1);
  })(e.ca()).filter(((i) => (un(gt(i, 1)) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));
  if (e.u = [], n.length > 1) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
  n.length === 1 && (Ye(n[0], $n, 7)?.j()?.g() ?? /* @__PURE__ */ new Map()).forEach(((i, o) => {
    e.u[Number(o)] = un(gt(i, 1)) ?? "";
  }));
}
function D3(e) {
  e.categoryMask = void 0, e.confidenceMasks = void 0, e.qualityScores = void 0;
}
function M3(e) {
  try {
    const n = new w1(e.confidenceMasks, e.categoryMask, e.qualityScores);
    if (!e.j) return n;
    e.j(n);
  } finally {
    hf(e);
  }
}
w1.prototype.close = w1.prototype.close;
var On = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "image_in", "norm_rect", !1), this.u = [], this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new kp(), this.A = new Pb(), Ae(this.h, 0, 3, this.A), Ae(e = this.h, 0, 1, n = new xt());
  }
  get baseOptions() {
    return Ye(this.h, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.h, 0, 1, e);
  }
  o(e) {
    return e.displayNamesLocale !== void 0 ? ot(this.h, 2, Ul(e.displayNamesLocale)) : "displayNamesLocale" in e && ot(this.h, 2), "outputCategoryMask" in e && (this.outputCategoryMask = e.outputCategoryMask ?? !1), "outputConfidenceMasks" in e && (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0), super.l(e);
  }
  L() {
    zT(this);
  }
  segment(e, n, i) {
    const o = typeof n != "function" ? n : {};
    return this.j = typeof n == "function" ? n : i, D3(this), ka(this, e, o), M3(this);
  }
  La(e, n, i, o) {
    const l = typeof i != "function" ? i : {};
    return this.j = typeof i == "function" ? i : o, D3(this), qa(this, e, l, n), M3(this);
  }
  Da() {
    return this.u;
  }
  m() {
    var e = new Pn();
    _t(e, "image_in"), _t(e, "norm_rect");
    const n = new $n();
    Za(n, Wb, this.h);
    const i = new Ln();
    Kn(i, 2, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), mt(i, "IMAGE:image_in"), mt(i, "NORM_RECT:norm_rect"), i.o(n), ma(e, i), df(this, e), this.outputConfidenceMasks && (Pe(e, "confidence_masks"), Fe(i, "CONFIDENCE_MASKS:confidence_masks"), $o(this, "confidence_masks"), this.g.aa("confidence_masks", ((o, l) => {
      this.confidenceMasks = o.map(((c) => Jo(this, c, !0, !this.j))), le(this, l);
    })), this.g.attachEmptyPacketListener("confidence_masks", ((o) => {
      this.confidenceMasks = [], le(this, o);
    }))), this.outputCategoryMask && (Pe(e, "category_mask"), Fe(i, "CATEGORY_MASK:category_mask"), $o(this, "category_mask"), this.g.Z("category_mask", ((o, l) => {
      this.categoryMask = Jo(this, o, !1, !this.j), le(this, l);
    })), this.g.attachEmptyPacketListener("category_mask", ((o) => {
      this.categoryMask = void 0, le(this, o);
    }))), Pe(e, "quality_scores"), Fe(i, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((o, l) => {
      this.qualityScores = o, le(this, l);
    })), this.g.attachEmptyPacketListener("quality_scores", ((o) => {
      this.categoryMask = void 0, le(this, o);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
On.prototype.getLabels = On.prototype.Da, On.prototype.segmentForVideo = On.prototype.La, On.prototype.segment = On.prototype.segment, On.prototype.setOptions = On.prototype.o, On.createFromModelPath = function(e, n) {
  return Ze(On, e, { baseOptions: { modelAssetPath: n } });
}, On.createFromModelBuffer = function(e, n) {
  return Ze(On, e, { baseOptions: { modelAssetBuffer: n } });
}, On.createFromOptions = function(e, n) {
  return Ze(On, e, n);
};
var A1 = class {
  constructor(e, n, i) {
    this.confidenceMasks = e, this.categoryMask = n, this.qualityScores = i;
  }
  close() {
    this.confidenceMasks?.forEach(((e) => {
      e.close();
    })), this.categoryMask?.close();
  }
};
A1.prototype.close = A1.prototype.close;
var Da = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "image_in", "norm_rect_in", !1), this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new kp(), this.u = new Pb(), Ae(this.h, 0, 3, this.u), Ae(e = this.h, 0, 1, n = new xt());
  }
  get baseOptions() {
    return Ye(this.h, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.h, 0, 1, e);
  }
  o(e) {
    return "outputCategoryMask" in e && (this.outputCategoryMask = e.outputCategoryMask ?? !1), "outputConfidenceMasks" in e && (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0), super.l(e);
  }
  segment(e, n, i, o) {
    const l = typeof i != "function" ? i : {};
    if (this.j = typeof i == "function" ? i : o, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, i = this.C + 1, o = new e_(), n.keypoint && n.scribble) throw Error("Cannot provide both keypoint and scribble.");
    if (n.keypoint) {
      var c = new Xh();
      Xi(c, 3, kl(!0), !1), Xi(c, 1, pl(n.keypoint.x), 0), Xi(c, 2, pl(n.keypoint.y), 0), yl(o, 1, m1, c);
    } else {
      if (!n.scribble) throw Error("Must provide either a keypoint or a scribble.");
      {
        const h = new _T();
        for (c of n.scribble) Xi(n = new Xh(), 3, kl(!0), !1), Xi(n, 1, pl(c.x), 0), Xi(n, 2, pl(c.y), 0), sp(h, 1, Xh, n);
        yl(o, 2, m1, h);
      }
    }
    this.g.addProtoToStream(o.g(), "mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest", "roi_in", i), ka(this, e, l);
    e: {
      try {
        const h = new A1(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var d = h;
          break e;
        }
        this.j(h);
      } finally {
        hf(this);
      }
      d = void 0;
    }
    return d;
  }
  m() {
    var e = new Pn();
    _t(e, "image_in"), _t(e, "roi_in"), _t(e, "norm_rect_in");
    const n = new $n();
    Za(n, Wb, this.h);
    const i = new Ln();
    Kn(i, 2, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"), mt(i, "IMAGE:image_in"), mt(i, "ROI:roi_in"), mt(i, "NORM_RECT:norm_rect_in"), i.o(n), ma(e, i), df(this, e), this.outputConfidenceMasks && (Pe(e, "confidence_masks"), Fe(i, "CONFIDENCE_MASKS:confidence_masks"), $o(this, "confidence_masks"), this.g.aa("confidence_masks", ((o, l) => {
      this.confidenceMasks = o.map(((c) => Jo(this, c, !0, !this.j))), le(this, l);
    })), this.g.attachEmptyPacketListener("confidence_masks", ((o) => {
      this.confidenceMasks = [], le(this, o);
    }))), this.outputCategoryMask && (Pe(e, "category_mask"), Fe(i, "CATEGORY_MASK:category_mask"), $o(this, "category_mask"), this.g.Z("category_mask", ((o, l) => {
      this.categoryMask = Jo(this, o, !1, !this.j), le(this, l);
    })), this.g.attachEmptyPacketListener("category_mask", ((o) => {
      this.categoryMask = void 0, le(this, o);
    }))), Pe(e, "quality_scores"), Fe(i, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((o, l) => {
      this.qualityScores = o, le(this, l);
    })), this.g.attachEmptyPacketListener("quality_scores", ((o) => {
      this.categoryMask = void 0, le(this, o);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Da.prototype.segment = Da.prototype.segment, Da.prototype.setOptions = Da.prototype.o, Da.createFromModelPath = function(e, n) {
  return Ze(Da, e, { baseOptions: { modelAssetPath: n } });
}, Da.createFromModelBuffer = function(e, n) {
  return Ze(Da, e, { baseOptions: { modelAssetBuffer: n } });
}, Da.createFromOptions = function(e, n) {
  return Ze(Da, e, n);
};
var fa = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "input_frame_gpu", "norm_rect", !1), this.j = { detections: [] }, Ae(e = this.h = new t_(), 0, 1, n = new xt());
  }
  get baseOptions() {
    return Ye(this.h, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.h, 0, 1, e);
  }
  o(e) {
    return e.displayNamesLocale !== void 0 ? ot(this.h, 2, Ul(e.displayNamesLocale)) : "displayNamesLocale" in e && ot(this.h, 2), e.maxResults !== void 0 ? yi(this.h, 3, e.maxResults) : "maxResults" in e && ot(this.h, 3), e.scoreThreshold !== void 0 ? ve(this.h, 4, e.scoreThreshold) : "scoreThreshold" in e && ot(this.h, 4), e.categoryAllowlist !== void 0 ? Ou(this.h, 5, e.categoryAllowlist) : "categoryAllowlist" in e && ot(this.h, 5), e.categoryDenylist !== void 0 ? Ou(this.h, 6, e.categoryDenylist) : "categoryDenylist" in e && ot(this.h, 6), this.l(e);
  }
  F(e, n) {
    return this.j = { detections: [] }, ka(this, e, n), this.j;
  }
  G(e, n, i) {
    return this.j = { detections: [] }, qa(this, e, i, n), this.j;
  }
  m() {
    var e = new Pn();
    _t(e, "input_frame_gpu"), _t(e, "norm_rect"), Pe(e, "detections");
    const n = new $n();
    Za(n, wT, this.h);
    const i = new Ln();
    Kn(i, 2, "mediapipe.tasks.vision.ObjectDetectorGraph"), mt(i, "IMAGE:input_frame_gpu"), mt(i, "NORM_RECT:norm_rect"), Fe(i, "DETECTIONS:detections"), i.o(n), ma(e, i), this.g.attachProtoVectorListener("detections", ((o, l) => {
      for (const c of o) o = Lb(c), this.j.detections.push(i_(o));
      le(this, l);
    })), this.g.attachEmptyPacketListener("detections", ((o) => {
      le(this, o);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
fa.prototype.detectForVideo = fa.prototype.G, fa.prototype.detect = fa.prototype.F, fa.prototype.setOptions = fa.prototype.o, fa.createFromModelPath = async function(e, n) {
  return Ze(fa, e, { baseOptions: { modelAssetPath: n } });
}, fa.createFromModelBuffer = function(e, n) {
  return Ze(fa, e, { baseOptions: { modelAssetBuffer: n } });
}, fa.createFromOptions = function(e, n) {
  return Ze(fa, e, n);
};
var E1 = class {
  constructor(e, n, i) {
    this.landmarks = e, this.worldLandmarks = n, this.segmentationMasks = i;
  }
  close() {
    this.segmentationMasks?.forEach(((e) => {
      e.close();
    }));
  }
};
function U3(e) {
  e.landmarks = [], e.worldLandmarks = [], e.segmentationMasks = void 0;
}
function j3(e) {
  try {
    const n = new E1(e.landmarks, e.worldLandmarks, e.segmentationMasks);
    if (!e.u) return n;
    e.u(n);
  } finally {
    hf(e);
  }
}
E1.prototype.close = E1.prototype.close;
var zn = class extends Qn {
  constructor(e, n) {
    super(new Ta(e, n), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = !1, Ae(e = this.h = new n_(), 0, 1, n = new xt()), this.A = new Kb(), Ae(this.h, 0, 3, this.A), this.j = new Yb(), Ae(this.h, 0, 2, this.j), yi(this.j, 4, 1), ve(this.j, 2, 0.5), ve(this.A, 2, 0.5), ve(this.h, 4, 0.5);
  }
  get baseOptions() {
    return Ye(this.h, xt, 1);
  }
  set baseOptions(e) {
    Ae(this.h, 0, 1, e);
  }
  o(e) {
    return "numPoses" in e && yi(this.j, 4, e.numPoses ?? 1), "minPoseDetectionConfidence" in e && ve(this.j, 2, e.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && ve(this.h, 4, e.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in e && ve(this.A, 2, e.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in e && (this.outputSegmentationMasks = e.outputSegmentationMasks ?? !1), this.l(e);
  }
  F(e, n, i) {
    const o = typeof n != "function" ? n : {};
    return this.u = typeof n == "function" ? n : i, U3(this), ka(this, e, o), j3(this);
  }
  G(e, n, i, o) {
    const l = typeof i != "function" ? i : {};
    return this.u = typeof i == "function" ? i : o, U3(this), qa(this, e, l, n), j3(this);
  }
  m() {
    var e = new Pn();
    _t(e, "image_in"), _t(e, "norm_rect"), Pe(e, "normalized_landmarks"), Pe(e, "world_landmarks"), Pe(e, "segmentation_masks");
    const n = new $n();
    Za(n, AT, this.h);
    const i = new Ln();
    Kn(i, 2, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), mt(i, "IMAGE:image_in"), mt(i, "NORM_RECT:norm_rect"), Fe(i, "NORM_LANDMARKS:normalized_landmarks"), Fe(i, "WORLD_LANDMARKS:world_landmarks"), i.o(n), ma(e, i), df(this, e), this.g.attachProtoVectorListener("normalized_landmarks", ((o, l) => {
      this.landmarks = [];
      for (const c of o) o = Vl(c), this.landmarks.push(ff(o));
      le(this, l);
    })), this.g.attachEmptyPacketListener("normalized_landmarks", ((o) => {
      this.landmarks = [], le(this, o);
    })), this.g.attachProtoVectorListener("world_landmarks", ((o, l) => {
      this.worldLandmarks = [];
      for (const c of o) o = Go(c), this.worldLandmarks.push(_l(o));
      le(this, l);
    })), this.g.attachEmptyPacketListener("world_landmarks", ((o) => {
      this.worldLandmarks = [], le(this, o);
    })), this.outputSegmentationMasks && (Fe(i, "SEGMENTATION_MASK:segmentation_masks"), $o(this, "segmentation_masks"), this.g.aa("segmentation_masks", ((o, l) => {
      this.segmentationMasks = o.map(((c) => Jo(this, c, !0, !this.u))), le(this, l);
    })), this.g.attachEmptyPacketListener("segmentation_masks", ((o) => {
      this.segmentationMasks = [], le(this, o);
    }))), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
zn.prototype.detectForVideo = zn.prototype.G, zn.prototype.detect = zn.prototype.F, zn.prototype.setOptions = zn.prototype.o, zn.createFromModelPath = function(e, n) {
  return Ze(zn, e, { baseOptions: { modelAssetPath: n } });
}, zn.createFromModelBuffer = function(e, n) {
  return Ze(zn, e, { baseOptions: { modelAssetBuffer: n } });
}, zn.createFromOptions = function(e, n) {
  return Ze(zn, e, n);
}, zn.POSE_CONNECTIONS = b_;
function NT(e, n, i, o) {
  const l = i.width, c = i.height, d = n.videoWidth || 1, h = n.videoHeight || 1, g = l / c, m = d / h;
  let y = l, b = c, A = 0, x = 0;
  m > g ? (b = c, y = b * m, A = (l - y) / 2) : (y = l, b = y / m, x = (c - b) / 2), e.save(), o && (e.translate(l, 0), e.scale(-1, 1)), e.drawImage(n, A, x, y, b), e.restore();
}
function LT(e, n, i, o) {
  const l = o?.okColor, c = o?.badColor, d = o?.lineWidth;
  e.save(), e.lineWidth = d, e.lineCap = "round";
  for (const h of i) {
    const g = n[h.from], m = n[h.to];
    !g || !m || (e.strokeStyle = h.valid ? l : c, e.beginPath(), e.moveTo(g.position.x, g.position.y), e.lineTo(m.position.x, m.position.y), e.stroke());
  }
  e.restore();
}
function Rn(e, n = 0) {
  return e ?? n;
}
function __(e, n, i) {
  return Math.max(n, Math.min(i, e));
}
function CT(e, n) {
  return Math.hypot(e.x - n.x, e.y - n.y);
}
function H3(e, n, i) {
  const o = e.x - n.x, l = e.y - n.y, c = i.x - n.x, d = i.y - n.y, h = o * c + l * d, g = Math.hypot(o, l), m = Math.hypot(c, d), y = h / (g * m || 1);
  return Math.acos(__(y, -1, 1)) * 180 / Math.PI;
}
function DT(e, n) {
  return {
    x: e.x * n.width,
    y: e.y * n.height,
    z: (e.z ?? 0) * n.width
    // z no mediapipe costuma ser relativo à largura
  };
}
const S1 = {
  LOW: 0.2,
  MEDIUM: 0.7,
  HIGH: 0.9
}, D = {
  NOSE: 0,
  LEFT_EYE_INNER: 1,
  LEFT_EYE: 2,
  LEFT_EYE_OUTER: 3,
  RIGHT_EYE_INNER: 4,
  RIGHT_EYE: 5,
  RIGHT_EYE_OUTER: 6,
  LEFT_EAR: 7,
  RIGHT_EAR: 8,
  LEFT_MOUTH: 9,
  RIGHT_MOUTH: 10,
  LEFT_SHOULDER: 11,
  RIGHT_SHOULDER: 12,
  LEFT_ELBOW: 13,
  RIGHT_ELBOW: 14,
  LEFT_WRIST: 15,
  RIGHT_WRIST: 16,
  LEFT_HIP: 23,
  RIGHT_HIP: 24,
  LEFT_KNEE: 25,
  RIGHT_KNEE: 26,
  LEFT_ANKLE: 27,
  RIGHT_ANKLE: 28,
  LEFT_HEEL: 29,
  RIGHT_HEEL: 30,
  LEFT_FOOT_INDEX: 31,
  RIGHT_FOOT_INDEX: 32
}, $e = {
  FACE_NOT_DETECTED: "FACE_NOT_DETECTED",
  RIGHT_HAND_NOT_DETECTED: "RIGHT_HAND_NOT_DETECTED",
  LEFT_HAND_NOT_DETECTED: "LEFT_HAND_NOT_DETECTED",
  RIGHT_FOOT_NOT_DETECTED: "RIGHT_FOOT_NOT_DETECTED",
  LEFT_FOOT_NOT_DETECTED: "LEFT_FOOT_NOT_DETECTED",
  LEGS_CLOSED: "LEGS_CLOSED",
  LEGS_OPEN: "LEGS_OPEN",
  RIGHT_ARM_BELOW: "RIGHT_ARM_BELOW",
  RIGHT_ARM_TOP: "RIGHT_ARM_TOP",
  LEFT_ARM_BELOW: "LEFT_ARM_BELOW",
  LEFT_ARM_TOP: "LEFT_ARM_TOP",
  PERSON_IS_FAR: "PERSON_IS_FAR",
  ANGLE_NOT_DETECTED: "ANGLE_NOT_DETECTED",
  LEFT_HAND_TOP_RIGHT_HAND_BELOW: "LEFT_HAND_TOP_RIGHT_HAND_BELOW",
  APPROACH_LEGS_ON_SIDE: "APPROACH_LEGS_ON_SIDE",
  ALL: "ALL"
};
class MT {
  constructor(n, i, o) {
    this.type = n, this.position = i, this.inFrameLikelihood = o;
  }
}
class Cu {
  constructor() {
    this.elbowAngleValid = !1, this.shoulderAngleValid = !1, this.kneeAngleValid = !1, this.hipAngleValid = !1, this.legAngleValid = !1, this.armAngleAboveThreshold = !1, this.armAngleBellowThreshold = !1, this.legAngleAboveThreshold = !1, this.legAngleBellowThreshold = !1, this.leftSideFootPositionValid = !0, this.leftSideHandPositionValid = !0, this.rightHandValid = !0, this.leftHandValid = !0, this.rightFootValid = !0, this.leftFootValid = !0, this.headValid = !0, this.personDistanceInvalid = !1;
  }
  clear() {
    const n = new Cu();
    Object.assign(this, n);
  }
  // --- setters (pra bater com Kotlin mentalmente) ---
  setElbowAngle(n) {
    this.elbowAngle = n;
  }
  setShoulderAngle(n) {
    this.shoulderAngle = n;
  }
  setKneeAngle(n) {
    this.kneeAngle = n;
  }
  setHipAngle(n) {
    this.hipAngle = n;
  }
  setLegAngle(n) {
    this.legAngle = n;
  }
  setHipDepth(n) {
    this.hipDepth = n;
  }
  setElbowAngleValid(n) {
    this.elbowAngleValid = n;
  }
  setShoulderAngleValid(n) {
    this.shoulderAngleValid = n;
  }
  setKneeAngleValid(n) {
    this.kneeAngleValid = n;
  }
  setHipAngleValid(n) {
    this.hipAngleValid = n;
  }
  setLegAngleValid(n) {
    this.legAngleValid = n;
  }
  setArmAngleAboveThreshold(n) {
    this.armAngleAboveThreshold = n;
  }
  setArmAngleBellowThreshold(n) {
    this.armAngleBellowThreshold = n;
  }
  setLegAngleAboveThreshold(n) {
    this.legAngleAboveThreshold = n;
  }
  setLegAngleBellowThreshold(n) {
    this.legAngleBellowThreshold = n;
  }
  setLeftSideFootPositionValid(n) {
    this.leftSideFootPositionValid = n;
  }
  setLeftSideHandPositionValid(n) {
    this.leftSideHandPositionValid = n;
  }
  setRightHandValid(n) {
    this.rightHandValid = n;
  }
  setLeftHandValid(n) {
    this.leftHandValid = n;
  }
  setRightFootValid(n) {
    this.rightFootValid = n;
  }
  setLeftFootValid(n) {
    this.leftFootValid = n;
  }
  setHeadValid(n) {
    this.headValid = n;
  }
  setPersonHeight(n) {
    this.personHeight = n;
  }
  setPersonDistanceInvalid(n) {
    this.personDistanceInvalid = n;
  }
  // --- math helpers (mesma intenção do Kotlin) ---
  calculateAngleFromPoints(n, i, o) {
    return H3(n, i, o);
  }
  calculateLineAngleFromPoints(n, i) {
    return Math.atan2(i.y - n.y, i.x - n.x) * 180 / Math.PI;
  }
  calculateLegAngle(n, i, o) {
    const l = (i.x + o.x) / 2, c = (i.y + o.y) / 2, d = l, h = n.y;
    return H3(
      { x: n.x, y: n.y },
      // A: joelho
      { x: l, y: c },
      // B: centro do quadril
      { x: d, y: h }
      // C: projeção horizontal
    );
  }
  validateRange(n, i, o) {
    return n == null ? !1 : n >= i && n <= o;
  }
  // Estimativa de altura da pessoa em % da imagem (0..100)
  // usa "ponto de cabeça mais alto" e "pé mais baixo"
  calculatePersonHeight(n, i, o) {
    const l = Object.values(n).map((m) => m.y), c = Object.values(i).map((m) => m.y);
    if (l.length === 0 || c.length === 0) return 0;
    const d = Math.min(...l), h = Math.max(...c), g = Math.max(0, h - d);
    return __(g / o.height * 100, 0, 100);
  }
  // --- checks aproximados (mesma intenção do SDK) ---
  // "raio" de segurança baseado na distância entre dois pontos
  // garante que point está dentro da imagem com margem (evita bordas)
  isLandmarkRadiusInsideImage(n, i, o) {
    const c = CT(n, i) / 2;
    return n.x - c >= 0 && n.x + c <= o.width && n.y - c >= 0 && n.y + c <= o.height;
  }
  // Valida cabeça/nariz em um "cone" razoável dentro do tronco
  isHeadInsideImage(n, i) {
    const o = n[0], l = n[11], c = n[12], d = n[23], h = n[24];
    if (!o || !l || !c || !d || !h) return !1;
    const g = (l.x + c.x) / 2, m = (l.y + c.y) / 2, y = (d.x + h.x) / 2, b = (d.y + h.y) / 2, x = Math.hypot(y - g, b - m) / 2;
    return o.x - x >= 0 && o.x + x <= i.width && o.y - x >= 0 && o.y + x <= i.height;
  }
  // Side: pés devem ficar próximos no eixo X (pessoa “de lado”)
  checkSideFootPosition(n, i) {
    const o = n[D.LEFT_ANKLE], l = n[D.RIGHT_ANKLE];
    return !o || !l ? !1 : Math.abs(o.x - l.x) / i.width * 100 <= S1.MEDIUM * 100;
  }
  // Side: punho direito deve estar "coerente" (não cruzado/fora)
  checkSideHandPosition(n, i) {
    const o = n.rightWrist;
    return o ? o.x > i.width * 0.05 && o.x < i.width * 0.95 : !1;
  }
}
class da {
  constructor(n, i, o) {
    this.from = n, this.to = i, this.valid = o;
  }
}
const jo = class jo {
  constructor() {
    this.landmarks = [], this.connectionsColor = [], this.poseLeftAtt = new Cu(), this.poseRightAtt = new Cu(), this.invalidLandmarks = [], this.errors = [], this.faceLandmarks = [
      D.LEFT_EYE_INNER,
      D.LEFT_EYE,
      D.LEFT_EYE_OUTER,
      D.RIGHT_EYE_INNER,
      D.RIGHT_EYE,
      D.RIGHT_EYE_OUTER,
      D.LEFT_EAR,
      D.RIGHT_EAR,
      D.LEFT_MOUTH,
      D.RIGHT_MOUTH
    ];
  }
  // ---- factory: cria CustomPose a partir do retorno do Tasks Vision ----
  static fromTasksVision(n, i) {
    const o = new jo();
    return o.landmarks = n.map((l, c) => new MT(
      c,
      DT(l, i),
      l.visibility ?? 0
    )), o;
  }
  // ---- helpers ----
  byType() {
    return this.landmarks.reduce(
      (n, i) => (n[i.type] = i, n),
      {}
    );
  }
  getLandmarkConfidence(n) {
    return n === D.LEFT_ANKLE || n === D.RIGHT_ANKLE ? S1.HIGH : S1.LOW;
  }
  isLandmarkInvalid(n, i, o) {
    const l = n.position;
    return l.x < 0 || l.x >= i.width || l.y < 0 || l.y >= i.height || n.inFrameLikelihood < o;
  }
  isOutOfBounds(n, i) {
    return n.x <= 0 || n.x >= i.width || n.y <= 0 || n.y >= i.height;
  }
  validateLegsOpenClosedFrontal() {
    const n = Rn(this.poseLeftAtt.legAngle), i = Rn(this.poseRightAtt.legAngle), o = 20, l = 30;
    return {
      valid: this.poseLeftAtt.validateRange(n, o, l) && this.poseRightAtt.validateRange(i, o, l),
      open: n > l || i > l,
      closed: n < o || i < o
    };
  }
  // ---- face ----
  isFaceNotDetected(n) {
    const i = this.byType();
    return this.faceLandmarks.reduce((l, c) => {
      const d = i[c];
      return d ? this.isOutOfBounds(d.position, n) ? l + 1 : l : l + 1;
    }, 0) > 5;
  }
  getInvalidLandmarks(n, i, o) {
    if (i.width === 0 || i.height === 0) return [];
    const l = [];
    for (const c of jo.validLandmarkType) {
      const d = n[c], h = this.getLandmarkConfidence(c);
      d && this.isLandmarkInvalid(d, i, h) && l.push(c);
    }
    return o && l.push(D.NOSE), l;
  }
  // ---- PUBLIC API (igual Kotlin) ----
  validateFrontalImage(n) {
    const i = this.byType();
    this.invalidLandmarks = [], this.invalidLandmarks.push(
      ...this.getInvalidLandmarks(
        i,
        n,
        this.isFaceNotDetected(n)
      )
    ), this.poseLeftAtt.clear(), this.poseRightAtt.clear(), this.calculateFrontalAttributes(i, n), this.validateFrontalAttributes();
    const o = [], l = (c, d) => {
      c && o.push(d);
    };
    return l(
      this.invalidLandmarks.includes(D.NOSE),
      $e.FACE_NOT_DETECTED
    ), l(
      this.invalidLandmarks.includes(D.RIGHT_WRIST),
      $e.RIGHT_HAND_NOT_DETECTED
    ), l(
      this.invalidLandmarks.includes(D.LEFT_WRIST),
      $e.LEFT_HAND_NOT_DETECTED
    ), l(
      this.invalidLandmarks.includes(D.RIGHT_ANKLE),
      $e.RIGHT_FOOT_NOT_DETECTED
    ), l(
      this.invalidLandmarks.includes(D.LEFT_ANKLE),
      $e.LEFT_FOOT_NOT_DETECTED
    ), l(
      this.poseRightAtt.legAngleBellowThreshold,
      $e.LEGS_CLOSED
    ), l(this.poseLeftAtt.legAngleBellowThreshold, $e.LEGS_CLOSED), l(this.poseRightAtt.legAngleAboveThreshold, $e.LEGS_OPEN), l(this.poseLeftAtt.legAngleAboveThreshold, $e.LEGS_OPEN), l(
      this.poseRightAtt.armAngleBellowThreshold,
      $e.RIGHT_ARM_BELOW
    ), l(
      this.poseRightAtt.armAngleAboveThreshold,
      $e.RIGHT_ARM_TOP
    ), l(
      this.poseLeftAtt.armAngleBellowThreshold,
      $e.LEFT_ARM_BELOW
    ), l(this.poseLeftAtt.armAngleAboveThreshold, $e.LEFT_ARM_TOP), l(
      !this.poseLeftAtt.leftHandValid,
      $e.LEFT_HAND_NOT_DETECTED
    ), l(
      !this.poseRightAtt.rightHandValid,
      $e.RIGHT_HAND_NOT_DETECTED
    ), l(
      !this.poseLeftAtt.leftFootValid,
      $e.LEFT_FOOT_NOT_DETECTED
    ), l(
      !this.poseRightAtt.rightFootValid,
      $e.RIGHT_FOOT_NOT_DETECTED
    ), l(
      this.poseRightAtt.personDistanceInvalid,
      $e.PERSON_IS_FAR
    ), this.errors = o, this.isValidAngles();
  }
  validateSideImage(n) {
    const i = this.byType();
    this.invalidLandmarks = [], this.invalidLandmarks.push(
      ...this.getInvalidLandmarks(i, n, !1).filter(
        (c) => c !== D.RIGHT_ANKLE && c !== D.LEFT_ANKLE && c !== D.RIGHT_FOOT_INDEX && c !== D.LEFT_FOOT_INDEX && c !== D.RIGHT_HEEL && c !== D.LEFT_HEEL
      )
    ), this.poseLeftAtt.clear(), this.poseRightAtt.clear(), this.calculateSideAttributes(i, n), this.validateSideAttributes();
    const o = [], l = (c, d) => {
      c && o.push(d);
    };
    return l(
      this.invalidLandmarks.includes(D.NOSE),
      $e.FACE_NOT_DETECTED
    ), l(
      this.invalidLandmarks.includes(D.RIGHT_WRIST),
      $e.RIGHT_HAND_NOT_DETECTED
    ), l(
      this.poseRightAtt.legAngleBellowThreshold,
      $e.LEGS_CLOSED
    ), l(this.poseLeftAtt.legAngleBellowThreshold, $e.LEGS_CLOSED), l(this.poseRightAtt.legAngleAboveThreshold, $e.LEGS_OPEN), l(this.poseLeftAtt.legAngleAboveThreshold, $e.LEGS_OPEN), l(
      !this.poseRightAtt.leftSideHandPositionValid,
      $e.LEFT_HAND_TOP_RIGHT_HAND_BELOW
    ), l(
      !this.poseRightAtt.rightHandValid,
      $e.RIGHT_HAND_NOT_DETECTED
    ), l(
      !this.poseRightAtt.rightFootValid,
      $e.RIGHT_FOOT_NOT_DETECTED
    ), l(
      !this.poseRightAtt.leftSideFootPositionValid,
      $e.APPROACH_LEGS_ON_SIDE
    ), l(
      this.poseRightAtt.personDistanceInvalid,
      $e.PERSON_IS_FAR
    ), this.errors = o, this.isValidAngles();
  }
  // ---- cálculo frontal ----
  calculateFrontalAttributes(n, i) {
    const o = n[D.LEFT_WRIST], l = n[D.LEFT_ELBOW], c = n[D.LEFT_SHOULDER], d = n[D.LEFT_HIP];
    o && l && c && this.poseLeftAtt.setElbowAngle(
      this.poseLeftAtt.calculateAngleFromPoints(
        o.position,
        l.position,
        c.position
      )
    ), l && c && d && this.poseLeftAtt.setShoulderAngle(
      this.poseLeftAtt.calculateAngleFromPoints(
        l.position,
        c.position,
        d.position
      )
    );
    const h = n[D.LEFT_ANKLE], g = n[D.LEFT_KNEE];
    h && g && d && this.poseLeftAtt.setKneeAngle(
      this.poseLeftAtt.calculateAngleFromPoints(
        h.position,
        g.position,
        d.position
      )
    );
    const m = n[D.RIGHT_HIP];
    g && d && m && this.poseLeftAtt.setLegAngle(
      this.poseLeftAtt.calculateLegAngle(
        g.position,
        d.position,
        m.position
      )
    ), l && o && this.poseLeftAtt.setLeftHandValid(
      this.poseLeftAtt.isLandmarkRadiusInsideImage(
        o.position,
        l.position,
        i
      )
    ), g && h && this.poseLeftAtt.setLeftFootValid(
      this.poseLeftAtt.isLandmarkRadiusInsideImage(
        h.position,
        g.position,
        i
      )
    );
    const y = n[D.RIGHT_WRIST], b = n[D.RIGHT_ELBOW], A = n[D.RIGHT_SHOULDER];
    y && b && A && this.poseRightAtt.setElbowAngle(
      this.poseRightAtt.calculateAngleFromPoints(
        y.position,
        b.position,
        A.position
      )
    ), b && A && m && this.poseRightAtt.setShoulderAngle(
      this.poseRightAtt.calculateAngleFromPoints(
        b.position,
        A.position,
        m.position
      )
    );
    const x = n[D.RIGHT_ANKLE], V = n[D.RIGHT_KNEE];
    x && V && m && this.poseRightAtt.setKneeAngle(
      this.poseRightAtt.calculateAngleFromPoints(
        x.position,
        V.position,
        m.position
      )
    ), V && m && d && this.poseRightAtt.setLegAngle(
      this.poseRightAtt.calculateLegAngle(
        V.position,
        m.position,
        d.position
      )
    ), b && y && this.poseRightAtt.setRightHandValid(
      this.poseRightAtt.isLandmarkRadiusInsideImage(
        y.position,
        b.position,
        i
      )
    ), V && x && this.poseRightAtt.setRightFootValid(
      this.poseRightAtt.isLandmarkRadiusInsideImage(
        x.position,
        V.position,
        i
      )
    );
    const F = n[D.NOSE];
    F && c && A && d && m && this.poseRightAtt.setHeadValid(
      this.poseRightAtt.isHeadInsideImage(
        {
          [D.NOSE]: F.position,
          [D.LEFT_SHOULDER]: c.position,
          [D.RIGHT_SHOULDER]: A.position,
          [D.LEFT_HIP]: d.position,
          [D.RIGHT_HIP]: m.position
        },
        i
      )
    ), this.calculateAndSetPersonHeight(
      this.poseRightAtt,
      n,
      i
    );
  }
  validateFrontalAttributes(n = 150, i = 190, o = 150, l = 190, c = 50, d = 70, h = 20, g = 30, m = 45) {
    this.poseLeftAtt.setElbowAngleValid(
      this.poseLeftAtt.validateRange(
        this.poseLeftAtt.elbowAngle,
        n,
        i
      )
    ), this.poseLeftAtt.setShoulderAngleValid(
      this.poseLeftAtt.validateRange(
        this.poseLeftAtt.shoulderAngle,
        c,
        d
      )
    ), this.poseLeftAtt.setKneeAngleValid(
      this.poseLeftAtt.validateRange(
        this.poseLeftAtt.kneeAngle,
        o,
        l
      )
    ), this.poseLeftAtt.setLegAngleValid(
      this.poseLeftAtt.validateRange(
        this.poseLeftAtt.legAngle,
        h,
        g
      )
    ), this.poseLeftAtt.setArmAngleAboveThreshold(
      Rn(this.poseLeftAtt.shoulderAngle) > d
    ), this.poseLeftAtt.setArmAngleBellowThreshold(
      Rn(this.poseLeftAtt.shoulderAngle) < c
    ), this.poseLeftAtt.setLegAngleAboveThreshold(
      (this.poseLeftAtt.kneeAngle ?? 0) > l || Rn(this.poseLeftAtt.legAngle) > g
    ), this.poseLeftAtt.setLegAngleBellowThreshold(
      (this.poseLeftAtt.kneeAngle ?? 0) < o || Rn(this.poseLeftAtt.legAngle) < h
    ), this.poseLeftAtt.setHipAngleValid(!0), this.poseRightAtt.setElbowAngleValid(
      this.poseRightAtt.validateRange(
        this.poseRightAtt.elbowAngle,
        n,
        i
      )
    ), this.poseRightAtt.setShoulderAngleValid(
      this.poseRightAtt.validateRange(
        this.poseRightAtt.shoulderAngle,
        c,
        d
      )
    ), this.poseRightAtt.setKneeAngleValid(
      this.poseRightAtt.validateRange(
        this.poseRightAtt.kneeAngle,
        o,
        l
      )
    ), this.poseRightAtt.setLegAngleValid(
      this.poseRightAtt.validateRange(
        this.poseRightAtt.legAngle,
        h,
        g
      )
    ), this.poseRightAtt.setArmAngleAboveThreshold(
      Rn(this.poseRightAtt.shoulderAngle) > d
    ), this.poseRightAtt.setArmAngleBellowThreshold(
      Rn(this.poseRightAtt.shoulderAngle) < c
    ), this.poseRightAtt.setLegAngleAboveThreshold(
      (this.poseRightAtt.kneeAngle ?? 0) > l || Rn(this.poseRightAtt.legAngle) > g
    ), this.poseRightAtt.setLegAngleBellowThreshold(
      (this.poseRightAtt.kneeAngle ?? 0) < o || Rn(this.poseRightAtt.legAngle) < h
    ), this.poseRightAtt.setHipAngleValid(!0), this.poseRightAtt.setPersonDistanceInvalid(
      Rn(this.poseRightAtt.personHeight) < m
    );
  }
  // ---- cálculo side ----
  calculateSideAttributes(n, i) {
    const o = n[D.LEFT_WRIST]?.position, l = n[D.LEFT_ELBOW]?.position, c = n[D.LEFT_SHOULDER]?.position, d = n[D.LEFT_HIP]?.position, h = n[D.LEFT_KNEE]?.position, g = n[D.LEFT_ANKLE]?.position;
    o && l && c && this.poseLeftAtt.setElbowAngle(
      this.poseLeftAtt.calculateAngleFromPoints(o, l, c)
    ), l && c && d && this.poseLeftAtt.setShoulderAngle(
      this.poseLeftAtt.calculateAngleFromPoints(l, c, d)
    ), g && h && d && this.poseLeftAtt.setKneeAngle(
      this.poseLeftAtt.calculateAngleFromPoints(g, h, d)
    ), c && d && this.poseLeftAtt.setHipAngle(
      this.poseLeftAtt.calculateLineAngleFromPoints(c, d)
    ), this.poseLeftAtt.setHipDepth(
      Rn(n[D.LEFT_HIP]?.position?.z)
    );
    const m = n[D.RIGHT_WRIST]?.position, y = n[D.RIGHT_ELBOW]?.position, b = n[D.RIGHT_SHOULDER]?.position, A = n[D.RIGHT_HIP]?.position, x = n[D.RIGHT_KNEE]?.position, V = n[D.RIGHT_ANKLE]?.position;
    m && y && b && this.poseRightAtt.setElbowAngle(
      this.poseRightAtt.calculateAngleFromPoints(m, y, b)
    ), y && b && A && this.poseRightAtt.setShoulderAngle(
      this.poseRightAtt.calculateAngleFromPoints(y, b, A)
    ), V && x && A && this.poseRightAtt.setKneeAngle(
      this.poseRightAtt.calculateAngleFromPoints(V, x, A)
    ), b && A && this.poseRightAtt.setHipAngle(
      this.poseRightAtt.calculateLineAngleFromPoints(b, A)
    ), this.poseRightAtt.setHipDepth(
      Rn(n[D.RIGHT_HIP]?.position?.z)
    ), g && V && this.poseRightAtt.setLeftSideFootPositionValid(
      this.poseRightAtt.checkSideFootPosition(
        { [D.LEFT_ANKLE]: g, [D.RIGHT_ANKLE]: V },
        i
      )
    ), m && this.poseRightAtt.setLeftSideHandPositionValid(
      this.poseRightAtt.checkSideHandPosition({ rightWrist: m }, i)
    );
    const F = n[D.RIGHT_ELBOW]?.position, q = n[D.RIGHT_WRIST]?.position;
    F && q && this.poseRightAtt.setRightHandValid(
      this.poseRightAtt.isLandmarkRadiusInsideImage(
        q,
        F,
        i
      )
    );
    const te = n[D.RIGHT_KNEE]?.position, ne = n[D.RIGHT_ANKLE]?.position;
    te && ne && this.poseRightAtt.setRightFootValid(
      this.poseRightAtt.isLandmarkRadiusInsideImage(
        ne,
        te,
        i
      )
    );
    const W = n[D.NOSE]?.position, ee = n[D.LEFT_SHOULDER]?.position, ae = n[D.RIGHT_SHOULDER]?.position, Ee = n[D.LEFT_HIP]?.position, ce = n[D.RIGHT_HIP]?.position;
    W && ee && ae && Ee && ce && this.poseRightAtt.setHeadValid(
      this.poseRightAtt.isHeadInsideImage(
        {
          [D.NOSE]: W,
          [D.LEFT_SHOULDER]: ee,
          [D.RIGHT_SHOULDER]: ae,
          [D.LEFT_HIP]: Ee,
          [D.RIGHT_HIP]: ce
        },
        i
      )
    ), this.calculateAndSetPersonHeight(
      this.poseRightAtt,
      n,
      i
    );
  }
  calculateAndSetPersonHeight(n, i, o) {
    const l = i[D.NOSE]?.position, c = i[D.RIGHT_EYE]?.position, d = i[D.RIGHT_MOUTH]?.position, h = i[D.RIGHT_EAR]?.position, g = i[D.RIGHT_FOOT_INDEX]?.position, m = i[D.RIGHT_HEEL]?.position;
    if (!l || !c || !d || !h || !g || !m)
      return;
    const y = n.calculatePersonHeight(
      {
        [D.NOSE]: l,
        [D.RIGHT_EYE]: c,
        [D.RIGHT_MOUTH]: d,
        [D.RIGHT_EAR]: h
      },
      {
        [D.RIGHT_FOOT_INDEX]: g,
        [D.RIGHT_HEEL]: m
      },
      o
    );
    n.setPersonHeight(y);
  }
  validateSideAttributes(n = 160, i = 190, o = 160, l = 190, c = 70, d = 95, h = 75, g = 95, m = 45) {
    this.poseLeftAtt.setElbowAngleValid(!0), this.poseLeftAtt.setShoulderAngleValid(!0), this.poseLeftAtt.setKneeAngleValid(
      this.poseLeftAtt.validateRange(
        this.poseLeftAtt.kneeAngle,
        o,
        l
      )
    ), this.poseLeftAtt.setHipAngleValid(
      this.poseLeftAtt.validateRange(
        this.poseLeftAtt.hipAngle,
        h,
        g
      )
    ), this.poseLeftAtt.setLegAngleValid(!0), this.poseLeftAtt.setArmAngleAboveThreshold(!1), this.poseLeftAtt.setArmAngleBellowThreshold(!1), this.poseLeftAtt.setLegAngleAboveThreshold(!1), this.poseLeftAtt.setLegAngleBellowThreshold(!1), this.poseRightAtt.setElbowAngleValid(
      this.poseRightAtt.validateRange(
        this.poseRightAtt.elbowAngle,
        n,
        i
      )
    ), this.poseRightAtt.setShoulderAngleValid(
      this.poseRightAtt.validateRange(
        this.poseRightAtt.shoulderAngle,
        c,
        d
      )
    ), this.poseRightAtt.setKneeAngleValid(
      this.poseRightAtt.validateRange(
        this.poseRightAtt.kneeAngle,
        o,
        l
      )
    ), this.poseRightAtt.setHipAngleValid(
      this.poseRightAtt.validateRange(
        this.poseRightAtt.hipAngle,
        h,
        g
      )
    ), this.poseRightAtt.setLegAngleValid(!0), this.poseRightAtt.setArmAngleAboveThreshold(!1), this.poseRightAtt.setArmAngleBellowThreshold(!1), this.poseRightAtt.setLegAngleAboveThreshold(!1), this.poseRightAtt.setLegAngleBellowThreshold(!1), this.poseRightAtt.setPersonDistanceInvalid(
      Rn(this.poseRightAtt.personHeight) < m
    );
  }
  // ---- color joints (igual Kotlin) ----
  fetchConnectionsColor() {
    this.connectionsColor = [
      new da(D.RIGHT_SHOULDER, D.LEFT_SHOULDER, !0),
      new da(
        D.LEFT_SHOULDER,
        D.LEFT_HIP,
        this.poseLeftAtt.shoulderAngleValid && this.poseLeftAtt.hipAngleValid
      ),
      new da(
        D.RIGHT_HIP,
        D.RIGHT_SHOULDER,
        this.poseRightAtt.shoulderAngleValid
      ),
      new da(
        D.RIGHT_ELBOW,
        D.RIGHT_SHOULDER,
        this.poseRightAtt.elbowAngleValid && this.poseRightAtt.hipAngleValid
      ),
      new da(
        D.RIGHT_WRIST,
        D.RIGHT_ELBOW,
        this.poseRightAtt.elbowAngleValid
      ),
      new da(D.LEFT_HIP, D.RIGHT_HIP, !0),
      new da(
        D.LEFT_HIP,
        D.LEFT_KNEE,
        this.poseLeftAtt.kneeAngleValid && this.poseLeftAtt.legAngleValid
      ),
      new da(
        D.RIGHT_HIP,
        D.RIGHT_KNEE,
        this.poseRightAtt.kneeAngleValid && this.poseRightAtt.legAngleValid
      ),
      new da(
        D.RIGHT_KNEE,
        D.RIGHT_ANKLE,
        this.poseRightAtt.kneeAngleValid
      ),
      new da(
        D.LEFT_KNEE,
        D.LEFT_ANKLE,
        this.poseLeftAtt.kneeAngleValid
      ),
      new da(
        D.LEFT_SHOULDER,
        D.LEFT_ELBOW,
        this.poseLeftAtt.elbowAngleValid
      ),
      new da(
        D.LEFT_WRIST,
        D.LEFT_ELBOW,
        this.poseLeftAtt.elbowAngleValid
      )
    ];
  }
  isValidAngles() {
    return this.poseRightAtt.elbowAngleValid && this.poseRightAtt.shoulderAngleValid && this.poseRightAtt.kneeAngleValid && this.poseRightAtt.legAngleValid && this.poseRightAtt.hipAngleValid && this.poseLeftAtt.elbowAngleValid && this.poseLeftAtt.shoulderAngleValid && this.poseLeftAtt.kneeAngleValid && this.poseLeftAtt.legAngleValid && this.poseLeftAtt.hipAngleValid && this.invalidLandmarks.length === 0;
  }
  checkErrors(n, i) {
    if (this.landmarks.length === 0) {
      this.errors = [$e.ALL];
      return;
    }
    const o = n ? this.validateSideImage(i) : this.validateFrontalImage(i);
    this.fetchConnectionsColor(), this.errors = this.errors.length > 0 ? this.errors : o ? [] : [$e.ANGLE_NOT_DETECTED];
  }
  getErrors() {
    return this.errors.filter((n) => n && n.length > 0);
  }
};
jo.validLandmarkTypeSide = [
  D.NOSE,
  D.RIGHT_SHOULDER,
  D.RIGHT_ELBOW,
  D.RIGHT_WRIST,
  D.RIGHT_HIP,
  D.RIGHT_KNEE,
  D.RIGHT_ANKLE
], jo.validLandmarkType = [
  D.NOSE,
  D.LEFT_SHOULDER,
  D.RIGHT_SHOULDER,
  D.LEFT_ELBOW,
  D.RIGHT_ELBOW,
  D.LEFT_WRIST,
  D.RIGHT_WRIST,
  D.LEFT_HIP,
  D.RIGHT_HIP,
  D.LEFT_KNEE,
  D.RIGHT_KNEE,
  D.LEFT_ANKLE,
  D.RIGHT_ANKLE,
  D.LEFT_HEEL,
  D.RIGHT_HEEL,
  D.LEFT_FOOT_INDEX,
  D.RIGHT_FOOT_INDEX
];
let x1 = jo;
const V3 = "Mantenha a posição!", UT = {
  FACE_NOT_DETECTED: "Caminhe para trás, enquadrando o corpo inteiro",
  LEFT_HAND_NOT_DETECTED: "Mão esquerda não está aparecendo na imagem",
  RIGHT_HAND_NOT_DETECTED: "Mão direita não está aparecendo na imagem",
  LEFT_FOOT_NOT_DETECTED: "Pé esquerdo não está aparecendo na imagem",
  RIGHT_FOOT_NOT_DETECTED: "Pé direito não está aparecendo na imagem",
  ANGLE_NOT_DETECTED: "Ajuste sua postura",
  LEFT_ARM_TOP: "Abaixe o braço esquerdo",
  LEFT_ARM_BELOW: "Levante o braço esquerdo",
  RIGHT_ARM_TOP: "Abaixe o braço direito",
  RIGHT_ARM_BELOW: "Levante o braço direito",
  LEGS_OPEN: "Aproxime as pernas",
  LEGS_CLOSED: "Afaste as pernas",
  PERSON_IS_FAR: "Aproxime-se da câmera"
}, jT = {
  lite: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
  full: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task"
};
function w_({
  step: e,
  onCaptured: n,
  title: i
}) {
  const { model: o, mirror: l, setMirror: c } = Wo(), d = B.useRef(null), h = B.useRef(null), g = B.useRef(null), m = B.useRef(!1), y = B.useRef(!1), b = B.useRef(null), [A, x] = B.useState(!0), [V, F] = B.useState([]), [q, te] = B.useState(0), [ne, W] = B.useState(null), [ee, ae] = B.useState(null), Ee = B.useRef(0), ce = 3e3, Q = !A && V.length === 0;
  function Ke(Je) {
    if (!Je || Je.length === 0)
      return V3;
    const ue = Je[0];
    return UT[ue] ?? V3;
  }
  B.useEffect(() => {
    y.current = !0;
    let Je = null;
    return (async () => {
      if (!d.current || !h.current) return;
      const ye = d.current, xe = h.current, Te = xe.getContext("2d");
      if (!Te) return;
      const R = () => {
        xe.width = window.innerWidth, xe.height = window.innerHeight;
      };
      R(), window.addEventListener("resize", R);
      try {
        const Y = await Sr.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );
        g.current = await zn.createFromOptions(Y, {
          baseOptions: {
            modelAssetPath: jT[o],
            delegate: "GPU"
          },
          runningMode: "VIDEO",
          numPoses: 1
        }), Je = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720, facingMode: "user" }
        }), ye.srcObject = Je, await new Promise((E) => {
          ye.onloadedmetadata = async () => {
            try {
              await ye.play();
            } catch (j) {
              j?.name !== "AbortError" && console.error(j);
            }
            E();
          };
        }), x(!1);
        let Z = -1, Ne = performance.now();
        const Le = () => {
          if (!y.current || !g.current) return;
          if (m.current) {
            b.current = requestAnimationFrame(Le);
            return;
          }
          const E = performance.now(), j = E - Ne;
          if (Ne = E, ye.currentTime !== Z) {
            Z = ye.currentTime;
            const P = g.current.detectForVideo(ye, E).landmarks?.[0];
            if (Te.clearRect(0, 0, xe.width, xe.height), NT(Te, ye, xe, l), P) {
              const _e = {
                width: xe.width,
                height: xe.height
              }, Se = x1.fromTasksVision(P, _e), be = e === "LATERAL";
              Se.checkErrors(be, _e);
              const ct = Se.getErrors(), Ge = Ke(ct), Qt = performance.now(), _n = 800;
              if (F(ct), W((Gt) => Ge ? Gt ? Qt - Ee.current < _n ? Gt : Gt !== Ge ? (Ee.current = Qt, Ge) : Gt : (Ee.current = Qt, Ge) : (Ee.current = 0, null)), Te.save(), l && (Te.translate(xe.width, 0), Te.scale(-1, 1)), LT(
                Te,
                Se.landmarks,
                Se.connectionsColor,
                {
                  okColor: "#00FF00",
                  badColor: "#FF3333",
                  lineWidth: 4
                }
              ), Te.restore(), ct.length === 0 && !m.current ? te((Gt) => {
                const _i = Math.min(ce, Gt + j);
                if (_i >= ce && !m.current) {
                  m.current = !0;
                  const va = xe.toDataURL("image/jpeg", 0.9);
                  ae(va);
                }
                return _i;
              }) : m.current || te(0), q >= ce - 16) {
                const Gt = xe.toDataURL("image/jpeg", 0.9);
                n(Gt);
                return;
              }
            } else
              F(["LOW_CONFIDENCE"]), te(0);
          }
          b.current = requestAnimationFrame(Le);
        };
        return b.current = requestAnimationFrame(Le), () => {
          window.removeEventListener("resize", R);
        };
      } catch (Y) {
        console.error(Y), F(["Falha ao iniciar câmera/modelo"]), x(!1);
      }
    })(), () => {
      y.current = !1, b.current != null && (cancelAnimationFrame(b.current), b.current = null), Je?.getTracks().forEach((ye) => ye.stop()), g.current?.close();
    };
  }, [o, l, e, n]);
  const nt = Math.max(0, Math.ceil((ce - q) / 1e3));
  return B.useEffect(() => {
    ee && n(ee);
  }, [ee, n]), B.useEffect(() => {
    m.current = !1, te(0), F([]), W(null), ae(null), Ee.current = 0, y.current = !0;
  }, [e]), /* @__PURE__ */ L.jsxs("div", { className: "fixed inset-0 bg-black overflow-hidden", children: [
    A && /* @__PURE__ */ L.jsxs("div", { className: "absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 text-white", children: [
      /* @__PURE__ */ L.jsx("div", { className: "h-14 w-14 animate-spin rounded-full border-4 border-white/30 border-t-white mb-6" }),
      /* @__PURE__ */ L.jsx("div", { className: "text-lg font-semibold tracking-wide", children: "Inicializando câmera…" }),
      /* @__PURE__ */ L.jsx("div", { className: "text-sm text-white/70 mt-1", children: "Preparando detecção de pose" })
    ] }),
    /* @__PURE__ */ L.jsx(
      "video",
      {
        ref: d,
        muted: !0,
        playsInline: !0,
        className: `absolute inset-0 w-screen h-screen object-cover transition-opacity duration-300 ${A ? "opacity-0" : "opacity-100"} ${l ? "scale-x-[-1]" : ""}`
      }
    ),
    /* @__PURE__ */ L.jsx(
      "canvas",
      {
        ref: h,
        className: `absolute inset-0 transition-opacity duration-300 ${A ? "opacity-0" : "opacity-100"}`
      }
    ),
    !A && /* @__PURE__ */ L.jsx("div", { className: "absolute top-0 left-0 right-0 z-20 px-4 pt-4", children: /* @__PURE__ */ L.jsx("div", { className: "mx-auto max-w-xl rounded-xl overflow-hidden shadow-lg", children: /* @__PURE__ */ L.jsx("div", { className: "bg-primary/70 text-white text-center text-lg font-semibold py-3", children: i }) }) }),
    !A && (ne || Q) && /* @__PURE__ */ L.jsx("div", { className: "absolute top-20 left-0 right-0 z-20 px-4", children: /* @__PURE__ */ L.jsx(
      "div",
      {
        className: `mx-auto max-w-xl rounded-xl text-white text-center text-2xl font-light py-3 px-4 transition-colors ${Q ? "bg-emerald-600/90" : "bg-red-600/80"}`,
        children: Q ? `Pose correta — segure ${nt}s` : ne
      }
    ) }),
    Q && /* @__PURE__ */ L.jsx("div", { className: "absolute inset-0 z-10 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ L.jsx("div", { className: "text-white text-7xl font-bold drop-shadow", children: nt }) }),
    /* @__PURE__ */ L.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20", children: /* @__PURE__ */ L.jsx(
      vl,
      {
        variant: "secondary",
        size: "lg",
        className: "px-8 py-6 text-lg rounded-full shadow-lg",
        onClick: () => c(!l),
        children: l ? "Desespelhar" : "Espelhar câmera"
      }
    ) })
  ] });
}
function HT({ onNext: e }) {
  const n = Wo();
  return B.useEffect(() => {
    (!n.user || !n.user.name || !n.user.weightKg || !n.user.heightCm) && e();
  }, [n.user]), !n.user || !n.user.name || !n.user.weightKg || !n.user.heightCm ? null : /* @__PURE__ */ L.jsx(
    w_,
    {
      step: "FRONTAL",
      title: "Pose frontal",
      instruction: "Fique de frente, braços ao longo do corpo, pernas alinhadas. Quando ficar verde, segure 3 segundos.",
      onCaptured: (i) => {
        n.setFrontalImage(i), e();
      }
    }
  );
}
function VT({ onNext: e }) {
  const n = Wo();
  return !n.user || !n.user.name || !n.user.weightKg || !n.user.heightCm || !n.frontalImage ? null : /* @__PURE__ */ L.jsx(
    w_,
    {
      step: "LATERAL",
      title: "Pose lateral",
      instruction: "Vire de lado e levante o braço direito. Quando ficar verde, segure 3 segundos.",
      onCaptured: (i) => {
        n.setSideImage(i), e();
      }
    }
  );
}
const GT = A4(
  "inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function G3({
  className: e,
  variant: n = "default",
  asChild: i = !1,
  ...o
}) {
  const l = i ? S4 : "span";
  return /* @__PURE__ */ L.jsx(
    l,
    {
      "data-slot": "badge",
      "data-variant": n,
      className: yn(GT({ variant: n }), e),
      ...o
    }
  );
}
function BT({
  className: e,
  orientation: n = "horizontal",
  decorative: i = !0,
  ...o
}) {
  return /* @__PURE__ */ L.jsx(
    y9,
    {
      "data-slot": "separator",
      decorative: i,
      orientation: n,
      className: yn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...o
    }
  );
}
function FT({
  onFinish: e,
  onRedoFrontal: n,
  onRedoLateral: i
}) {
  const o = Wo(), l = !!o.frontalImage && !!o.sideImage;
  return /* @__PURE__ */ L.jsx("div", { className: "min-h-screen bg-zinc-50 dark:bg-black p-6", children: /* @__PURE__ */ L.jsxs("div", { className: "mx-auto max-w-6xl space-y-6", children: [
    /* @__PURE__ */ L.jsxs("div", { children: [
      /* @__PURE__ */ L.jsx("h1", { className: "text-2xl font-semibold", children: "Revisão das fotos" }),
      /* @__PURE__ */ L.jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Verifique se as imagens estão corretas antes de confirmar." })
    ] }),
    /* @__PURE__ */ L.jsxs(dy, { children: [
      /* @__PURE__ */ L.jsxs(hy, { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ L.jsxs("div", { className: "flex flex-row justify-between gap-1", children: [
          /* @__PURE__ */ L.jsxs("div", { children: [
            /* @__PURE__ */ L.jsx("span", { className: "text-zinc-500", children: "Nome" }),
            /* @__PURE__ */ L.jsx("div", { className: "font-medium", children: o.user?.name ?? "-" })
          ] }),
          /* @__PURE__ */ L.jsxs("div", { children: [
            /* @__PURE__ */ L.jsx("span", { className: "text-zinc-500", children: "Peso" }),
            /* @__PURE__ */ L.jsxs("div", { className: "font-medium", children: [
              o.user?.weightKg ?? "-",
              " kg"
            ] })
          ] }),
          /* @__PURE__ */ L.jsxs("div", { children: [
            /* @__PURE__ */ L.jsx("span", { className: "text-zinc-500", children: "Altura" }),
            /* @__PURE__ */ L.jsxs("div", { className: "font-medium", children: [
              o.user?.heightCm ?? "-",
              " cm"
            ] })
          ] }),
          /* @__PURE__ */ L.jsxs("div", { children: [
            /* @__PURE__ */ L.jsx("span", { className: "text-zinc-500", children: "Modelo" }),
            /* @__PURE__ */ L.jsx("div", { className: "font-medium capitalize", children: o.model })
          ] })
        ] }),
        /* @__PURE__ */ L.jsx(BT, {}),
        /* @__PURE__ */ L.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ L.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ L.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ L.jsx(G3, { variant: "secondary", children: "Frontal" }),
              /* @__PURE__ */ L.jsx(vl, { size: "sm", variant: "ghost", onClick: n, children: "Refazer" })
            ] }),
            o.frontalImage ? /* @__PURE__ */ L.jsx(
              "img",
              {
                src: o.frontalImage,
                alt: "Foto frontal",
                className: "w-full rounded-xl border border-zinc-200 dark:border-zinc-800"
              }
            ) : /* @__PURE__ */ L.jsx(B3, {})
          ] }),
          /* @__PURE__ */ L.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ L.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ L.jsx(G3, { variant: "secondary", children: "Lateral" }),
              /* @__PURE__ */ L.jsx(vl, { size: "sm", variant: "ghost", onClick: i, children: "Refazer" })
            ] }),
            o.sideImage ? /* @__PURE__ */ L.jsx(
              "img",
              {
                src: o.sideImage,
                alt: "Foto lateral",
                className: "w-full rounded-xl border border-zinc-200 dark:border-zinc-800"
              }
            ) : /* @__PURE__ */ L.jsx(B3, {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ L.jsx(py, { className: "flex items-center justify-end gap-3 px-6 py-4 bg-zinc-50 dark:bg-zinc-950", children: /* @__PURE__ */ L.jsx(
        vl,
        {
          size: "lg",
          disabled: !l,
          onClick: () => {
            o.reset(), e();
          },
          children: "Finalizar"
        }
      ) })
    ] })
  ] }) });
}
function B3() {
  return /* @__PURE__ */ L.jsx("div", { className: "h-72 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-sm text-zinc-500", children: "Imagem não capturada" });
}
function ZT({ host: e }) {
  const n = Wo(), [i, o] = B.useState("setup");
  return i === "setup" ? /* @__PURE__ */ L.jsx(IS, { onNext: () => o("frontal") }) : i === "frontal" ? /* @__PURE__ */ L.jsx(HT, { onNext: () => o("lateral") }) : i === "lateral" ? /* @__PURE__ */ L.jsx(VT, { onNext: () => o("review") }) : /* @__PURE__ */ L.jsx(
    FT,
    {
      onRedoFrontal: () => o("frontal"),
      onRedoLateral: () => o("lateral"),
      onFinish: () => {
        e.dispatchEvent(
          new CustomEvent("shaped:finished", {
            detail: {
              frontalImage: n.frontalImage,
              sideImage: n.sideImage,
              userData: n.user
            },
            bubbles: !0,
            composed: !0
          })
        ), n.reset(), o("setup");
      }
    }
  );
}
function IT({ token: e, host: n }) {
  return console.log(e), /* @__PURE__ */ L.jsx(Y5, { children: /* @__PURE__ */ L.jsx(ZT, { host: n }) });
}
const qT = `@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-emerald-600:oklch(59.6% .145 163.225);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-200:oklch(92% .004 286.32);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-950:oklch(14.1% .005 285.823);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-xl:36rem;--container-6xl:72rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-7xl:4.5rem;--text-7xl--line-height:1;--font-weight-light:300;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){*{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}body{background-color:var(--background);color:var(--foreground)}}@layer components;@layer utilities{.\\@container\\/card-header{container:card-header/inline-size}.pointer-events-none{pointer-events:none}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.top-4{top:calc(var(--spacing)*4)}.top-20{top:calc(var(--spacing)*20)}.right-0{right:calc(var(--spacing)*0)}.right-4{right:calc(var(--spacing)*4)}.bottom-6{bottom:calc(var(--spacing)*6)}.left-0{left:calc(var(--spacing)*0)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.col-start-2{grid-column-start:2}.row-span-2{grid-row:span 2/span 2}.row-start-1{grid-row-start:1}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing)*-1)}.mx-auto{margin-inline:auto}.my-1{margin-block:calc(var(--spacing)*1)}.mt-1{margin-top:calc(var(--spacing)*1)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-flex{display:inline-flex}.aspect-square{aspect-ratio:1}.size-2{width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.size-3\\.5{width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.size-10{width:calc(var(--spacing)*10);height:calc(var(--spacing)*10)}.h-2{height:calc(var(--spacing)*2)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-14{height:calc(var(--spacing)*14)}.h-72{height:calc(var(--spacing)*72)}.h-\\[1\\.2rem\\]{height:1.2rem}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\(--radix-dropdown-menu-content-available-height\\){max-height:var(--radix-dropdown-menu-content-available-height)}.min-h-screen{min-height:100vh}.w-14{width:calc(var(--spacing)*14)}.w-\\[1\\.2rem\\]{width:1.2rem}.w-fit{width:fit-content}.w-full{width:100%}.w-screen{width:100vw}.max-w-6xl{max-width:var(--container-6xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-xl{max-width:var(--container-xl)}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-\\[8rem\\]{min-width:8rem}.flex-1{flex:1}.shrink-0{flex-shrink:0}.origin-\\(--radix-dropdown-menu-content-transform-origin\\){transform-origin:var(--radix-dropdown-menu-content-transform-origin)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.scale-0{--tw-scale-x:0%;--tw-scale-y:0%;--tw-scale-z:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-x-\\[-1\\]{--tw-scale-x:-1;scale:var(--tw-scale-x)var(--tw-scale-y)}.rotate-0{rotate:none}.rotate-90{rotate:90deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.cursor-default{cursor:default}.resize{resize:both}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-\\[auto_auto\\]{grid-template-rows:auto auto}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}.self-start{align-self:flex-start}.justify-self-end{justify-self:flex-end}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:3.40282e38px}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.border{border-style:var(--tw-border-style);border-width:1px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-border{border-color:var(--border)}.border-input{border-color:var(--input)}.border-transparent{border-color:#0000}.border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.border-zinc-200{border-color:var(--color-zinc-200)}.border-zinc-300{border-color:var(--color-zinc-300)}.border-t-white{border-top-color:var(--color-white)}.bg-background{background-color:var(--background)}.bg-black{background-color:var(--color-black)}.bg-black\\/80{background-color:#000c}@supports (color:color-mix(in lab,red,red)){.bg-black\\/80{background-color:color-mix(in oklab,var(--color-black)80%,transparent)}}.bg-border{background-color:var(--border)}.bg-card{background-color:var(--card)}.bg-destructive{background-color:var(--destructive)}.bg-emerald-600\\/90{background-color:#009767e6}@supports (color:color-mix(in lab,red,red)){.bg-emerald-600\\/90{background-color:color-mix(in oklab,var(--color-emerald-600)90%,transparent)}}.bg-popover{background-color:var(--popover)}.bg-primary,.bg-primary\\/20{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/20{background-color:color-mix(in oklab,var(--primary)20%,transparent)}}.bg-primary\\/70{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/70{background-color:color-mix(in oklab,var(--primary)70%,transparent)}}.bg-red-600\\/80{background-color:#e40014cc}@supports (color:color-mix(in lab,red,red)){.bg-red-600\\/80{background-color:color-mix(in oklab,var(--color-red-600)80%,transparent)}}.bg-secondary{background-color:var(--secondary)}.bg-transparent{background-color:#0000}.bg-zinc-50{background-color:var(--color-zinc-50)}.fill-current{fill:currentColor}.fill-primary{fill:var(--primary)}.object-cover{object-fit:cover}.p-1{padding:calc(var(--spacing)*1)}.p-6{padding:calc(var(--spacing)*6)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.pt-4{padding-top:calc(var(--spacing)*4)}.pr-2{padding-right:calc(var(--spacing)*2)}.pl-8{padding-left:calc(var(--spacing)*8)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-7xl{font-size:var(--text-7xl);line-height:var(--tw-leading,var(--text-7xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.whitespace-nowrap{white-space:nowrap}.text-card-foreground{color:var(--card-foreground)}.text-foreground{color:var(--foreground)}.text-muted-foreground{color:var(--muted-foreground)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-red-500{color:var(--color-red-500)}.text-secondary-foreground{color:var(--secondary-foreground)}.text-white{color:var(--color-white)}.text-white\\/70{color:#ffffffb3}@supports (color:color-mix(in lab,red,red)){.text-white\\/70{color:color-mix(in oklab,var(--color-white)70%,transparent)}}.text-zinc-500{color:var(--color-zinc-500)}.text-zinc-600{color:var(--color-zinc-600)}.capitalize{text-transform:capitalize}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline-hidden{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.outline-hidden{outline-offset:2px;outline:2px solid #0000}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition-\\[color\\,box-shadow\\]{transition-property:color,box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.group-data-\\[disabled\\=true\\]\\:pointer-events-none:is(:where(.group)[data-disabled=true] *){pointer-events:none}.group-data-\\[disabled\\=true\\]\\:opacity-50:is(:where(.group)[data-disabled=true] *){opacity:.5}.group-data-\\[size\\=default\\]\\/switch\\:size-4:is(:where(.group\\/switch)[data-size=default] *){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.group-data-\\[size\\=sm\\]\\/switch\\:size-3:is(:where(.group\\/switch)[data-size=sm] *){width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-50:is(:where(.peer):disabled~*){opacity:.5}.selection\\:bg-primary ::selection{background-color:var(--primary)}.selection\\:bg-primary::selection{background-color:var(--primary)}.selection\\:text-primary-foreground ::selection{color:var(--primary-foreground)}.selection\\:text-primary-foreground::selection{color:var(--primary-foreground)}.file\\:inline-flex::file-selector-button{display:inline-flex}.file\\:h-7::file-selector-button{height:calc(var(--spacing)*7)}.file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.file\\:bg-transparent::file-selector-button{background-color:#0000}.file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.file\\:text-foreground::file-selector-button{color:var(--foreground)}.placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}@media(hover:hover){.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}.hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}.hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}}.hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.hover\\:underline:hover{text-decoration-line:underline}}.focus\\:bg-accent:focus{background-color:var(--accent)}.focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.focus-visible\\:border-ring:focus-visible{border-color:var(--ring)}.focus-visible\\:ring-\\[3px\\]:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-destructive\\/20:focus-visible{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:ring-destructive\\/20:focus-visible{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.has-data-\\[slot\\=card-action\\]\\:grid-cols-\\[1fr_auto\\]:has([data-slot=card-action]){grid-template-columns:1fr auto}.has-\\[\\>svg\\]\\:px-1\\.5:has(>svg){padding-inline:calc(var(--spacing)*1.5)}.has-\\[\\>svg\\]\\:px-2\\.5:has(>svg){padding-inline:calc(var(--spacing)*2.5)}.has-\\[\\>svg\\]\\:px-3:has(>svg){padding-inline:calc(var(--spacing)*3)}.has-\\[\\>svg\\]\\:px-4:has(>svg){padding-inline:calc(var(--spacing)*4)}.aria-invalid\\:border-destructive[aria-invalid=true]{border-color:var(--destructive)}.aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[inset\\]\\:pl-8[data-inset]{padding-left:calc(var(--spacing)*8)}.data-\\[orientation\\=horizontal\\]\\:h-px[data-orientation=horizontal]{height:1px}.data-\\[orientation\\=horizontal\\]\\:w-full[data-orientation=horizontal]{width:100%}.data-\\[orientation\\=vertical\\]\\:h-full[data-orientation=vertical]{height:100%}.data-\\[orientation\\=vertical\\]\\:w-px[data-orientation=vertical]{width:1px}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(2*var(--spacing)*-1)}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(2*var(--spacing))}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(2*var(--spacing)*-1)}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(2*var(--spacing))}.data-\\[size\\=default\\]\\:h-\\[1\\.15rem\\][data-size=default]{height:1.15rem}.data-\\[size\\=default\\]\\:w-8[data-size=default]{width:calc(var(--spacing)*8)}.data-\\[size\\=sm\\]\\:h-3\\.5[data-size=sm]{height:calc(var(--spacing)*3.5)}.data-\\[size\\=sm\\]\\:w-6[data-size=sm]{width:calc(var(--spacing)*6)}.data-\\[state\\=checked\\]\\:translate-x-\\[calc\\(100\\%-2px\\)\\][data-state=checked]{--tw-translate-x: calc(100% - 2px) ;translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]{background-color:var(--primary)}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:var(--accent)}.data-\\[state\\=open\\]\\:text-accent-foreground[data-state=open]{color:var(--accent-foreground)}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-input[data-state=unchecked]{background-color:var(--input)}.data-\\[variant\\=destructive\\]\\:text-destructive[data-variant=destructive]{color:var(--destructive)}.data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/10[data-variant=destructive]:focus{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/10[data-variant=destructive]:focus{background-color:color-mix(in oklab,var(--destructive)10%,transparent)}}.data-\\[variant\\=destructive\\]\\:focus\\:text-destructive[data-variant=destructive]:focus{color:var(--destructive)}@media(min-width:48rem){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}.dark\\:scale-0:is(.dark *){--tw-scale-x:0%;--tw-scale-y:0%;--tw-scale-z:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.dark\\:scale-100:is(.dark *){--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.dark\\:-rotate-90:is(.dark *){rotate:-90deg}.dark\\:rotate-0:is(.dark *){rotate:none}.dark\\:border-input:is(.dark *){border-color:var(--input)}.dark\\:border-zinc-700:is(.dark *){border-color:var(--color-zinc-700)}.dark\\:border-zinc-800:is(.dark *){border-color:var(--color-zinc-800)}.dark\\:bg-black:is(.dark *){background-color:var(--color-black)}.dark\\:bg-destructive\\/60:is(.dark *){background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-destructive\\/60:is(.dark *){background-color:color-mix(in oklab,var(--destructive)60%,transparent)}}.dark\\:bg-input\\/30:is(.dark *){background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-input\\/30:is(.dark *){background-color:color-mix(in oklab,var(--input)30%,transparent)}}.dark\\:bg-zinc-950:is(.dark *){background-color:var(--color-zinc-950)}.dark\\:text-zinc-400:is(.dark *){color:var(--color-zinc-400)}@media(hover:hover){.dark\\:hover\\:bg-accent\\/50:is(.dark *):hover{background-color:var(--accent)}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-accent\\/50:is(.dark *):hover{background-color:color-mix(in oklab,var(--accent)50%,transparent)}}.dark\\:hover\\:bg-input\\/50:is(.dark *):hover{background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-input\\/50:is(.dark *):hover{background-color:color-mix(in oklab,var(--input)50%,transparent)}}}.dark\\:focus-visible\\:ring-destructive\\/40:is(.dark *):focus-visible{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.dark\\:focus-visible\\:ring-destructive\\/40:is(.dark *):focus-visible{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}}.dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}}.dark\\:data-\\[state\\=checked\\]\\:bg-primary-foreground:is(.dark *)[data-state=checked]{background-color:var(--primary-foreground)}.dark\\:data-\\[state\\=unchecked\\]\\:bg-foreground:is(.dark *)[data-state=unchecked]{background-color:var(--foreground)}.dark\\:data-\\[state\\=unchecked\\]\\:bg-input\\/80:is(.dark *)[data-state=unchecked]{background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.dark\\:data-\\[state\\=unchecked\\]\\:bg-input\\/80:is(.dark *)[data-state=unchecked]{background-color:color-mix(in oklab,var(--input)80%,transparent)}}.dark\\:data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/20:is(.dark *)[data-variant=destructive]:focus{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.dark\\:data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/20:is(.dark *)[data-variant=destructive]:focus{background-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-3 svg:not([class*=size-]){width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground svg:not([class*=text-]){color:var(--muted-foreground)}.\\[\\.border-b\\]\\:pb-6.border-b{padding-bottom:calc(var(--spacing)*6)}.\\[\\.border-t\\]\\:pt-6.border-t{padding-top:calc(var(--spacing)*6)}:is(.data-\\[variant\\=destructive\\]\\:\\*\\:\\[svg\\]\\:\\!text-destructive[data-variant=destructive]>*):is(svg){color:var(--destructive)!important}.\\[\\&\\>svg\\]\\:pointer-events-none>svg{pointer-events:none}.\\[\\&\\>svg\\]\\:size-3>svg{width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}@media(hover:hover){a.\\[a\\&\\]\\:hover\\:bg-accent:hover{background-color:var(--accent)}a.\\[a\\&\\]\\:hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){a.\\[a\\&\\]\\:hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}a.\\[a\\&\\]\\:hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){a.\\[a\\&\\]\\:hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}a.\\[a\\&\\]\\:hover\\:bg-secondary\\/90:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){a.\\[a\\&\\]\\:hover\\:bg-secondary\\/90:hover{background-color:color-mix(in oklab,var(--secondary)90%,transparent)}}a.\\[a\\&\\]\\:hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}a.\\[a\\&\\]\\:hover\\:underline:hover{text-decoration-line:underline}}}@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}:root,:host{--radius:.65rem;--background:oklch(100% 0 0);--foreground:oklch(14.1% .005 285.823);--card:oklch(100% 0 0);--card-foreground:oklch(14.1% .005 285.823);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.1% .005 285.823);--primary:oklch(64.8% .2 131.684);--primary-foreground:oklch(98.6% .031 120.757);--secondary:oklch(96.7% .001 286.375);--secondary-foreground:oklch(21% .006 285.885);--muted:oklch(96.7% .001 286.375);--muted-foreground:oklch(55.2% .016 285.938);--accent:oklch(96.7% .001 286.375);--accent-foreground:oklch(21% .006 285.885);--destructive:oklch(57.7% .245 27.325);--border:oklch(92% .004 286.32);--input:oklch(92% .004 286.32);--ring:oklch(84.1% .238 128.85);--chart-1:oklch(87.1% .15 154.449);--chart-2:oklch(72.3% .219 149.579);--chart-3:oklch(62.7% .194 149.214);--chart-4:oklch(52.7% .154 150.069);--chart-5:oklch(44.8% .119 151.328);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.1% .005 285.823);--sidebar-primary:oklch(64.8% .2 131.684);--sidebar-primary-foreground:oklch(98.6% .031 120.757);--sidebar-accent:oklch(96.7% .001 286.375);--sidebar-accent-foreground:oklch(21% .006 285.885);--sidebar-border:oklch(92% .004 286.32);--sidebar-ring:oklch(84.1% .238 128.85)}.dark{--background:oklch(14.1% .005 285.823);--foreground:oklch(98.5% 0 0);--card:oklch(21% .006 285.885);--card-foreground:oklch(98.5% 0 0);--popover:oklch(21% .006 285.885);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(64.8% .2 131.684);--primary-foreground:oklch(98.6% .031 120.757);--secondary:oklch(27.4% .006 286.033);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(27.4% .006 286.033);--muted-foreground:oklch(70.5% .015 286.067);--accent:oklch(27.4% .006 286.033);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(70.4% .191 22.216);--border:oklch(100% 0 0/.1);--input:oklch(100% 0 0/.15);--ring:oklch(40.5% .101 131.063);--chart-1:oklch(87.1% .15 154.449);--chart-2:oklch(72.3% .219 149.579);--chart-3:oklch(62.7% .194 149.214);--chart-4:oklch(52.7% .154 150.069);--chart-5:oklch(44.8% .119 151.328);--sidebar:oklch(21% .006 285.885);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(76.8% .233 130.85);--sidebar-primary-foreground:oklch(98.6% .031 120.757);--sidebar-accent:oklch(27.4% .006 286.033);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(100% 0 0/.1);--sidebar-ring:oklch(40.5% .101 131.063)}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))}}`;
class YT extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById("shaped-widget-styles")) {
      const l = document.createElement("style");
      l.id = "shaped-widget-styles", l.textContent = qT, document.head.appendChild(l);
    }
    const n = document.createElement("div");
    n.style.cssText = "width:100%;height:100%;", this.appendChild(n);
    const i = this.getAttribute("token") ?? "", o = this.getAttribute("api-url") ?? "";
    Z5.createRoot(n).render(
      Ve.createElement(IT, { token: i, apiUrl: o, host: this })
    );
  }
}
customElements.get("shaped-widget") || customElements.define("shaped-widget", YT);
