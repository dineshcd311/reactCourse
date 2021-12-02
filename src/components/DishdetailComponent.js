import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
    function RenderDish({dish})
    {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width={"100%"} src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle><h4>{dish.name}</h4></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        );
    }


    function RenderComments(props)
    {
        
        if(props.comments!=null)
        {
            const final = props.comments.map( (comment) => 
            { 
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}</p> 
                    </li>
                );
            });

            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                       {final}
                    </ul>
                </div>
            );
        }
        return <div></div>
    }

    const DishdetailComponent =(props)=>{
        if(props.selectedDish!=null)
        {
            return(
                <div className='container'>
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.selectedDish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className='row'>
                        <RenderDish dish={props.selectedDish}/>
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
                    
            );
        }
        return <div></div>
    }

export default DishdetailComponent;