export default function handler(req, res) {
    const { title, description, image } = req.query;

    const ogTitle = title || "위밍글";
    const ogDescription = description || "팀 게임 멤버 및 일정 관리";
    const ogImage = image || "https://cleaningrest-s3bucket.s3.ap-northeast-2.amazonaws.com/wemingle_text.png";

    res.setHeader("Content-Type", "text/html");
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta property="og:title" content="${ogTitle}">
            <meta property="og:description" content="${ogDescription}">
            <meta property="og:image" content="${ogImage}">
            <meta property="og:type" content="website">
            <meta name="twitter:card" content="summary_image">
            <title>${ogTitle}</title>
        </head>
        <body>
            <h1>${ogTitle}</h1>
            <p>${ogDescription}</p>
        </body>
        </html>
    `);
}
