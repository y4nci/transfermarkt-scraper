"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class League {
    constructor(url) {
        this.url = url;
    }
    getURL() {
        return this.url;
    }
    setURL(url) {
        this.url = url;
    }
}
exports.default = League;