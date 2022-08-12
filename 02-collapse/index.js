const content = document.querySelector('.collapsible__content');
const button = document.querySelector('.collapsible__button');
const collapsActions = document.querySelectorAll('.collapsible__action');

collapsActions.forEach(elem => {
  if(elem.classList.contains('collapsible__action--hidden')) elem.style.display = 'none';
});

content.style.overflow = 'hidden';

const anim = content.animate(
  { height: [`${content.clientHeight}px`, '0px'] },
  { duration: 500, easing: 'ease-out', fill: 'forwards' }
);

anim.pause();

const toggleButtonActions = () => {
  if(anim.playbackRate > 0 && anim.playState !== 'paused') {
    collapsActions[0].style.display = 'block';
    collapsActions[1].style.display = 'none';
  } else {
    collapsActions[0].style.display = 'none';
    collapsActions[1].style.display = 'block';
  }
};

button.addEventListener('click', () => {
  if (anim.playState === 'paused') {
    toggleButtonActions();
    anim.play();
  } else {
    toggleButtonActions();
    anim.reverse();
  }
  button.disabled = true;
});

anim.addEventListener('finish', () => {
  button.disabled = false;
});
