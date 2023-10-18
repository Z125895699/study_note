async function sleep(sleep:number):Promise<void>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },sleep)
  })
}

sleep(3000).then(()=>{
  console.log('sleep 100')
})
