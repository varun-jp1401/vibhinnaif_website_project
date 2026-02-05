const loadMoreBtn = document.getElementById("loadMoreBtn")
const seeLessBtn = document.getElementById("seeLessBtn")
const hiddenItems = document.querySelectorAll(".gallery-item.hidden")

loadMoreBtn.onclick = () => {
    hiddenItems.forEach(i => i.classList.remove("hidden"))
    loadMoreBtn.classList.add("hidden")
    seeLessBtn.classList.remove("hidden")
}

seeLessBtn.onclick = () => {
    hiddenItems.forEach(i => i.classList.add("hidden"))
    seeLessBtn.classList.add("hidden")
    loadMoreBtn.classList.remove("hidden")
    window.scrollTo({ top: document.querySelector(".gallery-section").offsetTop, behavior: "smooth" })
}