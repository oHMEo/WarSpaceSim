<template>
  <div class="row topbar">
    <img
      src="@/assets/img/wax.png"
      alt=""
      class="col-lg-1 col-md-2 col-sm-6 col-xs-12 img"
    />
    <p class="col-lg-1 col-md-2 col-sm-6 col-xs-12 text">: $</p>
    <img
      src="@/assets/img/wood.png"
      alt=""
      class="col-lg-1 col-md-2 col-sm-6 col-xs-12 img"
    />
    <p class="col-lg-1 col-md-2 col-sm-6 col-xs-12 text">: wax</p>
    <img
      src="@/assets/img/stone.png"
      alt=""
      class="col-lg-1 col-md-2 col-sm-6 col-xs-12 img"
    />
    <p class="col-lg-1 col-md-2 col-sm-6 col-xs-12 text">: wax</p>
    <img
      src="@/assets/img/gold.png"
      alt=""
      class="col-lg-1 col-md-2 col-sm-6 col-xs-12 img"
    />
    <p class="col-lg-1 col-md-2 col-sm-6 col-xs-12 text">: wax</p>
    <img
      src="@/assets/img/food.png"
      alt=""
      class="col-lg-1 col-md-2 col-sm-6 col-xs-12 img"
    />
    <p class="col-lg-1 col-md-2 col-sm-6 col-xs-12 text">: wax</p>
    <p class="col-lg-1 col-md-2 col-sm-6 col-xs-12 text">Fee :</p>
    <p class="col-lg-1 col-md-2 col-sm-6 col-xs-12 text">? %</p>
    <!--<button
      type="button"
      @click="click"
      class="col-lg-1 col-md-2 col-sm-6 col-xs-12 btn btn-warning logbtn"
    >
      Log In
    </button>-->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>


<style scoped>
.img {
  margin: 5 0 5 0;
  max-width: 80px;
}
.text {
  text-align: center;
  font-size: 20px;
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: center;
  color: beige;
  background-color: rgb(36, 36, 36);
}
.logbtn {
  color: rgb(36, 36, 36);
  font-weight: bold;
  font-size: 24px;
}
</style>