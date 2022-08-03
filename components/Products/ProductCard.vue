<template>
  <div class="product-card">
    <div class="product-card__img">
      <img :src="linkImg" alt="">
    </div>
    <div class="product-card__info">
      <div class="product-card__name">
        {{ name }}
      </div>
      <div class="product-card__description">
        {{ description }}
      </div>
      <div class="product-card__price">
        {{ price }} руб
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    linkImg: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.product-card {
   background: #fffefb;
   box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
   border-radius: 4px;
   color: #3f3f3f;
   overflow: hidden;

   &__name {
      margin-bottom: 16px;
      font-weight: 600;
      font-size: 20px;
   }

   &__info {
      padding: 16px;
      padding-bottom: 24px;
   }

   &__price {
      margin-top: 32px;
      font-weight: 600;
      font-size: 24px;
   }

   &__img {
      width: 100%;
      height: 200px;

      & img {
         object-fit: cover;
         height: 100%;
         width: 100%;
      }
   }
}
</style>
