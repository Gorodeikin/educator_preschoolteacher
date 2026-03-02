const articleModal = document.getElementById('articleModal');
const articleTitle = document.getElementById('articleTitle');
const articleBody = document.getElementById('articleBody');
const articleImage = document.getElementById('articleImage');
const articleClose = document.querySelector('.article-close');

document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    articleTitle.textContent = btn.dataset.title;
    articleBody.innerHTML = btn.dataset.article;
    articleImage.src = btn.dataset.image;

    articleModal.style.display = 'flex';
  });
});

articleClose.addEventListener('click', () => {
  articleModal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === articleModal) {
    articleModal.style.display = 'none';
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    articleModal.style.display = 'none';
  }
});
