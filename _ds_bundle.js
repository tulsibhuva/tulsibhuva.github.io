/* @ds-bundle: {"format":4,"namespace":"TPortfolioDesignSystem_31bff0","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LogoStrip","sourcePath":"components/marketing/LogoStrip.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"ProjectCard","sourcePath":"components/work/ProjectCard.jsx"},{"name":"ScrollTopButton","sourcePath":"components/navigation/ScrollTopButton.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d1188825917e","components/core/Button.jsx":"3290114ee5f7","components/marketing/LogoStrip.jsx":"139ac81e5bc4","components/navigation/Nav.jsx":"4099ab5068ac","components/work/ProjectCard.jsx":"d643368d1b2e"},"inlinedExternals":[],"unexposedExports":[],"note":"Trimmed to components actually used by the site; unused builder-tool scaffolding (Tweaks editor panel, unused prebuilt sections/components) removed."} */

(() => {

const __ds_ns = (window.TPortfolioDesignSystem_31bff0 = window.TPortfolioDesignSystem_31bff0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--ink-3)',
      color: 'var(--text-muted)'
    },
    accent: {
      background: 'color-mix(in oklab, var(--accent) 18%, transparent)',
      color: 'var(--accent)'
    },
    success: {
      background: 'color-mix(in oklab, var(--success) 15%, transparent)',
      color: 'var(--success)'
    },
    warning: {
      background: 'color-mix(in oklab, var(--warning) 15%, transparent)',
      color: 'var(--warning)'
    },
    danger: {
      background: 'color-mix(in oklab, var(--danger) 15%, transparent)',
      color: 'var(--danger)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-muted)',
      boxShadow: 'inset 0 0 0 1px var(--border-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      fontWeight: 500,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeMap = {
  sm: {
    padding: '6px 12px',
    fontSize: 'var(--fs-sm)',
    height: 32
  },
  md: {
    padding: '10px 18px',
    fontSize: 'var(--fs-body)',
    height: 40
  },
  lg: {
    padding: '14px 24px',
    fontSize: 'var(--fs-md)',
    height: 48
  }
};
const variantStyle = v => {
  const base = {
    border: '1px solid transparent',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    letterSpacing: 'var(--tracking-snug)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap'
  };
  if (v === 'primary') return {
    ...base,
    background: 'var(--paper)',
    color: 'var(--ink-0)'
  };
  if (v === 'accent') return {
    ...base,
    background: 'var(--accent)',
    color: 'var(--ink-0)'
  };
  if (v === 'ghost') return {
    ...base,
    background: 'transparent',
    color: 'var(--text)',
    border: '1px solid var(--border-strong)'
  };
  if (v === 'link') return {
    ...base,
    background: 'transparent',
    color: 'var(--text)',
    padding: 0,
    borderRadius: 0,
    borderBottom: '1px solid currentColor'
  };
  return base;
};
const hoverVariant = v => {
  if (v === 'primary') return {
    background: 'var(--ink-0)',
    color: 'var(--paper)',
    border: '1px solid rgba(255,255,255,.35)'
  };
  if (v === 'accent') return {
    background: 'var(--ink-0)',
    color: 'var(--accent)',
    border: '1px solid rgba(255,255,255,.35)'
  };
  if (v === 'ghost') return {
    background: 'var(--paper)',
    color: 'var(--ink-0)',
    border: '1px solid rgba(255,255,255,.35)'
  };
  if (v === 'link') return {
    color: 'var(--accent)',
    borderBottom: '1px solid var(--accent)'
  };
  return {};
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const s = {
    ...variantStyle(variant),
    ...(variant !== 'link' ? sizeMap[size] : {}),
    ...(disabled ? {
      opacity: 0.4,
      cursor: 'not-allowed'
    } : {}),
    ...(hovered && !disabled ? {
      transform: 'scale(1.04)',
      ...hoverVariant(variant)
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: s,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoStrip.jsx
try { (() => {
function LogoStrip({
  label = 'I worked with the teams at:',
  logos = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--s-11)',
      flexWrap: 'wrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      maxWidth: 180
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--s-10)',
      flexWrap: 'wrap',
      opacity: 0.85
    }
  }, logos.map((l, i) => {
    const item = l && typeof l === 'object' && !React.isValidElement(l) ? l : {
      label: l
    };
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-xl)',
        fontWeight: 500,
        letterSpacing: 'var(--tracking-tight)',
        color: 'var(--text-muted)'
      }
    }, item.icon ? /*#__PURE__*/React.createElement("img", {
      src: item.icon,
      alt: "",
      style: {
        width: 26,
        height: 26,
        borderRadius: 6,
        objectFit: 'contain',
        flexShrink: 0
      }
    }) : null, /*#__PURE__*/React.createElement("span", null, item.label));
  })));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function Nav({
  brand = 'DS',
  links = [],
  cta,
  style
}) {
  const [visible, setVisible] = React.useState(true);
  const lastScroll = React.useRef(0);
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 100 || y < lastScroll.current);
      lastScroll.current = y;
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const handleClick = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--s-6) var(--s-9)',
      background: 'color-mix(in oklab, var(--bg) 70%, transparent)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border)',
      transition: 'transform .3s ease, opacity .3s ease',
      transform: visible ? 'translateY(0)' : 'translateY(-120%)',
      opacity: visible ? 1 : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      width: 60,
      height: 59,
      borderRadius: 'var(--radius-full)',
      background: 'var(--paper)',
      color: 'var(--ink-0)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      letterSpacing: '-0.04em',
      fontSize: 14
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-8)',
      fontSize: 'var(--fs-md)',
      color: 'var(--text-muted)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    onClick: e => handleClick(e, l.href),
    style: {
      transition: 'color var(--dur-fast)',
      cursor: 'pointer'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", null, cta));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/work/ProjectCard.jsx
try { (() => {
function ProjectCard({
  title,
  subtitle,
  tag,
  image,
  aspect = '4/3',
  onClick,
  href,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href || undefined,
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-6)',
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: aspect,
      background: image ? `#111 center/cover url(${image})` : 'linear-gradient(135deg,#1a1a1a,#0a0a0a)',
      borderRadius: 'var(--radius-5)',
      overflow: 'hidden',
      border: '1px solid var(--border)'
    }
  }, tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: '50%',
      transform: 'translateX(-50%) scale(1.3)',
      transformOrigin: 'top center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "outline"
  }, tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-lg)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-snug)',
      lineHeight: 1.25
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ScrollTopButton.jsx
try { (() => {
function ScrollTopButton({
  targetSelector
}) {
  const [hover, setHover] = React.useState(false);
  const onClick = () => {
    const el = targetSelector ? document.querySelector(targetSelector) : null;
    if (el) el.scrollIntoView({
      behavior: 'smooth'
    });else window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Back to top",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      border: hover ? '1px solid var(--accent)' : '1px solid var(--border)',
      background: hover ? 'var(--accent)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all .2s ease',
      padding: 0,
      color: 'inherit',
      font: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "18 15 12 9 6 15"
  })));
}
Object.assign(__ds_scope, { ScrollTopButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ScrollTopButton.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ScrollTopButton = __ds_scope.ScrollTopButton;

})();
