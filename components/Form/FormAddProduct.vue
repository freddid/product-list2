<template>
  <div class="form-add-product">
    <h1 class="title">
      Добавление товара
    </h1>
    <form class="form-add-product__form">
      <FormGroup :val.sync="nameProduct" label="Наименование товара" placeholder="Введите наименование товара" />

      <FormGroup
        :val.sync="description"
        :is-textarea="true"
        label="Описание товара"
        placeholder="Введите описание товара"
      />

      <FormGroup :val.sync="linkImg" label="Ссылка на изображение товара" placeholder="Введите ссылку" />

      <FormGroup :val.sync="price" label="Цена товара" type="number" placeholder="Введите цену" />
      <button :disabled="btnActive" class="form-add-product__btn">
        Добавить товар
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
      price: ''
    }
  },
  computed: {
    btnActive () {
      return !(this.nameProduct && this.linkImg && this.price)
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

    &:disabled {
      color: #b4b4b4;
      background: #eeeeee;
    }
  }
}
</style>
