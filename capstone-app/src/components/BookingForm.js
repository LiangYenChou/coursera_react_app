import React, {useEffect, useState} from "react";
import { useFormik} from "formik";
import * as Yup from 'yup';

import { Box, Button, FormLabel, Heading, Input, VStack, Select, FormControl, FormErrorMessage,} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { fetchAPI, submitAPI } from "../context/mockAPI";
import { useAlertContext } from "../context/alertContext";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";


const updateTimes = (state, action) =>{
    return {date: action.date, availableTimes: fetchAPI(action.date)};
}
const BookingForm = () =>{

    const initialState = {date: "2023-12-06", availableTimes: fetchAPI("2023-12-06")}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    const { isLoading, response, submit } = useSubmit();
    const navigate = useNavigate();
    //const {onOpen} = useAlertContext();


    const formik = useFormik({
        initialValues: {
            date: initialState.date,
            time: "",
            number: 2,
            type: "Birthday",
        },
        onSubmit: (values) => {submit(submitAPI(values))},
        validationSchema: Yup.object().shape({
            date: Yup.date('Invalid Date').required('Required'),
            time: Yup.string().required('Required'),
            number: Yup.number().default(2).moreThan(0,"Please input number greater than 0").lessThan(10, "Please input number no greater than 10").required('Required'),
            type: Yup.string().optional(),
        }),
    });
    console.log(formik.values)


    // useEffect(()=>{
    //     if (response) {
    //         onOpen(response.type, response.message);
    //         if (response.type === 'success'){
    //             formik.resetForm();
    //         }
    //     }
    // },[response]);

    useEffect(()=>{

        if(response){
            navigate("/booking/confirmed");
        }
    },[response]);


    return(
        <FullScreenSection
        isDarkBackground
        backgroundColor="#512DA8"
        py={16}
        spacing={8}
        >
            <VStack w="1024px" p ={32} alignItems="flex-start">
                <Heading as="h1" id="bookingform-section">
                    Reserve a table
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl>
                                <FormLabel>Choose Date</FormLabel>
                                <Select id="date" name="date" {...formik.getFieldProps('date')} onClick={()=> dispatch({date: formik.values.date})} >
                                    <option value="2023-12-06">12/06/2023</option>
                                    <option value="2023-12-07">12/07/2023</option>
                                    <option value="2023-12-08">12/08/2023</option>
                                    <option value="2023-12-09">12/09/2023</option>
                                    <option value="2023-12-10">12/10/2023</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Choose Time</FormLabel>
                                <Select id="time" name="time" {...formik.getFieldProps('time')} >
                                    <option></option>
                                    {state.availableTimes.map((time)=>(
                                        <option value={time}>{time}</option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.number && formik.touched.number}>
                                <FormLabel>Number of Guests</FormLabel>
                                <Input id="number" name="number" {...formik.getFieldProps('number')}/>
                                <FormErrorMessage>{ formik.errors.number}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">Occasion</FormLabel>
                                <Select id="type" name="type" {...formik.getFieldProps('type')}>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="business">Business</option>
                                <option value="leisure">Leisure</option>
                                </Select>
                            </FormControl>

                            <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>Submit</Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default BookingForm;