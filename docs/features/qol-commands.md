# ⌨️ Player Commands

While we strive to keep the game as close to iRO Vanilla experience as possible, we still carefully implement  **Quality of Life** measures to enhance player experience and satisfaction. After all, the game is meant to be enjoyed. Please find below the available commands on **Fenrir Saga**.

---

## 💬 Quality of Life Commands

These commands provide useful information, shortcuts, and social features.

| Command | Aliases | Description |
|---|---|---|
| `@autotrade` | | Autovends while you are offline. Autovendors are logged off after **2 weeks** in a town, or **4 hours** if outside a town. |
| `@beams` | | Customizes the colors and drop-rate thresholds for item beams that appear on the ground. |
| `@killcount` | `@kc` | Shows the amount of kills for a specific monster registered under your account. |
| `@meter` | | Gauges the experience points (EXP) you have earned over a period of time. |
| `@mobinfo` | `@mi` | Shows detailed monster information, including your current Hit and Flee rate against them. |
| `@iteminfo` | `@ii` | Shows detailed information about an item. |
| `@whodrops`| | Shows which monsters drop a specific item. |
| `@whereis` | | Shows which maps a specific monster spawns on. |
| `@whobuy` | | Shows vendors currently buying a specific item. |
| `@whosell`| `@ws`, `@ws2` | Shows vendors currently selling a specific item. |
| `@walkmode` | | Toggles walk behavior when hit. Normally, getting hit stops you unless you are holding down the mouse button. This command lets you keep walking without holding it. This does not grant the Endure effect. |
| `@guildlog`| `@glog` | Shows the history of items being deposited or withdrawn from the guild storage. Ex: `@glog +7 2504[4133]` shows the history for a +7 Raydric Carded Muffler. |
| `@friends` | | Manages your friends list, including hiding your online status. |
| `@loginout`| `@li` | Toggles the login/logout notification messages for your friends and guild members. |
| `@whomap` | | Shows a list of other players currently on the same map as you. |
| `@bank` | | Opens your personal bank storage. |
| `@masterbank`| `@mbank` | Opens your shared Master Account bank storage. |
| `@pettalk` | | Filters out a percentage of your pet's talk messages. |
| `@played` | | Shows the total time played on your current character. |
| `@ping` | | Displays your current latency (ping) to the server. |
| `@deaths` | | Shows the number of times your character has died. |
| `@statuslock`| | Locks your status points to prevent accidental allocation. |
| `@skilllock`| | Locks your skill points to prevent accidental allocation. |
| `@channel` | | Manages your subscriptions to public chat channels. Ex: `@channel join german`, then use `#de` in-game to talk. |
| `@memo` | | Shows your current saved warp memo points and allows you to replace specific memos. |
| `@nomount` | | Hides your Peco Peco or Grand Peco mount on your own screen. This is a visual-only change for yourself and is disabled during War of Emperium. |
| `@homstats` | | Shows your Homunculus's current stats. |
| `@hate`/`@feel`| | Displays the current Star Gladiator "Feeling" and "Hate" map assignments. |
| `@cooking` | | Shows your current cooking experience/mastery level. |
| `@adopt` | | Allows you to adopt a Novice or First Class character into your family. |

---

## 🖥️ Graphical & Client Commands

These commands directly affect your game client's performance and display.

| Command | Description |
|---|---|
| `/walkdelay` | Sends mouse click events to the server on every frame, instead of the default ~180ms. This makes movement feel significantly more responsive. Recommended for ranged characters and kiting.<br><br>*(Suggestion: Embed a GIF or link to a video here to demonstrate the difference.)* |
| `/lightmap` | Toggles shadows and dynamic lighting effects. If your screen ever "breaks" and turns completely white, this command will usually fix it. |
| `@refresh` | Refreshes your screen display. This is useful for fixing visual bugs, character position lag, or cleaning up leftover skill effects on the screen. |
| `/skip` | Toggles frame skipping. Disabling this (`/skip` off) may improve performance on some machines. |
| `!vsync` | Toggles V-Sync, which limits your client's FPS to your monitor's refresh rate (usually 60). Disabling this may improve performance. |
| `/showname` | Toggles the format of character names above their heads (e.g., showing or hiding guild/party names). This can also be set permanently in `opensetup.exe`. |