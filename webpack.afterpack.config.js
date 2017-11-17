const fs = require('fs');
const glob = require('glob');
const path = require('path');
const mkdirp = require('mkdirp');
const hbs = require('handlebars');

const VUE_PATH = path.join(__dirname, 'vue');
const pageList = glob.sync(path.join(VUE_PATH, '**/index.vue'));
const TMAP_PATH = path.join(__dirname, 'build/html.template.hbs');
const PAGES_PATH = path.join(__dirname, 'pages', 'vue');
const HTML_TMAP = fs.readFileSync(TMAP_PATH, 'utf-8');
const STATIC_PATH = path.join(__dirname, 'static');

let template = hbs.compile(HTML_TMAP);
mkdirp(PAGES_PATH);
pageList.forEach(v => {
  const dirname = path
    .relative(__dirname, v)
    .split('/')
    .slice(1, -1)
    .join('/');
  const htmlPath = path.join(PAGES_PATH, `${dirname}.html`);
  const data = {
    title: 'Automation',
    script: path.join('/vue', `${dirname}.js`)
  };
  const result = template(data);
  fs.writeFileSync(htmlPath, result);
});
