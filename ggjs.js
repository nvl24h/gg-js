<script type = "text/javascript" >

var referrer = document.referrer;
ifm_list_browser = ['google.com', 'google.com.vn'];

function checkFefer(f, e) {
    var i = 0;
    for (i = 0; i < e.length; i++) {
        if (f.indexOf(e[i]) > -1) return true;
    }

    return false;
}

let stores = {
    'ref48': 'ký tự đặc biệt',
    'ref49': 'các bạn có thể chèn số 122344',
    'ref50': 'đây là demo vui vẻ',
    'ref51': '343596',
}

var flagref = checkFefer(referrer, ifm_list_browser)
if (flagref) {
    var html = '<p style="text-align:center;"><button style="background: #e81e1e;border-radius: 10px;border:none;color: #ffffff;width: 59%;padding: 10px 0;text-transform: uppercase;font-weight: bold;font-size: 16px;outline: none; cursor: pointer;" id="countDown40" get-code="true" class="coundownmobile" onclick="startcountdown(); this.onclick=null;">Lấy mã bảo mật</button></p>';
    jQuery(document).ready(function($) {
        $("#references40").empty();
        html = $.parseHTML(html);
        $("#references40").append(html);
    });

}

function startcountdown() {
    document.getElementById('countDown40').setAttribute("style", "background: #0b1df5;border-radius: 10px;border:none;color: #ffffff;width: 59%;padding: 10px 0;text-transform: uppercase;font-weight: bold;font-size: 16px;outline: none; cursor: pointer;");
    let cNode = jQuery("#references40");
    let cKey = cNode.attr('code-ref');
    let cCount = cNode.attr('countdown');
    let counter = parseInt(cCount) || 40;
    var countdownCode = setInterval(function() {
        counter--;
        document.getElementById('countDown40').innerHTML = 'Mã bảo mật sẽ hiện sau ' + counter + ' giây' + ' bạn  nhé';
        if (counter == 0) {
            document.getElementById('countDown40').innerHTML = `Mã bảo mật của bạn là: ${stores[cKey]}`;
            document.getElementById('countDown40').setAttribute("style", "background: #ea3b7b;border-radius: 10px;border:none;color: #ffffff;width: 59%;padding: 10px 0;text-transform: uppercase;font-weight: bold;font-size: 16px;outline: none; cursor: pointer;");
            clearInterval(countdownCode);
            return false;
        }
    }, 1000);
}

</script>
