// 辅助脚本 实现课程切换
while(true){
    var end = textContains("该课程包已全部观看完成").exists();
    if(end){
    finish()
    back()
    sleep(500)
    click("变更记录")
    sleep(500)
    back()   //回顶
    sleep(2000)
    click("生物");   //更改
    sleep(1000)
var i = 0
while(i<15){
    swipe(550,1500,502,0,200)
    i = i + 1
}
    sleep(500)
    text("[生物]基因在染色体上").findOne().click()   //更改
    log("课程结束")
    shell('am start -n org.autojs.autojs/.external.open.RunIntentActivity -d /storage/emulated/0/Code/ewt-sw-2.js  -t application/x-javascript',true)
    break  //更改 实现脚本调用
}
}

function finish(){
    link = "http://sc.ftqq.com/SCU81651Tccab337fa9740aa6ec989c296db25a315e412aba2bda5.send.?text="
    http.get(link+"喵,已完成,请切换课程")    
}