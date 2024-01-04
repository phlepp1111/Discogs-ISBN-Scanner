import token from "../secrets";

export default function ApiRequest() {
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
        // console.log(release.results);
        return release.results;
    };
    return { getRelease };
}
