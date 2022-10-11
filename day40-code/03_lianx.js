const nfhSingleArticle = [
  {
    isTop10: 0,
    original: 1,
    hashFirstPubTag: 1,
    isPubHome: 0,
    isPubNfh: 0,
    isPubCityAndMain: 1,
    isPubQxTown: 1,
    a: 1,
    b: 0,
    zzz: 1,
  },
];
// nfhSingleArticle.forEach((item) => {
//   item.isTop10 = item.isTop10 === 1 ? '是' : '否';
//   item.original = item.isTop10 === 1 ? '是' : '否';
//   item.hashFirstPubTag = item.isTop10 === 1 ? '是' : '否';
//   item.isPubHome = item.isTop10 === 1 ? '是' : '否';
//   item.isPubNfh = item.isTop10 === 1 ? '是' : '否';
//   item.isPubNfh = item.isTop10 === 1 ? '是' : '否';
//   item.isPubQxTown = item.isTop10 === 1 ? '是' : '否';
// });

//部分值变为是和否
const arr = [
  'isTop10',
  'original',
  'hashFirstPubTag',
  'isPubHome',
  'isPubNfh',
  'isPubQxTown',
];
//对象key部分key转换
nfhSingleArticle.map((item) => {
  // console.log(Object.keys(item));
  handleTableData(item, arr);
});

function handleTableData(item, arr) {
  for (const key of arr) {
    //有就执行
    key in item && (item[key] = item[key] === 1 ? '是' : '否');
  }
}
console.log(nfhSingleArticle);

//对象全部key转换
nfhSingleArticle.map((item) => {
  const keys = Object.keys(item);
  for (const key of keys) {
    item[key] = item[key] === 1 ? '是' : '否';
  }
});

console.log(nfhSingleArticle);
