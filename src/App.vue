<template>
  <section>
    <vue-progress-bar></vue-progress-bar>
    <div class="container">
      <div class="header">calculator</div>
      <div class="main">
        <div class="main-top">
          <p class="title">Enter the numbers</p>
          <input
            v-model="firstNumber"
            type="text"
            class="input"
            placeholder="Number 1"
          />
          <p class="warning" v-if="validate.firstNumber">
            {{ validate.firstNumber[0] }}
          </p>
          <input
            v-model="secondNumber"
            type="text"
            class="input"
            placeholder="Number 2"
          />
          <p class="warning" v-if="validate.secondNumber">
            {{ validate.secondNumber[0] }}
          </p>
          <div class="submit" @click="submit">Sum</div>
        </div>
        <div class="main-bottom">
          <p>Results</p>
          <div class="result-box">{{ sum }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("calculator", ["loading", "sum", "validate"]),
  },
  data: () => ({ firstNumber: null, secondNumber: null }),
  methods: {
    submit() {
      this.$store.dispatch("calculator/calcSum", {
        firstNumber: this.firstNumber,
        secondNumber: this.secondNumber,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 2% 30% 10% 30%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.5px solid #dcdfe6;
}
.header {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  background-color: #c10708;
  color: #ffffff;
  padding-top: 25px;
  padding-bottom: 25px;
}
.main {
  margin: 10% 20% 20% 20%;
  padding: 10%;
  border: 0.5px solid #dcdfe6;
  box-shadow: 2px 6px 10px #00000029;
  border-radius: 4px;

  &-top {
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    border-bottom: solid 2px #c10708;
    color: #a4a4a4;
  }

  &-bottom {
    margin-top: 50px;
    text-align: center;
    color: #a4a4a4;
  }
}
.title {
  text-align: center;
  font-size: 16px;
}
.input {
  line-height: 36px;
  border: 1px solid #a4a4a4;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 2px;
  margin-top: 10px;
  outline: none;
  color: #a4a4a4;
  font-size: 16px;
}
.submit {
  margin-top: 10px;
  cursor: pointer;
  background: #c10708 0% 0% no-repeat padding-box;
  border-radius: 2px;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
}
.result-box {
  border: 1px solid #c10708;
  border-radius: 2px;
  line-height: 36px;
}
.warning {
  color: #f56c6c;
  font-size: 12px;
  line-height: 1;
}

::placeholder {
  color: #a4a4a4;
  font-size: 12px;
  margin-left: 10px;
}

@media only screen and (max-width: 600px) {
  .container {
    margin: 2% 3% 1% 3%;
  }

  .main {
    margin: 5% 5% 20% 5%;
    padding: 5% 5% 20% 5%;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  .container {
    margin: 2% 3% 1% 3%;
  }

  .main {
    margin: 10% 10% 20% 10%;
    padding: 10% 10% 20% 10%;
  }
}
</style>
