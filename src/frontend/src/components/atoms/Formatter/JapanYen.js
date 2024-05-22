import PropTypes from 'prop-types';
import BodyText from 'components/atoms/BodyText';

function Yen({ amount, isKanji, sx }) {
  return (
    <BodyText sx={sx}>
      {!isKanji && '¥'}
      {Number(amount).toLocaleString('ja-JP', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}
      {isKanji && '円'}
    </BodyText>
  );
}

Yen.defaultProps = {
  amount: 0,
  isKanji: false,
  sx: {},
};

Yen.propTypes = {
  amount: PropTypes.number.isRequired,
  isKanji: PropTypes.bool,
  sx: PropTypes.object,
};

export default Yen;
