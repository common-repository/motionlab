let address = 'https://api.motionlab.io/videos/';

/**
 * Parsing Get Parameters from URL
 * @param name Parameter Name
 * @param url URL
 * @returns {string} Value of Parameter
 */
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * Event Listener on DOMContentLoaded, sets IFRAME´s SRC Value
 */
document.addEventListener('DOMContentLoaded', function () {
    let player_url = address;
    let uid = getParameterByName("uid");

    player_url += campaignKey + "/";
    player_url += "?uid=" + uid;

    if(campaignKey == '' || uid == '')
        document.getElementById("motionlab-iframe").setAttribute("src", default_src);
    else
        document.getElementById("motionlab-iframe").setAttribute("src", player_url);
});