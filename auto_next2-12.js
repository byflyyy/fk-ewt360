// 辅助脚本 实现课程切换
//更新时间2022-02-12
var i = 0
while(true){
    var end = textContains("00:00").exists();
    var all = textContains("该课程包已全部观看完成").exists();
    if(end){
        next();
    //shell('am start -n org.autojs.autojs/.external.open.RunIntentActivity -d /storage/emulated/0/Code/ewt-maths-1.js  -t application/x-javascript',true)
    //break  //更改 实现脚本调用
}
    if(all){
        next()
    }
    var test = textContains("答题卡").exists();
    if (test){
        i = i + 1
        next();
    }
}

function next(){
    back()
    sleep(3000)
    click("课程讲",i)   //更改
    log("NEXT")
    log("累计跳过",i,"个试卷")
    sleep(10000);
}