const template = document.createElement("template");
template.innerHTML = `
<style>
.modalShell {
  width: 60%;
  margin: 0 auto;
  border-radius: 9px;
  border: solid 2px black;
}

.modalHeader {
  display: flex;
  justify-content: end;
  border-bottom: solid 2px black;
}

.close {
  padding: 9px;
}

.modalContent{
  padding: 9px;
}
</style>

<div class="modalShell">
  <div class="modalHeader">
    <span class="close">X</span>
  </div>
  <div class="modalContent">
    <slot name="modalContent" />
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

  closeModal() {
    const modalShell = document.querySelector("modal-shell");
    document.body.removeChild(modalShell);
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".close")
      .addEventListener("click", () => this.closeModal());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".close").removeEventListener();
  }
}

export default ModalShell;
