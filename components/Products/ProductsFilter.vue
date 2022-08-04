<template>
  <div :class="{ active: toggle }" class="filter">
    <button class="filter__select" @click="toggle = !toggle">
      {{ filterVal.text }}
      <ArrowFilter class="filter__arrow" />
    </button>
    <ul class="filter__els">
      <li v-for="filter in filters" :key="filter.val" class="filter__el" @click="filtration(filter)">
        {{ filter.text }}
      </li>
    </ul>
  </div>
</template>
<script>
import ArrowFilter from '../icons/ArrowFilter.vue'
export default {
  components: { ArrowFilter },
  props: {
    filterVal: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      toggle: false,
      filters: [
        { text: 'По цене min', val: 'min' },
        { text: 'По цене max', val: 'max' },
        { text: 'По наименованию', val: 'name' }
      ]
    }
  },
  methods: {
    filtration (filter) {
      this.toggle = false
      this.$emit('update:filterVal', filter)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  font-size: 12px;
  position: relative;
  display: flex;
  justify-content: end;
  width: 150px;

  @media (max-width: 767px) {
    width: 100%;
  }

  &__arrow {
    transition: all .3s;

    &:hover path {
      stroke: #000;
    }

    .active & {
      transform: rotate(180deg);

      & path {
        stroke: #000;
      }
    }
  }

  &__select {
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 4px;
    border: none;
    text-align: left;
    width: 100%;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #B4B4B4;
    transition: all .3s;

    .active &,
    &:hover {
      color: #000;
    }
  }

  &__els {
    position: absolute;
    list-style: none;
    width: 100%;
    z-index: 5;
    padding: 0;
    top: 30px;
    align-items: flex-start;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    max-height: 0px;
    overflow: hidden;
    transition: max-height .4s ease;

    .active & {
      max-height: 300px
    }
  }

  &__el {
    cursor: pointer;
    padding: 10px 16px;
    width: 100%;

    &:hover {
      background: rgba(0, 0, 0, 0.166);
    }
  }
}
</style>
