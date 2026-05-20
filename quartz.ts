import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
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
