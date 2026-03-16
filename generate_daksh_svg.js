// Script to generate cursive SVG paths for "Daksh"
// Using opentype.js to load a cursive/script font and extract path data

const https = require('https');
const fs = require('fs');
const path = require('path');

// Download Sacramento font (cursive, similar to handwriting)
const fontUrl = 'https://fonts.gstatic.com/s/sacramento/v15/buEzpo6gcdjy0E-pBvwr0Yn4LQ.ttf';

function downloadFont(url, dest, callback) {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close(callback);
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => {});
        console.error('Error downloading font:', err.message);
    });
}

const fontPath = 'sacramento.ttf';
downloadFont(fontUrl, fontPath, () => {
    console.log('Font downloaded');
    
    // Now use text-to-svg with the downloaded font
    const TextToSVG = require('text-to-svg');
    
    TextToSVG.load(fontPath, function(err, textToSVG) {
        if (err) {
            console.error('Error loading font:', err);
            return;
        }

        const options = { fontSize: 120, anchor: 'left top' };
        const metrics = textToSVG.getMetrics('Daksh', options);
        console.log('Metrics:', JSON.stringify(metrics));

        // Get individual letter paths for the animation (each letter draws separately)
        const chars = ['D', 'a', 'k', 's', 'h'];
        let xOffset = 0;
        const paths = [];

        for (const char of chars) {
            const m = textToSVG.getMetrics(char, options);
            const d = textToSVG.getD(char, { x: xOffset, y: 0, fontSize: 120, anchor: 'left top' });
            if (d && d.length > 10) {
                paths.push({ char, d, xOffset });
                console.log(`${char}: x=${xOffset.toFixed(1)}, width=${m.width.toFixed(1)}`);
            }
            xOffset += m.width;
        }

        const width = Math.ceil(xOffset);
        const height = Math.ceil(metrics.height + Math.abs(metrics.y));

        console.log('\nViewBox:', `0 0 ${width} ${height}`);
        console.log('\nPaths count:', paths.length);

        const svgContent = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
${paths.map(p => `  <path d="${p.d.substring(0, 100)}..." />`).join('\n')}
</svg>`;
        
        console.log('\n=== Full path data for logo.tsx ===');
        paths.forEach((p, i) => {
            console.log(`\nPath ${i+1} (${p.char}):`);
            console.log(p.d);
        });

        const output = {
            viewBox: `0 0 ${width} ${height}`,
            paths: paths.map(p => p.d)
        };
        
        fs.writeFileSync('daksh_paths.json', JSON.stringify(output, null, 2));
        console.log('\nPaths saved to daksh_paths.json');
    });
});
