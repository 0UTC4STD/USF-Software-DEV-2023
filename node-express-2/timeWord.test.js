// npx jest timeword.test.js <------In Terminal


function timeWord(time) {
  const words = [
    'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const tensWords = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty'
  ];

  const [hour, minute] = time.split(':').map(Number);

  let period = '';
  let hourWord = '';

  if (hour === 0 && minute === 0) {
    return 'midnight';
  } else if (hour === 12 && minute === 0) {
    return 'noon';
  } else if (hour >= 12) {
    period = 'pm';
    hourWord = words[hour - 12];
  } else {
    period = 'am';
    hourWord = words[hour];
  }

  let minuteWord = '';

  if (minute === 0) {
    return `${hourWord} ${period}`;
  } else if (minute < 20) {
    minuteWord = words[minute];
  } else {
    const ones = minute % 10;
    const tens = Math.floor(minute / 10);
    minuteWord = `${tensWords[tens]}${ones === 0 ? '' : ' ' + words[ones]}`;
  }

  return `${hourWord} ${minuteWord} ${period}`;
}

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('converts a 24h time to words', () => {
    expect(timeWord('00:00')).toBe('midnight');
    expect(timeWord('01:30')).toBe('one thirty am');
    expect(timeWord('12:00')).toBe('noon');
    expect(timeWord('15:45')).toBe('three forty five pm');
    expect(timeWord('23:59')).toBe('eleven fifty nine pm');
  });
});