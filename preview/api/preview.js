export default function handler(req, res) {
    const { title, description, imageUrl, companyid_index } = req.query;

    // 기본 이미지 설정
    const defaultImage = "https://cleaningrest-s3bucket.s3.ap-northeast-2.amazonaws.com/wemingle_text.png";
    const ogImage = imageUrl || defaultImage;

    // 정적 HTML 반환
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta property="og:title" content="${title || '위밍글'}">
            <meta property="og:description" content="${description || '팀 게임 멤버 및 일정 관리'}">
            <meta property="og:image" content="${ogImage}">
            <meta property="og:image:width" content="150">
            <meta property="og:image:height" content="150">
            <meta property="og:url" content="https://wemingle.app">
            <meta property="og:type" content="website">
            <meta name="twitter:card" content="summary">
            <meta name="twitter:title" content="${title || '위밍글'}">
            <meta name="twitter:description" content="${description || '팀 게임 멤버 및 일정 관리'}">
            <meta name="twitter:image" content="${ogImage}">
            <title>Deep Link Preview</title>
            <style>
                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    color: #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    width: 90%;
                    max-width: 600px;
                    background: #fff;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    border-radius: 12px;
                    overflow: hidden;
                    text-align: center;
                }
                .main-image {
                    width: 50%;
                    height: 250px;
                    background: url('${ogImage}') no-repeat center center;
                    background-size: cover;
                    margin: 0 auto;
                }
                .content {
                    padding: 20px;
                }
                .app-title {
                    font-size: 1.5em;
                    font-weight: bold;
                    margin: 0;
                }
                .description {
                    margin: 10px 0;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="main-image"></div>
                <div class="content">
                    <h1 class="app-title">${title || '위밍글'}</h1>
                    <p class="description">${description || '팀 게임 멤버 및 일정 관리'}</p>
                </div>
            </div>
        </body>
        </html>
    `;

    res.status(200).send(html);
}
