import { closeModal } from "../common";

const template = document.createElement("template");
template.innerHTML = `
<style>
.modal-shell {
  width: 60%;
  margin: 0 auto;
  border-radius: 9px;
  border: solid 2px black;
}

.modal-header {
  display: flex;
  justify-content: end;
  border-bottom: solid 2px black;
}

.close {
  padding: 9px;
  cursor: pointer;
}

.modal-content{
  padding: 9px;
}
</style>

<div class="modal-shell">
  <div class="modal-header">
    <span class="close">X</span>
  </div>
  <div class="modal-content">
    <slot name="modal-content" />
  </div>
</div>
`;

class ModalShell extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".close")
      .addEventListener("click", () => closeModal());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".close").removeEventListener();
  }
}

export default ModalShell;
