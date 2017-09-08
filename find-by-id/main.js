var parts = [
  {
    id: 1,
    brand: 'Intel',
    name: 'Core i7 7700'
  },
  {
    id: 2,
    brand: 'AMD',
    name: 'Ryzen 7 1700'
  },
  {
    id: 3,
    brand: 'NFC Systems',
    name: 'S4 Mini'
  }
]


function findById(id, collection){
  for(var i = 0; i < collection.length; i++){
    if(id === collection[i].id){
      var answer = collection[i]
    } 
  }
  return answer
}
