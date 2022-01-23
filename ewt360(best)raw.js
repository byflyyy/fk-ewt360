var b = 1   //看到第几个视频，播放完就下一个
var a = b - 1
while(true){
    var end = textContains("重新观看").exists();
    if(end){
        a = a + 1
        back();
        toast("自动切换下一个视频");
        sleep(1000);
        var num = id("homework_rrv_homework_set_list").findOne();
        var none = textContains("已观看").exists();    //视频状态：已观看or未观看
    if(num.childCount() < a+1){
        finish();
        break};
    if(none){
          for(let i = 0; i < 1;i++){
    click("已观看",a);}     //调整
    }else{
    bug();
    break}
    sleep(12000);    
    fast = id("mstVideoContainer").findOne().bounds()      //获取坐标
    click(fast.centerX(),fast.centerY())
    sleep(500);
    click("倍速");
    sleep(300);
    click("2.0X");
    }
    var check = textContains("跳过").exists();
    if(check){
        PassIt();}
    };

function PassIt(){
    click("跳过");
    sleep(500);
    click("确定");
    toast("check");};
    
function finish(){
    link = "http://sc.ftqq.com/SCU81651Tccab337fa9740aa6ec989c296db25a315e412aba2bda5.send.?text="
    http.get(link+"已完成该课程包");
    };
    
function bug(){
    link = "http://sc.ftqq.com/SCU81651Tccab337fa9740aa6ec989c296db25a315e412aba2bda5.send.?text="
    http.get(link+"脚本故障!");
    };