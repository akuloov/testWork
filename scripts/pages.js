const pages = document.querySelectorAll('.customers__page');
pages.forEach((page) => {
    page.addEventListener('click', () => {
        pages.forEach((anotherPage) => {
            anotherPage.classList.remove('customers__page--active');
        })
        page.classList.add('customers__page--active');
    })
})

window.onload = () => {
    let input = document.querySelector('#input');
    input.oninput = function () {
        let value = this.value.trim();
        let list = document.querySelectorAll('.table__customer');

        if (value) {
            list.forEach((elem) => {
                if (elem.innerText.search(value) === -1) {
                    elem.classList.add('hide');
                }
            });
        } else {
            list.forEach((elem) => {
                elem.classList.remove('.hide');
            });
        }
    }
}