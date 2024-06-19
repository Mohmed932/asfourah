// "use client"
// import React, { useRef, useEffect } from 'react';
// import Hls from 'hls.js';

// const page = () => {
//     const src = ``
//   const videoRef = useRef(null);
//   let hls = null;

//   useEffect(() => {
//     if (Hls.isSupported()) {
//       hls = new Hls();
//       hls.loadSource(src);
//       hls.attachMedia(videoRef.current);
//     } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
//       videoRef.current.src = src;
//     }
    
//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };
//   }, [src]);

//   return (
//     <div>
//       <video ref={videoRef} controls />
//     </div>
//   );
// };

// export default page;
import React from 'react'

const page = () => {
  return (
    <div>
      we will add football video live
    </div>
  )
}

export default page
