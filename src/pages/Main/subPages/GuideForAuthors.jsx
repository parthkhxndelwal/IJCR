import React, { useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

export default function GuideForAuthors() {
    const loadingBarRef = useRef(null);
    useEffect(() => {
        loadingBarRef.current.staticStart();
        setTimeout(() => {
          loadingBarRef.current.complete();
        }, 500);
      }, []);
  return (<>  
    <LoadingBar color='#058181' height={3} ref={loadingBarRef} />
    <div>Guide For Authors</div>
    </>
  )
}
