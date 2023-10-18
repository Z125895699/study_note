interface people{
  name:string,
  height:number
}

function sortPeople(names: string[], heights: number[]): string[] {
  const combined:people[]= names.map((name, index) => {
    return {
      name,
      height: heights[index],
    };
  });
  combined.sort((a, b) => b.height - a.height)

  return combined.map((item,_,array)=>{
    return item.name
  })
};
const names = ["Mary","John","Emma"] 
const heights = [170,165,180]
console.log('sortPeople(names, heights)', sortPeople(names, heights))
