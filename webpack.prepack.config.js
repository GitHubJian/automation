const glob = require('glob');
const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');

const PACK_PATH = path.join(__dirname, 'vue-webpack');
const VUE_PATH = path.join(__dirname, 'vue');
const TEMP_PATH = path.join(__dirname, 'template');

const vueTmp = fs.readFileSync(path.join(TEMP_PATH, 'vue.template.js'), 'utf-8');
const pageList = glob.sync(path.resolve(VUE_PATH, '**/index.vue'));
pageList.forEach(v => {
    const outputPath = path.relative(VUE_PATH, v).split('/').slice(0, -1).join('/');
    const entryPath = path.resolve(PACK_PATH, outputPath);
    mkdirp.sync(entryPath);
    fs.writeFileSync(`${entryPath}/index.js`, vueTmp.replace('{{PATH}}', path.join(VUE_PATH, outputPath, 'index.vue')))
});