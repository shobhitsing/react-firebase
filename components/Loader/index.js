import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import { CircularProgress} from '@material-ui/core';
import './style.scss'


// const styles = makeStyles((theme) => ({
//     buttonProgress: {
//       color: green[500],
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       marginTop: -12,
//       marginLeft: -12,
//     },
//   }));

const PageLoader = ({ isLoading }) => {
    return (
        isLoading
            ?<div className="loader-wrapper">
                <CircularProgress size={60} />
            </div >
            : null 
    )
}

export default PageLoader
