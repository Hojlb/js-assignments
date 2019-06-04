/*
* 1)Returns the result of concatenation of two strings.
*
* @param {string value1
* @param {string value2
* @return {string
*
* @example
*   'aa', 'bb' => 'aabb'
*   'aa',''    => 'aa'
*   '',  'bb'  => 'bb'
*/

function concatenateStrings(value1, value2) {
  return value1 + value2;

  /*
  * 2)Returns the length of given string.
  *
  * @param {string} value
  * @return {number}
  *
  * @example
  *   'aaaaa' => 5
  *   'b'     => 1
  *   ''      => 0
  */
  function getStringLength(value) {
    return value.length();
  }

  /*
  * 3)Returns the result of string template and given parameters firstName and lastName.
  * Please do not use concatenation, use template string :
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
  *
  * @param {string} firstName
  * @param {string} lastName
  * @return {string}
  *
  * @example
  *   'John','Doe'      => 'Hello, John Doe!'
  *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
  */
  function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}`;
  }

  /*
  * 4)Extracts a name from template string 'Hello, First_Name Last_Name!'.
  *
  * @param {string} value
  * @return {string}
  *
  * @example
  *   'Hello, John Doe!' => 'John Doe'
  *   'Hello, Chuck Norris!' => 'Chuck Norris'
  */
  function  extractNameFromTemplate(value) {
    return value.split(', ')[1].split('!')[0];
  }


  /*
  * 5) Returns a first char of the given string.
  *
  * @param {string} value
  * @return {string}
  *
  * @example
  *   'John Doe'  => 'J'
  *   'cat'       => 'c'
  */
  function getFirstChar(value) {
    return value.split('')[0];
  }

  /*
  * 6)Removes a leading and trailing whitespace characters from string.
  *
  * @param {string} value
  * @return {string}
  *
  * @example
  *   '  Abracadabra'    => 'Abracadabra'
  *   'cat'              => 'cat'
  *   '\tHello, World! ' => 'Hello, World!'
  */
  function removeLeadingAndTrailingWhitespaces(value) {
    if(!value.match( /^\s/g ) || !value.match( /\s$/g)) {
   		return value;
   	} else {
   		return value.split( /^\s+/g )[1].split( /\s+$/g )[0];
   	}
  }

  /*
  * 7)Returns a string that repeated the specified number of times.
  *
  * @param {string} value
  * @param {string} count
  * @return {string}
  *
  * @example
  *   'A', 5  => 'AAAAA'
  *   'cat', 3 => 'catcatcat'
  */
  function repeatString(value, count) {
    return new Array(++count).join(value);
  }

  /*
  * 8)Remove the first occurrence of string inside another string
  *
  * @param {string} str
  * @param {string} value
  * @return {string}
  *
  * @example
  *   'To be or not to be', 'not'  => 'To be or to be'
  *   'I like legends', 'end' => 'I like legs',
  *   'ABABAB','BA' => 'ABAB'
  */
  function removeFirstOccurrences(str, value)  {
    let result = str.replace( value, '' );

    return result.replace( '  ', ' ' );
  }

  /*
  * 9)Remove the first and last angle brackets from tag string
  *
  * @param {string} str
  * @return {string}
  *
  * @example
  *   '<div>' => 'div'
  *   '<span>' => 'span'
  *   '<a>' => 'a'
  */
  function unbracketTag(str) {
    let arr = srt.split('');
    if( arr[0] == '<' && arr[arr.length-1] == '>' ){
  	   return arr.slice(1, arr.length-1).join('');
  	}
  }

  /*
  * 10)Converts all characters of the specified string into the upper case
  *
  * @param {string} str
  * @return {string}
  *
  * @example
  *   'Thunderstruck' => 'THUNDERSTRUCK'
  *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  */
  function convertToUpperCase(str) {
    return str.toUpperCase();
  }

  /*
  * 11)Extracts e-mails from single string with e-mails list delimeted by semicolons
  *
  * @param {string} str
  * @return {array}
  *
  * @example
  *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' =>
  *     ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
  *   'info@gmail.com' => ['info@gmail.com']
  */
  function extractEmails(str) {
    return str.split(';');
  }

  /*
  * 12)Returns the string representation of rectangle with specified width and height
  * using pseudograhic chars
  *
  * @param {number} width
  * @param {number} height
  * @return {string}
  *
  * @example
  *
  *            '┌────┐\n'+
  *  (6,4) =>  '│    │\n'+
  *            '│    │\n'+
  *            '└────┘\n'
  *
  *  (2,2) =>  '┌┐\n'+
  *            '└┘\n'
  *
  *             '┌──────────┐\n'+
  *  (12,3) =>  '│          │\n'+
  *             '└──────────┘\n'
  *
  */
  function getRectangleString(width, height) {
    let ltCorner = '┌'; // left top corner
    let rtCorner = '┐'; // right top corner
    let lbCorner = '└'; // left bottom corner
    let rbCorner = '┘'; // right bottom corner
    let vl = '│'; // vertical line
    let hl = '─'; // horizontal line
    let result = [];
    for( let i = 0; i < height; i++ ){
      for( let j = 0; j < width; j++ ){
        if( j == 0 && i == 0 ) {
          result.push(ltCorner);
        } else if( j != 0 && j != width - 1 && i == 0 ) {
            result.push(hl);
        } else if( j == width - 1 && i == 0 ){
            result.push(rtCorner);
        } else if( (j == 0 || j == width-1) && i != 0 && i != height-1 ) {
          result.push(vl);
        } else if( j == 0 && i == height-1 ) {
          result.push(lbCorner);
        } else if( j != 0 && i == height-1 && j != width - 1 ){
            result.push(hl);
        } else if( j == width - 1 && i == height-1 ){
            result.push(rbCorner);
        } else {
          result.push(' ');
        }
      }
      result.push('\n');
    }

    return result.join('');
  }

  /*
  * 13)Encode specified string with ROT13 cipher
  * See details:  https://en.wikipedia.org/wiki/ROT13
  *
  * @param {string} str
  * @return {string}
  *
  * @example
  *
  *   'hello' => 'uryyb'
  *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
  *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
  *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' =>
  *          'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  *
  */
  function encodeToRot13(str) {

      let arr = str.split('');
      let result = [];

      for( let i = 0, lngh = arr.length; i < lngh; i++ ){
        let chr = arr[i].charCodeAt(0);
  	  if( chr >=65 && chr <= 90) {
          result.push( String.fromCharCode( 65 + chr % 26 )); // A[65]-Z[90]);
        } else if( chr >=97 && chr <= 122 ){
          result.push( String.fromCharCode( 97 + (chr-97+13) % 26)); // a[97]-z[122]
        } else {
          result.push(arr[i]);
        }

      }
      return result.join('');
  }

  /*
  * 14)Returns true if the value is string; otherwise false.
  * @param {string} value
  * @return {boolean}
  *
  * @example
  *   isString() => false
  *   isString(null) => false
  *   isString([]) => false
  *   isString({}) => false
  *   isString('test') => true
  *   isString(new String('test')) => true
  */
  function isString(value) {
    return Object.prototype.toString.call(value) == '[object String]';
  }


  /*
  * 15)Returns playid card id.
  *
  * Playing cards inittial deck inclides the cards in the following order:
  *
  *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
  *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
  *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
  *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
  *
  * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
  * Function returns the zero-based index of specified card in the initial deck above.
  *
  * @param {string} value
  * @return {number}
  *
  * @example
  *   'A♣' => 0
  *   '2♣' => 1
  *   '3♣' => 2
  *     ...
  *   'Q♠' => 50
  *   'K♠' => 51
  */
  function getCardId(value) {
    let arr = ['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
      'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
      'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
      'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'];

      return arr.indexOf(value);
  };

  module.exports = {
    concatenateStrings: concatenateStrings,
    getStringLength: getStringLength,
    getStringFromTemplate: getStringFromTemplate,
    extractNameFromTemplate: extractNameFromTemplate,
    getFirstChar: getFirstChar,
    removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
    repeatString: repeatString,
    removeFirstOccurrences: removeFirstOccurrences,
    unbracketTag: unbracketTag,
    convertToUpperCase: convertToUpperCase,
    extractEmails: extractEmails,
    getRectangleString: getRectangleString,
    encodeToRot13: encodeToRot13,
    isString: isString,
    getCardId: getCardId
  };
