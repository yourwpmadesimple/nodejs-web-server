(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    11: function (e, n, t) {},
    12: function (e, n, t) {
      "use strict";
      t.r(n);
      var c = t(0),
        a = t.n(c),
        o = t(4),
        r = t(1),
        u = t(2),
        s = function (e) {
          var n = Object(c.useState)(!1),
            t = Object(r.a)(n, 2),
            a = t[0],
            o = t[1],
            s = Object(c.useReducer)(function (e, n) {
              var t = Object(r.a)(n, 1)[0];
              return [].concat(Object(u.a)(e), [t]);
            }, []),
            l = Object(r.a)(s, 2),
            d = l[0],
            i = l[1];
          return (
            Object(c.useEffect)(function () {
              (window.ws = new WebSocket(e)),
                window.ws.addEventListener("open", function () {
                  o(!0);
                }),
                window.ws.addEventListener("close", function () {
                  o(!1);
                }),
                window.ws.addEventListener("message", function (e) {
                  var n = e.data;
                  i([].concat(Object(u.a)(d), [n]));
                });
            }, []),
            {
              connected: a,
              messages: d,
              send: function (e) {
                window.ws.send(e);
              },
            }
          );
        },
        l = (t(11), { backgroundColor: "black", color: "#0F0" }),
        d = { backgroundColor: "red", color: "yellow" };
      Object(o.render)(
        a.a.createElement(function () {
          var e = s("ws://localhost:3000"),
            n = e.connected,
            t = e.messages,
            o = e.send,
            u = Object(c.useState)(""),
            i = Object(r.a)(u, 2),
            w = i[0],
            f = i[1],
            b = Object(c.useRef)(null);
          return (
            Object(c.useEffect)(function () {
              b.current.focus();
            }),
            a.a.createElement(
              "div",
              { style: n ? l : d },
              a.a.createElement("h1", null, n ? "Connected" : "Disconnected"),
              a.a.createElement(
                "div",
                null,
                t.map(function (e, n) {
                  return a.a.createElement("p", { key: n }, e);
                })
              ),
              a.a.createElement(
                "span",
                null,
                a.a.createElement("label", null, ">"),
                a.a.createElement("input", {
                  type: "text",
                  id: "message",
                  ref: b,
                  value: w,
                  onChange: function (e) {
                    return f(e.target.value);
                  },
                  onKeyPress: function (e) {
                    "Enter" === e.key && (o(w), f(""));
                  },
                })
              )
            )
          );
        }, null),
        document.getElementById("root")
      );
    },
    5: function (e, n, t) {
      e.exports = t(12);
    },
  },
  [[5, 1, 2]],
]);
//# sourceMappingURL=main.5b3598c6.chunk.js.map
