import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function Header() {
	return (
		<header className="flex items-center justify-between px-6 py-3">
			<Link href="/">
				<Image
					src="/assets/logo-dark.svg"
					width={32}
					height={32}
					alt="Solufy logo"
				/>
			</Link>

			<nav>
				<ul>
					<li>
						<Link
							className={buttonVariants({ variant: "link" })}
							href="https://github.com/solufyapp"
						>
							Github
							<IconBrandGithub className="ml-1 size-4" />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
