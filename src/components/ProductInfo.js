const template = document.createElement("template");
template.innerHTML = `
<style>

.productContainer {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.productImage {
  max-width: 200px;
}

.productName {
  font-size: 18px;
  font-weight: 700;
}

.productPrice {
  font-weight: 700;
}

</style>

<div class="productContainer">
  <div>
    <img class="productImage" />
    <p class="productName"></p>
    <p class="productPrice"></p>
  </div>
  <button is="submit-button" class="addToCart">加入購物車</button>
</div>
`;

class ProductInfo extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector(".productImage").src =
      this.getAttribute("productImage");
    this.shadowRoot.querySelector(".productName").innerText =
      this.getAttribute("productName");
    this.shadowRoot.querySelector(
      ".productPrice"
    ).innerText = `￥${this.getAttribute("productPrice")} (含稅)`;
  }

  addToCart() {
    console.log("add product to cart...");
    document.querySelector('div[slot="modalContent"]').innerHTML =
      "<added-message />";
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".addToCart")
      .addEventListener("click", () => this.addToCart());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".addToCart").removeEventListener();
  }
}

export default ProductInfo;
