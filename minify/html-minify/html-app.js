document.getElementById('minify-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const htmlInput = document.getElementById('html-input').value.trim();
    const htmlUrl = document.getElementById('html-url').value.trim();
    let htmlCode = htmlInput;
    let minified = '';

    // Agar URL diya hai toh usko fetch karo, warna textarea ka code lo
    if (htmlUrl) {
        try {
            const response = await fetch(htmlUrl);
            if (!response.ok) throw new Error('Unable to fetch HTML from URL');
            htmlCode = await response.text();
        } catch (err) {
            document.getElementById('minified-output').textContent = 'Error: ' + err.message;
            document.getElementById('size-info').textContent = '';
            return;
        }
    } else if (!htmlInput) {
        document.getElementById('minified-output').textContent = 'Please enter HTML code or URL.';
        document.getElementById('size-info').textContent = '';
        return;
    }

    // Simple HTML minifier: removes comments, blank lines, and unnecessary spaces
    minified = htmlCode
        .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
        .replace(/\n\s*/g, '')           // Remove newlines and leading spaces
        .replace(/\s{2,}/g, ' ')         // Collapse multiple spaces
        .replace(/>\s+</g, '><')         // Remove spaces between tags
        .trim();

    document.getElementById('minified-output').textContent = minified;

    // Size info
    const originalSize = new Blob([htmlCode]).size;
    const minifiedSize = new Blob([minified]).size;
    document.getElementById('size-info').textContent =
        `Original Size: ${originalSize} bytes | Minified Size: ${minifiedSize} bytes | Saved: ${originalSize - minifiedSize} bytes`;
});