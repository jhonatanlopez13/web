import './Gallery.scss';
import * as React from "react";
import Grid from '@material-ui/core/Grid';
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import IMAGES from './ImageList';

class Gallery extends React.Component {

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item md={12} sm={11}>
                    <h1>Galería</h1>
                    <ImageList lg={{ width: 600, height: 500 }} cols={3} rowHeight={164}>
                        {IMAGES.map((item) => (
                            <ImageListItem key={item.id}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid >
        );
    }
}

export default Gallery;