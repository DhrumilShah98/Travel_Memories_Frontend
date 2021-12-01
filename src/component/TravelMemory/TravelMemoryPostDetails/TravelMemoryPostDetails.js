import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import { Container, Grow, Grid, TextField, withWidth } from "@material-ui/core";
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';
import moment from 'moment';
import dummyTravelMemoryPosts from '../TravelMemoryHome/dummyTravelMemoryPosts';
import { useLocation } from "react-router-dom";
import useStyles from './styles';
import { display } from "@mui/system";

const TravelMemoryPostDetails = () => {
    const classes = useStyles();
    const location = useLocation();
    const travelMemoryPost = location.state;
    console.log(travelMemoryPost);
    const [travelMemoryPosts, setTravelMemoryPosts] = useState(dummyTravelMemoryPosts);

    return (
        <Grow in>
            <Container style={{ marginTop: 20 }}>
                <Grid item xs={12} sm={6} md={4} style={{ maxWidth: "100%" }}>
                    <React.Fragment key={travelMemoryPost.post_id}>
                        <div className="mainCommentBox" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card className={classes.card}
                                elevation={6}
                                key={travelMemoryPost.post_id}>
                                <CardMedia className={classes.media}
                                    image={travelMemoryPost.post_image_url} />
                                <div className={classes.overlay}>
                                    <Typography variant="body2">{moment(travelMemoryPost.post_created_at).fromNow()}</Typography>
                                </div>
                            </Card>
                            <div className="commentBox" style={{ width: "800px", marginLeft: "50px" }}>
                                <h1>Comments</h1>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    id="commentBox"
                                    type="text"
                                    name="commentBox"
                                    label="Add your comments here..."
                                    variant="outlined"
                                    autoComplete="off"
                                />
                                <Button
                                    style={{
                                        backgroundColor: "#4267B2",
                                        color: "#FFFFFF",
                                        borderRadius: 12
                                    }}
                                    variant="contained"
                                    size="small">
                                    Add
                                </Button>
                            </div>
                        </div>
                        <div className="postBox" style= {{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                            <div style= {{ width: "60%", display: "flex", justifyContent: "space-between" }}>
                                <Typography gutterBottom variant="h5" component="div" style= {{fontWeight: "bold"}}>
                                    {travelMemoryPost.post_name}
                                </Typography>
                            </div>
                            <div className="commentBox" style={{ width: "800px", marginLeft: "200px", display: "flex"}}>
                                <Typography component="h6" style={{fontWeight: "bold"}}>Ratings</Typography>
                                <Rating
                                    name="simple-controlled"
                                />
                            </div>
                        </div>
                        <Typography component="p" style= {{ width: "70%", display: "flex", justifyContent: "center" }}>
                            {travelMemoryPost.post_description}
                        </Typography>
                        <Typography 
                            color={"textSecondary"}
                            component="p">
                            {`${travelMemoryPost.post_location}`}<br />{`${travelMemoryPost.post_zip_code.toUpperCase()}`}
                        </Typography>
                    </React.Fragment>
                </Grid>
            </Container>
        </Grow >
    );
};

export default TravelMemoryPostDetails;
