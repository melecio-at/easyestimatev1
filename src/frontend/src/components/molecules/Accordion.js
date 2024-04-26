import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion as MuiAccordion } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import BodyText from 'components/atoms/BodyText';

function Accordion(props) {
  const { items, summarySx } = props;

  return (
    <>
      {items.map((item, key) => (
        <MuiAccordion key={key} disableGutters={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${key}-content`}
            id={`panel-${key}-header`}
            sx={{
              borderBottom: 1,
              borderColor: 'rgba(224, 224, 224, 1)',
              ...summarySx,
            }}
          >
            <BodyText bold={true} disableGutter={true}>
              {item.header}
            </BodyText>
          </AccordionSummary>
          <AccordionDetails sx={(theme) => ({ p: 2, backgroundColor: theme.palette.grey[50] })}>
            <BodyText>{item.content}</BodyText>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
}

Accordion.defaultProps = {
  items: [],
  summarySx: {},
};

Accordion.propTypes = {
  items: PropTypes.array,
  summarySx: PropTypes.object,
};

export default Accordion;
