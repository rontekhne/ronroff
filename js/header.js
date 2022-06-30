function header()
{
    let h = `
    <header>
        <nav>
            <ul>
                <li class="logo"><a href="">RonRoff</a></li>
                <li class="menu-link"><a href="">sobre</a></li>
                <li class="menu-link"><a href="">contato</a></li>
            </ul>
        </nav>
    </header>
    `;   

    document.getElementById("header").innerHTML = h;
}

header();
