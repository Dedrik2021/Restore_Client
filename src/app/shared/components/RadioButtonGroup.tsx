import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

type Props = {
	options: { label: string; value: string }[];
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	selectedValue: string;
};

export default function RadioButtonGroup({ options, onChange, selectedValue }: Props) {
	return (
		<FormControl>
			<RadioGroup
				onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}
				sx={{ my: 0 }}
				value={selectedValue}
			>
				{options.map((option, i) => (
					<FormControlLabel
						key={i}
						control={<Radio color="secondary" sx={{ py: 0.7 }} />}
						label={option.label}
						value={option.value}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
}
