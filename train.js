/*     📌  Kiritilgan ikkita sanani oraliq kunini chiqarib beradigan function tuzing
        - 2 ta argument kiritilsin
        - kiritilgan argumentlar oy/kun/yil (11/01/2021) ko’rinirishida kitirlsin
        misol: findDays(11/01/2023, 11/05/2023)  => 4 */

function findDays(date1, date2) {
  const interTime = new Date(date2) - new Date(date1);
  return Math.ceil(interTime / (1000 * 60 * 60 * 24));
                        // (sekund * minut * soat * kun)
}

console.log(findDays("11/01/2023", "11/05/2023"));
