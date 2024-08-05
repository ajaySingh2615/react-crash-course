import React from 'react'
import './styles.css'
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from '@mui/material'
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import { Star, StarBorder } from '@mui/icons-material'

const data = [
  { name: '5', uv: 4000 },
  { name: '9', uv: 3000 },
  // Add all data points here...
]

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  // Add other orders here...
]

const feedback = [
  { name: 'Jenny Wilson', rating: 5, comment: 'The food was excellent and so was the service...' },
  // Add other feedback here...
]

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3}>
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h4">75</Typography>
          </Paper>
        </Grid>
        {/* Add other summary items here */}
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Typography variant="h6">Activity</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Typography variant="h6">Recent Orders</Typography>
            <List>
              {orders.map((order) => (
                <ListItem key={order.orderNo}>
                  <ListItemAvatar>
                    <Avatar src={`path/to/avatar/${order.customer}.jpg`} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={order.customer}
                    secondary={`Order No: ${order.orderNo}, Amount: ${order.amount}`}
                  />
                  <Typography variant="body2">{order.status}</Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Typography variant="h6">Customer's Feedback</Typography>
            <List>
              {feedback.map((item) => (
                <ListItem key={item.name}>
                  <ListItemAvatar>
                    <Avatar>{item.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={item.comment} />
                  <Box>
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <IconButton key={i}>
                          {i < item.rating ? <Star /> : <StarBorder />}
                        </IconButton>
                      ))}
                  </Box>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard
