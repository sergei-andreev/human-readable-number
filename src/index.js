module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  config = {
      '0': '',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
      '10': 'ten',
      '11': 'eleven',
      '12': 'twelve',
      '13': 'thirteen',
      '14': 'fourteen',
      '15': 'fifteen',
      '16': 'sixteen',
      '17': 'seventeen',
      '18': 'eighteen',
      '19': 'nineteen',
      '20': 'twenty',
      '30': 'thirty',
      '40': 'forty',
      '50': 'fifty',
      '60': 'sixty',
      '70': 'seventy',
      '80': 'eighty',
      '90': 'ninety'
  }
  
  if (number < 20) {
    return config[String(number)];
  }

  if (number < 100) {
    if (number % 10 === 0) {
      return config[String(number)];
    }

    const [tens, ones] = String(number).split('');
    return `${config[tens * 10]} ${config[ones]}`;
  }

  const [hundreds, tens, ones] = String(number).split('');

  if (tens == 0) {
    return `${config[hundreds]} hundred ${config[ones]}`.trim();
  }

  if (tens == 1) {
    const teens = String(number).slice(1);
    return `${config[hundreds]} hundred ${config[teens]}`.trim();
  }

  return `${config[hundreds]} hundred ${config[tens * 10]} ${config[ones]}`.trim();
}
