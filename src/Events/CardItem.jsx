import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import './CardItem.scss'

class CardItem extends React.Component {

  render() {
    return (
      <div  className={"containerprincipal"} sx={{ maxWidth: 345 }}>
        <div className={"container"}>
          <div className={"containerCard"}>
            <Typography gutterBottom variant="h5" component="div">
              <p className='title'>
                {this.props.data.title}
              </p>
            </Typography>
            <p>{this.props.data.date}</p>
            <p>{this.props.data.location}</p>
            <img className='foto' src={this.props.data.img} alt='' />

            <Typography variant="body2">
              {this.props.data.description}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
