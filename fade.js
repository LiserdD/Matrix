$(".actField").css("display", "none");

    $(".actField").fadeIn(3000);
    
	$(".menu-item a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$(".actField").fadeOut(3000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}