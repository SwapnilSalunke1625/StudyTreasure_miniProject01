
  let currentIndex = 0;
  const slider = document.querySelector('.slider');
  const divBoxes = document.querySelectorAll('.div-box');
  const boxWidth = divBoxes[0].offsetWidth + 10; // Width of each .div-box plus margin

  function moveSlide(direction) {
    const totalBoxes = divBoxes.length;
    const visibleBoxes = Math.floor(slider.parentElement.offsetWidth / boxWidth);

    if (direction === 1 && currentIndex < totalBoxes - visibleBoxes) {
      currentIndex++;
    } else if (direction === -1 && currentIndex > 0) {
      currentIndex--;
    }

    slider.style.transform = `translateX(${-currentIndex * boxWidth}px)`;
  }


//   for second 






