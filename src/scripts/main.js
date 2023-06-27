'use strict';

const textareas = document.querySelectorAll('.send-message__field--textarea');
const hiddenDiv = document.createElement('div');
let content = null;

for (const j of textareas) {
  j.classList.add('txtstuff');
}

hiddenDiv.classList.add('txta');

hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';

for (const i of textareas) {
  (function(x) {
    i.addEventListener('input', function() {
      i.parentNode.appendChild(hiddenDiv);
      i.style.resize = 'none';
      i.style.overflow = 'hidden';
      content = i.value;
      content = content.replace(/\n/g, '<br>');
      hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';
      hiddenDiv.style.visibility = 'hidden';
      hiddenDiv.style.display = 'block';
      i.style.height = hiddenDiv.offsetHeight + 'px';
      hiddenDiv.style.visibility = 'visible';
      hiddenDiv.style.display = 'none';
    });
  })(i);
}
