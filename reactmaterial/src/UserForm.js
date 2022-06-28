// import React, { useState } from "react";
import { Paper, Typography, Grid, Button } from "@mui/material";
import './App.css';
import { Formik, Form } from 'formik';

import { TextfieldWrapper } from './TextFieldWrapper'
import prov from './provinces.json';
import { SelectWrapper } from './SelectWrapper';

export default function UserForm() {

  // const [firstName, setFirstName] = useState("");

  return (
    <div>
      <h1 className="h1">Personal Details</h1>

      <Paper variant="elevation" elevation={10} className={'Paper-root'} >
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            number: '',
            address: '',
            postal: '',
            province: '',
            birthday: '',
            city: '',
            otherNumber: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography className="names">First Name</Typography>
                <TextfieldWrapper name="firstName" className="formP" placeholder="John" />
              </Grid>
              <Grid item xs={4}>
                <Typography className="names">Middle Name</Typography>
                <TextfieldWrapper name="middleName" className="formP" placeholder="Doe" />
              </Grid>
              <Grid item xs={4}>
                <Typography className="names">Last Name</Typography>
                <TextfieldWrapper name="lastName" className="formP" placeholder="Doe" />
              </Grid>

              <Grid item xs={12}>
                <Typography className="names">Email</Typography>
                <TextfieldWrapper
                  className="email"
                  name="email"
                  placeholder="john@acme.com"
                  type="email"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className="names">Number</Typography>
                <TextfieldWrapper
                  className="names"
                  name="number"
                  placeholder="657-233-2333"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className="names">Other Number</Typography>
                <TextfieldWrapper
                  className="names"
                  name="otherNumber"
                  placeholder="657-233-2333"
                  sx={{ width: 470 }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className="names">Date of Birth</Typography>
                <TextfieldWrapper
                  className="names"
                  name="birthday"
                  id="date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className="names">Address</Typography>
                <TextfieldWrapper
                  className="names"
                  name="address"
                  id="address"
                  sx={{
                    width: 470
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography className="names">City or Town</Typography>
                <TextfieldWrapper
                  className="names"
                  name="city"
                  id="city"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography className="names">Postal Code</Typography>
                <TextfieldWrapper
                  className="names"
                  name="postal"
                  id="postal"
                  sx={{

                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography className="names">Province</Typography>
                <SelectWrapper

                  options={prov}
                  className="names"
                  name="province"
                  id="province"
                  sx={{
                    width: 300
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit" sx={{ ml: 60 }}>Submit</Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Paper>
    </div >


  );
}
