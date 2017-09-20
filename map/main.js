
var letters = [
'a',
'b',
'c',
'd'
]


function map(list, transform){

  var newList = []

  for(var i = 0; i < list.length; i++){
    var item = list[i]
    var newItem = transform(item)
    newList.push(newItem)
  }
  return newList
}

function log(item){
  return item + 'b'
}
