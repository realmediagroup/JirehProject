import { NextResponse } from 'next/server'
import { selectClientId, updateClient, deletetClientId } from '@/models/Clients';

export async function GET(req,{ params }) {
	const result = await selectClientId(params.id)
	return NextResponse.json({result});
}

export async function PUT(req, { params }) {
	const data = await req.json();
	const result = await updateClient(data,params.id)
	return NextResponse.json({result});
}

export async function DELETE(req,{ params }) {
	const result = await deletetClientId(params.id)
	return NextResponse.json({result});
}