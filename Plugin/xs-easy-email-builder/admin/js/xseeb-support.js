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
    $("#xseeb-verify-code").on('click', function (e) {
        e.preventDefault();
        $('.xseeb-license-notice').hide();
        $('.notice-dismiss').hide();
        var email = $("#xseeb_email").val();
        var check = true;
        if (email == '') {
            $('.xseeb-license-notice p').html('Please Enter Your Email');
            $('.xseeb-license-notice').removeClass('notice-success');
            $('.xseeb-license-notice').addClass('notice');
            $('.xseeb-license-notice').addClass('error');
            $('.xseeb-license-notice').addClass('is-dismissible');
            $('.xseeb-license-notice').show();
            $('.notice-dismiss').show();
            check = false;

        }
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (!testEmail.test(email)) {
            $('.xseeb-license-notice p').html('Please Enter a valid email');
            $('.xseeb-license-notice').removeClass('notice-success');
            $('.xseeb-license-notice').addClass('notice');
            $('.xseeb-license-notice').addClass('error');
            $('.xseeb-license-notice').addClass('is-dismissible');
            $('.xseeb-license-notice').show();
            $('.notice-dismiss').show();
            check = false;
        }
        if (check == true) {
            var spinner = $('.xseeb_spinner');
            spinner.closest('form').css('pointer-events', 'none');
            spinner.addClass('xseeb_is_active');
            $('#xseeb-verify-code').prop('disabled', true);
            jQuery.ajax({
                url: ajaxurl,
                type: 'post',
                data: { 'action': 'xseeb_verify_purchase_code', 'data': $('#xs-verification').serialize() },
                success: function (res) {
                    if (!res) {
                        $('.xseeb-license-notice p').html("Server is not responding. Please try Again");
                        $('.xseeb-license-notice').removeClass('notice-success');
                        $('.xseeb-license-notice').addClass('notice');
                        $('.xseeb-license-notice').addClass('error');
                        $('.xseeb-license-notice').addClass('is-dismissible');
                        $('.xseeb-license-notice').show();
                        $('.notice-dismiss').show();
                    } else {
                        if (res.status) {
                            res.message = res.message + '<br>You will be redirected in few seconds';
                            $('.xseeb-license-notice p').html(res.message);
                            $('.xseeb-license-notice').removeClass('error');
                            $('.xseeb-license-notice').addClass('notice');
                            $('.xseeb-license-notice').addClass('notice-success');
                            $('.xseeb-license-notice').addClass('is-dismissible');
                            $('.xseeb-license-notice').show();
                            $('.notice-dismiss').show();
                            setTimeout(function () {
                                var url = window.location.href;
                                window.location.href = url;
                            }, 2000);

                        } else {
                            if (res.message) {
                                res.message = res.message;
                            } else {
                                res.message = "Server is not responding. Please try Again";
                            }
                            $('.xseeb-license-notice p').html(res.message);
                            $('.xseeb-license-notice').removeClass('notice-success');
                            $('.xseeb-license-notice').addClass('notice');
                            $('.xseeb-license-notice').addClass('error');
                            $('.xseeb-license-notice').addClass('is-dismissible');
                            $('.xseeb-license-notice').show();
                            $('.notice-dismiss').show();
                        }
                    }

                    spinner.closest('form').css('pointer-events', 'auto');
                    $('#xseeb-verify-code').prop('disabled', false);
                    spinner.removeClass('xseeb_is_active');
                }
            });
        }

    });
    $('#xseeb-delete-button').on('click', function (e) {
        e.preventDefault();
    });
    $(".xseeb-delete-code").on('click', function (e) {
        e.preventDefault();
        $('.xseeb-license-notice').hide();
        $('.notice-dismiss').hide();
        $('.xseeb-disable').prop('disabled', true);
        var spinner = $('.xseeb_spinner');
        spinner.closest('form').css('pointer-events', 'none');
        spinner.addClass('xseeb_is_active');
        jQuery.ajax({
            url: ajaxurl,
            type: 'post',
            data: { 'action': 'xseeb_delete_purchase_code' },
            success: function (res) {
                $('#xseeb-license-modal').modal('toggle');
                if (res.status) {
                    res.message = res.message + '<br>You will be redirected in few seconds';
                    $('.xseeb-license-notice p').html(res.message);
                    $('.xseeb-license-notice').removeClass('error');
                    $('.xseeb-license-notice').addClass('notice');
                    $('.xseeb-license-notice').addClass('notice-success');
                    $('.xseeb-license-notice').addClass('is-dismissible');
                    $('.xseeb-license-notice').show();
                    $('.notice-dismiss').show();
                    setTimeout(function () {
                        var url = window.location.href;
                        window.location.href = url;
                    }, 2000);
                }
                spinner.closest('form').css('pointer-events', 'auto');
                spinner.removeClass('xseeb_is_active');
                $('.xseeb-disable').prop('disabled', false);
            }
        });
    });
    $('.xs-notice-dismiss,.notice-dismiss').on('click', function (e) {
        e.preventDefault();
        $(this).parent().hide();
        $(this).hide();
    });
});