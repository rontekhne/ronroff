(async() => {
    const currentUrl = window.location.search;
    const urlParams = new URLSearchParams(currentUrl);
    const id = urlParams.get('id');
    console.log(id);

    const url = `https://raw.githubusercontent.com/rontekhne/ronroffposts/main/post${id}`;
    const response = await fetch(url);
    const data = await response.text();

    const section = document.createElement("section");
    section.innerHTML = data;

    const post = document.querySelector("#post");
    post.appendChild(section);
})()
