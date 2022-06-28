(async() => {
    let id = [];

    for (let i = 1; i <= 3; i++) {
        const url = `https://raw.githubusercontent.com/rontekhne/ronroffposts/main/post${i}`;
        const response = await fetch(url);
        const data = await response.text();

        let p = preview(data); // extrai uma amostra
        p += "..."; 

        const div = document.createElement("div");
        div.innerHTML = p;

        const post = document.querySelector("#posts");
        post.appendChild(div);
    }
})()

function preview(str) {
    if (str.length > 250) {
        return str.slice(0, 250);
    }

    return str;
}
