const fs = require('fs/promises')
const fsSync = require('fs')
const path = require('path')

const CHUNK_SIZE = 1024 * 10
//定义一个临时目录
const temp_dir = path.resolve(__dirname, 'temp')

//
const public_dir = path.resolve(__dirname, 'public')


//文件切割
async function fileSlice(filename, size = CHUNK_SIZE) {
  const file = await fs.readFile(path.resolve(__dirname, filename))
  console.log(file)
  //判断有没有临时目录 没有就创建temp_dir目录
  if (!fsSync.existsSync('temp_dir')) {
    await fs.mkdir(temp_dir, { recursive: true })
  }

  //读取temp_dir下以filname命名的目录
  const filePath = path.resolve(temp_dir, filename)

  //判断有没有filname命名的目录 没有就创建filePath目录
  if (!fsSync.existsSync(filePath)) {
    await fs.mkdir(filePath, { recursive: true })
  }

  //循环切割，并写入到filePath目录下
  //首先判断current是否大于文件的长度
  //如果小于的话,就从当前位置截取当前位置和size加起来大小的文件
  //然后写入到临时目录下的filePath目录下
  let i = 0, current = 0
  while (current < file.length) {
    const chunk = file.slice(current, current + size)
    await fs.writeFile(path.resolve(filePath, `${filename}-${i++}`), chunk)
    // current += size => current = current + size
    current += size
  }
}
// fileSlice('./jiaxiang.jpeg')


async function fileMerge(filename, size = CHUNK_SIZE) {
  //检查有没有public_dir目录,目录有就创建public_dir目录
  if (!fsSync.existsSync(public_dir)) {
    fs.mkdirSync(public_dir, { recursive: true });
  }

  //如果没有temp_dir目录就退出
  if (!fsSync.existsSync(temp_dir)) {
    return
  }

  //读取temp_dir目录下的以filename命名的目录
  const filePath = path.resolve(temp_dir, filename)

  //如果没有filePath目录就退出
  if (!fsSync.existsSync(filePath)) {
    return
  }

  //读取filePath目录下的文件
  const files = await fs.readdir(filePath)
  console.log('files', files)

  //排序
  files.sort((a, b) => {
    const numberA = parseInt(a.match(/(\d+)(?!.*\d)/)[0], 10);
    const numberB = parseInt(b.match(/(\d+)(?!.*\d)/)[0], 10);
    return numberA - numberB;
  });
  console.log('filessort', files)

  await Promise.all(files.map((chunkName, index) => {
    return new Promise((resolve, reject) => {
      const rs = fsSync.createReadStream(path.resolve(filePath, chunkName))
      const ws = fsSync.createWriteStream(path.resolve(public_dir, filename), {
        flags: 'a',
        start: index * size
      })

      rs.pipe(ws)
      //以下写法不会删除filePath目录  fs.unlink是异步的,
      // fs.unlink(path.resolve(filePath, chunkName), (err) => {
      //   if (err) {
      //     reject(err)
      //   } else {
      //     resolve()
      //     rs.close()
      //   }
      rs.on('end', () => {
        fs.unlink(path.resolve(filePath, chunkName))
        rs.close()
        resolve()
      })
    })
  }))
  try {
    fs.rmdir(filePath);
    console.log('Directory removed')
  } catch (err) {
    console.error('Directory', err)
  }
}
fileMerge('./jiaxiang.jpeg')
