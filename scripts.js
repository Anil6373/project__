document.getElementById('reviewForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const movie = document.getElementById('movie').value;
  const review = document.getElementById('review').value;
  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('review');
  reviewContainer.innerHTML = `<h3>${movie}</h3><p>${review}</p>`;

  document.getElementById('reviewsList').appendChild(reviewContainer);

  document.getElementById('reviewForm').reset();
});
