import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient({
//   projectId:"jkpni7xa",
//   dataset: 'production',
//   apiVersion: '2022-10-24',
//   useCdn: true,
//   token: 'skALrLN8WAFxuwnzGcJfFTiA8SJApgrULJS5MFmSY7sgbz7OJUq1GGFpDIFnhn8I20Xm28zGUurGWK9JFYJpbQ3JT69f7DQ0FsU37MBZ8Wwy5LvvlGCGSiC5ivny9vxpQPewHe0MKRAA5PiGK6amPEvJ8P4j9rLb5ugtYrGCLzO3S7EPZUSq',
// });
export const client = sanityClient({
  projectId:"jkpni7xa",
  dataset: 'production',
  apiVersion: '2022-10-24',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN ,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);