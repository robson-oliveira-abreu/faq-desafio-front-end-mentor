var list = document.querySelectorAll(".question")

list.forEach((question) => question.addEventListener('click', () => {
    if(question.classList.contains("invisible")) {
        question.classList.remove("invisible")
    } else {
        question.classList.add("invisible")
    }
})) 

list.forEach((question) => question.addEventListener('click', () => {
    if(question.classList.contains("rotate")) {
        question.classList.remove("rotate")
    } else {
        question.classList.add("rotate")
    }
})) 