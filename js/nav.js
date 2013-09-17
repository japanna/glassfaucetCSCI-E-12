/* JavaScript for navigation of glassfaucet.com originally from CSCI E-12 lecture, spring 2013 */

/* added the functionality of making link to current page inactive */

$(document).ready(function(){
    var mybodyid = $('body').attr('id');
    var mynavid = '#nav' + mybodyid;
    
    $(mynavid).removeAttr("href");
    $(mynavid).attr('id','youarehere');
});

/* e.g. for index.php:
      mybodyid is 'content1'
      mynavid  is '#navcontent1' */


