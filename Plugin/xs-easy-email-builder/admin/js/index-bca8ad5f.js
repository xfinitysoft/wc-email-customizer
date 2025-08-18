import { g as getEditorRoot, P as PLUGINS_CONTAINER_ID, F as FocusBlockLayoutContext, I as IconFont, B as BasicType, u as useForm, a as useField, b as getShadowRoot, D as DATA_CONTENT_EDITABLE_TYPE, C as ContentEditableType, c as classnames, R as ReactFinalForm, S as Stack$1, d as SearchField, T as TextStyle, e as SwitchField, E as EMAIL_BLOCK_CLASS_NAME, f as useFontFamily, h as useBlock, i as useEditorContext, j as useFocusIdx, k as BlockAttributeConfigurationManager, l as SelectionRangeProvider, m as PresetColorsProvider, M as MergeTags$1, n as SelectionRangeContext, o as ColorPicker, p as useEditorProps, q as getParentIdx, r as MergeTagBadge, s as RICH_TEXT_TOOL_BAR, t as FIXED_CONTAINER_ID, v as RICH_TEXT_BAR_ID, w as CONTENT_EDITABLE_CLASS_NAME, x as Field, y as DATA_CONTENT_EDITABLE_IDX, z as TextField, A as TextAreaField, G as ImageUploaderField, H as getIndexByIdx, J as styles, K as getSiblingIdx, L as scrollBlockEleIntoView, N as useHoverIdx, O as useDataTransfer, Q as useRefState, U as BlockManager, V as getBlockNodeByChildEle, W as getDirectionPosition, X as getNodeIdxFromClassName, Y as getBlockTitle, Z as getNodeIdxClassName, _ as styles$1, $ as getIconNameByBlockType, a0 as getChildIdx, a1 as DATA_ATTRIBUTE_DROP_CONTAINER, a2 as BlockTree, a3 as getPageIdx, a4 as BlockAvatarWrapper, a5 as BlocksPanel, a6 as AdvancedType, a7 as isTextBlock, a8 as getBlockNodeByIdx, a9 as useLazyState, aa as getNodeTypeFromClassName, ab as useActiveTab, ac as ActiveTabKeys, ad as styles$2, ae as product, af as product1, ag as product2, ah as JsonToMjml, ai as template, aj as FieldArray, ak as AttributesPanelWrapper, al as SelectField, am as InputWithUnitField, an as FontFamily$1, ao as ColorPickerField, ap as createSliceState, aq as services, ar as useLoading, as as pushEvent, at as useFormState, au as ConfirmBeforeLeavePage, av as useLocalStorage, aw as BlockMaskWrapper, ax as useAppSelector, ay as CreateTemplate, az as BlockMarketManager, aA as getTemplate, aB as Loading, aC as EmailEditorProvider, aD as EmailEditor, aE as __vitePreload } from "./index-785da1c1.js";
import { r as react, R as React, U as Tooltip, G as Grid, L as Space, P as Popover, z as Menu, o as ReactDOM, p as reactDom, l as lodash, E as Modal, v as v4, B as Button, a9 as ConfigProvider, aa as enUS, ab as Layout, K as Card, ac as IconRight, ad as IconLeft, J as Tabs, ae as getAugmentedNamespace, a3 as commonjsGlobal, k as useHistory, af as useLocation, V as IconQuestionCircle, ag as Table, ah as Link$1, ai as IconCopy, M as Message, g as useDispatch, n as mjml, q as Spin, t as IconPlus, x as IconDelete, X as Collapse, aj as has_1, ak as _baseFor, al as keys_1, am as _Stack, an as _baseIsEqual, ao as isObject_1, ap as _hasPath, aq as get_1, ar as _isKey, as as _toKey, at as _baseGet, au as identity_1, av as isArray_1, aw as _baseAssignValue, ax as toString_1, ay as _baseSlice, az as Prompt, aA as PageHeader } from "./vendor-62a36e0f.js";
const getPluginElement = () => {
  var _a, _b;
  return (_b = (_a = getEditorRoot()) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.getElementById(PLUGINS_CONTAINER_ID);
};
function useFocusBlockLayout() {
  return react.exports.useContext(FocusBlockLayoutContext);
}
function EyeIcon({
  blockData,
  hidden,
  onToggleVisible
}) {
  if (hidden)
    return /* @__PURE__ */ React.createElement("div", { style: { visibility: "hidden" } }, /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-eye" }));
  if (blockData.type === BasicType.PAGE)
    return null;
  return blockData.data.hidden ? /* @__PURE__ */ React.createElement(
    IconFont,
    {
      onClick: (ev) => onToggleVisible(blockData, ev),
      iconName: "icon-eye-invisible"
    }
  ) : /* @__PURE__ */ React.createElement(
    IconFont,
    {
      onClick: (ev) => onToggleVisible(blockData, ev),
      iconName: "icon-eye"
    }
  );
}
function InlineText({ idx, onChange, children }) {
  const {
    mutators: { setFieldTouched }
  } = useForm();
  useField(idx);
  react.exports.useEffect(() => {
    const shadowRoot = getShadowRoot();
    const onPaste = (e) => {
      var _a, _b;
      if (!(e.target instanceof Element) || !e.target.getAttribute("contenteditable"))
        return;
      e.preventDefault();
      const text = ((_a = e.clipboardData) == null ? void 0 : _a.getData("text/plain")) || "";
      document.execCommand("insertHTML", false, text);
      const contentEditableType = e.target.getAttribute(DATA_CONTENT_EDITABLE_TYPE);
      if (contentEditableType === ContentEditableType.RichText) {
        onChange(e.target.innerHTML || "");
      } else if (contentEditableType === ContentEditableType.Text) {
        onChange(((_b = e.target.textContent) == null ? void 0 : _b.trim()) || "");
      }
    };
    const onInput = (e) => {
      var _a;
      if (e.target instanceof Element && e.target.getAttribute("contenteditable")) {
        const contentEditableType = e.target.getAttribute(DATA_CONTENT_EDITABLE_TYPE);
        if (contentEditableType === ContentEditableType.RichText) {
          onChange(e.target.innerHTML || "");
        } else if (contentEditableType === ContentEditableType.Text) {
          onChange(((_a = e.target.textContent) == null ? void 0 : _a.trim()) || "");
        }
      }
    };
    shadowRoot.addEventListener("paste", onPaste, true);
    shadowRoot.addEventListener("input", onInput);
    return () => {
      shadowRoot.removeEventListener("paste", onPaste, true);
      shadowRoot.removeEventListener("input", onInput);
    };
  }, [onChange, setFieldTouched]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
}
var useInterval = function(callback, delay) {
  var savedCallback = react.exports.useRef(function() {
  });
  react.exports.useEffect(function() {
    savedCallback.current = callback;
  });
  react.exports.useEffect(function() {
    if (delay !== null) {
      var interval_1 = setInterval(function() {
        return savedCallback.current();
      }, delay || 0);
      return function() {
        return clearInterval(interval_1);
      };
    }
    return void 0;
  }, [delay]);
};
const useInterval$1 = useInterval;
const ToolItem$1 = (props) => {
  if (!props.title) {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        tabIndex: -1,
        className: "easy-email-extensions-emailToolItem",
        title: props.title,
        onClick: props.onClick,
        style: props.style
      },
      props.icon
    );
  }
  return /* @__PURE__ */ React.createElement(Tooltip, { mini: true, position: "bottom", content: props.title }, /* @__PURE__ */ React.createElement(
    "button",
    {
      tabIndex: -1,
      className: classnames("easy-email-extensions-emailToolItem", props.isActive && "easy-email-extensions-emailToolItem-active"),
      title: props.title,
      onClick: props.onClick,
      style: props.style
    },
    props.icon
  ));
};
function getAnchorElement$1(node) {
  if (!node)
    return null;
  if (node instanceof HTMLAnchorElement) {
    return node;
  }
  if (node instanceof Element && node.classList.contains(EMAIL_BLOCK_CLASS_NAME))
    return null;
  return getAnchorElement$1(node.parentNode);
}
function getLinkNode$1(currentRange) {
  let linkNode = null;
  if (!currentRange)
    return null;
  linkNode = getAnchorElement$1(currentRange.startContainer);
  return linkNode;
}
function Link(props) {
  const initialValues = react.exports.useMemo(() => {
    let link = "";
    let blank = true;
    let underline = true;
    let linkNode = getLinkNode$1(props.currentRange);
    if (linkNode) {
      link = linkNode.getAttribute("href") || "";
      blank = linkNode.getAttribute("target") === "_blank";
      underline = linkNode.style.textDecoration === "underline";
    }
    return {
      link,
      blank,
      underline,
      linkNode
    };
  }, [props.currentRange]);
  const onSubmit = react.exports.useCallback(
    (values) => {
      props.onChange(values);
    },
    [props]
  );
  return /* @__PURE__ */ React.createElement(
    ReactFinalForm,
    {
      key: initialValues.link,
      enableReinitialize: true,
      initialValues,
      onSubmit
    },
    ({ handleSubmit }) => {
      return /* @__PURE__ */ React.createElement(
        Tooltip,
        {
          ...props,
          trigger: "click",
          color: "#fff",
          position: "tl",
          content: /* @__PURE__ */ React.createElement("div", { style: { color: "#333" } }, /* @__PURE__ */ React.createElement(Stack$1, { vertical: true, spacing: "none" }, /* @__PURE__ */ React.createElement(
            SearchField,
            {
              size: "small",
              name: "link",
              label: t("Link"),
              labelHidden: true,
              searchButton: t("Apply"),
              placeholder: t("https://www.example.com"),
              onSearch: () => handleSubmit()
            }
          )), /* @__PURE__ */ React.createElement(Grid.Row, null, /* @__PURE__ */ React.createElement(Grid.Col, { span: 12 }, /* @__PURE__ */ React.createElement(Space, { align: "center", size: "mini" }, /* @__PURE__ */ React.createElement(TextStyle, { size: "smallest" }, t("Target")), /* @__PURE__ */ React.createElement(
            SwitchField,
            {
              size: "small",
              label: t("Target"),
              labelHidden: true,
              name: "blank",
              checkedText: t("blank"),
              uncheckedText: t("self"),
              inline: true
            }
          ))), /* @__PURE__ */ React.createElement(Grid.Col, { span: 12 }, /* @__PURE__ */ React.createElement(Space, { align: "center", size: "mini" }, /* @__PURE__ */ React.createElement(TextStyle, { size: "smallest" }, t("Underline")), /* @__PURE__ */ React.createElement(
            SwitchField,
            {
              size: "small",
              label: t("Underline"),
              labelHidden: true,
              name: "underline",
              checkedText: t("off"),
              uncheckedText: t("on"),
              inline: true
            }
          )))))
        },
        /* @__PURE__ */ React.createElement(ToolItem$1, { isActive: Boolean(initialValues.link), title: t("Link"), icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-link" }) })
      );
    }
  );
}
const styleText$1 = ".easy-email-extensions-Tools-Popover .arco-popover-content {\n  padding: 0;\n}\n.easy-email-extensions-Tools-Popover .arco-popover-content-inner *::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 5px;\n}\n.easy-email-extensions-Tools-Popover .arco-popover-content-inner *::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\n";
function FontFamily(props) {
  const { fontList: fontList2 } = useFontFamily();
  const { execCommand } = props;
  const [visible, setVisible] = React.useState(false);
  const onChange = react.exports.useCallback(
    (val) => {
      execCommand("fontName", val);
      setVisible(false);
    },
    [execCommand]
  );
  const onVisibleChange = react.exports.useCallback((v) => {
    setVisible(v);
  }, []);
  return /* @__PURE__ */ React.createElement(
    Popover,
    {
      trigger: "click",
      color: "#fff",
      position: "left",
      className: "easy-email-extensions-Tools-Popover",
      popupVisible: visible,
      onVisibleChange,
      content: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", null, styleText$1), /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            maxWidth: 150,
            maxHeight: 350,
            overflowY: "auto",
            overflowX: "hidden"
          }
        },
        /* @__PURE__ */ React.createElement(
          Menu,
          {
            onClickMenuItem: onChange,
            selectedKeys: [],
            style: { border: "none", padding: 0 }
          },
          fontList2.map((item) => /* @__PURE__ */ React.createElement(
            Menu.Item,
            {
              style: { lineHeight: "30px", height: 30 },
              key: item.value
            },
            item.label
          ))
        )
      )),
      getPopupContainer: props.getPopupContainer
    },
    /* @__PURE__ */ React.createElement(
      ToolItem$1,
      {
        title: t("Font family"),
        icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-font-family" })
      }
    )
  );
}
function AttributePanel() {
  const { values, focusBlock } = useBlock();
  const { initialized } = useEditorContext();
  const { focusIdx } = useFocusIdx();
  const Com = focusBlock && BlockAttributeConfigurationManager.get(focusBlock.type);
  const shadowRoot = getShadowRoot();
  if (!initialized)
    return null;
  return /* @__PURE__ */ React.createElement(SelectionRangeProvider, null, /* @__PURE__ */ React.createElement(PresetColorsProvider, null, Com ? /* @__PURE__ */ React.createElement(Com, { key: focusIdx }) : /* @__PURE__ */ React.createElement("div", { style: { marginTop: 200, padding: "0 50px" } }, /* @__PURE__ */ React.createElement(TextStyle, { size: "extraLarge" }, t("No matching components"))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute" } }, /* @__PURE__ */ React.createElement(RichTextField, { idx: focusIdx })), /* @__PURE__ */ React.createElement(React.Fragment, null, shadowRoot && ReactDOM.createPortal(
    /* @__PURE__ */ React.createElement("style", null, `
              .email-block [contentEditable="true"],
              .email-block [contentEditable="true"] * {
                outline: none;
                cursor: text;
              }
              `),
    shadowRoot
  ))));
}
function MergeTags(props) {
  const { execCommand } = props;
  const [visible, setVisible] = React.useState(false);
  const onChange = react.exports.useCallback(
    (val) => {
      execCommand("insertHTML", val);
      setVisible(false);
    },
    [execCommand]
  );
  const onVisibleChange = react.exports.useCallback((v) => {
    setVisible(v);
  }, []);
  return /* @__PURE__ */ React.createElement(
    Popover,
    {
      trigger: "click",
      color: "#fff",
      position: "left",
      popupVisible: visible,
      onVisibleChange,
      style: { zIndex: 10 },
      triggerProps: {
        popupStyle: {
          backgroundColor: "var(--color-bg-5);"
        }
      },
      content: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        MergeTags$1,
        {
          value: "",
          onChange
        }
      )),
      getPopupContainer: props.getPopupContainer
    },
    /* @__PURE__ */ React.createElement(
      ToolItem$1,
      {
        title: t("Merge tag"),
        icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-merge-tags" })
      }
    )
  );
}
function useSelectionRange() {
  const { selectionRange, setSelectionRange } = react.exports.useContext(
    SelectionRangeContext
  );
  const restoreRange = react.exports.useCallback((range2) => {
    const selection = getShadowRoot().getSelection();
    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.setStart(range2.startContainer, range2.startOffset);
    newRange.setEnd(range2.endContainer, range2.endOffset);
    selection.addRange(newRange);
  }, []);
  const setRangeByElement = react.exports.useCallback(
    (element) => {
      const selection = getShadowRoot().getSelection();
      selection.removeAllRanges();
      const newRange = document.createRange();
      newRange.selectNode(element);
      setSelectionRange(newRange);
      selection.addRange(newRange);
    },
    [setSelectionRange]
  );
  return {
    selectionRange,
    setSelectionRange,
    restoreRange,
    setRangeByElement
  };
}
function IconBgColor({ selectionRange, execCommand, getPopoverMountNode }) {
  const color = react.exports.useMemo(() => {
    if (!selectionRange)
      return void 0;
    if (selectionRange.commonAncestorContainer instanceof HTMLElement) {
      return getComputedStyle(selectionRange.commonAncestorContainer).backgroundColor;
    } else if (selectionRange.commonAncestorContainer.parentNode instanceof HTMLElement) {
      return getComputedStyle(selectionRange.commonAncestorContainer.parentNode).backgroundColor;
    }
    return void 0;
  }, [selectionRange]);
  return /* @__PURE__ */ React.createElement(
    ColorPicker,
    {
      label: "",
      showInput: false,
      position: "tl",
      onChange: (color2) => execCommand("hiliteColor", color2),
      getPopupContainer: getPopoverMountNode
    },
    /* @__PURE__ */ React.createElement(
      ToolItem$1,
      {
        icon: /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              position: "relative"
            }
          },
          /* @__PURE__ */ React.createElement(IconFont, { size: 12, iconName: "icon-bg-color", style: { position: "relative", top: "-1px" } }),
          /* @__PURE__ */ React.createElement("div", { style: { borderBottom: `2px solid ${color}`, position: "absolute", width: "130%", left: "-15%", top: 16 } })
        ),
        title: t("Background color")
      }
    )
  );
}
function IconFontColor({ selectionRange, execCommand, getPopoverMountNode }) {
  const color = react.exports.useMemo(() => {
    if (!selectionRange)
      return void 0;
    if (selectionRange.commonAncestorContainer instanceof HTMLElement) {
      return getComputedStyle(selectionRange.commonAncestorContainer).color;
    } else if (selectionRange.commonAncestorContainer.parentNode instanceof HTMLElement) {
      return getComputedStyle(selectionRange.commonAncestorContainer.parentNode).color;
    }
    return void 0;
  }, [selectionRange]);
  return /* @__PURE__ */ React.createElement(
    ColorPicker,
    {
      label: "",
      position: "tl",
      onChange: (color2) => execCommand("foreColor", color2),
      getPopupContainer: getPopoverMountNode,
      showInput: false
    },
    /* @__PURE__ */ React.createElement(
      ToolItem$1,
      {
        icon: /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              position: "relative"
            }
          },
          /* @__PURE__ */ React.createElement(IconFont, { size: 12, iconName: "icon-font-color", style: { position: "relative", top: "-1px" } }),
          /* @__PURE__ */ React.createElement("div", { style: { borderBottom: `2px solid ${color}`, position: "absolute", width: "130%", left: "-15%", top: 16 } })
        ),
        title: t("Text color")
      }
    )
  );
}
function BasicTools() {
  const { copyBlock, removeBlock } = useBlock();
  const { focusIdx, setFocusIdx } = useFocusIdx();
  const { modal, setModalVisible } = useAddToCollection();
  const { onAddCollection } = useEditorProps();
  const handleAddToCollection = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setModalVisible(true);
  };
  const handleCopy = (ev) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    copyBlock(focusIdx);
  };
  const handleDelete = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    removeBlock(focusIdx);
  };
  const handleSelectParent = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setFocusIdx(getParentIdx(focusIdx));
  };
  return /* @__PURE__ */ React.createElement("div", { style: { marginRight: 40 } }, /* @__PURE__ */ React.createElement("span", { style: { position: "relative", marginRight: 10, color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI" } }, "Text"), /* @__PURE__ */ React.createElement(
    ToolItem$1,
    {
      onClick: handleSelectParent,
      title: t("Select parent block"),
      icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-back-parent" })
    }
  ), /* @__PURE__ */ React.createElement(
    ToolItem$1,
    {
      onClick: handleCopy,
      title: t("Copy"),
      icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-copy" })
    }
  ), onAddCollection && /* @__PURE__ */ React.createElement(
    ToolItem$1,
    {
      onClick: handleAddToCollection,
      title: t("Add to collection"),
      icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-collection" })
    }
  ), /* @__PURE__ */ React.createElement(
    ToolItem$1,
    {
      onClick: handleDelete,
      title: t("Delete"),
      icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-delete" })
    }
  ), modal);
}
function getAnchorElement(node) {
  if (!node)
    return null;
  if (node instanceof HTMLAnchorElement) {
    return node;
  }
  if (node instanceof Element && node.classList.contains(EMAIL_BLOCK_CLASS_NAME))
    return null;
  return getAnchorElement(node.parentNode);
}
function getLinkNode(currentRange) {
  let linkNode = null;
  if (!currentRange)
    return null;
  linkNode = getAnchorElement(currentRange.commonAncestorContainer);
  return linkNode;
}
function Unlink(props) {
  const { onChange } = props;
  const linkNode = react.exports.useMemo(() => {
    return getLinkNode(props.currentRange);
  }, [props.currentRange]);
  const onUnlink = react.exports.useCallback(() => {
    if (linkNode == null ? void 0 : linkNode.parentNode) {
      linkNode == null ? void 0 : linkNode.replaceWith(...linkNode.childNodes);
      onChange();
    }
  }, [linkNode, onChange]);
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      color: "#fff",
      position: "tl",
      content: t("Unlink")
    },
    /* @__PURE__ */ React.createElement(ToolItem$1, { title: t("Unlink"), icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-unlink" }), onClick: onUnlink })
  );
}
function getStrikeThroughNode(node) {
  if (!node)
    return null;
  if (node instanceof Element && node.classList.contains(EMAIL_BLOCK_CLASS_NAME))
    return null;
  if (node instanceof Element && node.tagName.toLocaleLowerCase() === "strike")
    return node;
  return getStrikeThroughNode(node.parentNode);
}
function StrikeThrough(props) {
  const { onChange } = props;
  const { setRangeByElement } = useSelectionRange();
  const node = react.exports.useMemo(() => {
    var _a;
    return getStrikeThroughNode((_a = props.currentRange) == null ? void 0 : _a.commonAncestorContainer);
  }, [props.currentRange]);
  const onClick = react.exports.useCallback(() => {
    if (node) {
      setRangeByElement(node);
    }
    onChange();
  }, [node, onChange, setRangeByElement]);
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      color: "#fff",
      position: "tl",
      content: t("Strikethrough")
    },
    /* @__PURE__ */ React.createElement(ToolItem$1, { title: t("Strikethrough"), isActive: Boolean(node), icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-strikethrough" }), onClick })
  );
}
function getUnderlineNode(node) {
  if (!node)
    return null;
  if (node instanceof Element && node.classList.contains(EMAIL_BLOCK_CLASS_NAME))
    return null;
  if (node instanceof Element && node.tagName.toLocaleLowerCase() === "u")
    return node;
  return getUnderlineNode(node.parentNode);
}
function Underline(props) {
  const { onChange } = props;
  const { setRangeByElement } = useSelectionRange();
  const node = react.exports.useMemo(() => {
    var _a;
    return getUnderlineNode((_a = props.currentRange) == null ? void 0 : _a.commonAncestorContainer);
  }, [props.currentRange]);
  const onClick = react.exports.useCallback(() => {
    if (node) {
      setRangeByElement(node);
    }
    onChange();
  }, [node, onChange, setRangeByElement]);
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      color: "#fff",
      position: "tl",
      content: t("Underline")
    },
    /* @__PURE__ */ React.createElement(ToolItem$1, { title: t("Underline"), isActive: Boolean(node), icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-underline" }), onClick })
  );
}
function getItalicNode(node) {
  if (!node)
    return null;
  if (node instanceof Element && node.classList.contains(EMAIL_BLOCK_CLASS_NAME))
    return null;
  if (node instanceof Element && node.tagName.toLocaleLowerCase() === "i")
    return node;
  return getItalicNode(node.parentNode);
}
function Italic(props) {
  const { onChange } = props;
  const { setRangeByElement } = useSelectionRange();
  const node = react.exports.useMemo(() => {
    var _a;
    return getItalicNode((_a = props.currentRange) == null ? void 0 : _a.commonAncestorContainer);
  }, [props.currentRange]);
  const onClick = react.exports.useCallback(() => {
    if (node) {
      setRangeByElement(node);
    }
    onChange();
  }, [node, onChange, setRangeByElement]);
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      color: "#fff",
      position: "tl",
      content: t("Italic")
    },
    /* @__PURE__ */ React.createElement(ToolItem$1, { title: t("Italic"), isActive: Boolean(node), icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-italic" }), onClick })
  );
}
function getBoldNode(node) {
  if (!node)
    return null;
  if (node instanceof Element && node.classList.contains(EMAIL_BLOCK_CLASS_NAME))
    return null;
  if (node instanceof Element && node.tagName.toLocaleLowerCase() === "b")
    return node;
  return getBoldNode(node.parentNode);
}
function Bold(props) {
  const { onChange } = props;
  const { setRangeByElement } = useSelectionRange();
  const node = react.exports.useMemo(() => {
    var _a;
    return getBoldNode((_a = props.currentRange) == null ? void 0 : _a.commonAncestorContainer);
  }, [props.currentRange]);
  const onClick = react.exports.useCallback(() => {
    if (node) {
      setRangeByElement(node);
    }
    onChange();
  }, [node, onChange, setRangeByElement]);
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      color: "#fff",
      position: "tl",
      content: t("Bold")
    },
    /* @__PURE__ */ React.createElement(ToolItem$1, { title: t("Bold"), isActive: Boolean(node), icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-bold" }), onClick })
  );
}
const list = [
  {
    value: "1",
    label: "12px"
  },
  {
    value: "2",
    label: "13px"
  },
  {
    value: "3",
    label: "16px"
  },
  {
    value: "4",
    label: "18px"
  },
  {
    value: "5",
    label: "24px"
  },
  {
    value: "6",
    label: "32px"
  },
  {
    value: "7",
    label: "48px"
  }
];
function FontSize(props) {
  const { execCommand } = props;
  const [visible, setVisible] = React.useState(false);
  const onChange = react.exports.useCallback(
    (val) => {
      execCommand("fontSize", val);
      setVisible(false);
    },
    [execCommand]
  );
  const onVisibleChange = react.exports.useCallback((v) => {
    setVisible(v);
  }, []);
  return /* @__PURE__ */ React.createElement(
    Popover,
    {
      trigger: "click",
      color: "#fff",
      position: "left",
      className: "easy-email-extensions-Tools-Popover",
      popupVisible: visible,
      onVisibleChange,
      content: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", null, styleText$1), /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            maxWidth: 150,
            maxHeight: 350,
            overflowY: "auto",
            overflowX: "hidden"
          }
        },
        /* @__PURE__ */ React.createElement(
          Menu,
          {
            onClickMenuItem: onChange,
            selectedKeys: [],
            style: { border: "none", padding: 0 }
          },
          list.map((item) => /* @__PURE__ */ React.createElement(
            Menu.Item,
            {
              style: { lineHeight: "30px", height: 30 },
              key: item.value
            },
            item.label
          ))
        )
      )),
      getPopupContainer: props.getPopupContainer
    },
    /* @__PURE__ */ React.createElement(
      ToolItem$1,
      {
        title: t("Font size"),
        icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-font-color" })
      }
    )
  );
}
function Tools(props) {
  const { mergeTags: mergeTags2, enabledMergeTagsBadge } = useEditorProps();
  const { focusBlockNode } = useFocusBlockLayout();
  const { selectionRange, restoreRange, setRangeByElement } = useSelectionRange();
  const execCommand = react.exports.useCallback(
    (cmd, val) => {
      var _a;
      if (!selectionRange) {
        console.error(t("No selectionRange"));
        return;
      }
      if (!(focusBlockNode == null ? void 0 : focusBlockNode.contains(selectionRange == null ? void 0 : selectionRange.commonAncestorContainer))) {
        console.error(t("Not commonAncestorContainer"));
        return;
      }
      restoreRange(selectionRange);
      const uuid = (+new Date()).toString();
      if (cmd === "createLink") {
        const linkData = val;
        const target = linkData.blank ? "_blank" : "";
        let link;
        if (linkData.linkNode) {
          link = linkData.linkNode;
        } else {
          document.execCommand(cmd, false, uuid);
          link = getShadowRoot().querySelector(`a[href="${uuid}"`);
        }
        if (target) {
          link.setAttribute("target", target);
        }
        link.style.color = "inherit";
        link.style.textDecoration = linkData.underline ? "underline" : "none";
        link.setAttribute("href", linkData.link.trim());
      } else if (cmd === "insertHTML") {
        let newContent = val;
        if (enabledMergeTagsBadge) {
          newContent = MergeTagBadge.transform(val, uuid);
        }
        document.execCommand(cmd, false, newContent);
        const insertMergeTagEle = getShadowRoot().getElementById(uuid);
        if (insertMergeTagEle) {
          insertMergeTagEle.focus();
          setRangeByElement(insertMergeTagEle);
        }
      } else {
        document.execCommand(cmd, false, val);
      }
      const contenteditableElement = getShadowRoot().activeElement;
      if ((contenteditableElement == null ? void 0 : contenteditableElement.getAttribute("contenteditable")) === "true") {
        const html = ((_a = getShadowRoot().activeElement) == null ? void 0 : _a.innerHTML) || "";
        props.onChange(html);
      }
    },
    [
      enabledMergeTagsBadge,
      focusBlockNode,
      props,
      restoreRange,
      selectionRange,
      setRangeByElement
    ]
  );
  const execCommandWithRange = react.exports.useCallback(
    (cmd, val) => {
      var _a;
      document.execCommand(cmd, false, val);
      const contenteditableElement = getShadowRoot().activeElement;
      if ((contenteditableElement == null ? void 0 : contenteditableElement.getAttribute("contenteditable")) === "true") {
        const html = ((_a = getShadowRoot().activeElement) == null ? void 0 : _a.innerHTML) || "";
        props.onChange(html);
      }
    },
    [props.onChange]
  );
  const getPopoverMountNode = () => document.getElementById(FIXED_CONTAINER_ID);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      id: RICH_TEXT_TOOL_BAR,
      style: { display: "flex", flexWrap: "nowrap" }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ React.createElement(BasicTools, null),
      mergeTags2 && /* @__PURE__ */ React.createElement(
        MergeTags,
        {
          execCommand,
          getPopupContainer: getPopoverMountNode
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        FontFamily,
        {
          execCommand,
          getPopupContainer: getPopoverMountNode
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        FontSize,
        {
          execCommand,
          getPopupContainer: getPopoverMountNode
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        Bold,
        {
          currentRange: selectionRange,
          onChange: () => execCommandWithRange("bold")
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        Italic,
        {
          currentRange: selectionRange,
          onChange: () => execCommandWithRange("italic")
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        StrikeThrough,
        {
          currentRange: selectionRange,
          onChange: () => execCommandWithRange("strikeThrough")
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        Underline,
        {
          currentRange: selectionRange,
          onChange: () => execCommandWithRange("underline")
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        IconFontColor,
        {
          selectionRange,
          execCommand,
          getPopoverMountNode
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        IconBgColor,
        {
          selectionRange,
          execCommand,
          getPopoverMountNode
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        Link,
        {
          currentRange: selectionRange,
          onChange: (values) => execCommand("createLink", values),
          getPopupContainer: getPopoverMountNode
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        Unlink,
        {
          currentRange: selectionRange,
          onChange: () => execCommand("")
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        ToolItem$1,
        {
          onClick: () => execCommand("justifyLeft"),
          icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-align-left" }),
          title: t("Align left")
        }
      ),
      /* @__PURE__ */ React.createElement(
        ToolItem$1,
        {
          onClick: () => execCommand("justifyCenter"),
          icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-align-center" }),
          title: t("Align center")
        }
      ),
      /* @__PURE__ */ React.createElement(
        ToolItem$1,
        {
          onClick: () => execCommand("justifyRight"),
          icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-align-right" }),
          title: t("Align right")
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        ToolItem$1,
        {
          onClick: () => execCommand("insertOrderedList"),
          icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-list-ol" }),
          title: t("Orderlist")
        }
      ),
      /* @__PURE__ */ React.createElement(
        ToolItem$1,
        {
          onClick: () => execCommand("insertUnorderedList"),
          icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-list-ul" }),
          title: t("Unorderlist")
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        ToolItem$1,
        {
          onClick: () => execCommand("insertHorizontalRule"),
          icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-line" }),
          title: t("Line")
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" }),
      /* @__PURE__ */ React.createElement(
        ToolItem$1,
        {
          onClick: () => execCommand("removeFormat"),
          icon: /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-close" }),
          title: t("Remove format")
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "easy-email-extensions-divider" })
    )
  );
}
const styleText = ".easy-email-extensions-emailToolItem {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: none;\n  font-weight: 400;\n  appearance: none;\n  cursor: pointer !important;\n  white-space: nowrap;\n  transition: all 0.1s linear;\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: none;\n  background-color: transparent;\n  color: #fff;\n  width: 28px;\n  height: 27px;\n}\n.easy-email-extensions-emailToolItem:hover {\n  background-color: rgb(242, 243, 245);\n  color: rgb(78, 89, 105);\n}\n\n.easy-email-extensions-emailToolItem-active {\n  background-color: rgb(242, 243, 245);\n  color: rgb(78, 89, 105);\n}\n\n.easy-email-extensions-divider {\n  position: relative;\n  display: inline-flex;\n  width: 1px;\n  height: 16px;\n  background-color: rgba(128, 128, 128, 0.9);\n}";
function RichTextToolBar(props) {
  const { initialized } = useEditorContext();
  const root = initialized && getPluginElement();
  if (!root)
    return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, reactDom.exports.createPortal(
    /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", { dangerouslySetInnerHTML: { __html: styleText } }), /* @__PURE__ */ React.createElement(
      "div",
      {
        id: RICH_TEXT_BAR_ID,
        style: {
          transform: "translate(0,0)",
          padding: "4px 8px",
          boxSizing: "border-box",
          position: "absolute",
          left: 8,
          top: 0,
          zIndex: 100,
          width: "calc(100% - 16px)"
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            backgroundColor: "#41444d",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0
          }
        }
      ),
      /* @__PURE__ */ React.createElement(Tools, { onChange: props.onChange })
    )),
    root
  ));
}
const RichTextField = (props) => {
  const [contentEditableName, setContentEditableName] = react.exports.useState("");
  const [contentEditableType, setContentEditableType] = react.exports.useState(
    CONTENT_EDITABLE_CLASS_NAME
  );
  react.exports.useEffect(() => {
    const onClick = (e) => {
      var _a;
      if ((_a = getEditorRoot()) == null ? void 0 : _a.contains(e.target)) {
        return;
      }
      const fixedContainer = document.getElementById(FIXED_CONTAINER_ID);
      if (fixedContainer == null ? void 0 : fixedContainer.contains(e.target)) {
        return;
      }
      setContentEditableName("");
    };
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  react.exports.useEffect(() => {
    const root = getShadowRoot();
    if (!root)
      return;
    const onClick = (e) => {
      const target = e.target;
      const fixedContainer = document.getElementById(FIXED_CONTAINER_ID);
      const richTextBar = root.getElementById(RICH_TEXT_BAR_ID);
      if ((fixedContainer == null ? void 0 : fixedContainer.contains(target)) || (richTextBar == null ? void 0 : richTextBar.contains(target))) {
        return;
      }
      const activeElement = getShadowRoot().activeElement;
      if (!activeElement) {
        setContentEditableName("");
      } else {
        const idxName = activeElement.getAttribute(DATA_CONTENT_EDITABLE_IDX);
        const type2 = activeElement.getAttribute(DATA_CONTENT_EDITABLE_TYPE);
        setContentEditableType(type2);
        if (idxName) {
          setContentEditableName(idxName);
        } else {
          setContentEditableName("");
        }
      }
    };
    root.addEventListener("click", onClick);
    return () => {
      root.removeEventListener("click", onClick);
    };
  }, []);
  if (!contentEditableName)
    return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Field, { name: contentEditableName, parse: (v) => v }, ({ input }) => /* @__PURE__ */ React.createElement(
    FieldWrapper,
    {
      ...props,
      contentEditableType,
      input
    }
  )));
};
function FieldWrapper(props) {
  const { input, contentEditableType, ...rest } = props;
  const { mergeTagGenerate, enabledMergeTagsBadge } = useEditorProps();
  const debounceCallbackChange = react.exports.useCallback(
    lodash.exports.debounce((val) => {
      if (enabledMergeTagsBadge) {
        input.onChange(MergeTagBadge.revert(val, mergeTagGenerate));
      } else {
        input.onChange(val);
      }
      input.onBlur();
    }, 200),
    [input]
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, contentEditableType === ContentEditableType.RichText && /* @__PURE__ */ React.createElement(RichTextToolBar, { onChange: debounceCallbackChange }), /* @__PURE__ */ React.createElement(InlineText, { ...rest, onChange: debounceCallbackChange }));
}
const AddToCollection = ({ visible, setVisible }) => {
  const { focusBlock: focusBlockData } = useBlock();
  const { onAddCollection, onUploadImage } = useEditorProps();
  const onSubmit = (values) => {
    if (!values.label)
      return;
    const uuid = v4();
    onAddCollection == null ? void 0 : onAddCollection({
      label: values.label,
      helpText: values.helpText,
      data: focusBlockData,
      thumbnail: values.thumbnail,
      id: uuid
    });
    setVisible(false);
  };
  return /* @__PURE__ */ React.createElement(
    ReactFinalForm,
    {
      initialValues: { label: "", helpText: "", thumbnail: "" },
      onSubmit
    },
    ({ handleSubmit }) => /* @__PURE__ */ React.createElement(
      Modal,
      {
        maskClosable: false,
        style: { zIndex: 2e3 },
        visible,
        title: t("Add to collection"),
        onOk: () => handleSubmit(),
        onCancel: () => setVisible(false)
      },
      /* @__PURE__ */ React.createElement(Stack$1, { vertical: true }, /* @__PURE__ */ React.createElement(Stack$1.Item, null), /* @__PURE__ */ React.createElement(
        TextField,
        {
          label: t("Title"),
          name: "label",
          validate: (val) => {
            if (!val)
              return t("Title required!");
            return void 0;
          }
        }
      ), /* @__PURE__ */ React.createElement(TextAreaField, { label: t("Description"), name: "helpText" }), /* @__PURE__ */ React.createElement(
        ImageUploaderField,
        {
          label: t("Thumbnail"),
          name: "thumbnail",
          uploadHandler: onUploadImage,
          validate: (val) => {
            if (!val)
              return t("Thumbnail required!");
            return void 0;
          }
        }
      ))
    )
  );
};
function useAddToCollection() {
  const [modalVisible, setModalVisible] = react.exports.useState(false);
  const modal = react.exports.useMemo(() => /* @__PURE__ */ React.createElement(AddToCollection, { visible: modalVisible, setVisible: setModalVisible }), [modalVisible]);
  return {
    modal,
    modalVisible,
    setModalVisible
  };
}
function ContextMenu({
  moveBlock,
  copyBlock,
  removeBlock,
  contextMenuData,
  onClose
}) {
  const { blockData, left, top } = contextMenuData;
  const idx = blockData.id;
  const { modal, modalVisible, setModalVisible } = useAddToCollection();
  const props = useEditorProps();
  const ref2 = react.exports.useRef(null);
  const handleMoveUp = () => {
    moveBlock(idx, getSiblingIdx(idx, -1));
    scrollBlockEleIntoView({
      idx: getSiblingIdx(idx, -1)
    });
    onClose();
  };
  const handleMoveDown = () => {
    moveBlock(idx, getSiblingIdx(idx, 1));
    scrollBlockEleIntoView({
      idx: getSiblingIdx(idx, 1)
    });
    onClose();
  };
  const handleCopy = (ev) => {
    copyBlock(idx);
    scrollBlockEleIntoView({
      idx: getSiblingIdx(idx, 1)
    });
    onClose();
  };
  const handleAddToCollection = () => {
    setModalVisible(true);
  };
  const handleDelete = () => {
    removeBlock(idx);
    onClose();
  };
  const isFirst = getIndexByIdx(idx) === 0;
  return /* @__PURE__ */ React.createElement("div", { ref: ref2, style: { visibility: modalVisible ? "hidden" : void 0 } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        left,
        top
      },
      className: styles.wrap,
      onClick: (e) => e.stopPropagation()
    },
    !isFirst && /* @__PURE__ */ React.createElement("div", { className: styles.listItem, onClick: handleMoveUp }, /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-top", style: { marginRight: 10 } }), " ", /* @__PURE__ */ React.createElement(TextStyle, null, t("Move up"))),
    /* @__PURE__ */ React.createElement("div", { className: styles.listItem, onClick: handleMoveDown }, /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-bottom", style: { marginRight: 10 } }), " ", /* @__PURE__ */ React.createElement(TextStyle, null, t("Move down"))),
    /* @__PURE__ */ React.createElement("div", { className: styles.listItem, onClick: handleCopy }, /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-copy", style: { marginRight: 10 } }), " ", /* @__PURE__ */ React.createElement(TextStyle, null, t("Copy"))),
    props.onAddCollection && /* @__PURE__ */ React.createElement("div", { className: styles.listItem, onClick: handleAddToCollection }, /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-start", style: { marginRight: 10 } }), " ", /* @__PURE__ */ React.createElement(TextStyle, null, "Add to collection")),
    /* @__PURE__ */ React.createElement("div", { className: styles.listItem, onClick: handleDelete }, /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-delete", style: { marginRight: 10 } }), " ", /* @__PURE__ */ React.createElement(TextStyle, null, t("Delete")))
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: styles.contextmenuMark,
      onClick: onClose,
      onContextMenu: (e) => {
        e.preventDefault();
        onClose(e);
      }
    }
  ), modal);
}
function useAvatarWrapperDrop() {
  const [blockLayerRef, setBlockLayerRef] = react.exports.useState(null);
  const { setHoverIdx, setDirection } = useHoverIdx();
  const { dataTransfer, setDataTransfer } = useDataTransfer();
  const {
    formState: { values }
  } = useEditorContext();
  const valuesRef = useRefState(values);
  const dataTransferRef = useRefState(dataTransfer);
  function isKeyObject(o) {
    return o.key !== void 0;
  }
  const removeHightLightClassName = react.exports.useCallback(() => {
    if (!blockLayerRef)
      return;
    blockLayerRef.querySelectorAll(
      ".arco-tree-node-title-gap-top, .arco-tree-node-title-gap-bottom, .arco-tree-node-title-highlight"
    ).forEach((item) => {
      item.classList.remove(
        "arco-tree-node-title-gap-top",
        "arco-tree-node-title-gap-bottom",
        "arco-tree-node-title-highlight"
      );
    });
  }, [blockLayerRef]);
  const allowDrop = react.exports.useCallback(
    (params) => {
      const { dragNode, dropNode, dropPosition } = params;
      let dragType;
      if (isKeyObject(dragNode)) {
        const blockData = lodash.exports.get(valuesRef.current, dragNode.key);
        if (!blockData)
          return false;
        dragType = blockData.type;
      } else {
        dragType = dragNode.type;
      }
      const dragBlock = BlockManager.getBlockByType(dragType);
      if (!dragBlock)
        return false;
      if (dropPosition === 0) {
        if (BlockManager.getAutoCompletePath(
          dragBlock.type,
          dropNode.dataRef.type
        ) && dropNode.dataRef.children.length === 0) {
          return {
            position: 0,
            key: dropNode.key
          };
        } else if (dropNode.parent && dragBlock.validParentType.includes(dropNode.parent.type)) {
          return {
            position: -1,
            key: dropNode.key
          };
        }
      } else {
        if (dropNode.parent && dragBlock.validParentType.includes(dropNode.parent.type)) {
          return {
            position: dropPosition,
            key: dropNode.key
          };
        }
      }
      setDirection("");
      setHoverIdx("");
      return false;
    },
    [setDirection, setHoverIdx, valuesRef]
  );
  react.exports.useEffect(() => {
    if (blockLayerRef) {
      const onDragOver = lodash.exports.debounce((ev) => {
        var _a, _b, _c, _d;
        if (!dataTransferRef.current)
          return;
        const blockNode = getBlockNodeByChildEle(ev.target);
        if (!blockNode || !ev.target)
          return;
        const directionPosition = getDirectionPosition(ev, 5);
        const treeNodeEle = (_b = (_a = blockNode.parentNode) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.parentNode;
        if (!treeNodeEle)
          return;
        removeHightLightClassName();
        const dropIdx = getNodeIdxFromClassName(blockNode.classList);
        if (!dropIdx)
          return;
        const dropParentIdx = getParentIdx(dropIdx);
        const dropBlockData = lodash.exports.get(valuesRef.current, dropIdx);
        const dropParentBlockData = dropParentIdx ? lodash.exports.get(valuesRef.current, dropParentIdx) : null;
        let dropPosition = 0;
        if (directionPosition.vertical.direction === "top" && directionPosition.vertical.isEdge) {
          dropPosition = -1;
        } else if (directionPosition.vertical.direction === "bottom" && directionPosition.vertical.isEdge) {
          dropPosition = 1;
        }
        const dropResult = allowDrop({
          dragNode: {
            type: dataTransferRef.current.type
          },
          dropNode: {
            dataRef: dropBlockData,
            key: dropIdx,
            parent: dropParentBlockData
          },
          dropPosition
        });
        if (!dropResult)
          return;
        const node = (_d = (_c = document.querySelector(
          `[data-tree-idx="${dropResult.key}"]`
        )) == null ? void 0 : _c.parentNode) == null ? void 0 : _d.parentNode;
        if (node instanceof HTMLElement) {
          removeHightLightClassName();
          node.classList.add("arco-tree-node-title-gap-bottom");
        }
        setDirection(getDirectionFormDropPosition(dropResult.position));
        setHoverIdx(dropResult.key);
        if (dropResult.position === -1) {
          treeNodeEle.classList.add("arco-tree-node-title-gap-top");
          setDataTransfer((dataTransfer2) => {
            return {
              ...dataTransfer2,
              parentIdx: dropParentIdx,
              positionIndex: getIndexByIdx(dropIdx)
            };
          });
        } else if (dropResult.position === 1) {
          setDataTransfer((dataTransfer2) => {
            return {
              ...dataTransfer2,
              parentIdx: dropParentIdx,
              positionIndex: getIndexByIdx(dropIdx) + 1
            };
          });
          treeNodeEle.classList.add("arco-tree-node-title-gap-bottom");
        } else {
          treeNodeEle.classList.add("arco-tree-node-title-highlight");
          setDataTransfer((dataTransfer2) => {
            return {
              ...dataTransfer2,
              parentIdx: dropIdx,
              positionIndex: 0
            };
          });
        }
      });
      const onDragend = (ev) => {
        removeHightLightClassName();
      };
      const onDrop = (ev) => {
        setTimeout(() => {
          removeHightLightClassName();
        }, 0);
      };
      blockLayerRef.addEventListener("dragover", onDragOver);
      blockLayerRef.addEventListener("drop", onDrop);
      blockLayerRef.addEventListener("dragleave", onDragend);
      return () => {
        blockLayerRef.removeEventListener("dragover", onDragOver);
        blockLayerRef.removeEventListener("drop", onDrop);
        blockLayerRef.removeEventListener("dragleave", onDragend);
      };
    }
  }, [
    blockLayerRef,
    dataTransferRef,
    valuesRef,
    removeHightLightClassName,
    allowDrop,
    setDirection,
    setHoverIdx,
    setDataTransfer
  ]);
  return {
    setBlockLayerRef,
    blockLayerRef,
    allowDrop,
    removeHightLightClassName
  };
}
function getDirectionFormDropPosition(position) {
  if (position === -1)
    return "top";
  if (position === 1)
    return "bottom";
  return "";
}
function BlockLayer(props) {
  const { pageData } = useEditorContext();
  const { renderTitle: propsRenderTitle } = props;
  const { focusIdx, setFocusIdx } = useFocusIdx();
  const { setHoverIdx, setIsDragging, setDirection } = useHoverIdx();
  const { moveBlock, setValueByIdx, copyBlock, removeBlock, values } = useBlock();
  const { setBlockLayerRef, allowDrop, removeHightLightClassName } = useAvatarWrapperDrop();
  const valueRef = useRefState(values);
  const [contextMenuData, setContextMenuData] = react.exports.useState(null);
  const onToggleVisible = react.exports.useCallback(
    ({ id }, e) => {
      e.stopPropagation();
      const blockData = lodash.exports.get(valueRef.current, id);
      if (blockData) {
        blockData.data.hidden = !Boolean(blockData.data.hidden);
        setValueByIdx(id, blockData);
      }
    },
    [setValueByIdx, valueRef]
  );
  const renderTitle = react.exports.useCallback(
    (data) => {
      const isPage = data.type === BasicType.PAGE;
      const title = propsRenderTitle ? propsRenderTitle(data) : getBlockTitle(data);
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          "data-tree-idx": data.id,
          className: classnames(
            styles$1.title,
            !isPage && getNodeIdxClassName(data.id),
            !isPage && "email-block"
          )
        },
        /* @__PURE__ */ React.createElement(
          Space,
          {
            align: "center",
            size: "mini"
          },
          /* @__PURE__ */ React.createElement(
            IconFont,
            {
              iconName: getIconNameByBlockType(data.type),
              style: { fontSize: 12, color: "#999" }
            }
          ),
          /* @__PURE__ */ React.createElement(
            "div",
            {
              title: lodash.exports.isString(title) ? title : "",
              style: {
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "5em",
                textOverflow: "ellipsis"
              }
            },
            /* @__PURE__ */ React.createElement(TextStyle, { size: "smallest" }, title)
          )
        ),
        /* @__PURE__ */ React.createElement("div", { className: styles$1.eyeIcon }, /* @__PURE__ */ React.createElement(
          EyeIcon,
          {
            blockData: data,
            onToggleVisible
          }
        ))
      );
    },
    [onToggleVisible, propsRenderTitle]
  );
  const treeData = react.exports.useMemo(() => {
    const copyData = lodash.exports.cloneDeep(pageData);
    const loop = (item, id, parent) => {
      item.id = id;
      item.parent = parent;
      item.children.map((child, index) => loop(child, getChildIdx(id, index), item));
    };
    loop(copyData, getPageIdx(), null);
    return [copyData];
  }, [pageData]);
  const onSelect = react.exports.useCallback(
    (selectedId) => {
      setFocusIdx(selectedId);
      setTimeout(() => {
        scrollBlockEleIntoView({ idx: selectedId });
      }, 50);
    },
    [setFocusIdx]
  );
  const onContextMenu = react.exports.useCallback(
    (blockData, ev) => {
      ev.preventDefault();
      setContextMenuData({ blockData, left: ev.clientX, top: ev.clientY });
    },
    []
  );
  const onCloseContextMenu = react.exports.useCallback((ev) => {
    setContextMenuData(null);
  }, []);
  const onMouseEnter = react.exports.useCallback(
    (id) => {
      setHoverIdx(id);
    },
    [setHoverIdx]
  );
  const onMouseLeave = react.exports.useCallback(() => {
    setHoverIdx("");
  }, [setHoverIdx]);
  const onDragStart = react.exports.useCallback(() => {
    setIsDragging(true);
  }, [setIsDragging]);
  const onDragEnd = react.exports.useCallback(() => {
    setIsDragging(false);
  }, [setIsDragging]);
  const onDrop = react.exports.useCallback(
    (params) => {
      const { dragNode, dropNode, dropPosition } = params;
      const dragBlock = BlockManager.getBlockByType(dragNode.dataRef.type);
      if (!dragBlock)
        return false;
      const dropIndex = getIndexByIdx(dropNode.key);
      if (dropPosition === 0) {
        if (dragBlock.validParentType.includes(dropNode.dataRef.type) && dropNode.dataRef.children.length === 0) {
          moveBlock(dragNode.key, getChildIdx(dropNode.key, 0));
        } else if (dropNode.parent && dragBlock.validParentType.includes(dropNode.parent.type)) {
          moveBlock(dragNode.key, getChildIdx(dropNode.parentKey, dropIndex));
        }
      } else {
        moveBlock(
          dragNode.key,
          getChildIdx(dropNode.parentKey, dropPosition > 0 ? dropIndex + 1 : dropIndex)
        );
      }
    },
    [moveBlock]
  );
  const blockTreeAllowDrop = react.exports.useCallback(
    (() => {
      let lastDropResult = false;
      return (data) => {
        var _a, _b;
        const dropResult = allowDrop(data);
        if (lodash.exports.isEqual(lastDropResult, dropResult)) {
          return dropResult;
        }
        lastDropResult = dropResult;
        if (dropResult) {
          const node = (_b = (_a = document.querySelector(`[data-tree-idx="${dropResult.key}"]`)) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.parentNode;
          if (node instanceof HTMLElement) {
            removeHightLightClassName();
            node.classList.add("arco-tree-node-title-gap-bottom");
          }
          setDirection(getDirectionFormDropPosition(dropResult.position));
          setHoverIdx(dropResult.key);
        }
        return dropResult;
      };
    })(),
    [allowDrop, removeHightLightClassName, setDirection, setHoverIdx]
  );
  const selectedKeys = react.exports.useMemo(() => {
    if (!focusIdx)
      return [];
    return [focusIdx];
  }, [focusIdx]);
  const expandedKeys = react.exports.useMemo(() => {
    if (!focusIdx)
      return [];
    let currentIdx = getParentIdx(focusIdx);
    const keys2 = [];
    while (currentIdx) {
      keys2.push(currentIdx);
      currentIdx = getParentIdx(currentIdx);
    }
    return keys2;
  }, [focusIdx]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: setBlockLayerRef,
      id: "BlockLayerManager",
      ...{
        [DATA_ATTRIBUTE_DROP_CONTAINER]: "true"
      }
    },
    /* @__PURE__ */ React.createElement(
      BlockTree,
      {
        selectedKeys,
        expandedKeys,
        defaultExpandAll: true,
        treeData,
        renderTitle,
        allowDrop: blockTreeAllowDrop,
        onContextMenu,
        onDrop,
        onDragStart,
        onDragEnd,
        onSelect,
        onMouseEnter,
        onMouseLeave
      }
    ),
    contextMenuData && /* @__PURE__ */ React.createElement(
      ContextMenu,
      {
        onClose: onCloseContextMenu,
        moveBlock,
        copyBlock,
        removeBlock,
        contextMenuData
      }
    )
  );
}
function DragIcon(props) {
  const block = BlockManager.getBlockByType(props.type);
  return /* @__PURE__ */ React.createElement(BlockAvatarWrapper, { type: props.type, payload: props.payload }, /* @__PURE__ */ React.createElement(
    Button,
    {
      type: "text",
      title: block == null ? void 0 : block.name,
      icon: /* @__PURE__ */ React.createElement(
        IconFont,
        {
          iconName: getIconNameByBlockType(props.type),
          style: {
            fontSize: 16,
            textAlign: "center",
            cursor: "move",
            color: props.color
          }
        }
      )
    }
  ));
}
function ShortcutToolbar() {
  const blocksPanelRef = react.exports.useRef(null);
  return /* @__PURE__ */ React.createElement(Stack$1, { vertical: true, alignment: "center", distribution: "center" }, /* @__PURE__ */ React.createElement(BlocksPanel, null, /* @__PURE__ */ React.createElement("div", { ref: blocksPanelRef })), /* @__PURE__ */ React.createElement(DragIcon, { type: AdvancedType.TEXT, color: "rgb(110, 215, 135)", payload: { attributes: { padding: "0px 25px 0px 25px", "align": "center" } } }), /* @__PURE__ */ React.createElement(DragIcon, { payload: { attributes: { padding: "0px 0px 0px 0px" } }, type: AdvancedType.IMAGE, color: "rgb(250, 208, 97)" }), /* @__PURE__ */ React.createElement(DragIcon, { type: AdvancedType.BUTTON, color: "rgb(238,144,172)" }), /* @__PURE__ */ React.createElement(DragIcon, { type: AdvancedType.SOCIAL, color: "rgb(111,206,236) " }), /* @__PURE__ */ React.createElement(DragIcon, { type: AdvancedType.NAVBAR, color: "rgb(191,24,84)" }), /* @__PURE__ */ React.createElement(DragIcon, { type: AdvancedType.DIVIDER, color: "rgb(71,67,239)" }), /* @__PURE__ */ React.createElement(DragIcon, { type: AdvancedType.SPACER, color: "#ccc" }), /* @__PURE__ */ React.createElement(
    DragIcon,
    {
      color: "rgb(24,201,137)",
      payload: {
        children: [
          {
            type: AdvancedType.COLUMN,
            data: {
              value: {}
            },
            attributes: {
              padding: "0px 0px 0px 0px",
              border: "none",
              "vertical-align": "top"
            },
            children: []
          },
          {
            type: AdvancedType.COLUMN,
            data: {
              value: {}
            },
            attributes: {
              padding: "0px 0px 0px 0px",
              border: "none",
              "vertical-align": "top"
            },
            children: []
          }
        ]
      },
      type: AdvancedType.SECTION
    }
  ), /* @__PURE__ */ React.createElement(
    IconFont,
    {
      onClick: () => {
        var _a;
        return (_a = blocksPanelRef.current) == null ? void 0 : _a.click();
      },
      iconName: "icon-more",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        borderRadius: "50%",
        color: "var(--color-text-2)",
        boxShadow: "0 0 12px -3px var(--color-text-2)",
        fontSize: 18
      }
    }
  ));
}
function Toolbar() {
  const { moveBlock, copyBlock, removeBlock, focusBlock } = useBlock();
  const { focusIdx, setFocusIdx } = useFocusIdx();
  const { modal, setModalVisible } = useAddToCollection();
  const props = useEditorProps();
  const isPage = (focusBlock == null ? void 0 : focusBlock.type) === BasicType.PAGE;
  const isText = isTextBlock(focusBlock == null ? void 0 : focusBlock.type);
  const handleAddToCollection = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setModalVisible(true);
  };
  const handleCopy = (ev) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    copyBlock(focusIdx);
  };
  const handleDelete = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    removeBlock(focusIdx);
  };
  const handleSelectParent = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setFocusIdx(getParentIdx(focusIdx));
  };
  if (isText)
    return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "div",
    {
      id: "easy-email-extensions-InteractivePrompt-Toolbar",
      style: {
        height: 0,
        zIndex: 100
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontSize: 14,
          lineHeight: "22px",
          pointerEvents: "auto",
          color: "#ffffff",
          transform: "translateY(-100%)",
          display: "inline-flex"
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            color: "#ffffff",
            backgroundColor: "var(--selected-color)",
            height: "22px",
            display: "inline-flex",
            padding: "1px 5px",
            boxSizing: "border-box",
            whiteSpace: "nowrap",
            maxWidth: 300,
            overflow: "hidden"
          }
        },
        focusBlock && getBlockTitle(focusBlock, false)
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: (e) => {
            e.stopPropagation();
          },
          onMouseDown: (ev) => {
            ev.preventDefault();
          },
          style: {
            display: isPage ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "auto"
          }
        },
        /* @__PURE__ */ React.createElement(
          ToolItem,
          {
            width: 12,
            iconName: "icon-back-parent",
            onClick: handleSelectParent
          }
        ),
        /* @__PURE__ */ React.createElement(ToolItem, { iconName: "icon-copy", onClick: handleCopy }),
        props.onAddCollection && /* @__PURE__ */ React.createElement(
          ToolItem,
          {
            iconName: "icon-collection",
            onClick: handleAddToCollection
          }
        ),
        /* @__PURE__ */ React.createElement(ToolItem, { iconName: "icon-delete", onClick: handleDelete })
      )
    )
  ), modal);
}
function ToolItem(props) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: props.onClick,
      style: {
        color: "#ffffff",
        backgroundColor: "var(--selected-color)",
        height: 22,
        fontSize: props.width || 14,
        lineHeight: "22px",
        width: 22,
        display: "flex",
        pointerEvents: "auto",
        cursor: "pointer",
        justifyContent: "center"
      },
      className: classnames("iconfont", props.iconName)
    }
  );
}
function FocusTooltip() {
  const { focusBlock } = useBlock();
  const { focusIdx } = useFocusIdx();
  const { focusBlockNode } = useFocusBlockLayout();
  const isPage = (focusBlock == null ? void 0 : focusBlock.type) === BasicType.PAGE;
  if (!focusBlockNode || !focusBlock)
    return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, reactDom.exports.createPortal(
    /* @__PURE__ */ React.createElement(
      "div",
      {
        id: "easy-email-extensions-InteractivePrompt-FocusTooltip",
        style: {
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          left: 0,
          top: 0,
          zIndex: 1
        }
      },
      /* @__PURE__ */ React.createElement("style", null, `
                .email-block {
                  position: relative;
                }

            `),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            zIndex: 9999,
            right: 0,
            top: "50%",
            display: isPage ? "none" : void 0
          }
        },
        /* @__PURE__ */ React.createElement(
          BlockAvatarWrapper,
          {
            idx: focusIdx,
            type: focusBlock.type,
            action: "move"
          },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              style: {
                position: "absolute",
                backgroundColor: "var(--selected-color)",
                color: "#ffffff",
                height: "28px",
                width: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                cursor: "grab",
                pointerEvents: "auto",
                WebkitUserDrag: "element"
              }
            },
            /* @__PURE__ */ React.createElement(
              IconFont,
              {
                iconName: "icon-move",
                style: { color: "#fff", cursor: "grab" }
              }
            )
          )
        )
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            fontSize: 14,
            zIndex: 2,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            outlineOffset: "-2px",
            outline: "2px solid var(--selected-color)"
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            fontSize: 14,
            zIndex: 3,
            left: 0,
            top: 0,
            width: "0%",
            height: "100%"
          }
        },
        /* @__PURE__ */ React.createElement(Toolbar, null)
      )
    ),
    focusBlockNode
  ));
}
function awaitForElement(idx) {
  let promiseObj = {
    cancel: () => {
    },
    promise: Promise.resolve()
  };
  promiseObj.promise = new Promise((resolve) => {
    const ele = getBlockNodeByIdx(idx);
    if (ele) {
      resolve(ele);
      return;
    }
    const timer = setInterval(() => {
      const ele2 = getBlockNodeByIdx(idx);
      if (ele2) {
        resolve(ele2);
        clearInterval(timer);
      }
    }, 50);
    promiseObj.cancel = () => {
      clearInterval(timer);
    };
  });
  return promiseObj;
}
function HoverTooltip() {
  const { hoverIdx, direction, isDragging } = useHoverIdx();
  const lazyHoverIdx = useLazyState(hoverIdx, 60);
  const { focusIdx } = useFocusIdx();
  const [isTop, setIsTop] = react.exports.useState(false);
  const { initialized } = useEditorContext();
  const [blockNode, setBlockNode] = react.exports.useState(null);
  const rootRef = react.exports.useRef(null);
  react.exports.useEffect(() => {
    if (initialized) {
      rootRef.current = getEditorRoot().getBoundingClientRect();
    }
  }, [initialized]);
  react.exports.useEffect(() => {
    const rootBounds = rootRef.current;
    if (!initialized)
      return;
    if (lazyHoverIdx) {
      const promiseObj = awaitForElement(lazyHoverIdx);
      promiseObj.promise.then((blockNode2) => {
        if (rootBounds) {
          const { top } = blockNode2.getBoundingClientRect();
          setIsTop(rootBounds.top === top);
        }
        setBlockNode(blockNode2);
      });
      return () => {
        promiseObj.cancel();
      };
    } else {
      setBlockNode(null);
    }
  }, [lazyHoverIdx, initialized]);
  const block = react.exports.useMemo(() => {
    return blockNode ? BlockManager.getBlockByType(getNodeTypeFromClassName(blockNode.classList)) : null;
  }, [blockNode]);
  if (focusIdx === hoverIdx && !isDragging)
    return null;
  if (!block || !blockNode)
    return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, reactDom.exports.createPortal(
    /* @__PURE__ */ React.createElement(
      "div",
      {
        id: "easy-email-extensions-InteractivePrompt-HoverTooltip",
        style: {
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: "none"
        }
      },
      /* @__PURE__ */ React.createElement(
        TipNode,
        {
          type: isDragging ? "drag" : "hover",
          lineWidth: 1,
          title: block.name,
          direction: isTop && direction === "top" ? "noEnoughTop" : direction,
          isDragging
        }
      )
    ),
    blockNode
  ));
}
function TipNode(props) {
  const { direction, title, lineWidth, type: type2 } = props;
  const dragTitle = react.exports.useMemo(() => {
    if (direction === "top" || direction === "noEnoughTop") {
      return `${t("Insert before")} ${title}`;
    } else if (direction === "bottom") {
      return `${t("Insert after")} ${title}`;
    } else if (direction === "right" || direction === "left") {
      return t("Drag here");
    }
    return `${t("Drag to")} ${title}`;
  }, [direction, title]);
  const color = react.exports.useMemo(() => {
    if (type2 === "drag") {
      return "var(--hover-color)";
    } else {
      return "var(--hover-color)";
    }
  }, [type2]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        fontSize: 14,
        zIndex: 1,
        color: "#000",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        textAlign: "left"
      }
    },
    /* @__PURE__ */ React.createElement("style", null, `
        .email-block {
          position: relative;
        }

      `),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          outlineOffset: `-${lineWidth}px`,
          outline: `${lineWidth}px solid ${color}`
        }
      },
      type2 === "hover" && /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            left: 0,
            top: 0
          }
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              backgroundColor: color,
              color: "#ffffff",
              height: "22px",
              lineHeight: "22px",
              display: "inline-flex",
              padding: "1px 5px",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
              fontFamily: "sans-serif",
              transform: "translateY(-100%)"
            }
          },
          title
        )
      )
    ),
    props.isDragging && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          ...directionImage[props.direction || "none"]
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            color: "#ffffff",
            backgroundColor: color,
            lineHeight: "22px",
            display: "inline-flex",
            maxWidth: "100%",
            textAlign: "center",
            whiteSpace: "nowrap",
            padding: "1px 5px",
            ...positionStyleMap[props.direction || "none"]
          }
        },
        dragTitle
      )
    )
  );
}
const positionStyleMap = {
  noEnoughTop: {
    top: "0%",
    left: "50%",
    padding: "1px 5px",
    transform: "translate(-50%, 0%)"
  },
  top: {
    top: "0%",
    left: "50%",
    padding: "1px 5px",
    transform: "translate(-50%, -50%)"
  },
  bottom: {
    top: "100%",
    left: "50%",
    padding: "1px 5px",
    transform: "translate(-50%, -50%)"
  },
  left: {
    top: "50%",
    left: "0%",
    padding: "5px 1px",
    writingMode: "vertical-lr",
    transform: "translate(0, -50%)"
  },
  right: {
    top: "50%",
    right: "0%",
    padding: "5px 1px",
    writingMode: "vertical-lr",
    transform: "translate(0, -50%)"
  },
  none: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};
const directionImage = {
  top: {
    backgroundImage: `linear-gradient(
      to bottom,
      var(--hover-color) 3px ,
      transparent 3px
    )`
  },
  bottom: {
    backgroundImage: `linear-gradient(
      to top,
      var(--hover-color) 3px ,
      transparent 3px
    )`
  },
  left: {
    backgroundImage: `linear-gradient(
      to right,
      var(--hover-color) 3px ,
      transparent 3px
    )`
  },
  right: {
    backgroundImage: `linear-gradient(
      to left,
      var(--hover-color) 3px ,
      transparent 3px
    )`
  },
  none: {}
};
function InteractivePrompt() {
  const { activeTab } = useActiveTab();
  const isActive = activeTab === ActiveTabKeys.EDIT;
  if (!isActive)
    return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HoverTooltip, null), /* @__PURE__ */ React.createElement(FocusTooltip, null));
}
const stylesText = ".easy-email-merge-tag {\n  font-size: inherit;\n  outline: 1px solid rgb(78, 89, 105) !important;\n  outline-offset: 0px;\n  padding: 0px 8px;\n  border-radius: 4px;\n  cursor: default !important;\n  transition: all 0.1s linear;\n  border: none;\n  font-weight: inherit;\n  font-style: inherit;\n  outline-color: rgb(0, 160, 172) !important;\n  color: inherit;\n  background-color: rgb(235, 249, 252);\n}\n\n.easy-email-merge-tag-popover {\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translate(-50%, -100%);\n}\n\n.easy-email-merge-tag-popover {\n  line-height: 1.3;\n  background-color: #fff;\n  width: 360px;\n  border: 1px solid rgb(229, 230, 235);\n  border-radius: 8px;\n  position: absolute;\n  top: calc(100% + 20px);\n  left: 50%;\n  transform: translate(-50%, 0%);\n  z-index: 10;\n  padding: 20px;\n  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;\n}\n.easy-email-merge-tag-popover h3 {\n  margin: 0;\n  font-size: 12px;\n  color: rgb(32, 34, 35);\n  text-transform: uppercase;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.easy-email-merge-tag-popover .easy-email-merge-tag-popover-desc {\n  font-size: 14px;\n  color: rgb(109, 113, 117);\n}\n.easy-email-merge-tag-popover .easy-email-merge-tag-popover-desc-label {\n  font-weight: 400;\n  line-height: 15px;\n  border: 1px solid rgb(109, 113, 117);\n  border-radius: 4px;\n  text-transform: none;\n  letter-spacing: normal;\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: rgb(32, 34, 35);\n  cursor: text;\n  font-size: 14px;\n}\n.easy-email-merge-tag-popover input {\n  text-transform: none;\n  letter-spacing: normal;\n  position: relative;\n  z-index: 20;\n  display: block;\n  flex: 1 1;\n  width: 100%;\n  min-width: 0;\n  min-height: 25px;\n  margin: 0;\n  padding: 5px 12px;\n  background: none;\n  border: 1px solid transparent;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  appearance: none;\n  caret-color: rgb(32, 34, 35);\n  color: rgb(32, 34, 35);\n}\n.easy-email-merge-tag-popover input:focus {\n  outline: none;\n}\n.easy-email-merge-tag-popover .easy-email-merge-tag-popover-desc-label-count {\n  color: rgb(109, 113, 117);\n  z-index: 20;\n  margin: 0 12px 0 3.5px;\n  pointer-events: none;\n  text-align: right;\n}\n.easy-email-merge-tag-popover .easy-email-merge-tag-popover-desc-label-button {\n  font-size: 14px;\n  text-align: right;\n  margin-top: 10px;\n  font-weight: normal;\n  margin-bottom: 5px;\n}\n.easy-email-merge-tag-popover .easy-email-merge-tag-popover-desc-label-button button {\n  color: var(--selected-color);\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: all 0.1s linear;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n}\n.easy-email-merge-tag-popover .easy-email-merge-tag-popover-desc-label-button button:focus {\n  color: var(--selected-color);\n  background-color: rgb(242, 243, 245);\n}\n.easy-email-merge-tag-popover .easy-email-merge-tag-popover-desc-label-button button:hover {\n  color: var(--selected-color);\n  background-color: rgb(242, 243, 245);\n}\n.easy-email-merge-tag-popover .easy-email-merge-tag-popover-container {\n  position: relative;\n  z-index: 2;\n}";
const removeAllActiveBadge = () => {
  getShadowRoot().querySelectorAll(".easy-email-merge-tag").forEach((item) => {
    item.classList.remove("easy-email-merge-tag-focus");
  });
  getShadowRoot().querySelectorAll(
    ".easy-email-merge-tag-popover"
  );
};
function MergeTagBadgePrompt() {
  const { initialized } = useEditorContext();
  const popoverRef = react.exports.useRef(null);
  const { onChangeMergeTag, mergeTags: mergeTags2 } = useEditorProps();
  const [text, setText] = react.exports.useState("");
  const { setRangeByElement } = useSelectionRange();
  const root = initialized && getShadowRoot();
  const [target, setTarget] = React.useState(null);
  const targetRef = useRefState(target);
  const textContainer = getBlockNodeByChildEle(target);
  const focusMergeTag = react.exports.useCallback((ele) => {
    if (!ele)
      return;
    setRangeByElement(ele);
  }, [setRangeByElement]);
  react.exports.useEffect(() => {
    const onBlur = (ev) => {
      if (ev.target === getEditorRoot()) {
        return;
      }
      setTarget(null);
    };
    window.addEventListener("click", onBlur);
    return () => {
      window.removeEventListener("click", onBlur);
    };
  }, [targetRef, popoverRef]);
  const onClose = react.exports.useCallback(() => {
    let ele = targetRef.current;
    setTimeout(() => {
      if (!ele)
        return;
      focusMergeTag(ele);
    }, 100);
    setTarget(null);
  }, [focusMergeTag, targetRef]);
  react.exports.useEffect(() => {
    if (!root)
      return;
    const onClick2 = (e) => {
      var _a;
      removeAllActiveBadge();
      const target2 = e.target;
      if (target2 instanceof HTMLInputElement && target2.classList.contains("easy-email-merge-tag")) {
        target2.classList.add("easy-email-merge-tag-focus");
        const namePath = target2.value;
        if (!onChangeMergeTag) {
          focusMergeTag(target2);
          return;
        }
        setText(lodash.exports.get(mergeTags2, namePath, ""));
        setTarget(target2);
      } else {
        if ((_a = popoverRef.current) == null ? void 0 : _a.contains(e.target))
          return;
        setTarget(null);
      }
    };
    root.addEventListener("click", onClick2);
    return () => {
      root.removeEventListener("click", onClick2);
    };
  }, [focusMergeTag, mergeTags2, onChangeMergeTag, root]);
  const onChange = react.exports.useCallback((ev) => {
    setText(ev.target.value);
  }, []);
  const onSave = react.exports.useCallback(() => {
    if (!(target instanceof HTMLInputElement))
      return;
    onChangeMergeTag == null ? void 0 : onChangeMergeTag(target.value, text);
    onClose();
  }, [onChangeMergeTag, onClose, target, text]);
  const onClick = react.exports.useCallback((ev) => {
    ev.stopPropagation();
  }, []);
  react.exports.useEffect(() => {
    const onKeyDown = (e) => {
      var _a;
      if (((_a = e.code) == null ? void 0 : _a.toLocaleLowerCase()) === "escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onSave]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, root && reactDom.exports.createPortal(/* @__PURE__ */ React.createElement("style", null, stylesText), root), textContainer && reactDom.exports.createPortal(
    /* @__PURE__ */ React.createElement("div", { ref: popoverRef, onClick, className: classnames("easy-email-merge-tag-popover") }, /* @__PURE__ */ React.createElement("div", { className: "easy-email-merge-tag-popover-container" }, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement("span", null, t("Default value")), /* @__PURE__ */ React.createElement(IconFont, { style: { color: "rgb(92, 95, 98)" }, iconName: "icon-close", onClick: onClose })), /* @__PURE__ */ React.createElement("div", { className: "easy-email-merge-tag-popover-desc" }, /* @__PURE__ */ React.createElement("p", null, t('If a personalized text value isn"t available, then a default value is shown.')), /* @__PURE__ */ React.createElement("div", { className: "easy-email-merge-tag-popover-desc-label" }, /* @__PURE__ */ React.createElement("input", { autoFocus: true, value: text, onChange, type: "text", autoComplete: "off", maxLength: 40 }), /* @__PURE__ */ React.createElement("div", { className: "easy-email-merge-tag-popover-desc-label-count" }, text.length, "/40")), /* @__PURE__ */ React.createElement("div", { className: "easy-email-merge-tag-popover-desc-label-button" }, /* @__PURE__ */ React.createElement("button", { onClick: onSave }, t("Save")))))),
    textContainer
  ));
}
const SimpleLayout = (props) => {
  const { height: containerHeight } = useEditorProps();
  const { showSourceCode = true, defaultShowLayer = true, jsonReadOnly = false, mjmlReadOnly = false } = props;
  const [collapsed, setCollapsed] = react.exports.useState(!defaultShowLayer);
  return /* @__PURE__ */ React.createElement(ConfigProvider, { locale: enUS }, /* @__PURE__ */ React.createElement(
    Layout,
    {
      className: styles$2.SimpleLayout,
      style: {
        display: "flex",
        width: "100%",
        overflow: "hidden"
      }
    },
    /* @__PURE__ */ React.createElement(
      Layout.Sider,
      {
        style: { paddingRight: 0 },
        collapsed,
        collapsible: true,
        trigger: null,
        breakpoint: "xl",
        collapsedWidth: 60,
        width: 300
      },
      /* @__PURE__ */ React.createElement(
        Card,
        {
          bodyStyle: { padding: 0 },
          style: { border: "none" }
        },
        /* @__PURE__ */ React.createElement(Card.Grid, { style: { width: 60, textAlign: "center" } }, /* @__PURE__ */ React.createElement(ShortcutToolbar, null), /* @__PURE__ */ React.createElement(
          Button,
          {
            style: {
              marginTop: 30,
              marginLeft: "auto",
              marginRight: "auto"
            },
            icon: collapsed ? /* @__PURE__ */ React.createElement(IconRight, null) : /* @__PURE__ */ React.createElement(IconLeft, null),
            shape: "round",
            onClick: () => setCollapsed((v) => !v)
          }
        )),
        /* @__PURE__ */ React.createElement(
          Card.Grid,
          {
            className: styles$2.customScrollBar,
            style: {
              flex: 1,
              paddingBottom: 50,
              border: "none",
              height: containerHeight,
              overflowY: "auto",
              overflowX: "hidden"
            }
          },
          /* @__PURE__ */ React.createElement(
            Card,
            {
              title: t("Layout"),
              style: { border: "none" },
              headerStyle: { height: 50 }
            },
            !collapsed && /* @__PURE__ */ React.createElement(BlockLayer, { renderTitle: props.renderTitle })
          )
        )
      )
    ),
    /* @__PURE__ */ React.createElement(Layout, { style: { height: containerHeight } }, props.children),
    /* @__PURE__ */ React.createElement(
      Layout.Sider,
      {
        style: {
          height: containerHeight,
          minWidth: 300,
          maxWidth: 350,
          width: 350
        },
        className: styles$2.rightSide
      },
      /* @__PURE__ */ React.createElement(
        Card,
        {
          size: "small",
          id: "rightSide",
          style: {
            maxHeight: "100%",
            height: "100%",
            borderLeft: "none"
          },
          bodyStyle: { padding: 0 },
          className: styles$2.customScrollBarV2
        },
        /* @__PURE__ */ React.createElement(Tabs, { className: styles$2.layoutTabs }, /* @__PURE__ */ React.createElement(
          Tabs.TabPane,
          {
            title: /* @__PURE__ */ React.createElement("div", { style: { height: 31, lineHeight: "31px" } }, t("Configuration"))
          },
          /* @__PURE__ */ React.createElement(AttributePanel, null)
        ))
      )
    ),
    /* @__PURE__ */ React.createElement(InteractivePrompt, null),
    /* @__PURE__ */ React.createElement(MergeTagBadgePrompt, null)
  ));
};
var esErrors = Error;
var _eval = EvalError;
var range = RangeError;
var ref = ReferenceError;
var syntax = SyntaxError;
var type = TypeError;
var uri = URIError;
var shams = function hasSymbols() {
  if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
  }
  if (typeof Symbol.iterator === "symbol") {
    return true;
  }
  var obj = {};
  var sym = Symbol("test");
  var symObj = Object(sym);
  if (typeof sym === "string") {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
    return false;
  }
  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  }
  if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === "function") {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams;
var hasSymbols$1 = function hasNativeSymbols() {
  if (typeof origSymbol !== "function") {
    return false;
  }
  if (typeof Symbol !== "function") {
    return false;
  }
  if (typeof origSymbol("foo") !== "symbol") {
    return false;
  }
  if (typeof Symbol("bar") !== "symbol") {
    return false;
  }
  return hasSymbolSham();
};
var test = {
  __proto__: null,
  foo: {}
};
var $Object = Object;
var hasProto$1 = function hasProto() {
  return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
};
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var toStr$1 = Object.prototype.toString;
var max = Math.max;
var funcType = "[object Function]";
var concatty = function concatty2(a, b) {
  var arr = [];
  for (var i = 0; i < a.length; i += 1) {
    arr[i] = a[i];
  }
  for (var j = 0; j < b.length; j += 1) {
    arr[j + a.length] = b[j];
  }
  return arr;
};
var slicy = function slicy2(arrLike, offset) {
  var arr = [];
  for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
    arr[j] = arrLike[i];
  }
  return arr;
};
var joiny = function(arr, joiner) {
  var str = "";
  for (var i = 0; i < arr.length; i += 1) {
    str += arr[i];
    if (i + 1 < arr.length) {
      str += joiner;
    }
  }
  return str;
};
var implementation$1 = function bind(that) {
  var target = this;
  if (typeof target !== "function" || toStr$1.apply(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slicy(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result = target.apply(
        this,
        concatty(args, arguments)
      );
      if (Object(result) === result) {
        return result;
      }
      return this;
    }
    return target.apply(
      that,
      concatty(args, arguments)
    );
  };
  var boundLength = max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs[i] = "$" + i;
  }
  bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind$1 = functionBind;
var hasown = bind$1.call(call, $hasOwn);
var undefined$1;
var $Error = esErrors;
var $EvalError = _eval;
var $RangeError = range;
var $ReferenceError = ref;
var $SyntaxError$1 = syntax;
var $TypeError$3 = type;
var $URIError = uri;
var $Function = Function;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e) {
  }
};
var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
  try {
    $gOPD$1({}, "");
  } catch (e) {
    $gOPD$1 = null;
  }
}
var throwTypeError = function() {
  throw new $TypeError$3();
};
var ThrowTypeError = $gOPD$1 ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD$1(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols2 = hasSymbols$1();
var hasProto2 = hasProto$1();
var getProto = Object.getPrototypeOf || (hasProto2 ? function(x) {
  return x.__proto__;
} : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols2 && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": $Error,
  "%eval%": eval,
  "%EvalError%": $EvalError,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols2 && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": $RangeError,
  "%ReferenceError%": $ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols2 && getProto ? getProto(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError$1,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError$3,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": $URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
if (getProto) {
  try {
    null.error;
  } catch (e) {
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
  }
}
var doEval = function doEval2(name) {
  var value;
  if (name === "%AsyncFunction%") {
    value = getEvalledConstructor("async function () {}");
  } else if (name === "%GeneratorFunction%") {
    value = getEvalledConstructor("function* () {}");
  } else if (name === "%AsyncGeneratorFunction%") {
    value = getEvalledConstructor("async function* () {}");
  } else if (name === "%AsyncGenerator%") {
    var fn = doEval2("%AsyncGeneratorFunction%");
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen && getProto) {
      value = getProto(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind2 = functionBind;
var hasOwn$1 = hasown;
var $concat$1 = bind2.call(Function.call, Array.prototype.concat);
var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
var $replace$1 = bind2.call(Function.call, String.prototype.replace);
var $strSlice = bind2.call(Function.call, String.prototype.slice);
var $exec = bind2.call(Function.call, RegExp.prototype.exec);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string2) {
  var first = $strSlice(string2, 0, 1);
  var last = $strSlice(string2, -1);
  if (first === "%" && last !== "%") {
    throw new $SyntaxError$1("invalid intrinsic syntax, expected closing `%`");
  } else if (last === "%" && first !== "%") {
    throw new $SyntaxError$1("invalid intrinsic syntax, expected opening `%`");
  }
  var result = [];
  $replace$1(string2, rePropName, function(match, number2, quote2, subString) {
    result[result.length] = quote2 ? $replace$1(subString, reEscapeChar, "$1") : number2 || match;
  });
  return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn$1(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === "undefined" && !allowMissing) {
      throw new $TypeError$3("intrinsic " + name + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value
    };
  }
  throw new $SyntaxError$1("intrinsic " + name + " does not exist!");
};
var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== "string" || name.length === 0) {
    throw new $TypeError$3("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError$3('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name) === null) {
    throw new $SyntaxError$1("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat$1([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
      throw new $SyntaxError$1("property names with quotes must have matching quotes");
    }
    if (part === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError$3("base intrinsic for " + name + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD$1 && i + 1 >= parts.length) {
        var desc = $gOPD$1(value, part);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn$1(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};
var callBind$1 = { exports: {} };
var esDefineProperty;
var hasRequiredEsDefineProperty;
function requireEsDefineProperty() {
  if (hasRequiredEsDefineProperty)
    return esDefineProperty;
  hasRequiredEsDefineProperty = 1;
  var GetIntrinsic3 = getIntrinsic;
  var $defineProperty2 = GetIntrinsic3("%Object.defineProperty%", true) || false;
  if ($defineProperty2) {
    try {
      $defineProperty2({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty2 = false;
    }
  }
  esDefineProperty = $defineProperty2;
  return esDefineProperty;
}
var GetIntrinsic$3 = getIntrinsic;
var $gOPD = GetIntrinsic$3("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) {
  try {
    $gOPD([], "length");
  } catch (e) {
    $gOPD = null;
  }
}
var gopd$1 = $gOPD;
var $defineProperty$1 = requireEsDefineProperty();
var $SyntaxError = syntax;
var $TypeError$2 = type;
var gopd = gopd$1;
var defineDataProperty = function defineDataProperty2(obj, property2, value) {
  if (!obj || typeof obj !== "object" && typeof obj !== "function") {
    throw new $TypeError$2("`obj` must be an object or a function`");
  }
  if (typeof property2 !== "string" && typeof property2 !== "symbol") {
    throw new $TypeError$2("`property` must be a string or a symbol`");
  }
  if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
    throw new $TypeError$2("`nonEnumerable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
    throw new $TypeError$2("`nonWritable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
    throw new $TypeError$2("`nonConfigurable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
    throw new $TypeError$2("`loose`, if provided, must be a boolean");
  }
  var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
  var nonWritable = arguments.length > 4 ? arguments[4] : null;
  var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
  var loose = arguments.length > 6 ? arguments[6] : false;
  var desc = !!gopd && gopd(obj, property2);
  if ($defineProperty$1) {
    $defineProperty$1(obj, property2, {
      configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
      enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
      value,
      writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
  } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
    obj[property2] = value;
  } else {
    throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }
};
var $defineProperty = requireEsDefineProperty();
var hasPropertyDescriptors = function hasPropertyDescriptors2() {
  return !!$defineProperty;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (!$defineProperty) {
    return null;
  }
  try {
    return $defineProperty([], "length", { value: 1 }).length !== 1;
  } catch (e) {
    return true;
  }
};
var hasPropertyDescriptors_1 = hasPropertyDescriptors;
var GetIntrinsic$2 = getIntrinsic;
var define = defineDataProperty;
var hasDescriptors = hasPropertyDescriptors_1();
var gOPD = gopd$1;
var $TypeError$1 = type;
var $floor$1 = GetIntrinsic$2("%Math.floor%");
var setFunctionLength = function setFunctionLength2(fn, length) {
  if (typeof fn !== "function") {
    throw new $TypeError$1("`fn` is not a function");
  }
  if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor$1(length) !== length) {
    throw new $TypeError$1("`length` must be a positive 32-bit integer");
  }
  var loose = arguments.length > 2 && !!arguments[2];
  var functionLengthIsConfigurable = true;
  var functionLengthIsWritable = true;
  if ("length" in fn && gOPD) {
    var desc = gOPD(fn, "length");
    if (desc && !desc.configurable) {
      functionLengthIsConfigurable = false;
    }
    if (desc && !desc.writable) {
      functionLengthIsWritable = false;
    }
  }
  if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
    if (hasDescriptors) {
      define(fn, "length", length, true, true);
    } else {
      define(fn, "length", length);
    }
  }
  return fn;
};
(function(module) {
  var bind3 = functionBind;
  var GetIntrinsic3 = getIntrinsic;
  var setFunctionLength$1 = setFunctionLength;
  var $TypeError2 = type;
  var $apply = GetIntrinsic3("%Function.prototype.apply%");
  var $call = GetIntrinsic3("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
  var $defineProperty2 = requireEsDefineProperty();
  var $max = GetIntrinsic3("%Math.max%");
  module.exports = function callBind2(originalFunction) {
    if (typeof originalFunction !== "function") {
      throw new $TypeError2("a function is required");
    }
    var func = $reflectApply(bind3, $call, arguments);
    return setFunctionLength$1(
      func,
      1 + $max(0, originalFunction.length - (arguments.length - 1)),
      true
    );
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind3, $apply, arguments);
  };
  if ($defineProperty2) {
    $defineProperty2(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
})(callBind$1);
var GetIntrinsic$1 = getIntrinsic;
var callBind = callBind$1.exports;
var $indexOf = callBind(GetIntrinsic$1("String.prototype.indexOf"));
var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = GetIntrinsic$1(name, !!allowMissing);
  if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
    return callBind(intrinsic);
  }
  return intrinsic;
};
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString$1 = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
  return O.__proto__;
} : null);
function addNumericSeparator(num, str) {
  if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
    return str;
  }
  var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof num === "number") {
    var int = num < 0 ? -$floor(-num) : $floor(num);
    if (int !== num) {
      var intStr = String(int);
      var dec = $slice.call(str, intStr.length + 1);
      return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return $replace.call(str, sepRegex, "$&_");
}
var utilInspect = require$$0;
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var objectInspect = function inspect_(obj, options, depth, seen) {
  var opts = options || {};
  if (has$3(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  }
  if (has$3(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  }
  var customInspect = has$3(opts, "customInspect") ? opts.customInspect : true;
  if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  }
  if (has$3(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  }
  if (has$3(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  }
  var numericSeparator = opts.numericSeparator;
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  if (typeof obj === "boolean") {
    return obj ? "true" : "false";
  }
  if (typeof obj === "string") {
    return inspectString(obj, opts);
  }
  if (typeof obj === "number") {
    if (obj === 0) {
      return Infinity / obj > 0 ? "0" : "-0";
    }
    var str = String(obj);
    return numericSeparator ? addNumericSeparator(obj, str) : str;
  }
  if (typeof obj === "bigint") {
    var bigIntStr = String(obj) + "n";
    return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
  }
  var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
  if (typeof depth === "undefined") {
    depth = 0;
  }
  if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
    return isArray$5(obj) ? "[Array]" : "[Object]";
  }
  var indent = getIndent(opts, depth);
  if (typeof seen === "undefined") {
    seen = [];
  } else if (indexOf(seen, obj) >= 0) {
    return "[Circular]";
  }
  function inspect2(value, from, noIndent) {
    if (from) {
      seen = $arrSlice.call(seen);
      seen.push(from);
    }
    if (noIndent) {
      var newOpts = {
        depth: opts.depth
      };
      if (has$3(opts, "quoteStyle")) {
        newOpts.quoteStyle = opts.quoteStyle;
      }
      return inspect_(value, newOpts, depth + 1, seen);
    }
    return inspect_(value, opts, depth + 1, seen);
  }
  if (typeof obj === "function" && !isRegExp$1(obj)) {
    var name = nameOf(obj);
    var keys2 = arrObjKeys(obj, inspect2);
    return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys2.length > 0 ? " { " + $join.call(keys2, ", ") + " }" : "");
  }
  if (isSymbol(obj)) {
    var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
    return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
  }
  if (isElement(obj)) {
    var s = "<" + $toLowerCase.call(String(obj.nodeName));
    var attrs = obj.attributes || [];
    for (var i = 0; i < attrs.length; i++) {
      s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
    }
    s += ">";
    if (obj.childNodes && obj.childNodes.length) {
      s += "...";
    }
    s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
    return s;
  }
  if (isArray$5(obj)) {
    if (obj.length === 0) {
      return "[]";
    }
    var xs = arrObjKeys(obj, inspect2);
    if (indent && !singleLineValues(xs)) {
      return "[" + indentedJoin(xs, indent) + "]";
    }
    return "[ " + $join.call(xs, ", ") + " ]";
  }
  if (isError(obj)) {
    var parts = arrObjKeys(obj, inspect2);
    if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
      return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect2(obj.cause), parts), ", ") + " }";
    }
    if (parts.length === 0) {
      return "[" + String(obj) + "]";
    }
    return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
  }
  if (typeof obj === "object" && customInspect) {
    if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
      return utilInspect(obj, { depth: maxDepth - depth });
    } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
      return obj.inspect();
    }
  }
  if (isMap(obj)) {
    var mapParts = [];
    if (mapForEach) {
      mapForEach.call(obj, function(value, key) {
        mapParts.push(inspect2(key, obj, true) + " => " + inspect2(value, obj));
      });
    }
    return collectionOf("Map", mapSize.call(obj), mapParts, indent);
  }
  if (isSet(obj)) {
    var setParts = [];
    if (setForEach) {
      setForEach.call(obj, function(value) {
        setParts.push(inspect2(value, obj));
      });
    }
    return collectionOf("Set", setSize.call(obj), setParts, indent);
  }
  if (isWeakMap(obj)) {
    return weakCollectionOf("WeakMap");
  }
  if (isWeakSet(obj)) {
    return weakCollectionOf("WeakSet");
  }
  if (isWeakRef(obj)) {
    return weakCollectionOf("WeakRef");
  }
  if (isNumber(obj)) {
    return markBoxed(inspect2(Number(obj)));
  }
  if (isBigInt(obj)) {
    return markBoxed(inspect2(bigIntValueOf.call(obj)));
  }
  if (isBoolean(obj)) {
    return markBoxed(booleanValueOf.call(obj));
  }
  if (isString(obj)) {
    return markBoxed(inspect2(String(obj)));
  }
  if (typeof window !== "undefined" && obj === window) {
    return "{ [object Window] }";
  }
  if (obj === commonjsGlobal) {
    return "{ [object globalThis] }";
  }
  if (!isDate$1(obj) && !isRegExp$1(obj)) {
    var ys = arrObjKeys(obj, inspect2);
    var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
    var protoTag = obj instanceof Object ? "" : "null prototype";
    var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
    var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
    var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
    if (ys.length === 0) {
      return tag + "{}";
    }
    if (indent) {
      return tag + "{" + indentedJoin(ys, indent) + "}";
    }
    return tag + "{ " + $join.call(ys, ", ") + " }";
  }
  return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
  var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
  return quoteChar + s + quoteChar;
}
function quote(s) {
  return $replace.call(String(s), /"/g, "&quot;");
}
function isArray$5(obj) {
  return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate$1(obj) {
  return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp$1(obj) {
  return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
  return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
  return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
  return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
  return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isSymbol(obj) {
  if (hasShammedSymbols) {
    return obj && typeof obj === "object" && obj instanceof Symbol;
  }
  if (typeof obj === "symbol") {
    return true;
  }
  if (!obj || typeof obj !== "object" || !symToString) {
    return false;
  }
  try {
    symToString.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
function isBigInt(obj) {
  if (!obj || typeof obj !== "object" || !bigIntValueOf) {
    return false;
  }
  try {
    bigIntValueOf.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
  return key in this;
};
function has$3(obj, key) {
  return hasOwn.call(obj, key);
}
function toStr(obj) {
  return objectToString$1.call(obj);
}
function nameOf(f) {
  if (f.name) {
    return f.name;
  }
  var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
  if (m) {
    return m[1];
  }
  return null;
}
function indexOf(xs, x) {
  if (xs.indexOf) {
    return xs.indexOf(x);
  }
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) {
      return i;
    }
  }
  return -1;
}
function isMap(x) {
  if (!mapSize || !x || typeof x !== "object") {
    return false;
  }
  try {
    mapSize.call(x);
    try {
      setSize.call(x);
    } catch (s) {
      return true;
    }
    return x instanceof Map;
  } catch (e) {
  }
  return false;
}
function isWeakMap(x) {
  if (!weakMapHas || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakMapHas.call(x, weakMapHas);
    try {
      weakSetHas.call(x, weakSetHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakMap;
  } catch (e) {
  }
  return false;
}
function isWeakRef(x) {
  if (!weakRefDeref || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakRefDeref.call(x);
    return true;
  } catch (e) {
  }
  return false;
}
function isSet(x) {
  if (!setSize || !x || typeof x !== "object") {
    return false;
  }
  try {
    setSize.call(x);
    try {
      mapSize.call(x);
    } catch (m) {
      return true;
    }
    return x instanceof Set;
  } catch (e) {
  }
  return false;
}
function isWeakSet(x) {
  if (!weakSetHas || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakSetHas.call(x, weakSetHas);
    try {
      weakMapHas.call(x, weakMapHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakSet;
  } catch (e) {
  }
  return false;
}
function isElement(x) {
  if (!x || typeof x !== "object") {
    return false;
  }
  if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
    return true;
  }
  return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
}
function inspectString(str, opts) {
  if (str.length > opts.maxStringLength) {
    var remaining = str.length - opts.maxStringLength;
    var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
    return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
  }
  var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
  return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
  var n = c.charCodeAt(0);
  var x = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[n];
  if (x) {
    return "\\" + x;
  }
  return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
  return "Object(" + str + ")";
}
function weakCollectionOf(type2) {
  return type2 + " { ? }";
}
function collectionOf(type2, size, entries, indent) {
  var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
  return type2 + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
  for (var i = 0; i < xs.length; i++) {
    if (indexOf(xs[i], "\n") >= 0) {
      return false;
    }
  }
  return true;
}
function getIndent(opts, depth) {
  var baseIndent;
  if (opts.indent === "	") {
    baseIndent = "	";
  } else if (typeof opts.indent === "number" && opts.indent > 0) {
    baseIndent = $join.call(Array(opts.indent + 1), " ");
  } else {
    return null;
  }
  return {
    base: baseIndent,
    prev: $join.call(Array(depth + 1), baseIndent)
  };
}
function indentedJoin(xs, indent) {
  if (xs.length === 0) {
    return "";
  }
  var lineJoiner = "\n" + indent.prev + indent.base;
  return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect2) {
  var isArr = isArray$5(obj);
  var xs = [];
  if (isArr) {
    xs.length = obj.length;
    for (var i = 0; i < obj.length; i++) {
      xs[i] = has$3(obj, i) ? inspect2(obj[i], obj) : "";
    }
  }
  var syms = typeof gOPS === "function" ? gOPS(obj) : [];
  var symMap;
  if (hasShammedSymbols) {
    symMap = {};
    for (var k = 0; k < syms.length; k++) {
      symMap["$" + syms[k]] = syms[k];
    }
  }
  for (var key in obj) {
    if (!has$3(obj, key)) {
      continue;
    }
    if (isArr && String(Number(key)) === key && key < obj.length) {
      continue;
    }
    if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
      continue;
    } else if ($test.call(/[^\w$]/, key)) {
      xs.push(inspect2(key, obj) + ": " + inspect2(obj[key], obj));
    } else {
      xs.push(key + ": " + inspect2(obj[key], obj));
    }
  }
  if (typeof gOPS === "function") {
    for (var j = 0; j < syms.length; j++) {
      if (isEnumerable.call(obj, syms[j])) {
        xs.push("[" + inspect2(syms[j]) + "]: " + inspect2(obj[syms[j]], obj));
      }
    }
  }
  return xs;
}
var GetIntrinsic2 = getIntrinsic;
var callBound = callBound$1;
var inspect = objectInspect;
var $TypeError = type;
var $WeakMap = GetIntrinsic2("%WeakMap%", true);
var $Map = GetIntrinsic2("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
var listGetNode = function(list2, key) {
  var prev = list2;
  var curr;
  for (; (curr = prev.next) !== null; prev = curr) {
    if (curr.key === key) {
      prev.next = curr.next;
      curr.next = list2.next;
      list2.next = curr;
      return curr;
    }
  }
};
var listGet = function(objects, key) {
  var node = listGetNode(objects, key);
  return node && node.value;
};
var listSet = function(objects, key, value) {
  var node = listGetNode(objects, key);
  if (node) {
    node.value = value;
  } else {
    objects.next = {
      key,
      next: objects.next,
      value
    };
  }
};
var listHas = function(objects, key) {
  return !!listGetNode(objects, key);
};
var sideChannel = function getSideChannel() {
  var $wm;
  var $m;
  var $o;
  var channel = {
    assert: function(key) {
      if (!channel.has(key)) {
        throw new $TypeError("Side channel does not contain " + inspect(key));
      }
    },
    get: function(key) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if ($wm) {
          return $weakMapGet($wm, key);
        }
      } else if ($Map) {
        if ($m) {
          return $mapGet($m, key);
        }
      } else {
        if ($o) {
          return listGet($o, key);
        }
      }
    },
    has: function(key) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if ($wm) {
          return $weakMapHas($wm, key);
        }
      } else if ($Map) {
        if ($m) {
          return $mapHas($m, key);
        }
      } else {
        if ($o) {
          return listHas($o, key);
        }
      }
      return false;
    },
    set: function(key, value) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if (!$wm) {
          $wm = new $WeakMap();
        }
        $weakMapSet($wm, key, value);
      } else if ($Map) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key, value);
      } else {
        if (!$o) {
          $o = { key: {}, next: null };
        }
        listSet($o, key, value);
      }
    }
  };
  return channel;
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};
var formats$3 = {
  "default": Format.RFC3986,
  formatters: {
    RFC1738: function(value) {
      return replace.call(value, percentTwenties, "+");
    },
    RFC3986: function(value) {
      return String(value);
    }
  },
  RFC1738: Format.RFC1738,
  RFC3986: Format.RFC3986
};
var formats$2 = formats$3;
var has$2 = Object.prototype.hasOwnProperty;
var isArray$4 = Array.isArray;
var hexTable = function() {
  var array2 = [];
  for (var i = 0; i < 256; ++i) {
    array2.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  }
  return array2;
}();
var compactQueue = function compactQueue2(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];
    if (isArray$4(obj)) {
      var compacted = [];
      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== "undefined") {
          compacted.push(obj[j]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
};
var arrayToObject = function arrayToObject2(source, options) {
  var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== "undefined") {
      obj[i] = source[i];
    }
  }
  return obj;
};
var merge = function merge2(target, source, options) {
  if (!source) {
    return target;
  }
  if (typeof source !== "object") {
    if (isArray$4(target)) {
      target.push(source);
    } else if (target && typeof target === "object") {
      if (options && (options.plainObjects || options.allowPrototypes) || !has$2.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }
    return target;
  }
  if (!target || typeof target !== "object") {
    return [target].concat(source);
  }
  var mergeTarget = target;
  if (isArray$4(target) && !isArray$4(source)) {
    mergeTarget = arrayToObject(target, options);
  }
  if (isArray$4(target) && isArray$4(source)) {
    source.forEach(function(item, i) {
      if (has$2.call(target, i)) {
        var targetItem = target[i];
        if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
          target[i] = merge2(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }
  return Object.keys(source).reduce(function(acc, key) {
    var value = source[key];
    if (has$2.call(acc, key)) {
      acc[key] = merge2(acc[key], value, options);
    } else {
      acc[key] = value;
    }
    return acc;
  }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function(acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};
var decode = function(str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, " ");
  if (charset === "iso-8859-1") {
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};
var limit = 1024;
var encode = function encode2(str, defaultEncoder, charset, kind, format) {
  if (str.length === 0) {
    return str;
  }
  var string2 = str;
  if (typeof str === "symbol") {
    string2 = Symbol.prototype.toString.call(str);
  } else if (typeof str !== "string") {
    string2 = String(str);
  }
  if (charset === "iso-8859-1") {
    return escape(string2).replace(/%u[0-9a-f]{4}/gi, function($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
  }
  var out = "";
  for (var j = 0; j < string2.length; j += limit) {
    var segment = string2.length >= limit ? string2.slice(j, j + limit) : string2;
    var arr = [];
    for (var i = 0; i < segment.length; ++i) {
      var c = segment.charCodeAt(i);
      if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats$2.RFC1738 && (c === 40 || c === 41)) {
        arr[arr.length] = segment.charAt(i);
        continue;
      }
      if (c < 128) {
        arr[arr.length] = hexTable[c];
        continue;
      }
      if (c < 2048) {
        arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
        continue;
      }
      if (c < 55296 || c >= 57344) {
        arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        continue;
      }
      i += 1;
      c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
      arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
    }
    out += arr.join("");
  }
  return out;
};
var compact = function compact2(value) {
  var queue = [{ obj: { o: value }, prop: "o" }];
  var refs = [];
  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys2 = Object.keys(obj);
    for (var j = 0; j < keys2.length; ++j) {
      var key = keys2[j];
      var val = obj[key];
      if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
        queue.push({ obj, prop: key });
        refs.push(val);
      }
    }
  }
  compactQueue(queue);
  return value;
};
var isRegExp = function isRegExp2(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer2(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine2(a, b) {
  return [].concat(a, b);
};
var maybeMap = function maybeMap2(val, fn) {
  if (isArray$4(val)) {
    var mapped = [];
    for (var i = 0; i < val.length; i += 1) {
      mapped.push(fn(val[i]));
    }
    return mapped;
  }
  return fn(val);
};
var utils$2 = {
  arrayToObject,
  assign,
  combine,
  compact,
  decode,
  encode,
  isBuffer,
  isRegExp,
  maybeMap,
  merge
};
var getSideChannel2 = sideChannel;
var utils$1 = utils$2;
var formats$1 = formats$3;
var has$1 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + "[]";
  },
  comma: "comma",
  indices: function indices(prefix, key) {
    return prefix + "[" + key + "]";
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray$3 = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
  push.apply(arr, isArray$3(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats$1["default"];
var defaults$1 = {
  addQueryPrefix: false,
  allowDots: false,
  allowEmptyArrays: false,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: false,
  delimiter: "&",
  encode: true,
  encodeDotInKeys: false,
  encoder: utils$1.encode,
  encodeValuesOnly: false,
  format: defaultFormat,
  formatter: formats$1.formatters[defaultFormat],
  indices: false,
  serializeDate: function serializeDate(date2) {
    return toISO.call(date2);
  },
  skipNulls: false,
  strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
  return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var sentinel = {};
var stringify$1 = function stringify(object2, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, sideChannel2) {
  var obj = object2;
  var tmpSc = sideChannel2;
  var step = 0;
  var findFlag = false;
  while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
    var pos = tmpSc.get(object2);
    step += 1;
    if (typeof pos !== "undefined") {
      if (pos === step) {
        throw new RangeError("Cyclic object value");
      } else {
        findFlag = true;
      }
    }
    if (typeof tmpSc.get(sentinel) === "undefined") {
      step = 0;
    }
  }
  if (typeof filter === "function") {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate2(obj);
  } else if (generateArrayPrefix === "comma" && isArray$3(obj)) {
    obj = utils$1.maybeMap(obj, function(value2) {
      if (value2 instanceof Date) {
        return serializeDate2(value2);
      }
      return value2;
    });
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, "key", format) : prefix;
    }
    obj = "";
  }
  if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, "key", format);
      return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults$1.encoder, charset, "value", format))];
    }
    return [formatter(prefix) + "=" + formatter(String(obj))];
  }
  var values = [];
  if (typeof obj === "undefined") {
    return values;
  }
  var objKeys;
  if (generateArrayPrefix === "comma" && isArray$3(obj)) {
    if (encodeValuesOnly && encoder) {
      obj = utils$1.maybeMap(obj, encoder);
    }
    objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
  } else if (isArray$3(filter)) {
    objKeys = filter;
  } else {
    var keys2 = Object.keys(obj);
    objKeys = sort ? keys2.sort(sort) : keys2;
  }
  var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
  var adjustedPrefix = commaRoundTrip && isArray$3(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
  if (allowEmptyArrays && isArray$3(obj) && obj.length === 0) {
    return adjustedPrefix + "[]";
  }
  for (var j = 0; j < objKeys.length; ++j) {
    var key = objKeys[j];
    var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
    if (skipNulls && value === null) {
      continue;
    }
    var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
    var keyPrefix = isArray$3(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
    sideChannel2.set(object2, step);
    var valueSideChannel = getSideChannel2();
    valueSideChannel.set(sentinel, sideChannel2);
    pushToArray(values, stringify(
      value,
      keyPrefix,
      generateArrayPrefix,
      commaRoundTrip,
      allowEmptyArrays,
      strictNullHandling,
      skipNulls,
      encodeDotInKeys,
      generateArrayPrefix === "comma" && encodeValuesOnly && isArray$3(obj) ? null : encoder,
      filter,
      sort,
      allowDots,
      serializeDate2,
      format,
      formatter,
      encodeValuesOnly,
      charset,
      valueSideChannel
    ));
  }
  return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
  if (!opts) {
    return defaults$1;
  }
  if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  }
  if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  }
  if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  var charset = opts.charset || defaults$1.charset;
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var format = formats$1["default"];
  if (typeof opts.format !== "undefined") {
    if (!has$1.call(formats$1.formatters, opts.format)) {
      throw new TypeError("Unknown format option provided.");
    }
    format = opts.format;
  }
  var formatter = formats$1.formatters[format];
  var filter = defaults$1.filter;
  if (typeof opts.filter === "function" || isArray$3(opts.filter)) {
    filter = opts.filter;
  }
  var arrayFormat;
  if (opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if ("indices" in opts) {
    arrayFormat = opts.indices ? "indices" : "repeat";
  } else {
    arrayFormat = defaults$1.arrayFormat;
  }
  if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  }
  var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults$1.allowDots : !!opts.allowDots;
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
    allowDots,
    allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults$1.allowEmptyArrays,
    arrayFormat,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$1.charsetSentinel,
    commaRoundTrip: opts.commaRoundTrip,
    delimiter: typeof opts.delimiter === "undefined" ? defaults$1.delimiter : opts.delimiter,
    encode: typeof opts.encode === "boolean" ? opts.encode : defaults$1.encode,
    encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults$1.encodeDotInKeys,
    encoder: typeof opts.encoder === "function" ? opts.encoder : defaults$1.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
    filter,
    format,
    formatter,
    serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults$1.serializeDate,
    skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults$1.skipNulls,
    sort: typeof opts.sort === "function" ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$1.strictNullHandling
  };
};
var stringify_1 = function(object2, opts) {
  var obj = object2;
  var options = normalizeStringifyOptions(opts);
  var objKeys;
  var filter;
  if (typeof options.filter === "function") {
    filter = options.filter;
    obj = filter("", obj);
  } else if (isArray$3(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }
  var keys2 = [];
  if (typeof obj !== "object" || obj === null) {
    return "";
  }
  var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
  var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
  if (!objKeys) {
    objKeys = Object.keys(obj);
  }
  if (options.sort) {
    objKeys.sort(options.sort);
  }
  var sideChannel2 = getSideChannel2();
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    if (options.skipNulls && obj[key] === null) {
      continue;
    }
    pushToArray(keys2, stringify$1(
      obj[key],
      key,
      generateArrayPrefix,
      commaRoundTrip,
      options.allowEmptyArrays,
      options.strictNullHandling,
      options.skipNulls,
      options.encodeDotInKeys,
      options.encode ? options.encoder : null,
      options.filter,
      options.sort,
      options.allowDots,
      options.serializeDate,
      options.format,
      options.formatter,
      options.encodeValuesOnly,
      options.charset,
      sideChannel2
    ));
  }
  var joined = keys2.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? "?" : "";
  if (options.charsetSentinel) {
    if (options.charset === "iso-8859-1") {
      prefix += "utf8=%26%2310003%3B&";
    } else {
      prefix += "utf8=%E2%9C%93&";
    }
  }
  return joined.length > 0 ? prefix + joined : "";
};
var utils = utils$2;
var has = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;
var defaults = {
  allowDots: false,
  allowEmptyArrays: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decodeDotInKeys: false,
  decoder: utils.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1e3,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};
var interpretNumericEntities = function(str) {
  return str.replace(/&#(\d+);/g, function($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
};
var parseArrayValue = function(val, options) {
  if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
    return val.split(",");
  }
  return val;
};
var isoSentinel = "utf8=%26%2310003%3B";
var charsetSentinel = "utf8=%E2%9C%93";
var parseValues = function parseQueryStringValues(str, options) {
  var obj = { __proto__: null };
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
  var limit2 = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit2);
  var skipIndex = -1;
  var i;
  var charset = options.charset;
  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf("utf8=") === 0) {
        if (parts[i] === charsetSentinel) {
          charset = "utf-8";
        } else if (parts[i] === isoSentinel) {
          charset = "iso-8859-1";
        }
        skipIndex = i;
        i = parts.length;
      }
    }
  }
  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }
    var part = parts[i];
    var bracketEqualsPos = part.indexOf("]=");
    var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
    var key, val;
    if (pos === -1) {
      key = options.decoder(part, defaults.decoder, charset, "key");
      val = options.strictNullHandling ? null : "";
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
      val = utils.maybeMap(
        parseArrayValue(part.slice(pos + 1), options),
        function(encodedVal) {
          return options.decoder(encodedVal, defaults.decoder, charset, "value");
        }
      );
    }
    if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
      val = interpretNumericEntities(val);
    }
    if (part.indexOf("[]=") > -1) {
      val = isArray$2(val) ? [val] : val;
    }
    var existing = has.call(obj, key);
    if (existing && options.duplicates === "combine") {
      obj[key] = utils.combine(obj[key], val);
    } else if (!existing || options.duplicates === "last") {
      obj[key] = val;
    }
  }
  return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
  var leaf = valuesParsed ? val : parseArrayValue(val, options);
  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];
    if (root === "[]" && options.parseArrays) {
      obj = options.allowEmptyArrays && leaf === "" ? [] : [].concat(leaf);
    } else {
      obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
      var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
      var index = parseInt(decodedRoot, 10);
      if (!options.parseArrays && decodedRoot === "") {
        obj = { 0: leaf };
      } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
        obj = [];
        obj[index] = leaf;
      } else if (decodedRoot !== "__proto__") {
        obj[decodedRoot] = leaf;
      }
    }
    leaf = obj;
  }
  return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
  if (!givenKey) {
    return;
  }
  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
  var brackets2 = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g;
  var segment = options.depth > 0 && brackets2.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key;
  var keys2 = [];
  if (parent) {
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys2.push(parent);
  }
  var i = 0;
  while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;
    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys2.push(segment[1]);
  }
  if (segment) {
    keys2.push("[" + key.slice(segment.index) + "]");
  }
  return parseObject(keys2, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions2(opts) {
  if (!opts) {
    return defaults;
  }
  if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  }
  if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  }
  if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
    throw new TypeError("Decoder has to be a function.");
  }
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
  var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
  if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
    throw new TypeError("The duplicates option must be either combine, first, or last");
  }
  var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
  return {
    allowDots,
    allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
    allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
    allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
    arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
    comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
    decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
    decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
    delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
    depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
    duplicates,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
  };
};
var parse$1 = function(str, opts) {
  var options = normalizeParseOptions(opts);
  if (str === "" || str === null || typeof str === "undefined") {
    return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  }
  var tempObj = typeof str === "string" ? parseValues(str, options) : str;
  var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  var keys2 = Object.keys(tempObj);
  for (var i = 0; i < keys2.length; ++i) {
    var key = keys2[i];
    var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
    obj = utils.merge(obj, newObj, options);
  }
  if (options.allowSparse === true) {
    return obj;
  }
  return utils.compact(obj);
};
var stringify2 = stringify_1;
var parse = parse$1;
var formats = formats$3;
var lib = {
  formats,
  parse,
  stringify: stringify2
};
const qs = lib;
function useQuery() {
  const { push: push3 } = useHistory();
  const { search } = useLocation();
  const query = react.exports.useMemo(() => {
    return qs.parse(search, {
      ignoreQueryPrefix: true
    });
  }, [search]);
  const patchQuery = react.exports.useCallback((params) => {
    const newSearch = qs.stringify(
      {
        ...query,
        ...params
      },
      {
        addQueryPrefix: true
      }
    );
    push3({
      search: newSearch
    });
    return newSearch;
  }, [push3, query]);
  return { ...query, patchQuery };
}
function Help(props) {
  return /* @__PURE__ */ React.createElement(Tooltip, { ...{ ...props, style: void 0 }, content: props.title }, /* @__PURE__ */ React.createElement("span", { style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement(IconQuestionCircle, { style: props.style })));
}
function ShortCodes() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const copyShortCode = async (shortcode) => {
    try {
      await navigator.clipboard.writeText(shortcode);
      var description = shortcode + " is copied";
      Message.success(description);
      handleCancel();
    } catch (err) {
      Message.error("Failed to copy: " + shortcode);
    }
  };
  const columns = [
    {
      title: "ShortCodes",
      dataIndex: "shortcodes",
      width: 330,
      render: (shortcodes) => /* @__PURE__ */ React.createElement(Link$1, { hoverable: true, icon: /* @__PURE__ */ React.createElement(IconCopy, null), onClick: () => copyShortCode(shortcodes) }, shortcodes)
    },
    {
      title: "Description",
      dataIndex: "description"
    }
  ];
  const shipping_address = [
    {
      key: "1",
      shortcodes: "{{shipping.first_name}}",
      description: " To get shipping first name"
    },
    {
      key: "2",
      shortcodes: "{{shipping.last_name}}",
      description: "To get shipping last name"
    },
    {
      key: "3",
      shortcodes: "{{shipping.full_name}}",
      description: "To get shipping name"
    },
    {
      key: "4",
      shortcodes: "{{shipping.company}}",
      description: "To get shipping company"
    },
    {
      key: "5",
      shortcodes: "{{shipping.address1}}",
      description: "To get shipping address 1"
    },
    {
      key: "6",
      shortcodes: "{{shipping.address2}}",
      description: " To get shipping address 2"
    },
    {
      key: "7",
      shortcodes: "{{shipping.city}}",
      description: " To get shipping city"
    },
    {
      key: "8",
      shortcodes: "{{shipping.state}}",
      description: "To get shipping state"
    },
    {
      key: "9",
      shortcodes: "{{shipping.zip}}",
      description: "To get shipping zip code"
    },
    {
      key: "10",
      shortcodes: "{{shipping.country}}",
      description: "To get shipping country"
    },
    {
      key: "11",
      shortcodes: "{{shipping.full_address}}",
      description: "To get shipping Complete Address"
    }
  ];
  const site_details = [
    {
      key: "1",
      shortcodes: "{{site.url}}",
      description: "To get site URL"
    },
    {
      key: "2",
      shortcodes: "{{site.name}}",
      description: "To get site name"
    },
    {
      key: "3",
      shortcodes: "{{admin.email}}",
      description: "To get admin email"
    },
    {
      key: "4",
      shortcodes: "{{home.url}}",
      description: "To get home url"
    }
  ];
  const shop_details = [
    {
      key: "1",
      shortcodes: "{{shop.email}}",
      description: "To get shop E-Mail"
    },
    {
      key: "2",
      shortcodes: "{{shop.url}}",
      description: "To get shop URL"
    },
    {
      key: "3",
      shortcodes: "{{shop.address1}}	",
      description: "To get shop address 1"
    },
    {
      key: "4",
      shortcodes: "{{shop.address2}}",
      description: "To get shop address 2"
    },
    {
      key: "5",
      shortcodes: "{{shop.city}}	",
      description: "To get shop city"
    },
    {
      key: "6",
      shortcodes: "{{shop.zip}}",
      description: "To get shop zip code"
    },
    {
      key: "7",
      shortcodes: "{{shop.state}}",
      description: "To get shop zip code"
    },
    {
      key: "8",
      shortcodes: "{{shop.country}}",
      description: "To get shop zip code"
    },
    {
      key: "9",
      shortcodes: "{{checkout.url}}",
      description: "To get Checkout url"
    }
  ];
  const customer_details = [
    {
      key: "1",
      shortcodes: "{{customer.name}}",
      description: "To get customer name"
    },
    {
      key: "2",
      shortcodes: "{{customer.email}}",
      description: "To get customer E-Mail"
    },
    {
      key: "3",
      shortcodes: "{{customer.note}}",
      description: "To get customer Note"
    }
  ];
  const user = [
    {
      key: "1",
      shortcodes: "{{user.name}}",
      description: "To get user name"
    },
    {
      key: "2",
      shortcodes: "{{first.name}}",
      description: "To get user first name"
    },
    {
      key: "3",
      shortcodes: "{{last.name}}",
      description: "To get user last name"
    },
    {
      key: "4",
      shortcodes: "{{user.email}}",
      description: "To get user email"
    },
    {
      key: "5",
      shortcodes: "{{myaccount.url}}",
      description: "To get account url"
    },
    {
      key: "6",
      shortcodes: "{{user.login}}",
      description: "To get login name"
    },
    {
      key: "7",
      shortcodes: "{{user.password}}",
      description: "To get password"
    },
    {
      key: "8",
      shortcodes: "{{user.reset_pass_url}}",
      description: "To get reset password url"
    }
  ];
  const payment_details = [
    {
      key: "1",
      shortcodes: "{{payment.method}}",
      description: "To get order payment method"
    },
    {
      key: "2",
      shortcodes: "{{payment.url}}",
      description: "To get payment URL"
    }
  ];
  const order_details = [
    {
      key: "1",
      shortcodes: "{{order.id}}",
      description: "To get order id"
    },
    {
      key: "2",
      shortcodes: "{{order.number}}",
      description: "To get order number"
    },
    {
      key: "3",
      shortcodes: "{{item.count}}",
      description: "To get total item count"
    },
    {
      key: "4",
      shortcodes: "{{order.note}}",
      description: "To get note"
    },
    {
      key: "5",
      shortcodes: "{{subtotal.price}}",
      description: "To get order sub-total"
    },
    {
      key: "6",
      shortcodes: "{{total_price}}",
      description: "To get order total"
    },
    {
      key: "7",
      shortcodes: "{{order.date}}",
      description: "To get order date"
    },
    {
      key: "8",
      shortcodes: "{{order.fully.refund}}",
      description: "To get order Fully refund"
    },
    {
      key: "9",
      shortcodes: "{{order.partial.refund}}",
      description: "To get order Partial refund"
    },
    {
      key: "10",
      shortcodes: "{{order.received.url}}",
      description: "To get order url"
    },
    {
      key: "11",
      shortcodes: "{{order.cart}}",
      description: "To get order cart details"
    },
    {
      key: "12",
      shortcodes: "{{order.discount}}",
      description: "To get order Discount"
    },
    {
      key: "13",
      shortcodes: "{{order.shipping}}",
      description: "To get order shipping price"
    },
    {
      key: "14",
      shortcodes: "{{order.tax}}",
      description: "To get order tax"
    },
    {
      key: "15",
      shortcodes: "{{order.shipping_method}}",
      description: "To get order shipping"
    }
  ];
  const data = [
    {
      key: "1",
      shortcodes: "{{billing.first_name}}",
      description: "To get billing first name"
    },
    {
      key: "2",
      shortcodes: "{{billing.last_name}}",
      description: "To get billing last name"
    },
    {
      key: "3",
      shortcodes: "{{billing.full_name}}",
      description: "To get billing name"
    },
    {
      key: "4",
      shortcodes: "{{billing.company}}",
      description: "To get billing company"
    },
    {
      key: "5",
      shortcodes: "{{billing.phone}}",
      description: "To get billing phone"
    },
    {
      key: "6",
      shortcodes: "{{billing.address1}}",
      description: "To get billing address 1"
    },
    {
      key: "7",
      shortcodes: "{{billing.address2}}",
      description: "To get billing address 2"
    },
    {
      key: "8",
      shortcodes: "{{billing.city}}",
      description: "To get billing city"
    },
    {
      key: "9",
      shortcodes: "{{billing.state}}",
      description: "To get billing state"
    },
    {
      key: "10",
      shortcodes: "{{billing.zip}}",
      description: "To get billing zip code"
    },
    {
      key: "11",
      shortcodes: "{{billing.country}}",
      description: "To get billing country"
    },
    {
      key: "12",
      shortcodes: "{{billing.email}}",
      description: "To get billing Email"
    },
    {
      key: "13",
      shortcodes: "{{billing.full_address}",
      description: "To get billing Complete Address"
    }
  ];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    Modal,
    {
      title: "Short Codes",
      visible,
      onOk: handleOk,
      confirmLoading,
      onCancel: handleCancel,
      alignCenter: true,
      footer: null,
      style: { width: 650 }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      height: 500,
      overflowY: "auto",
      overflowX: "hidden"
    } }, /* @__PURE__ */ React.createElement(Grid.Row, null, /* @__PURE__ */ React.createElement(Grid.Col, null, /* @__PURE__ */ React.createElement("b", null, "Billing Address ", /* @__PURE__ */ React.createElement(Help, { title: "Billing Shortcode use only Order Email" })), /* @__PURE__ */ React.createElement(
      Table,
      {
        columns,
        data,
        pagination: false,
        hover: true,
        border: { wrapper: true, cell: true }
      }
    ), /* @__PURE__ */ React.createElement("b", null, "Shipping Address ", /* @__PURE__ */ React.createElement(Help, { title: "Shipping Shortcode use only Order Email" })), /* @__PURE__ */ React.createElement(
      Table,
      {
        columns,
        data: shipping_address,
        pagination: false,
        border: { wrapper: true, cell: true }
      }
    ), /* @__PURE__ */ React.createElement("b", null, "Shop Details ", /* @__PURE__ */ React.createElement(Help, { title: "Shop Shortcode use any email" })), /* @__PURE__ */ React.createElement(
      Table,
      {
        columns,
        data: shop_details,
        pagination: false,
        border: { wrapper: true, cell: true }
      }
    )), /* @__PURE__ */ React.createElement(Grid.Col, null, /* @__PURE__ */ React.createElement("b", null, "Order Details ", /* @__PURE__ */ React.createElement(Help, { title: "Order Details Shortcode use only Order email" })), /* @__PURE__ */ React.createElement(
      Table,
      {
        columns,
        data: order_details,
        pagination: false,
        border: { wrapper: true, cell: true }
      }
    ), /* @__PURE__ */ React.createElement("b", null, "Payment Details ", /* @__PURE__ */ React.createElement(Help, { title: "Payment Details Shortcode use only Order email" })), /* @__PURE__ */ React.createElement(
      Table,
      {
        columns,
        data: payment_details,
        pagination: false,
        border: { wrapper: true, cell: true }
      }
    ), /* @__PURE__ */ React.createElement("b", null, "New Account ", /* @__PURE__ */ React.createElement(Help, { title: "New Account Shortcode use only Account email" })), /* @__PURE__ */ React.createElement(
      Table,
      {
        columns,
        data: user,
        pagination: false,
        border: { wrapper: true, cell: true }
      }
    ), /* @__PURE__ */ React.createElement("b", null, "Customer Details ", /* @__PURE__ */ React.createElement(Help, { title: "Customer Details Shortcode use only order email" })), /* @__PURE__ */ React.createElement(
      Table,
      {
        columns,
        data: customer_details,
        pagination: false,
        border: { wrapper: true, cell: true }
      }
    ), /* @__PURE__ */ React.createElement("b", null, "Site Detail ", /* @__PURE__ */ React.createElement(Help, { title: "Site Shortcode use any email" })), /* @__PURE__ */ React.createElement(
      Table,
      {
        columns,
        data: site_details,
        pagination: false,
        border: { wrapper: true, cell: true }
      }
    ))))
  ), /* @__PURE__ */ React.createElement(Button, { onClick: showModal }, "Short Codes"));
}
const mergeTags = {
  product_list: [
    {
      image: `${product}`,
      title: "Product Name",
      price: "$59.99",
      url: "#"
    },
    {
      image: `${product1}`,
      title: "Product Name",
      price: "$39.99",
      url: "#"
    },
    {
      image: `${product2}`,
      title: "Product Name",
      price: "$49.99",
      url: "#"
    },
    {
      image: `${product}`,
      title: "Product Name",
      price: "$59.99",
      url: "#"
    },
    {
      image: `${product1}`,
      title: "Product Name",
      price: "$39.99",
      url: "#"
    },
    {
      image: `${product2}`,
      title: "Product Name",
      price: "$49.99",
      url: "#"
    }
  ],
  date: {
    today: () => new Date().toDateString()
  },
  condition: {
    isHidden: true,
    isNotHidden: false
  }
};
function Preview(props) {
  const dispatch = useDispatch();
  const [visible, setVisible] = react.exports.useState(false);
  const [loading, setLoading] = react.exports.useState(false);
  const [data, setData] = react.exports.useState("");
  const { id } = useQuery();
  const values = props.values;
  const Jsontohtml = mjml(JsonToMjml({
    data: values.content,
    mode: "production",
    context: values.content,
    dataSource: mergeTags
  }), {
    validationLevel: "soft"
  }).html;
  const showModal = () => {
    setVisible(true);
    setLoading(true);
    let res = new Promise((resolve) => {
      let response = dispatch(
        template.actions.Preview({
          id,
          template: values,
          html: Jsontohtml,
          success(id2, newTemplate) {
          }
        })
      );
      resolve(response);
    });
    res.then((result) => {
      setData(result.payload.html);
      setLoading(false);
    });
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, { onClick: showModal }, "Preview"), /* @__PURE__ */ React.createElement(
    Modal,
    {
      title: "Email Preview",
      visible,
      onOk: () => setVisible(false),
      onCancel: () => setVisible(false),
      afterClose: () => setData(""),
      alignCenter: true,
      footer: null,
      style: { width: 750 }
    },
    /* @__PURE__ */ React.createElement(Spin, { dot: true, loading, style: { width: "100%", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: data } }))
  ));
}
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var objectToString = Object.prototype.toString;
var isArray$1 = Array.isArray || function isArrayPolyfill(object2) {
  return objectToString.call(object2) === "[object Array]";
};
function isFunction(object2) {
  return typeof object2 === "function";
}
function typeStr(obj) {
  return isArray$1(obj) ? "array" : typeof obj;
}
function escapeRegExp(string2) {
  return string2.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function hasProperty(obj, propName) {
  return obj != null && typeof obj === "object" && propName in obj;
}
function primitiveHasOwnProperty(primitive, propName) {
  return primitive != null && typeof primitive !== "object" && primitive.hasOwnProperty && primitive.hasOwnProperty(propName);
}
var regExpTest = RegExp.prototype.test;
function testRegExp(re, string2) {
  return regExpTest.call(re, string2);
}
var nonSpaceRe = /\S/;
function isWhitespace(string2) {
  return !testRegExp(nonSpaceRe, string2);
}
var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
};
function escapeHtml(string2) {
  return String(string2).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
    return entityMap[s];
  });
}
var whiteRe = /\s*/;
var spaceRe = /\s+/;
var equalsRe = /\s*=/;
var curlyRe = /\s*\}/;
var tagRe = /#|\^|\/|>|\{|&|=|!/;
function parseTemplate(template2, tags) {
  if (!template2)
    return [];
  var lineHasNonSpace = false;
  var sections = [];
  var tokens = [];
  var spaces = [];
  var hasTag = false;
  var nonSpace = false;
  var indentation = "";
  var tagIndex = 0;
  function stripSpace() {
    if (hasTag && !nonSpace) {
      while (spaces.length)
        delete tokens[spaces.pop()];
    } else {
      spaces = [];
    }
    hasTag = false;
    nonSpace = false;
  }
  var openingTagRe, closingTagRe, closingCurlyRe;
  function compileTags(tagsToCompile) {
    if (typeof tagsToCompile === "string")
      tagsToCompile = tagsToCompile.split(spaceRe, 2);
    if (!isArray$1(tagsToCompile) || tagsToCompile.length !== 2)
      throw new Error("Invalid tags: " + tagsToCompile);
    openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
    closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
    closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]));
  }
  compileTags(tags || mustache.tags);
  var scanner = new Scanner(template2);
  var start, type2, value, chr, token, openSection;
  while (!scanner.eos()) {
    start = scanner.pos;
    value = scanner.scanUntil(openingTagRe);
    if (value) {
      for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
        chr = value.charAt(i);
        if (isWhitespace(chr)) {
          spaces.push(tokens.length);
          indentation += chr;
        } else {
          nonSpace = true;
          lineHasNonSpace = true;
          indentation += " ";
        }
        tokens.push(["text", chr, start, start + 1]);
        start += 1;
        if (chr === "\n") {
          stripSpace();
          indentation = "";
          tagIndex = 0;
          lineHasNonSpace = false;
        }
      }
    }
    if (!scanner.scan(openingTagRe))
      break;
    hasTag = true;
    type2 = scanner.scan(tagRe) || "name";
    scanner.scan(whiteRe);
    if (type2 === "=") {
      value = scanner.scanUntil(equalsRe);
      scanner.scan(equalsRe);
      scanner.scanUntil(closingTagRe);
    } else if (type2 === "{") {
      value = scanner.scanUntil(closingCurlyRe);
      scanner.scan(curlyRe);
      scanner.scanUntil(closingTagRe);
      type2 = "&";
    } else {
      value = scanner.scanUntil(closingTagRe);
    }
    if (!scanner.scan(closingTagRe))
      throw new Error("Unclosed tag at " + scanner.pos);
    if (type2 == ">") {
      token = [type2, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace];
    } else {
      token = [type2, value, start, scanner.pos];
    }
    tagIndex++;
    tokens.push(token);
    if (type2 === "#" || type2 === "^") {
      sections.push(token);
    } else if (type2 === "/") {
      openSection = sections.pop();
      if (!openSection)
        throw new Error('Unopened section "' + value + '" at ' + start);
      if (openSection[1] !== value)
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
    } else if (type2 === "name" || type2 === "{" || type2 === "&") {
      nonSpace = true;
    } else if (type2 === "=") {
      compileTags(value);
    }
  }
  stripSpace();
  openSection = sections.pop();
  if (openSection)
    throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
  return nestTokens(squashTokens(tokens));
}
function squashTokens(tokens) {
  var squashedTokens = [];
  var token, lastToken;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];
    if (token) {
      if (token[0] === "text" && lastToken && lastToken[0] === "text") {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        squashedTokens.push(token);
        lastToken = token;
      }
    }
  }
  return squashedTokens;
}
function nestTokens(tokens) {
  var nestedTokens = [];
  var collector = nestedTokens;
  var sections = [];
  var token, section;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];
    switch (token[0]) {
      case "#":
      case "^":
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case "/":
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }
  return nestedTokens;
}
function Scanner(string2) {
  this.string = string2;
  this.tail = string2;
  this.pos = 0;
}
Scanner.prototype.eos = function eos() {
  return this.tail === "";
};
Scanner.prototype.scan = function scan(re) {
  var match = this.tail.match(re);
  if (!match || match.index !== 0)
    return "";
  var string2 = match[0];
  this.tail = this.tail.substring(string2.length);
  this.pos += string2.length;
  return string2;
};
Scanner.prototype.scanUntil = function scanUntil(re) {
  var index = this.tail.search(re), match;
  switch (index) {
    case -1:
      match = this.tail;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
  }
  this.pos += match.length;
  return match;
};
function Context(view, parentContext) {
  this.view = view;
  this.cache = { ".": this.view };
  this.parent = parentContext;
}
Context.prototype.push = function push2(view) {
  return new Context(view, this);
};
Context.prototype.lookup = function lookup(name) {
  var cache = this.cache;
  var value;
  if (cache.hasOwnProperty(name)) {
    value = cache[name];
  } else {
    var context = this, intermediateValue, names, index, lookupHit = false;
    while (context) {
      if (name.indexOf(".") > 0) {
        intermediateValue = context.view;
        names = name.split(".");
        index = 0;
        while (intermediateValue != null && index < names.length) {
          if (index === names.length - 1)
            lookupHit = hasProperty(intermediateValue, names[index]) || primitiveHasOwnProperty(intermediateValue, names[index]);
          intermediateValue = intermediateValue[names[index++]];
        }
      } else {
        intermediateValue = context.view[name];
        lookupHit = hasProperty(context.view, name);
      }
      if (lookupHit) {
        value = intermediateValue;
        break;
      }
      context = context.parent;
    }
    cache[name] = value;
  }
  if (isFunction(value))
    value = value.call(this.view);
  return value;
};
function Writer() {
  this.templateCache = {
    _cache: {},
    set: function set2(key, value) {
      this._cache[key] = value;
    },
    get: function get2(key) {
      return this._cache[key];
    },
    clear: function clear() {
      this._cache = {};
    }
  };
}
Writer.prototype.clearCache = function clearCache() {
  if (typeof this.templateCache !== "undefined") {
    this.templateCache.clear();
  }
};
Writer.prototype.parse = function parse2(template2, tags) {
  var cache = this.templateCache;
  var cacheKey = template2 + ":" + (tags || mustache.tags).join(":");
  var isCacheEnabled = typeof cache !== "undefined";
  var tokens = isCacheEnabled ? cache.get(cacheKey) : void 0;
  if (tokens == void 0) {
    tokens = parseTemplate(template2, tags);
    isCacheEnabled && cache.set(cacheKey, tokens);
  }
  return tokens;
};
Writer.prototype.render = function render(template2, view, partials, config) {
  var tags = this.getConfigTags(config);
  var tokens = this.parse(template2, tags);
  var context = view instanceof Context ? view : new Context(view, void 0);
  return this.renderTokens(tokens, context, partials, template2, config);
};
Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate, config) {
  var buffer = "";
  var token, symbol, value;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    value = void 0;
    token = tokens[i];
    symbol = token[0];
    if (symbol === "#")
      value = this.renderSection(token, context, partials, originalTemplate, config);
    else if (symbol === "^")
      value = this.renderInverted(token, context, partials, originalTemplate, config);
    else if (symbol === ">")
      value = this.renderPartial(token, context, partials, config);
    else if (symbol === "&")
      value = this.unescapedValue(token, context);
    else if (symbol === "name")
      value = this.escapedValue(token, context, config);
    else if (symbol === "text")
      value = this.rawValue(token);
    if (value !== void 0)
      buffer += value;
  }
  return buffer;
};
Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate, config) {
  var self = this;
  var buffer = "";
  var value = context.lookup(token[1]);
  function subRender(template2) {
    return self.render(template2, context, partials, config);
  }
  if (!value)
    return;
  if (isArray$1(value)) {
    for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
      buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
    }
  } else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
    buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
  } else if (isFunction(value)) {
    if (typeof originalTemplate !== "string")
      throw new Error("Cannot use higher-order sections without the original template");
    value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
    if (value != null)
      buffer += value;
  } else {
    buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
  }
  return buffer;
};
Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate, config) {
  var value = context.lookup(token[1]);
  if (!value || isArray$1(value) && value.length === 0)
    return this.renderTokens(token[4], context, partials, originalTemplate, config);
};
Writer.prototype.indentPartial = function indentPartial(partial, indentation, lineHasNonSpace) {
  var filteredIndentation = indentation.replace(/[^ \t]/g, "");
  var partialByNl = partial.split("\n");
  for (var i = 0; i < partialByNl.length; i++) {
    if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
      partialByNl[i] = filteredIndentation + partialByNl[i];
    }
  }
  return partialByNl.join("\n");
};
Writer.prototype.renderPartial = function renderPartial(token, context, partials, config) {
  if (!partials)
    return;
  var tags = this.getConfigTags(config);
  var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
  if (value != null) {
    var lineHasNonSpace = token[6];
    var tagIndex = token[5];
    var indentation = token[4];
    var indentedValue = value;
    if (tagIndex == 0 && indentation) {
      indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
    }
    var tokens = this.parse(indentedValue, tags);
    return this.renderTokens(tokens, context, partials, indentedValue, config);
  }
};
Writer.prototype.unescapedValue = function unescapedValue(token, context) {
  var value = context.lookup(token[1]);
  if (value != null)
    return value;
};
Writer.prototype.escapedValue = function escapedValue(token, context, config) {
  var escape2 = this.getConfigEscape(config) || mustache.escape;
  var value = context.lookup(token[1]);
  if (value != null)
    return typeof value === "number" && escape2 === mustache.escape ? String(value) : escape2(value);
};
Writer.prototype.rawValue = function rawValue(token) {
  return token[1];
};
Writer.prototype.getConfigTags = function getConfigTags(config) {
  if (isArray$1(config)) {
    return config;
  } else if (config && typeof config === "object") {
    return config.tags;
  } else {
    return void 0;
  }
};
Writer.prototype.getConfigEscape = function getConfigEscape(config) {
  if (config && typeof config === "object" && !isArray$1(config)) {
    return config.escape;
  } else {
    return void 0;
  }
};
var mustache = {
  name: "mustache.js",
  version: "4.2.0",
  tags: ["{{", "}}"],
  clearCache: void 0,
  escape: void 0,
  parse: void 0,
  render: void 0,
  Scanner: void 0,
  Context: void 0,
  Writer: void 0,
  set templateCache(cache) {
    defaultWriter.templateCache = cache;
  },
  get templateCache() {
    return defaultWriter.templateCache;
  }
};
var defaultWriter = new Writer();
mustache.clearCache = function clearCache2() {
  return defaultWriter.clearCache();
};
mustache.parse = function parse3(template2, tags) {
  return defaultWriter.parse(template2, tags);
};
mustache.render = function render2(template2, view, partials, config) {
  if (typeof template2 !== "string") {
    throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template2) + '" was given as the first argument for mustache#render(template, view, partials)');
  }
  return defaultWriter.render(template2, view, partials, config);
};
mustache.escape = escapeHtml;
mustache.Scanner = Scanner;
mustache.Context = Context;
mustache.Writer = Writer;
const mustache$1 = mustache;
function AddFont() {
  const { focusBlock } = useBlock();
  const { focusIdx } = useFocusIdx();
  const value = focusBlock == null ? void 0 : focusBlock.data.value;
  return /* @__PURE__ */ React.createElement(
    FieldArray,
    {
      name: `${focusIdx}.data.value.fonts`,
      render: (arrayHelpers) => {
        var _a;
        return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Stack$1, { vertical: true, spacing: "tight" }, /* @__PURE__ */ React.createElement(Stack$1, { distribution: "equalSpacing" }, /* @__PURE__ */ React.createElement(TextStyle, { variation: "strong" }, "Import font ", /* @__PURE__ */ React.createElement(Help, { title: "Points to a hosted css file" })), /* @__PURE__ */ React.createElement(Stack$1, null, /* @__PURE__ */ React.createElement(
          Button,
          {
            size: "small",
            icon: /* @__PURE__ */ React.createElement(IconPlus, null),
            onClick: () => arrayHelpers.fields.push({ name: "", href: "" })
          }
        ))), /* @__PURE__ */ React.createElement(Stack$1, { vertical: true, spacing: "extraTight" }, (_a = value.fonts) == null ? void 0 : _a.map((item, index) => {
          return /* @__PURE__ */ React.createElement("div", { key: index }, /* @__PURE__ */ React.createElement(Stack$1, { alignment: "center", wrap: false }, /* @__PURE__ */ React.createElement(Stack$1.Item, { fill: true }, /* @__PURE__ */ React.createElement(
            TextField,
            {
              name: `${focusIdx}.data.value.fonts.${index}.name`,
              label: "Name"
            }
          )), /* @__PURE__ */ React.createElement(Stack$1.Item, { fill: true }, /* @__PURE__ */ React.createElement(
            TextField,
            {
              name: `${focusIdx}.data.value.fonts.${index}.href`,
              label: "Href"
            }
          )), /* @__PURE__ */ React.createElement(
            Button,
            {
              icon: /* @__PURE__ */ React.createElement(IconDelete, null),
              onClick: () => arrayHelpers.fields.remove(index)
            }
          )));
        }))));
      }
    }
  );
}
function PageOverWrite() {
  const { focusIdx } = useFocusIdx();
  const types = [
    {
      value: "wc_new_order",
      label: "New Order"
    },
    {
      value: "wc_reset_password",
      label: "Reset Password"
    },
    {
      value: "wc_customer_note",
      label: "Customer Note"
    },
    {
      value: "wc_customer_invoice_unpaid",
      label: "Customer Invoice Unpaid"
    },
    {
      value: "wc_customer_invoice_paid",
      label: "Customer Invoice Paid"
    },
    {
      value: "wc_partial_refunded_order",
      label: "Partial Refunded Order"
    },
    {
      value: "wc_fully_refunded_order",
      label: "Fully Refunded Order"
    },
    {
      value: "wc_completed_order",
      label: "Completed Order"
    },
    {
      value: "wc_processing_order",
      label: "Processing Order"
    },
    {
      value: "wc_order_on_hold",
      label: "Order On-Hold"
    },
    {
      value: "wc_failed_order",
      label: "Failed Order"
    },
    {
      value: "wc_cancelled_order",
      label: "Cancelled Order"
    },
    {
      value: "wc_new_account",
      label: "New Account"
    }
  ];
  if (!focusIdx)
    return null;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(AttributesPanelWrapper, null, /* @__PURE__ */ React.createElement(Stack$1.Item, { fill: true }, /* @__PURE__ */ React.createElement(Collapse, { defaultActiveKey: ["0", "1"] }, /* @__PURE__ */ React.createElement(Collapse.Item, { name: "0", header: "Email Setting" }, /* @__PURE__ */ React.createElement(Space, { direction: "vertical" }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: "Subject",
      name: "subject",
      helpText: "Allow only Following Shortcodes Work: {{shop.name}},{{order_number}},{{customer.name}}",
      inline: true
    }
  ), /* @__PURE__ */ React.createElement(TextField, { label: "SubTitle", name: "subTitle", inline: true }), /* @__PURE__ */ React.createElement(
    SelectField,
    {
      label: "Email Type",
      name: "etype",
      options: types,
      inline: true
    }
  ), /* @__PURE__ */ React.createElement(
    InputWithUnitField,
    {
      label: "Width",
      name: `${focusIdx}.attributes.width`,
      inline: true
    }
  ), /* @__PURE__ */ React.createElement(
    InputWithUnitField,
    {
      label: "Breakpoint",
      helpText: "Allows you to control on which breakpoint the layout should go desktop/mobile.",
      name: `${focusIdx}.data.value.breakpoint`,
      inline: true
    }
  ))), /* @__PURE__ */ React.createElement(Collapse.Item, { name: "1", header: "Theme Setting" }, /* @__PURE__ */ React.createElement(Stack$1, { vertical: true, spacing: "tight" }, /* @__PURE__ */ React.createElement(Grid.Row, null, /* @__PURE__ */ React.createElement(Grid.Col, { span: 11 }, /* @__PURE__ */ React.createElement(FontFamily$1, null)), /* @__PURE__ */ React.createElement(Grid.Col, { offset: 1, span: 11 }, /* @__PURE__ */ React.createElement(
    InputWithUnitField,
    {
      label: "Font size",
      name: `${focusIdx}.data.value.font-size`
    }
  ))), /* @__PURE__ */ React.createElement(Grid.Row, null, /* @__PURE__ */ React.createElement(Grid.Col, { span: 11 }, /* @__PURE__ */ React.createElement(
    ColorPickerField,
    {
      label: "Text color",
      name: `${focusIdx}.data.value.text-color`
    }
  )), /* @__PURE__ */ React.createElement(Grid.Col, { offset: 1, span: 11 }, /* @__PURE__ */ React.createElement(
    InputWithUnitField,
    {
      label: "Line height",
      unitOptions: "percent",
      name: `${focusIdx}.data.value.line-height`
    }
  ))), /* @__PURE__ */ React.createElement(Grid.Row, null, /* @__PURE__ */ React.createElement(Grid.Col, { span: 11 }, /* @__PURE__ */ React.createElement(
    ColorPickerField,
    {
      label: "Background",
      name: `${focusIdx}.attributes.background-color`
    }
  )), /* @__PURE__ */ React.createElement(Grid.Col, { offset: 1, span: 11 }, /* @__PURE__ */ React.createElement(
    ColorPickerField,
    {
      label: "Content background",
      name: `${focusIdx}.data.value.content-background-color`
    }
  ))), /* @__PURE__ */ React.createElement(
    TextAreaField,
    {
      label: "Style",
      name: `${focusIdx}.data.value.user-style.content`
    }
  ), /* @__PURE__ */ React.createElement(AddFont, null)))))));
}
const arco = "";
const email = createSliceState({
  name: "email",
  initialState: null,
  reducers: {
    set: (state, action) => state
  },
  effects: {
    send: async (state, payload) => {
      await services.common.sendTestEmail(payload.data);
      payload.success();
    }
  }
});
var map;
try {
  map = Map;
} catch (_) {
}
var set;
try {
  set = Set;
} catch (_) {
}
function baseClone(src, circulars, clones) {
  if (!src || typeof src !== "object" || typeof src === "function") {
    return src;
  }
  if (src.nodeType && "cloneNode" in src) {
    return src.cloneNode(true);
  }
  if (src instanceof Date) {
    return new Date(src.getTime());
  }
  if (src instanceof RegExp) {
    return new RegExp(src);
  }
  if (Array.isArray(src)) {
    return src.map(clone);
  }
  if (map && src instanceof map) {
    return new Map(Array.from(src.entries()));
  }
  if (set && src instanceof set) {
    return new Set(Array.from(src.values()));
  }
  if (src instanceof Object) {
    circulars.push(src);
    var obj = Object.create(src);
    clones.push(obj);
    for (var key in src) {
      var idx = circulars.findIndex(function(i) {
        return i === src[key];
      });
      obj[key] = idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones);
    }
    return obj;
  }
  return src;
}
function clone(src) {
  return baseClone(src, [], []);
}
const toString$4 = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val)
    return "NaN";
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : "" + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false)
    return "" + val;
  const typeOf = typeof val;
  if (typeOf === "number")
    return printNumber(val);
  if (typeOf === "string")
    return quoteStrings ? `"${val}"` : val;
  if (typeOf === "function")
    return "[Function " + (val.name || "anonymous") + "]";
  if (typeOf === "symbol")
    return symbolToString.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  const tag = toString$4.call(val).slice(8, -1);
  if (tag === "Date")
    return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
  if (tag === "Error" || val instanceof Error)
    return "[" + errorToString.call(val) + "]";
  if (tag === "RegExp")
    return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null)
    return result;
  return JSON.stringify(value, function(key, value2) {
    let result2 = printSimpleValue(this[key], quoteStrings);
    if (result2 !== null)
      return result2;
    return value2;
  }, 2);
}
let mixed = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path,
    type: type2,
    value,
    originalValue
  }) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg = `${path} must be a \`${type2}\` type, but the final value was: \`${printValue(value, true)}\`` + (isCast ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : ".");
    if (value === null) {
      msg += `
 If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
    }
    return msg;
  },
  defined: "${path} must be defined"
};
let string = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
};
let number = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
};
let date = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
};
let boolean = {
  isValue: "${path} field must be ${value}"
};
let object = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
};
let array = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});
const isSchema = (obj) => obj && obj.__isYupSchema__;
class Condition {
  constructor(refs, options) {
    this.fn = void 0;
    this.refs = refs;
    this.refs = refs;
    if (typeof options === "function") {
      this.fn = options;
      return;
    }
    if (!has_1(options, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!options.then && !options.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is,
      then,
      otherwise
    } = options;
    let check = typeof is === "function" ? is : (...values) => values.every((value) => value === is);
    this.fn = function(...args) {
      let options2 = args.pop();
      let schema2 = args.pop();
      let branch = check(...args) ? then : otherwise;
      if (!branch)
        return void 0;
      if (typeof branch === "function")
        return branch(schema2);
      return schema2.concat(branch.resolve(options2));
    };
  }
  resolve(base, options) {
    let values = this.refs.map((ref2) => ref2.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
    let schema2 = this.fn.apply(base, values.concat(base, options));
    if (schema2 === void 0 || schema2 === base)
      return base;
    if (!isSchema(schema2))
      throw new TypeError("conditions must return a schema object");
    return schema2.resolve(options);
  }
}
function toArray(value) {
  return value == null ? [] : [].concat(value);
}
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || "this";
    if (path !== params.path)
      params = _extends$3({}, params, {
        path
      });
    if (typeof message === "string")
      return message.replace(strReg, (_, key) => printValue(params[key]));
    if (typeof message === "function")
      return message(params);
    return message;
  }
  static isError(err) {
    return err && err.name === "ValidationError";
  }
  constructor(errorOrErrors, value, field, type2) {
    super();
    this.value = void 0;
    this.path = void 0;
    this.type = void 0;
    this.errors = void 0;
    this.params = void 0;
    this.inner = void 0;
    this.name = "ValidationError";
    this.value = value;
    this.path = field;
    this.type = type2;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach((err) => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        this.inner = this.inner.concat(err.inner.length ? err.inner : err);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, ValidationError);
  }
}
const once = (cb) => {
  let fired = false;
  return (...args) => {
    if (fired)
      return;
    fired = true;
    cb(...args);
  };
};
function runTests(options, cb) {
  let {
    endEarly,
    tests,
    args,
    value,
    errors,
    sort,
    path
  } = options;
  let callback = once(cb);
  let count = tests.length;
  const nestedErrors = [];
  errors = errors ? errors : [];
  if (!count)
    return errors.length ? callback(new ValidationError(errors, value, path)) : callback(null, value);
  for (let i = 0; i < tests.length; i++) {
    const test2 = tests[i];
    test2(args, function finishTestRun(err) {
      if (err) {
        if (!ValidationError.isError(err)) {
          return callback(err, value);
        }
        if (endEarly) {
          err.value = value;
          return callback(err, value);
        }
        nestedErrors.push(err);
      }
      if (--count <= 0) {
        if (nestedErrors.length) {
          if (sort)
            nestedErrors.sort(sort);
          if (errors.length)
            nestedErrors.push(...errors);
          errors = nestedErrors;
        }
        if (errors.length) {
          callback(new ValidationError(errors, value, path), value);
          return;
        }
        callback(null, value);
      }
    });
  }
}
var baseFor = _baseFor, keys$1 = keys_1;
function baseForOwn$2(object2, iteratee) {
  return object2 && baseFor(object2, iteratee, keys$1);
}
var _baseForOwn = baseForOwn$2;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object2, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object2 == null) {
    return !length;
  }
  object2 = Object(object2);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object2[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object2)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object2, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$1 = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject$1(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys = keys_1;
function getMatchData$1(object2) {
  var result = keys(object2), length = result.length;
  while (length--) {
    var key = result[length], value = object2[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object2) {
    if (object2 == null) {
      return false;
    }
    return object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object2) {
    return object2 === source || baseIsMatch(object2, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
function baseHasIn$1(object2, key) {
  return object2 != null && key in Object(object2);
}
var _baseHasIn = baseHasIn$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object2, path) {
  return object2 != null && hasPath(object2, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object2) {
    var objValue = get(object2, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function baseProperty$1(key) {
  return function(object2) {
    return object2 == null ? void 0 : object2[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object2) {
    return baseGet(object2, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray = isArray_1, property = property_1;
function baseIteratee$2(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$2;
var baseAssignValue$1 = _baseAssignValue, baseForOwn$1 = _baseForOwn, baseIteratee$1 = _baseIteratee;
function mapValues(object2, iteratee) {
  var result = {};
  iteratee = baseIteratee$1(iteratee);
  baseForOwn$1(object2, function(value, key, object3) {
    baseAssignValue$1(result, key, iteratee(value, key, object3));
  });
  return result;
}
var mapValues_1 = mapValues;
function Cache(maxSize) {
  this._maxSize = maxSize;
  this.clear();
}
Cache.prototype.clear = function() {
  this._size = 0;
  this._values = /* @__PURE__ */ Object.create(null);
};
Cache.prototype.get = function(key) {
  return this._values[key];
};
Cache.prototype.set = function(key, value) {
  this._size >= this._maxSize && this.clear();
  if (!(key in this._values))
    this._size++;
  return this._values[key] = value;
};
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g, DIGIT_REGEX = /^\d+$/, LEAD_DIGIT_REGEX = /^\d/, SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/, MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE), setCache = new Cache(MAX_CACHE_SIZE), getCache = new Cache(MAX_CACHE_SIZE);
var propertyExpr = {
  Cache,
  split,
  normalizePath,
  setter: function(path) {
    var parts = normalizePath(path);
    return setCache.get(path) || setCache.set(path, function setter(obj, value) {
      var index = 0;
      var len = parts.length;
      var data = obj;
      while (index < len - 1) {
        var part = parts[index];
        if (part === "__proto__" || part === "constructor" || part === "prototype") {
          return obj;
        }
        data = data[parts[index++]];
      }
      data[parts[index]] = value;
    });
  },
  getter: function(path, safe) {
    var parts = normalizePath(path);
    return getCache.get(path) || getCache.set(path, function getter(data) {
      var index = 0, len = parts.length;
      while (index < len) {
        if (data != null || !safe)
          data = data[parts[index++]];
        else
          return;
      }
      return data;
    });
  },
  join: function(segments) {
    return segments.reduce(function(path, part) {
      return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
    }, "");
  },
  forEach: function(path, cb, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
  }
};
function normalizePath(path) {
  return pathCache.get(path) || pathCache.set(
    path,
    split(path).map(function(part) {
      return part.replace(CLEAN_QUOTES_REGEX, "$2");
    })
  );
}
function split(path) {
  return path.match(SPLIT_REGEX) || [""];
}
function forEach(parts, iter, thisArg) {
  var len = parts.length, part, idx, isArray2, isBracket;
  for (idx = 0; idx < len; idx++) {
    part = parts[idx];
    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"';
      }
      isBracket = isQuoted(part);
      isArray2 = !isBracket && /^\d+$/.test(part);
      iter.call(thisArg, part, isBracket, isArray2, idx, parts);
    }
  }
}
function isQuoted(str) {
  return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
}
function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
}
function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part);
}
function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
}
const prefixes = {
  context: "$",
  value: "."
};
class Reference {
  constructor(key, options = {}) {
    this.key = void 0;
    this.isContext = void 0;
    this.isValue = void 0;
    this.isSibling = void 0;
    this.path = void 0;
    this.getter = void 0;
    this.map = void 0;
    if (typeof key !== "string")
      throw new TypeError("ref must be a string, got: " + key);
    this.key = key.trim();
    if (key === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && propertyExpr.getter(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter)
      result = this.getter(result || {});
    if (this.map)
      result = this.map(result);
    return result;
  }
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}
Reference.prototype.__isYupRef = true;
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function createValidation(config) {
  function validate(_ref, cb) {
    let {
      value,
      path = "",
      label,
      options,
      originalValue,
      sync
    } = _ref, rest = _objectWithoutPropertiesLoose(_ref, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name,
      test: test2,
      params,
      message
    } = config;
    let {
      parent,
      context
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      const nextParams = mapValues_1(_extends$2({
        value,
        originalValue,
        label,
        path: overrides.path || path
      }, params, overrides.params), resolve);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
      error.params = nextParams;
      return error;
    }
    let ctx = _extends$2({
      path,
      parent,
      type: name,
      createError,
      resolve,
      options,
      originalValue
    }, rest);
    if (!sync) {
      try {
        Promise.resolve(test2.call(ctx, value, ctx)).then((validOrError) => {
          if (ValidationError.isError(validOrError))
            cb(validOrError);
          else if (!validOrError)
            cb(createError());
          else
            cb(null, validOrError);
        }).catch(cb);
      } catch (err) {
        cb(err);
      }
      return;
    }
    let result;
    try {
      var _ref2;
      result = test2.call(ctx, value, ctx);
      if (typeof ((_ref2 = result) == null ? void 0 : _ref2.then) === "function") {
        throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
      }
    } catch (err) {
      cb(err);
      return;
    }
    if (ValidationError.isError(result))
      cb(result);
    else if (!result)
      cb(createError());
    else
      cb(null, result);
  }
  validate.OPTIONS = config;
  return validate;
}
let trim = (part) => part.substr(0, part.length - 1).substr(1);
function getIn(schema2, path, value, context = value) {
  let parent, lastPart, lastPartDebug;
  if (!path)
    return {
      parent,
      parentPath: path,
      schema: schema2
    };
  propertyExpr.forEach(path, (_part, isBracket, isArray2) => {
    let part = isBracket ? trim(_part) : _part;
    schema2 = schema2.resolve({
      context,
      parent,
      value
    });
    if (schema2.innerType) {
      let idx = isArray2 ? parseInt(part, 10) : 0;
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema2 = schema2.innerType;
    }
    if (!isArray2) {
      if (!schema2.fields || !schema2.fields[part])
        throw new Error(`The schema does not contain the path: ${path}. (failed at: ${lastPartDebug} which is a type: "${schema2._type}")`);
      parent = value;
      value = value && value[part];
      schema2 = schema2.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
  });
  return {
    schema: schema2,
    parent,
    parentPath: lastPart
  };
}
class ReferenceSet {
  constructor() {
    this.list = void 0;
    this.refs = void 0;
    this.list = /* @__PURE__ */ new Set();
    this.refs = /* @__PURE__ */ new Map();
  }
  get size() {
    return this.list.size + this.refs.size;
  }
  describe() {
    const description = [];
    for (const item of this.list)
      description.push(item);
    for (const [, ref2] of this.refs)
      description.push(ref2.describe());
    return description;
  }
  toArray() {
    return Array.from(this.list).concat(Array.from(this.refs.values()));
  }
  resolveAll(resolve) {
    return this.toArray().reduce((acc, e) => acc.concat(Reference.isRef(e) ? resolve(e) : e), []);
  }
  add(value) {
    Reference.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
  }
  delete(value) {
    Reference.isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
  }
  clone() {
    const next = new ReferenceSet();
    next.list = new Set(this.list);
    next.refs = new Map(this.refs);
    return next;
  }
  merge(newItems, removeItems) {
    const next = this.clone();
    newItems.list.forEach((value) => next.add(value));
    newItems.refs.forEach((value) => next.add(value));
    removeItems.list.forEach((value) => next.delete(value));
    removeItems.refs.forEach((value) => next.delete(value));
    return next;
  }
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
class BaseSchema {
  constructor(options) {
    this.deps = [];
    this.tests = void 0;
    this.transforms = void 0;
    this.conditions = [];
    this._mutate = void 0;
    this._typeError = void 0;
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = /* @__PURE__ */ Object.create(null);
    this.spec = void 0;
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = (options == null ? void 0 : options.type) || "mixed";
    this.spec = _extends$1({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      nullable: false,
      presence: "optional"
    }, options == null ? void 0 : options.spec);
  }
  get _type() {
    return this.type;
  }
  _typeCheck(_value) {
    return true;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec)
        Object.assign(this.spec, spec);
      return this;
    }
    const next = Object.create(Object.getPrototypeOf(this));
    next.type = this.type;
    next._typeError = this._typeError;
    next._whitelistError = this._whitelistError;
    next._blacklistError = this._blacklistError;
    next._whitelist = this._whitelist.clone();
    next._blacklist = this._blacklist.clone();
    next.exclusiveTests = _extends$1({}, this.exclusiveTests);
    next.deps = [...this.deps];
    next.conditions = [...this.conditions];
    next.tests = [...this.tests];
    next.transforms = [...this.transforms];
    next.spec = clone(_extends$1({}, this.spec, spec));
    return next;
  }
  label(label) {
    let next = this.clone();
    next.spec.label = label;
    return next;
  }
  meta(...args) {
    if (args.length === 0)
      return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn(this);
    this._mutate = before;
    return result;
  }
  concat(schema2) {
    if (!schema2 || schema2 === this)
      return this;
    if (schema2.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema2.type}`);
    let base = this;
    let combined = schema2.clone();
    const mergedSpec = _extends$1({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined._typeError || (combined._typeError = base._typeError);
    combined._whitelistError || (combined._whitelistError = base._whitelistError);
    combined._blacklistError || (combined._blacklistError = base._blacklistError);
    combined._whitelist = base._whitelist.merge(schema2._whitelist, schema2._blacklist);
    combined._blacklist = base._blacklist.merge(schema2._blacklist, schema2._whitelist);
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;
    combined.withMutation((next) => {
      schema2.tests.forEach((fn) => {
        next.test(fn.OPTIONS);
      });
    });
    combined.transforms = [...base.transforms, ...combined.transforms];
    return combined;
  }
  isType(v) {
    if (this.spec.nullable && v === null)
      return true;
    return this._typeCheck(v);
  }
  resolve(options) {
    let schema2 = this;
    if (schema2.conditions.length) {
      let conditions = schema2.conditions;
      schema2 = schema2.clone();
      schema2.conditions = [];
      schema2 = conditions.reduce((schema3, condition) => condition.resolve(schema3, options), schema2);
      schema2 = schema2.resolve(options);
    }
    return schema2;
  }
  cast(value, options = {}) {
    let resolvedSchema = this.resolve(_extends$1({
      value
    }, options));
    let result = resolvedSchema._cast(value, options);
    if (value !== void 0 && options.assert !== false && resolvedSchema.isType(result) !== true) {
      let formattedValue = printValue(value);
      let formattedResult = printValue(result);
      throw new TypeError(`The value of ${options.path || "field"} could not be cast to a value that satisfies the schema type: "${resolvedSchema._type}". 

attempted value: ${formattedValue} 
` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ""));
    }
    return result;
  }
  _cast(rawValue2, _options) {
    let value = rawValue2 === void 0 ? rawValue2 : this.transforms.reduce((value2, fn) => fn.call(this, value2, rawValue2, this), rawValue2);
    if (value === void 0) {
      value = this.getDefault();
    }
    return value;
  }
  _validate(_value, options = {}, cb) {
    let {
      sync,
      path,
      from = [],
      originalValue = _value,
      strict = this.spec.strict,
      abortEarly = this.spec.abortEarly
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, _extends$1({
        assert: false
      }, options));
    }
    let args = {
      value,
      path,
      options,
      originalValue,
      schema: this,
      label: this.spec.label,
      sync,
      from
    };
    let initialTests = [];
    if (this._typeError)
      initialTests.push(this._typeError);
    let finalTests = [];
    if (this._whitelistError)
      finalTests.push(this._whitelistError);
    if (this._blacklistError)
      finalTests.push(this._blacklistError);
    runTests({
      args,
      value,
      path,
      sync,
      tests: initialTests,
      endEarly: abortEarly
    }, (err) => {
      if (err)
        return void cb(err, value);
      runTests({
        tests: this.tests.concat(finalTests),
        args,
        path,
        sync,
        value,
        endEarly: abortEarly
      }, cb);
    });
  }
  validate(value, options, maybeCb) {
    let schema2 = this.resolve(_extends$1({}, options, {
      value
    }));
    return typeof maybeCb === "function" ? schema2._validate(value, options, maybeCb) : new Promise((resolve, reject) => schema2._validate(value, options, (err, value2) => {
      if (err)
        reject(err);
      else
        resolve(value2);
    }));
  }
  validateSync(value, options) {
    let schema2 = this.resolve(_extends$1({}, options, {
      value
    }));
    let result;
    schema2._validate(value, _extends$1({}, options, {
      sync: true
    }), (err, value2) => {
      if (err)
        throw err;
      result = value2;
    });
    return result;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, (err) => {
      if (ValidationError.isError(err))
        return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err))
        return false;
      throw err;
    }
  }
  _getDefault() {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === "function" ? defaultValue.call(this) : clone(defaultValue);
  }
  getDefault(options) {
    let schema2 = this.resolve(options || {});
    return schema2._getDefault();
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next = this.clone({
      default: def
    });
    return next;
  }
  strict(isStrict = true) {
    let next = this.clone();
    next.spec.strict = isStrict;
    return next;
  }
  _isPresent(value) {
    return value != null;
  }
  defined(message = mixed.defined) {
    return this.test({
      message,
      name: "defined",
      exclusive: true,
      test(value) {
        return value !== void 0;
      }
    });
  }
  required(message = mixed.required) {
    return this.clone({
      presence: "required"
    }).withMutation((s) => s.test({
      message,
      name: "required",
      exclusive: true,
      test(value) {
        return this.schema._isPresent(value);
      }
    }));
  }
  notRequired() {
    let next = this.clone({
      presence: "optional"
    });
    next.tests = next.tests.filter((test2) => test2.OPTIONS.name !== "required");
    return next;
  }
  nullable(isNullable = true) {
    let next = this.clone({
      nullable: isNullable !== false
    });
    return next;
  }
  transform(fn) {
    let next = this.clone();
    next.transforms.push(fn);
    return next;
  }
  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === "function") {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === void 0)
      opts.message = mixed.default;
    if (typeof opts.test !== "function")
      throw new TypeError("`test` is a required parameters");
    let next = this.clone();
    let validate = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    }
    if (opts.name)
      next.exclusiveTests[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter((fn) => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive)
          return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test)
          return false;
      }
      return true;
    });
    next.tests.push(validate);
    return next;
  }
  when(keys2, options) {
    if (!Array.isArray(keys2) && typeof keys2 !== "string") {
      options = keys2;
      keys2 = ".";
    }
    let next = this.clone();
    let deps = toArray(keys2).map((key) => new Reference(key));
    deps.forEach((dep) => {
      if (dep.isSibling)
        next.deps.push(dep.key);
    });
    next.conditions.push(new Condition(deps, options));
    return next;
  }
  typeError(message) {
    let next = this.clone();
    next._typeError = createValidation({
      message,
      name: "typeError",
      test(value) {
        if (value !== void 0 && !this.schema.isType(value))
          return this.createError({
            params: {
              type: this.schema._type
            }
          });
        return true;
      }
    });
    return next;
  }
  oneOf(enums, message = mixed.oneOf) {
    let next = this.clone();
    enums.forEach((val) => {
      next._whitelist.add(val);
      next._blacklist.delete(val);
    });
    next._whitelistError = createValidation({
      message,
      name: "oneOf",
      test(value) {
        if (value === void 0)
          return true;
        let valids = this.schema._whitelist;
        let resolved = valids.resolveAll(this.resolve);
        return resolved.includes(value) ? true : this.createError({
          params: {
            values: valids.toArray().join(", "),
            resolved
          }
        });
      }
    });
    return next;
  }
  notOneOf(enums, message = mixed.notOneOf) {
    let next = this.clone();
    enums.forEach((val) => {
      next._blacklist.add(val);
      next._whitelist.delete(val);
    });
    next._blacklistError = createValidation({
      message,
      name: "notOneOf",
      test(value) {
        let invalids = this.schema._blacklist;
        let resolved = invalids.resolveAll(this.resolve);
        if (resolved.includes(value))
          return this.createError({
            params: {
              values: invalids.toArray().join(", "),
              resolved
            }
          });
        return true;
      }
    });
    return next;
  }
  strip(strip = true) {
    let next = this.clone();
    next.spec.strip = strip;
    return next;
  }
  describe() {
    const next = this.clone();
    const {
      label,
      meta
    } = next.spec;
    const description = {
      meta,
      label,
      type: next.type,
      oneOf: next._whitelist.describe(),
      notOneOf: next._blacklist.describe(),
      tests: next.tests.map((fn) => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n, idx, list2) => list2.findIndex((c) => c.name === n.name) === idx)
    };
    return description;
  }
}
BaseSchema.prototype.__isYupSchema__ = true;
for (const method of ["validate", "validateSync"])
  BaseSchema.prototype[`${method}At`] = function(path, value, options = {}) {
    const {
      parent,
      parentPath,
      schema: schema2
    } = getIn(this, path, value, options.context);
    return schema2[method](parent && parent[parentPath], _extends$1({}, options, {
      parent,
      path
    }));
  };
for (const alias of ["equals", "is"])
  BaseSchema.prototype[alias] = BaseSchema.prototype.oneOf;
for (const alias of ["not", "nope"])
  BaseSchema.prototype[alias] = BaseSchema.prototype.notOneOf;
BaseSchema.prototype.optional = BaseSchema.prototype.notRequired;
const Mixed = BaseSchema;
Mixed.prototype;
const isAbsent = (value) => value == null;
let rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
let rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = (value) => isAbsent(value) || value === value.trim();
let objStringTag = {}.toString();
function create$1() {
  return new StringSchema();
}
class StringSchema extends BaseSchema {
  constructor() {
    super({
      type: "string"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (this.isType(value))
          return value;
        if (Array.isArray(value))
          return value;
        const strValue = value != null && value.toString ? value.toString() : value;
        if (strValue === objStringTag)
          return value;
        return strValue;
      });
    });
  }
  _typeCheck(value) {
    if (value instanceof String)
      value = value.valueOf();
    return typeof value === "string";
  }
  _isPresent(value) {
    return super._isPresent(value) && !!value.length;
  }
  length(length, message = string.length) {
    return this.test({
      message,
      name: "length",
      exclusive: true,
      params: {
        length
      },
      test(value) {
        return isAbsent(value) || value.length === this.resolve(length);
      }
    });
  }
  min(min, message = string.min) {
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value.length >= this.resolve(min);
      }
    });
  }
  max(max2, message = string.max) {
    return this.test({
      name: "max",
      exclusive: true,
      message,
      params: {
        max: max2
      },
      test(value) {
        return isAbsent(value) || value.length <= this.resolve(max2);
      }
    });
  }
  matches(regex, options) {
    let excludeEmptyString = false;
    let message;
    let name;
    if (options) {
      if (typeof options === "object") {
        ({
          excludeEmptyString = false,
          message,
          name
        } = options);
      } else {
        message = options;
      }
    }
    return this.test({
      name: name || "matches",
      message: message || string.matches,
      params: {
        regex
      },
      test: (value) => isAbsent(value) || value === "" && excludeEmptyString || value.search(regex) !== -1
    });
  }
  email(message = string.email) {
    return this.matches(rEmail, {
      name: "email",
      message,
      excludeEmptyString: true
    });
  }
  url(message = string.url) {
    return this.matches(rUrl, {
      name: "url",
      message,
      excludeEmptyString: true
    });
  }
  uuid(message = string.uuid) {
    return this.matches(rUUID, {
      name: "uuid",
      message,
      excludeEmptyString: false
    });
  }
  ensure() {
    return this.default("").transform((val) => val === null ? "" : val);
  }
  trim(message = string.trim) {
    return this.transform((val) => val != null ? val.trim() : val).test({
      message,
      name: "trim",
      test: isTrimmed
    });
  }
  lowercase(message = string.lowercase) {
    return this.transform((value) => !isAbsent(value) ? value.toLowerCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      test: (value) => isAbsent(value) || value === value.toLowerCase()
    });
  }
  uppercase(message = string.uppercase) {
    return this.transform((value) => !isAbsent(value) ? value.toUpperCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      test: (value) => isAbsent(value) || value === value.toUpperCase()
    });
  }
}
create$1.prototype = StringSchema.prototype;
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date2) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11], minutesOffset = 0, timestamp, struct;
  if (struct = isoReg.exec(date2)) {
    for (var i = 0, k; k = numericKeys[i]; ++i)
      struct[k] = +struct[k] || 0;
    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1;
    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;
    if ((struct[8] === void 0 || struct[8] === "") && (struct[9] === void 0 || struct[9] === ""))
      timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);
    else {
      if (struct[8] !== "Z" && struct[9] !== void 0) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === "+")
          minutesOffset = 0 - minutesOffset;
      }
      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else
    timestamp = Date.parse ? Date.parse(date2) : NaN;
  return timestamp;
}
let invalidDate = new Date("");
let isDate = (obj) => Object.prototype.toString.call(obj) === "[object Date]";
class DateSchema extends BaseSchema {
  constructor() {
    super({
      type: "date"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (this.isType(value))
          return value;
        value = parseIsoDate(value);
        return !isNaN(value) ? new Date(value) : invalidDate;
      });
    });
  }
  _typeCheck(v) {
    return isDate(v) && !isNaN(v.getTime());
  }
  prepareParam(ref2, name) {
    let param;
    if (!Reference.isRef(ref2)) {
      let cast = this.cast(ref2);
      if (!this._typeCheck(cast))
        throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref2;
    }
    return param;
  }
  min(min, message = date.min) {
    let limit2 = this.prepareParam(min, "min");
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value >= this.resolve(limit2);
      }
    });
  }
  max(max2, message = date.max) {
    let limit2 = this.prepareParam(max2, "max");
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max: max2
      },
      test(value) {
        return isAbsent(value) || value <= this.resolve(limit2);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
DateSchema.prototype;
function arrayReduce$1(array2, iteratee, accumulator, initAccum) {
  var index = -1, length = array2 == null ? 0 : array2.length;
  if (initAccum && length) {
    accumulator = array2[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array2[index], index, array2);
  }
  return accumulator;
}
var _arrayReduce = arrayReduce$1;
function basePropertyOf$1(object2) {
  return function(key) {
    return object2 == null ? void 0 : object2[key];
  };
}
var _basePropertyOf = basePropertyOf$1;
var basePropertyOf = _basePropertyOf;
var deburredLetters = {
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\xC3": "A",
  "\xC4": "A",
  "\xC5": "A",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\xE3": "a",
  "\xE4": "a",
  "\xE5": "a",
  "\xC7": "C",
  "\xE7": "c",
  "\xD0": "D",
  "\xF0": "d",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\xCB": "E",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\xEB": "e",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\xCF": "I",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\xEF": "i",
  "\xD1": "N",
  "\xF1": "n",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\xD5": "O",
  "\xD6": "O",
  "\xD8": "O",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\xF5": "o",
  "\xF6": "o",
  "\xF8": "o",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\xDC": "U",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\xFC": "u",
  "\xDD": "Y",
  "\xFD": "y",
  "\xFF": "y",
  "\xC6": "Ae",
  "\xE6": "ae",
  "\xDE": "Th",
  "\xFE": "th",
  "\xDF": "ss",
  "\u0100": "A",
  "\u0102": "A",
  "\u0104": "A",
  "\u0101": "a",
  "\u0103": "a",
  "\u0105": "a",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\u010E": "D",
  "\u0110": "D",
  "\u010F": "d",
  "\u0111": "d",
  "\u0112": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\u0118": "E",
  "\u011A": "E",
  "\u0113": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\u0119": "e",
  "\u011B": "e",
  "\u011C": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u0122": "G",
  "\u011D": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u0123": "g",
  "\u0124": "H",
  "\u0126": "H",
  "\u0125": "h",
  "\u0127": "h",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u012E": "I",
  "\u0130": "I",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\u012F": "i",
  "\u0131": "i",
  "\u0134": "J",
  "\u0135": "j",
  "\u0136": "K",
  "\u0137": "k",
  "\u0138": "k",
  "\u0139": "L",
  "\u013B": "L",
  "\u013D": "L",
  "\u013F": "L",
  "\u0141": "L",
  "\u013A": "l",
  "\u013C": "l",
  "\u013E": "l",
  "\u0140": "l",
  "\u0142": "l",
  "\u0143": "N",
  "\u0145": "N",
  "\u0147": "N",
  "\u014A": "N",
  "\u0144": "n",
  "\u0146": "n",
  "\u0148": "n",
  "\u014B": "n",
  "\u014C": "O",
  "\u014E": "O",
  "\u0150": "O",
  "\u014D": "o",
  "\u014F": "o",
  "\u0151": "o",
  "\u0154": "R",
  "\u0156": "R",
  "\u0158": "R",
  "\u0155": "r",
  "\u0157": "r",
  "\u0159": "r",
  "\u015A": "S",
  "\u015C": "S",
  "\u015E": "S",
  "\u0160": "S",
  "\u015B": "s",
  "\u015D": "s",
  "\u015F": "s",
  "\u0161": "s",
  "\u0162": "T",
  "\u0164": "T",
  "\u0166": "T",
  "\u0163": "t",
  "\u0165": "t",
  "\u0167": "t",
  "\u0168": "U",
  "\u016A": "U",
  "\u016C": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u0172": "U",
  "\u0169": "u",
  "\u016B": "u",
  "\u016D": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u0173": "u",
  "\u0174": "W",
  "\u0175": "w",
  "\u0176": "Y",
  "\u0177": "y",
  "\u0178": "Y",
  "\u0179": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u017A": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0152": "Oe",
  "\u0153": "oe",
  "\u0149": "'n",
  "\u017F": "s"
};
var deburrLetter$1 = basePropertyOf(deburredLetters);
var _deburrLetter = deburrLetter$1;
var deburrLetter = _deburrLetter, toString$3 = toString_1;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange$3 = "\\u0300-\\u036f", reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$3 = "\\u20d0-\\u20ff", rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3;
var rsCombo$2 = "[" + rsComboRange$3 + "]";
var reComboMark = RegExp(rsCombo$2, "g");
function deburr$1(string2) {
  string2 = toString$3(string2);
  return string2 && string2.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
var deburr_1 = deburr$1;
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords$1(string2) {
  return string2.match(reAsciiWord) || [];
}
var _asciiWords = asciiWords$1;
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord$1(string2) {
  return reHasUnicodeWord.test(string2);
}
var _hasUnicodeWord = hasUnicodeWord$1;
var rsAstralRange$2 = "\\ud800-\\udfff", rsComboMarksRange$2 = "\\u0300-\\u036f", reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$2 = "\\u20d0-\\u20ff", rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange$2 = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos$1 = "['\u2019]", rsBreak = "[" + rsBreakRange + "]", rsCombo$1 = "[" + rsComboRange$2 + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz$1 = "\\ud83c[\\udffb-\\udfff]", rsModifier$1 = "(?:" + rsCombo$1 + "|" + rsFitz$1 + ")", rsNonAstral$1 = "[^" + rsAstralRange$2 + "]", rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ$2 = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod$1 = rsModifier$1 + "?", rsOptVar$1 = "[" + rsVarRange$2 + "]?", rsOptJoin$1 = "(?:" + rsZWJ$2 + "(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsOptVar$1 + reOptMod$1 + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1, rsEmoji = "(?:" + [rsDingbat, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsSeq$1;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords$1(string2) {
  return string2.match(reUnicodeWord) || [];
}
var _unicodeWords = unicodeWords$1;
var asciiWords = _asciiWords, hasUnicodeWord = _hasUnicodeWord, toString$2 = toString_1, unicodeWords = _unicodeWords;
function words$1(string2, pattern, guard) {
  string2 = toString$2(string2);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string2) ? unicodeWords(string2) : asciiWords(string2);
  }
  return string2.match(pattern) || [];
}
var words_1 = words$1;
var arrayReduce = _arrayReduce, deburr = deburr_1, words = words_1;
var rsApos = "['\u2019]";
var reApos = RegExp(rsApos, "g");
function createCompounder$2(callback) {
  return function(string2) {
    return arrayReduce(words(deburr(string2).replace(reApos, "")), callback, "");
  };
}
var _createCompounder = createCompounder$2;
var createCompounder$1 = _createCompounder;
var snakeCase = createCompounder$1(function(result, word, index) {
  return result + (index ? "_" : "") + word.toLowerCase();
});
var snakeCase_1 = snakeCase;
var baseSlice = _baseSlice;
function castSlice$1(array2, start, end) {
  var length = array2.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array2 : baseSlice(array2, start, end);
}
var _castSlice = castSlice$1;
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode$2(string2) {
  return reHasUnicode.test(string2);
}
var _hasUnicode = hasUnicode$2;
function asciiToArray$1(string2) {
  return string2.split("");
}
var _asciiToArray = asciiToArray$1;
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray$1(string2) {
  return string2.match(reUnicode) || [];
}
var _unicodeToArray = unicodeToArray$1;
var asciiToArray = _asciiToArray, hasUnicode$1 = _hasUnicode, unicodeToArray = _unicodeToArray;
function stringToArray$1(string2) {
  return hasUnicode$1(string2) ? unicodeToArray(string2) : asciiToArray(string2);
}
var _stringToArray = stringToArray$1;
var castSlice = _castSlice, hasUnicode = _hasUnicode, stringToArray = _stringToArray, toString$1 = toString_1;
function createCaseFirst$1(methodName) {
  return function(string2) {
    string2 = toString$1(string2);
    var strSymbols = hasUnicode(string2) ? stringToArray(string2) : void 0;
    var chr = strSymbols ? strSymbols[0] : string2.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string2.slice(1);
    return chr[methodName]() + trailing;
  };
}
var _createCaseFirst = createCaseFirst$1;
var createCaseFirst = _createCaseFirst;
var upperFirst$1 = createCaseFirst("toUpperCase");
var upperFirst_1 = upperFirst$1;
var toString = toString_1, upperFirst = upperFirst_1;
function capitalize$1(string2) {
  return upperFirst(toString(string2).toLowerCase());
}
var capitalize_1 = capitalize$1;
var capitalize = capitalize_1, createCompounder = _createCompounder;
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});
var camelCase_1 = camelCase;
var baseAssignValue = _baseAssignValue, baseForOwn = _baseForOwn, baseIteratee = _baseIteratee;
function mapKeys(object2, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);
  baseForOwn(object2, function(value, key, object3) {
    baseAssignValue(result, iteratee(value, key, object3), value);
  });
  return result;
}
var mapKeys_1 = mapKeys;
var toposort$1 = { exports: {} };
toposort$1.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges);
};
toposort$1.exports.array = toposort;
function toposort(nodes, edges) {
  var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }
  });
  while (i--) {
    if (!visited[i])
      visit(nodes[i], i, /* @__PURE__ */ new Set());
  }
  return sorted;
  function visit(node, i2, predecessors) {
    if (predecessors.has(node)) {
      var nodeRep;
      try {
        nodeRep = ", node was:" + JSON.stringify(node);
      } catch (e) {
        nodeRep = "";
      }
      throw new Error("Cyclic dependency" + nodeRep);
    }
    if (!nodesHash.has(node)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node));
    }
    if (visited[i2])
      return;
    visited[i2] = true;
    var outgoing = outgoingEdges.get(node) || /* @__PURE__ */ new Set();
    outgoing = Array.from(outgoing);
    if (i2 = outgoing.length) {
      predecessors.add(node);
      do {
        var child = outgoing[--i2];
        visit(child, nodesHash.get(child), predecessors);
      } while (i2);
      predecessors.delete(node);
    }
    sorted[--cursor] = node;
  }
}
function uniqueNodes(arr) {
  var res = /* @__PURE__ */ new Set();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    res.add(edge[0]);
    res.add(edge[1]);
  }
  return Array.from(res);
}
function makeOutgoingEdges(arr) {
  var edges = /* @__PURE__ */ new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    if (!edges.has(edge[0]))
      edges.set(edge[0], /* @__PURE__ */ new Set());
    if (!edges.has(edge[1]))
      edges.set(edge[1], /* @__PURE__ */ new Set());
    edges.get(edge[0]).add(edge[1]);
  }
  return edges;
}
function makeNodesHash(arr) {
  var res = /* @__PURE__ */ new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    res.set(arr[i], i);
  }
  return res;
}
function sortFields(fields, excludedEdges = []) {
  let edges = [];
  let nodes = /* @__PURE__ */ new Set();
  let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`));
  function addNode(depPath, key) {
    let node = propertyExpr.split(depPath)[0];
    nodes.add(node);
    if (!excludes.has(`${key}-${node}`))
      edges.push([key, node]);
  }
  for (const key in fields)
    if (has_1(fields, key)) {
      let value = fields[key];
      nodes.add(key);
      if (Reference.isRef(value) && value.isSibling)
        addNode(value.path, key);
      else if (isSchema(value) && "deps" in value)
        value.deps.forEach((path) => addNode(path, key));
    }
  return toposort$1.exports.array(Array.from(nodes), edges).reverse();
}
function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii) => {
    var _err$path;
    if (((_err$path = err.path) == null ? void 0 : _err$path.indexOf(key)) !== -1) {
      idx = ii;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(keys2) {
  return (a, b) => {
    return findIndex(keys2, a) - findIndex(keys2, b);
  };
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
let isObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]";
function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter((key) => known.indexOf(key) === -1);
}
const defaultSort = sortByKeyOrder([]);
class ObjectSchema extends BaseSchema {
  constructor(spec) {
    super({
      type: "object"
    });
    this.fields = /* @__PURE__ */ Object.create(null);
    this._sortErrors = defaultSort;
    this._nodes = [];
    this._excludedEdges = [];
    this.withMutation(() => {
      this.transform(function coerce(value) {
        if (typeof value === "string") {
          try {
            value = JSON.parse(value);
          } catch (err) {
            value = null;
          }
        }
        if (this.isType(value))
          return value;
        return null;
      });
      if (spec) {
        this.shape(spec);
      }
    });
  }
  _typeCheck(value) {
    return isObject(value) || typeof value === "function";
  }
  _cast(_value, options = {}) {
    var _options$stripUnknown;
    let value = super._cast(_value, options);
    if (value === void 0)
      return this.getDefault();
    if (!this._typeCheck(value))
      return value;
    let fields = this.fields;
    let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
    let props = this._nodes.concat(Object.keys(value).filter((v) => this._nodes.indexOf(v) === -1));
    let intermediateValue = {};
    let innerOptions = _extends({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    let isChanged = false;
    for (const prop of props) {
      let field = fields[prop];
      let exists = has_1(value, prop);
      if (field) {
        let fieldValue;
        let inputValue = value[prop];
        innerOptions.path = (options.path ? `${options.path}.` : "") + prop;
        field = field.resolve({
          value: inputValue,
          context: options.context,
          parent: intermediateValue
        });
        let fieldSpec = "spec" in field ? field.spec : void 0;
        let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
        if (fieldSpec == null ? void 0 : fieldSpec.strip) {
          isChanged = isChanged || prop in value;
          continue;
        }
        fieldValue = !options.__validating || !strict ? field.cast(value[prop], innerOptions) : value[prop];
        if (fieldValue !== void 0) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }
      if (intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }
    return isChanged ? intermediateValue : value;
  }
  _validate(_value, opts = {}, callback) {
    let errors = [];
    let {
      sync,
      from = [],
      originalValue = _value,
      abortEarly = this.spec.abortEarly,
      recursive = this.spec.recursive
    } = opts;
    from = [{
      schema: this,
      value: originalValue
    }, ...from];
    opts.__validating = true;
    opts.originalValue = originalValue;
    opts.from = from;
    super._validate(_value, opts, (err, value) => {
      if (err) {
        if (!ValidationError.isError(err) || abortEarly) {
          return void callback(err, value);
        }
        errors.push(err);
      }
      if (!recursive || !isObject(value)) {
        callback(errors[0] || null, value);
        return;
      }
      originalValue = originalValue || value;
      let tests = this._nodes.map((key) => (_, cb) => {
        let path = key.indexOf(".") === -1 ? (opts.path ? `${opts.path}.` : "") + key : `${opts.path || ""}["${key}"]`;
        let field = this.fields[key];
        if (field && "validate" in field) {
          field.validate(value[key], _extends({}, opts, {
            path,
            from,
            strict: true,
            parent: value,
            originalValue: originalValue[key]
          }), cb);
          return;
        }
        cb(null);
      });
      runTests({
        sync,
        tests,
        value,
        errors,
        endEarly: abortEarly,
        sort: this._sortErrors,
        path: opts.path
      }, callback);
    });
  }
  clone(spec) {
    const next = super.clone(spec);
    next.fields = _extends({}, this.fields);
    next._nodes = this._nodes;
    next._excludedEdges = this._excludedEdges;
    next._sortErrors = this._sortErrors;
    return next;
  }
  concat(schema2) {
    let next = super.concat(schema2);
    let nextFields = next.fields;
    for (let [field, schemaOrRef] of Object.entries(this.fields)) {
      const target = nextFields[field];
      if (target === void 0) {
        nextFields[field] = schemaOrRef;
      } else if (target instanceof BaseSchema && schemaOrRef instanceof BaseSchema) {
        nextFields[field] = schemaOrRef.concat(target);
      }
    }
    return next.withMutation(() => next.shape(nextFields, this._excludedEdges));
  }
  getDefaultFromShape() {
    let dft = {};
    this._nodes.forEach((key) => {
      const field = this.fields[key];
      dft[key] = "default" in field ? field.getDefault() : void 0;
    });
    return dft;
  }
  _getDefault() {
    if ("default" in this.spec) {
      return super._getDefault();
    }
    if (!this._nodes.length) {
      return void 0;
    }
    return this.getDefaultFromShape();
  }
  shape(additions, excludes = []) {
    let next = this.clone();
    let fields = Object.assign(next.fields, additions);
    next.fields = fields;
    next._sortErrors = sortByKeyOrder(Object.keys(fields));
    if (excludes.length) {
      if (!Array.isArray(excludes[0]))
        excludes = [excludes];
      next._excludedEdges = [...next._excludedEdges, ...excludes];
    }
    next._nodes = sortFields(fields, next._excludedEdges);
    return next;
  }
  pick(keys2) {
    const picked = {};
    for (const key of keys2) {
      if (this.fields[key])
        picked[key] = this.fields[key];
    }
    return this.clone().withMutation((next) => {
      next.fields = {};
      return next.shape(picked);
    });
  }
  omit(keys2) {
    const next = this.clone();
    const fields = next.fields;
    next.fields = {};
    for (const key of keys2) {
      delete fields[key];
    }
    return next.withMutation(() => next.shape(fields));
  }
  from(from, to, alias) {
    let fromGetter = propertyExpr.getter(from, true);
    return this.transform((obj) => {
      if (obj == null)
        return obj;
      let newObj = obj;
      if (has_1(obj, from)) {
        newObj = _extends({}, obj);
        if (!alias)
          delete newObj[from];
        newObj[to] = fromGetter(obj);
      }
      return newObj;
    });
  }
  noUnknown(noAllow = true, message = object.noUnknown) {
    if (typeof noAllow === "string") {
      message = noAllow;
      noAllow = true;
    }
    let next = this.test({
      name: "noUnknown",
      exclusive: true,
      message,
      test(value) {
        if (value == null)
          return true;
        const unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(", ")
          }
        });
      }
    });
    next.spec.noUnknown = noAllow;
    return next;
  }
  unknown(allow = true, message = object.noUnknown) {
    return this.noUnknown(!allow, message);
  }
  transformKeys(fn) {
    return this.transform((obj) => obj && mapKeys_1(obj, (_, key) => fn(key)));
  }
  camelCase() {
    return this.transformKeys(camelCase_1);
  }
  snakeCase() {
    return this.transformKeys(snakeCase_1);
  }
  constantCase() {
    return this.transformKeys((key) => snakeCase_1(key).toUpperCase());
  }
  describe() {
    let base = super.describe();
    base.fields = mapValues_1(this.fields, (value) => value.describe());
    return base;
  }
}
function create(spec) {
  return new ObjectSchema(spec);
}
create.prototype = ObjectSchema.prototype;
const schema = create().shape({
  toEmail: create$1().email("Unvalid email").required("Email required")
});
function useEmailModal() {
  const dispatch = useDispatch();
  const [visible, setVisible] = react.exports.useState(false);
  const [emailData, setEmailData] = react.exports.useState(null);
  const [mergeTags2, setMergeTags] = react.exports.useState(null);
  const emailSendLoading = useLoading(email.loadings.send);
  const onSendEmail = react.exports.useCallback(
    async (values) => {
      if (!emailData)
        return null;
      pushEvent({ name: "SendTestEmail" });
      let mergeTagsPayload = {};
      try {
        mergeTagsPayload = JSON.parse(values.mergeTags);
      } catch (error) {
        Message.error("invalid JSON");
        return;
      }
      const html = mjml(JsonToMjml({
        data: emailData.content,
        mode: "production",
        context: emailData.content,
        dataSource: mergeTags2
      }), {
        validationLevel: "soft"
      }).html;
      dispatch(
        email.actions.send({
          data: {
            toEmail: values.toEmail,
            subject: emailData.subject,
            text: emailData.subTitle || emailData.subject,
            content: emailData.content,
            html
          },
          success: () => {
            closeModal();
            Message.success("Email send!");
          }
        })
      );
    },
    [dispatch, emailData]
  );
  const openModal = (value, mergeTags22) => {
    setEmailData(value);
    setMergeTags(mergeTags22);
    setVisible(true);
  };
  const closeModal = () => {
    setEmailData(null);
    setMergeTags(null);
    setVisible(false);
  };
  const modal = react.exports.useMemo(() => {
    return /* @__PURE__ */ React.createElement(
      ReactFinalForm,
      {
        validationSchema: schema,
        initialValues: {
          toEmail: "",
          mergeTags: JSON.stringify(mergeTags2, null, 2)
        },
        onSubmit: onSendEmail
      },
      ({ handleSubmit }) => /* @__PURE__ */ React.createElement(
        Modal,
        {
          style: { zIndex: 9999 },
          title: "Send test email",
          okText: "Send",
          cancelText: "Close",
          visible,
          confirmLoading: emailSendLoading,
          onOk: () => handleSubmit(),
          onCancel: closeModal
        },
        /* @__PURE__ */ React.createElement(TextField, { autoFocus: true, name: "toEmail", label: "To email" })
      )
    );
  }, [mergeTags2, onSendEmail, visible, emailSendLoading]);
  return {
    modal,
    openModal
  };
}
function getIsFormTouched(touchedObj) {
  let hasTouched = false;
  const getIsTouch = (o) => {
    for (const key in o) {
      const val = o[key];
      if (typeof val === "object") {
        getIsTouch(val);
      } else if (val) {
        hasTouched = true;
        return;
      }
    }
  };
  getIsTouch(touchedObj);
  return hasTouched;
}
function WarnAboutUnsavedChanges(props) {
  const { pageUnload = true } = props;
  const formState = useFormState();
  const callbackRef = react.exports.useRef(null);
  const [visible, setVisible] = react.exports.useState(false);
  const dirty = getIsFormTouched(formState.touched) || props.dirty;
  const isBacking = react.exports.useRef(false);
  const { id } = useQuery();
  const url = window.location.href;
  const Backurl = url.replace("wp-admin/admin.php?page=xseeb-page&id=" + id + "&action=edit", "wp-admin/edit.php?post_type=xseeb_emailbuilder");
  const openConfirmModal = react.exports.useCallback(() => {
    setVisible(true);
  }, []);
  react.exports.useEffect(() => {
    ConfirmBeforeLeavePage.register((callback) => {
      var _a;
      if (dirty) {
        callbackRef.current = callback;
        (_a = props.onBeforeConfirm) == null ? void 0 : _a.call(props);
        openConfirmModal();
      }
    });
    return () => {
      ConfirmBeforeLeavePage.unregister();
    };
  }, [openConfirmModal, dirty, props]);
  react.exports.useEffect(() => {
    if (pageUnload) {
      const onCheckUnsaved = (event) => {
        var _a;
        if (dirty) {
          (_a = props.onBeforeConfirm) == null ? void 0 : _a.call(props);
          if (isBacking.current)
            ;
          else {
            event.preventDefault();
            event.returnValue = "Changes that you made may not be saved.";
          }
        }
      };
      window.addEventListener("beforeunload", onCheckUnsaved);
      return () => {
        window.removeEventListener("beforeunload", onCheckUnsaved);
      };
    }
  }, [dirty, pageUnload, props]);
  const onCancel = react.exports.useCallback(() => {
    var _a;
    (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, false);
    setVisible(false);
  }, []);
  const onOk = react.exports.useCallback(() => {
    var _a, _b;
    setVisible(false);
    (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, false);
    isBacking.current = true;
    (_b = props.onBeforeUnset) == null ? void 0 : _b.call(props);
    window.location.replace(Backurl);
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Modal,
    {
      title: "Discard changes?",
      visible,
      onCancel,
      onOk,
      okText: "Discard",
      cancelText: "Cancel",
      style: { zIndex: 1e4 }
    },
    /* @__PURE__ */ React.createElement("p", null, "Are you sure you want to discard all unsaved changes?")
  ), dirty && /* @__PURE__ */ React.createElement(Prompt, { when: true, message: "" }));
}
function AutoSaveAndRestoreEmail() {
  const formState = useFormState();
  const { reset, mutators } = useForm();
  const { id = "new" } = useQuery();
  const [currentEmail, setCurrentEmail] = useLocalStorage(id, null);
  const dirty = getIsFormTouched(formState.touched);
  const [visible, setVisible] = react.exports.useState(Boolean(currentEmail));
  react.exports.useEffect(() => {
    if (dirty) {
      setCurrentEmail(formState.values);
    }
  }, [dirty, formState.values, setCurrentEmail]);
  useInterval$1(() => {
    if (dirty) {
      setCurrentEmail(formState.values);
    }
  }, 5e3);
  const onRestore = () => {
    if (currentEmail) {
      reset(currentEmail);
      setCurrentEmail(null);
      setVisible(false);
      mutators.setFieldTouched(Object.keys(formState.touched || {})[0], true);
    }
  };
  const onDiscard = () => {
    setCurrentEmail(null);
    setVisible(false);
  };
  const onBeforeConfirm = () => {
    setCurrentEmail(null);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Modal,
    {
      title: "Restore email?",
      visible: Boolean(visible && currentEmail),
      onOk: onRestore,
      okText: "Restore",
      cancelText: "Discard",
      onCancel: onDiscard,
      style: { zIndex: 1e4 }
    },
    /* @__PURE__ */ React.createElement("p", null, "Are you want to restore unsaved email?")
  ), /* @__PURE__ */ React.createElement(WarnAboutUnsavedChanges, { onBeforeConfirm }));
}
function Picture(props) {
  var _a, _b;
  const [url, setUrl] = react.exports.useState(props.src);
  react.exports.useEffect(() => {
    setUrl(props.src);
  }, [props.src]);
  return /* @__PURE__ */ React.createElement(
    "picture",
    {
      ...{ ...props },
      ...{
        src: void 0,
        style: {
          display: "inline-block",
          ...props.style
        }
      }
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        style: {
          width: ((_a = props.style) == null ? void 0 : _a.width) || "100%",
          height: ((_b = props.style) == null ? void 0 : _b.height) || "100%"
        },
        src: url,
        alt: ""
      }
    )
  );
}
const COLLECTION_KEY = "COLLECTION_KEY";
const defaultData = [
  {
    title: "Collection",
    name: "Collection",
    blocks: []
  }
];
function useCollection() {
  const [collection, setCollection] = useLocalStorage(
    COLLECTION_KEY,
    defaultData
  );
  const addCollection = react.exports.useCallback(
    (payload) => {
      if (!collection)
        return;
      collection[0].blocks.push({
        id: payload.id,
        title: payload.label,
        description: payload.helpText,
        thumbnail: payload.thumbnail,
        data: payload.data
      });
      setCollection([...collection]);
      Message.success("Added to collection!");
    },
    [collection, setCollection]
  );
  const removeCollection = react.exports.useCallback(
    (id) => {
      if (!collection)
        return;
      collection[0].blocks = collection[0].blocks.filter(
        (item) => item.id !== id
      );
      setCollection([...collection]);
      Message.success("Remove collection");
    },
    [collection, setCollection]
  );
  const collectionCategory = react.exports.useMemo(() => {
    if (!collection)
      return null;
    const blockComponents = collection[0].blocks.map((item) => ({
      id: item.id,
      type: item.data.type,
      title: item.title,
      payload: item.data,
      description: item.description,
      thumbnail: item.thumbnail,
      component: () => /* @__PURE__ */ React.createElement(
        BlockMaskWrapper,
        {
          key: item.id,
          type: item.data.type,
          payload: item.data
        },
        /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(Picture, { src: item.thumbnail }), /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2
            }
          }
        ), /* @__PURE__ */ React.createElement(
          "div",
          {
            onClick: () => removeCollection(item.id),
            style: {
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(27px, 35px)",
              zIndex: 3
            }
          },
          /* @__PURE__ */ React.createElement(IconFont, { iconName: "icon-delete" })
        ))
      )
    }));
    return {
      title: "Collection",
      name: "Collection",
      blocks: blockComponents
    };
  }, [collection, removeCollection]);
  return {
    removeCollection,
    addCollection,
    collectionCategory
  };
}
const imageCompression = __vitePreload(() => import("./browser-image-compression-c6b93e9d.js"), true ? [] : void 0, import.meta.url);
const fontList = [
  "Arial",
  "Tahoma",
  "Verdana",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Lato",
  "Montserrat",
  "\u9ED1\u4F53",
  "\u4EFF\u5B8B",
  "\u6977\u4F53",
  "\u6807\u6977\u4F53",
  "\u534E\u6587\u4EFF\u5B8B",
  "\u534E\u6587\u6977\u4F53",
  "\u5B8B\u4F53",
  "\u5FAE\u8F6F\u96C5\u9ED1"
].map((item) => ({ value: item, label: item }));
function Editor() {
  BlockAttributeConfigurationManager.add({
    [BasicType.PAGE]: PageOverWrite
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const templateData = useAppSelector("template");
  const { openModal, modal } = useEmailModal();
  const { id } = useQuery();
  const { topenModal, tmodal, tcloseModal } = CreateTemplate();
  const basepath = window.location.pathname;
  const loading = useLoading(template.loadings.fetchById);
  const { addCollection, removeCollection, collectionCategory } = useCollection();
  const isSubmitting = useLoading([
    template.loadings.create,
    template.loadings.updateById
  ]);
  react.exports.useEffect(() => {
    if (collectionCategory) {
      BlockMarketManager.addCategories([collectionCategory]);
      return () => {
        BlockMarketManager.removeCategories([collectionCategory]);
      };
    }
  }, [collectionCategory]);
  react.exports.useEffect(() => {
    if (id) {
      dispatch(template.actions.fetchById({ id: +id }));
    } else {
      dispatch(template.actions.fetchDefaultTemplate(void 0));
    }
  }, [dispatch, id]);
  const onUploadImage = async (blob) => {
    const compressionFile = await (await imageCompression).default(blob, {
      maxWidthOrHeight: 1440
    });
    return services.common.uploadByQiniu(compressionFile);
  };
  const initialValues = react.exports.useMemo(() => {
    if (!templateData)
      return null;
    const sourceData = lodash.exports.cloneDeep(templateData.content);
    return {
      ...templateData,
      content: sourceData
    };
  }, [templateData]);
  const onSubmit = react.exports.useCallback(
    async (values, form) => {
      pushEvent({ event: "EmailSave" });
      let data = await getTemplate(id);
      const html = mjml(JsonToMjml({
        data: values.content,
        mode: "production",
        context: values.content,
        dataSource: mergeTags
      }), {
        validationLevel: "soft"
      }).html;
      if (id && !data) {
        const isChanged = !(lodash.exports.isEqual(initialValues == null ? void 0 : initialValues.content, values.content) && lodash.exports.isEqual(initialValues == null ? void 0 : initialValues.subTitle, values == null ? void 0 : values.subTitle) && lodash.exports.isEqual(initialValues == null ? void 0 : initialValues.subject, values == null ? void 0 : values.subject) && lodash.exports.isEqual(initialValues == null ? void 0 : initialValues.etype, values == null ? void 0 : values.etype));
        if (!isChanged) {
          form.restart(values);
          Message.success("Successfully updated.");
          return null;
        }
        dispatch(
          template.actions.updateById({
            id: +id,
            template: values,
            html,
            success(id2) {
              Message.success("Successfully updated.");
              form.restart(values);
            }
          })
        );
      } else {
        dispatch(
          template.actions.create({
            template: values,
            html,
            success(id2, newTemplate) {
              form.restart(newTemplate);
              history.replace(`${basepath}?page=xseeb-page&id=${id2}#editor`);
              Message.success("Successfully Saved");
            }
          })
        );
      }
    },
    [dispatch, history, id, initialValues]
  );
  const onBeforePreview = react.exports.useCallback((html, mergeTags2) => {
    return mustache$1.render(html, mergeTags2);
  }, []);
  if (!templateData && loading) {
    return /* @__PURE__ */ React.createElement(Loading, { loading }, /* @__PURE__ */ React.createElement("div", { style: { height: "100vh" } }));
  }
  if (!initialValues)
    return null;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    EmailEditorProvider,
    {
      key: id,
      dashed: false,
      data: initialValues,
      height: "calc(100vh - 72px)",
      onUploadImage,
      fontList,
      onAddCollection: addCollection,
      onRemoveCollection: ({ id: id2 }) => removeCollection(id2),
      onSubmit,
      autoComplete: true,
      mergeTags,
      mergeTagGenerate: (tag) => `{{${tag}}}`,
      onBeforePreview
    },
    ({ values }, { submit }) => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        PageHeader,
        {
          backIcon: true,
          title: "Back",
          onBack: () => {
            window.location.href = `${basepath}?page=xseeb-page`;
          },
          extra: /* @__PURE__ */ React.createElement(Stack$1, { alignment: "center" }, /* @__PURE__ */ React.createElement(Button, { onClick: () => topenModal() }, "Switch Template"), /* @__PURE__ */ React.createElement(ShortCodes, null), /* @__PURE__ */ React.createElement(Preview, { values }), /* @__PURE__ */ React.createElement(Button, { onClick: () => openModal(values, mergeTags) }, "Send test email"), /* @__PURE__ */ React.createElement(
            Button,
            {
              type: "primary",
              loading: isSubmitting,
              onClick: () => submit()
            },
            "Save"
          ))
        }
      ), /* @__PURE__ */ React.createElement(SimpleLayout, null, /* @__PURE__ */ React.createElement(EmailEditor, null)), /* @__PURE__ */ React.createElement(AutoSaveAndRestoreEmail, null));
    }
  ), modal, tmodal);
}
export {
  Editor as default
};
