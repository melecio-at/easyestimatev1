import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion as MuiAccordion } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import BodyTextCustom from 'components/atoms/BodyTextCustom';

function Accordion(props) {
  const { items, summarySx, isWithTemplate } = props;

  return (
    <>
      {items.map((item, key) => (
        <MuiAccordion key={key} disableGutters={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${key}-content`}
            id={`panel-${key}-header`}
            sx={{
              borderBottom: 0,
              borderColor: 'rgba(224, 224, 224, 1)',
              ...summarySx,
            }}
          >
            <BodyTextCustom bold={true} disableGutter={true}>
              {item.header}
            </BodyTextCustom>
          </AccordionSummary>
          {isWithTemplate && (
            <AccordionDetails sx={(theme) => ({ px: 2, backgroundColor: theme.palette.hexf5f4ef })}>
              <BodyTextCustom>{item.content}</BodyTextCustom>
            </AccordionDetails>
          )}

          {!isWithTemplate && (
            <AccordionDetails sx={() => ({ px: 2, backgroundColor: 'white' })}>
              <BodyTextCustom>{item.content}</BodyTextCustom>
            </AccordionDetails>
          )}
        </MuiAccordion>
      ))}
    </>
  );
}

Accordion.defaultProps = {
  items: [],
  summarySx: {},
  isWithTemplate: true,
};

Accordion.propTypes = {
  items: PropTypes.array,
  summarySx: PropTypes.object,
  isWithTemplate: PropTypes.bool,
};

export default Accordion;
