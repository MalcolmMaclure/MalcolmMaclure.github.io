# Quick Guide

There are a lot of files, and a bunch of code on this page, but it is possible to manage this site by exclusively interacting with the contents of /articles and /img.

To add new pages on topics of interest, create HTML files in /articles. articles/template.html exists to give an example of what an HTML file should look like.

To display the contents of HTML files in /articles in the navigation bar on all pages, the carousel on the home page, or the list of articles below the carousel on the home page, edit articles/directory.json.

    For the navigation bar, find --- "navbar": [ --- and add this line directy below it:
	    {"file_name": "{name of file in /articles, no file extension}", "title": "{Text to appear in the navigation bar}"},

    For the carousel, find --- "carousel": [ --- and add this line directy below it:
		{"file_name": "{name of file in /articles, no file extension}", "title": "{Text to appear in the navigation bar}", "img": "/img/{name of image in /img, including file extension}"},

    For the list of articles, find --- "article_stubs": [ --- and add this line directy below it:
		{"file_name": "{name of file in /articles, no file extension}", "title": "{Text to appear in the navigation bar}", "img": "/img/{name of image in /img, including file extension}" "intro": "{The blurb that should introduce the article on the home page}"},

To edit the about page text, edit articles/about.html.

To edit Address, Phone, and Email on the about page, edit articles/directory.json Find "Contact", and edit the text in line with each label (Adress, Phone, Email) being sure to suround the text with quotes ("".

To add new images that can be used on any page, upload them to /img. Once uploaded, put <img class="img-fluid" src="/img/{name_of_img}"></img> to display that image. Additional classes can be added to adjust size and spacing, eg <img class="img-fluid **w-50**" src="/img/{name_of_img}"></img> will make the image half the width of the page. See resources for explanation of these classes.

    Take note of some special image names:

        profile.jpg (The picture that appears on the left of every page).
		favicon.ico (The small image that appears in the browser tab).


# Resources

https://getbootstrap.com/docs/5.0/examples/cheatsheet/
For a reasonably exhaustive list of styling options. To recreate any element on this page, right click on it and select "inspect". A new window will open showing the HTML for the page, with the line that creates the element you clicked on highlighted. Right click on the highlighted line and select copy --> outer HTML and you'll be able to paste that line into an HTML file.

https://getbootstrap.com/docs/4.0/utilities/spacing/
For an explanation of classes that affect spacing

https://getbootstrap.com/docs/4.0/utilities/sizing/
For an explanation of classes that affect sizing


# TODO

Links to twitter, facebook, etc. in the left-side pannel arn't connected to anything.
