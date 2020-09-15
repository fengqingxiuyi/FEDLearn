var superagent = require('superagent'); 
var cheerio = require('cheerio');
var async = require('async');
var echarts = require('echarts');
var fs = require('fs');

console.log('爬虫程序开始运行......');
/**
 * Crash
 */
superagent
  .get('https://bugly.qq.com/v2/getTrend/appId/09456c3bfc/platformId/1/version/-1/startDate/20200901/endDate/20200915/type/crash')
  // 请求参数
  .query({ dataType: 'trendData' })
  .query({ fsn: '04a4eda6-3c35-46ce-ac31-e1e336fc9d06' })
  // Http请求的Header信息
 .set('Accept', 'application/json;charset=utf-8')
 .set('Accept-Encoding', 'gzip, deflate, br')
 .set('Accept-Language', 'zh-CN,zh;q=0.9')
 .set('Connection', 'keep-alive')
 .set('Content-Type','application/json;charset=utf-8')
 .set('Cookie','pgv_pvi=7821121536; RK=ATx54O7iS/; ptcz=703e162e6170aa04eceae89bbeb7487b268da66bee3346dccb2d8c8d58118f4a; _ga=GA1.2.1343725395.1594562026; btcu_id=2d7a92ea73643b1ae07645bcf14931ee5f0b15ea161ef; vc=vc-8ba64de6-5f12-428d-9aad-ea2b86d08c63; vc.sig=aN42FBqlG0nrgOipDLdiWAyr5JA-r7b0Y7jYAf0LlLU; tvfe_boss_uuid=7cfc58118726931a; pgv_pvid=2827018296; pac_uid=0_5f1fb52070322; pgv_info=ssid=s3583185082; token-skey=60617486-5cbe-942c-56ff-cfdcf8b2cde7; token-lifeTime=1600173082; pgv_si=s8843278336; ptui_loginuin=877236822; NODINX_SESS=oHkGvNOafXOvpXsNYOuKFQTs_p3oD2CmOpv-caeQ9mj2y25DLwtnv8x4RH4LnihS; _gid=GA1.2.131778890.1600155117; csrfToken=FWcRZbbW_sWAfiSgXGk48QNA; _gat=1; referrer=eyJpdiI6IklLbGYxYlBJWmZBWDZGNnZ4R1wvWGdnPT0iLCJ2YWx1ZSI6IndrdUh3S3pja2g1TjRGOXU1Z3p4UVVJeDlSNTk4NUhMSWJFOXE5RlNtXC9sYlFDWDcreHBWWHJyR2E0YWJkSTZvZmplVHZjY09zXC9JVURDM3NxSVFcLzNlVjVsdXZoT3Q3Zno3U3k4SCtzN0pydDFUZVFERWNtSWVvTzdDSkZrd2s5dDFXeTFxNzdxSGNIdFJnM1BZb0x1XC9mbTRPRVBvcG4zYjFqUGlXa0QzaU09IiwibWFjIjoiZjBmNzcyNzg1MzRkOGU4OGFkZTAwN2QzMWM5Njg4MzM4M2ZlZjIxYzdlOTRkNjA0YmVmYWRlMGJiMmFjMDg1ZiJ9; bugly_session=eyJpdiI6ImxCYUR2MnlCQ2xsMExSRlQwNWc3eUE9PSIsInZhbHVlIjoicW85VE5naHdlVmlxSnhKZE9mZW52YXVzUXBKU0cyYk1MbDFESlBnQyt5T2Vqdk16MEJ4ems1TWJWN1VjZERSYUllYk53Vjh4eVI5bzdqeDI0aVhmSHc9PSIsIm1hYyI6ImZjNGRlZGYzMjNjZWFlY2Y1MGQ0YmNkZDNiNDUyNzVjODMwYTNkMjRlMjllYmQ2YzU0MDQ4MjlkNzlmNGIwOWUifQ%3D%3D')
 .set('Host','bugly.qq.com')
 .set('Referer','https://bugly.qq.com/v2/crash-reporting/dashboard/09456c3bfc?pid=1&isRealTime=0&startDate1=20200901&endDate1=20200915&date1=custom')
 .set('Sec-Fetch-Dest','empty')
 .set('Sec-Fetch-Mode','cors')
 .set('Sec-Fetch-Site','same-origin')
 .set('User-Agent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36')
 .set('x-csrf-token','FWcRZbbW_sWAfiSgXGk48QNA')
 .set('X-token','768613756')
 .end(function(err, res){
      // 请求返回后的处理
      var buglyData = JSON.stringify(JSON.parse(res.text).ret.data);

      /**
       * filename, 必选参数，文件名
       * data, 写入的数据，可以字符或一个Buffer对象
       * [options],flag,mode(权限),encoding
       * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
       */
      fs.writeFile('crash.json', buglyData, function (err) {
      if(err) {
            console.error(err);
          } else {
            console.log('写入crash.json成功');
          }
      });

  });
/**
 * ANR
 */
superagent
  .get('https://bugly.qq.com/v2/getTrend/appId/09456c3bfc/platformId/1/version/-1/startDate/20200901/endDate/20200915/type/anr')
  // 请求参数
  .query({ dataType: 'trendData' })
  .query({ fsn: '94a499a8-c12f-40f6-a555-2fb846f563f8' })
  // Http请求的Header信息
 .set('Accept', 'application/json;charset=utf-8')
 .set('Accept-Encoding', 'gzip, deflate, br')
 .set('Accept-Language', 'zh-CN,zh;q=0.9')
 .set('Connection', 'keep-alive')
 .set('Content-Type','application/json;charset=utf-8')
 .set('Cookie','pgv_pvi=7821121536; RK=ATx54O7iS/; ptcz=703e162e6170aa04eceae89bbeb7487b268da66bee3346dccb2d8c8d58118f4a; _ga=GA1.2.1343725395.1594562026; btcu_id=2d7a92ea73643b1ae07645bcf14931ee5f0b15ea161ef; vc=vc-8ba64de6-5f12-428d-9aad-ea2b86d08c63; vc.sig=aN42FBqlG0nrgOipDLdiWAyr5JA-r7b0Y7jYAf0LlLU; tvfe_boss_uuid=7cfc58118726931a; pgv_pvid=2827018296; pac_uid=0_5f1fb52070322; pgv_info=ssid=s3583185082; token-skey=60617486-5cbe-942c-56ff-cfdcf8b2cde7; token-lifeTime=1600173082; pgv_si=s8843278336; ptui_loginuin=877236822; NODINX_SESS=oHkGvNOafXOvpXsNYOuKFQTs_p3oD2CmOpv-caeQ9mj2y25DLwtnv8x4RH4LnihS; _gid=GA1.2.131778890.1600155117; csrfToken=FWcRZbbW_sWAfiSgXGk48QNA; _gat=1; referrer=eyJpdiI6IkJvOERlbFVndHFDOHJCS1V5eVc1MUE9PSIsInZhbHVlIjoicGtDbFhzZG1zRGZZWTd0S1d1bjlXbUhVV2VEaWp0WTNjMStiZStoMVVxc1FzZWx4dXdSdkxrTjRoQmhDRDlUUXJuRE1BaGRMQmJMZExCNmtUS3Y3a1pGRjFSZ0p5VTZQZU1UR1lISkpMYllIUXdTMkNmSjRhYjdHOVRzcVZuWFh5WmlSbVJqcmxDRlc0Qk5YTUkzY0ZmUG51UW9FblYyUDZiYTJneDVjaURvPSIsIm1hYyI6IjhlNjdlMjcxYzljZWRkOGM3YjA0ZjY4NjYzMTUyODFmOGZlNjljMGRmZGI4MjQyOTFhNDk2ZDliN2UwMDA2OTQifQ%3D%3D; bugly_session=eyJpdiI6ImRZZ3dcLzhJWHFIYTdxSWdsNjVxaHpBPT0iLCJ2YWx1ZSI6InlLeHhlVm9BaXRud2haXC9mTTkwaGp6VXJPTE5DaTRxcGNBQVhQSzRObnM3T2RCSXNSUWNVdlZsTmR1M29WXC9uVko1NVdNcEhoZmtxR1p3ekI3cDBWMUE9PSIsIm1hYyI6ImEyOGZmNzkzOWIxOWZkMjM1MjY2M2RiODkyZmYxY2FiOTRhNGYzZmE5Y2Y3MWU2N2M2OWIxOGM4ZWUyNmU1MjcifQ%3D%3D')
 .set('Host','bugly.qq.com')
 .set('Referer','https://bugly.qq.com/v2/crash-reporting/dashboard/09456c3bfc?pid=1&isRealTime=0&startDate1=20200901&endDate1=20200915&date1=custom')
 .set('Sec-Fetch-Dest','empty')
 .set('Sec-Fetch-Mode','cors')
 .set('Sec-Fetch-Site','same-origin')
 .set('User-Agent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36')
 .set('x-csrf-token','FWcRZbbW_sWAfiSgXGk48QNA')
 .set('X-token','768613756')
 .end(function(err, res){       
      // 请求返回后的处理
      var buglyData = JSON.stringify(JSON.parse(res.text).ret.data);

      /**
       * filename, 必选参数，文件名
       * data, 写入的数据，可以字符或一个Buffer对象
       * [options],flag,mode(权限),encoding
       * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
       */
      fs.writeFile('anr.json', buglyData, function (err) {
      if(err) {
            console.error(err);
          } else {
            console.log('写入anr.json成功');
          }
      });

  });
