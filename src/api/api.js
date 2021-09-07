import axios from 'axios';

export const getCarousel = ()=>{
    return axios.get('/index/carousel/table');
}
export const getHonor = ()=>{
    return axios.get('/index/honor/table');
}
export const getNews = ()=>{
    return axios.get('/index/news/table');
}
export const getNewsDetail = ()=>{
    return axios.get('/index/news/table/in');
}
export const getProject = ()=>{
    return axios.get('/index/project/table')
}