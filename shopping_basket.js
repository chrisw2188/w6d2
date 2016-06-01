var shop_basket = {
  items: [],

  empty: function(){
    this.items = [];
  },

  total: function(){
    var totalCost = 0
    for (var item of this.items) {
    totalCost += item['price']
  }
  return totalCost
},

bigSpender: function(){
  var totalCost = this.total()
  if (totalCost > 20) {
    var afterDiscount = totalCost * 0.9
  }
  else {
    afterDiscount = totalCost;
  }
  return afterDiscount
},

discountCard: function(card){
  var totalCost = this.bigSpender()
  if(card) {
    var afterDiscount = totalCost * 0.95;
     }
    else {
      afterDiscount = totalCost
    }
    return afterDiscount
}

}


module.exports = shop_basket;