import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector('.scroll-tracker');

// const animatedImage = document.querySelector('.animated-image')
const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: 'block', // for horizontal use in-line
  scrollOffsets: [CSS.percent(0), CSS.percent(100)] // range
})

// const animatedImageTimeline = new ScrollTimeline({
//   scrollOffsets: [
//     { target: animatedImage, edge: '10%', threshold: '0'},
//     { target: animatedImage, edge: 'start', threshold: '0'}
//   ]
// })

// animatedImage.animate(
//   {
//     transform: [
//       'perspective(1000px) rotateX(90deg)', 
//       'perspective(1000px) rotate(0)'
//     ]
//   },
//   {
//     duration: 1,
//     timeline: animatedImageTimeline
//   }
// )

scrollTracker.animate(
  {
    transform: ['scaleX(0)', 'scaleX(1)']
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline
  }
)