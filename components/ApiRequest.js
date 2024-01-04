// import { Client as Discogs } from "disconnect";
import token from "../secrets";

export default function ApiRequest(isbn) {
    // const db = new Discogs(
    //     "Discogs-ISBN-Scanner/0.1 +https://github.com/phlepp1111/Discogs-ISBN-Scanner"
    // ).database();

    const getRelease = async (isbn) => {
        const response = await fetch(
            `https://api.discogs.com/database/search?q=${isbn}&type=release`,
            {
                headers: {
                    Authorization: `Discogs token=${token}`,
                    "User-Agent":
                        "Discogs-ISBN-Scanner/0.1 +https://github.com/phlepp1111/Discogs-ISBN-Scanner",
                },
            }
        );
        const release = await response.json();
        console.log(release);
    };
    return { getRelease };
}
