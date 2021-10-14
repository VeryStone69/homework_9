
    function getAlpha() {
        let letters = document.querySelectorAll(`section p:nth-child(odd)`);
        let s = "";
        for (i = 0; i < letters.length; i++) {
            s += `${letters[i].textContent}`
        }
        result.innerHTML = s;

    }


    function getStyle() {
        let style1 = document.querySelectorAll(`section p`);
        for (i=0; i < style1.length; i++) {

            style1[i].style.cssText =
            `
                border: 2px solid red;
                font-weight: 600;
                color: blue;
                font-size: 1.2em;
            `
        }
    }