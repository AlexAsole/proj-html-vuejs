let bar = document.getElementsByClassName('header-bar');
let button = document.getElementsByClassName('top-button');

function whiteBar() {
    if (window.pageYOffset > 60) {
        bar[0].classList.add('white-bar');
        button[0].style.display = 'flex';
    } else {
        bar[0].classList.remove('white-bar');
        button[0].style.display = 'none'
    }
}

new Vue({
    el: '#root',
    data: {
        menu: [
            'HOME',
            'SHOP',
            'ABOUT',
            'GALLERY',
            'LOCATIONS',
            'JOURNAL',
            'CONTACT',
            'MY ACCOUNT'
        ]
    },
    methods: {
        toUp: function() {
            let position = window.pageYOffset;
            if (position > 0) {
                window.scrollTo(0,0)
            }
        },
        next: function() {

        }
    }
})
Vue.config.devtools = true;