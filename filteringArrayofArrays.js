let spendTypes = [
  ['ATL', 'ATL'],
  ['BTL', 'BTL'],
];

//If you just want to remove one element just map the inner arrays to new inner filtered arrays:
let f1 = spendTypes.map((k) => k.filter((e) => e !== 'BTL'));
console.log(f1);
