document.addEventListener('DOMContentLoaded', () => {
    const botonguardar = document.getElementById("buttonText");

    botonguardar.addEventListener('click', () => {
        const inputText = document.getElementById("inputText").value;
        localStorage.setItem("data", inputText);
    });
});
