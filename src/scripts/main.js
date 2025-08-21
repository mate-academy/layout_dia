'use strict';

// автоматическое увеличение textarea
document.addEventListener('DOMContentLoaded', function() {
  const textareas = document.querySelectorAll('textarea');

  textareas.forEach(textarea => {
    // устанавливаем начальнуювысоту текстареа под текущий текст
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';

    // Auto-resize on input
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });
  });
});
