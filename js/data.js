document.addEventListener('DOMContentLoaded', () => {
    
    const datatext = document.getElementById("data");

    let guardado = localStorage.getItem("data");

    datatext.textContent = guardado


    


});
