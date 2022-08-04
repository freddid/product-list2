<template>
  <div class="page-products">
    <div class="wrapper">
      <div class="page-products__form">
        <FormAddProduct />
      </div>
      <div class="page-products__products">
        <Products v-if="showProloader" />
      </div>
    </div>
  </div>
</template>

<script>
import FormAddProduct from '~/components/Form/FormAddProduct.vue'
import Products from '~/components/Products/Products.vue'
export default {
  name: 'IndexPage',
  components: { FormAddProduct, Products },
  data () {
    return {
      showProloader: false
    }
  },
  watch: {
    '$store.state.products.products' () {
      localStorage.setItem('products', JSON.stringify(this.$store.state.products.products))
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => {
        this.$nuxt.$loading.finish()
        this.showProloader = true
      }, 1000)
    })

    if (localStorage.getItem('products')) {
      this.$store.commit('products/ADD_PRODUCTS', JSON.parse(localStorage.getItem('products')))
    }
  }
}
</script>

<style lang="scss" scoped>
.page-products {
  background: rgba(255, 254, 251, 0.8);
  padding: 32px;

  @media (max-width: 480px) {
    padding: 15px;
  }

  & .wrapper {
    display: flex;
    margin: 0 auto;
    max-width: 1380px;

    @media (max-width: 1280px) {
      max-width: 1024px;
    }

    @media (max-width: 992px) {
      max-width: 700px;
    }

    @media (max-width: 767px) {
      max-width: 332px;
      flex-direction: column;
    }
  }

  &__form {
    min-width: 332px;

    @media (max-width: 767px) {
      margin-bottom: 16px;
    }

    @media (max-width: 480px) {
      min-width: auto;
    }
  }

  &__products {
    width: 100%;
    margin-left: 16px;

    @media (max-width: 767px) {
      margin: 0;
    }
  }
}
</style>
