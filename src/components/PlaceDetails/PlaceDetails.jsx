import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles.js";

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();
  console.log(place);
  // console.log("place details");

  if (selected)
    refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start" });
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        title={place.title}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography component="legend">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Typography>Price</Typography>
          <Typography>{place.price_level}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography>Ranking</Typography>
          <Typography>{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={1}
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle1" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {/* cuisine and below are deprecated by rapidapi */}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} label={name} size="small" className={classes.chip} />
        ))}
        {place?.address && (
          <Typography guterBottom color="textSecondary">
            {" "}
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography>
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}
        {/* {place?.rating && (
          <Box display="flex" justifyContent="space-between">
            <Typography>Rating</Typography>
            <Box display="flex" alignItems="center">
              <Rating value={place.rating} />
              {place.rating}
            </Box>
          </Box>
        )} */}
      </CardContent>
      {/* website and url are deprecated  */}
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          TripAdvisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
