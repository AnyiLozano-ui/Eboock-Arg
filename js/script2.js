$(document).ready(function () {
	$('.btn1').on('click', function () {
        $('.boton1').css('display', 'block')
        setTimeout(() => window.location.href = './index03-Arg.html', 1000)
    })

    $('.btn2').on('click', function () {
        $('.boton2').css('display', 'block')
        setTimeout(() => window.location.href = './index11-Arg.html', 1000)
    })

    $('.btn3').on('click', function () {
        $('.boton3').css('display', 'block')
        setTimeout(() => window.location.href = './index15-Arg.html', 1000)
    })
})
