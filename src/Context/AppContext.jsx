        import React, { createContext, useState } from 'react'
        import { useEffect } from 'react';

        export const AppContext = createContext();

        export const AppProvider = ({children}) => {

            const [student, setStudent] = useState([]);
            const [teacher, setTeacher] = useState([]);

            // setStudent({
            //     name: 'John Doe',
            //     age: 25
            // })

            useEffect(() => {
              setStudent({
                name: 'John Doe',
                age: 5,
                className: 'Hibiscus',
              });
              setTeacher({
                name: 'Jane Smith',
                age: 33,
               subjects: ['Math', 'Science', 'English'],
               className: 'Juniper',
              });
            },[])
         
            const data = { student, setStudent, teacher , setTeacher}


          return (
            <AppContext.Provider  value={data} >
                {children}
            </AppContext.Provider>
          )
        }

