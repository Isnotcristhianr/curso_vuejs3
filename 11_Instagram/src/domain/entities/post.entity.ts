import type { Timestamp } from "firebase/firestore";
import { DateTime } from "luxon";

export interface PostEntity {
    uid: string
    id?: string
    active: boolean
    createdAt: Date | Timestamp | DateTime | string
    img?: string
    description?: string
    likes?: string[]
    comments?: string[]
}

export interface PostsEntity {
    posts: PostEntity[]
}