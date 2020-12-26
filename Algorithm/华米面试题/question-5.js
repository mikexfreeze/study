/**
 * 
 * 实现一个方法或类， 用来解析 http 请求中的 user-agent， 并做出版本大小判断，大于传入的版本时，返回 true ， 其他情况返回 false 。
其中， 版本号为x.y.z 符合版本语义化规范，每段版本区间 [0-99]

应用举例： 检查当前请求是否来自小米运动，且版本是大于 3.1.0 
附：
一个正常情况下的 user-agent 实例：
Mozilla/5.0 (Linux; Android 4.4.4; vivo Xplay Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 com.xiaomi.hm.health/32_2.3.6 NetType/WIFI Language/zh_CN

com.xiaomi.hm.health： 为 App 的 package name，标记当前访问的App来源为 小米运动App
32_2.3.6 中的 32 ： 为 build number， 不固定位数的数字
2.3.6：为 App 的版本号
Language/zh_CN ： 为当前语言环境，来自操作系统接口
性能 安全 可读性
 */
var agent = 'Mozilla/5.0 (Linux; Android 4.4.4; vivo Xplay Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 com.xiaomi.hm.health/32_2.3.6 NetType/WIFI Language/zh_CN'
var version = '2.4.0'
 function checkAgent(agent, version){
    var strArr = agent.split(' ')
    var buildStr = ''
    var fromXiaoMi = false
    var versionCheck = false
    for (const str of strArr) {
      if(str.indexOf('com.xiaomi.hm.health') > -1){
        buildStr = str
        fromXiaoMi = true
      }
    }
    if(fromXiaoMi){
      var tempArr = buildStr.split('/')
      // console.log(tempArr[0], tempArr[1])
      var tempArr2 = tempArr[1].split('_')
      var versionArr = tempArr2[1].split('.')
      versionCheck = compareVersion(versionArr, version.split('.'))
    }
    
    return {
      fromXiaoMi,
      versionCheck
    }
    // console.log(strArr)
 }

 function compareVersion(version, target){
  //  console.log('version', version, 'target', target)
   if(parseInt(version[0]) > parseInt(target[0])){
     return true
   }else if(version.length > 1){
     return compareVersion(version.splice(0, 1), target.splice(0, 1))
   }else{
     return false
   }
 }

 var res = checkAgent(agent, version)
 console.log(res)