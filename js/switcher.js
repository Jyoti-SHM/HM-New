	
//=== Switcher panal slide function	=====================//

	jQuery(document).ready(function () {	
		jQuery('.switch-btn').on('click', function () { 
			jQuery('.styleswitcher').toggleClass('active');
		});
	});
	
//=== Switcher panal slide function END	=====================//


//=== Color css change function	=====================//
jQuery( document ).ready(function() {
	
    // Color changer
    jQuery(".skin-1").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-1.css");
		jQuery(".logo-header img").attr("src", "images/logo-1.png")
		
        return false;
    });
    
    jQuery(".skin-2").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-2.css");
		jQuery(".logo-header img").attr("src", "images/logo-2.png")

        return false;
    });
    
    jQuery(".skin-3").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-3.css");
		jQuery(".logo-header img").attr("src", "images/logo-3.png")
		
        return false;
    });
	
    jQuery(".skin-4").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-4.css");
		jQuery(".logo-header img").attr("src", "images/logo-4.png")

        return false;
    });
	
    jQuery(".skin-5").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-5.css");
		jQuery(".logo-header img").attr("src", "images/logo-5.png")

        return false;
    });	
	
    jQuery(".skin-6").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-6.css");
		jQuery(".logo-header img").attr("src", "images/logo-6.png")
		
        return false;
    });
	
	
    jQuery(".skin-7").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-7.css");
		jQuery(".logo-header img").attr("src", "images/logo-7.png")
		
        return false;
    });
    
    jQuery(".skin-8").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-8.css");
		jQuery(".logo-header img").attr("src", "images/logo-8.png")
		
		return false;
    });
    
    jQuery(".skin-9").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-9.css");
		jQuery(".logo-header img").attr("src", "images/logo-9.png")
				
        return false;
    });
	
    jQuery(".skin-10").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-10.css");
		jQuery(".logo-header img").attr("src", "images/logo-10.png")
			
        return false;
    });
	
		
});
