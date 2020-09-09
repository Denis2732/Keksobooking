//В работе...

let filter = document.querySelector('#housing-type');


filter.addEventListener('change', () => {
  let filterClass = filter.value;
  let filterBox = document.querySelectorAll('.map__rendering-pins');

  filterBox.forEach(elem => {
    elem.classList.remove('hidden');

    if (elem.value != filterClass && filterClass !== 'any') {
      elem.classList.add('hidden');
    }
  })
});


