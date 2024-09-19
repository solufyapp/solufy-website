import Link from "next/link";

export default function PrivacyPolicyPage() {
	return (
		<main className="mx-5 py-24">
			<section className="prose mx-auto max-w-5xl">
				<h1>Política de Privacidade do App Solú+</h1>

				<p>Última atualização: 19/09/2024</p>

				<p>
					Esta Política de Privacidade descreve como coletamos, usamos,
					processamos e protegemos suas informações ao utilizar o aplicativo{" "}
					<strong>Solú+</strong>. Garantimos que seus dados pessoais serão
					tratados com segurança e transparência, em conformidade com a Lei
					Geral de Proteção de Dados (LGPD).
				</p>

				<ol>
					<li>
						<h2>Informações Coletadas</h2>

						<p>
							Ao utilizar o Solú+, coletamos informações necessárias para a
							operação e segurança do aplicativo:
						</p>

						<ul>
							<li>
								<strong>Vendedores:</strong> Coletamos nome, CPF, e-mail e
								telefone.
							</li>
							<li>
								<strong>Lojistas:</strong> Coletamos nome, CPF, e-mail, telefone
								e CNPJ da empresa.
							</li>
						</ul>

						<p>
							Esses dados são utilizados apenas para validação e autenticação de
							identidade no sistema, além de garantir a correta gestão de
							vendas, estoque e pedidos.
						</p>
					</li>

					<li>
						<h2>Uso das Informações</h2>

						<p>Os dados coletados são utilizados para os seguintes fins:</p>

						<ul>
							<li>
								Validação e autenticação de usuários (vendedores e lojistas).
							</li>
							<li>
								Gerenciamento e processamento de vendas, produtos, estoque e
								pedidos.
							</li>
							<li>Manutenção da segurança do aplicativo.</li>
						</ul>

						<p>
							Não utilizamos seus dados para fins de marketing ou compartilhamos
							suas informações com terceiros, exceto quando exigido por lei.
						</p>
					</li>

					<li>
						<h2>Armazenamento e Proteção dos Dados</h2>

						<p>
							Implementamos medidas de segurança para proteger suas informações
							contra acessos não autorizados, divulgação ou modificação
							indevida. Os dados coletados são armazenados em servidores seguros
							e utilizamos criptografia para garantir a proteção das
							informações.
						</p>
					</li>

					<li>
						<h2>Compartilhamento de Dados</h2>

						<p>
							Não compartilhamos seus dados pessoais com terceiros, a menos que
							seja necessário para cumprir obrigações legais ou regulatórias, ou
							mediante seu consentimento expresso.
						</p>
					</li>

					<li>
						<h2>Seus Direitos</h2>

						<p>Em conformidade com a LGPD, você tem o direito de:</p>

						<ul>
							<li>Acessar suas informações pessoais.</li>
							<li>Corrigir ou atualizar seus dados.</li>
							<li>
								Solicitar a exclusão de suas informações pessoais, caso não
								sejam mais necessárias para os fins descritos.{" "}
								<Link
									className="text-blue-500 visited:text-purple-500"
									href="/solumais/delete-account"
								>
									Saiba mais
								</Link>
							</li>
						</ul>
					</li>

					<li>
						<h2>Alterações na Política de Privacidade</h2>

						<p>
							Podemos atualizar esta Política de Privacidade periodicamente.
							Quaisquer alterações serão notificadas aos usuários por meio do
							aplicativo ou por e-mail, e a data da última atualização será
							ajustada no início desta página.
						</p>
					</li>

					<li>
						<h2>Contato</h2>

						<p>
							Se você tiver dúvidas sobre esta Política de Privacidade ou sobre
							o uso de seus dados, entre em contato conosco:
						</p>

						<ul>
							<li>E-mail: contato@solufy.app</li>
						</ul>
					</li>
				</ol>
			</section>
		</main>
	);
}
