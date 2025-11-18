import { Button } from "../../components/Button"
import { TextField } from "../../components/TextField"

export const HomePage = () => {
    return (
        <main className="min-h-dvh  bg-blue-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="w-full bg-blue-400 shadow-sm rounded-lg mx-auto">
                    <article className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-blue-900">
                            VIAGEM <br />CULTURAL
                        </h1>
                    </article>
                    <div className="place-content-start" >
                        <h3>RECOMENDAÇÃO</h3>
                    </div>
                    <h2>DESCUBRA</h2>
                    <h4>AVALIAÇÃO</h4>


                </div>
            </div>
        </main>
    )
}