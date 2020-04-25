/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.getNum = input => {
    let result;
    let index = /[a-zA-Z]/.exec(input).index; // matches index of first letter
    
 // User story 11 - I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
    if (index == 0) { //no number is found
      return 1;
    }
    
    let num = input.slice(0, index);
    
    if (num.indexOf('/') == -1) { //no divide operator found
      result = parseFloat(num); //parseFLoat assures that the number can be decimal
    } else {
      var arr = num.split('/'); //split the number string in an array by the divide operator
      
      if (arr.length > 2) {
        return 'invalid number';
      } else {
        result = parseFloat(arr[0]) / parseFloat(arr[1]); 
      }
    }
    
    return result;
  };
  
  this.getUnit = input => {
    let result;
    let units = ['gal','l', 'mi', 'km', 'lbs', 'kg']; //array with the only acceptable units of measurement
    let index = /[a-zA-Z]/.exec(input).index; //index of first letter
    let unit = input.slice(index).toLowerCase(); //turn the unit string to lowercase so it runs on other functions ahead
    
    if (units.indexOf(unit) > -1) {
      result = unit;
    } else {
      result = 'invalid unit';
    };
    
    return result;
  };
  
  this.getReturnUnit = initUnit => {
    let result;
    
    switch(initUnit) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = 'invalid unit'
    }
    
    return result;
  };

  this.spellOutUnit = (unit, num) => {
    let result;
    
    switch(unit) {
      case 'gal':
        if (num == 1) {
          result = 'gallon';
        } else {
          result = 'gallons';
        }
        break;
      case 'l':
        if (num == 1) {
          result = 'liter';
        } else {
          result = 'liters';
        }
        break;
      case 'lbs':
        if (num == 1) {
          result = 'pound';
        } else {
          result = 'pounds';
        }
        break;
      case 'kg':
        if (num == 1) {
          result = 'kilogram';
        } else {
          result = 'kilograms';
        }
        break;
      case 'mi':
        if (num == 1) {
          result = 'mile';
        } else {
          result = 'miles';
        }
        break;
      case 'km':
        if (num == 1) {
          result = 'kilometer';
        } else {
          result = 'kilometers';
        }
        break;
      default:
        result = 'invalid unit'
    }
    
    return result;
  };
  
  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541; // User story 5 - I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
    const lbsToKg = 0.453592; // User story 6 - I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
    const miToKm = 1.60934;
    let result;
    
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = 'invalid unit'
    }
    
    return Number(result.toFixed(5)); 
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    let result;
    
    result = initNum + ' ' + this.spellOutUnit(initUnit, initNum) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit, returnNum);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
