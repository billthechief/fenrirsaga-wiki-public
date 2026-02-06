// docs/javascripts/woe-timer.js

// Wait for the page to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const woeElement = document.getElementById("woe-timer");

  // Exit if the timer element doesn't exist on the page
  if (!woeElement) {
    return;
  }

  // --- Configuration ---
  // Flag to enable/disable WoE (set to false when between seasons)
  const woeActive = true;

  // Note: Times are in UTC to avoid timezone issues.
  // Season 4 Schedule
  const woeSchedules = [
    {
      day: 6, // Saturday (0=Sunday, 1=Monday, ..., 6=Saturday)
      startHour: 16, // 16:00 UTC (4:00 PM UTC)
      duration: 1,   // 1 hour
      castle: "Gondul (prtg_cas05)",
    },
    {
      day: 0, // Sunday
      startHour: 2, // 02:00 UTC (2:00 AM UTC)
      duration: 1,   // 1 hour
      castle: "Mardol (arug_cas01)",
    },
  ];

  // The official start date of the WoE Season
  const seasonStartDate = new Date("2026-02-14T16:00:00Z");

  // --- Main Timer Function ---
  function updateWoeStatus() {
    const now = new Date();

    // Check 0: If WoE is not active, display between seasons message
    if (!woeActive) {
      woeElement.innerHTML = `
        <strong style="color: #FF9800;">ℹ️ WoE is currently in between seasons.</strong>
      `;
      return;
    }

    // Check 1: Display countdown to the start of the season if it hasn't begun
    if (now < seasonStartDate) {
      displayCountdown(seasonStartDate, "🎉Season 4 begins in");
      return;
    }

    let ongoingWoe = null;
    const futureWoes = [];

    // Check 2: Determine if a WoE is currently ONGOING or find future ones
    woeSchedules.forEach(schedule => {
      const thisWeekEventStart = getNextDateForDay(schedule.day, schedule.startHour);
      const thisWeekEventEnd = new Date(thisWeekEventStart);
      thisWeekEventEnd.setUTCHours(thisWeekEventEnd.getUTCHours() + schedule.duration);
      
      console.log('This week event start:', thisWeekEventStart.toISOString());
      console.log('This week event end:', thisWeekEventEnd.toISOString());
      console.log('Is ongoing?', now >= thisWeekEventStart && now < thisWeekEventEnd);
      
      // Check if this week's event is currently ongoing
      if (now >= thisWeekEventStart && now < thisWeekEventEnd) {
        ongoingWoe = { ...schedule, end: thisWeekEventEnd };
      }
      
      // If this week's event hasn't started yet, check if last week's event is ongoing
      if (!ongoingWoe && thisWeekEventStart > now) {
        const lastWeekEventStart = new Date(thisWeekEventStart);
        lastWeekEventStart.setDate(lastWeekEventStart.getDate() - 7);
        const lastWeekEventEnd = new Date(lastWeekEventStart);
        lastWeekEventEnd.setUTCHours(lastWeekEventEnd.getUTCHours() + schedule.duration);

        if (now >= lastWeekEventStart && now < lastWeekEventEnd) {
          ongoingWoe = { ...schedule, end: lastWeekEventEnd };
        }
      }

      // Add the next upcoming instance of this schedule to the future list
      let nextOccurrence = getNextDateForDay(schedule.day, schedule.startHour);
      if (nextOccurrence <= now) {
          // If it has already passed this week, get the date for next week
          nextOccurrence.setDate(nextOccurrence.getDate() + 7);
      }
      futureWoes.push({ ...schedule, start: nextOccurrence });
    });

    // Check 3: If a WoE is ongoing, display its status
    if (ongoingWoe) {
      const timeRemaining = ongoingWoe.end.getTime() - now.getTime();
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      
      woeElement.innerHTML = `
        <strong style="color: #4CAF50;">ONGOING:</strong> ${ongoingWoe.castle} ends in <strong>${minutes}m ${seconds}s</strong>
      `;
      return;
    }

    // Check 4: If no WoE is ongoing, find the soonest future WoE and display the countdown
    futureWoes.sort((a, b) => a.start - b.start);
    const nextWoe = futureWoes[0];
    displayCountdown(nextWoe.start, `Next WoE (${nextWoe.castle}) starts in`);
  }

  // --- Helper Functions ---

  /**
   * Displays the d/h/m/s countdown to a target date.
   */
  function displayCountdown(targetDate, prefix) {
    const totalSeconds = Math.floor((targetDate.getTime() - new Date().getTime()) / 1000);

    if (totalSeconds < 0) {
      woeElement.innerHTML = "Calculating next WoE..."; // Should be brief
      return;
    }

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    woeElement.innerHTML = `
      ${prefix}<strong>⏳${days}d ${hours}h ${minutes}m ${seconds}s</strong>
    `;
  }

  /**
   * Calculates the date for the next occurrence of a given weekday and hour (in UTC).
   */
  function getNextDateForDay(targetDay, targetHour) {
    const resultDate = new Date();
    resultDate.setUTCHours(targetHour, 0, 0, 0);
    const currentDay = resultDate.getUTCDay();
    
    let dayDifference = targetDay - currentDay;
    if (dayDifference < 0) {
      dayDifference += 7;
    }
    resultDate.setUTCDate(resultDate.getUTCDate() + dayDifference);
    return resultDate;
  }

  // Run the timer every second
  setInterval(updateWoeStatus, 1000);

  // Run it once immediately on load
  updateWoeStatus();
});