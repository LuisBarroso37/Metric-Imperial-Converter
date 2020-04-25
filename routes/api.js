/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = app => {
  
  let convertHandler = new ConvertHandler();

// User story 3 - I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted.
  app.route('/api/convert')
    .get((req, res) => {
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      
    // User story 10 - If both the number and the unit of measurement are invalid, return will be 'invalid number and unit'.
      if (initNum == 'invalid number' && initUnit == 'invalid unit') {
        return res.json({'error': 'invalid number and unit'});
      } 
    // User story 9 - If my number is invalid, returned with will 'invalid number'.
      else if (initNum == 'invalid number') {
        return res.json({'error': 'invalid number'});
      } 
    // User story 8 - If my unit of measurement is invalid, returned will be 'invalid unit'.
      else if (initUnit == 'invalid unit') {
        return res.json({'error': 'invalid unit'});
      }
    
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
    // User story 12 - My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format
    // {initNum} {initial_Units} converts to {returnNum} {return_Units} with the result rounded to 5 decimals.
      return res.json({initNum, initUnit, returnNum, returnUnit, string: toString});
    });
    
};
