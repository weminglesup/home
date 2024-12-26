// api/preview.js
module.exports = (req, res) => {
    const { title, description, imageUrl, companyid_index } = req.query;

    // 기본 값 설정
    const defaultImage = "https://cleaningrest-s3bucket.s3.ap-northeast-2.amazonaws.com/wemingle_text.png";
    const ogImage = imageUrl || defaultImage;

    // HTML 문자열로 동적으로 반환할 페이지 구성
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta property="og:title" content="${title || '위밍글'}">
            <meta property="og:description" content="${description || '팀 게임 멤버 및 일정 관리'}">
            <meta property="og:image" content="${ogImage}" id="og-image">
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
                    background-position: center;
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
                .qr-section {
                    padding: 20px;
                    background: #f9f9f9;
                }
                .qr-section img {
                    width: 120px;
                    height: 120px;
                }
                .btn-container a img {
                    margin: 10px;
                    width: 120px;
                    height: auto;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="main-image"></div>
                <div class="content">
                    <h1 class="app-title">${title || '위밍글'}</h1>
                    <p class="description">${description || '팀 게임 멤버 및 일정 관리'}</p>
                    <p>앱을 다운로드하려면 아래 링크를 클릭하세요.</p>
                    <a href="https://wemingle.app">앱 열기</a>
                </div>
                <div class="btn-container">
                    <a href="https://apple.co/4cv5rQ4"><img src="https://cdn.branch.io/branch-assets/1659570097391-og_image.png"></a>
                    <a href="https://bit.ly/3z42JCI"><img src="https://cdn.branch.io/branch-assets/1659570137910-og_image.png"></a>
                </div>
            </div>
        </body>
        </html>
    `;

    // HTML 반환
    res.status(200).send(html);
};
