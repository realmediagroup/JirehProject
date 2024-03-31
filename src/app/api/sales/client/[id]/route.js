import { NextResponse } from 'next/server'
import { selectSaleClient } from '@/models/Sales'



export async function GET(req,{ params }) {
	let result = await selectSaleClient(params.id);
	return NextResponse.json({result});
}
