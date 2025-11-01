# ⚡ Technical Improvements

A significant amount of effort has gone into enhancing the game's responsiveness and overall feel. This includes both client-side patches and server-side modifications to deliver a smoother online experience.

### Client-Side Enhancements

These patches directly improve your interaction with the game world.

* **Reduced Movement Input Delay**
    * The default 600ms delay between movement commands has been substantially reduced. Your character will feel far more responsive to your clicks.

* **Improved Item Pickup Responsiveness**
    * A custom patch allows you to pick up items more quickly, even while walking or attacking, removing the traditional clunky delay.

### Server-Side Enhancements

These backend changes ensure the server can keep up with your actions.

* **Increased Tick Rate**
    * The server processes player input and game state updates at a much higher frequency, reducing latency and making gameplay feel less choppy.

* **Input Queuing for Movement and Skills**
    * Just like in modern games, any input you send slightly early is now queued and processed as soon as your character is ready. This results in a more fluid combat experience.

* **Damage Delay Synchronization**
    * The server intelligently synchronizes damage "flinch" delay with your client, which substantially reduces desync during combat.

* **Desync Compensation**
    * The server can now detect when a desynced client sends an incorrect action and will gracefully handle it to keep you in sync with the game world.