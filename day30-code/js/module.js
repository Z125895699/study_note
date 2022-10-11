let title = '张大叔';
let url = 'www.zd.com';
function show () {
  console.log('张大叔是我');
}
//不导出就是私有的
export { title, url, show }

