var list = document.querySelectorAll(".question")

list.forEach((question) => question.addEventListener('click', () => {
    if(question.classList.contains("invisible")) {
        list.forEach((question) => question.classList.add("invisible"))
        question.classList.remove("invisible")
    } else {
        question.classList.add("invisible")
    }
})) 

list.forEach((question) => question.addEventListener('click', () => {
    if(question.classList.contains("rotate")) {
        question.classList.remove("rotate")
    } else {
        list.forEach((question) => question.classList.remove("rotate"))
        question.classList.add("rotate")
    }
})) 