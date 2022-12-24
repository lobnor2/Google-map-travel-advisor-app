import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { CssBaseline, Grid } from "@material-ui/core";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      {/* take full 12 on small devices and 4 on medium and larger devices */}
      <Grid
        container
        spacing={3}
        style={{ width: "100%", border: "1px solid red" }}
      >
        <Grid item xs={12} md={4} style={{ border: "1px solid green" }}>
          <List />
        </Grid>
        {/* take full 12 on small devices and 8 spaces for medium and larger devices */}
        <Grid item xs={12} md={8} style={{ border: "1px solid green" }}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
