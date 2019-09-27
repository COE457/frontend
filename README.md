# COE 457 Project Frontend (Webpage)
This is the repo for the webpage. It includes 2 folders:
 - public: holds html, css, and client-side js files
 - src: includes server.js which is responsible of serving the website

## Public Folder:
Includes 3 sub folders:
 - html
 - css
 - javascript
### css:
Acquired from: [https://purecss.io/layouts/side-menu/](https://purecss.io/layouts/side-menu/)

### html:
Includes index.html. Which is an essential html file that includes a responsive menu-based view and an empty space that could be filled with the contents of the other html files.

### javascript:
Includes client-side js files.
- **menu.js**: 
	- for controlling the menu
	- Acquired from: [https://purecss.io/layouts/side-menu/](https://purecss.io/layouts/side-menu/)
- **navigation.js**:
	- Adds event listeners to navigation menu items
	- fills the empty space in index.html with appropriate contents based on the corresponding html file

## How to Use:

 1. In index.html, under `<ul  class="pure-menu-list">`, add a link in a format similar to the following:
`<li class="pure-menu-item"> <a class="pure-menu-link" id="home" href="#">Home</a> </li>`
Note that the `id` will be used in naming the html file.
2.  Add an html file and name it `<id>.html`. 
3. Fill `<id>.html` with the contents that you want to be used. Make sure those contents are surrounded with `<div  id="contents"></div>`.
4. Add the following line to server.js (get `<id>` from the first step):

> app.get("/\<id>.html", (req, res) => {
> &nbsp;&nbsp;&nbsp;&nbsp;res.sendFile(path.resolve('../public/html/\<id>.html'));
> });

5.	Navigate to the main folder in a terminal and run `npm server.js`. Your new link should be functional.
