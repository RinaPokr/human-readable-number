module.exports = function toReadable (number) {
    let num0_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let num20_90 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let res = '', res10 = '', res100 = '',
       n10, m10, n100, m100 ;
        n100 = number % 100;
        m100 = Math.floor(number / 100);
        n10 = n100 % 10;
        m10 = Math.floor(n100 / 10);
        if (m100 > 0) {
          res100 =  num0_19[m100] + ' hundred ';
        }
        if (n100 > 0) {
           if     (n100 > 19) {
            res10 = (n10 === 0) ? num20_90[m10 - 2] : num20_90[m10 - 2] + ' ' + num0_19[n10];
        } else {
          res10 = num0_19[n100];
        }    
        }

      res = (number === 0) ? 'zero' : res100 + res10; 
    return res.trim();
  


}
