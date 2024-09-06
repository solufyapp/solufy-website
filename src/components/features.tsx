export function Features() {
	const features = [
		{
			subtitle: "Nossa Especialidade",
			title: "Soluções inovadoras",
			description:
				"Nossa equipe de desenvolvedores qualificados é especializada em criar soluções de software personalizadas que impulsionam seu negócio para frente. De aplicativos da web a aplicativos móveis, aproveitamos as últimas tecnologias para entregar produtos de alto desempenho, escaláveis ​​e fáceis de usar.",
		},
		{
			subtitle: "Nossos Serviços",
			title: "Sob medida",
			description:
				"Quer você precise de um aplicativo complexo de nível empresarial ou de uma ferramenta simples, nossa equipe pode lidar com tudo. Trabalhamos em estreita parte com você para entender seus requisitos exclusivos e entregar soluções que excedem suas expectativas.",
		},
	];

	return (
		<section id="features" className="px-8 py-48">
			<div className="mx-auto w-full max-w-6xl">
				<div className="grid gap-12 lg:grid-cols-2">
					{features.map((feat) => (
						<div className="space-y-2" key={feat.title}>
							<div className="inline-block font-medium text-primary">
								{feat.subtitle}
							</div>
							<h2 className="font-bold text-3xl text-foreground tracking-tighter sm:text-4xl">
								{feat.title}
							</h2>
							<p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
								{feat.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
