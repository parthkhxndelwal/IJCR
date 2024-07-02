import React, { useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

export default function EditorialTeam() {
    const loadingBarRef = useRef(null);
    useEffect(() => {
        loadingBarRef.current.staticStart();
        setTimeout(() => {
          loadingBarRef.current.complete();
        }, 500);
      }, []);
  return (
  <>  
    <LoadingBar color='#058181' height={3} ref={loadingBarRef} />
    <div className='EditorialTeam'>
      <div className="EditorInChief">
        <h1>Editor in Chief</h1>
        <h3><a href="">Dr. Monika Yadav</a></h3>
      </div>
      <div className="AssociateEditors">
        <h1>Associate Editors</h1>
        <h3><a href="">Dr. Anshika Prakash</a></h3>
        <h3><a href="">Dr. Ajhar Hussain</a></h3>
      </div>
      <div className="ManagingEditor">
        <h1>Managing Editor</h1>
        <h3><a href="">Mr. Nitish Kumar Minz</a></h3>
      </div>
      <div className='EditorialBoard'>
        <h1>Editorial Board</h1>
        <table>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Linkedin ID</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Dr. Amit Mittal</td>
            <td>Pro Vice-Chancellor (Research Programs), Chitkara University	</td>
            <td><a href="https://www.linkedin.com/in/dramitmittal">Amit Mittal ↗</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dr. Richa Nangla</td>
            <td>Associate Professor, School of Business, Sushant University	</td>
            <td><a href="https://www.linkedin.com/in/dr-richa-nangia-82968524">Richa Nangia ↗</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dr. Swati Shrivastava</td>
            <td>Associate Professor, School of Business, Sushant University</td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Dr. Shivani Kampani</td>
            <td>Assistant Professor, G.D. Goenka University</td>
            <td><a href="https://www.linkedin.com/in/dr-shivani-kampani-01b230240">Dr. Shivani Kampani ↗</a></td>
          </tr>
        </table>
      </div>
    </div>
  </>
  )
}
