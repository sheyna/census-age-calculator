
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import PropTypes from 'prop-types';

function CensusMenu({ data, update }) {

  const handleChange = (event) => {
    console.log(data);
    update({
      ...data,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <form>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Add Census Records to Result</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.showUSCensuses}
                onChange={handleChange}
                name="showUSCensuses" 
              />
            }
            label="U.S. Federal Census"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={data.show1890Census}
                onChange={handleChange}
                name="show1890Census"
              />
            }
            label="1890 U.S. Federal Census"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={data.showKansasCensus}
                onChange={handleChange}
                name="showKansasCensus"
              />
            }
            label="Kansas State Census"
          />
        </FormGroup>
      </FormControl>
    </form>
  );
}

export default CensusMenu;

CensusMenu.propTypes = {
  data: PropTypes.shape({
    showUSCensuses: PropTypes.bool.isRequired,
    showKansasCensus: PropTypes.bool.isRequired,
    show1890Census: PropTypes.bool.isRequired,
  }),
  update: PropTypes.func,
}
