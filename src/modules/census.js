import dayjs from 'dayjs';

const usFedCensusArr = [
  // U.S. Federal Census:
  // 1790 — August 2, 1790
  '1790-8-2 01:00',
  // 1800 — August 4, 1800
  '1800-8-4 12:00',
  // 1810 — August 6, 1810
  '1810-8-6 12:00',
  // 1820 — August 7, 1820
  '1820-8-7 12:00',
  // 1830 — June 1, 1840
  '1830-6-1 12:00',
  // 1840 — June 1, 1840
  '1840-6-1 12:00',
  // 1850 — June 1, 1850
  '1850-6-1 12:00',
  // 1860 — June 1, 1860
  '1860-6-1 12:00',
  // 1870 — June 1, 1870
  '1870-6-1 12:00',
  // 1880 — June 1, 1880
  '1880-6-1 12:00',
  // 1900 — June 1, 1900
  '1900-6-1 12:00',
  // 1910 — April 15, 1910
  '1910-4-15 12:00',
  // 1920 — January 1, 1920
  '1920-1-1 12:00',
  // 1930 — April 1, 1930
  '1930-4-1 12:00',
  // 1940 — April 1, 1940
  '1940-4-1 12:00',
  // 1950 — April 1, 1950
  '1950-4-1 12:00'
];

const kansasCensusArr = [
  // Kansas State Census:
  // 1875 — March 1, 1875
  '1875-3-1 12:00',
  // 1885 — March 1, 1885
  '1885-3-1 12:00',
  // 1895 — March 1, 1895
  '1895-3-1 12:00',
  // 1905 — March 1, 1905
  '1905-3-1 12:00',
  // 1915 — March 1, 1915
  '1915-3-1 12:00',
  // 1925 — March 1, 1925
  '1925-3-1 12:00'
];

function makeACensusObj(date, censusType) {
  const dateObj = dayjs(date);
  return {
    censusObj: dateObj,
    censusName: `${dateObj.year()} ${censusType}`
  }
}

function sortArrOfDayjsInstances(arrToSort) {
  if (arrToSort && arrToSort.length > 1) {
    arrToSort.sort((a,b) => a.censusObj.isAfter(b.censusObj) ? 1 : -1);
    return arrToSort;
  } else {
    return [];
  }
}

function makeCensusList(optionsObj) {
  let censusArr = [];

  // U.S. Federal Census:
  optionsObj.showUSCensuses && usFedCensusArr.forEach((date) => {
    censusArr.push(makeACensusObj(date, 'U.S. Federal Census'));
  });

  // 1890 — June 2, 1890
  optionsObj.show1890Census && censusArr.push(
    makeACensusObj('1890-6-2 12:00', 'U.S. Federal Census')
  );

  // Kansas State Census:
  optionsObj.showKansasCensus && kansasCensusArr.forEach(date => {
    censusArr.push(makeACensusObj(date, 'Kansas State Census'));
  });

  // TK Iowa
  // 1895 — January 1

  // Sort the array by date
  censusArr = censusArr && sortArrOfDayjsInstances(censusArr);
  return censusArr;
}

export default makeCensusList;
