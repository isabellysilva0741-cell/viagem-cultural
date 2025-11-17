import { Button } from "../../components/Button"
import { TextField } from "../../components/TextField"

export const SignInPage = () => {
    return (
        <main className="min-h-dvh grid place-items-center bg-blue-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"></div>
            <div className="w-full p-6 bg-blue-300 shadow-sm max-w-xl rounded-lg mx-auto"></div>

            <article className="text-center mb-12" >

                <h1 className="text-3xl font-bold text-slate-800">
                    BEM-VINDO A <br /> VIAGEM CULTURAL
                </h1>
            </article>
            <form>
                <TextField
                    label="Digite seu e-mail"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                />
                <TextField
                    label="Digite sua senha"
                    type="senha"
                    name="Senha"
                    id="senha"
                    placeholder="Digite sua senha"
                />
                <Button type="submit">
                    Entrar
                </Button>

            </form>


        </main>
    )
}