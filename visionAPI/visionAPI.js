// start API call to google vision
async function foodDetect() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Create a client
  const client = new vision.ImageAnnotatorClient();

  // Run the food detection
  const [result] = await client.labelDetection('./coffee.jpeg');
  const labels = result.labelAnnotations;
  console.log(labels);
  return labels;
}

foodDetect().catch(console.error);