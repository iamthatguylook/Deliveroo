import createClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const client = createClient({
  projectId: "l36z4jm3",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Run this to add exception to localhost cors policy 3000
//sanity cors add http://localhost:3000

//Every time u make changes to local u have to redeploy
// Using sanity deploy command
//https://deliveroo-api-test.sanity.studio/

//Api query in vision

// *[_type == "featured"]{
//   ...,
//   restaurants[]->{
//     ...,
//     dishes[]->,
//     type->{
//       name
//     }
//   },
// }
export default client;
