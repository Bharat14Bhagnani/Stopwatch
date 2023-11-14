# Stopwatch
This project is a stopwatch using HTML5 CSS JavaScript
The HTML structure includes a stopwatch container with a display element (display) showing the time and a controls section with three buttons for starting, stopping, and resetting the stopwatch.

The CSS provides styling for the overall layout, including a centered display, spaced control buttons, and a clean button design. The color scheme is set to a dark background with white text.


The JavaScript logic includes functions for starting the stopwatch (start), stopping the stopwatch (stop) and resetting the stopwatch (reset)
4. Start Logic:
The start function starts the stopwatch. It uses setInterval to call the updateTime function every second when starting.
5. Stop Function:
The stop function stops the stopwatch by clearing the interval and setting isRunning to false.
6. Reset Function:
The reset function stops the stopwatch, resets the time variables, and updates the display immediately.
7. Update Time Function:
The updateTime function increments the seconds and updates the display. It also handles resetting seconds/minutes/hours when necessary.
8. Display Time Function:
The displayTime function formats the time values and updates the display.
9. Format Time and Pad Functions:
These utility functions ensure that time values are formatted with leading zeros when needed.
