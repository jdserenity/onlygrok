try { window.addEventListener("load", (e) => { findElements() }) 
} catch(err) { console.error(err); console.log('error on load') }


const findElements = () => {
    const observer = new MutationObserver((mutationsList, observer) => {
        mutationsList.forEach((mutation) => {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                const header = document.querySelector('header');
                const backButton = document.querySelector('[aria-label="Back"]');
                const rightSidebar = document.querySelector('[data-testid="sidebarColumn"]');
                const grok = document.querySelector('div[aria-label="Grok"]');
                const randomBorder = document.querySelector('[data-testid="primaryColumn"]');
                if (header && backButton && rightSidebar && grok && randomBorder) {
                    observer.disconnect(); // Stop observing mutations
                    hideElements(header, backButton, rightSidebar, randomBorder)
                    extendGrok(grok)
                }
            }
        });
    });
    
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}

const hideElements = (header, backButton, rightSidebar, randomBorder) => {
    header.style.display = 'none'; // console.log('Header element found:', header);
    backButton.style.display = 'none'; // console.log('back button element found:', backButton)
    rightSidebar.style.display = 'none'; // console.log('right sidebar element found:', rightSidebar)
    randomBorder.style.borderLeftWidth = '0px'
    randomBorder.style.borderRightWidth = '0px'
}


const extendGrok = (grok) => {
    grok.style.width = '98vw'; console.log('grok element found:', grok);
}

