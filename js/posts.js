(async() => {
    let id = [];

    for (let i = 1; i <= 3; i++) {
        const url = `https://raw.githubusercontent.com/rontekhne/ronroffposts/main/post${i}`;
        const response = await fetch(url);
        const data = await response.text();

        let p = preview(data); // extrai uma amostra
        p += "..."; 

        const section = document.createElement("section");
        section.innerHTML = 
            p + 
            `<br><button type="submit">Leia mais...</button>;`;

        const post = document.querySelector("#posts");
        post.appendChild(section);
    }
})()

function preview(str) {
    if (str.length > 250) {
        return str.slice(0, 250);
    }

    return str;
}
