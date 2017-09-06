var isPalindrome = 'madam'
var notPalindrome = 'tacos'

function palindrome(string){
  var split = string.split('')
  var reversed = split.reverse()
  var newString =reversed.join('')
  if(newString === string){
    return true
  }
  else {
    return false
  }
}
