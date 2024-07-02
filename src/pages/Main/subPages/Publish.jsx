import React, { useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

export default function Publish() {
  const loadingBarRef = useRef(null);

  useEffect(() => {
    loadingBarRef.current.staticStart();
    setTimeout(() => {
      loadingBarRef.current.complete();
    }, 500); // Adjust the timeout as necessary to simulate loading time
  }, []);

  return (
    <div>
      <LoadingBar color='#058181' height={3} ref={loadingBarRef} />
      <div>
        Publish
      </div>
    </div>
  );
}
