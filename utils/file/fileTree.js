const fs = require('fs').promises
const path = require('path')

class World {
    constructor() {

    }
}

module.exports = async function fileeGet(doc) {
    const list = await fs.readdir(doc)

    const world = new World();
    for (let index = 0; index < list.length; index++) {
        const file = list[index]
        const pat = path.resolve(doc, file)
        const stat = await fs.stat(pat)
        if (stat.isDirectory()) {
            world[file.split('.')[0]] = await fileeGet(pat)
        } else if (stat.isFile() && /.js$/.test(file)) {
            World.prototype[file.split('.')[0]] = require(pat)
        }
    }
    return world;
}