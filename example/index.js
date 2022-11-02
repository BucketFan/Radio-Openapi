const client = require("@bucketfan/radio-api-client");

const main = async () => {
  const api = new client.DefaultApi({
    basePath: process.env.API_URL,
    middleware: [],
  });
  const res = await api.getHealthcheck();
  console.log(res);
};

try {
  main();
} catch (e) {
  console.log(e);
}
