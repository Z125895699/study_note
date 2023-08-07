function getFlatMenuList(menuList) {
  let newMenuList= JSON.parse(JSON.stringify(menuList));
  return newMenuList.flatMap(item => {
    let { children, ...itemWithoutChildren } = item;
    //返回是itemWithoutChildren和getFlatMenuList(children)的结果
    return [itemWithoutChildren, ...(children ? getFlatMenuList(children) : [])];
  });
}


let arr =[
  {
    name:'1',
    children:[
      {
        name:'1-1'
      }
    ]
  },
  {
    name:'2',
  },
  {
    name:'3',
    children:[
      {
        name:'3-3'
      }
    ]
  },
]
// getFlatMenuList(arr)
console.log(getFlatMenuList(arr));
