export default function handler(req, res) {
    const { title, description, imageUrl } = req.query;

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:title" content="${title || '위밍글테스트'}">
        <meta property="og:description" content="${description || '팀 게임 멤버 및 일정 관리'}">
        <meta property="og:image" content="${imageUrl || 'https://cleaningrest-s3bucket.s3.ap-northeast-2.amazonaws.com/wemingle_text.png'}">
        <title>Preview</title>
    </head>
    <body>
        <h1>${title || '위밍글테스트'}</h1>
        <p>${description || '팀 게임 멤버 및 일정 관리'}</p>
        <img src="${imageUrl || 'https://cleaningrest-s3bucket.s3.ap-northeast-2.amazonaws.com/wemingle_text.png'}" alt="Preview Image">
    </body>
    </html>`;
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(htmlContent);
}
