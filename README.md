# Evaluation

Welcome to the Evaluation project. It has been tested with Node 13.

You can install and start the application in development mode by running:

```sh
make watch
```

If it does not work, you can run in each folder (`frontend`, `backend`) the following commands:

```sh
npm install
npm run watch
```

Some tips:

- The backend is using GraphQL. It uses a types generator that should provide you useful
  hints to fix your implementations. If you need to declare some internal models you want
  to use in your application, you can use the `mappers` dictionary in `backend/codegen.yml`.
- We use the composition API with Vue-Apollo. The documentation can be hard to find, it's located
  in https://v4.apollo.vuejs.org/.

## Instructions

This app is displaying images using an online generation service called [Picsum](https://picsum.photos/).
Image ids are referring to Picsum seeds.

If the image id is `image_1`, the Picsum URL is https://picsum.photos/seed/image_1/1200/600. Images have
a 1200x600 resolution.

You have three missions:

1. Enable a way to browse through images using previous/next buttons. Currently, the application only
   allows to view a single image. It would be convenient to be able to view multiple ones. *You can
   hardcode a list of seeds (IDs) in your backend.*

2. Enable a way to display annotations on images (identified by their `image_id`), including their `label`
   next to the shape. We have a single-endpoint API located in
   https://htest.blob.core.windows.net/public/annotations.json
   - The `points` is a list of points defining a polygon;
   - The annotations coordinates are relative to the top-left corner of the image (`{ x: 0, y: 0 }` is the
     top-left corner, `{ x: 1200, y: 600 }` is the bottom right corner on a 1200x600 image);
   - The annotations are related to two images: the two first annotations `annotation_1` and `annotation_2`
     appear on to the image `image_1` and the third annotation `annotation_3` appears on the image `image_2`.

3. Add an image preloading feature to preload the next image before the user browse to the next image.

You can update this codebase and publish it to a public GitHub repository (to be removed after evaluation).
Any question can be answered in a text file if time is missing.

This exercise should be considered as a starting point for the debriefing discussion.
