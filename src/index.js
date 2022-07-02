import SubmitButton from "./components/SubmitButton";

import ModalShell from "./components/ModalShell";
import ProductInfo from "./components/ProductInfo";
import SundrugProductInfo from "./components/SundrugProductInfo";
import AddedMessage from "./components/AddedMessage";
import PurchaseQuestionnaire from "./components/PurchaseQuestionnaire";

window.customElements.define("submit-button", SubmitButton, {
  extends: "button",
});

window.customElements.define("modal-shell", ModalShell);
window.customElements.define("product-info", ProductInfo);
window.customElements.define("sundrug-productinfo", SundrugProductInfo);
window.customElements.define("added-message", AddedMessage);
window.customElements.define("purchase-questionnaire", PurchaseQuestionnaire);
