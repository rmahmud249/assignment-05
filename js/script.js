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

const headerCounter = document.querySelector(".copyCount"); 
document.querySelectorAll(".copyBtn").forEach((btn) => {
    btn.addEventListener("click", function() {
        let card = btn.closest(".card");
        let textToCopy = card.querySelector(".copyText").innerText;
        navigator.clipboard.writeText(textToCopy);
        let currentNum = parseInt(headerCounter.innerText) || 0;
        headerCounter.innerText = (currentNum + 1) + " Copy";
    });
});

