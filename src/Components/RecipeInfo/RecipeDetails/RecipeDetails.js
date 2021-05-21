import React,{ useEffect,useState} from 'react';
import { RemoveRecipe } from "../../../Store/Actions/index";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {Paper,CardContent,Typography,Button}from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  
  
  content: {
    flex: '1 0 auto',
  },
  
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  but: {
    '& > *': {
      margin: theme.spacing(1),
    },
    textAlign:'right',
    marginTop:'2rem'
  },
  ingg:{
    '& > *': {
      margin: theme.spacing(1),
    },
    marginTop:'1rem'
  },
  ingg2:{
    padding:'1rem',
    marginTop:'1rem'
  }
}));

const RecipeDetails = (props) =>{
  const classes = useStyles();

  const [state, setstate] = useState({
    id:'',
    dish:"",
    image:"",
    ingredientsArray:[],
    chef:"",
    date:"",
    description:"",

  });

  useEffect(() => {
   if(props.recipy){
      setstate({...props.recipy})
    }
  }, [props]);


  const DeleteHandler= ()=>{
    props.RemoveRecipe(state.id)
    props.history.push('/')
  }

  const random = () => Math.floor(Math.random()*3);
  const badgeColor = [ 'primary', 'secondary', 'default'];
  const badgeVarient = [ 'outlined', 'contained', 'text'];
  const ingredientBadges = state.ingredientsArray.map( ingredient => (
    <Button key={ingredient} variant={badgeVarient[random()]} color={badgeColor[random()]}>{ingredient}</Button>
  ) );

  return (

        <CardContent className={classes.content}>
          <Typography component="h3" variant="h3">{state.dish}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{state.chef}</Typography>
          <Typography variant="subtitle2" color="textSecondary">{state.date}</Typography>
          <br/>
          <Typography variant="body1" color="textSecondary">
             {state.description}
          </Typography>

          <Paper elevation={3} className={classes.ingg2}>
            <Typography component="h4" variant="h4">
                <span role='img'>🥗</span>
                Ingredients
                <div className={classes.ingg}>
                  
                {ingredientBadges}               

                </div>
            </Typography>
              
          </Paper>
          <div className={classes.but}>
              <Button variant="contained" onClick={()=>props.history.push(`${props.match.url}/edit`)}>Edit</Button>
              <Button onClick={DeleteHandler} variant="contained" color="primary">Delete</Button>
              <Button         
                 onClick={()=>props.history.goBack()}
                 variant="contained"  
                 color="secondary">Back
              </Button>
          </div>
          
        
        </CardContent>
        
      
  );
}

const mapStateToProps= state =>{
  return{
    recipy:state.RecipeReducer.activerecipe
  }
  
}

const mapDispatchToProps=({
  RemoveRecipe
})


export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
