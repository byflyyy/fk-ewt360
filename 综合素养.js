// 辅助脚本 实现课程切换
while(true){
    var end = textContains("该课程包已全部观看完成").exists();
    if(end){
    back()
    sleep(3000)
    text("未完成").findOne().click()   //更改
    log("NEXT")
    //shell('am start -n org.autojs.autojs/.external.open.RunIntentActivity -d /storage/emulated/0/Code/ewt-maths-1.js  -t application/x-javascript',true)
    //break  //更改 实现脚本调用
}
}