const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');
const cors = require('cors');

const upload = multer({ dest: 'chunks/' }); // 设置分片上传的临时目录
const app = express();
const uploadedFiles = {};

// 使用cors中间件允许跨源请求
app.use(cors());

// 检查uploads目录是否存在，如果不存在，则创建它
fs.ensureDir('uploads', err => {
    if (err) throw err;
});

app.post('/upload', upload.single('chunk'), (req, res) => {
    const { index, filename,hash } = req.body;
    console.log(`Received chunk ${index} for file ${filename} with hash ${hash}`); // 打印收到的文件分片信息和哈希值

    // 创建文件记录，如果不存在
    if (!uploadedFiles[filename]) {
        uploadedFiles[filename] = [];
    }
    // 存储已上传分片的索引
    uploadedFiles[filename].push(parseInt(index));
    // 保存分片文件，并覆盖已存在的文件
    fs.move(req.file.path, `chunks/${filename}-${index}`, { overwrite: true }, err => {
        if (err) throw err;
        // console.log(`Saved chunk ${index} for file ${filename}`); // 打印保存的文件分片信息
        res.json({ message: `Chunk ${index} for file ${filename} uploaded successfully` });
    });
});

app.get('/status', (req, res) => {
    const { filename } = req.query;
    // console.log(`Checked status for file ${filename}`); // 打印查看文件状态信息
    // 发送已上传分片的索引
    res.json({ uploaded: uploadedFiles[filename] || [] });
});

app.post('/merge', express.json(), async (req, res) => {
    const { filename, chunksCount,hash } = req.body;
    console.log(`Starting to merge file ${filename} ${hash}`); // 打印开始合并文件的信息
    const filePath = path.resolve('uploads', filename);
    const writeStream = fs.createWriteStream(filePath);

    // 按顺序合并分片
    for (let index = 0; index < chunksCount; index++) {
        const chunkPath = path.resolve('chunks', `${filename}-${index}`);
        const readStream = fs.createReadStream(chunkPath);

        readStream.pipe(writeStream, { end: false });
        await new Promise(resolve => readStream.on('end', resolve));
        fs.remove(chunkPath);  // 删除已合并的分片
    }
    writeStream.end();

    console.log(`Finished merging file ${filename}`); // 打印完成合并文件的信息

    delete uploadedFiles[filename];  // 删除文件记录

    res.json({ message: `File ${filename} merged successfully` });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
