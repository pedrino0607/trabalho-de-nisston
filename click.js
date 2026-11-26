const stage = document.querySelector("#stage");
const components = document.querySelectorAll(".component");
const button = document.querySelector("#juntar");

button.addEventListener("click", () => {

    const stageRect = stage.getBoundingClientRect();

    // Centro da área
    const centerX = stageRect.left + stageRect.width / 2;
    const centerY = stageRect.top + stageRect.height / 2;

    components.forEach((component, index) => {

        const rect = component.getBoundingClientRect();

        // Centro do componente
        const elementX = rect.left + rect.width / 2;
        const elementY = rect.top + rect.height / 2;

        // Distância até o centro
        const moveX = centerX - elementX;
        const moveY = centerY - elementY;

        // Define os valores para o CSS
        component.style.setProperty("--move-x", `${moveX}px`);
        component.style.setProperty("--move-y", `${moveY}px`);

        component.style.setProperty("--delay", `${index * 100}ms`);

        // Pequena rotação para dar dinamismo
        component.style.setProperty(
            "--rotation",
            `${index % 2 === 0 ? 15 : -15}deg`
        );

        component.classList.add("assembled");

    });

});