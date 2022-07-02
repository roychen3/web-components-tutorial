import SubmitButton from "./components/SubmitButton";
import ModalShell from "./components/ModalShell";
import ProductInfo from "./components/ProductInfo";
import AddedMessage from "./components/AddedMessage";

window.customElements.define("submit-button", SubmitButton, { extends: 'button' });
window.customElements.define("modal-shell", ModalShell);
window.customElements.define("product-info", ProductInfo);
window.customElements.define("added-message", AddedMessage);
