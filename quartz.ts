import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      const aName = a.displayName ?? ""
      const bName = b.displayName ?? ""
      return aName.localeCompare(bName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
 
    if (!a.isFolder && b.isFolder) {
      return -1
    } else {
      return 1
    }
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
