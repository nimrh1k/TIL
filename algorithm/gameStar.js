const INPUT = '10S*2T*3S';

const reg = /1?[0-9]{1}(S|D|T)(\*|#)?/g;
console.log(INPUT.match(reg));