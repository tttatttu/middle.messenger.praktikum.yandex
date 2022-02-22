import {renderDOM} from "./utils/renderDOM";
import {Button} from './components/Button'

document.addEventListener('DOMContentLoaded', () => {
    const button = new Button({
        text: 'hi',
        events: {
            click: () => console.log("hi")
        }
    })

    renderDOM('#app', button)

    setTimeout(() => {
        button.setProps({
            text: "bye"
        })
    }, 3000)
})
