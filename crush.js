let highestZ = 4;

class Element {
    holdingElement = false;
    prevMouseX = 0;
    prevMouseY = 0;
    mouseX = 0;
    mouseY = 0;
    velocityX = 0;
    velocityY = 0;
    currentElementX = 0;
    currentElementY = 0;

    init(element) {
        element.addEventListener('touchstart', (e) => {
            this.holdingElement = true;
            element.style.zIndex = highestZ;
            highestZ += 1;
            this.prevMouseX = e.touches[0].clientX;
            this.prevMouseY = e.touches[0].clientY;
        });

        element.addEventListener('touchmove', (e) => {
            e.preventDefault(); // Prevent default touchmove behavior (e.g., scrolling)
            this.mouseX = e.touches[0].clientX;
            this.mouseY = e.touches[0].clientY;
            this.velocityX = this.mouseX - this.prevMouseX;
            this.velocityY = this.mouseY - this.prevMouseY;
            if (this.holdingElement) {
                this.currentElementX += this.velocityX;
                this.currentElementY += this.velocityY;
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;
                // Use requestAnimationFrame to optimize updates
                requestAnimationFrame(() => {
                    element.style.transform = `translateX(${this.currentElementX}px) translateY(${this.currentElementY}px)`;
                });
            }
        });

        element.addEventListener('touchend', () => {
            this.holdingElement = false;
        });
    }
}

const elements = Array.from(document.querySelectorAll('.element'));

elements.forEach(element => {
    const p = new Element();
    p.init(element);
});
