// components/TodoList.js
import { useState } from 'react'; // useState() is a React Hook
import { Box, Button, TextField, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

export default function TodoList() {
    // #region State Management
    // 1) We are using array destructuring syntax to declare
    //    our variables and assign the values.
    // 2) In calling useState(), we supply the initial value
    //    for the todoText that we want to manage.
    const [todoText, setTodoText] = useState("");

    // Our list of all the Todo items will be in an array.
    // We initialize that as an empty array.
    const [allTodos, setAllTodos] = useState([]);
    // #endregion

    // #region Event Handlers
    const onTodoTextChange = (event) => {
        console.log(event.target.value);
        // A) Track the changes in our component state
        setTodoText(event.target.value);
    }

    const onAddTodoClick = () => {
        // Create a new list to replace the old list
        const newAllTodoList = [...allTodos, todoText];
        setAllTodos(newAllTodoList);
        setTodoText(""); // clear the current input
    }
    // #endregion

    return <>
        <TextField id="standard-basic" label="New Todo:" 
            variant="standard" sx={ { width: '100%' } }
            onChange={onTodoTextChange}
            value={todoText}
        />
        <Button variant='contained' onClick={onAddTodoClick} />
        <Grid item xs={12}>
            <List sx={{width: '100%'}}>
                {
                    allTodos.map((item, index) => 
                        <ListItem key={index}>
                            <ListItemText>
                                <Typography variant='p' component='div'>
                                    {item}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </Grid>
    </>
}
