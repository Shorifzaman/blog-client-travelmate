import React, { useState } from 'react';
import { Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../Hooks/useAuth';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});
const AddedTravel = () => {
    const [travelerData, setTravelerData] = useState({});
    const { user, isLoading } = useAuth();
    const [rating, setRating] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
    const { admin } = useAuth();
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newTravelerData = { ...travelerData }
        newTravelerData[field] = value;
        setTravelerData(newTravelerData)

    }

    const handleAddAProduct = (e) => {
        e.preventDefault();
        travelerData.date = new Date().toDateString();
        travelerData.time = new Date().toTimeString();
        travelerData.user = user.displayName;
        travelerData.rating = rating;
        travelerData.role = admin;
        travelerData.email = user.email;


        fetch('https://hidden-plains-90674.herokuapp.com/travelPost', {
        // fetch('http://localhost:5000/travelPost', {
            method: "POST",
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(travelerData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Added travel success')
                }
            })

        e.target.reset();
    }
    return (
        <div className=' w-screen' style={{ height: '100vh', backgroundImage: 'url(https://i.ibb.co/37nbN1h/Getty-Images-150127577-58f920153df78ca159d41100.jpg)', backgroundSize: 'cover' }} >
            <div className=' container'>
                <Typography variant='h4' className='text-pink-600 pt-20'>
                    ADD A Travels Blog
                </Typography>

                <Box className='row'>
                    <Grid className='col-lg-5 mt-lg-2'>
                        {
                            isLoading ? <LinearProgress /> :
                                <form onSubmit={handleAddAProduct}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Title
                                    </label>
                                    <input

                                        required
                                        id="standard-name-input"
                                        type="text"
                                        name="title"
                                        placeholder='Title'
                                        onBlur={handleOnBlur}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                                    /> <br />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                                        Description
                                    </label>
                                    <input

                                        required
                                        id="standard-text-input"
                                        type="text"
                                        name="description"
                                        placeholder='Description'
                                        onBlur={handleOnBlur}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    /> <br />

                                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                                        IMG URL
                                    </label>
                                    <input

                                        required
                                        id="standard-text-input"
                                        type="text"
                                        name="img"
                                        placeholder='IMG URL'
                                        onBlur={handleOnBlur}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    /> <br />

                                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                                        Category
                                    </label>
                                    <input
                                        required
                                        id="standard-text-input"
                                        label="Category"
                                        type="text"
                                        name="category"
                                        placeholder='Category'
                                        onBlur={handleOnBlur}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    /> <br />

                                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                                        Info
                                    </label>
                                    <input
                                        required
                                        id="standard-text-input"
                                        type="text"
                                        name="info"
                                        placeholder='Info'
                                        onBlur={handleOnBlur}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    /> <br />

                                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                                        Address
                                    </label>
                                    <input
                                        required
                                        id="standard-text-input"
                                        type="text"
                                        name="address"
                                        placeholder='Address'
                                        onBlur={handleOnBlur}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    /> <br />

                                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                                        Cost
                                    </label>
                                    <input
                                        required
                                        id="standard-number-input"
                                        type="number"
                                        name="price"
                                        placeholder='Cost'
                                        onBlur={handleOnBlur}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    <div className={classes.root}>
                                        <span>Rating: </span> <Rating
                                            name="hover-feedback"
                                            value={rating}
                                            precision={0.5}
                                            onChange={(event, newValue) => {
                                                setRating(newValue);
                                            }}
                                            onChangeActive={(event, newHover) => {
                                                setHover(newHover);
                                            }}
                                        />
                                        {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}
                                    </div>
                                    <button type="submit" className=" bg-pink-800 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full w-full">Add a travel</button>
                                </form>
                        }


                    </Grid>
                    <Grid className="col-lg-7">

                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default AddedTravel;