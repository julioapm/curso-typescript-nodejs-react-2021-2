export interface listUser {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Array<user>,
    support: support,
}

interface user {
    id: number,
    email: string,
    fisrt_name: string,
    last_name: string,
    avatar: string,
}

interface support {
    url: string,
    text: string
}
