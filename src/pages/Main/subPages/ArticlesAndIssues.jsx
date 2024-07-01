import React, { useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

export default function ArticlesAndIssues() {
    const loadingBarRef = useRef(null);
    useEffect(() => {
        loadingBarRef.current.staticStart();
        setTimeout(() => {
          loadingBarRef.current.complete();
        }, 500);
      }, []);
  return (
    <div>
        <LoadingBar color='#058181' height={3} ref={loadingBarRef} />
        <div>
            Articles and Issues
        </div>
    </div>
  )
}
