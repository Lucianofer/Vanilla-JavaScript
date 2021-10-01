$(function(){
    $('.btn-add').click(function(){
        var el = `<div class="anotacao-single">
        <textarea placeholder="Sua anotação aqui..."></textarea>
        </div>`;

        $('.container-anotacao').append(el);

        // var textArea = $('.anotacao-single').last().find('textarea');

        // var date = new Date()
        // var hh = date.getHours();
        // var mm = date.getMinutes();

        // var finalTime = ("A anotação foi adicionada às: "+hh+":"+mm);
        
        // textArea.html(finalTime);

    })
})

