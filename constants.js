export default {
  API_URL:
    'https://api.themoviedb.org/3/movie/now_playing?api_key=42b3d9a3ed6db45b64f5a001e38929cd&language=en-US&page=1',
  IMAGES_URL: 'http://movieseries.kukaria.com/wp-content/uploads/2020/02/',
  HOME_IMAGE:
    'https://res.cloudinary.com/demo/image/fetch/w_300,h_300,c_fill,g_face,r_max,f_auto/https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png',
  SCREENS: {
    MOVIES_LIST: 'MoviesList',
    MOVIE: 'Movie',
    HOME: 'Home',
  },
  MOVIES_LIST_HEADER_PROPPERTIES:{
    title: 'Movies',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  MOVIES_DETAILS_HEADER_PROPPERTIES:{
    title: 'Movie Details',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
};
