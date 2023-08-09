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
	2. Under `Choose source` select `Existing Git Repo`, and fill in the field with https://github.com/MalcolmMaclure/MalcolmMaclure.github.io.git
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
9. All the images and HTML files for the site will have been downloaded into the empty folder you chose in step 4, and any changes you make to those files will imediately be reflected on localhost:8000.

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

# Content Management

There are a lot of files, and a bunch of code on this page, but it is possible to manage this site by exclusively interacting with the contents of /articles and /img.

To add new pages on topics of interest, create HTML files in /articles. articles/template.html exists to give an example of what an HTML file should look like.

To display the contents of HTML files in /articles in the navigation bar on all pages, the carousel on the home page, or the list of articles below the carousel on the home page, edit articles/directory.json.

For the navigation bar, find `"navbar": \[` and add this line directy below it:
> {"file_name": "`name of file in /articles, no file extension`", "title": "`Text to appear in the navigation bar`"}, |

For the carousel, find `"carousel": \[` and add this line directy below it:
> {"file_name": "`name of file in /articles, no file extension`", "title": "`Text to appear in the navigation bar`", "img": "/img/`name of image in /img, including file extension`"},

For the list of articles, find `"article_stubs": \[` and add this line directy below it:
> {"file_name": "`name of file in /articles, no file extension`", "title": "`Text to appear in the navigation bar`", "img": "/img/`name of image in /img, including file extension`", "intro": "`The blurb that should introduce the article on the home page`"},

To edit the about page text, edit articles/about.html.

To edit Address, Phone, and Email on the about page, edit articles/directory.json Find `Contact`, and edit the text in line with each label (Adress, Phone, Email) being sure to suround the text with quotes ("").

To add new images that can be used on any page, upload them to /img. Once uploaded, put `<img class="img-fluid" src="/img/{name_of_img}"></img>` to display that image. Additional classes can be added to adjust size and spacing, eg `<img class="img-fluid **w-50**" src="/img/{name_of_img}"></img>` will make the image half the width of the page. See [HTML resources](HTML resources) for explanation of these classes.

Take note of some special image names:

Image File Name | Description
------------- | -------------
profile.jpg | The picture that appears on the left of every page.
favicon.ico | The small image that appears in the browser tab.


## HTML resourses

Link | Description
------------- | -------------
https://getbootstrap.com/docs/5.0/examples/cheatsheet/ | For a reasonably exhaustive list of styling options. To recreate any element on this page, right click on it and select `inspect`. A new window will open showing the HTML for the page, with the line that creates the element you clicked on highlighted. Right click on the highlighted line and select copy --> outer HTML and you'll be able to paste that line into an HTML file.
https://getbootstrap.com/docs/4.0/utilities/spacing/ | For an explanation of classes that affect spacing
https://getbootstrap.com/docs/4.0/utilities/sizing/ | For an explanation of classes that affect sizing

# TODO

Links to twitter, facebook, etc. in the left-side pannel arn't connected to anything.
