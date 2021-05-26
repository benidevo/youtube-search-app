import axios from 'axios';


const KEY = 'AIzaSyB4PMnx2r4p2MmE5jpyvr0Uq9yd-UrGI7k';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 25,
        key: KEY
    }
});
