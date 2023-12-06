import React, {useEffect} from "react";
import { useFormik} from "formik";
import * as Yup from 'yup';

import { Box, Button, FormLabel, Heading, Input, VStack, Select, FormControl, FormErrorMessage,} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext"

import { useReducer } from "react";

const availableDateandTime = {
    "12-05-2023": ["17:00","17:30","18:00","18:30","19:00","19:30","20:00"],
    "12-06-2023": ["11:00","11:30","12:00","12:30","13:00","13:30","14:00"],
};

const updateTimes = (state, action) =>{
    if (action.type === 'UPDATE') return( {availableTimes: ["11:00","11:30","12:00","12:30","13:00","13:30","14:00"]} );
    return state;
}
const BookingForm = () =>{

    const initialState = {availableTimes: ["17:00","17:30","18:00","18:30","19:00","19:30","20:00"]};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    const { isLoading, response, submit } = useSubmit();
    const {onOpen} = useAlertContext();
    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            number: 2,
            type: "",
        },
        onSubmit: (values) => {submit("https://example.com/contactme", values)},
        validationSchema: Yup.object().shape({
            date: Yup.date('Invalid Date').required('Required'),
            time: Yup.string().required('Required'),
            number: Yup.number().default(2).moreThan(0,"Please input number greater than 0").lessThan(10, "Please input number no greater than 10").required('Required'),
            type: Yup.string().optional(),
        }),
    });

    useEffect(()=>{
        if (response) {
            onOpen(response.type, response.message);
            if (response.type === 'success'){
                formik.resetForm();
            }
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
                                <Select id="date" name="date" onClickCapture={()=> dispatch({type: "UPDATE"})} {...formik.getFieldProps('date')} >
                                    <option value="12-05-2023">12/05/2023</option>
                                    <option value="12-06-2023">12/06/2023</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Choose Time {state.availableTimes}</FormLabel>
                                <Select id="time" name="time" {...formik.getFieldProps('type')}>
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