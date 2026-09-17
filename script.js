// ==========================================
// TECHBOX SCRIPT
// ==========================================


// ==========================================
// SEARCH
// ==========================================

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

if (searchForm && searchInput) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const value = searchInput.value.trim();

        if (value === "") {
            searchInput.focus();
            return;
        }

        alert("Searching TechBox for: " + value);

    });

}


// ==========================================
// SERVICE BUTTONS
// ==========================================

const serviceButtons =
    document.querySelectorAll(".quick-links button");

serviceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const service =
            button.getAttribute("data-search");

        if (searchInput && service) {

            searchInput.value = service;

        }

    });

});


// ==========================================
// SCROLL HINT
// ==========================================

const scrollHint =
    document.querySelector(".scroll-hint");

if (scrollHint) {

    scrollHint.addEventListener("click", function () {

        const agents =
            document.querySelector(".ai-agents-section");

        if (agents) {

            agents.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}