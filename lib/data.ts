export interface Album {
    id: string;
    title: string;
    label: string; // e.g. "1ST ALBUM"
    year: string;
    cover: string;
    description: string;
    tracks: string[];
    color: string;
    links: {
        suno?: string;
        youtubeMusic?: string;
        appleMusic?: string;
    };
}

export const albums: Album[] = [
    {
        id: "1",
        title: "痺れてる",
        label: "1ST ALBUM",
        year: "2024",
        cover: "/album1-shibireru.png",
        description: "静寂の中に響く、心の声。Obsidianのデビューアルバム。",
        tracks: ["Track 1", "Track 2", "Track 3"],
        color: "#a855f7",
        links: {
            suno: "https://suno.com/playlist/6d4afb8c-63d2-4280-95af-af69aa0bbd9c",
            youtubeMusic: "https://music.youtube.com/channel/UCZHPqqMcMQnWebBW22Yvz-w",
            appleMusic: "https://music.apple.com/jp/artist/obsidian/1848987605",
        },
    },
    {
        id: "2",
        title: "JYUSSYU -10種-",
        label: "2ND ALBUM",
        year: "2024",
        cover: "/album2-jyussyu.png",
        description: "デジタルとアナログが交差する、夢の世界。",
        tracks: ["Track 1", "Track 2", "Track 3"],
        color: "#d946ef",
        links: {
            suno: "https://suno.com/playlist/07ebdae0-4135-4475-9c09-a1657c551894",
            youtubeMusic: "https://music.youtube.com/channel/UCZHPqqMcMQnWebBW22Yvz-w",
            appleMusic: "https://music.apple.com/jp/artist/obsidian/1848987605",
        },
    },
];
