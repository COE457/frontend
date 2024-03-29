# COE 457 Project Frontend (Webpage)
This is the repo for the webpage. It includes 2 folders:
 - public: holds html, css, and client-side js files
 - src: includes server.js which is responsible of serving the website

## Public Folder:
Includes 4 sub folders:
 - html
 - css
 - javascript
 - images
### css:
Styles and sideMenu were acquired from: [https://purecss.io/layouts/side-menu/](https://purecss.io/layouts/side-menu/)

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


## Using Grids and Cards:
* Responsive cards. The width of each row is exactly the width of the empty space in `index.html`.
Each row tries to distribute its width on the cards it contains.

* Cards should be placed in a `<section class="gridContainer">`

* Use `<ul>` to create a new row of cards 

* Use `<li>` to create a card
  * Use `<div class="cardHeader">` to place a card title under an `<h3>` tag
  * Use `<div class="cardBody">` to place the card contents (either text or img or svg) in the body of the card
  * Use `<div class="cardFooter">` to place the card value or description under `<h3>` tag