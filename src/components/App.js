import React from "react";

import Title from "./Title";
import CourseContainer from "./CourseContainer";

class App extends React.Component{


  render(){
    return(
       <div className="ui raised segment">
       <Title />
       <CourseContainer />
       </div>
    )
}
    
  }

  


export default App;
