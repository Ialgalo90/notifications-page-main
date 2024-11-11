const markAllRead = document.querySelector('#mark-all-read');
const numberElement = document.querySelector('.number');
const notReadElements = document.querySelectorAll('.not-read');
const posts = document.querySelectorAll('.post');

numberElement.innerHTML = notReadElements.length;

posts.forEach((post) => {
    post.addEventListener('click', () => {
        post.querySelector('.not-read').classList.remove('not-read');
        post.classList.remove('post-not-read');
        updateNotifications();
    })
})

markAllRead.addEventListener('click', () => {
    notReadElements.forEach((notReadElement) => {
        notReadElement.classList.remove('not-read');
    })
    posts.forEach((post) => {
        post.classList.remove('post-not-read');
    })    
    updateNotifications();
})

const updateNotifications = () => {
    const notReadElementsActual = document.querySelectorAll('.not-read');
    numberElement.innerText = notReadElementsActual.length;
}