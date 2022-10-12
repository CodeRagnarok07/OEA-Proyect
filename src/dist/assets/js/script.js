(() => {
    const modal = document.getElementById("modal")

    for (const tooltip of all_tooltip_options) {

        const parent = tooltip.parentElement

        tooltip.className += " hidden"
        parent.className += " parent_tooltip_options"



        const activador = () => {
            tooltip.classList.toggle("hidden")

        }

        clicker.onclick = () => activador()

        parent.appendChild(clicker)
        parent.appendChild(svg_icons)
    }
})();