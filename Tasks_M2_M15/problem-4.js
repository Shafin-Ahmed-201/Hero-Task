function topRatedRestaurant(restaurants) {
    if (Array.isArray(restaurants) === false || restaurants.length === 0) {
        return 'Invalid'
    }
    let largest = restaurants[0]
    for (let singleRestaurant of restaurants) {
        if (singleRestaurant.rating > largest.rating) {
            largest = singleRestaurant;
        }
    }
    let nameUpper = (largest.name).toUpperCase()
    return nameUpper;
}
console.log(topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]))


