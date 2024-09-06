import { IconMail, IconPhone } from "@tabler/icons-react";

export function Footer() {
	return (
		<footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 text-muted-foreground sm:flex-row md:px-6">
			<p className="text-xs">
				&copy; {new Date().getFullYear()} Solufy. Todos os direitos reservados.
			</p>
			<nav className="flex gap-4 sm:ml-auto sm:gap-6">
				<div className="flex items-center gap-2 text-xs">
					<span>48.856.248/0001-85</span>
				</div>
				<div className="flex items-center gap-2 text-xs">
					<IconMail className="size-4" />
					<span>contato@solufy.app</span>
				</div>
				<div className="flex items-center gap-2 text-xs">
					<IconPhone className="size-4" />
					<span>+55 (34) 99878-5110</span>
				</div>
			</nav>
		</footer>
	);
}
