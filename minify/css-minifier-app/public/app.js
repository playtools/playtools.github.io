document.getElementById('minify-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const cssInput = document.getElementById('css-input').value.trim();
    const cssUrl = document.getElementById('css-url').value.trim();
    let cssCode = cssInput;
    let minified = '';

    // Agar URL diya hai toh usko fetch karo, warna textarea ka code lo
    if (cssUrl) {
        try {
            const response = await fetch(cssUrl);
            if (!response.ok) throw new Error('Unable to fetch CSS from URL');
            cssCode = await response.text();
        } catch (err) {
            document.getElementById('minified-output').textContent = 'Error: ' + err.message;
            document.getElementById('size-info').textContent = '';
            return;
        }
    } else if (!cssInput) {
        document.getElementById('minified-output').textContent = 'Please enter CSS code or URL.';
        document.getElementById('size-info').textContent = '';
        return;
    }

    // CSS minify logic
    minified = cssCode
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s{2,}/g, ' ')          // Collapse spaces
        .replace(/\s*([{}:;,])\s*/g, '$1')// Remove space around symbols
        .replace(/;\}/g, '}')             // Remove semicolon before }
        .replace(/\n/g, '');              // Remove newlines

    document.getElementById('minified-output').textContent = minified;

    // Size info
    const originalSize = new Blob([cssCode]).size;
    const minifiedSize = new Blob([minified]).size;
    document.getElementById('size-info').textContent =
        `Original Size: ${originalSize} bytes | Minified Size: ${minifiedSize} bytes | Saved: ${originalSize - minifiedSize} bytes`;
});