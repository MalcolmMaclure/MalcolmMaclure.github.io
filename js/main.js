const navLink = ({ file_name, title }) => ` 
<a href="/pages.html?article=${file_name}" class="dropdown-item">${title}</a>
`;

const carouselItem = ({file_name, img, title}) => `
<div class="carousel-item">
	<img class="w-100" src="${img}" alt="Image">
	<div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
		<h2 class="text-white font-weight-bold">${title}</h2>
		<a href="/pages.html?article=${file_name}" class="btn btn-lg btn-outline-light mt-4">Read More</a>
	</div>
</div>
`;

const articleStub = ({file_name, img, title, intro}) => `
<div class="row blog-item px-3 pb-5">
	<div class="col-md-5">
		<img class="img-fluid mb-4 mb-md-0" src="${img}" alt="Image">
	</div>
	<div class="col-md-7">
		<h3 class="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">${title}</h3>
		<p>
			${intro}
		</p>
		<a class="btn btn-link p-0" href="/pages.html?article=${file_name}">Read More <i class="fa fa-angle-right"></i></a>
	</div>
</div>
`;

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

(function ($) {
    "use strict";

	var directory = {};
	$.holdReady(true);
	$.getJSON( "/articles/directory.json", function(json) {
		directory = json;
		directory['navbar'] = [];
		for (const def of directory['carousel']) {
			directory['navbar'].push({file_name: def.file_name, title: def.title})
		}
		for (const def of directory['article_stubs']) {
			if (!directory['navbar'].find(o => o.file_name === def.file_name)) {
				directory['navbar'].push({file_name: def.file_name, title: def.title})
			}
		}
	}).fail(function( jqxhr, textStatus, error ) {
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	}).always(function() {
		$.holdReady(false);
	});

    $(document).ready(function () {

		$('#navbar').load('/navbar.html', function() {
			$('#navbar-article-list').html(directory['navbar'].map(navLink).join(''));

			var cur_url = window.location.pathname;
			if (cur_url == '/') {
				cur_url = '/index.html';
			}

			$('#navbar').find('a').each(function() {
				if ($(this).attr('href').includes(cur_url)) {
					$(this).closest('.nav-item').addClass('active');
					return false;
				}
			});
		});
		$('#footer').load('/footer.html');

		if (GetURLParameter('article') != null) {
			const fileName = GetURLParameter('article')
			var fileNameExt = fileName
			if (!fileName.endsWith('.html')) {
				fileNameExt += '.html'
			}
			var item = directory['navbar'].find(o => o.file_name === fileName || o.file_name === fileNameExt)
			if (item) {
				$('#article-title, #article-title-breadcrumb').text(item.title);
				
			}
			$('#article').load('/articles/' + fileNameExt);
		}

		$('#carousel-content').html(directory['carousel'].map(carouselItem).join(''));
		$('#carousel-content').children().first('.carousel-item').addClass('active');

		$('#blog-content').html(directory['article_stubs'].map(articleStub).join(''));

		

		// Dropdown on mouse hover
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);
