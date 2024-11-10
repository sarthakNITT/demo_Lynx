// import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import {API_STORE} from '../mobx/API_STORE';
import {API_RESET_PASSWORD_GENERATE_OTP_STUDENTS} from '../utils/API_CONSTANTS'
import {NO_NETWORK} from '../utils/ERROR_MESSAGES';

async function checkNetworkAndFetch(query, type, successCallback, failureCallBack) {
  console.log(`${API_STORE.getBaseUrl}/${API_RESET_PASSWORD_GENERATE_OTP_STUDENTS}`);
  API_CALL(query, type, successCallback, failureCallBack);
  try {
    const checkUrl = `${API_STORE.getBaseUrl()}/${API_RESET_PASSWORD_GENERATE_OTP_STUDENTS}`;
    // Try a simple GET request to verify network connectivity
    await axios.get(checkUrl, { timeout: 3000 });
    console.log("Api call will be accessed now");
    // If the request succeeds, proceed with the actual API call
  } catch (error) {
    // Handle network error or unsuccessful response
    failureCallBack("No network connection or request timed out.");
  }
}

async function API_CALL(query, type, successCallback, failureCallBack) {
  try {
    const response = await axios.post(
      `${API_STORE.getBaseUrl}/${API_SEARCH}`,
      { search: query, type: type },
      { timeout: 5000 }
    );
    console.log(response.data.message);
    successCallback(response.data);
  } catch (error) {
    failureCallBack(error.response?.data?.message || "An error occurred");
  }
}

export const searchApi = (query, type, successCallback, failureCallBack) => {
  checkNetworkAndFetch(query, type, successCallback, failureCallBack);
};


// async function API_CALL(query, type, successCallback, failureCallBack) {
//   try {
//     const response = await axios.post(
//       API_STORE.getBaseUrl + API_SEARCH,
//       {
//         search: query,
//         type: type,
//       },
//       {timeout: 5000},
//     );
//     console.log(response.data.message);
//     successCallback(response.data);
//   } catch (error) {
//     failureCallBack(error.response.data.message);
//   }
// }
// export const searchApi = (query, type, successCallback, failureCallBack) => {
//   //using netinfo to check if online
//   // NetInfo.fetch().then(state => {
//   //   if (state.isConnected === true) {
//   //     API_CALL(query, type, successCallback, failureCallBack);
//   //   } else {
//   //     failureCallBack(NO_NETWORK);
//   //   }
//   // });
// };
