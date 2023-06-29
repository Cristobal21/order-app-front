import { useEffect } from 'react'
import { useGetDataById } from './useGetDataById'

export const usePrint = (selectedText) => {
  const { getOrder, order } = useGetDataById(selectedText)

  useEffect(() => {
    getOrder()
  }, [])

  const printOrder = () => {
    const windowPrint = window.open('', '', 'height=800,width=1400,top=100,left=100')
    windowPrint.document.write('<html>')
    windowPrint.document.write(' <head>')
    // windowPrint.document.write('  <script src="https://cdn.tailwindcss.com"></script>')
    windowPrint.document.write('  <title>Imprimiendo Pedido</title>')
    windowPrint.document.write(' </head>')
    windowPrint.document.write(' <body>')
    windowPrint.document.write("  <section style='width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; '>")
    windowPrint.document.write("   <table style='border: 1px solid; height: auto; width: 350px;'>")
    windowPrint.document.write('     <tbody>')
    windowPrint.document.write('       <tr>')
    windowPrint.document.write("         <td style='height:2rem; align-items: center; text-align: center; font-size: larger; width: 100%; display: flex; justify-content: space-between;'><p>Producto</p><p>:</p></td>")
    windowPrint.document.write(`         <td style='font-size: large; border-bottom: 1px solid black;'>${order.producto}</td>`)
    windowPrint.document.write('       </tr>')
    windowPrint.document.write('       <tr>')
    windowPrint.document.write("         <td style='height:2rem; align-items: center; text-align: center; font-size: larger; width: 100%; display: flex; justify-content: space-between;'><p>Nombre</p><p>:</p></td>")
    windowPrint.document.write(`         <td style='font-size: large; border-bottom: 1px solid black;'>${order.nombre}</td>`)
    windowPrint.document.write('       </tr>')
    windowPrint.document.write('       <tr>')
    windowPrint.document.write("         <td style='height:2rem; align-items: center; text-align: center; font-size: larger; width: 100%; display: flex; justify-content: space-between;'><p>Dirección</p><p>:</p></td>")
    windowPrint.document.write(`         <td style='font-size: large; border-bottom: 1px solid black;'>${order.direccion}</td>`)
    windowPrint.document.write('       </tr>')
    windowPrint.document.write('       <tr>')
    windowPrint.document.write("         <td style='height:2rem; align-items: center; text-align: center; font-size: larger; width: 100%; display: flex; justify-content: space-between;'><p>Sector</p><p>:</p></td>")
    windowPrint.document.write(`         <td style='font-size: large; border-bottom: 1px solid black;'>${order.sector}</td>`)
    windowPrint.document.write('       </tr>')
    windowPrint.document.write('       <tr>')
    windowPrint.document.write("         <td style='height:2rem; align-items: center; text-align: center; font-size: larger; width: 100%; display: flex; justify-content: space-between;'><p>Referencia</p><p>:</p></td>")
    windowPrint.document.write(`         <td style='font-size: large; border-bottom: 1px solid black;'>${order.referencia}</td>`)
    windowPrint.document.write('       </tr>')
    windowPrint.document.write('       <tr>')
    windowPrint.document.write("         <td style='height:2rem; align-items: center; text-align: center; font-size: larger; width: 100%; display: flex; justify-content: space-between;'><p>Contacto</p><p>:</p></td>")
    windowPrint.document.write(`         <td style='font-size: large; border-bottom: 1px solid black;'>${order.numero}</td>`)
    windowPrint.document.write('       </tr>')
    windowPrint.document.write('       <tr>')
    windowPrint.document.write("         <td style='height:2rem; align-items: center; text-align: center; font-size: larger; width: 100%; display: flex; justify-content: space-between;'><p>Estado</p><p>:</p></td>")
    windowPrint.document.write(`         <td style='font-size: large; border-bottom: 1px solid black;'>${order.estadoPago}</td>`)
    windowPrint.document.write('       </tr>')
    windowPrint.document.write('       <tr>')
    windowPrint.document.write("         <td style='height:2rem; align-items: center; text-align: center; font-size: larger; width: 100%; display: flex; justify-content: space-between;'><p>Medio</p><p>:</p></td>")
    windowPrint.document.write(`         <td style='font-size: large; border-bottom: 1px solid black;'>${order.medioPago}</td>`)
    windowPrint.document.write('       </tr>')
    windowPrint.document.write('       <tr>')
    windowPrint.document.write("         <td style='height:2rem; align-items: center; text-align: center; font-size: larger; width: 100%; display: flex; justify-content: space-between;'><p>Precio</p><p>:</p></td>")
    windowPrint.document.write(`         <td style='font-size: large; border-bottom: 1px solid black;'>${order.precio}</td>`)
    windowPrint.document.write('       </tr>')
    windowPrint.document.write('       <tr>')
    windowPrint.document.write("         <td style='height:2rem; align-items: center; text-align: center; font-size: larger; width: 100%; display: flex; justify-content: space-between;'><p>Fecha</p><p>:</p></td>")
    windowPrint.document.write(`         <td style='font-size: large;'>${order.fecha}</td>`)
    windowPrint.document.write('       </tr>')
    windowPrint.document.write('      </tbody>')
    windowPrint.document.write('    </table>')
    windowPrint.document.write('  </section>')
    windowPrint.document.write(' </body></html>')
    windowPrint.print()
    windowPrint.close()
  }

  return {
    printOrder
  }
}
