const tabButtons = document.querySelectorAll(".tablinks");

console.log(tabButtons);

for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
        const tabName = this.dataset.tab;
        const tabContent = document.getElementById(tabName);
        const allTabContent = document.querySelectorAll(".tabcontent");
        const allTabButtons = document.querySelectorAll(".tablinks");

        for (let j = 0; j < allTabContent.length; j++) {
            allTabContent[j].style.display = "none";
        }

        for (let k = 0; k < allTabButtons.length; k++) {
            allTabButtons[k].classList.remove("active");
        }

        tabContent.style.display = "grid";
        this.classList.add("active");
    });
}

document.querySelector(".tablinks").click();