(function () {
  let addBread = function () {
    console.log('Bread added!');
  };
  let addSoya = function () {
    console.log('Soya Margarine Added!');
  };
  let addJam = function () {
    console.log('Jam Added!');
  };
  return (global.makeSandwich = function () {
    addBread();
    addSoya();
    addJam();
  });
})();

makeSandwich();
