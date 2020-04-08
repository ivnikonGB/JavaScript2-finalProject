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
        v-on:click="$parent.$emit('add-product', item)"
      >{{ item.price }} руб.</button>
    </div>
  </li>`
}

const products = {
    components: { product },
    props: ['products'],
    // data() {
    //     return {
    //         products: []
    //     }
    // },
    template: `<ul class="catalog-list">
        <product 
            v-for="item of products"
            :key="item.id"
            :item="item"
        ></product>
        </ul>       
        `
}