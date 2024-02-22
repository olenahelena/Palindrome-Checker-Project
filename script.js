const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


function checkPalindrom() {
  const resultText = textInput.value.trim();
  
// Validate input
 if (resultText === '') {
    alert("Please input a value");
    return;
  } 

  const cleanedText = resultText.toLowerCase().replace(/[_\s,.:\/\\()-]/g, '');
  const reversedText = cleanedText.split('').reverse().join('');

// Check if it's a palindrome
  if (cleanedText === reversedText) {
    result.innerHTML = `<p class="user-input"><span class="bold">${resultText}</span> is a palindrome</p>`;
  } else {
    result.innerHTML = `<p class="user-input"><span class="bold">${resultText}</span> is not a palindrome</p>`;
  }

   result.classList.remove('hidden');
}

checkBtn.addEventListener("click",  checkPalindrom);