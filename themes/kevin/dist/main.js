import { jsx as s } from "react/jsx-runtime";
import { createContext as m, useContext as p } from "react";
const u = {
  wrapper: "border border-k-primary p-4 rounded-lg bg-k-secondary text-k-primary"
}, x = {
  Button: u
}, i = m(null), b = ({ children: o, className: a, onClick: c, href: n }) => {
  var e;
  const t = p(i), r = `${(e = t == null ? void 0 : t.Button) == null ? void 0 : e.wrapper} ${a || ""}`;
  return n ? /* @__PURE__ */ s("a", { href: n, className: r, children: o }) : /* @__PURE__ */ s("button", { "data-testid": "button", className: r, onClick: c, children: o });
}, f = {
  content: ["./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "k-primary": "#00ff00",
        "k-secondary": "#444"
      }
    }
  },
  plugins: []
};
export {
  b as Button,
  i as ThemeContext,
  x as styles,
  f as tailwindConfig
};
