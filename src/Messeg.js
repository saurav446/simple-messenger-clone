import React ,{forwardRef } from 'react';
import {   Card, CardContent, Typography} from '@material-ui/core';
import './Message.css'


const Messeg = forwardRef(({username,messege}, ref) => {

     const isUser = username === messege.username;
    return (
        <div ref={ref} className={`messege ${isUser && 'messege_user'}`}> 

            <Card className={isUser ? 'messege__left' : 'messege_right'}>
                <CardContent>
                    <Typography
                    color="white"
                    variant="h5"
                    component="h2"
                    >
                    {!isUser && `${messege.username || 'Unknown User'}: `} {messege.messege}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
});

export default Messeg;