<template>
    <el-form>
        <el-input class="el-input__test" v-model="value"></el-input>
        <el-button type="primary" @click="click">Submit</el-button>
    </el-form>
</template>

<script type="text/babel">
export default {
  name: 'ElTest',

  props: {
    value: [String, Number]
  },

  data() {
    return {};
  },

  methods: {
    click() {
      window.alert('Success');
    }
  }
};
</script>