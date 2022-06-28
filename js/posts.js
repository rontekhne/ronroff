(async() => {
    for (let i = 1; i <= 3; i++) {
        const url = `https://raw.githubusercontent.com/rontekhne/ronroffposts/main/post${i}`;
        const response = await fetch(url);
        const data = await response.text();
        
        const div = document.createElement("div");
        div.innerHTML = data;

        const post = document.querySelector("#posts");
        post.appendChild(div);
    }
})()
