import { App } from "vue";
import MyButton from './button'
import JSXButton from "./JSXButton";
import SFCButton from "./SFCButton.vue";

export { MyButton, JSXButton, SFCButton }

export default {
    install(app: App): void {
        app.component(MyButton.name, MyButton)
        app.component(JSXButton.name, JSXButton)
        app.component(SFCButton.name, SFCButton)
    }
}