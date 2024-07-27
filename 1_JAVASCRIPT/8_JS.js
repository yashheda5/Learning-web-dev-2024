let identity = {
    fName: "Yash",
    lName: "Heda",
    get fullName() {
        return `${this.fName} ${this.lName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error("Invalid input");
        }
        let parts = value.split(" ");
        if (parts.length !== 2) {
            throw new Error("Invalid input");
        }
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

console.log(identity);
console.log(identity.fullName);
try {
    identity.fullName = 1;
} catch (e) {
    console.log(e.message);
}
console.log(identity.fullName);
