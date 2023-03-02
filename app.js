// Exercise 1
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    isNeg = false;
    if (count < 0) {
        isNeg = true;
        count = count * -1;
    }
    for (i = 0; i <= count; i++) {
        if (i % 2 == 0) {
            if (isNeg = true) {
                console.log(`${i*-1}`)
            }
            console.log(`${i}`)
        }
    }
}

// Exercise 2
console.log("EXERCISE 2:\n==========\n");
function checkAge(username = "", age) {
    aboveSixteen = `Congrats ${userName}, you can drive!`
    belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    if (age == null) {
        console.log("No age entered.")
    }
    if (age >= 16) {
        console.log(aboveSixteen);
    }
    else {
        console.log(belowSixteen);
    }
}

//Exercise 3
function whichQuadrant(x, y) {
    if (x == null || y == null) {
        console.log("Enter both x and y arguments.")
    }
    else {
        if (x == 0 && y == 0) {
            console.log(`(${x},${y}) is on both the x and y axes`)
        }
        else if (x == 0) {
            console.log(`(${x},${y}) is on the y axis`)
        }
        else if (y == 0) {
            console.log(`(${x},${y}) is on the x axis`)
        }
        else if (x > 0 && y > 0) {
            console.log(`(${x},${y}) is in Quadrant 1`)
        }
        else if (x > 0 && y < 0) {
            console.log(`(${x},${y}) is in Quadrant 2`)
        }
        else if (x < 0 && y < 0) {
            console.log(`(${x},${y}) is in Quadrant 3`)
        }
        else if (x < 0 && y > 0) {
            console.log(`(${x},${y}) is in Quadrant 4`)
        }
    }
}

//Exercise 4
function typeOfTriangle(side1, side2, side3) {
    if (side1 + side2 <= side3 ||
        side2 + side3 <= side1 ||
        side3 + side1 <= side2) {
        console.log(`Invalid Triangle`)
        //return "Invalid Triangle"
    }
    else {
        if (side1 == side2 && side2 == side3) {
            console.log(`Equilateral Triangle`)
            //return "Equilateral Triangle"
        }
        else if (side1 != side2 && side2 != side3 && side3 != side1) {
            console.log(`Scalene Triangle`)
            //return "Scalene Triangle""
        }
        else {
            console.log(`Isosceles Triangle`)
            //return "Isosceles Triangle`""
        }
    }
}

//Exercise 5
function dataPlanStatus(planLimit, day, usage)
{
    if (day > 30 || day < 0)
    {
        console.log("Invalid entry for days.");
    }
    else
    {
        if (day == 1)
        {
            console.log(`1 day used, ${30 - day} days remaining`);
        }
        else if (30 - day == 1)
        {
            console.log(`${day} days used, 1 day remaining`);
        }
        else
        {
            console.log(`${day} days used, ${30 - day} days remaining`);
        }
        let dailyUsage = usage / day;
        let recommendedAvgDailyUsage = planLimit / 30;

        console.log(`Your average daily usage: ${dailyUsage} GBs/day`);
        console.log(`Data remaining: ${planLimit - usage} GBs`);


        let dataUsageStatus;
        if (usage > planLimit)
        {
            console.log(`You have already exceeded your monthly data limit. Shame on you!`);
        }
        else
        {
            if (dailyUsage > recommendedAvgDailyUsage)
            {
                dataUsageStatus = "EXCEEDING";
            }
            else if (dailyUsage < recommendedAvgDailyUsage)
            {
                dataUsageStatus = "UNDER";
            }
            else (dailyUsage == recommendedAvgDailyUsage)
            {
                dataUsageStatus = "RIGHT AT";
            }

            console.log(`You are ${dataUsageStatus} the suggested average daily use limit of ${recommendedAvgDailyUsage} GBs/day`);

            if (dataUsageStatus = "EXCEEDING")
            {
                console.log(`If you continue this high usage, you will exceed your data plan by ${dailyUsage * (30 - day)} GBs.`);
                console.log(`To stay below your data plan, use no more than ${(planLimit - usage) / (30 - day)} GBs/day.`);
            }
            else if (dataUsageStatus = "UNDER")
            {
                console.log(`If you continue this under usage, you will have ${dailyUsage * (30 - day)} GBs remaining at the end of the period.`);
                console.log(`You can increase your data usage to ${(planLimit - usage) / (30 - day)} GBs/day.`);
            }
            else
            {
                console.log(`You will use up all of your data on your plan right on the dot. Congrats!`);
            }
        }
    }
}