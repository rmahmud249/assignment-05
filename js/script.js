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
        
        alert(textToCopy + " is copied");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  let coins = 100;         
  const callCost = 20;      
  const coinBalance = document.querySelector(".coinBalance");
  const historyList = document.getElementById("historyList");
  const clearBtn = document.getElementById("clearHistory");
  const callBtns = document.querySelectorAll(".item-btn .bg-green-500"); 
  function updateCoinDisplay() {
    coinBalance.childNodes[0].nodeValue = coins + " ";
  }
  callBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const titleEl = card.querySelector("h3");
      const numberEl = card.querySelector(".copyText");

      if (!titleEl || !numberEl) return;
      const title = titleEl.innerText;
      const number = numberEl.innerText;
      if (coins >= callCost) {
        coins -= callCost;
        updateCoinDisplay();
        alert(`Calling ${title} ${number}`);

        const li = document.createElement("li");
        li.className = "p-2  rounded-md bg-gray-50";
        li.innerHTML = `
        <div class="flex justify-between items-center w-full">
          <div class="flex flex-col">
            <div class="font-semibold text-gray-900">${title}</div>
            <div class="text-gray-600 font-semibold">${number}</div>
          </div>
          <div class="text-xs text-black">${new Date().toLocaleTimeString()}</div>
        </div>
      `;
        historyList.appendChild(li);
      } else {
        alert("Not enough coins!");
      }
    });
  });

  clearBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
  });
  updateCoinDisplay();
});
