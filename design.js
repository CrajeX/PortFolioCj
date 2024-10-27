// Function to add hover effect to change body background image
function addHoverEffect(targetSelector, imageOnHover, imageOnLeave) {
    document.addEventListener('DOMContentLoaded', () => {
        const targetElement = document.getElementById(targetSelector);
        // const img1 = document.getElementById("hae");
        // const img2 = document.getElementById("hye");
        // const img3 = document.getElementById("han");
        // const img4 = document.getElementById("min");
        // const img5 = document.getElementById("dani");
        // targetElement.addEventListener('mouseover', (img1) => {
        //     img1.style.opacity="0.5";
        //     img2.style.opacity="0.5";
        //     img3.style.opacity="0.5";
        //     img4.style.opacity="0.5";
        //     img5.style.opacity="0.5";
        // });
        // targetElement.addEventListener('mouseout', () => {
        //     img1.style.opacity="1";
        //     img2.style.opacity="1";
        //     img3.style.opacity="1";
        //     img4.style.opacity="1";
        //     img5.style.opacity="1";
        // });

        if (targetElement) {
            targetElement.addEventListener('mouseover', () => {
                document.body.style.backgroundImage = `url(${imageOnHover})`;
                document.body.style.backgroundSize = 'cover'; // Optional: ensure the image covers the body\
                document.body.style.backgroundOrigin = '1px';
            });
            targetElement.addEventListener('mouseout', () => {
                document.body.style.backgroundImage = `url(${imageOnLeave})`;
                document.body.style.backgroundSize = 'cover'; // Optional: ensure the image covers the body
            });
        }
    });
}

// Example usage
addHoverEffect('hae', 'haerin.jpg', 'bg.png'); // Change body background image on hover
addHoverEffect('hye', 'hyein.jpg', 'bg.png'); // Use placeholder image for non-hover state
addHoverEffect('han', 'hanni.jpg', 'bg.png'); // Use placeholder image for non-hover state
addHoverEffect('min', 'minji.jpg', 'bg.png'); // Use placeholder image for non-hover state
addHoverEffect('dani', 'dani.jpg', 'bg.png'); // Use placeholder image for non-hover state
// Function to add hover effect to highlight a specific image and adjust others
function addHoverHighlightEffect(imageIds, highlightOpacity, otherOpacity) {
    document.addEventListener('DOMContentLoaded', () => {
        const images = imageIds.map(id => document.getElementById(id));

        if (images.every(img => img)) {
            images.forEach(img => {
                img.addEventListener('mouseenter', () => {
                    images.forEach(otherImg => {
                        if (otherImg === img) {
                            otherImg.style.opacity = highlightOpacity; // Highlight hovered image
                        } else {
                            otherImg.style.opacity = otherOpacity; // Dim other images
                        }
                    });
                });

                img.addEventListener('mouseleave', () => {
                    images.forEach(otherImg => {
                        otherImg.style.opacity = '1'; // Reset all images to full opacity
                    });
                });
            });
        }
    });
}

// Example usage
addHoverHighlightEffect(['hae', 'hye', 'han', 'min', 'dani'], '1', '0.5'); // Highlight the hovered image, dim others
