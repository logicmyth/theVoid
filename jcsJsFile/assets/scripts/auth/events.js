
'use strict';

const paper = require('paper');

// variable to hold chosen palette color
// let pixelColor;
//
// // variable to hold exported svg
// let content;
//
// const drawGridRects = function(gridWidth, gridHeight, canvasSize) {
//   let widthPixels = canvasSize.width / gridWidth;
//   let heightPixels = canvasSize.height / gridHeight;
//   for (let i = 0; i < gridWidth; i++) {
//     for (let j = 0; j < gridHeight; j++) {
//       let paperPixel = new paper.Path.Circle(canvasSize.left + (i + 0.5) * widthPixels,
//                                              canvasSize.top + (j + 0.5) * heightPixels,
//                                              widthPixels/2);
//       paperPixel.strokeColor = '#cccccc';
//       paperPixel.fillColor = 'white';
//     }
//   }
// };
//
const onPaperSetup = () => {

  // Create empty project and view for the canvas:
  paper.setup('pillars');

//var pathTop = new Path.Rectangle([110, 40], [150, 10])
 var path = new Path.Rectangle([105, 35], [150, 85]);
 path.strokeColor = 'black'
 path.splitAt(100, 50)
}

//animated circle color change
//Path.Circle({
//   center: view.center,
//   radius: 70,
//   fillColor: 'red'
// })

  // // set canvas to 256 x 256 pixels
  // let canvasDimension = 256;
  // paper.view.viewSize = (canvasDimension, canvasDimension);
  //
  // // creates the grid
  // drawGridRects(16, 16, paper.view.bounds);
  //
  // // function to change fillColor of drawing canvas items
  // paper.view.onClick = function(event) {
  //   if (!pixelColor) {
  //     return;
  //   }
  //   let i = paper.project.hitTest(event.point).item.index;
  //   paper.project.activeLayer.children[i].fillColor = pixelColor;
  // };
//
//  paper.view.onFrame = function(event) {
// 	// Each frame, change the fill color of the path slightly by
// 	// adding 1 to its hue:
// 	path.fillColor.hue += 1;
//   console.console.log('papper');
// }
//   // draws the view
// view.onFrame = function(event) {
// 	// Each frame, change the fill color of the path slightly by
// 	// adding 1 to its hue:
// 	path.fillColor.hue += 1;
// }
//   //paper.view.draw();
// }

// };
//
// const onGetPaletteColor = function(event) {
//   pixelColor = $(event.target).css('background-color');
// };
//
// const onMoveToCanvas = (event) => {
//   event.preventDefault();
//
//   let id = $(event.target).data('id');
//   let content = $(`#feed-canvas-${id}`).data('content');
//   paper.projects[0].importJSON(content);
//   $('#pillars').data('id', id);
//   $('#pillars').data('content', content);
// };
//
// const onClearDrawing = (event) => {
//   event.preventDefault();
//
//   paper.project.clear();
//   drawGridRects(16, 16, paper.view.bounds);
// };
//
// const onGetAllPosts = (event) => {
//   event.preventDefault();
//
//   api.indexPosts()
//     .done(ui.displayPosts)
//     .fail(ui.failure);
// };
//
// const onGetSinglePost = (event) => {
//   event.preventDefault();
//
//   let title = getFormFields(event.target).title;
//   let id = $(`.title:contains(${title})`).data('id');
//
//   api.showPost(id)
//     .done(ui.displayPosts)
//     .fail(ui.failure);
// };
//
// const onCreatePost = function(event) {
//   event.preventDefault();
//
//   let title = getFormFields(event.target).title;
//   content = paper.project.exportJSON({asString: true});
//
//   let data = {
//     "post": {
//       "title": title,
//       "content": content
//     }
//   };
//
//   api.createPost(data)
//     .then(ui.success)
//     .then(api.indexPosts)
//     .then(ui.displayPosts)
//     .catch(ui.failure);
// };
//
// const onUpdatePost = (event) => {
//   event.preventDefault();
//
//   let id = $('#pillars').data('id');
//   let content = paper.project.exportJSON({asString: true});
//
//   let data = {
//     "post": {
//       "content": content
//     }
//   };
//
//   api.updatePost(id, data)
//     .then(ui.success)
//     .then(api.indexPosts)
//     .then(ui.displayPosts)
//     .catch(ui.failure);
// };
//
// const onDeletePost = (event) => {
//   event.preventDefault();
//
//   let id = $(event.target).data('id');
//
//   api.deletePost(id)
//     .done(ui.deleteSuccess(id))
//     .fail(ui.failure);
// };






const addHandlers = () => {
   onPaperSetup();
  // onFrame();
  // $('.palette-item').on('click', onGetPaletteColor);
  // $(document).on('click', '.move-to-canvas', onMoveToCanvas);
  // $('.clear-drawing').on('click', onClearDrawing);
  // $('.get-posts').on('click', onGetAllPosts);
  // $('.get-single-post').on('submit', onGetSinglePost);
  // $('.create-post').on('submit', onCreatePost);
  // $('.update-post').on('click', onUpdatePost);
  // onFrame();
};

module.exports = {
  addHandlers
}
