class Manifold {
    // Note: Semicolon is optional/discouraged after the constructor body
    constructor(initialPoints = 0) { 
        this.name = "Manifold";
        // Initialize the base points value
        this.points = initialPoints; 
        
        // Initialize the x, y, z coordinates based on the base points value
        this.pointsx = this.points;
        this.pointsy = this.points;
        this.pointsz = this.points;
    }

    // Methods are defined directly within the class body.
    // NO 'manifold.prototype.' or 'function' keyword is needed.
    changexlin() {
        this.pointsx = this.pointsx + 1;
    }

    changeylin() {
        this.pointsy = this.pointsy + 1;
    }

    changezlin() {
        this.pointsz = this.pointsz + 1;
    }

    getPoints() {
        return [this.pointsx, this.pointsy, this.pointsz];
    }
}

// Usage Example:
const m = new Manifold(5);
m.changexlin();
console.log(m.getPoints()); // Output: [6, 5, 5]