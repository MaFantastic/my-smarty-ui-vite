import { defineComponent, h, createVNode, createTextVNode, openBlock, createElementBlock } from "vue";
const MyButton = defineComponent({
  name: "SButton",
  render() {
    return h("button", null, "MyButton");
  }
});
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
  }
};
export {
  JSXButton,
  MyButton,
  SFCButton,
  entry as default
};
