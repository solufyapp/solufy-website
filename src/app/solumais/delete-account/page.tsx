import Link from "next/link";

export default function DeleteAccountPage() {
	const waText = "Quero excluir a minha conta do app Solú+.";
	const waUrl = `https://wa.me/+5534998785110?text=${encodeURIComponent(waText)}`;

	return (
		<main className="mx-5 py-24">
			<section className="prose mx-auto max-w-5xl">
				<h1>Excluir minha conta no app Solú+</h1>

				<p>
					Entre em contato com o suporte pelo WhatsApp{" "}
					<Link className="text-blue-500" href={waUrl}>
						clicando aqui
					</Link>{" "}
					ou pelo endereço de e-mail <strong>contato@solufy.app</strong>.
				</p>

				<div>
					<h2>Etapas</h2>

					<ol>
						<li>
							Você deverá enviar o seu <strong>e-mail de acesso</strong> e{" "}
							<strong>CPF</strong> para validarmos a regularidade da sua conta.
						</li>
						<li>
							Em seguida, enviaremos um código para o seu e-mail ou número de
							telefone para verificarmos a posse da conta.
						</li>
						<li>
							Se tudo estiver correto, seu acesso ao app Solú+ será excluído.
						</li>
					</ol>
				</div>
			</section>
		</main>
	);
}
