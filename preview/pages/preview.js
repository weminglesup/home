import React from 'react';

export async function getServerSideProps(context) {
  // URL에서 쿼리 파라미터를 추출합니다.
  const { companyid_index, imageUrl } = context.query;

  // 기본 이미지 URL 설정 (imageUrl이 없으면 기본값 사용)
  const image = imageUrl || "https://cleaningrest-s3bucket.s3.ap-northeast-2.amazonaws.com/wemingle_text.png";

  return {
    props: {
      companyid_index,
      image,
    },
  };
}

const Preview = ({ companyid_index, image }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="위밍글" />
        <meta property="og:description" content="팀 게임 파티 콘텐츠 고정 멤버" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:url" content={`https://wemingle.app/preview?companyid_index=${companyid_index}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={image} />
        <title>Deep Link Preview</title>
      </head>
      <body>
        <div className="container">
          <div className="main-image" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="content">
            <h1 className="app-title">위밍글</h1>
            <p className="description">팀 게임 파티 콘텐츠 고정 멤버</p>
            <p>앱을 다운로드하려면 아래 링크를 클릭하세요.</p>
            <a href={`https://wemingle.app/preview?companyid_index=${companyid_index}`}>앱 열기</a>
          </div>
          <div className="btn-container">
            <a href="https://apple.co/4cv5rQ4">
              <img src="https://cdn.branch.io/branch-assets/1659570097391-og_image.png" />
            </a>
            <a href="https://bit.ly/3z42JCI">
              <img src="https://cdn.branch.io/branch-assets/1659570137910-og_image.png" />
            </a>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Preview;
