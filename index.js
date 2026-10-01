function whatCentury(year) {
  const century = Math.ceil(parseInt(year) / 100);
  if (century >= 11 && century <= 13) {
    return century + "th";
  }
  const lastDigit = century % 10;
  switch (lastDigit) {
    case 1: return century + "st";
    case 2: return century + "nd";
    case 3: return century + "rd";
    default: return century + "th";
  }
}

function findMissing(list) {
  const d = (list[list.length - 1] - list[0]) / list.length;
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== d) {
      return list[i] + d;
    }
  }
}
