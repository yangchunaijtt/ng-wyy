export type Banner = {
    targetId: number,
    imageUrl: string,
    url: string
}
export type PlayTags = {
    id: number,
    name: string,
    position: number
}

export type PlayList = {
    id: number,
    name: string,
    playCount: number,
    picUrl: string
}

export type SongSheet = {
    id: number,
    name: string,
    playCount: number,
    picUrl: string
}

export type Singer = {
    id: number,
    picUrl: string,
    name: string,
    briefDesc: string,
    albumSize: number
}