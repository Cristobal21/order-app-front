import formApi from "../api/formApi"

export const useSendData = () => {
	const sending = async ({
		producto,
		nombre,
		direccion,
		sector,
		referencia,
		numero,
		estado_pago,
		medio_pago,
		precio,
	}) => {
		try {
			const resp = await formApi.post("/admin", {
				producto,
				nombre,
				direccion,
				sector,
				referencia,
				numero,
				estado_pago,
				medio_pago,
				precio,
			})
			console.log({ resp })
		} catch (error) {
			console.log(error)
		}
	}

	return {
		sending,
	}
}
