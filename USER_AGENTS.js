const USER_AGENTS = [
  "jdapp;android;9.3.6;10;5636468336161683-6303634683165353;network/wifi;model/GM1910;addressid/2441329936;aid/ecd8caa8606d8a55;oaid/;osVer/29;appBuild/86533;partner/jingdong;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;iPad;9.3.5;14.3;58b78c48c17dc6ef7f35cc119e024d817d7b7719;network/wifi;ADID/BEE23FE0-7B3A-407F-B922-18CC6ED9F2F4;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPad7,5;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;addressid/0;pv/1.9;apprpd/Home_Main;ref/JDMainPageViewController;psq/8;ads/;psn/58b78c48c17dc6ef7f35cc119e024d817d7b7719|1;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.3;Mozilla/5.0 (iPad; CPU OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;android;9.3.4;10;8363736373630343332303639353-13D2338343732636262346435656;network/wifi;model/SEA-AL10;addressid/946167137;aid/16c340e71120b8d9;oaid/aefe73da-fbfe-277e-fee3-ffd7ffbb0285;osVer/29;appBuild/86388;psn/OYOIE1MXRxOYjm0CljxAFPV8ctWKTcRXnRFw4zvYk5M=|488;psq/1;adk/;ads/;pap/JA2015_311210|9.3.4|ANDROID 10;osv/10;pv/447.2;jdv/0|kong|t_1000089893_|tuiguang|af7f5b41a5fd4cf687ac1bd082a235a9|1610972386;ref/com.jingdong.app.mall.home.JDHomeFragment;partner/huawei;apprpd/Home_Main;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; SEA-AL10 Build/HUAWEISEA-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36",
]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

module.exports = {
  USER_AGENT
}
