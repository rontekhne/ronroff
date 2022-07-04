function header()
{
    let h = `
    <header>
        <nav>
            <ul>
                <li class="logo"><a href="https://rontekhne.github.io/ronroff">RonRoff</a></li>
                <div class="menu-link">
                    <li><a href="">sobre</a></li>
                    <li><a href="">contato</a></li>
                </div>
            </ul>
        </nav>
    </header>
    `;   

    document.getElementById("header").innerHTML = h;
}

header();
