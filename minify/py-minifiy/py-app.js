document.getElementById('minify-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const pyInput = document.getElementById('py-input').value.trim();
    const pyUrl = document.getElementById('py-url').value.trim();
    let pyCode = pyInput;
    let minified = '';

    // Agar URL diya hai toh usko fetch karo, warna textarea ka code lo
    if (pyUrl) {
        try {
            const response = await fetch(pyUrl);
            if (!response.ok) throw new Error('Unable to fetch Python from URL');
            pyCode = await response.text();
        } catch (err) {
            document.getElementById('minified-output').textContent = 'Error: ' + err.message;
            document.getElementById('size-info').textContent = '';
            return;
        }
    } else if (!pyInput) {
        document.getElementById('minified-output').textContent = 'Please enter Python code or URL.';
        document.getElementById('size-info').textContent = '';
        return;
    }

    // Simple Python minifier: removes comments, blank lines, and unnecessary spaces
    minified = pyCode
        .split('\n')
        .map(line => line.replace(/#.*$/, '').trim()) // Remove comments and trim
        .filter(line => line.length > 0)              // Remove blank lines
        .join(';');                                   // Join with semicolons

    document.getElementById('minified-output').textContent = minified;

    // Size info
    const originalSize = new Blob([pyCode]).size;
    const minifiedSize = new Blob([minified]).size;
    document.getElementById('size-info').textContent =
        `Original Size: ${originalSize} bytes | Minified Size: ${minifiedSize} bytes | Saved: ${originalSize - minifiedSize} bytes`;
});