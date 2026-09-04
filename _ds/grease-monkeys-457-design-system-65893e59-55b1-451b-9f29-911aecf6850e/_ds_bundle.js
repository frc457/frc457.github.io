/* @ds-bundle: {"format":4,"namespace":"GreaseMonkeys457DesignSystem_65893e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"fb9cf07a298c","components/core/Button.jsx":"c398b12efbec","components/core/Card.jsx":"3cf2735b5323","components/core/IconButton.jsx":"85bf8d83b598","components/core/Tag.jsx":"5f78c607381b","components/feedback/Dialog.jsx":"9353100ac6ed","components/feedback/Tooltip.jsx":"74c410f6ba58","components/forms/Checkbox.jsx":"1e9474d73c89","components/forms/Input.jsx":"9fc6dd400744","components/forms/Radio.jsx":"50b68a1d3bcd","components/forms/Select.jsx":"0739809703f2","components/forms/Switch.jsx":"abdb6eee701a","components/navigation/Tabs.jsx":"8024f6eaee22","ui_kits/scouting/Screens.jsx":"5e16e1a2bca8","ui_kits/website/Home.jsx":"0501bbb5285f","ui_kits/website/Nav.jsx":"ceb7bba02957","ui_kits/website/Roster.jsx":"df9c12809213","ui_kits/website/Sponsors.jsx":"1f9a6a5a878c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GreaseMonkeys457DesignSystem_65893e = window.GreaseMonkeys457DesignSystem_65893e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "neutral"
}) {
  const tones = {
    neutral: {
      background: "var(--gm-surface-sunken)",
      color: "var(--gm-black)",
      border: "1.5px solid var(--gm-gunmetal-light)"
    },
    blue: {
      background: "var(--brand-primary)",
      color: "var(--gm-white)",
      border: "1.5px solid var(--brand-primary)"
    },
    success: {
      background: "#e7f5eb",
      color: "var(--success)",
      border: "1.5px solid var(--success)"
    },
    warning: {
      background: "#fbf1de",
      color: "var(--warning)",
      border: "1.5px solid var(--warning)"
    },
    danger: {
      background: "#fbe9e9",
      color: "var(--danger)",
      border: "1.5px solid var(--danger)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "3px 10px",
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: "12px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    padding: "8px 14px",
    fontSize: "13px"
  },
  md: {
    padding: "11px 20px",
    fontSize: "15px"
  },
  lg: {
    padding: "14px 26px",
    fontSize: "16px"
  }
};
function variantStyle(variant) {
  switch (variant) {
    case "secondary":
      return {
        background: "var(--gm-white)",
        color: "var(--gm-black)",
        border: "var(--border-thick) solid var(--gm-black)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--brand-primary)",
        border: "var(--border-thick) solid transparent"
      };
    case "danger":
      return {
        background: "var(--danger)",
        color: "var(--gm-white)",
        border: "var(--border-thick) solid var(--danger)"
      };
    default:
      return {
        background: "var(--brand-primary)",
        color: "var(--gm-white)",
        border: "var(--border-thick) solid var(--brand-primary)"
      };
  }
}
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  icon,
  onClick,
  type = "button",
  style
}) {
  const vs = variantStyle(variant);
  const sz = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      transition: "transform var(--duration-fast) var(--ease-standard), filter var(--duration-fast) var(--ease-standard)",
      ...sz,
      ...vs,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.filter = "none";
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(1.08)";
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "24px",
  elevated = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gm-white)",
      borderRadius: "var(--radius-md)",
      border: "1.5px solid var(--gm-border)",
      padding,
      boxShadow: elevated ? "var(--shadow-md)" : "var(--shadow-sm)"
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = "secondary",
  size = "md",
  onClick,
  disabled = false
}) {
  const dim = size === "sm" ? 32 : size === "lg" ? 48 : 40;
  const bg = variant === "primary" ? "var(--brand-primary)" : "var(--gm-white)";
  const color = variant === "primary" ? "var(--gm-white)" : "var(--gm-black)";
  const border = variant === "primary" ? "var(--border-thick) solid var(--brand-primary)" : "var(--border-thick) solid var(--gm-black)";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled,
    style: {
      width: dim,
      height: dim,
      borderRadius: "var(--radius-sm)",
      background: bg,
      color,
      border,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "filter var(--duration-fast) var(--ease-standard)"
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(1.1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 10px 5px 12px",
      borderRadius: "var(--radius-sm)",
      background: "var(--gm-white)",
      border: "1.5px solid var(--gm-black)",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "13px",
      color: "var(--gm-black)"
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--gm-gunmetal-dark)",
      fontSize: "14px",
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--gm-white)",
      borderRadius: "var(--radius-md)",
      border: "1.5px solid var(--gm-black)",
      boxShadow: "var(--shadow-lg)",
      width: 420,
      maxWidth: "90vw",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 18
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "none",
      fontSize: 20,
      cursor: "pointer",
      color: "var(--gm-gunmetal-dark)"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: "var(--leading-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      justifyContent: "flex-end",
      gap: 10
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  children,
  label,
  side = "top"
}) {
  const [show, setShow] = useState(false);
  const pos = side === "top" ? {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      background: "var(--gm-black)",
      color: "var(--gm-white)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      fontSize: 12,
      fontFamily: "var(--font-body)",
      whiteSpace: "nowrap",
      zIndex: 50
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-sm)",
      border: "1.5px solid var(--gm-black)",
      background: checked ? "var(--brand-primary)" : "var(--gm-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      display: "none"
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  required = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      fontFamily: "var(--font-heading)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)"
    }
  }, " *")), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      padding: "10px 12px",
      fontSize: 15,
      fontFamily: "var(--font-body)",
      border: `1.5px solid ${error ? "var(--danger)" : "var(--gm-black)"}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      background: "var(--gm-white)"
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(48,92,222,0.25)";
      e.currentTarget.style.borderColor = "var(--brand-primary)";
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--gm-black)";
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--danger)"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: "1.5px solid var(--gm-black)",
      background: "var(--gm-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--brand-primary)"
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    style: {
      display: "none"
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      fontFamily: "var(--font-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      padding: "10px 12px",
      fontSize: 15,
      fontFamily: "var(--font-body)",
      border: "1.5px solid var(--gm-black)",
      borderRadius: "var(--radius-sm)",
      background: "var(--gm-white)",
      outline: "none"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onChange,
    style: {
      width: 40,
      height: 22,
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid var(--gm-black)",
      background: checked ? "var(--brand-primary)" : "var(--gm-white)",
      position: "relative",
      transition: "background var(--duration-base) var(--ease-standard)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 20 : 2,
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: checked ? "var(--gm-white)" : "var(--gm-black)",
      transition: "left var(--duration-base) var(--ease-standard)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  tabs,
  defaultIndex = 0
}) {
  const [active, setActive] = useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "2px solid var(--gm-black)"
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.label,
    onClick: () => setActive(i),
    style: {
      padding: "10px 18px",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 14,
      color: active === i ? "var(--brand-primary)" : "var(--gm-gunmetal-dark)",
      borderBottom: active === i ? "3px solid var(--brand-primary)" : "3px solid transparent",
      marginBottom: "-2px"
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 4px",
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scouting/Screens.jsx
try { (() => {
function PitMode({
  Card,
  Badge,
  Input,
  Select
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "20px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 16
    }
  }, "Pit Scouting \u2014 Team 118"), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "District")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Drivetrain",
    placeholder: "Swerve"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Weight class",
    options: [{
      value: "light",
      label: "< 100 lb"
    }, {
      value: "heavy",
      label: "100-125 lb"
    }]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Auto routine",
    placeholder: "3-piece left"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Notes",
    placeholder: "Fast cycle, low ground clearance"
  }))));
}
function MatchList({
  Badge
}) {
  const matches = [{
    num: 12,
    red: ["457", "118", "204"],
    blue: ["88", "312", "45"],
    status: "Upcoming"
  }, {
    num: 11,
    red: ["21", "9", "457"],
    blue: ["330", "60", "199"],
    status: "Won"
  }, {
    num: 10,
    red: ["457", "500", "77"],
    blue: ["144", "8", "266"],
    status: "Lost"
  }];
  const tone = s => s === "Won" ? "success" : s === "Lost" ? "danger" : "blue";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, matches.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.num,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      border: "1.5px solid var(--gm-border)",
      borderRadius: 8,
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-numeral)",
      fontSize: 22,
      width: 48
    }
  }, m.num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "#c23b3b",
      fontWeight: 700
    }
  }, m.red.join(" · ")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--brand-primary)",
      fontWeight: 700
    }
  }, m.blue.join(" · ")), /*#__PURE__*/React.createElement(Badge, {
    tone: tone(m.status)
  }, m.status))));
}
function TeamStats({
  Card
}) {
  const rows = [{
    label: "Avg. Auto Points",
    value: "8.4"
  }, {
    label: "Avg. Teleop Points",
    value: "34.1"
  }, {
    label: "Climb Success Rate",
    value: "82%"
  }, {
    label: "Matches Played",
    value: "27"
  }];
  return /*#__PURE__*/React.createElement(Card, {
    padding: "20px"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 16,
      marginBottom: 14
    }
  }, "Team 457 \u2014 Season Stats"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 14
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-numeral)",
      fontSize: 30,
      color: "var(--brand-primary)"
    }
  }, r.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, r.label)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scouting/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const SPONSORS = ["Valero", "Gene-HAAS Foundation", "Toyota", "Boeing", "Texas Workforce Commission", "FIRST In Texas", "RobotNext", "South San CTE"];
function Home({
  Button,
  Badge,
  Card
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gm-royal-blue)",
      color: "var(--gm-white)",
      padding: "72px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Est. 1999"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "clamp(32px,5vw,52px)",
      margin: "18px 0 8px"
    }
  }, "FRC Team 457 \u2014 The Grease Monkeys"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      opacity: 0.9
    }
  }, "South San Antonio High School \xB7 San Antonio, TX"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      gap: 12,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Support Us"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: "var(--gm-white)"
    }
  }, "Watch on YouTube"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "48px 24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 20,
      marginBottom: 18
    }
  }, "Thank you to our sponsors"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, SPONSORS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      border: "1.5px solid var(--gm-border)",
      borderRadius: 8,
      padding: "18px 12px",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-secondary)"
    }
  }, s)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px 48px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "24px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "Weekly Update"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "16 weeks after kickoff")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: "var(--leading-body)",
      margin: 0
    }
  }, "Our Monkeys made progress! After competition after competition we made it to State \u2014 even though we didn't make playoffs, we still made achievements, such as our Industrial Design Award, our first design award in 25 years as a team. We had a blast from the past in our Rebuild season, gaining 9 new members!"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px 56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 18
    }
  }, "FIRST Robotics Competition"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-secondary)",
      maxWidth: 640,
      margin: "10px auto"
    }
  }, "Students design, build, and program industrial-scale robots to take on a new challenge each season \u2014 working alongside professional mentors to build engineering, business, and leadership skills.")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
function NavBar({
  page,
  setPage
}) {
  const items = [["home", "Home"], ["updates", "2026 - REBUILT"], ["roster", "Our Team"], ["robots", "Our Robots"], ["sponsors", "Sponsors"], ["impact", "Impact/Outreach"], ["support", "Support Us"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--gm-white)",
      borderBottom: "3px solid var(--gm-black)",
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: 28,
      padding: "10px 24px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-full-color.png",
    alt: "Grease Monkeys 457",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: 18
    }
  }, "The Grease Monkeys"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 18,
      marginLeft: "auto",
      flexWrap: "wrap"
    }
  }, items.map(([key, label]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => setPage(key),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 13,
      padding: "6px 2px",
      color: page === key ? "var(--brand-primary)" : "var(--gm-black)",
      borderBottom: page === key ? "3px solid var(--brand-primary)" : "3px solid transparent"
    }
  }, label)))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--gm-black)",
      color: "var(--gm-white)",
      padding: "32px 24px",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
      fontFamily: "var(--font-body)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "South San Antonio High School \xB7 Team 457 \xB7 Est. 1999"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:frcteam457@gmail.com",
    style: {
      color: "var(--gm-royal-blue-light)"
    }
  }, "frcteam457@gmail.com")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Roster.jsx
try { (() => {
const STUDENTS = ["Team Captain", "Lead Programmer", "Mechanical Lead", "CAD Lead", "Electrical Lead", "Media Lead", "Scouting Lead", "Business Lead", "Drive Team", "Build Team", "Outreach Team", "Rookie Member"];
const MENTORS = ["Head Mentor — Valero", "Mentor — Boeing", "Mentor — Toyota", "Mentor — Alumni", "Mentor — Parent Volunteer"];
function Roster({
  Tabs,
  Badge
}) {
  const grid = items => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14
    }
  }, items.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      border: "1.5px solid var(--gm-border)",
      borderRadius: 8,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--gm-surface-sunken)",
      border: "1.5px solid var(--gm-gunmetal-light)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 14
    }
  }, n))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 24px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 30,
      marginBottom: 4
    }
  }, "Our Team"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--text-secondary)",
      marginBottom: 24
    }
  }, "12 active student members \xB7 5 mentors this season ", /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "2026")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      label: "Students",
      content: grid(STUDENTS)
    }, {
      label: "Mentors",
      content: grid(MENTORS)
    }]
  }));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Roster.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sponsors.jsx
try { (() => {
const TIERS = [{
  name: "Platinum",
  sponsors: ["Valero", "Gene-HAAS Foundation"]
}, {
  name: "Gold",
  sponsors: ["Toyota", "Boeing"]
}, {
  name: "Silver",
  sponsors: ["Texas Workforce Commission", "FIRST In Texas", "RobotNext", "South San CTE"]
}];
function Sponsors({
  Button,
  Card
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 24px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 30,
      marginBottom: 8
    }
  }, "Sponsors"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--text-secondary)",
      maxWidth: 640,
      marginBottom: 28
    }
  }, "The Grease Monkeys graciously thank our sponsors for the 2025-2026 school year, and the South San ISD administration for supporting a safe, engaging program."), TIERS.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 16,
      marginBottom: 10,
      color: "var(--gm-royal-blue)"
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14
    }
  }, t.sponsors.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s,
    padding: "20px"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 13,
      textAlign: "center",
      display: "block"
    }
  }, s)))))), /*#__PURE__*/React.createElement(Card, {
    padding: "24px"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 16,
      marginBottom: 8
    }
  }, "Become a sponsor"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-secondary)",
      marginBottom: 14
    }
  }, "Support 457's build season, competitions, and outreach programs."), /*#__PURE__*/React.createElement(Button, null, "Request Sponsor Packet")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sponsors.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
