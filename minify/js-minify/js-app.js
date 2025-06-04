document.getElementById('minify-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const jsInput = document.getElementById('js-input').value.trim();
    const jsUrl = document.getElementById('js-url').value.trim();
    let jsCode = jsInput;
    let minified = '';

    // Agar URL diya hai toh usko fetch karo, warna textarea ka code lo
    if (jsUrl) {
        try {
            const response = await fetch(jsUrl);
            if (!response.ok) throw new Error('Unable to fetch JS from URL');
            jsCode = await response.text();
        } catch (err) {
            document.getElementById('minified-output').textContent = 'Error: ' + err.message;
            document.getElementById('size-info').textContent = '';
            return;
        }
    } else if (!jsInput) {
        document.getElementById('minified-output').textContent = 'Please enter JS code or URL.';
        document.getElementById('size-info').textContent = '';
        return;
    }

    // Simple JS minifier (removes comments, whitespace, and newlines)
    minified = jsCode
        .replace(/\/\/.*$/gm, '')              // Remove single-line comments
        .replace(/\/\*[\s\S]*?\*\//g, '')      // Remove multi-line comments
        .replace(/\s{2,}/g, ' ')               // Collapse multiple spaces
        .replace(/\s*([{};,:=()\[\]])\s*/g, '$1') // Remove space around symbols
        .replace(/\n/g, '');                   // Remove newlines

    document.getElementById('minified-output').textContent = minified;

    // Size info
    const originalSize = new Blob([jsCode]).size;
    const minifiedSize = new Blob([minified]).size;
    document.getElementById('size-info').textContent =
        `Original Size: ${originalSize} bytes | Minified Size: ${minifiedSize} bytes | Saved: ${originalSize - minifiedSize} bytes`;
});