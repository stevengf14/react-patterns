import React, { useState, useEffect } from "react";

export const NormalExample = () => {
  const [students, setStudents] = useState([]);
  const [collegeInfo, setCollegeInfo] = useState({});

  useEffect(() => {
    setStudents([
      {
        name: "Steven",
        lastName: "Guaman",
        gender: "M",
        birthDate: "01-01-2001",
      },
      {
        name: "Andres",
        lastName: "Figueroa",
        gender: "M",
        birthDate: "02-02-2002",
      },
      {
        name: "Nicol",
        lastName: "Atorre",
        gender: "F",
        birthDate: "03-03-2003",
      },
    ]);
    setCollegeInfo({
      name: "Universidad de las Fuerzas Armadas ESPE",
      location: "Ecuador",
      numberOfCareers: 10,
    });
  }, []);

  return students.map((student, i) => (
    <div key={i}>
      <h2>{collegeInfo.name}</h2>
      <p>
        <span>
          <strong>Location: </strong>
          {collegeInfo.location}
        </span>
        <br></br>
        <span>
          <strong>Careers: </strong>
          {collegeInfo.numberOfCareers}
        </span>
      </p>
      <h2>
        {student.name} {student.lastName}
      </h2>
      <p>
        <span>
          <strong>Birth Date: </strong>
          {student.birthDate}
        </span>
        <br></br>
        <span>
          <strong>Gender: </strong>
          {student.gender}
        </span>
      </p>
    </div>
  ));
};
