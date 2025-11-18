import { Button } from "../../components/Button"
import { TextField } from "../../components/TextField"

export const SignUpPage = () => {
    return (
        <main className="min-h-dvh  bg-blue-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="w-full p-6 bg-blue-200 shadow-sm max-w-xl rounded-lg mx-auto">
                    <article className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-blue-900">
                            BEM-VINDO A <br /> VIAGEM CULTURAL
                        </h1>
                    </article>

                    <form>
                        <TextField
                            label="Digite seu nome completo"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nome completo"
                        />
                        <TextField
                            label="Digite seu e-mail"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                        />
                        <TextField
                            label="Digite seu celular"
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder="Celular"
                        />
                        <TextField
                            label="Digite sua senha"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Senha"
                        />
                        <Button type="submit">
                            Entrar
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    )
}