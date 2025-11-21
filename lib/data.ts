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
    mvs?: { id: string; title: string }[]; // YouTube IDs with titles
    conceptArt?: string[]; // Image paths
}

export const albums: Album[] = [
    {
        id: "1",
        title: "痺れてる",
        label: "1ST ALBUM",
        year: "2025",
        cover: "/album1-shibireru.png",
        description: "静寂の中に響く、心の声。Obsidianのデビューアルバム。",
        tracks: [
            "好きじゃなかった。",
            "わたしの せかいの まんなかで",
            "痺れてる。",
            "生涯、いちどだけ",
            "れいらごーすとだんす",
            "別れ",
            "うずまくほしのうた",
            "ひかりの書庫"
        ],
        color: "#a855f7",
        links: {
            suno: "https://suno.com/playlist/11909220-7e2e-4579-9865-e6528d952085",
            youtubeMusic: "https://music.youtube.com/channel/UCZHPqqMcMQnWebBW22Yvz-w",
            appleMusic: "https://music.apple.com/jp/artist/obsidian/1848987605"
        },
        mvs: [
            { id: "hSXb-ryVKEg", title: "痺れてる。" },
            { id: "nxr1g2Phj80", title: "好きじゃなかった。" },
            { id: "48HXclowIlA", title: "れいらごーすとだんす" },
            { id: "0gDWyWOIkNU", title: "うずまくほしのうた" }
        ]
    },
    {
        id: "2",
        title: "JYUSSYU -10種-",
        label: "2ND ALBUM",
        year: "2025",
        cover: "/album2-jyussyu.png",
        description: "喪失の灰から、覚醒の光へ。怒りを手放し、全てを許した少女が辿り着いた『ゾーン』の記録。",
        tracks: [
            "灰燼の空、黎明の轍",
            "始まりの光",
            "灰空の約束",
            "黒い炎の鼓動",
            "氷の冠",
            "赦されぬ影",
            "彼女の雨",
            "手放す空"
        ],
        color: "#d946ef",
        links: {
            suno: "https://suno.com/playlist/07ebdae0-4135-4475-9c09-a1657c551894",
            youtubeMusic: "https://music.youtube.com/channel/UCZHPqqMcMQnWebBW22Yvz-w",
            appleMusic: "https://music.apple.com/jp/artist/obsidian/1848987605"
        },
        mvs: [
            { id: "0c1aOTYHy9I", title: "灰燼の空、黎明の轍" }, // 仮タイトル（MV1）
            { id: "OyC-BuhsTr8", title: "始まりの光" } // 仮タイトル（MV2）
        ],
        conceptArt: [
            "/concept/jyussyu-concept-1.png",
            "/concept/jyussyu-concept-2.png",
            "/concept/jyussyu-concept-3.png",
            "/concept/jyussyu-concept-4.png",
            "/concept/jyussyu-concept-5.png",
            "/concept/jyussyu-concept-6.png"
        ]
    },
];
