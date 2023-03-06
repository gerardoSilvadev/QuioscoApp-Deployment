import Layout from "./layout/Layout"
import { useEffect, useCallback } from "react"
import useQuiosco from "./hooks/UseQuiosco"
import { formatearDinero } from "helpers"

export default function Total() {

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

    const comprobarPedido = useCallback (() => { 
        return pedido.length == 0 || nombre === ''
    },[pedido,nombre])

    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido]);   

    
    return(
        <Layout pagina='Total y Confirmar Pedido'>
        <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
        <p className="text-2xl my-10">Confirma tu Pedido a Continuacion..</p>

        <form
        onSubmit={colocarOrden}>
            <div>
                <label
                htmlFor="nombre"
                className="block uppercase text-slate-800 font-bold
                text-xl">
                    Nombre Y Apellido
                </label>

                <input
                id="nombre"
                type="text"
                className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />

                <div className="mt-10">
                    <p className="text-2xl">
                    Total a Pagar: {''} <span className="font-bold">{formatearDinero(total)}</span>
                    </p>
                </div>

                <div className="mt-5">
                    <input 
                    type="submit"
                    value="Confirmar Pedido"
                    className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                    disabled={comprobarPedido()}
                    />
                
                </div>
                
            </div>
        </form>
        </Layout>
    )
}