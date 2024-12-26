export default function handler(req, res) {
    const { title, description, imageUrl, companyid_index } = req.query;
    const userAgent = req.headers['user-agent'];

    // 기본 이미지 설정
    const defaultImage = "https://cleaningrest-s3bucket.s3.ap-northeast-2.amazonaws.com/wemingle_text.png";
    const ogImage = imageUrl || defaultImage;

    // User-Agent로 크롤러 감지
    const isCrawler = /facebook|twitter|kakao|googlebot|slack|discord/i.test(userAgent);

    if (isCrawler) {
        // 크롤러에게 미리보기 HTML 반환
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta property="og:title" content="${title || '위밍글'}">
                <meta property="og:description" content="${description || '팀 게임 멤버 및 일정 관리'}">
                <meta property="og:image" content="${ogImage}">
                <meta property="og:url" content="https://wemingle.app">
                <meta property="og:type" content="website">
                <meta name="twitter:card" content="summary">
                <meta name="twitter:title" content="${title || '위밍글'}">
                <meta name="twitter:description" content="${description || '팀 게임 멤버 및 일정 관리'}">
                <meta name="twitter:image" content="${ogImage}">
                <title>미리보기</title>
            </head>
            <body>
                <h1>${title || '위밍글'}</h1>
                <p>${description || '팀 게임 멤버 및 일정 관리'}</p>
                <img src="${ogImage}" alt="미리보기 이미지" style="max-width: 100%; height: auto;">
            </body>
            </html>
        `;
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
    } else {
        // 일반 사용자에게 딥링크 리디렉션
        const deepLink = `wemingle://deepLink?companyid_index=${companyid_index || ''}`;
        res.writeHead(302, { Location: deepLink });
        res.end();
    }
}
