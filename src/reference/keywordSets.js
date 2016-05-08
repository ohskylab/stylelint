export const nonLengthUnits = new Set([
  // Relative length units
  "%",
  // Time length units
  "s",
  "ms",
  // Angle
  "deg",
  "grad",
  "turn",
  "rad",
  // Frequency
  "Hz",
  "kHz",
  // Resolution
  "dpi",
  "dpcm",
  "dppx",
])

export const lengthUnits = new Set([
  // Relative length units
  "em",
  "ex",
  "ch",
  "rem",
  // Viewport-percentage lengths
  "vh",
  "vw",
  "vmin",
  "vmax",
  "vm",
  // Absolute length units
  "px",
  "mm",
  "cm",
  "in",
  "pt",
  "pc",
  "q",
])

export const units = new Set([
  ...nonLengthUnits,
  ...lengthUnits,
])

export const colorFunctionNames = new Set([
  "rgb",
  "rgba",
  "hsl",
  "hsla",
  "hwb",
  "gray",
])

export const camelCaseFunctionNames = new Set([
  "translateX",
  "translateY",
  "translateZ",
  "scaleX",
  "scaleY",
  "scaleZ",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skewX",
  "skewY",
])

export const basicKeywords = new Set([
  "unset",
  "initial",
  "inherit",
])

// cf. https://developer.mozilla.org/en-US/docs/Web/CSS/animation
export const animationShorthandKeywords = new Set([
  ...basicKeywords,
  "infinite",
  "normal",
  "reverse",
  "alternate",
  "alternate-reverse",
  "none",
  "forwards",
  "backwards",
  "both",
  "running",
  "paused",
  "linear",
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out",
  "step-start",
  "step-end",
])

export const animationNameKeywords = new Set([
  ...basicKeywords,
  "none",
])

// These are the ones that can have single-colon notation
export const levelOneAndTwoPseudoElements = new Set([
  "before",
  "after",
  "first-line",
  "first-letter",
])

// These are the ones that require double-colon notation
export const levelThreePseudoElements = new Set([
  "before",
  "after",
  "first-line",
  "first-letter",
  "selection",
  "spelling-error",
  "grammar-error",
  "backdrop",
  "marker",
  "placeholder",
  "shadow",
  "content",
])

export const pseudoElements = new Set([
  ...levelOneAndTwoPseudoElements,
  ...levelThreePseudoElements,
])

export const pseudoClasses = new Set([
  "active",
  "any-link",
  "blank",
  "checked",
  "contains",
  "current",
  "default",
  "dir",
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first-child",
  "first-of-type",
  "focus",
  "focus-within",
  "fullscreen",
  "future",
  "has",
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "lang",
  "last-child",
  "last-of-type",
  "link",
  "matches",
  "not",
  "nth-child",
  "nth-column",
  "nth-last-child",
  "nth-last-column",
  "nth-last-of-type",
  "nth-of-type",
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "root",
  "scope",
  "target",
  "user-error",
  "user-invalid",
  "val",
  "valid",
  "visited",
])

export const shorthandTimeProperties = new Set([
  "transition",
  "animation",
])

export const longhandTimeProperties = new Set([
  "transition-duration",
  "transition-delay",
  "animation-duration",
  "animation-delay",
])

export const timeProperties = new Set([
  ...shorthandTimeProperties,
  ...longhandTimeProperties,
])

export const camelCaseKeywords = new Set([
  "optimizeSpeed",
  "optimizeLegibility",
  "geometricPrecision",
  "currentColor",
])

// https://developer.mozilla.org/docs/Web/CSS/counter-increment
export const counterIncrementKeywords = new Set([
  ...basicKeywords,
  "none",
])

export const gridRowKeywords = new Set([
  ...basicKeywords,
  "auto",
  "span",
])

export const gridColumnKeywords = new Set([
  ...basicKeywords,
  "auto",
  "span",
])

export const gridAreaKeywords = new Set([
  ...basicKeywords,
  "auto",
  "span",
])

// https://developer.mozilla.org/ru/docs/Web/CSS/list-style-type
export const listStyleTypeKeywords = new Set([
  ...basicKeywords,
  "none",
  "disc",
  "circle",
  "square",
  "decimal",
  "cjk-decimal",
  "decimal-leading-zero",
  "lower-roman",
  "upper-roman",
  "lower-greek",
  "lower-alpha",
  "lower-latin",
  "upper-alpha",
  "upper-latin",
  "arabic-indic",
  "armenian",
  "bengali",
  "cambodian",
  "cjk-earthly-branch",
  "cjk-ideographic",
  "devanagari",
  "ethiopic-numeric",
  "georgian",
  "gujarati",
  "gurmukhi",
  "hebrew",
  "hiragana",
  "hiragana-iroha",
  "japanese-formal",
  "japanese-informal",
  "kannada",
  "katakana",
  "katakana-iroha",
  "khmer",
  "korean-hangul-formal",
  "korean-hanja-formal",
  "korean-hanja-informal",
  "lao",
  "lower-armenian",
  "malayalam",
  "mongolian",
  "myanmar",
  "oriya",
  "persian",
  "simp-chinese-formal",
  "simp-chinese-informal",
  "tamil",
  "telugu",
  "thai",
  "tibetan",
  "trad-chinese-formal",
  "trad-chinese-informal",
  "upper-armenian",
  "disclosure-open",
  "disclosure-closed",
  // Non-standard extensions (without prefixe)
  "ethiopic-halehame",
  "ethiopic-halehame-am",
  "ethiopic-halehame-ti-er",
  "ethiopic-halehame-ti-et",
  "hangul",
  "hangul-consonant",
  "urdu",
])

export const fontStyleKeywords = new Set([
  ...basicKeywords,
  "normal",
  "italic",
  "oblique",
])

export const fontVariantKeywords = new Set([
  ...basicKeywords,
  "normal",
  "none",
  "historical-forms",
  "none",
  "common-ligatures",
  "no-common-ligatures",
  "discretionary-ligatures",
  "no-discretionary-ligatures",
  "historical-ligatures",
  "no-historical-ligatures",
  "contextual",
  "no-contextual",
  "small-caps",
  "small-caps",
  "all-small-caps",
  "petite-caps",
  "all-petite-caps",
  "unicase",
  "titling-caps",
  "lining-nums",
  "oldstyle-nums",
  "proportional-nums",
  "tabular-nums",
  "diagonal-fractions",
  "stacked-fractions",
  "ordinal",
  "slashed-zero",
  "jis78",
  "jis83",
  "jis90",
  "jis04",
  "simplified",
  "traditional",
  "full-width",
  "proportional-width",
  "ruby",
])

export const fontWeightRelativeKeywords = new Set([
  "bolder",
  "lighter",
])

export const fontWeightAbsoluteKeywords = new Set([
  "bold",
  "normal",
])

export const fontWeightKeywords = new Set([
  ...basicKeywords,
  ...fontWeightRelativeKeywords,
  ...fontWeightAbsoluteKeywords,
])

export const fontStretchKeywords = new Set([
  ...basicKeywords,
  "semi-condensed",
  "condensed",
  "extra-condensed",
  "ultra-condensed",
  "semi-expanded",
  "expanded",
  "extra-expanded",
  "ultra-expanded",
])

export const fontSizeKeywords = new Set([
  ...basicKeywords,
  "xx-small",
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large",
  "larger",
  "smaller",
])

export const lineHeightKeywords = new Set([
  ...basicKeywords,
  "normal",
])

export const fontFamilyKeywords = new Set([
  ...basicKeywords,
  "serif",
  "sans-serif",
  "cursive",
  "fantasy",
  "monospace",
])
