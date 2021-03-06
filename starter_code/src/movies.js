/* eslint no-restricted-globals: 'off' */
console.log(movies[0].year)
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let byYear = [...arr].sort((s1, s2) => {
        if (s1.year > s2.year) return 1;
        else return -1
    })
    return byYear
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    let byStevenS = arr.filter((movies) => movies.director === 'Steven Spielberg' && movies.genre.indexOf('Drama') != -1)
    return byStevenS.length

}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let alphArr = [...arr].sort((s1, s2) => {
        if (s1.title > s2.title) return 1;
        else return -1
    })
    alphArr.splice(20)
    return alphArr.map(movies => movies.title)

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length > 0) {
        let noZero = arr.filter((movies) => movies.rate);
        let ratesArr = noZero.reduce((ac, cu) => ac += cu.rate, 0) / arr.length;
        return +ratesArr.toFixed(2)
    }
    return 0
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let byDrama = arr.filter((movies) => movies.genre.indexOf('Drama') !== -1)
    if (byDrama.length > 0) {
        let ratesArr = byDrama.reduce((ac, cu) => ac += cu.rate, 0) / byDrama.length;
        return +ratesArr.toFixed(2)
    }
    return 0
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    let newArray = 0
    let duration = arr.map(movies => movies.duration)
    let pelisPorMinutos = []
    for (let i = 0; i < duration.length; i++) {
        let hours = duration[i].split(" ");
        if (hours[0].indexOf('h') === -1) {
            hours[0] = '0h'
        }
        let hour = (hours[0]) ? parseInt(hours[0]) : 0; // if ternario
        let minutes = (hours[1]) ? parseInt(hours[1]) : 0;
        let totalMinutes = (hour * 60) + minutes;
        pelisPorMinutos.push(totalMinutes)
    };
    for (i = 0; i < arr.length; i++) {
        arr[i].duration = null
    }
    for (j = 0; j < pelisPorMinutos.length; j++) {
        arr[j].duration += pelisPorMinutos[j]

    }
    return newArray = arr

}


// BONUS Iteration: Best yearly rate average - Best yearly rate average