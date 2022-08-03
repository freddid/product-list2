<template>
  <div class="form-group">
    <label class="" :for="label">{{ label }}</label>

    <textarea
      v-if="isTextarea"
      :id="label"
      :placeholder="placeholder"
      :value="val"
      cols="30"
      rows="5"
      @input="$emit('update:val', $event.target.value)"
    />

    <input v-else :id="label" :value="val" :placeholder="placeholder" @input="$emit(`update:val`, $event.target.value)">
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
    isTextarea: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
.form-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  & label {
    font-size: 10px;
    color: #49485E;
    margin-bottom: 4px;
  }

  & input,
  & textarea {
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    padding: 10px 16px;
    outline: none;

    &::placeholder {
      font-size: 12px;
      color: #b4b4b4;
    }
  }
}
</style>
