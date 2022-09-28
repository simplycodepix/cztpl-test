# Theme information

## The documentation is available online here:
https://cartzilla.createx.studio/docs/dev-setup.html
OR
**Offline**: inside Cartzilla/dist/docs

## Theme Installation Steps:
1. Install Node.js and Npm (Node Package Manager)
https://nodejs.org/en/
2. Run `npm install` in your terminal to install all project dependencies
3. After the installation is completed run `gulp` to launch the project. It should automatically opens Finder homepage in your browser (http://localhost:3000/)

**For more details see the documentation that comes with the theme.**

# Application information

While this theme is created with pug, the target app is nextjs, the final template is still under development as it will be aligned with our style guide. MOreover the target template will be delivered with 
react components instead of a pug tpl. This repo is just for finding the right partner in this process.

## Api information

1. product content can be found at: GET https://erati.acc.frtn.nl/api/v1/product/18200
2. Multiple products at: GET https://erati.acc.frtn.nl/api/v1/products/18200,18201
3. Productgroups at GET https://erati.acc.frtn.nl/api/v1/productgroup/642

### Additional info
In order to get a full SSG site more endpoints exist. There are endpoints for account, cart and order management. All pages can be generated through identifier endpoints, this is however out of scope of 
this assignment. 

## Image information
See src/components/image.tsx to see how product data results in a imagekit.io image

## Assignemnt
Build either the product or the productgroup page from the available API and the included template.