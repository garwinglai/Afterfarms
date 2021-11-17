import React, { useState } from "react";
import styles from "../../../styles/css/account/orders/component/skip-order-component.module.css";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import { DropdownButton, Dropdown } from "react-bootstrap";

// Todo: Donation & Skip database

function SkipOrder({ manageView, skipOrder }) {
	const [isChecked, setIsChecked] = useState(false);
	const [reasonSelected, setReasonSelected] = useState(false);

	function handleCheckChange() {
		setIsChecked(!isChecked);
	}

	function handleSelectChange(e) {
		const { value } = e.target;
		if (value !== "select reason") {
			setReasonSelected(true);
		} else {
			setReasonSelected(false);
		}
	}

	function handleConfirmClick(e) {
		e.preventDefault();
		skipOrder();
		manageView();
	}

	return (
		<div className={styles.SkipOrder}>
			<div className={styles.SkipOrder_donation}>
				<i className="fas fa-hand-holding-heart"></i>
				<h4>You can help feed people in hunger</h4>
				<p>
					Consider donating your skipped grocery box, and we can fight world
					hunger together.
				</p>
				<div className={styles.Donation_checkbox}>
					<Checkbox
						id="donate-check-box"
						checked={isChecked}
						onChange={handleCheckChange}
					/>
					<label htmlFor="donate-check-box">
						You agree to be charged $30, and we'll donate it to a philanthropic
						organization on your behalf.{" "}
					</label>{" "}
				</div>
				<p>
					You can view our philanthropic partners{" "}
					{/* //TODO: Philanthropy partners */}
					<Link href="/">
						<a>here</a>
					</Link>
					.
				</p>
				<button
					disabled={!isChecked}
					className={!isChecked ? `${styles.Button_disabled}` : undefined}
				>
					Donate
				</button>
			</div>
			<div className={styles.SkipOrder_reason}>
				<p>Want to skip your box?</p>
				{/* //TODO: database peoples' reasons & value for options */}
				<label htmlFor="skip-box-reason">Let us know why!</label>
				<select
					name="skip-reason"
					id="skip-box-reason"
					onChange={handleSelectChange}
				>
					<option value="select reason">Select Reason</option>
					<option value="will be out of town">
						Will be out of town this week
					</option>
					<option value="no budget">No budget</option>
					<option value="too much food at home">Too much food at home</option>
					<option value="recent bad experience">
						Recently had a bad experience with box
					</option>
					<option value="box offer not appealling">
						Box offer is not appealing
					</option>
					<option value="no time to cook">No Time to cook</option>
					<option value="other">Other</option>
				</select>
				{/* //TODO: Manage confirm skip from data */}
				<button
					className={
						reasonSelected
							? `${styles.ConfirmButton}`
							: `${styles.Button_disabled}`
					}
					disabled={!reasonSelected}
					onClick={handleConfirmClick}
				>
					Confirm
				</button>
				<button onClick={() => manageView()} className={styles.CancelButton}>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default SkipOrder;
