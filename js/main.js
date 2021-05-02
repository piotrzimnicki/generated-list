function createList (liNr) {
    let divEl = document.createElement('div');
    document.body.appendChild(divEl);
    let ulList = document.createElement('ul');
   divEl.appendChild(ulList)

    for (let i = 1; i <= liNr; i++) {
        let liEl = document.createElement('li');
        ulList.appendChild(liEl);
        liEl.textContent = `${i}`
    }
}
createList(8);

function styleAndText () {
    let lastLi = document.querySelector('ul li:last-child')
    lastLi.classList.style.cssText = "color:#000;font-weight: 600;";
    lastLi.textContent = "Ostatni element";
}

styleAndText();