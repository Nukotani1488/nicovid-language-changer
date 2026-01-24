function addStyle() {
    const style = document.createElement('style');
    /*    style.textContent = `
            .CountrySelector-items {
                position: relative;
            }
            .CountrySelector-item {
                align-items: center;
                cursor: pointer;
                display: flex;
                flex-direction: row;
                height: 28px;
                min-width: 148px;
                padding: 0 8px;
            }
            .CountrySelector-currentItem {
                background: #555;
                border-radius: 4px;
            }
            .CountrySelector-currentItem::after {
                content: "▲";
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
            }
            .CountrySelector-item::before {
                background-image: url(https://resource.video.nimg.jp/web/images/bundle/layouts/BaseUniLayout/modules/CountrySelector/CountrySelector-flags.png);
                content: "";
                height: 11px;
                margin-right: 6px;
                width: 14px;
            }
            .CountrySelector-candidates {
                color: #333;
                background: #fff;
                border: 1px solid #e5e5e5;
                border-radius: 4px;
                bottom: 100%;
                display: none;
                left: 0;
                margin-bottom: 4px;
                position: absolute;
            }
            .CountrySelector-item[data-value="ja-jp"]::before {
                background-position: 0 0;
            }
            .CountrySelector-item[data-value="en-us"]::before {
                background-position: 0 -11px;
            }
            .CountrySelector-item[data-value="zh-tw"]::before {
                background-position: 0 -22px;
            }
        `;*/
    document.head.appendChild(style);
}

async function addHeaderEntry(header) {
    const entry = document.createElement('div');
    /*    entry.innerHTML = `
        <span class="CountrySelector-label">言語</span>
        <div class="CountrySelector-items">
            <span class="CountrySelector-item CountrySelector-currentItem" data-trigger="" data-value="ja-jp">日本語</span>
            <ul class="CountrySelector-candidates" style="display: none;">
                <li class="CountrySelector-item" data-candidate="" data-type="language" data-value="en-us">English (US)</li>
                <li class="CountrySelector-item" data-candidate="" data-type="language" data-value="zh-tw">中文 (繁體)</li>
            </ul>
        </div>`; */
    entry.innerHTML = `
    <div class="common-header-nzdgpl">
        言語
    </div>
    <div class="common-header-nzdgpl">
        <div class="CountrySelector-items">
            <span class="CountrySelector-item CountrySelector-currentItem" data-trigger="" data-value="ja-jp">日本語</span>
            <ul class="CountrySelector-candidates" style="display: none;">
                <li class="CountrySelector-item" data-candidate="" data-type="language" data-value="en-us">English (US)</li>
                <li class="CountrySelector-item" data-candidate="" data-type="language" data-value="zh-tw">中文 (繁體)</li>
            </ul>
        </div>
    </div>
    `
    entry.className = 'common-header-12t3fr7';
    header.appendChild(entry);
}

addStyle();

const observer = new MutationObserver((mutationsList, observer) => {
    const header = document.querySelector('.common-header-171vphh'); // NicoNico header class
    if (header) {
        observer.disconnect();
        addHeaderEntry(header);
    }
});

observer.observe(document.body, { childList: true, subtree: true });