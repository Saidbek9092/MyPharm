const mobileSearchIcon = document.getElementById('mobile-search-icon');
const mobileSearchBlock = document.getElementById('mobile-search-block');
mobileSearchIcon.addEventListener('click', () => {
    mobileSearchBlock.classList.toggle('d-none');
});

const sidebarOpener = document.getElementById('sidebar-opener');
const wrapper = document.getElementById('wrapper');
sidebarOpener.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.toggle('toggled');
});
