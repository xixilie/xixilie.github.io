// 关于我图片切换效果
document.querySelectorAll('.amos_tm_about .image .main').forEach(function(div){
	var url = div.getAttribute('data-img-url');
	if(url) div.style.backgroundImage = 'url(' + url + ')';
});
/*
 * Copyright (c) 2022 CoddyThemes
 * Author: CoddyThemes
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	amos_tm_trigger_menu();
	amos_tm_stickyy();
	amos_tm_waypoints();
	amos_tm_scrollable();
	amos_tm_anchor();
	amos_tm_down();
	amos_tm_imgtosvg();
	amos_tm_data_images();
	amos_tm_animate_text();
	mamer_popup();
	amos_tm_isotope();
	amos_tm_partners();
	amos_tm_contact_form();
	amos_tm_location();
	amos_tm_ripple();
	amos_tm_videoplayer();
	amos_tm_totop();
	amos_tm_effect();
	amos_tm_service_switcher();
	
	
	jQuery(window).on('resize',function(){
		amos_tm_isotope();
		amos_tm_scrollable();
	});
	
	jQuery(window).on('scroll',function(){
		amos_tm_waypoints();
		amos_tm_progress_line();
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.amos_tm_preloader').addClass('loaded');
    }, 1000);
		setTimeout(function(){
        amos_tm_stickyy();
    }, 2000);
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function amos_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.my_trigger .hamburger');
	var mobileMenu		= jQuery('.amos_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.amos_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.my_trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -----------------------------------------------------
// --------------------- STICKY   ----------------------
// -----------------------------------------------------

function amos_tm_stickyy(){
	 
	"use strict";

	var el 		= jQuery('.fn_w_sminiboxes');

	if(el.length){
		el.each(function(index, element) {
			var child	= jQuery(element).find('.fn_w_sminibox');
			child.css({height:'auto'});
			var W 		= jQuery(window).width();
			if(W > 1200){
				var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
				var maxHeight 		= Math.max.apply(null, elementHeights);
				child.css({height:maxHeight+'px'}); 
			}
		}); 
	}

}

// -----------------------------------------------------
// ------------------- WAYPOINT   ----------------------
// -----------------------------------------------------

function amos_tm_waypoints(){
	
	"use strict";

	var div		= jQuery('.mamer_title_holder');
	
	div.each(function(){
		
		var element	= jQuery(this);
		
		element.waypoint({
			handler:function(){
				element.addClass('load');
			},
			offset:"85%"
		});
		
	});
	
}


// -------------------------------------------------
// --------------   MENU SCROLL  -------------------
// -------------------------------------------------

function amos_tm_scrollable(){
	
	"use strict";
	
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.amos_tm_leftpart .menu.scrollable');
	var verMenu			= jQuery('.amos_tm_leftpart .menu');
	var logoHeight		= jQuery('.amos_tm_leftpart .leftpart_inner .logo').outerHeight();
	var socialHeight	= jQuery('.amos_tm_leftpart .copyright').outerHeight()+100;

	verMenu.css({height:H-logoHeight-socialHeight});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		
		element.css({height: H-logoHeight-socialHeight}).niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #eee"
		});
	});
}


// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

function amos_tm_anchor(){
	
	"use strict";
	
	jQuery('.amos_tm_leftpart .menu ul li a,.amos_tm_mobile_menu .dropdown .dropdown_inner ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-150
			}, 1000);
		}
		return false;
	});
	
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function amos_tm_down(){
	
	"use strict";
	
	jQuery('.amos_tm_arrow_wrap a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-150
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function amos_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function amos_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function amos_tm_animate_text(){
	
	"use strict";
	
	var animateSpan1			= jQuery('.amos_tm_animation_text_word');
	
		animateSpan1.typed({
			strings: ["Handsome Boy", "Fiction Lover"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
	
	var animateSpan2			= jQuery('.amos_tm_animation_text_word2');
	
		animateSpan2.typed({
			strings: ["مستقل", "مطور ويب", "مصور فوتوغرافي"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function mamer_popup(){
		"use strict";
	
		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
		jQuery('.popup-youtube').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		});
	}


// -----------------------------------------------------
// --------------------   SKILLS    --------------------
// -----------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*300));
	});
}

	jQuery('.mamer_progress').each(function() {

		"use strict";

		var pWrap 			= jQuery(this);
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function amos_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function amos_tm_partners(){
	
	"use strict";
		
		var carousel1			= jQuery('.amos_tm_partners .owl-carousel');
		var con = '';	
		if(jQuery('body').hasClass('rtl')){
			con = 'true';
		}else{
			con = 'false';
		}
		carousel1.owlCarousel({
				rtl: con,
				loop: true,
				items: 4,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 4000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:4},
					1600:{items:4},
					1920:{items:4}
				}
		});
	
	}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function amos_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// ----------------    PLACEHOLDER    ------------------
// -----------------------------------------------------

function amos_tm_location(){
		var button		= jQuery('.href_location');
		button.on('click',function(){
			var element		= jQuery(this);
			var address		= element.text();
			address			= address.replace(/\ /g,'+');
			var text		= 'https://maps.google.com?q=';
			window.open(text+address);
			return false;
		});
	}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function amos_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function amos_tm_videoplayer(){
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

function amos_tm_progress_line(){
	
	"use strict";
	
	var line			= jQuery('.progressbar .line');
	var documentHeight 	= jQuery(document).height();
	var windowHeight 	= jQuery(window).height();
	var winScroll 		= jQuery(window).scrollTop();
	var value 			= (winScroll/(documentHeight-windowHeight))*100;
	var position 		= value;

	line.css('height',position+"%");
}

/****************************/ 
/********** TOTOP ***********/ 
/****************************/ 

function amos_tm_totop(){
  
  "use strict";
  
	jQuery(".progressbar a").on('click', function(e) {
		e.preventDefault();    
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

function amos_tm_effect(){
	
	"use strict";

	jQuery(window).on('scroll',function(){
		var progress	 	= jQuery('.progressbar');
		var WinOffset		= jQuery(window).scrollTop();

		if(WinOffset >= 100){
			progress.addClass('animate');
		}else{
			progress.removeClass('animate');
		}
	});
}

// -------------------------------------------------
// -------------  SERVICE SWITCHER  -----------------
// -------------------------------------------------

function amos_tm_service_switcher(){
	
	"use strict";
	
	// 服务数据
	var serviceData = {
		'web-development': {
			title: '学习成绩',
			description: '本科：武汉大学<br>专业：电子信息工程<br>年级：2022级<br>班级：卓越工程师特色班<br><br>均分：93.21 <br> 绩点：3.93/4.00 <br> 排名：13/192（6%） <br>  CET4：532&nbsp;&nbsp;&nbsp;&nbsp;CET6：512<br><br>模拟电路基础：99<br>DSP技术与应用：99<br>概率论与数理统计：98<br>线性代数：95<br>集成电路设计：95<br>算法与数据结构：95',
			buttonText: '查看详情'
		},
		'creative-design': {
			title: '获奖荣誉',
			description: '<br> 2023-2024年武汉大学国家励志奖学金 <br>2022-2023年武汉大学甲等奖学金<br> 2023-2024年武汉大学乙等奖学金<br> 2022-2023年武汉大学三好学生<br> 2023-2024年武汉大学三好学生<br> 2022-2023年武汉大学优秀学生骨干<br> 2023-2024年武汉大学学生会优秀成员<br><br>国家级大学生创新创业项目负责人<br>全国大学生嵌入式芯片与系统设计竞赛国家级一等奖<br>全国大学生集成电路创新创业大赛国家级一等奖<br>全国大学生数学竞赛国家级二等奖<br>湖北省大学生电子设计大赛省级二等奖<br>华大九天集成电路IC设计训练营最佳团队队长  ',
			buttonText: '查看详情'
		},
		'web-analyse': {
			title: '兴趣爱好',
			description: '我爱在闲暇时读书品茗。<br><br>一卷小说在手，心随文字流转；<br>一盏奶茶，品味四季更替。<br>书籍让我在思想的世界中遨游，<br>而茶香让我在浮躁中保持宁静。<br>于喧嚣之外，我寻得一份从容与自得。<br><br>我爱在小憩时无边幻想。<br><br>想象自己翩然若仙，行走于苍穹云海之间。<br>每一次轻抬眉眼、挥袖转身，仿佛都能引得天地共鸣。<br>指尖微动便可撩动星辰，眉眼轻抬便仿佛窥见万物生息。<br>举手投足皆自带一缕仙气。',
			buttonText: '查看详情'
		},
		'adobe-photoshop': {
			title: '技术栈',
			description: '编程语言：Python，C/C++，Verilog，Matlab <br>硬件开发：FPGA，MCU，DSP，ROS，SLAM<br><br>项目经历：面向地下空间恶劣可视环境的SLAM技术研究<br>主要内容：针对地下环境的极端视觉条件，设计多传感器融合模型进行实时3D地图重建。<br><br>项目经历：多数据信号融合与处理采集卡<br>主要内容：在FPGA上设计实现网络、HDMI 视频、ADC 信号的采集、处理、输出的多板级联平台。<br><br>项目经历：多模态视觉伺服机械臂控制系统<br>主要内容：搭建一个具有视觉感知、实时决策与高精度控制的多自由度机械臂系统，实现跨场景自动化操作。',
			buttonText: '查看详情'
		}
	};
	
	// 鼠标悬停事件处理
	jQuery('.amos_tm_service .service_right ul li').on('mouseenter', function(){
		var element = jQuery(this);
		var serviceType = element.attr('data-service');
		
		// 移除所有active类
		jQuery('.amos_tm_service .service_right ul li').removeClass('active');
		// 添加active类到当前悬停的元素
		element.addClass('active');
		
				// 更新左侧内容
		if(serviceData[serviceType]){
			// 标题：向右飞出 → 从左飞入
			var $title = jQuery('#service-title');
			$title.removeClass('slide-in-left slide-out-right').off('animationend');
			$title.addClass('slide-out-right').one('animationend', function(){
				$title.removeClass('slide-out-right');
				$title.text(serviceData[serviceType].title);
				$title.addClass('slide-in-left').one('animationend', function(){
					$title.removeClass('slide-in-left');
				});
			});
			
			// 描述：延迟100ms，向右飞出 → 从左飞入
			setTimeout(function(){
				var $desc = jQuery('#service-description');
				$desc.removeClass('slide-in-left slide-out-right').off('animationend');
				$desc.addClass('slide-out-right').one('animationend', function(){
					$desc.removeClass('slide-out-right');
					$desc.html(serviceData[serviceType].description);
					$desc.addClass('slide-in-left').one('animationend', function(){
						$desc.removeClass('slide-in-left');
					});
				});
			}, 100);
			
			// 按钮：延迟200ms，向右飞出 → 从左飞入
			setTimeout(function(){
				var $btn = jQuery('#service-button');
				$btn.removeClass('slide-in-left slide-out-right').off('animationend');
				$btn.addClass('slide-out-right').one('animationend', function(){
					$btn.removeClass('slide-out-right');
					$btn.text(serviceData[serviceType].buttonText);
					$btn.addClass('slide-in-left').one('animationend', function(){
						$btn.removeClass('slide-in-left');
					});
				});
			}, 200);
			
			// 移除所有背景类
			jQuery('#services').removeClass('bg-academic bg-awards bg-hobbies bg-tech');
			// 添加对应的背景类
			var bgClass = '';
			switch(serviceType) {
				case 'web-development': bgClass = 'bg-academic'; break;
				case 'creative-design': bgClass = 'bg-awards'; break;
				case 'web-analyse': bgClass = 'bg-hobbies'; break;
				case 'adobe-photoshop': bgClass = 'bg-tech'; break;
			}
			jQuery('#services').addClass(bgClass);
			
			// 移除卡片脉冲效果
			// element.find('.list_inner').addClass('pulse-effect');
			// setTimeout(function() {
			// 	element.find('.list_inner').removeClass('pulse-effect');
			// }, 600);
		}
	});
}