document.querySelector('.button-queue').addEventListener('click', onButtonQueueClick);
const refs = {
    imageModal: document.querySelector('.image-modal'),
    headerImages: document.querySelector('.heder-images'),
    // genre: document.querySelector('.heder-images'),
    votes: document.querySelector('.vote')
}

function onButtonQueueClick() { 
  const filmObj = {
    poster_path: refs.imageModal.src,
    title: refs.headerImages.textContent,
    genre: refs.headerImages.textContent,
    release_date: refs.headerImages.textContent,
    votes: refs.votes.textContent,
  }

  if (!localStorage.getItem('Queue')) {
    localStorage.setItem('Queue', JSON.stringify([filmObj]));
    return;
  }

  const filmsLocalStorageStr = localStorage.getItem('Queue');
  let films = JSON.parse(filmsLocalStorageStr);

  if (films.find(film => film.title === filmObj.title)) {
    alert(`Error: Movie ${film.title} is already added.`);
    return;
  }
  else {
    films.push(filmObj);
    localStorage.setItem('Queue', JSON.stringify(films))
    console.log(films)
  }
}