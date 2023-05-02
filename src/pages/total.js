import Layout from "../../layout/Layout"
import { useEffect, useCallback } from "react";
import useQuiosco from "../../hooks/useQuiosco";
import { formatearDinero } from './../../helpers/index';


export default function total() {

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

    const comprobrarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    }, [pedido, nombre])

    useEffect(() => {
        comprobrarPedido()
    }, [pedido, comprobrarPedido])


    return (

        <Layout pagina='Total y Confirmar Pedido'>

            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuacion</p>

            <form onSubmit={colocarOrden}>

                <div>

                    <label
                        htmlFor="nombre"
                        className="block uppercase text-slate-800 font-bold text-xl"
                    >
                        Nombre
                    </label>

                    <input
                        id="nombre"
                        type='text'
                        className="bg-gray-200 w-full lg:w-1/3 rounded-md mt-3 p-2"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    >
                    </input>

                </div>

                <div className="mt-10">
                    <p className="text-2xl">Total a Pagar: {formatearDinero(total)} <span className="font-bold"></span></p>
                </div>

                <div className="mt-5">

                    <input
                        type='submit'
                        className={` ${comprobrarPedido() ? 'bg-indigo-100 text-gray-400' : 'bg-indigo-500 hover:bg-indigo-800 hover:cursor-pointer '}   w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center `}
                        value='Confirmar Pedido'
                        disabled={comprobrarPedido()}
                    />

                </div>

            </form>

        </Layout>

    )
}
