import modules from './modules'

export default function () {
  console.log({ modules })
  for (const [moduleName, module] of Object.entries(modules)) {
    console.log('Registering module: ', moduleName, { module })
    if (module.override) {
      this.$store.unregisterModule(moduleName)
    }
    if (!this.$store.hasModule(moduleName, module) || module.override) {
      this.$store.registerModule(moduleName, module)
    }
  }
}
