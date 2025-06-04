window.onload = function() {
    render(), $("#splashscreen").fadeOut("slow"), $("#layout-b").hide()
};
var htmlContent = "",
    cssContent = "",
    jsContent = "";

function render() {
    LIVE_MODE && renderPreview()
}

function renderPreview() {
    let e = htmlEditor.getValue(),
        t = cssEditor.getValue(),
        n = jsEditor.getValue(),
        i = `
    <!DOCTYPE html>
    <html>
        <head>
            <style>${t}</style>
        </head>
        <body>
            ${e}
            <script>${n}</script>
        </body>
    </html>
`;
    previewPanel.srcdoc = i
}

function resizer() {
    htmlEditor.layout(), cssEditor.layout(), jsEditor.layout()
}
htmlContent = document.getElementById("html-source").value, cssContent = document.getElementById("css-source").value, jsContent = document.getElementById("js-source").value, TogetherJSConfig_siteName = "Liveweave.com", TogetherJSConfig_toolName = "TeamUp", TogetherJSConfig_hubBase = "https://togetherjs-hub.glitch.me/", require.config({
    paths: {
        vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs"
    }
}), require(["vs/editor/editor.main"], function() {
    htmlEditor = monaco.editor.create(document.getElementById("html"), {
        value: htmlContent,
        language: "html",
        theme: THEME,
        fontSize: FONT_SIZE,
        fixedOverflowWidgets: !0,
        roundedSelection: !1,
        contextmenu: CONTEXT_MENU,
        wordWrap: WORD_WRAP,
        minimap: {
            enabled: MINI_MAP
        }
    })
}), require(["vs/editor/editor.main"], function() {
    cssEditor = monaco.editor.create(document.getElementById("css"), {
        value: cssContent,
        language: "css",
        theme: THEME,
        fontSize: FONT_SIZE,
        fixedOverflowWidgets: !0,
        contextmenu: CONTEXT_MENU,
        wordWrap: WORD_WRAP,
        minimap: {
            enabled: MINI_MAP
        }
    })
}), require(["vs/editor/editor.main"], function() {
    jsEditor = monaco.editor.create(document.getElementById("js"), {
        value: jsContent,
        language: "javascript",
        theme: THEME,
        fontSize: FONT_SIZE,
        fixedOverflowWidgets: !0,
        contextmenu: CONTEXT_MENU,
        wordWrap: WORD_WRAP,
        minimap: {
            enabled: MINI_MAP
        }
    })
}), $("form#myform").submit(function() {
    return document.getElementById("html-source").value = htmlEditor.getValue(), document.getElementById("css-source").value = cssEditor.getValue(), document.getElementById("js-source").value = jsEditor.getValue(), isSaved = !0, ("" != htmlEditor.getValue().trim() || "" != cssEditor.getValue().trim() || "" != jsEditor.getValue().trim()) && alertify.log("Saving..."), $.post("submit.php", $(this).serialize(), function(e) {
        History.pushState({
            state: 1
        }, "Liveweave", "/" + e), ("" != html || "" != css || "" != js) && (alertify.success("Your weave is saved!"), $("#dummy-id").val(e))
    }), !1
});
var splitInstance = Split(["#a", "#b"], {
        gutterSize: 4,
        minSize: 0,
        cursor: "col-resize",
        onDrag: function(e) {
            resizer()
        }
    }),
    splitInstanceA = Split(["#html", "#css"], {
        direction: "vertical",
        minSize: 0,
        sizes: [50, 50],
        gutterSize: 4,
        cursor: "row-resize",
        onDrag: function(e) {
            resizer()
        }
    }),
    splitInstanceB = Split(["#js", "#preview"], {
        direction: "vertical",
        minSize: 0,
        sizes: [50, 50],
        gutterSize: 4,
        cursor: "row-resize",
        onDrag: function(e) {
            resizer()
        }
    });

function lightTheme() {
    root.style.setProperty("--main-bg", "#efefef")
}

function darkTheme() {
    root.style.setProperty("--menu-slider", "#222"), root.style.setProperty("--main-bg", "#111"), root.style.setProperty("--primary", "#ccc")
}

function checkTheme() {
    !0 == document.getElementById("chk-theme").checked ? (monaco.editor.setTheme("vs-dark"), darkTheme()) : (monaco.editor.setTheme("vs-light"), lightTheme())
}

function checkLineNumber() {
    !0 == document.getElementById("chk-line-number").checked ? (htmlEditor.updateOptions({
        lineNumbers: "on"
    }), cssEditor.updateOptions({
        lineNumbers: "on"
    }), jsEditor.updateOptions({
        lineNumbers: "on"
    })) : (htmlEditor.updateOptions({
        lineNumbers: "off"
    }), cssEditor.updateOptions({
        lineNumbers: "off"
    }), jsEditor.updateOptions({
        lineNumbers: "off"
    }))
}

function checkMiniMap() {
    !0 == document.getElementById("chk-mini-map").checked ? (htmlEditor.updateOptions({
        minimap: {
            enabled: !0
        }
    }), cssEditor.updateOptions({
        minimap: {
            enabled: !0
        }
    }), jsEditor.updateOptions({
        minimap: {
            enabled: !0
        }
    })) : (htmlEditor.updateOptions({
        minimap: {
            enabled: !1
        }
    }), cssEditor.updateOptions({
        minimap: {
            enabled: !1
        }
    }), jsEditor.updateOptions({
        minimap: {
            enabled: !1
        }
    }))
}

function checkWordWrap() {
    !1 == document.getElementById("chk-word-wrap").checked ? (htmlEditor.updateOptions({
        wordWrap: !1
    }), cssEditor.updateOptions({
        wordWrap: !1
    }), jsEditor.updateOptions({
        wordWrap: !1
    })) : (htmlEditor.updateOptions({
        wordWrap: !0
    }), cssEditor.updateOptions({
        wordWrap: !0
    }), jsEditor.updateOptions({
        wordWrap: !0
    }))
}

function checkLiveMode() {
    !0 == document.getElementById("chk-live-mode").checked ? (LIVE_MODE = !0, $("#run").fadeOut()) : (LIVE_MODE = !1, $("#run").fadeIn())
}

function updateFontSize() {
    htmlEditor.updateOptions({
        fontSize: editorFontSize.value
    }), cssEditor.updateOptions({
        fontSize: editorFontSize.value
    }), jsEditor.updateOptions({
        fontSize: editorFontSize.value
    }), document.getElementById("current-font-size").innerHTML = editorFontSize.value
}

function autoSave() {
    var e = $("#dummy-layout").val(),
        t = $("#dummy-theme").val();
    htmlEditor.getValue(), cssEditor.getValue(), jsEditor.getValue(), localStorage.setItem("liveweave.html", htmlEditor.getValue()), localStorage.setItem("liveweave.css", cssEditor.getValue()), localStorage.setItem("liveweave.js", jsEditor.getValue()), localStorage.setItem("liveweave.theme", t), localStorage.setItem("liveweave.layout", e), localStorage.setItem("liveweave.init", "1")
}
window.onbeforeunload = function() {
    return "You have made changes on this page that you have not yet confirmed. If you navigate away from this page you will lose your unsaved changes!"
}, window.onunload = function() {
    window.clearInterval(intervalId), localStorage.setItem("liveweave.html", htmlEditor.getValue()), localStorage.setItem("liveweave.css", cssEditor.getValue()), localStorage.setItem("liveweave.js", jsEditor.getValue())
}, FONT_SIZE = 14, WORD_WRAP = !0, CONTEXT_MENU = !1, THEME = "vs-dark", MINI_MAP = !1, LIVE_MODE = !0, sessionStorage.clear(), root = document.querySelector(":root"), editorFontSize = document.getElementById("range-font-size"), editorLineNumber = document.getElementById("range-line-number"), previewPanel = document.getElementById("preview"), editorFontSize.addEventListener("input", function(e) {
    updateFontSize()
}), document.getElementById("run").addEventListener("click", renderPreview);
const intervalId = window.setInterval(function() {
    autoSave()
}, 5e3);

function initLoad() {
    var e = $("#dummy-id").val(),
        t = localStorage.getItem("liveweave.init");
    if (localStorage.getItem("liveweave.layout"), localStorage.getItem("liveweave.theme"), null == t && (localStorage.setItem("liveweave.init", "0"), loadTemplate()), "" != e && (t = "2", localStorage.setItem("liveweave.init", "2")), "0" == t && loadTemplate(), "1" == t) try {
        let n = localStorage.getItem("liveweave.html"),
            i = localStorage.getItem("liveweave.css"),
            o = localStorage.getItem("liveweave.js");
        htmlContent = n, cssContent = i, jsContent = o
    } catch (a) {}
}

function formatHTML() {
    htmlEditor.getAction("editor.action.formatDocument").run()
}

function formatCSS() {
    cssEditor.getAction("editor.action.formatDocument").run()
}

function formatJS() {
    jsEditor.getAction("editor.action.formatDocument").run()
}

function appendLibraryToEditor(e) {
    let t = htmlEditor.getValue();
    if (!(t.search("<head>") > 0)) return alertify.alert("<span style='color: #f5f5f5; padding:4px 6px 4px 6px; border-radius:3px; background-color: #cc0000;'>WARNING!</span><br/><br/> The <strong>&lt;head&gt;</strong> tag seems to be missing in your HTML. Although your code may still work, we highly recommened that you have a valid HTML syntax. Please refer to the structure of a correct HTML code below:<code><br/><br/>&lt;!DOCTYPE html&gt;<br/>&lt;html&gt;<br/>    &lt;head&gt;<br/>&lt;title&gt&lt;!-- title --&gt;&lt;/title&gt;<br/> &lt;/head&gt;<br/> &lt;body&gt;<br/> &lt;!-- your content here --&gt;<br/> &lt;/body&gt;<br/>&lt;/html&gt;</code>"), e += t, htmlEditor.setValue(e), !1;
    e = "<head>\n" + e;
    var n = t.replace("<head>", e);
    htmlEditor.setValue(n)
}

function download(e, t) {
    var n = document.createElement("a");
    n.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), n.setAttribute("download", e), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n)
}

function downloadZip() {
    var e = new JSZip,
        t = htmlEditor.getValue(),
        n = cssEditor.getValue(),
        i = jsEditor.getValue(),
        o = '<link type="text/css" rel="stylesheet" href="css/style.css"/>\n',
        a = '<script type="text/javascript" src="js/script.js"></script>\n';
    o += "</head>", a += "</body>", t = (t = t.replace("</head>", o)).replace("</body>", a), e.file("css/style.css", n), e.file("js/script.js", i);
    http: e.file("index.html", t);
    var l = e.generate();
    location.href = "data:application/zip;base64," + l
}

function loadTemplate() {
    htmlContent = '<!DOCTYPE html>\n<html>\n<head>\n<title>HTML, CSS and JavaScript demo</title>\n</head>\n<body>\n<!-- Start your code here -->\n\n<p class="lw">Hello Player!</p>\n\n<!-- End your code here -->\n</body>\n</html>', cssContent = ".lw { font-size: 60px; }", jsContent = "// Write JavaScript here"
}
initLoad(), $("#generator-ipsum").click(function() {
    var e = htmlEditor.getPosition();
    htmlEditor.executeEdits("", [{
        range: new monaco.Range(e.lineNumber, e.column, e.lineNumber, e.column),
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]), renderPreview()
}), $("#settings-reset").click(function() {
    document.getElementById("current-font-size").innerHTML = "14", htmlEditor.updateOptions({
        fontSize: "14px"
    }), cssEditor.updateOptions({
        fontSize: "14px"
    }), jsEditor.updateOptions({
        fontSize: "14px"
    }), editorFontSize.value = 14, document.getElementById("chk-live-mode").checked = !0, $("#run").fadeOut(), LIVE_MODE = !0, htmlEditor.updateOptions({
        lineNumbers: "on"
    }), cssEditor.updateOptions({
        lineNumbers: "on"
    }), jsEditor.updateOptions({
        lineNumbers: "on"
    }), document.getElementById("chk-line-number").checked = !0, document.getElementById("chk-word-wrap").checked = !0, htmlEditor.updateOptions({
        wordWrap: !0
    }), cssEditor.updateOptions({
        wordWrap: !0
    }), jsEditor.updateOptions({
        wordWrap: !0
    }), document.getElementById("chk-mini-map").checked = !1, htmlEditor.updateOptions({
        minimap: {
            enabled: !1
        }
    }), cssEditor.updateOptions({
        minimap: {
            enabled: !1
        }
    }), jsEditor.updateOptions({
        minimap: {
            enabled: !1
        }
    })
}), $("#download-code").click(function(e) {
    download("source.html", "<!DOCTYPE html>\n<html>\n" + $("#preview").contents().find("html").html()), e.preventDefault()
}), $("#download-zip").on("click", function() {
    downloadZip()
}), $("#load-template").click(function() {
    window.clearInterval(intervalId), localStorage.setItem("liveweave.init", "0"), window.location.href = "../"
}), $("#home").click(function() {
    window.location.href = "../"
}), $("#css-explorer").click(function() {
    window.open("../cssgen/index.html", "_blank")
}), $("#color-explorer").click(function() {
    window.open("../colors/index.html", "_blank")
}), $("#vector-editor").click(function() {
    window.open("../designer/index.html", "_blank")
}), $("#generative-ai").click(function() {
    window.open("../ai/", "_blank")
}), $("#python").click(function() {
    window.open("../py/", "_blank")
}), $(".footer-message-close").click(function() {
    $(".footer-message").fadeOut()
});
