export const RegisterOrder = () => {
	const onSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<div className="flex justify-center">
			<form method="post" onSubmit={onSubmit} className="py-8 w-96">
				<label className="block bg-white px-4 py-4 rounded-md">
					<input
						type="text"
						name="rut"
						id="rut"
						placeholder="Rut"
						className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
					/>
					<input
						type="text"
						name="nombre"
						id="nombre"
						placeholder="Nombre"
						className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
					/>
					<input
						type="text"
						name="direccion"
						id="direccion"
						placeholder="Dirección"
						className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
					/>
					<select
						name="sector"
						id="sector"
						className="mt-2 text-lg text-slate-500 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none w-full focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
					>
						<option value="">Sector / Zona</option>
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
						placeholder="Referencia lugar"
						className="mt-2 block rounded-md text-lg w-full px-3 border border-slate-300 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
					></textarea>
					<input
						type="tel"
						name="contacto"
						id="contacto"
						placeholder="Número contacto"
						className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-500"
					/>
					<input
						type="radio"
						name="pago"
						id="pagado"
						className="peer/pagado mr-1 mt-3"
					/>
					<label
						htmlFor="pagado"
						className="peer-checked/pagado:text-sky-500 mr-4"
					>
						Pagado
					</label>
					<input
						type="radio"
						name="pago"
						id="porpagar"
						className="peer/porpagar mr-1"
					/>
					<label
						htmlFor="porpagar"
						className="peer-checked/porpagar:text-sky-500"
					>
						Por pagar
					</label>
					<input
						type="submit"
						value="Enviar"
						className="bg-indigo-500 border border-indigo-500 focus:outline-none text-lg py-2 mt-5 w-full rounded shadow-md hover:bg-indigo-400 focus:bg-indigo-600 text-white hover:cursor-pointer"
					/>
				</label>
			</form>
		</div>
	)
}
