document.addEventListener("DOMContentLoaded", () => {
    const selectors = [
        ".post-content h1:first-of-type", // home
        ".post-header h1",                // single posts
        ".page-header h1",                // pages
        ".entry-header h1"                // fallback
    ];

    const seen = new Set();
    const titles = [];

    selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
            if (!seen.has(el)) {
                seen.add(el);
                titles.push(el);
            }
        });
    });

    if (!titles.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    titles.forEach((title, index) => {
        // vezmi len čisté textové nody, ignoruj anchor/link s "#"
        const originalText = Array.from(title.childNodes)
            .filter((node) => node.nodeType === Node.TEXT_NODE)
            .map((node) => node.textContent)
            .join("")
            .trim();

        if (!originalText) return;

        title.innerHTML = "";

        const textSpan = document.createElement("span");
        textSpan.className = "typing-text";

        const cursorSpan = document.createElement("span");
        cursorSpan.className = "typing-cursor";
        cursorSpan.textContent = "_";

        title.appendChild(textSpan);
        title.appendChild(cursorSpan);

        if (prefersReducedMotion) {
            textSpan.textContent = originalText;
            return;
        }

        let charIndex = 0;
        const startDelay = index * 120;
        const typingSpeed = 75;

        setTimeout(() => {
            const interval = setInterval(() => {
                textSpan.textContent += originalText.charAt(charIndex);
                charIndex++;

                if (charIndex >= originalText.length) {
                    clearInterval(interval);
                }
            }, typingSpeed);
        }, startDelay);
    });
});
