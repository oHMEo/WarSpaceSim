import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      Food: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      Gold: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      Stone: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      Wood: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      foodqty: 0,
      goldqty: 0,
      stoneqty: 0,
      woodqty: 0,
      /*WaxPrice: 0,
      FoodPrice: 0,
      GoldPrice: 0,
      StonePrice: 0,
      WoodPrice: 0,
      Fee: 0,*/
    },
    mutations: {
      /* setWaxPrice(state, WaxPrice) {
        state.WaxPrice = WaxPrice;
      },
      setFoodPrice(state, FoodPrice) {
        state.FoodPrice = FoodPrice;
      },
      setGoldPrice(state, GoldPrice) {
        state.GoldPrice = GoldPrice;
      },
      setStonePrice(state, StonePrice) {
        state.StonePrice = StonePrice;
      },
      setWoodPrice(state, WoodPrice) {
        state.WoodPrice = WoodPrice;
      },*/
      setFood(state, { food, index }) {
        state.Food[index] = food;
        state.foodqty = 0;
        for (var qty in state.Food) {
          state.foodqty += state.Food[qty];
        }
        state.foodqty = state.foodqty * 24;
      },
      setGold(state, { gold, index }) {
        state.Gold[index] = gold;
        state.goldqty = 0;
        for (var qty in state.Gold) {
          state.goldqty += state.Gold[qty];
        }
        state.goldqty = state.goldqty * 24;
      },
      setStone(state, { stone, index }) {
        state.Stone[index] = stone;
        state.stoneqty = 0;
        for (var qty in state.Stone) {
          state.stoneqty += state.Stone[qty];
        }
        state.stoneqty = state.stoneqty * 24;
      },
      setWood(state, { wood, index }) {
        state.Wood[index] = wood;
        state.woodqty = 0;
        for (var qty in state.Wood) {
          state.woodqty += state.Wood[qty];
        }
        state.woodqty = state.woodqty * 24;
      },
    },
    actions: {},
    getters: {},
  });
};

export default createStore;
