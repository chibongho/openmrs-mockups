/* @ds-bundle: {"format":3,"namespace":"CarbonDesignSystem_53f452","components":[{"name":"Accordion","sourcePath":"components/data/Accordion.jsx"},{"name":"CodeSnippet","sourcePath":"components/data/CodeSnippet.jsx"},{"name":"ContentSwitcher","sourcePath":"components/data/ContentSwitcher.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/data/Tabs.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Tile","sourcePath":"components/data/Tile.jsx"},{"name":"InlineNotification","sourcePath":"components/feedback/InlineNotification.jsx"},{"name":"Loading","sourcePath":"components/feedback/Loading.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"ToastNotification","sourcePath":"components/feedback/ToastNotification.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Dropdown","sourcePath":"components/forms/Dropdown.jsx"},{"name":"FileUploader","sourcePath":"components/forms/FileUploader.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"NumberInput","sourcePath":"components/forms/NumberInput.jsx"},{"name":"RadioButton","sourcePath":"components/forms/RadioButton.jsx"},{"name":"Search","sourcePath":"components/forms/Search.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Link","sourcePath":"components/navigation/Link.jsx"},{"name":"OverflowMenu","sourcePath":"components/navigation/OverflowMenu.jsx"},{"name":"ProgressIndicator","sourcePath":"components/navigation/ProgressIndicator.jsx"}],"sourceHashes":{"components/data/Accordion.jsx":"0d5e3b4562fa","components/data/CodeSnippet.jsx":"f1fc012259ec","components/data/ContentSwitcher.jsx":"ad0c95281c47","components/data/DataTable.jsx":"31a32ba5290c","components/data/Pagination.jsx":"6d2c265447a9","components/data/Tabs.jsx":"61318c07a7f3","components/data/Tag.jsx":"96fecc2c611d","components/data/Tile.jsx":"9981f20e6f74","components/feedback/InlineNotification.jsx":"c72e3c2f0812","components/feedback/Loading.jsx":"bd53611b71d7","components/feedback/Modal.jsx":"a996f979794b","components/feedback/ProgressBar.jsx":"ed8f16927e80","components/feedback/Skeleton.jsx":"388cc7001d2c","components/feedback/ToastNotification.jsx":"008650ba16d7","components/feedback/Tooltip.jsx":"c07db10c58b5","components/forms/Button.jsx":"2e9c72fbdf97","components/forms/Checkbox.jsx":"49be1b5939f7","components/forms/Dropdown.jsx":"b7d2c55e1697","components/forms/FileUploader.jsx":"53f913bb3e47","components/forms/IconButton.jsx":"11aa56fba428","components/forms/NumberInput.jsx":"a2ee1ecfc05d","components/forms/RadioButton.jsx":"80b9c938f6cf","components/forms/Search.jsx":"e6995bd697c9","components/forms/Select.jsx":"12edc20565b0","components/forms/Slider.jsx":"cc6d22931f97","components/forms/TextArea.jsx":"bfe4c0b70d50","components/forms/TextInput.jsx":"bcb9d5d5996a","components/forms/Toggle.jsx":"d9cb0d8a0739","components/navigation/Breadcrumb.jsx":"6a4eb12fe87d","components/navigation/Link.jsx":"7b1716a3ddc3","components/navigation/OverflowMenu.jsx":"ba9835c19411","components/navigation/ProgressIndicator.jsx":"c3abb1df7cbc","ui_kits/carbon-app/App.jsx":"d0be205a5bec","ui_kits/carbon-app/Dashboard.jsx":"80ff8bccd681","ui_kits/carbon-app/FormPage.jsx":"6687df68ddde","ui_kits/carbon-app/PatientsPage.jsx":"162b78bf18c3","ui_kits/carbon-app/Shell.jsx":"6c076523763a","ui_kits/nicu-ward/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CarbonDesignSystem_53f452 = window.CarbonDesignSystem_53f452 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Carbon accordion — stacked collapsible sections with a chevron that rotates open. */
function Accordion({
  items = [],
  allowMultiple = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(() => new Set());
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--border-subtle-00)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-subtle-00)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": isOpen,
      onClick: () => toggle(i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--spacing-05)',
        padding: 'var(--spacing-05)',
        minHeight: '48px',
        border: 'none',
        background: 'transparent',
        textAlign: 'left',
        cursor: 'pointer',
        color: 'var(--text-primary)',
        font: 'var(--type-size-body-compact-01)/1.3 var(--font-sans)',
        letterSpacing: 'var(--type-ls-body-compact-01)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("iconify-icon", {
      icon: "carbon:chevron-down",
      width: "16",
      height: "16",
      style: {
        flexShrink: 0,
        color: 'var(--icon-primary)',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform var(--duration-fast-02) var(--easing-productive-standard)'
      }
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--spacing-05) var(--spacing-05)',
        color: 'var(--text-secondary)',
        font: 'var(--type-size-body-01)/var(--type-lh-body-01) var(--font-sans)'
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data/CodeSnippet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon code snippet — monospaced code on a layer surface with a copy button.
 * Variants: inline (in-text), single (one-liner), multi (block).
 */
function CodeSnippet({
  children,
  code,
  type = 'single',
  style,
  ...rest
}) {
  const text = code ?? (typeof children === 'string' ? children : '');
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard && navigator.clipboard.writeText(text);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  if (type === 'inline') {
    return /*#__PURE__*/React.createElement("code", _extends({
      style: {
        display: 'inline-block',
        padding: '2px 8px',
        background: 'var(--layer-01)',
        font: 'var(--type-size-code-01)/1.3 var(--font-mono)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-subtle-00)',
        ...style
      }
    }, rest), children);
  }
  const copyBtn = /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Copy",
    onClick: copy,
    style: {
      flexShrink: 0,
      width: '32px',
      height: '32px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--icon-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: copied ? 'carbon:checkmark' : 'carbon:copy',
    width: "16",
    height: "16",
    style: {
      color: copied ? 'var(--support-success)' : 'var(--icon-primary)'
    }
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: type === 'multi' ? 'flex-start' : 'center',
      background: 'var(--layer-01)',
      border: '1px solid var(--border-subtle-00)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("pre", {
    style: {
      flex: 1,
      margin: 0,
      overflowX: 'auto',
      padding: 'var(--spacing-04) var(--spacing-05)',
      font: 'var(--type-size-code-02)/1.5 var(--font-mono)',
      color: 'var(--text-primary)',
      whiteSpace: type === 'multi' ? 'pre' : 'nowrap'
    }
  }, text || children), copyBtn);
}
Object.assign(__ds_scope, { CodeSnippet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CodeSnippet.jsx", error: String((e && e.message) || e) }); }

// components/data/ContentSwitcher.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon content switcher — a segmented control for switching between views of
 * the same data. The selected segment inverts (dark fill, light text).
 */
function ContentSwitcher({
  options = [],
  defaultIndex = 0,
  selectedIndex,
  size = 'md',
  onChange,
  style,
  ...rest
}) {
  const heights = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem'
  };
  const controlled = selectedIndex !== undefined;
  const [internal, setInternal] = React.useState(defaultIndex);
  const active = controlled ? selectedIndex : internal;
  const select = i => {
    if (!controlled) setInternal(i);
    onChange && onChange(i);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      height: heights[size] || heights.md,
      border: '1px solid var(--border-inverse)',
      ...style
    }
  }, rest), options.map((opt, i) => {
    const label = typeof opt === 'string' ? opt : opt.label;
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(i),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '0 var(--spacing-05)',
        border: 'none',
        borderLeft: i === 0 ? 'none' : '1px solid var(--border-inverse)',
        background: on ? 'var(--background-inverse)' : 'transparent',
        color: on ? 'var(--text-inverse)' : 'var(--text-primary)',
        font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background var(--duration-fast-02) var(--easing-productive-standard)'
      }
    }, typeof opt === 'object' && opt.icon && /*#__PURE__*/React.createElement("iconify-icon", {
      icon: opt.icon,
      width: "16",
      height: "16"
    }), label);
  }));
}
Object.assign(__ds_scope, { ContentSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ContentSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon data table. Header cells use heading-compact; rows have a subtle
 * bottom rule and a hover highlight. Pass `headers` ({key, header}) and
 * `rows` (objects keyed by header.key). Optional zebra striping and sizes.
 */
function DataTable({
  headers = [],
  rows = [],
  size = 'md',
  zebra = false,
  style,
  ...rest
}) {
  const rowH = {
    sm: '32px',
    md: '48px',
    lg: '64px'
  }[size] || '48px';
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'var(--layer-01)',
      font: 'var(--type-size-body-compact-01)/1.3 var(--font-sans)',
      color: 'var(--text-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--layer-accent-01)'
    }
  }, headers.map(h => /*#__PURE__*/React.createElement("th", {
    key: h.key,
    style: {
      textAlign: 'left',
      padding: '0 var(--spacing-04)',
      height: rowH,
      font: '600 var(--type-size-heading-compact-01)/1 var(--font-sans)',
      letterSpacing: 'var(--type-ls-heading-compact-01)',
      color: 'var(--text-primary)',
      borderBottom: '1px solid var(--border-subtle-00)',
      whiteSpace: 'nowrap'
    }
  }, h.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement(Row, {
    key: row.id ?? ri,
    row: row,
    headers: headers,
    rowH: rowH,
    zebra: zebra,
    index: ri
  }))));
}
function Row({
  row,
  headers,
  rowH,
  zebra,
  index
}) {
  const [hover, setHover] = React.useState(false);
  const base = zebra && index % 2 === 1 ? 'var(--layer-02)' : 'var(--layer-01)';
  return /*#__PURE__*/React.createElement("tr", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover ? 'var(--layer-hover-01)' : base,
      transition: 'background var(--duration-fast-01) var(--easing-productive-standard)'
    }
  }, headers.map(h => /*#__PURE__*/React.createElement("td", {
    key: h.key,
    style: {
      padding: '0 var(--spacing-04)',
      height: rowH,
      borderBottom: '1px solid var(--border-subtle-00)',
      verticalAlign: 'middle'
    }
  }, row[h.key])));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Carbon pagination bar — items-per-page, range readout, and page nav. */
function Pagination({
  page = 1,
  pageSize = 10,
  totalItems = 0,
  pageSizes = [10, 25, 50],
  onPageChange,
  onPageSizeChange,
  style,
  ...rest
}) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);
  const navBtn = (dir, disabled, label, icon) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: () => !disabled && onPageChange && onPageChange(page + dir),
    style: {
      width: '40px',
      height: '40px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderLeft: '1px solid var(--border-subtle-00)',
      background: 'transparent',
      color: disabled ? 'var(--icon-disabled)' : 'var(--icon-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: icon,
    width: "16",
    height: "16"
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '40px',
      background: 'var(--layer-01)',
      borderTop: '1px solid var(--border-subtle-00)',
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
      color: 'var(--text-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-05)',
      paddingLeft: 'var(--spacing-05)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-03)',
      color: 'var(--text-secondary)'
    }
  }, "Items per page:", /*#__PURE__*/React.createElement("select", {
    value: pageSize,
    onChange: e => onPageSizeChange && onPageSizeChange(Number(e.target.value)),
    style: {
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      color: 'var(--text-primary)',
      font: 'inherit',
      paddingRight: '18px',
      cursor: 'pointer'
    }
  }, pageSizes.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s)))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, start, "\u2013", end, " of ", totalItems, " items")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 var(--spacing-05)',
      color: 'var(--text-secondary)'
    }
  }, page, " of ", totalPages, " pages"), navBtn(-1, page <= 1, 'Previous page', 'carbon:chevron-left'), navBtn(1, page >= totalPages, 'Next page', 'carbon:chevron-right')));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/data/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon tabs — line style. Pass an array of { label, content }. Selected tab
 * gets a 2px interactive underline; the rest sit on a subtle 1px rule.
 */
function Tabs({
  tabs = [],
  defaultIndex = 0,
  selectedIndex,
  onChange,
  style,
  ...rest
}) {
  const controlled = selectedIndex !== undefined;
  const [internal, setInternal] = React.useState(defaultIndex);
  const active = controlled ? selectedIndex : internal;
  const select = i => {
    if (!controlled) setInternal(i);
    onChange && onChange(i);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--border-subtle-00)'
    }
  }, tabs.map((t, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      disabled: t.disabled,
      onClick: () => !t.disabled && select(i),
      style: {
        appearance: 'none',
        border: 'none',
        background: on ? 'var(--layer-01)' : 'transparent',
        padding: '0 var(--spacing-05)',
        height: '40px',
        color: t.disabled ? 'var(--text-disabled)' : on ? 'var(--text-primary)' : 'var(--text-secondary)',
        font: `${on ? 600 : 400} var(--type-size-body-compact-01)/1 var(--font-sans)`,
        letterSpacing: 'var(--type-ls-body-compact-01)',
        borderBottom: on ? '2px solid var(--border-interactive)' : '2px solid transparent',
        marginBottom: '-1px',
        cursor: t.disabled ? 'not-allowed' : 'pointer',
        transition: 'color var(--duration-fast-02) var(--easing-productive-standard)'
      }
    }, t.label);
  })), /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    style: {
      padding: 'var(--spacing-05) 0'
    }
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Carbon tag — pill-shaped category label. Optional leading icon and dismiss button (filter). */
function Tag({
  children,
  type = 'gray',
  size = 'md',
  icon,
  filter = false,
  onClose,
  disabled = false,
  style,
  ...rest
}) {
  const bg = `var(--tag-bg-${type}, var(--tag-bg-gray))`;
  const fg = `var(--tag-text-${type}, var(--tag-text-gray))`;
  const h = size === 'sm' ? '18px' : '24px';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--spacing-02)',
      height: h,
      padding: size === 'sm' ? '0 8px' : '0 12px',
      borderRadius: '999px',
      background: bg,
      color: fg,
      opacity: disabled ? 0.5 : 1,
      maxWidth: '100%',
      font: `var(--type-size-label-01)/1 var(--font-sans)`,
      letterSpacing: 'var(--type-ls-label-01)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("iconify-icon", {
    icon: icon,
    width: "14",
    height: "14"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, children), filter && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16px',
      height: '16px',
      marginRight: '-4px',
      padding: 0,
      border: 'none',
      background: 'transparent',
      color: fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: '50%'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:close",
    width: "14",
    height: "14"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Tile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon tile — the base container/card. Flat surface (no shadow), square
 * corners. `clickable` adds hover + pointer; `selected` adds an interactive
 * border for selectable tile groups.
 */
function Tile({
  children,
  clickable = false,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = clickable || onClick;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover && interactive ? 'var(--layer-hover-01)' : 'var(--layer-01)',
      color: 'var(--text-primary)',
      padding: 'var(--spacing-05)',
      border: selected ? '1px solid var(--border-interactive)' : '1px solid transparent',
      outline: selected ? '1px solid var(--border-interactive)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--duration-fast-02) var(--easing-productive-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InlineNotification.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KINDS = {
  error: {
    icon: 'carbon:error-filled',
    color: 'var(--support-error)',
    bg: 'var(--notification-error-bg)'
  },
  success: {
    icon: 'carbon:checkmark-filled',
    color: 'var(--support-success)',
    bg: 'var(--notification-success-bg)'
  },
  warning: {
    icon: 'carbon:warning-filled',
    color: 'var(--support-warning)',
    bg: 'var(--notification-warning-bg)'
  },
  info: {
    icon: 'carbon:information-filled',
    color: 'var(--support-info)',
    bg: 'var(--notification-info-bg)'
  }
};

/**
 * Carbon inline notification — page-level status message with a left accent
 * bar, status icon, title, optional subtitle, and dismiss button.
 */
function InlineNotification({
  kind = 'info',
  title,
  subtitle,
  hideCloseButton = false,
  onClose,
  style,
  ...rest
}) {
  const k = KINDS[kind] || KINDS.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--spacing-05)',
      minHeight: '48px',
      padding: 'var(--spacing-04) var(--spacing-05)',
      background: k.bg,
      borderLeft: `3px solid ${k.color}`,
      color: 'var(--text-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("iconify-icon", {
    icon: k.icon,
    width: "20",
    height: "20",
    style: {
      color: k.color,
      flexShrink: 0,
      marginTop: '2px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      lineHeight: 1.4
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--type-size-heading-compact-01)/1.4 var(--font-sans)'
    }
  }, title), title && subtitle ? ' ' : null, subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-body-compact-01)/1.4 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, subtitle)), !hideCloseButton && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      flexShrink: 0,
      width: '20px',
      height: '20px',
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--icon-primary)'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:close",
    width: "16",
    height: "16"
  })));
}
Object.assign(__ds_scope, { InlineNotification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InlineNotification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Loading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon loading spinner — a rotating stroked ring with a gap. Sizes normal
 * (88px), small (16px), and an optional full-area overlay.
 */
function Loading({
  small = false,
  withOverlay = false,
  description = 'Loading',
  style,
  ...rest
}) {
  const size = small ? 16 : 88;
  const stroke = small ? 2 : 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const spinner = /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": description,
    style: {
      display: 'inline-flex',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      animation: 'carbon-spin 690ms linear infinite'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--layer-accent-01)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--interactive)",
    strokeWidth: stroke,
    strokeLinecap: "butt",
    strokeDasharray: `${c * 0.75} ${c}`
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes carbon-spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }`));
  if (withOverlay) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        background: 'var(--overlay)',
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, spinner);
  }
  return spinner;
}
Object.assign(__ds_scope, { Loading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Loading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon progress bar — determinate (value/max) or indeterminate. Label and an
 * optional helper line; status "active" | "finished" | "error".
 */
function ProgressBar({
  label,
  helperText,
  value,
  max = 100,
  size = 'big',
  status = 'active',
  hideLabel = false,
  style,
  ...rest
}) {
  const indeterminate = value === undefined || value === null;
  const pct = indeterminate ? 0 : Math.min(100, Math.max(0, value / max * 100));
  const trackH = size === 'small' ? '4px' : '8px';
  const fillColor = status === 'error' ? 'var(--support-error)' : status === 'finished' ? 'var(--support-success)' : 'var(--interactive)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-03)',
      ...style
    }
  }, rest), !hideLabel && (label || !indeterminate) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--spacing-04)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-label-01)/1 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, label), !indeterminate && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-label-01)/1 var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: trackH,
      background: 'var(--layer-accent-01)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: indeterminate ? 'carbon-pb-indet' : undefined,
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: indeterminate ? '40%' : pct + '%',
      background: fillColor,
      transition: indeterminate ? 'none' : 'width var(--duration-moderate-02) var(--easing-productive-standard)'
    }
  })), helperText && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-helper-text-01)/1.3 var(--font-sans)',
      color: status === 'error' ? 'var(--text-error)' : 'var(--text-helper)'
    }
  }, helperText), /*#__PURE__*/React.createElement("style", null, `@keyframes carbon-pb { 0%{left:-40%} 100%{left:100%} } .carbon-pb-indet { animation: carbon-pb 1.2s var(--easing-productive-standard) infinite; }`));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon skeleton — animated placeholder shown while content loads.
 * variant "text" renders shimmer lines; "block" renders a rectangular area.
 */
function Skeleton({
  variant = 'text',
  lines = 3,
  heading = false,
  width = '100%',
  height,
  style,
  ...rest
}) {
  const shimmer = {
    background: 'var(--skeleton)',
    position: 'relative',
    overflow: 'hidden'
  };
  const anim = /*#__PURE__*/React.createElement("style", null, `@keyframes carbon-skel { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
      .carbon-skel::after { content:''; position:absolute; inset:0; transform:translateX(-100%);
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
        animation: carbon-skel 1.2s var(--easing-productive-standard) infinite; }`);
  if (variant === 'block') {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: "carbon-skel",
      style: {
        ...shimmer,
        width,
        height: height || '96px',
        ...style
      }
    }, rest), anim);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width,
      ...style
    }
  }, rest), anim, heading && /*#__PURE__*/React.createElement("div", {
    className: "carbon-skel",
    style: {
      ...shimmer,
      height: '24px',
      width: '60%'
    }
  }), Array.from({
    length: lines
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "carbon-skel",
    style: {
      ...shimmer,
      height: '12px',
      width: i === lines - 1 ? '75%' : '100%'
    }
  })));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ToastNotification.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TOAST_KINDS = {
  error: {
    icon: 'carbon:error-filled',
    color: 'var(--support-error)'
  },
  success: {
    icon: 'carbon:checkmark-filled',
    color: 'var(--support-success)'
  },
  warning: {
    icon: 'carbon:warning-filled',
    color: 'var(--support-warning)'
  },
  info: {
    icon: 'carbon:information-filled',
    color: 'var(--support-info)'
  }
};

/**
 * Carbon toast notification — transient, corner-anchored message. Fixed
 * width with a left accent bar, status icon, title/subtitle, and caption.
 */
function ToastNotification({
  kind = 'info',
  title,
  subtitle,
  caption,
  hideCloseButton = false,
  onClose,
  style,
  ...rest
}) {
  const k = TOAST_KINDS[kind] || TOAST_KINDS.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--spacing-05)',
      width: '320px',
      padding: 'var(--spacing-05)',
      background: 'var(--background-inverse)',
      color: 'var(--text-inverse)',
      borderLeft: `3px solid ${k.color}`,
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("iconify-icon", {
    icon: k.icon,
    width: "20",
    height: "20",
    style: {
      color: k.color,
      flexShrink: 0,
      marginTop: '2px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--type-size-heading-compact-01)/1.4 var(--font-sans)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-size-body-compact-01)/1.4 var(--font-sans)',
      marginTop: '2px',
      opacity: 0.9
    }
  }, subtitle), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-size-label-01)/1.3 var(--font-sans)',
      marginTop: 'var(--spacing-04)',
      opacity: 0.7
    }
  }, caption)), !hideCloseButton && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      flexShrink: 0,
      width: '20px',
      height: '20px',
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--icon-inverse)'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:close",
    width: "16",
    height: "16"
  })));
}
Object.assign(__ds_scope, { ToastNotification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ToastNotification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon tooltip — wraps a trigger and shows a dark popover on hover/focus.
 * Align top | bottom | left | right. Use for supplementary, non-essential text.
 */
function Tooltip({
  label,
  align = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '8px'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '8px'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: '8px'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '8px'
    }
  }[align];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 400,
      ...pos,
      pointerEvents: 'none',
      width: 'max-content',
      maxWidth: '240px',
      background: 'var(--background-inverse)',
      color: 'var(--text-inverse)',
      padding: 'var(--spacing-03) var(--spacing-04)',
      boxShadow: 'var(--shadow-sm)',
      font: 'var(--type-size-body-compact-01)/1.4 var(--font-sans)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon Button. Square corners, left-aligned label with trailing space,
 * optional Carbon icon pinned to the right. Variants follow Carbon's
 * emphasis hierarchy: primary > secondary > tertiary > ghost, plus danger.
 */
function Button({
  children,
  kind = 'primary',
  size = 'lg',
  icon,
  disabled = false,
  href,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const heights = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
    xl: '4rem'
  };
  const palette = {
    primary: {
      bg: 'var(--button-primary)',
      fg: 'var(--text-on-color)',
      bd: 'transparent',
      hover: 'var(--button-primary-hover)',
      active: 'var(--button-primary-active)'
    },
    secondary: {
      bg: 'var(--button-secondary)',
      fg: 'var(--text-on-color)',
      bd: 'transparent',
      hover: 'var(--button-secondary-hover)',
      active: 'var(--button-secondary-active)'
    },
    tertiary: {
      bg: 'transparent',
      fg: 'var(--button-tertiary)',
      bd: 'var(--button-tertiary)',
      hover: 'var(--button-tertiary-hover)',
      active: 'var(--button-tertiary-active)'
    },
    ghost: {
      bg: 'transparent',
      fg: 'var(--link-primary)',
      bd: 'transparent',
      hover: 'var(--background-hover)',
      active: 'var(--background-active)'
    },
    danger: {
      bg: 'var(--button-danger-primary)',
      fg: 'var(--text-on-color)',
      bd: 'transparent',
      hover: 'var(--button-danger-hover)',
      active: 'var(--button-danger-active)'
    }
  };
  const p = palette[kind] || palette.primary;
  const isOutline = kind === 'tertiary';
  const isGhost = kind === 'ghost';
  const [state, setState] = React.useState('rest');
  const bg = disabled ? 'var(--button-disabled)' : state === 'active' ? p.active : state === 'hover' ? isOutline ? p.hover : p.hover : p.bg;
  const fg = disabled ? 'var(--text-on-color-disabled)' : isOutline && state !== 'rest' ? 'var(--text-on-color)' : isGhost && state !== 'rest' ? 'var(--link-primary)' : p.fg;
  const css = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: icon ? 'space-between' : 'flex-start',
    gap: 'var(--spacing-05)',
    minWidth: size === 'sm' ? 'auto' : '8rem',
    maxWidth: '20rem',
    height: heights[size] || heights.lg,
    padding: icon ? '0 var(--spacing-05) 0 var(--spacing-05)' : '0 var(--spacing-10) 0 var(--spacing-05)',
    border: `1px solid ${disabled ? 'transparent' : isOutline ? state === 'rest' ? p.bd : p.hover : 'transparent'}`,
    background: bg,
    color: fg,
    font: `var(--type-weight-body-compact-01) var(--type-size-body-compact-01)/1 var(--font-sans)`,
    letterSpacing: 'var(--type-ls-body-compact-01)',
    textAlign: 'left',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--duration-fast-01) var(--easing-productive-standard), border-color var(--duration-fast-01) var(--easing-productive-standard)',
    outline: 'none',
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('rest'),
    onMouseDown: () => setState('active'),
    onMouseUp: () => setState('hover'),
    onClick
  };
  const iconEl = icon ? /*#__PURE__*/React.createElement("iconify-icon", {
    icon: icon,
    width: "16",
    height: "16",
    style: {
      flexShrink: 0
    }
  }) : null;
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: css
    }, handlers, rest), children, iconEl);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: css
  }, handlers, rest), children, iconEl);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon modal. Centered surface over a dark overlay with a header (title +
 * close), scrollable body, and a full-width split-button footer.
 */
function Modal({
  open = true,
  title,
  label,
  children,
  primaryText = 'Save',
  secondaryText = 'Cancel',
  danger = false,
  onPrimary,
  onSecondary,
  onClose,
  size = 'md',
  style,
  ...rest
}) {
  if (!open) return null;
  const widths = {
    sm: '24rem',
    md: '36rem',
    lg: '48rem'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9000
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: widths[size] || widths.md,
      maxWidth: 'calc(100vw - 2rem)',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--layer-01)',
      color: 'var(--text-primary)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 'var(--spacing-05)',
      paddingBottom: 'var(--spacing-03)'
    }
  }, /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-size-label-01)/1.3 var(--font-sans)',
      color: 'var(--text-secondary)',
      marginBottom: '4px'
    }
  }, label), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--type-weight-heading-03) var(--type-size-heading-03)/var(--type-lh-heading-03) var(--font-sans)'
    }
  }, title)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: '40px',
      height: '40px',
      margin: '-8px -8px 0 0',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--icon-primary)'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:close",
    width: "20",
    height: "20"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--spacing-05) var(--spacing-09)',
      overflowY: 'auto',
      font: 'var(--type-size-body-01)/var(--type-lh-body-01) var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    kind: "secondary",
    size: "xl",
    onClick: onSecondary || onClose,
    style: {
      flex: 1,
      minWidth: 0
    }
  }, secondaryText), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    kind: danger ? 'danger' : 'primary',
    size: "xl",
    onClick: onPrimary,
    style: {
      flex: 1,
      minWidth: 0
    }
  }, primaryText))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Carbon checkbox — 16px square (sharp corners), label to the right.
 * Controlled via `checked`/`onChange` or uncontrolled via `defaultChecked`.
 */
function Checkbox({
  id,
  label,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const inputId = id || React.useId();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const isOn = checked ?? undefined;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--spacing-03)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
      letterSpacing: 'var(--type-ls-body-compact-01)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '16px',
      height: '16px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    id: inputId,
    type: "checkbox",
    checked: isOn,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      margin: 0,
      width: '16px',
      height: '16px',
      border: `1px solid ${disabled ? 'var(--border-disabled)' : 'var(--icon-primary)'}`,
      background: 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }), /*#__PURE__*/React.createElement("iconify-icon", {
    icon: indeterminate ? 'carbon:subtract' : 'carbon:checkmark',
    width: "14",
    height: "14",
    className: "cb-mark",
    style: {
      position: 'absolute',
      top: '1px',
      left: '1px',
      color: 'var(--text-on-color)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("style", null, `
          #${CSS.escape(inputId)}:checked { background: var(--icon-primary) !important; border-color: var(--icon-primary) !important; }
          #${CSS.escape(inputId)}:checked + .cb-mark { opacity: 1; }
          #${CSS.escape(inputId)}:not(:checked) + .cb-mark { opacity: ${indeterminate ? 1 : 0}; }
          #${CSS.escape(inputId)}:indeterminate { background: var(--icon-primary) !important; border-color: var(--icon-primary) !important; }
        `)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Dropdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon dropdown — a custom-styled single select with a popover menu (richer
 * than the native Select). Field shows the selected label + chevron; the menu
 * lists items with a checkmark on the active one.
 */
function Dropdown({
  id,
  label,
  items = [],
  selectedItem,
  defaultSelected,
  placeholder = 'Choose an option',
  size = 'md',
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const heights = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem'
  };
  const inputId = id || React.useId();
  const norm = items.map(it => typeof it === 'string' ? {
    value: it,
    label: it
  } : it);
  const controlled = selectedItem !== undefined;
  const [internal, setInternal] = React.useState(defaultSelected ?? null);
  const value = controlled ? selectedItem : internal;
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  const current = norm.find(n => n.value === value);
  const pick = n => {
    if (!controlled) setInternal(n.value);
    onChange && onChange(n.value);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-02)',
      position: 'relative',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-size-label-01)/var(--type-lh-label-01) var(--font-sans)',
      letterSpacing: 'var(--type-ls-label-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("button", _extends({
    id: inputId,
    type: "button",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    disabled: disabled,
    onClick: () => !disabled && setOpen(o => !o),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--spacing-04)',
      height: heights[size] || heights.md,
      padding: '0 var(--spacing-05)',
      textAlign: 'left',
      background: disabled ? 'transparent' : 'var(--field-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      border: 'none',
      borderBottom: `1px solid ${open ? 'var(--focus)' : 'var(--border-strong-01)'}`,
      outline: open ? '2px solid var(--focus)' : 'none',
      outlineOffset: '-2px',
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
      letterSpacing: 'var(--type-ls-body-compact-01)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: current ? 'var(--text-primary)' : 'var(--text-placeholder)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, current ? current.label : placeholder), /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:chevron-down",
    width: "16",
    height: "16",
    style: {
      flexShrink: 0,
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--duration-fast-02) var(--easing-productive-standard)'
    }
  })), open && /*#__PURE__*/React.createElement("ul", {
    role: "listbox",
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      zIndex: 200,
      margin: 0,
      padding: 0,
      listStyle: 'none',
      background: 'var(--layer-02)',
      boxShadow: 'var(--shadow-md)',
      maxHeight: '240px',
      overflowY: 'auto'
    }
  }, norm.map(n => {
    const on = n.value === value;
    return /*#__PURE__*/React.createElement("li", {
      key: n.value,
      role: "option",
      "aria-selected": on,
      onClick: () => pick(n),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: heights[size] || heights.md,
        padding: '0 var(--spacing-05)',
        cursor: 'pointer',
        background: on ? 'var(--background-selected)' : 'transparent',
        color: 'var(--text-primary)',
        font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
        borderBottom: '1px solid var(--border-subtle-00)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'var(--layer-hover-01)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    }, n.label, on && /*#__PURE__*/React.createElement("iconify-icon", {
      icon: "carbon:checkmark",
      width: "16",
      height: "16",
      style: {
        color: 'var(--icon-primary)'
      }
    }));
  })));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/FileUploader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon file uploader — label/description, a dashed drag-and-drop drop zone,
 * and a list of added files each with a status icon and remove button.
 */
function FileUploader({
  label = 'Upload files',
  description = 'Drag and drop files here or click to browse',
  accept,
  multiple = true,
  disabled = false,
  defaultFiles = [],
  onChange,
  style,
  ...rest
}) {
  const inputRef = React.useRef(null);
  const [files, setFiles] = React.useState(defaultFiles.map((f, i) => ({
    id: i + '-' + f,
    name: f,
    status: 'complete'
  })));
  const [drag, setDrag] = React.useState(false);
  const add = list => {
    const next = [...files, ...Array.from(list).map((f, i) => ({
      id: Date.now() + '-' + i,
      name: f.name || f,
      status: 'complete'
    }))];
    setFiles(next);
    onChange && onChange(next.map(f => f.name));
  };
  const remove = id => {
    const next = files.filter(f => f.id !== id);
    setFiles(next);
    onChange && onChange(next.map(f => f.name));
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-03)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--type-size-heading-compact-01) var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: () => !disabled && inputRef.current && inputRef.current.click(),
    onDragOver: e => {
      e.preventDefault();
      if (!disabled) setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      if (!disabled && e.dataTransfer.files.length) add(e.dataTransfer.files);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--spacing-03)',
      padding: 'var(--spacing-07)',
      textAlign: 'center',
      border: `1px dashed ${drag ? 'var(--border-interactive)' : 'var(--border-strong-01)'}`,
      background: drag ? 'var(--background-selected)' : 'var(--layer-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast-02) var(--easing-productive-standard)'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:cloud-upload",
    width: "24",
    height: "24",
    style: {
      color: 'var(--icon-secondary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-body-compact-01)/1.4 var(--font-sans)'
    }
  }, description), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: accept,
    multiple: multiple,
    disabled: disabled,
    onChange: e => e.target.files.length && add(e.target.files),
    style: {
      display: 'none'
    }
  })), files.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '1px'
    }
  }, files.map(f => /*#__PURE__*/React.createElement("li", {
    key: f.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-03)',
      padding: 'var(--spacing-03) var(--spacing-04)',
      background: 'var(--layer-01)',
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:document",
    width: "16",
    height: "16",
    style: {
      color: 'var(--icon-secondary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, f.name), /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:checkmark-filled",
    width: "16",
    height: "16",
    style: {
      color: 'var(--support-success)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": `Remove ${f.name}`,
    onClick: () => remove(f.id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--icon-primary)',
      display: 'flex',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:close",
    width: "16",
    height: "16"
  }))))));
}
Object.assign(__ds_scope, { FileUploader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FileUploader.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon icon-only button — square, for toolbar actions. Holds a single
 * Carbon (Iconify) glyph. Optional ghost styling for low-emphasis toolbars.
 */
function IconButton({
  icon,
  label,
  kind = 'ghost',
  size = 'lg',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dims = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem'
  };
  const d = dims[size] || dims.lg;
  const [hover, setHover] = React.useState(false);
  const isGhost = kind === 'ghost';
  const bg = disabled ? 'transparent' : hover ? isGhost ? 'var(--background-hover)' : 'var(--button-primary-hover)' : isGhost ? 'transparent' : 'var(--button-primary)';
  const fg = disabled ? 'var(--icon-disabled)' : isGhost ? 'var(--icon-primary)' : 'var(--icon-on-color)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick,
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: bg,
      color: fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast-01) var(--easing-productive-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("iconify-icon", {
    icon: icon,
    width: "20",
    height: "20"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/NumberInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Carbon number input with stacked increment/decrement steppers on the right. */
function NumberInput({
  id,
  label,
  value,
  defaultValue = 0,
  min,
  max,
  step = 1,
  size = 'md',
  helperText,
  invalid = false,
  invalidText,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const heights = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem'
  };
  const h = heights[size] || heights.md;
  const inputId = id || React.useId();
  const controlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const v = controlled ? value : internal;
  const [focus, setFocus] = React.useState(false);
  const clamp = n => {
    if (min !== undefined) n = Math.max(min, n);
    if (max !== undefined) n = Math.min(max, n);
    return n;
  };
  const set = n => {
    n = clamp(n);
    if (!controlled) setInternal(n);
    onChange && onChange(n);
  };
  const borderColor = invalid ? 'var(--support-error)' : focus ? 'var(--focus)' : 'var(--border-strong-01)';
  const stepBtn = (icon, delta, lbl) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": lbl,
    disabled: disabled,
    onClick: () => set(Number(v || 0) + delta),
    style: {
      width: '40px',
      height: '50%',
      border: 'none',
      borderLeft: '1px solid var(--border-subtle-00)',
      background: 'transparent',
      color: disabled ? 'var(--icon-disabled)' : 'var(--icon-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: icon,
    width: "16",
    height: "16"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-02)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-size-label-01)/var(--type-lh-label-01) var(--font-sans)',
      letterSpacing: 'var(--type-ls-label-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      height: h,
      background: disabled ? 'transparent' : 'var(--field-01)',
      borderBottom: `1px solid ${borderColor}`,
      outline: focus && !invalid ? '2px solid var(--focus)' : 'none',
      outlineOffset: '-2px'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "number",
    value: v,
    min: min,
    max: max,
    step: step,
    disabled: disabled,
    onChange: e => set(Number(e.target.value)),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      width: '100%',
      minWidth: 0,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      padding: '0 var(--spacing-05)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)'
    }
  }, rest)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, stepBtn('carbon:caret-up', step, 'Increment'), stepBtn('carbon:caret-down', -step, 'Decrement'))), invalid && invalidText ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-helper-text-01)/var(--type-lh-helper-text-01) var(--font-sans)',
      color: 'var(--text-error)'
    }
  }, invalidText) : helperText ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-helper-text-01)/var(--type-lh-helper-text-01) var(--font-sans)',
      color: 'var(--text-helper)'
    }
  }, helperText) : null);
}
Object.assign(__ds_scope, { NumberInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NumberInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Carbon radio button — circular, label to the right. Use within a group sharing `name`. */
function RadioButton({
  id,
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--spacing-03)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
      letterSpacing: 'var(--type-ls-body-compact-01)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '18px',
      height: '18px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      margin: 0,
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      border: `1px solid ${disabled ? 'var(--border-disabled)' : 'var(--icon-primary)'}`,
      background: 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "rb-dot",
    style: {
      position: 'absolute',
      top: '4px',
      left: '4px',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'var(--icon-primary)',
      opacity: 0,
      pointerEvents: 'none',
      transition: 'opacity var(--duration-fast-02) var(--easing-productive-standard)'
    }
  }), /*#__PURE__*/React.createElement("style", null, `#${CSS.escape(inputId)}:checked + .rb-dot { opacity: 1; }`)), label);
}
Object.assign(__ds_scope, { RadioButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Search.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Carbon search field — leading magnifier, fill background, clear button when filled. */
function Search({
  id,
  placeholder = 'Search',
  value,
  defaultValue = '',
  size = 'md',
  disabled = false,
  onChange,
  onClear,
  style,
  ...rest
}) {
  const heights = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem'
  };
  const inputId = id || React.useId();
  const controlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const v = controlled ? value : internal;
  const [focus, setFocus] = React.useState(false);
  const handleChange = e => {
    if (!controlled) setInternal(e.target.value);
    onChange && onChange(e);
  };
  const clear = () => {
    if (!controlled) setInternal('');
    onClear && onClear();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: heights[size] || heights.md,
      background: 'var(--field-01)',
      borderBottom: `1px solid ${focus ? 'var(--focus)' : 'var(--border-strong-01)'}`,
      outline: focus ? '2px solid var(--focus)' : 'none',
      outlineOffset: '-2px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:search",
    width: "16",
    height: "16",
    style: {
      position: 'absolute',
      left: '16px',
      color: 'var(--icon-secondary)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "text",
    role: "searchbox",
    placeholder: placeholder,
    value: v,
    disabled: disabled,
    onChange: handleChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: '100%',
      border: 'none',
      background: 'transparent',
      outline: 'none',
      padding: '0 var(--spacing-08) 0 calc(var(--spacing-05) + 24px)',
      color: 'var(--text-primary)',
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
      letterSpacing: 'var(--type-ls-body-compact-01)'
    }
  }, rest)), v && !disabled && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Clear search",
    onClick: clear,
    style: {
      position: 'absolute',
      right: 0,
      width: heights[size] || heights.md,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--icon-primary)'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:close",
    width: "16",
    height: "16"
  })));
}
Object.assign(__ds_scope, { Search });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Search.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon select (native dropdown) with the field's fill + bottom rule and a
 * chevron affordance on the right.
 */
function Select({
  id,
  label,
  value,
  defaultValue,
  options = [],
  size = 'md',
  helperText,
  invalid = false,
  invalidText,
  disabled = false,
  onChange,
  children,
  style,
  ...rest
}) {
  const heights = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem'
  };
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = invalid ? 'var(--support-error)' : focus ? 'var(--focus)' : 'var(--border-strong-01)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-02)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-size-label-01)/var(--type-lh-label-01) var(--font-sans)',
      letterSpacing: 'var(--type-ls-label-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: heights[size] || heights.md,
      padding: '0 var(--spacing-08) 0 var(--spacing-05)',
      background: disabled ? 'transparent' : 'var(--field-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      border: 'none',
      borderBottom: `1px solid ${borderColor}`,
      outline: focus && !invalid ? '2px solid var(--focus)' : 'none',
      outlineOffset: '-2px',
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
      letterSpacing: 'var(--type-ls-body-compact-01)',
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), children || options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:chevron-down",
    width: "16",
    height: "16",
    style: {
      position: 'absolute',
      right: '16px',
      pointerEvents: 'none',
      color: disabled ? 'var(--icon-disabled)' : 'var(--icon-primary)'
    }
  })), invalid && invalidText ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-helper-text-01)/var(--type-lh-helper-text-01) var(--font-sans)',
      color: 'var(--text-error)'
    }
  }, invalidText) : helperText ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-helper-text-01)/var(--type-lh-helper-text-01) var(--font-sans)',
      color: 'var(--text-helper)'
    }
  }, helperText) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon slider — labeled track with min/max captions, a filled progress
 * portion, a draggable thumb, and a numeric readout field.
 */
function Slider({
  id,
  label,
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  hideTextInput = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const inputId = id || React.useId();
  const controlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const v = controlled ? value : internal;
  const pct = (v - min) / (max - min) * 100;
  const set = n => {
    n = Math.min(max, Math.max(min, n));
    if (!controlled) setInternal(n);
    onChange && onChange(n);
  };
  const cap = {
    font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
    color: 'var(--text-primary)',
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-03)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-size-label-01)/var(--type-lh-label-01) var(--font-sans)',
      letterSpacing: 'var(--type-ls-label-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-05)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: cap
  }, min), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: v,
    disabled: disabled,
    onChange: e => set(Number(e.target.value)),
    className: "carbon-slider",
    style: {
      flex: 1,
      height: '40px',
      appearance: 'none',
      WebkitAppearance: 'none',
      background: 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      '--pct': pct + '%',
      '--fill': disabled ? 'var(--border-disabled)' : 'var(--interactive)'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: cap
  }, max), !hideTextInput && /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: v,
    min: min,
    max: max,
    step: step,
    disabled: disabled,
    onChange: e => set(Number(e.target.value)),
    style: {
      width: '64px',
      height: '40px',
      textAlign: 'left',
      padding: '0 var(--spacing-04)',
      background: disabled ? 'transparent' : 'var(--field-01)',
      color: 'var(--text-primary)',
      border: 'none',
      borderBottom: '1px solid var(--border-strong-01)',
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)'
    }
  })), /*#__PURE__*/React.createElement("style", null, `
        .carbon-slider { background: transparent; }
        .carbon-slider::-webkit-slider-runnable-track {
          height: 4px; border-radius: 0;
          background: linear-gradient(var(--fill), var(--fill)) 0/var(--pct) 100% no-repeat, var(--border-subtle-01);
        }
        .carbon-slider::-moz-range-track { height: 4px; background: var(--border-subtle-01); }
        .carbon-slider::-moz-range-progress { height: 4px; background: var(--fill); }
        .carbon-slider::-webkit-slider-thumb {
          appearance: none; -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%;
          background: var(--fill); margin-top: -5px; cursor: pointer; border: 2px solid var(--fill);
        }
        .carbon-slider::-moz-range-thumb {
          width: 14px; height: 14px; border-radius: 50%; background: var(--fill); border: 2px solid var(--fill); cursor: pointer;
        }
        .carbon-slider:focus-visible { outline: none; }
        .carbon-slider:focus-visible::-webkit-slider-thumb { box-shadow: 0 0 0 2px var(--focus); }
      `));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Carbon multi-line text area. Same field language as TextInput, taller. */
function TextArea({
  id,
  label,
  placeholder,
  value,
  defaultValue,
  rows = 4,
  helperText,
  invalid = false,
  invalidText,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = invalid ? 'var(--support-error)' : focus ? 'var(--focus)' : 'var(--border-strong-01)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-02)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-size-label-01)/var(--type-lh-label-01) var(--font-sans)',
      letterSpacing: 'var(--type-ls-label-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      resize: 'vertical',
      padding: 'var(--spacing-04) var(--spacing-05)',
      background: disabled ? 'transparent' : 'var(--field-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      border: 'none',
      borderBottom: `1px solid ${borderColor}`,
      outline: focus && !invalid ? '2px solid var(--focus)' : 'none',
      outlineOffset: '-2px',
      font: 'var(--type-size-body-compact-01)/var(--type-lh-body-compact-01) var(--font-sans)',
      letterSpacing: 'var(--type-ls-body-compact-01)'
    }
  }, rest)), invalid && invalidText ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-helper-text-01)/var(--type-lh-helper-text-01) var(--font-sans)',
      color: 'var(--text-error)'
    }
  }, invalidText) : helperText ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-helper-text-01)/var(--type-lh-helper-text-01) var(--font-sans)',
      color: 'var(--text-helper)'
    }
  }, helperText) : null);
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon text input. Label above, single-line field with a subtle fill and a
 * bottom border that thickens to the interactive color on focus. Supports
 * helper text and an invalid state with error icon + message.
 */
function TextInput({
  id,
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text',
  size = 'md',
  helperText,
  invalid = false,
  invalidText,
  disabled = false,
  readOnly = false,
  onChange,
  style,
  ...rest
}) {
  const heights = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem'
  };
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = invalid ? 'var(--support-error)' : focus ? 'var(--focus)' : 'var(--border-strong-01)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-02)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-weight-label-01) var(--type-size-label-01)/var(--type-lh-label-01) var(--font-sans)',
      letterSpacing: 'var(--type-ls-label-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    readOnly: readOnly,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: heights[size] || heights.md,
      padding: '0 var(--spacing-05)',
      paddingRight: invalid ? 'var(--spacing-08)' : 'var(--spacing-05)',
      background: disabled ? 'transparent' : 'var(--field-01)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      border: 'none',
      borderBottom: `1px solid ${borderColor}`,
      outline: focus && !invalid ? '2px solid var(--focus)' : 'none',
      outlineOffset: '-2px',
      font: 'var(--type-weight-body-compact-01) var(--type-size-body-compact-01)/1 var(--font-sans)',
      letterSpacing: 'var(--type-ls-body-compact-01)',
      cursor: disabled ? 'not-allowed' : 'text'
    }
  }, rest)), invalid && /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:warning-filled",
    width: "16",
    height: "16",
    style: {
      position: 'absolute',
      right: '16px',
      color: 'var(--support-error)'
    }
  })), invalid && invalidText ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-helper-text-01)/var(--type-lh-helper-text-01) var(--font-sans)',
      letterSpacing: 'var(--type-ls-helper-text-01)',
      color: 'var(--text-error)'
    }
  }, invalidText) : helperText ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-helper-text-01)/var(--type-lh-helper-text-01) var(--font-sans)',
      letterSpacing: 'var(--type-ls-helper-text-01)',
      color: 'var(--text-helper)'
    }
  }, helperText) : null);
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon toggle (switch). Pill track turns green when on; white knob slides.
 * Optional top label and on/off state text.
 */
function Toggle({
  id,
  label,
  toggled,
  defaultToggled = false,
  size = 'md',
  labelOn = 'On',
  labelOff = 'Off',
  hideStateText = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const inputId = id || React.useId();
  const controlled = toggled !== undefined;
  const [internal, setInternal] = React.useState(defaultToggled);
  const on = controlled ? toggled : internal;
  const dims = size === 'sm' ? {
    w: 32,
    h: 16,
    k: 10,
    tx: 16
  } : {
    w: 48,
    h: 24,
    k: 18,
    tx: 24
  };
  const toggle = () => {
    if (disabled) return;
    if (!controlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-03)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-label-01)/var(--type-lh-label-01) var(--font-sans)',
      letterSpacing: 'var(--type-ls-label-01)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--spacing-03)'
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: inputId,
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: 'relative',
      width: dims.w,
      height: dims.h,
      padding: 0,
      border: 'none',
      borderRadius: dims.h,
      flexShrink: 0,
      background: disabled ? 'var(--button-disabled)' : on ? 'var(--support-success)' : 'var(--toggle-off)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast-02) var(--easing-productive-standard)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: 'var(--white)',
      transform: on ? `translateX(${dims.tx}px)` : 'translateX(0)',
      transition: 'transform var(--duration-fast-02) var(--easing-productive-standard)'
    }
  })), !hideStateText && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, on ? labelOn : labelOff)));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon breadcrumb trail. Pass `items` ({ label, href }); the last item is
 * rendered as the current page (no link) unless you set `noTrailingSlash`.
 */
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '0',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center'
      }
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
        color: 'var(--text-primary)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        font: 'var(--type-size-body-compact-01)/1 var(--font-sans)',
        color: 'var(--link-primary)',
        textDecoration: 'underline',
        textUnderlineOffset: '2px'
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--text-secondary)',
        padding: '0 var(--spacing-03)'
      }
    }, "/"));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Carbon link — inline anchor in the link color, with optional trailing icon. */
function Link({
  children,
  href = '#',
  size = 'md',
  icon,
  inline = true,
  disabled = false,
  visited = false,
  onClick,
  style,
  ...rest
}) {
  const fontSize = size === 'sm' ? 'var(--type-size-label-01)' : size === 'lg' ? 'var(--type-size-body-02)' : 'var(--type-size-body-01)';
  const color = disabled ? 'var(--text-disabled)' : visited ? 'var(--link-visited)' : 'var(--link-primary)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: disabled ? undefined : href,
    onClick: disabled ? e => e.preventDefault() : onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      color,
      font: `${fontSize}/1.4 var(--font-sans)`,
      textDecoration: inline ? 'underline' : 'none',
      textUnderlineOffset: '2px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      pointerEvents: disabled ? 'none' : 'auto',
      ...style
    }
  }, rest), children, icon && /*#__PURE__*/React.createElement("iconify-icon", {
    icon: icon,
    width: "16",
    height: "16"
  }));
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Link.jsx", error: String((e && e.message) || e) }); }

// components/navigation/OverflowMenu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon overflow menu — a ⋮ trigger that opens a popover list of actions.
 * Items: { label, icon?, danger?, onClick }. Closes on outside click / select.
 */
function OverflowMenu({
  items = [],
  icon = 'carbon:overflow-menu-vertical',
  label = 'Open menu',
  size = 'md',
  align = 'right',
  style,
  ...rest
}) {
  const dims = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem'
  };
  const d = dims[size] || dims.md;
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-haspopup": "menu",
    "aria-expanded": open,
    "aria-label": label,
    onClick: () => setOpen(o => !o),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: open ? 'var(--background-active)' : 'transparent',
      color: 'var(--icon-primary)',
      cursor: 'pointer',
      transition: 'background var(--duration-fast-01) var(--easing-productive-standard)'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: icon,
    width: "16",
    height: "16"
  })), open && /*#__PURE__*/React.createElement("ul", {
    role: "menu",
    style: {
      position: 'absolute',
      top: '100%',
      [align]: 0,
      zIndex: 300,
      minWidth: '160px',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      background: 'var(--layer-02)',
      boxShadow: 'var(--shadow-md)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    role: "menuitem",
    onClick: () => {
      setOpen(false);
      it.onClick && it.onClick();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-03)',
      height: '40px',
      padding: '0 var(--spacing-05)',
      cursor: 'pointer',
      color: it.danger ? 'var(--text-error)' : 'var(--text-primary)',
      font: 'var(--type-size-body-compact-01)/1 var(--font-sans)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--layer-hover-01)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, it.icon && /*#__PURE__*/React.createElement("iconify-icon", {
    icon: it.icon,
    width: "16",
    height: "16",
    style: {
      color: it.danger ? 'var(--support-error)' : 'var(--icon-primary)'
    }
  }), it.label))));
}
Object.assign(__ds_scope, { OverflowMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/OverflowMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ProgressIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carbon progress indicator — a horizontal multi-step tracker. Steps before the
 * current index render complete (filled check), the current step is ringed, and
 * later steps are incomplete.
 */
function ProgressIndicator({
  steps = [],
  currentIndex = 0,
  onStepClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), steps.map((s, i) => {
    const label = typeof s === 'string' ? s : s.label;
    const secondary = typeof s === 'object' ? s.secondary : null;
    const state = i < currentIndex ? 'complete' : i === currentIndex ? 'current' : 'incomplete';
    const color = state === 'incomplete' ? 'var(--icon-disabled)' : 'var(--interactive)';
    const clickable = onStepClick && i <= currentIndex;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        paddingRight: 'var(--spacing-05)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, state === 'complete' ? /*#__PURE__*/React.createElement("iconify-icon", {
      icon: "carbon:checkmark-outline",
      width: "18",
      height: "18",
      style: {
        color
      }
    }) : state === 'current' ? /*#__PURE__*/React.createElement("iconify-icon", {
      icon: "carbon:circle-dash",
      width: "18",
      height: "18",
      style: {
        color
      }
    }) : /*#__PURE__*/React.createElement("iconify-icon", {
      icon: "carbon:radio-button",
      width: "18",
      height: "18",
      style: {
        color
      }
    }), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        marginLeft: '8px',
        background: i < currentIndex ? 'var(--interactive)' : 'var(--border-subtle-01)'
      }
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: !clickable,
      onClick: () => clickable && onStepClick(i),
      style: {
        border: 'none',
        background: 'transparent',
        textAlign: 'left',
        padding: 0,
        cursor: clickable ? 'pointer' : 'default',
        color: state === 'incomplete' ? 'var(--text-secondary)' : 'var(--text-primary)',
        font: `${state === 'current' ? 600 : 400} var(--type-size-body-compact-01)/1.3 var(--font-sans)`
      }
    }, label, secondary && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: 'var(--type-size-label-01)/1.3 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, secondary)));
  }));
}
Object.assign(__ds_scope, { ProgressIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ProgressIndicator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/carbon-app/App.jsx
try { (() => {
// App — wires the shell, screen routing, and a create-confirmation toast.
const {
  ToastNotification,
  Button,
  Tile
} = window.CarbonDesignSystem_53f452;
function Placeholder({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1120px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 var(--spacing-06)',
      font: 'var(--type-weight-heading-05) var(--type-size-heading-05)/1 var(--font-sans)'
    }
  }, title), /*#__PURE__*/React.createElement(Tile, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--spacing-04)',
      padding: 'var(--spacing-12) var(--spacing-07)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:data-view-alt",
    width: "32",
    height: "32",
    style: {
      color: 'var(--icon-secondary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-weight-heading-03) var(--type-size-heading-03) var(--font-sans)'
    }
  }, "Nothing here yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      font: 'var(--type-size-body-01)/var(--type-lh-body-01) var(--font-sans)',
      maxWidth: '40ch'
    }
  }, "This area is part of the kit's navigation scaffold. Swap in the real ", title.toLowerCase(), " view when you build it.")));
}
function App() {
  const [page, setPage] = React.useState('dashboard');
  const [toast, setToast] = React.useState(false);
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 3500);
    return () => clearTimeout(t);
  }, [toast]);
  const create = () => {
    setPage('patients');
    setToast(true);
  };
  let content;
  if (page === 'dashboard') content = /*#__PURE__*/React.createElement(Dashboard, {
    setPage: setPage
  });else if (page === 'patients') content = /*#__PURE__*/React.createElement(PatientsPage, {
    onAdd: () => setPage('new')
  });else if (page === 'new') content = /*#__PURE__*/React.createElement(FormPage, {
    onCancel: () => setPage('patients'),
    onCreate: create
  });else content = /*#__PURE__*/React.createElement(Placeholder, {
    title: page.charAt(0).toUpperCase() + page.slice(1)
  });

  // 'new' is a sub-view of patients — keep Patients highlighted in the nav.
  const navPage = page === 'new' ? 'patients' : page;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Shell, {
    page: navPage,
    setPage: setPage
  }, content), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '64px',
      right: '16px',
      zIndex: 9500
    }
  }, /*#__PURE__*/React.createElement(ToastNotification, {
    kind: "success",
    title: "Patient created",
    subtitle: "PT-1048 added to Patients.",
    caption: "Just now",
    onClose: () => setToast(false)
  })));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/carbon-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/carbon-app/Dashboard.jsx
try { (() => {
// Dashboard screen — page header, metric tiles, status, recent-activity table.
const {
  Breadcrumb,
  Tile,
  Tag,
  DataTable,
  InlineNotification,
  Button
} = window.CarbonDesignSystem_53f452;
function Dashboard({
  setPage
}) {
  const metrics = [{
    n: '1,284',
    l: 'Active patients',
    d: '+4.2% vs last month'
  }, {
    n: '96.2%',
    l: 'Visit adherence',
    d: 'Target 95%'
  }, {
    n: '38',
    l: 'Sites reporting',
    d: '2 pending sync'
  }, {
    n: '17',
    l: 'Open alerts',
    d: '5 high priority'
  }];
  const rows = [{
    id: 1,
    who: 'A. Mensah',
    action: 'Updated care plan',
    site: 'Rwanda · Butaro',
    when: '2m ago',
    status: /*#__PURE__*/React.createElement(Tag, {
      type: "green"
    }, "Done")
  }, {
    id: 2,
    who: 'J. Rivera',
    action: 'Flagged lab result',
    site: 'Peru · Carabayllo',
    when: '18m ago',
    status: /*#__PURE__*/React.createElement(Tag, {
      type: "red"
    }, "Urgent")
  }, {
    id: 3,
    who: 'K. Banda',
    action: 'Imported records',
    site: 'Malawi · Neno',
    when: '1h ago',
    status: /*#__PURE__*/React.createElement(Tag, {
      type: "blue"
    }, "In review")
  }, {
    id: 4,
    who: 'S. Pierre',
    action: 'Closed alert',
    site: 'Haiti · Mirebalais',
    when: '3h ago',
    status: /*#__PURE__*/React.createElement(Tag, {
      type: "gray"
    }, "Closed")
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-06)',
      maxWidth: '1120px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Dashboard'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: 'var(--spacing-04)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-weight-heading-05) var(--type-size-heading-05)/var(--type-lh-heading-05) var(--font-sans)'
    }
  }, "Program overview"), /*#__PURE__*/React.createElement(Button, {
    kind: "primary",
    size: "md",
    icon: "carbon:add",
    onClick: () => setPage('patients')
  }, "New patient"))), /*#__PURE__*/React.createElement(InlineNotification, {
    kind: "warning",
    title: "2 sites haven't synced in 24h",
    subtitle: "Butaro and Neno \u2014 last sync yesterday 14:00 UTC."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1px',
      background: 'var(--border-subtle-00)'
    }
  }, metrics.map(m => /*#__PURE__*/React.createElement(Tile, {
    key: m.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '300 var(--type-size-heading-04)/1 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, m.n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-size-heading-compact-01) var(--font-sans)',
      fontWeight: 600,
      marginTop: 'var(--spacing-04)'
    }
  }, m.l), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-size-label-01) var(--font-sans)',
      color: 'var(--text-secondary)',
      marginTop: 'var(--spacing-02)'
    }
  }, m.d)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--spacing-04)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--type-weight-heading-03) var(--type-size-heading-03)/1 var(--font-sans)'
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement(Button, {
    kind: "ghost",
    size: "sm",
    icon: "carbon:arrow-right",
    onClick: () => setPage('reports')
  }, "View all")), /*#__PURE__*/React.createElement(DataTable, {
    headers: [{
      key: 'who',
      header: 'Member'
    }, {
      key: 'action',
      header: 'Activity'
    }, {
      key: 'site',
      header: 'Site'
    }, {
      key: 'when',
      header: 'When'
    }, {
      key: 'status',
      header: 'Status'
    }],
    rows: rows
  })));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/carbon-app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/carbon-app/FormPage.jsx
try { (() => {
// New-patient form screen — composes the form primitives in a Carbon two-column layout.
const {
  Breadcrumb,
  TextInput,
  Select,
  RadioButton,
  Toggle,
  TextArea,
  Button,
  Tile
} = window.CarbonDesignSystem_53f452;
function FormPage({
  onCancel,
  onCreate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '640px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Patients',
      href: '#'
    }, {
      label: 'New patient'
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 'var(--spacing-04) 0 var(--spacing-02)',
      font: 'var(--type-weight-heading-05) var(--type-size-heading-05)/1 var(--font-sans)'
    }
  }, "New patient"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--spacing-06)',
      color: 'var(--text-secondary)',
      font: 'var(--type-size-body-02)/var(--type-lh-body-02) var(--font-sans)'
    }
  }, "Enrollment details. Required fields are validated on save."), /*#__PURE__*/React.createElement(Tile, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-06)',
      padding: 'var(--spacing-06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--spacing-05)'
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "First name",
    placeholder: "Amara"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Last name",
    placeholder: "Mensah"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--spacing-05)'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Program",
    options: ['Tuberculosis', 'HIV', 'Maternal health', 'Mental health']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Site",
    options: ['Butaro', 'Carabayllo', 'Neno', 'Mirebalais']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-03)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-size-label-01) var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "Enrollment type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--spacing-07)'
    }
  }, /*#__PURE__*/React.createElement(RadioButton, {
    name: "enroll",
    value: "new",
    label: "New enrollment",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(RadioButton, {
    name: "enroll",
    value: "transfer",
    label: "Transfer"
  }), /*#__PURE__*/React.createElement(RadioButton, {
    name: "enroll",
    value: "reactivation",
    label: "Reactivation"
  }))), /*#__PURE__*/React.createElement(TextArea, {
    label: "Clinical notes",
    rows: 4,
    placeholder: "Add any relevant history\u2026",
    helperText: "Visible to the care team only."
  }), /*#__PURE__*/React.createElement(Toggle, {
    label: "Consent to SMS reminders",
    defaultToggled: true,
    labelOn: "Enabled",
    labelOff: "Disabled"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--spacing-03)',
      marginTop: 'var(--spacing-06)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    kind: "secondary",
    size: "lg",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    kind: "primary",
    size: "lg",
    icon: "carbon:save",
    onClick: onCreate
  }, "Create patient")));
}
window.FormPage = FormPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/carbon-app/FormPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/carbon-app/PatientsPage.jsx
try { (() => {
// Patients screen — table with a toolbar (search + filters + primary action) and pagination.
const {
  Breadcrumb,
  Search,
  Button,
  Tag,
  DataTable,
  Pagination,
  IconButton
} = window.CarbonDesignSystem_53f452;
const ALL_PATIENTS = [{
  id: 'PT-1042',
  name: 'Amara Mensah',
  program: 'Tuberculosis',
  site: 'Butaro',
  status: /*#__PURE__*/React.createElement(Tag, {
    type: "green"
  }, "Active")
}, {
  id: 'PT-1043',
  name: 'João Rivera',
  program: 'HIV',
  site: 'Carabayllo',
  status: /*#__PURE__*/React.createElement(Tag, {
    type: "green"
  }, "Active")
}, {
  id: 'PT-1044',
  name: 'Kondwani Banda',
  program: 'Maternal health',
  site: 'Neno',
  status: /*#__PURE__*/React.createElement(Tag, {
    type: "blue"
  }, "Intake")
}, {
  id: 'PT-1045',
  name: 'Sophonie Pierre',
  program: 'Tuberculosis',
  site: 'Mirebalais',
  status: /*#__PURE__*/React.createElement(Tag, {
    type: "gray"
  }, "Inactive")
}, {
  id: 'PT-1046',
  name: 'Thandiwe Moyo',
  program: 'Mental health',
  site: 'Neno',
  status: /*#__PURE__*/React.createElement(Tag, {
    type: "green"
  }, "Active")
}, {
  id: 'PT-1047',
  name: 'Carlos Núñez',
  program: 'HIV',
  site: 'Carabayllo',
  status: /*#__PURE__*/React.createElement(Tag, {
    type: "red"
  }, "Urgent")
}];
function PatientsPage({
  onAdd
}) {
  const [q, setQ] = React.useState('');
  const filtered = ALL_PATIENTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.id.toLowerCase().includes(q.toLowerCase()));
  const rows = filtered.map(p => ({
    id: p.id,
    pid: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, p.id),
    name: p.name,
    program: p.program,
    site: p.site,
    status: p.status,
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "carbon:overflow-menu-vertical",
      label: "Row actions",
      size: "sm"
    })
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-05)',
      maxWidth: '1120px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Patients'
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 'var(--spacing-04) 0 0',
      font: 'var(--type-weight-heading-05) var(--type-size-heading-05)/1 var(--font-sans)'
    }
  }, "Patients")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: '1px',
      background: 'var(--border-subtle-00)',
      border: '1px solid var(--border-subtle-00)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Search, {
    placeholder: "Search by name or ID",
    value: q,
    onChange: e => setQ(e.target.value),
    onClear: () => setQ('')
  })), /*#__PURE__*/React.createElement(Button, {
    kind: "ghost",
    size: "md",
    icon: "carbon:filter",
    style: {
      minWidth: 'auto'
    }
  }, "Filter"), /*#__PURE__*/React.createElement(Button, {
    kind: "primary",
    size: "md",
    icon: "carbon:add",
    onClick: onAdd
  }, "Add patient")), /*#__PURE__*/React.createElement(DataTable, {
    headers: [{
      key: 'pid',
      header: 'ID'
    }, {
      key: 'name',
      header: 'Name'
    }, {
      key: 'program',
      header: 'Program'
    }, {
      key: 'site',
      header: 'Site'
    }, {
      key: 'status',
      header: 'Status'
    }, {
      key: 'actions',
      header: ''
    }],
    rows: rows
  }), /*#__PURE__*/React.createElement(Pagination, {
    page: 1,
    pageSize: 10,
    totalItems: filtered.length
  }));
}
window.PatientsPage = PatientsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/carbon-app/PatientsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/carbon-app/Shell.jsx
try { (() => {
// Carbon UI Shell — dark top header + left side nav + content slot.
// Composes design-system tokens directly; nav state is lifted to the parent.
const {
  IconButton
} = window.CarbonDesignSystem_53f452;
const NAV = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'carbon:dashboard'
}, {
  id: 'patients',
  label: 'Patients',
  icon: 'carbon:user-multiple'
}, {
  id: 'reports',
  label: 'Reports',
  icon: 'carbon:chart-line'
}, {
  id: 'sites',
  label: 'Sites',
  icon: 'carbon:location'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'carbon:settings'
}];
function Shell({
  page,
  setPage,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--background)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      background: '#161616',
      color: '#f4f4f4',
      borderBottom: '1px solid #393939'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 48,
      height: 48,
      border: 'none',
      background: 'transparent',
      color: '#f4f4f4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    "aria-label": "Open menu"
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "carbon:menu",
    width: "20",
    height: "20"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px',
      padding: '0 16px',
      textDecoration: 'none',
      color: '#f4f4f4',
      font: 'var(--type-size-body-compact-01) var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "Carbon"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#c6c6c6'
    }
  }, "Health Platform")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, ['Programs', 'Insights', 'Docs'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      height: '100%',
      color: '#c6c6c6',
      textDecoration: 'none',
      font: 'var(--type-size-body-compact-01) var(--font-sans)',
      borderBottom: '2px solid transparent'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      height: '100%'
    }
  }, ['carbon:search', 'carbon:notification', 'carbon:switcher'].map(ic => /*#__PURE__*/React.createElement("button", {
    key: ic,
    style: {
      width: 48,
      height: 48,
      border: 'none',
      background: 'transparent',
      color: '#f4f4f4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: ic,
    width: "20",
    height: "20"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      alignSelf: 'center',
      margin: '0 12px',
      borderRadius: '50%',
      background: 'var(--teal-60)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 var(--type-size-label-01) var(--font-sans)'
    }
  }, "AM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: 'calc(100vh - 48px)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      width: '256px',
      flexShrink: 0,
      background: 'var(--layer-01)',
      borderRight: '1px solid var(--border-subtle-00)',
      paddingTop: 'var(--spacing-03)'
    }
  }, NAV.map(item => {
    const on = page === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => setPage(item.id),
      style: {
        width: '100%',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-05)',
        padding: '0 var(--spacing-05)',
        border: 'none',
        textAlign: 'left',
        cursor: 'pointer',
        background: on ? 'var(--layer-accent-01)' : 'transparent',
        color: 'var(--text-primary)',
        borderLeft: on ? '3px solid var(--border-interactive)' : '3px solid transparent',
        font: `${on ? 600 : 400} var(--type-size-body-compact-01)/1 var(--font-sans)`
      }
    }, /*#__PURE__*/React.createElement("iconify-icon", {
      icon: item.icon,
      width: "16",
      height: "16",
      style: {
        color: 'var(--icon-primary)'
      }
    }), item.label);
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: 'var(--spacing-07)',
      background: 'var(--background)'
    }
  }, children)));
}
window.Shell = Shell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/carbon-app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nicu-ward/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nicu-ward/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.CodeSnippet = __ds_scope.CodeSnippet;

__ds_ns.ContentSwitcher = __ds_scope.ContentSwitcher;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tile = __ds_scope.Tile;

__ds_ns.InlineNotification = __ds_scope.InlineNotification;

__ds_ns.Loading = __ds_scope.Loading;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.ToastNotification = __ds_scope.ToastNotification;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.FileUploader = __ds_scope.FileUploader;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.NumberInput = __ds_scope.NumberInput;

__ds_ns.RadioButton = __ds_scope.RadioButton;

__ds_ns.Search = __ds_scope.Search;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.OverflowMenu = __ds_scope.OverflowMenu;

__ds_ns.ProgressIndicator = __ds_scope.ProgressIndicator;

})();
