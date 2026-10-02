// components/TodoList.js
import { useState } from 'react'; // useState() is a React Hook
import { Box, Button, TextField, Grid } from '@mui/material';

export default function TodoList() {
    // #region State Management
    // 1) We are using array destructuring syntax to declare
    //    our variables and assign the values.
    // 2) In calling useState(), we supply the initial value
    //    for the todoText that we want to manage.
    const [todoText, setTodoText] = useState("");
    // #endregion

    // #region Event Handlers
    const onTodoTextChange = (event) => {
        console.log(event.target.value);
        // A) Track the changes in our component state
        setTodoText(event.target.value);
    }
    // #endregion

    return <>
        <TextField id="standard-basic" label="New Todo:" 
            variant="standard" sx={ { width: '100%' } }
            onChange={onTodoTextChange}
            value={todoText}
        />
        <Grid item xs={12}>
            Current input text: {todoText}
        </Grid>
    </>
}
