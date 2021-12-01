/* Dhrumil Amish Shah */
import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles.js';

const TravelMemoryPost = ({ travelMemoryPost }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const viewDetails = () => {
        navigate(`/post/${travelMemoryPost.post_id}`, { state: travelMemoryPost });
    };

    return (
        <Card className={classes.card}
            elevation={6}
            key={travelMemoryPost.post_id}>
            <CardMedia className={classes.media}
                image={travelMemoryPost.post_image_url} />
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(travelMemoryPost.post_created_at).fromNow()}</Typography>
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {travelMemoryPost.post_name}
                </Typography>
                <Typography variant="body2"
                    color={"textSecondary"}
                    component="p">
                    {`${travelMemoryPost.post_location}`}<br />{`${travelMemoryPost.post_zip_code.toUpperCase()}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    style={{
                        backgroundColor: "#4267B2",
                        color: "#FFFFFF",
                        borderRadius: 12
                    }}
                    variant="contained"
                    size="small"
                    onClick={viewDetails}>
                    View
                </Button>
            </CardActions>
        </Card>
    );
};

export default TravelMemoryPost;