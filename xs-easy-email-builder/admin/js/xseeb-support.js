jQuery(document).ready(function ($) {
    'use strict';
    $('#xseeb_name , #xseeb_email , #xseeb_message').on('change', function (e) {
        if (!$(this).val()) {
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }
    });
    $('.xseeb_support_form').on('submit', function (e) {
        e.preventDefault();
        $('.xs-send-email-notice').hide();
        $('.xseeb-mail-spinner').addClass('xseeb_is_active');
        $('#xseeb_name').removeClass("error");
        $('#xseeb_email').removeClass("error");
        $('#xseeb_message').removeClass("error");
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: { 'action': 'xseeb_send_mail', '_xseeb_support_nonce': $('#_xseeb_support_nonce').val(), 'data': $(this).serialize() },
            beforeSend: function () {
                if (!$('#xseeb_name').val()) {
                    $('#xseeb_name').addClass("error");
                    $('.xs-send-email-notice').removeClass('notice-success');
                    $('.xs-send-email-notice').addClass('notice');
                    $('.xs-send-email-notice').addClass('error');
                    $('.xs-send-email-notice').addClass('is-dismissible');
                    $('.xs-send-email-notice p').html('Please fill all the fields');
                    $('.xs-send-email-notice').show();
                    window.scrollTo(0, 0);
                    $('.xseeb-mail-spinner').removeClass('xseeb_is_active');
                    return false;
                }
                if (!$('#xseeb_email').val()) {
                    $('#xseeb_email').addClass("error");
                    $('.xs-send-email-notice').removeClass('notice-success');
                    $('.xs-send-email-notice').addClass('notice');
                    $('.xs-send-email-notice').addClass('error');
                    $('.xs-send-email-notice').addClass('is-dismissible');
                    $('.xs-send-email-notice p').html('Please fill all the fields');
                    $('.xs-send-email-notice').show();
                    window.scrollTo(0, 0);
                    $('.xseeb-mail-spinner').removeClass('xseeb_is_active');
                    return false;
                }
                if (!$('#xseeb_message').val()) {
                    $('#xseeb_message').addClass("error");
                    $('.xs-send-email-notice').removeClass('notice-success');
                    $('.xs-send-email-notice').addClass('notice');
                    $('.xs-send-email-notice').addClass('error');
                    $('.xs-send-email-notice').addClass('is-dismissible');
                    $('.xs-send-email-notice p').html('Please fill all the fields');
                    $('.xs-send-email-notice').show();
                    window.scrollTo(0, 0);
                    $('.xseeb-mail-spinner').removeClass('xseeb_is_active');
                    return false;
                }
                $(".xseeb_support_form :input").prop("disabled", true);
                $("#xseeb_message").prop("disabled", true);
                $('.xseeb-send-mail').prop('disabled', true);
            },
            success: function (res) {
                $('.xs-send-email-notice').find('.xs-notice-dismiss').show();
                $('.xseeb-send-mail').prop('disabled', false);
                $(".xseeb_support_form :input").prop("disabled", false);
                $("#xseeb_message").prop("disabled", false);
                if (res.status == true) {
                    $('.xs-send-email-notice').removeClass('error');
                    $('.xs-send-email-notice').addClass('notice');
                    $('.xs-send-email-notice').addClass('notice-success');
                    $('.xs-send-email-notice').addClass('is-dismissible');
                    $('.xs-send-email-notice p').html('Successfully sent');
                    $('.xs-send-email-notice').show();
                    $('.xseeb_support_form')[0].reset();
                } else {
                    $('.xs-send-email-notice').removeClass('notice-success');
                    $('.xs-send-email-notice').addClass('notice');
                    $('.xs-send-email-notice').addClass('error');
                    $('.xs-send-email-notice').addClass('is-dismissible');
                    $('.xs-send-email-notice p').html('Sent Failed');
                    $('.xs-send-email-notice').show();
                }
                $('.xseeb-mail-spinner').removeClass('xseeb_is_active');
            }

        });
    });
    $('.xs-notice-dismiss,.notice-dismiss').on('click', function (e) {
        e.preventDefault();
        $(this).parent().hide();
        $(this).hide();
    });
});
