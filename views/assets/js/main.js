(function() {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        if (!header.classList.contains('header-scrolled')) {
            offset -= 16
        }

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Header fixed top on scroll
     */
    let selectHeader = select('#header')
    if (selectHeader) {
        let headerOffset = selectHeader.offsetTop
        let nextElement = selectHeader.nextElementSibling
        const headerFixed = () => {
            if ((headerOffset - window.scrollY) <= 0) {
                selectHeader.classList.add('fixed-top')
                nextElement.classList.add('scrolled-offset')
            } else {
                selectHeader.classList.remove('fixed-top')
                nextElement.classList.remove('scrolled-offset')
            }
        }
        window.addEventListener('load', headerFixed)
        onscroll(document, headerFixed)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        });
    }

    /**
     * Course isotope and filter
     */
    window.addEventListener('load', () => {
        let courseContainer = select('.course-container');
        if (courseContainer) {
            let courseIsotope = new Isotope(courseContainer, {
                itemSelector: '.course-item'
            });

            let courseFilters = select('#course-filters li', true);

            on('click', '#course-filters li', function(e) {
                e.preventDefault();
                courseFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');
                courseIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                courseIsotope.on('arrangeComplete', function() {
                    AOS.refresh()
                });
            }, true);
        }

    });

    /**
     * Course isotope and filter: Math
     */
    window.addEventListener('load', () => {
        let courseMathContainer = select('.course-math-container');
        if (courseMathContainer) {
            let courseIsotope = new Isotope(courseMathContainer, {
                itemSelector: '.course-item'
            });

            let courseFilters = select('#course-math-filters li', true);

            on('click', '#course-math-filters li', function(e) {
                e.preventDefault();
                courseFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');
                courseIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                courseIsotope.on('arrangeComplete', function() {
                    AOS.refresh()
                });
            }, true);
        }

    });

    /**
     * Course isotope and filter: Physics
     */
    window.addEventListener('load', () => {
        let coursePhysicsContainer = select('.course-physics-container');
        if (coursePhysicsContainer) {
            let courseIsotope = new Isotope(coursePhysicsContainer, {
                itemSelector: '.course-item'
            });

            let courseFilters = select('#course-physics-filters li', true);

            on('click', '#course-physics-filters li', function(e) {
                e.preventDefault();
                courseFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');
                courseIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                courseIsotope.on('arrangeComplete', function() {
                    AOS.refresh()
                });
            }, true);
        }

    });

    /**
     * Course isotope and filter: Chemistry
     */
    window.addEventListener('load', () => {
        let courseChemistryContainer = select('.course-chemistry-container');
        if (courseChemistryContainer) {
            let courseIsotope = new Isotope(courseChemistryContainer, {
                itemSelector: '.course-item'
            });

            let courseFilters = select('#course-chemistry-filters li', true);

            on('click', '#course-chemistry-filters li', function(e) {
                e.preventDefault();
                courseFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');
                courseIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                courseIsotope.on('arrangeComplete', function() {
                    AOS.refresh()
                });
            }, true);
        }

    });

    /**
     * Course isotope and filter: Biology
     */
    window.addEventListener('load', () => {
        let courseBiologyContainer = select('.course-biology-container');
        if (courseBiologyContainer) {
            let courseIsotope = new Isotope(courseBiologyContainer, {
                itemSelector: '.course-item'
            });

            let courseFilters = select('#course-biology-filters li', true);

            on('click', '#course-biology-filters li', function(e) {
                e.preventDefault();
                courseFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');
                courseIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                courseIsotope.on('arrangeComplete', function() {
                    AOS.refresh()
                });
            }, true);
        }

    });

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

})()