<template>
  <div id="shopping-cart" style="max-width: 760px; margin: 20px auto;">
    <div id="product">
      <product-box v-for="item in items" :key="item.id" :item_data="item"/>
    </div>
    <div id="cart">
      <div id="head">
        <h3>Shopping Cart</h3>
        <div id="price">Price</div>
        <div id="quantity">Quantity</div>
        <div id="total">Total</div>
      </div>
      <buy-item v-for="buyitem in buyitems" :key="buyitem.id" :buy_data="buyitem"/>
      <h5 v-if="total()">Sum: $ {{total()}}</h5>
    </div>
  </div>
</template>

<script>
  import ProductBox from "./product-box";
  import BuyItem from "./buy-item";

  export default {
    components: {
      BuyItem,
      ProductBox},
    name: 'app',
    data () {
      return {
        beerClick: 0,
        ecoClick: 0,
        paperClick: 0,
        items: [
          {
            img: "https://chenyiya.com/codepen/product-1.jpg",
            title: "Beer Bottle",
            price: "25",
            id: "beer"
          },
          {
            img: "https://chenyiya.com/codepen/product-2.jpg",
            title: "Eco Bag",
            price: "73",
            id: "eco-bag"
          },
          {
            img: "https://chenyiya.com/codepen/product-3.jpg",
            title: "Paper Bag",
            price: "35",
            id: "paper-bag"
          }
        ],
        buyitems: []
      }
    },
    methods: {
      total: function(){
        var sum = 0;
        this.buyitems.forEach(function(buyitem){
          sum += parseInt(buyitem.total);
        });
        return sum;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #cart {
    margin-top: 50px;
    overflow: hidden;
    #head {
      width: 100%;
      border-bottom: 1px solid #BFBFBF;
      height: 40px;
      display: block;
      h3 {
        display: inline-block;
        line-height: 40px;
        margin: 0;
      }
      #price {
        display: inline-block;
        color: #777777;
        margin-left: 200px;
        line-height: 40px;
      }
      #quantity {
        display: inline-block;
        color: #777777;
        margin-left: 100px;
        line-height: 40px;
      }
      #total {
        display: inline-block;
        color: #777777;
        line-height: 40px;
        float: right;
      }
    }
    h5 {
      font-size: 1.2rem;
      text-align : right;
    }
  }
</style>
