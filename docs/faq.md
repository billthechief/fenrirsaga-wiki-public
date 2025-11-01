# ❓ Frequently Asked Questions

Here are answers to some of the most common questions we see from players regarding gameplay mechanics and technical issues.

---

## 🔧 Gameplay Mechanics

!!! question "How many cells of Deluge does Water Ball consume?"
    Water Ball will consume as many active Deluge cells as it can, depending on its skill level (1x1 for Lv. 1-4, 3x3 for Lv. 5-7, 5x5 for Lv. 8-10). It will only fire a single ball per cell it consumes.

    A full Deluge produces a **7x7** grid of water cells (49 total). Therefore:
    * A **Level 10 Water Ball** cast in the center of a full Deluge will consume a **5x5** area and fire **25 water balls**.
    * You can cast a maximum of **49 water balls** from a single, full Deluge, but the number of balls per cast depends on how you consume the cells.

!!! question "Does Maximize Power prevent SP Recovery?"
    Yes, natural SP Recovery is disabled while the Maximize Power skill is active.

---

## 🚩 Technical & Troubleshooting

!!! question "What are the first steps to prevent crashes or performance issues?"
    It is not uncommon for players to encounter issues running the game on modern hardware. Before launching the game, it is recommended to:

    1.  **Set Graphics Configuration:** Make sure you've run `Setup.exe` in your game folder and configured your graphics card and resolution settings first.
    2.  **Run as Administrator:** If the game is installed in a protected directory like `C:\Program Files`, right-click `Fenrir Saga Patcher.exe` and select "Run as Administrator."
    3.  **Run in Compatibility Mode:** Right-click on `Fenrir Saga Patcher.exe`, select "Properties," go to the "Compatibility" tab, check "Run this program in compatibility mode for:", and select **Windows XP (Service Pack 3)** or **Windows 7**.

!!! question "How do I make player and guild names always visible?"
    You can use the in-game command `/showname`.

    Alternatively, you can set this permanently by opening `opensetup.exe` in your Ragnarok folder and changing the "Display Name Type" option.

!!! question "How can I fix client stuttering or bad performance?"
    Laggy or stuttering client performance can have a few causes. Please try each of these steps one by one to see if your performance improves:

    1.  **Check your GPU:** Open `opensetup.exe` and make sure the game is using your dedicated GPU, not an integrated graphics card.
    2.  **Disable Frame Skipping:** Type `/skip` in the in-game chat.
    3.  **Disable V-Sync:** Type `!vsync` in the in-game chat.
    4.  **Free CPU:** Open `opensetup.exe`, go to the **ROExt** tab, and try disabling the **"Free CPU when inactive"** option.
    5.  **Disable dgVoodoo:** If you are using dgVoodoo, try disabling its virtualization. Run `dgVoodooCpl.exe`, go to the **DirectX** tab, and check **"Disable and passthru to real DirectX"**. Note that this will prevent you from using resolutions greater than 1920x1440.

!!! question "Why is my screen completely white?"
    This is usually a graphics rendering issue. Please try the following steps:

    1.  Run `opensetup.exe` and try turning off **Lightmaps**.
    2.  If that doesn't work, try disabling the dgVoodoo wrapper. To do this, run `dgVoodooCpl.exe`, go to the **DirectX** tab, and check the box that says **"Disable and passthru to real DirectX"**.

    If neither of these solutions works, please ask for help in our support channel on Discord.

!!! question "When should I enable dgVoodoo?"
    If you are using an **integrated graphics card** and experience crashes, or if you would like to run the game at a resolution of 2540x1440 or higher, you may need to **enable** dgVoodoo.

    To do this, run `dgVoodoo.exe` and ensure the box for **"Disable and passthru to real DirectX"** is **unchecked**.

!!! question "How do I fix the 'Failed to get plist.txt' error?"
    This error indicates a problem with your system's web components. To fix this, perform a system update and ensure that **Internet Explorer** or **Microsoft Edge** is fully up-to-date.

!!! question "What if my anti-virus or firewall is blocking the game?"
    Some anti-virus programs may incorrectly flag the game client or patcher as a threat. Make sure your anti-virus isn't blocking the game. You may need to add an exception or whitelist `Fenrir Saga.exe` and `Fenrir Saga Patcher.exe` in your anti-virus or Windows Firewall settings.