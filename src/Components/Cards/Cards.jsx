import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return "loading...";
  }

  return (
    <div>
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>

              <Typography variant="h5">
                <Countup
                  start={0}
                  end={confirmed.value}
                  duration={4.5}
                  separator=","
                />
              </Typography>
              <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Numebr of active cases of COVID-19
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>

              <Typography variant="h5">
                <Countup
                  start={0}
                  end={recovered.value}
                  duration={4.5}
                  separator=","
                />
              </Typography>
              <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Numebr of recoveries from of COVID-19
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                deaths
              </Typography>

              <Typography variant="h5">
                <Countup
                  start={0}
                  end={deaths.value}
                  duration={4.5}
                  separator=","
                />
              </Typography>
              <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Numebr of death from COVID-19
              </Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Active Cases
              </Typography>

              <Typography variant="h5">
                <Countup
                  start={0}
                  end={confirmed.value - (recovered.value + deaths.value)}
                  duration={4.5}
                  separator=","
                />
              </Typography>
              <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Numebr of death from COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Cards;
