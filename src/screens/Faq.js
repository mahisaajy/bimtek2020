import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(4),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Faq() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Bimtek tahun 2020 ini diselenggarakan di mana?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Berhubung karena sedang pandemi Covid-19, bimtek tahun 2020 ini tetap diadakan, namun diselenggarakan secara online.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Kapan bimtek tahun 2020 ini diadakan?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Kegiatan bimtek tahun 2020 ini dimulai dari tanggal 11 Agustus 2020 s/d 13 Agustus 2020.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Apakah rekan-rekan di stasiun yang bukan peserta bimtek, boleh mengikuti/menyimak melalui online?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Boleh saja. Silahkan ikut menyimak.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion> */}
      </Container>
    </div>
  );
}