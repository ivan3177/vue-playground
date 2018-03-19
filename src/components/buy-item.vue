<template>
    <div class="row">
      <img :src="buy_data.img"/>
      <h4>{{buy_data.title}}</h4>
      <p>$ {{buy_data.price}}</p>
      <div class="qty-minus" @click="minusQty(buy_data)">-</div>
      <div class="qty">{{buy_data.qty}}</div>
      <div class="qty-plus" @click="plusQty(buy_data)">+</div>
      <div class="del" @click="removeItem(buy_data)">Remove</div>
      <div class="totalprice">{{buy_data.total}}</div>
    </div>
</template>

<script>
    export default {
      name: "buy-item",
      props: ["buy_data", "buyitems"],
      methods: {
        removeItem: function(buy_data) {
          let index = this.$parent.buyitems.indexOf(buy_data);
          this.$parent.buyitems.splice(index, 1);
          if (buy_data.id === "beer") {
            this.$parent.beerClick = 0;
          } else if (buy_data.id === "eco-bag") {
            this.$parent.ecoClick = 0;
          } else {
            this.$parent.paperClick = 0;
          }
        },
        plusQty: function(buy_data){
          buy_data.qty += 1;
          buy_data.total = buy_data.qty*buy_data.price;
        },
        minusQty: function(buy_data){
          buy_data.qty -= 1;
          if (buy_data.qty < 1){
            this.removeItem(buy_data)
          }
          buy_data.total = buy_data.qty*buy_data.price;
        }
      }
    }
</script>

<style lang="scss" scoped>
  .row {
    width: 100%;
    border-bottom: 1px solid #BFBFBF;
    overflow: hidden;
    padding: 10px 0;
    display: block;
    float: left;

    img {
      height: 100px;
      float: left;
    }
    h4 {
      float: left;
      line-height: 40px;
      height: 100px;
      margin-left: 20px;
      margin-top: 10px;
      width: 100px;

    }
    p {
      float: left;
      width: 80px;
      line-height: 100px;
      margin: 0 0 0 35px;
      text-align: center;
    }
    .qty-minus {
      float: left;
      width: 20px;
      line-height: 100px;
      margin-left: 60px;
      text-align: center;
      cursor: pointer;
    }
    .qty {
      float: left;
      width: 20px;
      line-height: 100px;
      margin-left: 20px;
      text-align: center;
    }
    .qty-plus {
      float: left;
      width: 20px;
      line-height: 100px;
      margin-left: 20px;
      text-align: center;
      cursor: pointer;
    }
    .del {
      float: left;
      width: 80px;
      line-height: 100px;
      margin-left: 60px;
      cursor: pointer;
      text-decoration: underline;
      color: #ED277F;
    }
    .totalprice {
      float: left;
      width: 80px;
      line-height: 100px;
      margin-left: 10px;
      text-align: right;
    }
    .row p::before, .totalprice::before {
      content: "$ ";
    }
  }
</style>
