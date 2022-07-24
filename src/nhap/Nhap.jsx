import React, { useReducer, useState } from "react";

//initStital State
const initialState = {
  job: "",
  jobList: [],
};

// actions
const SET_JOB = "SET_JOB";
const SET_JOBLIST = "SET_JOBLIST";

// action creator
const setJob = (payload) => ({ type: SET_JOB, payload });
const setJobList = (payload) => ({ type: SET_JOBLIST, payload });

// reduders
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      let newState = { ...state, job: action.payload };
      return newState;
    case SET_JOBLIST:
      let newState2 = { ...state, jobList: [...state.jobList, action.payload] };
      return newState2;
    default:
      return state;
  }
};

//dispatch

export default function Nhap() {
  // const [job, setJob] = useState("");
  // const [jobList, setJobList] = useState([]);
  //     const [state, dispatch] = useReducer(reducer, initialState);
  //     const {job, jobList} = state;

  //     const handleInputChange = (e) => {
  //         dispatch(setJob(e.target.value))
  //     }

  //     const handleAdd = () => {
  //         dispatch(setJobList(job))
  //     }

  //   return (
  //     <div>
  //         <input type="text" value={job} onChange={handleInputChange}/>
  //         <button onClick={handleAdd}>Add</button>
  //         <ul>
  //             {jobList.map(item =>  <li>{item}</li>)}

  //         </ul>
  //     </div>

  const [values, setValues] = useState({
    email: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleErrors = (e) => {
    e.preventDefault();
    if (values.email === "") {
      setErrors({
        ...errors,
        email: "Trường này không được để trống",
      });
    } else {
      setErrors({
        ...errors,
        email: "",
      });
    }

    if (values.name === "") {
      setErrors({
        ...errors,
        name: "Trường này không được để trống",
      });
    } else {
      setErrors({
        ...errors,
        name: "",
      });
    }
  };

  return (
    <div style={{ marginLeft: "80px" }}>
      <form action=""onSubmit ={handleErrors}>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <div>{errors.email}</div>
        </div>
        <div>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <div>{errors.name}</div>
        </div>
        <button type="button" >
          Submit
        </button>
      </form>
    </div>
  );
}
