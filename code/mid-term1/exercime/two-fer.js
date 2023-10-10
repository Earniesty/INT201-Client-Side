function twoFer(name){
    return 'One for ' + (name ?? 'you') + ', one for me.'
}

console.log(twoFer('Alice'))
console.log(twoFer('Bob'))
console.log(twoFer())