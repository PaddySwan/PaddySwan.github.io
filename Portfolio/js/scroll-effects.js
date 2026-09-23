// Scroll progress bar + sticky navbar scroll shadow
(function () {
    var bar = document.getElementById("scroll-progress");
    var navbar = document.querySelector(".navbar-bg");

    function updateProgress() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (bar) {
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var pct = height > 0 ? (scrollTop / height) * 100 : 0;
            bar.style.width = pct + "%";
        }

        if (navbar) {
            navbar.classList.toggle("scrolled", scrollTop > 10);
        }
    }

    if (bar || navbar) {
        document.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);
        updateProgress();
    }
})();

// Highlight the nav link for the current page
(function () {
    var navLinks = document.querySelectorAll(".btn-nav");
    if (!navLinks.length) return;

    var path = location.pathname;
    var onHome = path === "/portfolio.html" || path === "/" || path === "/index.html";

    navLinks.forEach(function (link) {
        var href = link.getAttribute("href") || "";
        var isMatch = false;

        if (href === "#") {
            isMatch = onHome;
        } else if (href.indexOf(".pdf") !== -1) {
            isMatch = false; // Resume link is a download, never "active"
        } else if (href === path) {
            isMatch = true;
        } else if (
            href === "/Portfolio/projects.html" &&
            path.indexOf("/Portfolio/") === 0 &&
            path !== "/Portfolio/about-me.html" &&
            path !== "/Portfolio/projects.html"
        ) {
            isMatch = true; // any project sub-page counts as "Projects"
        }

        if (isMatch) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
})();

// Scroll-reveal: fade/slide sections into view as they're scrolled to
(function () {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
        items.forEach(function (el) {
            el.classList.add("revealed");
        });
        return;
    }

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    items.forEach(function (el) {
        observer.observe(el);
    });
})();
