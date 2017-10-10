document.addEventListener("DOMContentLoaded", () => {
  // Add Click Handlers to Photos
  Array.from(document.getElementsByClassName('photo')).forEach( (photo) => {
    photo.addEventListener('click', (e) => {
      createModal(e.target.src);
    });
  })
});

const createModal = (src) => {
  let body = document.getElementsByTagName("BODY")[0];
  let modal = document.createElement("div");
  modal.classList.add("modal-background");
  let img = document.createElement("img");
  img.src = src;
  img.classList.add("modal-image")
  modal.appendChild(img);
  body.appendChild(modal);
  // Add Remove On Click
  modal.addEventListener('click', (e) => {
    let modal = document.getElementsByClassName('modal-background')[0];
    modal.parentNode.removeChild(modal);
  })
}
