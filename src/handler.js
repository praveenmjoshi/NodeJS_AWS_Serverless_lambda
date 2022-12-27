'use strict';

module.exports.randomNumberGenerator = async (event) => {
  const randomNumber = parseInte( Math.random() * 100 );
  return randomNumber;
};
