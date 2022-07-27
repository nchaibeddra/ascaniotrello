export const AddCol = () => import('../..\\components\\AddCol.vue' /* webpackChunkName: "components/add-col" */).then(c => wrapFunctional(c.default || c))
export const AddSticker = () => import('../..\\components\\AddSticker.vue' /* webpackChunkName: "components/add-sticker" */).then(c => wrapFunctional(c.default || c))
export const ConfDialog = () => import('../..\\components\\ConfDialog.vue' /* webpackChunkName: "components/conf-dialog" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const ModifStickerDialog = () => import('../..\\components\\ModifStickerDialog.vue' /* webpackChunkName: "components/modif-sticker-dialog" */).then(c => wrapFunctional(c.default || c))
export const ModifyColName = () => import('../..\\components\\ModifyColName.vue' /* webpackChunkName: "components/modify-col-name" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
