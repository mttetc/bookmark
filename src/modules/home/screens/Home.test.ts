import fetch from "jest-fetch-mock";
import { ApiResponse } from "../../../types/ApiResponse";
import { doFetch } from "../../../utils/fetch";

require("jest-fetch-mock").enableMocks();

describe("testing api", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("calls vimeo video and returns data to me", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        account_type: "business",
        author_name: "Mouvement Colibris",
        author_url: "https://vimeo.com/colibris",
        description:
          "En 3', voici comment mettre en ligne votre vidéo \"(R)êve d'école\" !",
        duration: 211,
        height: 270,
        html: '<iframe src="https://player.vimeo.com/video/74918975?h=b2f1716794&amp;app_id=122963" width="480" height="270" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Comment mettre en ligne votre vid&amp;eacute;o"></iframe>',
        is_plus: "0",
        provider_name: "Vimeo",
        provider_url: "https://vimeo.com/",
        thumbnail_height: 166,
        thumbnail_url:
          "https://i.vimeocdn.com/video/449365291-86b78f2542d9b13c68fe6634e6f0e55db55b0e515fa3686820895c8b948c373a-d_295x166",
        thumbnail_url_with_play_button:
          "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F449365291-86b78f2542d9b13c68fe6634e6f0e55db55b0e515fa3686820895c8b948c373a-d_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
        thumbnail_width: 295,
        title: "Comment mettre en ligne votre vidéo",
        type: "video",
        upload_date: "2013-09-19 06:08:41",
        uri: "/videos/74918975",
        url: "https://vimeo.com/74918975",
        version: "1.0",
        video_id: 74918975,
        width: 480,
      })
    );

    //assert on the response
    const res = await doFetch<ApiResponse>({
      url: "https://vimeo.com/74918975",
    });
    expect(res).toEqual({
      account_type: "business",
      author_name: "Mouvement Colibris",
      author_url: "https://vimeo.com/colibris",
      description:
        "En 3', voici comment mettre en ligne votre vidéo \"(R)êve d'école\" !",
      duration: 211,
      height: 270,
      html: '<iframe src="https://player.vimeo.com/video/74918975?h=b2f1716794&amp;app_id=122963" width="480" height="270" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Comment mettre en ligne votre vid&amp;eacute;o"></iframe>',
      is_plus: "0",
      provider_name: "Vimeo",
      provider_url: "https://vimeo.com/",
      thumbnail_height: 166,
      thumbnail_url:
        "https://i.vimeocdn.com/video/449365291-86b78f2542d9b13c68fe6634e6f0e55db55b0e515fa3686820895c8b948c373a-d_295x166",
      thumbnail_url_with_play_button:
        "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F449365291-86b78f2542d9b13c68fe6634e6f0e55db55b0e515fa3686820895c8b948c373a-d_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
      thumbnail_width: 295,
      title: "Comment mettre en ligne votre vidéo",
      type: "video",
      upload_date: "2013-09-19 06:08:41",
      uri: "/videos/74918975",
      url: "https://vimeo.com/74918975",
      version: "1.0",
      video_id: 74918975,
      width: 480,
    });

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      "http://noembed.com/embed?url=https://vimeo.com/74918975"
    );
  });

  it("calls flickr image and returns data to me", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        author_name: "Pierre Metivier",
        author_url: "https://www.flickr.com/photos/feuilllu/",
        cache_age: 3600,
        flickr_type: "photo",
        height: 685,
        html: '<a data-flickr-embed="true" href="https://www.flickr.com/photos/feuilllu/45771361701/" title="2018 Visite de Klaxoon by Pierre Metivier, on Flickr"><img alt="2018 Visite de Klaxoon" height="685" src="https://noembed.com/i/https://live.staticflickr.com/4817/45771361701_2678123510_b.jpg" width="1024"></a><script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
        license: "Attribution-NonCommercial License",
        license_id: "2",
        license_url: "https://creativecommons.org/licenses/by-nc/2.0/",
        media_url:
          "https://live.staticflickr.com/4817/45771361701_2678123510_b.jpg",
        provider_name: "Flickr",
        provider_url: "https://www.flickr.com/",
        thumbnail_height: 150,
        thumbnail_url:
          "https://live.staticflickr.com/4817/45771361701_2678123510_q.jpg",
        thumbnail_width: 150,
        title: "2018 Visite de Klaxoon",
        type: "photo",
        url: "https://www.flickr.com/photos/feuilllu/45771361701/",
        version: "1.0",
        web_page: "https://www.flickr.com/photos/feuilllu/45771361701/",
        web_page_short_url: "https://flic.kr/p/2cJEcbD",
        width: 1024,
      })
    );

    //assert on the response
    const res = await doFetch<ApiResponse>({
      url: "https://www.flickr.com/photos/feuilllu/45771361701/",
    });
    expect(res).toEqual({
      author_name: "Pierre Metivier",
      author_url: "https://www.flickr.com/photos/feuilllu/",
      cache_age: 3600,
      flickr_type: "photo",
      height: 685,
      html: '<a data-flickr-embed="true" href="https://www.flickr.com/photos/feuilllu/45771361701/" title="2018 Visite de Klaxoon by Pierre Metivier, on Flickr"><img alt="2018 Visite de Klaxoon" height="685" src="https://noembed.com/i/https://live.staticflickr.com/4817/45771361701_2678123510_b.jpg" width="1024"></a><script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
      license: "Attribution-NonCommercial License",
      license_id: "2",
      license_url: "https://creativecommons.org/licenses/by-nc/2.0/",
      media_url:
        "https://live.staticflickr.com/4817/45771361701_2678123510_b.jpg",
      provider_name: "Flickr",
      provider_url: "https://www.flickr.com/",
      thumbnail_height: 150,
      thumbnail_url:
        "https://live.staticflickr.com/4817/45771361701_2678123510_q.jpg",
      thumbnail_width: 150,
      title: "2018 Visite de Klaxoon",
      type: "photo",
      url: "https://www.flickr.com/photos/feuilllu/45771361701/",
      version: "1.0",
      web_page: "https://www.flickr.com/photos/feuilllu/45771361701/",
      web_page_short_url: "https://flic.kr/p/2cJEcbD",
      width: 1024,
    });

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      "http://noembed.com/embed?url=https://www.flickr.com/photos/feuilllu/45771361701/"
    );
  });
});
