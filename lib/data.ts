export interface Album {
    id: string;
    title: string;
    label: string; // e.g. "1ST ALBUM"
    year: string;
    cover: string;
    modalCover?: string; // Image to show in the modal (if different from cover)
    description: string;
    tracks: string[];
    color: string;
    links: {
        suno?: string;
        youtubeMusic?: string;
        appleMusic?: string;
        spotify?: string;
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
            suno: "https://suno.com/playlist/6d4afb8c-63d2-4280-95af-af69aa0bbd9c",
            youtubeMusic: "https://music.youtube.com/channel/UCZHPqqMcMQnWebBW22Yvz-w",
            appleMusic: "https://music.apple.com/jp/artist/obsidian/1848987605",
            spotify: "https://open.spotify.com/intl-ja/album/0ZAtmpf0XWtlYHsMi5OjyF"
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
            appleMusic: "https://music.apple.com/jp/artist/obsidian/1848987605",
            spotify: "https://open.spotify.com/intl-ja/artist/522vxZ4OIMnv2Uz7zVywEJ"
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
    {
        id: "3",
        title: "Obsidian Anthem",
        label: "3RD ALBUM",
        year: "2025",
        cover: "/album3-jacket.jpg", // New Jacket
        modalCover: "/album3-cover.png", // Original Cover for Modal
        description: "新たな夜明けのシグナル。電子の海を越えて響く、Obsidianのアンセム。",
        tracks: [
            "Daybreak Signal",
            "冷たいゆりかご(Cold Cradle)",
            "風の色(Colors of the Wind)",
            "欠落した記憶(Missing Memory)",
            "鉄の処女の告解(Confession of the Iron Maiden)",
            "硝子の棺、食み破って(Breaking the Glass Coffin)",
            "魂の共鳴(Resonance of Souls)",
            "鉄の巨人のための子守唄(Lullaby for the Iron Giant)",
            "ソファの真ん中(Nowhere but the Middle)",
            "Obsidian Anthem"
        ],
        color: "#3b82f6", // Keeping Blue? Or maybe change based on cover analysis (Dark/Blue)
        links: {
            suno: "https://suno.com/playlist/2d9a7cc2-fe08-472a-b781-625aa5820579",
            youtubeMusic: "https://music.youtube.com/channel/UCZHPqqMcMQnWebBW22Yvz-w",
            appleMusic: "https://music.apple.com/jp/artist/obsidian/1848987605",
            spotify: "https://open.spotify.com/intl-ja/artist/522vxZ4OIMnv2Uz7zVywEJ"
        },
        mvs: [
            { id: "Z_tCUd2_Zj0", title: "Daybreak Signal" }
        ],
        conceptArt: [
            "/concept/album3/3060307266684823.png",
            "/concept/album3/cursor_11.png", // Renamed from "Cursor _11.png"
            "/concept/album3/Obsidian.png",
            "/concept/album3/easy-banana-2025-11-29T06-30-39-896Z.png",
            "/concept/album3/easy-banana-2025-11-29T07-46-29-458Z.png",
            "/concept/album3/easy-banana-2025-11-29T10-52-40-080Z.png",
            "/concept/album3/easy-banana-2025-11-29T11-04-12-734Z.png",
            "/concept/album3/easy-banana-2025-11-29T11-08-16-112Z.png",
            "/concept/album3/easy-banana-2025-11-29T11-12-20-990Z.png",
            "/concept/album3/easy-banana-2025-11-29T11-12-37-647Z.png",
            "/concept/album3/easy-banana-2025-12-04T02-05-57-367Z.png",
            "/concept/album3/tomoko_red.png"
        ]
    }
];
