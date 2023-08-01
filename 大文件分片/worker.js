self.onmessage = function(e) {
  var file = e.data;
  var sliceSize = 1024 * 1024 * 10; // 切片大小，此处为10MB，可根据需要进行调整
  let chunksCount;

  fileSize = file.size;
  //总共需要多少次
  chunksCount = Math.ceil(fileSize / sliceSize);
  console.log('chunksCount',file,chunksCount)

  let chunks = Array(chunksCount).fill(null).map((_, index) => {
    //开始位置
    let start = index * sliceSize;
    //结束位置
    let end = Math.min(start + sliceSize, fileSize);
    return file.slice(start, end);
  });

  postMessage(chunks);
};
