
// modal
const modal = document.getElementsByClassName("modal")[0]
const handleModal = () => {
    modal.classList.toggle("hidden-modal")
}

// form by step


const showSidebar = ()=>{

    const modal = document.getElementsByClassName("modal")[0]
    const sidebar = document.getElementById("sidebar")

    modal.classList.toggle("hidden-modal")
    sidebar.classList.toggle("hidden-modal")


}


let current = 1

const progres_bar = document.getElementById("bar_progres")
const form_step = document.getElementById("form_step")

console.log(form_step);

const widthSlider = form_step.children[0].offsetWidth

/* pasos */
const handleStep = (bool) => {
    if (bool == true) {
        form_step.scrollLeft += widthSlider * 1
        console.log(progres_bar);
        progres_bar.children[current].classList.add("active")

        current++

    } else if (bool == false) {
        form_step.scrollLeft -= widthSlider
        current = current - 1
        progres_bar.children[current].className = ""
        console.log(progres_bar)


    }
}





