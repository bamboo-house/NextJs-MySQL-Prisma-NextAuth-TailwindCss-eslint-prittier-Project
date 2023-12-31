import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return NextResponse.json({ data });
}

// export async function HEAD(request: Request) {}

export async function POST() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  const data = await res.json();

  return NextResponse.json({ data });
}

// export async function PUT(request: Request) {}

// export async function DELETE(request: Request) {}

// export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request: Request) {}
