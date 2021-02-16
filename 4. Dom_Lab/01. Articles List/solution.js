function createArticle() {

    let heading = document.createElement("h3");
    let content = document.createElement("p");
    let article = document.createElement("article");

    article.appendChild(heading);
    article.appendChild(content);

    let inputHeading = document.getElementById("createTitle");
    let inputContent = document.getElementById("createContent");
    let section = document.getElementById("articles");

    if(inputHeading.value !== "" && inputContent.value !== "" ) {
        heading.innerHTML = inputHeading.value;
        content.innerHTML = inputContent.value;
        section.appendChild(article);

        inputHeading.value = '';
        inputContent.value = '';
    }
}