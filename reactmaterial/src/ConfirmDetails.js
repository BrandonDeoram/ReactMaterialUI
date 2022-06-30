import React from "react";
import { Paper, Typography, Grid, Button } from "@mui/material";
import { Container } from "@mui/system";
export function ConfirmDetails(props) {
    const { data } = props;
    const { firstName,
        lastName,
        middleName,
        email,
        number,
        address,
        postal,
        province,
        birthday,
        city,
        otherNumber, } = data;
    const handleSubmit = () => {
        console.log(data);
    }
    return <div>

        <h1 className="h1">Confirm Details</h1>
        <Paper variant="elevation" className="Paper-root">
            <Container>
                <Grid className="grid-details" container spacing={3} justify="space-around" alignItems="stretch">

                    <Grid item xs={4} container direction="column">
                        <h2 className="h2">First Name</h2>
                        <Typography className="detailsAnswers">{firstName}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className="h2">Middle Name</h2>
                        <Typography className="detailsAnswers">{middleName}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className="h2">Last Name</h2>
                        <Typography className="detailsAnswers"  >{lastName}</Typography>
                    </Grid>
                    <Grid item xs={4} container direction="column">
                        <h2 className="h2">Email</h2>
                        <Typography className="detailsAnswers">{email}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className="h2">Birthday</h2>
                        <Typography className="detailsAnswers"  >{birthday}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className="h2">Number</h2>
                        <Typography className="detailsAnswers">{number}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className="h2">Other Number</h2>
                        <Typography className="detailsAnswers"  >{otherNumber}</Typography>
                    </Grid>
                    <Grid item xs={4} container direction="column">
                        <h2 className="h2">Address</h2>
                        <Typography className="detailsAnswers">{address}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className="h2">Postal Code</h2>
                        <Typography className="detailsAnswers">{postal}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className="h2">Province</h2>
                        <Typography className="detailsAnswers"  >{province}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className="h2">City</h2>
                        <Typography className="detailsAnswers"  >{city}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Button variant="raised" onClick={handleSubmit} className="submit">Submit</Button>
                    </Grid>
                </Grid>
            </Container>

        </Paper>
    </div >
};