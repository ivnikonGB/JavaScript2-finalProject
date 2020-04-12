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
                @click="$emit('remove-product', cart_item)"
            >&times;</button>
        </div>
    </div>
    `
}

const cart = {
    components: {'cart-item': cartItem},
    //props: ['cartItems'],
    data() {
        return {
            cartShown: false,
            cartItems: []
        }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    this.$data.cartItems.push(item);
                }
            });
    },
    methods: {
        addProduct(item){
            console.log("Add Product");
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                        }
                    })
            }
        },
        removeProduct(item){
            if(item.quantity>1){
                item.quantity--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
        }
    },
    template: `
    <div class="cart">
        <a v-on:click="cartShown = !cartShown">
            Корзина
            <span v-if="cartItems.length">({{cartItems.length}})</span>
        </a>
        <div class="cart-block" v-show="cartShown">
            <cart-item v-for="item of cartItems"
                v-bind:key="item.id_product"
                v-bind:cart_item="item"
                v-on:remove-product="removeProduct"
            ></cart-item>
        </div>
    </div>
    `
}