const vm = new Vue({
    el: "#app",
    components: { products, cart },
    data: {
        products: [
            {
                "id": 1,
                "title": "Sedona",
                "description": "Информационный сайт\n для туристов",
                "price": 9900,
                "img": "./img/img-sedona.jpg"
            },
            {
                "id": 2,
                "title": "Pink App",
                "description": "Продуктовый лендинг приложения для iOS и Android",
                "price": 10900,
                "img": "./img/img-pink.jpg"
            },
            {
                "id": 3,
                "title": "Barbershop",
                "description": "Сайт салона красоты. Для мужчин, да.",
                "price": 12900,
                "img": "./img/img-barbershop.jpg"
            },
            {
                "id": 4,
                "title": "Mishka",
                "description": "Интернет-магазин вязаных игрушек",
                "price": 8900,
                "img": "./img/img-mishka.jpg"
            },
            {
                "id": 5,
                "title": "A Plus",
                "description": "Лендинг курсов повышения квалификации",
                "price": 7900,
                "img": "./img/img-aplus.jpg"
            },
            {
                "id": 6,
                "title": "Кваст",
                "description": "Промо-сайт производителя крафтового кваса",
                "price": 5900,
                "img": "./img/img-kvast.jpg"
            }
        ],
        cartItems: []
    },
    methods: {
        addProduct(item) {
            let find = this.cartItems.find(el => el.id === item.id);
            if(find){
                find.quantity++;
            } else {
                const prod = Object.assign({quantity: 1}, item);
                this.cartItems.push(prod);
            }
        },
        removeProduct(item) {
            if(item.quantity>1){
                item.quantity--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
        }
    }
})