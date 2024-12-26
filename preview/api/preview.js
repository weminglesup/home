export default function handler(req, res) {
    const { title, description, image } = req.query;

    const ogTitle = title || "WeMingle - Default Title";
    const ogDescription = description || "Join WeMingle and discover amazing experiences!";
    const ogImage = image || "https://example.com/default-image.jpg";

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
