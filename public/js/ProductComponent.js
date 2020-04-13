const product = {
    props: ['item'],
    template: `<li>
    <a class="catalog-image" href="#">
      <img 
        v-bind:src="item.img"
        width="358"
        height="576"
        v-bind:alt="item.title"
      >
    </a>
    <div class="catalog-item">
      <h3 class="catalog-item-title">{{ item.title }}</h3>
      <p class="catalog-item-description">{{ item.description }}</p>
      <button 
        class="button catalog-item-price"
        v-on:click="$emit('add-product', item)"
      >{{ item.price }} руб.</button>
    </div>
  </li>`
}

const products = {
    components: { product },
    // props: ['products'],
    data() {
      return {
        products: []
      }
    },
    mounted(){
      this.$parent.getJson(`/api/products`)
          .then(data => {
              for (let item of data){
                  this.$data.products.push(item);
                  //this.$data.filtered.push(item);
              }
          });
    },
    template: `<ul class="catalog-list">
        <product 
            v-for="item of products"
            :key="item.id"
            :item="item"
            @add-product="$parent.$refs.cart.addProduct"
        ></product>
        </ul>       
        `
}