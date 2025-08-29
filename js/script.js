const heartCount = document.querySelector('.heartCount');
let count = 0; 
document.querySelectorAll('.heartBtn').forEach(button => {
  const heartIcon = button.querySelector('.heartIcon');

button.addEventListener('click', function(){
    heartIcon.classList.toggle('fa-regular');
    heartIcon.classList.toggle('fa-solid');
    heartIcon.classList.toggle('text-red-500');

    count++;
    heartCount.firstChild.textContent = count;
  });
});

document.querySelectorAll(".copyBtn").forEach((btn) => {
    btn.addEventListener("click", function() {
        let textToCopy = document.querySelector(".copyText").innerText;
        navigator.clipboard.writeText(textToCopy);
        let counterSpan = document.querySelector(".copyCount");
        let currentText = counterSpan.innerText;
        let currentNum = parseInt(currentText) || 0;
        counterSpan.innerText =currentNum+1;
    });
});


