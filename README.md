# Iron Dune — Tank Simulator

## [▶ PLAY IRON DUNE](https://chibachaseygaming-arch.github.io/Tank-Simulator/)

Click the link above to play in your browser. Desktop keyboard and mouse recommended.

### [🎬 Watch Trailer 1](https://chibachaseygaming-arch.github.io/Tank-Simulator/media/trailer-1.mp4)

[View or download the original trailer on GitHub](media/trailer-1.mp4) · MP4, approximately 87 MiB.

An offline, single-file 3D tank survival game. You can also download `tank-play.html` and open it in a desktop browser.

## Controls

- WASD or arrows: move
- Mouse: aim; hold left click: fire
- Space: boost
- Q / E: rotate camera
- F: toggle automatic fire
- Escape: pause
- 1 / 2 / 3: select a run upgrade
- FPS only: hold right mouse button to aim down sights; release to return to hip fire. All 100 weapons support aiming, with 2.5× marksman scopes, 4× sniper scopes, 1.6× launcher sights and 1.5× sights for other weapons. Mouse sensitivity reduces while zoomed; left click still fires.
- FPS only: **H** toggles a clean recording view, hiding the HUD, control hints and hip-fire crosshair. Scope sights and pause menus remain usable. This changes the view; use your recording software to capture footage.
- **R** reloads your FPS weapon; empty magazines reload automatically. Every weapon class has its own magazine capacity and reload duration. Reserve ammunition is unlimited. **M** toggles the synthesized combat sounds.

Infantry headshots deal 1.6× damage. Every third defeated soldier drops a supply crate that restores 30 health and refills the current magazine. Enemies strafe, move around blocked routes, and only fire when they have line of sight. Damage vignette, kill confirmations and the ammunition HUD provide combat feedback; clean recording view hides HUD elements.

FPS combat includes stylized blood impacts, short bleeding damage, fading blood pools and fallen soldiers. Aftermath effects are capped and expire to keep rendering costs bounded. The battleground has warm sky lighting and softer impact particles.

### FPS infantry and feedback

Choose **Deploy FPS Infantry** to play on foot with a first-person anti-armour rifle. WASD moves relative to your view, mouse movement aims through unlimited horizontal rotations, hold left click fires, and Space sprints. Mouse capture hides the cursor; Escape releases it and pauses. Resume to capture it again. If capture is blocked, click the battlefield to retry. Choose **Deploy Abrams** on the main menu to return to tanks. Both modes share commander XP and rebirth progression. Only tank mode pauses every two kills for run upgrades.

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

### Infantry loadouts and battleground

Before launching FPS mode, the customization sidebar lets you choose **Assault**, **Recon**, **Medic**, or **Heavy**, then **Easy**, **Normal**, **Hard**, or **Nightmare**, plus your weapon category and weapon. Class bonuses are shown before deployment. Difficulty changes enemy health, damage, attack cadence, starting enemy count and reinforcement rate. Selections save between sessions and do not change tank mode. Combat starts only when you press **Deploy to Battleground**.

Infantry opens a loadout screen before deployment. All 100 named weapons are available immediately across assault rifles, carbines, SMGs, pistols, heavy pistols, shotguns, marksman rifles, sniper rifles, machine guns, and launchers. Each weapon has its own damage, fire rate and range; shotguns fire multiple pellets and launchers deal area damage. Class-based 3D weapon models vary in length, width, stock, scope and magazine.

Choose a uniform, skin tone, headgear and weapon finish with a soldier preview. Choices save locally; first-person sleeves, hands and weapon finish reflect the loadout. Infantry fights in a 3D compound with streets, buildings, containers, barriers and crates. Cover blocks movement and gunfire. Infantry has no three-choice upgrade interruptions.
