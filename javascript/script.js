
const app = new Vue ({
    el : '#root',
    data: {
        activeIndex: 0,
        arrSlides: [
            {
                title:'Svezia',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image:'img/01.jpg',
            },

            {
                title:'Svizzera',
                text:'Lorem ipsum',
                image:'img/02.jpg',
            },

            {
                title:'Gran Bretagna',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                image:'img/03.jpg',
            },

            {
                title:'Germania',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                image:'img/04.jpg',
            },

            {
                title:'Paradise',
                text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                image:'img/05.jpg',
            },
        ],
    },
    methods: {
        next() {
            if (this.activeIndex == this.arrSlides.length - 1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
        previous() {
            if (this.activeIndex == 0) {
                this.activeIndex = this.arrSlides.length - 1;
            } else {
                this.activeIndex--;
            }
        },

        ogniTreSecondi() {
            setInterval(this.next, 300);
        }
    },

    mounted () {
        this.ogniTreSecondi()
    }
        
});

console.log(app);