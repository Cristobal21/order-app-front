import { useState } from "react"
import { useForm } from "../hooks/useForm"

const initialForm = {
	producto: "",
	rut: "",
	nombre: "",
	direccion: "",
	sector: "",
	referencia: "",
	numero: "",
	estado_pago: "",
	precio: "",
	medio_pago: "",
}

const validationsForm = (form) => {
	let errors = {}

	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
	let regexAddress = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9-.\s]+$/g
	let regexContact = /^[0-9]{0,9}$/
	let regexComments = /^.{1,255}$/

	if (!form.producto.trim()) {
		errors.producto = `El campo "Producto" es requerido`
	} else if (!regexName.test(form.producto.trim())) {
		errors.producto =
			'El campo "Producto" solo acepta letras y espacios en blanco.'
	} else if (!form.nombre.trim()) {
		errors.nombre = `El campo "Nombre" es requerido`
	} else if (!regexName.test(form.nombre.trim())) {
		errors.nombre = 'El campo "Nombre" solo acepta letras y espacios en blanco.'
	} else if (!form.direccion.trim()) {
		errors.direccion = `El campo "Dirección" es requerido`
	} else if (!regexAddress.test(form.direccion.trim())) {
		errors.direccion =
			'El campo "Dirección solo acepta letras, números y espacios en blanco."'
	} else if (!form.referencia.trim()) {
		errors.referencia = `El campo "Referencia lugar" es requerido`
	} else if (!regexComments.test(form.referencia.trim())) {
		errors.referencia =
			'El campo "Referencia" no debe exceder los 255 caracteres.'
	} else if (!form.numero.trim()) {
		errors.numero = `El campo "Número Contacto" es requerido`
	} else if (!regexContact.test(form.numero.trim())) {
		errors.numero =
			'El campo "Número Contacto" solo admite números y un largo máximo de 9 números.'
	}

	return errors
}

export const RegisterOrder = () => {
	const [pago, setPago] = useState(false)

	const {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useForm(initialForm, validationsForm)

	const handleClickPagar = () => {
		setPago(true)
	}
	const handleClickPagado = () => {
		setPago(false)
	}

	return (
		<div className="flex justify-center">
			<form method="post" onSubmit={handleSubmit} className="py-8 w-96">
				<div className="block bg-white px-4 py-4 rounded-md">
					<input
						type="text"
						name="producto"
						id="producto"
						placeholder="Producto (obligatorio)"
						className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
						value={form.producto}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.producto && (
						<p className="text-sm text-red-500">{errors.producto}</p>
					)}
					<input
						type="text"
						name="rut"
						id="rut"
						placeholder="Rut (opcional)"
						className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
						value={form.rut}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					<input
						type="text"
						name="nombre"
						id="nombre"
						placeholder="Nombre (obligatorio)"
						className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
						value={form.nombre}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.nombre && (
						<p className="text-sm text-red-500">{errors.nombre}</p>
					)}
					<input
						type="text"
						name="direccion"
						id="direccion"
						placeholder="Dirección (obligatorio)"
						className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
						value={form.direccion}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.direccion && (
						<p className="text-sm text-red-500">{errors.direccion}</p>
					)}
					<select
						name="sector"
						className="mt-2 text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
						onChange={handleChange}
						defaultValue=""
					>
						<option value="">-- Sector / Zona --</option>
						<option value="buin_centro">Buin centro</option>
						<option value="villaseca">Villaseca</option>
						<option value="maipo">Maipo</option>
						<option value="viluco">Viluco</option>
						<option value="bajo_matte">Bajos de matte</option>
						<option value="buin_oriente">Buin oriente</option>
						<option value="alto_jahuel">Alto jahuel</option>
						<option value="linderos">Linderos</option>
					</select>
					<textarea
						name="referencia"
						id="referencia"
						cols="30"
						rows="4"
						placeholder="Referencia lugar (obligatorio)"
						className="mt-2 block rounded-md text-lg w-full px-3 border border-slate-300 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
						value={form.referencia}
						onChange={handleChange}
						onBlur={handleBlur}
					></textarea>
					{errors.referencia && (
						<p className="text-sm text-red-500">{errors.referencia}</p>
					)}
					<input
						type="text"
						name="numero"
						id="numero"
						placeholder="Número contacto (obligatorio)"
						className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
						value={form.numero}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.numero && (
						<p className="text-sm text-red-500">{errors.numero}</p>
					)}
					<input
						type="radio"
						name="estado_pago"
						id="pagado"
						value="pagado"
						onChange={handleChange}
						onBlur={handleBlur}
						defaultChecked
						className="peer/pagado mr-1 mt-3"
						onClick={handleClickPagado}
					/>
					<label
						htmlFor="pagado"
						className="peer-checked/pagado:text-sky-500 mr-4 text-lg"
					>
						Pagado
					</label>
					{!pago && <></>}
					<input
						type="radio"
						name="estado_pago"
						id="porpagar"
						value="porpagar"
						onChange={handleChange}
						onBlur={handleBlur}
						className="peer/porpagar mr-1"
						onClick={handleClickPagar}
					/>
					<label
						htmlFor="porpagar"
						className="peer-checked/porpagar:text-sky-500 text-lg"
					>
						Por pagar
					</label>
					{pago && (
						<>
							<input
								type="text"
								name="precio"
								id="precio"
								placeholder="Precio"
								value={form.precio}
								onChange={handleChange}
								className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
							/>
							<select
								name="medio_pago"
								className="mt-2 text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
								defaultValue=""
								onChange={handleChange}
							>
								<option value="">-- Medio de pago --</option>
								<option value="efectivo">Efectivo</option>
								<option value="tarjeta">Tarjeta</option>
								<option value="transferencia">Transferencia</option>
							</select>
						</>
					)}
					<input
						type="submit"
						value="Enviar"
						className="bg-indigo-500 border border-indigo-500 focus:outline-none text-lg py-2 mt-5 w-full rounded shadow-md hover:bg-indigo-400 focus:bg-indigo-600 text-white hover:cursor-pointer"
					/>
				</div>
			</form>
			{/* //TODO aplicar condicional para cuando se envien los datos exitosamente */}
			{loading}
		</div>
	)
}
