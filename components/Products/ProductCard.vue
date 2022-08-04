<template>
  <transition name="fade">
    <div class="product-card">
      <div class="product-card__img">
        <img :src="linkImg" alt="">
      </div>
      <div class="product-card__info">
        <div class="">
          <div class="product-card__name">
            {{ name }}
          </div>
          <div class="product-card__description">
            {{ description }}
          </div>
        </div>
        <div class="product-card__price">
          {{ price }} руб
        </div>
      </div>
      <div class="product-card__delete" @click="$emit('delete')">
        <img src="@/assets/img/icons/basket.svg" alt="">
      </div>
    </div>
  </transition>
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
      type: Number,
      default: null
    },
    linkImg: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.product-card {
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  color: #3f3f3f;
  position: relative;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.3);
  }

  &:hover &__delete {
    opacity: 1;
  }

  &__delete {
    position: absolute;
    padding: 8px;
    top: -8px;
    right: -8px;
    display: flex;
    opacity: 0;
    background: #FF8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: all .3s;

    &:hover {
      opacity: 1;
    }
  }

  &__name {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
  }

  &__info {
    padding: 16px;
    padding-bottom: 24px;
    min-height: 172px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__price {
    margin-top: 32px;
    font-weight: 600;
    font-size: 24px;
  }

  &__img {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    & img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
