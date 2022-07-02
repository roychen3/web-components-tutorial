class NormalButton extends HTMLButtonElement {
  constructor() {
    self = super();
    self.style.cssText = `
        font-weight: 700;
        border-radius: 9px;
        background-color: white;
        padding: 18px;
        cursor: pointer;
    `;
  }
}

export default NormalButton;
