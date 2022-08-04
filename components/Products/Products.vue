<template>
  <div class="products">
    <div class="products__filter">
      <ProductsFilter :filter-val.sync="activeFilter" />
    </div>
    <div class="products__cards">
      <ProductCard
        v-for="product in productsFilter"
        :key="product.id"
        :name="product.nameProduct"
        :description="product.description"
        :price="product.price"
        :link-img="product.linkImg"
        @delete="deleteProduct(product.id)"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import ProductCard from './ProductCard.vue'
import ProductsFilter from './ProductsFilter.vue'
export default {
  name: 'ProductsBlcok',
  components: { ProductCard, ProductsFilter },
  data () {
    return {
      activeFilter: { text: 'По наименованию', val: 'name' }
    }
  },
  computed: {
    productsFilter () {
      let fanSort = (a, b) => a.nameProduct.localeCompare(b.nameProduct)

      if (this.activeFilter.val === 'min') { fanSort = (a, b) => a.price - b.price }
      if (this.activeFilter.val === 'max') { fanSort = (a, b) => b.price - a.price }
      return [...this.products].sort(fanSort)
    },
    ...mapGetters({ products: 'products/GET_PRODUCTS' })
  },
  methods: {
    ...mapMutations({ deleteProduct: 'products/DELETE_PRODUCT' })
  }
}
</script>
<style lang="scss" scoped>
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

  &__filter {
    margin-bottom: 16px;
    display: flex;
    justify-content: end;
  }
}
</style>
