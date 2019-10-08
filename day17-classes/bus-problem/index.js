class Bus {
    constructor(direction, stations, seats, passengers, last_station) {
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = last_station;
    }

    current() {
        // console.log(this.stations[this.last_station]);
        return this.stations[this.last_station];
    };

    next() {
        if (this.last_station < 4) {
             this.last_station += 1;
             // console.log(this.last_station + 1);
        } else {
            // console.log(`Bus is at the final destination of ${this.direction}.`);
            return this.last_station;
        };
    };

    board(count) {
        if ((count + this.passengers) > this.seats) {
            this.passengers = this.seats;
            // console.log(`There are now ${this.passengers} passengers on the bus. The bus is full`);
        } else {
            this.passengers += count;
            // console.log(`There are now ${this.passengers} passengers on the bus`);
        };
    }
    
    disembark(count) {
        if (count > this.passengers) {
            this.passengers -= this.passengers;
            return this.passengers;
        } else {
            this.passengers -= count;
            return this.passengers;
        }
    }
}


const pragueViennaRoute = ['Prague', 'Jihlava', 'Brno', 'Breclav', 'Vienna'];
const viennaPragueRoute = ['Vienna', 'Breclav', 'Brno', 'Jihlava', 'Prague'];

const buses = [
    bus1 = new Bus('Vienna', pragueViennaRoute, 30, 8, 2),
    bus2 = new Bus('Vienna', pragueViennaRoute, 25, 20, 0),
    bus3 = new Bus('Prague', viennaPragueRoute, 25, 13, 3),
    bus4 = new Bus('Prague', viennaPragueRoute, 40, 33, 4)
]

