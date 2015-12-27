# Node.js quickstart

Simple quickstart for `Express` based Node.js applications featuring:

+ Gulp
+ Swig Template Engine
+ View/Controller architecture
+ automated Sass workflow
+ minified CSS
+ automated Server reload


## Getting Started
```
npm update
npm start //alias for gulp
```

## Directories and files

#### JS
+ `app.js` application entry with Express configuration
+ `controllers/index.js` combines all controllers an manage routes
+ `controllers/*.js` single routing component
+ `helpers/*.js` global helper files (e.g. `db.js`)

#### Static
+ `public/*.sass` Sass files that are compiled to `static/*.css`
+ `templates/*.html` Swig Template files with main template `index.html`

#### Others
+ `gulpfile.js` main Gulp file
+ `package.json` npm dependencies
