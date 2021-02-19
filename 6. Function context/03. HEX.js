class Hex {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    valueOf() {
        return this.value;
    }

    /**
     * Add to current value
     * @param {Hex} hex Hex number to add
     */
    plus(hex) {
        return new Hex(this.value + hex);
    }

    /**
     * Subtract to current value
     * @param {Hex} hex Hex number to subtract
     */
    minus(hex) {
        return new Hex(this.value - hex);
    }

    static parse(hexValue) {
        return parseInt(hexValue, 16);
    }
}