import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


import Data from './Data';
import './Card.css'

export default function RecipeReviewCard() {
  return (
    <div className='card__display'>
   {Data && Data.map((item) => (
    <Card className="card" sx={{ maxWidth: 345 }}>
        <CardHeader className='header'
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {item.b}
            </Avatar>
          }
          titleTypographyProps={{variant:'h4' }}
          title={item.a}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {item.c}
          </Typography>
        </CardContent>
      </Card>
    )
  )}
  </div>)
}
