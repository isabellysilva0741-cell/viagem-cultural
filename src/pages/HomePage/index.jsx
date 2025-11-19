import { Button } from "../../components/Button"
import { TextField } from "../../components/TextField"

export const HomePage = () => {
    return (
        <main className="min-h-dvh  bg-blue-300">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                <div className="max-w-full bg-blue-400 shadow-sm mx-auto">
                    <article className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-blue-900">
                            VIAGEM <br />CULTURAL
                        </h1>
                    </article>
                    <div className="font-medium h-1 " >
                        <h3>RECOMENDAÇÃO</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}