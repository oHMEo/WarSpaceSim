<template>
  <div class="container slotbox">
    <div class="row">
      <div class="col-12">
        <select
          name="building1"
          id="building-select"
          v-model="name"
          @change="setRss()"
        >
          <option class="title" value="" disabled selected>Buildings :</option>
          <option value="Gold_mine">Gold mine</option>
          <option value="Farm">Farm</option>
          <option value="Stone_quarry">Stone quarry</option>
          <option value="Lumber_mill">Lumber mill</option>
          <option value="null" disabled>-------------</option>
          <option value="None">None</option>
        </select>
      </div>
      <div class="col-12">
        <select
          name="rarity1"
          id="rarity-select"
          v-model="rarity"
          @change="setRss()"
        >
          <option class="title" value="" disabled selected>Rarity :</option>
          <option value="Common">Common</option>
          <option value="Rare">Rare</option>
          <option value="Epic">Epic</option>
        </select>
      </div>
      <div class="col-12">
        <select
          name="level1"
          id="level-select"
          v-model="level"
          @change="setRss()"
        >
          <option class="title" value="" disabled selected>Level :</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <div class="col-12">
        <img
          id="image1"
          :src="this.imgpath"
          alt="https://zupimages.net/up/22/03/yuo0.png"
          class="img"
        />
      </div>
      <div class="col-12">
        <p class="rss food">{{ food }}</p>
      </div>
      <div class="col-12">
        <p class="rss gold">{{ gold }}</p>
      </div>
      <div class="col-12">
        <p class="rss stone">{{ stone }}</p>
      </div>
      <div class="col-12">
        <p class="rss wood">{{ wood }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardSection", "SlotId"],
  data() {
    return {
      name: "",
      rarity: "Common",
      level: "1",
    };
  },
  computed: {
    imgpath: function () {
      if (this.name === "None" || this.name === "") {
        return "https://zupimages.net/up/22/03/yuo0.png";
      } else {
        const imgname =
          this.cardSection[this.name][this.rarity][this.level]["img"];
        return "https://ipfs.atomichub.io/ipfs/" + imgname;
      }
    },
    food() {
      if (this.name === "None" || this.name === "") {
        return 0;
      }

      return this.cardSection[this.name][this.rarity][this.level]["Food"];
    },
    gold() {
      if (this.name === "None" || this.name === "") {
        return 0;
      }
      return this.cardSection[this.name][this.rarity][this.level]["Gold"];
    },
    stone() {
      if (this.name === "None" || this.name === "") {
        return 0;
      }
      return this.cardSection[this.name][this.rarity][this.level]["Stone"];
    },
    wood() {
      if (this.name === "None" || this.name === "") {
        return 0;
      }
      return this.cardSection[this.name][this.rarity][this.level]["Wood"];
    },
  },
  methods: {
    setRss() {
      this.setFood();
      this.setGold();
      this.setStone();
      this.setWood();
    },
    setFood() {
      const index = parseInt(this.SlotId);
      if (this.name === "None" || this.name === "") {
        const food = 0;
        this.$store.commit("setFood", { food, index });
      } else {
        const food =
          this.cardSection[this.name][this.rarity][this.level]["Food"];
        this.$store.commit("setFood", { food, index });
      }
    },
    setGold() {
      const index = parseInt(this.SlotId);
      if (this.name === "None" || this.name === "") {
        const gold = 0;
        this.$store.commit("setGold", { gold, index });
      } else {
        const gold =
          this.cardSection[this.name][this.rarity][this.level]["Gold"];
        this.$store.commit("setGold", { gold, index });
      }
    },
    setStone() {
      const index = parseInt(this.SlotId);
      if (this.name === "None" || this.name === "") {
        const stone = 0;
        this.$store.commit("setStone", { stone, index });
      } else {
        const stone =
          this.cardSection[this.name][this.rarity][this.level]["Stone"];
        this.$store.commit("setStone", { stone, index });
      }
    },
    setWood() {
      const index = parseInt(this.SlotId);
      if (this.name === "None" || this.name === "") {
        const wood = 0;
        this.$store.commit("setWood", { wood, index });
      } else {
        const wood =
          this.cardSection[this.name][this.rarity][this.level]["Wood"];
        this.$store.commit("setWood", { wood, index });
      }
    },
  },
  mounted() {},
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
.choicebtn {
  width: 150px;
}
.img {
  max-width: 200px;
  align-items: center;
}
option {
  text-align: center;
  font-size: 24px;
  color: black;
  background-color: transparent;
}
select {
  background-color: transparent;
  width: 90%;
  font-weight: bold;
  font-size: 24px;
  color: beige;
  padding: 5px;
  margin: 5px;
}
#building-select {
  color: rgb(82, 212, 82);
  border-radius: 10px 10px 0 0;
}
#rarity-select {
  color: rgb(180, 54, 202);
}
#level-select {
  color: rgb(52, 188, 223);
  border-radius: 0 0 10px 10px;
}
.title {
  color: red;
  font-weight: bold;
}
.rss {
  font-weight: bold;
  font-size: 40px;
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