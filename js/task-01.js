const container = document.querySelector('.js-container');

[...container.children].forEach(item => item.addEventListener('click', onClick));

function onClick(evt) {
  // console.log(evt.currentTarget.dataset.color);

  if (!evt.target.classList.contains('js-box')) {
    return;
  }
  // console.log(evt.currentTarget);
  // console.log(evt.target);
  console.log(evt.target.dataset.color);
}
