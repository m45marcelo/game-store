export const runtime = "nodejs";
export const dynamic = "force-dynamic"; 

export async function GET(req: Request) {
	const { handlers } = await import("@/lib/auth");
	return handlers.GET(req);
}

export async function POST(req: Request) {
	const { handlers } = await import("@/lib/auth");
	return handlers.POST(req);
}
