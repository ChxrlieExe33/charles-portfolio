export type Project = {
    id : string,
    title : string,
    description : string,
    urls : {
        name: string,
        url: string,
    }[],
    images? : string[]
}
