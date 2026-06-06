import fs from 'fs';
import path from 'path';
import 'dotenv/config';

async function downloadPhotos() {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    console.error("PEXELS_API_KEY not set");
    return;
  }
  
  const response = await fetch("https://api.pexels.com/v1/search?query=romantic+couple+hugging&per_page=15&orientation=portrait", {
    headers: { 'Authorization': apiKey }
  });
  
  const data = await response.json();
  const photos = data.photos;
  
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const url = i === 0 ? photo.src.large2x : photo.src.large;
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    
    fs.writeFileSync(path.join('public', 'images', `pexels-${i}.jpg`), Buffer.from(buffer));
    console.log(`Downloaded pexels-${i}.jpg`);
  }
}

downloadPhotos();
