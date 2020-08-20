$(function () {

	if (typeof the_kma_time === 'undefined') {
		var the_kma_time = 10000;
	}	

    function TemplateRefresh() {
        ModalRefresh();
    }

    $(window).resize(function () {
        TemplateRefresh();
    });
    TemplateRefresh();

    /* -----------------------------------------------------------------------------------------
     * Modal Refresh
     */
     


    /* -----------------------------------------------------------------------------------------
     * Modal Hide
     */
     function ModalHide() {
         $('.modal:visible').fadeOut('fast', function(){
             $('body').removeClass('modal-show');
         });
     }

     $(document)
     .on('click', '.icon-close, .modal', function (event) {
         if (event.target != this)
             return false;
         else
             ModalHide();
     })
     .on('keydown', function (key) {
         if (key.keyCode == 27)
             ModalHide();
     })
     .on('click', '.modal > *', function (event) {
         event.stopPropagation();
         return true;
     })


     try {
		//var kmainputs = kmacb();
		//$('#kmacb-form form').append(kmainputs);
		//$('body').append('<div id="kmacb"><a title="Перезвонить мне" href="#" modal="kmacb-form"><div class="kmacb-circle"></div><div class="kmacb-circle-fill"></div><div class="kmacb-img-circle"></div></a></div>');

		setTimeout(
			function start_kmacb() {
                $('body').append('<div id="kmacb"><a title="Заказать обратный звонок" href="#" modal="kmacb-form"><div class="kmacb-circle"></div><div class="kmacb-circle-fill"></div><div class="kmacb-img-circle"></div></a></div>');
            },
            the_kma_time
            );
	}
	catch (e) {}
});



