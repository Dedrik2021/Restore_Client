import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useEffect, useState } from 'react';

type Props = {
	items: string[];
	checked: string[];
	onChange: (items: string[]) => void;
};

export default function CheckButtonsGroup({ items, checked, onChange }: Props) {
    const [checkedItems, setCheckedItems] = useState(checked);

    useEffect(() => {
		setCheckedItems(checked);
	}, [checked]);

    const handleToggle = (value: string) => {
        const updatedChecked = checkedItems.includes(value)
            ? checkedItems.filter((item) => item !== value)
            : [...checkedItems, value];

        setCheckedItems(updatedChecked);
        onChange(updatedChecked);
    }

	return (
		<FormGroup>
			{items &&
				items.map((item, i) => (
					<FormControlLabel
						key={i}
						control={
							<Checkbox
								checked={ checkedItems.includes(item)}
								onChange={() => handleToggle(item)}
								sx={{ py: 0.7, fontSize: 30 }}
								color="secondary"
							/>
						}
						label={item.toUpperCase()}
					/>
				))}
		</FormGroup>
	);
}
