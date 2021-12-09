export type ApiResponse = Partial<{
    error: string
    message: string
    account_type: string
    author_name: string
    author_url: string
    description: string
    duration: number
    height: number
    html: string
    is_plus: string
    provider_name: string
    provider_url: string
    thumbnail_height: number
    thumbnail_url: string
    thumbnail_url_with_play_button: string
    thumbnail_width: number
    title: string
    type: string
    upload_date: Date
    uri: string
    url: string
    version: string
    video_id: number
    width: number
}>