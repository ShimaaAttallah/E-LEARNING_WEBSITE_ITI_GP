import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const base='http://127.0.0.1:8000/course/rest/generics/';

function Search(){
    let [courses, setCourses] = useState([]);
    const [string]=useParams(); 

    useEffect(()=>{
        try{
        axios.get(base+'/searchcourse/'+string)
        .then((res)=>{
            setCourses(res.data);
            console.log("sss",res.data);
        });
        }catch(error){
        console.log(error);
        }
    },[]);
return(
<div className='container mt-2'>
        <div className="row">
            {courses && courses.map((course,index)=>
            
            <div className="col-md-3">
                <Card style={{ width: "18rem" }} className="me-3 mt-3">
                    <Card.Img
                        variant="top"
                        src={course.course_image}
                        className="rounded course_image mt-2 ms-1"
                        alt={course.course_name}
                    />
                    <Card.Body>
                        <Card.Title>Course Title:{course.course_name}</Card.Title>
                        <NavLink
                            to={`/detail/${course.id}`}
                            className=" btn btn-info me-2 "
                        >
                            {" "}
                            Show Details
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>
            )}
        </div>
        </div>
    )
}
export default Search;