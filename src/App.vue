<template>
    <div id="app">
      <nav class="navbar navbar-toggleable-md navbar-light bg-success navbar-inverse">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="{ path: '/'}" class="nav-link" active-class="active">Main</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ path: '/sc'}" class="nav-link" active-class="active">Shopping cart</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-view style="margin-top: 60px"/>
    </div>
</template>

<script>
  import Index from "./components/index";
  import ShoppingCart from './components/shopping-cart'

  export default {
    components: {
      Index,
      ShoppingCart},
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
  @import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css");

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  html, body {
    background-color: #eee;
    font-family: calibri, sans-serif;
  }
</style>
