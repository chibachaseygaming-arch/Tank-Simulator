# Iron Dune — Tank Simulator

## [▶ PLAY IRON DUNE](https://chibachaseygaming-arch.github.io/Tank-Simulator/)

Click the link above to play in your browser. Desktop keyboard and mouse recommended.

An offline, single-file 3D tank survival game. You can also download `tank-play.html` and open it in a desktop browser.

## Controls

- WASD or arrows: move
- Mouse: aim; hold left click: fire
- Space: boost
- Q / E: rotate camera
- F: toggle automatic fire
- Escape: pause
- 1 / 2 / 3: select a run upgrade

### FPS infantry and feedback

Choose **Deploy FPS Infantry** to play on foot with a first-person anti-armour rifle. WASD moves relative to your view, mouse movement aims through unlimited horizontal rotations, hold left click fires, and Space sprints. Mouse capture hides the cursor; Escape releases it and pauses. Resume or select an upgrade to capture it again. If capture is blocked, click the battlefield to retry. Choose **Deploy Abrams** on the main menu to return to tanks. Both modes share commander XP, upgrades, and rebirth progression.

The **Feedback** button opens your email application addressed to **chibachaseygaming@gmail.com**; it does not send anything automatically.

FPS enemies are animated soldiers with helmets, vests, and rifles. Your first-person rifle is a perspective-rendered 3D model with a magazine, optic, hands, walking motion, and recoil. Soldier hitboxes match their smaller size. Abrams mode continues to use tanks.

Browser regression checks: install Playwright and Microsoft Edge, then run `node browser-test.cjs` (or set `PLAYWRIGHT_MODULE` to your installed Playwright module path).

Choose a crew, earn persistent commander XP, and select one of three upgrades every two kills. Progress is saved in your browser's local storage.

### Rebirth

Use **Rebirth** on the main menu at commander level 10. Each rebirth adds +10% starting armour and damage and +20% earned XP. Confirmation resets commander XP, upgrade points, and motor pool levels; lifetime kills, best score, and rebirth bonuses remain. The next rebirth requires five more commander levels than the previous one.

Run the gameplay checks with `node verify.cjs`.

Canonical repository: https://github.com/chibachaseygaming-arch/Tank-Simulator

## Website setup (repository owner, once only)

In **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/ (root)**, then click **Save**. GitHub publishes the game at the Play link above. Future updates pushed to main will update the website automatically.
