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
      <div id="daily" class="col-12">
        <p class="daily">7d:</p>
      </div>
      <div class="col-12 food">
        <p>{{ DailyFood }}</p>
      </div>
      <div class="col-12 gold">
        <p>{{ DailyGold }}</p>
      </div>
      <div class="col-12 stone">
        <p>{{ DailyStone }}</p>
      </div>
      <div class="col-12 wood">
        <p>{{ DailyWood }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    DailyFood() {
      return this.$store.state.foodqty * 7;
    },
    DailyGold() {
      return this.$store.state.goldqty * 7;
    },
    DailyStone() {
      return this.$store.state.stoneqty * 7;
    },
    DailyWood() {
      return this.$store.state.woodqty * 7;
    },
  },
};
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
p {
  font-size: 40px;
  font-weight: bold;
}
#daily {
  height: 280px;
  font-size: 50px;
}
.food {
  color: rgb(51, 168, 214);
}
.gold {
  color: rgb(27, 238, 108);
}
.stone {
  color: rgb(215, 213, 218);
}
.wood {
  color: rgb(167, 127, 42);
}
</style>