const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cfadbaaaaacacadbacdaacadbcaacbbda.examlyiopb.examly.io/login');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('[data-testid="email"]', 'user@gmail.com');
    await page.type('[data-testid="password"]', '123');

    await page.click('[data-testid="submitButton"]');
    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('[data-testid="userNavbar"]',{timeout:1500});
      console.log('TESTCASE:test_case6:success');
    }
     catch(e){
      console.log('TESTCASE:test_case6:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();


  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-cfadbaaaaacacadbacdaacadbcaacbbda.examlyiopb.examly.io/login');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('[data-testid="email"]', 'admin');
    await page.type('[data-testid="password"]', 'admin');
    await page.click('[data-testid="submitButton"]');
    await page.waitForSelector('[data-testid="adminNavbar"]',{timeout:1500});
    console.log('TESTCASE:test_case7:success');
    } catch(e) {
      console.log('TESTCASE:test_case7:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-cfadbaaaaacacadbacdaacadbcaacbbda.examlyiopb.examly.io/login');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.type('[data-testid="email"]', 'test@iamneo.ai');
    await page.type('[data-testid="password"]', 'neo');
    await page.click('[data-testid="submitButton"]');
    await page.waitForNavigation();
    await page.waitForSelector('[data-testid="mobileAdminCartButton"]' ,{timeout:1500});
    await page.click('[data-testid="mobileAdminCartButton"]');
      // await page.screenshot({path: 'example2.png'});
      mobileAdminCartBody
      await page.waitForSelector('[data-testid="mobileAdminCartBody"]' ,{timeout:1500});
      await page.waitForSelector('[data-testid="mobileAdminCartBody"]' ,{timeout:1500});
      console.log('TESTCASE:test_case8:success');
    } catch(e) {
      console.log('TESTCASE:test_case8:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();

  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-cfadbaaaaacacadbacdaacadbcaacbbda.examlyiopb.examly.io/login');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.type('[data-testid="email"]', 'test@iamneo.ai');
    await page.type('[data-testid="password"]', 'neo');
    await page.click('[data-testid="submitButton"]');
    await page.waitForNavigation();
    
    await page.waitForSelector('[data-testid="mobileAdminOrderButton"]' ,{timeout:1500});
    await page.click('[data-testid="mobileAdminOrderButton"]');
      // await page.screenshot({path: 'example3.png'});
      await page.waitForSelector('[data-testid="mobileAdminOrderBody"]' ,{timeout:1500});
      console.log('TESTCASE:test_case9:success');
    } catch(e) {
      console.log('TESTCASE:test_case9:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();
 
  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    
    try {
      await page.goto('https://8081-cfadbaaaaacacadbacdaacadbcaacbbda.examlyiopb.examly.io/login');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.type('[data-testid="email"]', 'test@iamneo.ai');
    await page.type('[data-testid="password"]', 'neo');
    await page.click('[data-testid="submitButton"]');
    await page.waitForNavigation();
    await page.waitForSelector('[data-testid="logoutButton"]',{timeout:2000});
      await page.click('[data-testid="logoutButton"]');
      // await page.screenshot({path: 'example4.png'});
      await page.waitForSelector('[data-testid="loginBox"]',{timeout:1000});
      console.log('TESTCASE:test_case10:success');
    } catch(e) {
      console.log('TESTCASE:test_case10:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();