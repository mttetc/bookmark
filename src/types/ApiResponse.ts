export type VimeoResponse = {
  message: string;
  account_type: string;
  author_name: string;
  author_url: string;
  description: string;
  duration: number;
  height: number;
  html: string;
  is_plus: string;
  provider_name: string;
  provider_url: string;
  thumbnail_height: number;
  thumbnail_url: string;
  thumbnail_url_with_play_button: string;
  thumbnail_width: number;
  title: string;
  type: string;
  upload_date: Date;
  uri: string;
  url: string;
  version: string;
  video_id: number;
  width: number;
};

export type FlickrResponse = {
  author_name: string;
  author_url: string;
  cache_age: number;
  flickr_type: string;
  height: number;
  html: string;
  license: string;
  license_id: string;
  license_url: string;
  media_url: string;
  provider_name: string;
  provider_url: string;
  thumbnail_height: string;
  thumbnail_url: string;
  thumbnail_width: number;
  title: string;
  type: string;
  url: string;
  version: string;
  web_page: string;
  web_page_short_url: string;
  width: number;
};

export type ApiResponse =
  | {
      error?: string;
    }
  | FlickrResponse
  | VimeoResponse;
