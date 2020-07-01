
class walker {
    constructor() {

        this.x = random(width / 4, width / 4 * 3);
        this.y = random(height / 4, height / 4 * 3);
        this.size = 50;

        this.draw = function () {
            ellipse(this.x, this.y, this.size);
        };

        this.moveRight = function () {
            if (this.x + this.size < width) {
                this.x += 5;
            }
            else {
                this.x = this.size;
            }
        };
    }
}
