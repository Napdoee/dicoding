    const fs = require('fs');
    const path = require('path');

    const article = path.resolve(__dirname, 'article.txt');
     
    const readableStream = fs.createReadStream(article, {
        highWaterMark: 10
    });
     
    readableStream.on('readable', () => {
        try {
            process.stdout.write(`[${readableStream.read()}]`);
        } catch(error) {
            console.log('Error Readable Stream: ', error.message);
        }
    });
     
    readableStream.on('end', () => {
        console.log('Done');
    });
