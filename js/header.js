function header()
{
    let h = `
    <header>
        <nav>
            <h1>RonRoff</h1>
            <ul>
                <li><a href="">sobre</a></li>
                <li><a href="">contato</a></li>
            </ul>
        </nav>
    </header>
    `;   

    document.getElementById("header").innerHTML = h;
}

header();