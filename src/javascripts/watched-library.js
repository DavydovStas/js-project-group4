document.querySelector('.button-watcyed').addEventListener('click', addToQueueLibrary);

function addToQueueLibrary() { 
  const filmAttribute = {
    poster_path: document.querySelector('.image-modal').src,
    title: document.querySelector('.heder-images').textContent,
    genre: document.querySelector('.heder-images').textContent,
    release_date: document.querySelector('.heder-images').textContent,
    votes: document.querySelector('.vote').textContent,
  }

  if (localStorage.getItem('Watched') === null) {
    localStorage.setItem('Watched', JSON.stringify([filmAttribute]));
    return
  }

  const filmsString = localStorage.getItem('Watched');
  let filmsArray = JSON.parse(filmsString);

  if (filmsArray.find(film => film.title === filmAttribute.title)) {
    alert('Movie added earlier');
    return
  }
  else {
    filmsArray.push(filmAttribute);
    localStorage.setItem('Watched', JSON.stringify(filmsArray))
    console.log(filmsArray)
  }
}