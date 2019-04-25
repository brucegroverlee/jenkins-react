export const postRequest = ( url, payload ) => {
  const content = {
    "token": "QpwL5tke4Pnpja7X"
  };

  return new Promise( (resolve, reject) => {
    let status = 200;
    resolve({ status, content });
  });
}
