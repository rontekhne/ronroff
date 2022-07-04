function header()
{
    let h = `
    <header>
        <nav>
            <ul>
                <li class="logo"><a href="https://rontekhne.github.io/ronroff">RonRoff</a></li>
                <div class="menu-link">
                    <li><a href="https://rontekhne.github.io/ronroff/about.html">sobre</a></li>
                    <li><a href="https://rontekhne.github.io/ronroff/contact.html">contato</a></li>
                </div>
            </ul>
        </nav>
    </header>
    `;   

    document.getElementById("header").innerHTML = h;
}

header();
