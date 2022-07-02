import ProductInfo from "./ProductInfo";

class SundrugProductInfo extends ProductInfo {
  constructor() {
    super();
  }

  addToCart() {
    document.querySelector('div[slot="modal-content"]').innerHTML =
      "<purchase-questionnaire />";
  }
}

export default SundrugProductInfo;
