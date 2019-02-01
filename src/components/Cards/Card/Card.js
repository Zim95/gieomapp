import React from 'react';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
const card = (props) => {
    return (
        <div className="Card">
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/S8hFKxgLlixoy3awo/videoblocks-beer-is-pouring-into-a-glass-on-black-background-slow-motion_hak_8h9cx_thumbnail-full01.png) bottom right 15% no-repeat #46B6AC'}}>{props.name}</CardTitle>
                <CardText>
                    <ul style={{"textAlign":"left"}}>
                        <li><strong>IBU(International Bittering Units):</strong>{props.ibu == ""? "NA": props.ibu}</li>
                        <li><strong>ABV(Alcoholic Content):</strong>{props.abv == ""? "NA": props.abv}</li>
                        <li><strong>Style:</strong>{props.style == ""? "NA": props.style}</li>
                        <li><strong>Ounces:</strong>{props.ounces == ""? "NA": props.ounces}</li>
                    </ul>
                </CardText>
                <CardActions border style={{"alignItems":"center"}}>
                    <Button colored onClick={()=> props.click(props.id)}>Add To Cart</Button>
                </CardActions>
            </Card>
        </div>
        
    );
};

export default card;