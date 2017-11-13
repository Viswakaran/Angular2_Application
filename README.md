#CODING EXERCISE - Angular2/SPA

## Table of Contents
1. Evaluation guidelines
2. Task
    1. User Stories
    2. Technical Tasks and NFRs
3. Sample Data and expected result
4. Detailed instructions


## User Stories 

### User Story #1
As an anonymous end user, I want to be able to enter a number of temperature records by entering a value and then clicking on the "Add" button.

### User Story #2
As an anonymous end user,  When I click on the "Get Median Temperature" button, I want to be able to see the median of the entered temperature records that I have entered.

### User Story #3
As an anonymous end user, I want to be prevented from entering and invalid value such as strings in the "Temperature" field.

### User Story #4
As an anonymous end user, I want the UI to inform me when an invalid action occured.

### User Story #5
As an anonymous end user, I want a progress bar to see how full my collection of temperatures is.


## Acceptance Criteria and Definition of Done
- For user story #1 and #2. Create an object (or a service) named "TemperatureMonitor". 
- This object MUST have a method named "recordTemperature" that will accept a number value.
- This object MUST have a method called "getCurrentMedian" that will return the median of the recorded values.
- This object MUST be easily reusable and have no coupling with the UI
- The Code that calculates the median MUST be your own (no libraries allowed)
- Enforce a MAXIMIUM of 8 temperatures with appropriate user feedback.
- You MUST unit test all the use cases that you feel is appropriate.
- Twitter Bootstrap CSS is already included in the index file, use it at will

##Sample Data and expected result
```[5, 1, -7, 7, 8, 3] --> [-7, 1, 3, 5, 7, 8] = (3+5)/2 = 4```

```[5, 1, -7, 7, 8, 3, 9] --> [-7, 1, 3, 5, 7, 8, 9] = 5```



Jasmine documentation can be found [here][Jasmine]

You can find a definition of what a Median is on [wikipedia][Median]

##Thought Process



