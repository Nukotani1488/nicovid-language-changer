function getCurrentLanguage() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${"lang"}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return "ja-jp"; // Defaults to Japanese if not set
}

async function addHeaderEntry(header) {
    const currentLanguage = getCurrentLanguage();
    const entry = document.createElement('div');
    entry.innerHTML = `
    <div class="common-header-nzdgpl">
        <select id="language-select" oninput="document.cookie='lang=' + this.value + '; path=/; domain=.nicovideo.jp'; location.reload();">
            <option value="ja-jp" ${currentLanguage === "ja-jp" ? "selected" : ""}>日本語</option>
            <option value="en-us" ${currentLanguage === "en-us" ? "selected" : ""}>English (US)</option>
            <option value="zh-tw" ${currentLanguage === "zh-tw" ? "selected" : ""}>中文 (繁體)</option>
        </select>
    </div>
    `
    entry.className = 'common-header-12t3fr7';
    header.appendChild(entry);
}

const observer = new MutationObserver(() => {
    const header = document.querySelector('.common-header-171vphh');
    if (!header) return;

    observer.disconnect();
    requestAnimationFrame(() => addHeaderEntry(header));
});


observer.observe(document.body, { childList: true, subtree: true });