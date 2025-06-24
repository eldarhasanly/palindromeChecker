document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('text-input');
  const button = document.getElementById('check-btn');
  const result = document.getElementById('result');

  button.addEventListener('click', function () {
    const text = input.value.trim();

    if (text === '') {
      alert('Please input a value.');
      return;
    }

    const cleanText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleanText.split('').reverse().join('');

    if (cleanText === reversed) {
      result.textContent = `${text} is a palindrome.`;
    } else {
      result.textContent = `${text} is not a palindrome.`;
    }
  });
});
