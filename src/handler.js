'use strict';

module.exports.randomNumberGenerator = async (event) => {
  const randomNumber = parseInt( Math.random() * 100 );
  return randomNumber;
};
