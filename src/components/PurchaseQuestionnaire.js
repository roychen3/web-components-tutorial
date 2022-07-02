const template = document.createElement("template");
template.innerHTML = `
<style>

fieldset {
  margin-bottom: 9px;
  border-radius: 9px;
  border: solid 2px black;
}

.button-container {
  text-align: center;
}

</style>

<div class="container">
  <form>
    <fieldset>
      <legend>購買原因</legend>

      <input type="radio" id="self" name="q1" required />
      <label for="self">自己用</label><br />

      <input type="radio" id="family&friend" name="q1" required />
      <label for="family&friend">幫家人朋友購買</label><br />
    </fieldset>

    <fieldset>
      <legend>是否了解購買須知</legend>

      <input type="radio" id="yes" name="q2" required />
      <label for="yes">了解</label><br />

      <input type="radio" id="no" name="q2" required />
      <label for="no">不了解</label><br />
    </fieldset>

    <div class="button-container">
      <button is="submit-button" type="submit">送出</button>
    </div>
  </form>
</div>
`;

class PurchaseQuestionnaire extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  addToCart() {
    console.log("add product to cart...");
    document.querySelector('div[slot="modal-content"]').innerHTML =
      "<added-message />";
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        this.addToCart();
      });
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("form[.questionnaire-form]")
      .removeEventListener();
  }
}

export default PurchaseQuestionnaire;
