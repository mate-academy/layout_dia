'use strict';

document.getElementById('feedbackForm').addEventListener('submit',
  function(event) {
    event.preventDefault();
    event.stopPropagation();
  });
