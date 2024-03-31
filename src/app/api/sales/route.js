import { NextResponse } from 'next/server'
import { insertSale, selectSales } from '@/models/Sales'

export async function POST(req, res) {
	let data = await req.json();
	let result = await insertSale(data);
	return NextResponse.json({result});
}

export async function GET(req, res) {
	let result = await selectSales();
	return NextResponse.json({result});
}
