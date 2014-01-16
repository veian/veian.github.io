$(function() {
    $(document).pjax('a', '#container', { fragment: '#container', timeout: 10000 })
    $(document).on({
        'pjax:click': function() {
            NProgress.start();
            $('#container').removeClass('fadeIn').addClass('fadeOut')
        },
        'pjax:start': function() {
            $('#container').css({'opacity':0})
        },
        'pjax:end': function() {
            NProgress.done();
            $('#container').css({'opacity':1})
        }
    })
})


