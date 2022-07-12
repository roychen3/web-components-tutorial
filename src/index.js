import SubmitButton from "./components/button/SubmitButton";
import NormalButton from "./components/button/NormalButton";

import ModalShell from "./components/ModalShell";

import ProductInfoGetSet from "./components/productInfo/ProductInfoGetSet";
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
window.customElements.define("product-info-get-set", ProductInfoGetSet);
window.customElements.define("product-info", ProductInfo);
window.customElements.define("sundrug-product-info", SundrugProductInfo);
window.customElements.define("added-message", AddedMessage);
window.customElements.define("purchase-questionnaire", PurchaseQuestionnaire);

const updateProduct = () => {
  const isModalOpen = !!document.querySelector("modal-shell");
  if (!isModalOpen) return;

  const sundrugProductInfo = document.querySelector("product-info-get-set");
  sundrugProductInfo.setAttribute(
    "product-image",
    "https://ec.sundrug.co.jp/eccontents/img/commodity/shop/00000000/commodity/4987107614704_common.jpg?NoPhoto=true"
  );
  sundrugProductInfo.setAttribute(
    "product-name",
    "【指定第2類医薬品】プレコール持続性カプセル 36カプセル 【セルフメディケーション税制対象】"
  );
  sundrugProductInfo.setAttribute("product-price", "1,304");
};
document
  .querySelector(".update-product")
  .addEventListener("click", () => updateProduct());

const openModal = () => {
  const isModalOpen = !!document.querySelector("modal-shell");
  if (isModalOpen) return;

  const sundrugProductInfo = document.createElement("product-info-get-set");
  // override
  sundrugProductInfo.addToCart = () => {
    document.querySelector('div[slot="modal-content"]').innerHTML =
      "<purchase-questionnaire />";
  }
  sundrugProductInfo.setAttribute(
    "product-image",
    "https://ec.sundrug.co.jp/eccontents/img/commodity/shop/00000000/commodity/4987306045156_common.jpg?NoPhoto=true"
  );
  sundrugProductInfo.setAttribute(
    "product-name",
    "【指定第2類医薬品】パブロンゴールドA微粒 44包 【セルフメディケーション税制対象】"
  );
  sundrugProductInfo.setAttribute("product-price", "1,508");

  const slot = document.createElement("div");
  slot.setAttribute("slot", "modal-content");
  slot.appendChild(sundrugProductInfo);

  const modalShell = document.createElement("modal-shell");
  modalShell.appendChild(slot);

  document.body.appendChild(modalShell);
};
document
  .querySelector(".open-modal")
  .addEventListener("click", () => openModal());
