const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        navItems.forEach((anotherNavItem) => {
            anotherNavItem.classList.remove('nav-item--active');
            if (anotherNavItem.querySelector('.nav-item__chevron')) {
                anotherNavItem.querySelector('.nav-item__chevron').classList.remove('nav-item__chevron--active');
            }
            const anotherNavItemContainer = anotherNavItem.querySelector('.nav-item__container');
            anotherNavItemContainer.querySelector('.nav-item__icon').classList.remove('nav-item__icon--active');
            anotherNavItemContainer.querySelector('.nav-item__text').classList.remove('nav-item__text--active');
        })
        navItem.classList.add('nav-item--active');
        if (navItem.querySelector('.nav-item__chevron')) {
            navItem.querySelector('.nav-item__chevron').classList.add('nav-item__chevron--active');
        }
        const navItemContainer = navItem.querySelector('.nav-item__container');
        navItemContainer.querySelector('.nav-item__icon').classList.add('nav-item__icon--active');
        navItemContainer.querySelector('.nav-item__text').classList.add('nav-item__text--active');
    })
})