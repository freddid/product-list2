<template>
  <div class="products">
    <div class="products__cards">
      <ProductCard
        v-for="product in getProducts"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :link-img="product.linkImg"
      />
    </div>
  </div>
</template>
<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductsBlcok',
  components: { ProductCard },
  computed: {
    getProducts () {
      return this.$store.getters['products/GET_PRODUCTS']
    }
  }
}
</script>
<style lang="scss">
.products {
   width: 100%;

   &__cards {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(3, 1fr);

      @media (max-width: 1280px) {
         grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 992px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }
}
</style>
