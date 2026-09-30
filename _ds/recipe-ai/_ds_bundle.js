/* @ds-bundle: {"format":4,"namespace":"RecipeAIDesignSystem_af795f","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"FoodSticker","sourcePath":"components/data/FoodSticker.jsx"},{"name":"IngredientItem","sourcePath":"components/data/IngredientItem.jsx"},{"name":"NutrientTag","sourcePath":"components/data/NutrientTag.jsx"},{"name":"Rating","sourcePath":"components/data/Rating.jsx"},{"name":"RecipeCard","sourcePath":"components/data/RecipeCard.jsx"},{"name":"RecipeListItem","sourcePath":"components/data/RecipeListItem.jsx"},{"name":"StatBlock","sourcePath":"components/data/StatBlock.jsx"},{"name":"Chip","sourcePath":"components/forms/Chip.jsx"},{"name":"PromptComposer","sourcePath":"components/forms/PromptComposer.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"},{"name":"SegmentedTabs","sourcePath":"components/navigation/SegmentedTabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"6d660c04aa27","components/actions/IconButton.jsx":"9d987fd03da7","components/data/Card.jsx":"2de7f4e71fdf","components/data/FoodSticker.jsx":"62216641484e","components/data/IngredientItem.jsx":"d3309bc3a236","components/data/NutrientTag.jsx":"95a65b0ae141","components/data/Rating.jsx":"aaf8bb3861e9","components/data/RecipeCard.jsx":"78a6e4b21afb","components/data/RecipeListItem.jsx":"84c4b9035b81","components/data/StatBlock.jsx":"d06d89f14861","components/forms/Chip.jsx":"507cbaa267f8","components/forms/PromptComposer.jsx":"db1ec07a7e3d","components/forms/SearchBar.jsx":"c2753471c30c","components/foundation/Icon.jsx":"d977782d0b3e","components/navigation/SegmentedTabs.jsx":"b4f55efe5924","ui_kits/recipe-app/PhoneFrame.jsx":"6b01ee1fc3f8","ui_kits/recipe-app/app.jsx":"92e0d9b42b0a","ui_kits/recipe-app/data.js":"5de3384a6d59","ui_kits/recipe-app/image-slot.js":"fff26d081c8d","ui_kits/recipe-app/screens/DetailScreen.jsx":"03d42e875444","ui_kits/recipe-app/screens/FiltersScreen.jsx":"ebeee58c2781","ui_kits/recipe-app/screens/HomeScreen.jsx":"357f9d636e9f","ui_kits/recipe-app/screens/KitchenScreen.jsx":"5cefbeb6b5b7","ui_kits/recipe-app/screens/SavedScreen.jsx":"3f966e2df1fd","ui_kits/recipe-app/screens/SuggestionsScreen.jsx":"bec6769eed41"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RecipeAIDesignSystem_af795f = window.RecipeAIDesignSystem_af795f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's text action. Primary is a solid near-black pill (e.g. "Rate Recipe").
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      h: 38,
      px: 16,
      fs: "var(--fs-sm)",
      gap: 8
    },
    md: {
      h: 46,
      px: 22,
      fs: "var(--fs-body)",
      gap: 9
    },
    lg: {
      h: 56,
      px: 28,
      fs: "var(--fs-lg)",
      gap: 10
    }
  }[size];
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--action-primary-text)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-pill)"
    },
    secondary: {
      background: "var(--surface-0)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
      boxShadow: "none"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: sizes.gap,
      height: sizes.h,
      padding: `0 ${sizes.px}px`,
      width: fullWidth ? "100%" : "auto",
      font: `var(--fw-semibold) ${sizes.fs}/1 var(--font-sans)`,
      letterSpacing: "-.01em",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      ...variants,
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(.97)"),
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — circular icon-only control. `light` = white with soft shadow (back,
 * refresh, grip, +). `dark` = solid black (the AI send button). `plain` = no chrome.
 */
function IconButton({
  children,
  tone = "light",
  size = 44,
  disabled = false,
  style,
  ...rest
}) {
  const tones = {
    light: {
      background: "var(--surface-0)",
      color: "var(--text-strong)",
      boxShadow: "var(--shadow-float)"
    },
    dark: {
      background: "var(--action-primary)",
      color: "var(--action-primary-text)",
      boxShadow: "var(--shadow-pill)"
    },
    plain: {
      background: "transparent",
      color: "var(--text-body)",
      boxShadow: "none"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      ...tones,
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(.92)"),
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base white surface: soft rounded corners, diffuse shadow. Everything
 * else composes on top of it.
 */
function Card({
  children,
  padding = 20,
  radius = "var(--radius-lg)",
  elevated = true,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      background: "var(--surface-card)",
      borderRadius: radius,
      boxShadow: elevated ? "var(--shadow-card)" : "none",
      padding,
      cursor: onClick ? "pointer" : "default",
      transition: "transform var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/FoodSticker.jsx
try { (() => {
/**
 * FoodSticker — the brand's hero visual unit: a glossy 3D food emoji/sticker.
 * The real product uses rendered 3D food stickers (raster PNGs); those assets were
 * not supplied, so pass `src` for a real image, or `emoji` to fall back to a system
 * emoji stand-in. Applies the signature soft drop shadow.
 */
function FoodSticker({
  emoji,
  src,
  alt = "",
  size = 56,
  style
}) {
  const shadow = {
    filter: "drop-shadow(var(--shadow-sticker))"
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      width: size,
      height: size,
      style: {
        width: size,
        height: size,
        objectFit: "contain",
        ...shadow,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": alt,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      fontSize: Math.round(size * 0.82),
      lineHeight: 1,
      ...shadow,
      ...style
    }
  }, emoji);
}
Object.assign(__ds_scope, { FoodSticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FoodSticker.jsx", error: String((e && e.message) || e) }); }

// components/data/IngredientItem.jsx
try { (() => {
/**
 * IngredientItem — a food sticker above its name and amount (e.g. Spaghetti / 200g).
 */
function IngredientItem({
  sticker,
  emoji,
  name,
  amount,
  size = 56,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      width: 76,
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FoodSticker, {
    src: sticker,
    emoji: emoji,
    alt: name,
    size: size
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--fw-semibold) var(--fs-sm)/1.15 var(--font-sans)`,
      color: "var(--text-strong)"
    }
  }, name), amount != null && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--fw-medium) var(--fs-xs)/1 var(--font-sans)`,
      color: "var(--text-muted)",
      marginTop: -3
    }
  }, amount));
}
Object.assign(__ds_scope, { IngredientItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/IngredientItem.jsx", error: String((e && e.message) || e) }); }

// components/data/NutrientTag.jsx
try { (() => {
const PALETTE = {
  protein: {
    bg: "var(--protein-bg)",
    fg: "var(--protein-fg)"
  },
  fat: {
    bg: "var(--fat-bg)",
    fg: "var(--fat-fg)"
  },
  carb: {
    bg: "var(--carb-bg)",
    fg: "var(--carb-fg)"
  }
};

/**
 * NutrientTag — soft pastel pill for nutrient facets (Protein / Fat / Carb).
 */
function NutrientTag({
  children,
  kind = "protein",
  style
}) {
  const p = PALETTE[kind] || PALETTE.protein;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 26,
      padding: "0 12px",
      background: p.bg,
      color: p.fg,
      borderRadius: "var(--radius-pill)",
      font: `var(--fw-semibold) var(--fs-xs)/1 var(--font-sans)`,
      letterSpacing: ".01em",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { NutrientTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/NutrientTag.jsx", error: String((e && e.message) || e) }); }

// components/data/Rating.jsx
try { (() => {
/**
 * Rating — gold star glyph + numeric score (e.g. ★ 4.3).
 */
function Rating({
  value = 0,
  size = 14,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      font: `var(--fw-semibold) var(--fs-sm)/1 var(--font-sans)`,
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--star)",
      fontSize: size,
      lineHeight: 1
    }
  }, "\u2605"), Number(value).toFixed(1));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Rating.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBlock.jsx
try { (() => {
/**
 * StatBlock — a line icon above a small label and a bold value (Cooking time / 30 mins).
 */
function StatBlock({
  icon,
  label,
  value,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-500)"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--fw-medium) var(--fs-xs)/1.2 var(--font-sans)`,
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--fw-bold) var(--fs-lg)/1 var(--font-sans)`,
      color: "var(--text-strong)",
      letterSpacing: "-.01em"
    }
  }, value));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — pill used for suggestion prompts and filter tokens. Resting is a soft
 * neutral fill; `selected` fills solid near-black.
 */
function Chip({
  children,
  selected = false,
  leading,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    height: 36,
    padding: "0 16px",
    borderRadius: "var(--radius-pill)",
    font: `var(--fw-medium) var(--fs-sm)/1 var(--font-sans)`,
    letterSpacing: "-.005em",
    cursor: onClick ? "pointer" : "default",
    border: "1px solid transparent",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)",
    WebkitTapHighlightColor: "transparent"
  };
  const skin = selected ? {
    background: "var(--action-primary)",
    color: "var(--action-primary-text)"
  } : {
    background: "var(--surface-2)",
    color: "var(--text-body)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      ...base,
      ...skin,
      ...style
    }
  }, rest), leading, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Chip.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Icon.jsx
try { (() => {
/**
 * Icon — thin-line glyph wrapper backed by Lucide (the brand's line-icon language).
 * Pass a PascalCase Lucide name. Requires the Lucide UMD global to be present
 * (load https://unpkg.com/lucide before the bundle in cards/kits).
 */
function renderChild(node, key) {
  if (!Array.isArray(node)) return null;
  const [tag, attrs, kids] = node;
  if (typeof tag !== "string") return null;
  const children = Array.isArray(kids) ? kids.map((k, i) => renderChild(k, i)) : null;
  return React.createElement(tag, {
    key,
    ...(attrs || {})
  }, children);
}
function Icon({
  name,
  size = 20,
  stroke = 2,
  color = "currentColor",
  style,
  ...rest
}) {
  const [, force] = React.useState(0);
  React.useEffect(() => {
    if (window.lucide) return;
    let n = 0;
    const id = setInterval(() => {
      if (window.lucide || n++ > 50) {
        clearInterval(id);
        force(x => x + 1);
      }
    }, 60);
    return () => clearInterval(id);
  }, []);
  const lib = typeof window !== "undefined" ? window.lucide : null;
  const data = lib && (lib.icons?.[name] || lib[name]);
  const box = {
    width: size,
    height: size,
    display: "inline-block",
    flex: "0 0 auto",
    ...style
  };
  if (!Array.isArray(data)) return React.createElement("span", {
    style: box,
    "aria-hidden": true
  });

  // Lucide icon-node shapes across versions:
  //   full node   -> ["svg", attrs, [children]]
  //   child tuple -> ["path", attrs]           (single element)
  //   child list  -> [["path", attrs], ...]    (array of tuples)
  let kids;
  if (typeof data[0] === "string") kids = data[0] === "svg" ? data[2] || [] : [data];else kids = data;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: box,
    "aria-hidden": true,
    ...rest
  }, kids.map((k, i) => renderChild(k, i)));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/RecipeCard.jsx
try { (() => {
/**
 * RecipeCard — the cookbook card: a meta header (time-ago + ingredient count), a rail
 * of ingredient stickers, then the recipe name and a caption.
 */
function RecipeCard({
  title,
  caption = "Classic recipe",
  timeAgo,
  ingredientCount,
  ingredients = [],
  onClick,
  style
}) {
  const shown = ingredients.slice(0, 4);
  const extra = Math.max(0, (ingredientCount ?? ingredients.length) - shown.length);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: 18,
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: `var(--fw-medium) var(--fs-xs)/1 var(--font-sans)`,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "RotateCcw",
    size: 13,
    color: "var(--ink-400)"
  }), timeAgo), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: `var(--fw-medium) var(--fs-xs)/1 var(--font-sans)`,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Trash2",
    size: 13,
    color: "var(--ink-400)"
  }), ingredientCount ?? ingredients.length, " ingredients")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 16
    }
  }, shown.map((ing, i) => /*#__PURE__*/React.createElement(__ds_scope.FoodSticker, {
    key: i,
    src: ing.sticker,
    emoji: ing.emoji,
    alt: ing.name || "",
    size: 46
  })), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6
    }
  }, Array.from({
    length: Math.min(extra, 2)
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--ink-200)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      font: `var(--fw-bold) var(--fs-h2)/1.1 var(--font-sans)`,
      color: "var(--text-strong)",
      letterSpacing: "-.01em",
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      font: `var(--fw-medium) var(--fs-sm)/1 var(--font-sans)`,
      color: "var(--text-muted)"
    }
  }, caption));
}
Object.assign(__ds_scope, { RecipeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RecipeCard.jsx", error: String((e && e.message) || e) }); }

// components/data/RecipeListItem.jsx
try { (() => {
/**
 * RecipeListItem — a white row: rounded thumbnail, title, time + rating meta, chevron.
 */
function RecipeListItem({
  title,
  image,
  emoji,
  thumbBg = "var(--surface-2)",
  time,
  rating,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: 12,
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "var(--radius-md)",
      background: thumbBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      flex: "0 0 auto"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.FoodSticker, {
    emoji: emoji,
    alt: title,
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--fw-bold) var(--fs-lg)/1.2 var(--font-sans)`,
      color: "var(--text-strong)",
      letterSpacing: "-.01em",
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      font: `var(--fw-medium) var(--fs-sm)/1 var(--font-sans)`,
      color: "var(--text-muted)"
    }
  }, time != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Clock",
    size: 14,
    color: "var(--ink-400)"
  }), time), time != null && rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-300)"
    }
  }, "\xB7"), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating
  }))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronRight",
    size: 20,
    color: "var(--ink-300)"
  }));
}
Object.assign(__ds_scope, { RecipeListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RecipeListItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/PromptComposer.jsx
try { (() => {
/**
 * PromptComposer — the signature AI input card: a "Describe the dish…" field with an
 * Upload affordance and a dark circular send button.
 */
function PromptComposer({
  value,
  onChange,
  onSend,
  onUpload,
  placeholder = "Describe the dish...",
  uploadLabel = "Upload",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-0)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-card)",
      padding: "18px 18px 16px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: 1,
    style: {
      width: "100%",
      border: "none",
      outline: "none",
      resize: "none",
      background: "transparent",
      font: `var(--fw-medium) var(--fs-lg)/1.35 var(--font-sans)`,
      color: "var(--text-strong)",
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onUpload,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 40,
      padding: "0 16px",
      background: "var(--surface-2)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      font: `var(--fw-semibold) var(--fs-sm)/1 var(--font-sans)`,
      color: "var(--text-strong)",
      cursor: "pointer",
      WebkitTapHighlightColor: "transparent"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Upload",
    size: 17
  }), uploadLabel), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    tone: "dark",
    size: 44,
    "aria-label": "Send",
    onClick: onSend
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ArrowUp",
    size: 20,
    color: "#fff"
  }))));
}
Object.assign(__ds_scope, { PromptComposer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PromptComposer.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchBar — rounded search field with a leading magnifier (e.g. "Search here").
 */
function SearchBar({
  value,
  onChange,
  placeholder = "Search here",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      height: 56,
      padding: "0 20px",
      background: "var(--surface-0)",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Search",
    size: 20,
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: `var(--fw-medium) var(--fs-lg)/1.2 var(--font-sans)`,
      color: "var(--text-strong)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedTabs.jsx
try { (() => {
/**
 * SegmentedTabs — the brand's inline switcher. `light` = selected item is a white
 * pill with soft shadow (Easy / Standard / Pro). `dark` = selected item fills
 * near-black (Breakfast / Lunch / Dinner / Snack). Items may carry a small badge.
 */
function SegmentedTabs({
  items = [],
  value,
  onChange,
  variant = "light",
  style
}) {
  const norm = items.map(it => typeof it === "string" ? {
    label: it
  } : it);
  const active = value ?? norm[0]?.label;
  const wrap = variant === "light" ? {
    display: "inline-flex",
    gap: 6,
    padding: 4,
    background: "var(--surface-2)",
    borderRadius: "var(--radius-pill)"
  } : {
    display: "inline-flex",
    gap: 8
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      ...style
    }
  }, norm.map(it => {
    const on = it.label === active;
    const skin = variant === "light" ? on ? {
      background: "var(--surface-0)",
      color: "var(--text-strong)",
      boxShadow: "var(--shadow-pill)"
    } : {
      background: "transparent",
      color: "var(--text-muted)"
    } : on ? {
      background: "var(--action-primary)",
      color: "var(--action-primary-text)"
    } : {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid var(--border-subtle)"
    };
    return /*#__PURE__*/React.createElement("button", {
      key: it.label,
      onClick: () => onChange && onChange(it.label),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        height: variant === "light" ? 36 : 40,
        padding: variant === "light" ? "0 16px" : "0 20px",
        borderRadius: "var(--radius-pill)",
        border: skin.border || "1px solid transparent",
        background: skin.background,
        color: skin.color,
        boxShadow: skin.boxShadow || "none",
        font: `var(--fw-semibold) var(--fs-sm)/1 var(--font-sans)`,
        letterSpacing: "-.005em",
        cursor: "pointer",
        transition: "all var(--dur-fast) var(--ease-standard)",
        WebkitTapHighlightColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", null, it.label), it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-xs)",
        fontWeight: "var(--fw-semibold)",
        color: on ? variant === "light" ? "var(--text-muted)" : "rgba(255,255,255,.7)" : "var(--text-muted)"
      }
    }, it.badge));
  }));
}
Object.assign(__ds_scope, { SegmentedTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedTabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recipe-app/PhoneFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// PhoneFrame — lightweight iOS-style bezel + status bar for the recipe app kit.
const {
  Icon
} = window.RecipeAIDesignSystem_af795f;
function StatusBar({
  time = "13:13"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 52,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 28px",
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) 15px/1 var(--font-sans)",
      color: "var(--ink-900)",
      letterSpacing: "-.01em"
    }
  }, time), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: 10,
      transform: "translateX(-50%)",
      width: 108,
      height: 32,
      background: "#0d0d0d",
      borderRadius: 999
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "flex-end",
      gap: 2,
      height: 12
    }
  }, [6, 8, 10, 12].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 3,
      height: h,
      borderRadius: 1,
      background: "var(--ink-900)"
    }
  }))), /*#__PURE__*/React.createElement(Icon, {
    name: "Wifi",
    size: 16,
    color: "var(--ink-900)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 12,
      border: "1.5px solid var(--ink-900)",
      borderRadius: 3,
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      padding: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "78%",
      height: "100%",
      background: "var(--ink-900)",
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -3,
      top: 3.5,
      width: 2,
      height: 5,
      background: "var(--ink-900)",
      borderRadius: 1
    }
  }))));
}
function PhoneFrame({
  children,
  time,
  scroll = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 384,
      height: 812,
      background: "var(--surface-1)",
      borderRadius: "var(--radius-phone)",
      boxShadow: "var(--shadow-float)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    time: time
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: scroll ? "auto" : "hidden",
      overflowX: "hidden",
      position: "relative"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 134,
      height: 5,
      borderRadius: 999,
      background: "var(--ink-900)"
    }
  })));
}

// BottomNav — app-level tab bar: Home · Saved · Profile.
function BottomNav({
  active = "Home",
  onNav
}) {
  const items = [{
    label: "Home",
    icon: "House"
  }, {
    label: "Saved",
    icon: "Bookmark"
  }, {
    label: "Profile",
    icon: "User"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "10px 24px 6px",
      borderTop: "1px solid var(--divider)",
      background: "var(--surface-1)"
    }
  }, items.map(it => {
    const on = it.label === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.label,
      onClick: () => onNav && onNav(it.label),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "4px 12px",
        color: on ? "var(--ink-900)" : "var(--ink-400)",
        WebkitTapHighlightColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 22,
      color: on ? "var(--ink-900)" : "var(--ink-400)",
      style: {
        fill: on ? "var(--ink-900)" : "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `${on ? "var(--fw-bold)" : "var(--fw-medium)"} var(--fs-xs)/1 var(--font-sans)`
      }
    }, it.label));
  }));
}

// ScreenHead — back chevron + title, optional subtitle. Shared across flow screens.
function ScreenHead({
  title,
  subtitle,
  onBack
}) {
  const {
    IconButton
  } = window.RecipeAIDesignSystem_af795f;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "4px 0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: subtitle ? 4 : 0
    }
  }, onBack && /*#__PURE__*/React.createElement(IconButton, {
    tone: "light",
    size: 42,
    "aria-label": "Back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) var(--fs-title)/var(--lh-title) var(--font-sans)",
      letterSpacing: "var(--tk-title)",
      color: "var(--ink-900)",
      margin: 0
    }
  }, title)), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body)/1.4 var(--font-sans)",
      color: "var(--ink-400)",
      margin: 0,
      paddingLeft: onBack ? 54 : 0
    }
  }, subtitle));
}

// DishPhoto — rounded frame wrapping a drop-in <image-slot> for a real dish photo.
function DishPhoto({
  id,
  radius = 16,
  placeholder = "Drop a dish photo",
  src,
  bg = "var(--surface-2)",
  fit = "cover",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: radius,
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("image-slot", _extends({
    id: id,
    shape: "rounded",
    radius: String(radius),
    fit: fit,
    placeholder: placeholder
  }, src ? {
    src
  } : {})));
}
Object.assign(window, {
  PhoneFrame,
  StatusBar,
  BottomNav,
  ScreenHead,
  DishPhoto
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recipe-app/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recipe-app/app.jsx
try { (() => {
// App — Rasoi kit harness: iOS phone + an out-of-product screen navigator.
const {
  HomeScreen,
  KitchenScreen,
  FiltersScreen,
  SuggestionsScreen,
  DetailScreen,
  SavedScreen,
  PhoneFrame
} = window;
const SCREENS = [{
  id: "home",
  label: "Home"
}, {
  id: "kitchen",
  label: "My Kitchen"
}, {
  id: "filters",
  label: "Filters"
}, {
  id: "suggestions",
  label: "Top 3"
}, {
  id: "detail",
  label: "Detail"
}, {
  id: "saved",
  label: "Saved"
}];
function App() {
  const [screen, setScreen] = React.useState("home");
  const go = id => setScreen(id);
  const onNav = label => go(label === "Saved" ? "saved" : "home");
  let view = null;
  if (screen === "home") view = /*#__PURE__*/React.createElement(HomeScreen, {
    onCook: () => go("kitchen"),
    onSurprise: () => go("suggestions"),
    onNav: onNav
  });else if (screen === "kitchen") view = /*#__PURE__*/React.createElement(KitchenScreen, {
    onNext: () => go("filters"),
    onBack: () => go("home")
  });else if (screen === "filters") view = /*#__PURE__*/React.createElement(FiltersScreen, {
    onSubmit: () => go("suggestions"),
    onBack: () => go("kitchen")
  });else if (screen === "suggestions") view = /*#__PURE__*/React.createElement(SuggestionsScreen, {
    onOpen: () => go("detail"),
    onBack: () => go("filters"),
    onMore: () => go("kitchen")
  });else if (screen === "detail") view = /*#__PURE__*/React.createElement(DetailScreen, {
    onBack: () => go("suggestions")
  });else if (screen === "saved") view = /*#__PURE__*/React.createElement(SavedScreen, {
    onOpen: () => go("detail"),
    onNav: onNav
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 22,
      padding: "32px 16px",
      background: "var(--canvas)"
    }
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    time: "19:04",
    scroll: false
  }, view), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 6,
      padding: 6,
      background: "var(--surface-0)",
      borderRadius: 999,
      boxShadow: "var(--shadow-card)"
    }
  }, SCREENS.map(s => {
    const on = s.id === screen;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => go(s.id),
      style: {
        height: 34,
        padding: "0 15px",
        borderRadius: 999,
        border: "none",
        cursor: "pointer",
        background: on ? "var(--ink-900)" : "transparent",
        color: on ? "#fff" : "var(--ink-500)",
        font: "var(--fw-semibold) 13px/1 var(--font-sans)",
        transition: "all var(--dur-fast) var(--ease-standard)"
      }
    }, s.label);
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recipe-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recipe-app/data.js
try { (() => {
// Rasoi — Indian home-cooking app content for the Recipe AI kit.
// Emoji stand in for the brand's 3D food stickers.
window.KIT_DATA = {
  ingredients: [{
    name: "Tomato",
    emoji: "🍅"
  }, {
    name: "Onion",
    emoji: "🧅"
  }, {
    name: "Potato",
    emoji: "🥔"
  }, {
    name: "Bhindi",
    emoji: "🥒",
    hint: "okra"
  }, {
    name: "Gobi",
    emoji: "🥦",
    hint: "cauliflower"
  }, {
    name: "Paneer",
    emoji: "🧀"
  }, {
    name: "Palak",
    emoji: "🥬",
    hint: "spinach"
  }, {
    name: "Matar",
    emoji: "🫛",
    hint: "peas"
  }, {
    name: "Capsicum",
    emoji: "🫑"
  }, {
    name: "Baingan",
    emoji: "🍆",
    hint: "brinjal"
  }, {
    name: "Cabbage",
    emoji: "🥬"
  }, {
    name: "Carrot",
    emoji: "🥕"
  }, {
    name: "Garlic",
    emoji: "🧄"
  }, {
    name: "Ginger",
    emoji: "🫚"
  }, {
    name: "Green chilli",
    emoji: "🌶️"
  }, {
    name: "Coriander",
    emoji: "🌿"
  }],
  // Pre-selected to match "uses all 4 ingredients" on Aloo Gobi.
  preselected: ["Tomato", "Onion", "Potato", "Gobi"],
  filters: {
    meal: ["Breakfast", "Lunch", "Dinner", "Snack"],
    time: ["Under 15 min", "30 min", "No rush"],
    type: ["Healthy", "Regular", "Quick & easy"]
  },
  suggestions: [{
    title: "Aloo Gobi",
    photo: "sug-aloo-gobi",
    img: "assets/aloo-gobi-v2.png",
    bg: "transparent",
    time: "25 min",
    rating: 4.6,
    note: "Uses all 4 ingredients",
    badge: "Best match"
  }, {
    title: "Bhindi Masala",
    photo: "sug-bhindi",
    img: "assets/bhindi-masala-white.png",
    time: "20 min",
    rating: 4.5,
    note: "Uses 3 of 4"
  }, {
    title: "Capsicum Aloo",
    photo: "sug-jeera",
    img: "assets/capsicum-aloo-white.png",
    time: "15 min",
    rating: 4.4,
    note: "Quick & easy"
  }],
  detail: {
    title: "Aloo Gobi",
    emoji: "🥘",
    desc: "A dry, homestyle potato and cauliflower sabzi with everyday spices.",
    time: "25 min",
    difficulty: "Easy",
    servings: "3",
    ingredients: [{
      emoji: "🥔",
      name: "Potato",
      amount: "2, cubed"
    }, {
      emoji: "🥦",
      name: "Cauliflower",
      amount: "1 small"
    }, {
      emoji: "🧅",
      name: "Onion",
      amount: "1"
    }, {
      emoji: "🍅",
      name: "Tomato",
      amount: "1"
    }, {
      emoji: "🧂",
      name: "Everyday spices",
      amount: "turmeric, cumin, coriander"
    }],
    steps: ["Sauté cumin and onion till golden.", "Add tomato, turmeric, coriander; cook till soft.", "Add potato and cauliflower; salt to taste.", "Cover and cook 15 min on low.", "Garnish with coriander; serve hot."]
  },
  saved: [{
    title: "Aloo Gobi",
    photo: "sav-aloo-gobi",
    img: "assets/aloo-gobi-v2.png",
    bg: "transparent",
    timeAgo: "1 day ago",
    count: 5,
    tags: ["Quick", "Healthy"]
  }, {
    title: "Palak Paneer",
    photo: "sav-palak",
    img: "assets/palak-paneer-cut.png",
    bg: "transparent",
    timeAgo: "3 days ago",
    count: 6,
    tags: ["Healthy"]
  }, {
    title: "Veg Pulao",
    photo: "sav-pulao",
    img: "assets/veg-pulao-cut.png",
    bg: "transparent",
    timeAgo: "5 days ago",
    count: 7,
    tags: ["Healthy"]
  }, {
    title: "Bhindi Masala",
    photo: "sav-bhindi",
    img: "assets/bhindi-masala-white.png",
    timeAgo: "1 week ago",
    count: 4,
    tags: ["Quick"]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recipe-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/recipe-app/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recipe-app/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/recipe-app/screens/DetailScreen.jsx
try { (() => {
// DetailScreen — Aloo Gobi full recipe: hero, stats, ingredients, steps, CTA.
const {
  IconButton,
  Icon,
  StatBlock,
  Button,
  FoodSticker
} = window.RecipeAIDesignSystem_af795f;
function DetailScreen({
  onBack
}) {
  const d = window.KIT_DATA.detail;
  const [fav, setFav] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 240
    }
  }, /*#__PURE__*/React.createElement(window.DishPhoto, {
    id: "detail-aloo-gobi",
    radius: 0,
    src: "assets/aloo-gobi-v2.png",
    bg: "transparent",
    fit: "contain",
    placeholder: "Drop dish photo",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: 24,
      right: 24,
      display: "flex",
      justifyContent: "space-between",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    tone: "light",
    size: 46,
    "aria-label": "Back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement(IconButton, {
    tone: "light",
    size: 46,
    "aria-label": "Favourite",
    onClick: () => setFav(!fav)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Heart",
    size: 20,
    color: fav ? "#e0524d" : "var(--ink-900)",
    style: {
      fill: fav ? "#e0524d" : "none"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-1)",
      borderRadius: "26px 26px 0 0",
      marginTop: -26,
      position: "relative",
      padding: "24px 24px 120px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) var(--fs-title)/var(--lh-title) var(--font-sans)",
      letterSpacing: "var(--tk-title)",
      color: "var(--ink-900)",
      margin: "0 0 8px"
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-sans)",
      color: "var(--ink-400)",
      margin: "0 0 22px",
      textWrap: "pretty"
    }
  }, d.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 28,
      paddingRight: 12
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "Clock",
      size: 22
    }),
    label: "Cooking time",
    value: d.time
  }), /*#__PURE__*/React.createElement(StatBlock, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ChefHat",
      size: 22
    }),
    label: "Difficulty",
    value: d.difficulty
  }), /*#__PURE__*/React.createElement(StatBlock, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "Utensils",
      size: 22
    }),
    label: "Servings",
    value: d.servings
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) var(--fs-h2)/1 var(--font-sans)",
      color: "var(--ink-900)",
      margin: "0 0 14px"
    }
  }, "Ingredients (", d.ingredients.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginBottom: 30
    }
  }, d.ingredients.map((ing, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "var(--surface-0)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(FoodSticker, {
    emoji: ing.emoji,
    size: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-lg)/1.1 var(--font-sans)",
      color: "var(--ink-900)"
    }
  }, ing.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-medium) var(--fs-sm)/1.3 var(--font-sans)",
      color: "var(--ink-400)",
      marginTop: 3
    }
  }, ing.amount))))), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) var(--fs-h2)/1 var(--font-sans)",
      color: "var(--ink-900)",
      margin: "0 0 14px"
    }
  }, "Steps"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, d.steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: 28,
      height: 28,
      borderRadius: 999,
      background: "var(--ink-900)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)"
    }
  }, i + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingTop: 3,
      font: "var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-sans)",
      color: "var(--ink-700)",
      textWrap: "pretty"
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0,
      padding: "0 24px 20px",
      background: "linear-gradient(to top, var(--surface-1) 70%, transparent)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setFav(true),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Heart",
      size: 18,
      color: "#fff",
      style: {
        fill: fav ? "#fff" : "none"
      }
    })
  }, fav ? "Saved to favourites" : "Save to favourites")));
}
Object.assign(window, {
  DetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recipe-app/screens/DetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recipe-app/screens/FiltersScreen.jsx
try { (() => {
// FiltersScreen — meal / time / type preferences before showing dishes.
const {
  Button,
  Chip
} = window.RecipeAIDesignSystem_af795f;
function FilterGroup({
  label,
  items,
  value,
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--ink-500)",
      letterSpacing: ".02em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 9
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Chip, {
    key: it,
    selected: value === it,
    onClick: () => onPick(it)
  }, it))));
}
function FiltersScreen({
  onSubmit,
  onBack
}) {
  const f = window.KIT_DATA.filters;
  const [meal, setMeal] = React.useState("Dinner");
  const [time, setTime] = React.useState("30 min");
  const [type, setType] = React.useState("Healthy");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "10px 24px 12px"
    }
  }, /*#__PURE__*/React.createElement(window.ScreenHead, {
    title: "Any preferences?",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(FilterGroup, {
    label: "Meal",
    items: f.meal,
    value: meal,
    onPick: setMeal
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    label: "Time",
    items: f.time,
    value: time,
    onPick: setTime
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    label: "Type",
    items: f.type,
    value: type,
    onPick: setType
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      padding: "12px 24px 18px",
      background: "var(--surface-1)",
      borderTop: "1px solid var(--divider)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onSubmit
  }, "Show me dishes")));
}
Object.assign(window, {
  FiltersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recipe-app/screens/FiltersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recipe-app/screens/HomeScreen.jsx
try { (() => {
// HomeScreen — Rasoi landing over a full-bleed vegetable photo with dark overlay.
const {
  Button,
  Chip
} = window.RecipeAIDesignSystem_af795f;
function HomeScreen({
  onCook,
  onSurprise,
  onNav
}) {
  const chips = ["Quick dinner", "Use up veggies", "Something light"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      minHeight: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(assets/veggies-bg.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,12,10,.72) 0%, rgba(10,12,10,.52) 42%, rgba(10,12,10,.78) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "22px 24px 20px",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "auto 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-medium) var(--fs-lg)/1 var(--font-sans)",
      color: "rgba(255,255,255,.85)",
      margin: 0
    }
  }, "Good evening..."), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "clamp(30px, 9vw, 34px)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--tk-display)",
      color: "#fff",
      margin: "12px 0 10px",
      textWrap: "balance"
    }
  }, "What's cooking today?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-sans)",
      color: "rgba(255,255,255,.82)",
      margin: "0 auto",
      maxWidth: 280,
      textWrap: "pretty"
    }
  }, "Tell me what you have, I'll tell you what to make.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onCook,
    style: {
      borderColor: "#FFFFFF",
      borderWidth: "0.2px",
      fontWeight: 500
    }
  }, "What should I cook?"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    fullWidth: true,
    onClick: onSurprise,
    style: {
      background: "rgba(255,255,255,.14)",
      color: "#fff",
      borderColor: "rgba(255,255,255,.4)",
      backdropFilter: "blur(4px)",
      fontWeight: 500
    }
  }, "Surprise me"))))), /*#__PURE__*/React.createElement(window.BottomNav, {
    active: "Home",
    onNav: onNav
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recipe-app/screens/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recipe-app/screens/KitchenScreen.jsx
try { (() => {
// KitchenScreen — tap-first ingredient picker: staples up front, search secondary.
const {
  Button,
  Chip,
  SearchBar,
  FoodSticker
} = window.RecipeAIDesignSystem_af795f;
function KitchenScreen({
  onNext,
  onBack
}) {
  const [q, setQ] = React.useState("");
  const [sel, setSel] = React.useState(window.KIT_DATA.preselected);
  const list = window.KIT_DATA.ingredients.filter(i => i.name.toLowerCase().includes(q.toLowerCase()));
  const toggle = name => setSel(s => s.includes(name) ? s.filter(x => x !== name) : [...s, name]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "10px 24px 12px"
    }
  }, /*#__PURE__*/React.createElement(window.ScreenHead, {
    title: "My Kitchen",
    subtitle: "Pick what you have right now",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--ink-500)",
      letterSpacing: ".02em",
      textTransform: "uppercase",
      margin: "8px 0 14px"
    }
  }, q ? "Matches" : "Common staples"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 9
    }
  }, list.map(i => /*#__PURE__*/React.createElement(Chip, {
    key: i.name,
    selected: sel.includes(i.name),
    onClick: () => toggle(i.name),
    leading: /*#__PURE__*/React.createElement(FoodSticker, {
      emoji: i.emoji,
      size: 22
    })
  }, i.name)), list.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-medium) var(--fs-body)/1.4 var(--font-sans)",
      color: "var(--ink-400)",
      padding: "12px 0"
    }
  }, "Nothing matches \"", q, "\".")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "26px 0 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-medium) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--ink-400)",
      marginBottom: 10
    }
  }, "Can't find it? Search below."), /*#__PURE__*/React.createElement(SearchBar, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search vegetables\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      padding: "12px 24px 18px",
      background: "var(--surface-1)",
      borderTop: "1px solid var(--divider)",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--ink-500)",
      flex: "0 0 auto"
    }
  }, sel.length, " selected"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onNext,
    disabled: sel.length === 0,
    style: {
      flex: 1
    }
  }, "Next")));
}
Object.assign(window, {
  KitchenScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recipe-app/screens/KitchenScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recipe-app/screens/SavedScreen.jsx
try { (() => {
// SavedScreen — cookbook of saved dishes with real photo thumbnails, filterable.
const {
  SegmentedTabs,
  Icon
} = window.RecipeAIDesignSystem_af795f;
function SavedCard({
  dish,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(window.DishPhoto, {
    id: dish.photo,
    radius: 14,
    src: dish.img,
    bg: dish.bg || (dish.img ? "#fff" : "var(--surface-2)"),
    fit: dish.img ? "contain" : "cover",
    placeholder: "Photo",
    style: {
      width: 76,
      height: 76,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-h2)/1.1 var(--font-sans)",
      letterSpacing: "-.01em",
      color: "var(--ink-900)",
      marginBottom: 6
    }
  }, dish.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      font: "var(--fw-medium) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "RotateCcw",
    size: 13,
    color: "var(--ink-400)"
  }), dish.timeAgo), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-300)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, dish.count, " ingredients"))), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 20,
    color: "var(--ink-300)"
  }));
}
function SavedScreen({
  onOpen,
  onNav
}) {
  const [tab, setTab] = React.useState("All");
  const list = window.KIT_DATA.saved.filter(d => tab === "All" || d.tags.includes(tab));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "12px 24px 20px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) var(--fs-title)/var(--lh-title) var(--font-sans)",
      letterSpacing: "var(--tk-title)",
      color: "var(--ink-900)",
      margin: "6px 0 18px"
    }
  }, "Your saved dishes"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(SegmentedTabs, {
    variant: "light",
    value: tab,
    onChange: setTab,
    items: ["All", "Quick", "Healthy"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, list.map((d, i) => /*#__PURE__*/React.createElement(SavedCard, {
    key: i,
    dish: d,
    onOpen: onOpen
  })))), /*#__PURE__*/React.createElement(window.BottomNav, {
    active: "Saved",
    onNav: onNav
  }));
}
Object.assign(window, {
  SavedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recipe-app/screens/SavedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recipe-app/screens/SuggestionsScreen.jsx
try { (() => {
// SuggestionsScreen — best-match layout: one large photo card + two compact below.
const {
  Icon,
  Rating
} = window.RecipeAIDesignSystem_af795f;
function BestCard({
  dish,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      position: "relative",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-card)",
      overflow: "hidden",
      cursor: "pointer",
      border: "1.5px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 176
    }
  }, /*#__PURE__*/React.createElement(window.DishPhoto, {
    id: dish.photo,
    radius: 0,
    src: dish.img,
    bg: dish.bg || (dish.img ? "#fff" : "var(--surface-2)"),
    fit: dish.img ? "contain" : "cover",
    placeholder: "Drop dish photo",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      height: 24,
      padding: "0 12px",
      display: "inline-flex",
      alignItems: "center",
      borderRadius: 999,
      background: "var(--ink-900)",
      color: "#fff",
      font: "var(--fw-bold) var(--fs-xs)/1 var(--font-sans)"
    }
  }, dish.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-title)/1.05 var(--font-sans)",
      letterSpacing: "-.01em",
      color: "var(--ink-900)",
      marginBottom: 8
    }
  }, dish.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      font: "var(--fw-medium) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--ink-400)",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Clock",
    size: 14,
    color: "var(--ink-400)"
  }), dish.time), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-300)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement(Rating, {
    value: dish.rating
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--protein-fg)"
    }
  }, dish.note)));
}
function CompactCard({
  dish,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(window.DishPhoto, {
    id: dish.photo,
    radius: 14,
    src: dish.img,
    bg: dish.bg || (dish.img ? "#fff" : "var(--surface-2)"),
    fit: dish.img ? "contain" : "cover",
    placeholder: "Photo",
    style: {
      width: 72,
      height: 72,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-h2)/1.1 var(--font-sans)",
      letterSpacing: "-.01em",
      color: "var(--ink-900)",
      marginBottom: 5
    }
  }, dish.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      font: "var(--fw-medium) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--ink-400)",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Clock",
    size: 13,
    color: "var(--ink-400)"
  }), dish.time), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-300)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement(Rating, {
    value: dish.rating
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-medium) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--protein-fg)"
    }
  }, dish.note)), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 20,
    color: "var(--ink-300)"
  }));
}
function SuggestionsScreen({
  onOpen,
  onBack,
  onMore
}) {
  const [best, ...rest] = window.KIT_DATA.suggestions;
  const {
    Button,
    Icon
  } = window.RecipeAIDesignSystem_af795f;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      padding: "10px 24px 28px"
    }
  }, /*#__PURE__*/React.createElement(window.ScreenHead, {
    title: "Top 3 for you",
    subtitle: "Made from what you have",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(BestCard, {
    dish: best,
    onOpen: onOpen
  }), rest.map((d, i) => /*#__PURE__*/React.createElement(CompactCard, {
    key: i,
    dish: d,
    onOpen: onOpen
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onMore,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Sparkles",
      size: 18,
      color: "#FFFFFF"
    })
  }, "Need more suggestions")));
}
Object.assign(window, {
  SuggestionsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recipe-app/screens/SuggestionsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FoodSticker = __ds_scope.FoodSticker;

__ds_ns.IngredientItem = __ds_scope.IngredientItem;

__ds_ns.NutrientTag = __ds_scope.NutrientTag;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.RecipeCard = __ds_scope.RecipeCard;

__ds_ns.RecipeListItem = __ds_scope.RecipeListItem;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.PromptComposer = __ds_scope.PromptComposer;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

})();
