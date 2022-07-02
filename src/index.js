import SubmitButton from "./components/button/SubmitButton";
import NormalButton from "./components/button/NormalButton";

import ModalShell from "./components/ModalShell";

import ProductInfo from "./components/productInfo/ProductInfo";
import SundrugProductInfo from "./components/productInfo/SundrugProductInfo";

import AddedMessage from "./components/AddedMessage";
import PurchaseQuestionnaire from "./components/PurchaseQuestionnaire";

window.customElements.define("submit-button", SubmitButton, {
  extends: "button",
});
window.customElements.define("normal-button", NormalButton, {
  extends: "button",
});

window.customElements.define("modal-shell", ModalShell);
window.customElements.define("product-info", ProductInfo);
window.customElements.define("sundrug-productinfo", SundrugProductInfo);
window.customElements.define("added-message", AddedMessage);
window.customElements.define("purchase-questionnaire", PurchaseQuestionnaire);

const openModal = () => {
  const isModalOpen = !!document.querySelector("modal-shell");
  if (isModalOpen) return;

  const sundrugProductinfo = document.createElement("sundrug-productinfo");
  sundrugProductinfo.setAttribute(
    "product-image",
    "https://ec.sundrug.co.jp/eccontents/img/commodity/shop/00000000/commodity/4987306045156_common.jpg?NoPhoto=true"
  );
  sundrugProductinfo.setAttribute(
    "product-name",
    "【指定第2類医薬品】パブロンゴールドA微粒 44包 【セルフメディケーション税制対象】"
  );
  sundrugProductinfo.setAttribute("product-price", "1,508");

  const slot = document.createElement("div");
  slot.setAttribute("slot", "modal-content");
  slot.appendChild(sundrugProductinfo);

  const modalShell = document.createElement("modal-shell");
  modalShell.appendChild(slot);

  document.body.appendChild(modalShell);
};
document
  .querySelector(".openModal")
  .addEventListener("click", () => openModal());
