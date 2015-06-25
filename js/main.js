$(document).ready(function(){
	$("#president").on('click', function(){
		var text = $("<span> acupuncture and herbal medicine.</span>");
		$('#maci').append(text);
		$('#president').remove();
	});
	$("#vicepresident").on('click', function(){
		var text = $("<span> Qigong and Healing Arts.</span>");
		$('#eva').append(text);
		$("#vicepresident").remove();
	});
	$("#treasurer").on('click', function(){
		var text = $("<span> Washington, DC.  Completed project reviews designed to promote economy, effectiveness and to prevent and detect fraud, waste, and abuse of VA  programs, operations, and activities.  Education includes a BBA in Accounting and a Master of Science in Computer Science.  Mr. Gaskell is a Certified Fraud Examiner (CFE) and is a member of the Association of CFEs.  Mr. Gaskell has previously served as a board member and Treasurer of nonprofit organizations involving a homeowners association and the Leadership VA Alumni Association.</span>");
		$("#steve").append(text);
		$("#treasurer").remove();
	});
	$("#secretary").on('click', function(){
		var text = $("<span> Nurse.  As a civilian, Mrs. Dimmerling's last position was on the traumatic brain injury unit from 2008-2010 at what is formally known as NNMC (WRNMMC).  Throughout her career she has worked at all of the military medical hospitals in the D.C. area.  Currently, she is attaining her Masters degree in acupuncture at Tai Sophia Institute.</span>");
		$("#rebecca").append(text);
		$("#secretary").remove();
	});
	$("#clinical").on('click', function(){
		var text = $("<span> Oriental Medicine at Maryland University of Integrated Health in Laurel, MD.</span>");
		$('#lindsey').append(text);
		$('#clinical').remove();
	});
});

$(document).ready(function(){
	var div = $('.home_quotes').hide(),
    	news = ['"I am able to handle stressful encounters at work with more grace and stillness."','"I feel refilled – like I have a stronger core."', '"I feel more at ease in my personal life."', '"I’m clearly watching what I’m eating, I’m talking calmly."','"I’m eating better – I want to take better care of my body."','"I’m getting more and better sleep."','"I’m eating healthier and exercising regularly."','"I’ve cut out alcohol."','"I have more focus on my self- care and the need for balance in my life."','"I look forward to this time."','"It has become a bright point of my week."','"I remember the experience, the peace, I felt during my session."','"I revisit it during stressful times with my patients and with my children."','"I am able to handle stressful encounters at work with more grace and stillness."','"The afternoon after my first treatment, I had a hugely productive conversation with my husband – a breakthrough."','"I changed my diet and lost 13 pounds."','"I’m sleeping better, I’m happier, I’ve decreased my stress."','"This should be required for returning back from Iraq."'],
    	count = 0;

	function changeNews() {
    	div.fadeIn().delay(5000).fadeOut(function() {
        	changeNews();
	    }).text(news[count++])
    	if (count == news.length) {
        	count = 0;
 	   }
	}

	changeNews();
});
