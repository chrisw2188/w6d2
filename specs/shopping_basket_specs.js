var basket = require('../shopping_basket');
var assert = require('chai').assert;

describe('basket', function(){
  
  it('starts with 0 items', function(){
    assert.equal(0, basket.items.length);
  });

  it('total of all items in basket', function(){
    console.log(basket.items)
    basket.items.push({item: 'board game', price: 9})
    assert.equal(9, basket.total());
  });

  it('discount should be applied if amount it more than £20', function(){
    basket.empty()
    basket.items.push({item: 'board game', price: 9})
    basket.items.push({item: 'banana', price: 3})
    basket.items.push({item: 'steak', price: 8})
    basket.items.push({item: 'movie', price: 10})
    assert.equal(27, basket.bigSpender());
  })

  it('when discount is present take off', function(){
    basket.empty()
    basket.items.push({item: 'movie', price: 10})
    assert.equal(9.5, basket.discountCard(true))
  })

  it('when discount is present take off', function(){
    basket.empty()
    basket.items.push({item: 'tv', price: 200})
    assert.equal(171, basket.discountCard(true))
  })
  


})