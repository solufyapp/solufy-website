import { IconMail, IconPhone } from "@tabler/icons-react";

export function Footer() {
	return (
		<footer className="flex w-full shrink-0 flex-col gap-4 border-t px-4 py-6 text-muted-foreground md:flex-row md:items-center md:px-6">
			<p className="text-xs">
				&copy; {new Date().getFullYear()} Solufy. Todos os direitos reservados.
			</p>
			<nav className="flex flex-col gap-1 sm:flex-row sm:gap-4 md:ml-auto">
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
