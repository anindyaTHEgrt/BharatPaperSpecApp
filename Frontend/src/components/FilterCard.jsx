import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function valuetext(value) {
    return `${value}`;
}

// 1. Added 'onApply' to the props destructuring
const FilterCard = ({ columns, onApply }) => {
    const [value, setValue] = React.useState([0, 1000]);
    const [property, setProperty] = React.useState('');

    // 2. Re-added the missing select change handler
    const handleSelectChange = (event) => {
        setProperty(event.target.value);
    };

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleApply = () => {
        // 3. Ensure onApply exists before calling it
        if (onApply) {
            onApply({
                property: property,
                range: value
            });
        }
    };

    return (
        <div>
            <div className="card mb-7 bg-base-100 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Filter</h2>
                    <div>
                        <FormControl sx={{ m: 1, width: 1 }} size="small">
                            <InputLabel id="property-select-label">Properties</InputLabel>
                            <Select
                                labelId="property-select-label"
                                id="property-select"
                                value={property}
                                label="Property"
                                onChange={handleSelectChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {columns && columns.map((col) => (
                                    <MenuItem key={col} value={col}>
                                        {col}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>Select Property to filter</FormHelperText>
                        </FormControl>

                        <Box sx={{ width: '90%', mx: 'auto', mt: 1/2 }}>
                            <Slider
                                getAriaLabel={() => 'Filter range'}
                                value={value}
                                onChange={handleSliderChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                min={0}
                                max={1000}
                            />
                            {/* Displaying the values at the ends */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                <div className="text-sm text-blue-650 font-semibold text-blue-650">
                                    Min: {value[0]}
                                </div>
                                <div className="text-sm text-blue-650 font-semibold text-blue-650">
                                    Max: {value[1]}
                                </div>
                            </Box>
                        </Box>
                    </div>

                    <div className="justify-end card-actions">
                        <button
                            className="btn btn-primary"
                            onClick={handleApply}
                            disabled={!property}
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterCard;