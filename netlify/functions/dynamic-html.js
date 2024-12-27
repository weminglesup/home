exports.handler = async (event) => {
    const { imageUrl, title, description } = event.queryStringParameters;

    // 기본값 설정
    const ogImage = imageUrl || 'https://example.com/default-image.png';
    const ogTitle = title || 'Default Title';
    const ogDescription = description || 'Default description';

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta property="og:title" content="${ogTitle}">
                <meta property="og:description" content="${ogDescription}">
                <meta property="og:image" content="${ogImage}">
                <meta property="og:type" content="website">
                <meta property="og:url" content="https://your-netlify-site.netlify.app/">
                <title>${ogTitle}</title>
            </head>
            <body>
                <h1>${ogTitle}</h1>
                <p>${ogDescription}</p>
                <img src="${ogImage}" alt="Preview Image" style="max-width: 100%; height: auto;">
            </body>
            </html>
        `,
    };
};
