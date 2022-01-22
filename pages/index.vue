<template>
  <div class="container-fluid page">
    <div class="container-fluid topbar">
      <Topbar />
    </div>
    <div class="container-fluid board">
      <div class="row slots">
        <Rssicon class="col-lg-1 col-md-2 col-sm-3 col-xs-12"> </Rssicon>
        <BuildingCard
          :cardSection="CardList"
          :SlotId="1"
          class="col-lg-1 col-md-4 col-sm-3 col-xs-12"
        ></BuildingCard>
        <BuildingCard
          :cardSection="CardList"
          :SlotId="2"
          class="col-lg-1 col-md-4 col-sm-3 col-xs-12"
        ></BuildingCard>
        <BuildingCard
          :cardSection="CardList"
          :SlotId="3"
          class="col-lg-1 col-md-4 col-sm-3 col-xs-12"
        ></BuildingCard>
        <BuildingCard
          :cardSection="CardList"
          :SlotId="4"
          class="col-lg-1 col-md-4 col-sm-3 col-xs-12"
        ></BuildingCard>
        <BuildingCard
          :cardSection="CardList"
          :SlotId="5"
          class="col-lg-1 col-md-4 col-sm-3 col-xs-12"
        ></BuildingCard>
        <div class="col-lg-1 col-md-4 col-sm-3 col-xs-12 text">
          <Daily />
        </div>
        <div class="col-lg-1 col-md-4 col-sm-3 col-xs-12 text">
          <Weekly />
        </div>
      </div>
    </div>
    <div class="container-fluid myfooter">
      <MyFooter />
    </div>
  </div>
</template>

<script>
import { cards } from "@/assets/buildings.js";
import data from "@/assets/buildings.json";
export default {
  name: "IndexPage",
  data() {
    return {
      CardList: data,
    };
  },
  computed: {
    Daily() {
      return this.$store.state.foodqty;
    },
  },
  methods: {
    async click() {
      console.log(this.$store.state.Food[1]);
      /*const myHeaders = new Headers();
      myHeaders.append("pragma", "no-cache");
      myHeaders.append("cache-control", "no-cache");

      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=wax&vs_currencies=usd",
        {
          method: "GET",
          headers: myHeaders,
        }
      );

      if (!response.ok) {
        return `An error has occured: ${response.status}`;
      }

      const data = await response.json();
      //this.waxPrice = data.wax.usd;
      console.log(data.wax.usd);*/
    },
  },
  mounted() {
    //click();
  },
};
</script>

<style>
.page {
  position: absolute;
  background-color: rgb(36, 36, 36);
}
.board {
  background-color: rgb(36, 36, 36);
}
.slots {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.topbar {
  padding: 5px;
  top: 0;
}
.myfooter {
  padding: 5px;
  bottom: 0;
  text-align: center;
}
.text {
  text-align: center;
  font-size: 20px;
  color: beige;
}
</style>