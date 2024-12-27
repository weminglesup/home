exports.handler = async (event, context) => {
  const urlParams = new URLSearchParams(event.queryStringParameters);

  // 쿼리 파라미터에서 필요한 값 가져오기
  const imageUrl = urlParams.get("imageUrl") || "https://cleaningrest-s3bucket.s3.ap-northeast-2.amazonaws.com/wemingle_text.png";
  const companyidIndex = urlParams.get("companyid_index") || "";

  // 딥링크 URL 구성
  const deepLinkUrl = `wemingle://preview?imageUrl=${imageUrl}&companyid_index=${companyidIndex}&uni_link=true`;

  // HTML 내용 반환
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:title" content="위밍글">
        <meta property="og:description" content="팀 게임 파티 콘텐츠 고정 멤버">
        <meta property="og:image" content="${imageUrl}" id="og-image">
        <meta property="og:image:width" content="150">
        <meta property="og:image:height" content="150">
        <meta property="og:url" content="https://wemingle.app">
        <meta property="og:type" content="website">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="위밍글">
        <meta name="twitter:description" content="팀 게임 파티 콘텐츠 고정 멤버">
        <meta name="twitter:image" content="${imageUrl}">
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
                width: 100%;
                height: 250px;
                background: url('${imageUrl}') no-repeat center center;
                background-size: contain;
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
                <h1 class="app-title">위밍글</h1>
                <p class="description">팀 게임 파티 콘텐츠 고정 멤버</p>
                <p>앱을 다운로드하려면 아래 링크를 클릭하세요.</p>
                <a href="https://wemingle.app">앱 열기</a>
            </div>
            <div class="btn-container">
                <a href="https://apple.co/4cv5rQ4"><img src="https://cdn.branch.io/branch-assets/1659570097391-og_image.png"></a>
                <a href="https://bit.ly/3z42JCI"><img src="https://cdn.branch.io/branch-assets/1659570137910-og_image.png"></a>
            </div>
        </div>
        <script>
            // 딥링크 URL로 리디렉션
            window.location.href = "${deepLinkUrl}";
            
            // 2초 후 앱이 없으면 스토어로 리디렉션
            setTimeout(function () {
                const userAgent = navigator.userAgent || navigator.vendor || window.opera;
                if (/android/i.test(userAgent)) {
                    window.location.href = "https://play.google.com/store/apps/details?id=com.wemingle.cleaningrest";
                } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                    window.location.href = "https://apps.apple.com/us/app/id6480429052";
                }
            }, 2000);
        </script>
    </body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: htmlContent,
  };
};
