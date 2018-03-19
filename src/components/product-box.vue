<template>
    <div class="box">
      <img :src="item_data.img"/>
      <i class="fa fa-plus" @click="addItem(item_data)"></i>
      <h2>{{item_data.title}}</h2>
      <p>{{item_data.price}}</p>
    </div>
</template>

<script>
    export default {
        name: "product-box",
        props: ["item_data", "buyitems"],
        methods: {
          addItem: function (item_data) {
            let i;
            if (item_data.id === "beer") {
              this.$parent.beerClick += 1;
              if (this.$parent.beerClick <= 1) {
                this.pushData();
              } else {
                i = this.findIndex(this.$parent.buyitems, "id", "beer");
                this.$parent.buyitems[i].qty += 1;
                this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
                console.log(i);
              }
            } else if (item_data.id === "eco-bag") {
              this.$parent.ecoClick += 1;
              if (this.$parent.ecoClick <= 1) {
                this.pushData();
              } else {
                i = this.findIndex(this.$parent.buyitems, "id", "eco-bag");
                this.$parent.buyitems[i].qty += 1;
                this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
              }
            } else {
              this.$parent.paperClick += 1;
              if (this.$parent.paperClick <= 1) {
                this.pushData();
              } else {
                i = this.findIndex(this.$parent.buyitems, "id", "paper-bag");
                this.$parent.buyitems[i].qty += 1;
                this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
              }
            }
          },
          pushData: function () {
            this.$parent.buyitems.push({
              img: this.item_data.img,
              title: this.item_data.title,
              price: this.item_data.price,
              qty: 1,
              total: this.item_data.price,
              id: this.item_data.id
            });
          },
          findIndex: function (array, attr, value) {
            for (var i = 0; i < array.length; i += 1) {
              if (array[i][attr] === value) {
                return i;
              }
            }
            return -1;
          },
        }
    }
</script>

<style lang="scss" scoped>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  .box {
    width: 230px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: inline-block;
    margin: 0 10px;
    position: relative;

    img {
      width: 230px;
    }

    i {
      width: 50px;
      height: 50px;
      background: #ED277F;
      color: #ffffff;
      border-radius: 25px;
      text-align: center;
      line-height: 50px;
      font-size: 1.4rem;
      position: absolute;
      right: 20px;
      top: 150px;
      box-shadow: 0 0 4px 2px rgba(80, 80, 80, 0.1);
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }

    h2 {
      margin-left: 20px;
    }

    p {
      margin-left: 20px;
    }

    p::before {
      content: "$ ";
    }
  }
</style>
