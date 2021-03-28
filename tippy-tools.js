


const template = document.getElementById('template');

tippy('.tippy-button', {
  content: template.innerHTML,
  allowHTML: true,
  duration: 800,
  animation: 'scale',
  theme: 'light',
  delay: 100,
  hideOnClick: 'toggle',
  inertia: true,
  moveTransition: 'transform 0.2s ease-out',
  placement: 'bottom',
  zIndex: 9999,
  interactive: true,
  flip: true,
  zIndex: 9999,
});



