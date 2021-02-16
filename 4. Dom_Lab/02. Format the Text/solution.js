function solve() {
    let text = document.getElementById("input").innerText;
    let sentences = Array.from(text.split('. '));



    let output = document.getElementById("output");

    let counter = 0;

    let paragraph = document.createElement("p");

    for (let i = 0; i < sentences.length; i++) {
        if(counter === 3) {
            output.appendChild(paragraph);
            paragraph = document.createElement("p");
            counter = 0;

        }
        paragraph.innerText += sentences[i];
        counter++;

    }
    output.appendChild(paragraph);

}