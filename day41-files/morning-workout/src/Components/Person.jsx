import React from 'react';

export default class Person extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            data: null
        }
    }

    componentDidMount = () => {
        fetch('https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/autumn-2019/2019-11-05')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                data: data
            });
        });
    }

    formatTime = (date_string) => {
        let date = new Date(date_string);

        return date.getHours() + ':' + (`0${date.getMinutes()}`.slice(-2))
    }

    render() {
        let content = 'Loading...'
        if (this.state.data !== null) {
           content = (
               <>
                    <h2>For date: {this.state.data.date} </h2>
                        {
                            this.state.data.attendance.map((student, key) => (
                                <tr key={key}>
                                    <th>{student.name}</th>
                                    <td>{this.formatTime(student.from)}</td>
                                </tr>
                            ))
                        }
               </>
        )}

        return (
                <>
                    {content}
                </>
            )
    }

}