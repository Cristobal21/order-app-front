import { useEffect } from 'react'
import { useGetDataById } from './useGetDataById'

export const usePrint = (selectedText) => {
  const { getOrder, order } = useGetDataById(selectedText)

  useEffect(() => {
    getOrder()
  }, [])

  const printOrder = () => {
    const windowPrint = window.open('', '', 'height=800,width=1500')
    windowPrint.document.write('<html><head><title>Imprimiendo Pedido</title></head><body>')
    windowPrint.document.write("<section className='flex justify-center w-auto'>")
    windowPrint.document.write(" <table className='my-8 w-full text-justify'>")
    windowPrint.document.write('   <tbody>')
    windowPrint.document.write("     <tr className='border-b'>")
    windowPrint.document.write("       <td className='p-2 border-r'>Producto</td>")
    windowPrint.document.write(`       <td className='p-2 text-justify'>${order.producto}</td>`)
    windowPrint.document.write('     </tr>')
    windowPrint.document.write("     <tr className='border-b'>")
    windowPrint.document.write("       <td className='p-2 border-r'>Nombre</td>")
    windowPrint.document.write(`       <td className='p-2 text-justify'>${order.nombre}</td>`)
    windowPrint.document.write('     </tr>')
    windowPrint.document.write("            <tr className='border-b'>")
    windowPrint.document.write("              <td className='p-2  border-r'>Dirección</td>")
    windowPrint.document.write(`              <td className='p-2 text-justify'>${order.direccion}</td>`)
    windowPrint.document.write('            </tr>')
    windowPrint.document.write("            <tr className='border-b'>")
    windowPrint.document.write("              <td className='p-2 border-r'>Sector</td>")
    windowPrint.document.write(`              <td className='p-2 text-justify'>${order.sector}</td>`)
    windowPrint.document.write('            </tr>')
    windowPrint.document.write("            <tr className='border-b'>")
    windowPrint.document.write("              <td className='p-2 border-r'>Referencia</td>")
    windowPrint.document.write(`              <td className='p-2 text-justify'>${order.referencia}</td>`)
    windowPrint.document.write('            </tr>')
    windowPrint.document.write("            <tr className='border-b'>")
    windowPrint.document.write("              <td className='p-2 border-r'>Contacto</td>")
    windowPrint.document.write(`              <td className='p-2 text-justify'>${order.numero}</td>`)
    windowPrint.document.write('            </tr>')
    windowPrint.document.write("            <tr className='border-b'>")
    windowPrint.document.write("              <td className='p-2 border-r'>Estado</td>")
    windowPrint.document.write(`             <td className='p-2 text-justify'>${order.estadoPago}</td>`)
    windowPrint.document.write('            </tr>')
    windowPrint.document.write("            <tr className='border-b'>")
    windowPrint.document.write("              <td className='p-2 border-r'>Medio</td>")
    windowPrint.document.write(`              <td className='p-2 text-justify'>${order.medioPago}</td>`)
    windowPrint.document.write('            </tr>')
    windowPrint.document.write("            <tr className='border-b'>")
    windowPrint.document.write("              <td className='p-2 border-r'>Precio</td>")
    windowPrint.document.write(`              <td className='p-2 text-justify'>${order.precio}</td>`)
    windowPrint.document.write('            </tr>')
    windowPrint.document.write("            <tr className=''>")
    windowPrint.document.write("              <td className='p-2 border-r'>Fecha</td>")
    windowPrint.document.write(`              <td className='p-2 text-justify'>${order.fecha}</td>`)
    windowPrint.document.write('            </tr>2')
    windowPrint.document.write('          </tbody>')
    windowPrint.document.write('        </table>')
    windowPrint.document.write('      </section>')
    windowPrint.document.write('</body></html>')
    windowPrint.print()
    windowPrint.close()
  }

  return {
    printOrder
  }
}
