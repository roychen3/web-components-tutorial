const template = document.createElement("template");
template.innerHTML = `
<style>

.container {
  text-align: center;
}

.message {
  margin-top: 36px;
  margin-bottom: 36px;
  font-size: 27px;
  font-weight: 700;
}

.continueBrowse {
  font-weight: 700;
  background-color: white;
  padding: 18px;
  cursor: pointer;
}

</style>

<div class="container">
  <p class="message">商品已加入您的購物車</p>
  <button is="submit-button">前往結賬</button>
  <button class="continueBrowse">繼續購物</button>
</div>

`;

class AddedMessage extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default AddedMessage;