<template>
  <div :class="{ error: errorForm }" class="form-group">
    <label :class="{ required: !isTextarea }" :for="label"> <span>{{ label }}</span> </label>

    <textarea
      v-if="isTextarea"
      :id="label"
      :placeholder="placeholder"
      :value="val"
      rows="5"
      @input="$emit('update:val', $event.target.value)"
    />

    <input
      v-else
      :id="label"
      :type="type"
      :value="val"
      :placeholder="placeholder"
      @input="$emit(`update:val`, $event.target.value)"
    >
  </div>
</template>
<script>
export default {
  props: {
    val: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    isTextarea: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    errorForm () {
      return !this.val && this.error
    }
  }
}
</script>
<style lang="scss" scoped>
.form-group {
  margin-bottom: 16px;
  position: relative;
  display: flex;
  flex-direction: column;

  &.error {
    &::before {
      content: 'Поле является обязательным';
      color: #FF8484;
      font-size: 8px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -14px;
    }

    & input {
      border: 1px solid #FF8484;
    }
  }

  & label {
    font-size: 10px;
    color: #49485E;
    margin-bottom: 4px;

    &.required span {
      position: relative;

      &::before {
        content: '';
        width: 4px;
        height: 4px;
        position: absolute;
        background: #FF8484;
        border-radius: 4px;
        right: -5px;
        top: 0px;
      }
    }
  }

  & input,
  & textarea {
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    padding: 10px 16px;
    outline: none;
    transition: all .3s;

    &:hover {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, .6);
    }

    &::placeholder {
      font-size: 12px;
      color: #b4b4b4;
    }
  }
}
</style>
