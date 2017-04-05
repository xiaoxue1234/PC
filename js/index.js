//banner
$(function () {
    var banner=$('#banner');
    var canadaW = 1200;
    var n = 0;
    var $li = $('#banner>li');
    $('.left').on('click',function () {
        if(n<=0){
            n=$li.length-1;
            //utils.css(banner,'left',-n*900);
            $('#banner').animate({'left':-n*canadaW},0.01)

        }
        n--;
        $('#banner').animate({'left':-n*canadaW},1000)

    });
    $('.right').on('click',function () {
        if(n>=$li.length-1){
            n=0;
            $('#banner').animate({'left':-n*canadaW},0.01)
        }
        n++;
        $('#banner').animate({'left':-n*canadaW},1000)
    });
});
//选项卡
(function () {
    var childTit=document.getElementById('childTit');
    var titA=childTit.getElementsByTagName('a');
    var conHid=document.getElementById('contexHid');
    var conList=conHid.children;
    for (var i=0;i<titA.length;i++){
        titA[i].index=i;
        titA[i].onclick=function () {
            for (var j=0;j<conList.length;j++){
                titA[j].id="";
                conList[j].style.display='none';
            }
            this.id='on';
            conList[this.index].style.display='block';
        }

    }
})();

