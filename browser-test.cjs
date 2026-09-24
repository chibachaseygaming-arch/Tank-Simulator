const fs=require('fs'),assert=require('assert');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1280,height:800}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.setContent(fs.readFileSync('tank-play.html','utf8'));
  assert.match(await page.locator('.feedback').getAttribute('href'),/^mailto:chibachaseygaming@gmail.com/);
  await page.click('#infantry');
  await page.waitForFunction(()=>document.pointerLockElement===document.getElementById('game'));
  await page.waitForFunction(()=>getComputedStyle(document.getElementById('game')).cursor==='none');
  assert.equal(await page.locator('#game').evaluate(e=>getComputedStyle(e).cursor),'none');
  await page.evaluate(()=>{enemies=[];infantryLook({movementX:Math.PI*4/.0025,movementY:0});});
  assert.ok(await page.evaluate(()=>lookYaw>Math.PI*2));
  await page.keyboard.down('w');await page.waitForTimeout(180);await page.keyboard.up('w');
  assert.ok(await page.evaluate(()=>Math.hypot(player.x,player.z)>.1));
  await page.evaluate(()=>{lookYaw=0;lookPitch=0;enemies=[{x:player.x,z:player.z+12,a:0,t:0,hp:100,max:100,cd:99}];fire(player);});
  assert.ok(await page.evaluate(()=>enemies[0].hp<100));
  await page.keyboard.press('Escape');
  await page.waitForFunction(()=>!document.pointerLockElement);
  await page.click('#resume');
  await page.waitForFunction(()=>document.pointerLockElement===document.getElementById('game'));
  await page.evaluate(()=>{lookPitch=1.2;enemies[0].hp=100;fire(player);});
  assert.equal(await page.evaluate(()=>enemies[0].hp),100,'Looking above an enemy must miss');
  await page.evaluate(()=>{lookPitch=0;});
  await page.evaluate(()=>{draft();});
  await page.waitForFunction(()=>!document.pointerLockElement);
  await page.click('[data-pick="0"]');
  await page.waitForFunction(()=>document.pointerLockElement===document.getElementById('game'));
  await page.screenshot({path:'infantry-test.png'});
  await page.evaluate(()=>menu());await page.click('#deploy');
  assert.equal(await page.evaluate(()=>mode),'tank');
  assert.equal(await page.evaluate(()=>document.pointerLockElement),null);
  assert.deepEqual(errors,[]);
  console.log('PASS browser: feedback, FPS deployment, real pointer lock, hidden cursor, 720-degree look, movement, damage, pause/resume, upgrades, tank switching; no JS errors.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
