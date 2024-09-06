import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { GridPattern } from "./ui/grid-pattern";

export function Hero() {
	return (
		<section
			id="hero"
			className="relative bg-gradient-to-b from-transparent via-primary/10 to-transparent px-8 py-48"
		>
			<div className="mx-auto w-full max-w-6xl text-center">
				<div className="flex flex-col items-center gap-6 *:z-10">
					<h1 className="-mb-2 w-fit bg-gradient-to-b from-primary to-purple-400 bg-clip-text pb-2 font-extrabold font-manrope text-8xl text-transparent leading-none sm:text-9xl lg:text-[16rem]">
						Solufy
					</h1>

					<p className="max-w-xl text-balance pl-0.5 text-sm/relaxed text-zinc-600 md:text-lg/relaxed">
						Libere todo o potencial do seu negócio com nossos serviços de
						desenvolvimento especializado.
					</p>

					<Link href="#features" className={buttonVariants()}>
						Saiba mais
						<IconArrowDown className="ml-2 size-4 text-primary-foreground" />
					</Link>
				</div>

				<GridPattern
					numSquares={30}
					maxOpacity={0.1}
					duration={3}
					className={cn(
						"[mask-image:linear-gradient(transparent_25%,white,transparent_75%)]",
						"inset-x-0 inset-y-[-50%] h-[200%] opacity-70",
						"fill-primary/20 stroke-primary/20",
					)}
				/>
			</div>
		</section>
	);
}
