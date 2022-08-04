<template>
  <div :class="{ success: success }" class="form-add-product">
    <h1 class="title">
      Добавление товара
    </h1>
    <form class="form-add-product__form">
      <FormGroup
        :error="error"
        :val.sync="nameProduct"
        label="Наименование товара"
        placeholder="Введите наименование товара"
      />

      <FormGroup
        :val.sync="description"
        :is-textarea="true"
        label="Описание товара"
        placeholder="Введите описание товара"
      />

      <FormGroup :error="error" :val.sync="linkImg" label="Ссылка на изображение товара" placeholder="Введите ссылку" />

      <FormGroup :error="error" :val.sync="price" label="Цена товара" type="number" placeholder="Введите цену" />

      <button :class="{ disabled: btnActive }" class="form-add-product__btn" @click.prevent="addProduct">
        {{ success ? 'Успешно довален' : 'Добавить товар' }}
      </button>
    </form>
  </div>
</template>
<script>
import FormGroup from './FormGroup.vue'
export default {
  name: 'FormAddProduct',
  components: { FormGroup },
  data () {
    return {
      nameProduct: '',
      description: '',
      linkImg: '',
      price: '',
      success: false,
      error: false
    }
  },
  computed: {
    btnActive () {
      return !(this.nameProduct && this.linkImg && this.price)
    }
  },
  methods: {
    addProduct () {
      if (!this.btnActive) {
        this.error = false

        this.$store.commit('products/ADD_PRODUCT', {
          id: new Date().valueOf(),
          nameProduct: this.nameProduct,
          linkImg: this.linkImg,
          price: +this.price,
          description: this.description
        })

        this.success = true
        setTimeout(() => {
          this.success = false
          this.description = this.price = this.linkImg = this.nameProduct = ''
        }, 2000)
      } else {
        this.error = true
      }
    }
  }
}
</script>
<style lang="scss">
.form-add-product {
  @media (min-width: 767px) {
    position: fixed;
    width: 332px;
  }

  & .title {
    font-weight: 600;
    font-size: 28px;
    margin: 0;
    margin-bottom: 16px;
  }

  &__form {
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 24px;
    max-width: 320px;
  }

  &__btn {
    border-radius: 10px;
    text-align: center;
    padding: 10px 0;
    border: none;
    font-weight: 600;
    font-size: 12px;
    width: 100%;
    margin-top: 8px;
    background: #7bae73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    color: #fff;
    transition: all 0.3s;

    .success & {
    color: #7bae73;
    background: #fff;
    box-shadow: 0px 2px 14px 7px rgb(157 255 0 / 20%);
    }

    &.disabled {
      color: #b4b4b4;
      background: #eeeeee;
    }
  }
}
</style>
