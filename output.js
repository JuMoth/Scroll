(function() {
    const outputElem = document.querySelector('.output');
    const ilbuniElem = document.querySelector('.ilbuni');

    function showValue() {
        // outputElem.innerHTML = window.scrollY;
        // outputElem.innerHTML = ilbuniElem.offsetTop;
        let posY = ilbuniElem.getBoundingClientRect().top;
        outputElem.innerHTML = posY;

        if(posY < window.innerHeight * 0.2) {
            ilbuniElem.classList.add('zoom');
        } else {
            ilbuniElem.classList.remove('zoom');
        }
    }

    window.addEventListener('scroll', () => {
        showValue();
    })
})();