<template>
  <div class="container slotbox">
    <div class="row">
      <div class="col-12">
        <select name="building1" id="building-select"></select>
      </div>
      <div class="col-12">
        <select name="rarity1" id="rarity-select"></select>
      </div>
      <div class="col-12">
        <select name="level1" id="level-select"></select>
      </div>
      <div class="col-12">
        <img
          src="@/assets/img/logo.png"
          alt="@/assets/img/logo.png"
          class="logo"
        />
      </div>
      <div class="col-12">
        <img
          src="@/assets/img/food.png"
          alt="@/assets/img/food.png"
          class="img"
        />
      </div>
      <div class="col-12">
        <img
          src="@/assets/img/gold.png"
          alt="@/assets/img/gold.png"
          class="img"
        />
      </div>
      <div class="col-12">
        <img
          src="@/assets/img/stone.png"
          alt="@/assets/img/stone.png"
          class="img"
        />
      </div>
      <div class="col-12">
        <img
          src="@/assets/img/wood.png"
          alt="@/assets/img/wood.png"
          class="img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.slotbox {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5 0 5 0;
}
option {
  text-align: center;
  font-size: 24px;
  color: transparent;
  background-color: transparent;
  border: none;
}
select {
  color: transparent;
  background-color: transparent;
  width: 90%;
  font-weight: bold;
  font-size: 24px;
  padding: 5px;
  margin: 5px;
  border: none;
}

.logo {
  max-width: 200px;
  align-items: center;
}
.img {
  height: 85px;
}
</style>