jQuery(document).ready(function($) {

    $(document).on('click', '.myForm2 button ', function (event){
        event.preventDefault();
        var form_data = $(this).parents('.myForm2').serialize();
        let url = window.location.href;
        let newUrl = url.replace('index.html','')


        $.ajax({
            type: "post",
            url: "./send2.php",
            data: form_data,
            success: function(responseData, textStatus, jqXHR) {
                console.log("Eva profi send");
                window.location.replace(`${newUrl}spasibo.html`);
                toggleModal()

            },
            error: function(jqXHR, textStatus, errorThrown) {

                console.log(errorThrown);
            }
        })

        return false;
    });

    $(document).on('click', '.myForm button.order.active ', function (event){
        event.preventDefault();
        
        let data = JSON.parse(localStorage.getItem('tcart'))
        console.log(data.products);
        let products = "";
        data.products.forEach((el) => {
            products += `${el.name}: ${el.price} грн; `
        })
        console.log(products);
        var form_data = $(this).parents('.myForm').serialize();
        let a = form_data + `&products="${products}"`;
        let url = window.location.href;
        let newUrl = url.replace('index.html','')

        $.ajax({
            type: "post",
            url: "./send.php",
            data: a,
            success: function(responseData, textStatus, jqXHR) {
                console.log("Eva profi send");
                localStorage.removeItem('tcart')
                window.location.replace(`${newUrl}spasibo.html`);

            },
            error: function(jqXHR, textStatus, errorThrown) {

                console.log(errorThrown);
            }
        })

        return false;
    });
});


function qwe(el = 1){
    var t = $(".t706__cartwin");
    if(el == 1) {
        $(".t706__carticon").removeClass("t706__carticon_showed");
        document.body.classList.add('scroll_none')
        t.addClass("t706__cartwin_showed");
        tcart__reDrawProducts(); 
        tcart__reDrawTotal();  
    }
    else {
        $(".t706__carticon").addClass("t706__carticon_showed");
        document.body.classList.remove('scroll_none')
        t.removeClass("t706__cartwin_showed");
    }

}
