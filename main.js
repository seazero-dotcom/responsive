const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active'); /*마우스를 클릭했을 때 액티브가 있다면 빼주고 없다면 액티브를 추가해준다 */
    icons.classList.toggle('active');
});

