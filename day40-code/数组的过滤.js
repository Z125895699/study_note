const arr = [
  'MANAGER_REWARD',
  'CONTINUE_REWARD',
  'POST_REWARD',
  'AREA_REWARD',
  'CITY_REWARD',
  'PROVINCE_REWARD',
];
const list = [
  { type: 'SELF_REWARD', name: '个人推广', count: 1, displayValue: 0 },
  { type: 'ONE_REWARD', name: '一级推广', count: 1, displayValue: 0 },
  { type: 'TWO_REWARD', name: '二级推广', count: 1, displayValue: 0 },
  { type: 'SPREAD_REWARD', name: '引流激励', count: 1, displayValue: 0 },
  { type: 'ALL_REWARD', name: '业绩汇总', count: 1, displayValue: 0 },
  { type: 'MANAGER_REWARD', name: '绩效津贴', count: 1, displayValue: 0 },
  { type: 'CONTINUE_REWARD', name: '持续达标', count: 1, displayValue: 0 },
  { type: 'POST_REWARD', name: '岗位津贴', count: 1, displayValue: 0 },
  { type: 'AREA_REWARD', name: '大区激励', count: 1, displayValue: 0 },
  { type: 'CITY_REWARD', name: '市区激励', count: 1, displayValue: 0 },
  { type: 'PROVINCE_REWARD', name: '省区激励', count: 1, displayValue: 0 },
];
const params = list.filter((item) => arr.indexOf(item.type) !== -1);
console.log(params);
