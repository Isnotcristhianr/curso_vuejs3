import type { Timestamp } from "firebase/firestore";

export interface PostEntity {
    uid: string
    id?: string
    active: boolean
    createdAt: Date | Timestamp  | string
    img?: string
    description?: string
    likes?: string[]
    comments?: string[]
}

export interface PostsEntity {
    posts: PostEntity[]
}