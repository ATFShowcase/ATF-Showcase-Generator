import createInputListener from './createInputListener.js'
import createSettings from './createSettings.js'
import createShowcase from './createShowcase.js'

function main() {
    const settings = createSettings()
    const showcase = createShowcase(settings)
    const inputListener = createInputListener()

    settings.subscribe(showcase.drawTemplate)
    inputListener.addInputMethod(settings.changeSetting)
    inputListener.addInputMethod(showcase.generate)
}

setTimeout(main, 1000)
