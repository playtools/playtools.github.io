export const fetchCss = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const cssText = await response.text();
        return cssText;
    } catch (error) {
        console.error('Error fetching CSS:', error);
        return null;
    }
};