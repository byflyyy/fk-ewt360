// 适配版本: 8.4.2

//本脚本可长时间运行在后台,刷课时自动切换2.0x,自动跳过防刷课和40分钟检测,自动重新播放,可与其他脚本结合使用.
var x = device.width
var y = device.height  //获取屏幕尺寸

while(true){
var check = textContains("让我看看你走神了没").exists();
var next = textContains("倍速").exists();
//var end = textContains("该课程包已全部观看完成").exists();  //示例
var rest = textContains("休息一下").exists();
var think = textContains("跳过").exists();
var error = textContains("视频播放错误").exists();
if(error){
    click("刷新")
    log("视频错误*1,已刷新")
}
if(check){
    pass()
    }
if(rest){
    click("继续观看")
    log("防刷课*1")
}
if(next){
    speed()
    }
if(think){
    sleep(2000)
    click("跳过")
    sleep(500)
    click("确定")
    log("视频互动*1")
}
// if(end){
//     finish()     //*可更改(示例)
// }
}

function pass(){
    sleep(random(500,5000));   //随机休息0.5-5s
    click(x/2,y/2);
    toast("Check!");
    log("Pass*1");
}

function finish(){
    link = "http://sc.ftqq.com/SCU81651Tccab337fa9740aa6ec989c296db25a315e412aba2bda5.send.?text="
    http.get(link+"喵,已完成,请切换课程")    
}  //结束(示例)

function speed(){
    click("倍速");
    sleep(300);
    click("2.0X");  //被动控制速度
}

function control(){
    click(x/2,y/2)
    sleep(500);
    click("倍速");
    sleep(300);
    click("2.0X");  //主动控制速度,暂无调用
}