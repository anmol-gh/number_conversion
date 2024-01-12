import { useState } from "react";

const Content = () => {
	//Usestate for input box
	const [number, setNumber] = useState(0);

	//Usestate for drop down
	const [type1, settype1] = useState("Binary");
	const [type2, settype2] = useState("Binary");

	// const [update, setUpdate] = useState(number);
	const handleChange = (event) => {
		setNumber(event.target.value);
	};

	const handletype1 = (event) => {
		settype1(event.target.value);
	};

	const handletype2 = (event) => {
		settype2(event.target.value);
	};

	const handleClick = async (event) => {
		//Updates the value of number
		setNumber(number);

		//Input box Selection
		const input = document.getElementById("input");

		//Label Selection
		const label = document.getElementById("label");

		//Input Validation
		//Condition for Binary
		if (type1 === "Binary") {
			const binaryRegex = /^[0-1]+$/;
			const value = binaryRegex.test(number);

			//If value is binary
			if (value === true) {
				input.className = "input";

				//Condition for Binary to Binary
				if (type2 === "Binary") {
					label.innerText = number;
				}

				//Condition for Binary to Octal
				else if (type2 === "Octal") {
					// Binary to Decimal
					const decimalNumber = parseInt(number, 2);

					// Decimal to Octal
					const octalNumber = decimalNumber.toString(8);
					label.innerText = octalNumber;
				}

				//Condition for Binary to Decimal
				else if (type2 === "Decimal") {
					// Convert binary to decimal
					const decimalNumber = parseInt(number, 2);
					label.innerText = decimalNumber;
				} else if (type2 === "Hexadecimal") {
					// Convert binary to decimal
					const decimalNumber = parseInt(number, 2);

					// Convert decimal to hexadecimal
					const hexadecimalNumber = decimalNumber.toString(16).toUpperCase();

					label.innerText = hexadecimalNumber;
				}
			}

			//If value is not binary
			else {
				input.className = "input wrong";
			}
		}

		//Condition for Octal
		else if (type1 === "Octal") {
			const octalRegex = /^[0-7]+$/;
			const value = octalRegex.test(number);
			//If value is octal perform the conversion
			if (value === true) {
				input.className = "input";

				//Condition for Octal to Binary
				if (type2 === "Binary") {
					// Octal to Decimal
					const decimalNumber = parseInt(number, 8);

					// Decimal to Binary
					const binaryNumber = decimalNumber.toString(2);
					label.innerText = binaryNumber;
				}
				//Condition for Octal to Octal
				else if (type2 === "Octal") {
					label.innerText = number;
				}

				//Condition for Octal to Decimal
				else if (type2 === "Decimal") {
					// Octal to Decimal
					const decimalNumber = parseInt(number, 8);
					label.innerText = decimalNumber;
				}

				//Condition for Octal to Hexadecimal
				else if (type2 === "Hexadecimal") {
					// Octal to Decimal
					const decimalNumber = parseInt(number, 8);

					// Decimal to Hexadecimal
					const hexadecimalNumber = decimalNumber.toString(16).toUpperCase();
					label.innerText = hexadecimalNumber;
				}
			}
			//If value is not octal
			else {
				input.className = "input wrong";
			}
		}

		//Condition for Decimal
		else if (type1 === "Decimal") {
			const decimalRegex = /^[0-9]+$/;
			const value = decimalRegex.test(number);

			//If value is decimal perform the conversion
			if (value === true) {
				input.className = "input";

				//Condition for Decimal to Binary
				if (type2 === "Binary") {
					// Decimal to Binary
					const binaryNumber = parseInt(number, 10).toString(2);
					label.innerText = binaryNumber;
				}

				//Condition for Decimal to Octal
				else if (type2 === "Octal") {
					// Decimal to Octal
					const octalNumber = parseInt(number, 10).toString(8);
					label.innerText = octalNumber;
				}

				//Condition for Decimal to Decimal
				else if (type2 === "Decimal") {
					label.innerText = number;
				}

				//Condition for Decimal to Hexadecimal
				else if (type2 === "Hexadecimal") {
					// Decimal to Hexadecimal
					const hexadecimalNumber = parseInt(number, 10)
						.toString(16)
						.toUpperCase();
					label.innerText = hexadecimalNumber;
				}
			} else {
				input.className = "input wrong";
			}
		}

		//Condition for Hexadecimal
		else if (type1 === "Hexadecimal") {
			const hexadecimalRegex = /^[0-9A-F]+$/;
			const value = hexadecimalRegex.test(number);
			//If value is hexadecimal perform the conversion
			if (value === true) {
				input.className = "input";

				//Condition for Hexadecimal to Binary

				if (type2 === "Binary") {
					// Hexadecimal to Decimal
					const decimalNumber = parseInt(number, 16);

					// Decimal to Binary
					const binaryNumber = decimalNumber.toString(2);
					label.innerText = binaryNumber;
				}

				//Condition for Hexadecimal to Octal
				else if (type2 === "Octal") {
					// Hexadecimal to Decimal
					const decimalNumber = parseInt(number, 16);

					// Decimal to Octal
					const octalNumber = decimalNumber.toString(8);
					label.innerText = octalNumber;
				}

				//Condition for Hexadecimal to Decimal
				else if (type2 === "Decimal") {
					// Hexadecimal to Decimal
					const decimalNumber = parseInt(number, 16);
					label.innerText = decimalNumber;
				}

				//Condition for Hexadecimal to Hexadecimal
				else if (type2 === "Hexadecimal") {
					label.innerText = number;
				}
			} else {
				input.className = "input wrong";
			}
		}
	};

	return (
		<div className='content'>
			<div className='content-container'>
				<div className='content-containers'>
					<label>Enter the number</label>
					<input
						className="input"
						id='input'
						placeholder='Number'
						pattern='[0-1]'
						type1='number'
						number={number}
						onChange={handleChange}
					></input>
				</div>
				<div className='content-containers'>
					<label> Convert From</label>
					<select
						className='select'
						name='Representation'
						id='Representation'
						onChange={handletype1}
						value={type1}
					>
						<option value='Binary'>Binary</option>
						<option value='Octal'>Octal</option>
						<option value='Decimal'>Decimal</option>
						<option value='Hexadecimal'>Hexadecimal</option>
					</select>
				</div>
				<div className='content-containers'>
					<label> Convert to</label>
					<select
						className='select'
						name='Representation2'
						id='Representation2'
						onChange={handletype2}
						// value={type2}
					>
						<option value='Binary'>Binary</option>
						<option value='Octal'>Octal</option>
						<option value='Decimal'>Decimal</option>
						<option value='Hexadecimal'>Hexadecimal</option>
					</select>
				</div>
				<div className='content-containers '>
					<button className='btn' onClick={handleClick}>
						Convert
					</button>{" "}
					<div className='label'>
						<label id='label'></label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
