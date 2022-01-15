const change = ()=>{

    const vert = document.querySelector('#graph1');
    const horiz = document.querySelector('#graph2');
    const titleVert = document.querySelector('#title-vert');
    const titleHoriz = document.querySelector('#title-horiz');

    const toggle1 = ()=>{
        vert.style.display = "none"
        horiz.style.display = "flex"

        titleVert.style.display = "none"
        titleHoriz.style.display = "block"
    }

    const toggle2 = ()=>{
        horiz.style.display = "none"
        vert.style.display = "flex"

        titleVert.style.display = "block"
        titleHoriz.style.display = "none"
    }

    if (horiz.style.display === "none" && titleHoriz.style.display === "none") {
        toggle1();
    } else {
        toggle2();
    }

}

const toggle = () => setInterval(change,10000);