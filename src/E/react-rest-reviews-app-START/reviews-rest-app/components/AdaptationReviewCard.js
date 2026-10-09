// reviews-rest-app/components/AdaptationReviewCard.js
import { Avatar, Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';

export default function AdaptationReviewCard(props) {
  return <Card sx={{ mt: 2 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'blue' }}
          aria-label="recipe" >
          {props.rating}
        </Avatar>
      }
      title={
        <Typography variant="body2"
          color="text.secondary" >
          {props.title}
        </Typography>
      }
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {props.conmment}
      </Typography>
    </CardContent>
  </Card>
}
