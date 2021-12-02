import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish:null
        };
    }


    render() {

        const Homepage = ()=>{
            return(
                <Home/>
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
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
      );
    }
}

export default Main;
