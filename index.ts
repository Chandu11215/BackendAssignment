import * as express from 'express';
import * as mongoose from "mongoose";
import Restaurants from './models/restaurant';

const app = express();
app.listen(3000, () => {
    console.log('started my server');
});

mongoose.connect('mongodb+srv://kalal19:kalal19@restaurantdb.fzspt.mongodb.net/RestaurantDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then((data) => {
        console.log('connected to database');
    });

app.get('/restaurant', (req, res, next) => {
    const options = {
        location: {
            $geoWithin: {
                $centerSphere: [[17.343242, 78.342343], 15 / 3963.2]
            }
        }
    }
    Restaurants.find(options).then(data => {
        res.send(data);
    })
})
