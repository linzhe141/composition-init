
import {defineAsyncComponent,App} from 'vue'
const pageComponents = import.meta.glob('./pages/*.vue')
export default function install(app: App) {
  for (const [key, value] of Object.entries(pageComponents)) {
    const name = key.split('.vue')[0].split('/').reverse()[0]
    app.component(name, defineAsyncComponent(value))
  }
}
