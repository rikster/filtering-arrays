// run `node index.js` in the terminal
let homeShapeShift = [
  [
    { text: 'BTC', callback_data: 'btc' },
    { text: 'ETH', callback_data: 'eth' },
    { text: 'XRP', callback_data: 'xrp' },
    { text: 'ETC', callback_data: 'etc' },
  ],
  [
    { text: 'ZEC', callback_data: 'zec' },
    { text: 'DASH', callback_data: 'dash' },
    { text: 'LTC', callback_data: 'ltc' },
    { text: 'OMG', callback_data: 'omg' },
  ],
  [
    { text: 'ADA', callback_data: 'ada' },
    { text: 'BTG', callback_data: 'btg' },
    { text: 'TRX', callback_data: 'trx' },
    { text: 'NEO', callback_data: 'neo' },
  ],
];

//If you just want to remove one element just map the inner arrays to new inner filtered arrays:
let f1 = homeShapeShift.map((k) => k.filter((e) => e.text !== 'ZEC'));
console.log(f1);

//Or if you wanna remove the whole array use every to get a boolean:
let f2 = homeShapeShift.filter((k) => k.every((e) => e.text !== 'ZEC'));
//console.log(f2);

//that can be inversed too with some:
let f3 = homeShapeShift.filter((k) => !k.some((e) => e.text === 'ZEC'));
//console.log(f3);
