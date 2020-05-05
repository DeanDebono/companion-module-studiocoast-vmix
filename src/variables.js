exports.updateVariableDefinitions = function() {
	const variables = [];

	['Master', 'A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach(bus => {
		variables.push({
			label: `Bus ${bus} Volume`,
      name: `bus_volume_${bus.toLowerCase()}`
		});
	});

	this.data.inputs.forEach(input => {
		if (input.volume !== undefined) {
			// Remove symbols other than - _ . from the input title
			let inputName = input.shortTitle.replace(/[^a-z0-9-_.]+/gi, '')
			variables.push({
				label: `Input ${input.shortTitle} Volume`,
				name: `input_volume_${inputName}`
			})
		};
	});

	this.setVariableDefinitions(variables);
};
