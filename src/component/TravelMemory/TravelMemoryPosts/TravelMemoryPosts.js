/* Dhrumil Amish Shah */
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import TravelMemoryPost from './TravelMemoryPost/TravelMemoryPost';
import useStyles from './styles.js';

const TravelMemoryPosts = ({ travelMemoryPosts }) => {
    const classes = useStyles();

    return (
        !travelMemoryPosts.length ?
            <CircularProgress className={classes.circularProgress} /> :
            (<Grid className={classes.container}
                container alignItems="stretch"
                spacing={3}>
                {travelMemoryPosts.map((travelMemoryPost) => {
                    if (travelMemoryPost.post_display) {
                        return <Grid item xs={12} sm={6} md={4}>
                            <React.Fragment key={travelMemoryPost.post_id}>
                                <TravelMemoryPost travelMemoryPost={travelMemoryPost} />
                            </React.Fragment>
                        </Grid>
                    } else {
                        return null;
                    }
                })}
            </Grid>)
    );
}

export default TravelMemoryPosts;