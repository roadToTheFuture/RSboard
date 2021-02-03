export default function contentScroll() {
  const content = document.querySelector('.content');

  content.addEventListener('wheel', function (event) {
    const modifier = 1;

    if (event.target.className === 'content' && event.deltaY != 0) {
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  });
}
