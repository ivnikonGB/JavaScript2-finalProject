const cartItem = {
    props: ['cart_item'],
    template: `
    <div class="cart-item">
        <div class="product-bio">
            <img 
                width="52"
                height="82"
                v-bind:src="cart_item.img"
                v-bind:alt="cart_item.title">
            <div class="product-desc">
                <p class="product-title">{{ cart_item.title }}</p>
                <p class="product-quantity">Количество: {{ cart_item.quantity }}</p>
                <!-- <p class="product-single-price"> {{ cart_item.price }} руб.</p> -->
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{ cart_item.quantity * cart_item.price }}</p>
            <button 
                class="button del-button" 
                @click="$parent.$emit('remove-product', cart_item)"
            >&times;</button>
        </div>
    </div>
    `
}

const cart = {
    components: {'cart-item': cartItem},
    props: ['cartItems'],
    data() {
        return {
            cartShown: false,
            // cartItems: [
            // {
            //     "id": 1,
            //     "title": "Sedona",
            //     "description": "Информационный сайт\n для туристов",
            //     "price": 9900,
            //     "img": "./img/img-sedona.jpg"
            // },
            // {
            //     "id": 2,
            //     "title": "Pink App",
            //     "description": "Продуктовый лендинг приложения для iOS и Android",
            //     "price": 10900,
            //     "img": "./img/img-pink.jpg"
            // }]
        }
    },
    template: `
    <div class="cart">
        <a v-on:click="cartShown = !cartShown">
            Корзина
            <span v-if="cartItems.length">({{cartItems.length}})</span>
        </a>
        <div class="cart-block" v-show="cartShown">
            <cart-item v-for="product of cartItems"
                v-bind:key="product.id_product"
                v-bind:cart_item="product"
            ></cart-item>
        </div>
    </div>
    `
}