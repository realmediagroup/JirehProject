import { NextResponse } from 'next/server'
import { insertClient, selectClients } from '@/models/Clients';

export async function GET(req, res) {
	const result = await selectClients()
	return NextResponse.json({result});
}

export async function POST(req, res) {
	const data = await req.json();
	const result = await insertClient(data)
	return NextResponse.json({result});
}

