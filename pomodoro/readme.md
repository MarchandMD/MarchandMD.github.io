Features/specs

1. A clock that counts down every second (setInterval)

2. Given the time is counting down, when it reaches 0, the break timer starts
3. Buttons to pause, stop, start, or completely reset both session and break time to 25/5
4. 2 distinct areas for selecting time amounts and displaying/controlling time
5. Buttons increase/decrease duration of session (disabled during coutdown)
6. Color change depending on time remaining
7. Given the break timer is counting down, when it hits 0, then it resets to the break time, and countsdown again.

Revised Features V 0.0.2:

1. Given a user is not at the website, When the user goes to the website, then a timer is displayed with 25 minutes on it. 

2. Given the timer is not counting down, When the user clicks a start button, the timer begins to count down by seconds. 

3. Given the timer is counting down, When the timer reaches 0, the timer stops counting down. 

Revised features v 0.0.3:

1. Prevent study time from going below 5:00 

2. Stop study Timer at 0 seconds, start break Timer, and reset study Timer to 25 (need to fix this to reset study time to selected start time)

3. Stop break timer at 0:00 and start Study Timer and reset Breaktimer



Bugs:

2. adding/subtracting a minute while studyTimer is running should stop the timer, and update the display to the new duration
3. How to reset studyTime to amount other than default?