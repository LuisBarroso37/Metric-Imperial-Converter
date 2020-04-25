/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

// User story 13 - All 16 unit tests are complete and passing.
suite('Unit Tests', () => {
  
  suite('Function convertHandler.getNum(input)', () => {
    
    test('Whole number input', done => {
      var input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', done => {
      var input = '43.2gal';
      assert.equal(convertHandler.getNum(input), 43.2);
      done();
    });
    
    test('Fractional Input', done => {
      var input = '1/2mi';
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', done => {
      var input = '1.4/2mi';
      assert.equal(convertHandler.getNum(input), 0.7);
      done();
    });
    
    test('Invalid Input (double fraction)', done => {
      var input = '1/2/4mi';
      assert.equal(convertHandler.getNum(input), 'invalid number');
      done();
    });
    
    test('No Numerical Input', done => {
      var input = 'mi';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', () => {
    
    test('For Each Valid Unit Inputs', done => {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(ele => {
        assert.notEqual(convertHandler.getUnit(ele), 'invalid unit');
      });
      done();
    });
    
    test('Unknown Unit Input', done => {
      var input = '45mlk';
      assert.equal(convertHandler.getUnit(input), 'invalid unit');
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', () => {
    
    test('For Each Valid Unit Inputs', done => {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', () => {
    
    test('For Each Valid Unit Inputs', done => {
      var unit = ['gal','l','mi','km','lbs','kg'];
      var spelledUnit = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
      unit.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), spelledUnit[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', () => {
    
    test('Gal to L', done => {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', done => {
      var input = [2, 'l'];
      var expected = 0.52834;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', done => {
      var input = [3, 'mi'];
      var expected = 4.82803;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', done => {
      var input = [6, 'km'];
      var expected = 3.72822;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', done => {
      var input = [7, 'lbs'];
      var expected = 3.17514;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', done => {
      var input = [8, 'kg'];
      var expected = 17.63698;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
  });

});