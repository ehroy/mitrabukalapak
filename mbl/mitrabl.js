
const readlineSync = require('readline-sync');
  const puppeteer = require('puppeteer-extra');
  const StealthPlugin = require('puppeteer-extra-plugin-stealth')
  puppeteer.use(StealthPlugin())
  var randomName = require('node-random-name');
  const fs = require('fs-extra');
  const delay = require('delay');
  var chalk = require('chalk');
  const randomUseragent = require('random-useragent');
  function acak(length) {
      var result = '';
      var characters = '12314567890qwertyuiopasdfghjklzxcvbnm';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }
  function a() {
      (async () => {
      while(true){
          var uagent = randomUseragent.getRandom(function (ua) {
              return parseFloat(ua.browserVersion) >= 20;
          });
  
          const browser = await puppeteer.launch({
              ignoreDefaultArgs: ['--enable-automation'],
              executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
              userDataDir: 'a',
              headless:false,
              devtools:false,
              args: [
                  '--disable-notifications',
                  '--disable-features=site-per-process'
              ]
              
          })
          const page = await browser.newPage();
          // await page.setUserAgent(uagent);
          await page.setViewport({ width: 350, height: 700});
          const name = randomName()
          const pass = acak(8);
          const tanya = readlineSync.question("[INFO] Masukan nomor ? ")
  console.log("[INFO] Mencoba mendaftar dengan nomor "+tanya)  
  // regist
  await page.goto(`https://mitra.bukalapak.com/register?from=beranda&phone=${tanya}`,{ waitUntil: 'networkidle2', timeout: 60000 })
  await page.waitForSelector("#agenlite-app > div.register-page > div:nth-child(3) > div.c-full-modal > div.c-full-modal-content > div > div > button")
  await page.click("#agenlite-app > div.register-page > div:nth-child(3) > div.c-full-modal > div.c-full-modal-content > div > div > button")
  const tanyaotp = readlineSync.question("[INFO] Masukan nomor Otp ? ")
  await page.waitForSelector("#agenlite-app > div.register-page > div:nth-child(3) > div.c-full-modal > div.c-full-modal-content > div > div.c-input-otp__form > div > div:nth-child(1) > input")
  await page.type("#agenlite-app > div.register-page > div:nth-child(3) > div.c-full-modal > div.c-full-modal-content > div > div.c-input-otp__form > div > div:nth-child(1) > input",tanyaotp)
  
  await page.waitForSelector("#agenlite-app > div.register-page > div:nth-child(3) > div.c-full-modal > div.c-full-modal-content > div > div.c-input-otp-footer > button")
  await page.click("#agenlite-app > div.register-page > div:nth-child(3) > div.c-full-modal > div.c-full-modal-content > div > div.c-input-otp-footer > button")

  //form data akun 
   await page.waitForSelector("#name")
   await page.type("#name",name)

   await page.waitForSelector("#agenlite-app > div.register-page > div.register-subpage > div:nth-child(2) > div > div:nth-child(2) > label > span")
   await page.click("#agenlite-app > div.register-page > div.register-subpage > div:nth-child(2) > div > div:nth-child(2) > label > span")

   await page.waitForSelector("#agenlite-app > div.register-page > div.register-subpage > div:nth-child(2) > div > div.c-agent-type-selection.u-mrgn-top--3")
   await page.click("#agenlite-app > div.register-page > div.register-subpage > div:nth-child(2) > div > div.c-agent-type-selection.u-mrgn-top--3")

   await page.waitForSelector("#agent_type > div.c-selection-field__body > div:nth-child(1) > label > div")
   await page.click("#agent_type > div.c-selection-field__body > div:nth-child(1) > label > div")

   await page.waitForSelector("#agent_type > div.c-selection-field__body > div.c-fixed-footer > div.c-fixed-footer__content.u-shadow--ash-light > button")
   await page.click("#agent_type > div.c-selection-field__body > div.c-fixed-footer > div.c-fixed-footer__content.u-shadow--ash-light > button")

   await page.waitForSelector("#password")
   await page.type("#password","kaserinas123")

   await page.waitForSelector("#agenlite-app > div.register-page > div.register-subpage > div:nth-child(3) > button")
   await page.evaluate(()=> document.querySelectorAll("#agenlite-app > div.register-page > div.register-subpage > div:nth-child(3) > button")[0].click())


   await page.waitForSelector("#__layout > div > div.c-alert.c-alert--full.fixed-top.c-alert--success")
   const validation = await page.evaluate(()=> document.querySelectorAll("#__layout > div > div.c-alert.c-alert--full.fixed-top.c-alert--success")[0].innerText)
   const ress = validation.split('\t')[1]


//    console.log(ress)
   console.log(chalk.green('[INFO]' + ress))
   fs.appendFileSync("mitrabukalapak.txt", `nomor => ${tanya}` + ' | kaserinas123\n');

   const page2 = await browser.newPage()
   await page2.goto("https://accounts.bukalapak.com/login")
   await page2.waitForSelector("#user_session_username")
   await page2.type("#user_session_username",tanya)
   await page2.waitForSelector("#user_session_password")
   await page2.type("#user_session_password",'kaserinas123')
   await page2.waitForSelector("body > main > div > div.form-container.bordered > div.form-box > form > div:nth-child(5) > button")
   await page2.click("body > main > div > div.form-container.bordered > div.form-box > form > div:nth-child(5) > button")
   await delay(4000)
   await page2.goto("https://www.bukalapak.com/account_settings?from=dropdown")
   await page2.waitForSelector("#setting_account > div > dl.dl__title.dl__title--with-right-button > dd > button")
   await page2.click("#setting_account > div > dl.dl__title.dl__title--with-right-button > dd > button")
   await page2.waitForSelector("#setting_account > div > div.c-overlay.u-position-fixed.u-position-top.u-position-left.u-bg--pale-smoke.js-deactivating-tfa__popup > div > div > div > div.o-layout > div:nth-child(1) > button")
   await page2.click("#setting_account > div > div.c-overlay.u-position-fixed.u-position-top.u-position-left.u-bg--pale-smoke.js-deactivating-tfa__popup > div > div > div > div.o-layout > div:nth-child(1) > button")
   const otp2 = readlineSync.question("[INFO] Masukan otp ?")
   await page2.waitForSelector("#otp")
   await page2.type("#otp",otp2)
   await page2.waitForSelector("#js-tfa-popup > div > div.c-modal__content.o-box.o-box--medium.u-mrgn-top--2 > div > div.c-fld__row > button > i")
   await page2.click("#js-tfa-popup > div > div.c-modal__content.o-box.o-box--medium.u-mrgn-top--2 > div > div.c-fld__row > button > i")
   await page2.waitForSelector("#normal_page > div.js-flash-container.u-hidden > div")
//    await delay(2000)
   const resultq = await page2.evaluate(()=>document.querySelectorAll("#normal_page > div.js-flash-container.u-hidden > div")[0].innerText)
   console.log(chalk.green(`[INFO] ${resultq}`))

  await browser.close()
  await fs.remove('a')
      }
          
  
  
      })();
  }
  
//   function a(index)
  
  
  
  // const delay = require('delay');
  
      (async () => {
        console.log(chalk.yellow(`
============================================================
=============== AUTO CREATE MITRA BUKALAPAK ================
============================================================
               `))
          await a()
          // bar();
//           console.log(chalk.yellow(`
//   ============================================================
//   =============== AUTO CREATE MITRA BUKALAPAK ================
//   ============================================================
//       `))
//           // var menu = readlineSync.question('PILIH MENU : ');
//           var jumlahbrowser = readlineSync.question('Jumlah akun : ');
//           // if (menu == 1) {
//               for (let index = 0; index < jumlahbrowser; index++) {
//                   await delay(1000);
//                   a(index)
                  
            //   }
              // for (let index = 0; index < jumlahbrowser; index++) {
              //     await fs.remove('a' + index)
              // }
              // console.log('sukses dibersihkan..')
          // }
          // else if (menu == 2) {
          //     for (let index = 0; index < jumlahbrowser; index++) {
          //         await fs.remove('a' + index)
          //     }
          //     console.log('sukses dibersihkan..')
              
          // }
  
  
      })();
  