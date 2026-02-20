import "../styles.css";
import { ScreenController } from "./ScreenController";



let myScreen = new ScreenController()


myScreen.renderModal(myScreen.modals[0]);
myScreen.hideModal(myScreen.modals[0]);

// myScreen.renderModal(myScreen.modal[1])
