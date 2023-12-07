const availableTimesByDate = {
    '2023-11-30': ['10:00', '11:00', '12:00'],
    '2023-12-01': ['10:00', '11:00', '12:00'],
    '2023-12-02': ['14:00', '15:00', '16:00'],
    '2023-12-03': ['10:00', '11:00', '12:00'],
    '2023-12-04': ['14:00', '15:00', '16:00'],
    '2023-12-05': ['10:00', '11:00', '12:00'],
    '2023-12-06': ['14:00', '15:00', '16:00'],
    '2023-12-07': ['10:00', '11:00', '12:00'],
    '2023-12-08': ['14:00', '15:00', '16:00'],
    '2023-12-09': ['10:00', '11:00', '12:00'],
    '2023-12-10': ['14:00', '15:00', '16:00'],
    '2023-12-11': ['10:00', '11:00', '12:00'],
    '2023-12-12': ['14:00', '15:00', '16:00'],
    '2023-12-13': ['10:00', '11:00', '12:00'],
    '2023-12-14': ['14:00', '15:00', '16:00'],
    '2023-12-15': ['10:00', '11:00', '12:00'],
    '2023-12-16': ['14:00', '15:00', '16:00'],
    '2023-12-17': ['10:00', '11:00', '12:00'],
    '2023-12-18': ['14:00', '15:00', '16:00'],
    '2023-12-19': ['10:00', '11:00', '12:00'],
    '2023-12-20': ['14:00', '15:00', '16:00'],
  };


  const fetchAPI = (date) => {
    return availableTimesByDate[date]
    // return new Promise((resolve, reject) => {
    //     setTimeout(() =>{
    //         if(availableTimesByDate[date]){
    //             resolve(availableTimesByDate[date])
    //         }
    //         else{
    //             reject(new Error('No available times for the selected date.'));
    //         }
    //     } , 1000)
    // })
  }

  const submitAPI = (formData) => {
    console.log("R");

    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}