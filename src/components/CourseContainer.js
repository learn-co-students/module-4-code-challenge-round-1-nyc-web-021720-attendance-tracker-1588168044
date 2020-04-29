import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {
  state = {
    courses: [],
    targetCourse: [],
  }
  componentDidMount(){
    fetch("http://localhost:6001/courses")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        courses: data,
      })
    })
  }


  handleChange = (course) => {
    this.setState({
      targetCourse: course
    })
  }

  
  render() {

    return (
      
    
      <div className="ui grid container">
         {
        this.state.courses.map(course => <CourseDetails key={course.id} course={course}/>)
      }
      <CourseDetails courses={this.state.targetCourse} />      
      <CourseSelector courses={this.state.courses} handleChange={this.handleChange} />
        <StudentsList />
       
      </div>
    );
  }
}

export default CourseContainer;
