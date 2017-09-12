var nameArray = [
'ron',
'Celeste',
'Tim',
'Victor'
]

function print(array) {
  for(var i = 0; i < array.length; i++){
    console.log(array[i])
  }
}

function forEach(list, procedure) {
  procedure(list)
}
