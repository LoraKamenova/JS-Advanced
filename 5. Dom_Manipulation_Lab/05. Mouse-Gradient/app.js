function attachGradientEvents() {
    let result = document.getElementById('result');
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let area = event.offsetX / (event.target.clientWidth - 1);
        area = Math.trunc(area * 100);
        result.textContent = area + "%";
    }
    function gradientOut(event) {
        result.textContent = "";
    }
}