/*
 *  msbeden
 *  sol menü aktif sayfa işaretleme
 *  ./catalog/view/theme/journal3/js/franchise_menu_degisim.js
 *  26 Ağustos 2021 17:37
 */

url = $(location).attr('href');
backgroundColor = "#DA0A22";
fontColor = "white";

function cssGuncelle(item_id) {
    $(".links-menu-item-"+item_id).css({"background-color":backgroundColor});
    $(".links-menu-item-"+item_id+" a span").css({"color":fontColor});
}

if(url == "https://sadepazar.com/index.php?route=information/information&information_id=12") {
    cssGuncelle(1);
} else if(url == "https://sadepazar.com/index.php?route=information/information&information_id=13") {
    cssGuncelle(2);
} else if(url == "https://sadepazar.com/index.php?route=information/information&information_id=14") {
    cssGuncelle(3);
} else if(url == "https://sadepazar.com/index.php?route=information/information&information_id=15") {
    cssGuncelle(4);
} else if(url == "https://sadepazar.com/index.php?route=information/information&information_id=16") {
    cssGuncelle(5);
} else if(url == "https://sadepazar.com/index.php?route=information/information&information_id=17") {
    cssGuncelle(6);
} else if(url == "https://sadepazar.com/index.php?route=information/information&information_id=18") {
    cssGuncelle(7);
} else if(url == "https://sadepazar.com/index.php?route=information/information&information_id=19") {
    cssGuncelle(8);
} else if(url == "https://sadepazar.com/index.php?route=information/information&information_id=20") {
    cssGuncelle(9);
} else if(url == "https://sadepazar.com/index.php?route=information/information&information_id=21") {
    cssGuncelle(10);
} 