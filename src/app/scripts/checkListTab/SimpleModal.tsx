import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { PrimaryButton } from 'msteams-ui-components-react';




function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function SimpleModal({form , title , name}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
  <div className="center">
    <div style={modalStyle} className={classes.paper}>
      {/* <img src="../../web/assets/alpha.png"  ></img> */}
      <h2 id="title" className="text-danger text-center mb-5">{title}</h2>
      {/* <p id="description"> fill in the form </p> */}
      <div>
      {form}
      </div>
    
      {/* <SimpleModal /> */}
    </div>
    </div>
  );

  return (
    <div>
      <PrimaryButton onClick={handleOpen} autoFocus> {name}</PrimaryButton>
      {/* <button type="button"  className="btn btn-info">
        {name}
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        {body}
        
      </Modal>
    </div>
  );
}
