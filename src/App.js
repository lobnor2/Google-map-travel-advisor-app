import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api/index";

import { CssBaseline, Grid } from "@material-ui/core";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
      });
    }
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      {/* take full 12 on small devices and 4 on medium and larger devices */}
      <Grid
        container
        spacing={3}
        style={{
          width: "100%",
          border: "1px solid red",
          // marginTop: "5px",
        }}
      >
        <Grid item xs={12} md={4} style={{ border: "1px solid green" }}>
          <List places={places} />
        </Grid>
        {/* take full 12 on small devices and 8 spaces for medium and larger devices */}
        <Grid item xs={12} md={8} style={{ border: "1px solid green" }}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
