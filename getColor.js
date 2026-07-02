const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('public/assets/LogoSugamuxi.png')
  .pipe(new PNG({
    filterType: 4
  }))
  .on('parsed', function() {
    const colorCounts = {};
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let idx = (this.width * y + x) << 2;
        const r = this.data[idx];
        const g = this.data[idx+1];
        const b = this.data[idx+2];
        const a = this.data[idx+3];
        
        if (a < 10) continue;
        
        if (g > r + 10 && g > b + 10) {
          const key = `${r},${g},${b}`;
          colorCounts[key] = (colorCounts[key] || 0) + 1;
        }
      }
    }
    
    let maxCount = 0;
    let dominant = null;
    for (const c in colorCounts) {
      if (colorCounts[c] > maxCount) {
        maxCount = colorCounts[c];
        dominant = c;
      }
    }
    
    if (dominant) {
      const [r, g, b] = dominant.split(',');
      const hex = "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
      console.log(`DOMINANT GREEN HEX: ${hex}`);
    } else {
      console.log('No green found');
    }
  });
