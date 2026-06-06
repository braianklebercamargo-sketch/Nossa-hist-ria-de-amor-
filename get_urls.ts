import 'dotenv/config';

async function fetchUrls() {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    console.log("No API KEY");
    return;
  }
  const response = await fetch("https://api.pexels.com/v1/search?query=romantic+couple+hugging&per_page=15&orientation=portrait", {
    headers: { 'Authorization': apiKey }
  });
  const data = await response.json();
  if (data.photos && data.photos.length > 0) {
    const heroUrl = data.photos[0].src.large2x;
    const photosUrls = data.photos.slice(1, 11).map((p: any) => p.src.large);
    console.log('HERO_URL=' + heroUrl);
    photosUrls.forEach((url: string, i: number) => console.log('PHOTO_' + i + '=' + url));
  }
}
fetchUrls();
