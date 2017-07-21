# What's In Retrograde?

"What's In Retrograde?" is a web app that allows the user to see the current retrograde status of the planets. Users can also view a different date by selecting a date in the dropdown. All the data is fed through a JS file which holds objects containing the data for each date. 

## Getting Started
The page automatically loads a JavaScript function which fetches retrograde data based on todays date. The function checks against todays date and then iterates through each date object, returning the current days data. The date selector function works in the similar way, but checks against the selected date versus todays date.


### The Retrograde Database

retrogradeData.js contains one object named dateInfo which contains an object for each day of the year. The structure of these objects is as follows:

```
feb06: {
        planets: ['VENUS', 'JUPITER', 'SATURN', 'PLUTO'],
        direction: ['In RX Zone', 'Stationary Retrograde', 'In RX Zone', 'In Rx Zone'],
        time: ['12:59 AM'],
        sign: ['Libra'],
        degrees: ['23&deg;'],
        minutes: ["8'"],
},
```

When the ```fetchRetrograde()``` function runs, it iterates through each date object to pull the data for each category.

### Installing

Just copy the all the contents into your web server and deploy!

## Things To Add

* Icons for days with no event
* Simple way to retrieve data for any day
* Create an API based on the retrogradeData.js file

## Built With

* Good ol' vanilla JavaScript
* Sweaty hands

## Contributing

Feel free to point out anything that can be improved or added!


## Authors

* **Bryan Torres** - *Initial work* - [BryTorres](https://github.com/brytorres)

Other contributors will be added to this list when the time comes :)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

