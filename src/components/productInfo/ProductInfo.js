const template = document.createElement("template");
template.innerHTML = `
<style>

.product-image {
  max-width: 200px;
}

.product-name {
  font-size: 18px;
  font-weight: 700;
}

.product-price {
  font-weight: 700;
  margin-bottom: 36px
}

.button-container {
  text-align: center;
}

</style>

<img class="product-image" />
<p class="product-name"></p>
<p class="product-price"></p>
<div class="button-container">
  <button is="submit-button" class="add-to-cart">加入購物車</button>
</div>
`;

class ProductInfo extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector(".product-image").src =
      this.getAttribute("product-image");
    this.shadowRoot.querySelector(".product-name").innerText =
      this.getAttribute("product-name");
    this.shadowRoot.querySelector(
      ".product-price"
    ).innerText = `￥${this.getAttribute("product-price")} (含稅)`;
  }

  static get observedAttributes() {
    return ["product-image", "product-name", "product-price"];
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".add-to-cart")
      .addEventListener("click", () => this.addToCart());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".add-to-cart").removeEventListener();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "product-image":
        if (oldValue === newValue) break;
        this.shadowRoot.querySelector(".product-image").src = newValue;
        break;

      case "product-name":
        if (oldValue === newValue) break;
        this.shadowRoot.querySelector(".product-name").innerText = newValue;

      case "product-price":
        if (oldValue === newValue) break;
        this.shadowRoot.querySelector(
          ".product-price"
        ).innerText = `￥${newValue} (含稅)`;
        break;

      default:
        break;
    }
  }

  addToCart() {
    console.log("add product to cart...");
    document.querySelector('div[slot="modal-content"]').innerHTML =
      "<added-message />";
  }
}

export default ProductInfo;
