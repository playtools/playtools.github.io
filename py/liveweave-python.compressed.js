window.onload = function() {
    $("#splashscreen").fadeOut("slow"), $("#layout-b").hide()
};
var pyContent = "";

function resizer() {
    pyEditor.layout()
}
pyContent = document.getElementById("py-source").value, require.config({
    paths: {
        vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs"
    }
}), require(["vs/editor/editor.main"], function() {
    pyEditor = monaco.editor.create(document.getElementById("py"), {
        value: pyContent,
        language: "python",
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
}), $("form#myform").submit(function() {
    return document.getElementById("py-source").value = pyEditor.getValue(), isSaved = !0, "" != pyEditor.getValue().trim() && alertify.log("Saving..."), $.post("submit-py.php", $(this).serialize(), function(e) {
        History.pushState({
            state: 1
        }, "Liveweave", "/py/" + e), "" != py && (alertify.success("Your weave is saved!"), $("#dummy-id").val(e))
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
    splitInstanceA = Split(["#py"], {
        direction: "vertical",
        minSize: 0,
        gutterSize: 4,
        cursor: "row-resize",
        onDrag: function(e) {
            resizer()
        }
    }),
    splitInstanceB = Split(["#preview"], {
        direction: "vertical",
        minSize: 0,
        gutterSize: 4,
        cursor: "row-resize",
        onDrag: function(e) {
            resizer()
        }
    });

function lightTheme() {}

function darkTheme() {
    root.style.setProperty("--menu-slider", "#222"), root.style.setProperty("--main-bg", "#111"), root.style.setProperty("--primary", "#ccc")
}

function checkTheme() {
    !0 == document.getElementById("chk-theme").checked ? (monaco.editor.setTheme("vs-dark"), darkTheme()) : (monaco.editor.setTheme("vs-light"), lightTheme())
}

function checkLineNumber() {
    !0 == document.getElementById("chk-line-number").checked ? pyEditor.updateOptions({
        lineNumbers: "on"
    }) : pyEditor.updateOptions({
        lineNumbers: "off"
    })
}

function checkMiniMap() {
    !0 == document.getElementById("chk-mini-map").checked ? pyEditor.updateOptions({
        minimap: {
            enabled: !0
        }
    }) : pyEditor.updateOptions({
        minimap: {
            enabled: !1
        }
    })
}

function checkWordWrap() {
    !1 == document.getElementById("chk-word-wrap").checked ? pyEditor.updateOptions({
        wordWrap: !1
    }) : pyEditor.updateOptions({
        wordWrap: !0
    })
}

function updateFontSize() {
    pyEditor.updateOptions({
        fontSize: editorFontSize.value
    }), document.getElementById("current-font-size").innerHTML = editorFontSize.value
}

function autoSave() {
    var e = $("#dummy-layout").val(),
        t = $("#dummy-theme").val();
    pyEditor.getValue(), localStorage.setItem("liveweave-py.py", pyEditor.getValue()), localStorage.setItem("liveweave-py.theme", t), localStorage.setItem("liveweave-py.layout", e), localStorage.setItem("liveweave-py.init", "1")
}
window.onbeforeunload = function() {
    return "You have made changes on this page that you have not yet confirmed. If you navigate away from this page you will lose your unsaved changes!"
}, window.onunload = function() {
    window.clearInterval(intervalId), localStorage.setItem("liveweave-py.py", pyEditor.getValue())
}, FONT_SIZE = 14, WORD_WRAP = !0, CONTEXT_MENU = !1, THEME = "vs-dark", MINI_MAP = !1, LIVE_MODE = !1, sessionStorage.clear(), root = document.querySelector(":root"), editorFontSize = document.getElementById("range-font-size"), editorLineNumber = document.getElementById("range-line-number"), editorFontSize.addEventListener("input", function(e) {
    updateFontSize()
}), document.getElementById("run").addEventListener("click", function() {
    document.getElementById("preview").innerHTML += "Running the Python code...", setTimeout(runPython, 50)
});
const intervalId = window.setInterval(function() {
    autoSave()
}, 5e3);

function initLoad() {
    var e = $("#dummy-id").val(),
        t = localStorage.getItem("liveweave-py.init");
    if (localStorage.getItem("liveweave-py.layout"), localStorage.getItem("liveweave-py.theme"), null == t && (localStorage.setItem("liveweave-py.init", "0"), loadTemplate()), "" != e && (t = "2", localStorage.setItem("liveweave-py.init", "2")), "0" == t && loadTemplate(), "1" == t) try {
        let n = localStorage.getItem("liveweave-py.py");
        pyContent = n
    } catch (i) {}
}

function formatPy() {
    pyEditor.getAction("monaco.editor.action.formatDocument").run()
}

function download(e, t) {
    var n = document.createElement("a");
    n.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), n.setAttribute("download", e), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n)
}

function loadTemplate() {
    pyContent = '# Write your Python code here. Popular modules like Numpy, Matplotlib,\n# SciPy, Pandas are supported as well. Click "Run" to execute your code.\n\nimport numpy as np\n\nx = np.random.normal(100, 10, 250)\nprint(x)'
}
initLoad(), $("#settings-reset").click(function() {
    document.getElementById("current-font-size").innerHTML = "14", pyEditor.updateOptions({
        fontSize: "14px"
    }), editorFontSize.value = 14, document.getElementById("chk-live-mode").checked = !0, $("#run").fadeOut(), LIVE_MODE = !0, pyEditor.updateOptions({
        lineNumbers: "on"
    }), document.getElementById("chk-line-number").checked = !0, document.getElementById("chk-word-wrap").checked = !0, pyEditor.updateOptions({
        wordWrap: !0
    }), document.getElementById("chk-mini-map").checked = !1, pyEditor.updateOptions({
        minimap: {
            enabled: !1
        }
    })
}), $("#download-code").click(function(e) {
    let t = pyEditor.getValue();
    console.log(t), download("source.py", t), e.preventDefault()
}), $("#load-template").click(function() {
    window.clearInterval(intervalId), localStorage.setItem("liveweave-py.init", "0"), window.location.href = "../py/"
}), $("#home").click(function() {
    window.location.href = "../py/"
}), $("#css-explorer").click(function() {
    window.open("../cssgen/index.html", "_blank")
}), $("#color-explorer").click(function() {
    window.open("../colors/index.html", "_blank")
}), $("#vector-editor").click(function() {
    window.open("../designer/index.html", "_blank")
}), $("#generative-ai").click(function() {
    window.open("../ai/", "_blank")
}), $("#web").click(function() {
    window.open("../", "_blank")
}), $(".footer-message-close").click(function() {
    $(".footer-message").fadeOut()
});
let pyodideReadyPromise = (async () => {
    let e = await loadPyodide();
    return await e.loadPackage(["numpy", "matplotlib", "scipy", "pandas"]), e
})();
async function runPython() {
    let e = await pyodideReadyPromise,
        t = pyEditor.getValue();
    try {
        e.runPython(`
            import sys
            from io import StringIO
            sys.stdout = StringIO()  # Redirect stdout to a string buffer

            # Patch plt.show() to save the figure and convert to Base64
            import matplotlib.pyplot as plt
            def new_show():
                import io
                import base64
                buf = io.BytesIO()
                plt.savefig(buf, format='png')
                buf.seek(0)
                img_base64 = base64.b64encode(buf.getvalue()).decode('utf-8')
                print("IMAGE_BASE64_START" + img_base64 + "IMAGE_BASE64_END")
                plt.close()

            plt.show = new_show
        `), await e.runPythonAsync(t);
        let n = e.runPython("sys.stdout.getvalue()"),
            i = n.match(/IMAGE_BASE64_START(.*?)IMAGE_BASE64_END/);
        if (i) {
            let o = i[1],
                a = window.open("Plot - Liveweave", "_blank");
            a.document.write('<html><head><title>Plot - Liveweave Python</title></head><body><img src="data:image/png;base64,' + o + '" /></body></html>'), a.document.title = "Plot - Liveweave Python", a.focus()
        } else document.getElementById("preview").innerText = n.replace(/IMAGE_BASE64_START.*?IMAGE_BASE64_END/g, "")
    } catch (l) {
        document.getElementById("preview").innerHTML = `Error: ${l}`
    } finally {
        document.getElementById("preview").innerText += "\nCode execution completed."
    }
}