/* eslint-disable no-unused-vars */
var strings = [
  'frirst string is short',
  'second string is a bit longer',
  'third string is the longest of the three'
]

var i = 0

function longest(array) {
  var longestString = ''
  for( i = 0; i < array.length; i++){
    if(array[i].length > longestString.length){
      longestString = array[i]
    }
  }
  return longestString
}
