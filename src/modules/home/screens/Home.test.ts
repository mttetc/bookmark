import fetch from 'jest-fetch-mock';
import { useFetch } from '../../../hooks/useFetch';

require('jest-fetch-mock').enableMocks()

describe('testing api', () => {
  // beforeEach(() => {
  //   fetch.resetMocks()
  // })

  // it('calls google and returns data to me', async () => {
  //   fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

  //   //assert on the response
  //   const res = await useFetch({ url: 'https://vimeo.com/74918975' })
  //   expect(res.response).toEqual({
  //     account_type: "business",
  //     author_name: "Mouvement Colibris",
  //     author_url: "https://vimeo.com/colibris",
  //     description: "En 3', voici comment mettre en ligne votre vidéo \"(R)êve d'école\" !",
  //     duration: 211,
  //     height: 270,
  //     html: "<iframe src=\"https://player.vimeo.com/video/74918975?h=b2f1716794&amp;app_id=122963\" width=\"480\" height=\"270\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen title=\"Comment mettre en ligne votre vid&amp;eacute;o\"></iframe>",
  //     is_plus: "0",
  //     provider_name: "Vimeo",
  //     provider_url: "https://vimeo.com/",
  //     thumbnail_height: 166,
  //     thumbnail_url: "https://i.vimeocdn.com/video/449365291-86b78f2542d9b13c68fe6634e6f0e55db55b0e515fa3686820895c8b948c373a-d_295x166",
  //     thumbnail_url_with_play_button: "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F449365291-86b78f2542d9b13c68fe6634e6f0e55db55b0e515fa3686820895c8b948c373a-d_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
  //     thumbnail_width: 295,
  //     title: "Comment mettre en ligne votre vidéo",
  //     type: "video",
  //     upload_date: "2013-09-19 06:08:41",
  //     uri: "/videos/74918975",
  //     url: "https://vimeo.com/74918975",
  //     version: "1.0",
  //     video_id: 74918975,
  //     width: 480
  //   })

  //   //assert on the times called and arguments given to fetch
  //   expect(fetch.mock.calls.length).toEqual(1)
  //   // expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
  // })
})