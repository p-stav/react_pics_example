import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3cf2599080389376f94333be8aa1794de7d027f2d14236c1a0b2d595d80eefef'
  }
});
