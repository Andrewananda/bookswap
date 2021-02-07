import {BASE_URL} from './constants';

export function handleApi(
  endpoint,
  method,
  params,
  successCallBack,
  errorCallBack,
) {
  const headers = {
    method: 'POST',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const url = BASE_URL + endpoint;

  fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(params),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return successCallBack(responseJson);
    })
    .catch(function (error) {
      return errorCallBack(error);
    });
}
