export const closeModal = () => {
  const modalShell = document.querySelector("modal-shell");
  document.body.removeChild(modalShell);
};
