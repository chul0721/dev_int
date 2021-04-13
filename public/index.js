let text = ['학생','초보', '예비', '코딩을 좋아하는'];
function callMe(){
  let myText = document.getElementById('mytext');
  let curIdx = text.indexOf(myText.innerHTML);
  myText.innerHTML = text[(curIdx+1)%text.length];
}
setInterval(callMe,1500);
    $(document).ready(function(){
      $('#scroll').click(function(){
      var offset = $('#page2').offset();
        $('html').animate({scrollTop : offset.top}, 400);
      });
});
