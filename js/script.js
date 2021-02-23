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
        }
    }
})
Vue.config.devtools = true;