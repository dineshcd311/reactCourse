import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label, Col} from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Link } from 'react-router-dom';

    const maxLength = (len) => (val)=> !(val) || (val.length <= len) ;
    const minLength = (len) => (val)=> (val) && (val.length >= len) ;

    class CommentForm extends React.Component
    {
        constructor(props)
        {
            super(props);
            this.state = {
                isCommentOpen: false
            }
            this.commentToggler = this.commentToggler.bind(this);
            this.show = this.show.bind(this);
        }

        commentToggler(){
            this.setState({isCommentOpen:!this.state.isCommentOpen});
            console.log(this.state.isCommentOpen);
        }

        show(values)
        {
            alert(JSON.stringify(values));
            this.commentToggler();
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        }

        render(){
            return(
                <div>
                    <Button outline onClick={this.commentToggler}>
                        <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                    </Button>
                    <Modal isOpen={this.state.isCommentOpen} toggle={this.commentToggler}>
                        <ModalHeader toggle={this.commentToggler}>
                            Submit Comment
                        </ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={this.show}>
                                <Row className="form-group">
                                    <Col m={1}>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col  m={1}>
                                        <Label htmlFor="yourname">Your Name</Label>
                                        <Control.text model=".author" id="yourname" name="yourname"
                                        className="form-control"
                                        validators={{
                                            minLength:minLength(3), maxLength:maxLength(15)
                                        }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={
                                                {
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col m={2}>
                                        <Label htmlFor="yourcomment">Comment</Label>
                                        <Control.textarea model=".comment" id="yourcomment" name="yourcomment"
                                        className="form-control" rows="7"
                                        />
                                    </Col>
                                </Row>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
    }


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
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p> 
                    </li>
                );
            });

            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                       {final}
                    </ul>
                    <CommentForm dishId={props.dishId} addComment={props.addComment}/>
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
                        <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.selectedDish.id}/>
                    </div>
                </div>
                    
            );
        }
        return <div></div>
    }

export default DishdetailComponent;