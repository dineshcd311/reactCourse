import {React, Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class DishdetailComponent extends Component{
    constructor(props){
        super(props)
    }

    renderDish(dish)
    {
        if(dish!=null)
        {
            return(
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width={"100%"} src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle><h4>{dish.name}</h4></CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        <h6>
                            Imagine all the eatables,living in conFusion!<br/><br/>
                            --John Lemon, Oct 17,2012<br/><br/>
                            Sends anyone to heaven, I wish I could get my mother-in-law to eat it!<br/><br/>
                            --Paul McVites, Sep 06,2014<br/><br/>
                            Eat it, just eat it!<br/><br/>
                            --Michael Jaikishan, Feb 14, 2015<br/><br/>
                            Ultimate, Reaching for the stars!<br/><br/>
                            --Ringo Starry, Dec 03, 2013<br/><br/>
                            It's your birthday, we're going party!<br/><br/>
                            --25 Cent, Dec 03, 2011<br/><br/>
                        </h6>
                    </div>
                </div>

            );
        }
        return <div></div>
    }

    render(){
        return(
            <div>
                {this.renderDish(this.props.selectedDish)}
            </div>
                 
        );
    }
}

export default DishdetailComponent;