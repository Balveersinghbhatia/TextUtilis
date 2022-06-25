import React from 'react'

const Alert = (props) => {
	function capitalize(word) {
		let newWord = word.toLowerCase()
		return newWord[0].toUpperCase() + word.slice(1)
	}
	return (
		<div style={{height:"50px",textAlign:"center"}}>
		{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
			<strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
		</div>}
		</div>
	)
}

export default Alert



// We have used a new syntax here
// But actually it is not new

// It means that if props.alert is true then only the aaage ki chiz will return
/* It is similar to :if (props.alert ===true){
	code for alert
} */
// If it is true then only return