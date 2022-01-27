import './Events.scss';
import React from 'react'
import Grid from '@material-ui/core/Grid';
import Calendar from 'react-calendar';
import DATA from './data';
import CardItem from './CardItem';

const Events = () => {

    const [value, onChange] = React.useState(new Date());

    return (
        <Grid container spacing={1}>
            <Grid container spacing={1}>
                <h1>Calendario de Eventos</h1>
            </Grid >

            <Grid container spacing={3}>
                <Grid item md={12}>
                    {/* <Calendar
                        onChange={onChange}
                        value={value}
                    /> */}
                </Grid>
                <div className={"container"} item md={12}>
                    {DATA.map((item) => (
                        <CardItem key={item.id} data={item} />
                    ))}
                </div>
            </Grid>
        </Grid>

    )
}

export default Events
