import { IconArrowDown } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { GridPattern } from "./ui/grid-pattern";

export function Hero() {
	return (
		<section
			id="hero"
			className="relative overflow-hidden bg-gradient-to-r from-zinc-950 to-zinc-950/80 px-8 py-48 text-zinc-400"
		>
			<div className="mx-auto w-full max-w-6xl text-center">
				<div className="flex flex-col items-center gap-6 *:z-10">
					<h1 className="-mb-2 w-fit bg-gradient-to-b from-primary to-purple-400 bg-clip-text pb-2 font-extrabold font-manrope text-[16rem] text-transparent leading-none">
						Solufy
					</h1>

					<p className="max-w-4xl pl-0.5">
						Unleash your software's full potential with our expert development
						services. From custom web applications to scalable cloud solutions,
						we deliver innovative technology that drives your business forward.
					</p>

					<Button variant="secondary">
						Saiba mais <IconArrowDown className="ml-2 size-4 text-foreground" />
					</Button>
				</div>

				<GridPattern
					numSquares={30}
					maxOpacity={0.1}
					duration={3}
					className={cn(
						"[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
						"inset-x-0 inset-y-[-50%] h-[200%] opacity-50",
					)}
				/>
			</div>
		</section>
	);
}
