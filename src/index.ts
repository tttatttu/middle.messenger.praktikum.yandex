import {renderDOM} from "./utils/renderDOM";
import {Button} from "./components/Button/button";


document.addEventListener('DOMContentLoaded', () => {
    const button = new Button({
        text: 'hi',
        type: 'button',
        className: 'button_blueviolet',
        events: {
            click: () => console.log("hi")
        }
    })

    renderDOM('#app', button)

    setTimeout(() => {
        button.setProps({
            text: "bye",
            type: 'button',
            className: 'button_white',
            click: () => console.log('bye')
        })
    }, 3000)
})
