# 🖥️ Control Panel

The website Control Panel manages your Master Account and its associated game accounts, and gives you tools beyond what's available in-game.

### 🛒 Live Market
Near real-time view of active player shops. Separate tabs for items being sold and bought. Search by item, card, merchant, or shop name. Shows refine level, cards, enchants, element, seller, price, and map coordinates (click to copy nav). Slightly delayed relative to in-game `@ws`/`@wb`.

### 💸 Vending History
Per-item sales history: total volume sold, quantity sold, price range, average and last sale price, a price trend graph, and a daily min/avg/max breakdown.

### 📈 Vending Statistics
Leaderboard of the most expensive items sold, filterable by last day/week/month/year.

### 👥 Guest Profiles
Create up to 10 restricted logins to share with trusted friends, each with its own password, each
associable with any of your player accounts. Restrictions can be toggled individually, per profile:

* **Drop Items** — can't drop items on the ground (can still pick up).
* **Trading** — can't trade with other players.
* **Selling Items** — can't sell to NPCs; also blocks Vending and Buy Shops for Merchant class.
* **Buying Items** — can't buy from NPCs or vending shops.
* **Stat Allocation** — can't spend stat points.
* **Skill Allocation** — can't spend skill points.
* **Storage Access** — can't open account Kafra storage.
* **Master Storage** — can't open master storage.
* **Guild Storage** — can't open guild storage.
* **RODEX Mail** — can't send, delete, or receive RODEX mail.
* **Bank Access** — can't use `@bank` or Ctrl+B.
* **Master Bank** — can't use `@mbank`.

If a guest profile's password matches the account's own password, the account password takes priority and the guest profile won't be used.

### 📜 Item Logs
General item log tracks every transaction — pickup, drop, storing, vending, mailing, trading — for notable items. Separate dedicated logs also exist for Storage and Inventory, Guild Storage, Rodex.

### 📊 Player Activity
Active player accounts over the past 24 hours and 7 days.

### 🗺️ Quest Tracker
Per-character quest progress.

### 🔑 Account Password Unsync
From the account info page, disable the sync between a player account's password and the master account's password, set a separate one, and re-sync at will.

### 🏆 Rankings
* Blacksmith / Alchemist Rankings
* MVP Rankings
* WoE Player Rankings — damage dealt/received, kills/deaths, Emperium damage & breaks, healing given/received, items consumed. Populated after each WoE session ends.
* Endless Tower Rankings
