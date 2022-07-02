function header()
{
    let h = `
    <header>
        <nav>
            <ul>
                <li class="logo"><a href="">
                    <span style="color:#F43545">R</span>
                    <span style="color:#FA8901">o</span>
                    <span style="color:#FAD717">n</span>
                    <span style="color:#00BA71">R</span>
                    <span style="color:#00C2DE">o</span>
                    <span style="color:#00418D">f</span>
                    <span style="color:#5F2879">f</span>
                </a></li>
                <li class="menu-link"><a href="">sobre</a></li>
                <li class="menu-link"><a href="">contato</a></li>
            </ul>
        </nav>
    </header>
    `;   

    document.getElementById("header").innerHTML = h;
}

header();
