const vm = new Vue({
    el: "#app",
    components: { products, cart },
    data: {
       
        cartItems: []
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    // this.$refs.error.text = error;
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    // this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    // this.$refs.error.text = error;
                })
        },
        // addProduct(item) {
        //     let find = this.cartItems.find(el => el.id === item.id);
        //     if(find){
        //         find.quantity++;
        //     } else {
        //         const prod = Object.assign({quantity: 1}, item);
        //         this.cartItems.push(prod);
        //     }
        // },
        // removeProduct(item) {
        //     if(item.quantity>1){
        //         item.quantity--;
        //     } else {
        //         this.cartItems.splice(this.cartItems.indexOf(item), 1);
        //     }
        // }
    }
})