// http://www.grall.name/posts/1/antiSpam-emailAddressObfuscation.html
function decode(a) {
  return a.replace(/[a-zA-Z]/g, function(c){
    return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
  }) 
};
function openMailer(element) {
  var y = decode("znvygb:wcuvyyvccr@tznvy.pbz");
  element.setAttribute("href", y);
  element.setAttribute("onclick", "");
};
