import { useState } from "react"
import { useSendData } from "./useSendData"

export const useForm = (initialForm, validateForm) => {
	const { sending } = useSendData()

	const [form, setForm] = useState(initialForm)
	const [errors, setErrors] = useState({})
	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState(null)

	const handleChange = (e) => {
		const { name, value } = e.target
		setForm({
			...form,
			[name]: value,
		})
	}

	const handleBlur = (e) => {
		handleChange(e)
		setErrors(validateForm(form))
	}

	const handleSubmit = (e) => {
		e.preventDefault(e)
		setErrors(validateForm(form))
		if (Object.keys(errors).length === 0) {
			setLoading(true)
			setForm(initialForm)
			sending(form)
		} else {
			return
		}
		setLoading(false)
	}

	return {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	}
}
