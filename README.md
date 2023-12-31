**Table of Contents**

- [Setting up a Development Environment](#setting-up-a-development-environment)
  * [Downloading and configuring required software](#downloading-and-configuring-required-software)
  * [Creating a Development Environment](#creating-a-development-environment)
- [Commiting Changes](#commiting-changes)
- [A brief intro to debugging](#a-brief-intro-to-debugging)
- [Image Management](#image-management)
- [Article Management](#article-management)
- [Popups](#popups)
- [HTML resourses](#html-resourses)
- [TODO](#todo)

# Setting up a Development Environment

## Downloading and configuring required software
+ Download Docker Desktop ([mac](https://docs.docker.com/desktop/install/mac-install/) / [windows](https://docs.docker.com/desktop/install/windows-install/))
+ Download Git ([mac](https://www.kernel.org/pub/software/scm/git/git-2.41.0.tar.gz) / [windows](https://git-scm.com/download/win))
	+ Add Git to `Path` (mac)
		1. Download the zip file from the link above, double-click to unzip, and move the git files to whatever location you want
		2. Copy the filepath you unzipped the git files into to your clipboard
		3. Open the file `/etc/paths` in any text editor
		4. Add a new line at the bottom of the file and paste the filepath you coppied in step 2
		5. Saving this file with changes will require admin priviledges
		6. I don't have a mac computer to test this on, so you may run into issues. If so, we can do a zoom call to work it out.
	+ Add git to `Path` (windows)
		1. Download and run the installer from the link above
		2. Locate Git (it should be in `C:\Program Files\Git`), and copy its file path (eg. `C:\Program Files\Git\`) to your clipboard.
			
			![](https://malcolmmaclure.github.io/readme_img/locate_git.jpg)
		3. Open settings 
		4. Search for `Environment Variables` and select `Edit the System Environment Variables`
			
			![](https://malcolmmaclure.github.io/readme_img/edit_environment_variables.jpg)
		5. In the window that opens, select `Environment Variables` at the bottom of the `Advanced` tab
			
			![](https://malcolmmaclure.github.io/readme_img/edit_environment_variables_again.jpg)
		6. In the System variables menu, select `Path` and click `Edit`
			
			![](https://malcolmmaclure.github.io/readme_img/select_path.jpg)
		7. Click `New` and paste in the filepath your copied to your clipboard in step 2 followed by `cmd` (should create a path like C:\Program Files\Git\cmd)
			
			![](https://malcolmmaclure.github.io/readme_img/new_variable.jpg)
		8. Again Click `New` and paste in the filepath your copied to your clipboard in step 2, this time followed by `bin` (should create a path like C:\Program Files\Git\bin)
		9. Click `OK` to close all three open system windows
			
			![](https://malcolmmaclure.github.io/readme_img/triple_ok.jpg)

## Creating a Development Environment
1. Open Docker Desktop and navigate to `Dev Environments`
	![](https://malcolmmaclure.github.io/readme_img/click_dev_environments.jpg)
2. Create a new environment
	
	![](https://malcolmmaclure.github.io/readme_img/click_create_new_environment.jpg)
3. Click `Get Started`
	
	![](https://malcolmmaclure.github.io/readme_img/click_get_started.jpg)
4. Fill out the setup info
	1. The `Name` field can be left blank.
	2. Under `Choose source` select `Existing Git Repo`, and fill in the field with `https://github.com/MalcolmMaclure/MalcolmMaclure.github.io.git`
	3. Under `Choose IDE` select `Other` then click the select button and navigate to an empty folder where you'd like to store the files for the site.
	4. Click `Continue`.
		
		![](https://malcolmmaclure.github.io/readme_img/fill_out_setup.jpg)
5. Docker Desktop will start setting up your Development Environment. You'll see a bunch of commands scroll by for a while. When it's done, click `continue`.
	
	![](https://malcolmmaclure.github.io/readme_img/this_may_take_a_sec.jpg)
6. Click `Done`
	
	![](https://malcolmmaclure.github.io/readme_img/done.jpg)
7. Navigate back to the `Containers` tab to see the process that runs the website. 
	1. It should show a status of `Running (1/1)`. This means its working.
	2. Whenever you shut down your computer, this local site will shut down, and you'll have to open Docker Desktop, and click the start button to start it back up.
		
		![](https://malcolmmaclure.github.io/readme_img/start_container.jpg)
8. You should now be able to see the site by going to any web-browser and entering `localhost:8000` into the address bar.
9. All the images and HTML files for the site will have been downloaded into the empty folder you chose in step 4, and any changes you make to those files will imediately be reflected on `localhost:8000`.

# Commiting Changes

One of the files in the root folder for the website is called `commit_changes.sh`.
Double-clicking on this file will automatically commit any changes you have made and upload them to the live site at MalcolmMaclure.github.io.
It will take 5-10 minutes for the changes to show up.

# A brief intro to debugging

If you ever make a change that completely breaks the site, the most likely cause will be a missplaced comma or bracket in /articles/directory.json.
Hunting down syntax errors like that can be a pain, but fortunately there are some tools to help you.
When you open the `inspect` tool for the website, you'll notice that it has multiple tabs at the top. 
If you click on the `console` tab, if anything has gone wrong you'll get a list of errors.

![](https://malcolmmaclure.github.io/readme_img/intro_debug.jpg)
The very first error is usually the important one, and in general you'll be looking for a message that mentions `JSON`.
You'll note the error tells you exactly where in the file to look for an error: line 17, column 3.
Do keep in mind that that these error messages (especially when they are pointing to a column early in a line) are actually a result of a problem at the end of the previous line.
In the case of the screenshot, this was indeed the case, and there was a missing comma at the end of line 16.

# Image Management

To add new images that can be used on any page, upload them to /img. Once uploaded, put `<img class="img-fluid" src="/img/{name_of_img}"></img>` to display that image. Additional classes can be added to adjust size and spacing, eg `<img class="img-fluid **w-50**" src="/img/{name_of_img}"></img>` will make the image half the width of the page. See [HTML resources](https://github.com/MalcolmMaclure/MalcolmMaclure.github.io#html-resourses) for explanation of these classes.

Take note of some special image names:

Image File Name | Description
------------- | -------------
profile.jpg | The picture that appears on the left of every page.
favicon.ico | The small image that appears in the browser tab.

# Article Management

To add a new article to the site, create an .html file in /articles, and run `update_articles_directory.bat`
Running `update_articles_directory.bat` should be as simple as locating it in file explorer and double-clicking it.
When you do this, a window should open briefly and then immediatly close. You'll know it worked if, when you refresh the local version of your webpage, a new link appears under "Pages" in the nav-bar.
This link will may have no text depending on the contents of the new .html file you just created.

This html file should define a series of `<meta>` tags as follows:

```
<meta name="title" content="{This text will be the header in the carousel or article stub list and the name navbar}">
<meta name="intro" content="{For the carousel and article stubs this text will be displayed in a smaller font below the header}">
<meta name="img" content="{The filepath to an image that will be used for the carousel or article stub}">
<meta name="carousel_priority" content="{A number from 0 - infinity. The smaller this number, the earlier this article will appear in the carousel. If this meta tag is ommited, this article will not appear in the carousel}">
<meta name="article_priority" content="{A number from 0 - infinity. The smaller this number, the earlier this article will appear in the list of articles. If this meta tag is ommited, this article will not appear in the list of articles}"">
```

Aside from these meta tags, the contents of html files in /articles should just be standard HTML, designed to be injected into the `<div id="article">` on pages.html.

# Popups

To add popups to an element, add the following attributes to it:

```
data-toggle="popover"
data-placement="top|bottom|left|right"
data-trigger="click|focus|hover"

data-title="whatever text you would like"
data-content="whatever text you would like"
```

For example, if you had a link that looked like this:

```
<a>some link</a>
```

You could add a popup (with the title "Link" and the help text "If you click this it will change what page you're looking at") with the following code

```
<a data-toggle="popover" data-placement="right" data-trigger="hover" data-title="Link" data-content="If you click this it will change what page you're looking at">some link</a>
```

To explain each of these in more detail:

Attribute | Possible Values | Description and usage
------------- | ------------- | -------------
data-toggle | popover | If you want a popup on an element, include this attribute with this Values
data-placement | top, bottom, right, left | If set to top, the popup will appear above the element. If set to bottom, will appear below, etc. If there isn't room for the popup wherever it's supposed to appear, it will appear on the opposite side instead.
data-trigger | click, focus, hover | If set to click, then the user will have to click on the element to see the popup (and click again to dismiss it). If set to hover, they will see the popup while their cursor is over the element. If set to focus, should mostly behave like click except that clicking anywhere else will dismiss the popup, though this is the most complex option and it may sometimes behave strangely.
data-title | | Popups will be split into two halves, one on top with a darker background and slightly larger text, and one below. Text added to the title will appear in the top half. If no title is included, the top half won't appear at all.
data-content | | Text in this attribute will appear in the bottom half of the popup.

More information in the Popups link under HTML resources(#html-resourses)

# HTML resourses

Link | Description
------------- | -------------
https://getbootstrap.com/docs/5.0/examples/cheatsheet/ | For a reasonably exhaustive list of styling options. To recreate any element on this page, right click on it and select `inspect`. A new window will open showing the HTML for the page, with the line that creates the element you clicked on highlighted. Right click on the highlighted line and select copy --> outer HTML and you'll be able to paste that line into an HTML file.
https://getbootstrap.com/docs/4.0/utilities/spacing/ | For an explanation of classes that affect spacing
https://getbootstrap.com/docs/4.0/utilities/sizing/ | For an explanation of classes that affect sizing
https://getbootstrap.com/docs/4.0/components/popovers/ | Popups in detail

# TODO

Links to twitter, facebook, etc. in the left-side pannel arn't connected to anything.
