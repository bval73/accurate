import axiosService from '../services/AxiosService';
const { accAxios } = axiosService;

// page by id / pagename
export const fetchPageById = pageName => async dispatch => {
    dispatch({type: 'IS_FETCHING_PAGE'});
    const res = await accAxios.get(`/pages/${pageName}`);
      //send to reducer
    dispatch({
      type: 'FETCH_PAGE_BY_ID',
      pages: res.data
    });
  }

export const createPage = page => {
  //  const token = sessionStorage.getItem('acc-token');
  //avoid 401 page error 
  // moved to AxiosService 
  // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // }
    return accAxios.post('/pages', page);
  }
  