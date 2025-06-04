function minifyCSS(css) {
    // Remove comments
    css = css.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove whitespace
    css = css.replace(/\s+/g, ' ').trim();
    // Remove unnecessary semicolons
    css = css.replace(/;}/g, '}');
    // Remove spaces before and after colons and semicolons
    css = css.replace(/\s*:\s*/g, ':').replace(/\s*;\s*/g, ';');
    // Remove spaces before and after curly braces
    css = css.replace(/\s*\{\s*/g, '{').replace(/\s*\}\s*/g, '}');
    return css;
}

export default minifyCSS;