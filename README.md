# Countdown

## Improved countdown
The below component was designed to count down the days until our CTO's birthday, but it still needs some work. How can you make the implementation better?

**Do a critique:** The current implementation isn't perfect. How could it be improved?

* Pick an area of improvement to implement.
  * Improve the general date calculations 
  * Make the presentation more dynamic
  * Change the Countdown component to be hooks oriented
  * Abstract redudant pieces of HTML into their own components.
  * Added an input to put in any Birthdate
  * Added flex to make the layout responsive to smaller screens
* What would happen to the current code if the date were changed, the page layout was changed or the format was changed?
  * The date was not flexible, along with having the wrong year, and the layout was not responsive. I contained the Countdown in a simple flex container so that each block will wrap as the screen size changes
* Does the current implementation follow best practices for HTML, CSS, JS and React?
  * The CSS was pretty barebones and generally functional as it was, but did not have any infrastructure related content to containers or wrappers.
  * Some of the JS were purely utility functions that did not need to live within a components scope. I moved them to their own `utils.js` file to clean up the flow.
  * There was redundancy, especially with each time block that React accels at eating up using components-- so I broke those out into presentational `CountdownItem` components that simply take the title and current count.
  * I made the layout more data driven by looping through the countdown state for producing each `CountdownItem`
  * The calculations for the countdown included a series of conditionals that continually mutate a variable tracking the time remaining in seconds and creating the mapping for the countdown state. This is not an inherenly flawed approach, but it is ripe for generating bugs wrapped into either interaction. This approach also left out calculating remaining months, which is trickier to calculate than merely multiplying measures of time, so I decided to avoid reinventing the wheel and used the `date-fns` library to drastically clean up the code and make it easily immutable.

**Spice it up:** Let's be honest, this countdown could be a whole lot more exciting.

* What could you do to create a greater sense of urgency?
  * I added some color and emboldened the fonts. I could do more if desired, but I kept it simple
* How would you make this countdown more aesthetically pleasing?
  * Fonts and some slightly creative layout of title and number were my approach
* Trust your design instincts, and explain how your design choices impact the user experience
  * I think the color and fonts make it feel more interesting and compelling. 
  * The loading animation pulls the user in a little more and communicates the dynamic nature of the view
