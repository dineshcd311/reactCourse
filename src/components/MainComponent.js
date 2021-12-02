import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders : LEADERS,
            selectedDish:null
        };
    }


    render() {

        const Homepage = ()=>{
            return(
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

      return (
        // <div className="container">
        //     <div className="row">
        //         <Menu dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)} />
        //         <DishdetailComponent  selectedDish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/>
        //     </div>
        // </div>
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={Homepage}/>
                <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />}/>
                <Route exact path="/contactus" component={Contact}/>
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
      );
    }
}

export default Main;
