/*
 *  msbeden
 *  ülke, il, ilce seçim ajax kodları
 *  ./catalog/view/theme/journal3/js/franchise_il_ilce.js
 *  26 Ağustos 2021 20:35
 */


ulkeSelect  = $('select[name="item[3]"]');
ilSelect    = $('select[name="item[4]"]');
ilceSelect  = $('select[name="item[5]"]');

ulkeSelect.append('<option value="Türkiye#215">Türkiye</option>');

ulkeSelect.on('change', function() {
    // Ülke seçiminde değişim olursa çalışacak kodlar

    gelenUlke  = this.value;
    country_id = gelenUlke.split('#')[1];

    $.ajax({
        url: 'index.php?route=account/account/country&country_id=' + country_id,
        dataType: 'json',
        beforeSend: function() {
            ulkeSelect.prop('disabled', true);
        },
        complete: function() {
            ulkeSelect.prop('disabled', false);
        },
        success: function(json) {
            if (json['postcode_required'] == '1') {
                $('input[name="postcode"]').parent().parent().addClass('required');
            } else {
                $('input[name="postcode"]').parent().parent().removeClass('required');
            }
            html = '<option value="">Seçiniz</option>';
        
            if (json['zone'] && json['zone'] != '') {
                for (i = 0; i < json['zone'].length; i++) {
                    html += '<option value="' + json['zone'][i]['name'] + '#' + json['zone'][i]['zone_id'] + '"';
                
                    if (json['zone'][i]['zone_id'] == '{{ zone_id }}') {
                        html += ' selected="selected"';
                    }
                    html += '>' + json['zone'][i]['name'] + '</option>';
                }
            } else {
                html += '<option value="0" selected="selected">Veri yok</option>';
            }
            ilSelect.html(html);
            editzone();
        },
    
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
});

ulkeSelect.trigger('change');
function editzone() {

    ilSelect.on('change', function() {
        // Şehir seçiminde değişim olursa çalışacak kodlar

        gelenSehir  = this.value;
        zone_id     = gelenSehir.split('#')[1];

        $.ajax({
            url: 'index.php?route=account/account/zone&zone_id=' + zone_id,
            dataType: 'json',
            beforeSend: function() {
                ilSelect.prop('disabled', true);
            },
            complete: function() {
                ilSelect.prop('disabled', false);
            },
            success: function(json) {
                if (json['postcode_required'] == '1') {
                    $('input[name="postcode"]').parent().parent().addClass('required');
                } else {
                    $('input[name="postcode"]').parent().parent().removeClass('required');
                }
                html = '<option value="">Seçiniz</option>';
                if (json['district'] && json['district'] != '') {
                    for (i = 0; i < json['district'].length; i++) {
                        html += '<option value="' + json['district'][i]['name'] + '"';
                        if (json['district'][i]['name'] == '{{ city }}') {
                            html += ' selected="selected"';
                        }
                        html += '>' + json['district'][i]['name'] + '</option>';
                    }
                } else {
                    html += '<option value="0" selected="selected">Veri yok</option>';
                }
                ilceSelect.html(html);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    });

    ilSelect.trigger('change');
}

ilSelect.on('change', function() {
    // Şehir seçiminde değişim olursa çalışacak kodlar

    gelenSehir  = this.value;
    zone_id     = gelenSehir.split('#')[1];

    $.ajax({
        url: 'index.php?route=account/account/zone&zone_id=' + zone_id,
        dataType: 'json',
        beforeSend: function() {
            ilSelect.prop('disabled', true);
        },
        complete: function() {
            ilSelect.prop('disabled', false);
        },
        success: function(json) {
            if (json['postcode_required'] == '1') {
                $('input[name="postcode"]').parent().parent().addClass('required');
            } else {
                $('input[name="postcode"]').parent().parent().removeClass('required');
            }
            html = '<option value="">Seçiniz</option>';
            if (json['district'] && json['district'] != '') {
                for (i = 0; i < json['district'].length; i++) {
                    html += '<option value="' + json['district'][i]['district_id'] + '"';
                    if (json['district'][i]['name'] == '{{ city }}') {
                        html += ' selected="selected"';
                    }
                    html += '>' + json['district'][i]['name'] + '</option>';
                }
            } else {
                html += '<option value="0" selected="selected">Veri yok</option>';
            }
            ilceSelect.html(html);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
});
ilSelect.trigger('change');
ilceSelect.on('change', function() {
    $("#input-city").val(this.value);
});