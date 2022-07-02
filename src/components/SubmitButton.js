class SubmitButton extends HTMLButtonElement {
  constructor() {
    self = super();
    self.style.cssText = `
        font-weight: 700;
        background-color: aqua;
        padding: 18px;
        cursor: pointer;
    `;
  }
}

export default SubmitButton;
