// Shows Search Bar 
const searchBar = document.querySelector(".search-bar");
const search = document.getElementById("search");
if (searchBar) {
    searchBar.addEventListener("click", () => {
        searchBar.classList.add("active");
        setTimeout(() => {
            search.style.width = "200px";
            search.style.opacity = "1";
            search.focus();
        }, 200);

    });

    document.addEventListener("click", (e) => {
        if (!searchBar.contains(e.target)) {
            search.style.width = "0";
            search.style.opacity = "0";
            searchBar.classList.remove("active");
            search.value = "";
        }
    });
};

// Collections active button

const buttons = document.querySelectorAll(".coll-link");

buttons.forEach(button => {
    if (button) {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

        });
    };
});