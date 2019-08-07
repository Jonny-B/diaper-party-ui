import {Typography, Button, Grid} from "@material-ui/core";
import React from "react";
import {withStyles} from "@material-ui/core/styles";

const GetUsers = (props) => {
    return (
        <div className="body" id={"getUsers"}>
            <header className="App-header" id={"appHeader"}>
                <Grid container justify={"center"} alignItems={"center"} direction={'column'} className={props.classes.grid}>
                    <Grid item xs={12}>
                        <Typography className={props.classes.greeting} variant={'h3'}>Jon's Diaper Party</Typography>
                    </Grid>
                    <Grid item xs={12} variant={'h4'}>
                        <Typography className={props.classes.greeting}>To help us know how much food to buy</Typography>
                    </Grid>
                    <Grid item xs={12} varient={'h5'}>
                        <Typography className={props.classes.greeting}>Select how many you want</Typography>
                    </Grid>

                    <Grid item xs={12} className={props.classes.item}>
                        <Button onClick={() => {
                            props.handleClick('hotdog', 'subtract/hotdog')
                        }} className={props.classes.button} id={'subtract/hotdog'}>-</Button>
                        <Typography className={props.classes.food}>Hot Dog</Typography>
                        <Button onClick={() => {
                            props.handleClick('hotdog', 'add/hotdog')
                        }} className={props.classes.button} id={'add/hotdog'}>+</Button>
                        <Typography className={props.classes.gridItem}>{props.hotdog}</Typography>
                    </Grid>

                    <Grid item xs={12} className={props.classes.item}>
                        <Button onClick={() => {
                            props.handleClick('burger', 'subtract/burger')
                        }} className={props.classes.button} id={'subtract/burger'}>-</Button>
                        <Typography className={props.classes.food}>Not Hotdog (aka Burger)</Typography>
                        <Button onClick={() => {
                            props.handleClick('burger', 'add/burger')
                        }} className={props.classes.button} id={'add/burger'}>+</Button>
                        <Typography className={props.classes.gridItem}>{props.burger}</Typography>
                    </Grid>
                </Grid>
            </header>
        </div>
    )
};

const styles = {
    body: {
        backgroundColor: '#282c34'
    },
    button: {
        backgroundColor: 'lightblue',
        marginLeft: '15px',
        marginRight: '15px',
        float: 'left'
    },
    grid: {
        margin: '8x',
        textAlign: 'center'
    },
    gridItem: {
        float: 'left'
    },
    food: {
        float: 'left',
        width: '100px'
    },
    item: {
        margin: '8px'
    }
};

export default withStyles(styles)(GetUsers)
